import * as THREE from 'three';
import {NIFL_ENTRANCE_Z} from './niflheimMapData';

type Position={x:number;z:number};
// A crossing is geometric, so standing near the gate never retriggers the wave.
export function entranceCrossing(from:Position,to:Position){
  const a=from.z-NIFL_ENTRANCE_Z,b=to.z-NIFL_ENTRANCE_Z;
  if(Math.abs(to.z-from.z)<1e-8||!((a>0&&b<=0)||(a<0&&b>=0)))return null;
  const t=(NIFL_ENTRANCE_Z-from.z)/(to.z-from.z),x=from.x+(to.x-from.x)*t;
  return Math.abs(x)<3.2?x:null;
}

export function addEntranceVeil(scene:THREE.Scene,groundY:number,initialPosition:Position){
  const ripples=Array.from({length:3},()=>new THREE.Vector4(0,2.9,-1000,0));
  const uniforms={...THREE.UniformsUtils.clone(THREE.UniformsLib.fog),uTime:{value:0},uRipples:{value:ripples}};
  const material=new THREE.ShaderMaterial({
    uniforms,transparent:true,depthWrite:false,side:THREE.DoubleSide,toneMapped:false,fog:true,
    vertexShader:`
      uniform float uTime;
      uniform vec4 uRipples[3];
      varying vec2 vVeilPosition;
      #include <fog_pars_vertex>
      void main(){
        vVeilPosition=position.xy;
        vec3 p=position;
        p.z+=.10*sin(p.x*1.7+uTime*.8)*sin(p.y*1.3-uTime*.6);
        for(int i=0;i<3;i++){
          float age=uTime-uRipples[i].z;
          if(uRipples[i].w>.5&&age>=0.0&&age<4.2){
            float delta=distance(p.xy,uRipples[i].xy)-age*3.2;
            p.z+=.55*sin(delta*8.0)*exp(-delta*delta*3.0)*exp(-age*.5);
          }
        }
        vec4 mvPosition=modelViewMatrix*vec4(p,1.0);
        gl_Position=projectionMatrix*mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader:`
      uniform float uTime;
      uniform vec4 uRipples[3];
      varying vec2 vVeilPosition;
      #include <fog_pars_fragment>
      float grainHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      void main(){
        vec2 p=vVeilPosition;
        float arch=length(vec2(p.x/3.2,max(0.0,p.y-4.9)/3.0));
        if(arch>1.0||p.y<-.1)discard;
        float edge=1.0-smoothstep(.94,1.0,arch);
        vec2 grain=p*24.0;
        float speck=step(.992,grainHash(floor(grain)))*(1.0-smoothstep(.12,.4,length(fract(grain)-.5)));
        float ripple=0.0;
        for(int i=0;i<3;i++){
          float age=uTime-uRipples[i].z;
          if(uRipples[i].w>.5&&age>=0.0&&age<4.2){
            float d=distance(p,uRipples[i].xy),delta=d-age*3.2;
            float trailing=delta+.9;
            float third=delta+1.8;
            ripple+=(exp(-delta*delta*10.0)+.55*exp(-trailing*trailing*10.0)+.2*exp(-third*third*10.0))*exp(-age*.5);
          }
        }
        float breath=.016*sin(p.x*.7+p.y*.9+uTime*.75);
        float alpha=(.16+breath+speck*.23+min(.65,ripple*.85))*edge;
        vec3 color=mix(vec3(.22,.27,.32),vec3(.91,.97,1.0),clamp(speck+ripple*.8,0.0,1.0));
        gl_FragColor=vec4(color,alpha);
        #include <fog_fragment>
        #include <colorspace_fragment>
      }`
  });
  const geometry=new THREE.PlaneGeometry(6.4,8.0,32,36);geometry.translate(0,3.9,0);
  const membrane=new THREE.Mesh(geometry,material);membrane.name='Snow veil with crossing ripples';
  membrane.position.set(0,groundY,NIFL_ENTRANCE_Z);scene.add(membrane);
  let previous={...initialPosition},nextRipple=0;
  return {mesh:membrane,update(time:number,position:Position){
    uniforms.uTime.value=time;
    const x=entranceCrossing(previous,position);
    if(x!==null){ripples[nextRipple].set(x,2.9,time,1);nextRipple=(nextRipple+1)%ripples.length;}
    previous={...position};
  }};
}
