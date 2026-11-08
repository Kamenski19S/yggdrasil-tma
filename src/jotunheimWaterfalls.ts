import * as THREE from 'three';
import {createJotunheimSurfaceIndex,type createJotunheimTerrain} from './jotunheimTerrain';
export const WATERFALL_SITES=[
 {asset:'Jotunheim_Waterfall_Valley.glb',x:-300,z:150,height:140,front:1,sink:16,yaw:Math.PI/2,title:'Первый водопад',author:'Digitise3D',authorUrl:'https://sketchfab.com/Digitise3D',sourceUrl:'https://sketchfab.com/3d-models/waterfall-d2584b93416a4bf6b543e520a8583d5d'},
 {asset:'Jotunheim_Waterfall_Hengifoss.glb',x:260,z:-230,height:180,front:1,sink:28,yaw:0,title:'Hengifoss waterfall',author:'matousekfoto',authorUrl:'https://sketchfab.com/matousekfoto',sourceUrl:'https://sketchfab.com/3d-models/hengifoss-waterfall-f522842a45114d208361423730607c74'},
 {asset:'Jotunheim_Waterfall_Mountain.glb',x:-240,z:-570,height:110,front:-1,sink:25,yaw:Math.PI,title:'Day 243: Waterfall',author:'alban',authorUrl:'https://sketchfab.com/alban',sourceUrl:'https://sketchfab.com/3d-models/day-243-waterfall-abc802469b564113b104b1323c4c7eee'},
] as const;
export const WATERFALL_CLIFF_ASSET='Muspelheim_Basalt_Cliff.glb';
export const WATERFALL_CLIFF_CREDIT={title:'Cliff | Low-Poly | Game-ready',author:'kEam',sourceUrl:'https://sketchfab.com/3d-models/cliff-low-poly-game-ready-918dc8e1b1f0443993a251c1302510bf'};
const smooth=(n:number)=>{const t=THREE.MathUtils.clamp(n,0,1);return t*t*(3-2*t);};
type Site={x:number;z:number;height:number;width:number;depth:number;base:number;front:number};
/** A refined hill behind each scan closes its cut rear edge into the original
 * mountain. Interpolated attributes preserve the biome mask and original UVs. */
function shapeMountains(terrain:ReturnType<typeof createJotunheimTerrain>,sites:Site[]){
 terrain.root.updateMatrixWorld(true);
 terrain.root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  const source:THREE.BufferGeometry=o.geometry,entries=Object.entries(source.attributes),offsets:number[]=[];let stride=0;
  for(const [,a] of entries){offsets.push(stride);stride+=a.itemSize;}
  const pi=offsets[entries.findIndex(([n])=>n==='position')],out=entries.map(()=>[] as number[]),world=new THREE.Vector3(),inverse=new THREE.Matrix4().copy(o.matrixWorld).invert();
  const read=(index:number)=>entries.flatMap(([,a])=>Array.from({length:a.itemSize},(_,c)=>a.getComponent(index,c)));
  const pos=(v:number[])=>new THREE.Vector3(v[pi],v[pi+1],v[pi+2]).applyMatrix4(o.matrixWorld);
  const emit=(v:number[])=>entries.forEach(([,a],j)=>{for(let c=0;c<a.itemSize;c++)out[j].push(v[offsets[j]+c]);});
  function triangle(a:number[],b:number[],c:number[],depth=0){
   const p=[pos(a),pos(b),pos(c)];
   const nearby=sites.some(s=>Math.min(...p.map(v=>v.x))<s.x+s.width&&Math.max(...p.map(v=>v.x))>s.x-s.width&&Math.min(...p.map(v=>v.z))<s.z+s.depth&&Math.max(...p.map(v=>v.z))>s.z-s.depth*1.2);
   const lengths=p.map((v,i)=>v.distanceToSquared(p[(i+1)%3])),edge=lengths.indexOf(Math.max(...lengths));
   if(nearby&&lengths[edge]>144&&depth<18){const vs=[a,b,c],u=vs[edge],v=vs[(edge+1)%3],w=vs[(edge+2)%3],mid=u.map((n,i)=>(n+v[i])/2);triangle(u,mid,w,depth+1);triangle(mid,v,w,depth+1);}else{emit(a);emit(b);emit(c);}
  }
  const count=source.index?.count??source.getAttribute('position').count;
  for(let i=0;i<count;i+=3)triangle(...[0,1,2].map(k=>read(source.index?source.index.getX(i+k):i+k)) as [number[],number[],number[]]);
  const geometry=new THREE.BufferGeometry();entries.forEach(([n,a],j)=>geometry.setAttribute(n,new THREE.Float32BufferAttribute(out[j],a.itemSize)));
  const p=geometry.getAttribute('position');
  for(let i=0;i<p.count;i++){
   world.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);const original=world.y;
   for(const s of sites){
    const localZ=(world.z-s.z)*s.front;
    const dx=(world.x-s.x)/(s.width*.85),dz=(localZ+s.depth*.28)/(s.depth*.9);
    const radial=Math.max(0,1-dx*dx-dz*dz);
    const rear=1-smooth((localZ+s.depth*.20)/(s.depth*.25));
    world.y=Math.max(world.y,original+s.height*.85*smooth(radial)*rear);
    // Blend the foot into the valley without a raised rectangular platform.
    const apron=Math.max(0,1-((world.x-s.x)/(s.width*.6))**2-((localZ-s.depth*.43)/(s.depth*.36))**2);
    world.y=THREE.MathUtils.lerp(world.y,s.base-3,smooth(apron)*.85);
   }
   world.applyMatrix4(inverse);p.setXYZ(i,world.x,world.y,world.z);
  }
  geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();o.geometry=geometry;source.dispose();
 });terrain.rebuild();
}
function fit(root:THREE.Object3D,width:number,height:number,depth:number){
 root.updateMatrixWorld(true);const b=new THREE.Box3().setFromObject(root),size=b.getSize(new THREE.Vector3()),center=b.getCenter(new THREE.Vector3()),wrapper=new THREE.Group();wrapper.add(root);
 wrapper.scale.set(width/size.x,height/size.y,depth/size.z);root.position.sub(center);root.position.y+=size.y/2;return wrapper;
}
/** Static landscape only: no animation mixer, new river, cave or water effect. */
export function installJotunheimWaterfalls(models:THREE.Object3D[],cliff:THREE.Object3D,terrain:ReturnType<typeof createJotunheimTerrain>){
 const root=new THREE.Group();root.name='Three waterfall mountain sanctuaries';
 const sites:Site[]=models.map((m,i)=>{const def=WATERFALL_SITES[i],b=new THREE.Box3().setFromObject(m),size=b.getSize(new THREE.Vector3()),scale=def.height/size.y,width=size.x*scale,depth=size.z*scale;return {...def,width,depth,base:terrain.height(def.x,def.z+def.front*depth*.45)??0};});
 shapeMountains(terrain,sites);
 // Cliff materials are shared by all nine framing pieces. Protect green moss
 // while grading only the exposed rock; the original Muspelheim asset is intact.
 const cliffMaterials=new Map<THREE.Material,THREE.Material>();
 cliff.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const adapt=(m:THREE.Material)=>{
  if(cliffMaterials.has(m))return cliffMaterials.get(m)!;
  const source=m as THREE.MeshStandardMaterial,material=new THREE.MeshBasicMaterial({map:source.map,color:0xffffff,side:THREE.DoubleSide});
  material.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
   float keepGreen=smoothstep(.005,.07,diffuseColor.g-max(diffuseColor.r,diffuseColor.b));
   float gray=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(gray)*vec3(.94,.98,1.02)+.025,.55*(1.-keepGreen));`);};
  material.customProgramCacheKey=()=> 'jotunheim-cliff-preserve-green-v1';cliffMaterials.set(m,material);return material;
 };o.material=Array.isArray(o.material)?o.material.map(adapt):adapt(o.material);});
 sites.forEach((s,i)=>{
  const land=fit(models[i],s.width,s.height,s.depth);land.rotation.y=WATERFALL_SITES[i].yaw;land.position.set(s.x,s.base-WATERFALL_SITES[i].sink,s.z);land.name=WATERFALL_SITES[i].title;root.add(land);
  // Overlapping shoulders cover the scan borders; a rear cap joins the ridge.
  for(const side of [-1,1,0]){
   const back=side===0,model=cliff.clone(true),width=s.width*(back?1.18:.42),height=s.height*(back?.95:.84),depth=s.depth*(back?.42:.72),piece=fit(model,width,height,depth);
   piece.position.set(s.x+side*s.width*.49,s.base-14,s.z-s.front*s.depth*(back?.29:.06));piece.rotation.y=(s.front<0?Math.PI:0)+side*.18;piece.name=`Waterfall ${i+1} ${back?'rear cap':'rock shoulder'}`;root.add(piece);
  }
 });root.updateMatrixWorld(true);
 const index=createJotunheimSurfaceIndex(root,20);
 const height=(x:number,z:number,floor:number|null)=>{const y=index.height(x,z);return y==null?floor:floor==null?y:Math.max(y,floor);};
 const viewpoints=sites.map(s=>({x:s.x,z:s.z+s.front*(s.depth*.6+45),yaw:s.front<0?Math.PI:0}));
 return {root,sites,height,viewpoints};
}
