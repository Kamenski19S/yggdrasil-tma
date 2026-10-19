import * as THREE from 'three';
export const MINE_CART_POSITION={x:24.084,z:-280};
// Measured wheel centres in the provided model and rail-head centres in Digital Goblin's module.
export const MINE_CART_WHEEL_GAUGE=.6790305,MINE_TRACK_GAUGE=3.3238368;
export function createMineGemCart(source:THREE.Object3D,floorAt:(x:number,z:number)=>number){
 const root=new THREE.Group();root.name='Вагонетка Mine Cart Gem — Xillute | Dev';source.updateMatrixWorld(true);
 const model=new THREE.Group();source.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const mesh=o.clone();mesh.geometry=o.geometry.clone().applyMatrix4(o.matrixWorld);mesh.position.set(0,0,0);mesh.rotation.set(0,0,0);mesh.scale.set(1,1,1);mesh.updateMatrix();model.add(mesh);});
 const bounds=new THREE.Box3().setFromObject(model),scale=MINE_TRACK_GAUGE/MINE_CART_WHEEL_GAUGE;
 model.position.set(0,-bounds.min.y,-.0026075);const sized=new THREE.Group();sized.scale.setScalar(scale);sized.add(model);root.add(sized);root.rotation.y=Math.PI;
 root.position.set(MINE_CART_POSITION.x,floorAt(MINE_CART_POSITION.x,MINE_CART_POSITION.z)+.89913,MINE_CART_POSITION.z);root.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(root),solids=box.clone().expandByVector(new THREE.Vector3(1.8,0,1.8));
 return {root,scale,gauge:MINE_CART_WHEEL_GAUGE*scale,bounds:box,blocks:(x:number,z:number)=>x>solids.min.x&&x<solids.max.x&&z>solids.min.z&&z<solids.max.z};
}
