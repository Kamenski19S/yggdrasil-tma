import * as THREE from 'three';
type Point={x:number;y:number;z:number};
/** Soft procedural smoke, without sprite sheets, sparks or radial confetti. */
export function createShadowStrikeVfx(){
 const root=new THREE.Group();root.name='Тёмный сгусток и туман';let time=0,disposed=false;
 const plane=new THREE.PlaneGeometry(1,1),sphere=new THREE.SphereGeometry(1,16,12);
 const smoke=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,toneMapped:false,uniforms:{clock:{value:0},opacity:{value:0}},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`
 varying vec2 vUv;uniform float clock;uniform float opacity;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
 void main(){vec2 p=vUv*2.-1.;float n=.55*noise(p*2.8+vec2(clock*.17,-clock*.23))+.3*noise(p*5.5-vec2(clock*.11,clock*.15));float edge=1.-smoothstep(.12,1.,length(p)+n*.2);float density=edge*(.35+n)*opacity;vec3 color=mix(vec3(.035,.007,.065),vec3(.24,.035,.39),n);gl_FragColor=vec4(color,density);}`});
 const core=new THREE.ShaderMaterial({toneMapped:false,vertexShader:`varying vec3 n;varying vec3 v;void main(){vec4 p=modelViewMatrix*vec4(position,1.);n=normalize(normalMatrix*normal);v=normalize(-p.xyz);gl_Position=projectionMatrix*p;}`,fragmentShader:`varying vec3 n;varying vec3 v;void main(){float rim=pow(1.-abs(dot(normalize(n),normalize(v))),2.);gl_FragColor=vec4(mix(vec3(.055,.006,.1),vec3(.39,.055,.62),rim),1.);}`});
 const hazeMaterial=new THREE.MeshBasicMaterial({color:'#581288',transparent:true,opacity:.16,depthWrite:false,toneMapped:false});
 function orb(name:string){const g=new THREE.Group();g.name=name;g.add(new THREE.Mesh(sphere,core));const shell=new THREE.Mesh(sphere,hazeMaterial);shell.scale.setScalar(1.4);g.add(shell);root.add(g);return g;}
 const charge=orb('Накопление тёмного сгустка');charge.visible=false;let chargeLife=0;
 const bolts=new Map<string,{root:THREE.Group;age:number}>();
 const fog=new THREE.Group();fog.name='Тёмно-фиолетовый туман вокруг Vicki';root.add(fog);fog.visible=false;
 const puffs=Array.from({length:24},(_,i)=>{const mesh=new THREE.Mesh(plane,smoke);mesh.frustumCulled=false;fog.add(mesh);return mesh;});
 function clearBolts(){for(const b of bolts.values())root.remove(b.root);bolts.clear();}
 return {root,
  charge(p:Point){if(disposed)return;chargeLife=.09;charge.visible=true;charge.position.set(p.x,p.y,p.z);charge.scale.setScalar(1.2+.15*Math.sin(time*22));},
  bolt(key:string,p:Point){if(disposed)return;let b=bolts.get(key);if(!b){if(bolts.size>=8){const key=bolts.keys().next().value!;root.remove(bolts.get(key)!.root);bolts.delete(key);}b={root:orb('Быстрый тёмный сгусток'),age:0};bolts.set(key,b);}b.age=0;b.root.position.set(p.x,p.y,p.z);b.root.scale.setScalar(1.5);},
  impact(){clearBolts();chargeLife=0;charge.visible=false;},
  update(dt:number,camera:THREE.Camera,hero:Point,remaining:number){if(disposed)return;time+=dt;chargeLife=Math.max(0,chargeLife-dt);charge.visible=chargeLife>0;for(const [key,b] of bolts){b.age+=dt;if(b.age>.09){root.remove(b.root);bolts.delete(key);}}
   fog.visible=remaining>0;fog.position.set(hero.x,hero.y,hero.z);smoke.uniforms.clock.value=time;smoke.uniforms.opacity.value=.24*Math.min(1,remaining/.7);
   for(let i=0;i<puffs.length;i++){const a=i*2.39996+time*(i%2?.28:-.22),h=(i*.618+time*.09)%1,r=2.3+Math.sin(i*3.1+time*.8)*.7,m=puffs[i];m.position.set(Math.cos(a)*r,1+h*12,Math.sin(a)*r);m.scale.set(7+Math.sin(i*2.3)*1.2,6+Math.cos(i)*1.2,1);m.quaternion.copy(camera.quaternion);m.rotateZ(i*.7+time*.04);}
  },
  clear(){clearBolts();chargeLife=0;charge.visible=false;fog.visible=false;},
  dispose(){if(disposed)return;this.clear();disposed=true;plane.dispose();sphere.dispose();smoke.dispose();core.dispose();hazeMaterial.dispose();},
 };
}
