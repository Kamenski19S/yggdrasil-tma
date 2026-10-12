import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {clone as cloneSkeleton} from 'three/examples/jsm/utils/SkeletonUtils.js';
import {BASE,cachedGlbBuffer,type HeroWeapon} from './core';

// Imported models retain their source armatures and animation tracks.
// A single GLB is parsed per role, then cloneSkeleton reuses meshes/textures.
type Role='orc'|'troll'|'undead';
export const NIFLHEIM_RIGGED_ASSETS:Record<Role,string>={
  orc:'Niflheim_Orc_Rigged_Lite.glb',
  troll:'Niflheim_Troll_Rigged_Lite.glb',
  undead:'Niflheim_Undead_Rigged_Lite.glb'
};
type Spot={id:string;root:THREE.Group};
type Placed={root:THREE.Group;mixer:THREE.AnimationMixer;clip:THREE.AnimationClip;role:Role;startY:number};
type OnShadowHit=(hp:number)=>void;
export function installNiflheimRiggedEnemies(
 scene:THREE.Scene,spots:Spot[],isAlive:()=>boolean,
 ground:(x:number,z:number)=>number,
 notify:(message:string)=>void,
 onShadowStrike:OnShadowHit,
 onShadowDefeated:()=>void,
 canSpawn:(x:number,z:number)=>boolean
){
  const loader=new GLTFLoader();
  const loaded=new Map<Role,{scene:THREE.Group;animations:THREE.AnimationClip[]}>();
  const placed:Placed[]=[];
  const pending=new Set<Role>();
  const visualById:Record<string,Role>={
    memoryCave:'orc',roots:'troll',namesHall:'undead',
    snowMountain:'troll',threeNornsWell:'orc'
  };
  const animate=(root:THREE.Group,role:Role,asset:{scene:THREE.Group;animations:THREE.AnimationClip[]},height:number)=>{
    const clone=cloneSkeleton(asset.scene) as THREE.Group;
    clone.name='Анимированный '+role+' — скелет и кости сохранены';
    clone.updateMatrixWorld(true);
    const bounds=new THREE.Box3().setFromObject(clone);
    const span=Math.max(.001,bounds.max.y-bounds.min.y);
    const fitted=new THREE.Group();fitted.scale.setScalar(height/span);
    clone.position.x-=((bounds.min.x+bounds.max.x)/2);
    clone.position.y-=bounds.min.y;
    clone.position.z-=((bounds.min.z+bounds.max.z)/2);
    fitted.add(clone);root.add(fitted);
    clone.traverse(o=>{
      if(!(o instanceof THREE.Mesh))return;
      o.castShadow=role!=='undead';
      o.frustumCulled=false;
      if(role==='undead'){
        const materials=(Array.isArray(o.material)?o.material:[o.material]);
        const tinted=materials.map(source=>{
          const material=source.clone();
          if(material instanceof THREE.MeshStandardMaterial){
            material.color.multiply(new THREE.Color('#8a93ba'));
            material.emissive.set('#3c3b92');material.emissiveIntensity=.4;
            material.transparent=true;material.opacity=.87;
          }
          return material;
        });
        o.material=Array.isArray(o.material)?tinted:tinted[0];
      }
    });
    const mixer=new THREE.AnimationMixer(clone);
    const animations=asset.animations;
    const clip=role==='orc'?animations.find(a=>/ANM_IDLE/i.test(a.name))||animations[0]:animations[0];
    if(clip)mixer.clipAction(clip).play();
    placed.push({root,mixer,clip,role,startY:root.position.y});
    return {clone,fitted};
  };
  const mountTrollAxe=(clone:THREE.Group)=>{
    // The original troll weapon is not part of the skeleton and is hidden.
    clone.traverse(o=>{if(o.name.toLowerCase()==='weapon'||o.name.includes('Weapon_Weapon1_0'))o.visible=false;});
    cachedGlbBuffer(`${BASE}img/models/Axe_Double.glb`).then(buffer=>loader.parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{
      if(!isAlive())return;
      const hand=clone.getObjectByName('Wrist_R_0241')||clone.getObjectByName('FKIKMixWrist_R');
      if(!hand)return;
      const axe=asset.scene;
      axe.name='Секира ледяного тролля';
      axe.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(axe);
      const size=bounds.getSize(new THREE.Vector3());
      if(size.y<.001)return;
      axe.position.set(-bounds.getCenter(new THREE.Vector3()).x,-bounds.min.y,-bounds.getCenter(new THREE.Vector3()).z);
      const grip=new THREE.Group();grip.scale.setScalar(20/size.y);grip.rotation.set(Math.PI/2,0,-Math.PI/2);
      grip.add(axe);hand.add(grip);
    }).catch(()=>{});
  };
  const slotRoot=new THREE.Group();slotRoot.name='Появления теней Нифльхейма';scene.add(slotRoot);
  let shadow:Placed|undefined;
  let shadowActive=false,shadowHp=48,shadowAppeared=0,lastBite=0,lastHit=0;
  const storageKey='yggdrasil-niflheim-shadow-next';
  const RESPAWN=15*60*1000;
  const readNext=()=>{try{const stored=Number(localStorage.getItem(storageKey));if(stored)return stored;const initial=Date.now()+RESPAWN;localStorage.setItem(storageKey,String(initial));return initial;}catch{return Date.now()+RESPAWN;}};
  let next=readNext();
  const saveNext=(at:number)=>{next=at;try{localStorage.setItem(storageKey,String(at));}catch{}};
  const spawn=(hero:{x:number;z:number})=>{
    if(!shadow||shadowActive)return;
    const options=[[8,-7],[-9,-6],[8,6],[-8,7],[11,0],[-11,0]];
    const spot=options.map(([dx,dz])=>({x:hero.x+dx,z:hero.z+dz})).find(p=>canSpawn(p.x,p.z));
    if(!spot){saveNext(Date.now()+30*1000);return;}
    slotRoot.position.set(spot.x,ground(spot.x,spot.z),spot.z);
    slotRoot.visible=true;shadowActive=true;shadowHp=48;shadowAppeared=performance.now();
    notify('🌑 Из тумана появилась Тень забытых! Используй удар, щит или отступи.');
  };
  for(const role of Object.values(visualById)){
    if(pending.has(role))continue;
    pending.add(role);
    cachedGlbBuffer(`${BASE}img/models/${NIFLHEIM_RIGGED_ASSETS[role]}`).then(buffer=>
      loader.parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{
      if(!isAlive())return;
      loaded.set(role,asset);
      for(const slot of spots){
        if(visualById[slot.id]!==role)continue;
        const holder=new THREE.Group();holder.name='Настоящий страж '+slot.id;
        slot.root.add(holder);
        const rig=animate(holder,role,asset,role==='troll'?9.5:6.2);
        if(role==='troll')mountTrollAxe(rig.clone);
        // Hide the temporary geometrical guardian only when the real model loads.
        slot.root.children.forEach(child=>{if(child!==holder)child.visible=false;});
      }
      if(role==='undead'&&!shadow){
        slotRoot.visible=false;
        const rig=animate(slotRoot,'undead',asset,6.3);
        shadow=placed.find(p=>p.root===slotRoot);
        void rig;
      }
    }).catch(()=>{ /* Fallback sentinel remains until GLB files are uploaded. */ });
  }
  return {
    tick(dt:number,now:number,hero:{x:number;z:number},shielded:boolean,paused:boolean){
      for(const actor of placed)actor.mixer.update(Math.min(dt,.05));
      if(!shadow||paused)return;
      if(!shadowActive&&Date.now()>=next)spawn(hero);
      if(!shadowActive)return;
      const dx=hero.x-slotRoot.position.x,dz=hero.z-slotRoot.position.z;
      const range=Math.hypot(dx,dz);
      slotRoot.rotation.y=Math.atan2(dx,dz);
      if(range>3.3&&range<36){
        const move=Math.min(range-3.3,1.55*dt);
        slotRoot.position.x+=dx/(range||1)*move;
        slotRoot.position.z+=dz/(range||1)*move;
        slotRoot.position.y=ground(slotRoot.position.x,slotRoot.position.z);
      }
      if(range<4.4&&now-lastBite>3500){
        lastBite=now;
        if(shielded)notify('🛡️ Щит отразил внезапный удар нежити.');
        else {onShadowStrike(8);notify('🌑 Тень атакует Vicki! −8 здоровья.');}
      }
    },
    strikeShadow(hero:{x:number;z:number},weapon:HeroWeapon,now:number){
      if(!shadowActive||now-lastHit<480)return false;
      const d=Math.hypot(hero.x-slotRoot.position.x,hero.z-slotRoot.position.z);
      if(d>8)return false;
      lastHit=now;
      shadowHp-=weapon==='bladeObsidian'?32:weapon==='hammerRune'?25:17;
      if(shadowHp<=0){
        shadowActive=false;slotRoot.visible=false;saveNext(Date.now()+RESPAWN);
        notify('🌑 Тень рассеялась. Получены Капли бессмертия и эликсир.');
        onShadowDefeated();
      }else notify('⚔️ Попадание по Тени забытых!');
      return true;
    },
    hasShadow:()=>shadowActive,
    dispose(){placed.forEach(p=>p.mixer.stopAllAction());slotRoot.removeFromParent();}
  };
}
