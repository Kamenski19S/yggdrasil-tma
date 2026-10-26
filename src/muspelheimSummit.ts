import * as THREE from 'three';
import {loadCobbleTextures} from './muspelheimCobble';
import {createChasmLava} from './muspelheimChasm';
import {VOLCANO_POSITION,VOLCANO_SUMMIT_RADIUS,VOLCANO_SIZE} from './muspelheimVolcano';
import {SURT_TOWER_BASE_Y} from './muspelheimSurtTower';
export const SUMMIT_FLOOR_Y=SURT_TOWER_BASE_Y+.05;
/** The cut summit is a continuous observation terrace at the castle floor height. */
export function craterShore(_volcano:THREE.Object3D){
 const radii=Array<number>(128).fill(VOLCANO_SUMMIT_RADIUS);
 const contains=(x:number,z:number)=>Math.hypot(x-VOLCANO_POSITION.x,z-VOLCANO_POSITION.z)<=VOLCANO_SUMMIT_RADIUS;
 return {radii,contains};
}
export function createSummitFloor(assetBase:string,maxAnisotropy:number,volcano:THREE.Object3D,castleBounds:THREE.Box3){
 const shore=craterShore(volcano);
 const cutMaterials=new Set<THREE.Material>();
 // Preserve the castle interior clearance after trimming the surrounding summit.
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
 // A low stone parapet gives the impassable slope boundary a visible edge.
 const railMaterial=new THREE.MeshStandardMaterial({map:cobble.color,normalMap:cobble.normal,roughness:1,color:'#92969a'});
 const railGeometry=new THREE.BoxGeometry(1.3,3.2,VOLCANO_SUMMIT_RADIUS*Math.PI*2/128+.05),rail=new THREE.InstancedMesh(railGeometry,railMaterial,128),dummy=new THREE.Object3D();
 rail.name='Stone parapet around Surt observation terrace';
 for(let i=0;i<128;i++){const angle=i/128*Math.PI*2;dummy.position.set(VOLCANO_POSITION.x+VOLCANO_SUMMIT_RADIUS*Math.cos(angle),SUMMIT_FLOOR_Y+1.6,VOLCANO_POSITION.z+VOLCANO_SUMMIT_RADIUS*Math.sin(angle));dummy.rotation.y=-angle;dummy.updateMatrix();rail.setMatrixAt(i,dummy.matrix);}
 rail.computeBoundingSphere();root.add(rail);
 // Join the terrace edge to the actual rock below so the paving never hangs in the air.
 const edgeRay=new THREE.Raycaster(),down=new THREE.Vector3(0,-1,0),edgeVertices:number[]=[],edgeUV:number[]=[],edgeIndices:number[]=[];
 for(let i=0;i<=128;i++){const a=i/128*Math.PI*2,x=VOLCANO_POSITION.x+VOLCANO_SUMMIT_RADIUS*Math.cos(a),z=VOLCANO_POSITION.z+VOLCANO_SUMMIT_RADIUS*Math.sin(a);edgeRay.set(new THREE.Vector3(x,SUMMIT_FLOOR_Y+2,z),down);const ground=edgeRay.intersectObject(volcano,true)[0]?.point.y??0,bottom=Math.min(SUMMIT_FLOOR_Y-1,ground-.5);edgeVertices.push(x,bottom,z,x,SUMMIT_FLOOR_Y-.03,z);const u=i/128*VOLCANO_SUMMIT_RADIUS*Math.PI*2/8;edgeUV.push(u,bottom/8,u,SUMMIT_FLOOR_Y/8);if(i<128){const k=i*2;edgeIndices.push(k,k+1,k+3,k,k+3,k+2);}}
 const edgeGeometry=new THREE.BufferGeometry();edgeGeometry.setAttribute('position',new THREE.Float32BufferAttribute(edgeVertices,3));edgeGeometry.setAttribute('uv',new THREE.Float32BufferAttribute(edgeUV,2));edgeGeometry.setIndex(edgeIndices);edgeGeometry.computeVertexNormals();const edgeMaterial=railMaterial.clone();edgeMaterial.side=THREE.DoubleSide;const edge=new THREE.Mesh(edgeGeometry,edgeMaterial);edge.name='Stone terrace edge fitted down to volcanic rock';root.add(edge);

 const blocks=(x:number,z:number,footY:number)=>footY>SUMMIT_FLOOR_Y-4&&Math.abs(x-VOLCANO_POSITION.x)<VOLCANO_SIZE.width/2+3&&Math.abs(z-VOLCANO_POSITION.z)<VOLCANO_SIZE.depth/2+3&&Math.hypot(x-VOLCANO_POSITION.x,z-VOLCANO_POSITION.z)>VOLCANO_SUMMIT_RADIUS-2.7;
 const floorAt=(x:number,z:number)=>shore.contains(x,z)||(x>=castleBounds.min.x&&x<=castleBounds.max.x&&z>=castleBounds.min.z&&z<=castleBounds.max.z)?SUMMIT_FLOOR_Y:null;
 return {root,shore,ready:cobble.ready,update:lava.update,floorAt,blocks,dispose:()=>cobble.dispose()};
}
