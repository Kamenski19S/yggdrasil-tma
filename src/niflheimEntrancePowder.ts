import * as THREE from 'three';

// Powder belongs to the stone material: no additional snow slabs or silhouettes.
export function addEntrancePowder(frame:THREE.Object3D){
  const coated=new Map<THREE.Material,THREE.Material>();
  frame.traverse((object:any)=>{
    if(!object.isMesh)return;
    const coat=(source:THREE.Material)=>{
      if(source.name!=='floor'||!(source instanceof THREE.MeshStandardMaterial))return source;
      if(coated.has(source))return coated.get(source)!;
      const material=source.clone();material.roughness=1;
      material.customProgramCacheKey=()=> 'nifl-stone-powder-v1';
      material.onBeforeCompile=shader=>{
        const varyings='varying vec3 vSnowWorldPosition;\nvarying vec3 vSnowWorldNormal;\n';
        shader.vertexShader=varyings+shader.vertexShader.replace('#include <worldpos_vertex>',`#include <worldpos_vertex>
          vSnowWorldPosition=(modelMatrix*vec4(transformed,1.0)).xyz;
          vSnowWorldNormal=normalize(mat3(modelMatrix)*objectNormal);`);
        shader.fragmentShader=varyings+`
          float snowHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
          float snowNoise(vec3 p){
            vec3 cell=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
            return mix(mix(mix(snowHash(cell),snowHash(cell+vec3(1,0,0)),f.x),
                           mix(snowHash(cell+vec3(0,1,0)),snowHash(cell+vec3(1,1,0)),f.x),f.y),
                       mix(mix(snowHash(cell+vec3(0,0,1)),snowHash(cell+vec3(1,0,1)),f.x),
                           mix(snowHash(cell+vec3(0,1,1)),snowHash(cell+vec3(1,1,1)),f.x),f.y),f.z);
          }
        `+shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
          float snowPatch=snowNoise(vSnowWorldPosition*.75)*.65+snowNoise(vSnowWorldPosition*2.8)*.35;
          float snowUp=max(0.0,normalize(vSnowWorldNormal).y);
          float powder=smoothstep(.43,.67,snowPatch+snowUp*.15);
          float snowGrain=.94+.06*snowNoise(vSnowWorldPosition*32.0);
          diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.87,.94,.97)*snowGrain,powder*.96);
        `);
      };
      coated.set(source,material);return material;
    };
    object.material=Array.isArray(object.material)?object.material.map(coat):coat(object.material);
  });
}
