import * as THREE from 'three';
import {createGateMagic} from './muspelheimGateMagic';
import type {AssassinPoint} from './muspelheimAssassinCombat';
export const GATE_GUARDIAN_ASSET='Muspelheim_Surt_Gate_Golem.glb';
export const GATE_GUARDIAN_POSITION={x:-299,z:-366};
export const GATE_GUARDIAN_HEIGHT=22;
export const GATE_GUARDIAN_COMBAT_ENABLED=false;
export const GATE_GUARDIAN_CREDIT={title:'Volcanic Stone Lava Magma Golem',author:'Pigcraft',url:'https://sketchfab.com/3d-models/volcanic-stone-lava-magma-golem-751d9b868f8a4c5d96deae299a70b98c'};
export function createGateGuardian(model:THREE.Object3D,clips:THREE.AnimationClip[],groundY=40.05,clock=Date.now){
 model.updateMatrixWorld(true);model.traverse(o=>{if(o instanceof THREE.SkinnedMesh)o.computeBoundingBox();});const box=new THREE.Box3().setFromObject(model),scale=GATE_GUARDIAN_HEIGHT/(box.max.y-box.min.y),fit=new THREE.Group();fit.scale.setScalar(scale);model.position.y-=box.min.y;fit.add(model);
 const root=new THREE.Group();root.name='Страж врат Сурта — магматический голем';root.position.set(GATE_GUARDIAN_POSITION.x,groundY,GATE_GUARDIAN_POSITION.z);root.rotation.y=.4;root.add(fit);
 const name='Страж врат Сурта',key='yggdrasil:muspelheim:gate-mage:defeatedAt';let defeatedAt:number|undefined;try{const raw=localStorage.getItem(key),n=raw===null?NaN:Number(raw);if(Number.isFinite(n)&&n<=clock())defeatedAt=n;}catch{}
 const magic=createGateMagic({x:root.position.x,y:groundY,z:root.position.z},{now:clock,spawnClearance:10,defeatedAt,onDefeated:at=>{try{if(at===null)localStorage.removeItem(key);else localStorage.setItem(key,String(at));}catch{}}}),life=magic.life,combat={position:life.position,get hp(){return life.hp;},get hidden(){return life.hidden;},get phase(){return life.phase==='dead'?'dead' as const:magic.stage==='charge'?'attack' as const:'idle' as const;},reset:life.reset,hurt:life.hurt,step:life.step};
 const mixer=new THREE.AnimationMixer(model),find=(name:string)=>{const clip=THREE.AnimationClip.findByName(clips,name);if(!clip)throw Error('Missing gate guardian clip '+name);return clip;},animations={idle:find('idle'),cast:find('cast'),hurt:find('hurt'),fall:find('fall')};let current:THREE.AnimationAction|undefined,flash=0,clockTime=0;
 const play=(which:keyof typeof animations)=>{const action=mixer.clipAction(animations[which]);if(action===current)return;current?.fadeOut(.14);action.reset().setLoop(which==='idle'?THREE.LoopRepeat:THREE.LoopOnce,which==='idle'?Infinity:1);action.clampWhenFinished=true;action.fadeIn(.14).play();current=action;};
 const material=new THREE.MeshBasicMaterial({color:'#ff8c24',transparent:true,opacity:.7,blending:THREE.AdditiveBlending,depthWrite:false});const palms=['GateLPalm','GateRPalm'].map(name=>{const bone=model.getObjectByName(name);if(!bone)throw Error('Missing magic palm '+name);const orb=new THREE.Mesh(new THREE.SphereGeometry(.075,12,8),material);orb.name='Магма в ладони';bone.add(orb);return{bone,orb};});
 const effects=new THREE.Group();effects.name='Магические снаряды стража';root.add(effects);const projectileMeshes=new Map<number,THREE.Group>(),ballGeometry=new THREE.IcosahedronGeometry(.52,1),glowGeometry=new THREE.SphereGeometry(.9,12,8),rock=new THREE.MeshStandardMaterial({color:'#412421',emissive:'#f45c15',emissiveIntensity:2,roughness:1}),glow=new THREE.MeshBasicMaterial({color:'#ff9b37',transparent:true,opacity:.48,blending:THREE.AdditiveBlending,depthWrite:false});
 const skeletons=new Set<THREE.Skeleton>(),emissive=new Map<THREE.MeshStandardMaterial,THREE.Color>();model.traverse(o=>{if(o instanceof THREE.SkinnedMesh){o.frustumCulled=false;skeletons.add(o.skeleton);}if(o instanceof THREE.Mesh){o.receiveShadow=true;for(const mat of Array.isArray(o.material)?o.material:[o.material])if(mat instanceof THREE.MeshStandardMaterial)emissive.set(mat,mat.emissive.clone());}});
 play('idle');mixer.update(0);root.updateMatrixWorld(true);
 const origin=()=>palms.reduce((sum,p)=>sum.add(p.bone.getWorldPosition(new THREE.Vector3())),new THREE.Vector3()).multiplyScalar(.5);
 const clearProjectiles=()=>{for(const mesh of projectileMeshes.values())effects.remove(mesh);projectileMeshes.clear();};
 return {root,mixer,combat,name,magic,palms,
  blocks(x:number,z:number,footY:number,padding=2){return combat.phase!=='dead'&&footY<groundY+GATE_GUARDIAN_HEIGHT&&footY+14>groundY&&Math.hypot(x-root.position.x,z-root.position.z)<5.6+padding;},
  hurt(damage:number){const hit=combat.hurt(damage);if(hit){flash=.25;if(combat.hp)play('hurt');}return hit;},
  reset(){if(combat.phase==='dead')return;combat.reset();magic.reset();clearProjectiles();root.visible=true;root.position.set(combat.position.x,combat.position.y,combat.position.z);play('idle');},
  update(dt:number,hero?:AssassinPoint,available=true,floor:(x:number,z:number,y:number)=>number|null=()=>groundY,contact?:()=>boolean){
   const event=magic.step(dt,hero,available,origin(),contact?.()??true,floor);if(dt<=0)return event;clockTime+=dt;
   if(event.respawned){mixer.stopAllAction();current=undefined;flash=0;}
   root.visible=!combat.hidden;if(hero&&combat.hp>0&&(magic.stage==='charge'||event.started))root.rotation.y=Math.atan2(hero.x-root.position.x,hero.z-root.position.z);
   if(event.started)play('cast');else if(combat.phase==='dead')play('fall');else if(magic.stage==='idle'&&flash<=0)play('idle');
   mixer.update(dt);flash=Math.max(0,flash-dt);for(const [mat,color]of emissive)mat.emissive.copy(color).lerp(new THREE.Color('#ff6c24'),flash*1.5);
   const charging=magic.stage==='charge',pulse=charging?1.5+.25*Math.sin(clockTime*18):.65+.12*Math.sin(clockTime*2);for(const p of palms)p.orb.scale.setScalar(pulse);material.opacity=charging?.95:.45;
   root.updateMatrixWorld(true);const active=new Set(magic.projectiles.map(p=>p.id));for(const [id,mesh]of projectileMeshes)if(!active.has(id)){effects.remove(mesh);projectileMeshes.delete(id);}
   for(const p of magic.projectiles){let mesh=projectileMeshes.get(p.id);if(!mesh){mesh=new THREE.Group();mesh.name='Сгусток магмы';mesh.add(new THREE.Mesh(ballGeometry,rock),new THREE.Mesh(glowGeometry,glow));effects.add(mesh);projectileMeshes.set(p.id,mesh);}mesh.position.copy(root.worldToLocal(new THREE.Vector3(p.x,p.y,p.z)));mesh.rotation.set(clockTime*3,clockTime*5,0);}
   return event;
  },
  dispose(){mixer.stopAllAction();mixer.uncacheRoot(model);skeletons.forEach(s=>s.dispose());clearProjectiles();ballGeometry.dispose();glowGeometry.dispose();rock.dispose();glow.dispose();material.dispose();for(const p of palms)p.orb.geometry.dispose();},
 };
}
