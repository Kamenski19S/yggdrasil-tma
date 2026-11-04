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
/** Fit in world space, then convert to the animated bone's local axes. */
export function mountArtifactCrown(root:THREE.Object3D,head:THREE.Object3D,model:THREE.Object3D){
 root.updateWorldMatrix(true,true);model.updateWorldMatrix(true,true);
 const b=new THREE.Box3().setFromObject(model),size=b.getSize(new THREE.Vector3()),center=b.getCenter(new THREE.Vector3()),span=Math.max(size.x,size.z);if(span<=0)throw Error('Empty crown geometry');
 const offset=new THREE.Group();offset.position.set(-center.x,-b.min.y,-center.z);offset.add(model);const fit=new THREE.Group();fit.scale.setScalar(1/span);fit.add(offset);
 const body=new THREE.Box3().setFromObject(root),height=body.max.y-body.min.y,worldScale=head.getWorldScale(new THREE.Vector3()),width=height*.132;
 const mount=new THREE.Group();mount.name='Венец трёх пламен · активный артефакт';mount.scale.set(width/Math.max(.00001,Math.abs(worldScale.x)),width/Math.max(.00001,Math.abs(worldScale.y)),width/Math.max(.00001,Math.abs(worldScale.z)));
 const target=head.getWorldPosition(new THREE.Vector3());let tip:THREE.Object3D|undefined;head.traverse(o=>{if(o!==head&&(o as THREE.Bone).isBone&&/head.*(?:top|end)/i.test(o.name))tip=o;});
 if(tip)target.lerp(tip.getWorldPosition(new THREE.Vector3()),.72);else target.y+=height*.07;
 // Clear Vicki's raised hairline: lift the band by 3.5% of hero height.
 target.addScaledVector(new THREE.Vector3(0,1,0).applyQuaternion(root.getWorldQuaternion(new THREE.Quaternion())),height*.035);
 mount.position.copy(head.worldToLocal(target));
 mount.quaternion.copy(head.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(root.getWorldQuaternion(new THREE.Quaternion())));
 mount.add(fit);head.add(mount);return mount;
}
/** Shared attachment for current and future hero scenes; follows the animated head bone. */
export function syncArtifactCrown(root:THREE.Object3D,artifact:string|undefined,base:string){
 let state=states.get(root);if(!state){if(artifact!=='muspelheim')return;state={active:true,pending:false,attempts:0,retryAt:0};states.set(root,state);}state.active=artifact==='muspelheim';if(state.mount){state.mount.visible=state.active;return;}if(!state.active||state.pending||state.attempts>=3||Date.now()<state.retryAt)return;
 const head=findCrownHead(root);if(!head)return;const token=state;token.pending=true;token.attempts++;
 new GLTFLoader().load(base+'img/models/'+CROWN_ASSET,g=>{token.pending=false;if(states.get(root)!==token){dispose(g.scene);return;}try{token.mount=mountArtifactCrown(root,head,g.scene);token.mount.visible=token.active;}catch(error){dispose(g.scene);token.retryAt=Date.now()+2500;console.warn('Crown fitting failed',error);}},undefined,()=>{token.pending=false;token.retryAt=Date.now()+2500;});
}
function dispose(root:THREE.Object3D){root.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});}
export function disposeArtifactCrown(root:THREE.Object3D){const state=states.get(root);states.delete(root);if(state?.mount){state.mount.removeFromParent();dispose(state.mount);}}
