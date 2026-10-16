import * as THREE from 'three';
export const MUSPELHEIM_SIZE=300;
export const MUSPELHEIM_MARGIN=3;
/** O(1) height lookup on the exported grid, including its b-c triangle diagonal.
 * Reads live Y coordinates: sculpting the grid also updates walking height. */
export function createTerrainSampler(terrain:THREE.Object3D){
 let mesh:THREE.Mesh|undefined;
 terrain.traverse(o=>{if(!mesh&&o instanceof THREE.Mesh)mesh=o;});
 if(!mesh)throw new Error('Muspelheim terrain mesh is missing');
 const ground=mesh,positions=ground.geometry.getAttribute('position'),side=Math.sqrt(positions.count);
 if(!Number.isInteger(side)||side<2)throw new Error('Muspelheim requires a regular terrain grid');
 const x0=positions.getX(0),z0=positions.getZ(0),dx=positions.getX(1)-x0,dz=positions.getZ(side)-z0;
 ground.updateWorldMatrix(true,false);
 const inverse=ground.matrixWorld.clone().invert(),point=new THREE.Vector3();
 return (x:number,z:number)=>{
  point.set(x,0,z).applyMatrix4(inverse);
  const gx=(point.x-x0)/dx,gz=(point.z-z0)/dz;
  if(gx<0||gz<0||gx>side-1||gz>side-1)return null;
  const i=Math.min(side-2,Math.floor(gx)),j=Math.min(side-2,Math.floor(gz)),u=gx-i,v=gz-j,a=j*side+i;
  const ya=positions.getY(a),yb=positions.getY(a+1),yc=positions.getY(a+side),yd=positions.getY(a+side+1);
  const y=u+v<=1?ya+(yb-ya)*u+(yc-ya)*v:yd+(yc-yd)*(1-u)+(yb-yd)*(1-v);
  point.y=y;return point.applyMatrix4(ground.matrixWorld).y;
 };
}
export function clampMuspelheimPosition(x:number,z:number){
 const edge=MUSPELHEIM_SIZE/2-MUSPELHEIM_MARGIN;
 return {x:THREE.MathUtils.clamp(x,-edge,edge),z:THREE.MathUtils.clamp(z,-edge,edge)};
}
