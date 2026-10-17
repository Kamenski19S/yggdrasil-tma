import * as THREE from 'three';
import {loadCobbleTextures} from './muspelheimCobble';
import {createChasmLava} from './muspelheimChasm';
import {VOLCANO_POSITION} from './muspelheimVolcano';
import {SURT_TOWER_BASE_Y} from './muspelheimSurtTower';
export const SUMMIT_FLOOR_Y=SURT_TOWER_BASE_Y+.05;
/** Find the inner shoreline against the original rock, without altering any mountain vertices. */
export function craterShore(volcano:THREE.Object3D){
 const segments=128,radii:number[]=[],sides=new Map<THREE.Material,THREE.Side>();
 volcano.traverse(o=>{if(o instanceof THREE.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material])if(!sides.has(m)){sides.set(m,m.side);m.side=THREE.DoubleSide;}});
 const ray=new THREE.Raycaster();ray.near=.01;ray.far=65;
 try{for(let i=0;i<segments;i++){const angle=i/segments*Math.PI*2;ray.set(new THREE.Vector3(VOLCANO_POSITION.x,SUMMIT_FLOOR_Y-.15,VOLCANO_POSITION.z),new THREE.Vector3(Math.cos(angle),0,Math.sin(angle)));const hit=ray.intersectObject(volcano,true)[0];radii.push(hit?Math.min(65,hit.distance+.5):0);}}
 finally{for(const [m,side] of sides)m.side=side;}
 const measured=radii.slice();for(let i=0;i<segments;i++)if(!measured[i]){let left=1,right=1;while(left<segments&&!measured[(i-left+segments)%segments])left++;while(right<segments&&!measured[(i+right)%segments])right++;radii[i]=left<segments?THREE.MathUtils.lerp(measured[(i-left+segments)%segments],measured[(i+right)%segments],left/(left+right)):30;}

 const contains=(x:number,z:number)=>{const dx=x-VOLCANO_POSITION.x,dz=z-VOLCANO_POSITION.z,angle=(Math.atan2(dz,dx)+Math.PI*2)%(Math.PI*2),t=angle/(Math.PI*2)*segments,i=Math.floor(t);return Math.hypot(dx,dz)<=THREE.MathUtils.lerp(radii[i],radii[(i+1)%segments],t-i);};
 return {radii,contains};
}
export function createSummitFloor(assetBase:string,maxAnisotropy:number,volcano:THREE.Object3D,castleBounds:THREE.Box3){
 const shore=craterShore(volcano);
 const cutMaterials=new Set<THREE.Material>();
 // Cut rock only above the castle floor and inside its walls; preserve every exterior peak.
 volcano.traverse(o=>{if(!(o instanceof THREE.Mesh))return;for(const material of Array.isArray(o.material)?o.material:[o.material]){
  if(cutMaterials.has(material))continue;cutMaterials.add(material);
  const m=material as THREE.MeshStandardMaterial,previous=m.onBeforeCompile;
  m.onBeforeCompile=(shader,renderer)=>{previous.call(m,shader,renderer);shader.vertexShader='varying vec3 castleRockPosition;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>\ncastleRockPosition=(modelMatrix*vec4(position,1.)).xyz;`);shader.fragmentShader='varying vec3 castleRockPosition;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <clipping_planes_fragment>',`#include <clipping_planes_fragment>
   if(castleRockPosition.x>=${castleBounds.min.x.toFixed(6)}&&castleRockPosition.x<=${castleBounds.max.x.toFixed(6)}&&castleRockPosition.z>=${castleBounds.min.z.toFixed(6)}&&castleRockPosition.z<=${castleBounds.max.z.toFixed(6)}&&castleRockPosition.y>${(SUMMIT_FLOOR_Y-.3).toFixed(6)})discard;`);};m.customProgramCacheKey=()=> 'volcano-castle-interior-cut-v1';m.needsUpdate=true;
 }});

 const root=new THREE.Group();root.name='Lava-filled volcanic bowl with continuous cobble courtyard';
 const cobble=loadCobbleTextures(assetBase,maxAnisotropy);
 const material=new THREE.MeshStandardMaterial({map:cobble.color,aoMap:cobble.surface,roughnessMap:cobble.surface,normalMap:cobble.normal,roughness:1,metalness:0,normalScale:new THREE.Vector2(.65,.65)});
 material.onBeforeCompile=shader=>{shader.uniforms.stoneSurface={value:cobble.surface};shader.fragmentShader='uniform sampler2D stoneSurface;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
 if(texture2D(stoneSurface,vMapUv).r<.56)discard;`);};
 material.customProgramCacheKey=()=> 'summit-open-cobble-joints-v1';
 const vertices:number[]=[VOLCANO_POSITION.x,SUMMIT_FLOOR_Y,VOLCANO_POSITION.z],indices:number[]=[];
 for(let i=0;i<shore.radii.length;i++){const a=i/shore.radii.length*Math.PI*2;vertices.push(VOLCANO_POSITION.x+shore.radii[i]*Math.cos(a),SUMMIT_FLOOR_Y,VOLCANO_POSITION.z+shore.radii[i]*Math.sin(a));indices.push(0,(i+1)%shore.radii.length+1,i+1);}
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(vertices.flatMap((_,i)=>i%3===0?[vertices[i]/32,-vertices[i+2]/32]:[]),2));geometry.setIndex(indices);geometry.computeVertexNormals();
 const stone=new THREE.Mesh(geometry,material);stone.name='Cobble only inside original crater shoreline';stone.receiveShadow=true;root.add(stone);
 const yardGeometry=new THREE.PlaneGeometry(castleBounds.max.x-castleBounds.min.x,castleBounds.max.z-castleBounds.min.z);yardGeometry.rotateX(-Math.PI/2);yardGeometry.translate((castleBounds.min.x+castleBounds.max.x)/2,SUMMIT_FLOOR_Y,(castleBounds.min.z+castleBounds.max.z)/2);
 const yp=yardGeometry.getAttribute('position'),yu=yardGeometry.getAttribute('uv');for(let i=0;i<yp.count;i++)yu.setXY(i,yp.getX(i)/32,-yp.getZ(i)/32);
 // Avoid coplanar overlap where the courtyard and crater paving meet.
 const yardMaterial=material.clone();yardMaterial.onBeforeCompile=material.onBeforeCompile;yardMaterial.customProgramCacheKey=material.customProgramCacheKey;yardMaterial.polygonOffset=true;yardMaterial.polygonOffsetFactor=-1;yardMaterial.polygonOffsetUnits=-1;
 const yard=new THREE.Mesh(yardGeometry,yardMaterial);yard.name='Cobble floor inside castle walls';yard.receiveShadow=true;root.add(yard);
 const lava=createChasmLava();lava.mesh.geometry.dispose();
 const lavaGeometry=new THREE.BufferGeometry(),lavaPositions=[...vertices,...Array.from(yp.array)],lavaIndices=[...indices,...Array.from(yardGeometry.index!.array,n=>n+vertices.length/3)];
 lavaGeometry.setAttribute('position',new THREE.Float32BufferAttribute(lavaPositions,3));lavaGeometry.setIndex(lavaIndices);lavaGeometry.computeBoundingSphere();(lava.mesh as THREE.Mesh).geometry=lavaGeometry;lava.mesh.rotation.set(0,0,0);lava.mesh.position.set(0,-.22,0);lava.mesh.name='Boiling lava confined to crater and castle floor';

 // The shared lava shader expects XY coordinates; use world XZ for the horizontal bowl mesh.
 (lava.mesh.material as THREE.ShaderMaterial).vertexShader=(lava.mesh.material as THREE.ShaderMaterial).vertexShader.replace('p=position.xy','p=position.xz');
 const lavaMaterial=lava.mesh.material as THREE.ShaderMaterial;
 lavaMaterial.fragmentShader=lavaMaterial.fragmentShader.replace('gl_FragColor=vec4(color,1.);',`vec2 cell=floor(p*.42);vec2 center=cell+.5;float phase=fract(time*.22+hash(cell));float bubble=1.-smoothstep(.025,.075,abs(length(p*.42-center)-phase*.42));color+=vec3(.8,.22,.015)*bubble*sin(phase*3.14159)*.35;gl_FragColor=vec4(color,1.);`);
 root.add(lava.mesh);
 const floorAt=(x:number,z:number)=>shore.contains(x,z)||(x>=castleBounds.min.x&&x<=castleBounds.max.x&&z>=castleBounds.min.z&&z<=castleBounds.max.z)?SUMMIT_FLOOR_Y:null;
 return {root,shore,ready:cobble.ready,update:lava.update,floorAt,dispose:()=>cobble.dispose()};
}
