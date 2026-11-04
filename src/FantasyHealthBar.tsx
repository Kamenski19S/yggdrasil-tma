import React from 'react';
import './fantasyUI.css';
/** Stable colours identify combatants; labels and numbers remain beside each meter. */
export function healthColour(name:string){
 if(/vicki|вики|валькир/i.test(name))return '#45bf90';
 if(/сурт|surt|плам|огн/i.test(name))return '#f0a43b';
 if(/нидх|недх|nidh|некром|тёмн|тьм/i.test(name))return '#b37ee3';
 if(/кракен|озер|озёр|морвейн|вод/i.test(name))return '#43baca';
 if(/лёд|лед|холод/i.test(name))return '#72bfee';
 if(/ассас|воитель|патруль/i.test(name))return '#e16a78';
 const palette=['#de7462','#b98bdd','#e2ad54','#59b8c6'];let hash=0;for(const c of name)hash=(hash*31+c.charCodeAt(0))>>>0;return palette[hash%palette.length];
}
export function FantasyHealthBar({value,max,name='Vicki',colour}:{value:number;max:number;name?:string;colour?:string}){
 const safeMax=Number.isFinite(max)&&max>0?max:1,safeValue=Number.isFinite(value)?Math.max(0,Math.min(safeMax,value)):0;
 return <span className="fantasy-health" role="progressbar" aria-label={'Здоровье: '+name} aria-valuemin={0} aria-valuemax={safeMax} aria-valuenow={safeValue} style={{'--health-colour':colour??healthColour(name)} as React.CSSProperties}><span className="fantasy-health-track"><span className="fantasy-health-fill" style={{width:(safeValue/safeMax*100)+'%'}}/></span></span>;
}
