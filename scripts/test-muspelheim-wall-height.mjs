import assert from 'node:assert/strict';import {buildSync} from 'esbuild';
async function mod(path){const c=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(c).toString('base64'));}
const {rockWallLayout,rockWallBlocks,moveAlongRockWalls}=await mod('src/muspelheimRockWalls.ts');const {ravineRockLayout,ravineRockBlocks}=await mod('src/muspelheimRavineCrossings.ts');
const walls=rockWallLayout();let phantom=0;
for(let x=-519;x<-480;x++)for(let z=-125;z<-70;z++)if(rockWallBlocks(walls,x,z)&&!rockWallBlocks(walls,x,z,2,-82))phantom++;
assert.ok(phantom>500,'Reproduce heightless invisible perimeter wall on the ravine floor');
for(let x=-500;x<=-480;x+=.2){assert.ok(!rockWallBlocks(walls,x,-100,2,-82),'Perimeter above Vicki cannot block underground walking');const to={x:x-.1,z:-100};assert.deepEqual(moveAlongRockWalls(walls,{x,z:-100},to,-82),to);}
const cap=ravineRockLayout();assert.ok(ravineRockBlocks(cap,-520,-82,-92),'Visible end rocks still block passage');
const rock={kind:0,x:0,z:0,y:-5,yaw:0,width:12,height:25,depth:12};assert.ok(rockWallBlocks([rock],0,0,2,0),'At surface level wall collision remains');assert.ok(rockWallBlocks([rock],0,0,2,-15),'A head intersecting the rock must be blocked');assert.ok(!rockWallBlocks([rock],0,0,2,-21));assert.ok(!rockWallBlocks([rock],0,0,2,25));
assert.ok(!rockWallBlocks([rock],8.1,0,2,0),'Approach within body radius of the rock');assert.ok(rockWallBlocks([rock],7.9,0,2,0));
const {MINE_PATH,MINE_RETURN,mineApproachRocks}=await mod('src/muspelheimMineEntrance.ts');
for(const p of [...MINE_PATH,MINE_RETURN])assert.ok(!rockWallBlocks(walls,p.x,p.z,2,'y' in p?p.y:-110),'Mine descent and return stay clear of upper walls');
for(let x=-480;x<=-411;x+=.25)assert.ok(!rockWallBlocks(walls,x,-100,2,-82),'Floor approach to shaft stays open');
console.log({phantom});console.log('Ravine wall regression: underground movement ignores upper perimeter rocks, visible end caps and surface walls remain solid, close approach and mine access passed.');
