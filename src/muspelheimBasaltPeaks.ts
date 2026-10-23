import * as THREE from 'three';
import {makeBasaltWall,type WallRock} from './muspelheimRockWalls';
/** Sparse landmarks: seven on the upper plain and three along the canyon flanks. */
export const BASALT_PEAK_SITES=[
 {kind:0,x:-230,z:45,width:18,depth:16,height:36,yaw:.4,canyon:false},
 {kind:1,x:325,z:55,width:24,depth:19,height:70,yaw:-.7,canyon:false},
 {kind:0,x:435,z:-130,width:36,depth:28,height:320,yaw:1.2,canyon:false},
 {kind:2,x:185,z:-95,width:22,depth:17,height:48,yaw:.9,canyon:false},
 {kind:1,x:170,z:-280,width:26,depth:22,height:135,yaw:-.3,canyon:false},
 {kind:0,x:170,z:-415,width:32,depth:26,height:380,yaw:1.8,canyon:false},
 {kind:2,x:-295,z:30,width:28,depth:22,height:92,yaw:-1.1,canyon:false},
 {kind:1,x:-220,z:-172,width:16,depth:14,height:110,yaw:.6,canyon:true},
 {kind:0,x:-40,z:-290,width:20,depth:17,height:250,yaw:1.5,canyon:true},
 {kind:2,x:-95,z:-390,width:14,depth:13,height:75,yaw:-.5,canyon:true},
] as const;
export function basaltPeakLayout(floor:(x:number,z:number)=>number|null):WallRock[]{
 return BASALT_PEAK_SITES.map(site=>{
  // Seat the whole footprint below its lowest sampled surface, including slopes.
  const c=Math.cos(site.yaw),s=Math.sin(site.yaw),heights:number[]=[];
  for(const u of [-.5,0,.5])for(const v of [-.5,0,.5]){const y=floor(site.x+c*u*site.width+s*v*site.depth,site.z-s*u*site.width+c*v*site.depth);if(y!=null&&Number.isFinite(y))heights.push(y);}
  if(heights.length!==9)throw Error('Basalt peak extends outside terrain');
  return {...site,y:Math.min(...heights)-2};
 });
}
/** Reuse the existing cliff GLBs with tapered silhouettes and layered weathered basalt. */
export function createBasaltPeaks(source:THREE.Object3D,kind:number,rocks:WallRock[],anisotropy:number){
 const root=makeBasaltWall(source,kind,rocks,anisotropy);root.name='Scattered basalt peaks '+kind;
 root.traverse(o=>{if(!(o instanceof THREE.InstancedMesh))return;
  const p=o.geometry.getAttribute('position');for(let i=0;i<p.count;i++){const y=THREE.MathUtils.clamp(p.getY(i),0,1),taper=1-.67*Math.pow(y,1.25);p.setX(i,p.getX(i)*taper+.065*Math.sin(y*3+kind)*y);p.setZ(i,p.getZ(i)*taper);}
  o.geometry.computeVertexNormals();o.geometry.computeBoundingBox();o.geometry.computeBoundingSphere();o.computeBoundingSphere();
  const material=o.material as THREE.MeshStandardMaterial,previous=material.onBeforeCompile;
  material.onBeforeCompile=(shader,renderer)=>{previous.call(material,shader,renderer);
   shader.vertexShader='varying vec3 peakStonePosition;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
    vec4 peakPoint=vec4(position,1.);
    #ifdef USE_INSTANCING
     peakPoint=instanceMatrix*peakPoint;
    #endif
    peakStonePosition=(modelMatrix*peakPoint).xyz;`);
   shader.fragmentShader='varying vec3 peakStonePosition;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
    float grain=sin(dot(peakStonePosition,vec3(7.3,11.7,4.1)))*sin(dot(peakStonePosition,vec3(13.1,3.7,9.2)));
    float layers=sin(peakStonePosition.y*.85+sin(peakStonePosition.x*.24)+sin(peakStonePosition.z*.18));
    float streaks=pow(.5+.5*sin(peakStonePosition.x*1.8+peakStonePosition.z*1.3+sin(peakStonePosition.y*.035)),10.);
    diffuseColor.rgb*=vec3(.91,.94,1.)*(.96+.13*grain*(1.-smoothstep(.4,1.5,length(fwidth(peakStonePosition))*10.))+.09*layers-.16*streaks);`);
  };material.customProgramCacheKey=()=> 'muspelheim-weathered-basalt-peaks-v1';material.needsUpdate=true;
 });return root;
}
