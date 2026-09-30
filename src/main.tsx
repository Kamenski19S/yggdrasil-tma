import React, { useCallback, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { clone as cloneSkinned } from "three/examples/jsm/utils/SkeletonUtils.js";

THREE.Cache.enabled = true;

const tg: any = (window as any).Telegram?.WebApp;
const BASE: string = (import.meta as any).env?.BASE_URL || "/";
const GLB_CACHE_NAME = "yggdrasil-glb-v1";
const glbRequests = new Map<string, Promise<ArrayBuffer>>();
const STEEL_WEAPONS = new Set(['Sword.glb','Sword_2.glb','Sword_Big.glb','Axe.glb','Axe_Small.glb','Axe_Double.glb','Spear.glb','Hammer_Small.glb','Hammer_Double.glb','Dagger.glb','Dagger_2.glb','Claymore.glb','Scythe.glb']);
let steelBladeTexture:THREE.Texture|null=null;

function textureSteelOnWeapon(root:THREE.Object3D,asset:string){
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

async function cachedGlbBuffer(url:string):Promise<ArrayBuffer>{
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

type Rune = { id: string; sym: string; name: string; meaning: string; task: string; reward: number };
type Realm = {
  id: string; name: string; emoji: string; tag: string; color: string; glow: string; dark: string; runeSym: string;
  x: number; y: number; runes?: Rune[];
};
type HeroDef = {
  id: string; race: string; gender: "f" | "m"; sym: string; color: string; str: number; en: number; hp: number;
  weapon: string; ability: string; abilityDesc: string; img: string;
};
type Quest = { q: string; a: string[]; c: number };
type Master = { name: string; title: string; hp: number; atk: number; sym: string; greet: string };

const REALMS: Realm[] = [
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

const NAV = [{ id: "tree", ic: "ᚱ", t: "Путь" }, { id: "hero", ic: "ᛗ", t: "Герой" }, { id: "gift", ic: "ᚷ", t: "Дар" }, { id: "hall", ic: "ᛟ", t: "Чертог" }];
type Screen = { t: "tree" } | { t: "realm"; id: string } | { t: "choose" } | { t: "hero" } | { t: "gift" } | { t: "hall" } | { t: "craft" } | { t: "forge" } | { t: "trial"; id: string } | { t: "fight"; id: string };
type HeroSkin = "viking" | "valkyrie";
type HeroWeapon = "default"|"sword2"|"swordBig"|"swordGolden"|"knife"|"dagger2"|"axe"|"axeSmall"|"axeDouble"|"mace"|"hammerDouble"|"spear"|"claymore"|"scythe";
const WEAPON_POWER:Record<HeroWeapon,number>={
  default:0,sword2:2,swordBig:4,swordGolden:6,
  knife:1,dagger2:2,axe:3,axeSmall:2,axeDouble:5,
  mace:2,hammerDouble:5,spear:3,claymore:5,scythe:4
};
const WEAPON_ASSET:Record<Exclude<HeroWeapon,"default">,string>={
  sword2:'Sword_2.glb',swordBig:'Sword_Big.glb',swordGolden:'Sword_Golden.glb',
  knife:'Dagger.glb',dagger2:'Dagger_2.glb',axe:'Axe.glb',axeSmall:'Axe_Small.glb',axeDouble:'Axe_Double.glb',
  mace:'Hammer_Small.glb',hammerDouble:'Hammer_Double.glb',spear:'Spear.glb',claymore:'Claymore.glb',scythe:'Scythe.glb'
};
type GearId="armor"|"shield"|"helmet"|"boots";
type GatherKind="wood"|"twigs"|"herbs";
type GatherStock=Record<GatherKind,number>;
const EMPTY_GATHER_STOCK:GatherStock={wood:0,twigs:0,herbs:0};
const GATHER_SPOTS:Array<{id:string;kind:GatherKind;x:number;z:number}>=[
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
const GEAR_IDS:GearId[]=["armor","shield","helmet","boots"];
const SHIELD_ASSETS=['Shield_Round.glb','Shield_Round_2.glb','Shield_Heater.glb','Shield_Heater_2.glb','Shield_Celtic_Golden.glb'];
const shieldForgeKey=(asset:string)=>asset===SHIELD_ASSETS[0]?'shield':'shield:'+asset;
type Save = { sparks: number; done: string[]; gift: string; hero: { id: string; name: string } | null; trials: string[]; artifacts: string[]; watch: number; streak: number; powers: string[]; heroSkin: HeroSkin; heroWeapon: HeroWeapon; shieldAsset:string; ownedShields:string[]; ownedWeapons: string[]; lootCounts:Record<string,number>; equippedGear: GearId[]; potions: string[]; runes: string[]; equippedRune:string; fieldHp:number|null; frostGuard:number; forgeLevels: Record<string,number>; forgeFreeUsed: boolean; gathered:string[]; stock:GatherStock; locationCooldowns:Record<string,number>; runeSteel:number };
const DEF: Save = { sparks: 25, done: [], gift: "", hero: null, trials: [], artifacts: [], watch: 0, streak: 0, powers: [], heroSkin: "viking", heroWeapon: "default", shieldAsset:SHIELD_ASSETS[0], ownedShields:[SHIELD_ASSETS[0]], ownedWeapons: ["default"], lootCounts:{default:1,[SHIELD_ASSETS[0]]:1}, equippedGear:[], potions: [], runes: [], equippedRune:'',fieldHp:null,frostGuard:0,forgeLevels: {}, forgeFreeUsed: false,gathered:[],stock:{...EMPTY_GATHER_STOCK},locationCooldowns:{},runeSteel:0 };
const loadSave = (): Save => {
  try {
    const previous:any=JSON.parse(localStorage.getItem("yggdrasil") || "{}");
    const s:any = { ...DEF, ...previous };

    // Old saves may lack a permanent chest reward. Repair the reward rather
    // than deleting completed quests and the bridge from the player's history.
    if(!Array.isArray(s.gathered))s.gathered=[];
    s.stock={...EMPTY_GATHER_STOCK,...(s.stock&&typeof s.stock==='object'?s.stock:{})};
    for(const kind of ['wood','twigs','herbs'] as GatherKind[])s.stock[kind]=Math.max(0,Math.floor(Number(s.stock[kind])||0));
    if(!s.locationCooldowns||typeof s.locationCooldowns!=="object"||Array.isArray(s.locationCooldowns))s.locationCooldowns={};
    s.runeSteel=Math.max(0,Math.floor(Number(s.runeSteel)||0));
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
    if (!s.watch) s.watch = Date.now();
    return s as Save;
  } catch {
    return { ...DEF, watch: Date.now() };
  }
};
const today = () => new Date().toISOString().slice(0, 10);
const rank = (n: number) => (n >= 500 ? "Всеотец" : n >= 300 ? "Мудрец Древа" : n >= 150 ? "Хранитель рун" : n >= 50 ? "Странник рун" : "Путник");
const LADDER = [3, 5, 8, 12, 18, 25, 40];
const COMBAT_ENERGY = 5;
const combatEnergyColor = (n:number) => n>=5?"#35d06f":n===4?"#91df4f":n===3?"#328bea":n===2?"#68d8ee":n===1?"#e34c43":"#26302a";

const WHISPER_GUARD: Master = {
  name: "Хродвитнир",
  title: "Страж Камня шёпота",
  hp: 34,
  atk: 6,
  sym: "ᚦ",
  greet: "Камень хранит память о сотворении Мидгарда. Ответь верно — или докажи своё право оружием."
};
const WHISPER_QUEST: Quest = {
  q: "Из чего, согласно эддической песне, боги создали землю Мидгарда?",
  a: ["Из ветвей Иггдрасиля", "Из тела великана Имира", "Из камней Асгарда"],
  c: 1
};

type MidgardGuardianSpec = {
  id:string; location:string; name:string; title:string; sym:string;
  x:number; z:number; hp:number; atk:number; scale:number;
  cloth:number; cloak?:number; accent:number; tempo:number; power:number; requiredPower?:number;
  question:Quest; intro:string; correctReward:number; battleReward:number;
};
const MIDGARD_GUARDIAN_ORDER=['rune','ashgrove','norns','threeThreads','whisperStone','runefield','mimir','powerCircle','hoddmimir'] as const;
const MIDGARD_GUARDIANS:Record<string,MidgardGuardianSpec>={
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

const NAMES_F = ["Астрид", "Фрейдис", "Гудрун", "Сигрид", "Хельга", "Ингрид", "Ирса", "Сольвейг"];
const NAMES_M = ["Сигурд", "Рагнар", "Эйнар", "Лейф", "Бьорн", "Харальд", "Ульф", "Гудмунд"];

const HEROES: HeroDef[] = [
  { id: "elf", race: "Эльфийка", gender: "f", sym: "ᛊ", color: "#e8f4ff", str: 6, en: 10, hp: 90, weapon: "Лук Лунного Света", ability: "Шёпот ветров", abilityDesc: "1 раз в мире убирает один неверный ответ загадки.", img: "hero_elf.png" },
  { id: "viking", race: "Викинг", gender: "m", sym: "ᛉ", color: "#ffd76a", str: 9, en: 7, hp: 110, weapon: "Копьё Молний", ability: "Крылья бури", abilityDesc: "1 раз за бой щитом поглощает удар врага.", img: "hero_viking.png" },
  { id: "dwarf", race: "Гном", gender: "m", sym: "ᚲ", color: "#ff9d5c", str: 10, en: 5, hp: 130, weapon: "Молот Глубин", ability: "Каменная кожа", abilityDesc: "Получает на 25% меньше урона; сундуки дают +50% Капель силы.", img: "hero_dwarf.png" },
  { id: "berserk", race: "Берсерк", gender: "m", sym: "ᚦ", color: "#ff6b4a", str: 12, en: 4, hp: 100, weapon: "Секира «Клык Зверя»", ability: "Медвежья ярость", abilityDesc: "Когда здоровье ниже половины — урон удваивается.", img: "hero_berserk.png" },
];

const MASTERS: Record<string, Master> = {
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
const MASTER_IMG: Record<string, string> = {
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
const QUESTS: Record<string, Quest[]> = {
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

const ARTIFACTS: Record<string, string> = {
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
function BgImg({ name, className }: { name: string; className: string }) {
  return (
    <img
      src={name.includes(".") ? `${BASE}img/${name}` : `${BASE}img/${name}.jpg`}
      className={className}
      alt=""
      draggable={false}
    />
  );
}
const CSS = `
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body,#root{height:100%}
body{background:#0b0f0c;color:#e8f0e8;font-family:system-ui,sans-serif;overflow:hidden}
button{font:inherit;color:inherit;background:none;border:none;cursor:pointer}
.app{height:100vh;display:flex;flex-direction:column}
.hdr{display:flex;justify-content:space-between;align-items:center;padding:7px 12px;background:rgba(8,10,9,.92);border-bottom:1px solid #1e2a20;z-index:6}
.title{font-size:14px;font-weight:600}.back{color:#6db3ff;font-size:13px}.sparks{color:#ffb35c;font-weight:700;font-size:13px;display:flex;align-items:center;gap:4px;min-height:34px;overflow:visible;white-space:nowrap}
.maparea{flex:1;position:relative;overflow:hidden;background:#0b0f0c}
.mapwrap{position:absolute;inset:0;overflow-y:auto;overflow-x:hidden;scrollbar-width:none}
.mapwrap::-webkit-scrollbar{display:none}
.mapcanvas{width:100%;min-height:100%;position:relative;margin:0 auto}
.mapimg{width:100%;height:auto;display:block}
.marker{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:5px;z-index:3}
.amulet-wrap{position:relative;width:40px;height:40px;display:flex;align-items:center;justify-content:center}
.amulet-ring{position:absolute;inset:0;border-radius:50%;border:1px dashed;opacity:.5;animation:spin 15s linear infinite;pointer-events:none}
.amulet-glow{position:absolute;inset:-4px;border-radius:50%;opacity:.6;animation:breathe 3s ease-in-out infinite;pointer-events:none;z-index:1}
.amulet-core{position:relative;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;border:2px solid;box-shadow:0 0 9px currentColor,inset 0 0 8px rgba(0,0,0,.85);transition:transform .2s;z-index:2;text-shadow:0 0 6px currentColor}
.amulet-core::after{content:"";position:absolute;inset:3px;border-radius:50%;border:1px solid currentColor;opacity:.5;pointer-events:none}
.marker:active .amulet-core{transform:scale(.85)}
.mname{font-size:9px;font-weight:700;letter-spacing:.5px;padding:3px 8px;border-radius:6px;background:linear-gradient(180deg,rgba(20,25,22,.92),rgba(10,12,11,.96));border:1px solid;text-shadow:0 0 4px currentColor;box-shadow:0 2px 6px rgba(0,0,0,.6);white-space:nowrap;text-transform:uppercase}
.fadeT,.fadeB{position:absolute;left:0;right:0;height:26px;pointer-events:none;z-index:4}
.fadeT{top:0;background:linear-gradient(180deg,#0b0f0c,transparent)}.fadeB{bottom:0;background:linear-gradient(0deg,#0b0f0c,transparent)}
.hint{position:absolute;bottom:10px;left:0;right:0;text-align:center;font-size:11px;color:rgba(207,227,210,.7);z-index:5;pointer-events:none}
.content{flex:1;position:relative;overflow:hidden;background:radial-gradient(circle at 50% 30%,#182420,#0b0f0c)}
.bgimg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.veil{position:absolute;inset:0;background:linear-gradient(rgba(5,8,6,.6),transparent 30%,transparent 65%,rgba(5,8,6,.85));pointer-events:none}
.banner{position:absolute;top:10px;left:12px;right:auto;z-index:4;padding:6px 12px;border-radius:10px;background:linear-gradient(180deg,rgba(20,25,22,.88),rgba(10,12,11,.92));border:1px solid rgba(255,215,106,.45);box-shadow:0 2px 8px rgba(0,0,0,.6);pointer-events:none}
.bemoji{display:none}.btag{display:none}
.bname{font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#ffd76a;text-shadow:0 0 6px rgba(255,215,106,.5)}
.gate{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3;display:flex;flex-direction:column;align-items:center;gap:8px}
.gwrap{position:relative;width:96px;height:96px;display:flex;align-items:center;justify-content:center}
.gate-ring{position:absolute;inset:0;border-radius:50%;border:1.5px dashed;opacity:.6;animation:spin 12s linear infinite;pointer-events:none}
.gate-core{width:76px;height:76px;border-radius:50%;border:3px solid;display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:700;box-shadow:0 0 18px currentColor,inset 0 0 14px rgba(0,0,0,.9);animation:breathe 3s ease-in-out infinite;text-shadow:0 0 10px currentColor}
.player{position:absolute;width:76px;height:110px;transform:translate(-50%,-88%);z-index:20;pointer-events:none;transition:left .12s linear,top .12s linear;filter:drop-shadow(0 5px 7px rgba(0,0,0,.65))}
.player-img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.midgard-content{position:relative;flex:1;min-height:0;overflow:hidden;background:#09110c;touch-action:none}
.midgard-world{position:absolute;left:0;top:0;background:#0b130e;line-height:0;will-change:transform;transition:transform .20s cubic-bezier(.22,.75,.25,1)}
.midgard-mapimg{position:absolute;left:0;top:0;display:block;width:100%;height:100%;object-fit:fill;user-select:none;-webkit-user-drag:none}
.midgard-shade{position:absolute;inset:0;z-index:5;pointer-events:none;background:linear-gradient(180deg,rgba(3,7,4,.12),transparent 24%,transparent 78%,rgba(3,7,4,.22))}
.midgard-content .player{z-index:20;width:58px;height:84px;transform:translate(-50%,-82%);transition:left .16s ease-out,top .16s ease-out;filter:drop-shadow(0 7px 5px rgba(0,0,0,.68))}
.move-pad{position:absolute;left:12px;bottom:16px;z-index:30;width:126px;display:flex;flex-direction:column;align-items:center;gap:3px}
.move-row{display:flex;align-items:center;justify-content:center}
.move-pad button{width:38px;height:38px;margin:2px;border-radius:50%;border:1px solid rgba(255,255,255,.3);background:rgba(12,18,14,.78);color:#e8f0e8;font-size:18px;font-weight:700;box-shadow:0 3px 8px rgba(0,0,0,.45),inset 0 0 8px rgba(126,231,135,.08);backdrop-filter:blur(4px)}
.move-pad button:active{transform:scale(.88);background:rgba(35,55,42,.9)}
.move-pad .move-center{width:32px;height:32px;font-size:10px;color:#ffd76a;border-color:rgba(255,215,106,.35)}
.scene-hint{position:absolute;left:50%;bottom:8px;transform:translateX(-50%);z-index:25;padding:6px 10px;border-radius:9px;background:rgba(5,9,7,.72);border:1px solid rgba(126,231,135,.2);color:rgba(207,227,210,.72);font-size:10px;white-space:nowrap;pointer-events:none}
.herobar{display:flex;gap:10px;align-items:center;padding:8px 12px;background:rgba(10,13,11,.96);border-top:1px solid #1e2a20;z-index:6}
.hbface{position:relative;width:34px;height:34px;flex-shrink:0;border-radius:50%;border:1.5px solid;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;overflow:hidden;background:#0d130f;text-shadow:0 0 5px currentColor}
.hbimg{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.hbname{flex:1;display:flex;flex-direction:column;align-items:flex-start;font-size:13px;font-weight:700;line-height:1.15}
.hbname i{font-style:normal;font-size:10px;color:#8fa39a}
.hbst{font-size:12px;color:#ffb35c;font-weight:700;white-space:nowrap}
.hbwpn{font-size:16px}
.scroll{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:12px}
.card{background:#121a15;border:1px solid #223028;border-radius:16px;padding:14px}.center{text-align:center}.big{font-size:44px}
.qhead2{font-size:16px;font-weight:700;margin:6px 0 4px}.dim{color:#8fa39a;font-size:13px;margin:6px 0 12px}
.choose-screen{padding:12px 12px 18px;gap:10px}.choose-intro{padding:14px 12px 10px}.choose-intro .big{font-size:34px;color:#ffd76a;text-shadow:0 0 10px rgba(255,215,106,.45)}
.hcard{display:flex;gap:12px;padding:12px;background:#121a15;border:1px solid #223028;border-radius:16px;text-align:left;align-items:center}
.hcard.on{border-color:#ffd76a;box-shadow:0 0 12px rgba(255,215,106,.35)}
.hface{position:relative;width:64px;height:64px;flex-shrink:0;border-radius:50%;border:2px solid;display:flex;align-items:center;justify-content:center;overflow:hidden}
.hsym{font-size:26px;font-weight:700;text-shadow:0 0 8px currentColor}
.himg{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.hinfo{flex:1;display:flex;flex-direction:column;gap:3px}
.hname{font-size:15px;font-weight:700}
.hab{font-size:11px;color:#a9bfae;line-height:1.35}
.hst{font-size:11px;color:#ffb35c;font-weight:700}
.hw{font-size:11px;color:#8fa39a}
.bigface{width:96px;height:96px;margin:0 auto 10px}
.hrow{font-size:13px;color:#a9bfae;margin:6px 0;text-align:left}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.chip{padding:8px 12px;border-radius:10px;background:#0d130f;border:1px solid #223028;font-size:13px}
.chip.on{border-color:#ffd76a;color:#ffd76a;box-shadow:0 0 8px rgba(255,215,106,.4)}
.stats{display:flex;gap:10px;justify-content:center;margin:12px 0}
.stat{flex:1;background:#0d130f;border:1px solid #223028;border-radius:12px;padding:10px;display:flex;flex-direction:column;gap:4px;align-items:center}.stat b{font-size:15px}.stat span{font-size:11px;color:#8fa39a}
.rank{font-size:14px;color:#ffd76a}
.nav{display:flex;flex-shrink:0;background:linear-gradient(180deg,#141b16,#0a0d0b);border-top:2px solid #2e3d31;box-shadow:inset 0 1px 0 rgba(255,215,106,.12);padding:3px 4px calc(3px + env(safe-area-inset-bottom));z-index:6}
.navbtn{flex:1;display:flex;flex-direction:column;align-items:center;gap:1px;padding:2px 0;color:#7d8f85;font-size:8px;font-weight:700;letter-spacing:1px;text-transform:uppercase}
.navbtn .ic{width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:700;border-radius:50%;border:1.5px solid #3a4a3d;background:linear-gradient(180deg,#131a15,#0b0f0c);color:#8fa39a;transition:all .2s;text-shadow:0 0 5px currentColor}
.navbtn:active .ic{transform:scale(.88)}
.navbtn.on{color:#ffd76a}
.navbtn.on .ic{border-color:#ffd76a;color:#ffd76a;box-shadow:0 0 10px rgba(255,215,106,.45),inset 0 0 6px rgba(255,215,106,.2)}
.mhead{display:flex;flex-direction:column;align-items:center;gap:6px;padding:16px 0 6px}
.mface{width:84px;height:84px;border-radius:50%;border:3px solid;display:flex;align-items:center;justify-content:center;font-size:34px;font-weight:700;box-shadow:0 0 16px currentColor,inset 0 0 12px rgba(0,0,0,.9);text-shadow:0 0 10px currentColor;background:radial-gradient(circle,#1a221c,#0a0a0a 75%)}
.mname2{font-size:15px;font-weight:700}.mtitle{font-size:11px;color:#8fa39a}
/* Облако-мысль для загадки */
.greet{background:none;border:none;padding:0;font-style:italic;color:#a9bfae;text-align:center;font-size:12px;line-height:1.5}
.cloud{position:relative;margin:14px 10px 0;padding:16px 14px 12px;border-radius:26px;background:linear-gradient(180deg,#eef3ec,#d9e2da);color:#202b24;box-shadow:0 10px 26px rgba(0,0,0,.55), inset 0 -8px 16px rgba(110,130,120,.22);animation:cloudin .45s ease, bob 4s ease-in-out .45s infinite}
.cloud::before{content:"";position:absolute;top:-12px;left:50%;width:30px;height:30px;border-radius:50%;background:#eef3ec;transform:translateX(-75%);box-shadow:0 -2px 6px rgba(0,0,0,.25)}
.cloud::after{content:"";position:absolute;top:-22px;left:50%;width:14px;height:14px;border-radius:50%;background:#eef3ec;transform:translateX(-20%);box-shadow:0 -2px 4px rgba(0,0,0,.2)}
.riddle{color:#202b24;font-size:15px;font-weight:700;line-height:1.45;text-align:center;padding:2px 2px 10px}
.ans{width:100%;padding:11px 12px;border-radius:14px;background:rgba(255,255,255,.8);border:1px solid rgba(70,95,80,.3);color:#243028;font-size:14px;font-weight:600;margin-top:8px;text-align:center}
.ans:active{transform:scale(.98)}
.ans.good{border-color:#2e9e4f;color:#1d7a37;background:rgba(210,255,220,.9);box-shadow:0 0 10px rgba(60,200,110,.5)}
.ans.bad{border-color:#d0503a;color:#a83a28;background:rgba(255,220,214,.9);box-shadow:0 0 10px rgba(255,107,74,.5)}
.ans.off{opacity:.4;pointer-events:none}
.cloud .btn{margin-top:10px}
@keyframes cloudin{from{opacity:0;transform:translateX(46px) scale(.92)}}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
@keyframes battleFlash{0%{opacity:0;transform:scale(.7) rotate(-24deg)}32%{opacity:1}100%{opacity:0;transform:scale(1.18) rotate(-24deg)}}
/* Дуэльная пластина боя */
.duel{position:relative;overflow:hidden;display:flex;align-items:center;gap:8px;padding:12px 12px 10px;background:linear-gradient(180deg,rgba(20,28,23,.92),rgba(10,14,11,.96));border:1px solid #26342a;border-radius:20px;box-shadow:0 6px 18px rgba(0,0,0,.45)}
.battle-fx{position:absolute;inset:-25%;z-index:4;pointer-events:none;opacity:0;transform:rotate(-24deg);animation:battleFlash .48s ease-out}.battle-fx.hit{background:linear-gradient(105deg,transparent 42%,rgba(255,244,205,.96) 48%,rgba(255,119,40,.9) 51%,transparent 58%)}.battle-fx.rune{background:radial-gradient(circle,rgba(159,113,255,.92),rgba(74,158,255,.42) 22%,transparent 58%);filter:drop-shadow(0 0 12px #91dfff)}.battle-fx.guard{background:radial-gradient(circle at 28% 50%,rgba(231,69,45,.72),transparent 35%)}
.guard-face{background:radial-gradient(circle at 50% 38%,#725735 0 20%,#342b25 22% 39%,#101512 41%);box-shadow:0 0 12px #ff9a43,inset 0 0 10px rgba(0,0,0,.8)}
.dside{flex:1;display:flex;flex-direction:column;align-items:center;gap:5px;min-width:0}
.dface{position:relative;width:54px;height:54px;border-radius:50%;border:2px solid;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;overflow:hidden;background:#0d130f;text-shadow:0 0 6px currentColor;box-shadow:0 0 10px currentColor}
.dhp{width:100%;height:6px;border-radius:4px;background:#0a0f0b;border:1px solid #223028;overflow:hidden}
.dhpfill{display:block;height:100%;border-radius:4px;transition:width .35s}
.dname{font-size:10px;font-weight:700;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dnum{font-size:9px;color:#8fa39a}
.dvs{font-size:15px;font-weight:700;color:#ffd76a;text-shadow:0 0 8px rgba(255,215,106,.55)}
.denergy{display:flex;gap:5px;justify-content:center;align-items:center;flex-wrap:nowrap;margin-top:3px}.energy-label{font-size:7px;color:#84968a;text-transform:uppercase;letter-spacing:.6px}
.pip{width:11px;height:11px;border-radius:50%;background:#1c2420;border:1px solid #344039;transition:background .25s,box-shadow .25s,opacity .25s}.pip.on{border-color:rgba(255,255,255,.48)}
.flog{min-height:34px;font-size:12px;font-style:italic;color:#cfe3d2;line-height:1.45;text-align:center;margin:8px 4px}
.acts{display:flex;flex-direction:column;gap:8px;padding:0 6px}
.btn.rune{background:linear-gradient(135deg,#b678ff,#8a4fd6);color:#fff}
.btn.shield{background:linear-gradient(135deg,#7ec8ff,#4a9fd6);color:#06202f}
.btn{width:100%;padding:12px;border-radius:12px;background:linear-gradient(135deg,#2ea6ff,#1f7fd6);color:#fff;font-size:15px;font-weight:600}
.btn.gold{background:linear-gradient(135deg,#ffd76a,#e0a53f);color:#231a05}.btn.ok{background:#17301d;color:#7ee787;border:1px solid rgba(126,231,135,.33)}
.btn.ghost{background:transparent;border:1px solid #2a3a2e;color:#9ab0a2;margin-top:8px}.btn:disabled{opacity:.55}
.toast{position:fixed;top:60px;left:50%;transform:translateX(-50%);z-index:30;background:rgba(0,0,0,.85);border:1px solid rgba(255,215,106,.4);color:#ffd76a;padding:8px 14px;border-radius:12px;font-size:13px;animation:fade .3s}
.house-dialog-backdrop{position:fixed;inset:0;z-index:80;background:rgba(4,9,7,.64);display:flex;align-items:center;justify-content:center;padding:20px}
.house-dialog-panel{width:min(420px,100%);border:1px solid #af8248;border-radius:18px;background:linear-gradient(145deg,#243126,#111a16);color:#fff3d8;padding:22px;box-shadow:0 18px 50px rgba(0,0,0,.55)}
.house-dialog-panel h3{margin:0 0 12px;color:#f3ca77;font-size:19px}.house-dialog-panel p{font-size:16px;line-height:1.5;margin:0 0 20px}.house-dialog-panel button{width:100%;padding:12px;border:1px solid #cfaa64;border-radius:11px;background:#765331;color:#fff7e5;font-weight:700}
.house-quest-status{margin:0 0 18px;padding:12px;border-radius:11px;background:rgba(190,151,82,.13);border:1px solid rgba(211,177,105,.36)}
.house-quest-status b{display:block;color:#f3d99b;margin-bottom:6px}.house-quest-status span{display:block;font-size:13px;line-height:1.45;margin:4px 0}
.days{display:flex;gap:6px;justify-content:center;margin:10px 0}
.day{flex:1;padding:8px 2px;border-radius:10px;background:#0d130f;border:1px solid #223028;font-size:10px;color:#8fa39a;display:flex;flex-direction:column;gap:4px;align-items:center}
.day b{font-size:12px;color:#e8f0e8}
.day.on{border-color:#ffd76a;box-shadow:0 0 8px rgba(255,215,106,.35)}
.day.on b{color:#ffd76a}
.day.done{opacity:.5}
.mface{position:relative;overflow:hidden}
@keyframes breathe{0%,100%{opacity:.3;transform:scale(.9)}50%{opacity:.7;transform:scale(1.1)}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes fade{from{opacity:0}}
@keyframes heroRunePulse{0%,100%{opacity:.48;transform:scale(.9);filter:drop-shadow(0 0 5px rgba(255,215,106,.45))}50%{opacity:1;transform:scale(1.09);filter:drop-shadow(0 0 15px rgba(255,215,106,.95))}}
@keyframes forgePortal{0%{opacity:0;transform:scale(.35) rotate(-18deg)}55%{opacity:1;transform:scale(1.08) rotate(3deg)}100%{opacity:.9;transform:scale(1) rotate(0)}}

.mid3d-scene{background:#8da894;overflow:hidden;position:relative;isolation:isolate;touch-action:none}
.mid3d-scene canvas{position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;user-select:none;-webkit-user-select:none}
.mid3d-ui{position:absolute;z-index:8;user-select:none;-webkit-user-select:none}
.mid3d-top{top:10px;left:10px;right:10px;display:flex;justify-content:space-between;pointer-events:none}
.mid3d-pill{padding:7px 10px;border:1px solid rgba(255,215,106,.28);border-radius:11px;background:rgba(5,12,8,.72);backdrop-filter:blur(5px);box-shadow:0 4px 12px rgba(0,0,0,.25)}
.mid3d-pill b{display:block;color:#ffd76a;font-size:12px;line-height:1.1;letter-spacing:.8px}
.mid3d-pill span{display:block;color:#c9d9cd;font-size:9px;line-height:1.2;margin-top:2px}
.mid3d-joy{left:14px;bottom:52px;width:132px;height:132px;border-radius:50%;background:rgba(7,14,9,.46);border:1px solid rgba(255,255,255,.18);box-shadow:inset 0 0 25px rgba(0,0,0,.22);touch-action:none}
.mid3d-joy:before,.mid3d-joy:after{content:"";position:absolute;left:50%;top:50%;background:rgba(255,255,255,.08);transform:translate(-50%,-50%);pointer-events:none}
.mid3d-joy:before{width:82px;height:1px}.mid3d-joy:after{height:82px;width:1px}
.mid3d-knob{position:absolute;left:41px;top:41px;width:50px;height:50px;border-radius:50%;background:rgba(219,231,221,.28);border:1px solid rgba(255,255,255,.42);box-shadow:0 5px 15px rgba(0,0,0,.35);touch-action:none}
.mid3d-action{right:16px;top:74px;width:42px;height:42px;border-radius:50%;border:1px solid rgba(255,247,191,.8);background:rgba(255,215,106,.92);color:#241b06;font-size:18px;font-weight:900;box-shadow:0 5px 16px rgba(0,0,0,.35);touch-action:none}
.mid3d-strike{right:22px;bottom:112px;width:52px;height:52px;border-radius:50%;border:1px solid rgba(255,225,174,.66);background:radial-gradient(circle at 38% 30%,rgba(255,155,75,.98),rgba(126,38,20,.96));color:#fff4df;font-size:22px;font-weight:900;text-shadow:0 1px 4px rgba(0,0,0,.85);box-shadow:0 5px 15px rgba(0,0,0,.42),0 0 12px rgba(255,99,43,.25);touch-action:none}
.mid3d-strike:active{transform:scale(.88);box-shadow:0 2px 8px rgba(0,0,0,.45),0 0 18px rgba(255,114,54,.55)}
.mid3d-block{right:22px;bottom:178px;width:52px;height:52px;border-radius:50%;border:1px solid rgba(178,230,255,.83);background:radial-gradient(circle at 38% 30%,#89c2da,#284966);color:#fff;font-size:23px;box-shadow:0 5px 15px rgba(0,0,0,.42);touch-action:none}.mid3d-block:active{transform:scale(.91);filter:brightness(1.25)}.mid3d-block:disabled{opacity:.46}
.mid3d-hero-load{left:50%;top:58%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:3px;pointer-events:none;color:#f4d36d;text-shadow:0 2px 8px rgba(0,0,0,.85)}
.mid3d-hero-load b{font-size:34px;line-height:1;animation:heroRunePulse 1.05s ease-in-out infinite}.mid3d-hero-load span{font-size:9px;letter-spacing:.8px;padding:3px 7px;border-radius:8px;background:rgba(4,9,6,.55)}
.mid3d-hint{left:50%;bottom:9px;transform:translateX(-50%);padding:6px 10px;border-radius:9px;background:rgba(5,10,7,.68);border:1px solid rgba(126,231,135,.18);color:#d0dfd3;font-size:10px;line-height:1.2;white-space:nowrap;pointer-events:none}
.mid3d-interact{left:50%;bottom:112px;transform:translateX(-50%);width:210px;text-align:center;padding:10px;border-radius:14px;background:rgba(5,11,7,.91);border:1px solid rgba(255,215,106,.55);box-shadow:0 8px 22px rgba(0,0,0,.35)}
.mid3d-interact b{display:block;color:#ffd76a;font-size:13px;line-height:1.2}
.mid3d-interact span{display:block;color:#aebfb2;font-size:10px;line-height:1.2;margin:3px 0 7px}
.mid3d-interact button{width:100%;padding:8px;border-radius:9px;background:#ffd76a;color:#241b06;font-weight:800;font-size:12px}
.mid3d-rematch{left:10px;top:72px;max-width:168px;padding:9px 11px;border-radius:13px;border:1px solid rgba(255,203,105,.72);background:linear-gradient(145deg,rgba(72,39,20,.94),rgba(28,20,14,.96));color:#ffe5a6;font-size:10px;font-weight:900;line-height:1.25;text-align:left;box-shadow:0 7px 20px rgba(0,0,0,.42),inset 0 1px rgba(255,255,255,.12);z-index:34;animation:cloudin .24s ease-out}.mid3d-rematch small{display:block;margin-top:3px;color:#d8cbb4;font-size:8px;font-weight:600}.mid3d-rematch:active{transform:scale(.97);filter:brightness(1.12)}
.whisper-cloud{left:50%;bottom:8%;transform:translateX(-50%);width:min(90vw,390px);padding:14px;border-radius:24px;background:linear-gradient(180deg,#fffef9,#e8ece8);color:#211e18;border:1px solid rgba(104,76,37,.26);box-shadow:0 14px 36px rgba(0,0,0,.48),inset 0 -8px 16px rgba(83,103,91,.12);text-align:center;z-index:35;touch-action:auto}.whisper-cloud:before{content:"";position:absolute;left:26px;bottom:-15px;border-width:15px 18px 0 0;border-style:solid;border-color:#e8ece8 transparent transparent transparent}.whisper-cloud h3{margin:0 0 5px;color:#9a4d1e;font-size:15px}.whisper-cloud p{margin:0 0 9px;font-size:10px;line-height:1.4;color:#4c4a43}.whisper-question{font-size:13px;font-weight:900;line-height:1.38;margin:7px 0 8px}.whisper-answer,.whisper-action{width:100%;padding:9px;margin-top:6px;border-radius:11px;border:1px solid rgba(61,77,66,.25);background:rgba(255,255,255,.82);color:#242b26;font-size:11px;font-weight:800}.whisper-answer.good{background:#d9f3df;color:#1c7137;border-color:#54a66d}.whisper-answer.bad{background:#f5d8d1;color:#9b3022;border-color:#d56a58}.whisper-answer.off{opacity:.45}.whisper-actions{display:grid;grid-template-columns:1fr 1fr;gap:6px}.whisper-action{margin:0;min-height:48px;background:linear-gradient(145deg,#fff9e8,#ded4bc);border-color:#a68248}.whisper-action.rune{background:linear-gradient(145deg,#eadcff,#b99ae9);color:#382059}.whisper-action.shield{background:linear-gradient(145deg,#dff3ff,#9bcbe5);color:#173d50}.whisper-action.rest{background:linear-gradient(145deg,#dff0d7,#9dc590);color:#24451e}.whisper-action:disabled{opacity:.48}.whisper-log{min-height:28px;margin:0 0 8px;font-size:10px;line-height:1.35;color:#5b4935;font-style:italic}.whisper-close{width:100%;padding:10px;border-radius:11px;background:linear-gradient(145deg,#c47a31,#793b1d);color:#fff7e8;font-size:11px;font-weight:900}.whisper-bars{left:8px;right:8px;top:18%;display:flex;justify-content:space-between;align-items:flex-start;z-index:32;pointer-events:none}.whisper-unit{width:44%;display:flex;flex-direction:column;align-items:center;padding:6px;border-radius:12px;background:rgba(5,9,7,.72);border:1px solid rgba(255,255,255,.22);box-shadow:0 6px 18px rgba(0,0,0,.32)}.whisper-unit b{font-size:10px;color:#fff3d6}.whisper-unit small{font-size:8px;color:#cfddd2;margin-top:2px}.whisper-pips{display:flex;gap:5px;margin-bottom:4px}.whisper-pip{width:12px;height:12px;border-radius:50%;background:#1e2822;border:1px solid rgba(255,255,255,.25)}.whisper-reward-icon{font-size:38px;filter:drop-shadow(0 0 10px #ff9d3e)}.whisper-reward-name{font-size:14px;font-weight:900;color:#8f3d18;margin:4px 0}.whisper-reward-rarity{display:inline-block;padding:3px 8px;border-radius:8px;background:#4e2618;color:#ffc873;font-size:9px;text-transform:uppercase;letter-spacing:.8px}.whisper-battle-fx{position:absolute;inset:-15%;z-index:34;pointer-events:none;opacity:0;animation:battleFlash .48s ease-out}.whisper-battle-fx.hit{background:linear-gradient(110deg,transparent 43%,rgba(255,242,195,.95) 49%,rgba(255,106,35,.88) 52%,transparent 58%)}.whisper-battle-fx.rune{background:radial-gradient(circle,rgba(171,118,255,.82),rgba(81,182,255,.38) 22%,transparent 57%)}.whisper-battle-fx.guard{background:radial-gradient(circle at 30% 48%,rgba(218,53,35,.58),transparent 38%)}
/* Combat HUD: health remains above the world; actions sit directly over the scene. */
.whisper-bars{top:10px;left:10px;right:10px;gap:12px}
.whisper-unit{width:min(42%,168px);min-height:42px;padding:7px 5px;background:rgba(7,13,10,.82);border-color:rgba(223,201,151,.27);border-radius:13px;backdrop-filter:blur(5px)}
.whisper-unit b{font-size:clamp(11px,3.3vw,14px);color:#e6b76f;line-height:1.15}
.whisper-unit small{font-size:11px;color:#d9dfd9;line-height:1.2}
.whisper-combat-hud{left:50%;bottom:47px;transform:translateX(-50%);width:min(calc(100% - 16px),420px);z-index:36;touch-action:auto}
.whisper-combat-energy{display:flex;align-items:center;justify-content:space-between;padding:0 15% 8px;pointer-events:none}
.whisper-combat-energy .whisper-pips{margin:0;gap:5px}
.whisper-combat-energy .whisper-pip{display:block;width:10px;height:10px;border-color:rgba(195,245,208,.55);box-shadow:inset 0 1px 2px rgba(0,0,0,.5)}
.whisper-combat-actions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px;align-items:start}
.whisper-combat-action{display:flex;flex-direction:column;align-items:center;gap:2px;min-width:0;padding:0;border:0;background:none;color:#fff6e5;text-align:center;font:inherit;touch-action:manipulation;cursor:pointer}
.whisper-combat-icon{position:relative;display:grid;place-items:center;width:min(100%,64px);aspect-ratio:1;border:3px ridge #d6a352;border-radius:7px;background:radial-gradient(circle at 48% 40%,#55402a 0%,#241d17 65%,#100e0d 100%);box-shadow:inset 0 0 0 2px #5d3b20,inset 0 0 16px rgba(0,0,0,.75),0 4px 9px rgba(0,0,0,.6),0 0 0 1px #281709;color:#ffd06d;font-size:34px;line-height:1;text-shadow:0 0 11px #ffb341,0 2px 3px #211008}
.whisper-combat-icon:after{content:"";position:absolute;inset:4px;border:1px solid rgba(252,204,112,.25);border-radius:2px;pointer-events:none}
.whisper-combat-action.rune .whisper-combat-icon{font-family:serif;font-size:48px;color:#ffd071}
.whisper-combat-action.rest .whisper-combat-icon{font-size:31px}
.whisper-combat-action b{font-size:clamp(9px,2.6vw,12px);line-height:1.12;white-space:nowrap;text-shadow:0 2px 3px #060807,0 0 6px #060807}
.whisper-combat-action small{font-size:clamp(9px,2.6vw,11px);color:#e5e6df;line-height:1.1;text-shadow:0 2px 3px #060807,0 0 6px #060807}
.whisper-combat-action:active .whisper-combat-icon{transform:scale(.94);filter:brightness(1.25)}
.whisper-combat-action:focus-visible .whisper-combat-icon{outline:2px solid #fff4ca;outline-offset:3px}
.whisper-combat-action:disabled{opacity:.55;cursor:default}
.whisper-combat-log{position:absolute;left:50%;bottom:100%;transform:translateX(-50%);width:max-content;max-width:90%;margin-bottom:13px;padding:6px 10px;border:1px solid rgba(231,194,124,.35);border-radius:9px;background:rgba(8,15,11,.84);color:#f3e5c9;font-size:10px;line-height:1.25;text-align:center;text-shadow:0 1px 2px #000;box-shadow:0 3px 12px rgba(0,0,0,.35);pointer-events:none}
@media(max-width:360px){.whisper-combat-hud{width:calc(100% - 12px)}.whisper-combat-actions{gap:3px}.whisper-combat-icon{width:min(100%,54px);font-size:28px}.whisper-combat-action.rune .whisper-combat-icon{font-size:41px}.whisper-combat-action b,.whisper-combat-action small{font-size:9px}.whisper-combat-energy{padding-left:12%;padding-right:12%}.whisper-combat-energy .whisper-pips{gap:4px}}
@media(max-height:480px){.whisper-combat-hud{bottom:37px}.whisper-combat-icon{width:min(100%,50px)}.whisper-combat-log{margin-bottom:6px}}
.mid3d-door-prompt{right:15px;top:43%;width:142px;padding:10px 10px 9px;border-radius:15px;background:#fffdf7;color:#17130e;border:1px solid rgba(82,51,23,.28);box-shadow:0 8px 24px rgba(0,0,0,.32);text-align:left}.mid3d-door-prompt:before{content:"";position:absolute;left:-10px;top:25px;border-width:8px 10px 8px 0;border-style:solid;border-color:transparent #fffdf7 transparent transparent}.mid3d-door-prompt b{display:block;margin-bottom:8px;color:#17130e;font-size:12px;line-height:1.15}.mid3d-door-prompt button{width:100%;padding:8px 6px;border-radius:9px;border:1px solid #77451f;background:linear-gradient(145deg,#d4924d,#8d5127);color:#fff8e9;font-size:10px;font-weight:900;box-shadow:inset 0 1px rgba(255,255,255,.3),0 3px 8px rgba(66,31,8,.25)}.mid3d-door-prompt button:active{transform:scale(.96);filter:brightness(1.1)}
.mid3d-map-shade{position:absolute;inset:0;z-index:40;background:rgba(3,7,5,.72);backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:center;padding:14px}
.mid3d-map-panel{position:relative;width:min(92vw,390px);max-height:86%;padding:14px;border-radius:18px;background:linear-gradient(145deg,#f7f0dc,#d8c8a6);border:2px solid #ba8d43;color:#322716;box-shadow:0 18px 42px rgba(0,0,0,.65),inset 0 0 28px rgba(112,75,31,.14);overflow:auto;touch-action:auto}
.mid3d-map-title{text-align:center;font-size:17px;font-weight:900;letter-spacing:1px;color:#65451e}.mid3d-map-sub{text-align:center;font-size:10px;color:#806944;margin:3px 0 9px}
.mid3d-map-canvas{position:relative;width:100%;aspect-ratio:1.28;border-radius:13px;overflow:hidden;border:1px solid rgba(94,65,29,.45);background:radial-gradient(circle at 48% 46%,#eee2c4,#cbb88f)}
.mid3d-map-canvas svg{position:absolute;inset:0;width:100%;height:100%}
.map-landmark{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;font-size:13px;font-weight:900;color:#4b371c;text-shadow:0 1px #f8edd2}.map-landmark small{font-size:7px;white-space:nowrap;background:rgba(246,236,210,.82);padding:1px 3px;border-radius:3px}
.map-landmark.goal{color:#a33b1f;animation:mapPulse 1.45s ease-in-out infinite}.map-landmark.hero{z-index:3;color:#155b76;font-size:18px}.map-landmark.hero small{color:#155b76}
.mid3d-map-goal{margin-top:9px;padding:8px 10px;border-radius:10px;background:rgba(255,255,255,.45);border:1px solid rgba(139,80,28,.34);font-size:11px;line-height:1.35}.mid3d-map-goal b{color:#9b321a}
.mid3d-map-close{width:100%;margin-top:9px;padding:9px;border-radius:10px;background:linear-gradient(135deg,#8c5a28,#543319);color:#fff4dc;font-weight:800}
@keyframes mapPulse{0%,100%{filter:drop-shadow(0 0 2px #f6b144);transform:translate(-50%,-50%) scale(1)}50%{filter:drop-shadow(0 0 8px #ff7a36);transform:translate(-50%,-50%) scale(1.15)}}

.hall-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.hall-section{min-height:126px;padding:12px;border-radius:15px;text-align:left;background:linear-gradient(145deg,#18221b,#0d130f);border:1px solid #2b3c30;box-shadow:0 7px 16px rgba(0,0,0,.28)}
.inventory-hall{grid-column:1/-1}.inventory-section h3{font-size:14px;margin:4px 0 9px;color:#e9c16c}.inventory-list{display:grid;gap:7px}.inventory-item{display:grid;grid-template-columns:32px 1fr auto;align-items:center;gap:8px;padding:7px 8px;border:1px solid rgba(184,150,94,.34);border-radius:10px;background:rgba(10,17,14,.82);color:#f5ead4}.inventory-item.empty{opacity:.48}.inventory-symbol{font-size:23px;text-align:center;color:#e9ca74}.inventory-detail b{display:block;font-size:12px}.inventory-detail small{display:block;font-size:10px;color:#aabaad;line-height:1.3;margin-top:2px}.inventory-item button{border-radius:8px;border:1px solid #bda272;background:#4b3725;color:#fff3d8;padding:6px 8px;font-size:11px;white-space:nowrap}.inventory-item button:disabled{opacity:.45}.inventory-item button.active{background:#426345;border-color:#a6cf92}
.hall-section:active{transform:scale(.98)}.hall-section h3{font-size:13px;color:#ffd76a;margin:4px 0}.hall-section p{font-size:9px;line-height:1.35;color:#91a598}.hall-section .hall-icon{font-size:29px;display:block}.hall-count{display:inline-block;margin-top:7px;padding:3px 6px;border-radius:7px;background:#0a0e0b;border:1px solid #34473a;font-size:9px;color:#d6e3d8}
.hall-slots{display:flex;flex-wrap:wrap;gap:4px;margin-top:10px}.hall-slot{position:relative;width:42px;height:42px;flex:0 0 42px;border-radius:10px;border:1px solid #4b5d4e;background:#090d0a;display:flex;align-items:center;justify-content:center;font-size:20px}.hall-slot small{position:absolute;right:-3px;top:-5px;min-width:17px;padding:1px 3px;border-radius:8px;background:#6b3b18;border:1px solid #ffd76a;color:#fff4cf;font-size:8px;font-weight:900}.hall-slot.on{border-color:#ffd76a;box-shadow:0 0 9px rgba(255,215,106,.42)}.hall-slot:active{transform:scale(.91);background:#1b271e}
.vial{position:relative;width:13px;height:21px;border:1px solid rgba(235,249,255,.72);border-radius:3px 3px 7px 7px;background:linear-gradient(180deg,rgba(255,255,255,.35) 0 35%,var(--vial) 38% 100%);box-shadow:0 0 8px var(--vial)}
.craft-entry{width:100%;padding:13px;border-radius:15px;background:linear-gradient(135deg,#5f321b,#1c1712);border:1px solid #d68b38;text-align:left;box-shadow:inset 0 0 18px rgba(255,119,37,.12)}.craft-entry b{display:block;color:#ffc45e;font-size:14px}.craft-entry span{font-size:10px;color:#d7b891}
.craft-screen{background:radial-gradient(circle at 50% 28%,#62331d,#18120e 58%,#090b09);padding-top:18px}.craft-fire{font-size:48px;filter:drop-shadow(0 0 15px #ff6a21)}.craft-recipe{display:grid;grid-template-columns:1fr 34px 1fr 34px 1fr;align-items:center;gap:5px;margin:16px 0}.craft-slot{aspect-ratio:1;border-radius:12px;border:1px solid #725336;background:rgba(8,10,8,.72);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:#8e806c;font-size:9px;padding:4px}.craft-slot b{font-size:24px;color:#d7b06a}.craft-slot.selected{border-color:#ffc45e;color:#ffe2a6;box-shadow:0 0 10px rgba(255,166,48,.28)}.craft-slot.result{border-color:#7fa56b;color:#d8f2c7}.craft-slot small{display:block;margin-top:3px;font-size:7px;line-height:1.2;color:#c8b79d}.craft-op{text-align:center;color:#ffbe55;font-size:20px;font-weight:900}.craft-picker{margin:8px 0 12px;padding:9px;border:1px solid #7c5732;border-radius:12px;background:rgba(12,10,8,.82);display:grid;gap:6px}.craft-picker-title{font-size:10px;color:#f2c777;font-weight:800;text-align:left}.craft-choices{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.craft-choice{display:flex;align-items:center;gap:7px;min-height:42px;padding:7px;border:1px solid #59442d;border-radius:9px;background:#17130f;color:#f1dfbf;text-align:left}.craft-choice b{font-size:10px}.craft-choice small{display:block;color:#aa9a83;font-size:8px}.craft-choice:disabled{opacity:.43}.craft-choice.on{border-color:#f2bd58;background:#2b1d10}.craft-cost{margin:9px 0;padding:8px;border-radius:9px;background:#18130e;border:1px solid #5c452d;color:#d7c4a8;font-size:9px;line-height:1.4}.craft-recipes{margin-top:9px;text-align:left;font-size:8px;line-height:1.45;color:#9f907b}.craft-recipes b{color:#e9bd6b}.steel-wallet{margin:12px 0;padding:10px 12px;border-radius:12px;border:1px solid #7f8490;background:linear-gradient(135deg,#24292e,#111416);color:#e9edf2;font-size:11px}.steel-wallet b{color:#dce8f6;font-size:14px}.steel-section{margin-top:14px;padding-top:12px;border-top:1px solid #5d4933;text-align:left}.steel-section h3{margin:0 0 5px;color:#e6c27d;font-size:12px}.steel-section p{margin:0 0 9px;color:#9e9383;font-size:8px;line-height:1.4}.steel-list{display:grid;gap:6px}.steel-row{display:grid;grid-template-columns:1fr auto;align-items:center;gap:8px;padding:8px 9px;border-radius:9px;border:1px solid #4e4a43;background:#111311}.steel-row b{display:block;color:#eee2ca;font-size:10px}.steel-row small{display:block;color:#9d968a;font-size:8px;margin-top:2px}.steel-row button{padding:6px 8px;border-radius:7px;border:1px solid #a58a5b;background:#3c3020;color:#fff0ce;font-size:8px}.steel-row button:disabled{opacity:.42}.steel-recipe{display:grid;grid-template-columns:1fr auto;align-items:center;gap:8px;padding:9px;border-radius:10px;border:1px solid #52605b;background:linear-gradient(135deg,#17201c,#101411)}.steel-recipe.locked{opacity:.48}.steel-recipe b{display:block;color:#dbe9df;font-size:10px}.steel-recipe small{display:block;color:#9fb0a5;font-size:8px;line-height:1.35;margin-top:2px}.steel-recipe button{padding:6px 8px;border-radius:7px;border:1px solid #89a48f;background:#294032;color:#eefbed;font-size:8px}.steel-recipe button:disabled{opacity:.45}
.forge-screen{background:radial-gradient(circle at 50% 8%,rgba(239,100,27,.32),transparent 34%),linear-gradient(180deg,#21140d,#0b0d0b 72%);padding-top:14px}
.forge-head{position:relative;flex:0 0 auto;min-height:166px;overflow:hidden;padding:14px 16px;border-radius:18px;border:1px solid #9a5a27;background:linear-gradient(145deg,rgba(82,42,19,.95),rgba(17,15,12,.96));box-shadow:inset 0 0 28px rgba(255,107,31,.13),0 8px 20px rgba(0,0,0,.35);text-align:center}.forge-head:before{content:"ᚲ";position:absolute;right:-3px;top:-22px;font-size:105px;color:rgba(255,146,53,.07);transform:rotate(10deg)}
.forge-title{color:#ffc66c;font-size:18px;font-weight:900;letter-spacing:.7px;margin-top:1px}.forge-master{color:#d9c5a6;font-size:10px;line-height:1.35;margin:4px auto 8px;max-width:310px}.forge-advice{position:relative;margin:0 auto 9px;padding:7px 10px;max-width:310px;border-radius:10px;background:rgba(255,232,176,.09);border:1px solid rgba(255,199,92,.30);color:#ffe3a6;font-size:9px;line-height:1.35}.forge-wallet{display:inline-flex;align-items:center;gap:7px;padding:6px 10px;border-radius:11px;background:rgba(4,7,5,.72);border:1px solid rgba(255,196,94,.34);font-size:11px;color:#ffe0a0}.forge-wallet b{color:#ffb34d;font-size:13px}
.forge-free{margin:10px 0 5px;padding:7px 9px;border-radius:10px;background:rgba(255,224,132,.09);border:1px dashed rgba(255,215,106,.42);color:#e9d4a4;font-size:9px;line-height:1.35}.forge-free.ready{color:#fff0b2;box-shadow:inset 0 0 13px rgba(255,174,57,.1)}
.forge-wall{position:relative;flex:0 0 auto;overflow:hidden;width:100%;aspect-ratio:5/4.5;margin:6px 0 4px;border:5px ridge #76502b;border-radius:13px;background:repeating-linear-gradient(0deg,#35251a 0 10px,#432e1c 11px 64px,#251b14 65px 68px);box-shadow:inset 0 0 32px #100c0a,0 7px 18px #0008}
.forge-wall canvas{display:block;width:100%;height:100%}
.forge-wall-labels{position:absolute;inset:0;display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(4,1fr)}
.forge-wall-label{display:flex;align-items:flex-end;justify-content:center;padding:0 1px 2px;border:1px solid #b9873c66;background:linear-gradient(180deg,transparent 58%,#21170eca);color:#ffe6ad;font-size:6px;font-weight:800;text-align:center;text-shadow:0 1px 3px #000,0 0 6px #000;line-height:1.1}
.forge-wall-label.owned{color:#b8f0b4}
.forge-wall-label.equipped{border:2px solid #93e697;box-shadow:inset 0 0 11px #59d97790}.forge-wall-label:active{background:#bb783955}
.spark-drop{display:inline-block;width:18px;height:28px;margin:0 2px;object-fit:contain;object-position:center;filter:drop-shadow(0 0 5px #ffac34aa);flex:0 0 auto}
.sparks .spark-drop{width:20px;height:31px;margin:-1px 1px 0 0}
.forge-wallet .spark-drop{width:17px;height:26px}
.forge-equipped{display:flex;align-items:center;justify-content:space-between;gap:7px;padding:8px 9px;border:1px solid #d9a749;border-radius:10px;background:#352314;color:#ffe6a7;font-size:9px;font-weight:800}.forge-equipped button{padding:6px 7px;background:#b97e32;border:1px solid #ffe5a2;border-radius:7px;color:#1b1208;font-size:8px;font-weight:900}
.forge-gear-actions{display:flex;gap:5px;width:100%}.forge-gear-actions button{flex:1;min-height:25px;padding:3px 1px;border-radius:6px;border:1px solid #bf914f;background:#44301a;color:#ffe6a7;font-size:7px;font-weight:800}.forge-gear-actions button.on{background:#31704a;border-color:#a6e0a5}.forge-gear-actions button:disabled{opacity:.58}
.forge-wall-note{font-size:10px;line-height:1.4;color:#e5cdaa;margin:5px 2px 9px}
.forge-group-title{display:flex;align-items:center;gap:7px;margin:15px 2px 7px;color:#eacb91;font-size:11px;font-weight:900;letter-spacing:.8px;text-transform:uppercase}.forge-group-title:after{content:"";height:1px;flex:1;background:linear-gradient(90deg,rgba(226,165,80,.42),transparent)}
.forge-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px}.forge-item{position:relative;min-height:49px;padding:3px 2px;border-radius:8px;border:1px solid #9c7535;background:linear-gradient(145deg,#6f4b1d,#271b0e 56%,#11100d);color:#fff0c5;box-shadow:inset 0 0 9px rgba(255,207,91,.09),0 2px 5px rgba(0,0,0,.25);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;touch-action:manipulation}.forge-item:active{transform:scale(.96);filter:brightness(1.18)}.forge-item .fi-icon{font-size:16px;line-height:1;filter:drop-shadow(0 0 6px rgba(255,188,72,.42))}.forge-item .fi-name{font-size:7px;font-weight:800;line-height:1.12}.forge-item .fi-level{font-size:6px;color:#f3cb78}.forge-item .fi-cost{padding:1px 3px;border-radius:5px;background:rgba(7,7,5,.56);font-size:6px;color:#ffbd58}.forge-item.free{border-color:#ffd76a;box-shadow:inset 0 0 10px rgba(255,213,90,.16),0 0 6px rgba(255,166,47,.18)}.forge-item.selected{border-color:#ffe18a;box-shadow:inset 0 0 10px rgba(255,220,119,.2),0 0 8px rgba(255,135,37,.35)}.forge-item.locked{filter:saturate(.25);opacity:.56}.forge-item.locked .fi-cost{color:#9e9582}.forge-item.maxed{border-color:#9cdaae;background:linear-gradient(145deg,#37583f,#15241a 60%,#0b100c)}
.forge-note{margin:14px 0 6px;padding:10px 12px;border-radius:12px;border:1px solid rgba(213,155,75,.25);background:rgba(5,7,5,.62);font-size:9px;line-height:1.45;color:#bba98e}.forge-note b{color:#f1c979}.forge-exit{width:100%;margin-top:8px;padding:12px;border-radius:12px;border:1px solid #ff765a;background:radial-gradient(circle at 50% 0,rgba(255,201,96,.42),transparent 42%),linear-gradient(135deg,#b31f27,#5d0711 64%,#260207);color:#fff0db;font-size:11px;font-weight:900;box-shadow:inset 0 0 18px rgba(255,133,48,.23),0 0 14px rgba(198,28,27,.28);text-shadow:0 1px 4px #350006}.forge-exit:active{transform:scale(.98);filter:brightness(1.12)}
.forge-transition{position:fixed;inset:0;z-index:80;background:radial-gradient(circle,rgba(255,151,46,.32),rgba(5,5,4,.94) 58%);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;color:#ffd47b;pointer-events:all}.forge-transition b{display:flex;align-items:center;justify-content:center;width:104px;height:104px;border-radius:50%;border:2px solid rgba(255,198,89,.72);background:radial-gradient(circle,rgba(255,178,56,.3),rgba(68,29,9,.42) 55%,transparent 57%);font-size:54px;box-shadow:0 0 26px rgba(255,116,25,.65),inset 0 0 25px rgba(255,188,77,.35);animation:forgePortal .72s ease-out}.forge-transition span{font-size:10px;letter-spacing:1.3px;text-transform:uppercase;text-shadow:0 2px 8px #000}
`;

/* ===== Midgard 3D: реальная сцена, герой, дорога, деревня, кузница и Мимир ===== */

/* ===== Midgard 3D: большая северная деревня, лес, река, кузница, Мимир и норны ===== */

const midMat = (c: number, roughness = 0.9, metalness = 0) =>
  new THREE.MeshStandardMaterial({ color: c, roughness, metalness });

const midBox = (w: number, h: number, d: number, c: number, roughness = 0.9) =>
  new THREE.Mesh(new THREE.BoxGeometry(w, h, d), midMat(c, roughness));

const midCyl = (r: number, h: number, c: number, segments = 12, roughness = 0.9) =>
  new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, segments), midMat(c, roughness));

const midHash = (x: number, z: number) => {
  const n = Math.sin(x * 127.1 + z * 311.7) * 43758.5453;
  return n - Math.floor(n);
};

// Subtle deterministic deformation: keeps silhouettes organic without adding heavy assets.
const midWarpGeometry = (geo: THREE.BufferGeometry, amount = 0.06, seed = 1) => {
  const p = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const n = Math.sin((x + seed) * 7.13 + (z - seed) * 5.71 + y * 3.17) * 0.5 + 0.5;
    const radial = Math.min(1, Math.sqrt(x * x + z * z) * 0.7);
    p.setX(i, x + (n - 0.5) * amount * (0.45 + radial));
    p.setZ(i, z + (Math.cos((z + seed) * 6.41 + y * 2.37) - 0.5) * amount * (0.35 + radial));
  }
  p.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
};
    const organicBlobGeometry = (geo: THREE.BufferGeometry, amount = 0.10, seed = 1) => {
      const p = geo.attributes.position as THREE.BufferAttribute;
      for(let i=0;i<p.count;i++){
        const x=p.getX(i), y=p.getY(i), z=p.getZ(i);
        const r=Math.max(.001,Math.sqrt(x*x+z*z));
        const n1=Math.sin(x*8.7+z*6.1+y*4.3+seed)*.5+.5;
        const n2=Math.cos(x*13.2-z*9.4+y*3.1+seed*1.7)*.5+.5;
        const edge=Math.min(1,r*1.4);
        p.setX(i,x+(n1-.5)*amount*(.45+edge));
        p.setZ(i,z+(n2-.5)*amount*(.35+edge));
        p.setY(i,y+(n1+n2-1)*amount*.18);
      }
      p.needsUpdate=true;
      geo.computeVertexNormals();
      return geo;
    };


const midHeight = (x: number, z: number) => {
  const hillA = Math.sin(x * 0.11 + 0.7) * 0.65;
  const hillB = Math.cos(z * 0.09 - 0.4) * 0.48;
  const hillC = Math.sin((x + z) * 0.055) * 0.35;
  const villageFlatten = Math.exp(-(x * x + (z + 3) * (z + 3)) / 900);
  return (hillA + hillB + hillC) * (1 - villageFlatten * 0.72);
};

function markMeshes(g: THREE.Object3D) {
  g.traverse((o: any) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });
  return g;
}

function midRock(x: number, z: number, s = 1) {
  const g = new THREE.Group();
  const rock = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.9 * s, 1),
    midMat(0x5b625d, 0.98)
  );
  rock.scale.y = 0.65 + midHash(x, z) * 0.3;
  rock.rotation.set(midHash(x, z) * 0.5, midHash(z, x) * 2, 0);
  g.add(rock);
  g.position.set(x, midHeight(x, z) + 0.2 * s, z);
  return markMeshes(g);
}

function addGrassTuft(scene: THREE.Scene, x: number, z: number, s = 1) {
  const g = new THREE.Group();
  const mat = new THREE.MeshLambertMaterial({ color: 0x3d653e });
  for (let i = 0; i < 4; i++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.035 * s, 0.45 * s, 0.035 * s), mat);
    blade.position.set((i - 1.5) * 0.08 * s, 0.22 * s, (i % 2) * 0.07 * s);
    blade.rotation.z = (i - 1.5) * 0.18;
    blade.material = mat;
    g.add(blade);
  }
  g.position.set(x, midHeight(x, z), z);
  scene.add(g);
}

function addRibbonRoad(scene: THREE.Scene, points: Array<[number, number]>, width: number, color: number) {
  const verts: number[] = [];
  const idx: number[] = [];
  const pts = points.map(([x, z]) => new THREE.Vector3(x, midHeight(x, z) + 0.045, z));
  for (let i = 0; i < pts.length; i++) {
    const prev = pts[Math.max(0, i - 1)];
    const next = pts[Math.min(pts.length - 1, i + 1)];
    const dx = next.x - prev.x;
    const dz = next.z - prev.z;
    const len = Math.max(0.001, Math.hypot(dx, dz));
    const px = -dz / len;
    const pz = dx / len;
    const half = width / 2;
    verts.push(pts[i].x + px * half, pts[i].y, pts[i].z + pz * half);
    verts.push(pts[i].x - px * half, pts[i].y + 0.006, pts[i].z - pz * half);
    if (i < pts.length - 1) {
      const k = i * 2;
      idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const road = new THREE.Mesh(geo, midMat(color, 1));
  road.receiveShadow = true;
  scene.add(road);

}

function gableRoof(width: number, depth: number, color: number) {
  const g = new THREE.Group();
  const panelW = width * 0.57;
  const angle = 0.58;
  const panelA = midBox(panelW, 0.22, depth + 0.55, color, 0.95);
  const panelB = midBox(panelW, 0.22, depth + 0.55, color, 0.95);
  panelA.rotation.z = angle;
  panelB.rotation.z = -angle;
  panelA.position.x = -width * 0.205;
  panelB.position.x = width * 0.205;
  g.add(panelA, panelB);
  return g;
}

function placeHouse(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number, label: string, id: string, scale = 1) {
  const g = new THREE.Group();
  g.userData = { label, id };
  const y = midHeight(x, z);
  const w = 7 * scale;
  const d = 5.4 * scale;
  const wall = midBox(w, 3.4 * scale, d, 0x6d4a34, 0.96);
  wall.position.y = 1.7 * scale;
  g.add(wall);

  const lower = midBox(w + 0.25, 0.38 * scale, d + 0.25, 0x3d2a1e, 0.98);
  lower.position.y = 0.2 * scale;
  g.add(lower);

  const roof = gableRoof(w + 0.8 * scale, d + 0.4 * scale, 0x302722);
  roof.position.y = 4.0 * scale;
  g.add(roof);

  // Clean front facade: no tall beams in front of the entrance.
  const beamMat = 0x38261b;
  const cross = midBox(w * 0.95, 0.28 * scale, 0.3 * scale, beamMat, 0.98);
  cross.position.set(0, 2.35 * scale, d / 2 + 0.05 * scale);
  g.add(cross);

  const door = midBox(1.08 * scale, 1.9 * scale, 0.16 * scale, 0x291b14, 0.98);
  door.position.set(0, 0.95 * scale, d / 2 + 0.11 * scale);
  g.add(door);
  const handle = midCyl(0.055 * scale, 0.12 * scale, 0xc69a52, 8, 0.55);
  handle.rotation.z = Math.PI / 2;
  handle.position.set(0.33 * scale, 0.98 * scale, d / 2 + 0.2 * scale);
  g.add(handle);

  const windowMat = new THREE.MeshStandardMaterial({
    color: 0xd7a85b,
    emissive: 0x8b5d1e,
    emissiveIntensity: 0.7,
    roughness: 0.55,
  });
  [-1.85, 1.85].forEach(px => {
    const win = new THREE.Mesh(new THREE.BoxGeometry(1.15 * scale, 0.95 * scale, 0.08 * scale), windowMat);
    win.position.set(px * scale, 1.85 * scale, d / 2 + 0.1 * scale);
    g.add(win);
    const mullionV = midBox(0.08 * scale, 1.02 * scale, 0.11 * scale, 0x35251b, 0.98);
    mullionV.position.set(px * scale, 1.85 * scale, d / 2 + 0.16 * scale);
    g.add(mullionV);
    const mullionH = midBox(1.18 * scale, 0.08 * scale, 0.11 * scale, 0x35251b, 0.98);
    mullionH.position.set(px * scale, 1.85 * scale, d / 2 + 0.16 * scale);
    g.add(mullionH);
  });

  const chimney = midBox(0.65 * scale, 2.0 * scale, 0.65 * scale, 0x554840, 0.95);
  chimney.position.set(w * 0.25, 4.55 * scale, -0.3 * scale);
  g.add(chimney);
  const cap = midBox(0.9 * scale, 0.18 * scale, 0.9 * scale, 0x312a26, 0.98);
  cap.position.set(w * 0.25, 5.55 * scale, -0.3 * scale);
  g.add(cap);

  g.position.set(x, y, z);
  scene.add(markMeshes(g));
  objects.push(g);
}

function addFence(scene: THREE.Scene, x1: number, z1: number, x2: number, z2: number) {
  const g = new THREE.Group();
  const dx = x2 - x1;
  const dz = z2 - z1;
  const len = Math.hypot(dx, dz);
  const angle = Math.atan2(dx, dz);
  const posts = Math.max(2, Math.floor(len / 2.8));
  for (let i = 0; i <= posts; i++) {
    const t = i / posts;
    const p = midBox(0.18, 1.55, 0.18, 0x4b3020, 0.98);
    p.position.set(x1 + dx * t, midHeight(x1 + dx * t, z1 + dz * t) + 0.78, z1 + dz * t);
    g.add(p);
  }
  for (const yy of [0.48, 1.0]) {
    const rail = midBox(0.14, 0.14, len, 0x5b3b25, 0.98);
    rail.rotation.y = angle;
    rail.position.set((x1 + x2) / 2, midHeight((x1 + x2) / 2, (z1 + z2) / 2) + yy, (z1 + z2) / 2);
    g.add(rail);
  }
  scene.add(markMeshes(g));
}

function addBarrel(scene: THREE.Scene, x: number, z: number, s = 1) {
  const g = new THREE.Group();
  const b = midCyl(0.48 * s, 0.95 * s, 0x62432d, 12, 0.98);
  b.position.y = 0.48 * s;
  g.add(b);
  for (const yy of [0.22, 0.74]) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.49 * s, 0.045 * s, 6, 18),
      midMat(0x2e2926, 0.72, 0.15)
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = yy * s;
    g.add(ring);
  }
  g.position.set(x, midHeight(x, z), z);
  scene.add(markMeshes(g));
}

function addCrate(scene: THREE.Scene, x: number, z: number, s = 1) {
  const g = new THREE.Group();
  const box = midBox(0.9 * s, 0.72 * s, 0.9 * s, 0x704a2f, 0.98);
  box.position.y = 0.36 * s;
  g.add(box);
  const slat = midBox(0.08 * s, 0.8 * s, 0.95 * s, 0x39261a, 0.98);
  slat.position.y = 0.36 * s;
  g.add(slat);
  g.position.set(x, midHeight(x, z), z);
  scene.add(markMeshes(g));
}

function addFire(scene: THREE.Scene, fires: Array<{ light: THREE.PointLight; phase: number }>, x: number, z: number, scale = 1) {
  const g = new THREE.Group();
  const stones = [0, 1, 2, 3, 4, 5].map(i => {
    const a = i / 6 * Math.PI * 2;
    const s = midCyl(0.24 * scale, 0.28 * scale, 0x4d4a43, 7, 1);
    s.position.set(Math.cos(a) * 0.65 * scale, 0.14 * scale, Math.sin(a) * 0.65 * scale);
    return s;
  });
  g.add(...stones);
  const wood1 = midBox(0.18 * scale, 0.18 * scale, 1.35 * scale, 0x4a2d1b, 0.98);
  const wood2 = wood1.clone();
  wood1.rotation.y = 0.6;
  wood2.rotation.y = -0.6;
  wood1.position.y = wood2.position.y = 0.3 * scale;
  g.add(wood1, wood2);
  const flameMat = new THREE.MeshStandardMaterial({ color: 0xff8a2b, emissive: 0xff5a12, emissiveIntensity: 3.2, roughness: 0.55 });
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.42 * scale, 1.2 * scale, 7), flameMat);
  flame.position.y = 0.92 * scale;
  g.add(flame);
  const inner = new THREE.Mesh(new THREE.ConeGeometry(0.22 * scale, 0.72 * scale, 7), new THREE.MeshStandardMaterial({ color: 0xffe2a0, emissive: 0xff9a22, emissiveIntensity: 3.8, roughness: 0.5 }));
  inner.position.y = 0.84 * scale;
  g.add(inner);
  g.position.set(x, midHeight(x, z), z);
  scene.add(markMeshes(g));
  const light = new THREE.PointLight(0xff8a38, 2.0 * scale, 10 * scale, 2);
  light.position.set(x, midHeight(x, z) + 2 * scale, z);
  scene.add(light);
  fires.push({ light, phase: midHash(x, z) * 10 });
}

function addForge(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number) {
  const g = new THREE.Group();
  g.userData = { label: "Кузница", id: "forge" };
  const y = midHeight(x, z);
  const wall = midBox(8.5, 4.2, 6.5, 0x4d3b31, 0.98);
  wall.position.y = 2.1;
  g.add(wall);
  const roof = gableRoof(9.3, 7.0, 0x292421);
  roof.position.y = 4.75;
  g.add(roof);
  for (const px of [-3.9, 3.9]) {
    const beam = midBox(0.3, 4.3, 0.34, 0x2d2119, 0.98);
    beam.position.set(px, 2.15, 3.28);
    g.add(beam);
  }
  const furnace = midBox(2.0, 1.8, 1.6, 0x34312e, 0.98);
  furnace.position.set(-1.9, 0.9, 0.4);
  g.add(furnace);
  const glowMat = new THREE.MeshStandardMaterial({ color: 0xff7b25, emissive: 0xff3d0b, emissiveIntensity: 4, roughness: 0.5 });
  const opening = new THREE.Mesh(new THREE.CircleGeometry(0.48, 16), glowMat);
  opening.rotation.y = Math.PI;
  opening.position.set(-1.9, 1.0, 1.23);
  g.add(opening);
  const chimney = midBox(0.9, 4.0, 0.9, 0x3d3632, 0.96);
  chimney.position.set(-1.9, 6.0, -0.5);
  g.add(chimney);
  const anvil = midBox(1.2, 0.38, 0.52, 0x252729, 0.42);
  anvil.position.set(1.4, 1.0, 0.9);
  g.add(anvil);
  const anvilStem = midBox(0.45, 0.9, 0.45, 0x292a2a, 0.45);
  anvilStem.position.set(1.4, 0.55, 0.9);
  g.add(anvilStem);
  for (let i = 0; i < 3; i++) {
    const tool = midBox(0.08, 1.5, 0.08, 0xb6b4ae, 0.45);
    tool.position.set(2.4 + i * 0.18, 1.0, 1.15);
    tool.rotation.z = -0.25 + i * 0.15;
    g.add(tool);
  }
  g.position.set(x, y, z);
  scene.add(markMeshes(g));
  objects.push(g);
  const forgeLight = new THREE.PointLight(0xff7a2d, 2.8, 12, 2);
  forgeLight.position.set(x - 1.9, y + 2.0, z + 1.0);
  scene.add(forgeLight);
}

function addMimirWell(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number) {
  const g = new THREE.Group();
  g.userData = { label: "Колодец Мимира", id: "mimir" };
  const y = midHeight(x, z);
  const stones = midMat(0x58615b, 0.98);
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * Math.PI * 2;
    const stone = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.42, 0.42), stones);
    stone.position.set(Math.cos(a) * 1.25, 0.22, Math.sin(a) * 1.25);
    stone.rotation.y = a + Math.PI / 2;
    g.add(stone);
  }
  const water = new THREE.Mesh(new THREE.CircleGeometry(0.92, 28), new THREE.MeshStandardMaterial({ color: 0x173a43, emissive: 0x0b3038, emissiveIntensity: 1.2, roughness: 0.22, metalness: 0.05 }));
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.45;
  g.add(water);
  const postL = midBox(0.22, 2.8, 0.22, 0x4b3020, 0.98);
  const postR = postL.clone();
  postL.position.set(-1.2, 1.55, 0);
  postR.position.set(1.2, 1.55, 0);
  g.add(postL, postR);
  const beam = midBox(2.8, 0.24, 0.24, 0x39261a, 0.98);
  beam.position.y = 2.82;
  g.add(beam);
  const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.15, 6), midMat(0x7b6248, 1));
  rope.position.y = 2.2;
  g.add(rope);
  const bucket = midCyl(0.3, 0.42, 0x5d412a, 10, 0.98);
  bucket.position.set(0, 1.62, 0);
  g.add(bucket);
  const halo = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.055, 8, 40), new THREE.MeshStandardMaterial({ color: 0x7ee787, emissive: 0x2f8c50, emissiveIntensity: 2.3, roughness: 0.5 }));
  halo.rotation.x = Math.PI / 2;
  halo.position.y = 0.48;
  g.add(halo);
  g.position.set(x, y, z);
  scene.add(markMeshes(g));
  objects.push(g);
  const light = new THREE.PointLight(0x73e6a0, 1.6, 9, 2);
  light.position.set(x, y + 1.2, z);
  scene.add(light);
}

function addNornShrine(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number) {
  const g = new THREE.Group();
  g.userData = { label: "Прядильня норн", id: "norns" };
  const y = midHeight(x, z);
  const colors = [0xb9d9c0, 0xc9a6e8, 0xd6b66d];
  for (let i = 0; i < 3; i++) {
    const stone = new THREE.Mesh(new THREE.CapsuleGeometry(0.55, 2.0, 4, 8), midMat(0x555d59, 0.98));
    stone.position.set((i - 1) * 1.7, 1.15, 0);
    stone.rotation.z = (i - 1) * 0.06;
    g.add(stone);
    const rune = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.045, 6, 18), new THREE.MeshStandardMaterial({ color: colors[i], emissive: colors[i], emissiveIntensity: 1.7, roughness: 0.55 }));
    rune.rotation.x = Math.PI / 2;
    rune.position.set((i - 1) * 1.7, 1.35, -0.5);
    g.add(rune);
  }
  const lineMat = new THREE.LineBasicMaterial({ color: 0xc9b6dc, transparent: true, opacity: 0.62 });
  for (let i = 0; i < 2; i++) {
    const pts = [
      new THREE.Vector3((i - 1) * 1.7, 1.8, 0.2),
      new THREE.Vector3((i - 0.5) * 1.0, 2.8, -0.3),
      new THREE.Vector3((i) * 1.7, 1.8, 0.2),
    ];
    g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat));
  }
  const ring = new THREE.Mesh(new THREE.TorusGeometry(3.5, 0.055, 8, 48), new THREE.MeshStandardMaterial({ color: 0xc9b6dc, emissive: 0x62477a, emissiveIntensity: 1.2, roughness: 0.7 }));
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.04;
  g.add(ring);
  g.position.set(x, y, z);
  scene.add(markMeshes(g));
  objects.push(g);
}

function addDock(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number) {
  const g = new THREE.Group();
  g.userData = { label: "Речной причал", id: "port" };
  const y = midHeight(x, z);
  for (let i = 0; i < 7; i++) {
    const plank = midBox(2.8, 0.22, 0.72, 0x68472e, 0.98);
    plank.position.set(0, 0.3, i * 0.82);
    g.add(plank);
  }
  for (const px of [-1.2, 1.2]) {
    for (let i = 0; i < 3; i++) {
      const post = midBox(0.22, 1.4, 0.22, 0x3f2a1d, 0.98);
      post.position.set(px, -0.25, i * 2.45);
      g.add(post);
    }
  }
  const boat = new THREE.Group();
  const hull = midBox(2.2, 0.55, 5.0, 0x4b2c1d, 0.98);
  hull.scale.x = 0.72;
  hull.position.y = -0.15;
  boat.add(hull);
  const mast = midBox(0.12, 3.8, 0.12, 0x4a3020, 0.98);
  mast.position.y = 1.8;
  boat.add(mast);
  const sail = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 2.5), midMat(0xb8b09c, 0.98));
  sail.position.set(0.85, 1.8, 0);
  sail.rotation.y = Math.PI / 2;
  boat.add(sail);
  boat.position.set(4.2, -0.15, 2.2);
  g.add(boat);
  g.position.set(x, y, z);
  scene.add(markMeshes(g));
  objects.push(g);
}

function addNPC(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number, id: string, label: string, color: number, phase: number) {
  const g = new THREE.Group();
  g.userData = { label, id };
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.72, 4, 8), midMat(color, 0.92));
  body.position.y = 0.85;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 8), midMat(0xc89570, 0.9));
  head.position.y = 1.55;
  g.add(head);
  const cloak = midBox(0.65, 0.72, 0.14, 0x29251f, 0.98);
  cloak.position.set(0, 0.8, -0.26);
  g.add(cloak);
  g.position.set(x, midHeight(x, z), z);
  g.userData.phase = phase;
  scene.add(markMeshes(g));
  objects.push(g);
  return g;
}

function midHero3d(h: HeroDef) {
  // Human-scale hero built from articulated parts.  The silhouette is intentionally
  // closer to a real person than the old capsule figure, while staying lightweight
  // enough for mobile Three.js rendering.
  const g = new THREE.Group();
  const male = h.gender === "m";
  const skinColor = male ? 0xc9936f : 0xd9ad8a;
  const hairColor = h.id === "elf" ? 0xb8c8d1 : (h.id === "dwarf" ? 0x6f4a32 : 0x2a211d);
  const clothColor = h.id === "berserk" ? 0x5a2020 : h.id === "dwarf" ? 0x71482f : h.id === "viking" ? 0x5b4b2b : 0x263b4d;
  const leatherColor = h.id === "dwarf" ? 0x4b2d1c : 0x3a281c;
  const metalColor = h.id === "berserk" ? 0x9b9fa3 : 0x737a7e;

  const matSkin = midMat(skinColor, 0.92);
  const matCloth = midMat(clothColor, 0.9);
  const matLeather = midMat(leatherColor, 0.96);
  const matHair = midMat(hairColor, 0.95);
  const matMetal = midMat(metalColor, 0.78);
  const matDark = midMat(0x202326, 0.98);

  // Pelvis and torso: separate forms give the body a waist and shoulders.
  const pelvis = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.24, 5, 8), matLeather);
  pelvis.position.y = 0.72;
  g.add(pelvis);

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(male ? 0.37 : 0.32, 0.56, 6, 10), matCloth);
  torso.position.y = 1.15;
  g.add(torso);

  const chest = new THREE.Mesh(new THREE.CapsuleGeometry(male ? 0.40 : 0.34, 0.34, 5, 8), matCloth);
  chest.scale.z = 0.82;
  chest.position.y = 1.28;
  g.add(chest);

  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.38, 0.09, 12), matLeather);
  belt.position.y = 0.93;
  g.add(belt);
  const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.055), matMetal);
  buckle.position.set(0, 0.93, 0.38);
  g.add(buckle);

  // Neck and head.
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.18, 10), matSkin);
  neck.position.y = 1.63;
  g.add(neck);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.31, 16, 12), matSkin);
  head.scale.set(0.92, 1.06, 0.92);
  head.position.y = 1.91;
  g.add(head);

  // Hair cap + back hair.  The elf keeps a lighter tone; the others are dark-haired.
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.325, 14, 10), matHair);
  hair.scale.set(0.98, 0.72, 0.98);
  hair.position.set(0, 2.08, -0.025);
  g.add(hair);
  const hairBack = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.30, 5, 8), matHair);
  hairBack.position.set(0, 1.93, -0.25);
  hairBack.rotation.x = 0.15;
  g.add(hairBack);

  // Face details are tiny, but make the head read as a human rather than a sphere.
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.13, 5), matSkin);
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, 1.92, 0.30);
  g.add(nose);
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x17191a, roughness: 0.55 });
  for (const sx of [-0.105, 0.105]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.025, 7, 5), eyeMat);
    eye.position.set(sx, 1.98, 0.285);
    g.add(eye);
  }

  if (male) {
    const beard = new THREE.Mesh(new THREE.SphereGeometry(0.19, 10, 7), matHair);
    beard.scale.set(0.82, 1.0, 0.72);
    beard.position.set(0, 1.80, 0.24);
    g.add(beard);
  } else {
    const braid = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.42, 4, 7), matHair);
    braid.position.set(-0.27, 1.78, -0.08);
    braid.rotation.z = -0.22;
    g.add(braid);
  }

  // Articulated arms.
  const makeArm = (side:number) => {
    const upper = new THREE.Group();
    upper.position.set(side * (male ? 0.43 : 0.39), 1.43, 0);
    upper.rotation.z = side * 0.07;
    const upperArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.105, 0.42, 5, 7), matCloth);
    upperArm.position.y = -0.23;
    upper.add(upperArm);
    const elbow = new THREE.Group();
    elbow.position.y = -0.46;
    upper.add(elbow);
    const forearm = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.34, 5, 7), matLeather);
    forearm.position.y = -0.20;
    elbow.add(forearm);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.105, 9, 7), matSkin);
    hand.position.y = -0.43;
    elbow.add(hand);
    g.add(upper);
    return { upper, elbow };
  };
  const armL = makeArm(-1), armR = makeArm(1);

  // Legs are also articulated so the walking cycle can be seen clearly.
  const makeLeg = (side:number) => {
    const thigh = new THREE.Group();
    thigh.position.set(side * 0.15, 0.68, 0);
    const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.42, 5, 7), matDark);
    upper.position.y = -0.23;
    thigh.add(upper);
    const knee = new THREE.Group();
    knee.position.y = -0.48;
    thigh.add(knee);
    const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.095, 0.40, 5, 7), matDark);
    shin.position.y = -0.22;
    knee.add(shin);
    const boot = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.24, 5, 7), matLeather);
    boot.scale.z = 1.25;
    boot.position.set(0, -0.47, 0.075);
    knee.add(boot);
    g.add(thigh);
    return {upper:thigh,knee};
  };
  const legL = makeLeg(-1), legR = makeLeg(1);

  // Shoulder mantle and simple weatherproof cloak.
  const mantle = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 0.10, 5, 8), matLeather);
  mantle.scale.z = 0.72;
  mantle.position.y = 1.48;
  g.add(mantle);
  const cape = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.92, 0.075), midMat(h.id === "berserk" ? 0x2b0c0c : 0x18272e, 0.98));
  cape.position.set(0, 1.05, -0.28);
  cape.rotation.x = -0.035;
  g.add(cape);

  // Weapon silhouette depends on the chosen hero, but remains attached to the body.
  const weapon = new THREE.Group();
  if (h.id === "berserk" || h.id === "dwarf") {
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.72, 7), matLeather);
    handle.position.y = 0.36;
    weapon.add(handle);
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.34, 0.055), matMetal);
    blade.position.set(0, 0.88, 0);
    blade.rotation.z = h.id === "dwarf" ? -0.22 : 0.22;
    weapon.add(blade);
  } else {
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.04, 1.10, 7), matLeather);
    shaft.position.y = 0.52;
    weapon.add(shaft);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.25, 6), matMetal);
    tip.position.y = 1.18;
    weapon.add(tip);
  }
  weapon.position.set(0.43, 0.32, 0.03);
  weapon.rotation.z = -0.12;
  g.add(weapon);

  // A small shield on the back gives the silhouette depth without becoming oversized.
  if (h.id === "viking" || h.id === "berserk") {
    const shield = new THREE.Mesh(new THREE.CylinderGeometry(0.30, 0.30, 0.10, 16), matLeather);
    shield.rotation.x = Math.PI / 2;
    shield.position.set(0, 1.12, -0.37);
    g.add(shield);
    const boss = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 6), matMetal);
    boss.position.set(0, 1.12, -0.43);
    g.add(boss);
  }

  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.62, 24), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32 }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  g.add(shadow);

  g.userData.anim = { mode:"rigged", armL, armR, legL, legR, eyes:new THREE.Object3D(), weapon, phase: h.id === "elf" ? 1.2 : h.id === "dwarf" ? 2.4 : 0 };
  return markMeshes(g);
}


type GuardianLoot={weapons?:HeroWeapon[];shields?:string[];runes?:string[];potions?:string[]};
const MIDGARD_GUARDIAN_LOOT:Record<string,{correct:GuardianLoot;battle:GuardianLoot}>={
  rune:{correct:{runes:['fehuWealth']},battle:{weapons:['knife'],runes:['fehuWealth'],potions:['northernMoss']}},
  ashgrove:{correct:{runes:['berkanoHeal']},battle:{weapons:['axeSmall'],runes:['berkanoHeal'],potions:['northernMoss']}},
  norns:{correct:{runes:['perthroFate']},battle:{weapons:['sword2'],runes:['perthroFate'],potions:['lifeElixir']}},
  threeThreads:{correct:{runes:['algizGuard']},battle:{weapons:['dagger2'],shields:['Shield_Heater.glb'],runes:['algizGuard'],potions:['frostDraught']}},
  whisperStone:{correct:{runes:['ansuzWisdom']},battle:{weapons:['mace'],runes:['kenazShard'],potions:['northernMoss']}},
  runefield:{correct:{runes:['raidoPath']},battle:{weapons:['spear'],shields:['Shield_Heater_2.glb'],runes:['raidoPath','hagalazBreak'],potions:['frostDraught']}},
  mimir:{correct:{runes:['ansuzWisdom']},battle:{weapons:['swordBig'],runes:['ansuzWisdom','mannazMind'],potions:['hoddmimirElixir']}},
  powerCircle:{correct:{runes:['tiwazValor']},battle:{weapons:['axeDouble'],shields:['Shield_Celtic_Golden.glb'],runes:['tiwazValor','uruzStrength'],potions:['lifeElixir']}},
  hoddmimir:{correct:{runes:['othalaLegacy']},battle:{weapons:['claymore'],shields:['Shield_Round_2.glb'],runes:['sowiloLight','othalaLegacy'],potions:['hoddmimirElixir','lifeElixir']}}
};
const lootCountAdd=(counts:Record<string,number>,ids:string[])=>{
  const next={...counts};for(const id of ids)next[id]=(next[id]||0)+1;return next;
};
const guardianLootText=(id:string,battle:boolean)=>{
  const loot=MIDGARD_GUARDIAN_LOOT[id]?.[battle?'battle':'correct'];if(!loot)return '';
  const names:string[]=[];
  for(const w of loot.weapons||[])names.push(({knife:'Боевой кинжал',dagger2:'Кинжал II',axe:'Северный топор',axeSmall:'Малый топор',axeDouble:'Двойной топор',mace:'Малый молот',hammerDouble:'Двойной молот',spear:'Копьё',sword2:'Меч II',swordBig:'Большой меч',swordGolden:'Золотой меч',claymore:'Клеймор',scythe:'Боевая коса',default:'Оружие'} as Record<string,string>)[w]||w);
  for(const s of loot.shields||[])names.push(({ 'Shield_Round.glb':'Круглый щит','Shield_Round_2.glb':'Серебряный щит','Shield_Heater.glb':'Щит','Shield_Heater_2.glb':'Щит II','Shield_Celtic_Golden.glb':'Золотой щит'} as Record<string,string>)[s]||s);
  for(const r of loot.runes||[])names.push('руна '+(RUNE_CATALOG.find(x=>x.id===r)?.name||r));
  for(const p of loot.potions||[])names.push(POTION_CATALOG.find(x=>x.id===p)?.name||p);
  return names.join(', ');
};
type WhisperCombatStats={maxHp:number;attack:number;runeAttack:number;defense:number;power:number};
const POTION_CATALOG=[
  {id:'lifeElixir',name:'Эликсир жизни',effect:'Полностью восстанавливает здоровье Вики',symbol:'❤️'},
  {id:'northernMoss',name:'Эликсир северного мха',effect:'Восстанавливает 30 здоровья',symbol:'🌿'},
  {id:'frostDraught',name:'Морозный настой',effect:'Два следующих удара без щита слабее вдвое',symbol:'❄️'},
  {id:'hoddmimirElixir',name:'Эликсир Ходдмимира',effect:'Полностью восстанавливает здоровье и даёт защиту от двух следующих ударов',symbol:'✨'}
] as const;
type RuneDef={id:string;name:string;effect:string;symbol:string;attack?:number;rune?:number;defense?:number;power?:number};
const RUNE_CATALOG:RuneDef[]=[
  {id:'fehuWealth',name:'Феху',effect:'Укрепляет общую силу и будущие награды',symbol:'ᚠ',power:1},
  {id:'uruzStrength',name:'Уруз',effect:'Усиленный удар оружием',symbol:'ᚢ',attack:2,power:1},
  {id:'thurisazStrike',name:'Турисаз',effect:'Тяжёлый пробивной удар',symbol:'ᚦ',attack:2},
  {id:'ansuzWisdom',name:'Ансуз',effect:'Усиливает рунический урон',symbol:'ᚨ',rune:2,power:1},
  {id:'raidoPath',name:'Райдо',effect:'Ускоряет передвижение на 10%',symbol:'ᚱ',power:1},
  {id:'kenazShard',name:'Кеназ',effect:'Усиливает руническую атаку',symbol:'ᚲ',rune:2},
  {id:'geboGift',name:'Гебо',effect:'Руна дара; повышает ценность трофея',symbol:'ᚷ',power:1},
  {id:'wunjoLuck',name:'Вуньо',effect:'Укрепляет удачу и боевой дух',symbol:'ᚹ',power:1},
  {id:'hagalazBreak',name:'Хагалаз',effect:'Добавляет разрушительную силу',symbol:'ᚺ',attack:1,rune:1},
  {id:'nauthizEndurance',name:'Наутиз',effect:'Даёт стойкость под давлением',symbol:'ᚾ',defense:1},
  {id:'isaGuard',name:'Иса',effect:'Холодная защита снижает урон',symbol:'ᛁ',defense:2},
  {id:'jeraHarvest',name:'Йера',effect:'Усиливает результат долгого пути',symbol:'ᛃ',power:1},
  {id:'eihwazResilience',name:'Эйваз',effect:'Укрепляет выносливость и защиту',symbol:'ᛇ',defense:1,power:1},
  {id:'perthroFate',name:'Перт',effect:'Руна судьбы усиливает магию',symbol:'ᛈ',rune:1,power:1},
  {id:'algizGuard',name:'Альгиз',effect:'Снижает входящий урон',symbol:'ᛉ',defense:2},
  {id:'sowiloLight',name:'Соулу',effect:'Солнечная сила усиливает оружие и руны',symbol:'ᛋ',attack:2,rune:2,power:1},
  {id:'tiwazValor',name:'Тейваз',effect:'Воинская руна усиливает удар',symbol:'ᛏ',attack:2,power:1},
  {id:'berkanoHeal',name:'Беркана',effect:'Сила роста укрепляет жизненную стойкость',symbol:'ᛒ',defense:1},
  {id:'ehwazMotion',name:'Эваз',effect:'Движение и согласованность повышают силу',symbol:'ᛖ',power:1},
  {id:'mannazMind',name:'Манназ',effect:'Ясность разума усиливает руническую атаку',symbol:'ᛗ',rune:2},
  {id:'laguzFlow',name:'Лагуз',effect:'Поток усиливает руническую энергию',symbol:'ᛚ',rune:2},
  {id:'ingwazReserve',name:'Ингваз',effect:'Запас внутренней силы повышает стойкость',symbol:'ᛜ',defense:1,power:1},
  {id:'dagazDawn',name:'Дагаз',effect:'Прорыв усиливает оба вида атаки',symbol:'ᛞ',attack:1,rune:1,power:1},
  {id:'othalaLegacy',name:'Отала',effect:'Наследие укрепляет защиту и общую силу',symbol:'ᛟ',defense:1,power:1}
]
const lootDisplayName=(id:string)=>{
  const weaponNames:Record<string,string>={default:'Основное оружие',sword2:'Меч II',swordBig:'Большой меч',swordGolden:'Золотой меч',knife:'Боевой кинжал',dagger2:'Кинжал II',axe:'Северный топор',axeSmall:'Малый топор',axeDouble:'Двойной топор',mace:'Малый молот',hammerDouble:'Двойной молот',spear:'Копьё',claymore:'Клеймор',scythe:'Боевая коса'};
  const shieldNames:Record<string,string>={'Shield_Round.glb':'Круглый щит','Shield_Round_2.glb':'Серебряный щит','Shield_Heater.glb':'Щит','Shield_Heater_2.glb':'Щит II','Shield_Celtic_Golden.glb':'Золотой щит'};
  return weaponNames[id]||shieldNames[id]||RUNE_CATALOG.find(r=>r.id===id)?.name||POTION_CATALOG.find(p=>p.id===id)?.name||id;
};
const weaponDisplayIcon=(id:string)=>id==='axe'||id==='axeSmall'||id==='axeDouble'?'🪓':id==='mace'||id==='hammerDouble'?'🔨':id==='spear'?'🔱':id==='knife'||id==='dagger2'?'🗡️':'⚔️';
type BanditSpec={id:string;name:string;x:number;z:number;hp:number;damage:number;sparks:number;reward:string;item?:string;kind?:'weapon'|'potion'|'rune';quantity?:number};
const BANDIT_SPECS:BanditSpec[]=[
  {id:'forest',name:'Разбойник у моста',x:-46,z:49,hp:3,damage:9,sparks:12,reward:'Разбойничий кинжал',kind:'weapon',item:'knife'},
  {id:'grove',name:'Разбойник глубокой рощи',x:-41,z:70,hp:4,damage:10,sparks:13,reward:'Эликсир северного мха',kind:'potion',item:'northernMoss'},
  {id:'ash',name:'Разбойник у ясеня',x:-29,z:29,hp:4,damage:11,sparks:14,reward:'Осколок руны Кеназ',kind:'rune',item:'kenazShard'},
  {id:'norns',name:'Разбойник у старой дороги',x:-46,z:-24,hp:5,damage:12,sparks:15,reward:'Морозный настой',kind:'potion',item:'frostDraught'},
  {id:'runefield',name:'Разбойник рунного поля',x:34,z:64,hp:5,damage:13,sparks:16,reward:'Руна Райдо',kind:'rune',item:'raidoPath'},
  {id:'deer',name:'Разбойник оленьей поляны',x:66,z:44,hp:6,damage:14,sparks:17,reward:'Руна Альгиз',kind:'rune',item:'algizGuard'},
  {id:'camp',name:'Разбойник лесной стоянки',x:69,z:-7,hp:6,damage:15,sparks:18,reward:'Руна Уруз',kind:'rune',item:'uruzStrength'},
  {id:'south',name:'Разбойник южного тракта',x:34,z:-49,hp:7,damage:16,sparks:19,reward:'Эликсир жизни',kind:'potion',item:'lifeElixir'},
  {id:'west',name:'Разбойник западного берега',x:-70,z:-16,hp:8,damage:17,sparks:21,reward:'Два эликсира северного мха',kind:'potion',item:'northernMoss',quantity:2}
];
type WhisperPhase="closed"|"question"|"fight"|"reward"|"defeat";

function Midgard3D({ h, skin, weapon, gear, gearLevels, shieldAsset, on, eventDone, start, rememberPosition, northBridgeRepaired, northBridgeReady, goldChestOpened, whisperResolved, guardianResolved, whisperStats, onWhisperCorrect, onWhisperWin, banditRespawnAt, onBanditDefeated, onBanditReward, onBanditKnockout, potions, runes, equippedRune, fieldHp, frostGuard, onUsePotion, onEquipRune, onFieldHpChange, onFrostGuardHit, gathered, stock, onGather }: { h: HeroDef; skin: HeroSkin; weapon: HeroWeapon; gear:GearId[]; gearLevels:Record<string,number>; shieldAsset:string; on: (id: string, position?:{x:number;z:number}) => void; eventDone: boolean; start:{x:number;z:number}; rememberPosition:(position:{x:number;z:number})=>void; northBridgeRepaired:boolean; northBridgeReady:boolean; goldChestOpened:boolean; whisperResolved:boolean; guardianResolved:string[]; whisperStats:WhisperCombatStats; onWhisperCorrect:()=>void; onWhisperWin:()=>string; banditRespawnAt:Record<string,number>; onBanditDefeated:(id:string)=>void; onBanditReward:(id:string)=>void; onBanditKnockout:()=>void; potions:string[]; runes:string[]; equippedRune:string; fieldHp:number|null; frostGuard:number; onUsePotion:(id:string,currentHp?:number)=>boolean; onEquipRune:(id:string)=>void; onFieldHpChange:(hp:number)=>void; onFrostGuardHit:()=>void; gathered:string[]; stock:GatherStock; onGather:(id:string,kind:GatherKind)=>void }) {
  const mount = useRef<HTMLDivElement>(null);
  const joy = useRef<HTMLDivElement>(null);
  const knob = useRef<HTMLDivElement>(null);
  const state = useRef({ x: start.x, z: start.z, dx: 0, dz: 0 });
  const [near, setNear] = useState("");
  const [doorNotice,setDoorNotice]=useState("");
  const [outsideHouse,setOutsideHouse]=useState("");
  const [moving, setMoving] = useState(false);
  const [ritualOpen, setRitualOpen] = useState(false);
  const [forestEventOpen, setForestEventOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [mapHero, setMapHero] = useState({x:0,z:28});
  const [heroReady, setHeroReady] = useState(false);
  const [heroLoadFailed, setHeroLoadFailed] = useState(false);
  const [banditHeroHp,setBanditHeroHp]=useState(fieldHp===null?whisperStats.maxHp:Math.min(whisperStats.maxHp,fieldHp));
  const [inventoryOpen,setInventoryOpen]=useState(false);
  const [battlePotionOpen,setBattlePotionOpen]=useState(false);
  const inventoryPauseRef=useRef(false);
  const [banditOpponent,setBanditOpponent]=useState<{id:string;name:string;hp:number;maxHp:number}|null>(null);
  const [banditVictory,setBanditVictory]=useState<BanditSpec|null>(null);
  const banditVictoryRef=useRef<string|null>(null);
  const [banditHit,setBanditHit]=useState(0);
  const banditHpRef=useRef(fieldHp===null?whisperStats.maxHp:Math.min(whisperStats.maxHp,fieldHp));
  const frostGuardRef=useRef(frostGuard);
  const equippedRuneRef=useRef(equippedRune);
  const banditDefenseRef=useRef(whisperStats.defense);
  const banditRespawnAtRef=useRef(banditRespawnAt);
  const banditDamageRef=useRef<(amount:number,guarding:boolean)=>void>(()=>{});
  const [insideHome, setInsideHome] = useState(false);
  const [whisperPhase,setWhisperPhase]=useState<WhisperPhase>("closed");
  const whisperPhaseRef=useRef<WhisperPhase>("closed");
  const [activeGuardianId,setActiveGuardianId]=useState("whisperStone");
  const activeGuardianIdRef=useRef("whisperStone");
  const activeGuardian=MIDGARD_GUARDIANS[activeGuardianId]||MIDGARD_GUARDIANS.whisperStone;
  const [whisperAnswer,setWhisperAnswer]=useState<number|null>(null);
  const [whisperHeroHp,setWhisperHeroHp]=useState(whisperStats.maxHp);
  const [whisperGuardHp,setWhisperGuardHp]=useState(WHISPER_GUARD.hp);
  const [whisperHeroEnergy,setWhisperHeroEnergy]=useState(whisperStats.power);
  const [whisperGuardEnergy,setWhisperGuardEnergy]=useState(3);
  const [whisperShield,setWhisperShield]=useState(false);
  const [whisperBusy,setWhisperBusy]=useState(false);
  const [whisperLog,setWhisperLog]=useState(WHISPER_GUARD.greet);
  const [whisperReward,setWhisperReward]=useState("");
  const [whisperReplay,setWhisperReplay]=useState(false);
  const whisperReplayRef=useRef(false);
  const [whisperFx,setWhisperFx]=useState<{kind:"hit"|"rune"|"guard";key:number}|null>(null);
  const whisperTimers=useRef<number[]>([]);
  const guardVisualRef=useRef<THREE.Group|null>(null);
  const guardAttackAtRef=useRef(-10000);
  const guardHitAtRef=useRef(-10000);
  const guardAttackActionRef=useRef<(()=>void)|null>(null);
  const guardHitActionRef=useRef<(()=>void)|null>(null);
  const guardDeathActionRef=useRef<(()=>void)|null>(null);
  const guardIdleActionRef=useRef<(()=>void)|null>(null);
  const guardDefeatedRef=useRef(false);
  const whisperBattleStartedRef=useRef(false);
  const cameraDir = useRef({ x: 0, z: 1 });
  const insideHomeRef = useRef(false);
  const homeActionRef = useRef<((inside:boolean)=>void)|null>(null);
  const attackActionRef = useRef<(()=>void)|null>(null);
  const onRef=useRef(on);
  onRef.current=on;
  const onGatherRef=useRef(onGather);
  onGatherRef.current=onGather;
  frostGuardRef.current=frostGuard;
  equippedRuneRef.current=equippedRune;
  banditDefenseRef.current=whisperStats.defense;
  banditRespawnAtRef.current=banditRespawnAt;
  banditDamageRef.current=(amount:number,guarding:boolean)=>{
    if(!guarding&&frostGuardRef.current>0){amount=Math.max(1,Math.ceil(amount*.5));frostGuardRef.current--;onFrostGuardHit();}
    const next=banditHpRef.current-amount;
    setBanditHit(Date.now());
    if(next<=0){banditHpRef.current=whisperStats.maxHp;setBanditHeroHp(whisperStats.maxHp);state.current.x=0;state.current.z=28;onBanditKnockout();return;}
    banditHpRef.current=next;setBanditHeroHp(next);onFieldHpChange(next);
  };
  const useMidgardPotion=(id:string)=>{
    if(!onUsePotion(id,banditHpRef.current))return;
    if(id==='lifeElixir'||id==='northernMoss'||id==='hoddmimirElixir'){
      const next=id==='northernMoss'
        ? Math.min(whisperStats.maxHp,banditHpRef.current+30)
        : whisperStats.maxHp;
      banditHpRef.current=next;setBanditHeroHp(next);
    }
    if(id==='frostDraught'||id==='hoddmimirElixir')frostGuardRef.current=2;
  };
  const shieldActionRef = useRef<(()=>void)|null>(null);
  const shieldRaiseUntilRef=useRef(0);
  const bendActionRef=useRef<(()=>void)|null>(null);
  const gatherActionRef=useRef<((id:string)=>void)|null>(null);
  const [villageGateOpen, setVillageGateOpen] = useState(false);
  const [creditsOpen,setCreditsOpen]=useState(false);
  inventoryPauseRef.current=inventoryOpen||mapOpen||creditsOpen;
  const villageGateOpenRef = useRef(false);
  const [rearGateOpen,setRearGateOpen]=useState(false);
  const rearGateOpenRef=useRef(false);
  const gateActionRef = useRef<((id?:string)=>void)|null>(null);
  const forgeActionRef = useRef<(()=>void)|null>(null);
  const villageDoorActionRef = useRef<((id:string)=>void)|null>(null);

  const setWhisperPhaseSafe=(phase:WhisperPhase)=>{whisperPhaseRef.current=phase;setWhisperPhase(phase);};
  const clearWhisperTimers=()=>{whisperTimers.current.forEach(id=>window.clearTimeout(id));whisperTimers.current=[];};
  useEffect(()=>()=>clearWhisperTimers(),[]);

  const currentGuardian=()=>MIDGARD_GUARDIANS[activeGuardianIdRef.current]||MIDGARD_GUARDIANS.whisperStone;
  const guardianPrerequisitesDone=(id:string)=>{
    const idx=MIDGARD_GUARDIAN_ORDER.indexOf(id as any);
    return idx<=0||MIDGARD_GUARDIAN_ORDER.slice(0,idx).every(prev=>guardianResolved.includes(prev));
  };
  const beginLocationEncounter=(id:string)=>{
    if(!guardianPrerequisitesDone(id)){
      const idx=MIDGARD_GUARDIAN_ORDER.indexOf(id as any);
      const missing=MIDGARD_GUARDIAN_ORDER.slice(0,Math.max(0,idx)).find(prev=>!guardianResolved.includes(prev));
      const prev=missing?MIDGARD_GUARDIANS[missing]:null;
      setDoorNotice(prev?`Сначала пройди испытание: ${prev.location}.`:"Сначала заверши предыдущие испытания.");
      return;
    }
    const spec=MIDGARD_GUARDIANS[id]||MIDGARD_GUARDIANS.whisperStone;
    activeGuardianIdRef.current=spec.id;setActiveGuardianId(spec.id);
    clearWhisperTimers();
    state.current.dx=0;state.current.dz=0;
    setWhisperAnswer(null);setWhisperReward("");setWhisperFx(null);
    setWhisperHeroHp(whisperStats.maxHp);setWhisperGuardHp(spec.hp);
    setWhisperHeroEnergy(whisperStats.power);setWhisperGuardEnergy(spec.power);
    setWhisperShield(false);setWhisperBusy(false);setBattlePotionOpen(false);setWhisperLog(spec.intro);
    guardDefeatedRef.current=false;whisperBattleStartedRef.current=false;whisperReplayRef.current=false;setWhisperReplay(false);
    setWhisperPhaseSafe("question");
  };
  const beginWhisperEncounter=()=>beginLocationEncounter("whisperStone");
  const beginGuardianRematch=(id:string)=>{
    const spec=MIDGARD_GUARDIANS[id]||MIDGARD_GUARDIANS.whisperStone;
    activeGuardianIdRef.current=spec.id;setActiveGuardianId(spec.id);
    clearWhisperTimers();
    state.current.dx=0;state.current.dz=0;
    setWhisperAnswer(null);setWhisperReward("");setWhisperFx(null);
    setWhisperHeroHp(whisperStats.maxHp);setWhisperGuardHp(spec.hp);
    setWhisperHeroEnergy(whisperStats.power);setWhisperGuardEnergy(spec.power);
    setWhisperShield(false);setWhisperBusy(false);setBattlePotionOpen(false);
    setWhisperLog(spec.name+" снова принимает вызов. Редкий трофей повторно не выпадает, но победа снова приносит Капли силы.");
    guardDefeatedRef.current=false;whisperBattleStartedRef.current=true;whisperReplayRef.current=true;setWhisperReplay(true);
    guardIdleActionRef.current?.();
    setWhisperPhaseSafe("fight");
  };
  const closeWhisperEncounter=()=>{
    clearWhisperTimers();state.current.dx=0;state.current.dz=0;setWhisperBusy(false);setWhisperPhaseSafe("closed");
  };
  const answerWhisperInWorld=(answer:number)=>{
    if(whisperAnswer!==null)return;
    const spec=currentGuardian();
    setWhisperAnswer(answer);
    if(answer===spec.question.c){
      if(spec.id==="whisperStone"){
        onWhisperCorrect();
        setWhisperReward("8 Капель силы и малый молот");
      }else{
        onRef.current("guardian:correct:"+spec.id);
        setWhisperReward(spec.correctReward+" Капель силы"+(guardianLootText(spec.id,false)?" + "+guardianLootText(spec.id,false):""));
      }
      setWhisperLog(spec.location+" признала верный ответ. Сталь остаётся в ножнах.");
      setWhisperPhaseSafe("reward");
    }else{
      whisperBattleStartedRef.current=true;
      const gate=spec.requiredPower&&whisperStats.power<spec.requiredPower
        ?" Сила героя "+whisperStats.power+"/5. Для победы над этим стражем нужна сила "+spec.requiredPower+"/5 — сначала усили оружие и экипировку."
        :"";
      const goldenGate=spec.id==="hoddmimir"&&weapon!=="swordGolden"
        ?" Последнего стража после неверного ответа может победить только Золотой меч Вёлунда. Вернись в кузницу."
        :"";
      setWhisperLog(spec.name+" выходит навстречу. Неверный ответ теперь придётся защищать оружием."+gate+goldenGate);
      whisperTimers.current.push(window.setTimeout(()=>{guardIdleActionRef.current?.();setWhisperPhaseSafe("fight");},520));
    }
  };
  const whisperGuardTurn=(shielded:boolean)=>{
    const spec=currentGuardian();
    whisperTimers.current.push(window.setTimeout(()=>{
      guardAttackAtRef.current=performance.now();guardAttackActionRef.current?.();setWhisperFx({kind:"guard",key:Date.now()});
      whisperTimers.current.push(window.setTimeout(()=>{
        const raw=spec.atk+Math.floor(Math.random()*3);
        let damage=Math.max(1,Math.ceil((raw-whisperStats.defense)*(shielded?(gear.includes('shield')?.3:.6):1)));
        if(!shielded&&frostGuardRef.current>0){damage=Math.max(1,Math.ceil(damage*.5));frostGuardRef.current--;onFrostGuardHit();}
        const next=Math.max(0,whisperHeroHp-damage);
        setWhisperHeroHp(next);setWhisperShield(false);setWhisperBusy(false);
        if(next<=0){setWhisperLog(spec.name+" оказался сильнее. Испытание можно повторить.");setWhisperPhaseSafe("defeat");}
        else setWhisperLog(shielded?"Щит принял удар. Получено урона: "+damage+".":spec.name+" отвечает ударом: −"+damage+" здоровья.");
      },390));
    },spec.tempo));
  };
  const useWhisperBattlePotion=(id:string)=>{
    if(whisperBusy||whisperPhaseRef.current!=="fight")return;
    if(!onUsePotion(id,whisperHeroHp))return;
    let nextHp=whisperHeroHp;
    if(id==='lifeElixir'||id==='hoddmimirElixir')nextHp=whisperStats.maxHp;
    else if(id==='northernMoss')nextHp=Math.min(whisperStats.maxHp,whisperHeroHp+30);
    if(nextHp!==whisperHeroHp)setWhisperHeroHp(nextHp);
    if(id==='frostDraught'||id==='hoddmimirElixir')frostGuardRef.current=2;
    const item=POTION_CATALOG.find(p=>p.id===id);
    setBattlePotionOpen(false);
    setWhisperBusy(true);
    setWhisperLog((item?.name||"Эликсир")+" использован. Это действие занимает ход — страж отвечает.");
    whisperGuardTurn(false);
  };
  const whisperFightAction=(kind:"hit"|"rune"|"shield"|"restore")=>{
    const spec=currentGuardian();
    if(whisperBusy||whisperPhaseRef.current!=="fight")return;
    setWhisperBusy(true);
    let damage=0;
    if(kind==="hit"){
      attackActionRef.current?.();setWhisperFx({kind:"hit",key:Date.now()});
      damage=whisperStats.attack+Math.floor(Math.random()*4);
      setWhisperLog("Герой замахивается и наносит удар сверху.");
    }else if(kind==="rune"){
      attackActionRef.current?.();setWhisperFx({kind:"rune",key:Date.now()});
      damage=whisperStats.runeAttack+Math.floor(Math.random()*5);setWhisperLog("Руна вспыхивает между героем и стражем.");
    }else if(kind==="shield"){
      shieldActionRef.current?.();
      setWhisperShield(true);setWhisperLog("Герой поднимает щит и готовится принять удар.");
      whisperGuardTurn(true);return;
    }else{
      const healed=Math.min(whisperStats.maxHp,whisperHeroHp+14);
      setWhisperHeroHp(healed);setWhisperLog("Герой переводит дыхание и восстанавливает "+(healed-whisperHeroHp)+" здоровья.");
      whisperGuardTurn(false);return;
    }
    whisperTimers.current.push(window.setTimeout(()=>{
      if(spec.id==="hoddmimir"&&weapon!=="swordGolden"){
        damage=0;
        setWhisperLog("Защита "+spec.name+" не поддаётся. После неверного ответа победить последнего стража можно только Золотым мечом Вёлунда. Вернись в кузницу.");
      }else if(spec.requiredPower&&whisperStats.power<spec.requiredPower){
        damage=0;
        setWhisperLog("Удар не пробивает защиту "+spec.name+". Сила героя "+whisperStats.power+"/5, требуется "+spec.requiredPower+"/5. Нужна закалка оружия и экипировки.");
      }
      const next=Math.max(0,whisperGuardHp-damage);
      setWhisperGuardHp(next);guardHitAtRef.current=performance.now();
      if(next<=0){
        guardDefeatedRef.current=true;guardDeathActionRef.current?.();
        if(whisperReplayRef.current){
          const repeatDrops=2+spec.power;
          onRef.current("guardian:repeat:"+spec.id);
          setWhisperReward(repeatDrops+" Капель силы");
          setWhisperLog(spec.name+" снова повержен. Редкий трофей выдаётся один раз, но за тренировочную победу получено "+repeatDrops+" Капель силы.");
        }else if(spec.id==="whisperStone"){
          const reward=onWhisperWin();setWhisperReward("18 Капель силы и «"+reward+"»");setWhisperLog("Хродвитнир повержен. Камень открывает награду.");
        }else{
          onRef.current("guardian:battle:"+spec.id);
          setWhisperReward(spec.battleReward+" Капель силы"+(guardianLootText(spec.id,true)?" + "+guardianLootText(spec.id,true):""));setWhisperLog(spec.name+" повержен. "+spec.location+" признаёт твою победу.");
        }
        whisperTimers.current.push(window.setTimeout(()=>{setWhisperBusy(false);setWhisperPhaseSafe("reward");},650));
      }else{
        guardHitActionRef.current?.();
        whisperGuardTurn(false);
      }
    },420));
  };

  useEffect(() => {
    const el = mount.current;
    if (!el) return;
    setHeroReady(false);
    setHeroLoadFailed(false);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa4b6ad);
    const camera = new THREE.PerspectiveCamera(54, 1, 0.1, 280);
    camera.position.set(0, 8.5, 17);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.03;
    el.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0xe8f2e8, 0x65715f, 1.18);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xffdfb8, 2.32);
    sun.position.set(-42, 58, 34);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1536, 1536);
    sun.shadow.camera.left = -95;
    sun.shadow.camera.right = 95;
    sun.shadow.camera.top = 95;
    sun.shadow.camera.bottom = -95;
    sun.shadow.bias = -0.0005;
    scene.add(sun);
    const horizonLight = new THREE.DirectionalLight(0xc1d4d6, 0.72);
    horizonLight.position.set(55, 18, -60);
    scene.add(horizonLight);

    const groundY = (x: number, z: number) => {
      const broad = Math.sin(x * 0.075) * 0.7 + Math.cos(z * 0.062) * 0.55 + Math.sin((x - z) * 0.045) * 0.35;
      const village = Math.exp(-((x * x) / 850 + ((z + 2) * (z + 2)) / 1050));
      const road = Math.exp(-((x * x) / 150 + ((z - 12) * (z - 12)) / 2200));
      return broad * (1 - village * 0.88) - road * 0.18;
    };

    // Мягкие "солнечные окна" между кронами: лёгкая атмосфера без тяжёлого volumetric rendering.
    const lightPoolCanvas = document.createElement("canvas");
    lightPoolCanvas.width = lightPoolCanvas.height = 128;
    const lctx = lightPoolCanvas.getContext("2d")!;
    const grad = lctx.createRadialGradient(64, 64, 4, 64, 64, 64);
    grad.addColorStop(0, "rgba(255,238,194,0.30)");
    grad.addColorStop(0.34, "rgba(255,231,178,0.16)");
    grad.addColorStop(0.72, "rgba(255,225,170,0.055)");
    grad.addColorStop(1, "rgba(255,225,170,0)");
    lctx.fillStyle = grad;
    lctx.fillRect(0, 0, 128, 128);
    const lightPoolTex = new THREE.CanvasTexture(lightPoolCanvas);
    lightPoolTex.colorSpace = THREE.SRGBColorSpace;
    const lightPoolMat = new THREE.MeshBasicMaterial({
      map: lightPoolTex, transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, opacity: 0.58
    });
    const lightPools: THREE.Mesh[] = [];
    const lightPoolData = [
      [-22, -4, 7.5, 4.8], [-9, 18, 5.6, 2.2], [9, -10, 6.8, 5.4],
      [24, 5, 5.0, 1.7], [-31, 20, 5.2, 0.8], [18, 27, 7.0, 3.5]
    ];
    lightPoolData.forEach(([x, z, size, rot]) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size * 0.68), lightPoolMat.clone());
      m.rotation.x = -Math.PI / 2;
      m.rotation.z = rot;
      m.position.set(x, groundY(x,z) + 0.018, z);
      m.renderOrder = 2;
      scene.add(m);
      lightPools.push(m);
    });

    const canvasTex = (type: "ground" | "wood" | "roof" | "road" | "bark" | "foliage") => {
      const c = document.createElement("canvas");
      c.width = c.height = 512;
      const ctx = c.getContext("2d")!;
      const rand = (n:number) => Math.abs(Math.sin(n * 12.9898) * 43758.5453) % 1;
      if (type === "ground") {
        ctx.fillStyle = "#4c6042";
        ctx.fillRect(0,0,512,512);
        for(let i=0;i<1800;i++){
          const x=rand(i*1.17)*512,y=rand(i*2.31)*512;
          const r=10+rand(i*3.71)*28;
          const grass=rand(i*4.13);
          ctx.fillStyle=grass>.72?`rgba(96,108,63,${.08+rand(i)*.12})`:`rgba(30,36,25,${.05+rand(i)*.12})`;
          ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
        }
        for(let i=0;i<650;i++){
          const x=rand(i*7.1)*512,y=rand(i*8.2)*512;
          ctx.strokeStyle=`rgba(142,154,91,${.18+rand(i*2)*.15})`;ctx.lineWidth=1+rand(i*4)*1.5;
          ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+(rand(i*5)-.5)*5,y-3-rand(i*6)*5);ctx.stroke();
        }
      } else if (type === "wood") {
        ctx.fillStyle="#5a3d29";ctx.fillRect(0,0,512,512);
        for(let y=0;y<512;y+=22){
          ctx.fillStyle=`rgba(25,15,9,${.18+rand(y)*.13})`;ctx.fillRect(0,y,512,3);
          ctx.strokeStyle=`rgba(154,111,69,${.08+rand(y*2)*.08})`;ctx.lineWidth=2;
          ctx.beginPath();ctx.moveTo(0,y+7);ctx.bezierCurveTo(150,y+2,340,y+13,512,y+5);ctx.stroke();
        }
        for(let i=0;i<65;i++){const x=rand(i*2.1)*512;ctx.fillStyle=`rgba(20,12,8,${.12+rand(i*3)*.16})`;ctx.fillRect(x,0,2+rand(i*4)*3,512);}
      } else if (type === "roof") {
        ctx.fillStyle="#252522";ctx.fillRect(0,0,512,512);
        for(let y=-30;y<550;y+=25){
          ctx.fillStyle=`rgba(105,94,77,${.12+rand(y)*.08})`;ctx.fillRect(0,y,512,2);
          ctx.strokeStyle="rgba(12,12,11,.48)";ctx.lineWidth=3;
          for(let x=-40;x<560;x+=38){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-18,y+28);ctx.stroke();}
        }
        for(let i=0;i<180;i++){ctx.fillStyle=`rgba(170,154,123,${.03+rand(i)*.07})`;ctx.fillRect(rand(i*2)*512,rand(i*3)*512,2+rand(i*4)*7,2);}
      } else if (type === "bark") {
        // Matte bark: vertical fibers and broken patches, intentionally no glossy bands.
        ctx.fillStyle="#7b5a3f";ctx.fillRect(0,0,512,512);
        for(let i=0;i<76;i++){
          const x=rand(i*2.1)*512;
          const w=2+rand(i*3.7)*7;
          ctx.fillStyle=`rgba(${24+rand(i)*24},${16+rand(i*4)*18},${10+rand(i*5)*14},${.18+rand(i*6)*.22})`;
          ctx.fillRect(x,0,w,512);
        }
        for(let i=0;i<80;i++){
          const x=rand(i*7.1)*512,y=rand(i*8.2)*512;
          ctx.strokeStyle=`rgba(126,91,60,${.07+rand(i*2)*.09})`;ctx.lineWidth=1+rand(i*3)*2;
          ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+(rand(i*4)-.5)*12,y+18+rand(i*5)*45);ctx.stroke();
        }
      } else if (type === "foliage") {
        // Soft, matte needle/leaf color breakup. No painted highlights.
        ctx.fillStyle="#68865a";ctx.fillRect(0,0,512,512);
        for(let i=0;i<1900;i++){
          const x=rand(i*1.17)*512,y=rand(i*2.31)*512;
          const light=rand(i*3.7);
          const r=light>.72?112:light>.36?92:74;
          const g=light>.72?145:light>.36?121:98;
          const b=light>.72?76:light>.36?60:48;
          ctx.fillStyle=`rgba(${r},${g},${b},${.16+rand(i*4)*.28})`;
          ctx.beginPath();ctx.arc(x,y,1.5+rand(i*5)*4.5,0,Math.PI*2);ctx.fill();
        }
        for(let i=0;i<260;i++){
          const x=rand(i*9.1)*512,y=rand(i*10.2)*512;
          ctx.strokeStyle=`rgba(18,31,22,${.08+rand(i*3)*.12})`;ctx.lineWidth=1;
          ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+(rand(i*2)-.5)*10,y+(rand(i*4)-.5)*10);ctx.stroke();
        }
      } else {
        // Warm, compacted earth for footpaths. The old near-black texture and
        // paired tubular ruts read as railway tracks on mobile.
        ctx.fillStyle="#b79a6c";ctx.fillRect(0,0,512,512);
        for(let i=0;i<1050;i++){
          const x=rand(i*1.3)*512,y=rand(i*2.7)*512;
          const pale=rand(i*9)>.68;
          ctx.fillStyle=pale
            ? `rgba(226,204,157,${.10+rand(i*6)*.20})`
            : `rgba(92,69,43,${.06+rand(i*6)*.14})`;
          ctx.beginPath();ctx.ellipse(x,y,1+rand(i*7)*4,.8+rand(i*8)*2.5,rand(i*10)*Math.PI,0,Math.PI*2);ctx.fill();
        }
        for(let i=0;i<90;i++){
          const x=rand(i*11.4)*512,y=rand(i*13.8)*512;
          ctx.strokeStyle=`rgba(89,68,45,${.07+rand(i)*.08})`;ctx.lineWidth=1+rand(i*5)*1.8;
          ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+8+rand(i*2)*20,y+(rand(i*3)-.5)*7);ctx.stroke();
        }
      }
      const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.colorSpace=THREE.SRGBColorSpace;
      t.anisotropy=4;
      return t;
    };

    // Lightweight procedural surface maps: roughness + micro-bump.
    // Generated in-memory; no external texture files are required.
    const makeSurfaceMaps = () => {
      const c = document.createElement("canvas");
      c.width = c.height = 128;
      const ctx = c.getContext("2d")!;
      const img = ctx.createImageData(128, 128);
      for (let y = 0; y < 128; y++) {
        for (let x = 0; x < 128; x++) {
          const i = (y * 128 + x) * 4;
          const n =
            Math.sin(x * 0.37) * 0.30 +
            Math.sin(y * 0.61) * 0.24 +
            Math.sin((x + y) * 0.17) * 0.20 +
            Math.sin((x - y) * 0.09) * 0.14;
          const v = Math.max(214, Math.min(250, Math.round(232 + n * 18)));
          img.data[i] = v; img.data[i + 1] = v; img.data[i + 2] = v; img.data[i + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
      const height = new THREE.CanvasTexture(c);
      height.wrapS = height.wrapT = THREE.RepeatWrapping;
      height.repeat.set(5, 5);
      const rough = new THREE.CanvasTexture(c);
      rough.wrapS = rough.wrapT = THREE.RepeatWrapping;
      rough.repeat.set(4, 4);
      return { height, rough };
    };
    const surfaceMaps = makeSurfaceMaps();

    const groundTexture = canvasTex("ground");
    groundTexture.repeat.set(5, 6);
    const barkTexture = canvasTex("bark");
    barkTexture.wrapS = barkTexture.wrapT = THREE.RepeatWrapping;
    barkTexture.repeat.set(1.2, 1.8);
    const foliageTexture = canvasTex("foliage");
    foliageTexture.wrapS = foliageTexture.wrapT = THREE.RepeatWrapping;
    foliageTexture.repeat.set(1.35, 1.35);
    const groundGeo = new THREE.PlaneGeometry(190, 190, 62, 62);
    const gp = groundGeo.attributes.position as THREE.BufferAttribute;
    for (let i=0;i<gp.count;i++) {
      const x=gp.getX(i), z=-gp.getY(i);
      gp.setZ(i, groundY(x,z));
    }
    groundGeo.rotateX(-Math.PI/2);
    groundGeo.computeVertexNormals();
    const terrainMat = new THREE.MeshStandardMaterial({
      map: groundTexture,
      roughness: 0.985,
      metalness: 0.0,
      roughnessMap: surfaceMaps.rough,
      bumpMap: surfaceMaps.height,
      bumpScale: 0.018
    });
    const terrain = new THREE.Mesh(groundGeo, terrainMat);
    terrain.receiveShadow = true;
    scene.add(terrain);
    new THREE.TextureLoader().load(`${BASE}img/models/T_Grass_Green.jpg`, texture => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
      texture.repeat.set(24, 24);
      texture.anisotropy = 8;
      terrainMat.map = texture;
      terrainMat.needsUpdate = true;
      groundTexture.dispose();
    }, undefined, error => console.warn("Grass texture unavailable; using painted ground", error));

    // ===== NATURAL SPRUCE FOREST + MASSIVE OAK — Y-UP GLB =====
    // Restore the real GLB spruce layer: 30 trees spread around Midgard.
    // The spruce is intentionally darkened; no procedural firs are re-enabled.
    const gltfLoader = new GLTFLoader();
    const fbxLoader = new FBXLoader();
    let glbTreesAlive = true;
    const glbTreeInstances: THREE.Object3D[] = [];

    const treeAsset = 'Midgard_Natural_Spruce_V2_YUP.glb';
    const treeV3Asset = 'Midgard_Natural_Spruce_V3_YUP.glb';
    const oakAsset = 'Midgard_Massive_Oak_V1_YUP.glb';
    const mountainAsset = 'Midgard_Snow_Mountain_Range_V1_YUP.glb';
    const heroHouseAsset = 'Midgard_Hero_House_V1_YUP.glb';
    const vikingHouseAsset = 'Midgard_Viking_House_V1_YUP.glb';
    const forgeAsset = 'Midgard_Forge_V1_YUP.glb';
    const barnAsset = 'Midgard_Barn_V1_YUP.glb';
    const shedAsset = 'Midgard_Shed_V1_YUP.glb';
    const elderHouseAsset = 'Midgard_Elder_House_V1_YUP.glb';
    const fisherHouseAsset = 'Midgard_Fisher_House_V1_YUP.glb';
    const hunterHouseAsset = 'Midgard_Hunter_House_V1_YUP.glb';
    const herbalistHouseAsset = 'Midgard_Herbalist_House_V1_YUP.glb';
    const craftsmanHouseAsset = 'Midgard_Craftsman_House_V1_YUP.glb';
    const oldFarmAsset = 'Midgard_Old_Farm_V1_YUP.glb';
    const mimirWellAsset = 'Midgard_Mimir_Well_V1_YUP.glb';
    const hoddmimirAsset = 'Midgard_Hoddmimir_Holt_V2_YUP.glb';

    // Deterministic positions keep the village centre and major landmarks readable.
    const sprucePositions: Array<[number, number]> = [
      [-72,-62],[-51,-68],[-27,-72],[31,-67],[49,-63],[72,-55],
      [-76,-34],[-56,-38],[-36,-43],[34,-42],[57,-36],[78,-27],
      [-80,-4],[-61,-10],[-43,-8],[46,-9],[65,-3],[81,5],
      [-74,25],[-53,30],[-34,34],[39,29],[59,25],[71,39],
      [-68,57],[-45,61],[-24,66],[30,61],[52,57],[71,66]
    ];

    const darkenSpruceMaterial = (m:any) => {
      if (!m) return m;
      const mm = m.clone ? m.clone() : m;
      // 10% darker than the current spruce appearance.
      if (mm.color?.multiplyScalar) mm.color.multiplyScalar(0.765);
      if ('roughness' in mm) mm.roughness = 0.96;
      if ('metalness' in mm) mm.metalness = 0.0;
      mm.needsUpdate = true;
      return mm;
    };

    const prepareSpruceSource = (source: THREE.Object3D) => {
      source.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.frustumCulled = false;
        o.castShadow = true;
        o.receiveShadow = true;
        if (Array.isArray(o.material)) o.material = o.material.map(darkenSpruceMaterial);
        else o.material = darkenSpruceMaterial(o.material);
      });

      sprucePositions.forEach(([x,z], i) => {
        const tree = source.clone(true);
        markMeshes(tree);
        tree.rotation.set(0, midHash(i, 2101) * Math.PI * 2, 0);
        tree.scale.setScalar(0.88 + midHash(i, 2102) * 0.22);
        tree.position.set(0, 0, 0);
        tree.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(tree);
        tree.position.set(x, groundY(x,z) - box.min.y, z);
        tree.updateMatrixWorld(true);
        scene.add(tree);
        glbTreeInstances.push(tree);
      });

      console.log('[NATURAL SPRUCE] 30 trees loaded', `${BASE}img/models/${treeAsset}`);
    };

    const loadGlbWithFolderFallback = (
      asset:string,
      onLoad:(gltf:any)=>void,
      label:string,
      onFinalError?:()=>void
    ) => {
      const assetNames = asset === "Vika-3d-animated-optimized.glb"
        ? [asset, "Vika-3d-animated.glb"] : /\.fbx$/i.test(asset)
          ? [asset,asset.replace(/\.fbx$/i,"(2).fbx"),asset.replace(/\.fbx$/i,"(3).fbx"),asset.replace(/\.fbx$/i,"(1).fbx")] : [asset];
      const paths = assetNames.flatMap(name => [`${BASE}img/models/${name}`, `${BASE}img/model/${name}`]);
      const tryPath = (index:number) => {
        const url=paths[index];
        const fail=(error:any)=>{
          if (index + 1 < paths.length) tryPath(index + 1);
          else {
            console.error(`[${label}] FAILED`, paths, error);
            onFinalError?.();
          }
        };
        cachedGlbBuffer(url).then(buffer=>{
          if(!glbTreesAlive)return;
          const absolute=new URL(url,window.location.href).href;
          const basePath=absolute.slice(0,absolute.lastIndexOf("/")+1);
          // Keep the shared scene/animations interface for both model formats.
          // FBX parse errors reach the same folder fallback through catch(fail).
          if(/\.fbx$/i.test(new URL(absolute).pathname)){
            const model=fbxLoader.parse(buffer,basePath);
            onLoad({scene:model,animations:model.animations});
          }else{
            gltfLoader.parse(buffer,basePath,onLoad,fail);
          }
        }).catch(fail);
      };
      tryPath(0);
    };

    loadGlbWithFolderFallback(treeAsset, (gltf:any) => {
      if (!glbTreesAlive) return;
      prepareSpruceSource(gltf.scene);
    }, 'NATURAL SPRUCE');

    // Add a small V3 comparison grove without replacing the successful V2 forest.
    // 12 V3 spruces, all with slightly different size and rotation.
    const spruceV3Positions: Array<[number,number]> = [
      [-73,-57],[-54,-62],[-31,-61],[38,-60],[54,-58],[73,-48],
      [-72,42],[-53,49],[-31,55],[32,53],[54,48],[72,55]
    ];

    loadGlbWithFolderFallback(treeV3Asset, (gltf:any) => {
      if (!glbTreesAlive) return;
      const source = gltf.scene.clone(true);
      source.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.frustumCulled = false;
        o.castShadow = true;
        o.receiveShadow = true;
        const darkenV3 = (m:any) => {
          if (!m) return m;
          const mm = m.clone ? m.clone() : m;
          // Keep V3 close to the current dark V2 forest for a fair visual comparison.
          if (mm.color?.multiplyScalar) mm.color.multiplyScalar(0.72);
          if ('roughness' in mm) mm.roughness = 0.96;
          if ('metalness' in mm) mm.metalness = 0.0;
          mm.needsUpdate = true;
          return mm;
        };
        if (Array.isArray(o.material)) o.material = o.material.map(darkenV3);
        else o.material = darkenV3(o.material);
      });

      spruceV3Positions.forEach(([x,z], i) => {
        const tree = source.clone(true);
        markMeshes(tree);
        tree.rotation.set(0, midHash(i, 2301) * Math.PI * 2, 0);
        tree.scale.setScalar(0.72 + midHash(i, 2302) * 0.28);
        tree.position.set(0,0,0);
        tree.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(tree);
        tree.position.set(x, groundY(x,z) - box.min.y, z);
        tree.updateMatrixWorld(true);
        scene.add(tree);
        glbTreeInstances.push(tree);
      });

      console.log('[NATURAL SPRUCE V3] 12 comparison trees loaded', `${BASE}img/models/${treeV3Asset}`);
    }, 'NATURAL SPRUCE V3');

    // Restore the GLB oak as a varied grove: 40 clones, while keeping the village centre readable.
    loadGlbWithFolderFallback(oakAsset, (gltf:any) => {
      if (!glbTreesAlive) return;
      const oakSource = gltf.scene.clone(true);
      markMeshes(oakSource);

      // Another 20% darker than the previous oak pass.
      // Recompute smooth normals where possible to soften the faceted/segmented trunk look.
      oakSource.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.frustumCulled = false;
        o.castShadow = true;
        o.receiveShadow = true;
        if (o.geometry?.computeVertexNormals) {
          o.geometry = o.geometry.clone();
          o.geometry.computeVertexNormals();
          o.geometry.attributes?.normal && (o.geometry.attributes.normal.needsUpdate = true);
        }
        const darkenOak = (m:any) => {
          if (!m) return m;
          const mm = m.clone ? m.clone() : m;
          if (mm.color?.multiplyScalar) mm.color.multiplyScalar(0.672); // previous 0.84 × 0.80
          if ('roughness' in mm) mm.roughness = Math.max(mm.roughness ?? 0.9, 0.96);
          if ('metalness' in mm) mm.metalness = 0.0;
          if ('flatShading' in mm) mm.flatShading = false;
          mm.needsUpdate = true;
          return mm;
        };
        if (Array.isArray(o.material)) o.material = o.material.map(darkenOak);
        else o.material = darkenOak(o.material);
      });

      // 40 deterministic positions. The first oak stays near Mimir; the rest form
      // an irregular outer woodland and deliberately avoid the village centre.
      const oakPositions: Array<[number,number]> = [
        [9,6],[-78,-70],[-58,-73],[-37,-68],[-13,-76],[18,-74],[42,-70],[65,-72],[80,-57],
        [-82,-47],[-64,-49],[-45,-53],[-24,-55],[28,-54],[50,-50],[71,-43],[84,-25],
        [-83,-17],[-67,-23],[-48,-25],[48,-23],[67,-18],[83,-7],
        [-82,13],[-64,17],[-46,14],[47,15],[65,12],[82,20],
        [-78,42],[-59,39],[-39,46],[38,43],[58,39],[66,57],
        [-68,69],[-43,66],[-18,74],[27,70],[55,67]
      ];

      const jointShadowMat = new THREE.MeshBasicMaterial({
        color:0x120f0c, transparent:true, opacity:0.20, depthWrite:false
      });

      oakPositions.forEach(([oakX,oakZ], i) => {
        const oak = oakSource.clone(true);
        markMeshes(oak);
        oak.rotation.set(0, midHash(i, 2211) * Math.PI * 2, 0);

        // Every oak has a different size. The Mimir oak stays moderately large;
        // the rest range from young/small to old/large.
        const oakScale = i === 0 ? 0.82 : 0.52 + midHash(i, 2212) * 0.43;
        oak.scale.setScalar(oakScale);
        oak.position.set(0,0,0);
        oak.updateMatrixWorld(true);
        const oakBox = new THREE.Box3().setFromObject(oak);
        oak.position.set(oakX, groundY(oakX,oakZ) - oakBox.min.y, oakZ);

        // Thin soft collars hide the three visible trunk-section seams without
        // changing the silhouette of the model. They scale together with each oak.
        [1.72, 3.32, 5.02].forEach((yy, j) => {
          const ring = new THREE.Mesh(
            new THREE.TorusGeometry(0.565 - j * 0.045, 0.040, 10, 36),
            jointShadowMat.clone()
          );
          ring.rotation.x = Math.PI / 2;
          ring.position.y = yy;
          oak.add(ring);
        });

        oak.updateMatrixWorld(true);
        scene.add(oak);
        glbTreeInstances.push(oak);
      });

      console.log('[MASSIVE OAK] 40 varied, darker, smoothed oaks loaded', `${BASE}img/models/${oakAsset}`);
    }, 'MASSIVE OAK');

    // Horizon ridge sheets removed: they were the visible translucent plates.
    // Real mountains and the distant GLB forest remain unchanged.

    // Old procedural far-firs removed for the GLB tree test.
    // This prevents the old cone-shaped forest from hiding the new models.

    const addMesh = (g: THREE.Object3D, interactive?: string, label?: string) => {
      if (interactive) g.userData = { id: interactive, label: label || interactive };
      g.traverse((o:any)=>{ if(o.isMesh){o.castShadow=true;o.receiveShadow=true;} });
      scene.add(g);
      if(interactive) objects.push(g);
      return g;
    };

    const mat = (color:number, rough=.9, metal=0) => new THREE.MeshStandardMaterial({
      color, roughness: rough, metalness: metal,
      roughnessMap: surfaceMaps.rough,
      bumpMap: surfaceMaps.height,
      bumpScale: metal > 0.35 ? 0.008 : 0.018
    });
    const box=(w:number,h:number,d:number,c:number,rough=.9)=>new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat(c,rough));
    const cyl=(r:number,h:number,c:number,segments=10,rough=.9)=>new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,segments),mat(c,rough));
    const log=(length:number,radius:number,c:number)=>{
      const m=cyl(radius,length,c,10,.96); m.rotation.z=Math.PI/2; return m;
    };
    const roofSlope=(w:number,d:number,c:number)=>{
      const g=new THREE.Group(), panelW=w*.62, angle=.61;
      const roofMat=new THREE.MeshStandardMaterial({map:roofTex,color:c,roughness:.96,roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.012,side:THREE.DoubleSide});
      // Thick boards rather than paper-thin planes: the roof remains visible from every camera angle.
      const a=new THREE.Mesh(new THREE.BoxGeometry(panelW,.18,d),roofMat);
      const b=a.clone();
      a.rotation.z=angle; b.rotation.z=-angle;
      a.position.x=-w*.205; b.position.x=w*.205;
      g.add(a,b);
      return g;
    };


    const objects: THREE.Object3D[] = [];
    const fires: Array<{light:THREE.PointLight; flame:THREE.Object3D; phase:number}> = [];
    const npcs: THREE.Object3D[] = [];
    const wildlife: Array<{g:THREE.Object3D; x:number; z:number; r:number; speed:number; phase:number; kind:string}> = [];
    const displayChests:THREE.Object3D[]=[];

    // Collision layer: separate from visual meshes so future realistic assets can
    // replace the current models without changing player movement.
    type Collider =
      | { kind:"rect"; x:number; z:number; w:number; d:number; rot:number }
      | { kind:"circle"; x:number; z:number; r:number }
      | { kind:"segment"; x1:number; z1:number; x2:number; z2:number; r:number };
    const colliders: Collider[] = [];
    const HERO_RADIUS = 0.558;
    const banditCollisions:{id:string;x:number;z:number;r:number}[]=[];
    const RIVER_HALF = 5.4;
    const BRIDGE_X = -57, BRIDGE_Z = -48, BRIDGE_SPAN = 13.6, BRIDGE_WIDTH = 4.8;
    const BRIDGE_Y = groundY(BRIDGE_X,BRIDGE_Z) + .58;
    const riverCenterX = (z:number) => -57 + Math.sin(((z + 94) / 6) * .42) * 4.2;
    const NORTH_BRIDGE_Z=52, NORTH_BRIDGE_X=riverCenterX(NORTH_BRIDGE_Z);
    const NORTH_BRIDGE_Y=groundY(NORTH_BRIDGE_X,NORTH_BRIDGE_Z)+.58;
    const inRiverWater = (x:number,z:number) => z >= -94 && z <= 98 && Math.abs(x-riverCenterX(z)) < RIVER_HALF + HERO_RADIUS*.18;
    const withinBridge=(x:number,z:number,cx:number,cz:number)=>Math.abs(x-cx)<=BRIDGE_SPAN/2-.12&&Math.abs(z-cz)<=BRIDGE_WIDTH/2-.16;
    const onRiverBridge = (x:number,z:number) => withinBridge(x,z,BRIDGE_X,BRIDGE_Z)||(northBridgeRepaired&&withinBridge(x,z,NORTH_BRIDGE_X,NORTH_BRIDGE_Z));
    const bridgeHeight=(x:number,z:number)=>withinBridge(x,z,BRIDGE_X,BRIDGE_Z)?BRIDGE_Y:NORTH_BRIDGE_Y;
    // 0 = barred shut, 1 = fully open. Used both by the visual gate and collision passage.
    let villageGateProgress = villageGateOpenRef.current ? 1 : 0;
    let rearGateProgress=rearGateOpenRef.current?1:0;
    const addRectCollider=(x:number,z:number,w:number,d:number,rot=0,pad=0.12)=>colliders.push({kind:"rect",x,z,w:w+pad*2,d:d+pad*2,rot});
    const addCircleCollider=(x:number,z:number,r:number,pad=0.12)=>colliders.push({kind:"circle",x,z,r:r+pad});
    const addSegmentCollider=(x1:number,z1:number,x2:number,z2:number,r:number,pad=0.12)=>colliders.push({kind:"segment",x1,z1,x2,z2,r:r+pad});
    const hits=(x:number,z:number,c:Collider)=>{
      if(c.kind==="circle") return Math.hypot(x-c.x,z-c.z)<c.r+HERO_RADIUS;
      if(c.kind==="rect"){
        const co=Math.cos(c.rot),si=Math.sin(c.rot),dx=x-c.x,dz=z-c.z;
        const lx=co*dx-si*dz,lz=si*dx+co*dz;
        const qx=Math.max(-c.w/2,Math.min(c.w/2,lx)),qz=Math.max(-c.d/2,Math.min(c.d/2,lz));
        return Math.hypot(lx-qx,lz-qz)<HERO_RADIUS;
      }
      const vx=c.x2-c.x1,vz=c.z2-c.z1,len2=vx*vx+vz*vz;
      const t=len2>0?Math.max(0,Math.min(1,((x-c.x1)*vx+(z-c.z1)*vz)/len2)):0;
      const px=c.x1+vx*t,pz=c.z1+vz*t;
      return Math.hypot(x-px,z-pz)<c.r+HERO_RADIUS;
    };
    const blocked=(x:number,z:number)=>{
      if(insideHomeRef.current){
        // Interior bounds leave a clear opening toward the door at the front (positive Z).
        return x<heroHomeX-2.72*HOME_SCALE || x>heroHomeX+2.72*HOME_SCALE || z<heroHomeZ-2.05*HOME_SCALE || z>heroHomeZ+2.30*HOME_SCALE;
      }
      for(const obstacle of banditCollisions){
        const distance=Math.hypot(x-obstacle.x,z-obstacle.z);
        const previous=Math.hypot(state.current.x-obstacle.x,state.current.z-obstacle.z);
        const safeDistance=obstacle.r+HERO_RADIUS;
        if(distance<safeDistance && (previous>=safeDistance || distance<previous-.001))return true;
      }
      // The northern crossing stays blocked from either bank until its repair quest is complete.
      if(!northBridgeRepaired&&hits(x,z,{kind:"rect",x:NORTH_BRIDGE_X,z:NORTH_BRIDGE_Z,w:BRIDGE_SPAN+.6,d:BRIDGE_WIDTH+.5,rot:0}))return true;
      // A ward protects the cache itself until the northern bridge is repaired.
      if(!northBridgeRepaired&&Math.hypot(x+72,z-48)<3.25+HERO_RADIUS)return true;
      // Water can be crossed only on an open bridge deck.
      if(inRiverWater(x,z) && !onRiverBridge(x,z)) return true;
      // Each gate blocks its own opening until its leaves have swung far enough.
      if(villageGateProgress < .78 && hits(x,z,{kind:"segment",x1:-2.87,z1:gateFrontZ,x2:2.87,z2:gateFrontZ,r:1.12})) return true;
      if(rearGateProgress < .78 && hits(x,z,{kind:"segment",x1:-2.87,z1:gateRearZ,x2:2.87,z2:gateRearZ,r:1.12}))return true;
      return colliders.some(c=>hits(x,z,c));
    };
    const moveWithCollision=(q:{x:number;z:number},nx:number,nz:number)=>{
      if(insideHomeRef.current){
        const x=Math.max(heroHomeX-2.55*HOME_SCALE,Math.min(heroHomeX+2.55*HOME_SCALE,nx));
        const z=Math.max(heroHomeZ-1.92*HOME_SCALE,Math.min(heroHomeZ+2.55*HOME_SCALE,nz));
        q.x=x;q.z=z;return;
      }
      const x=Math.max(-88,Math.min(88,nx)),z=Math.max(-89,Math.min(89,nz));
      if(!blocked(x,z)){q.x=x;q.z=z;return;}
      if(!blocked(x,q.z)) q.x=x;
      if(!blocked(q.x,z)) q.z=z;
    };

    // Snow mountain range — real GLB background, replacing the old cone mountains.
    // The model is Y-up and faces +Z, so it sits beyond the northern forest.
    loadGlbWithFolderFallback(mountainAsset, (gltf:any) => {
      const mountainRange = gltf.scene.clone(true);

      mountainRange.traverse((o:any) => {
        if (!o.isMesh) return;
        o.castShadow = false;
        o.receiveShadow = false;
        o.frustumCulled = false;
      });

      // Original GLB is ~115 wide x ~46 high.
      // Stretch mostly in X so the ridge spans the whole Midgard horizon
      // without becoming unrealistically tall.
      mountainRange.scale.set(1.62, 0.90, 1.15);
      mountainRange.position.set(0, -1.2, -104);
      mountainRange.rotation.set(0, 0, 0);

      scene.add(mountainRange);
      console.log('[SNOW MOUNTAINS] loaded', `${BASE}img/models/${mountainAsset}`);
    }, 'SNOW MOUNTAINS');

    // Living river: broad low-poly water ribbon with subtle surface displacement.
    const riverPts:{x:number;z:number}[]=[];
    for(let i=0;i<=32;i++) riverPts.push({z:-94+i*6,x:-57+Math.sin(i*.42)*4.2});
    const riverVerts:number[]=[]; const riverUvs:number[]=[]; const riverIdx:number[]=[]; const riverHalf=RIVER_HALF;
    for(let i=0;i<riverPts.length;i++){
      const p=riverPts[i],prev=riverPts[Math.max(0,i-1)],next=riverPts[Math.min(riverPts.length-1,i+1)];
      const dx=next.x-prev.x,dz=next.z-prev.z,len=Math.max(.001,Math.hypot(dx,dz)),nx=-dz/len,nz=dx/len,edge=groundY(p.x,p.z)+.055;
      for(const side of [-1,1]){
        const off=riverHalf*side;
        riverVerts.push(p.x+nx*off,edge+Math.sin(i*1.7+side)*.035,p.z+nz*off);
        riverUvs.push((side+1)/2,(p.z+94)/7.5);
      }
      if(i<riverPts.length-1){const k=i*2;riverIdx.push(k,k+1,k+2,k+1,k+3,k+2);}
    }
    const riverGeo=new THREE.BufferGeometry();riverGeo.setAttribute("position",new THREE.Float32BufferAttribute(riverVerts,3));riverGeo.setAttribute("uv",new THREE.Float32BufferAttribute(riverUvs,2));riverGeo.setIndex(riverIdx);riverGeo.computeVertexNormals();
    const riverMat=new THREE.MeshStandardMaterial({color:0xd8f3f4,roughness:.4,metalness:.04,transparent:true,opacity:.94,side:THREE.DoubleSide});
    const river=new THREE.Mesh(riverGeo,riverMat);
    river.receiveShadow=true;scene.add(river);

    // Shallow-bank shelves: slightly lighter water near the edges makes the river read as deep in the center.
    const bankWaterMat=new THREE.MeshStandardMaterial({color:0xb5e2e9,roughness:.6,metalness:0,transparent:true,opacity:.58,side:THREE.DoubleSide});
    for(const side of [-1,1]){
      const verts:number[]=[]; const uvs:number[]=[]; const idx:number[]=[]; const shelf=1.18;
      for(let i=0;i<riverPts.length;i++){
        const p=riverPts[i],prev=riverPts[Math.max(0,i-1)],next=riverPts[Math.min(riverPts.length-1,i+1)];
        const dx=next.x-prev.x,dz=next.z-prev.z,len=Math.max(.001,Math.hypot(dx,dz)),nx=-dz/len,nz=dx/len;
        const inner=riverHalf*side, outer=(riverHalf-shelf)*side;
        verts.push(p.x+nx*inner,groundY(p.x,p.z)+.072,p.z+nz*inner);
        verts.push(p.x+nx*outer,groundY(p.x,p.z)+.078,p.z+nz*outer);
        uvs.push((side+1)/2,(p.z+94)/7.5,(outer/riverHalf+1)/2,(p.z+94)/7.5);
        if(i<riverPts.length-1){const k=i*2;idx.push(k,k+1,k+2,k+1,k+3,k+2);}
      }
      const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));g.setIndex(idx);g.computeVertexNormals();
      const m=new THREE.Mesh(g,bankWaterMat);m.receiveShadow=true;scene.add(m);
    }

    const mimirGoldMaterials:THREE.MeshBasicMaterial[]=[];
    const mimirWaterMaterials:Array<THREE.MeshBasicMaterial|THREE.MeshStandardMaterial>=[riverMat,bankWaterMat];
    let mimirGoldTexture:THREE.Texture|null=null;
    let mimirWaterTexture:THREE.Texture|null=null;
    const sacredStoneMaterials=[0,1,2].map(()=>new THREE.MeshStandardMaterial({color:0xffffff,roughness:.98}));
    const sacredStoneTextures:THREE.Texture[]=[];
    sacredStoneMaterials.forEach((material,i)=>new THREE.TextureLoader().load(`${BASE}img/models/Stone_Sacred_${i+1}.jpg`,texture=>{
      if(!glbTreesAlive){texture.dispose();return;}
      texture.colorSpace=THREE.SRGBColorSpace;
      texture.wrapS=texture.wrapT=THREE.MirroredRepeatWrapping;
      texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
      sacredStoneTextures.push(texture);material.map=texture;material.needsUpdate=true;
    },undefined,error=>console.warn('Sacred stone texture unavailable',i+1,error)));
    new THREE.TextureLoader().load(`${BASE}img/models/T_Mimir_Gold.jpg`,texture=>{
      if(!glbTreesAlive){texture.dispose();return;}
      texture.colorSpace=THREE.SRGBColorSpace;
      texture.wrapS=texture.wrapT=THREE.MirroredRepeatWrapping;
      texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
      mimirGoldTexture=texture;
      mimirGoldMaterials.forEach(m=>{m.map=texture;m.needsUpdate=true;});
    },undefined,error=>console.warn("Mimir gold texture unavailable",error));
    new THREE.TextureLoader().load(`${BASE}img/models/T_Mimir_Water.jpg`,texture=>{
      if(!glbTreesAlive){texture.dispose();return;}
      texture.colorSpace=THREE.SRGBColorSpace;
      texture.wrapS=texture.wrapT=THREE.MirroredRepeatWrapping;
      texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
      mimirWaterTexture=texture;
      mimirWaterMaterials.forEach(m=>{m.map=texture;m.needsUpdate=true;});
    },undefined,error=>console.warn("Mimir water texture unavailable",error));

    // Soft current streaks: low-cost elongated planes that drift along the river direction.
    const currentStreaks:Array<{mesh:THREE.Mesh;phase:number;speed:number}>=[];
    const currentMat=new THREE.MeshBasicMaterial({color:0xc0d9d8,transparent:true,opacity:.085,depthWrite:false,side:THREE.DoubleSide});
    for(let i=0;i<22;i++){
      const pi=Math.min(riverPts.length-1,2+Math.floor(midHash(i,1510)*(riverPts.length-4))),p=riverPts[pi];
      const prev=riverPts[Math.max(0,pi-1)],next=riverPts[Math.min(riverPts.length-1,pi+1)];
      const ang=Math.atan2(next.x-prev.x,next.z-prev.z);
      const q=new THREE.Mesh(new THREE.PlaneGeometry(1.5+midHash(i,1511)*2.8,.08+midHash(i,1512)*.07),currentMat.clone());
      q.rotation.x=-Math.PI/2;q.rotation.z=ang;q.position.set(p.x+(midHash(i,1513)-.5)*6.4,groundY(p.x,p.z)+.095,p.z+(midHash(i,1514)-.5)*5.4);
      scene.add(q);currentStreaks.push({mesh:q,phase:midHash(i,1515)*Math.PI*2,speed:.55+midHash(i,1516)*.7});
    }

    const ripples:Array<{mesh:THREE.Mesh;phase:number}> = [];
    for(let i=0;i<52;i++){
      const pi=Math.min(riverPts.length-1,Math.floor(i*.62)),p=riverPts[pi],prev=riverPts[Math.max(0,pi-1)],next=riverPts[Math.min(riverPts.length-1,pi+1)];
      const dx=next.x-prev.x,dz=next.z-prev.z,len=Math.max(.001,Math.hypot(dx,dz)),side=i%2===0?-1:1,rr=.34+midHash(i,15)*.72,off=riverHalf+side*(.25+midHash(i,16)*1.4);
      const stone=new THREE.Mesh(new THREE.DodecahedronGeometry(rr,1),sacredStoneMaterials[i%3]);
      stone.position.set(p.x+(-dz/len)*off,groundY(p.x,p.z)+.18,p.z+(dx/len)*off);stone.scale.y=.5+midHash(i,17)*.35;
      // Decorative bank stones remain visible but never block the player.
      addMesh(stone);
    }

    // A few partially submerged stones break the perfect ribbon silhouette and add scale.
    for(let i=0;i<18;i++){
      const pi=Math.min(riverPts.length-1,1+Math.floor(midHash(i,1520)*(riverPts.length-2))),p=riverPts[pi],prev=riverPts[Math.max(0,pi-1)],next=riverPts[Math.min(riverPts.length-1,pi+1)];
      const dx=next.x-prev.x,dz=next.z-prev.z,len=Math.max(.001,Math.hypot(dx,dz));
      const across=(midHash(i,1521)-.5)*6.4;
      const stone=new THREE.Mesh(new THREE.DodecahedronGeometry(.16+midHash(i,1522)*.3,1),sacredStoneMaterials[i%3]);
      stone.position.set(p.x+(-dz/len)*across,groundY(p.x,p.z)+.045,p.z+(dx/len)*across);
      stone.scale.y=.35+midHash(i,1523)*.45;stone.rotation.set(midHash(i,1524)*2,midHash(i,1525)*2,midHash(i,1526)*2);scene.add(stone);
    }

    // A readable footpath network connects the village and every major landmark.
    // The uploaded gravel photo supplies the gray stone surface of the paths.
    const pathTexture=canvasTex("road");
    pathTexture.repeat.set(1.2,5.5);
    const pathMaterial=new THREE.MeshStandardMaterial({map:pathTexture,color:0xe1e1df,roughness:1,metalness:0,polygonOffset:true,polygonOffsetFactor:-3,polygonOffsetUnits:-3});
    const pathEdgeMaterial=new THREE.MeshStandardMaterial({color:0x686c65,roughness:1,metalness:0,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2});
    new THREE.TextureLoader().load(`${BASE}img/models/T_Path_GrayGravel.jpg`, image => {
      // The lower half of the supplied photo is grass. Keep the gravel portion
      // so repeating the image along a road does not create bands of grass.
      const source = image.image as HTMLImageElement;
      const canvas = document.createElement("canvas");
      canvas.width = source.naturalWidth;
      canvas.height = Math.round(source.naturalHeight * .36);
      canvas.getContext("2d")!.drawImage(source, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
      const gravel = new THREE.CanvasTexture(canvas);
      gravel.colorSpace = THREE.SRGBColorSpace;
      gravel.wrapS = gravel.wrapT = THREE.MirroredRepeatWrapping;
      gravel.anisotropy = 8;
      pathMaterial.map = gravel;
      pathMaterial.needsUpdate = true;
      pathTexture.dispose();
      image.dispose();
    }, undefined, error => console.warn("Path texture unavailable; using painted paths", error));
    const road = (points:Array<[number,number]>, width:number, bridgeLandingY?:number) => {
      width *= 1.12;
      const controls=points.map(([x,z])=>new THREE.Vector3(x,0,z));
      let routeLength=0;for(let i=1;i<controls.length;i++)routeLength+=controls[i].distanceTo(controls[i-1]);
      const curve=new THREE.CatmullRomCurve3(controls,false,"centripetal");
      const pts=curve.getSpacedPoints(Math.max(8,Math.ceil(routeLength/1.35))).map((p,i,all)=>{
        const ground=groundY(p.x,p.z);
        const approach=bridgeLandingY===undefined?0:THREE.MathUtils.smoothstep(i/(all.length-1),.70,1);
        return new THREE.Vector3(p.x,THREE.MathUtils.lerp(ground,bridgeLandingY??ground,approach),p.z);
      });
      const surface=(surfaceWidth:number,yOffset:number,material:THREE.Material,wobble:number)=>{
        const verts:number[]=[],uvs:number[]=[],idx:number[]=[];
        let distance=0;
        for(let i=0;i<pts.length;i++){
          if(i>0)distance+=pts[i].distanceTo(pts[i-1]);
          const a=pts[Math.max(0,i-1)],b=pts[Math.min(pts.length-1,i+1)];
          const dx=b.x-a.x,dz=b.z-a.z,l=Math.max(.001,Math.hypot(dx,dz));
          const px=-dz/l,pz=dx/l;
          const edgeNoise=1+(midHash(i+points.length*17,187)-.5)*wobble;
          const half=surfaceWidth*.5*edgeNoise;
          const bend=(midHash(i+points.length*29,193)-.5)*wobble*.45;
          verts.push(pts[i].x+px*(half+bend),pts[i].y+yOffset,pts[i].z+pz*(half+bend));
          verts.push(pts[i].x-px*(half-bend),pts[i].y+yOffset+.006,pts[i].z-pz*(half-bend));
          uvs.push(0,distance/2.5,1,distance/2.5);
          // Counter-clockwise winding keeps the visible face and normals upward.
          if(i<pts.length-1){const k=i*2;idx.push(k,k+2,k+1,k+1,k+2,k+3);}
        }
        const geo=new THREE.BufferGeometry();geo.setAttribute("position",new THREE.Float32BufferAttribute(verts,3));geo.setAttribute("uv",new THREE.Float32BufferAttribute(uvs,2));geo.setIndex(idx);geo.computeVertexNormals();
        const mesh=new THREE.Mesh(geo,material);mesh.receiveShadow=true;mesh.renderOrder=1;scene.add(mesh);
      };
      surface(width*1.10,.075,pathEdgeMaterial,.10);
      surface(width,.102,pathMaterial,.08);
    };
    const HOME_SCALE=1.30, BUILDING_HEIGHT=1.25;
    const villageHomes=[
      {asset:vikingHouseAsset,id:"warriorHouse",label:"Дом дружинника",x:-21,z:-21,rot:0,sx:1.02,sy:1.02,sz:.78,w:9,d:7},
      {asset:vikingHouseAsset,id:"fisher2",label:"Дом рыбака Халли",x:-21,z:8,rot:Math.PI/2,sx:.86,sy:.90,sz:.58,w:7.8,d:5.8},
      {asset:vikingHouseAsset,id:"carpenter",label:"Дом плотника Бьёрна",x:-20,z:22,rot:Math.PI/2,sx:.82,sy:.86,sz:.56,w:7.8,d:5.8},
      {asset:vikingHouseAsset,id:"hunter2",label:"Дом охотницы Рандви",x:22,z:20,rot:0,sx:.88,sy:.92,sz:.58,w:7.8,d:5.8},
      {asset:vikingHouseAsset,id:"family",label:"Дом семьи Торстейна",x:9,z:16,rot:0,sx:.84,sy:.88,sz:.57,w:7.8,d:5.8},
      {asset:elderHouseAsset,id:"house",label:"Дом старейшины Хальвдана",x:16,z:-21,rot:0,sx:1.02,sy:.82,sz:.90,w:10.85,d:7.85},
      {asset:fisherHouseAsset,id:"fisher",label:"Дом рыбака Эйнара",x:21,z:-7,rot:-Math.PI/2,sx:.95,sy:.94,sz:.65,w:8.85,d:6.85},
      {asset:hunterHouseAsset,id:"hunter",label:"Дом охотника Ульва",x:17,z:6,rot:-Math.PI/2,sx:.94,sy:.90,sz:.64,w:8.85,d:6.85},
      {asset:herbalistHouseAsset,id:"herbalist",label:"Дом травницы Сигрид",x:-8,z:-21,rot:0,sx:.91,sy:.88,sz:.62,w:8.85,d:6.85},
      {asset:craftsmanHouseAsset,id:"craftsman",label:"Дом ремесленника Торвальда",x:-22,z:-6,rot:Math.PI/2,sx:.86,sy:.82,sz:.64,w:8.85,d:6.85}
    ];
    // Front doors face local +Z. Rotate their approach points with the houses.
    const homeDestinations=villageHomes.map(p=>{
      const approach=p.d*HOME_SCALE/2+1.1;
      return {id:p.id,label:p.label,x:p.x+Math.sin(p.rot)*approach,z:p.z+Math.cos(p.rot)*approach,r:3.0};
    });
    // Each inhabited home owns one hinged door and one rigged host. Reuse the
    // four available character models for the other villagers until they have
    // distinct art; the house id still selects its own name and quest dialogue.
    const npcFileByHouse:Record<string,string>={
      warriorHouse:"NPC_Hunter_Rigged.glb",fisher2:"NPC_Carpenter_Rigged.glb",
      carpenter:"NPC_Carpenter_Rigged.glb",hunter2:"NPC_Ranger_Female_Rigged.glb",
      family:"NPC_Ranger_Female_Rigged.glb",house:"NPC_Hunter_Rigged.glb",
      fisher:"NPC_Carpenter_Rigged.glb",hunter:"NPC_Hunter_Rigged.glb",
      herbalist:"NPC_Herbalist_Rigged.glb",craftsman:"NPC_Carpenter_Rigged.glb"
    };
    type HomeHost={home:typeof villageHomes[number];pivot?:THREE.Group;doorPoint?:THREE.Vector3;
      handle?:THREE.Object3D;handleBase?:number;groundOffset?:number;
      actor?:THREE.Object3D;mixer?:THREE.AnimationMixer;actions?:Record<string,THREE.AnimationAction>;current?:string};
    const hosts=new Map<string,HomeHost>(villageHomes.map(home=>[home.id,{home}]));
    const npcAssets=new Map<string,any>();
    let doorVisit:{host:HomeHost;elapsed:number;start:THREE.Vector3;reach:THREE.Vector3;target:THREE.Vector3;spoken:boolean}|null=null;
    let outsideHost:HomeHost|null=null;
    let outsideSince=0;
    const playHost=(host:HomeHost,name:string)=>{
      if(host.current===name)return;
      const next=host.actions?.[name]||host.actions?.Idle;
      if(!next)return;
      if(host.current==="Walk"&&name!=="Walk")host.actions?.Walk?.stop();
      else if(host.current)host.actions?.[host.current]?.fadeOut(.16);
      next.reset().fadeIn(.16).play();host.current=name;
    };
    const prepareHost=(host:HomeHost)=>{
      const asset=npcAssets.get(npcFileByHouse[host.home.id]);
      if(!host.doorPoint||!asset||host.actor||!glbTreesAlive)return;
      const actor=cloneSkinned(asset.scene) as THREE.Object3D;
      actor.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;}});
      // Adjusted against Vika at the carpenter's door in the in-game capture.
      actor.scale.setScalar(1.85);
      const {rot}=host.home,point=host.doorPoint;
      host.groundOffset=0;
      actor.position.set(point.x-Math.sin(rot)*1.12,groundY(point.x,point.z)+host.groundOffset,
        point.z-Math.cos(rot)*1.12);
      actor.rotation.y=rot;
      actor.visible=false;scene.add(actor);
      const mixer=new THREE.AnimationMixer(actor);
      const actions:Record<string,THREE.AnimationAction>={};
      for(const clip of asset.animations||[])actions[clip.name]=mixer.clipAction(clip);
      host.actor=actor;host.mixer=mixer;host.actions=actions;
      playHost(host,"Idle");
    };
    for(const asset of new Set(Object.values(npcFileByHouse))){
      loadGlbWithFolderFallback(asset,gltf=>{
        if(!glbTreesAlive)return;
        npcAssets.set(asset,gltf);
        hosts.forEach(host=>{if(npcFileByHouse[host.home.id]===asset)prepareHost(host);});
      },`NPC ${asset}`);
    }

    // Village roads connect the front and rear gates.
    road([[0,43.5],[0,35],[0,27],[1,18],[1,9],[1,2]],2.35);
    road([[1,2],[0,-6],[0,-17],[0,-27],[0,-36]],2.35);
    // Join the unfinished straight trail by the wolf to the southern stone
    // bridge. Both endpoints are on the same z=-48 line; the missing 15 m
    // between x=-35 and x=-50 was why the path stopped in the grass.
    road([[0,-36],[0,-43],[-8,-49],[-24,-48],[-35,-48],[-42,-48],[-50,-48]],1.8);
    road([[0,1],[-5,1],[-10,-2.55]],1.6);
    // Side streets run in front of the relocated entrances.
    homeDestinations.forEach(p=>road([[0,p.z],[p.x*.5,p.z],[p.x,p.z]],1.5));

    // Outside junction at the gate. These curves first clear the front corners
    // of the palisade, then continue along its outer side instead of cutting through it.
    road([[0,44.5],[0,50],[0,58],[-2,67],[-5,75]],2.20);
    road([[0,49],[-10,49],[-20,49],[-28,48],[-34,44],[-35,36]],1.88);
    road([[0,49],[10,52],[18,55]],1.86);
    road([[18,55],[32,58],[42,59],[50,60]],1.62);
    road([[50,60],[55,68],[62,78]],1.48);

    // East side: deer glade, homes, camp and the southern sacred places.
    road([[0,49],[14,49],[27,48],[34,44],[35,36]],1.88);
    road([[35,36],[39,34],[43,32],[57,33],[68,36],[75,36],[80,36]],1.62);
    road([[35,36],[35,25],[35,14],[35,3],[35,-10],[35,-23],[35,-32]],1.72);
    road([[35,20],[46,15],[57,11],[68,8]],1.50);
    road([[35,-32],[43,-34],[51,-31],[58,-28]],1.54);
    road([[35,-32],[32,-42],[25,-52],[15,-62],[5,-70]],1.68);

    // West side on the village bank: Norns and the deep ash grove.
    // The trail by the river in front of the Norns' wheel bends north and
    // joins the northern bridge approach. It must not end at z=38 in grass.
    road([[-35,36],[-42,37],[-48,38],[-49,42],[-49,47],[NORTH_BRIDGE_X+BRIDGE_SPAN/2+1.8,NORTH_BRIDGE_Z]],1.55);
    // The forest-side trail must rejoin the northern crossing, not stop at
    // the lone spruce above the riverbank.
    road([[-35,44],[-39,54],[-43,64],[-45,75]],1.48);
    road([[-45,75],[-47,67],[-48,59],[NORTH_BRIDGE_X+BRIDGE_SPAN/2+.15,NORTH_BRIDGE_Z]],1.48);
    road([[-35,36],[-35,24],[-35,14],[-35,2],[-35,-10],[-35,-23],[-35,-32],[-40,-38],[-48,-44],[-50,-48]],1.72);
    // This short trail used to stop abruptly among the trees. Lead it back
    // into the path toward the northern bridge instead of leaving a cut edge.
    road([[-35,14],[-32,15],[-31,15],[-29,21],[-31,28],[-35,36]],1.42);

    // Meet the raised eastern bridge deck with an actual visible approach.
    // The old ground-height path ran beneath the bridge and disappeared at
    // its edge, leaving a sharp end in the grass on the eastern bank.
    road([[-50,-48],[-51,-48],[-52.5,-48]],2.05,BRIDGE_Y);
    // The river can be crossed only on the bridge. Beyond it a narrow
    // west-bank trail reaches the old farm, forest cache and Whispering Stone.
    road([[-64,-48],[-63,-48],[-61.5,-48]],2.05,BRIDGE_Y);
    road([[-64,-48],[-70,-48],[-72,-48]],1.58);
    road([[-64,-48],[-67,-40],[-68,-27],[-68,-11],[-65,8]],1.62);
    road([[-65,8],[-68,24],[-70,37],[-72,48]],1.50);
    // Continue the gravel under the near arch instead of ending in grass just
    // before the bridge. Overlap the stone landing by a short distance.
    road([[-35,44],[-42,49],[NORTH_BRIDGE_X+BRIDGE_SPAN/2+1.8,NORTH_BRIDGE_Z],[NORTH_BRIDGE_X+BRIDGE_SPAN/2-1.3,NORTH_BRIDGE_Z]],1.65,NORTH_BRIDGE_Y);
    road([[NORTH_BRIDGE_X-BRIDGE_SPAN/2-.15,NORTH_BRIDGE_Z],[-72,52],[-72,48]],1.55);

    const signTexture=(label:string)=>{
      const c=document.createElement("canvas");c.width=512;c.height=128;const ctx=c.getContext("2d")!;
      ctx.clearRect(0,0,512,128);ctx.font="900 60px Arial, sans-serif";ctx.textAlign="center";ctx.textBaseline="middle";
      ctx.lineJoin="round";ctx.lineWidth=9;ctx.strokeStyle="rgba(35,17,7,.96)";ctx.strokeText(label.toUpperCase(),256,66,474);
      ctx.fillStyle="#fff0c8";ctx.shadowColor="rgba(22,10,3,.95)";ctx.shadowBlur=4;ctx.fillText(label.toUpperCase(),256,66,474);
      const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=4;return tex;
    };
    const signBoardGeometry=()=>{
      const s=new THREE.Shape();s.moveTo(-1.65,-.34);s.lineTo(1.02,-.34);s.lineTo(1.58,0);s.lineTo(1.02,.34);s.lineTo(-1.65,.34);s.lineTo(-1.48,0);s.closePath();
      return new THREE.ExtrudeGeometry(s,{depth:.13,bevelEnabled:true,bevelSize:.045,bevelThickness:.035,bevelSegments:1});
    };
    const addSignpost=(x:number,z:number,entries:Array<{label:string;target:[number,number];color:number}>)=>{
      const g=new THREE.Group();g.position.set(x,groundY(x,z)+.04,z);
      const post=new THREE.Mesh(new THREE.CylinderGeometry(.10,.15,2.65,9),mat(0x5a351d,.96));post.position.y=1.32;post.castShadow=true;g.add(post);
      const cap=new THREE.Mesh(new THREE.ConeGeometry(.19,.27,8),mat(0x382113,.96));cap.position.y=2.77;g.add(cap);
      entries.forEach((entry,i)=>{
        const board=new THREE.Group();board.position.y=1.62+i*.45;board.scale.setScalar(.70);
        const dx=entry.target[0]-x,dz=entry.target[1]-z;board.rotation.y=Math.atan2(-dz,dx);
        const plank=new THREE.Mesh(signBoardGeometry(),mat(entry.color,.92));plank.castShadow=true;plank.receiveShadow=true;board.add(plank);
        const tex=signTexture(entry.label);
        const labelMaterial=new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,side:THREE.FrontSide});
        const front=new THREE.Mesh(new THREE.PlaneGeometry(2.92,.56),labelMaterial);front.position.set(-.08,0,.205);board.add(front);
        // A second, normally oriented label prevents mirrored writing when the
        // player approaches the sign from behind.
        const back=new THREE.Mesh(new THREE.PlaneGeometry(2.92,.56),labelMaterial.clone());back.position.set(-.08,0,-.075);back.rotation.y=Math.PI;board.add(back);
        const nailMat=mat(0x2b211a,.55);
        for(const nx of [-1.25,.72]){const nail=new THREE.Mesh(new THREE.CylinderGeometry(.045,.045,.045,7),nailMat);nail.rotation.x=Math.PI/2;nail.position.set(nx,0,.225);board.add(nail);}
        g.add(board);
      });
      scene.add(g);
    };
    addSignpost(-4,7,[{label:"Кузница",target:[-10,-3],color:0x875229},{label:"Ворота",target:[0,44],color:0x6d4325},{label:"Мимир",target:[1,0],color:0x775035}]);
    addSignpost(2,31,[{label:"Площадь",target:[1,8],color:0x875229},{label:"Ворота",target:[0,44],color:0x6d4325}]);
    addSignpost(1,53,[{label:"Поле Рун",target:[18,55],color:0x6e4325},{label:"Роща Ясеня",target:[-5,75],color:0x57452d}]);
    addSignpost(-35,38,[{label:"Норны",target:[-49,38],color:0x694126},{label:"Мост",target:[-57,-48],color:0x59442f}]);
    addSignpost(-67,-41,[{label:"Камень Шёпота",target:[-72,-48],color:0x744025},{label:"Старый хутор",target:[-65,8],color:0x83562f},{label:"Мост",target:[-57,-48],color:0x5d4934}]);
    addSignpost(35,39,[{label:"Дом героя",target:[75,33],color:0x80502d},{label:"Камень Феху",target:[50,60],color:0x89522c}]);
    addSignpost(36,-26,[{label:"Три Норны",target:[58,-28],color:0x67472e},{label:"Круг силы",target:[5,-70],color:0x744a29},{label:"Деревня",target:[0,44],color:0x8a5a32}]);
    addSignpost(-38,47,[{label:northBridgeRepaired?"Северный мост":"Мост закрыт",target:[NORTH_BRIDGE_X,NORTH_BRIDGE_Z],color:0x625e54}]);

    const woodTex=canvasTex("wood");woodTex.repeat.set(2,1);
    const roofTex=canvasTex("roof");roofTex.repeat.set(2,2);

    // Work in model coordinates so repairs follow the model's later world scale.
    const repairBuilding=(root:THREE.Object3D)=>{
      if(root.userData.buildingRepaired)return;
      root.userData.buildingRepaired=true;root.updateWorldMatrix(true,true);
      const inverse=root.matrixWorld.clone().invert();
      const meshes:THREE.Mesh[]=[];root.traverse(o=>{if((o as THREE.Mesh).isMesh)meshes.push(o as THREE.Mesh);});
      const localGeometry=(o:THREE.Mesh)=>o.geometry.clone().applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse,o.matrixWorld));
      const localBounds=(o:THREE.Mesh)=>{const g=localGeometry(o);g.computeBoundingBox();const b=g.boundingBox!.clone();g.dispose();return b;};
      const rewrite=(o:THREE.Mesh,change:(v:THREE.Vector3)=>void)=>{
        const g=localGeometry(o),p=g.attributes.position,v=new THREE.Vector3();
        for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);change(v);p.setXYZ(i,v.x,v.y,v.z);}
        // Convert back to mesh coordinates without changing siblings or shared source geometry.
        g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse,o.matrixWorld).invert());
        g.computeVertexNormals();g.computeBoundingBox();g.computeBoundingSphere();o.geometry=g;
      };
      // This asset's wing roof was authored at Z=0 while its wing ends at Z=4.46.
      const wing=meshes.find(o=>/^Herbalist_Wing$/.test(o.name));
      if(wing){const center=localBounds(wing).getCenter(new THREE.Vector3());
        meshes.filter(o=>/Herbalist_Wing_Roof/.test(o.name)).forEach(o=>rewrite(o,v=>{v.x+=center.x;v.z+=center.z;}));
        meshes.filter(o=>/Herbalist_Wing_Gable/.test(o.name)).forEach(o=>rewrite(o,v=>{v.x+=center.x;}));}
      // The hero home's roof was narrower than its outer walls.
      if(meshes.some(o=>o.name==="FrontWall_AboveDoor")){
        meshes.filter(o=>/^Roof_[LR]$/.test(o.name)).forEach(o=>rewrite(o,v=>{v.x*=1.28;}));
      }
      const windows=meshes.filter(o=>{
        const mats=Array.isArray(o.material)?o.material:[o.material];
        return /win/i.test(o.name)&&mats.some(m=>/window/i.test(m.name)&&!/dark|beam/i.test(m.name));
      }).map(o=>({o,center:localBounds(o).getCenter(new THREE.Vector3())}));
      // Move glazing and its frame together around the same centre.
      meshes.filter(o=>/window|win[lrvh\d_-]|upperwin|lwin|rwin/i.test(o.name)).forEach(o=>{
        if(!windows.length)return;const c=localBounds(o).getCenter(new THREE.Vector3());
        const nearest=windows.reduce((a,b)=>c.distanceToSquared(a.center)<c.distanceToSquared(b.center)?a:b);
        if(c.distanceTo(nearest.center)>1.1)return;
        rewrite(o,v=>{v.x=nearest.center.x+(v.x-nearest.center.x)*1.25;});
      });
      const doors=meshes.filter(o=>/(^Door$|^Main_Door$|^Side_Door$|_Door$|^DoorRecess$)/i.test(o.name))
        .map(o=>({o,center:localBounds(o).getCenter(new THREE.Vector3())}));
      meshes.filter(o=>/door/i.test(o.name)&&!/wall|above/i.test(o.name)).forEach(o=>{
        if(!doors.length)return;const c=localBounds(o).getCenter(new THREE.Vector3());
        const near=doors.reduce((a,b)=>c.distanceToSquared(a.center)<c.distanceToSquared(b.center)?a:b);
        rewrite(o,v=>{v.x=near.center.x+(v.x-near.center.x)*1.20;});
      });
      // Replace short/stepped gables with solid profiles meeting the actual roof surface.
      const roofMeshes=meshes.filter(o=>/roof|aframe|thatch/i.test(o.name)&&!/ridge|batten|beam|tower|lip/i.test(o.name));
      const probes=roofMeshes.map(o=>{const m=new THREE.Mesh(localGeometry(o),new THREE.MeshBasicMaterial({side:THREE.DoubleSide}));m.updateMatrixWorld(true);return m;});
      const gables=meshes.filter(o=>/gable/i.test(o.name)&&!/window|(?:^|_)win(?:_|$)|frame|beam/i.test(o.name));
      const groups:{items:THREE.Mesh[];bounds:THREE.Box3}[]=[];
      gables.forEach(o=>{const b=localBounds(o),z=b.getCenter(new THREE.Vector3()).z;
        const group=groups.find(g=>Math.abs(g.bounds.getCenter(new THREE.Vector3()).z-z)<.22);
        if(group){group.items.push(o);group.bounds.union(b);}else groups.push({items:[o],bounds:b});});
      const ray=new THREE.Raycaster(),down=new THREE.Vector3(0,-1,0);
      groups.forEach(({items,bounds})=>{
        const z=bounds.getCenter(new THREE.Vector3()).z,base=bounds.min.y;
        const outline:THREE.Vector2[]=[];
        for(let i=0;i<=48;i++){
          const x=THREE.MathUtils.lerp(bounds.min.x,bounds.max.x,i/48);
          ray.set(new THREE.Vector3(x,100,z),down);
          const hit=ray.intersectObjects(probes,false)[0];
          if(!hit||hit.point.y<base)return; // Keep original if this is not beneath a roof.
          outline.push(new THREE.Vector2(x,hit.point.y-.035));
        }
        const shape=new THREE.Shape();shape.moveTo(bounds.min.x,base);
        outline.forEach(p=>shape.lineTo(p.x,p.y));shape.lineTo(bounds.max.x,base);shape.closePath();
        const geometry=new THREE.ExtrudeGeometry(shape,{depth:Math.max(.16,bounds.max.z-bounds.min.z),bevelEnabled:false,steps:1});
        geometry.translate(0,0,bounds.min.z);
        const first=items[0],material=(Array.isArray(first.material)?first.material[0]:first.material).clone();
        const fill=new THREE.Mesh(geometry,material);fill.name=first.name+"_FittedWall";fill.castShadow=true;fill.receiveShadow=true;
        items.forEach(o=>o.visible=false);root.add(fill);
      });
      probes.forEach(o=>{o.geometry.dispose();(o.material as THREE.Material).dispose();});
      root.updateWorldMatrix(true,true);
    };

    const homeMaterials:{material:THREE.MeshStandardMaterial;key:"wall"|"roof"|"forge"|"elder"}[]=[];
    const homeTextures:Record<"wall"|"roof"|"forge"|"elder",THREE.Texture|null>={wall:null,roof:null,forge:null,elder:null};
    const setHomeMap=(material:THREE.MeshStandardMaterial,texture:THREE.Texture)=>{
      material.map=texture;material.color.setHex(0xffffff);material.roughness=.95;
      material.bumpMap=null;material.roughnessMap=null;material.needsUpdate=true;
    };
    const loadHomeTexture=(name:string,key:"wall"|"roof"|"forge"|"elder")=>new THREE.TextureLoader().load(`${BASE}img/models/${name}`,texture=>{
      if(!glbTreesAlive){texture.dispose();return;}
      texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
      texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());texture.needsUpdate=true;
      homeTextures[key]=texture;
      homeMaterials.filter(p=>p.key===key).forEach(p=>setHomeMap(p.material,texture));
    },undefined,()=>console.warn(`House texture unavailable: ${name}`));
    const pendingHomeBrick=loadHomeTexture("T_RedBrick_BaseColor1.png","wall");
    const pendingHomeRoof=loadHomeTexture("T_RoundTilesBaseColorr1.png","roof");
    const pendingForgeStone=loadHomeTexture("T_Forge_WhiteStone.png","forge");
    const pendingElderBrick=loadHomeTexture("T_Elder_SandBrick.png","elder");
    const applyHomeTextures=(root:THREE.Object3D,theme:"wall"|"forge"|"elder"="wall")=>{
      repairBuilding(root);
      root.updateWorldMatrix(true,true);
      root.traverse((o:any)=>{
        if(!o.isMesh)return;
        const name=String(o.name),materials=Array.isArray(o.material)?o.material:[o.material];
        const roof=/roof|aframe|canopy|thatch/i.test(name)&&!/ridge|batten|beam/i.test(name);
        const wall=(theme==="forge"&&/foundation|buttress|pillar|jamb|lintel|crown|chimney|main_block|hearth_base/i.test(name))||/wall|gable|main(?:$|_block)|barn_(?:left|right)side|stonebase|upper$|keep|wing$|tower(?!roof|window|band)|chimney(?!cap)|^cabin$|hunter_base|left_stone/i.test(name);
        if(!roof&&!wall)return;
        if(/window|door|frame|beam|post|rail|step|porch|platform|foundation/i.test(name)&&!roof&&theme!=="forge")return;
        const geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();
        const pos=geo.attributes.position,uv=new Float32Array(pos.count*2);
        const pts=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()],n=new THREE.Vector3(),a=new THREE.Vector3(),b=new THREE.Vector3();
        // World-size projection avoids stretching on houses of different sizes.
        for(let i=0;i<pos.count;i+=3){
          for(let k=0;k<3;k++)pts[k].fromBufferAttribute(pos,i+k).applyMatrix4(o.matrixWorld);
          n.crossVectors(a.subVectors(pts[1],pts[0]),b.subVectors(pts[2],pts[0])).normalize();
          const top=Math.abs(n.y)>.5,side=Math.abs(n.x)>Math.abs(n.z);
          for(let k=0;k<3;k++){
            const v=pts[k];uv[(i+k)*2]=(top?v.z:side?v.z:v.x)/3.2;
            uv[(i+k)*2+1]=(top?v.x:v.y)/3.2;
          }
        }
        geo.setAttribute("uv",new THREE.BufferAttribute(uv,2));o.geometry=geo;
        const changed=materials.map((m:THREE.MeshStandardMaterial)=>{
          const material=m.clone(),key=roof?"roof":theme;homeMaterials.push({material,key});
          const texture=homeTextures[key];if(texture)setHomeMap(material,texture);
          return material;
        });
        o.material=Array.isArray(o.material)?changed:changed[0];
      });
    };

    // Detailed Nordic longhouse.
    const house=(x:number,z:number,w:number,d:number,rot:number,label:string,id:string,wallColor:number,roofColor:number)=>{
      const g=new THREE.Group(); g.rotation.y=rot; g.position.set(x,groundY(x,z),z); g.userData={id,label}; g.scale.set(HOME_SCALE,HOME_SCALE*BUILDING_HEIGHT,HOME_SCALE);
      const logMat=new THREE.MeshStandardMaterial({name:"HouseWall",map:woodTex,color:wallColor,roughness:.94,roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.014});
      const foundation=box(w+.7,.55,d+.7,0x575a53,1); foundation.position.y=.28; g.add(foundation);

      // Seven courses of rounded logs, with alternating corner overlap.
      for(let row=0;row<7;row++){
        const yy=.62+row*.47;
        const front=log(w-(row%2)*.20,.29,wallColor); front.material=logMat;front.name="HouseWall";
        front.position.set(0,yy,d*.5-.03); g.add(front);
        const back=front.clone(); back.position.z=-d*.5+.03; g.add(back);
        const left=log(d+.06,.29,wallColor); left.material=logMat;left.name="HouseWall"; left.rotation.y=Math.PI/2;
        left.position.set(-w*.5+.03,yy,0); g.add(left);
        const right=left.clone(); right.position.x=w*.5-.03; g.add(right);
      }

      for(const px of [-w*.5,w*.5]) for(const pz of [-d*.5,d*.5]){
        const post=cyl(.34,3.75,0x352419,8,1); post.position.set(px,2.05,pz); g.add(post);
      }

      const door=box(1.18,2.05,.18,0x241812,1); door.position.set(0,1.37,d*.5+.31); g.add(door);
      for(const px of [-.67,.67]){
        const frame=box(.15,2.28,.24,0x3a291d,1); frame.position.set(px,1.42,d*.5+.34); g.add(frame);
      }
      const lintel=log(1.65,.11,0x38261a); lintel.position.set(0,2.53,d*.5+.34); g.add(lintel);
      const handle=cyl(.055,.12,0xc69a52,8,.55); handle.rotation.z=Math.PI/2; handle.position.set(.33,1.38,d*.5+.43); g.add(handle);

      const windowMat=new THREE.MeshStandardMaterial({color:0xe4ae58,emissive:0x9a5d1e,emissiveIntensity:1.5,roughness:.45});
      for(const px of [-w*.27,w*.27]){
        const frame=box(1.28,1.02,.13,0x302219,1); frame.position.set(px,2.02,d*.5+.29); g.add(frame);
        const win=box(.94,.70,.055,0xe8b75f,.45); win.material=windowMat; win.position.set(px,2.02,d*.5+.36); g.add(win);
        const v=box(.07,.78,.09,0x302219,1); v.position.set(px,2.02,d*.5+.40); g.add(v);
        const hh=box(1.05,.07,.09,0x302219,1); hh.position.set(px,2.02,d*.5+.40); g.add(hh);
      }

      const roof=roofSlope(w+1.55,d+1.35,roofColor); roof.position.y=4.18;roof.traverse(o=>{if((o as THREE.Mesh).isMesh)o.name="HouseRoof";}); g.add(roof);
      // Heavy eaves and a real ridge make the silhouette unmistakably Nordic.
      for(const ex of [-1,1]){
        const eave=log(d+1.48,.12,0x30231b);
        eave.position.set(ex*(w*.46),3.78,0);
        eave.rotation.y=Math.PI/2;
        g.add(eave);
      }
      const ridge=log(d+1.45,.18,0x2a201a); ridge.rotation.y=Math.PI/2; ridge.position.y=5.28; g.add(ridge);

      const porch=box(w*.34,.16,1.05,0x62422b,1); porch.position.set(0,.64,d*.5+.66); g.add(porch);
      for(const px of [-w*.16,w*.16]){
        const p=log(.85,.08,0x49301f); p.rotation.y=Math.PI/2; p.position.set(px,.83,d*.5+.95); g.add(p);
      }

      const chimney=cyl(.34,2.0,0x57534e,8,1); chimney.position.set(w*.25,5.05,-d*.10); g.add(chimney);
      const cap=box(.72,.14,.72,0x302d29,1); cap.position.set(w*.25,6.08,-d*.10); g.add(cap);

      addMesh(g,id,label); objects.push(g); addRectCollider(x,z,(w+.85)*HOME_SCALE,(d+.85)*HOME_SCALE,rot,.05);applyHomeTextures(g);
      return g;
    };

    // One layout is authoritative for the enlarged buildings and their entrances.
    villageHomes.forEach(p=>{
      addRectCollider(p.x,p.z,p.w*HOME_SCALE,p.d*HOME_SCALE,p.rot,.05);
      loadGlbWithFolderFallback(p.asset,(gltf:any)=>{
        if(!glbTreesAlive)return;
        const model=gltf.scene.clone(true);markMeshes(model);
        model.scale.set(p.sx*HOME_SCALE,p.sy*HOME_SCALE*BUILDING_HEIGHT,p.sz*HOME_SCALE);
        model.rotation.y=p.rot;model.position.set(p.x,groundY(p.x,p.z),p.z);
        addMesh(model,p.id,p.label);objects.push(model);applyHomeTextures(model,p.id==="house"?"elder":"wall");
        const host=hosts.get(p.id)!;
        model.updateWorldMatrix(true,true);
        const toModel=model.matrixWorld.clone().invert();
        const localBox=(mesh:THREE.Mesh)=>{
          mesh.geometry.computeBoundingBox();
          return mesh.geometry.boundingBox!.clone().applyMatrix4(new THREE.Matrix4().multiplyMatrices(toModel,mesh.matrixWorld));
        };
        const doors:THREE.Mesh[]=[];
        model.traverse((o:any)=>{if(o.isMesh&&/(^|_)Door$/i.test(o.name)&&!/^Side_Door$/i.test(o.name))doors.push(o);});
        doors.sort((a,b)=>(/Main_Door/i.test(b.name)?1:0)-(/Main_Door/i.test(a.name)?1:0)||localBox(b).getCenter(new THREE.Vector3()).z-localBox(a).getCenter(new THREE.Vector3()).z);
        const leaf=doors[0];
        const doorBounds=leaf?localBox(leaf):new THREE.Box3(new THREE.Vector3(-.58,.3,p.d*.5),new THREE.Vector3(.58,2.4,p.d*.5+.16));
        const centre=doorBounds.getCenter(new THREE.Vector3());
        const pivot=new THREE.Group();pivot.name=`${p.id}_working_door`;
        pivot.position.set(doorBounds.min.x,0,centre.z);model.add(pivot);
        model.updateWorldMatrix(true,true);
        if(leaf){
          pivot.attach(leaf);
          const handle=model.getObjectByName("Door_Handle") as THREE.Mesh|null;
          if(handle&&handle!==leaf&&localBox(handle).getCenter(new THREE.Vector3()).distanceTo(centre)<2){
            pivot.attach(handle);host.handle=handle;host.handleBase=handle.rotation.z;
          }
        }else{
          const replacement=box(doorBounds.max.x-doorBounds.min.x,doorBounds.max.y-doorBounds.min.y,.13,0x34251a,1);
          replacement.position.set((doorBounds.max.x-doorBounds.min.x)/2,centre.y,.02);pivot.add(replacement);
          const knob=new THREE.Mesh(new THREE.SphereGeometry(.07,8,6),mat(0xb89152,.6));
          knob.position.set((doorBounds.max.x-doorBounds.min.x)*.78,centre.y,.12);pivot.add(knob);
          host.handle=knob;host.handleBase=0;
        }
        if(!host.handle){
          const lever=new THREE.Group();lever.position.set((doorBounds.max.x-doorBounds.min.x)*.76,centre.y,.15);
          const mount=new THREE.Mesh(new THREE.SphereGeometry(.065,8,6),mat(0xb89152,.55));lever.add(mount);
          const grip=new THREE.Mesh(new THREE.CylinderGeometry(.027,.027,.23,8),mat(0xc49c58,.55));
          grip.rotation.z=Math.PI/2;grip.position.x=.10;lever.add(grip);
          pivot.add(lever);host.handle=lever;host.handleBase=0;
        }
        host.pivot=pivot;
        const doorPoint=model.localToWorld(new THREE.Vector3(centre.x,0,centre.z+.14));
        host.doorPoint=doorPoint;
        const marker=homeDestinations.find(d=>d.id===p.id);
        if(marker){marker.x=doorPoint.x+Math.sin(p.rot)*1.65;marker.z=doorPoint.z+Math.cos(p.rot)*1.65;}
        prepareHost(host);
      },p.label);
    });

    // GLB blacksmith forge — replaces the old procedural smithy.
    // Keep the same location, interaction id, collision footprint and warm fire light.
    loadGlbWithFolderFallback(forgeAsset, (gltf:any) => {
      if (!glbTreesAlive) return;

      const forgeModel = gltf.scene.clone(true);
      markMeshes(forgeModel);

      forgeModel.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.castShadow = true;
        o.receiveShadow = true;
        o.frustumCulled = true;
      });

      // Source is compact (~6 x 6 m). Slightly widen it so it reads well
      // on the existing smithy plot without becoming oversized.
      forgeModel.scale.set(1.14,1.08*BUILDING_HEIGHT,1.02);
      forgeModel.rotation.set(0, 0, 0);
      forgeModel.position.set(-10, groundY(-10,-5), -5);
      forgeModel.userData = { id:"forge", label:"Кузница" };

      addMesh(forgeModel,"forge","Кузница");applyHomeTextures(forgeModel,"forge");
      console.log('[FORGE] loaded', `${BASE}img/models/${forgeAsset}`);
    }, 'FORGE');

    // Real weapon models outside the forge, with the handles resting on a wooden rack.
    const weaponRack=new THREE.Group();
    weaponRack.position.set(-6.45,groundY(-6.45,-2.3),-2.3);
    weaponRack.rotation.y=-.35;
    for(const offset of [-.85,.85]){
      const post=new THREE.Mesh(new THREE.CylinderGeometry(.09,.13,1.55,7),midMat(0x593a24,1));
      post.position.set(offset,.79,0);weaponRack.add(post);
    }
    for(const height of [.46,1.27]){
      const rail=new THREE.Mesh(new THREE.BoxGeometry(2.05,.12,.17),midMat(0x68452b,1));
      rail.position.y=height;weaponRack.add(rail);
    }
    scene.add(weaponRack);
    ([['Sword.glb',-.58,1.32],['Axe.glb',0,1.16],['Spear.glb',.61,1.65]] as Array<[string,number,number]>).forEach(([asset,x,height])=>{
      loadGlbWithFolderFallback(asset,(gltf:any)=>{
        if(!glbTreesAlive)return;
        const item=gltf.scene;
        textureSteelOnWeapon(item,asset);
        item.updateMatrixWorld(true);
        const bounds=new THREE.Box3().setFromObject(item);
        const size=bounds.getSize(new THREE.Vector3());
        if(size.y<.001)return;
        const center=bounds.getCenter(new THREE.Vector3());
        const holder=new THREE.Group();
        item.position.set(-center.x,-bounds.min.y,-center.z);
        holder.add(item);
        holder.scale.setScalar(height/size.y);
        holder.position.set(x,.13,.18);
        holder.rotation.z=x<0?-.12:.12;
        holder.traverse((o:any)=>{if(o.isMesh)o.castShadow=true;});
        weaponRack.add(holder);
      },'FORGE WEAPON');
    });

    // A lightweight working door sits over the dark forge entrance. It swings
    // open before the UI transition, while the original doorway remains as the
    // shadowed interior behind it.
    const forgeDoorPivot=new THREE.Group();
    // The hinge must sit in the facade plane. The previous z=-1.62 placed the
    // leaf well in front of the porch, so it looked detached from the doorway.
    forgeDoorPivot.position.set(-10-.92*1.2,groundY(-10,-5)+1.38*BUILDING_HEIGHT,-2.72);forgeDoorPivot.scale.set(1.2,BUILDING_HEIGHT,1);
    const forgeDoor=new THREE.Mesh(new THREE.BoxGeometry(1.84,2.76,.14),mat(0x392318,.82,.04));
    forgeDoor.position.x=.92;
    forgeDoorPivot.add(forgeDoor);
    const forgeDoorTrim=new THREE.Mesh(new THREE.BoxGeometry(1.58,2.48,.04),mat(0x50321e,.88,.02));
    forgeDoorTrim.position.set(.92,0,.09);
    forgeDoorPivot.add(forgeDoorTrim);
    const forgeHandle=new THREE.Mesh(new THREE.SphereGeometry(.10,10,8),mat(0xb27635,.42,.72));
    forgeHandle.position.set(1.54,-.02,.17);
    forgeDoorPivot.add(forgeHandle);
    addMesh(forgeDoorPivot,"forge","Дверь кузницы");
    let forgeDoorProgress=0;
    let forgeDoorOpening=false;
    let forgeDoorEntered=false;
    let forgeEntryPosition={x:start.x,z:start.z};
    forgeActionRef.current=()=>{
      if(forgeDoorOpening)return;
      forgeEntryPosition={x:state.current.x,z:state.current.z};
      state.current.dx=0;state.current.dz=0;
      forgeDoorOpening=true;
      forgeDoorEntered=false;
    };

    addRectCollider(-10,-5,9.6,6.6,0,.05);

    // Preserve the real point light so the fire glows on the surrounding ground
    // even though the visible furnace itself is part of the GLB.
    const forgeLight=new THREE.PointLight(0xff7a32,3.2,14,2);
    forgeLight.position.set(-10,groundY(-10,-5)+1.75,-3.8);
    scene.add(forgeLight);

    // Keep the stone edging around Mimir's well; the grass stays visible.
    for(let i=0;i<18;i++){const a=i/18*Math.PI*2;const s=new THREE.Mesh(new THREE.DodecahedronGeometry(.38,1),sacredStoneMaterials[i%3]);s.position.set(1+Math.cos(a)*8.8,groundY(1+Math.cos(a)*8.8,Math.sin(a)*8.8)+.22,Math.sin(a)*8.8);scene.add(s);}
    const fire=(x:number,z:number,scale:number)=>{const g=new THREE.Group();g.position.set(x,groundY(x,z),z);for(let i=0;i<7;i++){const a=i/7*Math.PI*2;const s=new THREE.Mesh(new THREE.DodecahedronGeometry(.32*scale,1),mat(0x5d5a52,1));s.position.set(Math.cos(a)*.7*scale,.25*scale,Math.sin(a)*.7*scale);g.add(s);}const log1=box(.2*scale,.2*scale,1.5*scale,0x4a2d1b,1),log2=log1.clone();log1.rotation.y=.55;log2.rotation.y=-.55;log1.position.y=log2.position.y=.38*scale;g.add(log1,log2);const fm=new THREE.MeshStandardMaterial({color:0xff8128,emissive:0xff4d0a,emissiveIntensity:4});const flame=new THREE.Mesh(new THREE.ConeGeometry(.5*scale,1.35*scale,8),fm);flame.position.y=1.02*scale;g.add(flame);scene.add(g);const light=new THREE.PointLight(0xff8a3c,2.4*scale,12*scale,2);light.position.set(x,groundY(x,z)+2*scale,z);scene.add(light);fires.push({light,flame,phase:midHash(x,z)*8});return g;};
    // Village center: Mimir's well replaces the bonfire; the existing 18-stone circle stays.
    const villageMimir=new THREE.Group();
    villageMimir.userData={id:"mimir",label:"Колодец Мимира"};
    villageMimir.position.set(1,groundY(1,0),0);

    const villageWellWater=new THREE.Mesh(
      new THREE.CircleGeometry(1.18,32),
      new THREE.MeshStandardMaterial({color:0xcdefff,emissive:0x082128,emissiveIntensity:.15,roughness:.23,metalness:.06})
    );
    const fallbackWellWaterMaterial=villageWellWater.material as THREE.MeshStandardMaterial;
    mimirWaterMaterials.push(fallbackWellWaterMaterial);
    if(mimirWaterTexture){fallbackWellWaterMaterial.map=mimirWaterTexture;fallbackWellWaterMaterial.needsUpdate=true;}
    villageWellWater.rotation.x=-Math.PI/2; villageWellWater.position.y=.5; villageMimir.add(villageWellWater);

    for(let i=0;i<3;i++){
      const ripple=new THREE.Mesh(
        new THREE.TorusGeometry(.38+i*.28,.025,6,40),
        new THREE.MeshBasicMaterial({color:i===0?0x8eeeff:0x6bd7df,transparent:true,opacity:.42,depthWrite:false})
      );
      ripple.rotation.x=Math.PI/2; ripple.position.y=.525; villageMimir.add(ripple);
    }

    for(const px of [-1.35,1.35]){
      const p=box(.24,3.0,.24,0x4a3020,1);
      p.position.set(px,1.55,0); villageMimir.add(p);
    }

    const villageWellBeam=box(3.15,.26,.26,0x382519,1);
    villageWellBeam.position.y=2.96; villageMimir.add(villageWellBeam);

    const villageRope=new THREE.Mesh(
      new THREE.CylinderGeometry(.035,.035,1.2,6),mat(0x7b6248,1)
    );
    villageRope.position.y=2.25; villageMimir.add(villageRope);

    const villageBucket=box(.58,.5,.58,0x5a3b27,1);
    villageBucket.position.set(0,1.65,0); villageMimir.add(villageBucket);

    const villageWellHalo=new THREE.Mesh(
      new THREE.TorusGeometry(1.55,.055,8,48),
      new THREE.MeshStandardMaterial({color:0x76e59c,emissive:0x287c48,emissiveIntensity:3,roughness:.5})
    );
    villageWellHalo.rotation.x=Math.PI/2; villageWellHalo.position.y=.54; villageMimir.add(villageWellHalo);

    addMesh(villageMimir,"mimir","Колодец Мимира"); objects.push(villageMimir);
    addCircleCollider(1,0,3.8,.08);

    const villageMimirLight=new THREE.PointLight(0x72d9ee,2.0,12,2);
    villageMimirLight.position.set(1,groundY(1,0)+2.2,0); scene.add(villageMimirLight);

    loadGlbWithFolderFallback(mimirWellAsset,(gltf:any)=>{
      if(!glbTreesAlive)return;
      const model=gltf.scene.clone(true);markMeshes(model);
      model.scale.setScalar(.76);
      model.rotation.set(0,0,0);
      model.position.set(1,groundY(1,0),0);
      model.updateWorldMatrix(true,true);
      // This GLB contains no normals. Unlit maps retain their gold and blue
      // colors even on its vertical ring and shallow pool.
      const gold=new THREE.MeshBasicMaterial({color:0xffffff,side:THREE.DoubleSide,toneMapped:false});
      const water=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.94,side:THREE.DoubleSide,toneMapped:false});
      mimirGoldMaterials.push(gold);mimirWaterMaterials.push(water);
      if(mimirGoldTexture)gold.map=mimirGoldTexture;
      if(mimirWaterTexture)water.map=mimirWaterTexture;
      model.traverse((o:any)=>{
        if(!o.isMesh)return;
        o.visible=!/^Mimir_(Barrel|Crate)$/.test(o.name);o.castShadow=true;o.receiveShadow=true;o.frustumCulled=true;
        const name=String(o.name);
        const isWater=/^Mimir_(Pool|Waterfall|Stream)$/.test(name);
        const isGold=/^Mimir_(Base|InnerFloor)$/.test(name)||/^RingStone_/.test(name);
        if(!isWater&&!isGold)return;
        // The GLB has positions but no UVs. Project each triangle along its
        // dominant face so the supplied photographs appear on every surface.
        const geometry=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();
        const pos=geometry.getAttribute("position");
        const uvs=new Float32Array(pos.count*2);
        const pts=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()];
        const a=new THREE.Vector3(),b=new THREE.Vector3(),normal=new THREE.Vector3();
        for(let i=0;i<pos.count;i+=3){
          for(let k=0;k<3;k++)pts[k].fromBufferAttribute(pos,i+k).applyMatrix4(o.matrixWorld);
          normal.crossVectors(a.subVectors(pts[1],pts[0]),b.subVectors(pts[2],pts[0])).normalize();
          const top=Math.abs(normal.y)>.5,side=Math.abs(normal.x)>Math.abs(normal.z);
          for(let k=0;k<3;k++){
            const p=pts[k];uvs[(i+k)*2]=(top?p.x:side?p.z:p.x)/2.4;
            uvs[(i+k)*2+1]=(top?p.z:p.y)/2.4;
          }
        }
        geometry.setAttribute("uv",new THREE.BufferAttribute(uvs,2));
        geometry.computeVertexNormals();
        o.geometry=geometry;o.material=isWater?water:gold;
        if(isWater){o.castShadow=false;o.receiveShadow=false;}
      });
      model.userData={id:"mimir",label:"Колодец Мимира"};
      villageMimir.visible=false;
      addMesh(model,"mimir","Колодец Мимира");objects.push(model);
      console.log('[MIMIR WELL] loaded',`${BASE}img/models/${mimirWellAsset}`);
    },'MIMIR WELL');

    fire(18,-15,.72);

    // Outer settlement: farms, workshops and service yards make the village read as a place,
    // not a handful of buildings. These are deliberately lightweight so the scene remains mobile-friendly.
    // Small yard fences removed. The village boundary is now defined by the main palisade.
    const shed=(x:number,z:number,w:number,d:number,rot:number,label:string,id:string)=>{
      const g=new THREE.Group(); g.position.set(x,groundY(x,z),z); g.rotation.y=rot; g.userData={id,label};
      const base=box(w+.25,.35,d+.25,0x555148,1);base.position.y=.18;g.add(base);
      const wall=new THREE.Mesh(new THREE.BoxGeometry(w,2.5,d),new THREE.MeshStandardMaterial({map:woodTex,color:0x62442f,roughness:1}));wall.position.y=1.45;g.add(wall);
      const roof=new THREE.Mesh(new THREE.BoxGeometry(w+.6,.18,d+.65),new THREE.MeshStandardMaterial({map:roofTex,color:0x292724,roughness:1}));roof.rotation.z=.55;roof.position.set(-.16,3.0,0);g.add(roof);
      const roof2=roof.clone();roof2.rotation.z=-.55;roof2.position.x=.16;g.add(roof2);
      const door=box(1.05,1.75,.12,0x2a1c14,1);door.position.set(0,1.05,d/2+.07);g.add(door);
      addMesh(g,id,label);objects.push(g);addRectCollider(x,z,w+.55,d+.55,rot,.04);
    };
    const hay=(x:number,z:number,s=1)=>{
      const g=new THREE.Group();g.position.set(x,groundY(x,z),z);
      const bale=new THREE.Mesh(new THREE.CylinderGeometry(.65*s,.65*s,1.2*s,10),mat(0x8a7441,1));bale.rotation.z=Math.PI/2;bale.position.y=.62*s;g.add(bale);
      for(let i=0;i<3;i++){const rope=new THREE.Mesh(new THREE.TorusGeometry(.66*s,.025*s,5,18),mat(0x594a2d,1));rope.rotation.y=Math.PI/2;rope.position.y=(.28+i*.34)*s;g.add(rope);}
      addMesh(g);
    };
    // Northern farm quarter.
    // Replace only the main village Barn and Shed with their GLB models.
    // The fisherman's storage and old abandoned barn stay procedural for now.
    loadGlbWithFolderFallback(barnAsset, (gltf:any) => {
      if (!glbTreesAlive) return;
      const barnModel = gltf.scene.clone(true);
      markMeshes(barnModel);
      barnModel.traverse((o:any) => {
        if (!o.isMesh) return;
        // Leave the three stalls open toward the village path.
        o.visible = !/^Barn_(?:PenRail_|Gate_Diag_)/.test(o.name);
        o.castShadow = true;
        o.receiveShadow = true;
        o.frustumCulled = true;
      });
      barnModel.scale.set(.84*HOME_SCALE,.90*HOME_SCALE*BUILDING_HEIGHT,.70*HOME_SCALE);
      barnModel.rotation.set(0,Math.PI/2,0);
      barnModel.position.set(-19,groundY(-19,35),35);
      barnModel.userData={id:"barn",label:"Амбар"};
      addMesh(barnModel,"barn","Амбар");applyHomeTextures(barnModel);
      objects.push(barnModel);
      console.log('[BARN] loaded', `${BASE}img/models/${barnAsset}`);
    }, 'BARN');
    addRectCollider(-19,35,8.55*HOME_SCALE,5.25*HOME_SCALE,Math.PI/2,.04);

    loadGlbWithFolderFallback(shedAsset, (gltf:any) => {
      if (!glbTreesAlive) return;
      const shedModel = gltf.scene.clone(true);
      markMeshes(shedModel);
      shedModel.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.castShadow = true;
        o.receiveShadow = true;
        o.frustumCulled = true;
      });
      shedModel.scale.set(HOME_SCALE,.92*HOME_SCALE*BUILDING_HEIGHT,.70*HOME_SCALE);
      shedModel.rotation.set(0,-.20,0);
      shedModel.position.set(17,groundY(17,34),34);
      shedModel.userData={id:"shed",label:"Сарай"};
      addMesh(shedModel,"shed","Сарай");applyHomeTextures(shedModel);
      objects.push(shedModel);
      console.log('[SHED] loaded', `${BASE}img/models/${shedAsset}`);
    }, 'SHED');
    addRectCollider(17,34,7.45*HOME_SCALE,5.20*HOME_SCALE,-.20,.04);

    // The animal GLBs have skeletons and vertex colors, but no UV coordinates.
    // Project the supplied coat photos onto their local body axes once per model;
    // skinned clones then share geometry, textures and animation clips.
    const furSpecs:Record<string,{file:string;gain:number;u:number;v:number}>={
      'Cow.glb':{file:'Fur_Cow.jpg',gain:1.3,u:1.1,v:1},
      'Horse.glb':{file:'Fur_Horse.jpg',gain:6,u:2.4,v:1.5},
      'Horse_White.glb':{file:'Fur_Horse.jpg',gain:6,u:2.4,v:1.5},
      'Wolf.glb':{file:'Fur_Wolf.jpg',gain:9,u:2,v:1.6},
      'Fox.glb':{file:'Fur_Fox.jpg',gain:6,u:2,v:1.6}
    };
    const furLoader=new THREE.TextureLoader();
    const furTextures=new Map<string,THREE.Texture>();
    const animalSources=new Map<string,Promise<any>>();
    const getAnimalSource=(asset:string)=>{
      let source=animalSources.get(asset);
      if(!source){
        source=new Promise((resolve,reject)=>loadGlbWithFolderFallback(asset,resolve,asset,()=>reject(new Error(`Failed to load ${asset}`))))
          .then((gltf:any)=>{
            prepareAnimalFur(asset,gltf.scene);
            // Prime the source skinned-mesh bounds before SkeletonUtils.clone.
            // Otherwise the clone's first bounding-box calculation includes
            // the FBX armature's 100x scale twice and shrinks every animal.
            new THREE.Box3().setFromObject(gltf.scene);
            return gltf;
          });
        animalSources.set(asset,source);
      }
      return source;
    };
    const prepareAnimalFur=(asset:string,root:THREE.Object3D)=>{
      const spec=furSpecs[asset];
      let texture=furTextures.get(spec.file);
      if(!texture){
        texture=furLoader.load(`${BASE}img/models/${spec.file}`);
        texture.colorSpace=THREE.SRGBColorSpace;
        texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
        texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
        furTextures.set(spec.file,texture);
      }
      root.traverse((o:any)=>{
        if(!o.isMesh)return;
        const geometry=o.geometry.clone() as THREE.BufferGeometry;
        geometry.computeBoundingBox();
        const bounds=geometry.boundingBox!;
        const span=bounds.getSize(new THREE.Vector3());
        const pos=geometry.getAttribute('position') as THREE.BufferAttribute;
        const normal=geometry.getAttribute('normal') as THREE.BufferAttribute;
        const uv=new Float32Array(pos.count*2);
        for(let i=0;i<pos.count;i++){
          const nx=Math.abs(normal.getX(i)),ny=Math.abs(normal.getY(i)),nz=Math.abs(normal.getZ(i));
          if(ny>nx&&ny>nz){
            uv[2*i]=(pos.getX(i)-bounds.min.x)/Math.max(.01,span.x)*spec.u;
            uv[2*i+1]=(pos.getZ(i)-bounds.min.z)/Math.max(.01,span.z)*spec.v;
          }else if(nz>nx&&nz>ny){
            uv[2*i]=(pos.getY(i)-bounds.min.y)/Math.max(.01,span.y)*spec.u;
            uv[2*i+1]=(pos.getX(i)-bounds.min.x)/Math.max(.01,span.x)*spec.v;
          }else{
            uv[2*i]=(pos.getY(i)-bounds.min.y)/Math.max(.01,span.y)*spec.u;
            uv[2*i+1]=(pos.getZ(i)-bounds.min.z)/Math.max(.01,span.z)*spec.v;
          }
        }
        geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));
        const originalColor=geometry.getAttribute('color') as THREE.BufferAttribute|undefined;
        if(originalColor){
          const colors=originalColor.clone() as THREE.BufferAttribute;
          for(let i=0;i<colors.count;i++)for(let axis=0;axis<3;axis++){
            colors.setComponent(i,axis,Math.min(1,colors.getComponent(i,axis)*spec.gain));
          }
          geometry.setAttribute('color',colors);
        }
        o.geometry=geometry;
        const material=(o.material as THREE.MeshStandardMaterial).clone();
        material.color.set(0xffffff);
        material.map=texture;
        material.roughness=.96;
        material.vertexColors=!!originalColor;
        material.needsUpdate=true;
        o.material=material;
      });
    };
    const animatedAnimals:Array<{
      root:THREE.Object3D;mixer:THREE.AnimationMixer;
      x:number;z:number;radius:number;speed:number;phase:number;groundOffset:number;
    }>=[];
    const animalPlacements=[
      // Five grazing cows by different homes.
      {asset:'Cow.glb',label:'Корова у сарая',x:12,z:27,height:2.924,radius:1.6,speed:.20,phase:0,pose:'Walk'},
      {asset:'Cow.glb',label:'Корова у плотника',x:-12,z:27,height:2.85,radius:1.4,speed:.17,phase:1,pose:'Walk'},
      {asset:'Cow.glb',label:'Корова у охотника',x:27,z:14,height:2.9,radius:1.6,speed:.18,phase:2,pose:'Walk'},
      {asset:'Cow.glb',label:'Корова у травницы',x:-8,z:-12,height:2.8,radius:1.3,speed:.16,phase:3,pose:'Walk'},
      {asset:'Cow.glb',label:'Корова у старейшины',x:25,z:-29,height:2.92,radius:1.5,speed:.19,phase:4,pose:'Walk'},
      // Eleven horses: two in the shelter, three in the village and six roaming farther out.
      {asset:'Horse.glb',label:'Лошадь у сарая',x:20,z:26,height:5.016,radius:1.3,speed:.20,phase:1,pose:'Walk'},
      {asset:'Horse.glb',label:'Лошадь в деревне',x:-8,z:12,height:4.8,radius:1.8,speed:.18,phase:2,pose:'Walk'},
      {asset:'Horse.glb',label:'Лошадь у южных домов',x:8,z:-15,height:4.9,radius:1.6,speed:.20,phase:3,pose:'Walk'},
      {asset:'Horse.glb',label:'Лошадь под навесом',x:-19,z:32,height:3.7,radius:0,speed:0,phase:Math.PI/2,pose:'Idle'},
      {asset:'Horse_White.glb',label:'Лошадь под навесом справа',x:-19,z:38,height:3.7,radius:0,speed:0,phase:Math.PI/2,pose:'Idle'},
      {asset:'Horse_White.glb',label:'Лошадь на лугу',x:21,z:54,height:4.95,radius:4.2,speed:.25,phase:1.2,pose:'Walk'},
      {asset:'Horse.glb',label:'Лошадь в северной роще',x:-31,z:58,height:4.75,radius:3,speed:.18,phase:2.5,pose:'Walk'},
      {asset:'Horse.glb',label:'Лошадь на восточном лугу',x:43,z:61,height:4.85,radius:3.2,speed:.20,phase:3.5,pose:'Walk'},
      {asset:'Horse_White.glb',label:'Лошадь у речной тропы',x:-42,z:-24,height:4.8,radius:2.6,speed:.19,phase:4,pose:'Walk'},
      {asset:'Horse.glb',label:'Лошадь на южном лугу',x:26,z:-47,height:4.9,radius:3.2,speed:.22,phase:5,pose:'Walk'},
      {asset:'Horse_White.glb',label:'Лошадь возле хутора',x:-68,z:16,height:4.8,radius:2.7,speed:.18,phase:6,pose:'Walk'},
      // Wolves stay near the woods and foxes follow the outlying paths.
      {asset:'Wolf.glb',label:'Волк',x:46,z:-16,height:2.016,radius:3.2,speed:.35,phase:2.1,pose:'Walk'},
      {asset:'Wolf.glb',label:'Волк',x:56,z:-31,height:2.04,radius:2.8,speed:.31,phase:3,pose:'Walk'},
      {asset:'Wolf.glb',label:'Волк',x:71,z:-13,height:2.0,radius:3,speed:.33,phase:4,pose:'Walk'},
      {asset:'Wolf.glb',label:'Волк',x:62,z:12,height:2.05,radius:2.9,speed:.30,phase:5,pose:'Walk'},
      {asset:'Wolf.glb',label:'Волк',x:-66,z:-10,height:2.0,radius:3.2,speed:.32,phase:6,pose:'Walk'},
      {asset:'Wolf.glb',label:'Волк',x:-75,z:32,height:2.1,radius:3,speed:.29,phase:7,pose:'Walk'},
      {asset:'Wolf.glb',label:'Волк',x:-42,z:-57,height:1.98,radius:3.2,speed:.36,phase:8,pose:'Walk'},
      {asset:'Wolf.glb',label:'Волк',x:17,z:-65,height:2.06,radius:3.1,speed:.33,phase:9,pose:'Walk'},
      {asset:'Wolf.glb',label:'Волк',x:65,z:70,height:2.02,radius:3.1,speed:.31,phase:10,pose:'Walk'},
      {asset:'Fox.glb',label:'Лисица',x:43,z:36,height:1.64,radius:2.8,speed:.30,phase:.4,pose:'Walk'},
      {asset:'Fox.glb',label:'Лисица',x:57,z:30,height:1.62,radius:2.6,speed:.32,phase:1.3,pose:'Walk'},
      {asset:'Fox.glb',label:'Лисица',x:39,z:8,height:1.67,radius:2.5,speed:.33,phase:2.2,pose:'Walk'},
      {asset:'Fox.glb',label:'Лисица',x:30,z:-38,height:1.6,radius:2.7,speed:.31,phase:3.1,pose:'Walk'},
      {asset:'Fox.glb',label:'Лисица',x:-39,z:64,height:1.65,radius:2.8,speed:.35,phase:4,pose:'Walk'},
      {asset:'Fox.glb',label:'Лисица',x:-70,z:25,height:1.6,radius:2.6,speed:.34,phase:5,pose:'Walk'},
      {asset:'Fox.glb',label:'Лисица',x:62,z:-43,height:1.66,radius:2.8,speed:.32,phase:6,pose:'Walk'}
    ];
    for(const p of animalPlacements){
      getAnimalSource(p.asset).then((gltf:any)=>{
        if(!glbTreesAlive)return;
        const root=cloneSkinned(gltf.scene);
        const bounds=new THREE.Box3().setFromObject(root);
        const height=Math.max(.01,bounds.getSize(new THREE.Vector3()).y);
        root.scale.setScalar(p.height/height);
        root.updateWorldMatrix(true,true);
        const grounded=new THREE.Box3().setFromObject(root);
        const groundOffset=-grounded.min.y;
        root.position.set(p.x,groundY(p.x,p.z)+groundOffset,p.z);
        root.rotation.y=p.phase;
        root.userData={label:p.label};
        root.traverse((o:any)=>{if(o.isSkinnedMesh)o.frustumCulled=false;});
        addMesh(root);
        const mixer=new THREE.AnimationMixer(root);
        const clip=gltf.animations.find((a:THREE.AnimationClip)=>a.name.endsWith(`|${p.pose}`))
          ||gltf.animations.find((a:THREE.AnimationClip)=>a.name.endsWith('|Idle'));
        if(clip)mixer.clipAction(clip).play();
        animatedAnimals.push({root,mixer,x:p.x,z:p.z,radius:p.radius,speed:p.speed,phase:p.phase,groundOffset});
      }).catch((error:any)=>console.error(`[${p.label}] FAILED`,error));
    }

    // A Viking boat floats downstream of the main bridge, clear of the crossing.
    const floatingBoats:Array<{root:THREE.Object3D;baseY:number}>=[];
    loadGlbWithFolderFallback('Viking_Boat.glb',(gltf:any)=>{
      if(!glbTreesAlive)return;
      const root=gltf.scene;
      const size=new THREE.Box3().setFromObject(root).getSize(new THREE.Vector3());
      root.scale.setScalar(6.8/Math.max(.01,size.z));
      const z=-40,x=riverCenterX(z);
      root.rotation.y=Math.atan2(riverCenterX(z+2)-riverCenterX(z-2),4);
      root.updateWorldMatrix(true,true);
      const bottom=new THREE.Box3().setFromObject(root).min.y;
      const baseY=groundY(x,z)+.09-bottom-.18;
      root.position.set(x,baseY,z);
      root.userData={label:'Лодка викингов'};
      addMesh(root);
      floatingBoats.push({root,baseY});
    },'VIKING BOAT');

    // Legacy procedural fisher storage removed; it duplicated the newer village buildings.
    for(const p0 of [[-25,33,1.0],[-14,37,.85],[-25,37,.8],[24,32,.9],[24,38,.72],[31,5,.9]] as Array<[number,number,number]>) hay(p0[0],p0[1],p0[2]);
    // A second line of modest homes is now supplied by Viking GLB clones above.
    // Hearths, wood piles and small objects around homes.
    // Firewood piles are disabled completely.
    // No stacked logs are created anywhere near houses or doorways.
    const woodpile=(_x:number,_z:number,_s=1)=>{ return; };
    // Low vegetation and scattered stones fill empty ground without turning it into a particle-heavy scene.
    const bush=(x:number,z:number,s=1)=>{
      const g=new THREE.Group();const y=groundY(x,z);
      for(let i=0;i<5;i++){const c=new THREE.Mesh(new THREE.SphereGeometry((.28+midHash(i,x)*.18)*s,8,6),mat(i%2?0x355239:0x415f3f,1));c.position.set((midHash(i,2)-.5)*.7*s,.28*s,(midHash(i,3)-.5)*.7*s);g.add(c);}g.position.set(x,y,z);addMesh(g);
    };
    for(let i=0;i<48;i++){
      const a=midHash(i,501)*Math.PI*2,r=18+midHash(i,502)*39,x=Math.cos(a)*r,z=Math.sin(a)*r+4;
      if(Math.abs(x)<9 && Math.abs(z)<14) continue;
      bush(x,z,.65+midHash(i,503)*.75);
    }
    // Each species uses a handful of instanced low-poly parts, regardless of
    // how many plants are scattered across the map. The ID stays per spot.
    type GatherNode={spot:typeof GATHER_SPOTS[number];root:THREE.Object3D;used:boolean;hidden:boolean;fallAt:number;collider:Collider|null;index:number};
    const gatherNodes:GatherNode[]=[];
    const saplingTrunk=new THREE.CylinderGeometry(.12,.19,1.65,6);
    const saplingCrown=new THREE.ConeGeometry(.79,1.4,7);
    const shrubLeaf=new THREE.SphereGeometry(.52,7,5);
    const herbLeaf=new THREE.ConeGeometry(.14,.75,5);
    const gatherTrunkMat=mat(0x65452e,1),leafMat=mat(0x315944,1),shrubMat=mat(0x3c654e,1),herbMat=mat(0x77a964,1),flowerMat=mat(0xf4cf84,1);
    const gatherCounts={wood:GATHER_SPOTS.filter(p=>p.kind==='wood').length,twigs:GATHER_SPOTS.filter(p=>p.kind==='twigs').length,herbs:GATHER_SPOTS.filter(p=>p.kind==='herbs').length};
    const gatherBatches:Record<GatherKind,{parts:Array<{mesh:THREE.InstancedMesh;local:THREE.Matrix4}>;next:number}>={wood:{parts:[],next:0},twigs:{parts:[],next:0},herbs:{parts:[],next:0}};
    const addGatherPart=(kind:GatherKind,geometry:THREE.BufferGeometry,material:THREE.Material,x:number,y:number,z:number,sx=1,sy=1,sz=1,tilt=0)=>{
      const part=new THREE.Object3D();part.position.set(x,y,z);part.scale.set(sx,sy,sz);part.rotation.z=tilt;part.updateMatrix();
      const mesh=new THREE.InstancedMesh(geometry,material,gatherCounts[kind]);mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled=false;mesh.receiveShadow=true;scene.add(mesh);
      gatherBatches[kind].parts.push({mesh,local:part.matrix.clone()});
    };
    addGatherPart('wood',saplingTrunk,gatherTrunkMat,0,.83,0);
    addGatherPart('wood',saplingCrown,leafMat,0,1.56,0);
    addGatherPart('wood',saplingCrown,leafMat,0,2.06,0,.74,.74,.74);
    addGatherPart('twigs',saplingTrunk,gatherTrunkMat,0,.57,0,.65,.68,.65);
    for(let j=0;j<4;j++)addGatherPart('twigs',shrubLeaf,shrubMat,Math.cos(j*2.4)*.49,.68+Math.sin(j*1.7)*.13,Math.sin(j*2.4)*.49);
    for(let j=0;j<5;j++)addGatherPart('herbs',herbLeaf,herbMat,Math.cos(j*2.5)*.26,.39,Math.sin(j*2.5)*.26,1,1,1,(j-2)*.21);
    addGatherPart('herbs',shrubLeaf,flowerMat,0,.76,0,.36,.36,.36);
    const gatherMatrix=new THREE.Matrix4();
    const updateGatherNode=(node:GatherNode)=>{
      node.root.updateMatrix();
      for(const part of gatherBatches[node.spot.kind].parts){
        gatherMatrix.multiplyMatrices(node.root.matrix,part.local);
        part.mesh.setMatrixAt(node.index,gatherMatrix);part.mesh.instanceMatrix.needsUpdate=true;
      }
    };
    for(const spot of GATHER_SPOTS){
      const root=new THREE.Object3D();root.position.set(spot.x,groundY(spot.x,spot.z),spot.z);
      const used=gathered.includes(spot.id);if(used)root.scale.setScalar(.00001);
      const collider:Collider|null=spot.kind==='wood'&&!used?{kind:'circle',x:spot.x,z:spot.z,r:.24}:null;
      if(collider)colliders.push(collider);
      const index=gatherBatches[spot.kind].next++;
      const node:GatherNode={spot,root,used,hidden:used,fallAt:0,collider,index};
      gatherNodes.push(node);updateGatherNode(node);
    }
    for(let i=0;i<34;i++){
      const x=-84+midHash(i,610)*168,z=-82+midHash(i,611)*164;
      if(Math.hypot(x,z-2)<24) continue;
      const s=.25+midHash(i,612)*.55;const rock=new THREE.Mesh(new THREE.DodecahedronGeometry(s,1),sacredStoneMaterials[i%3]);rock.scale.y=.55;rock.position.set(x,groundY(x,z)+s*.28,z);rock.rotation.set(midHash(i,613),midHash(i,614),midHash(i,615));addMesh(rock);
    }

    // Old human settlement — a quiet abandoned farmstead beyond the village.
    // It is a game interpretation inspired by the human dwellings, barns, carts and hearths
    // described in Rígþula, not a claim that this exact place exists in the Edda.
    const oldFarmFallback=house(-65,5,8,5,0.12,"Старый хутор","oldfarm",0x63432f,0x2b2926);
    loadGlbWithFolderFallback(oldFarmAsset, (gltf:any) => {
      if (!glbTreesAlive) return;
      const oldFarmModel = gltf.scene.clone(true);
      markMeshes(oldFarmModel);
      oldFarmModel.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.castShadow = true;
        o.receiveShadow = true;
        o.frustumCulled = true;
      });
      oldFarmModel.scale.set(.85*HOME_SCALE,.75*HOME_SCALE*BUILDING_HEIGHT,.62*HOME_SCALE);
      oldFarmModel.rotation.set(0,.12,0);
      oldFarmModel.position.set(-65,groundY(-65,5),5);
      oldFarmModel.userData={id:"oldfarm",label:"Старый хутор"};
      oldFarmFallback.visible=false;
      addMesh(oldFarmModel,"oldfarm","Старый хутор");
      objects.push(oldFarmModel);applyHomeTextures(oldFarmModel);
      console.log('[OLD FARM] loaded', `${BASE}img/models/${oldFarmAsset}`);
    }, 'OLD FARM');
    // Legacy procedural old barn removed; the Old Farm GLB is now the sole farmstead structure here.
    hay(-71,10,.9);
    const oldField=new THREE.Group();
    oldField.position.set(-63,groundY(-63,47),47);
    for(let r=0;r<6;r++){
      const furrow=box(10,.035,.12,0x40382a,1);
      furrow.position.set(0,.02,(r-2.5)*1.05);
      furrow.rotation.y=.06; oldField.add(furrow);
    }
    addMesh(oldField);

    const runeGroundTexture=(glyph:string,color:string)=>{
      const c=document.createElement("canvas"); c.width=c.height=256; const ctx=c.getContext("2d")!;
      ctx.clearRect(0,0,256,256); ctx.textAlign="center"; ctx.textBaseline="middle";
      ctx.shadowColor=color; ctx.shadowBlur=18; ctx.fillStyle=color; ctx.font="bold 150px serif"; ctx.fillText(glyph,128,132);
      ctx.shadowBlur=4; ctx.globalAlpha=.55; ctx.font="bold 118px serif"; ctx.fillText(glyph,128,132);
      const t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; t.anisotropy=4; return t;
    };
    const goldenStoneRune=(glyph:string)=>{
      const c=document.createElement('canvas');c.width=c.height=256;
      const ctx=c.getContext('2d')!;ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.font='bold 175px serif';ctx.shadowColor='#ffbc47';ctx.shadowBlur=12;
      ctx.fillStyle='#ffd56a';ctx.fillText(glyph,128,133);
      const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;
    };
    const addGroundRune=(g:THREE.Group,x:number,z:number,glyph:string,color:number,size=.72,rot=0)=>{
      const hex="#"+color.toString(16).padStart(6,"0");
      const m=new THREE.MeshBasicMaterial({map:runeGroundTexture(glyph,hex),transparent:true,depthWrite:false,side:THREE.DoubleSide});
      const q=new THREE.Mesh(new THREE.PlaneGeometry(size,size),m); q.rotation.x=-Math.PI/2; q.rotation.z=rot; q.position.set(x,.065,z); g.add(q);
      return q;
    };

    // Field of Runes — a monumental Norse ritual clearing, built around a central altar.
    const runeField=new THREE.Group();
    const runeFieldX=18, runeFieldZ=55;
    runeField.position.set(runeFieldX,groundY(runeFieldX,runeFieldZ),runeFieldZ);
    runeField.userData={id:"runefield",label:"Поле Рун"};
    const fieldStoneMat=sacredStoneMaterials[0];
    const fieldDarkMat=sacredStoneMaterials[1];
    const cyanRuneMat=new THREE.MeshBasicMaterial({color:0x7de8ff,transparent:true,opacity:.92,depthWrite:false,side:THREE.DoubleSide});
    const purpleRuneMat=new THREE.MeshBasicMaterial({color:0xc58cff,transparent:true,opacity:.86,depthWrite:false,side:THREE.DoubleSide});
    const goldRuneMat=new THREE.MeshBasicMaterial({color:0xffd76a,transparent:true,opacity:.9,depthWrite:false,side:THREE.DoubleSide});


    // Central monumental altar with a glowing rune face.
    const altarBase=new THREE.Mesh(new THREE.CylinderGeometry(2.15,2.55,.48,10),fieldDarkMat);
    altarBase.position.y=.24; altarBase.scale.z=.82; runeField.add(altarBase);
    const altarBody=new THREE.Mesh(new THREE.DodecahedronGeometry(1.48,1),fieldStoneMat);
    altarBody.scale.set(1.0,1.65,.72); altarBody.position.y=1.38; altarBody.rotation.y=.18; runeField.add(altarBody);
    const altarCrown=new THREE.Mesh(new THREE.DodecahedronGeometry(.78,1),fieldStoneMat);
    altarCrown.scale.set(.72,1.15,.55); altarCrown.position.set(0,2.72,.02); altarCrown.rotation.z=.06; runeField.add(altarCrown);
    // Central stone: one large glowing Eihwaz rune (ᛇ), pushed clearly
    // in front of the altar face so it cannot disappear inside the mesh.
    const eihwazTex=goldenStoneRune('ᛇ');
    const eihwaz=new THREE.Mesh(
      new THREE.PlaneGeometry(1.42,2.25),
      new THREE.MeshBasicMaterial({
        map:eihwazTex,
        color:0xffffff,
        transparent:true,
        opacity:1,
        depthWrite:false,
        blending:THREE.AdditiveBlending,
        side:THREE.DoubleSide,
        toneMapped:false
      })
    );
    const altarFaceRot=.18;
    const altarFaceDepth=1.16;
    eihwaz.position.set(
      Math.sin(altarFaceRot)*altarFaceDepth,
      1.92,
      Math.cos(altarFaceRot)*altarFaceDepth
    );
    eihwaz.rotation.y=altarFaceRot;
    eihwaz.renderOrder=8;
    runeField.add(eihwaz);

    const altarGlow=new THREE.PointLight(0xffc965,1.0,8.5,2);
    altarGlow.position.set(
      Math.sin(altarFaceRot)*1.45,
      2.0,
      Math.cos(altarFaceRot)*1.45
    );
    runeField.add(altarGlow);

    // Two concentric golden ritual rings.
    for(const [r,w] of [[3.0,.075],[7.1,.065],[10.1,.045]] as Array<[number,number]>) {
      const ring=new THREE.Mesh(new THREE.TorusGeometry(r,w,8,96),new THREE.MeshBasicMaterial({color:0xe9c76d,transparent:true,opacity:r<8?.82:.58,depthWrite:false}));
      ring.rotation.x=Math.PI/2; ring.position.y=.055; runeField.add(ring);
    }
    const fieldGlyphs=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ"];
    // Each standing stone has one rune; the old overlapping ground glyphs are removed.

    // Outer ring of irregular monolithic menhirs.
    // Distinct Elder Futhark glyphs, one in the centre of each menhir.
    for(let i=0;i<10;i++){
      const a=i/10*Math.PI*2+.16; const rr=9.15+(.5-midHash(i,1202))*1.0;
      const h=2.4+midHash(i,1203)*2.0; const w=.72+midHash(i,1204)*.48;
      const st=new THREE.Mesh(new THREE.DodecahedronGeometry(.82+midHash(i,1205)*.22,1),sacredStoneMaterials[i%3]);
      st.scale.set(w,h,0.72+midHash(i,1206)*.28);
      st.position.set(Math.cos(a)*rr,st.scale.y*.58,Math.sin(a)*rr);
      st.rotation.set((midHash(i,1207)-.5)*.22,a+(midHash(i,1208)-.5)*.3,(midHash(i,1209)-.5)*.18);
      runeField.add(st);

      // A single readable golden rune centred on the outward face.
      const faceX=st.position.x+Math.cos(a)*(.70+st.scale.z*.08);
      const faceZ=st.position.z+Math.sin(a)*(.70+st.scale.z*.08);
      {
        const glyph=fieldGlyphs[i];
        const tex=goldenStoneRune(glyph);
        const mark=new THREE.Mesh(
          new THREE.PlaneGeometry(.88,1.30),
          new THREE.MeshBasicMaterial({
            map:tex,
            color:0xffffff,
            transparent:true,
            opacity:.98,
            depthWrite:false,
            blending:THREE.AdditiveBlending,
            side:THREE.DoubleSide,
            toneMapped:false
          })
        );
        mark.position.set(
          faceX,
          st.position.y+.12,
          faceZ
        );
        mark.rotation.y=-a+Math.PI*.5;
        mark.renderOrder=5;
        runeField.add(mark);
      }

      const gl=new THREE.PointLight(0xffc76a,.18,3.2,2);
      gl.position.set(st.position.x,st.position.y*.68,st.position.z);
      runeField.add(gl);
    }
    // Small boundary stones and sparse ritual debris.
    for(let i=0;i<18;i++){
      const a=midHash(i,1220)*Math.PI*2, rr=6.8+midHash(i,1221)*4.3;
      irregularRock(runeField,Math.cos(a)*rr,.22,Math.sin(a)*rr,.28+midHash(i,1222)*.35,i%2?0x4c5750:0x59625a,1223+i);
    }
    for(let i=0;i<10;i++){
      const a=midHash(i,1230)*Math.PI*2, rr=2.6+midHash(i,1231)*6.6;
      const relic=new THREE.Mesh(new THREE.CylinderGeometry(.06,.09,.035,7),new THREE.MeshStandardMaterial({color:0x9b814b,metalness:.6,roughness:.45}));
      relic.rotation.x=Math.PI/2; relic.position.set(Math.cos(a)*rr,.09,Math.sin(a)*rr); runeField.add(relic);
    }
    addMesh(runeField,"runefield","Поле Рун"); objects.push(runeField);
    addCircleCollider(runeFieldX,runeFieldZ,1.8,.08);

    // Stone fortifications: two independent gates and eight square towers.
    // Bake authoring transforms once; every placement shares geometry and materials.
    const fortMaterial=(name:string)=>new THREE.MeshStandardMaterial({
      name,color:/DarkRock/i.test(name)?0x60655f:/LightRock/i.test(name)?0x999b8d:
        /Black/i.test(name)?0x272d2b:/Celing/i.test(name)?0x444e4a:
        /DarkWood/i.test(name)?0x35291f:/Wood/i.test(name)?0x69513a:0x85897e,
      roughness:.96,metalness:0
    });
    const bakeFortModel=(source:THREE.Object3D)=>{
      source.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(source),center=bounds.getCenter(new THREE.Vector3());
      const result=new THREE.Group();
      source.traverse((o:any)=>{
        if(!o.isMesh)return;
        const geometry=o.geometry.clone().applyMatrix4(o.matrixWorld);
        geometry.translate(-center.x,-bounds.min.y,-center.z);
        const materials=(Array.isArray(o.material)?o.material:[o.material]).map((m:any)=>fortMaterial(m.name||"LightRock"));
        const mesh=new THREE.Mesh(geometry,Array.isArray(o.material)?materials:materials[0]);
        mesh.name=o.name;mesh.castShadow=true;mesh.receiveShadow=true;result.add(mesh);
      });
      return {model:result,size:bounds.getSize(new THREE.Vector3())};
    };
    // Project the supplied stone texture at a fixed world size on each wall face.
    const stoneWallMaterials:THREE.MeshStandardMaterial[]=[];
    let stoneWallTexture:THREE.Texture|null=null;
    const brickStoneMaterials:THREE.MeshStandardMaterial[]=[];
    let brickStoneTexture:THREE.Texture|null=null;
    const applyWallStoneTexture=(root:THREE.Object3D,brick=false)=>{
      root.updateWorldMatrix(true,true);
      root.traverse((o:any)=>{
        if(!o.isMesh)return;
        const geometry=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();
        const positions=geometry.attributes.position,uv=new Float32Array(positions.count*2);
        const points=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()];
        const edgeA=new THREE.Vector3(),edgeB=new THREE.Vector3(),normal=new THREE.Vector3();
        for(let i=0;i<positions.count;i+=3){
          for(let k=0;k<3;k++)points[k].fromBufferAttribute(positions,i+k).applyMatrix4(o.matrixWorld);
          normal.crossVectors(edgeA.subVectors(points[1],points[0]),edgeB.subVectors(points[2],points[0]));
          const ax=Math.abs(normal.x),ay=Math.abs(normal.y),az=Math.abs(normal.z);
          for(let k=0;k<3;k++){
            const point=points[k],u=ay>ax&&ay>az?point.x:ax>az?point.z:point.x;
            const v=ay>ax&&ay>az?point.z:point.y;
            uv[(i+k)*2]=u/3.5;uv[(i+k)*2+1]=v/3.5;
          }
        }
        geometry.setAttribute("uv",new THREE.BufferAttribute(uv,2));o.geometry=geometry;
        const tune=(original:THREE.MeshStandardMaterial)=>{
          const material=original.clone();
          if(brick&&/Black|Celing|Wood/i.test(material.name))return material;
          (brick?brickStoneMaterials:stoneWallMaterials).push(material);
          const texture=brick?brickStoneTexture:stoneWallTexture;
          if(texture){material.map=texture;material.color.setHex(/DarkRock/i.test(material.name)?0xd5d5d5:0xffffff);material.needsUpdate=true;}
          return material;
        };
        o.material=Array.isArray(o.material)?o.material.map(tune):tune(o.material);
      });
    };
    const pendingStoneTexture=new THREE.TextureLoader().load(`${BASE}img/models/T_UnevenBrick1_BaseColor.png`,texture=>{
      if(!glbTreesAlive){texture.dispose();return;}
      texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
      texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());texture.needsUpdate=true;
      stoneWallTexture=texture;
      stoneWallMaterials.forEach(material=>{material.map=texture;material.color.setHex(/DarkRock/i.test(material.name)?0xd5d5d5:0xffffff);material.needsUpdate=true;});
    },undefined,()=>console.warn("Stone wall texture unavailable; retaining plain stone materials."));
    const pendingBrickTexture=new THREE.TextureLoader().load(`${BASE}img/models/T_Brick_BaseColor1.png`,texture=>{
      if(!glbTreesAlive){texture.dispose();return;}
      texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
      texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());texture.needsUpdate=true;
      brickStoneTexture=texture;
      brickStoneMaterials.forEach(material=>{material.map=texture;material.color.setHex(/DarkRock/i.test(material.name)?0xd5d5d5:0xffffff);material.needsUpdate=true;});
    },undefined,()=>console.warn("Brick texture unavailable; retaining plain stone materials."));
    const wallRuns:Array<[number,number,number,number]>=[
      [-30,-31,-6,-31],[6,-31,30,-31],[-30,-31,-30,44],[30,-31,30,44],
      [-30,44,-6,44],[6,44,30,44]
    ];
    const wallFallbacks:THREE.Group[]=[];
    const wallSlots:Array<{x:number;z:number;width:number;rotation:number;base:number}>=[];
    wallRuns.forEach(([x1,z1,x2,z2])=>{
      const dx=x2-x1,dz=z2-z1,len=Math.hypot(dx,dz),n=Math.ceil(len/6);
      addSegmentCollider(x1,z1,x2,z2,1.03,.06);
      for(let i=0;i<n;i++){
        const width=len/n,t=(i+.5)/n,x=x1+dx*t,z=z1+dz*t;
        const base=Math.min(groundY(x1+dx*i/n,z1+dz*i/n),groundY(x1+dx*(i+1)/n,z1+dz*(i+1)/n))-.14;
        const rotation=Math.atan2(-dz,dx);
        wallSlots.push({x,z,width,rotation,base});
        const g=new THREE.Group();g.position.set(x,base,z);g.rotation.y=rotation;
        const body=box(width+.05,5.0,1.9,0x999b8d,1);body.position.y=2.5;g.add(body);
        for(let k=0;k<4;k++){const tooth=box(width/7,.8,1.9,0x929689,1);tooth.position.set((k+.5)*width/4-width/2,5.4,0);g.add(tooth);}
        scene.add(g);applyWallStoneTexture(g);wallFallbacks.push(g);
      }
    });
    loadGlbWithFolderFallback("WallBricks.fbx",(asset:any)=>{
      const baked=bakeFortModel(asset.scene);
      wallSlots.forEach(slot=>{const model=baked.model.clone(true);model.scale.set((slot.width+.06)/baked.size.x,5.8/baked.size.y,2/baked.size.z);model.rotation.y=slot.rotation;model.position.set(slot.x,slot.base,slot.z);scene.add(model);applyWallStoneTexture(model);});
      wallFallbacks.forEach(g=>g.visible=false);
    },"STONE WALLS");

    const gateFrontZ=44,gateRearZ=-31;
    const fortGates=[{id:"gate",z:gateFrontZ,facing:1},{id:"gateRear",z:gateRearZ,facing:-1}].map(config=>{
      const root=new THREE.Group();root.position.set(0,groundY(0,config.z)-.04,config.z);root.rotation.y=config.facing===1?0:Math.PI;
      const fallback=new THREE.Group();
      for(const side of [-1,1]){const pier=box(2.55,6.7,2,0x999b8d,1);pier.position.set(side*4.7,3.35,0);fallback.add(pier);}
      const lintel=box(12,1.6,2,0x929689,1);lintel.position.y=6.65;fallback.add(lintel);
      root.add(fallback);
      const left=new THREE.Group(),right=new THREE.Group();
      left.position.set(-2.84,0,1.06);right.position.set(2.87,0,1.06);
      const leftLeaf=box(2.78,4.1,.25,0x69513a,1);leftLeaf.position.set(1.39,2.05,0);left.add(leftLeaf);
      const rightLeaf=box(2.78,4.1,.25,0x69513a,1);rightLeaf.position.set(-1.39,2.05,0);right.add(rightLeaf);
      root.add(left,right);
      const bar=box(6.1,.26,.30,0x35291f,1);bar.position.set(0,2.3,1.37);root.add(bar);
      addMesh(root,config.id,config.id==="gate"?"Передние ворота":"Задние ворота");
      applyWallStoneTexture(fallback,true);
      // Pier collision follows the clear opening of the door frame.
      addRectCollider(-4.5,config.z,3,2,0,.02);addRectCollider(4.5,config.z,3,2,0,.02);
      return {...config,root,fallback,left,right,bar};
    });
    loadGlbWithFolderFallback("WallEntranceBricks.fbx",(asset:any)=>{
      const baked=bakeFortModel(asset.scene);
      for(const gate of fortGates){const model=baked.model.clone(true);model.scale.set(12/baked.size.x,7.8/baked.size.y,2/baked.size.z);gate.root.add(model);applyWallStoneTexture(model,true);gate.fallback.visible=false;}
    },"STONE GATE ARCHES");
    loadGlbWithFolderFallback("Door.fbx",(asset:any)=>{
      const baked=bakeFortModel(asset.scene);
      const sx=12/153.60701084136963,sy=7.8/154.9450965435867,sz=.06;
      baked.model.children.forEach((part:any)=>{
        part.geometry.scale(sx,sy,sz);part.geometry.computeBoundingBox();
      });
      const leftPart=baked.model.getObjectByName("LeftDoor") as THREE.Mesh|undefined;
      const rightPart=baked.model.getObjectByName("RightDoor") as THREE.Mesh|undefined;
      if(!leftPart||!rightPart)return;
      const leftHinge=leftPart.geometry.boundingBox!.min.x,rightHinge=rightPart.geometry.boundingBox!.max.x;
      leftPart.geometry.translate(-leftHinge,0,0);rightPart.geometry.translate(-rightHinge,0,0);
      for(const gate of fortGates){
        gate.left.clear();gate.right.clear();gate.left.position.x=leftHinge;gate.right.position.x=rightHinge;
        gate.left.add(leftPart.clone());gate.right.add(rightPart.clone());
        for(const part of baked.model.children){if(part!==leftPart&&part!==rightPart){const frame=part.clone();frame.position.z=1.06;gate.root.add(frame);}}
      }
    },"WORKING FBX DOORS");
    gateActionRef.current=(id="gate")=>{
      const rear=id==="gateRear",isOpen=rear?rearGateOpenRef.current:villageGateOpenRef.current;
      // Do not shut the leaves on a hero standing in the doorway.
      if(isOpen&&Math.abs(state.current.x)<3.7&&Math.abs(state.current.z-(rear?gateRearZ:gateFrontZ))<2.2)return;
      if(rear){rearGateOpenRef.current=!isOpen;setRearGateOpen(!isOpen);}
      else{villageGateOpenRef.current=!isOpen;setVillageGateOpen(!isOpen);}
    };

    const towerSlots=[[-30,-31],[30,-31],[-30,44],[30,44],[-8.5,44],[8.5,44],[-8.5,-31],[8.5,-31]];
    const towerFallbacks:THREE.Group[]=[];
    towerSlots.forEach(([x,z])=>{
      const root=new THREE.Group();root.position.set(x,groundY(x,z)-.18,z);
      const body=box(4.8,10,4.8,0x858b80,1);body.position.y=5;root.add(body);
      const crown=box(5.6,.65,5.6,0x999b8d,1);crown.position.y=10;root.add(crown);
      addMesh(root,"tower","Крепостная башня");applyWallStoneTexture(root,true);towerFallbacks.push(root);addRectCollider(x,z,5.6,5.6,0,.08);
    });
    loadGlbWithFolderFallback("LargeSquareTowerBricks.fbx",(asset:any)=>{
      const baked=bakeFortModel(asset.scene);
      towerSlots.forEach(([x,z],i)=>{const model=baked.model.clone(true);model.scale.set(5.6/baked.size.x,12/baked.size.y,5.6/baked.size.z);model.position.set(x,groundY(x,z)-.18,z);addMesh(model,"tower","Крепостная башня");applyWallStoneTexture(model,true);towerFallbacks[i].visible=false;});
    },"FORTRESS TOWERS");
    // Norns' fate wheel — antique wooden wheel with an original yarn ball below.
    const nornsWheelAsset='Midgard_Norns_Fate_Wheel_V1_YUP.glb';
    const nornsRoot=new THREE.Group();
    nornsRoot.userData={id:"norns",label:"Прядильня норн"};
    const nornsX=-52,nornsZ=38;
    nornsRoot.position.set(nornsX,groundY(nornsX,nornsZ),nornsZ);


    loadGlbWithFolderFallback(nornsWheelAsset,(gltf:any)=>{
      const wheel=gltf.scene;
      markMeshes(wheel);
      wheel.traverse((o:any)=>{
        if(!o.isMesh)return;
        o.castShadow=true;
        o.receiveShadow=true;
      });
      wheel.scale.setScalar(.90);
      wheel.rotation.y=.22;
      wheel.position.set(0,.03,0);
      wheel.updateMatrixWorld(true);
      const bb=new THREE.Box3().setFromObject(wheel);
      wheel.position.y-=bb.min.y-.03;
      nornsRoot.add(wheel);
      console.log('[NORNS WHEEL] GLB loaded',nornsWheelAsset);
    },'NORNS WHEEL');

    scene.add(nornsRoot);
    objects.push(nornsRoot);
    addCircleCollider(nornsX,nornsZ,2.4,.08);




    // Ancient Fehu stone — tall, flat and golden, with a large green Fehu rune.
    const rune=new THREE.Group();
    rune.userData={id:"rune",label:"Древний камень Феху"};
    rune.position.set(50,groundY(50,60),60);

    const fehuStoneMat=sacredStoneMaterials[2];

    const stone=new THREE.Mesh(
      new THREE.DodecahedronGeometry(1.45,1),
      fehuStoneMat
    );
    stone.scale.set(.86,2.15,.30);
    stone.position.y=2.05;
    stone.rotation.z=.035;
    rune.add(stone);

    // Large green Fehu on the front face.
    const fehuTex=goldenStoneRune('ᚠ');
    const fehuMark=new THREE.Mesh(
      new THREE.PlaneGeometry(1.34,2.02),
      new THREE.MeshBasicMaterial({
        map:fehuTex,
        transparent:true,
        opacity:1,
        depthWrite:false,
        blending:THREE.AdditiveBlending,
        side:THREE.DoubleSide,
        toneMapped:false
      })
    );
    fehuMark.position.set(0,2.08,.47);
    fehuMark.renderOrder=8;
    rune.add(fehuMark);

    const fehuGlow=new THREE.PointLight(0xffc76a,.85,5.5,2);
    fehuGlow.position.set(0,2.0,.75);
    rune.add(fehuGlow);

    addMesh(rune,"rune","Древний камень Феху");
    objects.push(rune);
    addCircleCollider(50,60,1.55,.1);

    // Two crossings share the uploaded FBX. The second opens after the carpenter quest.
    const makeStoneBridgeBase=(x:number,z:number,y:number,id:string,label:string)=>{
      const g=new THREE.Group();g.position.set(x,y,z);
      const fallback=new THREE.Group();
      const deck=box(BRIDGE_SPAN,.24,BRIDGE_WIDTH,0x777b76,1);fallback.add(deck);
      for(const side of [-1,1]){
        const rail=box(BRIDGE_SPAN-.4,.65,.18,0x555c58,1);
        rail.position.set(0,.42,side*(BRIDGE_WIDTH/2-.1));fallback.add(rail);
        addSegmentCollider(x-BRIDGE_SPAN/2+.35,z+side*(BRIDGE_WIDTH/2-.18),x+BRIDGE_SPAN/2-.35,z+side*(BRIDGE_WIDTH/2-.18),.10,.02);
      }
      g.add(fallback);addMesh(g,id,label);applyWallStoneTexture(fallback);
      return {g,fallback};
    };
    const riverBridge=makeStoneBridgeBase(BRIDGE_X,BRIDGE_Z,BRIDGE_Y,"port","Речной мост");
    const northBridge=makeStoneBridgeBase(NORTH_BRIDGE_X,NORTH_BRIDGE_Z,NORTH_BRIDGE_Y,"northBridge",northBridgeRepaired?"Северный мост":"Северный мост — проход закрыт");
    if(!northBridgeRepaired){
      // Visible barriers on BOTH banks agree with the closed-crossing collision.
      for(const side of [-1,1]){
        const barrier=new THREE.Group();barrier.position.x=side*(BRIDGE_SPAN/2+.2);
        for(const zz of [-BRIDGE_WIDTH/2,BRIDGE_WIDTH/2]){
          const post=box(.23,1.8,.23,0x554537,1);post.position.set(0,.9,zz);barrier.add(post);
        }
        for(const tilt of [-.22,.22]){
          const brace=box(.18,.18,BRIDGE_WIDTH+.15,0x8a7050,1);brace.rotation.x=tilt;brace.position.y=.94;barrier.add(brace);
        }
        northBridge.g.add(barrier);
      }
    }
    loadGlbWithFolderFallback("Bridge.fbx",(asset:any)=>{
      const source=asset.scene as THREE.Object3D;source.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(source),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
      if(size.x<=0||size.y<=0||size.z<=0)return;
      // Bake FBX transforms so the authored Z-span crosses the river along world X.
      // The deck surface is the highest vertex in the model's bottom 12 percent.
      let deckY=bounds.min.y;
      source.traverse((o:any)=>{
        if(!o.isMesh)return;
        const positions=o.geometry.attributes.position;
        const point=new THREE.Vector3();
        for(let i=0;i<positions.count;i++){
          point.fromBufferAttribute(positions,i).applyMatrix4(o.matrixWorld);
          if(point.y<bounds.min.y+size.y*.12)deckY=Math.max(deckY,point.y);
        }
      });
      const prepared=new THREE.Group();
      source.traverse((o:any)=>{
        if(!o.isMesh)return;
        const geometry=o.geometry.clone();geometry.applyMatrix4(o.matrixWorld);
        geometry.translate(-center.x,-deckY,-center.z);
        geometry.scale(BRIDGE_WIDTH/size.x,7.5/size.y,BRIDGE_SPAN/size.z);
        geometry.rotateY(-Math.PI/2);
        const oldMaterials=Array.isArray(o.material)?o.material:[o.material];
        if(oldMaterials.some((m:any)=>/LightWood/i.test(String(m?.name||"")))){
          geometry.computeBoundingBox();
          const bb=geometry.boundingBox!,sz=bb.getSize(new THREE.Vector3()),cc=bb.getCenter(new THREE.Vector3());
          let sx=1,sy=1,szScale=1;
          if(sz.x>=sz.y&&sz.x>=sz.z)sx=1.075;else if(sz.y>=sz.x&&sz.y>=sz.z)sy=1.075;else szScale=1.075;
          geometry.translate(-cc.x,-cc.y,-cc.z);geometry.scale(sx,sy,szScale);geometry.translate(cc.x,cc.y,cc.z);
        }
        geometry.computeBoundingBox();geometry.computeBoundingSphere();
        const materials=oldMaterials.map((m:any)=>new THREE.MeshStandardMaterial({name:m.name,color:/LightWood/i.test(m.name)?0x81857f:0x4d5552,roughness:.96,metalness:0}));
        const mesh=new THREE.Mesh(geometry,Array.isArray(o.material)?materials:materials[0]);
        mesh.castShadow=true;mesh.receiveShadow=true;prepared.add(mesh);
      });
      for(const bridge of [riverBridge,northBridge]){
        const model=prepared.clone(true);model.position.y=.12;
        bridge.g.add(model);applyWallStoneTexture(model);bridge.fallback.visible=false;
      }
    },"STONE FBX BRIDGES");

    // Utility clutter makes the village feel inhabited.
    const barrel=(x:number,z:number)=>{const b=new THREE.Mesh(new THREE.CylinderGeometry(.5,.5,1,12),mat(0x65432c,1));b.position.set(x,groundY(x,z)+.5,z);scene.add(b);for(const y of [.25,.76]){const r=new THREE.Mesh(new THREE.TorusGeometry(.51,.045,6,18),mat(0x302824,.7,.1));r.rotation.x=Math.PI/2;r.position.set(x,groundY(x,z)+y,z);scene.add(r);}};
    const crate=(x:number,z:number)=>{const c=box(1,.75,1,0x704a2e,1);c.position.set(x,groundY(x,z)+.38,z);scene.add(c);const s=box(.08,.82,1.05,0x38261a,1);s.position.set(x,groundY(x,z)+.38,z);scene.add(s);addRectCollider(x,z,1,1,0,.03);};
    [[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([x,z])=>barrel(x,z));
    [[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([x,z])=>crate(x,z));

    // Step 10 — living forest: gentle wind for foliage and small plants.
    // Group-level animation keeps the effect inexpensive on mobile.
    const windFoliage: Array<{o:THREE.Object3D,baseX:number,baseZ:number,phase:number,amp:number}> = [];
    const windPlants: Array<{o:THREE.Object3D,baseX:number,baseZ:number,phase:number,amp:number}> = [];

    // Realistic fantasy trees: firs for the forest + sacred ash trees around Midgard.
    // The ash is a deliberate visual echo of Yggdrasil rather than a generic oak.

    const ashTree=(x:number,z:number,s:number,ancient=false)=>{
      const g=new THREE.Group(), y=groundY(x,z);
      const bark=new THREE.MeshStandardMaterial({map:barkTexture,color:0xffffff,roughness:1,roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.034});
      const trunk=new THREE.Mesh(new THREE.CylinderGeometry(.42*s,.72*s,6.4*s,11),bark);
      trunk.position.y=3.2*s; trunk.rotation.z=(midHash(x,z)-.5)*.06; trunk.scale.x=1.08; g.add(trunk);
      // Buttress roots: broad, crooked and asymmetrical.
      for(let i=0;i<(ancient?9:7);i++){
        const a=i/(ancient?9:7)*Math.PI*2+midHash(i,x)*.18, len=(1.0+midHash(i,z)*1.6)*s;
        const root=new THREE.Mesh(new THREE.CylinderGeometry(.11*s,.30*s,len,7),bark);
        root.position.set(Math.cos(a)*len*.42,.28*s,Math.sin(a)*len*.42);
        root.rotation.z=Math.cos(a)*.72; root.rotation.x=-Math.sin(a)*.72; root.rotation.y=-a; g.add(root);
      }
      const branches=ancient?10:8;
      for(let i=0;i<branches;i++){
        const a=i/branches*Math.PI*2+midHash(i+11,x)*.22, len=(2.0+midHash(i+22,z)*2.2)*s;
        const br=new THREE.Mesh(new THREE.CylinderGeometry(.07*s,.19*s,len,8),bark);
        br.position.set(Math.cos(a)*len*.34,(3.25+midHash(i+33,x)*1.9)*s,Math.sin(a)*len*.34);
        br.rotation.z=Math.cos(a)*.76; br.rotation.x=Math.sin(a)*.76; br.rotation.y=-a; g.add(br);
        for(let k=0;k<4;k++){
          const leaf=new THREE.Mesh(organicBlobGeometry(new THREE.SphereGeometry((.46+midHash(k+i,90)*.25)*s,10,7),.14*s,k+i+17),new THREE.MeshStandardMaterial({map:foliageTexture,color:[0x315f39,0x427548,0x568653][(i+k)%3],roughness:1}));
          leaf.scale.y=.62; leaf.position.set(Math.cos(a)*len*(.52+.09*k)+(midHash(k,i)-.5)*.55*s,(3.9+midHash(i,k)*1.45+.25*k)*s,Math.sin(a)*len*(.52+.09*k)+(midHash(k+4,i)-.5)*.55*s);
          windFoliage.push({o:leaf,baseX:leaf.rotation.x,baseZ:leaf.rotation.z,phase:midHash(k+61,i+z)*Math.PI*2,amp:.012+.012*midHash(k+62,x)});
          g.add(leaf);
        }
      }
      if(ancient){
        // A few luminous runes are embedded in the bark rather than floating in front of it.
        const runes=['ᚱ','ᛉ','ᛟ','ᚦ','ᚨ'];
        for(let i=0;i<runes.length;i++){
          const a=-.9+i*.46;
          const rr=new THREE.Mesh(new THREE.PlaneGeometry(.48*s,.62*s),new THREE.MeshBasicMaterial({map:runeGroundTexture(runes[i],i%2?'#6fd4e8':'#e6bd61'),transparent:true,depthWrite:false,side:THREE.DoubleSide}));
          rr.position.set(Math.sin(a)*.56*s,(1.5+i*.68)*s,Math.cos(a)*.60*s); rr.rotation.y=a; g.add(rr);
        }
      }

      // Irregular bark ridges and knot scars make the trunk read as grown wood.
      for(let i=0;i<6;i++){
        const ridge=new THREE.Mesh(new THREE.SphereGeometry((.16+midHash(i,121)*.10)*s,7,5),bark);
        ridge.scale.set(.55,1.55,.42);
        const a=midHash(i,122)*Math.PI*2;
        ridge.position.set(Math.cos(a)*.50*s,(1.05+i*.48)*s,Math.sin(a)*.50*s);
        ridge.rotation.y=-a;
        g.add(ridge);
      }
      if(ancient){
        // Ancient-tree pass: layered trunk masses, crooked braces and hanging limbs
        // break the silhouette so the sacred ash reads as a centuries-old tree.
        const oldBark=new THREE.MeshStandardMaterial({
          map:barkTexture,color:0xffffff,roughness:1,
          roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.048
        });
        for(let i=0;i<4;i++){
          const a=i/4*Math.PI*2+.35;
          const len=(1.35+midHash(i,441)*.85)*s;
          const brace=new THREE.Mesh(new THREE.CylinderGeometry(.10*s,.26*s,len,8),oldBark);
          brace.position.set(Math.cos(a)*len*.34,.48*s,Math.sin(a)*len*.34);
          brace.rotation.z=Math.cos(a)*.92;
          brace.rotation.x=-Math.sin(a)*.92;
          brace.rotation.y=-a;
          g.add(brace);
        }
        for(let i=0;i<6;i++){
          const a=-1.25+i*.48;
          const len=(2.1+midHash(i,452)*1.7)*s;
          const limb=new THREE.Mesh(new THREE.CylinderGeometry(.045*s,.12*s,len,7),oldBark);
          limb.position.set(Math.sin(a)*len*.46,(5.0+midHash(i,453)*1.6)*s,Math.cos(a)*len*.46);
          limb.rotation.z=.72*Math.cos(a);
          limb.rotation.x=.55*Math.sin(a);
          limb.rotation.y=-a;
          g.add(limb);
        }
        // A few dark hollows suggest age without using expensive boolean geometry.
        for(let i=0;i<3;i++){
          const hollow=new THREE.Mesh(
            new THREE.SphereGeometry((.13+midHash(i,461)*.07)*s,8,6),
            new THREE.MeshStandardMaterial({color:0x171914,roughness:1})
          );
          const a=-.8+i*.72;
          hollow.scale.set(.55,1.15,.32);
          hollow.position.set(Math.sin(a)*.61*s,(2.05+i*.65)*s,Math.cos(a)*.61*s);
          hollow.rotation.y=a;
          g.add(hollow);
        }
      }

      g.position.set(x,y,z); addMesh(g); if(s>=1.2)addCircleCollider(x,z,.78*s,.05);
    };

    // Forest life inspired    // Forest life inspired by the Edda: four deer associated with Yggdrasil and a wandering squirrel.
    // They are game-world manifestations in Midgard, not claims that the literal cosmic animals live here.
    const deerFur=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.96});
    const deerFurLight=new THREE.MeshStandardMaterial({color:0xffe4ce,roughness:.96});
    let deerFurTexture:THREE.Texture|null=null;
    new THREE.TextureLoader().load(`${BASE}img/models/T_Deer_OrangeFur.jpg`,texture=>{
      if(!glbTreesAlive){texture.dispose();return;}
      texture.colorSpace=THREE.SRGBColorSpace;
      texture.wrapS=texture.wrapT=THREE.MirroredRepeatWrapping;
      texture.repeat.set(1.6,1.2);
      texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
      deerFurTexture=texture;
      deerFur.map=texture;deerFurLight.map=texture;
      deerFur.needsUpdate=deerFurLight.needsUpdate=true;
    },undefined,error=>console.warn('Deer fur texture unavailable',error));
    const deer = (x:number,z:number,s:number,phase:number) => {
      const g=new THREE.Group();
      const fur=deerFur;
      const furLight=deerFurLight;
      const dark=new THREE.MeshStandardMaterial({color:0x30251e,roughness:1});
      const ant=new THREE.MeshStandardMaterial({color:0xb9ad98,roughness:.9});
      const eyeMat=new THREE.MeshStandardMaterial({color:0x17130f,roughness:.25});

      // Torso: broad ribcage tapering toward the rump.
      const body=new THREE.Mesh(new THREE.SphereGeometry(.68,14,10),fur);
      body.scale.set(1.48,.66,.62);
      body.position.set(0,1.14*s,0); body.scale.multiplyScalar(s); g.add(body);

      const chest=new THREE.Mesh(new THREE.SphereGeometry(.42,12,9),furLight);
      chest.scale.set(.92,1.05,.76); chest.position.set(.52*s,1.20*s,0); g.add(chest);

      // Long sloping neck and a distinct deer head.
      const neck=new THREE.Mesh(new THREE.CylinderGeometry(.17*s,.30*s,1.18*s,10),fur);
      neck.position.set(.58*s,1.72*s,0); neck.rotation.z=-.36; g.add(neck);

      const head=new THREE.Mesh(new THREE.SphereGeometry(.34*s,12,9),furLight);
      head.scale.set(1.12,.82,.70); head.position.set(.96*s,2.14*s,0); g.add(head);

      const muzzle=new THREE.Mesh(new THREE.SphereGeometry(.17*s,10,7),furLight);
      muzzle.scale.set(1.28,.60,.62); muzzle.position.set(1.31*s,2.04*s,0); g.add(muzzle);

      const nose=new THREE.Mesh(new THREE.SphereGeometry(.075*s,8,6),dark);
      nose.scale.set(1,.68,.82); nose.position.set(1.47*s,2.04*s,0); g.add(nose);

      // Visible ears.
      for(const side of [-1,1]){
        const ear=new THREE.Mesh(new THREE.ConeGeometry(.095*s,.30*s,7),furLight);
        ear.position.set(.86*s,2.43*s,side*.18*s);
        ear.rotation.z=-.28; ear.rotation.x=side*.18;
        g.add(ear);
      }

      // Eyes with a tiny highlight.
      for(const side of [-1,1]){
        const eye=new THREE.Mesh(new THREE.SphereGeometry(.035*s,8,6),eyeMat);
        eye.position.set(1.16*s,2.23*s,side*.215*s); g.add(eye);
        const glint=new THREE.Mesh(new THREE.SphereGeometry(.009*s,6,4),new THREE.MeshBasicMaterial({color:0xffffff}));
        glint.position.set(1.19*s,2.245*s,side*.235*s); g.add(glint);
      }

      // Four articulated legs: upper limb, lower limb and small hoof.
      const legJoints: THREE.Object3D[]=[];
      for(const zSide of [-1,1]){
        for(const xSide of [-1,1]){
          const upper=new THREE.Group();
          upper.position.set(xSide*.46*s,.95*s,zSide*.30*s);
          const upperMesh=new THREE.Mesh(new THREE.CylinderGeometry(.070*s,.095*s,.56*s,7),fur);
          upperMesh.position.y=-.27*s; upper.add(upperMesh);

          const lower=new THREE.Group();
          lower.position.y=-.54*s;
          const lowerMesh=new THREE.Mesh(new THREE.CylinderGeometry(.045*s,.062*s,.56*s,7),dark);
          lowerMesh.position.y=-.27*s; lower.add(lowerMesh);

          const hoof=new THREE.Mesh(new THREE.SphereGeometry(.075*s,7,5),dark);
          hoof.scale.set(1.25,.48,1.45); hoof.position.y=-.56*s; lower.add(hoof);

          upper.add(lower); g.add(upper); legJoints.push(upper,lower);
        }
      }

      // Short white-ish tail.
      const tail=new THREE.Mesh(new THREE.SphereGeometry(.16*s,9,7),furLight);
      tail.scale.set(.68,1.12,.66); tail.position.set(-.98*s,1.38*s,0); g.add(tail);

      // More natural branched antlers, with a main beam and 3 tines per side.
      for(const side of [-1,1]){
        const beam=new THREE.Mesh(new THREE.CylinderGeometry(.040*s,.060*s,.68*s,7),ant);
        beam.position.set(.78*s,2.55*s,side*.13*s);
        beam.rotation.z=side*.22; g.add(beam);
        for(let k=0;k<3;k++){
          const tine=new THREE.Mesh(new THREE.CylinderGeometry(.020*s,.038*s,.34*s,6),ant);
          tine.position.set((.62+.12*k)*s,(2.79+.17*k)*s,side*(.13+.05*k)*s);
          tine.rotation.z=side*(.55-.08*k); g.add(tine);
        }
      }

      g.scale.setScalar(1.24);
      g.position.set(x,groundY(x,z),z);
      g.userData={phase,legJoints};
      addMesh(g);
      wildlife.push({g,x,z,r:4+midHash(phase,41)*3,speed:1.25+midHash(phase,42)*.8,phase,kind:'deer'});
    };
    const squirrel=(x:number,z:number) => {
      const g=new THREE.Group(); const fur=mat(0x6a4930,1),dark=mat(0x2f241c,1);
      const body=new THREE.Mesh(new THREE.SphereGeometry(.22,8,6),fur); body.scale.set(1.35,.9,.9); body.position.y=.72; g.add(body);
      const head=new THREE.Mesh(new THREE.SphereGeometry(.17,8,6),fur); head.position.set(.22,.86,0); g.add(head);
      for(const side of [-1,1]){const ear=new THREE.Mesh(new THREE.ConeGeometry(.06,.18,6),fur);ear.position.set(.17,.99,side*.09);g.add(ear);}
      const tail=new THREE.Mesh(new THREE.TorusGeometry(.24,.075,7,14,Math.PI*1.65),fur);tail.rotation.y=Math.PI/2;tail.position.set(-.22,.91,0);g.add(tail);
      const eye=new THREE.Mesh(new THREE.SphereGeometry(.025,6,4),dark);eye.position.set(.35,.9,-.12);g.add(eye);
      g.position.set(x,groundY(x,z),z); addMesh(g,'ratatosk','Белка Рататоск'); objects.push(g); addCircleCollider(x,z,.28,.02);
      wildlife.push({g,x,z,r:2.2,speed:.7,phase:1.7,kind:'squirrel'});
    };

    // Grove of Ash — a secluded grass-covered mound with an ancient ash growing from the crown.
    // Kept away from the main Midgard entrance so the silhouette does not block the village gate.
    const ashGroveX=-5, ashGroveZ=75;
    const ashGrove=new THREE.Group();
    ashGrove.userData={id:'ashgrove',label:'Роща Ясеня'};
    ashGrove.position.set(ashGroveX,groundY(ashGroveX,ashGroveZ),ashGroveZ);

    const groveEarthMat=new THREE.MeshStandardMaterial({color:0x4a3a28,roughness:1});
    // Use the SAME terrain texture/material response as the surrounding Midgard ground,
    // so the mound visually grows out of the landscape instead of looking painted green.
    const groveGrassMat=terrainMat.clone();
    groveGrassMat.map=groundTexture;
    groveGrassMat.color.set(0xffffff);
    groveGrassMat.roughness=.985;
    groveGrassMat.metalness=0;
    groveGrassMat.roughnessMap=surfaceMaps.rough;
    groveGrassMat.bumpMap=surfaceMaps.height;
    groveGrassMat.bumpScale=.018;
    groveGrassMat.needsUpdate=true;
    const groveBarkMat=new THREE.MeshStandardMaterial({map:barkTexture,color:0x5a3b27,roughness:1,roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.035});
    const groveLeafMat=new THREE.MeshStandardMaterial({map:foliageTexture,color:0x4f7a43,roughness:1});
    const groveStoneMat=new THREE.MeshStandardMaterial({color:0x77766b,roughness:1});

    // Broad earthen embankment — deliberately NOT a half-sphere.
    // Three overlapping tapered terraces make the hill read as packed ground rising
    // naturally from the terrain, so the ash no longer looks as if it sits on a balloon.
    const moundLower=new THREE.Mesh(
      new THREE.CylinderGeometry(4.55,6.15,1.05,24,2,false),
      groveEarthMat
    );
    moundLower.scale.set(1.08,1,.90);
    moundLower.position.set(0,.50,0);
    moundLower.rotation.y=.08;
    ashGrove.add(moundLower);

    const moundMid=new THREE.Mesh(
      new THREE.CylinderGeometry(3.75,5.25,1.05,24,2,false),
      groveGrassMat
    );
    moundMid.scale.set(1.06,1,.90);
    moundMid.position.set(-.08,1.18,-.05);
    moundMid.rotation.y=-.06;
    ashGrove.add(moundMid);

    const moundTop=new THREE.Mesh(
      new THREE.CylinderGeometry(2.85,4.30,.82,24,2,false),
      groveGrassMat
    );
    moundTop.scale.set(1.05,1,.88);
    moundTop.position.set(.08,1.87,-.18);
    moundTop.rotation.y=.10;
    ashGrove.add(moundTop);

    // Small irregular shoulders soften the terrace edges without turning the mound
    // back into a sphere.
    for(let i=0;i<9;i++){
      const a=i/9*Math.PI*2+.18;
      const shoulder=new THREE.Mesh(
        new THREE.DodecahedronGeometry(.72+midHash(i,1319)*.34,1),
        i%3===0?groveEarthMat:groveGrassMat
      );
      shoulder.scale.set(1.35,.46,1.05);
      shoulder.position.set(
        Math.cos(a)*(4.15+midHash(i,1320)*.75),
        .52+midHash(i,1321)*.38,
        Math.sin(a)*(3.45+midHash(i,1322)*.55)
      );
      shoulder.rotation.y=midHash(i,1323)*Math.PI;
      ashGrove.add(shoulder);
    }

    // Open natural sanctuary: replace the artificial red door with a carved sign.
    const groveSign=new THREE.Group();groveSign.position.set(0,0,4.78);
    const signWood=mat(0x5b3821,.96);
    for(const px of [-1.22,1.22]){const post=new THREE.Mesh(new THREE.CylinderGeometry(.10,.14,1.75,8),signWood);post.position.set(px,.88,0);groveSign.add(post);}
    const signBoard=new THREE.Mesh(new THREE.BoxGeometry(3.45,.82,.16),mat(0x6b4326,.94));signBoard.position.set(0,1.58,0);groveSign.add(signBoard);
    const groveSignTex=signTexture("Роща Ясеня");
    const signLetters=new THREE.Mesh(new THREE.PlaneGeometry(3.18,.64),new THREE.MeshBasicMaterial({map:groveSignTex,transparent:true,depthWrite:false,toneMapped:false}));
    signLetters.position.set(0,1.58,.091);groveSign.add(signLetters);
    const signRune=new THREE.Mesh(new THREE.CircleGeometry(.23,16),new THREE.MeshStandardMaterial({color:0xc49a50,emissive:0x5b3511,emissiveIntensity:.55,metalness:.35,roughness:.5}));
    signRune.position.set(-1.47,1.58,.10);groveSign.add(signRune);ashGrove.add(groveSign);

    // Short stepping-stone path leads to the sign and old ash.
    for(let i=0;i<5;i++){
      const st=new THREE.Mesh(new THREE.DodecahedronGeometry(.44-.035*i,1),sacredStoneMaterials[i%3]);
      st.scale.set(1.25,.20,.78);
      st.position.set((i%2?-.10:.10),.12,5.05+i*.72);
      ashGrove.add(st);
    }

    // Ancient ash growing directly from the mound.
    const groveTrunk=new THREE.Mesh(new THREE.CylinderGeometry(.72,1.05,5.9,11),groveBarkMat);
    groveTrunk.position.set(0,4.72,-.20);
    groveTrunk.rotation.z=-.045;
    ashGrove.add(groveTrunk);
    for(let i=0;i<8;i++){
      const a=i/8*Math.PI*2+.20;
      const len=2.9+midHash(i,1330)*1.9;
      const br=new THREE.Mesh(new THREE.CylinderGeometry(.10,.28,len,7),groveBarkMat);
      br.position.set(Math.cos(a)*len*.30,7.1+midHash(i,1331)*1.0,Math.sin(a)*len*.30-.20);
      br.rotation.z=Math.cos(a)*.76;
      br.rotation.x=Math.sin(a)*.76;
      br.rotation.y=-a;
      ashGrove.add(br);
      for(let k=0;k<3;k++){
        const leaf=new THREE.Mesh(new THREE.SphereGeometry(.78+midHash(i,k+1332)*.34,9,6),groveLeafMat.clone());
        (leaf.material as THREE.MeshStandardMaterial).color.offsetHSL((midHash(i,k+1333)-.5)*.025,0,(midHash(i,k+1334)-.5)*.07);
        leaf.scale.set(1.25,.62,1.0);
        leaf.position.set(Math.cos(a)*len*(.44+.11*k)+(midHash(k,i)-.5)*.65,7.7+k*.32+midHash(i,k)*.85,Math.sin(a)*len*(.44+.11*k)-.20+(midHash(k+4,i)-.5)*.65);
        ashGrove.add(leaf);
      }
    }

    markMeshes(ashGrove);
    scene.add(ashGrove);
    objects.push(ashGrove);
    addCircleCollider(ashGroveX,ashGroveZ,2.6,.08);
    // Hoddmímir's Holt — a sacred refuge beneath a smaller world-tree.
    const hoddFallbackStart=scene.children.length;
    const hoddX=62,hoddZ=78;
    const hodd=new THREE.Group(); hodd.userData={id:'hoddmimir',label:'Лес Ходдмимира'};
    const trunkMat=new THREE.MeshStandardMaterial({map:barkTexture,color:0xffffff,roughness:1,roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.034});
    const worldTrunk=new THREE.Mesh(new THREE.CylinderGeometry(1.35,2.1,10.5,13),trunkMat); worldTrunk.position.set(hoddX,groundY(hoddX,hoddZ)+5.25,hoddZ); worldTrunk.rotation.z=-.05; scene.add(worldTrunk);
    for(let i=0;i<8;i++){
      const a=i/8*Math.PI*2+.2,len=(5.0+midHash(i,1401)*4.0);
      const br=new THREE.Mesh(new THREE.CylinderGeometry(.25,.58,len,9),trunkMat); br.position.set(hoddX+Math.cos(a)*len*.36,groundY(hoddX,hoddZ)+6.8+midHash(i,1402)*2.2,hoddZ+Math.sin(a)*len*.36); br.rotation.z=Math.cos(a)*.8;br.rotation.x=Math.sin(a)*.8;br.rotation.y=-a;scene.add(br);
      for(let k=0;k<4;k++){const leaf=new THREE.Mesh(new THREE.SphereGeometry((1.0+midHash(k+i,1403)*.55),9,6),new THREE.MeshStandardMaterial({map:foliageTexture,color:[0x234a31,0x2d5c39,0x386b42][(i+k)%3],roughness:1}));leaf.scale.y=.65;leaf.position.set(hoddX+Math.cos(a)*len*(.48+.09*k)+(midHash(k,i)-.5)*1.1,groundY(hoddX,hoddZ)+8.0+midHash(i,k)*3.0+k*.45,hoddZ+Math.sin(a)*len*(.48+.09*k)+(midHash(k+5,i)-.5)*1.1);scene.add(leaf);}
    }
    // Deeply carved luminous runes on the trunk.
    for(let i=0;i<9;i++){const glyph=['ᚱ','ᛉ','ᛟ','ᚦ','ᚨ','ᚠ','ᚷ','ᛏ','ᚢ'][i];const tex=runeGroundTexture(glyph,i%2?'#63d9ef':'#f0c65d');const q=new THREE.Mesh(new THREE.PlaneGeometry(.7,.9),new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,side:THREE.DoubleSide}));q.position.set(hoddX+Math.sin(i*.63)*1.42,groundY(hoddX,hoddZ)+1.0+i*.78,hoddZ+Math.cos(i*.63)*1.42);q.rotation.y=Math.PI*.5-i*.16;scene.add(q);}
    // Sacred stone altar and eternal fire at the roots.
    const altar2=new THREE.Mesh(new THREE.DodecahedronGeometry(1.35,1),sacredStoneMaterials[0]);altar2.scale.set(1.45,.7,1.15);altar2.position.set(hoddX,groundY(hoddX,hoddZ)+.75,hoddZ+1.6);scene.add(altar2);
    fire(hoddX,hoddZ+2.1,.72);
    const hoddRing=new THREE.Mesh(new THREE.TorusGeometry(6.7,.06,8,64),new THREE.MeshStandardMaterial({color:0x8bcfd1,emissive:0x235f62,emissiveIntensity:1.9,transparent:true,opacity:.62}));hoddRing.rotation.x=Math.PI/2;hoddRing.position.set(hoddX,groundY(hoddX,hoddZ)+.055,hoddZ);scene.add(hoddRing);
    for(let i=0;i<22;i++){const a=midHash(i,1410)*Math.PI*2,rr=1.8+midHash(i,1411)*8.2,x=hoddX+Math.cos(a)*rr,z=hoddZ+Math.sin(a)*rr;addGroundRune(hodd,(x-hoddX),(z-hoddZ),['ᚱ','ᛉ','ᛟ','ᚦ','ᚨ','ᚠ'][i%6],i%2?0x67d3df:0xe0b55a,.35,midHash(i,1412)*Math.PI);}
    // Floating rune motes are intentionally sparse for mobile performance.
    for(let i=0;i<18;i++){const glyph=['ᚱ','ᚨ','ᛟ','ᚦ'][i%4];const tex=runeGroundTexture(glyph,i%2?'#63d9ef':'#e4bd65');const q=new THREE.Mesh(new THREE.PlaneGeometry(.34,.44),new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,side:THREE.DoubleSide}));q.position.set(hoddX+(midHash(i,1420)-.5)*12,1.4+midHash(i,1421)*7,hoddZ+(midHash(i,1422)-.5)*12);q.userData.floatPhase=midHash(i,1423)*6;scene.add(q);}
    addMesh(hodd,'hoddmimir','Лес Ходдмимира');objects.push(hodd);addCircleCollider(hoddX,hoddZ,4.7,.08);
    const hoddFallbackVisuals=scene.children.slice(hoddFallbackStart);

    loadGlbWithFolderFallback(hoddmimirAsset,(gltf:any)=>{
      if(!glbTreesAlive)return;
      const model=gltf.scene.clone(true);markMeshes(model);
      model.traverse((o:any)=>{if(!o.isMesh)return;o.visible=true;o.castShadow=true;o.receiveShadow=true;o.frustumCulled=true;});
      model.scale.setScalar(.76);
      model.rotation.set(0,.18,0);
      model.position.set(hoddX,groundY(hoddX,hoddZ),hoddZ);
      model.userData={id:'hoddmimir',label:'Лес Ходдмимира'};
      hoddFallbackVisuals.forEach((o:any)=>o.visible=false);
      addMesh(model,'hoddmimir','Лес Ходдмимира');objects.push(model);
      const glow=new THREE.PointLight(0xffb13c,2.4,18,2);glow.position.set(hoddX,groundY(hoddX,hoddZ)+5,hoddZ+1.5);scene.add(glow);
      console.log('[HODDMIMIR] loaded',`${BASE}img/models/${hoddmimirAsset}`);
    },'HODDMIMIR');

    // Angelic Alliance Chest — hidden at the edge of Hoddmimir's Holt.
    // The model is kept fully static and centered on its interaction point.
    const angelicChestX=hoddX+6.2,angelicChestZ=hoddZ-3.4;
    loadGlbWithFolderFallback('Angelic_Alliance_Chest_5m.glb?v=1',(gltf:any)=>{
      if(!glbTreesAlive)return;

      const chestAnchor=new THREE.Group();
      chestAnchor.position.set(angelicChestX,groundY(angelicChestX,angelicChestZ),angelicChestZ);
      chestAnchor.rotation.y=-0.35;
      chestAnchor.userData={id:'angelicChest',label:'Серебряный ангельский сундук'};

      const chest=gltf.scene;
      markMeshes(chest);
      chest.position.set(0,0,0);
      chest.rotation.set(0,0,0);
      chest.scale.setScalar(1);
      chest.updateMatrixWorld(true);

      // Keep the largest dimension at about 5 metres even if the exported file changes later.
      const rawBox=new THREE.Box3().setFromObject(chest);
      const rawSize=new THREE.Vector3();
      rawBox.getSize(rawSize);
      const sourceMax=Math.max(rawSize.x,rawSize.y,rawSize.z,.001);
      chest.scale.setScalar(5/sourceMax);
      chest.updateMatrixWorld(true);

      // Correct an offset pivot: centre the visible geometry on the anchor and sit it on the ground.
      const bb=new THREE.Box3().setFromObject(chest);
      const center=new THREE.Vector3();
      bb.getCenter(center);
      chest.position.set(-center.x,-bb.min.y,-center.z);
      chest.updateMatrixWorld(true);

      chest.traverse((o:any)=>{
        if(!o.isMesh)return;
        o.castShadow=true;
        o.receiveShadow=true;
      });

      chestAnchor.add(chest);
      scene.add(chestAnchor);
      objects.push(chestAnchor);
      addCircleCollider(angelicChestX,angelicChestZ,2.25,.08);

      const angelicGlow=new THREE.PointLight(0xe8f4ff,1.15,10,2);
      angelicGlow.position.set(angelicChestX,groundY(angelicChestX,angelicChestZ)+3.2,angelicChestZ);
      scene.add(angelicGlow);

      console.log('[ANGELIC CHEST] placed at Hoddmimir, STATIC, max size ~5m');
    },'ANGELIC CHEST');

    // The four deer are a deliberate Yggdrasil reference: they roam a separate clearing.    // The four deer are a deliberate Yggdrasil reference: they roam a separate clearing.
    const deerClearingX=43, deerClearingZ=32;
    for(let i=0;i<4;i++) deer(deerClearingX+(i-1.5)*2.8,deerClearingZ+(i%2?2.8:-2.8),1.20+midHash(i,1440)*.18,10+i);
    const deerStone=new THREE.Mesh(new THREE.DodecahedronGeometry(.72,1),sacredStoneMaterials[1]);deerStone.position.set(deerClearingX,groundY(deerClearingX,deerClearingZ)+.5,deerClearingZ);scene.add(deerStone);
    const deerRing=new THREE.Mesh(new THREE.TorusGeometry(5.8,.045,7,48),new THREE.MeshStandardMaterial({color:0x7e8b72,emissive:0x303d2a,emissiveIntensity:.8,transparent:true,opacity:.48}));deerRing.rotation.x=Math.PI/2;deerRing.position.set(deerClearingX,groundY(deerClearingX,deerClearingZ)+.035,deerClearingZ);scene.add(deerRing);
    squirrel(ashGroveX+5,ashGroveZ+1);

    // Golden chest behind the repaired North Bridge.
    // Model: "Fortnite Chest" by Onur, CC BY 4.0.
    // The interaction id/location and quest logic stay unchanged.
    const forgottenCacheAsset='Golden_Chest_Light.glb?v=3';
    const forgottenCacheRoot=new THREE.Group();
    forgottenCacheRoot.userData={id:'forestCache',label:'Золотой сундук'};
    forgottenCacheRoot.position.set(-72,groundY(-72,48),48);
    scene.add(forgottenCacheRoot);
    objects.push(forgottenCacheRoot);
    displayChests.push(forgottenCacheRoot);

    loadGlbWithFolderFallback(forgottenCacheAsset,(gltf:any)=>{
      const chest=gltf.scene;
      markMeshes(chest);
      chest.traverse((o:any)=>{
        if(!o.isMesh)return;
        o.castShadow=true;
        o.receiveShadow=true;
      });
      // The Onur model is physically much smaller than the previous chest,
      // so normalize it to a clear in-game size instead of using the old scale value.
      chest.scale.setScalar(1);
      chest.rotation.y=0;
      chest.position.set(0,0,0);
      chest.updateMatrixWorld(true);
      const rawBox=new THREE.Box3().setFromObject(chest);
      const rawSize=new THREE.Vector3();
      rawBox.getSize(rawSize);
      const targetWidth=3.25;
      const sourceWidth=Math.max(rawSize.x,rawSize.z,.001);
      chest.scale.setScalar(targetWidth/sourceWidth);
      chest.updateMatrixWorld(true);
      const bb=new THREE.Box3().setFromObject(chest);
      chest.position.y-=bb.min.y;
      chest.updateMatrixWorld(true);
      forgottenCacheRoot.add(chest);

      // A restrained warm glow keeps the reward chest readable in the forest.
      const cacheGlow=new THREE.PointLight(0xffc161,1.1,6.5,2);
      cacheGlow.position.set(0,1.15,.45);
      forgottenCacheRoot.add(cacheGlow);
      console.log('[FORGOTTEN CACHE] Onur Fortnite Chest loaded',forgottenCacheAsset);
    },'FORGOTTEN CACHE');
    addCircleCollider(-72,48,2.15,.08);

    // Right forest expansion: detailed landmark clearings. The goal is a cinematic
    // handcrafted look rather than a ring of identical primitive stones.
    const plankBetween=(a:THREE.Vector3,b:THREE.Vector3,w:number,h:number,material:THREE.Material)=>{
      const d=a.distanceTo(b), m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);
      m.position.copy(a).add(b).multiplyScalar(.5);
      m.lookAt(b); return m;
    };
    function irregularRock(g:THREE.Group,x:number,y:number,z:number,s:number,color:number,seed:number){
      const r=new THREE.Mesh(new THREE.DodecahedronGeometry(s,1),sacredStoneMaterials[Math.abs(seed)%3]);
      r.scale.set(.72+midHash(seed,1)*.62,.55+midHash(seed,2)*.85,.68+midHash(seed,3)*.55);
      r.rotation.set(midHash(seed,4)*1.2,midHash(seed,5)*Math.PI,midHash(seed,6)*1.1); r.position.set(x,y,z); g.add(r); return r;
    }

    const makeFallenAsh=(x:number,z:number)=>{
      const g=new THREE.Group();
      g.position.set(x,groundY(x,z),z);
      g.userData={id:'fallenAsh',label:'Поверженный ясень'};

      const ring=new THREE.Mesh(
        new THREE.TorusGeometry(7.8,.07,8,64),
        new THREE.MeshStandardMaterial({color:0x8b9f87,emissive:0x334633,emissiveIntensity:1.0,transparent:true,opacity:.55})
      );
      ring.rotation.x=Math.PI/2;
      ring.position.y=.05;
      g.add(ring);

      // Brown broken ash stump: low-poly, heavy and old, without the three plank-like pieces on top.
      const fallenBark=new THREE.MeshStandardMaterial({
        map:barkTexture,color:0x6b4128,roughness:1,
        roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.04
      });
      const stump=new THREE.Mesh(new THREE.CylinderGeometry(1.45,2.15,4.9,11),fallenBark);
      stump.position.set(0,2.45,.2);
      stump.rotation.z=-.035;
      g.add(stump);

      // Irregular shattered crown only — no long boards/branches across the top.
      for(let i=0;i<6;i++){
        const a=i/6*Math.PI*2+.15;
        const shard=new THREE.Mesh(new THREE.ConeGeometry(.30,.95+midHash(i,1500)*.75,6),fallenBark);
        shard.position.set(Math.cos(a)*.88,4.95+midHash(i,1501)*.34,.2+Math.sin(a)*.88);
        shard.rotation.z=(midHash(i,1502)-.5)*.32;
        shard.rotation.x=(midHash(i,1503)-.5)*.22;
        g.add(shard);
      }

      // Dark entrance cut into the base of the stump.
      const entrance=new THREE.Mesh(new THREE.BoxGeometry(1.38,2.08,.24),new THREE.MeshBasicMaterial({color:0x080808}));
      entrance.position.set(0,1.20,1.93);
      g.add(entrance);
      const door=new THREE.Mesh(new THREE.BoxGeometry(1.08,1.82,.16),new THREE.MeshStandardMaterial({color:0x050505,roughness:.95}));
      door.position.set(0,1.18,2.08);
      g.add(door);
      const jambMat=mat(0x3f2619,1);
      const lintel=new THREE.Mesh(new THREE.BoxGeometry(1.48,.16,.28),jambMat);lintel.position.set(0,2.10,2.05);g.add(lintel);
      [-.68,.68].forEach(px=>{const j=new THREE.Mesh(new THREE.BoxGeometry(.15,2.04,.28),jambMat);j.position.set(px,1.20,2.05);g.add(j);});
      const handle=new THREE.Mesh(new THREE.SphereGeometry(.07,7,5),mat(0x8a6b3a,.6,.35));
      handle.position.set(.34,1.18,2.18);g.add(handle);

      for(let i=0;i<9;i++){
        const a=midHash(i,1510)*Math.PI*2,rr=1.7+midHash(i,1511)*5.6;
        irregularRock(g,Math.cos(a)*rr,.22,Math.sin(a)*rr,.3+midHash(i,1512)*.45,i%3?0x505852:0x5f645d,1513+i);
      }
      for(let i=0;i<8;i++) addGroundRune(g,(midHash(i,1520)-.5)*5.8,(midHash(i,1521)-.5)*5.8,['ᚦ','ᛉ','ᚱ','ᛟ'][i%4],0x9fd0c4,.42,midHash(i,1522)*Math.PI);

      addMesh(g,'fallenAsh','Поверженный ясень');
      objects.push(g);
      addCircleCollider(x,z,1.8,.08);
      return g;
    };

    const makeForgottenCamp=(x:number,z:number)=>{
      const g=new THREE.Group(); g.position.set(x,groundY(x,z),z); g.userData={id:'hunterCamp',label:'Забытая стоянка'};

      // Collapsed Viking wagon: crooked frame, rotten planks and a broken spoked wheel.
      const wagon=new THREE.Group(); wagon.position.set(-1.45,.05,-.65); wagon.rotation.y=-.34; g.add(wagon);
      const rotten=mat(0x5b3b28,1), darkRotten=mat(0x38271e,1), iron=mat(0x292a28,.82,.35), mossMat=mat(0x43553a,1);
      const bed=box(3.7,.26,1.65,0x60412d,1); bed.position.y=1.05; bed.rotation.z=-.08; wagon.add(bed);
      for(let i=0;i<9;i++){
        const plank=box(2.8+midHash(i,501)*1.1,.16,.26, i%3?0x63452f:0x4b3325,1);
        plank.position.set(-.25+(midHash(i,502)-.5)*.25,1.18+(midHash(i,503)-.5)*.34,-.72+(i%3)*.68);
        plank.rotation.z=(midHash(i,504)-.5)*.16; plank.rotation.y=(midHash(i,505)-.5)*.16; wagon.add(plank);
      }
      for(const [xx,zz,rr] of [[-1.55,-.83,.82],[1.35,-.83,.74]] as Array<[number,number,number]>) {
        const wheel=new THREE.Mesh(new THREE.TorusGeometry(rr,.14,7,20,Math.PI*1.56),iron); wheel.rotation.y=Math.PI/2; wheel.rotation.z=rr>.8?.08:-.18; wheel.position.set(xx,.9,zz); wagon.add(wheel);
        const hub=new THREE.Mesh(new THREE.CylinderGeometry(.15,.18,.28,8),iron); hub.rotation.z=Math.PI/2; hub.position.set(xx,.9,zz); wagon.add(hub);
        for(let k=0;k<6;k++){
          const a=k/6*Math.PI*2+.25; const aa=new THREE.Vector3(xx+Math.cos(a)*rr*.82,.9+Math.sin(a)*rr*.82,zz+.02);
          const bb=new THREE.Vector3(xx,.9,zz+.02); wagon.add(plankBetween(bb,aa,.065,.065,iron));
        }
      }
      const axle=new THREE.Mesh(new THREE.BoxGeometry(3.8,.14,.16),iron); axle.position.set(0,.62,-.83); axle.rotation.z=.08; wagon.add(axle);
      const shaft=new THREE.Mesh(new THREE.BoxGeometry(.16,.18,3.2),rotten); shaft.position.set(1.8,.8,-.35); shaft.rotation.y=.9; wagon.add(shaft);
      for(let i=0;i<6;i++){const moss=new THREE.Mesh(new THREE.SphereGeometry(.28+midHash(i,507)*.18,7,5),mossMat);moss.scale.set(1.4,.32,.7);moss.position.set(-1.1+i*.48,1.34+(i%2)*.05,-.82);wagon.add(moss);}

      // Collapsed teepee-style leather shelter, partially swallowed by the forest.
      const tent=new THREE.Group(); tent.position.set(2.85,.02,1.15); tent.rotation.y=.18; g.add(tent);
      const poles=mat(0x4a3021,1);
      for(let i=0;i<4;i++){const a=i/4*Math.PI*2+.25; const p=box(.11,3.7,.11,0x4a3021,1); p.position.set(Math.cos(a)*1.25,1.65,Math.sin(a)*1.25); p.rotation.z=Math.cos(a)*.34; p.rotation.x=-Math.sin(a)*.34; tent.add(p);}
      const cloth=new THREE.Mesh(new THREE.ConeGeometry(2.0,3.2,4,1,true),new THREE.MeshStandardMaterial({color:0x4a3127,roughness:1,side:THREE.DoubleSide,transparent:true,opacity:.94}));
      cloth.position.y=1.45; cloth.scale.set(1,.9,.82); cloth.rotation.y=.78; tent.add(cloth);
      for(let i=0;i<9;i++){const moss=new THREE.Mesh(new THREE.SphereGeometry(.16+midHash(i,509)*.14,6,5),mossMat);moss.scale.set(1.5,.35,.8);moss.position.set((midHash(i,510)-.5)*2.4,1.0+midHash(i,511)*1.9,(midHash(i,512)-.5)*1.8);tent.add(moss);}
      const flap=box(1.05,1.55,.05,0x2f211c,1); flap.position.set(0,.72,1.65); flap.rotation.y=.16; tent.add(flap);

      // Stone hearth with warm firelight.
      fire(x+.1,z+.45,.78);
      const campLight=new THREE.PointLight(0xff9a45,1.0,8,2); campLight.position.set(.1,1.7,.45); g.add(campLight);

      // Rusted shield with a broken boss and scattered tools.
      const shield=new THREE.Group(); shield.position.set(-3.15,.5,1.25); shield.rotation.y=.8; shield.rotation.z=-.22; g.add(shield);
      const shieldDisc=new THREE.Mesh(new THREE.CircleGeometry(1.05,16),new THREE.MeshStandardMaterial({color:0x3b3c39,roughness:.85,metalness:.55,side:THREE.DoubleSide})); shieldDisc.rotation.x=-Math.PI/2; shieldDisc.scale.y=.8; shield.add(shieldDisc);
      const rim=new THREE.Mesh(new THREE.TorusGeometry(1.03,.11,7,18),iron); rim.rotation.x=-Math.PI/2; rim.scale.y=.8; shield.add(rim);
      const boss=new THREE.Mesh(new THREE.CylinderGeometry(.24,.31,.22,8),iron); boss.rotation.x=Math.PI/2; boss.position.set(.18,0,.08); shield.add(boss);
      const crack=box(.05,.035,1.15,0x171816,1); crack.position.set(-.28,.025,.05); crack.rotation.y=.42; shield.add(crack);

      const toolMat=mat(0x2d2c29,.65,.45);
      const axe=(px:number,pz:number,rot:number)=>{const t=new THREE.Group();t.position.set(px,.18,pz);t.rotation.y=rot;const h=box(.09,.09,1.55,0x4d3322,1);h.rotation.x=Math.PI/2;h.position.z=.15;t.add(h);const head=box(.55,.13,.28,0x30302d,.55);head.position.set(0,.02,-.62);head.rotation.y=-.25;t.add(head);g.add(t);};
      axe(-1.9,3.15,.45); axe(4.15,-.65,-.8);
      const hammer=box(.11,.11,.95,0x523724,1); hammer.rotation.y=.55; hammer.position.set(-2.1,.16,2.65); g.add(hammer);

      // Leather pouch, coins and bones.
      const pouch=new THREE.Mesh(new THREE.SphereGeometry(.48,9,7),new THREE.MeshStandardMaterial({color:0x5b3b27,roughness:1})); pouch.scale.set(.9,1.15,.65); pouch.position.set(3.55,.48,2.65); g.add(pouch);
      const strap=new THREE.Mesh(new THREE.TorusGeometry(.33,.035,6,18,Math.PI*1.5),mat(0x2e2119,1)); strap.rotation.x=Math.PI/2; strap.position.set(3.55,.93,2.65); g.add(strap);
      for(let i=0;i<15;i++){const c=new THREE.Mesh(new THREE.CylinderGeometry(.09,.09,.025,10),new THREE.MeshStandardMaterial({color:0x8e7445,metalness:.55,roughness:.45}));const a=midHash(i,520)*Math.PI*2,rr=2.1+midHash(i,521)*3.7;c.position.set(Math.cos(a)*rr,.13,Math.sin(a)*rr);c.rotation.x=Math.PI/2;g.add(c);}
      for(let i=0;i<5;i++){const bone=box(.08,.08,.9,0xaaa28d,1);bone.position.set(3.2+midHash(i,522)*2.4,.18,-2.7+midHash(i,523)*1.7);bone.rotation.y=midHash(i,524)*Math.PI;bone.rotation.z=(midHash(i,525)-.5)*.25;g.add(bone);}

      // Ancient runes etched into the mossy ground.
      const runeRing=new THREE.Mesh(new THREE.TorusGeometry(4.7,.055,7,64),new THREE.MeshBasicMaterial({color:0x8bc5c7,transparent:true,opacity:.5})); runeRing.rotation.x=Math.PI/2; runeRing.position.y=.075; g.add(runeRing);
      const runeGlyphs=["ᚠ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ"];
      runeGlyphs.forEach((ch,i)=>{const a=i/runeGlyphs.length*Math.PI*2;addGroundRune(g,Math.cos(a)*4.15,Math.sin(a)*4.15,ch,i%3===0?0xc9a55a:0x79b8bd,.55,a+.3);});
      for(let i=0;i<18;i++){const r=irregularRock(g,(midHash(i,530)-.5)*8,.18,(midHash(i,531)-.5)*7,.22+midHash(i,532)*.34, i%4===0?0x5d6658:0x4e544d,530+i);}
      for(let i=0;i<12;i++){const root=box(.12,.12,1.7+midHash(i,535)*2.0,0x3a2a20,1);root.position.set((midHash(i,536)-.5)*8,.11,(midHash(i,537)-.5)*8);root.rotation.y=midHash(i,538)*Math.PI;root.rotation.z=(midHash(i,539)-.5)*.2;g.add(root);}

      addMesh(g,'hunterCamp','Забытая стоянка'); objects.push(g); addCircleCollider(x,z,1.9,.1);
    };

    const makeForestClearing=(x:number,z:number,r:number,id:string,label:string,kind:number)=>{
      const g=new THREE.Group(); g.position.set(x,groundY(x,z),z);
      const ringColor=kind===1?0x718e78:kind===2?0x78808a:0x8a765e; const clearingMossMat=mat(0x43553a,1);
      const ring=new THREE.Mesh(new THREE.TorusGeometry(r,.07,8,64),new THREE.MeshStandardMaterial({color:ringColor,emissive:ringColor,emissiveIntensity:.65,transparent:true,opacity:.42}));
      ring.rotation.x=Math.PI/2; ring.position.y=.045; g.add(ring);
      const count=Math.floor(r/1.7);
      for(let i=0;i<count;i++){
        const a=midHash(i,x*11+z)*Math.PI*2, rr=r*.35+midHash(i,z*17)*r*.45;
        irregularRock(g,Math.cos(a)*rr,.2,Math.sin(a)*rr,.34+midHash(i,33)*.32,kind===1?0x505c52:kind===2?0x50575b:0x574a3c,800+i);
      }
      if(kind===1){
        for(let i=0;i<8;i++){const m=new THREE.Mesh(new THREE.SphereGeometry(.34+midHash(i,600)*.25,7,5),clearingMossMat);m.scale.y=.35;m.position.set((midHash(i,601)-.5)*r,.16,(midHash(i,602)-.5)*r);g.add(m);}
        for(let i=0;i<6;i++) addGroundRune(g,(midHash(i,603)-.5)*r*.9,(midHash(i,604)-.5)*r*.9,["ᛉ","ᚱ","ᚦ","ᚨ","ᛟ","ᚠ"][i],0x78a8a4,.42,midHash(i,605)*Math.PI);
      }
      if(kind===2){
        // A dead ash silhouette with a hollow center and broken branches.
        const stump=new THREE.Mesh(new THREE.CylinderGeometry(1.45,2.0,4.6,9),new THREE.MeshStandardMaterial({map:barkTexture,color:0x5a4a38,roughness:1})); stump.position.set(0,2.25,0); stump.rotation.z=.08; g.add(stump);
        const hollow=new THREE.Mesh(new THREE.SphereGeometry(.72,10,8),new THREE.MeshBasicMaterial({color:0x171714})); hollow.scale.set(1,.8,.45); hollow.position.set(0,1.75,1.32); g.add(hollow);
        for(let i=0;i<5;i++){const br=box(.22,.24,2.8+midHash(i,610)*1.7,0x4a392d,1);br.position.set((midHash(i,611)-.5)*2.0,3.7+midHash(i,612)*1.8,(midHash(i,613)-.5)*1.7);br.rotation.y=midHash(i,614)*Math.PI;br.rotation.z=(midHash(i,615)-.5)*.65;g.add(br);}
        addGroundRune(g,0,0,"ᚦ",0xd0b56d,.95,.15);
      }
      addMesh(g,id,label); objects.push(g);
    };

    makeForgottenCamp(68,8);
    // Deep Grove — restore the treehouse version.
    const deepGroveAsset='Midgard_Deep_Grove_Treehouse_V1_YUP.glb';
    const deepGroveX=-45,deepGroveZ=75;
    const deepGroveRoot=new THREE.Group();
    deepGroveRoot.userData={id:'deepGrove',label:'Глубокая роща'};
    deepGroveRoot.position.set(deepGroveX,groundY(deepGroveX,deepGroveZ),deepGroveZ);


    loadGlbWithFolderFallback(deepGroveAsset,(gltf:any)=>{
      const grove=gltf.scene;
      markMeshes(grove);
      grove.traverse((o:any)=>{
        if(!o.isMesh)return;
        o.castShadow=true;
        o.receiveShadow=true;

        const applyDeepGroveLook=(m:any)=>{
          if(!m)return m;
          const mm=m.clone?m.clone():m;
          const mn=String(mm.name||'').toLowerCase();

          // Ancient ash: 50% darker trunk / bark.
          if(/bark|trunk|root|branch/.test(mn) && mm.color){
            mm.color.multiplyScalar(.50);
            if('roughness' in mm) mm.roughness=Math.max(mm.roughness??.9,.92);
          }

          // Tree house: about 30% darker overall.
          if(/cabin|house|wood|platform|balcony|ladder|foundation/.test(mn) && mm.color){
            mm.color.multiplyScalar(.70);
          }

          // Deep natural green roof.
          if(/roof|shingle/.test(mn) && mm.color){
            mm.color.set(0x2f6b3a);
            if('roughness' in mm) mm.roughness=Math.max(mm.roughness??.85,.90);
          }

          // Dark red door.
          if(/door/.test(mn) && mm.color){
            mm.color.set(0x8f2f26);
            if('roughness' in mm) mm.roughness=Math.max(mm.roughness??.8,.88);
            if('metalness' in mm) mm.metalness=0;
          }

          mm.needsUpdate=true;
          return mm;
        };

        if(Array.isArray(o.material))o.material=o.material.map(applyDeepGroveLook);
        else o.material=applyDeepGroveLook(o.material);
      });

      grove.scale.set(.86*HOME_SCALE,.86*HOME_SCALE*BUILDING_HEIGHT,.86*HOME_SCALE);
      grove.rotation.y=-.38;
      grove.position.set(0,0,0);
      grove.updateMatrixWorld(true);
      const bb=new THREE.Box3().setFromObject(grove);
      grove.position.y-=bb.min.y;
      deepGroveRoot.add(grove);applyHomeTextures(grove);
      console.log('[DEEP GROVE] Treehouse GLB restored',deepGroveAsset);
    },'DEEP GROVE');

    scene.add(deepGroveRoot);
    objects.push(deepGroveRoot);
    addCircleCollider(deepGroveX,deepGroveZ,2.7*HOME_SCALE,.08);
    // Fallen Ash now uses the controlled procedural stump above.
    // The older GLB is intentionally not loaded because its upper pieces read as wooden planks.
    const fallenAshFallback=makeFallenAsh(-30,15);

    // ---------------------------------------------------------------------------
    // Sacred locations: Well of the Three Norns, Circle of Power,
    // and Whispering Stone. These are deliberately built from low-poly organic
    // forms, emissive rune planes, curves and point lights so they remain mobile
    // friendly while giving each place a strong magical identity.
    // ---------------------------------------------------------------------------
    const runeGlowTexture=(glyph:string,color:string)=>{
      const c=document.createElement("canvas"); c.width=c.height=256; const ctx=c.getContext("2d")!;
      ctx.clearRect(0,0,256,256); ctx.textAlign="center"; ctx.textBaseline="middle";
      ctx.shadowColor=color; ctx.shadowBlur=24; ctx.fillStyle=color; ctx.font="bold 156px serif"; ctx.fillText(glyph,128,132);
      ctx.shadowBlur=6; ctx.globalAlpha=.72; ctx.font="bold 126px serif"; ctx.fillText(glyph,128,132);
      const t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; t.anisotropy=4; return t;
    };
    const addFloatingRune=(g:THREE.Group,glyph:string,x:number,y:number,z:number,color:number,size=.7,rot=0)=>{
      const hex="#"+color.toString(16).padStart(6,"0");
      const m=new THREE.MeshBasicMaterial({map:runeGlowTexture(glyph,hex),transparent:true,depthWrite:false,side:THREE.DoubleSide});
      const q=new THREE.Mesh(new THREE.PlaneGeometry(size,size),m); q.position.set(x,y,z); q.rotation.set(0,rot,0); g.add(q); return q;
    };
    const addMagicThread=(g:THREE.Group,points:THREE.Vector3[],color:number,thickness=.075)=>{
      const curve=new THREE.CatmullRomCurve3(points);
      const tube=new THREE.Mesh(new THREE.TubeGeometry(curve,42,thickness,6,false),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.9}));
      g.add(tube);
      const glow=new THREE.Mesh(new THREE.TubeGeometry(curve,42,thickness*2.5,6,false),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.12,depthWrite:false}));
      g.add(glow); return tube;
    };

    // «Разорванная нить» удалена полностью.



    // 1) WELL OF THE THREE NORNS ------------------------------------------------
    const threeNornsWellAsset='Midgard_Well_Three_Norns_V1_YUP.glb';
    const nornsStone=new THREE.MeshBasicMaterial({color:0xffffff,side:THREE.DoubleSide,toneMapped:false});
    const nornsColumns=new THREE.MeshBasicMaterial({color:0xffffff,side:THREE.DoubleSide,toneMapped:false});
    let nornsStoneTexture:THREE.Texture|null=null;
    let nornsColumnTexture:THREE.Texture|null=null;
    new THREE.TextureLoader().load(`${BASE}img/models/T_Norns_Stone.jpg`,texture=>{
      if(!glbTreesAlive){texture.dispose();return;}
      texture.colorSpace=THREE.SRGBColorSpace;
      texture.wrapS=texture.wrapT=THREE.MirroredRepeatWrapping;
      texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
      nornsStoneTexture=texture;nornsStone.map=texture;nornsStone.needsUpdate=true;
    },undefined,error=>console.warn('Norns stone texture unavailable',error));
    new THREE.TextureLoader().load(`${BASE}img/models/T_Norns_FlutedMarble.jpg`,texture=>{
      if(!glbTreesAlive){texture.dispose();return;}
      texture.colorSpace=THREE.SRGBColorSpace;
      texture.wrapS=THREE.RepeatWrapping;texture.wrapT=THREE.ClampToEdgeWrapping;
      texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
      nornsColumnTexture=texture;nornsColumns.map=texture;nornsColumns.needsUpdate=true;
    },undefined,error=>console.warn('Norns column texture unavailable',error));
    const threeThreads=new THREE.Group();
    const threeThreadsX=58, threeThreadsZ=-28;
    threeThreads.position.set(threeThreadsX,groundY(threeThreadsX,threeThreadsZ),threeThreadsZ);
    threeThreads.userData={id:"threeThreads",label:"Колодец Трёх Норн"};


    loadGlbWithFolderFallback(threeNornsWellAsset,(gltf:any)=>{
      if(!glbTreesAlive)return;
      const well=gltf.scene;
      markMeshes(well);

      well.traverse((o:any)=>{
        if(!o.isMesh)return;
        o.castShadow=true;
        o.receiveShadow=true;

        const tune=(m:any)=>{
          if(!m)return m;
          const mm=m.clone?m.clone():m;
          const mn=String(mm.name||'').toLowerCase();

          // Keep the reference palette: dark old stone, moss, warm amber light.
          if(/ancient_stone/.test(mn) && mm.color){
            mm.color.multiplyScalar(.82);
            if('roughness' in mm) mm.roughness=Math.max(mm.roughness??.9,.94);
          }
          if(/moss/.test(mn) && mm.color){
            mm.color.set(0x415d32);
          }
          if(/well_inner_glow|well_glow_hot|inner_glow_core/.test(mn)){
            if('color' in mm) mm.color.set(/hot|core/.test(mn)?0xffc65a:0xff9a22);
            if('emissive' in mm){
              mm.emissive=new THREE.Color(/hot|core/.test(mn)?0xff9d1c:0xff6b10);
              mm.emissiveIntensity=/hot|core/.test(mn)?2.5:1.7;
            }
          }
          mm.needsUpdate=true;
          return mm;
        };

        if(Array.isArray(o.material))o.material=o.material.map(tune);
        else o.material=tune(o.material);
      });

      // Lift the entire structure together so the suspended threads still meet the roof.
      well.scale.set(.95,1.18,.95);
      well.rotation.y=.18;
      well.position.set(0,0,0);
      well.updateWorldMatrix(true,true);

      well.traverse((o:any)=>{
        if(!o.isMesh)return;
        const name=String(o.name);
        const isColumn=/^PillarShaft_\d+$/.test(name);
        const isStone=/^(Platform_\d+|EdgeStone_\d+|Pillar(Base|Cap)_\d+|Roof_Stone_Ring|Roof_Wood_Underside|RoofRock_\d+)$/.test(name);
        if(!isColumn&&!isStone)return;
        // The model has positions only. Give stone faces planar UVs, and wrap
        // the marble around each shaft so its flutes run vertically.
        const geometry=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();
        const pos=geometry.getAttribute('position');
        const uvs=new Float32Array(pos.count*2);
        const points=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()];
        const a=new THREE.Vector3(),b=new THREE.Vector3(),normal=new THREE.Vector3();
        const bounds=new THREE.Box3().setFromObject(o),center=bounds.getCenter(new THREE.Vector3());
        for(let i=0;i<pos.count;i+=3){
          for(let k=0;k<3;k++)points[k].fromBufferAttribute(pos,i+k).applyMatrix4(o.matrixWorld);
          normal.crossVectors(a.subVectors(points[1],points[0]),b.subVectors(points[2],points[0])).normalize();
          const top=Math.abs(normal.y)>.5,side=Math.abs(normal.x)>Math.abs(normal.z);
          const around=points.map(p=>Math.atan2(p.z-center.z,p.x-center.x)/(Math.PI*2)+.5);
          if(Math.max(...around)-Math.min(...around)>.5)for(let k=0;k<3;k++)if(around[k]<.5)around[k]+=1;
          for(let k=0;k<3;k++){
            const p=points[k];
            uvs[(i+k)*2]=isColumn?around[k]:(top?p.x:side?p.z:p.x)/2.4;
            // Keep the photograph's horizontal plinth outside the shaft UVs.
            uvs[(i+k)*2+1]=isColumn?.11+.88*(p.y-bounds.min.y)/Math.max(.01,bounds.max.y-bounds.min.y):(top?p.z:p.y)/2.4;
          }
        }
        geometry.setAttribute('uv',new THREE.BufferAttribute(uvs,2));
        geometry.computeVertexNormals();
        o.geometry=geometry;o.material=isColumn?nornsColumns:sacredStoneMaterials[2];
      });

      const bb=new THREE.Box3().setFromObject(well);
      well.position.y-=bb.min.y;
      well.updateMatrixWorld(true);

      threeThreads.add(well);

      // The model materials glow, and this warm point light makes the well itself
      // cast a visible amber light onto nearby stone and ground.
      const innerLight=new THREE.PointLight(0xff8a1f,2.2,12,2);
      innerLight.position.set(0,2.0,0);
      threeThreads.add(innerLight);

      const softLight=new THREE.PointLight(0xffd36b,.65,7,2);
      softLight.position.set(0,3.8,0);
      threeThreads.add(softLight);

      console.log('[THREE NORNS WELL] GLB loaded',threeNornsWellAsset);
    },'THREE NORNS WELL');

    scene.add(threeThreads);
    objects.push(threeThreads);
    addCircleCollider(threeThreadsX,threeThreadsZ,3.4,.1);
    // Treasure chest beside the Well of the Three Norns.
    // Keep it anchored to this exact world point; the source GLB has an offset pivot.
    const rubyChestX=63,rubyChestZ=-31;
    loadGlbWithFolderFallback('Treasure_Chest_Norns_RedWood.glb?v=1',(gltf:any)=>{
      if(!glbTreesAlive)return;

      const chestAnchor=new THREE.Group();
      chestAnchor.position.set(rubyChestX,groundY(rubyChestX,rubyChestZ),rubyChestZ);
      chestAnchor.rotation.y=0;
      chestAnchor.userData={id:'nornsChest',label:'Красный сундук Норн'};

      const chest=gltf.scene;
      markMeshes(chest);
      chest.position.set(0,0,0);
      chest.rotation.set(0,0,0);
      chest.scale.setScalar(1);
      chest.updateMatrixWorld(true);

      // Normalize the imported model to a stable in-game size.
      const rawBox=new THREE.Box3().setFromObject(chest);
      const rawSize=new THREE.Vector3();
      rawBox.getSize(rawSize);
      const targetWidth=2.8;
      const sourceWidth=Math.max(rawSize.x,rawSize.z,.001);
      chest.scale.setScalar(targetWidth/sourceWidth);
      chest.updateMatrixWorld(true);

      // The GLB texture already contains the red wood.
      // Keep every non-wood material/texture colour exactly as authored.
      chest.traverse((o:any)=>{
        if(!o.isMesh)return;
        o.castShadow=true;
        o.receiveShadow=true;
      });

      // Centre the visible geometry on the anchor, then place its base on the ground.
      // This fixes the model appearing several metres away from its interaction point.
      const bb=new THREE.Box3().setFromObject(chest);
      const center=new THREE.Vector3();
      bb.getCenter(center);
      chest.position.set(-center.x,-bb.min.y,-center.z);
      chest.updateMatrixWorld(true);

      chestAnchor.add(chest);
      scene.add(chestAnchor);
      objects.push(chestAnchor);

      console.log('[NORNS CHEST] Treasure chest fixed beside Three Norns Well, STATIC + RED WOOD');
    },'NORNS CHEST');
    addCircleCollider(rubyChestX,rubyChestZ,1.15,.08);

    // 2) CIRCLE OF POWER --------------------------------------------------------
    const powerCircle=new THREE.Group();
    const powerX=5, powerZ=-70;
    powerCircle.position.set(powerX,groundY(powerX,powerZ),powerZ);
    powerCircle.userData={id:"powerCircle",label:"Круг Силы"};
    for(const [r,w,c,op] of [[3.2,.075,0xd47cff,.8],[6.2,.06,0x6a9cff,.68],[9.2,.045,0xb77dff,.58]] as Array<[number,number,number,number]>) {
      const ring=new THREE.Mesh(new THREE.TorusGeometry(r,w,8,96),new THREE.MeshBasicMaterial({color:c,transparent:true,opacity:op,depthWrite:false}));
      ring.rotation.x=Math.PI/2; ring.position.y=.07; powerCircle.add(ring);
    }
    for(let i=0;i<20;i++){
      const a=i/20*Math.PI*2,rr=5.1+(i%2)*2.2;
      addGroundRune(powerCircle,Math.cos(a)*rr,Math.sin(a)*rr,fieldGlyphs[(i+2)%fieldGlyphs.length],i%2?0x8b78ff:0x63dff4,.38,a+.2);
    }
    const monolith=new THREE.Mesh(new THREE.DodecahedronGeometry(1.25,1),sacredStoneMaterials[1]);
    monolith.scale.set(.9,2.8,.7); monolith.position.y=2.45; monolith.rotation.set(.05,.2,-.08); powerCircle.add(monolith);

    // Large golden Sowilo/Sowilo rune on the central monolith.
    const monolithRune=addFloatingRune(powerCircle,"ᛊ",.18,2.65,1.03,0xffd34f,1.82,.20);
    monolithRune.scale.set(1.0,1.30,1.0);
    monolithRune.material.blending=THREE.AdditiveBlending;
    (monolithRune.material as THREE.MeshBasicMaterial).toneMapped=false;
    monolithRune.renderOrder=9;

    const monolithRuneLight=new THREE.PointLight(0xffc83d,.95,5.5,2);
    monolithRuneLight.position.set(.18,2.7,1.25);
    powerCircle.add(monolithRuneLight);

    const powerLight=new THREE.PointLight(0x9c6cff,1.45,10,2); powerLight.position.set(0,2.5,.8); powerCircle.add(powerLight);
    for(let i=0;i<12;i++){
      const a=i/12*Math.PI*2,rr=4.1+midHash(i,1801)*4.5;
      const r=irregularRock(powerCircle,Math.cos(a)*rr,.3,Math.sin(a)*rr,.42+midHash(i,1802)*.42,i%3===0?0x59635d:0x4a514c,1803+i);
      if(i%4===0){const crystal=new THREE.Mesh(new THREE.ConeGeometry(.18,.9,5),new THREE.MeshBasicMaterial({color:i%2?0x8e74ff:0x69ddff,transparent:true,opacity:.75}));crystal.position.set(r.position.x,.62,r.position.z);powerCircle.add(crystal);}
    }
    for(let i=0;i<9;i++){
      const a=midHash(i,1820)*Math.PI*2,rr=2.2+midHash(i,1821)*6.7;
      const dust=new THREE.Mesh(new THREE.SphereGeometry(.045+midHash(i,1822)*.04,6,5),new THREE.MeshBasicMaterial({color:i%2?0x72e9ff:0xb27dff,transparent:true,opacity:.7}));
      dust.position.set(Math.cos(a)*rr,.4+midHash(i,1823)*2.6,Math.sin(a)*rr); powerCircle.add(dust);
    }
    addMesh(powerCircle,"powerCircle","Круг Силы"); objects.push(powerCircle); addCircleCollider(powerX,powerZ,2.2,.1);

    // 3) WHISPERING STONE -------------------------------------------------------
    // The old black stone is replaced by a bright amber crystal cluster.
    const whisperCrystalAsset='Midgard_Whisper_Amber_Crystal_V1_YUP.glb';
    const whisperStone=new THREE.Group();
    const whisperX=-72, whisperZ=-48;
    whisperStone.position.set(whisperX,groundY(whisperX,whisperZ),whisperZ);
    whisperStone.userData={id:"whisperStone",label:"Камень Шёпота"};


    const whisperRing=new THREE.Mesh(
      new THREE.TorusGeometry(5.8,.09,8,96),
      new THREE.MeshBasicMaterial({color:0xffa52f,transparent:true,opacity:.72,depthWrite:false})
    );
    whisperRing.rotation.x=Math.PI/2;
    whisperRing.position.y=.075;
    whisperStone.add(whisperRing);

    // Outer stones stay as a landmark threshold around the new crystal.
    for(let i=0;i<11;i++){
      const a=midHash(i,1920)*Math.PI*2,rr=4.8+midHash(i,1921)*2.6;
      irregularRock(whisperStone,Math.cos(a)*rr,.2,Math.sin(a)*rr,.28+midHash(i,1922)*.38,0x45433f,1923+i);
    }

    loadGlbWithFolderFallback(whisperCrystalAsset,(gltf:any)=>{
      const crystal=gltf.scene;
      markMeshes(crystal);
      crystal.traverse((o:any)=>{
        if(!o.isMesh)return;
        o.castShadow=true;
        o.receiveShadow=true;
        const tune=(m:any)=>{
          if(!m)return m;
          const mm=m.clone?m.clone():m;
          const mn=String(mm.name||'');
          if('roughness' in mm && /amber|crystal|core/i.test(mn)) mm.roughness=Math.min(mm.roughness??.25,.24);
          if(/amber|crystal|core/i.test(mn)){
            // Keep the crystal visibly ORANGE instead of blowing out toward white.
            if('color' in mm) mm.color=new THREE.Color(/core|hot/i.test(mn)?0xff8a18:0xe9680e);
            if('emissive' in mm){
              mm.emissive=new THREE.Color(/core|hot/i.test(mn)?0xff6a00:0xd94d00);
              mm.emissiveIntensity=/core|hot/i.test(mn)?1.65:1.15;
            }
          }
          mm.needsUpdate=true;
          return mm;
        };
        if(Array.isArray(o.material))o.material=o.material.map(tune);else o.material=tune(o.material);
      });
      crystal.scale.setScalar(1.05);
      crystal.rotation.y=.42;
      crystal.position.set(0,0,0);
      crystal.updateMatrixWorld(true);
      const bb=new THREE.Box3().setFromObject(crystal);
      crystal.position.y-=bb.min.y;
      whisperStone.add(crystal);

      const crystalLight=new THREE.PointLight(0xff6a00,1.65,9,2);
      crystalLight.position.set(0,2.5,.35);
      whisperStone.add(crystalLight);
      console.log('[WHISPER CRYSTAL] GLB loaded',whisperCrystalAsset);
    },'WHISPER CRYSTAL');

    addMesh(whisperStone,"whisperStone","Камень Шёпота");
    objects.push(whisperStone);
    addCircleCollider(whisperX,whisperZ,2.5,.1);

    // Rigged location guardians are cloned from Adventurer_Defender_Rigged.glb below.

    // STEP 9 — LANDMARK IDENTITY -------------------------------------------------
    // Give each major sacred place a distinct visual "threshold" so landmarks feel
    // embedded in the landscape rather than simply placed on top of it. Everything
    // here is low-poly and intentionally lightweight for mobile rendering.
    const landmarkThreshold=(x:number,z:number,glyph:string,accent:number,style:'grove'|'rune'|'fate'|'shadow'|'power'='rune')=>{
      const g=new THREE.Group();
      g.position.set(x,groundY(x,z),z);


      const ring=new THREE.Mesh(new THREE.TorusGeometry(style==='grove'?7.2:5.8,.045,7,64),new THREE.MeshBasicMaterial({color:accent,transparent:true,opacity:style==='shadow'?.32:.46,depthWrite:false}));
      ring.rotation.x=Math.PI/2; ring.position.y=.055; g.add(ring);

      // Two asymmetric marker stones create a recognizable entrance silhouette.
      for(const side of [-1,1]){
        const rock=new THREE.Mesh(new THREE.DodecahedronGeometry(.48+midHash(side+Math.round(x),Math.round(z))*0.22,1),sacredStoneMaterials[(Math.abs(Math.round(x+z))+side+3)%3]);
        rock.scale.set(.8,1.65,.72);
        rock.position.set(side*2.35,.62,style==='grove'?-.15:.35);
        rock.rotation.set(.05,side*.28,-side*.10);
        g.add(rock);
        const rune=addFloatingRune(g,glyph,side*2.35,1.25,.73,0xffd56a,.34,side*.08);
        rune.rotation.x=0;
      }

      // Small embedded fragments point toward the center and visually connect the approach path.
      for(let i=0;i<8;i++){
        const a=-Math.PI/2+(i-3.5)*.16;
        const rr=2.8+Math.abs(i-3.5)*.42;
        const shard=new THREE.Mesh(new THREE.DodecahedronGeometry(.11+midHash(i,2200+Math.round(x))*.07,0),new THREE.MeshStandardMaterial({color:accent,emissive:accent,emissiveIntensity:.65,roughness:.72}));
        shard.position.set(Math.cos(a)*rr,.08,Math.sin(a)*rr);
        g.add(shard);
      }

      addMesh(g,`threshold_${style}_${Math.round(x)}_${Math.round(z)}`,`Порог: ${glyph}`);
      scene.add(g);
    };

    // Each landmark receives its own framing treatment and rune, with no new gameplay object.
    landmarkThreshold(ashGroveX,ashGroveZ,'ᚱ',0x8fe6a4,'grove');
    landmarkThreshold(hoddX,hoddZ,'ᛉ',0xe0b55a,'grove');
    landmarkThreshold(-72,48,'ᚠ',0xe2bd61,'shadow');
    landmarkThreshold(58,-28,'ᛟ',0xf0c65e,'fate');
    landmarkThreshold(5,-70,'ᛟ',0x8d78ff,'power');
    landmarkThreshold(-72,-48,'ᚨ',0x9b72ff,'shadow');
    landmarkThreshold(50,-62,'ᛏ',0x8fc6d7,'fate');
    landmarkThreshold(-52,38,'ᛜ',0xd7ae61,'fate');

    // The hero's home is deliberately a SMALL personal cabin just beyond the hunter camp.
    // It is visually distinct from the larger village houses: lower walls, a compact turf roof,
    // a short porch and a modest fenced yard. This is the hero's own dwelling, not another NPC house.
    const heroHomeX=80, heroHomeZ=30;
    const heroCabin=new THREE.Group();
    heroCabin.position.set(heroHomeX,groundY(heroHomeX,heroHomeZ),heroHomeZ);heroCabin.scale.set(HOME_SCALE,HOME_SCALE*BUILDING_HEIGHT,HOME_SCALE);
    const cabinStoneMat=mat(0x5b5a53,1);
    // Build the cabin as real wall segments, leaving a physical doorway in the front wall.
    // This makes the transition into the interior possible without teleporting through a solid box.
    const foundation=box(7.8,.42,5.8,0x55534d,1); foundation.position.y=.22; heroCabin.add(foundation);
    const backWall=box(7.4,2.8,.30,0x62432f,1); backWall.position.set(0,1.4,-2.7); heroCabin.add(backWall);
    const leftWall=box(.30,2.8,5.4,0x62432f,1); leftWall.position.set(-3.7,1.4,0); heroCabin.add(leftWall);
    const rightWall=box(.30,2.8,5.4,0x62432f,1); rightWall.position.set(3.7,1.4,0); heroCabin.add(rightWall);
    const frontLeft=box(2.55,2.8,.30,0x62432f,1); frontLeft.position.set(-2.43,1.4,2.7); heroCabin.add(frontLeft);
    const frontRight=box(2.55,2.8,.30,0x62432f,1); frontRight.position.set(2.43,1.4,2.7); heroCabin.add(frontRight);
    const frontTop=box(2.3,.72,.30,0x62432f,1); frontTop.position.set(0,2.44,2.7); heroCabin.add(frontTop);
    const doorFrameL=box(.16,2.18,.34,0x2b211b,1); doorFrameL.position.set(-.66,1.28,2.72); heroCabin.add(doorFrameL);
    const doorFrameR=box(.16,2.18,.34,0x2b211b,1); doorFrameR.position.set(.66,1.28,2.72); heroCabin.add(doorFrameR);
    const doorFrameTop=box(1.48,.16,.34,0x2b211b,1); doorFrameTop.position.set(0,2.34,2.72); heroCabin.add(doorFrameTop);
    // Door on a hinge: it visibly swings open before the hero enters.
    const doorPivot=new THREE.Group(); doorPivot.position.set(-.57*1.2,0,2.72);doorPivot.scale.x=1.2; heroCabin.add(doorPivot);
    const cabinDoor=box(1.14,2.05,.12,0x302219,1); cabinDoor.position.set(.57,1.28,0); doorPivot.add(cabinDoor);
    const doorHandle=new THREE.Mesh(new THREE.SphereGeometry(.08,8,6),mat(0xb48a4b,1)); doorHandle.position.set(.86,1.25,.10); doorPivot.add(doorHandle);
    const windowMat=new THREE.MeshStandardMaterial({color:0xd39b4f,emissive:0x9a5c20,emissiveIntensity:1.25,roughness:.45});
    for(const px of [-2.35,2.35]){
      const winFrame=box(1.25,1.0,.12,0x2b211b,1); winFrame.position.set(px,1.72,2.78); heroCabin.add(winFrame);
      const win=new THREE.Mesh(new THREE.BoxGeometry(.98,.72,.06),windowMat); win.position.set(px,1.72,2.86); heroCabin.add(win);
      const v=box(.07,.78,.1,0x2b211b,1); v.position.set(px,1.72,2.91); heroCabin.add(v);
      const h=box(1.08,.07,.1,0x2b211b,1); h.position.set(px,1.72,2.91); heroCabin.add(h);
    }
    const cabinRoofMat=new THREE.MeshStandardMaterial({map:roofTex,color:0x292a27,roughness:.98,side:THREE.DoubleSide});
    const roofL=new THREE.Mesh(new THREE.PlaneGeometry(4.25,6.25),cabinRoofMat);
    const roofR=new THREE.Mesh(new THREE.PlaneGeometry(4.25,6.25),cabinRoofMat);
    roofL.rotation.x=Math.PI/2; roofR.rotation.x=Math.PI/2; roofL.rotation.z=.62; roofR.rotation.z=-.62;
    roofL.position.set(-1.02,3.95,0); roofR.position.set(1.02,3.95,0); heroCabin.add(roofL,roofR);
    const cabinRidge=box(.22,.22,6.45,0x29231d,1); cabinRidge.position.y=4.75; heroCabin.add(cabinRidge);
    const chimney=new THREE.Mesh(new THREE.BoxGeometry(.48,1.35,.48),cabinStoneMat); chimney.position.set(1.55,4.8,-.65); heroCabin.add(chimney);
    const chimneyCap=box(.62,.10,.62,0x34312d,1); chimneyCap.position.set(1.55,5.48,-.65); heroCabin.add(chimneyCap);
    const porch=box(2.35,.18,1.0,0x65452d,1); porch.position.set(0,.62,3.15); heroCabin.add(porch);
    const porchStep=box(1.55,.16,.48,0x59402b,1); porchStep.position.set(0,.30,3.58); heroCabin.add(porchStep);
    [backWall,leftWall,rightWall,frontLeft,frontRight,frontTop].forEach(o=>o.name="HouseWall");roofL.name=roofR.name="HouseRoof";
    addMesh(heroCabin,'heroHome','Домик героя');applyHomeTextures(heroCabin); objects.push(heroCabin);

    // Reference-driven hero house GLB. The procedural cabin stays as a fallback
    // until this asset loads successfully. The interactive hinged door is preserved.
    let heroHouseModel: THREE.Object3D | null = null;
    loadGlbWithFolderFallback(heroHouseAsset, (gltf:any) => {
      if (!glbTreesAlive) return;

      // Hide the old exterior only after the GLB is definitely available.
      heroCabin.children.forEach((child) => {
        if (child !== doorPivot) child.visible = false;
      });

      const house = gltf.scene.clone(true);
      markMeshes(house);
      house.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.castShadow = true;
        o.receiveShadow = true;
        o.frustumCulled = true;
      });

      // Model was built Y-up, front facing +Z, sized to the existing home footprint.
      house.scale.setScalar(0.98);
      house.position.set(0, 0, 0);
      house.rotation.set(0, 0, 0);

      heroCabin.add(house);
      heroHouseModel = house;applyHomeTextures(house);
      console.log('[HERO HOUSE] loaded', `${BASE}img/models/${heroHouseAsset}`);
    }, 'HERO HOUSE');
    // Exterior collision follows the actual walls and leaves the doorway open.
    addRectCollider(heroHomeX,heroHomeZ-2.72*HOME_SCALE,7.4*HOME_SCALE,.30*HOME_SCALE,0,.05);
    addRectCollider(heroHomeX-3.72*HOME_SCALE,heroHomeZ,.30*HOME_SCALE,5.45*HOME_SCALE,0,.05);
    addRectCollider(heroHomeX+3.72*HOME_SCALE,heroHomeZ,.30*HOME_SCALE,5.45*HOME_SCALE,0,.05);
    addRectCollider(heroHomeX-2.43*HOME_SCALE,heroHomeZ+2.72*HOME_SCALE,2.55*HOME_SCALE,.30*HOME_SCALE,0,.05);
    addRectCollider(heroHomeX+2.43*HOME_SCALE,heroHomeZ+2.72*HOME_SCALE,2.55*HOME_SCALE,.30*HOME_SCALE,0,.05);

    // Interior: a real small room occupying the same 3D space. The roof is hidden while inside
    // so the follow camera can see the room instead of clipping through the ceiling.
    const homeInterior=new THREE.Group(); homeInterior.position.set(heroHomeX,groundY(heroHomeX,heroHomeZ),heroHomeZ); homeInterior.visible=false;homeInterior.scale.set(HOME_SCALE,HOME_SCALE*BUILDING_HEIGHT,HOME_SCALE);
    const floor=box(7.0,.16,5.0,0x4b3424,1); floor.position.y=.50; homeInterior.add(floor);
    const innerBack=box(7.0,2.65,.18,0x3f2b20,1); innerBack.position.set(0,1.8,-2.45); homeInterior.add(innerBack);
    const innerLeft=box(.18,2.65,4.9,0x3f2b20,1); innerLeft.position.set(-3.45,1.8,0); homeInterior.add(innerLeft);
    const innerRight=box(.18,2.65,4.9,0x3f2b20,1); innerRight.position.set(3.45,1.8,0); homeInterior.add(innerRight);
    const innerFrontL=box(2.35,2.65,.18,0x3f2b20,1); innerFrontL.position.set(-2.42,1.8,2.45); homeInterior.add(innerFrontL);
    const innerFrontR=box(2.35,2.65,.18,0x3f2b20,1); innerFrontR.position.set(2.42,1.8,2.45); homeInterior.add(innerFrontR);
    const rug=box(2.5,.04,2.1,0x6d4b31,1); rug.position.set(-.15,.60,.25); homeInterior.add(rug);
    const bed=box(1.65,.65,2.15,0x3d2a1e,1); bed.position.set(-2.15,.88,-1.25); homeInterior.add(bed);
    const blanket=box(1.48,.12,1.35,0x6b5140,1); blanket.position.set(-2.15,1.27,-.92); homeInterior.add(blanket);
    const pillow=box(1.28,.18,.46,0xb5a08a,1); pillow.position.set(-2.15,1.38,-1.95); homeInterior.add(pillow);
    const interiorTable=box(1.65,.12,1.05,0x503321,1); interiorTable.position.set(.85,1.15,-.15); homeInterior.add(interiorTable);
    for(const [x,z] of [[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const leg=box(.10,.7,.10,0x38251b,1);leg.position.set(x,.72,z);homeInterior.add(leg);}
    const chest=box(1.25,.8,.72,0x5b3a24,1); chest.position.set(2.1,.95,-1.7); homeInterior.add(chest);
    const shelf=box(1.9,.14,.45,0x5b3a24,1); shelf.position.set(1.35,2.0,-2.25); homeInterior.add(shelf);
    for(const x of [.75,1.35,1.95]){const bottle=new THREE.Mesh(new THREE.CylinderGeometry(.08,.1,.35,8),mat(0x6f7350,1));bottle.position.set(x,2.24,-2.22);homeInterior.add(bottle);}
    const hearthStone=box(1.35,.55,.7,0x5a554e,1); hearthStone.position.set(2.15,.78,.95); homeInterior.add(hearthStone);
    const hearthFire=new THREE.Mesh(new THREE.ConeGeometry(.28,.72,8),new THREE.MeshStandardMaterial({color:0xff8128,emissive:0xff4d0a,emissiveIntensity:4})); hearthFire.position.set(2.15,1.42,.95); homeInterior.add(hearthFire);
    const hearthLight=new THREE.PointLight(0xff8a3c,2.2,8,2); hearthLight.position.set(2.15,1.7,.95); homeInterior.add(hearthLight);
    addMesh(homeInterior,'heroHomeInterior','Дом героя — внутри'); objects.push(homeInterior);

    const heroYard=new THREE.Group();
    heroYard.position.set(heroHomeX,groundY(heroHomeX,heroHomeZ),heroHomeZ);heroYard.scale.setScalar(HOME_SCALE);
    const yardRing=new THREE.Mesh(new THREE.TorusGeometry(6.2,.055,7,48),new THREE.MeshStandardMaterial({color:0x76624c,emissive:0x211b15,emissiveIntensity:.25,transparent:true,opacity:.5}));
    yardRing.rotation.x=Math.PI/2; yardRing.position.y=.035; heroYard.add(yardRing);
    // Low fence leaves the cabin visually open and avoids the heavy log-pile look.
    for(const [fx,fz] of [[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){
      const post=box(.18,1.0,.18,0x493527,1); post.position.set(fx,.50,fz); heroYard.add(post);
    }
    for(const fz of [-2.4,2.9]){const rail=box(10.2,.12,.12,0x60412b,1);rail.position.set(0,.59,fz);heroYard.add(rail);}
    const pathStoneMat=mat(0x69645c,1);
    for(let i=0;i<7;i++){const st=new THREE.Mesh(new THREE.CylinderGeometry(.32,.40,.12,7),pathStoneMat);st.position.set(0,.08,4.1+i*.72);st.rotation.y=i*.4;heroYard.add(st);}
    const homeHearth=fire(heroHomeX-2.4*HOME_SCALE,heroHomeZ+4.8*HOME_SCALE,.48); homeHearth.scale.setScalar(.72);
    addMesh(heroYard,'heroHomeYard','Двор домика героя'); objects.push(heroYard);


    // ===== DENSE FOG-EDGE FOREST — CORRECTED POSITION =====
    // Mountains are at negative Z (around -94), so the dense forest belongs
    // at the FAR/NORTH edge of Midgard, directly in front of the mountain fog.
    // Each slot contains ONLY ONE tree: spruce OR oak, never both.
    const fogForestSlots: Array<{x:number; z:number; seed:number; kind:'spruce'|'oak'}> = [];

    // Three staggered rows between the playable clearing and the mountains.
    // Grid spacing prevents trunks from spawning inside each other.
    const fogRows = [-69, -76, -83];
    let fogSeed = 0;

    for (let row=0; row<fogRows.length; row++) {
      const zBase = fogRows[row];
      for (let col=0; col<29; col++) {
        const seed = fogSeed++;
        const xBase = -82 + col * 5.85 + (row % 2 ? 2.9 : 0);
        let x = xBase + (midHash(seed, 4101) - .5) * 1.45;
        let z = zBase + (midHash(seed, 4102) - .5) * 2.2;

        // Keep the Circle of Power visually open: any fog-forest tree that would
        // stand directly in front of the central monolith is transplanted sideways,
        // not deleted.
        const powerTreeDist=Math.hypot(x-5,z+70);
        if(powerTreeDist<7.6){
          x += x<5 ? -10.5 : 10.5;
          z += 1.8;
        }

        if (x < -84 || x > 84) continue;

        // Keep several irregular view corridors so the forest has natural gaps.
        const gapLeft   = x > -42 && x < -33 && z > -80;
        const gapMiddle = x >  3 && x <  12 && z < -72;
        const gapRight  = x > 47 && x <  57 && z > -81;
        if (gapLeft || gapMiddle || gapRight) continue;

        // The river crosses this northern belt near x≈-57.
        // Leave a wide wooded river opening instead of growing trees in water.
        const riverX = -57 + Math.sin(((z + 94) / 6) * .42) * 4.2;
        if (Math.abs(x - riverX) < 8.0) continue;

        // One type per slot. Oaks are roughly one quarter of this distant forest.
        const kind: 'spruce'|'oak' =
          midHash(seed, 4103) < .27 ? 'oak' : 'spruce';

        fogForestSlots.push({x,z,seed,kind});
      }
    }

    const addCorrectFogForest = (
      source: THREE.Object3D,
      kind: 'spruce'|'oak'
    ) => {
      fogForestSlots.forEach((slot) => {
        if (slot.kind !== kind) return;

        const tree = source.clone(true);
        markMeshes(tree);

        // Wide size variation, but distant oaks stay a little smaller so their
        // crowns do not swallow the whole horizon.
        const sizeRnd = midHash(slot.seed, kind === 'spruce' ? 4110 : 4120);
        const scale = kind === 'spruce'
          ? 0.52 + sizeRnd * 0.56
          : 0.38 + sizeRnd * 0.42;

        tree.scale.setScalar(scale);
        tree.rotation.set(0, midHash(slot.seed, 4130) * Math.PI * 2, 0);

        tree.traverse((o:any) => {
          if (!o.isMesh) return;
          o.visible = true;
          o.castShadow = true;
          o.receiveShadow = true;
          o.frustumCulled = true;
        });

        // Snap the actual model bottom to terrain after scaling.
        tree.position.set(0,0,0);
        tree.updateMatrixWorld(true);
        const b = new THREE.Box3().setFromObject(tree);
        tree.position.set(slot.x, groundY(slot.x,slot.z) - b.min.y, slot.z);
        tree.updateMatrixWorld(true);

        scene.add(tree);
        glbTreeInstances.push(tree);
      });
    };

    // Spruces: dark distant backbone.
    loadGlbWithFolderFallback(treeAsset, (gltf:any) => {
      const source = gltf.scene.clone(true);
      source.traverse((o:any) => {
        if (!o.isMesh) return;
        const adapt = (m:any) => {
          if (!m) return m;
          const mm = m.clone ? m.clone() : m;
          if (mm.color?.multiplyScalar) mm.color.multiplyScalar(0.72);
          if ('roughness' in mm) mm.roughness = 0.97;
          if ('metalness' in mm) mm.metalness = 0;
          mm.needsUpdate = true;
          return mm;
        };
        if (Array.isArray(o.material)) o.material = o.material.map(adapt);
        else o.material = adapt(o.material);
      });
      addCorrectFogForest(source, 'spruce');
    }, 'FAR FOG FOREST SPRUCE');

    // Oaks: fewer and broader, but never share coordinates with spruces.
    loadGlbWithFolderFallback(oakAsset, (gltf:any) => {
      const source = gltf.scene.clone(true);
      source.traverse((o:any) => {
        if (!o.isMesh) return;
        const adapt = (m:any) => {
          if (!m) return m;
          const mm = m.clone ? m.clone() : m;
          if (mm.color?.multiplyScalar) mm.color.multiplyScalar(0.64);
          if ('roughness' in mm) mm.roughness = 0.98;
          if ('metalness' in mm) mm.metalness = 0;
          mm.needsUpdate = true;
          return mm;
        };
        if (Array.isArray(o.material)) o.material = o.material.map(adapt);
        else o.material = adapt(o.material);
      });
      addCorrectFogForest(source, 'oak');
    }, 'FAR FOG FOREST OAK');

    // Small landmarks inside the clearings.
    const campFire=fire(68,8,.75); campFire.scale.setScalar(.72);
    const campStone=new THREE.Mesh(new THREE.CylinderGeometry(.65,.8,.7,7),mat(0x514a42,1)); campStone.position.set(68,groundY(68,8)+.35,6.5); scene.add(campStone);
    for(const [x,z] of [[66,10],[70,10],[66,6],[70,6]]){const post=box(.16,1.15,.16,0x493527,1);post.position.set(x,groundY(x,z)+.57,z);scene.add(post);}
    // Extra loose fallen trunk removed; the dedicated Fallen Ash landmark remains.
    for(let i=0;i<7;i++){const rune=new THREE.Mesh(new THREE.DodecahedronGeometry(.14,0),mat(0x697d72,1));const a=i/7*Math.PI*2;rune.position.set(-45+Math.cos(a)*4,.12+groundY(-45+Math.cos(a)*4,75+Math.sin(a)*4),75+Math.sin(a)*4);scene.add(rune);}

    // The old procedural fir forest has been removed. Real GLB trees above now form the visible spruce layer.
    // Sacred ash trees remain temporarily because they are landmarks; they will be replaced by real assets later.

    // Three ash trees mark important places in Midgard; the largest is the village's
    // symbolic "ash of memory", a visual hint toward Yggdrasil.
    // Procedural ash trees are disabled in this GLB test pass.


    // Small grass clumps and ferns break up the flat ground while staying cheap on mobile.
    for(let i=0;i<110;i++){
      const a=midHash(i,701)*Math.PI*2,r=15+midHash(i,702)*50,x=Math.cos(a)*r,z=Math.sin(a)*r+3;
      if(Math.abs(x)<10&&Math.abs(z)<16) continue;
      const g=new THREE.Group();g.position.set(x,groundY(x,z),z);
      for(let k=0;k<3;k++){const blade=new THREE.Mesh(new THREE.ConeGeometry(.025,.38+midHash(k,i)*.28,4),new THREE.MeshStandardMaterial({color:k===1?0x53683f:0x415a37,roughness:1,roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.012}));blade.position.set((k-1)*.09,.18,(midHash(k*3,i)-.5)*.12);blade.rotation.z=(k-1)*.22;g.add(blade);}
      scene.add(g);
      windPlants.push({o:g,baseX:0,baseZ:0,phase:midHash(i,703)*Math.PI*2,amp:.018+.016*midHash(i,704)});
    }

    for(let i=0;i<80;i++){const x=-88+midHash(i,101)*176,z=-88+midHash(i,111)*176;if(Math.hypot(x,z+2)>30){const grass=new THREE.Mesh(new THREE.ConeGeometry(.08,.55+midHash(i,121)*.7,5),new THREE.MeshStandardMaterial({color:0x4b6840,roughness:1,roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.012}));grass.position.set(x,groundY(x,z)+.3,z);scene.add(grass); windPlants.push({o:grass,baseX:0,baseZ:0,phase:midHash(i,122)*Math.PI*2,amp:.014+.012*midHash(i,123)});}}

    // Set dressing: small embedded stones, fallen twigs and mossy fragments.
    // Sparse by design, so the large open spaces remain readable.
    for(let i=0;i<72;i++){
      const x=-84+midHash(i,150)*168, z=-82+midHash(i,151)*164;
      const nearVillage=Math.hypot(x-1,z+1)<24;
      const nearLandmark=[[18,55,15],[-65,5,13],[43,32,14],[62,78,12],[-45,75,13],[5,-70,14],[-72,-48,13],[-30,15,10]].some(([rx,rz,rr])=>Math.hypot(x-rx,z-rz)<rr);
      if(nearVillage||nearLandmark) continue;
      const s=.10+midHash(i,152)*.24;
      const rock=new THREE.Mesh(
        new THREE.DodecahedronGeometry(s,1),
        sacredStoneMaterials[i%3]
      );
      rock.scale.set(1.0+midHash(i,153)*1.3,.55+midHash(i,154)*.7,.72+midHash(i,155)*1.15);
      rock.rotation.set(midHash(i,156)*1.7,midHash(i,157)*Math.PI,midHash(i,158)*1.7);
      rock.position.set(x,groundY(x,z)+s*.22,z);
      rock.castShadow=true; rock.receiveShadow=true; scene.add(rock);
    }

    // Fallen ground twigs removed to keep paths and house yards clean.

    // Step 4 — natural ground detail: moss, ferns, exposed roots and small woodland debris.
    // These are intentionally sparse and lightweight so the wide clearings remain readable.
    const mossMatA=new THREE.MeshStandardMaterial({
      color:0x6f8651,roughness:1,roughnessMap:surfaceMaps.rough,
      bumpMap:surfaceMaps.height,bumpScale:.008
    });
    const mossMatB=new THREE.MeshStandardMaterial({
      color:0x81935b,roughness:1,roughnessMap:surfaceMaps.rough,
      bumpMap:surfaceMaps.height,bumpScale:.006
    });
    const rootMat=new THREE.MeshStandardMaterial({
      map:barkTexture,color:0x5a402d,roughness:.99,
      roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.026
    });

    // Flat irregular moss islands: a few overlapping discs give the ground a softer,
    // organic transition instead of a repeated geometric patch.
    for(let i=0;i<54;i++){
      const a=midHash(i,920)*Math.PI*2,r=18+midHash(i,921)*63;
      const x=Math.cos(a)*r,z=Math.sin(a)*r+3;
      if(Math.abs(x)<12&&Math.abs(z)<20) continue;
      const g=new THREE.Group();g.position.set(x,groundY(x,z)+.018,z);
      const rx=.35+midHash(i,922)*.75, rz=.28+midHash(i,923)*.65;
      for(let k=0;k<2;k++){
        const patch=new THREE.Mesh(new THREE.CircleGeometry(1,9),k%2?mossMatB:mossMatA);
        patch.rotation.x=-Math.PI/2;
        patch.scale.set(rx*(1-k*.18),rz*(1-k*.12),1);
        patch.position.set((midHash(i+k,924)-.5)*.32,.006+k*.003,(midHash(i+k,925)-.5)*.28);
        g.add(patch);
      }
      scene.add(g);
    }

    // Small fern clusters. Three curved-ish fronds around one center make a readable
    // silhouette without using expensive foliage models.
    const fernMatA=new THREE.MeshStandardMaterial({color:0x547044,roughness:1});
    const fernMatB=new THREE.MeshStandardMaterial({color:0x6f8751,roughness:1});
    for(let i=0;i<72;i++){
      const a=midHash(i,930)*Math.PI*2,r=20+midHash(i,931)*61;
      const x=Math.cos(a)*r,z=Math.sin(a)*r+3;
      if(Math.abs(x)<13&&Math.abs(z)<21) continue;
      const g=new THREE.Group();g.position.set(x,groundY(x,z),z);
      const s=.55+midHash(i,932)*.8;
      for(let k=0;k<3;k++){
        const frond=new THREE.Mesh(new THREE.CylinderGeometry(.018*s,.035*s,.55*s,5),k===1?fernMatB:fernMatA);
        frond.position.set((k-1)*.12*s,.27*s,(midHash(i,k+933)-.5)*.10*s);
        frond.rotation.z=(k-1)*.30;
        frond.rotation.x=(midHash(i,k+936)-.5)*.22;
        g.add(frond);
        for(let q=0;q<3;q++){
          const leaf=new THREE.Mesh(new THREE.ConeGeometry(.045*s,.18*s,5),k===1?fernMatB:fernMatA);
          leaf.rotation.z=(k-1)*.30+(q%2?.18:-.18);
          leaf.rotation.x=Math.PI*.5;
          leaf.position.set((k-1)*.12*s+(q-1)*.075*s,.30*s+q*.10*s,(midHash(i,q+940)-.5)*.12*s);
          g.add(leaf);
        }
      }
      scene.add(g);
      windPlants.push({o:g,baseX:0,baseZ:0,phase:midHash(i,941)*Math.PI*2,amp:.022+.018*midHash(i,942)});
    }

    // Loose exposed-root clusters removed: without their old ash trunks they read as log debris.

    // A handful of low stumps and old branches add scale at the player's feet.
    for(let i=0;i<22;i++){
      const a=midHash(i,960)*Math.PI*2,r=27+midHash(i,961)*55;
      const x=Math.cos(a)*r,z=Math.sin(a)*r+3;
      if(Math.abs(x)<15&&Math.abs(z)<22) continue;
      const s=.55+midHash(i,962)*.8;
      const g=new THREE.Group();g.position.set(x,groundY(x,z),z);
      const stump=new THREE.Mesh(new THREE.CylinderGeometry(.18*s,.30*s,.45*s,7),rootMat);
      stump.position.y=.22*s;g.add(stump);
      const top=new THREE.Mesh(new THREE.CylinderGeometry(.19*s,.19*s,.035*s,7),mat(0x806b50,1));
      top.position.y=.45*s;g.add(top);
      scene.add(g);
    }

    // Loose old branches removed from the ground around settlement paths.

    // NPCs with simple wandering paths.
    const npc=(x:number,z:number,id:string,label:string,color:number,phase:number)=>{const g=new THREE.Group();g.userData={id,label,phase,baseX:x,baseZ:z};const body=new THREE.Mesh(new THREE.CapsuleGeometry(.32,.78,4,8),mat(color,.9));body.position.y=.85;g.add(body);const head=new THREE.Mesh(new THREE.SphereGeometry(.25,12,8),mat(0xc99470,.9));head.position.y=1.58;g.add(head);const cloak=box(.7,.9,.15,0x27251f,1);cloak.position.set(0,.82,-.27);g.add(cloak);g.position.set(x,groundY(x,z),z);addMesh(g,id,label);objects.push(g);npcs.push(g);};
    npc(-6,-3,"blacksmith","Кузнец",0x5c3b2b,1.5);npc(5,10,"villager","Житель Мидгарда",0x59634d,3.4);npc(-16,4,"villager2","Житель деревни",0x654b3a,4.2);

    // Share one GLB and its geometry across nine skinned characters. Only load
    // a character when the player reaches its part of the map.
    type BanditActor={spec:BanditSpec;root:THREE.Object3D;actor:THREE.Group;sword:THREE.Group;mixer:THREE.AnimationMixer;actions:Record<string,THREE.AnimationAction>;current:string;next:number;alerted:boolean;hp:number;deathAt:number;restY:number;enemyNextAttack:number;enemyHitAt:number;collider:{id:string;x:number;z:number;r:number}|null};
    const bandits:BanditActor[]=[];
    let banditAsset:any=null,banditRequested=false;
    let banditVictoryTimer=0;
    let lastBanditHud=0;
    const playBandit=(preview:BanditActor,name:string,now:number)=>{
      if(preview.current===name&&name==='Run')return;
      if(preview.current===name&&now<preview.next)return;
      if(preview.current!=='Scene')preview.actions[preview.current]?.stop();
      const action=preview.actions[name];
      if(name!=='Scene'&&action){
        action.reset().setEffectiveWeight(1);
        action.setLoop(name==='Run'?THREE.LoopRepeat:THREE.LoopOnce,name==='Run'?Infinity:1);
        action.clampWhenFinished=name==='Death';action.play();
      }
      preview.current=name;
      preview.next=now+(name==='Run'?480:name==='Attack'?1150:name==='Hit'?570:name==='Death'?Number.POSITIVE_INFINITY:0);
    };
    const spawnBandit=(spec:BanditSpec)=>{
        if(!banditAsset||bandits.some(b=>b.spec.id===spec.id)||(banditRespawnAtRef.current[spec.id]||0)>Date.now())return;
        const root=cloneSkinned(banditAsset.scene) as THREE.Object3D;
        root.updateMatrixWorld(true);
        const bounds=new THREE.Box3().setFromObject(root),height=bounds.getSize(new THREE.Vector3()).y;
        if(height<.001)return;
        root.scale.multiplyScalar(3.0/height);
        root.updateMatrixWorld(true);
        const scaled=new THREE.Box3().setFromObject(root);
        const center=scaled.getCenter(new THREE.Vector3());
        root.position.set(-center.x,-scaled.min.y,-center.z);
        const actor=new THREE.Group();actor.position.set(spec.x,groundY(spec.x,spec.z),spec.z);actor.add(root);
        root.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
        scene.add(actor);
        const collider={id:spec.id,x:spec.x,z:spec.z,r:1.42};
        banditCollisions.push(collider);
        const mixer=new THREE.AnimationMixer(root);
        const actions:Record<string,THREE.AnimationAction>={};
        for(const clip of banditAsset.animations||[])actions[clip.name]=mixer.clipAction(clip);
        if(actions.Scene){actions.Scene.play();actions.Scene.paused=true;}
        const iron=new THREE.MeshStandardMaterial({color:0xbac5c8,metalness:.72,roughness:.28,side:THREE.DoubleSide});
        const grip=new THREE.MeshStandardMaterial({color:0x38231a,roughness:.9});
        const sword=new THREE.Group();
        const blade=new THREE.Mesh(new THREE.BoxGeometry(.16,.83,.055),iron);blade.position.y=.58;sword.add(blade);
        const tip=new THREE.Mesh(new THREE.ConeGeometry(.09,.2,4),iron);tip.rotation.y=Math.PI/4;tip.position.y=1.09;sword.add(tip);
        const handle=new THREE.Mesh(new THREE.CylinderGeometry(.043,.05,.29,8),grip);handle.position.y=.03;sword.add(handle);
        const guard=new THREE.Mesh(new THREE.BoxGeometry(.37,.055,.09),iron);guard.position.y=.18;sword.add(guard);
        sword.position.set(.68,1.25,.28);sword.rotation.set(.25,0,-.95);actor.add(sword);
        const preview:BanditActor={spec,root,actor,sword,mixer,actions,current:'Scene',next:0,alerted:false,hp:spec.hp,deathAt:0,restY:root.position.y,enemyNextAttack:0,enemyHitAt:0,collider};
        bandits.push(preview);
    };
    const loadBandits=()=>{
      if(banditRequested)return;
      banditRequested=true;
      loadGlbWithFolderFallback('Neutral_Bandit_Animated_Optimized.glb',(gltf:any)=>{
        if(glbTreesAlive)banditAsset=gltf;
      },'BANDITS');
    };

    // One rigged base model becomes a different guardian at each sacred Midgard location.
    type LocationGuardianActor={actor:THREE.Group;model:THREE.Object3D;mixer:THREE.AnimationMixer;actions:Record<string,THREE.AnimationAction>;current:string};
    const locationGuardians=new Map<string,LocationGuardianActor>();
    const canonicalGuardianClip=(raw:string)=>{
      const tail=String(raw||'').split('|').pop()||String(raw||'');
      const clean=tail.replace(/\.take.*$/i,'').replace(/[^a-z0-9]+/gi,'_').replace(/^_+|_+$/g,'').toLowerCase();
      if(clean==='walk'||clean.startsWith('walk_'))return 'Walk';
      if(clean==='run'||clean.startsWith('run_'))return 'Run';
      if(clean==='idle_sword'||clean.includes('idle_sword'))return 'Idle_Sword';
      if(clean==='idle_neutral'||clean.includes('idle_neutral'))return 'Idle_Neutral';
      if(clean==='idle'||clean.startsWith('idle_'))return 'Idle';
      if(clean.includes('sword')&&clean.includes('slash'))return 'Sword_Slash';
      if(clean.includes('hit')&&clean.includes('rec'))return 'HitRecieve';
      if(clean.includes('death')||clean==='die')return 'Death';
      return tail;
    };
    const playLocationGuardian=(g:LocationGuardianActor,name:string)=>{
      const action=g.actions[name]||g.actions.Idle_Neutral||g.actions.Idle_Sword||g.actions.Idle;
      if(!action)return;
      if(g.current===name&&name!=='Sword_Slash'&&name!=='HitRecieve'&&name!=='Death')return;
      if(g.current&&g.actions[g.current]&&g.actions[g.current]!==action)g.actions[g.current].fadeOut(.10);
      action.reset().enabled=true;action.setEffectiveWeight(1).fadeIn(.10);
      const once=name==='Sword_Slash'||name==='HitRecieve'||name==='Death';
      action.setLoop(once?THREE.LoopOnce:THREE.LoopRepeat,once?1:Infinity);
      action.clampWhenFinished=name==='Death';action.play();g.current=name;
    };
    const activeLocationGuardian=()=>locationGuardians.get(activeGuardianIdRef.current);
    guardIdleActionRef.current=()=>{const g=activeLocationGuardian();if(g)playLocationGuardian(g,'Idle_Neutral');};
    guardAttackActionRef.current=()=>{const g=activeLocationGuardian();if(g)playLocationGuardian(g,'Sword_Slash');};
    guardHitActionRef.current=()=>{const g=activeLocationGuardian();if(g)playLocationGuardian(g,'HitRecieve');};
    guardDeathActionRef.current=()=>{const g=activeLocationGuardian();if(g)playLocationGuardian(g,'Death');};

    loadGlbWithFolderFallback('Adventurer_Defender_Rigged.glb',(gltf:any)=>{
      if(!glbTreesAlive)return;
      for(const spec of Object.values(MIDGARD_GUARDIANS)){
        const model=cloneSkinned(gltf.scene);
        model.visible=true;model.position.set(0,0,0);model.rotation.y=0;model.scale.setScalar(spec.scale);
        model.traverse((part:any)=>{
          if(!part.isMesh)return;
          part.visible=true;part.castShadow=true;part.receiveShadow=true;part.frustumCulled=false;
          const recolor=(source:any)=>{
            const material=source?.clone?source.clone():source;
            if(!material)return material;
            const n=String(material.name||'').toLowerCase();
            if(material.color&&/(green|brown|grey|gray|black)/.test(n)){
              const target=new THREE.Color(spec.cloth);
              material.color.lerp(target,.72);material.needsUpdate=true;
            }
            return material;
          };
          part.material=Array.isArray(part.material)?part.material.map(recolor):recolor(part.material);
        });
        const nativeSword=model.getObjectByName('Sword');
        if(nativeSword)nativeSword.visible=true;
        const actor=new THREE.Group();actor.name='Guardian_'+spec.id;actor.visible=false;actor.add(model);
        if(spec.cloak!==undefined){
          const f=spec.scale/1.92;
          const cape=new THREE.Mesh(new THREE.PlaneGeometry(1.28*f,.92*f),new THREE.MeshStandardMaterial({color:spec.cloak,roughness:.96,metalness:0,side:THREE.DoubleSide}));
          cape.position.set(0,1.86*f,-.36*f);cape.rotation.x=-.10;cape.castShadow=true;actor.add(cape);
          const clasp=new THREE.Mesh(new THREE.TorusGeometry(.12*f,.025*f,8,18),new THREE.MeshStandardMaterial({color:spec.accent,roughness:.45,metalness:.72}));
          clasp.position.set(0,2.28*f,-.30*f);clasp.rotation.x=Math.PI/2;actor.add(clasp);
        }
        scene.add(actor);
        const mixer=new THREE.AnimationMixer(model),actions:Record<string,THREE.AnimationAction>={};
        for(const clip of gltf.animations||[]){
          const action=mixer.clipAction(clip),canonical=canonicalGuardianClip(clip.name);
          if(!actions[canonical])actions[canonical]=action;
          if(!actions[clip.name])actions[clip.name]=action;
        }
        const guardianActor={actor,model,mixer,actions,current:''} as LocationGuardianActor;
        locationGuardians.set(spec.id,guardianActor);
        mixer.addEventListener('finished',(event:any)=>{
          if(event.action===actions.Death)return;
          if(guardianActor.current==='Sword_Slash'||guardianActor.current==='HitRecieve'){
            playLocationGuardian(guardianActor,'Idle_Sword');
          }
        });
      }
      console.log('[MIDGARD GUARDIANS] ready',Array.from(locationGuardians.keys()));
    },'MIDGARD LOCATION GUARDIANS');

    // Tiny pollen motes drift through the air. One shared Points object keeps draw calls low.
    const moteCount=72;
    const motePos=new Float32Array(moteCount*3);
    for(let i=0;i<moteCount;i++){
      const a=midHash(i,1401)*Math.PI*2,r=12+midHash(i,1402)*74;
      motePos[i*3]=Math.cos(a)*r; motePos[i*3+1]=1.0+midHash(i,1403)*4.8; motePos[i*3+2]=Math.sin(a)*r+3;
    }
    const moteGeo=new THREE.BufferGeometry();
    moteGeo.setAttribute('position',new THREE.Float32BufferAttribute(motePos,3));
    const moteMat=new THREE.PointsMaterial({color:0xf0dfae,size:.075,transparent:true,opacity:.24,depthWrite:false,sizeAttenuation:true});
    const motes=new THREE.Points(moteGeo,moteMat);
    scene.add(motes);

    // Real GLB hero. The procedural prototype stays hidden so it can never flash
    // on screen while the selected character is still loading.
    const hero=new THREE.Group();
    scene.add(hero);

    let heroAnim:any=null;
    let attackStartedAt=-10000;
    const attackGlowMats:THREE.MeshStandardMaterial[]=[];
    const strikeColor=skin==="valkyrie"?0x91ddff:0xff8538;
    const strikeMat=new THREE.MeshBasicMaterial({color:strikeColor,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide});
    const slashSide=skin==="valkyrie"?-1:1;
    const slashCurve=new THREE.CatmullRomCurve3([
      new THREE.Vector3(-.48*slashSide,.57,-.04),
      new THREE.Vector3(-.10*slashSide,.34,.02),
      new THREE.Vector3(.34*slashSide,-.02,.03),
      new THREE.Vector3(.25*slashSide,-.43,-.02)
    ]);
    const slashGeo=new THREE.TubeGeometry(slashCurve,14,.026,4,false);
    const strikeSlash=new THREE.Mesh(slashGeo,strikeMat);
    strikeSlash.position.set(0,1.45,1.32);
    strikeSlash.visible=false;
    hero.add(strikeSlash);
    const strikeLight=new THREE.PointLight(strikeColor,0,4.8,2);
    strikeLight.position.set(0,1.35,1.15);
    hero.add(strikeLight);
    const boltGeo=new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0,.36,0),new THREE.Vector3(-.12,.13,0),
      new THREE.Vector3(-.12,.13,0),new THREE.Vector3(.08,-.05,0),
      new THREE.Vector3(.08,-.05,0),new THREE.Vector3(-.10,-.34,0),
      new THREE.Vector3(-.04,.08,0),new THREE.Vector3(-.27,-.03,0),
      new THREE.Vector3(.06,-.07,0),new THREE.Vector3(.27,-.19,0)
    ]);
    const boltMat=new THREE.LineBasicMaterial({color:0xc9f3ff,transparent:true,opacity:0,blending:THREE.AdditiveBlending});
    const strikeBolt=new THREE.LineSegments(boltGeo,boltMat);
    strikeBolt.position.set(.20*slashSide,1.30,1.38);
    strikeBolt.visible=false;
    hero.add(strikeBolt);
    const sparkPositions=new Float32Array([
      0,0,0, .28,.13,.03, -.25,.18,-.02, .18,-.22,.04,
      -.19,-.28,.01, .36,-.08,-.03, -.34,.02,.02, .08,.34,0
    ]);
    const sparkGeo=new THREE.BufferGeometry();
    sparkGeo.setAttribute("position",new THREE.BufferAttribute(sparkPositions,3));
    const sparkMat=new THREE.PointsMaterial({color:0xffa23f,size:.085,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending,sizeAttenuation:true});
    const strikeSparks=new THREE.Points(sparkGeo,sparkMat);
    strikeSparks.position.set(.18*slashSide,1.28,1.39);
    strikeSparks.visible=false;
    hero.add(strikeSparks);
    attackActionRef.current=()=>{
      const now=performance.now();
      if(now-attackStartedAt<650)return;
      attackStartedAt=now;
      const target=bandits.filter(b=>b.alerted&&b.hp>0&&Math.hypot(hero.position.x-b.actor.position.x,hero.position.z-b.actor.position.z)<4.0).sort((a,b)=>Math.hypot(hero.position.x-a.actor.position.x,hero.position.z-a.actor.position.z)-Math.hypot(hero.position.x-b.actor.position.x,hero.position.z-b.actor.position.z))[0];
      if(target&&!banditVictoryRef.current){
        target.hp=Math.max(0,target.hp-(equippedRuneRef.current==='uruzStrength'?2:1));
        target.enemyHitAt=0;
        setBanditOpponent({id:target.spec.id,name:target.spec.name,hp:target.hp,maxHp:target.spec.hp});
        if(target.hp===0){
          if(target.collider){
            const ci=banditCollisions.indexOf(target.collider);
            if(ci>=0)banditCollisions.splice(ci,1);
          }
          target.collider=null;target.deathAt=now;target.sword.visible=false;
          banditVictoryRef.current=target.spec.id;
          onBanditDefeated(target.spec.id);
          onBanditReward(target.spec.id);
          window.clearTimeout(banditVictoryTimer);
          banditVictoryTimer=window.setTimeout(()=>setBanditVictory(target.spec),950);
        }
        playBandit(target,target.hp?'Hit':'Death',now);
      }
      if(heroAnim?.mode==="clips"&&heroAnim.actions.attack){
        const action=heroAnim.actions.attack as THREE.AnimationAction;
        heroAnim.current?.fadeOut(.08);
        action.reset();action.enabled=true;action.setEffectiveWeight(1);action.setLoop(THREE.LoopOnce,1);action.clampWhenFinished=true;action.fadeIn(.05).play();
        heroAnim.current=action;
        heroAnim.attackUntil=now+Math.max(650,action.getClip().duration*1000);
        heroAnim.fallen=false;
      }
    };

    shieldActionRef.current=()=>{
      if(gear.includes('shield'))shieldRaiseUntilRef.current=performance.now()+1250;
    };
    let bendStartedAt=-10000,chopUntil=0;
    bendActionRef.current=()=>{
      if(skin!=='valkyrie'||whisperPhaseRef.current!=='closed'||insideHomeRef.current)return;
      bendStartedAt=performance.now();
      state.current.dx=0;state.current.dz=0;
    };
    gatherActionRef.current=(id:string)=>{
      const node=gatherNodes.find(item=>item.spot.id===id);
      if(!node||node.used||insideHomeRef.current||whisperPhaseRef.current!=='closed')return;
      if(Math.hypot(state.current.x-node.spot.x,state.current.z-node.spot.z)>2.6)return;
      node.used=true;
      if(node.collider)colliders.splice(colliders.indexOf(node.collider),1);
      node.fallAt=performance.now()+(node.spot.kind==='herbs'?400:0);
      if(node.spot.kind==='herbs')bendActionRef.current?.();
      else{chopUntil=performance.now()+690;attackActionRef.current?.();}
      onGatherRef.current(node.spot.id,node.spot.kind);
    };
    let shieldGuardMount:THREE.Group|null=null;
    let borrowedHatchet:THREE.Group|null=null,heldWeapon:THREE.Group|null=null;
    const shieldIdleOrientation=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,Math.PI,0));
    const shieldFacing=new THREE.Quaternion();
    const guardHeroWorld=new THREE.Quaternion(),guardParentWorld=new THREE.Quaternion();
    const heroAsset=skin==="valkyrie"
      ? "Vika-3d-animated-optimized.glb"
      : "Yggdrasil_Viking_Jarl.glb";

    loadGlbWithFolderFallback(heroAsset,(gltf:any)=>{
      if(!glbTreesAlive)return;
      const model=gltf.scene;
      markMeshes(model);
      model.traverse((o:any)=>{
        if(!o.isMesh)return;
        const nm=String(o.name||"");
        const isProjected=/^HeroVisual_/.test(nm);

        // The projected artwork already contains its own painted lighting.
        // Let it receive scene light, but don't let the transparent cards cast
        // large rectangular shadows. The slim depth shell handles the silhouette shadow.
        o.castShadow=!isProjected;
        o.receiveShadow=!isProjected;

        if(/^DefaultWeapon_/.test(nm)){
          o.visible=weapon==="default";
        }
      });

      const hasNativeClips=skin==="valkyrie"&&gltf.animations?.length>0;
      // Vika is authored at roughly one metre in Blender units; the existing
      // procedural heroes are approximately three metres tall before scaling.
      model.scale.setScalar((hasNativeClips?3.944:.78)*.9);
      model.rotation.y=0;
      model.position.set(0,0,0);
      model.updateMatrixWorld(true);

      // Snap feet to the hero root.
      const bb=new THREE.Box3().setFromObject(model);
      model.position.y-=bb.min.y;
      model.updateMatrixWorld(true);

      hero.add(model);

      // Tint the existing costume texture according to the animated mesh's bone
      // weights. No extra meshes are needed for boots, armor or hair.
      const bone=(name:string)=>model.getObjectByName('mixamorig'+name)||model.getObjectByName('mixamorig:'+name);
      const isVika=skin==='valkyrie';
      if(isVika&&gear.some(id=>id==='armor'||id==='helmet'||id==='boots')){
        model.traverse((object:any)=>{
          if(!object.isSkinnedMesh||!object.geometry?.getAttribute('skinIndex'))return;
          const geometry=object.geometry.clone();object.geometry=geometry;
          const joints=geometry.getAttribute('skinIndex'),weights=geometry.getAttribute('skinWeight');
          const regions=new Float32Array(joints.count*3);
          for(let i=0;i<joints.count;i++)for(let k=0;k<4;k++){
            const joint=joints.getComponent(i,k),weight=weights.getComponent(i,k);
            if(joint===1||joint===2||joint===3)regions[i*3]+=weight;
            if(joint===5)regions[i*3+1]+=weight;
            if(joint===15||joint===16||joint===17||joint===19||joint===20||joint===21)regions[i*3+2]+=weight;
          }
          geometry.setAttribute('gearRegion',new THREE.BufferAttribute(regions,3));
          const tint=(id:GearId)=>{
            if(!gear.includes(id))return 'vec3(0.0)';
            const level=Math.min(5,Math.max(0,gearLevels[id]||0));
            const colors=id==='armor'?['#68c4dc','#46a6d1','#3285bd','#2268ad','#174c9a','#12378a']:id==='boots'?['#8bd4ee','#64b9e5','#489bd7','#317cbe','#235ca5','#17428e']:['#d1b4e8','#b998e0','#a37cd5','#8660c5','#6f48b5','#5734a1'];
            const c=new THREE.Color(colors[level]);return `vec3(${c.r.toFixed(4)},${c.g.toFixed(4)},${c.b.toFixed(4)})`;
          };
          const armor=tint('armor'),hair=tint('helmet'),boots=tint('boots');
          const recolor=(m:any)=>{
            if(!m?.isMeshStandardMaterial)return m;
            const material=m.clone();
            material.onBeforeCompile=(shader:any)=>{
              shader.vertexShader='attribute vec3 gearRegion; varying vec3 vGearRegion;\n'+shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\n vGearRegion = gearRegion;');
              shader.fragmentShader='varying vec3 vGearRegion;\n'+shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
                vec3 originalGear = diffuseColor.rgb;
                float redCloth = smoothstep(0.035,0.14,originalGear.r-originalGear.g)*smoothstep(0.015,0.09,originalGear.r-originalGear.b);
                float paleHair = smoothstep(0.20,0.42,dot(originalGear,vec3(0.333)))*(1.0-smoothstep(0.08,0.23,abs(originalGear.r-originalGear.g)+abs(originalGear.g-originalGear.b)));
                diffuseColor.rgb=mix(diffuseColor.rgb,${armor}*(0.52+0.48*dot(originalGear,vec3(0.333))),clamp(vGearRegion.x*redCloth*1.5*${gear.includes('armor')?'1.0':'0.0'},0.0,1.0));
                diffuseColor.rgb=mix(diffuseColor.rgb,${hair}*(0.55+0.45*dot(originalGear,vec3(0.333))),clamp(vGearRegion.y*paleHair*1.4*${gear.includes('helmet')?'1.0':'0.0'},0.0,1.0));
                diffuseColor.rgb=mix(diffuseColor.rgb,${boots}*(0.5+0.5*dot(originalGear,vec3(0.333))),clamp(vGearRegion.z*1.4*${gear.includes('boots')?'1.0':'0.0'},0.0,1.0));`);
            };
            material.customProgramCacheKey=()=>`hero-gear-${armor}-${hair}-${boots}`;
            return material;
          };
          object.material=Array.isArray(object.material)?object.material.map(recolor):recolor(object.material);
        });
      }
      if(gear.includes('shield')){
        const shieldHand=isVika?bone('LeftForeArm'):model.getObjectByName('WeaponSocket_L');
        if(shieldHand)loadGlbWithFolderFallback(shieldAsset,(shieldGlb:any)=>{
          if(!glbTreesAlive)return;
          const shieldModel=shieldGlb.scene;
          // This model has a deep rim; flatten only its depth, keeping the face intact.
          if(shieldAsset==='Shield_Round.glb')shieldModel.scale.z=.22;
          shieldModel.updateMatrixWorld(true);
          const bounds=new THREE.Box3().setFromObject(shieldModel);
          const size=bounds.getSize(new THREE.Vector3());
          const span=Math.max(size.x,size.y,size.z);
          if(span<.001)return;
          const center=bounds.getCenter(new THREE.Vector3());
          shieldModel.position.set(-center.x,-center.y,-center.z);
          const mount=new THREE.Group();mount.scale.setScalar((isVika?.38:1.1)/span);
          // Fasten the back of the shield to the middle of the animated forearm.
          mount.position.set(0,isVika?.075:0,isVika?-.016:.12);
          // The GLB's straps face forward at zero rotation; turn them toward
          // the arm so the painted face points out at the player.
          mount.rotation.y=Math.PI;
          mount.add(shieldModel);shieldHand.add(mount);
          shieldGuardMount=mount;
        },'HERO SHIELD');
      }

      // Equip the chosen model on the animated weapon hand.
      if(skin==="valkyrie"||weapon!=="default"){
        // GLTFLoader strips the colon from Mixamo bone names while binding animations.
        const hand=skin==="valkyrie"
          ? model.getObjectByName("mixamorigRightHand") || model.getObjectByName("mixamorig:RightHand") || model.getObjectByName("RightHand")
          : model.getObjectByName("WeaponSocket_R") || model.getObjectByName("WeaponSocket_L");
        const asset=weapon==="default"?'Sword.glb':WEAPON_ASSET[weapon];
        if(hand&&asset)loadGlbWithFolderFallback(asset,(swordGlb:any)=>{
          if(!glbTreesAlive)return;
          const blade=swordGlb.scene;
          textureSteelOnWeapon(blade,asset);
          blade.updateMatrixWorld(true);
          const bounds=new THREE.Box3().setFromObject(blade);
          const size=bounds.getSize(new THREE.Vector3());
          if(size.y<.001)return;
          const center=bounds.getCenter(new THREE.Vector3());
          blade.position.set(-center.x,-bounds.min.y,-center.z);
          const grip=new THREE.Group();
          grip.scale.setScalar((skin==="valkyrie"?(weapon==="spear"?.82:.57):1.15)/size.y);
          grip.position.set(0,skin==="valkyrie"?-.065:0,.015);
          grip.rotation.x=-.20;
          grip.add(blade);
          blade.traverse((o:any)=>{if(o.isMesh)o.castShadow=true;});
          hand.add(grip);
          heldWeapon=grip;
        },'HERO WEAPON');
      }
      if(isVika&&weapon!=='axe'){
        const hand=bone('RightHand');
        if(hand){
          const hatchet=new THREE.Group();hatchet.position.set(0,-.11,.015);
          const haft=new THREE.Mesh(new THREE.CylinderGeometry(.022,.027,.62,6),gatherTrunkMat);haft.position.y=.18;hatchet.add(haft);
          const edge=new THREE.Mesh(new THREE.BoxGeometry(.26,.17,.055),mat(0x9ba9ac,.64,.2));edge.position.set(.11,.44,0);hatchet.add(edge);
          hatchet.visible=false;hand.add(hatchet);borrowedHatchet=hatchet;
        }
      }

      const armL=model.getObjectByName("Arm_L_Pivot") as THREE.Object3D | null;
      const armR=model.getObjectByName("Arm_R_Pivot") as THREE.Object3D | null;
      const elbowL=model.getObjectByName("Elbow_L_Pivot") as THREE.Object3D | null;
      const elbowR=model.getObjectByName("Elbow_R_Pivot") as THREE.Object3D | null;
      const legL=model.getObjectByName("Leg_L_Pivot") as THREE.Object3D | null;
      const legR=model.getObjectByName("Leg_R_Pivot") as THREE.Object3D | null;
      const kneeL=model.getObjectByName("Knee_L_Pivot") as THREE.Object3D | null;
      const kneeR=model.getObjectByName("Knee_R_Pivot") as THREE.Object3D | null;
      const eyesPivot=model.getObjectByName("Eyes_Pivot") as THREE.Object3D | null;
      const weaponSocketL=model.getObjectByName("WeaponSocket_L") as THREE.Object3D | null;
      const weaponSocketR=model.getObjectByName("WeaponSocket_R") as THREE.Object3D | null;
      // The Valkyrie's sword is in her left hand, while the shield is on the right.
      // Animate the actual weapon arm so she never appears to strike with the shield.
      const weaponSocket=skin==="valkyrie"?(weaponSocketL||weaponSocketR):(weaponSocketR||weaponSocketL);
      if(weaponSocket){
        weaponSocket.traverse((o:any)=>{
          if(!o.isMesh)return;
          const tune=(m:any)=>{
            if(!m?.isMeshStandardMaterial)return m;
            const mm=m.clone();
            mm.emissive=new THREE.Color(0x8b240d);
            mm.emissiveIntensity=.05;
            attackGlowMats.push(mm);
            return mm;
          };
          if(Array.isArray(o.material))o.material=o.material.map(tune);else o.material=tune(o.material);
        });
      }

      const projectedFront=model.getObjectByName("HeroVisual_Front") as THREE.Object3D | null;
      // Legacy V6 characters keep compatibility motion. Both current Yggdrasil
      // heroes have articulated limbs and use the rigged branch below.
      const isV6MultiView=/v6_.*_multiview/i.test(heroAsset);

      if(hasNativeClips){
        const mixer=new THREE.AnimationMixer(model);
        const findClip=(...names:string[])=>names.map(name=>THREE.AnimationClip.findByName(gltf.animations,name)).find(Boolean) as THREE.AnimationClip|undefined;
        const idleClip=findClip("idle","sword_idle")||gltf.animations[0];
        const walkClip=findClip("walk_loop","walk")||idleClip;
        const attackClip=findClip("sword_attack","attack");
        const fallClip=findClip("fall","death");
        const idle=mixer.clipAction(idleClip),walk=mixer.clipAction(walkClip);
        const attack=attackClip?mixer.clipAction(attackClip):null;
        const fall=fallClip?mixer.clipAction(fallClip):null;
        idle.play();
        heroAnim={mode:"clips",model,baseY:model.position.y,mixer,actions:{idle,walk,attack,fall},current:idle,attackUntil:0,fallen:false,phase:1.2,shieldUpper:bone('LeftArm'),shieldLower:bone('LeftForeArm'),bendSpine:bone('Spine'),bendChest:bone('Spine1'),bendArm:bone('RightArm')};
      }else if(projectedFront || isV6MultiView){
        // V5/V6 experimental textured heroes keep the artwork/model intact.
        // For V6 we use a subtle full-body walking motion because its current
        // compatibility pivots are not parents of every visible mesh yet.
        heroAnim={
          mode:isV6MultiView?"multiview":"projected",
          model,
          baseY:model.position.y,
          phase:skin==="valkyrie"?1.2:0,
          weapon:weaponSocket||new THREE.Object3D()
        };
      }else if(armL&&armR&&legL&&legR){
        const dummyL=new THREE.Object3D();
        const dummyR=new THREE.Object3D();
        const dummyKL=new THREE.Object3D();
        const dummyKR=new THREE.Object3D();
        const dummyEyes=new THREE.Object3D();
        heroAnim={
          mode:"rigged",
          armL:{upper:armL,elbow:elbowL||dummyL},
          armR:{upper:armR,elbow:elbowR||dummyR},
          legL:{upper:legL,knee:kneeL||dummyKL},
          legR:{upper:legR,knee:kneeR||dummyKR},
          eyes:eyesPivot||dummyEyes,
          weapon:weaponSocket||new THREE.Object3D(),
          attackSide:skin==="valkyrie"?"left":"right",
          phase:skin==="valkyrie"?1.2:0
        };
      }

      console.log("[HERO GLB] loaded",heroAsset);
      setHeroReady(true);
    },"HERO GLB",()=>{if(glbTreesAlive)setHeroLoadFailed(true);});

    villageDoorActionRef.current=(id:string)=>{
      if(doorVisit)return;
      if(outsideHost?.home.id===id){onRef.current(id,{x:state.current.x,z:state.current.z});return;}
      if(outsideHost){
        outsideHost.actor!.visible=false;outsideHost.pivot!.rotation.y=0;
        outsideHost=null;setOutsideHouse("");
      }
      const host=hosts.get(id),point=host?.doorPoint;
      if(!host||!point||!host.pivot||!host.actor){setDoorNotice("Хозяин и дверь ещё загружаются. Попробуй снова через несколько секунд.");return;}
      if(Math.hypot(state.current.x-point.x,state.current.z-point.z)>5){setDoorNotice("Подойди ближе к ручке двери.");return;}
      setDoorNotice("");state.current.dx=0;state.current.dz=0;
      const {rot}=host.home,nx=Math.sin(rot),nz=Math.cos(rot);
      const front=(point.x-host.home.x)*nx+(point.z-host.home.z)*nz;
      const clearDistance=Math.max(1.2,host.home.d*HOME_SCALE*.5+1.25-front);
      doorVisit={host,elapsed:0,start:new THREE.Vector3(state.current.x,0,state.current.z),
        reach:new THREE.Vector3(point.x+nx*.95,0,point.z+nz*.95),
        target:new THREE.Vector3(point.x+nx*clearDistance,0,point.z+nz*clearDistance),spoken:false};
      host.actor.visible=false;host.pivot.rotation.y=0;playHost(host,"Idle");setNear("");
    };
    const ray=new THREE.Raycaster();const pointer=new THREE.Vector2();
    const click=(e:PointerEvent)=>{if((e.target as HTMLElement)?.closest?.(".mid3d-ui"))return;const r=renderer.domElement.getBoundingClientRect();pointer.x=((e.clientX-r.left)/r.width)*2-1;pointer.y=-((e.clientY-r.top)/r.height)*2+1;ray.setFromCamera(pointer,camera);const hit=ray.intersectObjects(objects,true)[0];if(hit){let o:any=hit.object;while(o.parent&&!o.userData?.id)o=o.parent;if(o.userData?.id){if(o.userData.id==="gate"||o.userData.id==="gateRear")gateActionRef.current?.(o.userData.id);else if(o.userData.id==="forge")forgeActionRef.current?.();else if(hosts.has(o.userData.id))villageDoorActionRef.current?.(o.userData.id);else onRef.current(o.userData.id,{x:state.current.x,z:state.current.z});}}};
    renderer.domElement.addEventListener("pointerup",click);

    const setHomeMode=(inside:boolean)=>{
      insideHomeRef.current=inside;
      setInsideHome(inside);
      setNear("");
      homeInterior.visible=inside;
      // Hide the GLB exterior while inside. If the GLB failed to load, preserve
      // the original procedural roof behavior as a safe fallback.
      if(heroHouseModel){
        heroHouseModel.visible=!inside;
        roofL.visible=false; roofR.visible=false; cabinRidge.visible=false; chimney.visible=false; chimneyCap.visible=false;
      }else{
        roofL.visible=!inside; roofR.visible=!inside; cabinRidge.visible=!inside; chimney.visible=!inside; chimneyCap.visible=!inside;
      }
      if(inside){
        state.current.x=heroHomeX; state.current.z=heroHomeZ+0.95*HOME_SCALE; cameraDir.current.x=0; cameraDir.current.z=-1;
        doorPivot.rotation.y=-Math.PI/2;
      }else{
        state.current.x=heroHomeX; state.current.z=heroHomeZ+3.75*HOME_SCALE; cameraDir.current.x=0; cameraDir.current.z=1;
        doorPivot.rotation.y=0;
      }
      hero.position.set(state.current.x,groundY(state.current.x,state.current.z)+.04,state.current.z);
    };
    homeActionRef.current=setHomeMode;

    const destinations=[
      // Door points sit on the front side of each house rather than at its
      // centre, so the white interaction cloud appears only by the entrance.
      ...homeDestinations,
      {id:"forge",label:"Дверь кузницы Вёлунда",x:-10,z:-2.55,r:2.5},
      {id:"mimir",label:"Колодец Мимира",x:1,z:0,r:4.8},{id:"norns",label:"Прядильня норн",x:-52,z:38,r:5.4},
      {id:"rune",label:"Древний камень Феху",x:50,z:60,r:4.5},{id:"port",label:"Речной мост",x:-57,z:-48,r:6},
      {id:"ashgrove",label:"Роща Ясеня",x:-5,z:75,r:7.5},{id:"threeThreads",label:"Колодец Трёх Норн",x:58,z:-28,r:6.8},{id:"nornsChest",label:"Красный сундук Норн",x:rubyChestX,z:rubyChestZ,r:3.0},{id:"forestCache",label:"Золотой сундук",x:-72,z:48,r:7.0},
      {id:"runefield",label:"Поле Рун",x:18,z:55,r:8.0},{id:"oldfarm",label:"Дверь Старого хутора",x:-64.4,z:10.8,r:3.2},{id:"deer",label:"Поляна Четырёх Оленей",x:43,z:32,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:62,z:78,r:6.5},{id:"angelicChest",label:"Серебряный ангельский сундук",x:angelicChestX,z:angelicChestZ,r:4.0},{id:"hunterCamp",label:"Забытая стоянка",x:68,z:8,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:heroHomeX,z:heroHomeZ+4.7*HOME_SCALE,r:3.2},{id:"deepGrove",label:"Глубокая роща",x:-45,z:75,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:-30,z:15,r:7.5},{id:"powerCircle",label:"Круг Силы — Монолит",x:5,z:-70,r:6.5},{id:"whisperStone",label:"Камень Шёпота",x:-72,z:-48,r:6.5},
      {id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},
      {id:"northBridge",label:northBridgeRepaired?"Северный мост":"Северный мост — проход закрыт",x:NORTH_BRIDGE_X+BRIDGE_SPAN/2+1.6,z:NORTH_BRIDGE_Z,r:3.8},
      {id:"gate",label:"Передние ворота",x:0,z:44,r:6},{id:"gateRear",label:"Задние ворота",x:0,z:-31,r:6},
      ...towerSlots.map(([x,z])=>({id:"tower",label:"Крепостная башня",x,z,r:4}))
    ];

    const resize=()=>{const w=Math.max(1,el.clientWidth),hh=Math.max(1,el.clientHeight);camera.aspect=w/hh;camera.updateProjectionMatrix();renderer.setSize(w,hh,false);};resize();const observer=new ResizeObserver(resize);observer.observe(el);
    let raf=0,last=performance.now(),lastPositionSave=0;
    const loop=(now:number)=>{
      const dt=Math.min(.05,(now-last)/1000);last=now;const q=state.current;const l=Math.hypot(q.dx,q.dz);
      const whisperNow=whisperPhaseRef.current;
      const encounterLocked=whisperNow!=="closed";

      hosts.forEach(host=>{if(host.actor?.visible)host.mixer?.update(dt);});
      if(doorVisit){
        const visit=doorVisit,host=visit.host,point=host.doorPoint!,actor=host.actor!,rot=host.home.rot;
        visit.elapsed+=dt;
        const t=visit.elapsed;
        if(t<2.75){
          q.dx=0;q.dz=0;
          const approach=THREE.MathUtils.smoothstep(t,0,.62);
          const retreat=THREE.MathUtils.smoothstep(t,1.50,2.68);
          q.x=THREE.MathUtils.lerp(THREE.MathUtils.lerp(visit.start.x,visit.reach.x,approach),visit.target.x,retreat);
          q.z=THREE.MathUtils.lerp(THREE.MathUtils.lerp(visit.start.z,visit.reach.z,approach),visit.target.z,retreat);
          hero.rotation.y=Math.atan2(point.x-q.x,point.z-q.z);
          cameraDir.current.x=Math.sin(hero.rotation.y);cameraDir.current.z=Math.cos(hero.rotation.y);
        }
        const press=THREE.MathUtils.smoothstep(t,.57,.77)*(1-THREE.MathUtils.smoothstep(t,.98,1.20));
        if(host.handle)host.handle.rotation.z=(host.handleBase||0)-press*.32;
        host.pivot!.rotation.y=-1.38*THREE.MathUtils.smoothstep(t,.94,1.42);
        if(t>=1.30){
          actor.visible=true;
          const exit=THREE.MathUtils.smoothstep(t,1.38,2.68);
          const x=point.x+Math.sin(rot)*(-1.12+3.52*exit)+Math.cos(rot)*.95*exit;
          const z=point.z+Math.cos(rot)*(-1.12+3.52*exit)-Math.sin(rot)*.95*exit;
          actor.position.set(x,groundY(x,z)+(host.groundOffset||0),z);
          actor.rotation.y=t<2.65?rot:Math.atan2(q.x-x,q.z-z);
          playHost(host,t<2.65?"Walk":"Talk");
        }
        if(t>=2.78&&!visit.spoken){
          visit.spoken=true;
          playHost(host,"Talk");
          outsideHost=host;outsideSince=now;setOutsideHouse(host.home.id);
          doorVisit=null;
          onRef.current(host.home.id,{x:q.x,z:q.z});
        }
      }
      if(outsideHost){
        const host=outsideHost,point=host.doorPoint!;
        if(now-outsideSince>1600)playHost(host,"Idle");
        if(Math.hypot(q.x-point.x,q.z-point.z)>7){
          host.actor!.visible=false;host.pivot!.rotation.y=0;
          if(host.handle)host.handle.rotation.z=host.handleBase||0;
          outsideHost=null;setOutsideHouse("");
        }
      }

      if(forgeDoorOpening){
        forgeDoorProgress=Math.min(1,forgeDoorProgress+dt*1.65);
        const doorT=THREE.MathUtils.smoothstep(forgeDoorProgress,0,1);
        forgeDoorPivot.rotation.y=-doorT*1.42;
        if(forgeDoorProgress>.86&&!forgeDoorEntered){
          forgeDoorEntered=true;
          onRef.current("forge",forgeEntryPosition);
        }
      }

      for(const gate of fortGates){
        const rear=gate.id==="gateRear",target=(rear?rearGateOpenRef.current:villageGateOpenRef.current)?1:0;
        let progress=rear?rearGateProgress:villageGateProgress;
        progress=THREE.MathUtils.clamp(progress+Math.sign(target-progress)*dt*.72,0,1);
        if(rear)rearGateProgress=progress;else villageGateProgress=progress;
        const barT=THREE.MathUtils.smoothstep(progress,0,.42),doorT=THREE.MathUtils.smoothstep(progress,.32,1);
        gate.left.rotation.y=-doorT*1.42;gate.right.rotation.y=doorT*1.42;
        gate.bar.position.set(-barT*4.9,2.3-barT*.78,1.37+barT*.52);gate.bar.rotation.z=-barT*.28;
      }
      if(!encounterLocked&&!doorVisit&&l>.05){
        const step=6.2*(equippedRuneRef.current==='raidoPath'?1.1:1)*dt;
        moveWithCollision(q,q.x+(q.dx/l)*step,q.z+(q.dz/l)*step);
        hero.rotation.y=Math.atan2(q.dx,q.dz);
        cameraDir.current.x=q.dx/l;
        cameraDir.current.z=q.dz/l;
        setMoving(true);
      }else{q.dx=0;q.dz=0;setMoving(false);}
      const battleSpec=MIDGARD_GUARDIANS[activeGuardianIdRef.current]||MIDGARD_GUARDIANS.whisperStone;
      if(whisperBattleStartedRef.current&&whisperNow!=="closed"&&whisperNow!=="question"){
        q.x=battleSpec.x;q.z=battleSpec.z+7.0;
        hero.rotation.y=Math.PI;
        cameraDir.current.x=0;cameraDir.current.z=-1;
      }
      const hy=insideHomeRef.current?groundY(heroHomeX,heroHomeZ)+.58*HOME_SCALE*BUILDING_HEIGHT:onRiverBridge(q.x,q.z)?bridgeHeight(q.x,q.z)+.12:groundY(q.x,q.z);
      const moving=!encounterLocked&&l>.05;
      hero.position.set(q.x,hy+.04,q.z);
      if(!banditRequested&&BANDIT_SPECS.some(spec=>Math.hypot(q.x-spec.x,q.z-spec.z)<34))loadBandits();
      if(banditAsset)BANDIT_SPECS.forEach(spec=>{
        if(Math.hypot(q.x-spec.x,q.z-spec.z)<33)spawnBandit(spec);
      });
      for(const preview of bandits){
        if(preview.hp<=0){
          const elapsed=preview.deathAt?now-preview.deathAt:0;
          if(elapsed>1350)preview.actor.visible=false;
          const readyAt=banditRespawnAtRef.current[preview.spec.id]||0;
          if(readyAt&&Date.now()>=readyAt){
            preview.hp=preview.spec.hp;preview.deathAt=0;preview.alerted=false;
            preview.enemyNextAttack=0;preview.enemyHitAt=0;preview.current='Scene';preview.next=0;
            preview.root.rotation.set(0,0,0);preview.root.position.y=preview.restY;
            preview.actor.position.set(preview.spec.x,groundY(preview.spec.x,preview.spec.z),preview.spec.z);
            preview.actor.visible=true;preview.sword.visible=true;
            preview.actions.Death?.stop();preview.actions.Hit?.stop();preview.actions.Attack?.stop();preview.actions.Run?.stop();
            if(preview.actions.Scene){preview.actions.Scene.reset().play();preview.actions.Scene.paused=true;}
            const collider={id:preview.spec.id,x:preview.spec.x,z:preview.spec.z,r:1.42};
            preview.collider=collider;banditCollisions.push(collider);
          }else{
            preview.mixer.update(dt);
            if(preview.deathAt){
              const fall=THREE.MathUtils.smoothstep(elapsed/900,0,1);
              preview.root.rotation.x=-1.38*fall;
              preview.root.position.y=preview.restY-.3*fall;
            }
            continue;
          }
        }
        const dx=q.x-preview.actor.position.x,dz=q.z-preview.actor.position.z;
        const distance=Math.hypot(dx,dz);
        if(distance>43)continue;
        if(preview.hp>0&&preview.alerted&&distance>18){preview.alerted=false;preview.enemyHitAt=0;}
        if(preview.hp>0&&!preview.alerted){
          const homeX=preview.spec.x-preview.actor.position.x,homeZ=preview.spec.z-preview.actor.position.z;
          const homeDistance=Math.hypot(homeX,homeZ);
          if(homeDistance>.04){
            const homeStep=Math.min(homeDistance,dt*2.1);
            preview.actor.position.x+=homeX/homeDistance*homeStep;
            preview.actor.position.z+=homeZ/homeDistance*homeStep;
            preview.actor.position.y=groundY(preview.actor.position.x,preview.actor.position.z);
            if(preview.collider){preview.collider.x=preview.actor.position.x;preview.collider.z=preview.actor.position.z;}
            playBandit(preview,'Run',now);
          }
        }
        if(!preview.alerted&&preview.hp>0&&Math.hypot(q.x-preview.spec.x,q.z-preview.spec.z)<9)preview.alerted=true;
        if(preview.alerted&&preview.hp>0&&!banditVictoryRef.current&&!encounterLocked&&!inventoryPauseRef.current){
          if(preview.current==='Hit'&&now<preview.next){/* Finish the hit reaction. */}
          else if(distance>2.5){
            playBandit(preview,'Run',now);
            const step=Math.min(distance-2.5,dt*2.1);
            const nx=preview.actor.position.x+dx/distance*step,nz=preview.actor.position.z+dz/distance*step;
            if(!inRiverWater(nx,nz)||onRiverBridge(nx,nz)){preview.actor.position.x=nx;preview.actor.position.z=nz;}
            preview.actor.position.y=groundY(preview.actor.position.x,preview.actor.position.z);
            if(preview.collider){preview.collider.x=preview.actor.position.x;preview.collider.z=preview.actor.position.z;}
          }else if(now>=preview.enemyNextAttack){
            preview.enemyNextAttack=now+1850;
            preview.enemyHitAt=now+560;
            playBandit(preview,'Attack',now);
          }
          preview.actor.rotation.y=Math.atan2(dx,dz);
        }
        preview.mixer.update(dt);
        if(preview.enemyHitAt&&now>=preview.enemyHitAt&&preview.hp>0){
          preview.enemyHitAt=0;
          if(!banditVictoryRef.current&&!encounterLocked&&!inventoryPauseRef.current&&Math.hypot(q.x-preview.actor.position.x,q.z-preview.actor.position.z)<3.15){
            const guarding=shieldRaiseUntilRef.current>now&&gear.includes('shield');
            const damage=Math.max(1,preview.spec.damage-banditDefenseRef.current);
            banditDamageRef.current(guarding?Math.max(1,Math.ceil(damage*.25)):damage,guarding);
          }
        }
        if(preview.current==='Attack'&&now<preview.next){
          const arm=preview.root.getObjectByName('DEF-upper_arm.R_0457');
          const swing=Math.sin(Math.PI*THREE.MathUtils.clamp((1150-(preview.next-now))/850,0,1));
          if(arm)arm.rotateX(-1.55*swing);
          if(arm)arm.rotateZ(-1.1*swing);
          preview.sword.rotation.z=-.95+2.45*swing;
          preview.sword.rotation.x=.25-.9*swing;
        }else{preview.sword.rotation.z=-.95;preview.sword.rotation.x=.25;}
      }
      if(now-lastBanditHud>200){
        lastBanditHud=now;
        const nearest=bandits.filter(b=>b.alerted&&b.hp>0&&Math.hypot(q.x-b.actor.position.x,q.z-b.actor.position.z)<15).sort((a,b)=>Math.hypot(q.x-a.actor.position.x,q.z-a.actor.position.z)-Math.hypot(q.x-b.actor.position.x,q.z-b.actor.position.z))[0];
        if(nearest&&!banditVictoryRef.current)setBanditOpponent(prev=>prev?.id===nearest.spec.id&&prev.hp===nearest.hp?prev:{id:nearest.spec.id,name:nearest.spec.name,hp:nearest.hp,maxHp:nearest.spec.hp});
        else if(!banditVictoryRef.current)setBanditOpponent(prev=>prev?null:prev);
      }
      // Keep the latest map position independently from the forge. This also
      // covers exits through Hero, Gift, Hall and the world tree navigation.
      if(now-lastPositionSave>250){
        lastPositionSave=now;
        rememberPosition({x:q.x,z:q.z});
      }
      if(heroAnim){
        const walkT=now*.011+heroAnim.phase;
        const chopping=now<chopUntil&&skin==='valkyrie'&&weapon!=='axe';
        if(borrowedHatchet)borrowedHatchet.visible=chopping;
        if(heldWeapon)heldWeapon.visible=!chopping;
        const attackAge=now-attackStartedAt;
        const attackActive=attackAge>=0&&attackAge<680;
        const attackP=attackActive?attackAge/680:0;
        const easeStrike=(v:number)=>v*v*(3-2*v);
        let attackArmX=0,attackElbowX=0,attackWeaponZ=0,attackBodyX=0;
        if(attackActive&&attackP<.38){
          // Readable preparation: lift the weapon behind and above the shoulder.
          const t=easeStrike(attackP/.38);
          attackArmX=-2.28*t;
          attackElbowX=-.88*t;
          attackWeaponZ=.62*t;
          attackBodyX=-.07*t;
        }else if(attackActive&&attackP<.64){
          // Fast overhead cut. The arm passes from above the head to below the chest.
          const t=easeStrike((attackP-.38)/.26);
          attackArmX=THREE.MathUtils.lerp(-2.28,.76,t);
          attackElbowX=THREE.MathUtils.lerp(-.88,-.08,t);
          attackWeaponZ=THREE.MathUtils.lerp(.62,-.48,t);
          attackBodyX=THREE.MathUtils.lerp(-.07,.12,t);
        }else if(attackActive){
          // Controlled recovery back to the normal walk/idle pose.
          const t=easeStrike((attackP-.64)/.36);
          attackArmX=THREE.MathUtils.lerp(.76,0,t);
          attackElbowX=THREE.MathUtils.lerp(-.08,0,t);
          attackWeaponZ=THREE.MathUtils.lerp(-.48,0,t);
          attackBodyX=THREE.MathUtils.lerp(.12,0,t);
        }
        const impact=attackActive?Math.max(0,1-Math.abs(attackP-.57)/.17):0;
        attackGlowMats.forEach(m=>{m.emissiveIntensity=attackActive ? .22+impact*2.45 : .05;});
        strikeSlash.visible=impact>0;
        strikeBolt.visible=skin==="valkyrie"&&impact>0;
        strikeSparks.visible=skin!=="valkyrie"&&impact>0;
        const fxScale=.78+impact*(.44+h.str*.026);
        strikeSlash.scale.setScalar(fxScale);
        strikeMat.opacity=impact*.9;
        boltMat.opacity=impact*.92;
        strikeBolt.scale.setScalar(.76+impact*(.52+h.str*.018));
        sparkMat.opacity=impact*.96;
        strikeSparks.scale.setScalar(.45+impact*(1.05+h.str*.035));
        strikeLight.intensity=impact*(1.35+h.str*.16);
        if(heroAnim.mode==="clips"){
          const transition=(next:THREE.AnimationAction|null,fade=.16)=>{
            if(!next||heroAnim.current===next)return;
            heroAnim.current?.fadeOut(fade);next.reset();next.enabled=true;next.setEffectiveWeight(1);next.fadeIn(fade).play();heroAnim.current=next;
          };
          if(whisperNow==="defeat"&&heroAnim.actions.fall&&!heroAnim.fallen){
            const fall=heroAnim.actions.fall as THREE.AnimationAction;
            heroAnim.current?.fadeOut(.10);fall.reset();fall.enabled=true;fall.setEffectiveWeight(1);fall.setLoop(THREE.LoopOnce,1);fall.clampWhenFinished=true;fall.fadeIn(.08).play();
            heroAnim.current=fall;heroAnim.fallen=true;heroAnim.attackUntil=Number.POSITIVE_INFINITY;
          }else if(whisperNow!=="defeat"){
            if(heroAnim.fallen){heroAnim.fallen=false;heroAnim.attackUntil=0;}
            if(now>=heroAnim.attackUntil)transition(moving?heroAnim.actions.walk:heroAnim.actions.idle);
          }
          heroAnim.mixer.update(dt);
          if(skin==='valkyrie'&&!heroAnim.fallen){
            const age=now-bendStartedAt;
            const bend=age<0||age>=1450?0:Math.min(THREE.MathUtils.smoothstep(age,0,230),1-THREE.MathUtils.smoothstep(age,990,1450));
            // Add the lean after the native idle/walk clip, so it also works
            // with the current GLB which has no dedicated bend animation.
            if(heroAnim.bendSpine)heroAnim.bendSpine.rotateX(bend*.73);
            if(heroAnim.bendChest)heroAnim.bendChest.rotateX(bend*.30);
            if(heroAnim.bendArm)heroAnim.bendArm.rotateX(-bend*.45);
          }
          if(skin==='valkyrie'&&gear.includes('shield')&&!heroAnim.fallen){
            const remaining=shieldRaiseUntilRef.current-now;
            const lift=remaining>0?Math.min(THREE.MathUtils.clamp((1250-remaining)/170,0,1),THREE.MathUtils.clamp(remaining/260,0,1)):0;
            const upper=heroAnim.shieldUpper,lower=heroAnim.shieldLower;
            // Idle's left arm points down. Move the elbow inward and in front
            // of the chest, and bring the forearm above the face.
            if(lift>0){
              if(upper){upper.rotateX(-lift*1.9);upper.rotateY(-lift*1.0);upper.rotateZ(lift*1.1);}
              if(lower)lower.rotateX(-lift*.3);
            }
            if(shieldGuardMount){
              // Keep the painted side pointing in its idle direction while
              // the mounting point follows the animated forearm. A single X
              // counter-rotation flipped the straps outward on this rig.
              hero.getWorldQuaternion(guardHeroWorld);
              if(lift<=0){
                shieldGuardMount.quaternion.copy(shieldIdleOrientation);
                shieldGuardMount.getWorldQuaternion(shieldFacing);
                shieldFacing.premultiply(guardHeroWorld.clone().invert());
              }else{
                shieldGuardMount.parent!.getWorldQuaternion(guardParentWorld);
                shieldGuardMount.quaternion.copy(guardParentWorld.invert()).multiply(guardHeroWorld).multiply(shieldFacing);
              }
            }
          }
        }else if(heroAnim.mode==="projected" || heroAnim.mode==="multiview"){
          // Very small vertical step + body sway: enough to read as walking
          // without deforming the projected artwork.
          heroAnim.model.position.y=heroAnim.baseY+(moving?Math.abs(Math.sin(walkT))*0.035:0);
          heroAnim.model.rotation.z=moving?Math.sin(walkT)*0.018:0;
          heroAnim.weapon.rotation.z=-0.12+(moving?Math.sin(walkT)*.035:0)+attackWeaponZ*2.25;
          heroAnim.model.rotation.x=attackBodyX;
        }else{
          const cycle=moving?Math.sin(walkT):0;
          const stride=cycle*.58;
          const armSwing=moving?Math.sin(walkT+Math.PI)*.46:0;
          heroAnim.legL.upper.rotation.x=stride;
          heroAnim.legR.upper.rotation.x=-stride;
          heroAnim.legL.knee.rotation.x=moving?Math.max(0,-cycle)*.68:0;
          heroAnim.legR.knee.rotation.x=moving?Math.max(0,cycle)*.68:0;
          heroAnim.armL.upper.rotation.x=armSwing+(heroAnim.attackSide==="left"?attackArmX:0);
          heroAnim.armR.upper.rotation.x=-armSwing+(heroAnim.attackSide==="right"?attackArmX:0);
          heroAnim.armL.elbow.rotation.x=(moving?-.12-Math.max(0,armSwing)*.30:0)+(heroAnim.attackSide==="left"?attackElbowX:0);
          heroAnim.armR.elbow.rotation.x=(moving?-.12-Math.max(0,-armSwing)*.30:0)+(heroAnim.attackSide==="right"?attackElbowX:0);
          // Expressive low-cost eye animation: a short natural blink and a
          // subtle side-to-side glance, with no texture or extra draw calls.
          const blinkT=(now+heroAnim.phase*613)%4200;
          const blink=blinkT<110?Math.max(.10,Math.abs(blinkT-55)/55):1;
          heroAnim.eyes.scale.y=blink;
          heroAnim.eyes.rotation.y=Math.sin(now*.00115+heroAnim.phase)*.10;
          heroAnim.weapon.rotation.z=-0.12+(moving?Math.sin(walkT)*.035:0)+attackWeaponZ*.72;
          hero.position.y+=moving?Math.abs(Math.sin(walkT*2))*.018:0;
        }
        if(doorVisit&&doorVisit.elapsed<1.25){
          const reach=THREE.MathUtils.smoothstep(doorVisit.elapsed,.50,.76)*
            (1-THREE.MathUtils.smoothstep(doorVisit.elapsed,1.03,1.25));
          const arm=heroAnim.mode==="rigged"?heroAnim.armL.upper:
            hero.getObjectByName(skin==="valkyrie"?"LeftArm":"RightArm");
          if(arm)arm.rotateX(-reach*.85);
        }
      }
      for(const [id,g] of locationGuardians){
        const show=whisperBattleStartedRef.current&&whisperNow!=="closed"&&whisperNow!=="question"&&id===activeGuardianIdRef.current;
        g.actor.visible=show;
        if(!show)continue;
        const spec=MIDGARD_GUARDIANS[id];
        const gz=spec.z+2.7;
        g.actor.position.set(spec.x,groundY(spec.x,gz),gz);
        g.actor.rotation.y=Math.atan2(q.x-spec.x,q.z-gz);
        if(!guardDefeatedRef.current&&g.current==='')playLocationGuardian(g,'Idle_Neutral');
        g.mixer.update(dt);
      }
      // Keep the camera direction stable when the thumb is released. The old camera
      // used dx/dz directly, so stopping movement instantly changed its target and
      // produced the visible screen jump/bounce on mobile.
      const cd=cameraDir.current;
      const battleView=whisperBattleStartedRef.current&&whisperNow!=="closed"&&whisperNow!=="question";
      const target=battleView
        ? new THREE.Vector3(battleSpec.x+9.7,groundY(battleSpec.x,battleSpec.z)+6.5,battleSpec.z+8.4)
        : insideHomeRef.current
          ? new THREE.Vector3(q.x-cd.x*1.0,hy+3.65,q.z-cd.z*1.0)
          : new THREE.Vector3(q.x-cd.x*2.0,hy+7.2,q.z-cd.z*2.0+11.8);
      camera.position.lerp(target,battleView ? .075 : insideHomeRef.current ? .09 : .055);
      for(const chest of displayChests){
        chest.rotation.y=Math.atan2(camera.position.x-chest.position.x,camera.position.z-chest.position.z);
      }
      if(battleView)camera.lookAt(battleSpec.x,groundY(battleSpec.x,battleSpec.z)+1.7,battleSpec.z+4.5);
      else camera.lookAt(q.x+(insideHomeRef.current?cd.x*.9:cd.x*1.9),hy+(insideHomeRef.current?1.25:1.2),q.z+(insideHomeRef.current?cd.z*.9:cd.z*1.9));
      let found="",foundId="";
      if(insideHomeRef.current){
        const restX=heroHomeX-2.15*HOME_SCALE,restZ=heroHomeZ-1.25*HOME_SCALE;
        if(Math.hypot(q.x-restX,q.z-restZ)<1.75*HOME_SCALE){found="Кровать героя";foundId="heroRest";}
        else if(q.z>heroHomeZ+1.72*HOME_SCALE){found="Дверь — выйти из дома";foundId="heroHomeExit";}
      } else {
        for(const d of destinations){if(Math.hypot(q.x-d.x,q.z-d.z)<d.r){found=d.label;foundId=d.id;break;}}
        let nearest=2.35;
        for(const node of gatherNodes){
          if(node.used)continue;
          const distance=Math.hypot(q.x-node.spot.x,q.z-node.spot.z);
          if(distance<nearest){nearest=distance;found=node.spot.kind==='wood'?'Молодая ель':node.spot.kind==='twigs'?'Лесной куст':'Лечебные травы';foundId='gather:'+node.spot.id;}
        }
      }
      setNear(!doorVisit&&found?`${found}|${foundId}`:"");
      for(const node of gatherNodes){
        if(!node.used||node.hidden)continue;
        const progress=THREE.MathUtils.clamp((now-node.fallAt)/470,0,1);
        if(progress<=0)continue;
        if(node.spot.kind==='wood')node.root.rotation.z=-1.35*progress;
        else node.root.scale.setScalar(Math.max(.001,1-progress));
        if(progress>=1){node.root.scale.setScalar(.00001);node.hidden=true;}
        updateGatherNode(node);
      }
      // Slow, irregular wind keeps the vegetation subtly alive.
      windFoliage.forEach((w,i)=>{
        const sway=Math.sin(now*.00125+w.phase)*w.amp + Math.sin(now*.00063+w.phase*1.7+i)*w.amp*.45;
        w.o.rotation.x=w.baseX+sway*.75; w.o.rotation.z=w.baseZ+sway;
      });
      windPlants.forEach((w,i)=>{
        const sway=Math.sin(now*.0017+w.phase)*w.amp + Math.sin(now*.00091+w.phase*1.9+i)*w.amp*.5;
        w.o.rotation.x=w.baseX+sway*.55; w.o.rotation.z=w.baseZ+sway;
      });
      for(let i=0;i<moteCount;i++){
        const j=i*3,phase=i*.73;
        motePos[j]+=Math.sin(now*.00022+phase)*.0018;
        motePos[j+1]+=Math.sin(now*.00047+phase*1.3)*.0010;
        motePos[j+2]+=Math.cos(now*.00019+phase)*.0015;
      }
      moteGeo.attributes.position.needsUpdate=true;
      moteMat.opacity=.19+.07*(.5+.5*Math.sin(now*.00055));

      ripples.forEach((r)=>{const pulse=.72+.28*Math.sin(now*.0016+r.phase);r.mesh.scale.set(pulse,pulse*.42,pulse);const m=r.mesh.material as THREE.MeshBasicMaterial;m.opacity=.055+.055*(.5+.5*Math.sin(now*.0016+r.phase));});
      if(mimirWaterTexture)mimirWaterTexture.offset.y=(now*.000006)%2;
      currentStreaks.forEach((r)=>{const drift=Math.sin(now*.00055*r.speed+r.phase)*.9;r.mesh.position.y=groundY(r.mesh.position.x,r.mesh.position.z)+.095+drift*.008;const m=r.mesh.material as THREE.MeshBasicMaterial;m.opacity=.045+.045*(.5+.5*Math.sin(now*.0011*r.speed+r.phase));});

      fires.forEach(f=>{f.light.intensity=2.0+Math.sin(now*.012+f.phase)*.5;f.flame.scale.y=.9+Math.sin(now*.009+f.phase)*.12;});
      animatedAnimals.forEach(animal=>{
        animal.mixer.update(dt);
        if(!animal.radius)return;
        const angle=now*.001*animal.speed+animal.phase;
        const x=animal.x+Math.cos(angle)*animal.radius;
        const z=animal.z+Math.sin(angle)*animal.radius*.65;
        animal.root.position.set(x,groundY(x,z)+animal.groundOffset,z);
        animal.root.rotation.y=Math.atan2(-Math.sin(angle),Math.cos(angle)*.65);
      });
      floatingBoats.forEach(({root,baseY},i)=>{
        root.position.y=baseY+Math.sin(now*.0011+i)*.045;
        root.rotation.z=Math.sin(now*.0008+i)*.014;
      });
      wildlife.forEach((w,i)=>{
        if(w.kind==='deer'){
          const dx=w.g.position.x-hero.position.x, dz=w.g.position.z-hero.position.z, dist=Math.hypot(dx,dz);
          if(dist<11){
            const legJoints=(w.g.userData?.legJoints||[]) as THREE.Object3D[];
            const gait=now*.014*(w.speed||1);
            for(let li=0;li<4;li++){
              const upper=legJoints[li*2], lower=legJoints[li*2+1];
              if(upper) upper.rotation.z=Math.sin(gait+li*Math.PI)*.10;
              if(lower) lower.rotation.z=Math.max(0,Math.sin(gait+li*Math.PI))*-.18;
            }
            const len=Math.max(.001,dist);
            const step=dist<5.5?.115:.075;
            const nx=w.g.position.x+(dx/len)*step, nz=w.g.position.z+(dz/len)*step;
            const bx=nx-30,bz=nz-53,br=Math.hypot(bx,bz);
            if(br<17){w.g.position.set(nx,groundY(nx,nz),nz);} else {
              const ang=Math.atan2(bz,bx); const rx=30+Math.cos(ang)*16, rz=53+Math.sin(ang)*10; w.g.position.set(rx,groundY(rx,rz),rz);
            }
            w.g.rotation.y=Math.atan2(dz,dx); w.g.position.y+=Math.sin(now*.008+i)*.025; return;
          }
        }
        const ang=now*.00105*w.speed+w.phase;const nx=w.x+Math.cos(ang)*w.r,nz=w.z+Math.sin(ang*.83)*w.r*.62;w.g.position.set(nx,groundY(nx,nz),nz);w.g.rotation.y=Math.atan2(Math.cos(ang*.83),-Math.sin(ang));
        if(w.kind==='deer'){
          const legJoints=(w.g.userData?.legJoints||[]) as THREE.Object3D[];
          const gait=now*.014*(w.speed||1);
          for(let li=0;li<4;li++){
            const upper=legJoints[li*2], lower=legJoints[li*2+1];
            if(upper) upper.rotation.z=Math.sin(gait+li*Math.PI)*.10;
            if(lower) lower.rotation.z=Math.max(0,Math.sin(gait+li*Math.PI))*-.18;
          }
          w.g.position.y+=Math.sin(now*.006+i)*.025;
          w.g.rotation.x=Math.sin(now*.004+w.phase)*.018;
        }
      });
      npcs.forEach((n,i)=>{const phase=n.userData.phase||0;const bx=n.userData.baseX,bz=n.userData.baseZ;const nx=bx+Math.sin(now*.00028+phase)*1.6,nz=bz+Math.cos(now*.00022+phase)*1.1;n.position.set(nx,groundY(nx,nz),nz);n.rotation.y=Math.sin(now*.0004+phase)*.5;});
      lightPools.forEach((m,i)=>{
        const p=m.material as THREE.MeshBasicMaterial;
        p.opacity = 0.48 + Math.sin(now*0.00055 + i*1.7)*0.07;
        m.rotation.z += Math.sin(now*0.00018+i)*0.00008;
      });
      renderer.render(scene,camera);raf=requestAnimationFrame(loop);
    };
    raf=requestAnimationFrame(loop);

    return()=>{window.clearTimeout(banditVictoryTimer);rememberPosition({x:state.current.x,z:state.current.z});glbTreesAlive=false;pendingForgeStone.dispose();pendingElderBrick.dispose();pendingHomeBrick.dispose();pendingHomeRoof.dispose();pendingStoneTexture.dispose();pendingBrickTexture.dispose();glbTreeInstances.forEach((tree)=>scene.remove(tree));glbTreeInstances.length=0;cancelAnimationFrame(raf);observer.disconnect();renderer.domElement.removeEventListener("pointerup",click);ripples.forEach(r=>{r.mesh.geometry.dispose();(r.mesh.material as THREE.Material).dispose();});currentStreaks.forEach(r=>{r.mesh.geometry.dispose();(r.mesh.material as THREE.Material).dispose();});groundTexture.dispose();woodTex.dispose();roofTex.dispose();mimirGoldTexture?.dispose();mimirWaterTexture?.dispose();deerFurTexture?.dispose();nornsStoneTexture?.dispose();nornsColumnTexture?.dispose();furTextures.forEach(texture=>texture.dispose());lightPoolTex.dispose();lightPoolMat.dispose();lightPools.forEach(m=>{m.geometry.dispose();(m.material as THREE.Material).dispose();});renderer.dispose();moteGeo.dispose();moteMat.dispose();scene.traverse((o:any)=>{if(o.isMesh||o.isLine||o.isPoints){o.geometry?.dispose?.();if(Array.isArray(o.material))o.material.forEach((m:any)=>m.dispose?.());else o.material?.dispose?.();}});renderer.domElement.remove();guardVisualRef.current=null;guardAttackActionRef.current=null;guardHitActionRef.current=null;guardDeathActionRef.current=null;guardIdleActionRef.current=null;homeActionRef.current=null;gateActionRef.current=null;attackActionRef.current=null;shieldActionRef.current=null;forgeActionRef.current=null;villageDoorActionRef.current=null;};
  },[h.id,skin,weapon,gear.join(','),gearLevels.armor,gearLevels.helmet,gearLevels.boots,shieldAsset,eventDone,rememberPosition,northBridgeRepaired]);

  const joyMove=(e:React.PointerEvent)=>{const a=joy.current,b=knob.current;if(!a||!b)return;const r=a.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,max=48;let x=e.clientX-cx,y=e.clientY-cy;const l=Math.hypot(x,y);if(l>max){x=x/l*max;y=y/l*max;}b.style.transform=`translate(${x}px,${y}px)`;state.current.dx=x/max;state.current.dz=y/max;};
  const stopJoy=()=>{if(knob.current)knob.current.style.transform="translate(0,0)";state.current.dx=0;state.current.dz=0;};
  // Keep the visible joystick compact, but give it a much larger invisible touch zone.
  // This makes it comfortable to start steering with a thumb slightly above the circle.
  const startJoyFromZone=(e:React.PointerEvent<HTMLDivElement>)=>{const a=joy.current;if(!a||whisperPhaseRef.current!=="closed")return;const target=e.target as HTMLElement;if(target.closest?.(".mid3d-action")||target.closest?.(".mid3d-strike")||target.closest?.(".mid3d-block")||target.closest?.(".mid3d-interact")||target.closest?.(".mid3d-door-prompt")||target.closest?.(".mid3d-rematch")||target.closest?.(".mid3d-map-panel")||target.closest?.(".whisper-cloud"))return;const r=a.getBoundingClientRect();const pad=26,up=78,down=26;const inside=e.clientX>=r.left-pad&&e.clientX<=r.right+pad&&e.clientY>=r.top-up&&e.clientY<=r.bottom+down;if(!inside)return;e.currentTarget.setPointerCapture(e.pointerId);joyMove(e);};
  const moveJoyFromZone=(e:React.PointerEvent<HTMLDivElement>)=>{if(e.currentTarget.hasPointerCapture(e.pointerId))joyMove(e);};
  const endJoyFromZone=(e:React.PointerEvent<HTMLDivElement>)=>{if(e.currentTarget.hasPointerCapture(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId);stopJoy();};
  const whisperPips=(energy:number)=>Array.from({length:COMBAT_ENERGY}).map((_,i)=>{const color=combatEnergyColor(energy);return <i key={i} className="whisper-pip" style={i<energy?{background:color,boxShadow:`0 0 8px ${color}`}:{}}/>;});
  const rewardIcon=whisperReward.includes("Кеназ")?"ᚲ":whisperReward.includes("Эликсир")?"🧪":whisperReward.includes("Капель")&&!whisperReward.includes("и «")?"🔥":"⚔️";

  return <div className="content mid3d-scene" ref={mount} style={{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"}} onPointerDown={startJoyFromZone} onPointerMove={moveJoyFromZone} onPointerUp={endJoyFromZone} onPointerCancel={endJoyFromZone} onContextMenu={e=>e.preventDefault()}>
    {whisperPhase==="closed"&&<div className="mid3d-ui mid3d-top"><div className="mid3d-pill"><b>МИДГАРД</b><span>Деревня • река • лес • святилища</span></div><div className="mid3d-pill"><b>ᛟ</b><span>Мир живёт вокруг тебя</span></div></div>}
    {banditOpponent&&whisperPhase==="closed"&&<div className="mid3d-ui" style={{top:"21%",left:"50%",transform:"translateX(-50%)",width:"min(88vw,290px)",padding:"8px 12px",borderRadius:12,background:"rgba(16,12,11,.87)",border:"1px solid rgba(227,67,50,.55)",color:"#fff",pointerEvents:"none",zIndex:12}}>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:3}}><span>Вика</span><span>{banditHeroHp}/{whisperStats.maxHp}</span></div>
      <div style={{height:5,background:"#382b29",borderRadius:6,overflow:"hidden",marginBottom:6}}><div style={{height:"100%",width:`${Math.max(0,banditHeroHp/whisperStats.maxHp*100)}%`,background:"#72c46e",transition:"width .25s"}}/></div>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:3}}><span>{banditOpponent.name}</span><span>{banditOpponent.hp}/{banditOpponent.maxHp}</span></div>
      <div style={{height:5,background:"#382b29",borderRadius:6,overflow:"hidden"}}><div style={{height:"100%",width:`${Math.max(0,banditOpponent.hp/banditOpponent.maxHp*100)}%`,background:"#e45244",transition:"width .25s"}}/></div>
    </div>}
    {banditVictory&&whisperPhase==="closed"&&<div className="mid3d-ui whisper-cloud" onPointerDown={e=>e.stopPropagation()}>
      <div className="whisper-reward-icon">⚔</div><div className="whisper-reward-rarity">{banditVictory.name} повержен</div>
      <div className="whisper-reward-name">+{banditVictory.sparks} Капель силы</div><p>Добыча: {banditVictory.reward}. Награда уже добавлена к твоим вещам.</p>
      <button className="whisper-close" onClick={()=>{banditVictoryRef.current=null;setBanditVictory(null);setBanditOpponent(null);}}>Продолжить путь</button>
    </div>}
    {banditHit>0&&whisperPhase==="closed"&&<i key={banditHit} className="mid3d-ui whisper-battle-fx guard"/>}
    {!heroReady&&<div className="mid3d-ui mid3d-hero-load"><b>{heroLoadFailed?"ᚾ":"ᛉ"}</b><span>{heroLoadFailed?"Герой не загрузился":"ПРОБУЖДЕНИЕ ГЕРОЯ"}</span></div>}
    {mapOpen&&<div className="mid3d-map-shade" onPointerDown={e=>e.stopPropagation()}>
      <div className="mid3d-map-panel">
        <div className="mid3d-map-title">ᚠ Карта Мидгарда</div>
        <div className="mid3d-map-sub">Руна Феху указывает известные дороги и следующую цель</div>
        <div className="mid3d-map-canvas">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <path d="M18 100 C15 82 25 72 20 58 C16 43 24 31 21 0" fill="none" stroke="#73a9b1" strokeWidth="9" opacity=".72"/>
            <path d="M50 92 C49 73 47 61 44 53 C42 43 48 35 50 22" fill="none" stroke="#8b6440" strokeWidth="2.2" strokeDasharray="3 2" opacity=".75"/>
            <path d="M18 77 C30 69 37 59 44 53 M44 53 C33 44 25 35 20 29 M44 53 C62 48 78 40 92 32" fill="none" stroke="#8b6440" strokeWidth="1.5" strokeDasharray="2.5 2" opacity=".65"/>
            <circle cx="49" cy="53" r="13" fill="none" stroke="#a58a56" strokeWidth=".8" opacity=".7"/>
          </svg>
          <span className="map-landmark" style={{left:"49%",top:"53%"}}>⌂<small>Кузница</small></span>
          <span className="map-landmark" style={{left:"57%",top:"35%"}}>🐄<small>Сарай</small></span>
          <span className="map-landmark" style={{left:"39%",top:"30%"}}>🐎<small>Навес</small></span>
          <span className="map-landmark" style={{left:"62%",top:"20%"}}>🐎<small>Луг</small></span>
          <span className="map-landmark" style={{left:"74%",top:"30%"}}>🦊<small>Лиса</small></span>
          <span className="map-landmark" style={{left:"76%",top:"59%"}}>🐺<small>Волк</small></span>
          <span className="map-landmark" style={{left:"18%",top:"68%"}}>⛵<small>Лодка</small></span>
          <span className="map-landmark" style={{left:"51%",top:"50%"}}>◉<small>Мимир</small></span>
          <span className="map-landmark" style={{left:"18%",top:"77%"}}>═<small>Речной мост</small></span>
          <span className="map-landmark" style={{left:"16%",top:"21%",color:northBridgeRepaired?"#456249":"#a33b1f"}}>═<small>{northBridgeRepaired?"Северный мост":"Мост закрыт"}</small></span>
          <span className="map-landmark" style={{left:"20%",top:"29%"}}>ᛟ<small>Норны</small></span>
          <span className="map-landmark" style={{left:"49%",top:"25%"}}>⌗<small>Ворота</small></span>
          <span className="map-landmark" style={{left:"93%",top:"32%"}}>⌂<small>Дом</small></span>
          <span className="map-landmark" style={{left:"47%",top:"8%"}}>♠<small>Роща</small></span>
          <span className="map-landmark" style={{left:"25%",top:"24%"}}>⚔<small>Разбойник</small></span>
          <span className="map-landmark goal" style={{left:"49%",top:"53%"}}>ᚠ<small>Цель</small></span>
          <span className="map-landmark hero" style={{left:`${((mapHero.x+88)/176)*100}%`,top:`${100-((mapHero.z+89)/178)*100}%`}}>◆<small>Ты здесь</small></span>
        </div>
        <div className="mid3d-map-goal"><b>{goldChestOpened?'Золотой сундук открыт':northBridgeRepaired?'Северный мост открыт':northBridgeReady?'Мост готов к ремонту':'Путь к золотому сундуку'}</b><br/>{goldChestOpened?'Награды получены. Следующий известный сундук ждёт в Лесу Ходдмимира.':northBridgeRepaired?'Перейди мост и открой золотой сундук напротив него.':northBridgeReady?'Подойди к Северному мосту и нажми «Отремонтировать мост».':'Собери 3 древесины и 3 ветки, отдай их плотнику Бьёрну. После этого почини Северный мост.'}</div>
        <button className="mid3d-map-close" onClick={()=>{setMapOpen(false);setCreditsOpen(true);}}>Авторы и лицензии</button>
        <button className="mid3d-map-close" onClick={()=>setMapOpen(false)}>Закрыть карту и продолжить путь</button>
      </div>
    </div>}
    {inventoryOpen&&<div className="mid3d-map-shade" onPointerDown={e=>e.stopPropagation()}><div className="mid3d-map-panel" style={{background:"linear-gradient(145deg,#1b271c,#0e1712)",color:"#fff2d8",borderColor:"#987346"}}>
      <div className="mid3d-map-title" style={{color:"#f5d28a"}}>🎒 Запас Вики</div>
      <div className="mid3d-map-sub" style={{color:"#c3b7a2"}}>Здоровье: {banditHeroHp}/{whisperStats.maxHp} · Ледяная защита: {frostGuard} уд.</div>
      <div className="inventory-section"><h3>🌿 Материалы</h3><div className="inventory-list"><div className="inventory-item"><span className="inventory-symbol">🪵</span><span className="inventory-detail"><b>Древесина · {stock.wood}</b><small>Плотнику Бьёрну нужно 3</small></span></div><div className="inventory-item"><span className="inventory-symbol">🌱</span><span className="inventory-detail"><b>Ветки · {stock.twigs}</b><small>Плотнику Бьёрну нужно 3</small></span></div><div className="inventory-item"><span className="inventory-symbol">🌿</span><span className="inventory-detail"><b>Травы · {stock.herbs}</b><small>Травнице Сигрид нужно 4</small></span></div></div></div>
      <InventorySection kind="potions" potions={potions} runes={runes} equippedRune={equippedRune} hp={banditHeroHp} maxHp={whisperStats.maxHp} frostGuard={frostGuard} onUsePotion={useMidgardPotion} onEquipRune={onEquipRune}/>
      <InventorySection kind="runes" potions={potions} runes={runes} equippedRune={equippedRune} hp={banditHeroHp} maxHp={whisperStats.maxHp} frostGuard={frostGuard} onUsePotion={useMidgardPotion} onEquipRune={onEquipRune}/>
      <button className="mid3d-map-close" onClick={()=>setInventoryOpen(false)}>Вернуться в игру</button>
    </div></div>}
    {creditsOpen&&<div className="mid3d-map-shade" onPointerDown={e=>e.stopPropagation()}><div className="mid3d-map-panel">
      <div className="mid3d-map-title">Авторы и лицензии</div>
      <p><b>Вика (Валькирия) — главный персонаж</b> — модель персонажа создана <a href="https://t.me/Devolik13" target="_blank" rel="noopener noreferrer">@Devolik13</a> (Telegram).</p>
      <p>Отдельная благодарность автору за создание Вики и вклад в развитие Yggdrasil Runes.</p>
      <p><b>Ultimate Modular Men Pack — защитники Мидгарда</b> — модели и исходные анимации созданы <a href="https://quaternius.com/" target="_blank" rel="noopener noreferrer">Quaternius</a>. <a href="https://quaternius.com/packs/ultimatemodularcharacters.html" target="_blank" rel="noopener noreferrer">Источник коллекции</a>. Лицензия: <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">CC0</a>.</p>
      <p>Благодарность автору: спасибо Quaternius за качественную бесплатную коллекцию персонажей и анимаций, которую можно использовать и изменять в игровых проектах.</p>
      <p>Изменения для Yggdrasil Runes: один персонаж коллекции адаптирован как базовая модель защитников Мидгарда; масштаб увеличен и настроен отдельно для каждого стража; изменены цвета одежды; добавлены короткие цветные накидки и металлические застёжки; одна базовая модель используется для девяти разных стражей. Для боя настроены существующие анимации Idle_Neutral, Idle_Sword, Sword_Slash, HitRecieve и Death: защитник спокойно стоит до боя, атакует мечом, реагирует на удар, после атаки или получения урона возвращается в стойку с мечом и падает после поражения.</p>
      <p><b>Neutral Bandit</b> — <a href="https://sketchfab.com/strong.lazzy" target="_blank" rel="noopener noreferrer">ZakRenat</a>. <a href="https://sketchfab.com/3d-models/neutral-bandit-524cad2cfdc7422f93541cb00008b0d3" target="_blank" rel="noopener noreferrer">Оригинальная модель</a>. Лицензия: <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>.</p>
      <p>Изменения для Yggdrasil Runes: сжаты текстуры, добавлены пробные движения бега, удара, получения удара и падения; исходная анимация сохранена.</p>
      <p><b>Fortnite Chest</b> — <a href="https://skfb.ly/onyMB" target="_blank" rel="noopener noreferrer">Onur</a>. <a href="https://skfb.ly/onyMB" target="_blank" rel="noopener noreferrer">Оригинальная модель</a>. Лицензия: <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>.</p>
      <p>Изменения для Yggdrasil Runes: изменён масштаб модели и выполнена адаптация для размещения в игровой сцене.</p>
      <p><b>Treasure chest</b> — <a href="https://skfb.ly/oqoXL" target="_blank" rel="noopener noreferrer">UE4 CG model</a>. <a href="https://skfb.ly/oqoXL" target="_blank" rel="noopener noreferrer">Оригинальная модель</a>. Лицензия: <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>.</p>
      <p>Изменения для Yggdrasil Runes: изменён масштаб модели, цвет древесины изменён на красный; остальные цвета модели сохранены. Выполнена адаптация для размещения у колодца Норн в игровой сцене.</p>
      <p><b>Angelic Alliance Chest</b> — <a href="https://skfb.ly/6WRTY" target="_blank" rel="noopener noreferrer">Arcnay</a>. <a href="https://skfb.ly/6WRTY" target="_blank" rel="noopener noreferrer">Оригинальная модель</a>. Лицензия: <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>.</p>
      <p>Изменения для Yggdrasil Runes: размер модели уменьшен примерно до 5 метров и выполнена адаптация для размещения в Лесу Ходдмимира.</p>
      <button className="mid3d-map-close" onClick={()=>setCreditsOpen(false)}>Вернуться в игру</button>
    </div></div>}
    {forestEventOpen&&!eventDone&&<div className="mid3d-ui mid3d-interact" style={{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31}}>
      <b>ᛟ Колодец Трёх Норн</b>
      <span>В глубине колодца горит тёплое сияние. Серебряная, золотая и алая нити сходятся над водой, связывая прошлое, настоящее и будущее.</span>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setForestEventOpen(false);on("forestEvent:past")}}>ᛁ Прошлое — узнать, что здесь произошло</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setForestEventOpen(false);on("forestEvent:present")}}>ᛏ Настоящее — принять знак таким, какой он есть</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setForestEventOpen(false);on("forestEvent:future")}}>ᛉ Будущее — последовать за нитью, которую ещё не видно</button>
    </div>}
    {forestEventOpen&&eventDone&&<div className="mid3d-ui mid3d-interact" style={{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30}}>
      <b>Колодец Трёх Норн</b><span>Ты уже выбрал свою нить. Вода и три нити помнят этот выбор.</span>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>setForestEventOpen(false)}>Продолжить путь</button>
    </div>}
    {ritualOpen&&<div className="mid3d-ui mid3d-interact" style={{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30}}>
      <b>🜂 Круг Силы</b>
      <span>Древние камни отвечают на твоё присутствие. Выбери один путь.</span>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setRitualOpen(false);on("ritual:mimir")}}>🧠 Око Мимира — открыть скрытое</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setRitualOpen(false);on("ritual:norn")}}>🧵 Нить Норн — избежать одной судьбы</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setRitualOpen(false);on("ritual:ash")}}>🌿 Дыхание Ясеня — +25 здоровья в следующем бою</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setRitualOpen(false);on("ritual:fire")}}>🔥 Огненный обет — +5 к следующему удару</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setRitualOpen(false);on("ritual:ice")}}>❄️ Ледяной обет — ослабить первый удар врага</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setRitualOpen(false);on("ritual:ygg")}}>🌳 Зов Иггдрасиля — пережить смертельный удар</button>
    </div>}
    {whisperBattleStartedRef.current&&whisperPhase!=="closed"&&whisperPhase!=="question"&&<div className="mid3d-ui whisper-bars">
      <div className="whisper-unit"><b>{h.race}</b><small>❤ {whisperHeroHp}/{whisperStats.maxHp}</small></div>
      <div className="whisper-unit"><b>{activeGuardian.name}</b><small>❤ {whisperGuardHp}/{activeGuardian.hp}</small></div>
    </div>}
    {whisperFx&&whisperPhase==="fight"&&<i key={whisperFx.key} className={"mid3d-ui whisper-battle-fx "+whisperFx.kind}/>}
    {whisperPhase==="question"&&<div className="mid3d-ui whisper-cloud" onPointerDown={e=>e.stopPropagation()}>
      <h3>{activeGuardian.location}</h3><p>{activeGuardian.intro}</p>
      <div className="whisper-question">{activeGuardian.question.q}</div>
      {activeGuardian.question.a.map((answer,i)=><button key={answer} className={"whisper-answer"+(whisperAnswer!==null?(i===activeGuardian.question.c?" good":i===whisperAnswer?" bad":" off"):"")} onClick={()=>answerWhisperInWorld(i)}>{answer}</button>)}
    </div>}
    {whisperPhase==="fight"&&<div className="mid3d-ui whisper-combat-hud" onPointerDown={e=>e.stopPropagation()}>
      <div className="whisper-combat-log" role="status" aria-live="polite">{whisperLog}</div>
      <div className="whisper-combat-energy">
        <span className="whisper-pips" aria-label={`Сила героя: ${whisperStats.power} из 5`} title={`Сила героя ${whisperStats.power}/5`}>{whisperPips(whisperStats.power)}</span>
        <span className="whisper-pips" aria-label={`Сила ${activeGuardian.name}: ${activeGuardian.power} из 5`} title={`Сила ${activeGuardian.name} ${activeGuardian.power}/5`}>{whisperPips(activeGuardian.power)}</span>
      </div>
      <div className="whisper-combat-actions">
        <button className="whisper-combat-action" disabled={whisperBusy} onClick={()=>whisperFightAction("hit")}><span className="whisper-combat-icon" aria-hidden="true">🪓</span><b>Удар оружием</b><small>сила оружия</small></button>
        <button className="whisper-combat-action shield" disabled={whisperBusy} onClick={()=>whisperFightAction("shield")}><span className="whisper-combat-icon" aria-hidden="true">🛡️</span><b>Поднять щит</b><small>защита</small></button>
        <button className="whisper-combat-action rune" disabled={whisperBusy} onClick={()=>whisperFightAction("rune")}><span className="whisper-combat-icon" aria-hidden="true">{RUNE_CATALOG.find(r=>r.id===equippedRune)?.symbol||"ᚲ"}</span><b>Руна {RUNE_CATALOG.find(r=>r.id===equippedRune)?.name||"Кеназ"}</b><small>рунический удар</small></button>
        <button className="whisper-combat-action rest" disabled={whisperBusy||potions.length===0} onClick={()=>setBattlePotionOpen(true)}><span className="whisper-combat-icon" aria-hidden="true">🧪</span><b>Эликсир</b><small>{potions.length?potions.length+" в запасе":"нет"}</small></button>
      </div>
    </div>}
    {battlePotionOpen&&whisperPhase==="fight"&&<div className="mid3d-ui whisper-cloud" onPointerDown={e=>e.stopPropagation()}>
      <h3>🧪 Боевой пояс</h3><p>Выбери эликсир. Открытие пояса не тратит ход, но применение эликсира считается действием — после него страж атакует.</p>
      <div className="inventory-list">{POTION_CATALOG.map(item=>{
        const count=potions.filter(id=>id===item.id).length;
        const unusable=item.id==='frostDraught'?frostGuardRef.current>=2:item.id==='hoddmimirElixir'?whisperHeroHp>=whisperStats.maxHp&&frostGuardRef.current>=2:whisperHeroHp>=whisperStats.maxHp;
        return <div key={item.id} className={'inventory-item'+(count?'':' empty')}><span className="inventory-symbol">{item.symbol}</span><span className="inventory-detail"><b>{item.name} · {count} шт.</b><small>{item.effect}</small></span><button disabled={!count||unusable} onClick={()=>useWhisperBattlePotion(item.id)}>{unusable&&count?'Не требуется':'Использовать'}</button></div>;
      })}</div>
      <button className="whisper-close" onClick={()=>setBattlePotionOpen(false)}>Вернуться к бою</button>
    </div>}
    {whisperPhase==="reward"&&<div className="mid3d-ui whisper-cloud" onPointerDown={e=>e.stopPropagation()}>
      <div className="whisper-reward-icon">{whisperReplay?activeGuardian.sym:rewardIcon==="🔥"?<SparkDrop/>:rewardIcon}</div><div className="whisper-reward-rarity">{whisperReplay?"Повторное испытание":"Награда Мидгарда"}</div>
      <div className="whisper-reward-name">{whisperReward}</div><p>{whisperLog}</p>
      <button className="whisper-close" onClick={closeWhisperEncounter}>{whisperReplay?"Завершить тренировку":"Забрать награду и продолжить путь"}</button>
    </div>}
    {whisperPhase==="defeat"&&<div className="mid3d-ui whisper-cloud" onPointerDown={e=>e.stopPropagation()}>
      <div className="whisper-reward-icon">ᚾ</div><div className="whisper-reward-name">Испытание не пройдено</div><p>{whisperLog}</p>
      <button className="whisper-close" onClick={whisperReplay?()=>beginGuardianRematch(activeGuardian.id):()=>beginLocationEncounter(activeGuardian.id)}>Попробовать ещё раз</button>
    </div>}
    {near&&!ritualOpen&&!forestEventOpen&&whisperPhase==="closed"&&(()=>{
      const [label,id]=near.split("|");
      if(id.startsWith('gather:')){
        const kind=GATHER_SPOTS.find(spot=>spot.id===id.slice(7))?.kind;
        return <div className="mid3d-ui mid3d-interact"><b>{label}</b><span>{kind==='wood'?'Вика возьмёт лёгкий рабочий топор. Древесина нужна плотнику.':kind==='herbs'?'Вика нагнётся и соберёт травы для Сигрид.':'Срежь ветки для плотника Бьёрна.'}</span><button onPointerDown={e=>e.stopPropagation()} onClick={()=>gatherActionRef.current?.(id.slice(7))}>{kind==='herbs'?'Нагнуться и собрать':kind==='wood'?'Срубить':'Срезать ветки'}</button></div>;
      }
      if(id==="forge")return <div className="mid3d-ui mid3d-door-prompt"><b>Дверь кузницы</b><button onPointerDown={e=>e.stopPropagation()} onClick={()=>forgeActionRef.current?.()}>Открыть ручку</button></div>;
      if(id==="northBridge")return <div className="mid3d-ui mid3d-interact"><b>{label}</b><span>{northBridgeRepaired?'Проход открыт. Золотой сундук находится на другом берегу.':northBridgeReady?'Материалы подготовлены. Мост можно починить здесь.':'Сначала собери древесину и ветки для Бьёрна.'}</span><button onPointerDown={e=>e.stopPropagation()} onClick={()=>on(id,{x:state.current.x,z:state.current.z})}>{northBridgeRepaired?'Осмотреть мост':northBridgeReady?'Отремонтировать мост':'Осмотреть мост'}</button></div>;
      const villageDoor=["warriorHouse","fisher2","carpenter","hunter2","family","house","fisher","hunter","herbalist","craftsman","oldfarm"].includes(id);
      if(villageDoor)return <div className="mid3d-ui mid3d-door-prompt"><b>{label}</b><button onPointerDown={e=>e.stopPropagation()} onClick={()=>id==="oldfarm"?on(id,{x:state.current.x,z:state.current.z}):villageDoorActionRef.current?.(id)}>{outsideHouse===id?"Поговорить":"Открыть ручку"}</button></div>;
      if(id==="heroHome")return <div className="mid3d-ui mid3d-door-prompt"><b>Дом героя</b><button onPointerDown={e=>e.stopPropagation()} onClick={()=>homeActionRef.current?.(true)}>Открыть ручку</button></div>;
      if(id==="heroRest")return <div className="mid3d-ui mid3d-interact"><b>Кровать героя</b><span>Безопасный отдых после похода полностью восстанавливает здоровье.</span><button onPointerDown={e=>e.stopPropagation()} onClick={()=>{
        const max=whisperStats.maxHp;
        if(banditHpRef.current>=max){setDoorNotice("Вика уже полностью отдохнула.");return;}
        banditHpRef.current=max;setBanditHeroHp(max);onFieldHpChange(max);setDoorNotice("Вика отдохнула дома. Здоровье полностью восстановлено.");
      }}>Отдохнуть</button></div>;
      const guardianSpec=MIDGARD_GUARDIANS[id];
      const guardianDone=guardianResolved.includes(id);
      if(guardianSpec){
        const idx=MIDGARD_GUARDIAN_ORDER.indexOf(id as any);
        if(!guardianDone){
          const missing=MIDGARD_GUARDIAN_ORDER.slice(0,Math.max(0,idx)).find(prev=>!guardianResolved.includes(prev));
          if(missing){
            const prev=MIDGARD_GUARDIANS[missing];
            return <div className="mid3d-ui mid3d-interact"><b>{label}</b><span>Испытание пока закрыто. Сначала пройди: {prev.location}.</span><button disabled>Путь ещё не открыт</button></div>;
          }
          return <div className="mid3d-ui mid3d-interact"><b>{label}</b><span>Этап {idx+1} из {MIDGARD_GUARDIAN_ORDER.length}. {guardianSpec.intro}</span><button onPointerDown={e=>e.stopPropagation()} onClick={()=>beginLocationEncounter(id)}>Ответить стражу</button></div>;
        }
        const repeatDrops=2+guardianSpec.power;
        return <div className="mid3d-ui mid3d-interact"><b>{label}</b><span>Испытание пройдено. Повторный бой даёт {repeatDrops} Капель силы; редкий трофей повторно не выпадает.</span><button onPointerDown={e=>e.stopPropagation()} onClick={()=>beginGuardianRematch(id)}>⚔ Сразиться ещё раз</button></div>;
      }
      if(id==="deepGrove")return <div className="mid3d-ui mid3d-interact"><b>Глубокая роща</b><span>В тени растут редкие лечебные травы. Роща восстанавливает запас раз в 15 минут.</span><button onPointerDown={e=>e.stopPropagation()} onClick={()=>on(id,{x:state.current.x,z:state.current.z})}>Собрать редкие травы</button></div>;
      if(id==="hunterCamp")return <div className="mid3d-ui mid3d-interact"><b>Забытая стоянка</b><span>В старых ящиках остаются пригодные ветки и древесина. Запасы обновляются раз в 15 минут.</span><button onPointerDown={e=>e.stopPropagation()} onClick={()=>on(id,{x:state.current.x,z:state.current.z})}>Поискать припасы</button></div>;
      if(id==="port")return <div className="mid3d-ui mid3d-interact"><b>Речной мост</b><span>У воды можно сделать короткую передышку и восстановить до 20 здоровья. Повторно — через 10 минут.</span><button onPointerDown={e=>e.stopPropagation()} onClick={()=>on(id,{x:state.current.x,z:state.current.z})}>Отдохнуть у реки</button></div>;
      const home=id==="heroHome"||id==="heroHomeExit";
      const villageGate=id==="gate"||id==="gateRear";
      const selectedGateOpen=id==="gateRear"?rearGateOpen:villageGateOpen;
      const whisper=id==="whisperStone";
      const angelicLocked=id==='angelicChest'&&!guardianResolved.includes('hoddmimir');
      return <div className="mid3d-ui mid3d-interact"><b>{label}</b><span>{id==='forestCache'&&!northBridgeRepaired?'Защитное кольцо спадёт после ремонта Северного моста':id==='nornsChest'&&!eventDone?'Сначала выбери нить у колодца Норн':angelicLocked?'Серебряная печать откроется после последнего испытания Мидгарда.':id==='angelicChest'?'Серебряный свет пробивается сквозь резьбу сундука':villageGate?(selectedGateOpen?"Створки открыты, тяжёлый засов снят":"Ворота заперты большим деревянным засовом"):home?(id==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода"):whisper?(whisperResolved?"Камень помнит завершённое испытание":"Из янтарного света доносится древний вопрос"):"Ты достаточно близко"}</span><button onPointerDown={e=>e.stopPropagation()} onClick={()=>{if(id==="powerCircle")setRitualOpen(true);else if(id==="threeThreads")setForestEventOpen(true);else if(id==="heroHome")homeActionRef.current?.(true);else if(id==="heroHomeExit")homeActionRef.current?.(false);else if(id==="gate"||id==="gateRear")gateActionRef.current?.(id);else if(id==="whisperStone"&&!whisperResolved)beginWhisperEncounter();else on(id,{x:state.current.x,z:state.current.z});}}>{id==='forestCache'&&!northBridgeRepaired?'Осмотреть печать':id==='nornsChest'&&!eventDone?'Осмотреть сундук':angelicLocked?'Осмотреть печать':id==='forestCache'||id==='nornsChest'||id==='angelicChest'?'Открыть сундук':villageGate?(selectedGateOpen?"Закрыть ворота и поставить засов":"Снять засов и открыть ворота"):home?(id==="heroHome"?"Открыть дверь и войти":"Выйти наружу"):whisper?(whisperResolved?"Прикоснуться к камню":"Слушать шёпот"):"Взаимодействовать"}</button></div>;
    })()}
    {whisperPhase==="closed"&&<><div className="mid3d-ui mid3d-joy" ref={joy}><div className="mid3d-knob" ref={knob}/></div>
    <button className="mid3d-ui mid3d-block" disabled={!gear.includes('shield')} aria-label="Блок щитом" title="Блок щитом" onPointerDown={e=>e.stopPropagation()} onClick={()=>{shieldActionRef.current?.();if('vibrate' in navigator)navigator.vibrate(15);}}>🛡</button>
    <button className="mid3d-ui mid3d-strike" aria-label="Удар оружием" title="Удар оружием" onPointerDown={e=>e.stopPropagation()} onClick={()=>{attackActionRef.current?.();if("vibrate" in navigator)navigator.vibrate(12);}}>⚔</button>
    <button className="mid3d-ui mid3d-action" style={{top:125,background:"rgba(36,62,41,.94)",color:"#fff1d1"}} aria-label="Запас рун и эликсиров" title="Запас" onPointerDown={e=>e.stopPropagation()} onClick={()=>{stopJoy();setMapOpen(false);setInventoryOpen(true);}}>🎒</button>
    <button className="mid3d-ui mid3d-action" aria-label="Карта Мидгарда" title="Карта Мидгарда" onPointerDown={e=>e.stopPropagation()} onClick={()=>{stopJoy();setMapHero({x:state.current.x,z:state.current.z});setMapOpen(true);}}>ᚠ</button></>}
    {doorNotice&&<div className="mid3d-ui mid3d-hint" role="status" onClick={()=>setDoorNotice("")}>{doorNotice}</div>}
    {whisperPhase==="closed"&&!doorNotice&&<div className="mid3d-ui mid3d-hint">{insideHome?(moving?"Ты внутри дома":"Дом героя • отдых • сундук • выход"):moving?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"}</div>}
  </div>;
}

function SparkDrop(){return <img className="spark-drop" src={`${BASE}img/BackgroundEraser_20260930_010245371.png`} alt="" aria-label="Капля силы"/>;}
function InventorySection({kind,potions,runes,equippedRune,hp,maxHp,frostGuard,onUsePotion,onEquipRune}:{kind:'potions'|'runes';potions:string[];runes:string[];equippedRune:string;hp:number;maxHp:number;frostGuard:number;onUsePotion:(id:string)=>void;onEquipRune:(id:string)=>void}){
  return <section className="inventory-section"><h3>{kind==='potions'?'🧪 Эликсиры':'ᛉ Руны'}</h3><div className="inventory-list">
    {kind==='potions'?POTION_CATALOG.map(item=>{
      const count=potions.filter(id=>id===item.id).length;
      const unusable=item.id==='frostDraught'
        ? frostGuard>=2
        : item.id==='hoddmimirElixir'
          ? hp>=maxHp&&frostGuard>=2
          : hp>=maxHp;
      return <div key={item.id} className={'inventory-item'+(count?'':' empty')}><span className="inventory-symbol">{item.symbol}</span><span className="inventory-detail"><b>{item.name} · {count} шт.</b><small>{item.effect}</small></span><button disabled={!count||unusable} onClick={()=>onUsePotion(item.id)}>{unusable&&count?'Не требуется':'Применить'}</button></div>;
    }):RUNE_CATALOG.map(item=>{
      const owned=runes.includes(item.id),active=equippedRune===item.id;
      return <div key={item.id} className={'inventory-item'+(owned?'':' empty')}><span className="inventory-symbol">{item.symbol}</span><span className="inventory-detail"><b>{item.name} · {owned?'найдена':'не найдена'}</b><small>{item.effect}</small></span><button className={active?'active':''} disabled={!owned||active} onClick={()=>onEquipRune(item.id)}>{active?'Активна':'Выбрать'}</button></div>;
    })}
  </div></section>;
}

const FORGE_WEAPON_MODELS = [
  ['Sword.glb','Меч','default'],['Sword_2.glb','Меч II','sword2'],['Sword_Big.glb','Большой меч','swordBig'],['Sword_Golden.glb','Золотой меч','swordGolden'],
  ['Axe.glb','Топор','axe'],['Axe_Small.glb','Малый топор','axeSmall'],['Axe_Double.glb','Двойной топор','axeDouble'],['Spear.glb','Копьё','spear'],
  ['Hammer_Small.glb','Малый молот','mace'],['Hammer_Double.glb','Двойной молот','hammerDouble'],['Dagger.glb','Боевой кинжал','knife'],['Dagger_2.glb','Кинжал II','dagger2'],
  ['Claymore.glb','Клеймор','claymore'],['Scythe.glb','Боевая коса','scythe'],['Shield_Round.glb','Круглый щит','shield'],['Shield_Round_2.glb','Серебряный щит',''],
  ['Shield_Heater.glb','Щит',''],['Shield_Heater_2.glb','Щит II',''],['Shield_Celtic_Golden.glb','Золотой щит','']
] as const;

type CraftMaterial=GatherKind;
type CraftRecipe={weapon:Exclude<HeroWeapon,"default"|"swordGolden">;material:CraftMaterial;amount:number;cost:number;result:Exclude<HeroWeapon,"default"|"swordGolden">};
const CRAFT_RECIPES:CraftRecipe[]=[
  {weapon:"knife",material:"twigs",amount:2,cost:12,result:"dagger2"},
  {weapon:"axe",material:"wood",amount:3,cost:18,result:"axeDouble"},
  {weapon:"axeSmall",material:"wood",amount:2,cost:14,result:"axeDouble"},
  {weapon:"mace",material:"wood",amount:3,cost:18,result:"hammerDouble"},
  {weapon:"sword2",material:"wood",amount:3,cost:22,result:"swordBig"},
  {weapon:"spear",material:"twigs",amount:3,cost:20,result:"scythe"}
];
const craftMaterialName=(id:CraftMaterial)=>id==="wood"?"Древесина":id==="twigs"?"Ветки":"Лечебные травы";
const craftMaterialIcon=(id:CraftMaterial)=>id==="wood"?"🪵":id==="twigs"?"🌿":"🌱";
const RUNE_STEEL_YIELD:Partial<Record<HeroWeapon,number>>={
  knife:1,dagger2:1,sword2:1,axeSmall:1,mace:1,
  axe:2,spear:2,swordBig:2,axeDouble:2,hammerDouble:2,
  claymore:3,scythe:3
};
type SteelCraftRecipe={id:string;name:string;steel:number;material:CraftMaterial;amount:number;cost:number;requires:number;resultWeapon?:HeroWeapon;resultShield?:string};
const STEEL_CRAFT_RECIPES:SteelCraftRecipe[]=[
  {id:"steel-claymore",name:"Клеймор",steel:3,material:"wood",amount:5,cost:40,requires:4,resultWeapon:"claymore"},
  {id:"steel-scythe",name:"Боевая коса",steel:3,material:"twigs",amount:4,cost:35,requires:4,resultWeapon:"scythe"},
  {id:"steel-silver-shield",name:"Серебряный щит",steel:2,material:"wood",amount:3,cost:30,requires:3,resultShield:"Shield_Round_2.glb"},
  {id:"steel-shield-2",name:"Щит II",steel:3,material:"wood",amount:4,cost:40,requires:6,resultShield:"Shield_Heater_2.glb"},
  {id:"steel-golden-shield",name:"Золотой щит",steel:4,material:"wood",amount:5,cost:55,requires:8,resultShield:"Shield_Celtic_Golden.glb"}
];

function ForgeWeaponWall({owned,ownedShields,selected,selectedShield,onChoose}:{owned:string[];ownedShields:string[];selected:HeroWeapon;selectedShield:string|null;onChoose:(asset:string,name:string,id:string)=>void}) {
  const canvas=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const target=canvas.current;
    if(!target)return;
    const width=target.clientWidth||320,height=target.clientHeight||416;
    const renderer=new THREE.WebGLRenderer({canvas:target,alpha:true,antialias:true,powerPreference:'low-power'});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
    renderer.setSize(width,height,false);
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    const scene=new THREE.Scene();
    scene.add(new THREE.HemisphereLight(0xffe8c5,0x6c584c,2.8));
    const lamp=new THREE.DirectionalLight(0xffbd74,2.2);lamp.position.set(-3,7,8);scene.add(lamp);
    const camera=new THREE.OrthographicCamera(-5.5,5.5,4.7,-4.7,.1,100);
    camera.position.set(0,0,22);camera.lookAt(0,0,0);
    const loader=new GLTFLoader();
    let active=true;
    renderer.render(scene,camera);
    FORGE_WEAPON_MODELS.forEach(([asset],index)=>{
      const url=`${BASE}img/models/${asset}`;
      cachedGlbBuffer(url).then(buffer=>new Promise<any>((resolve,reject)=>{
        loader.parse(buffer,`${BASE}img/models/`,resolve,reject);
      })).then(gltf=>{
        if(!active)return;
        const item=gltf.scene as THREE.Object3D;
        textureSteelOnWeapon(item,asset);
        item.updateMatrixWorld(true);
        const box=new THREE.Box3().setFromObject(item);
        const size=box.getSize(new THREE.Vector3());
        const span=Math.max(size.x,size.y,size.z);
        if(span<.001)return;
        const center=box.getCenter(new THREE.Vector3());
        item.position.set(-center.x,-center.y,-center.z);
        const mount=new THREE.Group();mount.add(item);
        mount.scale.setScalar(1.48/span);
        mount.position.set((index%5-2)*2.17,(1.5-Math.floor(index/5))*2.28+.22,0);
        scene.add(mount);
        renderer.render(scene,camera);
      }).catch(error=>console.warn('Forge display model unavailable',asset,error));
    });
    return()=>{active=false;scene.traverse((o:any)=>{if(o.isMesh){o.geometry?.dispose?.();if(Array.isArray(o.material))o.material.forEach((m:any)=>m.dispose?.());else o.material?.dispose?.();}});renderer.dispose();};
  },[]);
  return <><div className="forge-wall"><canvas ref={canvas}/><div className="forge-wall-labels">{FORGE_WEAPON_MODELS.map(([asset,name,id])=><button type="button" className={'forge-wall-label'+(id&&owned.includes(id)?' owned':'')+(ownedShields.includes(asset)?' owned':'')+(asset===selectedShield||(!asset.startsWith('Shield_')&&id===selected)?' equipped':'')} key={asset} aria-label={'Выбрать '+name} onClick={()=>onChoose(asset,name,id)}>{name}</button>)}</div></div>
    <p className="forge-wall-note">Выбери полученное оружие или щит. Остальные щиты откроются по мере прохождения.</p></>;
}

function App() {
  const [screen, setScreen] = useState<Screen>(() => (loadSave().hero ? { t: "tree" } : { t: "choose" }));
  const [save, setSave] = useState<Save>(loadSave);
  const [pick, setPick] = useState("");
  const [pickName, setPickName] = useState("");
  const [toast, setToast] = useState("");
  const [houseDialog,setHouseDialog]=useState("");
  const [houseDialogId,setHouseDialogId]=useState("");
  const houseDialogPending=useRef<string|null>(null);
  const toastTimer = useRef<number>(0);
  const [res, setRes] = useState<number | null>(null);
  const [removed, setRemoved] = useState<number | null>(null);
  const [whisper, setWhisper] = useState(false);
  const [mhp, setMhp] = useState(0);
  const [hhp, setHhp] = useState(0);
  const [hmax, setHmax] = useState(0);
  const [hen, setHen] = useState(0);
  const [men, setMen] = useState(0);
  const [flog, setFlog] = useState("");
  const [shield, setShield] = useState(false);
  const [valk, setValk] = useState(false);
  const [over, setOver] = useState("");
  const [combatFx, setCombatFx] = useState<{kind:"hit"|"rune"|"guard";key:number}|null>(null);
  const [forgeTransition, setForgeTransition] = useState(false);
  const [craftWeapon,setCraftWeapon]=useState<HeroWeapon|''>('');
  const [craftMaterial,setCraftMaterial]=useState<CraftMaterial|''>('');
  const [craftPicker,setCraftPicker]=useState<'weapon'|'material'|null>(null);
  const forgeTimer = useRef<number>(0);
  const midgardReturn = useRef({x:0,z:28});
  const [banditRespawnAt,setBanditRespawnAt]=useState<Record<string,number>>({});
  const scheduleBanditRespawn=useCallback((id:string)=>{
    setBanditRespawnAt(prev=>({...prev,[id]:Date.now()+15*60*1000}));
  },[]);
  const rememberMidgardPosition=useCallback((position:{x:number;z:number})=>{
    midgardReturn.current={x:position.x,z:position.z};
  },[]);
const [roadT, setRoadT] = useState(0.06);
  useEffect(() => { localStorage.setItem("yggdrasil", JSON.stringify(save)); }, [save]);
  useEffect(() => { tg?.ready?.(); tg?.expand?.(); tg?.setHeaderColor?.("#0b0f0c"); tg?.setBackgroundColor?.("#0b0f0c"); }, []);
  useEffect(() => {
    // Warm only the selected hero. The second character is loaded later when
    // actually chosen, which keeps the first launch lighter on a slow route.
    const asset=save.heroSkin==="valkyrie"
      ? "Vika-3d-animated-optimized.glb"
      : "Yggdrasil_Viking_Jarl.glb";
    cachedGlbBuffer(`${BASE}img/models/${asset}`).catch(()=>{});
  }, [save.heroSkin]);
  useEffect(() => {
    if (!tg?.BackButton) return;
    const back = () => setScreen(screen.t === "forge" ? { t: "realm", id:"midgard" } : { t: "tree" });
    if (screen.t !== "tree" && screen.t !== "choose" && save.hero) { tg.BackButton.show(); tg.BackButton.onClick(back); } else tg.BackButton.hide();
    return () => { tg.BackButton?.offClick?.(back); };
  }, [screen, save.hero]);
  useEffect(() => { setRes(null); setRemoved(null); setWhisper(false); setOver(""); setShield(false); setCombatFx(null); setHouseDialog(""); houseDialogPending.current=null; }, [screen]);
  useEffect(()=>()=>window.clearTimeout(forgeTimer.current),[]);

  const say = (m: string) => {
    if(houseDialogPending.current){setHouseDialogId(houseDialogPending.current);houseDialogPending.current=null;setToast("");setHouseDialog(m);return;}
    setToast(m); window.clearTimeout(toastTimer.current); toastTimer.current = window.setTimeout(() => setToast(""), 1800);
  };
  const haptic = (k: "light" | "success" = "light") => { try { if (k === "success") tg?.HapticFeedback?.notificationOccurred?.("success"); else tg?.HapticFeedback?.impactOccurred?.("light"); } catch {} };
  const gatherResource=(id:string,kind:GatherKind)=>{
    if(!GATHER_SPOTS.some(spot=>spot.id===id&&spot.kind===kind)||save.gathered.includes(id))return;
    setSave(s=>s.gathered.includes(id)?s:{...s,gathered:[...s.gathered,id],stock:{...s.stock,[kind]:s.stock[kind]+1}});
    haptic();say(kind==='wood'?'🪵 +1 древесина':kind==='twigs'?'🌱 +1 ветки':'🌿 +1 лечебные травы');
  };
  const go = (s: Screen) => setScreen(s);
  const enterForge=(position?:{x:number;z:number})=>{
    if(forgeTransition)return;
    if(position)midgardReturn.current={x:position.x,z:position.z};
    const goldenSwordReady=MIDGARD_GUARDIAN_ORDER.slice(0,-1).every(id=>save.done.includes("guardian:stage:"+id));
    if(goldenSwordReady&&!save.ownedWeapons.includes("swordGolden")){
      setSave(state=>state.ownedWeapons.includes("swordGolden")?state:{...state,
        ownedWeapons:[...new Set([...state.ownedWeapons,"swordGolden"])],
        lootCounts:lootCountAdd(state.lootCounts,["swordGolden"]),
        done:[...new Set([...state.done,"forge:golden-sword"])]
      });
      say("Вёлунд завершил особый клинок: Золотой меч получен. Он нужен, если последнее испытание Мидгарда перейдёт в бой.");
    }
    setForgeTransition(true);
    window.clearTimeout(forgeTimer.current);
    forgeTimer.current=window.setTimeout(()=>{setForgeTransition(false);setScreen({t:"forge"});},720);
  };
  const openRealm = (r: Realm) => { haptic(); setScreen({ t: "realm", id: r.id }); };
  const watchGain = () => Math.floor(Math.min(12, (Date.now() - save.watch) / 3600000) * 3);
  const collectWatch = () => { const g = watchGain(); if (g <= 0) { say("Дозор только начался — Капли силы ещё собираются."); return; } setSave(s => ({ ...s, sparks: s.sparks + g, watch: Date.now() })); haptic("success"); say("Дозор завершён: +" + g + " Капель силы"); };
  const claimGift = () => { if (save.gift === today()) return; const d = save.gift ? Math.round((Date.parse(today()) - Date.parse(save.gift)) / 86400000) : 99; const next = d <= 2 ? (save.streak % 7) + 1 : 1; const rew = LADDER[next - 1]; setSave(s => ({ ...s, sparks: s.sparks + rew, gift: today(), streak: next })); haptic("success"); say("Дар Древа, день " + next + ": +" + rew + " ✨"); };
  const confirmHero = () => { if (!pick || !pickName) return; setSave(s => ({ ...s, hero: { id: pick, name: pickName } })); haptic("success"); say("Путь начинается, " + pickName + "!"); setScreen({ t: "tree" }); };
  const heroDef = save.hero ? HEROES.find(h => h.id === save.hero!.id)! : null;
  const forgeItems = [
    {id:"default",icon:save.heroSkin==="valkyrie"?"⚔️":"◢━",name:save.heroSkin==="valkyrie"?"Меч валькирии":"Секира викинга",kind:"weapon",owned:true},
    {id:"sword2",icon:"⚔️",name:"Меч II",kind:"weapon",owned:save.ownedWeapons.includes("sword2")},
    {id:"swordBig",icon:"⚔️",name:"Большой меч",kind:"weapon",owned:save.ownedWeapons.includes("swordBig")},
    {id:"swordGolden",icon:"⚔️",name:"Золотой меч",kind:"weapon",owned:save.ownedWeapons.includes("swordGolden")},
    {id:"knife",icon:"🗡️",name:"Боевой кинжал",kind:"weapon",owned:save.ownedWeapons.includes("knife")},
    {id:"dagger2",icon:"🗡️",name:"Кинжал II",kind:"weapon",owned:save.ownedWeapons.includes("dagger2")},
    {id:"axe",icon:"🪓",name:"Северный топор",kind:"weapon",owned:save.ownedWeapons.includes("axe")},
    {id:"axeSmall",icon:"🪓",name:"Малый топор",kind:"weapon",owned:save.ownedWeapons.includes("axeSmall")},
    {id:"axeDouble",icon:"🪓",name:"Двойной топор",kind:"weapon",owned:save.ownedWeapons.includes("axeDouble")},
    {id:"mace",icon:"🔨",name:"Малый молот",kind:"weapon",owned:save.ownedWeapons.includes("mace")},
    {id:"hammerDouble",icon:"🔨",name:"Двойной молот",kind:"weapon",owned:save.ownedWeapons.includes("hammerDouble")},
    {id:"spear",icon:"🔱",name:"Копьё",kind:"weapon",owned:save.ownedWeapons.includes("spear")},
    {id:"claymore",icon:"⚔️",name:"Клеймор",kind:"weapon",owned:save.ownedWeapons.includes("claymore")},
    {id:"scythe",icon:"⚔️",name:"Боевая коса",kind:"weapon",owned:save.ownedWeapons.includes("scythe")},
    {id:"armor",icon:"♜",name:"Нагрудная броня",kind:"gear",owned:true},
    {id:"shield",icon:"🛡️",name:"Круглый щит",kind:"gear",owned:true},
    {id:"helmet",icon:"⛑️",name:"Боевой шлем",kind:"gear",owned:true},
    {id:"boots",icon:"🥾",name:"Походные сапоги",kind:"gear",owned:true},
  ];
  const forgeLevel=(id:string)=>Math.max(0,Number(save.forgeLevels[id]||0));
  const equipped=(id:GearId)=>save.equippedGear.includes(id);
  const gearLevel=(id:GearId)=>equipped(id)?forgeLevel(id==='shield'?shieldForgeKey(save.shieldAsset):id):0;
  const gearHp=()=>gearLevel('armor')*3+gearLevel('helmet')*2+(equipped('armor')?4:0)+(equipped('helmet')?2:0);
  const gearDefense=()=>Math.floor((gearLevel('armor')+gearLevel('helmet'))/2)+(equipped('armor')?1:0);
  const activeRuneDef=()=>RUNE_CATALOG.find(r=>r.id===save.equippedRune);
  const heroPowerPips=()=>{
    if(!heroDef)return 1;
    const gearForge=gearLevel('armor')+gearLevel('helmet')+gearLevel('shield')+gearLevel('boots');
    const runePower=activeRuneDef()?.power||0;
    const score=heroDef.str+WEAPON_POWER[save.heroWeapon]+forgeLevel(save.heroWeapon)+Math.floor(gearForge/2)+runePower*2;
    return score>=24?5:score>=19?4:score>=15?3:score>=11?2:1;
  };
  const toggleGear=(id:GearId)=>{
    const isOn=equipped(id);
    setSave(s=>({...s,equippedGear:isOn?s.equippedGear.filter(gear=>gear!==id):[...s.equippedGear,id]}));
    haptic();say((isOn?'Снято: ':'Надето: ')+(forgeItems.find(item=>item.id===id)?.name||id));
  };
  const forgeCost=(id:string)=>save.forgeFreeUsed?2+forgeLevel(id==='shield'?shieldForgeKey(save.shieldAsset):id)*2:0;
  const improveForgeItem=(item:typeof forgeItems[number])=>{
    if(!item.owned){say("Этот предмет ещё нужно получить в награду за испытание.");return;}
    const key=item.id==='shield'?shieldForgeKey(save.shieldAsset):item.id;
    const level=forgeLevel(key);
    if(level>=(item.kind==='weapon'||item.id==='shield'?10:5)){say(item.name+" уже достиг максимальной закалки Мидгарда.");return;}
    const cost=forgeCost(item.id);
    if(save.sparks<cost){say("Недостаточно Капель силы. Нужно: "+cost);return;}
    setSave(s=>({...s,sparks:s.sparks-cost,forgeFreeUsed:true,forgeLevels:{...s.forgeLevels,[key]:(s.forgeLevels[key]||0)+1}}));
    haptic("success");
    say((cost===0?"Первая ковка бесплатна. ":"")+item.name+": закалка +1");
  };
  const chooseForgeWeapon=(asset:string,name:string,id:string)=>{
    if(asset.startsWith('Shield_')){
      if(!save.ownedShields.includes(asset)){say(name+' ещё не получен. Щиты будут открываться за испытания.');return;}
      const already=save.shieldAsset===asset&&equipped('shield');
      setSave(s=>({...s,shieldAsset:asset,equippedGear:already?s.equippedGear.filter(gear=>gear!=='shield'):[...new Set([...s.equippedGear,'shield' as GearId])]}));
      haptic('success');say(already?'Щит снят.':name+' надет на левую руку. Закалка выбрана ниже.');return;
    }
    if(!id||!save.ownedWeapons.includes(id)){
      say(name+' пока хранится у защитника. Победи его, чтобы забрать оружие.');return;
    }
    const selected=id as HeroWeapon;
    if(save.heroWeapon===selected){say(name+' уже в руке.');return;}
    setSave(s=>({...s,heroWeapon:selected}));haptic('success');say(name+' в руке. Сила оружия: +'+WEAPON_POWER[selected]+'.');
  };
  const selectedCraftRecipe=CRAFT_RECIPES.find(r=>r.weapon===craftWeapon&&r.material===craftMaterial)||null;
  const craftWeaponCopies=craftWeapon?Math.max(0,Number(save.lootCounts[craftWeapon])||0):0;
  const craftMaterialCount=craftMaterial?save.stock[craftMaterial]:0;
  const craftReady=!!selectedCraftRecipe&&craftWeaponCopies>=2&&craftMaterialCount>=selectedCraftRecipe.amount&&save.sparks>=selectedCraftRecipe.cost;
  const performCraft=()=>{
    const recipe=selectedCraftRecipe;
    if(!recipe){say("Для этой пары оружия и материала пока нет рецепта.");return;}
    if(craftWeaponCopies<2){say("Для крафта нужна лишняя копия оружия. Один экземпляр остаётся у героя.");return;}
    if(craftMaterialCount<recipe.amount){say("Не хватает материала: нужно "+recipe.amount+" · "+craftMaterialName(recipe.material)+".");return;}
    if(save.sparks<recipe.cost){say("Не хватает Капель силы. Нужно: "+recipe.cost);return;}
    setSave(state=>{
      const currentCopies=Math.max(0,Number(state.lootCounts[recipe.weapon])||0);
      if(currentCopies<2||state.stock[recipe.material]<recipe.amount||state.sparks<recipe.cost)return state;
      const nextCounts={...state.lootCounts,[recipe.weapon]:Math.max(1,currentCopies-1)};
      nextCounts[recipe.result]=(Number(nextCounts[recipe.result])||0)+1;
      return {...state,
        sparks:state.sparks-recipe.cost,
        stock:{...state.stock,[recipe.material]:state.stock[recipe.material]-recipe.amount},
        ownedWeapons:[...new Set([...state.ownedWeapons,recipe.result])],
        lootCounts:nextCounts
      };
    });
    haptic("success");
    say("Крафт завершён: "+lootDisplayName(recipe.result)+" создан. Потрачена 1 лишняя копия "+lootDisplayName(recipe.weapon)+".");
    setCraftWeapon('');setCraftMaterial('');setCraftPicker(null);
  };
  const guardianProgressCount=MIDGARD_GUARDIAN_ORDER.filter(id=>save.done.includes("guardian:stage:"+id)||save.done.includes("guardian:"+id)).length;
  const dismantleWeapon=(id:HeroWeapon)=>{
    const yieldSteel=RUNE_STEEL_YIELD[id]||0;
    const copies=Math.max(0,Number(save.lootCounts[id])||0);
    if(id==="default"||id==="swordGolden"||!yieldSteel){say("Это оружие нельзя разбирать.");return;}
    if(copies<2){say("Разбирать можно только лишнюю копию. Основной экземпляр должен остаться у героя.");return;}
    setSave(state=>{
      const count=Math.max(0,Number(state.lootCounts[id])||0);
      if(count<2)return state;
      return {...state,runeSteel:state.runeSteel+yieldSteel,lootCounts:{...state.lootCounts,[id]:count-1}};
    });
    haptic("success");say(lootDisplayName(id)+" разобран: +"+yieldSteel+" Рунической стали.");
  };
  const craftRuneSteelItem=(recipe:SteelCraftRecipe)=>{
    if(guardianProgressCount<recipe.requires){say("Этот чертёж откроется после "+recipe.requires+" испытаний Мидгарда.");return;}
    if(save.runeSteel<recipe.steel){say("Не хватает Рунической стали. Нужно: "+recipe.steel);return;}
    if(save.stock[recipe.material]<recipe.amount){say("Не хватает материала: нужно "+recipe.amount+" · "+craftMaterialName(recipe.material)+".");return;}
    if(save.sparks<recipe.cost){say("Не хватает Капель силы. Нужно: "+recipe.cost);return;}
    setSave(state=>{
      if(state.runeSteel<recipe.steel||state.stock[recipe.material]<recipe.amount||state.sparks<recipe.cost)return state;
      const nextCounts={...state.lootCounts};
      if(recipe.resultWeapon)nextCounts[recipe.resultWeapon]=(Number(nextCounts[recipe.resultWeapon])||0)+1;
      if(recipe.resultShield)nextCounts[recipe.resultShield]=(Number(nextCounts[recipe.resultShield])||0)+1;
      return {...state,
        runeSteel:state.runeSteel-recipe.steel,
        sparks:state.sparks-recipe.cost,
        stock:{...state.stock,[recipe.material]:state.stock[recipe.material]-recipe.amount},
        ownedWeapons:recipe.resultWeapon?[...new Set([...state.ownedWeapons,recipe.resultWeapon])]:state.ownedWeapons,
        ownedShields:recipe.resultShield?[...new Set([...state.ownedShields,recipe.resultShield])]:state.ownedShields,
        lootCounts:nextCounts
      };
    });
    haptic("success");say("Создано: "+recipe.name+". Руническая сталь и материалы списаны.");
  };
  const rnd = (n: number) => Math.floor(Math.random() * n);
  const trialIdx = (id: string) => save.trials.filter(t => t.startsWith(id + ":")).length;
  const openGate = (r: Realm) => { if (save.artifacts.includes(r.id)) { say("Мир покорён. Артефакт хранится в листе героя."); return; } haptic(); setScreen({ t: "trial", id: r.id }); };
  const finishTrial = (id: string, idx: number, add: number) => {
    const finale = idx === 2;
    setSave(s => ({ ...s, sparks: s.sparks + add + (finale ? 30 : 0), trials: [...s.trials, id + ":" + idx] }));
    if (finale) { haptic("success"); say("Серия испытаний завершена. Артефакт мира выдаётся только после полного прохождения его игровой локации."); }
  };
  const finishWhisperCorrect = () => {
    setSave(s=>s.done.includes("whisper:wisdom")?s:{...s,sparks:s.sparks+8,done:[...new Set([...s.done,"whisper:wisdom","guardian:whisperStone","guardian:stage:whisperStone"])],
      runes:[...new Set([...s.runes,'ansuzWisdom'])],potions:[...s.potions,'northernMoss'],
      lootCounts:lootCountAdd(s.lootCounts,['ansuzWisdom','northernMoss'])});
    haptic("success");
  };
  const answer = (id: string, ai: number) => {
    if (res !== null) return;
    const idx = trialIdx(id); const q = QUESTS[id][idx];
    if (ai === q.c) {
      setRes(ai); haptic("success");
      const add = 12 + idx * 3 + (heroDef?.id === "dwarf" ? 6 : 0);
      say("Верно! Сундук хозяина: +" + add + " ✨"); finishTrial(id, idx, add);
      return;
    }
    if (save.powers.includes("mimirEye")) {
      setRes(q.c);
      setSave(s => ({ ...s, powers: s.powers.filter(p => p !== "mimirEye") }));
      const add = 8 + idx * 2;
      haptic("success"); say("Око Мимира раскрыло истину. Ответ исправлен. +" + add + " ✨");
      finishTrial(id, idx, add);
      return;
    }
    if (save.powers.includes("nornThread")) {
      setRes(ai);
      setSave(s => ({ ...s, powers: s.powers.filter(p => p !== "nornThread") }));
      const add = 6 + idx * 2;
      haptic("success"); say("Нить Норн изменила исход. Ошибка не приведёт к бою. +" + add + " ✨");
      finishTrial(id, idx, add);
      return;
    }
    setRes(ai); haptic(); setFlog(MASTERS[id].name + " мрачнеет: «Что ж — пусть решит сталь!»");
  };
  const useWhisper = (id: string) => { const idx = trialIdx(id); const q = QUESTS[id][idx]; const wrong = q.a.findIndex((_, i) => i !== q.c && i !== removed); setRemoved(wrong); setWhisper(true); haptic(); say("Шёпот ветров уносит один ответ..."); };
  const startFight = (id: string) => {
    const m = MASTERS[id];
    const ash = save.powers.includes("ashBreath");
    const forgedHp=gearHp();
    const fightMaxHp=heroDef!.hp+forgedHp+(ash?25:0);
    setMhp(m.hp);
    setHhp(fightMaxHp);
    setHmax(fightMaxHp);
    setHen(COMBAT_ENERGY);
    setMen(COMBAT_ENERGY);
    setOver(""); setShield(false); setValk(false);
    setFlog(ash ? "Дыхание Ясеня хранит тебя: +25 здоровья и полный запас энергии." : m.name + " поднимает оружие!");
    if (ash) setSave(s => ({ ...s, powers: s.powers.filter(p => p !== "ashBreath") }));
    setScreen({ t: "fight", id });
  };
  const finishWhisperBattle=()=>{
    setSave(s=>{
      if(s.done.includes("whisper:battle"))return s;
      return {...s,sparks:s.sparks+18,done:[...new Set([...s.done,"whisper:battle","guardian:whisperStone","guardian:stage:whisperStone"])],
        ownedWeapons:[...new Set([...s.ownedWeapons,'mace'])],
        potions:[...s.potions,'northernMoss'],
        runes:[...new Set([...s.runes,'kenazShard'])],
        lootCounts:lootCountAdd(s.lootCounts,['mace','northernMoss','kenazShard'])};
    });
    return 'Малый молот, эликсир северного мха и осколок Кеназ';
  };
  const useInventoryPotion=(id:string,currentHpOverride?:number)=>{
    const item=POTION_CATALOG.find(p=>p.id===id);
    if(!item||!save.potions.includes(id)){say('Этого эликсира пока нет в запасе.');return false;}
    const maxHp=(heroDef?.hp||100)+gearHp(),currentHp=Math.min(maxHp,currentHpOverride??save.fieldHp??maxHp);
    if(id==='hoddmimirElixir'&&currentHp>=maxHp&&save.frostGuard>=2){say('Здоровье и защита Ходдмимира уже восстановлены.');return false;}
    if(id!=='frostDraught'&&id!=='hoddmimirElixir'&&currentHp>=maxHp){say('Здоровье уже восстановлено.');return false;}
    if(id==='frostDraught'&&save.frostGuard>=2){say('Ледяная защита уже действует на два удара.');return false;}
    setSave(s=>{
      const index=s.potions.indexOf(id);
      if(index<0)return s;
      const nextPotions=[...s.potions];nextPotions.splice(index,1);
      return {...s,potions:nextPotions,
        fieldHp:id==='lifeElixir'||id==='hoddmimirElixir'?maxHp:id==='northernMoss'?Math.min(maxHp,(s.fieldHp??maxHp)+30):s.fieldHp,
        frostGuard:id==='frostDraught'||id==='hoddmimirElixir'?2:s.frostGuard};
    });
    haptic('success');say(
      id==='frostDraught'
        ? 'Ледяной настой ослабит два следующих удара.'
        : id==='hoddmimirElixir'
          ? 'Эликсир Ходдмимира полностью восстановил здоровье и дал защиту от двух следующих ударов.'
          : `${item.name}: здоровье восстановлено.`
    );
    return true;
  };
  const equipInventoryRune=(id:string)=>{
    const rune=RUNE_CATALOG.find(r=>r.id===id);
    if(!rune||!save.runes.includes(id))return;
    setSave(s=>({...s,equippedRune:id}));haptic();say(`Руна ${rune.name} активна. ${rune.effect}.`);
  };
  const rewardBandit=(id:string)=>{
    const spec=BANDIT_SPECS.find(b=>b.id===id);
    if(!spec)return;
    setSave(s=>{
      const lootIds=spec.item?Array(spec.quantity||1).fill(spec.item):[];
      return {...s,sparks:s.sparks+spec.sparks,
        ownedWeapons:spec.kind==='weapon'&&spec.item?[...new Set([...s.ownedWeapons,spec.item])]:s.ownedWeapons,
        potions:spec.kind==='potion'&&spec.item?[...s.potions,...Array(spec.quantity||1).fill(spec.item)]:s.potions,
        runes:spec.kind==='rune'&&spec.item?[...new Set([...s.runes,spec.item])]:s.runes,
        equippedRune:spec.kind==='rune'&&spec.item&&!s.equippedRune?spec.item:s.equippedRune,
        lootCounts:lootCountAdd(s.lootCounts,lootIds)};
    });
    haptic('success');say(`Победа: +${spec.sparks} Капель силы и ${spec.reward}. Разбойник вернётся через 15 минут игры.`);
  };
  const banditKnockout=()=>{
    setSave(s=>({...s,sparks:Math.max(0,s.sparks-5),fieldHp:(heroDef?.hp||100)+gearHp()}));
    haptic();say('Разбойник сбил Вику с ног. Древо вернуло её к началу пути (−5 Капель силы).');
  };
  const fightAct = (id: string, kind: "hit" | "rune" | "shield" | "restore") => {
    if (over) return;
    const m = MASTERS[id]; const idx = trialIdx(id);
    let dmg = 0; let log = ""; let nhen = hen; let nmen = men; let nshield = shield;
    if (kind === "hit") {
      setCombatFx({kind:"hit",key:Date.now()});
      dmg = heroDef!.str + WEAPON_POWER[save.heroWeapon] + forgeLevel(save.heroWeapon) + (save.equippedRune==='uruzStrength'?2:0) + (save.equippedRune==='sowiloLight'?2:0) + rnd(4);
      if(hen>0)nhen=Math.max(0,hen-1);else{dmg=Math.ceil(dmg*.55);log="Силы иссякли — удар слабее. ";}
      if (save.powers.includes("fireOath")) { dmg += 5; setSave(s => ({ ...s, powers: s.powers.filter(p => p !== "fireOath") })); log += "Огненный обет! "; }
      if (heroDef!.id === "berserk" && hhp <= Math.max(heroDef!.hp,hmax) / 2) { dmg *= 2; log += "Медвежья ярость! "; }
      log += "Ты бьёшь: " + (save.heroWeapon==="default"?heroDef!.weapon:FORGE_WEAPON_MODELS.find(item=>item[2]===save.heroWeapon)?.[1]||heroDef!.weapon) + " — −" + dmg + " хозяину.";
    }
    if (kind === "rune") {
      if (hen < 2) { say("Для рунического удара нужно 2 деления энергии."); return; }
      setCombatFx({kind:"rune",key:Date.now()});
      nhen = hen - 2; dmg = heroDef!.en + 2 + (save.equippedRune==='kenazShard'?2:0) + (save.equippedRune==='sowiloLight'?2:0) + rnd(5);
      log = "Руническое заклинание вспыхивает: −" + dmg + " хозяину.";
    }
    if (kind === "shield") { if(hen<1){say("Нет энергии, чтобы удержать щит.");return;} nhen=hen-1;nshield = true; log = "Ты поднимаешь щит — удар ослабнет."; }
    if (kind === "restore") { const restored=2+(equipped('boots')?1:0)+(gearLevel('boots')>=3?1:0);nhen=Math.min(COMBAT_ENERGY,hen+restored);log="Ты переводишь дыхание и восстанавливаешь "+restored+" деления энергии."; }
    const nm = mhp - dmg;
    if (nm <= 0) {
      setMhp(0); setHen(nhen); setMen(nmen); setOver("win");
      const add = 8 + idx * 2;
      setFlog("Хозяин повержен! Награда: +" + add + " Капель силы");
      finishTrial(id, idx, add);
      return;
    }
    let md = m.atk + rnd(3); let mlog = "";
    if(nmen<=0){md=0;nmen=2;mlog=" "+m.name+" вынужден перевести дыхание и восстанавливает энергию.";}else nmen=Math.max(0,nmen-1);
    const forgedDefense=gearDefense();
    md=Math.max(1,md-forgedDefense-(save.equippedRune==='algizGuard'?2:0));
    if (nshield) { md = Math.max(0,Math.ceil(md * (equipped('shield')?.3:.6))-gearLevel('shield')-(equipped('shield')?1:0)); mlog += " Щит принял большую часть удара."; }
    if(!nshield&&md>0&&save.frostGuard>0){md=Math.max(1,Math.ceil(md*.5));setSave(s=>({...s,frostGuard:Math.max(0,s.frostGuard-1)}));mlog+=" Морозный настой ослабил удар.";}
    if (save.powers.includes("iceOath")) { md = Math.ceil(md * 0.65); setSave(s => ({ ...s, powers: s.powers.filter(p => p !== "iceOath") })); mlog += " Ледяной обет сковал удар врага."; }
    if (heroDef!.id === "dwarf") md = Math.ceil(md * 0.75);
    let nh = hhp;
    if (heroDef!.id === "viking" && !valk && nh - md <= 0) { setValk(true); md = 0; mlog = " Крылья бури поглотили смертельный удар!"; }
    nh = nh - md;
    setMhp(nm); setHhp(Math.max(0, nh)); setHen(nhen); setMen(nmen); setShield(false);
    if (nh <= 0 && save.powers.includes("yggdrasilCall")) {
      setSave(s => ({ ...s, powers: s.powers.filter(p => p !== "yggdrasilCall") }));
      setHhp(30); setFlog(log + " Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");
      return;
    }
    if (nh <= 0) { setOver("lose"); setSave(s => ({ ...s, sparks: Math.max(0, s.sparks - 10) })); setFlog(log + " " + m.name + " бьёт... Ты пал. Древо возрождает тебя (−10 ✨)."); return; }
    setFlog(md>0?log + mlog + " " + m.name + " отвечает: −" + md + ".":log+mlog);
  };
  const nextStep = (id: string) => { if (trialIdx(id) >= 3 || save.artifacts.includes(id)) setScreen({ t: "realm", id }); else setScreen({ t: "trial", id }); };
  const isNav = (id: string) => (id === "tree" ? screen.t === "tree" || screen.t === "realm" : id === "hall" ? screen.t === "hall" || screen.t === "craft" : screen.t === id);
  const navScreen = (id: string): Screen => (id === "tree" ? { t: "tree" } : ({ t: id } as Screen));
  // Реальная траектория дороги на исходной карте 1024×1536.
  // Герой всегда находится на этой линии, а камера двигается вместе с ним.
  return (
    <div className="app">
      <style>{CSS}</style>
      <div className="hdr">
        {screen.t === "tree" && <div className="title">🌳 Мировое Древо Иггдрасиль</div>}
        {screen.t === "realm" && <button className="back" onClick={() => go({ t: "tree" })}>← На Древо</button>}
        {screen.t === "choose" && <div className="title">🌫️ Выбор судьбы</div>}
        {screen.t === "hero" && <div className="title">🛡 Герой</div>}
        {screen.t === "gift" && <div className="title">🎁 Дар</div>}
        {screen.t === "hall" && <div className="title">🏛️ Чертог</div>}
        {screen.t === "craft" && <button className="back" onClick={() => go({ t: "hall" })}>← Чертог · Крафт</button>}
        {screen.t === "forge" && <button className="back" onClick={() => go({ t: "realm", id:"midgard" })}>← Мидгард · Кузница</button>}
        {screen.t === "trial" && <div className="title">🗝 Испытание</div>}
        {screen.t === "fight" && <div className="title">⚔ Бой</div>}
        <div className="sparks"><SparkDrop/> {save.sparks} Капель силы</div>
      </div>

      {forgeTransition&&<div className="forge-transition"><b>ᚲ</b><span>Дверь кузницы открывается</span></div>}

      {screen.t === "choose" && (
        <div className="scroll choose-screen">
          <div className="card center choose-intro"><div className="big">ᛉ</div><div className="qhead2">Выбери героя</div><p className="dim">Норны прядут нить. Выбери, кто пройдёт путь девяти миров.</p></div>
          {HEROES.map(h => (
            <button key={h.id} className={"hcard" + (pick === h.id ? " on" : "")} onClick={() => { setPick(h.id); setPickName(""); haptic(); }}>
              <span className="hface" style={{ borderColor: h.color, color: h.color, background: "linear-gradient(160deg,#101613,#0a0a0a)" }}>
                <BgImg name={h.img} className="himg" />
              </span>
              <span className="hinfo">
                <span className="hname" style={{ color: h.color }}>{h.race}</span>
                <span className="hab">🌀 {h.ability}: {h.abilityDesc}</span>
                <span className="hst">⚔ {h.str} • ✨ {h.en} • ❤ {h.hp}</span>
                <span className="hw">🗡 {h.weapon}</span>
              </span>
            </button>
          ))}
          {pick && (
            <div className="card">
              <div className="qhead2">Имя героя</div>
              <div className="chips">
                {(HEROES.find(h => h.id === pick)!.gender === "f" ? NAMES_F : NAMES_M).map(n => (
                  <button key={n} className={"chip" + (pickName === n ? " on" : "")} onClick={() => { setPickName(n); haptic(); }}>{n}</button>
                ))}
              </div>
            </div>
          )}
          <button className="btn gold" disabled={!pick || !pickName} onClick={confirmHero}>Вступить на путь</button>
        </div>
      )}

      {screen.t === "tree" && (
        <div className="maparea">
          <div className="mapwrap">
            <div className="mapcanvas">
              <BgImg name="tree" className="mapimg" />
              {REALMS.map(r => (
                <button key={r.id} className="marker" style={{ left: r.x + "%", top: r.y + "%" }} onClick={() => openRealm(r)}>
                  <div className="amulet-wrap">
                    <div className="amulet-glow" style={{ background: `radial-gradient(circle, ${r.glow}, transparent 70%)` }} />
                    <div className="amulet-ring" style={{ borderColor: r.color }} />
                    <div className="amulet-core" style={{ borderColor: r.color, color: r.color, background: `linear-gradient(135deg, ${r.dark}, #0a0a0a)` }}>
                      {r.runeSym}
                    </div>
                  </div>
                  <span className="mname" style={{ color: r.color, borderColor: r.glow }}>{r.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="fadeT" /><div className="fadeB" />
          <div className="hint">↓ листай Древо вниз • нажми на амулет ↓</div>
        </div>
      )}

      {screen.t === "tree" && heroDef && save.hero && (
        <button className="herobar" onClick={() => go({ t: "hero" })}>
          <span className="hbface" style={{ borderColor: heroDef.color, color: heroDef.color }}><BgImg name={heroDef.img} className="hbimg" />{heroDef.sym}</span>
          <span className="hbname">{save.hero.name}<i>{heroDef.race}</i></span>
          <span className="hbst">⚔ {heroDef.str} ✨ {heroDef.en} ⏳ {watchGain()}</span>
          <span className="hbwpn">🗡</span>
        </button>
      )}

      {screen.t === "realm" && (() => {
  const realm = REALMS.find(r => r.id === screen.id)!;

  if (realm.id === "midgard") {
    if (!heroDef) return null;

    const interact = (id: string, position?:{x:number;z:number}) => {
      haptic();
      if(id.startsWith("guardian:repeat:")){
        const locationId=id.slice("guardian:repeat:".length);
        const spec=MIDGARD_GUARDIANS[locationId];
        if(!spec)return;
        const repeatDrops=2+spec.power;
        setSave(s=>({...s,sparks:s.sparks+repeatDrops}));
        haptic("success");
        say(`Повторная победа над ${spec.name}: +${repeatDrops} Капель силы.`);
        return;
      }
      if(id.startsWith("guardian:correct:")||id.startsWith("guardian:battle:")){
        const battle=id.startsWith("guardian:battle:");
        const locationId=id.slice(battle?"guardian:battle:".length:"guardian:correct:".length);
        const spec=MIDGARD_GUARDIANS[locationId];
        if(!spec)return;
        const key="guardian:"+locationId;
        const stageKey="guardian:stage:"+locationId;
        const reward=battle?spec.battleReward:spec.correctReward;
        const loot=MIDGARD_GUARDIAN_LOOT[locationId]?.[battle?'battle':'correct']||{};
        const lootIds=[...(loot.weapons||[]),...(loot.shields||[]),...(loot.runes||[]),...(loot.potions||[])];
        setSave(state=>{
          if(state.done.includes(key)||state.done.includes(stageKey))return state;
          const idx=MIDGARD_GUARDIAN_ORDER.indexOf(locationId as any);
          const completed=(guardianId:string)=>{
            if(guardianId==="whisperStone")return state.done.includes("whisper:battle")||state.done.includes("whisper:wisdom")||state.done.includes("guardian:whisperStone")||state.done.includes("guardian:stage:whisperStone");
            return state.done.includes("guardian:"+guardianId)||state.done.includes("guardian:stage:"+guardianId);
          };
          const missing=idx>0&&MIDGARD_GUARDIAN_ORDER.slice(0,idx).some(prev=>!completed(prev));
          if(missing)return state;
          const isMidgardComplete=locationId==="hoddmimir";
          return {...state,
            sparks:state.sparks+reward,
            done:[...new Set([...state.done,key,stageKey,...(isMidgardComplete?["world:complete:midgard"]:[])])],
            artifacts:isMidgardComplete?[...new Set([...state.artifacts,"midgard"])]:state.artifacts,
            ownedWeapons:[...new Set([...state.ownedWeapons,...(loot.weapons||[])])],
            ownedShields:[...new Set([...state.ownedShields,...(loot.shields||[])])],
            runes:[...new Set([...state.runes,...(loot.runes||[])])],
            potions:[...state.potions,...(loot.potions||[])],
            lootCounts:lootCountAdd(state.lootCounts,lootIds)
          };
        });
        haptic("success");
        return;
      }
      if(["warriorHouse","fisher2","carpenter","hunter2","family","house","fisher","hunter","herbalist","craftsman","oldfarm"].includes(id))houseDialogPending.current=id;
      if (id === "mimir") {
        if (save.done.includes("forest:present")) {
          if (!save.done.includes("forest:present:reward")) {
            setSave(s => ({ ...s, sparks: s.sparks + 20, done: [...new Set([...s.done, "forest:present:reward"])] }));
            haptic("success");
            say("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨");
          } else {
            say("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит.");
          }
        } else {
          say('Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»');
        }
        return;
      }
      if (id === "norns") {
        say('Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»');
        return;
      }
      if (id === "threeThreads") {
        say('Колодец Трёх Норн светится изнутри. Серебряная, золотая и алая нити сходятся над водой — прошлое, настоящее и будущее здесь связаны воедино.');
        return;
      }
      if(id==="nornsChest"){
        if(!save.done.includes('forest:choice')){
          say('Красный сундук ждёт, пока ты выберешь нить у колодца Трёх Норн.');return;
        }
        if(save.done.includes('chest:norns')){
          say('Красный сундук уже открыт. Северный мост можно подготовить заданием Бьёрна; доски на Старом хуторе и крепления у Торвальда — ещё один путь. Ремонт выполняется у самого моста.');return;
        }
        setSave(s=>s.done.includes('chest:norns')?s:{...s,
          done:[...new Set([...s.done,'chest:norns'])],sparks:s.sparks+30,
          potions:[...s.potions,'lifeElixir','northernMoss'],
          runes:[...new Set([...s.runes,'uruzStrength','perthroFate'])],
          ownedWeapons:[...new Set([...s.ownedWeapons,'knife'])],
          ownedShields:[...new Set([...s.ownedShields,'Shield_Heater.glb'])],
          lootCounts:lootCountAdd(s.lootCounts,['knife','Shield_Heater.glb','uruzStrength','perthroFate','lifeElixir','northernMoss'])
        });
        haptic('success');say('Красный сундук Норн открыт! +30 Капель силы, Боевой кинжал, Щит, руны Уруз ᚢ и Перт ᛈ, Эликсир жизни и Эликсир северного мха. Подсказка Норн ведёт к ремонту Северного моста.');
        return;
      }
      if (id === "forge") {
        say("Вёлунд открывает дверь кузницы. Огонь горна отзывается на Капли силы.");
        enterForge(position);
        return;
      }
      if(id === "blacksmith"){
        say("Вёлунд: «Выбери сталь у двери кузницы. Горн уже разожжён».");
        return;
      }
      if(id==='craftsman'&&save.done.includes('chest:norns')&&!save.done.includes('bridge:fittings')){
        setSave(s=>({...s,done:[...new Set([...s.done,'bridge:fittings'])]}));
        haptic('success');say('✅ Торвальд вручил железные крепления. Вместе с досками со Старого хутора они позволяют отремонтировать Северный мост прямо у переправы.');return;
      }
      if(id==='herbalist'){
        if(save.done.includes('gather:herbalist')){say('Сигрид: «Благодарю за травы. Эликсир северного мха уже у тебя в запасе».');return;}
        if(save.stock.herbs<4){say(`Сигрид: «Найди четыре пучка лечебных трав у южной дороги. Сейчас у тебя ${save.stock.herbs} из 4».`);return;}
        setSave(state=>state.done.includes('gather:herbalist')||state.stock.herbs<4?state:{...state,
          stock:{...state.stock,herbs:Math.max(0,state.stock.herbs-4)},
          potions:[...state.potions,'northernMoss'],sparks:state.sparks+6,
          done:[...new Set([...state.done,'gather:herbalist'])]
        });
        haptic('success');say('Сигрид приняла 4 лечебные травы (−4) и вручила Эликсир северного мха и 6 Капель силы.');return;
      }
      if(id==='carpenter'){
        if(!save.done.includes('gather:carpenter')&&save.stock.wood>=3&&save.stock.twigs>=3){
          setSave(state=>state.done.includes('gather:carpenter')||state.stock.wood<3||state.stock.twigs<3?state:{...state,
            stock:{...state.stock,wood:Math.max(0,state.stock.wood-3),twigs:Math.max(0,state.stock.twigs-3)},
            sparks:state.sparks+8,done:[...new Set([...state.done,'gather:carpenter'])]
          });
          haptic('success');say('✅ Бьёрн принял 3 древесины (−3) и 3 ветки (−3). +8 Капель силы. Теперь можно ремонтировать Северный мост.');return;
        }
        if(save.done.includes('bridge:north:repaired')){say('✅ Северный мост уже восстановлен. Перейди на другой берег к золотому сундуку.');return;}
        if(save.done.includes('gather:carpenter')||(save.done.includes('chest:norns')&&save.done.includes('bridge:boards')&&save.done.includes('bridge:fittings'))){
          say('✅ Материалы для ремонта готовы. Подойди к Северному мосту: там появится кнопка «Отремонтировать мост».');return;
        }
        say(`Бьёрн: «Принеси 3 древесины и 3 ветки для ремонта. Сейчас древесина ${save.stock.wood}/3, ветки ${save.stock.twigs}/3».`);return;
      }
      if (id === "house" || id === "elder") {
        say("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");
        return;
      }
      const homeMessages:Record<string,string>={
        warriorHouse:"Дружинник: «Добро пожаловать. Перед вечерним дозором я проверяю клинок и щит».",
        fisher2:"Халли: «Утром я вернулся с северной реки. На крыльце сохнут сети».",
        carpenter:"Плотник Бьёрн: «Принеси древесину и ветки, затем почини Северный мост у переправы».",
        hunter2:"Рандви: «Я знаю лесные тропы. Если соберёшься к дальней роще, возьми с собой запас воды».",
        family:"Хозяйка дома: «Торстейн скоро вернётся. Проходи, у очага тепло».",
        fisher:"Эйнар: «Река сегодня спокойна. Рыбу можно обменять в деревне на припасы».",
        hunter:"Ульв: «В лесу видны новые следы. Будь внимателен на дороге за воротами».",
        herbalist:"Сигрид: «Можжевельник и сушёные травы помогают мне готовить эликсиры».",
        craftsman:"Торвальд: «Я чиню инструменты и выковываю крепления. Приноси материалы, если понадобится помощь»."
      };
      if(homeMessages[id]){say(homeMessages[id]);return;}
      if (id === "northBridge") {
        if(save.done.includes('bridge:north:repaired')){say('Северный мост восстановлен. Проход к золотому сундуку свободен.');return;}
        const ready=save.done.includes('gather:carpenter')||(save.done.includes('chest:norns')&&save.done.includes('bridge:boards')&&save.done.includes('bridge:fittings'));
        if(ready){
          setSave(s=>s.done.includes('bridge:north:repaired')?s:{...s,done:[...new Set([...s.done,'bridge:north:repaired'])]});
          haptic('success');setHouseDialogId('northBridge');setHouseDialog('✅ Северный мост отремонтирован! Заграждения сняты, проход открыт. Перейди мост и открой золотой сундук на другом берегу.');return;
        }
        say('Северный мост повреждён. Сначала собери 3 древесины и 3 ветки, затем сдай их плотнику Бьёрну. После этого мост можно починить здесь.');
        return;
      }
      if (id === "port") {
        const maxHp=(heroDef?.hp||100)+gearHp(),currentHp=Math.min(maxHp,save.fieldHp??maxHp);
        const now=Date.now(),readyAt=save.locationCooldowns.riverBridge||0;
        if(currentHp>=maxHp){say("У реки спокойно. Вика уже полностью здорова — отдых сейчас не нужен.");return;}
        if(now<readyAt){
          const mins=Math.max(1,Math.ceil((readyAt-now)/60000));
          say(`Ты уже отдыхал у реки. Следующая передышка будет доступна примерно через ${mins} мин.`);return;
        }
        const healed=Math.min(20,maxHp-currentHp),nextHp=currentHp+healed;
        setSave(state=>({...state,fieldHp:nextHp,locationCooldowns:{...state.locationCooldowns,riverBridge:now+10*60*1000}}));
        haptic("success");say(`Передышка у реки восстановила ${healed} здоровья. Следующий отдых здесь — через 10 минут.`);return;
      }
      if (id === "rune") {
        say("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");
        return;
      }
      if (id === "ashgrove") {
        say("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");
        return;
      }
      if (id === "runefield") {
        say("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");
        return;
      }
      if(id==="whisperStone"){
        if(save.done.includes("whisper:battle")){
          say("Камень шепчет имя побеждённого стража. Его награда уже хранится в Чертоге.");
        }else if(save.done.includes("whisper:wisdom")){
          say("Камень помнит твой верный ответ. Янтарный свет остаётся спокойным.");
        }
        return;
      }
      if (id === "oldfarm") {
        if(save.done.includes('chest:norns')&&!save.done.includes('bridge:boards')){
          setSave(state=>({...state,done:[...new Set([...state.done,'bridge:boards'])]}));
          haptic('success');say('✅ В амбаре Старого хутора найдены доски для Северного моста.');return;
        }
        if(save.done.includes("forest:past")&&!save.done.includes("forest:past:reward")){
          setSave(state=>({...state,sparks:state.sparks+20,done:[...new Set([...state.done,"forest:past:reward"])]}));
          haptic("success");say("Под старой телегой найден тайник: +20 Капель силы.");return;
        }
        if(save.stock.herbs>=4){
          setSave(state=>state.stock.herbs<4?state:{...state,
            stock:{...state.stock,herbs:Math.max(0,state.stock.herbs-4)},
            potions:[...state.potions,'northernMoss'],
            lootCounts:lootCountAdd(state.lootCounts,['northernMoss'])
          });
          haptic("success");say("В старой сушильне приготовлен Эликсир северного мха. Потрачено 4 лечебные травы.");return;
        }
        say(`В Старом хуторе сохранилась сушильня. Здесь можно приготовить Эликсир северного мха за 4 лечебные травы. Сейчас трав: ${save.stock.herbs}/4.`);
        return;
      }
      if (id === "forestCache") {
        if(!save.done.includes('bridge:north:repaired')){say('Золотой сундук защищён кольцом. Выполни задание Бьёрна, отремонтируй Северный мост и перейди на другой берег.');return;}
        if(!save.done.includes('chest:gold')){
          setSave(s=>s.done.includes('chest:gold')?s:{...s,
            done:[...new Set([...s.done,'chest:gold'])],sparks:s.sparks+55,
            runes:[...new Set([...s.runes,'raidoPath','algizGuard','fehuWealth'])],
            potions:[...s.potions,'northernMoss','frostDraught','lifeElixir'],
            ownedWeapons:[...new Set([...s.ownedWeapons,'axe','spear','sword2'])],
            ownedShields:[...new Set([...s.ownedShields,'Shield_Heater_2.glb'])],
            lootCounts:lootCountAdd(s.lootCounts,['axe','spear','sword2','Shield_Heater_2.glb','raidoPath','algizGuard','fehuWealth','northernMoss','frostDraught','lifeElixir'])
          });
          haptic('success');setHouseDialogId('goldChest');setHouseDialog('✅ Золотой сундук открыт! +55 Капель силы, Северный топор, Копьё, Меч II, Щит II, руны Райдо ᚱ, Альгиз ᛉ и Феху ᚠ, а также три эликсира. Следующая богатая цель — серебряный сундук в Лесу Ходдмимира.');
        } else say('Золотой сундук уже открыт. Найденные руны, эликсиры и оружие хранятся в Чертоге.');
        return;
      }
      if (id === "forestWhisper") {
        if (!save.done.includes("forest:whisper")) {
          setSave(s => ({ ...s, sparks: s.sparks + 16, done: [...new Set([...s.done, "forest:whisper"])] }));
          haptic("success");
          say("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨");
        } else say("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова.");
        return;
      }
      if (id === "heroHome") {
        say("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");
        return;
      }
      if (id === "hunterCamp") {
        const now=Date.now(),readyAt=save.locationCooldowns.hunterCamp||0;
        if(now<readyAt){
          const mins=Math.max(1,Math.ceil((readyAt-now)/60000));
          say(`Стоянка уже осмотрена. Новые пригодные припасы можно поискать примерно через ${mins} мин.`);return;
        }
        setSave(state=>({...state,
          sparks:state.sparks+(state.done.includes("forest:camp")?0:14),
          stock:{...state.stock,wood:state.stock.wood+1,twigs:state.stock.twigs+2},
          done:[...new Set([...state.done,"forest:camp"])],
          locationCooldowns:{...state.locationCooldowns,hunterCamp:now+15*60*1000}
        }));
        haptic("success");
        say((save.done.includes("forest:camp")?"":"Забытая стоянка исследована: +14 Капель силы. ")+"Найдены припасы: +1 древесина и +2 ветки.");
        return;
      }
      if (id === "deepGrove") {
        const now=Date.now(),readyAt=save.locationCooldowns.deepGrove||0;
        if(now<readyAt){
          const mins=Math.max(1,Math.ceil((readyAt-now)/60000));
          say(`Редкие травы ещё восстанавливаются. Вернись примерно через ${mins} мин.`);return;
        }
        setSave(state=>({...state,
          sparks:state.sparks+(state.done.includes("forest:grove")?0:17),
          stock:{...state.stock,herbs:state.stock.herbs+2},
          done:[...new Set([...state.done,"forest:grove"])],
          locationCooldowns:{...state.locationCooldowns,deepGrove:now+15*60*1000}
        }));
        haptic("success");
        say((save.done.includes("forest:grove")?"":"Глубокая роща открыта: +17 Капель силы. ")+"Собраны редкие лечебные травы: +2.");
        return;
      }
      if (id === "fallenAsh") {
        if (!save.done.includes("forest:ash")) {
          setSave(s => ({ ...s, sparks: s.sparks + 21, done: [...new Set([...s.done, "forest:ash"])] }));
          haptic("success");
          say("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨");
        } else say("Старый ясень неподвижен. Под корой всё ещё виден след руны.");
        return;
      }
      if (id === "deer") {
        say("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");
        return;
      }
      if (id === "angelicChest") {
        if(!save.done.includes('guardian:stage:hoddmimir')){
          say('Серебряная печать не открывается. Сначала заверши последнее испытание Мидгарда в Лесу Ходдмимира.');return;
        }
        if(!save.done.includes('chest:angelic')){
          setSave(s=>s.done.includes('chest:angelic')?s:{...s,
            done:[...new Set([...s.done,'chest:angelic'])],
            sparks:s.sparks+80,
            runes:[...new Set([...s.runes,'sowiloLight','othalaLegacy','dagazDawn'])],
            potions:[...s.potions,'hoddmimirElixir','lifeElixir','frostDraught'],
            ownedWeapons:[...new Set([...s.ownedWeapons,'claymore','hammerDouble'])],
            ownedShields:[...new Set([...s.ownedShields,'Shield_Round_2.glb','Shield_Celtic_Golden.glb'])],
            lootCounts:lootCountAdd(s.lootCounts,['claymore','hammerDouble','Shield_Round_2.glb','Shield_Celtic_Golden.glb','sowiloLight','othalaLegacy','dagazDawn','hoddmimirElixir','lifeElixir','frostDraught'])
          });
          haptic('success');
          say('Серебряный ангельский сундук открыт! +80 Капель силы, Клеймор, Двойной молот, Серебряный и Золотой щиты, редкие руны Соулу ᛋ, Отала ᛟ и Дагаз ᛞ, Эликсир Ходдмимира, Эликсир жизни и Морозный настой.');
        } else {
          say('Серебряный ангельский сундук уже открыт. Руна Соулу, Серебряный щит и Эликсир Ходдмимира хранятся в Чертоге.');
        }
        return;
      }
      if (id === "hoddmimir") {
        say("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");
        return;
      }
      if (id === "ratatosk") {
        if (save.done.includes("forest:future")) {
          if (!save.done.includes("forest:future:reward")) {
            setSave(s => ({ ...s, sparks: s.sparks + 20, done: [...new Set([...s.done, "forest:future:reward"])] }));
            haptic("success");
            say("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨");
          } else {
            say("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор.");
          }
        } else {
          say("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");
        }
        return;
      }
      if (id === "forestEvent") {
        if (save.done.includes("forest:choice")) {
          say("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");
        }
        return;
      }
      if (id === "forestEvent:past") {
        setSave(s => ({ ...s, sparks: s.sparks + 12, done: [...new Set([...s.done, "forest:choice", "forest:past"])] }));
        haptic("success");
        say("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");
        return;
      }
      if (id === "forestEvent:present") {
        setSave(s => ({ ...s, sparks: s.sparks + 12, done: [...new Set([...s.done, "forest:choice", "forest:present"])] }));
        haptic("success");
        say("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");
        return;
      }
      if (id === "forestEvent:future") {
        setSave(s => ({ ...s, sparks: s.sparks + 12, done: [...new Set([...s.done, "forest:choice", "forest:future"])] }));
        haptic("success");
        say("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");
        return;
      }
      if (id === "event") {
        say("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");
        return;
      }
      if (id.startsWith("ritual:")) {
        const ritual = id.slice(7);
        const names: Record<string,string> = {
          mimir: "Око Мимира", norn: "Нить Норн", ash: "Дыхание Ясеня",
          fire: "Огненный обет", ice: "Ледяной обет", ygg: "Зов Иггдрасиля"
        };
        const power: Record<string,string> = { mimir: "mimirEye", norn: "nornThread", ash: "ashBreath", fire: "fireOath", ice: "iceOath", ygg: "yggdrasilCall" };
        const key = power[ritual];
        if (!key) return;
        if (save.powers.includes(key)) { say(names[ritual] + " уже пробуждён. Его сила ждёт своего часа."); return; }
        setSave(s => ({ ...s, sparks:s.sparks+5, powers: [...new Set([...s.powers, key])], done: [...new Set([...s.done, "ritual:" + ritual])] }));
        const text: Record<string,string> = {
          mimir: "Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",
          norn: "Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",
          ash: "Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",
          fire: "Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",
          ice: "Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",
          ygg: "Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."
        };
        haptic("success"); say(text[ritual]+" +5 Капель силы.");
        return;
      }
    };

    return <Midgard3D
      h={heroDef}
      skin={save.heroSkin}
      weapon={save.heroWeapon}
      gear={save.equippedGear}
      gearLevels={save.forgeLevels}
      shieldAsset={save.shieldAsset}
      on={interact}
      eventDone={save.done.includes("forest:choice")}
      start={midgardReturn.current}
      rememberPosition={rememberMidgardPosition}
      northBridgeRepaired={save.done.includes("bridge:north:repaired")}
      northBridgeReady={save.done.includes('gather:carpenter')||(save.done.includes('chest:norns')&&save.done.includes('bridge:boards')&&save.done.includes('bridge:fittings'))}
      goldChestOpened={save.done.includes('chest:gold')}
      whisperResolved={save.done.includes("whisper:battle")||save.done.includes("whisper:wisdom")}
      guardianResolved={MIDGARD_GUARDIAN_ORDER.filter(id=>save.done.includes("guardian:stage:"+id)||save.done.includes("guardian:"+id)) as unknown as string[]}
      whisperStats={{
        maxHp:heroDef.hp+gearHp(),
        attack:heroDef.str+WEAPON_POWER[save.heroWeapon]+forgeLevel(save.heroWeapon)+(activeRuneDef()?.attack||0),
        runeAttack:heroDef.en+2+(activeRuneDef()?.rune||0),
        defense:gearDefense()+(activeRuneDef()?.defense||0),
        power:heroPowerPips()
      }}
      onWhisperCorrect={finishWhisperCorrect}
      onWhisperWin={finishWhisperBattle}
      banditRespawnAt={banditRespawnAt}
      onBanditDefeated={scheduleBanditRespawn}
      onBanditReward={rewardBandit}
      onBanditKnockout={banditKnockout}
      potions={save.potions}
      runes={save.runes}
      equippedRune={save.equippedRune}
      fieldHp={save.fieldHp}
      frostGuard={save.frostGuard}
      onUsePotion={useInventoryPotion}
      onEquipRune={equipInventoryRune}
      onFieldHpChange={hp=>setSave(s=>({...s,fieldHp:hp}))}
      onFrostGuardHit={()=>setSave(s=>({...s,frostGuard:Math.max(0,s.frostGuard-1)}))}
      gathered={save.gathered}
      stock={save.stock}
      onGather={gatherResource}
    />;
  }

  return (
    <div className="content">
      <BgImg name={realm.id} className="bgimg" />
      <div className="veil" />

      <div className="banner">
        <span className="bemoji">{realm.emoji}</span>
        <div>
          <div className="bname">{realm.name}</div>
          <div className="btag">{realm.tag}</div>
        </div>
      </div>

      <button className="gate" onClick={() => openGate(realm)}>
        <span className="gwrap">
          <span
            className="gate-ring"
            style={{ borderColor: realm.color }}
          />
          <span
            className="gate-core"
            style={{
              borderColor: realm.color,
              color: realm.color,
              background: `radial-gradient(circle, ${realm.dark}, #050705 75%)`,
            }}
          >
            {realm.runeSym}
          </span>
        </span>

        <span
          className="mname"
          style={{
            color: realm.color,
            borderColor: realm.glow,
          }}
        >
          {save.artifacts.includes(realm.id)
            ? "Мир покорён"
            : "Врата мира"}
        </span>
      </button>

      <div className="hint">
        Нажми на врата — хозяин мира ждёт загадок
      </div>
    </div>
  );
})()}
      {screen.t === "trial" && (() => {
        const realm = REALMS.find(r => r.id === screen.id)!;
        const m = MASTERS[realm.id];
        const idx = trialIdx(realm.id);
        if (idx >= 3) return (
          <div className="scroll"><div className="card center"><div className="big">🏺</div><div className="qhead2">Мир покорён!</div><p className="dim">Артефакт: {ARTIFACTS[realm.id]}</p><button className="btn gold" onClick={() => go({ t: "realm", id: realm.id })}>К вратам</button></div></div>
        );
        const q = QUESTS[realm.id][idx];
        return (
          <div className="scroll">
            <div className="mhead">
              <span className="mface" style={{ borderColor: realm.color, color: realm.color }}><BgImg name={MASTER_IMG[realm.id]} className="himg" />{m.sym}</span>
              <span className="mname2" style={{ color: realm.color }}>{m.name}</span>
              <span className="mtitle">{m.title} • испытание {idx + 1} из 3</span>
            </div>
            {idx === 0 && <div className="greet">«{m.greet}»</div>}
            <div className="cloud">
              <div className="riddle">{q.q}</div>
              {q.a.map((a, i) => (
                <button key={i} className={"ans" + (res !== null ? (i === q.c ? " good" : i === res ? " bad" : " off") : removed === i ? " off" : "")} onClick={() => answer(realm.id, i)}>{a}</button>
              ))}
              {heroDef?.id === "elf" && !whisper && res === null && <button className="btn rune" onClick={() => useWhisper(realm.id)}>🌀 Шёпот ветров</button>}
              {res !== null && (res === q.c
                ? <button className="btn gold" onClick={() => nextStep(realm.id)}>Открыть сундук →</button>
                : <button className="btn" onClick={() => startFight(realm.id)}>⚔ В бой!</button>)}
            </div>
          </div>
        );
      })()}

      {screen.t === "fight" && (() => {
        const realm = REALMS.find(r => r.id === screen.id)!;
        const m = MASTERS[realm.id];
        return (
          <div className="scroll">
            <div className="duel">
              {combatFx&&<i key={combatFx.key} className={"battle-fx "+combatFx.kind}/>}
              <div className="dside">
                <span className="dface" style={{ borderColor: realm.color, color: realm.color }}><BgImg name={MASTER_IMG[realm.id]} className="himg" />{m.sym}</span>
                <span className="dname" style={{ color: realm.color }}>{m.name}</span>
                <span className="dhp"><span className="dhpfill" style={{ width: Math.max(0, (mhp / m.hp) * 100) + "%", background: realm.color }} /></span>
                <span className="dnum">{mhp}/{m.hp}</span>
                <span className="energy-label">энергия</span>
                <span className="denergy">{Array.from({ length: COMBAT_ENERGY }).map((_, i) => {const c=combatEnergyColor(men);return <span key={i} className={"pip"+(i<men?" on":"")} style={i<men?{background:c,boxShadow:`0 0 7px ${c}`}:{}}/>;})}</span>
              </div>
              <span className="dvs">⚔</span>
              <div className="dside">
                <span className="dface" style={{ borderColor: heroDef!.color, color: heroDef!.color }}><BgImg name={heroDef!.img} className="himg" />{heroDef!.sym}</span>
                <span className="dname" style={{ color: heroDef!.color }}>{save.hero!.name}</span>
                <span className="dhp"><span className="dhpfill" style={{ width: Math.min(100,Math.max(0,(hhp/Math.max(1,hmax))*100))+"%", background: "#7ee787" }} /></span>
                <span className="dnum">{hhp}/{hmax}</span>
                <span className="energy-label">энергия</span>
                <span className="denergy">{Array.from({ length: COMBAT_ENERGY }).map((_, i) => {const c=combatEnergyColor(hen);return <span key={i} className={"pip"+(i<hen?" on":"")} style={i<hen?{background:c,boxShadow:`0 0 7px ${c}`}:{}}/>;})}</span>
              </div>
            </div>
            <div className="flog">{flog}</div>
            {!over && (<div className="acts">
              <button className="btn gold" onClick={() => fightAct(realm.id, "hit")}>⚔ Удар: {heroDef!.weapon} (−1 энергия)</button>
              <button className="btn rune" onClick={() => fightAct(realm.id, "rune")}>🌀 Руническое заклинание (−2 энергии)</button>
              <button className="btn shield" onClick={() => fightAct(realm.id, "shield")}>🛡 Щит (−1 энергия)</button>
              <button className="btn ghost" onClick={() => fightAct(realm.id, "restore")}>🌿 Перевести дыхание (+{2+(equipped('boots')?1:0)+(gearLevel('boots')>=3?1:0)} энергии)</button>
            </div>)}
            {over === "win" && <button className="btn gold" onClick={() => nextStep(realm.id)}>Забрать награду →</button>}
            {over === "lose" && <button className="btn ghost" onClick={() => go({ t: "tree" })}>Древо возрождает тебя</button>}
          </div>
        );
      })()}

      {screen.t === "hero" && heroDef && save.hero && (
        <div className="scroll">
          <div className="card center">
            <span className="hface bigface" style={{ borderColor: heroDef.color, color: heroDef.color, background: "linear-gradient(160deg,#101613,#0a0a0a)" }}><BgImg name={heroDef.img} className="himg" /></span>
            <div className="qhead2" style={{ color: heroDef.color }}>{save.hero.name} • {heroDef.race}</div>
            <div className="stats">
              <div className="stat"><b>⚔ {heroDef.str}</b><span>сила</span></div>
              <div className="stat"><b>✨ {heroDef.en}</b><span>энергия</span></div>
              <div className="stat"><b>❤ {heroDef.hp+gearHp()}</b><span>здоровье</span></div>
            </div>
            <div className="hrow">🎭 Облик героя</div>
            <div className="chips">
              <button
                className={"chip"+(save.heroSkin==="viking"?" on":"")}
                onClick={()=>{setSave(s=>({...s,heroSkin:"viking"}));haptic();}}
              >Викинг</button>
              <button
                className={"chip"+(save.heroSkin==="valkyrie"?" on":"")}
                onClick={()=>{setSave(s=>({...s,heroSkin:"valkyrie"}));haptic();}}
              >Валькирия</button>
            </div>
            <div className="hrow">🗡 Оружие в руке</div>
            <div className="chips">
              {(['default','knife','axe','mace','spear'] as HeroWeapon[]).filter(id=>id==='default'||save.ownedWeapons.includes(id)).map(id=><button key={id}
                className={"chip"+(save.heroWeapon===id?" on":"")}
                onClick={()=>{setSave(s=>({...s,heroWeapon:id}));haptic();}}
              >{id==='default'?(save.heroSkin==='valkyrie'?'Меч валькирии':'Секира викинга'):FORGE_WEAPON_MODELS.find(item=>item[2]===id)?.[1]} · +{WEAPON_POWER[id]}</button>)}
            </div>
            <div className="dim" style={{marginTop:8}}>
              Найденное оружие можно менять здесь и на стене кузницы.
            </div>
            <div className="hrow">🛡 Экипировка</div>
            <div className="chips">{GEAR_IDS.map(id=><button key={id} className={'chip'+(equipped(id)?' on':'')} onClick={()=>toggleGear(id)}>{id==='armor'?'Броня':id==='helmet'?'Шлем':id==='shield'?'Щит':'Сапоги'} · {equipped(id)?'надето':'надеть'}</button>)}</div>
            <div className="hrow">🌀 {heroDef.ability}: {heroDef.abilityDesc}</div>
            <div className="hrow"><SparkDrop/> Капель силы: <b>{save.sparks}</b> • 🏺 Артефактов: <b>{save.artifacts.length}/9</b></div>
            {save.artifacts.length > 0 && <div className="hrow">🏺 {save.artifacts.map(a => ARTIFACTS[a]).join(", ")}</div>}
          </div>
        </div>
      )}

      {screen.t === "gift" && (() => {
        const claimed = save.gift === today();
        const d = save.gift ? Math.round((Date.parse(today()) - Date.parse(save.gift)) / 86400000) : 99;
        const next = d <= 2 ? (save.streak % 7) + 1 : 1;
        const hl = claimed ? save.streak : next;
        return (
          <div className="scroll">
            <div className="card center"><div className="big">🎁</div><div className="qhead2">Дар Древа</div><p className="dim">Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново.</p>
              <div className="days">{LADDER.map((v, i) => (<span key={i} className={"day" + (i + 1 === hl ? " on" : i + 1 < hl && claimed ? " done" : "")}><b>{v}</b>день {i + 1}</span>))}</div>
              {claimed ? <button className="btn" disabled>Дар получен • вернись завтра</button> : <button className="btn gold" onClick={claimGift}>Забрать дар +{LADDER[next - 1]} ✨</button>}
            </div>
            <div className="card center"><div className="big">⏳</div><div className="qhead2">Дозор героя</div><p className="dim">Капли силы собираются, даже когда приложение закрыто: 3 в час, до 12 часов.</p>
              <button className="btn gold" onClick={collectWatch}>Завершить дозор · +{watchGain()} <SparkDrop/></button>
            </div>
          </div>
        );
      })()}

      {screen.t === "forge" && (()=>{
        const gear=forgeItems.filter(item=>item.kind==="gear");
        const forgeButton=(item:typeof forgeItems[number])=>{
          const level=forgeLevel(item.id==='shield'?shieldForgeKey(save.shieldAsset):item.id);
          const maxed=level>=(item.id==='shield'?10:5);
          const free=!save.forgeFreeUsed&&item.owned&&!maxed;
          const label=<><span className="fi-icon">{item.icon}</span><span className="fi-name">{item.id==='shield'?FORGE_WEAPON_MODELS.find(([asset])=>asset===save.shieldAsset)?.[1]:item.name}</span><span className="fi-level">{level>0?"Закалка +"+level:"Без улучшений"}</span></>;
          if(item.kind==='gear'){
            const on=equipped(item.id as GearId);
            return <div key={item.id} className={'forge-item'+(on?' selected':'')}>{label}<div className="forge-gear-actions">
              <button className={on?'on':''} onClick={()=>toggleGear(item.id as GearId)}>{on?'Снять':'Надеть'}</button>
              <button disabled={maxed} onClick={()=>improveForgeItem(item)}>{maxed?'★':free?'0':<>{forgeCost(item.id)}<SparkDrop/></>}</button>
            </div></div>;
          }
          return null;
        };
        return <div key="forge" className="scroll forge-screen" ref={element=>{if(element&&!element.dataset.forgeEntered){element.scrollTop=0;element.dataset.forgeEntered='yes';}}}>
          <div className="forge-head">
            <div className="forge-title">Кузница Вёлунда</div>
            <div className="forge-master">«Сталь помнит каждый бой. Отдай её огню — и она вернётся сильнее».</div>
            <div className="forge-advice"><b>Совет:</b> выбери оружие или щит на стене. Их предел закалки +10; броня, шлем и сапоги — до +5.</div>
            <div className="forge-wallet"><span>Запас:</span><b><SparkDrop/> {save.sparks}</b><span>Капель силы</span></div>
          </div>
          <div className={"forge-free"+(!save.forgeFreeUsed?" ready":"")}>{save.forgeFreeUsed
            ? "Следующая закалка оплачивается Каплями силы. Цена растёт вместе с уровнем предмета."
            : "Дар кузнеца: первое улучшение любого доступного предмета бесплатно."}</div>
          <div className="forge-group-title">Стена оружия Вёлунда</div>
          <ForgeWeaponWall owned={save.ownedWeapons} ownedShields={save.ownedShields} selected={save.heroWeapon} selectedShield={equipped('shield')?save.shieldAsset:null} onChoose={chooseForgeWeapon}/>
          <div className="forge-equipped"><span>В руке: {save.heroWeapon==='default'?(save.heroSkin==='valkyrie'?'Меч валькирии':'Секира викинга'):FORGE_WEAPON_MODELS.find(item=>item[2]===save.heroWeapon)?.[1]} · сила +{WEAPON_POWER[save.heroWeapon]} · закалка +{forgeLevel(save.heroWeapon)}</span>
            <button disabled={forgeLevel(save.heroWeapon)>=10} onClick={()=>improveForgeItem(forgeItems.find(item=>item.id===save.heroWeapon)!)}>{forgeLevel(save.heroWeapon)>=10?'Максимум +10':<>Закалить {save.forgeFreeUsed?<>{forgeCost(save.heroWeapon)}<SparkDrop/></>:'бесплатно'}</>}</button></div>
          <div className="forge-group-title">Экипировка</div>
          <div className="forge-grid">{gear.map(forgeButton)}</div>
                    <div className="forge-note"><b>Закалка действует в бою.</b> Оружие усиливает обычный удар; броня и шлем добавляют здоровье и снижают урон; щит крепче держит защиту; улучшенные сапоги помогают быстрее восстановить энергию.</div>
          <button className="forge-exit" onClick={()=>{haptic();go({t:"realm",id:"midgard"});}}>🔥 Открыть дверь и вернуться в Мидгард</button>
        </div>;
      })()}

      {screen.t === "hall" && (
        <div className="scroll">
          <div className="card center">
            <div className="big">🏛️</div>
            <div className="qhead2">Чертог героя</div>
            <div className="stats">
              <div className="stat"><b><SparkDrop/> {save.sparks}</b><span>Капли силы</span></div>
              <div className="stat"><b>🏺 {save.artifacts.length}/9</b><span>артефакты</span></div>
            </div>
            <div className="rank">🏆 Ранг: {rank(save.sparks)}</div>
            {save.hero && heroDef && <p className="dim">Герой: {save.hero.name} • {heroDef.race} • испытаний пройдено: {save.trials.length}</p>}
          </div>
          <div className="hall-grid">
            <div className="hall-section">
              <span className="hall-icon">⚔️</span><h3>Оружейный склад</h3>
              <p>{save.heroWeapon==='default'?(save.heroSkin==='valkyrie'?'Меч валькирии':'Секира викинга'):FORGE_WEAPON_MODELS.find(item=>item[2]===save.heroWeapon)?.[1]} сейчас в руке. Все найденные копии остаются на складе Чертога и позже используются для крафта.</p>
              <div className="hall-slots">{FORGE_WEAPON_MODELS.filter(([, ,id])=>id&&save.ownedWeapons.includes(id as HeroWeapon)).map(([,name,id])=>{
                const weaponId=id as HeroWeapon,count=Math.max(1,Number(save.lootCounts[weaponId])||1);
                return <button key={weaponId} title={name+(count>1?' · всего '+count:'')} className={'hall-slot'+(save.heroWeapon===weaponId?' on':'')} onClick={()=>{setSave(s=>({...s,heroWeapon:weaponId}));haptic();}}><span>{weaponDisplayIcon(weaponId)}</span>{count>1&&<small>×{count}</small>}</button>;
              })}</div>
              <span className="hall-count">Уникальных: {save.ownedWeapons.length} · дублей: {save.ownedWeapons.reduce((sum,id)=>sum+Math.max(0,(Number(save.lootCounts[id])||1)-1),0)}</span>
            </div>
            <div className="hall-section">
              <span className="hall-icon">🛡️</span><h3>Экипировка</h3>
              <p>Броня, щиты, шлемы и сапоги. Выбранное снаряжение будет сразу появляться на герое.</p>
              <div className="hall-slots"><button className="hall-slot on" onClick={()=>say("Надета базовая броня.")}>♜</button><button className="hall-slot on" onClick={()=>say("Экипирован базовый щит.")}>◉</button><button className="hall-slot on" onClick={()=>say("Надеты базовые сапоги.")}>⌁</button></div>
              <span className="hall-count">Базовый набор</span>
            </div>
            <div className="hall-section inventory-hall"><InventorySection kind="potions" potions={save.potions} runes={save.runes} equippedRune={save.equippedRune} hp={Math.min((heroDef?.hp??100)+gearHp(),save.fieldHp??(heroDef?.hp??100)+gearHp())} maxHp={(heroDef?.hp??100)+gearHp()} frostGuard={save.frostGuard} onUsePotion={useInventoryPotion} onEquipRune={equipInventoryRune}/></div>
            <div className="hall-section inventory-hall"><InventorySection kind="runes" potions={save.potions} runes={save.runes} equippedRune={save.equippedRune} hp={Math.min((heroDef?.hp??100)+gearHp(),save.fieldHp??(heroDef?.hp??100)+gearHp())} maxHp={(heroDef?.hp??100)+gearHp()} frostGuard={save.frostGuard} onUsePotion={useInventoryPotion} onEquipRune={equipInventoryRune}/></div>
          </div>
          <button className="craft-entry" onClick={()=>{haptic();go({t:"craft"});}}><b>🔥 Перейти в локацию крафта</b><span>Соединяй оружие, материалы и Капли силы в новые предметы.</span></button>
        </div>
      )}

      {screen.t === "craft" && (
        <div className="scroll craft-screen">
          <div className="card center" style={{background:"rgba(13,12,10,.84)",borderColor:"#71431f"}}>
            <div className="craft-fire">🔥</div>
            <div className="qhead2" style={{color:"#ffc45e"}}>Кузня Чертога</div>
            <p className="dim">Для крафта используется одна лишняя копия оружия. Основной экземпляр остаётся на складе. Выбери оружие, материал и подтверди создание.</p>
            <div className="craft-recipe">
              <button className={"craft-slot"+(craftWeapon?" selected":"")} onClick={()=>setCraftPicker(craftPicker==="weapon"?null:"weapon")}>
                <b>{craftWeapon?weaponDisplayIcon(craftWeapon):"＋"}</b>{craftWeapon?lootDisplayName(craftWeapon):"оружие"}
                {craftWeapon&&<small>копий: {craftWeaponCopies}</small>}
              </button>
              <span className="craft-op">＋</span>
              <button className={"craft-slot"+(craftMaterial?" selected":"")} onClick={()=>setCraftPicker(craftPicker==="material"?null:"material")}>
                <b>{craftMaterial?craftMaterialIcon(craftMaterial):"＋"}</b>{craftMaterial?craftMaterialName(craftMaterial):"материал"}
                {craftMaterial&&<small>в запасе: {craftMaterialCount}</small>}
              </button>
              <span className="craft-op">＝</span>
              <span className={"craft-slot"+(selectedCraftRecipe?" result":"")}>
                <b>{selectedCraftRecipe?weaponDisplayIcon(selectedCraftRecipe.result):"?"}</b>
                {selectedCraftRecipe?lootDisplayName(selectedCraftRecipe.result):"результат"}
              </span>
            </div>

            {craftPicker==="weapon"&&<div className="craft-picker">
              <div className="craft-picker-title">Выбери лишнюю копию оружия</div>
              <div className="craft-choices">
                {FORGE_WEAPON_MODELS.filter(([, ,id])=>id&&id!=="default"&&id!=="swordGolden"&&save.ownedWeapons.includes(id as HeroWeapon)).map(([,name,id])=>{
                  const count=Math.max(0,Number(save.lootCounts[id])||0),usable=count>=2;
                  return <button key={id} disabled={!usable} className={"craft-choice"+(craftWeapon===id?" on":"")} onClick={()=>{setCraftWeapon(id as HeroWeapon);setCraftPicker(null);}}>
                    <span style={{fontSize:20}}>{weaponDisplayIcon(id)}</span><span><b>{name}</b><small>{usable?"лишних копий: "+(count-1):"нужен дубликат"}</small></span>
                  </button>;
                })}
              </div>
            </div>}

            {craftPicker==="material"&&<div className="craft-picker">
              <div className="craft-picker-title">Выбери материал из корзины</div>
              <div className="craft-choices">
                {(["wood","twigs","herbs"] as CraftMaterial[]).map(id=><button key={id} disabled={save.stock[id]<=0} className={"craft-choice"+(craftMaterial===id?" on":"")} onClick={()=>{setCraftMaterial(id);setCraftPicker(null);}}>
                  <span style={{fontSize:20}}>{craftMaterialIcon(id)}</span><span><b>{craftMaterialName(id)}</b><small>в корзине: {save.stock[id]}</small></span>
                </button>)}
              </div>
            </div>}

            <div className="hrow"><SparkDrop/> Капли силы: <b>{save.sparks}</b></div>
            {selectedCraftRecipe?<div className="craft-cost">
              Рецепт: 1 лишняя копия <b>{lootDisplayName(selectedCraftRecipe.weapon)}</b> + {selectedCraftRecipe.amount} × {craftMaterialName(selectedCraftRecipe.material)} + {selectedCraftRecipe.cost} Капель силы.
              <br/>Результат: <b>{lootDisplayName(selectedCraftRecipe.result)}</b>.
            </div>:<div className="craft-cost">Выбери оружие и материал. Если сочетание подходит, здесь появится рецепт.</div>}
            <button className="btn gold" disabled={!craftReady} onClick={performCraft}>{selectedCraftRecipe?"Создать: "+lootDisplayName(selectedCraftRecipe.result):"Выбери рецепт"}</button>

            <div className="steel-wallet">⚙️ Руническая сталь: <b>{save.runeSteel}</b></div>

            <div className="steel-section">
              <h3>⚒ Разбор лишнего оружия</h3>
              <p>Последний экземпляр всегда остаётся на складе. Разобрать можно только дубликат; Золотой меч разбору не подлежит.</p>
              <div className="steel-list">
                {save.ownedWeapons.filter(id=>id!=="default"&&id!=="swordGolden"&&(Number(save.lootCounts[id])||0)>1&&(RUNE_STEEL_YIELD[id]||0)>0).length===0
                  ? <div className="dim">Сейчас нет лишнего оружия для разбора.</div>
                  : save.ownedWeapons.filter(id=>id!=="default"&&id!=="swordGolden"&&(Number(save.lootCounts[id])||0)>1&&(RUNE_STEEL_YIELD[id]||0)>0).map(id=>{
                      const copies=Number(save.lootCounts[id])||0,yieldSteel=RUNE_STEEL_YIELD[id]||0;
                      return <div key={id} className="steel-row"><span><b>{weaponDisplayIcon(id)} {lootDisplayName(id)}</b><small>лишних копий: {copies-1} · выход: {yieldSteel} стали</small></span><button onClick={()=>dismantleWeapon(id)}>Разобрать +{yieldSteel}</button></div>;
                    })}
              </div>
            </div>

            <div className="steel-section">
              <h3>⚙ Крафт из Рунической стали</h3>
              <p>Редкие предметы создаются без обязательной копии конкретного оружия. Чертежи открываются по мере прохождения Мидгарда.</p>
              <div className="steel-list">
                {STEEL_CRAFT_RECIPES.map(recipe=>{
                  const locked=guardianProgressCount<recipe.requires;
                  const ready=!locked&&save.runeSteel>=recipe.steel&&save.stock[recipe.material]>=recipe.amount&&save.sparks>=recipe.cost;
                  return <div key={recipe.id} className={"steel-recipe"+(locked?" locked":"")}><span><b>{recipe.resultShield?"🛡️":"⚔️"} {recipe.name}</b><small>{locked?"Откроется после "+recipe.requires+" испытаний Мидгарда":recipe.steel+" стали + "+recipe.amount+" × "+craftMaterialName(recipe.material)+" + "+recipe.cost+" Капель силы"}</small></span><button disabled={!ready} onClick={()=>craftRuneSteelItem(recipe)}>{locked?"Закрыто":"Создать"}</button></div>;
                })}
              </div>
            </div>

            <div className="dim" style={{margin:"10px 0 5px"}}>
              Дубликаты трофеев для крафта: {Object.values(save.lootCounts).filter(n=>n>1).reduce((sum,n)=>sum+(n-1),0)} шт.
              {Object.entries(save.lootCounts).some(([,count])=>count>1)&&<div style={{marginTop:5,lineHeight:1.45}}>
                {Object.entries(save.lootCounts).filter(([,count])=>count>1).map(([id,count])=>lootDisplayName(id)+" ×"+(count-1)).join(" • ")}
              </div>}
            </div>
            <div className="craft-recipes"><b>Открытые рецепты Мидгарда:</b><br/>
              Боевой кинжал + 2 ветки → Кинжал II · Северный топор + 3 древесины → Двойной топор · Малый топор + 2 древесины → Двойной топор · Малый молот + 3 древесины → Двойной молот · Меч II + 3 древесины → Большой меч · Копьё + 3 ветки → Боевая коса.
            </div>
            <button className="btn ghost" onClick={()=>{setCraftPicker(null);go({t:"hall"});}}>Вернуться в Чертог</button>
          </div>
        </div>
      )}

      {save.hero && screen.t!=="forge" && (
        <div className="nav">
          {NAV.map(n => (<button key={n.id} className={"navbtn" + (isNav(n.id) ? " on" : "")} onClick={() => go(navScreen(n.id))}><span className="ic">{n.ic}</span>{n.t}</button>))}
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
      {houseDialog&&screen.t==="realm"&&screen.id==="midgard"&&<div className="house-dialog-backdrop" onPointerDown={e=>e.stopPropagation()}>
        <div className="house-dialog-panel" role="dialog" aria-modal="true" aria-label="Разговор у дома">
          <h3>{houseDialogId==="goldChest"?"Золотой сундук":houseDialogId==="northBridge"?"Северный мост":houseDialogId==="oldfarm"?"Старый хутор":houseDialogId==="carpenter"?"Плотник Бьёрн":houseDialogId==="herbalist"?"Травница Сигрид":houseDialogId==="craftsman"?"Ремесленник Торвальд":"Разговор у дома"}</h3><p>{houseDialog}</p>
          {houseDialogId==="carpenter"&&<div className="house-quest-status"><b>Задания Бьёрна</b>
            <span>{save.done.includes('gather:carpenter')?'✅ Сдано: 3 древесины и 3 ветки. Материалы списаны из запаса. Награда: 8 Капель силы.':`Собрать древесину ${save.stock.wood}/3 и ветки ${save.stock.twigs}/3 — при сдаче они будут вычтены из запаса.`}</span>
            <span>{save.done.includes('bridge:north:repaired')?'✅ Северный мост восстановлен. Путь к золотому сундуку открыт.':save.done.includes('gather:carpenter')?'✅ Ремонт доступен у Северного моста.':'○ Северный мост ждёт выполнения задания Бьёрна.'}</span>
          </div>}
          {houseDialogId==="herbalist"&&<div className="house-quest-status"><b>Задание Сигрид</b>
            <span>{save.done.includes('gather:herbalist')?'✅ Сдано: 4 лечебные травы. Материалы списаны из запаса. Награда: эликсир и 6 Капель силы.':`Собрать лечебные травы ${save.stock.herbs}/4 — при сдаче 4 травы будут вычтены из запаса.`}</span>
          </div>}
          {houseDialogId==="craftsman"&&<div className="house-quest-status"><b>Помощь Торвальда</b>
            <span>{save.done.includes('bridge:fittings')?'✅ Железные крепления для моста получены.':'○ Крепления можно получить после открытия красного сундука Норн.'}</span>
          </div>}
          {houseDialogId==="oldfarm"&&<div className="house-quest-status"><b>Старый хутор</b>
            <span>{save.done.includes('bridge:boards')?'✅ Крепкие доски для моста найдены.':'○ Доски для моста ещё не найдены.'}</span>
          </div>}
          <button type="button" onClick={()=>setHouseDialog("")}>Продолжить путь</button>
        </div>
      </div>}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
