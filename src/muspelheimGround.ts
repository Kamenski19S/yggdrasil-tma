import * as THREE from 'three';
import {createRoadMask,ROAD_BOUNDS} from './muspelheimRoads';

// The GLB embeds a two-panel atlas: ground on the left, road on the right.
// Keep samples inset from the white divider and the outer edges.
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
     vec2 roadTile=1.-abs(mod(roadWorldPosition.xz/18.,2.)-1.);
     vec4 roadColor=texture2D(map,vec2(.507,.003)+roadTile*vec2(.486,.994));
     diffuseColor.rgb=mix(diffuseColor.rgb,diffuse*roadColor.rgb,roadAmount);
     float bankGray=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
     diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.075,.079,.09)+bankGray*.13,chasmBank);
     #endif`);
   };
   ground.customProgramCacheKey=()=> 'muspelheim-ground-roads-v3';
   ground.needsUpdate=true;
  }
 });
 return roadMask;
}
