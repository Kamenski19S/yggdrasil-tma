import * as THREE from 'three';
import {BASE} from './core';

/** Two particle draws reused for each breath; flame follows the actual mouth bone. */
export function createDragonFire(scene:THREE.Scene){
 const count=40,positions=new Float32Array(count*3),colors=new Float32Array(count*3);
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
 for(let i=0;i<count;i++){const c=new THREE.Color().setHSL(.045+.055*(i/count),1,.55);c.toArray(colors,i*3);}
 geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
 let disposed=false;
 const texture=new THREE.TextureLoader().load(`${BASE}img/vfx/hit.webp`,t=>{if(disposed)t.dispose();});
 const material=new THREE.PointsMaterial({map:texture,color:'#ffad42',vertexColors:true,size:1.55,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending});
 const coreMaterial=new THREE.PointsMaterial({map:texture,color:'#fff1a1',size:.65,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending});
 const root=new THREE.Group(),flames=new THREE.Points(geometry,material),core=new THREE.Points(geometry,coreMaterial);flames.frustumCulled=core.frustumCulled=false;root.add(flames,core);root.visible=false;scene.add(root);
 const direction=new THREE.Vector3(),targetPoint=new THREE.Vector3();let mouth:THREE.Object3D|undefined,started=-Infinity,length=12;
 return {
  start(source:THREE.Object3D,target:THREE.Object3D,now=performance.now()){
   mouth=source;source.getWorldPosition(root.position);target.getWorldPosition(targetPoint);targetPoint.y+=3;
   direction.subVectors(targetPoint,root.position);length=THREE.MathUtils.clamp(direction.length(),3,20);direction.normalize();started=now;
  },
  update(now:number){
   const age=(now-started)/1000;root.visible=age>=0&&age<1.05;if(!root.visible||!mouth)return;
   mouth.getWorldPosition(root.position);const envelope=Math.min(1,age/.13)*Math.min(1,(1.05-age)/.22);
   material.opacity=.88*envelope;coreMaterial.opacity=.8*envelope;
   for(let i=0;i<count;i++){
    const phase=(age*1.7+i/count)%1,travel=phase*length*Math.min(1,age*4),spread=.08+phase*.75;
    const angle=i*2.399+age*8;
    positions[i*3]=direction.x*travel+Math.cos(angle)*spread;
    positions[i*3+1]=direction.y*travel+Math.sin(angle)*spread+phase*.35;
    positions[i*3+2]=direction.z*travel+Math.sin(angle*1.3)*spread*.55;
   }
   geometry.attributes.position.needsUpdate=true;
  },
  stop(){started=-Infinity;root.visible=false;},
  dispose(){disposed=true;scene.remove(root);geometry.dispose();material.dispose();coreMaterial.dispose();texture.dispose();}
 };
}
