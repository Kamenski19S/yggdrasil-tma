import * as THREE from 'three';
import {ravineFrame,ravinePitDepth} from './muspelheimRavineCrossings';

const BOUNDS={minX:-550,maxX:35,minZ:-485,maxZ:40};
export type RavineLava=ReturnType<typeof createRavineLava>;
/** One small shared mask confines the effect to the outdoor canyon, on both
 * terrain and instanced cliff GLBs. Green stores floor depth, blue/alpha store
 * a continuous 16-bit coordinate along the canyon. */
export function createRavineLava(assetBase?:string){
 const size=160,pixels=new Uint8Array(size*size*4);
 for(let j=0;j<size;j++)for(let i=0;i<size;i++){
  const x=THREE.MathUtils.lerp(BOUNDS.minX,BOUNDS.maxX,i/(size-1)),z=THREE.MathUtils.lerp(BOUNDS.minZ,BOUNDS.maxZ,j/(size-1)),f=ravineFrame(x,z),index=(j*size+i)*4;
  pixels[index]=Math.round(255*(1-THREE.MathUtils.smoothstep(f.distance,55,82)));
  pixels[index+1]=Math.round(255*(1+(-82+ravinePitDepth(f.x,f.z))/256));
  const station=Math.min(65535,Math.round(f.station/1024*65535));pixels[index+2]=station>>8;pixels[index+3]=station&255;
 }
 const mask=new THREE.DataTexture(pixels,size,size,THREE.RGBAFormat);mask.minFilter=mask.magFilter=THREE.LinearFilter;mask.needsUpdate=true;
 // The supplied cooled-lava photograph keeps its rope-like overlapping folds.
 const fallback=new THREE.DataTexture(new Uint8Array([52,49,57,255]),1,1,THREE.RGBAFormat);fallback.needsUpdate=true;
 const uniforms={ravineLavaMask:{value:mask},ravineLavaTime:{value:0},ravineCrustMap:{value:fallback as THREE.Texture}};
 let disposed=false,crust:THREE.Texture|undefined;
 const ready=assetBase?new Promise<void>((resolve,reject)=>{
  crust=new THREE.TextureLoader().load(assetBase+'muspelheim-cooled-lava.jpg',texture=>{
   if(disposed){texture.dispose();resolve();return;}
   uniforms.ravineCrustMap.value=texture;resolve();
  },undefined,reject);
  crust.colorSpace=THREE.SRGBColorSpace;crust.wrapS=crust.wrapT=THREE.MirroredRepeatWrapping;crust.anisotropy=4;
 }):Promise.resolve();
 return {uniforms,ready,update:(dt:number)=>{uniforms.ravineLavaTime.value+=Math.max(0,dt);},dispose:()=>{disposed=true;mask.dispose();fallback.dispose();crust?.dispose();}};
}

export const RAVINE_LAVA_GLSL=`
 varying vec3 rvWorldPosition;
 varying vec3 rvWorldNormal;
 uniform sampler2D ravineLavaMask;
 uniform float ravineLavaTime;
 uniform sampler2D ravineCrustMap;
 vec2 rvHash(vec2 q){return fract(sin(vec2(dot(q,vec2(127.1,311.7)),dot(q,vec2(269.5,183.3))))*43758.5453);}
 float rvNoise(vec2 q){vec2 i=floor(q),f=fract(q);f=f*f*(3.-2.*f);return mix(mix(rvHash(i).x,rvHash(i+vec2(1.,0.)).x,f.x),mix(rvHash(i+vec2(0.,1.)).x,rvHash(i+vec2(1.)).x,f.x),f.y);}
 vec3 rvCrustTexture(vec2 p){
  vec2 uv=p/vec2(24.,15.),cell=floor(uv),f=fract(uv);f=f*f*(3.-2.*f);
  // Offset neighbouring mirrored patches and cross-fade; no rectangular seams.
  return mix(mix(texture2D(ravineCrustMap,uv+rvHash(cell)*11.).rgb,texture2D(ravineCrustMap,uv+rvHash(cell+vec2(1.,0.))*11.).rgb,f.x),
   mix(texture2D(ravineCrustMap,uv+rvHash(cell+vec2(0.,1.))*11.).rgb,texture2D(ravineCrustMap,uv+rvHash(cell+vec2(1.))*11.).rgb,f.x),f.y);
 }
 vec3 rvCanyon(vec3 p){
  vec2 uv=(p.xz-vec2(${BOUNDS.minX}.,${BOUNDS.minZ}.))/vec2(${BOUNDS.maxX-BOUNDS.minX}.,${BOUNDS.maxZ-BOUNDS.minZ}.);
  float inside=step(0.,uv.x)*step(uv.x,1.)*step(0.,uv.y)*step(uv.y,1.);
  vec4 canyon=texture2D(ravineLavaMask,uv);
  return vec3(canyon.r*inside,(canyon.g-1.)*256.,(canyon.b*65280.+canyon.a*255.)/65535.*1024.);
 }
 // Follow the broad southern descent carved in muspelheimSurtRavine.ts.
 // Fade only at its shoulders and upper lip; keep the same world-space texture.
 float rvDescentAmount(vec3 p){
  float width=1.-smoothstep(13.,30.,abs(p.x+365.));
  float length=smoothstep(-118.,-106.,p.z)*(1.-smoothstep(25.,35.,p.z));
  return width*length*smoothstep(.2,5.,-p.y);
 }
 float rvCrustAmount(vec3 p,vec3 n){
  vec3 canyon=rvCanyon(p);
  float floorCrust=canyon.x*smoothstep(55.,78.,-p.y)*smoothstep(.30,.85,n.y);
  return max(floorCrust,rvDescentAmount(p)*smoothstep(.25,.60,n.y));
 }
 vec4 rvFlow(vec3 p,vec3 n){
  vec3 canyon=rvCanyon(p);
  if(canyon.x<.002)return vec4(0.);
  float slope=1.-smoothstep(.48,.86,abs(n.y));
  // Broad curtains with thin bright rivulets, like the entrance chasm.
  // The last metres cool irregularly into the same crust as the canyon floor.
  float across=canyon.z;
  float bend=sin(p.y*.035+across*.055)*.7+sin(p.y*.13+across*.19)*.18;
  float u=across+bend;
  float curtains=rvNoise(vec2(u*.095,2.));
  float stream=smoothstep(.18,.55,curtains);
  float streak=rvNoise(vec2(u*.85,p.y*.025+ravineLavaTime*.16));
  float thread=pow(.5+.5*sin(u*9.8+sin(u*1.71)*2.),7.);
  float fibres=rvNoise(vec2(u*5.2,p.y*.06+ravineLavaTime*.22));
  float heat=clamp(.12+streak*.32+fibres*.45+thread*.30,0.,1.);
  float cooling=smoothstep(canyon.y+1.+rvNoise(p.xz*.18)*4.,canyon.y+16.,p.y);
  float height=cooling*(1.-smoothstep(0.,9.,p.y));
  float motion=.88+.12*sin(p.y*.85+ravineLavaTime*2.1+u*.9);
  vec3 color=mix(vec3(.18,.003,.0003),vec3(1.1,.16,.003),smoothstep(.48,.91,heat));
  color=mix(color,vec3(1.5,.52,.025),thread*streak*streak*.7)*motion;
  color*=mix(.22,1.,cooling);
  return vec4(color,canyon.x*slope*height*stream*(1.-rvDescentAmount(p)*smoothstep(.25,.60,n.y)));
 }
`;

/** Chain after each material's existing texture treatment. No overlay planes,
 * depth fighting or animated geometry: the lava follows the exact cliff. */
export function applyRavineLava(shader:THREE.WebGLProgramParametersWithUniforms,lava:RavineLava){
 Object.assign(shader.uniforms,lava.uniforms);
 shader.vertexShader='varying vec3 rvWorldPosition;varying vec3 rvWorldNormal;\n'+shader.vertexShader;
 shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
  vec4 rvPosition=vec4(transformed,1.);
  #ifdef USE_INSTANCING
   rvPosition=instanceMatrix*rvPosition;
  #endif
  rvWorldPosition=(modelMatrix*rvPosition).xyz;
  rvWorldNormal=inverseTransformDirection(transformedNormal,viewMatrix);
 `);
 shader.fragmentShader=RAVINE_LAVA_GLSL+'\n'+shader.fragmentShader;
 shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
  float rvBumpAmount=rvCrustAmount(rvWorldPosition,normalize(rvWorldNormal));
  float rvBumpHeight=dot(rvCrustTexture(rvWorldPosition.xz),vec3(.2126,.7152,.0722))*.48;
  vec3 rvDx=dFdx(-vViewPosition),rvDy=dFdy(-vViewPosition);
  vec3 rvRx=cross(rvDy,normal),rvRy=cross(normal,rvDx);
  float rvDet=dot(rvDx,rvRx);
  vec3 rvGradient=sign(rvDet)*(dFdx(rvBumpHeight)*rvRx+dFdy(rvBumpHeight)*rvRy);
  vec3 rvBumped=normalize(abs(rvDet)*normal-rvGradient);
  normal=normalize(mix(normal,rvBumped,rvBumpAmount));
 `);
 shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
  float rvCrust=rvCrustAmount(rvWorldPosition,normalize(rvWorldNormal));
  vec3 rvCrustColor=rvCrustTexture(rvWorldPosition.xz)*.92;
  diffuseColor.rgb=mix(diffuseColor.rgb,rvCrustColor,rvCrust);
  roughnessFactor=mix(roughnessFactor,.98,rvCrust);
  vec4 rvLava=rvFlow(rvWorldPosition,normalize(rvWorldNormal));
  diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.10,.025,.008),rvLava.a*.75);
  totalEmissiveRadiance+=rvLava.rgb*rvLava.a*1.05;
 `);
}
