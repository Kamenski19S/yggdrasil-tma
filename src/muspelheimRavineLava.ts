import * as THREE from 'three';
import {ravineFrame,ravinePitDepth} from './muspelheimRavineCrossings';

const BOUNDS={minX:-550,maxX:35,minZ:-485,maxZ:40};
export type RavineLava=ReturnType<typeof createRavineLava>;
/** One small shared mask confines the effect to the outdoor canyon, on both
 * terrain and instanced cliff GLBs. Green stores floor depth, blue/alpha store
 * a continuous 16-bit coordinate along the canyon. */
export function createRavineLava(){
 const size=160,pixels=new Uint8Array(size*size*4);
 for(let j=0;j<size;j++)for(let i=0;i<size;i++){
  const x=THREE.MathUtils.lerp(BOUNDS.minX,BOUNDS.maxX,i/(size-1)),z=THREE.MathUtils.lerp(BOUNDS.minZ,BOUNDS.maxZ,j/(size-1)),f=ravineFrame(x,z),index=(j*size+i)*4;
  pixels[index]=Math.round(255*(1-THREE.MathUtils.smoothstep(f.distance,55,82)));
  pixels[index+1]=Math.round(255*(1+(-82+ravinePitDepth(f.x,f.z))/256));
  const station=Math.min(65535,Math.round(f.station/1024*65535));pixels[index+2]=station>>8;pixels[index+3]=station&255;
 }
 const mask=new THREE.DataTexture(pixels,size,size,THREE.RGBAFormat);mask.minFilter=mask.magFilter=THREE.LinearFilter;mask.needsUpdate=true;
 const uniforms={ravineLavaMask:{value:mask},ravineLavaTime:{value:0}};
 return {uniforms,update:(dt:number)=>{uniforms.ravineLavaTime.value+=Math.max(0,dt);},dispose:()=>mask.dispose()};
}

export const RAVINE_LAVA_GLSL=`
 varying vec3 rvWorldPosition;
 varying vec3 rvWorldNormal;
 uniform sampler2D ravineLavaMask;
 uniform float ravineLavaTime;
 vec3 rvCanyon(vec3 p){
  vec2 uv=(p.xz-vec2(${BOUNDS.minX}.,${BOUNDS.minZ}.))/vec2(${BOUNDS.maxX-BOUNDS.minX}.,${BOUNDS.maxZ-BOUNDS.minZ}.);
  float inside=step(0.,uv.x)*step(uv.x,1.)*step(0.,uv.y)*step(uv.y,1.);
  vec4 canyon=texture2D(ravineLavaMask,uv);
  return vec3(canyon.r*inside,(canyon.g-1.)*256.,(canyon.b*65280.+canyon.a*255.)/65535.*1024.);
 }
 vec4 rvFlow(vec3 p,vec3 n){
  vec3 canyon=rvCanyon(p);
  if(canyon.x<.002)return vec4(0.);
  float slope=1.-smoothstep(.48,.86,abs(n.y));
  float height=smoothstep(canyon.y+3.,canyon.y+17.,p.y)*(1.-smoothstep(0.,9.,p.y));
  if(slope*height<.002)return vec4(0.);
  // A continuous coordinate along the canyon avoids flickering streaks on
  // the authored rocks' many differently oriented faces.
  float across=canyon.z;
  float bend=sin(p.y*.047+across*.023)*1.35+sin(p.y*.17+across*.09)*.28;
  float channel=abs(sin((across+bend)*.14+sin(across*.031)*1.6));
  float width=.18+.07*sin(across*.054);
  float stream=1.-smoothstep(width,width+.09,channel);
  float core=1.-smoothstep(.025,width*.75,channel);
  // y + time makes ridges travel downward while the channel stays on the rock.
  float motion=.72+.28*sin(p.y*.72+ravineLavaTime*2.4+sin(across*.4));
  vec3 color=mix(vec3(.65,.035,.002),vec3(1.9,.42,.018),core)*motion;
  color+=vec3(.7,.38,.06)*pow(core,4.);
  return vec4(color,canyon.x*slope*height*stream);
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
 shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
  vec3 rvArea=rvCanyon(rvWorldPosition);
  float rvCrust=rvArea.x*smoothstep(68.,80.,-rvWorldPosition.y)*smoothstep(.68,.95,normalize(rvWorldNormal).y);
  float rvGrain=clamp(dot(diffuseColor.rgb,vec3(.2126,.7152,.0722))*28.,.55,1.35);
  rvGrain*=.85+.15*sin(rvWorldPosition.x*.9+sin(rvWorldPosition.z*.65))*sin(rvWorldPosition.z*.75);
  vec3 rvCrustColor=vec3(.055,.060,.070)*rvGrain;
  diffuseColor.rgb=mix(diffuseColor.rgb,rvCrustColor,rvCrust);
  roughnessFactor=mix(roughnessFactor,.98,rvCrust);
  vec4 rvLava=rvFlow(rvWorldPosition,normalize(rvWorldNormal));
  diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.10,.025,.008),rvLava.a*.75);
  totalEmissiveRadiance+=rvLava.rgb*rvLava.a*1.65;
 `);
}
