export type MinePlayerAction='weapon'|'magic'|'barrier';
const COOLDOWN:Record<MinePlayerAction,number>={weapon:.65,magic:.9,barrier:5};
/** Touch cooldowns use monotonic real time, so slow rendering cannot swallow every subsequent press. */
export function createMinePlayerActions(){
 const last:Record<MinePlayerAction,number>={weapon:-Infinity,magic:-Infinity,barrier:-Infinity};
 return {request(kind:MinePlayerAction,now:number,available:boolean){if(!available||now-last[kind]<COOLDOWN[kind])return false;last[kind]=now;return true;}};
}
