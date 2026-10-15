import {createArtifactCombat} from './artifactCombat';
import {NIFLHEIM_SEALS} from './niflheimSeals';
import {amuletProgress,finalDragonReady,protectedDragonFire} from './niflheimAmulet';
import {NIDHOGG_MAX_HP,NIDHOGG_FIRE_DAMAGE,NIDHOGG_REWARD,nidhoggHitDamage} from './nidhoggBalance';
import {createDragonFire} from './dragonFire';
import {dragonStrikeDamage,type CombatStats} from './combatStats';
import {boostedPotionDamage,potionDodges,type PotionBoosts,type PotionBoostKind} from './potionEffects';
import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {createNidhoggEncounter} from './nidhoggEncounter';
import {dragonProgress,NIFL_OBSIDIAN,type DragonEvent} from './niflheimDragonQuest';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {BASE,cachedGlbBuffer,WEAPON_ASSET,textureSteelOnWeapon,styleNiflheimWeapon,type HeroWeapon} from './core';

export default function NidhoggUnderground({combatStats,fieldHp,onFieldHpChange,potionBoosts,frostGuard,onPotionBoostUsed,onFrostGuardHit,onBack,weapon,shieldAsset,shieldEquipped,whirlpoolHeart,questDone,onDragonEvent,potions,onUsePotion}:{combatStats:CombatStats;fieldHp:number|null;onFieldHpChange:(hp:number)=>void;potionBoosts:PotionBoosts;frostGuard:number;onPotionBoostUsed:(kind:PotionBoostKind)=>void;onFrostGuardHit:()=>void;onBack:()=>void;weapon:HeroWeapon;shieldAsset:string;shieldEquipped:boolean;whirlpoolHeart:boolean;questDone:string[];onDragonEvent:(event:DragonEvent)=>void;potions:string[];onUsePotion:(id:string,currentHpOverride?:number)=>boolean}){
  const mount=useRef<HTMLDivElement>(null),analog=useRef({x:0,z:0}),pointer=useRef<number|null>(null),knob=useRef<HTMLSpanElement>(null);
  const exit=useRef(onBack);exit.current=onBack;
  const [status,setStatus]=useState('Vicki спускается под разрушенную башню…');
  const [nearExit,setNearExit]=useState(true);
  const [nearOre,setNearOre]=useState('');
  const [nearDragon,setNearDragon]=useState(false);
  const [hp,setHp]=useState(Math.min(combatStats.maxHp,fieldHp??combatStats.maxHp));
  const [dragonHp,setDragonHp]=useState(NIDHOGG_MAX_HP);
  const [heartActive,setHeartActive]=useState(false);
  const heartActiveRef=useRef(false);
  const questRef=useRef(questDone);questRef.current=questDone;
  const weaponRef=useRef(weapon);weaponRef.current=weapon;
  const amulet=amuletProgress(questDone);
  const attackRef=useRef<()=>void>(()=>{});
  const healRef=useRef<(amount:number)=>void>(()=>{});
  const shieldRef=useRef<()=>void>(()=>{});
  const progressRef=useRef(dragonProgress(questDone));progressRef.current=dragonProgress(questDone);
  const combatRef=useRef(combatStats);combatRef.current=combatStats;
  const boostRef=useRef(potionBoosts);boostRef.current=potionBoosts;
  const frostRef=useRef(frostGuard);frostRef.current=frostGuard;
  const hpCallback=useRef(onFieldHpChange);hpCallback.current=onFieldHpChange;
  const boostCallback=useRef(onPotionBoostUsed);boostCallback.current=onPotionBoostUsed;
  const frostCallback=useRef(onFrostGuardHit);frostCallback.current=onFrostGuardHit;
  const eventRef=useRef(onDragonEvent);eventRef.current=onDragonEvent;
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
    const hero=new THREE.Group();scene.add(hero);const dragonFire=createDragonFire(scene);const pos={x:0,z:19};hero.rotation.y=Math.PI;
    let mixer:THREE.AnimationMixer|undefined,idle:THREE.AnimationAction|undefined,walk:THREE.AnimationAction|undefined,current:THREE.AnimationAction|undefined,dragonMixer:THREE.AnimationMixer|undefined;
    let dragonBounds:THREE.Box3|undefined,encounter:ReturnType<typeof createNidhoggEncounter>|undefined;
    let pendingBreath=0;
    let shieldBones:THREE.Object3D[]=[],shieldPose:THREE.Quaternion[]=[];
    const artifactBattle=createArtifactCombat();
    let heroReady=false,heroLife=Math.min(combatStats.maxHp,fieldHp??combatStats.maxHp),dragonLife=NIDHOGG_MAX_HP,lastStrike=0,lastBite=0,guardUntil=0,lastHud=0,strikeCount=0,metSent=false,beaten=false;
    healRef.current=(amount:number)=>{heroLife=Math.min(combatRef.current.maxHp,heroLife+amount);setHp(heroLife);hpCallback.current(heroLife);};
    attackRef.current=()=>{
      const boss=encounter;
      if(!boss||beaten||progressRef.current.defeated){setStatus('Дракон уже повержен.');return;}
      const distance=Math.hypot(pos.x-boss.anchor.position.x,pos.z-boss.anchor.position.z);
      if(!heroReady||!boss.canAttack||distance>22){setStatus('Подойди к Нидхёггу после его приземления.');return;}
      if(performance.now()-lastStrike<650)return;lastStrike=performance.now();
      if(!progressRef.current.worldFreed){
        dragonLife=NIDHOGG_MAX_HP;setDragonHp(NIDHOGG_MAX_HP);
        setStatus('Магия остальных локаций защищает Нидхёгга! Освободи весь Нифльхейм ('+progressRef.current.liberation.count+'/'+progressRef.current.liberation.total+'), и тогда возвращайся.');
        return;
      }
      if(!progressRef.current.forged||weapon!=='swordNidhogg'){
        dragonLife=Math.max(NIDHOGG_MAX_HP*.9,dragonLife-5);setDragonHp(Math.ceil(dragonLife));
        setStatus('Золотой меч царапает чешую, но раны мгновенно затягиваются! Нужна ковка у великана.');return;
      }
      if(!amuletProgress(questRef.current).restored){dragonLife=NIDHOGG_MAX_HP;setDragonHp(NIDHOGG_MAX_HP);setStatus('Без Амулета хранителей не победить Нидхёгга. Собери шесть частей и восстанови его у воительницы.');return;}
      let attack=combatRef.current.attack;
      if(boostRef.current.attack>0){attack=boostedPotionDamage(attack,boostRef.current.attack);boostCallback.current('attack');}
      const damage=artifactBattle.weaponHit(combatRef.current.artifactId,nidhoggHitDamage(attack,++strikeCount%5===0));
      dragonLife=Math.max(0,dragonLife-damage);setDragonHp(Math.ceil(dragonLife));
      setStatus('Погибель Нидхёгга разбивает древнюю чешую! Урон '+damage+'.');
      if(dragonLife<=0){
        beaten=true;heartActiveRef.current=false;setHeartActive(false);pendingBreath=0;dragonFire.stop();boss.anchor.visible=false;dragonBounds=undefined;
        if(combatRef.current.multiplier===2){heroLife=Math.ceil(heroLife/2);setHp(heroLife);}
        eventRef.current('defeat');
        setNearDragon(false);setStatus('Нидхёгг повержен! Артефакт «Осколок Хвергельмира» добавлен в Чертог: примени его для +15% к защите. Также: чешуя, руна, эликсиры и '+NIDHOGG_REWARD.toLocaleString('ru-RU')+' капель бессмертия.');
      }
    };
    shieldRef.current=()=>{if(shieldEquipped){guardUntil=performance.now()+1400;setStatus('Щит поднят: половина урона огненного удара будет поглощена.');}else setStatus('Сначала надень щит в кузнице.');};
    const flightCamera=new THREE.Vector3(),flightTarget=new THREE.Vector3();
    const terrainMeshes:THREE.Mesh[]=[];
    // Three deposits can be visited before the final fight, along the side walls.
    const oreMarkers=NIFL_OBSIDIAN.map((place,index)=>{
      const group=new THREE.Group();group.name='Обсидиан бездны: '+place.name;
      // Bright mineral veins and tall beacons remain visible in the dark cave.
      const vein=new THREE.Mesh(new THREE.DodecahedronGeometry(2.05,1),
        new THREE.MeshStandardMaterial({color:'#29213c',metalness:.48,roughness:.28,emissive:'#784bb9',emissiveIntensity:.76}));
      vein.rotation.set(.15,index*.7,.12);vein.position.y=.45;group.add(vein);
      const halo=new THREE.Mesh(new THREE.TorusGeometry(1.72,.12,6,24),
        new THREE.MeshBasicMaterial({color:'#d29cff'}));
      halo.rotation.x=Math.PI/2;halo.position.y=-.2;group.add(halo);
      const mark=new THREE.Mesh(new THREE.OctahedronGeometry(.78),
        new THREE.MeshBasicMaterial({color:'#e8c1ff'}));mark.position.y=3.3;group.add(mark);
      const beacon=new THREE.Mesh(new THREE.ConeGeometry(.44,5.3,6),
        new THREE.MeshBasicMaterial({color:'#9c76e9',transparent:true,opacity:.22,depthWrite:false}));
      beacon.position.y=2.4;group.add(beacon);
      group.position.set(place.x,0,place.z);scene.add(group);
      return {id:place.id,group};
    });
    const crystalGroups:THREE.Group[]=[],crystalBounds:THREE.Box3[]=[];
    const seatCrystals=()=>{crystalBounds.length=0;for(const group of crystalGroups){group.position.y=groundAt(group.position.x,group.position.z)-.05;group.updateMatrixWorld(true);crystalBounds.push(new THREE.Box3().setFromObject(group).expandByScalar(.5));}};
    const groundRay=new THREE.Raycaster(),groundOrigin=new THREE.Vector3(),groundDown=new THREE.Vector3(0,-1,0);
    let groundX=NaN,groundZ=NaN,groundY=0;
    const groundAt=(x:number,z:number)=>{
      if(!terrainMeshes.length)return 0;
      groundOrigin.set(x,40,z);groundRay.set(groundOrigin,groundDown);
      return Math.max(0,groundRay.intersectObjects(terrainMeshes,false)[0]?.point.y??0);
    };
    const load=async(file:string)=>new GLTFLoader().parseAsync(await cachedGlbBuffer(`${BASE}img/models/${file}`),`${BASE}img/models/`);
    load('Magic_Crystals_Optimized.glb').then(gltf=>{
      if(!alive){dispose(gltf.scene);assets.forEach(t=>t.dispose());return;}
      const model=gltf.scene;model.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
      model.position.x-=center.x;model.position.y-=bounds.min.y;model.position.z-=center.z;
      model.traverse(o=>{if(o instanceof THREE.Mesh)for(const material of Array.isArray(o.material)?o.material:[o.material])if(material instanceof THREE.MeshStandardMaterial){material.emissiveIntensity=.65;material.roughness=.5;}});
      const placements=[[-26,18,3.1], [25,14,4],[-23,4,4.5],[27,-1,2.8],[-28,-13,3.7],[24,-19,4.7],[-25,-29,3.2],[28,-36,3.8],[-27,-46,4.3],[26,-53,3.5],[-19,-61,3],[19,-63,4],[-15,12,2.2],[16,-9,2.5]];
      placements.forEach(([x,z,height],i)=>{const group=new THREE.Group();group.name='Магические кристаллы';group.add(model.clone(true));group.scale.setScalar(Math.min(height/Math.max(size.y,.01),5/Math.max(size.x,size.z,.01)));group.rotation.y=i*2.399;group.position.set(x,0,z);crystalGroups.push(group);scene.add(group);});
      seatCrystals();
    }).catch(()=>{if(alive)setStatus('Кристаллы не загрузились. Можно вернуться и попробовать снова.');});
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
      dispose(terrain);scene.updateMatrixWorld(true);groundX=groundZ=NaN;seatCrystals();
    }).catch(()=>{if(alive)setStatus('Рельеф не загрузился. Вернись в Нифльхейм и попробуй снова.');});
    load('Dark_Side_Cave_Optimized.glb').then(gltf=>{
      if(!alive){dispose(gltf.scene);assets.forEach(t=>t.dispose());return;}
      const cave=gltf.scene;cave.updateMatrixWorld(true);
      cave.traverse(o=>{if(o instanceof THREE.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial){m.color.set('#666b73');m.roughness=.95;m.metalness=0;/* Keep the source emissive map and strength: red light inside the den. */}});
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
        const item=asset.scene;textureSteelOnWeapon(item,file);if(!isShield)styleNiflheimWeapon(item,weapon);if(isShield&&file==='Shield_Round.glb')item.scale.z=.22;
        item.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(item),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
        const span=isShield?Math.max(size.x,size.y,size.z):size.y;if(span<.001){dispose(item);return;}
        item.position.set(-center.x,isShield?-center.y:-bounds.min.y,-center.z);
        const hand=new THREE.Group();hand.scale.setScalar((isShield?.38:weapon==='spear'?.82:.57)/span);hand.position.set(0,isShield?.075:-.065,isShield?-.016:.015);if(isShield)hand.rotation.y=Math.PI;else hand.rotation.x=-.2;hand.add(item);parent.add(hand);
      }).catch(()=>{});
      shieldBones=[bone('LeftArm'),bone('LeftForeArm')].filter((b):b is THREE.Object3D=>!!b);shieldPose=shieldBones.map(b=>b.quaternion.clone());
      const hand=bone('RightHand'),arm=bone('LeftForeArm');if(hand)equip(weapon==='default'?'Sword.glb':WEAPON_ASSET[weapon],hand,false);if(arm&&shieldEquipped)equip(shieldAsset,arm,true);
      mixer=new THREE.AnimationMixer(model);const idleClip=THREE.AnimationClip.findByName(gltf.animations,'idle')||THREE.AnimationClip.findByName(gltf.animations,'sword_idle')||gltf.animations[0];const walkClip=THREE.AnimationClip.findByName(gltf.animations,'walk_loop')||THREE.AnimationClip.findByName(gltf.animations,'walk')||idleClip;
      if(idleClip)idle=mixer.clipAction(idleClip);if(walkClip)walk=mixer.clipAction(walkClip);idle?.play();current=idle;heroReady=true;setStatus('');
    }).catch(()=>{if(alive)setStatus('Не удалось загрузить Vicki. Вернись в Нифльхейм и попробуй снова.');});
    load('European_Dragon_Optimized.glb').then(gltf=>{
      if(!alive){dispose(gltf.scene);assets.forEach(t=>t.dispose());return;}
      encounter=createNidhoggEncounter(gltf.scene,gltf.animations,groundAt,()=>{});
      // Side lighting keeps the original scales visible instead of filling the silhouette.
      const dragonGlow=new THREE.PointLight('#9bc8ff',32,18,2);dragonGlow.position.set(-6,8,6);encounter.anchor.add(dragonGlow);
      scene.add(encounter.anchor);dragonMixer=encounter.mixer;dragonBounds=encounter.collision;
      if(progressRef.current.defeated){encounter.anchor.visible=false;dragonBounds=undefined;beaten=true;}
    }).catch(()=>{if(alive)setStatus('Дракон пока не загрузился. Выход из подземелья доступен.');});
    const keys=new Set<string>();const down=(e:KeyboardEvent)=>{if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d'].includes(e.key)){e.preventDefault();keys.add(e.key);}};const up=(e:KeyboardEvent)=>keys.delete(e.key);const reset=()=>{keys.clear();clear();};
    window.addEventListener('keydown',down);window.addEventListener('keyup',up);window.addEventListener('blur',reset);document.addEventListener('visibilitychange',reset);
    const resize=()=>{const w=host.clientWidth,h=host.clientHeight;if(w&&h){renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}};const observer=new ResizeObserver(resize);observer.observe(host);resize();camera.position.set(0,10,32);
    let wasNear=true,nearOreRef='',nearDragonRef=false,oreGroundReady=false;
    const frame=(now:number)=>{
      if(!alive)return;const dt=Math.min((now-previous)/1000,.05);previous=now;
      let dx=0,dz=0;if(!document.hidden){dx=analog.current.x+(keys.has('d')||keys.has('ArrowRight')?1:0)-(keys.has('a')||keys.has('ArrowLeft')?1:0);dz=analog.current.z+(keys.has('s')||keys.has('ArrowDown')?1:0)-(keys.has('w')||keys.has('ArrowUp')?1:0);}
      const length=Math.hypot(dx,dz);let moving=false;if(length>.08&&!(encounter?.flying&&!beaten)){dx/=Math.max(1,length);dz/=Math.max(1,length);const x=THREE.MathUtils.clamp(pos.x+dx*8.5*dt,-31,31),z=THREE.MathUtils.clamp(pos.z+dz*8.5*dt,-65,24.5);const blocked=crystalBounds.some(b=>x>b.min.x&&x<b.max.x&&z>b.min.z&&z<b.max.z)||(!encounter?.flying&&dragonBounds&&x>dragonBounds.min.x&&x<dragonBounds.max.x&&z>dragonBounds.min.z&&z<dragonBounds.max.z);if(!blocked){moving=Math.hypot(x-pos.x,z-pos.z)>.001;pos.x=x;pos.z=z;}const target=Math.atan2(dx,dz);hero.rotation.y+=Math.atan2(Math.sin(target-hero.rotation.y),Math.cos(target-hero.rotation.y))*(1-Math.exp(-dt*14));}
      if(pos.x!==groundX||pos.z!==groundZ){groundY=groundAt(pos.x,pos.z);groundX=pos.x;groundZ=pos.z;}
      if(!oreGroundReady&&terrainMeshes.length){oreMarkers.forEach(marker=>{marker.group.position.y=groundAt(marker.group.position.x,marker.group.position.z)+1.15;});oreGroundReady=true;}
      oreMarkers.forEach(marker=>{marker.group.visible=progressRef.current.allSealsOpen&&!progressRef.current.has('obsidian:'+marker.id);marker.group.rotation.y+=dt*.16;});
      const deposit=progressRef.current.allSealsOpen?NIFL_OBSIDIAN.find(place=>!progressRef.current.has('obsidian:'+place.id)&&Math.hypot(pos.x-place.x,pos.z-place.z)<7):undefined;
      if((deposit?.id||'')!==nearOreRef) {nearOreRef=deposit?.id||'';setNearOre(nearOreRef);}
      const atDragon=!!encounter&&!beaten&&!progressRef.current.defeated&&!encounter.flying&&Math.hypot(pos.x-encounter.anchor.position.x,pos.z-encounter.anchor.position.z)<22;
      if(atDragon!==nearDragonRef){nearDragonRef=atDragon;setNearDragon(atDragon);}
      if(encounter&&!metSent&&!progressRef.current.met&&Math.hypot(pos.x+8,pos.z+35)<27){
        metSent=true;eventRef.current('first');
        setStatus(progressRef.current.allSealsOpen?'Встреча с Нидхёггом! Все '+NIFLHEIM_SEALS.length+' печатей сняты — теперь можно собрать обсидиан и вернуться к кузнецу.':'Обсидиан запечатан силой Нифльхейма. Сначала сними все '+NIFLHEIM_SEALS.length+' печатей локаций.');
      }
      if(encounter&&!beaten&&!progressRef.current.defeated&&progressRef.current.met&&encounter.canAttack){
        const distance=Math.hypot(pos.x-encounter.anchor.position.x,pos.z-encounter.anchor.position.z);
        if(distance<16&&now-lastBite>3200&&!pendingBreath){
          lastBite=now;pendingBreath=now+450;encounter.breathe();dragonFire.start(encounter.mouth,hero,now);
        }
        if(pendingBreath&&now>=pendingBreath){
          pendingBreath=0;
          if(distance>=16){setStatus('Vicki ушла из зоны огненного удара.');}
          else {
            const shielded=now<guardUntil;
            let damage=dragonStrikeDamage(protectedDragonFire(NIDHOGG_FIRE_DAMAGE,amuletProgress(questRef.current).restored,heartActiveRef.current),combatRef.current,shielded);
            if(boostRef.current.luck>0){if(potionDodges(boostRef.current.luck,Math.random()))damage=0;boostCallback.current('luck');}
            if(damage>0&&frostRef.current>0){damage=Math.ceil(damage*.5);frostCallback.current();}
            const afterFire=heroLife-damage;heroLife=artifactBattle.survive(combatRef.current.artifactId,afterFire,combatRef.current.maxHp);setHp(heroLife);hpCallback.current(heroLife);
            setStatus(afterFire<=0&&heroLife>0?'❄️ Осколок Хвергельмира спас Vicki: 15% здоровья!':(shielded?'🛡️ Щит поглотил половину огненного удара. ':'🔥 Огненный удар Нидхёгга! ')+'−'+damage+' здоровья.');
            if(heroLife<=0){artifactBattle.reset();strikeCount=0;heartActiveRef.current=false;setHeartActive(false);heroLife=combatRef.current.maxHp;setHp(heroLife);hpCallback.current(heroLife);pos.x=0;pos.z=19;dragonLife=NIDHOGG_MAX_HP;setDragonHp(NIDHOGG_MAX_HP);setStatus('Vicki отступила к выходу. Попробуй позже — твой прогресс сохранён.');}
          }
        }
      }
      if(!progressRef.current.forged&&dragonLife<NIDHOGG_MAX_HP){dragonLife=Math.min(NIDHOGG_MAX_HP,dragonLife+dt*12);}
      if(now-lastHud>450){lastHud=now;setDragonHp(Math.ceil(dragonLife));}
      shieldBones.forEach((b,i)=>b.quaternion.copy(shieldPose[i]));
      const action=moving?walk:idle;if(action&&action!==current){current?.fadeOut(.15);action.reset().fadeIn(.15).play();current=action;}mixer?.update(dt);if(!beaten)encounter?.update(document.hidden?0:dt,pos,heroReady&&terrainMeshes.length>0);hero.position.set(pos.x,groundY,pos.z);
      const raise=shieldEquipped?Math.min(1,Math.max(0,(guardUntil-now)/240)):0;
      if(raise)shieldBones.forEach((b,i)=>{b.rotation.z+=(i===0?-.75:-.4)*raise;});
      dragonFire.update(now);
      const flying=!beaten&&encounter?.flying;
      flightCamera.set(pos.x*.4,flying?21:groundY+10,pos.z+(flying?25:16));
      flightTarget.set(pos.x,groundY+3.5,pos.z-8);
      if(flying)flightTarget.lerp(encounter!.anchor.position,.6);
      camera.position.lerp(flightCamera,1-Math.exp(-dt*4));camera.lookAt(flightTarget);
      const near=Math.abs(pos.x)<5&&pos.z>20;if(near!==wasNear){wasNear=near;setNearExit(near);}renderer.render(scene,camera);raf=requestAnimationFrame(frame);
    };raf=requestAnimationFrame(frame);
    return()=>{attackRef.current=()=>{};healRef.current=()=>{};shieldRef.current=()=>{};dragonFire.dispose();alive=false;cancelAnimationFrame(raf);observer.disconnect();window.removeEventListener('keydown',down);window.removeEventListener('keyup',up);window.removeEventListener('blur',reset);document.removeEventListener('visibilitychange',reset);reset();mixer?.stopAllAction();dragonMixer?.stopAllAction();dispose(scene);assets.forEach(t=>t.dispose());renderer.dispose();renderer.domElement.remove();};
  },[weapon,shieldAsset,shieldEquipped]);
  const steer=(e:React.PointerEvent<HTMLButtonElement>)=>{if(pointer.current!==e.pointerId)return;const rect=e.currentTarget.getBoundingClientRect(),r=rect.width*.36;let x=(e.clientX-rect.left-rect.width/2)/r,z=(e.clientY-rect.top-rect.height/2)/r;const length=Math.hypot(x,z);if(length>1){x/=length;z/=length;}analog.current={x,z};if(knob.current)knob.current.style.transform=`translate(${x*r}px,${z*r}px)`;};
  return <div style={{position:'relative',flex:1,minHeight:0,overflow:'hidden',background:'#121d24',touchAction:'none'}}>
    <div ref={mount} style={{position:'absolute',inset:0}}/>
    <style>{`.nidhogg-hud{position:absolute;top:72px;left:12px;right:12px;z-index:6;color:#eef8ff;pointer-events:none}.nidhogg-health-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.nidhogg-health-card{min-width:0;padding:7px 9px;border-radius:8px;background:#172b3de8;border:1px solid #809eac}.nidhogg-health-card>div:first-child{display:flex;flex-wrap:wrap;justify-content:space-between;gap:3px;font-size:11px}.nidhogg-health-track{height:8px;margin-top:5px;background:#101820;border-radius:5px;overflow:hidden}.nidhogg-health-track i{display:block;height:100%;transition:width .15s}.nidhogg-hud-details{display:flex;flex-wrap:wrap;gap:4px 9px;margin-top:6px;padding:5px 8px;border-radius:7px;background:#172b3ddb;font-size:10px;line-height:1.4}.nidhogg-heal{pointer-events:auto;display:block;margin:7px 0 0 auto;padding:8px 12px;border-radius:8px;border:1px solid #accade;background:#20313c;color:#eaf6ff;font:inherit;font-size:12px}.nidhogg-exit{pointer-events:auto;margin-top:7px;padding:8px 12px;background:#171e25;color:#e4c78c;border:1px solid #b39150;border-radius:8px;font:inherit;font-size:12px}.nidhogg-status{position:absolute;bottom:14px;left:12px;right:12px;z-index:6;padding:8px 10px;border:1px solid #9caaae;border-radius:9px;background:#182b3de8;color:#f9e6c0;font-size:11px;line-height:1.4;text-align:center;pointer-events:none}`}</style>
    <div className="mid3d-ui mid3d-top"><button className="mid3d-top-btn" onClick={()=>{clear();exit.current();}} aria-label="Вернуться в Нифльхейм"><img className="mid3d-top-button-art" src={`${BASE}img/models/home_button.png`} alt=""/></button><div className="mid3d-realm-title" style={{color:'#e9eff4'}}>Подземелье Нидхёгга</div></div>
    {status&&<div className="nidhogg-status" role="status">{status}</div>}
    <button className="mid3d-ui mid3d-joy" style={{padding:0,userSelect:'none'}} aria-label="Управление Vicki" onPointerDown={e=>{e.preventDefault();pointer.current=e.pointerId;e.currentTarget.setPointerCapture(e.pointerId);steer(e);}} onPointerMove={steer} onPointerUp={clear} onPointerCancel={clear} onLostPointerCapture={clear}><img style={{width:'100%',height:'100%',pointerEvents:'none'}} src={`${BASE}img/models/ui_joystick.png`} alt="" draggable={false}/><span className="mid3d-knob" ref={knob}/></button>
    <div className="nidhogg-hud">
      <div className="nidhogg-health-row">
        <div className="nidhogg-health-card"><div><b>Vicki</b><span>{Math.min(hp,combatStats.maxHp)}/{combatStats.maxHp}</span></div><div className="nidhogg-health-track" role="progressbar" aria-label="Здоровье Vicki" aria-valuemin={0} aria-valuemax={combatStats.maxHp} aria-valuenow={Math.min(hp,combatStats.maxHp)}><i style={{width:Math.max(0,Math.min(100,hp/combatStats.maxHp*100))+'%',background:'#58c49d'}}/></div></div>
        <div className="nidhogg-health-card"><div><b>Нидхёгг</b><span>{progressRef.current.defeated?0:dragonHp}/{NIDHOGG_MAX_HP}</span></div><div className="nidhogg-health-track" role="progressbar" aria-label="Здоровье Нидхёгга" aria-valuemin={0} aria-valuemax={NIDHOGG_MAX_HP} aria-valuenow={progressRef.current.defeated?0:dragonHp}><i style={{width:(progressRef.current.defeated?0:Math.max(0,dragonHp)/NIDHOGG_MAX_HP*100)+'%',background:'#e65b53'}}/></div></div>
      </div>
      <div className="nidhogg-hud-details"><span>🌑 Обсидиан: {progressRef.current.allSealsOpen?progressRef.current.obsidian.length+'/3':'запечатан · '+NIFLHEIM_SEALS.length+' печатей'}</span><span>❄️ Освобождено: {progressRef.current.liberation.count}/{progressRef.current.liberation.total}</span>{amulet.restored&&<span>🛡️ Амулет · защита 30%</span>}{whirlpoolHeart&&<span>🌊 Сердце: {heartActive?'огонь слабее на 25%':'не активировано'}</span>}{combatStats.multiplier===2&&<span style={{color:'#ffe18a'}}>💧 Живая вода ×2</span>}</div>
      {whirlpoolHeart&&!progressRef.current.defeated&&<button disabled={heartActive||!finalDragonReady(questDone,weapon)} style={{padding:'7px 10px',border:'1px solid #80c6d9',borderRadius:8,background:'#183749',color:'#c6f4ff',fontSize:12}} onClick={()=>{if(!finalDragonReady(questRef.current,weaponRef.current))return;heartActiveRef.current=true;setHeartActive(true);setStatus('🌊 Сердце Морвейна пробуждено: огненные атаки Нидхёгга ослаблены на 25% до конца этого боя.');}}>{heartActive?'🌊 Сердце активировано':'🌊 Активировать сердце Морвейна'}</button>}
      {potions.length>0&&<button className="nidhogg-heal" onClick={()=>{const potion=potions.includes('lifeElixir')?'lifeElixir':potions.includes('northernMoss')?'northernMoss':potions.includes('hoddmimirElixir')?'hoddmimirElixir':'';if(potion&&hp<combatStats.maxHp&&onUsePotion(potion,hp)){healRef.current(potion==='northernMoss'?30:combatStats.maxHp);setStatus('Эликсир восстановил силы Vicki.');}}}>🧪 Лечение</button>}
      {nearExit&&<button className="nidhogg-exit" onClick={()=>{clear();exit.current();}}>Открыть дверь · Нифльхейм</button>}
    </div>
    <button className="mid3d-ui mid3d-strike" aria-label="Ударить Нидхёгга" onClick={()=>attackRef.current()}><img className="mid3d-control-art" src={`${BASE}img/models/ui_attack.png`} alt="" draggable={false}/></button>
    <button className="mid3d-ui mid3d-block" aria-label="Прикрыться щитом" disabled={!shieldEquipped} onClick={()=>shieldRef.current()}><img className="mid3d-control-art" src={`${BASE}img/models/ui_shield.png`} alt="" draggable={false}/></button>
    {nearOre&&<div style={{position:'absolute',bottom:112,left:'50%',transform:'translateX(-50%)',padding:9,background:'#171d2deb',color:'#ebdfff',borderRadius:10,zIndex:7,textAlign:'center'}}><div>Обсидиан бездны · {NIFL_OBSIDIAN.find(p=>p.id===nearOre)?.name}</div><button onClick={()=>{eventRef.current(('obsidian:'+nearOre) as DragonEvent);setStatus('Обсидиан бездны получен. Вернись к великану с тремя залежами.');setNearOre('');}} style={{padding:'8px 12px',marginTop:6}}>🌑 Собрать</button></div>}
    {nearDragon&&!nearOre&&(!progressRef.current.allSealsOpen||!progressRef.current.forged||!progressRef.current.worldFreed||!amulet.restored)&&<div style={{position:'absolute',bottom:110,left:'50%',transform:'translateX(-50%)',padding:10,background:'#1b273aeb',color:'#fff',borderRadius:8,zIndex:7,textAlign:'center'}}>{!progressRef.current.allSealsOpen?'Обсидиан и путь к финальному бою запечатаны. Сними все '+NIFLHEIM_SEALS.length+' печатей Нифльхейма.':!progressRef.current.worldFreed?'Нидхёгг защищён незавершёнными испытаниями. Освободи весь Нифльхейм.':!amulet.restored?'Нужен Амулет хранителей: собери шесть частей и восстанови его у воительницы.':'Чешуя дракона восстанавливается! Нужен легендарный меч.'} <button onClick={()=>{clear();exit.current();}} style={{marginLeft:6}}>Отступить к кузнецу</button></div>}
    {!status&&<><div style={{position:'absolute',left:12,bottom:4,fontSize:10,color:'#aebac2',maxWidth:'55%'}}>Пещера: <a href="https://sketchfab.com/3d-models/dark-side-cave-e6347843eec64b408157dabfb8b196b2" target="_blank" rel="noopener noreferrer" style={{color:'inherit'}}>diaspora</a> · CC BY 4.0 · уменьшены текстуры, изменены масштаб и высота.</div>
    <div style={{position:'absolute',right:12,bottom:4,fontSize:10,color:'#aebac2',maxWidth:'40%'}}>Кристаллы: <a href="https://sketchfab.com/3d-models/magic-crystals-f20b3376ef9a4dff8ad27f1402087c52" target="_blank" rel="noopener noreferrer" style={{color:'inherit'}}>Enn Shtyka</a> · CC BY 4.0 · уменьшены текстуры и масштаб.</div></>}

  </div>;
}
