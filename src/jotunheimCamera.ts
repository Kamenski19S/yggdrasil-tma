import * as THREE from 'three';
type Point={x:number;y:number;z:number};
export const JOTUNHEIM_CAMERA={distance:38,height:25,lookAhead:24,lookHeight:8,pivotHeight:14,clearance:3};
/** A low shoulder-height boom. Obstructions shorten or turn the boom; they
 * never launch it vertically above the hero as the old terrain-lift solver did. */
export function jotunheimCameraPose(hero:Point,yaw:number,sample:(x:number,z:number)=>number|null){
 const c=JOTUNHEIM_CAMERA;
 function candidate(angle:number){
  const sx=Math.sin(angle),sz=Math.cos(angle);let distance=c.distance;
  for(let d=.75;d<=c.distance;d+=.75){
   const t=d/c.distance,y=hero.y+c.pivotHeight+(c.height-c.pivotHeight)*t,floor=sample(hero.x+sx*d,hero.z+sz*d);
   if(floor!=null&&floor+c.clearance>y){distance=Math.max(.5,d-1.5);break;}
  }
  const t=distance/c.distance;
  return {yaw:angle,distance,position:{x:hero.x+sx*distance,y:hero.y+c.pivotHeight+(c.height-c.pivotHeight)*t,z:hero.z+sz*distance}};
 }
 let chosen=candidate(yaw);
 // Prefer the smallest deviation that restores useful headroom. This keeps the
 // horizon open in a canyon without turning an inspection into an aerial view.
 if(chosen.distance<26){
  for(const offset of [Math.PI/6,-Math.PI/6,Math.PI/3,-Math.PI/3,Math.PI/2,-Math.PI/2,Math.PI]){
   const next=candidate(yaw+offset);if(next.distance>chosen.distance+2)chosen=next;if(chosen.distance>=30)break;
  }
 }
 const ahead=c.lookAhead*Math.min(1,chosen.distance/c.distance);
 const target={x:hero.x-Math.sin(chosen.yaw)*ahead,y:hero.y+c.lookHeight,z:hero.z-Math.cos(chosen.yaw)*ahead};
 // Even a completely enclosed boom must not aim almost straight down.
 const horizontal=Math.hypot(chosen.position.x-target.x,chosen.position.z-target.z);
 target.y=Math.max(target.y,chosen.position.y-horizontal*Math.tan(Math.PI/10));
 const fov=48+THREE.MathUtils.clamp((26-chosen.distance)/10,0,1)*12;
 return {...chosen,target,fov};
}
