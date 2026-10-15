import * as THREE from 'three';
/** Index a static shell once; each step tests only triangles in nearby X/Z cells. */
export function staticTriangleCollision(meshes:THREE.Mesh[],cellSize=6){
 const positions:number[]=[],cells=new Map<string,number[]>();
 const a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3();
 for(const mesh of meshes){
  mesh.updateWorldMatrix(true,false);const p=mesh.geometry.getAttribute('position'),index=mesh.geometry.index;
  for(let i=0;i<(index?.count??p.count);i+=3){
   const id=positions.length;
   for(const [v,k] of [[a,0],[b,1],[c,2]] as const){v.fromBufferAttribute(p,index?index.getX(i+k):i+k).applyMatrix4(mesh.matrixWorld);positions.push(v.x,v.y,v.z);}
   const minX=Math.floor(Math.min(a.x,b.x,c.x)/cellSize),maxX=Math.floor(Math.max(a.x,b.x,c.x)/cellSize);
   const minZ=Math.floor(Math.min(a.z,b.z,c.z)/cellSize),maxZ=Math.floor(Math.max(a.z,b.z,c.z)/cellSize);
   for(let x=minX;x<=maxX;x++)for(let z=minZ;z<=maxZ;z++){const key=x+','+z;const bucket=cells.get(key)||[];bucket.push(id);cells.set(key,bucket);}
  }
 }
 const data=new Float32Array(positions),ray=new THREE.Ray(),direction=new THREE.Vector3(),hit=new THREE.Vector3();
 return (from:THREE.Vector3,to:THREE.Vector3)=>{
  direction.subVectors(to,from);const length=direction.length();if(length<1e-7)return false;
  ray.set(from,direction.divideScalar(length));const end=to.clone().addScaledVector(direction,.45),seen=new Set<number>();
  const minX=Math.floor(Math.min(from.x,end.x)/cellSize),maxX=Math.floor(Math.max(from.x,end.x)/cellSize);
  const minZ=Math.floor(Math.min(from.z,end.z)/cellSize),maxZ=Math.floor(Math.max(from.z,end.z)/cellSize);
  for(let x=minX;x<=maxX;x++)for(let z=minZ;z<=maxZ;z++)for(const id of cells.get(x+','+z)||[]){
   if(seen.has(id))continue;seen.add(id);a.fromArray(data,id);b.fromArray(data,id+3);c.fromArray(data,id+6);
   if(ray.intersectTriangle(a,b,c,false,hit)&&hit.distanceTo(from)<=length+.45)return true;
  }
  return false;
 };
}
