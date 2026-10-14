import {createServer} from 'vite';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
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
save=m.applyNiflheimSealEvent(save,'guardianDefeated:'+d.id);
assert.equal(m.canOpenNiflheimSeal(save,d.id),true);
const poor={...save,runeSteel:d.steel-1};assert.equal(m.applyNiflheimSealEvent(poor,'open:'+d.id),poor);
const before=save;save=m.applyNiflheimSealEvent(save,'open:'+d.id);
assert.equal(before.immortalityDrops-save.immortalityDrops,d.drops);assert.equal(before.runeSteel-save.runeSteel,d.steel);
for(const r of d.runes)assert.equal(before.lootCounts[r.id]-save.lootCounts[r.id],r.amount);
assert.equal(m.applyNiflheimSealEvent(save,'open:'+d.id),save);
assert.equal(m.sealGuardianHealth(41,d),d.hits*41);
if(i){assert(m.sealGuardianHealth(41,d)>m.sealGuardianHealth(41,m.NIFLHEIM_SEALS[i-1]));assert(m.sealGuardianDamage(1000,d)>m.sealGuardianDamage(1000,m.NIFLHEIM_SEALS[i-1]));}
assert.equal(m.allNiflheimSealsOpened(save.done),i===13);
const collected=applyDragonQuestEvent(save,'obsidian:'+NIFL_OBSIDIAN[0].id);
if(i<13)assert.equal(collected,save);else assert.notEqual(collected,save);
const contains=p=>m.sealContains(d,p);
const site=(await server.ssrLoadModule('/src/niflheimMapData.ts')).NIFL_LOCATIONS.find(l=>l.id===d.id);
const centre=d.id==='iceLake'?{x:-50,z:10}:d.id==='crossing'?{x:-72,z:5}:d.id==='forge'?{x:-18,z:85}:site;
assert(contains(centre),d.id+' centre ward');
for(let k=0;k<8;k++){const a=k*Math.PI/4,far={x:centre.x+60*Math.cos(a),z:centre.z+60*Math.sin(a)};assert(m.sealBlocksEntry(far,centre,contains),d.id+' approach '+k);assert(!m.sealBlocksEntry(centre,far,contains),d.id+' escape');}
}
console.log('PASS: 14 sequential seals, exact payment, rune deductions, insufficient resources, repeat protection, all guardian HP/damage steps, final obsidian gate, 112 entry directions and old-save exits.');
}finally{await server.close()}
