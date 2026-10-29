import * as THREE from 'three';
type Point={x:number;y:number;z:number};
type Flying=Point&{vx?:number;vy?:number;vz?:number};
const UP=new THREE.Vector3(0,1,0);
/** Faceted, pointed solid with the long axis along Y. No billboard artwork. */
function crystalGeometry(){
 const positions:number[]=[];for(let i=0;i<6;i++){const a=i/6*Math.PI*2,b=(i+1)/6*Math.PI*2,x=Math.cos(a),z=Math.sin(a),nx=Math.cos(b),nz=Math.sin(b);positions.push(0,1,0,nx,-.3,nz,x,-.3,z,0,-1,0,x,-.3,z,nx,-.3,nz);}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.computeVertexNormals();return g;
}
export function createIceStrikeVfx(){
 const root=new THREE.Group();root.name='Ледяной удар · объёмная магия';let disposed=false,time=0,serial=0;
 const geometry=crystalGeometry(),ice=new THREE.MeshStandardMaterial({color:'#78d9ff',emissive:'#1689c7',emissiveIntensity:.75,metalness:.15,roughness:.15,flatShading:true}),white=new THREE.MeshBasicMaterial({color:'#d3ffff',toneMapped:false});
 const glowMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:{alpha:{value:1}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 vUv;uniform float alpha;void main(){float r=length(vUv-.5)*2.;float a=pow(max(0.,1.-r),3.)*alpha;if(a<.005)discard;gl_FragColor=vec4(.2,.72,1.,a);}' });
 const glowGeometry=new THREE.PlaneGeometry(1,1);
 const bolts=new Map<string,{group:THREE.Group;glow:THREE.Mesh;last:THREE.Vector3;ttl:number;direction:THREE.Vector3}>();
 const maxParticles=192,particlePositions=new Float32Array(maxParticles*3),particleSizes=new Float32Array(maxParticles),particleAlpha=new Float32Array(maxParticles);
 const particleGeometry=new THREE.BufferGeometry();particleGeometry.setAttribute('position',new THREE.BufferAttribute(particlePositions,3).setUsage(THREE.DynamicDrawUsage));particleGeometry.setAttribute('size',new THREE.BufferAttribute(particleSizes,1).setUsage(THREE.DynamicDrawUsage));particleGeometry.setAttribute('alpha',new THREE.BufferAttribute(particleAlpha,1).setUsage(THREE.DynamicDrawUsage));
 const particleMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,vertexShader:'attribute float size;attribute float alpha;varying float a;void main(){a=alpha;vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(size*900./max(1.,-p.z),1.,36.);}',fragmentShader:'varying float a;void main(){float d=length(gl_PointCoord-.5)*2.;float fall=pow(max(0.,1.-d),2.);if(fall<.02)discard;gl_FragColor=vec4(.42,.85,1.,a*fall);}' });
 const points=new THREE.Points(particleGeometry,particleMaterial);points.frustumCulled=false;root.add(points);
 type Particle={p:THREE.Vector3;v:THREE.Vector3;age:number;life:number;size:number};const particles:Particle[]=[];
 const chips=new THREE.InstancedMesh(geometry,ice,48);chips.count=0;chips.frustumCulled=false;root.add(chips);
 const fragments:Array<{p:THREE.Vector3;v:THREE.Vector3;age:number;life:number;size:number;rotation:THREE.Quaternion}>=[];
 function particle(p:THREE.Vector3,v:THREE.Vector3,size=.5,life=.2){if(particles.length===maxParticles)particles.shift();particles.push({p:p.clone(),v,age:0,life,size});}
 const body=new THREE.Group();body.name='Иней и ледяные оковы Vicki';root.add(body);
 const heroMaterials:Array<{material:THREE.MeshStandardMaterial;color:THREE.Color;emissive:THREE.Color;intensity:number}>=[];
 const frostIce=ice.clone();frostIce.transparent=true;frostIce.depthWrite=false;
 const cuffs=new THREE.InstancedMesh(geometry,frostIce,10);body.add(cuffs);for(let i=0;i<10;i++){const angle=i/10*Math.PI*2,p=new THREE.Vector3(Math.cos(angle)*2.2,.8+(i%3)*.35,Math.sin(angle)*1.8),q=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),Math.cos(angle)*.28),s=new THREE.Vector3(.25+(i%2)*.12,1.3+(i%3)*.4,.25);cuffs.setMatrixAt(i,new THREE.Matrix4().compose(p,q,s));}body.visible=false;
 const charge=new THREE.Group(),chargeCore=new THREE.Mesh(geometry,white),chargeGlow=new THREE.Mesh(glowGeometry,glowMaterial);chargeCore.scale.set(.2,.7,.2);chargeGlow.scale.setScalar(3);charge.add(chargeCore,chargeGlow);charge.visible=false;root.add(charge);let chargeLeft=0,chargeDirection=new THREE.Vector3(0,0,1);
 let freeze=0,slow=0;const matrix=new THREE.Matrix4(),scale=new THREE.Vector3();
 function removeBolt(key:string){const b=bolts.get(key);if(b){root.remove(b.group);bolts.delete(key);}}
 return {root,
  bindHero(hero:THREE.Object3D){const seen=new Set<THREE.Material>();hero.traverse(o=>{if(o instanceof THREE.Mesh)for(const material of Array.isArray(o.material)?o.material:[o.material])if(material instanceof THREE.MeshStandardMaterial&&!seen.has(material)){seen.add(material);heroMaterials.push({material,color:material.color.clone(),emissive:material.emissive.clone(),intensity:material.emissiveIntensity});}});},
  charge(p:Point,target:Point){if(disposed)return;charge.position.set(p.x,p.y,p.z);chargeDirection.set(target.x-p.x,target.y+7-p.y,target.z-p.z).normalize();chargeLeft=.08;},
  bolt(key:string,p:Flying){if(disposed)return;let b=bolts.get(key);const current=new THREE.Vector3(p.x,p.y,p.z);
   if(!b){if(bolts.size>=4)removeBolt(bolts.keys().next().value!);const group=new THREE.Group(),outer=new THREE.Mesh(geometry,ice),core=new THREE.Mesh(geometry,white),glow=new THREE.Mesh(glowGeometry,glowMaterial);group.name='Быстрый ледяной кристалл';outer.scale.set(.48,2.0,.48);core.scale.set(.16,1.85,.16);glow.scale.set(3,5,1);group.add(outer,core,glow);root.add(group);b={group,glow,last:current.clone(),ttl:.08,direction:new THREE.Vector3(0,0,1)};bolts.set(key,b);}
   if(p.vx!==undefined)b.direction.set(p.vx,p.vy??0,p.vz??0).normalize();const distance=current.distanceTo(b.last),steps=Math.min(18,Math.max(1,Math.ceil(distance/.5)));for(let i=0;i<steps;i++){const at=b.last.clone().lerp(current,(i+1)/steps);particle(at,new THREE.Vector3(Math.sin(serial++*2.4)*.7,.3,Math.cos(serial*1.8)*.7),.4,.18);}
   b.last.copy(current);b.group.position.copy(current);b.group.quaternion.setFromUnitVectors(UP,b.direction);b.ttl=.08;
  },
  impact(p:Point,blocked=false){if(disposed)return;for(const key of [...bolts.keys()])removeBolt(key);const center=new THREE.Vector3(p.x,p.y,p.z);
   for(let i=0;i<28;i++){const a=i*2.39996,y=1-2*(i+.5)/28,r=Math.sqrt(1-y*y),v=new THREE.Vector3(Math.cos(a)*r,y,Math.sin(a)*r).multiplyScalar(blocked?16:22);particle(center,v.clone().multiplyScalar(.5),.9,.13+(i%4)*.035);if(fragments.length>=48)fragments.shift();fragments.push({p:center.clone(),v,age:0,life:.22+(i%5)*.035,size:.17+(i%3)*.05,rotation:new THREE.Quaternion().setFromUnitVectors(UP,v.clone().normalize())});}
  },
  frost(p:Point,frozen:number,slowed:number){freeze=frozen;slow=slowed;body.position.set(p.x,p.y,p.z);},
  update(dt:number,camera:THREE.Camera){if(disposed)return;time+=dt;chargeLeft=Math.max(0,chargeLeft-dt);charge.visible=chargeLeft>0;chargeCore.quaternion.setFromUnitVectors(UP,chargeDirection);chargeGlow.quaternion.copy(camera.quaternion);
   for(const [key,b] of bolts){b.ttl-=dt;if(b.ttl<=0){removeBolt(key);continue;}b.glow.quaternion.copy(b.group.quaternion.clone().invert().multiply(camera.quaternion));}
   for(let i=particles.length-1;i>=0;i--){const p=particles[i];p.age+=dt;if(p.age>=p.life){particles.splice(i,1);continue;}p.p.addScaledVector(p.v,dt);}
   particles.forEach((p,i)=>{p.p.toArray(particlePositions,i*3);particleSizes[i]=p.size;particleAlpha[i]=1-p.age/p.life;});particleGeometry.setDrawRange(0,particles.length);for(const a of Object.values(particleGeometry.attributes))a.needsUpdate=true;
   for(let i=fragments.length-1;i>=0;i--){const f=fragments[i];f.age+=dt;if(f.age>=f.life){fragments.splice(i,1);continue;}f.v.y-=30*dt;f.p.addScaledVector(f.v,dt);}
   fragments.forEach((f,i)=>{const s=f.size*(1-f.age/f.life);scale.set(s,s*2.7,s);matrix.compose(f.p,f.rotation,scale);chips.setMatrixAt(i,matrix);});chips.count=fragments.length;chips.instanceMatrix.needsUpdate=true;
   body.visible=freeze>0||slow>0;for(const h of heroMaterials){h.material.color.copy(h.color).lerp(new THREE.Color('#a5e5ff'),freeze>0?.5:slow>0?.15:0);h.material.emissive.copy(h.emissive).lerp(new THREE.Color('#1689b3'),freeze>0?.25:0);h.material.emissiveIntensity=freeze>0?Math.max(.3,h.intensity):h.intensity;}frostIce.opacity=freeze>0?.85:.2;
  },
  clear(){for(const key of [...bolts.keys()])removeBolt(key);particles.length=fragments.length=0;chips.count=0;particleGeometry.setDrawRange(0,0);freeze=slow=chargeLeft=0;body.visible=charge.visible=false;for(const h of heroMaterials){h.material.color.copy(h.color);h.material.emissive.copy(h.emissive);h.material.emissiveIntensity=h.intensity;}},
  dispose(){this.clear();disposed=true;root.removeFromParent();for(const g of [geometry,glowGeometry,particleGeometry])g.dispose();for(const m of [ice,white,glowMaterial,particleMaterial,frostIce])m.dispose();},
 };
}
