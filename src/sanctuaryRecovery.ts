import * as THREE from 'three';

export const SANCTUARY_RECOVERY_SECONDS=15;
export function recoveryHealth(startHp:number,maxHp:number,elapsed:number){
 return Math.min(maxHp,Math.floor(startHp+(maxHp-startHp)*Math.min(1,Math.max(0,elapsed)/SANCTUARY_RECOVERY_SECONDS)));
}
export function createRecoveryAura(){
 const root=new THREE.Group();root.name='Золотая аура возрождения Vicki';root.visible=false;
 const gold=new THREE.MeshBasicMaterial({color:'#ffd369',transparent:true,opacity:.45,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending});
 const ring=new THREE.Mesh(new THREE.TorusGeometry(4.8,.14,8,64),gold);ring.rotation.x=Math.PI/2;ring.position.y=.25;root.add(ring);
 const veil=new THREE.Mesh(new THREE.SphereGeometry(1,24,16),gold.clone());veil.scale.set(4.5,8,4.5);veil.position.y=7;veil.material.opacity=.08;root.add(veil);
 const coords=new Float32Array(48*3),geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(coords,3));
 const particles=new THREE.Points(geometry,new THREE.PointsMaterial({color:'#ffe7a3',size:.45,transparent:true,opacity:.85,depthWrite:false,blending:THREE.AdditiveBlending}));root.add(particles);
 let time=0;
 return {root,update(dt:number,hero:THREE.Object3D,active:boolean){root.visible=active;if(!active)return;time+=dt;root.position.copy(hero.position);ring.scale.setScalar(1+.08*Math.sin(time*4));veil.material.opacity=.065+.025*Math.sin(time*3);for(let i=0;i<48;i++){const a=i*2.39996+time*.6,r=3.8+.6*Math.sin(i);coords[i*3]=Math.cos(a)*r;coords[i*3+1]=(i*.73+time*3)%15;coords[i*3+2]=Math.sin(a)*r;}geometry.attributes.position.needsUpdate=true;},dispose(){ring.geometry.dispose();veil.geometry.dispose();geometry.dispose();gold.dispose();veil.material.dispose();particles.material.dispose();}};
}
