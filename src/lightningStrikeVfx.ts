import * as THREE from 'three';
type Point={x:number;y:number;z:number};
/** Bounded world-space ribbons; no sprite sheets and no new downloads. */
export function createLightningStrikeVfx(){
 const root=new THREE.Group();root.name='Электрические дуги';
 const capacity=900,positions=new Float32Array(capacity*18),cores=new Float32Array(capacity*18);
 const geometry=new THREE.BufferGeometry(),coreGeometry=new THREE.BufferGeometry();
 geometry.setAttribute('position',new THREE.BufferAttribute(positions,3).setUsage(THREE.DynamicDrawUsage));coreGeometry.setAttribute('position',new THREE.BufferAttribute(cores,3).setUsage(THREE.DynamicDrawUsage));
 const material=new THREE.ShaderMaterial({uniforms:{tint:{value:new THREE.Color('#419eff')},alpha:{value:.75}},vertexShader:'void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'uniform vec3 tint;uniform float alpha;void main(){gl_FragColor=vec4(tint,alpha);}',transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide,toneMapped:false});
 const coreMaterial=material.clone();coreMaterial.uniforms.tint.value.set('#e8fcff');coreMaterial.uniforms.alpha.value=1;
 const mesh=new THREE.Mesh(geometry,material),coreMesh=new THREE.Mesh(coreGeometry,coreMaterial);mesh.frustumCulled=coreMesh.frustumCulled=false;root.add(mesh,coreMesh);
 const flashGeometry=new THREE.PlaneGeometry(1,1),flashMaterial=material.clone();flashMaterial.vertexShader='varying vec2 uvGlow;void main(){uvGlow=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}';flashMaterial.fragmentShader='varying vec2 uvGlow;uniform vec3 tint;uniform float alpha;void main(){float glow=pow(max(0.,1.-length(uvGlow-.5)*2.),2.);if(glow<.015)discard;gl_FragColor=vec4(tint,alpha*glow);}';flashMaterial.uniforms.tint.value.set('#d2f7ff');
 const flash=new THREE.Mesh(flashGeometry,flashMaterial);flash.visible=false;root.add(flash);
 let hero:THREE.Object3D|undefined,skin:THREE.Mesh|undefined,elapsed=0,flashLeft=0,boltLeft=0,count=0,disposed=false;
 const from=new THREE.Vector3(),to=new THREE.Vector3(),a=new THREE.Vector3(),b=new THREE.Vector3(),side=new THREE.Vector3(),eye=new THREE.Vector3(),direction=new THREE.Vector3();
 const samples=Array.from({length:56},()=>new THREE.Vector3());
 const random=(n:number)=>{const x=Math.sin(n*127.1+Math.floor(elapsed*24)*311.7)*43758.5453;return x-Math.floor(x);};
 function segment(p:THREE.Vector3,q:THREE.Vector3,width:number,camera:THREE.Camera){
  if(count>=capacity)return;direction.subVectors(q,p);eye.subVectors(camera.position,p);side.crossVectors(direction,eye).normalize().multiplyScalar(width);
  for(const [array,scale] of [[positions,1],[cores,.24]] as const){const s=side.clone().multiplyScalar(scale),v=[p.clone().add(s),p.clone().sub(s),q.clone().add(s),q.clone().add(s),p.clone().sub(s),q.clone().sub(s)];v.forEach((v,i)=>v.toArray(array,count*18+i*3));}count++;
 }
 function arc(p:THREE.Vector3,q:THREE.Vector3,width:number,jitter:number,seed:number,camera:THREE.Camera){
  a.copy(p);for(let i=1;i<=7;i++){b.copy(p).lerp(q,i/7);if(i<7)b.add(new THREE.Vector3(random(seed+i)-.5,random(seed+i+19)-.5,random(seed+i+37)-.5).multiplyScalar(jitter));segment(a,b,width,camera);a.copy(b);}
 }
 function clear(){flashLeft=boltLeft=0;geometry.setDrawRange(0,0);coreGeometry.setDrawRange(0,0);flash.visible=false;}
 return {root,
  bindHero(target:THREE.Object3D){hero=target;const meshes:THREE.Mesh[]=[];target.traverse(o=>{if(o instanceof THREE.SkinnedMesh)meshes.push(o);});skin=meshes.sort((a,b)=>b.geometry.getAttribute('position').count-a.geometry.getAttribute('position').count)[0];},
  strike(origin:Point,target:Point){from.set(origin.x,origin.y,origin.z);to.set(target.x,target.y+7,target.z);boltLeft=.14;flashLeft=.11;},
  update(dt:number,camera:THREE.Camera,electrified:number){if(disposed)return;elapsed+=dt;boltLeft=Math.max(0,boltLeft-dt);flashLeft=Math.max(0,flashLeft-dt);count=0;
   if(boltLeft>0){arc(from,to,.18,2.4,1,camera);arc(from,to,.08,3.2,90,camera);}
   if(hero&&skin&&electrified>0){hero.updateWorldMatrix(true,false);hero.updateMatrixWorld(true);if(skin instanceof THREE.SkinnedMesh)skin.skeleton.update();const vertices=skin.geometry.getAttribute('position').count;
    samples.forEach((p,i)=>{skin!.getVertexPosition(Math.min(vertices-1,Math.floor(random(i+500)*vertices)),p);p.applyMatrix4(skin!.matrixWorld);});
    for(let i=0;i<samples.length;i++){const p=samples[i];let nearest:THREE.Vector3|undefined,distance=Infinity;for(let j=0;j<samples.length;j++){const d=p.distanceToSquared(samples[j]);if(d>4&&d<64&&d<distance){nearest=samples[j];distance=d;}}if(nearest)arc(p,nearest,.08, .9,i*41,camera);}
   }
   geometry.setDrawRange(0,count*6);coreGeometry.setDrawRange(0,count*6);geometry.attributes.position.needsUpdate=coreGeometry.attributes.position.needsUpdate=true;
   flash.visible=flashLeft>0;flash.position.copy(to);flash.quaternion.copy(camera.quaternion);flash.scale.set(13,18,1);flashMaterial.uniforms.alpha.value=flashLeft/.11;
  },clear,
  dispose(){if(disposed)return;clear();disposed=true;root.removeFromParent();geometry.dispose();coreGeometry.dispose();flashGeometry.dispose();material.dispose();coreMaterial.dispose();flashMaterial.dispose();},
 };
}
