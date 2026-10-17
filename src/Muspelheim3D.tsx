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
import {screenMoveToWorld,updateFollowCamera,safeCameraOffset,type FollowCameraState} from './muspelheimCamera';
import {ROCK_ASSETS,ROCK_CREDITS,rockWallLayout,rockWallBlocks,moveAlongRockWalls,makeBasaltWall} from './muspelheimRockWalls';

const GATEWAY_WALL_ANCHOR={x:GATEWAY_POSITION.x,z:GATEWAY_POSITION.z-20*GATEWAY_SCALE,halfWidth:41*GATEWAY_SCALE};

type Props={gateOpen:boolean;canOpenGate:boolean;assembled:boolean;briefed:boolean;onInstallCrystal:()=>void;onTrial:()=>void};
function dispose(root:THREE.Object3D){
 const textures=new Set<THREE.Texture>(),materials=new Set<THREE.Material>(),geometries=new Set<THREE.BufferGeometry>();
 root.traverse(o=>{if(o instanceof THREE.Mesh||o instanceof THREE.Points||o instanceof THREE.Sprite){if(o instanceof THREE.Mesh||o instanceof THREE.Points)geometries.add(o.geometry);if(o instanceof THREE.InstancedMesh)o.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){materials.add(m);Object.values(m).forEach(v=>{if(v instanceof THREE.Texture)textures.add(v);});}}});
 geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());
}
export default function Muspelheim3D(props:Props){
 const host=useRef<HTMLDivElement>(null),input=useRef({x:0,z:0}),position=useRef({...BRIDGE_SPAWN});
 const [status,setStatus]=useState('Загрузка площадки Муспельхейма…'),[retry,setRetry]=useState(0),[failed,setFailed]=useState(false),[gate,setGate]=useState(false),[mapOpen,setMapOpen]=useState(false);
 const viewYaw=useRef(0),controlYaw=useRef(0),gateIsOpen=useRef(props.gateOpen);gateIsOpen.current=props.gateOpen;
 const paused=useRef(false);paused.current=gate||mapOpen;
 useEffect(()=>{
  const mount=host.current;if(!mount)return;
  let alive=true,frame=0,renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});}catch{setStatus('Не удалось запустить 3D. Попробуй открыть мир снова.');setFailed(true);return;}
  setFailed(false);setStatus('Загрузка площадки Муспельхейма…');
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;mount.appendChild(renderer.domElement);
  const scene=new THREE.Scene();scene.background=new THREE.Color('#24110e');scene.fog=new THREE.FogExp2('#24110e',.004);
  scene.add(new THREE.HemisphereLight('#ffdfb0','#332127',2.3));const sun=new THREE.DirectionalLight('#ffb776',2);sun.position.set(30,70,20);scene.add(sun);
  const camera=new THREE.PerspectiveCamera(48,1,.1,650),hero=new THREE.Group();scene.add(hero);
  let sample:((x:number,z:number)=>number|null)|undefined,mixer:THREE.AnimationMixer|undefined,idle:THREE.AnimationAction|undefined,walk:THREE.AnimationAction|undefined,current:THREE.AnimationAction|undefined;
  const lava=createChasmLava();scene.add(lava.mesh);let bridge:ReturnType<typeof createEntranceBridge>|undefined;
  const wallRocks=rockWallLayout(GATEWAY_WALL_ANCHOR);
  const follow:FollowCameraState={yaw:viewYaw.current,targetYaw:viewYaw.current,turnTime:0};
  let tower:ReturnType<typeof createSurtTower>|undefined,towerSource:THREE.Object3D|undefined;
  let volcano:ReturnType<typeof createMuspelheimVolcano>|undefined;
  let roadGlow:ReturnType<typeof createRoadGlow>|undefined;
  let roadMask:ReturnType<typeof configureMuspelheimGround>|undefined;
  let terrainReady=false,bridgeTextureReady=false,torchesReady=false,torchSource:THREE.Object3D|undefined,heroReady=false,wallsReady=0,loadError=false,entrance:MuspelheimGateway|undefined;
  const entranceAssets:Array<THREE.Object3D|undefined>=[];
  const blocked=(x:number,z:number)=>chasmBlocks(x,z)||(tower?.blocks(x,z)??false)||rockWallBlocks(wallRocks,x,z)||(entrance?.blocks(x,z)??false);
  const heightAt=(x:number,z:number)=>{const base=sample?.(x,z);if(base==null)return null;const deck=bridge?.floorAt(x,z);if(deck!=null)return Math.max(base,deck);const surface=Math.max(base,volcano?.floorAt(x,z)??base,tower?.floorAt(x,z)??base);return entrance?.floorAt(x,z,surface)??surface;};
  const loadingTimeout=window.setTimeout(()=>{if(alive&&!loadError){loadError=true;setStatus(heroReady?'Загрузка мира затянулась. Повтори загрузку.':'Загрузка Vicki затянулась. Повтори загрузку.');setFailed(true);}},60000);
  const ready=()=>{if(terrainReady&&heroReady&&volcano&&tower&&wallsReady===ROCK_ASSETS.length&&entrance&&bridge&&bridgeTextureReady&&torchesReady&&!loadError){window.clearTimeout(loadingTimeout);setStatus('Гиннунгагап · Мост к первым вратам.');}else if(!loadError)setStatus(heroReady?'Загрузка окружения Муспельхейма…':'Загрузка Vicki…');};
  const bridgeTexture=new THREE.TextureLoader().load(`${BASE}img/${BRIDGE_TEXTURE}`,()=>{if(!alive){bridgeTexture.dispose();return;}bridgeTextureReady=true;ready();},undefined,()=>{if(alive){loadError=true;setStatus('Текстура моста не загрузилась. Повтори загрузку.');setFailed(true);}});
  bridgeTexture.colorSpace=THREE.SRGBColorSpace;bridgeTexture.wrapS=bridgeTexture.wrapT=THREE.RepeatWrapping;bridgeTexture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
  const attachTorches=()=>{if(!entrance||!torchSource||torchesReady)return;entrance.mountTorches(torchSource);torchSource.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});torchSource=undefined;torchesReady=true;ready();};
  const loader=new GLTFLoader();
  cachedGlbBuffer(`${BASE}img/models/Vika-3d-animated-optimized.glb`)
   .then(buffer=>alive?loader.parseAsync(buffer,`${BASE}img/models/`):undefined).then(g=>{
   if(!g)return;
   if(!alive){dispose(g.scene);return;}
   const b=new THREE.Box3().setFromObject(g.scene),scale=13.94/Math.max(.01,b.max.y-b.min.y);g.scene.scale.setScalar(scale);g.scene.position.y=-b.min.y*scale;hero.add(g.scene);
   mixer=new THREE.AnimationMixer(g.scene);
   const find=(...names:string[])=>names.map(n=>THREE.AnimationClip.findByName(g.animations,n)).find(Boolean);
   const i=find('idle','sword_idle')||g.animations[0],w=find('walk_loop','walk')||i;
   if(i)idle=mixer.clipAction(i);if(w)walk=mixer.clipAction(w);idle?.play();current=idle;heroReady=true;ready();
  }).catch(()=>{if(alive){loadError=true;setStatus('Vicki не загрузилась. Проверь соединение и повтори.');setFailed(true);}});
  const attachTower=()=>{if(!volcano||!towerSource||tower)return;tower=createSurtTower(towerSource,volcano.floorAt);scene.add(tower.root);towerSource=undefined;ready();};
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
   const wall=makeBasaltWall(g.scene,kind,wallRocks,renderer.capabilities.getMaxAnisotropy());scene.add(wall);
   // Instanced walls own copied geometry/material; their textures are shared.
   g.scene.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});
   wallsReady++;ready();
  },undefined,()=>{if(alive){loadError=true;setStatus('Скалы не загрузились. Проверь соединение и повтори.');setFailed(true);}}));
  loader.load(`${BASE}img/models/Muspelheim_Terrain_300m.glb`,g=>{
   if(!alive){dispose(g.scene);return;}
   g.scene.scale.multiply(new THREE.Vector3(1.75,1,1.75));
   expandMuspelheimTerrain(g.scene);
   carveEntranceChasm(g.scene);
   roadMask=configureMuspelheimGround(g.scene,renderer.capabilities.getMaxAnisotropy(),`${BASE}img/`);
   scene.add(g.scene);g.scene.name='Muspelheim editable terrain';sample=createTerrainSampler(g.scene);
   roadGlow=createRoadGlow(sample,renderer.getDrawingBufferSize(new THREE.Vector2()).y);scene.add(roadGlow.points);
   roadMask.ready.then(()=>{if(alive){terrainReady=true;ready();}},()=>{if(alive){loadError=true;setStatus('Покрытие дороги не загрузилось. Повтори загрузку.');setFailed(true);}});
  },undefined,()=>{if(alive){loadError=true;setStatus('Площадка не загрузилась. Проверь соединение и повтори.');setFailed(true);}});
  const keys=new Set<string>();
  const keydown=(e:KeyboardEvent)=>{if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)){if(!keys.size)controlYaw.current=viewYaw.current;keys.add(e.code);e.preventDefault();}};
  const keyup=(e:KeyboardEvent)=>keys.delete(e.code);
  const clear=()=>{keys.clear();input.current={x:0,z:0};};
  window.addEventListener('keydown',keydown);window.addEventListener('keyup',keyup);window.addEventListener('blur',clear);document.addEventListener('visibilitychange',clear);
  const resize=()=>{const w=mount.clientWidth,h=mount.clientHeight;if(!w||!h)return;renderer.setSize(w,h);roadGlow?.setPixelHeight(renderer.getDrawingBufferSize(new THREE.Vector2()).y);camera.aspect=w/h;camera.updateProjectionMatrix();};
  const observer=new ResizeObserver(resize);observer.observe(mount);resize();
  const lookTarget=new THREE.Vector3(position.current.x,3,position.current.z-18);
  const clock=new THREE.Clock();camera.position.set(position.current.x,20,position.current.z+32);
  function tick(){
   if(!alive)return;frame=requestAnimationFrame(tick);const dt=Math.min(clock.getDelta(),.05);
   let x=input.current.x+(keys.has('KeyD')||keys.has('ArrowRight')?1:0)-(keys.has('KeyA')||keys.has('ArrowLeft')?1:0);
   let z=input.current.z+(keys.has('KeyS')||keys.has('ArrowDown')?1:0)-(keys.has('KeyW')||keys.has('ArrowUp')?1:0);
   const length=Math.hypot(x,z);let moving=false,dx=0,dz=0;
   if(length&&terrainReady&&heroReady&&volcano&&tower&&entrance&&bridge&&bridgeTextureReady&&torchesReady&&!loadError&&wallsReady===ROCK_ASSETS.length&&!document.hidden&&!paused.current){x/=Math.max(1,length);z/=Math.max(1,length);const world=screenMoveToWorld(x,z,controlYaw.current);x=world.x;z=world.z;const p=moveAlongRockWalls(wallRocks,position.current,clampMuspelheimPosition(position.current.x+x*18*dt,position.current.z+z*18*dt));let next=p;if(blocked(p.x,p.z)){const from=position.current;next=!blocked(p.x,from.z)?{x:p.x,z:from.z}:!blocked(from.x,p.z)?{x:from.x,z:p.z}:from;}const y=heightAt(next.x,next.z);if(y!=null&&Math.abs(y-hero.position.y)<(Math.abs(next.x-GATEWAY_POSITION.x)<13*GATEWAY_SCALE&&Math.abs(next.z-GATEWAY_POSITION.z)<42*GATEWAY_SCALE?8*GATEWAY_SCALE:3)){dx=next.x-position.current.x;dz=next.z-position.current.z;moving=Math.hypot(dx,dz)>.00001;position.current=next;if(moving)hero.rotation.y=Math.atan2(dx,dz);}}
   const p=position.current;hero.position.set(p.x,heightAt(p.x,p.z)??0,p.z);entrance?.updateProximity(paused.current?0:dt,gateIsOpen.current,p.x,p.z);
   const action=moving?walk:idle;if(action&&action!==current){current?.fadeOut(.18);action.reset().fadeIn(.18).play();current=action;}
   lava.update(paused.current?0:dt);mixer?.update(dt);viewYaw.current=updateFollowCamera(follow,dx,dz,dt);
   const offset=safeCameraOffset(p.x,p.z,follow.yaw,(x,z)=>(tower?.blocks(x,z,2)??false)||rockWallBlocks(wallRocks,x,z,2)||(entrance?.blocks(x,z,2)??false));
   camera.position.lerp(new THREE.Vector3(p.x+offset.x,hero.position.y+20,p.z+offset.z),1-Math.exp(-4.5*dt));
   if((tower?.blocks(camera.position.x,camera.position.z,2)??false)||rockWallBlocks(wallRocks,camera.position.x,camera.position.z,2)||(entrance?.blocks(camera.position.x,camera.position.z,2)??false))camera.position.set(p.x+offset.x,hero.position.y+20,p.z+offset.z);
   const lookAhead=18*offset.distance/32;lookTarget.lerp(new THREE.Vector3(p.x-Math.sin(follow.yaw)*lookAhead,hero.position.y+3,p.z-Math.cos(follow.yaw)*lookAhead),1-Math.exp(-5*dt));camera.lookAt(lookTarget);renderer.render(scene,camera);
  }
  tick();return()=>{alive=false;window.clearTimeout(loadingTimeout);cancelAnimationFrame(frame);clear();observer.disconnect();window.removeEventListener('keydown',keydown);window.removeEventListener('keyup',keyup);window.removeEventListener('blur',clear);document.removeEventListener('visibilitychange',clear);mixer?.stopAllAction();for(const asset of entranceAssets)if(asset&&!asset.parent)dispose(asset);if(torchSource)dispose(torchSource);if(towerSource)dispose(towerSource);dispose(scene);roadMask?.dispose();bridgeTexture.dispose();renderer.dispose();renderer.domElement.remove();};
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
    {roadLines().map((line,i)=><polyline key={`road-${i}`} points={line.map(p=>{const m=muspelheimMapPoint(p.x,p.z);return `${m.x},${m.y}`;}).join(' ')} fill="none" stroke="#c6a787" strokeWidth={ROAD_WIDTH*276/1050} strokeLinecap="round" strokeLinejoin="round"/>)}
    {[-1,1].map(side=><polyline key={side} points={rockWallLayout(GATEWAY_WALL_ANCHOR).filter(r=>r.section==='entrance'&&Math.sign(r.x-GATEWAY_POSITION.x)===side).map(r=>{const p=muspelheimMapPoint(r.x,r.z);return `${p.x},${p.y}`;}).join(' ')} fill="none" stroke="#77777c" strokeWidth="5" strokeLinecap="round"/>)}
    <rect x={muspelheimMapPoint(-224,161).x} y={muspelheimMapPoint(-224,161).y} width={448*276/1050} height={70*276/1050} fill="#140d14"/>
    <path d={`M ${muspelheimMapPoint(0,158).x} ${muspelheimMapPoint(0,158).y} V ${muspelheimMapPoint(0,234).y}`} stroke="#a5a7ad" strokeWidth="5"/>
    <path d={`M ${muspelheimMapPoint(GATEWAY_POSITION.x,GATEWAY_POSITION.z).x-4} ${muspelheimMapPoint(GATEWAY_POSITION.x,GATEWAY_POSITION.z).y} h 8`} stroke="#ff8e35" strokeWidth="4"/>
    <g transform={`translate(${muspelheimMapPoint(VOLCANO_POSITION.x,VOLCANO_POSITION.z).x},${muspelheimMapPoint(VOLCANO_POSITION.x,VOLCANO_POSITION.z).y})`}><path d="M -12 9 L -5 -8 L 5 -8 L 12 9 Z" fill="#6c4c40" stroke="#ee9b58" strokeWidth="1.5"/><path d="M -5 -8 Q 0 -3 5 -8" fill="none" stroke="#ff632c" strokeWidth="2"/><text y="22" textAnchor="middle" fill="#ffe2ac" fontSize="9">Вулкан</text></g>
    <g transform={`translate(${muspelheimMapPoint(SURT_TOWER_POSITION.x,SURT_TOWER_POSITION.z).x},${muspelheimMapPoint(SURT_TOWER_POSITION.x,SURT_TOWER_POSITION.z).y})`}><rect x="-5" y="-7" width="10" height="11" fill="#d4c3a1" stroke="#352820"/><text x="9" y="-5" fill="#ffe2ac" fontSize="8">Дом Сурта</text></g>
    <circle cx={muspelheimMapPoint(position.current.x,position.current.z).x} cy={muspelheimMapPoint(position.current.x,position.current.z).y} r="4" fill="#ffd45f"/>
   </svg>
   <p style={{fontSize:12}}>Основная земля за вратами расширена: вдвое в ширину и в полтора раза вглубь. Светло-коричневые линии — дороги по предварительной схеме. Золотая точка — Vicki. Серые дуги — скальный хребет и ограда у входа. Оранжевая отметка — первые врата. Светлая полоса — мост над огненной бездной Гиннунгагап.</p><h4>Авторство моделей</h4>
   <p style={{fontSize:12}}>Дороги: <a href={COBBLE_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{COBBLE_CREDIT.title} — {COBBLE_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Извлечены карты материала, сжаты текстуры, добавлен слабый голубой ореол над дорогой.</p>
   <p style={{fontSize:12}}>Вулкан: <a href={VOLCANO_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{VOLCANO_CREDIT.title} — {VOLCANO_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Упрощена геометрия, сжата текстура; изменены масштаб и положение.</p>
   <p style={{fontSize:12}}>Дом Сурта: <a href={SURT_TOWER_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{SURT_TOWER_CREDIT.title} — {SURT_TOWER_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Упрощена сетка, сжаты текстуры; изменены масштаб и положение, добавлено каменное основание.</p>
   {ROCK_CREDITS.map(c=><p key={c.author} style={{fontSize:12}}><a href={c.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{c.title} — {c.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>.</p>)}
   <p style={{fontSize:12}}>Проход: <a href={GATEWAY_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{GATEWAY_CREDIT.title} — {GATEWAY_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>.</p>
   <p style={{fontSize:12}}>Круглая дверь: <a href="https://www.cgtrader.com/items/1933395/download-page" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>Entrance Door to Chamber — CGTrader</a>. Предоставлена для проекта; оптимизирована, разделена на створки, добавлены шарниры и открытие, изменены цвет и размещение.</p>
   <p style={{fontSize:12}}>Факелы: <a href={TORCH_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{TORCH_CREDIT.title} — {TORCH_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>. Сжаты текстуры с сохранением прозрачности пламени, уменьшен масштаб, добавлены крепления к колоннам, мерцание и сияние.</p>
   <p style={{fontSize:12}}>Мост: <a href={BRIDGE_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{BRIDGE_CREDIT.title} — {BRIDGE_CREDIT.author}</a>. CC BY 4.0. Упрощён, сжаты текстуры, изменены пропорции, добавлена готическая каменная текстура, созданная для Yggdrasil.</p>
   <p style={{fontSize:11}}>Изменения: упрощена геометрия, сжаты текстуры, материал приведён к тёмному базальту, мох обесцвечен и затемнён; изменены масштаб и размещение.</p><button className="muspelheim-btn" onClick={()=>setMapOpen(false)}>Закрыть карту</button></div></div>}
  {gate&&<div className="muspelheim-gate-backdrop" onClick={()=>setGate(false)}><div className="muspelheim-gate-panel" role="dialog" aria-modal="true" aria-label="Первые врата Муспельхейма" onClick={e=>e.stopPropagation()}>
   <h3>Первые врата</h3>
   <p>{props.gateOpen?'Кристалл установлен. Врата открываются при приближении с любой стороны.':props.canOpenGate?'Установи Кристалл первозданной воды во врата.':props.assembled&&!props.briefed?'Поговори со Странницей девяти миров в Нифльхейме о Муспельхейме.':'Получи Кристалл первозданной воды в Нифльхейме и поговори со Странницей.'}</p>
   <div className="muspelheim-gate-actions">{props.gateOpen?<button className="muspelheim-btn primary" onClick={props.onTrial}>Испытание Сурта</button>:<button className="muspelheim-btn primary" disabled={!props.canOpenGate} onClick={props.onInstallCrystal}>Вставить кристалл</button>}<button className="muspelheim-btn" onClick={()=>setGate(false)}>Продолжить</button></div>
  </div></div>}

 </section>;
}
