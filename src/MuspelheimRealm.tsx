import {readAshLordVisit,readAshLordReturn,beginAshLordVisit,endAshLordVisit} from './ashLordSession';
import {readThreadVaultVisit,saveThreadVaultVisit,endThreadVaultVisit} from './threadVaultSession';
import {DARK_VAULT_RETURN} from './muspelheimDarkVault';
import {readMineCheckpoint,beginMineVisit,endMineVisit} from './ashMineSession';
import {loadWorld} from './worldLoading';
import React,{useRef,useState} from 'react';
import type {Props as OutdoorProps} from './Muspelheim3D';
import type {CombatStats} from './combatStats';
import type {HeroWeapon} from './core';
import {mineProgress,type MineEvent} from './muspelheimMineQuest';
import {MINE_RETURN} from './muspelheimMineEntrance';
const Outdoor=React.lazy(()=>loadWorld('muspelheim',()=>import('./Muspelheim3D'),'muspelheim-outdoor'));
const Lord=React.lazy(()=>loadWorld('muspelheim',()=>import('./AshLord3D'),'ash-lord-hall'));
const Vault=React.lazy(()=>loadWorld('muspelheim',()=>import('./ThreadVault3D'),'thread-vault'));
const Mine=React.lazy(()=>loadWorld('muspelheim',()=>import('./AshMine3D'),'ash-mine'));
type Props=Omit<OutdoorProps,'onEnterMine'|'minePaid'|'fireGold'|'onPayKeeper'|'onEnterVault'|'onEnterLord'> & {questDone:string[];fireGold:number;onMineEvent:(event:MineEvent)=>void;combatStats:CombatStats;fieldHp:number|null;onFieldHpChange:(hp:number)=>void;onDrainDrops:(amount:number)=>void;weapon:HeroWeapon;shieldAsset:string;shieldEquipped:boolean};
export default function MuspelheimRealm(props:Props){
 const [respawnRequest,setRespawnRequest]=useState(0);
 const [lordInside,setLordInside]=useState(()=>!!readAshLordVisit()),lordReturn=useRef(readAshLordReturn());
 const [vaultInside,setVaultInside]=useState(()=>!!readThreadVaultVisit()),vaultReturned=useRef(false);
 const [inside,setInside]=useState(()=>!!readMineCheckpoint());const returned=useRef(false);const progress=mineProgress(props.questDone,props.fireGold);const indoors=lordInside||vaultInside||inside;const outdoorVisited=useRef(false);if(!indoors)outdoorVisited.current=true;
 const hud={inventory:props.inventory,questDone:props.questDone,gateOpen:props.gateOpen,onOpenMill:()=>props.onOpenMill(lordReturn.current??(vaultInside?DARK_VAULT_RETURN:inside?MINE_RETURN:props.startPosition??MINE_RETURN))};
 return <React.Suspense fallback={<div className="content" style={{flex:1,background:'#18110e',color:'#f0d597',display:'grid',placeItems:'center'}}>{lordInside?'Открывается резиденция Владыки…':vaultInside?'Открывается Хранилище трёх нитей…':inside?'Открывается пепельная шахта…':'Возвращение в Муспельхейм…'}</div>}>
 {lordInside?<Lord hud={hud} weapon={props.weapon} shieldAsset={props.shieldAsset} shieldEquipped={props.shieldEquipped} fieldHp={props.fieldHp} maxHp={props.combatStats.maxHp} onBack={()=>{lordReturn.current=readAshLordReturn();endAshLordVisit();vaultReturned.current=false;returned.current=false;setLordInside(false);}}/>:vaultInside?<Vault hud={hud} weapon={props.weapon} shieldAsset={props.shieldAsset} shieldEquipped={props.shieldEquipped} fieldHp={props.fieldHp} maxHp={props.combatStats.maxHp} onBack={()=>{endThreadVaultVisit();vaultReturned.current=true;lordReturn.current=null;returned.current=false;setVaultInside(false);}}/>:inside?<Mine onRespawn={()=>{endMineVisit();endAshLordVisit();endThreadVaultVisit();returned.current=vaultReturned.current=false;lordReturn.current=null;props.onFieldHpChange(0);setRespawnRequest(n=>n+1);setInside(false);}} hud={hud} onDrainDrops={props.onDrainDrops} questDone={props.questDone} onMineEvent={props.onMineEvent} combatStats={props.combatStats} fieldHp={props.fieldHp} onFieldHpChange={props.onFieldHpChange} weapon={props.weapon} shieldAsset={props.shieldAsset} shieldEquipped={props.shieldEquipped} onBack={()=>{endMineVisit();returned.current=true;lordReturn.current=null;setInside(false);}}/>:null}

 {outdoorVisited.current&&<div style={{display:indoors?'none':'flex',flex:1,minHeight:0,background:'#24110e'}}><Outdoor {...props} respawnRequest={respawnRequest} suspended={indoors} startPosition={lordReturn.current??(vaultReturned.current?DARK_VAULT_RETURN:returned.current?MINE_RETURN:props.startPosition)} onEnterLord={p=>{lordReturn.current=p;beginAshLordVisit(p);setLordInside(true);}} onEnterVault={()=>{lordReturn.current=null;saveThreadVaultVisit();setVaultInside(true);}} minePaid={progress.paid} onPayKeeper={()=>props.onMineEvent('pay')} onEnterMine={()=>{lordReturn.current=null;vaultReturned.current=false;props.onMineEvent('enter');beginMineVisit();setInside(true);}}/></div>}
 </React.Suspense>;
}
