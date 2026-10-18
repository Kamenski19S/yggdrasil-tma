import * as THREE from 'three';
export const MUSPELHEIM_SIZE=525;
export const MUSPELHEIM_MARGIN=3;
// The original entrance square remains fixed. Only land beyond the gateway expands.
export const MAIN_WORLD={minX:-525,maxX:525,minZ:-458.75,maxZ:110};
export const WORLD_OUTLINE=[[-262.5,262.5],[262.5,262.5],[262.5,110],[525,110],[525,-458.75],[-525,-458.75],[-525,110],[-262.5,110]] as const;
export function muspelheimMapPoint(x:number,z:number){const scale=276/1050;return {x:150+x*scale,y:12+(z-MAIN_WORLD.minZ)*scale};}
/** Add editable strips to the original GLB, preserving every entrance vertex and UV. */
export function expandMuspelheimTerrain(root:THREE.Object3D){
 let source:THREE.Mesh|undefined;root.traverse(o=>{if(!source&&o instanceof THREE.Mesh)source=o;});
 if(!source||!source.parent)throw Error('Terrain mesh parent is missing');
 root.updateWorldMatrix(true,true);const original=source,p=original.geometry.getAttribute('position'),uv=original.geometry.getAttribute('uv'),side=Math.sqrt(p.count),inverse=original.matrixWorld.clone().invert();
 const x0=p.getX(0),z0=p.getZ(0),dx=p.getX(1)-x0,dz=p.getZ(side)-z0;
 const rects=[[-525,525,-458.75,-262.5],[-525,-262.5,-262.5,108.5],[262.5,525,-262.5,108.5],[-525,-262.5,108.5,110],[262.5,525,108.5,110]];
 for(const [minX,maxX,minZ,maxZ] of rects){
  const nx=Math.ceil((maxX-minX)/3.5),nz=Math.ceil((maxZ-minZ)/3.5),vertices:number[]=[],uvs:number[]=[],indices:number[]=[],v=new THREE.Vector3();
  for(let j=0;j<=nz;j++)for(let i=0;i<=nx;i++){
   v.set(THREE.MathUtils.lerp(minX,maxX,i/nx),0,THREE.MathUtils.lerp(minZ,maxZ,j/nz)).applyMatrix4(inverse);vertices.push(v.x,v.y,v.z);
   const gx=(v.x-x0)/dx,gz=(v.z-z0)/dz;uvs.push(uv.getX(0)+gx*(uv.getX(1)-uv.getX(0))+gz*(uv.getX(side)-uv.getX(0)),uv.getY(0)+gx*(uv.getY(1)-uv.getY(0))+gz*(uv.getY(side)-uv.getY(0)));
   if(i<nx&&j<nz){const a=j*(nx+1)+i;indices.push(a,a+nx+1,a+1,a+1,a+nx+1,a+nx+2);}
  }
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));geometry.setIndex(indices);geometry.computeVertexNormals();
  // Imported materials may use a second UV set for roughness/AO.
  for(const key of ['uv1','uv2'])if(original.geometry.getAttribute(key))geometry.setAttribute(key,geometry.getAttribute('uv').clone());
  const patch=new THREE.Mesh(geometry,original.material);patch.position.copy(original.position);patch.quaternion.copy(original.quaternion);patch.scale.copy(original.scale);patch.name='Expanded Muspelheim editable land';original.parent!.add(patch);
 }
 root.updateWorldMatrix(true,true);
}
/** O(1) height lookup on the exported grid, including its b-c triangle diagonal.
 * Reads live Y coordinates: sculpting the grid also updates walking height. */
export function createTerrainSampler(terrain:THREE.Object3D){
 const samplers:Array<(x:number,z:number)=>number|null>=[];
 terrain.updateWorldMatrix(true,true);
 terrain.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  const ground=o,positions=ground.geometry.getAttribute('position');let columns=1;
  while(columns<positions.count&&Math.abs(positions.getZ(columns)-positions.getZ(0))<1e-6)columns++;
  const rows=positions.count/columns;if(columns<2||!Number.isInteger(rows)||rows<2)throw new Error('Muspelheim requires a regular terrain grid');
  const x0=positions.getX(0),z0=positions.getZ(0),dx=positions.getX(1)-x0,dz=positions.getZ(columns)-z0;
  const inverse=ground.matrixWorld.clone().invert(),point=new THREE.Vector3();
  samplers.push((x,z)=>{
   point.set(x,0,z).applyMatrix4(inverse);let gx=(point.x-x0)/dx,gz=(point.z-z0)/dz;
   if(gx<-.0001||gz<-.0001||gx>columns-1+.0001||gz>rows-1+.0001)return null;
   gx=THREE.MathUtils.clamp(gx,0,columns-1);gz=THREE.MathUtils.clamp(gz,0,rows-1);
   const i=Math.min(columns-2,Math.floor(gx)),j=Math.min(rows-2,Math.floor(gz)),u=gx-i,v=gz-j,a=j*columns+i;
   const ya=positions.getY(a),yb=positions.getY(a+1),yc=positions.getY(a+columns),yd=positions.getY(a+columns+1);
   point.y=u+v<=1?ya+(yb-ya)*u+(yc-ya)*v:yd+(yc-yd)*(1-u)+(yb-yd)*(1-v);
   return point.applyMatrix4(ground.matrixWorld).y;
  });
 });
 if(!samplers.length)throw new Error('Muspelheim terrain mesh is missing');
 return (x:number,z:number)=>{for(const sample of samplers){const y=sample(x,z);if(y!=null)return y;}return null;};
}
export function clampMuspelheimPosition(x:number,z:number){
 const margin=MUSPELHEIM_MARGIN,entranceEdge=MUSPELHEIM_SIZE/2-margin;
 let px=THREE.MathUtils.clamp(x,MAIN_WORLD.minX+margin,MAIN_WORLD.maxX-margin),pz=THREE.MathUtils.clamp(z,MAIN_WORLD.minZ+margin,entranceEdge);
 if(Math.abs(px)>entranceEdge&&pz>MAIN_WORLD.maxZ-margin){
  if(Math.abs(px)-entranceEdge<pz-(MAIN_WORLD.maxZ-margin))px=Math.sign(px)*entranceEdge;else pz=MAIN_WORLD.maxZ-margin;
 }
 return {x:px,z:pz};
}
