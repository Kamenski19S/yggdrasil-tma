export type RunePair=[string,string];

/** Old saves start with their equipped rune; unavailable and duplicate choices are cleared. */
export function normalizeRunePair(value:unknown,owned:readonly string[],equipped=''):RunePair{
 const source=Array.isArray(value)?value:[equipped,''];
 const first=typeof source[0]==='string'&&owned.includes(source[0])?source[0]:'';
 const second=typeof source[1]==='string'&&owned.includes(source[1])&&source[1]!==first?source[1]:'';
 return [first,second];
}

export function selectPairRune(pair:RunePair,slot:0|1,id:string,owned:readonly string[]):RunePair{
 const next: RunePair=[...normalizeRunePair(pair,owned)];
 if(id&&!owned.includes(id))return next;
 // Moving a rune between slots swaps the previous choice, so one copy is enough.
 const other=slot===0?1:0;
 if(id&&next[other]===id)next[other]=next[slot];
 next[slot]=id;
 return next;
}
