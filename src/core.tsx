import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { clone as cloneSkinned } from "three/examples/jsm/utils/SkeletonUtils.js";



THREE.Cache.enabled = true;



export const tg: any = (window as any).Telegram?.WebApp;


export const BASE: string = (import.meta as any).env?.BASE_URL || "/";


export const GLB_CACHE_NAME = "yggdrasil-glb-v1";


export const glbRequests = new Map<string, Promise<ArrayBuffer>>();


export const STEEL_WEAPONS = new Set(['Sword.glb','Sword_2.glb','Sword_Big.glb','Axe.glb','Axe_Small.glb','Axe_Double.glb','Spear.glb','Hammer_Small.glb','Hammer_Double.glb','Dagger.glb','Dagger_2.glb','Claymore.glb','Scythe.glb']);


export let steelBladeTexture:THREE.Texture|null=null;



export function textureSteelOnWeapon(root:THREE.Object3D,asset:string){
  if(!STEEL_WEAPONS.has(asset))return;
  if(!steelBladeTexture){
    steelBladeTexture=new THREE.TextureLoader().load(`${BASE}img/models/Steel_Brushed_Blade.jpg`);
    steelBladeTexture.colorSpace=THREE.SRGBColorSpace;
    steelBladeTexture.anisotropy=4;
  }
  const meshes:THREE.Mesh[]=[];
  root.traverse(o=>{if((o as THREE.Mesh).isMesh)meshes.push(o as THREE.Mesh);});
  for(const mesh of meshes){
    const source=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry;
    const positions=source.getAttribute('position'),colors=source.getAttribute('color'),normals=source.getAttribute('normal');
    if(!positions||!colors||!normals||Array.isArray(mesh.material))continue;
    const wood={pos:[] as number[],normal:[] as number[],color:[] as number[]};
    const steel={pos:[] as number[],normal:[] as number[],color:[] as number[],uv:[] as number[]};
    source.computeBoundingBox();
    const bounds=source.boundingBox!;
    for(let i=0;i<positions.count;i+=3){
      let metal=0;
      for(let j=i;j<i+3;j++)if(colors.getZ(j)>colors.getX(j)*1.03&&colors.getX(j)>.085)metal++;
      const target=metal>=2?steel:wood;
      for(let j=i;j<i+3;j++){
        target.pos.push(positions.getX(j),positions.getY(j),positions.getZ(j));
        target.normal.push(normals.getX(j),normals.getY(j),normals.getZ(j));
        if(target===steel){
          const shade=colors.getX(j);
          target.color.push(.58+shade,.60+shade,.64+shade);
          steel.uv.push((positions.getZ(j)-bounds.min.z)/Math.max(.001,bounds.max.z-bounds.min.z),(positions.getX(j)-bounds.min.x)/Math.max(.001,bounds.max.x-bounds.min.x));
        }else target.color.push(colors.getX(j),colors.getY(j),colors.getZ(j));
      }
    }
    if(!steel.pos.length)continue;
    const makeGeometry=(data:typeof wood,uv?:number[])=>{
      const geometry=new THREE.BufferGeometry();
      geometry.setAttribute('position',new THREE.Float32BufferAttribute(data.pos,3));
      geometry.setAttribute('normal',new THREE.Float32BufferAttribute(data.normal,3));
      geometry.setAttribute('color',new THREE.Float32BufferAttribute(data.color,3));
      if(uv)geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));
      return geometry;
    };
    mesh.geometry=makeGeometry(wood);
    const steelMaterial=(mesh.material as THREE.MeshStandardMaterial).clone();
    steelMaterial.map=steelBladeTexture;
    steelMaterial.metalness=.55;
    steelMaterial.roughness=.48;
    steelMaterial.vertexColors=true;
    steelMaterial.needsUpdate=true;
    const blade=new THREE.Mesh(makeGeometry(steel,steel.uv),steelMaterial);
    blade.castShadow=mesh.castShadow;
    blade.receiveShadow=mesh.receiveShadow;
    mesh.add(blade);
  }
}



export async function cachedGlbBuffer(url:string):Promise<ArrayBuffer>{
  const absolute=new URL(url,window.location.href).href;
  const pending=glbRequests.get(absolute);
  if(pending)return pending.then(buffer=>buffer.slice(0));
  const request=(async()=>{
    if("caches" in window){
      try{
        const cache=await caches.open(GLB_CACHE_NAME);
        const stored=await cache.match(absolute);
        if(stored)return stored.arrayBuffer();
        const response=await fetch(absolute,{cache:"force-cache"});
        if(!response.ok)throw new Error(`HTTP ${response.status}: ${absolute}`);
        try{await cache.put(absolute,response.clone());}catch{}
        return response.arrayBuffer();
      }catch(error){
        // Some embedded browsers expose CacheStorage but restrict writes.
        // In that case the game must still load normally over the network.
        if(error instanceof Error&&error.message.startsWith("HTTP "))throw error;
      }
    }
    const response=await fetch(absolute,{cache:"force-cache"});
    if(!response.ok)throw new Error(`HTTP ${response.status}: ${absolute}`);
    return response.arrayBuffer();
  })();
  glbRequests.set(absolute,request);
  try{return (await request).slice(0);}
  finally{glbRequests.delete(absolute);}
}



export type Rune = { id: string; sym: string; name: string; meaning: string; task: string; reward: number };


export type Realm = {
  id: string; name: string; emoji: string; tag: string; color: string; glow: string; dark: string; runeSym: string;
  x: number; y: number; runes?: Rune[];
};


export type HeroDef = {
  id: string; race: string; gender: "f" | "m"; sym: string; color: string; str: number; en: number; hp: number;
  weapon: string; ability: string; abilityDesc: string; img: string;
};


export type Quest = { q: string; a: string[]; c: number };


export type Master = { name: string; title: string; hp: number; atk: number; sym: string; greet: string };



export const REALMS: Realm[] = [
  { id: "asgard", name: "Асгард", emoji: "🏛️", tag: "Золотой чертог богов", color: "#ffd76a", glow: "rgba(255,215,106,0.8)", dark: "#3d2e00", runeSym: "ᛟ", x: 50, y: 8, runes: [
    { id: "algiz", sym: "ᛉ", name: "Альгиз", meaning: "Защита богов", task: "Поблагодари высшие силы за защиту.", reward: 8 },
    { id: "ingwaz", sym: "ᛜ", name: "Ингуз", meaning: "Новый цикл", task: "Заверши этап и начни новый.", reward: 9 },
    { id: "dagaz", sym: "ᛞ", name: "Дагаз", meaning: "Рассвет", task: "Сделай шаг к прорыву.", reward: 10 },
  ]},
  { id: "alfheim", name: "Альфхейм", emoji: "✨", tag: "Мир светлых эльфов", color: "#e8f4ff", glow: "rgba(232,244,255,0.8)", dark: "#1a2a3d", runeSym: "ᚹ", x: 25, y: 22, runes: [
    { id: "wunjo", sym: "ᚹ", name: "Вуньо", meaning: "Радость", task: "Сделай что-то для радости.", reward: 6 },
    { id: "laguz", sym: "ᛚ", name: "Лагуз", meaning: "Интуиция", task: "Доверься интуиции.", reward: 7 },
    { id: "mannaz", sym: "ᛗ", name: "Манназ", meaning: "Человечность", task: "Прояви доброту.", reward: 7 },
  ]},
  { id: "vanaheim", name: "Ванахейм", emoji: "🌿", tag: "Дикий мир природы", color: "#b8e986", glow: "rgba(184,233,134,0.8)", dark: "#1a3d00", runeSym: "ᛒ", x: 75, y: 22, runes: [
    { id: "berkanan", sym: "ᛒ", name: "Беркана", meaning: "Рост", task: "Позаботься о теле.", reward: 6 },
    { id: "perthro", sym: "ᛈ", name: "Пертро", meaning: "Тайна", task: "Прими неопределённость.", reward: 7 },
    { id: "jera", sym: "ᛃ", name: "Йера", meaning: "Урожай", task: "Награди себя за труды.", reward: 8 },
  ]},
  { id: "midgard", name: "Мидгард", emoji: "🏡", tag: "Земля людей", color: "#7ee787", glow: "rgba(126,231,135,0.8)", dark: "#003d0a", runeSym: "ᚠ", x: 50, y: 38, runes: [
    { id: "fehu", sym: "ᚠ", name: "Феху", meaning: "Богатство", task: "Запиши 3 вещи для благодарности.", reward: 5 },
    { id: "uruz", sym: "ᚢ", name: "Уруз", meaning: "Сила", task: "Прогулка или зарядка.", reward: 5 },
    { id: "thurisaz", sym: "ᚦ", name: "Турисаз", meaning: "Защита", task: "Откажись от истощающего дела.", reward: 6 },
    { id: "ansuz", sym: "ᚨ", name: "Ансуз", meaning: "Мудрость", task: "Узнай новое и передай другу.", reward: 6 },
  ]},
  { id: "jotunheim", name: "Ётунхейм", emoji: "⛰️", tag: "Мир великанов", color: "#c9b49a", glow: "rgba(201,180,154,0.8)", dark: "#3d2e1a", runeSym: "ᚺ", x: 25, y: 55, runes: [
    { id: "hagalaz", sym: "ᚺ", name: "Хагалаз", meaning: "Разрушение", task: "Избавься от старого.", reward: 7 },
    { id: "othala", sym: "ᛟ", name: "Одал", meaning: "Дом", task: "Удели время семье.", reward: 8 },
    { id: "tiwaz_alt", sym: "ᛏ", name: "Тюр", meaning: "Жертва", task: "Малая жертва ради цели.", reward: 8 },
  ]},
  { id: "svartalfheim", name: "Свартальфхейм", emoji: "⚒️", tag: "Кузни дварфов", color: "#ff9d5c", glow: "rgba(255,157,92,0.8)", dark: "#3d1a00", runeSym: "ᚷ", x: 75, y: 55, runes: [
    { id: "gebo", sym: "ᚷ", name: "Гебо", meaning: "Дар", task: "Сделай подарок.", reward: 7 },
    { id: "ehwaz", sym: "ᛖ", name: "Эваз", meaning: "Движение", task: "Сдвинься с мёртвой точки.", reward: 7 },
    { id: "raido", sym: "ᚱ", name: "Райдо", meaning: "Ритм", task: "Выстрой ритм дня.", reward: 8 },
  ]},
  { id: "niflheim", name: "Нифльхейм", emoji: "❄️", tag: "Мир льдов", color: "#7ec8ff", glow: "rgba(126,200,255,0.8)", dark: "#001a3d", runeSym: "ᛁ", x: 25, y: 75, runes: [
    { id: "isa", sym: "ᛁ", name: "Иса", meaning: "Лёд", task: "10 минут тишины.", reward: 5 },
    { id: "nauthiz", sym: "ᚾ", name: "Наутиз", meaning: "Нужда", task: "Откажись от привычки.", reward: 6 },
    { id: "eihwaz", sym: "ᛇ", name: "Эйваз", meaning: "Стойкость", task: "Доделай отложенное.", reward: 7 },
  ]},
  { id: "muspelheim", name: "Муспельхейм", emoji: "🔥", tag: "Мир огня", color: "#ff6b4a", glow: "rgba(255,107,74,0.8)", dark: "#3d0000", runeSym: "ᚲ", x: 75, y: 75, runes: [
    { id: "kenaz", sym: "ᚲ", name: "Кеназ", meaning: "Творчество", task: "Создай что-то.", reward: 5 },
    { id: "sowilo", sym: "ᛊ", name: "Совило", meaning: "Победа", task: "Шаг к смелой цели.", reward: 6 },
    { id: "teiwaz", sym: "ᛏ", name: "Тейваз", meaning: "Справедливость", task: "Восстанови справедливость.", reward: 7 },
  ]},
  { id: "helheim", name: "Хельхейм", emoji: "🕯️", tag: "Подземный мир", color: "#b678ff", glow: "rgba(182,120,255,0.8)", dark: "#1a003d", runeSym: "ᛉ", x: 50, y: 92, runes: [
    { id: "calc", sym: "ᚲ", name: "Кальк", meaning: "Трансформация", task: "Прими изменение.", reward: 8 },
    { id: "gar", sym: "ᚷ", name: "Гар", meaning: "Судьба", task: "Энергия в одну цель.", reward: 9 },
    { id: "yggdrasil", sym: "ᛉ", name: "Иггдрасиль", meaning: "Единство", task: "Осознай связь действий.", reward: 10 },
  ]},
];



export const NAV = [{ id: "tree", ic: "ᚱ", t: "Путь" }, { id: "hero", ic: "ᛗ", t: "Герой" }, { id: "gift", ic: "ᚷ", t: "Дар" }, { id: "hall", ic: "ᛟ", t: "Чертог" }];


export type Screen = { t: "tree" } | { t: "realm"; id: string } | { t: "choose" } | { t: "hero" } | { t: "gift" } | { t: "hall" } | { t: "craft" } | { t: "forge" } | { t: "mill" } | { t: "trial"; id: string } | { t: "fight"; id: string };


export type HeroSkin = "viking" | "valkyrie";


export type HeroWeapon = "default"|"sword2"|"swordBig"|"swordGolden"|"knife"|"dagger2"|"axe"|"axeSmall"|"axeDouble"|"mace"|"hammerDouble"|"spear"|"claymore"|"scythe";


export const WEAPON_POWER:Record<HeroWeapon,number>={
  default:0,sword2:2,swordBig:4,swordGolden:6,
  knife:1,dagger2:2,axe:3,axeSmall:2,axeDouble:5,
  mace:2,hammerDouble:5,spear:3,claymore:5,scythe:4
};


export const WEAPON_ASSET:Record<Exclude<HeroWeapon,"default">,string>={
  sword2:'Sword_2.glb',swordBig:'Sword_Big.glb',swordGolden:'Sword_Golden.glb',
  knife:'Dagger.glb',dagger2:'Dagger_2.glb',axe:'Axe.glb',axeSmall:'Axe_Small.glb',axeDouble:'Axe_Double.glb',
  mace:'Hammer_Small.glb',hammerDouble:'Hammer_Double.glb',spear:'Spear.glb',claymore:'Claymore.glb',scythe:'Scythe.glb'
};


export type GearId="armor"|"shield"|"helmet"|"boots";


export type GatherKind="wood"|"twigs"|"herbs"|"ashWood";


export type GatherStock=Record<GatherKind,number>;


export const EMPTY_GATHER_STOCK:GatherStock={wood:0,twigs:0,herbs:0,ashWood:0};


export const GATHER_SPOTS:Array<{id:string;kind:GatherKind;x:number;z:number}>=[
  {id:'sapling1',kind:'wood',x:-15,z:54},{id:'sapling2',kind:'wood',x:-23,z:56},
  {id:'sapling3',kind:'wood',x:-30,z:60},{id:'sapling4',kind:'wood',x:17,z:59},
  {id:'sapling5',kind:'wood',x:24,z:63},
  {id:'shrub1',kind:'twigs',x:-11,z:52},{id:'shrub2',kind:'twigs',x:-21,z:51},
  {id:'shrub3',kind:'twigs',x:-30,z:65},{id:'shrub4',kind:'twigs',x:14,z:55},
  {id:'shrub5',kind:'twigs',x:27,z:58},
  {id:'herb1',kind:'herbs',x:-8,z:-27},{id:'herb2',kind:'herbs',x:-5,z:-27},
  {id:'herb3',kind:'herbs',x:-12,z:-27},{id:'herb4',kind:'herbs',x:-16,z:-27},
  {id:'herb5',kind:'herbs',x:9,z:-38},{id:'herb6',kind:'herbs',x:14,z:-41}
];


// Keep the original spot IDs so existing saves retain their collected plants.
// New spots are deterministic and avoid the river, village, bridges and shrines.
for(const [kind,amount,salt] of [['wood',25,1],['twigs',30,2],['herbs',30,3]] as Array<[GatherKind,number,number]>){
  let placed=0;
  for(let attempt=0;attempt<500&&placed<amount;attempt++){
    const rand=(axis:number)=>{const n=Math.sin((attempt+1)*127.1+(salt*7+axis)*311.7)*43758.5453;return n-Math.floor(n);};
    const x=Math.round(-82+rand(1)*164),z=Math.round(-78+rand(2)*158);
    const riverX=-57+Math.sin(((z+94)/6)*.42)*4.2;
    if(Math.abs(x-riverX)<10||Math.abs(x)<33&&z>-36&&z<49)continue;
    if(Math.abs(Math.abs(x)-35)<3&&z>-43&&z<41)continue;
    if(Math.abs(z+48)<3&&x>-52&&x<2)continue;
    if([[5,-70,12],[58,-28,12],[-45,75,10],[-72,-48,10],[-72,48,10],[-64,8,10],[43,32,9]].some(([cx,cz,r])=>Math.hypot(x-cx,z-cz)<r))continue;
    if(GATHER_SPOTS.some(spot=>Math.hypot(x-spot.x,z-spot.z)<5))continue;
    GATHER_SPOTS.push({id:`${kind}2_${placed}`,kind,x,z});placed++;
  }
}


export const GEAR_IDS:GearId[]=["armor","shield","helmet","boots"];


export const SHIELD_ASSETS=['Shield_Round.glb','Shield_Round_2.glb','Shield_Heater.glb','Shield_Heater_2.glb','Shield_Celtic_Golden.glb'];


export const shieldForgeKey=(asset:string)=>asset===SHIELD_ASSETS[0]?'shield':'shield:'+asset;


export type Save = { sparks: number; immortalityDrops:number; millStored:number; done: string[]; gift: string; hero: { id: string; name: string } | null; trials: string[]; artifacts: string[]; equippedArtifact:string; watch: number; streak: number; powers: string[]; heroSkin: HeroSkin; heroWeapon: HeroWeapon; shieldAsset:string; ownedShields:string[]; ownedWeapons: string[]; lootCounts:Record<string,number>; equippedGear: GearId[]; potions: string[]; runes: string[]; equippedRune:string; fieldHp:number|null; frostGuard:number; forgeLevels: Record<string,number>; forgeFreeUsed: boolean; gathered:string[]; stock:GatherStock; locationCooldowns:Record<string,number>; runeSteel:number };


export const DEF: Save = { sparks: 25, immortalityDrops:0, millStored:0, done: [], gift: "", hero: null, trials: [], artifacts: [], equippedArtifact:"", watch: 0, streak: 0, powers: [], heroSkin: "viking", heroWeapon: "default", shieldAsset:SHIELD_ASSETS[0], ownedShields:[SHIELD_ASSETS[0]], ownedWeapons: ["default"], lootCounts:{default:1,[SHIELD_ASSETS[0]]:1}, equippedGear:[], potions: [], runes: [], equippedRune:'',fieldHp:null,frostGuard:0,forgeLevels: {}, forgeFreeUsed: false,gathered:[],stock:{...EMPTY_GATHER_STOCK},locationCooldowns:{},runeSteel:0 };


export const loadSave = (): Save => {
  try {
    const previous:any=JSON.parse(localStorage.getItem("yggdrasil") || "{}");
    const s:any = { ...DEF, ...previous };

    // Old saves may lack a permanent chest reward. Repair the reward rather
    // than deleting completed quests and the bridge from the player's history.
    if(!Array.isArray(s.gathered))s.gathered=[];
    s.stock={...EMPTY_GATHER_STOCK,...(s.stock&&typeof s.stock==='object'?s.stock:{})};
    for(const kind of ['wood','twigs','herbs','ashWood'] as GatherKind[])s.stock[kind]=Math.max(0,Math.floor(Number(s.stock[kind])||0));
    if(!s.locationCooldowns||typeof s.locationCooldowns!=="object"||Array.isArray(s.locationCooldowns))s.locationCooldowns={};
    s.runeSteel=Math.max(0,Math.floor(Number(s.runeSteel)||0));
    s.immortalityDrops=Math.max(0,Math.floor(Number(s.immortalityDrops)||0));
    s.millStored=Math.max(0,Math.floor(Number(s.millStored)||0));
    if (!Array.isArray(s.powers)) s.powers = [];
    if (!Array.isArray(s.done)) s.done = [];
    if (!Array.isArray(s.ownedWeapons)) s.ownedWeapons = ["default"];
    if(!s.lootCounts||typeof s.lootCounts!=="object"||Array.isArray(s.lootCounts))s.lootCounts={};
    s.lootCounts.default=Math.max(1,Number(s.lootCounts.default)||1);
    delete s.arrows;
    s.ownedWeapons=[...new Set(['default',...s.ownedWeapons.filter((id:string)=>id!=='bow'&&Object.prototype.hasOwnProperty.call(WEAPON_POWER,id))])];
    // Restore rewards earned before the weapon progression was rearranged.
    if(s.done?.includes('chest:norns'))s.ownedWeapons=[...new Set([...s.ownedWeapons,'knife'])];
    if(s.done?.includes('whisper:wisdom')||s.done?.includes('whisper:battle'))s.ownedWeapons=[...new Set([...s.ownedWeapons,'mace'])];
    if(s.artifacts?.includes('midgard'))s.ownedWeapons=[...new Set([...s.ownedWeapons,'knife','mace','axe','spear'])];
    delete s.forgeLevels?.bow;
    if (!Array.isArray(s.potions)) s.potions = [];
    if (!Array.isArray(s.runes)) s.runes = [];
    if(s.done?.includes('chest:norns'))s.runes=[...new Set([...s.runes,'uruzStrength'])];

    // Guardian progression must survive every reload. Older/broken builds used
    // two different marker forms, so mirror them both ways.
    for(const id of MIDGARD_GUARDIAN_ORDER){
      const legacy="guardian:"+id, stage="guardian:stage:"+id;
      if(s.done.includes(legacy)||s.done.includes(stage))s.done=[...new Set([...s.done,legacy,stage])];
    }
    // Repair Fehu completions from the build where the reward was granted but
    // the completion marker could be lost. Fehu's rune is the direct reward
    // from that first guardian, so existing players are not forced to repeat it.
    if(s.runes.includes('fehuWealth')){
      s.done=[...new Set([...s.done,'guardian:rune','guardian:stage:rune'])];
    }
    if(typeof s.equippedRune!=="string"||!s.runes.includes(s.equippedRune))s.equippedRune=s.runes.includes('uruzStrength')?'uruzStrength':'';
    if(s.fieldHp!==null&&(!Number.isFinite(s.fieldHp)||s.fieldHp<0))s.fieldHp=null;
    if(!Number.isFinite(s.frostGuard)||s.frostGuard<0)s.frostGuard=0;
    if (!s.forgeLevels || typeof s.forgeLevels !== "object" || Array.isArray(s.forgeLevels)) s.forgeLevels = {};
    if(!Array.isArray(s.equippedGear))s.equippedGear=GEAR_IDS.filter(id=>Number(s.forgeLevels[id]||0)>0);
    s.equippedGear=s.equippedGear.filter((id:string)=>GEAR_IDS.includes(id as GearId));
    if(!SHIELD_ASSETS.includes(s.shieldAsset))s.shieldAsset=SHIELD_ASSETS[0];
    // Keep a previously selected shield when migrating saves from the preview
    // where all shields were temporarily available.
    if(!Array.isArray(previous.ownedShields))s.ownedShields=[SHIELD_ASSETS[0],s.shieldAsset];
    s.ownedShields=[...new Set([SHIELD_ASSETS[0],...s.ownedShields.filter((asset:string)=>SHIELD_ASSETS.includes(asset))])];
    // Rebuild a safe minimum trophy count for saves created before duplicate
    // tracking existed. Existing larger counters are preserved.
    const ensureLootCount=(id:string,count=1)=>{s.lootCounts[id]=Math.max(Number(s.lootCounts[id])||0,count);};
    for(const id of s.ownedWeapons)ensureLootCount(id);
    for(const id of s.ownedShields)ensureLootCount(id);
    for(const id of s.runes)ensureLootCount(id);
    const potionCounts:Record<string,number>={};
    for(const id of s.potions)potionCounts[id]=(potionCounts[id]||0)+1;
    for(const [id,count] of Object.entries(potionCounts))ensureLootCount(id,count);
    if (typeof s.forgeFreeUsed !== "boolean") s.forgeFreeUsed = false;
    if (s.heroSkin !== "viking" && s.heroSkin !== "valkyrie") {
      const hd = s.hero ? HEROES.find((x:any)=>x.id===s.hero.id) : null;
      s.heroSkin = hd?.gender === "f" ? "valkyrie" : "viking";
    }
    if (!Object.prototype.hasOwnProperty.call(WEAPON_POWER,s.heroWeapon)|| (s.heroWeapon!=="default"&&!s.ownedWeapons.includes(s.heroWeapon))) s.heroWeapon = "default";
    // Artifacts represent worlds truly completed in the current progression.
    // Old prototype quiz runs could leave stale realm IDs in saves, so rebuild
    // the list from explicit completion markers instead of trusting that array.
    if(s.done?.includes("guardian:stage:hoddmimir")&&!s.done.includes("world:complete:midgard")){
      s.done=[...new Set([...s.done,"world:complete:midgard"])];
    }
    const confirmedArtifacts=Object.keys(ARTIFACTS).filter(id=>s.done?.includes("world:complete:"+id));
    s.artifacts=confirmedArtifacts;
    if(typeof s.equippedArtifact!=="string"||!confirmedArtifacts.includes(s.equippedArtifact))s.equippedArtifact="";
    if (!s.watch) s.watch = Date.now();
    return s as Save;
  } catch {
    return { ...DEF, watch: Date.now() };
  }
};


export const today = () => new Date().toISOString().slice(0, 10);


export const rank = (n: number) => (n >= 500 ? "Всеотец" : n >= 300 ? "Мудрец Древа" : n >= 150 ? "Хранитель рун" : n >= 50 ? "Странник рун" : "Путник");


export const LADDER = [3, 5, 8, 12, 18, 25, 40];


export const COMBAT_ENERGY = 5;


export const combatEnergyColor = (n:number) => n>=5?"#35d06f":n===4?"#91df4f":n===3?"#328bea":n===2?"#68d8ee":n===1?"#e34c43":"#26302a";



export const WHISPER_GUARD: Master = {
  name: "Хродвитнир",
  title: "Страж Камня шёпота",
  hp: 34,
  atk: 6,
  sym: "ᚦ",
  greet: "Камень хранит память о сотворении Мидгарда. Ответь верно — или докажи своё право оружием."
};


export const WHISPER_QUEST: Quest = {
  q: "Из чего, согласно эддической песне, боги создали землю Мидгарда?",
  a: ["Из ветвей Иггдрасиля", "Из тела великана Имира", "Из камней Асгарда"],
  c: 1
};



export type MidgardGuardianSpec = {
  id:string; location:string; name:string; title:string; sym:string;
  x:number; z:number; hp:number; atk:number; scale:number;
  cloth:number; cloak?:number; accent:number; tempo:number; power:number; requiredPower?:number;
  question:Quest; intro:string; correctReward:number; battleReward:number;
};


export const MIDGARD_GUARDIAN_ORDER=['rune','ashgrove','norns','threeThreads','whisperStone','runefield','mimir','powerCircle','hoddmimir'] as const;


export const MIDGARD_GUARDIANS:Record<string,MidgardGuardianSpec>={
  rune:{
    id:"rune",location:"Древний камень Феху",name:"Фейр",title:"Страж Феху",sym:"ᚠ",
    x:50,z:60,hp:24,atk:5,scale:2.40,cloth:0x805635,cloak:0x9b5b2e,accent:0xd7a14a,tempo:760,power:1,
    question:{q:"Что прежде всего означает руна Феху в древней традиции?",a:["Лёд и неподвижность","Скот, имущество и достаток","Путешествие по морю"],c:1},
    intro:"Золотая руна вспыхивает на камне. Страж проверяет, понимаешь ли ты смысл Феху.",correctReward:5,battleReward:10
  },
  ashgrove:{
    id:"ashgrove",location:"Роща Ясеня",name:"Аскольд",title:"Страж Ясеня",sym:"ᛇ",
    x:-5,z:75,hp:30,atk:6,scale:2.10,cloth:0x4f6840,cloak:0x2f402a,accent:0x8fb66d,tempo:730,power:1,
    question:{q:"Как звали первого мужчину, которого боги создали из дерева?",a:["Аск","Бальдр","Хёд"],c:0},
    intro:"Листья стихли. Из тени ясеней слышится вопрос хранителя рощи.",correctReward:6,battleReward:12
  },
  norns:{
    id:"norns",location:"Прядильня Норн",name:"Вердаль",title:"Страж Нитей",sym:"ᛈ",
    x:-52,z:38,hp:34,atk:7,scale:2.15,cloth:0x697187,cloak:0x51586f,accent:0xc5cbe7,tempo:700,power:2,
    question:{q:"Как зовут трёх Норн у источника судьбы?",a:["Урд, Верданди и Скульд","Фригг, Фрейя и Сиф","Хель, Ран и Нотт"],c:0},
    intro:"Серебряные нити натягиваются между камнями. Страж просит назвать хранительниц судьбы.",correctReward:7,battleReward:14
  },
  threeThreads:{
    id:"threeThreads",location:"Колодец Трёх Норн",name:"Скальд",title:"Страж Трёх Нитей",sym:"ᛉ",
    x:58,z:-28,hp:38,atk:8,scale:2.22,cloth:0x70566f,cloak:0x403445,accent:0xd7b1d0,tempo:670,power:2,
    question:{q:"Какая из трёх Норн связана с тем, чему ещё предстоит случиться?",a:["Урд","Верданди","Скульд"],c:2},
    intro:"Три нити сходятся над водой. Прежде чем выбрать одну из них, нужно выдержать вопрос стража.",correctReward:8,battleReward:16
  },
  whisperStone:{
    id:"whisperStone",location:"Камень Шёпота",name:"Хродвитнир",title:"Страж Камня шёпота",sym:"ᚦ",
    x:-72,z:-48,hp:40,atk:8,scale:2.27,cloth:0x403736,cloak:0x211f21,accent:0xff8a32,tempo:650,power:3,
    question:WHISPER_QUEST,
    intro:"Янтарный свет хранит память о сотворении мира людей. Из глубины раздаётся голос стража.",correctReward:8,battleReward:18
  },
  runefield:{
    id:"runefield",location:"Поле Рун",name:"Райдмар",title:"Страж Рунного Поля",sym:"ᚱ",
    x:18,z:55,hp:42,atk:9,scale:2.24,cloth:0x395d72,cloak:0x263d4a,accent:0x76d8ef,tempo:620,power:3,
    question:{q:"Какая руна Старшего Футарка связана с дорогой, движением и путешествием?",a:["Райдо","Иса","Хагалаз"],c:0},
    intro:"Руны загораются одна за другой. Хранитель поля требует узнать знак пути.",correctReward:9,battleReward:18
  },
  mimir:{
    id:"mimir",location:"Колодец Мимира",name:"Хеймвард",title:"Хранитель Мудрости",sym:"ᚨ",
    x:1,z:0,hp:48,atk:10,scale:2.34,cloth:0x344760,cloak:0x192538,accent:0xe2bd61,tempo:590,power:4,requiredPower:4,
    question:{q:"Что отдал Один за право испить из источника Мимира?",a:["Своё копьё","Один глаз","Кольцо Драупнир"],c:1},
    intro:"Вода становится неподвижной, словно зеркало. Страж Мимира требует цену знания — верный ответ.",correctReward:10,battleReward:21
  },
  powerCircle:{
    id:"powerCircle",location:"Круг Силы",name:"Тюрвальд",title:"Страж Обета",sym:"ᛏ",
    x:5,z:-70,hp:52,atk:11,scale:2.03,cloth:0x663431,cloak:0x2b191a,accent:0xf08a49,tempo:560,power:5,requiredPower:5,
    question:{q:"Какой бог лишился руки, когда асы связали волка Фенрира?",a:["Тюр","Тор","Хеймдалль"],c:0},
    intro:"Монолит отвечает тяжёлым гулом. Здесь силу получают только те, кто помнит цену клятвы.",correctReward:11,battleReward:24
  },
  hoddmimir:{
    id:"hoddmimir",location:"Лес Ходдмимира",name:"Ливгард",title:"Страж Последнего Убежища",sym:"ᛋ",
    x:62,z:78,hp:58,atk:12,scale:2.46,cloth:0x4d5b38,cloak:0x26311f,accent:0xd1b765,tempo:530,power:5,requiredPower:5,
    question:{q:"Кто, согласно эддической традиции, укроется в лесу Ходдмимира и переживёт гибель мира?",a:["Лив и Ливтрасир","Скёлль и Хати","Моди и Магни"],c:0},
    intro:"Глубокий лес словно отсекает шум мира. Последний страж Мидгарда задаёт вопрос о тех, кто переживёт Рагнарёк.",correctReward:12,battleReward:28
  }
};



export const NAMES_F = ["Астрид", "Фрейдис", "Гудрун", "Сигрид", "Хельга", "Ингрид", "Ирса", "Сольвейг"];


export const NAMES_M = ["Сигурд", "Рагнар", "Эйнар", "Лейф", "Бьорн", "Харальд", "Ульф", "Гудмунд"];



export const HEROES: HeroDef[] = [
  { id: "elf", race: "Эльфийка", gender: "f", sym: "ᛊ", color: "#e8f4ff", str: 6, en: 10, hp: 90, weapon: "Лук Лунного Света", ability: "Шёпот ветров", abilityDesc: "1 раз в мире убирает один неверный ответ загадки.", img: "hero_elf.png" },
  { id: "viking", race: "Викинг", gender: "m", sym: "ᛉ", color: "#ffd76a", str: 9, en: 7, hp: 110, weapon: "Копьё Молний", ability: "Крылья бури", abilityDesc: "1 раз за бой щитом поглощает удар врага.", img: "hero_viking.png" },
  { id: "dwarf", race: "Гном", gender: "m", sym: "ᚲ", color: "#ff9d5c", str: 10, en: 5, hp: 130, weapon: "Молот Глубин", ability: "Каменная кожа", abilityDesc: "Получает на 25% меньше урона; сундуки дают +50% Капель силы.", img: "hero_dwarf.png" },
  { id: "berserk", race: "Берсерк", gender: "m", sym: "ᚦ", color: "#ff6b4a", str: 12, en: 4, hp: 100, weapon: "Секира «Клык Зверя»", ability: "Медвежья ярость", abilityDesc: "Когда здоровье ниже половины — урон удваивается.", img: "hero_berserk.png" },
];



export const MASTERS: Record<string, Master> = {
  midgard: { name: "Хеймдалль", title: "Страж Радужного моста", hp: 30, atk: 5, sym: "ᚺ", greet: "Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие." },
  muspelheim: { name: "Сурт", title: "Огненный великан", hp: 35, atk: 6, sym: "ᚲ", greet: "Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч." },
  niflheim: { name: "Нидхёгг", title: "Дракон корней", hp: 35, atk: 6, sym: "ᚾ", greet: "Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей." },
  jotunheim: { name: "Вафтруднир", title: "Мудрейший из великанов", hp: 40, atk: 7, sym: "ᚺ", greet: "Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову." },
  vanaheim: { name: "Ньёрд", title: "Владыка морей и ветров", hp: 40, atk: 7, sym: "ᚾ", greet: "Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь." },
  alfheim: { name: "Фрейр", title: "Владыка Альфхейма", hp: 45, atk: 8, sym: "ᚠ", greet: "Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч." },
  svartalfheim: { name: "Синдри", title: "Мастер кузниц", hp: 45, atk: 8, sym: "ᚲ", greet: "Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою." },
  helheim: { name: "Хель", title: "Госпожа подземного мира", hp: 50, atk: 9, sym: "ᛉ", greet: "Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки." },
  asgard: { name: "Один", title: "Всеотец", hp: 60, atk: 10, sym: "ᛟ", greet: "Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй." },
};


export const MASTER_IMG: Record<string, string> = {
  midgard: "master_midgard",
  alfheim: "master_alfheim",
  vanaheim: "master_vanaheim",
  asgard: "master_asgard",
  jotunheim: "master_jotunheim",
  svartalfheim: "master_svartalfheim",
  niflheim: "master_niflheim",
  muspelheim: "master_muspelheim",
  helheim: "master_helheim",
};


export const QUESTS: Record<string, Quest[]> = {
  midgard: [
    { q: "Как зовут мост, что я стерегу, ярче пламени и светлее солнца?", a: ["Гьялларбру", "Биврёст", "Нагльфар"], c: 1 },
    { q: "Как зовут мой рог, что разбудит всех богов в последний час?", a: ["Гьяллархорн", "Гунгнир", "Гримнир"], c: 0 },
    { q: "Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.", a: ["Лединг", "Дроми", "Глейпнир"], c: 2 },
  ],
  muspelheim: [
    { q: "Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?", a: ["Нагльфар", "Скидбладнир", "Хрингхорни"], c: 0 },
    { q: "Как зовут мой меч, светлее солнца, который я подниму в последней битве?", a: ["Гунгнир", "Лэватеинн, меч победы", "Мьёльнир"], c: 1 },
    { q: "Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?", a: ["Мост через Гьёлль", "Нагльфар", "Биврёст"], c: 2 },
  ],
  niflheim: [
    { q: "Как зовут источник в тумане, где я свернусь и точу корни Древа?", a: ["Источник Мимира", "Хвергельмир", "Источник Урд"], c: 1 },
    { q: "Как зовут белку, что носит мои проклятья орлу на вершине Древа?", a: ["Рататоск", "Ведфёльнир", "Эйктюрнир"], c: 0 },
    { q: "Как зовут Древо, чьи корни я грызу, а оно всё живёт?", a: ["Гласир", "Лэрад", "Иггдрасиль"], c: 2 },
  ],
  jotunheim: [
    { q: "Как зовут великана, из плоти которого создан Мидгард?", a: ["Имир", "Бергельмир", "Хюмир"], c: 0 },
    { q: "Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?", a: ["Скинфакси", "Хримфакси", "Свадильфари"], c: 1 },
    { q: "Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?", a: ["Слид", "Гьёлль", "Ифинг"], c: 2 },
  ],
  vanaheim: [
    { q: "В каком мире я рождён и выращен, в отличие от асов?", a: ["Ванахейм", "Асгард", "Альфхейм"], c: 0 },
    { q: "Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?", a: ["Фригг", "Сиф", "Фрейя"], c: 2 },
    { q: "О чём молят меня мореходы и рыбаки?", a: ["О победе в бою", "О попутном ветре и улове", "Об урожае полей"], c: 1 },
  ],
  alfheim: [
    { q: "Какой мир достался мне в детстве как «подарок на первый зуб»?", a: ["Ванахейм", "Альфхейм", "Ётунхейм"], c: 1 },
    { q: "Как зовут мой корабль, что складывается как ткань и вмещает всех богов?", a: ["Скидбладнир", "Нагльфар", "Хрингхорни"], c: 0 },
    { q: "Что отдал я Скирниру, чтобы завоевать великаншу Герд?", a: ["Коня Блодугхофи", "Кольцо Драупнир", "Свой победный меч"], c: 2 },
  ],
  svartalfheim: [
    { q: "Что выковали мы с братом Брокком, чем теперь бьёт Тор?", a: ["Гунгнир", "Мьёльнир", "Драупнир"], c: 1 },
    { q: "Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?", a: ["Драупнир", "Брисингамен", "Андваранаут"], c: 0 },
    { q: "Как зовут золотого вепря, что мы выковали быстрее любого коня?", a: ["Гулльфакси", "Свадильфари", "Гуллинбурсти"], c: 2 },
  ],
  helheim: [
    { q: "Как зовут мой чертог, где принимаю я умерших от болезней и старости?", a: ["Эльюднир", "Настронд", "Вальхалла"], c: 0 },
    { q: "Как зовут моего пса, что стережёт врата моего царства?", a: ["Фенрир", "Гарм", "Сколль"], c: 1 },
    { q: "Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?", a: ["Ран", "Нотт", "Хель"], c: 2 },
  ],
  asgard: [
    { q: "Что отдал я за глоток из источника Мимира, дающий мудрость?", a: ["Свой глаз", "Коня Слейпнира", "Кольцо Драупнир"], c: 0 },
    { q: "Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?", a: ["Гери и Фреки", "Хугин и Мунин", "Сколль и Хати"], c: 1 },
    { q: "Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?", a: ["Слова прощения", "Тайну рун", "Этого не знает никто, кроме Одина"], c: 2 },
  ],
};



export const ARTIFACTS: Record<string, string> = {
  midgard: "Мегингъёрд — пояс силы",
  muspelheim: "Пламя Муспеля",
  niflheim: "Осколок Хвергельмира",
  jotunheim: "Камень Ифинга",
  vanaheim: "Ветер Ньёрда",
  alfheim: "Свет Альфхейма",
  svartalfheim: "Драупнир — кольцо изобилия",
  helheim: "Слеза Хель",
  asgard: "Гунгнир — копьё Всеотца",
};


export type ArtifactDef={name:string;symbol:string;world:string;description:string;effect:string;attack?:number;rune?:number;defense?:number;power?:number};


export const ARTIFACT_INFO:Record<string,ArtifactDef>={
  midgard:{name:ARTIFACTS.midgard,symbol:"⚡",world:"Мидгард",description:"Пояс силы, полученный после завершения пути Мидгарда. Активный артефакт усиливает физическую мощь героя.",effect:"+2 к обычному удару.",attack:2},
  muspelheim:{name:ARTIFACTS.muspelheim,symbol:"🔥",world:"Муспельхейм",description:"Частица первородного огня Муспельхейма.",effect:"+1 к обычному и +1 к руническому удару.",attack:1,rune:1},
  niflheim:{name:ARTIFACTS.niflheim,symbol:"❄️",world:"Нифльхейм",description:"Ледяной осколок из туманных вод Хвергельмира.",effect:"+2 к защите.",defense:2},
  jotunheim:{name:ARTIFACTS.jotunheim,symbol:"🪨",world:"Ётунхейм",description:"Камень из земли великанов, хранящий их стойкость.",effect:"+1 к защите и +1 к общей силе.",defense:1,power:1},
  vanaheim:{name:ARTIFACTS.vanaheim,symbol:"🌬️",world:"Ванахейм",description:"Дар ветров Ванахейма, несущий движение и внутреннюю силу.",effect:"+1 к руническому удару и +1 к общей силе.",rune:1,power:1},
  alfheim:{name:ARTIFACTS.alfheim,symbol:"✨",world:"Альвхейм",description:"Светлый осколок Альвхейма, усиливающий руническую энергию.",effect:"+2 к руническому удару.",rune:2},
  svartalfheim:{name:ARTIFACTS.svartalfheim,symbol:"💍",world:"Свартальфхейм",description:"Кольцо-символ мастерства и накопленной силы.",effect:"+1 к общей силе.",power:1},
  helheim:{name:ARTIFACTS.helheim,symbol:"🕯️",world:"Хельхейм",description:"Холодная слеза, укрепляющая волю на границе миров.",effect:"+1 к защите и +1 к руническому удару.",defense:1,rune:1},
  asgard:{name:ARTIFACTS.asgard,symbol:"🔱",world:"Асгард",description:"Копьё Всеотца — знак завершённого пути девяти миров.",effect:"+2 к обычному и +1 к руническому удару.",attack:2,rune:1}
};


export function BgImg({ name, className }: { name: string; className: string }) {
  return (
    <img
      src={name.includes(".") ? `${BASE}img/${name}` : `${BASE}img/${name}.jpg`}
      className={className}
      alt=""
      draggable={false}
    />
  );
}
