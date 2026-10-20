import * as THREE from 'three';
export const MINE_GOLD_FILES=['Ash_Mine_Ingot.glb','Ash_Mine_Coins_New.glb'];
export const MINE_GOLD_POSITION={x:28,z:-345.5};
/** Preserve the supplied materials, textures and shape. Only bake their authored transforms. */
function pieces(source:THREE.Object3D,turn=0){const meshes:THREE.Mesh[]=[];source.updateWorldMatrix(true,true);const rotation=new THREE.Matrix4().makeRotationY(turn);source.traverse(o=>{if(o instanceof THREE.Mesh){const materials=(Array.isArray(o.material)?o.material:[o.material]).map(m=>m.clone());const mesh=new THREE.Mesh(o.geometry.clone().applyMatrix4(o.matrixWorld).applyMatrix4(rotation),Array.isArray(o.material)?materials:materials[0]);meshes.push(mesh);}});return meshes;}
export function createMineGoldBars(source:THREE.Object3D,floorAt:(x:number,z:number)=>number){
 const root=new THREE.Group();root.name='Пирамида слитков — пять, четыре, три';const template=new THREE.Group();template.add(...pieces(source,Math.PI/2));const box=new THREE.Box3().setFromObject(template),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3()),scale=1.4/size.x,height=size.y*scale,spacing=1.46,baseY=floorAt(MINE_GOLD_POSITION.x,MINE_GOLD_POSITION.z);
 // Sample the complete base footprint, including the uphill rear edge; the old centre-only
 // height let the back of the bars disappear into the rising bank.
 const halfWidth=(4*spacing+1.4)/2,halfDepth=size.z*scale/2;let foundation=baseY;
 for(let x=-halfWidth;x<=halfWidth+.01;x+=halfWidth/8)for(let z=-halfDepth;z<=halfDepth+.01;z+=halfDepth/4)foundation=Math.max(foundation,floorAt(MINE_GOLD_POSITION.x+x,MINE_GOLD_POSITION.z+z));
 foundation=foundation-baseY+.16;
 const levels:number[][]=[];
 for(let row=0;row<3;row++){
  const count=5-row;levels[row]=[];
  for(let column=0;column<count;column++){
   const x=(column-(count-1)/2)*spacing;
   // Each upper bar spans two lower bars; its bottom touches the higher support.
   const bottom=row===0?foundation:Math.max(levels[row-1][column],levels[row-1][column+1])+height;
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
