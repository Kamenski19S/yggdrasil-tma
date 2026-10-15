import React,{useState} from 'react';
import type {Save} from './core';
import {RUNE_CATALOG} from './world';
import {exchangeRuneCount,runeExchangeQuote,RUNE_EXCHANGE_RATE} from './runeExchange';

export function RuneExchange({save,onExchange}:{save:Save;onExchange:(from:string,to:string,quantity:number)=>void}){
 const [from,setFrom]=useState(''),[to,setTo]=useState('algizGuard'),[units,setUnits]=useState('1');
 const quantity=Number(units),quote=runeExchangeQuote(save,from,to,quantity);
 const source=RUNE_CATALOG.find(r=>r.id===from),target=RUNE_CATALOG.find(r=>r.id===to);
 return <section className="rune-exchange" aria-labelledby="rune-exchange-title">
  <h3 id="rune-exchange-title">Обмен рун</h3>
  <p>Курс: {RUNE_EXCHANGE_RATE} лишние копии одной руны → 1 выбранная руна. Последняя копия остаётся у тебя. Капли и сталь не требуются.</p>
  <div className="rune-exchange-fields">
   <label>Отдать<select value={from} onChange={e=>{setFrom(e.target.value);setUnits('1');}}><option value="">Выбери лишнюю руну</option>{RUNE_CATALOG.map(r=>{const count=exchangeRuneCount(save,r.id);return <option key={r.id} value={r.id} disabled={count<RUNE_EXCHANGE_RATE+1}>{r.symbol} {r.name} · {count} шт.</option>;})}</select></label>
   <label>Получить<select value={to} onChange={e=>setTo(e.target.value)}>{RUNE_CATALOG.map(r=><option key={r.id} value={r.id} disabled={r.id===from}>{r.symbol} {r.name} · в запасе {exchangeRuneCount(save,r.id)}</option>)}</select></label>
   <label>Сколько получить<input type="number" inputMode="numeric" min="1" max={Math.max(1,quote.maxQuantity)} step="1" value={units} onChange={e=>setUnits(e.target.value)}/></label>
  </div>
  {source&&target&&<p className="rune-exchange-preview" aria-live="polite">{quote.canTrade?<><b>Отдаёшь: {source.name} ×{quote.cost}. Получаешь: {target.name} ×{quantity}.</b><br/>{source.name}: {quote.fromCount} → {quote.fromCount-quote.cost} · {target.name}: {quote.toCount} → {quote.toCount+quantity}.</>:from===to?'Выбери разные руны для обмена.':`Доступно обменов: ${quote.maxQuantity}. Для одного нужны минимум 4 копии: 3 на обмен и 1 остаётся у тебя.`}</p>}
  {!RUNE_CATALOG.some(r=>exchangeRuneCount(save,r.id)>=4)&&<p>Пока нет лишних рун для обмена. Собери минимум 4 одинаковые копии.</p>}
  <p className="rune-exchange-note">Усиление твоих рун сохраняется. Если выбранной руны ещё нет в запасе, получишь её на I уровне. При обмене она не экипируется автоматически.</p>
  <button type="button" disabled={!quote.canTrade} onClick={()=>onExchange(from,to,quantity)}>{quote.canTrade?`Обменять ${source!.name} ×${quote.cost} → ${target!.name} ×${quantity}`:'Выбери руны и количество'}</button>
 </section>;
}
