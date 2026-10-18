import * as THREE from 'three';
import type {WallRock} from './muspelheimRockWalls';
export const MINE_PATH=Array.from({length:49},(_,i)=>{const t=i/48,a=t*Math.PI;return {x:-435+24*Math.cos(a),z:-100-24*Math.sin(a),y:-82-30*t};});
export const MINE_DOOR={...MINE_PATH[MINE_PATH.length-1]};
export const MINE_RETURN={x:MINE_DOOR.x+.2,z:MINE_DOOR.z-7};
function frame(x:number,z:number){let distance=Infinity,y=0;for(let i=1;i<MINE_PATH.length;i++){const a=MINE_PATH[i-1],b=MINE_PATH[i],dx=b.x-a.x,dz=b.z-a.z,t=THREE.MathUtils.clamp(((x-a.x)*dx+(z-a.z)*dz)/(dx*dx+dz*dz),0,1),d=Math.hypot(x-a.x-t*dx,z-a.z-t*dz);if(d<distance){distance=d;y=THREE.MathUtils.lerp(a.y,b.y,t);}}return {distance,y};}
export function mineApproachDepth(x:number,z:number){const f=frame(x,z);return (f.y+82)*(1-THREE.MathUtils.smoothstep(f.distance,7,13));}
export function carveMineApproach(root:THREE.Object3D){root.updateWorldMatrix(true,true);root.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.getAttribute('position'),v=new THREE.Vector3(),inverse=o.matrixWorld.clone().invert();for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);v.y+=mineApproachDepth(v.x,v.z);v.applyMatrix4(inverse);p.setXYZ(i,v.x,v.y,v.z);}p.needsUpdate=true;o.geometry.computeVertexNormals();o.geometry.computeBoundingBox();o.geometry.computeBoundingSphere();});}
export function mineApproachFloorAt(x:number,z:number){const f=frame(x,z);return f.distance<=6?f.y+.12:null;}
export function mineApproachRocks():WallRock[]{const rocks:WallRock[]=[];for(let i=6;i<MINE_PATH.length-4;i+=6){const p=MINE_PATH[i],a=i/48*Math.PI;for(const side of [-1,1])rocks.push({kind:(i/6)%3,x:p.x+Math.cos(a)*side*11,z:p.z-Math.sin(a)*side*11,y:p.y-4,yaw:a,width:8,height:16+i/5,depth:8});}return rocks;}
export function createMineEntrance(assetBase:string){
 const root=new THREE.Group();root.name='Полуспиральный спуск в пепельную шахту';
 const texture=new THREE.TextureLoader().load(assetBase+'muspelheim-basalt-wall.jpg');texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(2,6);texture.colorSpace=THREE.SRGBColorSpace;
 const stone=new THREE.MeshStandardMaterial({color:'#77767b',map:texture,roughness:1}),wood=new THREE.MeshStandardMaterial({color:'#32251e',roughness:.95,metalness:.15});
 const vertices:number[]=[],uvs:number[]=[],indices:number[]=[];
 MINE_PATH.forEach((p,i)=>{const a=i/48*Math.PI;for(const side of [-1,1]){vertices.push(p.x+Math.cos(a)*side*6,p.y+.1,p.z-Math.sin(a)*side*6);uvs.push(side<0?0:1,i/8);}if(i<48){const n=i*2;indices.push(n,n+1,n+2,n+1,n+3,n+2);}});
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));g.setIndex(indices);g.computeVertexNormals();stone.side=THREE.DoubleSide;root.add(new THREE.Mesh(g,stone));
 const arch=new THREE.Group();arch.position.set(MINE_DOOR.x,MINE_DOOR.y,MINE_DOOR.z+2);root.add(arch);
 const box=(w:number,h:number,d:number,x:number,y:number,z:number,mat:THREE.Material=stone)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);arch.add(m);return m;};
 box(4,20,5,-9,10,0);box(4,20,5,9,10,0);box(22,4,5,0,20,0);
 for(let i=0;i<7;i++){const a=i/6*Math.PI,block=box(3.8,4,5,Math.cos(a)*9,18+Math.sin(a)*4,0);block.rotation.z=a-Math.PI/2;}
 // Solid back rock seals the cavity except for the doorway.
 box(30,33,8,-24,13,4);box(30,33,8,24,13,4);box(24,14,8,0,30,4);
 const hinge=new THREE.Group();hinge.position.set(-7,0,-.6);arch.add(hinge);const leaf=new THREE.Mesh(new THREE.BoxGeometry(14,18,1),wood);leaf.position.set(7,9,0);hinge.add(leaf);
 const iron=new THREE.MeshStandardMaterial({color:'#433b32',metalness:.7,roughness:.7});for(const y of [3,9,15]){const band=new THREE.Mesh(new THREE.BoxGeometry(14,.5,1.12),iron);band.position.set(7,y,0);hinge.add(band);}
 for(const side of [-1,1]){const glow=new THREE.Mesh(new THREE.OctahedronGeometry(.8),new THREE.MeshBasicMaterial({color:'#ffad52'}));glow.position.set(side*9,13,-3);arch.add(glow);}let opened=false,opening=0;
 return {root,open:()=>{opened=true;},get opened(){return opened;},update:(dt:number)=>{opening=Math.min(1,opening+(opened?dt:0));hinge.rotation.y=-opening*Math.PI*.55;},blocks:(x:number,z:number)=>Math.abs(x-MINE_DOOR.x)<14&&z>MINE_DOOR.z+.7&&z<MINE_DOOR.z+8,near:(x:number,z:number)=>Math.hypot(x-MINE_DOOR.x,z-(MINE_DOOR.z-5))<12};
}
