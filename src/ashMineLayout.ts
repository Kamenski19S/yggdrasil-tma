import * as THREE from 'three';
import {buildMineModel} from './ashMineModel';
import {createMineTunnel,bendMineRails} from './ashMineTunnel';
import {MINE_ROUTE,mineRouteFrame,mineTunnelFloor,tunnelWalkable} from './ashMinePath';
export {MINE_ROUTE} from './ashMinePath';
export const MINE_EXIT={x:0,z:28},MINE_TREASURE={x:24,z:-264};
export const MINE_TILE=12;
export const MINE_CELLS=(()=>{const cells:Array<{x:number;z:number}>=[];for(let x=-48;x<=108;x+=6)for(let z=-384;z<=36;z+=6)if(mineWalkable(x,z,0))cells.push({x,z});return cells;})();
export function mineExitCrossed(x:number,z:number,opening:number){return opening>=.95&&Math.abs(x-MINE_EXIT.x)<4.5&&z>=MINE_EXIT.z-.5&&z<=MINE_EXIT.z+1;}
export function mineWalkable(x:number,z:number,radius=1.8){return z>=-241?tunnelWalkable(x,z,radius):x-radius>=-48&&x+radius<=96&&z-radius>=-384;}
export function createAshMineLayout(assetBase:string){
 const root=new THREE.Group();root.name='Округлая пепельная пещера';const texture=new THREE.TextureLoader().load(assetBase+'muspelheim-basalt-wall.jpg');texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.colorSpace=THREE.SRGBColorSpace;
 const stone=new THREE.MeshStandardMaterial({color:'#c9c1b6',map:texture,roughness:1,side:THREE.DoubleSide}),wood=new THREE.MeshStandardMaterial({color:'#4b3424',roughness:1});
 const tunnel=createMineTunnel(stone);root.add(tunnel.root);let model:ReturnType<typeof buildMineModel>|undefined,rails:ReturnType<typeof bendMineRails>|undefined;
 const floorAt=(x:number,z:number)=>z> -241?mineTunnelFloor(x,z):model?.floorAt(x,z)??0;
 // Keep the quest interaction point while the old gold container is removed.
 const chest=new THREE.Group();chest.name='Огненное золото';chest.position.set(MINE_TREASURE.x,0,MINE_TREASURE.z);root.add(chest);
 const exit=new THREE.Group();exit.name='Дверь выхода в Муспельхейм';exit.position.set(MINE_EXIT.x,0,MINE_EXIT.z);root.add(exit);
 for(const side of [-1,1]){const jamb=new THREE.Mesh(new THREE.BoxGeometry(2,21,2),stone);jamb.position.set(side*7,10.5,0);exit.add(jamb);}const lintel=new THREE.Mesh(new THREE.BoxGeometry(16,2,2),stone);lintel.position.y=21;exit.add(lintel);
 const hinge=new THREE.Group();hinge.position.set(-6,0,0);exit.add(hinge);const door=new THREE.Mesh(new THREE.BoxGeometry(12,20,.7),wood);door.position.set(6,10,0);hinge.add(door);
 for(const side of [-1,1]){const glow=new THREE.Mesh(new THREE.OctahedronGeometry(.7),new THREE.MeshBasicMaterial({color:'#80f0ce'}));glow.position.set(side*7,15,-1.5);exit.add(glow);}
 let opening=0,openingDoor=false;
 return {root,chest,tunnel,
  install:(source:THREE.Object3D,track:THREE.Object3D)=>{model=buildMineModel(source);root.add(model.root);tunnel.setRockTexture(model.rockMap);rails=bendMineRails(track,floorAt);root.add(rails.root);chest.position.y=floorAt(MINE_TREASURE.x,MINE_TREASURE.z);root.updateMatrixWorld(true);},
  get rails(){return rails;},floorAt,
  walkable:(x:number,z:number)=>{if(z> -241)return tunnelWalkable(x,z);if(!model||!mineWalkable(x,z))return false;const y=model.floorAt(x,z);return y!==null&&!model.blocked(x,z,y);},
  lineOfSight:(ax:number,az:number,bx:number,bz:number)=>{const n=Math.ceil(Math.hypot(bx-ax,bz-az)/3);for(let i=1;i<n;i++)if(!mineWalkable(ax+(bx-ax)*i/n,az+(bz-az)*i/n,0))return false;return true;},
  openExit:()=>{openingDoor=true;},updateExit:(dt:number)=>{opening=Math.min(1,opening+(openingDoor?dt:0));hinge.rotation.y=-opening*Math.PI*.55;},get exitOpened(){return openingDoor;},get exitOpening(){return opening;},exitBlocks:(x:number,z:number)=>opening<.95&&Math.abs(x)<7.5&&z>24.5,canExit:(x:number,z:number)=>mineExitCrossed(x,z,opening)};
}
