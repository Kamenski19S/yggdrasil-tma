import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from './modelLoader';
import {BASE,cachedGlbBuffer,WEAPON_ASSET,textureSteelOnWeapon,styleNiflheimWeapon,type HeroWeapon} from './core';
import {createMuspelheimHeroActions} from './muspelheimHeroActions';
import {createMuspelheimHeroEquipment} from './muspelheimHeroEquipment';
import {createMuspelheimArmorAppearance,type ArmorAppearance} from './muspelheimArmor';
import {screenMoveToWorld,updateFollowCamera,terrainSafeCameraPosition,type FollowCameraState} from './muspelheimCamera';
import {createJotunheimTerrain,JOTUNHEIM_TERRAIN_ASSET,JOTUNHEIM_SPAWN} from './jotunheimTerrain';
import {installJotunheimGateway,JOTUNHEIM_GATEWAY_ASSET,GATEWAY_VIEW} from './jotunheimGateway';
import './jotunheimUI.css';
type Props={weapon:HeroWeapon;shieldAsset:string;shieldEquipped:boolean;armorAppearance:ArmorAppearance};
const HERO_HEIGHT=19.25;
const CAMERA_DISTANCE=38,CAMERA_HEIGHT=25,CAMERA_LOOK_AHEAD=24;
const POSITION_KEY='yggdrasil:jotunheim:position:v1';
function readPosition(){try{const p=JSON.parse(localStorage.getItem(POSITION_KEY)||'null');if(p&&Number.isFinite(p.x)&&Number.isFinite(p.z))return {x:Number(p.x),z:Number(p.z)};}catch{}return {...JOTUNHEIM_SPAWN};}
function dispose(root:THREE.Object3D){const gs=new Set<THREE.BufferGeometry>(),ms=new Set<THREE.Material>(),ts=new Set<THREE.Texture>();root.traverse(o=>{if(o instanceof THREE.Mesh){gs.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material]){ms.add(m);for(const v of Object.values(m))if(v instanceof THREE.Texture)ts.add(v);}}});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());ts.forEach(t=>t.dispose());}
export default function Jotunheim3D(props:Props){
 const host=useRef<HTMLDivElement>(null),knob=useRef<HTMLSpanElement>(null),input=useRef({x:0,z:0}),pointer=useRef<number|null>(null),run=useRef(false),view=useRef(0),basis=useRef(0),clearRef=useRef(()=>{}),gateViewRef=useRef(()=>{}),overviewRef=useRef(false),creditsRef=useRef(false);
 const [overview,setOverview]=useState(false),[credits,setCredits]=useState(false),[ready,setReady]=useState(false),[error,setError]=useState(''),[retry,setRetry]=useState(0);overviewRef.current=overview;creditsRef.current=credits;
 useEffect(()=>{
  const mount=host.current;if(!mount)return;setReady(false);setError('');let renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});}catch{setError('Не удалось запустить 3D. Повтори загрузку.');return;}
  let alive=true,frame=0,loaded=false,saveTime=0;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;mount.appendChild(renderer.domElement);
  const scene=new THREE.Scene();scene.background=new THREE.Color('#adc4d3');scene.fog=new THREE.Fog('#adc4d3',450,1800);scene.add(new THREE.HemisphereLight('#eef5ff','#5d6550',2));const light=new THREE.DirectionalLight('#fff1d5',2.4);light.position.set(-300,700,250);scene.add(light);
  const camera=new THREE.PerspectiveCamera(48,1,.5,3500),hero=new THREE.Group();scene.add(hero);const pos=readPosition(),follow:FollowCameraState={yaw:0,targetYaw:0,turnTime:0};view.current=basis.current=0;
  let terrain:ReturnType<typeof createJotunheimTerrain>|undefined,gateway:ReturnType<typeof installJotunheimGateway>|undefined,actions:ReturnType<typeof createMuspelheimHeroActions>|undefined,mixer:THREE.AnimationMixer|undefined,equipment:ReturnType<typeof createMuspelheimHeroEquipment>|undefined;
  const persist=()=>{if(loaded)try{localStorage.setItem(POSITION_KEY,JSON.stringify(pos));}catch{}};
  const keys=new Set<string>(),clear=()=>{input.current={x:0,z:0};pointer.current=null;run.current=false;keys.clear();if(knob.current)knob.current.style.transform='';persist();};clearRef.current=clear;
  const down=(e:KeyboardEvent)=>{if(!loaded||creditsRef.current)return;if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight'].includes(e.code)){if(!keys.size)basis.current=overviewRef.current?0:view.current;keys.add(e.code);e.preventDefault();}};
  const up=(e:KeyboardEvent)=>keys.delete(e.code);window.addEventListener('keydown',down);window.addEventListener('keyup',up);window.addEventListener('blur',clear);window.addEventListener('pagehide',persist);document.addEventListener('visibilitychange',clear);
  const resize=()=>{const w=mount.clientWidth,h=mount.clientHeight;if(w&&h){renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();}};const observer=new ResizeObserver(resize);observer.observe(mount);resize();
  const loader=new GLTFLoader(),load=async(asset:string)=>loader.parseAsync(await cachedGlbBuffer(`${BASE}img/models/${asset}`),`${BASE}img/models/`);
  async function loadAll(){
   const results=await Promise.allSettled([load(JOTUNHEIM_TERRAIN_ASSET),load('Vika-3d-animated-optimized.glb'),load(JOTUNHEIM_GATEWAY_ASSET)]),assets=results.flatMap(r=>r.status==='fulfilled'?[r.value]:[]);
   if(!alive){assets.forEach(a=>dispose(a.scene));return;}if(results.some(r=>r.status==='rejected')){assets.forEach(a=>dispose(a.scene));throw Error('Не удалось загрузить ландшафт или Вики.');}
   const [mountains,vicki,gateModel]=assets;terrain=createJotunheimTerrain(mountains.scene);scene.add(terrain.root);gateway=installJotunheimGateway(gateModel.scene,terrain);scene.add(gateway.root);
   if(gateway.blocks(pos.x,pos.z)){Object.assign(pos,GATEWAY_VIEW);}
   if(gateway.height(pos.x,pos.z)==null||Math.abs(pos.x)>580||Math.abs(pos.z)>580)Object.assign(pos,JOTUNHEIM_SPAWN);
   const ground=gateway.height(pos.x,pos.z);if(ground==null)throw Error('Не найдено место появления Вики.');
   const box=new THREE.Box3().setFromObject(vicki.scene),scale=HERO_HEIGHT/Math.max(.001,box.max.y-box.min.y);vicki.scene.scale.setScalar(scale);vicki.scene.position.y=-box.min.y*scale;hero.add(vicki.scene);hero.position.set(pos.x,ground+.08,pos.z);hero.rotation.y=Math.PI;
   mixer=new THREE.AnimationMixer(vicki.scene);actions=createMuspelheimHeroActions(vicki.scene,mixer,vicki.animations);createMuspelheimArmorAppearance(vicki.scene).update(props.armorAppearance);
   equipment=createMuspelheimHeroEquipment(vicki.scene,{load:async asset=>(await load(asset)).scene,weaponAsset:weapon=>weapon==='default'?'Sword.glb':WEAPON_ASSET[weapon],prepare:(item,asset,weapon,isShield)=>{textureSteelOnWeapon(item,asset);if(!isShield)styleNiflheimWeapon(item,weapon);},dispose});
   gateViewRef.current=()=>{if(!loaded||!gateway)return;clear();Object.assign(pos,GATEWAY_VIEW);setOverview(false);overviewRef.current=false;follow.yaw=follow.targetYaw=0;follow.turnTime=0;view.current=basis.current=0;hero.rotation.y=Math.PI;const y=gateway.height(pos.x,pos.z)??ground;hero.position.set(pos.x,y+.08,pos.z);camera.position.set(pos.x,y+CAMERA_HEIGHT,pos.z+CAMERA_DISTANCE);persist();};
   await equipment.update(props);if(!alive)return;loaded=true;camera.position.set(pos.x,ground+CAMERA_HEIGHT,pos.z+CAMERA_DISTANCE);camera.lookAt(pos.x,ground+8,pos.z-CAMERA_LOOK_AHEAD);setReady(true);setError('');persist();
  }
  loadAll().catch(reason=>{if(alive){console.error(reason);setError('Не удалось загрузить Йотунхейм. Повтори загрузку.');}});
  const timeout=window.setTimeout(()=>{if(alive&&!loaded)setError('Загрузка затянулась. Можно повторить попытку.');},60000),clock=new THREE.Clock(),focus=new THREE.Vector3(),desired=new THREE.Vector3();let lastOverview=false;
  function tick(){
   if(!alive)return;frame=requestAnimationFrame(tick);const dt=Math.min(clock.getDelta(),.05);if(document.hidden)return;
   if(loaded&&terrain){
    let dx=0,dz=0,moving=false;const running=run.current||keys.has('ShiftLeft')||keys.has('ShiftRight');
    if(!creditsRef.current){let x=input.current.x+Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft')),z=input.current.z+Number(keys.has('KeyS')||keys.has('ArrowDown'))-Number(keys.has('KeyW')||keys.has('ArrowUp'));const length=Math.hypot(x,z);
     if(length){x/=Math.max(1,length);z/=Math.max(1,length);const move=screenMoveToWorld(x,z,basis.current),speed=running?42:25,sx=move.x*speed*dt,sz=move.z*speed*dt;
      const walk=(nx:number,nz:number)=>{if(Math.abs(nx)>580||Math.abs(nz)>580)return false;if(gateway?.blocks(nx,nz))return false;const y=gateway?.height(nx,nz)??terrain!.height(nx,nz),onSteps=gateway?.onStairs(nx,nz)||gateway?.onStairs(pos.x,pos.z);return y!=null&&Math.abs(y-hero.position.y)<=Math.max(onSteps?3.5:0,Math.hypot(nx-pos.x,nz-pos.z)*2.5+.2);};
      const next=walk(pos.x+sx,pos.z+sz)?{x:pos.x+sx,z:pos.z+sz}:walk(pos.x+sx,pos.z)?{x:pos.x+sx,z:pos.z}:walk(pos.x,pos.z+sz)?{x:pos.x,z:pos.z+sz}:pos;dx=next.x-pos.x;dz=next.z-pos.z;Object.assign(pos,next);moving=Math.hypot(dx,dz)>.0001;if(moving)hero.rotation.y=Math.atan2(dx,dz);
     }
    }
    hero.position.set(pos.x,(gateway?.height(pos.x,pos.z)??terrain.height(pos.x,pos.z))!+.08,pos.z);actions?.update(creditsRef.current?0:dt,moving,running,props.shieldEquipped);view.current=updateFollowCamera(follow,dx,dz,dt);
    const fov=overviewRef.current?55:48;if(camera.fov!==fov){camera.fov=fov;camera.updateProjectionMatrix();}
    if(overviewRef.current){desired.set(0,950/Math.min(1,camera.aspect),720);focus.set(0,70,0);}else{focus.set(pos.x,hero.position.y+10,pos.z);const p=terrainSafeCameraPosition(focus,{x:pos.x+Math.sin(follow.yaw)*CAMERA_DISTANCE,y:hero.position.y+CAMERA_HEIGHT,z:pos.z+Math.cos(follow.yaw)*CAMERA_DISTANCE},gateway?.height??terrain.height,5);desired.set(p.x,p.y,p.z);const ahead=CAMERA_LOOK_AHEAD*Math.min(1,Math.hypot(p.x-pos.x,p.z-pos.z)/CAMERA_DISTANCE);focus.set(pos.x-Math.sin(follow.yaw)*ahead,hero.position.y+8,pos.z-Math.cos(follow.yaw)*ahead);}
    if(lastOverview!==overviewRef.current){camera.position.copy(desired);lastOverview=overviewRef.current;}else camera.position.lerp(desired,1-Math.exp(-7*dt));camera.lookAt(focus);saveTime+=dt;if(saveTime>1){saveTime=0;persist();}
   }
   renderer.render(scene,camera);
  }tick();
  return()=>{alive=false;persist();clear();clearRef.current=()=>{};gateViewRef.current=()=>{};cancelAnimationFrame(frame);window.clearTimeout(timeout);observer.disconnect();window.removeEventListener('keydown',down);window.removeEventListener('keyup',up);window.removeEventListener('blur',clear);window.removeEventListener('pagehide',persist);document.removeEventListener('visibilitychange',clear);mixer?.stopAllAction();equipment?.dispose();dispose(scene);renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();};
 },[retry,props.weapon,props.shieldAsset,props.shieldEquipped,props.armorAppearance.armor,props.armorAppearance.helmet,props.armorAppearance.boots]);
 const steer=(e:React.PointerEvent<HTMLButtonElement>)=>{if(pointer.current!==e.pointerId||!ready)return;const r=e.currentTarget.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,z=e.clientY-r.top-r.height/2,div=Math.max(r.width*.32,Math.hypot(x,z));input.current={x:x/div,z:z/div};if(knob.current)knob.current.style.transform=`translate(${input.current.x*30}px,${input.current.z*30}px)`;};
 return <section className="jotunheim-world" aria-label="Йотунхейм — горная страна великанов">
  <div ref={host} className="jotunheim-canvas"/><div className="jotunheim-title"><b>Йотунхейм</b><span>Горная страна великанов</span></div>
  <div className="jotunheim-tools"><button disabled={!ready} onClick={()=>gateViewRef.current()}>К входу</button><button onClick={()=>{clearRef.current();setOverview(v=>!v);}} disabled={!ready}>{overview?'К Вики':'Обзор мира'}</button><button aria-label="О ландшафте" onClick={()=>{clearRef.current();setCredits(true);}}>ⓘ</button></div>
  {!ready&&<div className="jotunheim-loading" role="status">{error||'Загружается горная страна…'}{error&&<button onClick={()=>setRetry(n=>n+1)}>Повторить загрузку</button>}</div>}
  {ready&&!credits&&<><button className="jotunheim-joy" aria-label="Управление Вики: тяни в нужном направлении" onPointerDown={e=>{if(pointer.current!==null)return;e.preventDefault();pointer.current=e.pointerId;basis.current=overviewRef.current?0:view.current;e.currentTarget.setPointerCapture(e.pointerId);steer(e);}} onPointerMove={steer} onPointerUp={()=>clearRef.current()} onPointerCancel={()=>clearRef.current()} onLostPointerCapture={()=>clearRef.current()}><span ref={knob}/><img src={`${BASE}img/models/ui_joystick.png`} alt="" draggable={false}/></button>
  <button className="jotunheim-run" aria-label="Бег: удерживай кнопку" onPointerDown={e=>{e.preventDefault();e.currentTarget.setPointerCapture(e.pointerId);run.current=true;}} onPointerUp={()=>{run.current=false;}} onPointerCancel={()=>{run.current=false;}} onLostPointerCapture={()=>{run.current=false;}}>Бег</button></>}
  {credits&&<div className="jotunheim-overlay"><section role="dialog" aria-modal="true" aria-label="О ландшафте Йотунхейма"><h3>Йотунхейм</h3><p>Каменный вход со ступенями установлен на склоне слева от стартовой долины. «К входу» переносит Вики к подножию лестницы для осмотра.</p><p>Управление: джойстик или WASD / стрелки. Бег: удерживай кнопку или Shift. «Обзор мира» показывает весь ландшафт.</p><p><a href="https://sketchfab.com/3d-models/mountain-range-01-6dff907d427f4c9f8d301075f8019c82" target="_blank" rel="noopener noreferrer">Mountain Range 01 — solararchitect</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Для игры упрощена геометрия, сжаты текстуры и изменён масштаб.</p><button onClick={()=>setCredits(false)}>Продолжить</button></section></div>}
 </section>;
}
