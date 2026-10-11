import * as THREE from 'three';
import {BASE} from './core';
import {NIFL_RIVERS,niflGroundY} from './niflheimMapData';
import {MEMORY_FINDS} from './niflheimMemoryQuest';

export function addFrozenRiverFinds(scene:THREE.Scene){
  const groups=[new THREE.Group(),new THREE.Group(),new THREE.Group()];
  const loader=new THREE.TextureLoader();
  const sizes=[[4.64,4.9],[2.67,2.7],[3.18,3.2]];
  ['staff','medallion','tablet'].forEach((name,i)=>{
    const texture=loader.load(`${BASE}img/quests/memory-${name}.webp`);texture.colorSpace=THREE.SRGBColorSpace;
    const material=new THREE.MeshBasicMaterial({map:texture,transparent:true,alphaTest:.035,side:THREE.DoubleSide,depthWrite:false});
    const item=new THREE.Mesh(new THREE.PlaneGeometry(...sizes[i] as [number,number]),material);
    item.rotation.x=-Math.PI/2;item.position.y=.32;item.renderOrder=2;
    groups[i].name=MEMORY_FINDS[i].name;groups[i].add(item);
  });
  groups.forEach((group,i)=>{
    const p=NIFL_RIVERS[0][Math.floor((NIFL_RIVERS[0].length-1)*MEMORY_FINDS[i].t)];group.position.set(p.x,niflGroundY(p.x,p.z)+.18,p.z);group.rotation.y=[.3,-.5,.2][i];scene.add(group);
    // Local translucent ice crust keeps the clues visibly trapped in the ice.
    const crust=new THREE.Mesh(new THREE.CircleGeometry(2.6,24),new THREE.MeshBasicMaterial({color:'#a9dcea',transparent:true,opacity:.09,depthWrite:false,side:THREE.DoubleSide}));crust.position.y=.4;crust.rotation.x=-Math.PI/2;crust.renderOrder=3;group.add(crust);
  });
  return {near(x:number,z:number,found:string[]){return MEMORY_FINDS.find((f,i)=>!found.includes(f.id)&&Math.hypot(x-groups[i].position.x,z-groups[i].position.z)<4);},update(found:string[]){groups.forEach((g,i)=>g.visible=!found.includes(MEMORY_FINDS[i].id));}};
}
