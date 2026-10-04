import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {BASE,cachedGlbBuffer} from './core';
import {NIFL_SCALE,NIFL_SOURCE,NIFL_LOCATIONS,NIFL_RIVERS,NIFL_LAKES,NIFL_ROUTES,niflGroundY,clampNiflPosition} from './niflheimMapData';

const hash=(x:number,z:number)=>{const n=Math.sin(x*127.1+z*311.7)*43758.5453;return n-Math.floor(n);};
const CSS=`
.nifl-world{position:relative;flex:1;min-height:0;overflow:hidden;background:#9ab3c4;touch-action:none}.nifl-mount{position:absolute;inset:0}.nifl-mount canvas{display:block;width:100%;height:100%}.nifl-top{position:absolute;top:12px;left:12px;right:12px;display:flex;justify-content:space-between;align-items:flex-start;gap:8px;pointer-events:none}.nifl-top h2{margin:0;color:#eaf7ff;font-size:20px;text-shadow:0 2px 4px #143449}.nifl-top p{margin:4px 0;color:#eaf7ff;font-size:11px;text-shadow:0 1px 3px #143449}.nifl-top button{pointer-events:auto;background:#f9fcff;color:#253847;border:2px solid #b7c9d2;border-radius:10px;padding:10px;font:inherit;font-size:13px}.nifl-status{position:absolute;top:70px;left:50%;transform:translateX(-50%);padding:7px 12px;border-radius:9px;background:#fff;color:#253847;font-size:12px;text-align:center;max-width:85%}
.nifl-joystick{position:absolute;bottom:24px;left:18px;width:124px;height:124px;border:0;padding:0;background:transparent;touch-action:none;user-select:none}.nifl-joystick img{width:100%;height:100%;pointer-events:none}.nifl-stick{position:absolute;width:32px;height:32px;left:46px;top:46px;border-radius:50%;background:#efd58566;border:2px solid #fff7c866;pointer-events:none}

.nifl-near{position:absolute;bottom:24px;right:14px;width:min(44%,210px);background:#fffffff2;color:#23313b;border:2px solid #b5c7d1;border-radius:13px;padding:10px}.nifl-near b{font-size:13px;display:block;line-height:1.4}.nifl-near button{width:100%;padding:9px 4px;margin-top:7px;border:1px solid #acbec9;border-radius:8px;background:#edf3f6;color:#23313b;font:inherit;font-size:12px}
.nifl-overlay{position:absolute;inset:0;z-index:10;background:#142b3acc;display:flex;align-items:center;justify-content:center;padding:12px;touch-action:auto}.nifl-panel{background:#fff;color:#22323d;border:2px solid #bac8d0;border-radius:16px;padding:16px;width:100%;max-width:620px;max-height:94%;overflow:auto}.nifl-panel h3{margin:0 0 8px;font-size:20px}.nifl-panel p{font-size:14px;line-height:1.6}.nifl-panel button{background:#eef3f6;color:#22323d;border:1px solid #b3c4ce;border-radius:9px;padding:10px;font:inherit;font-size:13px}.nifl-close{float:right}.nifl-panel svg{display:block;width:100%;height:42vh;min-height:240px;background:#e7eff4;border-radius:12px;margin-top:12px}.nifl-map-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;margin:12px 0}.nifl-map-list button{text-align:left;font-size:12px}.nifl-map-legend{font-size:12px!important;color:#536875}
`;

export default function Niflheim3D({initialPosition,onRemember}:{initialPosition:{x:number;z:number};onRemember:(position:{x:number;z:number})=>void}){
  const mount=useRef<HTMLDivElement>(null);
  const position=useRef(clampNiflPosition(initialPosition.x,initialPosition.z));
  const remember=useRef(onRemember);remember.current=onRemember;
  const input=useRef(new Set<string>());
  const analog=useRef({x:0,z:0});
  const stick=useRef<HTMLSpanElement>(null);
  const pointerId=useRef<number|null>(null);
  const clearInput=()=>{input.current.clear();analog.current={x:0,z:0};pointerId.current=null;if(stick.current)stick.current.style.transform="translate(0px,0px)";};
  const [near,setNear]=useState('threshold');
  const [mapOpen,setMapOpen]=useState(false);
  const [selected,setSelected]=useState('');
  const [status,setStatus]=useState('Вика входит в Нифльхейм…');
  const paused=useRef(false);paused.current=mapOpen||!!selected;
  const info=NIFL_LOCATIONS.find(l=>l.id===selected);
  const nearest=NIFL_LOCATIONS.find(l=>l.id===near);
  useEffect(()=>{
    const host=mount.current;if(!host)return;
    let renderer:THREE.WebGLRenderer;
    try{renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});}catch{setStatus('3D недоступно. Открой карту Нифльхейма.');return;}
    let alive=true,raf=0;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);
    const scene=new THREE.Scene();scene.background=new THREE.Color('#a9c1d1');scene.fog=new THREE.Fog('#a9c1d1',45,165);
    const camera=new THREE.PerspectiveCamera(58,1,.1,280);
    scene.add(new THREE.HemisphereLight('#e8f7ff','#536d80',2.1));
    const sun=new THREE.DirectionalLight('#ecf5ff',2);sun.position.set(-22,45,8);scene.add(sun);
    const textures=new Set<THREE.Texture>();
    const snowCanvas=document.createElement('canvas');snowCanvas.width=snowCanvas.height=128;
    const ctx=snowCanvas.getContext('2d')!;ctx.fillStyle='#d6e5ed';ctx.fillRect(0,0,128,128);
    for(let i=0;i<1900;i++){ctx.fillStyle=i%3===0?'#c0d4e1':'#edf7fb';ctx.fillRect(hash(i,1)*128,hash(i,2)*128,1+hash(i,3)*3,1);}
    const snowTex=new THREE.CanvasTexture(snowCanvas);snowTex.colorSpace=THREE.SRGBColorSpace;snowTex.wrapS=snowTex.wrapT=THREE.RepeatWrapping;snowTex.repeat.set(16*NIFL_SCALE,20*NIFL_SCALE);textures.add(snowTex);
    const snow=new THREE.MeshStandardMaterial({map:snowTex,roughness:1});
    const stone=new THREE.MeshStandardMaterial({color:'#8b9eac',roughness:.95});
    const dark=new THREE.MeshStandardMaterial({color:'#172c3d',roughness:1});
    const ice=new THREE.MeshStandardMaterial({color:'#83bed8',roughness:.4,metalness:.12});
    const pathMat=new THREE.MeshStandardMaterial({color:'#acbdc9',roughness:1});
    const water=new THREE.MeshStandardMaterial({color:'#367b9e',roughness:.3,metalness:.18});
    const glow=new THREE.MeshBasicMaterial({color:'#8edafb',transparent:true,opacity:.55});
    new THREE.TextureLoader().load(`${BASE}img/models/Stone_Sacred_1.jpg`,texture=>{if(!alive){texture.dispose();return;}texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;textures.add(texture);stone.map=texture;stone.needsUpdate=true;});
    const groundGeo=new THREE.PlaneGeometry(120*NIFL_SCALE,156*NIFL_SCALE,72,90);groundGeo.rotateX(-Math.PI/2);
    const p=groundGeo.getAttribute('position');for(let i=0;i<p.count;i++)p.setY(i,niflGroundY(p.getX(i),p.getZ(i)));groundGeo.computeVertexNormals();scene.add(new THREE.Mesh(groundGeo,snow));
    const mesh=(geo:THREE.BufferGeometry,mat:THREE.Material,x:number,y:number,z:number,sx=1,sy=1,sz=1)=>{const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);m.scale.set(sx,sy,sz);scene.add(m);return m;};
    const rockGeo=new THREE.DodecahedronGeometry(1,1);
    const rocks=new THREE.InstancedMesh(rockGeo,stone,180),dummy=new THREE.Object3D();
    for(let i=0;i<180;i++){
      const side=i%4,t=(-72+hash(i,11)*144)*NIFL_SCALE;
      const x=side<2?(side===0?-58:58)*NIFL_SCALE:t*.76,z=side<2?t:(side===2?-75:75)*NIFL_SCALE;
      if(side===3&&Math.abs(x)<12){dummy.position.set(x,-30,z);dummy.scale.set(0,0,0);dummy.updateMatrix();rocks.setMatrixAt(i,dummy.matrix);continue;}
      const r=2+hash(i,12)*4,h=3+hash(i,13)*8;
      dummy.position.set(x,niflGroundY(x,z)+h*.5,z);dummy.scale.set(r,h,r);dummy.rotation.set(.1,hash(i,14)*6.28,0);dummy.updateMatrix();rocks.setMatrixAt(i,dummy.matrix);
    }
    rocks.instanceMatrix.needsUpdate=true;rocks.computeBoundingSphere();scene.add(rocks);
    const ribbon=(points:{x:number;z:number}[],width:number,mat:THREE.Material)=>{
      const verts:number[]=[],uv:number[]=[];
      for(let i=0;i<points.length-1;i++){
        const a=points[i],b=points[i+1],dx=b.x-a.x,dz=b.z-a.z,len=Math.hypot(dx,dz),ox=-dz/len*width/2,oz=dx/len*width/2;
        const corners=[[a.x+ox,a.z+oz],[a.x-ox,a.z-oz],[b.x+ox,b.z+oz],[b.x-ox,b.z-oz]];
        for(const j of [0,2,1,1,2,3]){const [x,z]=corners[j];verts.push(x,niflGroundY(x,z)+.045,z);uv.push(j%2,i+(j>1?1:0));}
      }
      const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.computeVertexNormals();scene.add(new THREE.Mesh(geo,mat));
    };
    NIFL_ROUTES.forEach(route=>{const a=NIFL_LOCATIONS.find(l=>l.id===route[0])!,b=NIFL_LOCATIONS.find(l=>l.id===route[1])!;ribbon([a,b],2.4,pathMat);});
    NIFL_RIVERS.forEach((river,index)=>ribbon(river,index===0?4.3:3.2,ice));
    const disc=(x:number,z:number,rx:number,rz:number,mat:THREE.Material)=>{const m=mesh(new THREE.CircleGeometry(1,48),mat,x,niflGroundY(x,z)+.08,z,rx,rz,1);m.rotation.x=-Math.PI/2;return m;};
    NIFL_LAKES.forEach(l=>{disc(l.x,l.z,l.rx,l.rz,ice);for(let i=0;i<7;i++){const a=i/7*6.28;mesh(rockGeo,stone,l.x+Math.cos(a)*(l.rx+1),.6,l.z+Math.sin(a)*(l.rz+1),1,.8,1);}});
    disc(NIFL_SOURCE.x,NIFL_SOURCE.z,NIFL_SOURCE.rx,NIFL_SOURCE.rz,water);
    const sourceRing=mesh(new THREE.TorusGeometry(6*NIFL_SCALE,.09,5,64),glow,0,niflGroundY(0,NIFL_SOURCE.z)+.17,NIFL_SOURCE.z);sourceRing.rotation.x=-Math.PI/2;
    const poleGeo=new THREE.BoxGeometry(1,1,1);
    const pillar=(x:number,z:number,height:number,mat=stone)=>mesh(poleGeo,mat,x,niflGroundY(x,z)+height/2,z,1.15,height,1.3);
    const cave=(x:number,z:number)=>{mesh(rockGeo,stone,x-3,2,z,2,3,2);mesh(rockGeo,stone,x+3,2,z,2,3,2);mesh(rockGeo,stone,x,5,z,4,1.7,2);const opening=mesh(new THREE.CircleGeometry(2.6,24),dark,x,2.6,z+.25,1,1,1);return opening;};
    const gate=(x:number,z:number)=>{pillar(x-2.7,z,6);pillar(x+2.7,z,6);mesh(poleGeo,stone,x,6,z,6.6,.8,1.5);const portal=mesh(new THREE.PlaneGeometry(4,5),new THREE.MeshBasicMaterial({color:'#24253a',transparent:true,opacity:.85,side:THREE.DoubleSide}),x,3,z);return portal;};
    const gates=[gate(0,65*NIFL_SCALE),gate(-10*NIFL_SCALE,16*NIFL_SCALE),gate(5*NIFL_SCALE,-17*NIFL_SCALE),gate(25*NIFL_SCALE,-57*NIFL_SCALE)];
    NIFL_LOCATIONS.forEach((l,index)=>{
      if(l.kind==='cave'||l.kind==='lair')cave(l.x,l.z-3);
      if(l.kind==='hall'||l.kind==='shelter'){
        pillar(l.x-3,l.z-2,4);pillar(l.x+3,l.z-2,4);pillar(l.x-3,l.z+2,4);pillar(l.x+3,l.z+2,4);
        mesh(poleGeo,snow,l.x,4.5,l.z,8,.8,7);mesh(poleGeo,pathMat,l.x,.3,l.z,8,.6,7);
      }
      if(l.kind==='bridge'){for(let j=0;j<6;j++)mesh(poleGeo,stone,l.x-6+j*2,.45,l.z,1.8,.7,3.6);}
      if(l.kind==='lookout')mesh(poleGeo,stone,l.x,1,l.z,7,2,6);
      if(l.kind!=='source'){
        const marker=mesh(new THREE.OctahedronGeometry(.5),glow,l.x+3,2.8,l.z+3);marker.name=`Location ${index+1}: ${l.name}`;
      }
    });
    // Large roots frame the source and cave; the walking corridors stay open.
    for(let i=0;i<6;i++){
      const x=(-24+i*9)*NIFL_SCALE,z=(-55-(i%2)*6)*NIFL_SCALE;
      const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(x,0,z),new THREE.Vector3(x+2,5,z-5),new THREE.Vector3(x-4,15,z-10),new THREE.Vector3(x+5,24,z-16)]);
      scene.add(new THREE.Mesh(new THREE.TubeGeometry(curve,18,1.3+(i%2)*.6,7,false),stone));
    }
    // Lightweight snow drifts instead of a full-screen effect.
    const snowPoints=new THREE.BufferGeometry(),snowCoords=new Float32Array(160*3);
    for(let i=0;i<160;i++){snowCoords[i*3]=(hash(i,51)*110-55)*NIFL_SCALE;snowCoords[i*3+1]=hash(i,52)*18+2;snowCoords[i*3+2]=(hash(i,53)*140-70)*NIFL_SCALE;}
    snowPoints.setAttribute('position',new THREE.BufferAttribute(snowCoords,3));scene.add(new THREE.Points(snowPoints,new THREE.PointsMaterial({color:'#edf8ff',size:.11,transparent:true,opacity:.7})));
    const hero=new THREE.Group();hero.rotation.y=Math.PI;scene.add(hero);
    let mixer:THREE.AnimationMixer|undefined,idle:THREE.AnimationAction|undefined,walk:THREE.AnimationAction|undefined,moving=false,currentAction:THREE.AnimationAction|undefined;
    const disposeObject=(root:THREE.Object3D)=>{root.traverse((o:any)=>{if(o.isMesh){o.geometry?.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){for(const v of Object.values(m))if(v instanceof THREE.Texture)textures.add(v);m.dispose();}}});};
    cachedGlbBuffer(`${BASE}img/models/Vika-3d-animated-optimized.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,gltf=>{
      if(!alive){disposeObject(gltf.scene);textures.forEach(t=>t.dispose());return;}
      const model=gltf.scene,bounds=new THREE.Box3().setFromObject(model);const height=Math.max(.01,bounds.max.y-bounds.min.y);model.scale.setScalar(6.1/height);model.position.y=-bounds.min.y*(6.1/height);hero.add(model);
      mixer=new THREE.AnimationMixer(model);const findClip=(...names:string[])=>names.map(name=>THREE.AnimationClip.findByName(gltf.animations,name)).find(Boolean);
      const idleClip=findClip('idle','sword_idle')||gltf.animations[0],walkClip=findClip('walk_loop','walk')||idleClip;
      if(idleClip)idle=mixer.clipAction(idleClip);if(walkClip)walk=mixer.clipAction(walkClip);idle?.play();currentAction=idle;setStatus('');
    },()=>{if(alive)setStatus('Не удалось загрузить Вику. Выйди на Древо и войди снова.');})).catch(()=>{if(alive)setStatus('Не удалось загрузить Вику. Выйди на Древо и войди снова.');});
    const resize=()=>{const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();};
    const observer=new ResizeObserver(resize);observer.observe(host);resize();
    const down=(event:KeyboardEvent)=>{if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d'].includes(event.key)){event.preventDefault();input.current.add(event.key);}};
    const up=(event:KeyboardEvent)=>input.current.delete(event.key);
    const clear=clearInput;window.addEventListener('keydown',down);window.addEventListener('keyup',up);window.addEventListener('blur',clear);document.addEventListener('visibilitychange',clear);
    let previous=performance.now(),checkAt=0,currentNear='',velocityX=0,velocityZ=0;const cameraDir={x:0,z:-1};
    camera.position.set(position.current.x,9,position.current.z+19);
    const frame=(now:number)=>{
      if(!alive)return;const dt=Math.min((now-previous)/1000,.05);previous=now;
      const keys=input.current;let dx=0,dz=0;if(!paused.current&&!document.hidden){dx=(keys.has('ArrowRight')||keys.has('d')?1:0)-(keys.has('ArrowLeft')||keys.has('a')?1:0);dz=(keys.has('ArrowDown')||keys.has('s')?1:0)-(keys.has('ArrowUp')||keys.has('w')?1:0);}
      if(!paused.current&&!document.hidden&&Math.hypot(analog.current.x,analog.current.z)>.05){dx=analog.current.x;dz=analog.current.z;}
      const length=Math.hypot(dx,dz),isMoving=length>.05;
      const steer=1-Math.exp(-dt*14);
      velocityX=THREE.MathUtils.lerp(velocityX,isMoving?dx/length:0,steer);velocityZ=THREE.MathUtils.lerp(velocityZ,isMoving?dz/length:0,steer);
      if(!paused.current&&!document.hidden){position.current=clampNiflPosition(position.current.x+velocityX*8.5*dt,position.current.z+velocityZ*8.5*dt);}
      if(isMoving){const target=Math.atan2(velocityX,velocityZ),difference=Math.atan2(Math.sin(target-hero.rotation.y),Math.cos(target-hero.rotation.y));hero.rotation.y+=difference*(1-Math.exp(-dt*14));cameraDir.x=Math.sin(hero.rotation.y);cameraDir.z=Math.cos(hero.rotation.y);}
      const walking=!paused.current&&!document.hidden&&Math.hypot(velocityX,velocityZ)>.08;
      moving=walking;
      const next=moving?walk:idle;
      if(next&&next!==currentAction){currentAction?.fadeOut(.16);next.reset();next.enabled=true;next.setEffectiveWeight(1);next.setEffectiveTimeScale(1);next.fadeIn(.16).play();currentAction=next;}
      const pos=position.current;hero.position.set(pos.x,niflGroundY(pos.x,pos.z),pos.z);mixer?.update(dt);
      const hy=niflGroundY(pos.x,pos.z);
      camera.position.lerp(new THREE.Vector3(pos.x-cameraDir.x*2,hy+9,pos.z-cameraDir.z*2+17),1-Math.exp(-dt*3.4));camera.lookAt(pos.x+cameraDir.x*1.9,hy+3,pos.z-10+cameraDir.z*1.9);
      sourceRing.rotation.z+=dt*.12;gates.forEach(g=>{(g.material as THREE.MeshBasicMaterial).opacity=.78+Math.sin(now*.001)*.06;});
      if(now-checkAt>180){checkAt=now;const l=NIFL_LOCATIONS.reduce((a,b)=>Math.hypot(pos.x-a.x,pos.z-a.z)<Math.hypot(pos.x-b.x,pos.z-b.z)?a:b);const id=Math.hypot(pos.x-l.x,pos.z-l.z)<9?l.id:'';if(id!==currentNear){currentNear=id;setNear(id);}}
      renderer.render(scene,camera);raf=requestAnimationFrame(frame);
    };raf=requestAnimationFrame(frame);
    return()=>{alive=false;cancelAnimationFrame(raf);observer.disconnect();window.removeEventListener('keydown',down);window.removeEventListener('keyup',up);window.removeEventListener('blur',clear);document.removeEventListener('visibilitychange',clear);clear();remember.current({...position.current});mixer?.stopAllAction();scene.traverse((o:any)=>{if(o.isMesh||o.isPoints){o.geometry?.dispose();if(o.isInstancedMesh)o.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){if(m){for(const v of Object.values(m))if(v instanceof THREE.Texture)textures.add(v);m.dispose();}}}});textures.forEach(t=>t.dispose());renderer.dispose();renderer.domElement.remove();};
  },[]);
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
  return <div className="nifl-world"><style>{CSS}</style><div className="nifl-mount" ref={mount}/>
    <div className="nifl-top"><div><h2>Нифльхейм</h2><p>По следу чёрных вод</p></div><button onClick={()=>{clearInput();setMapOpen(true);}}>Карта</button></div>
    {status&&<div className="nifl-status">{status}</div>}
    <button className="nifl-joystick" aria-label="Управление Викой: тяни в нужном направлении" onPointerDown={startStick} onPointerMove={steerStick} onPointerUp={stopStick} onPointerCancel={stopStick} onLostPointerCapture={stopStick}><img src={`${BASE}img/models/ui_joystick.png`} alt="" draggable={false}/><span className="nifl-stick" ref={stick}/></button>
    {nearest&&<div className="nifl-near"><b>{nearest.name}</b><button onClick={()=>{clearInput();setSelected(nearest.id);}}>Осмотреть</button></div>}
    {mapOpen&&<div className="nifl-overlay"><section className="nifl-panel" role="dialog" aria-modal="true" aria-label="Карта Нифльхейма"><button className="nifl-close" onClick={()=>setMapOpen(false)}>Закрыть</button><h3>Карта Нифльхейма</h3><p className="nifl-map-legend">Три реки · два озера · источник Хвергельмир. Нажми на номер или название локации.</p>
      <svg viewBox="0 0 130 160" aria-label="Реки и локации Нифльхейма">
        {NIFL_ROUTES.map((route,i)=>{const a=NIFL_LOCATIONS.find(l=>l.id===route[0])!,b=NIFL_LOCATIONS.find(l=>l.id===route[1])!;return <line key={i} x1={a.x/NIFL_SCALE+65} y1={a.z/NIFL_SCALE+80} x2={b.x/NIFL_SCALE+65} y2={b.z/NIFL_SCALE+80} stroke="#8a9eab" strokeWidth="1" strokeDasharray="2 2"/>;})}
        {NIFL_RIVERS.map((river,i)=><polyline key={i} points={river.map(p=>`${p.x/NIFL_SCALE+65},${p.z/NIFL_SCALE+80}`).join(' ')} fill="none" stroke="#78b2cf" strokeWidth={i===0?4:3}/>)}
        {NIFL_LAKES.map((l,i)=><ellipse key={i} cx={l.x/NIFL_SCALE+65} cy={l.z/NIFL_SCALE+80} rx={l.rx/NIFL_SCALE} ry={l.rz/NIFL_SCALE} fill="#9ecbdf"/>)}<ellipse cx="65" cy="31" rx="8" ry="7" fill="#347c9d"/>
        {NIFL_LOCATIONS.map((l,i)=><g key={l.id} role="button" tabIndex={0} aria-label={l.name} onClick={()=>setSelected(l.id)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setSelected(l.id);}}} style={{cursor:'pointer'}}><circle cx={l.x/NIFL_SCALE+65} cy={l.z/NIFL_SCALE+80} r="5.5" fill="#fff" stroke="#526f82" strokeWidth=".6"/><text x={l.x/NIFL_SCALE+65} y={l.z/NIFL_SCALE+81.5} textAnchor="middle" fontSize="4" fill="#203e52">{i+1}</text></g>)}
        <circle cx={mapPoint(position.current.x,position.current.z).x} cy={mapPoint(position.current.x,position.current.z).y} r="2.5" fill="#d29d30" stroke="#fff" strokeWidth=".8"/>
      </svg><div className="nifl-map-list">{NIFL_LOCATIONS.map((l,i)=><button key={l.id} onClick={()=>setSelected(l.id)}>{i+1}. {l.name}</button>)}</div><p className="nifl-map-legend">Золотая точка — Вика. Русла покрыты льдом: по ним пока можно пройти.</p>
    </section></div>}
    {info&&<div className="nifl-overlay" style={{zIndex:11}}><section className="nifl-panel" role="dialog" aria-modal="true" aria-label={info.name}><h3>{info.name}</h3><p>{info.text}</p><button onClick={()=>setSelected('')}>Продолжить путь</button></section></div>}
  </div>;
}
