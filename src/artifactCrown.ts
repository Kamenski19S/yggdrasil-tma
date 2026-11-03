import * as THREE from 'three';
import {GLTFLoader} from './modelLoader';
export const CROWN_ASSET='Muspelheim_Three_Flames_Crown.glb';
export const CROWN_CREDIT={title:'Elena of Avalor - Crown',author:'Jorge Vásquez Pérez',url:'https://sketchfab.com/3d-models/elena-of-avalor-crown-69c39084aaf24057a796c9b3f558fd52'};
type State={active:boolean;pending:boolean;mount?:THREE.Group;failed?:boolean};const states=new WeakMap<THREE.Object3D,State>();
/** Shared attachment for current and future hero scenes; follows the animated head bone. */
export function syncArtifactCrown(root:THREE.Object3D,artifact:string|undefined,base:string){
 let state=states.get(root);if(!state){if(artifact!=='muspelheim')return;state={active:true,pending:false};states.set(root,state);}state.active=artifact==='muspelheim';if(state.mount){state.mount.visible=state.active;return;}if(!state.active||state.pending||state.failed)return;
 let head:THREE.Object3D|undefined;root.traverse(o=>{if((o as THREE.Bone).isBone&&/(?:^|[\s_:])head$/i.test(o.name))head=o;});if(!head){root.traverse(o=>{if((o as THREE.Bone).isBone&&/head$/i.test(o.name)&&!/end/i.test(o.name))head=o;});}if(!head)return;
 const token=state;token.pending=true;
 new GLTFLoader().load(base+'img/models/'+CROWN_ASSET,g=>{token.pending=false;if(states.get(root)!==token){dispose(g.scene);return;}
 const b=new THREE.Box3().setFromObject(g.scene),size=b.getSize(new THREE.Vector3()),center=b.getCenter(new THREE.Vector3()),span=Math.max(size.x,size.z);if(span<=0){dispose(g.scene);token.failed=true;return;}
 const offset=new THREE.Group();offset.position.set(-center.x,-b.min.y,-center.z);offset.add(g.scene);const fit=new THREE.Group();fit.scale.setScalar(1/span);fit.add(offset);
 // About 1.5 head widths. Convert world width to the bone's own coordinate scale.
 root.updateWorldMatrix(true,true);const body=new THREE.Box3().setFromObject(root),worldScale=head!.getWorldScale(new THREE.Vector3()),height=body.max.y-body.min.y,scale=Math.max(.001,height*.105/Math.max(.00001,Math.abs(worldScale.x)));
 const mount=new THREE.Group();mount.name='Венец трёх пламен · активный артефакт';mount.scale.setScalar(scale);let tip:THREE.Object3D|undefined;head!.traverse(o=>{if(o!==head&&(o as THREE.Bone).isBone&&/head.*(?:top|end)/i.test(o.name))tip=o;});
 const headLength=tip?head!.getWorldPosition(new THREE.Vector3()).distanceTo(tip.getWorldPosition(new THREE.Vector3())):0;mount.position.y=headLength>0?headLength*.65/Math.max(.00001,Math.abs(worldScale.y)):scale*.48;mount.add(fit);mount.visible=token.active;head!.add(mount);token.mount=mount;
 },undefined,()=>{token.pending=false;token.failed=true;});
}
function dispose(root:THREE.Object3D){root.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});}
export function disposeArtifactCrown(root:THREE.Object3D){const state=states.get(root);states.delete(root);if(state?.mount){state.mount.removeFromParent();dispose(state.mount);}}
