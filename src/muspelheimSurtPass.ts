import * as THREE from 'three';
import {createMeshHeightSampler} from './muspelheimSurface';
import {SURT_PASS_POSITION,SURT_PASS_SCALE,SURT_PASS_BASE_Y,surtPassWalkHeight} from './muspelheimSurtPassLayout';
export {SURT_PASS_POSITION} from './muspelheimSurtPassLayout';
export const SURT_PASS_ASSET='Muspelheim_Surt_Twin_Bridge.glb';
export const SURT_PASS_CREDIT={title:'Two Medieval Towers and an Arch Bridge',author:'Sereib',url:'https://sketchfab.com/3d-models/two-medieval-towers-and-an-arch-bridge-34b6ec56138540ae9a88d3b1462156cc'};
/** Preserve the authored compact span and place it along the final canyon, not across its width. */
export function createSurtPass(source:THREE.Object3D){
 source.updateWorldMatrix(true,true);const box=new THREE.Box3().setFromObject(source),center=box.getCenter(new THREE.Vector3()),root=new THREE.Group();root.name='Рубеж клятвы — проход к Сурту';
 source.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const geometry=o.geometry.clone().applyMatrix4(o.matrixWorld);geometry.translate(-center.x,-box.min.y,-center.z);geometry.scale(SURT_PASS_SCALE.along,SURT_PASS_SCALE.height,SURT_PASS_SCALE.across);geometry.rotateY(Math.PI/2);geometry.translate(SURT_PASS_POSITION.x,SURT_PASS_BASE_Y,SURT_PASS_POSITION.z);geometry.computeBoundingBox();geometry.computeBoundingSphere();
 const old=(Array.isArray(o.material)?o.material[0]:o.material) as THREE.MeshStandardMaterial,material=old.clone();material.color.set('#aaa1a4');material.roughness=1;material.metalness=0;material.side=THREE.DoubleSide;if(material.map)material.map.anisotropy=4;
 const mesh=new THREE.Mesh(geometry,material);mesh.receiveShadow=true;mesh.name=o.name;root.add(mesh);});root.updateWorldMatrix(true,true);
 // Continuous stone courses close the tiny gaps between individually modelled bricks.
 const walkRoot=new THREE.Group(),vertices:number[]=[],indices:number[]=[],uvs:number[]=[];
 for(let i=0;i<=300;i++){const along=-75+i*.5,y=surtPassWalkHeight(along)!;const width=Math.abs(along)<=36?13:9;
  for(const cross of [-width/2,width/2]){vertices.push(SURT_PASS_POSITION.x+cross,y,SURT_PASS_POSITION.z-along);uvs.push((cross+7)/20,(along+75)/20);}
  if(i<300){const a=i*2;indices.push(a,a+2,a+1,a+1,a+2,a+3);}
 }
 const walkGeometry=new THREE.BufferGeometry();walkGeometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));walkGeometry.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));walkGeometry.setIndex(indices);walkGeometry.computeVertexNormals();
 const pavingMaterial=new THREE.MeshStandardMaterial({color:'#aaa0a1',roughness:1,side:THREE.DoubleSide}),walkMesh=new THREE.Mesh(walkGeometry,pavingMaterial);walkMesh.name='Continuous stone bridge deck and approaches';walkMesh.receiveShadow=true;walkRoot.add(walkMesh);root.add(walkRoot);root.updateWorldMatrix(true,true);
 const floorAt=createMeshHeightSampler(walkRoot);
 const points=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()],normal=new THREE.Vector3(),edge=new THREE.Vector3();
 type Triangle={v:THREE.Vector3[];low:number;high:number};const cells=new Map<string,Triangle[]>(),cellSize=5;
 root.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.getAttribute('position'),ids=o.geometry.index,count=ids?.count??p.count;
  for(let i=0;i<count;i+=3){for(let k=0;k<3;k++)points[k].fromBufferAttribute(p,ids?ids.getX(i+k):i+k).applyMatrix4(o.matrixWorld);
   normal.crossVectors(edge.subVectors(points[1],points[0]),normal.subVectors(points[2],points[0])).normalize();
   const low=Math.min(...points.map(v=>v.y)),high=Math.max(...points.map(v=>v.y));
   if(Math.abs(normal.y)>.72)continue;
   const triangle={v:points.map(v=>v.clone()),low,high};
   for(let x=Math.floor(Math.min(...points.map(v=>v.x))/cellSize);x<=Math.floor(Math.max(...points.map(v=>v.x))/cellSize);x++)for(let z=Math.floor(Math.min(...points.map(v=>v.z))/cellSize);z<=Math.floor(Math.max(...points.map(v=>v.z))/cellSize);z++){const key=`${x},${z}`,bucket=cells.get(key);if(bucket)bucket.push(triangle);else cells.set(key,[triangle]);}
  }
 });
 const bounds=new THREE.Box3().setFromObject(root),roofAt=createMeshHeightSampler(root);
 const blocks=(x:number,z:number,footY:number,padding=2)=>{
  if(x<bounds.min.x-padding||x>bounds.max.x+padding||z<bounds.min.z-padding||z>bounds.max.z+padding||footY>bounds.max.y)return false;
  const candidates=new Set<Triangle>();for(let cx=Math.floor((x-padding)/cellSize);cx<=Math.floor((x+padding)/cellSize);cx++)for(let cz=Math.floor((z-padding)/cellSize);cz<=Math.floor((z+padding)/cellSize);cz++)for(const t of cells.get(`${cx},${cz}`)??[])candidates.add(t);
  for(const t of candidates)for(const y of [footY+4.5,footY+10,footY+13.5]){if(y<t.low||y>t.high)continue;const cuts:THREE.Vector3[]=[];for(let k=0;k<3;k++){const a=t.v[k],b=t.v[(k+1)%3];if((a.y<=y&&b.y>y)||(b.y<=y&&a.y>y))cuts.push(a.clone().lerp(b,(y-a.y)/(b.y-a.y)));}if(cuts.length!==2)continue;const [a,b]=cuts,dx=b.x-a.x,dz=b.z-a.z,f=THREE.MathUtils.clamp(((x-a.x)*dx+(z-a.z)*dz)/Math.max(1e-8,dx*dx+dz*dz),0,1);if(Math.hypot(x-a.x-f*dx,z-a.z-f*dz)<padding)return true;}
  return false;
 };
 return {root,bounds,roofAt,floorAt,blocks,setPavingTexture:(texture:THREE.Texture)=>{pavingMaterial.map=texture;pavingMaterial.needsUpdate=true;}};
}
