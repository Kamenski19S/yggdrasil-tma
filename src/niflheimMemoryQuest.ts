const PREFIX='niflheim:memory:';
export const MEMORY_FINDS=[
  {id:'staff',name:'Обломок посоха',t:.72},
  {id:'medallion',name:'Медальон хранителя',t:.53},
  {id:'tablet',name:'Плитка с руной',t:.34}
];
export const SOURCE_RUNES=[{id:'ansuz',symbol:'ᚨ',name:'Ансуз — память'},{id:'laguz',symbol:'ᛚ',name:'Лагуз — вода'},{id:'berkano',symbol:'ᛒ',name:'Беркана — жизнь'}];
export const DRY_SEALS=[{id:'isa',symbol:'ᛁ',name:'Иса',meaning:'Лёд'},{id:'nauthiz',symbol:'ᚾ',name:'Наутиз',meaning:'Скованность'},{id:'hagalaz',symbol:'ᚺ',name:'Хагалаз',meaning:'Разрушение'}];
export type MemoryEvent='bridge:start'|'bridge:repair'|`bridge:find:${string}`|`seal:${string}`|'start'|'handover'|`find:${string}`|`rune:${string}`;
export const MEMORY_REWARD=60;
export function memoryQuest(done:string[]){
  const has=(id:string)=>done.includes(PREFIX+id);
  const found=MEMORY_FINDS.filter(f=>has(f.id));
  return {bridgeStarted:done.includes('niflheim:bridge:started'),bridgeParts:['west','east','north'].filter(id=>done.includes('niflheim:bridge:part:'+id)),bridgeRestored:done.includes('niflheim:bridge:restored'),seals:DRY_SEALS.filter(r=>done.includes('niflheim:dry:'+r.id)),started:has('started'),found,ready:has('ready'),restored:has('restored'),step:has('rune:laguz')?2:has('rune:ansuz')?1:0};
}
/** The parent saves each transition; the final transition and reward are atomic and idempotent. */
export function applyMemoryEvent<T extends {done:string[];immortalityDrops:number;potions:string[];lootCounts:Record<string,number>}>(save:T,event:MemoryEvent):T{
  if(event.startsWith('bridge:')){const prefix='niflheim:bridge:',q=memoryQuest(save.done);let flag='';if(event==='bridge:start')flag=prefix+'started';else if(event.startsWith('bridge:find:')&&q.bridgeStarted&&!q.bridgeRestored){const id=event.slice(12);if(['west','east','north'].includes(id))flag=prefix+'part:'+id;}else if(event==='bridge:repair'&&q.bridgeStarted&&q.bridgeParts.length===3)flag=prefix+'restored';return flag&&!save.done.includes(flag)?{...save,done:[...save.done,flag]}:save;}
  if(event.startsWith('seal:')){const id=event.slice(5),flag='niflheim:dry:'+id;return DRY_SEALS.some(r=>r.id===id)&&!save.done.includes(flag)?{...save,done:[...save.done,flag]}:save;}
  const q=memoryQuest(save.done);if(q.restored)return save;
  const add=(...ids:string[])=>({...save,done:[...new Set([...save.done,...ids.map(id=>PREFIX+id)])]});
  if(event==='start')return q.started?save:add('started');
  if(event.startsWith('find:')){const id=event.slice(5);return MEMORY_FINDS.some(f=>f.id===id)&&!q.found.some(f=>f.id===id)?add('started',id):save;}
  if(event==='handover')return q.found.length===3&&!q.ready?add('ready'):save;
  if(event.startsWith('rune:')&&q.ready){
    const rune=event.slice(5);if(!SOURCE_RUNES.some(r=>r.id===rune))return save;
    if(rune!==SOURCE_RUNES[q.step].id)return {...save,done:save.done.filter(id=>!id.startsWith(PREFIX+'rune:'))};
    if(q.step<2)return add('rune:'+rune);
    return {...add('restored'),immortalityDrops:save.immortalityDrops+MEMORY_REWARD,potions:[...save.potions,'northernMoss'],lootCounts:{...save.lootCounts,northernMoss:(save.lootCounts.northernMoss??0)+1}};
  }
  return save;
}
