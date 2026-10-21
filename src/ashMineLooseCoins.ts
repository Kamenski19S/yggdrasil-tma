import * as THREE from 'three';
import {mineFrameAt,MINE_ROUTE_LENGTH} from './ashMinePath';
export const LOOSE_COIN_ASSET='Ash_Mine_Scattered_Coin.glb';
export const LOOSE_COIN_CREDIT={title:'Coin',author:'Mr.Ten',url:'https://sketchfab.com/3d-models/coin-081752395db144b7bdc36b0283071025'};
export type LooseCoin={x:number;y:number;z:number;diameter:number;yaw:number;group:number};
/** Static, irregular patches on actual dry stone, including the treasure bank. */
export function mineCoinPlacements(floorAt:(x:number,z:number)=>number|null,walkable:(x:number,z:number)=>boolean){
 let seed=7193;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const centers:Array<{x:number;z:number;dense:boolean}>=[];
 for(let s=29;s<MINE_ROUTE_LENGTH-4;s+=13){const f=mineFrameAt(s),offset=(random()-.5)*22;centers.push({x:f.x+f.nx*offset,z:f.z+f.nz*offset,dense:random()>.5});}
 // The dry-floor callback rejects the lake and missing ground.
 for(let i=0;i<32;i++)for(let attempt=0;attempt<45;attempt++){
  const x=-42+random()*132,z=-245-random()*130;if(walkable(x,z)&&floorAt(x,z)!==null){centers.push({x,z,dense:i%3!==0});break;}
 }
 const coins:LooseCoin[]=[];
 centers.forEach((center,group)=>{const count=center.dense?22+Math.floor(random()*17):3+Math.floor(random()*5),spread=center.dense?2.3:3.2;
  for(let i=0;i<count;i++){
   const angle=random()*Math.PI*2,r=Math.sqrt(random())*spread,x=center.x+Math.cos(angle)*r,z=center.z+Math.sin(angle)*r,diameter=.30+random()*.16;
   if(!walkable(x,z)||coins.some(c=>Math.hypot(c.x-x,c.z-z)<(c.diameter+diameter)*.52))continue;
   // Rest on the highest point under the complete coin, not below a slope.
   let y=floorAt(x,z);if(y===null)continue;let valid=true;
   for(let j=0;j<8;j++){const a=j*Math.PI/4,h=floorAt(x+Math.cos(a)*diameter/2,z+Math.sin(a)*diameter/2);if(h===null){valid=false;break;}y=Math.max(y,h);}
   if(valid)coins.push({x,y:y+.018,z,diameter,yaw:random()*Math.PI*2,group});
  }
 });
 return coins;
}
/** Each patch is instanced and culled separately; coins never rotate or float. */
export function createLooseMineCoins(source:THREE.Object3D,placements:LooseCoin[]){
 const root=new THREE.Group();root.name='Мелкие золотые монеты на камне';source.updateWorldMatrix(true,true);
 const parts:THREE.BufferGeometry[]=[];
 source.traverse(o=>{if(o instanceof THREE.Mesh){const geometry=o.geometry.clone(),p=geometry.getAttribute('position'),values=new Float32Array(p.count*3);for(let i=0;i<p.count;i++)values.set([p.getX(i),p.getY(i),p.getZ(i)],i*3);geometry.setAttribute('position',new THREE.BufferAttribute(values,3));geometry.applyMatrix4(o.matrixWorld);if(!geometry.getAttribute('normal'))geometry.computeVertexNormals();parts.push(geometry);}});
 const box=new THREE.Box3();for(const g of parts){g.computeBoundingBox();box.union(g.boundingBox!);}
 const size=box.getSize(new THREE.Vector3()),axis=size.x<size.y&&size.x<size.z?'x':size.y<size.z?'y':'z';
 const flat=new THREE.Matrix4();if(axis==='z')flat.makeRotationX(-Math.PI/2);if(axis==='x')flat.makeRotationZ(Math.PI/2);
 box.makeEmpty();for(const g of parts){g.applyMatrix4(flat);g.computeBoundingBox();box.union(g.boundingBox!);}
 const center=box.getCenter(new THREE.Vector3()),width=Math.max(box.max.x-box.min.x,box.max.z-box.min.z);
 for(const g of parts){g.translate(-center.x,-box.min.y,-center.z);g.scale(1/width,1/width,1/width);g.computeBoundingSphere();}
 const material=new THREE.MeshStandardMaterial({color:'#dfad37',metalness:1,roughness:.23});
 const matrix=new THREE.Matrix4(),q=new THREE.Quaternion(),scale=new THREE.Vector3(),position=new THREE.Vector3();
 const groups=new Map<number,LooseCoin[]>();for(const c of placements){const group=groups.get(c.group)??[];group.push(c);groups.set(c.group,group);}
 for(const [group,coins]of groups)for(const geometry of parts){
  const mesh=new THREE.InstancedMesh(geometry,material,coins.length);mesh.name='Россыпь монет '+group;
  coins.forEach((coin,i)=>{q.setFromAxisAngle(THREE.Object3D.DEFAULT_UP,coin.yaw);scale.setScalar(coin.diameter);position.set(coin.x,coin.y,coin.z);matrix.compose(position,q,scale);mesh.setMatrixAt(i,matrix);});
  mesh.instanceMatrix.needsUpdate=true;mesh.computeBoundingSphere();root.add(mesh);
 }
 return root;
}
