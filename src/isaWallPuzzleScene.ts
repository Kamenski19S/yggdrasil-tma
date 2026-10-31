import * as THREE from 'three';
import {isaSlideRoute} from './isaSlideRoute';
import {ISA_SLOTS,ISA_LINKS,ISA_TRAP,type IsaRune,createIsaWallPuzzle} from './isaWallPuzzle';
const glyphs:Record<IsaRune,number[][][]>={isa:[[[0,-.85],[0,.85]]],ansuz:[[[-.4,-.85],[-.4,.85]],[[-.4,.85],[.45,.35]],[[-.4,.2],[.45,-.3]]],raido:[[[-.4,-.85],[-.4,.85]],[[-.4,.85],[.4,.45],[-.4,.1],[.45,-.85]]],inguz:[[[-.45,.85],[.45,-.85]],[[.45,.85],[-.45,-.85]],[[-.35,0],[0,.35],[.35,0],[0,-.35],[-.35,0]]]};
export function createIsaWallPuzzleScene(state:ReturnType<typeof createIsaWallPuzzle>){
 const root=new THREE.Group();root.name='Каменные салазки Иса';
 const stone=new THREE.MeshStandardMaterial({color:'#c6c4b7',roughness:.82}),dark=new THREE.MeshStandardMaterial({color:'#35393d',roughness:1}),bronze=new THREE.MeshStandardMaterial({color:'#aa834b',metalness:.6,roughness:.5}),runeMaterial=new THREE.MeshStandardMaterial({color:'#d6ae62',metalness:.35,roughness:.45,emissive:'#8b5715',emissiveIntensity:.35});
 const backing=new THREE.Mesh(new THREE.BoxGeometry(15.5,15.2,.8),dark);backing.position.set(0,2.1,-.52);root.add(backing);
 const triangle=(size:number,depth:number)=>{const s=new THREE.Shape();s.moveTo(-size*.5,-size*.289);s.lineTo(size*.5,-size*.289);s.lineTo(0,size*.578);s.closePath();return new THREE.ExtrudeGeometry(s,{depth,bevelEnabled:true,bevelSize:.08,bevelThickness:.065,bevelSegments:2,steps:1});};
 const slotGeometry=triangle(4.28,.07),socketGeometry=triangle(3.96,.035),tileGeometry=triangle(3.94,.34),rims:THREE.Mesh[]=[];
 ISA_SLOTS.forEach((slot,index)=>{const material=bronze.clone(),socket=new THREE.Mesh(slotGeometry,material);socket.position.set(slot.x,slot.y,-.12);socket.rotation.z=slot.rotation;socket.name=index?'Гнездо руны '+index:'Свободное запасное гнездо';root.add(socket);const hollow=new THREE.Mesh(socketGeometry,dark);hollow.position.set(slot.x,slot.y,-.025);hollow.rotation.z=slot.rotation;root.add(hollow);rims.push(socket);});
 for(const [a,b]of ISA_LINKS){const rail=new THREE.Mesh(new THREE.TubeGeometry(isaSlideRoute(a,b),32,.055,5,false),bronze);root.add(rail);}
 const tiles=new Map<IsaRune,{root:THREE.Group;body:THREE.Mesh;rune:THREE.Group;material:THREE.MeshStandardMaterial}>();
 for(const id of ['ansuz','raido','isa','inguz'] as IsaRune[]){
  const group=new THREE.Group(),body=new THREE.Mesh(tileGeometry,stone);body.userData.rune=id;body.name='Передвижная плита · '+id;group.add(body);root.add(group);
  const rune=new THREE.Group(),material=runeMaterial.clone();rune.position.z=.48;group.add(rune);
  for(const path of glyphs[id])for(let i=1;i<path.length;i++){const a=path[i-1],b=path[i],dx=b[0]-a[0],dy=b[1]-a[1],length=Math.hypot(dx,dy),shape=new THREE.Shape();shape.moveTo(-.09,-length/2);shape.lineTo(.09,-length/2);shape.lineTo(.075,length/2);shape.lineTo(-.075,length/2);shape.closePath();const piece=new THREE.Mesh(new THREE.ExtrudeGeometry(shape,{depth:.035,bevelEnabled:true,bevelSize:.025,bevelThickness:.02,bevelSegments:1}),material);piece.position.set((a[0]+b[0])/2,(a[1]+b[1])/2,0);piece.rotation.z=-Math.atan2(dx,dy);piece.userData.rune=id;rune.add(piece);}
  tiles.set(id,{root:group,body,rune,material});
 }
 runeMaterial.dispose();
 const ray=new THREE.Raycaster();let time=0;
 const update=(dt:number)=>{time+=dt;const sliding=state.sliding;
  for(const [id,tile]of tiles){const slot=state.board.indexOf(id),source=ISA_SLOTS[slot],a=sliding?.rune===id?ISA_SLOTS[sliding.from]:source,b=sliding?.rune===id?ISA_SLOTS[sliding.to]:source,t=sliding?.rune===id?sliding.time/ISA_TRAP.slideSeconds:0,s=t*t*(3-2*t),rotation=THREE.MathUtils.lerp(a.rotation,b.rotation,s);if(sliding?.rune===id){tile.root.position.copy(isaSlideRoute(sliding.from,sliding.to).getPoint(s));tile.root.position.z=.24*Math.sin(t*Math.PI);}else tile.root.position.set(source.x,source.y,0);tile.root.rotation.z=rotation;tile.rune.rotation.z=-rotation;
   const cold=state.cold;tile.material.color.set(id==='isa'&&cold>0?'#c7f5ff':'#d6ae62');tile.material.emissive.set(id==='isa'&&cold>0?'#5dccff':'#8b5715');tile.material.emissiveIntensity=id==='isa'&&cold>0?2.5+.3*Math.sin(time*4):.35;
  }rims.forEach((rim,i)=>{const mat=rim.material as THREE.MeshStandardMaterial;mat.emissive.set('#c48a29');mat.emissiveIntensity=state.canMove(i)?.2+.13*Math.sin(time*4):0;});};update(0);
 return {root,tiles,update,
  press(camera:THREE.Camera,x:number,y:number,hero:{x:number;y:number;z:number}){if(state.phase!=='closing')return false;root.updateWorldMatrix(true,true);if(root.getWorldPosition(new THREE.Vector3()).distanceTo(new THREE.Vector3(hero.x,hero.y+9,hero.z))>40)return false;ray.setFromCamera(new THREE.Vector2(x,y),camera);const hit=ray.intersectObjects([...tiles.values()].map(t=>t.root),true)[0];const id=hit?.object.userData.rune as IsaRune|undefined;return id?state.move(state.board.indexOf(id)):false;},
  setStoneTexture(texture:THREE.Texture){stone.map=texture;stone.needsUpdate=true;},
 };
}
