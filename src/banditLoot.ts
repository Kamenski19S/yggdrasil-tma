import type { Save } from './core';
import { RUNE_CATALOG,POTION_CATALOG,lootCountAdd,type BanditSpec } from './world';
export type BanditLoot={drops:number;runes:string[];potions:string[];weapons:string[]};
export function rollBanditLoot(s:Save,spec:BanditSpec,random= Math.random):BanditLoot {
  const choose=<T,>(pool:T[])=>pool[Math.min(pool.length-1,Math.floor(random()*pool.length))];
  const runes:string[]=[];
  const counts=Object.fromEntries(RUNE_CATALOG.map(r=>[r.id,s.runes.includes(r.id)?Math.max(1,s.lootCounts[r.id]||1):0]));
  const n=1+(random()<.45?1:0)+(spec.hp>=6&&random()<.3?1:0);
  for(let i=0;i<n;i++){
    const min=Math.min(...Object.values(counts));
    const pool=random()<.65?RUNE_CATALOG.filter(r=>counts[r.id]===min):RUNE_CATALOG;
    const id=choose(pool).id;runes.push(id);counts[id]++;
  }
  const p=1+(random()<.65?1:0)+(spec.hp>=6&&random()<.3?1:0);
  const potions=Array.from({length:p},()=>choose([...POTION_CATALOG]).id);
  const weapons=random()<.25?[choose(spec.hp>=6?['knife','axeSmall','mace','sword2','spear','axe']:['knife','axeSmall','mace','sword2'])]:[];
  return {drops:spec.sparks+Math.floor(random()*9),runes,potions,weapons};
}
export function applyBanditLoot(s:Save,loot:BanditLoot):Save {
  return {...s,immortalityDrops:s.immortalityDrops+loot.drops,
    runes:[...new Set([...s.runes,...loot.runes])],potions:[...s.potions,...loot.potions],
    ownedWeapons:[...new Set([...s.ownedWeapons,...loot.weapons])] as Save['ownedWeapons'],
    equippedRune:s.equippedRune||loot.runes[0]||'',
    lootCounts:lootCountAdd(s.lootCounts,[...loot.runes,...loot.potions,...loot.weapons])};
}
