import {RUNE_CATALOG,POTION_CATALOG} from './world';
import type {BanditLoot} from './banditLoot';
export const MUSPELHEIM_COMBAT_DROPS={patrol:[800,1200],camp:[1200,1800],goblin:[1500,2200],guardian:[4000,6000]} as const;
export type MuspelheimLootKind=keyof typeof MUSPELHEIM_COMBAT_DROPS;
/** Every victory grants currency, a rune and a random existing elixir. */
export function rollMuspelheimCombatLoot(random=Math.random,kind:MuspelheimLootKind='patrol'):BanditLoot{
 const pick=<T,>(items:readonly T[])=>items[Math.min(items.length-1,Math.floor(random()*items.length))];
 const [min,max]=MUSPELHEIM_COMBAT_DROPS[kind];
 return {drops:min+Math.min(max-min,Math.floor(random()*(max-min+1))),runes:[pick(RUNE_CATALOG).id],potions:[pick(POTION_CATALOG).id],weapons:[]};
}
