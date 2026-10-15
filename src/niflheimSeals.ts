import * as THREE from 'three';
import type {Save} from './core';
import {prepareAnimatedSeal} from './niflheimFirstSeal';
import {NIFL_LOCATIONS,niflGroundY} from './niflheimMapData';

export type NiflheimSealRune={id:string;name:string;symbol:string;amount:number};
export type NiflheimSealDef={
 id:string;order:number;name:string;location:string;x:number;z:number;angle:number;
 drops:number;steel:number;hits:number;damagePct:number;runes:NiflheimSealRune[];
};

const rune=(id:string,name:string,symbol:string,amount:number):NiflheimSealRune=>({id,name,symbol,amount});

/**
 * Fifteen seals define the main Niflheim progression.
 * Threshold and the Nine-World Stranger are deliberately not sealed.
 * Coordinates are world-space and can be fine-tuned independently of the balance table.
 */
export const NIFLHEIM_SEALS:NiflheimSealDef[]=[
 {id:'shelter',order:1,name:'Печать Мёртвого узла',location:'Приют хранителей',x:40,z:88,angle:-.35,drops:17000,steel:5,hits:15,damagePct:.10,runes:[rune('algizGuard','Альгиз','ᛉ',1),rune('nauthizEndurance','Наутиз','ᚾ',1)]},
 {id:'forge',order:2,name:'Печать Закованного горна',location:'Кузница хранителей',x:-18,z:93,angle:0,drops:20000,steel:6,hits:17,damagePct:.11,runes:[rune('algizGuard','Альгиз','ᛉ',2),rune('nauthizEndurance','Наутиз','ᚾ',1)]},
 {id:'frozenRiver',order:3,name:'Печать Белого плена',location:'Замёрзшее русло',x:-23,z:56,angle:0,drops:23000,steel:7,hits:19,damagePct:.12,runes:[rune('isaGuard','Иса','ᛁ',2),rune('nauthizEndurance','Наутиз','ᚾ',2)]},
 {id:'echoCave',order:4,name:'Печать Ледяного эха',location:'Пещера ледяного эха',x:74.6,z:62.8,angle:-.8,drops:27000,steel:8,hits:21,damagePct:.13,runes:[rune('ansuzWisdom','Ансуз','ᚨ',2),rune('isaGuard','Иса','ᛁ',2),rune('nauthizEndurance','Наутиз','ᚾ',1)]},
 {id:'memoryCave',order:5,name:'Печать Утраченной памяти',location:'Пещера воспоминаний',x:90,z:19,angle:0,drops:31000,steel:9,hits:23,damagePct:.14,runes:[rune('ansuzWisdom','Ансуз','ᚨ',2),rune('perthroFate','Перт','ᛈ',2),rune('eihwazResilience','Эйваз','ᛇ',2)]},
 {id:'snowMountain',order:6,name:'Печать Безмолвной вершины',location:'Снежная гора',x:-86,z:99,angle:0,drops:36000,steel:10,hits:25,damagePct:.15,runes:[rune('uruzStrength','Уруз','ᚢ',2),rune('isaGuard','Иса','ᛁ',2),rune('eihwazResilience','Эйваз','ᛇ',3)]},
 {id:'iceLake',order:7,name:'Печать Чёрного льда',location:'Озеро подо льдом',x:-50,z:18,angle:0,drops:42000,steel:12,hits:27,damagePct:.16,runes:[rune('raidoPath','Райдо','ᚱ',2),rune('laguzFlow','Лагуз','ᛚ',3),rune('isaGuard','Иса','ᛁ',3)]},
 {id:'crossing',order:8,name:'Печать Разорванного пути',location:'Разрушенная переправа',x:-72,z:29,angle:0,drops:49000,steel:14,hits:29,damagePct:.17,runes:[rune('raidoPath','Райдо','ᚱ',3),rune('eihwazResilience','Эйваз','ᛇ',3),rune('algizGuard','Альгиз','ᛉ',3)]},
 {id:'namesHall',order:9,name:'Печать Забытого имени',location:'Зал забытых имён',x:-76,z:-74,angle:0,drops:57000,steel:16,hits:31,damagePct:.18,runes:[rune('ansuzWisdom','Ансуз','ᚨ',3),rune('mannazMind','Манназ','ᛗ',3),rune('perthroFate','Перт','ᛈ',4)]},
 {id:'roots',order:10,name:'Печать Тёмного корня',location:'Сплетение корней',x:10,z:-29,angle:0,drops:66000,steel:18,hits:33,damagePct:.19,runes:[rune('eihwazResilience','Эйваз','ᛇ',4),rune('algizGuard','Альгиз','ᛉ',4),rune('nauthizEndurance','Наутиз','ᚾ',3)]},
 {id:'threeNornsWell',order:11,name:'Печать Нити судьбы',location:'Колодец трёх норн',x:62,z:-64,angle:0,drops:76000,steel:20,hits:35,damagePct:.20,runes:[rune('perthroFate','Перт','ᛈ',4),rune('laguzFlow','Лагуз','ᛚ',4),rune('dagazDawn','Дагаз','ᛞ',4)]},
 {id:'lookout',order:12,name:'Печать Иссохшей реки',location:'Пересохшее русло',x:-29.4,z:-120.4,angle:.3,drops:87000,steel:23,hits:37,damagePct:.21,runes:[rune('isaGuard','Иса','ᛁ',4),rune('nauthizEndurance','Наутиз','ᚾ',5),rune('hagalazBreak','Хагалаз','ᚺ',4)]},
 {id:'hvergelmir',order:13,name:'Печать Скованного истока',location:'Хвергельмир',x:0,z:-78,angle:0,drops:99000,steel:26,hits:39,damagePct:.22,runes:[rune('laguzFlow','Лагуз','ᛚ',5),rune('ansuzWisdom','Ансуз','ᚨ',5),rune('berkanoHeal','Беркана','ᛒ',4)]},
 {id:'nidhogg',order:14,name:'Печать Драконьего порога',location:'Логово Нидхёгга',x:49.3,z:-122.6,angle:-.5,drops:112000,steel:30,hits:42,damagePct:.23,runes:[rune('tiwazValor','Тейваз','ᛏ',5),rune('sowiloLight','Соулу','ᛋ',5),rune('algizGuard','Альгиз','ᛉ',5)]},
 {id:'livingWater',order:15,name:'Печать Живой воды',location:'Колодец живой воды',x:-18.5,z:-132,angle:0,drops:126000,steel:34,hits:45,damagePct:.24,runes:[rune('laguzFlow','Лагуз','ᛚ',6),rune('berkanoHeal','Беркана','ᛒ',5),rune('algizGuard','Альгиз','ᛉ',5)]}
];

export const sealVictoryReward=(def:NiflheimSealDef)=>Math.floor(def.drops*.10);
export const sealOpeningReward=(def:NiflheimSealDef)=>Math.floor(def.drops*.15);
const rewardFlag=(id:string,kind:'victory'|'opening')=>`niflheim:seal:${id}:reward:${kind}`;

/** Repair earned rewards on old saves; flags make reloads and duplicate events safe. */
export function settleNiflheimSealRewards(save:Save):Save{
 let done=save.done,drops=save.immortalityDrops;
 // The previous migration inferred this new seal from an old dragon victory.
 // An out-of-order opening cannot have been paid: reopen only that synthetic entry.
 // Keep real sequential victories, the dragon flag, and the player's balances intact.
 if(done.includes('niflheim:dragon:defeated')&&sealOpened(done,'livingWater')&&!sealAvailable(done,'livingWater')){
  const synthetic=new Set([sealOpenedFlag('livingWater'),sealGuardianFlag('livingWater'),rewardFlag('livingWater','victory'),rewardFlag('livingWater','opening')]);
  done=done.filter(flag=>!synthetic.has(flag));
 }
 for(const def of NIFLHEIM_SEALS){
  for(const kind of ['victory','opening'] as const){
   const earned=kind==='victory'?(sealGuardianDefeated(done,def.id)||sealOpened(done,def.id)):sealOpened(done,def.id);
   const flag=rewardFlag(def.id,kind);
   if(earned&&!done.includes(flag)){done=[...done,flag];drops+=kind==='victory'?sealVictoryReward(def):sealOpeningReward(def);}
  }
 }
 return done===save.done?save:{...save,done,immortalityDrops:drops};
}

export const sealById=(id:string)=>NIFLHEIM_SEALS.find(s=>s.id===id);
export const sealOpenedFlag=(id:string)=>`niflheim:seal:${id}:opened`;
export const sealGuardianFlag=(id:string)=>`niflheim:seal:${id}:lordDefeated`;
export const sealOpened=(done:readonly string[],id:string)=>done.includes(sealOpenedFlag(id));
export const sealGuardianDefeated=(done:readonly string[],id:string)=>done.includes(sealGuardianFlag(id));
export const openedSealCount=(done:readonly string[])=>NIFLHEIM_SEALS.filter(s=>sealOpened(done,s.id)).length;
export const allNiflheimSealsOpened=(done:readonly string[])=>openedSealCount(done)===NIFLHEIM_SEALS.length;
export function sealAvailable(done:readonly string[],id:string){
 const index=NIFLHEIM_SEALS.findIndex(s=>s.id===id);
 return index===0||(index>0&&NIFLHEIM_SEALS.slice(0,index).every(s=>sealOpened(done,s.id)));
}
export const nextNiflheimSeal=(done:readonly string[])=>NIFLHEIM_SEALS.find(s=>!sealOpened(done,s.id));

const runeCopies=(save:Save,id:string)=>save.runes.includes(id)?Math.max(1,Number(save.lootCounts[id])||1):0;
export function canOpenNiflheimSeal(save:Save,id:string){
 const def=sealById(id);
 if(!def||sealOpened(save.done,id)||!sealGuardianDefeated(save.done,id)||!sealAvailable(save.done,id))return false;
 return save.immortalityDrops>=def.drops&&save.runeSteel>=def.steel&&def.runes.every(r=>runeCopies(save,r.id)>=r.amount);
}
export type NiflheimSealEvent=`guardianDefeated:${string}`|`open:${string}`;
export function applyNiflheimSealEvent(save:Save,event:NiflheimSealEvent):Save{
 const split=event.indexOf(':');
 if(split<0)return save;
 const type=event.slice(0,split),id=event.slice(split+1),def=sealById(id);
 if(!def)return save;
 if(type==='guardianDefeated'){
  if(!sealAvailable(save.done,id)||sealGuardianDefeated(save.done,id))return save;
  return settleNiflheimSealRewards({...save,done:[...new Set([...save.done,sealGuardianFlag(id)])]});
 }
 if(type!=='open'||!canOpenNiflheimSeal(save,id))return save;
 const lootCounts={...save.lootCounts},forgeLevels={...save.forgeLevels};let runes=save.runes,equippedRune=save.equippedRune;
 for(const need of def.runes){
  const remaining=runeCopies(save,need.id)-need.amount;
  lootCounts[need.id]=remaining;
  if(!remaining){
   runes=runes.filter(r=>r!==need.id);
   delete forgeLevels['rune:'+need.id];
   if(equippedRune===need.id)equippedRune='';
  }
 }
 return settleNiflheimSealRewards({...save,
  immortalityDrops:save.immortalityDrops-def.drops,
  runeSteel:save.runeSteel-def.steel,
  runes,equippedRune,lootCounts,forgeLevels,
  done:[...new Set([...save.done,sealGuardianFlag(id),sealOpenedFlag(id)])]
 });
}

type Point={x:number;z:number};

/** Fallback wards work before GLB loading; interiors supply exact footprints once ready. */
export function sealContains(def:NiflheimSealDef,p:Point){
 if(def.id==='livingWater')return Math.hypot(p.x+22,p.z+132)<3.2;
 const site=NIFL_LOCATIONS.find(l=>l.id===def.id)!;
 if(def.id==='forge')return Math.abs(p.x-site.x)<6.5&&p.z<site.z+1&&p.z>site.z-16;
 if(def.id==='crossing')return Math.abs(p.x+72)<5&&p.z<26&&p.z>-15;
 if(def.id==='iceLake')return Math.hypot(p.x+50,p.z-10)<6;
 if(def.id==='hvergelmir')return Math.hypot((p.x-site.x)/17,(p.z-site.z)/17)<1;
 return Math.hypot(p.x-site.x,p.z-site.z)<7.2;
}

export function sealBlocksEntry(from:Point,to:Point,contains:(p:Point)=>boolean){
 // Subdivide long moves, so a frame stall cannot jump across a ward.
 if(contains(from))return false; // Let pre-existing saves leave a locked interior.
 const steps=Math.max(1,Math.ceil(Math.hypot(to.x-from.x,to.z-from.z)/.35));
 for(let i=1;i<=steps;i++)if(contains({x:from.x+(to.x-from.x)*i/steps,z:from.z+(to.z-from.z)*i/steps}))return true;
 return false;
}

export const sealGuardianHealth=(attack:number,def:NiflheimSealDef)=>Math.max(1,Math.ceil(attack*def.hits));
export const sealGuardianDamage=(maxHp:number,def:NiflheimSealDef)=>Math.max(1,Math.round(maxHp*def.damagePct));

export function sealViewHint(point:THREE.Vector3,camera:THREE.Camera){
 const local=point.clone().applyMatrix4(camera.matrixWorldInverse);
 if(local.z>=0)return 'Шар позади — развернись к нему.';
 const screen=point.clone().project(camera);
 if(screen.x<-.8)return '← Шар слева — поверни к нему.';
 if(screen.x>.8)return 'Шар справа — поверни к нему. →';
 if(screen.y<-.75)return '↓ Шар ниже — посмотри перед Vicki.';
 if(screen.y>.8)return '↑ Шар выше — посмотри на склон.';
 return 'Ударь мечом по шару — появится страж.';
}

export function createNiflheimSealVisual(model:THREE.Group,def:NiflheimSealDef,animations:THREE.AnimationClip[]=[]){
 const root=new THREE.Group();root.name=def.name+' — '+def.location;
 const {mixer}=prepareAnimatedSeal(model,animations);root.add(model);
 const light=new THREE.PointLight('#c81741',9,12,2);light.position.z=.6;root.add(light);
 const place=(x:number,z:number,y=niflGroundY(x,z),angle=def.angle)=>{
  root.position.set(x,y+3.15,z);root.rotation.y=angle;
 };
 place(def.x,def.z);
 return {
  id:def.id,root,place,
  near(x:number,z:number){return Math.hypot(x-root.position.x,z-root.position.z)<12;},
  guardianPoint(){
   // Spawn beside the sphere, leaving both the door and approach clear.
   const angle=root.rotation.y;
   return {x:root.position.x-5.2*Math.cos(angle)+3*Math.sin(angle),z:root.position.z+5.2*Math.sin(angle)+3*Math.cos(angle),angle};
  },
  update(time:number,opened:boolean,available:boolean,dt=0){
   root.visible=!opened;if(!root.visible)return;
   mixer.update(dt);
   light.intensity=(available?9:4)+Math.sin(time*1.6+def.order)*1.1;
  },
  dispose(){mixer.stopAllAction();}
 };
}
