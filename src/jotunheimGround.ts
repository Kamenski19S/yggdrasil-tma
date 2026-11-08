import * as THREE from 'three';

export const SAND_CREDIT={
 title:'Tiled PBR material - Sand',author:'XY01',authorUrl:'https://sketchfab.com/XY01',
 sourceUrl:'https://sketchfab.com/3d-models/tiled-pbr-material-sand-fdd6f27663c049638afbbe30f9e9c93d',
 licenseUrl:'https://creativecommons.org/licenses/by/4.0/',
};

/** Average area-weighted normals across shared positions, including UV seams.
 * Keep every position and UV: walking/collision still uses exactly the same mesh. */
export function smoothGroundNormals(geometry:THREE.BufferGeometry){
 const p=geometry.getAttribute('position'),index=geometry.index;
 const sums=new Map<string,THREE.Vector3>();
 const keys=Array.from({length:p.count},(_,i)=>`${Math.round(p.getX(i)*1e5)},${Math.round(p.getY(i)*1e5)},${Math.round(p.getZ(i)*1e5)}`);
 const a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3(),normal=new THREE.Vector3();
 for(let i=0;i<(index?.count??p.count);i+=3){
  const ids=[0,1,2].map(k=>index?index.getX(i+k):i+k);
  a.fromBufferAttribute(p,ids[0]);b.fromBufferAttribute(p,ids[1]);c.fromBufferAttribute(p,ids[2]);
  normal.crossVectors(b.sub(a),c.sub(a));
  for(const id of ids){const key=keys[id];if(!sums.has(key))sums.set(key,new THREE.Vector3());sums.get(key)!.add(normal);}
 }
 const normals=new Float32Array(p.count*3);
 keys.forEach((key,i)=>sums.get(key)!.clone().normalize().toArray(normals,i*3));
 geometry.setAttribute('normal',new THREE.BufferAttribute(normals,3));
}

/** The old atlas controls biome placement only. World-space detail stays sharp
 * beside Vicki; triplanar projection also covers vertical mountain faces. */
export function configureJotunheimGround(root:THREE.Object3D,base:string,maxAnisotropy=4){
 const textures:THREE.Texture[]=[],pending:Promise<void>[]=[];
 const load=(path:string,color=true)=>{
  let resolve!:()=>void,reject!:(reason:unknown)=>void;
  pending.push(new Promise<void>((ok,fail)=>{resolve=ok;reject=fail;}));
  const t=new THREE.TextureLoader().load(base+path,()=>resolve(),undefined,reject);
  t.colorSpace=color?THREE.SRGBColorSpace:THREE.NoColorSpace;
  t.wrapS=t.wrapT=THREE.MirroredRepeatWrapping;t.anisotropy=Math.min(8,maxAnisotropy);
  textures.push(t);return t;
 };
 const sand=load('terrain/sand-color.webp'),grass=load('models/T_Grass_Green.jpg'),rock=load('terrain/rock-color.webp');
 const mask=load('terrain/jotunheim-biomes.png',false);
 mask.flipY=false;mask.wrapS=mask.wrapT=THREE.ClampToEdgeWrapping;
 // These textures were loaded with the original GLB but are now replaced entirely.
 const oldTextures=new Set<THREE.Texture>(),oldMaterials=new Set<THREE.Material>();
 root.traverse(object=>{
  if(!(object instanceof THREE.Mesh))return;
  smoothGroundNormals(object.geometry);
  const replace=(source:THREE.Material)=>{
   oldMaterials.add(source);for(const value of Object.values(source))if(value instanceof THREE.Texture)oldTextures.add(value);
   const material=new THREE.MeshStandardMaterial({map:mask,color:0xffffff,roughness:.96,metalness:0,side:source.side});
   material.onBeforeCompile=shader=>{
    Object.assign(shader.uniforms,{groundSand:{value:sand},groundGrass:{value:grass},groundRock:{value:rock},groundWorldNormalMatrix:{value:new THREE.Matrix3().getNormalMatrix(object.matrixWorld)}});
    shader.vertexShader='uniform mat3 groundWorldNormalMatrix;varying vec3 groundPosition;varying vec3 groundNormal;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
     groundPosition=(modelMatrix*vec4(position,1.)).xyz;
     groundNormal=normalize(groundWorldNormalMatrix*normal);`);
    shader.fragmentShader=`varying vec3 groundPosition;varying vec3 groundNormal;
     uniform sampler2D groundSand;uniform sampler2D groundGrass;uniform sampler2D groundRock;
     vec3 groundSample(sampler2D surface,vec3 p,vec3 w,float size){
      return texture2D(surface,p.zy/size).rgb*w.x+texture2D(surface,p.xz/size).rgb*w.y+texture2D(surface,p.xy/size).rgb*w.z;
     }
     // Use only XZ for grass, as in Midgard. Independently shifted patches
     // overlap with smooth weights rather than exposing a mirrored square grid.
     vec2 grassOffset(vec2 cell){
      return fract(sin(vec2(dot(cell,vec2(127.1,311.7)),dot(cell,vec2(269.5,183.3))))*43758.5453)*19.;
     }
     vec3 grassPatch(vec2 uv,vec2 cell){return texture2D(groundGrass,uv+grassOffset(cell)).rgb;}
     vec3 continuousGrass(vec2 uv){
      vec2 cell=floor(uv),f=fract(uv);f=f*f*(3.-2.*f);
      return mix(mix(grassPatch(uv,cell),grassPatch(uv,cell+vec2(1.,0.)),f.x),
       mix(grassPatch(uv,cell+vec2(0.,1.)),grassPatch(uv,cell+vec2(1.,1.)),f.x),f.y);
     }
     float groundNoise(vec2 p){
      vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
      vec4 h=fract(sin(vec4(dot(i,vec2(127.1,311.7)),dot(i+vec2(1.,0.),vec2(127.1,311.7)),dot(i+vec2(0.,1.),vec2(127.1,311.7)),dot(i+vec2(1.),vec2(127.1,311.7))))*43758.5453);
      return mix(mix(h.x,h.y,f.x),mix(h.z,h.w,f.x),f.y);
     }
    `+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`
     vec3 weights=texture2D(map,vMapUv).rgb;
     // Gentle spatial variation breaks up a painted border, with no square tiles.
     weights=max(vec3(0.),weights+vec3(1.,-1.,0.)*(groundNoise(groundPosition.xz/7.)-.5)*.10);
     float slope=1.-abs(normalize(groundNormal).y);
     // Newly raised mountain faces are rock, not vertically stretched meadow.
     weights=mix(weights,vec3(0.,0.,max(.001,weights.r+weights.g+weights.b)),smoothstep(.35,.70,slope));
     weights/=max(.001,weights.r+weights.g+weights.b);
     vec3 projection=pow(abs(normalize(groundNormal)),vec3(4.));
     projection/=max(.001,projection.x+projection.y+projection.z);
     vec3 sandColor=groundSample(groundSand,groundPosition,projection,12.);
     vec3 grassColor=continuousGrass(groundPosition.xz/8.);
     vec3 rockColor=groundSample(groundRock,groundPosition,projection,18.);
     // Match the subdued grass and cool stone of this mountain world.
     grassColor=mix(vec3(dot(grassColor,vec3(.2126,.7152,.0722))),grassColor,.78);
     rockColor*=vec3(.87,.92,1.);
     vec3 surface=sandColor*weights.r+grassColor*weights.g+rockColor*weights.b;
     surface*=.92+.13*groundNoise(groundPosition.xz/45.);
     diffuseColor.rgb*=surface;
    `);
   };
   material.customProgramCacheKey=()=> 'jotunheim-ground-mountain-faces-v3';return material;
  };
  object.material=Array.isArray(object.material)?object.material.map(replace):replace(object.material);
 });
 oldMaterials.forEach(m=>m.dispose());oldTextures.forEach(t=>t.dispose());
 // map is also owned by scene disposal; dispose() covers the shader-only maps.
 return {ready:Promise.all(pending),dispose:()=>textures.forEach(t=>t.dispose())};
}
