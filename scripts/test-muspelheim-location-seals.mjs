import assert from 'node:assert/strict';
import {createServer} from 'vite';
const server=await createServer({server:{middlewareMode:true}});
try{
 const m=await server.ssrLoadModule('/src/muspelheimLocationSeals.ts');
 const gates=m.MUSPELHEIM_LOCATION_SEALS;
 assert.equal(gates.length,9);assert.equal(gates.reduce((n,g)=>n+g.cost,0),3150000);
 assert.equal(new Set(gates.map(g=>g.runes.map(r=>r.id).sort().join(','))).size,9);
 for(const g of gates){assert.equal(g.runes.length,3);assert.equal(new Set(g.runes.map(r=>r.id)).size,3);}
 const make=()=>({immortalityDrops:4000000,done:[m.LOCATION_SEALS_VERSION],runes:[...new Set(gates.flatMap(g=>g.runes.map(r=>r.id)))],lootCounts:{},forgeLevels:{},equippedRune:'fehuWealth',muspelheimRunePair:['fehuWealth','kenazShard']});
 let s=make();for(const r of s.runes){s.lootCounts[r]=2;s.forgeLevels['rune:'+r]=2;}
 assert.equal(m.unlockMuspelheimLocation(s,'mine'),s,'route cannot be skipped');
 assert.equal(m.unlockMuspelheimLocation({...s,immortalityDrops:149999},'forge').done.length,1);
 const low={...s,forgeLevels:{...s.forgeLevels,'rune:kenazShard':1}};assert.equal(m.unlockMuspelheimLocation(low,'forge'),low,'tier II rejected');
 const absent={...s,runes:s.runes.filter(r=>r!=='uruzStrength')};assert.equal(m.unlockMuspelheimLocation(absent,'forge'),absent,'missing rune rejected');
 const old=s;s=m.unlockMuspelheimLocation(s,'forge');assert.equal(old.immortalityDrops,4000000);assert.equal(s.immortalityDrops,3850000);assert.equal(s.lootCounts.fehuWealth,1);assert.equal(s.forgeLevels['rune:fehuWealth'],2);assert.equal(m.unlockMuspelheimLocation(s,'forge'),s,'idempotent');
 const last={...old,lootCounts:{...old.lootCounts,fehuWealth:1}};const consumed=m.unlockMuspelheimLocation(last,'forge');assert(!consumed.runes.includes('fehuWealth'));assert.equal(consumed.equippedRune,'');assert.equal(consumed.forgeLevels['rune:fehuWealth'],undefined);assert(!consumed.muspelheimRunePair?.includes('fehuWealth'));
 for(const g of gates.slice(1)){s=m.unlockMuspelheimLocation(s,g.id);assert(m.locationIsOpen(s.done,g.id));}assert.equal(s.immortalityDrops,850000);
 const migration=m.migrateMuspelheimLocationSeals({...make(),done:['keep','muspelheim:threads:secret']});assert(migration.done.includes('keep'));assert(m.locationIsOpen(migration.done,'vault'));assert(!m.locationIsOpen(migration.done,'residence'));assert.equal(m.migrateMuspelheimLocationSeals(migration),migration);
 const fresh=m.migrateMuspelheimLocationSeals({...make(),done:[]});assert(!gates.some(g=>m.locationIsOpen(fresh.done,g.id)));
 for(const g of gates){for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){const from={x:g.cx+dx*(g.rx+10),z:g.cz+dz*(g.rz+10)},to={x:g.cx+dx*(g.rx+1),z:g.cz+dz*(g.rz+1)};assert(m.blockingLocationSeal([],from,to),g.id+' blocks side entry');assert(!m.blockingLocationSeal(gates.map(v=>m.locationSealKey(v.id)),from,to));}assert(!m.blockingLocationSeal([], {x:g.cx,z:g.cz},{x:g.cx+g.rx+10,z:g.cz}),g.id+' permits escape');}
 console.log('Location seals: prices, three distinct runes, tiers, atomic costs, replay, migration, route and collisions passed.');
}finally{await server.close();}
