export type IsaRune='ansuz'|'raido'|'isa'|'inguz';
export type IsaPhase='idle'|'closing'|'restoring'|'complete'|'failed';
export const ISA_TRAP={seconds:60,restoreSeconds:3.5,slideSeconds:.55,openHalfWidth:15,closedHalfWidth:2.1};
export const ISA_SLOTS=[{x:0,y:6.3,rotation:0},{x:0,y:2.55,rotation:0},{x:0,y:0,rotation:Math.PI},{x:-2.2,y:-1.28,rotation:0},{x:2.2,y:-1.28,rotation:0}];
export const ISA_LINKS:readonly (readonly [number,number])[]=[[0,1],[1,2],[2,3],[2,4],[1,3],[1,4]];
const initial=():Array<IsaRune|null>=>[null,'ansuz','raido','isa','inguz'];
export function createIsaWallPuzzle(completed=false){
 let board=initial(),phase:IsaPhase=completed?'complete':'idle',elapsed=0,restoreTime=0,restoreFrom=15,halfWidth=15;
 let sliding:{from:number;to:number;rune:IsaRune;time:number}|null=null;
 const events:Array<'entered'|'aligned'|'solved'|'restored'|'failed'>=[];
 if(completed)board=[null,'ansuz','isa','raido','inguz'];
 const canMove=(slot:number)=>phase==='closing'&&!sliding&&!!board[slot]&&ISA_LINKS.some(([a,b])=>(a===slot&&board[b]===null)||(b===slot&&board[a]===null));
 return {get board(){return board as readonly (IsaRune|null)[];},get phase(){return phase;},get halfWidth(){return halfWidth;},get elapsed(){return elapsed;},get sliding(){return sliding;},get completed(){return phase==='complete';},get isaCentered(){return board[2]==='isa';},get triangleAssembled(){return board[0]===null&&board.slice(1).every(Boolean)&&!sliding;},get active(){return phase==='closing'||phase==='restoring';},get cold(){return phase==='restoring'||phase==='complete'?1:0;},canMove,
  enter(){if(phase!=='idle')return false;phase='closing';events.push('entered');return true;},
  move(slot:number){if(!canMove(slot))return false;const to=ISA_LINKS.flatMap(([a,b])=>a===slot&&board[b]===null?[b]:b===slot&&board[a]===null?[a]:[])[0];sliding={from:slot,to,rune:board[slot]!,time:0};return true;},
  step(dt:number){if(dt<=0)return;if(phase==='closing'){
   if(sliding){sliding.time=Math.min(ISA_TRAP.slideSeconds,sliding.time+dt);if(sliding.time>=ISA_TRAP.slideSeconds){const wasCentered=board[2]==='isa';board[sliding.to]=sliding.rune;board[sliding.from]=null;sliding=null;if(!wasCentered&&board[2]==='isa')events.push('aligned');if(board[2]==='isa'&&board[0]===null&&board.slice(1).every(Boolean)){phase='restoring';restoreFrom=halfWidth;restoreTime=0;events.push('solved');}}}
   if(phase==='closing'){elapsed=Math.min(ISA_TRAP.seconds,elapsed+dt);halfWidth=15-(15-ISA_TRAP.closedHalfWidth)*elapsed/ISA_TRAP.seconds;if(elapsed>=ISA_TRAP.seconds)this.fail();}
  }else if(phase==='restoring'){restoreTime=Math.min(ISA_TRAP.restoreSeconds,restoreTime+dt);const t=restoreTime/ISA_TRAP.restoreSeconds,s=t*t*(3-2*t);halfWidth=restoreFrom+(15-restoreFrom)*s;if(restoreTime>=ISA_TRAP.restoreSeconds){halfWidth=15;phase='complete';events.push('restored');}}},
  fail(){if(phase!=='closing')return;phase='failed';sliding=null;events.push('failed');},
  reset(){if(phase==='complete')return;phase='idle';elapsed=restoreTime=0;halfWidth=15;sliding=null;board=initial();events.length=0;},
  takeEvent(){return events.shift()??null;},
 };
}
