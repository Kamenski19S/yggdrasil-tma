import assert from 'node:assert/strict';
import {buildSync} from 'esbuild';
async function mod(path){const code=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three','react','react-dom/server']}).outputFiles[0].text.replace(/from "(three|react[^"]*)"/g,(_m,id)=>`from ${JSON.stringify(import.meta.resolve(id))}`);return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const {createGoldenBallLightning,createCeilingLightning}=await mod('src/muspelheimInteriorHazards.ts');
const balls=createGoldenBallLightning();assert.equal(balls.balls.length,5);const before=balls.balls.map(b=>b.group.position.clone());balls.update(1,{x:0,z:60});assert(balls.balls.every((b,i)=>!b.group.position.equals(before[i])));
const point=balls.balls[0].group.position.clone();assert(balls.update(.001,point),'Contact causes one hit');assert(!balls.update(.01,point),'Continuous contact has a cooldown');const paused=balls.balls[0].group.position.clone();assert(!balls.update(0,paused));assert(balls.balls[0].group.position.equals(paused),'Pausing freezes motion and damage');
for(let i=0;i<1000;i++){assert(!balls.update(.08,{x:0,z:60}),'Door approach stays safe');for(const b of balls.balls){assert(Math.abs(b.group.position.x)<=30);assert(b.group.position.z>=-65&&b.group.position.z<=35);}}
const ceiling=createCeilingLightning(()=>true);let hits=0;const hero={x:20,z:0};
for(let i=0;i<20;i++)ceiling.update(.08,hero);assert.equal(ceiling.phase,'warning');assert(!('marker' in ceiling),'Ceiling lightning has no ground warning marker');
const locked={...hero};for(let i=0;i<30;i++)hits+=Number(ceiling.update(0,hero));assert.equal(hits,0);assert.equal(ceiling.phase,'warning','Paused warning never strikes');
for(let i=0;i<16;i++)hits+=Number(ceiling.update(.08,hero));assert.equal(hits,1,'One hit per visible strike');assert.equal(ceiling.phase,'idle');
for(let i=0;i<20;i++)ceiling.update(.08,hero);assert.equal(ceiling.phase,'warning');hits=0;for(let i=0;i<16;i++)hits+=Number(ceiling.update(.08,{x:locked.x+12,z:locked.z}));assert.equal(hits,0,'Stepping outside the warning dodges the strike');
const safe=createCeilingLightning(()=>true);for(let i=0;i<100;i++)assert(!safe.update(.08,{x:0,z:60}));assert.equal(safe.phase,'idle');
const {renderToStaticMarkup}=await import('react-dom/server'),{createElement}=await import('react'),{MuspelheimActionWheel}=await mod('src/MuspelheimActionWheel.tsx');
const props={base:'/',shieldEquipped:true,onAttack(){},onShield(){},onMagic(){},onBarrier(){},onRunChange(){},onDoor(){}};
const idle=renderToStaticMarkup(createElement(MuspelheimActionWheel,props)),ready=renderToStaticMarkup(createElement(MuspelheimActionWheel,{...props,doorReady:true}));assert(idle.includes('door.webp'));assert(!idle.includes('✦'));assert(!idle.includes('door-ready'));assert(ready.includes('door-ready'));assert(!ready.includes('>Открыть'));assert.equal((ready.match(/<button/g)||[]).length,6);
console.log('PASS: five moving golden orbs, contact cooldown, safe entry, paused hazards, unmarked ceiling strike, dodge, one hit per strike, central door image without a visible label.');
