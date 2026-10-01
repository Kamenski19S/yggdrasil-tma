import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { clone as cloneSkinned } from "three/examples/jsm/utils/SkeletonUtils.js";
import { type Screen, loadSave, type Save, type HeroWeapon, tg, cachedGlbBuffer, BASE, type GatherKind, GATHER_SPOTS, GATHER_RESPAWN_MS, refreshGathering, MIDGARD_GUARDIAN_ORDER, type Realm, today, LADDER, HEROES, type GearId, shieldForgeKey, ARTIFACT_INFO, WEAPON_POWER, QUESTS, MASTERS, COMBAT_ENERGY, BgImg, NAMES_F, NAMES_M, REALMS, MIDGARD_GUARDIANS, ARTIFACTS, MASTER_IMG, combatEnergyColor, GEAR_IDS, rank, NAV } from './core';
import { type CraftMaterial, CRAFT_RECIPES, craftMaterialName, RUNE_STEEL_YIELD, type SteelCraftRecipe, FORGE_WEAPON_MODELS, SparkDrop, ForgeWeaponWall, InventorySection, craftMaterialIcon, STEEL_CRAFT_RECIPES } from './inventory';
import { lootCountAdd, RUNE_CATALOG, lootDisplayName, POTION_CATALOG, BANDIT_SPECS, MIDGARD_GUARDIAN_LOOT, weaponDisplayIcon } from './world';
import { CSS } from './styles';
import { MillScene } from './MillScene';
import { Midgard3D } from './Midgard3D';



export function App() {
  const [screen, setScreen] = useState<Screen>(() => (loadSave().hero ? { t: "tree" } : { t: "choose" }));
  const millScreenActiveRef=useRef(false);
  const [save, setSave] = useState<Save>(loadSave);
  const [selectedArtifact,setSelectedArtifact]=useState("");
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
  useEffect(()=>{
    const refresh=()=>setSave(s=>refreshGathering(s));
    const id=window.setInterval(refresh,1000);
    document.addEventListener('visibilitychange',refresh);
    return()=>{window.clearInterval(id);document.removeEventListener('visibilitychange',refresh);};
  },[]);
  useEffect(()=>{millScreenActiveRef.current=screen.t==="mill";},[screen.t]);
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
  const go = (s: Screen) => { millScreenActiveRef.current=s.t==="mill"; setScreen(s); };
  const produceMillDrops=useCallback((amount:number)=>{
    if(!millScreenActiveRef.current)return;
    const safe=Math.max(0,Math.floor(amount));
    if(!safe)return;
    setSave(s=>({...s,millStored:s.millStored+safe}));
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
  const pickBanditRune=(state:Save)=>{
    const ranked=RUNE_CATALOG.map(rune=>{
      const savedCount=Math.max(0,Number(state.lootCounts[rune.id])||0);
      const count=Math.max(savedCount,state.runes.includes(rune.id)?1:0);
      return {rune,count};
    });
    const minCount=Math.min(...ranked.map(entry=>entry.count));
    const pool=ranked.filter(entry=>entry.count===minCount);
    return pool[Math.floor(Math.random()*pool.length)].rune;
  };
  const rewardBandit=(id:string)=>{
    const spec=BANDIT_SPECS.find(b=>b.id===id);
    if(!spec)return "";
    const runeDrop=spec.kind==='rune'?pickBanditRune(save):null;
    const rewardText=runeDrop?`Руна ${runeDrop.name} ${runeDrop.symbol}`:spec.reward;
    setSave(s=>{
      const itemId=runeDrop?.id||spec.item||"";
      const lootIds=itemId?Array(spec.quantity||1).fill(itemId):[];
      return {...s,sparks:s.sparks+spec.sparks,
        ownedWeapons:spec.kind==='weapon'&&spec.item?[...new Set([...s.ownedWeapons,spec.item])]:s.ownedWeapons,
        potions:spec.kind==='potion'&&spec.item?[...s.potions,...Array(spec.quantity||1).fill(spec.item)]:s.potions,
        runes:runeDrop?[...new Set([...s.runes,runeDrop.id])]:s.runes,
        equippedRune:runeDrop&&!s.equippedRune?runeDrop.id:s.equippedRune,
        lootCounts:lootCountAdd(s.lootCounts,lootIds)};
    });
    haptic('success');say(`Победа: +${spec.sparks} Капель силы и ${rewardText}. Разбойник вернётся через 15 минут игры.`);
    return rewardText;
  };
  const banditKnockout=()=>{
    setSave(s=>({...s,sparks:Math.max(0,s.sparks-5),fieldHp:(heroDef?.hp||100)+gearHp()}));
    haptic();say('Рунический удар разбойника сбил Вику с ног. Древо вернуло её к началу пути (−5 Капель силы).');
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
    md=Math.max(1,md-forgedDefense-activeRuneBonus('defense')-(activeArtifactDef()?.defense||0));
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
        {screen.t === "mill" && <button className="back" onClick={() => go({ t: "realm", id:"midgard" })}>← Мидгард · Мельница</button>}
        {screen.t === "choose" && <div className="title">🌫️ Выбор судьбы</div>}
        {screen.t === "hero" && <div className="title">🛡 Герой</div>}
        {screen.t === "gift" && <div className="title">🎁 Дар</div>}
        {screen.t === "hall" && <div className="title">🏛️ Чертог</div>}
        {screen.t === "craft" && <button className="back" onClick={() => go({ t: "hall" })}>← Чертог · Крафт</button>}
        {screen.t === "forge" && <button className="back" onClick={() => go({ t: "realm", id:"midgard" })}>← Мидгард · Кузница</button>}
        {screen.t === "trial" && <div className="title">🗝 Испытание</div>}
        {screen.t === "fight" && <div className="title">⚔ Бой</div>}
        <div className="sparks"><SparkDrop/> {screen.t==="mill"?<>{save.immortalityDrops} Капель бессмертия</>:<>{save.sparks} Капель силы</>}</div>
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

      {screen.t === "mill" && (
        <MillScene
          stored={save.millStored}
          balance={save.immortalityDrops}
          onProduce={produceMillDrops}
          onCollect={collectMillDrops}
          onBack={()=>go({t:"realm",id:"midgard"})}
        />
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
        const now=Date.now(),readyAt=save.locationCooldowns.fallenAsh||0;
        if(now<readyAt){
          const mins=Math.max(1,Math.ceil((readyAt-now)/60000));
          say(`Поверженный ясень уже осмотрен. Новые сухие части можно будет собрать примерно через ${mins} мин.`);
          return;
        }
        const first=!save.done.includes("forest:ashwood:first");
        setSave(state=>({...state,
          sparks:state.sparks+(first?5:0),
          stock:{...state.stock,ashWood:state.stock.ashWood+1},
          done:[...new Set([...state.done,"forest:ash","forest:ashwood:first"])],
          locationCooldowns:{...state.locationCooldowns,fallenAsh:now+15*60*1000}
        }));
        haptic("success");
        say(first
          ?"Даже павшее дерево хранит силу. Среди старых корней найдена крепкая древесина, пропитанная энергией земли. Получено: Ясеневая древесина ×1 и +5 Капель силы."
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
      onOpenMill={()=>go({t:"mill"})}
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
              {(['default','knife','axe','mace','spear'] as HeroWeapon[]).filter(id=>id==='default'||save.ownedWeapons.includes(id)).map(id=>{
                const total=id==='default'?1:Math.max(1,Number(save.lootCounts[id])||1);
                return <button key={id}
                  className={"chip"+(save.heroWeapon===id?" on":"")}
                  onClick={()=>{setSave(s=>({...s,heroWeapon:id}));haptic();}}
                >{id==='default'?(save.heroSkin==='valkyrie'?'Меч валькирии':'Секира викинга'):FORGE_WEAPON_MODELS.find(item=>item[2]===id)?.[1]} · сила +{WEAPON_POWER[id]}{id!=='default'?" · "+total+" шт.":""}</button>;
              })}
            </div>
            <div className="dim" style={{marginTop:8}}>
              «Сила +N» — это бонус оружия, не количество. Количество экземпляров указано отдельно как «N шт.». Для обычного крафта нужно минимум 2 одинаковых экземпляра.
            </div>
            <div className="hrow">🛡 Экипировка</div>
            <div className="chips">{GEAR_IDS.map(id=><button key={id} className={'chip'+(equipped(id)?' on':'')} onClick={()=>toggleGear(id)}>{id==='armor'?'Броня':id==='helmet'?'Шлем':id==='shield'?'Щит':'Сапоги'} · {equipped(id)?'надето':'надеть'}</button>)}</div>
            <div className="hrow">🌀 {heroDef.ability}: {heroDef.abilityDesc}</div>
            <div className="hrow"><SparkDrop/> Капель силы: <b>{save.sparks}</b> • 🏺 Артефактов: <b>{save.artifacts.length}/9</b></div>
            {save.artifacts.length > 0 && <div className="hrow">🏺 {save.artifacts.map(a => ARTIFACTS[a]).join(", ")}</div>}
            {save.equippedArtifact&&ARTIFACT_INFO[save.equippedArtifact]&&<div className="hrow">✨ Активный артефакт: <b>{ARTIFACT_INFO[save.equippedArtifact].name}</b> · {ARTIFACT_INFO[save.equippedArtifact].effect}</div>}
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
            <div className="hall-section artifact-hall">
              <span className="hall-icon">🏺</span><h3>Артефакты миров</h3>
              <p>Нажми на найденный артефакт, чтобы увидеть его происхождение и силу. Одновременно можно применять один артефакт.</p>
              <div className="artifact-slots">{save.artifacts.length?save.artifacts.map(id=>{const item=ARTIFACT_INFO[id];if(!item)return null;return <button key={id} className={'artifact-slot'+(save.equippedArtifact===id?' on':'')} onClick={()=>{setSelectedArtifact(id);haptic();}} title={item.name}>{item.symbol}{save.equippedArtifact===id&&<small>АКТИВЕН</small>}</button>}):<span className="dim">Первый артефакт появится после полного завершения мира.</span>}</div>
              {selectedArtifact&&ARTIFACT_INFO[selectedArtifact]&&(()=>{const item=ARTIFACT_INFO[selectedArtifact],active=save.equippedArtifact===selectedArtifact;return <div className="artifact-detail"><b>{item.symbol} {item.name}</b><small>{item.world}. {item.description}</small><small><b>Эффект:</b> {item.effect}</small><button className={active?'active':''} onClick={()=>{setSave(s=>({...s,equippedArtifact:active?'':selectedArtifact}));haptic('success');say(active?item.name+' снят.':item.name+' применён. '+item.effect);}}>{active?'Снять артефакт':'Применить'}</button></div>})()}
            </div>
            <div className="hall-section inventory-hall"><InventorySection kind="potions" potions={save.potions} runes={save.runes} equippedRune={save.equippedRune} hp={Math.min((heroDef?.hp??100)+gearHp(),save.fieldHp??(heroDef?.hp??100)+gearHp())} maxHp={(heroDef?.hp??100)+gearHp()} frostGuard={save.frostGuard} onUsePotion={useInventoryPotion} onEquipRune={equipInventoryRune}/></div>
            <div className="hall-section inventory-hall"><InventorySection kind="runes" potions={save.potions} runes={save.runes} equippedRune={save.equippedRune} lootCounts={save.lootCounts} runeLevels={save.forgeLevels} hp={Math.min((heroDef?.hp??100)+gearHp(),save.fieldHp??(heroDef?.hp??100)+gearHp())} maxHp={(heroDef?.hp??100)+gearHp()} frostGuard={save.frostGuard} onUsePotion={useInventoryPotion} onEquipRune={equipInventoryRune} onFuseRune={fuseInventoryRune}/></div>
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

            <div className="hrow"><SparkDrop/> Капли силы: <b>{save.sparks}</b></div>
            {selectedCraftRecipe?<div className="craft-cost">
              Рецепт: 1 лишняя копия <b>{lootDisplayName(selectedCraftRecipe.weapon)}</b> + {selectedCraftRecipe.amount} × {craftMaterialName(selectedCraftRecipe.material)} + {selectedCraftRecipe.cost} Капель силы.
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

      {save.hero && screen.t!=="forge" && screen.t!=="mill" && (
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
