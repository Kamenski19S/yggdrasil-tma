import * as THREE from 'three';
import {BASE} from './core';

/** Two reusable bursts, ten particles each; no lights, shadows or per-frame allocations. */
export function createCombatEffects(scene:THREE.Scene,hero:THREE.Group){
  let alive=true,slashAt=-Infinity;
  const loader=new THREE.TextureLoader();
  const textures=['hit.webp','spark.webp'].map(file=>loader.load(`${BASE}img/vfx/${file}`,t=>{t.colorSpace=THREE.SRGBColorSpace;if(!alive)t.dispose();}));
  const arcMat=new THREE.MeshBasicMaterial({color:0xffd36a,transparent:true,opacity:0,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending});
  const arc=new THREE.Mesh(new THREE.RingGeometry(1.05,1.16,24,1,-Math.PI*.8,Math.PI*1.2),arcMat);
  arc.position.set(0,1.5,1.15);arc.rotation.set(-.5,0,-.45);arc.visible=false;hero.add(arc);
  const bursts=Array.from({length:2},()=>{
    const root=new THREE.Group();root.visible=false;scene.add(root);
    const flashMat=new THREE.SpriteMaterial({map:textures[0],color:0xffe7a3,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending});
    const flash=new THREE.Sprite(flashMat);root.add(flash);
    const positions=new Float32Array(30),velocity=new Float32Array(30);
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(positions,3));
    const mat=new THREE.PointsMaterial({map:textures[1],color:0xffd36a,size:.18,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending});
    const sparks=new THREE.Points(geo,mat);sparks.frustumCulled=false;root.add(sparks);
    return {root,flash,flashMat,geo,mat,positions,velocity,at:-Infinity};
  });
  const point=new THREE.Vector3();let slot=0;
  const burst=(position:THREE.Vector3,blue=false)=>{
    const b=bursts[slot++%bursts.length];b.at=performance.now();b.root.position.copy(position);b.root.visible=true;
    b.flashMat.color.setHex(blue?0x9be7ff:0xffe7a3);b.mat.color.setHex(blue?0x72d7ff:0xffd36a);
    for(let i=0;i<30;i++){b.positions[i]=0;b.velocity[i]=(Math.random()-.5)*2.6;}
    b.geo.attributes.position.needsUpdate=true;
  };
  return {
    slash(){slashAt=performance.now();},
    hit(target:THREE.Object3D){target.getWorldPosition(point);point.y+=1.35;burst(point);},
    block(){hero.updateWorldMatrix(true,false);point.set(-.45,1.45,.8);hero.localToWorld(point);burst(point,true);},
    update(now:number){
      const age=(now-slashAt-180)/1000;
      arc.visible=age>=0&&age<.28;
      if(arc.visible){const t=age/.28;arcMat.opacity=Math.sin(t*Math.PI)*.8;arc.rotation.z=-.8+t*1.3;}
      for(const b of bursts){
        const age=(now-b.at)/1000;if(age>=.38){b.root.visible=false;continue;}
        const t=age/.38;b.flashMat.opacity=(1-t)*(1-t)*.85;b.flash.scale.setScalar(.45+t*.6);b.mat.opacity=1-t;
        for(let i=0;i<30;i++)b.positions[i]=b.velocity[i]*age;
        b.geo.attributes.position.needsUpdate=true;
      }
    },
    dispose(){alive=false;hero.remove(arc);arc.geometry.dispose();arcMat.dispose();for(const b of bursts){scene.remove(b.root);b.geo.dispose();b.mat.dispose();b.flashMat.dispose();}textures.forEach(t=>t.dispose());}
  };
}
