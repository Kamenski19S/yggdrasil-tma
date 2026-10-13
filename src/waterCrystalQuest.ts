import type {Save} from './core';
import {liberationProgress} from './niflheimLiberation';
export const CRYSTAL_NAME='Кристалл первозданной воды';
export const CRYSTAL_PARTS=[
 {id:'mountain',name:'Осколок чистоты',place:'Алтарь Снежной горы',trial:'snowMountain'},
 {id:'memory',name:'Осколок памяти',place:'Алтарь Пещеры воспоминаний',trial:'memoryCave'},
 {id:'roots',name:'Осколок жизни',place:'Багровое место возле воительницы',trial:'roots'}
] as const;
export type CrystalPartId=typeof CRYSTAL_PARTS[number]['id'];
export type CrystalEvent=`collect:${CrystalPartId}`|'assemble'|'openGate';
const key=(id:string)=>'niflheim:waterCrystal:'+id;
export function waterCrystalProgress(done:readonly string[]){
 const collected=CRYSTAL_PARTS.filter(p=>done.includes(key(p.id))).map(p=>p.id);
 const assembled=done.includes(key('assembled'));
 const gateOpen=done.includes('muspelheim:firstGate:opened');
 const dragonDefeated=done.includes('niflheim:dragon:defeated');
 const lib=liberationProgress(done);
 return {collected,assembled,gateOpen,dragonDefeated,ready:collected.length===3&&dragonDefeated&&!assembled,
  canCollect:(id:string)=>CRYSTAL_PARTS.some(p=>p.id===id&&lib.has(p.trial))&&!done.includes(key(id))&&!assembled&&!gateOpen};
}
export function applyCrystalEvent(save:Save,event:CrystalEvent):Save{
 const p=waterCrystalProgress(save.done);
 if(event.startsWith('collect:')){
  const id=event.slice(8);if(!p.canCollect(id))return save;
  return {...save,done:[...save.done,key(id)],lootCounts:{...save.lootCounts,['waterCrystal:'+id]:1}};
 }
 if(event==='assemble'){
  if(!p.ready)return save;
  const lootCounts:Record<string,number>={...save.lootCounts,waterCrystal:1};
  for(const part of CRYSTAL_PARTS)lootCounts['waterCrystal:'+part.id]=0;
  return {...save,done:[...save.done,key('assembled')],lootCounts};
 }
 if(event==='openGate'&&p.assembled&&p.dragonDefeated&&!p.gateOpen){
  return {...save,done:[...save.done,'muspelheim:firstGate:opened'],lootCounts:{...save.lootCounts,waterCrystal:0}};
 }
 return save;
}
