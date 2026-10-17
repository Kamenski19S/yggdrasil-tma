import * as THREE from 'three';
export const SURT_TOWER_ASSET='Muspelheim_Surt_Tower.glb';
export const SURT_TOWER_POSITION={x:-315,z:-395};
export const SURT_TOWER_WIDTH=70;
export const SURT_TOWER_CREDIT={title:'Medieval Stone Castle - Hunyuan 3D vs SupaVoxel',author:'Simon Schulz',url:'https://sketchfab.com/3d-models/medieval-stone-castle-hunyuan-3d-vs-supavoxel-7aa66054cf3c4bfdb6bf637cea0ba4d6'};
/** Seat the castle at the front approach height, leaving the natural volcanic slope exposed. */
export function createSurtTower(model:THREE.Object3D,sample:(x:number,z:number)=>number|null){
 const {x,z}=SURT_TOWER_POSITION;
 const root=new THREE.Group();root.name='Surt summit residence';
 model.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3()),scale=SURT_TOWER_WIDTH/size.x;
 if(!Number.isFinite(scale)||scale<=0)throw Error('Invalid Surt tower bounds');
 const approachZ=z+size.z*scale/2;
 const floorY=Math.max(0,sample(x,approachZ)??sample(x,z)??0);
 const offset=new THREE.Group();offset.position.set(-center.x,-bounds.min.y,-center.z);offset.add(model);
 const fit=new THREE.Group();fit.scale.setScalar(scale);fit.add(offset);fit.position.set(x,floorY-.3,z);root.add(fit);
 model.traverse(o=>{if(o instanceof THREE.Mesh){o.receiveShadow=true;o.castShadow=true;}});root.updateWorldMatrix(true,true);
 const buildingBounds=new THREE.Box3().setFromObject(fit);
 return {root,floorY,buildingBounds,
  blocks:(px:number,pz:number,padding=1.5)=>px>buildingBounds.min.x-padding&&px<buildingBounds.max.x+padding&&pz>buildingBounds.min.z-padding&&pz<buildingBounds.max.z+padding,
 };
}
