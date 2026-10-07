import * as THREE from 'three';

export function createForgottenNamesHall(x:number,z:number,ground:(x:number,z:number)=>number,stone:THREE.MeshStandardMaterial,snow:THREE.Material){
  const base=ground(x,z),floor=base+.22;
  const root=new THREE.Group();root.name='Зал забытых имён';root.position.set(x,base,z);
  const block=new THREE.BoxGeometry(1,1,1);
  const dark=stone.clone();dark.color.set('#56616d');dark.roughness=.96;
  const paving=stone.clone();paving.color.set('#76828c');paving.roughness=.94;
  const frost=new THREE.MeshStandardMaterial({color:'#aad4e3',roughness:.55,metalness:.04});
  const recess=new THREE.MeshStandardMaterial({color:'#283740',roughness:1});
  const colliders:{x:number;z:number;w:number;d:number}[]=[];
  const box=(px:number,py:number,pz:number,w:number,h:number,d:number,material:THREE.Material=dark)=>{
    const mesh=new THREE.Mesh(block,material);mesh.position.set(px,py,pz);mesh.scale.set(w,h,d);mesh.castShadow=true;mesh.receiveShadow=true;
    mesh.onBeforeRender=()=>{if(stone.map){for(const m of [dark,paving])if(m.map!==stone.map){m.map=stone.map;m.needsUpdate=true;}}};
    root.add(mesh);return mesh;
  };
  const solid=(px:number,pz:number,w:number,d:number)=>colliders.push({x:px,z:pz,w:w/2+.65,d:d/2+.65});
  // Broad tiled floor, level with the approach; seams remain visible.
  for(let iz=0;iz<7;iz++)for(let ix=0;ix<6;ix++){
    const px=-10+ix*4,pz=-1-iz*4;
    box(px,.08,pz,3.91,.28,3.91,paving);
    if((ix*7+iz)%11===0)box(px+.3,.235,pz-.3,2.7,.05,2.5,snow);
  }
  // Block courses, broken wall tops and snow-covered coping.
  for(const side of [-1,1])for(let bay=0;bay<5;bay++){
    const pz=-3-bay*5,height=bay===3?8.3:bay===1?11.2:13;
    for(let row=0;row<Math.floor(height/2.6);row++){
      box(side*11.65,1.3+row*2.6,pz,1.8,2.5,4.9);
      if(row===1&&bay%2===0)box(side*10.7,3.6,pz+.8,.09,1.5,.4,frost);
    }
    const top=Math.floor(height/2.6)*2.6;
    box(side*11.65,top+.08,pz,2,.18,4.9,snow);
    solid(side*11.65,pz,1.8,5);
  }
  for(let col=0;col<6;col++){
    const px=-10+col*4,height=col===2?7.8:col===3?10.4:13;
    for(let row=0;row<height/2.6;row++)box(px,1.3+row*2.6,-26,3.9,2.5,1.8);
    box(px,height+.08,-26,4,.18,2,snow);solid(px,-26,4,1.8);
  }
  // Ten-unit doorway with a segmented stone arch and shallow approach.
  for(const side of [-1,1]){
    for(let row=0;row<4;row++)box(side*8.4,1.3+row*2.6,.7,6.2,2.5,2.1);
    solid(side*8.4,.7,6.2,2.1);
    box(side*5.55,5,.8,1.15,10,2.7);
    solid(side*5.55,.8,1.15,2.7);
    box(side*5.55,10.2,.8,1.45,.22,2.9,snow);
  }
  for(let i=0;i<9;i++){
    const a=i/8*Math.PI,px=5.6*Math.cos(a),py=9.7+3*Math.sin(a);
    const arch=box(px,py,.8,1.5,1.65,2.7);arch.rotation.z=a-Math.PI/2;
    const cap=box(px,py+.8,.8,1.5,.13,2.8,snow);cap.rotation.z=arch.rotation.z;
  }
  // Remnants of the roof leave a large central opening to the snowy sky.
  for(const side of [-1,1])for(let bay=0;bay<3;bay++){
    const px=side*9.2,pz=-5-bay*8,py=13.3+(bay===1?-.3:0);
    const slab=box(px,py,pz,5.2,.75,7.2);slab.rotation.z=side*.045;
    box(px,py+.46,pz,5.2,.16,7.1,snow);
  }
  box(0,13.5,-24,13,.8,4.3);box(0,14,-24,13,.18,4.2,snow);
  // Blank memorial steles; names and game interactions will be added later.
  for(const side of [-1,1])for(let i=0;i<3;i++){
    const px=side*7.6,pz=-5-i*7,height=4.4+i*.35;
    box(px,.42,pz,3.4,.65,2.4,paving);
    box(px,.7+height/2,pz,2.4,height,.8);
    const top=box(px,.7+height,pz,2.4,.65,.85);top.rotation.z=side*.08;
    box(px,.82+height/2,pz+.43,1.8,height-1,.04,recess);
    box(px,.92+height,pz,2.5,.14,1,snow);
    solid(px,pz,3.4,2.4);
    for(let k=0;k<3;k++)box(px-.85+k*.7,height+.42-k*.1,pz+.5,.07,.8-k*.15,.07,frost);
  }
  box(0,.36,-21,5,.48,3.5,paving);
  box(0,3,-21,3.8,5.2,1);
  box(0,3.1,-20.48,2.95,3.7,.05,recess);
  box(0,5.74,-21,4,.18,1.2,snow);solid(0,-21,5,3.5);
  // Small fallen stones outside the main walking aisle.
  for(let i=0;i<5;i++){const side=i%2?-1:1;const rubble=box(side*(9-i%3*.4),.45,-10-i*2.5,1.4,.8,1.7,paving);rubble.rotation.y=i*.8;rubble.rotation.z=.12;}
  const light=new THREE.PointLight('#b6ddf5',65,34,2);light.position.set(0,9,-12);root.add(light);
  const inside=(px:number,pz:number)=>Math.abs(px-x)<10.8&&pz-z<1&&pz-z>-25;
  const groundY=(px:number,pz:number)=>{
    const lx=Math.abs(px-x),lz=pz-z;
    if(lx>14||lz>5||lz<-29)return undefined;
    const edge=Math.max((lx-12)/2,(lz-1)/4,(-27-lz)/2,0);
    return THREE.MathUtils.lerp(floor,ground(px,pz),THREE.MathUtils.smoothstep(edge,0,1));
  };
  const terrainY=(px:number,pz:number)=>{const y=groundY(px,pz);return y===undefined?undefined:y-.16;};
  const blocked=(px:number,pz:number)=>colliders.some(c=>Math.abs(px-x-c.x)<c.w&&Math.abs(pz-z-c.z)<c.d);
  const camera=(px:number,pz:number)=>new THREE.Vector3(THREE.MathUtils.clamp(px,x-8,x+8),base+9.5,THREE.MathUtils.clamp(pz+10,z-16,z+7));
  return {root,inside,groundY,terrainY,blocked,camera};
}
