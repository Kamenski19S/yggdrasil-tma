import * as THREE from 'three';
export type WallTrapSite={x:number;y:number;z:number;tx:number;tz:number;left:number;right:number};
type Shot={mesh:THREE.Group;site:WallTrapSite;offset:number;side:number;distance:number;age:number;hit:boolean};
/** Physical volleys, with swept collision: success depends on movement, not a death roll. */
export function createWallWeaponTraps(kind:'axe'|'arrow',sites:WallTrapSite[],floor:(x:number,z:number,y:number)=>number|null){
 const root=new THREE.Group();root.name=kind==='axe'?'Три камня с топорами':'Три скрытые плиты со стрелами';
 const steel=new THREE.MeshStandardMaterial({color:'#c6d2d7',metalness:.8,roughness:.28}),wood=new THREE.MeshStandardMaterial({color:'#4f2b19',roughness:.8}),gold=new THREE.MeshBasicMaterial({color:'#d3ad5c'});
 const make=()=>{const object=new THREE.Group();if(kind==='arrow'){const shaft=new THREE.Mesh(new THREE.CylinderGeometry(.09,.09,4,5),wood);shaft.rotation.z=-Math.PI/2;object.add(shaft);const tip=new THREE.Mesh(new THREE.ConeGeometry(.38,1,4),steel);tip.rotation.z=-Math.PI/2;tip.position.x=2.25;object.add(tip);for(let i=0;i<2;i++){const fin=new THREE.Mesh(new THREE.PlaneGeometry(1,.8),gold);fin.position.x=-1.5;fin.rotation.x=i*Math.PI/2;object.add(fin);}}
  else{const handle=new THREE.Mesh(new THREE.CylinderGeometry(.17,.23,5,8),wood);object.add(handle);for(const side of [-1,1]){const shape=new THREE.Shape();shape.moveTo(0,.8);shape.lineTo(side*1.1,1.8);shape.quadraticCurveTo(side*3.2,2.5,side*2.8,-.5);shape.lineTo(side*.7,.25);shape.closePath();object.add(new THREE.Mesh(new THREE.ExtrudeGeometry(shape,{depth:.26,bevelEnabled:true,bevelSize:.08,bevelThickness:.08,bevelSegments:1,steps:1}),steel));}}
  return object;};
 const template=make(),shots:Shot[]=[],timers=sites.map(()=>({age:-1,next:.18,cooldown:0,wave:0}));
 const fire=(site:WallTrapSite,wave:number)=>{for(const offset of(kind==='axe'?[-4,0,4]:[-3,0,3])){const side=wave%2?1:-1,mesh=template.clone(true);root.add(mesh);shots.push({mesh,site,offset,side,distance:-(side<0?site.right:site.left),age:0,hit:false});}};
 const pose=(shot:Shot)=>{const s=shot.site,nx=-s.tz,nz=s.tx,x=s.x+s.tx*shot.offset+nx*shot.distance*shot.side,z=s.z+s.tz*shot.offset+nz*shot.distance*shot.side;return new THREE.Vector3(x,(floor(x,z,s.y)??s.y)+8,z);};
 return {root,sites,shots,reset(){shots.forEach(s=>s.mesh.removeFromParent());shots.length=0;timers.forEach(t=>{t.age=-1;t.cooldown=0;t.wave=0;t.next=.18;});},update(dt:number,hero:{x:number;y:number;z:number}){if(dt<=0)return false;let hit=false;
  sites.forEach((s,i)=>{const t=timers[i];t.cooldown=Math.max(0,t.cooldown-dt);const along=(hero.x-s.x)*s.tx+(hero.z-s.z)*s.tz,cross=-(hero.x-s.x)*s.tz+(hero.z-s.z)*s.tx;
   if(t.age<0&&t.cooldown===0&&Math.abs(along)<2.8&&Math.abs(cross)<(kind==='axe'?5:4)&&Math.abs(hero.y-s.y)<5){t.age=0;t.next=.18;t.wave=0;t.cooldown=18;}
   if(t.age>=0){t.age+=dt;while(t.age>=t.next&&t.wave<8){fire(s,t.wave++);t.next+=kind==='axe'?.48:.25;}if(t.age>5)t.age=-1;}
  });
  for(let i=shots.length-1;i>=0;i--){const s=shots[i],a=pose(s);s.distance+=(kind==='axe'?72:125)*dt;s.age+=dt;const b=pose(s);s.mesh.position.copy(b);s.mesh.rotation.set(0,-Math.atan2(s.site.tx,-s.site.tz)+(s.side<0?Math.PI:0),kind==='axe'?s.age*22:0);
   const vx=b.x-a.x,vz=b.z-a.z,q=THREE.MathUtils.clamp(((hero.x-a.x)*vx+(hero.z-a.z)*vz)/(vx*vx+vz*vz||1),0,1),y=THREE.MathUtils.lerp(a.y,b.y,q);
   if(!s.hit&&Math.hypot(hero.x-a.x-vx*q,hero.z-a.z-vz*q)<(kind==='axe'?4:2.6)&&y>hero.y&&y<hero.y+14){s.hit=true;hit=true;}
   if(s.distance>(s.side<0?s.site.left:s.site.right)+3){s.mesh.removeFromParent();shots.splice(i,1);}
  }return hit;
 },dispose(){const geometries=new Set<THREE.BufferGeometry>();template.traverse(o=>{if(o instanceof THREE.Mesh)geometries.add(o.geometry);});geometries.forEach(g=>g.dispose());steel.dispose();wood.dispose();gold.dispose();shots.forEach(s=>s.mesh.removeFromParent());shots.length=0;root.removeFromParent();}};
}
