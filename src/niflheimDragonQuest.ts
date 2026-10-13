import {liberationProgress} from './niflheimLiberation';
import type {Save,HeroWeapon} from './core';
import {RUNE_CATALOG} from './world';

// Quest flags are part of the existing shared nine-world save (Save.done).
// Never make the first dragon encounter lethal or consume the unique collectibles.
const PREFIX='niflheim:dragon:';
export const NIFL_ICE=[{id:'gate',x:11,z:116,name:'У входных врат'},{id:'forge',x:-33,z:105,name:'У кузницы великана'},{id:'shelter',x:22,z:108,name:'У дороги к приюту хранителей'}] as const;
export const NIFL_OBSIDIAN=[{id:'west',x:-23,z:-16,name:'Западная жила'},{id:'east',x:24,z:-24,name:'Восточная жила'},{id:'depths',x:-18,z:-54,name:'Глубокая жила'}] as const;
export const NIFL_CRAFTS:{id:HeroWeapon;name:string;steel:number;drops:number;need:'ice'|'obsidian'|'ember'}[]=[
  {id:'swordStar',name:'Меч звёздного серебра',steel:6,drops:150,need:'ice'},
  {id:'axeGiant',name:'Секира ледяного великана',steel:8,drops:200,need:'ice'},
  {id:'hammerRune',name:'Молот древних рун',steel:10,drops:260,need:'ember'},
  {id:'bladeObsidian',name:'Обсидиановый клинок',steel:12,drops:300,need:'obsidian'}
];
export function niflCraftUnlocked(progress:ReturnType<typeof dragonProgress>,recipe:typeof NIFL_CRAFTS[number]):boolean{
 // Finding components OR liberating the associated site unlocks a blueprint.
 // No unreachable three-fragment requirement for ordinary weapon crafting.
 if(recipe.need==='ice')return progress.ice.length>0||progress.liberation.has('snowMountain')||progress.liberation.has('frozenRiver');
 if(recipe.need==='obsidian')return progress.obsidian.length>0||progress.liberation.has('namesHall');
 return progress.ember||progress.liberation.has('threeNornsWell');
}
export type DragonEvent='tower:unseal'|'first'|'ember'|'forge'|'defeat'|'supply:rune'|'supply:potion'|'supply:steel'|`ice:${string}`|`obsidian:${string}`|`craft:${string}`;
export function dragonProgress(done:readonly string[]){
 const has=(key:string)=>done.includes(PREFIX+key);
 const ice=NIFL_ICE.filter(p=>has('ice:'+p.id));
 const obsidian=NIFL_OBSIDIAN.filter(p=>has('obsidian:'+p.id));
 const liberation=liberationProgress(done);
 const memoryRestored=done.includes('niflheim:memory:restored');
 const drySeals=['isa','nauthiz','hagalaz'].every(id=>done.includes('niflheim:dry:'+id));
 return {has,ice,obsidian,liberation,worldFreed:liberation.finished,memoryRestored,drySeals,sealReady:memoryRestored&&drySeals,unsealed:has('towerUnsealed'),met:has('first'),ember:has('ember'),forged:has('forged'),defeated:has('defeated')};
}
export function applyDragonQuestEvent(save:Save,event:DragonEvent):Save{
 const p=dragonProgress(save.done);
 const add=(key:string,more:Partial<Save>={})=>({...save,...more,done:[...save.done,PREFIX+key]});
 if(event==='tower:unseal')return !p.unsealed&&p.sealReady?add('towerUnsealed'):save;
 if(event==='first')return p.unsealed&&!p.met?add('first'):save;
 if(event.startsWith('ice:')){
  const id=event.slice(4);
  if(!NIFL_ICE.some(p=>p.id===id)||p.has('ice:'+id))return save;
  // A small potion per find keeps Niflheim self-sufficient.
  const potion=id==='shelter'?'lifeElixir':'northernMoss';
  return add('ice:'+id,{potions:[...save.potions,potion],lootCounts:{...save.lootCounts,[potion]:(save.lootCounts[potion]||0)+1}});
 }
 if(event.startsWith('obsidian:')){
  const id=event.slice(9);
  return !p.has('obsidian:'+id)&&NIFL_OBSIDIAN.some(o=>o.id===id)?add('obsidian:'+id):save;
 }
 if(event==='ember'){
  if(!p.met||!p.memoryRestored||p.ember)return save;
  // The smith's recovered memory unlocks the hearth and returns two steel.
  const rune='tiwazValor', potion='lifeElixir';
  return add('ember',{
   runeSteel:save.runeSteel+2,
   runes:[...new Set([...save.runes,rune])],
   potions:[...save.potions,potion],
   lootCounts:{...save.lootCounts,[rune]:(save.lootCounts[rune]||0)+1,[potion]:(save.lootCounts[potion]||0)+1}
  });
 }
 if(event==='forge'){
  if(!p.met||p.ice.length!==NIFL_ICE.length||p.obsidian.length!==NIFL_OBSIDIAN.length||!p.ember||p.forged||save.runeSteel<2||!save.runes.includes('tiwazValor')||!save.ownedWeapons.includes('swordGolden')||!p.worldFreed)return save;
  const runeCount=Math.max(1,Number(save.lootCounts.tiwazValor)||1)-1;
  return add('forged',{
   runeSteel:save.runeSteel-2,
   ownedWeapons:[...new Set([...save.ownedWeapons,'swordNidhogg'])],
   runes:runeCount?save.runes:save.runes.filter(r=>r!=='tiwazValor'),
   equippedRune:runeCount?save.equippedRune:save.equippedRune==='tiwazValor'?'':save.equippedRune,
   lootCounts:{...save.lootCounts,tiwazValor:runeCount,swordNidhogg:1}
  });
 }
 if(event==='defeat'){
  if(!p.forged||p.defeated||!p.worldFreed)return save;
  const rune=RUNE_CATALOG[(save.done.length+7)%RUNE_CATALOG.length].id;
  return add('defeated',{
   immortalityDrops:save.immortalityDrops+45,
   potions:[...save.potions,'hoddmimirElixir','lifeElixir'],
   runes:[...new Set([...save.runes,rune])],
   lootCounts:{...save.lootCounts,[rune]:(save.lootCounts[rune]||0)+1,hoddmimirElixir:(save.lootCounts.hoddmimirElixir||0)+1,lifeElixir:(save.lootCounts.lifeElixir||0)+1,dragonScale:1}
  });
 }
 if(event.startsWith('craft:')){
  const recipe=NIFL_CRAFTS.find(r=>r.id===event.slice(6));
  if(!recipe||!niflCraftUnlocked(p,recipe)||save.runeSteel<recipe.steel||save.immortalityDrops<recipe.drops)return save;
  // Repeating a blueprint makes a real spare copy for the shared crafting hall.
  return {...save,runeSteel:save.runeSteel-recipe.steel,immortalityDrops:save.immortalityDrops-recipe.drops,
   ownedWeapons:[...new Set([...save.ownedWeapons,recipe.id])],
   lootCounts:{...save.lootCounts,[recipe.id]:(save.lootCounts[recipe.id]||0)+1}};
 }
 if(event==='supply:steel'&&p.ember&&save.immortalityDrops>=10){
  return {...save,immortalityDrops:save.immortalityDrops-10,runeSteel:save.runeSteel+1};
 }
 if(event==='supply:rune'&&save.immortalityDrops>=8){
  const count=Number(save.lootCounts.niflheimRunePurchase)||0;
  const rune=RUNE_CATALOG[count%RUNE_CATALOG.length].id;
  return {...save,immortalityDrops:save.immortalityDrops-8,runes:[...new Set([...save.runes,rune])],
   lootCounts:{...save.lootCounts,niflheimRunePurchase:count+1,[rune]:(save.lootCounts[rune]||0)+1}};
 }
 if(event==='supply:potion'&&save.immortalityDrops>=6){
  return {...save,immortalityDrops:save.immortalityDrops-6,potions:[...save.potions,'lifeElixir'],
   lootCounts:{...save.lootCounts,lifeElixir:(save.lootCounts.lifeElixir||0)+1}};
 }
 return save;
}
