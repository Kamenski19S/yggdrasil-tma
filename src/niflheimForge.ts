import * as THREE from 'three';

export function createNiflheimForge(x:number,z:number,floor:number){
  const root=new THREE.Group();root.name='Кузница хранителей';root.position.set(x,floor,z);root.rotation.y=Math.atan2(-x,124-z);
  const stone=new THREE.MeshStandardMaterial({color:'#697882',roughness:1}),snow=new THREE.MeshStandardMaterial({color:'#d3e4ed',roughness:1});
  const iron=new THREE.MeshStandardMaterial({color:'#394149',metalness:.75,roughness:.4}),ember=new THREE.MeshStandardMaterial({color:'#ff8b27',emissive:'#ff4a08',emissiveIntensity:2.7});
  const add=(g:THREE.BufferGeometry,m:THREE.Material,px:number,py:number,pz:number,sx=1,sy=1,sz=1)=>{const mesh=new THREE.Mesh(g,m);mesh.position.set(px,py,pz);mesh.scale.set(sx,sy,sz);mesh.castShadow=true;mesh.receiveShadow=true;root.add(mesh);return mesh;};
  const box=new THREE.BoxGeometry(1,1,1),rock=new THREE.DodecahedronGeometry(1,1);
  for(const side of [-1,1])for(let i=0;i<4;i++){add(rock,stone,side*9,5,-2-i*4,2.5,6,3.3);add(rock,snow,side*9,10,-2-i*4,2.6,1.4,3.4);}
  for(let i=0;i<4;i++){add(rock,stone,0,12.5,-2-i*4,9.5,2.6,3.4);add(rock,snow,0,14.4,-2-i*4,9.6,.9,3.5);}
  add(box,stone,0,6,-16,19,12,2);add(box,stone,0,-.15,-7.5,17,.3,17);
  add(box,stone,-4.3,1.1,-11,4.7,2.2,4.1);add(box,iron,-4.3,2.25,-11,3.9,.3,3.3);add(box,stone,-4.3,8.8,-14.2,3,8,2);add(box,ember,-4.3,2.55,-11,3.2,.35,2.6);
  const flames:THREE.Mesh[]=[];for(let i=0;i<7;i++)flames.push(add(new THREE.ConeGeometry(.4,1.7,5),ember,-5.5+i*.4,3.1,-11+(i%2)*.5,1,1+(i%3)*.25,1));
  const light=new THREE.PointLight('#ff963e',100,32,2);light.position.set(-4.3,5,-8);root.add(light);
  const doorwayLight=new THREE.PointLight('#ffd29b',28,22,2);doorwayLight.position.set(0,6,1);root.add(doorwayLight);
  add(box,stone,1,1.25,-6.8,3.8,2.5,3);add(box,iron,1,3,-6.8,4.6,1,2.2);const horn=add(new THREE.ConeGeometry(.65,2.5,8),iron,4,3,-6.8);horn.rotation.z=-Math.PI/2;add(box,iron,1,2.3,-6.8,2.4,.7,1.6);
  add(box,stone,6,2,-12,3.2,4,4.4);add(box,iron,6,4.15,-12,3.5,.3,4.7);
  for(let i=0;i<3;i++){add(box,iron,6,4.45,-13+i,1.3,.6,.6);add(box,stone,6,4.35,-12.5+i,.25,.25,1.6);}
  root.updateMatrixWorld(true);const local=(px:number,pz:number)=>root.worldToLocal(new THREE.Vector3(px,floor,pz));
  return {root,world:(px:number,py:number,pz:number)=>root.localToWorld(new THREE.Vector3(px,py,pz)),groundY(px:number,pz:number){const p=local(px,pz);return Math.abs(p.x)<8&&p.z<1&&p.z>-15?floor:undefined;},blocked(px:number,pz:number){const p=local(px,pz);return (Math.abs(p.x)>7.1&&Math.abs(p.x)<11.8&&p.z<1&&p.z>-17)||(Math.abs(p.x)<11.8&&p.z<-14.5&&p.z>-18)||(p.x>-7&&p.x<-1.5&&p.z<-8&&p.z>-13.5)||(Math.abs(p.x-1)<3.2&&Math.abs(p.z+6.8)<2.4)||(p.x>3.8&&p.z<-9&&p.z>-15);},update(time:number){flames.forEach((f,i)=>{f.scale.y=1+(i%3)*.25+Math.sin(time*7+i*1.8)*.13;});light.intensity=100+Math.sin(time*8)*8;}};
}
