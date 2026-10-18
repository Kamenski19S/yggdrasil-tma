import * as THREE from 'three';
/** Lightweight original characters, sharing geometry within each actor. */
export function createAshDwarf(role:'miner'|'guard'|'keeper'='miner',seed=0){
 const root=new THREE.Group();root.name=role==='miner'?'Пепельный гном — рудокоп':role==='guard'?'Пепельный страж':'Хранитель огненных врат';
 const skin=new THREE.MeshStandardMaterial({color:'#998779',roughness:1}),iron=new THREE.MeshStandardMaterial({color:role==='keeper'?'#a08449':'#46464b',metalness:.55,roughness:.65}),cloth=new THREE.MeshStandardMaterial({color:role==='miner'?'#67503b':'#4c3030',roughness:1}),beard=new THREE.MeshStandardMaterial({color:seed%2?'#b1aaa1':'#736d67',roughness:1}),wood=new THREE.MeshStandardMaterial({color:'#4a3020',roughness:1});
 const box=new THREE.BoxGeometry(1,1,1),ball=new THREE.SphereGeometry(1,10,7);
 const part=(g:THREE.BufferGeometry,m:THREE.Material,x:number,y:number,z:number,sx:number,sy:number,sz:number,parent:THREE.Object3D=root)=>{const o=new THREE.Mesh(g,m);o.position.set(x,y,z);o.scale.set(sx,sy,sz);parent.add(o);return o;};
 const legs=[-1,1].map(s=>part(box,cloth,s*.95,1.5,0,.9,2.8,1.3));for(const s of [-1,1])part(box,iron,s*.95,.5,.4,1.2,1,2);
 part(ball,cloth,0,4,0,2.3,2.5,1.45);if(role!=='miner')part(box,iron,0,4.5,.7,3.7,3,.85);
 part(ball,skin,0,7,0,1.7,1.7,1.5);part(ball,skin,0,6.9,1.6,.55,.5,.6);
 for(const s of [-1,1])part(ball,new THREE.MeshBasicMaterial({color:'#1a1716'}),s*.56,7.2,1.35,.16,.18,.15);
 part(new THREE.ConeGeometry(1.65,3.6,7),beard,0,5.55,1.05,1,1,.7).rotation.x=Math.PI;
 part(new THREE.SphereGeometry(1.82,10,6,0,Math.PI*2,0,Math.PI/2),iron,0,7.8,0,1,1,1);
 const lamp=part(ball,new THREE.MeshBasicMaterial({color:role==='miner'?'#ffd08a':'#d37c39'}),0,8,1.6,.35,.35,.2);
 const arm=new THREE.Group();arm.position.set(-2.15,5.7,0);root.add(arm);part(box,cloth,0,-1,0,.9,2.5,1,arm);part(ball,skin,0,-2.3,0,.55,.55,.55,arm);
 const tool=new THREE.Group();tool.position.set(0,-2.3,.1);arm.add(tool);part(box,wood,0,1.2,.3,.25,4,.25,tool);
 if(role==='miner'){const pick=part(box,iron,0,3.1,.3,3.7,.45,.5,tool);pick.rotation.z=.15;}else{part(box,iron,0,3.1,.3,2.3,1.3,1.1,tool);part(new THREE.CylinderGeometry(1.8,1.8,.4,12),iron,2.4,4.3,.6,1,1,1).rotation.x=Math.PI/2;}
 return {root,arm,lamp,update:(time:number,moving=false,striking=false)=>{arm.rotation.x=role==='miner'?-.45+Math.sin(time*2.2+seed)*.75:striking?-1.8:Math.sin(time*3+seed)*.12;legs.forEach((l,i)=>l.rotation.x=moving?Math.sin(time*7+i*Math.PI)*.4:0);}};
}
