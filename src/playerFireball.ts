import * as THREE from 'three';
import {createFireStrikeVfx} from './fireStrikeVfx';
export const PLAYER_FIREBALL={speed:115,range:100,cooldown:.7,radius:1.1,interrupt:2};
export type FireballBody={x:number;y:number;z:number;radius:number;height:number};
export type FireballTarget={body:()=>FireballBody;alive:()=>boolean;hit:(damage:number,seconds:number)=>void};
type Point={x:number;y:number;z:number};
/** Shared physical projectile for every Muspelheim scene; no nearby enemy is required to cast. */
export function createPlayerFireball(targets:()=>FireballTarget[],obstructed:(from:Point,to:Point)=>boolean=()=>false){
 const vfx=createFireStrikeVfx({tint:new THREE.Color(1.4,.18,.07),impactDuration:.32,projectileOrb:true}),root=vfx.root;root.name='Алый огненный сгусток Vicki';
 const shots:Array<{id:number;position:THREE.Vector3;velocity:THREE.Vector3;distance:number;damage:number}>=[];let serial=0,lastCast=-Infinity,disposed=false;
 const origin=new THREE.Vector3(),forward=new THREE.Vector3(),focus={x:0,y:0,z:0};
 const pathBlocked=(a:Point,b:Point)=>{const n=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.y-a.y,b.z-a.z)/.35));let prev=a;for(let i=1;i<=n;i++){const t=i/n,next={x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t,z:a.z+(b.z-a.z)*t};if(obstructed(prev,next))return true;prev=next;}return false;};
 const chest=(hero:THREE.Object3D)=>{let bone:THREE.Object3D|undefined;hero.traverse(o=>{if(o.name.replace(/[^a-zA-Z0-9]/g,'').endsWith('Spine2'))bone=o;});return bone?bone.getWorldPosition(origin):origin.copy(hero.position).add(new THREE.Vector3(0,10,0));};
 function impact(p:Point){Object.assign(focus,{x:p.x,y:p.y-7,z:p.z});vfx.impact({x:p.x,y:p.y-7,z:p.z});}
 return {root,get projectiles(){return shots;},
  cast(hero:THREE.Object3D,damage:number,now=performance.now()/1000){if(disposed||now-lastCast<PLAYER_FIREBALL.cooldown)return false;lastCast=now;hero.updateWorldMatrix(true,true);chest(hero);forward.set(Math.sin(hero.rotation.y),0,Math.cos(hero.rotation.y));
   const visible=targets().filter(t=>{if(!t.alive())return false;const b=t.body(),d=new THREE.Vector3(b.x,b.y+b.height*.6,b.z).sub(origin);return d.length()<PLAYER_FIREBALL.range&&d.clone().normalize().dot(forward)>.15&&!pathBlocked(origin,{x:b.x,y:b.y+b.height*.6,z:b.z});}).sort((a,b)=>{const p=a.body(),q=b.body();return Math.hypot(p.x-origin.x,p.z-origin.z)-Math.hypot(q.x-origin.x,q.z-origin.z);})[0];
   if(visible){const b=visible.body();forward.set(b.x-origin.x,b.y+b.height*.6-origin.y,b.z-origin.z).normalize();hero.rotation.y=Math.atan2(forward.x,forward.z);}
   // Start beyond the torso at chest height; collision still checks the short muzzle segment.
   const position=origin.clone().addScaledVector(forward,2.5);if(pathBlocked(origin,position)){impact(origin);return true;}
   if(shots.length>=4)shots.shift();shots.push({id:++serial,position,velocity:forward.clone().multiplyScalar(PLAYER_FIREBALL.speed),distance:0,damage:Math.max(1,damage)});return true;
  },
  update(dt:number,camera:THREE.Camera){if(disposed)return;const list=targets();for(let i=shots.length-1;i>=0;i--){const shot=shots[i],travel=Math.min(PLAYER_FIREBALL.speed*dt,PLAYER_FIREBALL.range-shot.distance),steps=Math.max(1,Math.ceil(travel/.35)),step=shot.velocity.clone().normalize().multiplyScalar(travel/steps);let remove=false;
    for(let j=0;j<steps&&travel>0;j++){const next=shot.position.clone().add(step);if(obstructed(shot.position,next)){shot.position.copy(next);impact(next);remove=true;break;}shot.position.copy(next);shot.distance+=step.length();const target=list.find(t=>{if(!t.alive())return false;const b=t.body();return next.y>=b.y-PLAYER_FIREBALL.radius&&next.y<=b.y+b.height+PLAYER_FIREBALL.radius&&Math.hypot(next.x-b.x,next.z-b.z)<=b.radius+PLAYER_FIREBALL.radius;});if(target){target.hit(shot.damage,PLAYER_FIREBALL.interrupt);impact(next);remove=true;break;}}
    if(remove||shot.distance>=PLAYER_FIREBALL.range)shots.splice(i,1);else vfx.bolt('vicki-'+shot.id,{...shot.position,vx:shot.velocity.x,vy:shot.velocity.y,vz:shot.velocity.z});
   }vfx.update(dt,camera,focus,0);
  },syncCamera(camera:THREE.Camera){vfx.update(0,camera,focus,0);},clear(){shots.length=0;vfx.clear();},dispose(){if(disposed)return;disposed=true;shots.length=0;vfx.dispose();},
 };
}
