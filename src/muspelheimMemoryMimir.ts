import * as THREE from 'three';
import type {CharacterBody} from './characterCollision';
export const MIMIR_ASSET='Muspelheim_Mimir.glb';
// Ymir is a giant: twice Vicki’s 13.94 scene-unit height.
export const MIMIR_HEIGHT=13.94*2;
export const MIMIR_RADIUS=7.4;
export const MIMIR_CREDIT={title:'Storm Golem - Lightning Elemental',author:'Pigcraft',url:'https://sketchfab.com/3d-models/storm-golem-lightning-elemental-3779f41add4a4a71a1cae6bf9ef27b58'};
type Point={x:number;y:number;z:number};
export function createMemoryMimir(model:THREE.Object3D,clips:THREE.AnimationClip[],pillar:THREE.Box3,floor:(x:number,z:number)=>number|null){
 model.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(model),scale=MIMIR_HEIGHT/(bounds.max.y-bounds.min.y),centre=bounds.getCenter(new THREE.Vector3());model.position.set(-centre.x,-bounds.min.y,-centre.z);
 const fit=new THREE.Group();fit.scale.setScalar(scale);fit.add(model);const root=new THREE.Group();root.name='Имир · образ из белого столба памяти';root.add(fit);root.visible=false;
 const center=pillar.getCenter(new THREE.Vector3()),start={x:center.x,z:pillar.max.z-4},destination={x:center.x,z:pillar.max.z+MIMIR_RADIUS+5},ground=floor(destination.x,destination.z),startY=floor(start.x,start.z);
 if(ground==null||startY==null)throw Error('Mimir has no ground beside the memory pillar');
 root.position.set(start.x,startY,start.z);
 const materials=new Map<THREE.Material,{transparent:boolean;opacity:number;depthWrite:boolean}>(),skeletons=new Set<THREE.Skeleton>();
 model.traverse(o=>{if(o instanceof THREE.SkinnedMesh){o.frustumCulled=false;skeletons.add(o.skeleton);}if(o instanceof THREE.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material]){materials.set(m,{transparent:m.transparent,opacity:m.opacity,depthWrite:m.depthWrite});}});
 const mixer=new THREE.AnimationMixer(model),clip=(name:string)=>{const c=clips.find(c=>c.name===name);if(!c)throw Error('Missing Mimir clip '+name);return mixer.clipAction(c);},idle=clip('idle'),walk=clip('walk_loop'),greet=clip('greet');greet.setLoop(THREE.LoopOnce,1);greet.clampWhenFinished=true;idle.play();
 const memoryKey='yggdrasil:muspelheim:ymir:memory-released';
 let released=false;try{released=localStorage.getItem(memoryKey)==='1';}catch{}
 let progress=0,present=false,current=idle,greetTime=0;
 const play=(action:THREE.AnimationAction)=>{if(current===action)return;current.fadeOut(.2);action.reset().fadeIn(.2).play();current=action;};
 const body=():CharacterBody=>({x:root.position.x,y:root.position.y,z:root.position.z,radius:MIMIR_RADIUS,height:MIMIR_HEIGHT,solid:progress>=1});
 return {root,mixer,destination:{...destination,y:ground},get progress(){return progress;},get released(){return released;},
  release(){if(released)return false;released=true;try{localStorage.setItem(memoryKey,'1');}catch{}return true;},
  talk(hero:Point){if(!released||progress<1||Math.hypot(hero.x-root.position.x,hero.z-root.position.z)>35||Math.abs(hero.y-root.position.y)>9)return false;play(greet);greetTime=greet.getClip().duration;return true;},get body(){return body();},
  update(dt:number,hero:Point){if(dt<=0)return false;const distance=Math.hypot(hero.x-center.x,hero.z-center.z);if(released&&!present&&distance<40&&Math.abs(hero.y-ground)<9)present=true;else if(present&&(distance>65||Math.abs(hero.y-ground)>20))present=false;
   const before=progress;progress=THREE.MathUtils.clamp(progress+(present?1:-1)*dt/2.4,0,1);
   // Leave room for Vicki before giving the apparition a physical body.
   if(progress>before&&before<1&&Math.hypot(hero.x-destination.x,hero.z-destination.z)<MIMIR_RADIUS+3.3)progress=Math.min(progress,.8);
   root.visible=progress>0;if(!root.visible)return false;const t=THREE.MathUtils.smoothstep(progress,0,1);root.position.set(THREE.MathUtils.lerp(start.x,destination.x,t),THREE.MathUtils.lerp(startY,ground,t),THREE.MathUtils.lerp(start.z,destination.z,t));
   for(const [material,original]of materials){const fading=progress<1;material.opacity=original.opacity*THREE.MathUtils.smoothstep(progress,0,.7);if(material.transparent!==(fading||original.transparent)){material.transparent=fading||original.transparent;material.needsUpdate=true;}material.depthWrite=fading?false:original.depthWrite;}
   if(progress<1){play(walk);greetTime=0;root.rotation.y=present?0:Math.PI;}else{if(before<1){play(greet);greetTime=greet.getClip().duration;}greetTime=Math.max(0,greetTime-dt);if(!greetTime)play(idle);const angle=Math.atan2(hero.x-root.position.x,hero.z-root.position.z),difference=Math.atan2(Math.sin(angle-root.rotation.y),Math.cos(angle-root.rotation.y));root.rotation.y+=difference*Math.min(1,dt*2);}
   mixer.update(dt);return before===0&&progress>0;
  },dispose(){mixer.stopAllAction();mixer.uncacheRoot(model);skeletons.forEach(s=>s.dispose());},
 };
}
