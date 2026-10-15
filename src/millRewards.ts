export const MILL_CONTROL_GRACE_MS=12000;
export const MILL_BONUS_DROPS_MIN=100;
export const MILL_BONUS_DROPS_RANGE=101;
export const MILL_POTION_QUANTITY=3;
export const MILL_RUNE_QUANTITY=2;

export function millControlActive(running:boolean,now:number,lastAdjustedAt:number|null){
 return running&&lastAdjustedAt!==null&&now>=lastAdjustedAt&&now-lastAdjustedAt<MILL_CONTROL_GRACE_MS;
}

// Only time spent regulating a balanced mill counts toward a river gift.
// Cap a delayed tick so returning from a background tab cannot earn catch-up gifts.
export function tickMillGiftClock(remainingMs:number,elapsedMs:number,active:boolean,balanced:boolean){
 const remaining=Math.max(0,remainingMs-(active&&balanced?Math.max(0,Math.min(1000,elapsedMs)):0));
 return {remainingMs:remaining,ready:active&&balanced&&remaining===0};
}

export function millRewardSettings(realm:string){
 return realm==='niflheim'
  ?{dropsMin:600,dropsRange:601,potionQuantity:5,runeQuantity:4}
  :{dropsMin:MILL_BONUS_DROPS_MIN,dropsRange:MILL_BONUS_DROPS_RANGE,potionQuantity:MILL_POTION_QUANTITY,runeQuantity:MILL_RUNE_QUANTITY};
}
export function millProductionRate(realm:string,difference:number,balancedSeconds:number){
 if(realm==='niflheim')return 12;
 return difference===0?4+Math.min(2,Math.floor(balancedSeconds/5)):difference===1?2:1;
}
