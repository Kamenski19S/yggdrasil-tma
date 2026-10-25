import {YMIR_PILLAR_ASSET,YMIR_PILLAR_POSITION,YMIR_PILLAR_CREDIT,createYmirMemoryPillar} from './muspelheimYmirPillar';
import {DARK_VAULT_ASSET,DARK_VAULT_POSITION,DARK_VAULT_CREDIT,createDarkThreadVault} from './muspelheimDarkVault';
import {FORTRESS_ASSET,FORTRESS_POSITION,FORTRESS_SIZE,FORTRESS_CREDIT,createMuspelheimFortress} from './muspelheimFortress';
import {ARMY_TOWER_ASSET,ARMY_TOWER_POSITION,ARMY_TOWER_CREDIT,createArmyTower} from './muspelheimArmyTower';
import {basaltPeakLayout,createBasaltPeaks} from './muspelheimBasaltPeaks';
import {createMuspelheimHeroEquipment} from './muspelheimHeroEquipment';
import {FORGE_ASSET,FORGE_POSITION,FORGE_RETURN,FORGE_CREDIT,createMuspelheimForge} from './muspelheimForge';
import {ICE_SANCTUARY_ASSET,ICE_SANCTUARY_POSITION,ICE_SANCTUARY_CREDIT,createIceSanctuary,iceSanctuaryContains,recoverInIceSanctuary} from './muspelheimIceSanctuary';
import {NORNS_WELL_ASSET,NORNS_WELL_POSITION,NORNS_WELL_CREDIT,STRANGER_ASSET,STRANGER_CREDIT,createMuspelheimNornsWell} from './muspelheimNornsWell';
import {FIRE_SPRITE,FIRE_CREDIT,createFireRain,fireStrikeDamage,isSurtTerritory} from './muspelheimFireRain';
import type {CombatStats} from './combatStats';
import {ASH_VOLCANO_ASSET,ASH_VOLCANO_POSITION,ASH_VOLCANO_CREDIT,createAshVolcano} from './muspelheimAshVolcano';
import {CANYON_RIDGE_ASSET,CANYON_RIDGE_LAYOUT,CANYON_RIDGE_CREDIT,createCanyonRidge} from './muspelheimCanyonRidge';
import {EAST_VOLCANO_ASSET,EAST_VOLCANO_POSITION,EAST_VOLCANO_CREDIT,createEastVolcano} from './muspelheimEastVolcano';
import {OCEAN_GUARDIAN_CREDIT} from './ashMineGuardian';
import {MINE_DOOR_ASSET,MINE_DOOR_CREDIT} from './ashMineDoor';
import {carveMineApproach,mineApproachFloorAt,mineApproachSideBlocks,mineApproachCameraAt,mineApproachRocks,createMineEntrance,MINE_DOOR,MINE_PATH} from './muspelheimMineEntrance';
import {createRavineLava} from './muspelheimRavineLava';
import {createAshDwarf} from './ashDwarf';
import {FIRE_GOLD_COST} from './muspelheimMineQuest';
import {RAVINE_BRIDGE_ASSET,RAVINE_BRIDGE_CREDIT,isRavineAbyss,ravinePitDepth,ravineBridgeFloorAt,createRavineCrossings,ravineRockLayout,ravineRockBlocks,classifyRavineStep,RAVINE_RESTART,RAVINE_CROSSINGS} from './muspelheimRavineCrossings';
import {carveSurtRavine,SURT_RAVINE_LINE,SURT_RAVINE_SITES} from './muspelheimSurtRavine';
import {SURT_THRONE_ASSET,SURT_THRONE_CREDIT,createSurtThrone} from './muspelheimSurtThrone';
import {createSummitFloor} from './muspelheimSummit';
import {SURT_TOWER_ASSET,SURT_TOWER_POSITION,SURT_TOWER_CREDIT,createSurtTower} from './muspelheimSurtTower';
import {VOLCANO_ASSET,VOLCANO_POSITION,VOLCANO_CREDIT,createMuspelheimVolcano} from './muspelheimVolcano';
import React,{useEffect,useRef,useState} from 'react';
import './muspelheimUI.css';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {TORCH_ASSET,TORCH_CREDIT} from './muspelheimTorches';
import {BRIDGE_TEXTURE,BRIDGE_ASSET,BRIDGE_CREDIT,BRIDGE_SPAWN,chasmBlocks,carveEntranceChasm,createEntranceBridge,createChasmLava} from './muspelheimChasm';
import {BASE,cachedGlbBuffer,WEAPON_ASSET,textureSteelOnWeapon,styleNiflheimWeapon,type HeroWeapon} from './core';
import {createTerrainSampler,clampMuspelheimPosition,expandMuspelheimTerrain,muspelheimMapPoint,WORLD_OUTLINE} from './muspelheimTerrain';
import {configureMuspelheimGround} from './muspelheimGround';
import {COBBLE_CREDIT} from './muspelheimCobble';
import {createRoadGlow} from './muspelheimRoadGlow';
import {roadLines,ROAD_WIDTH} from './muspelheimRoads';
import {GATEWAY_ASSETS,GATEWAY_CREDIT,GATEWAY_POSITION,GATEWAY_SCALE,createMuspelheimGateway,type MuspelheimGateway} from './muspelheimGateway';
import {screenMoveToWorld,updateFollowCamera,safeCameraOffset,terrainSafeCameraPosition,type FollowCameraState} from './muspelheimCamera';
import {ROCK_ASSETS,ROCK_CREDITS,rockWallLayout,rockWallBlocks,moveAlongRockWalls,makeBasaltWall} from './muspelheimRockWalls';

const GATEWAY_WALL_ANCHOR={x:GATEWAY_POSITION.x,z:GATEWAY_POSITION.z-20*GATEWAY_SCALE,halfWidth:41*GATEWAY_SCALE};

export type Props={weapon:HeroWeapon;shieldAsset:string;shieldEquipped:boolean;combatStats:CombatStats;fieldHp:number|null;onFieldHpChange:(hp:number)=>void;onEnterMine:()=>void;onForge:(position:{x:number;z:number})=>void;startPosition?:{x:number;z:number};minePaid:boolean;fireGold:number;onPayKeeper:()=>void;gateOpen:boolean;canOpenGate:boolean;assembled:boolean;briefed:boolean;onInstallCrystal:()=>void;onTrial:()=>void};
function dispose(root:THREE.Object3D){
 const textures=new Set<THREE.Texture>(),materials=new Set<THREE.Material>(),geometries=new Set<THREE.BufferGeometry>();
 root.traverse(o=>{if(o instanceof THREE.Mesh||o instanceof THREE.Points||o instanceof THREE.Sprite){if(o instanceof THREE.Mesh||o instanceof THREE.Points)geometries.add(o.geometry);if(o instanceof THREE.InstancedMesh)o.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){materials.add(m);Object.values(m).forEach(v=>{if(v instanceof THREE.Texture)textures.add(v);});}}});
 geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());
}
export default function Muspelheim3D(props:Props){
 const sprint=useRef(false),live=useRef(props);live.current=props;
 const life=useRef(Math.max(0,Math.min(props.fieldHp??props.combatStats.maxHp,props.combatStats.maxHp)));
 const [hp,setHp]=useState(life.current),[defeated,setDefeated]=useState(life.current===0),[fireHit,setFireHit]=useState(false),[surtSafe,setSurtSafe]=useState(false);
 const [nearForge,setNearForge]=useState(false);const openForge=useRef<()=>void>(()=>{});
 const refreshEquipment=useRef<()=>void>(()=>{});
 useEffect(()=>{refreshEquipment.current();},[props.weapon,props.shieldAsset,props.shieldEquipped]);
 const respawn=useRef<()=>void>(()=>{}),openWell=useRef<()=>void>(()=>{});
 const [iceSafe,setIceSafe]=useState(false),[wellSafe,setWellSafe]=useState(false),[nearStranger,setNearStranger]=useState(false),[wellDialog,setWellDialog]=useState(false);
 useEffect(()=>{const value=Math.max(0,Math.min(props.fieldHp??props.combatStats.maxHp,props.combatStats.maxHp));life.current=value;setHp(value);setDefeated(value===0);},[props.fieldHp,props.combatStats.maxHp]);
 const host=useRef<HTMLDivElement>(null),input=useRef({x:0,z:0}),position=useRef({...props.startPosition??BRIDGE_SPAWN});
 const [nearMine,setNearMine]=useState(false),[mineOpen,setMineOpen]=useState(false),[keeperDialog,setKeeperDialog]=useState(false),[nearKeeper,setNearKeeper]=useState(false),[status,setStatus]=useState('Загрузка площадки Муспельхейма…'),[retry,setRetry]=useState(0),[failed,setFailed]=useState(false),[gate,setGate]=useState(false),[mapOpen,setMapOpen]=useState(false);
 const viewYaw=useRef(0),controlYaw=useRef(0),gateIsOpen=useRef(props.gateOpen);gateIsOpen.current=props.gateOpen;
 const paused=useRef(false);paused.current=gate||mapOpen||keeperDialog||wellDialog||defeated;
 const enterMine=useRef(props.onEnterMine);enterMine.current=props.onEnterMine;
 const minePaid=useRef(props.minePaid);minePaid.current=props.minePaid;const openMine=useRef<()=>void>(()=>{});
 useEffect(()=>{
  const mount=host.current;if(!mount)return;
  let alive=true,frame=0,renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});}catch{setStatus('Не удалось запустить 3D. Попробуй открыть мир снова.');setFailed(true);return;}
  setFailed(false);setStatus('Загрузка площадки Муспельхейма…');
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;mount.appendChild(renderer.domElement);
  const scene=new THREE.Scene();scene.background=new THREE.Color('#24110e');scene.fog=new THREE.FogExp2('#24110e',.004);
  scene.add(new THREE.HemisphereLight('#ffdfb0','#332127',2.3));const sun=new THREE.DirectionalLight('#ffb776',2);sun.position.set(30,70,20);scene.add(sun);
  const camera=new THREE.PerspectiveCamera(48,1,.1,650),hero=new THREE.Group();scene.add(hero);
  let sample:((x:number,z:number)=>number|null)|undefined,mixer:THREE.AnimationMixer|undefined,idle:THREE.AnimationAction|undefined,walk:THREE.AnimationAction|undefined,run:THREE.AnimationAction|undefined,current:THREE.AnimationAction|undefined;
  const lava=createChasmLava();scene.add(lava.mesh);const ravineLava=createRavineLava(`${BASE}img/`);let bridge:ReturnType<typeof createEntranceBridge>|undefined;
  const wallRocks=rockWallLayout(GATEWAY_WALL_ANCHOR),ravineRocks=[...ravineRockLayout(),...mineApproachRocks()];
  const worldRocks=[...wallRocks],peakSources:Array<THREE.Object3D|undefined>=[];let peakRocks:ReturnType<typeof basaltPeakLayout>|undefined,peaksReady=0;
  const mineEntrance=createMineEntrance(`${BASE}img/`);scene.add(mineEntrance.root);openMine.current=()=>{mineEntrance.open();setMineOpen(true);};
  const keeper=createAshDwarf('keeper');keeper.root.scale.setScalar(1.5);keeper.root.position.set(-301,40,-366);scene.add(keeper.root);let proximityTimer=0;
  let mineDoorReady=false;let crossingReady=false,transitioningMine=false,mineCameraActive=false,wellCameraActive=false;
  let falling=false,fallVelocity=0,fallTime=0,respawnNotice=0,ravineVisited=false,snapCamera=false,hitFlash=0,sanctuaryHealTime=0;
  const follow:FollowCameraState={yaw:viewYaw.current,targetYaw:viewYaw.current,turnTime:0};
  let forge:ReturnType<typeof createMuspelheimForge>|undefined,transitioningForge=false;
  let ymirPillar:ReturnType<typeof createYmirMemoryPillar>|undefined;
  let darkVault:ReturnType<typeof createDarkThreadVault>|undefined;
  let fortress:ReturnType<typeof createMuspelheimFortress>|undefined;
  let armyTower:ReturnType<typeof createArmyTower>|undefined;
  let equipment:ReturnType<typeof createMuspelheimHeroEquipment>|undefined;
  let throne:ReturnType<typeof createSurtThrone>|undefined;
  let tower:ReturnType<typeof createSurtTower>|undefined,towerSource:THREE.Object3D|undefined;
  let volcano:ReturnType<typeof createMuspelheimVolcano>|undefined;
  let iceSanctuary:ReturnType<typeof createIceSanctuary>|undefined;
  let nornsWell:ReturnType<typeof createMuspelheimNornsWell>|undefined,wellSource:THREE.Object3D|undefined,strangerSource:THREE.Object3D|undefined,strangerReady=false;
  let eastVolcano:ReturnType<typeof createEastVolcano>|undefined;
  let ashVolcano:ReturnType<typeof createAshVolcano>|undefined;
  let canyonRidge:ReturnType<typeof createCanyonRidge>|undefined,ridgeSource:THREE.Object3D|undefined;
  let summit:ReturnType<typeof createSummitFloor>|undefined,summitReady=false;
  let roadGlow:ReturnType<typeof createRoadGlow>|undefined;
  let roadMask:ReturnType<typeof configureMuspelheimGround>|undefined;
  let terrainReady=false,bridgeTextureReady=false,torchesReady=false,torchSource:THREE.Object3D|undefined,heroReady=false,wallsReady=0,loadError=false,entrance:MuspelheimGateway|undefined;
  const entranceAssets:Array<THREE.Object3D|undefined>=[];
  const blocked=(x:number,z:number)=>(ymirPillar?.blocks(x,z,hero.position.y)??false)||(darkVault?.blocks(x,z,hero.position.y)??false)||(fortress?.blocks(x,z,hero.position.y)??false)||(armyTower?.blocks(x,z,hero.position.y)??false)||(forge?.blocks(x,z)??false)||(iceSanctuary?.blocks(x,z,hero.position.y)??false)||(nornsWell?.blocks(x,z)??false)||mineApproachSideBlocks(x,hero.position.y,z)||mineEntrance.blocks(x,z,hero.position.y)||chasmBlocks(x,z)||(throne?.blocks(x,z)??false)||(tower?.blocks(x,z)??false)||rockWallBlocks(worldRocks,x,z,2,hero.position.y)||ravineRockBlocks(ravineRocks,x,hero.position.y,z)||(entrance?.blocks(x,z)??false);
  const heightAt=(x:number,z:number)=>{const approach=mineApproachFloorAt(x,z);if(approach!=null)return approach;const paved=summit?.floorAt(x,z);if(paved!=null)return paved;const base=sample?.(x,z);if(base==null)return null;const crossing=ravineBridgeFloorAt(x,z);if(crossing!=null)return Math.max(base,crossing);const deck=bridge?.floorAt(x,z);if(deck!=null)return Math.max(base,deck);const surface=Math.max(base,darkVault?.floorAt(x,z)??base,fortress?.floorAt(x,z)??base,armyTower?.floorAt(x,z)??base,forge?.floorAt(x,z)??base,iceSanctuary?.floorAt(x,z)??base,nornsWell?.floorAt(x,z)??base,volcano?.floorAt(x,z)??base,eastVolcano?.floorAt(x,z)??base,ashVolcano?.floorAt(x,z)??base,canyonRidge?.floorAt(x,z)??base,summit?.floorAt(x,z)??base);return entrance?.floorAt(x,z,surface)??surface;};
  let fireRain:ReturnType<typeof createFireRain>|undefined,fireTextureReady=false;
  const fireTexture=new THREE.TextureLoader().load(`${BASE}img/${FIRE_SPRITE}`,()=>{if(!alive){fireTexture.dispose();return;}fireTextureReady=true;ready();},undefined,()=>{if(alive){loadError=true;setStatus('Огненный дождь не загрузился. Повтори загрузку.');setFailed(true);}});
  fireRain=createFireRain(fireTexture,(x,z)=>Math.max(heightAt(x,z)??-Infinity,ymirPillar?.roofAt(x,z)??-Infinity,darkVault?.roofAt(x,z)??-Infinity,nornsWell?.roofAt(x,z)??-Infinity,armyTower?.roofAt(x,z)??-Infinity,fortress?.roofAt(x,z)??-Infinity),isRavineAbyss,renderer.getPixelRatio());scene.add(fireRain.root);
  const loadedWorld=()=>!!(ymirPillar&&darkVault&&fortress&&armyTower&&peaksReady===ROCK_ASSETS.length&&forge&&mineDoorReady&&crossingReady&&terrainReady&&heroReady&&volcano&&eastVolcano&&ashVolcano&&canyonRidge&&tower&&throne&&summitReady&&wallsReady===ROCK_ASSETS.length&&entrance&&bridge&&bridgeTextureReady&&torchesReady&&fireTextureReady&&iceSanctuary&&nornsWell&&strangerReady&&!loadError);
  respawn.current=()=>{const max=live.current.combatStats.maxHp;life.current=max;setHp(max);live.current.onFieldHpChange(max);setDefeated(false);setFireHit(false);hitFlash=0;falling=false;fallVelocity=0;position.current={...BRIDGE_SPAWN};snapCamera=true;clear();fireRain?.reset();setStatus('Vicki восстановилась у первых врат. Следи за огненными отметками на земле.');};
  const loadingTimeout=window.setTimeout(()=>{if(alive&&!loadError){loadError=true;setStatus(heroReady?'Загрузка мира затянулась. Повтори загрузку.':'Загрузка Vicki затянулась. Повтори загрузку.');setFailed(true);}},60000);
  const ready=()=>{if(loadedWorld()){window.clearTimeout(loadingTimeout);setStatus('Гиннунгагап · Мост к первым вратам.');}else if(!loadError)setStatus(heroReady?'Загрузка окружения Муспельхейма…':'Загрузка Vicki…');};
  const bridgeTexture=new THREE.TextureLoader().load(`${BASE}img/${BRIDGE_TEXTURE}`,()=>{if(!alive){bridgeTexture.dispose();return;}bridgeTextureReady=true;ready();},undefined,()=>{if(alive){loadError=true;setStatus('Текстура моста не загрузилась. Повтори загрузку.');setFailed(true);}});
  bridgeTexture.colorSpace=THREE.SRGBColorSpace;bridgeTexture.wrapS=bridgeTexture.wrapT=THREE.RepeatWrapping;bridgeTexture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
  const attachTorches=()=>{if(!entrance||!torchSource||torchesReady)return;entrance.mountTorches(torchSource);torchSource.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});torchSource=undefined;torchesReady=true;ready();};
  const loader=new GLTFLoader();
  loader.load(`${BASE}img/models/${YMIR_PILLAR_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}ymirPillar=createYmirMemoryPillar(g.scene);scene.add(ymirPillar.root);ready();},undefined,()=>{if(alive){loadError=true;setFailed(true);setStatus('Столб памяти Имира не загрузился. Повтори загрузку.');}});
  loader.load(`${BASE}img/models/${DARK_VAULT_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}darkVault=createDarkThreadVault(g.scene);scene.add(darkVault.root);if(roadMask)darkVault.setApproachTexture(roadMask.stoneTexture);ready();},undefined,()=>{if(alive){loadError=true;setFailed(true);setStatus('Хранилище тёмных нитей не загрузилось. Повтори загрузку.');}});
  loader.load(`${BASE}img/models/${FORTRESS_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}fortress=createMuspelheimFortress(g.scene);scene.add(fortress.root);if(roadMask)fortress.setPavingTexture(roadMask.stoneTexture);g.scene.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});ready();},undefined,()=>{if(alive){loadError=true;setFailed(true);setStatus('Древняя крепость не загрузилась. Повтори загрузку.');}});
  loader.load(`${BASE}img/models/${ARMY_TOWER_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}armyTower=createArmyTower(g.scene);scene.add(armyTower.root);ready();},undefined,()=>{if(alive){loadError=true;setFailed(true);setStatus('Башня войска Сурта не загрузилась. Повтори загрузку.');}});
  loader.load(`${BASE}img/models/${FORGE_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}try{forge=createMuspelheimForge(g.scene);scene.add(forge.root);if(roadMask)forge.setRampTexture(roadMask.stoneTexture);ready();}catch{dispose(g.scene);loadError=true;setFailed(true);setStatus('Кузница не загрузилась. Повтори загрузку.');}},undefined,()=>{if(alive){loadError=true;setFailed(true);setStatus('Кузница не загрузилась. Повтори загрузку.');}});
  openForge.current=()=>{if(forge?.near(position.current.x,position.current.z)){clear();forge.open();}};
  loader.load(`${BASE}img/models/${ICE_SANCTUARY_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}iceSanctuary=createIceSanctuary(g.scene);scene.add(iceSanctuary.root);ready();},undefined,()=>{if(alive){loadError=true;setStatus('Ледяное святилище не загрузилось. Повтори загрузку.');setFailed(true);}});
  const attachWell=()=>{if(wellSource&&sample&&!nornsWell){nornsWell=createMuspelheimNornsWell(wellSource,sample(NORNS_WELL_POSITION.x,NORNS_WELL_POSITION.z)??0);scene.add(nornsWell.root);wellSource=undefined;}
   if(nornsWell&&strangerSource&&!strangerReady){nornsWell.installStranger(strangerSource);strangerSource=undefined;strangerReady=true;}ready();
  };
  loader.load(`${BASE}img/models/${NORNS_WELL_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}wellSource=g.scene;attachWell();},undefined,()=>{if(alive){loadError=true;setStatus('Колодец трёх норн не загрузился. Повтори загрузку.');setFailed(true);}});
  cachedGlbBuffer(`${BASE}img/models/${STRANGER_ASSET}`).then(buffer=>alive?loader.parseAsync(buffer,`${BASE}img/models/`):undefined).then(g=>{if(!g)return;if(!alive){dispose(g.scene);return;}strangerSource=g.scene;attachWell();}).catch(()=>{if(alive){loadError=true;setStatus('Странница не загрузилась. Повтори загрузку.');setFailed(true);}});
  openWell.current=()=>{const p=position.current;if(nornsWell?.canTalk(p.x,p.z,hero.position.y)){clear();setWellDialog(true);}};
  loader.load(`${BASE}img/models/${MINE_DOOR_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}mineEntrance.installDoor(g.scene);mineDoorReady=true;ready();},undefined,()=>{if(alive){loadError=true;setStatus('Дверь шахты не загрузилась. Повтори загрузку.');setFailed(true);}});
  loader.load(`${BASE}img/models/${RAVINE_BRIDGE_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}scene.add(createRavineCrossings(g.scene));g.scene.traverse(o=>{if(o instanceof THREE.Mesh)o.geometry.dispose();});crossingReady=true;ready();},undefined,()=>{if(alive){loadError=true;setStatus('Подвесной мост не загрузился. Повтори загрузку.');setFailed(true);}});
  cachedGlbBuffer(`${BASE}img/models/Vika-3d-animated-optimized.glb`)
   .then(buffer=>alive?loader.parseAsync(buffer,`${BASE}img/models/`):undefined).then(g=>{
   if(!g)return;
   if(!alive){dispose(g.scene);return;}
   const b=new THREE.Box3().setFromObject(g.scene),scale=13.94/Math.max(.01,b.max.y-b.min.y);g.scene.scale.setScalar(scale);g.scene.position.y=-b.min.y*scale;hero.add(g.scene);
   mixer=new THREE.AnimationMixer(g.scene);
   const find=(...names:string[])=>names.map(n=>THREE.AnimationClip.findByName(g.animations,n)).find(Boolean);
   const i=find('idle','sword_idle')||g.animations[0],w=find('walk_loop','walk')||i;
   equipment=createMuspelheimHeroEquipment(g.scene,{load:async asset=>(await loader.parseAsync(await cachedGlbBuffer(`${BASE}img/models/${asset}`),`${BASE}img/models/`)).scene,weaponAsset:weapon=>weapon==='default'?'Sword.glb':WEAPON_ASSET[weapon],prepare:(item,asset,weapon,isShield)=>{textureSteelOnWeapon(item,asset);if(!isShield)styleNiflheimWeapon(item,weapon);},dispose});
   refreshEquipment.current=()=>{heroReady=false;equipment!.update(live.current).then(applied=>{if(alive&&applied){heroReady=true;ready();}}).catch(()=>{if(alive){loadError=true;setStatus('Оружие Vicki не загрузилось. Повтори загрузку.');setFailed(true);}});};
   refreshEquipment.current();
   if(i)idle=mixer.clipAction(i);if(w)walk=mixer.clipAction(w);const r=find('run_loop','run','sprint');if(r)run=mixer.clipAction(r);idle?.play();current=idle;ready();
  }).catch(()=>{if(alive){loadError=true;setStatus('Vicki не загрузилась. Проверь соединение и повтори.');setFailed(true);}});
  const attachTower=()=>{if(!volcano||!towerSource||tower)return;tower=createSurtTower(towerSource);scene.add(tower.root);towerSource=undefined;summit=createSummitFloor(`${BASE}img/`,renderer.capabilities.getMaxAnisotropy(),volcano.root,tower.buildingBounds);scene.add(summit.root);summit.ready.then(()=>{if(alive){summitReady=true;ready();}},()=>{if(alive){loadError=true;setStatus('Кладка у замка не загрузилась. Повтори загрузку.');setFailed(true);}});ready();};
  loader.load(`${BASE}img/models/${SURT_THRONE_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}throne=createSurtThrone(g.scene);scene.add(throne.root);ready();},undefined,()=>{if(alive){loadError=true;setStatus('Трон Сурта не загрузился. Повтори загрузку.');setFailed(true);}});
  loader.load(`${BASE}img/models/${SURT_TOWER_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}towerSource=g.scene;attachTower();},undefined,()=>{if(alive){loadError=true;setStatus('Башня Сурта не загрузилась. Повтори загрузку.');setFailed(true);}});
  function attachPeaks(){
   if(!sample||!canyonRidge)return;
   if(!peakRocks){peakRocks=basaltPeakLayout((x,z)=>{const ground=sample!(x,z);return ground==null?null:Math.max(ground,canyonRidge!.floorAt(x,z)??ground);});worldRocks.push(...peakRocks);}
   peakSources.forEach((source,kind)=>{if(!source)return;scene.add(createBasaltPeaks(source,kind,peakRocks!,renderer.capabilities.getMaxAnisotropy()));source.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});peakSources[kind]=undefined;peaksReady++;});ready();
  }
  const attachRidge=()=>{if(!ridgeSource||!sample||canyonRidge)return;
   canyonRidge=createCanyonRidge(ridgeSource,sample,ravineLava);scene.add(canyonRidge.root);
   ridgeSource.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});ridgeSource=undefined;attachPeaks();ready();
  };
  loader.load(`${BASE}img/models/${CANYON_RIDGE_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}ridgeSource=g.scene;attachRidge();},undefined,()=>{if(alive){loadError=true;setStatus('Хребет в каньоне не загрузился. Повтори загрузку.');setFailed(true);}});
  loader.load(`${BASE}img/models/${ASH_VOLCANO_ASSET}`,g=>{
   if(!alive){dispose(g.scene);return;}
   ashVolcano=createAshVolcano(g.scene);scene.add(ashVolcano.root);ready();
  },undefined,()=>{if(alive){loadError=true;setStatus('Вулканическая башня не загрузилась. Повтори загрузку.');setFailed(true);}});
  loader.load(`${BASE}img/models/${EAST_VOLCANO_ASSET}`,g=>{
   if(!alive){dispose(g.scene);return;}
   eastVolcano=createEastVolcano(g.scene);scene.add(eastVolcano.root);ready();
  },undefined,()=>{if(alive){loadError=true;setStatus('Второй вулкан не загрузился. Повтори загрузку.');setFailed(true);}});
  loader.load(`${BASE}img/models/${VOLCANO_ASSET}`,g=>{
   if(!alive){dispose(g.scene);return;}
   volcano=createMuspelheimVolcano(g.scene,0);scene.add(volcano.root);attachTower();ready();
  },undefined,()=>{if(alive){loadError=true;setStatus('Вулкан не загрузился. Повтори загрузку.');setFailed(true);}});
  loader.load(`${BASE}img/models/${TORCH_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}torchSource=g.scene;attachTorches();},undefined,()=>{if(alive){loadError=true;setStatus('Факелы не загрузились. Повтори загрузку.');setFailed(true);}});
  loader.load(`${BASE}img/models/${BRIDGE_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}bridge=createEntranceBridge(g.scene,bridgeTexture);scene.add(bridge.group);g.scene.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});ready();},undefined,()=>{if(alive){loadError=true;setStatus('Мост не загрузился. Повтори загрузку.');setFailed(true);}});
  GATEWAY_ASSETS.forEach((asset,index)=>loader.load(`${BASE}img/models/${asset}`,g=>{
   if(!alive){dispose(g.scene);return;}entranceAssets[index]=g.scene;
   if(entranceAssets[0]&&entranceAssets[1]){entrance=createMuspelheimGateway(entranceAssets[0],entranceAssets[1],false);scene.add(entrance.group);attachTorches();ready();}
  },undefined,()=>{if(alive){loadError=true;setStatus('Врата не загрузились. Проверь соединение и повтори.');setFailed(true);}}));
  ROCK_ASSETS.forEach((asset,kind)=>loader.load(`${BASE}img/models/${asset}`,g=>{
   if(!alive){dispose(g.scene);return;}
   const wall=makeBasaltWall(g.scene,kind,[...wallRocks,...ravineRocks],renderer.capabilities.getMaxAnisotropy(),ravineLava);scene.add(wall);
   peakSources[kind]=g.scene;attachPeaks();
   wallsReady++;ready();
  },undefined,()=>{if(alive){loadError=true;setStatus('Скалы не загрузились. Проверь соединение и повтори.');setFailed(true);}}));
  loader.load(`${BASE}img/models/Muspelheim_Terrain_300m.glb`,g=>{
   if(!alive){dispose(g.scene);return;}
   g.scene.scale.multiply(new THREE.Vector3(1.75,1,1.75));
   expandMuspelheimTerrain(g.scene);
   carveEntranceChasm(g.scene);
   carveSurtRavine(g.scene,ravinePitDepth);
   carveMineApproach(g.scene);
   roadMask=configureMuspelheimGround(g.scene,renderer.capabilities.getMaxAnisotropy(),`${BASE}img/`,ravineLava);if(darkVault)darkVault.setApproachTexture(roadMask.stoneTexture);if(forge)forge.setRampTexture(roadMask.stoneTexture);if(fortress)fortress.setPavingTexture(roadMask.stoneTexture);
   scene.add(g.scene);g.scene.name='Muspelheim editable terrain';sample=createTerrainSampler(g.scene);attachRidge();attachWell();
   roadGlow=createRoadGlow(sample,renderer.getDrawingBufferSize(new THREE.Vector2()).y);scene.add(roadGlow.points);
   Promise.all([roadMask.ready,ravineLava.ready]).then(()=>{if(alive){terrainReady=true;ready();}},()=>{if(alive){loadError=true;setStatus('Покрытие дороги не загрузилось. Повтори загрузку.');setFailed(true);}});
  },undefined,()=>{if(alive){loadError=true;setStatus('Площадка не загрузилась. Проверь соединение и повтори.');setFailed(true);}});
  const keys=new Set<string>();
  const keydown=(e:KeyboardEvent)=>{if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight'].includes(e.code)){if(!keys.size)controlYaw.current=viewYaw.current;keys.add(e.code);e.preventDefault();}};
  const keyup=(e:KeyboardEvent)=>keys.delete(e.code);
  const clear=()=>{keys.clear();sprint.current=false;input.current={x:0,z:0};};
  window.addEventListener('keydown',keydown);window.addEventListener('keyup',keyup);window.addEventListener('blur',clear);document.addEventListener('visibilitychange',clear);
  const resize=()=>{const w=mount.clientWidth,h=mount.clientHeight;if(!w||!h)return;renderer.setSize(w,h);roadGlow?.setPixelHeight(renderer.getDrawingBufferSize(new THREE.Vector2()).y);camera.aspect=w/h;camera.updateProjectionMatrix();};
  const observer=new ResizeObserver(resize);observer.observe(mount);resize();
  const lookTarget=new THREE.Vector3(position.current.x,3,position.current.z-18);
  const clock=new THREE.Clock();camera.position.set(position.current.x,20,position.current.z+32);
  function tick(){
   if(!alive)return;frame=requestAnimationFrame(tick);const dt=Math.min(clock.getDelta(),.1);
   let x=input.current.x+(keys.has('KeyD')||keys.has('ArrowRight')?1:0)-(keys.has('KeyA')||keys.has('ArrowLeft')?1:0);
   let z=input.current.z+(keys.has('KeyS')||keys.has('ArrowDown')?1:0)-(keys.has('KeyW')||keys.has('ArrowUp')?1:0);
   const length=Math.hypot(x,z);let moving=false,dx=0,dz=0;
   const running=sprint.current||keys.has('ShiftLeft')||keys.has('ShiftRight');
   const speed=running?29:18;
   if(ymirPillar&&darkVault&&fortress&&armyTower&&peaksReady===ROCK_ASSETS.length&&!transitioningForge&&!forge?.entering&&forge&&!falling&&life.current>0&&iceSanctuary&&nornsWell&&strangerReady&&fireTextureReady&&crossingReady&&length&&terrainReady&&heroReady&&volcano&&eastVolcano&&ashVolcano&&canyonRidge&&tower&&throne&&summitReady&&entrance&&bridge&&bridgeTextureReady&&torchesReady&&!loadError&&wallsReady===ROCK_ASSETS.length&&!document.hidden&&!paused.current){x/=Math.max(1,length);z/=Math.max(1,length);const world=screenMoveToWorld(x,z,controlYaw.current);x=world.x;z=world.z;const p=moveAlongRockWalls(worldRocks,position.current,clampMuspelheimPosition(position.current.x+x*speed*dt,position.current.z+z*speed*dt),hero.position.y);let next=p;if(blocked(p.x,p.z)){const from=position.current;next=!blocked(p.x,from.z)?{x:p.x,z:from.z}:!blocked(from.x,p.z)?{x:from.x,z:p.z}:from;}const y=heightAt(next.x,next.z);
    const inRavine=Math.min(sample?.(position.current.x,position.current.z)??0,sample?.(next.x,next.z)??0)<-1&&next.z<30;
    const step=inRavine?classifyRavineStep(heightAt,position.current,next,isRavineAbyss):'walk';
    if(step==='fall'){position.current=next;falling=true;fallVelocity=0;fallTime=0;clear();setStatus('Vicki сорвалась в пучину…');}
    else if(step==='walk'&&y!=null&&Math.abs(y-hero.position.y)<(Math.abs(next.x-GATEWAY_POSITION.x)<13*GATEWAY_SCALE&&Math.abs(next.z-GATEWAY_POSITION.z)<42*GATEWAY_SCALE?8*GATEWAY_SCALE:iceSanctuaryContains(next.x,next.z)?5:3)){dx=next.x-position.current.x;dz=next.z-position.current.z;moving=Math.hypot(dx,dz)>.00001;position.current=next;if(moving)hero.rotation.y=Math.atan2(dx,dz);}}
   if(falling&&!paused.current&&!document.hidden){
    fallTime+=dt;fallVelocity+=75*dt;hero.position.y-=fallVelocity*dt;
    if(fallTime>1.6){falling=false;fallVelocity=0;snapCamera=true;position.current={...RAVINE_RESTART};clear();fireRain?.reset();respawnNotice=5;setStatus('Vicki погибла в пучине. Путь через ущелье начинается заново. Задания и предметы сохранены.');}
   }
   if(respawnNotice>0&&!paused.current){respawnNotice-=dt;if(respawnNotice<=0)setStatus('Ущелье Сурта · Осторожно: падение в пучину смертельно.');}
   const p=position.current;
   if(!ravineVisited&&terrainReady&&!loadError&&p.z<0&&(sample?.(p.x,p.z)??0)<-8){ravineVisited=true;setStatus('Ущелье Сурта · Падение в пучину смертельно. Держись середины подвесного моста.');}
   hero.position.set(p.x,falling?hero.position.y:heightAt(p.x,p.z)??0,p.z);entrance?.updateProximity(paused.current?0:dt,gateIsOpen.current,p.x,p.z);tower?.updateProximity(paused.current?0:dt,p.x,p.z,minePaid.current);
   const forgeRequested=forge?.update(paused.current||document.hidden?0:dt,p.x,p.z);
   if(!transitioningForge&&loadedWorld()&&!falling&&!paused.current&&!document.hidden&&life.current>0&&(forgeRequested||forge?.canEnter(p.x,p.z))){transitioningForge=true;clear();live.current.onForge({...FORGE_RETURN});}
   mineEntrance.update(paused.current?0:dt);
   if(!transitioningMine&&!falling&&!paused.current&&life.current>0&&mineEntrance.canEnter(p.x,hero.position.y,p.z)){transitioningMine=true;clear();enterMine.current();}
keeper.update(clock.elapsedTime);proximityTimer+=dt;if(proximityTimer>.15){proximityTimer=0;setSurtSafe(isSurtTerritory(p.x,p.z));setIceSafe(iceSanctuaryContains(p.x,p.z));setWellSafe(nornsWell?.shelters(p.x,p.z,hero.position.y)??false);setNearStranger(nornsWell?.canTalk(p.x,p.z,hero.position.y)??false);setNearForge(forge?.near(p.x,p.z)??false);setNearMine(mineEntrance.near(p.x,p.z));setNearKeeper(Math.hypot(p.x+308,p.z+368)<24&&hero.position.y>25);}
   if(walk)walk.timeScale=running&&!run?1.6:1;
   const action=moving&&!falling?(running?run??walk:walk):idle;if(action&&action!==current){current?.fadeOut(.18);action.reset().fadeIn(.18).play();current=action;}
   nornsWell?.update(clock.elapsedTime,paused.current?0:dt,p.x,p.z);
   ashVolcano?.update(paused.current?0:dt);lava.update(paused.current?0:dt);ravineLava.update(paused.current?0:dt);summit?.update(paused.current?0:dt);mixer?.update(dt);viewYaw.current=updateFollowCamera(follow,dx,dz,dt);
   const mineView=mineApproachCameraAt(p.x,hero.position.y,p.z);
   const inWell=nornsWell?.shelters(p.x,p.z,hero.position.y)??false;
   if(inWell){
    const eye=new THREE.Vector3(Math.max(NORNS_WELL_POSITION.x+14,p.x+10),hero.position.y+19,Math.max(NORNS_WELL_POSITION.z+24,p.z+22)),target=new THREE.Vector3((p.x+nornsWell!.npcPosition.x)/2,hero.position.y+8,(p.z+nornsWell!.npcPosition.z)/2);
    if(!wellCameraActive||snapCamera){camera.position.copy(eye);lookTarget.copy(target);snapCamera=false;}else{camera.position.lerp(eye,1-Math.exp(-6*dt));lookTarget.lerp(target,1-Math.exp(-6*dt));}
    const wellYaw=Math.atan2(eye.x-target.x,eye.z-target.z);if(!wellCameraActive)controlYaw.current=wellYaw;wellCameraActive=true;mineCameraActive=false;viewYaw.current=wellYaw;follow.yaw=wellYaw;follow.targetYaw=wellYaw;camera.lookAt(lookTarget);
   }else if(mineView){
    const targetPosition=new THREE.Vector3(mineView.position.x,mineView.position.y,mineView.position.z),targetLook=new THREE.Vector3(mineView.target.x,mineView.target.y,mineView.target.z);
    if(!mineCameraActive||snapCamera){camera.position.copy(targetPosition);lookTarget.copy(targetLook);snapCamera=false;}else{camera.position.lerp(targetPosition,1-Math.exp(-6*dt));lookTarget.lerp(targetLook,1-Math.exp(-7*dt));}
    mineCameraActive=true;viewYaw.current=mineView.yaw;follow.yaw=mineView.yaw;follow.targetYaw=mineView.yaw;camera.lookAt(lookTarget);
   }else{
    mineCameraActive=false;if(wellCameraActive){snapCamera=true;wellCameraActive=false;}
   const offset=safeCameraOffset(p.x,p.z,follow.yaw,(x,z)=>(ymirPillar?.blocks(x,z,hero.position.y+8,1)??false)||(darkVault?.blocks(x,z,hero.position.y+8,1)??false)||(fortress?.blocks(x,z,hero.position.y+8,1)??false)||(armyTower?.blocks(x,z,hero.position.y+8,1)??false)||(forge?.blocks(x,z,1)??false)||(iceSanctuary?.blocks(x,z,hero.position.y+8,1)??false)||(nornsWell?.blocks(x,z,1)??false)||(throne?.blocks(x,z,2)??false)||(tower?.blocks(x,z,2)??false)||rockWallBlocks(worldRocks,x,z,2,hero.position.y+20,0)||ravineRockBlocks(ravineRocks,x,hero.position.y+20,z,2)||(entrance?.blocks(x,z,2)??false));
   const cameraFocus={x:p.x,y:hero.position.y+12,z:p.z};
   const cameraSurface=(x:number,z:number)=>{const base=sample?.(x,z);return base==null?null:Math.max(base,darkVault?.floorAt(x,z)??base,fortress?.floorAt(x,z)??base,armyTower?.floorAt(x,z)??base,forge?.floorAt(x,z)??base,iceSanctuary?.floorAt(x,z)??base,eastVolcano?.floorAt(x,z)??base,ashVolcano?.floorAt(x,z)??base,canyonRidge?.floorAt(x,z)??base);};
   const desiredCamera=terrainSafeCameraPosition(cameraFocus,{x:p.x+offset.x,y:hero.position.y+20,z:p.z+offset.z},cameraSurface);
   if(snapCamera){camera.position.set(desiredCamera.x,desiredCamera.y,desiredCamera.z);lookTarget.set(p.x,hero.position.y+3,p.z-18);snapCamera=false;}
   camera.position.lerp(new THREE.Vector3(desiredCamera.x,desiredCamera.y,desiredCamera.z),1-Math.exp(-4.5*dt));
   if((ymirPillar?.blocks(camera.position.x,camera.position.z,camera.position.y-7,1)??false)||(darkVault?.blocks(camera.position.x,camera.position.z,camera.position.y-7,1)??false)||(fortress?.blocks(camera.position.x,camera.position.z,camera.position.y-7,1)??false)||(armyTower?.blocks(camera.position.x,camera.position.z,camera.position.y-7,1)??false)||(forge?.blocks(camera.position.x,camera.position.z,1)??false)||(iceSanctuary?.blocks(camera.position.x,camera.position.z,camera.position.y-7,1)??false)||(nornsWell?.blocks(camera.position.x,camera.position.z,1)??false)||(throne?.blocks(camera.position.x,camera.position.z,2)??false)||(tower?.blocks(camera.position.x,camera.position.z,2)??false)||rockWallBlocks(worldRocks,camera.position.x,camera.position.z,2,camera.position.y,0)||ravineRockBlocks(ravineRocks,camera.position.x,camera.position.y,camera.position.z,2)||(entrance?.blocks(camera.position.x,camera.position.z,2)??false))camera.position.set(p.x+offset.x,hero.position.y+20,p.z+offset.z);
   // Smoothing and obstacle fallback can cut through a bank even when the target is safe.
   const clearCamera=terrainSafeCameraPosition(cameraFocus,camera.position,cameraSurface);
   camera.position.set(clearCamera.x,clearCamera.y,clearCamera.z);
   const lookAhead=18*offset.distance/32;lookTarget.lerp(new THREE.Vector3(p.x-Math.sin(follow.yaw)*lookAhead,hero.position.y+3,p.z-Math.cos(follow.yaw)*lookAhead),1-Math.exp(-5*dt));camera.lookAt(lookTarget);   }
   const fireActive=loadedWorld()&&!paused.current&&!document.hidden&&!falling&&!transitioningMine&&!transitioningForge&&!forge?.entering&&life.current>0;
   if(fireActive&&iceSanctuary?.resting(p.x,p.z,hero.position.y)&&life.current<live.current.combatStats.maxHp){
    sanctuaryHealTime+=dt;if(sanctuaryHealTime>=1){const seconds=Math.floor(sanctuaryHealTime);sanctuaryHealTime-=seconds;life.current=recoverInIceSanctuary(life.current,live.current.combatStats.maxHp,seconds);setHp(life.current);live.current.onFieldHpChange(life.current);}
   }else sanctuaryHealTime=0;
   if(hitFlash>0&&fireActive){hitFlash-=dt;if(hitFlash<=0)setFireHit(false);}
   if(fireRain&&ashVolcano)fireRain.update(fireActive?dt:0,hero.position,ashVolcano.vent,camera,()=>{
    if(life.current<=0||iceSanctuaryContains(hero.position.x,hero.position.z)||isSurtTerritory(hero.position.x,hero.position.z)||nornsWell?.shelters(hero.position.x,hero.position.z,hero.position.y))return;
    const damage=Math.min(life.current,fireStrikeDamage(live.current.combatStats.maxHp));life.current-=damage;setHp(life.current);live.current.onFieldHpChange(life.current);hitFlash=.4;setFireHit(true);
    setStatus(`Огненный удар пробил броню: −${damage} здоровья. Отходи от отметок!`);
    if(life.current===0){clear();setDefeated(true);setStatus('Огненный дождь лишил Vicki сил.');}
   });
   renderer.render(scene,camera);
  }
  tick();return()=>{alive=false;refreshEquipment.current=()=>{};equipment?.dispose();window.clearTimeout(loadingTimeout);cancelAnimationFrame(frame);clear();observer.disconnect();window.removeEventListener('keydown',keydown);window.removeEventListener('keyup',keyup);window.removeEventListener('blur',clear);document.removeEventListener('visibilitychange',clear);mixer?.stopAllAction();for(const asset of entranceAssets)if(asset&&!asset.parent)dispose(asset);for(const source of peakSources)if(source)dispose(source);if(torchSource)dispose(torchSource);if(towerSource)dispose(towerSource);if(ridgeSource)dispose(ridgeSource);if(wellSource)dispose(wellSource);if(strangerSource)dispose(strangerSource);fireRain?.dispose();dispose(scene);summit?.dispose();roadMask?.dispose();ravineLava.dispose();bridgeTexture.dispose();renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();};
 },[retry]);
 const pointer=useRef<number|null>(null);
 const move=(e:React.PointerEvent<HTMLDivElement>)=>{if(pointer.current!==e.pointerId)return;const b=e.currentTarget.getBoundingClientRect();input.current={x:THREE.MathUtils.clamp((e.clientX-b.left-b.width/2)/42,-1,1),z:THREE.MathUtils.clamp((e.clientY-b.top-b.height/2)/42,-1,1)};};
 const stop=()=>{pointer.current=null;input.current={x:0,z:0};};
 return <section className="muspelheim-world" style={{position:'relative',flex:1,minHeight:0,overflow:'hidden',background:'#24110e',touchAction:'none'}} aria-label="Муспельхейм">
  <div ref={host} style={{position:'absolute',inset:0}}/>
  <div className="muspelheim-fire-flash" style={{opacity:fireHit?.65:0}} aria-hidden="true"/>
  <div className="muspelheim-fire-health"><span>Vicki · {hp}/{props.combatStats.maxHp}</span><progress value={hp} max={props.combatStats.maxHp}/><small>{iceSafe?'Ледяное святилище · защита и восстановление':wellSafe?'Колодец норн · укрытие от огня':surtSafe?'Территория Сурта · огненного дождя нет':'Огненный дождь · избегай отметок'}</small></div>
  <div className="muspelheim-toolbar"><b>Муспельхейм</b><div style={{display:'flex',gap:6}}><button className="muspelheim-btn" onClick={()=>{stop();setMapOpen(true);}}>Карта</button><button className="muspelheim-btn" onClick={()=>{stop();setGate(true);}}>Первые врата</button></div></div>
  <div role="status" style={{position:'absolute',bottom:14,left:150,right:12,color:'#ffe2ac',fontSize:12,textShadow:'0 2px 3px #000'}}>{status}{failed&&<button className="muspelheim-btn" onClick={()=>setRetry(v=>v+1)}>Повторить загрузку</button>}</div>
  <div role="group" aria-label="Управление Vicki" onPointerDown={e=>{if(pointer.current!==null)return;controlYaw.current=viewYaw.current;pointer.current=e.pointerId;e.currentTarget.setPointerCapture(e.pointerId);move(e);}} onPointerMove={move} onPointerUp={stop} onPointerCancel={stop} onLostPointerCapture={stop} style={{position:'absolute',bottom:'calc(20px + 8mm)',left:20,width:108,height:108,borderRadius:'50%',border:'3px solid #b88839',background:'#27170dbb',display:'grid',placeItems:'center',color:'#edce89',touchAction:'none',userSelect:'none'}}>✥</div>
  {mapOpen&&<div style={{position:'absolute',inset:0,display:'grid',placeItems:'center',background:'#000a',padding:16}}><div role="dialog" aria-modal="true" aria-label="Карта Муспельхейма" className="card" style={{maxWidth:420,maxHeight:'85%',overflowY:'auto',padding:16,background:'#291911',color:'#ffe2ac'}}><h3>Карта Муспельхейма</h3>
   <svg viewBox="0 0 300 220" style={{display:'block',width:'100%',maxHeight:240,background:'#241713',borderRadius:8}} aria-label="Расширенный мир, мост и положение Vicki">
    <polygon points={WORLD_OUTLINE.map(([x,z])=>{const p=muspelheimMapPoint(x,z);return `${p.x},${p.y}`;}).join(' ')} fill="#573122" stroke="#77777c" strokeWidth="8"/>
    <polyline points={SURT_RAVINE_LINE.map(p=>{const m=muspelheimMapPoint(p.x,p.z);return `${m.x},${m.y}`;}).join(' ')} fill="none" stroke="#110e17" strokeWidth={112*276/1050} strokeLinejoin="round"/>
    {RAVINE_CROSSINGS.map((p,i)=><g key={`crossing-${i}`} transform={`translate(${muspelheimMapPoint(p.x,p.z).x},${muspelheimMapPoint(p.x,p.z).y}) rotate(${-Math.atan2(p.tx,p.tz)*180/Math.PI})`}><rect x="-1.5" y="-11" width="3" height="22" fill="#d2b38b" stroke="#251b18" strokeWidth=".7"/></g>)}
    <polyline points={MINE_PATH.map(p=>{const m=muspelheimMapPoint(p.x,p.z);return `${m.x},${m.y}`;}).join(' ')} fill="none" stroke="#d9aa66" strokeWidth="2"/>
    <circle cx={muspelheimMapPoint(MINE_DOOR.x,MINE_DOOR.z).x} cy={muspelheimMapPoint(MINE_DOOR.x,MINE_DOOR.z).y} r="3" fill="#ffb754"/><text x={muspelheimMapPoint(MINE_DOOR.x,MINE_DOOR.z).x+5} y={muspelheimMapPoint(MINE_DOOR.x,MINE_DOOR.z).y} fontSize="8" fill="#ffe2ac">Шахта</text>
    {CANYON_RIDGE_LAYOUT.map((p,i)=><g key={`ridge-${i}`} transform={`translate(${muspelheimMapPoint(p.x,p.z).x},${muspelheimMapPoint(p.x,p.z).y})`}><path d="M -8 3 L -4 -3 L 0 0 L 4 -5 L 8 3 Z" fill="#655b66" stroke="#a9999d" strokeWidth=".7"/><text y="12" textAnchor="middle" fill="#ffe2ac" fontSize="7">Хребет</text></g>)}
    {SURT_RAVINE_SITES.map((p,i)=><circle key={`ravine-${i}`} cx={muspelheimMapPoint(p.x,p.z).x} cy={muspelheimMapPoint(p.x,p.z).y} r="3" fill="#554454"/>)}
    {roadLines().map((line,i)=><polyline key={`road-${i}`} points={line.map(p=>{const m=muspelheimMapPoint(p.x,p.z);return `${m.x},${m.y}`;}).join(' ')} fill="none" stroke="#c6a787" strokeWidth={ROAD_WIDTH*276/1050} strokeLinecap="round" strokeLinejoin="round"/>)}
    {[-1,1].map(side=><polyline key={side} points={rockWallLayout(GATEWAY_WALL_ANCHOR).filter(r=>r.section==='entrance'&&Math.sign(r.x-GATEWAY_POSITION.x)===side).map(r=>{const p=muspelheimMapPoint(r.x,r.z);return `${p.x},${p.y}`;}).join(' ')} fill="none" stroke="#77777c" strokeWidth="5" strokeLinecap="round"/>)}
    <rect x={muspelheimMapPoint(-224,161).x} y={muspelheimMapPoint(-224,161).y} width={448*276/1050} height={70*276/1050} fill="#140d14"/>
    <path d={`M ${muspelheimMapPoint(0,158).x} ${muspelheimMapPoint(0,158).y} V ${muspelheimMapPoint(0,234).y}`} stroke="#a5a7ad" strokeWidth="5"/>
    <path d={`M ${muspelheimMapPoint(GATEWAY_POSITION.x,GATEWAY_POSITION.z).x-4} ${muspelheimMapPoint(GATEWAY_POSITION.x,GATEWAY_POSITION.z).y} h 8`} stroke="#ff8e35" strokeWidth="4"/>
    <g transform={`translate(${muspelheimMapPoint(VOLCANO_POSITION.x,VOLCANO_POSITION.z).x},${muspelheimMapPoint(VOLCANO_POSITION.x,VOLCANO_POSITION.z).y})`}><path d="M -12 9 L -5 -8 L 5 -8 L 12 9 Z" fill="#6c4c40" stroke="#ee9b58" strokeWidth="1.5"/><path d="M -5 -8 Q 0 -3 5 -8" fill="none" stroke="#ff632c" strokeWidth="2"/><text y="22" textAnchor="middle" fill="#ffe2ac" fontSize="9">Вулкан</text></g>
    <g transform={`translate(${muspelheimMapPoint(ICE_SANCTUARY_POSITION.x,ICE_SANCTUARY_POSITION.z).x},${muspelheimMapPoint(ICE_SANCTUARY_POSITION.x,ICE_SANCTUARY_POSITION.z).y})`}><path d="M -10 4 V -5 Q 0 -15 10 -5 V 4 M -7 4 V -4 M 7 4 V -4" fill="none" stroke="#bceeff" strokeWidth="2"/><text y="16" textAnchor="middle" fill="#bceeff" fontSize="8">Ледяное святилище</text></g>
    <g transform={`translate(${muspelheimMapPoint(NORNS_WELL_POSITION.x,NORNS_WELL_POSITION.z).x},${muspelheimMapPoint(NORNS_WELL_POSITION.x,NORNS_WELL_POSITION.z).y})`}><rect x="-5" y="-7" width="10" height="12" fill="#61525e" stroke="#8de4ed"/><circle r="2.5" fill="#6bd2e9"/><text y="16" textAnchor="middle" fill="#c6f5ff" fontSize="8">Колодец трёх норн</text></g>
    <g transform={`translate(${muspelheimMapPoint(ASH_VOLCANO_POSITION.x,ASH_VOLCANO_POSITION.z).x},${muspelheimMapPoint(ASH_VOLCANO_POSITION.x,ASH_VOLCANO_POSITION.z).y})`}><path d="M -8 6 L -3 -5 L 3 -5 L 8 6 Z" fill="#55505a" stroke="#b18e7b"/><path d="M 0 -5 Q -8 -12 1 -17 Q 8 -21 2 -25" fill="none" stroke="#a69c9e" strokeWidth="4" opacity=".7"/><text y="16" textAnchor="middle" fill="#ffe2ac" fontSize="8">Огненная башня</text></g>
    <g transform={`translate(${muspelheimMapPoint(EAST_VOLCANO_POSITION.x,EAST_VOLCANO_POSITION.z).x},${muspelheimMapPoint(EAST_VOLCANO_POSITION.x,EAST_VOLCANO_POSITION.z).y})`}><path d="M -9 7 L -4 -5 L 4 -5 L 9 7 Z" fill="#414149" stroke="#b18e7b"/><path d="M -4 -5 Q 0 -1 4 -5" fill="none" stroke="#ff702f" strokeWidth="1.5"/><text y="17" textAnchor="middle" fill="#ffe2ac" fontSize="8">Второй вулкан</text></g>
    <g transform={`translate(${muspelheimMapPoint(SURT_TOWER_POSITION.x,SURT_TOWER_POSITION.z).x},${muspelheimMapPoint(SURT_TOWER_POSITION.x,SURT_TOWER_POSITION.z).y})`}><rect x="-5" y="-7" width="10" height="11" fill="#d4c3a1" stroke="#352820"/><text x="9" y="-5" fill="#ffe2ac" fontSize="8">Дом Сурта</text></g>
    <g transform={`translate(${muspelheimMapPoint(YMIR_PILLAR_POSITION.x,YMIR_PILLAR_POSITION.z).x},${muspelheimMapPoint(YMIR_PILLAR_POSITION.x,YMIR_PILLAR_POSITION.z).y})`}><path d="M -2 5 V -5 H -5 L 0 -8 L 5 -5 H 2 V 5 Z" fill="#d6cedc" stroke="#d7b66b"/><text x="8" y="5" fontSize="8" fill="#eee0ff">Память Имира</text></g>
    <g transform={`translate(${muspelheimMapPoint(DARK_VAULT_POSITION.x,DARK_VAULT_POSITION.z).x},${muspelheimMapPoint(DARK_VAULT_POSITION.x,DARK_VAULT_POSITION.z).y})`}><path d="M -6 5 V -4 L 0 -8 L 6 -4 V 5 Z" fill="#766d79" stroke="#cab8cf"/><text x="9" y="-6" fill="#e5c9ed" fontSize="8">Хранилище тёмных нитей</text></g>
    <g transform={`translate(${muspelheimMapPoint(FORTRESS_POSITION.x,FORTRESS_POSITION.z).x},${muspelheimMapPoint(FORTRESS_POSITION.x,FORTRESS_POSITION.z).y})`}><rect x={-FORTRESS_SIZE.width*276/1050/2} y={-FORTRESS_SIZE.depth*276/1050/2} width={FORTRESS_SIZE.width*276/1050} height={FORTRESS_SIZE.depth*276/1050} fill="#ac8b63" fillOpacity=".2" stroke="#e8bc7e"/><text y={FORTRESS_SIZE.depth*276/1050/2+10} textAnchor="middle" fill="#ffe2ac" fontSize="8">Крепость Пепельного легиона</text></g>
    <g transform={`translate(${muspelheimMapPoint(ARMY_TOWER_POSITION.x,ARMY_TOWER_POSITION.z).x},${muspelheimMapPoint(ARMY_TOWER_POSITION.x,ARMY_TOWER_POSITION.z).y})`}><rect x="-4" y="-6" width="8" height="12" fill="#aaa39c"/><text x="-8" y="-10" textAnchor="end" fill="#ffe2ac" fontSize="8">Резиденция Владыки</text></g>
    <g transform={`translate(${muspelheimMapPoint(FORGE_POSITION.x,FORGE_POSITION.z).x},${muspelheimMapPoint(FORGE_POSITION.x,FORGE_POSITION.z).y})`}><rect x="-4" y="-4" width="8" height="8" fill="#ffad53"/><text x="8" y="3" fill="#ffe2ac" fontSize="8">Кузница</text></g>
    <circle cx={muspelheimMapPoint(position.current.x,position.current.z).x} cy={muspelheimMapPoint(position.current.x,position.current.z).y} r="4" fill="#ffd45f"/>
   </svg>
   <p style={{fontSize:12}}>Основная земля за вратами расширена: вдвое в ширину и в полтора раза вглубь. Светло-коричневые линии — дороги по предварительной схеме. Золотая точка — Vicki. Серые дуги — скальный хребет и ограда у входа. Оранжевая отметка — первые врата. Светлая полоса — мост над огненной бездной Гиннунгагап. Тёмный изгиб перед вулканом — глубокое базальтовое ущелье с площадками для будущих испытаний. Две бежевые отметки — подвесные мосты над пучиной. Падение смертельно и возвращает к началу спуска; задания и предметы сохраняются. Спуск — на южном берегу западнее середины ущелья; подъём к вулкану — на противоположном берегу дальше по дну.</p><h4>Авторство моделей</h4><p style={{fontSize:12}}>Страж озера в шахте: <a href={OCEAN_GUARDIAN_CREDIT.url} target="_blank" rel="noopener noreferrer">{OCEAN_GUARDIAN_CREDIT.title} — {OCEAN_GUARDIAN_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Модель уменьшена, текстуры оптимизированы, сохранены скелет и исходное движение; добавлены удары щупальцами и попытки захвата.</p><p style={{fontSize:12}}><a href={MINE_DOOR_CREDIT.url} target="_blank" rel="noopener noreferrer">{MINE_DOOR_CREDIT.title} — {MINE_DOOR_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Текстуры оптимизированы; сохранены авторские каменная арка, створка и фурнитура. Модель уменьшена и установлена в пещере, добавлено задвигание створки в скалу.</p><p style={{fontSize:12}}>Золото шахты: <a href="https://sketchfab.com/3d-models/ingot-a0c5694aa57e4c1390ff13364bc8ee7e" target="_blank" rel="noopener noreferrer">Ingot — masterm_3</a>; <a href="https://sketchfab.com/3d-models/coins-7367feabcd4c4b30a7ba64b95b76bee0" target="_blank" rel="noopener noreferrer">Coins!!! — Xillute | Dev</a> (<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>). Использованы копии с равномерным масштабом и поворотом. Пропорции, рельеф, материалы и текстуры сохранены.</p><p style={{fontSize:12}}>Кристаллы шахты: <a href="https://sketchfab.com/3d-models/mineral-fluorite-5ed87d4487be495aac0a86632eb3880c" target="_blank" rel="noopener noreferrer">Mineral: Fluorite — Digital Atlas of Ancient Life</a> (CC0); <a href="https://sketchfab.com/3d-models/ruby-stack-4f0c04c7dd72459ba1713cf66446f00e" target="_blank" rel="noopener noreferrer">Ruby Stack — Xillute | Dev</a>; <a href="https://sketchfab.com/3d-models/low-poly-crystal-game-ready-asset-b81e123c408a49b5b5becabf64ee44b5" target="_blank" rel="noopener noreferrer">Low poly Crystal</a> и <a href="https://sketchfab.com/3d-models/red-crystal-game-ready-asset-72288e33ef774a17a377bc0bd6de18b8" target="_blank" rel="noopener noreferrer">Red Crystal — Pixel Life</a> (<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>). Модели уменьшены, текстуры оптимизированы, добавлено сияние; геометрия флюорита упрощена.</p><p style={{fontSize:12}}><a href="https://sketchfab.com/3d-models/mine-cart-gem-98cad9f6a0364a36bc69127f94ed32ee" target="_blank" rel="noopener noreferrer">Mine Cart Gem! — Xillute | Dev</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Масштаб и положение изменены для установки на рельсы.</p><p style={{fontSize:12}}><a href="https://sketchfab.com/3d-models/train-track-modular-pack-e662a834e5fb4b65ad4f8194f8af515b" target="_blank" rel="noopener noreferrer">Train Track — Modular Pack · Digital Goblin</a>. CC BY 4.0. Прямой участок выделен из набора, уменьшен и изогнут по тоннелю; материал адаптирован.</p><p style={{fontSize:12}}><a href="https://sketchfab.com/3d-models/magical-abandoned-mine-7ae4754b0db74ba884072215b5d013f5" target="_blank" rel="noopener noreferrer">Magical Abandoned Mine — WarderiiK</a>. CC BY 4.0. Текстуры уменьшены; скалы и рельсы использованы для продолжения шахты.</p>
   <p style={{fontSize:12}}>Дороги: <a href={COBBLE_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{COBBLE_CREDIT.title} — {COBBLE_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Извлечены карты материала, сжаты текстуры, добавлен слабый голубой ореол над дорогой.</p>
   <p style={{fontSize:12}}>Вулкан: <a href={VOLCANO_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{VOLCANO_CREDIT.title} — {VOLCANO_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Упрощена геометрия, сжата текстура; изменены масштаб и положение.</p>
   <p style={{fontSize:12}}>Хребты каньона: <a href={CANYON_RIDGE_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{CANYON_RIDGE_CREDIT.title} — {CANYON_RIDGE_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Материал преобразован, текстура сжата; добавлены копии с разной высотой и ориентацией, склоны сглажены для ходьбы, основания подогнаны к земле.</p>
   <p style={{fontSize:12}}>Огненные снаряды: <a href={FIRE_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{FIRE_CREDIT.title} — {FIRE_CREDIT.author}</a>, CC0. Кадры собраны в атлас, добавлены траектории и отметки падения.</p>
   <p style={{fontSize:12}}>Утраченная память Имира: <a href={YMIR_PILLAR_CREDIT.url} target="_blank" rel="noopener noreferrer">{YMIR_PILLAR_CREDIT.title} — {YMIR_PILLAR_CREDIT.author}</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Сетка и UV сохранены; текстуры уменьшены до 512 пикселей и сжаты в JPEG. Изменены масштаб и положение, основание слегка утоплено в землю.</p>
   <p style={{fontSize:12}}>Хранилище тёмных нитей: <a href={DARK_VAULT_CREDIT.url} target="_blank" rel="noopener noreferrer">{DARK_VAULT_CREDIT.title} — {DARK_VAULT_CREDIT.author}</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Объединены части сетки, выполнено упрощение с сохранением UV, пересчитаны нормали, сжаты текстуры; глубина увеличена в 2,25 раза до квадратного основания. Изменены масштаб, поворот и оттенок камня; основание слегка утоплено в землю, добавлен пологий каменный подход.</p>
   <p style={{fontSize:12}}>Древняя крепость: <a href={FORTRESS_CREDIT.url} target="_blank" rel="noopener noreferrer">{FORTRESS_CREDIT.title} — {FORTRESS_CREDIT.author}</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Удалены белые демонстрационные надписи и неиспользуемые образцы; сетки упрощены, текстуры сжаты с сохранением прозрачности. Из отдельных ворот, повторяемых стен, лестницы и бастионов собрана расширенная крепость Пепельного легиона с тремя проходами и большим двором; изменены масштаб, положение и оттенок материалов, добавлена каменная кладка двора.</p>
   <p style={{fontSize:12}}>Башня войска Сурта: <a href={ARMY_TOWER_CREDIT.url} target="_blank" rel="noopener noreferrer">{ARMY_TOWER_CREDIT.title} — {ARMY_TOWER_CREDIT.author}</a>, CC BY 4.0. Растительность удалена, трава заменена камнем, сетка упрощена, текстуры сжаты; изменены масштаб, положение и оттенок камня. Сохранены отдельные дверные створки. Башня перенесена в глубину крепости, лестница обращена во двор; будущая резиденция Владыки Пепельного легиона, Хранителя Вечного Жара.</p>
   <p style={{fontSize:12}}>Кузница: <a href={FORGE_CREDIT.url} target="_blank" rel="noopener noreferrer">{FORGE_CREDIT.title} — {FORGE_CREDIT.author}</a>, CC BY 4.0. Сетка упрощена, текстура сжата; изменены масштаб и положение, исходная деревянная дверь отделена и снабжена шарниром для открытия.</p>
   <p style={{fontSize:12}}>Ледяное святилище: <a href={ICE_SANCTUARY_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#bceeff'}}>{ICE_SANCTUARY_CREDIT.title} — {ICE_SANCTUARY_CREDIT.author}</a>, CC BY 4.0. Удалены отдельные вынесенные предметы и вспомогательные линии, упрощена сетка; изменены масштаб, положение и материал — лёд, иней и голубое свечение.</p>
   <p style={{fontSize:12}}>Колодец трёх норн: <a href={NORNS_WELL_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{NORNS_WELL_CREDIT.title} — {NORNS_WELL_CREDIT.author}</a>, CC BY 4.0. Сетка упрощена, текстуры сжаты, масштаб и положение изменены; добавлена чаша с водой и защита под крышей.</p>
   <p style={{fontSize:12}}>Странница: <a href={STRANGER_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{STRANGER_CREDIT.title} — {STRANGER_CREDIT.author}</a>, CC BY 4.0. Общая модель со Странницей предыдущих миров: скрыты мечи и плащ, изменены поза и масштаб, добавлены дыхание и поворот к Vicki.</p>
   <p style={{fontSize:12}}>Вулканическая башня: <a href={ASH_VOLCANO_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{ASH_VOLCANO_CREDIT.title} — {ASH_VOLCANO_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Упрощена сетка и сжаты текстуры; модель перенесена в центр, вытянута вверх, основание заглублено, цвет лавы изменён, добавлено движение дыма.</p>
   <p style={{fontSize:12}}>Второй вулкан: <a href={EAST_VOLCANO_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{EAST_VOLCANO_CREDIT.title} — {EAST_VOLCANO_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Упрощена сетка, сжаты текстуры; изменены масштаб и положение, задний склон расширен к стене, камень затемнён, лава перекрашена в оранжевый.</p>
   <p style={{fontSize:12}}>Дом Сурта: <a href={SURT_TOWER_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{SURT_TOWER_CREDIT.title} — {SURT_TOWER_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Упрощена сетка, сжаты текстуры; изменены масштаб и положение, башня поднята над склоном вулкана и сдвинута к задней стене.</p>
   <p style={{fontSize:12}}>Трон Сурта: <a href={SURT_THRONE_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{SURT_THRONE_CREDIT.title} — {SURT_THRONE_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Упрощена сетка, сжаты текстуры; изменены масштаб и положение.</p>
   {ROCK_CREDITS.map(c=><p key={c.author} style={{fontSize:12}}><a href={c.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{c.title} — {c.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>.</p>)}
   <p style={{fontSize:12}}>Проход: <a href={GATEWAY_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{GATEWAY_CREDIT.title} — {GATEWAY_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>.</p>
   <p style={{fontSize:12}}>Круглая дверь: <a href="https://www.cgtrader.com/items/1933395/download-page" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>Entrance Door to Chamber — CGTrader</a>. Предоставлена для проекта; оптимизирована, разделена на створки, добавлены шарниры и открытие, изменены цвет и размещение.</p>
   <p style={{fontSize:12}}>Факелы: <a href={TORCH_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{TORCH_CREDIT.title} — {TORCH_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Сжаты текстуры с сохранением прозрачности пламени, уменьшен масштаб, добавлены крепления к колоннам, мерцание и сияние.</p>
   <p style={{fontSize:12}}>Подвесной мост: <a href={RAVINE_BRIDGE_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{RAVINE_BRIDGE_CREDIT.title} — {RAVINE_BRIDGE_CREDIT.author}</a>. CC BY 4.0. Убраны верхние канаты и стойки, сжаты текстуры, изменены пропорции; повреждённый настил сохранён.</p>
   <p style={{fontSize:12}}>Мост: <a href={BRIDGE_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{BRIDGE_CREDIT.title} — {BRIDGE_CREDIT.author}</a>. CC BY 4.0. Упрощён, сжаты текстуры, изменены пропорции, добавлена готическая каменная текстура, созданная для Yggdrasil.</p>
   <p style={{fontSize:11}}>Изменения: добавлены десять каменных пиков из трёх моделей скал с разной высотой, сужением к вершине и слоистой базальтовой текстурой; основания заглублены. Упрощена геометрия, сжаты текстуры, материал приведён к тёмному базальту, мох обесцвечен и затемнён; изменены масштаб и размещение.</p><button className="muspelheim-btn" onClick={()=>setMapOpen(false)}>Закрыть карту</button></div></div>}
  <button className="muspelheim-btn" style={{position:'absolute',bottom:128,right:18,touchAction:'none'}} aria-label="Удерживать для бега" onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);sprint.current=true;}} onPointerUp={()=>{sprint.current=false;}} onPointerCancel={()=>{sprint.current=false;}} onLostPointerCapture={()=>{sprint.current=false;}}>Бег ⚡</button>
  {nearForge&&!mapOpen&&!gate&&!keeperDialog&&!wellDialog&&!defeated&&<button className="muspelheim-btn primary" style={{position:'absolute',bottom:190,right:16}} onClick={()=>{stop();openForge.current();}}>Войти в кузницу</button>}
  {nearStranger&&!mapOpen&&!gate&&!keeperDialog&&!wellDialog&&!defeated&&<button className="muspelheim-btn primary" style={{position:'absolute',bottom:190,right:16}} onClick={()=>{stop();openWell.current();}}>Поговорить со Странницей</button>}
  {wellDialog&&<div className="muspelheim-gate-backdrop"><div className="muspelheim-gate-panel" role="dialog" aria-label="Странница у колодца трёх норн"><h3>Странница девяти миров</h3><p>«Здесь, под сводами колодца норн, ты защищена от огненного дождя. Переведи дух».</p><p>«Обычный холод не удержит первозданный огонь Сурта. Твоему оружию нужна закалка двух стихий: огонь поможет выдержать его меч, а холод — ослабить пламя. Найди утраченную память о первой закалке».</p><button className="muspelheim-btn" onClick={()=>setWellDialog(false)}>Продолжить путь</button></div></div>}
  {nearMine&&!mapOpen&&!gate&&!keeperDialog&&<button className="muspelheim-btn primary" style={{position:'absolute',bottom:190,right:16}} onClick={()=>{stop();if(!mineOpen)openMine.current();else props.onEnterMine();}}>{mineOpen?'Войти в пепельную шахту':'Открыть дверь шахты'}</button>}
  {nearKeeper&&!mapOpen&&!gate&&!keeperDialog&&<button className="muspelheim-btn primary" style={{position:'absolute',bottom:190,right:16}} onClick={()=>{stop();setKeeperDialog(true);}}>Хранитель врат</button>}
  {defeated&&<div className="muspelheim-gate-backdrop"><div className="muspelheim-gate-panel" role="dialog" aria-label="Vicki потеряла силы"><h3>Vicki потеряла силы</h3><p>Огненный удар пробил броню. Задания и предметы сохранены.</p><button className="muspelheim-btn" onClick={()=>respawn.current()}>Восстановиться у первых врат</button></div></div>}
  {keeperDialog&&<div className="muspelheim-gate-backdrop"><div className="muspelheim-gate-panel" role="dialog" aria-label="Хранитель огненных врат"><h3>Хранитель огненных врат</h3><p>{props.minePaid?'Огненное золото принято. Путь к Сурту открыт.':'Для прохода к Сурту принеси '+FIRE_GOLD_COST+' огненного золота из пепельной шахты в ущелье. Победи её охрану и забери запас из сокровищницы.'}</p><p>Огненное золото: {props.fireGold}</p><div className="muspelheim-gate-actions">{!props.minePaid&&<button className="muspelheim-btn primary" disabled={props.fireGold<FIRE_GOLD_COST} onClick={()=>{props.onPayKeeper();setStatus('Огненное золото передано хранителю. Путь к Сурту открыт.');setKeeperDialog(false);}}>Передать {FIRE_GOLD_COST} золота</button>}<button className="muspelheim-btn" onClick={()=>setKeeperDialog(false)}>Продолжить</button></div></div></div>}
  {gate&&<div className="muspelheim-gate-backdrop" onClick={()=>setGate(false)}><div className="muspelheim-gate-panel" role="dialog" aria-modal="true" aria-label="Первые врата Муспельхейма" onClick={e=>e.stopPropagation()}>
   <h3>Первые врата</h3>
   <p>{props.gateOpen?'Кристалл установлен. Врата открываются при приближении с любой стороны.':props.canOpenGate?'Установи Кристалл первозданной воды во врата.':props.assembled&&!props.briefed?'Поговори со Странницей девяти миров в Нифльхейме о Муспельхейме.':'Получи Кристалл первозданной воды в Нифльхейме и поговори со Странницей.'}</p>
   <p>{props.minePaid?'Хранитель принял огненное золото. Путь к Сурту открыт.':'Для пути к Сурту найди пепельную шахту в ущелье и принеси хранителю у замка огненное золото.'}</p><div className="muspelheim-gate-actions">{props.gateOpen?<button className="muspelheim-btn primary" disabled={!props.minePaid} onClick={props.onTrial}>Испытание Сурта</button>:<button className="muspelheim-btn primary" disabled={!props.canOpenGate} onClick={props.onInstallCrystal}>Вставить кристалл</button>}<button className="muspelheim-btn" onClick={()=>setGate(false)}>Продолжить</button></div>
  </div></div>}

 </section>;
}
