import * as THREE from 'three';
import {createMeshHeightSampler} from './muspelheimSurface';
export const ASH_VOLCANO_ASSET='Muspelheim_Ash_Volcano.glb';
export const ASH_VOLCANO_POSITION={x:0,z:-174.375};
export const ASH_VOLCANO_WIDTH=120;
export const ASH_VOLCANO_HEIGHT_SCALE=2.6;
export const ASH_VOLCANO_CREDIT={title:'#13 Ash Volcano — Ash Inktober2019',author:'Canary Games',url:'https://sketchfab.com/3d-models/13-ash-volcano-ash-inktober2019-b26cf44d4b604b51a86d0677089efc4a'};
/** Fit from the solid cone, never from the tall, transparent ash plume.
 * Only rock participates in walking and camera collision. */
export function createAshVolcano(model:THREE.Object3D,groundY=0){
 model.updateWorldMatrix(true,true);
 const rocks:THREE.Mesh[]=[],smoke:THREE.Mesh[]=[];
 model.traverse(o=>{if(o instanceof THREE.Mesh){const materials=Array.isArray(o.material)?o.material:[o.material];(materials.some(m=>m.name.includes('Smoke'))?smoke:rocks).push(o);}});
 if(!rocks.length||!smoke.length)throw Error('Ash volcano must contain both cone and smoke');
 const bounds=new THREE.Box3();rocks.forEach(o=>bounds.union(new THREE.Box3().setFromObject(o)));
 const center=bounds.getCenter(new THREE.Vector3()),size=bounds.getSize(new THREE.Vector3());
 const scale=ASH_VOLCANO_WIDTH/Math.max(size.x,size.z);
 const offset=new THREE.Group();offset.position.set(-center.x,-bounds.min.y,-center.z);offset.add(model);
 const fit=new THREE.Group();fit.scale.set(scale,scale*ASH_VOLCANO_HEIGHT_SCALE,scale);fit.add(offset);
 const root=new THREE.Group();root.name='Вулканическая сторожевая башня — центр Муспельхейма';root.position.set(ASH_VOLCANO_POSITION.x,groundY-1.8,ASH_VOLCANO_POSITION.z);root.add(fit);
 const time={value:0};
 rocks.forEach(o=>{o.receiveShadow=true;for(const material of Array.isArray(o.material)?o.material:[o.material])if(material instanceof THREE.MeshStandardMaterial){
  material.transparent=false;material.opacity=1;material.depthWrite=true;material.metalness=0;material.roughness=1;material.color.set('#9d969a');if(material.map)material.map.anisotropy=4;
  material.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
   #ifdef USE_EMISSIVEMAP
    float ashHeat=texture2D(emissiveMap,vEmissiveMapUv).r;
    float ashFlow=smoothstep(.02,.22,ashHeat);
    totalEmissiveRadiance=mix(vec3(.7,.045,.001),vec3(1.65,.32,.004),smoothstep(.12,.8,ashHeat))*ashFlow;
   #endif
  `);};material.customProgramCacheKey=()=> 'muspelheim-ash-orange-v1';
 }});
 smoke.forEach(o=>{o.renderOrder=2;for(const material of Array.isArray(o.material)?o.material:[o.material])if(material instanceof THREE.MeshStandardMaterial){
  material.transparent=true;material.depthWrite=false;material.side=THREE.DoubleSide;material.opacity=.24;material.roughness=1;material.metalness=0;
  material.color.set('#a6a09e');material.emissive.set('#756963');material.emissiveIntensity=.6;
  // Drift entire authored ash cards together; keep atlas UVs inside their cells.
  material.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <alphamap_fragment>',`#include <alphamap_fragment>
   diffuseColor.a=opacity*smoothstep(.035,.45,diffuseColor.a/max(opacity,.001));
  `);shader.uniforms.ashTime=time;shader.vertexShader='uniform float ashTime;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
   float ashRise=smoothstep(3.0,20.1,position.z);
   transformed.x+=sin(ashTime*.36+position.z*.32)*.1*ashRise;
   transformed.y+=cos(ashTime*.27+position.z*.24)*.07*ashRise;
  `);};material.customProgramCacheKey=()=> 'muspelheim-ash-drift-v1';
 }});
 root.updateWorldMatrix(true,true);
 // Clone rock references into an independent identity group for the static index.
 const solid=new THREE.Group();for(const rock of rocks){const copy=new THREE.Mesh(rock.geometry,rock.material);copy.applyMatrix4(rock.matrixWorld);solid.add(copy);}solid.updateWorldMatrix(true,true);
 const floorAt=createMeshHeightSampler(solid);
 const vent=new THREE.Vector3(ASH_VOLCANO_POSITION.x,new THREE.Box3().setFromObject(solid).max.y-8,ASH_VOLCANO_POSITION.z);
 return {root,floorAt,vent,update:(dt:number)=>{time.value+=dt;}};
}
