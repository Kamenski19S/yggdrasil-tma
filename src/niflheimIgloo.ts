import * as THREE from 'three';

export function createMemoryIgloo(model:THREE.Group,x:number,z:number,ground:(x:number,z:number)=>number){
  const centreZ=z-22,floor=ground(x,z)+.1;
  model.scale.set(22,24,22);model.position.set(x,floor,centreZ);model.name='Пещера воспоминаний — ледяной дом';
  model.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
  const local=(wx:number,wz:number)=>({x:wx-x,z:wz-centreZ});
  const inside=(wx:number,wz:number)=>{const p=local(wx,wz);return Math.hypot(p.x,p.z)<18.5||(Math.abs(p.x)<4.3&&p.z>=15&&p.z<24);};
  const blocked=(wx:number,wz:number)=>{
    const p=local(wx,wz),r=Math.hypot(p.x,p.z);
    if(Math.abs(p.x)<4.3&&p.z>14&&p.z<25)return false;
    return r>18.5&&r<22.8;
  };
  const terrainY=(wx:number,wz:number)=>{
    const p=local(wx,wz),r=Math.hypot(p.x,p.z);
    if(r>=28)return undefined;
    const weight=1-THREE.MathUtils.smoothstep(r,23,28);
    return THREE.MathUtils.lerp(ground(wx,wz),floor-.04,weight);
  };
  const base=new THREE.Mesh(new THREE.CircleGeometry(21.9,64),new THREE.MeshStandardMaterial({color:'#cfdee6',roughness:.95}));base.rotation.x=-Math.PI/2;base.position.set(x,floor,centreZ);base.receiveShadow=true;base.name='Пол ледяного дома';
  return {model,base,floor,inside,blocked,terrainY,groundY:(wx:number,wz:number)=>inside(wx,wz)?floor:undefined,
    world:(px:number,py:number,pz:number)=>new THREE.Vector3(x+px,floor+py,centreZ+pz+6),
    camera:(wx:number,wz:number)=>{const p=local(wx,wz);const cz=Math.min(16,p.z+10),cx=THREE.MathUtils.clamp(p.x,-6,6);return new THREE.Vector3(x+cx,floor+10,centreZ+cz);}
  };
}
