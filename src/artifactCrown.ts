import * as THREE from 'three';
import {GLTFLoader} from './modelLoader';
export const CROWN_ASSET='Muspelheim_Three_Flames_Crown.glb';
export const CROWN_CREDIT={title:'Elena of Avalor - Crown',author:'Jorge Vásquez Pérez',url:'https://sketchfab.com/3d-models/elena-of-avalor-crown-69c39084aaf24057a796c9b3f558fd52'};
type State={active:boolean;pending:boolean;mount?:THREE.Group;attempts:number;retryAt:number};const states=new WeakMap<THREE.Object3D,State>();
export function findCrownHead(root:THREE.Object3D){
 const bones=new Set<THREE.Object3D>();root.traverse(o=>{if((o as THREE.Bone).isBone)bones.add(o);if(o instanceof THREE.SkinnedMesh)for(const b of o.skeleton.bones)bones.add(b);});
 const name=(o:THREE.Object3D)=>o.name.toLowerCase().replace(/[^a-zа-я]/g,'');
 return [...bones].find(o=>name(o).endsWith('head'))??[...bones].find(o=>/head|голов/i.test(name(o))&&!/end|top|eye|brow|hair|nub/i.test(name(o)));
}
/** Sample the posed head/hair surface once, in the hero's upright coordinate frame. */
function crownSeat(root:THREE.Object3D,head:THREE.Object3D,height:number){
 const origin=head.getWorldPosition(new THREE.Vector3()),rotation=root.getWorldQuaternion(new THREE.Quaternion()),inverse=rotation.clone().invert(),points:THREE.Vector3[]=[];
 const headBones=new Set<THREE.Object3D>();head.traverse(o=>headBones.add(o));
 root.traverse(o=>{if(!(o instanceof THREE.SkinnedMesh))return;const a=o.geometry.attributes;if(!a.skinIndex||!a.skinWeight)return;o.skeleton.update();
  for(let i=0;i<a.position.count;i++){let weight=0;for(let k=0;k<4;k++)if(headBones.has(o.skeleton.bones[a.skinIndex.getComponent(i,k)]))weight+=a.skinWeight.getComponent(i,k);if(weight<.5)continue;
   const v=o.getVertexPosition(i,new THREE.Vector3()).applyMatrix4(o.matrixWorld).sub(origin).applyQuaternion(inverse);if(v.y>0&&v.y<height*.25)points.push(v);
  }
 });
 if(points.length<30)return {target:origin.add(new THREE.Vector3(0,height*.08,0).applyQuaternion(rotation)),width:height*.11,depth:height*.125};
 const top=points.reduce((m,p)=>Math.max(m,p.y),0),seatY=top-height*.05;
 const slice=points.filter(p=>Math.abs(p.y-seatY)<height*.006);if(slice.length<12)return {target:origin.add(new THREE.Vector3(0,seatY,0).applyQuaternion(rotation)),width:height*.11,depth:height*.125};
 const xs=slice.map(p=>p.x).sort((a,b)=>a-b),zs=slice.map(p=>p.z).sort((a,b)=>a-b),edge=(a:number[],q:number)=>a[Math.floor((a.length-1)*q)];
 const left=edge(xs,.01),right=edge(xs,.99),back=edge(zs,.01),front=edge(zs,.99),clearance=height*.006;
 const center=new THREE.Vector3((left+right)/2,seatY,(back+front)/2);
 return {target:origin.add(center.clone().applyQuaternion(rotation)),width:right-left+clearance,depth:front-back+clearance,surface:points.map(p=>p.sub(center))};
}
/** Smooth oval envelope avoids hair intersections without angular sampling seams. */
function conformCrownSurface(mount:THREE.Object3D,surface:THREE.Vector3[],rotation:THREE.Quaternion,height:number){
 const origin=mount.getWorldPosition(new THREE.Vector3()),inverse=rotation.clone().invert();
 const top=surface.reduce((m,p)=>Math.max(m,p.y),0),base=surface.filter(p=>Math.abs(p.y)<height*.009);
 if(base.length<12||top<=0)return;
 const bounds=new THREE.Box3().setFromPoints(base),center=bounds.getCenter(new THREE.Vector3()),radii=bounds.getSize(new THREE.Vector3()).multiplyScalar(.5);
 mount.updateWorldMatrix(true,true);
 mount.traverse(o=>{if(!(o instanceof THREE.Mesh))return;o.geometry=o.geometry.clone();const source=o.geometry.attributes.position,values=new Float32Array(source.count*3);for(let i=0;i<source.count;i++){values[i*3]=source.getX(i);values[i*3+1]=source.getY(i);values[i*3+2]=source.getZ(i);}const a=new THREE.Float32BufferAttribute(values,3);o.geometry.setAttribute('position',a);const back=o.matrixWorld.clone().invert();let changed=false;
  for(let i=0;i<a.count;i++){const p=new THREE.Vector3().fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld).sub(origin).applyQuaternion(inverse);
   if(p.y< -height*.008||p.y>top)continue;
   const t=Math.max(0,p.y/(top+height*.014)),shrink=Math.sqrt(Math.max(.01,1-t*t)),cx=center.x,cz=center.z+height*.012*t;
   const x=p.x-cx,z=p.z-cz,rx=radii.x*shrink+height*.002,rz=radii.z*shrink+height*.002,elliptic=Math.hypot(x/rx,z/rz);
   if(elliptic>=1||elliptic<.0001)continue;
   p.x=cx+x/elliptic;p.z=cz+z/elliptic;
   p.applyQuaternion(rotation).add(origin).applyMatrix4(back);a.setXYZ(i,p.x,p.y,p.z);changed=true;
  }
  if(changed){a.needsUpdate=true;o.geometry.deleteAttribute('normal');o.geometry.deleteAttribute('tangent');o.geometry.computeVertexNormals();o.geometry.computeBoundingBox();o.geometry.computeBoundingSphere();}
 });
}
/** Shape the GLB to the head's oval, then attach in the animated bone's local axes. */
export function mountArtifactCrown(root:THREE.Object3D,head:THREE.Object3D,model:THREE.Object3D){
 root.updateMatrixWorld(true);model.updateWorldMatrix(true,true);
 const b=new THREE.Box3().setFromObject(model),size=b.getSize(new THREE.Vector3()),center=b.getCenter(new THREE.Vector3());if(Math.min(size.x,size.z)<=0)throw Error('Empty crown geometry');
 const body=new THREE.Box3().setFromObject(root),height=body.max.y-body.min.y,seat=crownSeat(root,head,height),worldScale=head.getWorldScale(new THREE.Vector3());
 const offset=new THREE.Group();offset.position.set(-center.x,-b.min.y,-center.z);offset.add(model);
 const fit=new THREE.Group();fit.scale.set(seat.width/size.x,seat.width/size.x,seat.depth/size.z);fit.add(offset);
 const mount=new THREE.Group();mount.name='Венец трёх пламен · активный артефакт';mount.scale.set(1/Math.max(.00001,Math.abs(worldScale.x)),1/Math.max(.00001,Math.abs(worldScale.y)),1/Math.max(.00001,Math.abs(worldScale.z)));
 mount.position.copy(head.worldToLocal(seat.target));
 mount.quaternion.copy(head.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(root.getWorldQuaternion(new THREE.Quaternion())));
 mount.add(fit);head.add(mount);root.updateMatrixWorld(true);if(seat.surface)conformCrownSurface(mount,seat.surface,root.getWorldQuaternion(new THREE.Quaternion()),height);return mount;
}
/** Shared attachment for current and future hero scenes; follows the animated head bone. */
export function syncArtifactCrown(root:THREE.Object3D,artifact:string|undefined,base:string){
 let state=states.get(root);if(!state){if(artifact!=='muspelheim')return;state={active:true,pending:false,attempts:0,retryAt:0};states.set(root,state);}state.active=artifact==='muspelheim';if(state.mount){state.mount.visible=state.active;return;}if(!state.active||state.pending||state.attempts>=3||Date.now()<state.retryAt)return;
 const head=findCrownHead(root);if(!head)return;const token=state;token.pending=true;token.attempts++;
 new GLTFLoader().load(base+'img/models/'+CROWN_ASSET,g=>{token.pending=false;if(states.get(root)!==token){dispose(g.scene);return;}try{token.mount=mountArtifactCrown(root,head,g.scene);token.mount.visible=token.active;}catch(error){dispose(g.scene);token.retryAt=Date.now()+2500;console.warn('Crown fitting failed',error);}},undefined,()=>{token.pending=false;token.retryAt=Date.now()+2500;});
}
function dispose(root:THREE.Object3D){root.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});}
export function disposeArtifactCrown(root:THREE.Object3D){const state=states.get(root);states.delete(root);if(state?.mount){state.mount.removeFromParent();dispose(state.mount);}}
