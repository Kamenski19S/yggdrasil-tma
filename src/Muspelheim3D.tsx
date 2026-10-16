import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {BASE} from './core';
import {createTerrainSampler,clampMuspelheimPosition} from './muspelheimTerrain';
import {configureMuspelheimGround} from './muspelheimGround';
import {GATEWAY_ASSETS,GATEWAY_CREDIT,GATEWAY_POSITION,GATEWAY_SCALE,createMuspelheimGateway,type MuspelheimGateway} from './muspelheimGateway';
import {screenMoveToWorld,updateFollowCamera,safeCameraOffset,type FollowCameraState} from './muspelheimCamera';
import {ROCK_ASSETS,ROCK_CREDITS,rockWallLayout,rockWallBlocks,moveAlongRockWalls,makeBasaltWall} from './muspelheimRockWalls';

type Props={gateOpen:boolean;canOpenGate:boolean;assembled:boolean;briefed:boolean;onInstallCrystal:()=>void;onTrial:()=>void};
function dispose(root:THREE.Object3D){
 const textures=new Set<THREE.Texture>(),materials=new Set<THREE.Material>(),geometries=new Set<THREE.BufferGeometry>();
 root.traverse(o=>{if(o instanceof THREE.Mesh){geometries.add(o.geometry);if(o instanceof THREE.InstancedMesh)o.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){materials.add(m);Object.values(m).forEach(v=>{if(v instanceof THREE.Texture)textures.add(v);});}}});
 geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());
}
export default function Muspelheim3D(props:Props){
 const host=useRef<HTMLDivElement>(null),input=useRef({x:0,z:0}),position=useRef({x:0,z:192.5});
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
  const wallRocks=rockWallLayout();
  const follow:FollowCameraState={yaw:viewYaw.current,targetYaw:viewYaw.current,turnTime:0};
  let terrainReady=false,heroReady=false,wallsReady=0,loadError=false,entrance:MuspelheimGateway|undefined;
  const entranceAssets:Array<THREE.Object3D|undefined>=[];
  const blocked=(x:number,z:number)=>rockWallBlocks(wallRocks,x,z)||(entrance?.blocks(x,z)??false);
  const heightAt=(x:number,z:number)=>{const base=sample?.(x,z);return base==null?null:entrance?.floorAt(x,z,base)??base;};
  const ready=()=>{if(terrainReady&&heroReady&&wallsReady===ROCK_ASSETS.length&&entrance&&!loadError)setStatus('Муспельхейм · Исследуй площадку.');};
  const loader=new GLTFLoader();
  GATEWAY_ASSETS.forEach((asset,index)=>loader.load(`${BASE}img/models/${asset}`,g=>{
   if(!alive){dispose(g.scene);return;}entranceAssets[index]=g.scene;
   if(entranceAssets[0]&&entranceAssets[1]){entrance=createMuspelheimGateway(entranceAssets[0],entranceAssets[1],gateIsOpen.current);scene.add(entrance.group);ready();}
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
   configureMuspelheimGround(g.scene,renderer.capabilities.getMaxAnisotropy());
   scene.add(g.scene);g.scene.name='Muspelheim editable terrain';sample=createTerrainSampler(g.scene);terrainReady=true;ready();
  },undefined,()=>{if(alive){loadError=true;setStatus('Площадка не загрузилась. Проверь соединение и повтори.');setFailed(true);}});
  loader.load(`${BASE}img/models/Vika-3d-animated-optimized.glb`,g=>{
   if(!alive){dispose(g.scene);return;}
   const b=new THREE.Box3().setFromObject(g.scene),scale=13.94/Math.max(.01,b.max.y-b.min.y);g.scene.scale.setScalar(scale);g.scene.position.y=-b.min.y*scale;hero.add(g.scene);
   mixer=new THREE.AnimationMixer(g.scene);
   const find=(...names:string[])=>names.map(n=>THREE.AnimationClip.findByName(g.animations,n)).find(Boolean);
   const i=find('idle','sword_idle')||g.animations[0],w=find('walk_loop','walk')||i;
   if(i)idle=mixer.clipAction(i);if(w)walk=mixer.clipAction(w);idle?.play();current=idle;heroReady=true;ready();
  },undefined,()=>{if(alive){loadError=true;setStatus('Vicki не загрузилась. Проверь соединение и повтори.');setFailed(true);}});
  const keys=new Set<string>();
  const keydown=(e:KeyboardEvent)=>{if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)){if(!keys.size)controlYaw.current=viewYaw.current;keys.add(e.code);e.preventDefault();}};
  const keyup=(e:KeyboardEvent)=>keys.delete(e.code);
  const clear=()=>{keys.clear();input.current={x:0,z:0};};
  window.addEventListener('keydown',keydown);window.addEventListener('keyup',keyup);window.addEventListener('blur',clear);document.addEventListener('visibilitychange',clear);
  const resize=()=>{const w=mount.clientWidth,h=mount.clientHeight;if(!w||!h)return;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();};
  const observer=new ResizeObserver(resize);observer.observe(mount);resize();
  const clock=new THREE.Clock();camera.position.set(position.current.x,20,position.current.z+32);
  function tick(){
   if(!alive)return;frame=requestAnimationFrame(tick);const dt=Math.min(clock.getDelta(),.05);
   let x=input.current.x+(keys.has('KeyD')||keys.has('ArrowRight')?1:0)-(keys.has('KeyA')||keys.has('ArrowLeft')?1:0);
   let z=input.current.z+(keys.has('KeyS')||keys.has('ArrowDown')?1:0)-(keys.has('KeyW')||keys.has('ArrowUp')?1:0);
   const length=Math.hypot(x,z);let moving=false,dx=0,dz=0;
   if(length&&terrainReady&&heroReady&&entrance&&wallsReady===ROCK_ASSETS.length&&!document.hidden&&!paused.current){x/=Math.max(1,length);z/=Math.max(1,length);const world=screenMoveToWorld(x,z,controlYaw.current);x=world.x;z=world.z;const p=moveAlongRockWalls(wallRocks,position.current,clampMuspelheimPosition(position.current.x+x*18*dt,position.current.z+z*18*dt));let next=p;if(blocked(p.x,p.z)){const from=position.current;next=!blocked(p.x,from.z)?{x:p.x,z:from.z}:!blocked(from.x,p.z)?{x:from.x,z:p.z}:from;}const y=heightAt(next.x,next.z);if(y!=null&&Math.abs(y-hero.position.y)<(Math.abs(next.x-GATEWAY_POSITION.x)<13*GATEWAY_SCALE&&Math.abs(next.z-GATEWAY_POSITION.z)<42*GATEWAY_SCALE?8*GATEWAY_SCALE:3)){dx=next.x-position.current.x;dz=next.z-position.current.z;moving=Math.hypot(dx,dz)>.00001;position.current=next;if(moving)hero.rotation.y=Math.atan2(dx,dz);}}
   const p=position.current;hero.position.set(p.x,heightAt(p.x,p.z)??0,p.z);entrance?.update(paused.current?0:dt,gateIsOpen.current);
   const action=moving?walk:idle;if(action&&action!==current){current?.fadeOut(.18);action.reset().fadeIn(.18).play();current=action;}
   mixer?.update(dt);viewYaw.current=updateFollowCamera(follow,dx,dz,dt);
   const offset=safeCameraOffset(p.x,p.z,follow.yaw,(x,z)=>rockWallBlocks(wallRocks,x,z,2)||(entrance?.blocks(x,z,2)??false));
   camera.position.lerp(new THREE.Vector3(p.x+offset.x,hero.position.y+20,p.z+offset.z),1-Math.exp(-6*dt));
   if(rockWallBlocks(wallRocks,camera.position.x,camera.position.z,2)||(entrance?.blocks(camera.position.x,camera.position.z,2)??false))camera.position.set(p.x+offset.x,hero.position.y+20,p.z+offset.z);
   const lookAhead=18*offset.distance/32;camera.lookAt(p.x-Math.sin(follow.yaw)*lookAhead,hero.position.y+3,p.z-Math.cos(follow.yaw)*lookAhead);renderer.render(scene,camera);
  }
  tick();return()=>{alive=false;cancelAnimationFrame(frame);clear();observer.disconnect();window.removeEventListener('keydown',keydown);window.removeEventListener('keyup',keyup);window.removeEventListener('blur',clear);document.removeEventListener('visibilitychange',clear);mixer?.stopAllAction();for(const asset of entranceAssets)if(asset&&!asset.parent)dispose(asset);dispose(scene);renderer.dispose();renderer.domElement.remove();};
 },[retry]);
 const pointer=useRef<number|null>(null);
 const move=(e:React.PointerEvent<HTMLDivElement>)=>{if(pointer.current!==e.pointerId)return;const b=e.currentTarget.getBoundingClientRect();input.current={x:THREE.MathUtils.clamp((e.clientX-b.left-b.width/2)/42,-1,1),z:THREE.MathUtils.clamp((e.clientY-b.top-b.height/2)/42,-1,1)};};
 const stop=()=>{pointer.current=null;input.current={x:0,z:0};};
 return <section style={{position:'relative',flex:1,minHeight:0,overflow:'hidden',background:'#24110e',touchAction:'none'}} aria-label="Муспельхейм">
  <div ref={host} style={{position:'absolute',inset:0}}/>
  <div style={{position:'absolute',top:12,left:12,right:12,display:'flex',justifyContent:'space-between',alignItems:'start',gap:8,color:'#ffe2ac',textShadow:'0 2px 3px #000'}}><b>Муспельхейм</b><div style={{display:'flex',gap:6}}><button className="btn" style={{width:'auto',padding:'6px 9px',fontSize:12}} onClick={()=>{stop();setMapOpen(true);}}>Карта</button><button className="btn" style={{width:'auto',padding:'6px 9px',fontSize:12}} onClick={()=>{stop();setGate(true);}}>Первые врата</button></div></div>
  <div role="status" style={{position:'absolute',bottom:14,left:150,right:12,color:'#ffe2ac',fontSize:12,textShadow:'0 2px 3px #000'}}>{status}{failed&&<button className="btn" onClick={()=>setRetry(v=>v+1)}>Повторить загрузку</button>}</div>
  <div role="group" aria-label="Управление Vicki" onPointerDown={e=>{if(pointer.current!==null)return;controlYaw.current=viewYaw.current;pointer.current=e.pointerId;e.currentTarget.setPointerCapture(e.pointerId);move(e);}} onPointerMove={move} onPointerUp={stop} onPointerCancel={stop} onLostPointerCapture={stop} style={{position:'absolute',bottom:20,left:20,width:108,height:108,borderRadius:'50%',border:'3px solid #b88839',background:'#27170dbb',display:'grid',placeItems:'center',color:'#edce89',touchAction:'none',userSelect:'none'}}>✥</div>
  {mapOpen&&<div style={{position:'absolute',inset:0,display:'grid',placeItems:'center',background:'#000a',padding:16}}><div role="dialog" aria-modal="true" aria-label="Карта Муспельхейма" className="card" style={{maxWidth:420,maxHeight:'85%',overflowY:'auto',padding:16,background:'#291911',color:'#ffe2ac'}}><h3>Карта Муспельхейма</h3>
   <svg viewBox="0 0 300 300" style={{display:'block',width:'100%',maxHeight:240,background:'#42251d',borderRadius:8}} aria-label="Скальный периметр и положение Vicki"><rect x="12" y="12" width="276" height="276" rx="14" fill="#573122" stroke="#77777c" strokeWidth="18"/><path d={`M ${150+GATEWAY_POSITION.x/525*276-6} ${150+GATEWAY_POSITION.z/525*276} h 12`} stroke="#ff8e35" strokeWidth="5"/><circle cx={150+position.current.x/525*276} cy={150+position.current.z/525*276} r="5" fill="#ffd45f"/></svg>
   <p style={{fontSize:12}}>Золотая точка — Vicki. Серый пояс — скальный хребет. Оранжевая отметка — первые врата.</p><h4>Авторство моделей</h4>
   {ROCK_CREDITS.map(c=><p key={c.author} style={{fontSize:12}}><a href={c.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{c.title} — {c.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>.</p>)}
   <p style={{fontSize:12}}>Проход: <a href={GATEWAY_CREDIT.url} target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>{GATEWAY_CREDIT.title} — {GATEWAY_CREDIT.author}</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>CC BY 4.0</a>.</p>
   <p style={{fontSize:12}}>Круглая дверь: <a href="https://www.cgtrader.com/items/1933395/download-page" target="_blank" rel="noopener noreferrer" style={{color:'#ffda85'}}>Entrance Door to Chamber — CGTrader</a>. Предоставлена для проекта; оптимизирована, разделена на створки, добавлены шарниры и открытие, изменены цвет и размещение.</p>
   <p style={{fontSize:11}}>Изменения: упрощена геометрия, сжаты текстуры, материал приведён к тёмному базальту, мох обесцвечен и затемнён; изменены масштаб и размещение.</p><button className="btn" onClick={()=>setMapOpen(false)}>Закрыть карту</button></div></div>}
  {gate&&<div style={{position:'absolute',inset:0,display:'grid',placeItems:'center',background:'#0008',padding:18}}><div className="card" role="dialog" aria-modal="true" aria-label="Первые врата Муспельхейма" style={{maxWidth:380,padding:18,background:'#291911',color:'#ffe2ac'}}><h3>Первые врата Муспельхейма</h3>{props.gateOpen?<><p>Кристалл установлен. Первые врата открыты.</p><button className="btn gold" onClick={props.onTrial}>Испытание Сурта</button></>:<><p>{props.canOpenGate?'Странница указала путь. Установи Кристалл первозданной воды во врата.':props.assembled&&!props.briefed?'Вернись к Страннице девяти миров в Нифльхейме и поговори о Муспельхейме.':'Получи Кристалл первозданной воды в Нифльхейме и поговори со Странницей девяти миров.'}</p><button className="btn gold" disabled={!props.canOpenGate} onClick={props.onInstallCrystal}>Вставить кристалл</button></>}<button className="btn" onClick={()=>setGate(false)}>Продолжить путь</button></div></div>}
 </section>;
}
