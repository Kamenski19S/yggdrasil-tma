import * as THREE from 'three';

// Short ice curtains fill only the three gaps in the broken oval frame.
// Coordinates follow the fitted Stone Portal; the central walking opening stays clear.
export const ENTRANCE_ICE_JOINTS=[
  {x:-4.95,y:6.2,width:2.6,height:1.75,angle:Math.PI*.28},
  {x:0,y:9.3,width:2.5,height:1.9,angle:0},
  {x:3.95,y:7.05,width:2.65,height:1.8,angle:-Math.PI*.29},
];

export function addEntranceIce(scene:THREE.Scene,iceAsset:THREE.Object3D,groundY:number){
  const bounds=new THREE.Box3().setFromObject(iceAsset),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
  const sharedIce=new Map<THREE.Material,THREE.Material>();
  for(let i=0;i<ENTRANCE_ICE_JOINTS.length;i++){
    const joint=ENTRANCE_ICE_JOINTS[i],group=new THREE.Group();group.name=`Entrance ice joint ${i+1}`;
    group.position.set(joint.x,joint.y+groundY,130);group.rotation.z=joint.angle;
    const curtain=iceAsset.clone(true);
    curtain.scale.set(joint.width/size.x,joint.height/size.y,1.1/size.z);
    curtain.position.set(-center.x*curtain.scale.x,-bounds.max.y*curtain.scale.y,-center.z*curtain.scale.z);
    curtain.traverse((o:any)=>{
      if(!o.isMesh)return;
      const tune=(m:THREE.Material)=>{
        if(sharedIce.has(m))return sharedIce.get(m)!;
        const ice=m.clone();if(ice instanceof THREE.MeshStandardMaterial){ice.color.set('#d3f2ff');ice.roughness=.28;ice.metalness=.08;}
        sharedIce.set(m,ice);return ice;
      };
      o.material=Array.isArray(o.material)?o.material.map(tune):tune(o.material);
    });
    group.add(curtain);
    // The continuous mantle in addEntranceSnow covers these ice bases too.
    scene.add(group);
  }
}
