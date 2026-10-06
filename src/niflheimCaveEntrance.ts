import * as THREE from 'three';
import {addEntrancePowder} from './niflheimEntrancePowder';

export const CAVE_FRONT_Z=9;
export const CAVE_MOUTH_X=-1.1;
export const CAVE_FLOOR_Y=5.825;

// Cut triangles at the entrance plane, interpolating normals and UVs at the rim.
export function trimCaveFront(source:THREE.BufferGeometry){
  const g=source.index?source.toNonIndexed():source.clone();
  const names=Object.keys(g.attributes),outputs:Record<string,number[]>={};
  names.forEach(n=>outputs[n]=[]);
  type Vertex=Record<string,number[]>;
  const read=(i:number):Vertex=>Object.fromEntries(names.map(n=>{
    const a=g.getAttribute(n);return[n,Array.from({length:a.itemSize},(_,k)=>a.getComponent(i,k))];
  }));
  const interpolate=(a:Vertex,b:Vertex):Vertex=>{
    const t=(CAVE_FRONT_Z-a.position[2])/(b.position[2]-a.position[2]);
    return Object.fromEntries(names.map(n=>[n,a[n].map((v,k)=>v+(b[n][k]-v)*t)]));
  };
  for(let i=0;i<g.getAttribute('position').count;i+=3){
    const triangle=[read(i),read(i+1),read(i+2)],polygon:Vertex[]=[];
    for(let j=0;j<3;j++){
      const a=triangle[j],b=triangle[(j+1)%3],insideA=a.position[2]<=CAVE_FRONT_Z,insideB=b.position[2]<=CAVE_FRONT_Z;
      if(insideA)polygon.push(a);
      if(insideA!==insideB)polygon.push(interpolate(a,b));
    }
    for(let j=1;j<polygon.length-1;j++)for(const v of [polygon[0],polygon[j],polygon[j+1]])for(const n of names)outputs[n].push(...v[n]);
  }
  const result=new THREE.BufferGeometry();
  for(const n of names)result.setAttribute(n,new THREE.Float32BufferAttribute(outputs[n],g.getAttribute(n).itemSize));
  result.normalizeNormals();result.computeBoundingBox();result.computeBoundingSphere();g.dispose();return result;
}

export function reshapeCaveEntrance(model:THREE.Object3D,stone:THREE.MeshStandardMaterial){
  model.traverse((o:any)=>{if(o.isMesh){const old=o.geometry;o.geometry=createCaveHallGeometry();old.dispose();}});
  const frame=new THREE.Group();frame.name='Three monolith entrance';
  // Match the asymmetric cut rim, whose centre lies left of the mesh origin.
  frame.position.x=CAVE_MOUTH_X;
  const rock=stone.clone();rock.name='floor';rock.color.set('#87949b');rock.roughness=1;
  const geometry=new THREE.DodecahedronGeometry(1,1);
  const add=(x:number,y:number,z:number,sx:number,sy:number,sz:number,tilt:number)=>{
    const block=new THREE.Mesh(geometry,rock);block.position.set(x,y,z);block.scale.set(sx,sy,sz);block.rotation.z=tilt;block.castShadow=true;block.receiveShadow=true;frame.add(block);
  };
  add(-4.9,11.7,CAVE_FRONT_Z-.65,2.6,7.2,2.6,-.055);
  add(4.9,11.7,CAVE_FRONT_Z-.65,2.6,7.2,2.6,.06);
  add(0,18,CAVE_FRONT_Z-.65,8.2,2.5,3.1,-.025);
  addEntrancePowder(frame);rock.dispose();model.add(frame);
}

export const CAVE_BACK_Z=-18;
export const CAVE_SCALE=1.25;
export const caveHalfWidth=(z:number)=>{
  const t=THREE.MathUtils.clamp((CAVE_FRONT_Z-z)/9,0,1);
  return 3.5+5.5*t*t*(3-2*t);
};
export const caveHeight=(z:number)=>12+5*Math.sin(THREE.MathUtils.clamp((CAVE_FRONT_Z-z)/(CAVE_FRONT_Z-CAVE_BACK_Z),0,1)*Math.PI);

export function createCaveHallGeometry(){
  const positions:number[]=[],uv:number[]=[],indices:number[]=[];
  const depthSteps=54,archSteps=32;
  // Separate inner and outer shells make a real vaulted room, with a thick rim.
  for(let layer=0;layer<2;layer++)for(let i=0;i<=depthSteps;i++){
    const z=CAVE_FRONT_Z+(CAVE_BACK_Z-CAVE_FRONT_Z)*i/depthSteps;
    for(let j=0;j<=archSteps;j++){
      const a=j/archSteps*Math.PI,r=caveHalfWidth(z)+layer*1.1;
      const variation=Math.sin(i*.7+j*.8)*Math.sin(a)*.12*Math.sin(Math.PI*i/depthSteps);
      positions.push(CAVE_MOUTH_X+(r+variation)*Math.cos(a),CAVE_FLOOR_Y+(caveHeight(z)+layer*1.1+variation)*Math.sin(a),z);
      uv.push(.12+.52*j/archSteps,.12+.55*i/depthSteps);
      if(i<depthSteps&&j<archSteps){
        const k=layer*(depthSteps+1)*(archSteps+1)+i*(archSteps+1)+j;
        const faces=[k,k+1,k+archSteps+1,k+1,k+archSteps+2,k+archSteps+1];
        indices.push(...(layer?faces.reverse():faces));
      }
    }
  }
  const shell=(depthSteps+1)*(archSteps+1);
  // Close the front rim and back; leave the front arch completely open.
  for(let j=0;j<archSteps;j++)indices.push(j,j+shell,j+1,j+1,j+shell,j+shell+1);
  const backCentre=positions.length/3;
  positions.push(CAVE_MOUTH_X,CAVE_FLOOR_Y,CAVE_BACK_Z);uv.push(.35,.6);
  const end=depthSteps*(archSteps+1);
  for(let j=0;j<archSteps;j++)indices.push(backCentre,end+j,end+j+1);
  const outerBackCentre=positions.length/3;
  positions.push(CAVE_MOUTH_X,CAVE_FLOOR_Y,CAVE_BACK_Z);uv.push(.35,.6);
  for(let j=0;j<archSteps;j++)indices.push(outerBackCentre,shell+end+j+1,shell+end+j);
  const floor=positions.length/3;
  for(let i=0;i<=depthSteps;i++){
    const z=CAVE_FRONT_Z+(CAVE_BACK_Z-CAVE_FRONT_Z)*i/depthSteps,w=caveHalfWidth(z);
    positions.push(CAVE_MOUTH_X-w,CAVE_FLOOR_Y,z,CAVE_MOUTH_X+w,CAVE_FLOOR_Y,z);
    uv.push(.15,.15+.5*i/depthSteps,.65,.15+.5*i/depthSteps);
    if(i<depthSteps){const k=floor+i*2;indices.push(k,k+1,k+2,k+1,k+3,k+2);}
  }
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();g.computeBoundingBox();g.computeBoundingSphere();return g;
}

export function createCaveSpace(model:THREE.Object3D){
  model.updateMatrixWorld(true);
  const inverse=model.matrixWorld.clone().invert(),floor=new THREE.Vector3(0,CAVE_FLOOR_Y,0).applyMatrix4(model.matrixWorld).y;
  const local=(x:number,z:number)=>new THREE.Vector3(x,floor,z).applyMatrix4(inverse);
  const world=(x:number,y:number,z:number)=>new THREE.Vector3(x,y,z).applyMatrix4(model.matrixWorld);
  const inside=(x:number,z:number)=>{const p=local(x,z);return p.z<=CAVE_FRONT_Z&&p.z>=CAVE_BACK_Z&&Math.abs(p.x-CAVE_MOUTH_X)<caveHalfWidth(p.z);};
  const blocked=(x:number,z:number)=>{
    const p=local(x,z),dx=Math.abs(p.x-CAVE_MOUTH_X),radius=.65/CAVE_SCALE;
    // Tall stone uprights: keep their full footprint solid, including the taper.
    for(const side of [-1,1])if(Math.abs(p.x-(CAVE_MOUTH_X+side*4.9))<2.7+radius&&Math.abs(p.z-(CAVE_FRONT_Z-.65))<2.65+radius)return true;
    if(p.z>CAVE_FRONT_Z+.2+radius||p.z<CAVE_BACK_Z-1.1-radius)return false;
    const width=caveHalfWidth(p.z);
    const headroom=width*Math.sqrt(Math.max(0,1-(5.4/caveHeight(p.z))**2));
    if(p.z<CAVE_BACK_Z+radius)return dx<width+1.1+radius;
    return dx>headroom-radius&&dx<width+1.1+radius;
  };
  const move=(from:{x:number;z:number},to:{x:number;z:number})=>{
    const steps=Math.max(1,Math.ceil(Math.hypot(to.x-from.x,to.z-from.z)/.15));
    let p={...from};const dx=(to.x-from.x)/steps,dz=(to.z-from.z)/steps;
    for(let i=0;i<steps;i++){
      const next={x:p.x+dx,z:p.z+dz};
      if(!blocked(next.x,next.z)){p=next;continue;}
      const a={x:next.x,z:p.z},b={x:p.x,z:next.z};
      if(!blocked(a.x,a.z))p=a;else if(!blocked(b.x,b.z))p=b;
    }
    return p;
  };
  return {inside,blocked,move,local,world,floor,groundY(x:number,z:number){return inside(x,z)?floor:undefined;},camera(x:number,z:number){
    const p=local(x,z),cameraZ=Math.min(CAVE_FRONT_Z+6,p.z+10),limit=cameraZ>3?1.3:caveHalfWidth(cameraZ)*.7;
    return world(CAVE_MOUTH_X+THREE.MathUtils.clamp(p.x-CAVE_MOUTH_X,-limit,limit),CAVE_FLOOR_Y+7,cameraZ);
  }};
}
