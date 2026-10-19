export type MineGuardState={windup:number;cooldown:number};
/** Resolve against the current position; turning away cancels a strike before damage. */
export function stepMineGuard(state:MineGuardState,dt:number,distance:number,retreating:boolean,lineOfSight:boolean){
 state.cooldown=Math.max(0,state.cooldown-dt);
 if(retreating||!lineOfSight||distance>11){if(state.windup>0)state.cooldown=Math.max(state.cooldown,.8);state.windup=0;return {hit:false,started:false,chase:!retreating&&lineOfSight&&distance>8&&distance<18};}
 if(state.windup>0){state.windup-=dt;if(state.windup<=0){state.windup=0;state.cooldown=1.9;return {hit:distance<=10,started:false,chase:false};}return {hit:false,started:false,chase:false};}
 if(distance<=10&&state.cooldown===0){state.windup=.8;return {hit:false,started:true,chase:false};}
 return {hit:false,started:false,chase:false};
}
export function mineRetreating(hero:{x:number;z:number},guard:{x:number;z:number},dx:number,dz:number){return dx*(hero.x-guard.x)+dz*(hero.z-guard.z)>1e-5;}
