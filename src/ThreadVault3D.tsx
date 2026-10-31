import {createPlayerFireball} from './playerFireball';
import {MuspelheimInteriorHUD,type InteriorHUDData} from './MuspelheimInteriorHUD';
import {MuspelheimActionWheel} from './MuspelheimActionWheel';
import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from './modelLoader';
import {BASE,cachedGlbBuffer,WEAPON_ASSET,textureSteelOnWeapon,styleNiflheimWeapon,type HeroWeapon} from './core';
import {createThreadHall,threadHallWalkable,threadHallNearKeeper,threadHallExit,THREAD_WELL_ASSET,THREAD_KEEPER_ASSET,THREAD_WELL_CREDIT,THREAD_KEEPER_CREDIT} from './muspelheimThreadHall';
import {readThreadVaultVisit,saveThreadVaultVisit} from './threadVaultSession';
import {screenMoveToWorld,updateFollowCamera,type FollowCameraState} from './muspelheimCamera';
import {createMuspelheimHeroActions} from './muspelheimHeroActions';
import {createMuspelheimHeroEquipment} from './muspelheimHeroEquipment';
import './muspelheimUI.css';
type Props={hud:InteriorHUDData;onBack:()=>void;weapon:HeroWeapon;shieldAsset:string;shieldEquipped:boolean;fieldHp:number|null;maxHp:number};
function dispose(root:THREE.Object3D){const gs=new Set<THREE.BufferGeometry>(),ms=new Set<THREE.Material>(),ts=new Set<THREE.Texture>();root.traverse(o=>{if(o instanceof THREE.Mesh||o instanceof THREE.Sprite){if(o instanceof THREE.Mesh)gs.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material]){ms.add(m);for(const v of Object.values(m))if(v instanceof THREE.Texture)ts.add(v);}}});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());ts.forEach(t=>t.dispose());}
export default function ThreadVault3D(props:Props){
 const host=useRef<HTMLDivElement>(null),input=useRef({x:0,z:0}),pointer=useRef<number|null>(null),knob=useRef<HTMLSpanElement>(null),run=useRef(false),view=useRef(0),basis=useRef(0),live=useRef(props);live.current=props;
 const [dialog,setDialog]=useState(false),[nearKeeper,setNearKeeper]=useState(false),[failed,setFailed]=useState(false),[retry,setRetry]=useState(0),[ready,setReady]=useState(false),[status,setStatus]=useState('Открывается Хранилище трёх нитей…');
 const [panelOpen,setPanelOpen]=useState(false);const combat=useRef({attack:()=>{},shield:()=>{},magic:()=>{}});const paused=useRef(false);paused.current=dialog||panelOpen;const clearRef=useRef(()=>{});
 useEffect(()=>{
  const mount=host.current;if(!mount)return;let renderer:THREE.WebGLRenderer;
  setFailed(false);setReady(false);
  try{renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});}catch{setFailed(true);setStatus('Не удалось открыть зал. Повтори загрузку или вернись ко входу.');return;}
  let alive=true,frame=0,loaded=false,exiting=false,lastSave=0,clockTime=0;
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;mount.appendChild(renderer.domElement);
  view.current=0;basis.current=0;
  const scene=new THREE.Scene();scene.background=new THREE.Color('#14121c');scene.fog=new THREE.Fog('#14121c',85,180);scene.add(new THREE.HemisphereLight('#d6d5eb','#3a2833',2.1));const light=new THREE.DirectionalLight('#e3d7ca',1.6);light.position.set(-30,45,35);scene.add(light);
  const camera=new THREE.PerspectiveCamera(54,1,.1,240),hero=new THREE.Group();hero.rotation.y=Math.PI;scene.add(hero);const pos=readThreadVaultVisit()??{x:0,z:43};if(!threadHallWalkable(pos.x,pos.z)){pos.x=0;pos.z=43;}
  let hall:ReturnType<typeof createThreadHall>|undefined,mixer:THREE.AnimationMixer|undefined,actions:ReturnType<typeof createMuspelheimHeroActions>|undefined,equipment:ReturnType<typeof createMuspelheimHeroEquipment>|undefined;
  const playerFire=createPlayerFireball(()=>[],(_a,b)=>!threadHallWalkable(b.x,b.z));scene.add(playerFire.root);
  const keys=new Set<string>(),follow:FollowCameraState={yaw:0,targetYaw:0,turnTime:0};
  const persist=()=>{if(loaded&&!exiting)saveThreadVaultVisit(pos);};
  const clear=()=>{input.current={x:0,z:0};pointer.current=null;run.current=false;keys.clear();if(knob.current)knob.current.style.transform='';persist();};clearRef.current=clear;
  const down=(e:KeyboardEvent)=>{if(paused.current||!loaded)return;if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight'].includes(e.code)){if(!keys.size)basis.current=view.current;keys.add(e.code);e.preventDefault();}if(e.code==='KeyE'&&threadHallNearKeeper(pos.x,pos.z)){clear();setDialog(true);}};
  const up=(e:KeyboardEvent)=>keys.delete(e.code);window.addEventListener('keydown',down);window.addEventListener('keyup',up);window.addEventListener('blur',clear);document.addEventListener('visibilitychange',clear);
  const resize=()=>{const w=mount.clientWidth,h=mount.clientHeight;if(w&&h){renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();}};const observer=new ResizeObserver(resize);observer.observe(mount);resize();
  const loader=new GLTFLoader(),load=async(asset:string)=>loader.parseAsync(await cachedGlbBuffer(`${BASE}img/models/${asset}`),`${BASE}img/models/`);
  const loadAll=async()=>{
   const results=await Promise.allSettled([load('Vika-3d-animated-optimized.glb'),load(THREAD_WELL_ASSET),load(THREAD_KEEPER_ASSET)]);
   const assets=results.flatMap(r=>r.status==='fulfilled'?[r.value]:[]);
   if(!alive){assets.forEach(a=>dispose(a.scene));return;}if(results.some(r=>r.status==='rejected')){assets.forEach(a=>dispose(a.scene));throw Error('Модель зала не загрузилась');}
   const [vicki,well,keeper]=assets;hall=createThreadHall(well.scene,keeper.scene,`${BASE}img/`);scene.add(hall.root);
   const bounds=new THREE.Box3().setFromObject(vicki.scene),scale=13.94/(bounds.max.y-bounds.min.y);vicki.scene.scale.setScalar(scale);vicki.scene.position.y=-bounds.min.y*scale;hero.add(vicki.scene);mixer=new THREE.AnimationMixer(vicki.scene);actions=createMuspelheimHeroActions(vicki.scene,mixer,vicki.animations);
   combat.current={attack:()=>{if(!paused.current)actions?.attack();},shield:()=>{if(!paused.current&&live.current.shieldEquipped)actions?.shield();},magic:()=>{if(!paused.current&&loaded)setStatus(playerFire.cast(hero,0)?'Алый огненный сгусток!':'Магия восстанавливается.');}};
   equipment=createMuspelheimHeroEquipment(vicki.scene,{load:async asset=>(await load(asset)).scene,weaponAsset:weapon=>weapon==='default'?'Sword.glb':WEAPON_ASSET[weapon],prepare:(item,asset,weapon,isShield)=>{textureSteelOnWeapon(item,asset);if(!isShield)styleNiflheimWeapon(item,weapon);},dispose});
   await equipment.update(live.current);if(!alive)return;loaded=true;setReady(true);setStatus('Хранилище трёх нитей · Подойди к колодцу или Хранителю. Выход — через дверь позади.');saveThreadVaultVisit(pos);
  };
  loadAll().catch(error=>{if(alive){console.error(error);setFailed(true);setStatus('Не удалось загрузить зал. Повтори загрузку или вернись ко входу.');}});
  const timeout=window.setTimeout(()=>{if(alive&&!loaded){setFailed(true);setStatus('Загрузка зала затянулась. Повтори загрузку или вернись ко входу.');}},60000);
  const clock=new THREE.Clock(),ray=new THREE.Raycaster();camera.position.set(pos.x,22,pos.z+28);const target=new THREE.Vector3();let hudTime=0;
  function tick(){
   if(!alive)return;frame=requestAnimationFrame(tick);const dt=Math.min(clock.getDelta(),.08),active=loaded&&!paused.current&&!document.hidden&&!exiting;let dx=0,dz=0,moving=false;
   if(active){clockTime+=dt;let x=input.current.x+Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft')),z=input.current.z+Number(keys.has('KeyS')||keys.has('ArrowDown'))-Number(keys.has('KeyW')||keys.has('ArrowUp'));const length=Math.hypot(x,z),running=run.current||keys.has('ShiftLeft')||keys.has('ShiftRight');
    if(length){x/=Math.max(1,length);z/=Math.max(1,length);const move=screenMoveToWorld(x,z,basis.current),speed=running?26:17,nx=pos.x+move.x*speed*dt,nz=pos.z+move.z*speed*dt;let next={x:nx,z:nz};if(!threadHallWalkable(nx,nz))next=threadHallWalkable(nx,pos.z)?{x:nx,z:pos.z}:threadHallWalkable(pos.x,nz)?{x:pos.x,z:nz}:{...pos};dx=next.x-pos.x;dz=next.z-pos.z;moving=Math.hypot(dx,dz)>.0001;Object.assign(pos,next);if(moving)hero.rotation.y=Math.atan2(dx,dz);}
    actions?.update(dt,moving,running,live.current.shieldEquipped);hall?.update(dt,pos);view.current=updateFollowCamera(follow,dx,dz,dt);
    if(threadHallExit(pos.x,pos.z)){exiting=true;clear();live.current.onBack();return;}
    hudTime+=dt;if(hudTime>.18){hudTime=0;setNearKeeper(threadHallNearKeeper(pos.x,pos.z));}if(clockTime-lastSave>1){lastSave=clockTime;persist();}
   }
   hero.position.set(pos.x,0,pos.z);target.set(pos.x,8,pos.z);const desired=new THREE.Vector3(pos.x+Math.sin(follow.yaw)*27,22,pos.z+Math.cos(follow.yaw)*27),direction=desired.clone().sub(target),distance=direction.length();ray.set(target,direction.normalize());ray.far=distance;
   const solids=hall?.root.children.filter(o=>o instanceof THREE.Mesh&&!(o.material as THREE.Material).transparent)??[],hit=ray.intersectObjects(solids,false)[0];if(hit)desired.copy(target).addScaledVector(direction,Math.max(2,hit.distance-1.3));camera.position.lerp(desired,1-Math.exp(-10*dt));camera.lookAt(target);playerFire.update(active?dt:0,camera);renderer.render(scene,camera);
  }tick();
  return()=>{persist();alive=false;combat.current={attack:()=>{},shield:()=>{},magic:()=>{}};clearRef.current=()=>{};window.clearTimeout(timeout);cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('keydown',down);window.removeEventListener('keyup',up);window.removeEventListener('blur',clear);document.removeEventListener('visibilitychange',clear);mixer?.stopAllAction();equipment?.dispose();playerFire.dispose();hall?.dispose();dispose(scene);renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();};
 },[retry]);
 const stop=()=>clearRef.current();const steer=(e:React.PointerEvent<HTMLButtonElement>)=>{if(pointer.current!==e.pointerId||paused.current||!ready)return;const r=e.currentTarget.getBoundingClientRect(),dx=e.clientX-r.left-r.width/2,dz=e.clientY-r.top-r.height/2,limit=r.width*.32,n=Math.max(limit,Math.hypot(dx,dz));input.current={x:dx/n,z:dz/n};if(knob.current)knob.current.style.transform=`translate(${input.current.x*36}px,${input.current.z*36}px)`;};
 return <section className="muspelheim-world thread-vault-world muspelheim-interior" aria-label="Хранилище трёх нитей" style={{position:'relative',flex:1,minHeight:0,overflow:'hidden',touchAction:'none',background:'#14121c'}}>
  <div ref={host} style={{position:'absolute',inset:0}}/>
  <div className="thread-vault-title"><b>Хранилище трёх нитей</b><span>Белая · Красная · Чёрная</span></div>
  <div className="thread-vault-health">Vicki · {props.fieldHp??props.maxHp}/{props.maxHp}</div>
  {!dialog&&!panelOpen&&<><button className="mid3d-ui mid3d-joy muspelheim-joystick" disabled={!ready} aria-label="Управление Vicki: тяни в нужном направлении" onPointerDown={e=>{if(!ready||pointer.current!==null)return;e.preventDefault();pointer.current=e.pointerId;basis.current=view.current;e.currentTarget.setPointerCapture(e.pointerId);steer(e);}} onPointerMove={steer} onPointerUp={stop} onPointerCancel={stop} onLostPointerCapture={stop}><span ref={knob} className="mid3d-knob" aria-hidden="true"/><img src={`${BASE}img/models/ui_joystick.png`} alt="" draggable={false}/></button>
  <MuspelheimActionWheel base={BASE} shieldEquipped={props.shieldEquipped} onAttack={()=>combat.current.attack()} onShield={()=>combat.current.shield()} onMagic={()=>combat.current.magic()} onBarrier={()=>setStatus('Здесь безопасно: вражеских заклинаний нет.')} onRunChange={value=>{run.current=value;}}/>

  {nearKeeper&&<button className="muspelheim-btn thread-vault-talk" onClick={()=>{stop();setDialog(true);}}>Поговорить с Хранителем</button>}</>}
  {!dialog&&<MuspelheimInteriorHUD data={props.hud} location="Хранилище трёх нитей" hp={props.fieldHp??props.maxHp} stop={stop} onPauseChange={setPanelOpen}/>}
  <div className="muspelheim-status" role="status">{status}{failed&&<><button className="muspelheim-btn" onClick={()=>setRetry(v=>v+1)}>Повторить загрузку</button><button className="muspelheim-btn" onClick={props.onBack}>Вернуться ко входу</button></>}</div>
  {dialog&&<div className="muspelheim-ui-overlay"><section className="muspelheim-ui-panel" role="dialog" aria-modal="true" aria-label="Хранитель трёх нитей"><h3>Хранитель трёх нитей</h3><p>«Ты вошла в Хранилище. Здесь белая, красная и чёрная нити поднимаются из одного колодца. Смотри на них, но не пытайся оборвать».</p><p>«Когда захочешь уйти, возвращайся через дверь, которой пришла».</p><details><summary>Авторство моделей</summary><p><a href={THREAD_WELL_CREDIT.url} target="_blank" rel="noopener noreferrer">{THREAD_WELL_CREDIT.title} — {THREAD_WELL_CREDIT.author}</a>, CC BY 4.0. Колодец из Нифльхейма увеличен для зала, сохранены исходные материалы; добавлены три огненные нити.</p><p><a href={THREAD_KEEPER_CREDIT.url} target="_blank" rel="noopener noreferrer">{THREAD_KEEPER_CREDIT.title} — {THREAD_KEEPER_CREDIT.author}</a>, CC BY 4.0. Использована копия подготовленной модели со скелетом; изменены роль, масштаб и поза ожидания.</p></details><button className="muspelheim-btn" onClick={()=>setDialog(false)}>Продолжить осмотр</button></section></div>}
 </section>;
}
