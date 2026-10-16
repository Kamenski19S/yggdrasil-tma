import * as THREE from 'three';
import {createGatewayRunes} from './muspelheimRunes';
export const GATEWAY_ASSETS=['Muspelheim_Ancient_Gateway.glb','Muspelheim_Round_Door.glb'] as const;
export const GATEWAY_POSITION={x:0,z:140};
export const GATEWAY_SCALE=.5;
export const GATEWAY_CREDIT={author:'-X-ScornGames',title:"Ancient-Gateway-X-'South'",url:'https://sketchfab.com/3d-models/ancient-gateway-x-south-876bfce2fe3c45488d5eab1f7b32fefd'};
export function createMuspelheimGateway(arch:THREE.Object3D,door:THREE.Object3D,initiallyOpen:boolean){
 const group=new THREE.Group();group.name='Muspelheim first gateway';
 const bounds=new THREE.Box3().setFromObject(arch),center=bounds.getCenter(new THREE.Vector3()),scale=82/(bounds.max.x-bounds.min.x);
 arch.scale.multiplyScalar(scale);arch.position.set(-center.x*scale,-bounds.min.y*scale,-center.z*scale);group.add(arch);
 door.position.set(0,8,-20);group.add(door);
 group.position.set(GATEWAY_POSITION.x,0,GATEWAY_POSITION.z);group.scale.setScalar(GATEWAY_SCALE);
 group.traverse(o=>{if(o instanceof THREE.Mesh)for(const material of Array.isArray(o.material)?o.material:[o.material]){
  const m=material as THREE.MeshStandardMaterial;m.metalness=.08;m.roughness=.95;m.emissive.set(0);m.emissiveIntensity=0;
  m.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
   #ifdef USE_MAP
    float lightness=dot(sampledDiffuseColor.rgb,vec3(.2126,.7152,.0722));
    float blueMark=smoothstep(.025,.13,max(sampledDiffuseColor.b,sampledDiffuseColor.g)-sampledDiffuseColor.r)*step(sampledDiffuseColor.g*.8,sampledDiffuseColor.b);
    vec3 basalt=vec3(.47,.44,.42)*lightness;
    vec3 crimson=vec3(.85,.006,.045)*max(.35,lightness)*1.8;
    diffuseColor.rgb=diffuse*mix(basalt,crimson,blueMark);
   #endif`);};
  m.customProgramCacheKey=()=> 'muspelheim-gateway-basalt-crimson-v2';m.needsUpdate=true;
 }});
 group.updateWorldMatrix(true,true);const runeRay=new THREE.Raycaster();
 const runes=createGatewayRunes((x,y,side)=>{
  const origin=door.localToWorld(new THREE.Vector3(x,y,side*100));runeRay.set(origin,new THREE.Vector3(0,0,-side));
  const hit=runeRay.intersectObjects([arch,door],true)[0];
  return (hit?door.worldToLocal(hit.point.clone()).z:side*4.3)+side*.45;
 });door.add(runes.group);
 const left=door.getObjectByName('DoorLeft'),right=door.getObjectByName('DoorRight');if(!left||!right)throw Error('Round door hinges are missing');
 let opening=initiallyOpen?1:0,nearby=false;
 function update(dt:number,open:boolean){runes.update(dt);opening=THREE.MathUtils.clamp(opening+(open?1:-1)*dt/.95,0,1);const eased=opening*opening*(3-2*opening);left!.rotation.y=eased*Math.PI*.52;right!.rotation.y=-eased*Math.PI*.52;}
 update(0,initiallyOpen);
 // Cached center stair profile: raycasts run once, never in the render loop.
 group.updateWorldMatrix(true,true);const ray=new THREE.Raycaster(),profile:number[]=[];
 for(let z=-40;z<=40;z++){
  ray.set(new THREE.Vector3(GATEWAY_POSITION.x,20*GATEWAY_SCALE,GATEWAY_POSITION.z+z*GATEWAY_SCALE),new THREE.Vector3(0,-1,0));
  const hit=ray.intersectObject(arch,true).find(h=>h.face&&h.face.normal.clone().transformDirection(h.object.matrixWorld).y>.4);
  profile.push(hit?Math.max(0,hit.point.y):0);
 }
 return {group,update,
  updateProximity(dt:number,unlocked:boolean,x:number,z:number){
   const dx=Math.abs(x-GATEWAY_POSITION.x),dz=Math.abs(z-(GATEWAY_POSITION.z-20*GATEWAY_SCALE));
   // A wider release zone avoids flickering and keeps the doorway safe during passage.
   nearby=unlocked&&(nearby?dx<16&&dz<36:dx<12&&dz<28);
   update(dt,nearby);
  },get opening(){return opening;},
  floorAt(x:number,z:number,base:number){const dx=(x-GATEWAY_POSITION.x)/GATEWAY_SCALE,dz=(z-GATEWAY_POSITION.z)/GATEWAY_SCALE;if(Math.abs(dx)>13||Math.abs(dz)>40)return base;const t=dz+40,i=Math.min(79,Math.floor(t));return Math.max(base,THREE.MathUtils.lerp(profile[i],profile[i+1],t-i));},
  blocks(x:number,z:number,radius=5){const dx=Math.abs(x-GATEWAY_POSITION.x)/GATEWAY_SCALE,dz=(z-GATEWAY_POSITION.z)/GATEWAY_SCALE+20,r=radius/GATEWAY_SCALE;
   const stone=dx>17-r&&dx<41+r&&Math.abs((z-GATEWAY_POSITION.z)/GATEWAY_SCALE)<34+r;
   const closed=opening<.94&&dx<17+r&&Math.abs(dz)<2+r;
   return stone||closed;
  }
 };
}
export type MuspelheimGateway=ReturnType<typeof createMuspelheimGateway>;
