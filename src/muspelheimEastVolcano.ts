import {createMeshHeightSampler} from './muspelheimSurface';
import * as THREE from 'three';
export const EAST_VOLCANO_ASSET='Muspelheim_East_Volcano.glb';
export const EAST_VOLCANO_POSITION={x:330,z:-345};
export const EAST_VOLCANO_WIDTH=180;
export const EAST_VOLCANO_DEPTH=270;
export const EAST_VOLCANO_HEIGHT_SCALE=1.2;
export const EAST_VOLCANO_CREDIT={title:'Volcano',author:'k3ddesign',url:'https://sketchfab.com/3d-models/volcano-0aa90a20d5cb47de90ec5d1bcd5aff31'};
/** A smaller, separate location on the eastern plain. Preserve the authored
 * crater, extend the rear skirt to the wall, and bury the outer edge. */
export function createEastVolcano(model:THREE.Object3D,groundY=0){
 model.updateWorldMatrix(true,true);
 const original=new THREE.Box3().setFromObject(model),size=original.getSize(new THREE.Vector3()),center=original.getCenter(new THREE.Vector3());
 if(Math.min(size.x,size.y,size.z)<=0)throw new Error('Eastern volcano has invalid bounds');
 const scale=EAST_VOLCANO_WIDTH/Math.max(size.x,size.z);
 const offset=new THREE.Group();offset.position.set(-center.x,-original.min.y,-center.z);offset.add(model);
 const fit=new THREE.Group();fit.scale.set(EAST_VOLCANO_WIDTH/size.x,scale*EAST_VOLCANO_HEIGHT_SCALE,EAST_VOLCANO_DEPTH/size.z);fit.add(offset);
 const root=new THREE.Group();root.name='Второй вулкан — восток Муспельхейма';root.position.set(EAST_VOLCANO_POSITION.x,groundY,EAST_VOLCANO_POSITION.z);root.add(fit);root.updateWorldMatrix(true,true);
 let rimY=groundY;const v=new THREE.Vector3();
 model.traverse(o=>{if(!(o instanceof THREE.Mesh))return;
  const p=o.geometry.getAttribute('position');for(let i=0;i<p.count;i++){
   v.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);
   if(Math.abs(v.x-EAST_VOLCANO_POSITION.x)>EAST_VOLCANO_WIDTH*.46||Math.abs(v.z-EAST_VOLCANO_POSITION.z)>EAST_VOLCANO_DEPTH*.46)rimY=Math.max(rimY,v.y);
  }
  o.receiveShadow=true;
  for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial){
   m.color.set('#94949d');m.roughness=1;m.metalness=0;m.emissiveIntensity=.65;
   if(m.map)m.map.anisotropy=4;
   // Use the authored emissive texture as a mask, replacing its muted brown-red
   // with the bright orange / amber palette of the surrounding lava ground.
   m.onBeforeCompile=shader=>{
    shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
     #ifdef USE_EMISSIVEMAP
      vec3 eastSource=texture2D(emissiveMap,vEmissiveMapUv).rgb;
      float eastHeat=smoothstep(.004,.35,eastSource.r);
      float eastFlow=smoothstep(.002,.035,eastSource.r);
      vec3 eastOrange=mix(vec3(.65,.035,.001),vec3(1.65,.32,.004),eastHeat);
      totalEmissiveRadiance=eastOrange*eastFlow;
      diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.38,.045,.002),eastFlow*.65);
     #endif
    `);
   };
   m.customProgramCacheKey=()=> 'muspelheim-east-volcano-orange-v1';
  }
 });
 root.position.y-=Math.max(.8,rimY-groundY+.8);root.updateWorldMatrix(true,true);
 // Index the real triangles in small XZ cells. Walking and camera checks avoid
 // repeated raycasts over the whole model, including its hollow crater.
 return {root,floorAt:createMeshHeightSampler(root)};
}
