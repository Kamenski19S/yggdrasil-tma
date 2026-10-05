import * as THREE from 'three';

// Short ice curtains fill only the three gaps in the broken oval frame.
// Coordinates follow the fitted Stone Portal; the central walking opening stays clear.
export const ENTRANCE_ICE_JOINTS=[
  {x:-4.95,y:6.2,width:2.6,height:1.75,angle:Math.PI*.28},
  {x:0,y:9.3,width:2.5,height:1.9,angle:0},
  {x:3.95,y:7.05,width:2.65,height:1.8,angle:-Math.PI*.29},
];

export function addEntranceIce(scene:THREE.Scene,iceAsset:THREE.Object3D,snowAsset:THREE.Object3D,groundY:number){
  const bounds=new THREE.Box3().setFromObject(iceAsset),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
  const snowPieces:THREE.Mesh[]=[];snowAsset.traverse((o:any)=>{if(o.isMesh)snowPieces.push(o);});
  if(!snowPieces.length)return;
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
    // A deeper snow cap covers the ice base up to the full depth of the stone frame.
    const source=snowPieces[(i*3)%snowPieces.length],snowBounds=new THREE.Box3().setFromObject(source),snowSize=snowBounds.getSize(new THREE.Vector3());
    const snow=new THREE.Mesh(source.geometry,source.material);snow.name='Snow above ice';
    snow.scale.set((joint.width+.9)/snowSize.x,.55/snowSize.y,3.5/snowSize.z);
    const snowCenter=snowBounds.getCenter(new THREE.Vector3());
    snow.position.set(-snowCenter.x*snow.scale.x,-snowBounds.min.y*snow.scale.y-.12,-snowCenter.z*snow.scale.z);
    group.add(snow);scene.add(group);
  }
}
