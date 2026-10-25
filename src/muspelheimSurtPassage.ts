import * as THREE from 'three';
export const SURT_PASSAGE_ASSET='Muspelheim_Magic_Portal.glb';
export const SURT_PASSAGE_ENTRY={x:-108,z:-432};
export const SURT_PASSAGE_EXIT={x:-265,z:-355};
export const SURT_PASSAGE_CREDIT={title:'Magic Portal',author:'Valerii_Melnychenko',url:'https://sketchfab.com/3d-models/magic-portal-88a7c64fa3d3431b8cd22e8fedc71e78'};
type Point={x:number;y:number;z:number};
type Segment={a:Point;b:Point;length:number;dx:number;dz:number;width:number;kind:'apron'|'hall'|'room'|'stairs'|'landing';start:number;capStart:number;capEnd:number};
/** Continuous, walkable canyon entrance, future trap room and stair ascent. No teleportation. */
export function createSurtPassage(portal:THREE.Object3D,worldFloor:(x:number,z:number)=>number|null){
 const at=SURT_PASSAGE_ENTRY,end=SURT_PASSAGE_EXIT;
 const entryY=worldFloor(-92,at.z),exitY=worldFloor(end.x,end.z);if(entryY==null||exitY==null)throw Error('Passage endpoints have no ground');
 const firstRun=75,lastRun=65,turnY=entryY+(exitY-entryY)*firstRun/(firstRun+lastRun);
 const points:Point[]=[{x:-86,y:worldFloor(-86,at.z)??entryY,z:at.z},{...at,y:entryY},{x:-128,y:entryY,z:at.z},{x:-166,y:entryY,z:at.z},{x:-178,y:entryY,z:at.z},{x:-253,y:turnY,z:at.z},{x:end.x,y:turnY,z:at.z},{x:end.x,y:turnY,z:-420},{...end,y:exitY}];
 const kinds:Segment['kind'][]=['apron','hall','room','hall','stairs','landing','landing','stairs'];let total=0;
 const segments:Segment[]=points.slice(1).map((b,i)=>{const a=points[i],length=Math.hypot(b.x-a.x,b.z-a.z),s={a,b,length,dx:(b.x-a.x)/length,dz:(b.z-a.z)/length,width:i===0?20:i===2?15:9,kind:kinds[i],start:total,capStart:i===6?9:0,capEnd:i===5?9:0};total+=length;return s;});
 const root=new THREE.Group();root.name='Магический проход, комната двух дверей и лестница к Сурту';
 const stone=new THREE.MeshStandardMaterial({color:'#8c8b87',roughness:1,side:THREE.DoubleSide}),iron=new THREE.MeshStandardMaterial({color:'#443d39',roughness:.8,metalness:.55}),trim=new THREE.MeshStandardMaterial({color:'#b8995d',roughness:.65,metalness:.7}),glow=new THREE.MeshBasicMaterial({color:'#87d6e5'});
 const surface=(x:number,z:number)=>{if(x< -276||x> -85||z< -454||z> -345)return null;let result:{y:number;side:number;along:number;segment:Segment;distance:number}|null=null;
  for(const s of segments){const along=(x-s.a.x)*s.dx+(z-s.a.z)*s.dz,side=-(x-s.a.x)*s.dz+(z-s.a.z)*s.dx;if(along< -s.capStart-.001||along>s.length+s.capEnd+.001||Math.abs(side)>s.width+.001)continue;const distance=Math.abs(side),y=THREE.MathUtils.lerp(s.a.y,s.b.y,THREE.MathUtils.clamp(along/s.length,0,1));if(!result||distance<result.distance)result={y,side,along:THREE.MathUtils.clamp(along,0,s.length),segment:s,distance};}return result;
 };
 const groundCache=new Map<string,number>();const cachedGround=(x:number,z:number)=>{const gx=Math.floor(x/4),gz=Math.floor(z/4),tx=x/4-gx,tz=z/4-gz;const h=(a:number,b:number)=>{const key=`${a},${b}`;let y=groundCache.get(key);if(y===undefined){y=worldFloor(a*4,b*4)??entryY;groundCache.set(key,y);}return y;};return THREE.MathUtils.lerp(THREE.MathUtils.lerp(h(gx,gz),h(gx+1,gz),tx),THREE.MathUtils.lerp(h(gx,gz+1),h(gx+1,gz+1),tx),tz);};
 const covered=(x:number,z:number,y:number)=> cachedGround(x,z)>y+29;
 const owns=(x:number,z:number,y:number)=>{const p=surface(x,z);return !!p&&y>=p.y-5&&y<p.y+27;};
 const floorAt=(x:number,z:number,footY:number)=>{const p=surface(x,z);if(!p)return null;if(covered(x,z,p.y)&&Math.abs(footY-p.y)>6)return null;return p.y;};
 const box=(w:number,h:number,d:number,x:number,y:number,z:number,material:THREE.Material=stone,parent:THREE.Object3D=root)=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);mesh.position.set(x,y,z);mesh.receiveShadow=true;parent.add(mesh);return mesh;};
 const boundary:Array<{ax:number;az:number;bx:number;bz:number;low:number;high:number}>=[];
 const vertices:number[]=[],uvs:number[]=[],indices:number[]=[],roofVertices:number[]=[],roofIndices:number[]=[],wallVertices:number[]=[],wallUV:number[]=[],wallIndices:number[]=[];
 const quad=(target:number[],ids:number[],corners:number[][])=>{const start=target.length/3;corners.forEach(p=>target.push(...p));ids.push(start,start+2,start+1,start,start+3,start+2);};
 const cells=new Map<string,{x:number;z:number;p:NonNullable<ReturnType<typeof surface>>;roof:boolean}>();
 for(let x=-275;x< -85;x++)for(let z=-453;z< -345;z++){const p=surface(x+.5,z+.5);if(p)cells.set(`${x},${z}`,{x,z,p,roof:p.segment.kind!=='apron'&&covered(x+.5,z+.5,p.y)});}
 for(const {x,z,p,roof}of cells.values()){
  const y=(px:number,pz:number)=>surface(px,pz)?.y??p.y,lower=p.segment.kind==='stairs'?.5:0;
  const corners=[[x,y(x,z)-lower,z],[x+1,y(x+1,z)-lower,z],[x+1,y(x+1,z+1)-lower,z+1],[x,y(x,z+1)-lower,z+1]];
  quad(vertices,indices,corners);corners.forEach(v=>uvs.push(v[0]/8,-v[2]/8));
  if(roof)quad(roofVertices,roofIndices,corners.map(v=>[v[0],v[1]+28+lower,v[2]]));
  if(p.segment.kind==='apron')continue;
  for(const [nx,nz,ax,az,bx,bz]of [[x-1,z,x,z,x,z+1],[x+1,z,x+1,z,x+1,z+1],[x,z-1,x,z,x+1,z],[x,z+1,x,z+1,x+1,z+1]])if(!cells.has(`${nx},${nz}`)){
   // The exit and magical entrance are open; all other exposed edges have stone walls.
   if((Math.abs(az-end.z)<.01&&Math.abs(bz-end.z)<.01)||(Math.abs(ax-at.x)<.01&&Math.abs(bx-at.x)<.01))continue;
   const ground=cachedGround((ax+bx)/2,(az+bz)/2),high=p.y+(roof?28:Math.max(3,Math.min(28,ground-p.y+1.2)));
   const low=Math.min(y(ax,az),y(bx,bz));boundary.push({ax,az,bx,bz,low,high});
   quad(wallVertices,wallIndices,[[ax,low-.7,az],[bx,low-.7,bz],[bx,high,bz],[ax,high,az]]);wallUV.push(0,0,1/8,0,1/8,(high-low)/8,0,(high-low)/8);
  }
 }
 const wallGeometry=new THREE.BufferGeometry();wallGeometry.setAttribute('position',new THREE.Float32BufferAttribute(wallVertices,3));wallGeometry.setAttribute('uv',new THREE.Float32BufferAttribute(wallUV,2));wallGeometry.setIndex(wallIndices);wallGeometry.computeVertexNormals();const walls=new THREE.Mesh(wallGeometry,stone);walls.name='Continuous stone passage walls';root.add(walls);
 const floorGeometry=new THREE.BufferGeometry();floorGeometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));floorGeometry.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));floorGeometry.setIndex(indices);floorGeometry.computeVertexNormals();const floorMesh=new THREE.Mesh(floorGeometry,stone);floorMesh.name='Continuous passage walking floor';root.add(floorMesh);
 const roofGeometry=new THREE.BufferGeometry();roofGeometry.setAttribute('position',new THREE.Float32BufferAttribute(roofVertices,3));roofGeometry.setAttribute('uv',new THREE.Float32BufferAttribute(roofVertices.flatMap((_,i)=>i%3===0?[roofVertices[i]/8,-roofVertices[i+2]/8]:[]),2));roofGeometry.setIndex(roofIndices);roofGeometry.computeVertexNormals();const roofMesh=new THREE.Mesh(roofGeometry,stone);roofMesh.name='Stone ceiling beneath the mountain';root.add(roofMesh);
 let stepCount=0;const magicMaterials:THREE.MeshStandardMaterial[]=[],platformMaterials:THREE.MeshStandardMaterial[]=[];let magicTime=0;
 for(const s of segments.filter(s=>s.kind==='stairs')){const count=Math.ceil(Math.abs(s.b.y-s.a.y)/.45),geometry=new THREE.BoxGeometry(18,1.1,s.length/count+.01),mesh=new THREE.InstancedMesh(geometry,stone,count);mesh.name='Individual stone stair treads';for(let i=0;i<count;i++){const t=(i+.5)/count,point=new THREE.Vector3().lerpVectors(new THREE.Vector3(s.a.x,s.a.y,s.a.z),new THREE.Vector3(s.b.x,s.b.y,s.b.z),t),matrix=new THREE.Matrix4().compose(point.add(new THREE.Vector3(0,-.5,0)),new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),Math.atan2(s.dx,s.dz)),new THREE.Vector3(1,1,1));mesh.setMatrixAt(i,matrix);}mesh.computeBoundingSphere();root.add(mesh);stepCount+=count;}
 // Two actual hinged doors; both remain open once used, ready for the later trap mechanics.
 const doors=[-128,-166].map((x,index)=>{const hinge=new THREE.Group();hinge.position.set(x,entryY,at.z-7);hinge.name=index?'Дверь выхода из комнаты':'Входная дверь комнаты';root.add(hinge);box(.8,20,14,0,10,7,iron,hinge);for(const y of [2,10,18])box(1,1,14,0,y,7,trim,hinge);box(1.2,1.5,1.5,.5,10,12,trim,hinge);for(const side of [-1,1])box(2,24,2,x,entryY+12,at.z+side*8,stone);box(2,3,18,x,entryY+22.5,at.z,stone);
  // Room front/rear wall panels beside each door opening.
  for(const side of [-1,1])box(1.5,28,8,x,entryY+14,at.z+side*11,stone);
  return {x,index,hinge,opening:0,target:0};});
 const nearDoor=(x:number,z:number,y:number)=>doors.find(d=>d.opening<.99&&Math.abs(y-entryY)<5&&Math.hypot(x-d.x,z-at.z)<10)??null;
 const openNearby=(x:number,z:number,y:number)=>{const door=nearDoor(x,z,y);if(!door)return false;door.target=1;return true;};
 // Source frame and magical disc are enlarged independently of its terrain-sized base.
 portal.updateWorldMatrix(true,true);const sourceMeshes:THREE.Mesh[]=[];portal.traverse(o=>{if(o instanceof THREE.Mesh)sourceMeshes.push(o);});const portalScale=1.8;
 for(const source of sourceMeshes){const geometry=source.geometry.clone().applyMatrix4(source.matrixWorld),p=geometry.getAttribute('position'),material=(Array.isArray(source.material)?source.material[0]:source.material).clone();const isPlatform=material.name==='aiStandardSurface2SG';
  for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i);if(isPlatform){const wx=at.x+7+(x+10.6245)*.72,wz=at.z+(z-4.261)*.72;p.setXYZ(i,wx,(surface(wx,wz)?.y??cachedGround(wx,wz)??entryY)-.18,wz);geometry.getAttribute('uv')?.setXY(i,wx/8,-wz/8);}else p.setXYZ(i,at.x+(x+13.6679163)*portalScale,entryY+(y-1.72544)*portalScale,at.z+(z-4.2130213)*portalScale);}
  geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();if(material instanceof THREE.MeshStandardMaterial){if(isPlatform){material.color.set('#92999b');material.roughness=1;material.metalness=0;material.normalMap=null;material.aoMap=null;platformMaterials.push(material);}if(material.transparent){material.opacity=.5;material.depthWrite=false;material.emissiveIntensity=1.2;magicMaterials.push(material);}}const mesh=new THREE.Mesh(geometry,material);mesh.name=isPlatform?'Portal base fitted to canyon relief':'Magic portal '+source.name;mesh.receiveShadow=true;root.add(mesh);
 }
 for(const x of [-122,-146,-174]){box(1,2,2,x,entryY+20,at.z-8,glow);const light=new THREE.PointLight('#a9d3df',18,36,2);light.position.set(x,entryY+17,at.z);root.add(light);}
 const blocks=(x:number,z:number,y:number,padding=2)=>{
  if(x< -278||x> -80||z< -456||z> -342)return false;
  if(Math.abs(x-at.x)<2.6+padding&&Math.abs(z-at.z)>6.2&&Math.abs(z-at.z)<18&&y<entryY+26&&y+14>entryY)return true;
  for(const d of doors)if(d.opening<.93&&Math.abs(x-d.x)<padding+.7&&Math.abs(z-at.z)<7+padding&&Math.abs(y-entryY)<22)return true;
  for(const d of doors)if(d.opening>=.93&&y<entryY+20&&y+14>entryY){const ax=d.x,az=at.z-7,bx=ax+Math.sin(d.hinge.rotation.y)*14,bz=az+Math.cos(d.hinge.rotation.y)*14,dx=bx-ax,dz=bz-az,t=THREE.MathUtils.clamp(((x-ax)*dx+(z-az)*dz)/196,0,1);if(Math.hypot(x-ax-t*dx,z-az-t*dz)<padding+.4)return true;}
  // Side wall pieces around the door stay solid after its leaf opens.
  for(const d of doors)if(Math.abs(x-d.x)<padding+1&&Math.abs(z-at.z)>7-padding&&Math.abs(z-at.z)<15+padding&&y<entryY+28&&y+14>entryY)return true;
  for(const w of boundary){if(y>=w.high||y+14<=w.low)continue;const dx=w.bx-w.ax,dz=w.bz-w.az,t=THREE.MathUtils.clamp(((x-w.ax)*dx+(z-w.az)*dz)/(dx*dx+dz*dz),0,1);if(Math.hypot(x-w.ax-t*dx,z-w.az-t*dz)<padding)return true;}return false;
 };
 const cameraAt=(x:number,y:number,z:number,yaw:number)=>{const p=surface(x,z);if(!p||p.segment.kind==='apron'||!owns(x,z,y))return null;const direction=1,progress=p.segment.start+p.along;
  const sample=(s:number)=>{const segment=s<0?segments[0]:segments.find(a=>s<=a.start+a.length)??segments[segments.length-1],t=(s-segment.start)/segment.length;return {x:THREE.MathUtils.lerp(segment.a.x,segment.b.x,t),y:THREE.MathUtils.lerp(segment.a.y,segment.b.y,THREE.MathUtils.clamp(t,0,1)),z:THREE.MathUtils.lerp(segment.a.z,segment.b.z,t)};};
  const eye=sample(progress-direction*16);eye.y+=18;return {position:eye,target:{x,y:y+7,z},yaw:Math.atan2(eye.x-x,eye.z-z)};
 };
 const cut=segments.map(s=>{const f=(v:number)=>v.toFixed(6);return `{vec2 q=p.xz-vec2(${f(s.a.x)},${f(s.a.z)});float t=dot(q,vec2(${f(s.dx)},${f(s.dz)}));float crossD=dot(q,vec2(${f(-s.dz)},${f(s.dx)}));float h=${f(s.a.y)}+clamp(t/${f(s.length)},0.,1.)*${f(s.b.y-s.a.y)};if(t>=${f(-s.capStart-.12)}&&t<=${f(s.length+s.capEnd+.12)}&&abs(crossD)<${f(s.width-.04)}&&p.y>h-.4&&p.y<h+29.)return true;}`;}).join('\n');
 const cutMaterials=new Set<THREE.Material>();
 const clipWorld=(objects:THREE.Object3D[])=>{for(const object of objects)object.traverse(o=>{if(!(o instanceof THREE.Mesh)||o===floorMesh||o===roofMesh)return;for(const m of (Array.isArray(o.material)?o.material:[o.material]) as THREE.Material[]){if(cutMaterials.has(m))continue;cutMaterials.add(m);const previous=m.onBeforeCompile,cache=m.customProgramCacheKey;
  m.onBeforeCompile=(shader,renderer)=>{previous.call(m,shader,renderer);shader.vertexShader='varying vec3 surtPassagePosition;\n'+shader.vertexShader;const standardVertex=shader.vertexShader.includes('#include <begin_vertex>');shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>\nvec4 passagePoint=vec4(transformed,1.);\n#ifdef USE_INSTANCING\npassagePoint=instanceMatrix*passagePoint;\n#endif\nsurtPassagePosition=(modelMatrix*passagePoint).xyz;`);if(!standardVertex)shader.vertexShader=shader.vertexShader.replace(/void\s+main\s*\(\s*\)\s*\{/, 'void main(){surtPassagePosition=(modelMatrix*vec4(position,1.)).xyz;');shader.fragmentShader='varying vec3 surtPassagePosition;\nbool surtPassageCut(vec3 p){'+'if(p.x< -276.||p.x> -85.||p.z< -454.||p.z> -345.)return false;'+cut+'return false;}\n'+shader.fragmentShader;const standardFragment=shader.fragmentShader.includes('#include <clipping_planes_fragment>');shader.fragmentShader=shader.fragmentShader.replace('#include <clipping_planes_fragment>','#include <clipping_planes_fragment>\nif(surtPassageCut(surtPassagePosition))discard;');if(!standardFragment)shader.fragmentShader=shader.fragmentShader.replace(/void\s+main\s*\(\s*\)\s*\{/, 'void main(){if(surtPassageCut(surtPassagePosition))discard;');};m.customProgramCacheKey=()=>cache.call(m)+'-surt-passage-v1';m.needsUpdate=true;
 }});};
 return {root,points,segments,doors,entryY,exitY,stepCount,owns,floorAt,blocks,nearDoor,openNearby,cameraAt,clipWorld,
  roofAt:(x:number,z:number)=>{const p=surface(x,z);return p&&covered(x,z,p.y)?p.y+28:null;},
  update(dt:number,hero?:Point){magicTime+=dt;const crossing=hero&&Math.abs(hero.x-at.x)<19&&Math.abs(hero.z-at.z)<7&&Math.abs(hero.y-entryY)<6;for(const m of magicMaterials)m.opacity=crossing?.07:.48+Math.sin(magicTime*1.3)*.035;for(const d of doors){d.opening=Math.min(1,d.opening+dt*d.target/.85);const t=d.opening*d.opening*(3-2*d.opening);d.hinge.rotation.y=-t*Math.PI*.53;}},
  setStoneTexture(texture:THREE.Texture){const map=texture.clone();map.wrapS=map.wrapT=THREE.RepeatWrapping;map.repeat.set(1,1);map.needsUpdate=true;stone.map=map;stone.needsUpdate=true;for(const material of platformMaterials){material.map=map;material.needsUpdate=true;}},
 };
}
