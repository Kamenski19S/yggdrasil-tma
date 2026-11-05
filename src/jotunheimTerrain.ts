import * as THREE from 'three';

export const JOTUNHEIM_TERRAIN_ASSET='Jotunheim_Mountain_Range.glb';
export const JOTUNHEIM_SIZE=1200;
export const JOTUNHEIM_SPAWN={x:0,z:480};

/** Index the actual transformed triangles so feet and camera follow the visible GLB. */
export function createJotunheimTerrain(root:THREE.Object3D){
 const original=new THREE.Box3().setFromObject(root);
 const scale=JOTUNHEIM_SIZE/Math.max(original.max.x-original.min.x,original.max.z-original.min.z);
 const wrapper=new THREE.Group();wrapper.add(root);wrapper.scale.setScalar(scale);
 wrapper.position.set(-(original.min.x+original.max.x)*scale/2,-original.min.y*scale,-(original.min.z+original.max.z)*scale/2);
 wrapper.updateMatrixWorld(true);
 const bounds=new THREE.Box3().setFromObject(wrapper),cellSize=JOTUNHEIM_SIZE/48;
 type Triangle={ax:number;az:number;ay:number;bx:number;bz:number;by:number;cx:number;cz:number;cy:number;den:number};
 const cells=new Map<string,Triangle[]>(),a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3();
 const cell=(n:number)=>Math.floor(n/cellSize);
 root.traverse(object=>{
  if(!(object instanceof THREE.Mesh))return;
  object.receiveShadow=true;
  const geometry=object.geometry,positions=geometry.getAttribute('position'),indices=geometry.index;
  const count=indices?.count??positions.count;
  for(let i=0;i<count;i+=3){
   a.fromBufferAttribute(positions,indices?indices.getX(i):i).applyMatrix4(object.matrixWorld);
   b.fromBufferAttribute(positions,indices?indices.getX(i+1):i+1).applyMatrix4(object.matrixWorld);
   c.fromBufferAttribute(positions,indices?indices.getX(i+2):i+2).applyMatrix4(object.matrixWorld);
   const den=(b.z-c.z)*(a.x-c.x)+(c.x-b.x)*(a.z-c.z);if(Math.abs(den)<1e-10)continue;
   const triangle:Triangle={ax:a.x,az:a.z,ay:a.y,bx:b.x,bz:b.z,by:b.y,cx:c.x,cz:c.z,cy:c.y,den};
   for(let x=cell(Math.min(a.x,b.x,c.x));x<=cell(Math.max(a.x,b.x,c.x));x++)for(let z=cell(Math.min(a.z,b.z,c.z));z<=cell(Math.max(a.z,b.z,c.z));z++){
    const key=x+','+z,list=cells.get(key);if(list)list.push(triangle);else cells.set(key,[triangle]);
   }
  }
 });
 function height(x:number,z:number):number|null{
  if(x<bounds.min.x||x>bounds.max.x||z<bounds.min.z||z>bounds.max.z)return null;
  let top=-Infinity;
  for(const t of cells.get(cell(x)+','+cell(z))??[]){
   const u=((t.bz-t.cz)*(x-t.cx)+(t.cx-t.bx)*(z-t.cz))/t.den;
   const v=((t.cz-t.az)*(x-t.cx)+(t.ax-t.cx)*(z-t.cz))/t.den;
   if(u>=-1e-6&&v>=-1e-6&&u+v<=1+1e-6)top=Math.max(top,u*t.ay+v*t.by+(1-u-v)*t.cy);
  }
  return Number.isFinite(top)?top:null;
 }
 return {root:wrapper,bounds,height};
}
