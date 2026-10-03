export type PotionBoostKind = 'attack' | 'rune' | 'luck';
export type PotionBoosts = Record<PotionBoostKind, number>;
export const EMPTY_POTION_BOOSTS: PotionBoosts = {attack:0,rune:0,luck:0};
export function potionBoostKind(id:string):PotionBoostKind|undefined {
  if(id==='strengthElixir')return 'attack';
  if(id==='manaElixir')return 'rune';
  if(id==='luckElixir')return 'luck';
}
export function normalizePotionBoosts(value:unknown):PotionBoosts {
  const input=value&&typeof value==='object'?value as Partial<PotionBoosts>:{};
  const charge=(v:unknown)=>typeof v==='number'&&Number.isFinite(v)?Math.max(0,Math.min(3,Math.floor(v))):0;
  return {attack:charge(input.attack),rune:charge(input.rune),luck:charge(input.luck)};
}
export const boostedPotionDamage=(damage:number,charges:number)=>charges>0?Math.ceil(damage*1.3):damage;
export const potionDodges=(charges:number,roll:number)=>charges>0&&roll<0.5;
