import * as THREE from 'three';
import type { Save } from './core';
export const CHAOS_GATE_KEY='chaos:north:cleared';
export const CHAOS_GATE_COST=300;
export const CHAOS_GATE_RUNES=['fehuWealth','algizGuard','thurisazStrike'];
export function cleanseChaosGate(s:Save,rune:string):Save {
  if(s.done.includes(CHAOS_GATE_KEY)||!CHAOS_GATE_RUNES.includes(rune)||!s.runes.includes(rune)||s.immortalityDrops<CHAOS_GATE_COST)return s;
  return {...s,immortalityDrops:s.immortalityDrops-CHAOS_GATE_COST,done:[...s.done,CHAOS_GATE_KEY]};
}
// The veil and inscriptions are separate from the stone frame and dissolve together.
export function createChaosGate(scene:THREE.Scene,x:number,y:number,z:number,load:(callback:(asset:any)=>void)=>void){
  const group=new THREE.Group();group.position.set(x,y,z);group.rotation.y=Math.PI/2;scene.add(group);
  const canvas=document.createElement('canvas');canvas.width=512;canvas.height=512;
  const ctx=canvas.getContext('2d')!;ctx.clearRect(0,0,512,512);ctx.strokeStyle='#c5a3e8';ctx.lineWidth=4;ctx.shadowColor='#894fb7';ctx.shadowBlur=16;
  ctx.beginPath();ctx.arc(256,245,148,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.arc(256,245,125,0,Math.PI*2);ctx.stroke();
  ctx.fillStyle='#dabbe8';ctx.font='92px serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('ᚺ',256,160);ctx.fillText('ᚾ',176,287);ctx.fillText('ᛁ',336,287);
  for(let i=0;i<8;i++){const a=i*Math.PI/4;ctx.beginPath();ctx.moveTo(256+Math.cos(a)*132,245+Math.sin(a)*132);ctx.lineTo(256+Math.cos(a)*158,245+Math.sin(a)*158);ctx.stroke();}
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
  const ink=new THREE.MeshBasicMaterial({map:texture,transparent:true,side:THREE.DoubleSide,depthWrite:false,opacity:.85});
  const marks=new THREE.Mesh(new THREE.PlaneGeometry(4.4,4.4),ink);marks.position.set(0,3,-1.29);group.add(marks);
  const veilMaterials:THREE.Material[]=[];let progress=1;
  load(asset=>{
    if(!group.parent){asset.scene.traverse((o:any)=>{o.geometry?.dispose();if(o.material)for(const m of [].concat(o.material)) (m as any).dispose();});return;}
    const model=asset.scene;const bounds=new THREE.Box3().setFromObject(model);const center=bounds.getCenter(new THREE.Vector3());const size=bounds.getSize(new THREE.Vector3());const scale=9.1/size.x;
    model.scale.multiplyScalar(scale);model.position.set(-center.x*scale,-bounds.min.y*scale,-center.z*scale);group.add(model);
    model.traverse((o:any)=>{if(o.name==='ChaosVeil'&&o.isMesh){const mat=o.material as THREE.Material;mat.depthWrite=false;mat.transparent=true;veilMaterials.push(mat);}});
    // Canvas marks sit just in front of the supplied veil, in its actual plane.
    const veil=model.getObjectByName('ChaosVeil');if(veil){veil.updateWorldMatrix(true,false);const p=group.worldToLocal(new THREE.Box3().setFromObject(veil).getCenter(new THREE.Vector3()));marks.position.z=p.z+.015;}
  });
  return {
    update(dt:number,cleared:boolean,time:number){progress=Math.max(0,Math.min(1,progress+(cleared?-dt:dt)));marks.visible=progress>0;ink.opacity=progress*(.78+Math.sin(time*.0018)*.12);for(const material of veilMaterials){material.opacity=.8*progress;material.visible=progress>0;}},
    dispose(){scene.remove(group);texture.dispose();group.traverse((o:any)=>{o.geometry?.dispose();if(o.material)for(const m of [].concat(o.material))(m as any).dispose();});}
  };
}
