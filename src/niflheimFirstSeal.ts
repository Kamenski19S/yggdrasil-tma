import * as THREE from 'three';
import {CAVE_FLOOR_Y,CAVE_FRONT_Z,CAVE_MOUTH_X,type createCaveSpace} from './niflheimCaveEntrance';
import type {Save} from './core';

export const FIRST_SEAL={
 id:'shelter',name:'Печать Мёртвого узла',location:'Приют хранителей',drops:17000,steel:5,
 runes:[{id:'algizGuard',name:'Альгиз',symbol:'ᛉ',amount:1},{id:'nauthizEndurance',name:'Наутиз',symbol:'ᚾ',amount:1}],
 lordFlag:'niflheim:seal:shelter:lordDefeated',openedFlag:'niflheim:seal:shelter:opened'
} as const;
export const firstSealOpened=(done:readonly string[])=>done.includes(FIRST_SEAL.openedFlag);
export type FirstSealEvent='guardianDefeated'|'open';

const runeCopies=(save:Save,id:string)=>save.runes.includes(id)?Math.max(1,Number(save.lootCounts[id])||1):0;
export const firstSealGuardianDefeated=(done:readonly string[])=>done.includes(FIRST_SEAL.lordFlag);
export function canOpenFirstSeal(save:Save){
 if(firstSealOpened(save.done)||!firstSealGuardianDefeated(save.done))return false;
 return save.immortalityDrops>=FIRST_SEAL.drops&&save.runeSteel>=FIRST_SEAL.steel&&FIRST_SEAL.runes.every(r=>runeCopies(save,r.id)>=r.amount);
}
export function applyFirstSealEvent(save:Save,event:FirstSealEvent):Save{
 if(event==='guardianDefeated'){
  return firstSealGuardianDefeated(save.done)?save:{...save,done:[...save.done,FIRST_SEAL.lordFlag]};
 }
 if(!canOpenFirstSeal(save))return save;
 const lootCounts={...save.lootCounts},forgeLevels={...save.forgeLevels};let runes=save.runes,equippedRune=save.equippedRune;
 for(const rune of FIRST_SEAL.runes){
  const remaining=runeCopies(save,rune.id)-rune.amount;lootCounts[rune.id]=remaining;
  if(!remaining){runes=runes.filter(id=>id!==rune.id);delete forgeLevels['rune:'+rune.id];if(equippedRune===rune.id)equippedRune='';}
 }
 return {...save,
  immortalityDrops:save.immortalityDrops-FIRST_SEAL.drops,
  runeSteel:save.runeSteel-FIRST_SEAL.steel,
  runes,equippedRune,lootCounts,forgeLevels,
  done:[...new Set([...save.done,FIRST_SEAL.lordFlag,FIRST_SEAL.openedFlag])]
 };
}
export function createFirstSeal(model:THREE.Group,space:ReturnType<typeof createCaveSpace>,angle:number,animations:THREE.AnimationClip[]=[]){
 const root=new THREE.Group();root.name='Первая печать — Приют хранителей';
 root.position.copy(space.world(CAVE_MOUTH_X,CAVE_FLOOR_Y+3.15,CAVE_FRONT_Z+.8));root.rotation.y=angle;
 const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3()),centre=box.getCenter(new THREE.Vector3());
 model.position.sub(centre);const scale=4.5/size.y;model.scale.setScalar(scale);model.position.multiplyScalar(scale);
 model.traverse(o=>{if(o instanceof THREE.Mesh){
  o.castShadow=true;o.receiveShadow=true;
  const originals=Array.isArray(o.material)?o.material:[o.material];
  const themed=originals.map(source=>{
   const m=source instanceof THREE.MeshStandardMaterial?source.clone():new THREE.MeshStandardMaterial({color:'#777b88'});
   m.color.set('#515661');m.metalness=.83;m.roughness=.35;m.emissive.set('#a01934');m.emissiveIntensity=.48;
   if('map' in m)m.map=null;
   return m;
  });
  o.material=Array.isArray(o.material)?themed:themed[0];
 }});
 root.add(model);
 // The entrance collision remains active without a visible barrier plane.
 const light=new THREE.PointLight('#c81741',9,12,2);light.position.z=.6;root.add(light);
 const mixer=new THREE.AnimationMixer(model);
 for(const clip of animations){
  const action=mixer.clipAction(clip);action.setLoop(THREE.LoopRepeat,Infinity).play();
 }
 return {root,
  near(x:number,z:number){return Math.hypot(x-root.position.x,z-root.position.z)<8;},
  blocked(from:{x:number;z:number},to:{x:number;z:number}){
   const a=space.local(from.x,from.z),b=space.local(to.x,to.z),plane=CAVE_FRONT_Z+.8;
   // Permit old saves inside the cave to leave; stop outside-to-inside entry.
   return a.z>plane&&b.z<=plane&&Math.abs(b.x-CAVE_MOUTH_X)<3.8;
  },
  update(time:number,opened:boolean,dt:number=0){root.visible=!opened;if(root.visible)mixer.update(dt);light.intensity=9+Math.sin(time*1.6)*1.5;}
 };
}
