import * as THREE from 'three';

/** Locomotion, a complete weapon swing, and the same raised shield pose as Niflheim. */
export function createMuspelheimHeroActions(model:THREE.Object3D,mixer:THREE.AnimationMixer,clips:THREE.AnimationClip[]){
 const find=(...names:string[])=>names.map(n=>THREE.AnimationClip.findByName(clips,n)).find(Boolean);
 const idle=find('idle','sword_idle')??clips[0],walk=find('walk_loop','walk')??idle,run=find('run_loop','run','sprint')??walk,attack=find('sword_attack','attack');
 let current:THREE.AnimationAction|undefined,attackLeft=0,guardLeft=0;
 const bones=['LeftArm','LeftForeArm'].map(name=>{let bone:THREE.Object3D|undefined;model.traverse(o=>{if(o.name.replace(/[^a-zA-Z0-9]/g,'').endsWith(name))bone=o;});return bone;});
 const base=bones.map(b=>b?.quaternion.clone());
 const play=(clip:THREE.AnimationClip|undefined,once=false)=>{if(!clip)return;const action=mixer.clipAction(clip);if(action===current)return;current?.fadeOut(.15);action.reset().setLoop(once?THREE.LoopOnce:THREE.LoopRepeat,once?1:Infinity);action.clampWhenFinished=once;action.fadeIn(.15).play();current=action;};
 play(idle);
 return {
  attack(){if(attackLeft>0||!attack)return false;guardLeft=0;attackLeft=attack.duration;play(attack,true);return true;},
  shield(){if(attackLeft>0)return false;guardLeft=1.25;return true;},
  update(dt:number,moving:boolean,running:boolean,shieldEquipped:boolean){
   // Restore the animated pose before applying another procedural shield lift.
   bones.forEach((b,i)=>{if(b&&base[i])b.quaternion.copy(base[i]!);});
   attackLeft=Math.max(0,attackLeft-dt);guardLeft=Math.max(0,guardLeft-dt);
   if(dt>0&&!attackLeft)play(moving?(running?run:walk):idle);
   if(walk)mixer.clipAction(walk).timeScale=running&&run===walk?1.6:1;
   mixer.update(dt);bones.forEach((b,i)=>{if(b&&base[i])base[i]!.copy(b.quaternion);});
   const lift=shieldEquipped&&guardLeft>0?Math.min((1.25-guardLeft)/.17,guardLeft/.26,1):0;
   if(lift>0){bones[0]?.rotateX(-lift*1.9);bones[0]?.rotateY(-lift);bones[0]?.rotateZ(lift*1.1);bones[1]?.rotateX(-lift*.3);}
  }
 };
}
