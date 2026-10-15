import React from 'react';
import {BASE} from './core';
import {RUNE_CATALOG} from './world';
export const RUNE_BUTTON_ART:Record<string,string>={
  fehuWealth:"rune_fehu.png",uruzStrength:"rune_uruz.png",thurisazStrike:"rune_thurisaz.png",ansuzWisdom:"rune_ansuz.png",raidoPath:"rune_raidho.png",kenazShard:"rune_kenaz.png",geboGift:"rune_gebo.png",wunjoLuck:"rune_wunjo.png",
  hagalazBreak:"rune_hagalaz.png",nauthizEndurance:"rune_nauthiz.png",isaGuard:"rune_isa.png",jeraHarvest:"rune_jera.png",eihwazResilience:"rune_eihwaz.png",perthroFate:"rune_perthro.png",algizGuard:"rune_algiz.png",sowiloLight:"rune_sowilo.png",
  tiwazValor:"rune_tiwaz.png",berkanoHeal:"rune_berkana.png",ehwazMotion:"rune_ehwaz.png",mannazMind:"rune_mannaz.png",laguzFlow:"rune_laguz.png",ingwazReserve:"rune_ingwaz.png",dagazDawn:"rune_dagaz.png",othalaLegacy:"rune_othala.png"
};
export const POTION_BUTTON_ART:Record<string,string>={
  lifeElixir:"elixir_life.png",northernMoss:"elixir_heal.png",frostDraught:"elixir_frost.png",hoddmimirElixir:"elixir_defense.png",manaElixir:"elixir_mana.png",strengthElixir:"elixir_damage.png",luckElixir:"elixir_luck.png"
};
export const runeButtonSrc=(id:string)=>`${BASE}img/models/${RUNE_BUTTON_ART[id]||"rune_kenaz.png"}`;
export const potionButtonSrc=(id:string)=>`${BASE}img/models/${POTION_BUTTON_ART[id]||"elixir_life.png"}?v=complete-frame-2`;


/** The same artwork, sizing and interaction labels in both worlds. */
export function BattleActions({equippedRune,potions,lastPotion='',attackHint='сила оружия',runeHint='рунический удар',hitDisabled=false,shieldDisabled=false,runeDisabled=false,potionDisabled=false,onHit,onShield,onRune,onPotion,onChooseRune}:{equippedRune:string;potions:string[];lastPotion?:string;attackHint?:string;runeHint?:string;hitDisabled?:boolean;shieldDisabled?:boolean;runeDisabled?:boolean;potionDisabled?:boolean;onHit:()=>void;onShield:()=>void;onRune:()=>void;onPotion:()=>void;onChooseRune:()=>void}){
 const runeName=RUNE_CATALOG.find(r=>r.id===equippedRune)?.name;
 return <div className="whisper-combat-actions">
  <button className="whisper-combat-action" disabled={hitDisabled} onClick={onHit}><span className="whisper-combat-icon custom-art" aria-hidden="true"><img src={`${BASE}img/models/ui_attack.png`} alt="" draggable={false}/></span><b>Удар оружием</b><small>{attackHint}</small></button>
  <button className="whisper-combat-action shield" disabled={shieldDisabled} onClick={onShield}><span className="whisper-combat-icon custom-art" aria-hidden="true"><img src={`${BASE}img/models/ui_shield.png`} alt="" draggable={false}/></span><b>Поднять щит</b><small>защита</small></button>
  <div className="battle-rune-cell"><button className="whisper-combat-action rune" disabled={runeDisabled} onClick={onRune}><span className="whisper-combat-icon custom-art" aria-hidden="true"><img src={runeButtonSrc(equippedRune)} alt="" draggable={false}/></span><b>{runeName?'Руна '+runeName:'Руна не выбрана'}</b><small>{runeHint}</small></button><button className="battle-rune-change" onClick={onChooseRune}>Сменить руну</button></div>
  <button className="whisper-combat-action rest" disabled={potionDisabled||!potions.length} onClick={onPotion}><span className="whisper-combat-icon custom-art" aria-hidden="true"><img src={potionButtonSrc(lastPotion||potions.find(id=>POTION_BUTTON_ART[id])||'lifeElixir')} alt="" draggable={false}/></span><b>Эликсир</b><small>{potions.length?potions.length+' в запасе':'нет'}</small></button>
 </div>;
}
