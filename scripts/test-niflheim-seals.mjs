import {createServer} from 'vite';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {PerspectiveCamera,Vector3} from 'three';
globalThis.window={};
const server=await createServer({root:fileURLToPath(new URL('../',import.meta.url)),server:{middlewareMode:true}});
try {
const m=await server.ssrLoadModule('/src/niflheimSeals.ts');
const {DEF}=await server.ssrLoadModule('/src/core.tsx');
const {applyDragonQuestEvent,NIFL_OBSIDIAN}=await server.ssrLoadModule('/src/niflheimDragonQuest.ts');
let save=structuredClone(DEF);save.immortalityDrops=2000000;save.runeSteel=1000;
for(const d of m.NIFLHEIM_SEALS)for(const r of d.runes){if(!save.runes.includes(r.id))save.runes.push(r.id);save.lootCounts[r.id]=100;}
assert.equal(m.applyNiflheimSealEvent(save,'open:forge'),save);
assert.equal(m.applyNiflheimSealEvent(save,'guardianDefeated:forge'),save);
for(const [i,d] of m.NIFLHEIM_SEALS.entries()){
assert.equal(m.sealAvailable(save.done,d.id),true);
assert.equal(m.applyNiflheimSealEvent(save,'open:'+d.id),save);
const beforeVictory=save;save=m.applyNiflheimSealEvent(save,'guardianDefeated:'+d.id);
assert.equal(save.immortalityDrops-beforeVictory.immortalityDrops,m.sealVictoryReward(d));
assert.equal(m.applyNiflheimSealEvent(save,'guardianDefeated:'+d.id),save);
assert.equal(m.settleNiflheimSealRewards(save),save);
assert.equal(m.canOpenNiflheimSeal(save,d.id),true);
const poor={...save,runeSteel:d.steel-1};assert.equal(m.applyNiflheimSealEvent(poor,'open:'+d.id),poor);
const before=save;save=m.applyNiflheimSealEvent(save,'open:'+d.id);
assert.equal(before.immortalityDrops-save.immortalityDrops,d.drops-m.sealOpeningReward(d));assert.equal(before.runeSteel-save.runeSteel,d.steel);
for(const r of d.runes)assert.equal(before.lootCounts[r.id]-save.lootCounts[r.id],r.amount);
assert.equal(m.applyNiflheimSealEvent(save,'open:'+d.id),save);
assert.equal(m.sealGuardianHealth(41,d),d.hits*41);
if(i){assert(m.sealGuardianHealth(41,d)>m.sealGuardianHealth(41,m.NIFLHEIM_SEALS[i-1]));assert(m.sealGuardianDamage(1000,d)>m.sealGuardianDamage(1000,m.NIFLHEIM_SEALS[i-1]));}
assert.equal(m.allNiflheimSealsOpened(save.done),i===m.NIFLHEIM_SEALS.length-1);
const collected=applyDragonQuestEvent(save,'obsidian:'+NIFL_OBSIDIAN[0].id);
if(i<m.NIFLHEIM_SEALS.length-1)assert.equal(collected,save);else assert.notEqual(collected,save);
const contains=p=>m.sealContains(d,p);
const site=(await server.ssrLoadModule('/src/niflheimMapData.ts')).NIFL_LOCATIONS.find(l=>l.id===d.id);
const centre=d.id==='iceLake'?{x:-50,z:10}:d.id==='crossing'?{x:-72,z:5}:d.id==='forge'?{x:-18,z:85}:site;
assert(contains(centre),d.id+' centre ward');
for(let k=0;k<8;k++){const a=k*Math.PI/4,far={x:centre.x+60*Math.cos(a),z:centre.z+60*Math.sin(a)};assert(m.sealBlocksEntry(far,centre,contains),d.id+' approach '+k);assert(!m.sealBlocksEntry(centre,far,contains),d.id+' escape');}
}
const {niflRiverBlocked}=await server.ssrLoadModule('/src/niflheimMapData.ts');
let legacy=structuredClone(DEF);legacy.done=[m.sealGuardianFlag('shelter'),m.sealOpenedFlag('shelter')];
const repaired=m.settleNiflheimSealRewards(legacy);assert.equal(repaired.immortalityDrops-legacy.immortalityDrops,4250);assert.equal(m.settleNiflheimSealRewards(repaired),repaired);
const living=m.sealById('livingWater');assert.equal(living.order,15);
const waterSave={...save,done:[...save.done,'niflheim:liberation:cleared:threeNornsWell','niflheim:dragon:forged']};
assert.notEqual(applyDragonQuestEvent(waterSave,'livingWater'),waterSave);
const lockedWater={...waterSave,done:waterSave.done.filter(f=>f!==m.sealOpenedFlag('livingWater'))};assert.equal(applyDragonQuestEvent(lockedWater,'livingWater'),lockedWater);
const alreadyWon={...legacy,done:['niflheim:dragon:defeated']};
assert.equal(m.settleNiflheimSealRewards(alreadyWon),alreadyWon,'An old dragon victory must not open the new seal');
const synthetic={...repaired,done:[...repaired.done,'niflheim:dragon:defeated',m.sealOpenedFlag('livingWater'),m.sealGuardianFlag('livingWater'),'niflheim:seal:livingWater:reward:victory','niflheim:seal:livingWater:reward:opening']};
const corrected=m.settleNiflheimSealRewards(synthetic);
assert(!m.sealOpened(corrected.done,'livingWater'));
assert(!m.sealGuardianDefeated(corrected.done,'livingWater'));
assert(corrected.done.includes('niflheim:dragon:defeated'));
assert(m.sealOpened(corrected.done,'shelter'));
assert.equal(corrected.immortalityDrops,synthetic.immortalityDrops);
assert.equal(corrected.runeSteel,synthetic.runeSteel);
assert.equal(m.openedSealCount(synthetic.done)-m.openedSealCount(corrected.done),1);
assert.equal(m.settleNiflheimSealRewards(corrected),corrected,'Repair must survive reloads');
assert.equal(m.applyNiflheimSealEvent(corrected,'guardianDefeated:livingWater'),corrected,'Reopened last seal still requires the previous seals');
const realVictory={...save,done:[...save.done,'niflheim:dragon:defeated']};
assert.equal(m.settleNiflheimSealRewards(realVictory),realVictory,'Keep a paid sequential opening');
assert.equal(niflRiverBlocked(living.x,living.z),false,'Living water seal must be reachable from the bank');
const third=m.sealById('frozenRiver');assert.equal(niflRiverBlocked(third.x,third.z),false,'Third seal must stand on the accessible bank');
const camera=new PerspectiveCamera(42,450/800,.1,200);camera.position.set(0,0,10);camera.lookAt(0,0,0);camera.updateMatrixWorld();
assert.match(m.sealViewHint(new Vector3(0,0,20),camera),/позади/);
assert.match(m.sealViewHint(new Vector3(-20,0,0),camera),/слева/);
assert.match(m.sealViewHint(new Vector3(20,0,0),camera),/справа/);
assert.match(m.sealViewHint(new Vector3(0,0,0),camera),/Ударь/);
console.log('PASS: 15 sequential seals, 10% victory and 15% opening rewards, idempotent legacy compensation, living water access, old dragon victory does not bypass new seal, synthetic opening repaired without balance loss, exact payment, rune deductions, insufficient resources, repeat protection, all guardian HP/damage steps, final obsidian gate, 120 entry directions, old-save exits, third seal bank placement and camera direction hints.');
}finally{await server.close()}
