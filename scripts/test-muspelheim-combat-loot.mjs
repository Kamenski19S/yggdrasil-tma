import assert from 'node:assert/strict';
import {buildSync} from 'esbuild';
import {writeFileSync,unlinkSync} from 'node:fs';
globalThis.window={};
const bundle=new URL('./.combat-loot-test.mjs',import.meta.url);
buildSync({stdin:{contents:`export {rollMuspelheimCombatLoot} from './src/muspelheimCombatLoot';export {applyBanditLoot} from './src/banditLoot';export {applyMineEvent} from './src/muspelheimMineQuest';export {RUNE_CATALOG,POTION_CATALOG} from './src/world';export {createAssassinCombat} from './src/muspelheimAssassinCombat';`,resolveDir:process.cwd()},bundle:true,format:'esm',platform:'node',packages:'external',outfile:bundle.pathname,logLevel:'silent'});
try{
 const {rollMuspelheimCombatLoot:roll,applyBanditLoot:apply,applyMineEvent:mine,RUNE_CATALOG:runes,POTION_CATALOG:potions,createAssassinCombat}=await import(bundle.href);
 const seed={runes:[],potions:[],ownedWeapons:[],immortalityDrops:0,lootCounts:{},equippedRune:'',done:[]};
 for(const random of [()=>0,()=>.5,()=>.999999]){const loot=roll(random);assert(loot.drops>=80&&loot.drops<=120);assert.equal(loot.runes.length,1);assert.equal(loot.potions.length,1);assert(runes.some(r=>r.id===loot.runes[0]));assert(potions.some(p=>p.id===loot.potions[0]));const next=apply(seed,loot);assert.equal(next.immortalityDrops,loot.drops);assert.equal(next.lootCounts[loot.runes[0]],1);assert.equal(next.lootCounts[loot.potions[0]],1);assert.equal(next.potions.length,1);}
 const seen=new Set();for(let i=0;i<7;i++){const values=[0,0,(i+.1)/7];seen.add(roll(()=>values.shift()).potions[0]);}assert.equal(seen.size,7,'All seven elixirs can drop');
 const loot=roll(()=>0),entered=mine(seed,'enter',loot),win=mine(entered,'guard:entrance',loot);assert.equal(entered.potions.length,0);assert.equal(win.immortalityDrops,160,'Mine keeps its existing currency reward');assert.equal(win.potions.length,1);assert.equal(win.runes.length,1);assert.equal(mine(win,'guard:entrance',loot),win,'Repeated quest event cannot award loot again');
 let deaths=0;const enemy=createAssassinCombat({x:0,y:0,z:0},{onDefeated:at=>{if(at!==null)deaths++;}});enemy.hurt(140);enemy.hurt(140);enemy.hurt(140);enemy.hurt(140);assert.equal(deaths,1,'One death event per life');
 console.log('PASS: reward ranges, rune and elixir inventory counts, all seven elixirs, mine reward preservation and duplicate death protection.');
}finally{unlinkSync(bundle);}
