import * as THREE from 'three';
import {mineFrameAt,MINE_ROUTE_LENGTH,mineTunnelFloor,TUNNEL_HALF_WIDTH,TUNNEL_HEIGHT} from './ashMinePath';
export function createMineTunnel(stone:THREE.MeshStandardMaterial){
 const root=new THREE.Group();root.name='Неровный полукруглый каменный тоннель';
 const vaults:THREE.Mesh[]=[],floors:THREE.Mesh[]=[];
 const count=Math.ceil(MINE_ROUTE_LENGTH/4),sides=24;
 const surface=(s:number,a:number)=>{const f=mineFrameAt(s),rough=.55*Math.sin(s*.37+a*7)+.35*Math.cos(s*.21-a*11),width=TUNNEL_HALF_WIDTH+rough,x=f.x+f.nx*width*Math.cos(a),z=f.z+f.nz*width*Math.cos(a);return {x,y:mineTunnelFloor(x,z)+(TUNNEL_HEIGHT+rough)*Math.sin(a),z};};
 for(let i=0;i<count;i++){
  const s0=i*MINE_ROUTE_LENGTH/count,s1=(i+1)*MINE_ROUTE_LENGTH/count,positions:number[]=[],uv:number[]=[],indices:number[]=[];
  for(const s of [s0,s1])for(let j=0;j<=sides;j++){const p=surface(s,j/sides*Math.PI);positions.push(p.x,p.y,p.z);uv.push(s/13,j/sides*4);}
  for(let j=0;j<sides;j++){const n=j,m=j+sides+1;indices.push(n,m,n+1,m,m+1,n+1);}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();const mat=stone.clone();mat.side=THREE.DoubleSide;mat.transparent=true;const vault=new THREE.Mesh(g,mat);vault.name='Каменный свод и стены';root.add(vault);vaults.push(vault);
  const fp:number[]=[],fu:number[]=[],fi:number[]=[];
  for(const s of [s0,s1])for(let j=0;j<=12;j++){const f=mineFrameAt(s),d=(j/12*2-1)*18.5,x=f.x+f.nx*d,z=f.z+f.nz*d;fp.push(x,mineTunnelFloor(x,z),z);fu.push(x/12,z/12);}
  for(let j=0;j<12;j++){const m=j+13;fi.push(j,j+1,m,m,j+1,m+1);}
  const fg=new THREE.BufferGeometry();fg.setAttribute('position',new THREE.Float32BufferAttribute(fp,3));fg.setAttribute('uv',new THREE.Float32BufferAttribute(fu,2));fg.setIndex(fi);fg.computeVertexNormals();const floor=new THREE.Mesh(fg,stone);floor.name='Неровный каменный пол';root.add(floor);floors.push(floor);
 }
 // A wider vault closes the authored chamber without filling its water or moving its contents.
 for(let i=0;i<32;i++){
  const p:number[]=[],uv:number[]=[],index:number[]=[];
  for(const z of [-240-i*4.75,-240-(i+1)*4.75]){const t=THREE.MathUtils.smoothstep(-z-240,0,34),width=THREE.MathUtils.lerp(TUNNEL_HALF_WIDTH,49,t),height=THREE.MathUtils.lerp(TUNNEL_HEIGHT,49,t);for(let j=0;j<=24;j++){const a=j/24*Math.PI,phase=MINE_ROUTE_LENGTH-z-240,rough=.55*Math.sin(phase*.37+a*7)+.35*Math.cos(phase*.21-a*11);p.push(24+(width+rough)*Math.cos(a),(height+rough)*Math.sin(a),z);uv.push(-z/13,j/24*4);}}
  for(let j=0;j<24;j++)index.push(j,j+25,j+1,j+25,j+26,j+1);
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(index);g.computeVertexNormals();const m=stone.clone();m.transparent=true;m.side=THREE.DoubleSide;const vault=new THREE.Mesh(g,m);vault.name='Каменный свод главного зала';vaults.push(vault);root.add(vault);
 }
 const ray=new THREE.Raycaster(),direction=new THREE.Vector3(),target=new THREE.Vector3(),faded=new Set<THREE.Mesh>();
 const updateView=(camera:THREE.Camera,x:number,y:number,z:number)=>{
  for(const mesh of faded){const m=mesh.material as THREE.MeshStandardMaterial;m.opacity=1;m.depthWrite=true;}faded.clear();
  for(const height of [1,7,14]){target.set(x,y+height,z);direction.copy(target).sub(camera.position);ray.set(camera.position,direction.clone().normalize());ray.far=direction.length()-.5;for(const hit of ray.intersectObjects(vaults,false)){const mesh=hit.object as THREE.Mesh,m=mesh.material as THREE.MeshStandardMaterial;m.opacity=.045;m.depthWrite=false;faded.add(mesh);}}
 };
 const setRockTexture=(map:THREE.Texture|null)=>{if(!map)return;const texture=map.clone();texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(1,1);texture.needsUpdate=true;stone.map=texture;stone.color.set('#c9c1b6');stone.needsUpdate=true;for(const mesh of vaults){const m=mesh.material as THREE.MeshStandardMaterial;m.map=texture;m.color.copy(stone.color);m.needsUpdate=true;}};
 return {root,vaults,floors,updateView,setRockTexture};
}
export function bendMineRails(source:THREE.Object3D,floorAt:(x:number,z:number)=>number){
 const root=new THREE.Group();root.name='Новые рельсы Digital Goblin';source.updateMatrixWorld(true);const meshes:THREE.Mesh[]=[];source.traverse(o=>{if(o instanceof THREE.Mesh)meshes.push(o);});const n=Math.ceil((MINE_ROUTE_LENGTH+24)/24),length=(MINE_ROUTE_LENGTH+24)/n;
 // The last 24 units continue into the original chamber; every joint uses the same path sample.
 const frame=(s:number)=>{if(s<=MINE_ROUTE_LENGTH)return mineFrameAt(s);const f=mineFrameAt(MINE_ROUTE_LENGTH);return {...f,x:f.x+f.tx*(s-MINE_ROUTE_LENGTH),z:f.z+f.tz*(s-MINE_ROUTE_LENGTH)};};
 for(let i=0;i<n;i++)for(const original of meshes){const geometry=original.geometry.clone().applyMatrix4(original.matrixWorld),p=geometry.getAttribute('position');geometry.computeBoundingBox();const box=geometry.boundingBox!,center=(box.min.x+box.max.x)/2,depth=box.max.z-box.min.z;
  for(let j=0;j<p.count;j++){const s=(i+(p.getZ(j)-box.min.z)/depth)*length,f=frame(s),offset=(p.getX(j)-center)*.16,x=f.x+f.nx*offset,z=f.z+f.nz*offset,y=(p.getY(j)-box.min.y)*.16; p.setXYZ(j,x,floorAt(x,z)+.08+y,z);}
  geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();const mesh=new THREE.Mesh(geometry,original.material);mesh.name='Состыкованный участок новых рельсов';root.add(mesh);
 }
 return {root,joints:Array.from({length:n+1},(_,i)=>frame(i*length)),length};
}
