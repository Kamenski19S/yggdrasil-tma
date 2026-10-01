import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { clone as cloneSkinned } from "three/examples/jsm/utils/SkeletonUtils.js";
import { BASE, type GatherKind, type HeroWeapon, cachedGlbBuffer, textureSteelOnWeapon } from './core';
import { POTION_CATALOG, RUNE_CATALOG } from './world';



export function SparkDrop(){return <img className="spark-drop" src={`${BASE}img/BackgroundEraser_20260930_010245371.png`} alt="" aria-label="Капля бессмертия"/>;}


export function InventorySection({kind,potions,runes,equippedRune,lootCounts,runeLevels,hp,maxHp,frostGuard,onUsePotion,onEquipRune,onFuseRune}:{kind:'potions'|'runes';potions:string[];runes:string[];equippedRune:string;lootCounts?:Record<string,number>;runeLevels?:Record<string,number>;hp:number;maxHp:number;frostGuard:number;onUsePotion:(id:string)=>void;onEquipRune:(id:string)=>void;onFuseRune?:(id:string)=>void}){
  const roman=(level:number)=>level>=3?'III':level===2?'II':'I';
  return <section className="inventory-section"><h3>{kind==='potions'?'🧪 Эликсиры':'ᛉ Руны'}</h3><div className="inventory-list">
    {kind==='potions'?POTION_CATALOG.map(item=>{
      const count=potions.filter(id=>id===item.id).length;
      const unusable=item.id==='frostDraught'
        ? frostGuard>=2
        : item.id==='hoddmimirElixir'
          ? hp>=maxHp&&frostGuard>=2
          : hp>=maxHp;
      return <div key={item.id} className={'inventory-item'+(count?'':' empty')}><span className="inventory-symbol">{item.symbol}</span><span className="inventory-detail"><b>{item.name} · {count} шт.</b><small>{item.effect}</small></span><button disabled={!count||unusable} onClick={()=>onUsePotion(item.id)}>{unusable&&count?'Не требуется':'Применить'}</button></div>;
    }):RUNE_CATALOG.map(item=>{
      const owned=runes.includes(item.id),active=equippedRune===item.id;
      const count=owned?Math.max(1,Number(lootCounts?.[item.id])||1):0;
      const level=owned?Math.min(3,1+Math.max(0,Number(runeLevels?.['rune:'+item.id])||0)):1;
      const nextLevel=Math.min(3,level+1);
      return <div key={item.id} className={'inventory-item'+(owned?'':' empty')}><span className="inventory-symbol">{item.symbol}</span><span className="inventory-detail"><b>{item.name} · {owned?count+' шт. · ур. '+roman(level):'не найдена'}</b><small>{item.effect}{owned&&level>1?' Усиление: уровень '+roman(level)+'.':''}</small></span><span className="inventory-actions"><button className={active?'active':''} disabled={!owned||active} onClick={()=>onEquipRune(item.id)}>{active?'Активна':'Выбрать'}</button>{owned&&onFuseRune&&<button className="fuse" disabled={count<3||level>=3} onClick={()=>onFuseRune(item.id)}>{level>=3?'Максимум':count>=3?'Слить 3 → '+roman(nextLevel):'Нужно 3'}</button>}</span></div>;
    })}
  </div>{kind==='runes'&&<small className="dim" style={{display:'block',marginTop:8}}>Три одинаковые руны можно слить в одну усиленную. При слиянии остаётся одна руна, а две лишние копии расходуются. Максимальный уровень — III.</small>}</section>;
}



export const FORGE_WEAPON_MODELS = [
  ['Sword.glb','Меч','default'],['Sword_2.glb','Меч II','sword2'],['Sword_Big.glb','Большой меч','swordBig'],['Sword_Golden.glb','Золотой меч','swordGolden'],
  ['Axe.glb','Топор','axe'],['Axe_Small.glb','Малый топор','axeSmall'],['Axe_Double.glb','Двойной топор','axeDouble'],['Spear.glb','Копьё','spear'],
  ['Hammer_Small.glb','Малый молот','mace'],['Hammer_Double.glb','Двойной молот','hammerDouble'],['Dagger.glb','Боевой кинжал','knife'],['Dagger_2.glb','Кинжал II','dagger2'],
  ['Claymore.glb','Клеймор','claymore'],['Scythe.glb','Боевая коса','scythe'],['Shield_Round.glb','Круглый щит','shield'],['Shield_Round_2.glb','Серебряный щит',''],
  ['Shield_Heater.glb','Щит',''],['Shield_Heater_2.glb','Щит II',''],['Shield_Celtic_Golden.glb','Золотой щит','']
] as const;



export type CraftMaterial=GatherKind;


export type CraftRecipe={weapon:Exclude<HeroWeapon,"default"|"swordGolden">;material:CraftMaterial;amount:number;cost:number;result:Exclude<HeroWeapon,"default"|"swordGolden">};


export const CRAFT_RECIPES:CraftRecipe[]=[
  {weapon:"knife",material:"twigs",amount:2,cost:12,result:"dagger2"},
  {weapon:"axe",material:"wood",amount:3,cost:18,result:"axeDouble"},
  {weapon:"axeSmall",material:"wood",amount:2,cost:14,result:"axeDouble"},
  {weapon:"mace",material:"wood",amount:3,cost:18,result:"hammerDouble"},
  {weapon:"sword2",material:"wood",amount:3,cost:22,result:"swordBig"},
  {weapon:"spear",material:"twigs",amount:3,cost:20,result:"scythe"}
];


export const craftMaterialName=(id:CraftMaterial)=>id==="wood"?"Древесина":id==="twigs"?"Ветки":id==="ashWood"?"Ясеневая древесина":"Лечебные травы";


export const craftMaterialIcon=(id:CraftMaterial)=>id==="wood"?"🪵":id==="twigs"?"🌿":id==="ashWood"?"🪵✨":"🌱";


export const RUNE_STEEL_YIELD:Partial<Record<HeroWeapon,number>>={
  knife:1,dagger2:2,sword2:1,axeSmall:1,mace:1,
  axe:2,spear:2,swordBig:2,axeDouble:3,hammerDouble:2,
  claymore:3,scythe:3
};


export type SteelCraftRecipe={id:string;name:string;steel:number;material:CraftMaterial;amount:number;cost:number;requires:number;resultWeapon?:HeroWeapon;resultShield?:string};


export const STEEL_CRAFT_RECIPES:SteelCraftRecipe[]=[
  {id:"steel-claymore",name:"Клеймор",steel:3,material:"wood",amount:5,cost:40,requires:4,resultWeapon:"claymore"},
  {id:"steel-scythe",name:"Боевая коса",steel:3,material:"twigs",amount:4,cost:35,requires:4,resultWeapon:"scythe"},
  {id:"steel-silver-shield",name:"Серебряный щит",steel:2,material:"wood",amount:3,cost:30,requires:3,resultShield:"Shield_Round_2.glb"},
  {id:"steel-shield-2",name:"Щит II",steel:3,material:"wood",amount:4,cost:40,requires:6,resultShield:"Shield_Heater_2.glb"},
  {id:"steel-golden-shield",name:"Золотой щит",steel:4,material:"wood",amount:5,cost:55,requires:8,resultShield:"Shield_Celtic_Golden.glb"}
];



export function ForgeWeaponWall({owned,ownedShields,selected,selectedShield,onChoose}:{owned:string[];ownedShields:string[];selected:HeroWeapon;selectedShield:string|null;onChoose:(asset:string,name:string,id:string)=>void}) {
  const canvas=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const target=canvas.current;
    if(!target)return;
    const width=target.clientWidth||320,height=target.clientHeight||416;
    const renderer=new THREE.WebGLRenderer({canvas:target,alpha:true,antialias:true,powerPreference:'low-power'});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
    renderer.setSize(width,height,false);
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    const scene=new THREE.Scene();
    scene.add(new THREE.HemisphereLight(0xffe8c5,0x6c584c,2.8));
    const lamp=new THREE.DirectionalLight(0xffbd74,2.2);lamp.position.set(-3,7,8);scene.add(lamp);
    const camera=new THREE.OrthographicCamera(-5.5,5.5,4.7,-4.7,.1,100);
    camera.position.set(0,0,22);camera.lookAt(0,0,0);
    const loader=new GLTFLoader();
    let active=true;
    renderer.render(scene,camera);
    FORGE_WEAPON_MODELS.forEach(([asset],index)=>{
      const url=`${BASE}img/models/${asset}`;
      cachedGlbBuffer(url).then(buffer=>new Promise<any>((resolve,reject)=>{
        loader.parse(buffer,`${BASE}img/models/`,resolve,reject);
      })).then(gltf=>{
        if(!active)return;
        const item=gltf.scene as THREE.Object3D;
        textureSteelOnWeapon(item,asset);
        item.updateMatrixWorld(true);
        const box=new THREE.Box3().setFromObject(item);
        const size=box.getSize(new THREE.Vector3());
        const span=Math.max(size.x,size.y,size.z);
        if(span<.001)return;
        const center=box.getCenter(new THREE.Vector3());
        item.position.set(-center.x,-center.y,-center.z);
        const mount=new THREE.Group();mount.add(item);
        mount.scale.setScalar(1.48/span);
        mount.position.set((index%5-2)*2.17,(1.5-Math.floor(index/5))*2.28+.22,0);
        scene.add(mount);
        renderer.render(scene,camera);
      }).catch(error=>console.warn('Forge display model unavailable',asset,error));
    });
    return()=>{active=false;scene.traverse((o:any)=>{if(o.isMesh){o.geometry?.dispose?.();if(Array.isArray(o.material))o.material.forEach((m:any)=>m.dispose?.());else o.material?.dispose?.();}});renderer.dispose();};
  },[]);
  return <><div className="forge-wall"><canvas ref={canvas}/><div className="forge-wall-labels">{FORGE_WEAPON_MODELS.map(([asset,name,id])=><button type="button" className={'forge-wall-label'+(id&&owned.includes(id)?' owned':'')+(ownedShields.includes(asset)?' owned':'')+(asset===selectedShield||(!asset.startsWith('Shield_')&&id===selected)?' equipped':'')} key={asset} aria-label={'Выбрать '+name} onClick={()=>onChoose(asset,name,id)}>{name}</button>)}</div></div>
    <p className="forge-wall-note">Выбери полученное оружие или щит. Остальные щиты откроются по мере прохождения.</p></>;
}
