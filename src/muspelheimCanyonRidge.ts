import * as THREE from 'three';
import {ravineFrame} from './muspelheimRavineCrossings';
import {RAVINE_LAVA_GLSL,type RavineLava} from './muspelheimRavineLava';
import {createMeshHeightSampler} from './muspelheimSurface';
export const CANYON_RIDGE_ASSET='Muspelheim_Canyon_Ridge.glb';
export const CANYON_RIDGE_CREDIT={title:'Volcán Paricutín',author:'Marco Sánchez',url:'https://sketchfab.com/3d-models/volcan-paricutin-cd66df19c33c49ad88a0bde2b7471b07'};
const frame=ravineFrame(-210,-145);
export const CANYON_RIDGE_POSITION={x:frame.x+frame.nx*23,z:frame.z+frame.nz*23};
export const CANYON_RIDGE_SIZE={length:78,width:30,height:22};
/** The ridge sits beside the route after the bridge. Its skirt follows the
 * actual sculpted floor and sinks into it, retaining the central crater. */
export function createCanyonRidge(source:THREE.Object3D,sample:(x:number,z:number)=>number|null,lava:RavineLava){
 source.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(source),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
 if(Math.min(size.x,size.y,size.z)<=0)throw new Error('Canyon ridge has invalid bounds');
 const root=new THREE.Group();root.name='Вулканический хребет за мостом';
 const v=new THREE.Vector3();
 source.traverse(o=>{if(!(o instanceof THREE.Mesh))return;
  const geometry=o.geometry.clone().applyMatrix4(o.matrixWorld),p=geometry.getAttribute('position'),edges=new Float32Array(p.count);
  for(let i=0;i<p.count;i++){
   v.fromBufferAttribute(p,i);const u=(v.x-center.x)/size.x,w=(v.z-center.z)/size.z;
   const along=u*CANYON_RIDGE_SIZE.length,across=w*CANYON_RIDGE_SIZE.width;
   const x=CANYON_RIDGE_POSITION.x+frame.nz*along+frame.nx*across,z=CANYON_RIDGE_POSITION.z-frame.nx*along+frame.nz*across;
   const edge=Math.min(.5-Math.abs(u),.5-Math.abs(w)),fade=THREE.MathUtils.smoothstep(edge,0,.20);
   const y=sample(x,z);if(y==null)throw new Error('Canyon ridge is outside the terrain');
   p.setXYZ(i,x,y+(v.y-bounds.min.y)/size.y*CANYON_RIDGE_SIZE.height*fade-.9,z);edges[i]=1-THREE.MathUtils.smoothstep(edge,.02,.24);
  }
  geometry.setAttribute('ridgeEdge',new THREE.BufferAttribute(edges,1));geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();
  const materials=(Array.isArray(o.material)?o.material:[o.material]).map(original=>{
   const m=(original as THREE.MeshStandardMaterial).clone();m.color.set('#ffffff');m.roughness=1;m.metalness=0;if(m.map)m.map.anisotropy=4;
   m.onBeforeCompile=shader=>{
    Object.assign(shader.uniforms,lava.uniforms);
    shader.vertexShader='attribute float ridgeEdge;varying float ridgeBlend;varying vec3 rvWorldPosition;varying vec3 rvWorldNormal;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>\nridgeBlend=ridgeEdge;rvWorldPosition=(modelMatrix*vec4(transformed,1.)).xyz;rvWorldNormal=vec3(0.,1.,0.);`);
    shader.fragmentShader='varying float ridgeBlend;\n'+RAVINE_LAVA_GLSL+'\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
     float ridgeGray=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
     vec3 ridgeStone=vec3(.85,.86,.94)*ridgeGray*.8;
     diffuseColor.rgb=mix(ridgeStone,rvCrustTexture(rvWorldPosition.xz)*.92,ridgeBlend);
    `);
   };m.customProgramCacheKey=()=> 'muspelheim-canyon-ridge-basalt-v1';return m;
  });
  const mesh=new THREE.Mesh(geometry,materials.length===1?materials[0]:materials);mesh.receiveShadow=true;root.add(mesh);
 });
 return {root,floorAt:createMeshHeightSampler(root)};
}
