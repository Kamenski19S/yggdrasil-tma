import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {createNidhoggEncounter} from './nidhoggEncounter';
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
    // Cool lamps mark the chamber without adding another world renderer.
    for(const z of [-55,-32,-8,15])for(const x of [-31,31]){const lamp=new THREE.PointLight('#73cae9',90,18,2);lamp.position.set(x,7,z);scene.add(lamp);const crystal=new THREE.Mesh(new THREE.OctahedronGeometry(.7),new THREE.MeshBasicMaterial({color:'#83dcf5'}));crystal.position.copy(lamp.position);scene.add(crystal);}
    const wood=new THREE.MeshStandardMaterial({color:'#48352b',roughness:1});box(6,9,.4,0,4.5,26.8,wood);box(7,.7,1,0,9.3,26.6);box(.7,9.3,1,-3.4,4.65,26.6);box(.7,9.3,1,3.4,4.65,26.6);
    const hero=new THREE.Group();scene.add(hero);const pos={x:0,z:19};hero.rotation.y=Math.PI;
    let mixer:THREE.AnimationMixer|undefined,idle:THREE.AnimationAction|undefined,walk:THREE.AnimationAction|undefined,current:THREE.AnimationAction|undefined,dragonMixer:THREE.AnimationMixer|undefined;
    let dragonBounds:THREE.Box3|undefined,encounter:ReturnType<typeof createNidhoggEncounter>|undefined;
    let heroReady=false;
    const flightCamera=new THREE.Vector3(),flightTarget=new THREE.Vector3();
    const terrainMeshes:THREE.Mesh[]=[];
    const groundRay=new THREE.Raycaster(),groundOrigin=new THREE.Vector3(),groundDown=new THREE.Vector3(0,-1,0);
    let groundX=NaN,groundZ=NaN,groundY=0;
    const groundAt=(x:number,z:number)=>{
      if(!terrainMeshes.length)return 0;
      groundOrigin.set(x,40,z);groundRay.set(groundOrigin,groundDown);
      return Math.max(0,groundRay.intersectObjects(terrainMeshes,false)[0]?.point.y??0);
    };
    const load=async(file:string)=>new GLTFLoader().parseAsync(await cachedGlbBuffer(`${BASE}img/models/${file}`),`${BASE}img/models/`);
    load('Whispering_Roots_Optimized.glb').then(gltf=>{
      if(!alive){dispose(gltf.scene);assets.forEach(t=>t.dispose());return;}
      const model=gltf.scene;
      // The dense root base anchors to the ceiling; fine branching tips hang down.
      model.rotation.x+=Math.PI;model.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
      model.traverse(o=>{if(o instanceof THREE.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial){m.color.set('#8b8072');m.roughness=.96;m.emissive.set('#000000');}});
      const placements=[{x:-15,z:-53,width:14,depth:25,yaw:-.12},{x:15,z:-53,width:14,depth:25,yaw:.12},{x:0,z:-64,width:28,depth:11,yaw:0}];
      for(const placement of placements){
        const anchor=new THREE.Group();anchor.name='Корни с потолка вокруг логова';
        const roots=model.clone(true);roots.position.set(-center.x,-bounds.max.y,-center.z);anchor.add(roots);
        anchor.scale.set(placement.width/Math.max(size.x,.01),33/Math.max(size.y,.01),placement.depth/Math.max(size.z,.01));
        anchor.rotation.y=placement.yaw;anchor.position.set(placement.x,37.8,placement.z);scene.add(anchor);
      }
    }).catch(()=>{if(alive)setStatus('Корни не загрузились. Можно вернуться и попробовать снова.');});
    load('The_Hills_Optimized.glb').then(gltf=>{
      if(!alive){dispose(gltf.scene);assets.forEach(t=>t.dispose());return;}
      const terrain=gltf.scene;terrain.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(terrain),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
      const smooth=(a:number,b:number,value:number)=>{const t=THREE.MathUtils.clamp((value-a)/(b-a),0,1);return t*t*(3-2*t);};
      const point=new THREE.Vector3();
      terrain.traverse(o=>{
        if(!(o instanceof THREE.Mesh))return;
        // Bake the source orientation before stretching the ground to fit the room.
        const geometry=o.geometry.clone().applyMatrix4(o.matrixWorld),positions=geometry.getAttribute('position');
        for(let i=0;i<positions.count;i++){
          point.fromBufferAttribute(positions,i);
          const x=(point.x-center.x)*72/Math.max(size.x,.01),z=(point.z-center.z)*100/Math.max(size.z,.01)-21;
          // Gentle transitions preserve clear footing at the door, dragon and den.
          const door=smooth(6,14,Math.hypot(x,z-26)),dragon=smooth(16,24,Math.hypot(x,z+35)),den=smooth(-54,-40,z);
          const y=.04+(point.y-bounds.min.y)*9/Math.max(size.y,.01)*door*dragon*den;
          positions.setXYZ(i,x,y,z);
        }
        geometry.deleteAttribute('tangent');geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();
        const materials=(Array.isArray(o.material)?o.material:[o.material]).map(m=>{const material=m.clone();if(material instanceof THREE.MeshStandardMaterial){material.color.set('#8f949b');material.roughness=.95;material.emissive.set('#000000');material.emissiveMap=null;}return material;});
        const mesh=new THREE.Mesh(geometry,Array.isArray(o.material)?materials:materials[0]);terrainMeshes.push(mesh);scene.add(mesh);
      });
      // Geometry and materials were cloned; shared textures now belong to the scene.
      dispose(terrain);scene.updateMatrixWorld(true);groundX=groundZ=NaN;
    }).catch(()=>{if(alive)setStatus('Рельеф не загрузился. Вернись в Нифльхейм и попробуй снова.');});
    load('Dark_Side_Cave_Optimized.glb').then(gltf=>{
      if(!alive){dispose(gltf.scene);assets.forEach(t=>t.dispose());return;}
      const cave=gltf.scene;cave.updateMatrixWorld(true);
      cave.traverse(o=>{if(o instanceof THREE.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial){m.color.set('#666b73');m.roughness=.95;m.metalness=0;m.emissive.set('#000000');m.emissiveMap=null;}});
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
      if(idleClip)idle=mixer.clipAction(idleClip);if(walkClip)walk=mixer.clipAction(walkClip);idle?.play();current=idle;heroReady=true;setStatus('');
    }).catch(()=>{if(alive)setStatus('Не удалось загрузить Вику. Вернись в Нифльхейм и попробуй снова.');});
    load('European_Dragon_Optimized.glb').then(gltf=>{
      if(!alive){dispose(gltf.scene);assets.forEach(t=>t.dispose());return;}
      encounter=createNidhoggEncounter(gltf.scene,gltf.animations,groundAt,text=>{if(alive)setStatus(text);});
      scene.add(encounter.anchor);dragonMixer=encounter.mixer;dragonBounds=encounter.collision;
    }).catch(()=>{if(alive)setStatus('Дракон пока не загрузился. Выход из подземелья доступен.');});
    const keys=new Set<string>();const down=(e:KeyboardEvent)=>{if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d'].includes(e.key)){e.preventDefault();keys.add(e.key);}};const up=(e:KeyboardEvent)=>keys.delete(e.key);const reset=()=>{keys.clear();clear();};
    window.addEventListener('keydown',down);window.addEventListener('keyup',up);window.addEventListener('blur',reset);document.addEventListener('visibilitychange',reset);
    const resize=()=>{const w=host.clientWidth,h=host.clientHeight;if(w&&h){renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}};const observer=new ResizeObserver(resize);observer.observe(host);resize();camera.position.set(0,10,32);
    let wasNear=true;
    const frame=(now:number)=>{
      if(!alive)return;const dt=Math.min((now-previous)/1000,.05);previous=now;
      let dx=0,dz=0;if(!document.hidden){dx=analog.current.x+(keys.has('d')||keys.has('ArrowRight')?1:0)-(keys.has('a')||keys.has('ArrowLeft')?1:0);dz=analog.current.z+(keys.has('s')||keys.has('ArrowDown')?1:0)-(keys.has('w')||keys.has('ArrowUp')?1:0);}
      const length=Math.hypot(dx,dz);let moving=false;if(length>.08&&!encounter?.flying){dx/=Math.max(1,length);dz/=Math.max(1,length);const x=THREE.MathUtils.clamp(pos.x+dx*8.5*dt,-31,31),z=THREE.MathUtils.clamp(pos.z+dz*8.5*dt,-65,24.5);const blocked=!encounter?.flying&&dragonBounds&&x>dragonBounds.min.x&&x<dragonBounds.max.x&&z>dragonBounds.min.z&&z<dragonBounds.max.z;if(!blocked){moving=Math.hypot(x-pos.x,z-pos.z)>.001;pos.x=x;pos.z=z;}const target=Math.atan2(dx,dz);hero.rotation.y+=Math.atan2(Math.sin(target-hero.rotation.y),Math.cos(target-hero.rotation.y))*(1-Math.exp(-dt*14));}
      if(pos.x!==groundX||pos.z!==groundZ){groundY=groundAt(pos.x,pos.z);groundX=pos.x;groundZ=pos.z;}
      const action=moving?walk:idle;if(action&&action!==current){current?.fadeOut(.15);action.reset().fadeIn(.15).play();current=action;}mixer?.update(dt);encounter?.update(document.hidden?0:dt,pos,heroReady&&terrainMeshes.length>0);hero.position.set(pos.x,groundY,pos.z);
      const flying=encounter?.flying;
      flightCamera.set(pos.x*.4,flying?21:groundY+10,pos.z+(flying?25:16));
      flightTarget.set(pos.x,groundY+3.5,pos.z-8);
      if(flying)flightTarget.lerp(encounter!.anchor.position,.6);
      camera.position.lerp(flightCamera,1-Math.exp(-dt*4));camera.lookAt(flightTarget);
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
