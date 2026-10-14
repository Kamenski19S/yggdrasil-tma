import * as THREE from 'three';
import {AMULET_PARTS,amuletProgress,type AmuletPartId} from './niflheimAmulet';
export function createAmuletScene(scene:THREE.Scene,ground:(x:number,z:number)=>number){
 const materials=new Set<THREE.MeshStandardMaterial>();
 const places=new Map<AmuletPartId,THREE.Vector3>(),groups=new Map<AmuletPartId,THREE.Group>();
 AMULET_PARTS.forEach(p=>places.set(p.id,new THREE.Vector3(p.x,ground(p.x,p.z)+1.2,p.z)));
 const assembly=new THREE.Group();assembly.name='Восстановление амулета хранителей';assembly.visible=false;scene.add(assembly);
 let previous:boolean|undefined,started=-1;
 return {
  setPlace(id:AmuletPartId,p:THREE.Vector3){places.set(id,p.clone());},
  setAssembly(p:THREE.Vector3){assembly.position.copy(p);},
  load(asset:THREE.Group){AMULET_PARTS.forEach((p,i)=>{
   const mesh=asset.getObjectByName('AmuletShard'+(i+1)) as THREE.Mesh;if(!mesh?.isMesh)throw Error('Missing amulet piece');
   for(const material of Array.isArray(mesh.material)?mesh.material:[mesh.material]){const m=material as THREE.MeshStandardMaterial;m.emissive.set('#93bcbd');m.emissiveIntensity=.16;materials.add(m);}
   const group=new THREE.Group();group.name=p.name;group.add(mesh.clone());const box=new THREE.Box3().setFromObject(group),c=box.getCenter(new THREE.Vector3());group.children[0].position.set(-c.x,-c.y,-c.z);scene.add(group);groups.set(p.id,group);assembly.add(mesh.clone());
  });},
  near(x:number,z:number,done:readonly string[]){const p=amuletProgress(done);return AMULET_PARTS.find(part=>{const pos=places.get(part.id);return pos&&groups.has(part.id)&&!p.restored&&!p.collected.includes(part.id)&&Math.hypot(x-pos.x,z-pos.z)<6;})?.id??'';},
  update(time:number,done:readonly string[]){const p=amuletProgress(done);materials.forEach(m=>{m.emissiveIntensity=.16+Math.sin(time*1.7)*.04;});
   if(previous===false&&p.restored)started=time;previous=p.restored;
   AMULET_PARTS.forEach((part,i)=>{const g=groups.get(part.id),pos=places.get(part.id);if(!g||!pos)return;g.visible=!p.restored&&!p.collected.includes(part.id);g.position.copy(pos);g.position.y+=Math.sin(time*1.4+i)*.16;g.rotation.y=time*.35;});
   const elapsed=time-started;assembly.visible=started>=0&&elapsed<5;
   if(assembly.visible){const t=THREE.MathUtils.smoothstep(elapsed,0,3);assembly.rotation.y=(1-t)*Math.PI*2;assembly.children.forEach((piece,i)=>{const a=i*Math.PI/3;piece.position.set(Math.cos(a)*2.8*(1-t),Math.sin(a)*2.8*(1-t),0);});}
  }
 };
}
