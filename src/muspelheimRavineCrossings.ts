import * as THREE from 'three';
import type {WallRock} from './muspelheimRockWalls';
import {SURT_RAVINE_LINE,SURT_RAVINE_DEPTH} from './muspelheimSurtRavine';

const lengths=[0];
for(let i=1;i<SURT_RAVINE_LINE.length;i++)lengths.push(lengths[i-1]+Math.hypot(SURT_RAVINE_LINE[i].x-SURT_RAVINE_LINE[i-1].x,SURT_RAVINE_LINE[i].z-SURT_RAVINE_LINE[i-1].z));
export const RAVINE_RESTART={x:-365,z:26};
export const RAVINE_BRIDGE_WIDTH=17;
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
// Rasterized from the actual boards, so every visible missing plank is interactive.
const CELL=.25,COLS=Math.ceil(RAVINE_BRIDGE_WIDTH/CELL)+1,ROWS=Math.ceil(RAVINE_BRIDGE_LENGTH/CELL)+1;
let deckMask:Uint8Array|undefined;
export function ravineBridgeGapAt(x:number,z:number){
 if(!deckMask)return false;
 const q=bridgeLocal(RAVINE_CROSSINGS[0],x,z);
 if(Math.abs(q.along)>RAVINE_BRIDGE_LENGTH/2-.8||Math.abs(q.across)>RAVINE_BRIDGE_WIDTH/2-.35)return false;
 const c=Math.round((q.across+RAVINE_BRIDGE_WIDTH/2)/CELL),r=Math.round((q.along+RAVINE_BRIDGE_LENGTH/2)/CELL);
 // A foot spans ordinary seams; only a real opening under the whole foot trips her.
 for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++)if(deckMask[(r+dr)*COLS+c+dc])return false;
 return true;
}
export function crossesRavineGap(from:{x:number;z:number},to:{x:number;z:number}){
 const n=Math.max(1,Math.ceil(Math.hypot(to.x-from.x,to.z-from.z)/.12));
 for(let i=1;i<=n;i++)if(ravineBridgeGapAt(THREE.MathUtils.lerp(from.x,to.x,i/n),THREE.MathUtils.lerp(from.z,to.z,i/n)))return true;
 return false;
}
export function createRavineCrossings(source:THREE.Object3D){
 const root=new THREE.Group();root.name='Single long damaged rope bridge';
 const group=new THREE.Group(),p=RAVINE_CROSSINGS[0];group.position.set(p.x,0,p.z);group.rotation.y=Math.atan2(p.tx,p.tz);root.add(group);
 const mask=new Uint8Array(COLS*ROWS);deckMask=mask;
 source.updateWorldMatrix(true,true);
 source.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  const geometry=o.geometry.clone().applyMatrix4(o.matrixWorld),positions=geometry.getAttribute('position'),index=geometry.index;
  // Build a compact top-down collision mask, ignoring ropes hanging below the boards.
  for(let t=0;t<(index?.count??positions.count);t+=3){
   const ids=[0,1,2].map(k=>index?index.getX(t+k):t+k),v=ids.map(i=>new THREE.Vector3().fromBufferAttribute(positions,i));
   if(v.some(q=>q.y< -3||q.y>2))continue;
   const [a,b,c]=v,den=(b.z-c.z)*(a.x-c.x)+(c.x-b.x)*(a.z-c.z);if(Math.abs(den)<.015)continue;
   const x0=Math.max(0,Math.floor((Math.min(...v.map(q=>q.x))+8.5)/CELL)),x1=Math.min(COLS-1,Math.ceil((Math.max(...v.map(q=>q.x))+8.5)/CELL));
   const z0=Math.max(0,Math.floor((Math.min(...v.map(q=>q.z))+42)/CELL)),z1=Math.min(ROWS-1,Math.ceil((Math.max(...v.map(q=>q.z))+42)/CELL));
   for(let r=z0;r<=z1;r++)for(let col=x0;col<=x1;col++){
    const x=col*CELL-8.5,z=r*CELL-42,u=((b.z-c.z)*(x-c.x)+(c.x-b.x)*(z-c.z))/den,w=((c.z-a.z)*(x-c.x)+(a.x-c.x)*(z-c.z))/den;
    if(u>=-.01&&w>=-.01&&u+w<=1.01)mask[r*COLS+col]=1;
   }
  }
  for(let i=0;i<positions.count;i++)positions.setY(i,positions.getY(i)+ravineBridgeHeight(positions.getZ(i))-.55);
  geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();
  const mesh=new THREE.Mesh(geometry,o.material);mesh.name='Damaged wooden deck with ropes underneath';group.add(mesh);
 });
 const glow=new THREE.Mesh(new THREE.PlaneGeometry(65,98),new THREE.MeshBasicMaterial({color:'#8c2613',transparent:true,opacity:.4,side:THREE.DoubleSide}));
 glow.rotation.x=-Math.PI/2;glow.rotation.z=-Math.atan2(p.tz,p.tx);glow.position.set(p.x,-SURT_RAVINE_DEPTH-RAVINE_PIT_EXTRA_DEPTH+.2,p.z);root.add(glow);
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
