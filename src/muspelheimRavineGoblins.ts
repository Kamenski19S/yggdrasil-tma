import {ELEMENTS,RAVINE_ELEMENTS,createAilments,applyElement,stepAilments,magicMoveScale,disorientedMove} from './elementalMagic';
import {createIceStrikeVfx} from './iceStrikeVfx';
import {createLightningStrikeVfx} from './lightningStrikeVfx';
import {createFireStrikeVfx,FIRE_STRIKE} from './fireStrikeVfx';
import {createShadowStrikeVfx} from './shadowStrikeVfx';
import {SHADOW_STRIKE,createShadowDrain,applyShadowDrain,stepShadowDrain} from './shadowStrike';
import {ICE_STRIKE,LIGHTNING_STRIKE} from './magicPlaytest';
import * as THREE from 'three';
import {createMineCharacter,MINE_CHARACTER_HEIGHT} from './ashMineCharacters';
import {SURT_RAVINE_LINE} from './muspelheimSurtRavine';
import {createGateMagic} from './muspelheimGateMagic';
import type {CharacterBody} from './characterCollision';

export const RAVINE_GOBLIN_HEIGHT=MINE_CHARACTER_HEIGHT.helper*2;
export const RAVINE_GOBLIN_COUNT=18;
export const RAVINE_GOBLIN_ATTACK=28;
export const RAVINE_SPELL={range:42,cooldown:.9,wardDuration:2.5,wardCooldown:5};
type Point={x:number;y:number;z:number};
/** Copies of the mine helper; source meshes and mine materials remain untouched. */
export function createRavineGoblins(source:THREE.Object3D,clips:THREE.AnimationClip[],floor:(x:number,z:number)=>number|null,walkable:(from:Point,to:Point)=>boolean,contact:(from:Point,to:Point)=>boolean,vfxBase=''){
 const root=new THREE.Group();root.name='Вулканические гномы ущелья';const ice=createIceStrikeVfx(),lightning=createLightningStrikeVfx(),fire=createFireStrikeVfx(),shadow=createShadowStrikeVfx(),ailments=createAilments(),drain=createShadowDrain();root.add(ice.root,lightning.root,fire.root,shadow.root);let bound=false;const lastHero={x:0,y:0,z:0};
 const clearEffects=()=>{ice.clear();lightning.clear();fire.clear();shadow.clear();Object.assign(ailments,createAilments());Object.assign(drain,createShadowDrain());};
 const materials=new Map<THREE.Material,THREE.MeshStandardMaterial>();
 const tint=(original:THREE.Material)=>{let result=materials.get(original);if(!result){result=new THREE.MeshStandardMaterial({color:'#190e10',roughness:.9,emissive:'#c51b08',emissiveIntensity:.65});result.onBeforeCompile=shader=>{shader.vertexShader='varying vec3 magmaLocal;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nmagmaLocal=position;');shader.fragmentShader='varying vec3 magmaLocal;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
 float cracks=pow(.5+.5*sin(magmaLocal.y*4.+sin(magmaLocal.x*7.)+magmaLocal.z*3.),14.);
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.65,.018,.006),cracks);
 totalEmissiveRadiance*=cracks;`);};result.customProgramCacheKey=()=> 'ravine-goblin-magma-v1';materials.set(original,result);}return result;};
 const at=(t:number,offset=0)=>{const index=THREE.MathUtils.clamp(t,0,1)*(SURT_RAVINE_LINE.length-1),i=Math.min(Math.floor(index),SURT_RAVINE_LINE.length-2),a=SURT_RAVINE_LINE[i],b=SURT_RAVINE_LINE[i+1],f=index-i,d=Math.hypot(b.x-a.x,b.z-a.z);return {x:THREE.MathUtils.lerp(a.x,b.x,f)-(b.z-a.z)/d*offset,z:THREE.MathUtils.lerp(a.z,b.z,f)+(b.x-a.x)/d*offset};};
 const actors=Array.from({length:RAVINE_GOBLIN_COUNT},(_,i)=>{
  const actor=createMineCharacter('helper');actor.install(source,clips);actor.root.scale.setScalar(2);actor.root.name='Вулканический гном';
  actor.root.traverse(o=>{if(o instanceof THREE.Mesh)o.material=Array.isArray(o.material)?o.material.map(tint):tint(o.material);});
  const station=.045+i/(RAVINE_GOBLIN_COUNT-1)*.91,offset=i%2?11:-11;
  let home:Point|undefined;
  for(const delta of [0,.015,-.015,.03,-.03,.06,-.06,.1,-.1]){const p=at(station+delta,offset),y=floor(p.x,p.z);if(y!=null&&y<-55&&y>-105&&walkable({...p,y},{...p,y})){home={...p,y};break;}}
  if(!home)throw Error('No safe ravine goblin spawn '+i);
  actor.root.position.copy(new THREE.Vector3(home.x,home.y,home.z));root.add(actor.root);
  const element=RAVINE_ELEMENTS[i%RAVINE_ELEMENTS.length],profile=element==='ice'?ICE_STRIKE:element==='fire'?FIRE_STRIKE:element==='shadow'?SHADOW_STRIKE:LIGHTNING_STRIKE;const magic=createGateMagic(home,{},profile);return {actor,home,station,offset,magic,element,direction:i%2?1:-1};
 });
 const ward=new THREE.Mesh(new THREE.SphereGeometry(9,20,12),new THREE.MeshBasicMaterial({color:'#6cecff',transparent:true,opacity:.19,wireframe:true,depthWrite:false}));ward.visible=false;root.add(ward);

 let time=0,spellCooldown=0,wardCooldown=0,wardLeft=0;
 const target=(hero:Point)=>actors.filter(a=>a.magic.life.hp>0&&a.actor.root.position.distanceTo(new THREE.Vector3(hero.x,hero.y,hero.z))<RAVINE_SPELL.range&&Math.abs(a.home.y-hero.y)<6&&contact(hero,a.home)).sort((a,b)=>Math.hypot(a.home.x-hero.x,a.home.z-hero.z)-Math.hypot(b.home.x-hero.x,b.home.z-hero.z))[0];
 return {root,actors,pauseForInterior(){wardLeft=wardCooldown=spellCooldown=0;actors.forEach(a=>a.magic.reset());clearEffects();},
  get ailments(){return ailments;},get moveScale(){return magicMoveScale(ailments);},get immobilized(){return ailments.freeze>0||ailments.fall>0;},
  steer:(x:number,z:number)=>disorientedMove(x,z,ailments,time),
  updateVfx(dt:number,camera:THREE.Camera,hero?:THREE.Object3D){if(hero&&!bound&&hero.getObjectByProperty('isSkinnedMesh',true)){ice.bindHero(hero);lightning.bindHero(hero);bound=true;}ice.frost(lastHero,ailments.freeze,ailments.slow);ice.update(dt,camera);lightning.update(dt,camera,ailments.disorient);fire.update(dt,camera,lastHero,ailments.burn);shadow.update(dt,camera,lastHero,drain.remaining);},get warding(){return wardLeft>0;},
  get bodies():CharacterBody[]{return actors.filter(a=>a.magic.life.hp>0).map(a=>({...a.home,radius:1.6,height:RAVINE_GOBLIN_HEIGHT,solid:true}));},
  hud(hero:Point){const a=target(hero);return a?{hp:a.magic.life.hp,active:true,name:'Гном · '+ELEMENTS[a.element].name+' · только магия'}:null;},
  cast(hero:Point,damage:number){if(ailments.freeze>0||ailments.fall>0)return 'Vicki пока не может колдовать.';if(spellCooldown>0)return 'Заклинание восстанавливается.';const a=target(hero);if(!a)return 'В пределах магии нет видимой цели.';spellCooldown=RAVINE_SPELL.cooldown;a.magic.life.hurt(Math.max(1,damage));if(!a.magic.life.hp)a.magic.reset();return a.magic.life.hp?`Руническая магия: −${damage}. Гном: ${a.magic.life.hp}/420.`:'Вулканический гном повержен магией.';},
  protect(){if(ailments.freeze>0||ailments.fall>0)return 'Vicki пока не может поднять барьер.';if(wardCooldown>0)return 'Магический барьер восстанавливается.';wardLeft=RAVINE_SPELL.wardDuration;wardCooldown=RAVINE_SPELL.wardCooldown;return 'Магический барьер: защита от заклинаний на 2,5 секунды.';},
  reset(){wardLeft=wardCooldown=spellCooldown=0;actors.forEach(a=>{a.magic.life.reset();a.magic.reset();});clearEffects();},
  update(dt:number,hero:Point,available:boolean){if(dt<=0)return {hits:0,blocked:0,damage:0,drops:0,message:''};Object.assign(lastHero,hero);if(!available)clearEffects();time+=dt;spellCooldown=Math.max(0,spellCooldown-dt);wardCooldown=Math.max(0,wardCooldown-dt);wardLeft=Math.max(0,wardLeft-dt);ward.visible=wardLeft>0;ward.position.set(hero.x,hero.y+7,hero.z);let hits=0,blocked=0,damage=available?stepAilments(ailments,dt):0,drops=available?stepShadowDrain(drain,dt):0,message='';
   actors.forEach((a,i)=>{
    const alive=a.magic.life.hp>0,near=Math.hypot(a.home.x-hero.x,a.home.z-hero.z)<34&&Math.abs(a.home.y-hero.y)<6;
    let moving=false;
    if(alive&&!a.magic.stunned&&a.magic.stage==='idle'){
     const aim=at(a.station+Math.sin(time*.045+i)*.075,a.offset),dx=aim.x-a.home.x,dz=aim.z-a.home.z,d=Math.hypot(dx,dz),step=Math.min(d,8*dt),p={x:a.home.x+dx/(d||1)*step,z:a.home.z+dz/(d||1)*step},y=floor(p.x,p.z);
     const next={...p,y:y??a.home.y};
     if(y!=null&&y<-55&&y>-105&&Math.abs(y-a.home.y)<1.4*step+.08&&walkable(a.home,next)&&!(Math.abs(hero.y-y)<14&&Math.hypot(hero.x-p.x,hero.z-p.z)<4)&&!actors.some(b=>b!==a&&b.magic.life.hp>0&&Math.abs(b.home.y-y)<8&&Math.hypot(b.home.x-p.x,b.home.z-p.z)<3.5)){moving=step>.001;Object.assign(a.home,next);a.actor.root.position.set(p.x,y,p.z);a.actor.root.rotation.y=Math.atan2(dx,dz);}
    }
    if(alive&&near)a.actor.root.rotation.y=Math.atan2(hero.x-a.home.x,hero.z-a.home.z);
    const origin={x:a.home.x,y:a.home.y+5,z:a.home.z},event=a.magic.step(dt,hero,available,origin,(near||a.magic.projectiles.length>0)&&contact(a.home,hero),(x,z)=>floor(x,z));
    if(event.impact){const shielded=wardLeft>0;if(a.element==='ice')ice.impact({x:hero.x,y:hero.y+7,z:hero.z},shielded);else if(a.element==='lightning')lightning.strike(origin,hero);else if(a.element==='fire')fire.impact(hero,shielded);else shadow.impact();if(shielded)blocked++;else {hits++;if(a.element==='shadow'){applyShadowDrain(drain,false);message='Тёмный туман отнимает по 1 капле бессмертия в секунду.';}else {damage+=ELEMENTS[a.element].damage;message=applyElement(ailments,a.element,false);}}}
    a.actor.root.visible=!a.magic.life.hidden;a.actor.root.rotation.z=alive?0:-Math.PI/2;
    if(a.actor.root.position.distanceTo(new THREE.Vector3(hero.x,hero.y,hero.z))<110)a.actor.update(time,moving,false,a.magic.stage==='charge'?'work':'run');
    if(alive&&a.magic.stage==='charge'){if(a.element==='ice')ice.charge(origin,hero);else if(a.element==='fire')fire.charge(origin);else if(a.element==='shadow')shadow.charge(origin);}
    for(const p of a.magic.projectiles){const key=i+'-'+p.id;if(a.element==='ice')ice.bolt(key,p);else if(a.element==='fire')fire.bolt(key,p);else if(a.element==='shadow')shadow.bolt(key,p);}
   });return {hits,blocked,damage,drops,message};
  },dispose(){ice.dispose();lightning.dispose();fire.dispose();shadow.dispose();actors.forEach(a=>a.actor.dispose());},
 };
}
