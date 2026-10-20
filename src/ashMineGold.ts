import * as THREE from 'three';
export const MINE_GOLD_FILES=['Ash_Mine_Gold_Bar.glb','Ash_Mine_Coins.glb'];
export const MINE_GOLD_POSITION={x:29,z:-343.5};
/** Bright gold remains legible in the cave without a reflection environment. */
export function mineGoldMaterial(source:THREE.Material){
 const material=source instanceof THREE.MeshStandardMaterial?source.clone():new THREE.MeshStandardMaterial();
 material.color.set('#ffd44f');material.map=null;material.vertexColors=false;
 material.metalness=.32;material.roughness=.3;material.metalnessMap=null;material.roughnessMap=null;material.aoMap=null;
 material.emissive.set('#e8ac22');material.emissiveIntensity=.28;material.emissiveMap=null;return material;
}
function pieces(source:THREE.Object3D){const meshes:THREE.Mesh[]=[];source.updateWorldMatrix(true,true);source.traverse(o=>{if(o instanceof THREE.Mesh){const materials=(Array.isArray(o.material)?o.material:[o.material]).map(mineGoldMaterial);const mesh=new THREE.Mesh(o.geometry.clone().applyMatrix4(o.matrixWorld),Array.isArray(o.material)?materials:materials[0]);meshes.push(mesh);}});return meshes;}
export function createMineGoldBars(source:THREE.Object3D,floorAt:(x:number,z:number)=>number){
 const root=new THREE.Group();root.name='Золотые слитки у синего кристалла';const baseY=floorAt(MINE_GOLD_POSITION.x,MINE_GOLD_POSITION.z);let tierHeight=0;
 // Two original copies form a broad foundation; the three added copies rise above it.
 for(const [dx,level,factor] of [[-1.8,0,1],[1.8,0,1],[0,1,1],[0,2,.95],[0,3,.9]]){
  const model=new THREE.Group();model.add(...pieces(source));const box=new THREE.Box3().setFromObject(model),center=box.getCenter(new THREE.Vector3()),size=box.getSize(new THREE.Vector3()),scale=3.6/size.x*factor;
  if(level===0)tierHeight=size.y*scale;model.position.set(-center.x,-box.min.y,-center.z);
  const stack=new THREE.Group();stack.add(model);stack.scale.setScalar(scale);stack.userData.level=level;
  const x=MINE_GOLD_POSITION.x+dx,z=MINE_GOLD_POSITION.z;
  const foundation=Math.max(floorAt(MINE_GOLD_POSITION.x-1.8,z),floorAt(MINE_GOLD_POSITION.x+1.8,z));
  stack.position.set(dx,(level===0?floorAt(x,z):foundation)+(level===3?2.95:level)*tierHeight-baseY+.05,0);root.add(stack);
 }
 return root;
}
/** Keep every vertex inside the wagon rim, with the high point in the middle. Coordinates are in the cart source space. */
export function createMineCoinHeap(source:THREE.Object3D){
 const root=new THREE.Group();root.name='Горка золотых монет внутри вагонетки';const meshes=pieces(source),box=new THREE.Box3();for(const m of meshes)box.union(new THREE.Box3().setFromObject(m));const size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
 for(const mesh of meshes){const p=mesh.geometry.getAttribute('position');for(let i=0;i<p.count;i++){
  const u=(p.getX(i)-center.x)/size.x*2,v=(p.getZ(i)-center.z)/size.z*2,relief=(p.getY(i)-box.min.y)/Math.max(.0001,size.y),hill=Math.max(0,1-u*u-v*v);
  p.setXYZ(i,u*.38,.96+relief*.065+hill*.28,v*.69);
 }mesh.geometry.computeVertexNormals();mesh.geometry.computeBoundingBox();mesh.geometry.computeBoundingSphere();root.add(mesh);}
 const bed=new THREE.SphereGeometry(1,32,12,0,Math.PI*2,0,Math.PI/2);bed.scale(.375,.255,.685);bed.translate(0,.955,0);const underlay=new THREE.Mesh(bed,mineGoldMaterial(new THREE.MeshStandardMaterial()));underlay.name='Сплошная золотая основа под монетами';root.add(underlay);
 return root;
}
export function removeCartGemFaces(geometry:THREE.BufferGeometry){
 const colors=geometry.getAttribute('color'),index=geometry.index;if(!colors||!index)return geometry;
 const indices:number[]=[];for(let i=0;i<index.count;i+=3){const triangle=[index.getX(i),index.getX(i+1),index.getX(i+2)],gem=triangle.some(j=>colors.getY(j)>colors.getX(j)*1.25&&colors.getY(j)>colors.getZ(j)*1.3);if(!gem)indices.push(...triangle);}
 geometry.setIndex(indices);geometry.computeBoundingBox();geometry.computeBoundingSphere();return geometry;
}
