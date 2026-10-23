import * as THREE from 'three';
import {WORLD_OUTLINE,MAIN_WORLD} from './muspelheimTerrain';
import {VOLCANO_POSITION,VOLCANO_SIZE} from './muspelheimVolcano';
export const FIRE_SPRITE='muspelheim-fireball.png';
export const FIRE_CREDIT={title:'Fireball Effect',author:'Cethiel',url:'https://opengameart.org/content/fireball-effect',license:'CC0'};
export const FIRE_RAIN={radius:7.5,warning:3.8,burst:.7,interval:4.8,grace:8,pool:24,cooldown:.9};
type Point={x:number;z:number};
export type FireShot=Point&{y:number;age:number;duration:number;impacted:boolean;seed:number};
/** Protect the entire original volcano, its castle, foothills and a 20-unit apron. */
export function isSurtTerritory(x:number,z:number,margin=0){return Math.abs(x-VOLCANO_POSITION.x)<=VOLCANO_SIZE.width/2+20+margin&&Math.abs(z-VOLCANO_POSITION.z)<=VOLCANO_SIZE.depth/2+20+margin;}
export function inFireWorld(x:number,z:number){
 let inside=false;for(let i=0,j=WORLD_OUTLINE.length-1;i<WORLD_OUTLINE.length;j=i++){
  const [xi,zi]=WORLD_OUTLINE[i],[xj,zj]=WORLD_OUTLINE[j];if((zi>z)!==(zj>z)&&x<(xj-xi)*(z-zi)/(zj-zi)+xi)inside=!inside;
 }return inside;
}
// This attack intentionally bypasses incomingCombatDamage: armor and shield
// never subtract from the direct health loss, and equipment is not destroyed.
export function fireStrikeDamage(maxHp:number){return Math.max(12,Math.ceil(maxHp*.18));}
export function fireHits(shot:FireShot,hero:Point&{y:number}){return !isSurtTerritory(hero.x,hero.z)&&Math.hypot(hero.x-shot.x,hero.z-shot.z)<=FIRE_RAIN.radius&&Math.abs(hero.y-shot.y)<6;}
export function fireTrajectory(vent:THREE.Vector3,shot:FireShot,t:number){
 const q=THREE.MathUtils.clamp(t,0,1),arc=85+Math.hypot(shot.x-vent.x,shot.z-vent.z)*.16;
 return new THREE.Vector3(THREE.MathUtils.lerp(vent.x,shot.x,q),THREE.MathUtils.lerp(vent.y,shot.y+2,q)+4*arc*q*(1-q),THREE.MathUtils.lerp(vent.z,shot.z,q));
}
export function createFireRainState(floorAt:(x:number,z:number)=>number|null,blocked:(x:number,z:number)=>boolean,random=Math.random){
 const shots:FireShot[]=[];let untilWave=FIRE_RAIN.grace,immunity=0;
 const target=(x:number,z:number)=>{if(!inFireWorld(x,z)||isSurtTerritory(x,z,FIRE_RAIN.radius)||blocked(x,z))return null;const y=floorAt(x,z);return y!=null&&Number.isFinite(y)?{x,z,y}:null;};
 const wave=(hero:Point)=>{
  for(let i=0;i<12&&shots.length<FIRE_RAIN.pool;i++){
   let hit:ReturnType<typeof target>=null;
   for(let tries=0;tries<36&&!hit;tries++){
    if(i<3){const angle=random()*Math.PI*2,r=i===0&&tries===0?0:10+random()*30;hit=target(hero.x+Math.cos(angle)*r,hero.z+Math.sin(angle)*r);}
    else if(random()<.85)hit=target(MAIN_WORLD.minX+15+random()*(MAIN_WORLD.maxX-MAIN_WORLD.minX-30),MAIN_WORLD.minZ+15+random()*(MAIN_WORLD.maxZ-MAIN_WORLD.minZ-30));
    else hit=target(-245+random()*490,112+random()*140);
   }
   if(hit)shots.push({...hit,age:-i*.07,duration:FIRE_RAIN.warning+random()*.4,impacted:false,seed:random()});
  }
 };
 return {shots,reset:()=>{shots.length=0;untilWave=FIRE_RAIN.grace;immunity=0;},update:(dt:number,hero:Point&{y:number},hit:()=>void)=>{
  if(dt<=0)return;immunity=Math.max(0,immunity-dt);untilWave-=dt;
  if(untilWave<=0){wave(hero);untilWave=FIRE_RAIN.interval;}
  for(let i=shots.length-1;i>=0;i--){const s=shots[i];s.age+=dt;if(!s.impacted&&s.age>=s.duration){s.impacted=true;if(immunity===0&&fireHits(s,hero)){immunity=FIRE_RAIN.cooldown;hit();}}
   if(s.age>s.duration+FIRE_RAIN.burst)shots.splice(i,1);
  }
 }};
}
/** Reusable sprites and rings: bounded allocations and no per-projectile lights. */
export function createFireRain(texture:THREE.Texture,floorAt:(x:number,z:number)=>number|null,blocked:(x:number,z:number)=>boolean){
 texture.colorSpace=THREE.SRGBColorSpace;texture.minFilter=texture.magFilter=THREE.LinearFilter;texture.generateMipmaps=false;
 const root=new THREE.Group();root.name='Огненный дождь вулканической башни';const state=createFireRainState(floorAt,blocked);
 const ringGeo=new THREE.RingGeometry(FIRE_RAIN.radius-.45,FIRE_RAIN.radius,48);ringGeo.rotateX(-Math.PI/2);
 const fillGeo=new THREE.CircleGeometry(FIRE_RAIN.radius,48);fillGeo.rotateX(-Math.PI/2);
 const pool=Array.from({length:FIRE_RAIN.pool},()=>{
  const group=new THREE.Group(),map=texture.clone();map.repeat.set(1/7,1/4);
  const fire=new THREE.Sprite(new THREE.SpriteMaterial({map,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,color:'#ffd5a0',toneMapped:false}));fire.scale.set(17,10,1);group.add(fire);
  const ring=new THREE.Mesh(ringGeo.clone(),new THREE.MeshBasicMaterial({color:'#ff9d3b',transparent:true,opacity:.8,depthWrite:false,side:THREE.DoubleSide,toneMapped:false}));group.add(ring);
  const fill=new THREE.Mesh(fillGeo.clone(),new THREE.MeshBasicMaterial({color:'#ff3b0b',transparent:true,opacity:.12,depthWrite:false,side:THREE.DoubleSide,toneMapped:false}));group.add(fill);
  group.visible=false;root.add(group);return {group,map,fire,ring,fill,shot:undefined as FireShot|undefined};
 });
 let disposed=false;
 return {root,reset:()=>{state.reset();pool.forEach(p=>p.group.visible=false);},update:(dt:number,hero:THREE.Vector3,vent:THREE.Vector3,camera:THREE.Camera,onHit:()=>void)=>{
  state.update(dt,hero,onHit);
  const right=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,0),up=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,1);
  pool.forEach((p,i)=>{const shot=state.shots[i];p.group.visible=!!shot&&shot.age>=0;if(!shot||shot.age<0)return;
   const t=shot.age/shot.duration,burst=Math.max(0,shot.age-shot.duration)/FIRE_RAIN.burst;
   const frame=Math.floor(Math.max(0,shot.age)*24+shot.seed*28)%28;p.map.offset.set((frame%7)/7,1-(Math.floor(frame/7)+1)/4);
   if(p.shot!==shot){p.shot=shot;for(const mesh of [p.ring,p.fill]){const pos=mesh.geometry.getAttribute('position');for(let v=0;v<pos.count;v++){const y=floorAt(shot.x+pos.getX(v),shot.z+pos.getZ(v))??shot.y;pos.setY(v,y+.35);}pos.needsUpdate=true;mesh.geometry.computeBoundingSphere();}}
   p.ring.position.set(shot.x,0,shot.z);p.fill.position.set(shot.x,0,shot.z);
   p.ring.material.opacity=t<1?.5+.45*Math.pow(t,2):.85*(1-burst);p.fill.material.opacity=t<1?.05+.15*t:.5*(1-burst);

   if(t<1){p.fire.position.copy(fireTrajectory(vent,shot,t));const velocity=fireTrajectory(vent,shot,t+.005).sub(p.fire.position);p.fire.material.rotation=Math.atan2(velocity.dot(up),velocity.dot(right));p.fire.scale.set(17,10,1);p.fire.material.opacity=1;}
   else{p.fire.position.set(shot.x,shot.y+3,shot.z);p.fire.scale.setScalar(13+burst*22);p.fire.material.rotation=shot.seed*Math.PI*2;p.fire.material.opacity=1-burst;}
  });
 },dispose:()=>{if(disposed)return;disposed=true;root.removeFromParent();ringGeo.dispose();fillGeo.dispose();pool.forEach(p=>{p.map.dispose();p.ring.geometry.dispose();p.fill.geometry.dispose();p.fire.material.dispose();p.ring.material.dispose();p.fill.material.dispose();});texture.dispose();}};
}
