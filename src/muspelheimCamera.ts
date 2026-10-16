export type FollowCameraState={yaw:number;targetYaw:number;turnTime:number};
export const FOLLOW_DISTANCE=32;
export function screenMoveToWorld(x:number,z:number,basisYaw:number){
 const c=Math.cos(basisYaw),s=Math.sin(basisYaw);return {x:c*x+s*z,z:-s*x+c*z};
}
export function updateFollowCamera(state:FollowCameraState,dx:number,dz:number,dt:number){
 if(Math.hypot(dx,dz)>.00001){
  const target=Math.atan2(-dx,-dz),delta=Math.atan2(Math.sin(target-state.targetYaw),Math.cos(target-state.targetYaw));
  if(Math.abs(delta)>.06){state.targetYaw=target;state.turnTime=0;}
  state.turnTime+=dt;
 }
 // Hold the last view at rest. A short delay absorbs tiny steering corrections.
 if(state.turnTime>=.18){const delta=Math.atan2(Math.sin(state.targetYaw-state.yaw),Math.cos(state.targetYaw-state.yaw));
  state.yaw+=Math.max(-1.8*dt,Math.min(1.8*dt,delta*(1-Math.exp(-3.8*dt))));
 }
 return state.yaw;
}
export function safeCameraOffset(x:number,z:number,yaw:number,blocked:(x:number,z:number)=>boolean){
 const sx=Math.sin(yaw),sz=Math.cos(yaw);let distance=FOLLOW_DISTANCE;
 // Check the whole segment, including a thin obstacle before the end point.
 for(let d=1;d<=FOLLOW_DISTANCE;d++){if(blocked(x+sx*d,z+sz*d)){distance=Math.max(0,d-2);break;}}
 return {x:sx*distance,z:sz*distance,distance};
}
