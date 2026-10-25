import * as THREE from 'three';
import {YMIR_PILLAR_POSITION} from './muspelheimYmirPillar';
export const SHADOW_ASSASSIN_ASSET='Muspelheim_Shadow_Assassin.glb';
export const SHADOW_ASSASSIN_POSITION={x:YMIR_PILLAR_POSITION.x+24,z:YMIR_PILLAR_POSITION.z+15};
export const SHADOW_ASSASSIN_HEIGHT=14.5;
export const SHADOW_ASSASSIN_CREDIT={title:'Faceless Shadow Assassin',author:'Pigcraft',url:'https://sketchfab.com/3d-models/faceless-shadow-assassin-c3fe097c89d0427e84152c0ad0f636cf'};
/** Stationary placement for inspecting the adapted rig beside Ymir's white pillar. */
export function createShadowAssassin(model:THREE.Object3D,animations:THREE.AnimationClip[],groundY=0){
 model.updateWorldMatrix(true,true);const box=new THREE.Box3().setFromObject(model),scale=SHADOW_ASSASSIN_HEIGHT/(box.max.y-box.min.y);
 const fit=new THREE.Group();fit.scale.setScalar(scale);model.position.y-=box.min.y;fit.add(model);
 const root=new THREE.Group();root.name='Теневой ассасин у памяти Имира';root.position.set(SHADOW_ASSASSIN_POSITION.x,groundY,SHADOW_ASSASSIN_POSITION.z);root.rotation.y=Math.atan2(-SHADOW_ASSASSIN_POSITION.x,140-SHADOW_ASSASSIN_POSITION.z);root.add(fit);
 const skeletons=new Set<THREE.Skeleton>();model.traverse(o=>{if(o instanceof THREE.SkinnedMesh){o.frustumCulled=false;skeletons.add(o.skeleton);}if(o instanceof THREE.Mesh){o.receiveShadow=true;for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial){m.roughness=.9;if(m.map)m.map.anisotropy=4;}}});
 const mixer=new THREE.AnimationMixer(model);const idle=THREE.AnimationClip.findByName(animations,'idle');if(!idle)throw Error('Shadow assassin idle animation is missing');mixer.clipAction(idle).play();mixer.update(0);root.updateWorldMatrix(true,true);
 const blocks=(x:number,z:number,footY:number,padding=2)=>footY<groundY+SHADOW_ASSASSIN_HEIGHT&&footY+14>groundY&&Math.hypot(x-root.position.x,z-root.position.z)<2.1+padding;
 return {root,mixer,blocks,update:(dt:number)=>mixer.update(dt),dispose:()=>{mixer.stopAllAction();mixer.uncacheRoot(model);skeletons.forEach(s=>s.dispose());}};
}
