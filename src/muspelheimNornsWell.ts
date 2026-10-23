import * as THREE from 'three';
import {createMeshHeightSampler} from './muspelheimSurface';
import {prepareNineWorldStranger} from './nineWorldStranger';
export const NORNS_WELL_ASSET='Muspelheim_Norns_Shelter.glb';
export const NORNS_WELL_POSITION={x:-165,z:-55};
export const NORNS_WELL_SIZE={width:36,height:48,depth:34};
export const NORNS_WELL_CREDIT={title:'Cyberpunk_City-Construction_X1X',author:'-X-ScornGames',url:'https://sketchfab.com/3d-models/cyberpunk-city-construction-x1x-d27f24b53566493486aaa51b50b91552'};
export const STRANGER_ASSET='hit2_stranger_mobile.glb';
export const STRANGER_CREDIT={title:'HIT2 Female swordsman',author:'enzohao',url:'https://sketchfab.com/3d-models/hit2-female-swordsman-bfc0c40414ce4e37bea0567ce4a36792'};
const BASIN={x:-2.5,z:-4.5,r:2.7},STRANGER={x:7,z:-4.5};
type Segment={ax:number;az:number;bx:number;bz:number};
function distanceToSegment(x:number,z:number,s:Segment){const dx=s.bx-s.ax,dz=s.bz-s.az,t=THREE.MathUtils.clamp(((x-s.ax)*dx+(z-s.az)*dz)/(dx*dx+dz*dz||1),0,1);return Math.hypot(x-s.ax-dx*t,z-s.az-dz*t);}
export function createMuspelheimNornsWell(model:THREE.Object3D,groundY=0){
 model.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
 const offset=new THREE.Group();offset.position.set(-center.x,-bounds.min.y,-center.z);offset.add(model);
 const fit=new THREE.Group();fit.scale.set(NORNS_WELL_SIZE.width/size.x,NORNS_WELL_SIZE.height/size.y,NORNS_WELL_SIZE.depth/size.z);fit.add(offset);
 const root=new THREE.Group();root.position.set(NORNS_WELL_POSITION.x,groundY-.4,NORNS_WELL_POSITION.z);root.name='Колодец трёх норн — убежище у каньона';root.add(fit);root.updateWorldMatrix(true,true);
 model.traverse(o=>{if(o instanceof THREE.Mesh){o.receiveShadow=true;for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial){m.roughness=.9;m.metalness=0;m.emissiveIntensity=.12;if(m.map)m.map.anisotropy=4;}}});
 const floorVertices:number[]=[],roofVertices:number[]=[],wallCells=new Map<string,Segment[]>(),v=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()];
 const addSegment=(s:Segment)=>{for(let x=Math.floor((Math.min(s.ax,s.bx)-3)/4);x<=Math.floor((Math.max(s.ax,s.bx)+3)/4);x++)for(let z=Math.floor((Math.min(s.az,s.bz)-3)/4);z<=Math.floor((Math.max(s.az,s.bz)+3)/4);z++){const key=`${x},${z}`,list=wallCells.get(key);if(list)list.push(s);else wallCells.set(key,[s]);}};
 // Separate the ground floor from the roof; never snap Vicki onto the canopy.
 // Wall sections at feet, torso and head preserve the real arched openings.
 model.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.getAttribute('position'),ids=o.geometry.index,count=ids?.count??p.count;
  for(let i=0;i<count;i+=3){for(let k=0;k<3;k++)v[k].fromBufferAttribute(p,ids?ids.getX(i+k):i+k).applyMatrix4(o.matrixWorld);
   const normal=new THREE.Vector3().crossVectors(v[1].clone().sub(v[0]),v[2].clone().sub(v[0])).normalize(),lo=Math.min(...v.map(p=>p.y)),hi=Math.max(...v.map(p=>p.y));
   if(Math.abs(normal.y)>.25){if(hi<groundY+5)floorVertices.push(...v.flatMap(p=>p.toArray()));if(lo>groundY+28)roofVertices.push(...v.flatMap(p=>p.toArray()));}
   for(const y of [groundY+2,groundY+8,groundY+14]){if(y<lo||y>hi)continue;const cut:THREE.Vector3[]=[];for(let k=0;k<3;k++){const a=v[k],b=v[(k+1)%3];if((a.y<=y&&b.y>y)||(b.y<=y&&a.y>y))cut.push(a.clone().lerp(b,(y-a.y)/(b.y-a.y)));}if(cut.length===2)addSegment({ax:cut[0].x,az:cut[0].z,bx:cut[1].x,bz:cut[1].z});}
  }
 });
 const sample=(vertices:number[])=>{const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));const mesh=new THREE.Mesh(geo);const sampler=createMeshHeightSampler(mesh);geo.dispose();(mesh.material as THREE.Material).dispose();return sampler;};
 const floorAt=sample(floorVertices),roofAt=sample(roofVertices);
 const local=(x:number,z:number)=>({x:x-NORNS_WELL_POSITION.x,z:z-NORNS_WELL_POSITION.z});
 let stranger:THREE.Group|undefined,idle:((time:number)=>void)|undefined;
 const blocks=(x:number,z:number,radius=2)=>{const p=local(x,z);if(Math.abs(p.x)>22+radius||Math.abs(p.z)>21+radius)return false;
  if(Math.hypot(p.x-BASIN.x,p.z-BASIN.z)<BASIN.r+radius)return true;
  if(stranger&&Math.hypot(p.x-STRANGER.x,p.z-STRANGER.z)<1.5+radius)return true;
  return (wallCells.get(`${Math.floor(x/4)},${Math.floor(z/4)}`)??[]).some(s=>distanceToSegment(x,z,s)<radius);
 };
 const shelters=(x:number,z:number,y:number)=>{if(y>groundY+5||blocks(x,z,.1))return false;return [[0,0],[1.8,0],[-1.8,0],[0,1.8],[0,-1.8]].every(([dx,dz])=>(roofAt(x+dx,z+dz)??-Infinity)>y+20);};
 const basin=new THREE.Group();basin.position.set(BASIN.x,(floorAt(NORNS_WELL_POSITION.x+BASIN.x,NORNS_WELL_POSITION.z+BASIN.z)??groundY)-root.position.y,BASIN.z);basin.name='Чаша колодца трёх норн';
 const stone=new THREE.MeshStandardMaterial({color:'#736b70',roughness:.95});const lip=new THREE.Mesh(new THREE.TorusGeometry(2.3,.45,10,48),stone);lip.rotation.x=-Math.PI/2;lip.position.y=1.5;basin.add(lip);
 const pedestal=new THREE.Mesh(new THREE.CylinderGeometry(2.65,2.85,1.4,40),stone);pedestal.position.y=.7;basin.add(pedestal);
 const water=new THREE.Mesh(new THREE.CircleGeometry(2.2,48),new THREE.MeshStandardMaterial({color:'#77c5d4',emissive:'#2a819b',emissiveIntensity:.7,roughness:.25,metalness:.1}));water.rotation.x=-Math.PI/2;water.position.y=1.52;basin.add(water);
 for(let i=0;i<3;i++){const a=i*Math.PI*2/3,rune=new THREE.Mesh(new THREE.OctahedronGeometry(.23),new THREE.MeshBasicMaterial({color:'#c6f5ff'}));rune.position.set(Math.cos(a)*2.3,1.88,Math.sin(a)*2.3);basin.add(rune);}root.add(basin);
 const npcPosition={x:NORNS_WELL_POSITION.x+STRANGER.x,z:NORNS_WELL_POSITION.z+STRANGER.z};
 return {root,floorAt,roofAt,blocks,shelters,npcPosition,
  canTalk:(x:number,z:number,y:number)=>!!stranger&&shelters(x,z,y)&&Math.hypot(x-npcPosition.x,z-npcPosition.z)<10,
  installStranger:(source:THREE.Object3D)=>{const prepared=prepareNineWorldStranger(source),size=prepared.bodyBounds.getSize(new THREE.Vector3());source.scale.multiplyScalar(16.9/size.y);source.updateWorldMatrix(true,true);const box=new THREE.Box3();source.traverse(o=>{if(o instanceof THREE.Mesh&&o.visible)box.union(new THREE.Box3().setFromObject(o));});const center=box.getCenter(new THREE.Vector3());source.position.set(-center.x,-box.min.y,-center.z);source.traverse(o=>{if(o instanceof THREE.Mesh){o.receiveShadow=true;o.castShadow=false;o.frustumCulled=false;}});stranger=new THREE.Group();stranger.name='Странница девяти миров у чаши норн';stranger.position.set(STRANGER.x,(floorAt(npcPosition.x,npcPosition.z)??groundY)-root.position.y,STRANGER.z);stranger.add(source);root.add(stranger);idle=prepared.idle;},
  update:(time:number,dt:number,x:number,z:number)=>{idle?.(time*1000);if(stranger&&Math.hypot(x-npcPosition.x,z-npcPosition.z)<15){const desired=Math.atan2(x-npcPosition.x,z-npcPosition.z),delta=Math.atan2(Math.sin(desired-stranger.rotation.y),Math.cos(desired-stranger.rotation.y));stranger.rotation.y+=delta*Math.min(1,dt*3.5);}water.material.emissiveIntensity=.65+.1*Math.sin(time*1.4);},
 };
}
