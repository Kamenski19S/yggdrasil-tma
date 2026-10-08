import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {BASE,cachedGlbBuffer,WEAPON_ASSET,textureSteelOnWeapon,type HeroWeapon} from './core';

export default function NidhoggUnderground({onBack,weapon,shieldAsset,shieldEquipped}:{onBack:()=>void;weapon:HeroWeapon;shieldAsset:string;shieldEquipped:boolean}){
  const mount=useRef<HTMLDivElement>(null),analog=useRef({x:0,z:0}),pointer=useRef<number|null>(null),knob=useRef<HTMLSpanElement>(null);
  const exit=useRef(onBack);exit.current=onBack;
  const [status,setStatus]=useState('Вика спускается под разрушенную башню…');
  const [nearExit,setNearExit]=useState(true);
  const clear=()=>{analog.current={x:0,z:0};pointer.current=null;if(knob.current)knob.current.style.transform='translate(0,0)';};
  useEffect(()=>{
    const host=mount.current;if(!host)return;
    let renderer:THREE.WebGLRenderer;
    try{renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});}catch{setStatus('Не удалось открыть подземелье. Вернись в Нифльхейм.');return;}
    let alive=true,raf=0,previous=performance.now();
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;host.appendChild(renderer.domElement);
    const scene=new THREE.Scene();scene.background=new THREE.Color('#121d24');scene.fog=new THREE.Fog('#121d24',65,145);
    const camera=new THREE.PerspectiveCamera(58,1,.1,180);
    scene.add(new THREE.HemisphereLight('#94bccd','#272019',1.4));
    const light=new THREE.DirectionalLight('#c1dce7',2);light.position.set(-8,18,12);scene.add(light);
    const stone=new THREE.MeshStandardMaterial({color:'#34383d',roughness:1}),floorMat=new THREE.MeshStandardMaterial({color:'#30363c',roughness:1});
    const assets=new Set<THREE.Texture>();
    const dispose=(root:THREE.Object3D)=>{const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>();root.traverse((o:any)=>{if(o.geometry)geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])if(m){materials.add(m);for(const v of Object.values(m))if(v instanceof THREE.Texture)assets.add(v);}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());};
    new THREE.TextureLoader().load(`${BASE}img/models/Rock_5_Diffuse_Lite.webp`,texture=>{if(!alive){texture.dispose();return;}texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(8,6);assets.add(texture);stone.map=texture;stone.needsUpdate=true;},undefined,()=>{});
    const box=(w:number,h:number,d:number,x:number,y:number,z:number,mat=stone)=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);mesh.position.set(x,y,z);scene.add(mesh);return mesh;};
    // Spacious chamber: 72 wide, 100 deep and 38 high.
    box(72,1,100,0,-.5,-21,floorMat);box(2,38,100,-36,19,-21);box(2,38,100,36,19,-21);box(72,38,2,0,19,-71);box(72,38,2,0,19,29);box(72,1,100,0,38,-21);
    const rockGeometry=new THREE.DodecahedronGeometry(1,1);
    for(let i=0;i<40;i++){const mesh=new THREE.Mesh(rockGeometry,stone);const side=i%2?-1:1;mesh.position.set(side*(33.5+Math.sin(i)*.7),12,-66+Math.floor(i/2)*4.7);mesh.scale.set(2.7,14+Math.sin(i*2)*3,3.5);mesh.rotation.y=i*.9;scene.add(mesh);}
    // Roots and cool lamps mark the chamber without adding another world renderer.
    const rootMat=new THREE.MeshStandardMaterial({color:'#332c25',roughness:1});
    for(const side of [-1,1])for(let i=0;i<4;i++){const root=new THREE.Mesh(new THREE.CylinderGeometry(.4,.8,13,8),rootMat);root.position.set(side*30,31,-55+i*22);root.rotation.z=side*.7;scene.add(root);}
    for(const z of [-55,-32,-8,15])for(const x of [-31,31]){const lamp=new THREE.PointLight('#73cae9',90,18,2);lamp.position.set(x,7,z);scene.add(lamp);const crystal=new THREE.Mesh(new THREE.OctahedronGeometry(.7),new THREE.MeshBasicMaterial({color:'#83dcf5'}));crystal.position.copy(lamp.position);scene.add(crystal);}
    const wood=new THREE.MeshStandardMaterial({color:'#48352b',roughness:1});box(6,9,.4,0,4.5,26.8,wood);box(7,.7,1,0,9.3,26.6);box(.7,9.3,1,-3.4,4.65,26.6);box(.7,9.3,1,3.4,4.65,26.6);
    const hero=new THREE.Group();scene.add(hero);const pos={x:0,z:19};hero.rotation.y=Math.PI;
    let mixer:THREE.AnimationMixer|undefined,idle:THREE.AnimationAction|undefined,walk:THREE.AnimationAction|undefined,current:THREE.AnimationAction|undefined,dragonMixer:THREE.AnimationMixer|undefined;
    let dragonBounds:THREE.Box3|undefined;
    const load=async(file:string)=>new GLTFLoader().parseAsync(await cachedGlbBuffer(`${BASE}img/models/${file}`),`${BASE}img/models/`);
    load('Dark_Side_Cave_Optimized.glb').then(gltf=>{
      if(!alive){dispose(gltf.scene);assets.forEach(t=>t.dispose());return;}
      const cave=gltf.scene;cave.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(cave),size=bounds.getSize(new THREE.Vector3());
      const scale=27/Math.max(size.x,size.z,.01);cave.scale.multiplyScalar(scale);
      // Raise the rock formation into a tall dragon den against the back wall.
      cave.scale.y*=Math.min(1.45,32/Math.max(size.y*scale,.01));cave.updateMatrixWorld(true);
      const fitted=new THREE.Box3().setFromObject(cave),center=fitted.getCenter(new THREE.Vector3());
      cave.position.set(-center.x,-fitted.min.y,-67-fitted.min.z);
      scene.add(cave);
    }).catch(()=>{if(alive)setStatus('Каменная пещера не загрузилась. Можно вернуться и попробовать снова.');});
    load('Vika-3d-animated-optimized.glb').then(gltf=>{
      if(!alive){dispose(gltf.scene);assets.forEach(t=>t.dispose());return;}
      const model=gltf.scene,bounds=new THREE.Box3().setFromObject(model),scale=6.1/Math.max(.01,bounds.max.y-bounds.min.y);model.scale.setScalar(scale);model.position.y=-bounds.min.y*scale;hero.add(model);
      const bone=(suffix:string)=>{let found:THREE.Object3D|undefined;model.traverse(o=>{if(o.name.replace(/[^a-zA-Z0-9]/g,'').endsWith(suffix))found=o;});return found;};
      const equip=(file:string,parent:THREE.Object3D,isShield:boolean)=>load(file).then(asset=>{
        if(!alive){dispose(asset.scene);assets.forEach(t=>t.dispose());return;}
        const item=asset.scene;textureSteelOnWeapon(item,file);if(isShield&&file==='Shield_Round.glb')item.scale.z=.22;
        item.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(item),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
        const span=isShield?Math.max(size.x,size.y,size.z):size.y;if(span<.001){dispose(item);return;}
        item.position.set(-center.x,isShield?-center.y:-bounds.min.y,-center.z);
        const hand=new THREE.Group();hand.scale.setScalar((isShield?.38:weapon==='spear'?.82:.57)/span);hand.position.set(0,isShield?.075:-.065,isShield?-.016:.015);if(isShield)hand.rotation.y=Math.PI;else hand.rotation.x=-.2;hand.add(item);parent.add(hand);
      }).catch(()=>{});
      const hand=bone('RightHand'),arm=bone('LeftForeArm');if(hand)equip(weapon==='default'?'Sword.glb':WEAPON_ASSET[weapon],hand,false);if(arm&&shieldEquipped)equip(shieldAsset,arm,true);
      mixer=new THREE.AnimationMixer(model);const idleClip=THREE.AnimationClip.findByName(gltf.animations,'idle')||THREE.AnimationClip.findByName(gltf.animations,'sword_idle')||gltf.animations[0];const walkClip=THREE.AnimationClip.findByName(gltf.animations,'walk_loop')||THREE.AnimationClip.findByName(gltf.animations,'walk')||idleClip;
      if(idleClip)idle=mixer.clipAction(idleClip);if(walkClip)walk=mixer.clipAction(walkClip);idle?.play();current=idle;setStatus('');
    }).catch(()=>{if(alive)setStatus('Не удалось загрузить Вику. Вернись в Нифльхейм и попробуй снова.');});
    load('European_Dragon_Optimized.glb').then(gltf=>{
      if(!alive){dispose(gltf.scene);assets.forEach(t=>t.dispose());return;}
      const dragon=gltf.scene;dragon.updateMatrixWorld(true);let bounds=new THREE.Box3().setFromObject(dragon),size=bounds.getSize(new THREE.Vector3());dragon.scale.multiplyScalar(Math.min(13/Math.max(size.y,.01),24/Math.max(size.x,size.z,.01)));dragon.updateMatrixWorld(true);bounds=new THREE.Box3().setFromObject(dragon);const center=bounds.getCenter(new THREE.Vector3());dragon.position.set(-center.x,-bounds.min.y,-35-center.z);scene.add(dragon);dragonBounds=new THREE.Box3().setFromObject(dragon).expandByScalar(1.2);
      const clip=gltf.animations.find(a=>/idle|rest|breath/i.test(a.name));if(clip){dragonMixer=new THREE.AnimationMixer(dragon);dragonMixer.clipAction(clip).play();}
    }).catch(()=>{if(alive)setStatus('Дракон пока не загрузился. Выход из подземелья доступен.');});
    const keys=new Set<string>();const down=(e:KeyboardEvent)=>{if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d'].includes(e.key)){e.preventDefault();keys.add(e.key);}};const up=(e:KeyboardEvent)=>keys.delete(e.key);const reset=()=>{keys.clear();clear();};
    window.addEventListener('keydown',down);window.addEventListener('keyup',up);window.addEventListener('blur',reset);document.addEventListener('visibilitychange',reset);
    const resize=()=>{const w=host.clientWidth,h=host.clientHeight;if(w&&h){renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}};const observer=new ResizeObserver(resize);observer.observe(host);resize();camera.position.set(0,10,32);
    let wasNear=true;
    const frame=(now:number)=>{
      if(!alive)return;const dt=Math.min((now-previous)/1000,.05);previous=now;
      let dx=0,dz=0;if(!document.hidden){dx=analog.current.x+(keys.has('d')||keys.has('ArrowRight')?1:0)-(keys.has('a')||keys.has('ArrowLeft')?1:0);dz=analog.current.z+(keys.has('s')||keys.has('ArrowDown')?1:0)-(keys.has('w')||keys.has('ArrowUp')?1:0);}
      const length=Math.hypot(dx,dz);let moving=false;if(length>.08){dx/=Math.max(1,length);dz/=Math.max(1,length);const x=THREE.MathUtils.clamp(pos.x+dx*8.5*dt,-31,31),z=THREE.MathUtils.clamp(pos.z+dz*8.5*dt,-65,24.5);const blocked=dragonBounds&&x>dragonBounds.min.x&&x<dragonBounds.max.x&&z>dragonBounds.min.z&&z<dragonBounds.max.z;if(!blocked){moving=Math.hypot(x-pos.x,z-pos.z)>.001;pos.x=x;pos.z=z;}const target=Math.atan2(dx,dz);hero.rotation.y+=Math.atan2(Math.sin(target-hero.rotation.y),Math.cos(target-hero.rotation.y))*(1-Math.exp(-dt*14));}
      const action=moving?walk:idle;if(action&&action!==current){current?.fadeOut(.15);action.reset().fadeIn(.15).play();current=action;}mixer?.update(dt);dragonMixer?.update(dt);hero.position.set(pos.x,0,pos.z);
      camera.position.lerp(new THREE.Vector3(pos.x*.65,10,pos.z+16),1-Math.exp(-dt*4));camera.lookAt(pos.x,3.5,pos.z-8);
      const near=Math.abs(pos.x)<5&&pos.z>20;if(near!==wasNear){wasNear=near;setNearExit(near);}renderer.render(scene,camera);raf=requestAnimationFrame(frame);
    };raf=requestAnimationFrame(frame);
    return()=>{alive=false;cancelAnimationFrame(raf);observer.disconnect();window.removeEventListener('keydown',down);window.removeEventListener('keyup',up);window.removeEventListener('blur',reset);document.removeEventListener('visibilitychange',reset);reset();mixer?.stopAllAction();dragonMixer?.stopAllAction();dispose(scene);assets.forEach(t=>t.dispose());renderer.dispose();renderer.domElement.remove();};
  },[weapon,shieldAsset,shieldEquipped]);
  const steer=(e:React.PointerEvent<HTMLButtonElement>)=>{if(pointer.current!==e.pointerId)return;const rect=e.currentTarget.getBoundingClientRect(),r=rect.width*.36;let x=(e.clientX-rect.left-rect.width/2)/r,z=(e.clientY-rect.top-rect.height/2)/r;const length=Math.hypot(x,z);if(length>1){x/=length;z/=length;}analog.current={x,z};if(knob.current)knob.current.style.transform=`translate(${x*r}px,${z*r}px)`;};
  return <div style={{position:'relative',flex:1,minHeight:0,overflow:'hidden',background:'#121d24',touchAction:'none'}}>
    <div ref={mount} style={{position:'absolute',inset:0}}/>
    <div className="mid3d-ui mid3d-top"><button className="mid3d-top-btn" onClick={()=>{clear();exit.current();}} aria-label="Вернуться в Нифльхейм"><img className="mid3d-top-button-art" src={`${BASE}img/models/home_button.png`} alt=""/></button><div className="mid3d-realm-title" style={{color:'#e9eff4'}}>Подземелье Нидхёгга</div></div>
    {status&&<div role="status" style={{position:'absolute',top:85,left:12,right:12,color:'#fff',textAlign:'center',background:'#18232be6',padding:10,borderRadius:8}}>{status}</div>}
    <button className="mid3d-ui mid3d-joy" style={{padding:0,userSelect:'none'}} aria-label="Управление Викой" onPointerDown={e=>{e.preventDefault();pointer.current=e.pointerId;e.currentTarget.setPointerCapture(e.pointerId);steer(e);}} onPointerMove={steer} onPointerUp={clear} onPointerCancel={clear} onLostPointerCapture={clear}><img style={{width:'100%',height:'100%',pointerEvents:'none'}} src={`${BASE}img/models/ui_joystick.png`} alt="" draggable={false}/><span className="mid3d-knob" ref={knob}/></button>
    <div style={{position:'absolute',left:12,bottom:4,fontSize:10,color:'#aebac2',maxWidth:'55%'}}>Пещера: <a href="https://sketchfab.com/3d-models/dark-side-cave-e6347843eec64b408157dabfb8b196b2" target="_blank" rel="noopener noreferrer" style={{color:'inherit'}}>diaspora</a> · CC BY 4.0 · уменьшены текстуры, изменены масштаб и высота.</div>
    {nearExit&&<button onClick={()=>{clear();exit.current();}} style={{position:'absolute',right:16,bottom:25,padding:'12px 16px',background:'#171e25',color:'#e4c78c',border:'2px solid #b39150',borderRadius:10}}>Открыть дверь · Нифльхейм</button>}
  </div>;
}
