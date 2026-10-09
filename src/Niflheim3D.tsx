import {createLakeDescendingCave} from './niflheimLakeCave';
import {installTowerEntrance} from './niflheimTower';
import {textureBuildingPart} from './buildingTextures';
import {createForgottenNamesHall} from './niflheimNamesHall';
import {createRootsIceCave} from './niflheimRootsCave';
import {InventorySection} from './inventory';
import {createNiflheimForge} from './niflheimForge';
import {createMemoryIgloo} from './niflheimIgloo';
import {createNiflheimGiant} from './niflheimGiant';
import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {BASE,cachedGlbBuffer,WEAPON_ASSET,textureSteelOnWeapon,type HeroWeapon} from './core';
import {addEntranceIce} from './niflheimEntranceIce';
import {addEntranceSnow} from './niflheimEntranceSnow';
import {addEntranceVeil} from './niflheimEntranceVeil';
import {addEntrancePowder} from './niflheimEntrancePowder';
import {addNiflheimRivers} from './niflheimRivers';
import {reshapeCaveEntrance,createCaveSpace,CAVE_SCALE,CAVE_FRONT_Z,CAVE_MOUTH_X,CAVE_FLOOR_Y} from './niflheimCaveEntrance';
import {NIFL_SCALE,NIFL_SOURCE,NIFL_ENTRANCE_ARCS,NIFL_LOCATIONS,NIFL_RIVERS,NIFL_LAKES,NIFL_ROUTES,niflGroundY,clampNiflPosition,moveThroughNiflEntrance} from './niflheimMapData';

const hash=(x:number,z:number)=>{const n=Math.sin(x*127.1+z*311.7)*43758.5453;return n-Math.floor(n);};
const CSS=`
.nifl-world{position:relative;flex:1;min-height:0;overflow:hidden;background:#9ab3c4;touch-action:none}.nifl-mount{position:absolute;inset:0}.nifl-mount canvas{display:block;width:100%;height:100%}.nifl-top{position:absolute;top:12px;left:12px;right:12px;display:flex;justify-content:space-between;align-items:flex-start;gap:8px;pointer-events:none}.nifl-top h2{margin:0;color:#eaf7ff;font-size:20px;text-shadow:0 2px 4px #143449}.nifl-top p{margin:4px 0;color:#eaf7ff;font-size:11px;text-shadow:0 1px 3px #143449}.nifl-top button{pointer-events:auto;background:#f9fcff;color:#253847;border:2px solid #b7c9d2;border-radius:10px;padding:10px;font:inherit;font-size:13px}.nifl-status{position:absolute;top:70px;left:50%;transform:translateX(-50%);padding:7px 12px;border-radius:9px;background:#fff;color:#253847;font-size:12px;text-align:center;max-width:85%}
.nifl-joystick{padding:0;user-select:none}.nifl-joystick img{width:100%;height:100%;pointer-events:none}.nifl-realm-title{display:flex;align-items:center;justify-content:center;height:58px;color:#eaf7ff!important;font-size:20px!important;text-shadow:0 2px 4px #143449}

.nifl-near{position:absolute;bottom:24px;right:14px;width:min(44%,210px);background:#fffffff2;color:#23313b;border:2px solid #b5c7d1;border-radius:13px;padding:10px}.nifl-near b{font-size:13px;display:block;line-height:1.4}.nifl-near button{width:100%;padding:9px 4px;margin-top:7px;border:1px solid #acbec9;border-radius:8px;background:#edf3f6;color:#23313b;font:inherit;font-size:12px}
.nifl-overlay{position:absolute;inset:0;z-index:10;background:#142b3acc;display:flex;align-items:center;justify-content:center;padding:12px;touch-action:auto}.nifl-panel{background:#fff;color:#22323d;border:2px solid #bac8d0;border-radius:16px;padding:16px;width:100%;max-width:620px;max-height:94%;overflow:auto}.nifl-panel h3{margin:0 0 8px;font-size:20px}.nifl-panel p{font-size:14px;line-height:1.6}.nifl-panel button{background:#eef3f6;color:#22323d;border:1px solid #b3c4ce;border-radius:9px;padding:10px;font:inherit;font-size:13px}.nifl-close{float:right}.nifl-panel svg{display:block;width:100%;height:42vh;min-height:240px;background:#e7eff4;border-radius:12px;margin-top:12px}.nifl-map-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;margin:12px 0}.nifl-map-list button{text-align:left;font-size:12px}.nifl-map-legend{font-size:12px!important;color:#536875}
`;

export default function Niflheim3D({initialPosition,onRemember,onForge,onOpenMill,onEnterUnderground,inventory,weapon,shieldAsset,shieldEquipped}:{onEnterUnderground:(position:{x:number;z:number})=>void;onOpenMill:()=>void;inventory:Omit<React.ComponentProps<typeof InventorySection>,'kind'>;weapon:HeroWeapon;shieldAsset:string;shieldEquipped:boolean;onForge:(position:{x:number;z:number})=>void;initialPosition:{x:number;z:number};onRemember:(position:{x:number;z:number})=>void}){
  const mount=useRef<HTMLDivElement>(null);
  const position=useRef(clampNiflPosition(initialPosition.x,initialPosition.z));
  const remember=useRef(onRemember);remember.current=onRemember;
  const input=useRef(new Set<string>());
  const analog=useRef({x:0,z:0});
  const stick=useRef<HTMLSpanElement>(null);
  const pointerId=useRef<number|null>(null);
  const clearInput=()=>{input.current.clear();analog.current={x:0,z:0};pointerId.current=null;if(stick.current)stick.current.style.transform="translate(0px,0px)";};
  const towerEntrance=useRef<ReturnType<typeof installTowerEntrance>|null>(null);
  const [doorOpening,setDoorOpening]=useState(false);
  const undergroundCallback=useRef(onEnterUnderground);undergroundCallback.current=onEnterUnderground;
  const [near,setNear]=useState('threshold');
  const [mapOpen,setMapOpen]=useState(false);
  const [inventoryOpen,setInventoryOpen]=useState(false);
  const attackAction=useRef<(()=>void)|null>(null);
  const guardUntil=useRef(0);
  const [selected,setSelected]=useState('');
  const [status,setStatus]=useState('Вика входит в Нифльхейм…');
  const paused=useRef(false);paused.current=doorOpening||mapOpen||inventoryOpen||!!selected;
  const info=NIFL_LOCATIONS.find(l=>l.id===selected);
  const nearest=NIFL_LOCATIONS.find(l=>l.id===near);
  useEffect(()=>{
    const host=mount.current;if(!host)return;
    let renderer:THREE.WebGLRenderer;
    try{renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});}catch{setStatus('3D недоступно. Открой карту Нифльхейма.');return;}
    let alive=true,raf=0;
    // The world and sunlight are static: refresh one soft shadow map only on load.
    renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;
    const refreshShadows=()=>{renderer.shadowMap.needsUpdate=true;};
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);
    const scene=new THREE.Scene();scene.background=new THREE.Color('#a9c1d1');scene.fog=new THREE.Fog('#a9c1d1',45,165);
    const camera=new THREE.PerspectiveCamera(58,1,.1,280);
    scene.add(new THREE.HemisphereLight('#e8f7ff','#536d80',1.35));
    const sun=new THREE.DirectionalLight('#ecf5ff',2.2);sun.position.set(-135,90,85);
    sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);
    Object.assign(sun.shadow.camera,{left:-190,right:190,top:190,bottom:-190,near:1,far:500});
    // The large, shallow-lit snow field needs enough offset to avoid shadow-map
    // texels drawing stripes on their own surface. Keep terrain casting shadows.
    sun.shadow.camera.updateProjectionMatrix();sun.shadow.bias=-.0005;sun.shadow.normalBias=.45;
    scene.add(sun);scene.add(sun.target);
    const textures=new Set<THREE.Texture>();
    let lakeCave:ReturnType<typeof createLakeDescendingCave>|undefined;
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Snow_Mountain_Lite.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{if(!alive){disposeObject(asset.scene);return;}lakeCave=createLakeDescendingCave(asset.scene,niflGroundY);scene.add(lakeCave.root);const room=lakeCave;cachedGlbBuffer(`${BASE}img/models/Niflheim_Stone_Table_Lite.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(table=>{if(!alive){disposeObject(table.scene);return;}room.addTable(table.scene);refreshShadows();cachedGlbBuffer(`${BASE}img/models/Niflheim_Table_Crystal.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(crystal=>{if(!alive){disposeObject(crystal.scene);return;}room.addCrystal(crystal.scene);refreshShadows();}).catch(()=>{if(alive)setStatus('Не удалось загрузить кристалл на столе.');});}).catch(()=>{if(alive)setStatus('Не удалось загрузить каменный стол.');});cachedGlbBuffer(`${BASE}img/models/Niflheim_Mountain_Arch_Lite.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(arch=>{if(!alive){disposeObject(arch.scene);return;}room.addArch(arch.scene);refreshShadows();}).catch(()=>{if(alive)setStatus('Не удалось загрузить арку.');});const p=groundGeo.getAttribute('position');for(let i=0;i<p.count;i++)p.setY(i,terrainY(p.getX(i),p.getZ(i)));groundGeo.computeVertexNormals();p.needsUpdate=true;scene.traverse(o=>{if(o instanceof THREE.Mesh&&o.name==='Niflheim terrain'){const v=o.geometry.getAttribute('position');for(let i=0;i<v.count;i++)v.setY(i,terrainY(v.getX(i),v.getZ(i)));v.needsUpdate=true;o.geometry.computeVertexNormals();}});refreshShadows();}).catch(()=>{if(alive)setStatus('Не удалось загрузить пещеру у озера.');});
    let entranceVeil:ReturnType<typeof addEntranceVeil>|undefined;
    let caveSpace:ReturnType<typeof createCaveSpace>|undefined;
    let forgeSpace:ReturnType<typeof createNiflheimForge>|undefined;
    let giant:ReturnType<typeof createNiflheimGiant>|undefined;
    let memorySpace:ReturnType<typeof createMemoryIgloo>|undefined;
    let memoryGiant:ReturnType<typeof createNiflheimGiant>|undefined;
    let hallSpace:ReturnType<typeof createForgottenNamesHall>|undefined;
    let rootsSpace:ReturnType<typeof createRootsIceCave>|undefined;
    let sourceIceBounds:THREE.Box3|undefined;
    const sourceIceBlocked=(x:number,z:number)=>!!sourceIceBounds&&x>sourceIceBounds.min.x&&x<sourceIceBounds.max.x&&z>sourceIceBounds.min.z&&z<sourceIceBounds.max.z;
    let lakeBridgeDeck:number|undefined;
    const lakeBridgeY=(x:number,z:number)=>lakeBridgeDeck!==undefined&&Math.abs(x+72)<3.7&&z>=-12&&z<=23?lakeBridgeDeck:undefined;
    let platformBounds:THREE.Box3|undefined,wellObstacle:{x:number;z:number;radius:number}|undefined;
    let foundationSnow:{x:number;z:number;halfX:number;halfZ:number;height:number}|undefined;
    const wellGlowSprites:THREE.Sprite[]=[];
    const raisedSnowY=(x:number,z:number)=>{
      const original=niflGroundY(x,z),pad=foundationSnow;
      if(!pad)return original;
      const distance=Math.hypot(Math.max(0,Math.abs(x-pad.x)-pad.halfX),Math.max(0,Math.abs(z-pad.z)-pad.halfZ));
      const influence=1-THREE.MathUtils.smoothstep(distance,0,5);
      return original+Math.max(0,pad.height-original)*influence;
    };
    const stairWalkMeshes:THREE.Object3D[]=[];
    const stairRay=new THREE.Raycaster();
    const stairGroundY=(x:number,z:number)=>{
      if(!platformBounds||x<platformBounds.min.x||x>platformBounds.max.x||z<platformBounds.min.z||z>platformBounds.max.z)return undefined;
      stairRay.set(new THREE.Vector3(x,platformBounds.max.y+8,z),new THREE.Vector3(0,-1,0));
      return stairRay.intersectObjects(stairWalkMeshes,false)[0]?.point.y;
    };
    const platformBlocked=(from:{x:number;z:number},next:{x:number;z:number})=>{
      if(wellObstacle&&Math.hypot(next.x-wellObstacle.x,next.z-wellObstacle.z)<wellObstacle.radius)return true;
      const toY=stairGroundY(next.x,next.z),fromY=stairGroundY(from.x,from.z);
      return toY!==undefined&&toY-(fromY??raisedSnowY(from.x,from.z))>.85;
    };
    const walkingY=(x:number,z:number)=>lakeCave?.groundY(x,z)??towerEntrance.current?.groundY(x,z)??stairGroundY(x,z)??lakeBridgeY(x,z)??hallSpace?.groundY(x,z)??memorySpace?.groundY(x,z)??forgeSpace?.groundY(x,z)??caveSpace?.groundY(x,z)??rootsSpace?.groundY(x,z)??raisedSnowY(x,z);
    const terrainY=(x:number,z:number)=>lakeCave?.terrainY(x,z)??towerEntrance.current?.groundY(x,z)??hallSpace?.terrainY(x,z)??memorySpace?.terrainY(x,z)??forgeSpace?.terrainY(x,z)??(caveSpace?.inside(x,z)?caveSpace.floor-.06:(rootsSpace?.groundY(x,z)??niflGroundY(x,z)));
    const crystalMaterials:THREE.MeshStandardMaterial[]=[];
    const crystalHalos:THREE.Sprite[]=[];
    const snowCanvas=document.createElement('canvas');snowCanvas.width=snowCanvas.height=128;
    const ctx=snowCanvas.getContext('2d')!;ctx.fillStyle='#d6e5ed';ctx.fillRect(0,0,128,128);
    for(let i=0;i<1900;i++){ctx.fillStyle=i%3===0?'#c0d4e1':'#edf7fb';ctx.fillRect(hash(i,1)*128,hash(i,2)*128,1+hash(i,3)*3,1);}
    const snowTex=new THREE.CanvasTexture(snowCanvas);snowTex.colorSpace=THREE.SRGBColorSpace;snowTex.wrapS=snowTex.wrapT=THREE.RepeatWrapping;snowTex.repeat.set(16*NIFL_SCALE,20*NIFL_SCALE);textures.add(snowTex);
    const snow=new THREE.MeshStandardMaterial({map:snowTex,roughness:1});snow.shadowSide=THREE.DoubleSide;
    const stone=new THREE.MeshStandardMaterial({color:'#8b9eac',roughness:.95});
    const dark=new THREE.MeshStandardMaterial({color:'#172c3d',roughness:1});
    const pathMat=new THREE.MeshStandardMaterial({color:'#acbdc9',roughness:1});
    const glow=new THREE.MeshBasicMaterial({color:'#8edafb',transparent:true,opacity:.55});
    new THREE.TextureLoader().load(`${BASE}img/models/Stone_Sacred_1.jpg`,texture=>{if(!alive){texture.dispose();return;}texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;textures.add(texture);stone.map=texture;stone.needsUpdate=true;});
    const groundGeo=new THREE.PlaneGeometry(120*NIFL_SCALE,156*NIFL_SCALE,72,90);groundGeo.rotateX(-Math.PI/2);
    const p=groundGeo.getAttribute('position');for(let i=0;i<p.count;i++)p.setY(i,niflGroundY(p.getX(i),p.getZ(i)));groundGeo.computeVertexNormals();const fallbackGround=new THREE.Mesh(groundGeo,snow);fallbackGround.name="Niflheim terrain";fallbackGround.castShadow=true;fallbackGround.receiveShadow=true;scene.add(fallbackGround);
    new GLTFLoader().load(`${BASE}img/models/Terrain_Optimized.glb`,asset=>{
      if(!alive){asset.scene.traverse((o:any)=>{if(!o.isMesh)return;o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){for(const v of Object.values(m))if(v instanceof THREE.Texture)v.dispose();m.dispose();}});return;}
      // Bake the source node transform before mapping its unit square to the world.
      asset.scene.updateMatrixWorld(true);
      asset.scene.traverse((o:any)=>{if(!o.isMesh)return;
        const geo=o.geometry as THREE.BufferGeometry;geo.applyMatrix4(o.matrixWorld);
        const vertices=geo.getAttribute('position');
        for(let i=0;i<vertices.count;i++){const x=(vertices.getX(i)-.5)*240,z=(vertices.getZ(i)+.5)*312;vertices.setXYZ(i,x,terrainY(x,z),z);}
        geo.computeVertexNormals();geo.computeBoundingSphere();
        const terrain=new THREE.Mesh(geo,snow);terrain.name="Niflheim terrain";terrain.castShadow=true;terrain.receiveShadow=true;scene.add(terrain);
        for(const material of Array.isArray(o.material)?o.material:[o.material]){for(const value of Object.values(material))if(value instanceof THREE.Texture)value.dispose();material.dispose();}
      });
      scene.remove(fallbackGround);groundGeo.dispose();refreshShadows();
    },undefined,()=>{});
    const mesh=(geo:THREE.BufferGeometry,mat:THREE.Material,x:number,y:number,z:number,sx=1,sy=1,sz=1)=>{const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=mat instanceof THREE.MeshStandardMaterial&&!mat.transparent;m.receiveShadow=true;scene.add(m);return m;};
    const rockGeo=new THREE.DodecahedronGeometry(1,1);
    const rocks=new THREE.InstancedMesh(rockGeo,stone,180),dummy=new THREE.Object3D();
    for(let i=0;i<180;i++){
      const side=i%4,t=(-72+hash(i,11)*144)*NIFL_SCALE;
      const x=side<2?(side===0?-58:58)*NIFL_SCALE:t*.76,z=side<2?t:(side===2?-75:75)*NIFL_SCALE;
      if(side===3&&Math.abs(x)<12){dummy.position.set(x,-30,z);dummy.scale.set(0,0,0);dummy.updateMatrix();rocks.setMatrixAt(i,dummy.matrix);continue;}
      const r=2+hash(i,12)*4,h=3+hash(i,13)*8;
      dummy.position.set(x,niflGroundY(x,z)+h*.5,z);dummy.scale.set(r,h,r);dummy.rotation.set(.1,hash(i,14)*6.28,0);dummy.updateMatrix();rocks.setMatrixAt(i,dummy.matrix);
    }
    rocks.instanceMatrix.needsUpdate=true;rocks.computeBoundingSphere();rocks.castShadow=true;rocks.receiveShadow=true;scene.add(rocks);
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Boundary_Iceberg.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>{
      if(!alive){asset.scene.traverse((o:any)=>{if(o.isMesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){m.map?.dispose();m.dispose();}}});return;}
      const placements:{x:number;z:number;seed:number}[]=[];
      for(let side=0;side<4;side++){
        const count=side<2?22:18;
        for(let i=0;i<count;i++){
          const t=i/(count-1),x=side<2?(side===0?-116:116):-116+t*232,z=side<2?-150+t*300:(side===2?-150:150);
          if(side===3&&Math.abs(x)<16)continue;
          placements.push({x,z,seed:side*31+i});
        }
      }
      asset.scene.updateMatrixWorld(true);
      asset.scene.traverse((o:any)=>{
        if(!o.isMesh)return;
        const geometry=o.geometry;geometry.applyMatrix4(o.matrixWorld);
        const boundary=new THREE.InstancedMesh(geometry,o.material,placements.length);
        boundary.name='Ледяные айсберги — граница Нифльхейма';
        placements.forEach((p,i)=>{
          const width=18+hash(p.seed,71)*5,height=18+hash(p.seed,72)*12;
          dummy.position.set(p.x,niflGroundY(p.x,p.z)-1,p.z);
          dummy.rotation.set(0,hash(p.seed,73)*Math.PI*2,0);dummy.scale.set(width,height,width);dummy.updateMatrix();
          boundary.setMatrixAt(i,dummy.matrix);
        });
        boundary.instanceMatrix.needsUpdate=true;boundary.computeBoundingSphere();boundary.receiveShadow=true;
        scene.add(boundary);
      });
      scene.remove(rocks);rocks.dispose();refreshShadows();
    },()=>{})).catch(()=>{});
    // Curved entrance walls connect the gate to the rear stone boundary.
    const wardMaterial=new THREE.MeshBasicMaterial({color:'#a4e6ff',transparent:true,opacity:.32,side:THREE.DoubleSide,depthWrite:false,toneMapped:false});
    for(const arc of NIFL_ENTRANCE_ARCS){
      const vertices:number[]=[];
      for(let i=0;i<arc.length-1;i++){
        const a=arc[i],b=arc[i+1],ya=niflGroundY(a.x,a.z)-.15,yb=niflGroundY(b.x,b.z)-.15;
        vertices.push(a.x,ya,a.z,b.x,yb,b.z,a.x,ya+4,a.z,a.x,ya+4,a.z,b.x,yb,b.z,b.x,yb+4,b.z);
      }
      const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));
      geometry.computeVertexNormals();scene.add(new THREE.Mesh(geometry,wardMaterial));
      const rim=arc.map(p=>new THREE.Vector3(p.x,niflGroundY(p.x,p.z)+3.9,p.z));
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(rim),new THREE.LineBasicMaterial({color:'#cef4ff',transparent:true,opacity:.8,depthWrite:false})));
    }
    const rivers=addNiflheimRivers(scene,BASE),{ice,water}=rivers;
    const disc=(x:number,z:number,rx:number,rz:number,mat:THREE.Material)=>{const m=mesh(new THREE.CircleGeometry(1,48),mat,x,niflGroundY(x,z)+.08,z,rx,rz,1);m.rotation.x=-Math.PI/2;return m;};
    NIFL_LAKES.forEach(l=>{disc(l.x,l.z,l.rx,l.rz,ice);for(let i=0;i<7;i++){const a=i/7*6.28;mesh(rockGeo,stone,l.x+Math.cos(a)*(l.rx+1),.6,l.z+Math.sin(a)*(l.rz+1),1,.8,1);}});
    disc(NIFL_SOURCE.x,NIFL_SOURCE.z,NIFL_SOURCE.rx,NIFL_SOURCE.rz,water);
    const sourceRing=mesh(new THREE.TorusGeometry(6*NIFL_SCALE,.09,5,64),glow,0,niflGroundY(0,NIFL_SOURCE.z)+.17,NIFL_SOURCE.z);sourceRing.rotation.x=-Math.PI/2;
    const poleGeo=new THREE.BoxGeometry(1,1,1);
    const pillar=(x:number,z:number,height:number,mat=stone)=>mesh(poleGeo,mat,x,niflGroundY(x,z)+height/2,z,1.15,height,1.3);
    const cave=(x:number,z:number)=>{const base=niflGroundY(x,z);mesh(rockGeo,stone,x-3,base+2,z,2,3,2);mesh(rockGeo,stone,x+3,base+2,z,2,3,2);mesh(rockGeo,stone,x,base+5,z,4,1.7,2);const opening=mesh(new THREE.CircleGeometry(2.6,24),dark,x,base+2.6,z+.25,1,1,1);return opening;};
    const gate=(x:number,z:number)=>{pillar(x-2.7,z,6);pillar(x+2.7,z,6);mesh(poleGeo,stone,x,niflGroundY(x,z)+6,z,6.6,.8,1.5);const portal=mesh(new THREE.PlaneGeometry(4,5),new THREE.MeshBasicMaterial({color:'#24253a',transparent:true,opacity:.85,side:THREE.DoubleSide}),x,niflGroundY(x,z)+3,z);return portal;};
    const gates=[gate(-10*NIFL_SCALE,16*NIFL_SCALE)];
    const entrancePlaceholder=new THREE.Group();
    const entranceGate=gate(0,65*NIFL_SCALE);
    // Keep the lightweight entrance only until the downloaded model is ready.
    for(const part of scene.children.slice(-4))entrancePlaceholder.add(part);
    scene.add(entrancePlaceholder);
    gates.push(entranceGate);
    const shelterPlaceholder=new THREE.Group();scene.add(shelterPlaceholder);
    NIFL_LOCATIONS.forEach((l,index)=>{
      if(l.kind==='cave'&&l.id!=='memoryCave')cave(l.x,l.z-3);
      if(l.kind==='hall'){
        hallSpace=createForgottenNamesHall(l.x,l.z,niflGroundY,stone,snow);scene.add(hallSpace.root);
        const space=hallSpace;
        Promise.all(['Niflheim_Hall_Modules.glb','Niflheim_Beige_Wall.glb'].map(file=>cachedGlbBuffer(`${BASE}img/models/${file}`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)))).then(([asset,wallAsset])=>{
          if(!alive){for(const loaded of [asset,wallAsset])loaded.scene.traverse((o:any)=>{if(o.isMesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){for(const v of Object.values(m))if(v instanceof THREE.Texture)v.dispose();m.dispose();}}});return;}
          space.replaceShell(asset.scene,wallAsset.scene);refreshShadows();
          for(const [file,install] of [['Niflheim_Hall_Arch.glb',space.addArch],['Ice_Roof_Slab.glb',space.addSnowRoof],['Niflheim_Hall_Furniture.glb',space.addFurniture]] as const){
            cachedGlbBuffer(`${BASE}img/models/${file}`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,loaded=>{
              if(!alive){loaded.scene.traverse((o:any)=>{if(o.isMesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){for(const v of Object.values(m))if(v instanceof THREE.Texture)v.dispose();m.dispose();}}});return;}
              install(loaded.scene);refreshShadows();
            },()=>{})).catch(()=>{});
          }
        }).catch(()=>{});

        const positions=groundGeo.getAttribute('position');for(let i=0;i<positions.count;i++)positions.setY(i,terrainY(positions.getX(i),positions.getZ(i)));groundGeo.computeVertexNormals();positions.needsUpdate=true;
      }
      if(l.kind==='shelter'){
        const first=scene.children.length;
        pillar(l.x-3,l.z-2,4);pillar(l.x+3,l.z-2,4);pillar(l.x-3,l.z+2,4);pillar(l.x+3,l.z+2,4);
        mesh(poleGeo,snow,l.x,niflGroundY(l.x,l.z)+4.5,l.z,8,.8,7);mesh(poleGeo,pathMat,l.x,niflGroundY(l.x,l.z)+.3,l.z,8,.6,7);
        if(l.kind==='shelter')for(const part of scene.children.slice(first))shelterPlaceholder.add(part);
      }
      if(l.kind==='bridge'){
        cachedGlbBuffer(`${BASE}img/models/Niflheim_Lake_Bridge.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{
          if(!alive){asset.scene.traverse((o:any)=>{if(o.isMesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){for(const v of Object.values(m))if(v instanceof THREE.Texture)v.dispose();m.dispose();}}});return;}
          const bridge=asset.scene;bridge.updateMatrixWorld(true);
          const bounds=new THREE.Box3().setFromObject(bridge),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
          bridge.scale.set(8/size.x,6/size.y,35/size.z);
          lakeBridgeDeck=Math.max(niflGroundY(-72,-12),niflGroundY(-72,26))+.3;
          // Source deck at local world Y=9.2; north end touches shore, south end stops three units short.
          bridge.position.set(-72-center.x*bridge.scale.x,lakeBridgeDeck-9.2*bridge.scale.y,5.5-center.z*bridge.scale.z);
          bridge.name='Разрушенная переправа через озеро';
          bridge.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
          scene.add(bridge);refreshShadows();
        }).catch(()=>{});
      }
      // The former lookout is now the dry riverbed; leave its channel unobstructed.
      if(l.kind!=='source'){
        const marker=mesh(new THREE.OctahedronGeometry(.5),glow,l.x+3,niflGroundY(l.x+3,l.z+3)+2.8,l.z+3);marker.name=`Location ${index+1}: ${l.name}`;
      }
    });
    // Lightweight snow drifts instead of a full-screen effect.
    const snowPoints=new THREE.BufferGeometry(),snowCoords=new Float32Array(160*3);
    for(let i=0;i<160;i++){snowCoords[i*3]=(hash(i,51)*110-55)*NIFL_SCALE;snowCoords[i*3+1]=hash(i,52)*18+2;snowCoords[i*3+2]=(hash(i,53)*140-70)*NIFL_SCALE;}
    snowPoints.setAttribute('position',new THREE.BufferAttribute(snowCoords,3));scene.add(new THREE.Points(snowPoints,new THREE.PointsMaterial({color:'#edf8ff',size:.11,transparent:true,opacity:.7})));
    const hero=new THREE.Group();hero.rotation.y=Math.PI;scene.add(hero);
    let mixer:THREE.AnimationMixer|undefined,idle:THREE.AnimationAction|undefined,walk:THREE.AnimationAction|undefined,attack:THREE.AnimationAction|undefined,attackUntil=0,shieldBones:THREE.Object3D[]=[],shieldBase:THREE.Quaternion[]=[],moving=false,currentAction:THREE.AnimationAction|undefined;
    const disposeObject=(root:THREE.Object3D)=>{root.traverse((o:any)=>{if(o.isMesh){o.geometry?.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){for(const v of Object.values(m))if(v instanceof THREE.Texture)textures.add(v);m.dispose();}}});};
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Corrupted_Ice_Cluster.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>{
      if(!alive){disposeObject(asset.scene);textures.forEach(t=>t.dispose());return;}
      const cluster=asset.scene;cluster.name='Багровый лёд Хвергельмира';cluster.position.set(NIFL_SOURCE.x,niflGroundY(NIFL_SOURCE.x,NIFL_SOURCE.z)+.12,NIFL_SOURCE.z);
      cluster.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});scene.add(cluster);cluster.updateMatrixWorld(true);
      sourceIceBounds=new THREE.Box3().setFromObject(cluster).expandByScalar(.65);refreshShadows();
    },()=>{})).catch(()=>{});


    const dragonLair=NIFL_LOCATIONS.find(l=>l.id==='nidhogg')!;
    cachedGlbBuffer(`${BASE}img/models/Collapsed_Tower_Optimized.glb?v=tower-4`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{
      if(!alive){disposeObject(asset.scene);return;}
      const tower=asset.scene;tower.name='Разрушенная башня — логово Нидхёгга';
      tower.updateMatrixWorld(true);
      // Rotate only the standing stump; keep the fallen tower in its original placement.
      const standing=tower.getObjectByName('polySurface1_blinn1_0') as THREE.Mesh|undefined;
      if(standing){
        const geometry=standing.geometry.clone().applyMatrix4(standing.matrixWorld);
        geometry.computeBoundingBox();
        const pivotCenter=geometry.boundingBox!.getCenter(new THREE.Vector3());
        geometry.translate(-pivotCenter.x,-pivotCenter.y,-pivotCenter.z);
        standing.geometry.dispose();standing.geometry=geometry;
        const pivot=new THREE.Group();pivot.name='Standing tower entrance pivot';
        pivot.position.copy(pivotCenter);pivot.rotation.y=Math.PI/2;
        tower.add(pivot);pivot.add(standing);
        standing.position.set(0,0,0);standing.rotation.set(0,0,0);standing.scale.set(1,1,1);
        standing.matrixAutoUpdate=true;standing.updateMatrix();
      }
      tower.rotation.y=Math.PI;
      tower.updateMatrixWorld(true);
      const initial=new THREE.Box3().setFromObject(tower),size=initial.getSize(new THREE.Vector3());
      tower.scale.multiplyScalar(Math.min(58.08/Math.max(size.y,.001),68.64/Math.max(size.x,size.z,.001)));
      tower.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(tower),center=bounds.getCenter(new THREE.Vector3());
      const towerX=dragonLair.x+6;
      tower.position.set(towerX-center.x,niflGroundY(towerX,dragonLair.z)-bounds.min.y-.15,dragonLair.z-center.z);
      tower.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
      scene.add(tower);
      if(standing){
        const entrance=installTowerEntrance(scene,tower,standing,niflGroundY);towerEntrance.current=entrance;
        // Flatten snow under the entrance and blend its edges into the surrounding terrain.
        scene.traverse((o:any)=>{if(o.isMesh&&o.name==='Niflheim terrain'){
          const vertices=o.geometry.getAttribute('position');for(let i=0;i<vertices.count;i++){const y=entrance.groundY(vertices.getX(i),vertices.getZ(i));if(y!==undefined)vertices.setY(i,y-.08);}
          vertices.needsUpdate=true;o.geometry.computeVertexNormals();
        }});
      }
      refreshShadows();
    }).catch(()=>{if(alive)setStatus('Не удалось загрузить разрушенную башню.');});
    const rootsLocation=NIFL_LOCATIONS.find(l=>l.id==='roots')!;
    const wellSiteX=NIFL_SOURCE.x-22,wellSiteZ=NIFL_SOURCE.z-34;
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Well_Assembly.glb?v=staircase-only-4`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(asset=>{
      if(!alive){disposeObject(asset.scene);return;}
      const assembly=asset.scene;assembly.name='Лестница и площадка — Хвергельмир';
      assembly.rotation.y=Math.PI; // Lower steps face south, toward the realm entrance.
      // Normalize source units and put the entire base above the surrounding snow.
      assembly.updateMatrixWorld(true);
      const initialBounds=new THREE.Box3().setFromObject(assembly);
      const size=initialBounds.getSize(new THREE.Vector3());
      if(!Number.isFinite(size.x+size.y+size.z)||Math.max(size.x,size.z)<=0)throw new Error('Empty staircase');
      assembly.scale.multiplyScalar(12/Math.max(size.x,size.z));
      assembly.scale.x*=1.3;assembly.scale.z*=1.3;
      assembly.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(assembly);
      const center=bounds.getCenter(new THREE.Vector3());
      const sampleY=(x:number,z:number)=>niflGroundY(x,z);
      const baseY=sampleY(wellSiteX,wellSiteZ+7.8)-.08;
      assembly.position.set(wellSiteX-center.x,baseY+.12-bounds.min.y,wellSiteZ-center.z);

      assembly.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
      scene.add(assembly);assembly.updateMatrixWorld(true);
      const worldBounds=new THREE.Box3().setFromObject(assembly);
      foundationSnow={x:wellSiteX,z:wellSiteZ,halfX:(worldBounds.max.x-worldBounds.min.x)*.5,halfZ:(worldBounds.max.z-worldBounds.min.z)*.5,height:worldBounds.min.y+.12};
      scene.traverse((o:any)=>{
        if(o.name!=='Niflheim terrain'||!o.isMesh)return;
        const p=o.geometry.getAttribute('position');
        for(let i=0;i<p.count;i++)p.setY(i,terrainY(p.getX(i),p.getZ(i)));
        p.needsUpdate=true;o.geometry.computeVertexNormals();o.geometry.computeBoundingSphere();
      });
      // Dense local snow surface keeps the foundation supported between coarse terrain vertices.
      const snowPatchGeo=new THREE.PlaneGeometry(foundationSnow.halfX*2+10,foundationSnow.halfZ*2+10,44,44);
      snowPatchGeo.rotateX(-Math.PI/2);
      const snowPatchPositions=snowPatchGeo.getAttribute('position');
      for(let i=0;i<snowPatchPositions.count;i++){
        const x=snowPatchPositions.getX(i)+wellSiteX,z=snowPatchPositions.getZ(i)+wellSiteZ;
        snowPatchPositions.setXYZ(i,x,raisedSnowY(x,z)+.018,z);
      }
      snowPatchGeo.computeVertexNormals();
      const raisedPatch=new THREE.Mesh(snowPatchGeo,snow);raisedPatch.name='Снежное основание постамента';raisedPatch.receiveShadow=true;scene.add(raisedPatch);

      const landingBounds=new THREE.Box3();
      assembly.traverse(object=>{
        if(!(object instanceof THREE.Mesh))return;
        object.castShadow=true;object.receiveShadow=true;stairWalkMeshes.push(object);
        const p=object.geometry.getAttribute('position');
        for(let i=0;i<p.count;i++){
          const v=new THREE.Vector3().fromBufferAttribute(p,i).applyMatrix4(object.matrixWorld);
          if(v.y>=worldBounds.max.y-.025)landingBounds.expandByPoint(v);
        }
      });
      const landingSize=landingBounds.getSize(new THREE.Vector3()),landingCenter=landingBounds.getCenter(new THREE.Vector3());
      const capMaterial=new THREE.MeshStandardMaterial({color:'#dce3e6',roughness:1});
      const slab=new THREE.Mesh(new THREE.BoxGeometry(landingSize.x, .18, landingSize.z),capMaterial);
      slab.name='Каменная плита площадки';
      slab.position.set(landingCenter.x,worldBounds.max.y+.04,landingCenter.z);
      slab.castShadow=true;slab.receiveShadow=true;scene.add(slab);slab.updateMatrixWorld(true);
      stairWalkMeshes.push(slab);
      platformBounds=new THREE.Box3().setFromObject(assembly).union(new THREE.Box3().setFromObject(slab));
      new THREE.TextureLoader().load(`${BASE}img/models/T_Forge_WhiteStone.webp`,texture=>{
        if(!alive){texture.dispose();return;}
        texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;textures.add(texture);
        assembly.traverse(object=>{if(object instanceof THREE.Mesh)textureBuildingPart(object,texture);});
        textureBuildingPart(slab,texture);refreshShadows();
      });
      cachedGlbBuffer(`${BASE}img/models/Good_Ol_Well_Optimized.glb?v=good-well-1`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(gltf=>{
        if(!alive){disposeObject(gltf.scene);return;}
        const well=gltf.scene;well.name="Good Ol' Well — mikelkel2";
        well.updateMatrixWorld(true);
        const sourceBounds=new THREE.Box3().setFromObject(well),wellSize=sourceBounds.getSize(new THREE.Vector3());
        well.scale.multiplyScalar(6.67/Math.max(wellSize.y,.001));well.updateMatrixWorld(true);
        const fitted=new THREE.Box3().setFromObject(well),center=fitted.getCenter(new THREE.Vector3());
        const slabTop=slab.position.y+.09;
        well.position.set(landingCenter.x-center.x,slabTop-fitted.min.y,landingCenter.z-center.z);
        well.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
        scene.add(well);
        wellObstacle={x:landingCenter.x,z:landingCenter.z,radius:2.02};
        const glowCanvas=document.createElement('canvas');glowCanvas.width=glowCanvas.height=64;
        const glowCtx=glowCanvas.getContext('2d')!,gradient=glowCtx.createRadialGradient(32,32,0,32,32,32);
        gradient.addColorStop(0,'rgba(255,255,255,.95)');gradient.addColorStop(.32,'rgba(255,255,255,.48)');gradient.addColorStop(1,'rgba(255,255,255,0)');
        glowCtx.fillStyle=gradient;glowCtx.fillRect(0,0,64,64);
        const glowTexture=new THREE.CanvasTexture(glowCanvas);textures.add(glowTexture);
        const openingY=slabTop+2.05;
        for(const [index,color] of ['#277eff','#b71959'].entries()){
          const halo=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture,color,transparent:true,opacity:.62,depthWrite:false,blending:THREE.AdditiveBlending}));
          halo.position.set(landingCenter.x+(index===0?-.32:.32),openingY+1.1,landingCenter.z);halo.scale.set(2.7,5,1);
          scene.add(halo);wellGlowSprites.push(halo);
          const light=new THREE.PointLight(color,16,12,2);light.position.set(halo.position.x,openingY+.4,landingCenter.z);scene.add(light);
        }
        const luminousWater=new THREE.Mesh(new THREE.CircleGeometry(.83,40),new THREE.MeshBasicMaterial({color:'#554bbd',transparent:true,opacity:.8,side:THREE.DoubleSide}));
        luminousWater.rotation.x=-Math.PI/2;luminousWater.position.set(landingCenter.x,openingY-.08,landingCenter.z);scene.add(luminousWater);

        well.updateMatrixWorld(true);
        const roofMeshes:THREE.Mesh[]=[];
        well.traverse(object=>{if(object instanceof THREE.Mesh&&/roof/i.test(object.name))roofMeshes.push(object);});
        if(roofMeshes.length)cachedGlbBuffer(`${BASE}img/models/Niflheim_Snow_Pieces.glb`).then(buffer=>new GLTFLoader().parseAsync(buffer,`${BASE}img/models/`)).then(pieces=>{
          if(!alive){disposeObject(pieces.scene);return;}
          const roofBounds=new THREE.Box3();for(const roof of roofMeshes)roofBounds.union(new THREE.Box3().setFromObject(roof));
          const roofSize=roofBounds.getSize(new THREE.Vector3()),roofCenter=roofBounds.getCenter(new THREE.Vector3()),ray=new THREE.Raycaster();
          const sources:THREE.Mesh[]=[];pieces.scene.traverse(o=>{if(o instanceof THREE.Mesh)sources.push(o);});
          for(let patch=0;patch<3&&sources.length;patch++){
            const source=sources[(patch+2)%sources.length],geometry=source.geometry.clone();
            geometry.computeBoundingBox();
            const local=geometry.boundingBox!,localSize=local.getSize(new THREE.Vector3()),localCenter=local.getCenter(new THREE.Vector3());
            const positions=geometry.getAttribute('position'),valid:boolean[]=[];
            for(let i=0;i<positions.count;i++){
              const x=roofCenter.x+(patch-1)*roofSize.x*.27+(positions.getX(i)-localCenter.x)/Math.max(localSize.x,.001)*roofSize.x*.48;
              const z=roofCenter.z+(positions.getZ(i)-localCenter.z)/Math.max(localSize.z,.001)*roofSize.z*.94;
              const thickness=(positions.getY(i)-local.min.y)/Math.max(localSize.y,.001)*.24;
              ray.set(new THREE.Vector3(x,roofBounds.max.y+2,z),new THREE.Vector3(0,-1,0));
              const hit=ray.intersectObjects(roofMeshes,false)[0];
              valid.push(!!hit);
              positions.setXYZ(i,x,(hit?.point.y??roofCenter.y)+.015+thickness,z);
            }
            const index=geometry.getIndex(),keep:number[]=[];
            for(let i=0;i<(index?.count??positions.count);i+=3){
              const ids=[0,1,2].map(k=>index?index.getX(i+k):i+k);
              if(ids.every(id=>valid[id]))keep.push(...ids);
            }
            geometry.setIndex(keep);positions.needsUpdate=true;geometry.computeVertexNormals();geometry.computeBoundingSphere();
            const material=new THREE.MeshStandardMaterial({color:'#eef7fc',roughness:1});
            const cover=new THREE.Mesh(geometry,material);cover.name='Снег на крыше колодца';cover.castShadow=true;cover.receiveShadow=true;scene.add(cover);
          }
          disposeObject(pieces.scene);refreshShadows();
        }).catch(()=>{});

        refreshShadows();
      }).catch(()=>{if(alive)setStatus('Не удалось загрузить новый колодец.');});
      refreshShadows();
    }).catch(()=>{if(alive)setStatus('Не удалось загрузить лестницу. Обнови игру.');});

    cachedGlbBuffer(`${BASE}img/models/Yggdrasil_Roots_Ice.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>{
      if(!alive){disposeObject(asset.scene);textures.forEach(t=>t.dispose());return;}
      const root=asset.scene;root.name='Сплетение корней — ледяная арка';
      // Lower only the upper roots; keep the arch's walking clearance intact.
      root.traverse((object:any)=>{
        if(!object.isMesh)return;
        const p=object.geometry.getAttribute('position');
        for(let i=0;i<p.count;i++){const y=p.getY(i);if(y>9)p.setY(i,9+(y-9)*.22);}
        // Clear the same entrance corridor in the decorative roots and ice.
        const index=object.geometry.getIndex(),keep:number[]=[];
        const count=index?.count??p.count;
        for(let i=0;i<count;i+=3){
          const ids=[0,1,2].map(k=>index?index.getX(i+k):i+k);
          const cx=ids.reduce((s,id)=>s+p.getX(id),0)/3;
          const cy=ids.reduce((s,id)=>s+p.getY(id),0)/3;
          const cz=ids.reduce((s,id)=>s+p.getZ(id),0)/3;
          if(Math.abs(cx)<13&&cz>-5&&cy<11.4)continue;
          keep.push(...ids);
        }
        object.geometry.setIndex(keep);
        p.needsUpdate=true;object.geometry.computeVertexNormals();
        object.geometry.computeBoundingBox();object.geometry.computeBoundingSphere();
      });
      const bounds=new THREE.Box3().setFromObject(root);
      root.position.set(rootsLocation.x,niflGroundY(rootsLocation.x,rootsLocation.z)-.2-bounds.min.y,rootsLocation.z);
      root.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});scene.add(root);refreshShadows();
    },()=>{})).catch(()=>{});

    const loadRootsAsset=(file:string)=>cachedGlbBuffer(`${BASE}img/models/${file}`).then(buffer=>new Promise<THREE.Group>((resolve,reject)=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>resolve(asset.scene),reject)));
    Promise.allSettled([loadRootsAsset('Ice_Cave_2_Optimized.glb'),loadRootsAsset('Ice_Roof_Slab.glb')]).then(results=>{
      const loaded=results.filter((r):r is PromiseFulfilledResult<THREE.Group>=>r.status==='fulfilled').map(r=>r.value);
      if(!alive||loaded.length!==2){loaded.forEach(disposeObject);if(!alive)textures.forEach(t=>t.dispose());return;}
      rootsSpace=createRootsIceCave(loaded[0],loaded[1],rootsLocation.x,rootsLocation.z,niflGroundY);scene.add(rootsSpace.root);
      const space=rootsSpace;
      loadRootsAsset('Ice_Cave_1_Optimized.glb').then(iceberg=>{
        if(!alive){disposeObject(iceberg);textures.forEach(t=>t.dispose());return;}
        space.addIceberg(iceberg);refreshShadows();
      }).catch(()=>{});

      scene.traverse((o:any)=>{if(o.name==='Niflheim terrain'&&o.isMesh){const p=o.geometry.getAttribute('position');for(let i=0;i<p.count;i++)p.setY(i,terrainY(p.getX(i),p.getZ(i)));p.needsUpdate=true;o.geometry.computeVertexNormals();o.geometry.computeBoundingSphere();}});
      refreshShadows();
    });

    const memoryLocation=NIFL_LOCATIONS.find(l=>l.id==='memoryCave')!;
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Memory_Igloo.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>{
      if(!alive){disposeObject(asset.scene);textures.forEach(t=>t.dispose());return;}
      memorySpace=createMemoryIgloo(asset.scene,memoryLocation.x,memoryLocation.z,niflGroundY);
      const space=memorySpace;scene.add(space.model,space.base);
      scene.traverse((o:any)=>{if(o.name==='Niflheim terrain'&&o.isMesh){const p=o.geometry.getAttribute('position');for(let i=0;i<p.count;i++)p.setY(i,terrainY(p.getX(i),p.getZ(i)));p.needsUpdate=true;o.geometry.computeVertexNormals();o.geometry.computeBoundingSphere();}});
      const light=new THREE.PointLight('#c8e2ff',65,45,2);light.position.set(memoryLocation.x,space.floor+13,memoryLocation.z-20);scene.add(light);
      cachedGlbBuffer(`${BASE}img/models/Niflheim_Giant_Optimized.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>{
        if(!alive){disposeObject(asset.scene);textures.forEach(t=>t.dispose());return;}
        memoryGiant=createNiflheimGiant(asset.scene,space,0,0,{headColor:'#81b6d9',remainSeated:true});
        memoryGiant.root.name='Хранитель воспоминаний';scene.add(memoryGiant.root,memoryGiant.rock);refreshShadows();
      },()=>{})).catch(()=>{});refreshShadows();
    },()=>{})).catch(()=>{});

    // Fred Drabble's cave, CC BY 4.0: snowy giant shelter facing the entrance road.
    const forgeLocation=NIFL_LOCATIONS.find(l=>l.id==='forge')!;
    forgeSpace=createNiflheimForge(forgeLocation.x,forgeLocation.z,niflGroundY(forgeLocation.x,forgeLocation.z),niflGroundY,refreshShadows);scene.add(forgeSpace.root);
    const workshop=forgeSpace;
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Giant_Optimized.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>{
      if(!alive){disposeObject(asset.scene);textures.forEach(t=>t.dispose());return;}
      const smith=createNiflheimGiant(asset.scene,{world:(x,y,z)=>new THREE.Vector3(x,y,z),inside:()=>true},0,0,{headColor:'#d8b59a'});
      smith.update(2.8,{x:0,z:-12},true);smith.rock.geometry.dispose();(smith.rock.material as THREE.Material).dispose();
      const body=smith.root;body.name='Великан-кузнец';body.scale.setScalar(.65);body.position.set(3.8,0,-11);body.rotation.y=0;
      workshop.root.add(body);body.updateMatrixWorld(true);
      body.traverse((o:any)=>{if(o.isSkinnedMesh){o.skeleton.update();o.computeBoundingBox();}});
      const bounds=new THREE.Box3().setFromObject(body);body.position.y+=workshop.root.position.y-bounds.min.y;
      refreshShadows();
    },()=>{})).catch(()=>{});
    refreshShadows();
    const shelter=NIFL_LOCATIONS.find(l=>l.id==='shelter')!;
    cachedGlbBuffer(`${BASE}img/models/Niflheim_Snow_Cave_Optimized.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,gltf=>{
      if(!alive){disposeObject(gltf.scene);textures.forEach(t=>t.dispose());return;}
      const model=gltf.scene,angle=Math.atan2(-shelter.x,130-shelter.z);
      reshapeCaveEntrance(model,stone);
      model.rotation.y=angle;model.scale.setScalar(CAVE_SCALE);
      // Anchor the forward mouth to the marker, with the cave behind the approach.
      const mouth=new THREE.Vector3(CAVE_MOUTH_X,CAVE_FLOOR_Y,CAVE_FRONT_Z).multiplyScalar(CAVE_SCALE).applyAxisAngle(new THREE.Vector3(0,1,0),angle);
      model.position.set(shelter.x-mouth.x,niflGroundY(shelter.x,shelter.z)-mouth.y-.04,shelter.z-mouth.z);
      model.name='Приют великанов-хранителей';
      model.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
      scene.add(model);shelterPlaceholder.visible=false;
      caveSpace=createCaveSpace(model);
      const giantSpace=caveSpace;
      cachedGlbBuffer(`${BASE}img/models/Niflheim_Giant_Optimized.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,asset=>{
        if(!alive){disposeObject(asset.scene);textures.forEach(t=>t.dispose());return;}
        giant=createNiflheimGiant(asset.scene,giantSpace,CAVE_MOUTH_X,CAVE_FLOOR_Y);
        scene.add(giant.root,giant.rock);refreshShadows();
      },()=>{if(alive)setStatus('Не удалось загрузить великана. Войди в Нифльхейм снова.');})).catch(()=>{if(alive)setStatus('Не удалось загрузить великана. Войди в Нифльхейм снова.');});
      scene.traverse((o:any)=>{
        if(o.name!=='Niflheim terrain'||!o.isMesh)return;
        const vertices=o.geometry.getAttribute('position');
        for(let i=0;i<vertices.count;i++)vertices.setY(i,terrainY(vertices.getX(i),vertices.getZ(i)));
        vertices.needsUpdate=true;o.geometry.computeVertexNormals();o.geometry.computeBoundingSphere();
      });
      const hallLight=new THREE.PointLight('#c2deec',35,38,2);
      hallLight.position.copy(caveSpace.world(CAVE_MOUTH_X,CAVE_FLOOR_Y+10,-5));scene.add(hallLight);
      for(const [dx,dz,r] of [[-8,2,2.2],[8,1,2.8],[-11,-6,3],[11,-7,2.4]]){
        const offset=new THREE.Vector3(dx,0,dz).applyAxisAngle(new THREE.Vector3(0,1,0),angle),x=shelter.x+offset.x,z=shelter.z+offset.z;
        mesh(rockGeo,ice,x,niflGroundY(x,z)+r*.4,z,r,r*.8,r*.9);
        mesh(rockGeo,snow,x,niflGroundY(x,z)+r*.83,z,r*.94,r*.27,r*.85);
      }
      refreshShadows();
    },()=>{})).catch(()=>{});
    cachedGlbBuffer(`${BASE}img/models/Vika-3d-animated-optimized.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,gltf=>{
      if(!alive){disposeObject(gltf.scene);textures.forEach(t=>t.dispose());return;}
      const model=gltf.scene,bounds=new THREE.Box3().setFromObject(model);const height=Math.max(.01,bounds.max.y-bounds.min.y);model.scale.setScalar(6.1/height);model.position.y=-bounds.min.y*(6.1/height);hero.add(model);model.traverse((o:any)=>{if(o.isMesh)o.receiveShadow=true;});
      const bone=(suffix:string)=>{let result:THREE.Object3D|undefined;model.traverse(o=>{if(o.name.replace(/[^a-zA-Z0-9]/g,'').endsWith(suffix))result=o;});return result;};
      const attach=(asset:string,parent:THREE.Object3D,isShield:boolean)=>{
        cachedGlbBuffer(`${BASE}img/models/${asset}`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,equipment=>{
          if(!alive){disposeObject(equipment.scene);textures.forEach(t=>t.dispose());return;}
          const item=equipment.scene;textureSteelOnWeapon(item,asset);
          if(isShield&&asset==='Shield_Round.glb')item.scale.z=.22;
          item.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(item),size=box.getSize(new THREE.Vector3()),centre=box.getCenter(new THREE.Vector3());
          const span=isShield?Math.max(size.x,size.y,size.z):size.y;if(span<.001){disposeObject(item);return;}
          item.position.set(-centre.x,isShield?-centre.y:-box.min.y,-centre.z);
          const mount=new THREE.Group();mount.scale.setScalar((isShield?.38:weapon==='spear'?.82:.57)/span);
          mount.position.set(0,isShield?.075:-.065,isShield?-.016:.015);
          if(isShield)mount.rotation.y=Math.PI;else mount.rotation.x=-.2;
          mount.add(item);parent.add(mount);item.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});refreshShadows();
        },()=>{})).catch(()=>{});
      };
      const rightHand=bone('RightHand'),leftArm=bone('LeftForeArm');
      shieldBones=[bone('LeftArm'),leftArm].filter((b):b is THREE.Object3D=>!!b);shieldBase=shieldBones.map(b=>b.quaternion.clone());
      if(rightHand)attach(weapon==='default'?'Sword.glb':WEAPON_ASSET[weapon],rightHand,false);
      if(shieldEquipped&&leftArm)attach(shieldAsset,leftArm,true);
      mixer=new THREE.AnimationMixer(model);const findClip=(...names:string[])=>names.map(name=>THREE.AnimationClip.findByName(gltf.animations,name)).find(Boolean);
      const idleClip=findClip('idle','sword_idle')||gltf.animations[0],walkClip=findClip('walk_loop','walk')||idleClip;
      const attackClip=findClip('sword_attack','attack');if(attackClip)attack=mixer.clipAction(attackClip);
      attackAction.current=()=>{if(paused.current||!attack||performance.now()<attackUntil)return;clearInput();currentAction?.fadeOut(.08);attack.reset().setLoop(THREE.LoopOnce,1);attack.clampWhenFinished=true;attack.setEffectiveWeight(1);attack.fadeIn(.05).play();currentAction=attack;attackUntil=performance.now()+Math.max(650,attack.getClip().duration*1000);};
      if(idleClip)idle=mixer.clipAction(idleClip);if(walkClip)walk=mixer.clipAction(walkClip);idle?.play();currentAction=idle;setStatus('');
    },()=>{if(alive)setStatus('Не удалось загрузить Вику. Выйди на Древо и войди снова.');})).catch(()=>{if(alive)setStatus('Не удалось загрузить Вику. Выйди на Древо и войди снова.');});
    // Stone Portal by hirairmak, CC BY 4.0. The original GLB stays unchanged.
    cachedGlbBuffer(`${BASE}img/models/stone_portal.glb`).then(buffer=>new GLTFLoader().parse(buffer,`${BASE}img/models/`,gltf=>{
      if(!alive){disposeObject(gltf.scene);textures.forEach(t=>t.dispose());return;}
      const model=gltf.scene;
      const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3());
      model.scale.setScalar(20/Math.max(.01,size.y));model.updateMatrixWorld(true);
      // Use the circular stone base as the anchor rather than the long approach slab.
      const base=model.getObjectByName('Cylinder001')||model.getObjectByName('Cylinder.001');
      const baseBounds=new THREE.Box3().setFromObject(base||model);
      const center=baseBounds.getCenter(new THREE.Vector3());
      model.position.set(-center.x,niflGroundY(0,65*NIFL_SCALE)-baseBounds.max.y+.04,65*NIFL_SCALE-center.z);
      scene.add(model);model.updateMatrixWorld(true);
      const haloCanvas=document.createElement('canvas');haloCanvas.width=haloCanvas.height=64;
      const haloContext=haloCanvas.getContext('2d')!,gradient=haloContext.createRadialGradient(32,32,1,32,32,32);
      gradient.addColorStop(0,'rgba(195,255,250,.8)');gradient.addColorStop(.22,'rgba(92,255,236,.45)');gradient.addColorStop(1,'rgba(50,205,235,0)');
      haloContext.fillStyle=gradient;haloContext.fillRect(0,0,64,64);
      const haloTexture=new THREE.CanvasTexture(haloCanvas);textures.add(haloTexture);
      const haloMaterial=new THREE.SpriteMaterial({map:haloTexture,color:'#91fff3',transparent:true,opacity:.5,depthWrite:false,blending:THREE.AdditiveBlending});
      model.traverse((object:any)=>{
        if(!object.isMesh)return;
        object.castShadow=true;object.receiveShadow=true;
        const tune=(material:THREE.Material)=>{
          if(material.name!=='Diamond'||!(material instanceof THREE.MeshStandardMaterial))return material;
          const bright=material.clone();bright.emissive.set('#5dffe4');bright.emissiveIntensity=1.35;bright.emissiveMap=bright.map;bright.roughness=.22;bright.toneMapped=false;crystalMaterials.push(bright);return bright;
        };
        object.material=Array.isArray(object.material)?object.material.map(tune):tune(object.material);
        if(['Cylinder005','Cylinder011'].includes(object.parent?.name)){
          const center=new THREE.Box3().setFromObject(object).getCenter(new THREE.Vector3());
          const halo=new THREE.Sprite(haloMaterial);halo.position.copy(center);halo.scale.set(4.2,6,1);scene.add(halo);crystalHalos.push(halo);
        }
      });
      const frame=model.getObjectByName('Cylinder002');
      if(frame){addEntranceSnow(frame,scene,niflGroundY(0,65*NIFL_SCALE));addEntrancePowder(frame);}
      entranceVeil=addEntranceVeil(scene,niflGroundY(0,65*NIFL_SCALE),position.current);
      cachedGlbBuffer(`${BASE}img/models/Icicle_01_Optimized.glb`).then(buffer=>{
        if(!alive)return;
        new GLTFLoader().parse(buffer,'',icicle=>{
          if(!alive){disposeObject(icicle.scene);textures.forEach(t=>t.dispose());return;}
          addEntranceIce(scene,icicle.scene,niflGroundY(0,65*NIFL_SCALE));refreshShadows();
        },()=>{});
      }).catch(()=>{});
      entrancePlaceholder.visible=false;refreshShadows();
    },()=>{})).catch(()=>{});
    const resize=()=>{const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();};
    const observer=new ResizeObserver(resize);observer.observe(host);resize();
    const down=(event:KeyboardEvent)=>{if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d'].includes(event.key)){event.preventDefault();input.current.add(event.key);}};
    const up=(event:KeyboardEvent)=>input.current.delete(event.key);
    const clear=clearInput;window.addEventListener('keydown',down);window.addEventListener('keyup',up);window.addEventListener('blur',clear);document.addEventListener('visibilitychange',clear);
    let previous=performance.now(),checkAt=0,currentNear='',velocityX=0,velocityZ=0;const cameraDir={x:0,z:-1};
    camera.position.set(position.current.x,9,position.current.z+19);
    const frame=(now:number)=>{
      if(!alive)return;const flyoverDt=Math.min((now-previous)/1000,1),dt=Math.min(flyoverDt,.05);previous=now;
      const keys=input.current;let dx=0,dz=0;if(!paused.current&&!document.hidden){dx=(keys.has('ArrowRight')||keys.has('d')?1:0)-(keys.has('ArrowLeft')||keys.has('a')?1:0);dz=(keys.has('ArrowDown')||keys.has('s')?1:0)-(keys.has('ArrowUp')||keys.has('w')?1:0);}
      if(!paused.current&&!document.hidden&&Math.hypot(analog.current.x,analog.current.z)>.05){dx=analog.current.x;dz=analog.current.z;}
      const length=Math.hypot(dx,dz),isMoving=length>.05;
      const steer=1-Math.exp(-dt*14);
      velocityX=THREE.MathUtils.lerp(velocityX,isMoving?dx/length:0,steer);velocityZ=THREE.MathUtils.lerp(velocityZ,isMoving?dz/length:0,steer);
      if(!paused.current&&!document.hidden){const from=position.current,next=moveThroughNiflEntrance(from,from.x+velocityX*8.5*dt,from.z+velocityZ*8.5*dt);
        const candidate=caveSpace?caveSpace.move(from,next):next;
        if(!lakeCave?.blocked(from,candidate)&&!towerEntrance.current?.blocked(from,candidate)&&!platformBlocked(from,candidate)&&!hallSpace?.blocked(candidate.x,candidate.z)&&!memorySpace?.blocked(candidate.x,candidate.z)&&!memoryGiant?.blocked(candidate.x,candidate.z)&&!sourceIceBlocked(candidate.x,candidate.z)&&!rootsSpace?.blocked(candidate.x,candidate.z)&&!giant?.blocked(candidate.x,candidate.z)&&!forgeSpace?.blocked(candidate.x,candidate.z))position.current=candidate;}
      if(isMoving){const target=Math.atan2(velocityX,velocityZ),difference=Math.atan2(Math.sin(target-hero.rotation.y),Math.cos(target-hero.rotation.y));hero.rotation.y+=difference*(1-Math.exp(-dt*14));cameraDir.x=Math.sin(hero.rotation.y);cameraDir.z=Math.cos(hero.rotation.y);}
      const walking=!paused.current&&!document.hidden&&Math.hypot(velocityX,velocityZ)>.08;
      moving=walking;
      const next=now<attackUntil?attack:moving?walk:idle;
      if(next&&next!==currentAction){currentAction?.fadeOut(.16);next.reset();next.enabled=true;next.setEffectiveWeight(1);next.setEffectiveTimeScale(1);next.fadeIn(.16).play();currentAction=next;}
      const pos=position.current;
      if(towerEntrance.current?.update(dt)){
        const returnPosition=towerEntrance.current.returnPosition;position.current={...returnPosition};remember.current({...returnPosition});
        undergroundCallback.current({...returnPosition});return;
      }
      hero.position.set(pos.x,walkingY(pos.x,pos.z),pos.z);
      shieldBones.forEach((b,i)=>b.quaternion.copy(shieldBase[i]));mixer?.update(dt);
      shieldBones.forEach((b,i)=>shieldBase[i].copy(b.quaternion));
      const remaining=guardUntil.current-now,lift=shieldEquipped&&remaining>0?Math.min(THREE.MathUtils.clamp((1250-remaining)/170,0,1),THREE.MathUtils.clamp(remaining/260,0,1)):0;
      if(lift>0){const upper=shieldBones[0],lower=shieldBones[1];if(upper){upper.rotateX(-lift*1.9);upper.rotateY(-lift);upper.rotateZ(lift*1.1);}lower?.rotateX(-lift*.3);}
      if(giant?.update(dt,pos,!paused.current&&!document.hidden))refreshShadows();
      const hy=walkingY(pos.x,pos.z);
      entranceVeil?.update(now*.001,pos);
      rivers.update(now*.001);forgeSpace?.update(now*.001);
      const inCave=caveSpace?.inside(pos.x,pos.z);
      const inMemory=memorySpace?.inside(pos.x,pos.z);
      const inHall=hallSpace?.inside(pos.x,pos.z);
      const inRoots=rootsSpace?.inside(pos.x,pos.z);
      const cameraTarget=lakeCave?.inside(pos.x,pos.z)?lakeCave.camera(pos.x,pos.z):inHall?hallSpace!.camera(pos.x,pos.z):inRoots?rootsSpace!.camera(pos.x,pos.z):inMemory?memorySpace!.camera(pos.x,pos.z):inCave?caveSpace!.camera(pos.x,pos.z):new THREE.Vector3(pos.x-cameraDir.x*2,hy+9,pos.z-cameraDir.z*2+17);
      camera.position.lerp(cameraTarget,1-Math.exp(-dt*3.4));
      if(lakeCave?.inside(pos.x,pos.z)){camera.lookAt(pos.x,hy+2.2,pos.z-5);}
      else if(inHall){camera.lookAt(pos.x,hy+4.5,pos.z-7);}
      else if(inRoots){camera.lookAt(pos.x,hy+5,pos.z-8);}
      else if(inMemory){camera.lookAt(pos.x,hy+5,pos.z-7);}
      else if(inCave){const p=caveSpace!.local(pos.x,pos.z);camera.lookAt(caveSpace!.world(p.x,CAVE_FLOOR_Y+(p.z<0?6.5:3),p.z-6));}
      else camera.lookAt(pos.x+cameraDir.x*1.9,hy+3,pos.z-10+cameraDir.z*1.9);
      crystalMaterials.forEach(m=>{m.emissiveIntensity=1.35+Math.sin(now*.0017)*.12;});crystalHalos.forEach(h=>{(h.material as THREE.SpriteMaterial).opacity=.48+Math.sin(now*.0017)*.05;});
      sourceRing.rotation.z+=dt*.12;gates.forEach(g=>{(g.material as THREE.MeshBasicMaterial).opacity=.78+Math.sin(now*.001)*.06;});
      if(now-checkAt>180){checkAt=now;const l=NIFL_LOCATIONS.reduce((a,b)=>Math.hypot(pos.x-a.x,pos.z-a.z)<Math.hypot(pos.x-b.x,pos.z-b.z)?a:b);const id=lakeCave?.inside(pos.x,pos.z)?'snowMountain':towerEntrance.current?.canEnter(pos.x,pos.z)?'nidhogg':forgeSpace?.canEnter(pos.x,pos.z)?'forge':l.id!=='forge'&&l.id!=='nidhogg'&&Math.hypot(pos.x-l.x,pos.z-l.z)<9?l.id:'';if(id!==currentNear){currentNear=id;setNear(id);}}
      wellGlowSprites.forEach((sprite,i)=>{(sprite.material as THREE.SpriteMaterial).opacity=.54+.12*Math.sin(performance.now()*.0017+i*2);});
      renderer.render(scene,camera);raf=requestAnimationFrame(frame);
    };raf=requestAnimationFrame(frame);
    return()=>{towerEntrance.current?.dispose();towerEntrance.current=null;attackAction.current=null;guardUntil.current=0;alive=false;cancelAnimationFrame(raf);observer.disconnect();window.removeEventListener('keydown',down);window.removeEventListener('keyup',up);window.removeEventListener('blur',clear);document.removeEventListener('visibilitychange',clear);clear();remember.current({...position.current});rivers.dispose();forgeSpace?.dispose();mixer?.stopAllAction();scene.traverse((o:any)=>{if(o.isMesh||o.isPoints||o.isSprite||o.isLine){o.geometry?.dispose();if(o.isInstancedMesh)o.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){if(m){for(const v of Object.values(m))if(v instanceof THREE.Texture)textures.add(v);m.dispose();}}}});textures.forEach(t=>t.dispose());sun.shadow.dispose();renderer.dispose();renderer.domElement.remove();};
  },[weapon,shieldAsset,shieldEquipped]);
  const steerStick=(event:React.PointerEvent<HTMLButtonElement>)=>{
    if(pointerId.current!==event.pointerId)return;
    const rect=event.currentTarget.getBoundingClientRect(),radius=rect.width*.36;
    let x=(event.clientX-rect.left-rect.width/2)/radius,z=(event.clientY-rect.top-rect.height/2)/radius;
    const length=Math.hypot(x,z);if(length>1){x/=length;z/=length;}
    analog.current=length>.12?{x,z}:{x:0,z:0};
    if(stick.current)stick.current.style.transform=`translate(${x*radius}px,${z*radius}px)`;
  };
  const startStick=(event:React.PointerEvent<HTMLButtonElement>)=>{event.preventDefault();pointerId.current=event.pointerId;event.currentTarget.setPointerCapture(event.pointerId);steerStick(event);};
  const stopStick=(event:React.PointerEvent<HTMLButtonElement>)=>{if(pointerId.current===event.pointerId)clearInput();};
  const mapPoint=(x:number,z:number)=>({x:x/NIFL_SCALE+65,y:z/NIFL_SCALE+80});
  return <div className="nifl-world"><style>{CSS}</style><div className="nifl-mount" ref={mount}/>
    <div className="mid3d-ui mid3d-top">
      <button className="mid3d-top-btn" aria-label="Карта Нифльхейма" onClick={()=>{clearInput();setMapOpen(true);}}><img className="mid3d-top-button-art" src={`${BASE}img/models/ui_map.png`} alt="" draggable={false}/></button>
      <div className="mid3d-realm-title nifl-realm-title">Нифльхейм</div>
      <button className="mid3d-top-btn" aria-label="Мельница капель бессмертия" onClick={()=>{clearInput();remember.current({...position.current});onOpenMill();}}><img className="mid3d-top-button-art" src={`${BASE}img/models/ui_mill.png`} alt="" draggable={false}/></button>
    </div>
    {status&&<div className="nifl-status">{status}</div>}
    <button className="mid3d-ui mid3d-joy nifl-joystick" aria-label="Управление Викой: тяни в нужном направлении" onPointerDown={startStick} onPointerMove={steerStick} onPointerUp={stopStick} onPointerCancel={stopStick} onLostPointerCapture={stopStick}><img src={`${BASE}img/models/ui_joystick.png`} alt="" draggable={false}/><span className="mid3d-knob" ref={stick}/></button>
    <button className="mid3d-ui mid3d-block" aria-label="Прикрыться щитом" disabled={!shieldEquipped} onClick={()=>{if(!paused.current){clearInput();guardUntil.current=performance.now()+1250;}}}><img className="mid3d-control-art" src={`${BASE}img/models/ui_shield.png`} alt="" draggable={false}/></button>
    <button className="mid3d-ui mid3d-strike" aria-label="Удар оружием" onClick={()=>attackAction.current?.()}><img className="mid3d-control-art" src={`${BASE}img/models/ui_attack.png`} alt="" draggable={false}/></button>
    <button className="mid3d-ui mid3d-action" style={{top:125}} aria-label="Запас рун и эликсиров" onClick={()=>{clearInput();setInventoryOpen(true);}}><img className="mid3d-control-art" src={`${BASE}img/models/ui_inventory.png`} alt="" draggable={false}/></button>
    {inventoryOpen&&<div className="nifl-overlay"><section className="nifl-panel" role="dialog" aria-modal="true" aria-label="Запас Вики"><h3>Запас Вики</h3><InventorySection kind="potions" {...inventory}/><InventorySection kind="runes" {...inventory}/><button onClick={()=>setInventoryOpen(false)}>Вернуться в игру</button></section></div>}
    {nearest&&<div className="nifl-near"><b>{nearest.name}</b><button onClick={()=>{clearInput();if(nearest.id==='nidhogg'){if(!doorOpening&&towerEntrance.current?.canEnter(position.current.x,position.current.z)){setDoorOpening(true);towerEntrance.current.open();setStatus('Дверь башни открывается…');}}else if(nearest.id==='forge'){remember.current({...position.current});onForge({...position.current});}else setSelected(nearest.id);}}>{nearest.id==='nidhogg'?(doorOpening?'Дверь открывается…':'Открыть дверь башни'):nearest.id==='forge'?'Войти в кузницу':'Осмотреть'}</button></div>}
    {mapOpen&&<div className="nifl-overlay"><section className="nifl-panel" role="dialog" aria-modal="true" aria-label="Карта Нифльхейма"><button className="nifl-close" onClick={()=>setMapOpen(false)}>Закрыть</button><h3>Карта Нифльхейма</h3><p className="nifl-map-legend">Три русла: живое, замёрзшее и пересохшее · два озера · источник Хвергельмир. Нажми на номер или название локации.</p>
      <svg viewBox="0 0 130 160" aria-label="Реки и локации Нифльхейма">
        {NIFL_ROUTES.map((route,i)=>{const a=NIFL_LOCATIONS.find(l=>l.id===route[0])!,b=NIFL_LOCATIONS.find(l=>l.id===route[1])!;return <line key={i} x1={a.x/NIFL_SCALE+65} y1={a.z/NIFL_SCALE+80} x2={b.x/NIFL_SCALE+65} y2={b.z/NIFL_SCALE+80} stroke="#8a9eab" strokeWidth="1" strokeDasharray="2 2"/>;})}
        {NIFL_RIVERS.map((river,i)=><polyline key={i} points={river.map(p=>`${p.x/NIFL_SCALE+65},${p.z/NIFL_SCALE+80}`).join(' ')} fill="none" stroke={i===2?"#82766b":"#78b2cf"} strokeWidth={i===0?4:3} strokeDasharray={i===2?"2 1":undefined}/>)}
        {NIFL_LAKES.map((l,i)=><ellipse key={i} cx={l.x/NIFL_SCALE+65} cy={l.z/NIFL_SCALE+80} rx={l.rx/NIFL_SCALE} ry={l.rz/NIFL_SCALE} fill="#9ecbdf"/>)}<ellipse cx="65" cy="31" rx="8" ry="7" fill="#347c9d"/>
        {NIFL_LOCATIONS.map((l,i)=><g key={l.id} role="button" tabIndex={0} aria-label={l.name} onClick={()=>setSelected(l.id)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setSelected(l.id);}}} style={{cursor:'pointer'}}><circle cx={l.x/NIFL_SCALE+65} cy={l.z/NIFL_SCALE+80} r="5.5" fill="#fff" stroke="#526f82" strokeWidth=".6"/><text x={l.x/NIFL_SCALE+65} y={l.z/NIFL_SCALE+81.5} textAnchor="middle" fontSize="4" fill="#203e52">{i+1}</text></g>)}
        <circle cx={mapPoint(position.current.x,position.current.z).x} cy={mapPoint(position.current.x,position.current.z).y} r="2.5" fill="#d29d30" stroke="#fff" strokeWidth=".8"/>
      </svg><div className="nifl-map-list">{NIFL_LOCATIONS.map((l,i)=><button key={l.id} onClick={()=>setSelected(l.id)}>{i+1}. {l.name}</button>)}</div><p className="nifl-map-legend">Золотая точка — Вика. Западное русло покрыто льдом, восточная река течёт, северо-западное русло пересохло.</p><p className="nifl-map-legend">Входные врата: <a href="https://sketchfab.com/3d-models/stone-portal-bfaf2e45dd7242579f5a37b810eca423" target="_blank" rel="noopener noreferrer">Stone Portal — hirairmak</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Изменения в игре: масштаб, размещение основания в снегу и сияние кристаллов.</p>
      <p className="nifl-map-legend">Стены зала: <a href="https://sketchfab.com/3d-models/stone-bricks-beige-wall-set-8df474d0b8df453c87255a1758dde6e2" target="_blank" rel="noopener noreferrer">Stone bricks beige Wall-set — DADedits</a>, CC BY 4.0. Выделен прямой модуль, уменьшены текстуры, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Плиты и стол: <a href="https://sketchfab.com/3d-models/cave-rocks-4101c07c6a754f85962c6b516af4713a" target="_blank" rel="noopener noreferrer">Cave Rocks — Splanyic</a>, CC BY 4.0. Выделены каменные модули, уменьшены текстуры; из модулей собраны плиты и стол.</p>
      <p className="nifl-map-legend">Арка зала: <a href="https://sketchfab.com/3d-models/arch-1-38b5572e58fb40fca8c0d38f8e1192c5" target="_blank" rel="noopener noreferrer">Arch 1 — chuckcg</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, убраны тангенты; геометрия сохранена, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Зал: <a href="https://sketchfab.com/3d-models/maze-rock-assets-61c64e5c177144bf89a3f4bb5214235a" target="_blank" rel="noopener noreferrer">MAZE Rock Assets — Jeremy_W</a>, CC BY 4.0. Модули стены, пола и потолка извлечены, облегчены и собраны в комнату.</p>
      <p className="nifl-map-legend">Ледяная граница: <a href="https://sketchfab.com/3d-models/iceland-scene-for-canimatic-36105320e882416e870c5f6ee8db2e6b" target="_blank" rel="noopener noreferrer">iceland scene for canimatic — m42345081</a>, CC BY 4.0. Извлечён один массив, упрощена геометрия и уменьшена текстура.</p>
      <p className="nifl-map-legend">Пещера: <a href="https://sketchfab.com/3d-models/cave-lp-9k-free-download-819687653df14a4a9acb267212093d1a" target="_blank" rel="noopener noreferrer">Cave LP — Fred Drabble</a>, CC BY 4.0. Уменьшены текстуры, добавлены снег и иней, изменены масштаб, размещение и форма входа.</p>
      <p className="nifl-map-legend">Сосульки: <a href="https://sketchfab.com/3d-models/icicle-01-2dc75ae22f1c4d11abbfd32819312a12" target="_blank" rel="noopener noreferrer">Icicle 01 — Elin</a>, CC BY 4.0. Текстуры уменьшены до 256 пикселей, изменены масштаб, оттенок и размещение; сверху добавлен снег.</p>
      <p className="nifl-map-legend">Ландшафт: <a href="https://sketchfab.com/3d-models/terrain-62dc7db392f34dacb4c07bfcb4faf14e" target="_blank" rel="noopener noreferrer">Terrain — FreeModel (DiFed)</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены детализация и текстуры, изменены масштаб, снежный материал и размещение; выровнен пол пещеры.</p>
      <p className="nifl-map-legend">Лёд Хвергельмира: <a href="https://sketchfab.com/3d-models/ice-cluster-free-4d2271f8bf7f400e9a5c8f10812a32de" target="_blank" rel="noopener noreferrer">Ice Cluster (free) — chrismartin1337</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, изменены масштаб, материал и размещение; добавлены багровый цвет и чёрные потоки.</p>
      <p className="nifl-map-legend">Переправа через озеро: <a href="https://sketchfab.com/3d-models/scandinavian-bridge-ed021c21c21d4e44a4de8903042f3da8" target="_blank" rel="noopener noreferrer">Scandinavian bridge — Ivan Norman (vanidza)</a>, CC BY 4.0. Уменьшены текстуры, убраны дополнительные карты; сохранена геометрия, изменены масштаб и размещение, оставлен разрыв до берега.</p>
      <p className="nifl-map-legend">Мост кузницы: <a href="https://sketchfab.com/3d-models/ice-bridge-f2e6aff3a1744a7293527b5e0a16dd48" target="_blank" rel="noopener noreferrer">Ice Bridge — starchild</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Удалены звёзды и треугольная табличка, сохранены верёвочные ограждения; уменьшены текстуры, изменены масштаб, наклон и размещение.</p>
      <p className="nifl-map-legend">Ледяные образования у корней: <a href="https://sketchfab.com/3d-models/ice-castles-ny-ice-formations-293eff95dafc409f8d203374e0ff45be" target="_blank" rel="noopener noreferrer">Ice Castles NY — Ice Formations — Katie Alois (@kalois)</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Модель разделена на два файла, уменьшены детализация и текстуры; стены увеличены вокруг корней, вырезан проход для Вики.</p>
      <p className="nifl-map-legend">Ледяные плиты и стены: <a href="https://sketchfab.com/3d-models/ice-glacier-933b3c2ee51c48bb958d06655d1ff8bd" target="_blank" rel="noopener noreferrer">Ice Glacier — Svenja (gwenchana3)</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры; одна ледяная плита выделена в отдельный файл и увеличена для свода пещеры.</p>
      <p className="nifl-map-legend">Сплетение корней: оригинальная процедурная модель корней, коры, снега и льда, созданная для Yggdrasil Runes по концепту локации.</p>
      <p className="nifl-map-legend">Корни над логовом дракона: <a href="https://sketchfab.com/3d-models/whispering-tree-roots-3d-model-free-73cf6e7b28854a02bb3dd7881ff7a6e7" target="_blank" rel="noopener noreferrer">Whispering tree Roots 3d model free — iGauravRajput</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Упрощена геометрия, уменьшены текстуры, удалены дубли данных; корни перевёрнуты, вытянуты и размещены с потолка вокруг логова.</p>
      <p className="nifl-map-legend">Рельеф подземелья: <a href="https://sketchfab.com/3d-models/the-hills-6d7faf10658e44279da7356cbe749d56" target="_blank" rel="noopener noreferrer">The Hills</a> — <a href="https://sketchfab.com/mhart" target="_blank" rel="noopener noreferrer">mhart</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, изменены масштаб, высота и оттенок; выровнены участки у двери, под драконом и пещерой.</p>
      <p className="nifl-map-legend">Кристалл на столе: <a href="https://sketchfab.com/3d-models/crystals-a94b73bef86c4011ae0d49d6fc4fb1d9" target="_blank" rel="noopener noreferrer">Crystals — GenEugene</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Выбран крупнейший зелёный кристалл, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Каменный стол в горе: <a href="https://sketchfab.com/3d-models/low-poly-stylized-stone-table-8357876dd2504c67840706b75241e56c" target="_blank" rel="noopener noreferrer">Low poly stylized stone table — mahrcheen</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Арка горы: <a href="https://sketchfab.com/3d-models/fantasy-stylized-arch-c1d8cf5d766f4d5fbe42033166ae03fc" target="_blank" rel="noopener noreferrer">Fantasy Stylized Arch — Sir Erdees</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Снежная гора: <a href="https://sketchfab.com/3d-models/snow-mountain-e84a8e5edb2040c591be36350e2536f5" target="_blank" rel="noopener noreferrer">Snow Mountain — hkp941111</a>, CC BY 4.0. Уменьшены текстуры, изменены масштаб и размещение; вырезан вход для пещеры.</p>
      <p className="nifl-map-legend">Пещера у озера: <a href="https://sketchfab.com/3d-models/carriere-orleans-1-de20639e980449078dc30d6b35b79603" target="_blank" rel="noopener noreferrer">Carrière Orléans 1 — Silv1</a>, CC BY 4.0. Упрощены геометрия и текстура; включены обе стороны стен, изменены масштаб, наклон и размещение.</p>
      <p className="nifl-map-legend">Дракон: <a href="https://sketchfab.com/3d-models/european-dragon-82f393a2e6c048ad80c171ce3b3a7b87" target="_blank" rel="noopener noreferrer">European Dragon — Nonexistent 101</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, геометрия, скелет и пять анимаций сохранены. Дракон находится только в подземном логове.</p>
      <p className="nifl-map-legend">Разрушенная башня: <a href="https://sketchfab.com/3d-models/collapesed-tower-984b012678be49a79c1509cdeeb53402" target="_blank" rel="noopener noreferrer">collapesed tower — portwindyroad</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшена текстура; изменены масштаб и размещение, расширен проход, добавлены двери и столкновения со стенами.</p>
      <p className="nifl-map-legend">Колодец: <a href="https://sketchfab.com/3d-models/good-ol-well-9eadcb31e4b445c8978e791fcce548fe" target="_blank" rel="noopener noreferrer">Good Ol' Well — mikelkel2</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, геометрия сохранена, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Лестница: <a href="https://sketchfab.com/3d-models/the-staircase-step-ladder-20e23588d08d4cae986dc1e208d1c969" target="_blank" rel="noopener noreferrer">Mehdi Shahsavana (@ahmagh2e)</a>. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Убраны верхний пролёт и надписи; сохранены нижние ступени и площадка.</p>
      <p className="nifl-map-legend">Ледяной дом: <a href="https://sketchfab.com/3d-models/igloo-224f673917e6486eb08c496baf77ce84" target="_blank" rel="noopener noreferrer">Igloo — Vera4Art</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Уменьшены текстуры, убрана исходная площадка, изменены масштаб и размещение.</p>
      <p className="nifl-map-legend">Великан: <a href="https://sketchfab.com/3d-models/lowpoly-giant-warrior-rigged-66588f8fd6f64212abe49c7c6cababa9" target="_blank" rel="noopener noreferrer">Lowpoly Giant Warrior (rigged) — luch.pok (lvintoniyak)</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Убраны крупные браслеты, осветлена кожа, уменьшены текстуры; изменены масштаб и размещение, добавлены поза сидя и подъём с камня.</p>
    </section></div>}
    {info&&<div className="nifl-overlay" style={{zIndex:11}}><section className="nifl-panel" role="dialog" aria-modal="true" aria-label={info.name}><h3>{info.name}</h3><p>{info.text}</p>{info.id==='forge'&&<p>Подойди к освещённому входу, чтобы войти в кузницу.</p>}<button onClick={()=>setSelected('')}>Продолжить путь</button></section></div>}
  </div>;
}

