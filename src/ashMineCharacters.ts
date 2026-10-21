import * as THREE from 'three';
import {clone} from 'three/examples/jsm/utils/SkeletonUtils.js';
import {mineFrameAt} from './ashMinePath';
export const MINE_CHARACTER_ASSETS=['Ash_Mine_Dwarf_Worker.glb','Ash_Mine_Dwarf_Warrior.glb','Ash_Mine_Goblin_Helper.glb'] as const;
export const MINE_CHARACTER_CREDITS=[
 {title:'Dwarf miner fantasy',author:'3dUVpro',url:'https://sketchfab.com/3d-models/dwarf-miner-fantasy-5f3275caa74245279b764dfbb3b8878f'},
 {title:'Dwarf Warrior',author:'Northcliffe',url:'https://sketchfab.com/3d-models/dwarf-warrior-b9fcc240bc0642649d39a8ca845b56aa'},
 {title:'Goblin Simple',author:'marianofer1996',url:'https://sketchfab.com/3d-models/goblin-simple-b4916554ec4441d6bd363c2176a6bb6c'},
];
export type MineCharacterRole='worker'|'guard'|'helper';
export const MINE_CHARACTER_HEIGHT={worker:5.8,helper:7.6,guard:10.6};
export const MINE_WORKER_ROUTES=[
 {role:'worker',start:60,end:92,offset:-8,speed:7,pause:2,phase:0},
 {role:'worker',start:145,end:180,offset:8,speed:7.5,pause:2.4,phase:3},
 {role:'worker',start:215,end:245,offset:-8,speed:8,pause:2.2,phase:5},
 {role:'worker',start:300,end:327,offset:8,speed:6.5,pause:2.5,phase:1},
 {role:'helper',start:35,end:115,offset:7,speed:9,pause:1.7,phase:2},
 {role:'helper',start:195,end:285,offset:-7,speed:9.5,pause:1.8,phase:4},
] satisfies Array<{role:MineCharacterRole;start:number;end:number;offset:number;speed:number;pause:number;phase:number}>;
export function mineWorkerPose(route:typeof MINE_WORKER_ROUTES[number],time:number){
 const travel=(route.end-route.start)/route.speed,period=2*(travel+route.pause),t=(time+route.phase)%period,forward=t<travel+route.pause;
 const moving=t<travel||(t>=travel+route.pause&&t<2*travel+route.pause),s=forward?route.start+Math.min(t,travel)*route.speed:route.end-Math.min(t-travel-route.pause,travel)*route.speed;
 const f=mineFrameAt(s),direction=forward?1:-1;
 return {x:f.x+f.nx*route.offset,z:f.z+f.nz*route.offset,yaw:Math.atan2(f.tx*direction,f.tz*direction),moving};
}
/** Average opposite walking phases to make a planted neutral stance for the warrior. */
function neutralFromWalk(walk:THREE.AnimationClip){
 return new THREE.AnimationClip('Guard_Idle',1,walk.tracks.map(track=>{
  const sampler=(track as THREE.KeyframeTrack&{createInterpolant:()=>THREE.Interpolant}).createInterpolant(),a=Array.from(sampler.evaluate(0) as ArrayLike<number>),b=Array.from(sampler.evaluate(walk.duration/2) as ArrayLike<number>);let value:number[];
  if(track instanceof THREE.QuaternionKeyframeTrack)value=new THREE.Quaternion().fromArray(a).slerp(new THREE.Quaternion().fromArray(b),.5).normalize().toArray();
  else value=a.map((v,i)=>(v+b[i])/2);
  const result=track.clone();result.times=new Float32Array([0,1]);result.values=new Float32Array([...value,...value]);return result;
 }));
}
export function createMineCharacter(role:MineCharacterRole){
 const root=new THREE.Group();root.name=role==='guard'?'Пепельный страж — гном-воин':role==='worker'?'Маленький пепельный гном — рабочий':'Гоблин — помощник шахты';
 let mixer:THREE.AnimationMixer|undefined,walk:THREE.AnimationAction|undefined,idle:THREE.AnimationAction|undefined,current:THREE.AnimationAction|undefined,visual:THREE.Group|undefined,last=0,windupStart=0,release=-10,wasStriking=false;
 let rest:Array<{bone:THREE.Bone;p:THREE.Vector3;q:THREE.Quaternion;s:THREE.Vector3}>=[],arms:THREE.Bone[]=[],forearms:THREE.Bone[]=[],skeletons:THREE.Skeleton[]=[],weaponLinks:Array<{hand:THREE.Bone;control:THREE.Bone}>=[];
 let attackSide='L';
 const install=(source:THREE.Object3D,animations:THREE.AnimationClip[])=>{
  const model=clone(source);
  // This static mesh is the goblin's presentation plinth, not its body.
  if(role==='helper')model.getObjectByName('Object_76')?.removeFromParent();
  model.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(model),height=MINE_CHARACTER_HEIGHT[role],scale=height/Math.max(.001,box.max.y-box.min.y);
  // The warrior's exported body shape key contains offsets hundreds of units
  // wide. Its walk clip pulses that key, turning the body into giant panels.
  // Keep the base body and all skeletal motion; never play that broken key.
  if(role==='guard'){
   model.traverse(o=>{if(o instanceof THREE.Mesh)o.morphTargetInfluences?.fill(0);});
   animations=animations.map(clip=>new THREE.AnimationClip(clip.name,clip.duration,clip.tracks.filter(track=>!track.name.includes('.morphTargetInfluences')),clip.blendMode));
  }
  visual=new THREE.Group();visual.name='Модель персонажа';visual.scale.setScalar(scale);visual.position.y=-box.min.y*scale;visual.add(model);root.add(visual);
  model.traverse(o=>{if(o instanceof THREE.Bone){rest.push({bone:o,p:o.position.clone(),q:o.quaternion.clone(),s:o.scale.clone()});if(/^Arm[LR]_/.test(o.name))arms.push(o);if(/^ForeArm[LR]_/.test(o.name))forearms.push(o);}if(o instanceof THREE.SkinnedMesh){o.frustumCulled=false;skeletons.push(o.skeleton);}});
  for(const side of ['L','R']){const hand=rest.find(r=>r.bone.name.startsWith('Hand'+side+'_'))?.bone,control=rest.find(r=>r.bone.name.startsWith('MCH_Handel'+side+'_'))?.bone;if(hand&&control)weaponLinks.push({hand,control});}
  mixer=new THREE.AnimationMixer(model);const find=(...names:string[])=>names.map(n=>animations.find(a=>a.name===n)).find(Boolean);
  const motion=role==='worker'?find('Run','Walk'):role==='helper'?find('G_Walk'):find('walk');
  const standing=find('Idle','G_Idle1')??(motion?neutralFromWalk(motion):animations[0]);
  if(motion)walk=mixer.clipAction(motion);if(standing)idle=mixer.clipAction(standing);
  if(walk)walk.timeScale=role==='helper'?1.35:role==='worker'?.9:1;
  idle?.play();current=idle;mixer.update(0);for(const r of rest){r.p.copy(r.bone.position);r.q.copy(r.bone.quaternion);r.s.copy(r.bone.scale);}
 };
 const update=(time:number,moving=false,striking=false)=>{
  if(!mixer||!visual)return;const dt=Math.max(0,Math.min(.1,time-last));last=time;
  for(const r of rest){r.bone.position.copy(r.p);r.bone.quaternion.copy(r.q);r.bone.scale.copy(r.s);}
  const action=moving&&!striking?walk:idle;if(action&&action!==current){current?.fadeOut(.12);action.reset().fadeIn(.12).play();current=action;}mixer.update(dt);
  for(const r of rest){r.p.copy(r.bone.position);r.q.copy(r.bone.quaternion);r.s.copy(r.bone.scale);}
  if(role==='guard'){
   if(striking&&!wasStriking){windupStart=time;attackSide=attackSide==='L'?'R':'L';}if(!striking&&wasStriking)release=time;
   const wind=THREE.MathUtils.smoothstep(time-windupStart,0,.65),age=time-release;
   const angle=striking?2.2*wind:age<.18?THREE.MathUtils.lerp(2.2,5.3,THREE.MathUtils.smoothstep(age,0,.14)):age<.4?THREE.MathUtils.lerp(5.3,Math.PI*2,THREE.MathUtils.smoothstep(age,.18,.4)):0;
   const bend=striking?-.35*wind:age<.4?-.35*(1-THREE.MathUtils.smoothstep(age,0,.4)):0;
   visual.updateWorldMatrix(true,true);
   const links=angle===0?[]:weaponLinks.filter(link=>link.hand.name.startsWith('Hand'+attackSide+'_')).map(link=>({...link,handBefore:link.hand.matrixWorld.clone(),toolBefore:link.control.matrixWorld.clone()}));
   const axis=new THREE.Vector3(1,0,0).applyQuaternion(root.getWorldQuaternion(new THREE.Quaternion()));
   const turn=(bone:THREE.Bone,amount:number)=>{bone.parent!.updateWorldMatrix(true,false);const parent=bone.parent!.getWorldQuaternion(new THREE.Quaternion()),delta=new THREE.Quaternion().setFromAxisAngle(axis,amount);delta.premultiply(parent.clone().invert()).multiply(parent);bone.quaternion.premultiply(delta).normalize();bone.updateWorldMatrix(false,true);};
   for(const arm of arms)if(arm.name.startsWith('Arm'+attackSide+'_'))turn(arm,angle);for(const arm of forearms)if(arm.name.startsWith('ForeArm'+attackSide+'_'))turn(arm,bend);
   visual.updateWorldMatrix(true,true);
   for(const link of links){const world=link.hand.matrixWorld.clone().multiply(link.handBefore.invert()).multiply(link.toolBefore),local=link.control.parent!.matrixWorld.clone().invert().multiply(world);local.decompose(link.control.position,link.control.quaternion,link.control.scale);link.control.updateWorldMatrix(false,true);}

   visual.position.z=striking?.25*wind:age<.4?.7*Math.sin(Math.PI*Math.max(0,age)/.4):0;wasStriking=striking;
  }
 };
 return {root,install,update,dispose:()=>{mixer?.stopAllAction();for(const s of skeletons)s.dispose();}};
}
