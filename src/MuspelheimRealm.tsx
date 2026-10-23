import {readMineCheckpoint,beginMineVisit,endMineVisit} from './ashMineSession';
import {loadWorld} from './worldLoading';
import React,{useRef,useState} from 'react';
import type {Props as OutdoorProps} from './Muspelheim3D';
import type {CombatStats} from './combatStats';
import type {HeroWeapon} from './core';
import {mineProgress,type MineEvent} from './muspelheimMineQuest';
import {MINE_RETURN} from './muspelheimMineEntrance';
const Outdoor=React.lazy(()=>loadWorld('muspelheim',()=>import('./Muspelheim3D'),'muspelheim-outdoor'));
const Mine=React.lazy(()=>loadWorld('muspelheim',()=>import('./AshMine3D'),'ash-mine'));
type Props=Omit<OutdoorProps,'onEnterMine'|'minePaid'|'fireGold'|'onPayKeeper'> & {questDone:string[];fireGold:number;onMineEvent:(event:MineEvent)=>void;combatStats:CombatStats;fieldHp:number|null;onFieldHpChange:(hp:number)=>void;weapon:HeroWeapon;shieldAsset:string;shieldEquipped:boolean};
export default function MuspelheimRealm(props:Props){
 const [inside,setInside]=useState(()=>!!readMineCheckpoint());const returned=useRef(false);const progress=mineProgress(props.questDone,props.fireGold);
 return <React.Suspense fallback={<div className="content">{inside?'Открывается пепельная шахта…':'Возвращение в Муспельхейм…'}</div>}>
 {inside?<Mine questDone={props.questDone} onMineEvent={props.onMineEvent} combatStats={props.combatStats} fieldHp={props.fieldHp} onFieldHpChange={props.onFieldHpChange} weapon={props.weapon} shieldAsset={props.shieldAsset} shieldEquipped={props.shieldEquipped} onBack={()=>{endMineVisit();returned.current=true;setInside(false);}}/>:<Outdoor {...props} startPosition={returned.current?MINE_RETURN:props.startPosition} minePaid={progress.paid} onPayKeeper={()=>props.onMineEvent('pay')} onEnterMine={()=>{props.onMineEvent('enter');beginMineVisit();setInside(true);}}/>}
 </React.Suspense>;
}
