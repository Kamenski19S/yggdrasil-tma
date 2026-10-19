import * as THREE from 'three';
import {buildMineModel} from './ashMineModel';
export const MINE_TILE=12;
export const MINE_ROUTE=[{x:0,z:12},{x:0,z:-96},{x:84,z:-96},{x:84,z:-192},{x:24,z:-192},{x:24,z:-252}];
export const MINE_EXIT={x:0,z:28};
export const MINE_TREASURE={x:24,z:-264};
export function mineExitCrossed(x:number,z:number,opening:number){return opening>=.95&&Math.abs(x-MINE_EXIT.x)<4.5&&z>=MINE_EXIT.z-.5&&z<=MINE_EXIT.z+1;}
export const MINE_EXIT_TRAIL=(()=>{const path=[MINE_EXIT,...MINE_ROUTE,MINE_TREASURE],arrows:Array<{x:number;z:number;yaw:number}>=[];for(let i=1;i<path.length;i++){const a=path[i-1],b=path[i],length=Math.hypot(b.x-a.x,b.z-a.z);for(let d=6;d<length;d+=18)arrows.push({x:THREE.MathUtils.lerp(a.x,b.x,d/length),z:THREE.MathUtils.lerp(a.z,b.z,d/length),yaw:Math.atan2(b.x-a.x,b.z-a.z)});}return arrows;})();
const cells=new Set<string>();
const add=(x:number,z:number,r:number)=>{const cx=Math.round(x/12),cz=Math.round(z/12);for(let dx=-r;dx<=r;dx++)for(let dz=-r;dz<=r;dz++)cells.add(`${cx+dx},${cz+dz}`);};
for(let i=1;i<MINE_ROUTE.length;i++){const a=MINE_ROUTE[i-1],b=MINE_ROUTE[i],n=Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/6);for(let j=0;j<=n;j++)add(THREE.MathUtils.lerp(a.x,b.x,j/n),THREE.MathUtils.lerp(a.z,b.z,j/n),1);}
for(const p of [{x:0,z:-60},{x:84,z:-168},MINE_TREASURE])add(p.x,p.z,2);
// The authored chamber extends behind the final corridor. Actual ground checks govern movement.
for(let x=-48;x<=96;x+=12)for(let z=-384;z<=-240;z+=12)add(x,z,0);
// Continue the floor behind the exit plane so a long running step can cross it.
cells.add('0,3');
export const MINE_CELLS=[...cells].map(key=>{const [x,z]=key.split(',').map(Number);return {x:x*12,z:z*12};});
function inside(x:number,z:number){return cells.has(`${Math.floor((x+6)/12)},${Math.floor((z+6)/12)}`);}
export function mineWalkable(x:number,z:number,radius=1.8){return [[0,0],[radius,0],[-radius,0],[0,radius],[0,-radius],[radius*.7,radius*.7],[-radius*.7,-radius*.7],[radius*.7,-radius*.7],[-radius*.7,radius*.7]].every(([dx,dz])=>inside(x+dx,z+dz));}
export function createAshMineLayout(assetBase:string){
 const root=new THREE.Group();root.name='Извилистая пепельная шахта';const texture=new THREE.TextureLoader().load(assetBase+'muspelheim-basalt-wall.jpg');texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(1.2,2.5);texture.colorSpace=THREE.SRGBColorSpace;
 const stone=new THREE.MeshStandardMaterial({color:'#77777c',map:texture,roughness:1}),floor=stone.clone();floor.color.set('#958574');
 const dummy=new THREE.Object3D(),walls:Array<{x:number;z:number;yaw:number}>=[];
 for(const p of MINE_CELLS)for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]])if(!inside(p.x+dx*12,p.z+dz*12)&&!(p.x===0&&p.z===24&&dz===1))walls.push({x:p.x+dx*6,z:p.z+dz*6,yaw:Math.atan2(-dx,-dz)});
 const floors=new THREE.InstancedMesh(new THREE.BoxGeometry(12,1,12),floor,MINE_CELLS.filter(p=>p.z>=-240).length);
 MINE_CELLS.filter(p=>p.z>=-240).forEach((p,i)=>{dummy.position.set(p.x,-.5,p.z);dummy.rotation.set(0,0,0);dummy.updateMatrix();floors.setMatrixAt(i,dummy.matrix);});root.add(floors);floors.name='Пол шахты';
 const oreMat=new THREE.MeshStandardMaterial({color:'#d8a638',metalness:.65,roughness:.4,emissive:'#b0540c',emissiveIntensity:.45}),wood=new THREE.MeshStandardMaterial({color:'#4b3424',roughness:1});
 let model:ReturnType<typeof buildMineModel>|undefined;
 const chest=new THREE.Group();chest.name='Огненное золото';chest.position.set(MINE_TREASURE.x,0,MINE_TREASURE.z);const body=new THREE.Mesh(new THREE.BoxGeometry(9,5,6),wood);body.position.y=2.5;chest.add(body);for(let i=0;i<18;i++){const gold=new THREE.Mesh(new THREE.BoxGeometry(1.7,.7,.9),oreMat);gold.position.set(-3+(i%4)*2,5+Math.floor(i/8)*.65,-1.8+Math.floor(i%8/4)*2);chest.add(gold);}root.add(chest);
 const guideMat=new THREE.MeshBasicMaterial({color:'#72dfc1',transparent:true,opacity:.85,depthWrite:false});
 const arrowShape=new THREE.Shape();arrowShape.moveTo(-.5,-2.7);arrowShape.lineTo(.5,-2.7);arrowShape.lineTo(.5,.6);arrowShape.lineTo(1.7,.6);arrowShape.lineTo(0,3.2);arrowShape.lineTo(-1.7,.6);arrowShape.lineTo(-.5,.6);arrowShape.closePath();
 const arrowGeometry=new THREE.ShapeGeometry(arrowShape);arrowGeometry.rotateX(-Math.PI/2);
 const arrows=new THREE.InstancedMesh(arrowGeometry,guideMat,MINE_EXIT_TRAIL.length);arrows.name='Зелёные стрелки к выходу';MINE_EXIT_TRAIL.forEach((p,i)=>{dummy.position.set(p.x,.08,p.z);dummy.rotation.set(0,p.yaw,0);dummy.scale.set(1,1,1);dummy.updateMatrix();arrows.setMatrixAt(i,dummy.matrix);});root.add(arrows);
 const exit=new THREE.Group();exit.name='Дверь выхода в Муспельхейм';exit.position.set(MINE_EXIT.x,0,MINE_EXIT.z);root.add(exit);
 const exitFrame=new THREE.MeshStandardMaterial({color:'#a99b83',map:texture,roughness:1});
 for(const side of [-1,1]){const jamb=new THREE.Mesh(new THREE.BoxGeometry(2,21,2),exitFrame);jamb.position.set(side*7,10.5,0);exit.add(jamb);}const lintel=new THREE.Mesh(new THREE.PlaneGeometry(16,2),exitFrame);lintel.position.y=21;lintel.rotation.y=Math.PI;exit.add(lintel);
 const hinge=new THREE.Group();hinge.position.set(-6,0,0);exit.add(hinge);const door=new THREE.Mesh(new THREE.PlaneGeometry(12,20),wood);door.position.set(6,10,0);door.rotation.y=Math.PI;hinge.add(door);
 for(const side of [-1,1]){const glow=new THREE.Mesh(new THREE.OctahedronGeometry(.7),new THREE.MeshBasicMaterial({color:'#80f0ce'}));glow.position.set(side*7,15,-1.5);exit.add(glow);}
 let opening=0,openingDoor=false;
 return {root,chest,
  install:(source:THREE.Object3D)=>{model=buildMineModel(source,walls,[...MINE_ROUTE.filter(p=>p.z> -240),{x:24,z:-240}]);root.add(model.root);chest.position.y=model.floorAt(MINE_TREASURE.x,MINE_TREASURE.z)??0;},
  floorAt:(x:number,z:number)=>model?.floorAt(x,z)??0,
  walkable:(x:number,z:number)=>{if(!mineWalkable(x,z))return false;if(z> -240)return true;if(!model)return false;const y=model.floorAt(x,z);return y!==null&&!model.blocked(x,z,y);},
  updateView:(camera:THREE.Camera,x:number,y:number,z:number)=>model?.updateView(camera,x,y,z),
  openExit:()=>{openingDoor=true;},updateExit:(dt:number)=>{opening=Math.min(1,opening+(openingDoor?dt:0));hinge.rotation.y=-opening*Math.PI*.55;},get exitOpened(){return openingDoor;},get exitOpening(){return opening;},exitBlocks:(x:number,z:number)=>opening<.95&&Math.abs(x)<7.5&&z>24.5,
  canExit:(x:number,z:number)=>mineExitCrossed(x,z,opening)};

}
