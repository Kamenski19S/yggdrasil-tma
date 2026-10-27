import type {Save} from './core';
import {CRATER_SWORD_KEY,CRATER_SWORD_ITEM} from './muspelheimCraterLayout';
/** A quest blade for the later tempering story; claiming never silently replaces equipped weapons. */
export function claimCraterSword(save:Save):Save{
 if(save.done.includes(CRATER_SWORD_KEY))return save;
 return {...save,done:[...save.done,CRATER_SWORD_KEY],lootCounts:{...save.lootCounts,[CRATER_SWORD_ITEM]:1}};
}
