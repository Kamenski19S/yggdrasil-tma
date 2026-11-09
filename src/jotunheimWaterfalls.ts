import * as THREE from 'three';
import type {createJotunheimTerrain} from './jotunheimTerrain';

// Two lightweight geometry-based reconstructions of our GLB experiments.
// No legacy scan, cliff, shoulder, foundation or terrain deformation is used.
export const WATERFALL_SITES=[
 {asset:'Jotunheim_First_Waterfall.glb',x:-145,z:180,title:'Первый водопад Йотунхейма'},
] as const;
type Terrain=ReturnType<typeof createJotunheimTerrain>;
const ROCKS=[0x595b5b,0x666865,0x74756e,0x4b5354,0x7e7b71,0x5f6369];
function colored(verts:number[],indices:number[],colors:number[],water=false){
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.setIndex(indices);g.computeVertexNormals();
 return new THREE.Mesh(g,new THREE.MeshStandardMaterial({vertexColors:true,roughness:water?.28:1,metalness:water?.08:0,transparent:water,opacity:water?.72:1,side:THREE.DoubleSide,depthWrite:!water}));
}
function rgb(hex:number){const c=new THREE.Color(hex);return [c.r,c.g,c.b];}
function panel(side:'front'|'back'|'left'|'right'){
 const nx=26,nz=24,verts:number[]=[],ids:number[]=[],cs:number[]=[];
 const seed={front:3,back:6,left:9,right:12}[side];
 for(let j=0;j<=nz;j++)for(let i=0;i<=nx;i++){
  const x=-9+18*i/nx,h=14*j/nz,u=i/nx,v=j/nz;
  const edge=Math.pow(Math.max(0,Math.sin(Math.PI*u)),.45)*Math.pow(Math.max(.04,Math.sin(Math.PI*v)),.3);
  const bump=(Math.sin(u*27+v*13+seed)*.23+Math.sin(u*52-v*34+seed)*.13)*edge;
  const recess=1.1*Math.exp(-Math.pow(x/3.3,8))*Math.pow(Math.sin(Math.PI*Math.min(v,.99)),.3);
  const p=side==='front'?[x,h,-5+bump+recess]:side==='back'?[-x,h,5+bump]:side==='left'?[-9+bump,h,x*5/9]:[9+bump,h,-x*5/9];
  verts.push(...p);cs.push(...rgb(ROCKS[(Math.floor(i/4)+Math.floor(j/3)+seed)%ROCKS.length]));
 }
 for(let j=0;j<nz;j++)for(let i=0;i<nx;i++){const a=j*(nx+1)+i,b=a+1,c=a+nx+1,d=c+1;ids.push(a,c,b,b,c,d);}
 return colored(verts,ids,cs);
}
function summit(){const verts:number[]=[],idx:number[]=[],cs:number[]=[];const nx=30,nz=18;
 for(let j=0;j<=nz;j++)for(let i=0;i<=nx;i++){const x=-9+i*18/nx,z=-5+j*10/nz,y=Math.abs(x)<2.3?14.07:14+.3*Math.sin(x*.8)*Math.sin(z*.9);verts.push(x,y,z);cs.push(...rgb(ROCKS[(Math.floor(i/4)+Math.floor(j/3))%ROCKS.length]));}
 for(let j=0;j<nz;j++)for(let i=0;i<nx;i++){const a=j*(nx+1)+i,b=a+1,c=a+nx+1,d=c+1;idx.push(a,b,c,b,d,c);}return colored(verts,idx,cs);
}
function organic(){const verts:number[]=[],idx:number[]=[],cs:number[]=[],na=96,nz=40;
 for(let j=0;j<=nz;j++){const h=17*j/nz,t=j/nz,shrink=1-.19*t*t;
  for(let i=0;i<na;i++){const a=i*2*Math.PI/na,c=Math.cos(a),s=Math.sin(a),jag=.48*Math.sin(7*a+h*.56)+.29*Math.sin(17*a-h*.8)+.16*Math.sin(41*a+h*.65);
   let x=10*c*shrink*(1+jag/11),z=6*s*shrink*(1+jag/11);
   if(s<-.4&&Math.abs(x)<2.75)z+=Math.pow(Math.sin(Math.PI*t),.4);
   x+=.17*Math.sin(h*2.6+a*11)*Math.sin(Math.PI*t);z+=.14*Math.sin(h*3.6+a*13)*Math.sin(Math.PI*t);
   verts.push(x,h,z);cs.push(...rgb(ROCKS[(Math.floor(a*10)+Math.floor(j/4))%ROCKS.length]));
  }
 }
 for(let j=0;j<nz;j++)for(let i=0;i<na;i++){const a=j*na+i,b=j*na+(i+1)%na,c=(j+1)*na+i,d=(j+1)*na+(i+1)%na;idx.push(a,b,c,b,d,c);}
 // close the peak and bottom so the rock is volumetric from all angles
 for(let cap=0;cap<2;cap++){const center=verts.length/3;verts.push(0,cap?17.4:0,0);cs.push(...rgb(0x606662));const ring=cap?nz*na:0;for(let i=0;i<na;i++){const a=ring+i,b=ring+(i+1)%na;if(cap)idx.push(a,b,center);else idx.push(b,a,center);}}
 return colored(verts,idx,cs);
}
function addWater(group:THREE.Group,front:number,height:number){
 for(let layer=0;layer<4;layer++){const nx=10,nz=55,verts:number[]=[],idx:number[]=[],cs:number[]=[];
  for(let j=0;j<=nz;j++)for(let i=0;i<=nx;i++){const h=.5+(height-.5)*j/nz,t=h/height,u=-1+2*i/nx;const x=u*1.6*(1+.18*(1-t)**2)+.12*Math.sin(t*16+layer*.6),z=front-.18-layer*.035+.12*Math.sin(h*2+u*6+layer*2);
   verts.push(x,h,z);cs.push(...rgb(Math.sin(h*4+u*19+layer)**6>.6?0xc0f1f9:0x59b5d8));}
  for(let j=0;j<nz;j++)for(let i=0;i<nx;i++){const a=j*(nx+1)+i,b=a+1,c=a+nx+1,d=c+1;idx.push(a,b,c,b,d,c);}
  group.add(colored(verts,idx,cs,true));
 }
 const pool=new THREE.Mesh(new THREE.CylinderGeometry(3.7,3.7,.055,40),new THREE.MeshStandardMaterial({color:0x4b9db6,transparent:true,opacity:.76,roughness:.35}));pool.scale.z=.58;pool.position.set(0,.08,front-1.05);group.add(pool);
 for(let i=0;i<24;i++){const a=2*Math.PI*i/24,r=1+.18*(i%4),p=new THREE.Mesh(new THREE.IcosahedronGeometry(.22+(i%3)*.05,0),new THREE.MeshStandardMaterial({color:0xc3e2ef,transparent:true,opacity:.86,roughness:.9}));p.scale.set(1.6,.35,1);p.position.set(r*Math.cos(a),.24,front-1.05+r*.6*Math.sin(a));group.add(p);}
}
function makeVariant(index:number){const g=new THREE.Group();g.name=index?'Experimental waterfall - continuous cliff':'Experimental waterfall - assembled panels';
 if(index){g.add(organic());addWater(g,-5.7,16.2);}else{for(const side of ['front','back','left','right'] as const)g.add(panel(side));g.add(summit());addWater(g,-5.35,14);}
 return g;
}
// Prefer the original user-made, image-textured GLB. Keep a temporary fallback
// only while its binary asset has not yet been uploaded to GitHub.
export function installJotunheimWaterfalls(terrain:Terrain, original?:THREE.Object3D){
 const root=new THREE.Group();root.name='Jotunheim first waterfall';
 const s=WATERFALL_SITES[0],base=terrain.height(s.x,s.z)??0;
 const v=new THREE.Group();
 if(original){
  const bounds=new THREE.Box3().setFromObject(original),center=bounds.getCenter(new THREE.Vector3());
  original.position.x-=center.x;
  original.position.z-=center.z;
  original.traverse(child=>{if(child instanceof THREE.Mesh){child.castShadow=true;child.receiveShadow=true;}});
  v.add(original);
 }else{
  const fallback=makeVariant(1);fallback.scale.setScalar(2.5);v.add(fallback);
 }
 v.position.set(s.x,base-.3,s.z);root.add(v);
 return {root,viewpoints:[{x:s.x,z:s.z-65,yaw:Math.PI}],height:(_x:number,_z:number,floor:number|null)=>floor,sites:WATERFALL_SITES};
}
