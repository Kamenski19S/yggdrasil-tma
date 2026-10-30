import assert from 'node:assert/strict';
import {buildSync} from 'esbuild';
async function mod(file){const code=buildSync({entryPoints:[file],bundle:true,write:false,format:'esm',platform:'node'}).outputFiles[0].text;return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const {restoreMineGuardHp}=await mod('src/ashMineCombat.ts');
const {MINE_GUARDS,applyMineEvent,mineProgress,FIRE_GOLD_COST,FIRE_GOLD}=await mod('src/muspelheimMineQuest.ts');
let save=applyMineEvent({done:[],lootCounts:{},immortalityDrops:0},'enter');
for(const id of ['entrance','turn'])save=applyMineEvent(save,'guard:'+id);
const before=JSON.stringify(save),checkpoint={entrance:0,turn:0,store:123,foreman:420};
for(const guard of MINE_GUARDS){
 const defeated=mineProgress(save.done).defeated.includes(guard.id);
 assert.equal(restoreMineGuardHp(guard.hp,checkpoint[guard.id],defeated,true),guard.hp,'Every playtest visit restores '+guard.id);
 assert.equal(restoreMineGuardHp(guard.hp,checkpoint[guard.id],defeated,false),defeated?0:checkpoint[guard.id],'Normal combat retains defeated/damaged guards');
}
assert.equal(JSON.stringify(save),before,'Revival preserves the original save');
assert.equal(restoreMineGuardHp(200,200,true,false),0,'Quest defeat wins over a stale living checkpoint');
assert.equal(restoreMineGuardHp(200,0,false,true),200,'Checkpoint-only defeat also revives during playtesting');
for(const hp of [undefined,NaN,Infinity])assert.equal(restoreMineGuardHp(200,hp,false,false),200);
assert.equal(restoreMineGuardHp(200,300,false,false),200);
assert.equal(restoreMineGuardHp(200,-1,false,false),0);
for(const guard of MINE_GUARDS){
 const alreadyDefeated=mineProgress(save.done).defeated.includes(guard.id),previous=save;
 save=applyMineEvent(save,'guard:'+guard.id);
 if(alreadyDefeated)assert.equal(save,previous,'Revived guards cannot pay a second reward');
}
save=applyMineEvent(save,'guardian');save=applyMineEvent(save,'gold');
assert.equal(save.lootCounts[FIRE_GOLD],FIRE_GOLD_COST,'Prior and new victories still unlock gold');
const completed=save;
for(let visit=0;visit<3;visit++)for(const guard of MINE_GUARDS){
 assert.equal(restoreMineGuardHp(guard.hp,0,true,true),guard.hp);
 save=applyMineEvent(save,'guard:'+guard.id);
}
assert.equal(save,completed,'Repeated playtest visits preserve rewards and gold progression');
console.log('Mine guard restoration passed: missing ice/road guards, all four actors, partial and stale checkpoints, normal combat, repeat visits, one-time rewards and gold progression.');
