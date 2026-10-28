import * as THREE from 'three';
import {createMeshHeightSampler} from './muspelheimSurface';
export const DARK_VAULT_ASSET='Muspelheim_Dark_Thread_Vault.glb';
export const DARK_VAULT_POSITION={x:-300,z:-20};
export const DARK_VAULT_WIDTH=50;
export const DARK_VAULT_YAW=Math.PI/2;
export const DARK_VAULT_RETURN={x:-271,z:-20};
export const DARK_VAULT_THRESHOLD={x:-301,z:-20};
export const DARK_VAULT_CREDIT={title:'Weathered Stone Crypt Entrance',author:'Pigcraft',url:'https://sketchfab.com/3d-models/weathered-stone-crypt-entrance-9595297ceeb8487c847e6dba9f875d95'};
/** A separate sealed vault on the upper plain, its gate facing the central plaza. */
export function createDarkThreadVault(model:THREE.Object3D,groundY=0){
 model.updateWorldMatrix(true,true);const original=new THREE.Box3().setFromObject(model),center=original.getCenter(new THREE.Vector3()),scale=DARK_VAULT_WIDTH/(original.max.x-original.min.x);
 const offset=new THREE.Group();offset.position.set(-center.x,-original.min.y,-center.z);offset.add(model);
 const fit=new THREE.Group();fit.scale.setScalar(scale);fit.add(offset);
 const root=new THREE.Group();root.name='Хранилище тёмных нитей';root.position.set(DARK_VAULT_POSITION.x,groundY-.55,DARK_VAULT_POSITION.z);root.rotation.y=DARK_VAULT_YAW;root.add(fit);root.updateWorldMatrix(true,true);
 model.traverse(o=>{if(o instanceof THREE.Mesh){o.receiveShadow=true;for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial){m.metalness=0;m.roughness=.95;m.color.set('#b2aaa4');if(m.map)m.map.anisotropy=4;}}});
 // Lift the imported grille itself, preserving atlas UVs and the surrounding arch.
 const gate=new THREE.Group();gate.name='Подъёмная решётка хранилища';root.add(gate);let opening=0,opened=false,gateTriangles=0;
 const rootInverse=root.matrixWorld.clone().invert(),gatePieces:THREE.Mesh[]=[];
 model.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const geometry=o.geometry,positions=geometry.getAttribute('position'),index=geometry.index,keep:number[]=[],lift:number[]=[],v=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()];
  for(let i=0;i<(index?.count??positions.count);i+=3){const ids=[0,1,2].map(k=>index?index.getX(i+k):i+k);ids.forEach((id,k)=>v[k].fromBufferAttribute(positions,id).applyMatrix4(o.matrixWorld));const lo=Math.min(...v.map(p=>p.y)),hi=Math.max(...v.map(p=>p.y));
   const inDoor=v.every(p=>Math.abs(p.z-DARK_VAULT_POSITION.z)<6.4&&p.x>-309&&p.x<-288)&&lo>2.8&&hi<28&&Math.abs(v[1].clone().sub(v[0]).cross(v[2].clone().sub(v[0])).normalize().y)<.8;
   (inDoor?lift:keep).push(...ids);
  }
  if(!lift.length)return;gateTriangles+=lift.length/3;const gateGeometry=geometry.clone();gateGeometry.setIndex(lift);gateGeometry.applyMatrix4(rootInverse.clone().multiply(o.matrixWorld));gateGeometry.computeBoundingBox();gateGeometry.computeBoundingSphere();const part=new THREE.Mesh(gateGeometry,o.material);part.userData.vaultGate=true;gatePieces.push(part);const rest=geometry.clone();rest.setIndex(keep);rest.computeBoundingBox();rest.computeBoundingSphere();o.geometry=rest;geometry.dispose();
 });gatePieces.forEach(p=>gate.add(p));
 // A shallow stone approach joins the uneven plinth to the plain at Vicki's step height.
 const approachGeometry=new THREE.BufferGeometry();approachGeometry.setAttribute('position',new THREE.Float32BufferAttribute([-6,.6,26,6,.6,26,-6,4.4,11,6,4.4,11],3));approachGeometry.setAttribute('uv',new THREE.Float32BufferAttribute([0,0,.6,0,0,.75,.6,.75],2));approachGeometry.setIndex([0,1,2,2,1,3]);approachGeometry.computeVertexNormals();
 const approachMaterial=new THREE.MeshStandardMaterial({color:'#999293',roughness:1,side:THREE.DoubleSide});const approach=new THREE.Mesh(approachGeometry,approachMaterial);approach.name='Dark vault stone approach';approach.receiveShadow=true;root.add(approach);root.updateWorldMatrix(true,true);
 const sill=new THREE.Mesh(new THREE.BoxGeometry(11,.8,14),approachMaterial);sill.name='Непрерывный каменный порог в зал';sill.position.set(0,3.87,0);root.add(sill);root.updateWorldMatrix(true,true);
 const floorVertices:number[]=[],points=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()],normal=new THREE.Vector3(),edge=new THREE.Vector3();
 type Triangle={v:THREE.Vector3[];low:number;high:number;gate:boolean};const cells=new Map<string,Triangle[]>(),cellSize=5;
 root.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.getAttribute('position'),ids=o.geometry.index,count=ids?.count??p.count;
  for(let i=0;i<count;i+=3){for(let k=0;k<3;k++)points[k].fromBufferAttribute(p,ids?ids.getX(i+k):i+k).applyMatrix4(o.matrixWorld);
   normal.crossVectors(edge.subVectors(points[1],points[0]),normal.subVectors(points[2],points[0])).normalize();
   const low=Math.min(...points.map(v=>v.y)),high=Math.max(...points.map(v=>v.y));
   // Only low steps and the plinth are walking surfaces; the roof stays overhead.
   if(normal.y>.4&&high<8)floorVertices.push(...points.flatMap(v=>v.toArray()));
   if(Math.abs(normal.y)>.72)continue;
   const triangle={v:points.map(v=>v.clone()),low,high,gate:!!o.userData.vaultGate};
   for(let x=Math.floor(Math.min(...points.map(v=>v.x))/cellSize);x<=Math.floor(Math.max(...points.map(v=>v.x))/cellSize);x++)for(let z=Math.floor(Math.min(...points.map(v=>v.z))/cellSize);z<=Math.floor(Math.max(...points.map(v=>v.z))/cellSize);z++){const key=`${x},${z}`,bucket=cells.get(key);if(bucket)bucket.push(triangle);else cells.set(key,[triangle]);}
  }
 });
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(floorVertices,3));const floorMesh=new THREE.Mesh(geometry),floorAt=createMeshHeightSampler(floorMesh);geometry.dispose();(floorMesh.material as THREE.Material).dispose();
 const bounds=new THREE.Box3().setFromObject(root),roofAt=createMeshHeightSampler(root);
 const blocks=(x:number,z:number,footY:number,padding=2)=>{
  if(x<bounds.min.x-padding||x>bounds.max.x+padding||z<bounds.min.z-padding||z>bounds.max.z+padding||footY>bounds.max.y)return false;
  const candidates=new Set<Triangle>();for(let cx=Math.floor((x-padding)/cellSize);cx<=Math.floor((x+padding)/cellSize);cx++)for(let cz=Math.floor((z-padding)/cellSize);cz<=Math.floor((z+padding)/cellSize);cz++)for(const t of cells.get(`${cx},${cz}`)??[])candidates.add(t);
  for(const t of candidates)if(!(t.gate&&opening>.94))for(const y of [footY+4.5,footY+10,footY+13.5]){if(y<t.low||y>t.high)continue;const cuts:THREE.Vector3[]=[];for(let k=0;k<3;k++){const a=t.v[k],b=t.v[(k+1)%3];if((a.y<=y&&b.y>y)||(b.y<=y&&a.y>y))cuts.push(a.clone().lerp(b,(y-a.y)/(b.y-a.y)));}if(cuts.length!==2)continue;const [a,b]=cuts,dx=b.x-a.x,dz=b.z-a.z,f=THREE.MathUtils.clamp(((x-a.x)*dx+(z-a.z)*dz)/Math.max(1e-8,dx*dx+dz*dz),0,1);if(Math.hypot(x-a.x-f*dx,z-a.z-f*dz)<padding)return true;}
  return false;
 };
 return {root,bounds,floorAt,roofAt,blocks,gate,gateTriangles,get opening(){return opening;},open(){opened=true;},near(x:number,z:number,y:number){return Math.hypot(x+287,z+20)<18&&Math.abs(y-3)<9;},canEnter(x:number,z:number,y:number){return opening>.94&&x<DARK_VAULT_THRESHOLD.x&&x>-310&&Math.abs(z+20)<4.1&&Math.abs(y-4)<8;},update(dt:number){opening=Math.min(1,opening+(opened?Math.max(0,dt)*.8:0));gate.position.y=opening*18;},setApproachTexture:(texture:THREE.Texture)=>{approachMaterial.map=texture;approachMaterial.needsUpdate=true;}};
}
