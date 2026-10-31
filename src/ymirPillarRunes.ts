import * as THREE from 'three';
import {DecalGeometry} from 'three/examples/jsm/geometries/DecalGeometry.js';

type Segment=readonly [number,number,number,number];
const GLYPHS:Segment[][]=[[[.2,.12,.2,.88],[.2,.12,.58,.34],[.58,.34,.83,.14],[.2,.88,.58,.66],[.58,.66,.83,.86]],[[.22,.1,.22,.9],[.22,.1,.8,.38],[.22,.39,.8,.67]]];
/** Transparent signed-distance strokes: only gold rune marks, no marble or rectangular frame. */
export function createGoldRuneTexture(index:number){
 const width=128,height=192,data=new Uint8Array(width*height*4),segments=GLYPHS[index];
 for(let y=0;y<height;y++)for(let x=0;x<width;x++){
  const u=x/(width-1),v=1-y/(height-1);let distance=1;
  for(const [ax,ay,bx,by]of segments){const dx=bx-ax,dy=by-ay,t=THREE.MathUtils.clamp(((u-ax)*dx+(v-ay)*dy)/(dx*dx+dy*dy),0,1);distance=Math.min(distance,Math.hypot((u-ax-t*dx)*.67,v-ay-t*dy));}
  const core=1-THREE.MathUtils.smoothstep(distance,.014,.025),halo=Math.exp(-distance*distance/.003)*.28,at=(y*width+x)*4;
  data[at]=255;data[at+1]=175+Math.round(core*48);data[at+2]=28+Math.round(core*48);data[at+3]=Math.round(Math.max(core,halo)*255);
 }
 const texture=new THREE.DataTexture(data,width,height,THREE.RGBAFormat);texture.colorSpace=THREE.SRGBColorSpace;texture.magFilter=texture.minFilter=THREE.LinearFilter;texture.needsUpdate=true;return texture;
}
export function createYmirPillarRunes(pillar:THREE.Object3D){
 pillar.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(pillar),center=bounds.getCenter(new THREE.Vector3()),ray=new THREE.Raycaster(),projector=new THREE.Object3D();
 const root=new THREE.Group();root.name='Сияющие золотые руны на камне со стороны дорожки';
 const runes=[0,1].map(index=>{
  // The authored approach road ends at (-100,25), east (+X) of the pillar.
  ray.set(new THREE.Vector3(bounds.max.x+10,bounds.min.y+11,center.z+(index?-1.8:1.8)),new THREE.Vector3(-1,0,0));
  const hit=ray.intersectObject(pillar,true)[0];if(!hit||!(hit.object instanceof THREE.Mesh))throw Error('Missing road-facing Ymir rune surface');
  const normal=hit.face!.normal.clone().transformDirection(hit.object.matrixWorld);projector.position.copy(hit.point);projector.lookAt(hit.point.clone().add(normal));
  const geometry=new DecalGeometry(hit.object,hit.point,projector.rotation,new THREE.Vector3(2.5,4.2,1.6));geometry.translate(-hit.point.x,-hit.point.y,-hit.point.z);
  const material=new THREE.MeshBasicMaterial({map:createGoldRuneTexture(index),transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2,toneMapped:false});
  const mesh=new THREE.Mesh(geometry,material);mesh.position.copy(hit.point);mesh.name=index?'Ансуз · голос Имира':'Пертр · память Имира';root.add(mesh);return mesh;
 });let time=0,flash=0;
 return {root,runes,
  canStrike(hero:{x:number;y:number;z:number},yaw:number){if(hero.x<center.x||Math.abs(hero.y-bounds.min.y)>7)return false;ray.set(new THREE.Vector3(hero.x,hero.y+9,hero.z),new THREE.Vector3(Math.sin(yaw),0,Math.cos(yaw)));const hit=ray.intersectObject(pillar,true)[0];return !!hit&&hit.distance<=13&&!!hit.face&&hit.face.normal.clone().transformDirection(hit.object.matrixWorld).x>.3;},
  strike(){flash=.45;},update(dt:number,released:boolean){time+=dt;flash=Math.max(0,flash-dt);runes.forEach((r,i)=>{r.material.opacity=Math.min(1,.83+.12*Math.sin(time*2.6+i)+(flash>0?.2:0));r.material.color.set(i===1&&!released?'#e5b94a':'#ffffff');});},
  dispose(){runes.forEach(r=>{r.geometry.dispose();r.material.map?.dispose();r.material.dispose();});},
 };
}
