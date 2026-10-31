import * as THREE from 'three';

export const SANCTUARY_RECOVERY_SECONDS=15;
export function recoveryHealth(startHp:number,maxHp:number,elapsed:number){
 return Math.min(maxHp,Math.floor(startHp+(maxHp-startHp)*Math.min(1,Math.max(0,elapsed)/SANCTUARY_RECOVERY_SECONDS)));
}
/** The supplied golden cloud is the visible effect; there are no untextured rings or tubes. */
export function createRecoveryAura(texture?:THREE.Texture){
 const root=new THREE.Group();root.name='Живое золотое сияние возрождения';root.visible=false;
 if(texture){texture.colorSpace=THREE.SRGBColorSpace;texture.offset.set(0,0);texture.repeat.set(1,1);texture.needsUpdate=true;}
 const spirals=[new THREE.Group(),new THREE.Group()];
 const materials:THREE.ShaderMaterial[]=[],geometries:THREE.CylinderGeometry[]=[];
 spirals.forEach((group,index)=>{
  group.name=index?'Встречное текстурное сияние':'Текстурное сияние';root.add(group);
  const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:THREE.NormalBlending,toneMapped:false,uniforms:{auraMap:{value:texture??null},clock:{value:0},direction:{value:index?-1:1},opacity:{value:index?.67:.94}},
   vertexShader:`uniform float clock,direction;varying vec2 auraUv;
    void main(){auraUv=uv;vec3 p=position;float swell=1.+.025*sin(p.y*.6-clock*1.8+direction*uv.x*6.28);p.xz*=swell;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
   fragmentShader:`uniform sampler2D auraMap;uniform float clock,direction,opacity;varying vec2 auraUv;
    void main(){
     vec2 uv=auraUv;uv.x+=.018*sin(uv.y*9.-clock*1.5*direction);uv.y+=.009*sin(uv.x*12.+clock*1.3);
     if(uv.x<0.||uv.x>1.||uv.y<0.||uv.y>1.)discard;
     // Skip the narrow piece of marble at the left of the supplied image.
     vec4 cloud=texture2D(auraMap,vec2(.105+.895*uv.x,uv.y));
     float edge=smoothstep(0.,.06,uv.x)*smoothstep(0.,.06,1.-uv.x)*smoothstep(0.,.05,uv.y)*smoothstep(0.,.05,1.-uv.y);
     float shimmer=.87+.13*sin(uv.y*19.-clock*3.+direction*uv.x*7.);
     float alpha=cloud.a*opacity*edge*shimmer;if(alpha<.008)discard;
     vec3 gold=cloud.rgb*vec3(1.15,.95,.57)*(1.04+.1*sin(clock*2.+uv.y*10.));
     gl_FragColor=vec4(gold,alpha);
     #include <colorspace_fragment>
    }`});
  const geometry=new THREE.CylinderGeometry(4.7+index*.65,4.4+index*.65,17.5,48,16,true),veil=new THREE.Mesh(geometry,material);veil.position.y=8.2;group.add(veil);materials.push(material);geometries.push(geometry);
 });
 let time=0;
 return {root,update(dt:number,hero:THREE.Object3D,active:boolean){root.visible=active;if(!active)return;time+=dt;root.position.copy(hero.position);spirals[0].rotation.y=time*.58;spirals[1].rotation.y=-time*.43;materials.forEach(m=>{m.uniforms.clock.value=time;});},
  dispose(){materials.forEach(m=>m.dispose());geometries.forEach(g=>g.dispose());texture?.dispose();}};
}
