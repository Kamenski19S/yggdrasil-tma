import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from './modelLoader';
import {BASE,cachedGlbBuffer,WEAPON_ASSET,textureSteelOnWeapon,styleNiflheimWeapon,type HeroWeapon} from './core';
import {createMuspelheimHeroActions} from './muspelheimHeroActions';
import {createMuspelheimHeroEquipment} from './muspelheimHeroEquipment';
import {createMuspelheimArmorAppearance,type ArmorAppearance} from './muspelheimArmor';
import {screenMoveToWorld,updateFollowCamera,type FollowCameraState} from './muspelheimCamera';
import {createJotunheimTerrain,JOTUNHEIM_TERRAIN_ASSET,JOTUNHEIM_SPAWN} from './jotunheimTerrain';
import {installJotunheimGateway,JOTUNHEIM_GATEWAY_ASSET,GATEWAY_VIEW} from './jotunheimGateway';
import {JOTUNHEIM_STONE_ASSET,STONE_WALL_CREDIT,installJotunheimStoneBoundary,jotunheimStoneBlocks,STONE_WALL_EDGE,STONE_WALL_NORTH} from './jotunheimStoneBoundary';
import {configureJotunheimGround,SAND_CREDIT} from './jotunheimGround';
import {installJotunheimWaterfalls,WATERFALL_SITES} from './jotunheimWaterfalls';
import {jotunheimCameraPose} from './jotunheimCamera';
import {fitJotunheimOverview} from './jotunheimOverview';
import './jotunheimUI.css';
type Props={weapon:HeroWeapon;shieldAsset:string;shieldEquipped:boolean;armorAppearance:ArmorAppearance};
const HERO_HEIGHT=19.25;
const CAMERA_DISTANCE=38,CAMERA_HEIGHT=25,CAMERA_LOOK_AHEAD=24;
function dispose(root:THREE.Object3D){const gs=new Set<THREE.BufferGeometry>(),ms=new Set<THREE.Material>(),ts=new Set<THREE.Texture>();root.traverse(o=>{if((o instanceof THREE.Mesh||o instanceof THREE.Line)){gs.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material]){ms.add(m);for(const v of Object.values(m))if(v instanceof THREE.Texture)ts.add(v);}}});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());ts.forEach(t=>t.dispose());}
export default function Jotunheim3D(props:Props){
 // Each world visit starts before the stairs; equipment updates retain this visit's position.
 const position=useRef({...JOTUNHEIM_SPAWN});
 const host=useRef<HTMLDivElement>(null),mapLabels=useRef<(HTMLSpanElement|null)[]>([]),knob=useRef<HTMLSpanElement>(null),input=useRef({x:0,z:0}),pointer=useRef<number|null>(null),run=useRef(false),view=useRef(0),basis=useRef(0),clearRef=useRef(()=>{}),gateViewRef=useRef(()=>{}),waterfallViewRef=useRef((index:number)=>{}),overviewRef=useRef(false),creditsRef=useRef(false);
 const [overview,setOverview]=useState(false),[credits,setCredits]=useState(false),[ready,setReady]=useState(false),[error,setError]=useState(''),[retry,setRetry]=useState(0);overviewRef.current=overview;creditsRef.current=credits;
 useEffect(()=>{
  const mount=host.current;if(!mount)return;setReady(false);setError('');let renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});}catch{setError('Не удалось запустить 3D. Повтори загрузку.');return;}
  let alive=true,frame=0,loaded=false,snapCamera=true;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;mount.appendChild(renderer.domElement);
  const scene=new THREE.Scene();scene.background=new THREE.Color('#adc4d3');const walkingFog=new THREE.Fog('#adc4d3',450,1800);scene.fog=walkingFog;scene.add(new THREE.HemisphereLight('#eef5ff','#5d6550',2));const light=new THREE.DirectionalLight('#fff1d5',2.4);light.position.set(-300,700,250);scene.add(light);
  const camera=new THREE.PerspectiveCamera(48,1,.5,3500),hero=new THREE.Group(),mapCamera=new THREE.OrthographicCamera(),mapGuides=new THREE.Group();scene.add(hero,mapGuides);mapGuides.visible=false;let mapBounds:THREE.Box3|undefined;const pos=position.current,follow:FollowCameraState={yaw:0,targetYaw:0,turnTime:0};view.current=basis.current=0;
  let terrain:ReturnType<typeof createJotunheimTerrain>|undefined,gateway:ReturnType<typeof installJotunheimGateway>|undefined,stoneWall:ReturnType<typeof installJotunheimStoneBoundary>|undefined,groundSurface:ReturnType<typeof configureJotunheimGround>|undefined,waterfalls:ReturnType<typeof installJotunheimWaterfalls>|undefined,actions:ReturnType<typeof createMuspelheimHeroActions>|undefined,mixer:THREE.AnimationMixer|undefined,equipment:ReturnType<typeof createMuspelheimHeroEquipment>|undefined;
  const floorAt=(x:number,z:number)=>{const floor=gateway?.height(x,z)??terrain?.height(x,z)??null;return waterfalls?.height(x,z,floor)??floor;};
  const keys=new Set<string>(),clear=()=>{input.current={x:0,z:0};pointer.current=null;run.current=false;keys.clear();if(knob.current)knob.current.style.transform='';};clearRef.current=clear;
  const down=(e:KeyboardEvent)=>{if(!loaded||creditsRef.current||overviewRef.current)return;if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight'].includes(e.code)){if(!keys.size)basis.current=overviewRef.current?0:view.current;keys.add(e.code);e.preventDefault();}};
  const up=(e:KeyboardEvent)=>keys.delete(e.code);window.addEventListener('keydown',down);window.addEventListener('keyup',up);window.addEventListener('blur',clear);document.addEventListener('visibilitychange',clear);
  const resize=()=>{const w=mount.clientWidth,h=mount.clientHeight;if(w&&h){renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();if(mapBounds)fitJotunheimOverview(mapCamera,mapBounds,w/h,h);}};const observer=new ResizeObserver(resize);observer.observe(mount);resize();
  const loader=new GLTFLoader(),load=async(asset:string)=>loader.parseAsync(await cachedGlbBuffer(`${BASE}img/models/${asset}`),`${BASE}img/models/`);
  async function loadAll(){
   const results=await Promise.allSettled([load(JOTUNHEIM_TERRAIN_ASSET),load('Vika-3d-animated-optimized.glb'),load(JOTUNHEIM_GATEWAY_ASSET),load(JOTUNHEIM_STONE_ASSET),load(WATERFALL_SITES[0].asset)]),core=results.slice(0,4),assets=core.flatMap(r=>r.status==='fulfilled'?[r.value]:[]);
   if(!alive){assets.forEach(a=>dispose(a.scene));return;}if(core.some(r=>r.status==='rejected')){assets.forEach(a=>dispose(a.scene));throw Error('Не удалось загрузить ландшафт или Вики.');}
   const [mountains,vicki,gateModel,wallModel]=assets;terrain=createJotunheimTerrain(mountains.scene);scene.add(terrain.root);gateway=installJotunheimGateway(gateModel.scene,terrain);scene.add(gateway.root);waterfalls=installJotunheimWaterfalls(terrain,results[4].status==='fulfilled'?results[4].value.scene:undefined);scene.add(waterfalls.root);stoneWall=installJotunheimStoneBoundary(wallModel.scene,terrain);scene.add(stoneWall.root);groundSurface=configureJotunheimGround(terrain.root,`${BASE}img/`,renderer.capabilities.getMaxAnisotropy());
   mapBounds=new THREE.Box3().setFromObject(terrain.root).union(new THREE.Box3().setFromObject(gateway.root)).union(new THREE.Box3().setFromObject(stoneWall.root)).union(new THREE.Box3().setFromObject(waterfalls.root));fitJotunheimOverview(mapCamera,mapBounds,camera.aspect,mount!.clientHeight);
   // Highlight the real fence perimeter in the map, leaving the entry opening.
   for(const segment of stoneWall.segments){const points:THREE.Vector3[]=[],steps=Math.ceil((segment.end-segment.start)/20);for(let k=0;k<=steps;k++){const along=THREE.MathUtils.lerp(segment.start,segment.end,k/steps),x=segment.side===0||segment.side===2?along:segment.side===1?STONE_WALL_EDGE:-STONE_WALL_EDGE,z=segment.side===1||segment.side===3?along:segment.side===0?STONE_WALL_NORTH:STONE_WALL_EDGE;points.push(new THREE.Vector3(x,(terrain.height(x,z)??0)+34,z));}mapGuides.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),new THREE.LineBasicMaterial({color:0xffd37d,depthTest:false,depthWrite:false})));mapGuides.children[mapGuides.children.length-1].renderOrder=1000;}

   if(gateway.blocks(pos.x,pos.z)||jotunheimStoneBlocks(pos.x,pos.z)){Object.assign(pos,GATEWAY_VIEW);}
   if(gateway.height(pos.x,pos.z)==null||jotunheimStoneBlocks(pos.x,pos.z))Object.assign(pos,JOTUNHEIM_SPAWN);
   const ground=gateway.height(pos.x,pos.z);if(ground==null)throw Error('Не найдено место появления Вики.');
   const box=new THREE.Box3().setFromObject(vicki.scene),scale=HERO_HEIGHT/Math.max(.001,box.max.y-box.min.y);vicki.scene.scale.setScalar(scale);vicki.scene.position.y=-box.min.y*scale;hero.add(vicki.scene);hero.position.set(pos.x,ground+.08,pos.z);hero.rotation.y=Math.PI;
   mixer=new THREE.AnimationMixer(vicki.scene);actions=createMuspelheimHeroActions(vicki.scene,mixer,vicki.animations);createMuspelheimArmorAppearance(vicki.scene).update(props.armorAppearance);
   equipment=createMuspelheimHeroEquipment(vicki.scene,{load:async asset=>(await load(asset)).scene,weaponAsset:weapon=>weapon==='default'?'Sword.glb':WEAPON_ASSET[weapon],prepare:(item,asset,weapon,isShield)=>{textureSteelOnWeapon(item,asset);if(!isShield)styleNiflheimWeapon(item,weapon);},dispose});
   gateViewRef.current=()=>{if(!loaded||!gateway)return;clear();Object.assign(pos,GATEWAY_VIEW);setOverview(false);overviewRef.current=false;follow.yaw=follow.targetYaw=0;follow.turnTime=0;view.current=basis.current=0;hero.rotation.y=Math.PI;const y=gateway.height(pos.x,pos.z)??ground;hero.position.set(pos.x,y+.08,pos.z);snapCamera=true;};
   waterfallViewRef.current=(index:number)=>{if(!loaded||!waterfalls)return;const p=waterfalls.viewpoints[index];if(!p)return;clear();pos.x=p.x;pos.z=p.z;setOverview(false);overviewRef.current=false;follow.yaw=follow.targetYaw=p.yaw;follow.turnTime=0;view.current=basis.current=p.yaw;hero.rotation.y=p.yaw+Math.PI;const y=floorAt(p.x,p.z)??ground;hero.position.set(p.x,y+.08,p.z);snapCamera=true;};
   await Promise.all([equipment.update(props),groundSurface.ready]);if(!alive)return;loaded=true;camera.position.set(pos.x,ground+CAMERA_HEIGHT,pos.z+CAMERA_DISTANCE);camera.lookAt(pos.x,ground+8,pos.z-CAMERA_LOOK_AHEAD);setReady(true);setError('');
  }
  loadAll().catch(reason=>{if(alive){console.error(reason);setError('Не удалось загрузить Йотунхейм. Повтори загрузку.');}});
  const timeout=window.setTimeout(()=>{if(alive&&!loaded)setError('Загрузка затянулась. Можно повторить попытку.');},60000),clock=new THREE.Clock(),focus=new THREE.Vector3(),desired=new THREE.Vector3();let lastOverview=false,lastCameraYaw=0;
  function tick(){
   if(!alive)return;frame=requestAnimationFrame(tick);const dt=Math.min(clock.getDelta(),.05);if(document.hidden)return;
   if(loaded&&terrain){
    let dx=0,dz=0,moving=false;const running=run.current||keys.has('ShiftLeft')||keys.has('ShiftRight');
    if(!creditsRef.current&&!overviewRef.current){let x=input.current.x+Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft')),z=input.current.z+Number(keys.has('KeyS')||keys.has('ArrowDown'))-Number(keys.has('KeyW')||keys.has('ArrowUp'));const length=Math.hypot(x,z);
     if(length){x/=Math.max(1,length);z/=Math.max(1,length);const move=screenMoveToWorld(x,z,basis.current),speed=running?42:25,sx=move.x*speed*dt,sz=move.z*speed*dt;
      const walk=(nx:number,nz:number)=>{if(jotunheimStoneBlocks(nx,nz))return false;if(gateway?.blocks(nx,nz))return false;const y=floorAt(nx,nz),onSteps=gateway?.onStairs(nx,nz)||gateway?.onStairs(pos.x,pos.z);return y!=null&&Math.abs(y-hero.position.y)<=Math.max(onSteps?3.5:0,Math.hypot(nx-pos.x,nz-pos.z)*2.5+.2);};
      const next=walk(pos.x+sx,pos.z+sz)?{x:pos.x+sx,z:pos.z+sz}:walk(pos.x+sx,pos.z)?{x:pos.x+sx,z:pos.z}:walk(pos.x,pos.z+sz)?{x:pos.x,z:pos.z+sz}:pos;dx=next.x-pos.x;dz=next.z-pos.z;Object.assign(pos,next);moving=Math.hypot(dx,dz)>.0001;if(moving)hero.rotation.y=Math.atan2(dx,dz);
     }
    }
    hero.position.set(pos.x,floorAt(pos.x,pos.z)!+.08,pos.z);actions?.update(creditsRef.current?0:dt,moving,running,props.shieldEquipped);view.current=updateFollowCamera(follow,dx,dz,dt);
    const pose=jotunheimCameraPose(hero.position,follow.yaw,(x,z)=>{const floor=floorAt(x,z);return stoneWall?.cameraHeight(x,z,floor)??floor;});
    const fov=pose.fov;if(camera.fov!==fov){camera.fov=fov;camera.updateProjectionMatrix();}
    if(!overviewRef.current){desired.set(pose.position.x,pose.position.y,pose.position.z);focus.set(pose.target.x,pose.target.y,pose.target.z);view.current=pose.yaw;
     if(snapCamera||lastOverview||Math.abs(Math.atan2(Math.sin(pose.yaw-lastCameraYaw),Math.cos(pose.yaw-lastCameraYaw)))>Math.PI/2){camera.position.copy(desired);snapCamera=false;}else camera.position.lerp(desired,1-Math.exp(-7*dt));camera.lookAt(focus);lastCameraYaw=pose.yaw;}
    lastOverview=overviewRef.current;mapGuides.visible=overviewRef.current;scene.fog=overviewRef.current?null:walkingFog;
    if(overviewRef.current){const points=[{x:-140,z:465},...WATERFALL_SITES.map(s=>({x:s.x,z:s.z})),{x:pos.x,z:pos.z}];points.forEach((p,i)=>{const label=mapLabels.current[i];if(!label)return;const screen=new THREE.Vector3(p.x,(floorAt(p.x,p.z)??0)+12,p.z).project(mapCamera);label.style.left=`${(screen.x+1)*50}%`;label.style.top=`${(1-screen.y)*50}%`;});}
   }
   renderer.render(scene,overviewRef.current&&loaded?mapCamera:camera);
  }tick();
  return()=>{alive=false;clear();clearRef.current=()=>{};gateViewRef.current=()=>{};waterfallViewRef.current=()=>{};cancelAnimationFrame(frame);window.clearTimeout(timeout);observer.disconnect();window.removeEventListener('keydown',down);window.removeEventListener('keyup',up);window.removeEventListener('blur',clear);document.removeEventListener('visibilitychange',clear);mixer?.stopAllAction();equipment?.dispose();groundSurface?.dispose();dispose(scene);renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();};
 },[retry,props.weapon,props.shieldAsset,props.shieldEquipped,props.armorAppearance.armor,props.armorAppearance.helmet,props.armorAppearance.boots]);
 const steer=(e:React.PointerEvent<HTMLButtonElement>)=>{if(pointer.current!==e.pointerId||!ready)return;const r=e.currentTarget.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,z=e.clientY-r.top-r.height/2,div=Math.max(r.width*.32,Math.hypot(x,z));input.current={x:x/div,z:z/div};if(knob.current)knob.current.style.transform=`translate(${input.current.x*30}px,${input.current.z*30}px)`;};
 return <section className="jotunheim-world" aria-label="Йотунхейм — горная страна великанов">
  <div ref={host} className="jotunheim-canvas"/><div className="jotunheim-title"><b>Йотунхейм</b><span>Горная страна великанов</span></div>
  <div className="jotunheim-tools"><button disabled={!ready} onClick={()=>gateViewRef.current()}>К входу</button><button onClick={()=>{clearRef.current();setOverview(v=>!v);}} disabled={!ready}>{overview?'К Вики':'Обзор мира'}</button><button aria-label="О ландшафте" onClick={()=>{clearRef.current();setCredits(true);}}>ⓘ</button></div>
  <div className="jotunheim-waterfall-tools">{WATERFALL_SITES.map((s,i)=><button key={s.asset} disabled={!ready} onClick={()=>waterfallViewRef.current(i)}>Водопад</button>)}</div>
  {overview&&<div className="jotunheim-map-labels">{['Вход','Вариант 1','Вариант 2','Вики'].map((name,i)=><span key={name} ref={el=>{mapLabels.current[i]=el;}}>{name}</span>)}<b>Золотой контур — граница мира</b></div>}
  <div className="jotunheim-attribution">Ограда: <a href={STONE_WALL_CREDIT.sourceUrl} target="_blank" rel="noopener noreferrer">{STONE_WALL_CREDIT.author}</a> · <a href={STONE_WALL_CREDIT.licenseUrl} target="_blank" rel="noopener noreferrer">CC BY 4.0</a></div>
  {!ready&&<div className="jotunheim-loading" role="status">{error||'Загружается горная страна…'}{error&&<button onClick={()=>setRetry(n=>n+1)}>Повторить загрузку</button>}</div>}
  {ready&&!credits&&!overview&&<><button className="jotunheim-joy" aria-label="Управление Вики: тяни в нужном направлении" onPointerDown={e=>{if(pointer.current!==null)return;e.preventDefault();pointer.current=e.pointerId;basis.current=overviewRef.current?0:view.current;e.currentTarget.setPointerCapture(e.pointerId);steer(e);}} onPointerMove={steer} onPointerUp={()=>clearRef.current()} onPointerCancel={()=>clearRef.current()} onLostPointerCapture={()=>clearRef.current()}><span ref={knob}/><img src={`${BASE}img/models/ui_joystick.png`} alt="" draggable={false}/></button>
  <button className="jotunheim-run" aria-label="Бег: удерживай кнопку" onPointerDown={e=>{e.preventDefault();e.currentTarget.setPointerCapture(e.pointerId);run.current=true;}} onPointerUp={()=>{run.current=false;}} onPointerCancel={()=>{run.current=false;}} onLostPointerCapture={()=>{run.current=false;}}>Бег</button></>}
  {credits&&<div className="jotunheim-overlay"><section role="dialog" aria-modal="true" aria-label="О ландшафте Йотунхейма"><h3>Йотунхейм</h3><p>Каменный вход со ступенями установлен у южной границы мира. За вратами площадка плавно переходит в холм. «К входу» переносит Вики к подножию лестницы для осмотра.</p><p>Каменная ограда: <a href={STONE_WALL_CREDIT.sourceUrl} target="_blank" rel="noopener noreferrer">{STONE_WALL_CREDIT.title}</a> — <a href={STONE_WALL_CREDIT.authorUrl} target="_blank" rel="noopener noreferrer">{STONE_WALL_CREDIT.author}</a>, <a href={STONE_WALL_CREDIT.licenseUrl} target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Для игры оптимизированы геометрия и текстуры, изменены масштаб и форма по рельефу.</p><p>Текстура песка: <a href={SAND_CREDIT.sourceUrl} target="_blank" rel="noopener noreferrer">{SAND_CREDIT.title}</a> — <a href={SAND_CREDIT.authorUrl} target="_blank" rel="noopener noreferrer">{SAND_CREDIT.author}</a>, <a href={SAND_CREDIT.licenseUrl} target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Цветовая текстура извлечена из модели и сжата для игры.</p><p>Один водопад Йотунхейма: оригинальная текстурированная модель Jotunheim_First_Waterfall.glb. При отсутствии файла используется временная геометрия.</p><p>Управление: джойстик или WASD / стрелки. Бег: удерживай кнопку или Shift. «Обзор мира» показывает весь ландшафт.</p><p><a href="https://sketchfab.com/3d-models/mountain-range-01-6dff907d427f4c9f8d301075f8019c82" target="_blank" rel="noopener noreferrer">Mountain Range 01 — solararchitect</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Для игры упрощена геометрия, сжаты текстуры и изменён масштаб.</p><button onClick={()=>setCredits(false)}>Продолжить</button></section></div>}
 </section>;
}
