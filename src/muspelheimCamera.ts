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
 if(state.turnTime>=.22){const delta=Math.atan2(Math.sin(state.targetYaw-state.yaw),Math.cos(state.targetYaw-state.yaw));
  state.yaw+=Math.max(-1.35*dt,Math.min(1.35*dt,delta*(1-Math.exp(-3*dt))));
 }
 return state.yaw;
}
export function safeCameraOffset(x:number,z:number,yaw:number,blocked:(x:number,z:number)=>boolean){
 const sx=Math.sin(yaw),sz=Math.cos(yaw);let distance=FOLLOW_DISTANCE;
 // Check the whole segment, including a thin obstacle before the end point.
 for(let d=1;d<=FOLLOW_DISTANCE;d++){if(blocked(x+sx*d,z+sz*d)){distance=Math.max(0,d-2);break;}}
 return {x:sx*distance,z:sz*distance,distance};
}

type CameraPoint={x:number;y:number;z:number};
/** Keep both the camera and its sight line above the sculpted terrain.
 * On steep banks, shorten the view before lifting it excessively. */
export function terrainSafeCameraPosition(focus:CameraPoint,desired:CameraPoint,sample:(x:number,z:number)=>number|null,clearance=4):CameraPoint{
 const dx=desired.x-focus.x,dz=desired.z-focus.z;
 let scale=1;
 for(let attempt=0;attempt<10;attempt++){
  const x=focus.x+dx*scale,z=focus.z+dz*scale;
  const steps=Math.max(1,Math.ceil(Math.hypot(x-focus.x,z-focus.z)/.5));
  let y=desired.y;
  for(let i=1;i<=steps;i++){
   const t=i/steps,height=sample(focus.x+(x-focus.x)*t,focus.z+(z-focus.z)*t);
   if(height!=null)y=Math.max(y,focus.y+(height+clearance-focus.y)/t);
  }
  if(y<=focus.y+36||attempt===9)return {x,y,z};
  scale*=.7;
 }
 return {...desired};
}
