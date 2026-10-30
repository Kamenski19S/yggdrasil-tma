import React,{useEffect,useState} from 'react';
import {MuspelheimToolbar} from './MuspelheimToolbar';
import {InventorySection} from './inventory';
import {mineProgress,MINE_GUARDS} from './muspelheimMineQuest';
import {CRATER_SWORD_KEY} from './muspelheimCraterLayout';
import {WORLD_OUTLINE,muspelheimMapPoint} from './muspelheimTerrain';
import {MINE_DOOR} from './muspelheimMineEntrance';
import {DARK_VAULT_POSITION} from './muspelheimDarkVault';
import {FORTRESS_POSITION} from './muspelheimFortress';
export type InteriorHUDData={inventory:Omit<React.ComponentProps<typeof InventorySection>,'kind'>;questDone:string[];gateOpen:boolean;onOpenMill:()=>void};
type Props={data:InteriorHUDData;location:string;hp:number;stop:()=>void;onPauseChange:(paused:boolean)=>void;onMineHelp?:()=>void};
export function MuspelheimInteriorHUD(p:Props){
 const [panel,setPanel]=useState<'map'|'overview'|'tasks'|'inventory'|null>(null),progress=mineProgress(p.data.questDone);
 const tasks=[{name:'Получить меч кузнеца жерла',done:p.data.questDone.includes(CRATER_SWORD_KEY)},{name:'Открыть первые врата',done:p.data.gateOpen},{name:'Найти пепельную шахту',done:progress.entered},...MINE_GUARDS.map(g=>({name:g.name,done:progress.defeated.includes(g.id)})),{name:'Победить хранителя подземного озера',done:progress.guardianDefeated},{name:'Забрать огненное золото',done:progress.goldTaken},{name:'Передать золото хранителю врат',done:progress.paid}];
 const open=(value:typeof panel)=>{p.stop();p.onPauseChange(!!value);setPanel(value);};
 useEffect(()=>()=>p.onPauseChange(false),[]);
 return <><MuspelheimToolbar onMap={()=>open('map')} onOverview={()=>open('overview')} onTasks={()=>open('tasks')} onInventory={()=>open('inventory')} onMill={()=>{p.stop();p.data.onOpenMill();}} completed={tasks.filter(t=>t.done).length} total={tasks.length}/>
 {panel&&<div className="muspelheim-ui-overlay"><section className="muspelheim-ui-panel" role="dialog" aria-modal="true" aria-label={panel==='inventory'?'Запас Vicki':panel==='tasks'?'Пройденные задания Муспельхейма':panel==='map'?'Карта Муспельхейма':'Обзор Муспельхейма'}>
 {panel==='inventory'?<><h3>Запас Vicki</h3><InventorySection {...p.data.inventory} kind="potions" hp={p.hp}/><InventorySection {...p.data.inventory} kind="runes" hp={p.hp}/></>:panel==='tasks'?<><h3>Пройденные задания</h3>{tasks.map(t=><p key={t.name}>{t.done?'✓':'○'} {t.name}</p>)}{p.onMineHelp&&<button className="muspelheim-btn" onClick={()=>{open(null);p.onMineHelp?.();}}>Задание шахты и подсказки</button>}</>:panel==='map'?<><h3>Карта Муспельхейма</h3><p>Сейчас: {p.location}. Выход ведёт обратно в Муспельхейм.</p><svg viewBox="0 0 300 220" className="muspelheim-interior-map" aria-label="Шахта, резиденция и хранилище на карте мира"><polygon points={WORLD_OUTLINE.map(([x,z])=>{const m=muspelheimMapPoint(x,z);return `${m.x},${m.y}`;}).join(' ')} fill="#573122" stroke="#b99154" strokeWidth="2"/>{[{name:'Шахта',...MINE_DOOR},{name:'Хранилище',...DARK_VAULT_POSITION},{name:'Резиденция',...FORTRESS_POSITION}].map(point=>{const m=muspelheimMapPoint(point.x,point.z);return <g key={point.name}><circle cx={m.x} cy={m.y} r="4" fill="#ffdb87"/><text x={m.x+6} y={m.y+3} fontSize="9" fill="#ffe2ac">{point.name}</text></g>;})}</svg></>:<><h3>{p.location}</h3><p>Муспельхейм · мир первозданного огня.</p><p>Карта, задания и запас рун доступны здесь так же, как снаружи. Вернись через входную дверь, чтобы продолжить путь к Сурту.</p><div className="muspelheim-overview-actions"><button className="muspelheim-btn" onClick={()=>open('map')}>Карта</button><button className="muspelheim-btn" onClick={()=>open('tasks')}>Задания</button></div></>}
 <button className="muspelheim-btn" onClick={()=>open(null)}>Вернуться в игру</button></section></div>}</>;
}
