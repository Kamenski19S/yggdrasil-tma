import * as THREE from 'three';

export const SANCTUARY_RECOVERY_SECONDS=15;
export function recoveryHealth(startHp:number,maxHp:number,elapsed:number){
 return Math.min(maxHp,Math.floor(startHp+(maxHp-startHp)*Math.min(1,Math.max(0,elapsed)/SANCTUARY_RECOVERY_SECONDS)));
}
export function createRecoveryAura(texture?:THREE.Texture){
 const root=new THREE.Group();root.name='Золотая спираль возрождения Vicki';root.visible=false;
 const resources:{dispose:()=>void}[]=[];
 const own=<T extends {dispose:()=>void}>(item:T)=>{resources.push(item);return item;};
 const gold=(opacity:number)=>own(new THREE.MeshBasicMaterial({color:'#ffdb74',transparent:true,opacity,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,toneMapped:false}));
 const spirals=[new THREE.Group(),new THREE.Group()];
 spirals.forEach((group,index)=>{
  group.name=index?'Встречная золотая спираль':'Золотая спираль';root.add(group);
  const points=Array.from({length:145},(_,i)=>{const t=i/144,a=t*Math.PI*4.8*(index?-1:1);return new THREE.Vector3(Math.cos(a)*(4.5+index*.45),.4+t*15.5,Math.sin(a)*(4.5+index*.45));});
  const path=new THREE.CatmullRomCurve3(points);
  const core=new THREE.Mesh(own(new THREE.TubeGeometry(path,144,.065,5,false)),gold(.85));group.add(core);
  const glow=new THREE.Mesh(own(new THREE.TubeGeometry(path,144,.27,5,false)),gold(.16));group.add(glow);
  if(texture){
   const material=gold(.18);material.map=texture;
   const veil=new THREE.Mesh(own(new THREE.CylinderGeometry(5+index*.6,4.6+index*.6,17,40,1,true)),material);veil.position.y=8;group.add(veil);
  }
 });
 if(texture){texture.colorSpace=THREE.SRGBColorSpace;texture.offset.set(.105,0);texture.repeat.set(.895,1);texture.needsUpdate=true;own(texture);}
 const ring=new THREE.Mesh(own(new THREE.TorusGeometry(5,.12,8,64)),gold(.5));ring.rotation.x=Math.PI/2;ring.position.y=.2;root.add(ring);
 const coords=new Float32Array(72*3),geometry=own(new THREE.BufferGeometry());geometry.setAttribute('position',new THREE.BufferAttribute(coords,3));
 const stars=own(new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false,uniforms:{clock:{value:0}},vertexShader:`uniform float clock;varying float twinkle;void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(130./max(1.,-p.z),2.,15.);twinkle=.45+.55*sin(clock*4.+position.y*3.);}`,fragmentShader:`varying float twinkle;void main(){vec2 p=gl_PointCoord-.5;float r=length(p);float star=exp(-r*18.)+exp(-abs(p.x)*65.-abs(p.y)*5.)+exp(-abs(p.y)*65.-abs(p.x)*5.);float a=star*twinkle;if(a<.015)discard;gl_FragColor=vec4(1.,.84,.4,a);}`}));
 root.add(new THREE.Points(geometry,stars));let time=0;
 return {root,update(dt:number,hero:THREE.Object3D,active:boolean){
  root.visible=active;if(!active)return;time+=dt;root.position.copy(hero.position);
  spirals[0].rotation.y=time*.75;spirals[1].rotation.y=-time*.61;stars.uniforms.clock.value=time;
  spirals.forEach((group,k)=>group.children.forEach((child,i)=>{const material=(child as THREE.Mesh<THREE.BufferGeometry,THREE.MeshBasicMaterial>).material;material.opacity=[.8,.15,.17][i]*(.82+.18*Math.sin(time*2.7+k*2));material.color.setHSL(.115+.025*Math.sin(time*1.7+k),1,.68);}));
  ring.scale.setScalar(1+.07*Math.sin(time*4));
  for(let i=0;i<72;i++){const t=(i/72+time*.12)%1,a=i*2.39996+time*(i%2?-.75:.75),r=4.7+.5*Math.sin(i);coords[i*3]=Math.cos(a)*r;coords[i*3+1]=t*16;coords[i*3+2]=Math.sin(a)*r;}geometry.attributes.position.needsUpdate=true;
 },dispose(){resources.forEach(r=>r.dispose());}};
}
