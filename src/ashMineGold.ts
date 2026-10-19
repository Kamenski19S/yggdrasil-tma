import * as THREE from 'three';
export const MINE_GOLD_FILES=['Ash_Mine_Gold_Bar.glb','Ash_Mine_Coins.glb'];
export const MINE_GOLD_POSITION={x:28,z:-350};
/** Bake the supplied model's transforms once, preserving its authored materials and textures. */
function pieces(source:THREE.Object3D){const meshes:THREE.Mesh[]=[];source.updateWorldMatrix(true,true);source.traverse(o=>{if(o instanceof THREE.Mesh){const mesh=new THREE.Mesh(o.geometry.clone().applyMatrix4(o.matrixWorld),o.material);meshes.push(mesh);}});return meshes;}
export function createMineGoldBars(source:THREE.Object3D,floorAt:(x:number,z:number)=>number){
 const root=new THREE.Group();root.name='Золотые слитки у синего кристалла';
 for(const [dx,dz,angle] of [[-2,-.7,-.08],[2,.7,.12]]){
  const model=new THREE.Group();model.add(...pieces(source));const box=new THREE.Box3().setFromObject(model),center=box.getCenter(new THREE.Vector3()),size=box.getSize(new THREE.Vector3()),scale=3.6/size.x;
  model.position.set(-center.x,-box.min.y,-center.z);const stack=new THREE.Group();stack.add(model);stack.scale.setScalar(scale);stack.rotation.y=angle;
  const x=MINE_GOLD_POSITION.x+dx,z=MINE_GOLD_POSITION.z+dz;stack.position.set(x,floorAt(x,z)-floorAt(MINE_GOLD_POSITION.x,MINE_GOLD_POSITION.z)+.04,z);stack.position.x-=MINE_GOLD_POSITION.x;stack.position.z-=MINE_GOLD_POSITION.z;root.add(stack);
 }
 return root;
}
/** Keep every vertex inside the wagon rim, with the high point in the middle. Coordinates are in the cart source space. */
export function createMineCoinHeap(source:THREE.Object3D){
 const root=new THREE.Group();root.name='Горка золотых монет внутри вагонетки';const meshes=pieces(source),box=new THREE.Box3();for(const m of meshes)box.union(new THREE.Box3().setFromObject(m));const size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
 for(const mesh of meshes){const p=mesh.geometry.getAttribute('position');for(let i=0;i<p.count;i++){
  const u=(p.getX(i)-center.x)/size.x*2,v=(p.getZ(i)-center.z)/size.z*2,relief=(p.getY(i)-box.min.y)/Math.max(.0001,size.y),hill=Math.max(0,1-u*u-v*v);
  p.setXYZ(i,u*.35,.93+relief*.04+hill*.21,v*.63);
 }mesh.geometry.computeVertexNormals();mesh.geometry.computeBoundingBox();mesh.geometry.computeBoundingSphere();root.add(mesh);}
 return root;
}
export function removeCartGemFaces(geometry:THREE.BufferGeometry){
 const colors=geometry.getAttribute('color'),index=geometry.index;if(!colors||!index)return geometry;
 const indices:number[]=[];for(let i=0;i<index.count;i+=3){const triangle=[index.getX(i),index.getX(i+1),index.getX(i+2)],gem=triangle.every(j=>colors.getY(j)>.5&&colors.getY(j)>colors.getX(j)*1.3);if(!gem)indices.push(...triangle);}
 geometry.setIndex(indices);geometry.computeBoundingBox();geometry.computeBoundingSphere();return geometry;
}
