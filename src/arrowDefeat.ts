export const ARROW_FALL_SECONDS=.65;
export const ARROW_RESPAWN_DELAY=1.3;
/** Show the fall before the single respawn callback; paused tabs do not advance it. */
export function createArrowDefeatSequence(){
 let elapsed=-1,reported=false;
 return {get active(){return elapsed>=0;},start(){if(elapsed>=0)return false;elapsed=0;return true;},step(dt:number){
  if(elapsed<0)return {angle:0,x:0,y:0,finished:false};
  elapsed=Math.min(ARROW_RESPAWN_DELAY,elapsed+Math.max(0,dt));const t=Math.min(1,elapsed/ARROW_FALL_SECONDS),ease=t*t*(3-2*t),angle=-Math.PI/2*ease;
  const finished=!reported&&elapsed>=ARROW_RESPAWN_DELAY;if(finished)reported=true;
  return {angle,x:7*Math.sin(angle),y:2*Math.sin(angle)**2,finished};
 }};
}
