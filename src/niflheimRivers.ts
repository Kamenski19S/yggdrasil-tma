import * as THREE from 'three';
import {NIFL_RIVERS,NIFL_RIVER_WIDTHS,NIFL_LIVING_RIVER,niflGroundY} from './niflheimMapData';

const hash=(n:number)=>{const v=Math.sin(n*127.1+19.7)*43758.5453;return v-Math.floor(v);};

export function createNiflRiverGeometry(points:{x:number;z:number}[],width:number){
  const vertices:number[]=[],uv:number[]=[],indices:number[]=[];
  let distance=0;
  for(let i=0;i<points.length;i++){
    const p=points[i],a=points[Math.max(0,i-1)],b=points[Math.min(points.length-1,i+1)];
    if(i)distance+=Math.hypot(p.x-a.x,p.z-a.z);
    const dx=b.x-a.x,dz=b.z-a.z,len=Math.max(.001,Math.hypot(dx,dz));
    const half=width*.5*(.92+.06*Math.sin(distance*.13)+.02*Math.sin(distance*.47));
    // Shared vertices leave no gaps or overlaps at bends; five lanes give the
    // surface enough detail for subtle ripples without adding many draw calls.
    for(let lane=0;lane<5;lane++){
      const u=lane/4,off=(u*2-1)*half,x=p.x-dz/len*off,z=p.z+dx/len*off;
      vertices.push(x,niflGroundY(x,z)+.16,z);uv.push(u,distance/8);
    }
    if(i<points.length-1)for(let lane=0;lane<4;lane++){
      const k=i*5+lane;indices.push(k,k+1,k+5,k+1,k+6,k+5);
    }
  }
  const geometry=new THREE.BufferGeometry();
  geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));
  geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geometry.setIndex(indices);
  geometry.computeVertexNormals();return geometry;
}

export function addNiflheimRivers(scene:THREE.Scene,base:string){
  const canvas=document.createElement('canvas');canvas.width=canvas.height=512;
  const ctx=canvas.getContext('2d')!;
  const gradient=ctx.createLinearGradient(0,0,512,512);
  gradient.addColorStop(0,'#b6dbe7');gradient.addColorStop(.45,'#598da8');gradient.addColorStop(1,'#a5ccda');
  ctx.fillStyle=gradient;ctx.fillRect(0,0,512,512);
  for(let i=0;i<70;i++){
    const x=hash(i*7)*512,y=hash(i*7+1)*512,r=8+hash(i*7+2)*48;
    const patch=ctx.createRadialGradient(x,y,0,x,y,r);
    patch.addColorStop(0,'rgba(238,248,250,.48)');patch.addColorStop(1,'rgba(238,248,250,0)');
    ctx.fillStyle=patch;ctx.fillRect(x-r,y-r,r*2,r*2);
  }
  // Thin branching fractures, with a pale rim and darker depth beneath the ice.
  for(let i=0;i<12;i++){
    let x=hash(i*11)*512,y=hash(i*11+1)*512;
    const path=new Path2D();path.moveTo(x,y);
    for(let j=0;j<6;j++){
      const nx=x+(hash(i*31+j*3)-.5)*100,ny=y+20+hash(i*31+j*3+1)*42;
      path.lineTo(nx,ny);
      if(j%2===0){path.moveTo(nx,ny);path.lineTo(nx+30*(hash(i+j)-.5),ny+18);path.moveTo(nx,ny);}
      x=nx;y=ny;
    }
    ctx.strokeStyle='rgba(225,246,251,.65)';ctx.lineWidth=2.2;ctx.stroke(path);
    ctx.strokeStyle='rgba(33,71,91,.48)';ctx.lineWidth=.65;ctx.stroke(path);
  }
  const frost=new THREE.CanvasTexture(canvas);frost.colorSpace=THREE.SRGBColorSpace;
  frost.wrapS=frost.wrapT=THREE.MirroredRepeatWrapping;
  const ice=new THREE.MeshStandardMaterial({map:frost,color:'#e1f4fa',roughness:.29,metalness:.08,side:THREE.DoubleSide});
  const water=new THREE.MeshStandardMaterial({color:'#6398ad',roughness:.28,metalness:.06,side:THREE.DoubleSide});
  const time={value:0};
  water.customProgramCacheKey=()=> 'nifl-living-river-v1';
  water.onBeforeCompile=shader=>{
    shader.uniforms.uRiverTime=time;
    shader.vertexShader='varying vec2 vRiverUV;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <uv_vertex>','#include <uv_vertex>\nvRiverUV=uv;');
    shader.fragmentShader='uniform float uRiverTime;\nvarying vec2 vRiverUV;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
      float bank=smoothstep(.28,.5,abs(vRiverUV.x-.5));
      float ripple=pow(.5+.5*sin(vRiverUV.y*31.0-uRiverTime*2.4+sin(vRiverUV.x*15.0)),12.0);
      diffuseColor.rgb*=mix(.78,1.18,bank);
      diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.73,.87,.9),ripple*.12);
    `);
  };
  let flowTexture:THREE.Texture|undefined,disposed=false;
  new THREE.TextureLoader().load(`${base}img/models/T_Mimir_Water.jpg`,texture=>{
    if(disposed){texture.dispose();return;}
    texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.MirroredRepeatWrapping;
    flowTexture=texture;water.map=texture;water.needsUpdate=true;
  });
  // Only the frozen river carries the infection; lake ice stays unchanged.
  const taintedIce=ice.clone();taintedIce.customProgramCacheKey=()=> 'nifl-under-ice-taint-v1';
  taintedIce.onBeforeCompile=shader=>{
    shader.vertexShader='varying vec3 vIcePosition;\n'+'varying vec2 vIceUV;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvIcePosition=position;vIceUV=uv;');
    shader.fragmentShader=`varying vec3 vIcePosition;
      varying vec2 vIceUV;
      float iceHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float iceNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(iceHash(i),iceHash(i+vec2(1.0,0.0)),f.x),mix(iceHash(i+vec2(0.0,1.0)),iceHash(i+vec2(1.0,1.0)),f.x),f.y);}
    `+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
      // Clean ice at the bridge; first visible threads near Frozen River (Z=48).
      float reveal=1.0-smoothstep(35.0,68.0,vIcePosition.z);
      float upstream=clamp((48.0-vIcePosition.z)/146.0,0.0,1.0);
      float bank=1.0-smoothstep(.34,.49,abs(vIceUV.x-.5));
      float depthNoise=iceNoise(vIcePosition.xz*.31)*.65+iceNoise(vIcePosition.xz*.73)*.35;
      float thread=.5+.16*sin(vIcePosition.z*.21)+.035*sin(vIcePosition.z*.79);
      float branch=.34+.14*sin(vIcePosition.z*.13+1.7);
      float veins=(1.0-smoothstep(.008,.035,abs(vIceUV.x-thread)))
        +(1.0-smoothstep(.006,.022,abs(vIceUV.x-branch)))*.65;
      float stains=smoothstep(.64-upstream*.2,.82-upstream*.2,depthNoise);
      float clot=exp(-pow((vIcePosition.z-32.0)/5.0,2.0))*smoothstep(.4,.7,depthNoise);
      float taint=reveal*bank*clamp(veins*(.33+upstream*.24)+stains*(.16+upstream*.5)+clot*.48,0.0,.78);
      // A blue veil and the existing pale fractures keep the dark matter below ice.
      vec3 underIce=mix(vec3(.035,.065,.085),vec3(.13,.23,.28),depthNoise*.3);
      diffuseColor.rgb=mix(diffuseColor.rgb,underIce,taint);
    `);
  };
  let living:THREE.Mesh<THREE.BufferGeometry,THREE.MeshStandardMaterial>|undefined;
  NIFL_RIVERS.forEach((points,index)=>{
    const mesh=new THREE.Mesh(createNiflRiverGeometry(points,NIFL_RIVER_WIDTHS[index]),index===NIFL_LIVING_RIVER?water:taintedIce);
    mesh.name=index===NIFL_LIVING_RIVER?'Living eastern river':'Frozen river';mesh.receiveShadow=true;scene.add(mesh);
    if(index===NIFL_LIVING_RIVER)living=mesh;
  });
  const baseY=living?Float32Array.from(living.geometry.getAttribute('position').array).filter((_,i)=>i%3===1):new Float32Array();
  return {ice,water,update(seconds:number){
    time.value=seconds;if(flowTexture)flowTexture.offset.y=-seconds*.035;
    if(living){
      const p=living.geometry.getAttribute('position'),uv=living.geometry.getAttribute('uv');
      for(let i=0;i<p.count;i++)p.setY(i,baseY[i]+Math.sin(uv.getY(i)*5-seconds*1.8+uv.getX(i)*3)*.018*Math.sin(uv.getX(i)*Math.PI));
      p.needsUpdate=true;
    }
  },dispose(){disposed=true;}};
}
