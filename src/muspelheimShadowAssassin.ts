import {createAssassinCombat,type AssassinPoint} from './muspelheimAssassinCombat';
import * as THREE from 'three';
import {YMIR_PILLAR_POSITION} from './muspelheimYmirPillar';
export const SHADOW_ASSASSIN_ASSET='Muspelheim_Shadow_Assassin.glb';
export const SHADOW_ASSASSIN_POSITION={x:YMIR_PILLAR_POSITION.x+24,z:YMIR_PILLAR_POSITION.z+15};
export const SHADOW_ASSASSIN_HEIGHT=14.5;
export const SHADOW_ASSASSIN_CREDIT={title:'Faceless Shadow Assassin',author:'Pigcraft',url:'https://sketchfab.com/3d-models/faceless-shadow-assassin-c3fe097c89d0427e84152c0ad0f636cf'};
/** Rigged hostile actor; navigation is supplied by the actual world collision/floor samplers. */
export function createShadowAssassin(model:THREE.Object3D,animations:THREE.AnimationClip[],groundY=0,clock=Date.now,options:{position?:{x:number;z:number};height?:number;name?:string;cooldownKey?:string}={}){
 const at=options.position??SHADOW_ASSASSIN_POSITION,height=options.height??SHADOW_ASSASSIN_HEIGHT,name=options.name??'Теневой ассасин';
 model.updateWorldMatrix(true,true);const box=new THREE.Box3().setFromObject(model),scale=height/(box.max.y-box.min.y);
 const fit=new THREE.Group();fit.scale.setScalar(scale);model.position.y-=box.min.y;fit.add(model);
 const root=new THREE.Group();root.name=name;root.position.set(at.x,groundY,at.z);root.rotation.y=Math.atan2(-at.x,140-at.z);root.add(fit);
 const skeletons=new Set<THREE.Skeleton>();model.traverse(o=>{if(o instanceof THREE.SkinnedMesh){o.frustumCulled=false;skeletons.add(o.skeleton);}if(o instanceof THREE.Mesh){o.receiveShadow=true;for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial){m.roughness=.9;if(m.map)m.map.anisotropy=4;}}});
 const cooldownKey=options.cooldownKey??'yggdrasil:muspelheim:assassin:defeatedAt';let savedDefeat:number|undefined;
 try{const raw=localStorage.getItem(cooldownKey),value=raw===null?NaN:Number(raw);if(Number.isFinite(value)&&value<=clock())savedDefeat=value;}catch{}
 const mixer=new THREE.AnimationMixer(model),combat=createAssassinCombat({x:root.position.x,y:groundY,z:root.position.z},{now:clock,defeatedAt:savedDefeat,onDefeated:at=>{try{if(at===null)localStorage.removeItem(cooldownKey);else localStorage.setItem(cooldownKey,String(at));}catch{}}});
 const clip=(name:string)=>{const c=THREE.AnimationClip.findByName(animations,name);if(!c)throw Error('Missing assassin animation: '+name);return c;};
 const clips={idle:clip('idle'),walk:clip('walk_loop'),attack:clip('sword_attack'),dead:clip('fall')};let current:THREE.AnimationAction|undefined,flash=0;
 const colors=new Map<THREE.MeshStandardMaterial,THREE.Color>();model.traverse(o=>{if(o instanceof THREE.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial)colors.set(m,m.emissive.clone());});
 const play=(name:keyof typeof clips)=>{const action=mixer.clipAction(clips[name]);if(action===current)return;current?.fadeOut(.12);action.reset().setLoop(name==='attack'||name==='dead'?THREE.LoopOnce:THREE.LoopRepeat,name==='attack'||name==='dead'?1:Infinity);action.clampWhenFinished=name==='attack'||name==='dead';action.fadeIn(.12).play();current=action;};
 play('idle');root.visible=!combat.hidden;mixer.update(0);root.updateWorldMatrix(true,true);
 const blocks=(x:number,z:number,footY:number,padding=2)=>combat.phase!=='dead'&&footY<root.position.y+height&&footY+14>root.position.y&&Math.hypot(x-root.position.x,z-root.position.z)<2.1+padding;
 return {root,mixer,combat,blocks,name,
  hurt(damage:number){const hit=combat.hurt(damage);if(hit)flash=.2;return hit;},
  reset(){if(combat.phase==='dead')return;combat.reset();root.visible=true;root.position.set(combat.position.x,combat.position.y,combat.position.z);play('idle');},
  update(dt:number,hero?:AssassinPoint,available=true,floor:(x:number,z:number,y:number)=>number|null=()=>groundY,contact?:()=>boolean){
   const before={...combat.position};const event=hero?combat.step(dt,hero,available,floor,contact):{impact:false,started:false,walking:false,dying:false,respawned:false};
   root.visible=!combat.hidden;
   if(event.respawned){mixer.stopAllAction();current=undefined;flash=0;play('idle');mixer.clipAction(clips.idle).stopFading().setEffectiveWeight(1);mixer.update(0);}
   if(dt<=0&&!event.respawned)return event;
   root.position.set(combat.position.x,combat.position.y,combat.position.z);
   if(event.walking){const dx=root.position.x-before.x,dz=root.position.z-before.z;if(Math.hypot(dx,dz)>.001)root.rotation.y=Math.atan2(dx,dz);}
   if(event.started&&hero)root.rotation.y=Math.atan2(hero.x-root.position.x,hero.z-root.position.z);
   play(combat.phase==='dead'?'dead':combat.phase==='attack'?'attack':event.walking?'walk':'idle');
   if(dt>0){mixer.update(dt);flash=Math.max(0,flash-dt);for(const [m,color] of colors)m.emissive.copy(flash>0?new THREE.Color('#8c2424'):color);}
   return event;
  },
  dispose:()=>{mixer.stopAllAction();mixer.uncacheRoot(model);skeletons.forEach(s=>s.dispose());}};
}
