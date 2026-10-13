import {WEAPON_POWER,shieldForgeKey,type Save} from './core';
import {ARTIFACT_INFO} from './core';
import {RUNE_CATALOG} from './world';
export type CombatStats={attack:number;runeAttack:number;maxHp:number;defense:number;shieldDefense:number;multiplier:number};
export const livingWaterUsed=(done:readonly string[])=>done.includes('niflheim:livingWater:used');
export const livingWaterActive=(done:readonly string[])=>livingWaterUsed(done)&&!done.includes('niflheim:dragon:defeated');
export function equipmentCombatStats(save:Save,hero:{hp:number;str:number;en:number}):CombatStats{
 const level=(id:string)=>Math.max(0,Number(save.forgeLevels[id])||0);
 const equipped=(id:string)=>save.equippedGear.includes(id as any);
 const armor=equipped('armor')?level('armor'):0,helmet=equipped('helmet')?level('helmet'):0;
 const shield=equipped('shield')?level(shieldForgeKey(save.shieldAsset)):0;
 const rune=RUNE_CATALOG.find(r=>r.id===save.equippedRune);
 const runeBonus=(key:'attack'|'rune'|'defense')=>rune&&rune[key]?Number(rune[key])+Math.min(2,level('rune:'+rune.id)):0;
 const artifact=ARTIFACT_INFO[save.equippedArtifact];
 const multiplier=livingWaterActive(save.done)?2:1;
 return {multiplier,
  attack:(hero.str+WEAPON_POWER[save.heroWeapon]+level(save.heroWeapon)+runeBonus('attack')+(artifact?.attack||0))*multiplier,
  runeAttack:(hero.en+2+runeBonus('rune')+(artifact?.rune||0))*multiplier,
  maxHp:(hero.hp+(equipped('armor')?8+armor*8:0)+(equipped('helmet')?3+helmet*3:0))*multiplier,
  defense:(Math.floor((armor+helmet)/2)+(equipped('armor')?1:0)+Math.floor(shield/3)+runeBonus('defense')+(artifact?.defense||0))*multiplier,
  shieldDefense:(equipped('shield')?1+shield:0)*multiplier};
}
export function incomingCombatDamage(raw:number,stats:CombatStats,shielded=false){
 const reduced=Math.max(1,raw-stats.defense);
 return shielded?Math.max(0,Math.ceil(reduced*.3)-stats.shieldDefense):reduced;
}

export function dragonStrikeDamage(raw:number,stats:CombatStats,shielded:boolean){
 const damage=incomingCombatDamage(raw,stats);
 return shielded?Math.ceil(damage/2):damage;
}
