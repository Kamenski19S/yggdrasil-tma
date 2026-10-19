import * as THREE from 'three';
import {mineTunnelFloor} from './ashMinePath';
const SCALE=.12;
/** Reuse actual authored meshes; the complete diorama is the final chamber. */
export function buildMineModel(source:THREE.Object3D){
 source.updateMatrixWorld(true);const root=new THREE.Group(),hall=new THREE.Group(),ground:THREE.Mesh[]=[],rocks:THREE.Mesh[]=[];
 hall.name='Оригинальный зал Magical Abandoned Mine';root.add(hall);
 source.traverse(o=>{if(!(o instanceof THREE.Mesh)||/BLOCK_|MineTrack/.test(o.name))return;const mesh=o.clone();mesh.geometry=o.geometry.clone().applyMatrix4(o.matrixWorld);mesh.position.set(0,0,0);mesh.rotation.set(0,0,0);mesh.scale.set(1,1,1);mesh.updateMatrix();mesh.matrixAutoUpdate=true;
  mesh.material=(Array.isArray(o.material)?o.material:[o.material]).map(m=>m.clone());if(mesh.material.length===1)mesh.material=mesh.material[0];
  hall.add(mesh);if(/Ground1/.test(mesh.name))ground.push(mesh);if(/RocksMat/.test(mesh.name))rocks.push(mesh);
 });
 hall.rotation.y=-Math.PI/2;hall.scale.setScalar(SCALE);hall.position.set(24+330*SCALE,-115.38*SCALE,-240-554*SCALE);hall.updateMatrixWorld(true);
 const rockMaterial=rocks[0].material as THREE.MeshStandardMaterial;
 for(const mesh of ground){const material=(mesh.material as THREE.MeshStandardMaterial).clone();material.map=rockMaterial.map;material.color.set('#c9c1b6');mesh.material=material;}
 const ray=new THREE.Raycaster(),origin=new THREE.Vector3(),down=new THREE.Vector3(0,-1,0);
 const floorAt=(x:number,z:number):number|null=>{if(z> -241)return mineTunnelFloor(x,z);origin.set(x,150,z);ray.set(origin,down);const hit=ray.intersectObjects(ground,false)[0];return hit?hit.point.y:null;};
 const solids:THREE.Mesh[]=[];hall.traverse(o=>{if(o instanceof THREE.Mesh&&!/Ground|Water|Firefly|MineTrack/.test(o.name))solids.push(o);});
 const wallRay=new THREE.Raycaster(),direction=new THREE.Vector3(),point=new THREE.Vector3();
 const blocked=(x:number,z:number,y:number)=>{if(z> -241)return false;point.set(x,y+5,z);for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){direction.set(dx,0,dz);wallRay.set(point,direction);wallRay.far=1.8;if(wallRay.intersectObjects(solids,false).length)return true;}return false;};
 const occluders:THREE.Mesh[]=[];root.traverse(o=>{if(o instanceof THREE.Mesh&&!o.name.includes('Рельсы')&&!/Ground|Water|Firefly/.test(o.name)){occluders.push(o);for(const m of Array.isArray(o.material)?o.material:[o.material]){m.transparent=true;m.depthWrite=true;}}});
 const faded=new Set<THREE.Material>(),sight=new THREE.Raycaster(),target=new THREE.Vector3();
 const updateView=(camera:THREE.Camera,x:number,y:number,z:number)=>{
  for(const m of faded){m.opacity=1;m.depthWrite=true;}faded.clear();
  target.set(x,y+7,z);const delta=target.clone().sub(camera.position);sight.set(camera.position,delta.clone().normalize());sight.far=delta.length()-1;
  for(const hit of sight.intersectObjects(occluders,false)){
   const mesh=hit.object as THREE.Mesh;
   for(const material of Array.isArray(mesh.material)?mesh.material:[mesh.material]){material.opacity=.08;material.depthWrite=false;faded.add(material);}
  }
 };
 return {root,hall,floorAt,blocked,updateView,rockMap:rockMaterial.map};
}
