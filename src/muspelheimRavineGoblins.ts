import {ELEMENTS,RAVINE_ELEMENTS,type Element} from './elementalMagic';
import {createElementalVfx} from './elementalVfx';
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
 const root=new THREE.Group();root.name='Вулканические гномы ущелья';const vfx=createElementalVfx(vfxBase);root.add(vfx.root);
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
  const magic=createGateMagic(home);return {actor,home,station,offset,magic,element:RAVINE_ELEMENTS[i%RAVINE_ELEMENTS.length],direction:i%2?1:-1};
 });
 const orbGeometry=new THREE.SphereGeometry(.85,8,6),orbMaterial=new THREE.MeshBasicMaterial({color:'#ffffff',toneMapped:false}),orbs=new THREE.InstancedMesh(orbGeometry,orbMaterial,64);orbs.count=0;orbs.frustumCulled=false;root.add(orbs);
 const chargeMaterial=new THREE.MeshBasicMaterial({color:'#ff721a',transparent:true,opacity:.8,toneMapped:false});
 const charges=actors.map(()=>{const mesh=new THREE.Mesh(orbGeometry,chargeMaterial.clone());mesh.visible=false;root.add(mesh);return mesh;});
 const ward=new THREE.Mesh(new THREE.SphereGeometry(9,20,12),new THREE.MeshBasicMaterial({color:'#6cecff',transparent:true,opacity:.19,wireframe:true,depthWrite:false}));ward.visible=false;root.add(ward);
 const beam=new THREE.Mesh(new THREE.CylinderGeometry(.35,.35,1,8),new THREE.MeshBasicMaterial({color:'#9becff',toneMapped:false}));beam.visible=false;root.add(beam);
 let time=0,spellCooldown=0,wardCooldown=0,wardLeft=0,beamLeft=0;
 const target=(hero:Point)=>actors.filter(a=>a.magic.life.hp>0&&a.actor.root.position.distanceTo(new THREE.Vector3(hero.x,hero.y,hero.z))<RAVINE_SPELL.range&&Math.abs(a.home.y-hero.y)<6&&contact(hero,a.home)).sort((a,b)=>Math.hypot(a.home.x-hero.x,a.home.z-hero.z)-Math.hypot(b.home.x-hero.x,b.home.z-hero.z))[0];
 return {root,actors,updateVfx:(dt:number,camera:THREE.Camera)=>vfx.update(dt,camera),get warding(){return wardLeft>0;},
  get bodies():CharacterBody[]{return actors.filter(a=>a.magic.life.hp>0).map(a=>({...a.home,radius:1.6,height:RAVINE_GOBLIN_HEIGHT,solid:true}));},
  hud(hero:Point){const a=target(hero);return a?{hp:a.magic.life.hp,active:true,name:'Гном · '+ELEMENTS[a.element].name+' · только магия'}:null;},
  cast(hero:Point,damage:number){if(spellCooldown>0)return 'Заклинание восстанавливается.';const a=target(hero);if(!a)return 'В пределах магии нет видимой цели.';spellCooldown=RAVINE_SPELL.cooldown;const from=new THREE.Vector3(hero.x,hero.y+7,hero.z),to=a.actor.root.position.clone().add(new THREE.Vector3(0,4,0)),delta=to.clone().sub(from);beam.position.copy(from).addScaledVector(delta,.5);beam.scale.y=delta.length();beam.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());beamLeft=.22;beam.visible=true;a.magic.life.hurt(Math.max(1,damage));if(!a.magic.life.hp)a.magic.reset();return a.magic.life.hp?`Руническая магия: −${damage}. Гном: ${a.magic.life.hp}/420.`:'Вулканический гном повержен магией.';},
  protect(){if(wardCooldown>0)return 'Магический барьер восстанавливается.';wardLeft=RAVINE_SPELL.wardDuration;wardCooldown=RAVINE_SPELL.wardCooldown;return 'Магический барьер: защита от заклинаний на 2,5 секунды.';},
  reset(){wardLeft=wardCooldown=spellCooldown=0;actors.forEach(a=>{a.magic.life.reset();a.magic.reset();});vfx.clear();},
  update(dt:number,hero:Point,available:boolean){if(dt<=0)return {hits:0,blocked:0,damage:0};time+=dt;spellCooldown=Math.max(0,spellCooldown-dt);wardCooldown=Math.max(0,wardCooldown-dt);wardLeft=Math.max(0,wardLeft-dt);beamLeft=Math.max(0,beamLeft-dt);beam.visible=beamLeft>0;ward.visible=wardLeft>0;ward.position.set(hero.x,hero.y+7,hero.z);let hits=0,blocked=0,count=0,damage=0;
   actors.forEach((a,i)=>{
    const alive=a.magic.life.hp>0,near=Math.hypot(a.home.x-hero.x,a.home.z-hero.z)<34&&Math.abs(a.home.y-hero.y)<6;
    let moving=false;
    if(alive&&a.magic.stage==='idle'){
     const aim=at(a.station+Math.sin(time*.045+i)*.075,a.offset),dx=aim.x-a.home.x,dz=aim.z-a.home.z,d=Math.hypot(dx,dz),step=Math.min(d,8*dt),p={x:a.home.x+dx/(d||1)*step,z:a.home.z+dz/(d||1)*step},y=floor(p.x,p.z);
     const next={...p,y:y??a.home.y};
     if(y!=null&&y<-55&&y>-105&&Math.abs(y-a.home.y)<1.4*step+.08&&walkable(a.home,next)&&!(Math.abs(hero.y-y)<14&&Math.hypot(hero.x-p.x,hero.z-p.z)<4)&&!actors.some(b=>b!==a&&b.magic.life.hp>0&&Math.abs(b.home.y-y)<8&&Math.hypot(b.home.x-p.x,b.home.z-p.z)<3.5)){moving=step>.001;Object.assign(a.home,next);a.actor.root.position.set(p.x,y,p.z);a.actor.root.rotation.y=Math.atan2(dx,dz);}
    }
    if(alive&&near)a.actor.root.rotation.y=Math.atan2(hero.x-a.home.x,hero.z-a.home.z);
    const origin={x:a.home.x,y:a.home.y+5,z:a.home.z},event=a.magic.step(dt,hero,available,origin,(near||a.magic.projectiles.length>0)&&contact(a.home,hero),(x,z)=>floor(x,z));
    if(event.impact){vfx.impact(a.element,{x:hero.x,y:hero.y+7,z:hero.z},12);if(wardLeft>0)blocked++;else {hits++;damage+=ELEMENTS[a.element].damage;}}
    a.actor.root.visible=!a.magic.life.hidden;a.actor.root.rotation.z=alive?0:-Math.PI/2;
    if(a.actor.root.position.distanceTo(new THREE.Vector3(hero.x,hero.y,hero.z))<110)a.actor.update(time,moving,false,a.magic.stage==='charge'?'work':'run');
    charges[i].visible=alive&&a.magic.stage==='charge';charges[i].position.set(origin.x,origin.y,origin.z);charges[i].material.color.set(ELEMENTS[a.element].color);if(charges[i].visible)vfx.charge('charge-'+i,a.element,origin);
    for(const p of a.magic.projectiles){if(count>=64)break;const matrix=new THREE.Matrix4().makeTranslation(p.x,p.y,p.z);orbs.setMatrixAt(count,matrix);orbs.setColorAt(count++,new THREE.Color(ELEMENTS[a.element].color));vfx.bolt(i+'-'+p.id,a.element,p);}
   });orbs.count=count;orbs.instanceMatrix.needsUpdate=true;if(orbs.instanceColor)orbs.instanceColor.needsUpdate=true;return {hits,blocked,damage};
  },dispose(){vfx.dispose();actors.forEach(a=>a.actor.dispose());},
 };
}
