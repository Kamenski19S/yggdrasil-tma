import assert from 'node:assert/strict';
import {createServer} from 'vite';
const server=await createServer({server:{middlewareMode:true}});
try {
 const q=await server.ssrLoadModule('/src/muspelheimCraterQuest.ts');
 const {THREAD_SECRET,ASH_SOURCE_SEALED}=await server.ssrLoadModule('/src/runicCombinations.ts');
 const {CRATER_SWORD_KEY}=await server.ssrLoadModule('/src/muspelheimCraterLayout.ts');
 let s={done:[],runes:['sowiloLight','algizGuard'],muspelheimRunePair:['sowiloLight','algizGuard'],lootCounts:{},ownedWeapons:[],forgeLevels:{}};
 assert.equal(q.claimCraterSword(s),s);
 assert.equal(q.answerCraterTrial(s,'summit',2),s);
 assert.equal(q.answerCraterTrial(s,'foot',99),s);
 s=q.answerCraterTrial(s,'foot',0);assert(s.done.includes(q.craterAngerKey('foot')));
 s=q.answerCraterTrial(s,'foot',1);assert(s.done.includes(q.craterTrialKey('foot')));assert(!s.done.includes(q.craterAngerKey('foot')));
 assert.equal(q.answerCraterTrial(s,'foot',0),s);
 assert.equal(q.answerCraterTrial(s,'slope',0),s);
 s={...s,done:[...s.done,THREAD_SECRET]};s=q.answerCraterTrial(s,'slope',0);
 assert.equal(q.answerCraterTrial(s,'summit',2),s);
 s={...s,done:[...s.done,ASH_SOURCE_SEALED]};s=q.answerCraterTrial(s,'summit',2);
 assert(q.craterTrialsComplete(JSON.parse(JSON.stringify(s)).done));
 s=q.claimCraterSword(s);assert(s.done.includes(CRATER_SWORD_KEY));
 const again=q.claimCraterSword(s);assert.deepEqual(again,s);
 const legacy=q.claimCraterSword({...s,done:[CRATER_SWORD_KEY]});assert(legacy.done.includes(CRATER_SWORD_KEY));
 assert(!q.craterTaskReady([], 'foot',['sowiloLight','algizGuard'],[]));
 console.log('PASS: order, prerequisites, wrong answer/retry, persistence, reward gate, idempotence and legacy sword.');
}finally{await server.close();}
