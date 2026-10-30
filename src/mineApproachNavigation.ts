import type {FollowCameraState} from './muspelheimCamera';
type Point={x:number;z:number};
/** Screen axes follow the rendered view, including during a held touch on the curved descent. */
export function mineApproachControlYaw(heldYaw:number,renderedYaw:number,routeViewActive:boolean){
 return routeViewActive?renderedYaw:heldYaw;
}
/** Use the interpolated camera's actual heading; never queue a turn from backward movement. */
export function settleMineApproachView(follow:FollowCameraState,eye:Point,target:Point){
 const dx=eye.x-target.x,dz=eye.z-target.z;
 const yaw=Math.hypot(dx,dz)>.001?Math.atan2(dx,dz):follow.yaw;
 follow.yaw=yaw;follow.targetYaw=yaw;follow.turnTime=0;return yaw;
}
