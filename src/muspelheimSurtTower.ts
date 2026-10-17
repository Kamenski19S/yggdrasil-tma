import * as THREE from 'three';
export const SURT_TOWER_ASSET='Muspelheim_Surt_Tower.glb';
export const SURT_TOWER_POSITION={x:-315,z:-395};
export const SURT_TOWER_WIDTH=70;
export const SURT_TOWER_CREDIT={title:'Medieval Stone Castle - Hunyuan 3D vs SupaVoxel',author:'Simon Schulz',url:'https://sketchfab.com/3d-models/medieval-stone-castle-hunyuan-3d-vs-supavoxel-7aa66054cf3c4bfdb6bf637cea0ba4d6'};
/** A level rock foundation bridges the irregular summit without leaving the castle floating. */
export function createSurtTower(model:THREE.Object3D,sample:(x:number,z:number)=>number|null){
 const {x,z}=SURT_TOWER_POSITION,radius=46,segments=48,edge:Array<{x:number;z:number;y:number}>=[];
 let floorY=0;
 for(let i=0;i<segments;i++){const angle=i/segments*Math.PI*2,px=x+radius*Math.cos(angle),pz=z+radius*Math.sin(angle),y=Math.max(0,sample(px,pz)??0);edge.push({x:px,z:pz,y});floorY=Math.max(floorY,y);}
 for(let dx=-40;dx<=40;dx+=5)for(let dz=-40;dz<=40;dz+=5)if(Math.hypot(dx,dz)<=radius)floorY=Math.max(floorY,sample(x+dx,z+dz)??0);
 floorY+=.25;
 const root=new THREE.Group();root.name='Surt summit residence';
 const vertices:number[]=[],indices:number[]=[];
 vertices.push(x,floorY,z);
 for(const p of edge)vertices.push(p.x,floorY,p.z,p.x,p.y-1,p.z);
 for(let i=0;i<segments;i++){const a=1+2*i,b=1+2*((i+1)%segments);indices.push(0,b,a,a,b,a+1,a+1,b,b+1);}
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setIndex(indices);geometry.computeVertexNormals();
 const foundation=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color:'#403531',roughness:1,side:THREE.DoubleSide}));foundation.name='Summit rock foundation';foundation.receiveShadow=true;root.add(foundation);
 model.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3()),scale=SURT_TOWER_WIDTH/size.x;
 if(!Number.isFinite(scale)||scale<=0)throw Error('Invalid Surt tower bounds');
 const offset=new THREE.Group();offset.position.set(-center.x,-bounds.min.y,-center.z);offset.add(model);
 const fit=new THREE.Group();fit.scale.setScalar(scale);fit.add(offset);fit.position.set(x,floorY-.3,z);root.add(fit);
 model.traverse(o=>{if(o instanceof THREE.Mesh){o.receiveShadow=true;o.castShadow=true;}});root.updateWorldMatrix(true,true);
 const buildingBounds=new THREE.Box3().setFromObject(fit);
 return {root,floorY,buildingBounds,
  floorAt:(px:number,pz:number)=>Math.hypot(px-x,pz-z)<=radius?floorY:null,
  blocks:(px:number,pz:number,padding=1.5)=>px>buildingBounds.min.x-padding&&px<buildingBounds.max.x+padding&&pz>buildingBounds.min.z-padding&&pz<buildingBounds.max.z+padding,
 };
}
