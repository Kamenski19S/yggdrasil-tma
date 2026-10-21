import {createSlidingMineDoor,MINE_DOOR_CLEAR_HALF,MINE_DOOR_BLOCK_HALF} from './ashMineDoor';
import * as THREE from 'three';
import type {WallRock} from './muspelheimRockWalls';
export const MINE_PATH=Array.from({length:49},(_,i)=>{const t=i/48,a=t*Math.PI;return {x:-435+24*Math.cos(a),z:-100-24*Math.sin(a),y:-82-30*THREE.MathUtils.smoothstep(t,0,.88)};});
export const MINE_DOOR={...MINE_PATH[MINE_PATH.length-1]};
export const MINE_RETURN={x:MINE_DOOR.x+.2,z:MINE_DOOR.z-7};
function frame(x:number,z:number){let distance=Infinity,y=0,progress=0;for(let i=1;i<MINE_PATH.length;i++){const a=MINE_PATH[i-1],b=MINE_PATH[i],dx=b.x-a.x,dz=b.z-a.z,t=THREE.MathUtils.clamp(((x-a.x)*dx+(z-a.z)*dz)/(dx*dx+dz*dz),0,1),d=Math.hypot(x-a.x-t*dx,z-a.z-t*dz);if(d<distance){distance=d;y=THREE.MathUtils.lerp(a.y,b.y,t);progress=(i-1+t)/(MINE_PATH.length-1);}}return {distance,y,progress};}
export function mineLandingAt(x:number,z:number){return Math.abs(x-MINE_DOOR.x)<=8&&z>=MINE_DOOR.z-8&&z<=MINE_DOOR.z+8;}
export function mineApproachDepth(x:number,z:number){const f=frame(x,z),ramp=(f.y+82)*(1-THREE.MathUtils.smoothstep(f.distance,7,13));const dx=Math.max(0,Math.abs(x-MINE_DOOR.x)-8),dz=Math.max(0,MINE_DOOR.z-8-z,z-MINE_DOOR.z-8),landing=-30*(1-THREE.MathUtils.smoothstep(Math.hypot(dx,dz),0,5));return Math.min(ramp,landing);}
export function mineApproachSideBlocks(x:number,y:number,z:number){const f=frame(x,z);return f.progress>.055&&f.progress<.92&&f.distance>4.6&&f.distance<9.5&&y+14>f.y-4&&y<f.y+8;}
export function carveMineApproach(root:THREE.Object3D){root.updateWorldMatrix(true,true);root.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.getAttribute('position'),v=new THREE.Vector3(),inverse=o.matrixWorld.clone().invert();for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);v.y+=mineApproachDepth(v.x,v.z);v.applyMatrix4(inverse);p.setXYZ(i,v.x,v.y,v.z);}p.needsUpdate=true;o.geometry.computeVertexNormals();o.geometry.computeBoundingBox();o.geometry.computeBoundingSphere();});}
export function mineApproachFloorAt(x:number,z:number){if(mineLandingAt(x,z))return MINE_DOOR.y+.12;const f=frame(x,z);return f.distance<=6?f.y+.12:null;}
export function mineApproachRocks():WallRock[]{return [];}
/** A camera on the open path behind Vicki, independent of nearby cliff proxies. */
export function mineApproachCameraAt(x:number,y:number,z:number){
 const f=frame(x,z);if(f.distance>13||y>f.y+9||y<f.y-8)return null;
 const behind=f.progress-.3,index=THREE.MathUtils.clamp(behind*48,0,48),lo=Math.min(47,Math.floor(index)),fraction=index-lo;
 const a=MINE_PATH[lo],b=MINE_PATH[lo+1];
 let cx=THREE.MathUtils.lerp(a.x,b.x,fraction),cz=THREE.MathUtils.lerp(a.z,b.z,fraction),cy=THREE.MathUtils.lerp(a.y,b.y,fraction)+22;
 if(behind<0){cx=MINE_PATH[0].x;cz=MINE_PATH[0].z-behind*Math.PI*24;cy=MINE_PATH[0].y+22;}
 return {position:{x:cx,y:Math.max(y+22,cy),z:cz},target:{x,y:y+10.5,z:z+1},yaw:Math.atan2(cx-x,cz-z)};
}
export function createMineEntrance(assetBase:string){
 const root=new THREE.Group();root.name='Полуспиральный спуск в пепельную шахту';
 const texture=new THREE.TextureLoader().load(assetBase+'models/T_Forge_WhiteStone.webp');texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(2,6);texture.colorSpace=THREE.SRGBColorSpace;
 const stone=new THREE.MeshStandardMaterial({color:'#c7cdd5',map:texture,bumpMap:texture,bumpScale:.12,roughness:1});
 const vertices:number[]=[],uvs:number[]=[],indices:number[]=[];
 MINE_PATH.forEach((p,i)=>{const a=i/48*Math.PI;for(const side of [-1,1]){vertices.push(p.x+Math.cos(a)*side*6,p.y+.1,p.z-Math.sin(a)*side*6);uvs.push(side<0?0:1,i/8);}if(i<48){const n=i*2;indices.push(n,n+1,n+2,n+1,n+3,n+2);}});
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));g.setIndex(indices);g.computeVertexNormals();stone.side=THREE.DoubleSide;root.add(new THREE.Mesh(g,stone));
 // A solid landing overlaps the flattened final section and continues through the door.
 const landing=new THREE.Mesh(new THREE.BoxGeometry(16,8,16),stone);landing.position.set(MINE_DOOR.x,MINE_DOOR.y-3.9,MINE_DOOR.z);root.add(landing);
 // Low stone edging keeps the path safe while leaving Vicki and the doorway visible.
 const sideGeometry=new THREE.BoxGeometry(1,1,1),sideWalls=new THREE.InstancedMesh(sideGeometry,stone,84),dummy=new THREE.Object3D();let wallIndex=0;
 for(let i=3;i<45;i++){const a=MINE_PATH[i],b=MINE_PATH[i+1],angle=(i+.5)/48*Math.PI;for(const side of [-1,1]){dummy.position.set((a.x+b.x)/2+Math.cos(angle)*side*6.5,(a.y+b.y)/2-.5,(a.z+b.z)/2-Math.sin(angle)*side*6.5);dummy.rotation.y=angle;dummy.scale.set(1,2.6,Math.hypot(b.x-a.x,b.z-a.z)+.4);dummy.updateMatrix();sideWalls.setMatrixAt(wallIndex++,dummy.matrix);}}root.add(sideWalls);
 const arch=new THREE.Group();arch.position.set(MINE_DOOR.x,MINE_DOOR.y,MINE_DOOR.z+2);root.add(arch);
 const slidingDoor=createSlidingMineDoor(stone);arch.add(slidingDoor.root);
 for(const side of [-1,1]){const glow=new THREE.Mesh(new THREE.OctahedronGeometry(.8),new THREE.MeshBasicMaterial({color:'#ffad52'}));glow.position.set(side*9,13,-3);arch.add(glow);}let opened=false,opening=0;
 return {root,slidingDoor,installDoor:slidingDoor.install,open:()=>{opened=true;},get opened(){return opened;},get opening(){return opening;},update:(dt:number)=>{opening=Math.min(1,opening+(opened?dt:0));slidingDoor.update(opening);},
  canEnter:(x:number,y:number,z:number)=>opening>=.95&&Math.abs(x-MINE_DOOR.x)<MINE_DOOR_CLEAR_HALF&&z>=MINE_DOOR.z+3.6&&z<MINE_DOOR.z+6&&Math.abs(y-MINE_DOOR.y)<3,
  blocks:(x:number,z:number,y=MINE_DOOR.y)=>{const px=x-MINE_DOOR.x,pz=z-MINE_DOOR.z-2,py=y-MINE_DOOR.y;if(py>34||py+14< -8)return false;
   return Math.abs(px)<MINE_DOOR_BLOCK_HALF&&Math.abs(pz)<4.2&&(Math.abs(px)>MINE_DOOR_CLEAR_HALF||opening<.95);
  },near:(x:number,z:number)=>Math.hypot(x-MINE_DOOR.x,z-(MINE_DOOR.z-5))<12};
}
