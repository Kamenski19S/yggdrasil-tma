import type {Save} from './core';
export const forgeTemperingLimit=(realm:string,weaponOrShield:boolean)=>realm==='muspelheim'?(weaponOrShield?40:30):realm==='niflheim'?(weaponOrShield?20:15):(weaponOrShield?10:5);
export function gearProtection(save:Save,realm:string){
 const has=(id:'armor'|'helmet'|'boots')=>save.equippedGear.includes(id),level=(id:'armor'|'helmet'|'boots')=>has(id)?Math.max(0,save.forgeLevels[id]||0):0;
 const a=level('armor'),h=level('helmet'),b=level('boots'),fire=realm==='muspelheim';
 return {hp:(has('armor')?(fire?30+18*a:8+8*a):0)+(has('helmet')?(fire?12+8*h:3+3*h):0)+(fire&&has('boots')?8+3*b:0),
 defense:Math.floor((a+h)/2)+(has('armor')?1:0)+(fire?Math.floor(b/5):0),
 damageReduction:fire?Math.min(.6,(has('armor')?.08+a*.007:0)+(has('helmet')?.04+h*.003:0)+(has('boots')?.02+b*.002:0)):0,
 fireResistance:fire?Math.min(.45,(has('armor')?.05+a*.004:0)+(has('helmet')?.03+h*.002:0)+(has('boots')?.02+b*.002:0)):0,
 controlResistance:fire?Math.min(.35,b*.01):0};
}
