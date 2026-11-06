import * as THREE from 'three';
import type {createJotunheimTerrain} from './jotunheimTerrain';
export const JOTUNHEIM_GATEWAY_ASSET='Jotunheim_Giant_Gateway.glb';
export const GATEWAY_SITE={x:-140,z:465};
export const GATEWAY_VIEW={x:-140,z:559};
// Reduce the arch while retaining deep treads for Vicki's feet.
export const GATEWAY_SCALE={x:.55,y:.55,z:.8};
const EDGES=[927,939,951,965,980,996,1013,1031,1051,1072,1094,1118,1143,1170,1199,1231,1253];
const TREAD=5.4,LENGTH=16*TREAD,LANDING=32.6*GATEWAY_SCALE.y;
const smooth=(n:number)=>{const t=THREE.MathUtils.clamp(n,0,1);return t*t*(3-2*t);};
/** Shape the actual textured GLB into stairs, a rear landing and a gradual hill exit. */
export function installJotunheimGateway(model:THREE.Object3D,terrain:ReturnType<typeof createJotunheimTerrain>){
 const baseY=terrain.height(GATEWAY_SITE.x,GATEWAY_SITE.z+LENGTH*GATEWAY_SCALE.z)??0;
 model.scale.set(GATEWAY_SCALE.x,GATEWAY_SCALE.y,GATEWAY_SCALE.z);
 model.position.set(GATEWAY_SITE.x,baseY,GATEWAY_SITE.z);model.updateMatrixWorld(true);
 const local=(x:number,z:number)=>({x:(x-GATEWAY_SITE.x)/GATEWAY_SCALE.x,z:(z-GATEWAY_SITE.z)/GATEWAY_SCALE.z});
 const point=new THREE.Vector3(),inverse=new THREE.Matrix4();
 terrain.root.traverse(object=>{
  if(!(object instanceof THREE.Mesh))return;
  inverse.copy(object.matrixWorld).invert();const positions=object.geometry.getAttribute('position');
  for(let i=0;i<positions.count;i++){
   point.fromBufferAttribute(positions,i).applyMatrix4(object.matrixWorld);const {x,z}=local(point.x,point.z);
   if(z< -190||z>LENGTH+36||Math.abs(x)>110)continue;
   const width=z<0?44:40+THREE.MathUtils.clamp(z/LENGTH,0,1)*26;
   // A level landing continues behind the arch; farther downhill it merges into the original hill.
   const blend=smooth((width+36-Math.abs(x))/36)*smooth((z+190)/140)*smooth((LENGTH+36-z)/28);
   if(blend<=0)continue;
   const target=baseY+(z<0?LANDING:LANDING*(1-THREE.MathUtils.clamp(z/LENGTH,0,1))-.5);
   point.y=THREE.MathUtils.lerp(point.y,target,blend);point.applyMatrix4(inverse);positions.setXYZ(i,point.x,point.y,point.z);
  }
  positions.needsUpdate=true;object.geometry.computeVertexNormals();object.geometry.computeBoundingBox();object.geometry.computeBoundingSphere();
 });
 terrain.rebuild();
 function height(x:number,z:number):number|null{
  const p=local(x,z);
  if(p.z>=0&&p.z<LENGTH&&Math.abs(p.x)<25.5+p.z*.30-2){const step=Math.min(15,Math.floor(p.z/TREAD));return baseY+(1253-EDGES[step])*.1*GATEWAY_SCALE.y;}
  // Only the real stone landing uses a flat collision surface. The rear exit follows the deformed GLB.
  if(p.z>=-8&&p.z<=0&&Math.abs(p.x)<13)return baseY+LANDING;
  return terrain.height(x,z);
 }
 function blocks(x:number,z:number){
  const p=local(x,z),ax=Math.abs(p.x);
  if(p.z>=-10&&p.z<=10&&ax>=13&&ax<=65)return true;
  if(p.z>=0&&p.z<=LENGTH){const edge=25.5+p.z*.30;return ax>=edge-2&&ax<=edge+10;}
  return false;
 }
 function onStairs(x:number,z:number){const p=local(x,z);return p.z>=-10&&p.z<=LENGTH+2&&Math.abs(p.x)<58;}
 // Lift the gaze at the foot of the stairs so the smaller arch fits the portrait camera.
 function cameraLift(x:number,z:number){const p=local(x,z);return 18*smooth((80-Math.abs(p.x))/30)*smooth(p.z/LENGTH)*smooth((165-p.z)/35);}
 return {root:model,height,blocks,onStairs,cameraLift,baseY};
}
