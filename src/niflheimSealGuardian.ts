import * as THREE from 'three';
import {CAVE_FRONT_Z,CAVE_FLOOR_Y,CAVE_MOUTH_X,type createCaveSpace} from './niflheimCaveEntrance';
import {niflGroundY} from './niflheimMapData';

export const SEAL_PLUNGE_IMPACT=.62;
/** Scourger Rig by DM-913, CC BY 4.0. Shared animated guardian for every seal. */
export function installSealGuardian(scene:THREE.Scene,asset:{scene:THREE.Group;animations:THREE.AnimationClip[]},space:ReturnType<typeof createCaveSpace>,angle:number){
 const root=new THREE.Group();root.name='Страж печати — Scourger';
 const point=space.world(CAVE_MOUTH_X-5.2,CAVE_FLOOR_Y,CAVE_FRONT_Z+3.8);
 const home=new THREE.Vector3(point.x,niflGroundY(point.x,point.z),point.z);
 root.position.copy(home);root.rotation.y=angle;
 const model=asset.scene,box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3()),centre=box.getCenter(new THREE.Vector3()),scale=11.4/Math.max(.001,size.y);
 model.scale.setScalar(scale);model.position.set(-centre.x*scale,-box.min.y*scale,-centre.z*scale);
 model.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;if(o instanceof THREE.SkinnedMesh)o.frustumCulled=false;}});
 root.add(model);scene.add(root);
 const clips=asset.animations.map(original=>{const clip=original.clone(),start=Math.min(...clip.tracks.map(t=>t.times[0]??Infinity));if(Number.isFinite(start)&&start>0)clip.tracks.forEach(t=>t.shift(-start));clip.resetDuration();return clip;});
 const mixer=new THREE.AnimationMixer(model);
 const idle=clips.find(c=>/idle/i.test(c.name))||clips[0],attack=clips.find(c=>/plunge/i.test(c.name))||clips.find(c=>/attack/i.test(c.name));
 const idleAction=idle?mixer.clipAction(idle):null,attackAction=attack?mixer.clipAction(attack):null;
 const attackDuration=Math.max(1.8,attack?.duration||2.8);
 let attackElapsed=-1,cooldown=.45,wasSummoned=false,dying=-1,impactDone=false;
 const dive=new THREE.Vector3();
 const rest=()=>{attackAction?.stop();idleAction?.reset().setEffectiveWeight(1).fadeIn(.12).play();};
 const strike=()=>{
  if(attackElapsed>=0||dying>=0)return;
  attackElapsed=0;impactDone=false;idleAction?.fadeOut(.12);
  if(attackAction){attackAction.reset().setEffectiveWeight(1).setEffectiveTimeScale((attack?.duration||attackDuration)/attackDuration).setLoop(THREE.LoopOnce,1);attackAction.clampWhenFinished=true;attackAction.fadeIn(.12).play();}
 };
 idleAction?.play();root.visible=false;
 return {
  root,strike,
  moveTo(x:number,z:number,rotation:number,y=niflGroundY(x,z)){
   home.set(x,y,z);root.position.copy(home);root.rotation.set(0,rotation,0);attackElapsed=-1;dying=-1;cooldown=.45;wasSummoned=false;rest();
  },
  defeat(){attackElapsed=-1;dying=0;attackAction?.stop();idleAction?.stop();},
  /** Impact is emitted once at the landing, on the same clock as the visible dive. */
  update(dt:number,summoned:boolean,closed:boolean,paused=false,hero?:{x:number;z:number}):boolean{
   if(dying>=0){
    root.visible=closed;if(paused)return false;dying+=dt;root.position.y=home.y-Math.min(1,dying)*1.6;root.rotation.z=Math.min(1,dying)*.75;
    if(dying>=1.2){dying=-1;root.visible=false;wasSummoned=false;}return false;
   }
   root.visible=summoned&&closed;
   if(!root.visible){wasSummoned=false;attackElapsed=-1;return false;}
   if(!wasSummoned){wasSummoned=true;cooldown=.45;rest();}
   if(paused)return false;
   if(hero)root.rotation.y=Math.atan2(hero.x-root.position.x,hero.z-root.position.z);
   mixer.update(dt);
   if(attackElapsed<0){
    root.position.copy(home);cooldown-=dt;
    if(cooldown<=0){
     dive.copy(home);if(hero){const dx=hero.x-home.x,dz=hero.z-home.z,d=Math.hypot(dx,dz),step=Math.min(3,Math.max(0,d-3.2));if(d>0){dive.x+=dx/d*step;dive.z+=dz/d*step;}}
     strike();
    }
    return false;
   }
   attackElapsed=Math.min(attackDuration,attackElapsed+dt);const t=attackElapsed/attackDuration;
   const advance=t<.32?0:t<SEAL_PLUNGE_IMPACT?(t-.32)/(SEAL_PLUNGE_IMPACT-.32):t<.85?1:1-(t-.85)/.15;
   root.position.lerpVectors(home,dive,Math.max(0,Math.min(1,advance)));
   const lift=t<.32?Math.sin(t/.32*Math.PI/2)*3.8:t<SEAL_PLUNGE_IMPACT?3.8*(1-(t-.32)/(SEAL_PLUNGE_IMPACT-.32))**2:0;
   root.position.y=home.y+lift;
   let impact=false;if(!impactDone&&t>=SEAL_PLUNGE_IMPACT){impactDone=true;impact=true;}
   if(attackElapsed>=attackDuration){attackElapsed=-1;cooldown=.6;root.position.copy(home);rest();}
   return impact;
  },
  dispose(){mixer.stopAllAction();scene.remove(root);}
 };
}
