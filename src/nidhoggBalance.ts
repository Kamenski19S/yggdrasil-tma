import type {Save} from './core';
export const NIDHOGG_MAX_HP=2400;
export const NIDHOGG_MAX_HIT=80; // At least 30 successful strikes, even with living water.
export const NIDHOGG_FIRE_DAMAGE=135;
export const NIDHOGG_REWARD=25000;
export const nidhoggHitDamage=(attack:number,critical=false)=>Math.min(NIDHOGG_MAX_HIT,Math.max(1,Math.round(attack*(critical?1.5:1))));
/** Bring old 45-drop victories up to the new reward exactly once. */
export function settleNidhoggReward(save:Save):Save{
 if(!save.done.includes('niflheim:dragon:defeated'))return save;
 const awarded=Number(save.lootCounts.nidhoggDropsAwarded)||45;
 if(awarded>=NIDHOGG_REWARD)return save;
 return {...save,immortalityDrops:save.immortalityDrops+NIDHOGG_REWARD-awarded,lootCounts:{...save.lootCounts,nidhoggDropsAwarded:NIDHOGG_REWARD}};
}
