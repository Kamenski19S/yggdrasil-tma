import type {Save} from './core';
import {liberationProgress} from './niflheimLiberation';
export const AMULET_NAME='Амулет хранителей';
export const AMULET_PARTS=[
 {id:'shelter',name:'Осколок клятвы',trial:'shelter',place:'Приют хранителей',x:44,z:84},
 {id:'echo',name:'Осколок голоса',trial:'echoCave',place:'Пещера ледяного эха',x:78,z:65},
 {id:'names',name:'Осколок имени',trial:'namesHall',place:'Зал забытых имён',x:-76,z:-78},
 {id:'dry',name:'Осколок течения',trial:'lookout',place:'Пересохшее русло',x:-36,z:-124},
 {id:'source',name:'Осколок источника',trial:'hvergelmir',place:'Хвергельмир',x:-12,z:-94},
 {id:'ice',name:'Осколок памяти льда',trial:'frozenRiver',place:'Замёрзшее русло',x:-10,z:48}
] as const;
export type AmuletPartId=typeof AMULET_PARTS[number]['id'];
export type AmuletEvent=`collect:${AmuletPartId}`|'restore';
const key=(id:string)=>'niflheim:amulet:'+id;
export function amuletProgress(done:readonly string[]){
 const collected=AMULET_PARTS.filter(p=>done.includes(key(p.id))).map(p=>p.id);
 const restored=done.includes(key('restored')),lib=liberationProgress(done);
 return {collected,restored,ready:collected.length===6&&!restored,
  canCollect:(id:string)=>!restored&&!done.includes(key(id))&&AMULET_PARTS.some(p=>p.id===id&&lib.has(p.trial))};
}
export function applyAmuletEvent(s:Save,event:AmuletEvent):Save{
 const p=amuletProgress(s.done);
 if(event.startsWith('collect:')){const id=event.slice(8);if(!p.canCollect(id))return s;
  return {...s,done:[...s.done,key(id)],lootCounts:{...s.lootCounts,['amulet:'+id]:1}};
 }
 if(event==='restore'&&p.ready){const lootCounts:Record<string,number>={...s.lootCounts,guardianAmulet:1};for(const part of AMULET_PARTS)lootCounts['amulet:'+part.id]=0;
  return {...s,done:[...s.done,key('restored')],lootCounts};
 }
 return s;
}
export const finalDragonReady=(done:readonly string[],weapon:string)=>done.includes('niflheim:dragon:forged')&&amuletProgress(done).restored&&liberationProgress(done).finished&&weapon==='swordNidhogg'&&!done.includes('niflheim:dragon:defeated');
/** The amulet absorbs 30%; an activated heart weakens fire by a further 25%.
 * Applied to raw fire before armour and the shield's half-damage block. */
export function protectedDragonFire(raw:number,amulet:boolean,heart:boolean){return Math.max(1,Math.round(raw*(amulet?.7:1)*(heart?.75:1)));}
