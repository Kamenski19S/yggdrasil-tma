import * as THREE from 'three';
import {createRoadMask,ROAD_BOUNDS} from './muspelheimRoads';
import {loadCobbleTextures} from './muspelheimCobble';

// Keep the original stone layout. Its mortar mask exposes the same lava ground
// beneath the road, including the ground's UVs, shading and surface properties.
export function configureMuspelheimGround(root:THREE.Object3D,maxAnisotropy:number,assetBase:string){
 const roadMask=createRoadMask(),cobble=loadCobbleTextures(assetBase,maxAnisotropy);
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
    shader.uniforms.cobbleColor={value:cobble.color};shader.uniforms.cobbleSurface={value:cobble.surface};shader.uniforms.cobbleNormal={value:cobble.normal};
    shader.vertexShader='varying float chasmBank;varying vec3 roadWorldPosition;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>\nroadWorldPosition=(modelMatrix*vec4(position,1.)).xyz;\nvec3 bankNormal=normalize(mat3(modelMatrix)*normal);\nfloat bankY=(modelMatrix*vec4(position,1.)).y;\nchasmBank=(1.-smoothstep(.65,.98,abs(bankNormal.y)))*smoothstep(.2,2.,-bankY);`);
    shader.fragmentShader='varying float chasmBank;varying vec3 roadWorldPosition;uniform sampler2D roadMask;uniform sampler2D cobbleColor;uniform sampler2D cobbleSurface;uniform sampler2D cobbleNormal;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <map_pars_fragment>',`#include <map_pars_fragment>
     #ifdef USE_MAP
     vec2 groundHash(vec2 cell){return fract(sin(vec2(dot(cell,vec2(127.1,311.7)),dot(cell,vec2(269.5,183.3))))*43758.5453);}
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
     vec2 cobbleUv=roadWorldPosition.xz/32.;
     vec3 roadSurface=texture2D(cobbleSurface,cobbleUv).rgb;
     // AO is white on stone and dark inside gaps: apply every road property only to stone.
     float stoneAmount=roadAmount*smoothstep(.40,.72,roadSurface.r);
     vec3 roadColor=texture2D(cobbleColor,cobbleUv).rgb;
     diffuseColor.rgb=mix(diffuseColor.rgb,diffuse*roadColor*(.80+.20*roadSurface.r),stoneAmount);
     float bankGray=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
     diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.075,.079,.09)+bankGray*.13,chasmBank);
     #endif`);
    shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
     #ifdef USE_MAP
     vec3 cobbleBump=texture2D(cobbleNormal,cobbleUv).xyz*2.-1.;
     cobbleBump.xy*=.65;
     vec3 cobbleViewNormal=normalize(mat3(viewMatrix)*vec3(cobbleBump.x,cobbleBump.z,cobbleBump.y));
     normal=normalize(mix(normal,cobbleViewNormal,stoneAmount));
     #endif`);
    shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
     #ifdef USE_MAP
     roughnessFactor=mix(roughnessFactor,max(.75,roadSurface.g),stoneAmount);
     #endif`);
   };
   ground.customProgramCacheKey=()=> 'muspelheim-cobble-open-lava-gaps-v9';
   ground.needsUpdate=true;
  }
 });
 return {ready:cobble.ready,dispose:()=>{roadMask.dispose();cobble.dispose();}};
}
