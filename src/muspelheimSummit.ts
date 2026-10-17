import * as THREE from 'three';
import {loadCobbleTextures} from './muspelheimCobble';
import {createChasmLava} from './muspelheimChasm';
import {VOLCANO_POSITION} from './muspelheimVolcano';
import {SURT_TOWER_BASE_Y} from './muspelheimSurtTower';
export const SUMMIT_RADIUS=78;
export const SUMMIT_APPROACH_RADIUS=115;
export const SUMMIT_FLOOR_Y=SURT_TOWER_BASE_Y+.05;
export function summitContains(x:number,z:number){return z>=-458.75&&Math.hypot(x-VOLCANO_POSITION.x,z-VOLCANO_POSITION.z)<=SUMMIT_RADIUS;}
export function summitHeight(x:number,z:number){if(z< -458.75)return null;const r=Math.hypot(x-VOLCANO_POSITION.x,z-VOLCANO_POSITION.z);return r<=SUMMIT_APPROACH_RADIUS?SUMMIT_FLOOR_Y*(1-THREE.MathUtils.smoothstep(r,SUMMIT_RADIUS,SUMMIT_APPROACH_RADIUS)):null;}
/** Lower projecting rocks inside the bowl; retain the sloping outer volcanic rim. */
export function clearSummitBowl(root:THREE.Object3D){
 root.updateWorldMatrix(true,true);
 const v=new THREE.Vector3();
 root.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.getAttribute('position'),inverse=o.matrixWorld.clone().invert();
  for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);const radius=Math.hypot(v.x-VOLCANO_POSITION.x,v.z-VOLCANO_POSITION.z);
   if(radius<SUMMIT_APPROACH_RADIUS){v.y=Math.min(v.y,(summitHeight(v.x,Math.max(-458.75,v.z))??0)-.5);v.applyMatrix4(inverse);p.setXYZ(i,v.x,v.y,v.z);}
  }p.needsUpdate=true;o.geometry.computeVertexNormals();o.geometry.computeBoundingBox();o.geometry.computeBoundingSphere();
 });root.updateWorldMatrix(true,true);
}
export function createSummitFloor(assetBase:string,maxAnisotropy:number){
 const root=new THREE.Group();root.name='Lava-filled volcanic bowl with continuous cobble courtyard';
 const cobble=loadCobbleTextures(assetBase,maxAnisotropy);
 const material=new THREE.MeshStandardMaterial({map:cobble.color,aoMap:cobble.surface,roughnessMap:cobble.surface,normalMap:cobble.normal,roughness:1,metalness:0,normalScale:new THREE.Vector2(.65,.65)});
 material.onBeforeCompile=shader=>{shader.uniforms.stoneSurface={value:cobble.surface};shader.fragmentShader='uniform sampler2D stoneSurface;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
 if(texture2D(stoneSurface,vMapUv).r<.56)discard;`);};
 material.customProgramCacheKey=()=> 'summit-open-cobble-joints-v1';
 const vertices:number[]=[],uvs:number[]=[],indices:number[]=[],segments=128,rings=40;
 for(let ring=0;ring<=rings;ring++)for(let i=0;i<=segments;i++){const angle=i/segments*Math.PI*2,r=ring/rings*SUMMIT_APPROACH_RADIUS,x=VOLCANO_POSITION.x+r*Math.cos(angle),z=Math.max(-458.75,VOLCANO_POSITION.z+r*Math.sin(angle));vertices.push(x,summitHeight(x,z)??0,z);uvs.push(x/32,-z/32);if(ring&&i){const a=(ring-1)*(segments+1)+i-1,b=a+segments+1;indices.push(a,a+1,b,a+1,b+1,b);}}
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));geometry.setAttribute('uv1',new THREE.Float32BufferAttribute(uvs,2));geometry.setIndex(indices);geometry.computeVertexNormals();geometry.computeBoundingSphere();
 const stone=new THREE.Mesh(geometry,material);stone.name='Walkable cobble across bowl and inside castle';stone.receiveShadow=true;root.add(stone);
 const lava=createChasmLava();lava.mesh.geometry.dispose();(lava.mesh as THREE.Mesh).geometry=new THREE.CircleGeometry(SUMMIT_RADIUS,128);lava.mesh.position.set(VOLCANO_POSITION.x,SUMMIT_FLOOR_Y-.22,VOLCANO_POSITION.z);lava.mesh.name='Boiling lava beneath summit cobble';
 const lp=lava.mesh.geometry.getAttribute('position');for(let i=0;i<lp.count;i++)if(VOLCANO_POSITION.z-lp.getY(i)<-458.75)lp.setY(i,VOLCANO_POSITION.z+458.75);
 const lavaMaterial=lava.mesh.material as THREE.ShaderMaterial;
 lavaMaterial.fragmentShader=lavaMaterial.fragmentShader.replace('gl_FragColor=vec4(color,1.);',`vec2 cell=floor(p*.42);vec2 center=cell+.5;float phase=fract(time*.22+hash(cell));float bubble=1.-smoothstep(.025,.075,abs(length(p*.42-center)-phase*.42));color+=vec3(.8,.22,.015)*bubble*sin(phase*3.14159)*.35;gl_FragColor=vec4(color,1.);`);
 root.add(lava.mesh);
 return {root,ready:cobble.ready,update:lava.update,floorAt:summitHeight,dispose:()=>cobble.dispose()};
}
