import * as THREE from 'three';
import type {createJotunheimTerrain} from './jotunheimTerrain';

export const JOTUNHEIM_BONE_ASSETS={
 ribs:'Jotunheim_Bone_Ribs.glb',spine:'Jotunheim_Bone_Spine.glb',
 barricade:'Jotunheim_Bone_Barricade.glb',skull:'Jotunheim_Bone_Skull.glb',arch:'Jotunheim_Bone_Arch.glb',
} as const;
type Kind=keyof typeof JOTUNHEIM_BONE_ASSETS;
type Placement={kind:Kind;x:number;z:number;yaw:number;height:number;lean:number};
export const JOTUNHEIM_BOUNDARY_LIMIT=552;
const OUTER_LIMIT=580;
/** A continuous invisible wall, including windows between the enormous ribs.
 * The southern entrance has a wide recess so the spawn and stairs stay accessible. */
export function jotunheimBoundaryBlocks(x:number,z:number){
 if(!Number.isFinite(x)||!Number.isFinite(z)||Math.abs(x)>OUTER_LIMIT||Math.abs(z)>OUTER_LIMIT)return true;
 if(Math.abs(x)>JOTUNHEIM_BOUNDARY_LIMIT||z< -JOTUNHEIM_BOUNDARY_LIMIT)return true;
 return z>JOTUNHEIM_BOUNDARY_LIMIT&&(x< -200||x> -80);
}
const random=(n:number)=>{const v=Math.sin(n*127.1+17.3)*43758.5453;return v-Math.floor(v);};
export function jotunheimBonePlacements(){
 const result:Placement[]=[],types:Kind[]=['ribs','spine','arch','barricade','ribs','spine'];
 const line=[-455,-280,-105,75,255,440];
 for(let side=0;side<4;side++)for(let i=0;i<line.length;i++){
  const t=side===2?[-455,-310,25,195,365,500][i]:line[i],seed=side*19+i;
  const kind=types[(i+side)%types.length],height=kind==='ribs'?185+random(seed)*65:kind==='arch'?195+random(seed)*50:105+random(seed)*35;
  result.push({kind,x:side===0||side===2?t:side===1?575:-575,z:side===1||side===3?t:side===0?-575:575,
   yaw:side===0?0:side===1?-Math.PI/2:side===2?Math.PI:Math.PI/2,height,lean:(random(seed+100)-.5)*.12});
 }
 // Four uncommon landmarks, rather than a continuous row of identical heads.
 result.push({kind:'skull',x:170,z:-577,yaw:.12,height:82,lean:.08},
  {kind:'skull',x:576,z:-360,yaw:-1.7,height:95,lean:-.05},
  {kind:'skull',x:280,z:577,yaw:3.3,height:74,lean:.1},
  {kind:'skull',x:-577,z:320,yaw:1.45,height:90,lean:-.08});
 return result;
}
/** Instance the shared GLB geometry, bedding it into the actual mountainous ground. */
export function installJotunheimBoundary(models:Record<Kind,THREE.Object3D>,terrain:ReturnType<typeof createJotunheimTerrain>){
 const root=new THREE.Group();root.name='Jotunheim — remains of the ancient giants';
 const placements=jotunheimBonePlacements(),matrix=new THREE.Matrix4(),dummy=new THREE.Object3D();
 function ground(x:number,z:number){
  for(const factor of [1,.97,.93,.88]){const y=terrain.height(x*factor,z*factor);if(y!=null)return y;}
  return 0;
 }
 for(const kind of Object.keys(models) as Kind[]){
  const model=models[kind],box=new THREE.Box3().setFromObject(model),height=box.max.y-box.min.y,center=(box.min.x+box.max.x)/2;
  model.updateMatrixWorld(true);
  // Per-edge batches retain frustum culling while sharing the same buffers/textures.
  for(let side=0;side<4;side++){
   const items=placements.filter(p=>p.kind===kind&&(Math.abs(p.z)>570?(p.z<0?0:2):(p.x>0?1:3))===side);
   if(!items.length)continue;
   model.traverse(object=>{
    if(!(object instanceof THREE.Mesh))return;
    const batch=new THREE.InstancedMesh(object.geometry,object.material,items.length);batch.name=`Ancient ${kind} — edge ${side}`;
    items.forEach((p,i)=>{
     const scale=p.height/height,halfWidth=(box.max.x-box.min.x)*scale*.36,tx=Math.cos(p.yaw),tz=-Math.sin(p.yaw);
     const floor=Math.min(ground(p.x,p.z),ground(p.x+tx*halfWidth,p.z+tz*halfWidth),ground(p.x-tx*halfWidth,p.z-tz*halfWidth));
     dummy.position.set(p.x,floor-6,p.z);dummy.rotation.set(0,p.yaw,p.lean);dummy.scale.setScalar(scale);dummy.updateMatrix();
     const normalize=new THREE.Matrix4().makeTranslation(-center,-box.min.y,0);
     matrix.copy(dummy.matrix).multiply(normalize).multiply(object.matrixWorld);batch.setMatrixAt(i,matrix);
    });
    batch.instanceMatrix.needsUpdate=true;batch.computeBoundingBox();batch.computeBoundingSphere();root.add(batch);
   });
  }
 }
 // Low, irregular mountain stone fills intervals between the skeletal sections.
 const stone=new THREE.MeshStandardMaterial({color:'#858b82',roughness:1,flatShading:true});
 const rockGeometry=new THREE.IcosahedronGeometry(1,1),rockPositions:{x:number;z:number;seed:number}[]=[];
 for(let side=0;side<4;side++)for(let i=0;i<32;i++){
  const t=-580+i*37.4,seed=500+side*53+i;
  if(side===2&&t> -230&&t< -50)continue;
  rockPositions.push({x:side===0||side===2?t:side===1?581:-581,z:side===1||side===3?t:side===0?-581:581,seed});
 }
 const rocks=new THREE.InstancedMesh(rockGeometry,stone,rockPositions.length);rocks.name='Stones between petrified bones';
 rockPositions.forEach(({x,z,seed},i)=>{
  dummy.position.set(x,ground(x,z)+8,z);dummy.rotation.set(random(seed),random(seed+1)*6,random(seed+2));dummy.scale.set(20+random(seed+3)*15,22+random(seed+4)*40,14+random(seed+5)*9);dummy.updateMatrix();rocks.setMatrixAt(i,dummy.matrix);
 });rocks.computeBoundingSphere();root.add(rocks);
 // Unreachable silhouettes are visible through the rib arches, beyond the game map.
 const farGeometry=new THREE.ConeGeometry(1,1,7),farMaterial=new THREE.MeshStandardMaterial({color:'#8998a0',roughness:1,flatShading:true});
 const distant=new THREE.InstancedMesh(farGeometry,farMaterial,20);distant.name='Distant inaccessible mountain silhouettes';
 for(let i=0;i<20;i++){
  const angle=i/20*Math.PI*2,radius=1020+random(i+800)*220,h=220+random(i+900)*270;
  dummy.position.set(Math.cos(angle)*radius,h/2-90,Math.sin(angle)*radius);dummy.rotation.set(0,random(i+1000)*6,0);dummy.scale.set(150+random(i+1100)*110,h,140+random(i+1200)*110);dummy.updateMatrix();distant.setMatrixAt(i,dummy.matrix);
 }distant.computeBoundingSphere();root.add(distant);
 return {root,placements};
}
