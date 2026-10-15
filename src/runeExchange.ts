import type {Save} from './core';
import {RUNE_CATALOG} from './world';

export const RUNE_EXCHANGE_RATE=3;
export const exchangeRuneCount=(save:Save,id:string)=>save.runes.includes(id)?Math.max(1,Math.floor(Number(save.lootCounts[id])||1)):0;
export function runeExchangeQuote(save:Save,from:string,to:string,quantity:number){
 const fromCount=exchangeRuneCount(save,from),toCount=exchangeRuneCount(save,to);
 const validQuantity=Number.isSafeInteger(quantity)&&quantity>0;
 const cost=validQuantity?quantity*RUNE_EXCHANGE_RATE:0;
 const validRunes=from!==to&&RUNE_CATALOG.some(r=>r.id===from)&&RUNE_CATALOG.some(r=>r.id===to);
 return {fromCount,toCount,cost,maxQuantity:Math.max(0,Math.floor((fromCount-1)/RUNE_EXCHANGE_RATE)),
  canTrade:validRunes&&validQuantity&&Number.isSafeInteger(cost)&&fromCount-cost>=1};
}
/** Trade only surplus copies. Keep the equipped rune, its final copy and upgrades. */
export function applyRuneExchange(save:Save,from:string,to:string,quantity:number):Save{
 const quote=runeExchangeQuote(save,from,to,quantity);
 if(!quote.canTrade)return save;
 const forgeLevels={...save.forgeLevels};
 if(!save.runes.includes(to))delete forgeLevels['rune:'+to];
 return {...save,runes:[...new Set([...save.runes,to])],forgeLevels,
  lootCounts:{...save.lootCounts,[from]:quote.fromCount-quote.cost,[to]:quote.toCount+quantity}};
}
