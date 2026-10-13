import * as THREE from 'three';
import {BASE} from './core';

/** Reusable arcs and particle bursts; no lights or shadows and fixed pool sizes. */
export function createCombatEffects(scene:THREE.Scene,hero:THREE.Group){
  let alive=true,slashAt=-Infinity;
  const loader=new THREE.TextureLoader();
  const textures=['hit.webp','spark.webp'].map(file=>loader.load(`${BASE}img/vfx/${file}`,t=>{t.colorSpace=THREE.SRGBColorSpace;if(!alive)t.dispose();}));
  const arcMat=new THREE.MeshBasicMaterial({color:0xffd24d,transparent:true,opacity:0,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending});
  const coreMat=arcMat.clone();coreMat.color.setHex(0xfff4ce);
  const arc=new THREE.Mesh(new THREE.RingGeometry(1.65,2.1,32,1,-Math.PI*.8,Math.PI*1.2),arcMat);
  const core=new THREE.Mesh(new THREE.RingGeometry(1.9,2.02,32,1,-Math.PI*.8,Math.PI*1.2),coreMat);
  core.position.z=.015;arc.add(core);
  arc.position.set(0,2.6,1.9);arc.rotation.set(-.5,0,-.45);arc.visible=false;hero.add(arc);
  const particleCount=18;
  const bursts=Array.from({length:6},()=>{
    const root=new THREE.Group();root.visible=false;scene.add(root);
    const flashMat=new THREE.SpriteMaterial({map:textures[0],color:0xfff1b4,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending});
    const flash=new THREE.Sprite(flashMat);root.add(flash);
    const positions=new Float32Array(particleCount*3),velocity=new Float32Array(particleCount*3);
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(positions,3));
    const mat=new THREE.PointsMaterial({map:textures[1],color:0xffd24d,size:.32,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending});
    const sparks=new THREE.Points(geo,mat);sparks.frustumCulled=false;root.add(sparks);
    return {root,flash,flashMat,geo,mat,positions,velocity,at:-Infinity};
  });
  const redArcGeometry=new THREE.RingGeometry(1.4,1.72,24,1,-Math.PI*.8,Math.PI*1.2);
  const enemyArcs=Array.from({length:4},()=>{
    const root=new THREE.Group();root.visible=false;scene.add(root);
    const mat=arcMat.clone();mat.color.setHex(0xff3823);
    const mesh=new THREE.Mesh(redArcGeometry,mat);mesh.position.z=1.7;mesh.rotation.y=Math.PI/2;root.add(mesh);
    return {root,mesh,mat,at:-Infinity};
  });
  const point=new THREE.Vector3();let slot=0,enemySlot=0;
  const burst=(position:THREE.Vector3,color:'gold'|'blue'|'red'='gold',delay=0)=>{
    const b=bursts[slot++%bursts.length];b.at=performance.now()+delay;b.root.position.copy(position);b.root.visible=false;
    b.flashMat.color.setHex(color==='red'?0xff7050:color==='blue'?0x9be7ff:0xfff1b4);
    b.mat.color.setHex(color==='red'?0xff3823:color==='blue'?0x72d7ff:0xffd24d);
    for(let i=0;i<b.positions.length;i++){b.positions[i]=0;b.velocity[i]=(Math.random()-.5)*5.2;}
    b.geo.attributes.position.needsUpdate=true;
  };
  return {
    slash(){slashAt=performance.now();},
    hit(target:THREE.Object3D,height=1.35,delay=0){target.getWorldPosition(point);point.y+=height;burst(point,'gold',delay);},
    enemyHit(target:THREE.Object3D){target.getWorldPosition(point);point.y+=1.8;burst(point,'red');},
    enemySlash(attacker:THREE.Object3D,height:number,delay=180){
      const a=enemyArcs[enemySlot++%enemyArcs.length];a.at=performance.now()+delay;
      attacker.getWorldPosition(a.root.position);attacker.getWorldQuaternion(a.root.quaternion);
      a.root.position.y+=height*.55;a.root.visible=false;
      point.set(0,0,3.1).applyQuaternion(a.root.quaternion).add(a.root.position);
      burst(point,'red',delay+110);
    },
    block(){hero.updateWorldMatrix(true,false);point.set(-.45,1.45,.8);hero.localToWorld(point);burst(point,'blue');},
    update(now:number){
      const age=(now-slashAt-180)/1000;
      arc.visible=age>=0&&age<.36;
      if(arc.visible){const t=age/.36;arcMat.opacity=Math.sin(t*Math.PI)*.95;coreMat.opacity=Math.sin(t*Math.PI);arc.rotation.z=-.8+t*1.3;}
      for(const a of enemyArcs){
        const age=(now-a.at)/1000;a.root.visible=age>=0&&age<.32;
        if(a.root.visible){const t=age/.32;a.mat.opacity=Math.sin(t*Math.PI)*.95;a.mesh.rotation.x=.9-t*2.1;}
      }
      for(const b of bursts){
        const age=(now-b.at)/1000;b.root.visible=age>=0&&age<.46;if(!b.root.visible)continue;
        const t=age/.46;b.flashMat.opacity=(1-t)*(1-t);b.flash.scale.setScalar(.95+t*1.3);b.mat.opacity=1-t;
        for(let i=0;i<b.positions.length;i++)b.positions[i]=b.velocity[i]*age;
        b.geo.attributes.position.needsUpdate=true;
      }
    },
    dispose(){alive=false;hero.remove(arc);arc.geometry.dispose();core.geometry.dispose();arcMat.dispose();coreMat.dispose();for(const a of enemyArcs){scene.remove(a.root);a.mat.dispose();}redArcGeometry.dispose();for(const b of bursts){scene.remove(b.root);b.geo.dispose();b.mat.dispose();b.flashMat.dispose();}textures.forEach(t=>t.dispose());}
  };
}
