import {dangerouslyLowHp} from './niflheimCombat';
import {createFirstSeal} from './niflheimFirstSeal';
import {NIFLHEIM_SEALS,sealVictoryReward,sealOpeningReward,sealById,sealOpened,sealGuardianDefeated,sealAvailable,openedSealCount,createNiflheimSealVisual,sealContains,sealBlocksEntry,sealGuardianHealth,sealGuardianDamage,sealViewHint,type NiflheimSealEvent} from './niflheimSeals';
import {installSealGuardian} from './niflheimSealGuardian';
import {AMULET_NAME,AMULET_PARTS,amuletProgress,type AmuletEvent} from './niflheimAmulet';
import {createAmuletScene} from './niflheimAmuletScene';
import {CRYSTAL_NAME,CRYSTAL_PARTS,waterCrystalProgress,type CrystalEvent} from './waterCrystalQuest';
import {createWaterCrystalScene} from './waterCrystalScene';
import {incomingCombatDamage,livingWaterUsed,livingWaterActive,type CombatStats} from './combatStats';
import {boostedPotionDamage,potionDodges,type PotionBoostKind} from './potionEffects';
import {createBridgeRepair,BRIDGE_PARTS} from './niflheimBridgeRepair';
import {createRealmNornsWell,NIFLHEIM_NORNS_STYLE,isNearRealmWell} from './realmNornsWell';
import {installGuardianStones} from './niflheimGuardianStones';
import {createMemoryTable} from './niflheimMemoryTable';
import {memoryQuest,DRY_SEALS,MEMORY_FINDS,SOURCE_RUNES,MEMORY_REWARD,type MemoryEvent} from './niflheimMemoryQuest';
import {dragonProgress,NIFL_ICE,type DragonEvent} from './niflheimDragonQuest';
import {liberationProgress,niflheimLakeFreed,LIBERATION_TRIALS,trialById,COMBAT_TRIALS,type LiberationEvent} from './niflheimLiberation';
import {installNiflheimRiggedEnemies,NIFLHEIM_SHADOW_SITES,NIFLHEIM_EXTRA_GUARDS} from './niflheimEnemyActors';
import {createHvergelmir} from './niflheimHvergelmir';
import {lakeBridgeBlocked} from './niflheimLakeBridgeCollision';
import {createVenetianBridges} from './niflheimVenetianBridges';
import {installNiflheimBridge} from './niflheimMedievalBridge';
import {createCombatEffects} from './combatEffects';
import {createNiflheimGlowTrails} from './niflheimGlowTrails';
import {prepareNineWorldStranger} from './nineWorldStranger';
import {addEntranceTorches} from './niflheimEntranceTorches';
import {MeshoptDecoder} from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import {fitRuneEntrance,runeEntranceSupports} from './niflheimRuneEntrance';
import {addFrozenRiverFinds} from './niflheimFrozenFinds';
import {createLakeDescendingCave} from './niflheimLakeCave';
import {installTowerEntrance} from './niflheimTower';
import {textureBuildingPart} from './buildingTextures';
import {createForgottenNamesHall} from './niflheimNamesHall';
import {createRootsIceCave} from './niflheimRootsCave';
import {InventorySection} from './inventory';
import {createNiflheimForge} from './niflheimForge';
import {createMemoryIgloo} from './niflheimIgloo';
import {createNiflheimGiant} from './niflheimGiant';
import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {clone as cloneSkeleton} from 'three/examples/jsm/utils/SkeletonUtils.js';
import {BASE,cachedGlbBuffer,WEAPON_ASSET,WEAPON_POWER,textureSteelOnWeapon,styleNiflheimWeapon,type HeroWeapon} from './core';
import {addEntranceIce} from './niflheimEntranceIce';
import {addEntranceSnow} from './niflheimEntranceSnow';
import {addEntranceVeil} from './niflheimEntranceVeil';
import {addEntrancePowder} from './niflheimEntrancePowder';
import {addNiflheimRivers} from './niflheimRivers';
import {reshapeCaveEntrance,createCaveSpace,CAVE_SCALE,CAVE_FRONT_Z,CAVE_MOUTH_X,CAVE_FLOOR_Y} from './niflheimCaveEntrance';
import {NIFL_SCALE,NIFL_SOURCE,NIFL_ENTRANCE_ARCS,NIFL_LOCATIONS,NIFL_RIVERS,NIFL_LAKES,NIFL_ROUTES,niflRiverBlocked,niflGroundY,clampNiflPosition,moveThroughNiflEntrance} from './niflheimMapData';

const hash=(x:number,z:number)=>{const n=Math.sin(x*127.1+z*311.7)*43758.5453;return n-Math.floor(n);};
const CSS=`
.nifl-seal-battle{position:absolute;inset:0;z-index:22;pointer-events:none;color:#fff;font-family:inherit}.nifl-seal-health{position:absolute;top:12px;left:12px;right:12px;display:flex;gap:12px;justify-content:space-between}.nifl-seal-fighter{background:#152532df;border:1px solid #b79a62;border-radius:11px;padding:7px 10px;display:flex;flex-direction:column;gap:3px;min-width:0;width:43%;font-size:12px;text-shadow:0 1px #000}.nifl-seal-fighter b{font-size:13px}.nifl-seal-fighter span{font-size:11px}.nifl-seal-meter{width:100%;height:7px;background:#314652;border-radius:6px;overflow:hidden}.nifl-seal-meter i{display:block;height:100%;border-radius:6px}.nifl-seal-controls{position:absolute;bottom:10px;left:6px;right:6px;text-align:center}.nifl-seal-energy{display:flex;align-items:center;justify-content:center;gap:5px;margin:0 auto 7px;max-width:100%;height:29px;background:#122330bb;border-radius:9px;padding:2px 4px}.nifl-seal-energy span{width:12px;height:12px;border-radius:50%;border:1px solid #b7d9d1;flex:none}.nifl-seal-energy small{font-size:10px;line-height:1.15;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:68%;color:#fff}.nifl-seal-actions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px}.nifl-seal-actions button{pointer-events:auto;display:flex;align-items:center;flex-direction:column;gap:2px;background:#172839bf;border:1px solid #bda16b;border-radius:10px;padding:5px 2px;color:#fff;font-family:inherit;min-width:0;min-height:70px;text-shadow:0 1px #000}.nifl-seal-actions button:disabled{opacity:.45}.nifl-seal-actions img{width:42px;height:42px;object-fit:contain}.nifl-seal-actions b{font-size:10px;line-height:1.1}.nifl-seal-rune{font-size:36px;color:#d9b976;line-height:42px}.nifl-seal-retreat{pointer-events:auto;border:0;color:#e6d5af;background:#152535cc;padding:3px 13px;border-radius:8px;font-size:10px;margin-top:4px}

.nifl-quest-near,.nifl-quest-panel{background:#14212dee!important;color:#f0e1ba!important;border:1px solid #bda16b!important}.nifl-quest-panel{max-width:430px!important}.nifl-quest-panel button,.nifl-quest-near button{background:#172b3d!important;color:#f0e1ba!important;border:1px solid #bda16b!important}.nifl-rune-choices{display:flex;gap:8px}.nifl-rune-choices button{flex:1;min-width:0;font-size:11px!important}.nifl-rune-choices span{display:block;font-size:30px}.nifl-quest-progress{position:absolute;bottom:63px;top:auto;left:10px;transform:none;font-size:10px;padding:4px 7px;color:#f0e1ba;background:#14212ddb;border:1px solid #bda16b;border-radius:8px;pointer-events:none;white-space:nowrap}

.nifl-world{position:relative;flex:1;min-height:0;overflow:hidden;background:#9ab3c4;touch-action:none}.nifl-mount{position:absolute;inset:0}.nifl-mount canvas{display:block;width:100%;height:100%}.nifl-top{position:absolute;top:12px;left:12px;right:12px;display:flex;justify-content:space-between;align-items:flex-start;gap:8px;pointer-events:none}.nifl-top h2{margin:0;color:#eaf7ff;font-size:20px;text-shadow:0 2px 4px #143449}.nifl-top p{margin:4px 0;color:#eaf7ff;font-size:11px;text-shadow:0 1px 3px #143449}.nifl-top button{pointer-events:auto;background:#f9fcff;color:#253847;border:2px solid #b7c9d2;border-radius:10px;padding:10px;font:inherit;font-size:13px}.nifl-status{position:absolute;bottom:12px;top:auto;left:10px;right:10px;transform:none;padding:6px 10px;border-radius:9px;background:#182b3de8;color:#f6e4bd;border:1px solid #ad915d;font-size:11px;text-align:center;max-width:none;z-index:6;pointer-events:none;line-height:1.4}
.nifl-joystick{padding:0;user-select:none}.nifl-joystick img{width:100%;height:100%;pointer-events:none}.nifl-realm-title{display:flex;align-items:center;justify-content:center;height:58px;color:#eaf7ff!important;font-size:20px!important;text-shadow:0 2px 4px #143449}

.nifl-near{position:absolute;bottom:64px;top:auto;right:10px;width:min(56%,218px);z-index:5;background:#fffffff2;color:#23313b;border:2px solid #b5c7d1;border-radius:13px;padding:10px}.nifl-near b{font-size:13px;display:block;line-height:1.4}.nifl-near button{width:100%;padding:9px 4px;margin-top:7px;border:1px solid #acbec9;border-radius:8px;background:#edf3f6;color:#23313b;font:inherit;font-size:12px}
.nifl-seal-prompt{position:absolute;left:10px;right:10px;bottom:8px;z-index:7;box-sizing:border-box;padding:7px 10px;border:1px solid #9c526b;border-radius:10px;background:#14212dee;color:#f0e1ba;font-size:11px;line-height:1.35}.nifl-seal-prompt b{display:block;font-size:12px;line-height:1.3}.nifl-seal-costs{display:flex;flex-wrap:wrap;gap:2px 9px;margin:3px 0}.nifl-seal-costs span{white-space:nowrap}.nifl-seal-prompt small{display:block;font-size:10px;line-height:1.3}.nifl-seal-prompt button{display:block;width:100%;margin-top:4px;padding:5px;border:1px solid #bda16b;border-radius:6px;background:#172b3d;color:#f0e1ba;font:inherit}.nifl-seal-prompt button:disabled{opacity:.6}
.nifl-overlay{position:absolute;inset:0;z-index:10;background:#142b3acc;display:flex;align-items:center;justify-content:center;padding:12px;touch-action:auto}.nifl-panel{background:#fff;color:#22323d;border:2px solid #bac8d0;border-radius:16px;padding:16px;width:100%;max-width:620px;max-height:94%;overflow:auto}.nifl-panel h3{margin:0 0 8px;font-size:20px}.nifl-panel p{font-size:14px;line-height:1.6}.nifl-panel button{background:#eef3f6;color:#22323d;border:1px solid #b3c4ce;border-radius:9px;padding:10px;font:inherit;font-size:13px}.nifl-close{float:right}.nifl-panel svg{display:block;width:100%;height:42vh;min-height:240px;background:#e7eff4;border-radius:12px;margin-top:12px}.nifl-map-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;margin:12px 0}.nifl-map-list button{text-align:left;font-size:12px}.nifl-map-legend{font-size:12px!important;color:#536875}.nifl-task-book{display:grid;gap:8px}.nifl-task-book-row{background:#f0f5f8;border:1px solid #b7c9d2;border-radius:9px;padding:10px;display:flex;flex-direction:column;gap:5px}.nifl-task-book-row.cleared{opacity:.77}.nifl-task-book-row b{font-size:13px}.nifl-task-book-row small{font-size:12px;line-height:1.5}.nifl-task-book-row button{align-self:flex-start}.nifl-task-actions p{margin:6px 0}.nifl-task-actions button{max-width:100%}
`;

export default function Niflheim3D({sealWallet,onSealEvent,combatStats,onPotionBoostUsed,onFrostGuardHit,questDone,onAmuletEvent,onCrystalEvent,onMemoryEvent,onDragonEvent,onLiberationEvent,onFieldHpChange,useBattlePotion,locationCooldowns,initialPosition,onRemember,onForge,onOpenMill,onEnterUnderground,inventory,weapon,shieldAsset,shieldEquipped}:{sealWallet:{drops:number;steel:number};onSealEvent:(event:NiflheimSealEvent)=>void;combatStats:CombatStats;onPotionBoostUsed:(kind:PotionBoostKind)=>void;onFrostGuardHit:()=>void;questDone:string[];onAmuletEvent?:(event:AmuletEvent)=>void;onCrystalEvent?:(event:CrystalEvent)=>void;onMemoryEvent:(event:MemoryEvent)=>void;onDragonEvent:(event:DragonEvent)=>void;onLiberationEvent:(event:LiberationEvent)=>void;onFieldHpChange:(hp:number)=>void;useBattlePotion:(id:string,hp:number)=>boolean;locationCooldowns:Record<string,number>;onEnterUnderground:(position:{x:number;z:number})=>void;onOpenMill:()=>void;inventory:Omit<React.ComponentProps<typeof InventorySection>,'kind'>;weapon:HeroWeapon;shieldAsset:string;shieldEquipped:boolean;onForge:(position:{x:number;z:number})=>void;initialPosition:{x:number;z:number};onRemember:(position:{x:number;z:number})=>void}){
  const mount=useRef<HTMLDivElement>(null);
  const position=useRef(clampNiflPosition(initialPosition.x,initialPosition.z));
  const remember=useRef(onRemember);remember.current=onRemember;
  const input=useRef(new Set<string>());
  const analog=useRef({x:0,z:0});
  const stick=useRef<HTMLSpanElement>(null);
  const pointerId=useRef<number|null>(null);
  const clearInput=()=>{input.current.clear();analog.current={x:0,z:0};pointerId.current=null;if(stick.current)stick.current.style.transform="translate(0px,0px)";};
  const towerEntrance=useRef<ReturnType<typeof installTowerEntrance>|null>(null);
  const [doorOpening,setDoorOpening]=useState(false);
  const undergroundCallback=useRef(onEnterUnderground);undergroundCallback.current=onEnterUnderground;
  const [near,setNear]=useState('');
  const [sealNear,setSealNear]=useState('');
  const [sealDirection,setSealDirection]=useState('');
  const sealSummoned=useRef('');
  const sealDefeated=useRef(new Set(NIFLHEIM_SEALS.filter(def=>sealGuardianDefeated(questDone,def.id)).map(def=>def.id)));
  for(const def of NIFLHEIM_SEALS)if(sealGuardianDefeated(questDone,def.id))sealDefeated.current.add(def.id);
  const crystal=waterCrystalProgress(questDone),crystalDoneRef=useRef(questDone);crystalDoneRef.current=questDone;
  const [crystalNear,setCrystalNear]=useState('');
  const [amuletNear,setAmuletNear]=useState('');
  const [amuletDialog,setAmuletDialog]=useState(false);
  const amulet=amuletProgress(questDone);
  const amuletCallback=useRef(onAmuletEvent);amuletCallback.current=onAmuletEvent;
  const [crystalDialog,setCrystalDialog]=useState(false);
  const crystalCallback=useRef(onCrystalEvent);crystalCallback.current=onCrystalEvent;
  const [mapOpen,setMapOpen]=useState(false);
  const [journalOpen,setJournalOpen]=useState(false);
  const [inventoryOpen,setInventoryOpen]=useState(false);
  const cooldownsRef=useRef(locationCooldowns);cooldownsRef.current=locationCooldowns;
  const attackAction=useRef<(()=>void)|null>(null);
  const sealGuardianAction=useRef<(()=>void)|null>(null);
  const sealGuardianPlace=useRef<((id:string)=>void)|null>(null);
  const sealHeroStrike=useRef<(()=>void)|null>(null);
  const guardUntil=useRef(0);
  const [selected,setSelected]=useState('');
  const [status,setStatus]=useState('Vicki входит в Нифльхейм…');
  const paused=useRef(false);paused.current=doorOpening||mapOpen||journalOpen||inventoryOpen||!!selected;
  const movementPaused=useRef(false);
  useEffect(()=>{if(!status)return;const timeout=window.setTimeout(()=>setStatus(''),5000);return()=>window.clearTimeout(timeout);},[status]);
  const quest=memoryQuest(questDone),questRef=useRef(quest);questRef.current=quest;
  const dragon=dragonProgress(questDone),dragonRef=useRef(dragon);dragonRef.current=dragon;
  const dragonCallback=useRef(onDragonEvent);dragonCallback.current=onDragonEvent;
  const emitDragon=(event:DragonEvent)=>dragonCallback.current(event);
  const libCallback=useRef(onLiberationEvent);libCallback.current=onLiberationEvent;
  const healthCallback=useRef(onFieldHpChange);healthCallback.current=onFieldHpChange;
  const combatStatsRef=useRef(combatStats);combatStatsRef.current=combatStats;
  const boostUsedRef=useRef(onPotionBoostUsed);boostUsedRef.current=onPotionBoostUsed;
  const frostHitRef=useRef(onFrostGuardHit);frostHitRef.current=onFrostGuardHit;
  const sharedInventoryRef=useRef(inventory);sharedInventoryRef.current=inventory;
  const liberation=liberationProgress(questDone),liberationRef=useRef(liberation);liberationRef.current=liberation;
  const [nearTrial,setNearTrial]=useState('');
  const [trialOpen,setTrialOpen]=useState('');
  const [trialMessage,setTrialMessage]=useState('');
  const [battle,setBattle]=useState<{id:string;hp:number;maxHp:number;heroHp:number;energy:number;guard:boolean;runeCharge:number;log:string}|null>(null);
  const battleRef=useRef(battle);battleRef.current=battle;
  const trialInfo=trialById(trialOpen==='livingWater'?'threeNornsWell':trialOpen);
  const [libStatus,setLibStatus]=useState('');
  const enterTrial=(id:string)=>{
    if(id==='livingWater'){setTrialOpen(id);return;}
    const trial=trialById(id);if(!trial)return;
    if(sealById(id)&&!sealOpened(questDone,id)){setStatus('🔒 Сначала сними печать у локации «'+sealById(id)!.location+'».');return;}
    if(id==='threeNornsWell'&&liberation.has(id)){setTrialOpen(id);return;}
    if(liberation.has(id)&&COMBAT_TRIALS.has(id as any)){
      const key='niflheim:liberation:repeat:'+id;
      const remaining=(locationCooldowns[key]||0)-Date.now();
      if(id==='vampire'){setStatus('Морвейн свободен и больше не враждует с Vicki.');return;}
      if(remaining>0){setStatus('Этот страж восстановит силы через '+Math.ceil(remaining/60000)+' мин.');return;}
    }
    if(liberation.has(id)&&!COMBAT_TRIALS.has(id as any)){setStatus('Эта локация уже освобождена.');return;}
    setMapOpen(false);setSelected('');setQuestDialog(null);setInventoryOpen(false);
    setTrialMessage('');
    if(trial.kind==='battle')startTrialBattle(trial.id);else setTrialOpen(id);
  };
  const startSealBattle=(sealId:string)=>{
    if(battleRef.current)return;
    const done=crystalDoneRef.current,def=sealById(sealId);if(!def||sealOpened(done,sealId))return;
    if(!sealAvailable(done,sealId)){const previous=NIFLHEIM_SEALS[def.order-2];setStatus('🔒 Эта печать ещё спит. Сначала открой «'+(previous?.location||'предыдущую локацию')+'».');return;}
    if(sealDefeated.current.has(sealId)||sealGuardianDefeated(done,sealId))return;
    if(!sealGuardianPlace.current){setStatus('Страж печати ещё загружается. Подожди немного и ударь снова.');return;}
    sealSummoned.current=sealId;sealGuardianPlace.current?.(sealId);
    const hp=sealGuardianHealth(combatStatsRef.current.attack,def);
    const next={id:'sealGuardian:'+sealId,hp,maxHp:hp,heroHp:Math.max(1,sharedInventoryRef.current.hp),energy:5,guard:false,runeCharge:2,log:'Печать пробуждает стражника '+def.order+'/'+NIFLHEIM_SEALS.length+'! Он атакует Vicki.'};
    battleRef.current=next;setBattle(next);clearInput();
  };
  const startTrialBattle=(id:string)=>{
    const trial=trialById(id);if(!trial||!('hp' in trial)||!('attack' in trial))return;
    if(id!=='vampire'){
      setTrialOpen('');setBattle(null);
      setStatus('⚔️ Подойди к стражу и дерись в мире: атака оружием, щит и перемещение. Трофей попадёт в инвентарь.');
      return;
    }
    setTrialOpen('');setBattle({id,hp:trial.hp,maxHp:trial.hp,heroHp:Math.max(30,inventory.hp),energy:5,guard:false,runeCharge:2,log:'Встань на защиту Нифльхейма!'});
    clearInput();
  };
  const battleAction=(type:'hit'|'shield'|'rune')=>{
    if(!battle||inventoryOpen)return;
    const isSeal=battle.id.startsWith('sealGuardian:');
    const sealId=isSeal?battle.id.slice('sealGuardian:'.length):'';
    const sealDef=isSeal?sealById(sealId):undefined;
    const trial=trialById(battle.id);if(!isSeal&&(!trial||!('attack' in trial)))return;
    if(type==='rune'&&(!inventory.equippedRune||battle.runeCharge<1))return;
    if(type==='shield'&&!shieldEquipped){setBattle({...battle,log:'Для защиты сначала нужен щит.'});return;}
    const guard=type==='shield';
    if(isSeal){if(guard)guardUntil.current=performance.now()+1250;else sealHeroStrike.current?.();}
    const boosts=inventory.potionBoosts;
    let power=type==='hit'?combatStats.attack:type==='rune'?combatStats.runeAttack:0;
    const boost=type==='hit'?'attack':type==='rune'?'rune':null;
    if(boost&&(boosts?.[boost]||0)>0){power=boostedPotionDamage(power,boosts![boost]);onPotionBoostUsed(boost);}
    const enemyHp=Math.max(0,battle.hp-(guard?0:Math.max(1,power)));
    if(enemyHp<=0){
      if(isSeal&&sealDef){
        sealDefeated.current.add(sealId);sealSummoned.current='';battleRef.current=null;setBattle(null);onSealEvent(('guardianDefeated:'+sealId) as NiflheimSealEvent);
        setStatus('⚔️ Страж '+sealDef.order+'/'+NIFLHEIM_SEALS.length+' побеждён! +'+sealVictoryReward(sealDef).toLocaleString('ru-RU')+' капель. Теперь можно снять печать.');
        return;
      }
      setBattle(null);onLiberationEvent(('victory:'+battle.id) as LiberationEvent);
      setLibStatus('✨ '+(trial?.outcome??'Победа'));setStatus('Победа! Получены Капли бессмертия, руна, эликсир и руническая сталь.');
      return;
    }
    if(isSeal){
      const next={...battle,hp:enemyHp,guard,energy:type==='shield'?Math.min(5,battle.energy+1):Math.max(1,battle.energy-1),
        runeCharge:type==='rune'?battle.runeCharge-1:battle.runeCharge,
        log:guard?'Vicki поднимает щит и ждёт удара стража.':type==='rune'?'Руна рассекла морозную защиту.':'Удар оружием! Страж готовит ответ.'};
      battleRef.current=next;setBattle(next);return;
    }
    let incoming=incomingCombatDamage((trial as {attack:number}).attack,combatStats,guard);
    if((boosts?.luck||0)>0){if(potionDodges(boosts!.luck,Math.random()))incoming=0;onPotionBoostUsed('luck');}
    if(!guard&&inventory.frostGuard>0&&incoming>0){incoming=Math.ceil(incoming*.5);onFrostGuardHit();}
    const heroHp=Math.max(0,battle.heroHp-incoming);
    onFieldHpChange(heroHp>0?heroHp:Math.max(35,Math.round(inventory.maxHp*.4)));
    if(heroHp<=0){
      setBattle(null);setStatus('Vicki отступила. Локация ещё не освобождена, но находки сохранены.');return;
    }
    setBattle({...battle,hp:enemyHp,heroHp,guard,energy:type==='shield'?Math.min(5,battle.energy+1):Math.max(1,battle.energy-1),
      runeCharge:type==='rune'?battle.runeCharge-1:battle.runeCharge,
      log:guard?'Щит поглотил большую часть удара.':type==='rune'?'Руна рассекла морозную защиту.':'Удар оружием! Враг отвечает.'});
  };
  const healInBattle=()=>{
    if(!battle)return;
    const potion=['lifeElixir','northernMoss','hoddmimirElixir'].find(id=>inventory.potions.includes(id));
    if(!potion){setBattle({...battle,log:'Лечебных эликсиров больше нет.'});return;}
    if(battle.heroHp>=inventory.maxHp){setBattle({...battle,log:'Здоровье уже полное.'});return;}
    if(useBattlePotion(potion,battle.heroHp)){
      const heroHp=potion==='northernMoss'?Math.min(inventory.maxHp,battle.heroHp+30):inventory.maxHp;
      const next={...battle,heroHp,log:'Эликсир восстановил здоровье.'};battleRef.current=next;setBattle(next);
    }
  };

  useEffect(()=>{
    if(!battle?.id.startsWith('sealGuardian:'))return;
    const timer=window.setInterval(()=>{
      const current=battleRef.current;
      if(paused.current||document.hidden||!current||!current.id.startsWith('sealGuardian:'))return;
      const sealId=current.id.slice('sealGuardian:'.length),def=sealById(sealId);if(!def)return;
      const stats=combatStatsRef.current,inv=sharedInventoryRef.current;
      const guarding=guardUntil.current>performance.now();
      let incoming=incomingCombatDamage(sealGuardianDamage(stats.maxHp,def),stats,guarding);
      if((inv.potionBoosts?.luck||0)>0){if(potionDodges(inv.potionBoosts!.luck,Math.random()))incoming=0;boostUsedRef.current('luck');}
      if(!guarding&&inv.frostGuard>0&&incoming>0){incoming=Math.ceil(incoming*.5);frostHitRef.current();}
      sealGuardianAction.current?.();
      const heroHp=Math.max(0,current.heroHp-incoming);
      healthCallback.current(heroHp>0?heroHp:Math.max(35,Math.round(inv.maxHp*.4)));
      if(heroHp<=0){
        sealSummoned.current='';battleRef.current=null;setBattle(null);
        setStatus('Vicki отступила. Страж печати остаётся на страже.');
        return;
      }
      const next={...current,heroHp,guard:guarding,log:guarding?'Щит поглотил большую часть удара стража.':'Страж печати наносит удар! Vicki теряет здоровье.'};
      battleRef.current=next;setBattle(next);
    },2400);
    return()=>window.clearInterval(timer);
  },[battle?.id]);

  const [questNear,setQuestNear]=useState('');
  const [questDialog,setQuestDialog]=useState<'girl'|'source'|'seal'|'bridge'|'tower'|null>(null);
  const [questMessage,setQuestMessage]=useState('');
  const [sealTarget,setSealTarget]=useState('');
  const modalActive=amuletDialog||crystalDialog||mapOpen||journalOpen||inventoryOpen||!!questDialog||!!trialOpen||!!battle||!!selected;
  paused.current=paused.current||amuletDialog||crystalDialog||!!questDialog||!!trialOpen||!!battle;
  // The compact seal battle HUD must not disable Vicki's main joystick.
  // Keep the rest of the world/combat systems paused, but allow movement during this one battle.
  movementPaused.current=doorOpening||mapOpen||journalOpen||inventoryOpen||!!selected||amuletDialog||crystalDialog||!!questDialog||!!trialOpen||!!(battle&&!battle.id.startsWith('sealGuardian:'));
  const emitMemory=(event:MemoryEvent)=>{onMemoryEvent(event);};
  const info=NIFL_LOCATIONS.find(l=>l.id===selected);
  const nearest=NIFL_LOCATIONS.find(l=>l.id===near);
  useEffect(()=>{
    const host=mount.current;if(!host)return;
    let renderer:THREE.WebGLRenderer;
    try{renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});}catch{setStatus('3D недоступно. Открой карту Нифльхейма.');return;}
    let alive=true,raf=0;
    // The world and sunlight are static: refresh one soft shadow map only on load.
    renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;
    const refreshShadows=()=>{renderer.shadowMap.needsUpdate=true;};
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);
    const scene=new THREE.Scene();scene.background=new THREE.Color('#a9c1d1');scene.fog=new THREE.Fog('#a9c1d1',45,165);
    const camera=new THREE.PerspectiveCamera(58,1,.1,280);
    scene.add(new THREE.HemisphereLight('#e8f7ff','#536d80',1.35));
    const sun=new THREE.DirectionalLight('#ecf5ff',2.2);sun.position.set(-135,90,85);
    sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);
    Object.assign(sun.shadow.camera,{left:-190,right:190,top:190,bottom:-190,near:1,far:500});
    // The large, shallow-lit snow field needs enough offset to avoid shadow-map
    // texels drawing stripes on their own surface. Keep terrain casting shadows.
    sun.shadow.camera.updateProjectionMatrix();sun.shadow.bias=-.0005;sun.shadow.normalBias=.45;
    scene.add(sun);scene.add(sun.target);
    const textures=new Set<THREE.Texture>();
    const dryRockBounds:THREE.Box3[]=[];
    const drySeals:{id:string;position:THREE.Vector3;mesh:THREE.Mesh;opacity:number}[]=[];
    let firstSeal:ReturnType<typeof createFirstSeal>|undefined;
    const sealVisuals:ReturnType<typeof createNiflheimSealVisual>[]=[];
    let sealGuardian:ReturnType<typeof installSealGuardian>|undefined;
    sealGuardianAction.current=()=>sealGuardian?.strike();
    let lakeCave:ReturnType<typeof createLakeDescendingCave>|undefined;
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Dry_River_Rocks.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{
      if(!alive){disposeObject(asset.scene);return;}
      asset.scene.updateMatrixWorld(true);const rocks:THREE.Mesh[]=[];asset.scene.traverse(o=>{if(o instanceof THREE.Mesh)rocks.push(o);});
      const river=NIFL_RIVERS[2];rocks.forEach((rock,i)=>{
        rock.geometry=rock.geometry.clone().applyMatrix4(rock.matrixWorld);const box=new THREE.Box3().setFromBufferAttribute(rock.geometry.getAttribute('position') as THREE.BufferAttribute),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
        rock.geometry.translate(-center.x,-box.min.y,-center.z);const scale=3.4/Math.max(size.x,size.z,.001);rock.geometry.scale(scale,scale,scale);rock.geometry.computeBoundingBox();
        const at=Math.floor((river.length-1)*[.35,.65,.9][i]),p=river[at],a=river[Math.max(0,at-1)],b=river[Math.min(river.length-1,at+1)],dx=b.x-a.x,dz=b.z-a.z,len=Math.max(.001,Math.hypot(dx,dz)),side=i%2?1:-1;
        scene.attach(rock);rock.position.set(p.x-dz/len*1.1*side,niflGroundY(p.x,p.z)-.12,p.z+dx/len*1.1*side);rock.quaternion.identity();rock.scale.setScalar(1);rock.name=`Камень сухого русла ${i+1}`;rock.receiveShadow=true;rock.updateMatrixWorld(true);dryRockBounds.push(new THREE.Box3().setFromObject(rock).expandByScalar(.25));
        const seal=DRY_SEALS[i];if(seal){
          const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const ctx=canvas.getContext('2d')!;ctx.font='bold 100px serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#ffffff';ctx.fillText(seal.symbol,64,64);
          const mat=new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(canvas),color:'#ff6787',transparent:true,depthWrite:false,side:THREE.DoubleSide});
          const mark=new THREE.Mesh(new THREE.PlaneGeometry(1.5,1.8),mat);const bounds=new THREE.Box3().setFromObject(rock);mark.position.set(rock.position.x,(bounds.min.y+bounds.max.y)/2,bounds.max.z+.04);scene.add(mark);const cleared=questRef.current.seals.some(r=>r.id===seal.id);mark.visible=!cleared;drySeals.push({id:seal.id,position:rock.position.clone(),mesh:mark,opacity:cleared?0:1});
        }
      });refreshShadows();
    }).catch(()=>{if(alive)setStatus('Не удалось загрузить камни сухого русла.');});
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Snow_Mountain_Lite.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{if(!alive){disposeObject(asset.scene);return;}lakeCave=createLakeDescendingCave(asset.scene,niflGroundY);scene.add(lakeCave.root);const room=lakeCave;Promise.all(['Niflheim_Ritual_Chalice.glb','Niflheim_Ritual_Crystals.glb','Niflheim_Mage_Statue.glb'].map(file=>cachedGlbBuffer(`${BASE}img/models/${file}`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)))).then(([cup,crystals,statue])=>{if(!alive){disposeObject(cup.scene);disposeObject(crystals.scene);disposeObject(statue.scene);return;}room.addRitual(cup.scene,crystals.scene,statue.scene);refreshShadows();}).catch(()=>{if(alive)setStatus('Не удалось загрузить чаши и кристаллы магов.');});cachedGlbBuffer(`${BASE}img/models/Niflheim_Stone_Table_Lite.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(table=>{if(!alive){disposeObject(table.scene);return;}room.addTable(table.scene);const altar=room.crystalAltar();if(altar)crystalScene.setPlace('mountain',altar);refreshShadows();cachedGlbBuffer(`${BASE}img/models/Niflheim_Space_Crystals.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(crystal=>{if(!alive){disposeObject(crystal.scene);return;}room.addCrystal(crystal.scene);refreshShadows();cachedGlbBuffer(`${BASE}img/models/Niflheim_Magic_Orb.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(orb=>{if(!alive){disposeObject(orb.scene);return;}room.addOrb(orb.scene,orb.animations);refreshShadows();}).catch(()=>{if(alive)setStatus('Не удалось загрузить магический шар.');});}).catch(()=>{if(alive)setStatus('Не удалось загрузить кристалл на столе.');});}).catch(()=>{if(alive)setStatus('Не удалось загрузить каменный стол.');});cachedGlbBuffer(`${BASE}img/models/Niflheim_Mountain_Arch_Lite.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(arch=>{if(!alive){disposeObject(arch.scene);return;}room.addArch(arch.scene);refreshShadows();}).catch(()=>{if(alive)setStatus('Не удалось загрузить арку.');});const p=groundGeo.getAttribute('position');for(let i=0;i<p.count;i++)p.setY(i,terrainY(p.getX(i),p.getZ(i)));groundGeo.computeVertexNormals();p.needsUpdate=true;scene.traverse(o=>{if(o instanceof THREE.Mesh&&o.name==='Niflheim terrain'){const v=o.geometry.getAttribute('position');for(let i=0;i<v.count;i++)v.setY(i,terrainY(v.getX(i),v.getZ(i)));v.needsUpdate=true;o.geometry.computeVertexNormals();}});refreshShadows();}).catch(()=>{if(alive)setStatus('Не удалось загрузить пещеру у озера.');});
    let towerSealVisual:THREE.Group|undefined;
    let entranceSupports:THREE.Box3[]=[];
    let entranceVeil:ReturnType<typeof addEntranceVeil>|undefined;
    let guardianStones:ReturnType<typeof installGuardianStones>|undefined;
    let caveSpace:ReturnType<typeof createCaveSpace>|undefined;
    let forgeSpace:ReturnType<typeof createNiflheimForge>|undefined;
    let giant:ReturnType<typeof createNiflheimGiant>|undefined;
    let memoryTable:ReturnType<typeof createMemoryTable>|undefined;
    let memorySpace:ReturnType<typeof createMemoryIgloo>|undefined;
    let memoryGiant:ReturnType<typeof createNiflheimGiant>|undefined;
    let hallSpace:ReturnType<typeof createForgottenNamesHall>|undefined;
    let rootsSpace:ReturnType<typeof createRootsIceCave>|undefined;
    const amuletScene=createAmuletScene(scene,niflGroundY);
    cachedGlbBuffer(`${BASE}img/models/amulet/amulet-six-shards.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/amulet/`)).then(asset=>{if(!alive){disposeObject(asset.scene);return;}amuletScene.load(asset.scene);}).catch(()=>{if(alive)setStatus('Амулет не загрузился. Попробуй открыть Нифльхейм снова.');});
    const crystalScene=createWaterCrystalScene(scene);
    cachedGlbBuffer(`${BASE}img/models/crystal/water-crystal-shards.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/crystal/`)).then(asset=>{if(!alive){disposeObject(asset.scene);return;}crystalScene.load(asset.scene);}).catch(()=>{if(alive)setStatus('Кристалл не загрузился. Попробуй открыть Нифльхейм снова.');});
    const sourceBasin=createHvergelmir(scene,questRef.current.restored);
    const venetianBridges=createVenetianBridges(scene,refreshShadows);
    const rootsBridge=installNiflheimBridge(scene,{x:-24,z:-31.75},{x:-4,z:-31.75},niflGroundY,refreshShadows);
    let lakeBridgeDeck:number|undefined;
    let bridgeRepair:ReturnType<typeof createBridgeRepair>|undefined;
    let waterSpiral:THREE.Group|undefined;
    const lakeBridgeY=(x:number,z:number)=>lakeBridgeDeck!==undefined&&Math.abs(x+72)<3.05&&z>=-12&&z<=(bridgeRepair?.ready()?29.5:22.65)?lakeBridgeDeck:undefined;
    let platformBounds:THREE.Box3|undefined,wellObstacle:{x:number;z:number;radius:number}|undefined;
    let nornsWellObstacle:{x:number;z:number;radius:number}|undefined;
    let wandererObstacle:{x:number;z:number;radius:number}|undefined;
    let foundationSnow:{x:number;z:number;halfX:number;halfZ:number;height:number}|undefined;
    const wellGlowSprites:THREE.Sprite[]=[];
    let livingSealPlace:{x:number;z:number;y:number}|undefined;
    const raisedSnowY=(x:number,z:number)=>{
      const original=niflGroundY(x,z),pad=foundationSnow;
      if(!pad)return original;
      const distance=Math.hypot(Math.max(0,Math.abs(x-pad.x)-pad.halfX),Math.max(0,Math.abs(z-pad.z)-pad.halfZ));
      const influence=1-THREE.MathUtils.smoothstep(distance,0,5);
      return original+Math.max(0,pad.height-original)*influence;
    };
    const stairWalkMeshes:THREE.Object3D[]=[];
    const stairRay=new THREE.Raycaster();
    const stairGroundY=(x:number,z:number)=>{
      if(!platformBounds||x<platformBounds.min.x||x>platformBounds.max.x||z<platformBounds.min.z||z>platformBounds.max.z)return undefined;
      stairRay.set(new THREE.Vector3(x,platformBounds.max.y+8,z),new THREE.Vector3(0,-1,0));
      return stairRay.intersectObjects(stairWalkMeshes,false)[0]?.point.y;
    };
    const platformBlocked=(from:{x:number;z:number},next:{x:number;z:number})=>{
      if(wellObstacle&&Math.hypot(next.x-wellObstacle.x,next.z-wellObstacle.z)<wellObstacle.radius)return true;
      if(nornsWellObstacle&&Math.hypot(next.x-nornsWellObstacle.x,next.z-nornsWellObstacle.z)<nornsWellObstacle.radius)return true;
      if(wandererObstacle&&Math.hypot(next.x-wandererObstacle.x,next.z-wandererObstacle.z)<wandererObstacle.radius)return true;
      const toY=stairGroundY(next.x,next.z),fromY=stairGroundY(from.x,from.z);
      return toY!==undefined&&toY-(fromY??raisedSnowY(from.x,from.z))>.85;
    };
    const sealInterior=(id:string,p:{x:number;z:number})=>{
      if(id==='livingWater'&&wellObstacle)return Math.hypot(p.x-wellObstacle.x,p.z-wellObstacle.z)<wellObstacle.radius+1.2;
      if(id==='shelter'&&caveSpace)return caveSpace.inside(p.x,p.z);
      if(id==='forge'&&forgeSpace)return forgeSpace.inside(p.x,p.z);
      if(id==='memoryCave'&&memorySpace)return memorySpace.inside(p.x,p.z);
      if(id==='roots'&&rootsSpace)return rootsSpace.inside(p.x,p.z);
      if(id==='snowMountain'&&lakeCave)return lakeCave.inside(p.x,p.z);
      if(id==='namesHall'&&hallSpace)return hallSpace.inside(p.x,p.z);
      if(id==='nidhogg'&&towerEntrance.current){const t=towerEntrance.current;return Math.hypot(p.x-t.center.x,p.z-t.center.z)<t.radius+1;}
      return sealContains(sealById(id)!,p);
    };
    const sealedEntry=(from:{x:number;z:number},to:{x:number;z:number})=>NIFLHEIM_SEALS.some(def=>
      !sealOpened(crystalDoneRef.current,def.id)&&sealBlocksEntry(from,to,p=>sealInterior(def.id,p)));
    const nearbySeal=(pos:{x:number;z:number})=>{
      const done=crystalDoneRef.current;
      const candidates=NIFLHEIM_SEALS.filter(def=>!sealOpened(done,def.id)).map(def=>{
        const visual=def.id==='shelter'?firstSeal:sealVisuals.find(v=>v.id===def.id);
        const point=visual?.root.position??def;
        return {id:def.id,distance:Math.hypot(pos.x-point.x,pos.z-point.z),inside:sealInterior(def.id,pos)};
      }).filter(s=>s.distance<12||s.inside).sort((a,b)=>a.distance-b.distance);
      return candidates[0]?.id||'';
    };
    const walkingY=(x:number,z:number)=>venetianBridges.groundY(x,z)??rootsBridge.groundY(x,z)??lakeCave?.groundY(x,z)??towerEntrance.current?.groundY(x,z)??stairGroundY(x,z)??lakeBridgeY(x,z)??hallSpace?.groundY(x,z)??memorySpace?.groundY(x,z)??forgeSpace?.groundY(x,z)??caveSpace?.groundY(x,z)??rootsSpace?.groundY(x,z)??raisedSnowY(x,z);
    // Magical navigation follows the map's main destinations. Broken river
    // crossings are deliberately left dark until a walkable bridge exists.
    const glowTrails=createNiflheimGlowTrails(scene,walkingY,(x,z)=>
      !niflRiverBlocked(x,z)||
      venetianBridges.groundY(x,z)!==undefined||
      rootsBridge.groundY(x,z)!==undefined||
      lakeBridgeY(x,z)!==undefined
    );
    const terrainY=(x:number,z:number)=>venetianBridges.terrainY(x,z)??rootsBridge.terrainY(x,z)??lakeCave?.terrainY(x,z)??towerEntrance.current?.groundY(x,z)??hallSpace?.terrainY(x,z)??memorySpace?.terrainY(x,z)??forgeSpace?.terrainY(x,z)??(caveSpace?.inside(x,z)?caveSpace.floor-.06:(rootsSpace?.inside(x,z)?rootsSpace.groundY(x,z)!-.65:niflGroundY(x,z)));
    const crystalMaterials:THREE.MeshStandardMaterial[]=[];
    const crystalHalos:THREE.Sprite[]=[];
    const snowCanvas=document.createElement('canvas');snowCanvas.width=snowCanvas.height=128;
    const ctx=snowCanvas.getContext('2d')!;ctx.fillStyle='#d6e5ed';ctx.fillRect(0,0,128,128);
    for(let i=0;i<1900;i++){ctx.fillStyle=i%3===0?'#c0d4e1':'#edf7fb';ctx.fillRect(hash(i,1)*128,hash(i,2)*128,1+hash(i,3)*3,1);}
    const snowTex=new THREE.CanvasTexture(snowCanvas);snowTex.colorSpace=THREE.SRGBColorSpace;snowTex.wrapS=snowTex.wrapT=THREE.RepeatWrapping;snowTex.repeat.set(16*NIFL_SCALE,20*NIFL_SCALE);textures.add(snowTex);
    const snow=new THREE.MeshStandardMaterial({map:snowTex,roughness:1});snow.shadowSide=THREE.DoubleSide;
    const stone=new THREE.MeshStandardMaterial({color:'#8b9eac',roughness:.95});
    const dark=new THREE.MeshStandardMaterial({color:'#172c3d',roughness:1});
    const pathMat=new THREE.MeshStandardMaterial({color:'#acbdc9',roughness:1});
    const glow=new THREE.MeshBasicMaterial({color:'#8edafb',transparent:true,opacity:.55});
    new THREE.TextureLoader().load(`${BASE}img/models/Stone_Sacred_1.jpg`,texture=>{if(!alive){texture.dispose();return;}texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;textures.add(texture);stone.map=texture;stone.needsUpdate=true;});
    const groundGeo=new THREE.PlaneGeometry(120*NIFL_SCALE,156*NIFL_SCALE,72,90);groundGeo.rotateX(-Math.PI/2);
    const p=groundGeo.getAttribute('position');for(let i=0;i<p.count;i++)p.setY(i,niflGroundY(p.getX(i),p.getZ(i)));groundGeo.computeVertexNormals();const fallbackGround=new THREE.Mesh(groundGeo,snow);fallbackGround.name="Niflheim terrain";fallbackGround.castShadow=true;fallbackGround.receiveShadow=true;scene.add(fallbackGround);
    const carveRootsTerrain=(objects:THREE.Object3D[])=>{
      for(const object of objects){
        if(!rootsSpace||!(object instanceof THREE.Mesh)||!object.parent)continue;
        const geo=object.geometry,p=geo.getAttribute('position');
        // Keep complete triangles at the doorway and tuck the terrain beneath the chamber floor.
        for(let i=0;i<p.count;i++){
          const x=p.getX(i),z=p.getZ(i);
          if(rootsSpace.inside(x,z))p.setY(i,terrainY(x,z));
        }
        p.needsUpdate=true;geo.computeVertexNormals();geo.computeBoundingBox();geo.computeBoundingSphere();
      }
    };
    new GLTFLoader().load(`${BASE}img/models/Terrain_Optimized.glb`,asset=>{
      if(!alive){asset.scene.traverse((o:any)=>{if(!o.isMesh)return;o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){for(const v of Object.values(m))if(v instanceof THREE.Texture)v.dispose();m.dispose();}});return;}
      // Bake the source node transform before mapping its unit square to the world.
      asset.scene.updateMatrixWorld(true);
      asset.scene.traverse((o:any)=>{if(!o.isMesh)return;
        const geo=o.geometry as THREE.BufferGeometry;geo.applyMatrix4(o.matrixWorld);
        const vertices=geo.getAttribute('position');
        for(let i=0;i<vertices.count;i++){const x=(vertices.getX(i)-.5)*240,z=(vertices.getZ(i)+.5)*312;vertices.setXYZ(i,x,terrainY(x,z),z);}
        geo.computeVertexNormals();geo.computeBoundingSphere();
        const terrain=new THREE.Mesh(geo,snow);terrain.name="Niflheim terrain";terrain.castShadow=true;terrain.receiveShadow=true;scene.add(terrain);
        for(const material of Array.isArray(o.material)?o.material:[o.material]){for(const value of Object.values(material))if(value instanceof THREE.Texture)value.dispose();material.dispose();}
      });
      scene.remove(fallbackGround);groundGeo.dispose();carveRootsTerrain(scene.children.filter(o=>o.name==='Niflheim terrain'));refreshShadows();
    },undefined,()=>{});
    const mesh=(geo:THREE.BufferGeometry,mat:THREE.Material,x:number,y:number,z:number,sx=1,sy=1,sz=1)=>{const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=mat instanceof THREE.MeshStandardMaterial&&!mat.transparent;m.receiveShadow=true;scene.add(m);return m;};
    const rockGeo=new THREE.DodecahedronGeometry(1,1);
    const rocks=new THREE.InstancedMesh(rockGeo,stone,180),dummy=new THREE.Object3D();
    for(let i=0;i<180;i++){
      const side=i%4,t=(-72+hash(i,11)*144)*NIFL_SCALE;
      const x=side<2?(side===0?-58:58)*NIFL_SCALE:t*.76,z=side<2?t:(side===2?-75:75)*NIFL_SCALE;
      if(side===3&&Math.abs(x)<12){dummy.position.set(x,-30,z);dummy.scale.set(0,0,0);dummy.updateMatrix();rocks.setMatrixAt(i,dummy.matrix);continue;}
      const r=2+hash(i,12)*4,h=3+hash(i,13)*8;
      dummy.position.set(x,niflGroundY(x,z)+h*.5,z);dummy.scale.set(r,h,r);dummy.rotation.set(.1,hash(i,14)*6.28,0);dummy.updateMatrix();rocks.setMatrixAt(i,dummy.matrix);
    }
    rocks.instanceMatrix.needsUpdate=true;rocks.computeBoundingSphere();rocks.castShadow=true;rocks.receiveShadow=true;scene.add(rocks);
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Boundary_Iceberg.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>{
      if(!alive){asset.scene.traverse((o:any)=>{if(o.isMesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){m.map?.dispose();m.dispose();}}});return;}
      const placements:{x:number;z:number;seed:number}[]=[];
      for(let side=0;side<4;side++){
        const count=side<2?22:18;
        for(let i=0;i<count;i++){
          const t=i/(count-1),x=side<2?(side===0?-116:116):-116+t*232,z=side<2?-150+t*300:(side===2?-150:150);
          if(side===3&&Math.abs(x)<16)continue;
          placements.push({x,z,seed:side*31+i});
        }
      }
      asset.scene.updateMatrixWorld(true);
      asset.scene.traverse((o:any)=>{
        if(!o.isMesh)return;
        const geometry=o.geometry;geometry.applyMatrix4(o.matrixWorld);
        const boundary=new THREE.InstancedMesh(geometry,o.material,placements.length);
        boundary.name='Ледяные айсберги — граница Нифльхейма';
        placements.forEach((p,i)=>{
          const width=18+hash(p.seed,71)*5,height=18+hash(p.seed,72)*12;
          dummy.position.set(p.x,niflGroundY(p.x,p.z)-1,p.z);
          dummy.rotation.set(0,hash(p.seed,73)*Math.PI*2,0);dummy.scale.set(width,height,width);dummy.updateMatrix();
          boundary.setMatrixAt(i,dummy.matrix);
        });
        boundary.instanceMatrix.needsUpdate=true;boundary.computeBoundingSphere();boundary.receiveShadow=true;
        scene.add(boundary);
      });
      scene.remove(rocks);rocks.dispose();refreshShadows();
    },()=>{})).catch(()=>{});
    // Curved entrance walls connect the gate to the rear stone boundary.
    const wardMaterial=new THREE.MeshBasicMaterial({color:'#a4e6ff',transparent:true,opacity:.32,side:THREE.DoubleSide,depthWrite:false,toneMapped:false});
    for(const arc of NIFL_ENTRANCE_ARCS){
      const vertices:number[]=[];
      for(let i=0;i<arc.length-1;i++){
        const a=arc[i],b=arc[i+1],ya=niflGroundY(a.x,a.z)-.15,yb=niflGroundY(b.x,b.z)-.15;
        vertices.push(a.x,ya,a.z,b.x,yb,b.z,a.x,ya+4,a.z,a.x,ya+4,a.z,b.x,yb,b.z,b.x,yb+4,b.z);
      }
      const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));
      geometry.computeVertexNormals();scene.add(new THREE.Mesh(geometry,wardMaterial));
      const rim=arc.map(p=>new THREE.Vector3(p.x,niflGroundY(p.x,p.z)+3.9,p.z));
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(rim),new THREE.LineBasicMaterial({color:'#cef4ff',transparent:true,opacity:.8,depthWrite:false})));
    }
    const rivers=addNiflheimRivers(scene,BASE,dragonRef.current.defeated),{ice,water}=rivers;
    const disc=(x:number,z:number,rx:number,rz:number,mat:THREE.Material)=>{const m=mesh(new THREE.CircleGeometry(1,48),mat,x,niflGroundY(x,z)+.08,z,rx,rz,1);m.rotation.x=-Math.PI/2;return m;};
    const lakeSurfaces=NIFL_LAKES.map((l,index)=>{const surface=disc(l.x,l.z,l.rx,l.rz,niflheimLakeFreed(index,liberationRef.current)?water:ice);const uv=surface.geometry.getAttribute('uv');for(let i=0;i<uv.count;i++){uv.setXY(i,uv.getX(i)*l.rx/3,uv.getY(i)*l.rz/3);}uv.needsUpdate=true;for(let i=0;i<7;i++){const a=i/7*6.28;mesh(rockGeo,stone,l.x+Math.cos(a)*(l.rx+1),.6,l.z+Math.sin(a)*(l.rz+1),1,.8,1);}return surface;});
    const smallLake=NIFL_LAKES[1];
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Water_Spiral.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{if(!alive){disposeObject(asset.scene);return;}const model=asset.scene;model.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3()),centre=box.getCenter(new THREE.Vector3());const wrapper=new THREE.Group();wrapper.position.set(smallLake.x,niflGroundY(smallLake.x,smallLake.z)+.14,smallLake.z);const scale=8/Math.max(size.x,size.z,.001);model.scale.multiplyScalar(scale);model.position.set(-centre.x*scale,-box.min.y*scale,-centre.z*scale);wrapper.add(model);scene.add(wrapper);waterSpiral=wrapper;refreshShadows();}).catch(()=>{if(alive)setStatus('Не удалось загрузить водную спираль.');});
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Lake_Stranger.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{if(!alive){disposeObject(asset.scene);return;}const model=asset.scene;model.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3()),centre=box.getCenter(new THREE.Vector3()),scale=10.5/Math.max(size.y,.001);model.scale.multiplyScalar(scale);model.position.set(smallLake.x-centre.x*scale,niflGroundY(smallLake.x,smallLake.z)+.12-box.min.y*scale,smallLake.z-centre.z*scale);model.name='Незнакомец у приюта хранителей';model.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});scene.add(model);refreshShadows();}).catch(()=>{if(alive)setStatus('Не удалось загрузить незнакомца у озера.');});
    disc(NIFL_SOURCE.x,NIFL_SOURCE.z,NIFL_SOURCE.rx,NIFL_SOURCE.rz,water);
    const sourceRing=mesh(new THREE.TorusGeometry(6*NIFL_SCALE,.09,5,64),glow,0,niflGroundY(0,NIFL_SOURCE.z)+.17,NIFL_SOURCE.z);sourceRing.rotation.x=-Math.PI/2;
    const poleGeo=new THREE.BoxGeometry(1,1,1);
    const pillar=(x:number,z:number,height:number,mat=stone)=>mesh(poleGeo,mat,x,niflGroundY(x,z)+height/2,z,1.15,height,1.3);
    const cave=(x:number,z:number)=>{const base=niflGroundY(x,z);mesh(rockGeo,stone,x-3,base+2,z,2,3,2);mesh(rockGeo,stone,x+3,base+2,z,2,3,2);mesh(rockGeo,stone,x,base+5,z,4,1.7,2);const opening=mesh(new THREE.CircleGeometry(2.6,24),dark,x,base+2.6,z+.25,1,1,1);return opening;};
    const gate=(x:number,z:number)=>{pillar(x-2.7,z,6);pillar(x+2.7,z,6);mesh(poleGeo,stone,x,niflGroundY(x,z)+6,z,6.6,.8,1.5);const portal=mesh(new THREE.PlaneGeometry(4,5),new THREE.MeshBasicMaterial({color:'#24253a',transparent:true,opacity:.85,side:THREE.DoubleSide}),x,niflGroundY(x,z)+3,z);return portal;};
    const gates:THREE.Mesh[]=[];
    const memoryFinds=addFrozenRiverFinds(scene);let previousFindCount=-1;
    const entrancePlaceholder=new THREE.Group();
    const entranceGate=gate(0,65*NIFL_SCALE);
    // Keep the lightweight entrance only until the downloaded model is ready.
    for(const part of scene.children.slice(-4))entrancePlaceholder.add(part);
    scene.add(entrancePlaceholder);
    gates.push(entranceGate);
    const shelterPlaceholder=new THREE.Group();scene.add(shelterPlaceholder);
    // Quest guardians are now animated rigged orcs. No geometric/CSS stand-ins.
    const guardianRoots:{id:string;root:THREE.Group}[]=[];
    for(const trial of LIBERATION_TRIALS){
      if(!COMBAT_TRIALS.has(trial.id as any)||trial.id==='vampire')continue;
      const location=NIFL_LOCATIONS.find(l=>l.id===trial.id);if(!location)continue;
      const root=new THREE.Group();root.name='Орк-страж: '+trial.title;
      const spawnOffset:Record<string,{x:number;z:number}>={memoryCave:{x:90,z:16},roots:{x:12,z:-38},namesHall:{x:-76,z:-90},snowMountain:{x:-86,z:86},threeNornsWell:{x:70,z:-78}};
      const spawn=spawnOffset[trial.id]||location;
      root.position.set(spawn.x,walkingY(spawn.x,spawn.z)+.15,spawn.z);
      scene.add(root);guardianRoots.push({id:trial.id,root});
    }
    const riggedEnemies=installNiflheimRiggedEnemies(scene,guardianRoots,()=>alive,walkingY,setStatus,
      loss=>{
        const state=sharedInventoryRef.current;
        let damage=incomingCombatDamage(loss,combatStatsRef.current);
        if((state.potionBoosts?.luck||0)>0){if(potionDodges(state.potionBoosts!.luck,Math.random()))damage=0;boostUsedRef.current('luck');}
        if(damage>0&&state.frostGuard>0){damage=Math.ceil(damage*.5);frostHitRef.current();}
        const hp=Math.max(1,state.hp-damage);
        sharedInventoryRef.current={...state,hp};
        healthCallback.current(hp);
        if(hp===1)setStatus('❤️ Здоровье на исходе! Используй эликсир или отступи. Без переноса к вратам.');
        return state.hp-hp;
      },
      id=>libCallback.current(('shadow:defeated:'+id) as LiberationEvent),
      (id,role)=>libCallback.current(('guardian:defeated:'+id+':'+role) as LiberationEvent),
      (x,z)=>!niflRiverBlocked(x,z)&&x>-100&&x<100&&z>-150&&z<140,
      (kind,actor,height,delay)=>{if(kind==='enemy')combatEffects.enemySlash(actor,height,delay);else combatEffects.hit(actor,height*.55,delay);},
      ()=>{const state=sharedInventoryRef.current;let damage=combatStatsRef.current.attack;if((state.potionBoosts?.attack||0)>0){damage=boostedPotionDamage(damage,state.potionBoosts!.attack);boostUsedRef.current('attack');}return damage;},id=>cooldownsRef.current['niflheim:liberation:shadow:'+id]||0);
    // Three unique everlasting-ice fragments mark safe snow near major locations.
    const iceShape=new THREE.OctahedronGeometry(1.15,1);
    const iceDust=new THREE.MeshBasicMaterial({color:'#d9f3ff',transparent:true,opacity:.84});
    const iceMarkers=NIFL_ICE.map(point=>{
      const crystal=new THREE.Mesh(iceShape,iceDust);
      crystal.name='Осколок вечного льда — '+point.name;
      crystal.position.set(point.x,niflGroundY(point.x,point.z)+1.45,point.z);
      scene.add(crystal);return {id:point.id,crystal};
    });
    NIFL_LOCATIONS.forEach((l,index)=>{
      if(l.kind==='cave'&&l.id!=='memoryCave'&&l.id!=='echoCave')cave(l.x,l.z-3);
      if(l.kind==='hall'){
        hallSpace=createForgottenNamesHall(l.x,l.z,niflGroundY,stone,snow);amuletScene.setPlace('names',new THREE.Vector3(-76,(hallSpace.groundY(-76,-78)??niflGroundY(-76,-78))+1.2,-78));scene.add(hallSpace.root);
        const space=hallSpace;
        Promise.all(['Niflheim_Hall_Modules.glb','Niflheim_Beige_Wall.glb'].map(file=>cachedGlbBuffer(`${BASE}img/models/${file}`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)))).then(([asset,wallAsset])=>{
          if(!alive){for(const loaded of [asset,wallAsset])loaded.scene.traverse((o:any)=>{if(o.isMesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){for(const v of Object.values(m))if(v instanceof THREE.Texture)v.dispose();m.dispose();}}});return;}
          space.replaceShell(asset.scene,wallAsset.scene);refreshShadows();
          for(const [file,install] of [['Niflheim_Hall_Arch.glb',space.addArch],['Ice_Roof_Slab.glb',space.addSnowRoof],['Niflheim_Hall_Furniture.glb',space.addFurniture]] as const){
            cachedGlbBuffer(`${BASE}img/models/${file}`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,loaded=>{
              if(!alive){loaded.scene.traverse((o:any)=>{if(o.isMesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){for(const v of Object.values(m))if(v instanceof THREE.Texture)v.dispose();m.dispose();}}});return;}
              install(loaded.scene);refreshShadows();
            },()=>{})).catch(()=>{});
          }
        }).catch(()=>{});

        const positions=groundGeo.getAttribute('position');for(let i=0;i<positions.count;i++)positions.setY(i,terrainY(positions.getX(i),positions.getZ(i)));groundGeo.computeVertexNormals();positions.needsUpdate=true;
      }
      if(l.kind==='shelter'){
        const first=scene.children.length;
        pillar(l.x-3,l.z-2,4);pillar(l.x+3,l.z-2,4);pillar(l.x-3,l.z+2,4);pillar(l.x+3,l.z+2,4);
        mesh(poleGeo,snow,l.x,niflGroundY(l.x,l.z)+4.5,l.z,8,.8,7);mesh(poleGeo,pathMat,l.x,niflGroundY(l.x,l.z)+.3,l.z,8,.6,7);
        if(l.kind==='shelter')for(const part of scene.children.slice(first))shelterPlaceholder.add(part);
      }
      if(l.kind==='bridge'){
        cachedGlbBuffer(`${BASE}img/models/Niflheim_Lake_Bridge.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{
          if(!alive){asset.scene.traverse((o:any)=>{if(o.isMesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){for(const v of Object.values(m))if(v instanceof THREE.Texture)v.dispose();m.dispose();}}});return;}
          const bridge=asset.scene;bridge.updateMatrixWorld(true);
          const bounds=new THREE.Box3().setFromObject(bridge),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
          bridge.scale.set(8/size.x,6/size.y,35/size.z);
          lakeBridgeDeck=Math.max(niflGroundY(-72,-12),niflGroundY(-72,26))+.3;
          // Source deck at local world Y=9.2; north end touches shore, south end stops three units short.
          bridge.position.set(-72-center.x*bridge.scale.x,lakeBridgeDeck-9.2*bridge.scale.y,5.5-center.z*bridge.scale.z);
          bridge.name='Разрушенная переправа через озеро';
          bridgeRepair=createBridgeRepair(scene,bridge,niflGroundY,questRef.current.bridgeRestored);
          bridge.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
          scene.add(bridge);refreshShadows();
        }).catch(()=>{});
      }
      // The former lookout is now the dry riverbed; leave its channel unobstructed.
      if(l.kind!=='source'&&l.id!=='roots'&&l.id!=='threeNornsWell'&&l.id!=='nineWorldStranger'){
        const marker=mesh(new THREE.OctahedronGeometry(.5),glow,l.x+3,niflGroundY(l.x+3,l.z+3)+2.8,l.z+3);marker.name=`Location ${index+1}: ${l.name}`;
      }
    });
    // Lightweight snow drifts instead of a full-screen effect.
    const snowPoints=new THREE.BufferGeometry(),snowCoords=new Float32Array(160*3);
    for(let i=0;i<160;i++){snowCoords[i*3]=(hash(i,51)*110-55)*NIFL_SCALE;snowCoords[i*3+1]=hash(i,52)*18+2;snowCoords[i*3+2]=(hash(i,53)*140-70)*NIFL_SCALE;}
    snowPoints.setAttribute('position',new THREE.BufferAttribute(snowCoords,3));scene.add(new THREE.Points(snowPoints,new THREE.PointsMaterial({color:'#edf8ff',size:.11,transparent:true,opacity:.7})));
    const hero=new THREE.Group();hero.rotation.y=Math.PI;scene.add(hero);
    const dangerCanvas=document.createElement('canvas');dangerCanvas.width=128;dangerCanvas.height=128;
    const dangerContext=dangerCanvas.getContext('2d')!;
    dangerContext.beginPath();dangerContext.moveTo(64,8);dangerContext.lineTo(120,112);dangerContext.lineTo(8,112);dangerContext.closePath();
    dangerContext.fillStyle='#e71932';dangerContext.fill();dangerContext.strokeStyle='#fff1d6';dangerContext.lineWidth=6;dangerContext.stroke();
    dangerContext.fillStyle='#ffffff';dangerContext.font='bold 78px sans-serif';dangerContext.textAlign='center';dangerContext.fillText('!',64,98);
    const dangerTexture=new THREE.CanvasTexture(dangerCanvas);textures.add(dangerTexture);
    const dangerMaterial=new THREE.SpriteMaterial({map:dangerTexture,transparent:true,depthTest:false,depthWrite:false});
    const dangerSign=new THREE.Sprite(dangerMaterial);dangerSign.name='Опасно: здоровье Vicki 15% или ниже';dangerSign.position.y=8.1;dangerSign.scale.set(2.1,2.1,1);dangerSign.renderOrder=30;dangerSign.visible=false;hero.add(dangerSign);
    const combatEffects=createCombatEffects(scene,hero);let lastGuardFx=0;
    let mixer:THREE.AnimationMixer|undefined,idle:THREE.AnimationAction|undefined,walk:THREE.AnimationAction|undefined,attack:THREE.AnimationAction|undefined,attackUntil=0,shieldBones:THREE.Object3D[]=[],shieldBase:THREE.Quaternion[]=[],moving=false,currentAction:THREE.AnimationAction|undefined;
    const disposeObject=(root:THREE.Object3D)=>{root.traverse((o:any)=>{if(o.isMesh){o.geometry?.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){for(const v of Object.values(m))if(v instanceof THREE.Texture)textures.add(v);m.dispose();}}});};
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Corrupted_Ice_Cluster.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>{
      if(!alive){disposeObject(asset.scene);textures.forEach(t=>t.dispose());return;}
      const cluster=asset.scene;cluster.name='Багровый лёд Хвергельмира';cluster.position.set(NIFL_SOURCE.x,niflGroundY(NIFL_SOURCE.x,NIFL_SOURCE.z)+.12,NIFL_SOURCE.z);
      cluster.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});scene.add(cluster);sourceBasin.attachSeal(cluster);cluster.updateMatrixWorld(true);
      refreshShadows();
    },()=>{})).catch(()=>{});


    const dragonLair=NIFL_LOCATIONS.find(l=>l.id==='nidhogg')!;
    cachedGlbBuffer(`${BASE}img/models/Collapsed_Tower_Optimized.glb?v=tower-4`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{
      if(!alive){disposeObject(asset.scene);return;}
      const tower=asset.scene;tower.name='Разрушенная башня — логово Нидхёгга';
      tower.updateMatrixWorld(true);
      // Rotate only the standing stump; keep the fallen tower in its original placement.
      const standing=tower.getObjectByName('polySurface1_blinn1_0') as THREE.Mesh|undefined;
      if(standing){
        const geometry=standing.geometry.clone().applyMatrix4(standing.matrixWorld);
        geometry.computeBoundingBox();
        const pivotCenter=geometry.boundingBox!.getCenter(new THREE.Vector3());
        geometry.translate(-pivotCenter.x,-pivotCenter.y,-pivotCenter.z);
        standing.geometry.dispose();standing.geometry=geometry;
        const pivot=new THREE.Group();pivot.name='Standing tower entrance pivot';
        pivot.position.copy(pivotCenter);pivot.rotation.y=Math.PI/2;
        tower.add(pivot);pivot.add(standing);
        standing.position.set(0,0,0);standing.rotation.set(0,0,0);standing.scale.set(1,1,1);
        standing.matrixAutoUpdate=true;standing.updateMatrix();
      }
      tower.rotation.y=Math.PI;
      tower.updateMatrixWorld(true);
      const initial=new THREE.Box3().setFromObject(tower),size=initial.getSize(new THREE.Vector3());
      tower.scale.multiplyScalar(Math.min(58.08/Math.max(size.y,.001),68.64/Math.max(size.x,size.z,.001)));
      tower.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(tower),center=bounds.getCenter(new THREE.Vector3());
      const towerX=dragonLair.x+6;
      tower.position.set(towerX-center.x,niflGroundY(towerX,dragonLair.z)-bounds.min.y-.15,dragonLair.z-center.z);
      tower.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
      scene.add(tower);
      if(standing){
        const entrance=installTowerEntrance(scene,tower,standing,niflGroundY);towerEntrance.current=entrance;
        sealVisuals.find(v=>v.id==='nidhogg')?.place(entrance.center.x,entrance.frontZ+2.5,entrance.floor,0);
        const sealVisual=new THREE.Group();sealVisual.name='Печать башни Нидхёгга';
        sealVisual.position.set(entrance.center.x,entrance.floor+4,entrance.frontZ+.5);
        const rim=new THREE.Mesh(new THREE.TorusGeometry(2.25,.11,8,56),
          new THREE.MeshBasicMaterial({color:'#e6b1dd',transparent:true,opacity:.69,depthWrite:false,side:THREE.DoubleSide}));
        sealVisual.add(rim);
        const runeCanvas=document.createElement('canvas');runeCanvas.width=runeCanvas.height=128;
        const runeCtx=runeCanvas.getContext('2d');
        if(runeCtx){runeCtx.font='84px serif';runeCtx.textAlign='center';runeCtx.textBaseline='middle';runeCtx.fillStyle='#f4cfe9';runeCtx.fillText('ᛁ',64,64);}
        const glyph=new THREE.Mesh(new THREE.PlaneGeometry(2.4,2.4),
          new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(runeCanvas),transparent:true,depthWrite:false,side:THREE.DoubleSide}));
        glyph.position.z=.035;sealVisual.add(glyph);
        scene.add(sealVisual);towerSealVisual=sealVisual;sealVisual.visible=!dragonRef.current.unsealed;
        // Flatten snow under the entrance and blend its edges into the surrounding terrain.
        scene.traverse((o:any)=>{if(o.isMesh&&o.name==='Niflheim terrain'){
          const vertices=o.geometry.getAttribute('position');for(let i=0;i<vertices.count;i++){const y=entrance.groundY(vertices.getX(i),vertices.getZ(i));if(y!==undefined)vertices.setY(i,y-.08);}
          vertices.needsUpdate=true;o.geometry.computeVertexNormals();
        }});
      }
      refreshShadows();
    }).catch(()=>{if(alive)setStatus('Не удалось загрузить разрушенную башню.');});
    // One shared model in every world: same Well of Three Norns as Midgard,
    // taller and frost-blue in Niflheim. Clear of the tower doorway and its rubble.
    const nornsSite=NIFL_LOCATIONS.find(l=>l.id==='threeNornsWell')!;
    const niflNornsX=nornsSite.x,niflNornsZ=nornsSite.z;
    cachedGlbBuffer(`${BASE}img/models/Midgard_Well_Three_Norns_V1_YUP.glb`)
      .then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`))
      .then(asset=>{
        if(!alive){disposeObject(asset.scene);return;}
        const norns=createRealmNornsWell(scene,asset.scene,niflNornsX,niflNornsZ,niflGroundY,`${BASE}img/models/`,NIFLHEIM_NORNS_STYLE);
        nornsWellObstacle={x:niflNornsX,z:niflNornsZ,radius:norns.radius};
        refreshShadows();
      }).catch(()=>{if(alive)setStatus('Не удалось загрузить Колодец трёх норн.');});
    // The same Nine-Worlds Wanderer as in Midgard; load only when Vika
    // approaches this part of the map to spare mobile startup bandwidth.
    const wandererSite=NIFL_LOCATIONS.find(l=>l.id==='nineWorldStranger')!;
    const wandererX=wandererSite.x,wandererZ=wandererSite.z;
    let wandererLoading=false,wandererPresent=false;
    let wandererIdle:((now:number)=>void)|null=null;
    let wandererTurn:((dt:number,x:number,z:number)=>void)|null=null;
    const loadWanderer=()=>{
      if(wandererLoading||wandererPresent)return;
      wandererLoading=true;
      cachedGlbBuffer(`${BASE}img/models/hit2_stranger_mobile.glb`)
        .then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`))
        .then(asset=>{
          if(!alive){disposeObject(asset.scene);return;}
          const model=asset.scene;
          model.rotation.y=0;
          // Share Midgard's unarmed natural standing pose and subtle idle.
          const prepared=prepareNineWorldStranger(model);
          const body=prepared.bodyBounds,size=body.getSize(new THREE.Vector3());
          if(body.isEmpty()||size.y<.001)throw new Error('Empty stranger GLB');
          // Vika is 6.1 units in Niflheim. Keep the Wanderer proportionally
          // tall like the 4.85-unit version seen beside Vika in Midgard.
          const targetHeight=7.4;
          model.scale.multiplyScalar(targetHeight/size.y);
          model.updateWorldMatrix(true,true);
          const fitted=new THREE.Box3();
          model.traverse(o=>{
            if(o instanceof THREE.Mesh&&o.visible)fitted.union(new THREE.Box3().setFromObject(o));
          });
          if(fitted.isEmpty())throw new Error('Wanderer has no visible body');
          const centre=fitted.getCenter(new THREE.Vector3());
          model.position.set(-centre.x,-fitted.min.y,-centre.z);
          const root=new THREE.Group();
          root.name='Странница девяти миров';
          root.position.set(wandererX,niflGroundY(wandererX,wandererZ),wandererZ);
          // Static shadow map: do not leave ghost silhouettes as she turns.
          model.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=false;o.receiveShadow=true;o.frustumCulled=false;}});
          root.add(model);
          wandererIdle=prepared.idle;
          const visitor=position.current;
          root.rotation.y=Math.hypot(visitor.x-wandererX,visitor.z-wandererZ)<9
            ?Math.atan2(visitor.x-wandererX,visitor.z-wandererZ)
            :-Math.PI*.20;
          wandererTurn=(dt:number,x:number,z:number)=>{
            if(Math.hypot(x-wandererX,z-wandererZ)>8)return;
            const desired=Math.atan2(x-wandererX,z-wandererZ);
            const delta=Math.atan2(Math.sin(desired-root.rotation.y),Math.cos(desired-root.rotation.y));
            root.rotation.y+=delta*Math.min(1,dt*3.5);
          };
          // No floating label; her identity appears when Vika approaches.
          const halo=new THREE.Mesh(new THREE.TorusGeometry(.75,.035,5,40),
            new THREE.MeshBasicMaterial({color:0x96d7f4,transparent:true,opacity:.68,depthWrite:false}));
          halo.rotation.x=-Math.PI/2;halo.position.y=.07;root.add(halo);
          scene.add(root);
          wandererObstacle={x:wandererX,z:wandererZ,radius:.95};
          wandererPresent=true;refreshShadows();
        }).catch(error=>console.warn('[NIFL WANDERER] Load failed',error));
    };
    const rootsLocation=NIFL_LOCATIONS.find(l=>l.id==='roots')!;
    const wellSiteX=NIFL_SOURCE.x-22,wellSiteZ=NIFL_SOURCE.z-34;
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Well_Assembly.glb?v=staircase-only-4`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{
      if(!alive){disposeObject(asset.scene);return;}
      const assembly=asset.scene;assembly.name='Лестница и площадка — Хвергельмир';
      assembly.rotation.y=Math.PI; // Lower steps face south, toward the realm entrance.
      // Normalize source units and put the entire base above the surrounding snow.
      assembly.updateMatrixWorld(true);
      const initialBounds=new THREE.Box3().setFromObject(assembly);
      const size=initialBounds.getSize(new THREE.Vector3());
      if(!Number.isFinite(size.x+size.y+size.z)||Math.max(size.x,size.z)<=0)throw new Error('Empty staircase');
      assembly.scale.multiplyScalar(12/Math.max(size.x,size.z));
      assembly.scale.x*=1.3;assembly.scale.z*=1.3;
      assembly.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(assembly);
      const center=bounds.getCenter(new THREE.Vector3());
      const sampleY=(x:number,z:number)=>niflGroundY(x,z);
      const baseY=sampleY(wellSiteX,wellSiteZ+7.8)-.08;
      assembly.position.set(wellSiteX-center.x,baseY+.12-bounds.min.y,wellSiteZ-center.z);

      assembly.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
      scene.add(assembly);assembly.updateMatrixWorld(true);
      const worldBounds=new THREE.Box3().setFromObject(assembly);
      foundationSnow={x:wellSiteX,z:wellSiteZ,halfX:(worldBounds.max.x-worldBounds.min.x)*.5,halfZ:(worldBounds.max.z-worldBounds.min.z)*.5,height:worldBounds.min.y+.12};
      scene.traverse((o:any)=>{
        if(o.name!=='Niflheim terrain'||!o.isMesh)return;
        const p=o.geometry.getAttribute('position');
        for(let i=0;i<p.count;i++)p.setY(i,terrainY(p.getX(i),p.getZ(i)));
        p.needsUpdate=true;o.geometry.computeVertexNormals();o.geometry.computeBoundingSphere();
      });
      // Dense local snow surface keeps the foundation supported between coarse terrain vertices.
      const snowPatchGeo=new THREE.PlaneGeometry(foundationSnow.halfX*2+10,foundationSnow.halfZ*2+10,44,44);
      snowPatchGeo.rotateX(-Math.PI/2);
      const snowPatchPositions=snowPatchGeo.getAttribute('position');
      for(let i=0;i<snowPatchPositions.count;i++){
        const x=snowPatchPositions.getX(i)+wellSiteX,z=snowPatchPositions.getZ(i)+wellSiteZ;
        snowPatchPositions.setXYZ(i,x,raisedSnowY(x,z)+.018,z);
      }
      snowPatchGeo.computeVertexNormals();
      const raisedPatch=new THREE.Mesh(snowPatchGeo,snow);raisedPatch.name='Снежное основание постамента';raisedPatch.receiveShadow=true;scene.add(raisedPatch);

      const landingBounds=new THREE.Box3();
      assembly.traverse(object=>{
        if(!(object instanceof THREE.Mesh))return;
        object.castShadow=true;object.receiveShadow=true;stairWalkMeshes.push(object);
        const p=object.geometry.getAttribute('position');
        for(let i=0;i<p.count;i++){
          const v=new THREE.Vector3().fromBufferAttribute(p,i).applyMatrix4(object.matrixWorld);
          if(v.y>=worldBounds.max.y-.025)landingBounds.expandByPoint(v);
        }
      });
      const landingSize=landingBounds.getSize(new THREE.Vector3()),landingCenter=landingBounds.getCenter(new THREE.Vector3());
      const capMaterial=new THREE.MeshStandardMaterial({color:'#dce3e6',roughness:1});
      const slab=new THREE.Mesh(new THREE.BoxGeometry(landingSize.x, .18, landingSize.z),capMaterial);
      slab.name='Каменная плита площадки';
      slab.position.set(landingCenter.x,worldBounds.max.y+.04,landingCenter.z);
      slab.castShadow=true;slab.receiveShadow=true;scene.add(slab);slab.updateMatrixWorld(true);
      stairWalkMeshes.push(slab);
      livingSealPlace={x:landingCenter.x+Math.min(3.5,landingSize.x*.36),z:landingCenter.z,y:slab.position.y+.09};
      sealVisuals.find(v=>v.id==='livingWater')?.place(livingSealPlace.x,livingSealPlace.z,livingSealPlace.y,0);
      platformBounds=new THREE.Box3().setFromObject(assembly).union(new THREE.Box3().setFromObject(slab));
      new THREE.TextureLoader().load(`${BASE}img/models/T_Forge_WhiteStone.webp`,texture=>{
        if(!alive){texture.dispose();return;}
        texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;textures.add(texture);
        assembly.traverse(object=>{if(object instanceof THREE.Mesh)textureBuildingPart(object,texture);});
        textureBuildingPart(slab,texture);refreshShadows();
      });
      cachedGlbBuffer(`${BASE}img/models/Good_Ol_Well_Optimized.glb?v=good-well-1`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(gltf=>{
        if(!alive){disposeObject(gltf.scene);return;}
        const well=gltf.scene;well.name="Good Ol' Well — mikelkel2";
        well.updateMatrixWorld(true);
        const sourceBounds=new THREE.Box3().setFromObject(well),wellSize=sourceBounds.getSize(new THREE.Vector3());
        well.scale.multiplyScalar(6.67/Math.max(wellSize.y,.001));well.updateMatrixWorld(true);
        const fitted=new THREE.Box3().setFromObject(well),center=fitted.getCenter(new THREE.Vector3());
        const slabTop=slab.position.y+.09;
        well.position.set(landingCenter.x-center.x,slabTop-fitted.min.y,landingCenter.z-center.z);
        well.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
        scene.add(well);
        wellObstacle={x:landingCenter.x,z:landingCenter.z,radius:2.02};
        const glowCanvas=document.createElement('canvas');glowCanvas.width=glowCanvas.height=64;
        const glowCtx=glowCanvas.getContext('2d')!,gradient=glowCtx.createRadialGradient(32,32,0,32,32,32);
        gradient.addColorStop(0,'rgba(255,255,255,.95)');gradient.addColorStop(.32,'rgba(255,255,255,.48)');gradient.addColorStop(1,'rgba(255,255,255,0)');
        glowCtx.fillStyle=gradient;glowCtx.fillRect(0,0,64,64);
        const glowTexture=new THREE.CanvasTexture(glowCanvas);textures.add(glowTexture);
        const openingY=slabTop+2.05;
        for(const [index,color] of ['#277eff','#b71959'].entries()){
          const halo=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture,color,transparent:true,opacity:.62,depthWrite:false,blending:THREE.AdditiveBlending}));
          halo.position.set(landingCenter.x+(index===0?-.32:.32),openingY+1.1,landingCenter.z);halo.scale.set(2.7,5,1);
          scene.add(halo);wellGlowSprites.push(halo);
          const light=new THREE.PointLight(color,16,12,2);light.position.set(halo.position.x,openingY+.4,landingCenter.z);scene.add(light);
        }
        const luminousWater=new THREE.Mesh(new THREE.CircleGeometry(.83,40),new THREE.MeshBasicMaterial({color:'#554bbd',transparent:true,opacity:.8,side:THREE.DoubleSide}));
        luminousWater.rotation.x=-Math.PI/2;luminousWater.position.set(landingCenter.x,openingY-.08,landingCenter.z);scene.add(luminousWater);

        well.updateMatrixWorld(true);
        const roofMeshes:THREE.Mesh[]=[];
        well.traverse(object=>{if(object instanceof THREE.Mesh&&/roof/i.test(object.name))roofMeshes.push(object);});
        if(roofMeshes.length)cachedGlbBuffer(`${BASE}img/models/Niflheim_Snow_Pieces.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(pieces=>{
          if(!alive){disposeObject(pieces.scene);return;}
          const roofBounds=new THREE.Box3();for(const roof of roofMeshes)roofBounds.union(new THREE.Box3().setFromObject(roof));
          const roofSize=roofBounds.getSize(new THREE.Vector3()),roofCenter=roofBounds.getCenter(new THREE.Vector3()),ray=new THREE.Raycaster();
          const sources:THREE.Mesh[]=[];pieces.scene.traverse(o=>{if(o instanceof THREE.Mesh)sources.push(o);});
          for(let patch=0;patch<3&&sources.length;patch++){
            const source=sources[(patch+2)%sources.length],geometry=source.geometry.clone();
            geometry.computeBoundingBox();
            const local=geometry.boundingBox!,localSize=local.getSize(new THREE.Vector3()),localCenter=local.getCenter(new THREE.Vector3());
            const positions=geometry.getAttribute('position'),valid:boolean[]=[];
            for(let i=0;i<positions.count;i++){
              const x=roofCenter.x+(patch-1)*roofSize.x*.27+(positions.getX(i)-localCenter.x)/Math.max(localSize.x,.001)*roofSize.x*.48;
              const z=roofCenter.z+(positions.getZ(i)-localCenter.z)/Math.max(localSize.z,.001)*roofSize.z*.94;
              const thickness=(positions.getY(i)-local.min.y)/Math.max(localSize.y,.001)*.24;
              ray.set(new THREE.Vector3(x,roofBounds.max.y+2,z),new THREE.Vector3(0,-1,0));
              const hit=ray.intersectObjects(roofMeshes,false)[0];
              valid.push(!!hit);
              positions.setXYZ(i,x,(hit?.point.y??roofCenter.y)+.015+thickness,z);
            }
            const index=geometry.getIndex(),keep:number[]=[];
            for(let i=0;i<(index?.count??positions.count);i+=3){
              const ids=[0,1,2].map(k=>index?index.getX(i+k):i+k);
              if(ids.every(id=>valid[id]))keep.push(...ids);
            }
            geometry.setIndex(keep);positions.needsUpdate=true;geometry.computeVertexNormals();geometry.computeBoundingSphere();
            const material=new THREE.MeshStandardMaterial({color:'#eef7fc',roughness:1});
            const cover=new THREE.Mesh(geometry,material);cover.name='Снег на крыше колодца';cover.castShadow=true;cover.receiveShadow=true;scene.add(cover);
          }
          disposeObject(pieces.scene);refreshShadows();
        }).catch(()=>{});

        refreshShadows();
      }).catch(()=>{if(alive)setStatus('Не удалось загрузить новый колодец.');});
      refreshShadows();
    }).catch(()=>{if(alive)setStatus('Не удалось загрузить лестницу. Обнови игру.');});

    cachedGlbBuffer(`${BASE}img/models/Yggdrasil_Roots_Ice.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>{
      if(!alive){disposeObject(asset.scene);textures.forEach(t=>t.dispose());return;}
      const root=asset.scene;root.name='Сплетение корней — ледяная арка';
      root.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(root),size=bounds.getSize(new THREE.Vector3());
      root.scale.set(14/Math.max(size.x,.001),11/Math.max(size.y,.001),10/Math.max(size.z,.001));
      root.updateMatrixWorld(true);
      const fitted=new THREE.Box3().setFromObject(root),center=fitted.getCenter(new THREE.Vector3());
      root.position.set(rootsLocation.x-center.x,niflGroundY(rootsLocation.x,rootsLocation.z)-.2-fitted.min.y,rootsLocation.z-center.z);
      root.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});scene.add(root);refreshShadows();
    },()=>{})).catch(()=>{});

    const loadRootsAsset=(file:string)=>cachedGlbBuffer(`${BASE}img/models/${file}`).then(buffer=>new Promise<THREE.Group>((resolve,reject)=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>resolve(asset.scene),reject)));
    Promise.allSettled([loadRootsAsset('Niflheim_Snow_Mountain_Lite.glb')]).then(results=>{
      const loaded=results.filter((r):r is PromiseFulfilledResult<THREE.Group>=>r.status==='fulfilled').map(r=>r.value);
      if(!alive||loaded.length!==1){loaded.forEach(disposeObject);if(!alive)textures.forEach(t=>t.dispose());return;}
      rootsSpace=createRootsIceCave(loaded[0],rootsLocation.x,rootsLocation.z,niflGroundY);scene.add(rootsSpace.root);
      carveRootsTerrain(scene.children.filter(o=>o.name==='Niflheim terrain'));
      const space=rootsSpace;
      crystalScene.setPlace('roots',new THREE.Vector3(rootsLocation.x-3,space.groundY(rootsLocation.x-3,rootsLocation.z-7)??niflGroundY(rootsLocation.x,rootsLocation.z),rootsLocation.z-7));
      amuletScene.setAssembly(new THREE.Vector3(rootsLocation.x+3,(space.groundY(rootsLocation.x+3,rootsLocation.z-5)??0)+3,rootsLocation.z-5));
      crystalScene.setAssembly(new THREE.Vector3(rootsLocation.x+3,(space.groundY(rootsLocation.x+3,rootsLocation.z-5)??0)+3,rootsLocation.z-5));
      cachedGlbBuffer(`${BASE}img/models/Niflheim_Sorceress_Optimized.glb`).then(buffer=>new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{
        if(!alive){disposeObject(asset.scene);return;}space.addSorceress(asset.scene);refreshShadows();
      }).catch(()=>{if(alive)setStatus('Волшебница не загрузилась. Попробуй открыть локацию снова.');});

      loadRootsAsset('Ice_Cave_1_Optimized.glb').then(iceberg=>{
        if(!alive){disposeObject(iceberg);textures.forEach(t=>t.dispose());return;}
        space.addIceberg(iceberg);refreshShadows();
      }).catch(()=>{});

      scene.traverse((o:any)=>{if(o.name==='Niflheim terrain'&&o.isMesh){const p=o.geometry.getAttribute('position');for(let i=0;i<p.count;i++)p.setY(i,terrainY(p.getX(i),p.getZ(i)));p.needsUpdate=true;o.geometry.computeVertexNormals();o.geometry.computeBoundingSphere();}});
      refreshShadows();
    });

    const memoryLocation=NIFL_LOCATIONS.find(l=>l.id==='memoryCave')!;
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Memory_Igloo.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>{
      if(!alive){disposeObject(asset.scene);textures.forEach(t=>t.dispose());return;}
      memorySpace=createMemoryIgloo(asset.scene,memoryLocation.x,memoryLocation.z,niflGroundY);
      const space=memorySpace;scene.add(space.model,space.base);
      memoryTable=createMemoryTable(scene,space.world);const table=memoryTable;crystalScene.setPlace('memory',space.world(2.2,3.12,-4));
      for(const file of ['Niflheim_Memory_Flame.glb','Niflheim_Memory_Capsule.glb'])cachedGlbBuffer(`${BASE}img/models/${file}`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{if(!alive){disposeObject(asset.scene);return;}if(file.includes('Flame'))table.addFlame(asset.scene,asset.animations);else table.addCapsule(asset.scene);refreshShadows();}).catch(()=>{if(alive)setStatus('Не удалось загрузить предметы на столе памяти.');});
      scene.traverse((o:any)=>{if(o.name==='Niflheim terrain'&&o.isMesh){const p=o.geometry.getAttribute('position');for(let i=0;i<p.count;i++)p.setY(i,terrainY(p.getX(i),p.getZ(i)));p.needsUpdate=true;o.geometry.computeVertexNormals();o.geometry.computeBoundingSphere();}});
      const light=new THREE.PointLight('#c8e2ff',65,45,2);light.position.set(memoryLocation.x,space.floor+13,memoryLocation.z-20);scene.add(light);
      cachedGlbBuffer(`${BASE}img/models/Niflheim_Giant_Optimized.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>{
        if(!alive){disposeObject(asset.scene);textures.forEach(t=>t.dispose());return;}
        memoryGiant=createNiflheimGiant(asset.scene,space,0,0,{headColor:'#81b6d9',remainSeated:true});
        memoryGiant.root.name='Хранитель воспоминаний';scene.add(memoryGiant.root,memoryGiant.rock);refreshShadows();
      },()=>{})).catch(()=>{});refreshShadows();
    },()=>{})).catch(()=>{});

    cachedGlbBuffer(`${BASE}img/models/Magical_Gyroscope_Seal_No_Stand.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{
      if(!alive){disposeObject(asset.scene);return;}
      for(const def of NIFLHEIM_SEALS){
        if(def.id==='shelter')continue;
        const visual=createNiflheimSealVisual(cloneSkeleton(asset.scene) as THREE.Group,def,asset.animations);
        if(def.id==='nidhogg'&&towerEntrance.current){const t=towerEntrance.current;visual.place(t.center.x,t.frontZ+2.5,t.floor,0);}
        else if(def.id==='livingWater'&&livingSealPlace)visual.place(livingSealPlace.x,livingSealPlace.z,livingSealPlace.y,0);
        else visual.place(def.x,def.z,walkingY(def.x,def.z));
        visual.update(0,sealOpened(crystalDoneRef.current,def.id),sealAvailable(crystalDoneRef.current,def.id));
        sealVisuals.push(visual);scene.add(visual.root);
      }
      refreshShadows();
    }).catch(()=>{if(alive)setStatus('Не удалось загрузить печати Нифльхейма. Открой мир снова.');});

    // Fred Drabble's cave, CC BY 4.0: snowy giant shelter facing the entrance road.
    const forgeLocation=NIFL_LOCATIONS.find(l=>l.id==='forge')!;
    forgeSpace=createNiflheimForge(forgeLocation.x,forgeLocation.z,niflGroundY(forgeLocation.x,forgeLocation.z),niflGroundY,refreshShadows);scene.add(forgeSpace.root);
    const workshop=forgeSpace;
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Giant_Optimized.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>{
      if(!alive){disposeObject(asset.scene);textures.forEach(t=>t.dispose());return;}
      const smith=createNiflheimGiant(asset.scene,{world:(x,y,z)=>new THREE.Vector3(x,y,z),inside:()=>true},0,0,{headColor:'#d8b59a'});
      smith.update(2.8,{x:0,z:-12},true);smith.rock.geometry.dispose();(smith.rock.material as THREE.Material).dispose();
      const body=smith.root;body.name='Великан-кузнец';body.scale.setScalar(.65);body.position.set(3.8,0,-11);body.rotation.y=0;
      workshop.root.add(body);body.updateMatrixWorld(true);
      body.traverse((o:any)=>{if(o.isSkinnedMesh){o.skeleton.update();o.computeBoundingBox();}});
      const bounds=new THREE.Box3().setFromObject(body);body.position.y+=workshop.root.position.y-bounds.min.y;
      refreshShadows();
    },()=>{})).catch(()=>{});
    refreshShadows();
    const shelter=NIFL_LOCATIONS.find(l=>l.id==='shelter')!;
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Snow_Cave_Optimized.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,gltf=>{
      if(!alive){disposeObject(gltf.scene);textures.forEach(t=>t.dispose());return;}
      const model=gltf.scene,angle=Math.atan2(-shelter.x,130-shelter.z);
      reshapeCaveEntrance(model,stone);
      model.rotation.y=angle;model.scale.setScalar(CAVE_SCALE);
      // Anchor the forward mouth to the marker, with the cave behind the approach.
      const mouth=new THREE.Vector3(CAVE_MOUTH_X,CAVE_FLOOR_Y,CAVE_FRONT_Z).multiplyScalar(CAVE_SCALE).applyAxisAngle(new THREE.Vector3(0,1,0),angle);
      model.position.set(shelter.x-mouth.x,niflGroundY(shelter.x,shelter.z)-mouth.y-.04,shelter.z-mouth.z);
      model.name='Приют великанов-хранителей';
      model.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
      scene.add(model);shelterPlaceholder.visible=false;
      caveSpace=createCaveSpace(model);
      const sealSpace=caveSpace;
      cachedGlbBuffer(`${BASE}img/models/Magical_Gyroscope_Seal_No_Stand.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{
        if(!alive){disposeObject(asset.scene);return;}
        firstSeal=createFirstSeal(cloneSkeleton(asset.scene) as THREE.Group,sealSpace,angle,asset.animations);scene.add(firstSeal.root);firstSeal.update(0,sealOpened(crystalDoneRef.current,'shelter'));
        refreshShadows();
      }).catch(()=>{if(alive)setStatus('Не удалось загрузить печати Нифльхейма. Открой мир снова.');});
      // One animated guardian is moved to the seal whose battle is active.
      cachedGlbBuffer(`${BASE}img/models/Scourger_Rig_Optimized.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{
        if(!alive){disposeObject(asset.scene);return;}
        sealGuardian=installSealGuardian(scene,asset,sealSpace,angle);
        const firstPoint={x:sealGuardian.root.position.x,z:sealGuardian.root.position.z,angle:sealGuardian.root.rotation.y};
        sealGuardianPlace.current=(id:string)=>{
          if(!sealGuardian)return;
          if(id==='shelter'){sealGuardian.moveTo(firstPoint.x,firstPoint.z,firstPoint.angle);return;}
          const point=sealVisuals.find(v=>v.id===id)?.guardianPoint();if(point)sealGuardian.moveTo(point.x,point.z,point.angle);
        };
        refreshShadows();
      }).catch(()=>{/* Await asset upload; preserve the existing scene. */});
      const stonesCentre=caveSpace.world(CAVE_MOUTH_X,CAVE_FLOOR_Y,-4);
      cachedGlbBuffer(`${BASE}img/models/Niflheim_Guardian_Stones.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{if(!alive){disposeObject(asset.scene);return;}guardianStones=installGuardianStones(scene,asset.scene,stonesCentre);refreshShadows();}).catch(()=>{if(alive)setStatus('Не удалось загрузить камни хранителей.');});
      const giantSpace=caveSpace;
      cachedGlbBuffer(`${BASE}img/models/Niflheim_Giant_Optimized.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>{
        if(!alive){disposeObject(asset.scene);textures.forEach(t=>t.dispose());return;}
        giant=createNiflheimGiant(asset.scene,giantSpace,CAVE_MOUTH_X,CAVE_FLOOR_Y);
        scene.add(giant.root,giant.rock);refreshShadows();
      },()=>{if(alive)setStatus('Не удалось загрузить великана. Войди в Нифльхейм снова.');})).catch(()=>{if(alive)setStatus('Не удалось загрузить великана. Войди в Нифльхейм снова.');});
      scene.traverse((o:any)=>{
        if(o.name!=='Niflheim terrain'||!o.isMesh)return;
        const vertices=o.geometry.getAttribute('position');
        for(let i=0;i<vertices.count;i++)vertices.setY(i,terrainY(vertices.getX(i),vertices.getZ(i)));
        vertices.needsUpdate=true;o.geometry.computeVertexNormals();o.geometry.computeBoundingSphere();
      });
      const hallLight=new THREE.PointLight('#c2deec',35,38,2);
      hallLight.position.copy(caveSpace.world(CAVE_MOUTH_X,CAVE_FLOOR_Y+10,-5));scene.add(hallLight);
      for(const [dx,dz,r] of [[-8,2,2.2],[8,1,2.8],[-11,-6,3],[11,-7,2.4]]){
        const offset=new THREE.Vector3(dx,0,dz).applyAxisAngle(new THREE.Vector3(0,1,0),angle),x=shelter.x+offset.x,z=shelter.z+offset.z;
        mesh(rockGeo,ice,x,niflGroundY(x,z)+r*.4,z,r,r*.8,r*.9);
        mesh(rockGeo,snow,x,niflGroundY(x,z)+r*.83,z,r*.94,r*.27,r*.85);
      }
      refreshShadows();
    },()=>{})).catch(()=>{});
    cachedGlbBuffer(`${BASE}img/models/Vika-3d-animated-optimized.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,gltf=>{
      if(!alive){disposeObject(gltf.scene);textures.forEach(t=>t.dispose());return;}
      const model=gltf.scene,bounds=new THREE.Box3().setFromObject(model);const height=Math.max(.01,bounds.max.y-bounds.min.y);model.scale.setScalar(6.1/height);model.position.y=-bounds.min.y*(6.1/height);hero.add(model);model.traverse((o:any)=>{if(o.isMesh)o.receiveShadow=true;});
      const bone=(suffix:string)=>{let result:THREE.Object3D|undefined;model.traverse(o=>{if(o.name.replace(/[^a-zA-Z0-9]/g,'').endsWith(suffix))result=o;});return result;};
      const attach=(asset:string,parent:THREE.Object3D,isShield:boolean)=>{
        cachedGlbBuffer(`${BASE}img/models/${asset}`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,equipment=>{
          if(!alive){disposeObject(equipment.scene);textures.forEach(t=>t.dispose());return;}
          const item=equipment.scene;textureSteelOnWeapon(item,asset);if(!isShield)styleNiflheimWeapon(item,weapon);
          if(isShield&&asset==='Shield_Round.glb')item.scale.z=.22;
          item.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(item),size=box.getSize(new THREE.Vector3()),centre=box.getCenter(new THREE.Vector3());
          const span=isShield?Math.max(size.x,size.y,size.z):size.y;if(span<.001){disposeObject(item);return;}
          item.position.set(-centre.x,isShield?-centre.y:-box.min.y,-centre.z);
          const mount=new THREE.Group();mount.scale.setScalar((isShield?.38:weapon==='spear'?.82:.57)/span);
          mount.position.set(0,isShield?.075:-.065,isShield?-.016:.015);
          if(isShield)mount.rotation.y=Math.PI;else mount.rotation.x=-.2;
          mount.add(item);parent.add(mount);item.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});refreshShadows();
        },()=>{})).catch(()=>{});
      };
      const rightHand=bone('RightHand'),leftArm=bone('LeftForeArm');
      shieldBones=[bone('LeftArm'),leftArm].filter((b):b is THREE.Object3D=>!!b);shieldBase=shieldBones.map(b=>b.quaternion.clone());
      if(rightHand)attach(weapon==='default'?'Sword.glb':WEAPON_ASSET[weapon],rightHand,false);
      if(shieldEquipped&&leftArm)attach(shieldAsset,leftArm,true);
      mixer=new THREE.AnimationMixer(model);const findClip=(...names:string[])=>names.map(name=>THREE.AnimationClip.findByName(gltf.animations,name)).find(Boolean);
      const idleClip=findClip('idle','sword_idle')||gltf.animations[0],walkClip=findClip('walk_loop','walk')||idleClip;
      const attackClip=findClip('sword_attack','attack');if(attackClip)attack=mixer.clipAction(attackClip);
      sealHeroStrike.current=()=>{if(!attack)return;combatEffects.slash();currentAction?.fadeOut(.08);attack.reset().setLoop(THREE.LoopOnce,1);attack.clampWhenFinished=true;attack.setEffectiveWeight(1);attack.fadeIn(.05).play();currentAction=attack;attackUntil=performance.now()+Math.max(650,attack.getClip().duration*1000);};
      attackAction.current=()=>{
        const done=crystalDoneRef.current,pos=position.current;
        const sealId=nearbySeal(pos);
        if(sealId){
          const def=sealById(sealId)!;
          if(!sealAvailable(done,sealId)){const previous=NIFLHEIM_SEALS[def.order-2];setStatus('🔒 Сначала открой «'+(previous?.location||'предыдущую локацию')+'».');return;}
          if(!sealDefeated.current.has(sealId)&&!sealGuardianDefeated(done,sealId))startSealBattle(sealId);
          else setStatus('Страж '+def.order+'/'+NIFLHEIM_SEALS.length+' побеждён. Оплати '+def.drops.toLocaleString('ru-RU')+' капель, руны и сталь, чтобы снять печать.');
          return;
        }
        if(paused.current||!attack||performance.now()<attackUntil)return;clearInput();combatEffects.slash();currentAction?.fadeOut(.08);attack.reset().setLoop(THREE.LoopOnce,1);attack.clampWhenFinished=true;attack.setEffectiveWeight(1);attack.fadeIn(.05).play();currentAction=attack;attackUntil=performance.now()+Math.max(650,attack.getClip().duration*1000);riggedEnemies.strikeEnemy(position.current,weapon,performance.now());
      };
      if(idleClip)idle=mixer.clipAction(idleClip);if(walkClip)walk=mixer.clipAction(walkClip);idle?.play();currentAction=idle;setStatus('Сияние Нифльхейма ведёт тех, кто готов узнать его тайны.');
    },()=>{if(alive)setStatus('Не удалось загрузить Vicki. Выйди на Древо и войди снова.');})).catch(()=>{if(alive)setStatus('Не удалось загрузить Vicki. Выйди на Древо и войди снова.');});
    const entranceZ=65*NIFL_SCALE,entranceY=niflGroundY(0,entranceZ);
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Rune_Entrance.glb`).then(buffer=>new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{
      if(!alive){disposeObject(asset.scene);return;}
      scene.add(fitRuneEntrance(asset.scene,entranceY,entranceZ));entranceSupports=runeEntranceSupports(asset.scene,entranceY);cachedGlbBuffer(`${BASE}img/models/Niflheim_Wall_Torch.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(torch=>{if(alive)addEntranceTorches(scene,torch.scene,entranceSupports,entranceY);}).catch(error=>console.warn('Entrance torches unavailable',error));entrancePlaceholder.visible=false;entranceVeil=addEntranceVeil(scene,entranceY,position.current);refreshShadows();
    }).catch(()=>{if(alive)setStatus('Не удалось загрузить рунические врата.');});
    const resize=()=>{const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();};
    const observer=new ResizeObserver(resize);observer.observe(host);resize();
    const down=(event:KeyboardEvent)=>{if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d'].includes(event.key)){event.preventDefault();input.current.add(event.key);}};
    const up=(event:KeyboardEvent)=>input.current.delete(event.key);
    const clear=clearInput;window.addEventListener('keydown',down);window.addEventListener('keyup',up);window.addEventListener('blur',clear);document.addEventListener('visibilitychange',clear);
    let previous=performance.now(),checkAt=0,currentNear='',nearTrialRef='',velocityX=0,velocityZ=0;const cameraDir={x:0,z:-1};
    camera.position.set(position.current.x,9,position.current.z+19);
    const frame=(now:number)=>{
      if(!alive)return;const flyoverDt=Math.min((now-previous)/1000,1),dt=Math.min(flyoverDt,.05);previous=now;
      const keys=input.current;let dx=0,dz=0;if(!movementPaused.current&&!document.hidden){dx=(keys.has('ArrowRight')||keys.has('d')?1:0)-(keys.has('ArrowLeft')||keys.has('a')?1:0);dz=(keys.has('ArrowDown')||keys.has('s')?1:0)-(keys.has('ArrowUp')||keys.has('w')?1:0);}
      if(!movementPaused.current&&!document.hidden&&Math.hypot(analog.current.x,analog.current.z)>.05){dx=analog.current.x;dz=analog.current.z;}
      const length=Math.hypot(dx,dz),isMoving=length>.05;
      const steer=1-Math.exp(-dt*14);
      velocityX=THREE.MathUtils.lerp(velocityX,isMoving?dx/length:0,steer);velocityZ=THREE.MathUtils.lerp(velocityZ,isMoving?dz/length:0,steer);
      if(!movementPaused.current&&!document.hidden){const from=position.current,next=moveThroughNiflEntrance(from,from.x+velocityX*8.5*dt,from.z+velocityZ*8.5*dt);
        const candidate=caveSpace?caveSpace.move(from,next):next;
        if(!(firstSeal&&!sealOpened(crystalDoneRef.current,'shelter')&&firstSeal.blocked(from,candidate))&&!sealedEntry(from,candidate)&&!(niflRiverBlocked(candidate.x,candidate.z)&&venetianBridges.groundY(candidate.x,candidate.z)===undefined&&rootsBridge.groundY(candidate.x,candidate.z)===undefined&&forgeSpace?.groundY(candidate.x,candidate.z)===undefined&&lakeBridgeY(candidate.x,candidate.z)===undefined&&!rootsSpace?.inside(candidate.x,candidate.z)&&!memorySpace?.inside(candidate.x,candidate.z)&&!caveSpace?.inside(candidate.x,candidate.z)&&!lakeCave?.inside(candidate.x,candidate.z))&&!entranceSupports.some(b=>candidate.x>b.min.x&&candidate.x<b.max.x&&candidate.z>b.min.z&&candidate.z<b.max.z)&&!dryRockBounds.some(b=>candidate.x>b.min.x&&candidate.x<b.max.x&&candidate.z>b.min.z&&candidate.z<b.max.z)&&!lakeCave?.blocked(from,candidate)&&!towerEntrance.current?.blocked(from,candidate)&&!sourceBasin.blocked(from,candidate)&&!lakeBridgeBlocked(from,candidate,lakeBridgeDeck!==undefined,bridgeRepair?.ready()??false)&&!platformBlocked(from,candidate)&&!hallSpace?.blocked(candidate.x,candidate.z)&&!memorySpace?.blocked(candidate.x,candidate.z)&&!memoryTable?.blocked(candidate.x,candidate.z)&&!memoryGiant?.blocked(candidate.x,candidate.z,from)&&!venetianBridges.blocked(candidate.x,candidate.z)&&!rootsBridge.blocked(candidate.x,candidate.z)&&!rootsSpace?.blocked(candidate.x,candidate.z)&&!guardianStones?.blocked(candidate.x,candidate.z)&&!giant?.blocked(candidate.x,candidate.z,from)&&!forgeSpace?.blocked(candidate.x,candidate.z))position.current=candidate;}
      if(isMoving){const target=Math.atan2(velocityX,velocityZ),difference=Math.atan2(Math.sin(target-hero.rotation.y),Math.cos(target-hero.rotation.y));hero.rotation.y+=difference*(1-Math.exp(-dt*14));cameraDir.x=Math.sin(hero.rotation.y);cameraDir.z=Math.cos(hero.rotation.y);}
      const walking=!movementPaused.current&&!document.hidden&&Math.hypot(velocityX,velocityZ)>.08;
      moving=walking;
      const next=now<attackUntil?attack:moving?walk:idle;
      if(next&&next!==currentAction){currentAction?.fadeOut(.16);next.reset();next.enabled=true;next.setEffectiveWeight(1);next.setEffectiveTimeScale(1);next.fadeIn(.16).play();currentAction=next;}
      const pos=position.current;
      firstSeal?.update(now*.001,sealOpened(crystalDoneRef.current,'shelter'),dt);
      sealVisuals.forEach(v=>v.update(now*.001,sealOpened(crystalDoneRef.current,v.id),sealAvailable(crystalDoneRef.current,v.id),dt));
      const summonedSeal=sealSummoned.current;
      sealGuardian?.update(dt,!!summonedSeal&&!sealDefeated.current.has(summonedSeal),!!summonedSeal&&!sealOpened(crystalDoneRef.current,summonedSeal));
      if(!wandererLoading&&!wandererPresent&&Math.hypot(pos.x-wandererX,pos.z-wandererZ)<60)loadWanderer();
      if(previousFindCount!==questRef.current.found.length){previousFindCount=questRef.current.found.length;memoryFinds.update(questRef.current.found.map(f=>f.id));refreshShadows();}
      if(sourceBasin.update(dt,now*.001,questRef.current.restored,questRef.current.step))refreshShadows();
      if(towerSealVisual){towerSealVisual.visible=!dragonRef.current.unsealed;towerSealVisual.rotation.z+=dt*.09;}
      iceMarkers.forEach((marker,i)=>{marker.crystal.visible=!dragonRef.current.has('ice:'+marker.id);marker.crystal.rotation.y=now*.00022+i;});
      if(towerEntrance.current?.update(dt)){
        const returnPosition=towerEntrance.current.returnPosition;position.current={...returnPosition};remember.current({...returnPosition});
        undergroundCallback.current({...returnPosition});return;
      }
      hero.position.set(pos.x,walkingY(pos.x,pos.z),pos.z);
      dangerSign.visible=dangerouslyLowHp(battleRef.current?.heroHp??sharedInventoryRef.current.hp,sharedInventoryRef.current.maxHp);
      dangerMaterial.opacity=.8+.2*Math.sin(now*.006);
      wandererIdle?.(now);
      wandererTurn?.(dt,pos.x,pos.z);
      shieldBones.forEach((b,i)=>b.quaternion.copy(shieldBase[i]));mixer?.update(dt);lakeCave?.update(dt);memoryTable?.update(dt,now*.001);
      shieldBones.forEach((b,i)=>shieldBase[i].copy(b.quaternion));
      if(guardUntil.current>now&&guardUntil.current!==lastGuardFx){lastGuardFx=guardUntil.current;combatEffects.block();}
      combatEffects.update(now);
      glowTrails.update(now);
      const remaining=guardUntil.current-now,lift=shieldEquipped&&remaining>0?Math.min(THREE.MathUtils.clamp((1250-remaining)/170,0,1),THREE.MathUtils.clamp(remaining/260,0,1)):0;
      if(lift>0){const upper=shieldBones[0],lower=shieldBones[1];if(upper){upper.rotateX(-lift*1.9);upper.rotateY(-lift);upper.rotateZ(lift*1.1);}lower?.rotateX(-lift*.3);}
      if(giant?.update(dt,pos,!paused.current&&!document.hidden))refreshShadows();
      const hy=walkingY(pos.x,pos.z);
      entranceVeil?.update(now*.001,pos);
      rivers.update(now*.001);
      crystalScene.update(now*.001,crystalDoneRef.current);
      amuletScene.update(now*.001,crystalDoneRef.current);
      lakeSurfaces.forEach((surface,index)=>{surface.material=niflheimLakeFreed(index,liberationRef.current)?water:ice;});
      forgeSpace?.update(now*.001);
      const inCave=caveSpace?.inside(pos.x,pos.z);
      const inMemory=memorySpace?.inside(pos.x,pos.z);
      const inHall=hallSpace?.inside(pos.x,pos.z);
      const inRoots=rootsSpace?.inside(pos.x,pos.z);
      const cameraTarget=lakeCave?.inside(pos.x,pos.z)?lakeCave.camera(pos.x,pos.z):inHall?hallSpace!.camera(pos.x,pos.z):inRoots?rootsSpace!.camera(pos.x,pos.z):inMemory?memorySpace!.camera(pos.x,pos.z):inCave?caveSpace!.camera(pos.x,pos.z):new THREE.Vector3(pos.x-cameraDir.x*2,hy+9,pos.z-cameraDir.z*2+17);
      camera.position.lerp(cameraTarget,1-Math.exp(-dt*3.4));
      if(lakeCave?.inside(pos.x,pos.z)){camera.lookAt(pos.x,hy+2.2,pos.z-5);}
      else if(inHall){camera.lookAt(pos.x,hy+4.5,pos.z-7);}
      else if(inRoots){camera.lookAt(pos.x,hy+5,pos.z-8);}
      else if(inMemory){camera.lookAt(pos.x,hy+5,pos.z-7);}
      else if(inCave){const p=caveSpace!.local(pos.x,pos.z);camera.lookAt(caveSpace!.world(p.x,CAVE_FLOOR_Y+(p.z<0?6.5:3),p.z-6));}
      else camera.lookAt(pos.x+cameraDir.x*1.9,hy+3,pos.z-10+cameraDir.z*1.9);
      crystalMaterials.forEach(m=>{m.emissiveIntensity=1.35+Math.sin(now*.0017)*.12;});crystalHalos.forEach(h=>{(h.material as THREE.SpriteMaterial).opacity=.48+Math.sin(now*.0017)*.05;});
      drySeals.forEach(r=>{if(questRef.current.seals.some(s=>s.id===r.id))r.opacity=Math.max(0,r.opacity-dt/1.4);(r.mesh.material as THREE.MeshBasicMaterial).opacity=r.opacity;r.mesh.visible=r.opacity>0;});
      if(waterSpiral){waterSpiral.rotation.y+=dt*(liberationRef.current.vampireFreed?.075:.25);const target=liberationRef.current.vampireFreed?.68:1;waterSpiral.scale.setScalar(THREE.MathUtils.lerp(waterSpiral.scale.x,target,Math.min(1,dt*.8)));}
      // Quest completion does not hide the rigged guardians; combat cooldown controls their return.
      riggedEnemies.tick(dt,now,pos,guardUntil.current>now,paused.current||document.hidden);
      if(bridgeRepair?.update(dt,questRef.current.bridgeRestored,questRef.current.bridgeParts))refreshShadows();
      sourceRing.rotation.z+=dt*.12;gates.forEach(g=>{(g.material as THREE.MeshBasicMaterial).opacity=.78+Math.sin(now*.001)*.06;});
      if(now-checkAt>180){checkAt=now;
        const nextSeal=nearbySeal(pos);
        setSealNear(prev=>prev===nextSeal?prev:nextSeal);
        const activeVisual=nextSeal==='shelter'?firstSeal:sealVisuals.find(v=>v.id===nextSeal);
        camera.updateMatrixWorld();
        const direction=activeVisual?sealViewHint(activeVisual.root.position,camera):'';
        setSealDirection(prev=>prev===direction?prev:direction);
        const nextAmulet=amuletScene.near(pos.x,pos.z,crystalDoneRef.current);setAmuletNear(prev=>prev===nextAmulet?prev:nextAmulet);
        const nextCrystal=crystalScene.near(pos.x,pos.z,crystalDoneRef.current);setCrystalNear(prev=>prev===nextCrystal?prev:nextCrystal);
        const find=memoryFinds.near(pos.x,pos.z,questRef.current.found.map(f=>f.id));
        const iceFragment=NIFL_ICE.find(p=>!dragonRef.current.has('ice:'+p.id)&&Math.hypot(pos.x-p.x,pos.z-p.z)<5.5);
        const seal=drySeals.find(r=>!questRef.current.seals.some(s=>s.id===r.id)&&Math.hypot(pos.x-r.position.x,pos.z-r.position.z)<6);
        const bridgePart=questRef.current.bridgeStarted&&!questRef.current.bridgeRestored?bridgeRepair?.near(pos.x,pos.z,questRef.current.bridgeParts):undefined;
        const atLivingWell=isNearRealmWell(pos.x,pos.z,wellObstacle);
        const atWell=atLivingWell||isNearRealmWell(pos.x,pos.z,nornsWellObstacle);
        const nearQuest=atWell?'':iceFragment?'ice:'+iceFragment.id:bridgePart?'bridge:find:'+bridgePart.id:bridgeRepair&&Math.abs(pos.x+72)<8&&(Math.abs(pos.z-27)<8||Math.abs(pos.z+12)<8)?'bridge':seal?'seal:'+seal.id:find?'find:'+find.id:rootsSpace&&Math.hypot(pos.x-10.5,pos.z+57)<7?'girl':Math.hypot(pos.x-NIFL_SOURCE.x,pos.z-NIFL_SOURCE.z)<13?'source':'';
        setQuestNear(prev=>prev===nearQuest?prev:nearQuest);
        const shore={x:40,z:109};
        const questLocation=atLivingWell?'livingWater':atWell?'threeNornsWell':Math.hypot(pos.x-shore.x,pos.z-shore.z)<10?'vampire':
          LIBERATION_TRIALS.find(t=>t.id!=='vampire'&&Math.hypot(pos.x-(t.id==='iceLake'?-50:(NIFL_LOCATIONS.find(l=>l.id===t.id)?.x??900)),
              pos.z-(t.id==='iceLake'?10:(NIFL_LOCATIONS.find(l=>l.id===t.id)?.z??900)))<13)?.id||'';
        if(questLocation!==nearTrialRef){nearTrialRef=questLocation;setNearTrial(questLocation);}
        const l=NIFL_LOCATIONS.filter(item=>item.id!=='nineWorldStranger'||wandererPresent).reduce((a,b)=>Math.hypot(pos.x-a.x,pos.z-a.z)<Math.hypot(pos.x-b.x,pos.z-b.z)?a:b);const id=lakeCave?.inside(pos.x,pos.z)?'snowMountain':towerEntrance.current?.canEnter(pos.x,pos.z)?'nidhogg':forgeSpace?.canEnter(pos.x,pos.z)?'forge':l.id!=='forge'&&l.id!=='nidhogg'&&Math.hypot(pos.x-l.x,pos.z-l.z)<9?l.id:'';if(id!==currentNear){currentNear=id;setNear(id);}}
      wellGlowSprites.forEach((sprite,i)=>{(sprite.material as THREE.SpriteMaterial).opacity=.54+.12*Math.sin(performance.now()*.0017+i*2);});
      renderer.render(scene,camera);raf=requestAnimationFrame(frame);
    };raf=requestAnimationFrame(frame);
    return()=>{sealVisuals.forEach(v=>v.dispose());riggedEnemies.dispose();glowTrails.dispose();memoryTable?.dispose();sourceBasin.dispose();venetianBridges.dispose();rootsBridge.dispose();combatEffects.dispose();towerEntrance.current?.dispose();towerEntrance.current=null;attackAction.current=null;sealGuardianPlace.current=null;guardUntil.current=0;alive=false;cancelAnimationFrame(raf);observer.disconnect();window.removeEventListener('keydown',down);window.removeEventListener('keyup',up);window.removeEventListener('blur',clear);document.removeEventListener('visibilitychange',clear);clear();remember.current({...position.current});rivers.dispose();forgeSpace?.dispose();mixer?.stopAllAction();scene.traverse((o:any)=>{if(o.isMesh||o.isPoints||o.isSprite||o.isLine){o.geometry?.dispose();if(o.isInstancedMesh)o.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){if(m){for(const v of Object.values(m))if(v instanceof THREE.Texture)textures.add(v);m.dispose();}}}});textures.forEach(t=>t.dispose());sun.shadow.dispose();renderer.dispose();renderer.domElement.remove();};
  },[weapon,shieldAsset,shieldEquipped]);
  const steerStick=(event:React.PointerEvent<HTMLButtonElement>)=>{
    if(pointerId.current!==event.pointerId)return;
    const rect=event.currentTarget.getBoundingClientRect(),radius=rect.width*.36;
    let x=(event.clientX-rect.left-rect.width/2)/radius,z=(event.clientY-rect.top-rect.height/2)/radius;
    const length=Math.hypot(x,z);if(length>1){x/=length;z/=length;}
    analog.current=length>.12?{x,z}:{x:0,z:0};
    if(stick.current)stick.current.style.transform=`translate(${x*radius}px,${z*radius}px)`;
  };
  const startStick=(event:React.PointerEvent<HTMLButtonElement>)=>{event.preventDefault();pointerId.current=event.pointerId;event.currentTarget.setPointerCapture(event.pointerId);steerStick(event);};
  const stopStick=(event:React.PointerEvent<HTMLButtonElement>)=>{if(pointerId.current===event.pointerId)clearInput();};
  const mapPoint=(x:number,z:number)=>({x:x/NIFL_SCALE+65,y:z/NIFL_SCALE+80});
  const currentSeal=sealById(sealNear);
  const sealRuneCount=(id:string)=>inventory.lootCounts?.[id]??(inventory.runes.includes(id)?1:0);
  const sealWon=!!currentSeal&&(sealDefeated.current.has(currentSeal.id)||sealGuardianDefeated(questDone,currentSeal.id));
  const sealActive=!!currentSeal&&sealAvailable(questDone,currentSeal.id);
  const sealCanPay=!!currentSeal&&sealActive&&sealWon&&sealWallet.drops>=currentSeal.drops&&sealWallet.steel>=currentSeal.steel&&currentSeal.runes.every(r=>sealRuneCount(r.id)>=r.amount);
  const sealsOpened=openedSealCount(questDone);
  const lowHealth=dangerouslyLowHp(battle?.heroHp??inventory.hp,inventory.maxHp);
  const drinkFromBag=(id:string)=>{
    const current=battleRef.current;
    if(!current){inventory.onUsePotion(id);return;}
    if(!useBattlePotion(id,current.heroHp))return;
    const heroHp=id==='lifeElixir'||id==='hoddmimirElixir'?inventory.maxHp:id==='northernMoss'?Math.min(inventory.maxHp,current.heroHp+30):current.heroHp;
    const next={...current,heroHp};battleRef.current=next;setBattle(next);
  };
  return <div className="nifl-world"><style>{CSS}</style><div className="nifl-mount" ref={mount}/>
    <div className="mid3d-ui mid3d-top">
      <button className="mid3d-top-btn" aria-label="Карта Нифльхейма" onClick={()=>{clearInput();setMapOpen(true);}}><img className="mid3d-top-button-art" src={`${BASE}img/models/ui_map.png`} alt="" draggable={false}/></button>
      <div className="mid3d-realm-title nifl-realm-title">Нифльхейм</div>
      <button className="mid3d-top-btn" aria-label="Мельница капель бессмертия" onClick={()=>{clearInput();remember.current({...position.current});onOpenMill();}}><img className="mid3d-top-button-art" src={`${BASE}img/models/ui_mill.png`} alt="" draggable={false}/></button>
    </div>
    {status&&!modalActive&&<div className="nifl-status">{status}</div>}
    <button className="mid3d-ui mid3d-joy nifl-joystick" aria-label="Управление Vicki: тяни в нужном направлении" onPointerDown={startStick} onPointerMove={steerStick} onPointerUp={stopStick} onPointerCancel={stopStick} onLostPointerCapture={stopStick}><img src={`${BASE}img/models/ui_joystick.png`} alt="" draggable={false}/><span className="mid3d-knob" ref={stick}/></button>
    <button className="mid3d-ui mid3d-block" aria-label="Прикрыться щитом" disabled={!shieldEquipped} onClick={()=>{if(!paused.current){clearInput();guardUntil.current=performance.now()+1250;}}}><img className="mid3d-control-art" src={`${BASE}img/models/ui_shield.png`} alt="" draggable={false}/></button>
    <button className="mid3d-ui mid3d-strike" aria-label="Удар оружием" onClick={()=>attackAction.current?.()}><img className="mid3d-control-art" src={`${BASE}img/models/ui_attack.png`} alt="" draggable={false}/></button>
    <button className="mid3d-ui mid3d-action" style={{top:125,zIndex:inventoryOpen?5:25,filter:lowHealth?'drop-shadow(0 0 9px #ff2945)':undefined}} aria-label={lowHealth?'Опасно: мало здоровья. Открыть сумочку с зельями':'Запас рун и эликсиров'} onClick={()=>{clearInput();setInventoryOpen(true);}}><img className="mid3d-control-art" src={`${BASE}img/models/ui_inventory.png`} alt="" draggable={false}/></button>
    {inventoryOpen&&<div className="nifl-overlay" style={{zIndex:40}}><section className="nifl-panel" role="dialog" aria-modal="true" aria-label="Запас Vicki"><h3>Запас Vicki</h3><p>🧿 {AMULET_NAME}: {amulet.restored?'восстановлен · защита от дракона 30%':amulet.collected.length+'/6 частей'}</p><p>🌊 Сердце Морвейна: {liberation.vampireFreed?'в рюкзаке · активируется перед финальным боем':'не получено'}</p><p>💎 {CRYSTAL_NAME}: {crystal.gateOpen?'установлен во вратах Муспельхейма':crystal.assembled?'целый кристалл · 1 шт.':crystal.collected.length+'/3 осколков'}</p><InventorySection kind="potions" {...inventory} hp={battle?.heroHp??inventory.hp} onUsePotion={drinkFromBag}/><InventorySection kind="runes" {...inventory}/><button onClick={()=>setInventoryOpen(false)}>Вернуться в игру</button></section></div>}
    {currentSeal&&!modalActive&&<div className="nifl-seal-prompt" role="group" aria-label="Условия снятия печати">
      <b>{currentSeal.order}/{NIFLHEIM_SEALS.length} · {currentSeal.name}</b>
      <div className="nifl-seal-costs" aria-label="Стоимость снятия">
        <span style={{color:sealWallet.drops>=currentSeal.drops?'#b9e8bd':'#efbbc6'}}>💧 {currentSeal.drops.toLocaleString('ru-RU')} капель</span>
        <span style={{color:sealWallet.steel>=currentSeal.steel?'#b9e8bd':'#efbbc6'}}>⚙ {currentSeal.steel} стали</span>
        {currentSeal.runes.map(r=><span key={r.id} style={{color:sealRuneCount(r.id)>=r.amount?'#b9e8bd':'#efbbc6'}}>{r.symbol} {r.name} ×{r.amount}</span>)}
      </div>
      <small>Награды: победа +{sealVictoryReward(currentSeal).toLocaleString('ru-RU')} 💧 · снятие +{sealOpeningReward(currentSeal).toLocaleString('ru-RU')} 💧.</small>
      {sealWon?<button type="button" disabled={!sealCanPay} onClick={()=>{if(!sealCanPay)return;clearInput();onSealEvent(('open:'+currentSeal.id) as NiflheimSealEvent);setStatus('🔓 '+currentSeal.name+' снята. +'+sealOpeningReward(currentSeal).toLocaleString('ru-RU')+' капель возвращено. '+(currentSeal.order===NIFLHEIM_SEALS.length?'Все печати сняты! Можно собирать обсидиан и готовиться к дракону.':'Следующая печать пробудилась.'));}}>
        {sealCanPay?'Снять печать':'Не хватает ресурсов для снятия печати'}
      </button>:<>
        <small>{!sealActive?'Печать спит: сначала открой предыдущую локацию.':sealDirection||'Ударь мечом по шару — появится страж.'}</small>
        <small>Страж: ≈{currentSeal.hits} ударов · урон {Math.round(currentSeal.damagePct*100)}% здоровья до защиты.</small>
      </>}
    </div>}
    {!sealNear&&amuletNear&&!modalActive&&<div className="nifl-near nifl-quest-near"><b>🧿 {AMULET_PARTS.find(p=>p.id===amuletNear)?.name}</b><button disabled={!amulet.canCollect(amuletNear)} onClick={()=>{clearInput();amuletCallback.current?.(('collect:'+amuletNear) as AmuletEvent);setStatus('🧿 Часть амулета получена: '+(amulet.collected.length+1)+'/6.');}}>{amulet.canCollect(amuletNear)?'Забрать часть амулета':'Сначала освободи эту локацию'}</button></div>}
    {amuletDialog&&<div className="nifl-overlay"><section className="nifl-panel nifl-quest-panel" role="dialog" aria-modal="true" aria-label={AMULET_NAME}><button className="nifl-close" onClick={()=>setAmuletDialog(false)}>Закрыть</button><h3>🧿 {AMULET_NAME}</h3><p>«Нидхёгг расколол защиту хранителей на шесть частей. Верни их, и мы восстановим амулет. Без него дракона не победить».</p>{AMULET_PARTS.map(p=><p key={p.id}>{amulet.collected.includes(p.id)?'✓':'○'} {p.name} — {p.place}</p>)}{amulet.restored?<p>Амулет восстановлен и хранится в рюкзаке. Он автоматически поглощает 30% силы огня Нидхёгга и позволяет нанести решающий удар.</p>:<><p>Собрано: {amulet.collected.length}/6. Побеждать дракона для восстановления не нужно.</p><button disabled={!amulet.ready} onClick={()=>{amuletCallback.current?.('restore');setAmuletDialog(false);clearInput();setStatus('🧿 Амулет хранителей восстановлен. Защита от огня Нидхёгга: 30%.');}}>Восстановить амулет</button></>}<p>Сердце Морвейна активируй отдельно в подземелье перед финальным боем: оно ослабляет огонь дракона на 25%.</p></section></div>}
    {!sealNear&&crystalNear&&!amuletNear&&!modalActive&&<div className="nifl-near nifl-quest-near"><b>💎 {CRYSTAL_PARTS.find(p=>p.id===crystalNear)?.name}</b><button disabled={!crystal.canCollect(crystalNear)} onClick={()=>{clearInput();crystalCallback.current?.(('collect:'+crystalNear) as CrystalEvent);setStatus('💎 Осколок получен. Кристалл: '+(crystal.collected.length+1)+'/3.');}}>{crystal.canCollect(crystalNear)?'Забрать осколок':'Сначала освободи эту локацию'}</button></div>}
    {crystalDialog&&<div className="nifl-overlay"><section className="nifl-panel nifl-quest-panel" role="dialog" aria-modal="true" aria-label={CRYSTAL_NAME}><button className="nifl-close" onClick={()=>setCrystalDialog(false)}>Закрыть</button><h3>💎 {CRYSTAL_NAME}</h3><p>«Три части чистой слезы хранят память, чистоту и жизнь. Собери их. Когда Нидхёгг падёт и вода вернётся, мы соединим кристалл — ключ к первым вратам Муспельхейма».</p>{CRYSTAL_PARTS.map(p=><p key={p.id}>{crystal.collected.includes(p.id)?'✓':'○'} {p.name} — {p.place}</p>)}{crystal.gateOpen?<p>Кристалл установлен. Первые врата Муспельхейма открыты навсегда.</p>:crystal.assembled?<p>Кристалл соединён и хранится в запасе. Вставь его в первые врата Муспельхейма на Древе.</p>:<><p>Собрано: {crystal.collected.length}/3 · Нидхёгг: {crystal.dragonDefeated?'побеждён':'ещё жив'}</p><button disabled={!crystal.ready} onClick={()=>{crystalCallback.current?.('assemble');setCrystalDialog(false);setQuestDialog(null);setSelected('');clearInput();setStatus('💎 Осколки соединяются! Кристалл первозданной воды открывает путь в Муспельхейм.');}}>Соединить кристалл</button></>}</section></div>}
    {!sealNear&&questNear&&!crystalNear&&!amuletNear&&!modalActive&&<div className="nifl-near nifl-quest-near"><b>{questNear.startsWith('ice:')?'Осколок вечного льда':questNear==='bridge'?'Восстановление переправы':questNear.startsWith('bridge:find:')?BRIDGE_PARTS.find(p=>'bridge:find:'+p.id===questNear)?.name:questNear==='girl'?'Девушка у чаши':questNear==='source'?(quest.restored?'Возрождённый Хвергельмир':quest.ready?'Руны Хвергельмира готовы':'Печать Хвергельмира'):questNear.startsWith('seal:')?'Печать '+DRY_SEALS.find(r=>'seal:'+r.id===questNear)?.name:MEMORY_FINDS.find(f=>'find:'+f.id===questNear)?.name}</b><button onClick={()=>{clearInput();setQuestMessage('');if(questNear.startsWith('ice:')){emitDragon(questNear as DragonEvent);setStatus('Осколок вечного льда получен! Эликсир добавлен в общий запас.');}else if(questNear.startsWith('bridge:find:')){emitMemory(questNear as MemoryEvent);setStatus('Камень опоры найден.');}else if(questNear.startsWith('find:')){emitMemory(questNear as MemoryEvent);setStatus('Осколок памяти найден. Вернись к девушке, когда соберёшь все три.');}else {if(questNear.startsWith('seal:'))setSealTarget(questNear.slice(5));setQuestDialog(questNear==='bridge'?'bridge':questNear.startsWith('seal:')?'seal':questNear==='girl'?'girl':'source');}}}>{questNear.startsWith('ice:')?'Забрать осколок':questNear.startsWith('bridge:find:')?'Забрать камень':questNear==='bridge'?'Осмотреть переправу':questNear.startsWith('seal:')?'Осмотреть печать':questNear.startsWith('find:')?'Извлечь изо льда':questNear==='girl'?'Поговорить':quest.restored?'Осмотреть источник':'Прикоснуться к печати'}</button></div>}
    {!sealNear&&nearTrial&&!questNear&&!crystalNear&&!amuletNear&&!modalActive&&<div className="nifl-near nifl-quest-near" style={{background:'#132231ee',zIndex:6}}>
      <b>{nearTrial==='livingWater'?'💧 Колодец живой воды':<>{liberation.has(nearTrial)?'✓ ':''}{trialById(nearTrial)?.name}</>}</b>
      <button onClick={()=>{clearInput();enterTrial(nearTrial);}}>{nearTrial==='livingWater'?'Живая вода':liberation.has(nearTrial)?nearTrial==='threeNornsWell'?'Осмотреть колодец норн':COMBAT_TRIALS.has(nearTrial as any)&&nearTrial!=='vampire'?'Повторное испытание':'Освобождено':'Задание хранителей'}</button>
    </div>}
    {!modalActive&&<button aria-label="Журнал пройденных и оставшихся заданий" style={{position:'absolute',top:72,left:12,padding:'5px 9px',fontSize:11,zIndex:5,color:'#f4e3b7',background:'#152c3bdd',border:'1px solid #bda16b',borderRadius:7}} onClick={()=>{clearInput();setJournalOpen(true);}}>📜 {liberation.count}/{liberation.total} · Задания · 🔒 {sealsOpened}/{NIFLHEIM_SEALS.length}</button>}

    {quest.started&&!modalActive&&!quest.restored&&<div className="nifl-quest-progress">{quest.restored?'Хвергельмир восстановлен':quest.ready?'Печать: '+quest.step+'/3':'Осколки памяти: '+quest.found.length+'/3'}</div>}
    {questDialog&&<div className="nifl-overlay"><section className="nifl-panel nifl-quest-panel" role="dialog" aria-modal="true" aria-label={questDialog==='tower'?'Печать башни Нидхёгга':questDialog==='bridge'?'Восстановление переправы':questDialog==='seal'?'Печати пересохшего русла':questDialog==='girl'?'Три осколка памяти':'Печать Хвергельмира'}><button className="nifl-close" onClick={()=>setQuestDialog(null)}>Закрыть</button><h3>{questDialog==='tower'?'Печать башни Нидхёгга':questDialog==='bridge'?'Восстановление переправы':questDialog==='seal'?'Печати пересохшего русла':questDialog==='girl'?'Три осколка памяти':'Хвергельмир'}</h3>
      {questDialog==='tower'?<><p>Серебряная дверь скована печатью древнего дракона. Сначала освободи три печати пересохшего русла и верни память Хвергельмиру.</p>
        <p>Печати: {dragon.drySeals?'3/3':'сняты не все'} · Хвергельмир: {dragon.memoryRestored?'восстановлен':'ещё скован'}</p>
        {dragon.sealReady&&!dragon.unsealed?<button onClick={()=>{emitDragon('tower:unseal');setQuestDialog(null);setStatus('Печать башни растворилась! Теперь дверь откроется.');}}>ᛉ Снять печать башни</button>:<p>{dragon.unsealed?'Печать уже снята. Теперь можно открыть дверь.':'Вернись к башне после выполнения загадок.'}</p>}</>:questDialog==='bridge'?<>{quest.bridgeRestored?<p>Последний пролёт восстановлен. Теперь мост соединяет оба берега.</p>:<><p>Найди три камня опоры на берегах озера и вернись к переправе. Они помогут восстановить утраченный пролёт.</p><ul>{BRIDGE_PARTS.map(p=><li key={p.id}>{quest.bridgeParts.includes(p.id)?'✓':'○'} {p.name}</li>)}</ul>{!quest.bridgeStarted?<button onClick={()=>emitMemory('bridge:start')}>Принять задание</button>:quest.bridgeParts.length===3?<button onClick={()=>{emitMemory('bridge:repair');setQuestDialog(null);setStatus('Последний пролёт восстанавливается…');}}>Восстановить мост</button>:<p>Собрано: {quest.bridgeParts.length}/3. Ищи светлые камни у берегов озера.</p>}</>}</>:questDialog==='seal'?<><p>Три печати удерживают пересохшее русло. Прочитай смысл знака, чтобы снять его. Иса — лёд, Наутиз — скованность, Хагалаз — разрушение.</p><p>Что удерживает этот камень?</p>{DRY_SEALS.filter(r=>r.id===sealTarget).map(r=><button key={r.id} onClick={()=>{if(sealTarget===r.id){emitMemory(('seal:'+r.id) as MemoryEvent);setQuestDialog(null);setStatus(quest.seals.length===2?'Все три печати сняты. Русло свободно, но вода вернётся только после победы над драконом.':'Печать растворяется. Камень больше не удерживает русло.');}else setQuestMessage('Знак не отозвался. Попробуй прочитать его ещё раз.');}}>{r.meaning}</button>)}{questMessage&&<p role="status">{questMessage}</p>}<p>Снято печатей: {quest.seals.length}/3. Вода вернётся после победы над драконом.</p></>:questDialog==='girl'?<><button onClick={()=>{setQuestDialog(null);setAmuletDialog(true);}}>🧿 Амулет хранителей · {amulet.restored?'восстановлен':amulet.collected.length+'/6'}</button><button onClick={()=>{setQuestDialog(null);setCrystalDialog(true);}}>💎 Кристалл первозданной воды · {crystal.collected.length}/3</button>{quest.restored?<p>«Источник вновь свободен. Но корни ещё помнят боль. Найди Нидхёгга под разрушенной башней — твой путь продолжается».</p>:quest.ready?<p>«Пусть сначала вернётся память — Ансуз ᚨ. Затем потечёт вода — Лагуз ᛚ. И вслед за ней пробудится жизнь — Беркана ᛒ. Повтори этот порядок у Хвергельмира».</p>:<><p>«Воды Нифльхейма помнят то, что забыли даже боги. Найди три утраченные вещи, и река откроет тебе свою тайну».</p><ul>{MEMORY_FINDS.map(f=><li key={f.id}>{quest.found.some(g=>g.id===f.id)?'✓':'○'} {f.name}</li>)}</ul><p>Ищи в замёрзшем западном русле. Найденные вещи хранятся в задании.</p>{quest.found.length===3?<button onClick={()=>emitMemory('handover')}>Показать три осколка</button>:!quest.started?<button onClick={()=>emitMemory('start')}>Принять задание</button>:<p>Найдено: {quest.found.length}/3. Я буду ждать у чаши.</p>}</>}</>:quest.restored?<><p>Багровый лёд рассыпался. В каменной чаше вновь светится голубая вода.</p><p>Награда получена: {MEMORY_REWARD} Капель бессмертия и эликсир северного мха.</p><p>Из глубины доносится шёпот: «Вода вспомнила путь… А ты вспомнишь, кто тревожит корни?»</p></>:!quest.ready?<p>Печать не отвечает. {quest.found.length===3?'Покажи три осколка девушке у чаши.':'Сначала найди девушку у чаши и собери три осколка памяти в замёрзшем русле.'}</p>:<><p>Активируй три знака в порядке, который назвала девушка. Память → вода → жизнь.</p><p>Активировано: {quest.step}/3</p><div className="nifl-rune-choices">{[SOURCE_RUNES[1],SOURCE_RUNES[2],SOURCE_RUNES[0]].map(r=><button key={r.id} onClick={()=>{const correct=r.id===SOURCE_RUNES[quest.step].id;emitMemory(('rune:'+r.id) as MemoryEvent);setQuestMessage(correct?'Знак отозвался голубым светом.':'Порядок нарушен. Печать погасила знаки — начни снова.');if(correct&&quest.step===2){setQuestDialog(null);setStatus('Хвергельмир пробуждается! +60 Капель бессмертия и эликсир северного мха.');}}}><span>{r.symbol}</span>{r.name}</button>)}</div>{questMessage&&<p role="status">{questMessage}</p>}</>}
    </section></div>}
    {!sealNear&&nearest&&!questNear&&!nearTrial&&!crystalNear&&!amuletNear&&!modalActive&&<div className="nifl-near"><b>{nearest.name}</b><button onClick={()=>{clearInput();const gate=sealById(nearest.id);if(gate&&!sealOpened(questDone,nearest.id)){setStatus('🔒 '+gate.name+' закрывает проход. Сначала победи стража и сними печать.');return;}if(nearest.id==='nidhogg'){if(!dragon.unsealed){setQuestDialog('tower');}else if(!doorOpening&&towerEntrance.current?.canEnter(position.current.x,position.current.z)){setDoorOpening(true);towerEntrance.current.open();setStatus('Дверь башни открывается…');}}else if(nearest.id==='forge'){remember.current({...position.current});onForge({...position.current});}else if(nearest.id==='livingWater')setTrialOpen('livingWater');else setSelected(nearest.id);}}>{sealById(nearest.id)&&!sealOpened(questDone,nearest.id)?'🔒 Закрыто печатью':nearest.id==='nidhogg'?(doorOpening?'Дверь открывается…':'Открыть дверь башни'):nearest.id==='forge'?'Войти в кузницу':nearest.id==='nineWorldStranger'?'Поговорить':'Осмотреть'}</button></div>}
    {trialOpen&&trialInfo&&<div className="nifl-overlay" style={{zIndex:20}}><section className="nifl-panel" role="dialog" aria-modal="true" aria-label={trialOpen==='livingWater'?'Колодец живой воды':trialInfo.title} style={{maxWidth:430}}>
      <button className="nifl-close" onClick={()=>{setTrialOpen('');setTrialMessage('');}}>Закрыть</button>
      <h3>{trialOpen==='livingWater'?'Колодец живой воды':trialInfo.title+' — '+trialInfo.name}</h3><p>{trialOpen==='livingWater'?'Живая вода хранит силу для последнего боя. Сними печать и подготовь легендарный меч.':trialInfo.intro}</p>
      {trialOpen==='livingWater'||liberation.has(trialOpen)?<>{trialOpen!=='livingWater'&&<p>✅ {trialInfo.outcome}</p>}{trialOpen==='livingWater'&&<div className="nifl-task-actions"><h3>💧 Живая вода</h3><p>Удваивает силу оружия, здоровье от брони и шлема, защиту и силу щита до победы над Нидхёггом. Испить можно только один раз, после ковки легендарного меча.</p>{livingWaterUsed(questDone)?<p>{livingWaterActive(questDone)?'✨ Усиление ×2 действует до победы над драконом.':'Живая вода уже использована. Нидхёгг повержен.'}</p>:<><button disabled={!sealOpened(questDone,'livingWater')||!liberation.has('threeNornsWell')||!dragon.forged||dragon.defeated} onClick={()=>{emitDragon('livingWater');setStatus('💧 Живая вода: оружие и защита усилены вдвое до победы над Нидхёггом!');}}>💧 Испить живой воды · сила и защита ×2</button>{!liberation.has('threeNornsWell')&&<p>Сначала пройди испытание колодца трёх норн.</p>}{!sealOpened(questDone,'livingWater')&&<p>Сначала сними последнюю печать у колодца живой воды.</p>}{!dragon.forged&&<p>Сначала выкуй «Погибель Нидхёгга» в кузнице хранителей.</p>}</>}</div>}</>:trialInfo.kind==='existing'?<div className="nifl-task-actions">
      {trialOpen==='frozenRiver'&&<><p>Найдено: {quest.found.length}/3. Каждый найденный артефакт сохраняется навсегда.</p>
        {MEMORY_FINDS.map(f=><p key={f.id}>{quest.found.some(p=>p.id===f.id)?'✓':'○'} {f.name}</p>)}
        <p>{quest.found.length===3?'Все предметы получены! Теперь можно активировать руны источника прямо в задании «Хвергельмир».':'Ищи светящиеся предметы у замёрзшего русла. Задание не требует повторно брать уже найденное.'}</p>
        {quest.found.length===3&&<button onClick={()=>setTrialOpen('hvergelmir')}>ᛚ Перейти к рунам Хвергельмира</button>}</>}
      {trialOpen==='crossing'&&<><p>Камни опоры: {quest.bridgeParts.length}/3.</p>
        {BRIDGE_PARTS.map(p=><p key={p.id}>{quest.bridgeParts.includes(p.id)?'✓':'○'} {p.name}</p>)}
        {!quest.bridgeStarted?<button onClick={()=>{emitMemory('bridge:start');setTrialMessage('Задание принято. Теперь можно собирать камни на берегах озера.');}}>Принять восстановление моста</button>:
        quest.bridgeParts.length===3?<button onClick={()=>{emitMemory('bridge:repair');setTrialOpen('');setStatus('Мост восстановлен. Проход открыт!');}}>🔨 Восстановить переправу</button>:
        <p>Осмотри берега возле разрушенного моста и собери оставшиеся камни. Зал забытых имён можно проходить независимо от переправы — задание доступно на карте.</p>}</>}
      {trialOpen==='lookout'&&<><p>Печати пересохшего русла: {quest.seals.length}/3. Нажми на ещё не снятую руну, чтобы подтвердить её освобождение.</p>
        {DRY_SEALS.map(r=><button key={r.id} disabled={quest.seals.some(p=>p.id===r.id)} style={{display:'block',width:'100%',marginBottom:7}} onClick={()=>{emitMemory(('seal:'+r.id) as MemoryEvent);setTrialMessage('Печать '+r.name+' снята и сохранена.');}}>
          {quest.seals.some(p=>p.id===r.id)?'✓':'ᚷ'} {r.symbol} {r.name} — {r.meaning} {quest.seals.some(p=>p.id===r.id)?'· освобождена':'· снять печать'}</button>)}
        <p>После 3/3 печать башни станет доступна, когда также пробудится Хвергельмир.</p></>}
      {trialOpen==='hvergelmir'&&<><p>Артефакты: {quest.found.length}/3 · активировано рун: {quest.step}/3.</p>
        {!quest.ready?<p>Сначала найди три предмета в замёрзшем русле. Уже найденные не нужно искать снова. {quest.found.length}/3.</p>:
        <><p>Активируй знаки по порядку: ᚨ Ансуз → ᛚ Лагуз → ᛒ Беркана.</p>
          <div className="nifl-rune-choices">{[SOURCE_RUNES[1],SOURCE_RUNES[2],SOURCE_RUNES[0]].map(r=><button key={r.id} onClick={()=>{
            const correct=r.id===SOURCE_RUNES[quest.step].id;
            emitMemory(('rune:'+r.id) as MemoryEvent);
            setTrialMessage(correct?'Руна '+r.name+' пробудилась!': 'Неверный порядок, попробуй снова: Ансуз → Лагуз → Беркана.');
            if(correct&&quest.step===2){setTrialOpen('');setStatus('Хвергельмир освобождён! +60 Капель бессмертия.');}
          }}><span>{r.symbol}</span>{r.name}</button>)}</div></>}
        <p>Руны выбираются здесь, в задании, — искать отдельное место активации больше не требуется.</p></>}
    </div>:trialInfo.kind==='vampire'?<>{!liberation.vampireUnbound?
        <><p>Морвейн: «Моя тюрьма — вода. Вспомни течение, память и защиту. Выбери знаки в этом порядке».</p>
        <p>ᛚ Лагуз → ᚨ Ансуз → ᛉ Альгиз · правильно: {liberation.vampireRunes.length}/3</p>
        {(['ansuz','algiz','laguz'] as const).map(id=><button key={id} onClick={()=>{
          const expected=(['laguz','ansuz','algiz'] as const)[liberation.vampireRunes.length];
          onLiberationEvent(('vampire:rune:'+id) as LiberationEvent);
          setTrialMessage(id===expected?'Знак отозвался.':'Символы погасли. Начни последовательность заново.');
        }}>{id==='laguz'?'ᛚ Лагуз':id==='ansuz'?'ᚨ Ансуз':'ᛉ Альгиз'}</button>)}
        {liberation.vampireRunes.length===3&&<button onClick={()=>{onLiberationEvent('vampire:reveal');setTrialMessage('Морвейн свободен от водоворота, но тёмная магия заставляет его атаковать!');}}>🌊 Снять водную печать</button>}</>:<><p>Морвейн потерял контроль. Победи его, чтобы снять последнее заклятие, но сохрани ему жизнь.</p><button onClick={()=>startTrialBattle('vampire')}>⚔️ Усмирить Морвейна</button></>}</>:('options' in trialInfo)?<div>{trialInfo.options.map((answer,index)=><button key={index} onClick={()=>{
        if(index!==trialInfo.answer){setTrialMessage('Неверный ответ. Прислушайся к подсказке и попробуй снова.');return;}
        if(trialInfo.kind==='riddleBattle')startTrialBattle(trialInfo.id);
        else{onLiberationEvent(('riddle:'+trialInfo.id) as LiberationEvent);setLibStatus('✨ '+trialInfo.outcome);setTrialOpen('');setStatus('Задание завершено. Награда отправлена в общий инвентарь.');}
      }} style={{display:'block',width:'100%',marginBottom:6}}>{answer}</button>)}</div>:<button onClick={()=>startTrialBattle(trialInfo.id)}>⚔️ Начать испытание</button>}
      {trialMessage&&<p role="status">{trialMessage}</p>}
    </section></div>}
    {battle?.id.startsWith('sealGuardian:')&&<div className="nifl-seal-battle" role="group" aria-label="Бой со стражником">
      <div className="nifl-seal-health">
        <div className="nifl-seal-fighter"><b>Валькирия</b><span>♥ {battle.heroHp}/{inventory.maxHp}</span><div className="nifl-seal-meter"><i style={{width:Math.max(0,100*battle.heroHp/inventory.maxHp)+'%',background:'#63d58f'}}/></div></div>
        <div className="nifl-seal-fighter"><b>Страж печати · {sealById(battle.id.slice('sealGuardian:'.length))?.order}/{NIFLHEIM_SEALS.length}</b><span>♥ {battle.hp}/{battle.maxHp}</span><div className="nifl-seal-meter"><i style={{width:Math.max(0,100*battle.hp/battle.maxHp)+'%',background:'#d7717e'}}/></div></div>
      </div>
      <div className="nifl-seal-controls">
        <div className="nifl-seal-energy">{Array.from({length:5},(_,i)=><span key={i} style={{background:i<battle.energy?'#35cf94':'#354b56'}}/>)}<small>{battle.log}</small></div>
        <div className="nifl-seal-actions">
          <button disabled={battle.energy<1} onClick={()=>battleAction('hit')}><img src={`${BASE}img/models/ui_attack.png`} alt=""/><b>Удар оружием</b></button>
          <button disabled={!shieldEquipped} onClick={()=>battleAction('shield')}><img src={`${BASE}img/models/ui_shield.png`} alt=""/><b>Поднять щит</b></button>
          <button disabled={!inventory.equippedRune||battle.runeCharge<1} onClick={()=>battleAction('rune')}><span className="nifl-seal-rune">ᛉ</span><b>Руна</b></button>
          <button onClick={healInBattle}><img src={`${BASE}img/models/ui_inventory.png`} alt=""/><b>Эликсир</b></button>
        </div>
        <button className="nifl-seal-retreat" onClick={()=>{onFieldHpChange(battle.heroHp);sealSummoned.current='';battleRef.current=null;setBattle(null);setStatus('Vicki отступила — бой можно повторить позже.');}}>Отступить</button>
      </div>
    </div>}
    {battle&&!battle.id.startsWith('sealGuardian:')&&<div className="nifl-overlay" style={{zIndex:22,alignItems:"flex-end"}}><section className="nifl-panel" role="dialog" aria-modal="true" aria-label="Бой за освобождение" style={{maxWidth:440,marginTop:"auto",marginBottom:12}}>
      <h3>⚔️ {trialById(battle.id)?.name}</h3>
      <p>❤️ Vicki: {battle.heroHp}/{inventory.maxHp} · ⚔️ Противник: {battle.hp}/{battle.maxHp}</p>
      <p>{battle.log}</p><p>Энергия: {battle.energy}/5 · Руна: {battle.runeCharge}/2</p>
      <button disabled={battle.energy<1} onClick={()=>battleAction('hit')}>⚔️ Ударить</button>
      <button disabled={!shieldEquipped} onClick={()=>battleAction('shield')}>🛡️ Щит</button>
      <button disabled={!inventory.equippedRune||battle.runeCharge<1} onClick={()=>battleAction('rune')}>ᛉ Руна</button>
      <button onClick={healInBattle}>🧪 Эликсир</button>
      <button onClick={()=>{onFieldHpChange(battle.heroHp);setBattle(null);setStatus('Vicki отступила — бой можно повторить позже.');}}>Отступить</button>
    </section></div>}
    {journalOpen&&<div className="nifl-overlay"><section className="nifl-panel" role="dialog" aria-modal="true" aria-label="Журнал испытаний Нифльхейма">
      <button className="nifl-close" onClick={()=>setJournalOpen(false)}>Закрыть</button>
      <h3>📜 Задания Нифльхейма: {liberation.count}/{liberation.total}</h3>
      <h3>Печати: {sealsOpened}/{NIFLHEIM_SEALS.length}</h3>{NIFLHEIM_SEALS.map(def=><p key={def.id}>{sealOpened(questDone,def.id)?'✓':'○'} {def.order}. {def.location}</p>)}<h3>Главное задание · Освободить Нифльхейм</h3><p>{amulet.restored?'✓':'○'} Собрать шесть частей и восстановить Амулет хранителей: {amulet.collected.length}/6.</p>{AMULET_PARTS.map(p=><p key={p.id}>{amulet.collected.includes(p.id)?'✓':'○'} {p.place}</p>)}<p>{dragon.forged?'✓':'○'} Выковать «Погибель Нидхёгга».</p><p>{liberation.vampireFreed?'✓':'○'} Получить сердце Морвейна. Активировать его вручную перед финальным боем, когда амулет и меч готовы и все локации освобождены.</p><p>{dragon.defeated?'✓ Нидхёгг повержен. Вода возвращает жизнь миру.':'○ Победить Нидхёгга. Без восстановленного амулета победа невозможна.'}</p><p>Амулет поглощает 30% силы огня, активное сердце ослабляет его ещё на 25%. Поднятый щит блокирует половину оставшегося удара.</p>
      <p>💎 {CRYSTAL_NAME}: {crystal.gateOpen?'врата открыты':crystal.assembled?'соединён':crystal.collected.length+'/3'}. Найди осколки на двух алтарях и у воительницы в багровой пещере; после победы над драконом вернись к ней.</p><div className="nifl-task-book">{LIBERATION_TRIALS.map((t,i)=><div key={t.id} className={'nifl-task-book-row'+(liberation.has(t.id)?' cleared':'')}>
        <b>{liberation.has(t.id)?'✅ Выполнено':'◻️ Осталось'} · {i+1}. {t.title}</b><small>{t.name}</small>
      </div>)}</div>
    </section></div>}
    {mapOpen&&<div className="nifl-overlay"><section className="nifl-panel" role="dialog" aria-modal="true" aria-label="Карта Нифльхейма"><button className="nifl-close" onClick={()=>setMapOpen(false)}>Закрыть</button><h3>Карта Нифльхейма</h3><p className="nifl-map-legend">❄️ Освобождение: {liberation.count}/{liberation.total}. {liberation.finished?'Нидхёгг утратил защиту мира!':'Заверши задания, чтобы ослабить Нидхёгга.'}</p><p className="nifl-map-legend">Три русла: живое, замёрзшее и пересохшее · два озера · источник Хвергельмир. Карта служит только для ориентирования. Все задания выполняются непосредственно в Нифльхейме.</p>
      <svg viewBox="0 0 130 160" aria-label="Реки и локации Нифльхейма">
        {NIFL_ROUTES.map((route,i)=>{const a=NIFL_LOCATIONS.find(l=>l.id===route[0])!,b=NIFL_LOCATIONS.find(l=>l.id===route[1])!;return <line key={i} x1={a.x/NIFL_SCALE+65} y1={a.z/NIFL_SCALE+80} x2={b.x/NIFL_SCALE+65} y2={b.z/NIFL_SCALE+80} stroke="#8a9eab" strokeWidth="1" strokeDasharray="2 2"/>;})}
        {NIFL_RIVERS.map((river,i)=><polyline key={i} points={river.map(p=>`${p.x/NIFL_SCALE+65},${p.z/NIFL_SCALE+80}`).join(' ')} fill="none" stroke={i===2?"#82766b":"#78b2cf"} strokeWidth={i===0?4:3} strokeDasharray={i===2?"2 1":undefined}/>)}
        {NIFL_LAKES.map((l,i)=><ellipse key={i} cx={l.x/NIFL_SCALE+65} cy={l.z/NIFL_SCALE+80} rx={l.rx/NIFL_SCALE} ry={l.rz/NIFL_SCALE} fill="#9ecbdf"/>)}<ellipse cx="65" cy="31" rx="8" ry="7" fill="#347c9d"/>
        {NIFL_LOCATIONS.map((l,i)=><g key={l.id} aria-label={l.name}><title>{l.name}</title><circle cx={l.x/NIFL_SCALE+65} cy={l.z/NIFL_SCALE+80} r="5.5" fill="#fff" stroke="#526f82" strokeWidth=".6"/><text x={l.x/NIFL_SCALE+65} y={l.z/NIFL_SCALE+81.5} textAnchor="middle" fontSize="4" fill="#203e52">{i+1}</text></g>)}
        <circle cx={mapPoint(position.current.x,position.current.z).x} cy={mapPoint(position.current.x,position.current.z).y} r="2.5" fill="#d29d30" stroke="#fff" strokeWidth=".8"/>
      </svg>
      <h4 style={{margin:'14px 0 6px'}}>🌑 Защитники Нифльхейма</h4>
      <p className="nifl-map-legend">15 участков появления Теней. Новая волна — каждые 15 минут; одновременно атакуют не более трёх, чтобы не перегружать телефон. После победы Тени исчезают до следующей волны. Орки охраняют важные проходы, тролли — магические рубежи.</p>
      <p className="nifl-map-legend">Зелёных гоблинов: {NIFLHEIM_EXTRA_GUARDS.filter(site=>site.role==='troll').length} по всему миру · орков: {NIFLHEIM_EXTRA_GUARDS.filter(site=>site.role==='orc').length+5} (включая сюжетных). Тени: {NIFLHEIM_SHADOW_SITES.length} точек.</p>
      <h4 style={{margin:'14px 0 6px'}}>🧭 Локации на карте</h4>
      <div className="nifl-map-list">{NIFL_LOCATIONS.map((l,i)=><div key={l.id} style={{padding:'7px 9px',background:'#edf2f6',border:'1px solid #d1dce3',borderRadius:7,fontSize:12}}>{l.id==='threshold'?'🚪':l.id==='nineWorldStranger'?'💬':l.id==='forge'?(dragon.forged?'✓':'⚒️'):l.id==='nidhogg'?(dragon.defeated?'✓':'🐉'):liberation.has(l.id)?'✓':'○'} {i+1}. {l.name}</div>)}</div><p className="nifl-map-legend">🧛 Морвейн: {liberation.vampireFreed?'✓ освобождён':'○ водоворот у Приюта хранителей'}.</p><p className="nifl-map-legend">Золотая точка — Vicki. {dragon.defeated?'Нидхёгг повержен: вода вновь течёт по всем трём рекам.':'Западное русло покрыто льдом, восточная река течёт, северо-западное русло пересохло. Вода оживит все три реки после победы над Нидхёггом.'}</p><p className="nifl-map-legend">Анимация воды: <a href="https://opengameart.org/content/animated-water-texture-128px" target="_blank" rel="noopener noreferrer">YCbCr — Animated water texture</a>, CC0. Кадры собраны в WebP-атлас.</p><p className="nifl-map-legend">Входные врата: <a href="https://sketchfab.com/3d-models/stone-arch-565793eb6528447c97223cfaf278d3f6" target="_blank" rel="noopener noreferrer">Stone Arch — Teranox</a>. Лицензия: <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Изменения: сжатие текстур, уменьшение высоты и размещение.</p>
      <p className="nifl-map-legend">Факелы входных врат: <a href="https://sketchfab.com/3d-models/torch-a3b8085436d14977a69f965859d96575" target="_blank" rel="noopener noreferrer">Torch — DJMaesen</a>, CC BY 4.0. Текстуры сжаты в WebP; геометрия сохранена, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Стены зала: <a href="https://sketchfab.com/3d-models/stone-bricks-beige-wall-set-8df474d0b8df453c87255a1758dde6e2" target="_blank" rel="noopener noreferrer">Stone bricks beige Wall-set — DADedits</a>, CC BY 4.0. Выделен прямой модуль, уменьшены текстуры, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Плиты и стол: <a href="https://sketchfab.com/3d-models/cave-rocks-4101c07c6a754f85962c6b516af4713a" target="_blank" rel="noopener noreferrer">Cave Rocks — Splanyic</a>, CC BY 4.0. Выделены каменные модули, уменьшены текстуры; из модулей собраны плиты и стол.</p>
      <p className="nifl-map-legend">Арка зала: <a href="https://sketchfab.com/3d-models/arch-1-38b5572e58fb40fca8c0d38f8e1192c5" target="_blank" rel="noopener noreferrer">Arch 1 — chuckcg</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, убраны тангенты; геометрия сохранена, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Зал: <a href="https://sketchfab.com/3d-models/maze-rock-assets-61c64e5c177144bf89a3f4bb5214235a" target="_blank" rel="noopener noreferrer">MAZE Rock Assets — Jeremy_W</a>, CC BY 4.0. Модули стены, пола и потолка извлечены, облегчены и собраны в комнату.</p>
      <p className="nifl-map-legend">Ледяная граница: <a href="https://sketchfab.com/3d-models/iceland-scene-for-canimatic-36105320e882416e870c5f6ee8db2e6b" target="_blank" rel="noopener noreferrer">iceland scene for canimatic — m42345081</a>, CC BY 4.0. Извлечён один массив, упрощена геометрия и уменьшена текстура.</p>
      <p className="nifl-map-legend">Пещера: <a href="https://sketchfab.com/3d-models/cave-lp-9k-free-download-819687653df14a4a9acb267212093d1a" target="_blank" rel="noopener noreferrer">Cave LP — Fred Drabble</a>, CC BY 4.0. Уменьшены текстуры, добавлены снег и иней, изменены масштаб, размещение и форма входа.</p>
      <p className="nifl-map-legend">Сосульки: <a href="https://sketchfab.com/3d-models/icicle-01-2dc75ae22f1c4d11abbfd32819312a12" target="_blank" rel="noopener noreferrer">Icicle 01 — Elin</a>, CC BY 4.0. Текстуры уменьшены до 256 пикселей, изменены масштаб, оттенок и размещение; сверху добавлен снег.</p>
      <p className="nifl-map-legend">Ландшафт: <a href="https://sketchfab.com/3d-models/terrain-62dc7db392f34dacb4c07bfcb4faf14e" target="_blank" rel="noopener noreferrer">Terrain — FreeModel (DiFed)</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены детализация и текстуры, изменены масштаб, снежный материал и размещение; выровнен пол пещеры.</p>
      <p className="nifl-map-legend">Лёд Хвергельмира: <a href="https://sketchfab.com/3d-models/ice-cluster-free-4d2271f8bf7f400e9a5c8f10812a32de" target="_blank" rel="noopener noreferrer">Ice Cluster (free) — chrismartin1337</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, изменены масштаб, материал и размещение; добавлены багровый цвет и чёрные потоки.</p>
      <p className="nifl-map-legend">Переправа через озеро: <a href="https://sketchfab.com/3d-models/scandinavian-bridge-ed021c21c21d4e44a4de8903042f3da8" target="_blank" rel="noopener noreferrer">Scandinavian bridge — Ivan Norman (vanidza)</a>, CC BY 4.0. Уменьшены текстуры, убраны дополнительные карты; сохранена геометрия, изменены масштаб и размещение, оставлен разрыв до берега.</p>
      <p className="nifl-map-legend">Белые мосты: <a href="https://sketchfab.com/3d-models/bridge-venetian-0b869295f06d425488751db900de8141" target="_blank" rel="noopener noreferrer">Bridge Venetian — Kevin.Piemontois</a>, CC BY 4.0. Упрощена геометрия, текстура уменьшена и переведена в бело-серую гамму; изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Мост кузницы: <a href="https://sketchfab.com/3d-models/medieval-bridge-565a1cd4930d4560947b0e539cf6fed5" target="_blank" rel="noopener noreferrer">Medieval bridge — Andrei CG (aagames)</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Сжаты текстуры и данные модели; сохранена геометрия, изменены масштаб и размещение, высота настила согласована с берегами.</p>
      <p className="nifl-map-legend">Ледяные образования у корней: <a href="https://sketchfab.com/3d-models/ice-castles-ny-ice-formations-293eff95dafc409f8d203374e0ff45be" target="_blank" rel="noopener noreferrer">Ice Castles NY — Ice Formations — Katie Alois (@kalois)</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Модель разделена на два файла, уменьшены детализация и текстуры; стены увеличены вокруг корней, вырезан проход для Vicki.</p>
      <p className="nifl-map-legend">Ледяные плиты и стены: <a href="https://sketchfab.com/3d-models/ice-glacier-933b3c2ee51c48bb958d06655d1ff8bd" target="_blank" rel="noopener noreferrer">Ice Glacier — Svenja (gwenchana3)</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры; одна ледяная плита выделена в отдельный файл и увеличена для свода пещеры.</p>
      <p className="nifl-map-legend">Сплетение корней: оригинальная процедурная модель корней, коры, снега и льда, созданная для Yggdrasil Runes по концепту локации.</p>
      <p className="nifl-map-legend">Корни над логовом дракона: <a href="https://sketchfab.com/3d-models/whispering-tree-roots-3d-model-free-73cf6e7b28854a02bb3dd7881ff7a6e7" target="_blank" rel="noopener noreferrer">Whispering tree Roots 3d model free — iGauravRajput</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Упрощена геометрия, уменьшены текстуры, удалены дубли данных; корни перевёрнуты, вытянуты и размещены с потолка вокруг логова.</p>
      <p className="nifl-map-legend">Рельеф подземелья: <a href="https://sketchfab.com/3d-models/the-hills-6d7faf10658e44279da7356cbe749d56" target="_blank" rel="noopener noreferrer">The Hills</a> — <a href="https://sketchfab.com/mhart" target="_blank" rel="noopener noreferrer">mhart</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, изменены масштаб, высота и оттенок; выровнены участки у двери, под драконом и пещерой.</p>
      <p className="nifl-map-legend">Камни сухого русла: <a href="https://sketchfab.com/3d-models/lowpoly-rocks-3-c985042a860a40859c4d5ac94f1b3479" target="_blank" rel="noopener noreferrer">Lowpoly Rocks - 3 — Loïc Norgeot</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Выбраны три камня, уменьшены текстуры, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Амулет хранителей: <a href="https://sketchfab.com/3d-models/magical-amulet-enchanted-fantasy-accessory-a8d6d7ff4fbb41849513d0f6b443ffc8" target="_blank" rel="noopener noreferrer">Magical Amulet — NicholasDeStefano</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Текстуры уменьшены, шнур снят, амулет разделён на шесть частей; изменены масштаб и размещение.</p><p className="nifl-map-legend">Кристалл первозданной воды: <a href="https://sketchfab.com/3d-models/diamond-free-67ae36e69cad4da7b3dfcddd14fc67c3" target="_blank" rel="noopener noreferrer">Diamond — ucukcontorian</a>, CC BY 4.0. Разделён на три осколка, изменены материал и размещение.</p><p className="nifl-map-legend">Чаши магов: <a href="https://sketchfab.com/3d-models/large-chalice-8b1394bc7bbe47398bff455b100f9031" target="_blank" rel="noopener noreferrer">Large chalice — Prywid</a>. Кристаллы в чашах: <a href="https://sketchfab.com/3d-models/magic-crystals-f20b3376ef9a4dff8ad27f1402087c52" target="_blank" rel="noopener noreferrer">Magic crystals — Enn Shtyka</a>. Обе модели: <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Изменены масштаб и размещение, текстуры кристаллов уменьшены. Статуи магов: <a href="https://sketchfab.com/3d-models/pbr-stylized-statue-mage-wizard-f0293fab679e44d1bfa38798e06db307" target="_blank" rel="noopener noreferrer">PBR Stylized Statue — Ignas</a>, CC BY 4.0. Уменьшены текстуры, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Волшебница у багровой чаши: <a href="https://sketchfab.com/3d-models/dark-fantasy-sorceress-crystal-staff-a307ea3800d748c487d26235bb43ecc0" target="_blank" rel="noopener noreferrer">Dark Fantasy Sorceress, Crystal Staff — Pigcraft</a>, CC BY 4.0. Оптимизирована геометрия, сжаты текстуры и данные; изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Парящий шар: <a href="https://sketchfab.com/3d-models/magic-orb-cdd88b96333c491ebc17043088aae633" target="_blank" rel="noopener noreferrer">Magic Orb — reddification</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Оставлен один анимированный шар с металлическим креплением, уменьшены текстуры и масштаб.</p>
      <p className="nifl-map-legend">Кристалл на столе: <a href="https://sketchfab.com/3d-models/crystals-from-space-557ff4a9f4b74ff1a367d7cc7fc77e24" target="_blank" rel="noopener noreferrer">Crystals From Space — Grenade_Apple</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Сохранена вся группа кристаллов, уменьшены текстуры, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Странница девяти миров: <a href="https://sketchfab.com/3d-models/hit2-female-swordsman-bfc0c40414ce4e37bea0567ce4a36792" target="_blank" rel="noopener noreferrer">HIT2 Female swordsman — enzohao</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры; сохранены скелет и геометрия. В Нифльхейме встречается возле колодца норн.</p>
      <p className="nifl-map-legend">Охранники-орки (в том числе заменившие геометрических стражей): <a href="https://sketchfab.com/3d-models/low-poly-orc-62f1637181cb4f6aa38897f5b7ab5edf" target="_blank" rel="noopener noreferrer">Low-poly Orc — Riltariki</a>, CC BY 4.0. Оптимизирован GLB, сохранены кости и девять анимаций, материалы преобразованы в современный PBR и тонированы в холодные оттенки Нифльхейма.</p>
      <p className="nifl-map-legend">Пещерные тролли: <a href="https://sketchfab.com/3d-models/troll-bceb1cb47186457c8571a23e6aff1b8e" target="_blank" rel="noopener noreferrer">Troll — SJunior3d</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Текстуры уменьшены до 512 px, сокращены избыточные ключи; сохранены геометрия, скелет, оружие и восемь анимаций. Изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Тень забытых: <a href="https://sketchfab.com/3d-models/ancient-undead-egyptian-warrior-rigged-animated-250d1e5c12ae413884813bb25860ef9d" target="_blank" rel="noopener noreferrer">Ancient Undead Egyptian Warrior Rigged Animated — fabip</a>, CC BY 4.0. Текстура уменьшена, кости и анимация сохранены, затемнённый материал используется для призрачных нападений.</p>
      <p className="nifl-map-legend">Колодец трёх норн: та же оригинальная игровая модель <code>Midgard_Well_Three_Norns_V1_YUP.glb</code>, что и в Мидгарде. Для Нифльхейма увеличена высота, камень покрыт холодным оттенком, свечение заменено на ледяное голубое; колодец остаётся непроходимым.</p>
      <p className="nifl-map-legend">Водная спираль: <a href="https://sketchfab.com/3d-models/water-splash-spiral-282e1a5d84f5472281e72f35987775e7" target="_blank" rel="noopener noreferrer">Water Splash Spiral — Will VFX</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Упрощена геометрия, обновлён материал воды, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Незнакомец на озере: <a href="https://sketchfab.com/3d-models/elegant-vampire-lord-6a158cd2bf564c41b965259a6b7708ee" target="_blank" rel="noopener noreferrer">Elegant Vampire Lord — Galaxy Abundant</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Упрощена геометрия, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Камни приюта: <a href="https://sketchfab.com/3d-models/portal-3279b8d99fe244059c40a66e8aa39590" target="_blank" rel="noopener noreferrer">Portal — DJMaesen</a>. Лицензия: <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Изменения: уменьшены текстуры и размер, изменены масштаб и размещение; добавлены руны, убран центральный круг.</p>
      <p className="nifl-map-legend">Череп с пламенем: <a href="https://sketchfab.com/3d-models/flame-test-e87b4e7dfb3d4e1a8118a79baa0ac39d" target="_blank" rel="noopener noreferrer">FLAME TEST — UJWAL CHAUHAN</a>. Лицензия: <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Изменения: уменьшены текстуры и размер, изменены масштаб и размещение и упрощена геометрия; сохранена анимация.</p>
      <p className="nifl-map-legend">Колбы памяти: <a href="https://sketchfab.com/3d-models/crystal-capsule-8cb1de09d7fd4516ad46b4a525a30ac0" target="_blank" rel="noopener noreferrer">Crystal Capsule — Sirolalo</a>. Лицензия: <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Изменения: уменьшены текстуры и размер, изменены масштаб и размещение; упрощена геометрия, создано шесть экземпляров.</p>
      <p className="nifl-map-legend">Каменный стол в горе: <a href="https://sketchfab.com/3d-models/low-poly-stylized-stone-table-8357876dd2504c67840706b75241e56c" target="_blank" rel="noopener noreferrer">Low poly stylized stone table — mahrcheen</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Арка горы: <a href="https://sketchfab.com/3d-models/fantasy-stylized-arch-c1d8cf5d766f4d5fbe42033166ae03fc" target="_blank" rel="noopener noreferrer">Fantasy Stylized Arch — Sir Erdees</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Снежная гора: <a href="https://sketchfab.com/3d-models/snow-mountain-e84a8e5edb2040c591be36350e2536f5" target="_blank" rel="noopener noreferrer">Snow Mountain — hkp941111</a>, CC BY 4.0. Уменьшены текстуры, изменены масштаб и размещение; вырезан вход для пещеры.</p>
      <p className="nifl-map-legend">Пещера у озера: <a href="https://sketchfab.com/3d-models/carriere-orleans-1-de20639e980449078dc30d6b35b79603" target="_blank" rel="noopener noreferrer">Carrière Orléans 1 — Silv1</a>, CC BY 4.0. Упрощены геометрия и текстура; включены обе стороны стен, изменены масштаб, наклон и размещение.</p>
      <p className="nifl-map-legend">Дракон: <a href="https://sketchfab.com/3d-models/european-dragon-82f393a2e6c048ad80c171ce3b3a7b87" target="_blank" rel="noopener noreferrer">European Dragon — Nonexistent 101</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, геометрия, скелет и пять анимаций сохранены. Дракон находится только в подземном логове.</p>
      <p className="nifl-map-legend">Разрушенная башня: <a href="https://sketchfab.com/3d-models/collapesed-tower-984b012678be49a79c1509cdeeb53402" target="_blank" rel="noopener noreferrer">collapesed tower — portwindyroad</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшена текстура; изменены масштаб и размещение, расширен проход, добавлены двери и столкновения со стенами.</p>
      <p className="nifl-map-legend">Колодец: <a href="https://sketchfab.com/3d-models/good-ol-well-9eadcb31e4b445c8978e791fcce548fe" target="_blank" rel="noopener noreferrer">Good Ol' Well — mikelkel2</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, геометрия сохранена, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Лестница: <a href="https://sketchfab.com/3d-models/the-staircase-step-ladder-20e23588d08d4cae986dc1e208d1c969" target="_blank" rel="noopener noreferrer">Mehdi Shahsavana (@ahmagh2e)</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Убраны верхний пролёт и надписи; сохранены нижние ступени и площадка.</p>
      <p className="nifl-map-legend">Ледяной дом: <a href="https://sketchfab.com/3d-models/igloo-224f673917e6486eb08c496baf77ce84" target="_blank" rel="noopener noreferrer">Igloo — Vera4Art</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, убрана исходная площадка, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Печать Мёртвого узла: <a href="https://sketchfab.com/3d-models/magical-gyroscope-a3f110c0d2944a2dbff78709eb8f3984" target="_blank" rel="noopener noreferrer">Magical Gyroscope — reddification</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Удалена нижняя подставка, уменьшены текстуры; сохранены две анимации. Материалы изменены на тёмное серебро с багровым свечением.</p>
      <p className="nifl-map-legend">Страж первой печати: <a href="https://sketchfab.com/3d-models/scourger-rig-deb9b27965064f85a7f482599f5a69a8" target="_blank" rel="noopener noreferrer">Scourger Rig — DM-913</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Текстуры уменьшены до 512 px, скелет и четыре анимации сохранены. Установлен для предварительного осмотра; бой добавим отдельно.</p>
      <p className="nifl-map-legend">Великан: <a href="https://sketchfab.com/3d-models/lowpoly-giant-warrior-rigged-66588f8fd6f64212abe49c7c6cababa9" target="_blank" rel="noopener noreferrer">Lowpoly Giant Warrior (rigged) — luch.pok (lvintoniyak)</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Убраны крупные браслеты, осветлена кожа, уменьшены текстуры; изменены масштаб и размещение, добавлены поза сидя и подъём с камня.</p>
    </section></div>}
    {info&&!questDialog&&!trialOpen&&!battle&&!mapOpen&&!inventoryOpen&&<div className="nifl-overlay" style={{zIndex:11}}><section className="nifl-panel" role="dialog" aria-modal="true" aria-label={info.name}><h3>{info.name}</h3><p>{info.text}</p>{trialById(info.id)&&<p>❄️ Задание: {trialById(info.id)?.name} — {liberation.has(info.id)?'выполнено':'ещё не выполнено'}. Чтобы выполнить, подойди к локации.</p>}{info.id==='forge'&&<p>Подойди к освещённому входу, чтобы войти в кузницу.</p>}<button onClick={()=>setSelected('')}>Продолжить путь</button></section></div>}
  </div>;
}


