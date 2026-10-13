import * as THREE from 'three';
import {CRYSTAL_PARTS,type CrystalPartId,waterCrystalProgress} from './waterCrystalQuest';
/** Three actual closed pieces of the uploaded diamond; no substitute primitives. */
export function createWaterCrystalScene(scene:THREE.Scene){
 const material=new THREE.MeshStandardMaterial({color:'#d8f5ff',transparent:true,opacity:.7,roughness:.08,metalness:.28,emissive:'#80c7df',emissiveIntensity:.45,flatShading:true,depthWrite:false});
 const groups=new Map<CrystalPartId,THREE.Group>();
 const assembly=new THREE.Group();assembly.name='Соединение кристалла первозданной воды';scene.add(assembly);assembly.visible=false;
 const models:THREE.Mesh[]=[];let assemblyAt=0,previousAssembled:boolean|undefined;
 const positions=new Map<CrystalPartId,THREE.Vector3>();
 let origin:THREE.Vector3|undefined;
 return {
  setPlace(id:CrystalPartId,point:THREE.Vector3){positions.set(id,point.clone());},
  setAssembly(point:THREE.Vector3){origin=point.clone();assembly.position.copy(point);},
  load(asset:THREE.Group){
   asset.updateMatrixWorld(true);
   CRYSTAL_PARTS.forEach((part,i)=>{
    const source=asset.getObjectByName('WaterShard'+(i+1)) as THREE.Mesh;
    if(!source?.isMesh)throw Error('Missing matching crystal shard');
    const group=new THREE.Group();group.name=part.name;
    const mesh=new THREE.Mesh(source.geometry,material);group.add(mesh);
    const b=new THREE.Box3().setFromObject(group),c=b.getCenter(new THREE.Vector3());mesh.position.set(-c.x,-b.min.y,-c.z);
    scene.add(group);groups.set(part.id,group);
    const joined=new THREE.Mesh(source.geometry,material);assembly.add(joined);models.push(joined);
   });
  },
  near(x:number,z:number,done:readonly string[]){
   const p=waterCrystalProgress(done);
   return CRYSTAL_PARTS.find(part=>{const pos=positions.get(part.id);return groups.has(part.id)&&pos&&!p.collected.includes(part.id)&&!p.assembled&&!p.gateOpen&&Math.hypot(x-pos.x,z-pos.z)<6;})?.id??'';
  },
  update(time:number,done:readonly string[]){
   const p=waterCrystalProgress(done);
   if(previousAssembled===false&&p.assembled)assemblyAt=time;
   previousAssembled=p.assembled;
   material.emissiveIntensity=.45+Math.sin(time*2)*.12;
   for(const part of CRYSTAL_PARTS){
    const group=groups.get(part.id),pos=positions.get(part.id);if(!group)continue;
    group.visible=!!pos&&!p.collected.includes(part.id)&&!p.assembled&&!p.gateOpen;
    if(pos){group.position.copy(pos);group.position.y+=.2+Math.sin(time*1.6+CRYSTAL_PARTS.indexOf(part))*.12;group.rotation.y=time*.22;}
   }
   const elapsed=time-assemblyAt;assembly.visible=!!origin&&assemblyAt>0&&elapsed<5&&p.assembled;
   if(assembly.visible){
    const t=THREE.MathUtils.smoothstep(elapsed,0,2.8);assembly.rotation.y=(1-t)*Math.PI*2;
    models.forEach((mesh,i)=>{const angle=i*Math.PI*2/3;mesh.position.set(Math.cos(angle)*2.2*(1-t),(i-1)*1.8*(1-t),Math.sin(angle)*2.2*(1-t));});
   }
  }
 };
}
