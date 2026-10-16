import * as THREE from 'three';
import {createRoadMask,ROAD_BOUNDS} from './muspelheimRoads';

// Preserve the left atlas panel for the lava ground. The road uses world-sized
// granite slabs so their proportions stay fixed across curves and junctions.
export function configureMuspelheimGround(root:THREE.Object3D,maxAnisotropy:number){
 const roadMask=createRoadMask();
 root.traverse(object=>{
  if(!(object instanceof THREE.Mesh))return;
  for(const material of Array.isArray(object.material)?object.material:[object.material]){
   const ground=material as THREE.MeshStandardMaterial,map=ground.map;if(!map)continue;
   // Undo the atlas UV inset before applying fourteen repetitions across the expanded ground.
   map.repeat.set(14/.495,14/.998);map.offset.set(-.001*14/.495,-.001*14/.998);
   map.wrapS=map.wrapT=THREE.ClampToEdgeWrapping;
   map.anisotropy=Math.min(8,maxAnisotropy);map.needsUpdate=true;
   ground.onBeforeCompile=shader=>{
    shader.uniforms.roadMask={value:roadMask};
    shader.vertexShader='varying float chasmBank;varying vec3 roadWorldPosition;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>\nroadWorldPosition=(modelMatrix*vec4(position,1.)).xyz;\nvec3 bankNormal=normalize(mat3(modelMatrix)*normal);\nfloat bankY=(modelMatrix*vec4(position,1.)).y;\nchasmBank=(1.-smoothstep(.65,.98,abs(bankNormal.y)))*smoothstep(.2,2.,-bankY);`);
    shader.fragmentShader='varying float chasmBank;varying vec3 roadWorldPosition;uniform sampler2D roadMask;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <map_pars_fragment>',`#include <map_pars_fragment>
     #ifdef USE_MAP
     vec2 groundHash(vec2 cell){return fract(sin(vec2(dot(cell,vec2(127.1,311.7)),dot(cell,vec2(269.5,183.3))))*43758.5453);}
     float graniteNoise(vec2 p){
      vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
      return mix(mix(groundHash(i).x,groundHash(i+vec2(1.,0.)).x,f.x),mix(groundHash(i+vec2(0.,1.)).x,groundHash(i+vec2(1.)).x,f.x),f.y);
     }
     // Staggered granite slabs with thin, softly glowing blue joints.
     vec4 graniteRoad(vec2 p){
      vec2 slabSize=vec2(5.4,4.0);
      float row=floor(p.y/slabSize.y);
      vec2 q=(p+vec2(mod(row,2.)*slabSize.x*.5,0.))/slabSize;
      vec2 cell=floor(q),f=fract(q);
      vec2 edge=min(f,1.-f)*slabSize;
      float distanceToJoint=min(edge.x,edge.y)+(graniteNoise(p*1.7)-.5)*.055;
      float aa=max(fwidth(distanceToJoint),.018);
      float joint=1.-smoothstep(.045-aa,.09+aa,distanceToJoint);
      float halo=1.-smoothstep(.06,.30+aa,distanceToJoint);
      float grain=graniteNoise(p*15.0),fleck=graniteNoise(p*32.0);
      float slabTone=.027+groundHash(cell).x*.016+graniteNoise(p*.7)*.012;
      vec3 stone=vec3(.78,.86,1.)*slabTone;
      stone+=(grain-.5)*.019+smoothstep(.80,.96,fleck)*.025;
      stone*=.64+.36*smoothstep(.08,.30,distanceToJoint);
      stone=mix(stone,vec3(.007,.014,.023),joint);
      return vec4(stone,joint*.65+halo*.16);
     }
     vec4 groundPatch(vec2 uv,vec2 cell){
      vec2 p=uv+groundHash(cell)*19.0;
      vec2 mirrored=1.0-abs(mod(p,2.0)-1.0);
      return texture2D(map,vec2(0.003,0.003)+mirrored*vec2(0.488,0.994));
     }
     vec4 groundBlend(vec2 uv){
      vec2 cell=floor(uv),f=fract(uv);f=f*f*(3.0-2.0*f);
      return mix(mix(groundPatch(uv,cell),groundPatch(uv,cell+vec2(1.,0.)),f.x),
       mix(groundPatch(uv,cell+vec2(0.,1.)),groundPatch(uv,cell+vec2(1.,1.)),f.x),f.y);
     }
     #endif`);
    shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#ifdef USE_MAP
     diffuseColor*=groundBlend(vMapUv);
     vec2 roadUv=(roadWorldPosition.xz-vec2(${ROAD_BOUNDS.minX},${ROAD_BOUNDS.minZ}))/vec2(${ROAD_BOUNDS.maxX-ROAD_BOUNDS.minX},${ROAD_BOUNDS.maxZ-ROAD_BOUNDS.minZ});
     float roadAmount=texture2D(roadMask,roadUv).r;
     roadAmount*=step(0.,roadUv.x)*step(roadUv.x,1.)*step(0.,roadUv.y)*step(roadUv.y,1.)*(1.-chasmBank);
     float roadGlow=0.;
     if(roadAmount>.001){
      vec4 granite=graniteRoad(roadWorldPosition.xz);
      diffuseColor.rgb=mix(diffuseColor.rgb,diffuse*granite.rgb,roadAmount);
      roadGlow=granite.a*roadAmount;
     }
     float bankGray=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
     diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.075,.079,.09)+bankGray*.13,chasmBank);
     #endif`);
    shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
     #ifdef USE_MAP
     totalEmissiveRadiance+=vec3(.035,.20,.38)*roadGlow;
     #endif`);
   };
   ground.customProgramCacheKey=()=> 'muspelheim-dark-granite-blue-joints-v5';
   ground.needsUpdate=true;
  }
 });
 return roadMask;
}
