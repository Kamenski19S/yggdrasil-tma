import * as THREE from 'three';
import {BASE} from './core';
import {NIFL_SOURCE,niflGroundY} from './niflheimMapData';
/** A small natural stone basin with one animated water surface and three rune markers. */
export function createHvergelmir(scene:THREE.Scene,restored:boolean){
  const root=new THREE.Group();root.name='Чаша Хвергельмира';root.position.set(NIFL_SOURCE.x,niflGroundY(NIFL_SOURCE.x,NIFL_SOURCE.z)+.12,NIFL_SOURCE.z);scene.add(root);
  const stone=new THREE.MeshStandardMaterial({color:'#bec8cd',roughness:1});
  let alive=true;const texture=new THREE.TextureLoader().load(`${BASE}img/models/Stone_Sacred_1.jpg`,t=>{if(!alive){t.dispose();return;}t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(1.5,1);stone.map=t;stone.needsUpdate=true;});
  const rockGeo=new THREE.DodecahedronGeometry(1,0);
  for(let i=0;i<22;i++){const angle=i/22*Math.PI*2,rock=new THREE.Mesh(rockGeo,stone);rock.position.set(Math.cos(angle)*6.2,.35,Math.sin(angle)*6.2);rock.scale.set(1.1,.65+(i%3)*.1,.9);rock.rotation.set(i*.13,angle,i*.09);rock.castShadow=true;rock.receiveShadow=true;root.add(rock);}
  const floor=new THREE.Mesh(new THREE.CircleGeometry(5.9,40),new THREE.MeshStandardMaterial({color:'#183948',roughness:1}));floor.rotation.x=-Math.PI/2;floor.position.y=-.2;root.add(floor);
  const waterMat=new THREE.MeshBasicMaterial({color:'#63c8e6',transparent:true,opacity:.7,depthWrite:false});
  const water=new THREE.Mesh(new THREE.CircleGeometry(5.8,40),waterMat);water.rotation.x=-Math.PI/2;water.position.y=.18;root.add(water);
  const rippleMat=new THREE.MeshBasicMaterial({color:'#b9efff',transparent:true,opacity:.3,depthWrite:false,side:THREE.DoubleSide});
  const ripple=new THREE.Mesh(new THREE.RingGeometry(2,2.06,40),rippleMat);ripple.rotation.x=-Math.PI/2;ripple.position.y=.2;root.add(ripple);
  const runeGroup=new THREE.Group();runeGroup.position.copy(root.position);scene.add(runeGroup);
  const runeMaterials:THREE.MeshBasicMaterial[]=[];
  ['ᚨ','ᛚ','ᛒ'].forEach((symbol,i)=>{const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const ctx=canvas.getContext('2d')!;ctx.font='bold 94px serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#ffffff';ctx.fillText(symbol,64,64);const material=new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(canvas),transparent:true,depthWrite:false,color:'#b24966',side:THREE.DoubleSide});runeMaterials.push(material);const rune=new THREE.Mesh(new THREE.PlaneGeometry(1.4,1.7),material);const angle=(i/3+.08)*Math.PI*2;rune.position.set(Math.cos(angle)*8.1,.35,Math.sin(angle)*8.1);rune.rotation.x=-Math.PI/2;runeGroup.add(rune);});
  let cluster:THREE.Group|undefined,wasRestored=restored,progress=restored?1:0;
  root.visible=restored;
  return {
    attachSeal(model:THREE.Group){cluster=model;cluster.visible=!wasRestored;},
    update(dt:number,time:number,complete:boolean,step:number){
      let changed=false;if(complete&&!wasRestored){wasRestored=true;root.visible=true;changed=true;}
      if(complete&&progress<1){progress=Math.min(1,progress+dt/2.6);if(progress===1)changed=true;}
      if(cluster){cluster.visible=progress<1;cluster.scale.setScalar(Math.max(.001,1-progress));}
      waterMat.opacity=progress*(.7+Math.sin(time*1.7)*.04);ripple.scale.setScalar(1+(time*.22%1)*1.6);rippleMat.opacity=progress*(.25*(1-time*.22%1));
      runeMaterials.forEach((m,i)=>m.color.set(complete||i<step?'#c4efff':'#b24966'));
      return changed;
    },
    blocked(from:{x:number;z:number},to:{x:number;z:number}){if(!wasRestored)return false;const a=Math.hypot(from.x-NIFL_SOURCE.x,from.z-NIFL_SOURCE.z),b=Math.hypot(to.x-NIFL_SOURCE.x,to.z-NIFL_SOURCE.z);return b<7.2&&!(a<7.2&&b>=a);},
    dispose(){alive=false;texture.dispose();}
  };
}
