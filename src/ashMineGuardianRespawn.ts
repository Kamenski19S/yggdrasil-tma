import {OCEAN_GUARDIAN} from './ashMineGuardianCombat';
export const GUARDIAN_RESPAWN_MS=10*60*1000;
const KEY='yggdrasil:ash-mine:guardian:defeatedAt:v1';
export function guardianRespawnDue(defeatedAt:number|null,now=Date.now()){
 return defeatedAt!==null&&now-defeatedAt>=GUARDIAN_RESPAWN_MS;
}
export function readGuardianDefeat(now=Date.now()):number|null{
 try{const raw=localStorage.getItem(KEY);if(raw===null)return null;const at=Number(raw);return Number.isFinite(at)&&at>=0&&at<=now?at:null;}catch{return null;}
}
export function writeGuardianDefeat(at:number|null){try{if(at===null)localStorage.removeItem(KEY);else localStorage.setItem(KEY,String(at));}catch{}}
export function restoreGuardianLife(savedHp:number|undefined,defeatedAt:number|null,now=Date.now()){
 if(defeatedAt!==null&&!guardianRespawnDue(defeatedAt,now))return {hp:0,defeatedAt};
 // Old saves used a permanent quest flag/zero checkpoint HP. Revive those immediately.
 const validHp=typeof savedHp==='number'&&Number.isFinite(savedHp)&&savedHp>0;
 const hp=defeatedAt!==null||!validHp?OCEAN_GUARDIAN.maxHp:Math.min(OCEAN_GUARDIAN.maxHp,savedHp);
 return {hp,defeatedAt:null};
}
