import * as THREE from 'three';
export const FIRE_STRIKE={charge:.24,speed:160,recover:.6,pause:1.8};
type Point={x:number;y:number;z:number};
type Shot=Point&{vx?:number;vy?:number;vz?:number};
/** Procedural flame tongues and smoke: no animated radial atlas. */
export function createFireStrikeVfx(){
 const root=new THREE.Group();root.name='Огненный удар';let time=0,disposed=false,chargeLife=0,flashLife=0,smokeLife=0;
 const plane=new THREE.PlaneGeometry(1,1),sphere=new THREE.SphereGeometry(1,16,12);
 const vertex=`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
 const noise=`float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}`;
 const flame=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,toneMapped:false,blending:THREE.AdditiveBlending,uniforms:{clock:{value:0},strength:{value:1}},vertexShader:vertex,fragmentShader:`varying vec2 vUv;uniform float clock;uniform float strength;${noise}
 void main(){float y=vUv.y;float n=noise(vec2(vUv.x*6.,y*5.-clock*5.));float bend=.12*sin(y*7.-clock*9.)+.12*(n-.5);float width=mix(.46,.02,y);float x=abs(vUv.x-.5+bend*y);float edge=1.-smoothstep(width*.3,width,x);float alpha=edge*(1.-smoothstep(.45,1.,y))*smoothstep(0.,.12,y)*(.6+.4*n)*strength;vec3 color=mix(vec3(1.,.08,.005),vec3(1.,.8,.16),pow(1.-y,2.));gl_FragColor=vec4(color,alpha);}`});
 const smoke=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,toneMapped:false,uniforms:{clock:{value:0},strength:{value:0}},vertexShader:vertex,fragmentShader:`varying vec2 vUv;uniform float clock;uniform float strength;${noise}void main(){vec2 p=vUv*2.-1.;float n=noise(p*3.-vec2(clock*.2,clock*.5));float alpha=(1.-smoothstep(.1,1.,length(p)))*(.4+n)*strength;gl_FragColor=vec4(vec3(.13,.11,.1),alpha);}`});
 const core=new THREE.MeshBasicMaterial({color:'#fff2a4',toneMapped:false}),halo=new THREE.MeshBasicMaterial({color:'#ff5309',transparent:true,opacity:.35,depthWrite:false,toneMapped:false});
 function orb(name:string){const g=new THREE.Group();g.name=name;const inner=new THREE.Mesh(sphere,core);inner.scale.setScalar(.8);g.add(inner);const outer=new THREE.Mesh(sphere,halo);outer.scale.setScalar(1.35);g.add(outer);root.add(g);return g;}
 const charge=orb('Раскалённый сгусток в руке');charge.visible=false;
 const bolts=new Map<string,{root:THREE.Group;age:number;direction:THREE.Vector3;flames:THREE.Mesh[]}>();
 const body=new THREE.Group();body.name='Пламя на теле Vicki';root.add(body);body.visible=false;
 const flames=Array.from({length:22},()=>{const m=new THREE.Mesh(plane,flame);m.frustumCulled=false;body.add(m);return m;});
 const smokeRoot=new THREE.Group();smokeRoot.name='Дым после огненного удара';root.add(smokeRoot);smokeRoot.visible=false;
 const puffs=Array.from({length:10},()=>{const m=new THREE.Mesh(plane,smoke);m.frustumCulled=false;smokeRoot.add(m);return m;});
 const flash=orb('Короткая вспышка огненного попадания');flash.visible=false;
 const light=new THREE.PointLight('#ff6a14',0,32,1.6);root.add(light);
 function clearBolts(){for(const b of bolts.values())root.remove(b.root);bolts.clear();}
 function orient(m:THREE.Mesh,camera:THREE.Camera){m.quaternion.copy(camera.quaternion);}
 return {root,
  charge(p:Point){if(disposed)return;chargeLife=.1;charge.visible=true;charge.position.set(p.x,p.y,p.z);charge.scale.setScalar(1.1+.2*Math.sin(time*25));},
  bolt(key:string,p:Shot){if(disposed)return;let b=bolts.get(key);if(!b){if(bolts.size>=8){const old=bolts.keys().next().value!;root.remove(bolts.get(old)!.root);bolts.delete(old);}const group=orb('Быстрый огненный сгусток');const tails=Array.from({length:6},()=>{const m=new THREE.Mesh(plane,flame);group.add(m);return m;});b={root:group,age:0,direction:new THREE.Vector3(),flames:tails};bolts.set(key,b);}b.age=0;b.root.position.set(p.x,p.y,p.z);b.direction.set(p.vx??0,p.vy??0,p.vz??-1).normalize();},
  impact(p:Point,blocked=false){if(disposed)return;clearBolts();chargeLife=0;charge.visible=false;flash.position.set(p.x,p.y+7,p.z);flashLife=blocked?.08:.18;},
  update(dt:number,camera:THREE.Camera,hero:Point,burn:number){if(disposed)return;time+=dt;chargeLife=Math.max(0,chargeLife-dt);charge.visible=chargeLife>0;flame.uniforms.clock.value=time;flame.uniforms.strength.value=burn>0?Math.min(1,burn/.45):1;
   for(const [key,b] of bolts){b.age+=dt;if(b.age>.1){root.remove(b.root);bolts.delete(key);continue;}for(let i=0;i<b.flames.length;i++){const m=b.flames[i];m.position.copy(b.direction).multiplyScalar(-.8-i*.8);m.scale.set(3-i*.25,4-i*.3,1);orient(m,camera);}}
   body.position.set(hero.x,hero.y,hero.z);body.visible=burn>0;
   for(let i=0;i<flames.length;i++){const m=flames[i],a=i*2.39996,h=(i%6)*1.8;const rise=(time*(1.5+i%3*.25)+i*.31)%1;m.position.set(Math.cos(a)*(1.7+Math.sin(i)*.35),.3+h+rise*1.5,Math.sin(a)*1.7);m.scale.set(2.8+Math.sin(time*14+i)*.45,4+Math.sin(time*11+i*2)*.8,1);orient(m,camera);}
   if(burn>0)smokeLife=1.2;else smokeLife=Math.max(0,smokeLife-dt);
   smokeRoot.position.copy(body.position);smokeRoot.visible=smokeLife>0;smoke.uniforms.clock.value=time;smoke.uniforms.strength.value=burn>0?.1:.22*smokeLife/1.2;
   for(let i=0;i<puffs.length;i++){const m=puffs[i],a=i*2.4;const rise=(time*.4+i*.37)%1;m.position.set(Math.cos(a)*1.8,6+rise*10,Math.sin(a)*1.8);m.scale.setScalar(4+rise*2);orient(m,camera);}
   flashLife=Math.max(0,flashLife-dt);flash.visible=flashLife>0;flash.scale.setScalar(2+(1-flashLife/.18)*4);light.position.set(hero.x,hero.y+7,hero.z);light.intensity=burn>0?240+Math.sin(time*24)*60:flashLife>0?300:0;
  },
  clear(){clearBolts();chargeLife=flashLife=smokeLife=0;charge.visible=flash.visible=body.visible=smokeRoot.visible=false;light.intensity=0;},
  dispose(){if(disposed)return;this.clear();disposed=true;plane.dispose();sphere.dispose();flame.dispose();smoke.dispose();core.dispose();halo.dispose();},
 };
}
