import type { Save } from './core';
export type RuneNeed={id:string;quantity:number;level:number};
export type ChaosGateDef={id:string;location?:string;name:string;cost:number;color:number;seal:string[];recipes:RuneNeed[][];x:number;z:number;rotation:number;centerX:number;centerZ:number;radius:number};
const need=(id:string,quantity=1,level=1):RuneNeed=>({id,quantity,level});
export const CHAOS_GATES:ChaosGateDef[]=[
 {id:'north',name:'Северный мост',cost:300,color:0xb9ed70,seal:['ᚺ','ᚾ','ᛁ'],recipes:[[need('fehuWealth')],[need('algizGuard')],[need('thurisazStrike')]],x:0,z:52,rotation:Math.PI/2,centerX:0,centerZ:52,radius:0},
 {id:'rune',location:'rune',name:'Древний камень Феху',cost:600,color:0x65e6dd,seal:['ᛁ','ᚾ'],recipes:[[need('uruzStrength')],[need('kenazShard')]],x:42,z:59,rotation:Math.PI/2,centerX:50,centerZ:60,radius:6.5},
 {id:'ashgrove',location:'ashgrove',name:'Роща Ясеня',cost:1000,color:0x58a7ff,seal:['ᚾ','ᚺ'],recipes:[[need('berkanoHeal',2)],[need('algizGuard',2)]],x:-3,z:68,rotation:Math.atan2(-2,7),centerX:-5,centerZ:75,radius:5.8},
 {id:'norns',location:'norns',name:'Прядильня норн',cost:1600,color:0x9d7aff,seal:['ᛁ','ᚾ','ᛈ'],recipes:[[need('ansuzWisdom'),need('perthroFate')],[need('laguzFlow'),need('jeraHarvest')]],x:-44,z:37,rotation:Math.PI/2,centerX:-52,centerZ:38,radius:6.5},
 {id:'threeThreads',location:'threeThreads',name:'Колодец Трёх Норн',cost:2400,color:0xe775d7,seal:['ᚺ','ᛁ','ᚾ','ᛈ'],recipes:[[need('algizGuard',1,2),need('laguzFlow')],[need('eihwazResilience',1,2),need('berkanoHeal')]],x:51,z:-31,rotation:Math.atan2(7,3),centerX:58,centerZ:-28,radius:6},
 {id:'whisperStone',location:'whisperStone',name:'Камень Шёпота',cost:3500,color:0xffac58,seal:['ᚾ','ᛁ','ᛇ'],recipes:[[need('ansuzWisdom',1,2),need('mannazMind',2)],[need('kenazShard',1,2),need('perthroFate',2)]],x:-65.5,z:-48,rotation:Math.PI/2,centerX:-72,centerZ:-48,radius:4.8},
 {id:'runefield',location:'runefield',name:'Поле Рун',cost:5000,color:0xff6c79,seal:['ᚺ','ᚾ','ᛁ','ᛇ'],recipes:[[need('tiwazValor',2,2),need('sowiloLight',1,2)],[need('uruzStrength',2,2),need('dagazDawn',1,2)]],x:10,z:52,rotation:Math.atan2(8,3),centerX:18,centerZ:55,radius:7},
 {id:'mimir',location:'mimir',name:'Колодец Мимира',cost:7000,color:0x65d5ff,seal:['ᛁ','ᚾ','ᛈ','ᛇ'],recipes:[[need('ansuzWisdom',2,2),need('mannazMind',2,2)],[need('perthroFate',2,2),need('eihwazResilience',2,2)]],x:1,z:8,rotation:0,centerX:1,centerZ:0,radius:5.5},
 {id:'powerCircle',location:'powerCircle',name:'Круг Силы',cost:10000,color:0xffd464,seal:['ᚺ','ᚾ','ᛁ','ᛇ','ᛈ'],recipes:[[need('tiwazValor',1,3),need('sowiloLight',2,2)],[need('uruzStrength',1,3),need('algizGuard',2,2)]],x:12,z:-64,rotation:Math.atan2(-7,-6),centerX:5,centerZ:-70,radius:7.6},
 {id:'hoddmimir',location:'hoddmimir',name:'Лес Ходдмимира',cost:14000,color:0xe7dfff,seal:['ᚺ','ᚾ','ᛁ','ᛇ','ᛈ','ᛟ'],recipes:[[need('dagazDawn',1,3),need('othalaLegacy',1,3),need('algizGuard',2,2)],[need('sowiloLight',1,3),need('eihwazResilience',1,3),need('berkanoHeal',2,2)]],x:56,z:70,rotation:Math.atan2(6,8),centerX:62,centerZ:78,radius:8.5}
].map(g=>({...g,rotation:g.location?Math.atan2(g.x-g.centerX,g.z-g.centerZ):g.rotation}));
// The model’s steps face local +Z: orient them away from the sealed location.
export const chaosKey=(id:string)=>'chaos:'+id+':cleared';
export const gateForLocation=(location:string)=>CHAOS_GATES.find(g=>g.location===location);
export const runeCopies=(s:Save,id:string)=>s.runes.includes(id)?Math.max(1,Number(s.lootCounts[id])||1):0;
export const runeStrength=(s:Save,id:string)=>Math.min(3,1+Math.max(0,Number(s.forgeLevels['rune:'+id])||0));
export function canCleanseGate(s:Save,gate:ChaosGateDef,recipe:number){
 const needs=gate.recipes[recipe];return !!needs&&!s.done.includes(chaosKey(gate.id))&&s.immortalityDrops>=gate.cost&&needs.every(n=>runeCopies(s,n.id)>=n.quantity&&runeStrength(s,n.id)>=n.level);
}
export function cleanseGate(s:Save,gateId:string,recipe:number):Save {
 const gate=CHAOS_GATES.find(g=>g.id===gateId);if(!gate||!canCleanseGate(s,gate,recipe))return s;
 const lootCounts={...s.lootCounts},forgeLevels={...s.forgeLevels};let runes=s.runes,equippedRune=s.equippedRune;
 for(const n of gate.recipes[recipe]){const remaining=runeCopies(s,n.id)-n.quantity;lootCounts[n.id]=remaining;if(!remaining){runes=runes.filter(id=>id!==n.id);delete forgeLevels['rune:'+n.id];if(equippedRune===n.id)equippedRune='';}}
 return {...s,immortalityDrops:s.immortalityDrops-gate.cost,done:[...s.done,chaosKey(gate.id)],lootCounts,forgeLevels,runes,equippedRune};
}
