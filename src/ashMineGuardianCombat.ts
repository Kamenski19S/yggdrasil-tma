export const OCEAN_GUARDIAN={id:'lakeGuardian',name:'Страж глубин',maxHp:900,attack:95,reward:800,x:29,z:-314,y:3,shoreX:26,shoreZ:-305};
export type GuardianAttack='slam'|'grab'|'sweep'|'wrap';
export type GuardianState={phase:'idle'|'windup'|'strike'|'hold'|'recover';kind:GuardianAttack;elapsed:number;cooldown:number;cycle:number;target:{x:number;y:number;z:number};impacted:boolean};
export const createGuardianState=():GuardianState=>({phase:'idle',kind:'slam',elapsed:0,cooldown:2.5,cycle:0,target:{x:0,y:0,z:0},impacted:false});
export function releaseGuardian(state:GuardianState){state.phase='recover';state.elapsed=0;state.cooldown=2.4;}
export function stepGuardian(state:GuardianState,dt:number,hero:{x:number;y:number;z:number},shielded:boolean,contact=true){
 const result={started:false,impact:false,caught:false,released:false,blocked:false};if(dt<=0)return result;
 const near=Math.hypot(hero.x-OCEAN_GUARDIAN.shoreX,hero.z-OCEAN_GUARDIAN.shoreZ)<16&&hero.y> -3;
 if(state.phase==='hold'){
  state.elapsed+=dt;if(shielded||!near||state.elapsed>=2){releaseGuardian(state);result.released=true;}return result;
 }
 if(state.phase==='idle'){
  state.cooldown=Math.max(0,state.cooldown-dt);if(near&&state.cooldown===0){const kinds:GuardianAttack[]=['slam','grab','sweep','wrap'];state.kind=kinds[state.cycle++%kinds.length];state.phase='windup';state.elapsed=0;state.impacted=false;state.target={...hero};result.started=true;}return result;
 }
 state.elapsed+=dt;
 if(state.phase==='windup'){if(!near){releaseGuardian(state);return result;}if(state.elapsed>=1.25){state.phase='strike';state.elapsed=0;}return result;}
 if(state.phase==='strike'){
  if(!state.impacted&&state.elapsed>=.28){state.impacted=true;const radius=state.kind==='sweep'?5:3.5;const close=Math.hypot(hero.x-state.target.x,hero.z-state.target.z)<=radius&&Math.abs(hero.y-state.target.y)<4;
   if(near&&close&&contact){result.impact=true;result.blocked=shielded;if(!shielded&&(state.kind==='grab'||state.kind==='wrap')){state.phase='hold';state.elapsed=0;result.caught=true;return result;}}
  }
  if(state.elapsed>=.55)releaseGuardian(state);return result;
 }
 if(state.elapsed>=1.05){state.phase='idle';state.elapsed=0;state.cooldown=2;}return result;
}
