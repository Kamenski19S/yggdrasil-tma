import { VIKA_STORY, HERO_PROFILE_CSS } from './vikaStory';
import {WOOD_TRADES,exchangeWood,forgeAshCost} from './woodEconomy';
import { REPAIR_RESIDENTS, REPAIR_GOODS, REPAIR_PROJECTS, type RepairResident, nextRepairJob, residentRepairIntro, repaired, repairKey, workKey, canPrepareRepair, prepareRepair, canRestore, restoreLocation } from './locationRepairs';
import { CHAOS_GATES, chaosKey, gateForLocation, runeCopies, runeStrength, canCleanseGate, cleanseGate, routeProgress, routeBlocker, routePhase } from './chaosProgression';
import { rollBanditLoot, applyBanditLoot } from './banditLoot';
import { CHAOS_GATE_KEY, CHAOS_GATE_COST, CHAOS_GATE_RUNES, cleanseChaosGate } from './chaosGate';
import { potionBoostKind, boostedPotionDamage, potionDodges, type PotionBoostKind } from "./potionEffects";
import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { clone as cloneSkinned } from "three/examples/jsm/utils/SkeletonUtils.js";
import { type Screen, loadSave, type Save, type HeroWeapon, tg, cachedGlbBuffer, BASE, type GatherKind, GATHER_SPOTS, GATHER_RESPAWN_MS, refreshGathering, MIDGARD_GUARDIAN_ORDER, type Realm, today, LADDER, HEROES, type GearId, shieldForgeKey, ARTIFACT_INFO, WEAPON_POWER, QUESTS, MASTERS, COMBAT_ENERGY, BgImg, NAMES_F, NAMES_M, REALMS, MIDGARD_GUARDIANS, ARTIFACTS, MASTER_IMG, combatEnergyColor, GEAR_IDS, rank, NAV } from './core';
import { type CraftMaterial, CRAFT_RECIPES, craftMaterialName, RUNE_STEEL_YIELD, type SteelCraftRecipe, FORGE_WEAPON_MODELS, SparkDrop, ForgeWeaponWall, InventorySection, craftMaterialIcon, STEEL_CRAFT_RECIPES } from './inventory';
import { lootCountAdd, RUNE_CATALOG, lootDisplayName, POTION_CATALOG, BANDIT_SPECS, MIDGARD_GUARDIAN_LOOT, weaponDisplayIcon } from './world';
import { CSS } from './styles';
import { MillScene, type MillFind } from './MillScene';
import {MILL_BONUS_DROPS_MIN,MILL_BONUS_DROPS_RANGE,MILL_POTION_QUANTITY,MILL_RUNE_QUANTITY} from './millRewards';
import { Midgard3D } from './Midgard3D';



import { VILLAGE_RESIDENTS, VILLAGE_WARD_COST, type VillageResident, villageOrder, orderMaterials, preparationDone, wardPrepared, canCompleteOrder, completeVillageOrder, restoreVillageWard } from './villageQuests';

export function App() {
  const [screen, setScreen] = useState<Screen>(() => (loadSave().hero ? { t: "tree" } : { t: "choose" }));
  const millScreenActiveRef=useRef(false);
  const [save, setSave] = useState<Save>(loadSave);
  const [selectedArtifact,setSelectedArtifact]=useState("");
  const [pick, setPick] = useState("viking");
  const [heroTab,setHeroTab]=useState<"equipment"|"story">("equipment");
  const [pickName, setPickName] = useState("Вика");
  const [toast, setToast] = useState("");
  const [repairDialog,setRepairDialog]=useState<string|null>(null);
  const [chaosDialog,setChaosDialog]=useState<string|null>(null);
  const [chaosRecipe,setChaosRecipe]=useState(0);
  const currentChaosGate=CHAOS_GATES.find(g=>g.id===chaosDialog);
  const currentChaosBlocker=currentChaosGate?routeBlocker(routeProgress(save),currentChaosGate.id):undefined;
  const openChaosGate=(gateId:string)=>{const gate=CHAOS_GATES.find(g=>g.id===gateId);if(!gate)return;const choice=gate.recipes.findIndex(needs=>needs.every(n=>runeCopies(save,n.id)>=n.quantity&&runeStrength(save,n.id)>=n.level));setChaosRecipe(Math.max(0,choice));setChaosDialog(gateId);};
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
  useEffect(()=>{
    const refresh=()=>setSave(s=>refreshGathering(s));
    const id=window.setInterval(refresh,1000);
    document.addEventListener('visibilitychange',refresh);
    return()=>{window.clearInterval(id);document.removeEventListener('visibilitychange',refresh);};
  },[]);
  useEffect(()=>{millScreenActiveRef.current=screen.t==="mill";},[screen.t]);
  useEffect(() => { tg?.ready?.(); tg?.expand?.(); tg?.setHeaderColor?.("#0b0f0c"); tg?.setBackgroundColor?.("#0b0f0c"); }, []);
  useEffect(() => {
    const asset="Vika-3d-animated-optimized.glb";
    cachedGlbBuffer(`${BASE}img/models/${asset}`).catch(()=>{});
  }, [save.heroSkin]);
  useEffect(() => {
    if (!tg?.BackButton) return;
    const back = () => { if(screen.t==="mill")millScreenActiveRef.current=false; setScreen(screen.t === "forge" || screen.t === "mill" ? { t: "realm", id:"midgard" } : { t: "tree" }); };
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
    setSave(s=>{
      const current=refreshGathering(s);
      if(current.gathered.includes(id))return current;
      return {...current,gathered:[...current.gathered,id],gatherRespawnAt:{...current.gatherRespawnAt,[id]:Date.now()+GATHER_RESPAWN_MS},stock:{...current.stock,[kind]:current.stock[kind]+1}};
    });
    haptic();say(kind==='wood'?'🪵 +1 древесина':kind==='twigs'?'🌱 +1 ветки':'🌿 +1 лечебные травы');
  };
  const [,setVillageTick]=useState(0);
  useEffect(()=>{
    if(!houseDialog)return;
    const timer=window.setInterval(()=>{setVillageTick(t=>t+1);},1000);
    return()=>window.clearInterval(timer);
  },[!!houseDialog]);
  const resident=VILLAGE_RESIDENTS.includes(houseDialogId as VillageResident)?houseDialogId as VillageResident:null;
  const residentOrder=resident?villageOrder(save,resident):null;
  const repairResident=(houseDialogId==='house'?'elder':houseDialogId==='welund'?'blacksmith':houseDialogId) as RepairResident;
  const repairAssignment=repairResident in REPAIR_RESIDENTS?nextRepairJob(save,repairResident):null;
  const repairProject=REPAIR_PROJECTS.find(p=>p.id===repairDialog);
  const finishRepair=(id:string)=>{const p=REPAIR_PROJECTS.find(p=>p.id===id);if(!p||!canRestore(save,p))return;setSave(s=>restoreLocation(s,p));haptic('success');say(p.name+' восстановлена. +'+p.reward+' капель бессмертия. Испытание доступно.');};
  const submitVillageOrder=()=>{
    if(!resident||!canCompleteOrder(save,resident))return;
    const order=villageOrder(save,resident);
    setSave(s=>completeVillageOrder(s,resident));
    setHouseDialog(`Заказ выполнен. +${order.drops} капель бессмертия${order.potion?' и Эликсир северного мха':''}. Следующий заказ — через 15 минут.`);
    haptic('success');
  };
  const activateVillageWard=()=>{
    if(!wardPrepared(save)||save.immortalityDrops<VILLAGE_WARD_COST||save.done.includes('bridge:north:repaired'))return;
    setSave(restoreVillageWard);
    setHouseDialog('Северный мост отремонтирован. Тёмное заклинание у прохода снимается отдельно во Вратах хаоса.');haptic('success');
  };
  const go = (s: Screen) => { millScreenActiveRef.current=s.t==="mill"; setScreen(s); };
  const produceMillDrops=useCallback((amount:number)=>{
    if(!millScreenActiveRef.current)return;
    const safe=Math.max(0,Math.floor(amount));
    if(!safe)return;
    setSave(s=>({...s,millStored:s.millStored+safe}));
  },[]);
  const findMillReward=useCallback((kind:MillFind)=>{
    if(!millScreenActiveRef.current)return '';
    if(kind==='drops'){
      const amount=MILL_BONUS_DROPS_MIN+Math.floor(Math.random()*MILL_BONUS_DROPS_RANGE);
      setSave(s=>({...s,millStored:s.millStored+amount}));return `+${amount} капель в накопитель`;
    }
    const item=kind==='potion'?POTION_CATALOG[Math.floor(Math.random()*Math.min(3,POTION_CATALOG.length))]:RUNE_CATALOG[Math.floor(Math.random()*RUNE_CATALOG.length)];
    const quantity=kind==='potion'?MILL_POTION_QUANTITY:MILL_RUNE_QUANTITY;
    setSave(s=>({...s,
      potions:kind==='potion'?[...s.potions,...Array.from({length:quantity},()=>item.id)]:s.potions,
      runes:kind==='rune'?[...new Set([...s.runes,item.id])]:s.runes,
      lootCounts:lootCountAdd(s.lootCounts,Array.from({length:quantity},()=>item.id))}));
    return kind==='potion'?`Пойман: ${item.name} ×${quantity}`:`Руна ${item.name} ×${quantity}`;
  },[]);
  const collectMillDrops=useCallback(()=>{
    setSave(s=>s.millStored<=0?s:{...s,immortalityDrops:s.immortalityDrops+s.millStored,millStored:0});
  },[]);

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
  const collectWatch = () => { const g = watchGain(); if (g <= 0) { say("Дозор только начался — Капли бессмертия ещё собираются."); return; } setSave(s => ({ ...s, immortalityDrops: s.immortalityDrops + g, watch: Date.now() })); haptic("success"); say("Дозор завершён: +" + g + " Капель бессмертия"); };
  const claimGift = () => { if (save.gift === today()) return; const d = save.gift ? Math.round((Date.parse(today()) - Date.parse(save.gift)) / 86400000) : 99; const next = d <= 2 ? (save.streak % 7) + 1 : 1; const rew = LADDER[next - 1]; setSave(s => ({ ...s, immortalityDrops: s.immortalityDrops + rew, gift: today(), streak: next })); haptic("success"); say("Дар Древа, день " + next + ": +" + rew + " ✨"); };
  const confirmHero = () => { if (!pick || !pickName) return; setSave(s => ({ ...s, hero: { id: pick, name: "Вика" },heroSkin:"valkyrie" })); haptic("success"); say("Путь начинается, " + pickName + "!"); setScreen({ t: "tree" }); };
  const heroDef = save.hero ? HEROES.find(h => h.id === save.hero!.id)! : null;
  const forgeItems = [
    {id:"default",icon:"⚔️",name:"Меч валькирии",kind:"weapon",owned:true},
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
  const runeLevel=(id:string)=>Math.min(3,1+Math.max(0,Number(save.forgeLevels['rune:'+id])||0));
  const activeRuneBonus=(key:'attack'|'rune'|'defense'|'power')=>{
    const rune=activeRuneDef();if(!rune)return 0;
    const base=Number(rune[key]||0);if(!base)return 0;
    const level=runeLevel(rune.id);
    return key==='power'?base+(level>=3?1:0):base+(level-1);
  };
  const activeArtifactDef=()=>ARTIFACT_INFO[save.equippedArtifact];
  const heroPowerPips=()=>{
    if(!heroDef)return 1;
    const gearForge=gearLevel('armor')+gearLevel('helmet')+gearLevel('shield')+gearLevel('boots');
    const runePower=activeRuneBonus('power');
    const artifactPower=activeArtifactDef()?.power||0;
    const score=heroDef.str+WEAPON_POWER[save.heroWeapon]+forgeLevel(save.heroWeapon)+Math.floor(gearForge/2)+runePower*2+artifactPower*2;
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
    const ashCost=forgeAshCost(item.kind==="weapon"||item.id==="shield",level,!save.forgeFreeUsed);
    if(save.stock.ashWood<ashCost){say("Для закалки от +5 нужна ясеневая древесина ×1.");return;}
    const cost=forgeCost(item.id);
    if(save.immortalityDrops<cost){say("Недостаточно Капель бессмертия. Нужно: "+cost);return;}
    setSave(s=>s.stock.ashWood<ashCost||s.immortalityDrops<cost?s:({...s,stock:{...s.stock,ashWood:s.stock.ashWood-ashCost},immortalityDrops:s.immortalityDrops-cost,forgeFreeUsed:true,forgeLevels:{...s.forgeLevels,[key]:(s.forgeLevels[key]||0)+1}}));
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
  const craftRecipesForWeapon=craftWeapon?CRAFT_RECIPES.filter(r=>r.weapon===craftWeapon):[];
  const selectedCraftRecipe=CRAFT_RECIPES.find(r=>r.weapon===craftWeapon&&r.material===craftMaterial)||null;
  const craftWeaponCopies=craftWeapon?Math.max(0,Number(save.lootCounts[craftWeapon])||0):0;
  const craftMaterialCount=craftMaterial?save.stock[craftMaterial]:0;
  const directCraftWeaponIds=new Set<HeroWeapon>(CRAFT_RECIPES.map(r=>r.weapon));
  const chooseCraftWeapon=(id:HeroWeapon)=>{
    const recipes=CRAFT_RECIPES.filter(r=>r.weapon===id);
    if(!recipes.length){
      setCraftWeapon('');setCraftMaterial('');setCraftPicker(null);
      say(lootDisplayName(id)+" не имеет прямого рецепта. Лишнюю копию можно разобрать ниже на Руническую сталь.");
      return;
    }
    setCraftWeapon(id);
    if(recipes.length===1)setCraftMaterial(recipes[0].material);
    else if(!recipes.some(r=>r.material===craftMaterial))setCraftMaterial('');
    setCraftPicker(null);
  };
  const craftReady=!!selectedCraftRecipe&&craftWeaponCopies>=2&&craftMaterialCount>=selectedCraftRecipe.amount&&save.immortalityDrops>=selectedCraftRecipe.cost;
  const performCraft=()=>{
    const recipe=selectedCraftRecipe;
    if(!recipe){say("Для этой пары оружия и материала пока нет рецепта.");return;}
    if(craftWeaponCopies<2){say("Для крафта нужна лишняя копия оружия. Один экземпляр остаётся у героя.");return;}
    if(craftMaterialCount<recipe.amount){say("Не хватает материала: нужно "+recipe.amount+" · "+craftMaterialName(recipe.material)+".");return;}
    if(save.immortalityDrops<recipe.cost){say("Не хватает Капель бессмертия. Нужно: "+recipe.cost);return;}
    setSave(state=>{
      const currentCopies=Math.max(0,Number(state.lootCounts[recipe.weapon])||0);
      if(currentCopies<2||state.stock[recipe.material]<recipe.amount||state.immortalityDrops<recipe.cost)return state;
      const nextCounts={...state.lootCounts,[recipe.weapon]:Math.max(1,currentCopies-1)};
      nextCounts[recipe.result]=(Number(nextCounts[recipe.result])||0)+1;
      return {...state,
        immortalityDrops:state.immortalityDrops-recipe.cost,
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
  const dismantlableWeapons=(save.ownedWeapons as HeroWeapon[]).filter(id=>id!=="default"&&id!=="swordGolden"&&(Number(save.lootCounts[id])||0)>1&&(RUNE_STEEL_YIELD[id]||0)>0);
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
    if(save.stock.ashWood<(recipe.ashWood||0)){say("Нужна ясеневая древесина ×"+recipe.ashWood);return;}
    if(guardianProgressCount<recipe.requires){say("Этот чертёж откроется после "+recipe.requires+" испытаний Мидгарда.");return;}
    if(save.runeSteel<recipe.steel){say("Не хватает Рунической стали. Нужно: "+recipe.steel);return;}
    if(save.stock[recipe.material]<recipe.amount){say("Не хватает материала: нужно "+recipe.amount+" · "+craftMaterialName(recipe.material)+".");return;}
    if(save.immortalityDrops<recipe.cost){say("Не хватает Капель бессмертия. Нужно: "+recipe.cost);return;}
    setSave(state=>{
      if(state.runeSteel<recipe.steel||state.stock[recipe.material]<recipe.amount||state.stock.ashWood<(recipe.ashWood||0)||state.immortalityDrops<recipe.cost)return state;
      const nextCounts={...state.lootCounts};
      if(recipe.resultWeapon)nextCounts[recipe.resultWeapon]=(Number(nextCounts[recipe.resultWeapon])||0)+1;
      if(recipe.resultShield)nextCounts[recipe.resultShield]=(Number(nextCounts[recipe.resultShield])||0)+1;
      return {...state,
        runeSteel:state.runeSteel-recipe.steel,
        immortalityDrops:state.immortalityDrops-recipe.cost,
        stock:{...state.stock,[recipe.material]:state.stock[recipe.material]-recipe.amount,ashWood:state.stock.ashWood-(recipe.ashWood||0)},
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
    setSave(s => ({ ...s, immortalityDrops: s.immortalityDrops + add + (finale ? 30 : 0), trials: [...s.trials, id + ":" + idx] }));
    if (finale) { haptic("success"); say("Серия испытаний завершена. Артефакт мира выдаётся только после полного прохождения его игровой локации."); }
  };
  const finishWhisperCorrect = () => {
    setSave(s=>(!s.done.includes(chaosKey("whisperStone"))||!repaired(s,"whisperStone")||s.done.includes("whisper:wisdom"))?s:{...s,immortalityDrops:s.immortalityDrops+MIDGARD_GUARDIANS.whisperStone.correctReward,done:[...new Set([...s.done,"whisper:wisdom","guardian:whisperStone","guardian:stage:whisperStone"])],
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
      const add = (8 + idx * 2) * (id==="midgard"?3:1);
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
      if(!s.done.includes(chaosKey("whisperStone"))||!repaired(s,"whisperStone")||s.done.includes("whisper:battle"))return s;
      return {...s,immortalityDrops:s.immortalityDrops+MIDGARD_GUARDIANS.whisperStone.battleReward,done:[...new Set([...s.done,"whisper:battle","guardian:whisperStone","guardian:stage:whisperStone"])],
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
    const boost=potionBoostKind(id);
    if(boost&&save.potionBoosts[boost]>=3){say('Этот эффект уже действует на три действия.');return false;}
    if((id==='lifeElixir'||id==='northernMoss')&&currentHp>=maxHp){say('Здоровье уже восстановлено.');return false;}
    if(id==='frostDraught'&&save.frostGuard>=2){say('Ледяная защита уже действует на два удара.');return false;}
    setSave(s=>{
      const index=s.potions.indexOf(id);
      if(index<0)return s;
      const nextPotions=[...s.potions];nextPotions.splice(index,1);
      return {...s,potions:nextPotions,
        fieldHp:id==='lifeElixir'||id==='hoddmimirElixir'?maxHp:id==='northernMoss'?Math.min(maxHp,currentHp+30):s.fieldHp,
        potionBoosts:boost?{...s.potionBoosts,[boost]:3}:s.potionBoosts,
        frostGuard:id==='frostDraught'||id==='hoddmimirElixir'?2:s.frostGuard};
    });
    haptic('success');say(
      boost ? `${item.name}: ${item.effect}.` : id==='frostDraught'
        ? 'Ледяной настой ослабит два следующих удара.'
        : id==='hoddmimirElixir'
          ? 'Эликсир Ходдмимира полностью восстановил здоровье и дал защиту от двух следующих ударов.'
          : `${item.name}: здоровье восстановлено.`
    );
    return true;
  };
  const consumePotionBoost=(kind:PotionBoostKind)=>setSave(s=>({...s,potionBoosts:{...s.potionBoosts,[kind]:Math.max(0,s.potionBoosts[kind]-1)}}));
  const equipInventoryRune=(id:string)=>{
    const rune=RUNE_CATALOG.find(r=>r.id===id);
    if(!rune||!save.runes.includes(id))return;
    setSave(s=>({...s,equippedRune:id}));haptic();say(`Руна ${rune.name} активна. ${rune.effect}.`);
  };
  const fuseInventoryRune=(id:string)=>{
    const rune=RUNE_CATALOG.find(r=>r.id===id);
    if(!rune||!save.runes.includes(id))return;
    const count=Math.max(1,Number(save.lootCounts[id])||1),level=runeLevel(id);
    if(level>=3){say(`Руна ${rune.name} уже достигла III уровня.`);return;}
    if(count<3){say(`Для усиления руны ${rune.name} нужны 3 одинаковые копии. Сейчас: ${count}.`);return;}
    setSave(s=>{
      const current=Math.max(1,Number(s.lootCounts[id])||1);
      const currentLevel=Math.min(3,1+Math.max(0,Number(s.forgeLevels['rune:'+id])||0));
      if(current<3||currentLevel>=3)return s;
      return {...s,
        lootCounts:{...s.lootCounts,[id]:current-2},
        forgeLevels:{...s.forgeLevels,['rune:'+id]:currentLevel}
      };
    });
    haptic('success');
    say(`Три руны ${rune.name} слиты. Руна усилена до ${level===1?'II':'III'} уровня.`);
  };
  const rewardBandit=(id:string)=>{
    const spec=BANDIT_SPECS.find(b=>b.id===id);if(!spec)return '';
    const loot=rollBanditLoot(save,spec);
    const tally=(ids:string[])=>Object.entries(ids.reduce((counts:Record<string,number>,id)=>{counts[id]=(counts[id]||0)+1;return counts;},{})).map(([id,n])=>lootDisplayName(id)+(n>1?' ×'+n:'')).join(', ');
    const rewardText=[tally(loot.runes),tally(loot.potions),tally(loot.weapons)].filter(Boolean).join(' · ');
    setSave(s=>applyBanditLoot(s,loot));haptic('success');
    say(`Победа: +${loot.drops} капель · ${rewardText}`);return `+${loot.drops} капель · ${rewardText}`;
  };
  const banditKnockout=()=>{
    setSave(s=>({...s,immortalityDrops:Math.max(0,s.immortalityDrops-5),fieldHp:(heroDef?.hp||100)+gearHp()}));
    haptic();say('Рунический удар разбойника сбил Вику с ног. Древо вернуло её к началу пути (−5 Капель бессмертия).');
  };
  const fightAct = (id: string, kind: "hit" | "rune" | "shield" | "restore") => {
    if (over) return;
    const m = MASTERS[id]; const idx = trialIdx(id);
    let dmg = 0; let log = ""; let nhen = hen; let nmen = men; let nshield = shield;
    if (kind === "hit") {
      setCombatFx({kind:"hit",key:Date.now()});
      dmg = heroDef!.str + WEAPON_POWER[save.heroWeapon] + forgeLevel(save.heroWeapon) + activeRuneBonus('attack') + (activeArtifactDef()?.attack||0) + rnd(4);
      if(hen>0)nhen=Math.max(0,hen-1);else{dmg=Math.ceil(dmg*.55);log="Силы иссякли — удар слабее. ";}
      if (save.powers.includes("fireOath")) { dmg += 5; setSave(s => ({ ...s, powers: s.powers.filter(p => p !== "fireOath") })); log += "Огненный обет! "; }
      if (heroDef!.id === "berserk" && hhp <= Math.max(heroDef!.hp,hmax) / 2) { dmg *= 2; log += "Медвежья ярость! "; }
      log += "Ты бьёшь: " + (save.heroWeapon==="default"?heroDef!.weapon:FORGE_WEAPON_MODELS.find(item=>item[2]===save.heroWeapon)?.[1]||heroDef!.weapon) + " — −" + dmg + " хозяину.";
    }
    if (kind === "rune") {
      if (hen < 2) { say("Для рунического удара нужно 2 деления энергии."); return; }
      setCombatFx({kind:"rune",key:Date.now()});
      nhen = hen - 2; dmg = heroDef!.en + 2 + activeRuneBonus('rune') + (activeArtifactDef()?.rune||0) + rnd(5);
      log = "Руническое заклинание вспыхивает: −" + dmg + " хозяину.";
    }
    if (kind === "shield") { if(hen<1){say("Нет энергии, чтобы удержать щит.");return;} nhen=hen-1;nshield = true; log = "Ты поднимаешь щит — удар ослабнет."; }
    if (kind === "restore") { const restored=2+(equipped('boots')?1:0)+(gearLevel('boots')>=3?1:0);nhen=Math.min(COMBAT_ENERGY,hen+restored);log="Ты переводишь дыхание и восстанавливаешь "+restored+" деления энергии."; }
    const boost=kind==='hit'?'attack':kind==='rune'?'rune':undefined;
    if(boost&&save.potionBoosts[boost]>0){dmg=boostedPotionDamage(dmg,save.potionBoosts[boost]);consumePotionBoost(boost);log+=' Эликсир усилил удар до '+dmg+'.';}
    const nm = mhp - dmg;
    if (nm <= 0) {
      setMhp(0); setHen(nhen); setMen(nmen); setOver("win");
      const add = (8 + idx * 2) * (id==="midgard"?3:1);
      setFlog("Хозяин повержен! Награда: +" + add + " Капель бессмертия");
      finishTrial(id, idx, add);
      return;
    }
    let md = m.atk + rnd(3); let mlog = "";
    const enemyAttacks=nmen>0;
    if(nmen<=0){md=0;nmen=2;mlog=" "+m.name+" вынужден перевести дыхание и восстанавливает энергию.";}else nmen=Math.max(0,nmen-1);
    const forgedDefense=gearDefense();
    md=Math.max(1,md-forgedDefense-activeRuneBonus('defense')-(activeArtifactDef()?.defense||0));
    if (nshield) { md = Math.max(0,Math.ceil(md * (equipped('shield')?.3:.6))-gearLevel('shield')-(equipped('shield')?1:0)); mlog += " Щит принял большую часть удара."; }
    if(!enemyAttacks)md=0;
    if(md>0&&save.potionBoosts.luck>0){if(potionDodges(save.potionBoosts.luck,Math.random())){md=0;mlog+=' Эликсир удачи помог уклониться.';}consumePotionBoost('luck');}
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
    if (nh <= 0) { setOver("lose"); setSave(s => ({ ...s, immortalityDrops: Math.max(0, s.immortalityDrops - 10) })); setFlog(log + " " + m.name + " бьёт... Ты пал. Древо возрождает тебя (−10 ✨)."); return; }
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
        {screen.t === "mill" && <button className="back" onClick={() => go({ t: "realm", id:"midgard" })}>← Мидгард · Мельница</button>}
        {screen.t === "choose" && <div className="title">🌫️ Выбор судьбы</div>}
        {screen.t === "hero" && <div className="title">🛡 Герой</div>}
        {screen.t === "gift" && <div className="title">🎁 Дар</div>}
        {screen.t === "hall" && <div className="title">🏛️ Чертог</div>}
        {screen.t === "craft" && <button className="back" onClick={() => go({ t: "hall" })}>← Чертог · Крафт</button>}
        {screen.t === "forge" && <button className="back" onClick={() => go({ t: "realm", id:"midgard" })}>← Мидгард · Кузница</button>}
        {screen.t === "trial" && <div className="title">🗝 Испытание</div>}
        {screen.t === "fight" && <div className="title">⚔ Бой</div>}
        <div className="sparks"><SparkDrop/> {screen.t==="mill"?<>{save.immortalityDrops} Капель бессмертия</>:<>{save.immortalityDrops} Капель бессмертия</>}</div>
      </div>

      {forgeTransition&&<div className="forge-transition"><b>ᚲ</b><span>Дверь кузницы открывается</span></div>}

      {screen.t === "choose" && (
        <div className="scroll choose-screen">
          <div className="card center choose-intro"><BgImg name="hero_valkyrie.jpg" className="hface"/><div className="qhead2">Вика · Валькирия</div><p className="dim">Мидгард нуждается в твоей помощи. Освободи свой дом от тёмных печатей и найди источник хаоса.</p></div>
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


      {screen.t === "mill" && (
        <MillScene
          stored={save.millStored}
          balance={save.immortalityDrops}
          onProduce={produceMillDrops}
          onCollect={collectMillDrops}
          onFind={findMillReward}
          onBack={()=>go({t:"realm",id:"midgard"})}
        />
      )}

      {screen.t === "realm" && (() => {
  const realm = REALMS.find(r => r.id === screen.id)!;

  if (realm.id === "midgard") {
    if (!heroDef) return null;

    const interact = (id: string, position?:{x:number;z:number}) => {
      haptic();
      if(id.startsWith('repair:')){setRepairDialog(id.slice(7));return;}
      if(id.startsWith('chaosGate:')){openChaosGate(id.slice(10));return;}
      const requiredGate=gateForLocation(id);
      if(requiredGate&&!save.done.includes(chaosKey(requiredGate.id))){openChaosGate(requiredGate.id);return;}
      if(requiredGate&&!repaired(save,requiredGate.id)){setRepairDialog(requiredGate.id);return;}
      if(id.startsWith("guardian:repeat:")){
        const [locationId,ashFlag]=id.slice("guardian:repeat:".length).split(":");
        const ashReward=locationId==="ashgrove"&&ashFlag==="ashwood"?1:0;
        const spec=MIDGARD_GUARDIANS[locationId];
        const gate=gateForLocation(locationId);if(gate&&(!save.done.includes(chaosKey(gate.id))||!repaired(save,gate.id)))return;
        if(!spec)return;
        const repeatDrops=spec.repeatReward;
        setSave(s=>({...s,immortalityDrops:s.immortalityDrops+repeatDrops,stock:{...s.stock,ashWood:s.stock.ashWood+ashReward}}));
        haptic("success");
        say(`Повторная победа над ${spec.name}: +${repeatDrops} Капель бессмертия${ashReward?", Ясеневая древесина ×1":""}.`);
        return;
      }
      if(id.startsWith("guardian:correct:")||id.startsWith("guardian:battle:")){
        const battle=id.startsWith("guardian:battle:");
        const locationId=id.slice(battle?"guardian:battle:".length:"guardian:correct:".length);
        const spec=MIDGARD_GUARDIANS[locationId];
        const gate=gateForLocation(locationId);if(gate&&(!save.done.includes(chaosKey(gate.id))||!repaired(save,gate.id)))return;
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
            immortalityDrops:state.immortalityDrops+reward,
            stock:{...state.stock,ashWood:state.stock.ashWood+(loot.ashWood||0)},
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
      if(["warriorHouse","fisher2","carpenter","hunter2","family","house","fisher","hunter","herbalist","craftsman","welund","oldfarm"].includes(id))houseDialogPending.current=id;
      if (id === "mimir") {
        if (save.done.includes("forest:present")) {
          if (!save.done.includes("forest:present:reward")) {
            setSave(s => ({ ...s, immortalityDrops: s.immortalityDrops + 20, done: [...new Set([...s.done, "forest:present:reward"])] }));
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
          say('Красный сундук уже открыт. Подготовь защиту у Сигрид, Бьёрна и Торвальда. Руна у Северного моста активируется за 300 капель бессмертия.');return;
        }
        setSave(s=>s.done.includes('chest:norns')?s:{...s,
          done:[...new Set([...s.done,'chest:norns'])],immortalityDrops:s.immortalityDrops+30,
          potions:[...s.potions,'lifeElixir','northernMoss'],
          runes:[...new Set([...s.runes,'uruzStrength','perthroFate'])],
          ownedWeapons:[...new Set([...s.ownedWeapons,'knife'])],
          ownedShields:[...new Set([...s.ownedShields,'Shield_Heater.glb'])],
          lootCounts:lootCountAdd(s.lootCounts,['knife','Shield_Heater.glb','uruzStrength','perthroFate','lifeElixir','northernMoss'])
        });
        haptic('success');say('Красный сундук Норн открыт! +30 Капель бессмертия, Боевой кинжал, Щит, руны Уруз ᚢ и Перт ᛈ, Эликсир жизни и Эликсир северного мха. Подсказка Норн ведёт к Северному мосту и золотому сундуку.');
        return;
      }
      if (id === "forge") {
        say("Вёлунд открывает дверь кузницы. Огонь горна отзывается на Капли бессмертия.");
        enterForge(position);
        return;
      }
      if(id==='house'||id==='elder'||id==='welund'||id in REPAIR_RESIDENTS){
        const who=(id==='house'?'elder':id==='welund'?'blacksmith':id) as RepairResident;houseDialogPending.current=id;
        const assignment=nextRepairJob(save,who);
        say(REPAIR_RESIDENTS[who]+': '+residentRepairIntro(who)+(assignment?' Сейчас нужна помощь: '+assignment.project.name+'.':' Сними печати хаоса — после этого появятся работы по восстановлению.'));return;
      }
      if(id==='chaosGate'){openChaosGate('north');return;}
      if(id==='northBridge'){
        houseDialogPending.current='northBridge';
        say(save.done.includes('bridge:north:repaired')?'Северный мост отремонтирован. Если проход закрыт тёмной завесой, сними её во Вратах хаоса.':
          'Для ремонта моста подготовь материалы с помощью Сигрид, Бьёрна и Торвальда. Ремонт стоит 300 капель бессмертия.');return;
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
          setSave(state=>({...state,immortalityDrops:state.immortalityDrops+20,done:[...new Set([...state.done,"forest:past:reward"])]}));
          haptic("success");say("Под старой телегой найден тайник: +20 Капель бессмертия.");return;
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
        if(!save.done.includes('bridge:north:repaired')){say('Золотой сундук защищён кольцом. Подготовь защиту с тремя жителями, активируй руну у Северного моста за 300 капель бессмертия и перейди на другой берег.');return;}
        if(!save.done.includes('chest:gold')){
          setSave(s=>s.done.includes('chest:gold')?s:{...s,
            done:[...new Set([...s.done,'chest:gold'])],immortalityDrops:s.immortalityDrops+55,
            runes:[...new Set([...s.runes,'raidoPath','algizGuard','fehuWealth'])],
            potions:[...s.potions,'northernMoss','frostDraught','lifeElixir'],
            ownedWeapons:[...new Set([...s.ownedWeapons,'axe','spear','sword2'])],
            ownedShields:[...new Set([...s.ownedShields,'Shield_Heater_2.glb'])],
            lootCounts:lootCountAdd(s.lootCounts,['axe','spear','sword2','Shield_Heater_2.glb','raidoPath','algizGuard','fehuWealth','northernMoss','frostDraught','lifeElixir'])
          });
          haptic('success');setHouseDialogId('goldChest');setHouseDialog('✅ Золотой сундук открыт! +55 Капель бессмертия, Северный топор, Копьё, Меч II, Щит II, руны Райдо ᚱ, Альгиз ᛉ и Феху ᚠ, а также три эликсира. Следующая богатая цель — серебряный сундук в Лесу Ходдмимира.');
        } else say('Золотой сундук уже открыт. Найденные руны, эликсиры и оружие хранятся в Чертоге.');
        return;
      }
      if (id === "forestWhisper") {
        if (!save.done.includes("forest:whisper")) {
          setSave(s => ({ ...s, immortalityDrops: s.immortalityDrops + 16, done: [...new Set([...s.done, "forest:whisper"])] }));
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
          immortalityDrops:state.immortalityDrops+(state.done.includes("forest:camp")?0:14),
          stock:{...state.stock,wood:state.stock.wood+1,twigs:state.stock.twigs+2},
          done:[...new Set([...state.done,"forest:camp"])],
          locationCooldowns:{...state.locationCooldowns,hunterCamp:now+15*60*1000}
        }));
        haptic("success");
        say((save.done.includes("forest:camp")?"":"Забытая стоянка исследована: +14 Капель бессмертия. ")+"Найдены припасы: +1 древесина и +2 ветки.");
        return;
      }
      if (id === "deepGrove") {
        const now=Date.now(),readyAt=save.locationCooldowns.deepGrove||0;
        if(now<readyAt){
          const mins=Math.max(1,Math.ceil((readyAt-now)/60000));
          say(`Редкие травы ещё восстанавливаются. Вернись примерно через ${mins} мин.`);return;
        }
        setSave(state=>({...state,
          immortalityDrops:state.immortalityDrops+(state.done.includes("forest:grove")?0:17),
          stock:{...state.stock,herbs:state.stock.herbs+2},
          done:[...new Set([...state.done,"forest:grove"])],
          locationCooldowns:{...state.locationCooldowns,deepGrove:now+15*60*1000}
        }));
        haptic("success");
        say((save.done.includes("forest:grove")?"":"Глубокая роща открыта: +17 Капель бессмертия. ")+"Собраны редкие лечебные травы: +2.");
        return;
      }
      if (id === "fallenAsh") {
        const now=Date.now(),readyAt=save.locationCooldowns.fallenAsh||0;
        if(now<readyAt){
          const mins=Math.max(1,Math.ceil((readyAt-now)/60000));
          say(`Поверженный ясень уже осмотрен. Новые сухие части можно будет собрать примерно через ${mins} мин.`);
          return;
        }
        const first=!save.done.includes("forest:ashwood:first");
        setSave(state=>({...state,
          immortalityDrops:state.immortalityDrops+(first?5:0),
          stock:{...state.stock,ashWood:state.stock.ashWood+1},
          done:[...new Set([...state.done,"forest:ash","forest:ashwood:first"])],
          locationCooldowns:{...state.locationCooldowns,fallenAsh:now+15*60*1000}
        }));
        haptic("success");
        say(first
          ?"Даже павшее дерево хранит силу. Среди старых корней найдена крепкая древесина, пропитанная энергией земли. Получено: Ясеневая древесина ×1 и +5 Капель бессмертия."
          :"У корней Поверженного ясеня снова найдена пригодная сухая часть. Получено: Ясеневая древесина ×1.");
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
            immortalityDrops:s.immortalityDrops+80,
            runes:[...new Set([...s.runes,'sowiloLight','othalaLegacy','dagazDawn'])],
            potions:[...s.potions,'hoddmimirElixir','lifeElixir','frostDraught'],
            ownedWeapons:[...new Set([...s.ownedWeapons,'claymore','hammerDouble'])],
            ownedShields:[...new Set([...s.ownedShields,'Shield_Round_2.glb','Shield_Celtic_Golden.glb'])],
            lootCounts:lootCountAdd(s.lootCounts,['claymore','hammerDouble','Shield_Round_2.glb','Shield_Celtic_Golden.glb','sowiloLight','othalaLegacy','dagazDawn','hoddmimirElixir','lifeElixir','frostDraught'])
          });
          haptic('success');
          say('Серебряный ангельский сундук открыт! +80 Капель бессмертия, Клеймор, Двойной молот, Серебряный и Золотой щиты, редкие руны Соулу ᛋ, Отала ᛟ и Дагаз ᛞ, Эликсир Ходдмимира, Эликсир жизни и Морозный настой.');
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
            setSave(s => ({ ...s, immortalityDrops: s.immortalityDrops + 20, done: [...new Set([...s.done, "forest:future:reward"])] }));
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
        setSave(s => ({ ...s, immortalityDrops: s.immortalityDrops + 12, done: [...new Set([...s.done, "forest:choice", "forest:past"])] }));
        haptic("success");
        say("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");
        return;
      }
      if (id === "forestEvent:present") {
        setSave(s => ({ ...s, immortalityDrops: s.immortalityDrops + 12, done: [...new Set([...s.done, "forest:choice", "forest:present"])] }));
        haptic("success");
        say("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");
        return;
      }
      if (id === "forestEvent:future") {
        setSave(s => ({ ...s, immortalityDrops: s.immortalityDrops + 12, done: [...new Set([...s.done, "forest:choice", "forest:future"])] }));
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
        setSave(s => ({ ...s, immortalityDrops:s.immortalityDrops+5, powers: [...new Set([...s.powers, key])], done: [...new Set([...s.done, "ritual:" + ritual])] }));
        const text: Record<string,string> = {
          mimir: "Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",
          norn: "Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",
          ash: "Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",
          fire: "Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",
          ice: "Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",
          ygg: "Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."
        };
        haptic("success"); say(text[ritual]+" +5 Капель бессмертия.");
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
      onOpenMill={()=>go({t:"mill"})}
      eventDone={save.done.includes("forest:choice")}
      start={midgardReturn.current}
      rememberPosition={rememberMidgardPosition}
      repairStock={save.repairStock}
      repairedLocations={REPAIR_PROJECTS.filter(p=>repaired(save,p.id)).map(p=>p.id)}
      chaosCleared={CHAOS_GATES.filter(g=>save.done.includes(chaosKey(g.id))).map(g=>g.id)}
      chaosGateCleared={save.done.includes(CHAOS_GATE_KEY)}
      northBridgeRepaired={save.done.includes("bridge:north:repaired")}
      northBridgeReady={wardPrepared(save)&&save.immortalityDrops>=VILLAGE_WARD_COST}
      goldChestOpened={save.done.includes('chest:gold')}
      openedChests={[save.done.includes('chest:gold')?'forestCache':'',save.done.includes('chest:norns')?'nornsChest':'',save.done.includes('chest:angelic')?'angelicChest':''].filter(Boolean)}
      whisperResolved={save.done.includes("whisper:battle")||save.done.includes("whisper:wisdom")}
      guardianResolved={routeProgress(save).completed}
      whisperStats={{
        maxHp:heroDef.hp+gearHp(),
        attack:heroDef.str+WEAPON_POWER[save.heroWeapon]+forgeLevel(save.heroWeapon)+activeRuneBonus('attack')+(activeArtifactDef()?.attack||0),
        runeAttack:heroDef.en+2+activeRuneBonus('rune')+(activeArtifactDef()?.rune||0),
        defense:gearDefense()+activeRuneBonus('defense')+(activeArtifactDef()?.defense||0),
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
      runeCounts={save.lootCounts}
      runeLevels={save.forgeLevels}
      fieldHp={save.fieldHp}
      frostGuard={save.frostGuard}
      potionBoosts={save.potionBoosts}
      onPotionBoostUsed={consumePotionBoost}
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
          <style>{HERO_PROFILE_CSS}</style>
          <div className="card hero-profile">
            <header className="hero-profile-header"><span className="hface"><BgImg name="hero_valkyrie.jpg" className="himg"/></span><div><h2>Вика</h2><p>Валькирия · защитница Мидгарда</p></div></header>
            <div className="hero-profile-tabs" role="tablist" aria-label="Разделы героя"><button role="tab" aria-selected={heroTab==='equipment'} onClick={()=>setHeroTab('equipment')}>Снаряжение и навыки</button><button role="tab" aria-selected={heroTab==='story'} onClick={()=>setHeroTab('story')}>История Вики</button></div>
            {heroTab==='story'?<section className="hero-story" role="tabpanel">{VIKA_STORY.map((chapter,index)=>index===0||save.done.includes('world:complete:midgard')?<details key={chapter.id} open={index===0}><summary>{chapter.title}</summary>{chapter.text.split('\n\n').map((p,i)=><p key={i}>{p}</p>)}</details>:<p key={chapter.id} className="story-locked">Продолжение «За вратами Мидгарда» откроется после завершения Мидгарда.</p>)}</section>:<section role="tabpanel">
            <div className="stats">
              <div className="stat"><b>⚔ {heroDef.str}</b><span>сила</span></div>
              <div className="stat"><b>✨ {heroDef.en}</b><span>энергия</span></div>
              <div className="stat"><b>❤ {heroDef.hp+gearHp()}</b><span>здоровье</span></div>
            </div>
            <div className="hrow">🗡 Оружие в руке</div>
            <div className="chips">
              {(['default',...FORGE_WEAPON_MODELS.filter(item=>item[2]&&Object.prototype.hasOwnProperty.call(WEAPON_POWER,item[2])).map(item=>item[2])] as HeroWeapon[]).filter((id,index,all)=>all.indexOf(id)===index).filter(id=>id==='default'||save.ownedWeapons.includes(id)).map(id=>{
                const total=id==='default'?1:Math.max(1,Number(save.lootCounts[id])||1);
                return <button key={id}
                  className={"chip"+(save.heroWeapon===id?" on":"")}
                  onClick={()=>{setSave(s=>({...s,heroWeapon:id}));haptic();}}
                >{id==='default'?('Меч валькирии'):FORGE_WEAPON_MODELS.find(item=>item[2]===id)?.[1]} · сила +{WEAPON_POWER[id]}{id!=='default'?" · "+total+" шт.":""}</button>;
              })}
            </div>
            <div className="dim" style={{marginTop:8}}>
              Сила — бонус оружия. «Шт.» — количество. Для крафта нужны 2 одинаковых экземпляра.
            </div>
            <div className="hrow">🛡 Экипировка</div>
            <div className="chips">{GEAR_IDS.map(id=><button key={id} className={'chip'+(equipped(id)?' on':'')} onClick={()=>toggleGear(id)}>{id==='armor'?'Броня':id==='helmet'?'Шлем':id==='shield'?'Щит':'Сапоги'} · {equipped(id)?'надето':'надеть'}</button>)}</div>
            <div className="hrow">🌀 {heroDef.ability}: {heroDef.abilityDesc}</div>
            <div className="hrow"><SparkDrop/> Капель бессмертия: <b>{save.immortalityDrops}</b> • 🏺 Артефактов: <b>{save.artifacts.length}/9</b></div>
            {save.artifacts.length > 0 && <div className="hrow">🏺 {save.artifacts.map(a => ARTIFACTS[a]).join(", ")}</div>}
            {save.equippedArtifact&&ARTIFACT_INFO[save.equippedArtifact]&&<div className="hrow">✨ Активный артефакт: <b>{ARTIFACT_INFO[save.equippedArtifact].name}</b> · {ARTIFACT_INFO[save.equippedArtifact].effect}</div>}
            </section>}
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
            <div className="card center"><div className="big">⏳</div><div className="qhead2">Дозор героя</div><p className="dim">Капли бессмертия собираются, даже когда приложение закрыто: 3 в час, до 12 часов.</p>
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
              <button disabled={maxed} onClick={()=>improveForgeItem(item)}>{maxed?'★':free?'0':<>{forgeCost(item.id)}<SparkDrop/>{forgeAshCost(item.id==='shield',level,!save.forgeFreeUsed)>0?' + 🪵✨1':''}</>}</button>
            </div></div>;
          }
          return null;
        };
        return <div key="forge" className="scroll forge-screen" ref={element=>{if(element&&!element.dataset.forgeEntered){element.scrollTop=0;element.dataset.forgeEntered='yes';}}}>
          <div className="forge-head">
            <div className="forge-title">Кузница Вёлунда</div>
            <div className="forge-master">«Сталь помнит каждый бой. Отдай её огню — и она вернётся сильнее».</div>
            <div className="forge-advice"><b>Совет:</b> выбери оружие или щит на стене. Их предел закалки +10; броня, шлем и сапоги — до +5. Для оружия и щитов начиная с +5 дополнительно нужна ясеневая древесина ×1. В запасе: {save.stock.ashWood}.</div>
            <div className="forge-wallet"><span>Запас:</span><b><SparkDrop/> {save.immortalityDrops}</b><span>Капель бессмертия</span></div>
          </div>
          <div className={"forge-free"+(!save.forgeFreeUsed?" ready":"")}>{save.forgeFreeUsed
            ? "Следующая закалка оплачивается Каплями силы. Цена растёт вместе с уровнем предмета."
            : "Дар кузнеца: первое улучшение любого доступного предмета бесплатно."}</div>
          <div className="forge-group-title">Стена оружия Вёлунда</div>
          <ForgeWeaponWall owned={save.ownedWeapons} ownedShields={save.ownedShields} selected={save.heroWeapon} selectedShield={equipped('shield')?save.shieldAsset:null} onChoose={chooseForgeWeapon}/>
          <div className="forge-equipped"><span>В руке: {save.heroWeapon==='default'?('Меч валькирии'):FORGE_WEAPON_MODELS.find(item=>item[2]===save.heroWeapon)?.[1]} · сила +{WEAPON_POWER[save.heroWeapon]} · закалка +{forgeLevel(save.heroWeapon)}</span>
            <button disabled={forgeLevel(save.heroWeapon)>=10} onClick={()=>improveForgeItem(forgeItems.find(item=>item.id===save.heroWeapon)!)}>{forgeLevel(save.heroWeapon)>=10?'Максимум +10':<>Закалить {save.forgeFreeUsed?<>{forgeCost(save.heroWeapon)}<SparkDrop/>{forgeAshCost(true,forgeLevel(save.heroWeapon),!save.forgeFreeUsed)>0?" + ясень ×1":""}</>:'бесплатно'}</>}</button></div>
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
              <div className="stat"><b><SparkDrop/> {save.immortalityDrops}</b><span>Капли бессмертия</span></div>
              <div className="stat"><b>🏺 {save.artifacts.length}/9</b><span>артефакты</span></div>
            </div>
            <div className="rank">🏆 Ранг: {rank(save.immortalityDrops)}</div>
            {save.hero && heroDef && <p className="dim">Герой: {save.hero.name} • {heroDef.race} • испытаний пройдено: {save.trials.length}</p>}
          </div>
          <div className="hall-grid">
            <div className="hall-section">
              <span className="hall-icon">⚔️</span><h3>Оружейный склад</h3>
              <p>{save.heroWeapon==='default'?('Меч валькирии'):FORGE_WEAPON_MODELS.find(item=>item[2]===save.heroWeapon)?.[1]} сейчас в руке. Все найденные копии остаются на складе Чертога и позже используются для крафта.</p>
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
            <div className="hall-section artifact-hall">
              <span className="hall-icon">🏺</span><h3>Артефакты миров</h3>
              <p>Нажми на найденный артефакт, чтобы увидеть его происхождение и силу. Одновременно можно применять один артефакт.</p>
              <div className="artifact-slots">{save.artifacts.length?save.artifacts.map(id=>{const item=ARTIFACT_INFO[id];if(!item)return null;return <button key={id} className={'artifact-slot'+(save.equippedArtifact===id?' on':'')} onClick={()=>{setSelectedArtifact(id);haptic();}} title={item.name}>{item.symbol}{save.equippedArtifact===id&&<small>АКТИВЕН</small>}</button>}):<span className="dim">Первый артефакт появится после полного завершения мира.</span>}</div>
              {selectedArtifact&&ARTIFACT_INFO[selectedArtifact]&&(()=>{const item=ARTIFACT_INFO[selectedArtifact],active=save.equippedArtifact===selectedArtifact;return <div className="artifact-detail"><b>{item.symbol} {item.name}</b><small>{item.world}. {item.description}</small><small><b>Эффект:</b> {item.effect}</small><button className={active?'active':''} onClick={()=>{setSave(s=>({...s,equippedArtifact:active?'':selectedArtifact}));haptic('success');say(active?item.name+' снят.':item.name+' применён. '+item.effect);}}>{active?'Снять артефакт':'Применить'}</button></div>})()}
            </div>
            <div className="hall-section inventory-hall"><InventorySection kind="potions" potions={save.potions} runes={save.runes} equippedRune={save.equippedRune} hp={Math.min((heroDef?.hp??100)+gearHp(),save.fieldHp??(heroDef?.hp??100)+gearHp())} maxHp={(heroDef?.hp??100)+gearHp()} frostGuard={save.frostGuard} potionBoosts={save.potionBoosts} onUsePotion={useInventoryPotion} onEquipRune={equipInventoryRune}/></div>
            <div className="hall-section inventory-hall"><InventorySection kind="runes" potions={save.potions} runes={save.runes} equippedRune={save.equippedRune} lootCounts={save.lootCounts} runeLevels={save.forgeLevels} hp={Math.min((heroDef?.hp??100)+gearHp(),save.fieldHp??(heroDef?.hp??100)+gearHp())} maxHp={(heroDef?.hp??100)+gearHp()} frostGuard={save.frostGuard} potionBoosts={save.potionBoosts} onUsePotion={useInventoryPotion} onEquipRune={equipInventoryRune} onFuseRune={fuseInventoryRune}/></div>
          </div>
          <button className="craft-entry" onClick={()=>{haptic();go({t:"craft"});}}><b>🔥 Перейти в локацию крафта</b><span>Соединяй оружие, материалы и Капли бессмертия в новые предметы.</span></button>
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
              <button disabled={!craftWeapon} className={"craft-slot"+(craftMaterial?" selected":"")} onClick={()=>setCraftPicker(craftPicker==="material"?null:"material")}>
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
                {FORGE_WEAPON_MODELS.filter(([, ,id])=>id&&directCraftWeaponIds.has(id as HeroWeapon)&&save.ownedWeapons.includes(id as HeroWeapon)).map(([,name,id])=>{
                  const weaponId=id as HeroWeapon,count=Math.max(0,Number(save.lootCounts[weaponId])||0),usable=count>=2;
                  return <button key={id} disabled={!usable} className={"craft-choice"+(craftWeapon===weaponId?" on":"")} onClick={()=>chooseCraftWeapon(weaponId)}>
                    <span style={{fontSize:20}}>{weaponDisplayIcon(weaponId)}</span><span><b>{name}</b><small>{usable?"всего: "+count+" · лишних: "+(count-1):"всего: "+count+" · нужен ещё 1 экземпляр"}</small></span>
                  </button>;
                })}
                {FORGE_WEAPON_MODELS.filter(([, ,id])=>id&&directCraftWeaponIds.has(id as HeroWeapon)&&save.ownedWeapons.includes(id as HeroWeapon)).length===0&&<div className="dim">Нет оружия с прямым рецептом. Остальные дубликаты разбираются ниже на Руническую сталь.</div>}
              </div>
            </div>}

            {craftPicker==="material"&&<div className="craft-picker">
              <div className="craft-picker-title">{craftWeapon?"Подходящий материал для "+lootDisplayName(craftWeapon):"Сначала выбери оружие"}</div>
              <div className="craft-choices">
                {!craftWeapon&&<div className="dim">Материал зависит от выбранного оружия.</div>}
                {craftWeapon&&([...new Set(craftRecipesForWeapon.map(r=>r.material))] as CraftMaterial[]).map(id=><button key={id} disabled={save.stock[id]<=0} className={"craft-choice"+(craftMaterial===id?" on":"")} onClick={()=>{setCraftMaterial(id);setCraftPicker(null);}}>
                  <span style={{fontSize:20}}>{craftMaterialIcon(id)}</span><span><b>{craftMaterialName(id)}</b><small>в корзине: {save.stock[id]}</small></span>
                </button>)}
              </div>
            </div>}

            <div className="hrow"><SparkDrop/> Капли бессмертия: <b>{save.immortalityDrops}</b></div>
            {selectedCraftRecipe?<div className="craft-cost">
              Рецепт: 1 лишняя копия <b>{lootDisplayName(selectedCraftRecipe.weapon)}</b> + {selectedCraftRecipe.amount} × {craftMaterialName(selectedCraftRecipe.material)} + {selectedCraftRecipe.cost} Капель бессмертия.
              <br/>Результат: <b>{lootDisplayName(selectedCraftRecipe.result)}</b>.
            </div>:<div className="craft-cost">{craftWeapon?"Для этого оружия выбери показанный подходящий материал.":"Выбери оружие с прямым рецептом. Оружие без продолжения разбирается ниже на Руническую сталь."}</div>}
            <button className="btn gold" disabled={!craftReady} onClick={performCraft}>{selectedCraftRecipe?"Создать: "+lootDisplayName(selectedCraftRecipe.result):"Выбери рецепт"}</button>

            <div className="steel-wallet">⚙️ Руническая сталь: <b>{save.runeSteel}</b></div>

            <div className="steel-section">
              <h3>⚒ Разбор лишнего оружия</h3>
              <p>Последний экземпляр всегда остаётся на складе. Разобрать можно только дубликат; Золотой меч разбору не подлежит.</p>
              <div className="steel-list">
                {dismantlableWeapons.length===0
                  ? <div className="dim">Сейчас нет лишнего оружия для разбора.</div>
                  : dismantlableWeapons.map(id=>{
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
                  const ready=!locked&&save.runeSteel>=recipe.steel&&save.stock[recipe.material]>=recipe.amount&&save.stock.ashWood>=(recipe.ashWood||0)&&save.immortalityDrops>=recipe.cost;
                  return <div key={recipe.id} className={"steel-recipe"+(locked?" locked":"")}><span><b>{recipe.resultShield?"🛡️":"⚔️"} {recipe.name}</b><small>{locked?"Откроется после "+recipe.requires+" испытаний Мидгарда":recipe.steel+" стали + "+recipe.amount+" × "+craftMaterialName(recipe.material)+(recipe.ashWood?" + "+recipe.ashWood+" × Ясеневая древесина":"")+" + "+recipe.cost+" Капель бессмертия"}</small></span><button disabled={!ready} onClick={()=>craftRuneSteelItem(recipe)}>{locked?"Закрыто":"Создать"}</button></div>;
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

      {save.hero && screen.t!=="forge" && screen.t!=="mill" && (
        <div className="nav">
          {NAV.map(n => (<button key={n.id} className={"navbtn" + (isNav(n.id) ? " on" : "")} aria-current={isNav(n.id) ? "page" : undefined} onClick={() => go(navScreen(n.id))}><span className="ic" aria-hidden="true"><img className="nav-art" src={`${BASE}img/models/ui_nav_${n.id === "tree" ? "path" : n.id}.png`} alt="" draggable={false} onError={e=>{e.currentTarget.hidden=true;const fallback=e.currentTarget.nextElementSibling;if(fallback instanceof HTMLElement)fallback.hidden=false;}}/><span hidden>{n.ic}</span></span>{n.t}</button>))}
        </div>
      )}

      {repairProject&&screen.t==='realm'&&screen.id==='midgard'&&<div className="chaos-panel" role="dialog" aria-label="Восстановление локации" onPointerDown={e=>e.stopPropagation()}>
        <div className="chaos-panel-title"><b>{repairProject.name}</b><button aria-label="Закрыть" onClick={()=>setRepairDialog(null)}>×</button></div>
        <p>{repairProject.damage}</p><p>Печать снята. Подготовь ремонт с помощью жителей:</p>
        {repairProject.jobs.map(j=><p key={j.resident}>{save.done.includes(workKey(repairProject.id,j.resident))?'✅':'○'} {REPAIR_RESIDENTS[j.resident]} — {REPAIR_GOODS[j.goods]} ×{j.quantity}</p>)}
        {repaired(save,repairProject.id)?<p>✅ Локация восстановлена.</p>:<button disabled={!canRestore(save,repairProject)} onClick={()=>finishRepair(repairProject.id)}>Восстановить · награда {repairProject.reward} капель</button>}
      </div>}
      {currentChaosGate&&screen.t==='realm'&&screen.id==='midgard'&&<div className="chaos-panel" onPointerDown={e=>e.stopPropagation()} role="dialog" aria-label="Врата хаоса">
        <div className="chaos-panel-title"><b>{currentChaosGate.name}</b><button aria-label="Закрыть" onClick={()=>setChaosDialog(null)}>×</button></div>
        {save.done.includes(chaosKey(currentChaosGate.id))?<><p>Печать снята.{currentChaosGate.location?' Теперь нужно восстановить повреждённую локацию.':save.done.includes('bridge:north:repaired')?' Проход свободен.':' Подготовь материалы у Сигрид, Бьёрна и Торвальда, затем восстанови Северный мост у реки.'}</p>{currentChaosGate.location&&<button onClick={()=>{setRepairDialog(currentChaosGate.id);setChaosDialog(null);}}>Осмотреть повреждения</button>}</>:<>
          {currentChaosBlocker&&<p><b>Этот этап пока закрыт.</b><br/>Сначала: {currentChaosBlocker.name} — {routePhase(routeProgress(save),currentChaosBlocker).label.toLowerCase()}. Уже открытые локации сохраняются.</p>}
          <p>Тёмная печать {currentChaosGate.seal.join(' · ')}.<br/>Выбери один способ очищения.</p>
          <div className="chaos-recipes">{currentChaosGate.recipes.map((needs,index)=>{const available=needs.every(n=>runeCopies(save,n.id)>=n.quantity&&runeStrength(save,n.id)>=n.level);return <button key={index} className={chaosRecipe===index?'chosen':''} disabled={!available} onClick={()=>setChaosRecipe(index)}>{needs.map(n=>{const rune=RUNE_CATALOG.find(r=>r.id===n.id)!;return <span key={n.id}><strong>{rune.symbol}</strong> {rune.name} ×{n.quantity} · {['I','II','III'][n.level-1]}<small>В запасе: {runeCopies(save,n.id)} · уровень {['I','II','III'][runeStrength(save,n.id)-1]}</small></span>;})}</button>;})}</div>
          <p>Стоимость: {currentChaosGate.cost} капель.<br/>Баланс: {save.immortalityDrops}. Указанные руны расходуются.</p>
          {!currentChaosGate.recipes.some(needs=>needs.every(n=>runeCopies(save,n.id)>=n.quantity&&runeStrength(save,n.id)>=n.level))&&<p>Руны дают разбойники и мельница. Усиль руны до нужного уровня в Чертоге.</p>}
          <button className="chaos-cleanse" disabled={!canCleanseGate(save,currentChaosGate,chaosRecipe)} onClick={()=>{setSave(s=>cleanseGate(s,currentChaosGate.id,chaosRecipe));haptic('success');}}>Снять печать</button>
        </>}
      </div>}
      {toast && <div className="toast">{toast}</div>}
      {houseDialog&&screen.t==="realm"&&screen.id==="midgard"&&<div className="house-dialog-backdrop" onPointerDown={e=>e.stopPropagation()}>
        <div className="house-dialog-panel" role="dialog" aria-modal="true" aria-label="Разговор у дома">
          <h3>{repairResident in REPAIR_RESIDENTS?REPAIR_RESIDENTS[repairResident]:houseDialogId==='welund'?'Кузнец Велунд':houseDialogId==='northBridge'?'Северный мост':houseDialogId==='goldChest'?'Золотой сундук':houseDialogId==='oldfarm'?'Старый хутор':'Разговор у дома'}</h3><p>{houseDialog}</p>
          {repairAssignment&&<div className="house-quest-status"><b>Восстановление: {repairAssignment.project.name}</b><span>{REPAIR_GOODS[repairAssignment.job.goods]} ×{repairAssignment.job.quantity}</span><span>{Object.entries(repairAssignment.job.cost).map(([k,n])=>`${({wood:'Древесина',twigs:'Ветки',herbs:'Травы',ashWood:'Ясеневая древесина'} as Record<string,string>)[k]} ${save.stock[k as GatherKind]}/${n}`).join(' · ')}</span><button disabled={!canPrepareRepair(save,repairAssignment.project,repairAssignment.job)} onClick={()=>{setSave(s=>prepareRepair(s,repairAssignment.project,repairAssignment.job));setHouseDialog('Припасы подготовлены и добавлены в рюкзак. Отнеси их к повреждённой локации или передай старейшине.');haptic('success');}}>Подготовить припасы</button></div>}
          {repairResident==='elder'&&<div className="house-quest-status"><b>План восстановления Мидгарда</b>{REPAIR_PROJECTS.map(p=><div key={p.id}><b>{repaired(save,p.id)?'✅':save.done.includes(chaosKey(p.id))?'🔧':'🔒'} {p.name}</b><span>{repaired(save,p.id)?'Восстановлена':save.done.includes(chaosKey(p.id))?`Готово работ: ${p.jobs.filter(j=>save.done.includes(workKey(p.id,j.resident))).length}/${p.jobs.length}`:'Сначала сними печать хаоса'}</span>{canRestore(save,p)&&<button onClick={()=>finishRepair(p.id)}>Принять восстановление · +{p.reward}</button>}</div>)}</div>}
          {resident&&residentOrder&&<div className="house-quest-status">
            <b>{residentOrder.initial?'Материалы для моста':'Заказ №'+((save.villageOrders[resident]||0)+1)}: {residentOrder.title}</b>
            <span>{orderMaterials(save,resident)}</span>
            <span>Награда: {residentOrder.drops} капель бессмертия{residentOrder.potion?' и эликсир':''}.</span>
            {!residentOrder.initial&&(save.locationCooldowns['village:'+resident]||0)>Date.now()&&<span>Следующий заказ через {Math.max(1,Math.ceil(((save.locationCooldowns['village:'+resident]||0)-Date.now())/60000))} мин.</span>}
            <button type="button" disabled={!canCompleteOrder(save,resident)} onClick={submitVillageOrder}>Сдать материалы</button>
          </div>}
          {houseDialogId==='carpenter'&&<div className="house-quest-status"><b>Обмен излишков древесины</b><span>В запасе: {save.stock.wood}. Обмен добровольный.</span>{WOOD_TRADES.map(t=><button key={t.id} disabled={save.stock.wood<t.wood} onClick={()=>{setSave(s=>exchangeWood(s,t.id));haptic('success');setHouseDialog('Обмен выполнен. Материалы добавлены в рюкзак.');}}>{t.label}</button>)}</div>}
          {['house','elder','northBridge'].includes(houseDialogId)&&<div className="house-quest-status"><b>Ремонт Северного моста</b>
            <span>{preparationDone(save,'herbalist')?'✅':'○'} Настой Сигрид</span>
            <span>{preparationDone(save,'carpenter')?'✅':'○'} Основание Бьёрна</span>
            <span>{preparationDone(save,'craftsman')?'✅':'○'} Крепления Торвальда</span>
            <span>Капли бессмертия: {save.immortalityDrops} / {VILLAGE_WARD_COST}</span>
            {houseDialogId==='northBridge'&&!save.done.includes('bridge:north:repaired')&&<button type="button" disabled={!wardPrepared(save)||save.immortalityDrops<VILLAGE_WARD_COST} onClick={activateVillageWard}>Отремонтировать мост · {VILLAGE_WARD_COST} капель</button>}
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
