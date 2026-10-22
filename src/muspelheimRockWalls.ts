import * as THREE from 'three';
import {MUSPELHEIM_SIZE,WORLD_OUTLINE} from './muspelheimTerrain';
import {applyRavineLava,type RavineLava} from './muspelheimRavineLava';
export const ROCK_ASSETS=['Muspelheim_Basalt_Cliff.glb','Muspelheim_Basalt_Ridge.glb','Muspelheim_Basalt_Boulder.glb'] as const;
export const ROCK_CREDITS=[
 {title:'Cliff | Low-Poly | Game-ready',author:'kEam',url:'https://sketchfab.com/3d-models/cliff-low-poly-game-ready-918dc8e1b1f0443993a251c1302510bf'},
 {title:'Free_cliff_rock',author:'Kwinto',url:'https://sketchfab.com/3d-models/free-cliff-rock-75fb6b34dc0d46259dedc8c7cd94e7b7'},
 {title:'Big Rock 1B',author:'Andrei.D',url:'https://sketchfab.com/3d-models/big-rock-1b-44c96d506d55496598b6b92dec8b1049'},
];
export type WallRock={kind:number;x:number;z:number;y:number;yaw:number;width:number;height:number;depth:number;section?:'entrance'};
export type GatewayWallAnchor={x:number;z:number;halfWidth:number};
export function gatewayWingRockLayout(gateway:GatewayWallAnchor):WallRock[]{
 const rocks:WallRock[]=[],half=MUSPELHEIM_SIZE/2,near=gateway.halfWidth+6.5,far=half-13.5;
 for(const side of [-1,1])for(let i=0;i<20;i++){
  const t=i/19,angle=t*Math.PI/2,dx=(far-near)*Math.cos(angle),dz=100*Math.sin(angle),seed=i+(side>0?3:0);
  rocks.push({kind:i===0?2:(i+(side>0?1:0))%3,x:gateway.x+side*(near+(far-near)*Math.sin(angle)),z:gateway.z+100*(1-Math.cos(angle)),y:-2.5,
   yaw:Math.atan2(-dz,side*dx),width:25+19*t+(seed%3),height:24+26*t+(seed*3%7),depth:18+14*t,section:'entrance'});
 }
 return rocks;
}
export function rockWallLayout(gateway?:GatewayWallAnchor):WallRock[]{
 const rocks:WallRock[]=[];let seed=0;
 for(let side=0;side<WORLD_OUTLINE.length;side++){
  const [ax,az]=WORLD_OUTLINE[side],[bx,bz]=WORLD_OUTLINE[(side+1)%WORLD_OUTLINE.length],dx=bx-ax,dz=bz-az,length=Math.hypot(dx,dz),count=Math.ceil(length/(MUSPELHEIM_SIZE/16));
  for(let i=0;i<count;i++,seed++){
   const t=(i+.5)/count,x=ax+dx*t-dz/length*6,z=az+dz*t+dx/length*6;
   rocks.push({kind:(seed+side*2)%3,x,z,y:-5,yaw:Math.atan2(-dz,dx),width:64+(seed*7%13),height:52+(seed*17%49),depth:54+(seed*11%13)});
  }
 }
 for(const [x,z] of WORLD_OUTLINE)rocks.push({kind:2,x,z,y:-6,yaw:0,width:78,height:65,depth:78});
 if(gateway)rocks.push(...gatewayWingRockLayout(gateway));
 return rocks;
}
export function rockWallBlocks(rocks:WallRock[],x:number,z:number,radius=5,footY?:number,bodyHeight=14){
 return rocks.some(r=>{if(footY!=null&&(footY+bodyHeight<r.y||footY>r.y+r.height))return false;const c=Math.cos(r.yaw),s=Math.sin(r.yaw),dx=x-r.x,dz=z-r.z;
  return Math.abs(c*dx-s*dz)<r.width/2+radius&&Math.abs(s*dx+c*dz)<r.depth/2+radius;
 });
}
export function moveAlongRockWalls(rocks:WallRock[],from:{x:number;z:number},to:{x:number;z:number},footY?:number){
 const radius=footY==null?5:2;
 if(!rockWallBlocks(rocks,to.x,to.z,radius,footY))return to;
 if(!rockWallBlocks(rocks,to.x,from.z,radius,footY))return {x:to.x,z:from.z};
 if(!rockWallBlocks(rocks,from.x,to.z,radius,footY))return {x:from.x,z:to.z};
 return from;
}
export function makeBasaltWall(source:THREE.Object3D,kind:number,rocks:WallRock[],anisotropy:number,ravineLava?:RavineLava){
 const group=new THREE.Group();group.name='Muspelheim basalt wall '+kind;
 source.updateWorldMatrix(true,true);
 source.traverse(object=>{
  if(!(object instanceof THREE.Mesh))return;
  const geometry=object.geometry.clone();geometry.applyMatrix4(object.matrixWorld);geometry.computeBoundingBox();
  const b=geometry.boundingBox!,size=b.getSize(new THREE.Vector3()),center=b.getCenter(new THREE.Vector3());
  geometry.translate(-center.x,-b.min.y,-center.z);geometry.scale(1/size.x,1/size.y,1/size.z);
  const original=(Array.isArray(object.material)?object.material[0]:object.material) as THREE.MeshStandardMaterial;
  const material=original.clone();material.metalness=0;material.roughness=1;material.side=THREE.DoubleSide;
  if(material.map){material.map.anisotropy=Math.min(8,anisotropy);material.map.needsUpdate=true;}
  material.onBeforeCompile=shader=>{
   shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
    #ifdef USE_MAP
     float moss=smoothstep(0.02,0.14,sampledDiffuseColor.g-max(sampledDiffuseColor.r,sampledDiffuseColor.b));
     float basalt=dot(sampledDiffuseColor.rgb,vec3(0.2126,0.7152,0.0722));
     diffuseColor.rgb=diffuse*vec3(0.40,0.42,0.45)*basalt*mix(1.0,0.45,moss);
    #endif`);
   if(ravineLava)applyRavineLava(shader,ravineLava);
  };
  material.customProgramCacheKey=()=> 'muspelheim-charcoal-basalt-v3-'+Boolean(ravineLava);
  const placements=rocks.filter(r=>r.kind===kind),instances=new THREE.InstancedMesh(geometry,material,placements.length),dummy=new THREE.Object3D();
  placements.forEach((r,i)=>{dummy.position.set(r.x,r.y,r.z);dummy.rotation.set(0,r.yaw,0);dummy.scale.set(r.width,r.height,r.depth);dummy.updateMatrix();instances.setMatrixAt(i,dummy.matrix);});
  instances.instanceMatrix.needsUpdate=true;instances.computeBoundingSphere();group.add(instances);
 });
 return group;
}
