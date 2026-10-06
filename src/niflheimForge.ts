import * as THREE from 'three';
import {BASE} from './core';

export function createNiflheimForge(x:number,z:number,floor:number,ground:(x:number,z:number)=>number=()=>floor){
  const root=new THREE.Group();root.name='Кузница хранителей';root.position.set(x,floor,z);root.rotation.y=Math.atan2(-x,124-z);
  const stone=new THREE.MeshStandardMaterial({color:'#a4becf',roughness:1}),snow=new THREE.MeshStandardMaterial({color:'#d3e4ed',roughness:1});
  const iron=new THREE.MeshStandardMaterial({color:'#394149',metalness:.75,roughness:.4}),ember=new THREE.MeshStandardMaterial({color:'#ff8b27',emissive:'#ff4a08',emissiveIntensity:2.7});
  const add=(g:THREE.BufferGeometry,m:THREE.Material,px:number,py:number,pz:number,sx=1,sy=1,sz=1)=>{const mesh=new THREE.Mesh(g,m);mesh.position.set(px,py,pz);mesh.scale.set(sx,sy,sz);mesh.castShadow=true;mesh.receiveShadow=true;root.add(mesh);return mesh;};
  const box=new THREE.BoxGeometry(1,1,1);
  const texture=new THREE.TextureLoader().load(`${BASE}img/models/T_Forge_WhiteStone.webp`);texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(2,2);stone.map=texture;
  for(const side of [-1,1]){add(box,stone,side*9,5,-7.5,5,12,19);add(box,snow,side*9,11.3,-7.5,5.1,.6,19.2);}
  add(box,stone,0,12.5,-7.5,23,5.2,19);add(box,snow,0,15.3,-7.5,23.2,.4,19.2);
  // Narrow the mouth slightly; keep the existing height and room dimensions.
  for(const side of [-1,1])add(box,stone,side*5.4,4.5,.1,2.2,9,1.8);
  add(box,stone,0,10.1,.1,10,2.2,1.8);
  add(box,stone,0,6,-16,19,12,2);add(box,stone,0,-.15,-7.5,17,.3,17);
  add(box,stone,-4.3,1.1,-11,4.7,2.2,4.1);add(box,iron,-4.3,2.25,-11,3.9,.3,3.3);add(box,stone,-4.3,8.8,-14.2,3,8,2);add(box,ember,-4.3,2.55,-11,3.2,.35,2.6);
  const flames:THREE.Mesh[]=[];for(let i=0;i<7;i++)flames.push(add(new THREE.ConeGeometry(.4,1.7,5),ember,-5.5+i*.4,3.1,-11+(i%2)*.5,1,1+(i%3)*.25,1));
  const light=new THREE.PointLight('#ff963e',100,32,2);light.position.set(-4.3,5,-8);root.add(light);
  const doorwayLight=new THREE.PointLight('#ffd29b',28,22,2);doorwayLight.position.set(0,6,1);root.add(doorwayLight);
  add(box,stone,1,1.25,-6.8,3.8,2.5,3);add(box,iron,1,3,-6.8,4.6,1,2.2);const horn=add(new THREE.ConeGeometry(.65,2.5,8),iron,4,3,-6.8);horn.rotation.z=-Math.PI/2;add(box,iron,1,2.3,-6.8,2.4,.7,1.6);
  add(box,stone,6,2,-12,3.2,4,4.4);add(box,iron,6,4.15,-12,3.5,.3,4.7);
  for(let i=0;i<3;i++){add(box,iron,6,4.45,-13+i,1.3,.6,.6);add(box,stone,6,4.35,-12.5+i,.25,.25,1.6);}
  root.updateMatrixWorld(true);
  const outer=root.localToWorld(new THREE.Vector3(0,0,12)),outerY=ground(outer.x,outer.z)-floor+.12;
  const deckY=(z:number)=>THREE.MathUtils.lerp(0,outerY,THREE.MathUtils.clamp(z/12,0,1));
  const ice=new THREE.MeshStandardMaterial({color:'#a7d7ed',metalness:.12,roughness:.28});
  const deck=new THREE.BufferGeometry();deck.setAttribute('position',new THREE.Float32BufferAttribute([-3.8,0,0,3.8,0,0,-3.8,outerY,12,3.8,outerY,12],3));deck.setIndex([0,2,1,1,2,3]);deck.computeVertexNormals();add(deck,ice,0,.04,0);
  // Slim ice edges make the raised walkway readable above the river.
  for(const side of [-1,1]){const edge=add(box,ice,side*3.8,outerY/2-.2,6,.25,.45,Math.hypot(12,outerY));edge.rotation.x=-Math.atan2(outerY,12);}
  const local=(px:number,pz:number)=>root.worldToLocal(new THREE.Vector3(px,floor,pz));
  return {root,world:(px:number,py:number,pz:number)=>root.localToWorld(new THREE.Vector3(px,py,pz)),
    inside(px:number,pz:number){const p=local(px,pz);return Math.abs(p.x)<6.5&&p.z<0&&p.z>-15;},
    canEnter(px:number,pz:number){const p=local(px,pz);return Math.abs(p.x)<4&&p.z<-1&&p.z>-5.5;},
    groundY(px:number,pz:number){const p=local(px,pz);if(Math.abs(p.x)<3.8&&p.z>=0&&p.z<=12)return floor+deckY(p.z)+.04;return Math.abs(p.x)<6.5&&p.z<0&&p.z>-15?floor:undefined;},
    blocked(px:number,pz:number){const p=local(px,pz);return (Math.abs(p.x)>6&&Math.abs(p.x)<12&&p.z<2.6&&p.z>-17.6)||(Math.abs(p.x)<12&&p.z<-14.5&&p.z>-18)||(Math.abs(p.x)>3.7&&Math.abs(p.x)<7.1&&Math.abs(p.z-.1)<1.5)||(p.x>-7&&p.x<-1.5&&p.z<-8&&p.z>-13.5)||(Math.abs(p.x-1)<3.2&&Math.abs(p.z+6.8)<2.4)||(p.x>3.8&&p.z<-9&&p.z>-15);},
    update(time:number){flames.forEach((f,i)=>{f.scale.y=1+(i%3)*.25+Math.sin(time*7+i*1.8)*.13;});light.intensity=100+Math.sin(time*8)*8;}};
}
