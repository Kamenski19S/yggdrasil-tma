import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {BASE,cachedGlbBuffer} from './core';
import {NIFL_RIVERS,niflGroundY} from './niflheimMapData';
import profile from './niflheimVenetianProfile.json';

export function createVenetianBridges(scene:THREE.Scene,onReady:()=>void){
  const length=18,width=10,heightScale=.026;
  const river=NIFL_RIVERS[1];let alive=true;
  const bridges=[16,-83].map((z,index)=>{
    const i=river.reduce((best,p,k)=>Math.abs(p.z-z)<Math.abs(river[best].z-z)?k:best,0),p=river[i],a=river[Math.max(0,i-1)],b=river[Math.min(river.length-1,i+1)];
    const tangent=new THREE.Vector2(b.x-a.x,b.z-a.z).normalize(),normal=new THREE.Vector2(tangent.y,-tangent.x);
    const root=new THREE.Group();root.name=index===0?'Белый мост к ледяному дому':'Белый мост на пути к башне';root.position.set(p.x,0,p.z);root.rotation.y=Math.atan2(normal.x,normal.y);scene.add(root);root.updateMatrixWorld(true);
    const start=root.localToWorld(new THREE.Vector3(0,0,-length/2)),end=root.localToWorld(new THREE.Vector3(0,0,length/2));
    const near=niflGroundY(start.x,start.z)+.06,far=niflGroundY(end.x,end.z)+.06;
    const sample=(t:number)=>{const at=THREE.MathUtils.clamp(t,0,1)*(profile.heights.length-1),i=Math.min(profile.heights.length-2,Math.floor(at));return THREE.MathUtils.lerp(profile.heights[i],profile.heights[i+1],at-i);};
    const baseline=(t:number)=>THREE.MathUtils.lerp(profile.heights[0],profile.heights[profile.heights.length-1],t);
    const ground=(t:number)=>(sample(t)-baseline(t))*heightScale+THREE.MathUtils.lerp(near,far,t);
    const point=new THREE.Vector3();
    const local=(x:number,z:number)=>root.worldToLocal(point.set(x,0,z));
    return {root,baseline,ground,near,far,
      groundY(x:number,z:number){const p=local(x,z);return Math.abs(p.x)<2.15&&Math.abs(p.z)<=length/2+.001?ground(THREE.MathUtils.clamp((p.z+length/2)/length,0,1)):undefined;},
      blocked(x:number,z:number){const p=local(x,z);return Math.abs(p.z)<length/2-.2&&Math.abs(p.x)>2.05&&Math.abs(p.x)<width/2+.3;}
    };
  });
  cachedGlbBuffer(`${BASE}img/models/Niflheim_Venetian_Bridge.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{
    if(!alive){asset.scene.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){(m as THREE.MeshStandardMaterial).map?.dispose();m.dispose();}}});return;}
    asset.scene.traverse(o=>{if(!(o instanceof THREE.Mesh))return;
      for(const bridge of bridges){const geometry=o.geometry.clone(),p=geometry.getAttribute('position');
        for(let i=0;i<p.count;i++){
          const t=(p.getX(i)-profile.min[0])/(profile.max[0]-profile.min[0]);
          p.setXYZ(i,p.getZ(i)/(profile.max[2]-profile.min[2])*width,(p.getY(i)-bridge.baseline(t))*heightScale+THREE.MathUtils.lerp(bridge.near,bridge.far,t),(t-.5)*length);
        }
        p.needsUpdate=true;geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();
        const mesh=new THREE.Mesh(geometry,o.material);mesh.castShadow=true;mesh.receiveShadow=true;bridge.root.add(mesh);
      }o.geometry.dispose();
    });onReady();
  }).catch(()=>{});
  return {
    groundY(x:number,z:number){for(const b of bridges){const y=b.groundY(x,z);if(y!==undefined)return y;}return undefined;},
    terrainY(x:number,z:number){const y=this.groundY(x,z);return y===undefined?undefined:Math.min(niflGroundY(x,z),y-.1);},
    blocked(x:number,z:number){return bridges.some(b=>b.blocked(x,z));},
    dispose(){alive=false;}
  };
}
