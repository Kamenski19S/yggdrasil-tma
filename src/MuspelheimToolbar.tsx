import React from 'react';
import {BASE} from './core';
type Props={onMap:()=>void;onOverview:()=>void;onMill:()=>void;onTasks:()=>void;onInventory:()=>void;completed:number;total:number;lowHealth?:boolean};
/** Shared anchors keep every realm and interior on the same mobile layout. */
export function MuspelheimToolbar(p:Props){return <>
 <div className="mid3d-ui mid3d-top">
  <button className="mid3d-top-btn" aria-label="Карта Муспельхейма" onClick={p.onMap}><img className="mid3d-top-button-art" src={`${BASE}img/models/ui_map.png`} alt="" draggable={false}/></button>
  <button className="mid3d-realm-title muspelheim-realm-title" aria-label="Обзор Муспельхейма" onClick={p.onOverview}><img src={`${BASE}img/ui/muspelheim-title.webp`} alt="Муспельхейм" draggable={false}/></button>
  <button className="mid3d-top-btn" aria-label="Мельница капель бессмертия" onClick={p.onMill}><img className="mid3d-top-button-art" src={`${BASE}img/models/ui_mill.png`} alt="" draggable={false}/></button>
 </div>
 <button className="mid3d-ui mid3d-top-btn muspelheim-tasks" aria-label="Пройденные задания Муспельхейма" onClick={p.onTasks}><img className="mid3d-top-button-art" src={`${BASE}img/models/ui_tasks.webp`} alt="" draggable={false}/><small>{p.completed}/{p.total}</small></button>
 <button className="mid3d-ui mid3d-top-btn muspelheim-inventory" style={{filter:p.lowHealth?'drop-shadow(0 0 9px #ff2945)':undefined}} aria-label={p.lowHealth?'Опасно: мало здоровья. Открыть сумочку с зельями':'Запас рун и эликсиров'} onClick={p.onInventory}><img className="mid3d-top-button-art" src={`${BASE}img/models/ui_inventory.png`} alt="" draggable={false}/></button>
 </>;}
