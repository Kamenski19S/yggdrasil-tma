import {OCEAN_GUARDIAN_CREDIT} from './ashMineGuardian';
import {MINE_DOOR_ASSET,MINE_DOOR_CREDIT} from './ashMineDoor';
import {carveMineApproach,mineApproachFloorAt,mineApproachSideBlocks,mineApproachCameraAt,mineApproachRocks,createMineEntrance,MINE_DOOR,MINE_PATH} from './muspelheimMineEntrance';
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
import {BASE,cachedGlbBuffer} from './core';
import {createTerrainSampler,clampMuspelheimPosition,expandMuspelheimTerrain,muspelheimMapPoint,WORLD_OUTLINE} from './muspelheimTerrain';
import {configureMuspelheimGround} from './muspelheimGround';
import {COBBLE_CREDIT} from './muspelheimCobble';
import {createRoadGlow} from './muspelheimRoadGlow';
import {roadLines,ROAD_WIDTH} from './muspelheimRoads';
import {GATEWAY_ASSETS,GATEWAY_CREDIT,GATEWAY_POSITION,GATEWAY_SCALE,createMuspelheimGateway,type MuspelheimGateway} from './muspelheimGateway';
import {screenMoveToWorld,updateFollowCamera,safeCameraOffset,terrainSafeCameraPosition,type FollowCameraState} from './muspelheimCamera';
import {ROCK_ASSETS,ROCK_CREDITS,rockWallLayout,rockWallBlocks,moveAlongRockWalls,makeBasaltWall} from './muspelheimRockWalls';

const GATEWAY_WALL_ANCHOR={x:GATEWAY_POSITION.x,z:GATEWAY_POSITION.z-20*GATEWAY_SCALE,halfWidth:41*GATEWAY_SCALE};

export type Props={onEnterMine:()=>void;startPosition?:{x:number;z:number};minePaid:boolean;fireGold:number;onPayKeeper:()=>void;gateOpen:boolean;canOpenGate:boolean;assembled:boolean;briefed:boolean;onInstallCrystal:()=>void;onTrial:()=>void};
function dispose(root:THREE.Object3D){
 const textures=new Set<THREE.Texture>(),materials=new Set<THREE.Material>(),geometries=new Set<THREE.BufferGeometry>();
 root.traverse(o=>{if(o instanceof THREE.Mesh||o instanceof THREE.Points||o instanceof THREE.Sprite){if(o instanceof THREE.Mesh||o instanceof THREE.Points)geometries.add(o.geometry);if(o instanceof THREE.InstancedMesh)o.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){materials.add(m);Object.values(m).forEach(v=>{if(v instanceof THREE.Texture)textures.add(v);});}}});
 geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());
}
export default function Muspelheim3D(props:Props){
 const sprint=useRef(false);
 const host=useRef<HTMLDivElement>(null),input=useRef({x:0,z:0}),position=useRef({...props.startPosition??BRIDGE_SPAWN});
 const [nearMine,setNearMine]=useState(false),[mineOpen,setMineOpen]=useState(false),[keeperDialog,setKeeperDialog]=useState(false),[nearKeeper,setNearKeeper]=useState(false),[status,setStatus]=useState('Загрузка площадки Муспельхейма…'),[retry,setRetry]=useState(0),[failed,setFailed]=useState(false),[gate,setGate]=useState(false),[mapOpen,setMapOpen]=useState(false);
 const viewYaw=useRef(0),controlYaw=useRef(0),gateIsOpen=useRef(props.gateOpen);gateIsOpen.current=props.gateOpen;
 const paused=useRef(false);paused.current=gate||mapOpen||keeperDialog;
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
  const lava=createChasmLava();scene.add(lava.mesh);let bridge:ReturnType<typeof createEntranceBridge>|undefined;
  const wallRocks=rockWallLayout(GATEWAY_WALL_ANCHOR),ravineRocks=[...ravineRockLayout(),...mineApproachRocks()];
  const mineEntrance=createMineEntrance(`${BASE}img/`);scene.add(mineEntrance.root);openMine.current=()=>{mineEntrance.open();setMineOpen(true);};
  const keeper=createAshDwarf('keeper');keeper.root.scale.setScalar(1.5);keeper.root.position.set(-301,40,-366);scene.add(keeper.root);let proximityTimer=0;
  let mineDoorReady=false;let crossingReady=false,transitioningMine=false,mineCameraActive=false;
  let falling=false,fallVelocity=0,fallTime=0,respawnNotice=0,ravineVisited=false,snapCamera=false;
  const follow:FollowCameraState={yaw:viewYaw.current,targetYaw:viewYaw.current,turnTime:0};
  let throne:ReturnType<typeof createSurtThrone>|undefined;
  let tower:ReturnType<typeof createSurtTower>|undefined,towerSource:THREE.Object3D|undefined;
  let volcano:ReturnType<typeof createMuspelheimVolcano>|undefined;
  let summit:ReturnType<typeof createSummitFloor>|undefined,summitReady=false;
  let roadGlow:ReturnType<typeof createRoadGlow>|undefined;
  let roadMask:ReturnType<typeof configureMuspelheimGround>|undefined;
  let terrainReady=false,bridgeTextureReady=false,torchesReady=false,torchSource:THREE.Object3D|undefined,heroReady=false,wallsReady=0,loadError=false,entrance:MuspelheimGateway|undefined;
  const entranceAssets:Array<THREE.Object3D|undefined>=[];
  const blocked=(x:number,z:number)=>mineApproachSideBlocks(x,hero.position.y,z)||mineEntrance.blocks(x,z,hero.position.y)||chasmBlocks(x,z)||(throne?.blocks(x,z)??false)||(tower?.blocks(x,z)??false)||rockWallBlocks(wallRocks,x,z,2,hero.position.y)||ravineRockBlocks(ravineRocks,x,hero.position.y,z)||(entrance?.blocks(x,z)??false);
  const heightAt=(x:number,z:number)=>{const approach=mineApproachFloorAt(x,z);if(approach!=null)return approach;const paved=summit?.floorAt(x,z);if(paved!=null)return paved;const base=sample?.(x,z);if(base==null)return null;const crossing=ravineBridgeFloorAt(x,z);if(crossing!=null)return Math.max(base,crossing);const deck=bridge?.floorAt(x,z);if(deck!=null)return Math.max(base,deck);const surface=Math.max(base,volcano?.floorAt(x,z)??base,summit?.floorAt(x,z)??base);return entrance?.floorAt(x,z,surface)??surface;};
  const loadingTimeout=window.setTimeout(()=>{if(alive&&!loadError){loadError=true;setStatus(heroReady?'Загрузка мира затянулась. Повтори загрузку.':'Загрузка Vicki затянулась. Повтори загрузку.');setFailed(true);}},60000);
  const ready=()=>{if(mineDoorReady&&crossingReady&&terrainReady&&heroReady&&volcano&&tower&&throne&&summitReady&&wallsReady===ROCK_ASSETS.length&&entrance&&bridge&&bridgeTextureReady&&torchesReady&&!loadError){window.clearTimeout(loadingTimeout);setStatus('Гиннунгагап · Мост к первым вратам.');}else if(!loadError)setStatus(heroReady?'Загрузка окружения Муспельхейма…':'Загрузка Vicki…');};
  const bridgeTexture=new THREE.TextureLoader().load(`${BASE}img/${BRIDGE_TEXTURE}`,()=>{if(!alive){bridgeTexture.dispose();return;}bridgeTextureReady=true;ready();},undefined,()=>{if(alive){loadError=true;setStatus('Текстура моста не загрузилась. Повтори загрузку.');setFailed(true);}});
  bridgeTexture.colorSpace=THREE.SRGBColorSpace;bridgeTexture.wrapS=bridgeTexture.wrapT=THREE.RepeatWrapping;bridgeTexture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
  const attachTorches=()=>{if(!entrance||!torchSource||torchesReady)return;entrance.mountTorches(torchSource);torchSource.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});torchSource=undefined;torchesReady=true;ready();};
  const loader=new GLTFLoader();
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
   if(i)idle=mixer.clipAction(i);if(w)walk=mixer.clipAction(w);const r=find('run_loop','run','sprint');if(r)run=mixer.clipAction(r);idle?.play();current=idle;heroReady=true;ready();
  }).catch(()=>{if(alive){loadError=true;setStatus('Vicki не загрузилась. Проверь соединение и повтори.');setFailed(true);}});
  const attachTower=()=>{if(!volcano||!towerSource||tower)return;tower=createSurtTower(towerSource);scene.add(tower.root);towerSource=undefined;summit=createSummitFloor(`${BASE}img/`,renderer.capabilities.getMaxAnisotropy(),volcano.root,tower.buildingBounds);scene.add(summit.root);summit.ready.then(()=>{if(alive){summitReady=true;ready();}},()=>{if(alive){loadError=true;setStatus('Кладка у замка не загрузилась. Повтори загрузку.');setFailed(true);}});ready();};
  loader.load(`${BASE}img/models/${SURT_THRONE_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}throne=createSurtThrone(g.scene);scene.add(throne.root);ready();},undefined,()=>{if(alive){loadError=true;setStatus('Трон Сурта не загрузился. Повтори загрузку.');setFailed(true);}});
  loader.load(`${BASE}img/models/${SURT_TOWER_ASSET}`,g=>{if(!alive){dispose(g.scene);return;}towerSource=g.scene;attachTower();},undefined,()=>{if(alive){loadError=true;setStatus('Башня Сурта не загрузилась. Повтори загрузку.');setFailed(true);}});
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
   const wall=makeBasaltWall(g.scene,kind,[...wallRocks,...ravineRocks],renderer.capabilities.getMaxAnisotropy());scene.add(wall);
   // Instanced walls own copied geometry/material; their textures are shared.
   g.scene.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});
   wallsReady++;ready();
  },undefined,()=>{if(alive){loadError=true;setStatus('Скалы не загрузились. Проверь соединение и повтори.');setFailed(true);}}));
  loader.load(`${BASE}img/models/Muspelheim_Terrain_300m.glb`,g=>{
   if(!alive){dispose(g.scene);return;}
   g.scene.scale.multiply(new THREE.Vector3(1.75,1,1.75));
   expandMuspelheimTerrain(g.scene);
   carveEntranceChasm(g.scene);
   carveSurtRavine(g.scene,ravinePitDepth);
   carveMineApproach(g.scene);
   roadMask=configureMuspelheimGround(g.scene,renderer.capabilities.getMaxAnisotropy(),`${BASE}img/`);
   scene.add(g.scene);g.scene.name='Muspelheim editable terrain';sample=createTerrainSampler(g.scene);
   roadGlow=createRoadGlow(sample,renderer.getDrawingBufferSize(new THREE.Vector2()).y);scene.add(roadGlow.points);
   roadMask.ready.then(()=>{if(alive){terrainReady=true;ready();}},()=>{if(alive){loadError=true;setStatus('Покрытие дороги не загрузилось. Повтори загрузку.');setFailed(true);}});
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
   if(!falling&&crossingReady&&length&&terrainReady&&heroReady&&volcano&&tower&&throne&&summitReady&&entrance&&bridge&&bridgeTextureReady&&torchesReady&&!loadError&&wallsReady===ROCK_ASSETS.length&&!document.hidden&&!paused.current){x/=Math.max(1,length);z/=Math.max(1,length);const world=screenMoveToWorld(x,z,controlYaw.current);x=world.x;z=world.z;const p=moveAlongRockWalls(wallRocks,position.current,clampMuspelheimPosition(position.current.x+x*speed*dt,position.current.z+z*speed*dt),hero.position.y);let next=p;if(blocked(p.x,p.z)){const from=position.current;next=!blocked(p.x,from.z)?{x:p.x,z:from.z}:!blocked(from.x,p.z)?{x:from.x,z:p.z}:from;}const y=heightAt(next.x,next.z);
    const inRavine=Math.min(sample?.(position.current.x,position.current.z)??0,sample?.(next.x,next.z)??0)<-1&&next.z<30;
    const step=inRavine?classifyRavineStep(heightAt,position.current,next,isRavineAbyss):'walk';
    if(step==='fall'){position.current=next;falling=true;fallVelocity=0;fallTime=0;clear();setStatus('Vicki сорвалась в пучину…');}
    else if(step==='walk'&&y!=null&&Math.abs(y-hero.position.y)<(Math.abs(next.x-GATEWAY_POSITION.x)<13*GATEWAY_SCALE&&Math.abs(next.z-GATEWAY_POSITION.z)<42*GATEWAY_SCALE?8*GATEWAY_SCALE:3)){dx=next.x-position.current.x;dz=next.z-position.current.z;moving=Math.hypot(dx,dz)>.00001;position.current=next;if(moving)hero.rotation.y=Math.atan2(dx,dz);}}
   if(falling&&!paused.current&&!document.hidden){
    fallTime+=dt;fallVelocity+=75*dt;hero.position.y-=fallVelocity*dt;
    if(fallTime>1.6){falling=false;fallVelocity=0;snapCamera=true;position.current={...RAVINE_RESTART};clear();respawnNotice=5;setStatus('Vicki погибла в пучине. Путь через ущелье начинается заново. Задания и предметы сохранены.');}
   }
   if(respawnNotice>0&&!paused.current){respawnNotice-=dt;if(respawnNotice<=0)setStatus('Ущелье Сурта · Осторожно: падение в пучину смертельно.');}
   const p=position.current;
   if(!ravineVisited&&terrainReady&&!loadError&&p.z<0&&(sample?.(p.x,p.z)??0)<-8){ravineVisited=true;setStatus('Ущелье Сурта · Падение в пучину смертельно. Держись середины подвесного моста.');}
   hero.position.set(p.x,falling?hero.position.y:heightAt(p.x,p.z)??0,p.z);entrance?.updateProximity(paused.current?0:dt,gateIsOpen.current,p.x,p.z);tower?.updateProximity(paused.current?0:dt,p.x,p.z,minePaid.current);
   mineEntrance.update(paused.current?0:dt);
   if(!transitioningMine&&!falling&&!paused.current&&mineEntrance.canEnter(p.x,hero.position.y,p.z)){transitioningMine=true;clear();enterMine.current();}
keeper.update(clock.elapsedTime);proximityTimer+=dt;if(proximityTimer>.15){proximityTimer=0;setNearMine(mineEntrance.near(p.x,p.z));setNearKeeper(Math.hypot(p.x+308,p.z+368)<24&&hero.position.y>25);}
   if(walk)walk.timeScale=running&&!run?1.6:1;
   const action=moving&&!falling?(running?run??walk:walk):idle;if(action&&action!==current){current?.fadeOut(.18);action.reset().fadeIn(.18).play();current=action;}
   lava.update(paused.current?0:dt);summit?.update(paused.current?0:dt);mixer?.update(dt);viewYaw.current=updateFollowCamera(follow,dx,dz,dt);
   const mineView=mineApproachCameraAt(p.x,hero.position.y,p.z);
   if(mineView){
    const targetPosition=new THREE.Vector3(mineView.position.x,mineView.position.y,mineView.position.z),targetLook=new THREE.Vector3(mineView.target.x,mineView.target.y,mineView.target.z);
    if(!mineCameraActive||snapCamera){camera.position.copy(targetPosition);lookTarget.copy(targetLook);snapCamera=false;}else{camera.position.lerp(targetPosition,1-Math.exp(-6*dt));lookTarget.lerp(targetLook,1-Math.exp(-7*dt));}
    mineCameraActive=true;viewYaw.current=mineView.yaw;follow.yaw=mineView.yaw;follow.targetYaw=mineView.yaw;camera.lookAt(lookTarget);
   }else{
    mineCameraActive=false;
   const offset=safeCameraOffset(p.x,p.z,follow.yaw,(x,z)=>(throne?.blocks(x,z,2)??false)||(tower?.blocks(x,z,2)??false)||rockWallBlocks(wallRocks,x,z,2,hero.position.y+20,0)||ravineRockBlocks(ravineRocks,x,hero.position.y+20,z,2)||(entrance?.blocks(x,z,2)??false));
   const cameraFocus={x:p.x,y:hero.position.y+12,z:p.z};
   const cameraSurface=(x:number,z:number)=>sample?.(x,z)??null;
   const desiredCamera=terrainSafeCameraPosition(cameraFocus,{x:p.x+offset.x,y:hero.position.y+20,z:p.z+offset.z},cameraSurface);
   if(snapCamera){camera.position.set(desiredCamera.x,desiredCamera.y,desiredCamera.z);lookTarget.set(p.x,hero.position.y+3,p.z-18);snapCamera=false;}
   camera.position.lerp(new THREE.Vector3(desiredCamera.x,desiredCamera.y,desiredCamera.z),1-Math.exp(-4.5*dt));
   if((throne?.blocks(camera.position.x,camera.position.z,2)??false)||(tower?.blocks(camera.position.x,camera.position.z,2)??false)||rockWallBlocks(wallRocks,camera.position.x,camera.position.z,2,camera.position.y,0)||ravineRockBlocks(ravineRocks,camera.position.x,camera.position.y,camera.position.z,2)||(entrance?.blocks(camera.position.x,camera.position.z,2)??false))camera.position.set(p.x+offset.x,hero.position.y+20,p.z+offset.z);
   // Smoothing and obstacle fallback can cut through a bank even when the target is safe.
   const clearCamera=terrainSafeCameraPosition(cameraFocus,camera.position,cameraSurface);
   camera.position.set(clearCamera.x,clearCamera.y,clearCamera.z);
   const lookAhead=18*offset.distance/32;lookTarget.lerp(new THREE.Vector3(p.x-Math.sin(follow.yaw)*lookAhead,hero.position.y+3,p.z-Math.cos(follow.yaw)*lookAhead),1-Math.exp(-5*dt));camera.lookAt(lookTarget);   }
   renderer.render(scene,camera);
  }
  tick();return()=>{alive=false;window.clearTimeout(loadingTimeout);cancelAnimationFrame(frame);clear();observer.disconnect();window.removeEventListener('keydown',keydown);window.removeEventListener('keyup',keyup);window.removeEventListener('blur',clear);document.removeEventListener('visibilitychange',clear);mixer?.stopAllAction();for(const asset of entranceAssets)if(asset&&!asset.parent)dispose(asset);if(torchSource)dispose(torchSource);if(towerSource)dispose(towerSource);dispose(scene);summit?.dispose();roadMask?.dispose();bridgeTexture.dispose();renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();};
 },[retry]);
 const pointer=useRef<number|null>(null);
 const move=(e:React.PointerEvent<HTMLDivElement>)=>{if(pointer.current!==e.pointerId)return;const b=e.currentTarget.getBoundingClientRect();input.current={x:THREE.MathUtils.clamp((e.clientX-b.left-b.width/2)/42,-1,1),z:THREE.MathUtils.clamp((e.clientY-b.top-b.height/2)/42,-1,1)};};
 const stop=()=>{pointer.current=null;input.current={x:0,z:0};};
 return <section className="muspelheim-world" style={{position:'relative',flex:1,minHeight:0,overflow:'hidden',background:'#24110e',touchAction:'none'}} aria-label="Муспельхейм">
  <div ref={host} style={{position:'absolute',inset:0}}/>
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
    {SURT_RAVINE_SITES.map((p,i)=><circle key={`ravine-${i}`} cx={muspelheimMapPoint(p.x,p.z).x} cy={muspelheimMapPoint(p.x,p.z).y} r="3" fill="#554454"/>)}
    {roadLines().map((line,i)=><polyline key={`road-${i}`} points={line.map(p=>{const m=muspelheimMapPoint(p.x,p.z);return `${m.x},${m.y}`;}).join(' ')} fill="none" stroke="#c6a787" strokeWidth={ROAD_WIDTH*276/1050} strokeLinecap="round" strokeLinejoin="round"/>)}
    {[-1,1].map(side=><polyline key={side} points={rockWallLayout(GATEWAY_WALL_ANCHOR).filter(r=>r.section==='entrance'&&Math.sign(r.x-GATEWAY_POSITION.x)===side).map(r=>{const p=muspelheimMapPoint(r.x,r.z);return `${p.x},${p.y}`;}).join(' ')} fill="none" stroke="#77777c" strokeWidth="5" strokeLinecap="round"/>)}
    <rect x={muspelheimMapPoint(-224,161).x} y={muspelheimMapPoint(-224,161).y} width={448*276/1050} height={70*276/1050} fill="#140d14"/>
    <path d={`M ${muspelheimMapPoint(0,158).x} ${muspelheimMapPoint(0,158).y} V ${muspelheimMapPoint(0,234).y}`} stroke="#a5a7ad" strokeWidth="5"/>
    <path d={`M ${muspelheimMapPoint(GATEWAY_POSITION.x,GATEWAY_POSITION.z).x-4} ${muspelheimMapPoint(GATEWAY_POSITION.x,GATEWAY_POSITION.z).y} h 8`} stroke="#ff8e35" strokeWidth="4"/>
    <g transform={`translate(${muspelheimMapPoint(VOLCANO_POSITION.x,VOLCANO_POSITION.z).x},${muspelheimMapPoint(VOLCANO_POSITION.x,VOLCANO_POSITION.z).y})`}><path d="M -12 9 L -5 -8 L 5 -8 L 12 9 Z" fill="#6c4c40" stroke="#ee9b58" strokeWidth="1.5"/><path d="M -5 -8 Q 0 -3 5 -8" fill="none" stroke="#ff632c" strokeWidth="2"/><text y="22" textAnchor="middle" fill="#ffe2ac" fontSize="9">Вулкан</text></g>
    <g transform={`translate(${muspelheimMapPoint(SURT_TOWER_POSITION.x,SURT_TOWER_POSITION.z).x},${muspelheimMapPoint(SURT_TOWER_POSITION.x,SURT_TOWER_POSITION.z).y})`}><rect x="-5" y="-7" width="10" height="11" fill="#d4c3a1" stroke="#352820"/><text x="9" y="-5" fill="#ffe2ac" fontSize="8">Дом Сурта</text></g>
    <circle cx={muspelheimMapPoint(position.current.x,position.current.z).x} cy={muspelheimMapPoint(position.current.x,position.current.z).y} r="4" fill="#ffd45f"/>
   </svg>
   <p style={{fontSize:12}}>Основная земля за вратами расширена: вдвое в ширину и в полтора раза вглубь. Светло-коричневые линии — дороги по предварительной схеме. Золотая точка — Vicki. Серые дуги — скальный хребет и ограда у входа. Оранжевая отметка — первые врата. Светлая полоса — мост над огненной бездной Гиннунгагап. Тёмный изгиб перед вулканом — глубокое базальтовое ущелье с площадками для будущих испытаний. Две бежевые отметки — подвесные мосты над пучиной. Падение смертельно и возвращает к началу спуска; задания и предметы сохраняются. Спуск — на южном берегу западнее середины ущелья; подъём к вулкану — на противоположном берегу дальше по дну.</p><h4>Авторство моделей</h4><p style={{fontSize:12}}>Страж озера в шахте: <a href={OCEAN_GUARDIAN_CREDIT.url} target="_blank" rel="noopener noreferrer">{OCEAN_GUARDIAN_CREDIT.title} — {OCEAN_GUARDIAN_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Модель уменьшена, текстуры оптимизированы, сохранены скелет и исходное движение; добавлены удары щупальцами и попытки захвата.</p><p style={{fontSize:12}}><a href={MINE_DOOR_CREDIT.url} target="_blank" rel="noopener noreferrer">{MINE_DOOR_CREDIT.title} — {MINE_DOOR_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Текстуры оптимизированы; сохранены авторские каменная арка, створка и фурнитура. Модель уменьшена и установлена в пещере, добавлено задвигание створки в скалу.</p><p style={{fontSize:12}}>Золото шахты: <a href="https://sketchfab.com/3d-models/ingot-a0c5694aa57e4c1390ff13364bc8ee7e" target="_blank" rel="noopener noreferrer">Ingot — masterm_3</a>; <a href="https://sketchfab.com/3d-models/coins-7367feabcd4c4b30a7ba64b95b76bee0" target="_blank" rel="noopener noreferrer">Coins!!! — Xillute | Dev</a> (<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>). Использованы копии с равномерным масштабом и поворотом. Пропорции, рельеф, материалы и текстуры сохранены.</p><p style={{fontSize:12}}>Кристаллы шахты: <a href="https://sketchfab.com/3d-models/mineral-fluorite-5ed87d4487be495aac0a86632eb3880c" target="_blank" rel="noopener noreferrer">Mineral: Fluorite — Digital Atlas of Ancient Life</a> (CC0); <a href="https://sketchfab.com/3d-models/ruby-stack-4f0c04c7dd72459ba1713cf66446f00e" target="_blank" rel="noopener noreferrer">Ruby Stack — Xillute | Dev</a>; <a href="https://sketchfab.com/3d-models/low-poly-crystal-game-ready-asset-b81e123c408a49b5b5becabf64ee44b5" target="_blank" rel="noopener noreferrer">Low poly Crystal</a> и <a href="https://sketchfab.com/3d-models/red-crystal-game-ready-asset-72288e33ef774a17a377bc0bd6de18b8" target="_blank" rel="noopener noreferrer">Red Crystal — Pixel Life</a> (<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>). Модели уменьшены, текстуры оптимизированы, добавлено сияние; геометрия флюорита упрощена.</p><p style={{fontSize:12}}><a href="https://sketchfab.com/3d-models/mine-cart-gem-98cad9f6a0364a36bc69127f94ed32ee" target="_blank" rel="noopener noreferrer">Mine Cart Gem! — Xillute | Dev</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Масштаб и положение изменены для установки на рельсы.</p><p style={{fontSize:12}}><a href="https://sketchfab.com/3d-models/train-track-modular-pack-e662a834e5fb4b65ad4f8194f8af515b" target="_blank" rel="noopener noreferrer">Train Track — Modular Pack · Digital Goblin</a>. CC BY 4.0. Прямой участок выделен из набора, уменьшен и изогнут по тоннелю; материал адаптирован.</p><p style={{fontSize:12}}><a href="https://sketchfab.com/3d-models/magical-abandoned-mine-7ae4754b0db74ba884072215b5d013f5" target="_blank" rel="noopener noreferrer">Magical Abandoned Mine — WarderiiK</a>. CC BY 4.0. Текстуры уменьшены; скалы и рельсы использованы для продолжения шахты.</p>
   <p style={{fontSize:12}}>Дороги: <a href={COBBLE_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{COBBLE_CREDIT.title} — {COBBLE_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Извлечены карты материала, сжаты текстуры, добавлен слабый голубой ореол над дорогой.</p>
   <p style={{fontSize:12}}>Вулкан: <a href={VOLCANO_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{VOLCANO_CREDIT.title} — {VOLCANO_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Упрощена геометрия, сжата текстура; изменены масштаб и положение.</p>
   <p style={{fontSize:12}}>Дом Сурта: <a href={SURT_TOWER_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{SURT_TOWER_CREDIT.title} — {SURT_TOWER_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Упрощена сетка, сжаты текстуры; изменены масштаб и положение, башня поднята над склоном вулкана и сдвинута к задней стене.</p>
   <p style={{fontSize:12}}>Трон Сурта: <a href={SURT_THRONE_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{SURT_THRONE_CREDIT.title} — {SURT_THRONE_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Упрощена сетка, сжаты текстуры; изменены масштаб и положение.</p>
   {ROCK_CREDITS.map(c=><p key={c.author} style={{fontSize:12}}><a href={c.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{c.title} — {c.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>.</p>)}
   <p style={{fontSize:12}}>Проход: <a href={GATEWAY_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{GATEWAY_CREDIT.title} — {GATEWAY_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>.</p>
   <p style={{fontSize:12}}>Круглая дверь: <a href="https://www.cgtrader.com/items/1933395/download-page" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>Entrance Door to Chamber — CGTrader</a>. Предоставлена для проекта; оптимизирована, разделена на створки, добавлены шарниры и открытие, изменены цвет и размещение.</p>
   <p style={{fontSize:12}}>Факелы: <a href={TORCH_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{TORCH_CREDIT.title} — {TORCH_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Сжаты текстуры с сохранением прозрачности пламени, уменьшен масштаб, добавлены крепления к колоннам, мерцание и сияние.</p>
   <p style={{fontSize:12}}>Подвесной мост: <a href={RAVINE_BRIDGE_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{RAVINE_BRIDGE_CREDIT.title} — {RAVINE_BRIDGE_CREDIT.author}</a>. CC BY 4.0. Убраны верхние канаты и стойки, сжаты текстуры, изменены пропорции; повреждённый настил сохранён.</p>
   <p style={{fontSize:12}}>Мост: <a href={BRIDGE_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{BRIDGE_CREDIT.title} — {BRIDGE_CREDIT.author}</a>. CC BY 4.0. Упрощён, сжаты текстуры, изменены пропорции, добавлена готическая каменная текстура, созданная для Yggdrasil.</p>
   <p style={{fontSize:11}}>Изменения: упрощена геометрия, сжаты текстуры, материал приведён к тёмному базальту, мох обесцвечен и затемнён; изменены масштаб и размещение.</p><button className="muspelheim-btn" onClick={()=>setMapOpen(false)}>Закрыть карту</button></div></div>}
  <button className="muspelheim-btn" style={{position:'absolute',bottom:128,right:18,touchAction:'none'}} aria-label="Удерживать для бега" onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);sprint.current=true;}} onPointerUp={()=>{sprint.current=false;}} onPointerCancel={()=>{sprint.current=false;}} onLostPointerCapture={()=>{sprint.current=false;}}>Бег ⚡</button>
  {nearMine&&!mapOpen&&!gate&&!keeperDialog&&<button className="muspelheim-btn primary" style={{position:'absolute',bottom:190,right:16}} onClick={()=>{stop();if(!mineOpen)openMine.current();else props.onEnterMine();}}>{mineOpen?'Войти в пепельную шахту':'Открыть дверь шахты'}</button>}
  {nearKeeper&&!mapOpen&&!gate&&!keeperDialog&&<button className="muspelheim-btn primary" style={{position:'absolute',bottom:190,right:16}} onClick={()=>{stop();setKeeperDialog(true);}}>Хранитель врат</button>}
  {keeperDialog&&<div className="muspelheim-gate-backdrop"><div className="muspelheim-gate-panel" role="dialog" aria-label="Хранитель огненных врат"><h3>Хранитель огненных врат</h3><p>{props.minePaid?'Огненное золото принято. Путь к Сурту открыт.':'Для прохода к Сурту принеси '+FIRE_GOLD_COST+' огненного золота из пепельной шахты в ущелье. Победи её охрану и забери запас из сокровищницы.'}</p><p>Огненное золото: {props.fireGold}</p><div className="muspelheim-gate-actions">{!props.minePaid&&<button className="muspelheim-btn primary" disabled={props.fireGold<FIRE_GOLD_COST} onClick={()=>{props.onPayKeeper();setStatus('Огненное золото передано хранителю. Путь к Сурту открыт.');setKeeperDialog(false);}}>Передать {FIRE_GOLD_COST} золота</button>}<button className="muspelheim-btn" onClick={()=>setKeeperDialog(false)}>Продолжить</button></div></div></div>}
  {gate&&<div className="muspelheim-gate-backdrop" onClick={()=>setGate(false)}><div className="muspelheim-gate-panel" role="dialog" aria-modal="true" aria-label="Первые врата Муспельхейма" onClick={e=>e.stopPropagation()}>
   <h3>Первые врата</h3>
   <p>{props.gateOpen?'Кристалл установлен. Врата открываются при приближении с любой стороны.':props.canOpenGate?'Установи Кристалл первозданной воды во врата.':props.assembled&&!props.briefed?'Поговори со Странницей девяти миров в Нифльхейме о Муспельхейме.':'Получи Кристалл первозданной воды в Нифльхейме и поговори со Странницей.'}</p>
   <p>{props.minePaid?'Хранитель принял огненное золото. Путь к Сурту открыт.':'Для пути к Сурту найди пепельную шахту в ущелье и принеси хранителю у замка огненное золото.'}</p><div className="muspelheim-gate-actions">{props.gateOpen?<button className="muspelheim-btn primary" disabled={!props.minePaid} onClick={props.onTrial}>Испытание Сурта</button>:<button className="muspelheim-btn primary" disabled={!props.canOpenGate} onClick={props.onInstallCrystal}>Вставить кристалл</button>}<button className="muspelheim-btn" onClick={()=>setGate(false)}>Продолжить</button></div>
  </div></div>}

 </section>;
}
