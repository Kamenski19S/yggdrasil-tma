import * as THREE from 'three';
export const MINE_TILE=12;
export const MINE_ROUTE=[{x:0,z:12},{x:0,z:-96},{x:84,z:-96},{x:84,z:-192},{x:24,z:-192},{x:24,z:-252}];
export const MINE_TREASURE={x:24,z:-264};
const cells=new Set<string>();
const add=(x:number,z:number,r:number)=>{const cx=Math.round(x/12),cz=Math.round(z/12);for(let dx=-r;dx<=r;dx++)for(let dz=-r;dz<=r;dz++)cells.add(`${cx+dx},${cz+dz}`);};
for(let i=1;i<MINE_ROUTE.length;i++){const a=MINE_ROUTE[i-1],b=MINE_ROUTE[i],n=Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/6);for(let j=0;j<=n;j++)add(THREE.MathUtils.lerp(a.x,b.x,j/n),THREE.MathUtils.lerp(a.z,b.z,j/n),1);}
for(const p of [{x:0,z:-60},{x:84,z:-168},MINE_TREASURE])add(p.x,p.z,2);
export const MINE_CELLS=[...cells].map(key=>{const [x,z]=key.split(',').map(Number);return {x:x*12,z:z*12};});
function inside(x:number,z:number){return cells.has(`${Math.floor((x+6)/12)},${Math.floor((z+6)/12)}`);}
export function mineWalkable(x:number,z:number,radius=1.8){return [[0,0],[radius,0],[-radius,0],[0,radius],[0,-radius],[radius*.7,radius*.7],[-radius*.7,-radius*.7],[radius*.7,-radius*.7],[-radius*.7,radius*.7]].every(([dx,dz])=>inside(x+dx,z+dz));}
export function createAshMineLayout(assetBase:string){
 const root=new THREE.Group();root.name='Извилистая пепельная шахта';const texture=new THREE.TextureLoader().load(assetBase+'muspelheim-basalt-wall.jpg');texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(1.2,2.5);texture.colorSpace=THREE.SRGBColorSpace;
 const stone=new THREE.MeshStandardMaterial({color:'#77777c',map:texture,roughness:1}),floor=stone.clone();floor.color.set('#958574');
 const dummy=new THREE.Object3D(),walls:Array<{x:number;z:number;yaw:number}>=[];
 for(const p of MINE_CELLS)for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]])if(!inside(p.x+dx*12,p.z+dz*12))walls.push({x:p.x+dx*6,z:p.z+dz*6,yaw:dx?Math.PI/2:0});
 const floors=new THREE.InstancedMesh(new THREE.BoxGeometry(12,1,12),floor,MINE_CELLS.length),ceilings=new THREE.InstancedMesh(new THREE.BoxGeometry(12,2,12),stone,MINE_CELLS.length),boundary=new THREE.InstancedMesh(new THREE.BoxGeometry(12,30,2),stone,walls.length);
 MINE_CELLS.forEach((p,i)=>{dummy.position.set(p.x,-.5,p.z);dummy.updateMatrix();floors.setMatrixAt(i,dummy.matrix);dummy.position.y=31;dummy.updateMatrix();ceilings.setMatrixAt(i,dummy.matrix);});walls.forEach((p,i)=>{dummy.position.set(p.x,15,p.z);dummy.rotation.y=p.yaw;dummy.updateMatrix();boundary.setMatrixAt(i,dummy.matrix);});root.add(floors,ceilings,boundary);
 const oreMat=new THREE.MeshStandardMaterial({color:'#d8a638',metalness:.65,roughness:.4,emissive:'#b0540c',emissiveIntensity:.45}),ore=new THREE.InstancedMesh(new THREE.DodecahedronGeometry(1,0),oreMat,90);
 for(let i=0;i<90;i++){const wall=walls[(i*17)%walls.length];dummy.position.set(wall.x-Math.sin(wall.yaw)*1.2,4+i%7,wall.z-Math.cos(wall.yaw)*1.2);dummy.rotation.set(i*.3,i*.9,0);dummy.scale.set(.6+i%3*.3,.8+i%4*.3,.5);dummy.updateMatrix();ore.setMatrixAt(i,dummy.matrix);}root.add(ore);
 const wood=new THREE.MeshStandardMaterial({color:'#4b3424',roughness:1});
 for(let i=0;i<MINE_ROUTE.length-1;i++){const a=MINE_ROUTE[i],b=MINE_ROUTE[i+1],length=Math.hypot(b.x-a.x,b.z-a.z),yaw=Math.atan2(b.x-a.x,b.z-a.z);for(let d=18;d<length;d+=30){const group=new THREE.Group();group.position.set(THREE.MathUtils.lerp(a.x,b.x,d/length),0,THREE.MathUtils.lerp(a.z,b.z,d/length));group.rotation.y=yaw;for(const s of [-1,1]){const post=new THREE.Mesh(new THREE.BoxGeometry(1.8,27,2),wood);post.position.set(s*15.5,13.5,0);group.add(post);}const beam=new THREE.Mesh(new THREE.BoxGeometry(33,2,2),wood);beam.position.y=27;group.add(beam);root.add(group);}}
 // Rails and an ore cart in an alcove, away from the route.
 const cart=new THREE.Group();cart.position.set(-18,0,-65);root.add(cart);const bin=new THREE.Mesh(new THREE.BoxGeometry(7,4,5),wood);bin.position.y=3;cart.add(bin);for(const x of [-2.5,2.5])for(const z of [-2,2]){const wheel=new THREE.Mesh(new THREE.CylinderGeometry(1,1,.5,10),stone);wheel.rotation.z=Math.PI/2;wheel.position.set(x,1,z);cart.add(wheel);}
 const chest=new THREE.Group();chest.name='Огненное золото';chest.position.set(MINE_TREASURE.x,0,MINE_TREASURE.z);const body=new THREE.Mesh(new THREE.BoxGeometry(9,5,6),wood);body.position.y=2.5;chest.add(body);for(let i=0;i<18;i++){const gold=new THREE.Mesh(new THREE.BoxGeometry(1.7,.7,.9),oreMat);gold.position.set(-3+(i%4)*2,5+Math.floor(i/8)*.65,-1.8+Math.floor(i%8/4)*2);chest.add(gold);}root.add(chest);
 return {root,chest};
}
