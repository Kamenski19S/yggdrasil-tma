import * as THREE from 'three';
import {ENTRANCE_ICE_JOINTS} from './niflheimEntranceIce';

// One rounded snow mantle follows the outer rim, including the icy joints.
// Its thin edges sink into the stone instead of hovering as separate roof plates.
export function addEntranceSnow(frame:THREE.Object3D,scene:THREE.Scene,groundY:number){
  const middle=new THREE.Vector3(0,3.6+groundY,130),ray=new THREE.Raycaster();
  const count=96,depthSteps=20,angles:number[]=[],radii:(number|undefined)[]=[];
  frame.updateMatrixWorld(true);
  for(let i=0;i<=count;i++){
    const angle=Math.PI*(.27+.46*i/count),outward=new THREE.Vector3(Math.cos(angle),Math.sin(angle),0);
    angles.push(angle);ray.set(middle.clone().addScaledVector(outward,9),outward.clone().negate());
    const hit=ray.intersectObject(frame,true).find(h=>{
      const material=(h.object as THREE.Mesh).material;
      return !Array.isArray(material)&&material?.name==='floor';
    });
    radii.push(hit?hit.point.distanceTo(middle):undefined);
  }
  if(!radii.some(r=>r!==undefined))return;
  // Interpolate the small breaks in the stone frame so the cover stays connected.
  const filled=radii.map((r,i)=>{
    if(r!==undefined)return r;
    let left=i-1,right=i+1;while(left>=0&&radii[left]===undefined)left--;while(right<=count&&radii[right]===undefined)right++;
    if(left<0)return radii[right]!;if(right>count)return radii[left]!;
    return radii[left]!+(radii[right]!-radii[left]!)*(i-left)/(right-left);
  });
  const smooth=filled.map((r,i)=>{
    const angle=angles[i],envelope=1/Math.hypot(Math.cos(angle)/6.4,Math.sin(angle)/5.72);
    // Ignore hits on an exposed inner face at a broken shoulder: those turn
    // the mantle inward into the large triangular sheets seen beside the ice.
    const sampled=(filled[Math.max(0,i-1)]+filled[Math.min(count,i+1)])*.15+r*.7;
    return Math.max(envelope-.12,Math.min(envelope+.12,sampled));
  });
  const vertices:number[]=[],indices:number[]=[];
  for(let layer=0;layer<2;layer++)for(let i=0;i<=count;i++)for(let j=0;j<=depthSteps;j++){
    const angle=angles[i],v=j/depthSteps,t=i/count;
    const edge=Math.pow(Math.sin(Math.PI*v),.8)*Math.pow(Math.sin(Math.PI*t),.35);
    const drift=.42*(1+.12*Math.sin(angle*7))*edge;
    const radius=smooth[i]+(layer===0?drift-.08:-.28);
    vertices.push(middle.x+Math.cos(angle)*radius,middle.y+Math.sin(angle)*radius,130+(v-.5)*3.25);
  }
  const row=depthSteps+1,layerSize=(count+1)*row;
  for(let i=0;i<count;i++)for(let j=0;j<depthSteps;j++){
    const a=i*row+j,b=a+row;
    indices.push(a,a+1,b,a+1,b+1,b);
    indices.push(a+layerSize,b+layerSize,a+1+layerSize,a+1+layerSize,b+layerSize,b+1+layerSize);
  }
  // Close both depth edges and both ends of the blanket.
  const close=(a:number,b:number)=>indices.push(a,b,a+layerSize,b,b+layerSize,a+layerSize);
  for(let i=0;i<count;i++){close(i*row,(i+1)*row);close(i*row+depthSteps,(i+1)*row+depthSteps);}
  for(let j=0;j<depthSteps;j++){close(j,j+1);close(count*row+j,count*row+j+1);}
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setIndex(indices);geometry.computeVertexNormals();
  const mantle=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color:'#e5f1f7',roughness:1,side:THREE.DoubleSide}));
  mantle.name='Continuous rounded entrance snow';scene.add(mantle);
  // Separate round drifts cover the side ice bases. Ray hits on the broken side
  // stones can jump to the inner face and form a triangular hanging sheet.
  const capGeometry=new THREE.SphereGeometry(1,40,24);
  for(const joint of [ENTRANCE_ICE_JOINTS[0],ENTRANCE_ICE_JOINTS[2]]){
    const cap=new THREE.Mesh(capGeometry,mantle.material);
    cap.name='Rounded snow over side ice';
    cap.scale.set((joint.width+1.9)/2,.48,1.66);
    cap.position.set(joint.x,joint.y+groundY+.04,130);
    cap.rotation.z=joint.angle;scene.add(cap);
  }
}
