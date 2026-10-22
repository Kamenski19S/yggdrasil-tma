import * as THREE from 'three';
/** Exact triangle heights with a small spatial index for walking and camera probes. */
export function createMeshHeightSampler(root:THREE.Object3D,cellSize=4){
 root.updateWorldMatrix(true,true);
 const bounds=new THREE.Box3().setFromObject(root);
 type Triangle={ax:number;az:number;ay:number;bx:number;bz:number;by:number;cx:number;cz:number;cy:number;den:number};
 const cells=new Map<string,Triangle[]>(),a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3();
 const cell=(x:number,z:number)=>`${x},${z}`;
 root.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.getAttribute('position'),ids=o.geometry.index,count=ids?.count??p.count;
  for(let i=0;i<count;i+=3){
   a.fromBufferAttribute(p,ids?ids.getX(i):i).applyMatrix4(o.matrixWorld);b.fromBufferAttribute(p,ids?ids.getX(i+1):i+1).applyMatrix4(o.matrixWorld);c.fromBufferAttribute(p,ids?ids.getX(i+2):i+2).applyMatrix4(o.matrixWorld);
   const den=(b.z-c.z)*(a.x-c.x)+(c.x-b.x)*(a.z-c.z);if(Math.abs(den)<1e-8)continue;
   const t:Triangle={ax:a.x,az:a.z,ay:a.y,bx:b.x,bz:b.z,by:b.y,cx:c.x,cz:c.z,cy:c.y,den};
   for(let x=Math.floor(Math.min(a.x,b.x,c.x)/cellSize);x<=Math.floor(Math.max(a.x,b.x,c.x)/cellSize);x++)for(let z=Math.floor(Math.min(a.z,b.z,c.z)/cellSize);z<=Math.floor(Math.max(a.z,b.z,c.z)/cellSize);z++){
    const key=cell(x,z),bucket=cells.get(key);if(bucket)bucket.push(t);else cells.set(key,[t]);
   }
  }
 });
 const floorAt=(x:number,z:number)=>{
  if(x<bounds.min.x||x>bounds.max.x||z<bounds.min.z||z>bounds.max.z)return null;
  let height=-Infinity;
  for(const t of cells.get(cell(Math.floor(x/cellSize),Math.floor(z/cellSize)))??[]){
   const u=((t.bz-t.cz)*(x-t.cx)+(t.cx-t.bx)*(z-t.cz))/t.den,w=((t.cz-t.az)*(x-t.cx)+(t.ax-t.cx)*(z-t.cz))/t.den,q=1-u-w;
   if(Math.min(u,w,q)>=-1e-6)height=Math.max(height,u*t.ay+w*t.by+q*t.cy);
  }
  return height===-Infinity?null:height;
 };
 return floorAt;
}
