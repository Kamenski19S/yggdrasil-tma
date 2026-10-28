import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {BASE,cachedGlbBuffer,WEAPON_ASSET,textureSteelOnWeapon,styleNiflheimWeapon,type HeroWeapon} from './core';
import {createAshLordHall,ashLordWalkable,ashLordNear,ashLordExit,ASH_LORD_ASSET,ASH_LORD_CREDIT} from './muspelheimAshLordHall';
import {readAshLordVisit,saveAshLordVisit} from './ashLordSession';
import {screenMoveToWorld,updateFollowCamera,type FollowCameraState} from './muspelheimCamera';
import {createMuspelheimHeroActions} from './muspelheimHeroActions';
import {createMuspelheimHeroEquipment} from './muspelheimHeroEquipment';
import './muspelheimUI.css';
type Props={onBack:()=>void;weapon:HeroWeapon;shieldAsset:string;shieldEquipped:boolean;fieldHp:number|null;maxHp:number};
function dispose(root:THREE.Object3D){const gs=new Set<THREE.BufferGeometry>(),ms=new Set<THREE.Material>(),ts=new Set<THREE.Texture>();root.traverse(o=>{if(o instanceof THREE.Mesh||o instanceof THREE.Sprite||o instanceof THREE.Points||o instanceof THREE.Line){if(!(o instanceof THREE.Sprite))gs.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material]){ms.add(m);for(const v of Object.values(m))if(v instanceof THREE.Texture)ts.add(v);}}});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());ts.forEach(t=>t.dispose());}
export default function AshLord3D(props:Props){
 const host=useRef<HTMLDivElement>(null),input=useRef({x:0,z:0}),pointer=useRef<number|null>(null),knob=useRef<HTMLSpanElement>(null),run=useRef(false),view=useRef(0),basis=useRef(0),live=useRef(props);live.current=props;
 const [dialog,setDialog]=useState(false),[nearKeeper,setNearKeeper]=useState(false),[failed,setFailed]=useState(false),[retry,setRetry]=useState(0),[ready,setReady]=useState(false),[status,setStatus]=useState('Открывается Резиденция Владыки…');
 const paused=useRef(false);paused.current=dialog;const clearRef=useRef(()=>{});
 useEffect(()=>{
  const mount=host.current;if(!mount)return;let renderer:THREE.WebGLRenderer;
  setFailed(false);setReady(false);
  try{renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});}catch{setFailed(true);setStatus('Не удалось открыть зал. Повтори загрузку или вернись ко входу.');return;}
  let alive=true,frame=0,loaded=false,exiting=false,lastSave=0,clockTime=0;
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;mount.appendChild(renderer.domElement);
  view.current=0;basis.current=0;
  const scene=new THREE.Scene();scene.background=new THREE.Color('#181b1e');scene.fog=new THREE.FogExp2('#181b1e',.014);scene.add(new THREE.HemisphereLight('#b6c3d2','#171416',1.25));const light=new THREE.DirectionalLight('#b5c4d3',1.1);light.position.set(-30,45,35);scene.add(light);
  const camera=new THREE.PerspectiveCamera(54,1,.1,240),hero=new THREE.Group();hero.rotation.y=Math.PI;scene.add(hero);const pos=readAshLordVisit()??{x:0,z:43};if(!ashLordWalkable(pos.x,pos.z)){pos.x=0;pos.z=43;}
  let hall:ReturnType<typeof createAshLordHall>|undefined,mixer:THREE.AnimationMixer|undefined,actions:ReturnType<typeof createMuspelheimHeroActions>|undefined,equipment:ReturnType<typeof createMuspelheimHeroEquipment>|undefined;
  const keys=new Set<string>(),follow:FollowCameraState={yaw:0,targetYaw:0,turnTime:0};
  const persist=()=>{if(loaded&&!exiting)saveAshLordVisit(pos);};
  const clear=()=>{input.current={x:0,z:0};pointer.current=null;run.current=false;keys.clear();if(knob.current)knob.current.style.transform='';persist();};clearRef.current=clear;
  const down=(e:KeyboardEvent)=>{if(paused.current||!loaded)return;if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight'].includes(e.code)){if(!keys.size)basis.current=view.current;keys.add(e.code);e.preventDefault();}if(e.code==='KeyE'&&ashLordNear(pos.x,pos.z)){clear();setDialog(true);}};
  const up=(e:KeyboardEvent)=>keys.delete(e.code);window.addEventListener('keydown',down);window.addEventListener('keyup',up);window.addEventListener('blur',clear);document.addEventListener('visibilitychange',clear);
  const resize=()=>{const w=mount.clientWidth,h=mount.clientHeight;if(w&&h){renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();}};const observer=new ResizeObserver(resize);observer.observe(mount);resize();
  const loader=new GLTFLoader(),load=async(asset:string)=>loader.parseAsync(await cachedGlbBuffer(`${BASE}img/models/${asset}`),`${BASE}img/models/`);
  const loadAll=async()=>{
   const results=await Promise.allSettled([load('Vika-3d-animated-optimized.glb'),load(ASH_LORD_ASSET)]);
   const assets=results.flatMap(r=>r.status==='fulfilled'?[r.value]:[]);
   if(!alive){assets.forEach(a=>dispose(a.scene));return;}if(results.some(r=>r.status==='rejected')){assets.forEach(a=>dispose(a.scene));throw Error('Модель зала не загрузилась');}
   const [vicki,lord]=assets;hall=createAshLordHall(lord.scene,lord.animations,`${BASE}img/`);scene.add(hall.root);
   const bounds=new THREE.Box3().setFromObject(vicki.scene),scale=13.94/(bounds.max.y-bounds.min.y);vicki.scene.scale.setScalar(scale);vicki.scene.position.y=-bounds.min.y*scale;hero.add(vicki.scene);mixer=new THREE.AnimationMixer(vicki.scene);actions=createMuspelheimHeroActions(vicki.scene,mixer,vicki.animations);
   equipment=createMuspelheimHeroEquipment(vicki.scene,{load:async asset=>(await load(asset)).scene,weaponAsset:weapon=>weapon==='default'?'Sword.glb':WEAPON_ASSET[weapon],prepare:(item,asset,weapon,isShield)=>{textureSteelOnWeapon(item,asset);if(!isShield)styleNiflheimWeapon(item,weapon);},dispose});
   await equipment.update(live.current);if(!alive)return;loaded=true;setReady(true);setStatus('Резиденция Владыки · Источник питает его силой. Выход — через дверь позади.');saveAshLordVisit(pos);
  };
  loadAll().catch(error=>{if(alive){console.error(error);setFailed(true);setStatus('Не удалось загрузить зал. Повтори загрузку или вернись ко входу.');}});
  const timeout=window.setTimeout(()=>{if(alive&&!loaded){setFailed(true);setStatus('Загрузка зала затянулась. Повтори загрузку или вернись ко входу.');}},60000);
  const clock=new THREE.Clock(),ray=new THREE.Raycaster();camera.position.set(pos.x,22,pos.z+28);const target=new THREE.Vector3();let hudTime=0;
  function tick(){
   if(!alive)return;frame=requestAnimationFrame(tick);const dt=Math.min(clock.getDelta(),.08),active=loaded&&!paused.current&&!document.hidden&&!exiting;let dx=0,dz=0,moving=false;
   if(active){clockTime+=dt;let x=input.current.x+Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft')),z=input.current.z+Number(keys.has('KeyS')||keys.has('ArrowDown'))-Number(keys.has('KeyW')||keys.has('ArrowUp'));const length=Math.hypot(x,z),running=run.current||keys.has('ShiftLeft')||keys.has('ShiftRight');
    if(length){x/=Math.max(1,length);z/=Math.max(1,length);const move=screenMoveToWorld(x,z,basis.current),speed=running?26:17,nx=pos.x+move.x*speed*dt,nz=pos.z+move.z*speed*dt;let next={x:nx,z:nz};if(!ashLordWalkable(nx,nz))next=ashLordWalkable(nx,pos.z)?{x:nx,z:pos.z}:ashLordWalkable(pos.x,nz)?{x:pos.x,z:nz}:{...pos};dx=next.x-pos.x;dz=next.z-pos.z;moving=Math.hypot(dx,dz)>.0001;Object.assign(pos,next);if(moving)hero.rotation.y=Math.atan2(dx,dz);}
    actions?.update(dt,moving,running,live.current.shieldEquipped);hall?.update(dt,pos);view.current=updateFollowCamera(follow,dx,dz,dt);
    if(ashLordExit(pos.x,pos.z)){exiting=true;clear();live.current.onBack();return;}
    hudTime+=dt;if(hudTime>.18){hudTime=0;setNearKeeper(ashLordNear(pos.x,pos.z));}if(clockTime-lastSave>1){lastSave=clockTime;persist();}
   }
   hero.position.set(pos.x,0,pos.z);target.set(pos.x,8,pos.z);const desired=new THREE.Vector3(pos.x+Math.sin(follow.yaw)*27,22,pos.z+Math.cos(follow.yaw)*27),direction=desired.clone().sub(target),distance=direction.length();ray.set(target,direction.normalize());ray.far=distance;
   const solids=hall?.root.children.filter(o=>o instanceof THREE.Mesh&&!(o.material as THREE.Material).transparent)??[],hit=ray.intersectObjects(solids,false)[0];if(hit)desired.copy(target).addScaledVector(direction,Math.max(2,hit.distance-1.3));camera.position.lerp(desired,1-Math.exp(-10*dt));camera.lookAt(target);renderer.render(scene,camera);
  }tick();
  return()=>{persist();alive=false;clearRef.current=()=>{};window.clearTimeout(timeout);cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('keydown',down);window.removeEventListener('keyup',up);window.removeEventListener('blur',clear);document.removeEventListener('visibilitychange',clear);mixer?.stopAllAction();equipment?.dispose();hall?.dispose();dispose(scene);renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();};
 },[retry]);
 const stop=()=>clearRef.current();const steer=(e:React.PointerEvent<HTMLButtonElement>)=>{if(pointer.current!==e.pointerId||paused.current||!ready)return;const r=e.currentTarget.getBoundingClientRect(),dx=e.clientX-r.left-r.width/2,dz=e.clientY-r.top-r.height/2,limit=r.width*.32,n=Math.max(limit,Math.hypot(dx,dz));input.current={x:dx/n,z:dz/n};if(knob.current)knob.current.style.transform=`translate(${input.current.x*36}px,${input.current.z*36}px)`;};
 return <section className="muspelheim-world thread-vault-world" aria-label="Резиденция Владыки" style={{position:'relative',flex:1,minHeight:0,overflow:'hidden',touchAction:'none',background:'#181b1e'}}>
  <div ref={host} style={{position:'absolute',inset:0}}/>
  <div className="thread-vault-title"><b>Резиденция Владыки</b><span>Хранитель Вечного Жара</span></div>
  <div className="thread-vault-health">Vicki · {props.fieldHp??props.maxHp}/{props.maxHp}</div>
  {!dialog&&<><button className="mid3d-ui mid3d-joy muspelheim-joystick" disabled={!ready} aria-label="Управление Vicki: тяни в нужном направлении" onPointerDown={e=>{if(!ready||pointer.current!==null)return;e.preventDefault();pointer.current=e.pointerId;basis.current=view.current;e.currentTarget.setPointerCapture(e.pointerId);steer(e);}} onPointerMove={steer} onPointerUp={stop} onPointerCancel={stop} onLostPointerCapture={stop}><span ref={knob} className="mid3d-knob" aria-hidden="true"/><img src={`${BASE}img/models/ui_joystick.png`} alt="" draggable={false}/></button>
  <button className="muspelheim-btn thread-vault-run" disabled={!ready} onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);run.current=true;}} onPointerUp={()=>run.current=false} onPointerCancel={()=>run.current=false} onLostPointerCapture={()=>run.current=false}>Бег ⚡</button>
  {nearKeeper&&<button className="muspelheim-btn thread-vault-talk" onClick={()=>{stop();setDialog(true);}}>Обратиться к Владыке</button>}</>}
  <div className="muspelheim-status" role="status">{status}{failed&&<><button className="muspelheim-btn" onClick={()=>setRetry(v=>v+1)}>Повторить загрузку</button><button className="muspelheim-btn" onClick={props.onBack}>Вернуться ко входу</button></>}</div>
  {dialog&&<div className="muspelheim-ui-overlay"><section className="muspelheim-ui-panel" role="dialog" aria-modal="true" aria-label="Владыка Пепельного легиона"><h3>Владыка Пепельного легиона</h3><p>«Пока Вечный Жар течёт во мне, пепел не станет покоем для моего легиона».</p><p>Раскалённый источник рядом с Владыкой пульсирует. Каждая вспышка посылает новый поток энергии в его грудь.</p><details><summary>Авторство модели</summary><p><a href={ASH_LORD_CREDIT.url} target="_blank" rel="noopener noreferrer">{ASH_LORD_CREDIT.title} — {ASH_LORD_CREDIT.author}</a>, CC BY 4.0. Копия подготовленной модели вождя: изменены размер, оттенки и роль; сохранён скелет. Анимация ожидания перенесена из <a href="https://sketchfab.com/3d-models/low-poly-orc-62f1637181cb4f6aa38897f5b7ab5edf" target="_blank" rel="noopener noreferrer">Low-poly Orc — Riltariki</a>, CC BY 4.0.</p></details><button className="muspelheim-btn" onClick={()=>setDialog(false)}>Продолжить осмотр</button></section></div>}
 </section>;
}
