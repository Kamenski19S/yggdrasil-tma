import * as THREE from 'three';
import {createMeshHeightSampler} from './muspelheimSurface';
export const FORTRESS_ASSET='Muspelheim_Ancient_Fortress.glb';
export const FORTRESS_POSITION={x:155,z:-195};
export const FORTRESS_CREDIT={title:'Ancient Fortress Asset Pack - Part 2',author:'EqualizerX',url:'https://sketchfab.com/3d-models/ancient-fortress-asset-pack-part-2-43cab28dea5a47f69f8e30640cb9dd50'};
export const FORTRESS_LAYOUT=[
 {part:'Gateway-Main_',x:0,z:44,scale:2.7,yaw:0},
 {part:'Gateway-Main_',x:0,z:-44,scale:2.7,yaw:Math.PI},
 {part:'Gateway-Main_',x:66,z:0,scale:2.7,yaw:Math.PI/2},
 ...[-1,1].flatMap(side=>[-1,1].map(end=>({part:'Wall-Type02_',x:side*48,z:end*44,scale:3.1,yaw:end>0?0:Math.PI}))),
 {part:'Wall-Type02_',x:-66,z:-20,scale:3.1,yaw:-Math.PI/2},
 {part:'Wall-Type02WithStairs_',x:-66,z:20,scale:3.1,yaw:-Math.PI/2},
 ...[-1,1].flatMap(side=>[-1,1].map(end=>({part:end>0?'WatchTowerBastion01-Large_':'WatchTowerBastion02-Large_',x:side*66,z:end*44,scale:end>0?2:2.2,yaw:side*end>0?0:Math.PI}))),
];
/** Assemble the modular kit as a courtyard fortress, rather than its labelled display layout. */
export function createMuspelheimFortress(source:THREE.Object3D){
 source.updateWorldMatrix(true,true);const templates=new Map<string,THREE.Mesh>(),root=new THREE.Group();root.name='Древняя крепость Сурта';root.position.set(FORTRESS_POSITION.x,-.6,FORTRESS_POSITION.z);
 source.traverse(o=>{if(o instanceof THREE.Mesh)templates.set(o.name,o);});
 const find=(prefix:string)=>[...templates.values()].find(o=>o.name.startsWith(prefix));
 const normalWall=find('Wall-Type02_');if(!normalWall)throw Error('Fortress wall is missing');const wallDepth=new THREE.Box3().setFromObject(normalWall).getSize(new THREE.Vector3()).z;
 for(const placement of FORTRESS_LAYOUT){const original=find(placement.part);if(!original)throw Error('Fortress part is missing: '+placement.part);
  const geometry=original.geometry.clone().applyMatrix4(original.matrixWorld),box=new THREE.Box3().setFromBufferAttribute(geometry.getAttribute('position') as THREE.BufferAttribute),center=box.getCenter(new THREE.Vector3());if(placement.part.includes('Stairs'))center.z=box.max.z-wallDepth/2;
  geometry.translate(-center.x,-box.min.y,-center.z);geometry.computeBoundingBox();geometry.computeBoundingSphere();
  const old=(Array.isArray(original.material)?original.material[0]:original.material) as THREE.MeshStandardMaterial,material=old.clone();material.color.set('#9b9692');material.roughness=1;material.metalness=0;material.side=THREE.DoubleSide;if(material.map)material.map.anisotropy=4;
  const mesh=new THREE.Mesh(geometry,material);mesh.name=placement.part;mesh.position.set(placement.x,0,placement.z);mesh.rotation.y=placement.yaw;mesh.scale.setScalar(placement.scale);mesh.receiveShadow=true;root.add(mesh);
 }
 const pavingGeometry=new THREE.PlaneGeometry(112,68);pavingGeometry.rotateX(-Math.PI/2);pavingGeometry.setAttribute('uv',new THREE.Float32BufferAttribute([0,3.4,5.6,3.4,0,0,5.6,0],2));const pavingMaterial=new THREE.MeshStandardMaterial({color:'#ffffff',roughness:1});const paving=new THREE.Mesh(pavingGeometry,pavingMaterial);paving.name='Fortress stone courtyard';paving.position.y=.68;root.add(paving);
 root.updateWorldMatrix(true,true);
 type Triangle={v:THREE.Vector3[];lo:number;hi:number};const cells=new Map<string,Triangle[]>(),vertices:number[]=[],v=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()],a=new THREE.Vector3(),b=new THREE.Vector3(),normal=new THREE.Vector3();
 root.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.getAttribute('position'),ids=o.geometry.index,count=ids?.count??p.count;
  for(let i=0;i<count;i+=3){for(let k=0;k<3;k++)v[k].fromBufferAttribute(p,ids?ids.getX(i+k):i+k).applyMatrix4(o.matrixWorld);normal.crossVectors(a.subVectors(v[1],v[0]),b.subVectors(v[2],v[0])).normalize();const lo=Math.min(...v.map(p=>p.y)),hi=Math.max(...v.map(p=>p.y));
   // Gates remain open at ground level: never treat their overhead beams as walking floors.
   if(!o.name.startsWith('Gateway')&&!o.name.startsWith('WatchTower')&&normal.y>.4)vertices.push(...v.flatMap(p=>p.toArray()));
   if(Math.abs(normal.y)>.72)continue;const t={v:v.map(p=>p.clone()),lo,hi};for(let x=Math.floor(Math.min(...v.map(p=>p.x))/5);x<=Math.floor(Math.max(...v.map(p=>p.x))/5);x++)for(let z=Math.floor(Math.min(...v.map(p=>p.z))/5);z<=Math.floor(Math.max(...v.map(p=>p.z))/5);z++){const key=`${x},${z}`,bucket=cells.get(key);if(bucket)bucket.push(t);else cells.set(key,[t]);}
  }
 });
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));const mesh=new THREE.Mesh(geometry),floorAt=createMeshHeightSampler(mesh);geometry.dispose();(mesh.material as THREE.Material).dispose();const bounds=new THREE.Box3().setFromObject(root),roofAt=createMeshHeightSampler(root);
 const blocks=(x:number,z:number,footY:number,padding=2)=>{
  if(x<bounds.min.x-padding||x>bounds.max.x+padding||z<bounds.min.z-padding||z>bounds.max.z+padding||footY>bounds.max.y)return false;
  const candidates=new Set<Triangle>();for(let cx=Math.floor((x-padding)/5);cx<=Math.floor((x+padding)/5);cx++)for(let cz=Math.floor((z-padding)/5);cz<=Math.floor((z+padding)/5);cz++)for(const t of cells.get(`${cx},${cz}`)??[])candidates.add(t);
  for(const t of candidates)for(const y of [footY+4.5,footY+10,footY+13.5]){if(y<t.lo||y>t.hi)continue;const cuts:THREE.Vector3[]=[];for(let k=0;k<3;k++){const a=t.v[k],b=t.v[(k+1)%3];if((a.y<=y&&b.y>y)||(b.y<=y&&a.y>y))cuts.push(a.clone().lerp(b,(y-a.y)/(b.y-a.y)));}if(cuts.length!==2)continue;const [a,b]=cuts,dx=b.x-a.x,dz=b.z-a.z,f=THREE.MathUtils.clamp(((x-a.x)*dx+(z-a.z)*dz)/Math.max(1e-8,dx*dx+dz*dz),0,1);if(Math.hypot(x-a.x-f*dx,z-a.z-f*dz)<padding)return true;}
  return false;
 };
 return {root,bounds,floorAt,roofAt,blocks,setPavingTexture:(texture:THREE.Texture)=>{pavingMaterial.map=texture;pavingMaterial.needsUpdate=true;}};
}
