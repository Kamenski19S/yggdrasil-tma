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
 if(username.replace(/^@/,'').toLowerCase()!==RECIPIENT||save.done.includes(FLAG))return save;
 return {...save,immortalityDrops:save.immortalityDrops+PERSONAL_PLAYTEST_DROPS,done:[...save.done,FLAG]};
}
