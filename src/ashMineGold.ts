import * as THREE from 'three';
export const MINE_GOLD_FILES=['Ash_Mine_Ingot.glb','Ash_Mine_Coins_New.glb'];
export const MINE_GOLD_POSITION={x:29,z:-343.5};
/** Preserve the supplied materials, textures and shape. Only bake their authored transforms. */
function pieces(source:THREE.Object3D,turn=0){const meshes:THREE.Mesh[]=[];source.updateWorldMatrix(true,true);const rotation=new THREE.Matrix4().makeRotationY(turn);source.traverse(o=>{if(o instanceof THREE.Mesh){const materials=(Array.isArray(o.material)?o.material:[o.material]).map(m=>m.clone());const mesh=new THREE.Mesh(o.geometry.clone().applyMatrix4(o.matrixWorld).applyMatrix4(rotation),Array.isArray(o.material)?materials:materials[0]);meshes.push(mesh);}});return meshes;}
export function createMineGoldBars(source:THREE.Object3D,floorAt:(x:number,z:number)=>number){
 const root=new THREE.Group();root.name='Пирамида слитков — пять, четыре, три';const template=new THREE.Group();template.add(...pieces(source,Math.PI/2));const box=new THREE.Box3().setFromObject(template),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3()),scale=1.4/size.x,height=size.y*scale,spacing=1.46,baseY=floorAt(MINE_GOLD_POSITION.x,MINE_GOLD_POSITION.z);
 const levels:number[][]=[];
 for(let row=0;row<3;row++){
  const count=5-row;levels[row]=[];
  for(let column=0;column<count;column++){
   const x=(column-(count-1)/2)*spacing;
   // Each upper bar spans two lower bars; its bottom touches the higher support.
   const bottom=row===0?floorAt(MINE_GOLD_POSITION.x+x,MINE_GOLD_POSITION.z)-baseY+.05:Math.max(levels[row-1][column],levels[row-1][column+1])+height;
   levels[row].push(bottom);const model=template.clone(true);model.position.set(-center.x,-box.min.y,-center.z);const bar=new THREE.Group();bar.name='Слиток '+(row+1)+'-'+(column+1);bar.userData.level=row;bar.add(model);bar.scale.setScalar(scale);bar.position.set(x,bottom,0);root.add(bar);
  }
 }
 return root;
}
/** Uniformly scaled copies retain the actual coin relief; no deformed geometry or solid filler. */
export function createMineCoinHeap(source:THREE.Object3D){
 const root=new THREE.Group();root.name='Объёмные монеты Coins!!! в вагонетке';const template=new THREE.Group();template.add(...pieces(source));const box=new THREE.Box3().setFromObject(template),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
 for(const [z,width,y,turn] of [[-.31,.74,.92,0],[.31,.74,.92,Math.PI],[0,.61,1.02,Math.PI/2]]){
  const model=template.clone(true);model.position.set(-center.x,-box.min.y,-center.z);const pile=new THREE.Group();pile.name='Исходная объёмная россыпь монет';pile.add(model);pile.scale.setScalar(width/size.x);pile.rotation.y=turn;pile.position.set(0,y,z);root.add(pile);
 }
 return root;
}
export function removeCartGemFaces(geometry:THREE.BufferGeometry){
 const colors=geometry.getAttribute('color'),index=geometry.index;if(!colors||!index)return geometry;
 const indices:number[]=[];for(let i=0;i<index.count;i+=3){const triangle=[index.getX(i),index.getX(i+1),index.getX(i+2)],gem=triangle.some(j=>colors.getY(j)>colors.getX(j)*1.25&&colors.getY(j)>colors.getZ(j)*1.3);if(!gem)indices.push(...triangle);}
 geometry.setIndex(indices);geometry.computeBoundingBox();geometry.computeBoundingSphere();return geometry;
}
