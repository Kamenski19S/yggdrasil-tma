import * as THREE from 'three';
import {mineFrameAt,mineRouteFrame,MINE_ROUTE_LENGTH} from './ashMinePath';
export type MineCameraState={s:number;initialized:boolean};
export function mineCameraFrame(s:number){if(s<0){const f=mineFrameAt(0);return {...f,x:f.x+f.tx*s,z:f.z+f.tz*s};}if(s>MINE_ROUTE_LENGTH){const f=mineFrameAt(MINE_ROUTE_LENGTH),d=s-MINE_ROUTE_LENGTH;return {...f,x:f.x+f.tx*d,z:f.z+f.tz*d};}return mineFrameAt(s);}
export function mineCameraProgress(x:number,z:number){return z< -240?MINE_ROUTE_LENGTH-240-z:mineRouteFrame(x,z).s;}
/** Smooth the distance along the route, never interpolate through the rock on a bend. */
export function followMineCamera(state:MineCameraState,hero:{x:number;y:number;z:number},dt:number,floorAt:(x:number,z:number)=>number,obstacles:THREE.Object3D){
 const progress=mineCameraProgress(hero.x,hero.z),desired=progress-22;
 state.s=state.initialized?THREE.MathUtils.lerp(state.s,desired,1-Math.exp(-8*dt)):desired;state.initialized=true;state.s=THREE.MathUtils.clamp(state.s,progress-26,progress-16);
 const f=mineCameraFrame(state.s),target=new THREE.Vector3(hero.x,hero.y+8,hero.z),position=new THREE.Vector3(f.x,Math.max(hero.y+17,floorAt(f.x,f.z)+17),f.z),direction=position.clone().sub(target),length=direction.length();
 const ray=new THREE.Raycaster(target,direction.normalize(),.05,length+1.5),hit=ray.intersectObject(obstacles,true)[0];
 if(hit&&hit.distance<length+1.2){const safe=Math.max(.3,Math.min(length,hit.distance-1.5));position.copy(target).addScaledVector(direction,safe);}
 const horizontal=Math.hypot(position.x-hero.x,position.z-hero.z),yaw=Math.atan2(position.x-hero.x,position.z-hero.z);
 return {position,target,yaw,fov:horizontal<19?68:58};
}
