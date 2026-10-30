import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
async function mod(path){const c=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(c).toString('base64'));}
const {mineApproachControlYaw,settleMineApproachView}=await mod('src/mineApproachNavigation.ts');
const {screenMoveToWorld,updateFollowCamera}=await mod('src/muspelheimCamera.ts');
const {MINE_PATH,MINE_RETURN,mineApproachCameraAt,mineApproachFloorAt}=await mod('src/muspelheimMineEntrance.ts');
const wrap=x=>Math.atan2(Math.sin(x),Math.cos(x));
for(const fps of [20,60,120])for(const direction of [1,-1]){
 const route=direction===1?MINE_PATH:[MINE_RETURN,...MINE_PATH.slice().reverse()];
 let heldYaw=1.8,previousYaw=null,steps=0;
 const follow={yaw:heldYaw,targetYaw:-heldYaw,turnTime:10};
 for(let k=1;k<route.length;k++){
  const a=route[k-1],b=route[k],length=Math.hypot(b.x-a.x,b.z-a.z),count=Math.max(1,Math.ceil(length/(26/fps)));
  for(let j=0;j<count;j++){
   const t=j/count,x=a.x+(b.x-a.x)*t,z=a.z+(b.z-a.z)*t,y=mineApproachFloorAt(x,z);
   const view=mineApproachCameraAt(x,y,z);assert.ok(view);
   const yaw=settleMineApproachView(follow,view.position,view.target);
   heldYaw=mineApproachControlYaw(heldYaw,yaw,true);
   const sx=.45,sz=direction===1?-1:1;
   const move=screenMoveToWorld(sx,sz,heldYaw),c=Math.cos(yaw),s=Math.sin(yaw);
   assert.ok(Math.abs(c*move.x-s*move.z-sx)<1e-10,'Horizontal input follows the visible screen during a held touch');
   assert.ok(Math.abs(s*move.x+c*move.z-sz)<1e-10,'Forward/back input follows the visible screen in either direction');
   assert.equal(follow.turnTime,0,'No deferred camera reversal builds up on the stairs');
   assert.ok(Math.abs(wrap(follow.targetYaw-yaw))<1e-10);
   if(previousYaw!==null)assert.ok(Math.abs(wrap(yaw-previousYaw))<.15,'No abrupt spin along the curved route');
   previousYaw=yaw;steps++;
  }
 }
 assert.ok(steps>40);
 // Leaving the route while holding the stick keeps the last visible axes until release.
 const finalYaw=follow.yaw;
 for(let i=0;i<fps;i++){heldYaw=mineApproachControlYaw(heldYaw,finalYaw,true);assert.equal(heldYaw,finalYaw);}
 assert.equal(mineApproachControlYaw(heldYaw,finalYaw+.7,false),heldYaw,'Normal outdoor gesture axes remain unchanged');
 settleMineApproachView(follow,{x:0,z:0},{x:0,z:0});assert.ok(Number.isFinite(follow.yaw));
 // Releasing then moving normally still permits the ordinary follow camera to turn.
 for(let i=0;i<fps;i++)updateFollowCamera(follow,1,0,1/fps);
 assert.ok(Number.isFinite(follow.yaw));
}
// A lip sampled from uneven terrain blends continuously into the exact walking deck.
for(const terrain of [-79,-75,-86]){let last=null;for(let d=14;d>=0;d-=.02){const p=MINE_PATH[0],x=p.x+d,z=p.z,y=mineApproachFloorAt(x,z,terrain)??terrain;if(last!==null)assert.ok(Math.abs(y-last)<.06,'No step appears where the analytic floor meets terrain');last=y;}}
const css=readFileSync('src/muspelheimUI.css','utf8'),wheel=css.slice(css.indexOf('.muspelheim-action-wheel{'));
assert.ok(!/grayscale|sepia|brightness\\(\\.84\\)/.test(wheel),'Native warm gold is preserved');
assert.ok(wheel.includes('.muspelheim-action-wheel.is-open{background:transparent}'));
assert.ok(wheel.includes('background:transparent;color:#ffe5a5;text-shadow:none'));
assert.ok(!/drop-shadow|box-shadow:0/.test(wheel),'No black shadow under action medals or labels');
console.log('Mine approach: stable held-touch axes, bidirectional route, no queued reversal, continuous lip, bright native gold and shadow-free controls passed at 20/60/120 FPS.');
