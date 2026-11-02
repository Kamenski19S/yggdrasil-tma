import {RUNE_CATALOG,POTION_CATALOG} from './world';
import type {BanditLoot} from './banditLoot';
/** Every victory grants currency, a rune and a random existing elixir. */
export function rollMuspelheimCombatLoot(random=Math.random):BanditLoot{
 const pick=<T,>(items:readonly T[])=>items[Math.min(items.length-1,Math.floor(random()*items.length))];
 return {drops:80+Math.floor(random()*41),runes:[pick(RUNE_CATALOG).id],potions:[pick(POTION_CATALOG).id],weapons:[]};
}
