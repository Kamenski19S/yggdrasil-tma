/** Mine shadow spell: drains currency only, never health or movement. */
export const SHADOW_STRIKE={charge:.25,speed:180,recover:.65,pause:2};
export const SHADOW_DRAIN={seconds:5,interval:1,drops:1};
export type ShadowDrain={remaining:number;clock:number};
export const createShadowDrain=():ShadowDrain=>({remaining:0,clock:0});
export function applyShadowDrain(s:ShadowDrain,blocked:boolean){
 if(blocked)return false;
 if(s.remaining<=0)s.clock=0;
 s.remaining=SHADOW_DRAIN.seconds;return true;
}
export function stepShadowDrain(s:ShadowDrain,dt:number){
 if(!Number.isFinite(dt)||dt<=0||s.remaining<=0)return 0;
 s.clock+=Math.min(dt,s.remaining);s.remaining=Math.max(0,s.remaining-dt);
 const ticks=Math.floor((s.clock+1e-8)/SHADOW_DRAIN.interval);
 s.clock=Math.max(0,s.clock-ticks*SHADOW_DRAIN.interval);
 if(s.remaining===0)s.clock=0;
 return ticks*SHADOW_DRAIN.drops;
}
export function drainImmortalityDrops(balance:number,amount:number){
 if(!Number.isFinite(amount)||amount<=0)return balance;
 return Math.max(0,balance-Math.floor(amount));
}
