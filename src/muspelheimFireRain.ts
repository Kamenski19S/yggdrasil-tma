import {iceSanctuaryContains,ICE_SANCTUARY_POSITION} from './muspelheimIceSanctuary';
import {ASH_VOLCANO_POSITION} from './muspelheimAshVolcano';
import * as THREE from 'three';
import {WORLD_OUTLINE,MAIN_WORLD} from './muspelheimTerrain';
import {VOLCANO_POSITION,VOLCANO_SIZE} from './muspelheimVolcano';
export const FIRE_SPRITE='muspelheim-fireball.png';
export const FIRE_CREDIT={title:'Fireball Effect',author:'Cethiel',url:'https://opengameart.org/content/fireball-effect',license:'CC0'};
export const FIRE_RAIN={radius:7.5,warning:3.8,burst:.7,interval:4.8,grace:8,pool:28,cooldown:.9};
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
export function fireHits(shot:FireShot,hero:Point&{y:number}){return !isSurtTerritory(hero.x,hero.z)&&!iceSanctuaryContains(hero.x,hero.z)&&Math.hypot(hero.x-shot.x,hero.z-shot.z)<=FIRE_RAIN.radius&&Math.abs(hero.y-shot.y)<6;}
export function fireTrajectory(vent:THREE.Vector3,shot:FireShot,t:number){
 const q=THREE.MathUtils.clamp(t,0,1),arc=85+Math.hypot(shot.x-vent.x,shot.z-vent.z)*.16;
 return new THREE.Vector3(THREE.MathUtils.lerp(vent.x,shot.x,q),THREE.MathUtils.lerp(vent.y,shot.y+2,q)+4*arc*q*(1-q),THREE.MathUtils.lerp(vent.z,shot.z,q));
}
/** Keep both landing circles and flight paths outside the sanctuary ward. */
export function fireCrossesIceSanctuary(x:number,z:number){
 const margin=FIRE_RAIN.radius;let enter=0,leave=1;
 for(const [start,end,center,half] of [[ASH_VOLCANO_POSITION.x,x,ICE_SANCTUARY_POSITION.x,50+margin],[ASH_VOLCANO_POSITION.z,z,ICE_SANCTUARY_POSITION.z,28+margin]]){
  const delta=end-start;if(Math.abs(delta)<1e-8){if(Math.abs(start-center)>half)return false;continue;}
  const a=(center-half-start)/delta,b=(center+half-start)/delta;enter=Math.max(enter,Math.min(a,b));leave=Math.min(leave,Math.max(a,b));if(enter>leave)return false;
 }return true;
}
export function createFireRainState(floorAt:(x:number,z:number)=>number|null,blocked:(x:number,z:number)=>boolean,random=Math.random){
 const shots:FireShot[]=[];let untilWave=FIRE_RAIN.grace,immunity=0;
 const target=(x:number,z:number)=>{if(!inFireWorld(x,z)||isSurtTerritory(x,z,FIRE_RAIN.radius)||fireCrossesIceSanctuary(x,z)||blocked(x,z))return null;const y=floorAt(x,z);return y!=null&&Number.isFinite(y)?{x,z,y}:null;};
 // Four columns by three rows cover the plain; two more cells cover the
 // entrance. Targets use only time, terrain and RNG, never hero coordinates.
 const wave=()=>{
  for(let i=0;i<14&&shots.length<FIRE_RAIN.pool;i++){
   let hit:ReturnType<typeof target>=null;
   for(let tries=0;tries<36&&!hit;tries++){
    if(i<12){const column=i%4,row=Math.floor(i/4),width=(MAIN_WORLD.maxX-MAIN_WORLD.minX-30)/4,depth=(MAIN_WORLD.maxZ-MAIN_WORLD.minZ-30)/3;
     hit=target(MAIN_WORLD.minX+15+(column+random())*width,MAIN_WORLD.minZ+15+(row+random())*depth);
    }else hit=target(-245+(i-12+random())*245,112+random()*140);
   }
   if(hit)shots.push({...hit,age:-i*.07,duration:FIRE_RAIN.warning+random()*.4,impacted:false,seed:random()});
  }
 };
 return {shots,reset:()=>{shots.length=0;untilWave=FIRE_RAIN.grace;immunity=0;},update:(dt:number,hero:Point&{y:number},hit:()=>void)=>{
  if(dt<=0)return;immunity=Math.max(0,immunity-dt);untilWave-=dt;
  if(untilWave<=0){wave();untilWave=FIRE_RAIN.interval;}
  for(let i=shots.length-1;i>=0;i--){const s=shots[i];s.age+=dt;if(!s.impacted&&s.age>=s.duration){s.impacted=true;if(immunity===0&&fireHits(s,hero)){immunity=FIRE_RAIN.cooldown;hit();}}
   if(s.age>s.duration+FIRE_RAIN.burst)shots.splice(i,1);
  }
 }};
}
/** Reusable sprites and red ground patches: bounded allocations and no per-projectile lights. */
export function createFireRain(texture:THREE.Texture,floorAt:(x:number,z:number)=>number|null,blocked:(x:number,z:number)=>boolean,pixelRatio=1){
 texture.colorSpace=THREE.SRGBColorSpace;texture.minFilter=texture.magFilter=THREE.LinearFilter;texture.generateMipmaps=false;
 const root=new THREE.Group();root.name='Огненный дождь вулканической башни';const state=createFireRainState(floorAt,blocked);
 const fillGeo=new THREE.CircleGeometry(FIRE_RAIN.radius,48);fillGeo.rotateX(-Math.PI/2);
 const pool=Array.from({length:FIRE_RAIN.pool},()=>{
  const group=new THREE.Group(),map=texture.clone();map.repeat.set(1/7,1/4);
  const fire=new THREE.Sprite(new THREE.SpriteMaterial({map,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,color:'#ffd5a0',toneMapped:false}));fire.scale.set(17,10,1);group.add(fire);
  const fill=new THREE.Mesh(fillGeo.clone(),new THREE.MeshBasicMaterial({color:'#ff3b0b',transparent:true,opacity:.12,depthWrite:false,side:THREE.DoubleSide,toneMapped:false}));group.add(fill);
  const edgeOpacity={value:.95};
  // Keep a fine 1.25 CSS-pixel outline as camera distance changes.
  fill.material.onBeforeCompile=shader=>{
   shader.uniforms.warningPixels={value:1.25*pixelRatio};shader.uniforms.warningEdgeOpacity=edgeOpacity;
   shader.vertexShader='varying vec2 warningUv;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nwarningUv=uv;');
   shader.fragmentShader='varying vec2 warningUv;uniform float warningPixels;uniform float warningEdgeOpacity;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
    float warningRadius=length((warningUv-.5)*2.);
    float warningWidth=min(.45,fwidth(warningRadius)*warningPixels);
    float warningBorder=smoothstep(1.-warningWidth,1.-warningWidth+fwidth(warningRadius),warningRadius);
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.04,1.,.12),warningBorder);
    diffuseColor.a=mix(diffuseColor.a,warningEdgeOpacity,warningBorder);
   `);
  };
  fill.material.customProgramCacheKey=()=> 'fire-warning-green-2mm-v1';
  group.visible=false;root.add(group);return {group,map,fire,fill,edgeOpacity,shot:undefined as FireShot|undefined};
 });
 let disposed=false;
 return {root,reset:()=>{state.reset();pool.forEach(p=>p.group.visible=false);},update:(dt:number,hero:THREE.Vector3,vent:THREE.Vector3,camera:THREE.Camera,onHit:()=>void)=>{
  state.update(dt,hero,onHit);
  const right=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,0),up=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,1);
  pool.forEach((p,i)=>{const shot=state.shots[i];p.group.visible=!!shot&&shot.age>=0;if(!shot||shot.age<0)return;
   const t=shot.age/shot.duration,burst=Math.max(0,shot.age-shot.duration)/FIRE_RAIN.burst;
   const frame=Math.floor(Math.max(0,shot.age)*24+shot.seed*28)%28;p.map.offset.set((frame%7)/7,1-(Math.floor(frame/7)+1)/4);
   if(p.shot!==shot){p.shot=shot;for(const mesh of [p.fill]){const pos=mesh.geometry.getAttribute('position');for(let v=0;v<pos.count;v++){const y=floorAt(shot.x+pos.getX(v),shot.z+pos.getZ(v))??shot.y;pos.setY(v,y+.35);}pos.needsUpdate=true;mesh.geometry.computeBoundingSphere();}}
   p.fill.position.set(shot.x,0,shot.z);
   p.fill.material.opacity=t<1?.05+.15*t:.5*(1-burst);p.edgeOpacity.value=.95*(t<1?1:1-burst);

   if(t<1){p.fire.position.copy(fireTrajectory(vent,shot,t));const velocity=fireTrajectory(vent,shot,t+.005).sub(p.fire.position);p.fire.material.rotation=Math.atan2(velocity.dot(up),velocity.dot(right));p.fire.scale.set(17,10,1);p.fire.material.opacity=1;}
   else{p.fire.position.set(shot.x,shot.y+3,shot.z);p.fire.scale.setScalar(13+burst*22);p.fire.material.rotation=shot.seed*Math.PI*2;p.fire.material.opacity=1-burst;}
  });
 },dispose:()=>{if(disposed)return;disposed=true;root.removeFromParent();fillGeo.dispose();pool.forEach(p=>{p.map.dispose();p.fill.geometry.dispose();p.fire.material.dispose();p.fill.material.dispose();});texture.dispose();}};
}
