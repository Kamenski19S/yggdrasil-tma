import * as THREE from 'three';
export const FIRE_STRIKE={charge:.24,speed:160,recover:.6,pause:1.8};
type Point={x:number;y:number;z:number};
type Shot=Point&{vx?:number;vy?:number;vz?:number};
/** A continuous 3D fire field, integrated along the view ray inside one box. */
export function createFireStrikeVfx(){
 const root=new THREE.Group();root.name='Огненный удар';let time=0,disposed=false,chargeLife=0,flashLife=0,smokeLife=0;
 const geometry=new THREE.BoxGeometry(1,1,1),axis=new THREE.Vector3(0,1,0),direction=new THREE.Vector3(),eye=new THREE.Vector3(),inverse=new THREE.Matrix4();
 const size=32,data=new Uint8Array(size**3);let seed=173;
 for(let i=0;i<data.length;i++){seed=(Math.imul(seed,1664525)+1013904223)>>>0;data[i]=seed>>>24;}
 const noise=new THREE.Data3DTexture(data,size,size,size);noise.format=THREE.RedFormat;noise.minFilter=noise.magFilter=THREE.LinearFilter;noise.wrapS=noise.wrapT=noise.wrapR=THREE.RepeatWrapping;noise.unpackAlignment=1;noise.needsUpdate=true;
 const fragment=`precision highp sampler3D;
 varying vec3 localPosition;uniform sampler3D field;uniform mat4 clipFromLocal;uniform vec3 eye;uniform float clock,strength,kind;
 float turbulence(vec3 q){return .64*texture(field,q).r+.36*texture(field,q*2.13+vec3(.31,.47,.17)).r;}
 void main(){
  vec3 ray=normalize(localPosition-eye);vec3 inv=1./(sign(ray)*max(abs(ray),vec3(.00001))+vec3(.000001));
  vec3 a=(-vec3(.5)-eye)*inv,b=(vec3(.5)-eye)*inv;
  vec3 lo=min(a,b),hi=max(a,b);float near=max(max(lo.x,lo.y),lo.z),far=min(min(hi.x,hi.y),hi.z);near=max(near,0.);
  if(far<=near)discard;float stepSize=(far-near)/32.;vec3 color=vec3(0.);float alpha=0.,first=far;
  for(int i=0;i<32;i++){
   vec3 p=eye+ray*(near+(float(i)+.5)*stepSize),q=p+.5;
   float rising=clock*(kind<.5?.08:kind<1.5?.18:.035);
   vec3 drift=vec3(.035*sin(q.y*12.-clock*4.),0.,.025*cos(q.y*9.+clock*3.));
   float n=turbulence((q+drift)*vec3(.19,.10,.19)-vec3(0.,rising,0.));
   float r=length(p.xz+drift.xz),width=kind<.5?mix(.43,.18,q.y):mix(.46,.045,q.y);
   float mask=(1.-smoothstep(width*.45,width,r))*smoothstep(0.,.09,q.y)*(1.-smoothstep(.72,1.,q.y));
   float density=smoothstep(.36,.76,n+.3*(1.-r/max(.01,width))-.18*q.y)*mask;
   if(kind<.5)density*=smoothstep(.08,.18,r);
   if(kind>1.5)density=mask*(.4+n)*.35;
   float opacity=1.-exp(-density*stepSize*(kind>1.5?4.:13.)*strength);
   float heat=clamp(density*1.15+(1.-q.y)*.23,0.,1.);
   vec3 fire=mix(vec3(.95,.035,.001),vec3(1.5,.95,.16),smoothstep(.26,.95,heat));
   if(kind>1.5)fire=vec3(.13,.11,.095);
   if(opacity>.005&&first==far)first=near+(float(i)+.5)*stepSize;
   color+=(1.-alpha)*opacity*fire;alpha+=(1.-alpha)*opacity;if(alpha>.97)break;
  }
  if(alpha<.005)discard;vec4 clip=clipFromLocal*vec4(eye+ray*first,1.);gl_FragDepth=clamp(clip.z/clip.w*.5+.5,0.,1.);gl_FragColor=vec4(color/max(.001,alpha),alpha);
 }`;
 const volumes:Array<THREE.Mesh<THREE.BoxGeometry,THREE.ShaderMaterial>>=[];
 function volume(name:string,kind:number){
  const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.BackSide,toneMapped:false,uniforms:{clipFromLocal:{value:new THREE.Matrix4()},field:{value:noise},eye:{value:new THREE.Vector3()},clock:{value:0},strength:{value:1},kind:{value:kind}},vertexShader:`varying vec3 localPosition;void main(){localPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:fragment});
  const mesh=new THREE.Mesh(geometry,material);mesh.name=name;mesh.frustumCulled=false;
  mesh.onBeforeRender=(_renderer,_scene,camera)=>{camera.getWorldPosition(eye);inverse.copy(mesh.matrixWorld).invert();material.uniforms.eye.value.copy(eye).applyMatrix4(inverse);};
  root.add(mesh);volumes.push(mesh);return mesh;
 }
 const charge=volume('Раскалённый сгусток в руке',1);charge.visible=false;charge.scale.set(3.8,5,3.8);
 const body=new THREE.Group();body.name='Пламя на теле Vicki';root.add(body);body.visible=false;
 const bodyFire=volume('Цельный объём пламени',0);root.remove(bodyFire);body.add(bodyFire);bodyFire.position.y=8;bodyFire.scale.set(8,17,7);
 const smoke=volume('Дым после огненного удара',2);smoke.visible=false;smoke.scale.set(7,11,7);
 const flash=volume('Короткая вспышка огненного попадания',1);flash.visible=false;
 const light=new THREE.PointLight('#ff6a14',0,32,1.6);root.add(light);
 const bolts=new Map<string,{mesh:typeof charge;age:number}>();
 function removeShot(key:string){const shot=bolts.get(key);if(!shot)return;root.remove(shot.mesh);shot.mesh.material.dispose();volumes.splice(volumes.indexOf(shot.mesh),1);bolts.delete(key);}
 function clearBolts(){for(const key of [...bolts.keys()])removeShot(key);}
 return {root,
  charge(p:Point){if(disposed)return;chargeLife=.1;charge.visible=true;charge.position.set(p.x,p.y+.8,p.z);},
  bolt(key:string,p:Shot){if(disposed)return;let b=bolts.get(key);if(!b){if(bolts.size>=4)removeShot(bolts.keys().next().value!);b={mesh:volume('Летящий огонь с цельным шлейфом',1),age:0};b.mesh.scale.set(4.8,11,4.8);bolts.set(key,b);}b.age=0;direction.set(p.vx??0,p.vy??0,p.vz??-1);if(direction.lengthSq()<.001)direction.set(0,0,-1);direction.normalize();b.mesh.quaternion.setFromUnitVectors(axis,direction.clone().negate());b.mesh.position.set(p.x,p.y,p.z).addScaledVector(direction,-2.5);},
  impact(p:Point,blocked=false){if(disposed)return;clearBolts();chargeLife=0;charge.visible=false;flash.position.set(p.x,p.y+7,p.z);flashLife=blocked?.08:.18;},
  update(dt:number,camera:THREE.Camera,hero:Point,burn:number){if(disposed)return;time+=dt;chargeLife=Math.max(0,chargeLife-dt);charge.visible=chargeLife>0;
   for(const [key,b] of bolts){b.age+=dt;if(b.age>.1)removeShot(key);}
   body.position.set(hero.x,hero.y,hero.z);body.visible=burn>0;bodyFire.material.uniforms.strength.value=Math.min(1,burn/.55);
   if(burn>0)smokeLife=1.2;else smokeLife=Math.max(0,smokeLife-dt);
   smoke.position.set(hero.x,hero.y+12,hero.z);smoke.visible=smokeLife>0;smoke.material.uniforms.strength.value=burn>0?.3:smokeLife/1.2;
   flashLife=Math.max(0,flashLife-dt);flash.visible=flashLife>0;flash.scale.setScalar(3+(1-flashLife/.18)*4);flash.material.uniforms.strength.value=flashLife/.18;
   for(const mesh of volumes){mesh.material.uniforms.clock.value=time;mesh.updateWorldMatrix(true,false);camera.getWorldPosition(eye);inverse.copy(mesh.matrixWorld).invert();mesh.material.uniforms.eye.value.copy(eye).applyMatrix4(inverse);mesh.material.uniforms.clipFromLocal.value.copy(camera.projectionMatrix).multiply(camera.matrixWorldInverse).multiply(mesh.matrixWorld);}
   light.position.set(hero.x,hero.y+7,hero.z);light.intensity=burn>0?240+Math.sin(time*24)*60:flashLife>0?300:0;
  },
  clear(){clearBolts();chargeLife=flashLife=smokeLife=0;charge.visible=flash.visible=body.visible=smoke.visible=false;light.intensity=0;},
  dispose(){if(disposed)return;this.clear();disposed=true;for(const mesh of volumes)mesh.material.dispose();volumes.length=0;noise.dispose();geometry.dispose();},
 };
}
