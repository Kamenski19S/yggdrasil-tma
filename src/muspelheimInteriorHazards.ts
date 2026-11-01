import * as THREE from 'three';
type Position={x:number;z:number};
/** One instanced core + halo, so branching lightning stays cheap on phones. */
function lightning(color:string){
 const root=new THREE.Group(),geometry=new THREE.CylinderGeometry(1,1,1,6);
 const core=new THREE.InstancedMesh(geometry,new THREE.MeshBasicMaterial({color:'#fffbea',toneMapped:false}),36),halo=new THREE.InstancedMesh(geometry,new THREE.MeshBasicMaterial({color,transparent:true,opacity:.3,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}),36);
 core.frustumCulled=halo.frustumCulled=false;root.add(halo,core);const dummy=new THREE.Object3D(),up=new THREE.Vector3(0,1,0);
 const set=(points:THREE.Vector3[])=>{let count=0;for(let i=1;i<points.length&&count<36;i++){const a=points[i-1],b=points[i],direction=b.clone().sub(a);dummy.position.copy(a).add(b).multiplyScalar(.5);dummy.quaternion.setFromUnitVectors(up,direction.clone().normalize());for(const [mesh,width]of [[core,.1],[halo,.42]] as const){dummy.scale.set(width,direction.length(),width);dummy.updateMatrix();mesh.setMatrixAt(count,dummy.matrix);}count++;}core.count=halo.count=count;core.instanceMatrix.needsUpdate=halo.instanceMatrix.needsUpdate=true;};
 return {root,set};
}
export function createGoldenBallLightning(){
 const root=new THREE.Group();root.name='Пять золотых шаровых молний';let time=0,cooldown=0;
 const geometry=new THREE.SphereGeometry(1.65,20,14),core=new THREE.MeshBasicMaterial({color:'#fff1a0',toneMapped:false});
 const aura=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.FrontSide,uniforms:{time:{value:0}},vertexShader:'varying vec3 n;varying vec3 v;void main(){vec4 p=modelViewMatrix*vec4(position,1.);n=normalize(normalMatrix*normal);v=normalize(-p.xyz);gl_Position=projectionMatrix*p;}',fragmentShader:'uniform float time;varying vec3 n;varying vec3 v;void main(){float f=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);float wave=.75+.25*sin(n.y*24.+n.x*13.+time*7.);gl_FragColor=vec4(1.,.58,.055,(.14+.7*f)*wave);}' });
 const balls=Array.from({length:5},(_,i)=>{const group=new THREE.Group();group.name='Шаровая молния '+(i+1);const sphere=new THREE.Mesh(geometry,core),glow=new THREE.Mesh(geometry,aura);glow.scale.setScalar(1.8);group.add(sphere,glow);const arc=lightning('#ffc431');group.add(arc.root);root.add(group);return {group,arc};});
 const place=()=>balls.forEach(({group,arc},i)=>{const phase=time*(.3+i*.025)+i*Math.PI*2/5;group.position.set(Math.sin(phase)*30,8+Math.sin(phase*1.7+i)*3, -15+Math.sin(phase*1.4+i*.6)*50);group.rotation.y=time*.8+i;const points=Array.from({length:25},(_,j)=>{const a=j/24*Math.PI*4,r=1.9+.25*Math.sin(j*7+time*20);return new THREE.Vector3(Math.cos(a)*r,Math.sin(a*.5)*1.5,Math.sin(a)*r);});arc.set(points);});place();
 return {root,balls,update(dt:number,hero:Position){if(dt<=0)return false;time+=dt;cooldown=Math.max(0,cooldown-dt);aura.uniforms.time.value=time;place();if(hero.z>43)return false;const hit=balls.some(b=>Math.hypot(b.group.position.x-hero.x,b.group.position.z-hero.z)<4.3);if(hit&&cooldown===0){cooldown=1.6;return true;}return false;}};
}
export function createCeilingLightning(walkable:(x:number,z:number)=>boolean){
 const root=new THREE.Group();root.name='Молнии с потолка хранилища';const bolt=lightning('#8dbbff');root.add(bolt.root);bolt.root.visible=false;
 const marker=new THREE.Mesh(new THREE.RingGeometry(4.4,5,48),new THREE.MeshBasicMaterial({color:'#e8be50',transparent:true,opacity:.65,side:THREE.DoubleSide,depthWrite:false}));marker.rotation.x=-Math.PI/2;marker.position.y=.12;marker.visible=false;root.add(marker);
 const light=new THREE.PointLight('#bfdfff',0,40,2);root.add(light);let age=0,cooldown=1.5,phase:'idle'|'warning'|'strike'='idle',flashTime=0;
 return {root,marker,get phase(){return phase;},update(dt:number,hero:Position){if(dt<=0)return false;flashTime+=dt;let hit=false;
  if(phase==='idle'){cooldown-=dt;if(cooldown<=0&&hero.z<43&&walkable(hero.x,hero.z)){marker.position.x=hero.x;marker.position.z=hero.z;marker.visible=true;phase='warning';age=0;}}
  else{age+=dt;if(phase==='warning'){marker.material.opacity=.35+.4*Math.abs(Math.sin(age*12));if(age>=.9){phase='strike';age=0;bolt.root.visible=true;marker.material.color.set('#b9e5ff');hit=Math.hypot(hero.x-marker.position.x,hero.z-marker.position.z)<5;}}
   if(phase==='strike'){const x=marker.position.x,z=marker.position.z;const points=Array.from({length:19},(_,i)=>new THREE.Vector3(x+(i===0||i===18?0:Math.sin(i*13+Math.floor(flashTime*30))*2),58-i*58/18,z+(i===0||i===18?0:Math.cos(i*7+Math.floor(flashTime*30))*2)));bolt.set(points);light.position.set(x,10,z);light.intensity=age<.13?190:45;if(age>.32){phase='idle';cooldown=1.5;age=0;bolt.root.visible=marker.visible=false;light.intensity=0;marker.material.color.set('#e8be50');}}
  }return hit;}};
}
