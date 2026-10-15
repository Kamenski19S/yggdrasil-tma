/** Transient encounter state: misses, shields and rune actions never advance the belt. */
export function createArtifactCombat(){
 let hits=0,saved=false;
 return {
  reset(){hits=0;saved=false;},
  weaponHit(artifact:string|undefined,damage:number){
   if(damage<=0)return damage;
   if(artifact!=='midgard'){hits=0;return damage;}
   hits++;
   return hits%5===0?Math.ceil(damage*1.30):damage;
  },
  survive(artifact:string|undefined,hpAfter:number,maxHp:number){
   if(hpAfter>0)return hpAfter;
   if(artifact==='niflheim'&&!saved){saved=true;return Math.max(1,Math.ceil(maxHp*.15));}
   return 0;
  }
 };
}
