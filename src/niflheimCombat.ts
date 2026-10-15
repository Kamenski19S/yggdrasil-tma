/** Small encounter groups keep mixed patrols dangerous without a realm-wide dogpile. */
export type EncounterThreat={id:string;role:'orc'|'troll'|'undead';distance:number};
export function pickEncounter(threats:EncounterThreat[],random=Math.random):string[]{
 const nearby=threats.filter(t=>t.distance<22).sort((a,b)=>a.distance-b.distance);
 if(!nearby.length||nearby[0].distance>12)return [];
 const size=random()<.4?(random()<.5?2:3):1;
 const chosen=[nearby[0]],rest=nearby.slice(1);
 while(chosen.length<size&&rest.length){
  const different=rest.findIndex(t=>!chosen.some(c=>c.role===t.role));
  chosen.push(rest.splice(different<0?0:different,1)[0]);
 }
 return chosen.map(t=>t.id);
}
export const dangerouslyLowHp=(hp:number,maxHp:number)=>maxHp>0&&hp>0&&hp/maxHp<=.15;
