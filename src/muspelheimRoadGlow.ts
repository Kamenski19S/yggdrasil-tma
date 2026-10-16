import * as THREE from 'three';
import {roadLines} from './muspelheimRoads';
/** Faint additive air halos, like the living-water well, rendered in one draw call. */
export function createRoadGlow(sample:(x:number,z:number)=>number|null,pixelHeight:number){
 const positions:number[]=[],seen=new Set<string>();
 for(const line of roadLines()){
  let remaining=0;
  for(let i=1;i<line.length;i++){
   const a=line[i-1],b=line[i],length=Math.hypot(b.x-a.x,b.z-a.z);if(!length)continue;
   for(;remaining<=length;remaining+=12){
    const t=remaining/length,x=THREE.MathUtils.lerp(a.x,b.x,t),z=THREE.MathUtils.lerp(a.z,b.z,t),key=`${Math.round(x/8)},${Math.round(z/8)}`;
    if(seen.has(key))continue;seen.add(key);const y=sample(x,z);if(y!=null)positions.push(x,y+.6,z);
   }
   remaining-=length;
  }
 }
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
 const material=new THREE.ShaderMaterial({transparent:true,depthTest:true,depthWrite:false,blending:THREE.AdditiveBlending,
  uniforms:{pixelHeight:{value:pixelHeight},opacity:{value:.035}},
  vertexShader:`uniform float pixelHeight;varying float fade;
   void main(){vec4 mvPosition=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mvPosition;
    gl_PointSize=clamp(11.*pixelHeight*projectionMatrix[1][1]/max(1.,-2.*mvPosition.z),1.,128.);
    fade=1.-smoothstep(55.,120.,-mvPosition.z);}`,
  fragmentShader:`uniform float opacity;varying float fade;
   void main(){vec2 p=gl_PointCoord*2.-1.;float r2=dot(p,p);if(r2>=1.)discard;
    float halo=pow(1.-r2,3.);gl_FragColor=vec4(.16,.48,.78,halo*opacity*fade);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`});
 const points=new THREE.Points(geometry,material);points.name='Faint blue air halos over cobblestone';
 return {points,setPixelHeight:(height:number)=>{material.uniforms.pixelHeight.value=height;}};
}
