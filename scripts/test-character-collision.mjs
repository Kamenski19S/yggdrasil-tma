import assert from 'node:assert/strict';import {buildSync} from 'esbuild';
const c=buildSync({entryPoints:['src/characterCollision.ts'],bundle:true,write:false,format:'esm',platform:'node'}).outputFiles[0].text;const {bodiesOverlap,bodyPathBlocked,moveAgainstBodies,bodyAt}=await import('data:text/javascript;base64,'+Buffer.from(c).toString('base64'));
const guard={x:0,y:0,z:0,radius:3.1,height:14,solid:true},vicki={x:-10,y:0,z:0,radius:2.3,height:14,solid:true};
const straight=moveAgainstBodies(vicki,{x:10,z:0},0,14,2.3,[guard]);assert(straight.x<-5.39,'Cannot tunnel through even with a long running step');assert(!bodiesOverlap({...vicki,...straight},guard));
const diagonal=moveAgainstBodies({x:-9,z:-4},{x:8,z:2},0,14,2.3,[guard]);assert(!bodiesOverlap({...vicki,...diagonal},guard));assert(Math.hypot(diagonal.x+9,diagonal.z+4)>2,'Can slide along the shoulder');
assert.deepEqual(moveAgainstBodies(vicki,{x:10,z:0},20,14,2.3,[guard]),{x:10,z:0},'Other elevation stays clear');assert.deepEqual(moveAgainstBodies(vicki,{x:10,z:0},0,14,2.3,[{...guard,solid:false}]),{x:10,z:0},'Defeated guards do not leave invisible walls');
assert(bodyPathBlocked({...guard,x:-10},{...guard,x:10}, {...vicki,x:0}),'Patrol cannot walk through a stationary Vicki');assert(!bodyPathBlocked({...guard,x:-10},{...guard,x:-12}, {...vicki,x:0}));
const escape=moveAgainstBodies({x:3,z:0},{x:7,z:0},0,14,2.3,[guard]);assert(escape.x>6.9,'Restored overlap can be escaped');assert(bodyPathBlocked({...guard,x:-5},{...guard,x:0}, {...vicki,x:0}));assert(!bodyPathBlocked({...guard,x:-3},{...guard,x:-8}, {...vicki,x:0}),'NPC can also escape a restored overlap');
assert.deepEqual(bodyAt({...guard,x:1,z:2},{x:0,y:0,z:0},{x:3,y:7,z:5}),{...guard,x:4,y:7,z:7});
const crowd=[guard,{...guard,x:12}];let p={x:-15,z:-10};for(let i=0;i<500;i++){const angle=i*.023,to={x:p.x+Math.cos(angle)*1.9,z:p.z+Math.sin(angle)*1.9};p=moveAgainstBodies(p,to,0,14,2.3,crowd);for(const b of crowd)assert(!bodiesOverlap({...vicki,...p},b));}
console.log('Character collision passed: continuous running/diagonal sweep, shoulder slide, elevation, defeated bodies, stationary Vicki, overlap escape and repeated crowd contacts.');
