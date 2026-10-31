import {createHeroShieldPose} from './heroShieldPose';
import * as THREE from 'three';

/** Locomotion, a complete weapon swing, and the same raised shield pose as Niflheim. */
export function createMuspelheimHeroActions(model:THREE.Object3D,mixer:THREE.AnimationMixer,clips:THREE.AnimationClip[]){
 const find=(...names:string[])=>names.map(n=>THREE.AnimationClip.findByName(clips,n)).find(Boolean);
 const idle=find('idle','sword_idle')??clips[0],walk=find('walk_loop','walk')??idle,run=find('run_loop','run','sprint')??walk,attack=find('sword_attack','attack');
 let current:THREE.AnimationAction|undefined,attackLeft=0,guardLeft=0,impactAt=0;
 const shieldPose=createHeroShieldPose(model);
 const play=(clip:THREE.AnimationClip|undefined,once=false)=>{if(!clip)return;const action=mixer.clipAction(clip);if(action===current)return;current?.fadeOut(.15);action.reset().setLoop(once?THREE.LoopOnce:THREE.LoopRepeat,once?1:Infinity);action.clampWhenFinished=once;action.fadeIn(.15).play();current=action;};
 play(idle);
 return {
  attack(){if(attackLeft>0||!attack)return false;guardLeft=0;attackLeft=attack.duration;impactAt=attack.duration-.6;play(attack,true);return true;},
  shield(){attackLeft=0;guardLeft=1.25;play(idle);return true;},
  get guarding(){return guardLeft>0;},
  update(dt:number,moving:boolean,running:boolean,shieldEquipped:boolean){
   // Restore the animated pose before applying another procedural shield lift.
   shieldPose.restore();
   const beforeAttack=attackLeft;
   attackLeft=Math.max(0,attackLeft-dt);guardLeft=Math.max(0,guardLeft-dt);
   if(dt>0&&!attackLeft)play(moving?(running?run:walk):idle);
   if(walk)mixer.clipAction(walk).timeScale=running&&run===walk?1.6:1;
   mixer.update(dt);shieldPose.apply(dt,shieldEquipped&&guardLeft>0);
   return dt>0&&beforeAttack>impactAt&&attackLeft<=impactAt;
  }
 };
}
