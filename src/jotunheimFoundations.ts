import * as THREE from 'three';
type Site={x:number;z:number;width:number;depth:number;height:number;base:number};
type Edge={a:THREE.Vector3;b:THREE.Vector3;count:number};
/** Overlapping rock toes support open scan cuts and continue below the real
 * terrain, reusing the existing GLB cliff model. Weld positions first so atlas
 * seams do not produce false edges. */
export function createWaterfallFoundations(parts:THREE.Object3D[][],sites:Site[],cliff:THREE.Object3D,height:(x:number,z:number)=>number|null){
 const root=new THREE.Group(),contacts:{x:number;z:number;bottom:number;floor:number}[]=[],point=new THREE.Vector3();let seams=0;
 for(let i=0;i<sites.length;i++){
  const s=sites[i],edges=new Map<string,Edge>(),supports=new Map<string,{x:number;z:number;top:number}>();
  const key=(p:THREE.Vector3)=>`${Math.round(p.x*10)},${Math.round(p.y*10)},${Math.round(p.z*10)}`;
  for(const root of parts[i])root.traverse(o=>{
   if(!(o instanceof THREE.Mesh))return;const g=o.geometry,p=g.getAttribute('position'),index=g.index,count=index?.count??p.count;
   for(let j=0;j<count;j+=3){
    const v=[0,1,2].map(k=>point.fromBufferAttribute(p,index?index.getX(j+k):j+k).applyMatrix4(o.matrixWorld).clone());
    for(let k=0;k<3;k++){const a=v[k],b=v[(k+1)%3],ka=key(a),kb=key(b);if(ka===kb)continue;const id=ka<kb?ka+'|'+kb:kb+'|'+ka,edge=edges.get(id);if(edge)edge.count++;else edges.set(id,{a,b,count:1});}
   }
  });
  for(const e of edges.values()){
   if(e.count!==1||e.a.distanceTo(e.b)<.4)continue;
   const middle=e.a.clone().add(e.b).multiplyScalar(.5);
   // High silhouettes include foliage and falling water. Support only the foot.
   if(middle.y>s.base+s.height*.24)continue;
   const floor=height(middle.x,middle.z);if(floor==null||middle.y<=floor+.6)continue;
   const steps=Math.max(1,Math.ceil(e.a.distanceTo(e.b)/6));
   for(let j=0;j<=steps;j++){
    const v=e.a.clone().lerp(e.b,j/steps),x=Math.round(v.x/10)*10,z=Math.round(v.z/10)*10,id=`${x},${z}`,old=supports.get(id);
    if(!old||old.top<v.y+.5)supports.set(id,{x,z,top:v.y+.5});
   }seams++;
  }
  for(const {x,z,top} of supports.values()){
   // Sample the whole footprint, burying every point of the rock's base.
   const floors:number[]=[];for(const dx of [-20,0,20])for(const dz of [-20,0,20]){const f=height(x+dx,z+dz);if(f!=null)floors.push(f);}
   if(!floors.length)continue;const floor=Math.min(...floors),bottom=floor-12,h=Math.max(12,top-bottom),model=cliff.clone(true),wrapper=new THREE.Group();
   // Reuse the source GLB geometry and its graded stone/moss materials.
   // Only transform instances; overlapping buried pieces hide their cut edges.
   model.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
   model.position.sub(center);model.position.y+=size.y/2;wrapper.add(model);wrapper.scale.set(26/size.x,h/size.y,26/size.z);wrapper.position.set(x,bottom,z);wrapper.rotation.y=Math.sin(x*12.9898+z*78.233)*Math.PI;root.add(wrapper);contacts.push({x,z,bottom,floor});
  }
 }
 root.name='Waterfall rock foundations';root.userData.seams=seams;root.userData.contacts=contacts;return root;
}
