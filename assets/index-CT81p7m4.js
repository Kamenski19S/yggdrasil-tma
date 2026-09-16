(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var rv={exports:{}},yu={},sv={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=Symbol.for("react.element"),Ay=Symbol.for("react.portal"),by=Symbol.for("react.fragment"),Cy=Symbol.for("react.strict_mode"),Ry=Symbol.for("react.profiler"),Py=Symbol.for("react.provider"),Iy=Symbol.for("react.context"),Ly=Symbol.for("react.forward_ref"),Dy=Symbol.for("react.suspense"),Ny=Symbol.for("react.memo"),Uy=Symbol.for("react.lazy"),z0=Symbol.iterator;function Fy(t){return t===null||typeof t!="object"?null:(t=z0&&t[z0]||t["@@iterator"],typeof t=="function"?t:null)}var ov={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},av=Object.assign,lv={};function ia(t,e,n){this.props=t,this.context=e,this.refs=lv,this.updater=n||ov}ia.prototype.isReactComponent={};ia.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cv(){}cv.prototype=ia.prototype;function wp(t,e,n){this.props=t,this.context=e,this.refs=lv,this.updater=n||ov}var Sp=wp.prototype=new cv;Sp.constructor=wp;av(Sp,ia.prototype);Sp.isPureReactComponent=!0;var B0=Array.isArray,uv=Object.prototype.hasOwnProperty,Ep={current:null},dv={key:!0,ref:!0,__self:!0,__source:!0};function fv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)uv.call(e,i)&&!dv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:yl,type:t,key:s,ref:o,props:r,_owner:Ep.current}}function ky(t,e){return{$$typeof:yl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tp(t){return typeof t=="object"&&t!==null&&t.$$typeof===yl}function Oy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var H0=/\/+/g;function Ed(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Oy(""+t.key):e.toString(36)}function bc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yl:case Ay:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ed(o,0):i,B0(r)?(n="",t!=null&&(n=t.replace(H0,"$&/")+"/"),bc(r,e,n,"",function(u){return u})):r!=null&&(Tp(r)&&(r=ky(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(H0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",B0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ed(s,a);o+=bc(s,e,n,l,r)}else if(l=Fy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ed(s,a++),o+=bc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zl(t,e,n){if(t==null)return t;var i=[],r=0;return bc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function zy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ri={current:null},Cc={transition:null},By={ReactCurrentDispatcher:ri,ReactCurrentBatchConfig:Cc,ReactCurrentOwner:Ep};function hv(){throw Error("act(...) is not supported in production builds of React.")}Et.Children={map:zl,forEach:function(t,e,n){zl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zl(t,function(){e++}),e},toArray:function(t){return zl(t,function(e){return e})||[]},only:function(t){if(!Tp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Et.Component=ia;Et.Fragment=by;Et.Profiler=Ry;Et.PureComponent=wp;Et.StrictMode=Cy;Et.Suspense=Dy;Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=By;Et.act=hv;Et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=av({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ep.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)uv.call(e,l)&&!dv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:yl,type:t.type,key:r,ref:s,props:i,_owner:o}};Et.createContext=function(t){return t={$$typeof:Iy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Py,_context:t},t.Consumer=t};Et.createElement=fv;Et.createFactory=function(t){var e=fv.bind(null,t);return e.type=t,e};Et.createRef=function(){return{current:null}};Et.forwardRef=function(t){return{$$typeof:Ly,render:t}};Et.isValidElement=Tp;Et.lazy=function(t){return{$$typeof:Uy,_payload:{_status:-1,_result:t},_init:zy}};Et.memo=function(t,e){return{$$typeof:Ny,type:t,compare:e===void 0?null:e}};Et.startTransition=function(t){var e=Cc.transition;Cc.transition={};try{t()}finally{Cc.transition=e}};Et.unstable_act=hv;Et.useCallback=function(t,e){return ri.current.useCallback(t,e)};Et.useContext=function(t){return ri.current.useContext(t)};Et.useDebugValue=function(){};Et.useDeferredValue=function(t){return ri.current.useDeferredValue(t)};Et.useEffect=function(t,e){return ri.current.useEffect(t,e)};Et.useId=function(){return ri.current.useId()};Et.useImperativeHandle=function(t,e,n){return ri.current.useImperativeHandle(t,e,n)};Et.useInsertionEffect=function(t,e){return ri.current.useInsertionEffect(t,e)};Et.useLayoutEffect=function(t,e){return ri.current.useLayoutEffect(t,e)};Et.useMemo=function(t,e){return ri.current.useMemo(t,e)};Et.useReducer=function(t,e,n){return ri.current.useReducer(t,e,n)};Et.useRef=function(t){return ri.current.useRef(t)};Et.useState=function(t){return ri.current.useState(t)};Et.useSyncExternalStore=function(t,e,n){return ri.current.useSyncExternalStore(t,e,n)};Et.useTransition=function(){return ri.current.useTransition()};Et.version="18.3.1";sv.exports=Et;var At=sv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hy=At,Vy=Symbol.for("react.element"),Gy=Symbol.for("react.fragment"),Wy=Object.prototype.hasOwnProperty,Xy=Hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jy={key:!0,ref:!0,__self:!0,__source:!0};function pv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Wy.call(e,i)&&!jy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Vy,type:t,key:s,ref:o,props:r,_owner:Xy.current}}yu.Fragment=Gy;yu.jsx=pv;yu.jsxs=pv;rv.exports=yu;var $=rv.exports,mv={exports:{}},Ci={},gv={exports:{}},vv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,oe){var ue=H.length;H.push(oe);e:for(;0<ue;){var Pe=ue-1>>>1,ze=H[Pe];if(0<r(ze,oe))H[Pe]=oe,H[ue]=ze,ue=Pe;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var oe=H[0],ue=H.pop();if(ue!==oe){H[0]=ue;e:for(var Pe=0,ze=H.length,_t=ze>>>1;Pe<_t;){var ft=2*(Pe+1)-1,Ie=H[ft],pe=ft+1,_e=H[pe];if(0>r(Ie,ue))pe<ze&&0>r(_e,Ie)?(H[Pe]=_e,H[pe]=ue,Pe=pe):(H[Pe]=Ie,H[ft]=ue,Pe=ft);else if(pe<ze&&0>r(_e,ue))H[Pe]=_e,H[pe]=ue,Pe=pe;else break e}}return oe}function r(H,oe){var ue=H.sortIndex-oe.sortIndex;return ue!==0?ue:H.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,p=null,m=3,g=!1,S=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(H){for(var oe=n(u);oe!==null;){if(oe.callback===null)i(u);else if(oe.startTime<=H)i(u),oe.sortIndex=oe.expirationTime,e(l,oe);else break;oe=n(u)}}function E(H){if(A=!1,y(H),!S)if(n(l)!==null)S=!0,W(I);else{var oe=n(u);oe!==null&&te(E,oe.startTime-H)}}function I(H,oe){S=!1,A&&(A=!1,d(F),F=-1),g=!0;var ue=m;try{for(y(oe),p=n(l);p!==null&&(!(p.expirationTime>oe)||H&&!z());){var Pe=p.callback;if(typeof Pe=="function"){p.callback=null,m=p.priorityLevel;var ze=Pe(p.expirationTime<=oe);oe=t.unstable_now(),typeof ze=="function"?p.callback=ze:p===n(l)&&i(l),y(oe)}else i(l);p=n(l)}if(p!==null)var _t=!0;else{var ft=n(u);ft!==null&&te(E,ft.startTime-oe),_t=!1}return _t}finally{p=null,m=ue,g=!1}}var L=!1,D=null,F=-1,T=5,M=-1;function z(){return!(t.unstable_now()-M<T)}function Y(){if(D!==null){var H=t.unstable_now();M=H;var oe=!0;try{oe=D(!0,H)}finally{oe?se():(L=!1,D=null)}}else L=!1}var se;if(typeof _=="function")se=function(){_(Y)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,fe=ce.port2;ce.port1.onmessage=Y,se=function(){fe.postMessage(null)}}else se=function(){x(Y,0)};function W(H){D=H,L||(L=!0,se())}function te(H,oe){F=x(function(){H(t.unstable_now())},oe)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){S||g||(S=!0,W(I))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var oe=3;break;default:oe=m}var ue=m;m=oe;try{return H()}finally{m=ue}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ue=m;m=H;try{return oe()}finally{m=ue}},t.unstable_scheduleCallback=function(H,oe,ue){var Pe=t.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Pe+ue:Pe):ue=Pe,H){case 1:var ze=-1;break;case 2:ze=250;break;case 5:ze=1073741823;break;case 4:ze=1e4;break;default:ze=5e3}return ze=ue+ze,H={id:h++,callback:oe,priorityLevel:H,startTime:ue,expirationTime:ze,sortIndex:-1},ue>Pe?(H.sortIndex=ue,e(u,H),n(l)===null&&H===n(u)&&(A?(d(F),F=-1):A=!0,te(E,ue-Pe))):(H.sortIndex=ze,e(l,H),S||g||(S=!0,W(I))),H},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(H){var oe=m;return function(){var ue=m;m=oe;try{return H.apply(this,arguments)}finally{m=ue}}}})(vv);gv.exports=vv;var qy=gv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy=At,bi=qy;function Ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _v=new Set,Ja={};function $s(t,e){Xo(t,e),Xo(t+"Capture",e)}function Xo(t,e){for(Ja[t]=e,t=0;t<e.length;t++)_v.add(e[t])}var br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zf=Object.prototype.hasOwnProperty,$y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V0={},G0={};function Ky(t){return zf.call(G0,t)?!0:zf.call(V0,t)?!1:$y.test(t)?G0[t]=!0:(V0[t]=!0,!1)}function Zy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jy(t,e,n,i){if(e===null||typeof e>"u"||Zy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function si(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xn[t]=new si(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xn[e]=new si(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xn[t]=new si(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xn[t]=new si(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xn[t]=new si(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xn[t]=new si(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xn[t]=new si(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xn[t]=new si(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xn[t]=new si(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ap=/[\-:]([a-z])/g;function bp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ap,bp);Xn[e]=new si(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ap,bp);Xn[e]=new si(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ap,bp);Xn[e]=new si(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xn[t]=new si(t,1,!1,t.toLowerCase(),null,!1,!1)});Xn.xlinkHref=new si("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xn[t]=new si(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cp(t,e,n,i){var r=Xn.hasOwnProperty(e)?Xn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jy(e,n,r,i)&&(n=null),i||r===null?Ky(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ir=Yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bl=Symbol.for("react.element"),Eo=Symbol.for("react.portal"),To=Symbol.for("react.fragment"),Rp=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),xv=Symbol.for("react.provider"),yv=Symbol.for("react.context"),Pp=Symbol.for("react.forward_ref"),Hf=Symbol.for("react.suspense"),Vf=Symbol.for("react.suspense_list"),Ip=Symbol.for("react.memo"),Gr=Symbol.for("react.lazy"),Mv=Symbol.for("react.offscreen"),W0=Symbol.iterator;function _a(t){return t===null||typeof t!="object"?null:(t=W0&&t[W0]||t["@@iterator"],typeof t=="function"?t:null)}var un=Object.assign,Td;function Ua(t){if(Td===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Td=e&&e[1]||""}return`
`+Td+t}var Ad=!1;function bd(t,e){if(!t||Ad)return"";Ad=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ad=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ua(t):""}function Qy(t){switch(t.tag){case 5:return Ua(t.type);case 16:return Ua("Lazy");case 13:return Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 2:case 15:return t=bd(t.type,!1),t;case 11:return t=bd(t.type.render,!1),t;case 1:return t=bd(t.type,!0),t;default:return""}}function Gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case To:return"Fragment";case Eo:return"Portal";case Bf:return"Profiler";case Rp:return"StrictMode";case Hf:return"Suspense";case Vf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yv:return(t.displayName||"Context")+".Consumer";case xv:return(t._context.displayName||"Context")+".Provider";case Pp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ip:return e=t.displayName||null,e!==null?e:Gf(t.type)||"Memo";case Gr:e=t._payload,t=t._init;try{return Gf(t(e))}catch{}}return null}function e2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gf(e);case 8:return e===Rp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function as(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t2(t){var e=wv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hl(t){t._valueTracker||(t._valueTracker=t2(t))}function Sv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=wv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wf(t,e){var n=e.checked;return un({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function X0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=as(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ev(t,e){e=e.checked,e!=null&&Cp(t,"checked",e,!1)}function Xf(t,e){Ev(t,e);var n=as(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jf(t,e.type,n):e.hasOwnProperty("defaultValue")&&jf(t,e.type,as(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function j0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jf(t,e,n){(e!=="number"||Wc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fa=Array.isArray;function ko(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+as(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Ce(91));return un({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function q0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Ce(92));if(Fa(n)){if(1<n.length)throw Error(Ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:as(n)}}function Tv(t,e){var n=as(e.value),i=as(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Y0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Av(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Av(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vl,bv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vl=Vl||document.createElement("div"),Vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},n2=["Webkit","ms","Moz","O"];Object.keys(Ba).forEach(function(t){n2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ba[e]=Ba[t]})});function Cv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ba.hasOwnProperty(t)&&Ba[t]?(""+e).trim():e+"px"}function Rv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Cv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var i2=un({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $f(t,e){if(e){if(i2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Ce(62))}}function Kf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zf=null;function Lp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jf=null,Oo=null,zo=null;function $0(t){if(t=Sl(t)){if(typeof Jf!="function")throw Error(Ce(280));var e=t.stateNode;e&&(e=Tu(e),Jf(t.stateNode,t.type,e))}}function Pv(t){Oo?zo?zo.push(t):zo=[t]:Oo=t}function Iv(){if(Oo){var t=Oo,e=zo;if(zo=Oo=null,$0(t),e)for(t=0;t<e.length;t++)$0(e[t])}}function Lv(t,e){return t(e)}function Dv(){}var Cd=!1;function Nv(t,e,n){if(Cd)return t(e,n);Cd=!0;try{return Lv(t,e,n)}finally{Cd=!1,(Oo!==null||zo!==null)&&(Dv(),Iv())}}function el(t,e){var n=t.stateNode;if(n===null)return null;var i=Tu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Ce(231,e,typeof n));return n}var Qf=!1;if(br)try{var xa={};Object.defineProperty(xa,"passive",{get:function(){Qf=!0}}),window.addEventListener("test",xa,xa),window.removeEventListener("test",xa,xa)}catch{Qf=!1}function r2(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Ha=!1,Xc=null,jc=!1,eh=null,s2={onError:function(t){Ha=!0,Xc=t}};function o2(t,e,n,i,r,s,o,a,l){Ha=!1,Xc=null,r2.apply(s2,arguments)}function a2(t,e,n,i,r,s,o,a,l){if(o2.apply(this,arguments),Ha){if(Ha){var u=Xc;Ha=!1,Xc=null}else throw Error(Ce(198));jc||(jc=!0,eh=u)}}function Ks(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Uv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function K0(t){if(Ks(t)!==t)throw Error(Ce(188))}function l2(t){var e=t.alternate;if(!e){if(e=Ks(t),e===null)throw Error(Ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return K0(r),t;if(s===i)return K0(r),e;s=s.sibling}throw Error(Ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Ce(189))}}if(n.alternate!==i)throw Error(Ce(190))}if(n.tag!==3)throw Error(Ce(188));return n.stateNode.current===n?t:e}function Fv(t){return t=l2(t),t!==null?kv(t):null}function kv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kv(t);if(e!==null)return e;t=t.sibling}return null}var Ov=bi.unstable_scheduleCallback,Z0=bi.unstable_cancelCallback,c2=bi.unstable_shouldYield,u2=bi.unstable_requestPaint,pn=bi.unstable_now,d2=bi.unstable_getCurrentPriorityLevel,Dp=bi.unstable_ImmediatePriority,zv=bi.unstable_UserBlockingPriority,qc=bi.unstable_NormalPriority,f2=bi.unstable_LowPriority,Bv=bi.unstable_IdlePriority,Mu=null,lr=null;function h2(t){if(lr&&typeof lr.onCommitFiberRoot=="function")try{lr.onCommitFiberRoot(Mu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ki=Math.clz32?Math.clz32:g2,p2=Math.log,m2=Math.LN2;function g2(t){return t>>>=0,t===0?32:31-(p2(t)/m2|0)|0}var Gl=64,Wl=4194304;function ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ka(a):(s&=o,s!==0&&(i=ka(s)))}else o=n&~r,o!==0?i=ka(o):s!==0&&(i=ka(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ki(e),r=1<<n,i|=t[n],e&=~r;return i}function v2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _2(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ki(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=v2(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function th(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hv(){var t=Gl;return Gl<<=1,!(Gl&4194240)&&(Gl=64),t}function Rd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ml(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ki(e),t[e]=n}function x2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ki(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Np(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ki(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Gt=0;function Vv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gv,Up,Wv,Xv,jv,nh=!1,Xl=[],Zr=null,Jr=null,Qr=null,tl=new Map,nl=new Map,Xr=[],y2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function J0(t,e){switch(t){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":Qr=null;break;case"pointerover":case"pointerout":tl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(e.pointerId)}}function ya(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Sl(e),e!==null&&Up(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function M2(t,e,n,i,r){switch(e){case"focusin":return Zr=ya(Zr,t,e,n,i,r),!0;case"dragenter":return Jr=ya(Jr,t,e,n,i,r),!0;case"mouseover":return Qr=ya(Qr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return tl.set(s,ya(tl.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,nl.set(s,ya(nl.get(s)||null,t,e,n,i,r)),!0}return!1}function qv(t){var e=Us(t.target);if(e!==null){var n=Ks(e);if(n!==null){if(e=n.tag,e===13){if(e=Uv(n),e!==null){t.blockedOn=e,jv(t.priority,function(){Wv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ih(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zf=i,n.target.dispatchEvent(i),Zf=null}else return e=Sl(n),e!==null&&Up(e),t.blockedOn=n,!1;e.shift()}return!0}function Q0(t,e,n){Rc(t)&&n.delete(e)}function w2(){nh=!1,Zr!==null&&Rc(Zr)&&(Zr=null),Jr!==null&&Rc(Jr)&&(Jr=null),Qr!==null&&Rc(Qr)&&(Qr=null),tl.forEach(Q0),nl.forEach(Q0)}function Ma(t,e){t.blockedOn===e&&(t.blockedOn=null,nh||(nh=!0,bi.unstable_scheduleCallback(bi.unstable_NormalPriority,w2)))}function il(t){function e(r){return Ma(r,t)}if(0<Xl.length){Ma(Xl[0],t);for(var n=1;n<Xl.length;n++){var i=Xl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zr!==null&&Ma(Zr,t),Jr!==null&&Ma(Jr,t),Qr!==null&&Ma(Qr,t),tl.forEach(e),nl.forEach(e),n=0;n<Xr.length;n++)i=Xr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xr.length&&(n=Xr[0],n.blockedOn===null);)qv(n),n.blockedOn===null&&Xr.shift()}var Bo=Ir.ReactCurrentBatchConfig,$c=!0;function S2(t,e,n,i){var r=Gt,s=Bo.transition;Bo.transition=null;try{Gt=1,Fp(t,e,n,i)}finally{Gt=r,Bo.transition=s}}function E2(t,e,n,i){var r=Gt,s=Bo.transition;Bo.transition=null;try{Gt=4,Fp(t,e,n,i)}finally{Gt=r,Bo.transition=s}}function Fp(t,e,n,i){if($c){var r=ih(t,e,n,i);if(r===null)zd(t,e,i,Kc,n),J0(t,i);else if(M2(r,t,e,n,i))i.stopPropagation();else if(J0(t,i),e&4&&-1<y2.indexOf(t)){for(;r!==null;){var s=Sl(r);if(s!==null&&Gv(s),s=ih(t,e,n,i),s===null&&zd(t,e,i,Kc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else zd(t,e,i,null,n)}}var Kc=null;function ih(t,e,n,i){if(Kc=null,t=Lp(i),t=Us(t),t!==null)if(e=Ks(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Uv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Kc=t,null}function Yv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d2()){case Dp:return 1;case zv:return 4;case qc:case f2:return 16;case Bv:return 536870912;default:return 16}default:return 16}}var $r=null,kp=null,Pc=null;function $v(){if(Pc)return Pc;var t,e=kp,n=e.length,i,r="value"in $r?$r.value:$r.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pc=r.slice(t,1<i?1-i:void 0)}function Ic(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function jl(){return!0}function eg(){return!1}function Ri(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?jl:eg,this.isPropagationStopped=eg,this}return un(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),e}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Op=Ri(ra),wl=un({},ra,{view:0,detail:0}),T2=Ri(wl),Pd,Id,wa,wu=un({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wa&&(wa&&t.type==="mousemove"?(Pd=t.screenX-wa.screenX,Id=t.screenY-wa.screenY):Id=Pd=0,wa=t),Pd)},movementY:function(t){return"movementY"in t?t.movementY:Id}}),tg=Ri(wu),A2=un({},wu,{dataTransfer:0}),b2=Ri(A2),C2=un({},wl,{relatedTarget:0}),Ld=Ri(C2),R2=un({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),P2=Ri(R2),I2=un({},ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),L2=Ri(I2),D2=un({},ra,{data:0}),ng=Ri(D2),N2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=F2[t])?!!e[t]:!1}function zp(){return k2}var O2=un({},wl,{key:function(t){if(t.key){var e=N2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ic(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?U2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zp,charCode:function(t){return t.type==="keypress"?Ic(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ic(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),z2=Ri(O2),B2=un({},wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ig=Ri(B2),H2=un({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zp}),V2=Ri(H2),G2=un({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),W2=Ri(G2),X2=un({},wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j2=Ri(X2),q2=[9,13,27,32],Bp=br&&"CompositionEvent"in window,Va=null;br&&"documentMode"in document&&(Va=document.documentMode);var Y2=br&&"TextEvent"in window&&!Va,Kv=br&&(!Bp||Va&&8<Va&&11>=Va),rg=" ",sg=!1;function Zv(t,e){switch(t){case"keyup":return q2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ao=!1;function $2(t,e){switch(t){case"compositionend":return Jv(e);case"keypress":return e.which!==32?null:(sg=!0,rg);case"textInput":return t=e.data,t===rg&&sg?null:t;default:return null}}function K2(t,e){if(Ao)return t==="compositionend"||!Bp&&Zv(t,e)?(t=$v(),Pc=kp=$r=null,Ao=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kv&&e.locale!=="ko"?null:e.data;default:return null}}var Z2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function og(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Z2[t.type]:e==="textarea"}function Qv(t,e,n,i){Pv(i),e=Zc(e,"onChange"),0<e.length&&(n=new Op("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ga=null,rl=null;function J2(t){u_(t,0)}function Su(t){var e=Ro(t);if(Sv(e))return t}function Q2(t,e){if(t==="change")return e}var e_=!1;if(br){var Dd;if(br){var Nd="oninput"in document;if(!Nd){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),Nd=typeof ag.oninput=="function"}Dd=Nd}else Dd=!1;e_=Dd&&(!document.documentMode||9<document.documentMode)}function lg(){Ga&&(Ga.detachEvent("onpropertychange",t_),rl=Ga=null)}function t_(t){if(t.propertyName==="value"&&Su(rl)){var e=[];Qv(e,rl,t,Lp(t)),Nv(J2,e)}}function eM(t,e,n){t==="focusin"?(lg(),Ga=e,rl=n,Ga.attachEvent("onpropertychange",t_)):t==="focusout"&&lg()}function tM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Su(rl)}function nM(t,e){if(t==="click")return Su(e)}function iM(t,e){if(t==="input"||t==="change")return Su(e)}function rM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qi=typeof Object.is=="function"?Object.is:rM;function sl(t,e){if(Qi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zf.call(e,r)||!Qi(t[r],e[r]))return!1}return!0}function cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ug(t,e){var n=cg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cg(n)}}function n_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function i_(){for(var t=window,e=Wc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wc(t.document)}return e}function Hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sM(t){var e=i_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n_(n.ownerDocument.documentElement,n)){if(i!==null&&Hp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ug(n,s);var o=ug(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oM=br&&"documentMode"in document&&11>=document.documentMode,bo=null,rh=null,Wa=null,sh=!1;function dg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sh||bo==null||bo!==Wc(i)||(i=bo,"selectionStart"in i&&Hp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wa&&sl(Wa,i)||(Wa=i,i=Zc(rh,"onSelect"),0<i.length&&(e=new Op("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=bo)))}function ql(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Co={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},Ud={},r_={};br&&(r_=document.createElement("div").style,"AnimationEvent"in window||(delete Co.animationend.animation,delete Co.animationiteration.animation,delete Co.animationstart.animation),"TransitionEvent"in window||delete Co.transitionend.transition);function Eu(t){if(Ud[t])return Ud[t];if(!Co[t])return t;var e=Co[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in r_)return Ud[t]=e[n];return t}var s_=Eu("animationend"),o_=Eu("animationiteration"),a_=Eu("animationstart"),l_=Eu("transitionend"),c_=new Map,fg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ds(t,e){c_.set(t,e),$s(e,[t])}for(var Fd=0;Fd<fg.length;Fd++){var kd=fg[Fd],aM=kd.toLowerCase(),lM=kd[0].toUpperCase()+kd.slice(1);ds(aM,"on"+lM)}ds(s_,"onAnimationEnd");ds(o_,"onAnimationIteration");ds(a_,"onAnimationStart");ds("dblclick","onDoubleClick");ds("focusin","onFocus");ds("focusout","onBlur");ds(l_,"onTransitionEnd");Xo("onMouseEnter",["mouseout","mouseover"]);Xo("onMouseLeave",["mouseout","mouseover"]);Xo("onPointerEnter",["pointerout","pointerover"]);Xo("onPointerLeave",["pointerout","pointerover"]);$s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$s("onBeforeInput",["compositionend","keypress","textInput","paste"]);$s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function hg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,a2(i,e,void 0,t),t.currentTarget=null}function u_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;hg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;hg(r,a,u),s=l}}}if(jc)throw t=eh,jc=!1,eh=null,t}function Qt(t,e){var n=e[uh];n===void 0&&(n=e[uh]=new Set);var i=t+"__bubble";n.has(i)||(d_(e,t,2,!1),n.add(i))}function Od(t,e,n){var i=0;e&&(i|=4),d_(n,t,i,e)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function ol(t){if(!t[Yl]){t[Yl]=!0,_v.forEach(function(n){n!=="selectionchange"&&(cM.has(n)||Od(n,!1,t),Od(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yl]||(e[Yl]=!0,Od("selectionchange",!1,e))}}function d_(t,e,n,i){switch(Yv(e)){case 1:var r=S2;break;case 4:r=E2;break;default:r=Fp}n=r.bind(null,e,n,t),r=void 0,!Qf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function zd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Us(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Nv(function(){var u=s,h=Lp(n),p=[];e:{var m=c_.get(t);if(m!==void 0){var g=Op,S=t;switch(t){case"keypress":if(Ic(n)===0)break e;case"keydown":case"keyup":g=z2;break;case"focusin":S="focus",g=Ld;break;case"focusout":S="blur",g=Ld;break;case"beforeblur":case"afterblur":g=Ld;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=b2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=V2;break;case s_:case o_:case a_:g=P2;break;case l_:g=W2;break;case"scroll":g=T2;break;case"wheel":g=j2;break;case"copy":case"cut":case"paste":g=L2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ig}var A=(e&4)!==0,x=!A&&t==="scroll",d=A?m!==null?m+"Capture":null:m;A=[];for(var _=u,y;_!==null;){y=_;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,d!==null&&(E=el(_,d),E!=null&&A.push(al(_,E,y)))),x)break;_=_.return}0<A.length&&(m=new g(m,S,null,n,h),p.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==Zf&&(S=n.relatedTarget||n.fromElement)&&(Us(S)||S[Cr]))break e;if((g||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,g?(S=n.relatedTarget||n.toElement,g=u,S=S?Us(S):null,S!==null&&(x=Ks(S),S!==x||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=u),g!==S)){if(A=tg,E="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(A=ig,E="onPointerLeave",d="onPointerEnter",_="pointer"),x=g==null?m:Ro(g),y=S==null?m:Ro(S),m=new A(E,_+"leave",g,n,h),m.target=x,m.relatedTarget=y,E=null,Us(h)===u&&(A=new A(d,_+"enter",S,n,h),A.target=y,A.relatedTarget=x,E=A),x=E,g&&S)t:{for(A=g,d=S,_=0,y=A;y;y=lo(y))_++;for(y=0,E=d;E;E=lo(E))y++;for(;0<_-y;)A=lo(A),_--;for(;0<y-_;)d=lo(d),y--;for(;_--;){if(A===d||d!==null&&A===d.alternate)break t;A=lo(A),d=lo(d)}A=null}else A=null;g!==null&&pg(p,m,g,A,!1),S!==null&&x!==null&&pg(p,x,S,A,!0)}}e:{if(m=u?Ro(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var I=Q2;else if(og(m))if(e_)I=iM;else{I=tM;var L=eM}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(I=nM);if(I&&(I=I(t,u))){Qv(p,I,n,h);break e}L&&L(t,m,u),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&jf(m,"number",m.value)}switch(L=u?Ro(u):window,t){case"focusin":(og(L)||L.contentEditable==="true")&&(bo=L,rh=u,Wa=null);break;case"focusout":Wa=rh=bo=null;break;case"mousedown":sh=!0;break;case"contextmenu":case"mouseup":case"dragend":sh=!1,dg(p,n,h);break;case"selectionchange":if(oM)break;case"keydown":case"keyup":dg(p,n,h)}var D;if(Bp)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Ao?Zv(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Kv&&n.locale!=="ko"&&(Ao||F!=="onCompositionStart"?F==="onCompositionEnd"&&Ao&&(D=$v()):($r=h,kp="value"in $r?$r.value:$r.textContent,Ao=!0)),L=Zc(u,F),0<L.length&&(F=new ng(F,t,null,n,h),p.push({event:F,listeners:L}),D?F.data=D:(D=Jv(n),D!==null&&(F.data=D)))),(D=Y2?$2(t,n):K2(t,n))&&(u=Zc(u,"onBeforeInput"),0<u.length&&(h=new ng("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=D))}u_(p,e)})}function al(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=el(t,n),s!=null&&i.unshift(al(t,s,r)),s=el(t,e),s!=null&&i.push(al(t,s,r))),t=t.return}return i}function lo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=el(n,s),l!=null&&o.unshift(al(n,l,a))):r||(l=el(n,s),l!=null&&o.push(al(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uM=/\r\n?/g,dM=/\u0000|\uFFFD/g;function mg(t){return(typeof t=="string"?t:""+t).replace(uM,`
`).replace(dM,"")}function $l(t,e,n){if(e=mg(e),mg(t)!==e&&n)throw Error(Ce(425))}function Jc(){}var oh=null,ah=null;function lh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ch=typeof setTimeout=="function"?setTimeout:void 0,fM=typeof clearTimeout=="function"?clearTimeout:void 0,gg=typeof Promise=="function"?Promise:void 0,hM=typeof queueMicrotask=="function"?queueMicrotask:typeof gg<"u"?function(t){return gg.resolve(null).then(t).catch(pM)}:ch;function pM(t){setTimeout(function(){throw t})}function Bd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),il(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);il(e)}function es(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var sa=Math.random().toString(36).slice(2),sr="__reactFiber$"+sa,ll="__reactProps$"+sa,Cr="__reactContainer$"+sa,uh="__reactEvents$"+sa,mM="__reactListeners$"+sa,gM="__reactHandles$"+sa;function Us(t){var e=t[sr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cr]||n[sr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vg(t);t!==null;){if(n=t[sr])return n;t=vg(t)}return e}t=n,n=t.parentNode}return null}function Sl(t){return t=t[sr]||t[Cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ro(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Ce(33))}function Tu(t){return t[ll]||null}var dh=[],Po=-1;function fs(t){return{current:t}}function en(t){0>Po||(t.current=dh[Po],dh[Po]=null,Po--)}function Jt(t,e){Po++,dh[Po]=t.current,t.current=e}var ls={},Jn=fs(ls),hi=fs(!1),Vs=ls;function jo(t,e){var n=t.type.contextTypes;if(!n)return ls;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pi(t){return t=t.childContextTypes,t!=null}function Qc(){en(hi),en(Jn)}function _g(t,e,n){if(Jn.current!==ls)throw Error(Ce(168));Jt(Jn,e),Jt(hi,n)}function f_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Ce(108,e2(t)||"Unknown",r));return un({},n,i)}function eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ls,Vs=Jn.current,Jt(Jn,t),Jt(hi,hi.current),!0}function xg(t,e,n){var i=t.stateNode;if(!i)throw Error(Ce(169));n?(t=f_(t,e,Vs),i.__reactInternalMemoizedMergedChildContext=t,en(hi),en(Jn),Jt(Jn,t)):en(hi),Jt(hi,n)}var Mr=null,Au=!1,Hd=!1;function h_(t){Mr===null?Mr=[t]:Mr.push(t)}function vM(t){Au=!0,h_(t)}function hs(){if(!Hd&&Mr!==null){Hd=!0;var t=0,e=Gt;try{var n=Mr;for(Gt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mr=null,Au=!1}catch(r){throw Mr!==null&&(Mr=Mr.slice(t+1)),Ov(Dp,hs),r}finally{Gt=e,Hd=!1}}return null}var Io=[],Lo=0,tu=null,nu=0,Di=[],Ni=0,Gs=null,wr=1,Sr="";function Rs(t,e){Io[Lo++]=nu,Io[Lo++]=tu,tu=t,nu=e}function p_(t,e,n){Di[Ni++]=wr,Di[Ni++]=Sr,Di[Ni++]=Gs,Gs=t;var i=wr;t=Sr;var r=32-Ki(i)-1;i&=~(1<<r),n+=1;var s=32-Ki(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wr=1<<32-Ki(e)+r|n<<r|i,Sr=s+t}else wr=1<<s|n<<r|i,Sr=t}function Vp(t){t.return!==null&&(Rs(t,1),p_(t,1,0))}function Gp(t){for(;t===tu;)tu=Io[--Lo],Io[Lo]=null,nu=Io[--Lo],Io[Lo]=null;for(;t===Gs;)Gs=Di[--Ni],Di[Ni]=null,Sr=Di[--Ni],Di[Ni]=null,wr=Di[--Ni],Di[Ni]=null}var Ai=null,Ti=null,sn=!1,qi=null;function m_(t,e){var n=Ui(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ai=t,Ti=es(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ai=t,Ti=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gs!==null?{id:wr,overflow:Sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ui(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ai=t,Ti=null,!0):!1;default:return!1}}function fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hh(t){if(sn){var e=Ti;if(e){var n=e;if(!yg(t,e)){if(fh(t))throw Error(Ce(418));e=es(n.nextSibling);var i=Ai;e&&yg(t,e)?m_(i,n):(t.flags=t.flags&-4097|2,sn=!1,Ai=t)}}else{if(fh(t))throw Error(Ce(418));t.flags=t.flags&-4097|2,sn=!1,Ai=t}}}function Mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ai=t}function Kl(t){if(t!==Ai)return!1;if(!sn)return Mg(t),sn=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lh(t.type,t.memoizedProps)),e&&(e=Ti)){if(fh(t))throw g_(),Error(Ce(418));for(;e;)m_(t,e),e=es(e.nextSibling)}if(Mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ti=es(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ti=null}}else Ti=Ai?es(t.stateNode.nextSibling):null;return!0}function g_(){for(var t=Ti;t;)t=es(t.nextSibling)}function qo(){Ti=Ai=null,sn=!1}function Wp(t){qi===null?qi=[t]:qi.push(t)}var _M=Ir.ReactCurrentBatchConfig;function Sa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Ce(309));var i=n.stateNode}if(!i)throw Error(Ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Ce(284));if(!n._owner)throw Error(Ce(290,t))}return t}function Zl(t,e){throw t=Object.prototype.toString.call(e),Error(Ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wg(t){var e=t._init;return e(t._payload)}function v_(t){function e(d,_){if(t){var y=d.deletions;y===null?(d.deletions=[_],d.flags|=16):y.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=rs(d,_),d.index=0,d.sibling=null,d}function s(d,_,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<_?(d.flags|=2,_):y):(d.flags|=2,_)):(d.flags|=1048576,_)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,_,y,E){return _===null||_.tag!==6?(_=Yd(y,d.mode,E),_.return=d,_):(_=r(_,y),_.return=d,_)}function l(d,_,y,E){var I=y.type;return I===To?h(d,_,y.props.children,E,y.key):_!==null&&(_.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Gr&&wg(I)===_.type)?(E=r(_,y.props),E.ref=Sa(d,_,y),E.return=d,E):(E=Oc(y.type,y.key,y.props,null,d.mode,E),E.ref=Sa(d,_,y),E.return=d,E)}function u(d,_,y,E){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=$d(y,d.mode,E),_.return=d,_):(_=r(_,y.children||[]),_.return=d,_)}function h(d,_,y,E,I){return _===null||_.tag!==7?(_=Hs(y,d.mode,E,I),_.return=d,_):(_=r(_,y),_.return=d,_)}function p(d,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Yd(""+_,d.mode,y),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Bl:return y=Oc(_.type,_.key,_.props,null,d.mode,y),y.ref=Sa(d,null,_),y.return=d,y;case Eo:return _=$d(_,d.mode,y),_.return=d,_;case Gr:var E=_._init;return p(d,E(_._payload),y)}if(Fa(_)||_a(_))return _=Hs(_,d.mode,y,null),_.return=d,_;Zl(d,_)}return null}function m(d,_,y,E){var I=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(d,_,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Bl:return y.key===I?l(d,_,y,E):null;case Eo:return y.key===I?u(d,_,y,E):null;case Gr:return I=y._init,m(d,_,I(y._payload),E)}if(Fa(y)||_a(y))return I!==null?null:h(d,_,y,E,null);Zl(d,y)}return null}function g(d,_,y,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(y)||null,a(_,d,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Bl:return d=d.get(E.key===null?y:E.key)||null,l(_,d,E,I);case Eo:return d=d.get(E.key===null?y:E.key)||null,u(_,d,E,I);case Gr:var L=E._init;return g(d,_,y,L(E._payload),I)}if(Fa(E)||_a(E))return d=d.get(y)||null,h(_,d,E,I,null);Zl(_,E)}return null}function S(d,_,y,E){for(var I=null,L=null,D=_,F=_=0,T=null;D!==null&&F<y.length;F++){D.index>F?(T=D,D=null):T=D.sibling;var M=m(d,D,y[F],E);if(M===null){D===null&&(D=T);break}t&&D&&M.alternate===null&&e(d,D),_=s(M,_,F),L===null?I=M:L.sibling=M,L=M,D=T}if(F===y.length)return n(d,D),sn&&Rs(d,F),I;if(D===null){for(;F<y.length;F++)D=p(d,y[F],E),D!==null&&(_=s(D,_,F),L===null?I=D:L.sibling=D,L=D);return sn&&Rs(d,F),I}for(D=i(d,D);F<y.length;F++)T=g(D,d,F,y[F],E),T!==null&&(t&&T.alternate!==null&&D.delete(T.key===null?F:T.key),_=s(T,_,F),L===null?I=T:L.sibling=T,L=T);return t&&D.forEach(function(z){return e(d,z)}),sn&&Rs(d,F),I}function A(d,_,y,E){var I=_a(y);if(typeof I!="function")throw Error(Ce(150));if(y=I.call(y),y==null)throw Error(Ce(151));for(var L=I=null,D=_,F=_=0,T=null,M=y.next();D!==null&&!M.done;F++,M=y.next()){D.index>F?(T=D,D=null):T=D.sibling;var z=m(d,D,M.value,E);if(z===null){D===null&&(D=T);break}t&&D&&z.alternate===null&&e(d,D),_=s(z,_,F),L===null?I=z:L.sibling=z,L=z,D=T}if(M.done)return n(d,D),sn&&Rs(d,F),I;if(D===null){for(;!M.done;F++,M=y.next())M=p(d,M.value,E),M!==null&&(_=s(M,_,F),L===null?I=M:L.sibling=M,L=M);return sn&&Rs(d,F),I}for(D=i(d,D);!M.done;F++,M=y.next())M=g(D,d,F,M.value,E),M!==null&&(t&&M.alternate!==null&&D.delete(M.key===null?F:M.key),_=s(M,_,F),L===null?I=M:L.sibling=M,L=M);return t&&D.forEach(function(Y){return e(d,Y)}),sn&&Rs(d,F),I}function x(d,_,y,E){if(typeof y=="object"&&y!==null&&y.type===To&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Bl:e:{for(var I=y.key,L=_;L!==null;){if(L.key===I){if(I=y.type,I===To){if(L.tag===7){n(d,L.sibling),_=r(L,y.props.children),_.return=d,d=_;break e}}else if(L.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Gr&&wg(I)===L.type){n(d,L.sibling),_=r(L,y.props),_.ref=Sa(d,L,y),_.return=d,d=_;break e}n(d,L);break}else e(d,L);L=L.sibling}y.type===To?(_=Hs(y.props.children,d.mode,E,y.key),_.return=d,d=_):(E=Oc(y.type,y.key,y.props,null,d.mode,E),E.ref=Sa(d,_,y),E.return=d,d=E)}return o(d);case Eo:e:{for(L=y.key;_!==null;){if(_.key===L)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(d,_.sibling),_=r(_,y.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=$d(y,d.mode,E),_.return=d,d=_}return o(d);case Gr:return L=y._init,x(d,_,L(y._payload),E)}if(Fa(y))return S(d,_,y,E);if(_a(y))return A(d,_,y,E);Zl(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,y),_.return=d,d=_):(n(d,_),_=Yd(y,d.mode,E),_.return=d,d=_),o(d)):n(d,_)}return x}var Yo=v_(!0),__=v_(!1),iu=fs(null),ru=null,Do=null,Xp=null;function jp(){Xp=Do=ru=null}function qp(t){var e=iu.current;en(iu),t._currentValue=e}function ph(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ho(t,e){ru=t,Xp=Do=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fi=!0),t.firstContext=null)}function ki(t){var e=t._currentValue;if(Xp!==t)if(t={context:t,memoizedValue:e,next:null},Do===null){if(ru===null)throw Error(Ce(308));Do=t,ru.dependencies={lanes:0,firstContext:t}}else Do=Do.next=t;return e}var Fs=null;function Yp(t){Fs===null?Fs=[t]:Fs.push(t)}function x_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Yp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Rr(t,i)}function Rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wr=!1;function $p(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ts(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Pt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Rr(t,n)}return r=i.interleaved,r===null?(e.next=e,Yp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Rr(t,n)}function Lc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Np(t,n)}}function Sg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function su(t,e,n,i){var r=t.updateQueue;Wr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,h=u=l=null,a=s;do{var m=a.lane,g=a.eventTime;if((i&m)===m){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,A=a;switch(m=e,g=n,A.tag){case 1:if(S=A.payload,typeof S=="function"){p=S.call(g,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=A.payload,m=typeof S=="function"?S.call(g,p,m):S,m==null)break e;p=un({},p,m);break e;case 2:Wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=g,l=p):h=h.next=g,o|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xs|=o,t.lanes=o,t.memoizedState=p}}function Eg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Ce(191,r));r.call(i)}}}var El={},cr=fs(El),cl=fs(El),ul=fs(El);function ks(t){if(t===El)throw Error(Ce(174));return t}function Kp(t,e){switch(Jt(ul,e),Jt(cl,t),Jt(cr,El),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yf(e,t)}en(cr),Jt(cr,e)}function $o(){en(cr),en(cl),en(ul)}function M_(t){ks(ul.current);var e=ks(cr.current),n=Yf(e,t.type);e!==n&&(Jt(cl,t),Jt(cr,n))}function Zp(t){cl.current===t&&(en(cr),en(cl))}var ln=fs(0);function ou(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vd=[];function Jp(){for(var t=0;t<Vd.length;t++)Vd[t]._workInProgressVersionPrimary=null;Vd.length=0}var Dc=Ir.ReactCurrentDispatcher,Gd=Ir.ReactCurrentBatchConfig,Ws=0,cn=null,En=null,Ln=null,au=!1,Xa=!1,dl=0,xM=0;function qn(){throw Error(Ce(321))}function Qp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qi(t[n],e[n]))return!1;return!0}function em(t,e,n,i,r,s){if(Ws=s,cn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dc.current=t===null||t.memoizedState===null?SM:EM,t=n(i,r),Xa){s=0;do{if(Xa=!1,dl=0,25<=s)throw Error(Ce(301));s+=1,Ln=En=null,e.updateQueue=null,Dc.current=TM,t=n(i,r)}while(Xa)}if(Dc.current=lu,e=En!==null&&En.next!==null,Ws=0,Ln=En=cn=null,au=!1,e)throw Error(Ce(300));return t}function tm(){var t=dl!==0;return dl=0,t}function ir(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ln===null?cn.memoizedState=Ln=t:Ln=Ln.next=t,Ln}function Oi(){if(En===null){var t=cn.alternate;t=t!==null?t.memoizedState:null}else t=En.next;var e=Ln===null?cn.memoizedState:Ln.next;if(e!==null)Ln=e,En=t;else{if(t===null)throw Error(Ce(310));En=t,t={memoizedState:En.memoizedState,baseState:En.baseState,baseQueue:En.baseQueue,queue:En.queue,next:null},Ln===null?cn.memoizedState=Ln=t:Ln=Ln.next=t}return Ln}function fl(t,e){return typeof e=="function"?e(t):e}function Wd(t){var e=Oi(),n=e.queue;if(n===null)throw Error(Ce(311));n.lastRenderedReducer=t;var i=En,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Ws&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,cn.lanes|=h,Xs|=h}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Qi(i,e.memoizedState)||(fi=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,cn.lanes|=s,Xs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xd(t){var e=Oi(),n=e.queue;if(n===null)throw Error(Ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Qi(s,e.memoizedState)||(fi=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function w_(){}function S_(t,e){var n=cn,i=Oi(),r=e(),s=!Qi(i.memoizedState,r);if(s&&(i.memoizedState=r,fi=!0),i=i.queue,nm(A_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ln!==null&&Ln.memoizedState.tag&1){if(n.flags|=2048,hl(9,T_.bind(null,n,i,r,e),void 0,null),Nn===null)throw Error(Ce(349));Ws&30||E_(n,e,r)}return r}function E_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=cn.updateQueue,e===null?(e={lastEffect:null,stores:null},cn.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function T_(t,e,n,i){e.value=n,e.getSnapshot=i,b_(e)&&C_(t)}function A_(t,e,n){return n(function(){b_(e)&&C_(t)})}function b_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qi(t,n)}catch{return!0}}function C_(t){var e=Rr(t,1);e!==null&&Zi(e,t,1,-1)}function Tg(t){var e=ir();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fl,lastRenderedState:t},e.queue=t,t=t.dispatch=wM.bind(null,cn,t),[e.memoizedState,t]}function hl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=cn.updateQueue,e===null?(e={lastEffect:null,stores:null},cn.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function R_(){return Oi().memoizedState}function Nc(t,e,n,i){var r=ir();cn.flags|=t,r.memoizedState=hl(1|e,n,void 0,i===void 0?null:i)}function bu(t,e,n,i){var r=Oi();i=i===void 0?null:i;var s=void 0;if(En!==null){var o=En.memoizedState;if(s=o.destroy,i!==null&&Qp(i,o.deps)){r.memoizedState=hl(e,n,s,i);return}}cn.flags|=t,r.memoizedState=hl(1|e,n,s,i)}function Ag(t,e){return Nc(8390656,8,t,e)}function nm(t,e){return bu(2048,8,t,e)}function P_(t,e){return bu(4,2,t,e)}function I_(t,e){return bu(4,4,t,e)}function L_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function D_(t,e,n){return n=n!=null?n.concat([t]):null,bu(4,4,L_.bind(null,e,t),n)}function im(){}function N_(t,e){var n=Oi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function U_(t,e){var n=Oi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function F_(t,e,n){return Ws&21?(Qi(n,e)||(n=Hv(),cn.lanes|=n,Xs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fi=!0),t.memoizedState=n)}function yM(t,e){var n=Gt;Gt=n!==0&&4>n?n:4,t(!0);var i=Gd.transition;Gd.transition={};try{t(!1),e()}finally{Gt=n,Gd.transition=i}}function k_(){return Oi().memoizedState}function MM(t,e,n){var i=is(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},O_(t))z_(e,n);else if(n=x_(t,e,n,i),n!==null){var r=ni();Zi(n,t,i,r),B_(n,e,i)}}function wM(t,e,n){var i=is(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(O_(t))z_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Qi(a,o)){var l=e.interleaved;l===null?(r.next=r,Yp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=x_(t,e,r,i),n!==null&&(r=ni(),Zi(n,t,i,r),B_(n,e,i))}}function O_(t){var e=t.alternate;return t===cn||e!==null&&e===cn}function z_(t,e){Xa=au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Np(t,n)}}var lu={readContext:ki,useCallback:qn,useContext:qn,useEffect:qn,useImperativeHandle:qn,useInsertionEffect:qn,useLayoutEffect:qn,useMemo:qn,useReducer:qn,useRef:qn,useState:qn,useDebugValue:qn,useDeferredValue:qn,useTransition:qn,useMutableSource:qn,useSyncExternalStore:qn,useId:qn,unstable_isNewReconciler:!1},SM={readContext:ki,useCallback:function(t,e){return ir().memoizedState=[t,e===void 0?null:e],t},useContext:ki,useEffect:Ag,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4194308,4,L_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nc(4,2,t,e)},useMemo:function(t,e){var n=ir();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ir();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=MM.bind(null,cn,t),[i.memoizedState,t]},useRef:function(t){var e=ir();return t={current:t},e.memoizedState=t},useState:Tg,useDebugValue:im,useDeferredValue:function(t){return ir().memoizedState=t},useTransition:function(){var t=Tg(!1),e=t[0];return t=yM.bind(null,t[1]),ir().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=cn,r=ir();if(sn){if(n===void 0)throw Error(Ce(407));n=n()}else{if(n=e(),Nn===null)throw Error(Ce(349));Ws&30||E_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ag(A_.bind(null,i,s,t),[t]),i.flags|=2048,hl(9,T_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ir(),e=Nn.identifierPrefix;if(sn){var n=Sr,i=wr;n=(i&~(1<<32-Ki(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=dl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},EM={readContext:ki,useCallback:N_,useContext:ki,useEffect:nm,useImperativeHandle:D_,useInsertionEffect:P_,useLayoutEffect:I_,useMemo:U_,useReducer:Wd,useRef:R_,useState:function(){return Wd(fl)},useDebugValue:im,useDeferredValue:function(t){var e=Oi();return F_(e,En.memoizedState,t)},useTransition:function(){var t=Wd(fl)[0],e=Oi().memoizedState;return[t,e]},useMutableSource:w_,useSyncExternalStore:S_,useId:k_,unstable_isNewReconciler:!1},TM={readContext:ki,useCallback:N_,useContext:ki,useEffect:nm,useImperativeHandle:D_,useInsertionEffect:P_,useLayoutEffect:I_,useMemo:U_,useReducer:Xd,useRef:R_,useState:function(){return Xd(fl)},useDebugValue:im,useDeferredValue:function(t){var e=Oi();return En===null?e.memoizedState=t:F_(e,En.memoizedState,t)},useTransition:function(){var t=Xd(fl)[0],e=Oi().memoizedState;return[t,e]},useMutableSource:w_,useSyncExternalStore:S_,useId:k_,unstable_isNewReconciler:!1};function Xi(t,e){if(t&&t.defaultProps){e=un({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:un({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cu={isMounted:function(t){return(t=t._reactInternals)?Ks(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ni(),r=is(t),s=Tr(i,r);s.payload=e,n!=null&&(s.callback=n),e=ts(t,s,r),e!==null&&(Zi(e,t,r,i),Lc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ni(),r=is(t),s=Tr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ts(t,s,r),e!==null&&(Zi(e,t,r,i),Lc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ni(),i=is(t),r=Tr(n,i);r.tag=2,e!=null&&(r.callback=e),e=ts(t,r,i),e!==null&&(Zi(e,t,i,n),Lc(e,t,i))}};function bg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!sl(n,i)||!sl(r,s):!0}function H_(t,e,n){var i=!1,r=ls,s=e.contextType;return typeof s=="object"&&s!==null?s=ki(s):(r=pi(e)?Vs:Jn.current,i=e.contextTypes,s=(i=i!=null)?jo(t,r):ls),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Cg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cu.enqueueReplaceState(e,e.state,null)}function gh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},$p(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ki(s):(s=pi(e)?Vs:Jn.current,r.context=jo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cu.enqueueReplaceState(r,r.state,null),su(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ko(t,e){try{var n="",i=e;do n+=Qy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function jd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AM=typeof WeakMap=="function"?WeakMap:Map;function V_(t,e,n){n=Tr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){uu||(uu=!0,bh=i),vh(t,e)},n}function G_(t,e,n){n=Tr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vh(t,e),typeof i!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new AM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=BM.bind(null,t,e,n),e.then(t,t))}function Pg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ig(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tr(-1,1),e.tag=2,ts(n,e,1))),n.lanes|=1),t)}var bM=Ir.ReactCurrentOwner,fi=!1;function ti(t,e,n,i){e.child=t===null?__(e,null,n,i):Yo(e,t.child,n,i)}function Lg(t,e,n,i,r){n=n.render;var s=e.ref;return Ho(e,r),i=em(t,e,n,i,s,r),n=tm(),t!==null&&!fi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pr(t,e,r)):(sn&&n&&Vp(e),e.flags|=1,ti(t,e,i,r),e.child)}function Dg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!dm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,W_(t,e,s,i,r)):(t=Oc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sl,n(o,i)&&t.ref===e.ref)return Pr(t,e,r)}return e.flags|=1,t=rs(s,i),t.ref=e.ref,t.return=e,e.child=t}function W_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(sl(s,i)&&t.ref===e.ref)if(fi=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fi=!0);else return e.lanes=t.lanes,Pr(t,e,r)}return _h(t,e,n,i,r)}function X_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Jt(Uo,Si),Si|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Jt(Uo,Si),Si|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Jt(Uo,Si),Si|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Jt(Uo,Si),Si|=i;return ti(t,e,r,n),e.child}function j_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _h(t,e,n,i,r){var s=pi(n)?Vs:Jn.current;return s=jo(e,s),Ho(e,r),n=em(t,e,n,i,s,r),i=tm(),t!==null&&!fi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pr(t,e,r)):(sn&&i&&Vp(e),e.flags|=1,ti(t,e,n,r),e.child)}function Ng(t,e,n,i,r){if(pi(n)){var s=!0;eu(e)}else s=!1;if(Ho(e,r),e.stateNode===null)Uc(t,e),H_(e,n,i),gh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ki(u):(u=pi(n)?Vs:Jn.current,u=jo(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Cg(e,o,i,u),Wr=!1;var m=e.memoizedState;o.state=m,su(e,i,o,r),l=e.memoizedState,a!==i||m!==l||hi.current||Wr?(typeof h=="function"&&(mh(e,n,h,i),l=e.memoizedState),(a=Wr||bg(e,n,a,i,m,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,y_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Xi(e.type,a),o.props=u,p=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ki(l):(l=pi(n)?Vs:Jn.current,l=jo(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==l)&&Cg(e,o,i,l),Wr=!1,m=e.memoizedState,o.state=m,su(e,i,o,r);var S=e.memoizedState;a!==p||m!==S||hi.current||Wr?(typeof g=="function"&&(mh(e,n,g,i),S=e.memoizedState),(u=Wr||bg(e,n,u,i,m,S,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=S),o.props=i,o.state=S,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),i=!1)}return xh(t,e,n,i,s,r)}function xh(t,e,n,i,r,s){j_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&xg(e,n,!1),Pr(t,e,s);i=e.stateNode,bM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Yo(e,t.child,null,s),e.child=Yo(e,null,a,s)):ti(t,e,a,s),e.memoizedState=i.state,r&&xg(e,n,!0),e.child}function q_(t){var e=t.stateNode;e.pendingContext?_g(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_g(t,e.context,!1),Kp(t,e.containerInfo)}function Ug(t,e,n,i,r){return qo(),Wp(r),e.flags|=256,ti(t,e,n,i),e.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function Mh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Y_(t,e,n){var i=e.pendingProps,r=ln.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Jt(ln,r&1),t===null)return hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Iu(o,i,0,null),t=Hs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mh(n),e.memoizedState=yh,t):rm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return CM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=rs(a,s):(s=Hs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Mh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yh,i}return s=t.child,t=s.sibling,i=rs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function rm(t,e){return e=Iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Jl(t,e,n,i){return i!==null&&Wp(i),Yo(e,t.child,null,n),t=rm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function CM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=jd(Error(Ce(422))),Jl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Iu({mode:"visible",children:i.children},r,0,null),s=Hs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Yo(e,t.child,null,o),e.child.memoizedState=Mh(o),e.memoizedState=yh,s);if(!(e.mode&1))return Jl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Ce(419)),i=jd(s,i,void 0),Jl(t,e,o,i)}if(a=(o&t.childLanes)!==0,fi||a){if(i=Nn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Rr(t,r),Zi(i,t,r,-1))}return um(),i=jd(Error(Ce(421))),Jl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=HM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ti=es(r.nextSibling),Ai=e,sn=!0,qi=null,t!==null&&(Di[Ni++]=wr,Di[Ni++]=Sr,Di[Ni++]=Gs,wr=t.id,Sr=t.overflow,Gs=e),e=rm(e,i.children),e.flags|=4096,e)}function Fg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ph(t.return,e,n)}function qd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function $_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ti(t,e,i.children,n),i=ln.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fg(t,n,e);else if(t.tag===19)Fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Jt(ln,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ou(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ou(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qd(e,!0,n,null,s);break;case"together":qd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Uc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Ce(153));if(e.child!==null){for(t=e.child,n=rs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function RM(t,e,n){switch(e.tag){case 3:q_(e),qo();break;case 5:M_(e);break;case 1:pi(e.type)&&eu(e);break;case 4:Kp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Jt(iu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Jt(ln,ln.current&1),e.flags|=128,null):n&e.child.childLanes?Y_(t,e,n):(Jt(ln,ln.current&1),t=Pr(t,e,n),t!==null?t.sibling:null);Jt(ln,ln.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return $_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Jt(ln,ln.current),i)break;return null;case 22:case 23:return e.lanes=0,X_(t,e,n)}return Pr(t,e,n)}var K_,wh,Z_,J_;K_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wh=function(){};Z_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ks(cr.current);var s=null;switch(n){case"input":r=Wf(t,r),i=Wf(t,i),s=[];break;case"select":r=un({},r,{value:void 0}),i=un({},i,{value:void 0}),s=[];break;case"textarea":r=qf(t,r),i=qf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Jc)}$f(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ja.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ja.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Qt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};J_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ea(t,e){if(!sn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function PM(t,e,n){var i=e.pendingProps;switch(Gp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yn(e),null;case 1:return pi(e.type)&&Qc(),Yn(e),null;case 3:return i=e.stateNode,$o(),en(hi),en(Jn),Jp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qi!==null&&(Ph(qi),qi=null))),wh(t,e),Yn(e),null;case 5:Zp(e);var r=ks(ul.current);if(n=e.type,t!==null&&e.stateNode!=null)Z_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Ce(166));return Yn(e),null}if(t=ks(cr.current),Kl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[sr]=e,i[ll]=s,t=(e.mode&1)!==0,n){case"dialog":Qt("cancel",i),Qt("close",i);break;case"iframe":case"object":case"embed":Qt("load",i);break;case"video":case"audio":for(r=0;r<Oa.length;r++)Qt(Oa[r],i);break;case"source":Qt("error",i);break;case"img":case"image":case"link":Qt("error",i),Qt("load",i);break;case"details":Qt("toggle",i);break;case"input":X0(i,s),Qt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Qt("invalid",i);break;case"textarea":q0(i,s),Qt("invalid",i)}$f(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&$l(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$l(i.textContent,a,t),r=["children",""+a]):Ja.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Qt("scroll",i)}switch(n){case"input":Hl(i),j0(i,s,!0);break;case"textarea":Hl(i),Y0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Jc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Av(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[sr]=e,t[ll]=i,K_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Kf(n,i),n){case"dialog":Qt("cancel",t),Qt("close",t),r=i;break;case"iframe":case"object":case"embed":Qt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Oa.length;r++)Qt(Oa[r],t);r=i;break;case"source":Qt("error",t),r=i;break;case"img":case"image":case"link":Qt("error",t),Qt("load",t),r=i;break;case"details":Qt("toggle",t),r=i;break;case"input":X0(t,i),r=Wf(t,i),Qt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=un({},i,{value:void 0}),Qt("invalid",t);break;case"textarea":q0(t,i),r=qf(t,i),Qt("invalid",t);break;default:r=i}$f(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Rv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qa(t,l):typeof l=="number"&&Qa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ja.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Qt("scroll",t):l!=null&&Cp(t,s,l,o))}switch(n){case"input":Hl(t),j0(t,i,!1);break;case"textarea":Hl(t),Y0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+as(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ko(t,!!i.multiple,s,!1):i.defaultValue!=null&&ko(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Jc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yn(e),null;case 6:if(t&&e.stateNode!=null)J_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Ce(166));if(n=ks(ul.current),ks(cr.current),Kl(e)){if(i=e.stateNode,n=e.memoizedProps,i[sr]=e,(s=i.nodeValue!==n)&&(t=Ai,t!==null))switch(t.tag){case 3:$l(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$l(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[sr]=e,e.stateNode=i}return Yn(e),null;case 13:if(en(ln),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(sn&&Ti!==null&&e.mode&1&&!(e.flags&128))g_(),qo(),e.flags|=98560,s=!1;else if(s=Kl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Ce(317));s[sr]=e}else qo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yn(e),s=!1}else qi!==null&&(Ph(qi),qi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ln.current&1?Tn===0&&(Tn=3):um())),e.updateQueue!==null&&(e.flags|=4),Yn(e),null);case 4:return $o(),wh(t,e),t===null&&ol(e.stateNode.containerInfo),Yn(e),null;case 10:return qp(e.type._context),Yn(e),null;case 17:return pi(e.type)&&Qc(),Yn(e),null;case 19:if(en(ln),s=e.memoizedState,s===null)return Yn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ea(s,!1);else{if(Tn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ou(t),o!==null){for(e.flags|=128,Ea(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Jt(ln,ln.current&1|2),e.child}t=t.sibling}s.tail!==null&&pn()>Zo&&(e.flags|=128,i=!0,Ea(s,!1),e.lanes=4194304)}else{if(!i)if(t=ou(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!sn)return Yn(e),null}else 2*pn()-s.renderingStartTime>Zo&&n!==1073741824&&(e.flags|=128,i=!0,Ea(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pn(),e.sibling=null,n=ln.current,Jt(ln,i?n&1|2:n&1),e):(Yn(e),null);case 22:case 23:return cm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Si&1073741824&&(Yn(e),e.subtreeFlags&6&&(e.flags|=8192)):Yn(e),null;case 24:return null;case 25:return null}throw Error(Ce(156,e.tag))}function IM(t,e){switch(Gp(e),e.tag){case 1:return pi(e.type)&&Qc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $o(),en(hi),en(Jn),Jp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zp(e),null;case 13:if(en(ln),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Ce(340));qo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return en(ln),null;case 4:return $o(),null;case 10:return qp(e.type._context),null;case 22:case 23:return cm(),null;case 24:return null;default:return null}}var Ql=!1,Zn=!1,LM=typeof WeakSet=="function"?WeakSet:Set,We=null;function No(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){hn(t,e,i)}else n.current=null}function Sh(t,e,n){try{n()}catch(i){hn(t,e,i)}}var kg=!1;function DM(t,e){if(oh=$c,t=i_(),Hp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,p=t,m=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===t)break t;if(m===n&&++u===r&&(a=o),m===s&&++h===i&&(l=o),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ah={focusedElem:t,selectionRange:n},$c=!1,We=e;We!==null;)if(e=We,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,We=t;else for(;We!==null;){e=We;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var A=S.memoizedProps,x=S.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?A:Xi(e.type,A),x);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Ce(163))}}catch(E){hn(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,We=t;break}We=e.return}return S=kg,kg=!1,S}function ja(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Sh(e,n,s)}r=r.next}while(r!==i)}}function Ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Eh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Q_(t){var e=t.alternate;e!==null&&(t.alternate=null,Q_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sr],delete e[ll],delete e[uh],delete e[mM],delete e[gM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ex(t){return t.tag===5||t.tag===3||t.tag===4}function Og(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ex(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Th(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jc));else if(i!==4&&(t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}function Ah(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ah(t,e,n),t=t.sibling;t!==null;)Ah(t,e,n),t=t.sibling}var Vn=null,ji=!1;function Ur(t,e,n){for(n=n.child;n!==null;)tx(t,e,n),n=n.sibling}function tx(t,e,n){if(lr&&typeof lr.onCommitFiberUnmount=="function")try{lr.onCommitFiberUnmount(Mu,n)}catch{}switch(n.tag){case 5:Zn||No(n,e);case 6:var i=Vn,r=ji;Vn=null,Ur(t,e,n),Vn=i,ji=r,Vn!==null&&(ji?(t=Vn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vn.removeChild(n.stateNode));break;case 18:Vn!==null&&(ji?(t=Vn,n=n.stateNode,t.nodeType===8?Bd(t.parentNode,n):t.nodeType===1&&Bd(t,n),il(t)):Bd(Vn,n.stateNode));break;case 4:i=Vn,r=ji,Vn=n.stateNode.containerInfo,ji=!0,Ur(t,e,n),Vn=i,ji=r;break;case 0:case 11:case 14:case 15:if(!Zn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sh(n,e,o),r=r.next}while(r!==i)}Ur(t,e,n);break;case 1:if(!Zn&&(No(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){hn(n,e,a)}Ur(t,e,n);break;case 21:Ur(t,e,n);break;case 22:n.mode&1?(Zn=(i=Zn)||n.memoizedState!==null,Ur(t,e,n),Zn=i):Ur(t,e,n);break;default:Ur(t,e,n)}}function zg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LM),e.forEach(function(i){var r=VM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vn=a.stateNode,ji=!1;break e;case 3:Vn=a.stateNode.containerInfo,ji=!0;break e;case 4:Vn=a.stateNode.containerInfo,ji=!0;break e}a=a.return}if(Vn===null)throw Error(Ce(160));tx(s,o,r),Vn=null,ji=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){hn(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nx(e,t),e=e.sibling}function nx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bi(e,t),nr(t),i&4){try{ja(3,t,t.return),Ru(3,t)}catch(A){hn(t,t.return,A)}try{ja(5,t,t.return)}catch(A){hn(t,t.return,A)}}break;case 1:Bi(e,t),nr(t),i&512&&n!==null&&No(n,n.return);break;case 5:if(Bi(e,t),nr(t),i&512&&n!==null&&No(n,n.return),t.flags&32){var r=t.stateNode;try{Qa(r,"")}catch(A){hn(t,t.return,A)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ev(r,s),Kf(a,o);var u=Kf(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?Rv(r,p):h==="dangerouslySetInnerHTML"?bv(r,p):h==="children"?Qa(r,p):Cp(r,h,p,u)}switch(a){case"input":Xf(r,s);break;case"textarea":Tv(r,s);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ko(r,!!s.multiple,g,!1):m!==!!s.multiple&&(s.defaultValue!=null?ko(r,!!s.multiple,s.defaultValue,!0):ko(r,!!s.multiple,s.multiple?[]:"",!1))}r[ll]=s}catch(A){hn(t,t.return,A)}}break;case 6:if(Bi(e,t),nr(t),i&4){if(t.stateNode===null)throw Error(Ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(A){hn(t,t.return,A)}}break;case 3:if(Bi(e,t),nr(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{il(e.containerInfo)}catch(A){hn(t,t.return,A)}break;case 4:Bi(e,t),nr(t);break;case 13:Bi(e,t),nr(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(am=pn())),i&4&&zg(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Zn=(u=Zn)||h,Bi(e,t),Zn=u):Bi(e,t),nr(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(We=t,h=t.child;h!==null;){for(p=We=h;We!==null;){switch(m=We,g=m.child,m.tag){case 0:case 11:case 14:case 15:ja(4,m,m.return);break;case 1:No(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){i=m,n=m.return;try{e=i,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(A){hn(i,n,A)}}break;case 5:No(m,m.return);break;case 22:if(m.memoizedState!==null){Hg(p);continue}}g!==null?(g.return=m,We=g):Hg(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Cv("display",o))}catch(A){hn(t,t.return,A)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(A){hn(t,t.return,A)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Bi(e,t),nr(t),i&4&&zg(t);break;case 21:break;default:Bi(e,t),nr(t)}}function nr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ex(n)){var i=n;break e}n=n.return}throw Error(Ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qa(r,""),i.flags&=-33);var s=Og(t);Ah(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Og(t);Th(t,a,o);break;default:throw Error(Ce(161))}}catch(l){hn(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NM(t,e,n){We=t,ix(t)}function ix(t,e,n){for(var i=(t.mode&1)!==0;We!==null;){var r=We,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ql;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zn;a=Ql;var u=Zn;if(Ql=o,(Zn=l)&&!u)for(We=r;We!==null;)o=We,l=o.child,o.tag===22&&o.memoizedState!==null?Vg(r):l!==null?(l.return=o,We=l):Vg(r);for(;s!==null;)We=s,ix(s),s=s.sibling;We=r,Ql=a,Zn=u}Bg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,We=s):Bg(t)}}function Bg(t){for(;We!==null;){var e=We;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zn||Ru(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Eg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Eg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&il(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Ce(163))}Zn||e.flags&512&&Eh(e)}catch(m){hn(e,e.return,m)}}if(e===t){We=null;break}if(n=e.sibling,n!==null){n.return=e.return,We=n;break}We=e.return}}function Hg(t){for(;We!==null;){var e=We;if(e===t){We=null;break}var n=e.sibling;if(n!==null){n.return=e.return,We=n;break}We=e.return}}function Vg(t){for(;We!==null;){var e=We;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ru(4,e)}catch(l){hn(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){hn(e,r,l)}}var s=e.return;try{Eh(e)}catch(l){hn(e,s,l)}break;case 5:var o=e.return;try{Eh(e)}catch(l){hn(e,o,l)}}}catch(l){hn(e,e.return,l)}if(e===t){We=null;break}var a=e.sibling;if(a!==null){a.return=e.return,We=a;break}We=e.return}}var UM=Math.ceil,cu=Ir.ReactCurrentDispatcher,sm=Ir.ReactCurrentOwner,Fi=Ir.ReactCurrentBatchConfig,Pt=0,Nn=null,xn=null,Wn=0,Si=0,Uo=fs(0),Tn=0,pl=null,Xs=0,Pu=0,om=0,qa=null,di=null,am=0,Zo=1/0,yr=null,uu=!1,bh=null,ns=null,ec=!1,Kr=null,du=0,Ya=0,Ch=null,Fc=-1,kc=0;function ni(){return Pt&6?pn():Fc!==-1?Fc:Fc=pn()}function is(t){return t.mode&1?Pt&2&&Wn!==0?Wn&-Wn:_M.transition!==null?(kc===0&&(kc=Hv()),kc):(t=Gt,t!==0||(t=window.event,t=t===void 0?16:Yv(t.type)),t):1}function Zi(t,e,n,i){if(50<Ya)throw Ya=0,Ch=null,Error(Ce(185));Ml(t,n,i),(!(Pt&2)||t!==Nn)&&(t===Nn&&(!(Pt&2)&&(Pu|=n),Tn===4&&jr(t,Wn)),mi(t,i),n===1&&Pt===0&&!(e.mode&1)&&(Zo=pn()+500,Au&&hs()))}function mi(t,e){var n=t.callbackNode;_2(t,e);var i=Yc(t,t===Nn?Wn:0);if(i===0)n!==null&&Z0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Z0(n),e===1)t.tag===0?vM(Gg.bind(null,t)):h_(Gg.bind(null,t)),hM(function(){!(Pt&6)&&hs()}),n=null;else{switch(Vv(i)){case 1:n=Dp;break;case 4:n=zv;break;case 16:n=qc;break;case 536870912:n=Bv;break;default:n=qc}n=dx(n,rx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rx(t,e){if(Fc=-1,kc=0,Pt&6)throw Error(Ce(327));var n=t.callbackNode;if(Vo()&&t.callbackNode!==n)return null;var i=Yc(t,t===Nn?Wn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=fu(t,i);else{e=i;var r=Pt;Pt|=2;var s=ox();(Nn!==t||Wn!==e)&&(yr=null,Zo=pn()+500,Bs(t,e));do try{OM();break}catch(a){sx(t,a)}while(!0);jp(),cu.current=s,Pt=r,xn!==null?e=0:(Nn=null,Wn=0,e=Tn)}if(e!==0){if(e===2&&(r=th(t),r!==0&&(i=r,e=Rh(t,r))),e===1)throw n=pl,Bs(t,0),jr(t,i),mi(t,pn()),n;if(e===6)jr(t,i);else{if(r=t.current.alternate,!(i&30)&&!FM(r)&&(e=fu(t,i),e===2&&(s=th(t),s!==0&&(i=s,e=Rh(t,s))),e===1))throw n=pl,Bs(t,0),jr(t,i),mi(t,pn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Ce(345));case 2:Ps(t,di,yr);break;case 3:if(jr(t,i),(i&130023424)===i&&(e=am+500-pn(),10<e)){if(Yc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ni(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ch(Ps.bind(null,t,di,yr),e);break}Ps(t,di,yr);break;case 4:if(jr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ki(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=pn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*UM(i/1960))-i,10<i){t.timeoutHandle=ch(Ps.bind(null,t,di,yr),i);break}Ps(t,di,yr);break;case 5:Ps(t,di,yr);break;default:throw Error(Ce(329))}}}return mi(t,pn()),t.callbackNode===n?rx.bind(null,t):null}function Rh(t,e){var n=qa;return t.current.memoizedState.isDehydrated&&(Bs(t,e).flags|=256),t=fu(t,e),t!==2&&(e=di,di=n,e!==null&&Ph(e)),t}function Ph(t){di===null?di=t:di.push.apply(di,t)}function FM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jr(t,e){for(e&=~om,e&=~Pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ki(e),i=1<<n;t[n]=-1,e&=~i}}function Gg(t){if(Pt&6)throw Error(Ce(327));Vo();var e=Yc(t,0);if(!(e&1))return mi(t,pn()),null;var n=fu(t,e);if(t.tag!==0&&n===2){var i=th(t);i!==0&&(e=i,n=Rh(t,i))}if(n===1)throw n=pl,Bs(t,0),jr(t,e),mi(t,pn()),n;if(n===6)throw Error(Ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ps(t,di,yr),mi(t,pn()),null}function lm(t,e){var n=Pt;Pt|=1;try{return t(e)}finally{Pt=n,Pt===0&&(Zo=pn()+500,Au&&hs())}}function js(t){Kr!==null&&Kr.tag===0&&!(Pt&6)&&Vo();var e=Pt;Pt|=1;var n=Fi.transition,i=Gt;try{if(Fi.transition=null,Gt=1,t)return t()}finally{Gt=i,Fi.transition=n,Pt=e,!(Pt&6)&&hs()}}function cm(){Si=Uo.current,en(Uo)}function Bs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fM(n)),xn!==null)for(n=xn.return;n!==null;){var i=n;switch(Gp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Qc();break;case 3:$o(),en(hi),en(Jn),Jp();break;case 5:Zp(i);break;case 4:$o();break;case 13:en(ln);break;case 19:en(ln);break;case 10:qp(i.type._context);break;case 22:case 23:cm()}n=n.return}if(Nn=t,xn=t=rs(t.current,null),Wn=Si=e,Tn=0,pl=null,om=Pu=Xs=0,di=qa=null,Fs!==null){for(e=0;e<Fs.length;e++)if(n=Fs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Fs=null}return t}function sx(t,e){do{var n=xn;try{if(jp(),Dc.current=lu,au){for(var i=cn.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}au=!1}if(Ws=0,Ln=En=cn=null,Xa=!1,dl=0,sm.current=null,n===null||n.return===null){Tn=1,pl=e,xn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Pg(o);if(g!==null){g.flags&=-257,Ig(g,o,a,s,e),g.mode&1&&Rg(s,u,e),e=g,l=u;var S=e.updateQueue;if(S===null){var A=new Set;A.add(l),e.updateQueue=A}else S.add(l);break e}else{if(!(e&1)){Rg(s,u,e),um();break e}l=Error(Ce(426))}}else if(sn&&a.mode&1){var x=Pg(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Ig(x,o,a,s,e),Wp(Ko(l,a));break e}}s=l=Ko(l,a),Tn!==4&&(Tn=2),qa===null?qa=[s]:qa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=V_(s,l,e);Sg(s,d);break e;case 1:a=l;var _=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ns===null||!ns.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=G_(s,a,e);Sg(s,E);break e}}s=s.return}while(s!==null)}lx(n)}catch(I){e=I,xn===n&&n!==null&&(xn=n=n.return);continue}break}while(!0)}function ox(){var t=cu.current;return cu.current=lu,t===null?lu:t}function um(){(Tn===0||Tn===3||Tn===2)&&(Tn=4),Nn===null||!(Xs&268435455)&&!(Pu&268435455)||jr(Nn,Wn)}function fu(t,e){var n=Pt;Pt|=2;var i=ox();(Nn!==t||Wn!==e)&&(yr=null,Bs(t,e));do try{kM();break}catch(r){sx(t,r)}while(!0);if(jp(),Pt=n,cu.current=i,xn!==null)throw Error(Ce(261));return Nn=null,Wn=0,Tn}function kM(){for(;xn!==null;)ax(xn)}function OM(){for(;xn!==null&&!c2();)ax(xn)}function ax(t){var e=ux(t.alternate,t,Si);t.memoizedProps=t.pendingProps,e===null?lx(t):xn=e,sm.current=null}function lx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=IM(n,e),n!==null){n.flags&=32767,xn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tn=6,xn=null;return}}else if(n=PM(n,e,Si),n!==null){xn=n;return}if(e=e.sibling,e!==null){xn=e;return}xn=e=t}while(e!==null);Tn===0&&(Tn=5)}function Ps(t,e,n){var i=Gt,r=Fi.transition;try{Fi.transition=null,Gt=1,zM(t,e,n,i)}finally{Fi.transition=r,Gt=i}return null}function zM(t,e,n,i){do Vo();while(Kr!==null);if(Pt&6)throw Error(Ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(x2(t,s),t===Nn&&(xn=Nn=null,Wn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ec||(ec=!0,dx(qc,function(){return Vo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fi.transition,Fi.transition=null;var o=Gt;Gt=1;var a=Pt;Pt|=4,sm.current=null,DM(t,n),nx(n,t),sM(ah),$c=!!oh,ah=oh=null,t.current=n,NM(n),u2(),Pt=a,Gt=o,Fi.transition=s}else t.current=n;if(ec&&(ec=!1,Kr=t,du=r),s=t.pendingLanes,s===0&&(ns=null),h2(n.stateNode),mi(t,pn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(uu)throw uu=!1,t=bh,bh=null,t;return du&1&&t.tag!==0&&Vo(),s=t.pendingLanes,s&1?t===Ch?Ya++:(Ya=0,Ch=t):Ya=0,hs(),null}function Vo(){if(Kr!==null){var t=Vv(du),e=Fi.transition,n=Gt;try{if(Fi.transition=null,Gt=16>t?16:t,Kr===null)var i=!1;else{if(t=Kr,Kr=null,du=0,Pt&6)throw Error(Ce(331));var r=Pt;for(Pt|=4,We=t.current;We!==null;){var s=We,o=s.child;if(We.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(We=u;We!==null;){var h=We;switch(h.tag){case 0:case 11:case 15:ja(8,h,s)}var p=h.child;if(p!==null)p.return=h,We=p;else for(;We!==null;){h=We;var m=h.sibling,g=h.return;if(Q_(h),h===u){We=null;break}if(m!==null){m.return=g,We=m;break}We=g}}}var S=s.alternate;if(S!==null){var A=S.child;if(A!==null){S.child=null;do{var x=A.sibling;A.sibling=null,A=x}while(A!==null)}}We=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,We=o;else e:for(;We!==null;){if(s=We,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ja(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,We=d;break e}We=s.return}}var _=t.current;for(We=_;We!==null;){o=We;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,We=y;else e:for(o=_;We!==null;){if(a=We,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ru(9,a)}}catch(I){hn(a,a.return,I)}if(a===o){We=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,We=E;break e}We=a.return}}if(Pt=r,hs(),lr&&typeof lr.onPostCommitFiberRoot=="function")try{lr.onPostCommitFiberRoot(Mu,t)}catch{}i=!0}return i}finally{Gt=n,Fi.transition=e}}return!1}function Wg(t,e,n){e=Ko(n,e),e=V_(t,e,1),t=ts(t,e,1),e=ni(),t!==null&&(Ml(t,1,e),mi(t,e))}function hn(t,e,n){if(t.tag===3)Wg(t,t,n);else for(;e!==null;){if(e.tag===3){Wg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ns===null||!ns.has(i))){t=Ko(n,t),t=G_(e,t,1),e=ts(e,t,1),t=ni(),e!==null&&(Ml(e,1,t),mi(e,t));break}}e=e.return}}function BM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ni(),t.pingedLanes|=t.suspendedLanes&n,Nn===t&&(Wn&n)===n&&(Tn===4||Tn===3&&(Wn&130023424)===Wn&&500>pn()-am?Bs(t,0):om|=n),mi(t,e)}function cx(t,e){e===0&&(t.mode&1?(e=Wl,Wl<<=1,!(Wl&130023424)&&(Wl=4194304)):e=1);var n=ni();t=Rr(t,e),t!==null&&(Ml(t,e,n),mi(t,n))}function HM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cx(t,n)}function VM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Ce(314))}i!==null&&i.delete(e),cx(t,n)}var ux;ux=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hi.current)fi=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fi=!1,RM(t,e,n);fi=!!(t.flags&131072)}else fi=!1,sn&&e.flags&1048576&&p_(e,nu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Uc(t,e),t=e.pendingProps;var r=jo(e,Jn.current);Ho(e,n),r=em(null,e,i,t,r,n);var s=tm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pi(i)?(s=!0,eu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$p(e),r.updater=Cu,e.stateNode=r,r._reactInternals=e,gh(e,i,t,n),e=xh(null,e,i,!0,s,n)):(e.tag=0,sn&&s&&Vp(e),ti(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Uc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=WM(i),t=Xi(i,t),r){case 0:e=_h(null,e,i,t,n);break e;case 1:e=Ng(null,e,i,t,n);break e;case 11:e=Lg(null,e,i,t,n);break e;case 14:e=Dg(null,e,i,Xi(i.type,t),n);break e}throw Error(Ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),_h(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),Ng(t,e,i,r,n);case 3:e:{if(q_(e),t===null)throw Error(Ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,y_(t,e),su(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ko(Error(Ce(423)),e),e=Ug(t,e,i,n,r);break e}else if(i!==r){r=Ko(Error(Ce(424)),e),e=Ug(t,e,i,n,r);break e}else for(Ti=es(e.stateNode.containerInfo.firstChild),Ai=e,sn=!0,qi=null,n=__(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qo(),i===r){e=Pr(t,e,n);break e}ti(t,e,i,n)}e=e.child}return e;case 5:return M_(e),t===null&&hh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,lh(i,r)?o=null:s!==null&&lh(i,s)&&(e.flags|=32),j_(t,e),ti(t,e,o,n),e.child;case 6:return t===null&&hh(e),null;case 13:return Y_(t,e,n);case 4:return Kp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Yo(e,null,i,n):ti(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),Lg(t,e,i,r,n);case 7:return ti(t,e,e.pendingProps,n),e.child;case 8:return ti(t,e,e.pendingProps.children,n),e.child;case 12:return ti(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Jt(iu,i._currentValue),i._currentValue=o,s!==null)if(Qi(s.value,o)){if(s.children===r.children&&!hi.current){e=Pr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Tr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ph(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ph(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ti(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ho(e,n),r=ki(r),i=i(r),e.flags|=1,ti(t,e,i,n),e.child;case 14:return i=e.type,r=Xi(i,e.pendingProps),r=Xi(i.type,r),Dg(t,e,i,r,n);case 15:return W_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),Uc(t,e),e.tag=1,pi(i)?(t=!0,eu(e)):t=!1,Ho(e,n),H_(e,i,r),gh(e,i,r,n),xh(null,e,i,!0,t,n);case 19:return $_(t,e,n);case 22:return X_(t,e,n)}throw Error(Ce(156,e.tag))};function dx(t,e){return Ov(t,e)}function GM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ui(t,e,n,i){return new GM(t,e,n,i)}function dm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WM(t){if(typeof t=="function")return dm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pp)return 11;if(t===Ip)return 14}return 2}function rs(t,e){var n=t.alternate;return n===null?(n=Ui(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")dm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case To:return Hs(n.children,r,s,e);case Rp:o=8,r|=8;break;case Bf:return t=Ui(12,n,e,r|2),t.elementType=Bf,t.lanes=s,t;case Hf:return t=Ui(13,n,e,r),t.elementType=Hf,t.lanes=s,t;case Vf:return t=Ui(19,n,e,r),t.elementType=Vf,t.lanes=s,t;case Mv:return Iu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xv:o=10;break e;case yv:o=9;break e;case Pp:o=11;break e;case Ip:o=14;break e;case Gr:o=16,i=null;break e}throw Error(Ce(130,t==null?t:typeof t,""))}return e=Ui(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Hs(t,e,n,i){return t=Ui(7,t,i,e),t.lanes=n,t}function Iu(t,e,n,i){return t=Ui(22,t,i,e),t.elementType=Mv,t.lanes=n,t.stateNode={isHidden:!1},t}function Yd(t,e,n){return t=Ui(6,t,null,e),t.lanes=n,t}function $d(t,e,n){return e=Ui(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rd(0),this.expirationTimes=Rd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function fm(t,e,n,i,r,s,o,a,l){return t=new XM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ui(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$p(s),t}function jM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Eo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function fx(t){if(!t)return ls;t=t._reactInternals;e:{if(Ks(t)!==t||t.tag!==1)throw Error(Ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Ce(171))}if(t.tag===1){var n=t.type;if(pi(n))return f_(t,n,e)}return e}function hx(t,e,n,i,r,s,o,a,l){return t=fm(n,i,!0,t,r,s,o,a,l),t.context=fx(null),n=t.current,i=ni(),r=is(n),s=Tr(i,r),s.callback=e??null,ts(n,s,r),t.current.lanes=r,Ml(t,r,i),mi(t,i),t}function Lu(t,e,n,i){var r=e.current,s=ni(),o=is(r);return n=fx(n),e.context===null?e.context=n:e.pendingContext=n,e=Tr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ts(r,e,o),t!==null&&(Zi(t,r,o,s),Lc(t,r,o)),o}function hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hm(t,e){Xg(t,e),(t=t.alternate)&&Xg(t,e)}function qM(){return null}var px=typeof reportError=="function"?reportError:function(t){console.error(t)};function pm(t){this._internalRoot=t}Du.prototype.render=pm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Ce(409));Lu(t,e,null,null)};Du.prototype.unmount=pm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;js(function(){Lu(null,t,null,null)}),e[Cr]=null}};function Du(t){this._internalRoot=t}Du.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xr.length&&e!==0&&e<Xr[n].priority;n++);Xr.splice(n,0,t),n===0&&qv(t)}};function mm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jg(){}function YM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=hu(o);s.call(u)}}var o=hx(e,i,t,0,null,!1,!1,"",jg);return t._reactRootContainer=o,t[Cr]=o.current,ol(t.nodeType===8?t.parentNode:t),js(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=hu(l);a.call(u)}}var l=fm(t,0,!1,null,null,!1,!1,"",jg);return t._reactRootContainer=l,t[Cr]=l.current,ol(t.nodeType===8?t.parentNode:t),js(function(){Lu(e,l,n,i)}),l}function Uu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=hu(o);a.call(l)}}Lu(e,o,t,r)}else o=YM(n,e,t,r,i);return hu(o)}Gv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ka(e.pendingLanes);n!==0&&(Np(e,n|1),mi(e,pn()),!(Pt&6)&&(Zo=pn()+500,hs()))}break;case 13:js(function(){var i=Rr(t,1);if(i!==null){var r=ni();Zi(i,t,1,r)}}),hm(t,1)}};Up=function(t){if(t.tag===13){var e=Rr(t,134217728);if(e!==null){var n=ni();Zi(e,t,134217728,n)}hm(t,134217728)}};Wv=function(t){if(t.tag===13){var e=is(t),n=Rr(t,e);if(n!==null){var i=ni();Zi(n,t,e,i)}hm(t,e)}};Xv=function(){return Gt};jv=function(t,e){var n=Gt;try{return Gt=t,e()}finally{Gt=n}};Jf=function(t,e,n){switch(e){case"input":if(Xf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Tu(i);if(!r)throw Error(Ce(90));Sv(i),Xf(i,r)}}}break;case"textarea":Tv(t,n);break;case"select":e=n.value,e!=null&&ko(t,!!n.multiple,e,!1)}};Lv=lm;Dv=js;var $M={usingClientEntryPoint:!1,Events:[Sl,Ro,Tu,Pv,Iv,lm]},Ta={findFiberByHostInstance:Us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KM={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||qM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{Mu=tc.inject(KM),lr=tc}catch{}}Ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$M;Ci.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mm(e))throw Error(Ce(200));return jM(t,e,null,n)};Ci.createRoot=function(t,e){if(!mm(t))throw Error(Ce(299));var n=!1,i="",r=px;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=fm(t,1,!1,null,null,n,!1,i,r),t[Cr]=e.current,ol(t.nodeType===8?t.parentNode:t),new pm(e)};Ci.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Ce(188)):(t=Object.keys(t).join(","),Error(Ce(268,t)));return t=Fv(e),t=t===null?null:t.stateNode,t};Ci.flushSync=function(t){return js(t)};Ci.hydrate=function(t,e,n){if(!Nu(e))throw Error(Ce(200));return Uu(null,t,e,!0,n)};Ci.hydrateRoot=function(t,e,n){if(!mm(t))throw Error(Ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=px;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hx(e,null,t,1,n??null,r,!1,s,o),t[Cr]=e.current,ol(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Du(e)};Ci.render=function(t,e,n){if(!Nu(e))throw Error(Ce(200));return Uu(null,t,e,!1,n)};Ci.unmountComponentAtNode=function(t){if(!Nu(t))throw Error(Ce(40));return t._reactRootContainer?(js(function(){Uu(null,null,t,!1,function(){t._reactRootContainer=null,t[Cr]=null})}),!0):!1};Ci.unstable_batchedUpdates=lm;Ci.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Nu(n))throw Error(Ce(200));if(t==null||t._reactInternals===void 0)throw Error(Ce(38));return Uu(t,e,n,!1,i)};Ci.version="18.3.1-next-f1338f8080-20240426";function mx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mx)}catch(t){console.error(t)}}mx(),mv.exports=Ci;var ZM=mv.exports,gx,qg=ZM;gx=qg.createRoot,qg.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gm="180",JM=0,Yg=1,QM=2,vx=1,_x=2,xr=3,cs=0,gi=1,Vt=2,ss=0,Go=1,pu=2,$g=3,Kg=4,ew=5,Ds=100,tw=101,nw=102,iw=103,rw=104,sw=200,ow=201,aw=202,lw=203,Ih=204,Lh=205,cw=206,uw=207,dw=208,fw=209,hw=210,pw=211,mw=212,gw=213,vw=214,Dh=0,Nh=1,Uh=2,Jo=3,Fh=4,kh=5,Oh=6,zh=7,vm=0,_w=1,xw=2,os=0,yw=1,Mw=2,ww=3,xx=4,Sw=5,Ew=6,Tw=7,yx=300,Qo=301,ea=302,Bh=303,Hh=304,Fu=306,qr=1e3,Os=1001,Vh=1002,Ji=1003,Aw=1004,nc=1005,or=1006,Kd=1007,zs=1008,dr=1009,Mx=1010,wx=1011,ml=1012,_m=1013,qs=1014,Er=1015,Tl=1016,xm=1017,ym=1018,gl=1020,Sx=35902,Ex=35899,Tx=1021,Ax=1022,$i=1023,vl=1026,_l=1027,bx=1028,Mm=1029,Cx=1030,wm=1031,Sm=1033,zc=33776,Bc=33777,Hc=33778,Vc=33779,Gh=35840,Wh=35841,Xh=35842,jh=35843,qh=36196,Yh=37492,$h=37496,Kh=37808,Zh=37809,Jh=37810,Qh=37811,ep=37812,tp=37813,np=37814,ip=37815,rp=37816,sp=37817,op=37818,ap=37819,lp=37820,cp=37821,up=36492,dp=36494,fp=36495,hp=36283,pp=36284,mp=36285,gp=36286,bw=3200,Cw=3201,Em=0,Rw=1,Yr="",Dn="srgb",ta="srgb-linear",mu="linear",Xt="srgb",co=7680,Zg=519,Pw=512,Iw=513,Lw=514,Rx=515,Dw=516,Nw=517,Uw=518,Fw=519,Jg=35044,Qg="300 es",ar=2e3,gu=2001;class oa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zd=Math.PI/180,vp=180/Math.PI;function Al(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($n[t&255]+$n[t>>8&255]+$n[t>>16&255]+$n[t>>24&255]+"-"+$n[e&255]+$n[e>>8&255]+"-"+$n[e>>16&15|64]+$n[e>>24&255]+"-"+$n[n&63|128]+$n[n>>8&255]+"-"+$n[n>>16&255]+$n[n>>24&255]+$n[i&255]+$n[i>>8&255]+$n[i>>16&255]+$n[i>>24&255]).toLowerCase()}function wt(t,e,n){return Math.max(e,Math.min(n,t))}function kw(t,e){return(t%e+e)%e}function Jd(t,e,n){return(1-n)*t+n*e}function Aa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ci(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=wt(this.x,e.x,n.x),this.y=wt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=wt(this.x,e,n),this.y=wt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3];const m=s[o+0],g=s[o+1],S=s[o+2],A=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p;return}if(a===1){e[n+0]=m,e[n+1]=g,e[n+2]=S,e[n+3]=A;return}if(p!==A||l!==m||u!==g||h!==S){let x=1-a;const d=l*m+u*g+h*S+p*A,_=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const I=Math.sqrt(y),L=Math.atan2(I,d*_);x=Math.sin(x*L)/I,a=Math.sin(a*L)/I}const E=a*_;if(l=l*x+m*E,u=u*x+g*E,h=h*x+S*E,p=p*x+A*E,x===1-a){const I=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=I,u*=I,h*=I,p*=I}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],h=i[r+3],p=s[o],m=s[o+1],g=s[o+2],S=s[o+3];return e[n]=a*S+h*p+l*g-u*m,e[n+1]=l*S+h*m+u*p-a*g,e[n+2]=u*S+h*g+a*m-l*p,e[n+3]=h*S-a*p-l*m-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),h=a(r/2),p=a(s/2),m=l(i/2),g=l(r/2),S=l(s/2);switch(o){case"XYZ":this._x=m*h*p+u*g*S,this._y=u*g*p-m*h*S,this._z=u*h*S+m*g*p,this._w=u*h*p-m*g*S;break;case"YXZ":this._x=m*h*p+u*g*S,this._y=u*g*p-m*h*S,this._z=u*h*S-m*g*p,this._w=u*h*p+m*g*S;break;case"ZXY":this._x=m*h*p-u*g*S,this._y=u*g*p+m*h*S,this._z=u*h*S+m*g*p,this._w=u*h*p-m*g*S;break;case"ZYX":this._x=m*h*p-u*g*S,this._y=u*g*p+m*h*S,this._z=u*h*S-m*g*p,this._w=u*h*p+m*g*S;break;case"YZX":this._x=m*h*p+u*g*S,this._y=u*g*p+m*h*S,this._z=u*h*S-m*g*p,this._w=u*h*p-m*g*S;break;case"XZY":this._x=m*h*p-u*g*S,this._y=u*g*p-m*h*S,this._z=u*h*S+m*g*p,this._w=u*h*p+m*g*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],h=n[6],p=n[10],m=i+a+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>p){const g=2*Math.sqrt(1+i-a-p);this._w=(h-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>p){const g=2*Math.sqrt(1+a-i-p);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+p-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-i*u,this._z=s*h+o*u+i*l-r*a,this._w=o*h-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),p=Math.sin((1-n)*h)/u,m=Math.sin(n*h)/u;return this._w=o*p+this._w*m,this._x=i*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(e1.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(e1.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),h=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*u+o*p-a*h,this.y=i+l*h+a*u-s*p,this.z=r+l*p+s*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=wt(this.x,e.x,n.x),this.y=wt(this.y,e.y,n.y),this.z=wt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=wt(this.x,e,n),this.y=wt(this.y,e,n),this.z=wt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qd.copy(this).projectOnVector(e),this.sub(Qd)}reflect(e){return this.sub(Qd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qd=new X,e1=new bl;class vt{constructor(e,n,i,r,s,o,a,l,u){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],h=i[4],p=i[7],m=i[2],g=i[5],S=i[8],A=r[0],x=r[3],d=r[6],_=r[1],y=r[4],E=r[7],I=r[2],L=r[5],D=r[8];return s[0]=o*A+a*_+l*I,s[3]=o*x+a*y+l*L,s[6]=o*d+a*E+l*D,s[1]=u*A+h*_+p*I,s[4]=u*x+h*y+p*L,s[7]=u*d+h*E+p*D,s[2]=m*A+g*_+S*I,s[5]=m*x+g*y+S*L,s[8]=m*d+g*E+S*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return n*o*h-n*a*u-i*s*h+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],p=h*o-a*u,m=a*l-h*s,g=u*s-o*l,S=n*p+i*m+r*g;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=p*A,e[1]=(r*u-h*i)*A,e[2]=(a*i-r*o)*A,e[3]=m*A,e[4]=(h*n-r*l)*A,e[5]=(r*s-a*n)*A,e[6]=g*A,e[7]=(i*l-u*n)*A,e[8]=(o*n-i*s)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ef.makeScale(e,n)),this}rotate(e){return this.premultiply(ef.makeRotation(-e)),this}translate(e,n){return this.premultiply(ef.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ef=new vt;function Px(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function vu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ow(){const t=vu("canvas");return t.style.display="block",t}const t1={};function xl(t){t in t1||(t1[t]=!0,console.warn(t))}function zw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const n1=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),i1=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bw(){const t={enabled:!0,workingColorSpace:ta,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Xt&&(r.r=Ar(r.r),r.g=Ar(r.g),r.b=Ar(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Xt&&(r.r=Wo(r.r),r.g=Wo(r.g),r.b=Wo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yr?mu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ta]:{primaries:e,whitePoint:i,transfer:mu,toXYZ:n1,fromXYZ:i1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:Xt,toXYZ:n1,fromXYZ:i1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),t}const Dt=Bw();function Ar(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Wo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let uo;class Hw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{uo===void 0&&(uo=vu("canvas")),uo.width=e.width,uo.height=e.height;const r=uo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=uo}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=vu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ar(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ar(n[i]/255)*255):n[i]=Ar(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vw=0;class Tm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=Al(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(tf(r[o].image)):s.push(tf(r[o]))}else s=tf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function tf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Hw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gw=0;const nf=new X;class ii extends oa{constructor(e=ii.DEFAULT_IMAGE,n=ii.DEFAULT_MAPPING,i=Os,r=Os,s=or,o=zs,a=$i,l=dr,u=ii.DEFAULT_ANISOTROPY,h=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gw++}),this.uuid=Al(),this.name="",this.source=new Tm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nf).x}get height(){return this.source.getSize(nf).y}get depth(){return this.source.getSize(nf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case Os:e.x=e.x<0?0:1;break;case Vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case Os:e.y=e.y<0?0:1;break;case Vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=yx;ii.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,n=0,i=0,r=1){jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],p=l[8],m=l[1],g=l[5],S=l[9],A=l[2],x=l[6],d=l[10];if(Math.abs(h-m)<.01&&Math.abs(p-A)<.01&&Math.abs(S-x)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+A)<.1&&Math.abs(S+x)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,E=(g+1)/2,I=(d+1)/2,L=(h+m)/4,D=(p+A)/4,F=(S+x)/4;return y>E&&y>I?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=L/i,s=D/i):E>I?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=L/r,s=F/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=D/s,r=F/s),this.set(i,r,s,n),this}let _=Math.sqrt((x-S)*(x-S)+(p-A)*(p-A)+(m-h)*(m-h));return Math.abs(_)<.001&&(_=1),this.x=(x-S)/_,this.y=(p-A)/_,this.z=(m-h)/_,this.w=Math.acos((u+g+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=wt(this.x,e.x,n.x),this.y=wt(this.y,e.y,n.y),this.z=wt(this.z,e.z,n.z),this.w=wt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=wt(this.x,e,n),this.y=wt(this.y,e,n),this.z=wt(this.z,e,n),this.w=wt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ww extends oa{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:or,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new ii(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:or,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Tm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ys extends Ww{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ix extends ii{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ji,this.minFilter=Ji,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xw extends ii{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ji,this.minFilter=Ji,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cl{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hi):Hi.fromBufferAttribute(s,o),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ic.copy(i.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),rc.subVectors(this.max,ba),fo.subVectors(e.a,ba),ho.subVectors(e.b,ba),po.subVectors(e.c,ba),Fr.subVectors(ho,fo),kr.subVectors(po,ho),Ms.subVectors(fo,po);let n=[0,-Fr.z,Fr.y,0,-kr.z,kr.y,0,-Ms.z,Ms.y,Fr.z,0,-Fr.x,kr.z,0,-kr.x,Ms.z,0,-Ms.x,-Fr.y,Fr.x,0,-kr.y,kr.x,0,-Ms.y,Ms.x,0];return!rf(n,fo,ho,po,rc)||(n=[1,0,0,0,1,0,0,0,1],!rf(n,fo,ho,po,rc))?!1:(sc.crossVectors(Fr,kr),n=[sc.x,sc.y,sc.z],rf(n,fo,ho,po,rc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pr=[new X,new X,new X,new X,new X,new X,new X,new X],Hi=new X,ic=new Cl,fo=new X,ho=new X,po=new X,Fr=new X,kr=new X,Ms=new X,ba=new X,rc=new X,sc=new X,ws=new X;function rf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ws.fromArray(t,s);const a=r.x*Math.abs(ws.x)+r.y*Math.abs(ws.y)+r.z*Math.abs(ws.z),l=e.dot(ws),u=n.dot(ws),h=i.dot(ws);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const jw=new Cl,Ca=new X,sf=new X;class ku{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):jw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ca.subVectors(e,this.center);const n=Ca.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ca.copy(e.center).add(sf)),this.expandByPoint(Ca.copy(e.center).sub(sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const mr=new X,of=new X,oc=new X,Or=new X,af=new X,ac=new X,lf=new X;class Am{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,n),mr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){of.copy(e).add(n).multiplyScalar(.5),oc.copy(n).sub(e).normalize(),Or.copy(this.origin).sub(of);const s=e.distanceTo(n)*.5,o=-this.direction.dot(oc),a=Or.dot(this.direction),l=-Or.dot(oc),u=Or.lengthSq(),h=Math.abs(1-o*o);let p,m,g,S;if(h>0)if(p=o*l-a,m=o*a-l,S=s*h,p>=0)if(m>=-S)if(m<=S){const A=1/h;p*=A,m*=A,g=p*(p+o*m+2*a)+m*(o*p+m+2*l)+u}else m=s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+u;else m=-s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+u;else m<=-S?(p=Math.max(0,-(-o*s+a)),m=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+m*(m+2*l)+u):m<=S?(p=0,m=Math.min(Math.max(-s,-l),s),g=m*(m+2*l)+u):(p=Math.max(0,-(o*s+a)),m=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+m*(m+2*l)+u);else m=o>0?-s:s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(of).addScaledVector(oc,m),g}intersectSphere(e,n){mr.subVectors(e.center,this.origin);const i=mr.dot(this.direction),r=mr.dot(mr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(i=(e.min.x-m.x)*u,r=(e.max.x-m.x)*u):(i=(e.max.x-m.x)*u,r=(e.min.x-m.x)*u),h>=0?(s=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-m.z)*p,l=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,l=(e.min.z-m.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,n,i,r,s){af.subVectors(n,e),ac.subVectors(i,e),lf.crossVectors(af,ac);let o=this.direction.dot(lf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Or.subVectors(this.origin,e);const l=a*this.direction.dot(ac.crossVectors(Or,ac));if(l<0)return null;const u=a*this.direction.dot(af.cross(Or));if(u<0||l+u>o)return null;const h=-a*Or.dot(lf);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,n,i,r,s,o,a,l,u,h,p,m,g,S,A,x){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,h,p,m,g,S,A,x)}set(e,n,i,r,s,o,a,l,u,h,p,m,g,S,A,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=h,d[10]=p,d[14]=m,d[3]=g,d[7]=S,d[11]=A,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/mo.setFromMatrixColumn(e,0).length(),s=1/mo.setFromMatrixColumn(e,1).length(),o=1/mo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=o*h,g=o*p,S=a*h,A=a*p;n[0]=l*h,n[4]=-l*p,n[8]=u,n[1]=g+S*u,n[5]=m-A*u,n[9]=-a*l,n[2]=A-m*u,n[6]=S+g*u,n[10]=o*l}else if(e.order==="YXZ"){const m=l*h,g=l*p,S=u*h,A=u*p;n[0]=m+A*a,n[4]=S*a-g,n[8]=o*u,n[1]=o*p,n[5]=o*h,n[9]=-a,n[2]=g*a-S,n[6]=A+m*a,n[10]=o*l}else if(e.order==="ZXY"){const m=l*h,g=l*p,S=u*h,A=u*p;n[0]=m-A*a,n[4]=-o*p,n[8]=S+g*a,n[1]=g+S*a,n[5]=o*h,n[9]=A-m*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const m=o*h,g=o*p,S=a*h,A=a*p;n[0]=l*h,n[4]=S*u-g,n[8]=m*u+A,n[1]=l*p,n[5]=A*u+m,n[9]=g*u-S,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const m=o*l,g=o*u,S=a*l,A=a*u;n[0]=l*h,n[4]=A-m*p,n[8]=S*p+g,n[1]=p,n[5]=o*h,n[9]=-a*h,n[2]=-u*h,n[6]=g*p+S,n[10]=m-A*p}else if(e.order==="XZY"){const m=o*l,g=o*u,S=a*l,A=a*u;n[0]=l*h,n[4]=-p,n[8]=u*h,n[1]=m*p+A,n[5]=o*h,n[9]=g*p-S,n[2]=S*p-g,n[6]=a*h,n[10]=A*p+m}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qw,e,Yw)}lookAt(e,n,i){const r=this.elements;return Mi.subVectors(e,n),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),zr.crossVectors(i,Mi),zr.lengthSq()===0&&(Math.abs(i.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),zr.crossVectors(i,Mi)),zr.normalize(),lc.crossVectors(Mi,zr),r[0]=zr.x,r[4]=lc.x,r[8]=Mi.x,r[1]=zr.y,r[5]=lc.y,r[9]=Mi.y,r[2]=zr.z,r[6]=lc.z,r[10]=Mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],h=i[1],p=i[5],m=i[9],g=i[13],S=i[2],A=i[6],x=i[10],d=i[14],_=i[3],y=i[7],E=i[11],I=i[15],L=r[0],D=r[4],F=r[8],T=r[12],M=r[1],z=r[5],Y=r[9],se=r[13],ce=r[2],fe=r[6],W=r[10],te=r[14],H=r[3],oe=r[7],ue=r[11],Pe=r[15];return s[0]=o*L+a*M+l*ce+u*H,s[4]=o*D+a*z+l*fe+u*oe,s[8]=o*F+a*Y+l*W+u*ue,s[12]=o*T+a*se+l*te+u*Pe,s[1]=h*L+p*M+m*ce+g*H,s[5]=h*D+p*z+m*fe+g*oe,s[9]=h*F+p*Y+m*W+g*ue,s[13]=h*T+p*se+m*te+g*Pe,s[2]=S*L+A*M+x*ce+d*H,s[6]=S*D+A*z+x*fe+d*oe,s[10]=S*F+A*Y+x*W+d*ue,s[14]=S*T+A*se+x*te+d*Pe,s[3]=_*L+y*M+E*ce+I*H,s[7]=_*D+y*z+E*fe+I*oe,s[11]=_*F+y*Y+E*W+I*ue,s[15]=_*T+y*se+E*te+I*Pe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],p=e[6],m=e[10],g=e[14],S=e[3],A=e[7],x=e[11],d=e[15];return S*(+s*l*p-r*u*p-s*a*m+i*u*m+r*a*g-i*l*g)+A*(+n*l*g-n*u*m+s*o*m-r*o*g+r*u*h-s*l*h)+x*(+n*u*p-n*a*g-s*o*p+i*o*g+s*a*h-i*u*h)+d*(-r*a*h-n*l*p+n*a*m+r*o*p-i*o*m+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],p=e[9],m=e[10],g=e[11],S=e[12],A=e[13],x=e[14],d=e[15],_=p*x*u-A*m*u+A*l*g-a*x*g-p*l*d+a*m*d,y=S*m*u-h*x*u-S*l*g+o*x*g+h*l*d-o*m*d,E=h*A*u-S*p*u+S*a*g-o*A*g-h*a*d+o*p*d,I=S*p*l-h*A*l-S*a*m+o*A*m+h*a*x-o*p*x,L=n*_+i*y+r*E+s*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=_*D,e[1]=(A*m*s-p*x*s-A*r*g+i*x*g+p*r*d-i*m*d)*D,e[2]=(a*x*s-A*l*s+A*r*u-i*x*u-a*r*d+i*l*d)*D,e[3]=(p*l*s-a*m*s-p*r*u+i*m*u+a*r*g-i*l*g)*D,e[4]=y*D,e[5]=(h*x*s-S*m*s+S*r*g-n*x*g-h*r*d+n*m*d)*D,e[6]=(S*l*s-o*x*s-S*r*u+n*x*u+o*r*d-n*l*d)*D,e[7]=(o*m*s-h*l*s+h*r*u-n*m*u-o*r*g+n*l*g)*D,e[8]=E*D,e[9]=(S*p*s-h*A*s-S*i*g+n*A*g+h*i*d-n*p*d)*D,e[10]=(o*A*s-S*a*s+S*i*u-n*A*u-o*i*d+n*a*d)*D,e[11]=(h*a*s-o*p*s-h*i*u+n*p*u+o*i*g-n*a*g)*D,e[12]=I*D,e[13]=(h*A*r-S*p*r+S*i*m-n*A*m-h*i*x+n*p*x)*D,e[14]=(S*a*r-o*A*r-S*i*l+n*A*l+o*i*x-n*a*x)*D,e[15]=(o*p*r-h*a*r+h*i*l-n*p*l-o*i*m+n*a*m)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,h=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+i,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,h=o+o,p=a+a,m=s*u,g=s*h,S=s*p,A=o*h,x=o*p,d=a*p,_=l*u,y=l*h,E=l*p,I=i.x,L=i.y,D=i.z;return r[0]=(1-(A+d))*I,r[1]=(g+E)*I,r[2]=(S-y)*I,r[3]=0,r[4]=(g-E)*L,r[5]=(1-(m+d))*L,r[6]=(x+_)*L,r[7]=0,r[8]=(S+y)*D,r[9]=(x-_)*D,r[10]=(1-(m+A))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=mo.set(r[0],r[1],r[2]).length();const o=mo.set(r[4],r[5],r[6]).length(),a=mo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vi.copy(this);const u=1/s,h=1/o,p=1/a;return Vi.elements[0]*=u,Vi.elements[1]*=u,Vi.elements[2]*=u,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=p,Vi.elements[9]*=p,Vi.elements[10]*=p,n.setFromRotationMatrix(Vi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ar,l=!1){const u=this.elements,h=2*s/(n-e),p=2*s/(i-r),m=(n+e)/(n-e),g=(i+r)/(i-r);let S,A;if(l)S=s/(o-s),A=o*s/(o-s);else if(a===ar)S=-(o+s)/(o-s),A=-2*o*s/(o-s);else if(a===gu)S=-o/(o-s),A=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=p,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=S,u[14]=A,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ar,l=!1){const u=this.elements,h=2/(n-e),p=2/(i-r),m=-(n+e)/(n-e),g=-(i+r)/(i-r);let S,A;if(l)S=1/(o-s),A=o/(o-s);else if(a===ar)S=-2/(o-s),A=-(o+s)/(o-s);else if(a===gu)S=-1/(o-s),A=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=p,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=S,u[14]=A,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const mo=new X,Vi=new tn,qw=new X(0,0,0),Yw=new X(1,1,1),zr=new X,lc=new X,Mi=new X,r1=new tn,s1=new bl;class er{constructor(e=0,n=0,i=0,r=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],p=r[2],m=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return r1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(r1,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return s1.setFromEuler(this),this.setFromQuaternion(s1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class bm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $w=0;const o1=new X,go=new bl,gr=new tn,cc=new X,Ra=new X,Kw=new X,Zw=new bl,a1=new X(1,0,0),l1=new X(0,1,0),c1=new X(0,0,1),u1={type:"added"},Jw={type:"removed"},vo={type:"childadded",child:null},cf={type:"childremoved",child:null};class Un extends oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$w++}),this.uuid=Al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new X,n=new er,i=new bl,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tn},normalMatrix:{value:new vt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return go.setFromAxisAngle(e,n),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,n){return go.setFromAxisAngle(e,n),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(a1,e)}rotateY(e){return this.rotateOnAxis(l1,e)}rotateZ(e){return this.rotateOnAxis(c1,e)}translateOnAxis(e,n){return o1.copy(e).applyQuaternion(this.quaternion),this.position.add(o1.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(a1,e)}translateY(e){return this.translateOnAxis(l1,e)}translateZ(e){return this.translateOnAxis(c1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?cc.copy(e):cc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(Ra,cc,this.up):gr.lookAt(cc,Ra,this.up),this.quaternion.setFromRotationMatrix(gr),r&&(gr.extractRotation(r.matrixWorld),go.setFromRotationMatrix(gr),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(u1),vo.child=e,this.dispatchEvent(vo),vo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Jw),cf.child=e,this.dispatchEvent(cf),cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(u1),vo.child=e,this.dispatchEvent(vo),vo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,Kw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,Zw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),g=o(e.animations),S=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),S.length>0&&(i.nodes=S)}return i.object=r,i;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Un.DEFAULT_UP=new X(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gi=new X,vr=new X,uf=new X,_r=new X,_o=new X,xo=new X,d1=new X,df=new X,ff=new X,hf=new X,pf=new jt,mf=new jt,gf=new jt;class Yi{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gi.subVectors(e,n),r.cross(Gi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gi.subVectors(r,n),vr.subVectors(i,n),uf.subVectors(e,n);const o=Gi.dot(Gi),a=Gi.dot(vr),l=Gi.dot(uf),u=vr.dot(vr),h=vr.dot(uf),p=o*u-a*a;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(u*l-a*h)*m,S=(o*h-a*l)*m;return s.set(1-g-S,S,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_r)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_r.x),l.addScaledVector(o,_r.y),l.addScaledVector(a,_r.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return pf.setScalar(0),mf.setScalar(0),gf.setScalar(0),pf.fromBufferAttribute(e,n),mf.fromBufferAttribute(e,i),gf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(pf,s.x),o.addScaledVector(mf,s.y),o.addScaledVector(gf,s.z),o}static isFrontFacing(e,n,i,r){return Gi.subVectors(i,n),vr.subVectors(e,n),Gi.cross(vr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Gi.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;_o.subVectors(r,i),xo.subVectors(s,i),df.subVectors(e,i);const l=_o.dot(df),u=xo.dot(df);if(l<=0&&u<=0)return n.copy(i);ff.subVectors(e,r);const h=_o.dot(ff),p=xo.dot(ff);if(h>=0&&p<=h)return n.copy(r);const m=l*p-h*u;if(m<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(_o,o);hf.subVectors(e,s);const g=_o.dot(hf),S=xo.dot(hf);if(S>=0&&g<=S)return n.copy(s);const A=g*u-l*S;if(A<=0&&u>=0&&S<=0)return a=u/(u-S),n.copy(i).addScaledVector(xo,a);const x=h*S-g*p;if(x<=0&&p-h>=0&&g-S>=0)return d1.subVectors(s,r),a=(p-h)/(p-h+(g-S)),n.copy(r).addScaledVector(d1,a);const d=1/(x+A+m);return o=A*d,a=m*d,n.copy(i).addScaledVector(_o,o).addScaledVector(xo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},uc={h:0,s:0,l:0};function vf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class St{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Dt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Dt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Dt.workingColorSpace){if(e=kw(e,1),n=wt(n,0,1),i=wt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=vf(o,s,e+1/3),this.g=vf(o,s,e),this.b=vf(o,s,e-1/3)}return Dt.colorSpaceToWorking(this,r),this}setStyle(e,n=Dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){const i=Lx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=Wo(e.r),this.g=Wo(e.g),this.b=Wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return Dt.workingToColorSpace(Kn.copy(this),e),Math.round(wt(Kn.r*255,0,255))*65536+Math.round(wt(Kn.g*255,0,255))*256+Math.round(wt(Kn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Dt.workingColorSpace){Dt.workingToColorSpace(Kn.copy(this),n);const i=Kn.r,r=Kn.g,s=Kn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const p=o-a;switch(u=h<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=Dt.workingColorSpace){return Dt.workingToColorSpace(Kn.copy(this),n),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=Dn){Dt.workingToColorSpace(Kn.copy(this),e);const n=Kn.r,i=Kn.g,r=Kn.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+n,Br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Br),e.getHSL(uc);const i=Jd(Br.h,uc.h,n),r=Jd(Br.s,uc.s,n),s=Jd(Br.l,uc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new St;St.NAMES=Lx;let Qw=0;class Zs extends oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qw++}),this.uuid=Al(),this.name="",this.type="Material",this.blending=Go,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Lh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Go&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ih&&(i.blendSrc=this.blendSrc),this.blendDst!==Lh&&(i.blendDst=this.blendDst),this.blendEquation!==Ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==co&&(i.stencilFail=this.stencilFail),this.stencilZFail!==co&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==co&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mt extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=vm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _n=new X,dc=new et;let eS=0;class ur{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Jg,this.updateRanges=[],this.gpuType=Er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)dc.fromBufferAttribute(this,n),dc.applyMatrix3(e),this.setXY(n,dc.x,dc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix3(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix4(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.applyNormalMatrix(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.transformDirection(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Aa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Aa(n,this.array)),n}setX(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Aa(n,this.array)),n}setY(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Aa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Aa(n,this.array)),n}setW(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),i=ci(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),i=ci(i,this.array),r=ci(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),i=ci(i,this.array),r=ci(r,this.array),s=ci(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jg&&(e.usage=this.usage),e}}class Dx extends ur{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Nx extends ur{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class It extends ur{constructor(e,n,i){super(new Float32Array(e),n,i)}}let tS=0;const Li=new tn,_f=new Un,yo=new X,wi=new Cl,Pa=new Cl,In=new X;class mn extends oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Px(e)?Nx:Dx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new vt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,n,i){return Li.makeTranslation(e,n,i),this.applyMatrix4(Li),this}scale(e,n,i){return Li.makeScale(e,n,i),this.applyMatrix4(Li),this}lookAt(e){return _f.lookAt(e),_f.updateMatrix(),this.applyMatrix4(_f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new It(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wi.setFromBufferAttribute(s),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ku);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Pa.setFromBufferAttribute(a),this.morphTargetsRelative?(In.addVectors(wi.min,Pa.min),wi.expandByPoint(In),In.addVectors(wi.max,Pa.max),wi.expandByPoint(In)):(wi.expandByPoint(Pa.min),wi.expandByPoint(Pa.max))}wi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)In.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(In));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)In.fromBufferAttribute(a,u),l&&(yo.fromBufferAttribute(e,u),In.add(yo)),r=Math.max(r,i.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ur(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new X,l[F]=new X;const u=new X,h=new X,p=new X,m=new et,g=new et,S=new et,A=new X,x=new X;function d(F,T,M){u.fromBufferAttribute(i,F),h.fromBufferAttribute(i,T),p.fromBufferAttribute(i,M),m.fromBufferAttribute(s,F),g.fromBufferAttribute(s,T),S.fromBufferAttribute(s,M),h.sub(u),p.sub(u),g.sub(m),S.sub(m);const z=1/(g.x*S.y-S.x*g.y);isFinite(z)&&(A.copy(h).multiplyScalar(S.y).addScaledVector(p,-g.y).multiplyScalar(z),x.copy(p).multiplyScalar(g.x).addScaledVector(h,-S.x).multiplyScalar(z),a[F].add(A),a[T].add(A),a[M].add(A),l[F].add(x),l[T].add(x),l[M].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let F=0,T=_.length;F<T;++F){const M=_[F],z=M.start,Y=M.count;for(let se=z,ce=z+Y;se<ce;se+=3)d(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const y=new X,E=new X,I=new X,L=new X;function D(F){I.fromBufferAttribute(r,F),L.copy(I);const T=a[F];y.copy(T),y.sub(I.multiplyScalar(I.dot(T))).normalize(),E.crossVectors(L,T);const z=E.dot(l[F])<0?-1:1;o.setXYZW(F,y.x,y.y,y.z,z)}for(let F=0,T=_.length;F<T;++F){const M=_[F],z=M.start,Y=M.count;for(let se=z,ce=z+Y;se<ce;se+=3)D(e.getX(se+0)),D(e.getX(se+1)),D(e.getX(se+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ur(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,u=new X,h=new X,p=new X;if(e)for(let m=0,g=e.count;m<g;m+=3){const S=e.getX(m+0),A=e.getX(m+1),x=e.getX(m+2);r.fromBufferAttribute(n,S),s.fromBufferAttribute(n,A),o.fromBufferAttribute(n,x),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,S),l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,x),a.add(h),l.add(h),u.add(h),i.setXYZ(S,a.x,a.y,a.z),i.setXYZ(A,l.x,l.y,l.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let m=0,g=n.count;m<g;m+=3)r.fromBufferAttribute(n,m+0),s.fromBufferAttribute(n,m+1),o.fromBufferAttribute(n,m+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)In.fromBufferAttribute(e,n),In.normalize(),e.setXYZ(n,In.x,In.y,In.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,p=a.normalized,m=new u.constructor(l.length*h);let g=0,S=0;for(let A=0,x=l.length;A<x;A++){a.isInterleavedBufferAttribute?g=l[A]*a.data.stride+a.offset:g=l[A]*h;for(let d=0;d<h;d++)m[S++]=u[g++]}return new ur(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,p=u.length;h<p;h++){const m=u[h],g=e(m,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let p=0,m=u.length;p<m;p++){const g=u[p];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let m=0,g=p.length;m<g;m++)h.push(p[m].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const f1=new tn,Ss=new Am,fc=new ku,h1=new X,hc=new X,pc=new X,mc=new X,xf=new X,gc=new X,p1=new X,vc=new X;class B extends Un{constructor(e=new mn,n=new Mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){gc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],p=s[l];h!==0&&(xf.fromBufferAttribute(p,e),o?gc.addScaledVector(xf,h):gc.addScaledVector(xf.sub(n),h))}n.add(gc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(s),Ss.copy(e.ray).recast(e.near),!(fc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(fc,h1)===null||Ss.origin.distanceToSquared(h1)>(e.far-e.near)**2))&&(f1.copy(s).invert(),Ss.copy(e.ray).applyMatrix4(f1),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ss)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,A=m.length;S<A;S++){const x=m[S],d=o[x.materialIndex],_=Math.max(x.start,g.start),y=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let E=_,I=y;E<I;E+=3){const L=a.getX(E),D=a.getX(E+1),F=a.getX(E+2);r=_c(this,d,e,i,u,h,p,L,D,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const S=Math.max(0,g.start),A=Math.min(a.count,g.start+g.count);for(let x=S,d=A;x<d;x+=3){const _=a.getX(x),y=a.getX(x+1),E=a.getX(x+2);r=_c(this,o,e,i,u,h,p,_,y,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let S=0,A=m.length;S<A;S++){const x=m[S],d=o[x.materialIndex],_=Math.max(x.start,g.start),y=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let E=_,I=y;E<I;E+=3){const L=E,D=E+1,F=E+2;r=_c(this,d,e,i,u,h,p,L,D,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const S=Math.max(0,g.start),A=Math.min(l.count,g.start+g.count);for(let x=S,d=A;x<d;x+=3){const _=x,y=x+1,E=x+2;r=_c(this,o,e,i,u,h,p,_,y,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function nS(t,e,n,i,r,s,o,a){let l;if(e.side===gi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cs,a),l===null)return null;vc.copy(a),vc.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(vc);return u<n.near||u>n.far?null:{distance:u,point:vc.clone(),object:t}}function _c(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,hc),t.getVertexPosition(l,pc),t.getVertexPosition(u,mc);const h=nS(t,e,n,i,hc,pc,mc,p1);if(h){const p=new X;Yi.getBarycoord(p1,hc,pc,mc,p),r&&(h.uv=Yi.getInterpolatedAttribute(r,a,l,u,p,new et)),s&&(h.uv1=Yi.getInterpolatedAttribute(s,a,l,u,p,new et)),o&&(h.normal=Yi.getInterpolatedAttribute(o,a,l,u,p,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const m={a,b:l,c:u,normal:new X,materialIndex:0};Yi.getNormal(hc,pc,mc,m.normal),h.face=m,h.barycoord=p}return h}class Gn extends mn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],p=[];let m=0,g=0;S("z","y","x",-1,-1,i,n,e,o,s,0),S("z","y","x",1,-1,i,n,-e,o,s,1),S("x","z","y",1,1,e,i,n,r,o,2),S("x","z","y",1,-1,e,i,-n,r,o,3),S("x","y","z",1,-1,e,n,i,r,s,4),S("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(p,2));function S(A,x,d,_,y,E,I,L,D,F,T){const M=E/D,z=I/F,Y=E/2,se=I/2,ce=L/2,fe=D+1,W=F+1;let te=0,H=0;const oe=new X;for(let ue=0;ue<W;ue++){const Pe=ue*z-se;for(let ze=0;ze<fe;ze++){const _t=ze*M-Y;oe[A]=_t*_,oe[x]=Pe*y,oe[d]=ce,u.push(oe.x,oe.y,oe.z),oe[A]=0,oe[x]=0,oe[d]=L>0?1:-1,h.push(oe.x,oe.y,oe.z),p.push(ze/D),p.push(1-ue/F),te+=1}}for(let ue=0;ue<F;ue++)for(let Pe=0;Pe<D;Pe++){const ze=m+Pe+fe*ue,_t=m+Pe+fe*(ue+1),ft=m+(Pe+1)+fe*(ue+1),Ie=m+(Pe+1)+fe*ue;l.push(ze,_t,Ie),l.push(_t,ft,Ie),H+=6}a.addGroup(g,H,T),g+=H,m+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function na(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function ei(t){const e={};for(let n=0;n<t.length;n++){const i=na(t[n]);for(const r in i)e[r]=i[r]}return e}function iS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ux(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const rS={clone:na,merge:ei};var sS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class us extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sS,this.fragmentShader=oS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=iS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Fx extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ar,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new X,m1=new et,g1=new et;class Ei extends Fx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vp*2*Math.atan(Math.tan(Zd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,n){return this.getViewBounds(e,m1,g1),n.subVectors(g1,m1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Mo=-90,wo=1;class aS extends Un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ei(Mo,wo,e,n);r.layers=this.layers,this.add(r);const s=new Ei(Mo,wo,e,n);s.layers=this.layers,this.add(s);const o=new Ei(Mo,wo,e,n);o.layers=this.layers,this.add(o);const a=new Ei(Mo,wo,e,n);a.layers=this.layers,this.add(a);const l=new Ei(Mo,wo,e,n);l.layers=this.layers,this.add(l);const u=new Ei(Mo,wo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ar)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,m,g),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class kx extends ii{constructor(e=[],n=Qo,i,r,s,o,a,l,u,h){super(e,n,i,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lS extends Ys{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new kx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gn(5,5,5),s=new us({name:"CubemapFromEquirect",uniforms:na(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gi,blending:ss});s.uniforms.tEquirect.value=n;const o=new B(r,s),a=n.minFilter;return n.minFilter===zs&&(n.minFilter=or),new aS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Ge extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cS={type:"move"};class yf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const A of e.hand.values()){const x=n.getJointPose(A,i),d=this._getHandJoint(u,A);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=h.position.distanceTo(p.position),g=.02,S=.005;u.inputState.pinching&&m>g+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=g-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ge;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Cm{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(e),this.density=n}clone(){return new Cm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uS extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Mf=new X,dS=new X,fS=new vt;class Is{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Mf.subVectors(i,n).cross(dS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Mf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||fS.getNormalMatrix(e),r=this.coplanarPoint(Mf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new ku,hS=new et(.5,.5),xc=new X;class Rm{constructor(e=new Is,n=new Is,i=new Is,r=new Is,s=new Is,o=new Is){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ar,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],h=s[4],p=s[5],m=s[6],g=s[7],S=s[8],A=s[9],x=s[10],d=s[11],_=s[12],y=s[13],E=s[14],I=s[15];if(r[0].setComponents(u-o,g-h,d-S,I-_).normalize(),r[1].setComponents(u+o,g+h,d+S,I+_).normalize(),r[2].setComponents(u+a,g+p,d+A,I+y).normalize(),r[3].setComponents(u-a,g-p,d-A,I-y).normalize(),i)r[4].setComponents(l,m,x,E).normalize(),r[5].setComponents(u-l,g-m,d-x,I-E).normalize();else if(r[4].setComponents(u-l,g-m,d-x,I-E).normalize(),n===ar)r[5].setComponents(u+l,g+m,d+x,I+E).normalize();else if(n===gu)r[5].setComponents(l,m,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const n=hS.distanceTo(e.center);return Es.radius=.7071067811865476+n,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xc.x=r.normal.x>0?e.max.x:e.min.x,xc.y=r.normal.y>0?e.max.y:e.min.y,xc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _p extends Zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _u=new X,xu=new X,v1=new tn,Ia=new Am,yc=new ku,wf=new X,_1=new X;class x1 extends Un{constructor(e=new mn,n=new _p){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)_u.fromBufferAttribute(n,r-1),xu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=_u.distanceTo(xu);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(r),yc.radius+=s,e.ray.intersectsSphere(yc)===!1)return;v1.copy(r).invert(),Ia.copy(e.ray).applyMatrix4(v1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,h=i.index,m=i.attributes.position;if(h!==null){const g=Math.max(0,o.start),S=Math.min(h.count,o.start+o.count);for(let A=g,x=S-1;A<x;A+=u){const d=h.getX(A),_=h.getX(A+1),y=Mc(this,e,Ia,l,d,_,A);y&&n.push(y)}if(this.isLineLoop){const A=h.getX(S-1),x=h.getX(g),d=Mc(this,e,Ia,l,A,x,S-1);d&&n.push(d)}}else{const g=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let A=g,x=S-1;A<x;A+=u){const d=Mc(this,e,Ia,l,A,A+1,A);d&&n.push(d)}if(this.isLineLoop){const A=Mc(this,e,Ia,l,S-1,g,S-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Mc(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(_u.fromBufferAttribute(a,r),xu.fromBufferAttribute(a,s),n.distanceSqToSegment(_u,xu,wf,_1)>i)return;wf.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(wf);if(!(u<e.near||u>e.far))return{distance:u,point:_1.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class Ts extends ii{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ox extends ii{constructor(e,n,i=qs,r,s,o,a=Ji,l=Ji,u,h=vl,p=1){if(h!==vl&&h!==_l)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:n,depth:p};super(m,r,s,o,a,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zx extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ui extends mn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],u=[],h=n/2,p=Math.PI/2*e,m=n,g=2*p+m,S=i*2+s,A=r+1,x=new X,d=new X;for(let _=0;_<=S;_++){let y=0,E=0,I=0,L=0;if(_<=i){const T=_/i,M=T*Math.PI/2;E=-h-e*Math.cos(M),I=e*Math.sin(M),L=-e*Math.cos(M),y=T*p}else if(_<=i+s){const T=(_-i)/s;E=-h+T*n,I=e,L=0,y=p+T*m}else{const T=(_-i-s)/i,M=T*Math.PI/2;E=h+e*Math.sin(M),I=e*Math.cos(M),L=e*Math.sin(M),y=p+m+T*p}const D=Math.max(0,Math.min(1,y/g));let F=0;_===0?F=.5/r:_===S&&(F=-.5/r);for(let T=0;T<=r;T++){const M=T/r,z=M*Math.PI*2,Y=Math.sin(z),se=Math.cos(z);d.x=-I*se,d.y=E,d.z=I*Y,a.push(d.x,d.y,d.z),x.set(-I*se,L,I*Y),x.normalize(),l.push(x.x,x.y,x.z),u.push(M+F,D)}if(_>0){const T=(_-1)*A;for(let M=0;M<r;M++){const z=T+M,Y=T+M+1,se=_*A+M,ce=_*A+M+1;o.push(z,Y,se),o.push(Y,ce,se)}}}this.setIndex(o),this.setAttribute("position",new It(a,3)),this.setAttribute("normal",new It(l,3)),this.setAttribute("uv",new It(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Hn extends mn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],u=new X,h=new et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,m=3;p<=n;p++,m+=3){const g=i+p/n*r;u.x=e*Math.cos(g),u.y=e*Math.sin(g),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[m]/e+1)/2,h.y=(o[m+1]/e+1)/2,l.push(h.x,h.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new It(o,3)),this.setAttribute("normal",new It(a,3)),this.setAttribute("uv",new It(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qe extends mn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],m=[],g=[];let S=0;const A=[],x=i/2;let d=0;_(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(m,3)),this.setAttribute("uv",new It(g,2));function _(){const E=new X,I=new X;let L=0;const D=(n-e)/i;for(let F=0;F<=s;F++){const T=[],M=F/s,z=M*(n-e)+e;for(let Y=0;Y<=r;Y++){const se=Y/r,ce=se*l+a,fe=Math.sin(ce),W=Math.cos(ce);I.x=z*fe,I.y=-M*i+x,I.z=z*W,p.push(I.x,I.y,I.z),E.set(fe,D,W).normalize(),m.push(E.x,E.y,E.z),g.push(se,1-M),T.push(S++)}A.push(T)}for(let F=0;F<r;F++)for(let T=0;T<s;T++){const M=A[T][F],z=A[T+1][F],Y=A[T+1][F+1],se=A[T][F+1];(e>0||T!==0)&&(h.push(M,z,se),L+=3),(n>0||T!==s-1)&&(h.push(z,Y,se),L+=3)}u.addGroup(d,L,0),d+=L}function y(E){const I=S,L=new et,D=new X;let F=0;const T=E===!0?e:n,M=E===!0?1:-1;for(let Y=1;Y<=r;Y++)p.push(0,x*M,0),m.push(0,M,0),g.push(.5,.5),S++;const z=S;for(let Y=0;Y<=r;Y++){const ce=Y/r*l+a,fe=Math.cos(ce),W=Math.sin(ce);D.x=T*W,D.y=x*M,D.z=T*fe,p.push(D.x,D.y,D.z),m.push(0,M,0),L.x=fe*.5+.5,L.y=W*.5*M+.5,g.push(L.x,L.y),S++}for(let Y=0;Y<r;Y++){const se=I+Y,ce=z+Y;E===!0?h.push(ce,ce+1,se):h.push(ce+1,ce,se),F+=3}u.addGroup(d,F,E===!0?1:2),d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fn extends Qe{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new fn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pm extends mn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),u(i),h(),this.setAttribute("position",new It(s,3)),this.setAttribute("normal",new It(s.slice(),3)),this.setAttribute("uv",new It(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new X,E=new X,I=new X;for(let L=0;L<n.length;L+=3)g(n[L+0],y),g(n[L+1],E),g(n[L+2],I),l(y,E,I,_)}function l(_,y,E,I){const L=I+1,D=[];for(let F=0;F<=L;F++){D[F]=[];const T=_.clone().lerp(E,F/L),M=y.clone().lerp(E,F/L),z=L-F;for(let Y=0;Y<=z;Y++)Y===0&&F===L?D[F][Y]=T:D[F][Y]=T.clone().lerp(M,Y/z)}for(let F=0;F<L;F++)for(let T=0;T<2*(L-F)-1;T++){const M=Math.floor(T/2);T%2===0?(m(D[F][M+1]),m(D[F+1][M]),m(D[F][M])):(m(D[F][M+1]),m(D[F+1][M+1]),m(D[F+1][M]))}}function u(_){const y=new X;for(let E=0;E<s.length;E+=3)y.x=s[E+0],y.y=s[E+1],y.z=s[E+2],y.normalize().multiplyScalar(_),s[E+0]=y.x,s[E+1]=y.y,s[E+2]=y.z}function h(){const _=new X;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const E=x(_)/2/Math.PI+.5,I=d(_)/Math.PI+.5;o.push(E,1-I)}S(),p()}function p(){for(let _=0;_<o.length;_+=6){const y=o[_+0],E=o[_+2],I=o[_+4],L=Math.max(y,E,I),D=Math.min(y,E,I);L>.9&&D<.1&&(y<.2&&(o[_+0]+=1),E<.2&&(o[_+2]+=1),I<.2&&(o[_+4]+=1))}}function m(_){s.push(_.x,_.y,_.z)}function g(_,y){const E=_*3;y.x=e[E+0],y.y=e[E+1],y.z=e[E+2]}function S(){const _=new X,y=new X,E=new X,I=new X,L=new et,D=new et,F=new et;for(let T=0,M=0;T<s.length;T+=9,M+=6){_.set(s[T+0],s[T+1],s[T+2]),y.set(s[T+3],s[T+4],s[T+5]),E.set(s[T+6],s[T+7],s[T+8]),L.set(o[M+0],o[M+1]),D.set(o[M+2],o[M+3]),F.set(o[M+4],o[M+5]),I.copy(_).add(y).add(E).divideScalar(3);const z=x(I);A(L,M+0,_,z),A(D,M+2,y,z),A(F,M+4,E,z)}}function A(_,y,E,I){I<0&&_.x===1&&(o[y]=_.x-1),E.x===0&&E.z===0&&(o[y]=I/2/Math.PI+.5)}function x(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pm(e.vertices,e.indices,e.radius,e.details)}}class Zt extends Pm{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Zt(e.radius,e.detail)}}class Lr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],m=i[r+1]-h,g=(o-h)/m;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new et:new X);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new X,r=[],s=[],o=[],a=new X,l=new tn;for(let g=0;g<=e;g++){const S=g/e;r[g]=this.getTangentAt(S,new X)}s[0]=new X,o[0]=new X;let u=Number.MAX_VALUE;const h=Math.abs(r[0].x),p=Math.abs(r[0].y),m=Math.abs(r[0].z);h<=u&&(u=h,i.set(1,0,0)),p<=u&&(u=p,i.set(0,1,0)),m<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();const S=Math.acos(wt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,S))}o[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(wt(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(g=-g);for(let S=1;S<=e;S++)s[S].applyMatrix4(l.makeRotationAxis(r[S],g*S)),o[S].crossVectors(r[S],s[S])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Bx extends Lr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new et){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=l-this.aX,g=u-this.aY;l=m*h-g*p+this.aX,u=m*p+g*h+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class pS extends Bx{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Im(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,h,p){let m=(o-s)/u-(a-s)/(u+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+p)+(l-a)/p;m*=h,g*=h,r(o,a,m,g)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const wc=new X,Sf=new Im,Ef=new Im,Tf=new Im;class xp extends Lr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new X){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,h;this.closed||a>0?u=r[(a-1)%s]:(wc.subVectors(r[0],r[1]).add(r[0]),u=wc);const p=r[a%s],m=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(wc.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=wc),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let S=Math.pow(u.distanceToSquared(p),g),A=Math.pow(p.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(h),g);A<1e-4&&(A=1),S<1e-4&&(S=A),x<1e-4&&(x=A),Sf.initNonuniformCatmullRom(u.x,p.x,m.x,h.x,S,A,x),Ef.initNonuniformCatmullRom(u.y,p.y,m.y,h.y,S,A,x),Tf.initNonuniformCatmullRom(u.z,p.z,m.z,h.z,S,A,x)}else this.curveType==="catmullrom"&&(Sf.initCatmullRom(u.x,p.x,m.x,h.x,this.tension),Ef.initCatmullRom(u.y,p.y,m.y,h.y,this.tension),Tf.initCatmullRom(u.z,p.z,m.z,h.z,this.tension));return i.set(Sf.calc(l),Ef.calc(l),Tf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new X().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function y1(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function mS(t,e){const n=1-t;return n*n*e}function gS(t,e){return 2*(1-t)*t*e}function vS(t,e){return t*t*e}function $a(t,e,n,i){return mS(t,e)+gS(t,n)+vS(t,i)}function _S(t,e){const n=1-t;return n*n*n*e}function xS(t,e){const n=1-t;return 3*n*n*t*e}function yS(t,e){return 3*(1-t)*t*t*e}function MS(t,e){return t*t*t*e}function Ka(t,e,n,i,r){return _S(t,e)+xS(t,n)+yS(t,i)+MS(t,r)}class wS extends Lr{constructor(e=new et,n=new et,i=new et,r=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new et){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ka(e,r.x,s.x,o.x,a.x),Ka(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class SS extends Lr{constructor(e=new X,n=new X,i=new X,r=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new X){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ka(e,r.x,s.x,o.x,a.x),Ka(e,r.y,s.y,o.y,a.y),Ka(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ES extends Lr{constructor(e=new et,n=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new et){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new et){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class TS extends Lr{constructor(e=new X,n=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new X){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new X){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class AS extends Lr{constructor(e=new et,n=new et,i=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new et){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set($a(e,r.x,s.x,o.x),$a(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hx extends Lr{constructor(e=new X,n=new X,i=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new X){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set($a(e,r.x,s.x,o.x),$a(e,r.y,s.y,o.y),$a(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bS extends Lr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new et){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],h=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return i.set(y1(a,l.x,u.x,h.x,p.x),y1(a,l.y,u.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new et().fromArray(r))}return this}}var CS=Object.freeze({__proto__:null,ArcCurve:pS,CatmullRomCurve3:xp,CubicBezierCurve:wS,CubicBezierCurve3:SS,EllipseCurve:Bx,LineCurve:ES,LineCurve3:TS,QuadraticBezierCurve:AS,QuadraticBezierCurve3:Hx,SplineCurve:bS});class Sn extends mn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,h=l+1,p=e/a,m=n/l,g=[],S=[],A=[],x=[];for(let d=0;d<h;d++){const _=d*m-o;for(let y=0;y<u;y++){const E=y*p-s;S.push(E,-_,0),A.push(0,0,1),x.push(y/a),x.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const y=_+u*d,E=_+u*(d+1),I=_+1+u*(d+1),L=_+1+u*d;g.push(y,E,L),g.push(E,I,L)}this.setIndex(g),this.setAttribute("position",new It(S,3)),this.setAttribute("normal",new It(A,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ut extends mn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const h=[],p=new X,m=new X,g=[],S=[],A=[],x=[];for(let d=0;d<=i;d++){const _=[],y=d/i;let E=0;d===0&&o===0?E=.5/n:d===i&&l===Math.PI&&(E=-.5/n);for(let I=0;I<=n;I++){const L=I/n;p.x=-e*Math.cos(r+L*s)*Math.sin(o+y*a),p.y=e*Math.cos(o+y*a),p.z=e*Math.sin(r+L*s)*Math.sin(o+y*a),S.push(p.x,p.y,p.z),m.copy(p).normalize(),A.push(m.x,m.y,m.z),x.push(L+E,1-y),_.push(u++)}h.push(_)}for(let d=0;d<i;d++)for(let _=0;_<n;_++){const y=h[d][_+1],E=h[d][_],I=h[d+1][_],L=h[d+1][_+1];(d!==0||o>0)&&g.push(y,E,L),(d!==i-1||l<Math.PI)&&g.push(E,I,L)}this.setIndex(g),this.setAttribute("position",new It(S,3)),this.setAttribute("normal",new It(A,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kt extends mn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],h=new X,p=new X,m=new X;for(let g=0;g<=i;g++)for(let S=0;S<=r;S++){const A=S/r*s,x=g/i*Math.PI*2;p.x=(e+n*Math.cos(x))*Math.cos(A),p.y=(e+n*Math.cos(x))*Math.sin(A),p.z=n*Math.sin(x),a.push(p.x,p.y,p.z),h.x=e*Math.cos(A),h.y=e*Math.sin(A),m.subVectors(p,h).normalize(),l.push(m.x,m.y,m.z),u.push(S/r),u.push(g/i)}for(let g=1;g<=i;g++)for(let S=1;S<=r;S++){const A=(r+1)*g+S-1,x=(r+1)*(g-1)+S-1,d=(r+1)*(g-1)+S,_=(r+1)*g+S;o.push(A,x,_),o.push(x,d,_)}this.setIndex(o),this.setAttribute("position",new It(a,3)),this.setAttribute("normal",new It(l,3)),this.setAttribute("uv",new It(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Za extends mn{constructor(e=new Hx(new X(-1,-1,0),new X(-1,1,0),new X(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new X,l=new X,u=new et;let h=new X;const p=[],m=[],g=[],S=[];A(),this.setIndex(S),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(m,3)),this.setAttribute("uv",new It(g,2));function A(){for(let y=0;y<n;y++)x(y);x(s===!1?n:0),_(),d()}function x(y){h=e.getPointAt(y/n,h);const E=o.normals[y],I=o.binormals[y];for(let L=0;L<=r;L++){const D=L/r*Math.PI*2,F=Math.sin(D),T=-Math.cos(D);l.x=T*E.x+F*I.x,l.y=T*E.y+F*I.y,l.z=T*E.z+F*I.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,p.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=n;y++)for(let E=1;E<=r;E++){const I=(r+1)*(y-1)+(E-1),L=(r+1)*y+(E-1),D=(r+1)*y+E,F=(r+1)*(y-1)+E;S.push(I,L,F),S.push(L,D,F)}}function _(){for(let y=0;y<=n;y++)for(let E=0;E<=r;E++)u.x=y/n,u.y=E/r,g.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Za(new CS[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ae extends Zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Em,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Af extends Zs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Em,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=vm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class RS extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PS extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lm extends Un{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class IS extends Lm{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const bf=new tn,M1=new X,w1=new X;class Vx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=dr,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rm,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;M1.setFromMatrixPosition(e.matrixWorld),n.position.copy(M1),w1.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(w1),n.updateMatrixWorld(),bf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bf,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const S1=new tn,La=new X,Cf=new X;class LS extends Vx{constructor(){super(new Ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),La.setFromMatrixPosition(e.matrixWorld),i.position.copy(La),Cf.copy(i.position),Cf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Cf),i.updateMatrixWorld(),r.makeTranslation(-La.x,-La.y,-La.z),S1.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(S1,i.coordinateSystem,i.reversedDepth)}}class Wi extends Lm{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new LS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gx extends Fx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class DS extends Vx{constructor(){super(new Gx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E1 extends Lm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new DS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class NS extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const T1=new tn;class US{constructor(e,n,i=0,r=1/0){this.ray=new Am(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new bm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return T1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(T1),this}intersectObject(e,n=!0,i=[]){return yp(e,this,i,n),i.sort(A1),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)yp(e[r],this,i,n);return i.sort(A1),i}}function A1(t,e){return t.distance-e.distance}function yp(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)yp(s[o],e,n,!0)}}function b1(t,e,n,i){const r=FS(i);switch(n){case Tx:return t*e;case bx:return t*e/r.components*r.byteLength;case Mm:return t*e/r.components*r.byteLength;case Cx:return t*e*2/r.components*r.byteLength;case wm:return t*e*2/r.components*r.byteLength;case Ax:return t*e*3/r.components*r.byteLength;case $i:return t*e*4/r.components*r.byteLength;case Sm:return t*e*4/r.components*r.byteLength;case zc:case Bc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hc:case Vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wh:case jh:return Math.max(t,16)*Math.max(e,8)/4;case Gh:case Xh:return Math.max(t,8)*Math.max(e,8)/2;case qh:case Yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $h:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ep:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case tp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case np:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ip:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case rp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case sp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case op:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ap:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case lp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case cp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case up:case dp:case fp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case hp:case pp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case mp:case gp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function FS(t){switch(t){case dr:case Mx:return{byteLength:1,components:1};case ml:case wx:case Tl:return{byteLength:2,components:1};case xm:case ym:return{byteLength:2,components:4};case qs:case _m:case Er:return{byteLength:4,components:1};case Sx:case Ex:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function kS(t){const e=new WeakMap;function n(a,l){const u=a.array,h=a.usage,p=u.byteLength,m=t.createBuffer();t.bindBuffer(l,m),t.bufferData(l,u,h),a.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,u){const h=l.array,p=l.updateRanges;if(t.bindBuffer(u,a),p.length===0)t.bufferSubData(u,0,h);else{p.sort((g,S)=>g.start-S.start);let m=0;for(let g=1;g<p.length;g++){const S=p[m],A=p[g];A.start<=S.start+S.count+1?S.count=Math.max(S.count,A.start+A.count-S.start):(++m,p[m]=A)}p.length=m+1;for(let g=0,S=p.length;g<S;g++){const A=p[g];t.bufferSubData(u,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var OS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,aE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pE="gl_FragColor = linearToOutputTexel( gl_FragColor );",mE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_E=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ME=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$E=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,e3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,h3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,y3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,S3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,b3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,F3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,X3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,j3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,q3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:OS,alphahash_pars_fragment:zS,alphamap_fragment:BS,alphamap_pars_fragment:HS,alphatest_fragment:VS,alphatest_pars_fragment:GS,aomap_fragment:WS,aomap_pars_fragment:XS,batching_pars_vertex:jS,batching_vertex:qS,begin_vertex:YS,beginnormal_vertex:$S,bsdfs:KS,iridescence_fragment:ZS,bumpmap_pars_fragment:JS,clipping_planes_fragment:QS,clipping_planes_pars_fragment:eE,clipping_planes_pars_vertex:tE,clipping_planes_vertex:nE,color_fragment:iE,color_pars_fragment:rE,color_pars_vertex:sE,color_vertex:oE,common:aE,cube_uv_reflection_fragment:lE,defaultnormal_vertex:cE,displacementmap_pars_vertex:uE,displacementmap_vertex:dE,emissivemap_fragment:fE,emissivemap_pars_fragment:hE,colorspace_fragment:pE,colorspace_pars_fragment:mE,envmap_fragment:gE,envmap_common_pars_fragment:vE,envmap_pars_fragment:_E,envmap_pars_vertex:xE,envmap_physical_pars_fragment:PE,envmap_vertex:yE,fog_vertex:ME,fog_pars_vertex:wE,fog_fragment:SE,fog_pars_fragment:EE,gradientmap_pars_fragment:TE,lightmap_pars_fragment:AE,lights_lambert_fragment:bE,lights_lambert_pars_fragment:CE,lights_pars_begin:RE,lights_toon_fragment:IE,lights_toon_pars_fragment:LE,lights_phong_fragment:DE,lights_phong_pars_fragment:NE,lights_physical_fragment:UE,lights_physical_pars_fragment:FE,lights_fragment_begin:kE,lights_fragment_maps:OE,lights_fragment_end:zE,logdepthbuf_fragment:BE,logdepthbuf_pars_fragment:HE,logdepthbuf_pars_vertex:VE,logdepthbuf_vertex:GE,map_fragment:WE,map_pars_fragment:XE,map_particle_fragment:jE,map_particle_pars_fragment:qE,metalnessmap_fragment:YE,metalnessmap_pars_fragment:$E,morphinstance_vertex:KE,morphcolor_vertex:ZE,morphnormal_vertex:JE,morphtarget_pars_vertex:QE,morphtarget_vertex:e3,normal_fragment_begin:t3,normal_fragment_maps:n3,normal_pars_fragment:i3,normal_pars_vertex:r3,normal_vertex:s3,normalmap_pars_fragment:o3,clearcoat_normal_fragment_begin:a3,clearcoat_normal_fragment_maps:l3,clearcoat_pars_fragment:c3,iridescence_pars_fragment:u3,opaque_fragment:d3,packing:f3,premultiplied_alpha_fragment:h3,project_vertex:p3,dithering_fragment:m3,dithering_pars_fragment:g3,roughnessmap_fragment:v3,roughnessmap_pars_fragment:_3,shadowmap_pars_fragment:x3,shadowmap_pars_vertex:y3,shadowmap_vertex:M3,shadowmask_pars_fragment:w3,skinbase_vertex:S3,skinning_pars_vertex:E3,skinning_vertex:T3,skinnormal_vertex:A3,specularmap_fragment:b3,specularmap_pars_fragment:C3,tonemapping_fragment:R3,tonemapping_pars_fragment:P3,transmission_fragment:I3,transmission_pars_fragment:L3,uv_pars_fragment:D3,uv_pars_vertex:N3,uv_vertex:U3,worldpos_vertex:F3,background_vert:k3,background_frag:O3,backgroundCube_vert:z3,backgroundCube_frag:B3,cube_vert:H3,cube_frag:V3,depth_vert:G3,depth_frag:W3,distanceRGBA_vert:X3,distanceRGBA_frag:j3,equirect_vert:q3,equirect_frag:Y3,linedashed_vert:$3,linedashed_frag:K3,meshbasic_vert:Z3,meshbasic_frag:J3,meshlambert_vert:Q3,meshlambert_frag:eT,meshmatcap_vert:tT,meshmatcap_frag:nT,meshnormal_vert:iT,meshnormal_frag:rT,meshphong_vert:sT,meshphong_frag:oT,meshphysical_vert:aT,meshphysical_frag:lT,meshtoon_vert:cT,meshtoon_frag:uT,points_vert:dT,points_frag:fT,shadow_vert:hT,shadow_frag:pT,sprite_vert:mT,sprite_frag:gT},ke={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},rr={basic:{uniforms:ei([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:ei([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new St(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:ei([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:ei([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:ei([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new St(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:ei([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:ei([ke.points,ke.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:ei([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:ei([ke.common,ke.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:ei([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:ei([ke.sprite,ke.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:ei([ke.common,ke.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:ei([ke.lights,ke.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};rr.physical={uniforms:ei([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Sc={r:0,b:0,g:0},As=new er,vT=new tn;function _T(t,e,n,i,r,s,o){const a=new St(0);let l=s===!0?0:1,u,h,p=null,m=0,g=null;function S(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?n:e).get(E)),E}function A(y){let E=!1;const I=S(y);I===null?d(a,l):I&&I.isColor&&(d(I,1),E=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(y,E){const I=S(E);I&&(I.isCubeTexture||I.mapping===Fu)?(h===void 0&&(h=new B(new Gn(1,1,1),new us({name:"BackgroundCubeMaterial",uniforms:na(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),As.copy(E.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vT.makeRotationFromEuler(As)),h.material.toneMapped=Dt.getTransfer(I.colorSpace)!==Xt,(p!==I||m!==I.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,p=I,m=I.version,g=t.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(u===void 0&&(u=new B(new Sn(2,2),new us({name:"BackgroundMaterial",uniforms:na(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=I,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=Dt.getTransfer(I.colorSpace)!==Xt,I.matrixAutoUpdate===!0&&I.updateMatrix(),u.material.uniforms.uvTransform.value.copy(I.matrix),(p!==I||m!==I.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,p=I,m=I.version,g=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function d(y,E){y.getRGB(Sc,Ux(t)),i.buffers.color.setClear(Sc.r,Sc.g,Sc.b,E,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:A,addToRenderList:x,dispose:_}}function xT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,o=!1;function a(M,z,Y,se,ce){let fe=!1;const W=p(se,Y,z);s!==W&&(s=W,u(s.object)),fe=g(M,se,Y,ce),fe&&S(M,se,Y,ce),ce!==null&&e.update(ce,t.ELEMENT_ARRAY_BUFFER),(fe||o)&&(o=!1,E(M,z,Y,se),ce!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function l(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function h(M){return t.deleteVertexArray(M)}function p(M,z,Y){const se=Y.wireframe===!0;let ce=i[M.id];ce===void 0&&(ce={},i[M.id]=ce);let fe=ce[z.id];fe===void 0&&(fe={},ce[z.id]=fe);let W=fe[se];return W===void 0&&(W=m(l()),fe[se]=W),W}function m(M){const z=[],Y=[],se=[];for(let ce=0;ce<n;ce++)z[ce]=0,Y[ce]=0,se[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:se,object:M,attributes:{},index:null}}function g(M,z,Y,se){const ce=s.attributes,fe=z.attributes;let W=0;const te=Y.getAttributes();for(const H in te)if(te[H].location>=0){const ue=ce[H];let Pe=fe[H];if(Pe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Pe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Pe=M.instanceColor)),ue===void 0||ue.attribute!==Pe||Pe&&ue.data!==Pe.data)return!0;W++}return s.attributesNum!==W||s.index!==se}function S(M,z,Y,se){const ce={},fe=z.attributes;let W=0;const te=Y.getAttributes();for(const H in te)if(te[H].location>=0){let ue=fe[H];ue===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const Pe={};Pe.attribute=ue,ue&&ue.data&&(Pe.data=ue.data),ce[H]=Pe,W++}s.attributes=ce,s.attributesNum=W,s.index=se}function A(){const M=s.newAttributes;for(let z=0,Y=M.length;z<Y;z++)M[z]=0}function x(M){d(M,0)}function d(M,z){const Y=s.newAttributes,se=s.enabledAttributes,ce=s.attributeDivisors;Y[M]=1,se[M]===0&&(t.enableVertexAttribArray(M),se[M]=1),ce[M]!==z&&(t.vertexAttribDivisor(M,z),ce[M]=z)}function _(){const M=s.newAttributes,z=s.enabledAttributes;for(let Y=0,se=z.length;Y<se;Y++)z[Y]!==M[Y]&&(t.disableVertexAttribArray(Y),z[Y]=0)}function y(M,z,Y,se,ce,fe,W){W===!0?t.vertexAttribIPointer(M,z,Y,ce,fe):t.vertexAttribPointer(M,z,Y,se,ce,fe)}function E(M,z,Y,se){A();const ce=se.attributes,fe=Y.getAttributes(),W=z.defaultAttributeValues;for(const te in fe){const H=fe[te];if(H.location>=0){let oe=ce[te];if(oe===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const ue=oe.normalized,Pe=oe.itemSize,ze=e.get(oe);if(ze===void 0)continue;const _t=ze.buffer,ft=ze.type,Ie=ze.bytesPerElement,pe=ft===t.INT||ft===t.UNSIGNED_INT||oe.gpuType===_m;if(oe.isInterleavedBufferAttribute){const _e=oe.data,we=_e.stride,nt=oe.offset;if(_e.isInstancedInterleavedBuffer){for(let He=0;He<H.locationSize;He++)d(H.location+He,_e.meshPerAttribute);M.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let He=0;He<H.locationSize;He++)x(H.location+He);t.bindBuffer(t.ARRAY_BUFFER,_t);for(let He=0;He<H.locationSize;He++)y(H.location+He,Pe/H.locationSize,ft,ue,we*Ie,(nt+Pe/H.locationSize*He)*Ie,pe)}else{if(oe.isInstancedBufferAttribute){for(let _e=0;_e<H.locationSize;_e++)d(H.location+_e,oe.meshPerAttribute);M.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<H.locationSize;_e++)x(H.location+_e);t.bindBuffer(t.ARRAY_BUFFER,_t);for(let _e=0;_e<H.locationSize;_e++)y(H.location+_e,Pe/H.locationSize,ft,ue,Pe*Ie,Pe/H.locationSize*_e*Ie,pe)}}else if(W!==void 0){const ue=W[te];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(H.location,ue);break;case 3:t.vertexAttrib3fv(H.location,ue);break;case 4:t.vertexAttrib4fv(H.location,ue);break;default:t.vertexAttrib1fv(H.location,ue)}}}}_()}function I(){F();for(const M in i){const z=i[M];for(const Y in z){const se=z[Y];for(const ce in se)h(se[ce].object),delete se[ce];delete z[Y]}delete i[M]}}function L(M){if(i[M.id]===void 0)return;const z=i[M.id];for(const Y in z){const se=z[Y];for(const ce in se)h(se[ce].object),delete se[ce];delete z[Y]}delete i[M.id]}function D(M){for(const z in i){const Y=i[z];if(Y[M.id]===void 0)continue;const se=Y[M.id];for(const ce in se)h(se[ce].object),delete se[ce];delete Y[M.id]}}function F(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:A,enableAttribute:x,disableUnusedAttributes:_}}function yT(t,e,n){let i;function r(u){i=u}function s(u,h){t.drawArrays(i,u,h),n.update(h,i,1)}function o(u,h,p){p!==0&&(t.drawArraysInstanced(i,u,h,p),n.update(h,i,p))}function a(u,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,p);let g=0;for(let S=0;S<p;S++)g+=h[S];n.update(g,i,1)}function l(u,h,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let S=0;S<u.length;S++)o(u[S],h[S],m[S]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,h,0,m,0,p);let S=0;for(let A=0;A<p;A++)S+=h[A]*m[A];n.update(S,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function MT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==$i&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const F=D===Tl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==dr&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Er&&!F)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,m=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),I=S>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:S,maxTextureSize:A,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:I,maxSamples:L}}function wT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Is,a=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||i!==0||r;return r=m,i=p.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){n=h(p,m,0)},this.setState=function(p,m,g){const S=p.clippingPlanes,A=p.clipIntersection,x=p.clipShadows,d=t.get(p);if(!r||S===null||S.length===0||s&&!x)s?h(null):u();else{const _=s?0:i,y=_*4;let E=d.clippingState||null;l.value=E,E=h(S,m,y,g);for(let I=0;I!==y;++I)E[I]=n[I];d.clippingState=E,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,m,g,S){const A=p!==null?p.length:0;let x=null;if(A!==0){if(x=l.value,S!==!0||x===null){const d=g+A*4,_=m.matrixWorldInverse;a.getNormalMatrix(_),(x===null||x.length<d)&&(x=new Float32Array(d));for(let y=0,E=g;y!==A;++y,E+=4)o.copy(p[y]).applyMatrix4(_,a),o.normal.toArray(x,E),x[E+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function ST(t){let e=new WeakMap;function n(o,a){return a===Bh?o.mapping=Qo:a===Hh&&(o.mapping=ea),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bh||a===Hh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new lS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Fo=4,C1=[.125,.215,.35,.446,.526,.582],Ns=20,Rf=new Gx,R1=new St;let Pf=null,If=0,Lf=0,Df=!1;const Ls=(1+Math.sqrt(5))/2,So=1/Ls,P1=[new X(-Ls,So,0),new X(Ls,So,0),new X(-So,0,Ls),new X(So,0,Ls),new X(0,Ls,-So),new X(0,Ls,So),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],ET=new X;class I1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=ET}=s;Pf=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pf,If,Lf),this._renderer.xr.enabled=Df,e.scissorTest=!1,Ec(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qo||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pf=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:or,minFilter:or,generateMipmaps:!1,type:Tl,format:$i,colorSpace:ta,depthBuffer:!1},r=L1(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L1(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TT(s)),this._blurMaterial=AT(s,e,n)}return r}_compileMaterial(e){const n=new B(this._lodPlanes[0],e);this._renderer.compile(n,Rf)}_sceneToCubeUV(e,n,i,r,s){const l=new Ei(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(R1),p.toneMapping=os,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null));const A=new Mt({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1}),x=new B(new Gn,A);let d=!1;const _=e.background;_?_.isColor&&(A.color.copy(_),e.background=null,d=!0):(A.color.copy(R1),d=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):E===1?(l.up.set(0,0,u[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const I=this._cubeSize;Ec(r,E*I,y>2?I:0,I,I),p.setRenderTarget(r),d&&p.render(x,l),p.render(e,l)}x.geometry.dispose(),x.material.dispose(),p.toneMapping=g,p.autoClear=m,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qo||e.mapping===ea;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=N1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=D1());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ec(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Rf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=P1[(r-s-1)%P1.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new B(this._lodPlanes[r],u),m=u.uniforms,g=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ns-1),A=s/S,x=isFinite(s)?1+Math.floor(h*A):Ns;x>Ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ns}`);const d=[];let _=0;for(let D=0;D<Ns;++D){const F=D/A,T=Math.exp(-F*F/2);d.push(T),D===0?_+=T:D<x&&(_+=2*T)}for(let D=0;D<d.length;D++)d[D]=d[D]/_;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=d,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:y}=this;m.dTheta.value=S,m.mipInt.value=y-i;const E=this._sizeLods[r],I=3*E*(r>y-Fo?r-y+Fo:0),L=4*(this._cubeSize-E);Ec(n,I,L,3*E,2*E),l.setRenderTarget(n),l.render(p,Rf)}}function TT(t){const e=[],n=[],i=[];let r=t;const s=t-Fo+1+C1.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Fo?l=C1[o-t+Fo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),h=-u,p=1+u,m=[h,h,p,h,p,p,h,h,p,p,h,p],g=6,S=6,A=3,x=2,d=1,_=new Float32Array(A*S*g),y=new Float32Array(x*S*g),E=new Float32Array(d*S*g);for(let L=0;L<g;L++){const D=L%3*2/3-1,F=L>2?0:-1,T=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];_.set(T,A*S*L),y.set(m,x*S*L);const M=[L,L,L,L,L,L];E.set(M,d*S*L)}const I=new mn;I.setAttribute("position",new ur(_,A)),I.setAttribute("uv",new ur(y,x)),I.setAttribute("faceIndex",new ur(E,d)),e.push(I),r>Fo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function L1(t,e,n){const i=new Ys(t,e,n);return i.texture.mapping=Fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ec(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function AT(t,e,n){const i=new Float32Array(Ns),r=new X(0,1,0);return new us({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function D1(){return new us({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function N1(){return new us({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Dm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Bh||l===Hh,h=l===Qo||l===ea;if(u||h){let p=e.get(a);const m=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return n===null&&(n=new I1(t)),p=u?n.fromEquirectangular(a,p):n.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const g=a.image;return u&&g&&g.height>0||h&&g&&r(g)?(n===null&&(n=new I1(t)),p=u?n.fromEquirectangular(a):n.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function CT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&xl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function RT(t,e,n,i){const r={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);m.removeEventListener("dispose",o),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,n.memory.geometries++),m}function l(p){const m=p.attributes;for(const g in m)e.update(m[g],t.ARRAY_BUFFER)}function u(p){const m=[],g=p.index,S=p.attributes.position;let A=0;if(g!==null){const _=g.array;A=g.version;for(let y=0,E=_.length;y<E;y+=3){const I=_[y+0],L=_[y+1],D=_[y+2];m.push(I,L,L,D,D,I)}}else if(S!==void 0){const _=S.array;A=S.version;for(let y=0,E=_.length/3-1;y<E;y+=3){const I=y+0,L=y+1,D=y+2;m.push(I,L,L,D,D,I)}}else return;const x=new(Px(m)?Nx:Dx)(m,1);x.version=A;const d=s.get(p);d&&e.remove(d),s.set(p,x)}function h(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&u(p)}else u(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function PT(t,e,n){let i;function r(m){i=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function l(m,g){t.drawElements(i,g,s,m*o),n.update(g,i,1)}function u(m,g,S){S!==0&&(t.drawElementsInstanced(i,g,s,m*o,S),n.update(g,i,S))}function h(m,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,m,0,S);let x=0;for(let d=0;d<S;d++)x+=g[d];n.update(x,i,1)}function p(m,g,S,A){if(S===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let d=0;d<m.length;d++)u(m[d]/o,g[d],A[d]);else{x.multiDrawElementsInstancedWEBGL(i,g,0,s,m,0,A,0,S);let d=0;for(let _=0;_<S;_++)d+=g[_]*A[_];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function IT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function LT(t,e,n){const i=new WeakMap,r=new jt;function s(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let m=i.get(a);if(m===void 0||m.count!==p){let M=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var g=M;m!==void 0&&m.texture.dispose();const S=a.morphAttributes.position!==void 0,A=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;S===!0&&(E=1),A===!0&&(E=2),x===!0&&(E=3);let I=a.attributes.position.count*E,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const D=new Float32Array(I*L*4*p),F=new Ix(D,I,L,p);F.type=Er,F.needsUpdate=!0;const T=E*4;for(let z=0;z<p;z++){const Y=d[z],se=_[z],ce=y[z],fe=I*L*4*z;for(let W=0;W<Y.count;W++){const te=W*T;S===!0&&(r.fromBufferAttribute(Y,W),D[fe+te+0]=r.x,D[fe+te+1]=r.y,D[fe+te+2]=r.z,D[fe+te+3]=0),A===!0&&(r.fromBufferAttribute(se,W),D[fe+te+4]=r.x,D[fe+te+5]=r.y,D[fe+te+6]=r.z,D[fe+te+7]=0),x===!0&&(r.fromBufferAttribute(ce,W),D[fe+te+8]=r.x,D[fe+te+9]=r.y,D[fe+te+10]=r.z,D[fe+te+11]=ce.itemSize===4?r.w:1)}}m={count:p,texture:F,size:new et(I,L)},i.set(a,m),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let S=0;for(let x=0;x<u.length;x++)S+=u[x];const A=a.morphTargetsRelative?1:1-S;l.getUniforms().setValue(t,"morphTargetBaseInfluence",A),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}return{update:s}}function DT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return p}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Xx=new ii,U1=new Ox(1,1),jx=new Ix,qx=new Xw,Yx=new kx,F1=[],k1=[],O1=new Float32Array(16),z1=new Float32Array(9),B1=new Float32Array(4);function aa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=F1[r];if(s===void 0&&(s=new Float32Array(r),F1[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function An(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ou(t,e){let n=k1[e];n===void 0&&(n=new Int32Array(e),k1[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function NT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2fv(this.addr,e),bn(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(An(n,e))return;t.uniform3fv(this.addr,e),bn(n,e)}}function kT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4fv(this.addr,e),bn(n,e)}}function OT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(An(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bn(n,e)}else{if(An(n,i))return;B1.set(i),t.uniformMatrix2fv(this.addr,!1,B1),bn(n,i)}}function zT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(An(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bn(n,e)}else{if(An(n,i))return;z1.set(i),t.uniformMatrix3fv(this.addr,!1,z1),bn(n,i)}}function BT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(An(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bn(n,e)}else{if(An(n,i))return;O1.set(i),t.uniformMatrix4fv(this.addr,!1,O1),bn(n,i)}}function HT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2iv(this.addr,e),bn(n,e)}}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;t.uniform3iv(this.addr,e),bn(n,e)}}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4iv(this.addr,e),bn(n,e)}}function XT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2uiv(this.addr,e),bn(n,e)}}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;t.uniform3uiv(this.addr,e),bn(n,e)}}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4uiv(this.addr,e),bn(n,e)}}function $T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(U1.compareFunction=Rx,s=U1):s=Xx,n.setTexture2D(e||s,r)}function KT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||qx,r)}function ZT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Yx,r)}function JT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||jx,r)}function QT(t){switch(t){case 5126:return NT;case 35664:return UT;case 35665:return FT;case 35666:return kT;case 35674:return OT;case 35675:return zT;case 35676:return BT;case 5124:case 35670:return HT;case 35667:case 35671:return VT;case 35668:case 35672:return GT;case 35669:case 35673:return WT;case 5125:return XT;case 36294:return jT;case 36295:return qT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return JT}}function e5(t,e){t.uniform1fv(this.addr,e)}function t5(t,e){const n=aa(e,this.size,2);t.uniform2fv(this.addr,n)}function n5(t,e){const n=aa(e,this.size,3);t.uniform3fv(this.addr,n)}function i5(t,e){const n=aa(e,this.size,4);t.uniform4fv(this.addr,n)}function r5(t,e){const n=aa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function s5(t,e){const n=aa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function o5(t,e){const n=aa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function a5(t,e){t.uniform1iv(this.addr,e)}function l5(t,e){t.uniform2iv(this.addr,e)}function c5(t,e){t.uniform3iv(this.addr,e)}function u5(t,e){t.uniform4iv(this.addr,e)}function d5(t,e){t.uniform1uiv(this.addr,e)}function f5(t,e){t.uniform2uiv(this.addr,e)}function h5(t,e){t.uniform3uiv(this.addr,e)}function p5(t,e){t.uniform4uiv(this.addr,e)}function m5(t,e,n){const i=this.cache,r=e.length,s=Ou(n,r);An(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Xx,s[o])}function g5(t,e,n){const i=this.cache,r=e.length,s=Ou(n,r);An(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||qx,s[o])}function v5(t,e,n){const i=this.cache,r=e.length,s=Ou(n,r);An(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Yx,s[o])}function _5(t,e,n){const i=this.cache,r=e.length,s=Ou(n,r);An(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||jx,s[o])}function x5(t){switch(t){case 5126:return e5;case 35664:return t5;case 35665:return n5;case 35666:return i5;case 35674:return r5;case 35675:return s5;case 35676:return o5;case 5124:case 35670:return a5;case 35667:case 35671:return l5;case 35668:case 35672:return c5;case 35669:case 35673:return u5;case 5125:return d5;case 36294:return f5;case 36295:return h5;case 36296:return p5;case 35678:case 36198:case 36298:case 36306:case 35682:return m5;case 35679:case 36299:case 36307:return g5;case 35680:case 36300:case 36308:case 36293:return v5;case 36289:case 36303:case 36311:case 36292:return _5}}class y5{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=QT(n.type)}}class M5{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=x5(n.type)}}class w5{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Nf=/(\w+)(\])?(\[|\.)?/g;function H1(t,e){t.seq.push(e),t.map[e.id]=e}function S5(t,e,n){const i=t.name,r=i.length;for(Nf.lastIndex=0;;){const s=Nf.exec(i),o=Nf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){H1(n,u===void 0?new y5(a,t,e):new M5(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new w5(a),H1(n,p)),n=p}}}class Gc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);S5(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function V1(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const E5=37297;let T5=0;function A5(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const G1=new vt;function b5(t){Dt._getMatrix(G1,Dt.workingColorSpace,t);const e=`mat3( ${G1.elements.map(n=>n.toFixed(4))} )`;switch(Dt.getTransfer(t)){case mu:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function W1(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+A5(t.getShaderSource(e),a)}else return s}function C5(t,e){const n=b5(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function R5(t,e){let n;switch(e){case yw:n="Linear";break;case Mw:n="Reinhard";break;case ww:n="Cineon";break;case xx:n="ACESFilmic";break;case Ew:n="AgX";break;case Tw:n="Neutral";break;case Sw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Tc=new X;function P5(){Dt.getLuminanceCoefficients(Tc);const t=Tc.x.toFixed(4),e=Tc.y.toFixed(4),n=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I5(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function L5(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function D5(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function za(t){return t!==""}function X1(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function j1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const N5=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mp(t){return t.replace(N5,F5)}const U5=new Map;function F5(t,e){let n=xt[e];if(n===void 0){const i=U5.get(e);if(i!==void 0)n=xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mp(n)}const k5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q1(t){return t.replace(k5,O5)}function O5(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Y1(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z5(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===vx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===_x?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xr&&(e="SHADOWMAP_TYPE_VSM"),e}function B5(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Qo:case ea:e="ENVMAP_TYPE_CUBE";break;case Fu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function H5(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ea:e="ENVMAP_MODE_REFRACTION";break}return e}function V5(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case vm:e="ENVMAP_BLENDING_MULTIPLY";break;case _w:e="ENVMAP_BLENDING_MIX";break;case xw:e="ENVMAP_BLENDING_ADD";break}return e}function G5(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function W5(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=z5(n),u=B5(n),h=H5(n),p=V5(n),m=G5(n),g=I5(n),S=L5(s),A=r.createProgram();let x,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(za).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(za).join(`
`),d.length>0&&(d+=`
`)):(x=[Y1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),d=[Y1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==os?"#define TONE_MAPPING":"",n.toneMapping!==os?xt.tonemapping_pars_fragment:"",n.toneMapping!==os?R5("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,C5("linearToOutputTexel",n.outputColorSpace),P5(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(za).join(`
`)),o=Mp(o),o=X1(o,n),o=j1(o,n),a=Mp(a),a=X1(a,n),a=j1(a,n),o=q1(o),a=q1(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",n.glslVersion===Qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=_+x+o,E=_+d+a,I=V1(r,r.VERTEX_SHADER,y),L=V1(r,r.FRAGMENT_SHADER,E);r.attachShader(A,I),r.attachShader(A,L),n.index0AttributeName!==void 0?r.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function D(z){if(t.debug.checkShaderErrors){const Y=r.getProgramInfoLog(A)||"",se=r.getShaderInfoLog(I)||"",ce=r.getShaderInfoLog(L)||"",fe=Y.trim(),W=se.trim(),te=ce.trim();let H=!0,oe=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,A,I,L);else{const ue=W1(r,I,"vertex"),Pe=W1(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+fe+`
`+ue+`
`+Pe)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(W===""||te==="")&&(oe=!1);oe&&(z.diagnostics={runnable:H,programLog:fe,vertexShader:{log:W,prefix:x},fragmentShader:{log:te,prefix:d}})}r.deleteShader(I),r.deleteShader(L),F=new Gc(r,A),T=D5(r,A)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(A,E5)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=T5++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=L,this}let X5=0;class j5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new q5(e),n.set(e,i)),i}}class q5{constructor(e){this.id=X5++,this.code=e,this.usedTimes=0}}function Y5(t,e,n,i,r,s,o){const a=new bm,l=new j5,u=new Set,h=[],p=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return u.add(T),T===0?"uv":`uv${T}`}function x(T,M,z,Y,se){const ce=Y.fog,fe=se.geometry,W=T.isMeshStandardMaterial?Y.environment:null,te=(T.isMeshStandardMaterial?n:e).get(T.envMap||W),H=te&&te.mapping===Fu?te.image.height:null,oe=S[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const ue=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Pe=ue!==void 0?ue.length:0;let ze=0;fe.morphAttributes.position!==void 0&&(ze=1),fe.morphAttributes.normal!==void 0&&(ze=2),fe.morphAttributes.color!==void 0&&(ze=3);let _t,ft,Ie,pe;if(oe){const pt=rr[oe];_t=pt.vertexShader,ft=pt.fragmentShader}else _t=T.vertexShader,ft=T.fragmentShader,l.update(T),Ie=l.getVertexShaderID(T),pe=l.getFragmentShaderID(T);const _e=t.getRenderTarget(),we=t.state.buffers.depth.getReversed(),nt=se.isInstancedMesh===!0,He=se.isBatchedMesh===!0,ht=!!T.map,on=!!T.matcap,V=!!te,zt=!!T.aoMap,at=!!T.lightMap,it=!!T.bumpMap,q=!!T.normalMap,me=!!T.displacementMap,J=!!T.emissiveMap,G=!!T.metalnessMap,Xe=!!T.roughnessMap,$e=T.anisotropy>0,U=T.clearcoat>0,b=T.dispersion>0,re=T.iridescence>0,he=T.sheen>0,xe=T.transmission>0,de=$e&&!!T.anisotropyMap,Ne=U&&!!T.clearcoatMap,Me=U&&!!T.clearcoatNormalMap,De=U&&!!T.clearcoatRoughnessMap,Ze=re&&!!T.iridescenceMap,Re=re&&!!T.iridescenceThicknessMap,Ue=he&&!!T.sheenColorMap,ot=he&&!!T.sheenRoughnessMap,Je=!!T.specularMap,ye=!!T.specularColorMap,dt=!!T.specularIntensityMap,Z=xe&&!!T.transmissionMap,be=xe&&!!T.thicknessMap,Le=!!T.gradientMap,je=!!T.alphaMap,Ee=T.alphaTest>0,ve=!!T.alphaHash,qe=!!T.extensions;let lt=os;T.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(lt=t.toneMapping);const Bt={shaderID:oe,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:ft,defines:T.defines,customVertexShaderID:Ie,customFragmentShaderID:pe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:He,batchingColor:He&&se._colorsTexture!==null,instancing:nt,instancingColor:nt&&se.instanceColor!==null,instancingMorph:nt&&se.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:ta,alphaToCoverage:!!T.alphaToCoverage,map:ht,matcap:on,envMap:V,envMapMode:V&&te.mapping,envMapCubeUVHeight:H,aoMap:zt,lightMap:at,bumpMap:it,normalMap:q,displacementMap:m&&me,emissiveMap:J,normalMapObjectSpace:q&&T.normalMapType===Rw,normalMapTangentSpace:q&&T.normalMapType===Em,metalnessMap:G,roughnessMap:Xe,anisotropy:$e,anisotropyMap:de,clearcoat:U,clearcoatMap:Ne,clearcoatNormalMap:Me,clearcoatRoughnessMap:De,dispersion:b,iridescence:re,iridescenceMap:Ze,iridescenceThicknessMap:Re,sheen:he,sheenColorMap:Ue,sheenRoughnessMap:ot,specularMap:Je,specularColorMap:ye,specularIntensityMap:dt,transmission:xe,transmissionMap:Z,thicknessMap:be,gradientMap:Le,opaque:T.transparent===!1&&T.blending===Go&&T.alphaToCoverage===!1,alphaMap:je,alphaTest:Ee,alphaHash:ve,combine:T.combine,mapUv:ht&&A(T.map.channel),aoMapUv:zt&&A(T.aoMap.channel),lightMapUv:at&&A(T.lightMap.channel),bumpMapUv:it&&A(T.bumpMap.channel),normalMapUv:q&&A(T.normalMap.channel),displacementMapUv:me&&A(T.displacementMap.channel),emissiveMapUv:J&&A(T.emissiveMap.channel),metalnessMapUv:G&&A(T.metalnessMap.channel),roughnessMapUv:Xe&&A(T.roughnessMap.channel),anisotropyMapUv:de&&A(T.anisotropyMap.channel),clearcoatMapUv:Ne&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Me&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:ot&&A(T.sheenRoughnessMap.channel),specularMapUv:Je&&A(T.specularMap.channel),specularColorMapUv:ye&&A(T.specularColorMap.channel),specularIntensityMapUv:dt&&A(T.specularIntensityMap.channel),transmissionMapUv:Z&&A(T.transmissionMap.channel),thicknessMapUv:be&&A(T.thicknessMap.channel),alphaMapUv:je&&A(T.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(q||$e),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!fe.attributes.uv&&(ht||je),fog:!!ce,useFog:T.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:we,skinning:se.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:lt,decodeVideoTexture:ht&&T.map.isVideoTexture===!0&&Dt.getTransfer(T.map.colorSpace)===Xt,decodeVideoTextureEmissive:J&&T.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(T.emissiveMap.colorSpace)===Xt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Vt,flipSided:T.side===gi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:qe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&T.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Bt.vertexUv1s=u.has(1),Bt.vertexUv2s=u.has(2),Bt.vertexUv3s=u.has(3),u.clear(),Bt}function d(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)M.push(z),M.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(_(M,T),y(M,T),M.push(t.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function _(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function y(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function E(T){const M=S[T.type];let z;if(M){const Y=rr[M];z=rS.clone(Y.uniforms)}else z=T.uniforms;return z}function I(T,M){let z;for(let Y=0,se=h.length;Y<se;Y++){const ce=h[Y];if(ce.cacheKey===M){z=ce,++z.usedTimes;break}}return z===void 0&&(z=new W5(t,M,T,s),h.push(z)),z}function L(T){if(--T.usedTimes===0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function D(T){l.remove(T)}function F(){l.dispose()}return{getParameters:x,getProgramCacheKey:d,getUniforms:E,acquireProgram:I,releaseProgram:L,releaseShaderCache:D,programs:h,dispose:F}}function $5(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function K5(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function K1(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,m,g,S,A,x){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:m,material:g,groupOrder:S,renderOrder:p.renderOrder,z:A,group:x},t[e]=d):(d.id=p.id,d.object=p,d.geometry=m,d.material=g,d.groupOrder=S,d.renderOrder=p.renderOrder,d.z=A,d.group=x),e++,d}function a(p,m,g,S,A,x){const d=o(p,m,g,S,A,x);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(p,m,g,S,A,x){const d=o(p,m,g,S,A,x);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function u(p,m){n.length>1&&n.sort(p||K5),i.length>1&&i.sort(m||$1),r.length>1&&r.sort(m||$1)}function h(){for(let p=e,m=t.length;p<m;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function Z5(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new K1,t.set(i,[o])):r>=s.length?(o=new K1,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function J5(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new St};break;case"SpotLight":n={position:new X,direction:new X,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function Q5(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let eA=0;function tA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nA(t){const e=new J5,n=Q5(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const r=new X,s=new tn,o=new tn;function a(u){let h=0,p=0,m=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let g=0,S=0,A=0,x=0,d=0,_=0,y=0,E=0,I=0,L=0,D=0;u.sort(tA);for(let T=0,M=u.length;T<M;T++){const z=u[T],Y=z.color,se=z.intensity,ce=z.distance,fe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=Y.r*se,p+=Y.g*se,m+=Y.b*se;else if(z.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(z.sh.coefficients[W],se);D++}else if(z.isDirectionalLight){const W=e.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const te=z.shadow,H=n.get(z);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,i.directionalShadow[g]=H,i.directionalShadowMap[g]=fe,i.directionalShadowMatrix[g]=z.shadow.matrix,_++}i.directional[g]=W,g++}else if(z.isSpotLight){const W=e.get(z);W.position.setFromMatrixPosition(z.matrixWorld),W.color.copy(Y).multiplyScalar(se),W.distance=ce,W.coneCos=Math.cos(z.angle),W.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),W.decay=z.decay,i.spot[A]=W;const te=z.shadow;if(z.map&&(i.spotLightMap[I]=z.map,I++,te.updateMatrices(z),z.castShadow&&L++),i.spotLightMatrix[A]=te.matrix,z.castShadow){const H=n.get(z);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,i.spotShadow[A]=H,i.spotShadowMap[A]=fe,E++}A++}else if(z.isRectAreaLight){const W=e.get(z);W.color.copy(Y).multiplyScalar(se),W.halfWidth.set(z.width*.5,0,0),W.halfHeight.set(0,z.height*.5,0),i.rectArea[x]=W,x++}else if(z.isPointLight){const W=e.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity),W.distance=z.distance,W.decay=z.decay,z.castShadow){const te=z.shadow,H=n.get(z);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,H.shadowCameraNear=te.camera.near,H.shadowCameraFar=te.camera.far,i.pointShadow[S]=H,i.pointShadowMap[S]=fe,i.pointShadowMatrix[S]=z.shadow.matrix,y++}i.point[S]=W,S++}else if(z.isHemisphereLight){const W=e.get(z);W.skyColor.copy(z.color).multiplyScalar(se),W.groundColor.copy(z.groundColor).multiplyScalar(se),i.hemi[d]=W,d++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=m;const F=i.hash;(F.directionalLength!==g||F.pointLength!==S||F.spotLength!==A||F.rectAreaLength!==x||F.hemiLength!==d||F.numDirectionalShadows!==_||F.numPointShadows!==y||F.numSpotShadows!==E||F.numSpotMaps!==I||F.numLightProbes!==D)&&(i.directional.length=g,i.spot.length=A,i.rectArea.length=x,i.point.length=S,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=D,F.directionalLength=g,F.pointLength=S,F.spotLength=A,F.rectAreaLength=x,F.hemiLength=d,F.numDirectionalShadows=_,F.numPointShadows=y,F.numSpotShadows=E,F.numSpotMaps=I,F.numLightProbes=D,i.version=eA++)}function l(u,h){let p=0,m=0,g=0,S=0,A=0;const x=h.matrixWorldInverse;for(let d=0,_=u.length;d<_;d++){const y=u[d];if(y.isDirectionalLight){const E=i.directional[p];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),p++}else if(y.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),g++}else if(y.isRectAreaLight){const E=i.rectArea[S];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(x),o.identity(),s.copy(y.matrixWorld),s.premultiply(x),o.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),S++}else if(y.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(x),m++}else if(y.isHemisphereLight){const E=i.hemi[A];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(x),A++}}}return{setup:a,setupView:l,state:i}}function Z1(t){const e=new nA(t),n=[],i=[];function r(h){u.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function iA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Z1(t),e.set(r,[a])):s>=o.length?(a=new Z1(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const rA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oA(t,e,n){let i=new Rm;const r=new et,s=new et,o=new jt,a=new RS({depthPacking:Cw}),l=new PS,u={},h=n.maxTextureSize,p={[cs]:gi,[gi]:cs,[Vt]:Vt},m=new us({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:rA,fragmentShader:sA}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const S=new mn;S.setAttribute("position",new ur(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new B(S,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vx;let d=this.type;this.render=function(L,D,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;const T=t.getRenderTarget(),M=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(ss),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const se=d!==xr&&this.type===xr,ce=d===xr&&this.type!==xr;for(let fe=0,W=L.length;fe<W;fe++){const te=L[fe],H=te.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const oe=H.getFrameExtents();if(r.multiply(oe),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,H.mapSize.y=s.y)),H.map===null||se===!0||ce===!0){const Pe=this.type!==xr?{minFilter:Ji,magFilter:Ji}:{};H.map!==null&&H.map.dispose(),H.map=new Ys(r.x,r.y,Pe),H.map.texture.name=te.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const ue=H.getViewportCount();for(let Pe=0;Pe<ue;Pe++){const ze=H.getViewport(Pe);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),Y.viewport(o),H.updateMatrices(te,Pe),i=H.getFrustum(),E(D,F,H.camera,te,this.type)}H.isPointLightShadow!==!0&&this.type===xr&&_(H,F),H.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(T,M,z)};function _(L,D){const F=e.update(A);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ys(r.x,r.y)),m.uniforms.shadow_pass.value=L.map.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(D,null,F,m,A,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(D,null,F,g,A,null)}function y(L,D,F,T){let M=null;const z=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)M=z;else if(M=F.isPointLight===!0?l:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const Y=M.uuid,se=D.uuid;let ce=u[Y];ce===void 0&&(ce={},u[Y]=ce);let fe=ce[se];fe===void 0&&(fe=M.clone(),ce[se]=fe,D.addEventListener("dispose",I)),M=fe}if(M.visible=D.visible,M.wireframe=D.wireframe,T===xr?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:p[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Y=t.properties.get(M);Y.light=F}return M}function E(L,D,F,T,M){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===xr)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);const se=e.update(L),ce=L.material;if(Array.isArray(ce)){const fe=se.groups;for(let W=0,te=fe.length;W<te;W++){const H=fe[W],oe=ce[H.materialIndex];if(oe&&oe.visible){const ue=y(L,oe,T,M);L.onBeforeShadow(t,L,D,F,se,ue,H),t.renderBufferDirect(F,null,se,ue,L,H),L.onAfterShadow(t,L,D,F,se,ue,H)}}}else if(ce.visible){const fe=y(L,ce,T,M);L.onBeforeShadow(t,L,D,F,se,fe,null),t.renderBufferDirect(F,null,se,fe,L,null),L.onAfterShadow(t,L,D,F,se,fe,null)}}const Y=L.children;for(let se=0,ce=Y.length;se<ce;se++)E(Y[se],D,F,T,M)}function I(L){L.target.removeEventListener("dispose",I);for(const F in u){const T=u[F],M=L.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const aA={[Dh]:Nh,[Uh]:Oh,[Fh]:zh,[Jo]:kh,[Nh]:Dh,[Oh]:Uh,[zh]:Fh,[kh]:Jo};function lA(t,e){function n(){let Z=!1;const be=new jt;let Le=null;const je=new jt(0,0,0,0);return{setMask:function(Ee){Le!==Ee&&!Z&&(t.colorMask(Ee,Ee,Ee,Ee),Le=Ee)},setLocked:function(Ee){Z=Ee},setClear:function(Ee,ve,qe,lt,Bt){Bt===!0&&(Ee*=lt,ve*=lt,qe*=lt),be.set(Ee,ve,qe,lt),je.equals(be)===!1&&(t.clearColor(Ee,ve,qe,lt),je.copy(be))},reset:function(){Z=!1,Le=null,je.set(-1,0,0,0)}}}function i(){let Z=!1,be=!1,Le=null,je=null,Ee=null;return{setReversed:function(ve){if(be!==ve){const qe=e.get("EXT_clip_control");ve?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),be=ve;const lt=Ee;Ee=null,this.setClear(lt)}},getReversed:function(){return be},setTest:function(ve){ve?_e(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(ve){Le!==ve&&!Z&&(t.depthMask(ve),Le=ve)},setFunc:function(ve){if(be&&(ve=aA[ve]),je!==ve){switch(ve){case Dh:t.depthFunc(t.NEVER);break;case Nh:t.depthFunc(t.ALWAYS);break;case Uh:t.depthFunc(t.LESS);break;case Jo:t.depthFunc(t.LEQUAL);break;case Fh:t.depthFunc(t.EQUAL);break;case kh:t.depthFunc(t.GEQUAL);break;case Oh:t.depthFunc(t.GREATER);break;case zh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}je=ve}},setLocked:function(ve){Z=ve},setClear:function(ve){Ee!==ve&&(be&&(ve=1-ve),t.clearDepth(ve),Ee=ve)},reset:function(){Z=!1,Le=null,je=null,Ee=null,be=!1}}}function r(){let Z=!1,be=null,Le=null,je=null,Ee=null,ve=null,qe=null,lt=null,Bt=null;return{setTest:function(pt){Z||(pt?_e(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(pt){be!==pt&&!Z&&(t.stencilMask(pt),be=pt)},setFunc:function(pt,oi,jn){(Le!==pt||je!==oi||Ee!==jn)&&(t.stencilFunc(pt,oi,jn),Le=pt,je=oi,Ee=jn)},setOp:function(pt,oi,jn){(ve!==pt||qe!==oi||lt!==jn)&&(t.stencilOp(pt,oi,jn),ve=pt,qe=oi,lt=jn)},setLocked:function(pt){Z=pt},setClear:function(pt){Bt!==pt&&(t.clearStencil(pt),Bt=pt)},reset:function(){Z=!1,be=null,Le=null,je=null,Ee=null,ve=null,qe=null,lt=null,Bt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let h={},p={},m=new WeakMap,g=[],S=null,A=!1,x=null,d=null,_=null,y=null,E=null,I=null,L=null,D=new St(0,0,0),F=0,T=!1,M=null,z=null,Y=null,se=null,ce=null;const fe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,te=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=te>=1):H.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=te>=2);let oe=null,ue={};const Pe=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),_t=new jt().fromArray(Pe),ft=new jt().fromArray(ze);function Ie(Z,be,Le,je){const Ee=new Uint8Array(4),ve=t.createTexture();t.bindTexture(Z,ve),t.texParameteri(Z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(Z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<Le;qe++)Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?t.texImage3D(be,0,t.RGBA,1,1,je,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(be+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return ve}const pe={};pe[t.TEXTURE_2D]=Ie(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=Ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=Ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=Ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(t.DEPTH_TEST),o.setFunc(Jo),it(!1),q(Yg),_e(t.CULL_FACE),zt(ss);function _e(Z){h[Z]!==!0&&(t.enable(Z),h[Z]=!0)}function we(Z){h[Z]!==!1&&(t.disable(Z),h[Z]=!1)}function nt(Z,be){return p[Z]!==be?(t.bindFramebuffer(Z,be),p[Z]=be,Z===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=be),Z===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=be),!0):!1}function He(Z,be){let Le=g,je=!1;if(Z){Le=m.get(be),Le===void 0&&(Le=[],m.set(be,Le));const Ee=Z.textures;if(Le.length!==Ee.length||Le[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,qe=Ee.length;ve<qe;ve++)Le[ve]=t.COLOR_ATTACHMENT0+ve;Le.length=Ee.length,je=!0}}else Le[0]!==t.BACK&&(Le[0]=t.BACK,je=!0);je&&t.drawBuffers(Le)}function ht(Z){return S!==Z?(t.useProgram(Z),S=Z,!0):!1}const on={[Ds]:t.FUNC_ADD,[tw]:t.FUNC_SUBTRACT,[nw]:t.FUNC_REVERSE_SUBTRACT};on[iw]=t.MIN,on[rw]=t.MAX;const V={[sw]:t.ZERO,[ow]:t.ONE,[aw]:t.SRC_COLOR,[Ih]:t.SRC_ALPHA,[hw]:t.SRC_ALPHA_SATURATE,[dw]:t.DST_COLOR,[cw]:t.DST_ALPHA,[lw]:t.ONE_MINUS_SRC_COLOR,[Lh]:t.ONE_MINUS_SRC_ALPHA,[fw]:t.ONE_MINUS_DST_COLOR,[uw]:t.ONE_MINUS_DST_ALPHA,[pw]:t.CONSTANT_COLOR,[mw]:t.ONE_MINUS_CONSTANT_COLOR,[gw]:t.CONSTANT_ALPHA,[vw]:t.ONE_MINUS_CONSTANT_ALPHA};function zt(Z,be,Le,je,Ee,ve,qe,lt,Bt,pt){if(Z===ss){A===!0&&(we(t.BLEND),A=!1);return}if(A===!1&&(_e(t.BLEND),A=!0),Z!==ew){if(Z!==x||pt!==T){if((d!==Ds||E!==Ds)&&(t.blendEquation(t.FUNC_ADD),d=Ds,E=Ds),pt)switch(Z){case Go:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pu:t.blendFunc(t.ONE,t.ONE);break;case $g:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Kg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Go:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case $g:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}_=null,y=null,I=null,L=null,D.set(0,0,0),F=0,x=Z,T=pt}return}Ee=Ee||be,ve=ve||Le,qe=qe||je,(be!==d||Ee!==E)&&(t.blendEquationSeparate(on[be],on[Ee]),d=be,E=Ee),(Le!==_||je!==y||ve!==I||qe!==L)&&(t.blendFuncSeparate(V[Le],V[je],V[ve],V[qe]),_=Le,y=je,I=ve,L=qe),(lt.equals(D)===!1||Bt!==F)&&(t.blendColor(lt.r,lt.g,lt.b,Bt),D.copy(lt),F=Bt),x=Z,T=!1}function at(Z,be){Z.side===Vt?we(t.CULL_FACE):_e(t.CULL_FACE);let Le=Z.side===gi;be&&(Le=!Le),it(Le),Z.blending===Go&&Z.transparent===!1?zt(ss):zt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),s.setMask(Z.colorWrite);const je=Z.stencilWrite;a.setTest(je),je&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),J(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function it(Z){M!==Z&&(Z?t.frontFace(t.CW):t.frontFace(t.CCW),M=Z)}function q(Z){Z!==JM?(_e(t.CULL_FACE),Z!==z&&(Z===Yg?t.cullFace(t.BACK):Z===QM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),z=Z}function me(Z){Z!==Y&&(W&&t.lineWidth(Z),Y=Z)}function J(Z,be,Le){Z?(_e(t.POLYGON_OFFSET_FILL),(se!==be||ce!==Le)&&(t.polygonOffset(be,Le),se=be,ce=Le)):we(t.POLYGON_OFFSET_FILL)}function G(Z){Z?_e(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function Xe(Z){Z===void 0&&(Z=t.TEXTURE0+fe-1),oe!==Z&&(t.activeTexture(Z),oe=Z)}function $e(Z,be,Le){Le===void 0&&(oe===null?Le=t.TEXTURE0+fe-1:Le=oe);let je=ue[Le];je===void 0&&(je={type:void 0,texture:void 0},ue[Le]=je),(je.type!==Z||je.texture!==be)&&(oe!==Le&&(t.activeTexture(Le),oe=Le),t.bindTexture(Z,be||pe[Z]),je.type=Z,je.texture=be)}function U(){const Z=ue[oe];Z!==void 0&&Z.type!==void 0&&(t.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function re(){try{t.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function he(){try{t.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function xe(){try{t.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function de(){try{t.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ne(){try{t.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Me(){try{t.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function De(){try{t.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ze(){try{t.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Re(){try{t.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ue(Z){_t.equals(Z)===!1&&(t.scissor(Z.x,Z.y,Z.z,Z.w),_t.copy(Z))}function ot(Z){ft.equals(Z)===!1&&(t.viewport(Z.x,Z.y,Z.z,Z.w),ft.copy(Z))}function Je(Z,be){let Le=u.get(be);Le===void 0&&(Le=new WeakMap,u.set(be,Le));let je=Le.get(Z);je===void 0&&(je=t.getUniformBlockIndex(be,Z.name),Le.set(Z,je))}function ye(Z,be){const je=u.get(be).get(Z);l.get(be)!==je&&(t.uniformBlockBinding(be,je,Z.__bindingPointIndex),l.set(be,je))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},oe=null,ue={},p={},m=new WeakMap,g=[],S=null,A=!1,x=null,d=null,_=null,y=null,E=null,I=null,L=null,D=new St(0,0,0),F=0,T=!1,M=null,z=null,Y=null,se=null,ce=null,_t.set(0,0,t.canvas.width,t.canvas.height),ft.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:_e,disable:we,bindFramebuffer:nt,drawBuffers:He,useProgram:ht,setBlending:zt,setMaterial:at,setFlipSided:it,setCullFace:q,setLineWidth:me,setPolygonOffset:J,setScissorTest:G,activeTexture:Xe,bindTexture:$e,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:re,texImage2D:Ze,texImage3D:Re,updateUBOMapping:Je,uniformBlockBinding:ye,texStorage2D:Me,texStorage3D:De,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:de,compressedTexSubImage3D:Ne,scissor:Ue,viewport:ot,reset:dt}}function cA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new et,h=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(U,b){return g?new OffscreenCanvas(U,b):vu("canvas")}function A(U,b,re){let he=1;const xe=$e(U);if((xe.width>re||xe.height>re)&&(he=re/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const de=Math.floor(he*xe.width),Ne=Math.floor(he*xe.height);p===void 0&&(p=S(de,Ne));const Me=b?S(de,Ne):p;return Me.width=de,Me.height=Ne,Me.getContext("2d").drawImage(U,0,0,de,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+Ne+")."),Me}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),U;return U}function x(U){return U.generateMipmaps}function d(U){t.generateMipmap(U)}function _(U){return U.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?t.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(U,b,re,he,xe=!1){if(U!==null){if(t[U]!==void 0)return t[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let de=b;if(b===t.RED&&(re===t.FLOAT&&(de=t.R32F),re===t.HALF_FLOAT&&(de=t.R16F),re===t.UNSIGNED_BYTE&&(de=t.R8)),b===t.RED_INTEGER&&(re===t.UNSIGNED_BYTE&&(de=t.R8UI),re===t.UNSIGNED_SHORT&&(de=t.R16UI),re===t.UNSIGNED_INT&&(de=t.R32UI),re===t.BYTE&&(de=t.R8I),re===t.SHORT&&(de=t.R16I),re===t.INT&&(de=t.R32I)),b===t.RG&&(re===t.FLOAT&&(de=t.RG32F),re===t.HALF_FLOAT&&(de=t.RG16F),re===t.UNSIGNED_BYTE&&(de=t.RG8)),b===t.RG_INTEGER&&(re===t.UNSIGNED_BYTE&&(de=t.RG8UI),re===t.UNSIGNED_SHORT&&(de=t.RG16UI),re===t.UNSIGNED_INT&&(de=t.RG32UI),re===t.BYTE&&(de=t.RG8I),re===t.SHORT&&(de=t.RG16I),re===t.INT&&(de=t.RG32I)),b===t.RGB_INTEGER&&(re===t.UNSIGNED_BYTE&&(de=t.RGB8UI),re===t.UNSIGNED_SHORT&&(de=t.RGB16UI),re===t.UNSIGNED_INT&&(de=t.RGB32UI),re===t.BYTE&&(de=t.RGB8I),re===t.SHORT&&(de=t.RGB16I),re===t.INT&&(de=t.RGB32I)),b===t.RGBA_INTEGER&&(re===t.UNSIGNED_BYTE&&(de=t.RGBA8UI),re===t.UNSIGNED_SHORT&&(de=t.RGBA16UI),re===t.UNSIGNED_INT&&(de=t.RGBA32UI),re===t.BYTE&&(de=t.RGBA8I),re===t.SHORT&&(de=t.RGBA16I),re===t.INT&&(de=t.RGBA32I)),b===t.RGB&&(re===t.UNSIGNED_INT_5_9_9_9_REV&&(de=t.RGB9_E5),re===t.UNSIGNED_INT_10F_11F_11F_REV&&(de=t.R11F_G11F_B10F)),b===t.RGBA){const Ne=xe?mu:Dt.getTransfer(he);re===t.FLOAT&&(de=t.RGBA32F),re===t.HALF_FLOAT&&(de=t.RGBA16F),re===t.UNSIGNED_BYTE&&(de=Ne===Xt?t.SRGB8_ALPHA8:t.RGBA8),re===t.UNSIGNED_SHORT_4_4_4_4&&(de=t.RGBA4),re===t.UNSIGNED_SHORT_5_5_5_1&&(de=t.RGB5_A1)}return(de===t.R16F||de===t.R32F||de===t.RG16F||de===t.RG32F||de===t.RGBA16F||de===t.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function E(U,b){let re;return U?b===null||b===qs||b===gl?re=t.DEPTH24_STENCIL8:b===Er?re=t.DEPTH32F_STENCIL8:b===ml&&(re=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qs||b===gl?re=t.DEPTH_COMPONENT24:b===Er?re=t.DEPTH_COMPONENT32F:b===ml&&(re=t.DEPTH_COMPONENT16),re}function I(U,b){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ji&&U.minFilter!==or?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function L(U){const b=U.target;b.removeEventListener("dispose",L),F(b),b.isVideoTexture&&h.delete(b)}function D(U){const b=U.target;b.removeEventListener("dispose",D),M(b)}function F(U){const b=i.get(U);if(b.__webglInit===void 0)return;const re=U.source,he=m.get(re);if(he){const xe=he[b.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&T(U),Object.keys(he).length===0&&m.delete(re)}i.remove(U)}function T(U){const b=i.get(U);t.deleteTexture(b.__webglTexture);const re=U.source,he=m.get(re);delete he[b.__cacheKey],o.memory.textures--}function M(U){const b=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let xe=0;xe<b.__webglFramebuffer[he].length;xe++)t.deleteFramebuffer(b.__webglFramebuffer[he][xe]);else t.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)t.deleteFramebuffer(b.__webglFramebuffer[he]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const re=U.textures;for(let he=0,xe=re.length;he<xe;he++){const de=i.get(re[he]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(re[he])}i.remove(U)}let z=0;function Y(){z=0}function se(){const U=z;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),z+=1,U}function ce(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function fe(U,b){const re=i.get(U);if(U.isVideoTexture&&G(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&re.__version!==U.version){const he=U.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(re,U,b);return}}else U.isExternalTexture&&(re.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,re.__webglTexture,t.TEXTURE0+b)}function W(U,b){const re=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&re.__version!==U.version){pe(re,U,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,re.__webglTexture,t.TEXTURE0+b)}function te(U,b){const re=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&re.__version!==U.version){pe(re,U,b);return}n.bindTexture(t.TEXTURE_3D,re.__webglTexture,t.TEXTURE0+b)}function H(U,b){const re=i.get(U);if(U.version>0&&re.__version!==U.version){_e(re,U,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture,t.TEXTURE0+b)}const oe={[qr]:t.REPEAT,[Os]:t.CLAMP_TO_EDGE,[Vh]:t.MIRRORED_REPEAT},ue={[Ji]:t.NEAREST,[Aw]:t.NEAREST_MIPMAP_NEAREST,[nc]:t.NEAREST_MIPMAP_LINEAR,[or]:t.LINEAR,[Kd]:t.LINEAR_MIPMAP_NEAREST,[zs]:t.LINEAR_MIPMAP_LINEAR},Pe={[Pw]:t.NEVER,[Fw]:t.ALWAYS,[Iw]:t.LESS,[Rx]:t.LEQUAL,[Lw]:t.EQUAL,[Uw]:t.GEQUAL,[Dw]:t.GREATER,[Nw]:t.NOTEQUAL};function ze(U,b){if(b.type===Er&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===or||b.magFilter===Kd||b.magFilter===nc||b.magFilter===zs||b.minFilter===or||b.minFilter===Kd||b.minFilter===nc||b.minFilter===zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(U,t.TEXTURE_WRAP_S,oe[b.wrapS]),t.texParameteri(U,t.TEXTURE_WRAP_T,oe[b.wrapT]),(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)&&t.texParameteri(U,t.TEXTURE_WRAP_R,oe[b.wrapR]),t.texParameteri(U,t.TEXTURE_MAG_FILTER,ue[b.magFilter]),t.texParameteri(U,t.TEXTURE_MIN_FILTER,ue[b.minFilter]),b.compareFunction&&(t.texParameteri(U,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(U,t.TEXTURE_COMPARE_FUNC,Pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ji||b.minFilter!==nc&&b.minFilter!==zs||b.type===Er&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");t.texParameterf(U,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function _t(U,b){let re=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",L));const he=b.source;let xe=m.get(he);xe===void 0&&(xe={},m.set(he,xe));const de=ce(b);if(de!==U.__cacheKey){xe[de]===void 0&&(xe[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,re=!0),xe[de].usedTimes++;const Ne=xe[U.__cacheKey];Ne!==void 0&&(xe[U.__cacheKey].usedTimes--,Ne.usedTimes===0&&T(b)),U.__cacheKey=de,U.__webglTexture=xe[de].texture}return re}function ft(U,b,re){return Math.floor(Math.floor(U/re)/b)}function Ie(U,b,re,he){const de=U.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,re,he,b.data);else{de.sort((Re,Ue)=>Re.start-Ue.start);let Ne=0;for(let Re=1;Re<de.length;Re++){const Ue=de[Ne],ot=de[Re],Je=Ue.start+Ue.count,ye=ft(ot.start,b.width,4),dt=ft(Ue.start,b.width,4);ot.start<=Je+1&&ye===dt&&ft(ot.start+ot.count-1,b.width,4)===ye?Ue.count=Math.max(Ue.count,ot.start+ot.count-Ue.start):(++Ne,de[Ne]=ot)}de.length=Ne+1;const Me=t.getParameter(t.UNPACK_ROW_LENGTH),De=t.getParameter(t.UNPACK_SKIP_PIXELS),Ze=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let Re=0,Ue=de.length;Re<Ue;Re++){const ot=de[Re],Je=Math.floor(ot.start/4),ye=Math.ceil(ot.count/4),dt=Je%b.width,Z=Math.floor(Je/b.width),be=ye,Le=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,dt),t.pixelStorei(t.UNPACK_SKIP_ROWS,Z),n.texSubImage2D(t.TEXTURE_2D,0,dt,Z,be,Le,re,he,b.data)}U.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Me),t.pixelStorei(t.UNPACK_SKIP_PIXELS,De),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ze)}}function pe(U,b,re){let he=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=t.TEXTURE_3D);const xe=_t(U,b),de=b.source;n.bindTexture(he,U.__webglTexture,t.TEXTURE0+re);const Ne=i.get(de);if(de.version!==Ne.__version||xe===!0){n.activeTexture(t.TEXTURE0+re);const Me=Dt.getPrimaries(Dt.workingColorSpace),De=b.colorSpace===Yr?null:Dt.getPrimaries(b.colorSpace),Ze=b.colorSpace===Yr||Me===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Re=A(b.image,!1,r.maxTextureSize);Re=Xe(b,Re);const Ue=s.convert(b.format,b.colorSpace),ot=s.convert(b.type);let Je=y(b.internalFormat,Ue,ot,b.colorSpace,b.isVideoTexture);ze(he,b);let ye;const dt=b.mipmaps,Z=b.isVideoTexture!==!0,be=Ne.__version===void 0||xe===!0,Le=de.dataReady,je=I(b,Re);if(b.isDepthTexture)Je=E(b.format===_l,b.type),be&&(Z?n.texStorage2D(t.TEXTURE_2D,1,Je,Re.width,Re.height):n.texImage2D(t.TEXTURE_2D,0,Je,Re.width,Re.height,0,Ue,ot,null));else if(b.isDataTexture)if(dt.length>0){Z&&be&&n.texStorage2D(t.TEXTURE_2D,je,Je,dt[0].width,dt[0].height);for(let Ee=0,ve=dt.length;Ee<ve;Ee++)ye=dt[Ee],Z?Le&&n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,ye.width,ye.height,Ue,ot,ye.data):n.texImage2D(t.TEXTURE_2D,Ee,Je,ye.width,ye.height,0,Ue,ot,ye.data);b.generateMipmaps=!1}else Z?(be&&n.texStorage2D(t.TEXTURE_2D,je,Je,Re.width,Re.height),Le&&Ie(b,Re,Ue,ot)):n.texImage2D(t.TEXTURE_2D,0,Je,Re.width,Re.height,0,Ue,ot,Re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Z&&be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Je,dt[0].width,dt[0].height,Re.depth);for(let Ee=0,ve=dt.length;Ee<ve;Ee++)if(ye=dt[Ee],b.format!==$i)if(Ue!==null)if(Z){if(Le)if(b.layerUpdates.size>0){const qe=b1(ye.width,ye.height,b.format,b.type);for(const lt of b.layerUpdates){const Bt=ye.data.subarray(lt*qe/ye.data.BYTES_PER_ELEMENT,(lt+1)*qe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,lt,ye.width,ye.height,1,Ue,Bt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,0,ye.width,ye.height,Re.depth,Ue,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Ee,Je,ye.width,ye.height,Re.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?Le&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,0,ye.width,ye.height,Re.depth,Ue,ot,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Ee,Je,ye.width,ye.height,Re.depth,0,Ue,ot,ye.data)}else{Z&&be&&n.texStorage2D(t.TEXTURE_2D,je,Je,dt[0].width,dt[0].height);for(let Ee=0,ve=dt.length;Ee<ve;Ee++)ye=dt[Ee],b.format!==$i?Ue!==null?Z?Le&&n.compressedTexSubImage2D(t.TEXTURE_2D,Ee,0,0,ye.width,ye.height,Ue,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,Ee,Je,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?Le&&n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,ye.width,ye.height,Ue,ot,ye.data):n.texImage2D(t.TEXTURE_2D,Ee,Je,ye.width,ye.height,0,Ue,ot,ye.data)}else if(b.isDataArrayTexture)if(Z){if(be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Je,Re.width,Re.height,Re.depth),Le)if(b.layerUpdates.size>0){const Ee=b1(Re.width,Re.height,b.format,b.type);for(const ve of b.layerUpdates){const qe=Re.data.subarray(ve*Ee/Re.data.BYTES_PER_ELEMENT,(ve+1)*Ee/Re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ve,Re.width,Re.height,1,Ue,ot,qe)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Ue,ot,Re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Je,Re.width,Re.height,Re.depth,0,Ue,ot,Re.data);else if(b.isData3DTexture)Z?(be&&n.texStorage3D(t.TEXTURE_3D,je,Je,Re.width,Re.height,Re.depth),Le&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Ue,ot,Re.data)):n.texImage3D(t.TEXTURE_3D,0,Je,Re.width,Re.height,Re.depth,0,Ue,ot,Re.data);else if(b.isFramebufferTexture){if(be)if(Z)n.texStorage2D(t.TEXTURE_2D,je,Je,Re.width,Re.height);else{let Ee=Re.width,ve=Re.height;for(let qe=0;qe<je;qe++)n.texImage2D(t.TEXTURE_2D,qe,Je,Ee,ve,0,Ue,ot,null),Ee>>=1,ve>>=1}}else if(dt.length>0){if(Z&&be){const Ee=$e(dt[0]);n.texStorage2D(t.TEXTURE_2D,je,Je,Ee.width,Ee.height)}for(let Ee=0,ve=dt.length;Ee<ve;Ee++)ye=dt[Ee],Z?Le&&n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,Ue,ot,ye):n.texImage2D(t.TEXTURE_2D,Ee,Je,Ue,ot,ye);b.generateMipmaps=!1}else if(Z){if(be){const Ee=$e(Re);n.texStorage2D(t.TEXTURE_2D,je,Je,Ee.width,Ee.height)}Le&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ue,ot,Re)}else n.texImage2D(t.TEXTURE_2D,0,Je,Ue,ot,Re);x(b)&&d(he),Ne.__version=de.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function _e(U,b,re){if(b.image.length!==6)return;const he=_t(U,b),xe=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+re);const de=i.get(xe);if(xe.version!==de.__version||he===!0){n.activeTexture(t.TEXTURE0+re);const Ne=Dt.getPrimaries(Dt.workingColorSpace),Me=b.colorSpace===Yr?null:Dt.getPrimaries(b.colorSpace),De=b.colorSpace===Yr||Ne===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ze=b.isCompressedTexture||b.image[0].isCompressedTexture,Re=b.image[0]&&b.image[0].isDataTexture,Ue=[];for(let ve=0;ve<6;ve++)!Ze&&!Re?Ue[ve]=A(b.image[ve],!0,r.maxCubemapSize):Ue[ve]=Re?b.image[ve].image:b.image[ve],Ue[ve]=Xe(b,Ue[ve]);const ot=Ue[0],Je=s.convert(b.format,b.colorSpace),ye=s.convert(b.type),dt=y(b.internalFormat,Je,ye,b.colorSpace),Z=b.isVideoTexture!==!0,be=de.__version===void 0||he===!0,Le=xe.dataReady;let je=I(b,ot);ze(t.TEXTURE_CUBE_MAP,b);let Ee;if(Ze){Z&&be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,je,dt,ot.width,ot.height);for(let ve=0;ve<6;ve++){Ee=Ue[ve].mipmaps;for(let qe=0;qe<Ee.length;qe++){const lt=Ee[qe];b.format!==$i?Je!==null?Z?Le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,0,0,lt.width,lt.height,Je,lt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,dt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,0,0,lt.width,lt.height,Je,ye,lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,dt,lt.width,lt.height,0,Je,ye,lt.data)}}}else{if(Ee=b.mipmaps,Z&&be){Ee.length>0&&je++;const ve=$e(Ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,je,dt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Re){Z?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ue[ve].width,Ue[ve].height,Je,ye,Ue[ve].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,dt,Ue[ve].width,Ue[ve].height,0,Je,ye,Ue[ve].data);for(let qe=0;qe<Ee.length;qe++){const Bt=Ee[qe].image[ve].image;Z?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,0,0,Bt.width,Bt.height,Je,ye,Bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,dt,Bt.width,Bt.height,0,Je,ye,Bt.data)}}else{Z?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Je,ye,Ue[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,dt,Je,ye,Ue[ve]);for(let qe=0;qe<Ee.length;qe++){const lt=Ee[qe];Z?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,0,0,Je,ye,lt.image[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,dt,Je,ye,lt.image[ve])}}}x(b)&&d(t.TEXTURE_CUBE_MAP),de.__version=xe.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function we(U,b,re,he,xe,de){const Ne=s.convert(re.format,re.colorSpace),Me=s.convert(re.type),De=y(re.internalFormat,Ne,Me,re.colorSpace),Ze=i.get(b),Re=i.get(re);if(Re.__renderTarget=b,!Ze.__hasExternalTextures){const Ue=Math.max(1,b.width>>de),ot=Math.max(1,b.height>>de);xe===t.TEXTURE_3D||xe===t.TEXTURE_2D_ARRAY?n.texImage3D(xe,de,De,Ue,ot,b.depth,0,Ne,Me,null):n.texImage2D(xe,de,De,Ue,ot,0,Ne,Me,null)}n.bindFramebuffer(t.FRAMEBUFFER,U),J(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,xe,Re.__webglTexture,0,me(b)):(xe===t.TEXTURE_2D||xe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,he,xe,Re.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function nt(U,b,re){if(t.bindRenderbuffer(t.RENDERBUFFER,U),b.depthBuffer){const he=b.depthTexture,xe=he&&he.isDepthTexture?he.type:null,de=E(b.stencilBuffer,xe),Ne=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=me(b);J(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,de,b.width,b.height):re?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,de,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,de,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ne,t.RENDERBUFFER,U)}else{const he=b.textures;for(let xe=0;xe<he.length;xe++){const de=he[xe],Ne=s.convert(de.format,de.colorSpace),Me=s.convert(de.type),De=y(de.internalFormat,Ne,Me,de.colorSpace),Ze=me(b);re&&J(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze,De,b.width,b.height):J(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze,De,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,De,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=i.get(b.depthTexture);he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),fe(b.depthTexture,0);const xe=he.__webglTexture,de=me(b);if(b.depthTexture.format===vl)J(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0);else if(b.depthTexture.format===_l)J(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function ht(U){const b=i.get(U),re=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const he=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),he){const xe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),b.__depthDisposeCallback=xe}b.__boundDepthTexture=he}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");const he=U.texture.mipmaps;he&&he.length>0?He(b.__webglFramebuffer[0],U):He(b.__webglFramebuffer,U)}else if(re){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]===void 0)b.__webglDepthbuffer[he]=t.createRenderbuffer(),nt(b.__webglDepthbuffer[he],U,!1);else{const xe=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer[he];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,de)}}else{const he=U.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),nt(b.__webglDepthbuffer,U,!1);else{const xe=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,de)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function on(U,b,re){const he=i.get(U);b!==void 0&&we(he.__webglFramebuffer,U,U.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),re!==void 0&&ht(U)}function V(U){const b=U.texture,re=i.get(U),he=i.get(b);U.addEventListener("dispose",D);const xe=U.textures,de=U.isWebGLCubeRenderTarget===!0,Ne=xe.length>1;if(Ne||(he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture()),he.__version=b.version,o.memory.textures++),de){re.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(b.mipmaps&&b.mipmaps.length>0){re.__webglFramebuffer[Me]=[];for(let De=0;De<b.mipmaps.length;De++)re.__webglFramebuffer[Me][De]=t.createFramebuffer()}else re.__webglFramebuffer[Me]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){re.__webglFramebuffer=[];for(let Me=0;Me<b.mipmaps.length;Me++)re.__webglFramebuffer[Me]=t.createFramebuffer()}else re.__webglFramebuffer=t.createFramebuffer();if(Ne)for(let Me=0,De=xe.length;Me<De;Me++){const Ze=i.get(xe[Me]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(U.samples>0&&J(U)===!1){re.__webglMultisampledFramebuffer=t.createFramebuffer(),re.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Me=0;Me<xe.length;Me++){const De=xe[Me];re.__webglColorRenderbuffer[Me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,re.__webglColorRenderbuffer[Me]);const Ze=s.convert(De.format,De.colorSpace),Re=s.convert(De.type),Ue=y(De.internalFormat,Ze,Re,De.colorSpace,U.isXRRenderTarget===!0),ot=me(U);t.renderbufferStorageMultisample(t.RENDERBUFFER,ot,Ue,U.width,U.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,re.__webglColorRenderbuffer[Me])}t.bindRenderbuffer(t.RENDERBUFFER,null),U.depthBuffer&&(re.__webglDepthRenderbuffer=t.createRenderbuffer(),nt(re.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,he.__webglTexture),ze(t.TEXTURE_CUBE_MAP,b);for(let Me=0;Me<6;Me++)if(b.mipmaps&&b.mipmaps.length>0)for(let De=0;De<b.mipmaps.length;De++)we(re.__webglFramebuffer[Me][De],U,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De);else we(re.__webglFramebuffer[Me],U,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);x(b)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let Me=0,De=xe.length;Me<De;Me++){const Ze=xe[Me],Re=i.get(Ze);let Ue=t.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ue=U.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ue,Re.__webglTexture),ze(Ue,Ze),we(re.__webglFramebuffer,U,Ze,t.COLOR_ATTACHMENT0+Me,Ue,0),x(Ze)&&d(Ue)}n.unbindTexture()}else{let Me=t.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Me=U.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Me,he.__webglTexture),ze(Me,b),b.mipmaps&&b.mipmaps.length>0)for(let De=0;De<b.mipmaps.length;De++)we(re.__webglFramebuffer[De],U,b,t.COLOR_ATTACHMENT0,Me,De);else we(re.__webglFramebuffer,U,b,t.COLOR_ATTACHMENT0,Me,0);x(b)&&d(Me),n.unbindTexture()}U.depthBuffer&&ht(U)}function zt(U){const b=U.textures;for(let re=0,he=b.length;re<he;re++){const xe=b[re];if(x(xe)){const de=_(U),Ne=i.get(xe).__webglTexture;n.bindTexture(de,Ne),d(de),n.unbindTexture()}}}const at=[],it=[];function q(U){if(U.samples>0){if(J(U)===!1){const b=U.textures,re=U.width,he=U.height;let xe=t.COLOR_BUFFER_BIT;const de=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ne=i.get(U),Me=b.length>1;if(Me)for(let Ze=0;Ze<b.length;Ze++)n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ze,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ze,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const De=U.texture.mipmaps;De&&De.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ze=0;Ze<b.length;Ze++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xe|=t.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xe|=t.STENCIL_BUFFER_BIT)),Me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ze]);const Re=i.get(b[Ze]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,re,he,0,0,re,he,xe,t.NEAREST),l===!0&&(at.length=0,it.length=0,at.push(t.COLOR_ATTACHMENT0+Ze),U.depthBuffer&&U.resolveDepthBuffer===!1&&(at.push(de),it.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,it)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Me)for(let Ze=0;Ze<b.length;Ze++){n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ze,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ze]);const Re=i.get(b[Ze]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ze,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const b=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function me(U){return Math.min(r.maxSamples,U.samples)}function J(U){const b=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function G(U){const b=o.render.frame;h.get(U)!==b&&(h.set(U,b),U.update())}function Xe(U,b){const re=U.colorSpace,he=U.format,xe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||re!==ta&&re!==Yr&&(Dt.getTransfer(re)===Xt?(he!==$i||xe!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),b}function $e(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=se,this.resetTextureUnits=Y,this.setTexture2D=fe,this.setTexture2DArray=W,this.setTexture3D=te,this.setTextureCube=H,this.rebindTextures=on,this.setupRenderTarget=V,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=we,this.useMultisampledRTT=J}function uA(t,e){function n(i,r=Yr){let s;const o=Dt.getTransfer(r);if(i===dr)return t.UNSIGNED_BYTE;if(i===xm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ym)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Sx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ex)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mx)return t.BYTE;if(i===wx)return t.SHORT;if(i===ml)return t.UNSIGNED_SHORT;if(i===_m)return t.INT;if(i===qs)return t.UNSIGNED_INT;if(i===Er)return t.FLOAT;if(i===Tl)return t.HALF_FLOAT;if(i===Tx)return t.ALPHA;if(i===Ax)return t.RGB;if(i===$i)return t.RGBA;if(i===vl)return t.DEPTH_COMPONENT;if(i===_l)return t.DEPTH_STENCIL;if(i===bx)return t.RED;if(i===Mm)return t.RED_INTEGER;if(i===Cx)return t.RG;if(i===wm)return t.RG_INTEGER;if(i===Sm)return t.RGBA_INTEGER;if(i===zc||i===Bc||i===Hc||i===Vc)if(o===Xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gh||i===Wh||i===Xh||i===jh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qh||i===Yh||i===$h)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qh||i===Yh)return o===Xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$h)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Kh||i===Zh||i===Jh||i===Qh||i===ep||i===tp||i===np||i===ip||i===rp||i===sp||i===op||i===ap||i===lp||i===cp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kh)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zh)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jh)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qh)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ep)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===np)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ip)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===op)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ap)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===up||i===dp||i===fp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===up)return o===Xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hp||i===pp||i===mp||i===gp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const dA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new zx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new us({vertexShader:dA,fragmentShader:fA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new B(new Sn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pA extends oa{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,p=null,m=null,g=null,S=null;const A=typeof XRWebGLBinding<"u",x=new hA,d={},_=n.getContextAttributes();let y=null,E=null;const I=[],L=[],D=new et;let F=null;const T=new Ei;T.viewport=new jt;const M=new Ei;M.viewport=new jt;const z=[T,M],Y=new NS;let se=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pe){let _e=I[pe];return _e===void 0&&(_e=new yf,I[pe]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(pe){let _e=I[pe];return _e===void 0&&(_e=new yf,I[pe]=_e),_e.getGripSpace()},this.getHand=function(pe){let _e=I[pe];return _e===void 0&&(_e=new yf,I[pe]=_e),_e.getHandSpace()};function fe(pe){const _e=L.indexOf(pe.inputSource);if(_e===-1)return;const we=I[_e];we!==void 0&&(we.update(pe.inputSource,pe.frame,u||o),we.dispatchEvent({type:pe.type,data:pe.inputSource}))}function W(){r.removeEventListener("select",fe),r.removeEventListener("selectstart",fe),r.removeEventListener("selectend",fe),r.removeEventListener("squeeze",fe),r.removeEventListener("squeezestart",fe),r.removeEventListener("squeezeend",fe),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",te);for(let pe=0;pe<I.length;pe++){const _e=L[pe];_e!==null&&(L[pe]=null,I[pe].disconnect(_e))}se=null,ce=null,x.reset();for(const pe in d)delete d[pe];e.setRenderTarget(y),g=null,m=null,p=null,r=null,E=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pe){s=pe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pe){a=pe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(pe){u=pe},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p===null&&A&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(pe){if(r=pe,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",fe),r.addEventListener("selectstart",fe),r.addEventListener("selectend",fe),r.addEventListener("squeeze",fe),r.addEventListener("squeezestart",fe),r.addEventListener("squeezeend",fe),r.addEventListener("end",W),r.addEventListener("inputsourceschange",te),_.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(D),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,nt=null,He=null;_.depth&&(He=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=_.stencil?_l:vl,nt=_.stencil?gl:qs);const ht={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:s};p=this.getBinding(),m=p.createProjectionLayer(ht),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new Ys(m.textureWidth,m.textureHeight,{format:$i,type:dr,depthTexture:new Ox(m.textureWidth,m.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const we={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,we),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Ys(g.framebufferWidth,g.framebufferHeight,{format:$i,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function te(pe){for(let _e=0;_e<pe.removed.length;_e++){const we=pe.removed[_e],nt=L.indexOf(we);nt>=0&&(L[nt]=null,I[nt].disconnect(we))}for(let _e=0;_e<pe.added.length;_e++){const we=pe.added[_e];let nt=L.indexOf(we);if(nt===-1){for(let ht=0;ht<I.length;ht++)if(ht>=L.length){L.push(we),nt=ht;break}else if(L[ht]===null){L[ht]=we,nt=ht;break}if(nt===-1)break}const He=I[nt];He&&He.connect(we)}}const H=new X,oe=new X;function ue(pe,_e,we){H.setFromMatrixPosition(_e.matrixWorld),oe.setFromMatrixPosition(we.matrixWorld);const nt=H.distanceTo(oe),He=_e.projectionMatrix.elements,ht=we.projectionMatrix.elements,on=He[14]/(He[10]-1),V=He[14]/(He[10]+1),zt=(He[9]+1)/He[5],at=(He[9]-1)/He[5],it=(He[8]-1)/He[0],q=(ht[8]+1)/ht[0],me=on*it,J=on*q,G=nt/(-it+q),Xe=G*-it;if(_e.matrixWorld.decompose(pe.position,pe.quaternion,pe.scale),pe.translateX(Xe),pe.translateZ(G),pe.matrixWorld.compose(pe.position,pe.quaternion,pe.scale),pe.matrixWorldInverse.copy(pe.matrixWorld).invert(),He[10]===-1)pe.projectionMatrix.copy(_e.projectionMatrix),pe.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const $e=on+G,U=V+G,b=me-Xe,re=J+(nt-Xe),he=zt*V/U*$e,xe=at*V/U*$e;pe.projectionMatrix.makePerspective(b,re,he,xe,$e,U),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert()}}function Pe(pe,_e){_e===null?pe.matrixWorld.copy(pe.matrix):pe.matrixWorld.multiplyMatrices(_e.matrixWorld,pe.matrix),pe.matrixWorldInverse.copy(pe.matrixWorld).invert()}this.updateCamera=function(pe){if(r===null)return;let _e=pe.near,we=pe.far;x.texture!==null&&(x.depthNear>0&&(_e=x.depthNear),x.depthFar>0&&(we=x.depthFar)),Y.near=M.near=T.near=_e,Y.far=M.far=T.far=we,(se!==Y.near||ce!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),se=Y.near,ce=Y.far),Y.layers.mask=pe.layers.mask|6,T.layers.mask=Y.layers.mask&3,M.layers.mask=Y.layers.mask&5;const nt=pe.parent,He=Y.cameras;Pe(Y,nt);for(let ht=0;ht<He.length;ht++)Pe(He[ht],nt);He.length===2?ue(Y,T,M):Y.projectionMatrix.copy(T.projectionMatrix),ze(pe,Y,nt)};function ze(pe,_e,we){we===null?pe.matrix.copy(_e.matrixWorld):(pe.matrix.copy(we.matrixWorld),pe.matrix.invert(),pe.matrix.multiply(_e.matrixWorld)),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.updateMatrixWorld(!0),pe.projectionMatrix.copy(_e.projectionMatrix),pe.projectionMatrixInverse.copy(_e.projectionMatrixInverse),pe.isPerspectiveCamera&&(pe.fov=vp*2*Math.atan(1/pe.projectionMatrix.elements[5]),pe.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(pe){l=pe,m!==null&&(m.fixedFoveation=pe),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=pe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Y)},this.getCameraTexture=function(pe){return d[pe]};let _t=null;function ft(pe,_e){if(h=_e.getViewerPose(u||o),S=_e,h!==null){const we=h.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let nt=!1;we.length!==Y.cameras.length&&(Y.cameras.length=0,nt=!0);for(let V=0;V<we.length;V++){const zt=we[V];let at=null;if(g!==null)at=g.getViewport(zt);else{const q=p.getViewSubImage(m,zt);at=q.viewport,V===0&&(e.setRenderTargetTextures(E,q.colorTexture,q.depthStencilTexture),e.setRenderTarget(E))}let it=z[V];it===void 0&&(it=new Ei,it.layers.enable(V),it.viewport=new jt,z[V]=it),it.matrix.fromArray(zt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(zt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(at.x,at.y,at.width,at.height),V===0&&(Y.matrix.copy(it.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),nt===!0&&Y.cameras.push(it)}const He=r.enabledFeatures;if(He&&He.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){p=i.getBinding();const V=p.getDepthInformation(we[0]);V&&V.isValid&&V.texture&&x.init(V,r.renderState)}if(He&&He.includes("camera-access")&&A){e.state.unbindTexture(),p=i.getBinding();for(let V=0;V<we.length;V++){const zt=we[V].camera;if(zt){let at=d[zt];at||(at=new zx,d[zt]=at);const it=p.getCameraImage(zt);at.sourceTexture=it}}}}for(let we=0;we<I.length;we++){const nt=L[we],He=I[we];nt!==null&&He!==void 0&&He.update(nt,_e,u||o)}_t&&_t(pe,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),S=null}const Ie=new Wx;Ie.setAnimationLoop(ft),this.setAnimationLoop=function(pe){_t=pe},this.dispose=function(){}}}const bs=new er,mA=new tn;function gA(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,Ux(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,_,y,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(x,d):d.isMeshToonMaterial?(s(x,d),p(x,d)):d.isMeshPhongMaterial?(s(x,d),h(x,d)):d.isMeshStandardMaterial?(s(x,d),m(x,d),d.isMeshPhysicalMaterial&&g(x,d,E)):d.isMeshMatcapMaterial?(s(x,d),S(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),A(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(o(x,d),d.isLineDashedMaterial&&a(x,d)):d.isPointsMaterial?l(x,d,_,y):d.isSpriteMaterial?u(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===gi&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===gi&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const _=e.get(d),y=_.envMap,E=_.envMapRotation;y&&(x.envMap.value=y,bs.copy(E),bs.x*=-1,bs.y*=-1,bs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),x.envMapRotation.value.setFromMatrix4(mA.makeRotationFromEuler(bs)),x.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function o(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function a(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function l(x,d,_,y){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*_,x.scale.value=y*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function u(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function h(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function p(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function m(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function g(x,d,_){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===gi&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=_.texture,x.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,d){d.matcap&&(x.matcap.value=d.matcap)}function A(x,d){const _=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(_.matrixWorld),x.nearDistance.value=_.shadow.camera.near,x.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const E=y.program;i.uniformBlockBinding(_,E)}function u(_,y){let E=r[_.id];E===void 0&&(S(_),E=h(_),r[_.id]=E,_.addEventListener("dispose",x));const I=y.program;i.updateUBOMapping(_,I);const L=e.render.frame;s[_.id]!==L&&(m(_),s[_.id]=L)}function h(_){const y=p();_.__bindingPointIndex=y;const E=t.createBuffer(),I=_.__size,L=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,I,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,E),E}function p(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(_){const y=r[_.id],E=_.uniforms,I=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let L=0,D=E.length;L<D;L++){const F=Array.isArray(E[L])?E[L]:[E[L]];for(let T=0,M=F.length;T<M;T++){const z=F[T];if(g(z,L,T,I)===!0){const Y=z.__offset,se=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let fe=0;fe<se.length;fe++){const W=se[fe],te=A(W);typeof W=="number"||typeof W=="boolean"?(z.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,Y+ce,z.__data)):W.isMatrix3?(z.__data[0]=W.elements[0],z.__data[1]=W.elements[1],z.__data[2]=W.elements[2],z.__data[3]=0,z.__data[4]=W.elements[3],z.__data[5]=W.elements[4],z.__data[6]=W.elements[5],z.__data[7]=0,z.__data[8]=W.elements[6],z.__data[9]=W.elements[7],z.__data[10]=W.elements[8],z.__data[11]=0):(W.toArray(z.__data,ce),ce+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(_,y,E,I){const L=_.value,D=y+"_"+E;if(I[D]===void 0)return typeof L=="number"||typeof L=="boolean"?I[D]=L:I[D]=L.clone(),!0;{const F=I[D];if(typeof L=="number"||typeof L=="boolean"){if(F!==L)return I[D]=L,!0}else if(F.equals(L)===!1)return F.copy(L),!0}return!1}function S(_){const y=_.uniforms;let E=0;const I=16;for(let D=0,F=y.length;D<F;D++){const T=Array.isArray(y[D])?y[D]:[y[D]];for(let M=0,z=T.length;M<z;M++){const Y=T[M],se=Array.isArray(Y.value)?Y.value:[Y.value];for(let ce=0,fe=se.length;ce<fe;ce++){const W=se[ce],te=A(W),H=E%I,oe=H%te.boundary,ue=H+oe;E+=oe,ue!==0&&I-ue<te.storage&&(E+=I-ue),Y.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=te.storage}}}const L=E%I;return L>0&&(E+=I-L),_.__size=E,_.__cache={},this}function A(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function x(_){const y=_.target;y.removeEventListener("dispose",x);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class _A{constructor(e={}){const{canvas:n=Ow(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const S=new Uint32Array(4),A=new Int32Array(4);let x=null,d=null;const _=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let I=!1;this._outputColorSpace=Dn;let L=0,D=0,F=null,T=-1,M=null;const z=new jt,Y=new jt;let se=null;const ce=new St(0);let fe=0,W=n.width,te=n.height,H=1,oe=null,ue=null;const Pe=new jt(0,0,W,te),ze=new jt(0,0,W,te);let _t=!1;const ft=new Rm;let Ie=!1,pe=!1;const _e=new tn,we=new X,nt=new jt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function on(){return F===null?H:1}let V=i;function zt(C,ee){return n.getContext(C,ee)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gm}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",je,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),V===null){const ee="webgl2";if(V=zt(ee,C),V===null)throw zt(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let at,it,q,me,J,G,Xe,$e,U,b,re,he,xe,de,Ne,Me,De,Ze,Re,Ue,ot,Je,ye,dt;function Z(){at=new CT(V),at.init(),Je=new uA(V,at),it=new MT(V,at,e,Je),q=new lA(V,at),it.reversedDepthBuffer&&m&&q.buffers.depth.setReversed(!0),me=new IT(V),J=new $5,G=new cA(V,at,q,J,it,Je,me),Xe=new ST(E),$e=new bT(E),U=new kS(V),ye=new xT(V,U),b=new RT(V,U,me,ye),re=new DT(V,b,U,me),Re=new LT(V,it,G),Me=new wT(J),he=new Y5(E,Xe,$e,at,it,ye,Me),xe=new gA(E,J),de=new Z5,Ne=new iA(at),Ze=new _T(E,Xe,$e,q,re,g,l),De=new oA(E,re,it),dt=new vA(V,me,it,q),Ue=new yT(V,at,me),ot=new PT(V,at,me),me.programs=he.programs,E.capabilities=it,E.extensions=at,E.properties=J,E.renderLists=de,E.shadowMap=De,E.state=q,E.info=me}Z();const be=new pA(E,V);this.xr=be,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=at.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=at.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(W,te,!1))},this.getSize=function(C){return C.set(W,te)},this.setSize=function(C,ee,ae=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,te=ee,n.width=Math.floor(C*H),n.height=Math.floor(ee*H),ae===!0&&(n.style.width=C+"px",n.style.height=ee+"px"),this.setViewport(0,0,C,ee)},this.getDrawingBufferSize=function(C){return C.set(W*H,te*H).floor()},this.setDrawingBufferSize=function(C,ee,ae){W=C,te=ee,H=ae,n.width=Math.floor(C*ae),n.height=Math.floor(ee*ae),this.setViewport(0,0,C,ee)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(Pe)},this.setViewport=function(C,ee,ae,le){C.isVector4?Pe.set(C.x,C.y,C.z,C.w):Pe.set(C,ee,ae,le),q.viewport(z.copy(Pe).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(ze)},this.setScissor=function(C,ee,ae,le){C.isVector4?ze.set(C.x,C.y,C.z,C.w):ze.set(C,ee,ae,le),q.scissor(Y.copy(ze).multiplyScalar(H).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(C){q.setScissorTest(_t=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){ue=C},this.getClearColor=function(C){return C.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(C=!0,ee=!0,ae=!0){let le=0;if(C){let ne=!1;if(F!==null){const Te=F.texture.format;ne=Te===Sm||Te===wm||Te===Mm}if(ne){const Te=F.texture.type,Fe=Te===dr||Te===qs||Te===ml||Te===gl||Te===xm||Te===ym,Oe=Ze.getClearColor(),Be=Ze.getClearAlpha(),rt=Oe.r,st=Oe.g,tt=Oe.b;Fe?(S[0]=rt,S[1]=st,S[2]=tt,S[3]=Be,V.clearBufferuiv(V.COLOR,0,S)):(A[0]=rt,A[1]=st,A[2]=tt,A[3]=Be,V.clearBufferiv(V.COLOR,0,A))}else le|=V.COLOR_BUFFER_BIT}ee&&(le|=V.DEPTH_BUFFER_BIT),ae&&(le|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",je,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),Ze.dispose(),de.dispose(),Ne.dispose(),J.dispose(),Xe.dispose(),$e.dispose(),re.dispose(),ye.dispose(),dt.dispose(),he.dispose(),be.dispose(),be.removeEventListener("sessionstart",jn),be.removeEventListener("sessionend",ai),qt.stop()};function Le(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function je(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const C=me.autoReset,ee=De.enabled,ae=De.autoUpdate,le=De.needsUpdate,ne=De.type;Z(),me.autoReset=C,De.enabled=ee,De.autoUpdate=ae,De.needsUpdate=le,De.type=ne}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ve(C){const ee=C.target;ee.removeEventListener("dispose",ve),qe(ee)}function qe(C){lt(C),J.remove(C)}function lt(C){const ee=J.get(C).programs;ee!==void 0&&(ee.forEach(function(ae){he.releaseProgram(ae)}),C.isShaderMaterial&&he.releaseShaderCache(C))}this.renderBufferDirect=function(C,ee,ae,le,ne,Te){ee===null&&(ee=He);const Fe=ne.isMesh&&ne.matrixWorld.determinant()<0,Oe=ua(C,ee,ae,le,ne);q.setMaterial(le,Fe);let Be=ae.index,rt=1;if(le.wireframe===!0){if(Be=b.getWireframeAttribute(ae),Be===void 0)return;rt=2}const st=ae.drawRange,tt=ae.attributes.position;let yt=st.start*rt,Lt=(st.start+st.count)*rt;Te!==null&&(yt=Math.max(yt,Te.start*rt),Lt=Math.min(Lt,(Te.start+Te.count)*rt)),Be!==null?(yt=Math.max(yt,0),Lt=Math.min(Lt,Be.count)):tt!=null&&(yt=Math.max(yt,0),Lt=Math.min(Lt,tt.count));const nn=Lt-yt;if(nn<0||nn===1/0)return;ye.setup(ne,le,Oe,ae,Be);let Ht,bt=Ue;if(Be!==null&&(Ht=U.get(Be),bt=ot,bt.setIndex(Ht)),ne.isMesh)le.wireframe===!0?(q.setLineWidth(le.wireframeLinewidth*on()),bt.setMode(V.LINES)):bt.setMode(V.TRIANGLES);else if(ne.isLine){let Ye=le.linewidth;Ye===void 0&&(Ye=1),q.setLineWidth(Ye*on()),ne.isLineSegments?bt.setMode(V.LINES):ne.isLineLoop?bt.setMode(V.LINE_LOOP):bt.setMode(V.LINE_STRIP)}else ne.isPoints?bt.setMode(V.POINTS):ne.isSprite&&bt.setMode(V.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)xl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))bt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Ye=ne._multiDrawStarts,mt=ne._multiDrawCounts,Tt=ne._multiDrawCount,Fn=Be?U.get(Be).bytesPerElement:1,tr=J.get(le).currentProgram.getUniforms();for(let Qn=0;Qn<Tt;Qn++)tr.setValue(V,"_gl_DrawID",Qn),bt.render(Ye[Qn]/Fn,mt[Qn])}else if(ne.isInstancedMesh)bt.renderInstances(yt,nn,ne.count);else if(ae.isInstancedBufferGeometry){const Ye=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,mt=Math.min(ae.instanceCount,Ye);bt.renderInstances(yt,nn,mt)}else bt.render(yt,nn)};function Bt(C,ee,ae){C.transparent===!0&&C.side===Vt&&C.forceSinglePass===!1?(C.side=gi,C.needsUpdate=!0,ms(C,ee,ae),C.side=cs,C.needsUpdate=!0,ms(C,ee,ae),C.side=Vt):ms(C,ee,ae)}this.compile=function(C,ee,ae=null){ae===null&&(ae=C),d=Ne.get(ae),d.init(ee),y.push(d),ae.traverseVisible(function(ne){ne.isLight&&ne.layers.test(ee.layers)&&(d.pushLight(ne),ne.castShadow&&d.pushShadow(ne))}),C!==ae&&C.traverseVisible(function(ne){ne.isLight&&ne.layers.test(ee.layers)&&(d.pushLight(ne),ne.castShadow&&d.pushShadow(ne))}),d.setupLights();const le=new Set;return C.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Te=ne.material;if(Te)if(Array.isArray(Te))for(let Fe=0;Fe<Te.length;Fe++){const Oe=Te[Fe];Bt(Oe,ae,ne),le.add(Oe)}else Bt(Te,ae,ne),le.add(Te)}),d=y.pop(),le},this.compileAsync=function(C,ee,ae=null){const le=this.compile(C,ee,ae);return new Promise(ne=>{function Te(){if(le.forEach(function(Fe){J.get(Fe).currentProgram.isReady()&&le.delete(Fe)}),le.size===0){ne(C);return}setTimeout(Te,10)}at.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let pt=null;function oi(C){pt&&pt(C)}function jn(){qt.stop()}function ai(){qt.start()}const qt=new Wx;qt.setAnimationLoop(oi),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(C){pt=C,be.setAnimationLoop(C),C===null?qt.stop():qt.start()},be.addEventListener("sessionstart",jn),be.addEventListener("sessionend",ai),this.render=function(C,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(ee),ee=be.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,ee,F),d=Ne.get(C,y.length),d.init(ee),y.push(d),_e.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),ft.setFromProjectionMatrix(_e,ar,ee.reversedDepth),pe=this.localClippingEnabled,Ie=Me.init(this.clippingPlanes,pe),x=de.get(C,_.length),x.init(),_.push(x),be.enabled===!0&&be.isPresenting===!0){const Te=E.xr.getDepthSensingMesh();Te!==null&&Js(Te,ee,-1/0,E.sortObjects)}Js(C,ee,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(oe,ue),ht=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,ht&&Ze.addToRenderList(x,C),this.info.render.frame++,Ie===!0&&Me.beginShadows();const ae=d.state.shadowsArray;De.render(ae,C,ee),Ie===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=x.opaque,ne=x.transmissive;if(d.setupLights(),ee.isArrayCamera){const Te=ee.cameras;if(ne.length>0)for(let Fe=0,Oe=Te.length;Fe<Oe;Fe++){const Be=Te[Fe];la(le,ne,C,Be)}ht&&Ze.render(C);for(let Fe=0,Oe=Te.length;Fe<Oe;Fe++){const Be=Te[Fe];Qs(x,C,Be,Be.viewport)}}else ne.length>0&&la(le,ne,C,ee),ht&&Ze.render(C),Qs(x,C,ee);F!==null&&D===0&&(G.updateMultisampleRenderTarget(F),G.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(E,C,ee),ye.resetDefaultState(),T=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],Ie===!0&&Me.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?x=_[_.length-1]:x=null};function Js(C,ee,ae,le){if(C.visible===!1)return;if(C.layers.test(ee.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(ee);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ft.intersectsSprite(C)){le&&nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(_e);const Fe=re.update(C),Oe=C.material;Oe.visible&&x.push(C,Fe,Oe,ae,nt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ft.intersectsObject(C))){const Fe=re.update(C),Oe=C.material;if(le&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),nt.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),nt.copy(Fe.boundingSphere.center)),nt.applyMatrix4(C.matrixWorld).applyMatrix4(_e)),Array.isArray(Oe)){const Be=Fe.groups;for(let rt=0,st=Be.length;rt<st;rt++){const tt=Be[rt],yt=Oe[tt.materialIndex];yt&&yt.visible&&x.push(C,Fe,yt,ae,nt.z,tt)}}else Oe.visible&&x.push(C,Fe,Oe,ae,nt.z,null)}}const Te=C.children;for(let Fe=0,Oe=Te.length;Fe<Oe;Fe++)Js(Te[Fe],ee,ae,le)}function Qs(C,ee,ae,le){const ne=C.opaque,Te=C.transmissive,Fe=C.transparent;d.setupLightsView(ae),Ie===!0&&Me.setGlobalState(E.clippingPlanes,ae),le&&q.viewport(z.copy(le)),ne.length>0&&ps(ne,ee,ae),Te.length>0&&ps(Te,ee,ae),Fe.length>0&&ps(Fe,ee,ae),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function la(C,ee,ae,le){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[le.id]===void 0&&(d.state.transmissionRenderTarget[le.id]=new Ys(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Tl:dr,minFilter:zs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Te=d.state.transmissionRenderTarget[le.id],Fe=le.viewport||z;Te.setSize(Fe.z*E.transmissionResolutionScale,Fe.w*E.transmissionResolutionScale);const Oe=E.getRenderTarget(),Be=E.getActiveCubeFace(),rt=E.getActiveMipmapLevel();E.setRenderTarget(Te),E.getClearColor(ce),fe=E.getClearAlpha(),fe<1&&E.setClearColor(16777215,.5),E.clear(),ht&&Ze.render(ae);const st=E.toneMapping;E.toneMapping=os;const tt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),d.setupLightsView(le),Ie===!0&&Me.setGlobalState(E.clippingPlanes,le),ps(C,ae,le),G.updateMultisampleRenderTarget(Te),G.updateRenderTargetMipmap(Te),at.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Lt=0,nn=ee.length;Lt<nn;Lt++){const Ht=ee[Lt],bt=Ht.object,Ye=Ht.geometry,mt=Ht.material,Tt=Ht.group;if(mt.side===Vt&&bt.layers.test(le.layers)){const Fn=mt.side;mt.side=gi,mt.needsUpdate=!0,eo(bt,ae,le,Ye,mt,Tt),mt.side=Fn,mt.needsUpdate=!0,yt=!0}}yt===!0&&(G.updateMultisampleRenderTarget(Te),G.updateRenderTargetMipmap(Te))}E.setRenderTarget(Oe,Be,rt),E.setClearColor(ce,fe),tt!==void 0&&(le.viewport=tt),E.toneMapping=st}function ps(C,ee,ae){const le=ee.isScene===!0?ee.overrideMaterial:null;for(let ne=0,Te=C.length;ne<Te;ne++){const Fe=C[ne],Oe=Fe.object,Be=Fe.geometry,rt=Fe.group;let st=Fe.material;st.allowOverride===!0&&le!==null&&(st=le),Oe.layers.test(ae.layers)&&eo(Oe,ee,ae,Be,st,rt)}}function eo(C,ee,ae,le,ne,Te){C.onBeforeRender(E,ee,ae,le,ne,Te),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(E,ee,ae,le,C,Te),ne.transparent===!0&&ne.side===Vt&&ne.forceSinglePass===!1?(ne.side=gi,ne.needsUpdate=!0,E.renderBufferDirect(ae,ee,le,ne,C,Te),ne.side=cs,ne.needsUpdate=!0,E.renderBufferDirect(ae,ee,le,ne,C,Te),ne.side=Vt):E.renderBufferDirect(ae,ee,le,ne,C,Te),C.onAfterRender(E,ee,ae,le,ne,Te)}function ms(C,ee,ae){ee.isScene!==!0&&(ee=He);const le=J.get(C),ne=d.state.lights,Te=d.state.shadowsArray,Fe=ne.state.version,Oe=he.getParameters(C,ne.state,Te,ee,ae),Be=he.getProgramCacheKey(Oe);let rt=le.programs;le.environment=C.isMeshStandardMaterial?ee.environment:null,le.fog=ee.fog,le.envMap=(C.isMeshStandardMaterial?$e:Xe).get(C.envMap||le.environment),le.envMapRotation=le.environment!==null&&C.envMap===null?ee.environmentRotation:C.envMapRotation,rt===void 0&&(C.addEventListener("dispose",ve),rt=new Map,le.programs=rt);let st=rt.get(Be);if(st!==void 0){if(le.currentProgram===st&&le.lightsStateVersion===Fe)return to(C,Oe),st}else Oe.uniforms=he.getUniforms(C),C.onBeforeCompile(Oe,E),st=he.acquireProgram(Oe,Be),rt.set(Be,st),le.uniforms=Oe.uniforms;const tt=le.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(tt.clippingPlanes=Me.uniform),to(C,Oe),le.needsLights=Rl(C),le.lightsStateVersion=Fe,le.needsLights&&(tt.ambientLightColor.value=ne.state.ambient,tt.lightProbe.value=ne.state.probe,tt.directionalLights.value=ne.state.directional,tt.directionalLightShadows.value=ne.state.directionalShadow,tt.spotLights.value=ne.state.spot,tt.spotLightShadows.value=ne.state.spotShadow,tt.rectAreaLights.value=ne.state.rectArea,tt.ltc_1.value=ne.state.rectAreaLTC1,tt.ltc_2.value=ne.state.rectAreaLTC2,tt.pointLights.value=ne.state.point,tt.pointLightShadows.value=ne.state.pointShadow,tt.hemisphereLights.value=ne.state.hemi,tt.directionalShadowMap.value=ne.state.directionalShadowMap,tt.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,tt.spotShadowMap.value=ne.state.spotShadowMap,tt.spotLightMatrix.value=ne.state.spotLightMatrix,tt.spotLightMap.value=ne.state.spotLightMap,tt.pointShadowMap.value=ne.state.pointShadowMap,tt.pointShadowMatrix.value=ne.state.pointShadowMatrix),le.currentProgram=st,le.uniformsList=null,st}function ca(C){if(C.uniformsList===null){const ee=C.currentProgram.getUniforms();C.uniformsList=Gc.seqWithValue(ee.seq,C.uniforms)}return C.uniformsList}function to(C,ee){const ae=J.get(C);ae.outputColorSpace=ee.outputColorSpace,ae.batching=ee.batching,ae.batchingColor=ee.batchingColor,ae.instancing=ee.instancing,ae.instancingColor=ee.instancingColor,ae.instancingMorph=ee.instancingMorph,ae.skinning=ee.skinning,ae.morphTargets=ee.morphTargets,ae.morphNormals=ee.morphNormals,ae.morphColors=ee.morphColors,ae.morphTargetsCount=ee.morphTargetsCount,ae.numClippingPlanes=ee.numClippingPlanes,ae.numIntersection=ee.numClipIntersection,ae.vertexAlphas=ee.vertexAlphas,ae.vertexTangents=ee.vertexTangents,ae.toneMapping=ee.toneMapping}function ua(C,ee,ae,le,ne){ee.isScene!==!0&&(ee=He),G.resetTextureUnits();const Te=ee.fog,Fe=le.isMeshStandardMaterial?ee.environment:null,Oe=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ta,Be=(le.isMeshStandardMaterial?$e:Xe).get(le.envMap||Fe),rt=le.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,st=!!ae.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),tt=!!ae.morphAttributes.position,yt=!!ae.morphAttributes.normal,Lt=!!ae.morphAttributes.color;let nn=os;le.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(nn=E.toneMapping);const Ht=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,bt=Ht!==void 0?Ht.length:0,Ye=J.get(le),mt=d.state.lights;if(Ie===!0&&(pe===!0||C!==M)){const Cn=C===M&&le.id===T;Me.setState(le,C,Cn)}let Tt=!1;le.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==mt.state.version||Ye.outputColorSpace!==Oe||ne.isBatchedMesh&&Ye.batching===!1||!ne.isBatchedMesh&&Ye.batching===!0||ne.isBatchedMesh&&Ye.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ye.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ye.instancing===!1||!ne.isInstancedMesh&&Ye.instancing===!0||ne.isSkinnedMesh&&Ye.skinning===!1||!ne.isSkinnedMesh&&Ye.skinning===!0||ne.isInstancedMesh&&Ye.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ye.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ye.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ye.instancingMorph===!1&&ne.morphTexture!==null||Ye.envMap!==Be||le.fog===!0&&Ye.fog!==Te||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==rt||Ye.vertexTangents!==st||Ye.morphTargets!==tt||Ye.morphNormals!==yt||Ye.morphColors!==Lt||Ye.toneMapping!==nn||Ye.morphTargetsCount!==bt)&&(Tt=!0):(Tt=!0,Ye.__version=le.version);let Fn=Ye.currentProgram;Tt===!0&&(Fn=ms(le,ee,ne));let tr=!1,Qn=!1,fr=!1;const Yt=Fn.getUniforms(),kn=Ye.uniforms;if(q.useProgram(Fn.program)&&(tr=!0,Qn=!0,fr=!0),le.id!==T&&(T=le.id,Qn=!0),tr||M!==C){q.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Yt.setValue(V,"projectionMatrix",C.projectionMatrix),Yt.setValue(V,"viewMatrix",C.matrixWorldInverse);const zn=Yt.map.cameraPosition;zn!==void 0&&zn.setValue(V,we.setFromMatrixPosition(C.matrixWorld)),it.logarithmicDepthBuffer&&Yt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Yt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Qn=!0,fr=!0)}if(ne.isSkinnedMesh){Yt.setOptional(V,ne,"bindMatrix"),Yt.setOptional(V,ne,"bindMatrixInverse");const Cn=ne.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Yt.setValue(V,"boneTexture",Cn.boneTexture,G))}ne.isBatchedMesh&&(Yt.setOptional(V,ne,"batchingTexture"),Yt.setValue(V,"batchingTexture",ne._matricesTexture,G),Yt.setOptional(V,ne,"batchingIdTexture"),Yt.setValue(V,"batchingIdTexture",ne._indirectTexture,G),Yt.setOptional(V,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Yt.setValue(V,"batchingColorTexture",ne._colorsTexture,G));const On=ae.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Re.update(ne,ae,Fn),(Qn||Ye.receiveShadow!==ne.receiveShadow)&&(Ye.receiveShadow=ne.receiveShadow,Yt.setValue(V,"receiveShadow",ne.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(kn.envMap.value=Be,kn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&ee.environment!==null&&(kn.envMapIntensity.value=ee.environmentIntensity),Qn&&(Yt.setValue(V,"toneMappingExposure",E.toneMappingExposure),Ye.needsLights&&da(kn,fr),Te&&le.fog===!0&&xe.refreshFogUniforms(kn,Te),xe.refreshMaterialUniforms(kn,le,H,te,d.state.transmissionRenderTarget[C.id]),Gc.upload(V,ca(Ye),kn,G)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Gc.upload(V,ca(Ye),kn,G),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Yt.setValue(V,"center",ne.center),Yt.setValue(V,"modelViewMatrix",ne.modelViewMatrix),Yt.setValue(V,"normalMatrix",ne.normalMatrix),Yt.setValue(V,"modelMatrix",ne.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Cn=le.uniformsGroups;for(let zn=0,zi=Cn.length;zn<zi;zn++){const Pi=Cn[zn];dt.update(Pi,Fn),dt.bind(Pi,Fn)}}return Fn}function da(C,ee){C.ambientLightColor.needsUpdate=ee,C.lightProbe.needsUpdate=ee,C.directionalLights.needsUpdate=ee,C.directionalLightShadows.needsUpdate=ee,C.pointLights.needsUpdate=ee,C.pointLightShadows.needsUpdate=ee,C.spotLights.needsUpdate=ee,C.spotLightShadows.needsUpdate=ee,C.rectAreaLights.needsUpdate=ee,C.hemisphereLights.needsUpdate=ee}function Rl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,ee,ae){const le=J.get(C);le.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),J.get(C.texture).__webglTexture=ee,J.get(C.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ae,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,ee){const ae=J.get(C);ae.__webglFramebuffer=ee,ae.__useDefaultFramebuffer=ee===void 0};const no=V.createFramebuffer();this.setRenderTarget=function(C,ee=0,ae=0){F=C,L=ee,D=ae;let le=!0,ne=null,Te=!1,Fe=!1;if(C){const Be=J.get(C);if(Be.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(V.FRAMEBUFFER,null),le=!1;else if(Be.__webglFramebuffer===void 0)G.setupRenderTarget(C);else if(Be.__hasExternalTextures)G.rebindTextures(C,J.get(C.texture).__webglTexture,J.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const tt=C.depthTexture;if(Be.__boundDepthTexture!==tt){if(tt!==null&&J.has(tt)&&(C.width!==tt.image.width||C.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(C)}}const rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Fe=!0);const st=J.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(st[ee])?ne=st[ee][ae]:ne=st[ee],Te=!0):C.samples>0&&G.useMultisampledRTT(C)===!1?ne=J.get(C).__webglMultisampledFramebuffer:Array.isArray(st)?ne=st[ae]:ne=st,z.copy(C.viewport),Y.copy(C.scissor),se=C.scissorTest}else z.copy(Pe).multiplyScalar(H).floor(),Y.copy(ze).multiplyScalar(H).floor(),se=_t;if(ae!==0&&(ne=no),q.bindFramebuffer(V.FRAMEBUFFER,ne)&&le&&q.drawBuffers(C,ne),q.viewport(z),q.scissor(Y),q.setScissorTest(se),Te){const Be=J.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Be.__webglTexture,ae)}else if(Fe){const Be=ee;for(let rt=0;rt<C.textures.length;rt++){const st=J.get(C.textures[rt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+rt,st.__webglTexture,ae,Be)}}else if(C!==null&&ae!==0){const Be=J.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Be.__webglTexture,ae)}T=-1},this.readRenderTargetPixels=function(C,ee,ae,le,ne,Te,Fe,Oe=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=J.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){q.bindFramebuffer(V.FRAMEBUFFER,Be);try{const rt=C.textures[Oe],st=rt.format,tt=rt.type;if(!it.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=C.width-le&&ae>=0&&ae<=C.height-ne&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Oe),V.readPixels(ee,ae,le,ne,Je.convert(st),Je.convert(tt),Te))}finally{const rt=F!==null?J.get(F).__webglFramebuffer:null;q.bindFramebuffer(V.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(C,ee,ae,le,ne,Te,Fe,Oe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=J.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be)if(ee>=0&&ee<=C.width-le&&ae>=0&&ae<=C.height-ne){q.bindFramebuffer(V.FRAMEBUFFER,Be);const rt=C.textures[Oe],st=rt.format,tt=rt.type;if(!it.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,yt),V.bufferData(V.PIXEL_PACK_BUFFER,Te.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Oe),V.readPixels(ee,ae,le,ne,Je.convert(st),Je.convert(tt),0);const Lt=F!==null?J.get(F).__webglFramebuffer:null;q.bindFramebuffer(V.FRAMEBUFFER,Lt);const nn=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await zw(V,nn,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,yt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Te),V.deleteBuffer(yt),V.deleteSync(nn),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,ee=null,ae=0){const le=Math.pow(2,-ae),ne=Math.floor(C.image.width*le),Te=Math.floor(C.image.height*le),Fe=ee!==null?ee.x:0,Oe=ee!==null?ee.y:0;G.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,ae,0,0,Fe,Oe,ne,Te),q.unbindTexture()};const Pl=V.createFramebuffer(),gs=V.createFramebuffer();this.copyTextureToTexture=function(C,ee,ae=null,le=null,ne=0,Te=null){Te===null&&(ne!==0?(xl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=ne,ne=0):Te=0);let Fe,Oe,Be,rt,st,tt,yt,Lt,nn;const Ht=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(ae!==null)Fe=ae.max.x-ae.min.x,Oe=ae.max.y-ae.min.y,Be=ae.isBox3?ae.max.z-ae.min.z:1,rt=ae.min.x,st=ae.min.y,tt=ae.isBox3?ae.min.z:0;else{const On=Math.pow(2,-ne);Fe=Math.floor(Ht.width*On),Oe=Math.floor(Ht.height*On),C.isDataArrayTexture?Be=Ht.depth:C.isData3DTexture?Be=Math.floor(Ht.depth*On):Be=1,rt=0,st=0,tt=0}le!==null?(yt=le.x,Lt=le.y,nn=le.z):(yt=0,Lt=0,nn=0);const bt=Je.convert(ee.format),Ye=Je.convert(ee.type);let mt;ee.isData3DTexture?(G.setTexture3D(ee,0),mt=V.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(G.setTexture2DArray(ee,0),mt=V.TEXTURE_2D_ARRAY):(G.setTexture2D(ee,0),mt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,ee.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,ee.unpackAlignment);const Tt=V.getParameter(V.UNPACK_ROW_LENGTH),Fn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),tr=V.getParameter(V.UNPACK_SKIP_PIXELS),Qn=V.getParameter(V.UNPACK_SKIP_ROWS),fr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ht.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ht.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,rt),V.pixelStorei(V.UNPACK_SKIP_ROWS,st),V.pixelStorei(V.UNPACK_SKIP_IMAGES,tt);const Yt=C.isDataArrayTexture||C.isData3DTexture,kn=ee.isDataArrayTexture||ee.isData3DTexture;if(C.isDepthTexture){const On=J.get(C),Cn=J.get(ee),zn=J.get(On.__renderTarget),zi=J.get(Cn.__renderTarget);q.bindFramebuffer(V.READ_FRAMEBUFFER,zn.__webglFramebuffer),q.bindFramebuffer(V.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Pi=0;Pi<Be;Pi++)Yt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,J.get(C).__webglTexture,ne,tt+Pi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,J.get(ee).__webglTexture,Te,nn+Pi)),V.blitFramebuffer(rt,st,Fe,Oe,yt,Lt,Fe,Oe,V.DEPTH_BUFFER_BIT,V.NEAREST);q.bindFramebuffer(V.READ_FRAMEBUFFER,null),q.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ne!==0||C.isRenderTargetTexture||J.has(C)){const On=J.get(C),Cn=J.get(ee);q.bindFramebuffer(V.READ_FRAMEBUFFER,Pl),q.bindFramebuffer(V.DRAW_FRAMEBUFFER,gs);for(let zn=0;zn<Be;zn++)Yt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,On.__webglTexture,ne,tt+zn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,On.__webglTexture,ne),kn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Cn.__webglTexture,Te,nn+zn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Cn.__webglTexture,Te),ne!==0?V.blitFramebuffer(rt,st,Fe,Oe,yt,Lt,Fe,Oe,V.COLOR_BUFFER_BIT,V.NEAREST):kn?V.copyTexSubImage3D(mt,Te,yt,Lt,nn+zn,rt,st,Fe,Oe):V.copyTexSubImage2D(mt,Te,yt,Lt,rt,st,Fe,Oe);q.bindFramebuffer(V.READ_FRAMEBUFFER,null),q.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else kn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(mt,Te,yt,Lt,nn,Fe,Oe,Be,bt,Ye,Ht.data):ee.isCompressedArrayTexture?V.compressedTexSubImage3D(mt,Te,yt,Lt,nn,Fe,Oe,Be,bt,Ht.data):V.texSubImage3D(mt,Te,yt,Lt,nn,Fe,Oe,Be,bt,Ye,Ht):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Te,yt,Lt,Fe,Oe,bt,Ye,Ht.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Te,yt,Lt,Ht.width,Ht.height,bt,Ht.data):V.texSubImage2D(V.TEXTURE_2D,Te,yt,Lt,Fe,Oe,bt,Ye,Ht);V.pixelStorei(V.UNPACK_ROW_LENGTH,Tt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Fn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,tr),V.pixelStorei(V.UNPACK_SKIP_ROWS,Qn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,fr),Te===0&&ee.generateMipmaps&&V.generateMipmap(mt),q.unbindTexture()},this.initRenderTarget=function(C){J.get(C).__webglFramebuffer===void 0&&G.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?G.setTextureCube(C,0):C.isData3DTexture?G.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?G.setTexture2DArray(C,0):G.setTexture2D(C,0),q.unbindTexture()},this.resetState=function(){L=0,D=0,F=null,q.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Dt._getUnpackColorSpace()}}var iv;const Rt=(iv=window.Telegram)==null?void 0:iv.WebApp,J1="/yggdrasil-tma/",Ac=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],xA=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],Q1={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},ev=()=>{try{const t={...Q1,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...Q1,watch:Date.now()}}},Da=()=>new Date().toISOString().slice(0,10),yA=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",Uf=[3,5,8,12,18,25,40],MA=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],wA=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],Ff=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],Na={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},tv={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},kf={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},Of={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function Vr({name:t,className:e}){return $.jsx("img",{src:t.includes(".")?`${J1}img/${t}`:`${J1}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const SA=`
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body,#root{height:100%}
body{background:#0b0f0c;color:#e8f0e8;font-family:system-ui,sans-serif;overflow:hidden}
button{font:inherit;color:inherit;background:none;border:none;cursor:pointer}
.app{height:100vh;display:flex;flex-direction:column}
.hdr{display:flex;justify-content:space-between;align-items:center;padding:7px 12px;background:rgba(8,10,9,.92);border-bottom:1px solid #1e2a20;z-index:6}
.title{font-size:14px;font-weight:600}.back{color:#6db3ff;font-size:13px}.sparks{color:#ffb35c;font-weight:700;font-size:13px}
.maparea{flex:1;position:relative;overflow:hidden;background:#0b0f0c}
.mapwrap{position:absolute;inset:0;overflow-y:auto;overflow-x:hidden;scrollbar-width:none}
.mapwrap::-webkit-scrollbar{display:none}
.mapcanvas{width:100%;min-height:100%;position:relative;margin:0 auto}
.mapimg{width:100%;height:auto;display:block}
.marker{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:5px;z-index:3}
.amulet-wrap{position:relative;width:40px;height:40px;display:flex;align-items:center;justify-content:center}
.amulet-ring{position:absolute;inset:0;border-radius:50%;border:1px dashed;opacity:.5;animation:spin 15s linear infinite;pointer-events:none}
.amulet-glow{position:absolute;inset:-4px;border-radius:50%;opacity:.6;animation:breathe 3s ease-in-out infinite;pointer-events:none;z-index:1}
.amulet-core{position:relative;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;border:2px solid;box-shadow:0 0 9px currentColor,inset 0 0 8px rgba(0,0,0,.85);transition:transform .2s;z-index:2;text-shadow:0 0 6px currentColor}
.amulet-core::after{content:"";position:absolute;inset:3px;border-radius:50%;border:1px solid currentColor;opacity:.5;pointer-events:none}
.marker:active .amulet-core{transform:scale(.85)}
.mname{font-size:9px;font-weight:700;letter-spacing:.5px;padding:3px 8px;border-radius:6px;background:linear-gradient(180deg,rgba(20,25,22,.92),rgba(10,12,11,.96));border:1px solid;text-shadow:0 0 4px currentColor;box-shadow:0 2px 6px rgba(0,0,0,.6);white-space:nowrap;text-transform:uppercase}
.fadeT,.fadeB{position:absolute;left:0;right:0;height:26px;pointer-events:none;z-index:4}
.fadeT{top:0;background:linear-gradient(180deg,#0b0f0c,transparent)}.fadeB{bottom:0;background:linear-gradient(0deg,#0b0f0c,transparent)}
.hint{position:absolute;bottom:10px;left:0;right:0;text-align:center;font-size:11px;color:rgba(207,227,210,.7);z-index:5;pointer-events:none}
.content{flex:1;position:relative;overflow:hidden;background:radial-gradient(circle at 50% 30%,#182420,#0b0f0c)}
.bgimg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.veil{position:absolute;inset:0;background:linear-gradient(rgba(5,8,6,.6),transparent 30%,transparent 65%,rgba(5,8,6,.85));pointer-events:none}
.banner{position:absolute;top:10px;left:12px;right:auto;z-index:4;padding:6px 12px;border-radius:10px;background:linear-gradient(180deg,rgba(20,25,22,.88),rgba(10,12,11,.92));border:1px solid rgba(255,215,106,.45);box-shadow:0 2px 8px rgba(0,0,0,.6);pointer-events:none}
.bemoji{display:none}.btag{display:none}
.bname{font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#ffd76a;text-shadow:0 0 6px rgba(255,215,106,.5)}
.gate{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3;display:flex;flex-direction:column;align-items:center;gap:8px}
.gwrap{position:relative;width:96px;height:96px;display:flex;align-items:center;justify-content:center}
.gate-ring{position:absolute;inset:0;border-radius:50%;border:1.5px dashed;opacity:.6;animation:spin 12s linear infinite;pointer-events:none}
.gate-core{width:76px;height:76px;border-radius:50%;border:3px solid;display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:700;box-shadow:0 0 18px currentColor,inset 0 0 14px rgba(0,0,0,.9);animation:breathe 3s ease-in-out infinite;text-shadow:0 0 10px currentColor}
.player{position:absolute;width:76px;height:110px;transform:translate(-50%,-88%);z-index:20;pointer-events:none;transition:left .12s linear,top .12s linear;filter:drop-shadow(0 5px 7px rgba(0,0,0,.65))}
.player-img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.midgard-content{position:relative;flex:1;min-height:0;overflow:hidden;background:#09110c;touch-action:none}
.midgard-world{position:absolute;left:0;top:0;background:#0b130e;line-height:0;will-change:transform;transition:transform .20s cubic-bezier(.22,.75,.25,1)}
.midgard-mapimg{position:absolute;left:0;top:0;display:block;width:100%;height:100%;object-fit:fill;user-select:none;-webkit-user-drag:none}
.midgard-shade{position:absolute;inset:0;z-index:5;pointer-events:none;background:linear-gradient(180deg,rgba(3,7,4,.12),transparent 24%,transparent 78%,rgba(3,7,4,.22))}
.midgard-content .player{z-index:20;width:58px;height:84px;transform:translate(-50%,-82%);transition:left .16s ease-out,top .16s ease-out;filter:drop-shadow(0 7px 5px rgba(0,0,0,.68))}
.move-pad{position:absolute;left:12px;bottom:16px;z-index:30;width:126px;display:flex;flex-direction:column;align-items:center;gap:3px}
.move-row{display:flex;align-items:center;justify-content:center}
.move-pad button{width:38px;height:38px;margin:2px;border-radius:50%;border:1px solid rgba(255,255,255,.3);background:rgba(12,18,14,.78);color:#e8f0e8;font-size:18px;font-weight:700;box-shadow:0 3px 8px rgba(0,0,0,.45),inset 0 0 8px rgba(126,231,135,.08);backdrop-filter:blur(4px)}
.move-pad button:active{transform:scale(.88);background:rgba(35,55,42,.9)}
.move-pad .move-center{width:32px;height:32px;font-size:10px;color:#ffd76a;border-color:rgba(255,215,106,.35)}
.scene-hint{position:absolute;left:50%;bottom:8px;transform:translateX(-50%);z-index:25;padding:6px 10px;border-radius:9px;background:rgba(5,9,7,.72);border:1px solid rgba(126,231,135,.2);color:rgba(207,227,210,.72);font-size:10px;white-space:nowrap;pointer-events:none}
.herobar{display:flex;gap:10px;align-items:center;padding:8px 12px;background:rgba(10,13,11,.96);border-top:1px solid #1e2a20;z-index:6}
.hbface{position:relative;width:34px;height:34px;flex-shrink:0;border-radius:50%;border:1.5px solid;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;overflow:hidden;background:#0d130f;text-shadow:0 0 5px currentColor}
.hbimg{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.hbname{flex:1;display:flex;flex-direction:column;align-items:flex-start;font-size:13px;font-weight:700;line-height:1.15}
.hbname i{font-style:normal;font-size:10px;color:#8fa39a}
.hbst{font-size:12px;color:#ffb35c;font-weight:700;white-space:nowrap}
.hbwpn{font-size:16px}
.scroll{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:12px}
.card{background:#121a15;border:1px solid #223028;border-radius:16px;padding:14px}.center{text-align:center}.big{font-size:44px}
.qhead2{font-size:16px;font-weight:700;margin:6px 0 4px}.dim{color:#8fa39a;font-size:13px;margin:6px 0 12px}
.choose-screen{padding:12px 12px 18px;gap:10px}.choose-intro{padding:14px 12px 10px}.choose-intro .big{font-size:34px;color:#ffd76a;text-shadow:0 0 10px rgba(255,215,106,.45)}
.hcard{display:flex;gap:12px;padding:12px;background:#121a15;border:1px solid #223028;border-radius:16px;text-align:left;align-items:center}
.hcard.on{border-color:#ffd76a;box-shadow:0 0 12px rgba(255,215,106,.35)}
.hface{position:relative;width:64px;height:64px;flex-shrink:0;border-radius:50%;border:2px solid;display:flex;align-items:center;justify-content:center;overflow:hidden}
.hsym{font-size:26px;font-weight:700;text-shadow:0 0 8px currentColor}
.himg{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.hinfo{flex:1;display:flex;flex-direction:column;gap:3px}
.hname{font-size:15px;font-weight:700}
.hab{font-size:11px;color:#a9bfae;line-height:1.35}
.hst{font-size:11px;color:#ffb35c;font-weight:700}
.hw{font-size:11px;color:#8fa39a}
.bigface{width:96px;height:96px;margin:0 auto 10px}
.hrow{font-size:13px;color:#a9bfae;margin:6px 0;text-align:left}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.chip{padding:8px 12px;border-radius:10px;background:#0d130f;border:1px solid #223028;font-size:13px}
.chip.on{border-color:#ffd76a;color:#ffd76a;box-shadow:0 0 8px rgba(255,215,106,.4)}
.stats{display:flex;gap:10px;justify-content:center;margin:12px 0}
.stat{flex:1;background:#0d130f;border:1px solid #223028;border-radius:12px;padding:10px;display:flex;flex-direction:column;gap:4px;align-items:center}.stat b{font-size:15px}.stat span{font-size:11px;color:#8fa39a}
.rank{font-size:14px;color:#ffd76a}
.nav{display:flex;flex-shrink:0;background:linear-gradient(180deg,#141b16,#0a0d0b);border-top:2px solid #2e3d31;box-shadow:inset 0 1px 0 rgba(255,215,106,.12);padding:3px 4px calc(3px + env(safe-area-inset-bottom));z-index:6}
.navbtn{flex:1;display:flex;flex-direction:column;align-items:center;gap:1px;padding:2px 0;color:#7d8f85;font-size:8px;font-weight:700;letter-spacing:1px;text-transform:uppercase}
.navbtn .ic{width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:700;border-radius:50%;border:1.5px solid #3a4a3d;background:linear-gradient(180deg,#131a15,#0b0f0c);color:#8fa39a;transition:all .2s;text-shadow:0 0 5px currentColor}
.navbtn:active .ic{transform:scale(.88)}
.navbtn.on{color:#ffd76a}
.navbtn.on .ic{border-color:#ffd76a;color:#ffd76a;box-shadow:0 0 10px rgba(255,215,106,.45),inset 0 0 6px rgba(255,215,106,.2)}
.mhead{display:flex;flex-direction:column;align-items:center;gap:6px;padding:16px 0 6px}
.mface{width:84px;height:84px;border-radius:50%;border:3px solid;display:flex;align-items:center;justify-content:center;font-size:34px;font-weight:700;box-shadow:0 0 16px currentColor,inset 0 0 12px rgba(0,0,0,.9);text-shadow:0 0 10px currentColor;background:radial-gradient(circle,#1a221c,#0a0a0a 75%)}
.mname2{font-size:15px;font-weight:700}.mtitle{font-size:11px;color:#8fa39a}
/* Облако-мысль для загадки */
.greet{background:none;border:none;padding:0;font-style:italic;color:#a9bfae;text-align:center;font-size:12px;line-height:1.5}
.cloud{position:relative;margin:14px 10px 0;padding:16px 14px 12px;border-radius:26px;background:linear-gradient(180deg,#eef3ec,#d9e2da);color:#202b24;box-shadow:0 10px 26px rgba(0,0,0,.55), inset 0 -8px 16px rgba(110,130,120,.22);animation:cloudin .45s ease, bob 4s ease-in-out .45s infinite}
.cloud::before{content:"";position:absolute;top:-12px;left:50%;width:30px;height:30px;border-radius:50%;background:#eef3ec;transform:translateX(-75%);box-shadow:0 -2px 6px rgba(0,0,0,.25)}
.cloud::after{content:"";position:absolute;top:-22px;left:50%;width:14px;height:14px;border-radius:50%;background:#eef3ec;transform:translateX(-20%);box-shadow:0 -2px 4px rgba(0,0,0,.2)}
.riddle{color:#202b24;font-size:15px;font-weight:700;line-height:1.45;text-align:center;padding:2px 2px 10px}
.ans{width:100%;padding:11px 12px;border-radius:14px;background:rgba(255,255,255,.8);border:1px solid rgba(70,95,80,.3);color:#243028;font-size:14px;font-weight:600;margin-top:8px;text-align:center}
.ans:active{transform:scale(.98)}
.ans.good{border-color:#2e9e4f;color:#1d7a37;background:rgba(210,255,220,.9);box-shadow:0 0 10px rgba(60,200,110,.5)}
.ans.bad{border-color:#d0503a;color:#a83a28;background:rgba(255,220,214,.9);box-shadow:0 0 10px rgba(255,107,74,.5)}
.ans.off{opacity:.4;pointer-events:none}
.cloud .btn{margin-top:10px}
@keyframes cloudin{from{opacity:0;transform:translateX(46px) scale(.92)}}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
/* Дуэльная пластина боя */
.duel{display:flex;align-items:center;gap:8px;padding:12px 12px 10px;background:linear-gradient(180deg,rgba(20,28,23,.92),rgba(10,14,11,.96));border:1px solid #26342a;border-radius:20px;box-shadow:0 6px 18px rgba(0,0,0,.45)}
.dside{flex:1;display:flex;flex-direction:column;align-items:center;gap:5px;min-width:0}
.dface{position:relative;width:54px;height:54px;border-radius:50%;border:2px solid;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;overflow:hidden;background:#0d130f;text-shadow:0 0 6px currentColor;box-shadow:0 0 10px currentColor}
.dhp{width:100%;height:6px;border-radius:4px;background:#0a0f0b;border:1px solid #223028;overflow:hidden}
.dhpfill{display:block;height:100%;border-radius:4px;transition:width .35s}
.dname{font-size:10px;font-weight:700;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dnum{font-size:9px;color:#8fa39a}
.dvs{font-size:15px;font-weight:700;color:#ffd76a;text-shadow:0 0 8px rgba(255,215,106,.55)}
.denergy{display:flex;gap:3px;justify-content:center;flex-wrap:wrap}
.pip{width:6px;height:6px;border-radius:50%;background:#233028}
.pip.on{background:#b678ff;box-shadow:0 0 5px #b678ff}
.flog{min-height:34px;font-size:12px;font-style:italic;color:#cfe3d2;line-height:1.45;text-align:center;margin:8px 4px}
.acts{display:flex;flex-direction:column;gap:8px;padding:0 6px}
.btn.rune{background:linear-gradient(135deg,#b678ff,#8a4fd6);color:#fff}
.btn.shield{background:linear-gradient(135deg,#7ec8ff,#4a9fd6);color:#06202f}
.btn{width:100%;padding:12px;border-radius:12px;background:linear-gradient(135deg,#2ea6ff,#1f7fd6);color:#fff;font-size:15px;font-weight:600}
.btn.gold{background:linear-gradient(135deg,#ffd76a,#e0a53f);color:#231a05}.btn.ok{background:#17301d;color:#7ee787;border:1px solid rgba(126,231,135,.33)}
.btn.ghost{background:transparent;border:1px solid #2a3a2e;color:#9ab0a2;margin-top:8px}.btn:disabled{opacity:.55}
.toast{position:fixed;top:60px;left:50%;transform:translateX(-50%);z-index:30;background:rgba(0,0,0,.85);border:1px solid rgba(255,215,106,.4);color:#ffd76a;padding:8px 14px;border-radius:12px;font-size:13px;animation:fade .3s}
.days{display:flex;gap:6px;justify-content:center;margin:10px 0}
.day{flex:1;padding:8px 2px;border-radius:10px;background:#0d130f;border:1px solid #223028;font-size:10px;color:#8fa39a;display:flex;flex-direction:column;gap:4px;align-items:center}
.day b{font-size:12px;color:#e8f0e8}
.day.on{border-color:#ffd76a;box-shadow:0 0 8px rgba(255,215,106,.35)}
.day.on b{color:#ffd76a}
.day.done{opacity:.5}
.mface{position:relative;overflow:hidden}
@keyframes breathe{0%,100%{opacity:.3;transform:scale(.9)}50%{opacity:.7;transform:scale(1.1)}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes fade{from{opacity:0}}

.mid3d-scene{background:#8da894;overflow:hidden;position:relative;isolation:isolate;touch-action:none}
.mid3d-scene canvas{position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;user-select:none;-webkit-user-select:none}
.mid3d-ui{position:absolute;z-index:8;user-select:none;-webkit-user-select:none}
.mid3d-top{top:10px;left:10px;right:10px;display:flex;justify-content:space-between;pointer-events:none}
.mid3d-pill{padding:7px 10px;border:1px solid rgba(255,215,106,.28);border-radius:11px;background:rgba(5,12,8,.72);backdrop-filter:blur(5px);box-shadow:0 4px 12px rgba(0,0,0,.25)}
.mid3d-pill b{display:block;color:#ffd76a;font-size:12px;line-height:1.1;letter-spacing:.8px}
.mid3d-pill span{display:block;color:#c9d9cd;font-size:9px;line-height:1.2;margin-top:2px}
.mid3d-joy{left:14px;bottom:18px;width:132px;height:132px;border-radius:50%;background:rgba(7,14,9,.46);border:1px solid rgba(255,255,255,.18);box-shadow:inset 0 0 25px rgba(0,0,0,.22);touch-action:none}
.mid3d-joy:before,.mid3d-joy:after{content:"";position:absolute;left:50%;top:50%;background:rgba(255,255,255,.08);transform:translate(-50%,-50%);pointer-events:none}
.mid3d-joy:before{width:82px;height:1px}.mid3d-joy:after{height:82px;width:1px}
.mid3d-knob{position:absolute;left:41px;top:41px;width:50px;height:50px;border-radius:50%;background:rgba(219,231,221,.28);border:1px solid rgba(255,255,255,.42);box-shadow:0 5px 15px rgba(0,0,0,.35);touch-action:none}
.mid3d-action{right:16px;bottom:32px;width:64px;height:64px;border-radius:50%;background:rgba(255,215,106,.92);color:#241b06;font-size:22px;font-weight:900;box-shadow:0 5px 16px rgba(0,0,0,.35);touch-action:none}
.mid3d-hint{left:50%;bottom:9px;transform:translateX(-50%);padding:6px 10px;border-radius:9px;background:rgba(5,10,7,.68);border:1px solid rgba(126,231,135,.18);color:#d0dfd3;font-size:10px;line-height:1.2;white-space:nowrap;pointer-events:none}
.mid3d-interact{left:50%;bottom:112px;transform:translateX(-50%);width:210px;text-align:center;padding:10px;border-radius:14px;background:rgba(5,11,7,.91);border:1px solid rgba(255,215,106,.55);box-shadow:0 8px 22px rgba(0,0,0,.35)}
.mid3d-interact b{display:block;color:#ffd76a;font-size:13px;line-height:1.2}
.mid3d-interact span{display:block;color:#aebfb2;font-size:10px;line-height:1.2;margin:3px 0 7px}
.mid3d-interact button{width:100%;padding:8px;border-radius:9px;background:#ffd76a;color:#241b06;font-weight:800;font-size:12px}
`,Cs=(t,e=.9,n=0)=>new Ae({color:t,roughness:e,metalness:n}),O=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)},nv=(t,e=.1,n=1)=>{const i=t.attributes.position;for(let r=0;r<i.count;r++){const s=i.getX(r),o=i.getY(r),a=i.getZ(r),l=Math.max(.001,Math.sqrt(s*s+a*a)),u=Math.sin(s*8.7+a*6.1+o*4.3+n)*.5+.5,h=Math.cos(s*13.2-a*9.4+o*3.1+n*1.7)*.5+.5,p=Math.min(1,l*1.4);i.setX(r,s+(u-.5)*e*(.45+p)),i.setZ(r,a+(h-.5)*e*(.35+p)),i.setY(r,o+(u+h-1)*e*.18)}return i.needsUpdate=!0,t.computeVertexNormals(),t},EA=(t,e)=>{const n=Math.sin(t*.11+.7)*.65,i=Math.cos(e*.09-.4)*.48,r=Math.sin((t+e)*.055)*.35,s=Math.exp(-(t*t+(e+3)*(e+3))/900);return(n+i+r)*(1-s*.72)};function $x(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function TA(t){const e=new Ge,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=Cs(i,.92),u=Cs(s,.9),h=Cs(o,.96),p=Cs(r,.95),m=Cs(a,.78),g=Cs(2106150,.98),S=new B(new ui(.28,.24,5,8),h);S.position.y=.72,e.add(S);const A=new B(new ui(n?.37:.32,.56,6,10),u);A.position.y=1.15,e.add(A);const x=new B(new ui(n?.4:.34,.34,5,8),u);x.scale.z=.82,x.position.y=1.28,e.add(x);const d=new B(new Qe(.36,.38,.09,12),h);d.position.y=.93,e.add(d);const _=new B(new Gn(.12,.12,.055),m);_.position.set(0,.93,.38),e.add(_);const y=new B(new Qe(.13,.15,.18,10),l);y.position.y=1.63,e.add(y);const E=new B(new ut(.31,16,12),l);E.scale.set(.92,1.06,.92),E.position.y=1.91,e.add(E);const I=new B(new ut(.325,14,10),p);I.scale.set(.98,.72,.98),I.position.set(0,2.08,-.025),e.add(I);const L=new B(new ui(.18,.3,5,8),p);L.position.set(0,1.93,-.25),L.rotation.x=.15,e.add(L);const D=new B(new fn(.045,.13,5),l);D.rotation.x=Math.PI/2,D.position.set(0,1.92,.3),e.add(D);const F=new Ae({color:1513754,roughness:.55});for(const oe of[-.105,.105]){const ue=new B(new ut(.025,7,5),F);ue.position.set(oe,1.98,.285),e.add(ue)}if(n){const oe=new B(new ut(.19,10,7),p);oe.scale.set(.82,1,.72),oe.position.set(0,1.8,.24),e.add(oe)}else{const oe=new B(new ui(.055,.42,4,7),p);oe.position.set(-.27,1.78,-.08),oe.rotation.z=-.22,e.add(oe)}const T=oe=>{const ue=new Ge;ue.position.set(oe*(n?.43:.39),1.43,0),ue.rotation.z=oe*.07;const Pe=new B(new ui(.105,.42,5,7),u);Pe.position.y=-.23,ue.add(Pe);const ze=new Ge;ze.position.y=-.46,ue.add(ze);const _t=new B(new ui(.085,.34,5,7),h);_t.position.y=-.2,ze.add(_t);const ft=new B(new ut(.105,9,7),l);return ft.position.y=-.43,ze.add(ft),e.add(ue),{upper:ue,elbow:ze}},M=T(-1),z=T(1),Y=oe=>{const ue=new Ge;ue.position.set(oe*.15,.68,0);const Pe=new B(new ui(.12,.42,5,7),g);Pe.position.y=-.23,ue.add(Pe);const ze=new Ge;ze.position.y=-.48,ue.add(ze);const _t=new B(new ui(.095,.4,5,7),g);_t.position.y=-.22,ze.add(_t);const ft=new B(new ui(.13,.24,5,7),h);return ft.scale.z=1.25,ft.position.set(0,-.47,.075),ze.add(ft),e.add(ue),ue},se=Y(-1),ce=Y(1),fe=new B(new ui(.42,.1,5,8),h);fe.scale.z=.72,fe.position.y=1.48,e.add(fe);const W=new B(new Gn(.58,.92,.075),Cs(t.id==="berserk"?2821132:1582894,.98));W.position.set(0,1.05,-.28),W.rotation.x=-.035,e.add(W);const te=new Ge;if(t.id==="berserk"||t.id==="dwarf"){const oe=new B(new Qe(.035,.045,.72,7),h);oe.position.y=.36,te.add(oe);const ue=new B(new Gn(.16,.34,.055),m);ue.position.set(0,.88,0),ue.rotation.z=t.id==="dwarf"?-.22:.22,te.add(ue)}else{const oe=new B(new Qe(.028,.04,1.1,7),h);oe.position.y=.52,te.add(oe);const ue=new B(new fn(.075,.25,6),m);ue.position.y=1.18,te.add(ue)}if(te.position.set(.43,.32,.03),te.rotation.z=-.12,e.add(te),t.id==="viking"||t.id==="berserk"){const oe=new B(new Qe(.3,.3,.1,16),h);oe.rotation.x=Math.PI/2,oe.position.set(0,1.12,-.37),e.add(oe);const ue=new B(new ut(.065,8,6),m);ue.position.set(0,1.12,-.43),e.add(ue)}const H=new B(new Hn(.62,24),new Mt({color:0,transparent:!0,opacity:.32}));return H.rotation.x=-Math.PI/2,H.position.y=.02,e.add(H),e.userData.anim={armL:M,armR:z,legL:se,legR:ce,weapon:te,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0},$x(e)}function AA({h:t,on:e,eventDone:n}){const i=At.useRef(null),r=At.useRef(null),s=At.useRef(null),o=At.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=At.useState(""),[u,h]=At.useState(!1),[p,m]=At.useState(!1),[g,S]=At.useState(!1),[A,x]=At.useState(!1),d=At.useRef({x:0,z:1}),_=At.useRef(!1),y=At.useRef(null);At.useEffect(()=>{const T=i.current;if(!T)return;const M=new uS;M.background=new St(10794669),M.fog=new Cm(10793898,.00325);const z=new Ei(54,1,.1,280);z.position.set(0,8.5,17);const Y=new _A({antialias:!0,powerPreference:"high-performance"});Y.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),Y.shadowMap.enabled=!0,Y.shadowMap.type=_x,Y.outputColorSpace=Dn,Y.toneMapping=xx,Y.toneMappingExposure=1.03,T.appendChild(Y.domElement);const se=new IS(15266536,6648159,1.18);M.add(se);const ce=new E1(16768952,2.32);ce.position.set(-42,58,34),ce.castShadow=!0,ce.shadow.mapSize.set(1536,1536),ce.shadow.camera.left=-95,ce.shadow.camera.right=95,ce.shadow.camera.top=95,ce.shadow.camera.bottom=-95,ce.shadow.bias=-5e-4,M.add(ce);const fe=new E1(12702934,.72);fe.position.set(55,18,-60),M.add(fe);const W=(c,v)=>{const f=Math.sin(c*.075)*.7+Math.cos(v*.062)*.55+Math.sin((c-v)*.045)*.35,w=Math.exp(-(c*c/850+(v+2)*(v+2)/1050)),P=Math.exp(-(c*c/150+(v-12)*(v-12)/2200));return f*(1-w*.88)-P*.18},te=document.createElement("canvas");te.width=te.height=128;const H=te.getContext("2d"),oe=H.createRadialGradient(64,64,4,64,64,64);oe.addColorStop(0,"rgba(255,238,194,0.30)"),oe.addColorStop(.34,"rgba(255,231,178,0.16)"),oe.addColorStop(.72,"rgba(255,225,170,0.055)"),oe.addColorStop(1,"rgba(255,225,170,0)"),H.fillStyle=oe,H.fillRect(0,0,128,128);const ue=new Ts(te);ue.colorSpace=Dn;const Pe=new Mt({map:ue,transparent:!0,depthWrite:!1,blending:pu,opacity:.58}),ze=[];[[-22,-4,7.5,4.8],[-9,18,5.6,2.2],[9,-10,6.8,5.4],[24,5,5,1.7],[-31,20,5.2,.8],[18,27,7,3.5]].forEach(([c,v,f,w])=>{const P=new B(new Sn(f,f*.68),Pe.clone());P.rotation.x=-Math.PI/2,P.rotation.z=w,P.position.set(c,W(c,v)+.018,v),P.renderOrder=2,M.add(P),ze.push(P)});const ft=new Mt({color:16771263,transparent:!0,opacity:.032,depthWrite:!1,side:Vt,blending:pu}),Ie=[];[[-18,10,.8,14],[4,8,-.35,11],[27,15,.5,13]].forEach(([c,v,f,w])=>{const P=new B(new Sn(5.5,w),ft.clone());P.position.set(c,w*.5+.8,v),P.rotation.set(.1,f*.045,f),M.add(P),Ie.push(P)});const pe=c=>{const v=document.createElement("canvas");v.width=v.height=512;const f=v.getContext("2d"),w=R=>Math.abs(Math.sin(R*12.9898)*43758.5453)%1;if(c==="ground"){f.fillStyle="#4c6042",f.fillRect(0,0,512,512);for(let R=0;R<1800;R++){const k=w(R*1.17)*512,j=w(R*2.31)*512,K=10+w(R*3.71)*28,N=w(R*4.13);f.fillStyle=N>.72?`rgba(96,108,63,${.08+w(R)*.12})`:`rgba(30,36,25,${.05+w(R)*.12})`,f.beginPath(),f.arc(k,j,K,0,Math.PI*2),f.fill()}for(let R=0;R<650;R++){const k=w(R*7.1)*512,j=w(R*8.2)*512;f.strokeStyle=`rgba(142,154,91,${.18+w(R*2)*.15})`,f.lineWidth=1+w(R*4)*1.5,f.beginPath(),f.moveTo(k,j),f.lineTo(k+(w(R*5)-.5)*5,j-3-w(R*6)*5),f.stroke()}}else if(c==="wood"){f.fillStyle="#5a3d29",f.fillRect(0,0,512,512);for(let R=0;R<512;R+=22)f.fillStyle=`rgba(25,15,9,${.18+w(R)*.13})`,f.fillRect(0,R,512,3),f.strokeStyle=`rgba(154,111,69,${.08+w(R*2)*.08})`,f.lineWidth=2,f.beginPath(),f.moveTo(0,R+7),f.bezierCurveTo(150,R+2,340,R+13,512,R+5),f.stroke();for(let R=0;R<65;R++){const k=w(R*2.1)*512;f.fillStyle=`rgba(20,12,8,${.12+w(R*3)*.16})`,f.fillRect(k,0,2+w(R*4)*3,512)}}else if(c==="roof"){f.fillStyle="#252522",f.fillRect(0,0,512,512);for(let R=-30;R<550;R+=25){f.fillStyle=`rgba(105,94,77,${.12+w(R)*.08})`,f.fillRect(0,R,512,2),f.strokeStyle="rgba(12,12,11,.48)",f.lineWidth=3;for(let k=-40;k<560;k+=38)f.beginPath(),f.moveTo(k,R),f.lineTo(k-18,R+28),f.stroke()}for(let R=0;R<180;R++)f.fillStyle=`rgba(170,154,123,${.03+w(R)*.07})`,f.fillRect(w(R*2)*512,w(R*3)*512,2+w(R*4)*7,2)}else if(c==="bark"){f.fillStyle="#7b5a3f",f.fillRect(0,0,512,512);for(let R=0;R<76;R++){const k=w(R*2.1)*512,j=2+w(R*3.7)*7;f.fillStyle=`rgba(${24+w(R)*24},${16+w(R*4)*18},${10+w(R*5)*14},${.18+w(R*6)*.22})`,f.fillRect(k,0,j,512)}for(let R=0;R<80;R++){const k=w(R*7.1)*512,j=w(R*8.2)*512;f.strokeStyle=`rgba(126,91,60,${.07+w(R*2)*.09})`,f.lineWidth=1+w(R*3)*2,f.beginPath(),f.moveTo(k,j),f.lineTo(k+(w(R*4)-.5)*12,j+18+w(R*5)*45),f.stroke()}}else if(c==="foliage"){f.fillStyle="#68865a",f.fillRect(0,0,512,512);for(let R=0;R<1900;R++){const k=w(R*1.17)*512,j=w(R*2.31)*512,K=w(R*3.7),N=K>.72?112:K>.36?92:74,Q=K>.72?145:K>.36?121:98,ie=K>.72?76:K>.36?60:48;f.fillStyle=`rgba(${N},${Q},${ie},${.16+w(R*4)*.28})`,f.beginPath(),f.arc(k,j,1.5+w(R*5)*4.5,0,Math.PI*2),f.fill()}for(let R=0;R<260;R++){const k=w(R*9.1)*512,j=w(R*10.2)*512;f.strokeStyle=`rgba(18,31,22,${.08+w(R*3)*.12})`,f.lineWidth=1,f.beginPath(),f.moveTo(k,j),f.lineTo(k+(w(R*2)-.5)*10,j+(w(R*4)-.5)*10),f.stroke()}}else{f.fillStyle="#514333",f.fillRect(0,0,512,512);for(let R=0;R<1300;R++){const k=w(R*1.3)*512,j=w(R*2.7)*512;f.fillStyle=`rgba(${45+w(R*3)*38},${35+w(R*4)*28},${23+w(R*5)*20},${.08+w(R*6)*.18})`,f.fillRect(k,j,2+w(R*7)*7,1+w(R*8)*4)}}const P=new Ts(v);return P.wrapS=P.wrapT=qr,P.colorSpace=Dn,P.anisotropy=4,P},we=(()=>{const c=document.createElement("canvas");c.width=c.height=128;const v=c.getContext("2d"),f=v.createImageData(128,128);for(let R=0;R<128;R++)for(let k=0;k<128;k++){const j=(R*128+k)*4,K=Math.sin(k*.37)*.3+Math.sin(R*.61)*.24+Math.sin((k+R)*.17)*.2+Math.sin((k-R)*.09)*.14,N=Math.max(214,Math.min(250,Math.round(232+K*18)));f.data[j]=N,f.data[j+1]=N,f.data[j+2]=N,f.data[j+3]=255}v.putImageData(f,0,0);const w=new Ts(c);w.wrapS=w.wrapT=qr,w.repeat.set(5,5);const P=new Ts(c);return P.wrapS=P.wrapT=qr,P.repeat.set(4,4),{height:w,rough:P}})(),nt=pe("ground");nt.repeat.set(5,6);const He=pe("bark");He.wrapS=He.wrapT=qr,He.repeat.set(1.2,1.8);const ht=pe("foliage");ht.wrapS=ht.wrapT=qr,ht.repeat.set(1.35,1.35);const on=new Sn(190,190,62,62),V=on.attributes.position;for(let c=0;c<V.count;c++){const v=V.getX(c),f=-V.getY(c);V.setZ(c,W(v,f))}on.rotateX(-Math.PI/2),on.computeVertexNormals();const zt=new Ae({map:nt,roughness:.985,metalness:0,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.018}),at=new B(on,zt);at.receiveShadow=!0,M.add(at);const it=(c,v,f,w,P)=>{const R=[],k=[];for(let Q=0;Q<=18;Q++){const ie=-95+10.555555555555555*Q,Se=Math.sin(Q*1.73+w)*.5+Math.cos(Q*.61+w*1.9)*.28,ge=f*(.72+Se*.34);R.push(ie,0,0),R.push(ie+Se*2.2,ge,0)}for(let Q=0;Q<18;Q++){const ie=Q*2,Se=ie+1,ge=ie+2,Ke=ie+3;k.push(ie,Se,ge,Se,Ke,ge)}const K=new mn;K.setAttribute("position",new It(R,3)),K.setIndex(k),K.computeVertexNormals();const N=new B(K,new Af({color:P,transparent:!0,opacity:.72,side:Vt,depthWrite:!1}));return N.rotation.x=Math.PI/2,N.position.set(0,1.5,c),N.scale.set(1,v,1),M.add(N),N};it(-82,1,17,2.1,7505277),it(-72,1,11,6.7,8491914);const q=(c,v,f,w,P)=>{const R=new Ge,k=new B(new Qe(w*.1,w*.14,f*.42,5),new Af({color:5917241}));k.position.y=f*.21,R.add(k);for(let j=0;j<4;j++){const K=w*(1-j*.17),N=new B(new fn(K,f*(.48-j*.035),7,1),new Af({color:P}));N.position.y=f*(.38+j*.15),N.rotation.y=(j*1.7+c*.03)%Math.PI,R.add(N)}R.position.set(c,EA(c,v)-.2,v),R.scale.setScalar(.82+O(c,v)*.34),M.add($x(R))};for(let c=0;c<26;c++){const v=-86+c*6.8;q(v,-67-c%3*3,9+c%5*1.5,2.7+c%4*.45,5401432)}for(let c=0;c<20;c++){const v=-82+c*8.7;q(v,68+c%4*2.5,7.5+c%4*1.2,2.4,6387557)}const me=(c,v,f)=>(v&&(c.userData={id:v,label:f||v}),c.traverse(w=>{w.isMesh&&(w.castShadow=!0,w.receiveShadow=!0)}),M.add(c),v&&b.push(c),c),J=(c,v=.9,f=0)=>new Ae({color:c,roughness:v,metalness:f,roughnessMap:we.rough,bumpMap:we.height,bumpScale:f>.35?.008:.018}),G=(c,v,f,w,P=.9)=>new B(new Gn(c,v,f),J(w,P)),Xe=(c,v,f,w=10,P=.9)=>new B(new Qe(c,c,v,w),J(f,P)),$e=(c,v,f)=>{const w=Xe(v,c,f,10,.96);return w.rotation.z=Math.PI/2,w},U=(c,v,f)=>{const w=new Ge,P=c*.62,R=.61,k=new Ae({map:jn,color:f,roughness:.96,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.012,side:Vt}),j=new B(new Gn(P,.18,v),k),K=j.clone();return j.rotation.z=R,K.rotation.z=-R,j.position.x=-c*.205,K.position.x=c*.205,w.add(j,K),w},b=[],re=[],he=[],xe=[],de=[],Ne=.62,Me=(c,v,f,w,P=0,R=.12)=>de.push({kind:"rect",x:c,z:v,w:f+R*2,d:w+R*2,rot:P}),De=(c,v,f,w=.12)=>de.push({kind:"circle",x:c,z:v,r:f+w}),Ze=(c,v,f,w,P,R=.12)=>de.push({kind:"segment",x1:c,z1:v,x2:f,z2:w,r:P+R}),Re=(c,v,f)=>{if(f.kind==="circle")return Math.hypot(c-f.x,v-f.z)<f.r+Ne;if(f.kind==="rect"){const N=Math.cos(f.rot),Q=Math.sin(f.rot),ie=c-f.x,Se=v-f.z,ge=N*ie-Q*Se,Ke=Q*ie+N*Se,ct=Math.max(-f.w/2,Math.min(f.w/2,ge)),Ct=Math.max(-f.d/2,Math.min(f.d/2,Ke));return Math.hypot(ge-ct,Ke-Ct)<Ne}const w=f.x2-f.x1,P=f.z2-f.z1,R=w*w+P*P,k=R>0?Math.max(0,Math.min(1,((c-f.x1)*w+(v-f.z1)*P)/R)):0,j=f.x1+w*k,K=f.z1+P*k;return Math.hypot(c-j,v-K)<f.r+Ne},Ue=(c,v)=>_.current?c<Pn-2.72||c>Pn+2.72||v<Mn-2.05||v>Mn+2.3:de.some(f=>Re(c,v,f)),ot=(c,v,f)=>{if(_.current){const R=Math.max(Pn-2.55,Math.min(Pn+2.55,v)),k=Math.max(Mn-1.92,Math.min(Mn+2.55,f));c.x=R,c.z=k;return}const w=Math.max(-88,Math.min(88,v)),P=Math.max(-89,Math.min(89,f));if(!Ue(w,P)){c.x=w,c.z=P;return}Ue(w,c.z)||(c.x=w),Ue(c.x,P)||(c.z=P)},Je=J(3425343,1);for(let c=0;c<22;c++){const v=new Ge,f=-105+c*10,w=8+O(c,7)*9,P=new B(new fn(w,18+O(c,8)*16,7),Je);P.position.y=8,v.add(P),v.position.set(f,-1,-94+O(c,9)*11),me(v)}const ye=[];for(let c=0;c<=32;c++)ye.push({z:-94+c*6,x:-57+Math.sin(c*.42)*4.2});const dt=[],Z=[],be=5.4;for(let c=0;c<ye.length;c++){const v=ye[c],f=ye[Math.max(0,c-1)],w=ye[Math.min(ye.length-1,c+1)],P=w.x-f.x,R=w.z-f.z,k=Math.max(.001,Math.hypot(P,R)),j=-R/k,K=P/k,N=W(v.x,v.z)+.055;for(const Q of[-1,1]){const ie=be*Q;dt.push(v.x+j*ie,N+Math.sin(c*1.7+Q)*.035,v.z+K*ie)}if(c<ye.length-1){const Q=c*2;Z.push(Q,Q+1,Q+2,Q+1,Q+3,Q+2)}}const Le=new mn;Le.setAttribute("position",new It(dt,3)),Le.setIndex(Z),Le.computeVertexNormals();const je=new Ae({color:3235689,roughness:.52,metalness:0,transparent:!0,opacity:.9}),Ee=new B(Le,je);Ee.receiveShadow=!0,M.add(Ee);const ve=new Ae({color:5208192,roughness:.68,metalness:0,transparent:!0,opacity:.58,side:Vt});for(const c of[-1,1]){const v=[],f=[];for(let k=0;k<ye.length;k++){const j=ye[k],K=ye[Math.max(0,k-1)],N=ye[Math.min(ye.length-1,k+1)],Q=N.x-K.x,ie=N.z-K.z,Se=Math.max(.001,Math.hypot(Q,ie)),ge=-ie/Se,Ke=Q/Se,ct=be*c,Ct=(be-1.18)*c;if(v.push(j.x+ge*ct,W(j.x,j.z)+.072,j.z+Ke*ct),v.push(j.x+ge*Ct,W(j.x,j.z)+.078,j.z+Ke*Ct),k<ye.length-1){const Nt=k*2;f.push(Nt,Nt+1,Nt+2,Nt+1,Nt+3,Nt+2)}}const P=new mn;P.setAttribute("position",new It(v,3)),P.setIndex(f),P.computeVertexNormals();const R=new B(P,ve);R.receiveShadow=!0,M.add(R)}const qe=[],lt=new Mt({color:12638680,transparent:!0,opacity:.085,depthWrite:!1,side:Vt});for(let c=0;c<22;c++){const v=Math.min(ye.length-1,2+Math.floor(O(c,1510)*(ye.length-4))),f=ye[v],w=ye[Math.max(0,v-1)],P=ye[Math.min(ye.length-1,v+1)],R=Math.atan2(P.x-w.x,P.z-w.z),k=new B(new Sn(1.5+O(c,1511)*2.8,.08+O(c,1512)*.07),lt.clone());k.rotation.x=-Math.PI/2,k.rotation.z=R,k.position.set(f.x+(O(c,1513)-.5)*6.4,W(f.x,f.z)+.095,f.z+(O(c,1514)-.5)*5.4),M.add(k),qe.push({mesh:k,phase:O(c,1515)*Math.PI*2,speed:.55+O(c,1516)*.7})}const Bt=[];for(let c=0;c<52;c++){const v=Math.min(ye.length-1,Math.floor(c*.62)),f=ye[v],w=ye[Math.max(0,v-1)],P=ye[Math.min(ye.length-1,v+1)],R=P.x-w.x,k=P.z-w.z,j=Math.max(.001,Math.hypot(R,k)),K=c%2===0?-1:1,N=.34+O(c,15)*.72,Q=be+K*(.25+O(c,16)*1.4),ie=new B(new Zt(N,1),J(6185562,1));ie.position.set(f.x+-k/j*Q,W(f.x,f.z)+.18,f.z+R/j*Q),ie.scale.y=.5+O(c,17)*.35,me(ie),De(ie.position.x,ie.position.z,N*.75,.03)}for(let c=0;c<18;c++){const v=Math.min(ye.length-1,1+Math.floor(O(c,1520)*(ye.length-2))),f=ye[v],w=ye[Math.max(0,v-1)],P=ye[Math.min(ye.length-1,v+1)],R=P.x-w.x,k=P.z-w.z,j=Math.max(.001,Math.hypot(R,k)),K=(O(c,1521)-.5)*6.4,N=new B(new Zt(.16+O(c,1522)*.3,1),J(6845293,1));N.position.set(f.x+-k/j*K,W(f.x,f.z)+.045,f.z+R/j*K),N.scale.y=.35+O(c,1523)*.45,N.rotation.set(O(c,1524)*2,O(c,1525)*2,O(c,1526)*2),M.add(N)}const pt=(c,v)=>{const f=c.map(([j,K])=>new X(j,W(j,K)+.035,K)),w=[],P=[];for(let j=0;j<f.length;j++){const K=f[Math.max(0,j-1)],N=f[Math.min(f.length-1,j+1)],Q=N.x-K.x,ie=N.z-K.z,Se=Math.max(.001,Math.hypot(Q,ie)),ge=-ie/Se,Ke=Q/Se;if(w.push(f[j].x+ge*v/2,f[j].y,f[j].z+Ke*v/2,f[j].x-ge*v/2,f[j].y+.01,f[j].z-Ke*v/2),j<f.length-1){const ct=j*2;P.push(ct,ct+1,ct+2,ct+1,ct+3,ct+2)}}const R=new mn;R.setAttribute("position",new It(w,3)),R.setIndex(P),R.computeVertexNormals();const k=new B(R,new Ae({map:pe("road"),roughness:1}));k.receiveShadow=!0,M.add(k),[-v*.22,v*.22].forEach(j=>{const K=f.map((ie,Se)=>{const ge=f[Math.max(0,Se-1)],Ke=f[Math.min(f.length-1,Se+1)],ct=Ke.x-ge.x,Ct=Ke.z-ge.z,Nt=Math.max(.001,Math.hypot(ct,Ct));return new X(ie.x+-Ct/Nt*j,ie.y+.045,ie.z+ct/Nt*j)}),N=new Za(new xp(K),Math.max(12,f.length*4),.055,5,!1),Q=new B(N,J(3352863,1));Q.scale.y=.12,M.add(Q)})};pt([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),pt([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),pt([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),pt([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),pt([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),pt([[4,14],[-3,22],[-7,31],[-8,42]],3.8),pt([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),pt([[4,14],[10,28],[18,41],[27,57]],3.8),pt([[5,31],[15,45],[27,57],[39,70]],3.7),pt([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),pt([[-39,-8],[-47,-12],[-53,-15]],3.4);const oi=pe("wood");oi.repeat.set(2,1);const jn=pe("roof");jn.repeat.set(2,2);const ai=(c,v,f,w,P,R,k,j,K)=>{const N=new Ge;N.rotation.y=P,N.position.set(c,W(c,v),v),N.userData={id:k,label:R};const Q=new Ae({map:oi,color:j,roughness:.94,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.014}),ie=G(f+.7,.55,w+.7,5724755,1);ie.position.y=.28,N.add(ie);for(let Ut=0;Ut<7;Ut++){const Ft=.62+Ut*.47,dn=$e(f-Ut%2*.2,.29,j);dn.material=Q,dn.position.set(0,Ft,w*.5-.03),N.add(dn);const Bn=dn.clone();Bn.position.z=-w*.5+.03,N.add(Bn);const li=$e(w+.06,.29,j);li.material=Q,li.rotation.y=Math.PI/2,li.position.set(-f*.5+.03,Ft,0),N.add(li);const Ve=li.clone();Ve.position.x=f*.5-.03,N.add(Ve)}for(const Ut of[-f*.5,f*.5])for(const Ft of[-w*.5,w*.5]){const dn=Xe(.34,3.75,3482649,8,1);dn.position.set(Ut,2.05,Ft),N.add(dn)}const Se=G(1.18,2.05,.18,2365458,1);Se.position.set(0,1.37,w*.5+.31),N.add(Se);for(const Ut of[-.67,.67]){const Ft=G(.15,2.28,.24,3811613,1);Ft.position.set(Ut,1.42,w*.5+.34),N.add(Ft)}const ge=$e(1.65,.11,3679770);ge.position.set(0,2.53,w*.5+.34),N.add(ge);const Ke=Xe(.055,.12,13015634,8,.55);Ke.rotation.z=Math.PI/2,Ke.position.set(.33,1.38,w*.5+.43),N.add(Ke);const ct=new Ae({color:14986840,emissive:10116382,emissiveIntensity:1.5,roughness:.45});for(const Ut of[-f*.27,f*.27]){const Ft=G(1.28,1.02,.13,3154457,1);Ft.position.set(Ut,2.02,w*.5+.29),N.add(Ft);const dn=G(.94,.7,.055,15251295,.45);dn.material=ct,dn.position.set(Ut,2.02,w*.5+.36),N.add(dn);const Bn=G(.07,.78,.09,3154457,1);Bn.position.set(Ut,2.02,w*.5+.4),N.add(Bn);const li=G(1.05,.07,.09,3154457,1);li.position.set(Ut,2.02,w*.5+.4),N.add(li)}const Ct=U(f+1.55,w+1.35,K);Ct.position.y=4.18,N.add(Ct);for(const Ut of[-1,1]){const Ft=$e(w+1.48,.12,3154715);Ft.position.set(Ut*(f*.46),3.78,0),Ft.rotation.y=Math.PI/2,N.add(Ft)}const Nt=$e(w+1.45,.18,2760730);Nt.rotation.y=Math.PI/2,Nt.position.y=5.28,N.add(Nt);const Ot=G(f*.34,.16,1.05,6439467,1);Ot.position.set(0,.64,w*.5+.66),N.add(Ot);for(const Ut of[-f*.16,f*.16]){const Ft=$e(.85,.08,4796447);Ft.rotation.y=Math.PI/2,Ft.position.set(Ut,.83,w*.5+.95),N.add(Ft)}const Kt=Xe(.34,2,5722958,8,1);Kt.position.set(f*.25,5.05,-w*.1),N.add(Kt);const $t=G(.72,.14,.72,3157289,1);$t.position.set(f*.25,6.08,-w*.1),N.add($t),me(N,k,R),b.push(N),Me(c,v,f+.85,w+.85,P,.05)};ai(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),ai(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),ai(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),ai(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),ai(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),ai(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const qt=new Ge;qt.position.set(-10,W(-10,-5),-5),qt.userData={id:"forge",label:"Кузница"};for(let c=0;c<7;c++){const v=.62+c*.47,f=$e(9,.27,4401693);f.position.set(0,v,-2.85),qt.add(f);const w=$e(6,.27,4401693);w.rotation.y=Math.PI/2,w.position.set(-4.35,v,0),qt.add(w)}for(const c of[-4.35,4.35]){const v=Xe(.34,4,2825493,9,1);v.position.set(c,2,-2.85),qt.add(v)}const Js=U(9.8,7,2433825);Js.position.y=4.45,qt.add(Js);const Qs=$e(7.2,.18,2169366);Qs.rotation.y=Math.PI/2,Qs.position.y=5.42,qt.add(Qs);for(const c of[-3.7,3.7]){const v=$e(4.7,.13,2825494);v.rotation.z=c<0?-.6:.6,v.position.set(c*.48,3.15,.1),qt.add(v)}const la=Xe(1.15,1.65,3420462,10,1);la.position.set(-2,.83,1.15),qt.add(la);const ps=Xe(.88,.35,2565925,10,1);ps.position.set(-2,1.83,1.15),qt.add(ps);const eo=new B(new Hn(.52,16),new Ae({color:16740390,emissive:16726536,emissiveIntensity:5,roughness:.4}));eo.rotation.y=Math.PI,eo.position.set(-2,1.02,2.23),qt.add(eo);const ms=Xe(.27,.85,2697770,8,.45);ms.position.set(1.15,.43,1.05),qt.add(ms);const ca=G(1.45,.34,.58,2435114,.38);ca.position.set(1.15,1,1.05),qt.add(ca);const to=new B(new fn(.18,.72,8),J(2435114,.38,.05));to.rotation.z=-Math.PI/2,to.position.set(1.98,1,1.05),qt.add(to);for(let c=0;c<4;c++){const v=$e(1.25,.045,11184548);v.rotation.z=-.35+c*.18,v.position.set(2.05+c*.18,1.12,1.34),qt.add(v)}const ua=G(1.15,.42,.62,3876893,1);ua.position.set(2.15,.72,-.8),ua.rotation.z=-.18,qt.add(ua);const da=Xe(.07,.55,5980979,8,1);da.rotation.z=Math.PI/2,da.position.set(1.55,.84,-.8),qt.add(da),me(qt,"forge","Кузница"),b.push(qt),Me(-10,-5,9.6,6.6,0,.05);const Rl=new Wi(16742962,3.4,14,2);Rl.position.set(-12,W(-12,-5)+2.2,-4),M.add(Rl);const no=new B(new Hn(8.5,32),new Ae({color:7035463,roughness:1}));no.rotation.x=-Math.PI/2,no.position.set(1,W(1,0)+.05,0),no.receiveShadow=!0,M.add(no);for(let c=0;c<18;c++){const v=c/18*Math.PI*2,f=new B(new Zt(.38,1),J(7039843,1));f.position.set(1+Math.cos(v)*8.8,W(1+Math.cos(v)*8.8,Math.sin(v)*8.8)+.22,Math.sin(v)*8.8),M.add(f)}const Pl=(c,v)=>{const f=new Ge,w=G(2.8,.22,1,6832937,1);w.position.y=1.05,f.add(w);for(const P of[-1.05,1.05]){const R=G(.16,1,.16,3877149,1);R.position.set(P,.5,-.32),f.add(R);const k=R.clone();k.position.z=.32,f.add(k)}f.position.set(c,W(c,v),v),M.add(f)};Pl(-4,2),Pl(7,3);const gs=(c,v,f)=>{const w=new Ge;w.position.set(c,W(c,v),v);for(let N=0;N<7;N++){const Q=N/7*Math.PI*2,ie=new B(new Zt(.32*f,1),J(6117970,1));ie.position.set(Math.cos(Q)*.7*f,.25*f,Math.sin(Q)*.7*f),w.add(ie)}const P=G(.2*f,.2*f,1.5*f,4861211,1),R=P.clone();P.rotation.y=.55,R.rotation.y=-.55,P.position.y=R.position.y=.38*f,w.add(P,R);const k=new Ae({color:16744744,emissive:16731402,emissiveIntensity:4}),j=new B(new fn(.5*f,1.35*f,8),k);j.position.y=1.02*f,w.add(j),M.add(w);const K=new Wi(16747068,2.4*f,12*f,2);return K.position.set(c,W(c,v)+2*f,v),M.add(K),re.push({light:K,flame:j,phase:O(c,v)*8}),w},C=new Ge;C.userData={id:"mimir",label:"Колодец Мимира"},C.position.set(1,W(1,0),0);const ee=new B(new Hn(1.18,32),new Ae({color:1526616,emissive:802120,emissiveIntensity:1.9,roughness:.16,metalness:.04}));ee.rotation.x=-Math.PI/2,ee.position.y=.5,C.add(ee);for(let c=0;c<3;c++){const v=new B(new kt(.38+c*.28,.025,6,40),new Mt({color:c===0?9367295:7067615,transparent:!0,opacity:.42,depthWrite:!1}));v.rotation.x=Math.PI/2,v.position.y=.525,C.add(v)}for(const c of[-1.35,1.35]){const v=G(.24,3,.24,4861984,1);v.position.set(c,1.55,0),C.add(v)}const ae=G(3.15,.26,.26,3679513,1);ae.position.y=2.96,C.add(ae);const le=new B(new Qe(.035,.035,1.2,6),J(8086088,1));le.position.y=2.25,C.add(le);const ne=G(.58,.5,.58,5913383,1);ne.position.set(0,1.65,0),C.add(ne);const Te=new B(new kt(1.55,.055,8,48),new Ae({color:7792028,emissive:2653256,emissiveIntensity:3,roughness:.5}));Te.rotation.x=Math.PI/2,Te.position.y=.54,C.add(Te),me(C,"mimir","Колодец Мимира"),b.push(C),De(1,0,2,.08);const Fe=new Wi(7530656,2,10,2);Fe.position.set(1,W(1,0)+1.5,0),M.add(Fe),gs(18,-15,.72);const Oe=(c,v,f,w,P=1.25)=>{const R=new Ge,k=f-c,j=w-v,K=Math.hypot(k,j),N=Math.max(1,Math.floor(K/1.55));for(let Q=0;Q<=N;Q++){const ie=Q/N,Se=c+k*ie,ge=v+j*ie,Ke=G(.18,P,.18,4796447,1);Ke.position.set(Se,W(Se,ge)+P/2,ge),R.add(Ke)}for(const Q of[-.28,.38]){const ie=G(.14,.14,K,5978917,1);ie.rotation.y=Math.atan2(k,j),ie.position.set((c+f)/2,W((c+f)/2,(v+w)/2)+P*Q,(v+w)/2),R.add(ie)}M.add(R),Ze(c,v,f,w,.12,.02)},Be=(c,v,f,w,P,R,k)=>{const j=new Ge;j.position.set(c,W(c,v),v),j.rotation.y=P,j.userData={id:k,label:R};const K=G(f+.25,.35,w+.25,5591368,1);K.position.y=.18,j.add(K);const N=new B(new Gn(f,2.5,w),new Ae({map:oi,color:6439983,roughness:1}));N.position.y=1.45,j.add(N);const Q=new B(new Gn(f+.6,.18,w+.65),new Ae({map:jn,color:2696996,roughness:1}));Q.rotation.z=.55,Q.position.set(-.16,3,0),j.add(Q);const ie=Q.clone();ie.rotation.z=-.55,ie.position.x=.16,j.add(ie);const Se=G(1.05,1.75,.12,2759700,1);Se.position.set(0,1.05,w/2+.07),j.add(Se),me(j,k,R),b.push(j),Me(c,v,f+.55,w+.55,P,.04)},rt=(c,v,f=1)=>{const w=new Ge;w.position.set(c,W(c,v),v);const P=new B(new Qe(.65*f,.65*f,1.2*f,10),J(9073729,1));P.rotation.z=Math.PI/2,P.position.y=.62*f,w.add(P);for(let R=0;R<3;R++){const k=new B(new kt(.66*f,.025*f,5,18),J(5851693,1));k.rotation.y=Math.PI/2,k.position.y=(.28+R*.34)*f,w.add(k)}me(w)},st=(c,v,f)=>{const w=new Ge;w.position.set(c,W(c,v),v),w.rotation.y=f;const P=G(2.8,.28,1.45,6636331,1);P.position.y=1,w.add(P);for(const k of[-1.15,1.15])for(const j of[-.55,.55]){const K=G(.16,1.15,.16,4401950,1);K.position.set(k,.55,j),w.add(K)}for(const k of[-1.15,1.15]){const j=new B(new Qe(.5,.5,.18,14),J(2696738,1));j.rotation.z=Math.PI/2,j.position.set(k,.52,-.92),w.add(j)}const R=G(.16,.16,2.4,4796447,1);R.rotation.x=Math.PI/2,R.position.set(0,.72,-2),w.add(R),me(w)},tt=(c,v,f=0)=>{const w=new Ge;w.position.set(c,W(c,v),v),w.rotation.y=f;const P=G(2.2,.16,.5,7359021,1);P.position.y=.85,w.add(P);for(const R of[-.78,.78]){const k=G(.12,.8,.12,4139549,1);k.position.set(R,.4,0),w.add(k)}me(w)},yt=(c,v)=>{const f=new Ge;f.position.set(c,W(c,v),v);for(let k=0;k<10;k++){const j=k/10*Math.PI*2,K=G(.45,.38,.38,6710621,1);K.position.set(Math.cos(j)*.95,.19,Math.sin(j)*.95),K.rotation.y=j,f.add(K)}const w=G(.16,2.2,.16,4861984,1),P=w.clone();w.position.set(-.9,1.2,0),P.position.set(.9,1.2,0),f.add(w,P);const R=G(2,.16,.16,3876891,1);R.position.y=2.25,f.add(R),me(f)};Be(-19,31,8,5,.08,"Амбар","barn"),Be(17,34,7,5,-.2,"Сарай","shed"),Be(27,13,6,4,.45,"Склад рыбака","fishshed"),Oe(-25,27,-13,27),Oe(-25,27,-25,38),Oe(-25,38,-14,38),Oe(12,29,25,29),Oe(25,29,25,40),Oe(25,40,12,40),Oe(29,-1,39,-1),Oe(39,-1,39,10),Oe(39,10,30,10);for(const c of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])rt(c[0],c[1],c[2]);st(-17,24,.18),st(29,-5,-.55),tt(-20,23,.18),tt(25,31,-.2),ai(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),ai(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),ai(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),ai(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),Me(-31,8,7.8,5.8,.1,.04),Me(-27,20,7.8,5.8,-.25,.04),Me(31,18,7.8,5.8,.32,.04),Me(20,24,7.8,5.8,-.12,.04);const Lt=(c,v,f)=>{const w=new Ge;w.position.set(c,W(c,v),v),w.rotation.y=f;const P=G(3,.18,1.25,7357994,1);P.position.y=1.45,w.add(P);for(const k of[-1.25,1.25])for(const j of[-.48,.48]){const K=G(.13,1.45,.13,4270877,1);K.position.set(k,.72,j),w.add(K)}const R=new B(new fn(1.65,2.5,4,1,!1,Math.PI/4),J(4798510,1));R.scale.z=.55,R.position.y=2.15,w.add(R),me(w)};Lt(-5,-7,.12),Lt(8,-5,-.18),Lt(6,7,.5);for(const c of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])yt(c[0],c[1]);const nn=(c,v,f=1)=>{const w=new Ge,P=W(c,v);for(let R=0;R<5;R++){const k=new B(new ut((.28+O(R,c)*.18)*f,8,6),J(R%2?3494457:4284223,1));k.position.set((O(R,2)-.5)*.7*f,.28*f,(O(R,3)-.5)*.7*f),w.add(k)}w.position.set(c,P,v),me(w)};for(let c=0;c<48;c++){const v=O(c,501)*Math.PI*2,f=18+O(c,502)*39,w=Math.cos(v)*f,P=Math.sin(v)*f+4;Math.abs(w)<9&&Math.abs(P)<14||nn(w,P,.65+O(c,503)*.75)}for(let c=0;c<34;c++){const v=-84+O(c,610)*168,f=-82+O(c,611)*164;if(Math.hypot(v,f-2)<24)continue;const w=.25+O(c,612)*.55,P=new B(new Zt(w,1),J(5725013,1));P.scale.y=.55,P.position.set(v,W(v,f)+w*.28,f),P.rotation.set(O(c,613),O(c,614),O(c,615)),me(P),De(v,f,w*.8,.03)}ai(-65,5,8,5,.12,"Старый дом","oldfarm",6505263,2828582),Be(-58,42,6,4,-.12,"Старый амбар","oldbarn"),Oe(-70,32,-60,32),Oe(-70,32,-70,43),Oe(-70,43,-61,43),rt(-68,8,.9),st(-62,2,-.25),yt(-58,4);const Ht=new Ge;Ht.position.set(-63,W(-63,47),47);for(let c=0;c<6;c++){const v=G(10,.035,.12,4208682,1);v.position.set(0,.02,(c-2.5)*1.05),v.rotation.y=.06,Ht.add(v)}me(Ht);const bt=(c,v)=>{const f=document.createElement("canvas");f.width=f.height=256;const w=f.getContext("2d");w.clearRect(0,0,256,256),w.textAlign="center",w.textBaseline="middle",w.shadowColor=v,w.shadowBlur=18,w.fillStyle=v,w.font="bold 150px serif",w.fillText(c,128,132),w.shadowBlur=4,w.globalAlpha=.55,w.font="bold 118px serif",w.fillText(c,128,132);const P=new Ts(f);return P.colorSpace=Dn,P.anisotropy=4,P},Ye=(c,v,f,w,P,R=.72,k=0)=>{const j="#"+P.toString(16).padStart(6,"0"),K=new Mt({map:bt(w,j),transparent:!0,depthWrite:!1,side:Vt}),N=new B(new Sn(R,R),K);return N.rotation.x=-Math.PI/2,N.rotation.z=k,N.position.set(v,.065,f),c.add(N),N},mt=new Ge,Tt=18,Fn=55;mt.position.set(Tt,W(Tt,Fn),Fn),mt.userData={id:"runefield",label:"Поле Рун"};const tr=new Ae({color:5857629,roughness:.94,metalness:.04}),Qn=new Ae({color:3884096,roughness:1});new Mt({color:8251647,transparent:!0,opacity:.92,depthWrite:!1,side:Vt}),new Mt({color:12946687,transparent:!0,opacity:.86,depthWrite:!1,side:Vt}),new Mt({color:16766826,transparent:!0,opacity:.9,depthWrite:!1,side:Vt});const fr=new B(new Hn(12.2,48),new Ae({color:2636332,roughness:1,transparent:!0,opacity:.92}));fr.rotation.x=-Math.PI/2,fr.position.y=.018,mt.add(fr);const Yt=new B(new Qe(2.15,2.55,.48,10),Qn);Yt.position.y=.24,Yt.scale.z=.82,mt.add(Yt);const kn=new B(new Zt(1.48,1),tr);kn.scale.set(1,1.65,.72),kn.position.y=1.38,kn.rotation.y=.18,mt.add(kn);const On=new B(new Zt(.78,1),tr);On.scale.set(.72,1.15,.55),On.position.set(0,2.72,.02),On.rotation.z=.06,mt.add(On);const Cn=Ye(mt,0,0,"ᚠ",10481407,1.15,0);Cn.position.y=2.55,Cn.rotation.x=0;const zn=new Wi(7793407,1.7,9,2);zn.position.set(0,2,.8),mt.add(zn);for(const[c,v]of[[3,.075],[7.1,.065],[10.1,.045]]){const f=new B(new kt(c,v,8,96),new Mt({color:15320941,transparent:!0,opacity:c<8?.82:.58,depthWrite:!1}));f.rotation.x=Math.PI/2,f.position.y=.055,mt.add(f)}const zi=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ"];for(let c=0;c<16;c++){const v=c/16*Math.PI*2;Ye(mt,Math.cos(v)*8.55,Math.sin(v)*8.55,zi[c],c%3===0?15055195:c%3===1?7857653:12093423,.62,v+.18)}for(let c=0;c<12;c++){const v=c/12*Math.PI*2+.13;Ye(mt,Math.cos(v)*5.45,Math.sin(v)*5.45,zi[(c+5)%zi.length],c%2?7659506:12684269,.38,v)}for(let c=0;c<10;c++){const v=c/10*Math.PI*2+.16,f=9.15+(.5-O(c,1202))*1,w=2.4+O(c,1203)*2,P=.72+O(c,1204)*.48,R=new B(new Zt(.82+O(c,1205)*.22,1),tr);R.scale.set(P,w,.72+O(c,1206)*.28),R.position.set(Math.cos(v)*f,R.scale.y*.58,Math.sin(v)*f),R.rotation.set((O(c,1207)-.5)*.22,v+(O(c,1208)-.5)*.3,(O(c,1209)-.5)*.18),mt.add(R);const k=zi[c%zi.length],j=bt(k,c%3===0?"#8eeeff":c%3===1?"#c08cff":"#ffd86b"),K=new B(new Sn(.62,.92),new Mt({map:j,transparent:!0,depthWrite:!1,side:Vt}));K.position.set(R.position.x+Math.cos(v)*.68,R.position.y*.76,R.position.z+Math.sin(v)*.68),K.rotation.y=-v+Math.PI*.5,mt.add(K);const N=new Wi(c%3===1?11628031:c%3===0?6479359:15055195,.35,3.6,2);N.position.set(R.position.x,R.position.y*.72,R.position.z),mt.add(N)}for(let c=0;c<18;c++){const v=O(c,1220)*Math.PI*2,f=6.8+O(c,1221)*4.3;oo(mt,Math.cos(v)*f,.22,Math.sin(v)*f,.28+O(c,1222)*.35,c%2?5003088:5857882,1223+c)}for(let c=0;c<10;c++){const v=O(c,1230)*Math.PI*2,f=2.6+O(c,1231)*6.6,w=new B(new Qe(.06,.09,.035,7),new Ae({color:10191179,metalness:.6,roughness:.45}));w.rotation.x=Math.PI/2,w.position.set(Math.cos(v)*f,.09,Math.sin(v)*f),mt.add(w)}me(mt,"runefield","Поле Рун"),b.push(mt),De(Tt,Fn,1.8,.08);const Pi=(c,v,f,w)=>{const P=new Ge,R=f-c,k=w-v,j=Math.hypot(R,k),K=Math.floor(j/1.7);for(let Q=0;Q<=K;Q++){const ie=Q/K,Se=c+R*ie,ge=v+k*ie,Ke=new B(new fn(.24,.24+2.8+O(Q,c)*.5,6),J(3942940,1));Ke.position.set(Se,W(Se,ge)+1.45,ge),P.add(Ke)}const N=G(.3,.35,j,2957593,1);N.rotation.y=Math.atan2(R,k),N.position.set((c+f)/2,W((c+f)/2,(v+w)/2)+1.25,(v+w)/2),P.add(N),M.add(P),Ze(c,v,f,w,.34,.08)};Pi(-30,-31,-8,-31),Pi(8,-31,30,-31),Pi(-30,-31,-30,-13),Pi(30,-31,30,16);const io=new Ge;io.userData={id:"gate",label:"Ворота Мидгарда"};for(const c of[-4.2,4.2]){const v=G(.8,6,.8,3482906,1);v.position.set(c,3,-31),io.add(v)}const Nm=G(10,.8,1,2957336,1);Nm.position.set(0,6,-31),io.add(Nm);for(let c=-3;c<=3;c++){const v=G(1,4.2,.22,5978660,1);v.position.set(c*1.15,2,-30.7),io.add(v)}me(io,"gate","Ворота Мидгарда"),b.push(io),De(-4.2,-31,.55,.05),De(4.2,-31,.55,.05);const yn=new Ge;yn.userData={id:"norns",label:"Прядильня норн"},yn.position.set(-52,W(-52,38),38);const Kx=J(4927522,1),Zx=J(2826523,1),Um=G(5.7,.28,.28,5847592,1);Um.position.set(0,3.8,0),yn.add(Um);const Fm=G(5,.25,.32,3877151,1);Fm.position.set(0,.65,.15),yn.add(Fm);for(const c of[-2.45,2.45]){const v=G(.28,3.55,.3,5321763,1);v.position.set(c,2.15,0),v.rotation.z=c>0?.08:-.08,yn.add(v)}const zu=new B(new kt(2.05,.18,8,32),Kx);zu.rotation.y=Math.PI/2,zu.position.set(0,2.25,-.8),yn.add(zu);const Bu=new B(new Qe(.28,.32,.38,10),Zx);Bu.rotation.z=Math.PI/2,Bu.position.set(0,2.25,-.8),yn.add(Bu);for(let c=0;c<10;c++){const v=c/10*Math.PI*2,f=G(.08,.08,1.85,5913384,1);f.position.set(Math.cos(v)*.92,2.25+Math.sin(v)*.92,-.8),f.rotation.z=-v,yn.add(f)}const Jx=["URD","VERDANDI","SKULD"],Qx=[8640767,15198177,14908296];for(let c=0;c<3;c++){const v=(c-1)*2,f=new B(new Zt(.78,1),new Ae({color:4541257,roughness:.92,metalness:.05}));f.scale.set(.9,1.18+O(c,1290)*.2,.72),f.position.set(v,1.35,.18),f.rotation.set(0,(c-1)*.16,0),yn.add(f);const w=bt(c===0?"ᚢ":c===1?"ᚹ":"ᛋ",c===0?"#8fe6ff":c===1?"#f1f1ec":"#ef8d9a"),P=new B(new Sn(.48,.62),new Mt({map:w,transparent:!0,depthWrite:!1,side:Vt}));P.position.set(v,1.42,.86),P.rotation.y=Math.PI,yn.add(P);const R=document.createElement("canvas");R.width=320,R.height=96;const k=R.getContext("2d");k.clearRect(0,0,320,96),k.textAlign="center",k.textBaseline="middle",k.font="bold 34px serif",k.fillStyle=c===0?"#9fe9ff":c===1?"#f4f4ef":"#ef91a0",k.shadowColor=k.fillStyle,k.shadowBlur=12,k.fillText(Jx[c],160,48);const j=new Ts(R);j.colorSpace=Dn;const K=new B(new Sn(1.55,.46),new Mt({map:j,transparent:!0,depthWrite:!1,side:Vt}));K.position.set(v,.55,.86),K.rotation.y=Math.PI,yn.add(K);const N=new Wi(Qx[c],.45,4.5,2);N.position.set(v,1.55,1),yn.add(N)}const km=[15123551,15263973,14245748];for(let c=0;c<3;c++){const v=[];for(let f=0;f<=18;f++){const w=f/18,P=1.9+w*4.6,R=(c-1)*2+Math.sin(w*Math.PI*2+c*1.7)*(.45+.5*w),k=.35+Math.cos(w*Math.PI*2+c)*.45;v.push(new X(R,P,k))}yn.add(new x1(new mn().setFromPoints(v),new _p({color:km[c],transparent:!0,opacity:.9})))}for(let c=0;c<3;c++){const v=new B(new kt(1.15+c*.18,.045,6,32),new Mt({color:km[c],transparent:!0,opacity:.75,depthWrite:!1}));v.position.set((c-1)*.38,6.15,.15),v.rotation.set(.4,c*.65,.2),yn.add(v)}const Hu=new B(new kt(4.6,.065,8,72),new Mt({color:10345712,transparent:!0,opacity:.72,depthWrite:!1}));Hu.rotation.x=Math.PI/2,Hu.position.y=.05,yn.add(Hu);for(let c=0;c<18;c++){const v=O(c,1300)*Math.PI*2,f=2.5+O(c,1301)*3.1,w=new B(new Qe(.12,.12,.16,9),new Ae({color:[10184008,7174032,9261927,7828045][c%4],roughness:.8}));w.rotation.x=Math.PI/2,w.position.set(Math.cos(v)*f,.12,Math.sin(v)*f),yn.add(w)}for(let c=0;c<9;c++)Ye(yn,(O(c,1315)-.5)*7.5,(O(c,1316)-.5)*6.2,["ᚠ","ᚱ","ᛟ","ᛉ","ᚦ"][c%5],c%2?9428976:14134881,.34,O(c,1317)*Math.PI);me(yn,"norns","Прядильня норн"),b.push(yn),De(-52,38,3,.1);const ro=new Ge;ro.userData={id:"rune",label:"Древний камень Феху"},ro.position.set(50,W(50,60),60);const Om=new B(new Zt(1.45,1),J(5002063,1));Om.position.y=1.2,ro.add(Om);const Vu=new B(new kt(1.05,.07,8,30),new Ae({color:16766826,emissive:10052371,emissiveIntensity:3}));Vu.rotation.x=Math.PI/2,Vu.position.y=1.2,ro.add(Vu),me(ro,"rune","Древний камень Феху"),b.push(ro),De(50,60,1.7,.1);const Il=new Ge;Il.userData={id:"port",label:"Мост к причалу"};for(let c=-5;c<=5;c++){const v=G(3.6,.28,.82,6307882,1);v.position.set(-53,W(-53,c*1)+.5,c),Il.add(v)}me(Il,"port","Мост к причалу"),b.push(Il);const so=new Ge;so.position.set(-45,W(-45,-48),-48);for(let c=0;c<7;c++){const v=G(2.8,.24,.72,7030573,1);v.position.set(0,.3,c*.85),so.add(v)}for(const c of[-1.2,1.2])for(let v=0;v<3;v++){const f=G(.22,1.5,.22,4139292,1);f.position.set(c,-.2,v*2.5),so.add(f)}const zm=G(2.2,.55,4.8,4926493,1);zm.position.set(3,-.15,2.5),so.add(zm),me(so,"port","Речной причал"),b.push(so);const ey=(c,v)=>{const f=new B(new Qe(.5,.5,1,12),J(6636332,1));f.position.set(c,W(c,v)+.5,v),M.add(f);for(const w of[.25,.76]){const P=new B(new kt(.51,.045,6,18),J(3156004,.7,.1));P.rotation.x=Math.PI/2,P.position.set(c,W(c,v)+w,v),M.add(P)}},ty=(c,v)=>{const f=G(1,.75,1,7359022,1);f.position.set(c,W(c,v)+.38,v),M.add(f);const w=G(.08,.82,1.05,3679770,1);w.position.set(c,W(c,v)+.38,v),M.add(w),Me(c,v,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([c,v])=>ey(c,v)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([c,v])=>ty(c,v));const ny=(c,v,f)=>{const w=new Ge,P=W(c,v),R=new Ae({map:He,color:16777215,roughness:.98,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.034}),k=new B(new Qe(.18*f,.38*f,5.2*f,9),R);k.position.y=2.6*f,k.rotation.z=(O(c,v)-.5)*.08,k.scale.x=1.08+O(c,v+4)*.22,w.add(k);for(let K=0;K<9;K++){const N=(1.15+K*.47)*f,Q=K%2?1:-1,ie=(.9+K*.16)*f,Se=new B(new Qe(.035*f,.095*f,ie,7),R);Se.position.set(Q*(.28+K*.035)*f,N,(O(K,v)-.5)*.38*f),Se.rotation.z=Q*(.62-O(K,c)*.18),Se.rotation.y=O(K+21,v)*Math.PI*2,w.add(Se)}const j=[2904370,3893312,4946505];for(let K=0;K<12;K++){const N=Math.max(.48,1.42-K*.075)*f,Q=new B(nv(new ut(N,10,7),.18*f,K+Math.round(c*3+v*5)),new Ae({map:ht,color:j[K%3],roughness:.995}));Q.scale.set(1+O(K,c)*.25,.55+O(K,v)*.16,.82+O(K*2,c)*.22),Q.position.set((O(K*4,c)-.5)*.58*f,(1.55+K*.37)*f,(O(K*5,v)-.5)*.55*f),w.add(Q)}for(let K=0;K<3;K++){const N=new B(new ut(.38*f,7,5),new Ae({color:K%2?3231030:4021565,roughness:1}));N.scale.set(1.5,.28,.85),N.position.set((K-1)*.45*f,.55*f,(O(K,88)-.5)*.5*f),w.add(N)}for(let K=0;K<4;K++){const N=new B(new ut((.11+O(K,77)*.08)*f,7,5),R);N.scale.set(1.35,.72,.82),N.position.set((K%2?1:-1)*.18*f,(1+K*.78)*f,.29*f),N.rotation.y=K%2*Math.PI,w.add(N)}for(let K=0;K<4;K++){const N=K/4*Math.PI*2+.4,Q=(.55+O(K,79)*.7)*f,ie=new B(new Qe(.045*f,.12*f,Q,6),R);ie.position.set(Math.cos(N)*Q*.42,.14*f,Math.sin(N)*Q*.42),ie.rotation.z=Math.cos(N)*.85,ie.rotation.x=-Math.sin(N)*.85,ie.rotation.y=-N,w.add(ie)}w.position.set(c,P,v),me(w),f>=1.15&&De(c,v,.46*f,.04)},Ll=(c,v,f,w=!1)=>{const P=new Ge,R=W(c,v),k=new Ae({map:He,color:16777215,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.034}),j=new B(new Qe(.42*f,.72*f,6.4*f,11),k);j.position.y=3.2*f,j.rotation.z=(O(c,v)-.5)*.06,j.scale.x=1.08,P.add(j);for(let N=0;N<(w?9:7);N++){const Q=N/(w?9:7)*Math.PI*2+O(N,c)*.18,ie=(1+O(N,v)*1.6)*f,Se=new B(new Qe(.11*f,.3*f,ie,7),k);Se.position.set(Math.cos(Q)*ie*.42,.28*f,Math.sin(Q)*ie*.42),Se.rotation.z=Math.cos(Q)*.72,Se.rotation.x=-Math.sin(Q)*.72,Se.rotation.y=-Q,P.add(Se)}const K=w?10:8;for(let N=0;N<K;N++){const Q=N/K*Math.PI*2+O(N+11,c)*.22,ie=(2+O(N+22,v)*2.2)*f,Se=new B(new Qe(.07*f,.19*f,ie,8),k);Se.position.set(Math.cos(Q)*ie*.34,(3.25+O(N+33,c)*1.9)*f,Math.sin(Q)*ie*.34),Se.rotation.z=Math.cos(Q)*.76,Se.rotation.x=Math.sin(Q)*.76,Se.rotation.y=-Q,P.add(Se);for(let ge=0;ge<4;ge++){const Ke=new B(nv(new ut((.46+O(ge+N,90)*.25)*f,10,7),.14*f,ge+N+17),new Ae({map:ht,color:[3235641,4355400,5670483][(N+ge)%3],roughness:1}));Ke.scale.y=.62,Ke.position.set(Math.cos(Q)*ie*(.52+.09*ge)+(O(ge,N)-.5)*.55*f,(3.9+O(N,ge)*1.45+.25*ge)*f,Math.sin(Q)*ie*(.52+.09*ge)+(O(ge+4,N)-.5)*.55*f),P.add(Ke)}}if(w){const N=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let Q=0;Q<N.length;Q++){const ie=-.9+Q*.46,Se=new B(new Sn(.48*f,.62*f),new Mt({map:bt(N[Q],Q%2?"#6fd4e8":"#e6bd61"),transparent:!0,depthWrite:!1,side:Vt}));Se.position.set(Math.sin(ie)*.56*f,(1.5+Q*.68)*f,Math.cos(ie)*.6*f),Se.rotation.y=ie,P.add(Se)}}for(let N=0;N<6;N++){const Q=new B(new ut((.16+O(N,121)*.1)*f,7,5),k);Q.scale.set(.55,1.55,.42);const ie=O(N,122)*Math.PI*2;Q.position.set(Math.cos(ie)*.5*f,(1.05+N*.48)*f,Math.sin(ie)*.5*f),Q.rotation.y=-ie,P.add(Q)}if(w){const N=new Ae({map:He,color:16777215,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.048});for(let Q=0;Q<4;Q++){const ie=Q/4*Math.PI*2+.35,Se=(1.35+O(Q,441)*.85)*f,ge=new B(new Qe(.1*f,.26*f,Se,8),N);ge.position.set(Math.cos(ie)*Se*.34,.48*f,Math.sin(ie)*Se*.34),ge.rotation.z=Math.cos(ie)*.92,ge.rotation.x=-Math.sin(ie)*.92,ge.rotation.y=-ie,P.add(ge)}for(let Q=0;Q<6;Q++){const ie=-1.25+Q*.48,Se=(2.1+O(Q,452)*1.7)*f,ge=new B(new Qe(.045*f,.12*f,Se,7),N);ge.position.set(Math.sin(ie)*Se*.46,(5+O(Q,453)*1.6)*f,Math.cos(ie)*Se*.46),ge.rotation.z=.72*Math.cos(ie),ge.rotation.x=.55*Math.sin(ie),ge.rotation.y=-ie,P.add(ge)}for(let Q=0;Q<3;Q++){const ie=new B(new ut((.13+O(Q,461)*.07)*f,8,6),new Ae({color:1513748,roughness:1})),Se=-.8+Q*.72;ie.scale.set(.55,1.15,.32),ie.position.set(Math.sin(Se)*.61*f,(2.05+Q*.65)*f,Math.cos(Se)*.61*f),ie.rotation.y=Se,P.add(ie)}}P.position.set(c,R,v),me(P),f>=1.2&&De(c,v,.78*f,.05)},iy=(c,v,f,w)=>{const P=new Ge,R=new Ae({color:7031345,roughness:.96}),k=new Ae({color:8871999,roughness:.96}),j=new Ae({color:3155230,roughness:1}),K=new Ae({color:12168600,roughness:.9}),N=new Ae({color:1512207,roughness:.25}),Q=new B(new ut(.68,14,10),R);Q.scale.set(1.35,.78,.72),Q.position.set(0,.98*f,0),Q.scale.multiplyScalar(f),P.add(Q);const ie=new B(new ut(.42,12,9),k);ie.scale.set(1,.9,.86),ie.position.set(.49*f,1.04*f,0),P.add(ie);const Se=new B(new Qe(.2*f,.34*f,.98*f,10),R);Se.position.set(.5*f,1.46*f,0),Se.rotation.z=-.3,P.add(Se);const ge=new B(new ut(.34*f,12,9),k);ge.scale.set(1.18,.92,.78),ge.position.set(.86*f,1.82*f,0),P.add(ge);const Ke=new B(new ut(.17*f,10,7),k);Ke.scale.set(1.15,.72,.72),Ke.position.set(1.16*f,1.72*f,0),P.add(Ke);const ct=new B(new ut(.075*f,8,6),j);ct.scale.set(1,.72,.85),ct.position.set(1.3*f,1.72*f,0),P.add(ct);for(const Ot of[-1,1]){const Kt=new B(new fn(.095*f,.3*f,7),k);Kt.position.set(.77*f,2.1*f,Ot*.2*f),Kt.rotation.z=-.28,Kt.rotation.x=Ot*.18,P.add(Kt)}for(const Ot of[-1,1]){const Kt=new B(new ut(.035*f,8,6),N);Kt.position.set(1.05*f,1.91*f,Ot*.235*f),P.add(Kt);const $t=new B(new ut(.009*f,6,4),new Mt({color:16777215}));$t.position.set(1.075*f,1.925*f,Ot*.257*f),P.add($t)}const Ct=[];for(const Ot of[-1,1])for(const Kt of[-1,1]){const $t=new Ge;$t.position.set(Kt*.43*f,.76*f,Ot*.34*f);const Ut=new B(new Qe(.085*f,.11*f,.43*f,7),R);Ut.position.y=-.2*f,$t.add(Ut);const Ft=new Ge;Ft.position.y=-.4*f;const dn=new B(new Qe(.055*f,.075*f,.43*f,7),j);dn.position.y=-.2*f,Ft.add(dn);const Bn=new B(new ut(.075*f,7,5),j);Bn.scale.set(1.15,.55,1.25),Bn.position.y=-.43*f,Ft.add(Bn),$t.add(Ft),P.add($t),Ct.push($t,Ft)}const Nt=new B(new ut(.16*f,9,7),k);Nt.scale.set(.75,1.25,.72),Nt.position.set(-.9*f,1.18*f,0),P.add(Nt);for(const Ot of[-1,1]){const Kt=new B(new Qe(.04*f,.06*f,.68*f,7),K);Kt.position.set(.69*f,2.25*f,Ot*.14*f),Kt.rotation.z=Ot*.22,P.add(Kt);for(let $t=0;$t<3;$t++){const Ut=new B(new Qe(.02*f,.038*f,.34*f,6),K);Ut.position.set((.56+.11*$t)*f,(2.48+.15*$t)*f,Ot*(.14+.045*$t)*f),Ut.rotation.z=Ot*(.55-.08*$t),P.add(Ut)}}P.scale.setScalar(1.1),P.position.set(c,W(c,v),v),P.userData={phase:w,legJoints:Ct},me(P),xe.push({g:P,x:c,z:v,r:4+O(w,41)*3,speed:1.25+O(w,42)*.8,phase:w,kind:"deer"})},ry=(c,v)=>{const f=new Ge,w=J(6965552,1),P=J(3089436,1),R=new B(new ut(.22,8,6),w);R.scale.set(1.35,.9,.9),R.position.y=.72,f.add(R);const k=new B(new ut(.17,8,6),w);k.position.set(.22,.86,0),f.add(k);for(const N of[-1,1]){const Q=new B(new fn(.06,.18,6),w);Q.position.set(.17,.99,N*.09),f.add(Q)}const j=new B(new kt(.24,.075,7,14,Math.PI*1.65),w);j.rotation.y=Math.PI/2,j.position.set(-.22,.91,0),f.add(j);const K=new B(new ut(.025,6,4),P);K.position.set(.35,.9,-.12),f.add(K),f.position.set(c,W(c,v),v),me(f,"ratatosk","Белка Рататоск"),b.push(f),De(c,v,.28,.02),xe.push({g:f,x:c,z:v,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},vi=-5,_i=75,Gu=new Ge;Gu.userData={id:"ashgrove",label:"Роща Ясеня"};const Wu=new B(new Hn(10.5,40),new Ae({color:2504747,roughness:1,transparent:!0,opacity:.82}));Wu.rotation.x=-Math.PI/2,Wu.position.set(vi,W(vi,_i)+.02,_i),M.add(Wu);const sy=[[-6,1,1.7,!1],[-1,0,1.55,!1],[-8,5,1.45,!1],[2,5,1.45,!1],[-2,8,2.45,!0],[5,2,1.35,!1],[4,8,1.55,!1]];for(const[c,v,f,w]of sy)Ll(vi+c,_i+v,f,w);const Xu=new B(new kt(6.4,.07,8,64),new Ae({color:7910560,emissive:2182205,emissiveIntensity:1.8,transparent:!0,opacity:.7}));Xu.rotation.x=Math.PI/2,Xu.position.set(vi,W(vi,_i)+.05,_i),M.add(Xu);const ju=new B(new Zt(1.05,1),J(5593941,1));ju.scale.set(1.3,.7,1.05),ju.position.set(vi,W(vi,_i)+.65,_i),M.add(ju),Ye(Gu,0,0,"ᚱ",9430692,1.25,0);for(let c=0;c<26;c++){const v=O(c,1310)*Math.PI*2,f=2.5+O(c,1311)*7.2,w=vi+Math.cos(v)*f,P=_i+Math.sin(v)*f,R=new B(new Qe(.025,.045,.22+O(c,1312)*.28,6),J(12039579,1));R.position.set(w,W(w,P)+.12,P),M.add(R);const k=new B(new ut(.13+O(c,1313)*.08,8,5),new Ae({color:9297872,emissive:3913642,emissiveIntensity:2.5,roughness:.6}));k.scale.y=.48,k.position.set(w,W(w,P)+.34,P),M.add(k)}for(let c=0;c<16;c++){const v=O(c,1320)*Math.PI*2,f=2+O(c,1321)*7.5,w=vi+Math.cos(v)*f,P=_i+Math.sin(v)*f,R=new B(new Qe(.07,.07,.025,10),J(9270341,.5,.55));R.rotation.x=Math.PI/2,R.position.set(w,W(w,P)+.05,P),M.add(R)}b.push(Gu),De(vi,_i,1,.08);const gn=62,vn=78,Dl=new Ge;Dl.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const qu=new B(new Hn(11.5,44),new Ae({color:2112299,roughness:1,transparent:!0,opacity:.86}));qu.rotation.x=-Math.PI/2,qu.position.set(gn,W(gn,vn)+.025,vn),M.add(qu);const Bm=new Ae({map:He,color:16777215,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.034}),Yu=new B(new Qe(1.35,2.1,10.5,13),Bm);Yu.position.set(gn,W(gn,vn)+5.25,vn),Yu.rotation.z=-.05,M.add(Yu);for(let c=0;c<8;c++){const v=c/8*Math.PI*2+.2,f=5+O(c,1401)*4,w=new B(new Qe(.25,.58,f,9),Bm);w.position.set(gn+Math.cos(v)*f*.36,W(gn,vn)+6.8+O(c,1402)*2.2,vn+Math.sin(v)*f*.36),w.rotation.z=Math.cos(v)*.8,w.rotation.x=Math.sin(v)*.8,w.rotation.y=-v,M.add(w);for(let P=0;P<4;P++){const R=new B(new ut(1+O(P+c,1403)*.55,9,6),new Ae({map:ht,color:[2312753,2972729,3697474][(c+P)%3],roughness:1}));R.scale.y=.65,R.position.set(gn+Math.cos(v)*f*(.48+.09*P)+(O(P,c)-.5)*1.1,W(gn,vn)+8+O(c,P)*3+P*.45,vn+Math.sin(v)*f*(.48+.09*P)+(O(P+5,c)-.5)*1.1),M.add(R)}}for(let c=0;c<9;c++){const v=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ","ᚷ","ᛏ","ᚢ"][c],f=bt(v,c%2?"#63d9ef":"#f0c65d"),w=new B(new Sn(.7,.9),new Mt({map:f,transparent:!0,depthWrite:!1,side:Vt}));w.position.set(gn+Math.sin(c*.63)*1.42,W(gn,vn)+1+c*.78,vn+Math.cos(c*.63)*1.42),w.rotation.y=Math.PI*.5-c*.16,M.add(w)}const $u=new B(new Zt(1.35,1),J(5199954,1));$u.scale.set(1.45,.7,1.15),$u.position.set(gn,W(gn,vn)+.75,vn+1.6),M.add($u),gs(gn,vn+2.1,.72);const Ku=new B(new kt(6.7,.06,8,64),new Ae({color:9162705,emissive:2318178,emissiveIntensity:1.9,transparent:!0,opacity:.62}));Ku.rotation.x=Math.PI/2,Ku.position.set(gn,W(gn,vn)+.055,vn),M.add(Ku);for(let c=0;c<22;c++){const v=O(c,1410)*Math.PI*2,f=1.8+O(c,1411)*8.2,w=gn+Math.cos(v)*f,P=vn+Math.sin(v)*f;Ye(Dl,w-gn,P-vn,["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ"][c%6],c%2?6804447:14726490,.35,O(c,1412)*Math.PI)}for(let c=0;c<18;c++){const v=["ᚱ","ᚨ","ᛟ","ᚦ"][c%4],f=bt(v,c%2?"#63d9ef":"#e4bd65"),w=new B(new Sn(.34,.44),new Mt({map:f,transparent:!0,depthWrite:!1,side:Vt}));w.position.set(gn+(O(c,1420)-.5)*12,1.4+O(c,1421)*7,vn+(O(c,1422)-.5)*12),w.userData.floatPhase=O(c,1423)*6,M.add(w)}me(Dl,"hoddmimir","Лес Ходдмимира"),b.push(Dl),De(gn,vn,1.2,.08);const fa=43,ha=32;for(let c=0;c<4;c++)iy(fa+(c-1.5)*2.6,ha+(c%2?2.6:-2.6),1.12+O(c,1440)*.16,10+c);const Hm=new B(new Zt(.72,1),J(5725526,1));Hm.position.set(fa,W(fa,ha)+.5,ha),M.add(Hm);const Zu=new B(new kt(5.8,.045,7,48),new Ae({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));Zu.rotation.x=Math.PI/2,Zu.position.set(fa,W(fa,ha)+.035,ha),M.add(Zu),ry(vi+5,_i+1),((c,v)=>{const f=new Ge;f.position.set(c,W(c,v),v),f.userData={id:"forestCache",label:"Забытый тайник"};const w=new Ae({map:He,color:6968381,roughness:1}),P=new Ae({color:2760987,roughness:1}),R=new B(new Qe(2,2.65,4.9,11),w);R.position.y=2.45,R.rotation.z=-.035,f.add(R);for(let ge=0;ge<7;ge++){const Ke=1.3+O(ge,1250)*2.7,ct=new B(new fn(.32+O(ge,1251)*.3,Ke,6),w),Ct=O(ge,1252)*Math.PI*2,Nt=.55+O(ge,1253)*1.35;ct.position.set(Math.cos(Ct)*Nt,4.75+Ke*.42,Math.sin(Ct)*Nt),ct.rotation.z=(O(ge,1254)-.5)*.55,ct.rotation.x=(O(ge,1255)-.5)*.55,f.add(ct)}const k=new B(new ut(1.18,16,10),P);k.scale.set(1,1.18,.46),k.position.set(0,2,2.08),f.add(k);const j=new B(new kt(1.05,.16,8,28),new Ae({color:4930349,roughness:1}));j.rotation.x=Math.PI/2,j.position.set(0,2,2.12),j.scale.y=1.15,f.add(j);const K=new _p({color:14211280,transparent:!0,opacity:.45});for(let ge=0;ge<6;ge++){const Ke=[new X(-.95+ge*.38,1.15+ge%3*.55,2.15),new X((ge-2.5)*.2,2+ge%2*.3,2.48),new X(-.8+ge*.32,2.95+ge%3*.25,2.12)];f.add(new x1(new mn().setFromPoints(Ke),K))}const N=new B(new ut(.46,10,8),new Ae({color:5978662,roughness:1}));N.scale.set(.9,1.15,.62),N.position.set(.05,1.45,2.34),f.add(N);const Q=new B(new ut(.07,7,5),new Ae({color:14004573,metalness:.7,roughness:.35,emissive:7293719,emissiveIntensity:1.4}));Q.position.set(.05,1.72,2.77),f.add(Q);for(let ge=0;ge<5;ge++){const Ke=new B(new Zt(.11,0),new Ae({color:14793052,emissive:10775838,emissiveIntensity:2.1,roughness:.5}));Ke.position.set(-.38+ge*.19,1.02+ge%2*.08,2.5),f.add(Ke)}const ie=["ᚠ","ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let ge=0;ge<6;ge++){const Ke=-1.05+ge*.42,ct=bt(ie[ge],ge%2?"#e7bd61":"#7ce5ef"),Ct=new B(new Sn(.45,.62),new Mt({map:ct,transparent:!0,depthWrite:!1,side:Vt}));Ct.position.set(Math.sin(Ke)*1.55,1.2+ge*.42,1.93+Math.cos(Ke)*.22),Ct.rotation.y=Math.PI,f.add(Ct)}const Se=new B(new kt(4.15,.06,8,64),new Mt({color:14991203,transparent:!0,opacity:.78,depthWrite:!1}));Se.rotation.x=Math.PI/2,Se.position.y=.05,f.add(Se);for(let ge=0;ge<10;ge++){const Ke=ge/10*Math.PI*2;Ye(f,Math.cos(Ke)*3.65,Math.sin(Ke)*3.65,["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᛟ","ᛉ","ᛏ"][ge],14859617,.38,Ke+.2)}for(let ge=0;ge<12;ge++){const Ke=O(ge,1270)*Math.PI*2,ct=1.8+O(ge,1271)*3.3,Ct=new B(new Qe(.08,.08,.025,9),new Ae({color:10190147,metalness:.55,roughness:.45}));Ct.rotation.x=Math.PI/2,Ct.position.set(Math.cos(Ke)*ct,.09,Math.sin(Ke)*ct),f.add(Ct)}for(let ge=0;ge<4;ge++){const Ke=G(.08,.08,.75,10393476,1);Ke.position.set((O(ge,1280)-.5)*5,.12,(O(ge,1281)-.5)*5),Ke.rotation.y=O(ge,1282)*Math.PI,f.add(Ke)}me(f,"forestCache","Забытый тайник"),b.push(f),De(c,v,1.75,.08)})(-72,48);const oy=(c,v,f,w,P)=>{const R=c.distanceTo(v),k=new B(new Gn(f,w,R),P);return k.position.copy(c).add(v).multiplyScalar(.5),k.lookAt(v),k};function oo(c,v,f,w,P,R,k){const j=new B(new Zt(P,1),J(R,1));return j.scale.set(.72+O(k,1)*.62,.55+O(k,2)*.85,.68+O(k,3)*.55),j.rotation.set(O(k,4)*1.2,O(k,5)*Math.PI,O(k,6)*1.1),j.position.set(v,f,w),c.add(j),j}const ay=(c,v)=>{const f=new Ge;f.position.set(c,W(c,v),v),f.userData={id:"fallenAsh",label:"Поверженный ясень"};const w=new B(new kt(7.8,.07,8,64),new Ae({color:9150343,emissive:3360307,emissiveIntensity:1,transparent:!0,opacity:.55}));w.rotation.x=Math.PI/2,w.position.y=.05,f.add(w);const P=new Ae({map:He,color:16777215,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.034}),R=new B(new Qe(1.45,2.15,4.8,10),P);R.position.set(0,2.4,.2),R.rotation.z=-.04,f.add(R);const k=new B(new ut(.88,12,9),new Mt({color:1185043}));k.scale.set(1,.95,.55),k.position.set(0,1.75,1.72),f.add(k);for(let K=0;K<7;K++){const N=-.9+K*.3,Q=2.5+O(K,1500)*2.7,ie=new B(new Qe(.11,.28,Q,7),P);ie.position.set(Math.sin(N)*Q*.34,4+O(K,1501)*2.8,.15+Math.cos(N)*Q*.3),ie.rotation.z=Math.sin(N)*.65,ie.rotation.x=-Math.cos(N)*.55,ie.rotation.y=N,f.add(ie)}for(let K=0;K<9;K++){const N=O(K,1510)*Math.PI*2,Q=1.7+O(K,1511)*5.6;oo(f,Math.cos(N)*Q,.22,Math.sin(N)*Q,.3+O(K,1512)*.45,K%3?5265490:6251613,1513+K)}for(let K=0;K<8;K++)Ye(f,(O(K,1520)-.5)*5.8,(O(K,1521)-.5)*5.8,["ᚦ","ᛉ","ᚱ","ᛟ"][K%4],10473668,.42,O(K,1522)*Math.PI);const j=new B(new ut(.45,10,7),J(5978919,1));j.scale.set(.9,1.2,.7),j.position.set(0,1.55,1.25),f.add(j),me(f,"fallenAsh","Поверженный ясень"),b.push(f),De(c,v,1.8,.08)},ly=(c,v)=>{const f=new Ge;f.position.set(c,W(c,v),v),f.userData={id:"hunterCamp",label:"Забытая стоянка"};const w=new B(new Hn(8.7,40),new Ae({color:3225644,roughness:1,transparent:!0,opacity:.78}));w.rotation.x=-Math.PI/2,w.position.y=.025,w.scale.set(1.18,.92,1),f.add(w);const P=new Ge;P.position.set(-1.45,.05,-.65),P.rotation.y=-.34,f.add(P);const R=J(5978920,1);J(3680030,1);const k=J(2697768,.82,.35),j=J(4412730,1),K=G(3.7,.26,1.65,6308141,1);K.position.y=1.05,K.rotation.z=-.08,P.add(K);for(let Ve=0;Ve<9;Ve++){const gt=G(2.8+O(Ve,501)*1.1,.16,.26,Ve%3?6505775:4928293,1);gt.position.set(-.25+(O(Ve,502)-.5)*.25,1.18+(O(Ve,503)-.5)*.34,-.72+Ve%3*.68),gt.rotation.z=(O(Ve,504)-.5)*.16,gt.rotation.y=(O(Ve,505)-.5)*.16,P.add(gt)}for(const[Ve,gt,Wt]of[[-1.55,-.83,.82],[1.35,-.83,.74]]){const wn=new B(new kt(Wt,.14,7,20,Math.PI*1.56),k);wn.rotation.y=Math.PI/2,wn.rotation.z=Wt>.8?.08:-.18,wn.position.set(Ve,.9,gt),P.add(wn);const yi=new B(new Qe(.15,.18,.28,8),k);yi.rotation.z=Math.PI/2,yi.position.set(Ve,.9,gt),P.add(yi);for(let ys=0;ys<6;ys++){const O0=ys/6*Math.PI*2+.25,Ey=new X(Ve+Math.cos(O0)*Wt*.82,.9+Math.sin(O0)*Wt*.82,gt+.02),Ty=new X(Ve,.9,gt+.02);P.add(oy(Ty,Ey,.065,.065,k))}}const N=new B(new Gn(3.8,.14,.16),k);N.position.set(0,.62,-.83),N.rotation.z=.08,P.add(N);const Q=new B(new Gn(.16,.18,3.2),R);Q.position.set(1.8,.8,-.35),Q.rotation.y=.9,P.add(Q);for(let Ve=0;Ve<6;Ve++){const gt=new B(new ut(.28+O(Ve,507)*.18,7,5),j);gt.scale.set(1.4,.32,.7),gt.position.set(-1.1+Ve*.48,1.34+Ve%2*.05,-.82),P.add(gt)}const ie=new Ge;ie.position.set(2.85,.02,1.15),ie.rotation.y=.18,f.add(ie),J(4861985,1);for(let Ve=0;Ve<4;Ve++){const gt=Ve/4*Math.PI*2+.25,Wt=G(.11,3.7,.11,4861985,1);Wt.position.set(Math.cos(gt)*1.25,1.65,Math.sin(gt)*1.25),Wt.rotation.z=Math.cos(gt)*.34,Wt.rotation.x=-Math.sin(gt)*.34,ie.add(Wt)}const Se=new B(new fn(2,3.2,4,1,!0),new Ae({color:4862247,roughness:1,side:Vt,transparent:!0,opacity:.94}));Se.position.y=1.45,Se.scale.set(1,.9,.82),Se.rotation.y=.78,ie.add(Se);for(let Ve=0;Ve<9;Ve++){const gt=new B(new ut(.16+O(Ve,509)*.14,6,5),j);gt.scale.set(1.5,.35,.8),gt.position.set((O(Ve,510)-.5)*2.4,1+O(Ve,511)*1.9,(O(Ve,512)-.5)*1.8),ie.add(gt)}const ge=G(1.05,1.55,.05,3088668,1);ge.position.set(0,.72,1.65),ge.rotation.y=.16,ie.add(ge),gs(c+.1,v+.45,.78);const Ke=new Wi(16751173,1,8,2);Ke.position.set(.1,1.7,.45),f.add(Ke);const ct=new Ge;ct.position.set(-3.15,.5,1.25),ct.rotation.y=.8,ct.rotation.z=-.22,f.add(ct);const Ct=new B(new Hn(1.05,16),new Ae({color:3882041,roughness:.85,metalness:.55,side:Vt}));Ct.rotation.x=-Math.PI/2,Ct.scale.y=.8,ct.add(Ct);const Nt=new B(new kt(1.03,.11,7,18),k);Nt.rotation.x=-Math.PI/2,Nt.scale.y=.8,ct.add(Nt);const Ot=new B(new Qe(.24,.31,.22,8),k);Ot.rotation.x=Math.PI/2,Ot.position.set(.18,0,.08),ct.add(Ot);const Kt=G(.05,.035,1.15,1513494,1);Kt.position.set(-.28,.025,.05),Kt.rotation.y=.42,ct.add(Kt),J(2960425,.65,.45);const $t=(Ve,gt,Wt)=>{const wn=new Ge;wn.position.set(Ve,.18,gt),wn.rotation.y=Wt;const yi=G(.09,.09,1.55,5059362,1);yi.rotation.x=Math.PI/2,yi.position.z=.15,wn.add(yi);const ys=G(.55,.13,.28,3158061,.55);ys.position.set(0,.02,-.62),ys.rotation.y=-.25,wn.add(ys),f.add(wn)};$t(-1.9,3.15,.45),$t(4.15,-.65,-.8);const Ut=G(.11,.11,.95,5388068,1);Ut.rotation.y=.55,Ut.position.set(-2.1,.16,2.65),f.add(Ut);const Ft=new B(new ut(.48,9,7),new Ae({color:5978919,roughness:1}));Ft.scale.set(.9,1.15,.65),Ft.position.set(3.55,.48,2.65),f.add(Ft);const dn=new B(new kt(.33,.035,6,18,Math.PI*1.5),J(3023129,1));dn.rotation.x=Math.PI/2,dn.position.set(3.55,.93,2.65),f.add(dn);for(let Ve=0;Ve<15;Ve++){const gt=new B(new Qe(.09,.09,.025,10),new Ae({color:9335877,metalness:.55,roughness:.45})),Wt=O(Ve,520)*Math.PI*2,wn=2.1+O(Ve,521)*3.7;gt.position.set(Math.cos(Wt)*wn,.13,Math.sin(Wt)*wn),gt.rotation.x=Math.PI/2,f.add(gt)}for(let Ve=0;Ve<5;Ve++){const gt=G(.08,.08,.9,11182733,1);gt.position.set(3.2+O(Ve,522)*2.4,.18,-2.7+O(Ve,523)*1.7),gt.rotation.y=O(Ve,524)*Math.PI,gt.rotation.z=(O(Ve,525)-.5)*.25,f.add(gt)}const Bn=new B(new kt(4.7,.055,7,64),new Mt({color:9160135,transparent:!0,opacity:.5}));Bn.rotation.x=Math.PI/2,Bn.position.y=.075,f.add(Bn);const li=["ᚠ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ"];li.forEach((Ve,gt)=>{const Wt=gt/li.length*Math.PI*2;Ye(f,Math.cos(Wt)*4.15,Math.sin(Wt)*4.15,Ve,gt%3===0?13215066:7977149,.55,Wt+.3)});for(let Ve=0;Ve<18;Ve++)oo(f,(O(Ve,530)-.5)*8,.18,(O(Ve,531)-.5)*7,.22+O(Ve,532)*.34,Ve%4===0?6121048:5133389,530+Ve);for(let Ve=0;Ve<12;Ve++){const gt=G(.12,.12,1.7+O(Ve,535)*2,3811872,1);gt.position.set((O(Ve,536)-.5)*8,.11,(O(Ve,537)-.5)*8),gt.rotation.y=O(Ve,538)*Math.PI,gt.rotation.z=(O(Ve,539)-.5)*.2,f.add(gt)}me(f,"hunterCamp","Забытая стоянка"),b.push(f),De(c,v,1.9,.1)},cy=(c,v,f,w,P,R)=>{const k=new Ge;k.position.set(c,W(c,v),v);const j=7442040,K=J(4412730,1),N=new B(new kt(f,.07,8,64),new Ae({color:j,emissive:j,emissiveIntensity:.65,transparent:!0,opacity:.42}));N.rotation.x=Math.PI/2,N.position.y=.045,k.add(N);const Q=Math.floor(f/1.7);for(let ie=0;ie<Q;ie++){const Se=O(ie,c*11+v)*Math.PI*2,ge=f*.35+O(ie,v*17)*f*.45;oo(k,Math.cos(Se)*ge,.2,Math.sin(Se)*ge,.34+O(ie,33)*.32,5266514,800+ie)}{for(let ie=0;ie<8;ie++){const Se=new B(new ut(.34+O(ie,600)*.25,7,5),K);Se.scale.y=.35,Se.position.set((O(ie,601)-.5)*f,.16,(O(ie,602)-.5)*f),k.add(Se)}for(let ie=0;ie<6;ie++)Ye(k,(O(ie,603)-.5)*f*.9,(O(ie,604)-.5)*f*.9,["ᛉ","ᚱ","ᚦ","ᚨ","ᛟ","ᚠ"][ie],7907492,.42,O(ie,605)*Math.PI)}me(k,w,P),b.push(k)};ly(68,8),cy(-45,75,9.5,"deepGrove","Глубокая роща"),ay(-30,15);const uy=(c,v)=>{const f=document.createElement("canvas");f.width=f.height=256;const w=f.getContext("2d");w.clearRect(0,0,256,256),w.textAlign="center",w.textBaseline="middle",w.shadowColor=v,w.shadowBlur=24,w.fillStyle=v,w.font="bold 156px serif",w.fillText(c,128,132),w.shadowBlur=6,w.globalAlpha=.72,w.font="bold 126px serif",w.fillText(c,128,132);const P=new Ts(f);return P.colorSpace=Dn,P.anisotropy=4,P},pa=(c,v,f,w,P,R,k=.7,j=0)=>{const K="#"+R.toString(16).padStart(6,"0"),N=new Mt({map:uy(v,K),transparent:!0,depthWrite:!1,side:Vt}),Q=new B(new Sn(k,k),N);return Q.position.set(f,w,P),Q.rotation.set(0,j,0),c.add(Q),Q},Nl=(c,v,f,w=.075)=>{const P=new xp(v),R=new B(new Za(P,42,w,6,!1),new Mt({color:f,transparent:!0,opacity:.9}));c.add(R);const k=new B(new Za(P,42,w*2.5,6,!1),new Mt({color:f,transparent:!0,opacity:.12,depthWrite:!1}));return c.add(k),R},Ju=50,Qu=-62,Dr=new Ge;Dr.position.set(Ju,W(Ju,Qu),Qu),Dr.userData={id:"forestThread",label:"Разорванная нить"};const ed=new B(new kt(2.4,.05,7,48),new Ae({color:10252688,emissive:5912660,emissiveIntensity:1.5,transparent:!0,opacity:.72}));ed.rotation.x=Math.PI/2,ed.position.y=.055,Dr.add(ed);const td=new B(new Zt(1,1),J(5326925,1));td.scale.set(.9,1.45,.72),td.position.y=.95,Dr.add(td),pa(Dr,"ᛏ",0,1.2,.76,12614830,.9,0);const dy=[new X(-.9,1.8,.3),new X(0,3.1,.1),new X(1,2,-.2)];Nl(Dr,dy,14268630,.06),me(Dr,"forestThread","Разорванная нить"),b.push(Dr),De(Ju,Qu,1.1,.08);const Rn=new Ge,nd=58,id=-28;Rn.position.set(nd,W(nd,id),id),Rn.userData={id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд"};const fy=new Ae({color:5858398,roughness:.96,metalness:.04}),Vm=new Ae({color:3423032,roughness:.92,metalness:.08}),hy=new Ae({color:2910320,emissive:867141,emissiveIntensity:1.15,roughness:.16,metalness:.05,transparent:!0,opacity:.9}),rd=new B(new Hn(13.2,52),new Ae({color:5402692,roughness:1,transparent:!0,opacity:.94}));rd.rotation.x=-Math.PI/2,rd.position.y=.018,Rn.add(rd);for(const[c,v,f]of[[4.1,.07,.82],[7.2,.055,.72],[10.8,.045,.62]]){const w=new B(new kt(c,v,8,96),new Mt({color:15780190,transparent:!0,opacity:f,depthWrite:!1}));w.rotation.x=Math.PI/2,w.position.y=.065,Rn.add(w)}const py=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ","ᛒ","ᛟ"];for(let c=0;c<18;c++){const v=c/18*Math.PI*2;Ye(Rn,Math.cos(v)*8.9,Math.sin(v)*8.9,py[c],15779422,.58,v+.15)}const Gm=new B(new Qe(3.15,3.45,.45,12),Vm);Gm.position.y=.24,Rn.add(Gm);for(let c=0;c<16;c++){const v=c/16*Math.PI*2,f=2.65+(O(c,2001)-.5)*.22,w=new B(new Zt(.72+O(c,2002)*.22,1),fy);w.scale.set(1.15+O(c,2003)*.25,.72+O(c,2004)*.22,.88+O(c,2005)*.24),w.position.set(Math.cos(v)*f,.55+O(c,2006)*.12,Math.sin(v)*f),w.rotation.set(O(c,2007)*.25,v+O(c,2008)*.4,O(c,2009)*.2),Rn.add(w)}const sd=new B(new Hn(2.25,40),hy);sd.rotation.x=-Math.PI/2,sd.position.y=.72,Rn.add(sd);for(let c=0;c<3;c++){const v=new B(new kt(.65+c*.48,.025,6,48),new Mt({color:c===0?9367295:7063762,transparent:!0,opacity:.3,depthWrite:!1}));v.rotation.x=Math.PI/2,v.position.y=.735,Rn.add(v)}const Wm=[{x:-2.75,z:2,body:7035465,cloak:8088149,hair:3681575,light:15329759,thread:14674162,phase:0},{x:0,z:3.75,body:7692358,cloak:6124124,hair:4863271,light:16766571,thread:16765022,phase:2.1},{x:2.75,z:2,body:6442314,cloak:6116205,hair:3155746,light:14179176,thread:13192536,phase:4.2}],Xm=[];for(let c=0;c<3;c++){const v=Wm[c],f=new Ge;f.position.set(v.x,0,v.z),f.rotation.y=c===0?.22:c===2?-.22:Math.PI;const w=new B(new fn(.72,.95,9),new Ae({color:v.body,roughness:.98}));w.position.y=.72,f.add(w);const P=new B(new fn(.48,.72,8),new Ae({color:v.cloak,roughness:.98}));P.position.set(0,.86,.43),P.rotation.x=.05,f.add(P);const R=new B(new Qe(.42,.58,.12,9),new Ae({color:v.cloak,roughness:1}));R.position.set(0,1.23,0),R.rotation.z=.08,f.add(R);const k=new B(new ut(.32,12,9),new Ae({color:13079144,roughness:.9}));k.position.y=1.62,f.add(k);const j=new B(new ut(.38,10,8),new Ae({color:v.hair,roughness:1}));j.scale.set(1,.95,.9),j.position.set(0,1.68,-.08),f.add(j);for(const ie of[-1,1]){const Se=new B(new Qe(.075,.105,.62,7),new Ae({color:v.cloak,roughness:1}));Se.position.set(ie*.47,1.03,.18),Se.rotation.z=ie*.42,Se.rotation.x=-.18,f.add(Se)}const K=new B(new Qe(.38,.44,.18,9),Vm);K.position.y=.25,f.add(K);const N=new B(new Qe(.035,.055,.9,8),new Ae({color:6964008,roughness:.9}));N.position.set(.58,1.08,.38),N.rotation.z=.62,f.add(N);const Q=new B(new kt(.12,.025,6,14),new Ae({color:9265980,roughness:.85}));Q.rotation.x=Math.PI/2,Q.position.set(.75,.82,.48),f.add(Q),f.position.y=.02,Rn.add(f),Xm.push(new X(v.x+.72,1.25,v.z+.48))}const jm=[14674162,16765022,13192536];for(let c=0;c<3;c++){const v=Xm[c],f=[];for(let w=0;w<=30;w++){const P=w/30,R=v.y+P*7.3,k=P*Math.PI*3+Wm[c].phase,j=.35+.72*P;f.push(new X(v.x*(1-P)+Math.cos(k)*j*P,v.y*(1-P)+R*P,v.z*(1-P)+Math.sin(k)*j*P))}Nl(Rn,f,jm[c],.085)}for(let c=0;c<3;c++){const v=[];for(let f=0;f<=32;f++){const w=f/32,P=w*Math.PI*2,R=1.65+.42*Math.sin(P*2+c*.9);v.push(new X(Math.cos(P+c*2.094)*R,8.35+.45*Math.sin(P*3+c),Math.sin(P+c*2.094)*R))}Nl(Rn,v,jm[c],.065)}const qm=new Wi(16767096,1.25,11,2);qm.position.set(0,4.2,1),Rn.add(qm);for(let c=0;c<20;c++){const v=O(c,2030)*Math.PI*2,f=3.8+O(c,2031)*8,w=Math.cos(v)*f,P=Math.sin(v)*f,R=new B(new Qe(.018,.028,.22,5),new Ae({color:5666109,roughness:1}));R.position.set(w,.11,P),Rn.add(R);const k=new B(new ut(.07,7,5),new Mt({color:c%3===0?16770208:c%3===1?15972816:14478591}));k.position.set(w,.25,P),Rn.add(k)}for(let c=0;c<10;c++){const v=O(c,2040)*Math.PI*2,f=4+O(c,2041)*8,w=new B(new Zt(.12+O(c,2042)*.08,0),new Ae({color:10189631,metalness:.65,roughness:.4}));w.position.set(Math.cos(v)*f,.1,Math.sin(v)*f),Rn.add(w)}me(Rn,"threeThreads","Камень Трёх Нитей — Колодец Урд"),b.push(Rn),De(nd,id,3.4,.1);const xi=new Ge,od=5,ad=-70;xi.position.set(od,W(od,ad),ad),xi.userData={id:"powerCircle",label:"Круг Силы"};const ld=new B(new Hn(10.8,48),new Ae({color:1911590,roughness:1,transparent:!0,opacity:.94}));ld.rotation.x=-Math.PI/2,ld.position.y=.02,xi.add(ld);for(const[c,v,f,w]of[[3.2,.075,13925631,.8],[6.2,.06,6987007,.68],[9.2,.045,12025343,.58]]){const P=new B(new kt(c,v,8,96),new Mt({color:f,transparent:!0,opacity:w,depthWrite:!1}));P.rotation.x=Math.PI/2,P.position.y=.07,xi.add(P)}for(let c=0;c<20;c++){const v=c/20*Math.PI*2,f=5.1+c%2*2.2;Ye(xi,Math.cos(v)*f,Math.sin(v)*f,zi[(c+2)%zi.length],c%2?9140479:6545396,.38,v+.2)}const Ul=new B(new Zt(1.25,1),new Ae({color:2435371,roughness:.9,metalness:.16}));Ul.scale.set(.9,2.8,.7),Ul.position.y=2.45,Ul.rotation.set(.05,.2,-.08),xi.add(Ul);const my=pa(xi,"ᛟ",0,2.55,.78,16766302,1.35,0);my.rotation.x=0;const Ym=new Wi(10251519,1.7,10,2);Ym.position.set(0,2.5,.8),xi.add(Ym);for(let c=0;c<12;c++){const v=c/12*Math.PI*2,f=4.1+O(c,1801)*4.5,w=oo(xi,Math.cos(v)*f,.3,Math.sin(v)*f,.42+O(c,1802)*.42,c%3===0?5858141:4870476,1803+c);if(c%4===0){const P=new B(new fn(.18,.9,5),new Mt({color:c%2?9336063:6938111,transparent:!0,opacity:.75}));P.position.set(w.position.x,.62,w.position.z),xi.add(P)}}for(let c=0;c<9;c++){const v=O(c,1820)*Math.PI*2,f=2.2+O(c,1821)*6.7,w=new B(new ut(.045+O(c,1822)*.04,6,5),new Mt({color:c%2?7531007:11697663,transparent:!0,opacity:.7}));w.position.set(Math.cos(v)*f,.4+O(c,1823)*2.6,Math.sin(v)*f),xi.add(w)}me(xi,"powerCircle","Круг Силы"),b.push(xi),De(od,ad,2.2,.1);const Ii=new Ge,cd=-72,ud=-48;Ii.position.set(cd,W(cd,ud),ud),Ii.userData={id:"whisperStone",label:"Камень Шёпота"};const dd=new B(new Hn(8.6,40),new Ae({color:1516830,roughness:1,transparent:!0,opacity:.95}));dd.rotation.x=-Math.PI/2,dd.position.y=.02,Ii.add(dd);const fd=new B(new kt(5.8,.09,8,96),new Mt({color:11103487,transparent:!0,opacity:.78,depthWrite:!1}));fd.rotation.x=Math.PI/2,fd.position.y=.075,Ii.add(fd);const Fl=new B(new Zt(2.1,1),new Ae({color:1382171,roughness:.8,metalness:.35}));Fl.scale.set(1.15,1.35,.82),Fl.position.y=1.75,Fl.rotation.set(.05,.25,-.08),Ii.add(Fl);for(const c of[-1,1]){const v=[];for(let f=0;f<=14;f++){const w=f/14,P=w*Math.PI*1.15;v.push(new X(c*(1.35+.72*Math.sin(P)),2.45+.85*w+.38*Math.sin(P),-.15+.78*Math.cos(P)-.78))}Nl(Ii,v,3422020,.18)}const kl=["ᚨ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ","ᚺ","ᚾ"];kl.forEach((c,v)=>{const f=v/kl.length*Math.PI*2;pa(Ii,c,Math.cos(f)*3.5,1,Math.sin(f)*3.5,v%2?7265535:12088575,.46,f+Math.PI/2)});for(let c=0;c<9;c++){const v=O(c,1901)*Math.PI*2,f=.7+O(c,1902)*1.7,w=pa(Ii,kl[c%kl.length],Math.cos(v)*f,3.4+c*.48,Math.sin(v)*f,c%2?7988991:12614911,.42+O(c,1903)*.22,v);w.rotation.x=(O(c,1904)-.5)*.35}const $m=new Wi(10245631,1.5,9,2);$m.position.set(0,2.2,.5),Ii.add($m);for(let c=0;c<11;c++){const v=O(c,1920)*Math.PI*2,f=4.8+O(c,1921)*2.6;oo(Ii,Math.cos(v)*f,.2,Math.sin(v)*f,.28+O(c,1922)*.38,4541258,1923+c)}me(Ii,"whisperStone","Камень Шёпота"),b.push(Ii),De(cd,ud,2.5,.1);const Nr=(c,v,f,w,P="rune")=>{const R=new Ge;R.position.set(c,W(c,v),v);const k=P==="shadow"?2107425:P==="power"?2106411:P==="fate"?2895917:3162931,j=new B(new Hn(P==="grove"?9.8:7.8,40),new Ae({color:k,roughness:1,transparent:!0,opacity:.68}));j.rotation.x=-Math.PI/2,j.position.y=.025,R.add(j);const K=new B(new kt(P==="grove"?7.2:5.8,.045,7,64),new Mt({color:w,transparent:!0,opacity:P==="shadow"?.32:.46,depthWrite:!1}));K.rotation.x=Math.PI/2,K.position.y=.055,R.add(K);for(const N of[-1,1]){const Q=new B(new Zt(.48+O(N+Math.round(c),Math.round(v))*.22,1),new Ae({color:P==="shadow"?3159608:5857626,roughness:1}));Q.scale.set(.8,1.65,.72),Q.position.set(N*2.35,.62,P==="grove"?-.15:.35),Q.rotation.set(.05,N*.28,-N*.1),R.add(Q);const ie=pa(R,f,N*2.35,1.25,.73,w,.34,N*.08);ie.rotation.x=0}for(let N=0;N<8;N++){const Q=-Math.PI/2+(N-3.5)*.16,ie=2.8+Math.abs(N-3.5)*.42,Se=new B(new Zt(.11+O(N,2200+Math.round(c))*.07,0),new Ae({color:w,emissive:w,emissiveIntensity:.65,roughness:.72}));Se.position.set(Math.cos(Q)*ie,.08,Math.sin(Q)*ie),R.add(Se)}me(R,`threshold_${P}_${Math.round(c)}_${Math.round(v)}`,`Порог: ${f}`),M.add(R)};Nr(vi,_i,"ᚱ",9430692,"grove"),Nr(gn,vn,"ᛉ",14726490,"grove"),Nr(-72,48,"ᚠ",14859617,"shadow"),Nr(58,-28,"ᛟ",15779422,"fate"),Nr(5,-70,"ᛟ",9271551,"power"),Nr(-72,-48,"ᚨ",10187519,"shadow"),Nr(50,-62,"ᛏ",9422551,"fate"),Nr(-52,38,"ᛜ",14134881,"fate");const Pn=75,Mn=30,rn=new Ge;rn.position.set(Pn,W(Pn,Mn),Mn);const gy=J(5986899,1),Km=G(7.8,.42,5.8,5591885,1);Km.position.y=.22,rn.add(Km);const Zm=G(7.4,2.8,.3,6439727,1);Zm.position.set(0,1.4,-2.7),rn.add(Zm);const Jm=G(.3,2.8,5.4,6439727,1);Jm.position.set(-3.7,1.4,0),rn.add(Jm);const Qm=G(.3,2.8,5.4,6439727,1);Qm.position.set(3.7,1.4,0),rn.add(Qm);const e0=G(2.55,2.8,.3,6439727,1);e0.position.set(-2.43,1.4,2.7),rn.add(e0);const t0=G(2.55,2.8,.3,6439727,1);t0.position.set(2.43,1.4,2.7),rn.add(t0);const n0=G(2.3,.72,.3,6439727,1);n0.position.set(0,2.44,2.7),rn.add(n0);const i0=G(.16,2.18,.34,2826523,1);i0.position.set(-.66,1.28,2.72),rn.add(i0);const r0=G(.16,2.18,.34,2826523,1);r0.position.set(.66,1.28,2.72),rn.add(r0);const s0=G(1.48,.16,.34,2826523,1);s0.position.set(0,2.34,2.72),rn.add(s0);const ao=new Ge;ao.position.set(-.57,0,2.72),rn.add(ao);const o0=G(1.14,2.05,.12,3154457,1);o0.position.set(.57,1.28,0),ao.add(o0);const a0=new B(new ut(.08,8,6),J(11831883,1));a0.position.set(.86,1.25,.1),ao.add(a0);const vy=new Ae({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const c of[-2.35,2.35]){const v=G(1.25,1,.12,2826523,1);v.position.set(c,1.72,2.78),rn.add(v);const f=new B(new Gn(.98,.72,.06),vy);f.position.set(c,1.72,2.86),rn.add(f);const w=G(.07,.78,.1,2826523,1);w.position.set(c,1.72,2.91),rn.add(w);const P=G(1.08,.07,.1,2826523,1);P.position.set(c,1.72,2.91),rn.add(P)}const l0=new Ae({map:jn,color:2697767,roughness:.98,side:Vt}),ma=new B(new Sn(4.25,6.25),l0),ga=new B(new Sn(4.25,6.25),l0);ma.rotation.x=Math.PI/2,ga.rotation.x=Math.PI/2,ma.rotation.z=.62,ga.rotation.z=-.62,ma.position.set(-1.02,3.95,0),ga.position.set(1.02,3.95,0),rn.add(ma,ga);const hd=G(.22,.22,6.45,2695965,1);hd.position.y=4.75,rn.add(hd);const pd=new B(new Gn(.48,1.35,.48),gy);pd.position.set(1.55,4.8,-.65),rn.add(pd);const md=G(.62,.1,.62,3420461,1);md.position.set(1.55,5.48,-.65),rn.add(md);const c0=G(2.35,.18,1,6636845,1);c0.position.set(0,.62,3.15),rn.add(c0);const u0=G(1.55,.16,.48,5849131,1);u0.position.set(0,.3,3.58),rn.add(u0),me(rn,"heroHome","Домик героя"),b.push(rn),Me(Pn,Mn-2.72,7.4,.3,0,.05),Me(Pn-3.72,Mn,.3,5.45,0,.05),Me(Pn+3.72,Mn,.3,5.45,0,.05),Me(Pn-2.43,Mn+2.72,2.55,.3,0,.05),Me(Pn+2.43,Mn+2.72,2.55,.3,0,.05);const an=new Ge;an.position.set(Pn,W(Pn,Mn),Mn),an.visible=!1;const d0=G(7,.16,5,4928548,1);d0.position.y=.5,an.add(d0);const f0=G(7,2.65,.18,4139808,1);f0.position.set(0,1.8,-2.45),an.add(f0);const h0=G(.18,2.65,4.9,4139808,1);h0.position.set(-3.45,1.8,0),an.add(h0);const p0=G(.18,2.65,4.9,4139808,1);p0.position.set(3.45,1.8,0),an.add(p0);const m0=G(2.35,2.65,.18,4139808,1);m0.position.set(-2.42,1.8,2.45),an.add(m0);const g0=G(2.35,2.65,.18,4139808,1);g0.position.set(2.42,1.8,2.45),an.add(g0);const v0=G(2.5,.04,2.1,7162673,1);v0.position.set(-.15,.6,.25),an.add(v0);const _0=G(1.65,.65,2.15,4008478,1);_0.position.set(-2.15,.88,-1.25),an.add(_0);const x0=G(1.48,.12,1.35,7033152,1);x0.position.set(-2.15,1.27,-.92),an.add(x0);const y0=G(1.28,.18,.46,11903114,1);y0.position.set(-2.15,1.38,-1.95),an.add(y0);const M0=G(1.65,.12,1.05,5255969,1);M0.position.set(.85,1.15,-.15),an.add(M0);for(const[c,v]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const f=G(.1,.7,.1,3679515,1);f.position.set(c,.72,v),an.add(f)}const w0=G(1.25,.8,.72,5978660,1);w0.position.set(2.1,.95,-1.7),an.add(w0);const S0=G(1.9,.14,.45,5978660,1);S0.position.set(1.35,2,-2.25),an.add(S0);for(const c of[.75,1.35,1.95]){const v=new B(new Qe(.08,.1,.35,8),J(7304016,1));v.position.set(c,2.24,-2.22),an.add(v)}const E0=G(1.35,.55,.7,5920078,1);E0.position.set(2.15,.78,.95),an.add(E0);const T0=new B(new fn(.28,.72,8),new Ae({color:16744744,emissive:16731402,emissiveIntensity:4}));T0.position.set(2.15,1.42,.95),an.add(T0);const A0=new Wi(16747068,2.2,8,2);A0.position.set(2.15,1.7,.95),an.add(A0),me(an,"heroHomeInterior","Дом героя — внутри"),b.push(an);const vs=new Ge;vs.position.set(Pn,W(Pn,Mn),Mn);const gd=new B(new kt(6.2,.055,7,48),new Ae({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));gd.rotation.x=Math.PI/2,gd.position.y=.035,vs.add(gd);for(const[c,v]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const f=G(.18,1,.18,4797735,1);f.position.set(c,.5,v),vs.add(f)}for(const c of[-2.4,2.9]){const v=G(10.2,.12,.12,6308139,1);v.position.set(0,.59,c),vs.add(v)}const _y=J(6906972,1);for(let c=0;c<7;c++){const v=new B(new Qe(.32,.4,.12,7),_y);v.position.set(0,.08,4.1+c*.72),v.rotation.y=c*.4,vs.add(v)}gs(Pn-2.4,Mn+4.8,.48).scale.setScalar(.72),me(vs,"heroHomeYard","Двор домика героя"),b.push(vs),gs(68,8,.75).scale.setScalar(.72);const b0=new B(new Qe(.65,.8,.7,7),J(5327426,1));b0.position.set(68,W(68,8)+.35,6.5),M.add(b0);for(const[c,v]of[[66,10],[70,10],[66,6],[70,6]]){const f=G(.16,1.15,.16,4797735,1);f.position.set(c,W(c,v)+.57,v),M.add(f)}const Ol=new Ge;Ol.position.set(-30,W(-30,15),15);const vd=new B(new Qe(.5,.62,7,8),new Ae({map:He,color:4995371,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.034}));vd.rotation.z=Math.PI/2,vd.position.y=.5,Ol.add(vd);const _d=new B(new Qe(.53,.53,.12,12),J(7693389,1));_d.rotation.z=Math.PI/2,_d.position.set(3.5,.5,0),Ol.add(_d),M.add(Ol);for(let c=0;c<7;c++){const v=new B(new Zt(.14,0),J(6913394,1)),f=c/7*Math.PI*2;v.position.set(-45+Math.cos(f)*4,.12+W(-45+Math.cos(f)*4,75+Math.sin(f)*4),75+Math.sin(f)*4),M.add(v)}for(let c=0;c<95;c++){const v=O(c,77)*Math.PI*2,f=68+O(c,91)*27,w=Math.cos(v)*f,P=Math.sin(v)*f+2,k=[[vi,_i,11],[18,55,13],[-65,5,11],[-60,-25,10],[43,32,12],[62,78,10],[-72,48,7],[50,-62,7],[58,-28,15],[68,8,11],[75,30,13],[-45,75,12],[-30,15,10],[5,-70,13],[-72,-48,11]].some(([j,K,N])=>Math.hypot(w-j,P-K)<N);Math.abs(w+57)>9&&!k&&ny(w,P,.78+O(c,13)*.82)}Ll(-10,18,1.55,!1),Ll(13,24,1.7,!1),Ll(-31,-12,2.15,!0);for(let c=0;c<110;c++){const v=O(c,701)*Math.PI*2,f=15+O(c,702)*50,w=Math.cos(v)*f,P=Math.sin(v)*f+3;if(Math.abs(w)<10&&Math.abs(P)<16)continue;const R=new Ge;R.position.set(w,W(w,P),P);for(let k=0;k<3;k++){const j=new B(new fn(.025,.38+O(k,c)*.28,4),new Ae({color:k===1?5466175:4282935,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.012}));j.position.set((k-1)*.09,.18,(O(k*3,c)-.5)*.12),j.rotation.z=(k-1)*.22,R.add(j)}M.add(R)}for(let c=0;c<80;c++){const v=-88+O(c,101)*176,f=-88+O(c,111)*176;if(Math.hypot(v,f+2)>30){const w=new B(new fn(.08,.55+O(c,121)*.7,5),new Ae({color:4941888,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.012}));w.position.set(v,W(v,f)+.3,f),M.add(w)}}for(let c=0;c<72;c++){const v=-84+O(c,150)*168,f=-82+O(c,151)*164,w=Math.hypot(v-1,f+1)<24,P=[[18,55,15],[-65,5,13],[43,32,14],[62,78,12],[-45,75,13],[5,-70,14],[-72,-48,13],[-30,15,10]].some(([j,K,N])=>Math.hypot(v-j,f-K)<N);if(w||P)continue;const R=.1+O(c,152)*.24,k=new B(new Zt(R,1),new Ae({color:c%3===0?5593940:6710877,roughness:.98,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.018}));k.scale.set(1+O(c,153)*1.3,.55+O(c,154)*.7,.72+O(c,155)*1.15),k.rotation.set(O(c,156)*1.7,O(c,157)*Math.PI,O(c,158)*1.7),k.position.set(v,W(v,f)+R*.22,f),k.castShadow=!0,k.receiveShadow=!0,M.add(k)}for(let c=0;c<46;c++){const v=-82+O(c,160)*164,f=-80+O(c,161)*160;if(Math.hypot(v-1,f+1)<28)continue;const w=.55+O(c,162)*1.15,P=new B(new Qe(.025,.055,w,6),J(4600356,.98));P.position.set(v,W(v,f)+.045,f),P.rotation.set(.05+O(c,163)*.35,O(c,164)*Math.PI,Math.PI*.5+(O(c,165)-.5)*.5),M.add(P)}const xy=new Ae({color:7308881,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.008}),yy=new Ae({color:8491867,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.006}),xd=new Ae({map:He,color:5914669,roughness:.99,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.026});for(let c=0;c<54;c++){const v=O(c,920)*Math.PI*2,f=18+O(c,921)*63,w=Math.cos(v)*f,P=Math.sin(v)*f+3;if(Math.abs(w)<12&&Math.abs(P)<20)continue;const R=new Ge;R.position.set(w,W(w,P)+.018,P);const k=.35+O(c,922)*.75,j=.28+O(c,923)*.65;for(let K=0;K<2;K++){const N=new B(new Hn(1,9),K%2?yy:xy);N.rotation.x=-Math.PI/2,N.scale.set(k*(1-K*.18),j*(1-K*.12),1),N.position.set((O(c+K,924)-.5)*.32,.006+K*.003,(O(c+K,925)-.5)*.28),R.add(N)}M.add(R)}const C0=new Ae({color:5533764,roughness:1}),R0=new Ae({color:7309137,roughness:1});for(let c=0;c<72;c++){const v=O(c,930)*Math.PI*2,f=20+O(c,931)*61,w=Math.cos(v)*f,P=Math.sin(v)*f+3;if(Math.abs(w)<13&&Math.abs(P)<21)continue;const R=new Ge;R.position.set(w,W(w,P),P);const k=.55+O(c,932)*.8;for(let j=0;j<3;j++){const K=new B(new Qe(.018*k,.035*k,.55*k,5),j===1?R0:C0);K.position.set((j-1)*.12*k,.27*k,(O(c,j+933)-.5)*.1*k),K.rotation.z=(j-1)*.3,K.rotation.x=(O(c,j+936)-.5)*.22,R.add(K);for(let N=0;N<3;N++){const Q=new B(new fn(.045*k,.18*k,5),j===1?R0:C0);Q.rotation.z=(j-1)*.3+(N%2?.18:-.18),Q.rotation.x=Math.PI*.5,Q.position.set((j-1)*.12*k+(N-1)*.075*k,.3*k+N*.1*k,(O(c,N+940)-.5)*.12*k),R.add(Q)}}M.add(R)}const yd=(c,v,f,w)=>{const P=W(c,v),R=new Ge;R.position.set(c,P,v);const k=5+Math.floor(O(w,950)*3);for(let j=0;j<k;j++){const K=j/k*Math.PI*2+O(j,w+951)*.32,N=(1.8+O(j,w+952)*2.7)*f,Q=(.11+O(j,w+953)*.12)*f,ie=new B(new Qe(Q*.42,Q,N,7),xd);ie.position.set(Math.cos(K)*N*.46,.13*f,Math.sin(K)*N*.46),ie.rotation.z=Math.PI/2,ie.rotation.y=-K,ie.rotation.x=(O(j,w+954)-.5)*.16,R.add(ie)}M.add(R)};yd(-10,18,1.55,11),yd(13,24,1.7,23),yd(-31,-12,2.15,37);for(let c=0;c<22;c++){const v=O(c,960)*Math.PI*2,f=27+O(c,961)*55,w=Math.cos(v)*f,P=Math.sin(v)*f+3;if(Math.abs(w)<15&&Math.abs(P)<22)continue;const R=.55+O(c,962)*.8,k=new Ge;k.position.set(w,W(w,P),P);const j=new B(new Qe(.18*R,.3*R,.45*R,7),xd);j.position.y=.22*R,k.add(j);const K=new B(new Qe(.19*R,.19*R,.035*R,7),J(8416080,1));K.position.y=.45*R,k.add(K),M.add(k)}for(let c=0;c<18;c++){const v=O(c,970)*Math.PI*2,f=24+O(c,971)*58,w=Math.cos(v)*f,P=Math.sin(v)*f+3;if(Math.abs(w)<14&&Math.abs(P)<21)continue;const R=1+O(c,972)*2,k=new B(new Qe(.045,.1,R,6),xd);k.position.set(w,W(w,P)+.07,P),k.rotation.set(.08+O(c,973)*.22,O(c,974)*Math.PI,Math.PI/2+(O(c,975)-.5)*.5),M.add(k)}const _s=new Ge;_s.position.set(29,W(29,25),25),_s.userData={id:"tower",label:"Сторожевая башня"};for(const c of[-2,2])for(const v of[-2,2]){const f=G(.35,7,.35,3942685,1);f.position.set(c,3.5,v),_s.add(f)}const P0=G(5,.35,5,6833965,1);P0.position.y=5.8,_s.add(P0);const I0=new B(new fn(3.8,2.7,4),J(2696482,1));I0.position.y=8,_s.add(I0),me(_s,"tower","Сторожевая башня"),b.push(_s),Me(29,25,4.8,4.8,0,.08);const va=(c,v,f,w,P,R)=>{const k=new Ge;k.userData={id:f,label:w,phase:R,baseX:c,baseZ:v};const j=new B(new ui(.32,.78,4,8),J(P,.9));j.position.y=.85,k.add(j);const K=new B(new ut(.25,12,8),J(13210736,.9));K.position.y=1.58,k.add(K);const N=G(.7,.9,.15,2565407,1);N.position.set(0,.82,-.27),k.add(N),k.position.set(c,W(c,v),v),me(k,f,w),b.push(k),he.push(k)};va(9,-8,"elder","Старейшина",7558719,.4),va(-6,-3,"blacksmith","Кузнец",6044459,1.5),va(21,1,"hunter","Охотник",4215359,2.4),va(5,10,"villager","Житель Мидгарда",5858125,3.4),va(-16,4,"villager2","Житель деревни",6638394,4.2);const My=new Mt({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),Md=new Ge;for(let c=0;c<34;c++){const v=new B(new ut(.9+O(c,810)*2.2,8,6),My);v.position.set(-88+O(c,811)*176,1.8+O(c,812)*2.2,-72+O(c,813)*144),Md.add(v)}M.add(Md);const xs=TA(t);M.add(xs);const hr=xs.userData.anim,L0=new US,wd=new et,D0=c=>{var w,P,R,k;if((P=(w=c.target)==null?void 0:w.closest)!=null&&P.call(w,".mid3d-ui"))return;const v=Y.domElement.getBoundingClientRect();wd.x=(c.clientX-v.left)/v.width*2-1,wd.y=-((c.clientY-v.top)/v.height)*2+1,L0.setFromCamera(wd,z);const f=L0.intersectObjects(b,!0)[0];if(f){let j=f.object;for(;j.parent&&!((R=j.userData)!=null&&R.id);)j=j.parent;(k=j.userData)!=null&&k.id&&e(j.userData.id)}};Y.domElement.addEventListener("pointerup",D0);const wy=c=>{_.current=c,x(c),l(""),an.visible=c,ma.visible=!c,ga.visible=!c,hd.visible=!c,pd.visible=!c,md.visible=!c,c?(o.current.x=Pn,o.current.z=Mn+.95,d.current.x=0,d.current.z=-1,ao.rotation.y=-Math.PI/2):(o.current.x=Pn,o.current.z=Mn+3.75,d.current.x=0,d.current.z=1,ao.rotation.y=0),xs.position.set(o.current.x,W(o.current.x,o.current.z)+.04,o.current.z)};y.current=wy;const Sy=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:1,z:0,r:4.8},{id:"norns",label:"Прядильня норн",x:-52,z:38,r:5.4},{id:"rune",label:"Древний камень Феху",x:50,z:60,r:4.5},{id:"port",label:"Речной причал",x:-45,z:-48,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-5,z:75,r:7.5},{id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд",x:58,z:-28,r:6.8},{id:"forestCache",label:"Забытый тайник",x:-72,z:48,r:4.2},{id:"forestThread",label:"Разорванная нить",x:50,z:-62,r:4.2},{id:"runefield",label:"Поле Рун",x:18,z:55,r:8},{id:"oldfarm",label:"Старый хутор",x:-65,z:5,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:43,z:32,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:62,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:68,z:8,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:-45,z:75,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:-30,z:15,r:7.5},{id:"powerCircle",label:"Круг Силы — Монолит",x:5,z:-70,r:6.5},{id:"whisperStone",label:"Камень Шёпота",x:-72,z:-48,r:6.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],N0=()=>{const c=Math.max(1,T.clientWidth),v=Math.max(1,T.clientHeight);z.aspect=c/v,z.updateProjectionMatrix(),Y.setSize(c,v,!1)};N0();const U0=new ResizeObserver(N0);U0.observe(T);let Sd=0,F0=performance.now();const k0=c=>{const v=Math.min(.05,(c-F0)/1e3);F0=c;const f=o.current,w=Math.hypot(f.dx,f.dz);if(w>.05){const N=6.2*v;ot(f,f.x+f.dx/w*N,f.z+f.dz/w*N),xs.rotation.y=Math.atan2(f.dx,f.dz),d.current.x=f.dx/w,d.current.z=f.dz/w,h(!0)}else h(!1);const P=W(f.x,f.z);if(xs.position.set(f.x,P+.04,f.z),hr){const N=c*.011+hr.phase,Q=w>.05?Math.sin(N)*.58:0,ie=w>.05?Math.sin(N+Math.PI)*.42:0;hr.legL.rotation.x=Q,hr.legR.rotation.x=-Q,hr.armL.upper.rotation.x=ie,hr.armR.upper.rotation.x=-ie,hr.armL.elbow.rotation.x=-Math.abs(ie)*.35,hr.armR.elbow.rotation.x=-Math.abs(ie)*.35,hr.weapon.rotation.z=-.12+(w>.05?Math.sin(N)*.035:0)}const R=d.current,k=_.current?new X(f.x-R.x*1,P+3.65,f.z-R.z*1):new X(f.x-R.x*2,P+7.2,f.z-R.z*2+11.8);z.position.lerp(k,_.current?.09:.055),z.lookAt(f.x+(_.current?R.x*.9:R.x*1.9),P+(_.current?1.25:1.2),f.z+(_.current?R.z*.9:R.z*1.9));let j="",K="";if(_.current)f.z>Mn+1.72&&(j="Дверь — выйти из дома",K="heroHomeExit");else for(const N of Sy)if(Math.hypot(f.x-N.x,f.z-N.z)<N.r){j=N.label,K=N.id;break}l(j?`${j}|${K}`:""),Bt.forEach(N=>{const Q=.72+.28*Math.sin(c*.0016+N.phase);N.mesh.scale.set(Q,Q*.42,Q);const ie=N.mesh.material;ie.opacity=.055+.055*(.5+.5*Math.sin(c*.0016+N.phase))}),qe.forEach(N=>{const Q=Math.sin(c*55e-5*N.speed+N.phase)*.9;N.mesh.position.y=W(N.mesh.position.x,N.mesh.position.z)+.095+Q*.008;const ie=N.mesh.material;ie.opacity=.045+.045*(.5+.5*Math.sin(c*.0011*N.speed+N.phase))}),re.forEach(N=>{N.light.intensity=2+Math.sin(c*.012+N.phase)*.5,N.flame.scale.y=.9+Math.sin(c*.009+N.phase)*.12}),Md.children.forEach((N,Q)=>{N.position.x+=Math.sin(c*12e-5+Q)*.003,N.position.z+=Math.cos(c*1e-4+Q)*.002}),xe.forEach((N,Q)=>{var Ke,ct;if(N.kind==="deer"){const Ct=N.g.position.x-xs.position.x,Nt=N.g.position.z-xs.position.z,Ot=Math.hypot(Ct,Nt);if(Ot<11){const Kt=((Ke=N.g.userData)==null?void 0:Ke.legJoints)||[],$t=c*.014*(N.speed||1);for(let Wt=0;Wt<4;Wt++){const wn=Kt[Wt*2],yi=Kt[Wt*2+1];wn&&(wn.rotation.z=Math.sin($t+Wt*Math.PI)*.1),yi&&(yi.rotation.z=Math.max(0,Math.sin($t+Wt*Math.PI))*-.18)}const Ut=Math.max(.001,Ot),Ft=Ot<5.5?.115:.075,dn=N.g.position.x+Ct/Ut*Ft,Bn=N.g.position.z+Nt/Ut*Ft,li=dn-30,Ve=Bn-53;if(Math.hypot(li,Ve)<17)N.g.position.set(dn,W(dn,Bn),Bn);else{const Wt=Math.atan2(Ve,li),wn=30+Math.cos(Wt)*16,yi=53+Math.sin(Wt)*10;N.g.position.set(wn,W(wn,yi),yi)}N.g.rotation.y=Math.atan2(Nt,Ct),N.g.position.y+=Math.sin(c*.008+Q)*.025;return}}const ie=c*.00105*N.speed+N.phase,Se=N.x+Math.cos(ie)*N.r,ge=N.z+Math.sin(ie*.83)*N.r*.62;if(N.g.position.set(Se,W(Se,ge),ge),N.g.rotation.y=Math.atan2(Math.cos(ie*.83),-Math.sin(ie)),N.kind==="deer"){const Ct=((ct=N.g.userData)==null?void 0:ct.legJoints)||[],Nt=c*.014*(N.speed||1);for(let Ot=0;Ot<4;Ot++){const Kt=Ct[Ot*2],$t=Ct[Ot*2+1];Kt&&(Kt.rotation.z=Math.sin(Nt+Ot*Math.PI)*.1),$t&&($t.rotation.z=Math.max(0,Math.sin(Nt+Ot*Math.PI))*-.18)}N.g.position.y+=Math.sin(c*.006+Q)*.025,N.g.rotation.x=Math.sin(c*.004+N.phase)*.018}}),he.forEach((N,Q)=>{const ie=N.userData.phase||0,Se=N.userData.baseX,ge=N.userData.baseZ,Ke=Se+Math.sin(c*28e-5+ie)*1.6,ct=ge+Math.cos(c*22e-5+ie)*1.1;N.position.set(Ke,W(Ke,ct),ct),N.rotation.y=Math.sin(c*4e-4+ie)*.5}),ze.forEach((N,Q)=>{const ie=N.material;ie.opacity=.48+Math.sin(c*55e-5+Q*1.7)*.07,N.rotation.z+=Math.sin(c*18e-5+Q)*8e-5}),Ie.forEach((N,Q)=>{N.material.opacity=.024+Math.sin(c*42e-5+Q*2.1)*.008}),Y.render(M,z),Sd=requestAnimationFrame(k0)};return Sd=requestAnimationFrame(k0),()=>{cancelAnimationFrame(Sd),U0.disconnect(),Y.domElement.removeEventListener("pointerup",D0),Bt.forEach(c=>{c.mesh.geometry.dispose(),c.mesh.material.dispose()}),qe.forEach(c=>{c.mesh.geometry.dispose(),c.mesh.material.dispose()}),nt.dispose(),oi.dispose(),jn.dispose(),ue.dispose(),Pe.dispose(),ze.forEach(c=>{c.geometry.dispose(),c.material.dispose()}),Ie.forEach(c=>{c.geometry.dispose(),c.material.dispose()}),Y.dispose(),M.traverse(c=>{var v,f,w,P;c.isMesh&&((f=(v=c.geometry)==null?void 0:v.dispose)==null||f.call(v),Array.isArray(c.material)?c.material.forEach(R=>{var k;return(k=R.dispose)==null?void 0:k.call(R)}):(P=(w=c.material)==null?void 0:w.dispose)==null||P.call(w))}),Y.domElement.remove(),y.current=null}},[t.id,e,n]);const E=T=>{const M=r.current,z=s.current;if(!M||!z)return;const Y=M.getBoundingClientRect(),se=Y.left+Y.width/2,ce=Y.top+Y.height/2,fe=48;let W=T.clientX-se,te=T.clientY-ce;const H=Math.hypot(W,te);H>fe&&(W=W/H*fe,te=te/H*fe),z.style.transform=`translate(${W}px,${te}px)`,o.current.dx=W/fe,o.current.dz=te/fe},I=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},L=T=>{var te,H;const M=r.current;if(!M)return;const z=T.target;if((te=z.closest)!=null&&te.call(z,".mid3d-action")||(H=z.closest)!=null&&H.call(z,".mid3d-interact"))return;const Y=M.getBoundingClientRect(),se=26;T.clientX>=Y.left-se&&T.clientX<=Y.right+se&&T.clientY>=Y.top-78&&T.clientY<=Y.bottom+26&&(T.currentTarget.setPointerCapture(T.pointerId),E(T))},D=T=>{T.currentTarget.hasPointerCapture(T.pointerId)&&E(T)},F=T=>{T.currentTarget.hasPointerCapture(T.pointerId)&&T.currentTarget.releasePointerCapture(T.pointerId),I()};return $.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:L,onPointerMove:D,onPointerUp:F,onPointerCancel:F,onContextMenu:T=>T.preventDefault(),children:[$.jsxs("div",{className:"mid3d-ui mid3d-top",children:[$.jsxs("div",{className:"mid3d-pill",children:[$.jsx("b",{children:"МИДГАРД"}),$.jsx("span",{children:"Деревня • река • лес • святилища"})]}),$.jsxs("div",{className:"mid3d-pill",children:[$.jsx("b",{children:"ᛟ"}),$.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),g&&!n&&$.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[$.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),$.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{S(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{S(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{S(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),g&&n&&$.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[$.jsx("b",{children:"Камень Трёх Нитей"}),$.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>S(!1),children:"Продолжить путь"})]}),p&&$.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[$.jsx("b",{children:"🜂 Круг Силы"}),$.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!p&&!g&&(()=>{const[T,M]=a.split("|"),z=M==="heroHome"||M==="heroHomeExit";return $.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[$.jsx("b",{children:T}),$.jsx("span",{children:z?M==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),$.jsx("button",{onPointerDown:Y=>Y.stopPropagation(),onClick:()=>{var Y,se;M==="powerCircle"?m(!0):M==="threeThreads"?S(!0):M==="heroHome"?(Y=y.current)==null||Y.call(y,!0):M==="heroHomeExit"?(se=y.current)==null||se.call(y,!1):e(M)},children:z?M==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),$.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:$.jsx("div",{className:"mid3d-knob",ref:s})}),$.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:T=>T.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),$.jsx("div",{className:"mid3d-ui mid3d-hint",children:A?u?"Ты внутри дома":"Дом героя • отдых • сундук • выход":u?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function bA(){const[t,e]=At.useState(()=>ev().hero?{t:"tree"}:{t:"choose"}),[n,i]=At.useState(ev),[r,s]=At.useState(""),[o,a]=At.useState(""),[l,u]=At.useState(""),h=At.useRef(0),[p,m]=At.useState(null),[g,S]=At.useState(null),[A,x]=At.useState(!1),[d,_]=At.useState(0),[y,E]=At.useState(0),[I,L]=At.useState(0),[D,F]=At.useState(""),[T,M]=At.useState(!1),[z,Y]=At.useState(!1),[se,ce]=At.useState(""),[fe,W]=At.useState(.06);At.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),At.useEffect(()=>{var q,me,J,G;(q=Rt==null?void 0:Rt.ready)==null||q.call(Rt),(me=Rt==null?void 0:Rt.expand)==null||me.call(Rt),(J=Rt==null?void 0:Rt.setHeaderColor)==null||J.call(Rt,"#0b0f0c"),(G=Rt==null?void 0:Rt.setBackgroundColor)==null||G.call(Rt,"#0b0f0c")},[]),At.useEffect(()=>{if(!(Rt!=null&&Rt.BackButton))return;const q=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(Rt.BackButton.show(),Rt.BackButton.onClick(q)):Rt.BackButton.hide(),()=>{var me,J;(J=(me=Rt.BackButton)==null?void 0:me.offClick)==null||J.call(me,q)}},[t,n.hero]),At.useEffect(()=>{m(null),S(null),x(!1),ce(""),M(!1)},[t]);const te=q=>{u(q),window.clearTimeout(h.current),h.current=window.setTimeout(()=>u(""),1800)},H=(q="light")=>{var me,J,G,Xe;try{q==="success"?(J=(me=Rt==null?void 0:Rt.HapticFeedback)==null?void 0:me.notificationOccurred)==null||J.call(me,"success"):(Xe=(G=Rt==null?void 0:Rt.HapticFeedback)==null?void 0:G.impactOccurred)==null||Xe.call(G,"light")}catch{}},oe=q=>e(q),ue=q=>{H(),e({t:"realm",id:q.id})},Pe=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),ze=()=>{const q=Pe();if(q<=0){te("Дозор только начался — искры ещё копятся.");return}i(me=>({...me,sparks:me.sparks+q,watch:Date.now()})),H("success"),te("Дозор завершён: +"+q+" ✨")},_t=()=>{if(n.gift===Da())return;const me=(n.gift?Math.round((Date.parse(Da())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,J=Uf[me-1];i(G=>({...G,sparks:G.sparks+J,gift:Da(),streak:me})),H("success"),te("Дар Древа, день "+me+": +"+J+" ✨")},ft=()=>{!r||!o||(i(q=>({...q,hero:{id:r,name:o}})),H("success"),te("Путь начинается, "+o+"!"),e({t:"tree"}))},Ie=n.hero?Ff.find(q=>q.id===n.hero.id):null,pe=q=>Math.floor(Math.random()*q),_e=q=>n.trials.filter(me=>me.startsWith(q+":")).length,we=q=>{if(n.artifacts.includes(q.id)){te("Мир покорён. Артефакт хранится в листе героя.");return}H(),e({t:"trial",id:q.id})},nt=(q,me,J)=>{const G=me===2;i(Xe=>({...Xe,sparks:Xe.sparks+J+(G?30:0),trials:[...Xe.trials,q+":"+me],artifacts:G?[...Xe.artifacts,q]:Xe.artifacts})),G&&(H("success"),te("Мир пройден! Артефакт: "+Of[q]))},He=(q,me)=>{if(p!==null)return;const J=_e(q),G=kf[q][J];if(me===G.c){m(me),H("success");const Xe=12+J*3+((Ie==null?void 0:Ie.id)==="dwarf"?6:0);te("Верно! Сундук хозяина: +"+Xe+" ✨"),nt(q,J,Xe);return}if(n.powers.includes("mimirEye")){m(G.c),i($e=>({...$e,powers:$e.powers.filter(U=>U!=="mimirEye")}));const Xe=8+J*2;H("success"),te("Око Мимира раскрыло истину. Ответ исправлен. +"+Xe+" ✨"),nt(q,J,Xe);return}if(n.powers.includes("nornThread")){m(me),i($e=>({...$e,powers:$e.powers.filter(U=>U!=="nornThread")}));const Xe=6+J*2;H("success"),te("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+Xe+" ✨"),nt(q,J,Xe);return}m(me),H(),F(Na[q].name+" мрачнеет: «Что ж — пусть решит сталь!»")},ht=q=>{const me=_e(q),J=kf[q][me],G=J.a.findIndex((Xe,$e)=>$e!==J.c&&$e!==g);S(G),x(!0),H(),te("Шёпот ветров уносит один ответ...")},on=q=>{const me=Na[q],J=n.powers.includes("ashBreath");_(me.hp),E(Ie.hp+(J?25:0)),L(Ie.en+(J?2:0)),ce(""),M(!1),Y(!1),F(J?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":me.name+" поднимает оружие!"),J&&i(G=>({...G,powers:G.powers.filter(Xe=>Xe!=="ashBreath")})),e({t:"fight",id:q})},V=(q,me)=>{if(se)return;const J=Na[q],G=_e(q);let Xe=0,$e="",U=I,b=T;if(me==="hit"&&(Xe=Ie.str+pe(4),n.powers.includes("fireOath")&&(Xe+=5,i(Ne=>({...Ne,powers:Ne.powers.filter(Me=>Me!=="fireOath")})),$e="Огненный обет! "),Ie.id==="berserk"&&y<=Ie.hp/2&&(Xe*=2,$e+="Медвежья ярость! "),$e+="Ты бьёшь: "+Ie.weapon+" — −"+Xe+" хозяину."),me==="rune"){if(I<4){te("Мало энергии для заклинания!");return}U=I-4,Xe=Ie.en+2+pe(5),$e="Руническое заклинание вспыхивает: −"+Xe+" хозяину."}me==="shield"&&(b=!0,$e="Ты поднимаешь щит — удар ослабнет.");const re=d-Xe;if(re<=0){_(0),L(U),ce("win");const Ne=8+G*2;F("Хозяин повержен! Награда: +"+Ne+" ✨"),nt(q,G,Ne);return}let he=J.atk+pe(3),xe="";b&&(he=Math.ceil(he*.3),xe=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(he=Math.ceil(he*.65),i(Ne=>({...Ne,powers:Ne.powers.filter(Me=>Me!=="iceOath")})),xe+=" Ледяной обет сковал удар врага."),Ie.id==="dwarf"&&(he=Math.ceil(he*.75));let de=y;if(Ie.id==="viking"&&!z&&de-he<=0&&(Y(!0),he=0,xe=" Крылья бури поглотили смертельный удар!"),de=de-he,_(re),E(Math.max(0,de)),L(U),M(!1),de<=0&&n.powers.includes("yggdrasilCall")){i(Ne=>({...Ne,powers:Ne.powers.filter(Me=>Me!=="yggdrasilCall")})),E(30),F($e+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(de<=0){ce("lose"),i(Ne=>({...Ne,sparks:Math.max(0,Ne.sparks-10)})),F($e+" "+J.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}F($e+xe+" "+J.name+" отвечает: −"+he+".")},zt=q=>{_e(q)>=3||n.artifacts.includes(q)?e({t:"realm",id:q}):e({t:"trial",id:q})},at=q=>q==="tree"?t.t==="tree"||t.t==="realm":t.t===q,it=q=>q==="tree"?{t:"tree"}:{t:q};return $.jsxs("div",{className:"app",children:[$.jsx("style",{children:SA}),$.jsxs("div",{className:"hdr",children:[t.t==="tree"&&$.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&$.jsx("button",{className:"back",onClick:()=>oe({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&$.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&$.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&$.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&$.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&$.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&$.jsx("div",{className:"title",children:"⚔ Бой"}),$.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&$.jsxs("div",{className:"scroll choose-screen",children:[$.jsxs("div",{className:"card center choose-intro",children:[$.jsx("div",{className:"big",children:"ᛉ"}),$.jsx("div",{className:"qhead2",children:"Выбери героя"}),$.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),Ff.map(q=>$.jsxs("button",{className:"hcard"+(r===q.id?" on":""),onClick:()=>{s(q.id),a(""),H()},children:[$.jsx("span",{className:"hface",style:{borderColor:q.color,color:q.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:$.jsx(Vr,{name:q.img,className:"himg"})}),$.jsxs("span",{className:"hinfo",children:[$.jsx("span",{className:"hname",style:{color:q.color},children:q.race}),$.jsxs("span",{className:"hab",children:["🌀 ",q.ability,": ",q.abilityDesc]}),$.jsxs("span",{className:"hst",children:["⚔ ",q.str," • ✨ ",q.en," • ❤ ",q.hp]}),$.jsxs("span",{className:"hw",children:["🗡 ",q.weapon]})]})]},q.id)),r&&$.jsxs("div",{className:"card",children:[$.jsx("div",{className:"qhead2",children:"Имя героя"}),$.jsx("div",{className:"chips",children:(Ff.find(q=>q.id===r).gender==="f"?MA:wA).map(q=>$.jsx("button",{className:"chip"+(o===q?" on":""),onClick:()=>{a(q),H()},children:q},q))})]}),$.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:ft,children:"Вступить на путь"})]}),t.t==="tree"&&$.jsxs("div",{className:"maparea",children:[$.jsx("div",{className:"mapwrap",children:$.jsxs("div",{className:"mapcanvas",children:[$.jsx(Vr,{name:"tree",className:"mapimg"}),Ac.map(q=>$.jsxs("button",{className:"marker",style:{left:q.x+"%",top:q.y+"%"},onClick:()=>ue(q),children:[$.jsxs("div",{className:"amulet-wrap",children:[$.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${q.glow}, transparent 70%)`}}),$.jsx("div",{className:"amulet-ring",style:{borderColor:q.color}}),$.jsx("div",{className:"amulet-core",style:{borderColor:q.color,color:q.color,background:`linear-gradient(135deg, ${q.dark}, #0a0a0a)`},children:q.runeSym})]}),$.jsx("span",{className:"mname",style:{color:q.color,borderColor:q.glow},children:q.name})]},q.id))]})}),$.jsx("div",{className:"fadeT"}),$.jsx("div",{className:"fadeB"}),$.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&Ie&&n.hero&&$.jsxs("button",{className:"herobar",onClick:()=>oe({t:"hero"}),children:[$.jsxs("span",{className:"hbface",style:{borderColor:Ie.color,color:Ie.color},children:[$.jsx(Vr,{name:Ie.img,className:"hbimg"}),Ie.sym]}),$.jsxs("span",{className:"hbname",children:[n.hero.name,$.jsx("i",{children:Ie.race})]}),$.jsxs("span",{className:"hbst",children:["⚔ ",Ie.str," ✨ ",Ie.en," ⏳ ",Pe()]}),$.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const q=Ac.find(me=>me.id===t.id);if(q.id==="midgard"){if(!Ie)return null;const me=J=>{if(H(),J==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?te("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(G=>({...G,sparks:G.sparks+20,done:[...new Set([...G.done,"forest:present:reward"])]})),H("success"),te("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):te("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(J==="norns"){te("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(J==="threeThreads"){te("У колодца Урд три Норны прядут нити судьбы. Серебряная, золотая и алая нить сплетаются над водой в знак того, что прошлое, настоящее и будущее связаны.");return}if(J==="forge"||J==="blacksmith"){te("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(J==="house"||J==="elder"){te("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(J==="port"){te("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(J==="rune"){te("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(J==="ashgrove"){te("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(J==="runefield"){te("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(J==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?te("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(G=>({...G,sparks:G.sparks+20,done:[...new Set([...G.done,"forest:past:reward"])]})),H("success"),te("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):te("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(J==="forestCache"){n.done.includes("forest:cache")?te("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(G=>({...G,sparks:G.sparks+18,done:[...new Set([...G.done,"forest:cache"])]})),H("success"),te("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(J==="forestWhisper"){n.done.includes("forest:whisper")?te("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(G=>({...G,sparks:G.sparks+16,done:[...new Set([...G.done,"forest:whisper"])]})),H("success"),te("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(J==="forestThread"){n.done.includes("forest:thread")?te("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(G=>({...G,sparks:G.sparks+22,done:[...new Set([...G.done,"forest:thread"])]})),H("success"),te("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(J==="heroHome"){te("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(J==="hunterCamp"){n.done.includes("forest:camp")?te("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(G=>({...G,sparks:G.sparks+14,done:[...new Set([...G.done,"forest:camp"])]})),H("success"),te("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(J==="deepGrove"){n.done.includes("forest:grove")?te("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(G=>({...G,sparks:G.sparks+17,done:[...new Set([...G.done,"forest:grove"])]})),H("success"),te("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(J==="fallenAsh"){n.done.includes("forest:ash")?te("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(G=>({...G,sparks:G.sparks+21,done:[...new Set([...G.done,"forest:ash"])]})),H("success"),te("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(J==="deer"){te("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(J==="hoddmimir"){te("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(J==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?te("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(G=>({...G,sparks:G.sparks+20,done:[...new Set([...G.done,"forest:future:reward"])]})),H("success"),te("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):te("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(J==="forestEvent"){n.done.includes("forest:choice")&&te("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(J==="forestEvent:past"){i(G=>({...G,sparks:G.sparks+12,done:[...new Set([...G.done,"forest:choice","forest:past"])]})),H("success"),te("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(J==="forestEvent:present"){i(G=>({...G,sparks:G.sparks+12,done:[...new Set([...G.done,"forest:choice","forest:present"])]})),H("success"),te("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(J==="forestEvent:future"){i(G=>({...G,sparks:G.sparks+12,done:[...new Set([...G.done,"forest:choice","forest:future"])]})),H("success"),te("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(J==="event"){te("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(J.startsWith("ritual:")){const G=J.slice(7),Xe={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},U={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[G];if(!U)return;if(n.powers.includes(U)){te(Xe[G]+" уже пробуждён. Его сила ждёт своего часа.");return}i(re=>({...re,powers:[...new Set([...re.powers,U])],done:[...new Set([...re.done,"ritual:"+G])]}));const b={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};H("success"),te(b[G]);return}};return $.jsx(AA,{h:Ie,on:me,eventDone:n.done.includes("forest:choice")})}return $.jsxs("div",{className:"content",children:[$.jsx(Vr,{name:q.id,className:"bgimg"}),$.jsx("div",{className:"veil"}),$.jsxs("div",{className:"banner",children:[$.jsx("span",{className:"bemoji",children:q.emoji}),$.jsxs("div",{children:[$.jsx("div",{className:"bname",children:q.name}),$.jsx("div",{className:"btag",children:q.tag})]})]}),$.jsxs("button",{className:"gate",onClick:()=>we(q),children:[$.jsxs("span",{className:"gwrap",children:[$.jsx("span",{className:"gate-ring",style:{borderColor:q.color}}),$.jsx("span",{className:"gate-core",style:{borderColor:q.color,color:q.color,background:`radial-gradient(circle, ${q.dark}, #050705 75%)`},children:q.runeSym})]}),$.jsx("span",{className:"mname",style:{color:q.color,borderColor:q.glow},children:n.artifacts.includes(q.id)?"Мир покорён":"Врата мира"})]}),$.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const q=Ac.find(Xe=>Xe.id===t.id),me=Na[q.id],J=_e(q.id);if(J>=3)return $.jsx("div",{className:"scroll",children:$.jsxs("div",{className:"card center",children:[$.jsx("div",{className:"big",children:"🏺"}),$.jsx("div",{className:"qhead2",children:"Мир покорён!"}),$.jsxs("p",{className:"dim",children:["Артефакт: ",Of[q.id]]}),$.jsx("button",{className:"btn gold",onClick:()=>oe({t:"realm",id:q.id}),children:"К вратам"})]})});const G=kf[q.id][J];return $.jsxs("div",{className:"scroll",children:[$.jsxs("div",{className:"mhead",children:[$.jsxs("span",{className:"mface",style:{borderColor:q.color,color:q.color},children:[$.jsx(Vr,{name:tv[q.id],className:"himg"}),me.sym]}),$.jsx("span",{className:"mname2",style:{color:q.color},children:me.name}),$.jsxs("span",{className:"mtitle",children:[me.title," • испытание ",J+1," из 3"]})]}),J===0&&$.jsxs("div",{className:"greet",children:["«",me.greet,"»"]}),$.jsxs("div",{className:"cloud",children:[$.jsx("div",{className:"riddle",children:G.q}),G.a.map((Xe,$e)=>$.jsx("button",{className:"ans"+(p!==null?$e===G.c?" good":$e===p?" bad":" off":g===$e?" off":""),onClick:()=>He(q.id,$e),children:Xe},$e)),(Ie==null?void 0:Ie.id)==="elf"&&!A&&p===null&&$.jsx("button",{className:"btn rune",onClick:()=>ht(q.id),children:"🌀 Шёпот ветров"}),p!==null&&(p===G.c?$.jsx("button",{className:"btn gold",onClick:()=>zt(q.id),children:"Открыть сундук →"}):$.jsx("button",{className:"btn",onClick:()=>on(q.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const q=Ac.find(J=>J.id===t.id),me=Na[q.id];return $.jsxs("div",{className:"scroll",children:[$.jsxs("div",{className:"duel",children:[$.jsxs("div",{className:"dside",children:[$.jsxs("span",{className:"dface",style:{borderColor:q.color,color:q.color},children:[$.jsx(Vr,{name:tv[q.id],className:"himg"}),me.sym]}),$.jsx("span",{className:"dname",style:{color:q.color},children:me.name}),$.jsx("span",{className:"dhp",children:$.jsx("span",{className:"dhpfill",style:{width:Math.max(0,d/me.hp*100)+"%",background:q.color}})}),$.jsxs("span",{className:"dnum",children:[d,"/",me.hp]})]}),$.jsx("span",{className:"dvs",children:"⚔"}),$.jsxs("div",{className:"dside",children:[$.jsxs("span",{className:"dface",style:{borderColor:Ie.color,color:Ie.color},children:[$.jsx(Vr,{name:Ie.img,className:"himg"}),Ie.sym]}),$.jsx("span",{className:"dname",style:{color:Ie.color},children:n.hero.name}),$.jsx("span",{className:"dhp",children:$.jsx("span",{className:"dhpfill",style:{width:Math.max(0,y/Ie.hp*100)+"%",background:"#7ee787"}})}),$.jsx("span",{className:"denergy",children:Array.from({length:Ie.en}).map((J,G)=>$.jsx("span",{className:"pip"+(G<I?" on":"")},G))})]})]}),$.jsx("div",{className:"flog",children:D}),!se&&$.jsxs("div",{className:"acts",children:[$.jsxs("button",{className:"btn gold",onClick:()=>V(q.id,"hit"),children:["⚔ Удар: ",Ie.weapon]}),$.jsx("button",{className:"btn rune",onClick:()=>V(q.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),$.jsx("button",{className:"btn shield",onClick:()=>V(q.id,"shield"),children:"🛡 Щит"})]}),se==="win"&&$.jsx("button",{className:"btn gold",onClick:()=>zt(q.id),children:"Забрать награду →"}),se==="lose"&&$.jsx("button",{className:"btn ghost",onClick:()=>oe({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&Ie&&n.hero&&$.jsx("div",{className:"scroll",children:$.jsxs("div",{className:"card center",children:[$.jsx("span",{className:"hface bigface",style:{borderColor:Ie.color,color:Ie.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:$.jsx(Vr,{name:Ie.img,className:"himg"})}),$.jsxs("div",{className:"qhead2",style:{color:Ie.color},children:[n.hero.name," • ",Ie.race]}),$.jsxs("div",{className:"stats",children:[$.jsxs("div",{className:"stat",children:[$.jsxs("b",{children:["⚔ ",Ie.str]}),$.jsx("span",{children:"сила"})]}),$.jsxs("div",{className:"stat",children:[$.jsxs("b",{children:["✨ ",Ie.en]}),$.jsx("span",{children:"энергия"})]}),$.jsxs("div",{className:"stat",children:[$.jsxs("b",{children:["❤ ",Ie.hp]}),$.jsx("span",{children:"здоровье"})]})]}),$.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",$.jsx("b",{children:Ie.weapon})]}),$.jsxs("div",{className:"hrow",children:["🌀 ",Ie.ability,": ",Ie.abilityDesc]}),$.jsxs("div",{className:"hrow",children:["✨ Искр: ",$.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",$.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&$.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(q=>Of[q]).join(", ")]})]})}),t.t==="gift"&&(()=>{const q=n.gift===Da(),J=(n.gift?Math.round((Date.parse(Da())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,G=q?n.streak:J;return $.jsxs("div",{className:"scroll",children:[$.jsxs("div",{className:"card center",children:[$.jsx("div",{className:"big",children:"🎁"}),$.jsx("div",{className:"qhead2",children:"Дар Древа"}),$.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),$.jsx("div",{className:"days",children:Uf.map((Xe,$e)=>$.jsxs("span",{className:"day"+($e+1===G?" on":$e+1<G&&q?" done":""),children:[$.jsx("b",{children:Xe}),"день ",$e+1]},$e))}),q?$.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):$.jsxs("button",{className:"btn gold",onClick:_t,children:["Забрать дар +",Uf[J-1]," ✨"]})]}),$.jsxs("div",{className:"card center",children:[$.jsx("div",{className:"big",children:"⏳"}),$.jsx("div",{className:"qhead2",children:"Дозор героя"}),$.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),$.jsxs("button",{className:"btn gold",onClick:ze,children:["Завершить дозор · +",Pe()," ✨"]})]})]})})(),t.t==="hall"&&$.jsx("div",{className:"scroll",children:$.jsxs("div",{className:"card center",children:[$.jsx("div",{className:"big",children:"🏛️"}),$.jsx("div",{className:"qhead2",children:"Чертог путника"}),$.jsxs("div",{className:"stats",children:[$.jsxs("div",{className:"stat",children:[$.jsxs("b",{children:["✨ ",n.sparks]}),$.jsx("span",{children:"Искр"})]}),$.jsxs("div",{className:"stat",children:[$.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),$.jsx("span",{children:"артефакты"})]})]}),$.jsxs("div",{className:"rank",children:["🏆 Ранг: ",yA(n.sparks)]}),n.hero&&Ie&&$.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",Ie.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&$.jsx("div",{className:"nav",children:xA.map(q=>$.jsxs("button",{className:"navbtn"+(at(q.id)?" on":""),onClick:()=>oe(it(q.id)),children:[$.jsx("span",{className:"ic",children:q.ic}),q.t]},q.id))}),l&&$.jsx("div",{className:"toast",children:l})]})}gx(document.getElementById("root")).render($.jsx(bA,{}));
