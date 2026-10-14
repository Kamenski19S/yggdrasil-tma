import * as THREE from 'three';
import type {Save} from './core';
import {niflGroundY} from './niflheimMapData';

export type NiflheimSealRune={id:string;name:string;symbol:string;amount:number};
export type NiflheimSealDef={
 id:string;order:number;name:string;location:string;x:number;z:number;angle:number;
 drops:number;steel:number;hits:number;damagePct:number;runes:NiflheimSealRune[];
};

const rune=(id:string,name:string,symbol:string,amount:number):NiflheimSealRune=>({id,name,symbol,amount});

/**
 * Fourteen seals define the main Niflheim progression.
 * Threshold and the Nine-World Stranger are deliberately not sealed.
 * Coordinates are world-space and can be fine-tuned independently of the balance table.
 */
export const NIFLHEIM_SEALS:NiflheimSealDef[]=[
 {id:'shelter',order:1,name:'Печать Мёртвого узла',location:'Приют хранителей',x:40,z:88,angle:-.35,drops:17000,steel:5,hits:15,damagePct:.10,runes:[rune('algizGuard','Альгиз','ᛉ',1),rune('nauthizEndurance','Наутиз','ᚾ',1)]},
 {id:'forge',order:2,name:'Печать Закованного горна',location:'Кузница хранителей',x:-18,z:90,angle:.3,drops:20000,steel:6,hits:17,damagePct:.11,runes:[rune('algizGuard','Альгиз','ᛉ',2),rune('nauthizEndurance','Наутиз','ᚾ',1)]},
 {id:'frozenRiver',order:3,name:'Печать Белого плена',location:'Замёрзшее русло',x:-20,z:48,angle:.15,drops:23000,steel:7,hits:19,damagePct:.12,runes:[rune('isaGuard','Иса','ᛁ',2),rune('nauthizEndurance','Наутиз','ᚾ',2)]},
 {id:'echoCave',order:4,name:'Печать Ледяного эха',location:'Пещера ледяного эха',x:82,z:64,angle:-.8,drops:27000,steel:8,hits:21,damagePct:.13,runes:[rune('ansuzWisdom','Ансуз','ᚨ',2),rune('isaGuard','Иса','ᛁ',2),rune('nauthizEndurance','Наутиз','ᚾ',1)]},
 {id:'memoryCave',order:5,name:'Печать Утраченной памяти',location:'Пещера воспоминаний',x:90,z:16,angle:-1.05,drops:31000,steel:9,hits:23,damagePct:.14,runes:[rune('ansuzWisdom','Ансуз','ᚨ',2),rune('perthroFate','Перт','ᛈ',2),rune('eihwazResilience','Эйваз','ᛇ',2)]},
 {id:'snowMountain',order:6,name:'Печать Безмолвной вершины',location:'Снежная гора',x:-86,z:96,angle:.85,drops:36000,steel:10,hits:25,damagePct:.15,runes:[rune('uruzStrength','Уруз','ᚢ',2),rune('isaGuard','Иса','ᛁ',2),rune('eihwazResilience','Эйваз','ᛇ',3)]},
 {id:'iceLake',order:7,name:'Печать Чёрного льда',location:'Озеро подо льдом',x:-72,z:8,angle:.2,drops:42000,steel:12,hits:27,damagePct:.16,runes:[rune('raidoPath','Райдо','ᚱ',2),rune('laguzFlow','Лагуз','ᛚ',3),rune('isaGuard','Иса','ᛁ',3)]},
 {id:'crossing',order:8,name:'Печать Разорванного пути',location:'Разрушенная переправа',x:-72,z:-12,angle:.25,drops:49000,steel:14,hits:29,damagePct:.17,runes:[rune('raidoPath','Райдо','ᚱ',3),rune('eihwazResilience','Эйваз','ᛇ',3),rune('algizGuard','Альгиз','ᛉ',3)]},
 {id:'namesHall',order:9,name:'Печать Забытого имени',location:'Зал забытых имён',x:-76,z:-78,angle:.25,drops:57000,steel:16,hits:31,damagePct:.18,runes:[rune('ansuzWisdom','Ансуз','ᚨ',3),rune('mannazMind','Манназ','ᛗ',3),rune('perthroFate','Перт','ᛈ',4)]},
 {id:'roots',order:10,name:'Печать Тёмного корня',location:'Сплетение корней',x:10,z:-48,angle:-.1,drops:66000,steel:18,hits:33,damagePct:.19,runes:[rune('eihwazResilience','Эйваз','ᛇ',4),rune('algizGuard','Альгиз','ᛉ',4),rune('nauthizEndurance','Наутиз','ᚾ',3)]},
 {id:'threeNornsWell',order:11,name:'Печать Нити судьбы',location:'Колодец трёх норн',x:36,z:-85,angle:-.45,drops:76000,steel:20,hits:35,damagePct:.20,runes:[rune('perthroFate','Перт','ᛈ',4),rune('laguzFlow','Лагуз','ᛚ',4),rune('dagazDawn','Дагаз','ᛞ',4)]},
 {id:'lookout',order:12,name:'Печать Иссохшей реки',location:'Пересохшее русло',x:-36,z:-124,angle:.3,drops:87000,steel:23,hits:37,damagePct:.21,runes:[rune('isaGuard','Иса','ᛁ',4),rune('nauthizEndurance','Наутиз','ᚾ',5),rune('hagalazBreak','Хагалаз','ᚺ',4)]},
 {id:'hvergelmir',order:13,name:'Печать Скованного истока',location:'Хвергельмир',x:0,z:-98,angle:0,drops:99000,steel:26,hits:39,damagePct:.22,runes:[rune('laguzFlow','Лагуз','ᛚ',5),rune('ansuzWisdom','Ансуз','ᚨ',5),rune('berkanoHeal','Беркана','ᛒ',4)]},
 {id:'nidhogg',order:14,name:'Печать Драконьего порога',location:'Логово Нидхёгга',x:56,z:-126,angle:-.5,drops:112000,steel:30,hits:42,damagePct:.23,runes:[rune('tiwazValor','Тейваз','ᛏ',5),rune('sowiloLight','Соулу','ᛋ',5),rune('algizGuard','Альгиз','ᛉ',5)]}
];

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
  return {...save,done:[...new Set([...save.done,sealGuardianFlag(id)])]};
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
 return {...save,
  immortalityDrops:save.immortalityDrops-def.drops,
  runeSteel:save.runeSteel-def.steel,
  runes,equippedRune,lootCounts,forgeLevels,
  done:[...new Set([...save.done,sealGuardianFlag(id),sealOpenedFlag(id)])]
 };
}

export function createNiflheimSealVisual(model:THREE.Group,def:NiflheimSealDef){
 const root=new THREE.Group();root.name=def.name+' — '+def.location;
 const ground=niflGroundY(def.x,def.z);
 root.position.set(def.x,ground+3.15,def.z);root.rotation.y=def.angle;
 const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3()),centre=box.getCenter(new THREE.Vector3());
 model.position.sub(centre);const scale=4.5/Math.max(.001,size.y);model.scale.setScalar(scale);model.position.multiplyScalar(scale);
 model.traverse(o=>{if(o instanceof THREE.Mesh){
  o.castShadow=true;o.receiveShadow=true;
  const source=Array.isArray(o.material)?o.material:[o.material];
  const themed=source.map(material=>{
   const m=material instanceof THREE.MeshStandardMaterial?material.clone():new THREE.MeshStandardMaterial({color:'#777b88'});
   m.color.set('#515661');m.metalness=.83;m.roughness=.35;m.emissive.set('#a01934');m.emissiveIntensity=.48;
   if('map' in m)m.map=null;
   return m;
  });
  o.material=Array.isArray(o.material)?themed:themed[0];
 }});
 root.add(model);
 const light=new THREE.PointLight('#c81741',8,11,2);light.position.set(0,.3,.5);root.add(light);
 const baseY=root.position.y;
 return {
  id:def.id,root,
  near(x:number,z:number){return Math.hypot(x-def.x,z-def.z)<8;},
  guardianPoint(){return {x:def.x+Math.cos(def.angle)*5.2,z:def.z+Math.sin(def.angle)*5.2,angle:def.angle+Math.PI};},
  update(time:number,opened:boolean,available:boolean){
   root.visible=!opened;
   if(!root.visible)return;
   root.position.y=baseY+Math.sin(time*1.45+def.order*.7)*.08;
   root.rotation.y=def.angle+Math.sin(time*.45+def.order)*.08;
   light.color.set(available?'#d11b45':'#612332');
   light.intensity=(available?8:3)+Math.sin(time*1.6+def.order)*.8;
  }
 };
}
