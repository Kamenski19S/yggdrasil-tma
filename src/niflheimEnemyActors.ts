import {pickEncounter} from './niflheimCombat';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {clone as cloneSkeleton} from 'three/examples/jsm/utils/SkeletonUtils.js';
import {BASE,cachedGlbBuffer,type HeroWeapon} from './core';
import {normalizeOrcAnimations} from './niflheimRigRetarget';

/**
 * Niflheim combat actors. One decoded GLB per species, SkeletonUtils clones
 * share geometry/textures but receive independent rigs and animation mixers.
 * The 15 undead spawn points are geographical encounters, NOT 15 active
 * enemies on every frame: at most three are visible and animated together.
 */
type Role='orc'|'troll'|'undead';
type Spot={id:string;root:THREE.Group};
type Asset={scene:THREE.Group;animations:THREE.AnimationClip[]};
type Actor={model:THREE.Group;root:THREE.Group;mixer:THREE.AnimationMixer;role:Role;static:boolean;groundOffset:number;clips:THREE.AnimationClip[];idle:THREE.AnimationAction|null;current:THREE.AnimationAction|null;actionUntil:number};
type Shadow={id:number;site:{x:number;z:number;place:string};root:THREE.Group;actor:Actor;healthBar:THREE.Sprite;hp:number;active:boolean;used:boolean;born:number;lastBite:number;lastHit:number};
type Guard={id:string;actor:Actor;root:THREE.Group;origin:THREE.Vector3;role:'orc'|'troll';hp:number;maxHp:number;attack:number;hitAt:number;lastAttack:number;lastHit:number;deadAt:number;respawnAt:number;bar:THREE.Sprite};
type OnShadowHit=(damage:number)=>number;
type OnGuardDefeated=(id:string,role:'orc'|'troll')=>void;
export const NIFLHEIM_RIGGED_ASSETS:Record<Role,string>={
  orc:'Niflheim_Orc_Rigged_Lite.glb',
  troll:'Niflheim_Cave_Troll_Lite.glb',
  undead:'Niflheim_Undead_Rigged_Lite.glb'
};

// 15 distinct patrol areas; coordinates are in Niflheim WORLD units.
export const NIFLHEIM_SHADOW_SITES=[
 {x:20,z:114,place:'Порог туманов'},
 {x:-35,z:98,place:'Дорога кузнеца'},
 {x:46,z:82,place:'Приют хранителей'},
 {x:-77,z:106,place:'Подножие снежной горы'},
 {x:-32,z:50,place:'Замёрзшее русло'},
 {x:84,z:62,place:'Пещера ледяного эха'},
 {x:82,z:6,place:'Пещера воспоминаний'},
 {x:-57,z:8,place:'Озеро подо льдом'},
 {x:-84,z:-16,place:'Разрушенная переправа'},
 {x:14,z:-39,place:'Сплетение корней'},
 {x:-78,z:-76,place:'Зал забытых имён'},
 {x:44,z:-81,place:'Колодец трёх норн'},
 {x:-24,z:-111,place:'Подступы к Хвергельмиру'},
 {x:-75,z:-118,place:'Пересохшее русло'},
 {x:54,z:-115,place:'Дорога к башне Нидхёгга'}
] as const;
// Additional patrols complement the five story guardians already in the scene.
export const NIFLHEIM_EXTRA_GUARDS=[
 {id:'shelterOrc',role:'orc',x:56,z:83,place:'Приют хранителей'},
 {id:'forgeOrc',role:'orc',x:-23,z:91,place:'Кузница'},
 {id:'towerOrc',role:'orc',x:54,z:-103,place:'Башня Нидхёгга'},
 {id:'crossingTroll',role:'troll',x:-88,z:-21,place:'Переправа'},
 {id:'rootsTroll',role:'troll',x:37,z:-54,place:'Сплетение корней'},
 {id:'hallOrc',role:'orc',x:-65,z:-111,place:'Южный проход Зала забытых имён'},
 {id:'memoryOrc',role:'orc',x:68,z:-1,place:'Путь к Пещере воспоминаний'},
 {id:'mountainOrc',role:'orc',x:-68,z:106,place:'Внешний рубеж Снежной горы'},
 {id:'echoOrc',role:'orc',x:83,z:61,place:'Внутри Пещеры ледяного эха'},
 // Additional shield goblins defend open roads; none is placed in a doorway.
 {id:'iceRoadGoblin',role:'troll',x:-37,z:47,place:'Тропа замёрзшего русла'},
 {id:'lakeGoblin',role:'troll',x:-54,z:17,place:'Берег ледяного озера'},
 {id:'echoGoblin',role:'troll',x:66,z:76,place:'Дорога к Пещере ледяного эха'},
 {id:'hallGoblin',role:'troll',x:-55,z:-82,place:'Подступы к Залу забытых имён'},
 {id:'nornsGoblin',role:'troll',x:27,z:-72,place:'Дорога к Колодцу трёх норн'},
 // More VISIBLY present goblins on the same routes the player walks.
 // The one rigged GLB is reused; no additional model or texture downloads.
 {id:'entranceGoblinA',role:'troll',x:-22,z:114,place:'Западный дозор Порога туманов'},
 {id:'entranceGoblinB',role:'troll',x:21,z:111,place:'Восточный дозор Порога туманов'},
 {id:'forgePathGoblin',role:'troll',x:-33,z:81,place:'Подход к Кузнице хранителей'},
 {id:'shelterPathGoblin',role:'troll',x:33,z:91,place:'Дорога к Приюту хранителей'},
 {id:'snowGateGoblin',role:'troll',x:-49,z:84,place:'Тропа к Снежной горе'},
 {id:'riverEastGoblin',role:'troll',x:7,z:39,place:'Восток замёрзшего русла'},
 {id:'iceLakeWestGoblin',role:'troll',x:-46,z:36,place:'Северный берег ледяного озера'},
 {id:'echoGateGoblin',role:'troll',x:63,z:44,place:'Север Пещеры ледяного эха'},
 {id:'memoryApproachGoblin',role:'troll',x:65,z:20,place:'Подход к Пещере воспоминаний'},
 {id:'crossingSouthGoblin',role:'troll',x:-55,z:-22,place:'Южный берег переправы'},
 {id:'rootsPassGoblin',role:'troll',x:-22,z:-49,place:'Тропа к Сплетению корней'},
 {id:'hallNorthGoblin',role:'troll',x:-46,z:-64,place:'Северный дозор Зала забытых имён'},
 {id:'hallSouthGoblin',role:'troll',x:-49,z:-105,place:'Южный дозор Зала забытых имён'},
 {id:'sourceGoblin',role:'troll',x:13,z:-112,place:'Подступы к Хвергельмиру'}
] as const;

const WAVE_MS=15*60*1000;
const BAR_WIDTH=1.05;
const BAR_FILL_WIDTH=.98;
const FIRST_WAVE_MS=45*1000; // First encounter is quickly visible for a new player.
const MAX_ACTIVE_SHADOWS=3;
const SHADOW_LIFETIME_MS=130*1000;
const SHADOW_MAX_HP=51;
// One visible size for each species, regardless of spawn point or building.
const ROLE_HEIGHT={orc:7.4,troll:5.6,undead:5.2} as const;

export function installNiflheimRiggedEnemies(
 scene:THREE.Scene,spots:Spot[],isAlive:()=>boolean,
 ground:(x:number,z:number)=>number,
 notify:(message:string)=>void,
 onShadowStrike:OnShadowHit,onShadowDefeated:(id:number)=>void,onGuardDefeated:OnGuardDefeated,
 canSpawn:(x:number,z:number)=>boolean,
 combatEffect:(kind:'enemy'|'hero',actor:THREE.Object3D,height:number,delay:number)=>void=()=>{},
 heroAttack:()=>number=()=>22
){
  const loader=new GLTFLoader();
  const actors:Actor[]=[];
  const shadows:Shadow[]=[];
  const guards:Guard[]=[];
  const extras:THREE.Group[]=[];
  const commonShadowMaterials=new Map<THREE.Material,THREE.Material>();
  const winterOrcMaterials=new Map<THREE.Material,THREE.Material>();

  const mountActor=(root:THREE.Group,role:Role,asset:Asset):Actor=>{
    const model=cloneSkeleton(asset.scene) as THREE.Group;
    model.name='Niflheim '+role+' rigged character';
    model.updateMatrixWorld(true);
    const bounds=new THREE.Box3().setFromObject(model);
    const span=Math.max(.001,bounds.max.y-bounds.min.y),center=bounds.getCenter(new THREE.Vector3());
    const holder=new THREE.Group();holder.scale.setScalar(ROLE_HEIGHT[role]/span);
    model.position.set(-center.x,-bounds.min.y,-center.z);
    holder.add(model);root.add(holder);
    model.traverse(o=>{
      if(!(o instanceof THREE.Mesh))return;
      o.castShadow=role!=='undead';
      // Animated skinned meshes change silhouette beyond their static bounds.
      // Manually range-cull guards rather than lose visible goblins to
      // incorrect Three.js skinned-mesh frustum culling.
      o.frustumCulled=role==='undead';
      if(role==='orc'){
        const tintWinter=(original:THREE.Material)=>{
          const cached=winterOrcMaterials.get(original);if(cached)return cached;
          const winter=original.clone();
          if(winter instanceof THREE.MeshStandardMaterial){
            // Preserve textures and PBR detail; tint armor and skin with frost hues.
            winter.color.multiply(new THREE.Color('#a9c4de'));
            winter.emissive.set('#132e40');winter.emissiveIntensity=.14;
            winter.roughness=Math.max(.53,winter.roughness);
          }
          winterOrcMaterials.set(original,winter);return winter;
        };
        o.material=Array.isArray(o.material)?o.material.map(tintWinter):tintWinter(o.material);
      }
      if(role==='undead'){
        const tint=(original:THREE.Material)=>{
          const cached=commonShadowMaterials.get(original);if(cached)return cached;
          const tinted=original.clone();
          if(tinted instanceof THREE.MeshStandardMaterial){
            tinted.color.multiply(new THREE.Color('#8895bb'));
            tinted.emissive.set('#313674');tinted.emissiveIntensity=.42;
            tinted.transparent=true;tinted.opacity=.88;tinted.depthWrite=true;
          }
          commonShadowMaterials.set(original,tinted);return tinted;
        };
        o.material=Array.isArray(o.material)?o.material.map(tint):tint(o.material);
      }
    });
    const mixer=new THREE.AnimationMixer(model);
    const clip=asset.animations.find(a=>/^idle$|ANM_IDLE|Take 001/i.test(a.name))||asset.animations[0];
    const idle=clip?mixer.clipAction(clip):null;
    idle?.play();
    const actor={model,root,mixer,role,static:true,groundOffset:0,clips:asset.animations,idle,current:idle,actionUntil:0} satisfies Actor;
    // Match the soles to the local walking surface, not the height of the
    // imported scene's pivot or armour bounding box. Especially important
    // for animated orcs whose pivot is near the waist.
    mixer.update(0);
    if(role==='orc'){
      const feet=['Bip001_L_Foot_075','Bip001_R_Foot_082']
        .map(name=>model.getObjectByName(name)).filter((b):b is THREE.Object3D=>!!b);
      if(feet.length){
        root.updateWorldMatrix(true,true);
        const footY=Math.min(...feet.map(b=>b.getWorldPosition(new THREE.Vector3()).y));
        const rootX=root.getWorldPosition(new THREE.Vector3()).x;
        const rootZ=root.getWorldPosition(new THREE.Vector3()).z;
        const delta=ground(rootX,rootZ)+.18-footY;
        // Guard against malformed animation rigs: never jump several metres.
        if(Number.isFinite(delta)&&Math.abs(delta)<5){root.position.y+=delta;actor.groundOffset=delta;}
      }
    }
    actors.push(actor);return actor;
  };

  const playAction=(actor:Actor,type:'attack'|'hurt'|'death',now:number)=>{
    if(actor.role==='undead')return;
    // Finish a visible attack even when Vicki lands a hit during the swing.
    if(type==='hurt'&&now<actor.actionUntil&&/LIGHT_ATTACK|ATTACK_CRIT|^attack[12]$/i.test(actor.current?.getClip().name||''))return;
    const pattern=type==='attack'?/LIGHT_ATTACK|ATTACK_CRIT|^attack[12]$/i:type==='hurt'?/DAMAGED|take_damage/i:/DEATH/i;
    const options=actor.clips.filter(c=>pattern.test(c.name));
    const clip=options[type==='attack'?Math.floor(Math.random()*options.length):0];if(!clip)return;
    const action=actor.mixer.clipAction(clip);
    if(actor.current!==action){actor.current?.fadeOut(.1);action.reset().fadeIn(.1).play();actor.current=action;}else action.reset().play();
    action.setLoop(THREE.LoopOnce,1);action.clampWhenFinished=false;
    actor.actionUntil=now+clip.duration*1000;
  };
  const resetAction=(actor:Actor,now:number,moving=false)=>{
    if(now<actor.actionUntil)return;
    const clip=moving?actor.clips.find(c=>/^(ANM_WALK|walk)$/i.test(c.name)):undefined;
    const desired=clip?actor.mixer.clipAction(clip):actor.idle;
    if(!desired||actor.current===desired)return;
    actor.current?.fadeOut(.12);
    desired.reset().fadeIn(.12).play();
    if(clip)desired.setLoop(THREE.LoopRepeat,Infinity);
    actor.current=desired;
  };
  // Depth-aware camera-facing health bars in WORLD coordinates.
  const makeBar=(tint:string)=>{
    const anchor=new THREE.Group();anchor.name='Здоровье над головой';scene.add(anchor);anchor.visible=false;
    const background=new THREE.Sprite(new THREE.SpriteMaterial({color:'#29242c',depthTest:true,depthWrite:false,fog:false}));
    background.scale.set(BAR_WIDTH,.13,1);anchor.add(background);
    const fill=new THREE.Sprite(new THREE.SpriteMaterial({color:tint,depthTest:true,depthWrite:false,fog:false}));
    fill.position.z=.018;fill.scale.set(BAR_FILL_WIDTH,.075,1);anchor.add(fill);return fill;
  };
  const updateBarPosition=(actor:Actor,fill:THREE.Sprite)=>{
    const anchor=fill.parent as THREE.Group;
    // The head bones sit at different heights in the imported skeletons.
    // Anchor to the ground-level actor and the normalized visible model height,
    // so the small health bar always stays OUTSIDE the skull in every animation.
    actor.root.getWorldPosition(anchor.position);
    anchor.position.y+=ROLE_HEIGHT[actor.role]+.68;
  };
  const persistGuard=(id:string,next:number)=>{try{localStorage.setItem('yggdrasil-niflheim-guard-'+id,String(next));}catch{}};
  const readGuard=(id:string)=>{try{return Number(localStorage.getItem('yggdrasil-niflheim-guard-'+id))||0;}catch{return 0;}};
  const createGuard=(id:string,role:'orc'|'troll',holder:THREE.Group,actor:Actor)=>{
    const isTroll=role==='troll',maxHp=isTroll?165:98,attack=isTroll?38:24;
    const bar=makeBar(isTroll?'#c9a4ec':'#e58b7f');
    const origin=holder.getWorldPosition(new THREE.Vector3()),next=readGuard(id);
    const guard:Guard={id,actor,root:holder,origin,role,hp:maxHp,maxHp,attack,hitAt:0,lastAttack:0,lastHit:0,deadAt:0,respawnAt:next,bar};
    holder.visible=next<=Date.now();
    // No orphaned healthbars when a guard is cooling down.
    bar.parent!.visible=false;
    guards.push(guard);
  };
  // Load one optimized axe and clone it; geometry/materials are shared.
  const axeTemplate=cachedGlbBuffer(`${BASE}img/models/Axe_Double.glb`)
    .then(buffer=>loader.parseAsync(buffer,`${BASE}img/models/`))
    .then(asset=>asset.scene)
    .catch(()=>null);
  const attachGuardWeapon=(actor:Actor)=>{
    const model=actor.model,role=actor.role;
    if(role==='undead'||role==='troll')return;
    if(role==='orc'){
      // Source Axe_07 is skinned with the wrong bind offsets; otherwise it
      // floats across the waist instead of staying inside the closed fist.
      model.traverse(o=>{
        const mesh=o as THREE.Mesh;
        if(mesh.isMesh&&(o.name==='Object_25'||o.name==='Axe'||mesh.geometry?.name?.includes('Axe_07')))o.visible=false;
      });
    }
    axeTemplate.then(template=>{
      if(!isAlive()||!template)return;
      model.updateMatrixWorld(true);
      const hand=model.getObjectByName(role==='orc'?'Bip001_R_Hand_017':'Wrist_R_0241');
      if(!hand){console.warn('No fist bone for',role);return;}
      const axe=template.clone(true);
      axe.name='Секира орка в правой руке';
      axe.updateMatrixWorld(true);
      const box=new THREE.Box3().setFromObject(axe),size=box.getSize(new THREE.Vector3());
      if(size.y<.0001)return;
      const center=box.getCenter(new THREE.Vector3());
      // Keep grip at the bottom of the axe shaft, facing forward.
      axe.position.x-=center.x;
      axe.position.y-=box.min.y+size.y*.14;
      axe.position.z-=center.z;
      const grip=new THREE.Group();
      grip.name='Крепление оружия к кисти';
      grip.rotation.set(Math.PI/2,0,-Math.PI/2);
      hand.add(grip);
      hand.updateWorldMatrix(true,false);
      const worldScale=hand.getWorldScale(new THREE.Vector3());
      const absoluteScale=Math.max(.0001,(Math.abs(worldScale.x)+Math.abs(worldScale.y)+Math.abs(worldScale.z))/3);
      const weaponLength=role==='orc'?3.05:3.15;
      grip.scale.setScalar(Math.min(500,weaponLength/(size.y*absoluteScale)));
      grip.add(axe);
    });
  };

  // Persist the wave's clock across re-entry: leaving the world never resets it.
  const storageKey='yggdrasil-niflheim-shadow-next';
  const readWaveClock=()=>{
    try{
      const stored=Number(localStorage.getItem(storageKey));
      if(Number.isFinite(stored)&&stored>0)return stored;
      const initial=Date.now()+FIRST_WAVE_MS;
      localStorage.setItem(storageKey,String(initial));return initial;
    }catch{return Date.now()+FIRST_WAVE_MS;}
  };
  let nextWave=readWaveClock();
  let waveNumber=0,lastSpawnScan=0,lastWarn=0;
  const setWaveClock=(next:number)=>{
    nextWave=next;try{localStorage.setItem(storageKey,String(next));}catch{}
  };
  const createShadow=(id:number,site:(typeof NIFLHEIM_SHADOW_SITES)[number],asset:Asset)=>{
    const root=new THREE.Group();root.name='Тень забытых '+(id+1)+' — '+site.place;
    root.position.set(site.x,ground(site.x,site.z),site.z);
    root.visible=false;scene.add(root);
    const actor=mountActor(root,'undead',asset);actor.static=false;
    const bar=makeBar('#b47fdd');
    shadows.push({id,site,root,actor,healthBar:bar,hp:SHADOW_MAX_HP+id*9,active:false,used:false,born:0,lastBite:0,lastHit:0});
  };
  const fadeOut=(shadow:Shadow,defeated:boolean)=>{
    shadow.root.visible=false;shadow.healthBar.parent!.visible=false;shadow.active=false;shadow.used=true;
    if(defeated){const drops=80+(shadow.id%5)*35;notify('🌑 Тень изгнана. +'+drops+' Капель и трофей.');onShadowDefeated(shadow.id);}
  };
  const activate=(shadow:Shadow,now:number)=>{
    shadow.active=true;shadow.used=true;shadow.born=now;
    shadow.hp=SHADOW_MAX_HP+shadow.id*9;shadow.lastBite=now;shadow.lastHit=0;
    shadow.root.visible=true;shadow.healthBar.parent!.visible=true;shadow.root.scale.setScalar(.001);
    shadow.root.position.set(shadow.site.x,ground(shadow.site.x,shadow.site.z),shadow.site.z);
    shadow.healthBar.scale.x=BAR_FILL_WIDTH;shadow.healthBar.position.x=0;
    notify('🌑 Из тумана возникла Тень забытых у '+shadow.site.place+'!');
  };

  // Decode once per species; fix orc timeline offsets and retarget four clips
  // onto the shield troll's EXISTING skin before making any animation clones.
  const loads=(['orc','troll','undead'] as const).map(async role=>{
    try{
      const buffer=await cachedGlbBuffer(`${BASE}img/models/${NIFLHEIM_RIGGED_ASSETS[role]}`);
      const asset=await loader.parseAsync(buffer,`${BASE}img/models/`);
      return {role,asset};
    }catch(error){console.warn('Niflheim actor unavailable',role,error);return null;}
  });
  Promise.all(loads).then(records=>{
    if(!isAlive())return;
    const byRole=new Map(records.filter((x):x is NonNullable<typeof x>=>x!==null).map(x=>[x.role,x.asset] as const));
    const orc=byRole.get('orc'),troll=byRole.get('troll');
    if(orc)normalizeOrcAnimations(orc);
    if(troll)normalizeOrcAnimations(troll); // Normalize the new troll's own clips; never retarget the old goblin rig.
    for(const role of ['orc','troll','undead'] as const){
      const asset=byRole.get(role);if(!asset)continue;
        for(const spot of spots){
          const expected:Record<string,Role>={
            memoryCave:'orc',roots:'orc',namesHall:'orc',
            snowMountain:'orc',threeNornsWell:'orc'
          };
          if(expected[spot.id]!==role)continue;
          const holder=new THREE.Group();holder.name='Страж '+spot.id;
          spot.root.add(holder);
          const actor=mountActor(holder,role,asset);
          createGuard(spot.id,role as 'orc'|'troll',holder,actor);
          attachGuardWeapon(actor);
          // No temporary geometric stand-ins: all five guardian slots contain rigs only.
        }
        for(const site of NIFLHEIM_EXTRA_GUARDS){
          if(site.role!==role)continue;
          const root=new THREE.Group();
          root.name=site.place+': '+(role==='orc'?'орк-страж':'пещерный тролль');
          // New patrols must stand on reachable snow, not a river mesh.
          // Preserve the authored point where already walkable.
          const shifts:[[number,number],...Array<[number,number]>]=[
            [0,0],[7,0],[-7,0],[0,7],[0,-7],[9,7],[-9,-7],[12,0],[-12,0]
          ];
          const spawn=site.role==='troll'?
            shifts.map(([dx,dz])=>({x:site.x+dx,z:site.z+dz}))
              .find(p=>canSpawn(p.x,p.z))||{x:site.x,z:site.z}:
            {x:site.x,z:site.z};
          root.position.set(spawn.x,ground(spawn.x,spawn.z),spawn.z);scene.add(root);
          const actor=mountActor(root,role,asset);
          createGuard(site.id,role,root,actor);
          attachGuardWeapon(actor);
          extras.push(root);
        }
        if(role==='undead')NIFLHEIM_SHADOW_SITES.forEach((site,id)=>createShadow(id,site,asset));
    }
  }).catch(error=>console.warn('Niflheim rigged loading failed',error));

  let previousAnimationAt=performance.now();
  let encounterMembers=new Set<string>(),encounterUntil=0;
  const guardKey=(g:Guard)=>'guard:'+g.id;
  const shadowKey=(s:Shadow)=>'shadow:'+s.id;
  return {
    tick(dt:number,now:number,hero:{x:number;z:number},shielded:boolean,paused:boolean){
      if(!isAlive())return;
      const animationDt=paused?0:Math.min(1,Math.max(0,(now-previousAnimationAt)/1000));
      previousAnimationAt=now;
      const realtime=Date.now();
      if(realtime>=nextWave){
        waveNumber++;
        // At most one new wave per time window, even if the tab was suspended.
        setWaveClock(realtime+WAVE_MS);
        for(const shadow of shadows)if(!shadow.active)shadow.used=false;
      }
      for(const actor of actors){
        if(actor.static){
          if(actor.root.visible){
            const p=actor.root.getWorldPosition(new THREE.Vector3());
            if(actor.model.visible&&Math.hypot(p.x-hero.x,p.z-hero.z)<75){actor.mixer.update(animationDt);}
          }
        }
      }
      if(paused)return;
      // Recruit nearby species together every 12 seconds; never teleport an ally.
      const threats=[...guards.filter(g=>!g.deadAt&&g.respawnAt<=realtime).map(g=>{
        const p=g.root.getWorldPosition(new THREE.Vector3());return {id:guardKey(g),role:g.role,distance:Math.hypot(p.x-hero.x,p.z-hero.z)};
      }),...shadows.filter(s=>s.active).map(s=>({id:shadowKey(s),role:'undead' as const,distance:Math.hypot(s.root.position.x-hero.x,s.root.position.z-hero.z)}))];
      const live=threats.filter(t=>encounterMembers.has(t.id)&&t.distance<28);
      if(now>=encounterUntil||!live.length){
        encounterMembers=new Set(pickEncounter(threats));encounterUntil=now+12000;
        if(encounterMembers.size>1)notify('⚠️ Совместная атака! Противников: '+encounterMembers.size+'. Держи зелье наготове.');
      }
      for(const guard of guards){
        if(guard.deadAt){
          if(now-guard.deadAt>Math.max(1150,guard.actor.actionUntil-guard.deadAt)){guard.root.visible=false;guard.bar.parent!.visible=false;guard.deadAt=0;}
          continue;
        }
        if(guard.respawnAt>Date.now())continue;
        if(!guard.root.visible){
          guard.root.visible=true;guard.bar.parent!.visible=true;guard.hp=guard.maxHp;
          if(guard.root.parent===scene)guard.root.position.set(guard.origin.x,ground(guard.origin.x,guard.origin.z)+guard.actor.groundOffset,guard.origin.z);
          else guard.root.position.set(0,0,0);
          guard.bar.scale.x=BAR_FILL_WIDTH;guard.bar.position.x=0;guard.respawnAt=0;
        }
        const place=guard.root.getWorldPosition(new THREE.Vector3());
        const dist=Math.hypot(place.x-hero.x,place.z-hero.z);
        const engaged=encounterMembers.has(guardKey(guard));
        if(!engaged)guard.hitAt=0;
        // Resolve damage at the downstroke, using the current range and shield.
        if(guard.hitAt&&now>=guard.hitAt){
          guard.hitAt=0;
          if(dist<6){
            if(shielded)notify('🛡️ Щит отразил удар стража.');
            else{const loss=onShadowStrike(guard.attack);notify('⚔️ '+(guard.role==='orc'?'Орк':'Тролль')+' атакует! −'+loss+' здоровья.');}
          }
        }
        // Preserve 21 goblin patrols without rendering every skinned mesh
        // across the entire frozen realm on a mobile device.
        guard.actor.model.visible=dist<57;
        // Only nearby enemies show a bar: distant or overlapping guards
        // no longer plaster the middle of the player's screen.
        const showBar=dist<34;
        guard.bar.parent!.visible=showBar;
        if(showBar)updateBarPosition(guard.actor,guard.bar);
        if(!engaged||dist>24){resetAction(guard.actor,now);continue;}
        guard.root.rotation.y=Math.atan2(hero.x-place.x,hero.z-place.z);
        if(guard.role==='troll'){
          // Leave the torso upright. The goblin's dedicated right-arm animation
          // swings the weapon; tilting the whole rig makes the axe miss Vicki.
          guard.actor.model.rotation.x=0;
          guard.actor.model.rotation.z=0;
        }
        // Local chase radius keeps a guard at its building instead of letting it roam through walls.
        const walking=dist>4.6&&dist<22;
        resetAction(guard.actor,now,walking);
        if(walking){
          const step=Math.min(dist-4.6,(guard.role==='troll'?1.7:1.8)*dt);
          const nx=place.x+(hero.x-place.x)/dist*step,nz=place.z+(hero.z-place.z)/dist*step;
          if(Math.hypot(nx-guard.origin.x,nz-guard.origin.z)<(guard.root.parent===scene?14:4.2)&&canSpawn(nx,nz)){
            if(guard.root.parent===scene)guard.root.position.set(nx,ground(nx,nz)+guard.actor.groundOffset,nz);
            else{guard.root.position.x+=nx-place.x;guard.root.position.z+=nz-place.z;}
          }
        }
        if(dist<5.2&&now-guard.lastAttack>(guard.role==='troll'?4300:3150)){
          guard.lastAttack=now;playAction(guard.actor,'attack',now);
          const impactDelay=guard.role==='troll'?1050:350;
          guard.hitAt=now+impactDelay;
          combatEffect('enemy',guard.root,ROLE_HEIGHT[guard.role],impactDelay-110);
        }
      }
      // A zone creates an ambush only when approached in a live wave.
      if(waveNumber>0&&now-lastSpawnScan>450){
        lastSpawnScan=now;
        let visible=shadows.filter(s=>s.active).length;
        const nearby=shadows.filter(s=>!s.active&&!s.used&&
          Math.hypot(s.site.x-hero.x,s.site.z-hero.z)<29&&canSpawn(s.site.x,s.site.z))
          .sort((a,b)=>Math.hypot(a.site.x-hero.x,a.site.z-hero.z)-Math.hypot(b.site.x-hero.x,b.site.z-hero.z));
        for(const shadow of nearby){if(visible>=MAX_ACTIVE_SHADOWS)break;activate(shadow,now);visible++;}
      }
      for(const shadow of shadows){
        if(!shadow.active)continue;
        const distance=Math.hypot(hero.x-shadow.root.position.x,hero.z-shadow.root.position.z);
        if(now-shadow.born>SHADOW_LIFETIME_MS||(distance>55&&now-shadow.born>18_000)){
          fadeOut(shadow,false);continue;
        }
        const opacity=Math.min(1,(now-shadow.born)/1150);
        shadow.root.scale.setScalar(Math.max(.001,opacity));
        shadow.root.rotation.y=Math.atan2(hero.x-shadow.root.position.x,hero.z-shadow.root.position.z);
        const engaged=encounterMembers.has(shadowKey(shadow));
        const approach=engaged?Math.min(Math.max(0,distance-3.7),1.9*dt):0;
        if(approach>0&&distance<39){
          const nx=shadow.root.position.x+(hero.x-shadow.root.position.x)/distance*approach;
          const nz=shadow.root.position.z+(hero.z-shadow.root.position.z)/distance*approach;
          if(canSpawn(nx,nz)){
            shadow.root.position.set(nx,ground(nx,nz),nz);
          }
        }
        shadow.actor.mixer.update(animationDt);updateBarPosition(shadow.actor,shadow.healthBar);
        if(engaged&&distance<4.5&&now-shadow.lastBite>3300){
          shadow.lastBite=now;
          combatEffect('enemy',shadow.root,ROLE_HEIGHT.undead,120);
          if(shielded){
            if(now-lastWarn>1800){notify('🛡️ Щит отбил удар Тени.');lastWarn=now;}
          }else{
            const damage=15+Math.floor(shadow.id/3)*3;
            const loss=onShadowStrike(damage);
            if(now-lastWarn>2400){notify('🌑 Тень атакует! −'+loss+' здоровья.');lastWarn=now;}
          }
        }
      }
    },
    strikeEnemy(hero:{x:number;z:number},weapon:HeroWeapon,now:number){
      const guard=guards.filter(g=>g.root.visible&&!g.deadAt&&g.respawnAt<=Date.now()&&now-g.lastHit>450)
        .map(g=>({guard:g,p:g.root.getWorldPosition(new THREE.Vector3())}))
        .map(t=>({...t,d:Math.hypot(t.p.x-hero.x,t.p.z-hero.z)}))
        .filter(t=>t.d<8).sort((a,b)=>a.d-b.d)[0]?.guard;
      if(guard){
        guard.lastHit=now;
        const specialist=guard.role==='troll'?
          ['axeGiant','hammerRune','axeDouble','hammerDouble'].includes(weapon):
          ['swordStar','sword2','swordGolden','bladeObsidian'].includes(weapon);
        const damage=Math.max(1,Math.round(heroAttack()*(specialist?1.2:1)));
        guard.hp=Math.max(0,guard.hp-damage);
        combatEffect('hero',guard.root,ROLE_HEIGHT[guard.role],220);
        const ratio=guard.hp/guard.maxHp;
        guard.bar.scale.x=BAR_FILL_WIDTH*ratio;guard.bar.position.x=-(1-ratio)*BAR_FILL_WIDTH/2;
        if(guard.hp<=0){
          guard.hitAt=0;guard.deadAt=now;guard.respawnAt=Date.now()+WAVE_MS;
          persistGuard(guard.id,guard.respawnAt);
          playAction(guard.actor,'death',now);
          notify('⚔️ Страж побеждён! Награда и оружие за первую победу.');
          onGuardDefeated(guard.id,guard.role);
        }else{
          playAction(guard.actor,'hurt',now);
          notify('⚔️ '+(guard.role==='orc'?'Орк':'Тролль')+': '+guard.hp+'/'+guard.maxHp+' здоровья.');
        }
        return true;
      }

      const target=shadows.filter(s=>s.active&&now-s.lastHit>450)
        .map(s=>({shadow:s,distance:Math.hypot(s.root.position.x-hero.x,s.root.position.z-hero.z)}))
        .filter(s=>s.distance<8.5).sort((a,b)=>a.distance-b.distance)[0]?.shadow;
      if(!target)return false;
      target.lastHit=now;
      const damage=Math.max(1,Math.round(heroAttack()*(['bladeObsidian','hammerRune'].includes(weapon)?1.2:1)));
      target.hp=Math.max(0,target.hp-damage);
      combatEffect('hero',target.root,ROLE_HEIGHT.undead,220);
      const ratio=target.hp/(SHADOW_MAX_HP+target.id*9);
      target.healthBar.scale.x=BAR_FILL_WIDTH*ratio;
      target.healthBar.position.x=-(1-ratio)*BAR_FILL_WIDTH/2;
      if(target.hp<=0)fadeOut(target,true);
      else notify('⚔️ Удар по Тени! Осталось '+target.hp+' здоровья.');
      return true;
    },
    hasShadow:()=>shadows.some(s=>s.active),
    numberOfShadowSites:()=>NIFLHEIM_SHADOW_SITES.length,
    dispose(){
      actors.forEach(a=>a.mixer.stopAllAction());
      shadows.forEach(s=>{s.root.removeFromParent();s.healthBar.parent?.removeFromParent();});
      guards.forEach(g=>g.bar.parent?.removeFromParent());
      extras.forEach(e=>e.removeFromParent());
      commonShadowMaterials.forEach(m=>m.dispose());
      winterOrcMaterials.forEach(m=>m.dispose());
    }
  };
}
