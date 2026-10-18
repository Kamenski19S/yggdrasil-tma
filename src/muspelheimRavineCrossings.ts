import * as THREE from 'three';
import type {WallRock} from './muspelheimRockWalls';
import {SURT_RAVINE_LINE,SURT_RAVINE_DEPTH} from './muspelheimSurtRavine';

const lengths=[0];
for(let i=1;i<SURT_RAVINE_LINE.length;i++)lengths.push(lengths[i-1]+Math.hypot(SURT_RAVINE_LINE[i].x-SURT_RAVINE_LINE[i-1].x,SURT_RAVINE_LINE[i].z-SURT_RAVINE_LINE[i-1].z));
export const RAVINE_RESTART={x:-365,z:26};
export const RAVINE_BRIDGE_WIDTH=11;
export const RAVINE_BRIDGE_LENGTH=84;
export const RAVINE_PIT_EXTRA_DEPTH=140;
export const RAVINE_CROSSINGS=[-317].map(x=>{
 let index=0;for(let i=1;i<SURT_RAVINE_LINE.length;i++)if(Math.abs(SURT_RAVINE_LINE[i].x-x)<Math.abs(SURT_RAVINE_LINE[index].x-x))index=i;
 const p=SURT_RAVINE_LINE[index],a=SURT_RAVINE_LINE[index-1],b=SURT_RAVINE_LINE[index+1],length=Math.hypot(b.x-a.x,b.z-a.z);
 return {...p,tx:(b.x-a.x)/length,tz:(b.z-a.z)/length,station:lengths[index]};
});
export function ravineFrame(x:number,z:number){
 let distance=Infinity,station=0,nx=0,nz=0,cx=0,cz=0;
 for(let i=1;i<SURT_RAVINE_LINE.length;i++){
  const a=SURT_RAVINE_LINE[i-1],b=SURT_RAVINE_LINE[i],dx=b.x-a.x,dz=b.z-a.z,l=Math.hypot(dx,dz);
  const t=THREE.MathUtils.clamp(((x-a.x)*dx+(z-a.z)*dz)/(l*l),0,1),px=a.x+t*dx,pz=a.z+t*dz,d=Math.hypot(x-px,z-pz);
  if(d<distance){distance=d;station=lengths[i-1]+t*l;nx=-dz/l;nz=dx/l;cx=px;cz=pz;}
 }
 return {distance,station,nx,nz,x:cx,z:cz};
}
export function ravinePitDepth(x:number,z:number){
 const f=ravineFrame(x,z),cross=1-THREE.MathUtils.smoothstep(f.distance,40,55);
 return -RAVINE_PIT_EXTRA_DEPTH*cross*Math.max(...RAVINE_CROSSINGS.map(p=>1-THREE.MathUtils.smoothstep(Math.abs(f.station-p.station),27,38)));
}
export function bridgeLocal(p:typeof RAVINE_CROSSINGS[number],x:number,z:number){const dx=x-p.x,dz=z-p.z;return {along:dx*p.tx+dz*p.tz,across:-dx*p.tz+dz*p.tx};}
export function ravineBridgeHeight(along:number){return -SURT_RAVINE_DEPTH+.04-3.2*(1-THREE.MathUtils.smoothstep(Math.abs(along),0,42));}
export function ravineBridgeFloorAt(x:number,z:number){
 for(const p of RAVINE_CROSSINGS){const q=bridgeLocal(p,x,z);if(Math.abs(q.along)<=RAVINE_BRIDGE_LENGTH/2&&Math.abs(q.across)<=RAVINE_BRIDGE_WIDTH/2)return ravineBridgeHeight(q.along);}
 return null;
}
export const RAVINE_BRIDGE_ASSET='Muspelheim_Damaged_Rope_Bridge.glb';
export const RAVINE_BRIDGE_CREDIT={title:'LP slightly damaged wooden bridge',author:'Dawid',url:'https://sketchfab.com/3d-models/lp-slightly-damaged-wooden-bridge-f57422aa52934ed0a088269b59e4bb9d'};
export function createRavineCrossings(source:THREE.Object3D){
 const root=new THREE.Group();root.name='Single long damaged rope bridge';
 const group=new THREE.Group(),p=RAVINE_CROSSINGS[0];group.position.set(p.x,0,p.z);group.rotation.y=Math.atan2(p.tx,p.tz);root.add(group);
 source.updateWorldMatrix(true,true);
 source.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  const geometry=o.geometry.clone().applyMatrix4(o.matrixWorld),positions=geometry.getAttribute('position');
  // Source deck is 17 units wide; narrow boards and floor collision together.
  for(let i=0;i<positions.count;i++){
   positions.setX(i,positions.getX(i)*RAVINE_BRIDGE_WIDTH/17);
   positions.setY(i,positions.getY(i)+ravineBridgeHeight(positions.getZ(i))-.55);
  }
  geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();
  const mesh=new THREE.Mesh(geometry,o.material);mesh.name='Damaged wooden deck with ropes underneath';group.add(mesh);
 });
 const glow=new THREE.Mesh(new THREE.PlaneGeometry(65,98),new THREE.MeshBasicMaterial({color:'#8c2613',transparent:true,opacity:.4,side:THREE.DoubleSide}));
 glow.rotation.x=-Math.PI/2;glow.rotation.z=-Math.atan2(p.tz,p.tx);glow.position.set(p.x,-SURT_RAVINE_DEPTH-RAVINE_PIT_EXTRA_DEPTH+.2,p.z);root.add(glow);
 return root;
}
export function isRavineAbyss(x:number,z:number){return ravinePitDepth(x,z)<-28;}
export type RavineStep='walk'|'blocked'|'fall';
export function classifyRavineStep(sample:(x:number,z:number)=>number|null,from:{x:number;z:number},to:{x:number;z:number},canFallAt:(x:number,z:number)=>boolean=()=>true):RavineStep{
 const length=Math.hypot(to.x-from.x,to.z-from.z);if(length<1e-8)return 'walk';
 const steps=Math.max(1,Math.ceil(length/.25));let previous=sample(from.x,from.z);if(previous==null)return 'blocked';
 for(let i=1;i<=steps;i++){
  const x=THREE.MathUtils.lerp(from.x,to.x,i/steps),z=THREE.MathUtils.lerp(from.z,to.z,i/steps),y=sample(x,z);if(y==null)return canFallAt(x,z)?'fall':'blocked';
  const delta=y-previous,limit=length/steps*1.4+.08;
  if(delta>limit)return 'blocked';if(delta<-limit)return canFallAt(x,z)?'fall':'blocked';previous=y;
 }
 return 'walk';
}

/** Fill both exposed ends below the perimeter rocks, down to the ravine floor. */
export function ravineEndRockLayout():WallRock[]{
 const ends=[{x:-525,z:ravineFrame(-525,-92).z},{x:ravineFrame(-80,-458.75).x,z:-458.75}];
 const rocks:WallRock[]=[];
 for(const [end,p] of ends.entries()){
  const f=ravineFrame(p.x,p.z);
  for(let column=0;column<7;column++)for(let tier=0;tier<3;tier++){
   const across=-66+column*22;
   rocks.push({kind:(column+tier+end)%3,x:p.x+f.nx*across,z:p.z+f.nz*across,
    y:-91+tier*34,yaw:Math.atan2(-f.nz,f.nx)+(column%2?.035:-.035),width:32,height:49+tier*2,depth:34});
  }
 }
 return rocks;
}

/** Reuse the perimeter GLBs, embedded into both banks instead of freestanding walls. */
export function ravineRockLayout():WallRock[]{
 const rocks:WallRock[]=ravineEndRockLayout();
 for(let i=5;i<SURT_RAVINE_LINE.length-4;i+=4){
  const p=SURT_RAVINE_LINE[i],f=ravineFrame(p.x,p.z);
  for(const side of [-1,1]){
   const d=53+3*Math.sin(i*1.7),x=p.x+side*f.nx*d,z=p.z+side*f.nz*d;
   // Leave generous clearance around both existing ramps and the world boundary.
   if(x< -493||z< -428||Math.abs(x+365)<36&&z> -150&&z<40||Math.abs(x+270)<35&&z< -115&&z> -240)continue;
   for(let tier=0;tier<2;tier++)rocks.push({kind:(i+tier)%3,x:x+side*f.nx*tier*3,z:z+side*f.nz*tier*3,y:-83+tier*42,
    yaw:Math.atan2(f.nx,f.nz)+Math.sin(i)*.15,width:30+i%9,height:53+i%13,depth:22+i%7});
  }
 }
 return rocks;
}
export function ravineRockBlocks(rocks:WallRock[],x:number,y:number,z:number,radius=2){
 return rocks.some(r=>{if(y+12<r.y||y>r.y+r.height)return false;const dx=x-r.x,dz=z-r.z,c=Math.cos(r.yaw),s=Math.sin(r.yaw);return Math.abs(c*dx-s*dz)<r.width/2+radius&&Math.abs(s*dx+c*dz)<r.depth/2+radius;});
}
