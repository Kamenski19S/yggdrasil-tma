import * as THREE from 'three';

// The GLB embeds a two-panel atlas. Only the left panel is ground;
// the white divider and the road on the right must never enter a sample.
export function configureMuspelheimGround(root:THREE.Object3D,maxAnisotropy:number){
 root.traverse(object=>{
  if(!(object instanceof THREE.Mesh))return;
  for(const material of Array.isArray(object.material)?object.material:[object.material]){
   const ground=material as THREE.MeshStandardMaterial,map=ground.map;if(!map)continue;
   // Undo the atlas UV inset before applying fourteen repetitions across the expanded ground.
   map.repeat.set(14/.495,14/.998);map.offset.set(-.001*14/.495,-.001*14/.998);
   map.wrapS=map.wrapT=THREE.ClampToEdgeWrapping;
   map.anisotropy=Math.min(8,maxAnisotropy);map.needsUpdate=true;
   ground.onBeforeCompile=shader=>{
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
     #endif`);
   };
   ground.customProgramCacheKey=()=> 'muspelheim-ground-atlas-blend-v1';
   ground.needsUpdate=true;
  }
 });
}
