import * as THREE from 'three';
export const SURT_TOWER_ASSET='Muspelheim_Surt_Tower.glb';
export const SURT_TOWER_POSITION={x:-315,z:-410};
export const SURT_TOWER_WIDTH=70;
export const SURT_TOWER_BASE_Y=40;
export const SURT_TOWER_CREDIT={title:'Medieval Stone Castle - Hunyuan 3D vs SupaVoxel',author:'Simon Schulz',url:'https://sketchfab.com/3d-models/medieval-stone-castle-hunyuan-3d-vs-supavoxel-7aa66054cf3c4bfdb6bf637cea0ba4d6'};
/** Hold the castle at Vicki's summit ledge height while the surrounding rock is arranged separately. */
export function createSurtTower(model:THREE.Object3D){
 const {x,z}=SURT_TOWER_POSITION;
 const root=new THREE.Group();root.name='Surt summit residence';
 model.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3()),scale=SURT_TOWER_WIDTH/size.x;
 if(!Number.isFinite(scale)||scale<=0)throw Error('Invalid Surt tower bounds');
 const floorY=SURT_TOWER_BASE_Y;
 const offset=new THREE.Group();offset.position.set(-center.x,-bounds.min.y,-center.z);offset.add(model);
 const fit=new THREE.Group();fit.scale.setScalar(scale);fit.add(offset);fit.position.set(x,floorY,z);root.add(fit);
 model.traverse(o=>{if(o instanceof THREE.Mesh){o.receiveShadow=true;o.castShadow=true;}});root.updateWorldMatrix(true,true);
 const buildingBounds=new THREE.Box3().setFromObject(fit);
 // Check the actual walls, leaving the courtyard available for walking.
 const ray=new THREE.Raycaster(),cache=new Map<string,boolean>();
 const wallBlocks=(px:number,pz:number,padding:number)=>{
  if(px<buildingBounds.min.x-padding||px>buildingBounds.max.x+padding||pz<buildingBounds.min.z-padding||pz>buildingBounds.max.z+padding)return false;
  const key=`${Math.round(px*2)},${Math.round(pz*2)},${padding}`;const saved=cache.get(key);if(saved!==undefined)return saved;
  let blocked=false;ray.near=0;ray.far=padding+.5;
  for(let i=0;i<8&&!blocked;i++){const a=i*Math.PI/4;ray.set(new THREE.Vector3(px,floorY+4,pz),new THREE.Vector3(Math.cos(a),0,Math.sin(a)));blocked=ray.intersectObject(fit,true).length>0;}
  if(cache.size>12000)cache.clear();cache.set(key,blocked);return blocked;
 };
 return {root,floorY,buildingBounds,blocks:(px:number,pz:number,padding=1.5)=>wallBlocks(px,pz,padding)};
}
