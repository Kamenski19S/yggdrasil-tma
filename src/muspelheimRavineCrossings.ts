import * as THREE from 'three';
import type {WallRock} from './muspelheimRockWalls';
import {SURT_RAVINE_LINE,SURT_RAVINE_DEPTH} from './muspelheimSurtRavine';

const lengths=[0];
for(let i=1;i<SURT_RAVINE_LINE.length;i++)lengths.push(lengths[i-1]+Math.hypot(SURT_RAVINE_LINE[i].x-SURT_RAVINE_LINE[i-1].x,SURT_RAVINE_LINE[i].z-SURT_RAVINE_LINE[i-1].z));
export const RAVINE_RESTART={x:-365,z:26};
export const RAVINE_BRIDGE_WIDTH=13;
export const RAVINE_BRIDGE_LENGTH=42;
export const RAVINE_PIT_EXTRA_DEPTH=92;
export const RAVINE_CROSSINGS=[-340,-290].map(x=>{
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
 return -RAVINE_PIT_EXTRA_DEPTH*cross*Math.max(...RAVINE_CROSSINGS.map(p=>1-THREE.MathUtils.smoothstep(Math.abs(f.station-p.station),7,15)));
}
export function bridgeLocal(p:typeof RAVINE_CROSSINGS[number],x:number,z:number){const dx=x-p.x,dz=z-p.z;return {along:dx*p.tx+dz*p.tz,across:-dx*p.tz+dz*p.tx};}
export function ravineBridgeHeight(along:number){return -SURT_RAVINE_DEPTH+.04-2.1*(1-THREE.MathUtils.smoothstep(Math.abs(along),0,12));}
export function ravineBridgeFloorAt(x:number,z:number){
 for(const p of RAVINE_CROSSINGS){const q=bridgeLocal(p,x,z);if(Math.abs(q.along)<=RAVINE_BRIDGE_LENGTH/2&&Math.abs(q.across)<=RAVINE_BRIDGE_WIDTH/2)return ravineBridgeHeight(q.along);}
 return null;
}
export function createRavineCrossings(){
 const root=new THREE.Group();root.name='Suspension bridges over deadly Surt ravine faults';
 const plankGeometry=new THREE.BoxGeometry(RAVINE_BRIDGE_WIDTH,.65,1.15),plankMaterial=new THREE.MeshStandardMaterial({color:'#57473d',roughness:1});
 const postGeometry=new THREE.CylinderGeometry(.35,.5,9,7),postMaterial=new THREE.MeshStandardMaterial({color:'#292a2d',roughness:.9,metalness:.2});
 const ropeMaterial=new THREE.MeshStandardMaterial({color:'#968276',roughness:1});
 for(const [index,p] of RAVINE_CROSSINGS.entries()){
  const group=new THREE.Group();group.position.set(p.x,0,p.z);group.rotation.y=Math.atan2(p.tx,p.tz);group.name=`Ravine suspension bridge ${index+1}`;
  const count=36,planks=new THREE.InstancedMesh(plankGeometry,plankMaterial,count),dummy=new THREE.Object3D();
  for(let i=0;i<count;i++){const z=-21+(i+.5)*42/count;dummy.position.set(0,ravineBridgeHeight(z)-.325,z);dummy.rotation.set(0,0,Math.sin(i*2.7)*.012);dummy.updateMatrix();planks.setMatrixAt(i,dummy.matrix);}group.add(planks);
  const posts=new THREE.InstancedMesh(postGeometry,postMaterial,4);let pi=0;
  for(const side of [-1,1]){
   for(const z of [-21,21]){dummy.position.set(side*7,ravineBridgeHeight(z)+4.2,z);dummy.rotation.set(0,0,0);dummy.updateMatrix();posts.setMatrixAt(pi++,dummy.matrix);}
   for(const h of [3.6,7.4]){
    const points=Array.from({length:25},(_,i)=>{const z=-21+i*42/24;return new THREE.Vector3(side*7,ravineBridgeHeight(z)+h,z);});
    group.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),32,.16,5,false),ropeMaterial));
   }
   for(let i=0;i<9;i++){const z=-18+i*4.5;group.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.LineCurve3(new THREE.Vector3(side*7,ravineBridgeHeight(z)+.2,z),new THREE.Vector3(side*7,ravineBridgeHeight(z)+7.4,z)),1,.09,4,false),ropeMaterial));}
  }
  group.add(posts);root.add(group);
 }
 // The glow sits far below the walking floor, making the depth visible through each gap.
 const glowMaterial=new THREE.MeshBasicMaterial({color:'#8c2613',transparent:true,opacity:.55,side:THREE.DoubleSide});
 for(const p of RAVINE_CROSSINGS){const glow=new THREE.Mesh(new THREE.PlaneGeometry(29,91),glowMaterial);glow.rotation.set(-Math.PI/2,0,0);glow.rotation.z=-Math.atan2(p.tz,p.tx);glow.position.set(p.x,-SURT_RAVINE_DEPTH-RAVINE_PIT_EXTRA_DEPTH+.2,p.z);root.add(glow);}
 return root;
}
export type RavineStep='walk'|'blocked'|'fall';
export function classifyRavineStep(sample:(x:number,z:number)=>number|null,from:{x:number;z:number},to:{x:number;z:number}):RavineStep{
 const length=Math.hypot(to.x-from.x,to.z-from.z);if(length<1e-8)return 'walk';
 const steps=Math.max(1,Math.ceil(length/.25));let previous=sample(from.x,from.z);if(previous==null)return 'blocked';
 for(let i=1;i<=steps;i++){
  const y=sample(THREE.MathUtils.lerp(from.x,to.x,i/steps),THREE.MathUtils.lerp(from.z,to.z,i/steps));if(y==null)return 'fall';
  const delta=y-previous,limit=length/steps*1.4+.08;
  if(delta>limit)return 'blocked';if(delta<-limit)return 'fall';previous=y;
 }
 return 'walk';
}

/** Reuse the perimeter GLBs, embedded into both banks instead of freestanding walls. */
export function ravineRockLayout():WallRock[]{
 const rocks:WallRock[]=[];
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
