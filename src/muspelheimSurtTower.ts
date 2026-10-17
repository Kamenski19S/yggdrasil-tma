import * as THREE from 'three';
export const SURT_TOWER_ASSET='Muspelheim_Surt_Tower.glb';
export const SURT_TOWER_POSITION={x:-315,z:-410};
export const SURT_TOWER_WIDTH=70;
export const SURT_TOWER_BASE_Y=40;
export const SURT_TOWER_CREDIT={title:'Medieval Stone Castle - Hunyuan 3D vs SupaVoxel',author:'Simon Schulz',url:'https://sketchfab.com/3d-models/medieval-stone-castle-hunyuan-3d-vs-supavoxel-7aa66054cf3c4bfdb6bf637cea0ba4d6'};
/** Hold the castle at Vicki's summit ledge height while the surrounding rock is arranged separately. */
export function createSurtTower(model:THREE.Object3D){
 const {x,z}=SURT_TOWER_POSITION;
 const root=new THREE.Group();root.name='Surt summit residence';
 model.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3()),scale=SURT_TOWER_WIDTH/size.x;
 if(!Number.isFinite(scale)||scale<=0)throw Error('Invalid Surt tower bounds');
 const floorY=SURT_TOWER_BASE_Y;
 const offset=new THREE.Group();offset.position.set(-center.x,-bounds.min.y,-center.z);offset.add(model);
 const fit=new THREE.Group();fit.scale.setScalar(scale);fit.add(offset);fit.position.set(x,floorY,z);root.add(fit);
 model.traverse(o=>{if(o instanceof THREE.Mesh){o.receiveShadow=true;o.castShadow=true;}});root.updateWorldMatrix(true,true);
 const buildingBounds=new THREE.Box3().setFromObject(fit);
 // Extract the gate from the imported atlas meshes while preserving its original textures.
 const door={x:-315.35,z:-380.8,halfWidth:5.2,archY:53.2};
 const hinges=[new THREE.Group(),new THREE.Group()];hinges[0].position.set(door.x-door.halfWidth,floorY,door.z);hinges[1].position.set(door.x+door.halfWidth,floorY,door.z);
 hinges.forEach((h,i)=>{h.name=i?'Surt gate right hinge':'Surt gate left hinge';root.add(h);});
 const centerPoint=new THREE.Vector3(),vertex=new THREE.Vector3();let gateTriangles=0;
 const sourceMeshes:THREE.Mesh[]=[];fit.traverse(o=>{if(o instanceof THREE.Mesh)sourceMeshes.push(o);});
 for(const mesh of sourceMeshes){const geometry=mesh.geometry,index=geometry.index;if(!index)continue;const p=geometry.getAttribute('position'),fixed:number[]=[],leaves:number[][]=[[],[]];
  for(let i=0;i<index.count;i+=3){centerPoint.set(0,0,0);for(let k=0;k<3;k++)centerPoint.add(vertex.fromBufferAttribute(p,index.getX(i+k)).applyMatrix4(mesh.matrixWorld));centerPoint.multiplyScalar(1/3);
   const dx=centerPoint.x-door.x,top=door.archY+Math.sqrt(Math.max(0,door.halfWidth**2-dx**2));
   const isDoor=Math.abs(dx)<door.halfWidth&&centerPoint.y<top&&centerPoint.z>-382&&centerPoint.z<-378.5;
   const target=isDoor?leaves[dx<0?0:1]:fixed;target.push(index.getX(i),index.getX(i+1),index.getX(i+2));if(isDoor)gateTriangles++;
  }
  for(let side=0;side<2;side++)if(leaves[side].length){const g=geometry.clone().applyMatrix4(mesh.matrixWorld);g.setIndex(leaves[side]);g.translate(-hinges[side].position.x,-floorY,-door.z);g.computeBoundingBox();g.computeBoundingSphere();const leaf=new THREE.Mesh(g,mesh.material);leaf.name='Original Surt gate leaf';leaf.castShadow=true;leaf.receiveShadow=true;hinges[side].add(leaf);}
  geometry.setIndex(fixed);geometry.computeBoundingBox();geometry.computeBoundingSphere();
 }
 if(gateTriangles<100)throw Error('Surt gate could not be separated from castle');
 let opening=0,nearby=false;
 // Slice static walls once at body height and index the resulting lines by spatial cell.
 // Movement and camera checks then use distances to nearby lines instead of model raycasts.
 const cellSize=4,segments:Array<[number,number,number,number]>=[],cells=new Map<string,number[]>(),sliceY=floorY+4;
 const points=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()];
 for(const mesh of sourceMeshes){const p=mesh.geometry.getAttribute('position'),index=mesh.geometry.index;if(!index)continue;
  for(let i=0;i<index.count;i+=3){for(let k=0;k<3;k++)points[k].fromBufferAttribute(p,index.getX(i+k)).applyMatrix4(mesh.matrixWorld);
   const cuts:THREE.Vector3[]=[];for(let k=0;k<3;k++){const a=points[k],b=points[(k+1)%3];if((a.y<=sliceY&&b.y>sliceY)||(b.y<=sliceY&&a.y>sliceY))cuts.push(a.clone().lerp(b,(sliceY-a.y)/(b.y-a.y)));}
   if(cuts.length!==2)continue;const [a,b]=cuts,id=segments.length;segments.push([a.x,a.z,b.x,b.z]);
   for(let cx=Math.floor(Math.min(a.x,b.x)/cellSize);cx<=Math.floor(Math.max(a.x,b.x)/cellSize);cx++)for(let cz=Math.floor(Math.min(a.z,b.z)/cellSize);cz<=Math.floor(Math.max(a.z,b.z)/cellSize);cz++){const key=`${cx},${cz}`,bucket=cells.get(key);if(bucket)bucket.push(id);else cells.set(key,[id]);}
  }
 }
 const wallBlocks=(px:number,pz:number,padding:number)=>{
  if(px<buildingBounds.min.x-padding||px>buildingBounds.max.x+padding||pz<buildingBounds.min.z-padding||pz>buildingBounds.max.z+padding)return false;
  const dx=Math.abs(px-door.x),dz=Math.abs(pz-door.z);
  if(dx<door.halfWidth-padding&&dz<4)return opening<.93;
  for(let cx=Math.floor((px-padding)/cellSize);cx<=Math.floor((px+padding)/cellSize);cx++)for(let cz=Math.floor((pz-padding)/cellSize);cz<=Math.floor((pz+padding)/cellSize);cz++)for(const id of cells.get(`${cx},${cz}`)??[]){
   const [ax,az,bx,bz]=segments[id],vx=bx-ax,vz=bz-az,t=THREE.MathUtils.clamp(((px-ax)*vx+(pz-az)*vz)/Math.max(.000001,vx*vx+vz*vz),0,1);
   if((px-ax-t*vx)**2+(pz-az-t*vz)**2<padding**2)return true;
  }
  return false;
 };
 const updateProximity=(dt:number,px:number,pz:number)=>{
  const dx=Math.abs(px-door.x),dz=Math.abs(pz-door.z);
  nearby=nearby?dx<8&&dz<9:dx<6&&dz<5.5;
  const inThreshold=dx<door.halfWidth+1&&dz<3;
  const target=nearby||inThreshold;
  opening=THREE.MathUtils.clamp(opening+(target?1:-1)*dt/.8,0,1);const eased=opening*opening*(3-2*opening);
  hinges[0].rotation.y=-eased*Math.PI*.53;hinges[1].rotation.y=eased*Math.PI*.53;root.updateWorldMatrix(true,true);
 };
 return {root,floorY,buildingBounds,door,gateTriangles,hinges,updateProximity,get opening(){return opening;},blocks:(px:number,pz:number,padding=1.5)=>wallBlocks(px,pz,padding)};
}
