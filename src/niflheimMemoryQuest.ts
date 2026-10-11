const PREFIX='niflheim:memory:';
export const MEMORY_FINDS=[
  {id:'staff',name:'Обломок посоха',t:.72},
  {id:'medallion',name:'Медальон хранителя',t:.53},
  {id:'tablet',name:'Плитка с руной',t:.34}
];
export const SOURCE_RUNES=[{id:'ansuz',symbol:'ᚨ',name:'Ансуз — память'},{id:'laguz',symbol:'ᛚ',name:'Лагуз — вода'},{id:'berkano',symbol:'ᛒ',name:'Беркана — жизнь'}];
export type MemoryEvent='start'|'handover'|`find:${string}`|`rune:${string}`;
export const MEMORY_REWARD=60;
export function memoryQuest(done:string[]){
  const has=(id:string)=>done.includes(PREFIX+id);
  const found=MEMORY_FINDS.filter(f=>has(f.id));
  return {started:has('started'),found,ready:has('ready'),restored:has('restored'),step:has('rune:laguz')?2:has('rune:ansuz')?1:0};
}
/** The parent saves each transition; the final transition and reward are atomic and idempotent. */
export function applyMemoryEvent<T extends {done:string[];immortalityDrops:number;potions:string[];lootCounts:Record<string,number>}>(save:T,event:MemoryEvent):T{
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
