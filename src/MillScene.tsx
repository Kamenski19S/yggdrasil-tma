import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { createBuildingTextures, textureBuildingPart, applyBuildingDetails } from './buildingTextures';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { clone as cloneSkinned } from "three/examples/jsm/utils/SkeletonUtils.js";
import { BASE, cachedGlbBuffer } from './core';
import {millControlActive,tickMillGiftClock} from './millRewards';



export type MillFind='drops'|'potion'|'rune';
type RiverParcel={kind:MillFind;start:number;end:number};
export function MillScene({stored,balance,onProduce,onCollect,onFind,onBack}:{stored:number;balance:number;onProduce:(amount:number)=>void;onCollect:()=>void;onFind:(kind:MillFind)=>string;onBack:()=>void}){
  const mount=useRef<HTMLDivElement>(null);
  const runningRef=useRef(false);
  const wheelRef=useRef<THREE.Group|null>(null);
  const gateRef=useRef<THREE.Mesh|null>(null);
  const flowRef=useRef(2);
  const pressureRef=useRef(2);
  const comboRef=useRef(0);
  const lastAdjustedAtRef=useRef<number|null>(null);
  const [recentControl,setRecentControl]=useState(false);
  const [running,setRunning]=useState(false);
  const [loaded,setLoaded]=useState(false);
  const [loadFailed,setLoadFailed]=useState(false);
  const [collected,setCollected]=useState(0);
  const [flow,setFlow]=useState(2);
  const [pressure,setPressure]=useState(2);
  const [combo,setCombo]=useState(0);
  const [liveRate,setLiveRate]=useState(0);

  const [hint,setHint]=useState('');
  const [parcel,setParcel]=useState<RiverParcel|null>(null);
  const parcelRef=useRef<RiverParcel|null>(null);
  const warningRef=useRef(0);
  const netUntilRef=useRef(0);
  const hintTimerRef=useRef<number>(0);
  const showHint=(message:string)=>{
    window.clearTimeout(hintTimerRef.current);setHint(message);
    hintTimerRef.current=window.setTimeout(()=>setHint(''),2400);
  };
  useEffect(()=>()=>window.clearTimeout(hintTimerRef.current),[]);
  const adjustFlow=(delta:number)=>{
    const next=Math.max(1,Math.min(3,flowRef.current+delta));
    if(next===flowRef.current)return;
    flowRef.current=next;setFlow(next);
    if(runningRef.current){lastAdjustedAtRef.current=performance.now();setRecentControl(true);}
  };
  const catchParcel=()=>{
    const found=parcelRef.current;
    const now=performance.now();
    if(!millControlActive(runningRef.current,now,lastAdjustedAtRef.current)||!found||now>=found.end)return;
    parcelRef.current=null;setParcel(null);netUntilRef.current=performance.now()+1100;
    showHint(onFind(found.kind));
    try{navigator.vibrate?.(20);}catch{}
  };

  useEffect(()=>{runningRef.current=running;},[running]);
  useEffect(()=>{flowRef.current=flow;},[flow]);
  useEffect(()=>{pressureRef.current=pressure;},[pressure]);

  useEffect(()=>{
    runningRef.current=running;
    if(!running){setLiveRate(0);return;}
    const id=window.setInterval(()=>{
      if(!runningRef.current)return;
      const diff=Math.abs(flowRef.current-pressureRef.current);
      let rate=1;
      if(diff===0){
        const next=Math.min(99,comboRef.current+1);
        comboRef.current=next;setCombo(next);
        rate=4+Math.min(2,Math.floor(next/5));
      }else{
        comboRef.current=0;setCombo(0);
        rate=diff===1?2:1;
      }
      setLiveRate(rate);
      onProduce(rate);
    },1000);
    return()=>{runningRef.current=false;window.clearInterval(id);};
  },[running,onProduce]);

  useEffect(()=>{
    if(!running){warningRef.current=0;parcelRef.current=null;setParcel(null);lastAdjustedAtRef.current=null;setRecentControl(false);return;}
    let alive=true,warningTimer=0,changeTimer=0;
    const schedule=()=>{
      warningTimer=window.setTimeout(()=>{
        if(!alive)return;
        const current=pressureRef.current;
        let next=1+Math.floor(Math.random()*3);if(next===current)next=current%3+1;
        warningRef.current=next>current?1:-1;
        showHint(next>current?'Поток усиливается':'Поток слабеет');
        changeTimer=window.setTimeout(()=>{
          if(!alive)return;
          pressureRef.current=next;setPressure(next);warningRef.current=0;
          comboRef.current=0;setCombo(0);schedule();
        },2000);
      },5500);
    };
    schedule();
    let giftWaitMs=35000+Math.random()*20000,lastGiftTick=performance.now();
    const parcelTimer=window.setInterval(()=>{
      const now=performance.now();
      const active=millControlActive(runningRef.current,now,lastAdjustedAtRef.current);
      setRecentControl(active);
      if(parcelRef.current&&(!active||now>=parcelRef.current.end)){parcelRef.current=null;setParcel(null);}
      const tick=tickMillGiftClock(giftWaitMs,now-lastGiftTick,active,flowRef.current===pressureRef.current);
      lastGiftTick=now;giftWaitMs=tick.remainingMs;
      if(!tick.ready)return;
      giftWaitMs=70000+Math.random()*40000;
      const roll=Math.random(),kind:MillFind=roll<.65?'drops':roll<.9?'potion':'rune';
      const found={kind,start:now,end:now+9000};parcelRef.current=found;setParcel(found);
      showHint('Находка в потоке');
    },250);
    return()=>{alive=false;window.clearTimeout(warningTimer);window.clearTimeout(changeTimer);window.clearInterval(parcelTimer);warningRef.current=0;parcelRef.current=null;};
  },[running]);

  useEffect(()=>{
    const host=mount.current;
    if(!host)return;
    const scene=new THREE.Scene();
    scene.background=new THREE.Color(0xb9d5eb);
    scene.fog=new THREE.Fog(0xb9d5eb,32,80);

    const camera=new THREE.PerspectiveCamera(48,Math.max(1,host.clientWidth)/Math.max(1,host.clientHeight),.1,100);
    camera.position.set(11,8.2,16);
    camera.lookAt(0,2.6,-1.5);

    const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:"high-performance"});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7));
    renderer.setSize(Math.max(1,host.clientWidth),Math.max(1,host.clientHeight));
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.shadowMap.enabled=true;
    renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    host.appendChild(renderer.domElement);

    let alive=true;
    const loader=new GLTFLoader();
    const millFbxLoader=new FBXLoader();
    const textureLoader=new THREE.TextureLoader();
    const millTextures:THREE.Texture[]=[];
    const buildingTextures=createBuildingTextures(Math.min(4,renderer.capabilities.getMaxAnisotropy()));
    const loadMillTexture=(name:string,repeatX=1,repeatY=1,srgb=true)=>{
      const texture=textureLoader.load(`${BASE}img/models/${name}`,undefined,undefined,error=>console.warn(`[MILL TEXTURE] ${name} unavailable`,error));
      if(srgb)texture.colorSpace=THREE.SRGBColorSpace;
      texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
      texture.repeat.set(repeatX,repeatY);
      texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
      millTextures.push(texture);
      return texture;
    };
    const loadGreenMillTexture=(name:string)=>{
      const texture=textureLoader.load(`${BASE}img/models/${name}`,t=>{
        try{
          const image:any=t.image,canvas=document.createElement('canvas');
          canvas.width=Math.max(1,image?.width||image?.naturalWidth||1);canvas.height=Math.max(1,image?.height||image?.naturalHeight||1);
          const ctx=canvas.getContext('2d',{willReadFrequently:true});
          if(ctx){
            ctx.drawImage(image,0,0,canvas.width,canvas.height);
            const pixels=ctx.getImageData(0,0,canvas.width,canvas.height),d=pixels.data;
            for(let i=0;i<d.length;i+=4){if(d[i+3]<4)continue;const lum=.2126*d[i]+.7152*d[i+1]+.0722*d[i+2];d[i]=Math.min(255,28+lum*.24);d[i+1]=Math.min(255,78+lum*.72);d[i+2]=Math.min(255,24+lum*.20);}
            ctx.putImageData(pixels,0,0);(t as unknown as {image:HTMLCanvasElement}).image=canvas;
          }
        }catch(error){console.warn('[MILL TEXTURE] maple green recolour failed',error);}
        t.needsUpdate=true;
      },undefined,error=>console.warn(`[MILL TEXTURE] ${name} unavailable`,error));
      texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
      millTextures.push(texture);return texture;
    };
    const grassTexture=loadMillTexture('T_Grass_Green.jpg',4,12);
    const rightGrassTexture=loadMillTexture('T_Grass_Green.jpg',4*59.4/15.4,12*100/30);
    grassTexture.repeat.set(4*53.4/9.4,12*100/30);
    const pathTexture=loadMillTexture('T_Path_GrayGravel.jpg',2.2,6);
    const stoneBankTexture=loadMillTexture('Rock_5_Diffuse_Lite.webp',1.6,8);
    const stoneRockTexture=stoneBankTexture.clone();stoneRockTexture.repeat.set(1,1);millTextures.push(stoneRockTexture);
    const waterTexture=loadMillTexture('T_Mimir_Water.jpg',1.25,5.5);
    const houseWallTexture=loadMillTexture('T_RedBrick_BaseColor1.webp',2.1,2);
    const houseRoofTexture=loadMillTexture('T_RoundTilesBaseColorr1.webp',2.4,2.2);
    const birchBarkTexture=loadMillTexture('BirchTree_Bark_Lite.webp');
    const birchLeavesTexture=loadMillTexture('BirchTree_Leaves_Lite.webp');
    const mapleBarkTexture=loadMillTexture('MapleTree_Bark_Lite.webp');
    const mapleLeavesTexture=loadGreenMillTexture('MapleTree_Leaves_Lite.webp');

    scene.add(new THREE.HemisphereLight(0xe2efff,0x5b4a36,1.1));
    const sun=new THREE.DirectionalLight(0xffefd0,1.5);
    sun.position.set(-8,14,9);sun.castShadow=true;
    sun.shadow.mapSize.set(1024,1024);scene.add(sun);

    // The mill channel is a real recessed trench rather than water painted over grass.
    // Existing Midgard textures make this scene part of the same world instead of a dark prototype.
    const grassMat=new THREE.MeshStandardMaterial({map:grassTexture,color:0xffffff,roughness:1});
    const leftGround=new THREE.Mesh(new THREE.PlaneGeometry(53.4,100),grassMat);
    leftGround.rotation.x=-Math.PI/2;leftGround.position.set(-33.3,0,0);leftGround.receiveShadow=true;scene.add(leftGround);
    const rightGround=new THREE.Mesh(new THREE.PlaneGeometry(59.4,100),new THREE.MeshStandardMaterial({map:rightGrassTexture,color:0xffffff,roughness:1}));
    rightGround.rotation.x=-Math.PI/2;rightGround.position.set(30.3,0,0);rightGround.receiveShadow=true;scene.add(rightGround);

    // Close the land beyond both ends of the finite channel.
    for(const [z,length] of [[-31.75,36.5],[30.75,38.5]]){
      const endGrass=loadMillTexture('T_Grass_Green.jpg',3,Math.max(1,length*.4));
      const ground=new THREE.Mesh(new THREE.PlaneGeometry(7.2,length),new THREE.MeshStandardMaterial({map:endGrass,color:0xffffff,roughness:1}));
      ground.rotation.x=-Math.PI/2;ground.position.set(-3,0,z);ground.receiveShadow=true;scene.add(ground);
    }

    const path=new THREE.Mesh(new THREE.PlaneGeometry(6.2,16),new THREE.MeshStandardMaterial({map:pathTexture,color:0xffffff,roughness:1}));
    path.rotation.x=-Math.PI/2;path.position.set(7,.025,4);path.receiveShadow=true;scene.add(path);

    const channelStoneMat=new THREE.MeshStandardMaterial({map:stoneBankTexture,color:0xe2e0d9,roughness:1});
    const channelFloor=new THREE.Mesh(new THREE.BoxGeometry(6,.24,25),channelStoneMat);
    channelFloor.position.set(-3,-1.48,-1);channelFloor.receiveShadow=true;scene.add(channelFloor);
    const waterMat=new THREE.MeshStandardMaterial({map:waterTexture,color:0xc9f5ff,roughness:.24,metalness:.03,transparent:true,opacity:.88,emissive:0x0b3542,emissiveIntensity:.28});
    const water=new THREE.Mesh(new THREE.PlaneGeometry(5.4,24.6),waterMat);
    water.rotation.x=-Math.PI/2;water.position.set(-3,.12,-1);scene.add(water);
    for(const x of [-6.25,.25]){
      const bank=new THREE.Mesh(new THREE.BoxGeometry(.7,1.75,25),new THREE.MeshStandardMaterial({map:stoneBankTexture,color:0xf0eee8,roughness:1}));
      bank.position.set(x,-.63,-1);bank.castShadow=bank.receiveShadow=true;scene.add(bank);
    }

    const flowMarks:THREE.Mesh[]=[];
    const markMat=new THREE.MeshBasicMaterial({color:0x9de8f1,transparent:true,opacity:.36});
    for(let i=0;i<11;i++){
      const mark=new THREE.Mesh(new THREE.PlaneGeometry(2.8,.08),markMat);
      mark.rotation.x=-Math.PI/2;
      mark.position.set(-3,.135,-12+i*2.3);
      scene.add(mark);flowMarks.push(mark);
    }

    // Small floating parcel and a temporary collection net by the near bank.
    const parcelGroup=new THREE.Group();
    const parcelBody=new THREE.Mesh(new THREE.BoxGeometry(.65,.42,.55),new THREE.MeshStandardMaterial({color:0xd4ac62,roughness:.8}));
    parcelGroup.add(parcelBody);
    const parcelRibbon=new THREE.Mesh(new THREE.BoxGeometry(.12,.45,.58),new THREE.MeshStandardMaterial({color:0xffdf85,emissive:0x8f5d18,emissiveIntensity:.5}));
    parcelGroup.add(parcelRibbon);
    const halo=new THREE.Mesh(new THREE.TorusGeometry(.48,.035,6,24),new THREE.MeshBasicMaterial({color:0xffd36a}));
    halo.rotation.x=Math.PI/2;halo.position.y=-.17;parcelGroup.add(halo);parcelGroup.visible=false;scene.add(parcelGroup);
    const net=new THREE.Mesh(new THREE.SphereGeometry(.9,8,5,0,Math.PI*2,0,Math.PI/2),new THREE.MeshStandardMaterial({color:0xe2c985,wireframe:true,side:THREE.DoubleSide}));
    net.position.set(-1.3,.22,5.8);net.visible=false;scene.add(net);

    // Working sluice upstream: the player raises or lowers this gate to match river pressure.
    const gateWood=new THREE.MeshStandardMaterial({map:buildingTextures.wood,color:0xffffff,roughness:.92});
    const gateMetal=new THREE.MeshStandardMaterial({color:0x6c5c42,roughness:.72,metalness:.22});
    for(const x of [-5.75,-.25]){
      const post=new THREE.Mesh(new THREE.BoxGeometry(.32,3.3,.42),gateWood);
      post.position.set(x,1.05,-9.2);post.castShadow=post.receiveShadow=true;scene.add(post);
    }
    const crossbar=new THREE.Mesh(new THREE.BoxGeometry(5.9,.34,.42),gateWood);
    crossbar.position.set(-3,2.55,-9.2);crossbar.castShadow=true;scene.add(crossbar);
    const gate=new THREE.Mesh(new THREE.BoxGeometry(5.05,1.35,.28),new THREE.MeshStandardMaterial({color:0x604022,roughness:.9}));
    textureBuildingPart(gate,buildingTextures.wood,true);
    gate.position.set(-3,.82,-9.2);gate.castShadow=gate.receiveShadow=true;scene.add(gate);gateRef.current=gate;
    const gateBand1=new THREE.Mesh(new THREE.BoxGeometry(5.12,.11,.34),gateMetal);gateBand1.position.set(-3,.48,-9.2);scene.add(gateBand1);
    const gateBand2=new THREE.Mesh(new THREE.BoxGeometry(5.12,.11,.34),gateMetal);gateBand2.position.set(-3,1.16,-9.2);scene.add(gateBand2);

    // Textured fallback house remains until the existing Midgard house GLB is ready.
    const wallMat=new THREE.MeshStandardMaterial({map:houseWallTexture,color:0xffffff,roughness:.92});
    const hut=new THREE.Mesh(new THREE.BoxGeometry(7,4.7,5.8),wallMat);
    hut.position.set(3.4,2.35,-3.3);hut.castShadow=hut.receiveShadow=true;scene.add(hut);
    const roof=new THREE.Mesh(new THREE.ConeGeometry(5.2,2.5,4),new THREE.MeshStandardMaterial({map:houseRoofTexture,color:0xffffff,roughness:.95}));
    roof.position.set(3.4,5.8,-3.3);roof.rotation.y=Math.PI/4;roof.castShadow=true;scene.add(roof);
    const door=new THREE.Mesh(new THREE.BoxGeometry(1.5,2.8,.12),new THREE.MeshStandardMaterial({color:0x382417,roughness:.9}));
    textureBuildingPart(door,buildingTextures.wood,true);
    door.position.set(4.5,1.45,-.35);door.castShadow=true;scene.add(door);
    const windowGlow=new THREE.MeshStandardMaterial({color:0xffd88c,emissive:0xb46c22,emissiveIntensity:1.1,roughness:.42});
    const millWindow=new THREE.Mesh(new THREE.BoxGeometry(1.18,1.02,.12),windowGlow);
    millWindow.position.set(2.25,2.65,-.34);scene.add(millWindow);

    const fitAndPlace=(model:THREE.Object3D,target:{x:number;y:number;z:number},max:{x:number;y:number;z:number})=>{
      model.position.set(0,0,0);model.rotation.set(0,0,0);model.scale.set(1,1,1);model.updateMatrixWorld(true);
      const box=new THREE.Box3().setFromObject(model),size=new THREE.Vector3();box.getSize(size);
      const scale=Math.min(max.x/Math.max(.001,size.x),max.y/Math.max(.001,size.y),max.z/Math.max(.001,size.z));
      model.scale.setScalar(scale);model.updateMatrixWorld(true);
      const fitted=new THREE.Box3().setFromObject(model),center=fitted.getCenter(new THREE.Vector3());
      model.position.set(target.x-center.x,target.y-fitted.min.y,target.z-center.z);model.updateMatrixWorld(true);
    };
    const applyMillHouseTextures=(root:THREE.Object3D)=>{
      root.updateMatrixWorld(true);
      root.traverse((o:any)=>{
        if(!o.isMesh)return;
        o.castShadow=o.receiveShadow=true;
        const adapt=(source:any)=>{
          const material=source?.clone?source.clone():source;if(!material)return material;
          const tag=`${o.name||''} ${material.name||''}`.toLowerCase();
          const detail=/window|door|frame|beam|post|rail|step|porch|platform|ridge|batten|glass/.test(tag);
          const roof=!detail&&/roof|thatch|aframe|tile|canopy/.test(tag);
          const wall=!detail&&/wall|gable|main|cabin|stonebase|upper|house|side|back|front|chimney/.test(tag);
          if(roof||wall){
            material.map=roof?houseRoofTexture:houseWallTexture;
            material.color?.setHex?.(0xffffff);material.vertexColors=false;
            material.emissive?.setHex?.(0x000000);material.emissiveMap=null;
            material.roughness=.94;material.metalness=0;
          }
          material.needsUpdate=true;return material;
        };
        const materials=Array.isArray(o.material)?o.material:[o.material];
        const changed=materials.map(adapt);
        if(changed.some((m:any)=>m?.map===houseWallTexture||m?.map===houseRoofTexture)){
          const geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();
          const pos=geo.getAttribute('position'),uv=new Float32Array(pos.count*2);
          const p=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()];
          const normal=new THREE.Vector3(),edgeA=new THREE.Vector3(),edgeB=new THREE.Vector3();
          for(let i=0;i+2<pos.count;i+=3){
            for(let k=0;k<3;k++)p[k].fromBufferAttribute(pos,i+k).applyMatrix4(o.matrixWorld);
            normal.crossVectors(edgeA.subVectors(p[1],p[0]),edgeB.subVectors(p[2],p[0])).normalize();
            const top=Math.abs(normal.y)>.5,side=Math.abs(normal.x)>Math.abs(normal.z);
            for(let k=0;k<3;k++){const v=p[k];uv[(i+k)*2]=(top?v.z:side?v.z:v.x)/3.2;uv[(i+k)*2+1]=(top?v.x:v.y)/3.2;}
          }
          geo.setAttribute('uv',new THREE.BufferAttribute(uv,2));o.geometry=geo;
        }
        o.material=Array.isArray(o.material)?changed:changed[0];
      });
    };
    const millHouseUrl=`${BASE}img/models/Midgard_Viking_House_V1_YUP.glb`;
    cachedGlbBuffer(millHouseUrl).then(buffer=>{
      if(!alive)return;
      const absolute=new URL(millHouseUrl,window.location.href).href,basePath=absolute.slice(0,absolute.lastIndexOf('/')+1);
      loader.parse(buffer,basePath,gltf=>{
        if(!alive)return;
        const model=gltf.scene;fitAndPlace(model,{x:3.4,y:0,z:-3.3},{x:7.6,y:6.7,z:6.2});applyMillHouseTextures(model);applyBuildingDetails(model,buildingTextures);
        scene.add(model);hut.visible=roof.visible=door.visible=millWindow.visible=false;
      },error=>console.warn('[MILL HOUSE] GLB parse failed; keeping textured fallback',error));
    }).catch(error=>console.warn('[MILL HOUSE] GLB unavailable; keeping textured fallback',error));

    const prepareMillTree=(root:THREE.Object3D,asset:string)=>{
      root.traverse((o:any)=>{
        if(!o.isMesh)return;o.castShadow=o.receiveShadow=true;
        const meshName=String(o.name||'').toLowerCase();
        const adapt=(source:any)=>{
          const m=source?.clone?source.clone():source;if(!m)return m;
          const tag=`${asset} ${meshName} ${String(m.name||'')}`.toLowerCase();
          const bark=/bark|trunk|stem|branch/.test(tag),leaves=/leaf|leaves|foliage|crown/.test(tag);
          if(/birch/i.test(asset)){if(bark)m.map=birchBarkTexture;else if(leaves)m.map=birchLeavesTexture;}
          else if(/maple/i.test(asset)){if(bark)m.map=mapleBarkTexture;else if(leaves)m.map=mapleLeavesTexture;}
          if(bark||leaves){m.color?.setHex?.(0xffffff);m.vertexColors=false;m.emissive?.setHex?.(0x000000);m.emissiveMap=null;}
          if(leaves)m.alphaMap=null;
          if(leaves){m.alphaTest=.28;m.transparent=false;m.depthWrite=true;m.side=THREE.DoubleSide;}
          if('roughness' in m)m.roughness=.94;if('metalness' in m)m.metalness=0;m.needsUpdate=true;return m;
        };
        o.material=Array.isArray(o.material)?o.material.map(adapt):adapt(o.material);
      });
      return root;
    };
    const placeMillTree=(source:THREE.Object3D,x:number,z:number,height:number,rotation:number)=>{
      const model=source.clone(true);
      if(z<-15)model.traverse((o:any)=>{if(o.isMesh)o.castShadow=false;});
      model.position.set(0,0,0);model.rotation.set(0,rotation,0);model.scale.set(1,1,1);model.updateMatrixWorld(true);
      const raw=new THREE.Box3().setFromObject(model),rawHeight=Math.max(.001,raw.max.y-raw.min.y);model.scale.setScalar(height/rawHeight);model.updateMatrixWorld(true);
      const fitted=new THREE.Box3().setFromObject(model);model.position.set(x,-fitted.min.y,z);model.updateMatrixWorld(true);scene.add(model);
    };
    const loadMillTree=(asset:string,placements:Array<[number,number,number,number]>)=>{
      const url=`${BASE}img/models/${asset}`;
      cachedGlbBuffer(url).then(buffer=>{
        if(!alive)return;
        const absolute=new URL(url,window.location.href).href,basePath=absolute.slice(0,absolute.lastIndexOf('/')+1);
        const source=prepareMillTree(millFbxLoader.parse(buffer,basePath),asset);
        placements.forEach(([x,z,h,r])=>placeMillTree(source,x,z,h,r));
      }).catch(error=>console.warn(`[MILL TREE] ${asset} unavailable`,error));
    };
    loadMillTree('BirchTree_1.fbx',[[-10.6,-8.7,7.2,.35],[10.5,-9.4,7.7,-.55],[-9,-17,6.6,.7],[-3,-23,5.8,-.3]]);
    loadMillTree('MapleTree_3.fbx',[[-10.8,5.3,6.8,-.15],[11.1,3.4,7.4,.5],[7,-18,6.4,.35],[14,-23,5.6,-.65]]);

    const stoneMat=new THREE.MeshStandardMaterial({map:stoneRockTexture,color:0xe8e5df,roughness:1});
    for(let i=0;i<18;i++){
      const r=.35+(i%4)*.12;
      const stone=new THREE.Mesh(new THREE.DodecahedronGeometry(r,0),stoneMat);
      const side=i%2?-1:1;
      stone.position.set(-3+side*(3.7+(i%3)*.45),r*.55,-11+(i*3.1)%23);
      stone.rotation.set(i*.21,i*.37,0);stone.castShadow=stone.receiveShadow=true;scene.add(stone);
    }

    const wheelPivot=new THREE.Group();
    // Water surface is y=.12. With a ~6-unit wheel, y=1.35 places about
    // the lower third below the water line instead of leaving it suspended.
    wheelPivot.position.set(-2.9,1.35,-3.2);
    scene.add(wheelPivot);wheelRef.current=wheelPivot;

    // Structural mill supports: a stone pier at the house/channel edge,
    // a timber shaft from the mill wall to the hub and triangular braces.
    const supportWood=new THREE.MeshStandardMaterial({color:0x4b2f1b,roughness:.9});
    const supportWoodDark=new THREE.MeshStandardMaterial({color:0x332015,roughness:.94});
    const supportStone=new THREE.MeshStandardMaterial({map:stoneRockTexture,color:0xe7e4dc,roughness:1});
    const addSupportBeam=(a:THREE.Vector3,b:THREE.Vector3,width=.32,depth=.32,material=supportWood)=>{
      const delta=new THREE.Vector3().subVectors(b,a);
      const beam=new THREE.Mesh(new THREE.BoxGeometry(width,delta.length(),depth),material);
      beam.position.copy(a).add(b).multiplyScalar(.5);
      beam.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.clone().normalize());
      beam.castShadow=beam.receiveShadow=true;scene.add(beam);return beam;
    };

    const pier=new THREE.Mesh(new THREE.BoxGeometry(1.15,1.85,2.6),supportStone);
    pier.position.set(-.18,-.05,-3.2);pier.castShadow=pier.receiveShadow=true;scene.add(pier);

    // Main heavy timber arm visually transfers the wheel load into the mill/dam.
    addSupportBeam(new THREE.Vector3(-2.72,1.35,-2.35),new THREE.Vector3(.05,1.35,-2.35),.38,.42,supportWoodDark);
    addSupportBeam(new THREE.Vector3(-2.58,1.35,-2.35),new THREE.Vector3(.02,3.42,-2.35),.34,.34,supportWood);
    addSupportBeam(new THREE.Vector3(-2.58,1.35,-2.35),new THREE.Vector3(.02,.38,-2.35),.34,.34,supportWood);

    // A second, slightly recessed brace makes the support read as a real frame.
    addSupportBeam(new THREE.Vector3(-2.64,1.35,-4.05),new THREE.Vector3(.02,1.35,-4.05),.3,.34,supportWoodDark);
    addSupportBeam(new THREE.Vector3(-2.5,1.35,-4.05),new THREE.Vector3(.02,3.2,-4.05),.27,.29,supportWood);

    const shaft=new THREE.Mesh(new THREE.CylinderGeometry(.22,.22,3.15,18),supportWoodDark);
    shaft.rotation.z=Math.PI/2;shaft.position.set(-1.42,1.35,-3.2);shaft.castShadow=true;scene.add(shaft);
    const bearing=new THREE.Mesh(new THREE.CylinderGeometry(.46,.46,.36,20),new THREE.MeshStandardMaterial({color:0x5f4424,roughness:.82,metalness:.06}));
    bearing.rotation.z=Math.PI/2;bearing.position.set(-2.74,1.35,-3.2);bearing.castShadow=true;scene.add(bearing);

    const wheelUrl=`${BASE}img/models/water_wheel.glb`;
    cachedGlbBuffer(wheelUrl).then(buffer=>{
      if(!alive)return;
      const absolute=new URL(wheelUrl,window.location.href).href;
      const basePath=absolute.slice(0,absolute.lastIndexOf("/")+1);
      loader.parse(buffer,basePath,gltf=>{
        if(!alive)return;
        const model=gltf.scene;
        model.traverse(o=>{
          const mesh=o as THREE.Mesh;
          if(mesh.isMesh){mesh.castShadow=true;mesh.receiveShadow=true;}
        });
        const box=new THREE.Box3().setFromObject(model);
        const size=new THREE.Vector3(),center=new THREE.Vector3();
        box.getSize(size);box.getCenter(center);
        model.position.sub(center);
        const maxDim=Math.max(size.x,size.y,size.z,1);
        model.scale.setScalar(6/maxDim);
        const thinAxis=size.x<=size.y&&size.x<=size.z?"x":size.y<=size.z?"y":"z";
        if(thinAxis==="x")model.rotation.y=Math.PI/2;
        else if(thinAxis==="y")model.rotation.x=Math.PI/2;
        wheelPivot.add(model);
        setLoaded(true);
      },()=>{if(alive){setLoadFailed(true);setLoaded(true);}});
    }).catch(()=>{if(alive){setLoadFailed(true);setLoaded(true);}});

    const clock=new THREE.Clock();
    let frame=0;
    const animate=()=>{
      frame=requestAnimationFrame(animate);
      const dt=Math.min(.05,clock.getDelta());
      const balanced=flowRef.current===pressureRef.current;
      const flowSpeed=(runningRef.current?(2.2+flowRef.current*1.35):.7)*(1+warningRef.current*.18);
      const now=performance.now(),found=parcelRef.current;
      parcelGroup.visible=!!found&&runningRef.current;
      if(found){
        const progress=THREE.MathUtils.clamp((now-found.start)/(found.end-found.start),0,1);
        parcelGroup.position.set(-2.2,.45+Math.sin(now*.005)*.07,-8+progress*16);
        parcelGroup.rotation.y=now*.0005;
        halo.material instanceof THREE.MeshBasicMaterial&&halo.material.color.setHex(found.kind==='rune'?0x9dcaff:found.kind==='potion'?0x9cf2c0:0xffd36a);
      }
      net.visible=now<netUntilRef.current;
      if(net.visible){parcelGroup.visible=true;parcelGroup.position.set(-1.3,.55,5.8);}
      if(wheelRef.current&&runningRef.current)wheelRef.current.rotation.z-=dt*(.68+flowRef.current*.23+(balanced ? .18 : 0));
      if(gateRef.current){
        const targetY=.28+(flowRef.current-1)*.55;
        gateRef.current.position.y+=(targetY-gateRef.current.position.y)*Math.min(1,dt*7);
      }
      for(const mark of flowMarks){
        mark.position.z+=dt*flowSpeed;
        if(mark.position.z>11)mark.position.z=-12;
      }
      waterTexture.offset.y-=dt*(runningRef.current?(.16+flowRef.current*.055):.035);
      water.material instanceof THREE.MeshStandardMaterial&&(water.material.emissiveIntensity=.22+(runningRef.current?.05:0)+flowRef.current*.02+Math.sin(performance.now()*.002)*.05);
      renderer.render(scene,camera);
    };
    animate();

    const resize=()=>{
      if(!host)return;
      const w=Math.max(1,host.clientWidth),h=Math.max(1,host.clientHeight);
      camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);
    };
    window.addEventListener("resize",resize);

    return()=>{
      alive=false;cancelAnimationFrame(frame);window.removeEventListener("resize",resize);
      wheelRef.current=null;gateRef.current=null;
      millTextures.forEach(texture=>texture.dispose());buildingTextures.dispose();
      scene.traverse(o=>{
        const mesh=o as THREE.Mesh;
        if(mesh.isMesh){mesh.geometry?.dispose?.();const mats=Array.isArray(mesh.material)?mesh.material:[mesh.material];mats.forEach((m:any)=>m?.dispose?.());}
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  },[]);

  const collect=()=>{
    if(stored<=0)return;
    const amount=stored;setCollected(amount);onCollect();
    try{navigator.vibrate?.(20);}catch{}
    window.setTimeout(()=>setCollected(0),850);
  };

  return <div className="mill-scene" ref={mount}>
    <div className="mill-vignette"/>
    <div className="mill-title">
      <img className="mill-frame-img" src={`${BASE}img/models/mill_title_panel.png`} alt=""/>
      <b>МЕЛЬНИЦА БЕССМЕРТИЯ</b>
    </div>

    <div className="mill-top-stats">
      <div className="mill-frame-card" title="В накопителе мельницы">
        <img className="mill-frame-img" src={`${BASE}img/models/mill_storage_panel.png`} alt=""/>
        <b style={String(stored).length>6?{fontSize:`clamp(9px,${26/String(stored).length}vw,14px)`}:undefined} aria-label={`В накопителе: ${stored}`}>{stored}</b>
      </div>
      <div className="mill-frame-card" title="Твой баланс бессмертия">
        <img className="mill-frame-img" src={`${BASE}img/models/mill_balance_panel.png`} alt=""/>
        <b style={String(balance).length>6?{fontSize:`clamp(9px,${26/String(balance).length}vw,14px)`}:undefined} aria-label={`Баланс: ${balance}`}>{balance}</b>
      </div>
    </div>

    {!loaded&&<div className="mill-load">Загружаем водяное колесо…</div>}
    {loadFailed&&<div className="mill-load">Колесо временно не загрузилось — механизм всё равно можно проверить.</div>}
    {!!collected&&<div className="mill-collected">+{collected} золотых капель</div>}

    {hint&&<div className="mill-river-hint" role="status">{hint}</div>}
    {parcel&&<button className="mill-icon-btn mill-net-btn" aria-label="Поймать находку водосборником" title="Поймать находку" onClick={catchParcel}>
      <img className="mill-frame-img" src={`${BASE}img/models/frame_top_side_360w.png`} alt=""/>
      <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9 16h30L32 38H16Z" fill="#352a15" stroke="#f0c866" strokeWidth="2"/><path d="m15 17 4 20m5-20v20m9-20-4 20M12 24h24M14 31h20" stroke="#c69a44" strokeWidth="1.4"/><path d="M24 4c-5 7-5 11 0 11s5-4 0-11" fill="#f0c866"/></svg>
    </button>}

    <div className="mill-rate-pill"><span>{running?(recentControl?(flow===pressure?"Регулировка · капли и подарки":"Подстрой шлюз для подарков"):"Без регулировки · только капли"):"Напор меняется"}</span><b>{running?("+"+(liveRate||1)+" / сек"):"0 / сек"}</b></div>

    <div className="mill-sluice">
      <img className="mill-frame-img" src={`${BASE}img/models/mill_pressure_plus_minus.png`} alt=""/>
      <button disabled={flow<=1} onClick={()=>adjustFlow(-1)} aria-label="Уменьшить поток"/>
      <div className="mill-flow-readout">
        <small>Напор реки {["","I","II","III"][pressure]} · шлюз {["","I","II","III"][flow]}</small>
        <b className={flow===pressure?"good":"warn"}>{flow===pressure?(combo>=5?"РАВНОВЕСИЕ · серия "+combo+" сек":"РАВНОВЕСИЕ"):"ПОДСТРОЙ ШЛЮЗ"}</b>
        <span className="mill-flow-bars">{[1,2,3].map(level=><i key={level} className={level<=flow?"on":""}/>)}</span>
      </div>
      <button disabled={flow>=3} onClick={()=>adjustFlow(1)} aria-label="Увеличить поток"/>
    </div>

    <div className="mill-controls">
      <button className={"mill-icon-btn "+(running?"stop":"start")} aria-label={running?"Остановить мельницу":"Запустить мельницу"} title={running?"Остановить мельницу":"Запустить мельницу"} onClick={()=>setRunning(v=>{const next=!v;if(!next){comboRef.current=0;setCombo(0);setLiveRate(0);}return next;})}>
        <img className="mill-frame-img" src={`${BASE}img/models/mill_button.png`} alt=""/>
      </button>

      <button className="mill-icon-btn collect" aria-label="Забрать капли" title="Забрать капли" disabled={!stored} onClick={collect}>
        <img className="mill-frame-img" src={`${BASE}img/models/storage_round_button.png`} alt=""/>
      </button>

      <button className="mill-icon-btn home" aria-label="Вернуться в Мидгард" title="Вернуться в Мидгард" onClick={()=>{runningRef.current=false;setRunning(false);onBack();}}>
        <img className="mill-frame-img" src={`${BASE}img/models/home_button.png`} alt=""/>
      </button>
    </div>
  </div>;
}
