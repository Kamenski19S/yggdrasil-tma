import {gearProtection} from './gearProtection';
import {WEAPON_POWER,shieldForgeKey,type Save} from './core';
import {ARTIFACT_INFO} from './core';
import {RUNE_CATALOG} from './world';
export type CombatStats={attack:number;runeAttack:number;maxHp:number;defense:number;shieldDefense:number;multiplier:number;artifactId?:string;damageReduction?:number;fireResistance?:number;controlResistance?:number};
export const swordTemperingBonus=(id:string,power:number,level:number)=>Math.max(0,level)*(id==='default'||id.startsWith('sword')||id==='claymore'||id==='bladeObsidian'?Math.max(1,Math.round(power*.04)):1);
export const livingWaterUsed=(done:readonly string[])=>done.includes('niflheim:livingWater:used');
export const livingWaterActive=(done:readonly string[])=>livingWaterUsed(done)&&!done.includes('niflheim:dragon:defeated');
export const realmRuneAttackBonus=(realm:string)=>realm==='niflheim'?6:0;
export function equipmentCombatStats(save:Save,hero:{hp:number;str:number;en:number},realm='midgard'):CombatStats{
 const level=(id:string)=>Math.max(0,Number(save.forgeLevels[id])||0);
 const equipped=(id:string)=>save.equippedGear.includes(id as any);
 const shield=equipped('shield')?level(shieldForgeKey(save.shieldAsset)):0;
 const rune=RUNE_CATALOG.find(r=>r.id===save.equippedRune);
 const runeBonus=(key:'attack'|'rune'|'defense')=>rune&&rune[key]?Number(rune[key])+Math.min(2,level('rune:'+rune.id)):0;
 const artifact=ARTIFACT_INFO[save.equippedArtifact];
 const gear=gearProtection(save,realm);
 const multiplier=livingWaterActive(save.done)?2:1;
 return {multiplier,damageReduction:gear.damageReduction,fireResistance:gear.fireResistance,controlResistance:gear.controlResistance,artifactId:save.equippedArtifact,
  attack:Math.round((hero.str+WEAPON_POWER[save.heroWeapon]+swordTemperingBonus(save.heroWeapon,WEAPON_POWER[save.heroWeapon],level(save.heroWeapon))+runeBonus('attack')+(artifact?.attack||0))*(1+(artifact?.attackPercent||0)))*multiplier,
  runeAttack:Math.round((hero.en+2+runeBonus('rune')+(artifact?.rune||0)+realmRuneAttackBonus(realm))*(1+(artifact?.runePercent||0)))*multiplier,
  maxHp:(hero.hp+gear.hp)*multiplier,
  defense:Math.round((gear.defense+Math.floor(shield/3)+runeBonus('defense')+(artifact?.defense||0))*(1+(artifact?.defensePercent||0)))*multiplier,
  shieldDefense:(equipped('shield')?1+shield:0)*multiplier};
}
export function incomingCombatDamage(raw:number,stats:CombatStats,shielded=false,element='physical'){
 if(raw<=0)return 0;
 const resistance=element==='fire'?(stats.fireResistance||0):0;
 const guardedRaw=raw*(1-(stats.damageReduction||0))*(1-resistance);
 const reduced=stats.damageReduction?Math.max(Math.ceil(raw*.25),Math.round(guardedRaw-stats.defense)):Math.max(1,guardedRaw-stats.defense);
 return shielded?Math.max(0,Math.ceil(reduced*.3)-stats.shieldDefense):reduced;
}

export function dragonStrikeDamage(raw:number,stats:CombatStats,shielded:boolean){
 const damage=incomingCombatDamage(raw,stats);
 return shielded?Math.ceil(damage/2):damage;
}

