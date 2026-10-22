import * as THREE from 'three';
import {RAVINE_CROSSINGS} from './muspelheimRavineCrossings';
import {SURT_RAVINE_LINE} from './muspelheimSurtRavine';
import {MINE_PATH} from './muspelheimMineEntrance';
import {RAVINE_LAVA_GLSL,type RavineLava} from './muspelheimRavineLava';
import {createMeshHeightSampler} from './muspelheimSurface';
export const CANYON_RIDGE_ASSET='Muspelheim_Canyon_Ridge.glb';
export const CANYON_RIDGE_CREDIT={title:'Volcán Paricutín',author:'Marco Sánchez',url:'https://sketchfab.com/3d-models/volcan-paricutin-cd66df19c33c49ad88a0bde2b7471b07'};
const lengths=[0];
for(let i=1;i<SURT_RAVINE_LINE.length;i++)lengths.push(lengths[i-1]+Math.hypot(SURT_RAVINE_LINE[i].x-SURT_RAVINE_LINE[i-1].x,SURT_RAVINE_LINE[i].z-SURT_RAVINE_LINE[i-1].z));
function frameAt(station:number){
 let lo=0,hi=lengths.length-1;while(hi-lo>1){const mid=(lo+hi)>>1;if(lengths[mid]<station)lo=mid;else hi=mid;}
 const a=SURT_RAVINE_LINE[lo],b=SURT_RAVINE_LINE[hi],d=lengths[hi]-lengths[lo],t=THREE.MathUtils.clamp((station-lengths[lo])/d,0,1);
 return {x:THREE.MathUtils.lerp(a.x,b.x,t),z:THREE.MathUtils.lerp(a.z,b.z,t),nx:-(b.z-a.z)/d,nz:(b.x-a.x)/d};
}
export const CANYON_RIDGE_LAYOUT=[
 {station:90,length:90,width:58,height:15,side:0,flip:false,mirror:false},
 {station:165,length:100,width:60,height:21,side:0,flip:true,mirror:false},
 {station:340,length:110,width:58,height:18,side:2,flip:false,mirror:true},
 {station:415,length:112,width:60,height:24,side:-2,flip:true,mirror:true},
 {station:490,length:110,width:58,height:17,side:2,flip:false,mirror:false},
 {station:565,length:112,width:60,height:23,side:-2,flip:true,mirror:false},
 {station:640,length:110,width:58,height:19,side:2,flip:false,mirror:true},
 {station:694,length:72,width:56,height:21,side:0,flip:true,mirror:true},
].map(p=>{const f=frameAt(p.station),craterFrame=frameAt(p.station+(p.flip?.09375:-.09375)*p.length),cross=p.side+(p.mirror?-.109375:.109375)*p.width;
 return {...p,x:f.x+f.nx*p.side,z:f.z+f.nz*p.side,crater:{x:craterFrame.x+craterFrame.nx*cross,z:craterFrame.z+craterFrame.nz*cross}};
});
export const CANYON_RIDGE_POSITION=CANYON_RIDGE_LAYOUT[2];
/** Broaden steep shoulders into walkable slopes. Two graph envelopes retain
 * the summits while pinning the buried skirt and protected access paths. */
function softenSlopes(geometry:THREE.BufferGeometry,base:Float32Array,edges:Float32Array){
 const p=geometry.getAttribute('position'),ids=geometry.index!,adj:Array<Array<{i:number;d:number}>>=Array.from({length:p.count},()=>[]);
 for(let j=0;j<ids.count;j+=3){const v=[ids.getX(j),ids.getX(j+1),ids.getX(j+2)];for(let k=0;k<3;k++){
  const a=v[k],b=v[(k+1)%3],d=Math.hypot(p.getX(a)-p.getX(b),p.getZ(a)-p.getZ(b))*.75;adj[a].push({i:b,d});adj[b].push({i:a,d});
 }}
 const initial=Array.from({length:p.count},(_,i)=>p.getY(i)-base[i]);
 const envelope=(h:number[])=>{const heap:Array<{i:number;h:number}>=[];
 const push=(entry:{i:number;h:number})=>{let k=heap.length;heap.push(entry);while(k){const parent=(k-1)>>1;if(heap[parent].h<=entry.h)break;heap[k]=heap[parent];k=parent;}heap[k]=entry;};
 const pop=()=>{const top=heap[0],last=heap.pop()!;if(heap.length){let k=0;while(k*2+1<heap.length){let child=k*2+1;if(child+1<heap.length&&heap[child+1].h<heap[child].h)child++;if(last.h<=heap[child].h)break;heap[k]=heap[child];k=child;}heap[k]=last;}return top;};
 h.forEach((v,i)=>push({i,h:v}));while(heap.length){const a=pop();if(a.h>h[a.i]+1e-7)continue;for(const b of adj[a.i])if(h[b.i]>a.h+b.d+1e-7){h[b.i]=a.h+b.d;push({i:b.i,h:h[b.i]});}}
 return h;};
 // First broaden steep shoulders upward, then constrain the result to the
 // buried skirt / protected paths. Work above terrain so the canyon banks
 // cannot drag a high plateau across the walkable valley.
 const upper=envelope(initial.map(h=>-h)).map(h=>-h);
 const final=envelope(upper.map((h,i)=>edges[i]>.999?initial[i]:h));
 final.forEach((h,i)=>p.setY(i,base[i]+h));
}
/** Reuse one GLB along the whole canyon, following its curved center line.
 * Craters and summits become actual walkable terrain, with blended low seams. */
export function createCanyonRidge(source:THREE.Object3D,sample:(x:number,z:number)=>number|null,lava:RavineLava){
 source.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(source),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
 if(Math.min(size.x,size.y,size.z)<=0)throw new Error('Canyon ridge has invalid bounds');
 const root=new THREE.Group();root.name='Цепь кратеров и вершин по каньону';
 const materialCopies=new Map<THREE.Material,THREE.MeshStandardMaterial>();
 for(const patch of CANYON_RIDGE_LAYOUT){const section=new THREE.Group();section.name=`Хребет ${patch.station}`;section.userData.ridgeStation=patch.station;root.add(section);
 const v=new THREE.Vector3();
 source.traverse(o=>{if(!(o instanceof THREE.Mesh))return;
  const geometry=o.geometry.clone().applyMatrix4(o.matrixWorld),p=geometry.getAttribute('position'),edges=new Float32Array(p.count),baseHeights=new Float32Array(p.count);
  for(let i=0;i<p.count;i++){
   v.fromBufferAttribute(p,i);let u=(v.x-center.x)/size.x,w=(v.z-center.z)/size.z;
   if(patch.flip)u=-u;if(patch.mirror)w=-w;
   const station=patch.station+u*patch.length,f=frameAt(station),across=w*patch.width+patch.side;
   const x=f.x+f.nx*across,z=f.z+f.nz*across;
   const edge=Math.min(.5-Math.abs(u),.5-Math.abs(w)),border=THREE.MathUtils.smoothstep(edge,0,.18);
   const bridge=THREE.MathUtils.smoothstep(Math.min(...RAVINE_CROSSINGS.map(c=>Math.abs(station-c.station))),55,68);
   const mine=THREE.MathUtils.smoothstep(Math.min(...MINE_PATH.map(p=>Math.hypot(p.x-x,p.z-z))),9,18);
   const ascent=z< -112&&z> -235?THREE.MathUtils.smoothstep(Math.abs(x+270),15,28):1;
   const descent=z> -115&&z<35?THREE.MathUtils.smoothstep(Math.abs(x+365),16,28):1;
   const protectedArea=bridge*mine*ascent*descent,fade=border*protectedArea;
   const y=sample(x,z);if(y==null)throw new Error('Canyon ridge is outside the terrain');baseHeights[i]=y;
   p.setXYZ(i,x,y+(v.y-bounds.min.y)/size.y*patch.height*fade-.9,z);edges[i]=1-THREE.MathUtils.smoothstep(edge,.02,.24)*protectedArea;
  }
  softenSlopes(geometry,baseHeights,edges);
  geometry.setAttribute('ridgeEdge',new THREE.BufferAttribute(edges,1));geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();
  const materials=(Array.isArray(o.material)?o.material:[o.material]).map(original=>{
   const cached=materialCopies.get(original);if(cached)return cached;
   const m=(original as THREE.MeshStandardMaterial).clone();m.color.set('#ffffff');m.roughness=1;m.metalness=0;if(m.map)m.map.anisotropy=4;
   m.onBeforeCompile=shader=>{
    Object.assign(shader.uniforms,lava.uniforms);
    shader.vertexShader='attribute float ridgeEdge;varying float ridgeBlend;varying vec3 rvWorldPosition;varying vec3 rvWorldNormal;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>\nridgeBlend=ridgeEdge;rvWorldPosition=(modelMatrix*vec4(transformed,1.)).xyz;rvWorldNormal=vec3(0.,1.,0.);`);
    shader.fragmentShader='varying float ridgeBlend;\n'+RAVINE_LAVA_GLSL+'\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
     float ridgeGray=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
     vec3 ridgeStone=vec3(.85,.86,.94)*ridgeGray*.8;
     diffuseColor.rgb=mix(ridgeStone,rvCrustTexture(rvWorldPosition.xz)*.92,ridgeBlend);
    `);
   };m.customProgramCacheKey=()=> 'muspelheim-canyon-ridge-basalt-v1';materialCopies.set(original,m);return m;
  });
  const mesh=new THREE.Mesh(geometry,materials.length===1?materials[0]:materials);mesh.receiveShadow=true;section.add(mesh);
 });
 }
 return {root,floorAt:createMeshHeightSampler(root)};
}
