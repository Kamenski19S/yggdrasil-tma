import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {clone as cloneSkeleton} from 'three/examples/jsm/utils/SkeletonUtils.js';
import {BASE,cachedGlbBuffer,type HeroWeapon} from './core';

/**
 * Niflheim combat actors. One decoded GLB per species, SkeletonUtils clones
 * share geometry/textures but receive independent rigs and animation mixers.
 * The 15 undead spawn points are geographical encounters, NOT 15 active
 * enemies on every frame: at most three are visible and animated together.
 */
type Role='orc'|'troll'|'undead';
type Spot={id:string;root:THREE.Group};
type Asset={scene:THREE.Group;animations:THREE.AnimationClip[]};
type Actor={model:THREE.Group;root:THREE.Group;mixer:THREE.AnimationMixer;role:Role;static:boolean;clips:THREE.AnimationClip[];idle:THREE.AnimationAction|null;current:THREE.AnimationAction|null;actionUntil:number};
type Shadow={id:number;site:{x:number;z:number;place:string};root:THREE.Group;actor:Actor;healthBar:THREE.Mesh;hp:number;active:boolean;used:boolean;born:number;lastBite:number;lastHit:number};
type Guard={id:string;actor:Actor;root:THREE.Group;origin:THREE.Vector3;role:'orc'|'troll';hp:number;maxHp:number;attack:number;lastAttack:number;lastHit:number;deadAt:number;respawnAt:number;bar:THREE.Mesh};
type OnShadowHit=(damage:number)=>void;
type OnGuardDefeated=(id:string,role:'orc'|'troll')=>void;
export const NIFLHEIM_RIGGED_ASSETS:Record<Role,string>={
  orc:'Niflheim_Orc_Rigged_Lite.glb',
  troll:'Niflheim_Troll_Rigged_Lite.glb',
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
 {id:'hallOrc',role:'orc',x:-76,z:-95,place:'Внутри Зала забытых имён'},
 {id:'memoryOrc',role:'orc',x:90,z:4,place:'Внутри Пещеры воспоминаний'},
 {id:'mountainOrc',role:'orc',x:-86,z:84,place:'Под сводами Снежной горы'},
 {id:'echoOrc',role:'orc',x:83,z:61,place:'Внутри Пещеры ледяного эха'}
] as const;

const WAVE_MS=15*60*1000;
const FIRST_WAVE_MS=45*1000; // First encounter is quickly visible for a new player.
const MAX_ACTIVE_SHADOWS=3;
const SHADOW_LIFETIME_MS=130*1000;
const SHADOW_MAX_HP=51;

export function installNiflheimRiggedEnemies(
 scene:THREE.Scene,spots:Spot[],isAlive:()=>boolean,
 ground:(x:number,z:number)=>number,
 notify:(message:string)=>void,
 onShadowStrike:OnShadowHit,onShadowDefeated:(id:number)=>void,onGuardDefeated:OnGuardDefeated,
 canSpawn:(x:number,z:number)=>boolean
){
  const loader=new GLTFLoader();
  const actors:Actor[]=[];
  const shadows:Shadow[]=[];
  const guards:Guard[]=[];
  const extras:THREE.Group[]=[];
  const commonShadowMaterials=new Map<THREE.Material,THREE.Material>();
  const winterOrcMaterials=new Map<THREE.Material,THREE.Material>();

  const mountActor=(root:THREE.Group,role:Role,asset:Asset,height:number):Actor=>{
    const model=cloneSkeleton(asset.scene) as THREE.Group;
    model.name='Niflheim '+role+' rigged character';
    model.updateMatrixWorld(true);
    const bounds=new THREE.Box3().setFromObject(model);
    const span=Math.max(.001,bounds.max.y-bounds.min.y),center=bounds.getCenter(new THREE.Vector3());
    const holder=new THREE.Group();holder.scale.setScalar(height/span);
    model.position.set(-center.x,-bounds.min.y,-center.z);
    holder.add(model);root.add(holder);
    model.traverse(o=>{
      if(!(o instanceof THREE.Mesh))return;
      o.castShadow=role!=='undead';o.frustumCulled=true;
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
    const clip=role==='orc'?
      asset.animations.find(a=>/ANM_IDLE/i.test(a.name))||asset.animations[0]:
      asset.animations[0];
    const idle=clip?mixer.clipAction(clip):null;
    idle?.play();
    const actor={model,root,mixer,role,static:true,clips:asset.animations,idle,current:idle,actionUntil:0} satisfies Actor;
    actors.push(actor);return actor;
  };

  const playAction=(actor:Actor,type:'attack'|'hurt'|'death',now:number)=>{
    if(actor.role!=='orc')return;
    const pattern=type==='attack'?/LIGHT_ATTACK|ATTACK_CRIT/i:type==='hurt'?/DAMAGED/i:/DEATH/i;
    const clip=actor.clips.find(c=>pattern.test(c.name));if(!clip)return;
    const action=actor.mixer.clipAction(clip);
    if(actor.current!==action){actor.current?.fadeOut(.1);action.reset().fadeIn(.1).play();actor.current=action;}else action.reset().play();
    action.setLoop(THREE.LoopOnce,1);action.clampWhenFinished=false;
    actor.actionUntil=now+clip.duration*1000;
  };
  const resetAction=(actor:Actor,now:number)=>{
    if(now<actor.actionUntil||actor.current===actor.idle)return;
    actor.current?.fadeOut(.12);actor.idle?.reset().fadeIn(.12).play();actor.current=actor.idle;
  };
  const makeBar=(root:THREE.Group,y:number,tint:string)=>{
    const bg=new THREE.Mesh(new THREE.PlaneGeometry(2.5,.21),new THREE.MeshBasicMaterial({color:'#23212e',depthTest:false,side:THREE.DoubleSide}));
    const bar=new THREE.Mesh(new THREE.PlaneGeometry(2.4,.15),new THREE.MeshBasicMaterial({color:tint,depthTest:false,side:THREE.DoubleSide}));
    bg.position.set(0,y,.03);bar.position.set(0,y,.08);root.add(bg,bar);return bar;
  };
  const persistGuard=(id:string,next:number)=>{try{localStorage.setItem('yggdrasil-niflheim-guard-'+id,String(next));}catch{}};
  const readGuard=(id:string)=>{try{return Number(localStorage.getItem('yggdrasil-niflheim-guard-'+id))||0;}catch{return 0;}};
  const createGuard=(id:string,role:'orc'|'troll',holder:THREE.Group,actor:Actor)=>{
    const isTroll=role==='troll',maxHp=isTroll?165:98,attack=isTroll?15:9;
    const bar=makeBar(holder,isTroll?8.1:5.6,isTroll?'#c9a4ec':'#e58b7f');
    const origin=holder.getWorldPosition(new THREE.Vector3()),next=readGuard(id);
    const guard:Guard={id,actor,root:holder,origin,role,hp:maxHp,maxHp,attack,lastAttack:0,lastHit:0,deadAt:0,respawnAt:next,bar};
    holder.visible=next<=Date.now();guards.push(guard);
  };
  const attachTrollAxe=(model:THREE.Group)=>{
    // The old carried weapon must not remain visible underneath the new axe.
    model.traverse(o=>{if(o.name==='Weapon'||o.name==='Weapon_Weapon1_0')o.visible=false;});
    cachedGlbBuffer(`${BASE}img/models/Axe_Double.glb`)
      .then(buffer=>loader.parseAsync(buffer,`${BASE}img/models/`))
      .then(asset=>{
        if(!isAlive())return;
        const hand=model.getObjectByName('Wrist_R_0241')||model.getObjectByName('FKIKMixWrist_R');
        if(!hand)return;
        const axe=asset.scene;axe.name='Секира ледяного тролля';
        axe.updateMatrixWorld(true);
        const bounds=new THREE.Box3().setFromObject(axe);
        const height=Math.max(.001,bounds.max.y-bounds.min.y),center=bounds.getCenter(new THREE.Vector3());
        axe.position.set(-center.x,-bounds.min.y,-center.z);
        const grip=new THREE.Group();grip.scale.setScalar(16/height);
        grip.rotation.set(Math.PI/2,0,-Math.PI/2);
        grip.add(axe);hand.add(grip);
      }).catch(()=>{ /* The troll remains visible if its axe is unavailable. */ });
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
    const actor=mountActor(root,'undead',asset,6.2);actor.static=false;
    const background=new THREE.Mesh(new THREE.BoxGeometry(2.15,.17,.07),new THREE.MeshBasicMaterial({color:'#251526',depthTest:false}));
    background.position.y=7.1;root.add(background);
    const bar=new THREE.Mesh(new THREE.BoxGeometry(2.1,.14,.09),new THREE.MeshBasicMaterial({color:'#b47fdd',depthTest:false}));
    bar.position.y=7.1;bar.position.z=.06;root.add(bar);
    shadows.push({id,site,root,actor,healthBar:bar,hp:SHADOW_MAX_HP+id*9,active:false,used:false,born:0,lastBite:0,lastHit:0});
  };
  const fadeOut=(shadow:Shadow,defeated:boolean)=>{
    shadow.root.visible=false;shadow.active=false;shadow.used=true;
    if(defeated){const drops=80+(shadow.id%5)*35;notify('🌑 Тень изгнана. +'+drops+' Капель и трофей.');onShadowDefeated(shadow.id);}
  };
  const activate=(shadow:Shadow,now:number)=>{
    shadow.active=true;shadow.used=true;shadow.born=now;
    shadow.hp=SHADOW_MAX_HP+shadow.id*9;shadow.lastBite=now;shadow.lastHit=0;
    shadow.root.visible=true;shadow.root.scale.setScalar(.001);
    shadow.root.position.set(shadow.site.x,ground(shadow.site.x,shadow.site.z),shadow.site.z);
    shadow.healthBar.scale.x=1;shadow.healthBar.position.x=0;
    notify('🌑 Из тумана возникла Тень забытых у '+shadow.site.place+'!');
  };

  // Models are fetched once each; animation and skeleton clones use shared data.
  (['orc','troll','undead'] as const).forEach(role=>{
    cachedGlbBuffer(`${BASE}img/models/${NIFLHEIM_RIGGED_ASSETS[role]}`)
      .then(buffer=>loader.parseAsync(buffer,`${BASE}img/models/`))
      .then(asset=>{
        if(!isAlive())return;
        for(const spot of spots){
          const expected:Record<string,Role>={
            memoryCave:'orc',roots:'orc',namesHall:'orc',
            snowMountain:'orc',threeNornsWell:'orc'
          };
          if(expected[spot.id]!==role)continue;
          const holder=new THREE.Group();holder.name='Страж '+spot.id;
          spot.root.add(holder);
          const actor=mountActor(holder,role,asset,role==='troll'?7.2:4.8);
          createGuard(spot.id,role,holder,actor);
          if(role==='troll')attachTrollAxe(actor.model);
          // No temporary geometric stand-ins: all five guardian slots contain rigs only.
        }
        for(const site of NIFLHEIM_EXTRA_GUARDS){
          if(site.role!==role)continue;
          const root=new THREE.Group();
          root.name=site.place+': '+(role==='orc'?'орк-страж':'ледяной тролль');
          root.position.set(site.x,ground(site.x,site.z)+.35,site.z);scene.add(root);
          const actor=mountActor(root,role,asset,role==='troll'?7.2:site.id==='forgeOrc'||site.id==='hallOrc'?4.15:4.8);
          createGuard(site.id,role,root,actor);
          if(role==='troll')attachTrollAxe(actor.model);
          extras.push(root);
        }
        if(role==='undead')NIFLHEIM_SHADOW_SITES.forEach((site,id)=>createShadow(id,site,asset));
      }).catch(error=>console.warn('Niflheim enemy model unavailable:',role,error));
  });

  return {
    tick(dt:number,now:number,hero:{x:number;z:number},shielded:boolean,paused:boolean){
      if(!isAlive())return;
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
            if(Math.hypot(p.x-hero.x,p.z-hero.z)<75){actor.mixer.update(Math.min(dt,.05));resetAction(actor,now);}
          }
        }
      }
      if(paused)return;
      for(const guard of guards){
        if(guard.deadAt){
          if(now-guard.deadAt>1150){guard.root.visible=false;guard.deadAt=0;}
          continue;
        }
        if(guard.respawnAt>Date.now())continue;
        if(!guard.root.visible){
          guard.root.visible=true;guard.hp=guard.maxHp;
          guard.root.position.set(guard.root.position.x,guard.root.position.y,guard.root.position.z);
          guard.bar.scale.x=1;guard.bar.position.x=0;guard.respawnAt=0;
        }
        const place=guard.root.getWorldPosition(new THREE.Vector3());
        const dist=Math.hypot(place.x-hero.x,place.z-hero.z);
        if(dist>24)continue;
        guard.root.rotation.y=Math.atan2(hero.x-place.x,hero.z-place.z);
        if(guard.role==='troll'){
          // The supplied troll has only one imported clip. A short procedural
          // body lunge makes its heavy blow readable without replacing its rig.
          const t=now-guard.lastAttack;
          const strike=t>0&&t<520?Math.sin(t/520*Math.PI):0;
          guard.actor.model.rotation.x=-.23*strike;
          guard.actor.model.rotation.z=.1*strike;
        }
        // Local chase radius keeps a guard at its building instead of letting it roam through walls.
        if(dist>4.6&&dist<14){
          const step=Math.min(dist-4.6,(guard.role==='troll'?1.05:1.5)*dt);
          const nx=place.x+(hero.x-place.x)/dist*step,nz=place.z+(hero.z-place.z)/dist*step;
          if(Math.hypot(nx-guard.origin.x,nz-guard.origin.z)<4.2&&canSpawn(nx,nz)){
            if(guard.root.parent===scene)guard.root.position.set(nx,ground(nx,nz)+.35,nz);
            else{guard.root.position.x+=nx-place.x;guard.root.position.z+=nz-place.z;}
          }
        }
        if(dist<5.2&&now-guard.lastAttack>(guard.role==='troll'?4300:3150)){
          guard.lastAttack=now;playAction(guard.actor,'attack',now);
          if(shielded)notify('🛡️ Щит отразил удар стража.');
          else{onShadowStrike(guard.attack);notify('⚔️ '+(guard.role==='orc'?'Орк':'Тролль')+' атакует! −'+guard.attack+' здоровья.');}
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
        const approach=Math.min(Math.max(0,distance-3.7),1.9*dt);
        if(approach>0&&distance<39){
          const nx=shadow.root.position.x+(hero.x-shadow.root.position.x)/distance*approach;
          const nz=shadow.root.position.z+(hero.z-shadow.root.position.z)/distance*approach;
          if(canSpawn(nx,nz)){
            shadow.root.position.set(nx,ground(nx,nz),nz);
          }
        }
        shadow.actor.mixer.update(Math.min(dt,.05));
        if(distance<4.5&&now-shadow.lastBite>3300){
          shadow.lastBite=now;
          if(shielded){
            if(now-lastWarn>1800){notify('🛡️ Щит отбил удар Тени.');lastWarn=now;}
          }else{
            const damage=5+Math.floor(shadow.id/3)*2;
            onShadowStrike(damage);
            if(now-lastWarn>2400){notify('🌑 Тень атакует! −'+damage+' здоровья.');lastWarn=now;}
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
        const damage=guard.role==='troll'?(specialist?48:18):(specialist?35:22);
        guard.hp=Math.max(0,guard.hp-damage);
        const ratio=guard.hp/guard.maxHp;
        guard.bar.scale.x=ratio;guard.bar.position.x=-(1-ratio)*1.2;
        if(guard.hp<=0){
          guard.deadAt=now;guard.respawnAt=Date.now()+WAVE_MS;
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
      const damage=weapon==='bladeObsidian'?48:weapon==='hammerRune'?38:22;
      target.hp=Math.max(0,target.hp-damage);
      const ratio=target.hp/(SHADOW_MAX_HP+target.id*9);
      target.healthBar.scale.x=ratio;
      target.healthBar.position.x=-(1-ratio)*1.05;
      if(target.hp<=0)fadeOut(target,true);
      else notify('⚔️ Удар по Тени! Осталось '+target.hp+' здоровья.');
      return true;
    },
    hasShadow:()=>shadows.some(s=>s.active),
    numberOfShadowSites:()=>NIFLHEIM_SHADOW_SITES.length,
    dispose(){
      actors.forEach(a=>a.mixer.stopAllAction());
      shadows.forEach(s=>s.root.removeFromParent());
      extras.forEach(e=>e.removeFromParent());
      commonShadowMaterials.forEach(m=>m.dispose());
      winterOrcMaterials.forEach(m=>m.dispose());
    }
  };
}
