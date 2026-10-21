import {createSlidingMineDoor,MINE_DOOR_CLEAR_HALF} from './ashMineDoor';
import {createMineGoldBars,MINE_GOLD_POSITION} from './ashMineGold';
import * as THREE from 'three';
import {createMineCrystals} from './ashMineCrystals';
import {createMineGemCart} from './ashMineCart';
import {buildMineModel} from './ashMineModel';
import {createMineTunnel,bendMineRails} from './ashMineTunnel';
import {MINE_ROUTE,mineRouteFrame,mineTunnelFloor,tunnelWalkable} from './ashMinePath';
export {MINE_ROUTE} from './ashMinePath';
export const MINE_EXIT={x:0,z:28},MINE_TREASURE=MINE_GOLD_POSITION;
export const MINE_TILE=12;
// Vicki is 13.94 scene units tall (about 1.7 m). The actual near shore at
// the approach is z=-310.2; block the far side too so land cannot bypass it.
export const MINE_LAKE_LIMIT_Z=-310.2-2*(13.94/1.7);
export const mineLakeBlocked=(z:number,guardianDefeated:boolean)=>!guardianDefeated&&z<MINE_LAKE_LIMIT_Z;
export const MINE_CELLS=(()=>{const cells:Array<{x:number;z:number}>=[];for(let x=-48;x<=108;x+=6)for(let z=-384;z<=36;z+=6)if(mineWalkable(x,z,0))cells.push({x,z});return cells;})();
export function mineExitCrossed(x:number,z:number,opening:number){return opening>=.95&&Math.abs(x-MINE_EXIT.x)<MINE_DOOR_CLEAR_HALF&&z>=MINE_EXIT.z-.5&&z<=MINE_EXIT.z+1;}
export function mineWalkable(x:number,z:number,radius=1.8){return z>=-241?tunnelWalkable(x,z,radius):x-radius>=-48&&x+radius<=96&&z-radius>=-384;}
export function createAshMineLayout(assetBase:string){
 const root=new THREE.Group();root.name='Округлая пепельная пещера';const texture=new THREE.TextureLoader().load(assetBase+'muspelheim-basalt-wall.jpg');texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.colorSpace=THREE.SRGBColorSpace;
 const stone=new THREE.MeshStandardMaterial({color:'#c9c1b6',map:texture,roughness:1,side:THREE.DoubleSide});
 const tunnel=createMineTunnel(stone);root.add(tunnel.root);let model:ReturnType<typeof buildMineModel>|undefined,rails:ReturnType<typeof bendMineRails>|undefined,cart:ReturnType<typeof createMineGemCart>|undefined;
 const floorAt=(x:number,z:number)=>{if(z> -241)return mineTunnelFloor(x,z);const ground=model?.floorAt(x,z)??0,water=model?.waterAt(x,z);return water==null?ground:Math.max(ground,water-3);};
 // Keep the quest interaction point while the old gold container is removed.
 const chest=new THREE.Group();chest.name='Огненное золото';chest.position.set(MINE_TREASURE.x,0,MINE_TREASURE.z);root.add(chest);
 const exit=new THREE.Group();exit.name='Дверь выхода в Муспельхейм';exit.position.set(MINE_EXIT.x,0,MINE_EXIT.z);root.add(exit);
 const slidingDoor=createSlidingMineDoor(stone);exit.add(slidingDoor.root);
 for(const side of [-1,1]){const glow=new THREE.Mesh(new THREE.OctahedronGeometry(.7),new THREE.MeshBasicMaterial({color:'#80f0ce'}));glow.position.set(side*7,15,-1.5);exit.add(glow);}
 let opening=0,openingDoor=false;let crystals:ReturnType<typeof createMineCrystals>|undefined;
 return {root,chest,tunnel,slidingDoor,installDoor:slidingDoor.install,
  install:(source:THREE.Object3D,track:THREE.Object3D,cartSource?:THREE.Object3D,goldSources?:THREE.Object3D[])=>{model=buildMineModel(source);root.add(model.root);tunnel.setRockTexture(model.rockMap);rails=bendMineRails(track,floorAt);root.add(rails.root);if(cartSource){cart=createMineGemCart(cartSource,floorAt,goldSources?.[1]);root.add(cart.root);}if(goldSources)chest.add(createMineGoldBars(goldSources[0],floorAt));chest.position.y=floorAt(MINE_TREASURE.x,MINE_TREASURE.z);root.updateMatrixWorld(true);},
  installCrystals:(sources:THREE.Object3D[])=>{if(model){crystals=createMineCrystals(sources,tunnel.root,model.root,(x,z)=>z> -241?mineTunnelFloor(x,z):model!.floorAt(x,z)??NaN);root.add(crystals.root);}},get crystals(){return crystals;},
  get rails(){return rails;},get cart(){return cart;},floorAt,
  lakeBlocks:(x:number,z:number,guardianDefeated:boolean)=>mineLakeBlocked(z,guardianDefeated),
  walkable:(x:number,z:number,guardianDefeated=true)=>{if(mineLakeBlocked(z,guardianDefeated)||cart?.blocks(x,z))return false;if(z> -241)return tunnelWalkable(x,z);if(!model||!mineWalkable(x,z))return false;const y=model.floorAt(x,z);return y!==null&&!model.blocked(x,z,floorAt(x,z));},
  lineOfSight:(ax:number,az:number,bx:number,bz:number)=>{const n=Math.ceil(Math.hypot(bx-ax,bz-az)/3);for(let i=1;i<n;i++)if(!mineWalkable(ax+(bx-ax)*i/n,az+(bz-az)*i/n,0))return false;return true;},
  openExit:()=>{openingDoor=true;},updateExit:(dt:number)=>{opening=Math.min(1,opening+(openingDoor?dt:0));slidingDoor.update(opening);},get exitOpened(){return openingDoor;},get exitOpening(){return opening;},exitBlocks:(x:number,z:number)=>Math.abs(z-MINE_EXIT.z)<4.2&&(Math.abs(x)>MINE_DOOR_CLEAR_HALF||opening<.95),canExit:(x:number,z:number)=>mineExitCrossed(x,z,opening)};
}
