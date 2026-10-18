import type {Save} from './core';
export const FIRE_GOLD='muspelheimFireGold';
export const FIRE_GOLD_COST=1000;
export const MINE_GUARDS=[
 {id:'entrance',name:'Страж выработок',x:0,z:-56,hp:200,attack:45,reward:160},
 {id:'turn',name:'Страж рудной дороги',x:60,z:-96,hp:280,attack:58,reward:220},
 {id:'store',name:'Страж сокровищницы',x:84,z:-180,hp:360,attack:72,reward:280},
 {id:'foreman',name:'Начальник стражи',x:24,z:-240,hp:600,attack:90,reward:400},
] as const;
export type MineEvent='enter'|'gold'|'pay'|`guard:${typeof MINE_GUARDS[number]['id']}`;
export const mineKey=(id:string)=>'muspelheim:ashMine:'+id;
export function mineProgress(done:readonly string[],gold=0){
 const defeated=MINE_GUARDS.filter(g=>done.includes(mineKey('guard:'+g.id))).map(g=>g.id);
 return {entered:done.includes(mineKey('entered')),defeated,cleared:defeated.length===MINE_GUARDS.length,goldTaken:done.includes(mineKey('gold')),paid:done.includes(mineKey('paid')),gold};
}
export function applyMineEvent(save:Save,event:MineEvent):Save{
 const p=mineProgress(save.done,save.lootCounts[FIRE_GOLD]||0);
 const add=(id:string)=>[...save.done,mineKey(id)];
 if(event==='enter')return p.entered?save:{...save,done:add('entered')};
 if(!p.entered)return save;
 if(event.startsWith('guard:')){
  const guard=MINE_GUARDS.find(g=>'guard:'+g.id===event);
  if(!guard||save.done.includes(mineKey(event)))return save;
  return {...save,done:add(event),immortalityDrops:save.immortalityDrops+guard.reward};
 }
 if(event==='gold'&&p.cleared&&!p.goldTaken)return {...save,done:add('gold'),lootCounts:{...save.lootCounts,[FIRE_GOLD]:p.gold+FIRE_GOLD_COST}};
 if(event==='pay'&&p.goldTaken&&!p.paid&&p.gold>=FIRE_GOLD_COST)return {...save,done:add('paid'),lootCounts:{...save.lootCounts,[FIRE_GOLD]:p.gold-FIRE_GOLD_COST}};
 return save;
}
