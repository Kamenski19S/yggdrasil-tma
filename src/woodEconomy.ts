import type {Save} from './core';
export const WOOD_TRADES=[
 {id:'herbs',label:'5 древесины → 3 лечебные травы',wood:5,herbs:3,twigs:0},
 {id:'twigs',label:'3 древесины → 5 веток',wood:3,herbs:0,twigs:5}
] as const;
export function exchangeWood(s:Save,id:string):Save{
 const trade=WOOD_TRADES.find(t=>t.id===id);if(!trade||s.stock.wood<trade.wood)return s;
 return {...s,stock:{...s.stock,wood:s.stock.wood-trade.wood,herbs:s.stock.herbs+trade.herbs,twigs:s.stock.twigs+trade.twigs}};
}
export const forgeAshCost=(weapon:boolean,level:number,free:boolean)=>weapon&&!free&&level>=5?1:0;
export const REPEAT_ASH_CHANCE=.10;
