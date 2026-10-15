import assert from 'node:assert/strict';
import {createServer} from 'vite';
import {fileURLToPath} from 'node:url';
globalThis.window={};
const server=await createServer({root:fileURLToPath(new URL('../',import.meta.url)),server:{middlewareMode:true}});
try{
 const {createArtifactCombat}=await server.ssrLoadModule('/src/artifactCombat.ts');
 const {equipmentCombatStats:stats}=await server.ssrLoadModule('/src/combatStats.ts');
 const {DEF,ARTIFACT_INFO}=await server.ssrLoadModule('/src/core.tsx');
 const hero={hp:100,str:300,en:10},save={...DEF,equippedGear:['armor'],forgeLevels:{armor:598}};
 const base=stats(save,hero),belt=stats({...save,equippedArtifact:'midgard'},hero),shard=stats({...save,equippedArtifact:'niflheim'},hero);
 assert.equal(base.defense,300);assert.equal(shard.defense,345);assert.equal(shard.attack,base.attack);assert.equal(belt.attack,Math.round(base.attack*1.15));assert.equal(belt.defense,base.defense);assert.equal(belt.runeAttack,base.runeAttack);assert.equal(ARTIFACT_INFO.midgard.attack,undefined);assert.equal(ARTIFACT_INFO.niflheim.defense,undefined);
 for(const world of ['midgard','niflheim','muspelheim']){const normal=stats(save,hero,world);assert.equal(stats({...save,equippedArtifact:'midgard'},hero,world).attack,Math.round(normal.attack*1.15));assert.equal(stats({...save,equippedArtifact:'niflheim'},hero,world).defense,345);}
 const wet={...save,done:['niflheim:livingWater:used'],equippedArtifact:'midgard'};assert.equal(stats(wet,hero).attack,belt.attack*2);
 const combat=createArtifactCombat();
 assert.deepEqual(Array.from({length:10},()=>combat.weaponHit('midgard',100)),[100,100,100,100,130,100,100,100,100,130]);
 combat.reset();assert.equal(combat.weaponHit('midgard',0),0);assert.deepEqual(Array.from({length:5},()=>combat.weaponHit('midgard',100)),[100,100,100,100,130]);
 combat.reset();assert.equal(combat.survive('niflheim',70,300),70);assert.equal(combat.survive('niflheim',-500,300),45);assert.equal(combat.survive('niflheim',200,300),200);assert.equal(combat.survive('niflheim',0,300),0,'Healing and subsequent damage must not rearm rescue');
 combat.reset();assert.equal(combat.survive('niflheim',0,286),43);assert.equal(combat.survive('niflheim',0,286),0);combat.reset();assert.equal(combat.survive('niflheim',0,286),43);
 combat.reset();assert.equal(combat.survive('midgard',0,300),0);assert.equal(combat.weaponHit('niflheim',100),100);assert.equal(combat.survive('',0,300),0);assert.equal(combat.weaponHit(undefined,100),100);
 console.log('PASS: scaling +15% stats, every fifth successful weapon hit +30%, one lethal rescue at 15% HP, encounter reset, no consumable/stacking side effects.');
}finally{await server.close();}
