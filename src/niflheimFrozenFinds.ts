import * as THREE from 'three';
import {NIFL_RIVERS,niflGroundY} from './niflheimMapData';

export function addFrozenRiverFinds(scene:THREE.Scene){
  const wood=new THREE.MeshStandardMaterial({color:'#5d3b27',roughness:1});
  const silver=new THREE.MeshStandardMaterial({color:'#9bbfcb',metalness:.2,roughness:.65});
  const gold=new THREE.MeshStandardMaterial({color:'#d9b967',metalness:.3,roughness:.6});
  const stone=new THREE.MeshStandardMaterial({color:'#516b7d',roughness:1});
  const groups=[new THREE.Group(),new THREE.Group(),new THREE.Group()];
  const add=(g:THREE.Group,geo:THREE.BufferGeometry,mat:THREE.Material,x:number,y:number,z:number)=>{const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);g.add(m);return m;};
  const staff=groups[0];staff.name='Обломок посоха подо льдом';
  const shaft=add(staff,new THREE.CylinderGeometry(.12,.17,2.8,9),wood,0,.16,0);shaft.rotation.z=Math.PI/2;shaft.rotation.y=.35;
  const broken=add(staff,new THREE.ConeGeometry(.17,.45,5),wood,1.55,.16,-.5);broken.rotation.z=-Math.PI/2;
  for(const x of [-.85,.8]){const band=add(staff,new THREE.CylinderGeometry(.185,.185,.18,10),silver,x,.16,-x*.34);band.rotation.z=Math.PI/2;}
  const head=add(staff,new THREE.IcosahedronGeometry(.35,0),new THREE.MeshStandardMaterial({color:'#56a9bb',emissive:'#144854',emissiveIntensity:.35,roughness:.5}),-1.55,.25,.5);
  const medallion=groups[1];medallion.name='Медальон хранителя подо льдом';
  add(medallion,new THREE.CylinderGeometry(.7,.7,.14,24),gold,0,.12,0);
  const rim=add(medallion,new THREE.TorusGeometry(.58,.055,6,24),silver,0,.21,0);rim.rotation.x=Math.PI/2;
  const jewel=add(medallion,new THREE.IcosahedronGeometry(.24,0),new THREE.MeshStandardMaterial({color:'#67bdd0',emissive:'#20454e',emissiveIntensity:.3}),0,.24,0);jewel.scale.y=.35;
  const chain=new THREE.EllipseCurve(0,-1.0,.43,.7,0,Math.PI*2,false,0).getPoints(32).map(p=>new THREE.Vector3(p.x,.1,p.y));medallion.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(chain),gold));
  const tablet=groups[2];tablet.name='Плитка с руной подо льдом';
  add(tablet,new THREE.BoxGeometry(1.65,.2,2.1),stone,0,.12,0);
  const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const ctx=canvas.getContext('2d')!;ctx.clearRect(0,0,128,128);ctx.font='bold 94px serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#b7e3ef';ctx.fillText('ᛚ',64,65);
  const rune=add(tablet,new THREE.PlaneGeometry(1.1,1.5),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(canvas),transparent:true,depthWrite:false}),0,.23,0);rune.rotation.x=-Math.PI/2;
  const river=NIFL_RIVERS[0];
  groups.forEach((group,i)=>{
    const p=river[Math.floor((river.length-1)*[.72,.53,.34][i])];group.position.set(p.x,niflGroundY(p.x,p.z)+.18,p.z);group.rotation.y=[.3,-.5,.2][i];scene.add(group);
    // Local translucent ice crust keeps the clues visibly trapped in the ice.
    const crust=add(group,new THREE.CircleGeometry(2.05,24),new THREE.MeshBasicMaterial({color:'#a9dcea',transparent:true,opacity:.13,depthWrite:false,side:THREE.DoubleSide}),0,.55,0);crust.rotation.x=-Math.PI/2;
  });
}
