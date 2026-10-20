import * as THREE from 'three';
export const MINE_DOOR_SCALE=.84;
export const MINE_DOOR_CLEAR_HALF=7*MINE_DOOR_SCALE-1.8;
export const MINE_DOOR_ASSET='Ash_Mine_Gatehouse_Door.glb';
export const MINE_DOOR_CREDIT={author:'ebblender',url:'https://sketchfab.com/3d-models/medieval-gatehouse-door-9548c412ffac45d8893fe3daccca4755'};
/** Clip every vertex attribute with the triangle, retaining the supplied UVs and normal maps. */
function crop(source:THREE.BufferGeometry,left:number,right:number,bottom:number,top:number){
 const attributes=Object.entries(source.attributes),sizes=attributes.map(([,a])=>a.itemSize),starts=sizes.map((_,i)=>sizes.slice(0,i).reduce((a,b)=>a+b,0)),position=starts[attributes.findIndex(([name])=>name==='position')],output=attributes.map(()=>[] as number[]),index=source.index;
 const read=(i:number)=>attributes.flatMap(([,a])=>Array.from({length:a.itemSize},(_,k)=>a.getComponent(i,k)));
 const clip=(poly:number[][],axis:number,plane:number,above:boolean)=>{const out:number[][]=[];for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length],aa=above?a[axis]>=plane:a[axis]<=plane,bb=above?b[axis]>=plane:b[axis]<=plane;if(aa)out.push(a);if(aa!==bb){const t=(plane-a[axis])/(b[axis]-a[axis]);out.push(a.map((v,k)=>v+(b[k]-v)*t));}}return out;};
 for(let i=0;i<(index?.count??source.attributes.position.count);i+=3){let poly=[0,1,2].map(k=>read(index?index.getX(i+k):i+k));for(const [axis,plane,above] of [[position,left,1],[position,right,0],[position+1,bottom,1],[position+1,top,0]])poly=clip(poly,axis,plane,!!above);for(let j=1;j<poly.length-1;j++)for(const v of [poly[0],poly[j],poly[j+1]])attributes.forEach((_,a)=>output[a].push(...v.slice(starts[a],starts[a]+sizes[a])));}
 const geometry=new THREE.BufferGeometry();attributes.forEach(([name],i)=>geometry.setAttribute(name,new THREE.Float32BufferAttribute(output[i],sizes[i])));geometry.applyMatrix4(new THREE.Matrix4().makeScale(17.5,17.5,.6));geometry.translate(0,17.5,0);
 geometry.computeBoundingBox();geometry.computeBoundingSphere();return geometry;
}
function stoneUV(geometry:THREE.BufferGeometry,offset=new THREE.Vector3()){
 const p=geometry.attributes.position,n=geometry.attributes.normal,uv=geometry.attributes.uv;for(let i=0;i<p.count;i++){const sideways=Math.abs(n.getX(i))>Math.abs(n.getZ(i));uv.setXY(i,(sideways?p.getZ(i)+offset.z:p.getX(i)+offset.x)/5,(p.getY(i)+offset.y)/5);}geometry.deleteAttribute('tangent');
}
export function createSlidingMineDoor(stone:THREE.Material){
 // Keep the rock pattern, but remove the brown albedo and prevent it falling almost black.
 const frameMaterial=stone instanceof THREE.MeshStandardMaterial?stone.clone():new THREE.MeshStandardMaterial();frameMaterial.name='Единое серое каменное обрамление';frameMaterial.color.set('#adb1b3');frameMaterial.roughness=1;frameMaterial.metalness=0;frameMaterial.emissive.set('#56616b');frameMaterial.emissiveIntensity=.08;
 frameMaterial.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
 float rockShade = clamp(dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722)) * 1.6 + 0.18, 0.23, 0.62);
 diffuseColor.rgb = vec3(rockShade);`);};frameMaterial.customProgramCacheKey=()=> 'mine-neutral-stone-v1';
 const root=new THREE.Group();root.name='Раздвижная дверь пепельной шахты';root.scale.setScalar(MINE_DOOR_SCALE);const frame=new THREE.Group(),left=new THREE.Group(),right=new THREE.Group();root.add(frame,left,right);
 // Opaque stone pockets conceal both leaves from either side of the doorway.
 for(const side of [-1,1])for(const z of [-1.5,1.5]){const wall=new THREE.Mesh(new THREE.BoxGeometry(8.3,24,1.2),frameMaterial);wall.position.set(side*11.25,12,z);wall.name='Каменная ниша для створки';stoneUV(wall.geometry,wall.position);frame.add(wall);}
 const lintel=new THREE.Mesh(new THREE.BoxGeometry(14.2,3,4.2),frameMaterial);lintel.position.set(0,22.5,0);lintel.name='Единая каменная перемычка над дверью';stoneUV(lintel.geometry,lintel.position);frame.add(lintel);
 let opening=0;const smooth=(t:number)=>t*t*(3-2*t),update=(value:number)=>{opening=THREE.MathUtils.clamp(value,0,1);const travel=7.4*smooth(opening);left.position.x=-travel;right.position.x=travel;};
 // The loading placeholder uses the same lateral movement and is removed on installation.
 const placeholders=[left,right].map((group,i)=>{const leaf=new THREE.Mesh(new THREE.BoxGeometry(7,21,.8),new THREE.MeshStandardMaterial({color:'#493c2a',roughness:.9}));leaf.position.set(i?3.5:-3.5,10.5,0);group.add(leaf);return leaf;});
 const install=(source:THREE.Object3D)=>{for(const leaf of placeholders){leaf.removeFromParent();leaf.geometry.dispose();leaf.material.dispose();}source.updateWorldMatrix(true,true);
  source.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const baked=o.geometry.clone().applyMatrix4(o.matrixWorld),materials=(Array.isArray(o.material)?o.material:[o.material]).map(m=>m.clone()),material=Array.isArray(o.material)?materials:materials[0];
   for(const [group,l,r,b,t] of [[left,-.4,0,-1,.2],[right,0,.4,-1,.2],[frame,-.72,-.4,-1,.36],[frame,.4,.72,-1,.36],[frame,-.4,.4,.2,.36]] as const){const geometry=crop(baked,l,r,b,t);if(!geometry.attributes.position.count){geometry.dispose();continue;}if(group===frame)stoneUV(geometry);const mesh=new THREE.Mesh(geometry,group===frame?frameMaterial:material);mesh.name=group===frame?'Обрамление Medieval Gatehouse Door':'Створка Medieval Gatehouse Door';group.add(mesh);}baked.dispose();
  });update(opening);root.updateMatrixWorld(true);
 };
 return {root,left,right,frame,frameMaterial,install,update,get opening(){return opening;}};
}
