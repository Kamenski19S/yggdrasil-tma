import {MUSPELHEIM_LOCATION_SEALS,locationIsOpen} from './muspelheimLocationSeals';
import type {Save} from './core';

const RECIPIENT='ars_fortunae';
const FLAG='playtest:2026-10-15:ars-fortunae:drops';
export const PERSONAL_PLAYTEST_DROPS=1_000_000;

/** This static game's grant is scoped to Telegram's launch user and this save. */
export function telegramLaunchUsername(webAppUser:unknown,hash:string,search:string):string{
 if(webAppUser&&typeof webAppUser==='object'&&'username' in webAppUser&&typeof webAppUser.username==='string')return webAppUser.username;
 // The game does not require the Telegram SDK; read its original launch data too.
 for(const source of [hash.replace(/^#/,''),search.replace(/^\?/, '')]){
  try{
   const data=new URLSearchParams(source).get('tgWebAppData');
   if(!data)continue;
   const user=JSON.parse(new URLSearchParams(data).get('user')||'null');
   if(typeof user?.username==='string')return user.username;
  }catch{/* A missing/malformed Telegram launch must never prevent loading a save. */}
 }
 return '';
}
export function applyPersonalPlaytestGrant(save:Save,username:string):Save{
 if(username.replace(/^@/,'').toLowerCase()!==RECIPIENT)return save;
 const next=save.done.includes(FLAG)?save:{...save,immortalityDrops:save.immortalityDrops+PERSONAL_PLAYTEST_DROPS,done:[...save.done,FLAG]};
 return applyMuspelheimPlaytestGrant(next);
}

export const personalPlaytestGrantClaimed=(save:Save)=>save.done.includes(FLAG);
/** Alternate claim when a Telegram URL launch omits the user's profile. Same flag. */
export function redeemPersonalPlaytestCode(save:Save,code:string):Save{
 if(code.trim().toUpperCase()==='FORTUNA-MUSPEL-6')return applyMuspelheimPlaytestGrant(save);
 if(code.trim().toUpperCase()!=='FORTUNA-NIFL-7Q9M')return save;
 return applyPersonalPlaytestGrant(save,RECIPIENT);
}


const MUSPEL_FLAG='playtest:2026-11-04:ars-fortunae:remaining-seals';
export const muspelheimPlaytestGrantClaimed=(save:Save)=>save.done.includes(MUSPEL_FLAG);
/** One top-up for the owner's requested playtest, after the first three paid seals. */
export function applyMuspelheimPlaytestGrant(save:Save):Save{
 if(muspelheimPlaytestGrantClaimed(save)||!MUSPELHEIM_LOCATION_SEALS.slice(0,3).every(s=>locationIsOpen(save.done,s.id)))return save;
 const remaining=MUSPELHEIM_LOCATION_SEALS.filter(s=>!locationIsOpen(save.done,s.id)).reduce((sum,s)=>sum+s.cost,0);
 const missing=Math.max(0,remaining-save.immortalityDrops);
 return {...save,immortalityDrops:save.immortalityDrops+missing,done:[...save.done,MUSPEL_FLAG]};
}
