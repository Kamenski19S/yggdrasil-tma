import * as THREE from 'three';
const SCALE=.12;
/** Reuse actual authored meshes; the complete diorama is the final chamber. */
export function buildMineModel(source:THREE.Object3D,walls:Array<{x:number;z:number;yaw:number}>,route:Array<{x:number;z:number}>){
 source.updateMatrixWorld(true);const root=new THREE.Group(),hall=new THREE.Group(),ground:THREE.Mesh[]=[],rocks:THREE.Mesh[]=[],tracks:THREE.Mesh[]=[];
 hall.name='Оригинальный зал Magical Abandoned Mine';root.add(hall);
 source.traverse(o=>{if(!(o instanceof THREE.Mesh)||/BLOCK_/.test(o.name))return;const mesh=o.clone();mesh.geometry=o.geometry.clone().applyMatrix4(o.matrixWorld);mesh.position.set(0,0,0);mesh.rotation.set(0,0,0);mesh.scale.set(1,1,1);mesh.updateMatrix();mesh.matrixAutoUpdate=true;
  mesh.material=(Array.isArray(o.material)?o.material:[o.material]).map(m=>m.clone());if(mesh.material.length===1)mesh.material=mesh.material[0];
  hall.add(mesh);if(/Ground1/.test(mesh.name))ground.push(mesh);if(/RocksMat/.test(mesh.name))rocks.push(mesh);if(/MineTrack/.test(mesh.name))tracks.push(mesh);
 });
 hall.rotation.y=-Math.PI/2;hall.scale.setScalar(SCALE);hall.position.set(24+330*SCALE,-115.38*SCALE,-240-554*SCALE);hall.updateMatrixWorld(true);
 // Authored rocks become continuous tall corridor walls, with no roof or beams.
 walls.filter(p=>p.z> -240).forEach((p,i)=>{const original=rocks[(i*13)%rocks.length],geo=original.geometry.clone();geo.computeBoundingBox();const b=geo.boundingBox!,size=b.getSize(new THREE.Vector3()),c=b.getCenter(new THREE.Vector3());geo.translate(-c.x,-b.min.y,-c.z);geo.scale(13.5/size.x,38/size.y,6/size.z);const wall=new THREE.Mesh(geo,original.material);wall.name='Скала из загруженной шахты';wall.position.set(p.x,0,p.z);wall.rotation.y=p.yaw;root.add(wall);});
 const template=tracks[0],geo=template.geometry.clone();geo.computeBoundingBox();const b=geo.boundingBox!,size=b.getSize(new THREE.Vector3()),c=b.getCenter(new THREE.Vector3());geo.translate(-c.x,-b.min.y,-c.z);geo.scale(1/size.x,1/size.y,1/size.z);geo.rotateY(Math.PI/2);
 const segments:Array<{x:number;z:number;length:number;yaw:number}>=[];
 for(let i=1;i<route.length;i++){const a=route[i-1],b=route[i],len=Math.hypot(b.x-a.x,b.z-a.z);for(let d=0;d<len;d+=10){const length=Math.min(10,len-d),t=(d+length/2)/len;segments.push({x:THREE.MathUtils.lerp(a.x,b.x,t),z:THREE.MathUtils.lerp(a.z,b.z,t),length,yaw:Math.atan2(b.x-a.x,b.z-a.z)});}}
 const rails=new THREE.InstancedMesh(geo,template.material,segments.length),dummy=new THREE.Object3D();rails.name='Рельсы из загруженной шахты до входа';segments.forEach((s,i)=>{dummy.position.set(s.x,.04,s.z);dummy.rotation.y=s.yaw;dummy.scale.set(9,.65,s.length+.12);dummy.updateMatrix();rails.setMatrixAt(i,dummy.matrix);});root.add(rails);
 const ray=new THREE.Raycaster(),origin=new THREE.Vector3(),down=new THREE.Vector3(0,-1,0);
 const floorAt=(x:number,z:number):number|null=>{if(z> -241)return 0;origin.set(x,150,z);ray.set(origin,down);const hit=ray.intersectObjects(ground,false)[0];return hit?hit.point.y:null;};
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
 return {root,hall,floorAt,blocked,updateView};
}
