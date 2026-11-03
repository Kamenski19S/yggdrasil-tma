import type {Save} from './core';
export const LOCATION_SEALS_VERSION='muspelheim:location-seals:v1';
const rune=(id:string,name:string,symbol:string)=>({id,name,symbol});
const R={
 fehu:rune('fehuWealth','Феху','ᚠ'),uruz:rune('uruzStrength','Уруз','ᚢ'),thurisaz:rune('thurisazStrike','Турисаз','ᚦ'),ansuz:rune('ansuzWisdom','Ансуз','ᚨ'),raido:rune('raidoPath','Райдо','ᚱ'),kenaz:rune('kenazShard','Кеназ','ᚲ'),gebo:rune('geboGift','Гебо','ᚷ'),wunjo:rune('wunjoLuck','Вуньо','ᚹ'),hagalaz:rune('hagalazBreak','Хагалаз','ᚺ'),nauthiz:rune('nauthizEndurance','Наутиз','ᚾ'),isa:rune('isaGuard','Иса','ᛁ'),jera:rune('jeraHarvest','Йера','ᛃ'),eihwaz:rune('eihwazResilience','Эйваз','ᛇ'),perthro:rune('perthroFate','Пертр','ᛈ'),algiz:rune('algizGuard','Альгиз','ᛉ'),sowilo:rune('sowiloLight','Соулу','ᛋ'),tiwaz:rune('tiwazValor','Тейваз','ᛏ'),berkano:rune('berkanoHeal','Беркана','ᛒ'),ehwaz:rune('ehwazMotion','Эваз','ᛖ'),mannaz:rune('mannazMind','Манназ','ᛗ'),laguz:rune('laguzFlow','Лагуз','ᛚ'),ingwaz:rune('ingwazReserve','Ингваз','ᛜ'),dagaz:rune('dagazDawn','Дагаз','ᛞ'),othala:rune('othalaLegacy','Отала','ᛟ')
};
// Bounds protect the whole destination, including approaches from the sides.
export const MUSPELHEIM_LOCATION_SEALS=[
 {id:'forge',name:'Кузница',cost:150000,runes:[R.fehu,R.kenaz,R.uruz],x:120,z:72,yaw:-.8,radius:14,cx:140,cz:50,rx:31,rz:31},
 {id:'sanctuary',name:'Ледяное святилище',cost:200000,runes:[R.isa,R.berkano,R.laguz],x:-391,z:15,yaw:Math.PI/2,radius:19,cx:-444,cz:15,rx:50,rz:28},
 {id:'norns',name:'Колодец Норн',cost:250000,runes:[R.jera,R.perthro,R.gebo],x:-165,z:-34,yaw:0,radius:15,cx:-165,cz:-55,rx:20,rz:19},
 {id:'ymir',name:'Столб памяти Имира',cost:300000,runes:[R.ansuz,R.mannaz,R.othala],x:-95,z:25,yaw:Math.PI/2,radius:17,cx:-120,cz:25,rx:23,rz:25},
 {id:'vault',name:'Хранилище трёх нитей',cost:350000,runes:[R.eihwaz,R.algiz,R.nauthiz],x:-275,z:-20,yaw:Math.PI/2,radius:13,cx:-300,cz:-20,rx:23,rz:24},
 {id:'residence',name:'Резиденция',cost:400000,runes:[R.thurisaz,R.tiwaz,R.hagalaz],x:300,z:-58,yaw:0,radius:16,cx:300,cz:-110,rx:48,rz:50},
 {id:'mine',name:'Шахта',cost:450000,runes:[R.ingwaz,R.raido,R.ehwaz],x:-459,z:-100,yaw:0,radius:11,cx:-459,cz:-100,rx:8,rz:7},
 {id:'volcano',name:'Восточный вулкан',cost:500000,runes:[R.sowilo,R.dagaz,R.wunjo],x:340,z:-238,yaw:0,radius:20,cx:330,cz:-345,rx:94,rz:104},
 {id:'surt',name:'Проход к Сурту',cost:550000,runes:[R.isa,R.kenaz,R.eihwaz],x:-176,z:-432,yaw:Math.PI/2,radius:13,cx:-225,cz:-411,rx:49,rz:65}
] as const;
export type LocationSeal=typeof MUSPELHEIM_LOCATION_SEALS[number];
export type LocationSealId=LocationSeal['id'];
export const locationSealKey=(id:string)=>'muspelheim:location:open:'+id;
export const locationIsOpen=(done:readonly string[],id:string)=>done.includes(locationSealKey(id));
export type SealWallet={drops:number;runes:readonly string[];counts:Record<string,number>;levels:Record<string,number>};
export const sealRuneLevel=(wallet:SealWallet,id:string)=>wallet.runes.includes(id)?Math.min(3,1+Math.max(0,Number(wallet.levels['rune:'+id])||0)):0;
export const sealRuneCount=(wallet:SealWallet,id:string)=>wallet.runes.includes(id)?Math.max(1,Math.floor(Number(wallet.counts[id])||1)):0;
export function locationSealQuote(done:readonly string[],wallet:SealWallet,id:string){
 const index=MUSPELHEIM_LOCATION_SEALS.findIndex(s=>s.id===id),seal=MUSPELHEIM_LOCATION_SEALS[index];
 const previous=index>0?MUSPELHEIM_LOCATION_SEALS[index-1]:undefined;
 const ready=!!seal&&(!previous||locationIsOpen(done,previous.id));
 const missingDrops=seal?Math.max(0,seal.cost-wallet.drops):0;
 const missingRunes=seal?.runes.filter(r=>sealRuneCount(wallet,r.id)<1||sealRuneLevel(wallet,r.id)<3)??[];
 return {seal,previous,ready,missingDrops,missingRunes,canPay:!!seal&&!locationIsOpen(done,id)&&ready&&missingDrops===0&&missingRunes.length===0};
}
export function unlockMuspelheimLocation(save:Save,id:string):Save{
 const quote=locationSealQuote(save.done,{drops:save.immortalityDrops,runes:save.runes,counts:save.lootCounts,levels:save.forgeLevels},id);
 if(!quote.canPay||!quote.seal)return save;
 const lootCounts={...save.lootCounts},forgeLevels={...save.forgeLevels};let runes=[...save.runes],equippedRune=save.equippedRune;
 for(const r of quote.seal.runes){const remaining=sealRuneCount({drops:0,runes,counts:lootCounts,levels:forgeLevels},r.id)-1;lootCounts[r.id]=remaining;if(remaining===0){runes=runes.filter(id=>id!==r.id);delete forgeLevels['rune:'+r.id];if(equippedRune===r.id)equippedRune='';}}
 const pair=save.muspelheimRunePair?.filter(id=>runes.includes(id));
 return {...save,immortalityDrops:save.immortalityDrops-quote.seal.cost,done:[...save.done,locationSealKey(id)],lootCounts,forgeLevels,runes,equippedRune,muspelheimRunePair:pair?.length===2?[pair[0],pair[1]]:undefined};
}
/** One-time upgrade: preserve completed old locations and the route leading to them. */
export function migrateMuspelheimLocationSeals(save:Save,ymirReleased=false,interior=''):Save{
 if(save.done.includes(LOCATION_SEALS_VERSION))return save;
 let through=-1;
 const remember=(index:number,yes:boolean)=>{if(yes)through=Math.max(through,index);};
 remember(0,save.done.some(k=>k.startsWith('muspelheim:forge:')));
 remember(3,ymirReleased);
 remember(4,save.done.includes('muspelheim:threads:secret')||interior==='vault');
 remember(5,save.done.includes('muspelheim:ashLord:sourceSealed')||interior==='residence');
 remember(6,save.done.some(k=>k.startsWith('muspelheim:ashMine:'))||interior==='mine');
 remember(7,save.done.some(k=>k.startsWith('muspelheim:crater:trial:')||k==='muspelheim:crater:sword'));
 remember(8,save.done.includes('muspelheim:surt:calmed'));
 return {...save,done:[...new Set([...save.done,LOCATION_SEALS_VERSION,...MUSPELHEIM_LOCATION_SEALS.slice(0,through+1).map(s=>locationSealKey(s.id))])]};
}
export type SealPoint={x:number;z:number};
export function sealContains(seal:LocationSeal,p:SealPoint,padding=0){return Math.abs(p.x-seal.cx)<seal.rx+padding&&Math.abs(p.z-seal.cz)<seal.rz+padding;}
export function blockingLocationSeal(done:readonly string[],from:SealPoint,to:SealPoint){
 return MUSPELHEIM_LOCATION_SEALS.find(s=>!locationIsOpen(done,s.id)&&sealContains(s,to,2.3)&&!sealContains(s,from,2.3));
}
export function nearbyLocationSeal(done:readonly string[],p:SealPoint){
 return MUSPELHEIM_LOCATION_SEALS.filter(s=>!locationIsOpen(done,s.id)&&Math.hypot(p.x-s.x,p.z-s.z)<s.radius+16).sort((a,b)=>Math.hypot(p.x-a.x,p.z-a.z)-Math.hypot(p.x-b.x,p.z-b.z))[0];
}
