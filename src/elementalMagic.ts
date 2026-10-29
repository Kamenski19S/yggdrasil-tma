export const ICE_FREEZE_SECONDS=1.15;
export type Element='ice'|'fire'|'shadow'|'lightning'|'water';
export const ELEMENTS:Record<Element,{name:string;color:string;damage:number;impact:string;bolt:string}>={
 ice:{name:'Лёд',color:'#8ceaff',damage:24,impact:'ice_impact',bolt:'ice_bolt'},
 fire:{name:'Огонь',color:'#ff7139',damage:32,impact:'fire_impact',bolt:'fire_bolt'},
 shadow:{name:'Тьма',color:'#be71ff',damage:28,impact:'arcane_impact',bolt:'arcane_bolt'},
 lightning:{name:'Молния',color:'#fff17a',damage:38,impact:'lightning',bolt:'arcane_bolt'},
 water:{name:'Вода',color:'#68dfff',damage:120,impact:'water_splash',bolt:'ice_bolt'},
};
export const RAVINE_ELEMENTS:Element[]=['fire','ice','shadow','lightning'];
export const MINE_ELEMENTS:Record<string,Element>={entrance:'ice',turn:'fire',store:'shadow',foreman:'lightning'};
export type Ailments={slow:number;freeze:number;burn:number;burnClock:number;weaken:number;stun:number;immunity:number};
export const createAilments=():Ailments=>({slow:0,freeze:0,burn:0,burnClock:0,weaken:0,stun:0,immunity:0});
/** Control immunity prevents several casters from keeping Vicki frozen indefinitely. */
export function applyElement(s:Ailments,e:Element,blocked:boolean){
 if(blocked)return '';
 if(e==='ice'){s.slow=3;if(s.immunity<=0){s.freeze=ICE_FREEZE_SECONDS;s.immunity=4;}return 'Ледяная статуя: заморозка на 1,15 с, замедление на 3 с.';}
 if(e==='fire'){s.burn=3;return 'Ожог на 3 с.';}
 if(e==='shadow'){s.weaken=3;return 'Уязвимость на 3 с: входящий урон +20%.';}
 if(e==='lightning'){if(s.immunity<=0){s.stun=.35;s.immunity=4;}return 'Молния: короткое оглушение.';}
 s.slow=Math.max(s.slow,1.5);return 'Водная волна: замедление.';
}
export function stepAilments(s:Ailments,dt:number){
 if(dt<=0)return 0;let damage=0;
 if(s.burn>0){s.burnClock+=Math.min(dt,s.burn);while(s.burnClock>=1-1e-8){s.burnClock=Math.max(0,s.burnClock-1);damage+=4;}}
 for(const k of ['slow','freeze','burn','weaken','stun','immunity'] as const)s[k]=Math.max(0,s[k]-dt);
 if(s.burn===0)s.burnClock=0;return damage;
}
export const magicMoveScale=(s:Ailments)=>s.freeze>0||s.stun>0?0:s.slow>0?.55:1;
export const magicRawDamage=(raw:number,s:Ailments)=>Math.round(raw*(s.weaken>0?1.2:1));
export const WATER_BURST={windup:1.2,cooldown:9,radius:7,damage:120};
export type WaterBurstState={remaining:number;charge:number;target:{x:number;y:number;z:number}|null};
export const createWaterBurst=():WaterBurstState=>({remaining:5,charge:0,target:null});
export function stepWaterBurst(s:WaterBurstState,dt:number,hero:{x:number;y:number;z:number},eligible:boolean){
 const result:{started:boolean;impact:boolean;hit:boolean;target:WaterBurstState['target']}={started:false,impact:false,hit:false,target:null};
 if(dt<=0)return result;
 if(!eligible){s.target=null;s.charge=0;s.remaining=WATER_BURST.cooldown;return result;}
 if(s.target){s.charge-=dt;if(s.charge<=0){result.target={...s.target};result.impact=true;result.hit=Math.hypot(hero.x-s.target.x,hero.z-s.target.z)<=WATER_BURST.radius&&Math.abs(hero.y-s.target.y)<5;s.target=null;s.remaining=WATER_BURST.cooldown;}return result;}
 s.remaining=Math.max(0,s.remaining-dt);if(!s.remaining){s.target={...hero};s.charge=WATER_BURST.windup;result.started=true;result.target={...s.target};}return result;
}
