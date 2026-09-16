(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var mv={exports:{}},bu={},gv={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ml=Symbol.for("react.element"),zy=Symbol.for("react.portal"),By=Symbol.for("react.fragment"),Hy=Symbol.for("react.strict_mode"),Vy=Symbol.for("react.profiler"),Gy=Symbol.for("react.provider"),Wy=Symbol.for("react.context"),Xy=Symbol.for("react.forward_ref"),jy=Symbol.for("react.suspense"),qy=Symbol.for("react.memo"),Yy=Symbol.for("react.lazy"),Y0=Symbol.iterator;function $y(t){return t===null||typeof t!="object"?null:(t=Y0&&t[Y0]||t["@@iterator"],typeof t=="function"?t:null)}var vv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_v=Object.assign,xv={};function ra(t,e,n){this.props=t,this.context=e,this.refs=xv,this.updater=n||vv}ra.prototype.isReactComponent={};ra.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ra.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yv(){}yv.prototype=ra.prototype;function Lp(t,e,n){this.props=t,this.context=e,this.refs=xv,this.updater=n||vv}var Dp=Lp.prototype=new yv;Dp.constructor=Lp;_v(Dp,ra.prototype);Dp.isPureReactComponent=!0;var $0=Array.isArray,Mv=Object.prototype.hasOwnProperty,Np={current:null},wv={key:!0,ref:!0,__self:!0,__source:!0};function Sv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Mv.call(e,i)&&!wv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ml,type:t,key:s,ref:o,props:r,_owner:Np.current}}function Ky(t,e){return{$$typeof:Ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Up(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ml}function Zy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var K0=/\/+/g;function Dd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Zy(""+t.key):e.toString(36)}function Dc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ml:case zy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Dd(o,0):i,$0(r)?(n="",t!=null&&(n=t.replace(K0,"$&/")+"/"),Dc(r,e,n,"",function(u){return u})):r!=null&&(Up(r)&&(r=Ky(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(K0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",$0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Dd(s,a);o+=Dc(s,e,n,l,r)}else if(l=$y(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Dd(s,a++),o+=Dc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Gl(t,e,n){if(t==null)return t;var i=[],r=0;return Dc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Jy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ri={current:null},Nc={transition:null},Qy={ReactCurrentDispatcher:ri,ReactCurrentBatchConfig:Nc,ReactCurrentOwner:Np};function Ev(){throw Error("act(...) is not supported in production builds of React.")}Et.Children={map:Gl,forEach:function(t,e,n){Gl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gl(t,function(){e++}),e},toArray:function(t){return Gl(t,function(e){return e})||[]},only:function(t){if(!Up(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Et.Component=ra;Et.Fragment=By;Et.Profiler=Vy;Et.PureComponent=Lp;Et.StrictMode=Hy;Et.Suspense=jy;Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qy;Et.act=Ev;Et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=_v({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Np.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Mv.call(e,l)&&!wv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ml,type:t.type,key:r,ref:s,props:i,_owner:o}};Et.createContext=function(t){return t={$$typeof:Wy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Gy,_context:t},t.Consumer=t};Et.createElement=Sv;Et.createFactory=function(t){var e=Sv.bind(null,t);return e.type=t,e};Et.createRef=function(){return{current:null}};Et.forwardRef=function(t){return{$$typeof:Xy,render:t}};Et.isValidElement=Up;Et.lazy=function(t){return{$$typeof:Yy,_payload:{_status:-1,_result:t},_init:Jy}};Et.memo=function(t,e){return{$$typeof:qy,type:t,compare:e===void 0?null:e}};Et.startTransition=function(t){var e=Nc.transition;Nc.transition={};try{t()}finally{Nc.transition=e}};Et.unstable_act=Ev;Et.useCallback=function(t,e){return ri.current.useCallback(t,e)};Et.useContext=function(t){return ri.current.useContext(t)};Et.useDebugValue=function(){};Et.useDeferredValue=function(t){return ri.current.useDeferredValue(t)};Et.useEffect=function(t,e){return ri.current.useEffect(t,e)};Et.useId=function(){return ri.current.useId()};Et.useImperativeHandle=function(t,e,n){return ri.current.useImperativeHandle(t,e,n)};Et.useInsertionEffect=function(t,e){return ri.current.useInsertionEffect(t,e)};Et.useLayoutEffect=function(t,e){return ri.current.useLayoutEffect(t,e)};Et.useMemo=function(t,e){return ri.current.useMemo(t,e)};Et.useReducer=function(t,e,n){return ri.current.useReducer(t,e,n)};Et.useRef=function(t){return ri.current.useRef(t)};Et.useState=function(t){return ri.current.useState(t)};Et.useSyncExternalStore=function(t,e,n){return ri.current.useSyncExternalStore(t,e,n)};Et.useTransition=function(){return ri.current.useTransition()};Et.version="18.3.1";gv.exports=Et;var bt=gv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e2=bt,t2=Symbol.for("react.element"),n2=Symbol.for("react.fragment"),i2=Object.prototype.hasOwnProperty,r2=e2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s2={key:!0,ref:!0,__self:!0,__source:!0};function Tv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)i2.call(e,i)&&!s2.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:t2,type:t,key:s,ref:o,props:r,_owner:r2.current}}bu.Fragment=n2;bu.jsx=Tv;bu.jsxs=Tv;mv.exports=bu;var $=mv.exports,bv={exports:{}},Ci={},Av={exports:{}},Cv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,oe){var ue=H.length;H.push(oe);e:for(;0<ue;){var Pe=ue-1>>>1,ze=H[Pe];if(0<r(ze,oe))H[Pe]=oe,H[ue]=ze,ue=Pe;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var oe=H[0],ue=H.pop();if(ue!==oe){H[0]=ue;e:for(var Pe=0,ze=H.length,_t=ze>>>1;Pe<_t;){var ft=2*(Pe+1)-1,Ie=H[ft],pe=ft+1,_e=H[pe];if(0>r(Ie,ue))pe<ze&&0>r(_e,Ie)?(H[Pe]=_e,H[pe]=ue,Pe=pe):(H[Pe]=Ie,H[ft]=ue,Pe=ft);else if(pe<ze&&0>r(_e,ue))H[Pe]=_e,H[pe]=ue,Pe=pe;else break e}}return oe}function r(H,oe){var ue=H.sortIndex-oe.sortIndex;return ue!==0?ue:H.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],p=1,h=null,m=3,g=!1,w=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(H){for(var oe=n(u);oe!==null;){if(oe.callback===null)i(u);else if(oe.startTime<=H)i(u),oe.sortIndex=oe.expirationTime,e(l,oe);else break;oe=n(u)}}function E(H){if(b=!1,y(H),!w)if(n(l)!==null)w=!0,X(L);else{var oe=n(u);oe!==null&&ne(E,oe.startTime-H)}}function L(H,oe){w=!1,b&&(b=!1,f(F),F=-1),g=!0;var ue=m;try{for(y(oe),h=n(l);h!==null&&(!(h.expirationTime>oe)||H&&!z());){var Pe=h.callback;if(typeof Pe=="function"){h.callback=null,m=h.priorityLevel;var ze=Pe(h.expirationTime<=oe);oe=t.unstable_now(),typeof ze=="function"?h.callback=ze:h===n(l)&&i(l),y(oe)}else i(l);h=n(l)}if(h!==null)var _t=!0;else{var ft=n(u);ft!==null&&ne(E,ft.startTime-oe),_t=!1}return _t}finally{h=null,m=ue,g=!1}}var D=!1,N=null,F=-1,T=5,M=-1;function z(){return!(t.unstable_now()-M<T)}function Y(){if(N!==null){var H=t.unstable_now();M=H;var oe=!0;try{oe=N(!0,H)}finally{oe?se():(D=!1,N=null)}}else D=!1}var se;if(typeof _=="function")se=function(){_(Y)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,fe=ce.port2;ce.port1.onmessage=Y,se=function(){fe.postMessage(null)}}else se=function(){x(Y,0)};function X(H){N=H,D||(D=!0,se())}function ne(H,oe){F=x(function(){H(t.unstable_now())},oe)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){w||g||(w=!0,X(L))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var oe=3;break;default:oe=m}var ue=m;m=oe;try{return H()}finally{m=ue}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ue=m;m=H;try{return oe()}finally{m=ue}},t.unstable_scheduleCallback=function(H,oe,ue){var Pe=t.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Pe+ue:Pe):ue=Pe,H){case 1:var ze=-1;break;case 2:ze=250;break;case 5:ze=1073741823;break;case 4:ze=1e4;break;default:ze=5e3}return ze=ue+ze,H={id:p++,callback:oe,priorityLevel:H,startTime:ue,expirationTime:ze,sortIndex:-1},ue>Pe?(H.sortIndex=ue,e(u,H),n(l)===null&&H===n(u)&&(b?(f(F),F=-1):b=!0,ne(E,ue-Pe))):(H.sortIndex=ze,e(l,H),w||g||(w=!0,X(L))),H},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(H){var oe=m;return function(){var ue=m;m=oe;try{return H.apply(this,arguments)}finally{m=ue}}}})(Cv);Av.exports=Cv;var o2=Av.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a2=bt,Ai=o2;function Ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rv=new Set,Qa={};function Zs(t,e){jo(t,e),jo(t+"Capture",e)}function jo(t,e){for(Qa[t]=e,t=0;t<e.length;t++)Rv.add(e[t])}var Ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yf=Object.prototype.hasOwnProperty,l2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Z0={},J0={};function c2(t){return Yf.call(J0,t)?!0:Yf.call(Z0,t)?!1:l2.test(t)?J0[t]=!0:(Z0[t]=!0,!1)}function u2(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function d2(t,e,n,i){if(e===null||typeof e>"u"||u2(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function si(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xn[t]=new si(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xn[e]=new si(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xn[t]=new si(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xn[t]=new si(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xn[t]=new si(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xn[t]=new si(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xn[t]=new si(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xn[t]=new si(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xn[t]=new si(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fp=/[\-:]([a-z])/g;function kp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fp,kp);Xn[e]=new si(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fp,kp);Xn[e]=new si(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fp,kp);Xn[e]=new si(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xn[t]=new si(t,1,!1,t.toLowerCase(),null,!1,!1)});Xn.xlinkHref=new si("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xn[t]=new si(t,1,!1,t.toLowerCase(),null,!0,!0)});function Op(t,e,n,i){var r=Xn.hasOwnProperty(e)?Xn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(d2(e,n,r,i)&&(n=null),i||r===null?c2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ir=a2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wl=Symbol.for("react.element"),To=Symbol.for("react.portal"),bo=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),$f=Symbol.for("react.profiler"),Pv=Symbol.for("react.provider"),Iv=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),Kf=Symbol.for("react.suspense"),Zf=Symbol.for("react.suspense_list"),Hp=Symbol.for("react.memo"),Gr=Symbol.for("react.lazy"),Lv=Symbol.for("react.offscreen"),Q0=Symbol.iterator;function xa(t){return t===null||typeof t!="object"?null:(t=Q0&&t[Q0]||t["@@iterator"],typeof t=="function"?t:null)}var dn=Object.assign,Nd;function Fa(t){if(Nd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nd=e&&e[1]||""}return`
`+Nd+t}var Ud=!1;function Fd(t,e){if(!t||Ud)return"";Ud=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ud=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fa(t):""}function f2(t){switch(t.tag){case 5:return Fa(t.type);case 16:return Fa("Lazy");case 13:return Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 2:case 15:return t=Fd(t.type,!1),t;case 11:return t=Fd(t.type.render,!1),t;case 1:return t=Fd(t.type,!0),t;default:return""}}function Jf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bo:return"Fragment";case To:return"Portal";case $f:return"Profiler";case zp:return"StrictMode";case Kf:return"Suspense";case Zf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Iv:return(t.displayName||"Context")+".Consumer";case Pv:return(t._context.displayName||"Context")+".Provider";case Bp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hp:return e=t.displayName||null,e!==null?e:Jf(t.type)||"Memo";case Gr:e=t._payload,t=t._init;try{return Jf(t(e))}catch{}}return null}function h2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jf(e);case 8:return e===zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function as(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function p2(t){var e=Dv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xl(t){t._valueTracker||(t._valueTracker=p2(t))}function Nv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Dv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Kc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qf(t,e){var n=e.checked;return dn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function eg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=as(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Uv(t,e){e=e.checked,e!=null&&Op(t,"checked",e,!1)}function eh(t,e){Uv(t,e);var n=as(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?th(t,e.type,n):e.hasOwnProperty("defaultValue")&&th(t,e.type,as(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function th(t,e,n){(e!=="number"||Kc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ka=Array.isArray;function Oo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+as(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function nh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Ce(91));return dn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ng(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Ce(92));if(ka(n)){if(1<n.length)throw Error(Ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:as(n)}}function Fv(t,e){var n=as(e.value),i=as(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ig(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function kv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ih(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?kv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var jl,Ov=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(jl=jl||document.createElement("div"),jl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function el(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m2=["Webkit","ms","Moz","O"];Object.keys(Ha).forEach(function(t){m2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ha[e]=Ha[t]})});function zv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ha.hasOwnProperty(t)&&Ha[t]?(""+e).trim():e+"px"}function Bv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=zv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var g2=dn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rh(t,e){if(e){if(g2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Ce(62))}}function sh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oh=null;function Vp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ah=null,zo=null,Bo=null;function rg(t){if(t=El(t)){if(typeof ah!="function")throw Error(Ce(280));var e=t.stateNode;e&&(e=Iu(e),ah(t.stateNode,t.type,e))}}function Hv(t){zo?Bo?Bo.push(t):Bo=[t]:zo=t}function Vv(){if(zo){var t=zo,e=Bo;if(Bo=zo=null,rg(t),e)for(t=0;t<e.length;t++)rg(e[t])}}function Gv(t,e){return t(e)}function Wv(){}var kd=!1;function Xv(t,e,n){if(kd)return t(e,n);kd=!0;try{return Gv(t,e,n)}finally{kd=!1,(zo!==null||Bo!==null)&&(Wv(),Vv())}}function tl(t,e){var n=t.stateNode;if(n===null)return null;var i=Iu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Ce(231,e,typeof n));return n}var lh=!1;if(Ar)try{var ya={};Object.defineProperty(ya,"passive",{get:function(){lh=!0}}),window.addEventListener("test",ya,ya),window.removeEventListener("test",ya,ya)}catch{lh=!1}function v2(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(p){this.onError(p)}}var Va=!1,Zc=null,Jc=!1,ch=null,_2={onError:function(t){Va=!0,Zc=t}};function x2(t,e,n,i,r,s,o,a,l){Va=!1,Zc=null,v2.apply(_2,arguments)}function y2(t,e,n,i,r,s,o,a,l){if(x2.apply(this,arguments),Va){if(Va){var u=Zc;Va=!1,Zc=null}else throw Error(Ce(198));Jc||(Jc=!0,ch=u)}}function Js(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sg(t){if(Js(t)!==t)throw Error(Ce(188))}function M2(t){var e=t.alternate;if(!e){if(e=Js(t),e===null)throw Error(Ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return sg(r),t;if(s===i)return sg(r),e;s=s.sibling}throw Error(Ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Ce(189))}}if(n.alternate!==i)throw Error(Ce(190))}if(n.tag!==3)throw Error(Ce(188));return n.stateNode.current===n?t:e}function qv(t){return t=M2(t),t!==null?Yv(t):null}function Yv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yv(t);if(e!==null)return e;t=t.sibling}return null}var $v=Ai.unstable_scheduleCallback,og=Ai.unstable_cancelCallback,w2=Ai.unstable_shouldYield,S2=Ai.unstable_requestPaint,mn=Ai.unstable_now,E2=Ai.unstable_getCurrentPriorityLevel,Gp=Ai.unstable_ImmediatePriority,Kv=Ai.unstable_UserBlockingPriority,Qc=Ai.unstable_NormalPriority,T2=Ai.unstable_LowPriority,Zv=Ai.unstable_IdlePriority,Au=null,lr=null;function b2(t){if(lr&&typeof lr.onCommitFiberRoot=="function")try{lr.onCommitFiberRoot(Au,t,void 0,(t.current.flags&128)===128)}catch{}}var Ki=Math.clz32?Math.clz32:R2,A2=Math.log,C2=Math.LN2;function R2(t){return t>>>=0,t===0?32:31-(A2(t)/C2|0)|0}var ql=64,Yl=4194304;function Oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Oa(a):(s&=o,s!==0&&(i=Oa(s)))}else o=n&~r,o!==0?i=Oa(o):s!==0&&(i=Oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ki(e),r=1<<n,i|=t[n],e&=~r;return i}function P2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I2(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ki(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=P2(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function uh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jv(){var t=ql;return ql<<=1,!(ql&4194240)&&(ql=64),t}function Od(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ki(e),t[e]=n}function L2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ki(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Wp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ki(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Gt=0;function Qv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var e_,Xp,t_,n_,i_,dh=!1,$l=[],Zr=null,Jr=null,Qr=null,nl=new Map,il=new Map,Xr=[],D2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ag(t,e){switch(t){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":Qr=null;break;case"pointerover":case"pointerout":nl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(e.pointerId)}}function Ma(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=El(e),e!==null&&Xp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function N2(t,e,n,i,r){switch(e){case"focusin":return Zr=Ma(Zr,t,e,n,i,r),!0;case"dragenter":return Jr=Ma(Jr,t,e,n,i,r),!0;case"mouseover":return Qr=Ma(Qr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return nl.set(s,Ma(nl.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,il.set(s,Ma(il.get(s)||null,t,e,n,i,r)),!0}return!1}function r_(t){var e=ks(t.target);if(e!==null){var n=Js(e);if(n!==null){if(e=n.tag,e===13){if(e=jv(n),e!==null){t.blockedOn=e,i_(t.priority,function(){t_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);oh=i,n.target.dispatchEvent(i),oh=null}else return e=El(n),e!==null&&Xp(e),t.blockedOn=n,!1;e.shift()}return!0}function lg(t,e,n){Uc(t)&&n.delete(e)}function U2(){dh=!1,Zr!==null&&Uc(Zr)&&(Zr=null),Jr!==null&&Uc(Jr)&&(Jr=null),Qr!==null&&Uc(Qr)&&(Qr=null),nl.forEach(lg),il.forEach(lg)}function wa(t,e){t.blockedOn===e&&(t.blockedOn=null,dh||(dh=!0,Ai.unstable_scheduleCallback(Ai.unstable_NormalPriority,U2)))}function rl(t){function e(r){return wa(r,t)}if(0<$l.length){wa($l[0],t);for(var n=1;n<$l.length;n++){var i=$l[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zr!==null&&wa(Zr,t),Jr!==null&&wa(Jr,t),Qr!==null&&wa(Qr,t),nl.forEach(e),il.forEach(e),n=0;n<Xr.length;n++)i=Xr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xr.length&&(n=Xr[0],n.blockedOn===null);)r_(n),n.blockedOn===null&&Xr.shift()}var Ho=Ir.ReactCurrentBatchConfig,tu=!0;function F2(t,e,n,i){var r=Gt,s=Ho.transition;Ho.transition=null;try{Gt=1,jp(t,e,n,i)}finally{Gt=r,Ho.transition=s}}function k2(t,e,n,i){var r=Gt,s=Ho.transition;Ho.transition=null;try{Gt=4,jp(t,e,n,i)}finally{Gt=r,Ho.transition=s}}function jp(t,e,n,i){if(tu){var r=fh(t,e,n,i);if(r===null)Yd(t,e,i,nu,n),ag(t,i);else if(N2(r,t,e,n,i))i.stopPropagation();else if(ag(t,i),e&4&&-1<D2.indexOf(t)){for(;r!==null;){var s=El(r);if(s!==null&&e_(s),s=fh(t,e,n,i),s===null&&Yd(t,e,i,nu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Yd(t,e,i,null,n)}}var nu=null;function fh(t,e,n,i){if(nu=null,t=Vp(i),t=ks(t),t!==null)if(e=Js(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nu=t,null}function s_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E2()){case Gp:return 1;case Kv:return 4;case Qc:case T2:return 16;case Zv:return 536870912;default:return 16}default:return 16}}var $r=null,qp=null,Fc=null;function o_(){if(Fc)return Fc;var t,e=qp,n=e.length,i,r="value"in $r?$r.value:$r.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Fc=r.slice(t,1<i?1-i:void 0)}function kc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Kl(){return!0}function cg(){return!1}function Ri(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Kl:cg,this.isPropagationStopped=cg,this}return dn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),e}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yp=Ri(sa),Sl=dn({},sa,{view:0,detail:0}),O2=Ri(Sl),zd,Bd,Sa,Cu=dn({},Sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$p,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sa&&(Sa&&t.type==="mousemove"?(zd=t.screenX-Sa.screenX,Bd=t.screenY-Sa.screenY):Bd=zd=0,Sa=t),zd)},movementY:function(t){return"movementY"in t?t.movementY:Bd}}),ug=Ri(Cu),z2=dn({},Cu,{dataTransfer:0}),B2=Ri(z2),H2=dn({},Sl,{relatedTarget:0}),Hd=Ri(H2),V2=dn({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),G2=Ri(V2),W2=dn({},sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X2=Ri(W2),j2=dn({},sa,{data:0}),dg=Ri(j2),q2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$2[t])?!!e[t]:!1}function $p(){return K2}var Z2=dn({},Sl,{key:function(t){if(t.key){var e=q2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=kc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$p,charCode:function(t){return t.type==="keypress"?kc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?kc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),J2=Ri(Z2),Q2=dn({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fg=Ri(Q2),eM=dn({},Sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$p}),tM=Ri(eM),nM=dn({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),iM=Ri(nM),rM=dn({},Cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sM=Ri(rM),oM=[9,13,27,32],Kp=Ar&&"CompositionEvent"in window,Ga=null;Ar&&"documentMode"in document&&(Ga=document.documentMode);var aM=Ar&&"TextEvent"in window&&!Ga,a_=Ar&&(!Kp||Ga&&8<Ga&&11>=Ga),hg=" ",pg=!1;function l_(t,e){switch(t){case"keyup":return oM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ao=!1;function lM(t,e){switch(t){case"compositionend":return c_(e);case"keypress":return e.which!==32?null:(pg=!0,hg);case"textInput":return t=e.data,t===hg&&pg?null:t;default:return null}}function cM(t,e){if(Ao)return t==="compositionend"||!Kp&&l_(t,e)?(t=o_(),Fc=qp=$r=null,Ao=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return a_&&e.locale!=="ko"?null:e.data;default:return null}}var uM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uM[t.type]:e==="textarea"}function u_(t,e,n,i){Hv(i),e=iu(e,"onChange"),0<e.length&&(n=new Yp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Wa=null,sl=null;function dM(t){M_(t,0)}function Ru(t){var e=Po(t);if(Nv(e))return t}function fM(t,e){if(t==="change")return e}var d_=!1;if(Ar){var Vd;if(Ar){var Gd="oninput"in document;if(!Gd){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),Gd=typeof gg.oninput=="function"}Vd=Gd}else Vd=!1;d_=Vd&&(!document.documentMode||9<document.documentMode)}function vg(){Wa&&(Wa.detachEvent("onpropertychange",f_),sl=Wa=null)}function f_(t){if(t.propertyName==="value"&&Ru(sl)){var e=[];u_(e,sl,t,Vp(t)),Xv(dM,e)}}function hM(t,e,n){t==="focusin"?(vg(),Wa=e,sl=n,Wa.attachEvent("onpropertychange",f_)):t==="focusout"&&vg()}function pM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ru(sl)}function mM(t,e){if(t==="click")return Ru(e)}function gM(t,e){if(t==="input"||t==="change")return Ru(e)}function vM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qi=typeof Object.is=="function"?Object.is:vM;function ol(t,e){if(Qi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Yf.call(e,r)||!Qi(t[r],e[r]))return!1}return!0}function _g(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xg(t,e){var n=_g(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_g(n)}}function h_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?h_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function p_(){for(var t=window,e=Kc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kc(t.document)}return e}function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _M(t){var e=p_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&h_(n.ownerDocument.documentElement,n)){if(i!==null&&Zp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=xg(n,s);var o=xg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xM=Ar&&"documentMode"in document&&11>=document.documentMode,Co=null,hh=null,Xa=null,ph=!1;function yg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ph||Co==null||Co!==Kc(i)||(i=Co,"selectionStart"in i&&Zp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xa&&ol(Xa,i)||(Xa=i,i=iu(hh,"onSelect"),0<i.length&&(e=new Yp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Co)))}function Zl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ro={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},Wd={},m_={};Ar&&(m_=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);function Pu(t){if(Wd[t])return Wd[t];if(!Ro[t])return t;var e=Ro[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in m_)return Wd[t]=e[n];return t}var g_=Pu("animationend"),v_=Pu("animationiteration"),__=Pu("animationstart"),x_=Pu("transitionend"),y_=new Map,Mg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ds(t,e){y_.set(t,e),Zs(e,[t])}for(var Xd=0;Xd<Mg.length;Xd++){var jd=Mg[Xd],yM=jd.toLowerCase(),MM=jd[0].toUpperCase()+jd.slice(1);ds(yM,"on"+MM)}ds(g_,"onAnimationEnd");ds(v_,"onAnimationIteration");ds(__,"onAnimationStart");ds("dblclick","onDoubleClick");ds("focusin","onFocus");ds("focusout","onBlur");ds(x_,"onTransitionEnd");jo("onMouseEnter",["mouseout","mouseover"]);jo("onMouseLeave",["mouseout","mouseover"]);jo("onPointerEnter",["pointerout","pointerover"]);jo("onPointerLeave",["pointerout","pointerover"]);Zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wM=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function wg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,y2(i,e,void 0,t),t.currentTarget=null}function M_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;wg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;wg(r,a,u),s=l}}}if(Jc)throw t=ch,Jc=!1,ch=null,t}function en(t,e){var n=e[xh];n===void 0&&(n=e[xh]=new Set);var i=t+"__bubble";n.has(i)||(w_(e,t,2,!1),n.add(i))}function qd(t,e,n){var i=0;e&&(i|=4),w_(n,t,i,e)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function al(t){if(!t[Jl]){t[Jl]=!0,Rv.forEach(function(n){n!=="selectionchange"&&(wM.has(n)||qd(n,!1,t),qd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Jl]||(e[Jl]=!0,qd("selectionchange",!1,e))}}function w_(t,e,n,i){switch(s_(e)){case 1:var r=F2;break;case 4:r=k2;break;default:r=jp}n=r.bind(null,e,n,t),r=void 0,!lh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Yd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ks(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Xv(function(){var u=s,p=Vp(n),h=[];e:{var m=y_.get(t);if(m!==void 0){var g=Yp,w=t;switch(t){case"keypress":if(kc(n)===0)break e;case"keydown":case"keyup":g=J2;break;case"focusin":w="focus",g=Hd;break;case"focusout":w="blur",g=Hd;break;case"beforeblur":case"afterblur":g=Hd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=B2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=tM;break;case g_:case v_:case __:g=G2;break;case x_:g=iM;break;case"scroll":g=O2;break;case"wheel":g=sM;break;case"copy":case"cut":case"paste":g=X2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=fg}var b=(e&4)!==0,x=!b&&t==="scroll",f=b?m!==null?m+"Capture":null:m;b=[];for(var _=u,y;_!==null;){y=_;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,f!==null&&(E=tl(_,f),E!=null&&b.push(ll(_,E,y)))),x)break;_=_.return}0<b.length&&(m=new g(m,w,null,n,p),h.push({event:m,listeners:b}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==oh&&(w=n.relatedTarget||n.fromElement)&&(ks(w)||w[Cr]))break e;if((g||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?ks(w):null,w!==null&&(x=Js(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(b=ug,E="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(b=fg,E="onPointerLeave",f="onPointerEnter",_="pointer"),x=g==null?m:Po(g),y=w==null?m:Po(w),m=new b(E,_+"leave",g,n,p),m.target=x,m.relatedTarget=y,E=null,ks(p)===u&&(b=new b(f,_+"enter",w,n,p),b.target=y,b.relatedTarget=x,E=b),x=E,g&&w)t:{for(b=g,f=w,_=0,y=b;y;y=co(y))_++;for(y=0,E=f;E;E=co(E))y++;for(;0<_-y;)b=co(b),_--;for(;0<y-_;)f=co(f),y--;for(;_--;){if(b===f||f!==null&&b===f.alternate)break t;b=co(b),f=co(f)}b=null}else b=null;g!==null&&Sg(h,m,g,b,!1),w!==null&&x!==null&&Sg(h,x,w,b,!0)}}e:{if(m=u?Po(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var L=fM;else if(mg(m))if(d_)L=gM;else{L=pM;var D=hM}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=mM);if(L&&(L=L(t,u))){u_(h,L,n,p);break e}D&&D(t,m,u),t==="focusout"&&(D=m._wrapperState)&&D.controlled&&m.type==="number"&&th(m,"number",m.value)}switch(D=u?Po(u):window,t){case"focusin":(mg(D)||D.contentEditable==="true")&&(Co=D,hh=u,Xa=null);break;case"focusout":Xa=hh=Co=null;break;case"mousedown":ph=!0;break;case"contextmenu":case"mouseup":case"dragend":ph=!1,yg(h,n,p);break;case"selectionchange":if(xM)break;case"keydown":case"keyup":yg(h,n,p)}var N;if(Kp)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Ao?l_(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(a_&&n.locale!=="ko"&&(Ao||F!=="onCompositionStart"?F==="onCompositionEnd"&&Ao&&(N=o_()):($r=p,qp="value"in $r?$r.value:$r.textContent,Ao=!0)),D=iu(u,F),0<D.length&&(F=new dg(F,t,null,n,p),h.push({event:F,listeners:D}),N?F.data=N:(N=c_(n),N!==null&&(F.data=N)))),(N=aM?lM(t,n):cM(t,n))&&(u=iu(u,"onBeforeInput"),0<u.length&&(p=new dg("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=N))}M_(h,e)})}function ll(t,e,n){return{instance:t,listener:e,currentTarget:n}}function iu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=tl(t,n),s!=null&&i.unshift(ll(t,s,r)),s=tl(t,e),s!=null&&i.push(ll(t,s,r))),t=t.return}return i}function co(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=tl(n,s),l!=null&&o.unshift(ll(n,l,a))):r||(l=tl(n,s),l!=null&&o.push(ll(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var SM=/\r\n?/g,EM=/\u0000|\uFFFD/g;function Eg(t){return(typeof t=="string"?t:""+t).replace(SM,`
`).replace(EM,"")}function Ql(t,e,n){if(e=Eg(e),Eg(t)!==e&&n)throw Error(Ce(425))}function ru(){}var mh=null,gh=null;function vh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _h=typeof setTimeout=="function"?setTimeout:void 0,TM=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,bM=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(t){return Tg.resolve(null).then(t).catch(AM)}:_h;function AM(t){setTimeout(function(){throw t})}function $d(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),rl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);rl(e)}function es(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oa=Math.random().toString(36).slice(2),sr="__reactFiber$"+oa,cl="__reactProps$"+oa,Cr="__reactContainer$"+oa,xh="__reactEvents$"+oa,CM="__reactListeners$"+oa,RM="__reactHandles$"+oa;function ks(t){var e=t[sr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cr]||n[sr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bg(t);t!==null;){if(n=t[sr])return n;t=bg(t)}return e}t=n,n=t.parentNode}return null}function El(t){return t=t[sr]||t[Cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Po(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Ce(33))}function Iu(t){return t[cl]||null}var yh=[],Io=-1;function fs(t){return{current:t}}function tn(t){0>Io||(t.current=yh[Io],yh[Io]=null,Io--)}function Jt(t,e){Io++,yh[Io]=t.current,t.current=e}var ls={},Jn=fs(ls),hi=fs(!1),Ws=ls;function qo(t,e){var n=t.type.contextTypes;if(!n)return ls;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pi(t){return t=t.childContextTypes,t!=null}function su(){tn(hi),tn(Jn)}function Ag(t,e,n){if(Jn.current!==ls)throw Error(Ce(168));Jt(Jn,e),Jt(hi,n)}function S_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Ce(108,h2(t)||"Unknown",r));return dn({},n,i)}function ou(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ls,Ws=Jn.current,Jt(Jn,t),Jt(hi,hi.current),!0}function Cg(t,e,n){var i=t.stateNode;if(!i)throw Error(Ce(169));n?(t=S_(t,e,Ws),i.__reactInternalMemoizedMergedChildContext=t,tn(hi),tn(Jn),Jt(Jn,t)):tn(hi),Jt(hi,n)}var Mr=null,Lu=!1,Kd=!1;function E_(t){Mr===null?Mr=[t]:Mr.push(t)}function PM(t){Lu=!0,E_(t)}function hs(){if(!Kd&&Mr!==null){Kd=!0;var t=0,e=Gt;try{var n=Mr;for(Gt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mr=null,Lu=!1}catch(r){throw Mr!==null&&(Mr=Mr.slice(t+1)),$v(Gp,hs),r}finally{Gt=e,Kd=!1}}return null}var Lo=[],Do=0,au=null,lu=0,Di=[],Ni=0,Xs=null,wr=1,Sr="";function Is(t,e){Lo[Do++]=lu,Lo[Do++]=au,au=t,lu=e}function T_(t,e,n){Di[Ni++]=wr,Di[Ni++]=Sr,Di[Ni++]=Xs,Xs=t;var i=wr;t=Sr;var r=32-Ki(i)-1;i&=~(1<<r),n+=1;var s=32-Ki(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wr=1<<32-Ki(e)+r|n<<r|i,Sr=s+t}else wr=1<<s|n<<r|i,Sr=t}function Jp(t){t.return!==null&&(Is(t,1),T_(t,1,0))}function Qp(t){for(;t===au;)au=Lo[--Do],Lo[Do]=null,lu=Lo[--Do],Lo[Do]=null;for(;t===Xs;)Xs=Di[--Ni],Di[Ni]=null,Sr=Di[--Ni],Di[Ni]=null,wr=Di[--Ni],Di[Ni]=null}var bi=null,Ti=null,sn=!1,qi=null;function b_(t,e){var n=Ui(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bi=t,Ti=es(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bi=t,Ti=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xs!==null?{id:wr,overflow:Sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ui(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bi=t,Ti=null,!0):!1;default:return!1}}function Mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wh(t){if(sn){var e=Ti;if(e){var n=e;if(!Rg(t,e)){if(Mh(t))throw Error(Ce(418));e=es(n.nextSibling);var i=bi;e&&Rg(t,e)?b_(i,n):(t.flags=t.flags&-4097|2,sn=!1,bi=t)}}else{if(Mh(t))throw Error(Ce(418));t.flags=t.flags&-4097|2,sn=!1,bi=t}}}function Pg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bi=t}function ec(t){if(t!==bi)return!1;if(!sn)return Pg(t),sn=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vh(t.type,t.memoizedProps)),e&&(e=Ti)){if(Mh(t))throw A_(),Error(Ce(418));for(;e;)b_(t,e),e=es(e.nextSibling)}if(Pg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ti=es(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ti=null}}else Ti=bi?es(t.stateNode.nextSibling):null;return!0}function A_(){for(var t=Ti;t;)t=es(t.nextSibling)}function Yo(){Ti=bi=null,sn=!1}function em(t){qi===null?qi=[t]:qi.push(t)}var IM=Ir.ReactCurrentBatchConfig;function Ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Ce(309));var i=n.stateNode}if(!i)throw Error(Ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Ce(284));if(!n._owner)throw Error(Ce(290,t))}return t}function tc(t,e){throw t=Object.prototype.toString.call(e),Error(Ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ig(t){var e=t._init;return e(t._payload)}function C_(t){function e(f,_){if(t){var y=f.deletions;y===null?(f.deletions=[_],f.flags|=16):y.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=rs(f,_),f.index=0,f.sibling=null,f}function s(f,_,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<_?(f.flags|=2,_):y):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,y,E){return _===null||_.tag!==6?(_=rf(y,f.mode,E),_.return=f,_):(_=r(_,y),_.return=f,_)}function l(f,_,y,E){var L=y.type;return L===bo?p(f,_,y.props.children,E,y.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Gr&&Ig(L)===_.type)?(E=r(_,y.props),E.ref=Ea(f,_,y),E.return=f,E):(E=Wc(y.type,y.key,y.props,null,f.mode,E),E.ref=Ea(f,_,y),E.return=f,E)}function u(f,_,y,E){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=sf(y,f.mode,E),_.return=f,_):(_=r(_,y.children||[]),_.return=f,_)}function p(f,_,y,E,L){return _===null||_.tag!==7?(_=Gs(y,f.mode,E,L),_.return=f,_):(_=r(_,y),_.return=f,_)}function h(f,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=rf(""+_,f.mode,y),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wl:return y=Wc(_.type,_.key,_.props,null,f.mode,y),y.ref=Ea(f,null,_),y.return=f,y;case To:return _=sf(_,f.mode,y),_.return=f,_;case Gr:var E=_._init;return h(f,E(_._payload),y)}if(ka(_)||xa(_))return _=Gs(_,f.mode,y,null),_.return=f,_;tc(f,_)}return null}function m(f,_,y,E){var L=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return L!==null?null:a(f,_,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wl:return y.key===L?l(f,_,y,E):null;case To:return y.key===L?u(f,_,y,E):null;case Gr:return L=y._init,m(f,_,L(y._payload),E)}if(ka(y)||xa(y))return L!==null?null:p(f,_,y,E,null);tc(f,y)}return null}function g(f,_,y,E,L){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(y)||null,a(_,f,""+E,L);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Wl:return f=f.get(E.key===null?y:E.key)||null,l(_,f,E,L);case To:return f=f.get(E.key===null?y:E.key)||null,u(_,f,E,L);case Gr:var D=E._init;return g(f,_,y,D(E._payload),L)}if(ka(E)||xa(E))return f=f.get(y)||null,p(_,f,E,L,null);tc(_,E)}return null}function w(f,_,y,E){for(var L=null,D=null,N=_,F=_=0,T=null;N!==null&&F<y.length;F++){N.index>F?(T=N,N=null):T=N.sibling;var M=m(f,N,y[F],E);if(M===null){N===null&&(N=T);break}t&&N&&M.alternate===null&&e(f,N),_=s(M,_,F),D===null?L=M:D.sibling=M,D=M,N=T}if(F===y.length)return n(f,N),sn&&Is(f,F),L;if(N===null){for(;F<y.length;F++)N=h(f,y[F],E),N!==null&&(_=s(N,_,F),D===null?L=N:D.sibling=N,D=N);return sn&&Is(f,F),L}for(N=i(f,N);F<y.length;F++)T=g(N,f,F,y[F],E),T!==null&&(t&&T.alternate!==null&&N.delete(T.key===null?F:T.key),_=s(T,_,F),D===null?L=T:D.sibling=T,D=T);return t&&N.forEach(function(z){return e(f,z)}),sn&&Is(f,F),L}function b(f,_,y,E){var L=xa(y);if(typeof L!="function")throw Error(Ce(150));if(y=L.call(y),y==null)throw Error(Ce(151));for(var D=L=null,N=_,F=_=0,T=null,M=y.next();N!==null&&!M.done;F++,M=y.next()){N.index>F?(T=N,N=null):T=N.sibling;var z=m(f,N,M.value,E);if(z===null){N===null&&(N=T);break}t&&N&&z.alternate===null&&e(f,N),_=s(z,_,F),D===null?L=z:D.sibling=z,D=z,N=T}if(M.done)return n(f,N),sn&&Is(f,F),L;if(N===null){for(;!M.done;F++,M=y.next())M=h(f,M.value,E),M!==null&&(_=s(M,_,F),D===null?L=M:D.sibling=M,D=M);return sn&&Is(f,F),L}for(N=i(f,N);!M.done;F++,M=y.next())M=g(N,f,F,M.value,E),M!==null&&(t&&M.alternate!==null&&N.delete(M.key===null?F:M.key),_=s(M,_,F),D===null?L=M:D.sibling=M,D=M);return t&&N.forEach(function(Y){return e(f,Y)}),sn&&Is(f,F),L}function x(f,_,y,E){if(typeof y=="object"&&y!==null&&y.type===bo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Wl:e:{for(var L=y.key,D=_;D!==null;){if(D.key===L){if(L=y.type,L===bo){if(D.tag===7){n(f,D.sibling),_=r(D,y.props.children),_.return=f,f=_;break e}}else if(D.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Gr&&Ig(L)===D.type){n(f,D.sibling),_=r(D,y.props),_.ref=Ea(f,D,y),_.return=f,f=_;break e}n(f,D);break}else e(f,D);D=D.sibling}y.type===bo?(_=Gs(y.props.children,f.mode,E,y.key),_.return=f,f=_):(E=Wc(y.type,y.key,y.props,null,f.mode,E),E.ref=Ea(f,_,y),E.return=f,f=E)}return o(f);case To:e:{for(D=y.key;_!==null;){if(_.key===D)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(f,_.sibling),_=r(_,y.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=sf(y,f.mode,E),_.return=f,f=_}return o(f);case Gr:return D=y._init,x(f,_,D(y._payload),E)}if(ka(y))return w(f,_,y,E);if(xa(y))return b(f,_,y,E);tc(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,y),_.return=f,f=_):(n(f,_),_=rf(y,f.mode,E),_.return=f,f=_),o(f)):n(f,_)}return x}var $o=C_(!0),R_=C_(!1),cu=fs(null),uu=null,No=null,tm=null;function nm(){tm=No=uu=null}function im(t){var e=cu.current;tn(cu),t._currentValue=e}function Sh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Vo(t,e){uu=t,tm=No=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fi=!0),t.firstContext=null)}function ki(t){var e=t._currentValue;if(tm!==t)if(t={context:t,memoizedValue:e,next:null},No===null){if(uu===null)throw Error(Ce(308));No=t,uu.dependencies={lanes:0,firstContext:t}}else No=No.next=t;return e}var Os=null;function rm(t){Os===null?Os=[t]:Os.push(t)}function P_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,rm(e)):(n.next=r.next,r.next=n),e.interleaved=n,Rr(t,i)}function Rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wr=!1;function sm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ts(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,It&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Rr(t,n)}return r=i.interleaved,r===null?(e.next=e,rm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Rr(t,n)}function Oc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wp(t,n)}}function Lg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function du(t,e,n,i){var r=t.updateQueue;Wr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==o&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,p=u=l=null,a=s;do{var m=a.lane,g=a.eventTime;if((i&m)===m){p!==null&&(p=p.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,b=a;switch(m=e,g=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){h=w.call(g,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,m=typeof w=="function"?w.call(g,h,m):w,m==null)break e;h=dn({},h,m);break e;case 2:Wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=g,l=h):p=p.next=g,o|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(p===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qs|=o,t.lanes=o,t.memoizedState=h}}function Dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Ce(191,r));r.call(i)}}}var Tl={},cr=fs(Tl),ul=fs(Tl),dl=fs(Tl);function zs(t){if(t===Tl)throw Error(Ce(174));return t}function om(t,e){switch(Jt(dl,e),Jt(ul,t),Jt(cr,Tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ih(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ih(e,t)}tn(cr),Jt(cr,e)}function Ko(){tn(cr),tn(ul),tn(dl)}function L_(t){zs(dl.current);var e=zs(cr.current),n=ih(e,t.type);e!==n&&(Jt(ul,t),Jt(cr,n))}function am(t){ul.current===t&&(tn(cr),tn(ul))}var ln=fs(0);function fu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zd=[];function lm(){for(var t=0;t<Zd.length;t++)Zd[t]._workInProgressVersionPrimary=null;Zd.length=0}var zc=Ir.ReactCurrentDispatcher,Jd=Ir.ReactCurrentBatchConfig,js=0,un=null,En=null,Dn=null,hu=!1,ja=!1,fl=0,LM=0;function qn(){throw Error(Ce(321))}function cm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qi(t[n],e[n]))return!1;return!0}function um(t,e,n,i,r,s){if(js=s,un=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zc.current=t===null||t.memoizedState===null?FM:kM,t=n(i,r),ja){s=0;do{if(ja=!1,fl=0,25<=s)throw Error(Ce(301));s+=1,Dn=En=null,e.updateQueue=null,zc.current=OM,t=n(i,r)}while(ja)}if(zc.current=pu,e=En!==null&&En.next!==null,js=0,Dn=En=un=null,hu=!1,e)throw Error(Ce(300));return t}function dm(){var t=fl!==0;return fl=0,t}function ir(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?un.memoizedState=Dn=t:Dn=Dn.next=t,Dn}function Oi(){if(En===null){var t=un.alternate;t=t!==null?t.memoizedState:null}else t=En.next;var e=Dn===null?un.memoizedState:Dn.next;if(e!==null)Dn=e,En=t;else{if(t===null)throw Error(Ce(310));En=t,t={memoizedState:En.memoizedState,baseState:En.baseState,baseQueue:En.baseQueue,queue:En.queue,next:null},Dn===null?un.memoizedState=Dn=t:Dn=Dn.next=t}return Dn}function hl(t,e){return typeof e=="function"?e(t):e}function Qd(t){var e=Oi(),n=e.queue;if(n===null)throw Error(Ce(311));n.lastRenderedReducer=t;var i=En,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var p=u.lane;if((js&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,un.lanes|=p,qs|=p}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Qi(i,e.memoizedState)||(fi=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,un.lanes|=s,qs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ef(t){var e=Oi(),n=e.queue;if(n===null)throw Error(Ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Qi(s,e.memoizedState)||(fi=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function D_(){}function N_(t,e){var n=un,i=Oi(),r=e(),s=!Qi(i.memoizedState,r);if(s&&(i.memoizedState=r,fi=!0),i=i.queue,fm(k_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dn!==null&&Dn.memoizedState.tag&1){if(n.flags|=2048,pl(9,F_.bind(null,n,i,r,e),void 0,null),Un===null)throw Error(Ce(349));js&30||U_(n,e,r)}return r}function U_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=un.updateQueue,e===null?(e={lastEffect:null,stores:null},un.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function F_(t,e,n,i){e.value=n,e.getSnapshot=i,O_(e)&&z_(t)}function k_(t,e,n){return n(function(){O_(e)&&z_(t)})}function O_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qi(t,n)}catch{return!0}}function z_(t){var e=Rr(t,1);e!==null&&Zi(e,t,1,-1)}function Ng(t){var e=ir();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:t},e.queue=t,t=t.dispatch=UM.bind(null,un,t),[e.memoizedState,t]}function pl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=un.updateQueue,e===null?(e={lastEffect:null,stores:null},un.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function B_(){return Oi().memoizedState}function Bc(t,e,n,i){var r=ir();un.flags|=t,r.memoizedState=pl(1|e,n,void 0,i===void 0?null:i)}function Du(t,e,n,i){var r=Oi();i=i===void 0?null:i;var s=void 0;if(En!==null){var o=En.memoizedState;if(s=o.destroy,i!==null&&cm(i,o.deps)){r.memoizedState=pl(e,n,s,i);return}}un.flags|=t,r.memoizedState=pl(1|e,n,s,i)}function Ug(t,e){return Bc(8390656,8,t,e)}function fm(t,e){return Du(2048,8,t,e)}function H_(t,e){return Du(4,2,t,e)}function V_(t,e){return Du(4,4,t,e)}function G_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function W_(t,e,n){return n=n!=null?n.concat([t]):null,Du(4,4,G_.bind(null,e,t),n)}function hm(){}function X_(t,e){var n=Oi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&cm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function j_(t,e){var n=Oi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&cm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function q_(t,e,n){return js&21?(Qi(n,e)||(n=Jv(),un.lanes|=n,qs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fi=!0),t.memoizedState=n)}function DM(t,e){var n=Gt;Gt=n!==0&&4>n?n:4,t(!0);var i=Jd.transition;Jd.transition={};try{t(!1),e()}finally{Gt=n,Jd.transition=i}}function Y_(){return Oi().memoizedState}function NM(t,e,n){var i=is(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$_(t))K_(e,n);else if(n=P_(t,e,n,i),n!==null){var r=ni();Zi(n,t,i,r),Z_(n,e,i)}}function UM(t,e,n){var i=is(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($_(t))K_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Qi(a,o)){var l=e.interleaved;l===null?(r.next=r,rm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=P_(t,e,r,i),n!==null&&(r=ni(),Zi(n,t,i,r),Z_(n,e,i))}}function $_(t){var e=t.alternate;return t===un||e!==null&&e===un}function K_(t,e){ja=hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Z_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wp(t,n)}}var pu={readContext:ki,useCallback:qn,useContext:qn,useEffect:qn,useImperativeHandle:qn,useInsertionEffect:qn,useLayoutEffect:qn,useMemo:qn,useReducer:qn,useRef:qn,useState:qn,useDebugValue:qn,useDeferredValue:qn,useTransition:qn,useMutableSource:qn,useSyncExternalStore:qn,useId:qn,unstable_isNewReconciler:!1},FM={readContext:ki,useCallback:function(t,e){return ir().memoizedState=[t,e===void 0?null:e],t},useContext:ki,useEffect:Ug,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bc(4194308,4,G_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bc(4,2,t,e)},useMemo:function(t,e){var n=ir();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ir();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=NM.bind(null,un,t),[i.memoizedState,t]},useRef:function(t){var e=ir();return t={current:t},e.memoizedState=t},useState:Ng,useDebugValue:hm,useDeferredValue:function(t){return ir().memoizedState=t},useTransition:function(){var t=Ng(!1),e=t[0];return t=DM.bind(null,t[1]),ir().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=un,r=ir();if(sn){if(n===void 0)throw Error(Ce(407));n=n()}else{if(n=e(),Un===null)throw Error(Ce(349));js&30||U_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ug(k_.bind(null,i,s,t),[t]),i.flags|=2048,pl(9,F_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ir(),e=Un.identifierPrefix;if(sn){var n=Sr,i=wr;n=(i&~(1<<32-Ki(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kM={readContext:ki,useCallback:X_,useContext:ki,useEffect:fm,useImperativeHandle:W_,useInsertionEffect:H_,useLayoutEffect:V_,useMemo:j_,useReducer:Qd,useRef:B_,useState:function(){return Qd(hl)},useDebugValue:hm,useDeferredValue:function(t){var e=Oi();return q_(e,En.memoizedState,t)},useTransition:function(){var t=Qd(hl)[0],e=Oi().memoizedState;return[t,e]},useMutableSource:D_,useSyncExternalStore:N_,useId:Y_,unstable_isNewReconciler:!1},OM={readContext:ki,useCallback:X_,useContext:ki,useEffect:fm,useImperativeHandle:W_,useInsertionEffect:H_,useLayoutEffect:V_,useMemo:j_,useReducer:ef,useRef:B_,useState:function(){return ef(hl)},useDebugValue:hm,useDeferredValue:function(t){var e=Oi();return En===null?e.memoizedState=t:q_(e,En.memoizedState,t)},useTransition:function(){var t=ef(hl)[0],e=Oi().memoizedState;return[t,e]},useMutableSource:D_,useSyncExternalStore:N_,useId:Y_,unstable_isNewReconciler:!1};function Xi(t,e){if(t&&t.defaultProps){e=dn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Eh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nu={isMounted:function(t){return(t=t._reactInternals)?Js(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ni(),r=is(t),s=Tr(i,r);s.payload=e,n!=null&&(s.callback=n),e=ts(t,s,r),e!==null&&(Zi(e,t,r,i),Oc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ni(),r=is(t),s=Tr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ts(t,s,r),e!==null&&(Zi(e,t,r,i),Oc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ni(),i=is(t),r=Tr(n,i);r.tag=2,e!=null&&(r.callback=e),e=ts(t,r,i),e!==null&&(Zi(e,t,i,n),Oc(e,t,i))}};function Fg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ol(n,i)||!ol(r,s):!0}function J_(t,e,n){var i=!1,r=ls,s=e.contextType;return typeof s=="object"&&s!==null?s=ki(s):(r=pi(e)?Ws:Jn.current,i=e.contextTypes,s=(i=i!=null)?qo(t,r):ls),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function kg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nu.enqueueReplaceState(e,e.state,null)}function Th(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},sm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ki(s):(s=pi(e)?Ws:Jn.current,r.context=qo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Eh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nu.enqueueReplaceState(r,r.state,null),du(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zo(t,e){try{var n="",i=e;do n+=f2(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function tf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zM=typeof WeakMap=="function"?WeakMap:Map;function Q_(t,e,n){n=Tr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){gu||(gu=!0,Fh=i),bh(t,e)},n}function ex(t,e,n){n=Tr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){bh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bh(t,e),typeof i!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Og(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new zM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=QM.bind(null,t,e,n),e.then(t,t))}function zg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tr(-1,1),e.tag=2,ts(n,e,1))),n.lanes|=1),t)}var BM=Ir.ReactCurrentOwner,fi=!1;function ti(t,e,n,i){e.child=t===null?R_(e,null,n,i):$o(e,t.child,n,i)}function Hg(t,e,n,i,r){n=n.render;var s=e.ref;return Vo(e,r),i=um(t,e,n,i,s,r),n=dm(),t!==null&&!fi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pr(t,e,r)):(sn&&n&&Jp(e),e.flags|=1,ti(t,e,i,r),e.child)}function Vg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Mm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tx(t,e,s,i,r)):(t=Wc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ol,n(o,i)&&t.ref===e.ref)return Pr(t,e,r)}return e.flags|=1,t=rs(s,i),t.ref=e.ref,t.return=e,e.child=t}function tx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ol(s,i)&&t.ref===e.ref)if(fi=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fi=!0);else return e.lanes=t.lanes,Pr(t,e,r)}return Ah(t,e,n,i,r)}function nx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Jt(Fo,Si),Si|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Jt(Fo,Si),Si|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Jt(Fo,Si),Si|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Jt(Fo,Si),Si|=i;return ti(t,e,r,n),e.child}function ix(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ah(t,e,n,i,r){var s=pi(n)?Ws:Jn.current;return s=qo(e,s),Vo(e,r),n=um(t,e,n,i,s,r),i=dm(),t!==null&&!fi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pr(t,e,r)):(sn&&i&&Jp(e),e.flags|=1,ti(t,e,n,r),e.child)}function Gg(t,e,n,i,r){if(pi(n)){var s=!0;ou(e)}else s=!1;if(Vo(e,r),e.stateNode===null)Hc(t,e),J_(e,n,i),Th(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ki(u):(u=pi(n)?Ws:Jn.current,u=qo(e,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&kg(e,o,i,u),Wr=!1;var m=e.memoizedState;o.state=m,du(e,i,o,r),l=e.memoizedState,a!==i||m!==l||hi.current||Wr?(typeof p=="function"&&(Eh(e,n,p,i),l=e.memoizedState),(a=Wr||Fg(e,n,a,i,m,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,I_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Xi(e.type,a),o.props=u,h=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ki(l):(l=pi(n)?Ws:Jn.current,l=qo(e,l));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||m!==l)&&kg(e,o,i,l),Wr=!1,m=e.memoizedState,o.state=m,du(e,i,o,r);var w=e.memoizedState;a!==h||m!==w||hi.current||Wr?(typeof g=="function"&&(Eh(e,n,g,i),w=e.memoizedState),(u=Wr||Fg(e,n,u,i,m,w,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=w),o.props=i,o.state=w,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),i=!1)}return Ch(t,e,n,i,s,r)}function Ch(t,e,n,i,r,s){ix(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Cg(e,n,!1),Pr(t,e,s);i=e.stateNode,BM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=$o(e,t.child,null,s),e.child=$o(e,null,a,s)):ti(t,e,a,s),e.memoizedState=i.state,r&&Cg(e,n,!0),e.child}function rx(t){var e=t.stateNode;e.pendingContext?Ag(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ag(t,e.context,!1),om(t,e.containerInfo)}function Wg(t,e,n,i,r){return Yo(),em(r),e.flags|=256,ti(t,e,n,i),e.child}var Rh={dehydrated:null,treeContext:null,retryLane:0};function Ph(t){return{baseLanes:t,cachePool:null,transitions:null}}function sx(t,e,n){var i=e.pendingProps,r=ln.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Jt(ln,r&1),t===null)return wh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ku(o,i,0,null),t=Gs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ph(n),e.memoizedState=Rh,t):pm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return HM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=rs(a,s):(s=Gs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ph(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rh,i}return s=t.child,t=s.sibling,i=rs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function pm(t,e){return e=ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function nc(t,e,n,i){return i!==null&&em(i),$o(e,t.child,null,n),t=pm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=tf(Error(Ce(422))),nc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ku({mode:"visible",children:i.children},r,0,null),s=Gs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&$o(e,t.child,null,o),e.child.memoizedState=Ph(o),e.memoizedState=Rh,s);if(!(e.mode&1))return nc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Ce(419)),i=tf(s,i,void 0),nc(t,e,o,i)}if(a=(o&t.childLanes)!==0,fi||a){if(i=Un,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Rr(t,r),Zi(i,t,r,-1))}return ym(),i=tf(Error(Ce(421))),nc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ew.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ti=es(r.nextSibling),bi=e,sn=!0,qi=null,t!==null&&(Di[Ni++]=wr,Di[Ni++]=Sr,Di[Ni++]=Xs,wr=t.id,Sr=t.overflow,Xs=e),e=pm(e,i.children),e.flags|=4096,e)}function Xg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Sh(t.return,e,n)}function nf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ox(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ti(t,e,i.children,n),i=ln.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xg(t,n,e);else if(t.tag===19)Xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Jt(ln,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&fu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),nf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&fu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}nf(e,!0,n,null,s);break;case"together":nf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Ce(153));if(e.child!==null){for(t=e.child,n=rs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VM(t,e,n){switch(e.tag){case 3:rx(e),Yo();break;case 5:L_(e);break;case 1:pi(e.type)&&ou(e);break;case 4:om(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Jt(cu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Jt(ln,ln.current&1),e.flags|=128,null):n&e.child.childLanes?sx(t,e,n):(Jt(ln,ln.current&1),t=Pr(t,e,n),t!==null?t.sibling:null);Jt(ln,ln.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ox(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Jt(ln,ln.current),i)break;return null;case 22:case 23:return e.lanes=0,nx(t,e,n)}return Pr(t,e,n)}var ax,Ih,lx,cx;ax=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ih=function(){};lx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zs(cr.current);var s=null;switch(n){case"input":r=Qf(t,r),i=Qf(t,i),s=[];break;case"select":r=dn({},r,{value:void 0}),i=dn({},i,{value:void 0}),s=[];break;case"textarea":r=nh(t,r),i=nh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ru)}rh(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&en("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};cx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ta(t,e){if(!sn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function GM(t,e,n){var i=e.pendingProps;switch(Qp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yn(e),null;case 1:return pi(e.type)&&su(),Yn(e),null;case 3:return i=e.stateNode,Ko(),tn(hi),tn(Jn),lm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ec(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qi!==null&&(zh(qi),qi=null))),Ih(t,e),Yn(e),null;case 5:am(e);var r=zs(dl.current);if(n=e.type,t!==null&&e.stateNode!=null)lx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Ce(166));return Yn(e),null}if(t=zs(cr.current),ec(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[sr]=e,i[cl]=s,t=(e.mode&1)!==0,n){case"dialog":en("cancel",i),en("close",i);break;case"iframe":case"object":case"embed":en("load",i);break;case"video":case"audio":for(r=0;r<za.length;r++)en(za[r],i);break;case"source":en("error",i);break;case"img":case"image":case"link":en("error",i),en("load",i);break;case"details":en("toggle",i);break;case"input":eg(i,s),en("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},en("invalid",i);break;case"textarea":ng(i,s),en("invalid",i)}rh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ql(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ql(i.textContent,a,t),r=["children",""+a]):Qa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&en("scroll",i)}switch(n){case"input":Xl(i),tg(i,s,!0);break;case"textarea":Xl(i),ig(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ru)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[sr]=e,t[cl]=i,ax(t,e,!1,!1),e.stateNode=t;e:{switch(o=sh(n,i),n){case"dialog":en("cancel",t),en("close",t),r=i;break;case"iframe":case"object":case"embed":en("load",t),r=i;break;case"video":case"audio":for(r=0;r<za.length;r++)en(za[r],t);r=i;break;case"source":en("error",t),r=i;break;case"img":case"image":case"link":en("error",t),en("load",t),r=i;break;case"details":en("toggle",t),r=i;break;case"input":eg(t,i),r=Qf(t,i),en("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dn({},i,{value:void 0}),en("invalid",t);break;case"textarea":ng(t,i),r=nh(t,i),en("invalid",t);break;default:r=i}rh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Bv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ov(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&el(t,l):typeof l=="number"&&el(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&en("scroll",t):l!=null&&Op(t,s,l,o))}switch(n){case"input":Xl(t),tg(t,i,!1);break;case"textarea":Xl(t),ig(t);break;case"option":i.value!=null&&t.setAttribute("value",""+as(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Oo(t,!!i.multiple,s,!1):i.defaultValue!=null&&Oo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ru)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yn(e),null;case 6:if(t&&e.stateNode!=null)cx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Ce(166));if(n=zs(dl.current),zs(cr.current),ec(e)){if(i=e.stateNode,n=e.memoizedProps,i[sr]=e,(s=i.nodeValue!==n)&&(t=bi,t!==null))switch(t.tag){case 3:Ql(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ql(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[sr]=e,e.stateNode=i}return Yn(e),null;case 13:if(tn(ln),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(sn&&Ti!==null&&e.mode&1&&!(e.flags&128))A_(),Yo(),e.flags|=98560,s=!1;else if(s=ec(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Ce(317));s[sr]=e}else Yo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yn(e),s=!1}else qi!==null&&(zh(qi),qi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ln.current&1?Tn===0&&(Tn=3):ym())),e.updateQueue!==null&&(e.flags|=4),Yn(e),null);case 4:return Ko(),Ih(t,e),t===null&&al(e.stateNode.containerInfo),Yn(e),null;case 10:return im(e.type._context),Yn(e),null;case 17:return pi(e.type)&&su(),Yn(e),null;case 19:if(tn(ln),s=e.memoizedState,s===null)return Yn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ta(s,!1);else{if(Tn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fu(t),o!==null){for(e.flags|=128,Ta(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Jt(ln,ln.current&1|2),e.child}t=t.sibling}s.tail!==null&&mn()>Jo&&(e.flags|=128,i=!0,Ta(s,!1),e.lanes=4194304)}else{if(!i)if(t=fu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!sn)return Yn(e),null}else 2*mn()-s.renderingStartTime>Jo&&n!==1073741824&&(e.flags|=128,i=!0,Ta(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mn(),e.sibling=null,n=ln.current,Jt(ln,i?n&1|2:n&1),e):(Yn(e),null);case 22:case 23:return xm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Si&1073741824&&(Yn(e),e.subtreeFlags&6&&(e.flags|=8192)):Yn(e),null;case 24:return null;case 25:return null}throw Error(Ce(156,e.tag))}function WM(t,e){switch(Qp(e),e.tag){case 1:return pi(e.type)&&su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ko(),tn(hi),tn(Jn),lm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return am(e),null;case 13:if(tn(ln),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Ce(340));Yo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tn(ln),null;case 4:return Ko(),null;case 10:return im(e.type._context),null;case 22:case 23:return xm(),null;case 24:return null;default:return null}}var ic=!1,Zn=!1,XM=typeof WeakSet=="function"?WeakSet:Set,We=null;function Uo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pn(t,e,i)}else n.current=null}function Lh(t,e,n){try{n()}catch(i){pn(t,e,i)}}var jg=!1;function jM(t,e){if(mh=tu,t=p_(),Zp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,p=0,h=t,m=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===t)break t;if(m===n&&++u===r&&(a=o),m===s&&++p===i&&(l=o),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gh={focusedElem:t,selectionRange:n},tu=!1,We=e;We!==null;)if(e=We,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,We=t;else for(;We!==null;){e=We;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,x=w.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?b:Xi(e.type,b),x);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Ce(163))}}catch(E){pn(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,We=t;break}We=e.return}return w=jg,jg=!1,w}function qa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Lh(e,n,s)}r=r.next}while(r!==i)}}function Uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Dh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ux(t){var e=t.alternate;e!==null&&(t.alternate=null,ux(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sr],delete e[cl],delete e[xh],delete e[CM],delete e[RM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dx(t){return t.tag===5||t.tag===3||t.tag===4}function qg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ru));else if(i!==4&&(t=t.child,t!==null))for(Nh(t,e,n),t=t.sibling;t!==null;)Nh(t,e,n),t=t.sibling}function Uh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Uh(t,e,n),t=t.sibling;t!==null;)Uh(t,e,n),t=t.sibling}var Vn=null,ji=!1;function Ur(t,e,n){for(n=n.child;n!==null;)fx(t,e,n),n=n.sibling}function fx(t,e,n){if(lr&&typeof lr.onCommitFiberUnmount=="function")try{lr.onCommitFiberUnmount(Au,n)}catch{}switch(n.tag){case 5:Zn||Uo(n,e);case 6:var i=Vn,r=ji;Vn=null,Ur(t,e,n),Vn=i,ji=r,Vn!==null&&(ji?(t=Vn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vn.removeChild(n.stateNode));break;case 18:Vn!==null&&(ji?(t=Vn,n=n.stateNode,t.nodeType===8?$d(t.parentNode,n):t.nodeType===1&&$d(t,n),rl(t)):$d(Vn,n.stateNode));break;case 4:i=Vn,r=ji,Vn=n.stateNode.containerInfo,ji=!0,Ur(t,e,n),Vn=i,ji=r;break;case 0:case 11:case 14:case 15:if(!Zn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lh(n,e,o),r=r.next}while(r!==i)}Ur(t,e,n);break;case 1:if(!Zn&&(Uo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pn(n,e,a)}Ur(t,e,n);break;case 21:Ur(t,e,n);break;case 22:n.mode&1?(Zn=(i=Zn)||n.memoizedState!==null,Ur(t,e,n),Zn=i):Ur(t,e,n);break;default:Ur(t,e,n)}}function Yg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new XM),e.forEach(function(i){var r=tw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vn=a.stateNode,ji=!1;break e;case 3:Vn=a.stateNode.containerInfo,ji=!0;break e;case 4:Vn=a.stateNode.containerInfo,ji=!0;break e}a=a.return}if(Vn===null)throw Error(Ce(160));fx(s,o,r),Vn=null,ji=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){pn(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hx(e,t),e=e.sibling}function hx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bi(e,t),nr(t),i&4){try{qa(3,t,t.return),Uu(3,t)}catch(b){pn(t,t.return,b)}try{qa(5,t,t.return)}catch(b){pn(t,t.return,b)}}break;case 1:Bi(e,t),nr(t),i&512&&n!==null&&Uo(n,n.return);break;case 5:if(Bi(e,t),nr(t),i&512&&n!==null&&Uo(n,n.return),t.flags&32){var r=t.stateNode;try{el(r,"")}catch(b){pn(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Uv(r,s),sh(a,o);var u=sh(a,s);for(o=0;o<l.length;o+=2){var p=l[o],h=l[o+1];p==="style"?Bv(r,h):p==="dangerouslySetInnerHTML"?Ov(r,h):p==="children"?el(r,h):Op(r,p,h,u)}switch(a){case"input":eh(r,s);break;case"textarea":Fv(r,s);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Oo(r,!!s.multiple,g,!1):m!==!!s.multiple&&(s.defaultValue!=null?Oo(r,!!s.multiple,s.defaultValue,!0):Oo(r,!!s.multiple,s.multiple?[]:"",!1))}r[cl]=s}catch(b){pn(t,t.return,b)}}break;case 6:if(Bi(e,t),nr(t),i&4){if(t.stateNode===null)throw Error(Ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(b){pn(t,t.return,b)}}break;case 3:if(Bi(e,t),nr(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{rl(e.containerInfo)}catch(b){pn(t,t.return,b)}break;case 4:Bi(e,t),nr(t);break;case 13:Bi(e,t),nr(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(vm=mn())),i&4&&Yg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Zn=(u=Zn)||p,Bi(e,t),Zn=u):Bi(e,t),nr(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!p&&t.mode&1)for(We=t,p=t.child;p!==null;){for(h=We=p;We!==null;){switch(m=We,g=m.child,m.tag){case 0:case 11:case 14:case 15:qa(4,m,m.return);break;case 1:Uo(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){i=m,n=m.return;try{e=i,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(b){pn(i,n,b)}}break;case 5:Uo(m,m.return);break;case 22:if(m.memoizedState!==null){Kg(h);continue}}g!==null?(g.return=m,We=g):Kg(h)}p=p.sibling}e:for(p=null,h=t;;){if(h.tag===5){if(p===null){p=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=zv("display",o))}catch(b){pn(t,t.return,b)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(b){pn(t,t.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Bi(e,t),nr(t),i&4&&Yg(t);break;case 21:break;default:Bi(e,t),nr(t)}}function nr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dx(n)){var i=n;break e}n=n.return}throw Error(Ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(el(r,""),i.flags&=-33);var s=qg(t);Uh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=qg(t);Nh(t,a,o);break;default:throw Error(Ce(161))}}catch(l){pn(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qM(t,e,n){We=t,px(t)}function px(t,e,n){for(var i=(t.mode&1)!==0;We!==null;){var r=We,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ic;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zn;a=ic;var u=Zn;if(ic=o,(Zn=l)&&!u)for(We=r;We!==null;)o=We,l=o.child,o.tag===22&&o.memoizedState!==null?Zg(r):l!==null?(l.return=o,We=l):Zg(r);for(;s!==null;)We=s,px(s),s=s.sibling;We=r,ic=a,Zn=u}$g(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,We=s):$g(t)}}function $g(t){for(;We!==null;){var e=We;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zn||Uu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&rl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Ce(163))}Zn||e.flags&512&&Dh(e)}catch(m){pn(e,e.return,m)}}if(e===t){We=null;break}if(n=e.sibling,n!==null){n.return=e.return,We=n;break}We=e.return}}function Kg(t){for(;We!==null;){var e=We;if(e===t){We=null;break}var n=e.sibling;if(n!==null){n.return=e.return,We=n;break}We=e.return}}function Zg(t){for(;We!==null;){var e=We;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uu(4,e)}catch(l){pn(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pn(e,r,l)}}var s=e.return;try{Dh(e)}catch(l){pn(e,s,l)}break;case 5:var o=e.return;try{Dh(e)}catch(l){pn(e,o,l)}}}catch(l){pn(e,e.return,l)}if(e===t){We=null;break}var a=e.sibling;if(a!==null){a.return=e.return,We=a;break}We=e.return}}var YM=Math.ceil,mu=Ir.ReactCurrentDispatcher,mm=Ir.ReactCurrentOwner,Fi=Ir.ReactCurrentBatchConfig,It=0,Un=null,xn=null,Wn=0,Si=0,Fo=fs(0),Tn=0,ml=null,qs=0,Fu=0,gm=0,Ya=null,di=null,vm=0,Jo=1/0,yr=null,gu=!1,Fh=null,ns=null,rc=!1,Kr=null,vu=0,$a=0,kh=null,Vc=-1,Gc=0;function ni(){return It&6?mn():Vc!==-1?Vc:Vc=mn()}function is(t){return t.mode&1?It&2&&Wn!==0?Wn&-Wn:IM.transition!==null?(Gc===0&&(Gc=Jv()),Gc):(t=Gt,t!==0||(t=window.event,t=t===void 0?16:s_(t.type)),t):1}function Zi(t,e,n,i){if(50<$a)throw $a=0,kh=null,Error(Ce(185));wl(t,n,i),(!(It&2)||t!==Un)&&(t===Un&&(!(It&2)&&(Fu|=n),Tn===4&&jr(t,Wn)),mi(t,i),n===1&&It===0&&!(e.mode&1)&&(Jo=mn()+500,Lu&&hs()))}function mi(t,e){var n=t.callbackNode;I2(t,e);var i=eu(t,t===Un?Wn:0);if(i===0)n!==null&&og(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&og(n),e===1)t.tag===0?PM(Jg.bind(null,t)):E_(Jg.bind(null,t)),bM(function(){!(It&6)&&hs()}),n=null;else{switch(Qv(i)){case 1:n=Gp;break;case 4:n=Kv;break;case 16:n=Qc;break;case 536870912:n=Zv;break;default:n=Qc}n=wx(n,mx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mx(t,e){if(Vc=-1,Gc=0,It&6)throw Error(Ce(327));var n=t.callbackNode;if(Go()&&t.callbackNode!==n)return null;var i=eu(t,t===Un?Wn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=_u(t,i);else{e=i;var r=It;It|=2;var s=vx();(Un!==t||Wn!==e)&&(yr=null,Jo=mn()+500,Vs(t,e));do try{ZM();break}catch(a){gx(t,a)}while(!0);nm(),mu.current=s,It=r,xn!==null?e=0:(Un=null,Wn=0,e=Tn)}if(e!==0){if(e===2&&(r=uh(t),r!==0&&(i=r,e=Oh(t,r))),e===1)throw n=ml,Vs(t,0),jr(t,i),mi(t,mn()),n;if(e===6)jr(t,i);else{if(r=t.current.alternate,!(i&30)&&!$M(r)&&(e=_u(t,i),e===2&&(s=uh(t),s!==0&&(i=s,e=Oh(t,s))),e===1))throw n=ml,Vs(t,0),jr(t,i),mi(t,mn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Ce(345));case 2:Ls(t,di,yr);break;case 3:if(jr(t,i),(i&130023424)===i&&(e=vm+500-mn(),10<e)){if(eu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ni(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=_h(Ls.bind(null,t,di,yr),e);break}Ls(t,di,yr);break;case 4:if(jr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ki(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=mn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*YM(i/1960))-i,10<i){t.timeoutHandle=_h(Ls.bind(null,t,di,yr),i);break}Ls(t,di,yr);break;case 5:Ls(t,di,yr);break;default:throw Error(Ce(329))}}}return mi(t,mn()),t.callbackNode===n?mx.bind(null,t):null}function Oh(t,e){var n=Ya;return t.current.memoizedState.isDehydrated&&(Vs(t,e).flags|=256),t=_u(t,e),t!==2&&(e=di,di=n,e!==null&&zh(e)),t}function zh(t){di===null?di=t:di.push.apply(di,t)}function $M(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jr(t,e){for(e&=~gm,e&=~Fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ki(e),i=1<<n;t[n]=-1,e&=~i}}function Jg(t){if(It&6)throw Error(Ce(327));Go();var e=eu(t,0);if(!(e&1))return mi(t,mn()),null;var n=_u(t,e);if(t.tag!==0&&n===2){var i=uh(t);i!==0&&(e=i,n=Oh(t,i))}if(n===1)throw n=ml,Vs(t,0),jr(t,e),mi(t,mn()),n;if(n===6)throw Error(Ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ls(t,di,yr),mi(t,mn()),null}function _m(t,e){var n=It;It|=1;try{return t(e)}finally{It=n,It===0&&(Jo=mn()+500,Lu&&hs())}}function Ys(t){Kr!==null&&Kr.tag===0&&!(It&6)&&Go();var e=It;It|=1;var n=Fi.transition,i=Gt;try{if(Fi.transition=null,Gt=1,t)return t()}finally{Gt=i,Fi.transition=n,It=e,!(It&6)&&hs()}}function xm(){Si=Fo.current,tn(Fo)}function Vs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TM(n)),xn!==null)for(n=xn.return;n!==null;){var i=n;switch(Qp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&su();break;case 3:Ko(),tn(hi),tn(Jn),lm();break;case 5:am(i);break;case 4:Ko();break;case 13:tn(ln);break;case 19:tn(ln);break;case 10:im(i.type._context);break;case 22:case 23:xm()}n=n.return}if(Un=t,xn=t=rs(t.current,null),Wn=Si=e,Tn=0,ml=null,gm=Fu=qs=0,di=Ya=null,Os!==null){for(e=0;e<Os.length;e++)if(n=Os[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Os=null}return t}function gx(t,e){do{var n=xn;try{if(nm(),zc.current=pu,hu){for(var i=un.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hu=!1}if(js=0,Dn=En=un=null,ja=!1,fl=0,mm.current=null,n===null||n.return===null){Tn=1,ml=e,xn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=a,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=zg(o);if(g!==null){g.flags&=-257,Bg(g,o,a,s,e),g.mode&1&&Og(s,u,e),e=g,l=u;var w=e.updateQueue;if(w===null){var b=new Set;b.add(l),e.updateQueue=b}else w.add(l);break e}else{if(!(e&1)){Og(s,u,e),ym();break e}l=Error(Ce(426))}}else if(sn&&a.mode&1){var x=zg(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Bg(x,o,a,s,e),em(Zo(l,a));break e}}s=l=Zo(l,a),Tn!==4&&(Tn=2),Ya===null?Ya=[s]:Ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Q_(s,l,e);Lg(s,f);break e;case 1:a=l;var _=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ns===null||!ns.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=ex(s,a,e);Lg(s,E);break e}}s=s.return}while(s!==null)}xx(n)}catch(L){e=L,xn===n&&n!==null&&(xn=n=n.return);continue}break}while(!0)}function vx(){var t=mu.current;return mu.current=pu,t===null?pu:t}function ym(){(Tn===0||Tn===3||Tn===2)&&(Tn=4),Un===null||!(qs&268435455)&&!(Fu&268435455)||jr(Un,Wn)}function _u(t,e){var n=It;It|=2;var i=vx();(Un!==t||Wn!==e)&&(yr=null,Vs(t,e));do try{KM();break}catch(r){gx(t,r)}while(!0);if(nm(),It=n,mu.current=i,xn!==null)throw Error(Ce(261));return Un=null,Wn=0,Tn}function KM(){for(;xn!==null;)_x(xn)}function ZM(){for(;xn!==null&&!w2();)_x(xn)}function _x(t){var e=Mx(t.alternate,t,Si);t.memoizedProps=t.pendingProps,e===null?xx(t):xn=e,mm.current=null}function xx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=WM(n,e),n!==null){n.flags&=32767,xn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tn=6,xn=null;return}}else if(n=GM(n,e,Si),n!==null){xn=n;return}if(e=e.sibling,e!==null){xn=e;return}xn=e=t}while(e!==null);Tn===0&&(Tn=5)}function Ls(t,e,n){var i=Gt,r=Fi.transition;try{Fi.transition=null,Gt=1,JM(t,e,n,i)}finally{Fi.transition=r,Gt=i}return null}function JM(t,e,n,i){do Go();while(Kr!==null);if(It&6)throw Error(Ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(L2(t,s),t===Un&&(xn=Un=null,Wn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rc||(rc=!0,wx(Qc,function(){return Go(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fi.transition,Fi.transition=null;var o=Gt;Gt=1;var a=It;It|=4,mm.current=null,jM(t,n),hx(n,t),_M(gh),tu=!!mh,gh=mh=null,t.current=n,qM(n),S2(),It=a,Gt=o,Fi.transition=s}else t.current=n;if(rc&&(rc=!1,Kr=t,vu=r),s=t.pendingLanes,s===0&&(ns=null),b2(n.stateNode),mi(t,mn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(gu)throw gu=!1,t=Fh,Fh=null,t;return vu&1&&t.tag!==0&&Go(),s=t.pendingLanes,s&1?t===kh?$a++:($a=0,kh=t):$a=0,hs(),null}function Go(){if(Kr!==null){var t=Qv(vu),e=Fi.transition,n=Gt;try{if(Fi.transition=null,Gt=16>t?16:t,Kr===null)var i=!1;else{if(t=Kr,Kr=null,vu=0,It&6)throw Error(Ce(331));var r=It;for(It|=4,We=t.current;We!==null;){var s=We,o=s.child;if(We.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(We=u;We!==null;){var p=We;switch(p.tag){case 0:case 11:case 15:qa(8,p,s)}var h=p.child;if(h!==null)h.return=p,We=h;else for(;We!==null;){p=We;var m=p.sibling,g=p.return;if(ux(p),p===u){We=null;break}if(m!==null){m.return=g,We=m;break}We=g}}}var w=s.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var x=b.sibling;b.sibling=null,b=x}while(b!==null)}}We=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,We=o;else e:for(;We!==null;){if(s=We,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,We=f;break e}We=s.return}}var _=t.current;for(We=_;We!==null;){o=We;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,We=y;else e:for(o=_;We!==null;){if(a=We,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Uu(9,a)}}catch(L){pn(a,a.return,L)}if(a===o){We=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,We=E;break e}We=a.return}}if(It=r,hs(),lr&&typeof lr.onPostCommitFiberRoot=="function")try{lr.onPostCommitFiberRoot(Au,t)}catch{}i=!0}return i}finally{Gt=n,Fi.transition=e}}return!1}function Qg(t,e,n){e=Zo(n,e),e=Q_(t,e,1),t=ts(t,e,1),e=ni(),t!==null&&(wl(t,1,e),mi(t,e))}function pn(t,e,n){if(t.tag===3)Qg(t,t,n);else for(;e!==null;){if(e.tag===3){Qg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ns===null||!ns.has(i))){t=Zo(n,t),t=ex(e,t,1),e=ts(e,t,1),t=ni(),e!==null&&(wl(e,1,t),mi(e,t));break}}e=e.return}}function QM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ni(),t.pingedLanes|=t.suspendedLanes&n,Un===t&&(Wn&n)===n&&(Tn===4||Tn===3&&(Wn&130023424)===Wn&&500>mn()-vm?Vs(t,0):gm|=n),mi(t,e)}function yx(t,e){e===0&&(t.mode&1?(e=Yl,Yl<<=1,!(Yl&130023424)&&(Yl=4194304)):e=1);var n=ni();t=Rr(t,e),t!==null&&(wl(t,e,n),mi(t,n))}function ew(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yx(t,n)}function tw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Ce(314))}i!==null&&i.delete(e),yx(t,n)}var Mx;Mx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hi.current)fi=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fi=!1,VM(t,e,n);fi=!!(t.flags&131072)}else fi=!1,sn&&e.flags&1048576&&T_(e,lu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Hc(t,e),t=e.pendingProps;var r=qo(e,Jn.current);Vo(e,n),r=um(null,e,i,t,r,n);var s=dm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pi(i)?(s=!0,ou(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,sm(e),r.updater=Nu,e.stateNode=r,r._reactInternals=e,Th(e,i,t,n),e=Ch(null,e,i,!0,s,n)):(e.tag=0,sn&&s&&Jp(e),ti(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Hc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=iw(i),t=Xi(i,t),r){case 0:e=Ah(null,e,i,t,n);break e;case 1:e=Gg(null,e,i,t,n);break e;case 11:e=Hg(null,e,i,t,n);break e;case 14:e=Vg(null,e,i,Xi(i.type,t),n);break e}throw Error(Ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),Ah(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),Gg(t,e,i,r,n);case 3:e:{if(rx(e),t===null)throw Error(Ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,I_(t,e),du(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zo(Error(Ce(423)),e),e=Wg(t,e,i,n,r);break e}else if(i!==r){r=Zo(Error(Ce(424)),e),e=Wg(t,e,i,n,r);break e}else for(Ti=es(e.stateNode.containerInfo.firstChild),bi=e,sn=!0,qi=null,n=R_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yo(),i===r){e=Pr(t,e,n);break e}ti(t,e,i,n)}e=e.child}return e;case 5:return L_(e),t===null&&wh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,vh(i,r)?o=null:s!==null&&vh(i,s)&&(e.flags|=32),ix(t,e),ti(t,e,o,n),e.child;case 6:return t===null&&wh(e),null;case 13:return sx(t,e,n);case 4:return om(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=$o(e,null,i,n):ti(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),Hg(t,e,i,r,n);case 7:return ti(t,e,e.pendingProps,n),e.child;case 8:return ti(t,e,e.pendingProps.children,n),e.child;case 12:return ti(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Jt(cu,i._currentValue),i._currentValue=o,s!==null)if(Qi(s.value,o)){if(s.children===r.children&&!hi.current){e=Pr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Tr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ti(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vo(e,n),r=ki(r),i=i(r),e.flags|=1,ti(t,e,i,n),e.child;case 14:return i=e.type,r=Xi(i,e.pendingProps),r=Xi(i.type,r),Vg(t,e,i,r,n);case 15:return tx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),Hc(t,e),e.tag=1,pi(i)?(t=!0,ou(e)):t=!1,Vo(e,n),J_(e,i,r),Th(e,i,r,n),Ch(null,e,i,!0,t,n);case 19:return ox(t,e,n);case 22:return nx(t,e,n)}throw Error(Ce(156,e.tag))};function wx(t,e){return $v(t,e)}function nw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ui(t,e,n,i){return new nw(t,e,n,i)}function Mm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iw(t){if(typeof t=="function")return Mm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bp)return 11;if(t===Hp)return 14}return 2}function rs(t,e){var n=t.alternate;return n===null?(n=Ui(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Mm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bo:return Gs(n.children,r,s,e);case zp:o=8,r|=8;break;case $f:return t=Ui(12,n,e,r|2),t.elementType=$f,t.lanes=s,t;case Kf:return t=Ui(13,n,e,r),t.elementType=Kf,t.lanes=s,t;case Zf:return t=Ui(19,n,e,r),t.elementType=Zf,t.lanes=s,t;case Lv:return ku(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pv:o=10;break e;case Iv:o=9;break e;case Bp:o=11;break e;case Hp:o=14;break e;case Gr:o=16,i=null;break e}throw Error(Ce(130,t==null?t:typeof t,""))}return e=Ui(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Gs(t,e,n,i){return t=Ui(7,t,i,e),t.lanes=n,t}function ku(t,e,n,i){return t=Ui(22,t,i,e),t.elementType=Lv,t.lanes=n,t.stateNode={isHidden:!1},t}function rf(t,e,n){return t=Ui(6,t,null,e),t.lanes=n,t}function sf(t,e,n){return e=Ui(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Od(0),this.expirationTimes=Od(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Od(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function wm(t,e,n,i,r,s,o,a,l){return t=new rw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ui(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sm(s),t}function sw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:To,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Sx(t){if(!t)return ls;t=t._reactInternals;e:{if(Js(t)!==t||t.tag!==1)throw Error(Ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Ce(171))}if(t.tag===1){var n=t.type;if(pi(n))return S_(t,n,e)}return e}function Ex(t,e,n,i,r,s,o,a,l){return t=wm(n,i,!0,t,r,s,o,a,l),t.context=Sx(null),n=t.current,i=ni(),r=is(n),s=Tr(i,r),s.callback=e??null,ts(n,s,r),t.current.lanes=r,wl(t,r,i),mi(t,i),t}function Ou(t,e,n,i){var r=e.current,s=ni(),o=is(r);return n=Sx(n),e.context===null?e.context=n:e.pendingContext=n,e=Tr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ts(r,e,o),t!==null&&(Zi(t,r,o,s),Oc(t,r,o)),o}function xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function e1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sm(t,e){e1(t,e),(t=t.alternate)&&e1(t,e)}function ow(){return null}var Tx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Em(t){this._internalRoot=t}zu.prototype.render=Em.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Ce(409));Ou(t,e,null,null)};zu.prototype.unmount=Em.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ys(function(){Ou(null,t,null,null)}),e[Cr]=null}};function zu(t){this._internalRoot=t}zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=n_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xr.length&&e!==0&&e<Xr[n].priority;n++);Xr.splice(n,0,t),n===0&&r_(t)}};function Tm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function t1(){}function aw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=xu(o);s.call(u)}}var o=Ex(e,i,t,0,null,!1,!1,"",t1);return t._reactRootContainer=o,t[Cr]=o.current,al(t.nodeType===8?t.parentNode:t),Ys(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=xu(l);a.call(u)}}var l=wm(t,0,!1,null,null,!1,!1,"",t1);return t._reactRootContainer=l,t[Cr]=l.current,al(t.nodeType===8?t.parentNode:t),Ys(function(){Ou(e,l,n,i)}),l}function Hu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=xu(o);a.call(l)}}Ou(e,o,t,r)}else o=aw(n,e,t,r,i);return xu(o)}e_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oa(e.pendingLanes);n!==0&&(Wp(e,n|1),mi(e,mn()),!(It&6)&&(Jo=mn()+500,hs()))}break;case 13:Ys(function(){var i=Rr(t,1);if(i!==null){var r=ni();Zi(i,t,1,r)}}),Sm(t,1)}};Xp=function(t){if(t.tag===13){var e=Rr(t,134217728);if(e!==null){var n=ni();Zi(e,t,134217728,n)}Sm(t,134217728)}};t_=function(t){if(t.tag===13){var e=is(t),n=Rr(t,e);if(n!==null){var i=ni();Zi(n,t,e,i)}Sm(t,e)}};n_=function(){return Gt};i_=function(t,e){var n=Gt;try{return Gt=t,e()}finally{Gt=n}};ah=function(t,e,n){switch(e){case"input":if(eh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Iu(i);if(!r)throw Error(Ce(90));Nv(i),eh(i,r)}}}break;case"textarea":Fv(t,n);break;case"select":e=n.value,e!=null&&Oo(t,!!n.multiple,e,!1)}};Gv=_m;Wv=Ys;var lw={usingClientEntryPoint:!1,Events:[El,Po,Iu,Hv,Vv,_m]},ba={findFiberByHostInstance:ks,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cw={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qv(t),t===null?null:t.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance||ow,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{Au=sc.inject(cw),lr=sc}catch{}}Ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lw;Ci.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tm(e))throw Error(Ce(200));return sw(t,e,null,n)};Ci.createRoot=function(t,e){if(!Tm(t))throw Error(Ce(299));var n=!1,i="",r=Tx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=wm(t,1,!1,null,null,n,!1,i,r),t[Cr]=e.current,al(t.nodeType===8?t.parentNode:t),new Em(e)};Ci.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Ce(188)):(t=Object.keys(t).join(","),Error(Ce(268,t)));return t=qv(e),t=t===null?null:t.stateNode,t};Ci.flushSync=function(t){return Ys(t)};Ci.hydrate=function(t,e,n){if(!Bu(e))throw Error(Ce(200));return Hu(null,t,e,!0,n)};Ci.hydrateRoot=function(t,e,n){if(!Tm(t))throw Error(Ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Tx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ex(e,null,t,1,n??null,r,!1,s,o),t[Cr]=e.current,al(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zu(e)};Ci.render=function(t,e,n){if(!Bu(e))throw Error(Ce(200));return Hu(null,t,e,!1,n)};Ci.unmountComponentAtNode=function(t){if(!Bu(t))throw Error(Ce(40));return t._reactRootContainer?(Ys(function(){Hu(null,null,t,!1,function(){t._reactRootContainer=null,t[Cr]=null})}),!0):!1};Ci.unstable_batchedUpdates=_m;Ci.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bu(n))throw Error(Ce(200));if(t==null||t._reactInternals===void 0)throw Error(Ce(38));return Hu(t,e,n,!1,i)};Ci.version="18.3.1-next-f1338f8080-20240426";function bx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bx)}catch(t){console.error(t)}}bx(),bv.exports=Ci;var uw=bv.exports,Ax,n1=uw;Ax=n1.createRoot,n1.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bm="180",dw=0,i1=1,fw=2,Cx=1,Rx=2,xr=3,cs=0,gi=1,Vt=2,ss=0,Wo=1,yu=2,r1=3,s1=4,hw=5,Us=100,pw=101,mw=102,gw=103,vw=104,_w=200,xw=201,yw=202,Mw=203,Bh=204,Hh=205,ww=206,Sw=207,Ew=208,Tw=209,bw=210,Aw=211,Cw=212,Rw=213,Pw=214,Vh=0,Gh=1,Wh=2,Qo=3,Xh=4,jh=5,qh=6,Yh=7,Am=0,Iw=1,Lw=2,os=0,Dw=1,Nw=2,Uw=3,Px=4,Fw=5,kw=6,Ow=7,Ix=300,ea=301,ta=302,$h=303,Kh=304,Vu=306,qr=1e3,Bs=1001,Zh=1002,Ji=1003,zw=1004,oc=1005,or=1006,of=1007,Hs=1008,dr=1009,Lx=1010,Dx=1011,gl=1012,Cm=1013,$s=1014,Er=1015,bl=1016,Rm=1017,Pm=1018,vl=1020,Nx=35902,Ux=35899,Fx=1021,kx=1022,$i=1023,_l=1026,xl=1027,Ox=1028,Im=1029,zx=1030,Lm=1031,Dm=1033,Xc=33776,jc=33777,qc=33778,Yc=33779,Jh=35840,Qh=35841,ep=35842,tp=35843,np=36196,ip=37492,rp=37496,sp=37808,op=37809,ap=37810,lp=37811,cp=37812,up=37813,dp=37814,fp=37815,hp=37816,pp=37817,mp=37818,gp=37819,vp=37820,_p=37821,xp=36492,yp=36494,Mp=36495,wp=36283,Sp=36284,Ep=36285,Tp=36286,Bw=3200,Hw=3201,Nm=0,Vw=1,Yr="",Nn="srgb",na="srgb-linear",Mu="linear",Xt="srgb",uo=7680,o1=519,Gw=512,Ww=513,Xw=514,Bx=515,jw=516,qw=517,Yw=518,$w=519,a1=35044,l1="300 es",ar=2e3,wu=2001;class aa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],af=Math.PI/180,bp=180/Math.PI;function Al(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($n[t&255]+$n[t>>8&255]+$n[t>>16&255]+$n[t>>24&255]+"-"+$n[e&255]+$n[e>>8&255]+"-"+$n[e>>16&15|64]+$n[e>>24&255]+"-"+$n[n&63|128]+$n[n>>8&255]+"-"+$n[n>>16&255]+$n[n>>24&255]+$n[i&255]+$n[i>>8&255]+$n[i>>16&255]+$n[i>>24&255]).toLowerCase()}function St(t,e,n){return Math.max(e,Math.min(n,t))}function Kw(t,e){return(t%e+e)%e}function lf(t,e,n){return(1-n)*t+n*e}function Aa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ci(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],p=i[r+2],h=i[r+3];const m=s[o+0],g=s[o+1],w=s[o+2],b=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=p,e[n+3]=h;return}if(a===1){e[n+0]=m,e[n+1]=g,e[n+2]=w,e[n+3]=b;return}if(h!==b||l!==m||u!==g||p!==w){let x=1-a;const f=l*m+u*g+p*w+h*b,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const L=Math.sqrt(y),D=Math.atan2(L,f*_);x=Math.sin(x*D)/L,a=Math.sin(a*D)/L}const E=a*_;if(l=l*x+m*E,u=u*x+g*E,p=p*x+w*E,h=h*x+b*E,x===1-a){const L=1/Math.sqrt(l*l+u*u+p*p+h*h);l*=L,u*=L,p*=L,h*=L}}e[n]=l,e[n+1]=u,e[n+2]=p,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],p=i[r+3],h=s[o],m=s[o+1],g=s[o+2],w=s[o+3];return e[n]=a*w+p*h+l*g-u*m,e[n+1]=l*w+p*m+u*h-a*g,e[n+2]=u*w+p*g+a*m-l*h,e[n+3]=p*w-a*h-l*m-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),p=a(r/2),h=a(s/2),m=l(i/2),g=l(r/2),w=l(s/2);switch(o){case"XYZ":this._x=m*p*h+u*g*w,this._y=u*g*h-m*p*w,this._z=u*p*w+m*g*h,this._w=u*p*h-m*g*w;break;case"YXZ":this._x=m*p*h+u*g*w,this._y=u*g*h-m*p*w,this._z=u*p*w-m*g*h,this._w=u*p*h+m*g*w;break;case"ZXY":this._x=m*p*h-u*g*w,this._y=u*g*h+m*p*w,this._z=u*p*w+m*g*h,this._w=u*p*h-m*g*w;break;case"ZYX":this._x=m*p*h-u*g*w,this._y=u*g*h+m*p*w,this._z=u*p*w-m*g*h,this._w=u*p*h+m*g*w;break;case"YZX":this._x=m*p*h+u*g*w,this._y=u*g*h+m*p*w,this._z=u*p*w-m*g*h,this._w=u*p*h-m*g*w;break;case"XZY":this._x=m*p*h-u*g*w,this._y=u*g*h-m*p*w,this._z=u*p*w+m*g*h,this._w=u*p*h+m*g*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],p=n[6],h=n[10],m=i+a+h;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(p-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(p-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+p)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,p=n._w;return this._x=i*p+o*a+r*u-s*l,this._y=r*p+o*l+s*a-i*u,this._z=s*p+o*u+i*l-r*a,this._w=o*p-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),p=Math.atan2(u,a),h=Math.sin((1-n)*p)/u,m=Math.sin(n*p)/u;return this._w=o*h+this._w*m,this._x=i*h+this._x*m,this._y=r*h+this._y*m,this._z=s*h+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(c1.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(c1.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),p=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*p,this.y=i+l*p+a*u-s*h,this.z=r+l*h+s*p-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cf.copy(this).projectOnVector(e),this.sub(cf)}reflect(e){return this.sub(cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cf=new W,c1=new Cl;class vt{constructor(e,n,i,r,s,o,a,l,u){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const p=this.elements;return p[0]=e,p[1]=r,p[2]=a,p[3]=n,p[4]=s,p[5]=l,p[6]=i,p[7]=o,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],p=i[4],h=i[7],m=i[2],g=i[5],w=i[8],b=r[0],x=r[3],f=r[6],_=r[1],y=r[4],E=r[7],L=r[2],D=r[5],N=r[8];return s[0]=o*b+a*_+l*L,s[3]=o*x+a*y+l*D,s[6]=o*f+a*E+l*N,s[1]=u*b+p*_+h*L,s[4]=u*x+p*y+h*D,s[7]=u*f+p*E+h*N,s[2]=m*b+g*_+w*L,s[5]=m*x+g*y+w*D,s[8]=m*f+g*E+w*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],p=e[8];return n*o*p-n*a*u-i*s*p+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],p=e[8],h=p*o-a*u,m=a*l-p*s,g=u*s-o*l,w=n*h+i*m+r*g;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=h*b,e[1]=(r*u-p*i)*b,e[2]=(a*i-r*o)*b,e[3]=m*b,e[4]=(p*n-r*l)*b,e[5]=(r*s-a*n)*b,e[6]=g*b,e[7]=(i*l-u*n)*b,e[8]=(o*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(uf.makeScale(e,n)),this}rotate(e){return this.premultiply(uf.makeRotation(-e)),this}translate(e,n){return this.premultiply(uf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uf=new vt;function Hx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Su(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Zw(){const t=Su("canvas");return t.style.display="block",t}const u1={};function yl(t){t in u1||(u1[t]=!0,console.warn(t))}function Jw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const d1=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),f1=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qw(){const t={enabled:!0,workingColorSpace:na,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Xt&&(r.r=br(r.r),r.g=br(r.g),r.b=br(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Xt&&(r.r=Xo(r.r),r.g=Xo(r.g),r.b=Xo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yr?Mu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return yl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return yl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[na]:{primaries:e,whitePoint:i,transfer:Mu,toXYZ:d1,fromXYZ:f1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:i,transfer:Xt,toXYZ:d1,fromXYZ:f1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),t}const Dt=Qw();function br(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fo;class eS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fo===void 0&&(fo=Su("canvas")),fo.width=e.width,fo.height=e.height;const r=fo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fo}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Su("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=br(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(br(n[i]/255)*255):n[i]=br(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tS=0;class Um{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Al(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(df(r[o].image)):s.push(df(r[o]))}else s=df(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function df(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?eS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nS=0;const ff=new W;class ii extends aa{constructor(e=ii.DEFAULT_IMAGE,n=ii.DEFAULT_MAPPING,i=Bs,r=Bs,s=or,o=Hs,a=$i,l=dr,u=ii.DEFAULT_ANISOTROPY,p=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Al(),this.name="",this.source=new Um(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ff).x}get height(){return this.source.getSize(ff).y}get depth(){return this.source.getSize(ff).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case Bs:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case Bs:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Ix;ii.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,n=0,i=0,r=1){jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],p=l[4],h=l[8],m=l[1],g=l[5],w=l[9],b=l[2],x=l[6],f=l[10];if(Math.abs(p-m)<.01&&Math.abs(h-b)<.01&&Math.abs(w-x)<.01){if(Math.abs(p+m)<.1&&Math.abs(h+b)<.1&&Math.abs(w+x)<.1&&Math.abs(u+g+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,E=(g+1)/2,L=(f+1)/2,D=(p+m)/4,N=(h+b)/4,F=(w+x)/4;return y>E&&y>L?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=D/i,s=N/i):E>L?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=D/r,s=F/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=N/s,r=F/s),this.set(i,r,s,n),this}let _=Math.sqrt((x-w)*(x-w)+(h-b)*(h-b)+(m-p)*(m-p));return Math.abs(_)<.001&&(_=1),this.x=(x-w)/_,this.y=(h-b)/_,this.z=(m-p)/_,this.w=Math.acos((u+g+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iS extends aa{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:or,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new ii(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:or,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Um(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ks extends iS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Vx extends ii{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ji,this.minFilter=Ji,this.wrapR=Bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rS extends ii{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ji,this.minFilter=Ji,this.wrapR=Bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rl{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hi):Hi.fromBufferAttribute(s,o),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ac.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ac.copy(i.boundingBox)),ac.applyMatrix4(e.matrixWorld),this.union(ac)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ca),lc.subVectors(this.max,Ca),ho.subVectors(e.a,Ca),po.subVectors(e.b,Ca),mo.subVectors(e.c,Ca),Fr.subVectors(po,ho),kr.subVectors(mo,po),Ss.subVectors(ho,mo);let n=[0,-Fr.z,Fr.y,0,-kr.z,kr.y,0,-Ss.z,Ss.y,Fr.z,0,-Fr.x,kr.z,0,-kr.x,Ss.z,0,-Ss.x,-Fr.y,Fr.x,0,-kr.y,kr.x,0,-Ss.y,Ss.x,0];return!hf(n,ho,po,mo,lc)||(n=[1,0,0,0,1,0,0,0,1],!hf(n,ho,po,mo,lc))?!1:(cc.crossVectors(Fr,kr),n=[cc.x,cc.y,cc.z],hf(n,ho,po,mo,lc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pr=[new W,new W,new W,new W,new W,new W,new W,new W],Hi=new W,ac=new Rl,ho=new W,po=new W,mo=new W,Fr=new W,kr=new W,Ss=new W,Ca=new W,lc=new W,cc=new W,Es=new W;function hf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Es.fromArray(t,s);const a=r.x*Math.abs(Es.x)+r.y*Math.abs(Es.y)+r.z*Math.abs(Es.z),l=e.dot(Es),u=n.dot(Es),p=i.dot(Es);if(Math.max(-Math.max(l,u,p),Math.min(l,u,p))>a)return!1}return!0}const sS=new Rl,Ra=new W,pf=new W;class Pl{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const n=Ra.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(pf)),this.expandByPoint(Ra.copy(e.center).sub(pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const mr=new W,mf=new W,uc=new W,Or=new W,gf=new W,dc=new W,vf=new W;class Gu{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,n),mr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){mf.copy(e).add(n).multiplyScalar(.5),uc.copy(n).sub(e).normalize(),Or.copy(this.origin).sub(mf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(uc),a=Or.dot(this.direction),l=-Or.dot(uc),u=Or.lengthSq(),p=Math.abs(1-o*o);let h,m,g,w;if(p>0)if(h=o*l-a,m=o*a-l,w=s*p,h>=0)if(m>=-w)if(m<=w){const b=1/p;h*=b,m*=b,g=h*(h+o*m+2*a)+m*(o*h+m+2*l)+u}else m=s,h=Math.max(0,-(o*m+a)),g=-h*h+m*(m+2*l)+u;else m=-s,h=Math.max(0,-(o*m+a)),g=-h*h+m*(m+2*l)+u;else m<=-w?(h=Math.max(0,-(-o*s+a)),m=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+m*(m+2*l)+u):m<=w?(h=0,m=Math.min(Math.max(-s,-l),s),g=m*(m+2*l)+u):(h=Math.max(0,-(o*s+a)),m=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+m*(m+2*l)+u);else m=o>0?-s:s,h=Math.max(0,-(o*m+a)),g=-h*h+m*(m+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(mf).addScaledVector(uc,m),g}intersectSphere(e,n){mr.subVectors(e.center,this.origin);const i=mr.dot(this.direction),r=mr.dot(mr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,p=1/this.direction.y,h=1/this.direction.z,m=this.origin;return u>=0?(i=(e.min.x-m.x)*u,r=(e.max.x-m.x)*u):(i=(e.max.x-m.x)*u,r=(e.min.x-m.x)*u),p>=0?(s=(e.min.y-m.y)*p,o=(e.max.y-m.y)*p):(s=(e.max.y-m.y)*p,o=(e.min.y-m.y)*p),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-m.z)*h,l=(e.max.z-m.z)*h):(a=(e.max.z-m.z)*h,l=(e.min.z-m.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,n,i,r,s){gf.subVectors(n,e),dc.subVectors(i,e),vf.crossVectors(gf,dc);let o=this.direction.dot(vf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Or.subVectors(this.origin,e);const l=a*this.direction.dot(dc.crossVectors(Or,dc));if(l<0)return null;const u=a*this.direction.dot(gf.cross(Or));if(u<0||l+u>o)return null;const p=-a*Or.dot(vf);return p<0?null:this.at(p/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,n,i,r,s,o,a,l,u,p,h,m,g,w,b,x){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,p,h,m,g,w,b,x)}set(e,n,i,r,s,o,a,l,u,p,h,m,g,w,b,x){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=p,f[10]=h,f[14]=m,f[3]=g,f[7]=w,f[11]=b,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/go.setFromMatrixColumn(e,0).length(),s=1/go.setFromMatrixColumn(e,1).length(),o=1/go.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),p=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const m=o*p,g=o*h,w=a*p,b=a*h;n[0]=l*p,n[4]=-l*h,n[8]=u,n[1]=g+w*u,n[5]=m-b*u,n[9]=-a*l,n[2]=b-m*u,n[6]=w+g*u,n[10]=o*l}else if(e.order==="YXZ"){const m=l*p,g=l*h,w=u*p,b=u*h;n[0]=m+b*a,n[4]=w*a-g,n[8]=o*u,n[1]=o*h,n[5]=o*p,n[9]=-a,n[2]=g*a-w,n[6]=b+m*a,n[10]=o*l}else if(e.order==="ZXY"){const m=l*p,g=l*h,w=u*p,b=u*h;n[0]=m-b*a,n[4]=-o*h,n[8]=w+g*a,n[1]=g+w*a,n[5]=o*p,n[9]=b-m*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const m=o*p,g=o*h,w=a*p,b=a*h;n[0]=l*p,n[4]=w*u-g,n[8]=m*u+b,n[1]=l*h,n[5]=b*u+m,n[9]=g*u-w,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const m=o*l,g=o*u,w=a*l,b=a*u;n[0]=l*p,n[4]=b-m*h,n[8]=w*h+g,n[1]=h,n[5]=o*p,n[9]=-a*p,n[2]=-u*p,n[6]=g*h+w,n[10]=m-b*h}else if(e.order==="XZY"){const m=o*l,g=o*u,w=a*l,b=a*u;n[0]=l*p,n[4]=-h,n[8]=u*p,n[1]=m*h+b,n[5]=o*p,n[9]=g*h-w,n[2]=w*h-g,n[6]=a*p,n[10]=b*h+m}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oS,e,aS)}lookAt(e,n,i){const r=this.elements;return Mi.subVectors(e,n),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),zr.crossVectors(i,Mi),zr.lengthSq()===0&&(Math.abs(i.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),zr.crossVectors(i,Mi)),zr.normalize(),fc.crossVectors(Mi,zr),r[0]=zr.x,r[4]=fc.x,r[8]=Mi.x,r[1]=zr.y,r[5]=fc.y,r[9]=Mi.y,r[2]=zr.z,r[6]=fc.z,r[10]=Mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],p=i[1],h=i[5],m=i[9],g=i[13],w=i[2],b=i[6],x=i[10],f=i[14],_=i[3],y=i[7],E=i[11],L=i[15],D=r[0],N=r[4],F=r[8],T=r[12],M=r[1],z=r[5],Y=r[9],se=r[13],ce=r[2],fe=r[6],X=r[10],ne=r[14],H=r[3],oe=r[7],ue=r[11],Pe=r[15];return s[0]=o*D+a*M+l*ce+u*H,s[4]=o*N+a*z+l*fe+u*oe,s[8]=o*F+a*Y+l*X+u*ue,s[12]=o*T+a*se+l*ne+u*Pe,s[1]=p*D+h*M+m*ce+g*H,s[5]=p*N+h*z+m*fe+g*oe,s[9]=p*F+h*Y+m*X+g*ue,s[13]=p*T+h*se+m*ne+g*Pe,s[2]=w*D+b*M+x*ce+f*H,s[6]=w*N+b*z+x*fe+f*oe,s[10]=w*F+b*Y+x*X+f*ue,s[14]=w*T+b*se+x*ne+f*Pe,s[3]=_*D+y*M+E*ce+L*H,s[7]=_*N+y*z+E*fe+L*oe,s[11]=_*F+y*Y+E*X+L*ue,s[15]=_*T+y*se+E*ne+L*Pe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],p=e[2],h=e[6],m=e[10],g=e[14],w=e[3],b=e[7],x=e[11],f=e[15];return w*(+s*l*h-r*u*h-s*a*m+i*u*m+r*a*g-i*l*g)+b*(+n*l*g-n*u*m+s*o*m-r*o*g+r*u*p-s*l*p)+x*(+n*u*h-n*a*g-s*o*h+i*o*g+s*a*p-i*u*p)+f*(-r*a*p-n*l*h+n*a*m+r*o*h-i*o*m+i*l*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],p=e[8],h=e[9],m=e[10],g=e[11],w=e[12],b=e[13],x=e[14],f=e[15],_=h*x*u-b*m*u+b*l*g-a*x*g-h*l*f+a*m*f,y=w*m*u-p*x*u-w*l*g+o*x*g+p*l*f-o*m*f,E=p*b*u-w*h*u+w*a*g-o*b*g-p*a*f+o*h*f,L=w*h*l-p*b*l-w*a*m+o*b*m+p*a*x-o*h*x,D=n*_+i*y+r*E+s*L;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/D;return e[0]=_*N,e[1]=(b*m*s-h*x*s-b*r*g+i*x*g+h*r*f-i*m*f)*N,e[2]=(a*x*s-b*l*s+b*r*u-i*x*u-a*r*f+i*l*f)*N,e[3]=(h*l*s-a*m*s-h*r*u+i*m*u+a*r*g-i*l*g)*N,e[4]=y*N,e[5]=(p*x*s-w*m*s+w*r*g-n*x*g-p*r*f+n*m*f)*N,e[6]=(w*l*s-o*x*s-w*r*u+n*x*u+o*r*f-n*l*f)*N,e[7]=(o*m*s-p*l*s+p*r*u-n*m*u-o*r*g+n*l*g)*N,e[8]=E*N,e[9]=(w*h*s-p*b*s-w*i*g+n*b*g+p*i*f-n*h*f)*N,e[10]=(o*b*s-w*a*s+w*i*u-n*b*u-o*i*f+n*a*f)*N,e[11]=(p*a*s-o*h*s-p*i*u+n*h*u+o*i*g-n*a*g)*N,e[12]=L*N,e[13]=(p*b*r-w*h*r+w*i*m-n*b*m-p*i*x+n*h*x)*N,e[14]=(w*a*r-o*b*r-w*i*l+n*b*l+o*i*x-n*a*x)*N,e[15]=(o*h*r-p*a*r+p*i*l-n*h*l-o*i*m+n*a*m)*N,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,p=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,p*a+i,p*l-r*o,0,u*l-r*a,p*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,p=o+o,h=a+a,m=s*u,g=s*p,w=s*h,b=o*p,x=o*h,f=a*h,_=l*u,y=l*p,E=l*h,L=i.x,D=i.y,N=i.z;return r[0]=(1-(b+f))*L,r[1]=(g+E)*L,r[2]=(w-y)*L,r[3]=0,r[4]=(g-E)*D,r[5]=(1-(m+f))*D,r[6]=(x+_)*D,r[7]=0,r[8]=(w+y)*N,r[9]=(x-_)*N,r[10]=(1-(m+b))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=go.set(r[0],r[1],r[2]).length();const o=go.set(r[4],r[5],r[6]).length(),a=go.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vi.copy(this);const u=1/s,p=1/o,h=1/a;return Vi.elements[0]*=u,Vi.elements[1]*=u,Vi.elements[2]*=u,Vi.elements[4]*=p,Vi.elements[5]*=p,Vi.elements[6]*=p,Vi.elements[8]*=h,Vi.elements[9]*=h,Vi.elements[10]*=h,n.setFromRotationMatrix(Vi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ar,l=!1){const u=this.elements,p=2*s/(n-e),h=2*s/(i-r),m=(n+e)/(n-e),g=(i+r)/(i-r);let w,b;if(l)w=s/(o-s),b=o*s/(o-s);else if(a===ar)w=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===wu)w=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=p,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=h,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=w,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ar,l=!1){const u=this.elements,p=2/(n-e),h=2/(i-r),m=-(n+e)/(n-e),g=-(i+r)/(i-r);let w,b;if(l)w=1/(o-s),b=o/(o-s);else if(a===ar)w=-2/(o-s),b=-(o+s)/(o-s);else if(a===wu)w=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=p,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=h,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=w,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const go=new W,Vi=new Qt,oS=new W(0,0,0),aS=new W(1,1,1),zr=new W,fc=new W,Mi=new W,h1=new Qt,p1=new Cl;class er{constructor(e=0,n=0,i=0,r=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],p=r[9],h=r[2],m=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-St(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-p,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return h1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(h1,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return p1.setFromEuler(this),this.setFromQuaternion(p1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class Fm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lS=0;const m1=new W,vo=new Cl,gr=new Qt,hc=new W,Pa=new W,cS=new W,uS=new Cl,g1=new W(1,0,0),v1=new W(0,1,0),_1=new W(0,0,1),x1={type:"added"},dS={type:"removed"},_o={type:"childadded",child:null},_f={type:"childremoved",child:null};class bn extends aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new W,n=new er,i=new Cl,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new vt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vo.setFromAxisAngle(e,n),this.quaternion.multiply(vo),this}rotateOnWorldAxis(e,n){return vo.setFromAxisAngle(e,n),this.quaternion.premultiply(vo),this}rotateX(e){return this.rotateOnAxis(g1,e)}rotateY(e){return this.rotateOnAxis(v1,e)}rotateZ(e){return this.rotateOnAxis(_1,e)}translateOnAxis(e,n){return m1.copy(e).applyQuaternion(this.quaternion),this.position.add(m1.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(g1,e)}translateY(e){return this.translateOnAxis(v1,e)}translateZ(e){return this.translateOnAxis(_1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?hc.copy(e):hc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(Pa,hc,this.up):gr.lookAt(hc,Pa,this.up),this.quaternion.setFromRotationMatrix(gr),r&&(gr.extractRotation(r.matrixWorld),vo.setFromRotationMatrix(gr),this.quaternion.premultiply(vo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(x1),_o.child=e,this.dispatchEvent(_o),_o.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dS),_f.child=e,this.dispatchEvent(_f),_f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(x1),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,e,cS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,uS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,p=l.length;u<p;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),p=o(e.images),h=o(e.shapes),m=o(e.skeletons),g=o(e.animations),w=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),p.length>0&&(i.images=p),h.length>0&&(i.shapes=h),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),w.length>0&&(i.nodes=w)}return i.object=r,i;function o(a){const l=[];for(const u in a){const p=a[u];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bn.DEFAULT_UP=new W(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gi=new W,vr=new W,xf=new W,_r=new W,xo=new W,yo=new W,y1=new W,yf=new W,Mf=new W,wf=new W,Sf=new jt,Ef=new jt,Tf=new jt;class Yi{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gi.subVectors(e,n),r.cross(Gi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gi.subVectors(r,n),vr.subVectors(i,n),xf.subVectors(e,n);const o=Gi.dot(Gi),a=Gi.dot(vr),l=Gi.dot(xf),u=vr.dot(vr),p=vr.dot(xf),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const m=1/h,g=(u*l-a*p)*m,w=(o*p-a*l)*m;return s.set(1-g-w,w,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_r)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_r.x),l.addScaledVector(o,_r.y),l.addScaledVector(a,_r.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Sf.setScalar(0),Ef.setScalar(0),Tf.setScalar(0),Sf.fromBufferAttribute(e,n),Ef.fromBufferAttribute(e,i),Tf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Sf,s.x),o.addScaledVector(Ef,s.y),o.addScaledVector(Tf,s.z),o}static isFrontFacing(e,n,i,r){return Gi.subVectors(i,n),vr.subVectors(e,n),Gi.cross(vr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Gi.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;xo.subVectors(r,i),yo.subVectors(s,i),yf.subVectors(e,i);const l=xo.dot(yf),u=yo.dot(yf);if(l<=0&&u<=0)return n.copy(i);Mf.subVectors(e,r);const p=xo.dot(Mf),h=yo.dot(Mf);if(p>=0&&h<=p)return n.copy(r);const m=l*h-p*u;if(m<=0&&l>=0&&p<=0)return o=l/(l-p),n.copy(i).addScaledVector(xo,o);wf.subVectors(e,s);const g=xo.dot(wf),w=yo.dot(wf);if(w>=0&&g<=w)return n.copy(s);const b=g*u-l*w;if(b<=0&&u>=0&&w<=0)return a=u/(u-w),n.copy(i).addScaledVector(yo,a);const x=p*w-g*h;if(x<=0&&h-p>=0&&g-w>=0)return y1.subVectors(s,r),a=(h-p)/(h-p+(g-w)),n.copy(r).addScaledVector(y1,a);const f=1/(x+b+m);return o=b*f,a=m*f,n.copy(i).addScaledVector(xo,o).addScaledVector(yo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},pc={h:0,s:0,l:0};function bf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Mt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Dt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Dt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Dt.workingColorSpace){if(e=Kw(e,1),n=St(n,0,1),i=St(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=bf(o,s,e+1/3),this.g=bf(o,s,e),this.b=bf(o,s,e-1/3)}return Dt.colorSpaceToWorking(this,r),this}setStyle(e,n=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const i=Gx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Dt.workingToColorSpace(Kn.copy(this),e),Math.round(St(Kn.r*255,0,255))*65536+Math.round(St(Kn.g*255,0,255))*256+Math.round(St(Kn.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Dt.workingColorSpace){Dt.workingToColorSpace(Kn.copy(this),n);const i=Kn.r,r=Kn.g,s=Kn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const p=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=p<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=p,e}getRGB(e,n=Dt.workingColorSpace){return Dt.workingToColorSpace(Kn.copy(this),n),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=Nn){Dt.workingToColorSpace(Kn.copy(this),e);const n=Kn.r,i=Kn.g,r=Kn.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+n,Br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Br),e.getHSL(pc);const i=lf(Br.h,pc.h,n),r=lf(Br.s,pc.s,n),s=lf(Br.l,pc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new Mt;Mt.NAMES=Gx;let fS=0;class ps extends aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Al(),this.name="",this.type="Material",this.blending=Wo,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=Hh,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wo&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bh&&(i.blendSrc=this.blendSrc),this.blendDst!==Hh&&(i.blendDst=this.blendDst),this.blendEquation!==Us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o1&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wt extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=Am,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _n=new W,mc=new et;let hS=0;class ur{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=a1,this.updateRanges=[],this.gpuType=Er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)mc.fromBufferAttribute(this,n),mc.applyMatrix3(e),this.setXY(n,mc.x,mc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix3(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix4(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.applyNormalMatrix(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.transformDirection(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Aa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Aa(n,this.array)),n}setX(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Aa(n,this.array)),n}setY(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Aa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Aa(n,this.array)),n}setW(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),i=ci(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),i=ci(i,this.array),r=ci(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),i=ci(i,this.array),r=ci(r,this.array),s=ci(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==a1&&(e.usage=this.usage),e}}class Wx extends ur{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Xx extends ur{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Rt extends ur{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pS=0;const Li=new Qt,Af=new bn,Mo=new W,wi=new Rl,Ia=new Rl,Ln=new W;class cn extends aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hx(e)?Xx:Wx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new vt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,n,i){return Li.makeTranslation(e,n,i),this.applyMatrix4(Li),this}scale(e,n,i){return Li.makeScale(e,n,i),this.applyMatrix4(Li),this}lookAt(e){return Af.lookAt(e),Af.updateMatrix(),this.applyMatrix4(Af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mo).negate(),this.translate(Mo.x,Mo.y,Mo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ia.setFromBufferAttribute(a),this.morphTargetsRelative?(Ln.addVectors(wi.min,Ia.min),wi.expandByPoint(Ln),Ln.addVectors(wi.max,Ia.max),wi.expandByPoint(Ln)):(wi.expandByPoint(Ia.min),wi.expandByPoint(Ia.max))}wi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ln));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,p=a.count;u<p;u++)Ln.fromBufferAttribute(a,u),l&&(Mo.fromBufferAttribute(e,u),Ln.add(Mo)),r=Math.max(r,i.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ur(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new W,l[F]=new W;const u=new W,p=new W,h=new W,m=new et,g=new et,w=new et,b=new W,x=new W;function f(F,T,M){u.fromBufferAttribute(i,F),p.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),m.fromBufferAttribute(s,F),g.fromBufferAttribute(s,T),w.fromBufferAttribute(s,M),p.sub(u),h.sub(u),g.sub(m),w.sub(m);const z=1/(g.x*w.y-w.x*g.y);isFinite(z)&&(b.copy(p).multiplyScalar(w.y).addScaledVector(h,-g.y).multiplyScalar(z),x.copy(h).multiplyScalar(g.x).addScaledVector(p,-w.x).multiplyScalar(z),a[F].add(b),a[T].add(b),a[M].add(b),l[F].add(x),l[T].add(x),l[M].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let F=0,T=_.length;F<T;++F){const M=_[F],z=M.start,Y=M.count;for(let se=z,ce=z+Y;se<ce;se+=3)f(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const y=new W,E=new W,L=new W,D=new W;function N(F){L.fromBufferAttribute(r,F),D.copy(L);const T=a[F];y.copy(T),y.sub(L.multiplyScalar(L.dot(T))).normalize(),E.crossVectors(D,T);const z=E.dot(l[F])<0?-1:1;o.setXYZW(F,y.x,y.y,y.z,z)}for(let F=0,T=_.length;F<T;++F){const M=_[F],z=M.start,Y=M.count;for(let se=z,ce=z+Y;se<ce;se+=3)N(e.getX(se+0)),N(e.getX(se+1)),N(e.getX(se+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ur(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,u=new W,p=new W,h=new W;if(e)for(let m=0,g=e.count;m<g;m+=3){const w=e.getX(m+0),b=e.getX(m+1),x=e.getX(m+2);r.fromBufferAttribute(n,w),s.fromBufferAttribute(n,b),o.fromBufferAttribute(n,x),p.subVectors(o,s),h.subVectors(r,s),p.cross(h),a.fromBufferAttribute(i,w),l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,x),a.add(p),l.add(p),u.add(p),i.setXYZ(w,a.x,a.y,a.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let m=0,g=n.count;m<g;m+=3)r.fromBufferAttribute(n,m+0),s.fromBufferAttribute(n,m+1),o.fromBufferAttribute(n,m+2),p.subVectors(o,s),h.subVectors(r,s),p.cross(h),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ln.fromBufferAttribute(e,n),Ln.normalize(),e.setXYZ(n,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(a,l){const u=a.array,p=a.itemSize,h=a.normalized,m=new u.constructor(l.length*p);let g=0,w=0;for(let b=0,x=l.length;b<x;b++){a.isInterleavedBufferAttribute?g=l[b]*a.data.stride+a.offset:g=l[b]*p;for(let f=0;f<p;f++)m[w++]=u[g++]}return new ur(m,p,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let p=0,h=u.length;p<h;p++){const m=u[p],g=e(m,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],p=[];for(let h=0,m=u.length;h<m;h++){const g=u[h];p.push(g.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const p=r[u];this.setAttribute(u,p.clone(n))}const s=e.morphAttributes;for(const u in s){const p=[],h=s[u];for(let m=0,g=h.length;m<g;m++)p.push(h[m].clone(n));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,p=o.length;u<p;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const M1=new Qt,Ts=new Gu,gc=new Pl,w1=new W,vc=new W,_c=new W,xc=new W,Cf=new W,yc=new W,S1=new W,Mc=new W;class B extends bn{constructor(e=new cn,n=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){yc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const p=a[l],h=s[l];p!==0&&(Cf.fromBufferAttribute(h,e),o?yc.addScaledVector(Cf,p):yc.addScaledVector(Cf.sub(n),p))}n.add(yc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gc.copy(i.boundingSphere),gc.applyMatrix4(s),Ts.copy(e.ray).recast(e.near),!(gc.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(gc,w1)===null||Ts.origin.distanceToSquared(w1)>(e.far-e.near)**2))&&(M1.copy(s).invert(),Ts.copy(e.ray).applyMatrix4(M1),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ts)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,p=s.attributes.uv1,h=s.attributes.normal,m=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let w=0,b=m.length;w<b;w++){const x=m[w],f=o[x.materialIndex],_=Math.max(x.start,g.start),y=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let E=_,L=y;E<L;E+=3){const D=a.getX(E),N=a.getX(E+1),F=a.getX(E+2);r=wc(this,f,e,i,u,p,h,D,N,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const w=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let x=w,f=b;x<f;x+=3){const _=a.getX(x),y=a.getX(x+1),E=a.getX(x+2);r=wc(this,o,e,i,u,p,h,_,y,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let w=0,b=m.length;w<b;w++){const x=m[w],f=o[x.materialIndex],_=Math.max(x.start,g.start),y=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let E=_,L=y;E<L;E+=3){const D=E,N=E+1,F=E+2;r=wc(this,f,e,i,u,p,h,D,N,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const w=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let x=w,f=b;x<f;x+=3){const _=x,y=x+1,E=x+2;r=wc(this,o,e,i,u,p,h,_,y,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function mS(t,e,n,i,r,s,o,a){let l;if(e.side===gi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cs,a),l===null)return null;Mc.copy(a),Mc.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Mc);return u<n.near||u>n.far?null:{distance:u,point:Mc.clone(),object:t}}function wc(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,vc),t.getVertexPosition(l,_c),t.getVertexPosition(u,xc);const p=mS(t,e,n,i,vc,_c,xc,S1);if(p){const h=new W;Yi.getBarycoord(S1,vc,_c,xc,h),r&&(p.uv=Yi.getInterpolatedAttribute(r,a,l,u,h,new et)),s&&(p.uv1=Yi.getInterpolatedAttribute(s,a,l,u,h,new et)),o&&(p.normal=Yi.getInterpolatedAttribute(o,a,l,u,h,new W),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a,b:l,c:u,normal:new W,materialIndex:0};Yi.getNormal(vc,_c,xc,m.normal),p.face=m,p.barycoord=h}return p}class Gn extends cn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],p=[],h=[];let m=0,g=0;w("z","y","x",-1,-1,i,n,e,o,s,0),w("z","y","x",1,-1,i,n,-e,o,s,1),w("x","z","y",1,1,e,i,n,r,o,2),w("x","z","y",1,-1,e,i,-n,r,o,3),w("x","y","z",1,-1,e,n,i,r,s,4),w("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(p,3)),this.setAttribute("uv",new Rt(h,2));function w(b,x,f,_,y,E,L,D,N,F,T){const M=E/N,z=L/F,Y=E/2,se=L/2,ce=D/2,fe=N+1,X=F+1;let ne=0,H=0;const oe=new W;for(let ue=0;ue<X;ue++){const Pe=ue*z-se;for(let ze=0;ze<fe;ze++){const _t=ze*M-Y;oe[b]=_t*_,oe[x]=Pe*y,oe[f]=ce,u.push(oe.x,oe.y,oe.z),oe[b]=0,oe[x]=0,oe[f]=D>0?1:-1,p.push(oe.x,oe.y,oe.z),h.push(ze/N),h.push(1-ue/F),ne+=1}}for(let ue=0;ue<F;ue++)for(let Pe=0;Pe<N;Pe++){const ze=m+Pe+fe*ue,_t=m+Pe+fe*(ue+1),ft=m+(Pe+1)+fe*(ue+1),Ie=m+(Pe+1)+fe*ue;l.push(ze,_t,Ie),l.push(_t,ft,Ie),H+=6}a.addGroup(g,H,T),g+=H,m+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ia(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function ei(t){const e={};for(let n=0;n<t.length;n++){const i=ia(t[n]);for(const r in i)e[r]=i[r]}return e}function gS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function jx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const vS={clone:ia,merge:ei};var _S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class us extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_S,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=gS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class qx extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=ar,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new W,E1=new et,T1=new et;class Ei extends qx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=bp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(af*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bp*2*Math.atan(Math.tan(af*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,n){return this.getViewBounds(e,E1,T1),n.subVectors(T1,E1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(af*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wo=-90,So=1;class yS extends bn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ei(wo,So,e,n);r.layers=this.layers,this.add(r);const s=new Ei(wo,So,e,n);s.layers=this.layers,this.add(s);const o=new Ei(wo,So,e,n);o.layers=this.layers,this.add(o);const a=new Ei(wo,So,e,n);a.layers=this.layers,this.add(a);const l=new Ei(wo,So,e,n);l.layers=this.layers,this.add(l);const u=new Ei(wo,So,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ar)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,p]=this.children,h=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),e.render(n,p),e.setRenderTarget(h,m,g),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class Yx extends ii{constructor(e=[],n=ea,i,r,s,o,a,l,u,p){super(e,n,i,r,s,o,a,l,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class MS extends Ks{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Yx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gn(5,5,5),s=new us({name:"CubemapFromEquirect",uniforms:ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gi,blending:ss});s.uniforms.tEquirect.value=n;const o=new B(r,s),a=n.minFilter;return n.minFilter===Hs&&(n.minFilter=or),new yS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Ge extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wS={type:"move"};class Rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const b of e.hand.values()){const x=n.getJointPose(b,i),f=this._getHandJoint(u,b);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const p=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],m=p.position.distanceTo(h.position),g=.02,w=.005;u.inputState.pinching&&m>g+w?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=g-w&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ge;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class km{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(e),this.density=n}clone(){return new km(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class SS extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Pf=new W,ES=new W,TS=new vt;class Ds{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pf.subVectors(i,n).cross(ES.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Pf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||TS.getNormalMatrix(e),r=this.coplanarPoint(Pf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new Pl,bS=new et(.5,.5),Sc=new W;class Om{constructor(e=new Ds,n=new Ds,i=new Ds,r=new Ds,s=new Ds,o=new Ds){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ar,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],p=s[4],h=s[5],m=s[6],g=s[7],w=s[8],b=s[9],x=s[10],f=s[11],_=s[12],y=s[13],E=s[14],L=s[15];if(r[0].setComponents(u-o,g-p,f-w,L-_).normalize(),r[1].setComponents(u+o,g+p,f+w,L+_).normalize(),r[2].setComponents(u+a,g+h,f+b,L+y).normalize(),r[3].setComponents(u-a,g-h,f-b,L-y).normalize(),i)r[4].setComponents(l,m,x,E).normalize(),r[5].setComponents(u-l,g-m,f-x,L-E).normalize();else if(r[4].setComponents(u-l,g-m,f-x,L-E).normalize(),n===ar)r[5].setComponents(u+l,g+m,f+x,L+E).normalize();else if(n===wu)r[5].setComponents(l,m,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);const n=bS.distanceTo(e.center);return bs.radius=.7071067811865476+n,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Sc.x=r.normal.x>0?e.max.x:e.min.x,Sc.y=r.normal.y>0?e.max.y:e.min.y,Sc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ap extends ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Eu=new W,Tu=new W,b1=new Qt,La=new Gu,Ec=new Pl,If=new W,A1=new W;class C1 extends bn{constructor(e=new cn,n=new Ap){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Eu.fromBufferAttribute(n,r-1),Tu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Eu.distanceTo(Tu);e.setAttribute("lineDistance",new Rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(r),Ec.radius+=s,e.ray.intersectsSphere(Ec)===!1)return;b1.copy(r).invert(),La.copy(e.ray).applyMatrix4(b1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){const g=Math.max(0,o.start),w=Math.min(p.count,o.start+o.count);for(let b=g,x=w-1;b<x;b+=u){const f=p.getX(b),_=p.getX(b+1),y=Tc(this,e,La,l,f,_,b);y&&n.push(y)}if(this.isLineLoop){const b=p.getX(w-1),x=p.getX(g),f=Tc(this,e,La,l,b,x,w-1);f&&n.push(f)}}else{const g=Math.max(0,o.start),w=Math.min(m.count,o.start+o.count);for(let b=g,x=w-1;b<x;b+=u){const f=Tc(this,e,La,l,b,b+1,b);f&&n.push(f)}if(this.isLineLoop){const b=Tc(this,e,La,l,w-1,g,w-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Tc(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Eu.fromBufferAttribute(a,r),Tu.fromBufferAttribute(a,s),n.distanceSqToSegment(Eu,Tu,If,A1)>i)return;If.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(If);if(!(u<e.near||u>e.far))return{distance:u,point:A1.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class $x extends ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const R1=new Qt,Cp=new Gu,bc=new Pl,Ac=new W;class AS extends bn{constructor(e=new cn,n=new $x){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(r),bc.radius+=s,e.ray.intersectsSphere(bc)===!1)return;R1.copy(r).invert(),Cp.copy(e.ray).applyMatrix4(R1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let w=m,b=g;w<b;w++){const x=u.getX(w);Ac.fromBufferAttribute(h,x),P1(Ac,x,l,r,e,n,this)}}else{const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let w=m,b=g;w<b;w++)Ac.fromBufferAttribute(h,w),P1(Ac,w,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function P1(t,e,n,i,r,s,o){const a=Cp.distanceSqToPoint(t);if(a<n){const l=new W;Cp.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class As extends ii{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kx extends ii{constructor(e,n,i=$s,r,s,o,a=Ji,l=Ji,u,p=_l,h=1){if(p!==_l&&p!==xl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:n,depth:h};super(m,r,s,o,a,l,p,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Um(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Zx extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ui extends cn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],u=[],p=n/2,h=Math.PI/2*e,m=n,g=2*h+m,w=i*2+s,b=r+1,x=new W,f=new W;for(let _=0;_<=w;_++){let y=0,E=0,L=0,D=0;if(_<=i){const T=_/i,M=T*Math.PI/2;E=-p-e*Math.cos(M),L=e*Math.sin(M),D=-e*Math.cos(M),y=T*h}else if(_<=i+s){const T=(_-i)/s;E=-p+T*n,L=e,D=0,y=h+T*m}else{const T=(_-i-s)/i,M=T*Math.PI/2;E=p+e*Math.sin(M),L=e*Math.cos(M),D=e*Math.sin(M),y=h+m+T*h}const N=Math.max(0,Math.min(1,y/g));let F=0;_===0?F=.5/r:_===w&&(F=-.5/r);for(let T=0;T<=r;T++){const M=T/r,z=M*Math.PI*2,Y=Math.sin(z),se=Math.cos(z);f.x=-L*se,f.y=E,f.z=L*Y,a.push(f.x,f.y,f.z),x.set(-L*se,D,L*Y),x.normalize(),l.push(x.x,x.y,x.z),u.push(M+F,N)}if(_>0){const T=(_-1)*b;for(let M=0;M<r;M++){const z=T+M,Y=T+M+1,se=_*b+M,ce=_*b+M+1;o.push(z,Y,se),o.push(Y,ce,se)}}}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Hn extends cn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],u=new W,p=new et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,m=3;h<=n;h++,m+=3){const g=i+h/n*r;u.x=e*Math.cos(g),u.y=e*Math.sin(g),o.push(u.x,u.y,u.z),a.push(0,0,1),p.x=(o[m]/e+1)/2,p.y=(o[m+1]/e+1)/2,l.push(p.x,p.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(a,3)),this.setAttribute("uv",new Rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qe extends cn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const p=[],h=[],m=[],g=[];let w=0;const b=[],x=i/2;let f=0;_(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(p),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(m,3)),this.setAttribute("uv",new Rt(g,2));function _(){const E=new W,L=new W;let D=0;const N=(n-e)/i;for(let F=0;F<=s;F++){const T=[],M=F/s,z=M*(n-e)+e;for(let Y=0;Y<=r;Y++){const se=Y/r,ce=se*l+a,fe=Math.sin(ce),X=Math.cos(ce);L.x=z*fe,L.y=-M*i+x,L.z=z*X,h.push(L.x,L.y,L.z),E.set(fe,N,X).normalize(),m.push(E.x,E.y,E.z),g.push(se,1-M),T.push(w++)}b.push(T)}for(let F=0;F<r;F++)for(let T=0;T<s;T++){const M=b[T][F],z=b[T+1][F],Y=b[T+1][F+1],se=b[T][F+1];(e>0||T!==0)&&(p.push(M,z,se),D+=3),(n>0||T!==s-1)&&(p.push(z,Y,se),D+=3)}u.addGroup(f,D,0),f+=D}function y(E){const L=w,D=new et,N=new W;let F=0;const T=E===!0?e:n,M=E===!0?1:-1;for(let Y=1;Y<=r;Y++)h.push(0,x*M,0),m.push(0,M,0),g.push(.5,.5),w++;const z=w;for(let Y=0;Y<=r;Y++){const ce=Y/r*l+a,fe=Math.cos(ce),X=Math.sin(ce);N.x=T*X,N.y=x*M,N.z=T*fe,h.push(N.x,N.y,N.z),m.push(0,M,0),D.x=fe*.5+.5,D.y=X*.5*M+.5,g.push(D.x,D.y),w++}for(let Y=0;Y<r;Y++){const se=L+Y,ce=z+Y;E===!0?p.push(ce,ce+1,se):p.push(ce+1,ce,se),F+=3}u.addGroup(f,F,E===!0?1:2),f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hn extends Qe{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new hn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zm extends cn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),u(i),p(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new W,E=new W,L=new W;for(let D=0;D<n.length;D+=3)g(n[D+0],y),g(n[D+1],E),g(n[D+2],L),l(y,E,L,_)}function l(_,y,E,L){const D=L+1,N=[];for(let F=0;F<=D;F++){N[F]=[];const T=_.clone().lerp(E,F/D),M=y.clone().lerp(E,F/D),z=D-F;for(let Y=0;Y<=z;Y++)Y===0&&F===D?N[F][Y]=T:N[F][Y]=T.clone().lerp(M,Y/z)}for(let F=0;F<D;F++)for(let T=0;T<2*(D-F)-1;T++){const M=Math.floor(T/2);T%2===0?(m(N[F][M+1]),m(N[F+1][M]),m(N[F][M])):(m(N[F][M+1]),m(N[F+1][M+1]),m(N[F+1][M]))}}function u(_){const y=new W;for(let E=0;E<s.length;E+=3)y.x=s[E+0],y.y=s[E+1],y.z=s[E+2],y.normalize().multiplyScalar(_),s[E+0]=y.x,s[E+1]=y.y,s[E+2]=y.z}function p(){const _=new W;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const E=x(_)/2/Math.PI+.5,L=f(_)/Math.PI+.5;o.push(E,1-L)}w(),h()}function h(){for(let _=0;_<o.length;_+=6){const y=o[_+0],E=o[_+2],L=o[_+4],D=Math.max(y,E,L),N=Math.min(y,E,L);D>.9&&N<.1&&(y<.2&&(o[_+0]+=1),E<.2&&(o[_+2]+=1),L<.2&&(o[_+4]+=1))}}function m(_){s.push(_.x,_.y,_.z)}function g(_,y){const E=_*3;y.x=e[E+0],y.y=e[E+1],y.z=e[E+2]}function w(){const _=new W,y=new W,E=new W,L=new W,D=new et,N=new et,F=new et;for(let T=0,M=0;T<s.length;T+=9,M+=6){_.set(s[T+0],s[T+1],s[T+2]),y.set(s[T+3],s[T+4],s[T+5]),E.set(s[T+6],s[T+7],s[T+8]),D.set(o[M+0],o[M+1]),N.set(o[M+2],o[M+3]),F.set(o[M+4],o[M+5]),L.copy(_).add(y).add(E).divideScalar(3);const z=x(L);b(D,M+0,_,z),b(N,M+2,y,z),b(F,M+4,E,z)}}function b(_,y,E,L){L<0&&_.x===1&&(o[y]=_.x-1),E.x===0&&E.z===0&&(o[y]=L/2/Math.PI+.5)}function x(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zm(e.vertices,e.indices,e.radius,e.details)}}class Zt extends zm{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Zt(e.radius,e.detail)}}class Lr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const p=i[r],m=i[r+1]-p,g=(o-p)/m;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new et:new W);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new W,r=[],s=[],o=[],a=new W,l=new Qt;for(let g=0;g<=e;g++){const w=g/e;r[g]=this.getTangentAt(w,new W)}s[0]=new W,o[0]=new W;let u=Number.MAX_VALUE;const p=Math.abs(r[0].x),h=Math.abs(r[0].y),m=Math.abs(r[0].z);p<=u&&(u=p,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),m<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();const w=Math.acos(St(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,w))}o[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(St(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(g=-g);for(let w=1;w<=e;w++)s[w].applyMatrix4(l.makeRotationAxis(r[w],g*w)),o[w].crossVectors(r[w],s[w])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jx extends Lr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new et){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const p=Math.cos(this.aRotation),h=Math.sin(this.aRotation),m=l-this.aX,g=u-this.aY;l=m*p-g*h+this.aX,u=m*h+g*p+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class CS extends Jx{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Bm(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,p,h){let m=(o-s)/u-(a-s)/(u+p)+(a-o)/p,g=(a-o)/p-(l-o)/(p+h)+(l-a)/h;m*=p,g*=p,r(o,a,m,g)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Cc=new W,Lf=new Bm,Df=new Bm,Nf=new Bm;class Rp extends Lr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new W){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,p;this.closed||a>0?u=r[(a-1)%s]:(Cc.subVectors(r[0],r[1]).add(r[0]),u=Cc);const h=r[a%s],m=r[(a+1)%s];if(this.closed||a+2<s?p=r[(a+2)%s]:(Cc.subVectors(r[s-1],r[s-2]).add(r[s-1]),p=Cc),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let w=Math.pow(u.distanceToSquared(h),g),b=Math.pow(h.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(p),g);b<1e-4&&(b=1),w<1e-4&&(w=b),x<1e-4&&(x=b),Lf.initNonuniformCatmullRom(u.x,h.x,m.x,p.x,w,b,x),Df.initNonuniformCatmullRom(u.y,h.y,m.y,p.y,w,b,x),Nf.initNonuniformCatmullRom(u.z,h.z,m.z,p.z,w,b,x)}else this.curveType==="catmullrom"&&(Lf.initCatmullRom(u.x,h.x,m.x,p.x,this.tension),Df.initCatmullRom(u.y,h.y,m.y,p.y,this.tension),Nf.initCatmullRom(u.z,h.z,m.z,p.z,this.tension));return i.set(Lf.calc(l),Df.calc(l),Nf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new W().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function I1(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function RS(t,e){const n=1-t;return n*n*e}function PS(t,e){return 2*(1-t)*t*e}function IS(t,e){return t*t*e}function Ka(t,e,n,i){return RS(t,e)+PS(t,n)+IS(t,i)}function LS(t,e){const n=1-t;return n*n*n*e}function DS(t,e){const n=1-t;return 3*n*n*t*e}function NS(t,e){return 3*(1-t)*t*t*e}function US(t,e){return t*t*t*e}function Za(t,e,n,i,r){return LS(t,e)+DS(t,n)+NS(t,i)+US(t,r)}class FS extends Lr{constructor(e=new et,n=new et,i=new et,r=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new et){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Za(e,r.x,s.x,o.x,a.x),Za(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kS extends Lr{constructor(e=new W,n=new W,i=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new W){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Za(e,r.x,s.x,o.x,a.x),Za(e,r.y,s.y,o.y,a.y),Za(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class OS extends Lr{constructor(e=new et,n=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new et){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new et){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zS extends Lr{constructor(e=new W,n=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new W){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new W){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class BS extends Lr{constructor(e=new et,n=new et,i=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new et){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ka(e,r.x,s.x,o.x),Ka(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qx extends Lr{constructor(e=new W,n=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new W){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ka(e,r.x,s.x,o.x),Ka(e,r.y,s.y,o.y),Ka(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class HS extends Lr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new et){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],p=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(I1(a,l.x,u.x,p.x,h.x),I1(a,l.y,u.y,p.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new et().fromArray(r))}return this}}var VS=Object.freeze({__proto__:null,ArcCurve:CS,CatmullRomCurve3:Rp,CubicBezierCurve:FS,CubicBezierCurve3:kS,EllipseCurve:Jx,LineCurve:OS,LineCurve3:zS,QuadraticBezierCurve:BS,QuadraticBezierCurve3:Qx,SplineCurve:HS});class Sn extends cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,p=l+1,h=e/a,m=n/l,g=[],w=[],b=[],x=[];for(let f=0;f<p;f++){const _=f*m-o;for(let y=0;y<u;y++){const E=y*h-s;w.push(E,-_,0),b.push(0,0,1),x.push(y/a),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const y=_+u*f,E=_+u*(f+1),L=_+1+u*(f+1),D=_+1+u*f;g.push(y,E,D),g.push(E,L,D)}this.setIndex(g),this.setAttribute("position",new Rt(w,3)),this.setAttribute("normal",new Rt(b,3)),this.setAttribute("uv",new Rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ut extends cn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const p=[],h=new W,m=new W,g=[],w=[],b=[],x=[];for(let f=0;f<=i;f++){const _=[],y=f/i;let E=0;f===0&&o===0?E=.5/n:f===i&&l===Math.PI&&(E=-.5/n);for(let L=0;L<=n;L++){const D=L/n;h.x=-e*Math.cos(r+D*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+D*s)*Math.sin(o+y*a),w.push(h.x,h.y,h.z),m.copy(h).normalize(),b.push(m.x,m.y,m.z),x.push(D+E,1-y),_.push(u++)}p.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const y=p[f][_+1],E=p[f][_],L=p[f+1][_],D=p[f+1][_+1];(f!==0||o>0)&&g.push(y,E,D),(f!==i-1||l<Math.PI)&&g.push(E,L,D)}this.setIndex(g),this.setAttribute("position",new Rt(w,3)),this.setAttribute("normal",new Rt(b,3)),this.setAttribute("uv",new Rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kt extends cn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],p=new W,h=new W,m=new W;for(let g=0;g<=i;g++)for(let w=0;w<=r;w++){const b=w/r*s,x=g/i*Math.PI*2;h.x=(e+n*Math.cos(x))*Math.cos(b),h.y=(e+n*Math.cos(x))*Math.sin(b),h.z=n*Math.sin(x),a.push(h.x,h.y,h.z),p.x=e*Math.cos(b),p.y=e*Math.sin(b),m.subVectors(h,p).normalize(),l.push(m.x,m.y,m.z),u.push(w/r),u.push(g/i)}for(let g=1;g<=i;g++)for(let w=1;w<=r;w++){const b=(r+1)*g+w-1,x=(r+1)*(g-1)+w-1,f=(r+1)*(g-1)+w,_=(r+1)*g+w;o.push(b,x,_),o.push(x,f,_)}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ja extends cn{constructor(e=new Qx(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new W,l=new W,u=new et;let p=new W;const h=[],m=[],g=[],w=[];b(),this.setIndex(w),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(m,3)),this.setAttribute("uv",new Rt(g,2));function b(){for(let y=0;y<n;y++)x(y);x(s===!1?n:0),_(),f()}function x(y){p=e.getPointAt(y/n,p);const E=o.normals[y],L=o.binormals[y];for(let D=0;D<=r;D++){const N=D/r*Math.PI*2,F=Math.sin(N),T=-Math.cos(N);l.x=T*E.x+F*L.x,l.y=T*E.y+F*L.y,l.z=T*E.z+F*L.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=p.x+i*l.x,a.y=p.y+i*l.y,a.z=p.z+i*l.z,h.push(a.x,a.y,a.z)}}function f(){for(let y=1;y<=n;y++)for(let E=1;E<=r;E++){const L=(r+1)*(y-1)+(E-1),D=(r+1)*y+(E-1),N=(r+1)*y+E,F=(r+1)*(y-1)+E;w.push(L,D,F),w.push(D,N,F)}}function _(){for(let y=0;y<=n;y++)for(let E=0;E<=r;E++)u.x=y/n,u.y=E/r,g.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ja(new VS[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class be extends ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nm,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uf extends ps{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nm,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=Am,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class GS extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WS extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hm extends bn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class XS extends Hm{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Ff=new Qt,L1=new W,D1=new W;class ey{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=dr,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Om,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;L1.setFromMatrixPosition(e.matrixWorld),n.position.copy(L1),D1.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(D1),n.updateMatrixWorld(),Ff.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ff,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ff)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const N1=new Qt,Da=new W,kf=new W;class jS extends ey{constructor(){super(new Ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Da.setFromMatrixPosition(e.matrixWorld),i.position.copy(Da),kf.copy(i.position),kf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(kf),i.updateMatrixWorld(),r.makeTranslation(-Da.x,-Da.y,-Da.z),N1.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(N1,i.coordinateSystem,i.reversedDepth)}}class Wi extends Hm{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new jS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ty extends qx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=p*this.view.offsetY,l=a-p*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class qS extends ey{constructor(){super(new ty(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class U1 extends Hm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new qS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class YS extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const F1=new Qt;class $S{constructor(e,n,i=0,r=1/0){this.ray=new Gu(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Fm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return F1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(F1),this}intersectObject(e,n=!0,i=[]){return Pp(e,this,i,n),i.sort(k1),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Pp(e[r],this,i,n);return i.sort(k1),i}}function k1(t,e){return t.distance-e.distance}function Pp(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Pp(s[o],e,n,!0)}}function O1(t,e,n,i){const r=KS(i);switch(n){case Fx:return t*e;case Ox:return t*e/r.components*r.byteLength;case Im:return t*e/r.components*r.byteLength;case zx:return t*e*2/r.components*r.byteLength;case Lm:return t*e*2/r.components*r.byteLength;case kx:return t*e*3/r.components*r.byteLength;case $i:return t*e*4/r.components*r.byteLength;case Dm:return t*e*4/r.components*r.byteLength;case Xc:case jc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qc:case Yc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qh:case tp:return Math.max(t,16)*Math.max(e,8)/4;case Jh:case ep:return Math.max(t,8)*Math.max(e,8)/2;case np:case ip:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ap:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case lp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case cp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case up:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case dp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case fp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case hp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case pp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case mp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case gp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case vp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case _p:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case xp:case yp:case Mp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case wp:case Sp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ep:case Tp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function KS(t){switch(t){case dr:case Lx:return{byteLength:1,components:1};case gl:case Dx:case bl:return{byteLength:2,components:1};case Rm:case Pm:return{byteLength:2,components:4};case $s:case Cm:case Er:return{byteLength:4,components:1};case Nx:case Ux:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ny(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ZS(t){const e=new WeakMap;function n(a,l){const u=a.array,p=a.usage,h=u.byteLength,m=t.createBuffer();t.bindBuffer(l,m),t.bufferData(l,u,p),a.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const p=l.array,h=l.updateRanges;if(t.bindBuffer(u,a),h.length===0)t.bufferSubData(u,0,p);else{h.sort((g,w)=>g.start-w.start);let m=0;for(let g=1;g<h.length;g++){const w=h[m],b=h[g];b.start<=w.start+w.count+1?w.count=Math.max(w.count,b.start+b.count-w.start):(++m,h[m]=b)}h.length=m+1;for(let g=0,w=h.length;g<w;g++){const b=h[g];t.bufferSubData(u,b.start*p.BYTES_PER_ELEMENT,p,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const p=e.get(a);(!p||p.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var JS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QS=`#ifdef USE_ALPHAHASH
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
#endif`,eE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rE=`#ifdef USE_AOMAP
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
#endif`,sE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oE=`#ifdef USE_BATCHING
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
#endif`,aE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dE=`#ifdef USE_IRIDESCENCE
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
#endif`,fE=`#ifdef USE_BUMPMAP
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
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ME=`#define PI 3.141592653589793
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
} // validated`,wE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,SE=`vec3 transformedNormal = objectNormal;
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
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CE="gl_FragColor = linearToOutputTexel( gl_FragColor );",RE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PE=`#ifdef USE_ENVMAP
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
#endif`,IE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LE=`#ifdef USE_ENVMAP
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
#endif`,DE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zE=`#ifdef USE_GRADIENTMAP
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
}`,BE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GE=`uniform bool receiveShadow;
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
#endif`,WE=`#ifdef USE_ENVMAP
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
#endif`,XE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$E=`PhysicalMaterial material;
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
#endif`,KE=`struct PhysicalMaterial {
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
}`,ZE=`
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
#endif`,JE=`#if defined( RE_IndirectDiffuse )
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
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a3=`#if defined( USE_POINTS_UV )
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
#endif`,l3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h3=`#ifdef USE_MORPHTARGETS
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
#endif`,p3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,g3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y3=`#ifdef USE_NORMALMAP
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
#endif`,M3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F3=`float getShadowMask() {
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
}`,k3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O3=`#ifdef USE_SKINNING
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
#endif`,z3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B3=`#ifdef USE_SKINNING
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
#endif`,H3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X3=`#ifdef USE_TRANSMISSION
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
#endif`,j3=`#ifdef USE_TRANSMISSION
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
#endif`,q3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J3=`uniform sampler2D t2D;
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
}`,Q3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`#include <common>
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
}`,rT=`#if DEPTH_PACKING == 3200
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
}`,sT=`#define DISTANCE
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
}`,oT=`#define DISTANCE
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`uniform float scale;
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
}`,uT=`uniform vec3 diffuse;
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
}`,dT=`#include <common>
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
}`,fT=`uniform vec3 diffuse;
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
}`,hT=`#define LAMBERT
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
}`,pT=`#define LAMBERT
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
}`,mT=`#define MATCAP
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
}`,gT=`#define MATCAP
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
}`,vT=`#define NORMAL
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
}`,_T=`#define NORMAL
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
}`,xT=`#define PHONG
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
}`,yT=`#define PHONG
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
}`,MT=`#define STANDARD
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
}`,wT=`#define STANDARD
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
}`,ST=`#define TOON
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
}`,ET=`#define TOON
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
}`,TT=`uniform float size;
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
}`,bT=`uniform vec3 diffuse;
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
}`,AT=`#include <common>
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
}`,CT=`uniform vec3 color;
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
}`,RT=`uniform float rotation;
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
}`,PT=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:JS,alphahash_pars_fragment:QS,alphamap_fragment:eE,alphamap_pars_fragment:tE,alphatest_fragment:nE,alphatest_pars_fragment:iE,aomap_fragment:rE,aomap_pars_fragment:sE,batching_pars_vertex:oE,batching_vertex:aE,begin_vertex:lE,beginnormal_vertex:cE,bsdfs:uE,iridescence_fragment:dE,bumpmap_pars_fragment:fE,clipping_planes_fragment:hE,clipping_planes_pars_fragment:pE,clipping_planes_pars_vertex:mE,clipping_planes_vertex:gE,color_fragment:vE,color_pars_fragment:_E,color_pars_vertex:xE,color_vertex:yE,common:ME,cube_uv_reflection_fragment:wE,defaultnormal_vertex:SE,displacementmap_pars_vertex:EE,displacementmap_vertex:TE,emissivemap_fragment:bE,emissivemap_pars_fragment:AE,colorspace_fragment:CE,colorspace_pars_fragment:RE,envmap_fragment:PE,envmap_common_pars_fragment:IE,envmap_pars_fragment:LE,envmap_pars_vertex:DE,envmap_physical_pars_fragment:WE,envmap_vertex:NE,fog_vertex:UE,fog_pars_vertex:FE,fog_fragment:kE,fog_pars_fragment:OE,gradientmap_pars_fragment:zE,lightmap_pars_fragment:BE,lights_lambert_fragment:HE,lights_lambert_pars_fragment:VE,lights_pars_begin:GE,lights_toon_fragment:XE,lights_toon_pars_fragment:jE,lights_phong_fragment:qE,lights_phong_pars_fragment:YE,lights_physical_fragment:$E,lights_physical_pars_fragment:KE,lights_fragment_begin:ZE,lights_fragment_maps:JE,lights_fragment_end:QE,logdepthbuf_fragment:e3,logdepthbuf_pars_fragment:t3,logdepthbuf_pars_vertex:n3,logdepthbuf_vertex:i3,map_fragment:r3,map_pars_fragment:s3,map_particle_fragment:o3,map_particle_pars_fragment:a3,metalnessmap_fragment:l3,metalnessmap_pars_fragment:c3,morphinstance_vertex:u3,morphcolor_vertex:d3,morphnormal_vertex:f3,morphtarget_pars_vertex:h3,morphtarget_vertex:p3,normal_fragment_begin:m3,normal_fragment_maps:g3,normal_pars_fragment:v3,normal_pars_vertex:_3,normal_vertex:x3,normalmap_pars_fragment:y3,clearcoat_normal_fragment_begin:M3,clearcoat_normal_fragment_maps:w3,clearcoat_pars_fragment:S3,iridescence_pars_fragment:E3,opaque_fragment:T3,packing:b3,premultiplied_alpha_fragment:A3,project_vertex:C3,dithering_fragment:R3,dithering_pars_fragment:P3,roughnessmap_fragment:I3,roughnessmap_pars_fragment:L3,shadowmap_pars_fragment:D3,shadowmap_pars_vertex:N3,shadowmap_vertex:U3,shadowmask_pars_fragment:F3,skinbase_vertex:k3,skinning_pars_vertex:O3,skinning_vertex:z3,skinnormal_vertex:B3,specularmap_fragment:H3,specularmap_pars_fragment:V3,tonemapping_fragment:G3,tonemapping_pars_fragment:W3,transmission_fragment:X3,transmission_pars_fragment:j3,uv_pars_fragment:q3,uv_pars_vertex:Y3,uv_vertex:$3,worldpos_vertex:K3,background_vert:Z3,background_frag:J3,backgroundCube_vert:Q3,backgroundCube_frag:eT,cube_vert:tT,cube_frag:nT,depth_vert:iT,depth_frag:rT,distanceRGBA_vert:sT,distanceRGBA_frag:oT,equirect_vert:aT,equirect_frag:lT,linedashed_vert:cT,linedashed_frag:uT,meshbasic_vert:dT,meshbasic_frag:fT,meshlambert_vert:hT,meshlambert_frag:pT,meshmatcap_vert:mT,meshmatcap_frag:gT,meshnormal_vert:vT,meshnormal_frag:_T,meshphong_vert:xT,meshphong_frag:yT,meshphysical_vert:MT,meshphysical_frag:wT,meshtoon_vert:ST,meshtoon_frag:ET,points_vert:TT,points_frag:bT,shadow_vert:AT,shadow_frag:CT,sprite_vert:RT,sprite_frag:PT},ke={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},rr={basic:{uniforms:ei([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:ei([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Mt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:ei([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:ei([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:ei([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Mt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:ei([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:ei([ke.points,ke.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:ei([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:ei([ke.common,ke.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:ei([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:ei([ke.sprite,ke.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:ei([ke.common,ke.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:ei([ke.lights,ke.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};rr.physical={uniforms:ei([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Rc={r:0,b:0,g:0},Cs=new er,IT=new Qt;function LT(t,e,n,i,r,s,o){const a=new Mt(0);let l=s===!0?0:1,u,p,h=null,m=0,g=null;function w(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?n:e).get(E)),E}function b(y){let E=!1;const L=w(y);L===null?f(a,l):L&&L.isColor&&(f(L,1),E=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(y,E){const L=w(E);L&&(L.isCubeTexture||L.mapping===Vu)?(p===void 0&&(p=new B(new Gn(1,1,1),new us({name:"BackgroundCubeMaterial",uniforms:ia(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Cs.copy(E.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),p.material.uniforms.envMap.value=L,p.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(IT.makeRotationFromEuler(Cs)),p.material.toneMapped=Dt.getTransfer(L.colorSpace)!==Xt,(h!==L||m!==L.version||g!==t.toneMapping)&&(p.material.needsUpdate=!0,h=L,m=L.version,g=t.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(u===void 0&&(u=new B(new Sn(2,2),new us({name:"BackgroundMaterial",uniforms:ia(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=L,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=Dt.getTransfer(L.colorSpace)!==Xt,L.matrixAutoUpdate===!0&&L.updateMatrix(),u.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||m!==L.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,h=L,m=L.version,g=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function f(y,E){y.getRGB(Rc,jx(t)),i.buffers.color.setClear(Rc.r,Rc.g,Rc.b,E,o)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),l=E,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:b,addToRenderList:x,dispose:_}}function DT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,o=!1;function a(M,z,Y,se,ce){let fe=!1;const X=h(se,Y,z);s!==X&&(s=X,u(s.object)),fe=g(M,se,Y,ce),fe&&w(M,se,Y,ce),ce!==null&&e.update(ce,t.ELEMENT_ARRAY_BUFFER),(fe||o)&&(o=!1,E(M,z,Y,se),ce!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function l(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function p(M){return t.deleteVertexArray(M)}function h(M,z,Y){const se=Y.wireframe===!0;let ce=i[M.id];ce===void 0&&(ce={},i[M.id]=ce);let fe=ce[z.id];fe===void 0&&(fe={},ce[z.id]=fe);let X=fe[se];return X===void 0&&(X=m(l()),fe[se]=X),X}function m(M){const z=[],Y=[],se=[];for(let ce=0;ce<n;ce++)z[ce]=0,Y[ce]=0,se[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:se,object:M,attributes:{},index:null}}function g(M,z,Y,se){const ce=s.attributes,fe=z.attributes;let X=0;const ne=Y.getAttributes();for(const H in ne)if(ne[H].location>=0){const ue=ce[H];let Pe=fe[H];if(Pe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Pe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Pe=M.instanceColor)),ue===void 0||ue.attribute!==Pe||Pe&&ue.data!==Pe.data)return!0;X++}return s.attributesNum!==X||s.index!==se}function w(M,z,Y,se){const ce={},fe=z.attributes;let X=0;const ne=Y.getAttributes();for(const H in ne)if(ne[H].location>=0){let ue=fe[H];ue===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const Pe={};Pe.attribute=ue,ue&&ue.data&&(Pe.data=ue.data),ce[H]=Pe,X++}s.attributes=ce,s.attributesNum=X,s.index=se}function b(){const M=s.newAttributes;for(let z=0,Y=M.length;z<Y;z++)M[z]=0}function x(M){f(M,0)}function f(M,z){const Y=s.newAttributes,se=s.enabledAttributes,ce=s.attributeDivisors;Y[M]=1,se[M]===0&&(t.enableVertexAttribArray(M),se[M]=1),ce[M]!==z&&(t.vertexAttribDivisor(M,z),ce[M]=z)}function _(){const M=s.newAttributes,z=s.enabledAttributes;for(let Y=0,se=z.length;Y<se;Y++)z[Y]!==M[Y]&&(t.disableVertexAttribArray(Y),z[Y]=0)}function y(M,z,Y,se,ce,fe,X){X===!0?t.vertexAttribIPointer(M,z,Y,ce,fe):t.vertexAttribPointer(M,z,Y,se,ce,fe)}function E(M,z,Y,se){b();const ce=se.attributes,fe=Y.getAttributes(),X=z.defaultAttributeValues;for(const ne in fe){const H=fe[ne];if(H.location>=0){let oe=ce[ne];if(oe===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const ue=oe.normalized,Pe=oe.itemSize,ze=e.get(oe);if(ze===void 0)continue;const _t=ze.buffer,ft=ze.type,Ie=ze.bytesPerElement,pe=ft===t.INT||ft===t.UNSIGNED_INT||oe.gpuType===Cm;if(oe.isInterleavedBufferAttribute){const _e=oe.data,we=_e.stride,nt=oe.offset;if(_e.isInstancedInterleavedBuffer){for(let He=0;He<H.locationSize;He++)f(H.location+He,_e.meshPerAttribute);M.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let He=0;He<H.locationSize;He++)x(H.location+He);t.bindBuffer(t.ARRAY_BUFFER,_t);for(let He=0;He<H.locationSize;He++)y(H.location+He,Pe/H.locationSize,ft,ue,we*Ie,(nt+Pe/H.locationSize*He)*Ie,pe)}else{if(oe.isInstancedBufferAttribute){for(let _e=0;_e<H.locationSize;_e++)f(H.location+_e,oe.meshPerAttribute);M.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<H.locationSize;_e++)x(H.location+_e);t.bindBuffer(t.ARRAY_BUFFER,_t);for(let _e=0;_e<H.locationSize;_e++)y(H.location+_e,Pe/H.locationSize,ft,ue,Pe*Ie,Pe/H.locationSize*_e*Ie,pe)}}else if(X!==void 0){const ue=X[ne];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(H.location,ue);break;case 3:t.vertexAttrib3fv(H.location,ue);break;case 4:t.vertexAttrib4fv(H.location,ue);break;default:t.vertexAttrib1fv(H.location,ue)}}}}_()}function L(){F();for(const M in i){const z=i[M];for(const Y in z){const se=z[Y];for(const ce in se)p(se[ce].object),delete se[ce];delete z[Y]}delete i[M]}}function D(M){if(i[M.id]===void 0)return;const z=i[M.id];for(const Y in z){const se=z[Y];for(const ce in se)p(se[ce].object),delete se[ce];delete z[Y]}delete i[M.id]}function N(M){for(const z in i){const Y=i[z];if(Y[M.id]===void 0)continue;const se=Y[M.id];for(const ce in se)p(se[ce].object),delete se[ce];delete Y[M.id]}}function F(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:x,disableUnusedAttributes:_}}function NT(t,e,n){let i;function r(u){i=u}function s(u,p){t.drawArrays(i,u,p),n.update(p,i,1)}function o(u,p,h){h!==0&&(t.drawArraysInstanced(i,u,p,h),n.update(p,i,h))}function a(u,p,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,p,0,h);let g=0;for(let w=0;w<h;w++)g+=p[w];n.update(g,i,1)}function l(u,p,h,m){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let w=0;w<u.length;w++)o(u[w],p[w],m[w]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,p,0,m,0,h);let w=0;for(let b=0;b<h;b++)w+=p[b]*m[b];n.update(w,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function UT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==$i&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const F=N===bl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==dr&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Er&&!F)}function l(N){if(N==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const p=l(u);p!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const h=n.logarithmicDepthBuffer===!0,m=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=w>0,D=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:w,maxTextureSize:b,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:L,maxSamples:D}}function FT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ds,a=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,m){const g=h.length!==0||m||i!==0||r;return r=m,i=h.length,g},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,m){n=p(h,m,0)},this.setState=function(h,m,g){const w=h.clippingPlanes,b=h.clipIntersection,x=h.clipShadows,f=t.get(h);if(!r||w===null||w.length===0||s&&!x)s?p(null):u();else{const _=s?0:i,y=_*4;let E=f.clippingState||null;l.value=E,E=p(w,m,y,g);for(let L=0;L!==y;++L)E[L]=n[L];f.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(h,m,g,w){const b=h!==null?h.length:0;let x=null;if(b!==0){if(x=l.value,w!==!0||x===null){const f=g+b*4,_=m.matrixWorldInverse;a.getNormalMatrix(_),(x===null||x.length<f)&&(x=new Float32Array(f));for(let y=0,E=g;y!==b;++y,E+=4)o.copy(h[y]).applyMatrix4(_,a),o.normal.toArray(x,E),x[E+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function kT(t){let e=new WeakMap;function n(o,a){return a===$h?o.mapping=ea:a===Kh&&(o.mapping=ta),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$h||a===Kh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new MS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ko=4,z1=[.125,.215,.35,.446,.526,.582],Fs=20,Of=new ty,B1=new Mt;let zf=null,Bf=0,Hf=0,Vf=!1;const Ns=(1+Math.sqrt(5))/2,Eo=1/Ns,H1=[new W(-Ns,Eo,0),new W(Ns,Eo,0),new W(-Eo,0,Ns),new W(Eo,0,Ns),new W(0,Ns,-Eo),new W(0,Ns,Eo),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],OT=new W;class V1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=OT}=s;zf=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),Hf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=W1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zf,Bf,Hf),this._renderer.xr.enabled=Vf,e.scissorTest=!1,Pc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ea||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zf=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),Hf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:or,minFilter:or,generateMipmaps:!1,type:bl,format:$i,colorSpace:na,depthBuffer:!1},r=G1(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G1(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zT(s)),this._blurMaterial=BT(s,e,n)}return r}_compileMaterial(e){const n=new B(this._lodPlanes[0],e);this._renderer.compile(n,Of)}_sceneToCubeUV(e,n,i,r,s){const l=new Ei(90,1,n,i),u=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,g=h.toneMapping;h.getClearColor(B1),h.toneMapping=os,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const b=new wt({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1}),x=new B(new Gn,b);let f=!1;const _=e.background;_?_.isColor&&(b.color.copy(_),e.background=null,f=!0):(b.color.copy(B1),f=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[y],s.y,s.z)):E===1?(l.up.set(0,0,u[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[y],s.z)):(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[y]));const L=this._cubeSize;Pc(r,E*L,y>2?L:0,L,L),h.setRenderTarget(r),f&&h.render(x,l),h.render(e,l)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=g,h.autoClear=m,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ea||e.mapping===ta;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=X1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=W1());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Of)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=H1[(r-s-1)%H1.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,h=new B(this._lodPlanes[r],u),m=u.uniforms,g=this._sizeLods[i]-1,w=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Fs-1),b=s/w,x=isFinite(s)?1+Math.floor(p*b):Fs;x>Fs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Fs}`);const f=[];let _=0;for(let N=0;N<Fs;++N){const F=N/b,T=Math.exp(-F*F/2);f.push(T),N===0?_+=T:N<x&&(_+=2*T)}for(let N=0;N<f.length;N++)f[N]=f[N]/_;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=f,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:y}=this;m.dTheta.value=w,m.mipInt.value=y-i;const E=this._sizeLods[r],L=3*E*(r>y-ko?r-y+ko:0),D=4*(this._cubeSize-E);Pc(n,L,D,3*E,2*E),l.setRenderTarget(n),l.render(h,Of)}}function zT(t){const e=[],n=[],i=[];let r=t;const s=t-ko+1+z1.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ko?l=z1[o-t+ko-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),p=-u,h=1+u,m=[p,p,h,p,h,h,p,p,h,h,p,h],g=6,w=6,b=3,x=2,f=1,_=new Float32Array(b*w*g),y=new Float32Array(x*w*g),E=new Float32Array(f*w*g);for(let D=0;D<g;D++){const N=D%3*2/3-1,F=D>2?0:-1,T=[N,F,0,N+2/3,F,0,N+2/3,F+1,0,N,F,0,N+2/3,F+1,0,N,F+1,0];_.set(T,b*w*D),y.set(m,x*w*D);const M=[D,D,D,D,D,D];E.set(M,f*w*D)}const L=new cn;L.setAttribute("position",new ur(_,b)),L.setAttribute("uv",new ur(y,x)),L.setAttribute("faceIndex",new ur(E,f)),e.push(L),r>ko&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function G1(t,e,n){const i=new Ks(t,e,n);return i.texture.mapping=Vu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function BT(t,e,n){const i=new Float32Array(Fs),r=new W(0,1,0);return new us({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vm(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function W1(){return new us({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vm(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function X1(){return new us({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Vm(){return`

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
	`}function HT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===$h||l===Kh,p=l===ea||l===ta;if(u||p){let h=e.get(a);const m=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return n===null&&(n=new V1(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const g=a.image;return u&&g&&g.height>0||p&&g&&r(g)?(n===null&&(n=new V1(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let p=0;p<u;p++)a[p]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function VT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&yl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function GT(t,e,n,i){const r={},s=new WeakMap;function o(h){const m=h.target;m.index!==null&&e.remove(m.index);for(const w in m.attributes)e.remove(m.attributes[w]);m.removeEventListener("dispose",o),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function a(h,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,n.memory.geometries++),m}function l(h){const m=h.attributes;for(const g in m)e.update(m[g],t.ARRAY_BUFFER)}function u(h){const m=[],g=h.index,w=h.attributes.position;let b=0;if(g!==null){const _=g.array;b=g.version;for(let y=0,E=_.length;y<E;y+=3){const L=_[y+0],D=_[y+1],N=_[y+2];m.push(L,D,D,N,N,L)}}else if(w!==void 0){const _=w.array;b=w.version;for(let y=0,E=_.length/3-1;y<E;y+=3){const L=y+0,D=y+1,N=y+2;m.push(L,D,D,N,N,L)}}else return;const x=new(Hx(m)?Xx:Wx)(m,1);x.version=b;const f=s.get(h);f&&e.remove(f),s.set(h,x)}function p(h){const m=s.get(h);if(m){const g=h.index;g!==null&&m.version<g.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:p}}function WT(t,e,n){let i;function r(m){i=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function l(m,g){t.drawElements(i,g,s,m*o),n.update(g,i,1)}function u(m,g,w){w!==0&&(t.drawElementsInstanced(i,g,s,m*o,w),n.update(g,i,w))}function p(m,g,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,m,0,w);let x=0;for(let f=0;f<w;f++)x+=g[f];n.update(x,i,1)}function h(m,g,w,b){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let f=0;f<m.length;f++)u(m[f]/o,g[f],b[f]);else{x.multiDrawElementsInstancedWEBGL(i,g,0,s,m,0,b,0,w);let f=0;for(let _=0;_<w;_++)f+=g[_]*b[_];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=p,this.renderMultiDrawInstances=h}function XT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jT(t,e,n){const i=new WeakMap,r=new jt;function s(o,a,l){const u=o.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=p!==void 0?p.length:0;let m=i.get(a);if(m===void 0||m.count!==h){let M=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var g=M;m!==void 0&&m.texture.dispose();const w=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;w===!0&&(E=1),b===!0&&(E=2),x===!0&&(E=3);let L=a.attributes.position.count*E,D=1;L>e.maxTextureSize&&(D=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const N=new Float32Array(L*D*4*h),F=new Vx(N,L,D,h);F.type=Er,F.needsUpdate=!0;const T=E*4;for(let z=0;z<h;z++){const Y=f[z],se=_[z],ce=y[z],fe=L*D*4*z;for(let X=0;X<Y.count;X++){const ne=X*T;w===!0&&(r.fromBufferAttribute(Y,X),N[fe+ne+0]=r.x,N[fe+ne+1]=r.y,N[fe+ne+2]=r.z,N[fe+ne+3]=0),b===!0&&(r.fromBufferAttribute(se,X),N[fe+ne+4]=r.x,N[fe+ne+5]=r.y,N[fe+ne+6]=r.z,N[fe+ne+7]=0),x===!0&&(r.fromBufferAttribute(ce,X),N[fe+ne+8]=r.x,N[fe+ne+9]=r.y,N[fe+ne+10]=r.z,N[fe+ne+11]=ce.itemSize===4?r.w:1)}}m={count:h,texture:F,size:new et(L,D)},i.set(a,m),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let w=0;for(let x=0;x<u.length;x++)w+=u[x];const b=a.morphTargetsRelative?1:1-w;l.getUniforms().setValue(t,"morphTargetBaseInfluence",b),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}return{update:s}}function qT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,p=l.geometry,h=e.get(l,p);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const iy=new ii,j1=new Kx(1,1),ry=new Vx,sy=new rS,oy=new Yx,q1=[],Y1=[],$1=new Float32Array(16),K1=new Float32Array(9),Z1=new Float32Array(4);function la(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=q1[r];if(s===void 0&&(s=new Float32Array(r),q1[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function An(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Cn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Wu(t,e){let n=Y1[e];n===void 0&&(n=new Int32Array(e),Y1[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function YT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2fv(this.addr,e),Cn(n,e)}}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(An(n,e))return;t.uniform3fv(this.addr,e),Cn(n,e)}}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4fv(this.addr,e),Cn(n,e)}}function JT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(An(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Cn(n,e)}else{if(An(n,i))return;Z1.set(i),t.uniformMatrix2fv(this.addr,!1,Z1),Cn(n,i)}}function QT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(An(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Cn(n,e)}else{if(An(n,i))return;K1.set(i),t.uniformMatrix3fv(this.addr,!1,K1),Cn(n,i)}}function e5(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(An(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Cn(n,e)}else{if(An(n,i))return;$1.set(i),t.uniformMatrix4fv(this.addr,!1,$1),Cn(n,i)}}function t5(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function n5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2iv(this.addr,e),Cn(n,e)}}function i5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;t.uniform3iv(this.addr,e),Cn(n,e)}}function r5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4iv(this.addr,e),Cn(n,e)}}function s5(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function o5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2uiv(this.addr,e),Cn(n,e)}}function a5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;t.uniform3uiv(this.addr,e),Cn(n,e)}}function l5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4uiv(this.addr,e),Cn(n,e)}}function c5(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(j1.compareFunction=Bx,s=j1):s=iy,n.setTexture2D(e||s,r)}function u5(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||sy,r)}function d5(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||oy,r)}function f5(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ry,r)}function h5(t){switch(t){case 5126:return YT;case 35664:return $T;case 35665:return KT;case 35666:return ZT;case 35674:return JT;case 35675:return QT;case 35676:return e5;case 5124:case 35670:return t5;case 35667:case 35671:return n5;case 35668:case 35672:return i5;case 35669:case 35673:return r5;case 5125:return s5;case 36294:return o5;case 36295:return a5;case 36296:return l5;case 35678:case 36198:case 36298:case 36306:case 35682:return c5;case 35679:case 36299:case 36307:return u5;case 35680:case 36300:case 36308:case 36293:return d5;case 36289:case 36303:case 36311:case 36292:return f5}}function p5(t,e){t.uniform1fv(this.addr,e)}function m5(t,e){const n=la(e,this.size,2);t.uniform2fv(this.addr,n)}function g5(t,e){const n=la(e,this.size,3);t.uniform3fv(this.addr,n)}function v5(t,e){const n=la(e,this.size,4);t.uniform4fv(this.addr,n)}function _5(t,e){const n=la(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function x5(t,e){const n=la(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function y5(t,e){const n=la(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function M5(t,e){t.uniform1iv(this.addr,e)}function w5(t,e){t.uniform2iv(this.addr,e)}function S5(t,e){t.uniform3iv(this.addr,e)}function E5(t,e){t.uniform4iv(this.addr,e)}function T5(t,e){t.uniform1uiv(this.addr,e)}function b5(t,e){t.uniform2uiv(this.addr,e)}function A5(t,e){t.uniform3uiv(this.addr,e)}function C5(t,e){t.uniform4uiv(this.addr,e)}function R5(t,e,n){const i=this.cache,r=e.length,s=Wu(n,r);An(i,s)||(t.uniform1iv(this.addr,s),Cn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||iy,s[o])}function P5(t,e,n){const i=this.cache,r=e.length,s=Wu(n,r);An(i,s)||(t.uniform1iv(this.addr,s),Cn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||sy,s[o])}function I5(t,e,n){const i=this.cache,r=e.length,s=Wu(n,r);An(i,s)||(t.uniform1iv(this.addr,s),Cn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||oy,s[o])}function L5(t,e,n){const i=this.cache,r=e.length,s=Wu(n,r);An(i,s)||(t.uniform1iv(this.addr,s),Cn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||ry,s[o])}function D5(t){switch(t){case 5126:return p5;case 35664:return m5;case 35665:return g5;case 35666:return v5;case 35674:return _5;case 35675:return x5;case 35676:return y5;case 5124:case 35670:return M5;case 35667:case 35671:return w5;case 35668:case 35672:return S5;case 35669:case 35673:return E5;case 5125:return T5;case 36294:return b5;case 36295:return A5;case 36296:return C5;case 35678:case 36198:case 36298:case 36306:case 35682:return R5;case 35679:case 36299:case 36307:return P5;case 35680:case 36300:case 36308:case 36293:return I5;case 36289:case 36303:case 36311:case 36292:return L5}}class N5{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=h5(n.type)}}class U5{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=D5(n.type)}}class F5{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Gf=/(\w+)(\])?(\[|\.)?/g;function J1(t,e){t.seq.push(e),t.map[e.id]=e}function k5(t,e,n){const i=t.name,r=i.length;for(Gf.lastIndex=0;;){const s=Gf.exec(i),o=Gf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){J1(n,u===void 0?new N5(a,t,e):new U5(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new F5(a),J1(n,h)),n=h}}}class $c{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);k5(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Q1(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const O5=37297;let z5=0;function B5(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const ev=new vt;function H5(t){Dt._getMatrix(ev,Dt.workingColorSpace,t);const e=`mat3( ${ev.elements.map(n=>n.toFixed(4))} )`;switch(Dt.getTransfer(t)){case Mu:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function tv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+B5(t.getShaderSource(e),a)}else return s}function V5(t,e){const n=H5(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function G5(t,e){let n;switch(e){case Dw:n="Linear";break;case Nw:n="Reinhard";break;case Uw:n="Cineon";break;case Px:n="ACESFilmic";break;case kw:n="AgX";break;case Ow:n="Neutral";break;case Fw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ic=new W;function W5(){Dt.getLuminanceCoefficients(Ic);const t=Ic.x.toFixed(4),e=Ic.y.toFixed(4),n=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X5(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function j5(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function q5(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ba(t){return t!==""}function nv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y5=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ip(t){return t.replace(Y5,K5)}const $5=new Map;function K5(t,e){let n=xt[e];if(n===void 0){const i=$5.get(e);if(i!==void 0)n=xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ip(n)}const Z5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rv(t){return t.replace(Z5,J5)}function J5(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Q5(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Cx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Rx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xr&&(e="SHADOWMAP_TYPE_VSM"),e}function eb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ea:case ta:e="ENVMAP_TYPE_CUBE";break;case Vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function nb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Am:e="ENVMAP_BLENDING_MULTIPLY";break;case Iw:e="ENVMAP_BLENDING_MIX";break;case Lw:e="ENVMAP_BLENDING_ADD";break}return e}function ib(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function rb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Q5(n),u=eb(n),p=tb(n),h=nb(n),m=ib(n),g=X5(n),w=j5(s),b=r.createProgram();let x,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Ba).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Ba).join(`
`),f.length>0&&(f+=`
`)):(x=[sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),f=[sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+p:"",n.envMap?"#define "+h:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==os?"#define TONE_MAPPING":"",n.toneMapping!==os?xt.tonemapping_pars_fragment:"",n.toneMapping!==os?G5("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,V5("linearToOutputTexel",n.outputColorSpace),W5(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ba).join(`
`)),o=Ip(o),o=nv(o,n),o=iv(o,n),a=Ip(a),a=nv(a,n),a=iv(a,n),o=rv(o),a=rv(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",n.glslVersion===l1?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===l1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=_+x+o,E=_+f+a,L=Q1(r,r.VERTEX_SHADER,y),D=Q1(r,r.FRAGMENT_SHADER,E);r.attachShader(b,L),r.attachShader(b,D),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function N(z){if(t.debug.checkShaderErrors){const Y=r.getProgramInfoLog(b)||"",se=r.getShaderInfoLog(L)||"",ce=r.getShaderInfoLog(D)||"",fe=Y.trim(),X=se.trim(),ne=ce.trim();let H=!0,oe=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,b,L,D);else{const ue=tv(r,L,"vertex"),Pe=tv(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+fe+`
`+ue+`
`+Pe)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(X===""||ne==="")&&(oe=!1);oe&&(z.diagnostics={runnable:H,programLog:fe,vertexShader:{log:X,prefix:x},fragmentShader:{log:ne,prefix:f}})}r.deleteShader(L),r.deleteShader(D),F=new $c(r,b),T=q5(r,b)}let F;this.getUniforms=function(){return F===void 0&&N(this),F};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(b,O5)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=z5++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=D,this}let sb=0;class ob{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ab(e),n.set(e,i)),i}}class ab{constructor(e){this.id=sb++,this.code=e,this.usedTimes=0}}function lb(t,e,n,i,r,s,o){const a=new Fm,l=new ob,u=new Set,p=[],h=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return u.add(T),T===0?"uv":`uv${T}`}function x(T,M,z,Y,se){const ce=Y.fog,fe=se.geometry,X=T.isMeshStandardMaterial?Y.environment:null,ne=(T.isMeshStandardMaterial?n:e).get(T.envMap||X),H=ne&&ne.mapping===Vu?ne.image.height:null,oe=w[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const ue=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Pe=ue!==void 0?ue.length:0;let ze=0;fe.morphAttributes.position!==void 0&&(ze=1),fe.morphAttributes.normal!==void 0&&(ze=2),fe.morphAttributes.color!==void 0&&(ze=3);let _t,ft,Ie,pe;if(oe){const pt=rr[oe];_t=pt.vertexShader,ft=pt.fragmentShader}else _t=T.vertexShader,ft=T.fragmentShader,l.update(T),Ie=l.getVertexShaderID(T),pe=l.getFragmentShaderID(T);const _e=t.getRenderTarget(),we=t.state.buffers.depth.getReversed(),nt=se.isInstancedMesh===!0,He=se.isBatchedMesh===!0,ht=!!T.map,on=!!T.matcap,V=!!ne,zt=!!T.aoMap,at=!!T.lightMap,it=!!T.bumpMap,q=!!T.normalMap,me=!!T.displacementMap,Q=!!T.emissiveMap,G=!!T.metalnessMap,Xe=!!T.roughnessMap,Ke=T.anisotropy>0,U=T.clearcoat>0,A=T.dispersion>0,re=T.iridescence>0,he=T.sheen>0,xe=T.transmission>0,de=Ke&&!!T.anisotropyMap,Ne=U&&!!T.clearcoatMap,Me=U&&!!T.clearcoatNormalMap,De=U&&!!T.clearcoatRoughnessMap,Ze=re&&!!T.iridescenceMap,Re=re&&!!T.iridescenceThicknessMap,Ue=he&&!!T.sheenColorMap,ot=he&&!!T.sheenRoughnessMap,Je=!!T.specularMap,ye=!!T.specularColorMap,dt=!!T.specularIntensityMap,Z=xe&&!!T.transmissionMap,Ae=xe&&!!T.thicknessMap,Le=!!T.gradientMap,je=!!T.alphaMap,Ee=T.alphaTest>0,ve=!!T.alphaHash,Ye=!!T.extensions;let lt=os;T.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(lt=t.toneMapping);const Bt={shaderID:oe,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:ft,defines:T.defines,customVertexShaderID:Ie,customFragmentShaderID:pe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:He,batchingColor:He&&se._colorsTexture!==null,instancing:nt,instancingColor:nt&&se.instanceColor!==null,instancingMorph:nt&&se.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:na,alphaToCoverage:!!T.alphaToCoverage,map:ht,matcap:on,envMap:V,envMapMode:V&&ne.mapping,envMapCubeUVHeight:H,aoMap:zt,lightMap:at,bumpMap:it,normalMap:q,displacementMap:m&&me,emissiveMap:Q,normalMapObjectSpace:q&&T.normalMapType===Vw,normalMapTangentSpace:q&&T.normalMapType===Nm,metalnessMap:G,roughnessMap:Xe,anisotropy:Ke,anisotropyMap:de,clearcoat:U,clearcoatMap:Ne,clearcoatNormalMap:Me,clearcoatRoughnessMap:De,dispersion:A,iridescence:re,iridescenceMap:Ze,iridescenceThicknessMap:Re,sheen:he,sheenColorMap:Ue,sheenRoughnessMap:ot,specularMap:Je,specularColorMap:ye,specularIntensityMap:dt,transmission:xe,transmissionMap:Z,thicknessMap:Ae,gradientMap:Le,opaque:T.transparent===!1&&T.blending===Wo&&T.alphaToCoverage===!1,alphaMap:je,alphaTest:Ee,alphaHash:ve,combine:T.combine,mapUv:ht&&b(T.map.channel),aoMapUv:zt&&b(T.aoMap.channel),lightMapUv:at&&b(T.lightMap.channel),bumpMapUv:it&&b(T.bumpMap.channel),normalMapUv:q&&b(T.normalMap.channel),displacementMapUv:me&&b(T.displacementMap.channel),emissiveMapUv:Q&&b(T.emissiveMap.channel),metalnessMapUv:G&&b(T.metalnessMap.channel),roughnessMapUv:Xe&&b(T.roughnessMap.channel),anisotropyMapUv:de&&b(T.anisotropyMap.channel),clearcoatMapUv:Ne&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Me&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:ot&&b(T.sheenRoughnessMap.channel),specularMapUv:Je&&b(T.specularMap.channel),specularColorMapUv:ye&&b(T.specularColorMap.channel),specularIntensityMapUv:dt&&b(T.specularIntensityMap.channel),transmissionMapUv:Z&&b(T.transmissionMap.channel),thicknessMapUv:Ae&&b(T.thicknessMap.channel),alphaMapUv:je&&b(T.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(q||Ke),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!fe.attributes.uv&&(ht||je),fog:!!ce,useFog:T.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:we,skinning:se.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:lt,decodeVideoTexture:ht&&T.map.isVideoTexture===!0&&Dt.getTransfer(T.map.colorSpace)===Xt,decodeVideoTextureEmissive:Q&&T.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(T.emissiveMap.colorSpace)===Xt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Vt,flipSided:T.side===gi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ye&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&T.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Bt.vertexUv1s=u.has(1),Bt.vertexUv2s=u.has(2),Bt.vertexUv3s=u.has(3),u.clear(),Bt}function f(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)M.push(z),M.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(_(M,T),y(M,T),M.push(t.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function _(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function y(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function E(T){const M=w[T.type];let z;if(M){const Y=rr[M];z=vS.clone(Y.uniforms)}else z=T.uniforms;return z}function L(T,M){let z;for(let Y=0,se=p.length;Y<se;Y++){const ce=p[Y];if(ce.cacheKey===M){z=ce,++z.usedTimes;break}}return z===void 0&&(z=new rb(t,M,T,s),p.push(z)),z}function D(T){if(--T.usedTimes===0){const M=p.indexOf(T);p[M]=p[p.length-1],p.pop(),T.destroy()}}function N(T){l.remove(T)}function F(){l.dispose()}return{getParameters:x,getProgramCacheKey:f,getUniforms:E,acquireProgram:L,releaseProgram:D,releaseShaderCache:N,programs:p,dispose:F}}function cb(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function ub(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ov(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function av(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,m,g,w,b,x){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:m,material:g,groupOrder:w,renderOrder:h.renderOrder,z:b,group:x},t[e]=f):(f.id=h.id,f.object=h,f.geometry=m,f.material=g,f.groupOrder=w,f.renderOrder=h.renderOrder,f.z=b,f.group=x),e++,f}function a(h,m,g,w,b,x){const f=o(h,m,g,w,b,x);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):n.push(f)}function l(h,m,g,w,b,x){const f=o(h,m,g,w,b,x);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):n.unshift(f)}function u(h,m){n.length>1&&n.sort(h||ub),i.length>1&&i.sort(m||ov),r.length>1&&r.sort(m||ov)}function p(){for(let h=e,m=t.length;h<m;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:p,sort:u}}function db(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new av,t.set(i,[o])):r>=s.length?(o=new av,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function fb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Mt};break;case"SpotLight":n={position:new W,direction:new W,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":n={color:new Mt,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function hb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pb=0;function mb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gb(t){const e=new fb,n=hb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);const r=new W,s=new Qt,o=new Qt;function a(u){let p=0,h=0,m=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let g=0,w=0,b=0,x=0,f=0,_=0,y=0,E=0,L=0,D=0,N=0;u.sort(mb);for(let T=0,M=u.length;T<M;T++){const z=u[T],Y=z.color,se=z.intensity,ce=z.distance,fe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=Y.r*se,h+=Y.g*se,m+=Y.b*se;else if(z.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(z.sh.coefficients[X],se);N++}else if(z.isDirectionalLight){const X=e.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ne=z.shadow,H=n.get(z);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.directionalShadow[g]=H,i.directionalShadowMap[g]=fe,i.directionalShadowMatrix[g]=z.shadow.matrix,_++}i.directional[g]=X,g++}else if(z.isSpotLight){const X=e.get(z);X.position.setFromMatrixPosition(z.matrixWorld),X.color.copy(Y).multiplyScalar(se),X.distance=ce,X.coneCos=Math.cos(z.angle),X.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),X.decay=z.decay,i.spot[b]=X;const ne=z.shadow;if(z.map&&(i.spotLightMap[L]=z.map,L++,ne.updateMatrices(z),z.castShadow&&D++),i.spotLightMatrix[b]=ne.matrix,z.castShadow){const H=n.get(z);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.spotShadow[b]=H,i.spotShadowMap[b]=fe,E++}b++}else if(z.isRectAreaLight){const X=e.get(z);X.color.copy(Y).multiplyScalar(se),X.halfWidth.set(z.width*.5,0,0),X.halfHeight.set(0,z.height*.5,0),i.rectArea[x]=X,x++}else if(z.isPointLight){const X=e.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),X.distance=z.distance,X.decay=z.decay,z.castShadow){const ne=z.shadow,H=n.get(z);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,i.pointShadow[w]=H,i.pointShadowMap[w]=fe,i.pointShadowMatrix[w]=z.shadow.matrix,y++}i.point[w]=X,w++}else if(z.isHemisphereLight){const X=e.get(z);X.skyColor.copy(z.color).multiplyScalar(se),X.groundColor.copy(z.groundColor).multiplyScalar(se),i.hemi[f]=X,f++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=h,i.ambient[2]=m;const F=i.hash;(F.directionalLength!==g||F.pointLength!==w||F.spotLength!==b||F.rectAreaLength!==x||F.hemiLength!==f||F.numDirectionalShadows!==_||F.numPointShadows!==y||F.numSpotShadows!==E||F.numSpotMaps!==L||F.numLightProbes!==N)&&(i.directional.length=g,i.spot.length=b,i.rectArea.length=x,i.point.length=w,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+L-D,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=N,F.directionalLength=g,F.pointLength=w,F.spotLength=b,F.rectAreaLength=x,F.hemiLength=f,F.numDirectionalShadows=_,F.numPointShadows=y,F.numSpotShadows=E,F.numSpotMaps=L,F.numLightProbes=N,i.version=pb++)}function l(u,p){let h=0,m=0,g=0,w=0,b=0;const x=p.matrixWorldInverse;for(let f=0,_=u.length;f<_;f++){const y=u[f];if(y.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),h++}else if(y.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),g++}else if(y.isRectAreaLight){const E=i.rectArea[w];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(x),o.identity(),s.copy(y.matrixWorld),s.premultiply(x),o.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),w++}else if(y.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(x),m++}else if(y.isHemisphereLight){const E=i.hemi[b];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(x),b++}}}return{setup:a,setupView:l,state:i}}function lv(t){const e=new gb(t),n=[],i=[];function r(p){u.camera=p,n.length=0,i.length=0}function s(p){n.push(p)}function o(p){i.push(p)}function a(){e.setup(n)}function l(p){e.setupView(n,p)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function vb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new lv(t),e.set(r,[a])):s>=o.length?(a=new lv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const _b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xb=`uniform sampler2D shadow_pass;
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
}`;function yb(t,e,n){let i=new Om;const r=new et,s=new et,o=new jt,a=new GS({depthPacking:Hw}),l=new WS,u={},p=n.maxTextureSize,h={[cs]:gi,[gi]:cs,[Vt]:Vt},m=new us({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:_b,fragmentShader:xb}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const w=new cn;w.setAttribute("position",new ur(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new B(w,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cx;let f=this.type;this.render=function(D,N,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;const T=t.getRenderTarget(),M=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(ss),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const se=f!==xr&&this.type===xr,ce=f===xr&&this.type!==xr;for(let fe=0,X=D.length;fe<X;fe++){const ne=D[fe],H=ne.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const oe=H.getFrameExtents();if(r.multiply(oe),s.copy(H.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/oe.x),r.x=s.x*oe.x,H.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/oe.y),r.y=s.y*oe.y,H.mapSize.y=s.y)),H.map===null||se===!0||ce===!0){const Pe=this.type!==xr?{minFilter:Ji,magFilter:Ji}:{};H.map!==null&&H.map.dispose(),H.map=new Ks(r.x,r.y,Pe),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const ue=H.getViewportCount();for(let Pe=0;Pe<ue;Pe++){const ze=H.getViewport(Pe);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),Y.viewport(o),H.updateMatrices(ne,Pe),i=H.getFrustum(),E(N,F,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===xr&&_(H,F),H.needsUpdate=!1}f=this.type,x.needsUpdate=!1,t.setRenderTarget(T,M,z)};function _(D,N){const F=e.update(b);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,g.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ks(r.x,r.y)),m.uniforms.shadow_pass.value=D.map.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,t.setRenderTarget(D.mapPass),t.clear(),t.renderBufferDirect(N,null,F,m,b,null),g.uniforms.shadow_pass.value=D.mapPass.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,t.setRenderTarget(D.map),t.clear(),t.renderBufferDirect(N,null,F,g,b,null)}function y(D,N,F,T){let M=null;const z=F.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)M=z;else if(M=F.isPointLight===!0?l:a,t.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const Y=M.uuid,se=N.uuid;let ce=u[Y];ce===void 0&&(ce={},u[Y]=ce);let fe=ce[se];fe===void 0&&(fe=M.clone(),ce[se]=fe,N.addEventListener("dispose",L)),M=fe}if(M.visible=N.visible,M.wireframe=N.wireframe,T===xr?M.side=N.shadowSide!==null?N.shadowSide:N.side:M.side=N.shadowSide!==null?N.shadowSide:h[N.side],M.alphaMap=N.alphaMap,M.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,M.map=N.map,M.clipShadows=N.clipShadows,M.clippingPlanes=N.clippingPlanes,M.clipIntersection=N.clipIntersection,M.displacementMap=N.displacementMap,M.displacementScale=N.displacementScale,M.displacementBias=N.displacementBias,M.wireframeLinewidth=N.wireframeLinewidth,M.linewidth=N.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Y=t.properties.get(M);Y.light=F}return M}function E(D,N,F,T,M){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===xr)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,D.matrixWorld);const se=e.update(D),ce=D.material;if(Array.isArray(ce)){const fe=se.groups;for(let X=0,ne=fe.length;X<ne;X++){const H=fe[X],oe=ce[H.materialIndex];if(oe&&oe.visible){const ue=y(D,oe,T,M);D.onBeforeShadow(t,D,N,F,se,ue,H),t.renderBufferDirect(F,null,se,ue,D,H),D.onAfterShadow(t,D,N,F,se,ue,H)}}}else if(ce.visible){const fe=y(D,ce,T,M);D.onBeforeShadow(t,D,N,F,se,fe,null),t.renderBufferDirect(F,null,se,fe,D,null),D.onAfterShadow(t,D,N,F,se,fe,null)}}const Y=D.children;for(let se=0,ce=Y.length;se<ce;se++)E(Y[se],N,F,T,M)}function L(D){D.target.removeEventListener("dispose",L);for(const F in u){const T=u[F],M=D.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const Mb={[Vh]:Gh,[Wh]:qh,[Xh]:Yh,[Qo]:jh,[Gh]:Vh,[qh]:Wh,[Yh]:Xh,[jh]:Qo};function wb(t,e){function n(){let Z=!1;const Ae=new jt;let Le=null;const je=new jt(0,0,0,0);return{setMask:function(Ee){Le!==Ee&&!Z&&(t.colorMask(Ee,Ee,Ee,Ee),Le=Ee)},setLocked:function(Ee){Z=Ee},setClear:function(Ee,ve,Ye,lt,Bt){Bt===!0&&(Ee*=lt,ve*=lt,Ye*=lt),Ae.set(Ee,ve,Ye,lt),je.equals(Ae)===!1&&(t.clearColor(Ee,ve,Ye,lt),je.copy(Ae))},reset:function(){Z=!1,Le=null,je.set(-1,0,0,0)}}}function i(){let Z=!1,Ae=!1,Le=null,je=null,Ee=null;return{setReversed:function(ve){if(Ae!==ve){const Ye=e.get("EXT_clip_control");ve?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const lt=Ee;Ee=null,this.setClear(lt)}},getReversed:function(){return Ae},setTest:function(ve){ve?_e(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(ve){Le!==ve&&!Z&&(t.depthMask(ve),Le=ve)},setFunc:function(ve){if(Ae&&(ve=Mb[ve]),je!==ve){switch(ve){case Vh:t.depthFunc(t.NEVER);break;case Gh:t.depthFunc(t.ALWAYS);break;case Wh:t.depthFunc(t.LESS);break;case Qo:t.depthFunc(t.LEQUAL);break;case Xh:t.depthFunc(t.EQUAL);break;case jh:t.depthFunc(t.GEQUAL);break;case qh:t.depthFunc(t.GREATER);break;case Yh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}je=ve}},setLocked:function(ve){Z=ve},setClear:function(ve){Ee!==ve&&(Ae&&(ve=1-ve),t.clearDepth(ve),Ee=ve)},reset:function(){Z=!1,Le=null,je=null,Ee=null,Ae=!1}}}function r(){let Z=!1,Ae=null,Le=null,je=null,Ee=null,ve=null,Ye=null,lt=null,Bt=null;return{setTest:function(pt){Z||(pt?_e(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(pt){Ae!==pt&&!Z&&(t.stencilMask(pt),Ae=pt)},setFunc:function(pt,oi,jn){(Le!==pt||je!==oi||Ee!==jn)&&(t.stencilFunc(pt,oi,jn),Le=pt,je=oi,Ee=jn)},setOp:function(pt,oi,jn){(ve!==pt||Ye!==oi||lt!==jn)&&(t.stencilOp(pt,oi,jn),ve=pt,Ye=oi,lt=jn)},setLocked:function(pt){Z=pt},setClear:function(pt){Bt!==pt&&(t.clearStencil(pt),Bt=pt)},reset:function(){Z=!1,Ae=null,Le=null,je=null,Ee=null,ve=null,Ye=null,lt=null,Bt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let p={},h={},m=new WeakMap,g=[],w=null,b=!1,x=null,f=null,_=null,y=null,E=null,L=null,D=null,N=new Mt(0,0,0),F=0,T=!1,M=null,z=null,Y=null,se=null,ce=null;const fe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ne=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=ne>=2);let oe=null,ue={};const Pe=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),_t=new jt().fromArray(Pe),ft=new jt().fromArray(ze);function Ie(Z,Ae,Le,je){const Ee=new Uint8Array(4),ve=t.createTexture();t.bindTexture(Z,ve),t.texParameteri(Z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(Z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<Le;Ye++)Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?t.texImage3D(Ae,0,t.RGBA,1,1,je,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(Ae+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return ve}const pe={};pe[t.TEXTURE_2D]=Ie(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=Ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=Ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=Ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(t.DEPTH_TEST),o.setFunc(Qo),it(!1),q(i1),_e(t.CULL_FACE),zt(ss);function _e(Z){p[Z]!==!0&&(t.enable(Z),p[Z]=!0)}function we(Z){p[Z]!==!1&&(t.disable(Z),p[Z]=!1)}function nt(Z,Ae){return h[Z]!==Ae?(t.bindFramebuffer(Z,Ae),h[Z]=Ae,Z===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=Ae),Z===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=Ae),!0):!1}function He(Z,Ae){let Le=g,je=!1;if(Z){Le=m.get(Ae),Le===void 0&&(Le=[],m.set(Ae,Le));const Ee=Z.textures;if(Le.length!==Ee.length||Le[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,Ye=Ee.length;ve<Ye;ve++)Le[ve]=t.COLOR_ATTACHMENT0+ve;Le.length=Ee.length,je=!0}}else Le[0]!==t.BACK&&(Le[0]=t.BACK,je=!0);je&&t.drawBuffers(Le)}function ht(Z){return w!==Z?(t.useProgram(Z),w=Z,!0):!1}const on={[Us]:t.FUNC_ADD,[pw]:t.FUNC_SUBTRACT,[mw]:t.FUNC_REVERSE_SUBTRACT};on[gw]=t.MIN,on[vw]=t.MAX;const V={[_w]:t.ZERO,[xw]:t.ONE,[yw]:t.SRC_COLOR,[Bh]:t.SRC_ALPHA,[bw]:t.SRC_ALPHA_SATURATE,[Ew]:t.DST_COLOR,[ww]:t.DST_ALPHA,[Mw]:t.ONE_MINUS_SRC_COLOR,[Hh]:t.ONE_MINUS_SRC_ALPHA,[Tw]:t.ONE_MINUS_DST_COLOR,[Sw]:t.ONE_MINUS_DST_ALPHA,[Aw]:t.CONSTANT_COLOR,[Cw]:t.ONE_MINUS_CONSTANT_COLOR,[Rw]:t.CONSTANT_ALPHA,[Pw]:t.ONE_MINUS_CONSTANT_ALPHA};function zt(Z,Ae,Le,je,Ee,ve,Ye,lt,Bt,pt){if(Z===ss){b===!0&&(we(t.BLEND),b=!1);return}if(b===!1&&(_e(t.BLEND),b=!0),Z!==hw){if(Z!==x||pt!==T){if((f!==Us||E!==Us)&&(t.blendEquation(t.FUNC_ADD),f=Us,E=Us),pt)switch(Z){case Wo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yu:t.blendFunc(t.ONE,t.ONE);break;case r1:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case s1:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Wo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case r1:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s1:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}_=null,y=null,L=null,D=null,N.set(0,0,0),F=0,x=Z,T=pt}return}Ee=Ee||Ae,ve=ve||Le,Ye=Ye||je,(Ae!==f||Ee!==E)&&(t.blendEquationSeparate(on[Ae],on[Ee]),f=Ae,E=Ee),(Le!==_||je!==y||ve!==L||Ye!==D)&&(t.blendFuncSeparate(V[Le],V[je],V[ve],V[Ye]),_=Le,y=je,L=ve,D=Ye),(lt.equals(N)===!1||Bt!==F)&&(t.blendColor(lt.r,lt.g,lt.b,Bt),N.copy(lt),F=Bt),x=Z,T=!1}function at(Z,Ae){Z.side===Vt?we(t.CULL_FACE):_e(t.CULL_FACE);let Le=Z.side===gi;Ae&&(Le=!Le),it(Le),Z.blending===Wo&&Z.transparent===!1?zt(ss):zt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),s.setMask(Z.colorWrite);const je=Z.stencilWrite;a.setTest(je),je&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Q(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function it(Z){M!==Z&&(Z?t.frontFace(t.CW):t.frontFace(t.CCW),M=Z)}function q(Z){Z!==dw?(_e(t.CULL_FACE),Z!==z&&(Z===i1?t.cullFace(t.BACK):Z===fw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),z=Z}function me(Z){Z!==Y&&(X&&t.lineWidth(Z),Y=Z)}function Q(Z,Ae,Le){Z?(_e(t.POLYGON_OFFSET_FILL),(se!==Ae||ce!==Le)&&(t.polygonOffset(Ae,Le),se=Ae,ce=Le)):we(t.POLYGON_OFFSET_FILL)}function G(Z){Z?_e(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function Xe(Z){Z===void 0&&(Z=t.TEXTURE0+fe-1),oe!==Z&&(t.activeTexture(Z),oe=Z)}function Ke(Z,Ae,Le){Le===void 0&&(oe===null?Le=t.TEXTURE0+fe-1:Le=oe);let je=ue[Le];je===void 0&&(je={type:void 0,texture:void 0},ue[Le]=je),(je.type!==Z||je.texture!==Ae)&&(oe!==Le&&(t.activeTexture(Le),oe=Le),t.bindTexture(Z,Ae||pe[Z]),je.type=Z,je.texture=Ae)}function U(){const Z=ue[oe];Z!==void 0&&Z.type!==void 0&&(t.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function A(){try{t.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function re(){try{t.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function he(){try{t.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function xe(){try{t.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function de(){try{t.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ne(){try{t.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Me(){try{t.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function De(){try{t.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ze(){try{t.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Re(){try{t.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ue(Z){_t.equals(Z)===!1&&(t.scissor(Z.x,Z.y,Z.z,Z.w),_t.copy(Z))}function ot(Z){ft.equals(Z)===!1&&(t.viewport(Z.x,Z.y,Z.z,Z.w),ft.copy(Z))}function Je(Z,Ae){let Le=u.get(Ae);Le===void 0&&(Le=new WeakMap,u.set(Ae,Le));let je=Le.get(Z);je===void 0&&(je=t.getUniformBlockIndex(Ae,Z.name),Le.set(Z,je))}function ye(Z,Ae){const je=u.get(Ae).get(Z);l.get(Ae)!==je&&(t.uniformBlockBinding(Ae,je,Z.__bindingPointIndex),l.set(Ae,je))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},oe=null,ue={},h={},m=new WeakMap,g=[],w=null,b=!1,x=null,f=null,_=null,y=null,E=null,L=null,D=null,N=new Mt(0,0,0),F=0,T=!1,M=null,z=null,Y=null,se=null,ce=null,_t.set(0,0,t.canvas.width,t.canvas.height),ft.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:_e,disable:we,bindFramebuffer:nt,drawBuffers:He,useProgram:ht,setBlending:zt,setMaterial:at,setFlipSided:it,setCullFace:q,setLineWidth:me,setPolygonOffset:Q,setScissorTest:G,activeTexture:Xe,bindTexture:Ke,unbindTexture:U,compressedTexImage2D:A,compressedTexImage3D:re,texImage2D:Ze,texImage3D:Re,updateUBOMapping:Je,uniformBlockBinding:ye,texStorage2D:Me,texStorage3D:De,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:de,compressedTexSubImage3D:Ne,scissor:Ue,viewport:ot,reset:dt}}function Sb(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new et,p=new WeakMap;let h;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,A){return g?new OffscreenCanvas(U,A):Su("canvas")}function b(U,A,re){let he=1;const xe=Ke(U);if((xe.width>re||xe.height>re)&&(he=re/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const de=Math.floor(he*xe.width),Ne=Math.floor(he*xe.height);h===void 0&&(h=w(de,Ne));const Me=A?w(de,Ne):h;return Me.width=de,Me.height=Ne,Me.getContext("2d").drawImage(U,0,0,de,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+Ne+")."),Me}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),U;return U}function x(U){return U.generateMipmaps}function f(U){t.generateMipmap(U)}function _(U){return U.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?t.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(U,A,re,he,xe=!1){if(U!==null){if(t[U]!==void 0)return t[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let de=A;if(A===t.RED&&(re===t.FLOAT&&(de=t.R32F),re===t.HALF_FLOAT&&(de=t.R16F),re===t.UNSIGNED_BYTE&&(de=t.R8)),A===t.RED_INTEGER&&(re===t.UNSIGNED_BYTE&&(de=t.R8UI),re===t.UNSIGNED_SHORT&&(de=t.R16UI),re===t.UNSIGNED_INT&&(de=t.R32UI),re===t.BYTE&&(de=t.R8I),re===t.SHORT&&(de=t.R16I),re===t.INT&&(de=t.R32I)),A===t.RG&&(re===t.FLOAT&&(de=t.RG32F),re===t.HALF_FLOAT&&(de=t.RG16F),re===t.UNSIGNED_BYTE&&(de=t.RG8)),A===t.RG_INTEGER&&(re===t.UNSIGNED_BYTE&&(de=t.RG8UI),re===t.UNSIGNED_SHORT&&(de=t.RG16UI),re===t.UNSIGNED_INT&&(de=t.RG32UI),re===t.BYTE&&(de=t.RG8I),re===t.SHORT&&(de=t.RG16I),re===t.INT&&(de=t.RG32I)),A===t.RGB_INTEGER&&(re===t.UNSIGNED_BYTE&&(de=t.RGB8UI),re===t.UNSIGNED_SHORT&&(de=t.RGB16UI),re===t.UNSIGNED_INT&&(de=t.RGB32UI),re===t.BYTE&&(de=t.RGB8I),re===t.SHORT&&(de=t.RGB16I),re===t.INT&&(de=t.RGB32I)),A===t.RGBA_INTEGER&&(re===t.UNSIGNED_BYTE&&(de=t.RGBA8UI),re===t.UNSIGNED_SHORT&&(de=t.RGBA16UI),re===t.UNSIGNED_INT&&(de=t.RGBA32UI),re===t.BYTE&&(de=t.RGBA8I),re===t.SHORT&&(de=t.RGBA16I),re===t.INT&&(de=t.RGBA32I)),A===t.RGB&&(re===t.UNSIGNED_INT_5_9_9_9_REV&&(de=t.RGB9_E5),re===t.UNSIGNED_INT_10F_11F_11F_REV&&(de=t.R11F_G11F_B10F)),A===t.RGBA){const Ne=xe?Mu:Dt.getTransfer(he);re===t.FLOAT&&(de=t.RGBA32F),re===t.HALF_FLOAT&&(de=t.RGBA16F),re===t.UNSIGNED_BYTE&&(de=Ne===Xt?t.SRGB8_ALPHA8:t.RGBA8),re===t.UNSIGNED_SHORT_4_4_4_4&&(de=t.RGBA4),re===t.UNSIGNED_SHORT_5_5_5_1&&(de=t.RGB5_A1)}return(de===t.R16F||de===t.R32F||de===t.RG16F||de===t.RG32F||de===t.RGBA16F||de===t.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function E(U,A){let re;return U?A===null||A===$s||A===vl?re=t.DEPTH24_STENCIL8:A===Er?re=t.DEPTH32F_STENCIL8:A===gl&&(re=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===$s||A===vl?re=t.DEPTH_COMPONENT24:A===Er?re=t.DEPTH_COMPONENT32F:A===gl&&(re=t.DEPTH_COMPONENT16),re}function L(U,A){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ji&&U.minFilter!==or?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function D(U){const A=U.target;A.removeEventListener("dispose",D),F(A),A.isVideoTexture&&p.delete(A)}function N(U){const A=U.target;A.removeEventListener("dispose",N),M(A)}function F(U){const A=i.get(U);if(A.__webglInit===void 0)return;const re=U.source,he=m.get(re);if(he){const xe=he[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&T(U),Object.keys(he).length===0&&m.delete(re)}i.remove(U)}function T(U){const A=i.get(U);t.deleteTexture(A.__webglTexture);const re=U.source,he=m.get(re);delete he[A.__cacheKey],o.memory.textures--}function M(U){const A=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(A.__webglFramebuffer[he]))for(let xe=0;xe<A.__webglFramebuffer[he].length;xe++)t.deleteFramebuffer(A.__webglFramebuffer[he][xe]);else t.deleteFramebuffer(A.__webglFramebuffer[he]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[he])}else{if(Array.isArray(A.__webglFramebuffer))for(let he=0;he<A.__webglFramebuffer.length;he++)t.deleteFramebuffer(A.__webglFramebuffer[he]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let he=0;he<A.__webglColorRenderbuffer.length;he++)A.__webglColorRenderbuffer[he]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[he]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const re=U.textures;for(let he=0,xe=re.length;he<xe;he++){const de=i.get(re[he]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(re[he])}i.remove(U)}let z=0;function Y(){z=0}function se(){const U=z;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),z+=1,U}function ce(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function fe(U,A){const re=i.get(U);if(U.isVideoTexture&&G(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&re.__version!==U.version){const he=U.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(re,U,A);return}}else U.isExternalTexture&&(re.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,re.__webglTexture,t.TEXTURE0+A)}function X(U,A){const re=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&re.__version!==U.version){pe(re,U,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,re.__webglTexture,t.TEXTURE0+A)}function ne(U,A){const re=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&re.__version!==U.version){pe(re,U,A);return}n.bindTexture(t.TEXTURE_3D,re.__webglTexture,t.TEXTURE0+A)}function H(U,A){const re=i.get(U);if(U.version>0&&re.__version!==U.version){_e(re,U,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture,t.TEXTURE0+A)}const oe={[qr]:t.REPEAT,[Bs]:t.CLAMP_TO_EDGE,[Zh]:t.MIRRORED_REPEAT},ue={[Ji]:t.NEAREST,[zw]:t.NEAREST_MIPMAP_NEAREST,[oc]:t.NEAREST_MIPMAP_LINEAR,[or]:t.LINEAR,[of]:t.LINEAR_MIPMAP_NEAREST,[Hs]:t.LINEAR_MIPMAP_LINEAR},Pe={[Gw]:t.NEVER,[$w]:t.ALWAYS,[Ww]:t.LESS,[Bx]:t.LEQUAL,[Xw]:t.EQUAL,[Yw]:t.GEQUAL,[jw]:t.GREATER,[qw]:t.NOTEQUAL};function ze(U,A){if(A.type===Er&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===or||A.magFilter===of||A.magFilter===oc||A.magFilter===Hs||A.minFilter===or||A.minFilter===of||A.minFilter===oc||A.minFilter===Hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(U,t.TEXTURE_WRAP_S,oe[A.wrapS]),t.texParameteri(U,t.TEXTURE_WRAP_T,oe[A.wrapT]),(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)&&t.texParameteri(U,t.TEXTURE_WRAP_R,oe[A.wrapR]),t.texParameteri(U,t.TEXTURE_MAG_FILTER,ue[A.magFilter]),t.texParameteri(U,t.TEXTURE_MIN_FILTER,ue[A.minFilter]),A.compareFunction&&(t.texParameteri(U,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(U,t.TEXTURE_COMPARE_FUNC,Pe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ji||A.minFilter!==oc&&A.minFilter!==Hs||A.type===Er&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");t.texParameterf(U,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function _t(U,A){let re=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",D));const he=A.source;let xe=m.get(he);xe===void 0&&(xe={},m.set(he,xe));const de=ce(A);if(de!==U.__cacheKey){xe[de]===void 0&&(xe[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,re=!0),xe[de].usedTimes++;const Ne=xe[U.__cacheKey];Ne!==void 0&&(xe[U.__cacheKey].usedTimes--,Ne.usedTimes===0&&T(A)),U.__cacheKey=de,U.__webglTexture=xe[de].texture}return re}function ft(U,A,re){return Math.floor(Math.floor(U/re)/A)}function Ie(U,A,re,he){const de=U.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,A.width,A.height,re,he,A.data);else{de.sort((Re,Ue)=>Re.start-Ue.start);let Ne=0;for(let Re=1;Re<de.length;Re++){const Ue=de[Ne],ot=de[Re],Je=Ue.start+Ue.count,ye=ft(ot.start,A.width,4),dt=ft(Ue.start,A.width,4);ot.start<=Je+1&&ye===dt&&ft(ot.start+ot.count-1,A.width,4)===ye?Ue.count=Math.max(Ue.count,ot.start+ot.count-Ue.start):(++Ne,de[Ne]=ot)}de.length=Ne+1;const Me=t.getParameter(t.UNPACK_ROW_LENGTH),De=t.getParameter(t.UNPACK_SKIP_PIXELS),Ze=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,A.width);for(let Re=0,Ue=de.length;Re<Ue;Re++){const ot=de[Re],Je=Math.floor(ot.start/4),ye=Math.ceil(ot.count/4),dt=Je%A.width,Z=Math.floor(Je/A.width),Ae=ye,Le=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,dt),t.pixelStorei(t.UNPACK_SKIP_ROWS,Z),n.texSubImage2D(t.TEXTURE_2D,0,dt,Z,Ae,Le,re,he,A.data)}U.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Me),t.pixelStorei(t.UNPACK_SKIP_PIXELS,De),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ze)}}function pe(U,A,re){let he=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(he=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(he=t.TEXTURE_3D);const xe=_t(U,A),de=A.source;n.bindTexture(he,U.__webglTexture,t.TEXTURE0+re);const Ne=i.get(de);if(de.version!==Ne.__version||xe===!0){n.activeTexture(t.TEXTURE0+re);const Me=Dt.getPrimaries(Dt.workingColorSpace),De=A.colorSpace===Yr?null:Dt.getPrimaries(A.colorSpace),Ze=A.colorSpace===Yr||Me===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Re=b(A.image,!1,r.maxTextureSize);Re=Xe(A,Re);const Ue=s.convert(A.format,A.colorSpace),ot=s.convert(A.type);let Je=y(A.internalFormat,Ue,ot,A.colorSpace,A.isVideoTexture);ze(he,A);let ye;const dt=A.mipmaps,Z=A.isVideoTexture!==!0,Ae=Ne.__version===void 0||xe===!0,Le=de.dataReady,je=L(A,Re);if(A.isDepthTexture)Je=E(A.format===xl,A.type),Ae&&(Z?n.texStorage2D(t.TEXTURE_2D,1,Je,Re.width,Re.height):n.texImage2D(t.TEXTURE_2D,0,Je,Re.width,Re.height,0,Ue,ot,null));else if(A.isDataTexture)if(dt.length>0){Z&&Ae&&n.texStorage2D(t.TEXTURE_2D,je,Je,dt[0].width,dt[0].height);for(let Ee=0,ve=dt.length;Ee<ve;Ee++)ye=dt[Ee],Z?Le&&n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,ye.width,ye.height,Ue,ot,ye.data):n.texImage2D(t.TEXTURE_2D,Ee,Je,ye.width,ye.height,0,Ue,ot,ye.data);A.generateMipmaps=!1}else Z?(Ae&&n.texStorage2D(t.TEXTURE_2D,je,Je,Re.width,Re.height),Le&&Ie(A,Re,Ue,ot)):n.texImage2D(t.TEXTURE_2D,0,Je,Re.width,Re.height,0,Ue,ot,Re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Z&&Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Je,dt[0].width,dt[0].height,Re.depth);for(let Ee=0,ve=dt.length;Ee<ve;Ee++)if(ye=dt[Ee],A.format!==$i)if(Ue!==null)if(Z){if(Le)if(A.layerUpdates.size>0){const Ye=O1(ye.width,ye.height,A.format,A.type);for(const lt of A.layerUpdates){const Bt=ye.data.subarray(lt*Ye/ye.data.BYTES_PER_ELEMENT,(lt+1)*Ye/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,lt,ye.width,ye.height,1,Ue,Bt)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,0,ye.width,ye.height,Re.depth,Ue,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Ee,Je,ye.width,ye.height,Re.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?Le&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,0,ye.width,ye.height,Re.depth,Ue,ot,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Ee,Je,ye.width,ye.height,Re.depth,0,Ue,ot,ye.data)}else{Z&&Ae&&n.texStorage2D(t.TEXTURE_2D,je,Je,dt[0].width,dt[0].height);for(let Ee=0,ve=dt.length;Ee<ve;Ee++)ye=dt[Ee],A.format!==$i?Ue!==null?Z?Le&&n.compressedTexSubImage2D(t.TEXTURE_2D,Ee,0,0,ye.width,ye.height,Ue,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,Ee,Je,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?Le&&n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,ye.width,ye.height,Ue,ot,ye.data):n.texImage2D(t.TEXTURE_2D,Ee,Je,ye.width,ye.height,0,Ue,ot,ye.data)}else if(A.isDataArrayTexture)if(Z){if(Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Je,Re.width,Re.height,Re.depth),Le)if(A.layerUpdates.size>0){const Ee=O1(Re.width,Re.height,A.format,A.type);for(const ve of A.layerUpdates){const Ye=Re.data.subarray(ve*Ee/Re.data.BYTES_PER_ELEMENT,(ve+1)*Ee/Re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ve,Re.width,Re.height,1,Ue,ot,Ye)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Ue,ot,Re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Je,Re.width,Re.height,Re.depth,0,Ue,ot,Re.data);else if(A.isData3DTexture)Z?(Ae&&n.texStorage3D(t.TEXTURE_3D,je,Je,Re.width,Re.height,Re.depth),Le&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Ue,ot,Re.data)):n.texImage3D(t.TEXTURE_3D,0,Je,Re.width,Re.height,Re.depth,0,Ue,ot,Re.data);else if(A.isFramebufferTexture){if(Ae)if(Z)n.texStorage2D(t.TEXTURE_2D,je,Je,Re.width,Re.height);else{let Ee=Re.width,ve=Re.height;for(let Ye=0;Ye<je;Ye++)n.texImage2D(t.TEXTURE_2D,Ye,Je,Ee,ve,0,Ue,ot,null),Ee>>=1,ve>>=1}}else if(dt.length>0){if(Z&&Ae){const Ee=Ke(dt[0]);n.texStorage2D(t.TEXTURE_2D,je,Je,Ee.width,Ee.height)}for(let Ee=0,ve=dt.length;Ee<ve;Ee++)ye=dt[Ee],Z?Le&&n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,Ue,ot,ye):n.texImage2D(t.TEXTURE_2D,Ee,Je,Ue,ot,ye);A.generateMipmaps=!1}else if(Z){if(Ae){const Ee=Ke(Re);n.texStorage2D(t.TEXTURE_2D,je,Je,Ee.width,Ee.height)}Le&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ue,ot,Re)}else n.texImage2D(t.TEXTURE_2D,0,Je,Ue,ot,Re);x(A)&&f(he),Ne.__version=de.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function _e(U,A,re){if(A.image.length!==6)return;const he=_t(U,A),xe=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+re);const de=i.get(xe);if(xe.version!==de.__version||he===!0){n.activeTexture(t.TEXTURE0+re);const Ne=Dt.getPrimaries(Dt.workingColorSpace),Me=A.colorSpace===Yr?null:Dt.getPrimaries(A.colorSpace),De=A.colorSpace===Yr||Ne===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ze=A.isCompressedTexture||A.image[0].isCompressedTexture,Re=A.image[0]&&A.image[0].isDataTexture,Ue=[];for(let ve=0;ve<6;ve++)!Ze&&!Re?Ue[ve]=b(A.image[ve],!0,r.maxCubemapSize):Ue[ve]=Re?A.image[ve].image:A.image[ve],Ue[ve]=Xe(A,Ue[ve]);const ot=Ue[0],Je=s.convert(A.format,A.colorSpace),ye=s.convert(A.type),dt=y(A.internalFormat,Je,ye,A.colorSpace),Z=A.isVideoTexture!==!0,Ae=de.__version===void 0||he===!0,Le=xe.dataReady;let je=L(A,ot);ze(t.TEXTURE_CUBE_MAP,A);let Ee;if(Ze){Z&&Ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,je,dt,ot.width,ot.height);for(let ve=0;ve<6;ve++){Ee=Ue[ve].mipmaps;for(let Ye=0;Ye<Ee.length;Ye++){const lt=Ee[Ye];A.format!==$i?Je!==null?Z?Le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,0,0,lt.width,lt.height,Je,lt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,dt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,0,0,lt.width,lt.height,Je,ye,lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,dt,lt.width,lt.height,0,Je,ye,lt.data)}}}else{if(Ee=A.mipmaps,Z&&Ae){Ee.length>0&&je++;const ve=Ke(Ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,je,dt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Re){Z?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ue[ve].width,Ue[ve].height,Je,ye,Ue[ve].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,dt,Ue[ve].width,Ue[ve].height,0,Je,ye,Ue[ve].data);for(let Ye=0;Ye<Ee.length;Ye++){const Bt=Ee[Ye].image[ve].image;Z?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,0,0,Bt.width,Bt.height,Je,ye,Bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,dt,Bt.width,Bt.height,0,Je,ye,Bt.data)}}else{Z?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Je,ye,Ue[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,dt,Je,ye,Ue[ve]);for(let Ye=0;Ye<Ee.length;Ye++){const lt=Ee[Ye];Z?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,0,0,Je,ye,lt.image[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,dt,Je,ye,lt.image[ve])}}}x(A)&&f(t.TEXTURE_CUBE_MAP),de.__version=xe.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function we(U,A,re,he,xe,de){const Ne=s.convert(re.format,re.colorSpace),Me=s.convert(re.type),De=y(re.internalFormat,Ne,Me,re.colorSpace),Ze=i.get(A),Re=i.get(re);if(Re.__renderTarget=A,!Ze.__hasExternalTextures){const Ue=Math.max(1,A.width>>de),ot=Math.max(1,A.height>>de);xe===t.TEXTURE_3D||xe===t.TEXTURE_2D_ARRAY?n.texImage3D(xe,de,De,Ue,ot,A.depth,0,Ne,Me,null):n.texImage2D(xe,de,De,Ue,ot,0,Ne,Me,null)}n.bindFramebuffer(t.FRAMEBUFFER,U),Q(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,xe,Re.__webglTexture,0,me(A)):(xe===t.TEXTURE_2D||xe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,he,xe,Re.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function nt(U,A,re){if(t.bindRenderbuffer(t.RENDERBUFFER,U),A.depthBuffer){const he=A.depthTexture,xe=he&&he.isDepthTexture?he.type:null,de=E(A.stencilBuffer,xe),Ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=me(A);Q(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,de,A.width,A.height):re?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,de,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,de,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ne,t.RENDERBUFFER,U)}else{const he=A.textures;for(let xe=0;xe<he.length;xe++){const de=he[xe],Ne=s.convert(de.format,de.colorSpace),Me=s.convert(de.type),De=y(de.internalFormat,Ne,Me,de.colorSpace),Ze=me(A);re&&Q(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze,De,A.width,A.height):Q(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze,De,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,De,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=i.get(A.depthTexture);he.__renderTarget=A,(!he.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),fe(A.depthTexture,0);const xe=he.__webglTexture,de=me(A);if(A.depthTexture.format===_l)Q(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0);else if(A.depthTexture.format===xl)Q(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function ht(U){const A=i.get(U),re=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const he=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),he){const xe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),A.__depthDisposeCallback=xe}A.__boundDepthTexture=he}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");const he=U.texture.mipmaps;he&&he.length>0?He(A.__webglFramebuffer[0],U):He(A.__webglFramebuffer,U)}else if(re){A.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[he]),A.__webglDepthbuffer[he]===void 0)A.__webglDepthbuffer[he]=t.createRenderbuffer(),nt(A.__webglDepthbuffer[he],U,!1);else{const xe=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer[he];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,de)}}else{const he=U.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=t.createRenderbuffer(),nt(A.__webglDepthbuffer,U,!1);else{const xe=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,de)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function on(U,A,re){const he=i.get(U);A!==void 0&&we(he.__webglFramebuffer,U,U.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),re!==void 0&&ht(U)}function V(U){const A=U.texture,re=i.get(U),he=i.get(A);U.addEventListener("dispose",N);const xe=U.textures,de=U.isWebGLCubeRenderTarget===!0,Ne=xe.length>1;if(Ne||(he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture()),he.__version=A.version,o.memory.textures++),de){re.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer[Me]=[];for(let De=0;De<A.mipmaps.length;De++)re.__webglFramebuffer[Me][De]=t.createFramebuffer()}else re.__webglFramebuffer[Me]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer=[];for(let Me=0;Me<A.mipmaps.length;Me++)re.__webglFramebuffer[Me]=t.createFramebuffer()}else re.__webglFramebuffer=t.createFramebuffer();if(Ne)for(let Me=0,De=xe.length;Me<De;Me++){const Ze=i.get(xe[Me]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(U.samples>0&&Q(U)===!1){re.__webglMultisampledFramebuffer=t.createFramebuffer(),re.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Me=0;Me<xe.length;Me++){const De=xe[Me];re.__webglColorRenderbuffer[Me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,re.__webglColorRenderbuffer[Me]);const Ze=s.convert(De.format,De.colorSpace),Re=s.convert(De.type),Ue=y(De.internalFormat,Ze,Re,De.colorSpace,U.isXRRenderTarget===!0),ot=me(U);t.renderbufferStorageMultisample(t.RENDERBUFFER,ot,Ue,U.width,U.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,re.__webglColorRenderbuffer[Me])}t.bindRenderbuffer(t.RENDERBUFFER,null),U.depthBuffer&&(re.__webglDepthRenderbuffer=t.createRenderbuffer(),nt(re.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,he.__webglTexture),ze(t.TEXTURE_CUBE_MAP,A);for(let Me=0;Me<6;Me++)if(A.mipmaps&&A.mipmaps.length>0)for(let De=0;De<A.mipmaps.length;De++)we(re.__webglFramebuffer[Me][De],U,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De);else we(re.__webglFramebuffer[Me],U,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);x(A)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let Me=0,De=xe.length;Me<De;Me++){const Ze=xe[Me],Re=i.get(Ze);let Ue=t.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ue=U.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ue,Re.__webglTexture),ze(Ue,Ze),we(re.__webglFramebuffer,U,Ze,t.COLOR_ATTACHMENT0+Me,Ue,0),x(Ze)&&f(Ue)}n.unbindTexture()}else{let Me=t.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Me=U.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Me,he.__webglTexture),ze(Me,A),A.mipmaps&&A.mipmaps.length>0)for(let De=0;De<A.mipmaps.length;De++)we(re.__webglFramebuffer[De],U,A,t.COLOR_ATTACHMENT0,Me,De);else we(re.__webglFramebuffer,U,A,t.COLOR_ATTACHMENT0,Me,0);x(A)&&f(Me),n.unbindTexture()}U.depthBuffer&&ht(U)}function zt(U){const A=U.textures;for(let re=0,he=A.length;re<he;re++){const xe=A[re];if(x(xe)){const de=_(U),Ne=i.get(xe).__webglTexture;n.bindTexture(de,Ne),f(de),n.unbindTexture()}}}const at=[],it=[];function q(U){if(U.samples>0){if(Q(U)===!1){const A=U.textures,re=U.width,he=U.height;let xe=t.COLOR_BUFFER_BIT;const de=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ne=i.get(U),Me=A.length>1;if(Me)for(let Ze=0;Ze<A.length;Ze++)n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ze,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ze,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const De=U.texture.mipmaps;De&&De.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ze=0;Ze<A.length;Ze++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xe|=t.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xe|=t.STENCIL_BUFFER_BIT)),Me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ze]);const Re=i.get(A[Ze]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,re,he,0,0,re,he,xe,t.NEAREST),l===!0&&(at.length=0,it.length=0,at.push(t.COLOR_ATTACHMENT0+Ze),U.depthBuffer&&U.resolveDepthBuffer===!1&&(at.push(de),it.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,it)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Me)for(let Ze=0;Ze<A.length;Ze++){n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ze,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ze]);const Re=i.get(A[Ze]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ze,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const A=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function me(U){return Math.min(r.maxSamples,U.samples)}function Q(U){const A=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function G(U){const A=o.render.frame;p.get(U)!==A&&(p.set(U,A),U.update())}function Xe(U,A){const re=U.colorSpace,he=U.format,xe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||re!==na&&re!==Yr&&(Dt.getTransfer(re)===Xt?(he!==$i||xe!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),A}function Ke(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=se,this.resetTextureUnits=Y,this.setTexture2D=fe,this.setTexture2DArray=X,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=on,this.setupRenderTarget=V,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Q}function Eb(t,e){function n(i,r=Yr){let s;const o=Dt.getTransfer(r);if(i===dr)return t.UNSIGNED_BYTE;if(i===Rm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Pm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Nx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ux)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lx)return t.BYTE;if(i===Dx)return t.SHORT;if(i===gl)return t.UNSIGNED_SHORT;if(i===Cm)return t.INT;if(i===$s)return t.UNSIGNED_INT;if(i===Er)return t.FLOAT;if(i===bl)return t.HALF_FLOAT;if(i===Fx)return t.ALPHA;if(i===kx)return t.RGB;if(i===$i)return t.RGBA;if(i===_l)return t.DEPTH_COMPONENT;if(i===xl)return t.DEPTH_STENCIL;if(i===Ox)return t.RED;if(i===Im)return t.RED_INTEGER;if(i===zx)return t.RG;if(i===Lm)return t.RG_INTEGER;if(i===Dm)return t.RGBA_INTEGER;if(i===Xc||i===jc||i===qc||i===Yc)if(o===Xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jh||i===Qh||i===ep||i===tp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ep)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===np||i===ip||i===rp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===np||i===ip)return o===Xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sp||i===op||i===ap||i===lp||i===cp||i===up||i===dp||i===fp||i===hp||i===pp||i===mp||i===gp||i===vp||i===_p)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===op)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ap)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===up)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vp)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_p)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xp||i===yp||i===Mp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xp)return o===Xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wp||i===Sp||i===Ep||i===Tp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ep)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Tb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bb=`
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

}`;class Ab{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Zx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new us({vertexShader:Tb,fragmentShader:bb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new B(new Sn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cb extends aa{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,p=null,h=null,m=null,g=null,w=null;const b=typeof XRWebGLBinding<"u",x=new Ab,f={},_=n.getContextAttributes();let y=null,E=null;const L=[],D=[],N=new et;let F=null;const T=new Ei;T.viewport=new jt;const M=new Ei;M.viewport=new jt;const z=[T,M],Y=new YS;let se=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pe){let _e=L[pe];return _e===void 0&&(_e=new Rf,L[pe]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(pe){let _e=L[pe];return _e===void 0&&(_e=new Rf,L[pe]=_e),_e.getGripSpace()},this.getHand=function(pe){let _e=L[pe];return _e===void 0&&(_e=new Rf,L[pe]=_e),_e.getHandSpace()};function fe(pe){const _e=D.indexOf(pe.inputSource);if(_e===-1)return;const we=L[_e];we!==void 0&&(we.update(pe.inputSource,pe.frame,u||o),we.dispatchEvent({type:pe.type,data:pe.inputSource}))}function X(){r.removeEventListener("select",fe),r.removeEventListener("selectstart",fe),r.removeEventListener("selectend",fe),r.removeEventListener("squeeze",fe),r.removeEventListener("squeezestart",fe),r.removeEventListener("squeezeend",fe),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ne);for(let pe=0;pe<L.length;pe++){const _e=D[pe];_e!==null&&(D[pe]=null,L[pe].disconnect(_e))}se=null,ce=null,x.reset();for(const pe in f)delete f[pe];e.setRenderTarget(y),g=null,m=null,h=null,r=null,E=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pe){s=pe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pe){a=pe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(pe){u=pe},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(pe){if(r=pe,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",fe),r.addEventListener("selectstart",fe),r.addEventListener("selectend",fe),r.addEventListener("squeeze",fe),r.addEventListener("squeezestart",fe),r.addEventListener("squeezeend",fe),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(N),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,nt=null,He=null;_.depth&&(He=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=_.stencil?xl:_l,nt=_.stencil?vl:$s);const ht={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:s};h=this.getBinding(),m=h.createProjectionLayer(ht),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new Ks(m.textureWidth,m.textureHeight,{format:$i,type:dr,depthTexture:new Kx(m.textureWidth,m.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const we={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,we),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Ks(g.framebufferWidth,g.framebufferHeight,{format:$i,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ne(pe){for(let _e=0;_e<pe.removed.length;_e++){const we=pe.removed[_e],nt=D.indexOf(we);nt>=0&&(D[nt]=null,L[nt].disconnect(we))}for(let _e=0;_e<pe.added.length;_e++){const we=pe.added[_e];let nt=D.indexOf(we);if(nt===-1){for(let ht=0;ht<L.length;ht++)if(ht>=D.length){D.push(we),nt=ht;break}else if(D[ht]===null){D[ht]=we,nt=ht;break}if(nt===-1)break}const He=L[nt];He&&He.connect(we)}}const H=new W,oe=new W;function ue(pe,_e,we){H.setFromMatrixPosition(_e.matrixWorld),oe.setFromMatrixPosition(we.matrixWorld);const nt=H.distanceTo(oe),He=_e.projectionMatrix.elements,ht=we.projectionMatrix.elements,on=He[14]/(He[10]-1),V=He[14]/(He[10]+1),zt=(He[9]+1)/He[5],at=(He[9]-1)/He[5],it=(He[8]-1)/He[0],q=(ht[8]+1)/ht[0],me=on*it,Q=on*q,G=nt/(-it+q),Xe=G*-it;if(_e.matrixWorld.decompose(pe.position,pe.quaternion,pe.scale),pe.translateX(Xe),pe.translateZ(G),pe.matrixWorld.compose(pe.position,pe.quaternion,pe.scale),pe.matrixWorldInverse.copy(pe.matrixWorld).invert(),He[10]===-1)pe.projectionMatrix.copy(_e.projectionMatrix),pe.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Ke=on+G,U=V+G,A=me-Xe,re=Q+(nt-Xe),he=zt*V/U*Ke,xe=at*V/U*Ke;pe.projectionMatrix.makePerspective(A,re,he,xe,Ke,U),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert()}}function Pe(pe,_e){_e===null?pe.matrixWorld.copy(pe.matrix):pe.matrixWorld.multiplyMatrices(_e.matrixWorld,pe.matrix),pe.matrixWorldInverse.copy(pe.matrixWorld).invert()}this.updateCamera=function(pe){if(r===null)return;let _e=pe.near,we=pe.far;x.texture!==null&&(x.depthNear>0&&(_e=x.depthNear),x.depthFar>0&&(we=x.depthFar)),Y.near=M.near=T.near=_e,Y.far=M.far=T.far=we,(se!==Y.near||ce!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),se=Y.near,ce=Y.far),Y.layers.mask=pe.layers.mask|6,T.layers.mask=Y.layers.mask&3,M.layers.mask=Y.layers.mask&5;const nt=pe.parent,He=Y.cameras;Pe(Y,nt);for(let ht=0;ht<He.length;ht++)Pe(He[ht],nt);He.length===2?ue(Y,T,M):Y.projectionMatrix.copy(T.projectionMatrix),ze(pe,Y,nt)};function ze(pe,_e,we){we===null?pe.matrix.copy(_e.matrixWorld):(pe.matrix.copy(we.matrixWorld),pe.matrix.invert(),pe.matrix.multiply(_e.matrixWorld)),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.updateMatrixWorld(!0),pe.projectionMatrix.copy(_e.projectionMatrix),pe.projectionMatrixInverse.copy(_e.projectionMatrixInverse),pe.isPerspectiveCamera&&(pe.fov=bp*2*Math.atan(1/pe.projectionMatrix.elements[5]),pe.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(pe){l=pe,m!==null&&(m.fixedFoveation=pe),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=pe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Y)},this.getCameraTexture=function(pe){return f[pe]};let _t=null;function ft(pe,_e){if(p=_e.getViewerPose(u||o),w=_e,p!==null){const we=p.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let nt=!1;we.length!==Y.cameras.length&&(Y.cameras.length=0,nt=!0);for(let V=0;V<we.length;V++){const zt=we[V];let at=null;if(g!==null)at=g.getViewport(zt);else{const q=h.getViewSubImage(m,zt);at=q.viewport,V===0&&(e.setRenderTargetTextures(E,q.colorTexture,q.depthStencilTexture),e.setRenderTarget(E))}let it=z[V];it===void 0&&(it=new Ei,it.layers.enable(V),it.viewport=new jt,z[V]=it),it.matrix.fromArray(zt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(zt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(at.x,at.y,at.width,at.height),V===0&&(Y.matrix.copy(it.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),nt===!0&&Y.cameras.push(it)}const He=r.enabledFeatures;if(He&&He.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){h=i.getBinding();const V=h.getDepthInformation(we[0]);V&&V.isValid&&V.texture&&x.init(V,r.renderState)}if(He&&He.includes("camera-access")&&b){e.state.unbindTexture(),h=i.getBinding();for(let V=0;V<we.length;V++){const zt=we[V].camera;if(zt){let at=f[zt];at||(at=new Zx,f[zt]=at);const it=h.getCameraImage(zt);at.sourceTexture=it}}}}for(let we=0;we<L.length;we++){const nt=D[we],He=L[we];nt!==null&&He!==void 0&&He.update(nt,_e,u||o)}_t&&_t(pe,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),w=null}const Ie=new ny;Ie.setAnimationLoop(ft),this.setAnimationLoop=function(pe){_t=pe},this.dispose=function(){}}}const Rs=new er,Rb=new Qt;function Pb(t,e){function n(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function i(x,f){f.color.getRGB(x.fogColor.value,jx(t)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function r(x,f,_,y,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(x,f):f.isMeshToonMaterial?(s(x,f),h(x,f)):f.isMeshPhongMaterial?(s(x,f),p(x,f)):f.isMeshStandardMaterial?(s(x,f),m(x,f),f.isMeshPhysicalMaterial&&g(x,f,E)):f.isMeshMatcapMaterial?(s(x,f),w(x,f)):f.isMeshDepthMaterial?s(x,f):f.isMeshDistanceMaterial?(s(x,f),b(x,f)):f.isMeshNormalMaterial?s(x,f):f.isLineBasicMaterial?(o(x,f),f.isLineDashedMaterial&&a(x,f)):f.isPointsMaterial?l(x,f,_,y):f.isSpriteMaterial?u(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,n(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===gi&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,n(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===gi&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,n(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,n(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const _=e.get(f),y=_.envMap,E=_.envMapRotation;y&&(x.envMap.value=y,Rs.copy(E),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),x.envMapRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(Rs)),x.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,x.aoMapTransform))}function o(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform))}function a(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,_,y){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*_,x.scale.value=y*.5,f.map&&(x.map.value=f.map,n(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function u(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function p(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function h(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function m(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function g(x,f,_){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gi&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=_.texture,x.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,f){f.matcap&&(x.matcap.value=f.matcap)}function b(x,f){const _=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(_.matrixWorld),x.nearDistance.value=_.shadow.camera.near,x.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ib(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const E=y.program;i.uniformBlockBinding(_,E)}function u(_,y){let E=r[_.id];E===void 0&&(w(_),E=p(_),r[_.id]=E,_.addEventListener("dispose",x));const L=y.program;i.updateUBOMapping(_,L);const D=e.render.frame;s[_.id]!==D&&(m(_),s[_.id]=D)}function p(_){const y=h();_.__bindingPointIndex=y;const E=t.createBuffer(),L=_.__size,D=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,L,D),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,E),E}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(_){const y=r[_.id],E=_.uniforms,L=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let D=0,N=E.length;D<N;D++){const F=Array.isArray(E[D])?E[D]:[E[D]];for(let T=0,M=F.length;T<M;T++){const z=F[T];if(g(z,D,T,L)===!0){const Y=z.__offset,se=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let fe=0;fe<se.length;fe++){const X=se[fe],ne=b(X);typeof X=="number"||typeof X=="boolean"?(z.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,Y+ce,z.__data)):X.isMatrix3?(z.__data[0]=X.elements[0],z.__data[1]=X.elements[1],z.__data[2]=X.elements[2],z.__data[3]=0,z.__data[4]=X.elements[3],z.__data[5]=X.elements[4],z.__data[6]=X.elements[5],z.__data[7]=0,z.__data[8]=X.elements[6],z.__data[9]=X.elements[7],z.__data[10]=X.elements[8],z.__data[11]=0):(X.toArray(z.__data,ce),ce+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(_,y,E,L){const D=_.value,N=y+"_"+E;if(L[N]===void 0)return typeof D=="number"||typeof D=="boolean"?L[N]=D:L[N]=D.clone(),!0;{const F=L[N];if(typeof D=="number"||typeof D=="boolean"){if(F!==D)return L[N]=D,!0}else if(F.equals(D)===!1)return F.copy(D),!0}return!1}function w(_){const y=_.uniforms;let E=0;const L=16;for(let N=0,F=y.length;N<F;N++){const T=Array.isArray(y[N])?y[N]:[y[N]];for(let M=0,z=T.length;M<z;M++){const Y=T[M],se=Array.isArray(Y.value)?Y.value:[Y.value];for(let ce=0,fe=se.length;ce<fe;ce++){const X=se[ce],ne=b(X),H=E%L,oe=H%ne.boundary,ue=H+oe;E+=oe,ue!==0&&L-ue<ne.storage&&(E+=L-ue),Y.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=ne.storage}}}const D=E%L;return D>0&&(E+=L-D),_.__size=E,_.__cache={},this}function b(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function x(_){const y=_.target;y.removeEventListener("dispose",x);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class Lb{constructor(e={}){const{canvas:n=Zw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const w=new Uint32Array(4),b=new Int32Array(4);let x=null,f=null;const _=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let L=!1;this._outputColorSpace=Nn;let D=0,N=0,F=null,T=-1,M=null;const z=new jt,Y=new jt;let se=null;const ce=new Mt(0);let fe=0,X=n.width,ne=n.height,H=1,oe=null,ue=null;const Pe=new jt(0,0,X,ne),ze=new jt(0,0,X,ne);let _t=!1;const ft=new Om;let Ie=!1,pe=!1;const _e=new Qt,we=new W,nt=new jt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function on(){return F===null?H:1}let V=i;function zt(C,te){return n.getContext(C,te)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bm}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",je,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),V===null){const te="webgl2";if(V=zt(te,C),V===null)throw zt(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let at,it,q,me,Q,G,Xe,Ke,U,A,re,he,xe,de,Ne,Me,De,Ze,Re,Ue,ot,Je,ye,dt;function Z(){at=new VT(V),at.init(),Je=new Eb(V,at),it=new UT(V,at,e,Je),q=new wb(V,at),it.reversedDepthBuffer&&m&&q.buffers.depth.setReversed(!0),me=new XT(V),Q=new cb,G=new Sb(V,at,q,Q,it,Je,me),Xe=new kT(E),Ke=new HT(E),U=new ZS(V),ye=new DT(V,U),A=new GT(V,U,me,ye),re=new qT(V,A,U,me),Re=new jT(V,it,G),Me=new FT(Q),he=new lb(E,Xe,Ke,at,it,ye,Me),xe=new Pb(E,Q),de=new db,Ne=new vb(at),Ze=new LT(E,Xe,Ke,q,re,g,l),De=new yb(E,re,it),dt=new Ib(V,me,it,q),Ue=new NT(V,at,me),ot=new WT(V,at,me),me.programs=he.programs,E.capabilities=it,E.extensions=at,E.properties=Q,E.renderLists=de,E.shadowMap=De,E.state=q,E.info=me}Z();const Ae=new Cb(E,V);this.xr=Ae,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=at.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=at.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(X,ne,!1))},this.getSize=function(C){return C.set(X,ne)},this.setSize=function(C,te,ae=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,ne=te,n.width=Math.floor(C*H),n.height=Math.floor(te*H),ae===!0&&(n.style.width=C+"px",n.style.height=te+"px"),this.setViewport(0,0,C,te)},this.getDrawingBufferSize=function(C){return C.set(X*H,ne*H).floor()},this.setDrawingBufferSize=function(C,te,ae){X=C,ne=te,H=ae,n.width=Math.floor(C*ae),n.height=Math.floor(te*ae),this.setViewport(0,0,C,te)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(Pe)},this.setViewport=function(C,te,ae,le){C.isVector4?Pe.set(C.x,C.y,C.z,C.w):Pe.set(C,te,ae,le),q.viewport(z.copy(Pe).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(ze)},this.setScissor=function(C,te,ae,le){C.isVector4?ze.set(C.x,C.y,C.z,C.w):ze.set(C,te,ae,le),q.scissor(Y.copy(ze).multiplyScalar(H).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(C){q.setScissorTest(_t=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){ue=C},this.getClearColor=function(C){return C.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(C=!0,te=!0,ae=!0){let le=0;if(C){let ie=!1;if(F!==null){const Te=F.texture.format;ie=Te===Dm||Te===Lm||Te===Im}if(ie){const Te=F.texture.type,Fe=Te===dr||Te===$s||Te===gl||Te===vl||Te===Rm||Te===Pm,Oe=Ze.getClearColor(),Be=Ze.getClearAlpha(),rt=Oe.r,st=Oe.g,tt=Oe.b;Fe?(w[0]=rt,w[1]=st,w[2]=tt,w[3]=Be,V.clearBufferuiv(V.COLOR,0,w)):(b[0]=rt,b[1]=st,b[2]=tt,b[3]=Be,V.clearBufferiv(V.COLOR,0,b))}else le|=V.COLOR_BUFFER_BIT}te&&(le|=V.DEPTH_BUFFER_BIT),ae&&(le|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",je,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),Ze.dispose(),de.dispose(),Ne.dispose(),Q.dispose(),Xe.dispose(),Ke.dispose(),re.dispose(),ye.dispose(),dt.dispose(),he.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",jn),Ae.removeEventListener("sessionend",ai),qt.stop()};function Le(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function je(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const C=me.autoReset,te=De.enabled,ae=De.autoUpdate,le=De.needsUpdate,ie=De.type;Z(),me.autoReset=C,De.enabled=te,De.autoUpdate=ae,De.needsUpdate=le,De.type=ie}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ve(C){const te=C.target;te.removeEventListener("dispose",ve),Ye(te)}function Ye(C){lt(C),Q.remove(C)}function lt(C){const te=Q.get(C).programs;te!==void 0&&(te.forEach(function(ae){he.releaseProgram(ae)}),C.isShaderMaterial&&he.releaseShaderCache(C))}this.renderBufferDirect=function(C,te,ae,le,ie,Te){te===null&&(te=He);const Fe=ie.isMesh&&ie.matrixWorld.determinant()<0,Oe=da(C,te,ae,le,ie);q.setMaterial(le,Fe);let Be=ae.index,rt=1;if(le.wireframe===!0){if(Be=A.getWireframeAttribute(ae),Be===void 0)return;rt=2}const st=ae.drawRange,tt=ae.attributes.position;let yt=st.start*rt,Lt=(st.start+st.count)*rt;Te!==null&&(yt=Math.max(yt,Te.start*rt),Lt=Math.min(Lt,(Te.start+Te.count)*rt)),Be!==null?(yt=Math.max(yt,0),Lt=Math.min(Lt,Be.count)):tt!=null&&(yt=Math.max(yt,0),Lt=Math.min(Lt,tt.count));const nn=Lt-yt;if(nn<0||nn===1/0)return;ye.setup(ie,le,Oe,ae,Be);let Ht,At=Ue;if(Be!==null&&(Ht=U.get(Be),At=ot,At.setIndex(Ht)),ie.isMesh)le.wireframe===!0?(q.setLineWidth(le.wireframeLinewidth*on()),At.setMode(V.LINES)):At.setMode(V.TRIANGLES);else if(ie.isLine){let $e=le.linewidth;$e===void 0&&($e=1),q.setLineWidth($e*on()),ie.isLineSegments?At.setMode(V.LINES):ie.isLineLoop?At.setMode(V.LINE_LOOP):At.setMode(V.LINE_STRIP)}else ie.isPoints?At.setMode(V.POINTS):ie.isSprite&&At.setMode(V.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)yl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))At.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const $e=ie._multiDrawStarts,mt=ie._multiDrawCounts,Tt=ie._multiDrawCount,Fn=Be?U.get(Be).bytesPerElement:1,tr=Q.get(le).currentProgram.getUniforms();for(let Qn=0;Qn<Tt;Qn++)tr.setValue(V,"_gl_DrawID",Qn),At.render($e[Qn]/Fn,mt[Qn])}else if(ie.isInstancedMesh)At.renderInstances(yt,nn,ie.count);else if(ae.isInstancedBufferGeometry){const $e=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,mt=Math.min(ae.instanceCount,$e);At.renderInstances(yt,nn,mt)}else At.render(yt,nn)};function Bt(C,te,ae){C.transparent===!0&&C.side===Vt&&C.forceSinglePass===!1?(C.side=gi,C.needsUpdate=!0,gs(C,te,ae),C.side=cs,C.needsUpdate=!0,gs(C,te,ae),C.side=Vt):gs(C,te,ae)}this.compile=function(C,te,ae=null){ae===null&&(ae=C),f=Ne.get(ae),f.init(te),y.push(f),ae.traverseVisible(function(ie){ie.isLight&&ie.layers.test(te.layers)&&(f.pushLight(ie),ie.castShadow&&f.pushShadow(ie))}),C!==ae&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(te.layers)&&(f.pushLight(ie),ie.castShadow&&f.pushShadow(ie))}),f.setupLights();const le=new Set;return C.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Te=ie.material;if(Te)if(Array.isArray(Te))for(let Fe=0;Fe<Te.length;Fe++){const Oe=Te[Fe];Bt(Oe,ae,ie),le.add(Oe)}else Bt(Te,ae,ie),le.add(Te)}),f=y.pop(),le},this.compileAsync=function(C,te,ae=null){const le=this.compile(C,te,ae);return new Promise(ie=>{function Te(){if(le.forEach(function(Fe){Q.get(Fe).currentProgram.isReady()&&le.delete(Fe)}),le.size===0){ie(C);return}setTimeout(Te,10)}at.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let pt=null;function oi(C){pt&&pt(C)}function jn(){qt.stop()}function ai(){qt.start()}const qt=new ny;qt.setAnimationLoop(oi),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(C){pt=C,Ae.setAnimationLoop(C),C===null?qt.stop():qt.start()},Ae.addEventListener("sessionstart",jn),Ae.addEventListener("sessionend",ai),this.render=function(C,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(te),te=Ae.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,te,F),f=Ne.get(C,y.length),f.init(te),y.push(f),_e.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),ft.setFromProjectionMatrix(_e,ar,te.reversedDepth),pe=this.localClippingEnabled,Ie=Me.init(this.clippingPlanes,pe),x=de.get(C,_.length),x.init(),_.push(x),Ae.enabled===!0&&Ae.isPresenting===!0){const Te=E.xr.getDepthSensingMesh();Te!==null&&Qs(Te,te,-1/0,E.sortObjects)}Qs(C,te,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(oe,ue),ht=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,ht&&Ze.addToRenderList(x,C),this.info.render.frame++,Ie===!0&&Me.beginShadows();const ae=f.state.shadowsArray;De.render(ae,C,te),Ie===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=x.opaque,ie=x.transmissive;if(f.setupLights(),te.isArrayCamera){const Te=te.cameras;if(ie.length>0)for(let Fe=0,Oe=Te.length;Fe<Oe;Fe++){const Be=Te[Fe];ca(le,ie,C,Be)}ht&&Ze.render(C);for(let Fe=0,Oe=Te.length;Fe<Oe;Fe++){const Be=Te[Fe];eo(x,C,Be,Be.viewport)}}else ie.length>0&&ca(le,ie,C,te),ht&&Ze.render(C),eo(x,C,te);F!==null&&N===0&&(G.updateMultisampleRenderTarget(F),G.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(E,C,te),ye.resetDefaultState(),T=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],Ie===!0&&Me.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?x=_[_.length-1]:x=null};function Qs(C,te,ae,le){if(C.visible===!1)return;if(C.layers.test(te.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(te);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ft.intersectsSprite(C)){le&&nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(_e);const Fe=re.update(C),Oe=C.material;Oe.visible&&x.push(C,Fe,Oe,ae,nt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ft.intersectsObject(C))){const Fe=re.update(C),Oe=C.material;if(le&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),nt.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),nt.copy(Fe.boundingSphere.center)),nt.applyMatrix4(C.matrixWorld).applyMatrix4(_e)),Array.isArray(Oe)){const Be=Fe.groups;for(let rt=0,st=Be.length;rt<st;rt++){const tt=Be[rt],yt=Oe[tt.materialIndex];yt&&yt.visible&&x.push(C,Fe,yt,ae,nt.z,tt)}}else Oe.visible&&x.push(C,Fe,Oe,ae,nt.z,null)}}const Te=C.children;for(let Fe=0,Oe=Te.length;Fe<Oe;Fe++)Qs(Te[Fe],te,ae,le)}function eo(C,te,ae,le){const ie=C.opaque,Te=C.transmissive,Fe=C.transparent;f.setupLightsView(ae),Ie===!0&&Me.setGlobalState(E.clippingPlanes,ae),le&&q.viewport(z.copy(le)),ie.length>0&&ms(ie,te,ae),Te.length>0&&ms(Te,te,ae),Fe.length>0&&ms(Fe,te,ae),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function ca(C,te,ae,le){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[le.id]===void 0&&(f.state.transmissionRenderTarget[le.id]=new Ks(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?bl:dr,minFilter:Hs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Te=f.state.transmissionRenderTarget[le.id],Fe=le.viewport||z;Te.setSize(Fe.z*E.transmissionResolutionScale,Fe.w*E.transmissionResolutionScale);const Oe=E.getRenderTarget(),Be=E.getActiveCubeFace(),rt=E.getActiveMipmapLevel();E.setRenderTarget(Te),E.getClearColor(ce),fe=E.getClearAlpha(),fe<1&&E.setClearColor(16777215,.5),E.clear(),ht&&Ze.render(ae);const st=E.toneMapping;E.toneMapping=os;const tt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),f.setupLightsView(le),Ie===!0&&Me.setGlobalState(E.clippingPlanes,le),ms(C,ae,le),G.updateMultisampleRenderTarget(Te),G.updateRenderTargetMipmap(Te),at.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Lt=0,nn=te.length;Lt<nn;Lt++){const Ht=te[Lt],At=Ht.object,$e=Ht.geometry,mt=Ht.material,Tt=Ht.group;if(mt.side===Vt&&At.layers.test(le.layers)){const Fn=mt.side;mt.side=gi,mt.needsUpdate=!0,to(At,ae,le,$e,mt,Tt),mt.side=Fn,mt.needsUpdate=!0,yt=!0}}yt===!0&&(G.updateMultisampleRenderTarget(Te),G.updateRenderTargetMipmap(Te))}E.setRenderTarget(Oe,Be,rt),E.setClearColor(ce,fe),tt!==void 0&&(le.viewport=tt),E.toneMapping=st}function ms(C,te,ae){const le=te.isScene===!0?te.overrideMaterial:null;for(let ie=0,Te=C.length;ie<Te;ie++){const Fe=C[ie],Oe=Fe.object,Be=Fe.geometry,rt=Fe.group;let st=Fe.material;st.allowOverride===!0&&le!==null&&(st=le),Oe.layers.test(ae.layers)&&to(Oe,te,ae,Be,st,rt)}}function to(C,te,ae,le,ie,Te){C.onBeforeRender(E,te,ae,le,ie,Te),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(E,te,ae,le,C,Te),ie.transparent===!0&&ie.side===Vt&&ie.forceSinglePass===!1?(ie.side=gi,ie.needsUpdate=!0,E.renderBufferDirect(ae,te,le,ie,C,Te),ie.side=cs,ie.needsUpdate=!0,E.renderBufferDirect(ae,te,le,ie,C,Te),ie.side=Vt):E.renderBufferDirect(ae,te,le,ie,C,Te),C.onAfterRender(E,te,ae,le,ie,Te)}function gs(C,te,ae){te.isScene!==!0&&(te=He);const le=Q.get(C),ie=f.state.lights,Te=f.state.shadowsArray,Fe=ie.state.version,Oe=he.getParameters(C,ie.state,Te,te,ae),Be=he.getProgramCacheKey(Oe);let rt=le.programs;le.environment=C.isMeshStandardMaterial?te.environment:null,le.fog=te.fog,le.envMap=(C.isMeshStandardMaterial?Ke:Xe).get(C.envMap||le.environment),le.envMapRotation=le.environment!==null&&C.envMap===null?te.environmentRotation:C.envMapRotation,rt===void 0&&(C.addEventListener("dispose",ve),rt=new Map,le.programs=rt);let st=rt.get(Be);if(st!==void 0){if(le.currentProgram===st&&le.lightsStateVersion===Fe)return no(C,Oe),st}else Oe.uniforms=he.getUniforms(C),C.onBeforeCompile(Oe,E),st=he.acquireProgram(Oe,Be),rt.set(Be,st),le.uniforms=Oe.uniforms;const tt=le.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(tt.clippingPlanes=Me.uniform),no(C,Oe),le.needsLights=Il(C),le.lightsStateVersion=Fe,le.needsLights&&(tt.ambientLightColor.value=ie.state.ambient,tt.lightProbe.value=ie.state.probe,tt.directionalLights.value=ie.state.directional,tt.directionalLightShadows.value=ie.state.directionalShadow,tt.spotLights.value=ie.state.spot,tt.spotLightShadows.value=ie.state.spotShadow,tt.rectAreaLights.value=ie.state.rectArea,tt.ltc_1.value=ie.state.rectAreaLTC1,tt.ltc_2.value=ie.state.rectAreaLTC2,tt.pointLights.value=ie.state.point,tt.pointLightShadows.value=ie.state.pointShadow,tt.hemisphereLights.value=ie.state.hemi,tt.directionalShadowMap.value=ie.state.directionalShadowMap,tt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,tt.spotShadowMap.value=ie.state.spotShadowMap,tt.spotLightMatrix.value=ie.state.spotLightMatrix,tt.spotLightMap.value=ie.state.spotLightMap,tt.pointShadowMap.value=ie.state.pointShadowMap,tt.pointShadowMatrix.value=ie.state.pointShadowMatrix),le.currentProgram=st,le.uniformsList=null,st}function ua(C){if(C.uniformsList===null){const te=C.currentProgram.getUniforms();C.uniformsList=$c.seqWithValue(te.seq,C.uniforms)}return C.uniformsList}function no(C,te){const ae=Q.get(C);ae.outputColorSpace=te.outputColorSpace,ae.batching=te.batching,ae.batchingColor=te.batchingColor,ae.instancing=te.instancing,ae.instancingColor=te.instancingColor,ae.instancingMorph=te.instancingMorph,ae.skinning=te.skinning,ae.morphTargets=te.morphTargets,ae.morphNormals=te.morphNormals,ae.morphColors=te.morphColors,ae.morphTargetsCount=te.morphTargetsCount,ae.numClippingPlanes=te.numClippingPlanes,ae.numIntersection=te.numClipIntersection,ae.vertexAlphas=te.vertexAlphas,ae.vertexTangents=te.vertexTangents,ae.toneMapping=te.toneMapping}function da(C,te,ae,le,ie){te.isScene!==!0&&(te=He),G.resetTextureUnits();const Te=te.fog,Fe=le.isMeshStandardMaterial?te.environment:null,Oe=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:na,Be=(le.isMeshStandardMaterial?Ke:Xe).get(le.envMap||Fe),rt=le.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,st=!!ae.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),tt=!!ae.morphAttributes.position,yt=!!ae.morphAttributes.normal,Lt=!!ae.morphAttributes.color;let nn=os;le.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(nn=E.toneMapping);const Ht=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,At=Ht!==void 0?Ht.length:0,$e=Q.get(le),mt=f.state.lights;if(Ie===!0&&(pe===!0||C!==M)){const Rn=C===M&&le.id===T;Me.setState(le,C,Rn)}let Tt=!1;le.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==mt.state.version||$e.outputColorSpace!==Oe||ie.isBatchedMesh&&$e.batching===!1||!ie.isBatchedMesh&&$e.batching===!0||ie.isBatchedMesh&&$e.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&$e.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&$e.instancing===!1||!ie.isInstancedMesh&&$e.instancing===!0||ie.isSkinnedMesh&&$e.skinning===!1||!ie.isSkinnedMesh&&$e.skinning===!0||ie.isInstancedMesh&&$e.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&$e.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&$e.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&$e.instancingMorph===!1&&ie.morphTexture!==null||$e.envMap!==Be||le.fog===!0&&$e.fog!==Te||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Me.numPlanes||$e.numIntersection!==Me.numIntersection)||$e.vertexAlphas!==rt||$e.vertexTangents!==st||$e.morphTargets!==tt||$e.morphNormals!==yt||$e.morphColors!==Lt||$e.toneMapping!==nn||$e.morphTargetsCount!==At)&&(Tt=!0):(Tt=!0,$e.__version=le.version);let Fn=$e.currentProgram;Tt===!0&&(Fn=gs(le,te,ie));let tr=!1,Qn=!1,fr=!1;const Yt=Fn.getUniforms(),kn=$e.uniforms;if(q.useProgram(Fn.program)&&(tr=!0,Qn=!0,fr=!0),le.id!==T&&(T=le.id,Qn=!0),tr||M!==C){q.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Yt.setValue(V,"projectionMatrix",C.projectionMatrix),Yt.setValue(V,"viewMatrix",C.matrixWorldInverse);const zn=Yt.map.cameraPosition;zn!==void 0&&zn.setValue(V,we.setFromMatrixPosition(C.matrixWorld)),it.logarithmicDepthBuffer&&Yt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Yt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Qn=!0,fr=!0)}if(ie.isSkinnedMesh){Yt.setOptional(V,ie,"bindMatrix"),Yt.setOptional(V,ie,"bindMatrixInverse");const Rn=ie.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Yt.setValue(V,"boneTexture",Rn.boneTexture,G))}ie.isBatchedMesh&&(Yt.setOptional(V,ie,"batchingTexture"),Yt.setValue(V,"batchingTexture",ie._matricesTexture,G),Yt.setOptional(V,ie,"batchingIdTexture"),Yt.setValue(V,"batchingIdTexture",ie._indirectTexture,G),Yt.setOptional(V,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Yt.setValue(V,"batchingColorTexture",ie._colorsTexture,G));const On=ae.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Re.update(ie,ae,Fn),(Qn||$e.receiveShadow!==ie.receiveShadow)&&($e.receiveShadow=ie.receiveShadow,Yt.setValue(V,"receiveShadow",ie.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(kn.envMap.value=Be,kn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&te.environment!==null&&(kn.envMapIntensity.value=te.environmentIntensity),Qn&&(Yt.setValue(V,"toneMappingExposure",E.toneMappingExposure),$e.needsLights&&fa(kn,fr),Te&&le.fog===!0&&xe.refreshFogUniforms(kn,Te),xe.refreshMaterialUniforms(kn,le,H,ne,f.state.transmissionRenderTarget[C.id]),$c.upload(V,ua($e),kn,G)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&($c.upload(V,ua($e),kn,G),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Yt.setValue(V,"center",ie.center),Yt.setValue(V,"modelViewMatrix",ie.modelViewMatrix),Yt.setValue(V,"normalMatrix",ie.normalMatrix),Yt.setValue(V,"modelMatrix",ie.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Rn=le.uniformsGroups;for(let zn=0,zi=Rn.length;zn<zi;zn++){const Pi=Rn[zn];dt.update(Pi,Fn),dt.bind(Pi,Fn)}}return Fn}function fa(C,te){C.ambientLightColor.needsUpdate=te,C.lightProbe.needsUpdate=te,C.directionalLights.needsUpdate=te,C.directionalLightShadows.needsUpdate=te,C.pointLights.needsUpdate=te,C.pointLightShadows.needsUpdate=te,C.spotLights.needsUpdate=te,C.spotLightShadows.needsUpdate=te,C.rectAreaLights.needsUpdate=te,C.hemisphereLights.needsUpdate=te}function Il(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,te,ae){const le=Q.get(C);le.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Q.get(C.texture).__webglTexture=te,Q.get(C.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ae,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,te){const ae=Q.get(C);ae.__webglFramebuffer=te,ae.__useDefaultFramebuffer=te===void 0};const io=V.createFramebuffer();this.setRenderTarget=function(C,te=0,ae=0){F=C,D=te,N=ae;let le=!0,ie=null,Te=!1,Fe=!1;if(C){const Be=Q.get(C);if(Be.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(V.FRAMEBUFFER,null),le=!1;else if(Be.__webglFramebuffer===void 0)G.setupRenderTarget(C);else if(Be.__hasExternalTextures)G.rebindTextures(C,Q.get(C.texture).__webglTexture,Q.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const tt=C.depthTexture;if(Be.__boundDepthTexture!==tt){if(tt!==null&&Q.has(tt)&&(C.width!==tt.image.width||C.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(C)}}const rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Fe=!0);const st=Q.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(st[te])?ie=st[te][ae]:ie=st[te],Te=!0):C.samples>0&&G.useMultisampledRTT(C)===!1?ie=Q.get(C).__webglMultisampledFramebuffer:Array.isArray(st)?ie=st[ae]:ie=st,z.copy(C.viewport),Y.copy(C.scissor),se=C.scissorTest}else z.copy(Pe).multiplyScalar(H).floor(),Y.copy(ze).multiplyScalar(H).floor(),se=_t;if(ae!==0&&(ie=io),q.bindFramebuffer(V.FRAMEBUFFER,ie)&&le&&q.drawBuffers(C,ie),q.viewport(z),q.scissor(Y),q.setScissorTest(se),Te){const Be=Q.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+te,Be.__webglTexture,ae)}else if(Fe){const Be=te;for(let rt=0;rt<C.textures.length;rt++){const st=Q.get(C.textures[rt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+rt,st.__webglTexture,ae,Be)}}else if(C!==null&&ae!==0){const Be=Q.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Be.__webglTexture,ae)}T=-1},this.readRenderTargetPixels=function(C,te,ae,le,ie,Te,Fe,Oe=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){q.bindFramebuffer(V.FRAMEBUFFER,Be);try{const rt=C.textures[Oe],st=rt.format,tt=rt.type;if(!it.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=C.width-le&&ae>=0&&ae<=C.height-ie&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Oe),V.readPixels(te,ae,le,ie,Je.convert(st),Je.convert(tt),Te))}finally{const rt=F!==null?Q.get(F).__webglFramebuffer:null;q.bindFramebuffer(V.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(C,te,ae,le,ie,Te,Fe,Oe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be)if(te>=0&&te<=C.width-le&&ae>=0&&ae<=C.height-ie){q.bindFramebuffer(V.FRAMEBUFFER,Be);const rt=C.textures[Oe],st=rt.format,tt=rt.type;if(!it.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,yt),V.bufferData(V.PIXEL_PACK_BUFFER,Te.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Oe),V.readPixels(te,ae,le,ie,Je.convert(st),Je.convert(tt),0);const Lt=F!==null?Q.get(F).__webglFramebuffer:null;q.bindFramebuffer(V.FRAMEBUFFER,Lt);const nn=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Jw(V,nn,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,yt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Te),V.deleteBuffer(yt),V.deleteSync(nn),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,te=null,ae=0){const le=Math.pow(2,-ae),ie=Math.floor(C.image.width*le),Te=Math.floor(C.image.height*le),Fe=te!==null?te.x:0,Oe=te!==null?te.y:0;G.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,ae,0,0,Fe,Oe,ie,Te),q.unbindTexture()};const Ll=V.createFramebuffer(),vs=V.createFramebuffer();this.copyTextureToTexture=function(C,te,ae=null,le=null,ie=0,Te=null){Te===null&&(ie!==0?(yl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=ie,ie=0):Te=0);let Fe,Oe,Be,rt,st,tt,yt,Lt,nn;const Ht=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(ae!==null)Fe=ae.max.x-ae.min.x,Oe=ae.max.y-ae.min.y,Be=ae.isBox3?ae.max.z-ae.min.z:1,rt=ae.min.x,st=ae.min.y,tt=ae.isBox3?ae.min.z:0;else{const On=Math.pow(2,-ie);Fe=Math.floor(Ht.width*On),Oe=Math.floor(Ht.height*On),C.isDataArrayTexture?Be=Ht.depth:C.isData3DTexture?Be=Math.floor(Ht.depth*On):Be=1,rt=0,st=0,tt=0}le!==null?(yt=le.x,Lt=le.y,nn=le.z):(yt=0,Lt=0,nn=0);const At=Je.convert(te.format),$e=Je.convert(te.type);let mt;te.isData3DTexture?(G.setTexture3D(te,0),mt=V.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(G.setTexture2DArray(te,0),mt=V.TEXTURE_2D_ARRAY):(G.setTexture2D(te,0),mt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,te.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,te.unpackAlignment);const Tt=V.getParameter(V.UNPACK_ROW_LENGTH),Fn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),tr=V.getParameter(V.UNPACK_SKIP_PIXELS),Qn=V.getParameter(V.UNPACK_SKIP_ROWS),fr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ht.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ht.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,rt),V.pixelStorei(V.UNPACK_SKIP_ROWS,st),V.pixelStorei(V.UNPACK_SKIP_IMAGES,tt);const Yt=C.isDataArrayTexture||C.isData3DTexture,kn=te.isDataArrayTexture||te.isData3DTexture;if(C.isDepthTexture){const On=Q.get(C),Rn=Q.get(te),zn=Q.get(On.__renderTarget),zi=Q.get(Rn.__renderTarget);q.bindFramebuffer(V.READ_FRAMEBUFFER,zn.__webglFramebuffer),q.bindFramebuffer(V.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Pi=0;Pi<Be;Pi++)Yt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Q.get(C).__webglTexture,ie,tt+Pi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Q.get(te).__webglTexture,Te,nn+Pi)),V.blitFramebuffer(rt,st,Fe,Oe,yt,Lt,Fe,Oe,V.DEPTH_BUFFER_BIT,V.NEAREST);q.bindFramebuffer(V.READ_FRAMEBUFFER,null),q.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ie!==0||C.isRenderTargetTexture||Q.has(C)){const On=Q.get(C),Rn=Q.get(te);q.bindFramebuffer(V.READ_FRAMEBUFFER,Ll),q.bindFramebuffer(V.DRAW_FRAMEBUFFER,vs);for(let zn=0;zn<Be;zn++)Yt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,On.__webglTexture,ie,tt+zn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,On.__webglTexture,ie),kn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Rn.__webglTexture,Te,nn+zn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Rn.__webglTexture,Te),ie!==0?V.blitFramebuffer(rt,st,Fe,Oe,yt,Lt,Fe,Oe,V.COLOR_BUFFER_BIT,V.NEAREST):kn?V.copyTexSubImage3D(mt,Te,yt,Lt,nn+zn,rt,st,Fe,Oe):V.copyTexSubImage2D(mt,Te,yt,Lt,rt,st,Fe,Oe);q.bindFramebuffer(V.READ_FRAMEBUFFER,null),q.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else kn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(mt,Te,yt,Lt,nn,Fe,Oe,Be,At,$e,Ht.data):te.isCompressedArrayTexture?V.compressedTexSubImage3D(mt,Te,yt,Lt,nn,Fe,Oe,Be,At,Ht.data):V.texSubImage3D(mt,Te,yt,Lt,nn,Fe,Oe,Be,At,$e,Ht):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Te,yt,Lt,Fe,Oe,At,$e,Ht.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Te,yt,Lt,Ht.width,Ht.height,At,Ht.data):V.texSubImage2D(V.TEXTURE_2D,Te,yt,Lt,Fe,Oe,At,$e,Ht);V.pixelStorei(V.UNPACK_ROW_LENGTH,Tt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Fn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,tr),V.pixelStorei(V.UNPACK_SKIP_ROWS,Qn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,fr),Te===0&&te.generateMipmaps&&V.generateMipmap(mt),q.unbindTexture()},this.initRenderTarget=function(C){Q.get(C).__webglFramebuffer===void 0&&G.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?G.setTextureCube(C,0):C.isData3DTexture?G.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?G.setTexture2DArray(C,0):G.setTexture2D(C,0),q.unbindTexture()},this.resetState=function(){D=0,N=0,F=null,q.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Dt._getUnpackColorSpace()}}var pv;const Pt=(pv=window.Telegram)==null?void 0:pv.WebApp,cv="/yggdrasil-tma/",Lc=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],Db=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],uv={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},dv=()=>{try{const t={...uv,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...uv,watch:Date.now()}}},Na=()=>new Date().toISOString().slice(0,10),Nb=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",Wf=[3,5,8,12,18,25,40],Ub=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],Fb=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],Xf=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],Ua={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},fv={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},jf={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},qf={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function Vr({name:t,className:e}){return $.jsx("img",{src:t.includes(".")?`${cv}img/${t}`:`${cv}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const kb=`
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
`,Ps=(t,e=.9,n=0)=>new be({color:t,roughness:e,metalness:n}),k=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)},hv=(t,e=.1,n=1)=>{const i=t.attributes.position;for(let r=0;r<i.count;r++){const s=i.getX(r),o=i.getY(r),a=i.getZ(r),l=Math.max(.001,Math.sqrt(s*s+a*a)),u=Math.sin(s*8.7+a*6.1+o*4.3+n)*.5+.5,p=Math.cos(s*13.2-a*9.4+o*3.1+n*1.7)*.5+.5,h=Math.min(1,l*1.4);i.setX(r,s+(u-.5)*e*(.45+h)),i.setZ(r,a+(p-.5)*e*(.35+h)),i.setY(r,o+(u+p-1)*e*.18)}return i.needsUpdate=!0,t.computeVertexNormals(),t},Ob=(t,e)=>{const n=Math.sin(t*.11+.7)*.65,i=Math.cos(e*.09-.4)*.48,r=Math.sin((t+e)*.055)*.35,s=Math.exp(-(t*t+(e+3)*(e+3))/900);return(n+i+r)*(1-s*.72)};function ay(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function zb(t){const e=new Ge,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=Ps(i,.92),u=Ps(s,.9),p=Ps(o,.96),h=Ps(r,.95),m=Ps(a,.78),g=Ps(2106150,.98),w=new B(new ui(.28,.24,5,8),p);w.position.y=.72,e.add(w);const b=new B(new ui(n?.37:.32,.56,6,10),u);b.position.y=1.15,e.add(b);const x=new B(new ui(n?.4:.34,.34,5,8),u);x.scale.z=.82,x.position.y=1.28,e.add(x);const f=new B(new Qe(.36,.38,.09,12),p);f.position.y=.93,e.add(f);const _=new B(new Gn(.12,.12,.055),m);_.position.set(0,.93,.38),e.add(_);const y=new B(new Qe(.13,.15,.18,10),l);y.position.y=1.63,e.add(y);const E=new B(new ut(.31,16,12),l);E.scale.set(.92,1.06,.92),E.position.y=1.91,e.add(E);const L=new B(new ut(.325,14,10),h);L.scale.set(.98,.72,.98),L.position.set(0,2.08,-.025),e.add(L);const D=new B(new ui(.18,.3,5,8),h);D.position.set(0,1.93,-.25),D.rotation.x=.15,e.add(D);const N=new B(new hn(.045,.13,5),l);N.rotation.x=Math.PI/2,N.position.set(0,1.92,.3),e.add(N);const F=new be({color:1513754,roughness:.55});for(const oe of[-.105,.105]){const ue=new B(new ut(.025,7,5),F);ue.position.set(oe,1.98,.285),e.add(ue)}if(n){const oe=new B(new ut(.19,10,7),h);oe.scale.set(.82,1,.72),oe.position.set(0,1.8,.24),e.add(oe)}else{const oe=new B(new ui(.055,.42,4,7),h);oe.position.set(-.27,1.78,-.08),oe.rotation.z=-.22,e.add(oe)}const T=oe=>{const ue=new Ge;ue.position.set(oe*(n?.43:.39),1.43,0),ue.rotation.z=oe*.07;const Pe=new B(new ui(.105,.42,5,7),u);Pe.position.y=-.23,ue.add(Pe);const ze=new Ge;ze.position.y=-.46,ue.add(ze);const _t=new B(new ui(.085,.34,5,7),p);_t.position.y=-.2,ze.add(_t);const ft=new B(new ut(.105,9,7),l);return ft.position.y=-.43,ze.add(ft),e.add(ue),{upper:ue,elbow:ze}},M=T(-1),z=T(1),Y=oe=>{const ue=new Ge;ue.position.set(oe*.15,.68,0);const Pe=new B(new ui(.12,.42,5,7),g);Pe.position.y=-.23,ue.add(Pe);const ze=new Ge;ze.position.y=-.48,ue.add(ze);const _t=new B(new ui(.095,.4,5,7),g);_t.position.y=-.22,ze.add(_t);const ft=new B(new ui(.13,.24,5,7),p);return ft.scale.z=1.25,ft.position.set(0,-.47,.075),ze.add(ft),e.add(ue),ue},se=Y(-1),ce=Y(1),fe=new B(new ui(.42,.1,5,8),p);fe.scale.z=.72,fe.position.y=1.48,e.add(fe);const X=new B(new Gn(.58,.92,.075),Ps(t.id==="berserk"?2821132:1582894,.98));X.position.set(0,1.05,-.28),X.rotation.x=-.035,e.add(X);const ne=new Ge;if(t.id==="berserk"||t.id==="dwarf"){const oe=new B(new Qe(.035,.045,.72,7),p);oe.position.y=.36,ne.add(oe);const ue=new B(new Gn(.16,.34,.055),m);ue.position.set(0,.88,0),ue.rotation.z=t.id==="dwarf"?-.22:.22,ne.add(ue)}else{const oe=new B(new Qe(.028,.04,1.1,7),p);oe.position.y=.52,ne.add(oe);const ue=new B(new hn(.075,.25,6),m);ue.position.y=1.18,ne.add(ue)}if(ne.position.set(.43,.32,.03),ne.rotation.z=-.12,e.add(ne),t.id==="viking"||t.id==="berserk"){const oe=new B(new Qe(.3,.3,.1,16),p);oe.rotation.x=Math.PI/2,oe.position.set(0,1.12,-.37),e.add(oe);const ue=new B(new ut(.065,8,6),m);ue.position.set(0,1.12,-.43),e.add(ue)}const H=new B(new Hn(.62,24),new wt({color:0,transparent:!0,opacity:.32}));return H.rotation.x=-Math.PI/2,H.position.y=.02,e.add(H),e.userData.anim={armL:M,armR:z,legL:se,legR:ce,weapon:ne,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0},ay(e)}function Bb({h:t,on:e,eventDone:n}){const i=bt.useRef(null),r=bt.useRef(null),s=bt.useRef(null),o=bt.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=bt.useState(""),[u,p]=bt.useState(!1),[h,m]=bt.useState(!1),[g,w]=bt.useState(!1),[b,x]=bt.useState(!1),f=bt.useRef({x:0,z:1}),_=bt.useRef(!1),y=bt.useRef(null);bt.useEffect(()=>{const T=i.current;if(!T)return;const M=new SS;M.background=new Mt(10794669),M.fog=new km(10793898,.00325);const z=new Ei(54,1,.1,280);z.position.set(0,8.5,17);const Y=new Lb({antialias:!0,powerPreference:"high-performance"});Y.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),Y.shadowMap.enabled=!0,Y.shadowMap.type=Rx,Y.outputColorSpace=Nn,Y.toneMapping=Px,Y.toneMappingExposure=1.03,T.appendChild(Y.domElement);const se=new XS(15266536,6648159,1.18);M.add(se);const ce=new U1(16768952,2.32);ce.position.set(-42,58,34),ce.castShadow=!0,ce.shadow.mapSize.set(1536,1536),ce.shadow.camera.left=-95,ce.shadow.camera.right=95,ce.shadow.camera.top=95,ce.shadow.camera.bottom=-95,ce.shadow.bias=-5e-4,M.add(ce);const fe=new U1(12702934,.72);fe.position.set(55,18,-60),M.add(fe);const X=(c,v)=>{const d=Math.sin(c*.075)*.7+Math.cos(v*.062)*.55+Math.sin((c-v)*.045)*.35,S=Math.exp(-(c*c/850+(v+2)*(v+2)/1050)),P=Math.exp(-(c*c/150+(v-12)*(v-12)/2200));return d*(1-S*.88)-P*.18},ne=document.createElement("canvas");ne.width=ne.height=128;const H=ne.getContext("2d"),oe=H.createRadialGradient(64,64,4,64,64,64);oe.addColorStop(0,"rgba(255,238,194,0.30)"),oe.addColorStop(.34,"rgba(255,231,178,0.16)"),oe.addColorStop(.72,"rgba(255,225,170,0.055)"),oe.addColorStop(1,"rgba(255,225,170,0)"),H.fillStyle=oe,H.fillRect(0,0,128,128);const ue=new As(ne);ue.colorSpace=Nn;const Pe=new wt({map:ue,transparent:!0,depthWrite:!1,blending:yu,opacity:.58}),ze=[];[[-22,-4,7.5,4.8],[-9,18,5.6,2.2],[9,-10,6.8,5.4],[24,5,5,1.7],[-31,20,5.2,.8],[18,27,7,3.5]].forEach(([c,v,d,S])=>{const P=new B(new Sn(d,d*.68),Pe.clone());P.rotation.x=-Math.PI/2,P.rotation.z=S,P.position.set(c,X(c,v)+.018,v),P.renderOrder=2,M.add(P),ze.push(P)});const ft=new wt({color:16771263,transparent:!0,opacity:.032,depthWrite:!1,side:Vt,blending:yu}),Ie=[];[[-18,10,.8,14],[4,8,-.35,11],[27,15,.5,13]].forEach(([c,v,d,S])=>{const P=new B(new Sn(5.5,S),ft.clone());P.position.set(c,S*.5+.8,v),P.rotation.set(.1,d*.045,d),M.add(P),Ie.push(P)});const pe=c=>{const v=document.createElement("canvas");v.width=v.height=512;const d=v.getContext("2d"),S=R=>Math.abs(Math.sin(R*12.9898)*43758.5453)%1;if(c==="ground"){d.fillStyle="#4c6042",d.fillRect(0,0,512,512);for(let R=0;R<1800;R++){const O=S(R*1.17)*512,j=S(R*2.31)*512,K=10+S(R*3.71)*28,I=S(R*4.13);d.fillStyle=I>.72?`rgba(96,108,63,${.08+S(R)*.12})`:`rgba(30,36,25,${.05+S(R)*.12})`,d.beginPath(),d.arc(O,j,K,0,Math.PI*2),d.fill()}for(let R=0;R<650;R++){const O=S(R*7.1)*512,j=S(R*8.2)*512;d.strokeStyle=`rgba(142,154,91,${.18+S(R*2)*.15})`,d.lineWidth=1+S(R*4)*1.5,d.beginPath(),d.moveTo(O,j),d.lineTo(O+(S(R*5)-.5)*5,j-3-S(R*6)*5),d.stroke()}}else if(c==="wood"){d.fillStyle="#5a3d29",d.fillRect(0,0,512,512);for(let R=0;R<512;R+=22)d.fillStyle=`rgba(25,15,9,${.18+S(R)*.13})`,d.fillRect(0,R,512,3),d.strokeStyle=`rgba(154,111,69,${.08+S(R*2)*.08})`,d.lineWidth=2,d.beginPath(),d.moveTo(0,R+7),d.bezierCurveTo(150,R+2,340,R+13,512,R+5),d.stroke();for(let R=0;R<65;R++){const O=S(R*2.1)*512;d.fillStyle=`rgba(20,12,8,${.12+S(R*3)*.16})`,d.fillRect(O,0,2+S(R*4)*3,512)}}else if(c==="roof"){d.fillStyle="#252522",d.fillRect(0,0,512,512);for(let R=-30;R<550;R+=25){d.fillStyle=`rgba(105,94,77,${.12+S(R)*.08})`,d.fillRect(0,R,512,2),d.strokeStyle="rgba(12,12,11,.48)",d.lineWidth=3;for(let O=-40;O<560;O+=38)d.beginPath(),d.moveTo(O,R),d.lineTo(O-18,R+28),d.stroke()}for(let R=0;R<180;R++)d.fillStyle=`rgba(170,154,123,${.03+S(R)*.07})`,d.fillRect(S(R*2)*512,S(R*3)*512,2+S(R*4)*7,2)}else if(c==="bark"){d.fillStyle="#7b5a3f",d.fillRect(0,0,512,512);for(let R=0;R<76;R++){const O=S(R*2.1)*512,j=2+S(R*3.7)*7;d.fillStyle=`rgba(${24+S(R)*24},${16+S(R*4)*18},${10+S(R*5)*14},${.18+S(R*6)*.22})`,d.fillRect(O,0,j,512)}for(let R=0;R<80;R++){const O=S(R*7.1)*512,j=S(R*8.2)*512;d.strokeStyle=`rgba(126,91,60,${.07+S(R*2)*.09})`,d.lineWidth=1+S(R*3)*2,d.beginPath(),d.moveTo(O,j),d.lineTo(O+(S(R*4)-.5)*12,j+18+S(R*5)*45),d.stroke()}}else if(c==="foliage"){d.fillStyle="#68865a",d.fillRect(0,0,512,512);for(let R=0;R<1900;R++){const O=S(R*1.17)*512,j=S(R*2.31)*512,K=S(R*3.7),I=K>.72?112:K>.36?92:74,J=K>.72?145:K>.36?121:98,ee=K>.72?76:K>.36?60:48;d.fillStyle=`rgba(${I},${J},${ee},${.16+S(R*4)*.28})`,d.beginPath(),d.arc(O,j,1.5+S(R*5)*4.5,0,Math.PI*2),d.fill()}for(let R=0;R<260;R++){const O=S(R*9.1)*512,j=S(R*10.2)*512;d.strokeStyle=`rgba(18,31,22,${.08+S(R*3)*.12})`,d.lineWidth=1,d.beginPath(),d.moveTo(O,j),d.lineTo(O+(S(R*2)-.5)*10,j+(S(R*4)-.5)*10),d.stroke()}}else{d.fillStyle="#514333",d.fillRect(0,0,512,512);for(let R=0;R<1300;R++){const O=S(R*1.3)*512,j=S(R*2.7)*512;d.fillStyle=`rgba(${45+S(R*3)*38},${35+S(R*4)*28},${23+S(R*5)*20},${.08+S(R*6)*.18})`,d.fillRect(O,j,2+S(R*7)*7,1+S(R*8)*4)}}const P=new As(v);return P.wrapS=P.wrapT=qr,P.colorSpace=Nn,P.anisotropy=4,P},we=(()=>{const c=document.createElement("canvas");c.width=c.height=128;const v=c.getContext("2d"),d=v.createImageData(128,128);for(let R=0;R<128;R++)for(let O=0;O<128;O++){const j=(R*128+O)*4,K=Math.sin(O*.37)*.3+Math.sin(R*.61)*.24+Math.sin((O+R)*.17)*.2+Math.sin((O-R)*.09)*.14,I=Math.max(214,Math.min(250,Math.round(232+K*18)));d.data[j]=I,d.data[j+1]=I,d.data[j+2]=I,d.data[j+3]=255}v.putImageData(d,0,0);const S=new As(c);S.wrapS=S.wrapT=qr,S.repeat.set(5,5);const P=new As(c);return P.wrapS=P.wrapT=qr,P.repeat.set(4,4),{height:S,rough:P}})(),nt=pe("ground");nt.repeat.set(5,6);const He=pe("bark");He.wrapS=He.wrapT=qr,He.repeat.set(1.2,1.8);const ht=pe("foliage");ht.wrapS=ht.wrapT=qr,ht.repeat.set(1.35,1.35);const on=new Sn(190,190,62,62),V=on.attributes.position;for(let c=0;c<V.count;c++){const v=V.getX(c),d=-V.getY(c);V.setZ(c,X(v,d))}on.rotateX(-Math.PI/2),on.computeVertexNormals();const zt=new be({map:nt,roughness:.985,metalness:0,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.018}),at=new B(on,zt);at.receiveShadow=!0,M.add(at);const it=(c,v,d,S,P)=>{const R=[],O=[];for(let J=0;J<=18;J++){const ee=-95+10.555555555555555*J,Se=Math.sin(J*1.73+S)*.5+Math.cos(J*.61+S*1.9)*.28,ge=d*(.72+Se*.34);R.push(ee,0,0),R.push(ee+Se*2.2,ge,0)}for(let J=0;J<18;J++){const ee=J*2,Se=ee+1,ge=ee+2,qe=ee+3;O.push(ee,Se,ge,Se,qe,ge)}const K=new cn;K.setAttribute("position",new Rt(R,3)),K.setIndex(O),K.computeVertexNormals();const I=new B(K,new Uf({color:P,transparent:!0,opacity:.72,side:Vt,depthWrite:!1}));return I.rotation.x=Math.PI/2,I.position.set(0,1.5,c),I.scale.set(1,v,1),M.add(I),I};it(-82,1,17,2.1,7505277),it(-72,1,11,6.7,8491914);const q=(c,v,d,S,P)=>{const R=new Ge,O=new B(new Qe(S*.1,S*.14,d*.42,5),new Uf({color:5917241}));O.position.y=d*.21,R.add(O);for(let j=0;j<4;j++){const K=S*(1-j*.17),I=new B(new hn(K,d*(.48-j*.035),7,1),new Uf({color:P}));I.position.y=d*(.38+j*.15),I.rotation.y=(j*1.7+c*.03)%Math.PI,R.add(I)}R.position.set(c,Ob(c,v)-.2,v),R.scale.setScalar(.82+k(c,v)*.34),M.add(ay(R))};for(let c=0;c<26;c++){const v=-86+c*6.8;q(v,-67-c%3*3,9+c%5*1.5,2.7+c%4*.45,5401432)}for(let c=0;c<20;c++){const v=-82+c*8.7;q(v,68+c%4*2.5,7.5+c%4*1.2,2.4,6387557)}const me=(c,v,d)=>(v&&(c.userData={id:v,label:d||v}),c.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)}),M.add(c),v&&A.push(c),c),Q=(c,v=.9,d=0)=>new be({color:c,roughness:v,metalness:d,roughnessMap:we.rough,bumpMap:we.height,bumpScale:d>.35?.008:.018}),G=(c,v,d,S,P=.9)=>new B(new Gn(c,v,d),Q(S,P)),Xe=(c,v,d,S=10,P=.9)=>new B(new Qe(c,c,v,S),Q(d,P)),Ke=(c,v,d)=>{const S=Xe(v,c,d,10,.96);return S.rotation.z=Math.PI/2,S},U=(c,v,d)=>{const S=new Ge,P=c*.62,R=.61,O=new be({map:jn,color:d,roughness:.96,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.012,side:Vt}),j=new B(new Gn(P,.18,v),O),K=j.clone();return j.rotation.z=R,K.rotation.z=-R,j.position.x=-c*.205,K.position.x=c*.205,S.add(j,K),S},A=[],re=[],he=[],xe=[],de=[],Ne=.62,Me=(c,v,d,S,P=0,R=.12)=>de.push({kind:"rect",x:c,z:v,w:d+R*2,d:S+R*2,rot:P}),De=(c,v,d,S=.12)=>de.push({kind:"circle",x:c,z:v,r:d+S}),Ze=(c,v,d,S,P,R=.12)=>de.push({kind:"segment",x1:c,z1:v,x2:d,z2:S,r:P+R}),Re=(c,v,d)=>{if(d.kind==="circle")return Math.hypot(c-d.x,v-d.z)<d.r+Ne;if(d.kind==="rect"){const I=Math.cos(d.rot),J=Math.sin(d.rot),ee=c-d.x,Se=v-d.z,ge=I*ee-J*Se,qe=J*ee+I*Se,ct=Math.max(-d.w/2,Math.min(d.w/2,ge)),Ct=Math.max(-d.d/2,Math.min(d.d/2,qe));return Math.hypot(ge-ct,qe-Ct)<Ne}const S=d.x2-d.x1,P=d.z2-d.z1,R=S*S+P*P,O=R>0?Math.max(0,Math.min(1,((c-d.x1)*S+(v-d.z1)*P)/R)):0,j=d.x1+S*O,K=d.z1+P*O;return Math.hypot(c-j,v-K)<d.r+Ne},Ue=(c,v)=>_.current?c<In-2.72||c>In+2.72||v<Mn-2.05||v>Mn+2.3:de.some(d=>Re(c,v,d)),ot=(c,v,d)=>{if(_.current){const R=Math.max(In-2.55,Math.min(In+2.55,v)),O=Math.max(Mn-1.92,Math.min(Mn+2.55,d));c.x=R,c.z=O;return}const S=Math.max(-88,Math.min(88,v)),P=Math.max(-89,Math.min(89,d));if(!Ue(S,P)){c.x=S,c.z=P;return}Ue(S,c.z)||(c.x=S),Ue(c.x,P)||(c.z=P)},Je=Q(3425343,1);for(let c=0;c<22;c++){const v=new Ge,d=-105+c*10,S=8+k(c,7)*9,P=new B(new hn(S,18+k(c,8)*16,7),Je);P.position.y=8,v.add(P),v.position.set(d,-1,-94+k(c,9)*11),me(v)}const ye=[];for(let c=0;c<=32;c++)ye.push({z:-94+c*6,x:-57+Math.sin(c*.42)*4.2});const dt=[],Z=[],Ae=5.4;for(let c=0;c<ye.length;c++){const v=ye[c],d=ye[Math.max(0,c-1)],S=ye[Math.min(ye.length-1,c+1)],P=S.x-d.x,R=S.z-d.z,O=Math.max(.001,Math.hypot(P,R)),j=-R/O,K=P/O,I=X(v.x,v.z)+.055;for(const J of[-1,1]){const ee=Ae*J;dt.push(v.x+j*ee,I+Math.sin(c*1.7+J)*.035,v.z+K*ee)}if(c<ye.length-1){const J=c*2;Z.push(J,J+1,J+2,J+1,J+3,J+2)}}const Le=new cn;Le.setAttribute("position",new Rt(dt,3)),Le.setIndex(Z),Le.computeVertexNormals();const je=new be({color:3235689,roughness:.52,metalness:0,transparent:!0,opacity:.9}),Ee=new B(Le,je);Ee.receiveShadow=!0,M.add(Ee);const ve=new be({color:5208192,roughness:.68,metalness:0,transparent:!0,opacity:.58,side:Vt});for(const c of[-1,1]){const v=[],d=[];for(let O=0;O<ye.length;O++){const j=ye[O],K=ye[Math.max(0,O-1)],I=ye[Math.min(ye.length-1,O+1)],J=I.x-K.x,ee=I.z-K.z,Se=Math.max(.001,Math.hypot(J,ee)),ge=-ee/Se,qe=J/Se,ct=Ae*c,Ct=(Ae-1.18)*c;if(v.push(j.x+ge*ct,X(j.x,j.z)+.072,j.z+qe*ct),v.push(j.x+ge*Ct,X(j.x,j.z)+.078,j.z+qe*Ct),O<ye.length-1){const Nt=O*2;d.push(Nt,Nt+1,Nt+2,Nt+1,Nt+3,Nt+2)}}const P=new cn;P.setAttribute("position",new Rt(v,3)),P.setIndex(d),P.computeVertexNormals();const R=new B(P,ve);R.receiveShadow=!0,M.add(R)}const Ye=[],lt=new wt({color:12638680,transparent:!0,opacity:.085,depthWrite:!1,side:Vt});for(let c=0;c<22;c++){const v=Math.min(ye.length-1,2+Math.floor(k(c,1510)*(ye.length-4))),d=ye[v],S=ye[Math.max(0,v-1)],P=ye[Math.min(ye.length-1,v+1)],R=Math.atan2(P.x-S.x,P.z-S.z),O=new B(new Sn(1.5+k(c,1511)*2.8,.08+k(c,1512)*.07),lt.clone());O.rotation.x=-Math.PI/2,O.rotation.z=R,O.position.set(d.x+(k(c,1513)-.5)*6.4,X(d.x,d.z)+.095,d.z+(k(c,1514)-.5)*5.4),M.add(O),Ye.push({mesh:O,phase:k(c,1515)*Math.PI*2,speed:.55+k(c,1516)*.7})}const Bt=[];for(let c=0;c<52;c++){const v=Math.min(ye.length-1,Math.floor(c*.62)),d=ye[v],S=ye[Math.max(0,v-1)],P=ye[Math.min(ye.length-1,v+1)],R=P.x-S.x,O=P.z-S.z,j=Math.max(.001,Math.hypot(R,O)),K=c%2===0?-1:1,I=.34+k(c,15)*.72,J=Ae+K*(.25+k(c,16)*1.4),ee=new B(new Zt(I,1),Q(6185562,1));ee.position.set(d.x+-O/j*J,X(d.x,d.z)+.18,d.z+R/j*J),ee.scale.y=.5+k(c,17)*.35,me(ee),De(ee.position.x,ee.position.z,I*.75,.03)}for(let c=0;c<18;c++){const v=Math.min(ye.length-1,1+Math.floor(k(c,1520)*(ye.length-2))),d=ye[v],S=ye[Math.max(0,v-1)],P=ye[Math.min(ye.length-1,v+1)],R=P.x-S.x,O=P.z-S.z,j=Math.max(.001,Math.hypot(R,O)),K=(k(c,1521)-.5)*6.4,I=new B(new Zt(.16+k(c,1522)*.3,1),Q(6845293,1));I.position.set(d.x+-O/j*K,X(d.x,d.z)+.045,d.z+R/j*K),I.scale.y=.35+k(c,1523)*.45,I.rotation.set(k(c,1524)*2,k(c,1525)*2,k(c,1526)*2),M.add(I)}const pt=(c,v)=>{const d=c.map(([j,K])=>new W(j,X(j,K)+.035,K)),S=[],P=[];for(let j=0;j<d.length;j++){const K=d[Math.max(0,j-1)],I=d[Math.min(d.length-1,j+1)],J=I.x-K.x,ee=I.z-K.z,Se=Math.max(.001,Math.hypot(J,ee)),ge=-ee/Se,qe=J/Se;if(S.push(d[j].x+ge*v/2,d[j].y,d[j].z+qe*v/2,d[j].x-ge*v/2,d[j].y+.01,d[j].z-qe*v/2),j<d.length-1){const ct=j*2;P.push(ct,ct+1,ct+2,ct+1,ct+3,ct+2)}}const R=new cn;R.setAttribute("position",new Rt(S,3)),R.setIndex(P),R.computeVertexNormals();const O=new B(R,new be({map:pe("road"),roughness:1}));O.receiveShadow=!0,M.add(O),[-v*.22,v*.22].forEach(j=>{const K=d.map((ee,Se)=>{const ge=d[Math.max(0,Se-1)],qe=d[Math.min(d.length-1,Se+1)],ct=qe.x-ge.x,Ct=qe.z-ge.z,Nt=Math.max(.001,Math.hypot(ct,Ct));return new W(ee.x+-Ct/Nt*j,ee.y+.045,ee.z+ct/Nt*j)}),I=new Ja(new Rp(K),Math.max(12,d.length*4),.055,5,!1),J=new B(I,Q(3352863,1));J.scale.y=.12,M.add(J)})};pt([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),pt([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),pt([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),pt([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),pt([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),pt([[4,14],[-3,22],[-7,31],[-8,42]],3.8),pt([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),pt([[4,14],[10,28],[18,41],[27,57]],3.8),pt([[5,31],[15,45],[27,57],[39,70]],3.7),pt([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),pt([[-39,-8],[-47,-12],[-53,-15]],3.4);const oi=pe("wood");oi.repeat.set(2,1);const jn=pe("roof");jn.repeat.set(2,2);const ai=(c,v,d,S,P,R,O,j,K)=>{const I=new Ge;I.rotation.y=P,I.position.set(c,X(c,v),v),I.userData={id:O,label:R};const J=new be({map:oi,color:j,roughness:.94,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.014}),ee=G(d+.7,.55,S+.7,5724755,1);ee.position.y=.28,I.add(ee);for(let Ut=0;Ut<7;Ut++){const Ft=.62+Ut*.47,fn=Ke(d-Ut%2*.2,.29,j);fn.material=J,fn.position.set(0,Ft,S*.5-.03),I.add(fn);const Bn=fn.clone();Bn.position.z=-S*.5+.03,I.add(Bn);const li=Ke(S+.06,.29,j);li.material=J,li.rotation.y=Math.PI/2,li.position.set(-d*.5+.03,Ft,0),I.add(li);const Ve=li.clone();Ve.position.x=d*.5-.03,I.add(Ve)}for(const Ut of[-d*.5,d*.5])for(const Ft of[-S*.5,S*.5]){const fn=Xe(.34,3.75,3482649,8,1);fn.position.set(Ut,2.05,Ft),I.add(fn)}const Se=G(1.18,2.05,.18,2365458,1);Se.position.set(0,1.37,S*.5+.31),I.add(Se);for(const Ut of[-.67,.67]){const Ft=G(.15,2.28,.24,3811613,1);Ft.position.set(Ut,1.42,S*.5+.34),I.add(Ft)}const ge=Ke(1.65,.11,3679770);ge.position.set(0,2.53,S*.5+.34),I.add(ge);const qe=Xe(.055,.12,13015634,8,.55);qe.rotation.z=Math.PI/2,qe.position.set(.33,1.38,S*.5+.43),I.add(qe);const ct=new be({color:14986840,emissive:10116382,emissiveIntensity:1.5,roughness:.45});for(const Ut of[-d*.27,d*.27]){const Ft=G(1.28,1.02,.13,3154457,1);Ft.position.set(Ut,2.02,S*.5+.29),I.add(Ft);const fn=G(.94,.7,.055,15251295,.45);fn.material=ct,fn.position.set(Ut,2.02,S*.5+.36),I.add(fn);const Bn=G(.07,.78,.09,3154457,1);Bn.position.set(Ut,2.02,S*.5+.4),I.add(Bn);const li=G(1.05,.07,.09,3154457,1);li.position.set(Ut,2.02,S*.5+.4),I.add(li)}const Ct=U(d+1.55,S+1.35,K);Ct.position.y=4.18,I.add(Ct);for(const Ut of[-1,1]){const Ft=Ke(S+1.48,.12,3154715);Ft.position.set(Ut*(d*.46),3.78,0),Ft.rotation.y=Math.PI/2,I.add(Ft)}const Nt=Ke(S+1.45,.18,2760730);Nt.rotation.y=Math.PI/2,Nt.position.y=5.28,I.add(Nt);const Ot=G(d*.34,.16,1.05,6439467,1);Ot.position.set(0,.64,S*.5+.66),I.add(Ot);for(const Ut of[-d*.16,d*.16]){const Ft=Ke(.85,.08,4796447);Ft.rotation.y=Math.PI/2,Ft.position.set(Ut,.83,S*.5+.95),I.add(Ft)}const Kt=Xe(.34,2,5722958,8,1);Kt.position.set(d*.25,5.05,-S*.1),I.add(Kt);const $t=G(.72,.14,.72,3157289,1);$t.position.set(d*.25,6.08,-S*.1),I.add($t),me(I,O,R),A.push(I),Me(c,v,d+.85,S+.85,P,.05)};ai(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),ai(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),ai(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),ai(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),ai(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),ai(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const qt=new Ge;qt.position.set(-10,X(-10,-5),-5),qt.userData={id:"forge",label:"Кузница"};for(let c=0;c<7;c++){const v=.62+c*.47,d=Ke(9,.27,4401693);d.position.set(0,v,-2.85),qt.add(d);const S=Ke(6,.27,4401693);S.rotation.y=Math.PI/2,S.position.set(-4.35,v,0),qt.add(S)}for(const c of[-4.35,4.35]){const v=Xe(.34,4,2825493,9,1);v.position.set(c,2,-2.85),qt.add(v)}const Qs=U(9.8,7,2433825);Qs.position.y=4.45,qt.add(Qs);const eo=Ke(7.2,.18,2169366);eo.rotation.y=Math.PI/2,eo.position.y=5.42,qt.add(eo);for(const c of[-3.7,3.7]){const v=Ke(4.7,.13,2825494);v.rotation.z=c<0?-.6:.6,v.position.set(c*.48,3.15,.1),qt.add(v)}const ca=Xe(1.15,1.65,3420462,10,1);ca.position.set(-2,.83,1.15),qt.add(ca);const ms=Xe(.88,.35,2565925,10,1);ms.position.set(-2,1.83,1.15),qt.add(ms);const to=new B(new Hn(.52,16),new be({color:16740390,emissive:16726536,emissiveIntensity:5,roughness:.4}));to.rotation.y=Math.PI,to.position.set(-2,1.02,2.23),qt.add(to);const gs=Xe(.27,.85,2697770,8,.45);gs.position.set(1.15,.43,1.05),qt.add(gs);const ua=G(1.45,.34,.58,2435114,.38);ua.position.set(1.15,1,1.05),qt.add(ua);const no=new B(new hn(.18,.72,8),Q(2435114,.38,.05));no.rotation.z=-Math.PI/2,no.position.set(1.98,1,1.05),qt.add(no);for(let c=0;c<4;c++){const v=Ke(1.25,.045,11184548);v.rotation.z=-.35+c*.18,v.position.set(2.05+c*.18,1.12,1.34),qt.add(v)}const da=G(1.15,.42,.62,3876893,1);da.position.set(2.15,.72,-.8),da.rotation.z=-.18,qt.add(da);const fa=Xe(.07,.55,5980979,8,1);fa.rotation.z=Math.PI/2,fa.position.set(1.55,.84,-.8),qt.add(fa),me(qt,"forge","Кузница"),A.push(qt),Me(-10,-5,9.6,6.6,0,.05);const Il=new Wi(16742962,3.4,14,2);Il.position.set(-12,X(-12,-5)+2.2,-4),M.add(Il);const io=new B(new Hn(8.5,32),new be({color:7035463,roughness:1}));io.rotation.x=-Math.PI/2,io.position.set(1,X(1,0)+.05,0),io.receiveShadow=!0,M.add(io);for(let c=0;c<18;c++){const v=c/18*Math.PI*2,d=new B(new Zt(.38,1),Q(7039843,1));d.position.set(1+Math.cos(v)*8.8,X(1+Math.cos(v)*8.8,Math.sin(v)*8.8)+.22,Math.sin(v)*8.8),M.add(d)}const Ll=(c,v)=>{const d=new Ge,S=G(2.8,.22,1,6832937,1);S.position.y=1.05,d.add(S);for(const P of[-1.05,1.05]){const R=G(.16,1,.16,3877149,1);R.position.set(P,.5,-.32),d.add(R);const O=R.clone();O.position.z=.32,d.add(O)}d.position.set(c,X(c,v),v),M.add(d)};Ll(-4,2),Ll(7,3);const vs=(c,v,d)=>{const S=new Ge;S.position.set(c,X(c,v),v);for(let I=0;I<7;I++){const J=I/7*Math.PI*2,ee=new B(new Zt(.32*d,1),Q(6117970,1));ee.position.set(Math.cos(J)*.7*d,.25*d,Math.sin(J)*.7*d),S.add(ee)}const P=G(.2*d,.2*d,1.5*d,4861211,1),R=P.clone();P.rotation.y=.55,R.rotation.y=-.55,P.position.y=R.position.y=.38*d,S.add(P,R);const O=new be({color:16744744,emissive:16731402,emissiveIntensity:4}),j=new B(new hn(.5*d,1.35*d,8),O);j.position.y=1.02*d,S.add(j),M.add(S);const K=new Wi(16747068,2.4*d,12*d,2);return K.position.set(c,X(c,v)+2*d,v),M.add(K),re.push({light:K,flame:j,phase:k(c,v)*8}),S},C=new Ge;C.userData={id:"mimir",label:"Колодец Мимира"},C.position.set(1,X(1,0),0);const te=new B(new Hn(1.18,32),new be({color:1526616,emissive:802120,emissiveIntensity:1.9,roughness:.16,metalness:.04}));te.rotation.x=-Math.PI/2,te.position.y=.5,C.add(te);for(let c=0;c<3;c++){const v=new B(new kt(.38+c*.28,.025,6,40),new wt({color:c===0?9367295:7067615,transparent:!0,opacity:.42,depthWrite:!1}));v.rotation.x=Math.PI/2,v.position.y=.525,C.add(v)}for(const c of[-1.35,1.35]){const v=G(.24,3,.24,4861984,1);v.position.set(c,1.55,0),C.add(v)}const ae=G(3.15,.26,.26,3679513,1);ae.position.y=2.96,C.add(ae);const le=new B(new Qe(.035,.035,1.2,6),Q(8086088,1));le.position.y=2.25,C.add(le);const ie=G(.58,.5,.58,5913383,1);ie.position.set(0,1.65,0),C.add(ie);const Te=new B(new kt(1.55,.055,8,48),new be({color:7792028,emissive:2653256,emissiveIntensity:3,roughness:.5}));Te.rotation.x=Math.PI/2,Te.position.y=.54,C.add(Te),me(C,"mimir","Колодец Мимира"),A.push(C),De(1,0,2,.08);const Fe=new Wi(7530656,2,10,2);Fe.position.set(1,X(1,0)+1.5,0),M.add(Fe),vs(18,-15,.72);const Oe=(c,v,d,S,P=1.25)=>{const R=new Ge,O=d-c,j=S-v,K=Math.hypot(O,j),I=Math.max(1,Math.floor(K/1.55));for(let J=0;J<=I;J++){const ee=J/I,Se=c+O*ee,ge=v+j*ee,qe=G(.18,P,.18,4796447,1);qe.position.set(Se,X(Se,ge)+P/2,ge),R.add(qe)}for(const J of[-.28,.38]){const ee=G(.14,.14,K,5978917,1);ee.rotation.y=Math.atan2(O,j),ee.position.set((c+d)/2,X((c+d)/2,(v+S)/2)+P*J,(v+S)/2),R.add(ee)}M.add(R),Ze(c,v,d,S,.12,.02)},Be=(c,v,d,S,P,R,O)=>{const j=new Ge;j.position.set(c,X(c,v),v),j.rotation.y=P,j.userData={id:O,label:R};const K=G(d+.25,.35,S+.25,5591368,1);K.position.y=.18,j.add(K);const I=new B(new Gn(d,2.5,S),new be({map:oi,color:6439983,roughness:1}));I.position.y=1.45,j.add(I);const J=new B(new Gn(d+.6,.18,S+.65),new be({map:jn,color:2696996,roughness:1}));J.rotation.z=.55,J.position.set(-.16,3,0),j.add(J);const ee=J.clone();ee.rotation.z=-.55,ee.position.x=.16,j.add(ee);const Se=G(1.05,1.75,.12,2759700,1);Se.position.set(0,1.05,S/2+.07),j.add(Se),me(j,O,R),A.push(j),Me(c,v,d+.55,S+.55,P,.04)},rt=(c,v,d=1)=>{const S=new Ge;S.position.set(c,X(c,v),v);const P=new B(new Qe(.65*d,.65*d,1.2*d,10),Q(9073729,1));P.rotation.z=Math.PI/2,P.position.y=.62*d,S.add(P);for(let R=0;R<3;R++){const O=new B(new kt(.66*d,.025*d,5,18),Q(5851693,1));O.rotation.y=Math.PI/2,O.position.y=(.28+R*.34)*d,S.add(O)}me(S)},st=(c,v,d)=>{const S=new Ge;S.position.set(c,X(c,v),v),S.rotation.y=d;const P=G(2.8,.28,1.45,6636331,1);P.position.y=1,S.add(P);for(const O of[-1.15,1.15])for(const j of[-.55,.55]){const K=G(.16,1.15,.16,4401950,1);K.position.set(O,.55,j),S.add(K)}for(const O of[-1.15,1.15]){const j=new B(new Qe(.5,.5,.18,14),Q(2696738,1));j.rotation.z=Math.PI/2,j.position.set(O,.52,-.92),S.add(j)}const R=G(.16,.16,2.4,4796447,1);R.rotation.x=Math.PI/2,R.position.set(0,.72,-2),S.add(R),me(S)},tt=(c,v,d=0)=>{const S=new Ge;S.position.set(c,X(c,v),v),S.rotation.y=d;const P=G(2.2,.16,.5,7359021,1);P.position.y=.85,S.add(P);for(const R of[-.78,.78]){const O=G(.12,.8,.12,4139549,1);O.position.set(R,.4,0),S.add(O)}me(S)},yt=(c,v)=>{const d=new Ge;d.position.set(c,X(c,v),v);for(let O=0;O<10;O++){const j=O/10*Math.PI*2,K=G(.45,.38,.38,6710621,1);K.position.set(Math.cos(j)*.95,.19,Math.sin(j)*.95),K.rotation.y=j,d.add(K)}const S=G(.16,2.2,.16,4861984,1),P=S.clone();S.position.set(-.9,1.2,0),P.position.set(.9,1.2,0),d.add(S,P);const R=G(2,.16,.16,3876891,1);R.position.y=2.25,d.add(R),me(d)};Be(-19,31,8,5,.08,"Амбар","barn"),Be(17,34,7,5,-.2,"Сарай","shed"),Be(27,13,6,4,.45,"Склад рыбака","fishshed"),Oe(-25,27,-13,27),Oe(-25,27,-25,38),Oe(-25,38,-14,38),Oe(12,29,25,29),Oe(25,29,25,40),Oe(25,40,12,40),Oe(29,-1,39,-1),Oe(39,-1,39,10),Oe(39,10,30,10);for(const c of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])rt(c[0],c[1],c[2]);st(-17,24,.18),st(29,-5,-.55),tt(-20,23,.18),tt(25,31,-.2),ai(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),ai(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),ai(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),ai(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),Me(-31,8,7.8,5.8,.1,.04),Me(-27,20,7.8,5.8,-.25,.04),Me(31,18,7.8,5.8,.32,.04),Me(20,24,7.8,5.8,-.12,.04);const Lt=(c,v,d)=>{const S=new Ge;S.position.set(c,X(c,v),v),S.rotation.y=d;const P=G(3,.18,1.25,7357994,1);P.position.y=1.45,S.add(P);for(const O of[-1.25,1.25])for(const j of[-.48,.48]){const K=G(.13,1.45,.13,4270877,1);K.position.set(O,.72,j),S.add(K)}const R=new B(new hn(1.65,2.5,4,1,!1,Math.PI/4),Q(4798510,1));R.scale.z=.55,R.position.y=2.15,S.add(R),me(S)};Lt(-5,-7,.12),Lt(8,-5,-.18),Lt(6,7,.5);for(const c of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])yt(c[0],c[1]);const nn=(c,v,d=1)=>{const S=new Ge,P=X(c,v);for(let R=0;R<5;R++){const O=new B(new ut((.28+k(R,c)*.18)*d,8,6),Q(R%2?3494457:4284223,1));O.position.set((k(R,2)-.5)*.7*d,.28*d,(k(R,3)-.5)*.7*d),S.add(O)}S.position.set(c,P,v),me(S)};for(let c=0;c<48;c++){const v=k(c,501)*Math.PI*2,d=18+k(c,502)*39,S=Math.cos(v)*d,P=Math.sin(v)*d+4;Math.abs(S)<9&&Math.abs(P)<14||nn(S,P,.65+k(c,503)*.75)}for(let c=0;c<34;c++){const v=-84+k(c,610)*168,d=-82+k(c,611)*164;if(Math.hypot(v,d-2)<24)continue;const S=.25+k(c,612)*.55,P=new B(new Zt(S,1),Q(5725013,1));P.scale.y=.55,P.position.set(v,X(v,d)+S*.28,d),P.rotation.set(k(c,613),k(c,614),k(c,615)),me(P),De(v,d,S*.8,.03)}ai(-65,5,8,5,.12,"Старый дом","oldfarm",6505263,2828582),Be(-58,42,6,4,-.12,"Старый амбар","oldbarn"),Oe(-70,32,-60,32),Oe(-70,32,-70,43),Oe(-70,43,-61,43),rt(-68,8,.9),st(-62,2,-.25),yt(-58,4);const Ht=new Ge;Ht.position.set(-63,X(-63,47),47);for(let c=0;c<6;c++){const v=G(10,.035,.12,4208682,1);v.position.set(0,.02,(c-2.5)*1.05),v.rotation.y=.06,Ht.add(v)}me(Ht);const At=(c,v)=>{const d=document.createElement("canvas");d.width=d.height=256;const S=d.getContext("2d");S.clearRect(0,0,256,256),S.textAlign="center",S.textBaseline="middle",S.shadowColor=v,S.shadowBlur=18,S.fillStyle=v,S.font="bold 150px serif",S.fillText(c,128,132),S.shadowBlur=4,S.globalAlpha=.55,S.font="bold 118px serif",S.fillText(c,128,132);const P=new As(d);return P.colorSpace=Nn,P.anisotropy=4,P},$e=(c,v,d,S,P,R=.72,O=0)=>{const j="#"+P.toString(16).padStart(6,"0"),K=new wt({map:At(S,j),transparent:!0,depthWrite:!1,side:Vt}),I=new B(new Sn(R,R),K);return I.rotation.x=-Math.PI/2,I.rotation.z=O,I.position.set(v,.065,d),c.add(I),I},mt=new Ge,Tt=18,Fn=55;mt.position.set(Tt,X(Tt,Fn),Fn),mt.userData={id:"runefield",label:"Поле Рун"};const tr=new be({color:5857629,roughness:.94,metalness:.04}),Qn=new be({color:3884096,roughness:1});new wt({color:8251647,transparent:!0,opacity:.92,depthWrite:!1,side:Vt}),new wt({color:12946687,transparent:!0,opacity:.86,depthWrite:!1,side:Vt}),new wt({color:16766826,transparent:!0,opacity:.9,depthWrite:!1,side:Vt});const fr=new B(new Hn(12.2,48),new be({color:2636332,roughness:1,transparent:!0,opacity:.92}));fr.rotation.x=-Math.PI/2,fr.position.y=.018,mt.add(fr);const Yt=new B(new Qe(2.15,2.55,.48,10),Qn);Yt.position.y=.24,Yt.scale.z=.82,mt.add(Yt);const kn=new B(new Zt(1.48,1),tr);kn.scale.set(1,1.65,.72),kn.position.y=1.38,kn.rotation.y=.18,mt.add(kn);const On=new B(new Zt(.78,1),tr);On.scale.set(.72,1.15,.55),On.position.set(0,2.72,.02),On.rotation.z=.06,mt.add(On);const Rn=$e(mt,0,0,"ᚠ",10481407,1.15,0);Rn.position.y=2.55,Rn.rotation.x=0;const zn=new Wi(7793407,1.7,9,2);zn.position.set(0,2,.8),mt.add(zn);for(const[c,v]of[[3,.075],[7.1,.065],[10.1,.045]]){const d=new B(new kt(c,v,8,96),new wt({color:15320941,transparent:!0,opacity:c<8?.82:.58,depthWrite:!1}));d.rotation.x=Math.PI/2,d.position.y=.055,mt.add(d)}const zi=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ"];for(let c=0;c<16;c++){const v=c/16*Math.PI*2;$e(mt,Math.cos(v)*8.55,Math.sin(v)*8.55,zi[c],c%3===0?15055195:c%3===1?7857653:12093423,.62,v+.18)}for(let c=0;c<12;c++){const v=c/12*Math.PI*2+.13;$e(mt,Math.cos(v)*5.45,Math.sin(v)*5.45,zi[(c+5)%zi.length],c%2?7659506:12684269,.38,v)}for(let c=0;c<10;c++){const v=c/10*Math.PI*2+.16,d=9.15+(.5-k(c,1202))*1,S=2.4+k(c,1203)*2,P=.72+k(c,1204)*.48,R=new B(new Zt(.82+k(c,1205)*.22,1),tr);R.scale.set(P,S,.72+k(c,1206)*.28),R.position.set(Math.cos(v)*d,R.scale.y*.58,Math.sin(v)*d),R.rotation.set((k(c,1207)-.5)*.22,v+(k(c,1208)-.5)*.3,(k(c,1209)-.5)*.18),mt.add(R);const O=zi[c%zi.length],j=At(O,c%3===0?"#8eeeff":c%3===1?"#c08cff":"#ffd86b"),K=new B(new Sn(.62,.92),new wt({map:j,transparent:!0,depthWrite:!1,side:Vt}));K.position.set(R.position.x+Math.cos(v)*.68,R.position.y*.76,R.position.z+Math.sin(v)*.68),K.rotation.y=-v+Math.PI*.5,mt.add(K);const I=new Wi(c%3===1?11628031:c%3===0?6479359:15055195,.35,3.6,2);I.position.set(R.position.x,R.position.y*.72,R.position.z),mt.add(I)}for(let c=0;c<18;c++){const v=k(c,1220)*Math.PI*2,d=6.8+k(c,1221)*4.3;ao(mt,Math.cos(v)*d,.22,Math.sin(v)*d,.28+k(c,1222)*.35,c%2?5003088:5857882,1223+c)}for(let c=0;c<10;c++){const v=k(c,1230)*Math.PI*2,d=2.6+k(c,1231)*6.6,S=new B(new Qe(.06,.09,.035,7),new be({color:10191179,metalness:.6,roughness:.45}));S.rotation.x=Math.PI/2,S.position.set(Math.cos(v)*d,.09,Math.sin(v)*d),mt.add(S)}me(mt,"runefield","Поле Рун"),A.push(mt),De(Tt,Fn,1.8,.08);const Pi=(c,v,d,S)=>{const P=new Ge,R=d-c,O=S-v,j=Math.hypot(R,O),K=Math.floor(j/1.7);for(let J=0;J<=K;J++){const ee=J/K,Se=c+R*ee,ge=v+O*ee,qe=new B(new hn(.24,.24+2.8+k(J,c)*.5,6),Q(3942940,1));qe.position.set(Se,X(Se,ge)+1.45,ge),P.add(qe)}const I=G(.3,.35,j,2957593,1);I.rotation.y=Math.atan2(R,O),I.position.set((c+d)/2,X((c+d)/2,(v+S)/2)+1.25,(v+S)/2),P.add(I),M.add(P),Ze(c,v,d,S,.34,.08)};Pi(-30,-31,-8,-31),Pi(8,-31,30,-31),Pi(-30,-31,-30,-13),Pi(30,-31,30,16);const ro=new Ge;ro.userData={id:"gate",label:"Ворота Мидгарда"};for(const c of[-4.2,4.2]){const v=G(.8,6,.8,3482906,1);v.position.set(c,3,-31),ro.add(v)}const Gm=G(10,.8,1,2957336,1);Gm.position.set(0,6,-31),ro.add(Gm);for(let c=-3;c<=3;c++){const v=G(1,4.2,.22,5978660,1);v.position.set(c*1.15,2,-30.7),ro.add(v)}me(ro,"gate","Ворота Мидгарда"),A.push(ro),De(-4.2,-31,.55,.05),De(4.2,-31,.55,.05);const yn=new Ge;yn.userData={id:"norns",label:"Прядильня норн"},yn.position.set(-52,X(-52,38),38);const ly=Q(4927522,1),cy=Q(2826523,1),Wm=G(5.7,.28,.28,5847592,1);Wm.position.set(0,3.8,0),yn.add(Wm);const Xm=G(5,.25,.32,3877151,1);Xm.position.set(0,.65,.15),yn.add(Xm);for(const c of[-2.45,2.45]){const v=G(.28,3.55,.3,5321763,1);v.position.set(c,2.15,0),v.rotation.z=c>0?.08:-.08,yn.add(v)}const Xu=new B(new kt(2.05,.18,8,32),ly);Xu.rotation.y=Math.PI/2,Xu.position.set(0,2.25,-.8),yn.add(Xu);const ju=new B(new Qe(.28,.32,.38,10),cy);ju.rotation.z=Math.PI/2,ju.position.set(0,2.25,-.8),yn.add(ju);for(let c=0;c<10;c++){const v=c/10*Math.PI*2,d=G(.08,.08,1.85,5913384,1);d.position.set(Math.cos(v)*.92,2.25+Math.sin(v)*.92,-.8),d.rotation.z=-v,yn.add(d)}const uy=["URD","VERDANDI","SKULD"],dy=[8640767,15198177,14908296];for(let c=0;c<3;c++){const v=(c-1)*2,d=new B(new Zt(.78,1),new be({color:4541257,roughness:.92,metalness:.05}));d.scale.set(.9,1.18+k(c,1290)*.2,.72),d.position.set(v,1.35,.18),d.rotation.set(0,(c-1)*.16,0),yn.add(d);const S=At(c===0?"ᚢ":c===1?"ᚹ":"ᛋ",c===0?"#8fe6ff":c===1?"#f1f1ec":"#ef8d9a"),P=new B(new Sn(.48,.62),new wt({map:S,transparent:!0,depthWrite:!1,side:Vt}));P.position.set(v,1.42,.86),P.rotation.y=Math.PI,yn.add(P);const R=document.createElement("canvas");R.width=320,R.height=96;const O=R.getContext("2d");O.clearRect(0,0,320,96),O.textAlign="center",O.textBaseline="middle",O.font="bold 34px serif",O.fillStyle=c===0?"#9fe9ff":c===1?"#f4f4ef":"#ef91a0",O.shadowColor=O.fillStyle,O.shadowBlur=12,O.fillText(uy[c],160,48);const j=new As(R);j.colorSpace=Nn;const K=new B(new Sn(1.55,.46),new wt({map:j,transparent:!0,depthWrite:!1,side:Vt}));K.position.set(v,.55,.86),K.rotation.y=Math.PI,yn.add(K);const I=new Wi(dy[c],.45,4.5,2);I.position.set(v,1.55,1),yn.add(I)}const jm=[15123551,15263973,14245748];for(let c=0;c<3;c++){const v=[];for(let d=0;d<=18;d++){const S=d/18,P=1.9+S*4.6,R=(c-1)*2+Math.sin(S*Math.PI*2+c*1.7)*(.45+.5*S),O=.35+Math.cos(S*Math.PI*2+c)*.45;v.push(new W(R,P,O))}yn.add(new C1(new cn().setFromPoints(v),new Ap({color:jm[c],transparent:!0,opacity:.9})))}for(let c=0;c<3;c++){const v=new B(new kt(1.15+c*.18,.045,6,32),new wt({color:jm[c],transparent:!0,opacity:.75,depthWrite:!1}));v.position.set((c-1)*.38,6.15,.15),v.rotation.set(.4,c*.65,.2),yn.add(v)}const qu=new B(new kt(4.6,.065,8,72),new wt({color:10345712,transparent:!0,opacity:.72,depthWrite:!1}));qu.rotation.x=Math.PI/2,qu.position.y=.05,yn.add(qu);for(let c=0;c<18;c++){const v=k(c,1300)*Math.PI*2,d=2.5+k(c,1301)*3.1,S=new B(new Qe(.12,.12,.16,9),new be({color:[10184008,7174032,9261927,7828045][c%4],roughness:.8}));S.rotation.x=Math.PI/2,S.position.set(Math.cos(v)*d,.12,Math.sin(v)*d),yn.add(S)}for(let c=0;c<9;c++)$e(yn,(k(c,1315)-.5)*7.5,(k(c,1316)-.5)*6.2,["ᚠ","ᚱ","ᛟ","ᛉ","ᚦ"][c%5],c%2?9428976:14134881,.34,k(c,1317)*Math.PI);me(yn,"norns","Прядильня норн"),A.push(yn),De(-52,38,3,.1);const so=new Ge;so.userData={id:"rune",label:"Древний камень Феху"},so.position.set(50,X(50,60),60);const qm=new B(new Zt(1.45,1),Q(5002063,1));qm.position.y=1.2,so.add(qm);const Yu=new B(new kt(1.05,.07,8,30),new be({color:16766826,emissive:10052371,emissiveIntensity:3}));Yu.rotation.x=Math.PI/2,Yu.position.y=1.2,so.add(Yu),me(so,"rune","Древний камень Феху"),A.push(so),De(50,60,1.7,.1);const Dl=new Ge;Dl.userData={id:"port",label:"Мост к причалу"};for(let c=-5;c<=5;c++){const v=G(3.6,.28,.82,6307882,1);v.position.set(-53,X(-53,c*1)+.5,c),Dl.add(v)}me(Dl,"port","Мост к причалу"),A.push(Dl);const oo=new Ge;oo.position.set(-45,X(-45,-48),-48);for(let c=0;c<7;c++){const v=G(2.8,.24,.72,7030573,1);v.position.set(0,.3,c*.85),oo.add(v)}for(const c of[-1.2,1.2])for(let v=0;v<3;v++){const d=G(.22,1.5,.22,4139292,1);d.position.set(c,-.2,v*2.5),oo.add(d)}const Ym=G(2.2,.55,4.8,4926493,1);Ym.position.set(3,-.15,2.5),oo.add(Ym),me(oo,"port","Речной причал"),A.push(oo);const fy=(c,v)=>{const d=new B(new Qe(.5,.5,1,12),Q(6636332,1));d.position.set(c,X(c,v)+.5,v),M.add(d);for(const S of[.25,.76]){const P=new B(new kt(.51,.045,6,18),Q(3156004,.7,.1));P.rotation.x=Math.PI/2,P.position.set(c,X(c,v)+S,v),M.add(P)}},hy=(c,v)=>{const d=G(1,.75,1,7359022,1);d.position.set(c,X(c,v)+.38,v),M.add(d);const S=G(.08,.82,1.05,3679770,1);S.position.set(c,X(c,v)+.38,v),M.add(S),Me(c,v,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([c,v])=>fy(c,v)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([c,v])=>hy(c,v));const $u=[],Nl=[],py=(c,v,d)=>{const S=new Ge,P=X(c,v),R=new be({map:He,color:16777215,roughness:.98,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.034}),O=new B(new Qe(.18*d,.38*d,5.2*d,9),R);O.position.y=2.6*d,O.rotation.z=(k(c,v)-.5)*.08,O.scale.x=1.08+k(c,v+4)*.22,S.add(O);for(let K=0;K<9;K++){const I=(1.15+K*.47)*d,J=K%2?1:-1,ee=(.9+K*.16)*d,Se=new B(new Qe(.035*d,.095*d,ee,7),R);Se.position.set(J*(.28+K*.035)*d,I,(k(K,v)-.5)*.38*d),Se.rotation.z=J*(.62-k(K,c)*.18),Se.rotation.y=k(K+21,v)*Math.PI*2,S.add(Se)}const j=[2904370,3893312,4946505];for(let K=0;K<12;K++){const I=Math.max(.48,1.42-K*.075)*d,J=new B(hv(new ut(I,10,7),.18*d,K+Math.round(c*3+v*5)),new be({map:ht,color:j[K%3],roughness:.995}));J.scale.set(1+k(K,c)*.25,.55+k(K,v)*.16,.82+k(K*2,c)*.22),J.position.set((k(K*4,c)-.5)*.58*d,(1.55+K*.37)*d,(k(K*5,v)-.5)*.55*d),$u.push({o:J,baseX:J.rotation.x,baseZ:J.rotation.z,phase:k(K+41,c+v)*Math.PI*2,amp:.01+.008*k(K+42,v)}),S.add(J)}for(let K=0;K<3;K++){const I=new B(new ut(.38*d,7,5),new be({color:K%2?3231030:4021565,roughness:1}));I.scale.set(1.5,.28,.85),I.position.set((K-1)*.45*d,.55*d,(k(K,88)-.5)*.5*d),S.add(I)}for(let K=0;K<4;K++){const I=new B(new ut((.11+k(K,77)*.08)*d,7,5),R);I.scale.set(1.35,.72,.82),I.position.set((K%2?1:-1)*.18*d,(1+K*.78)*d,.29*d),I.rotation.y=K%2*Math.PI,S.add(I)}for(let K=0;K<4;K++){const I=K/4*Math.PI*2+.4,J=(.55+k(K,79)*.7)*d,ee=new B(new Qe(.045*d,.12*d,J,6),R);ee.position.set(Math.cos(I)*J*.42,.14*d,Math.sin(I)*J*.42),ee.rotation.z=Math.cos(I)*.85,ee.rotation.x=-Math.sin(I)*.85,ee.rotation.y=-I,S.add(ee)}S.position.set(c,P,v),me(S),d>=1.15&&De(c,v,.46*d,.04)},Ul=(c,v,d,S=!1)=>{const P=new Ge,R=X(c,v),O=new be({map:He,color:16777215,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.034}),j=new B(new Qe(.42*d,.72*d,6.4*d,11),O);j.position.y=3.2*d,j.rotation.z=(k(c,v)-.5)*.06,j.scale.x=1.08,P.add(j);for(let I=0;I<(S?9:7);I++){const J=I/(S?9:7)*Math.PI*2+k(I,c)*.18,ee=(1+k(I,v)*1.6)*d,Se=new B(new Qe(.11*d,.3*d,ee,7),O);Se.position.set(Math.cos(J)*ee*.42,.28*d,Math.sin(J)*ee*.42),Se.rotation.z=Math.cos(J)*.72,Se.rotation.x=-Math.sin(J)*.72,Se.rotation.y=-J,P.add(Se)}const K=S?10:8;for(let I=0;I<K;I++){const J=I/K*Math.PI*2+k(I+11,c)*.22,ee=(2+k(I+22,v)*2.2)*d,Se=new B(new Qe(.07*d,.19*d,ee,8),O);Se.position.set(Math.cos(J)*ee*.34,(3.25+k(I+33,c)*1.9)*d,Math.sin(J)*ee*.34),Se.rotation.z=Math.cos(J)*.76,Se.rotation.x=Math.sin(J)*.76,Se.rotation.y=-J,P.add(Se);for(let ge=0;ge<4;ge++){const qe=new B(hv(new ut((.46+k(ge+I,90)*.25)*d,10,7),.14*d,ge+I+17),new be({map:ht,color:[3235641,4355400,5670483][(I+ge)%3],roughness:1}));qe.scale.y=.62,qe.position.set(Math.cos(J)*ee*(.52+.09*ge)+(k(ge,I)-.5)*.55*d,(3.9+k(I,ge)*1.45+.25*ge)*d,Math.sin(J)*ee*(.52+.09*ge)+(k(ge+4,I)-.5)*.55*d),$u.push({o:qe,baseX:qe.rotation.x,baseZ:qe.rotation.z,phase:k(ge+61,I+v)*Math.PI*2,amp:.012+.012*k(ge+62,c)}),P.add(qe)}}if(S){const I=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let J=0;J<I.length;J++){const ee=-.9+J*.46,Se=new B(new Sn(.48*d,.62*d),new wt({map:At(I[J],J%2?"#6fd4e8":"#e6bd61"),transparent:!0,depthWrite:!1,side:Vt}));Se.position.set(Math.sin(ee)*.56*d,(1.5+J*.68)*d,Math.cos(ee)*.6*d),Se.rotation.y=ee,P.add(Se)}}for(let I=0;I<6;I++){const J=new B(new ut((.16+k(I,121)*.1)*d,7,5),O);J.scale.set(.55,1.55,.42);const ee=k(I,122)*Math.PI*2;J.position.set(Math.cos(ee)*.5*d,(1.05+I*.48)*d,Math.sin(ee)*.5*d),J.rotation.y=-ee,P.add(J)}if(S){const I=new be({map:He,color:16777215,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.048});for(let J=0;J<4;J++){const ee=J/4*Math.PI*2+.35,Se=(1.35+k(J,441)*.85)*d,ge=new B(new Qe(.1*d,.26*d,Se,8),I);ge.position.set(Math.cos(ee)*Se*.34,.48*d,Math.sin(ee)*Se*.34),ge.rotation.z=Math.cos(ee)*.92,ge.rotation.x=-Math.sin(ee)*.92,ge.rotation.y=-ee,P.add(ge)}for(let J=0;J<6;J++){const ee=-1.25+J*.48,Se=(2.1+k(J,452)*1.7)*d,ge=new B(new Qe(.045*d,.12*d,Se,7),I);ge.position.set(Math.sin(ee)*Se*.46,(5+k(J,453)*1.6)*d,Math.cos(ee)*Se*.46),ge.rotation.z=.72*Math.cos(ee),ge.rotation.x=.55*Math.sin(ee),ge.rotation.y=-ee,P.add(ge)}for(let J=0;J<3;J++){const ee=new B(new ut((.13+k(J,461)*.07)*d,8,6),new be({color:1513748,roughness:1})),Se=-.8+J*.72;ee.scale.set(.55,1.15,.32),ee.position.set(Math.sin(Se)*.61*d,(2.05+J*.65)*d,Math.cos(Se)*.61*d),ee.rotation.y=Se,P.add(ee)}}P.position.set(c,R,v),me(P),d>=1.2&&De(c,v,.78*d,.05)},my=(c,v,d,S)=>{const P=new Ge,R=new be({color:7031345,roughness:.96}),O=new be({color:8871999,roughness:.96}),j=new be({color:3155230,roughness:1}),K=new be({color:12168600,roughness:.9}),I=new be({color:1512207,roughness:.25}),J=new B(new ut(.68,14,10),R);J.scale.set(1.35,.78,.72),J.position.set(0,.98*d,0),J.scale.multiplyScalar(d),P.add(J);const ee=new B(new ut(.42,12,9),O);ee.scale.set(1,.9,.86),ee.position.set(.49*d,1.04*d,0),P.add(ee);const Se=new B(new Qe(.2*d,.34*d,.98*d,10),R);Se.position.set(.5*d,1.46*d,0),Se.rotation.z=-.3,P.add(Se);const ge=new B(new ut(.34*d,12,9),O);ge.scale.set(1.18,.92,.78),ge.position.set(.86*d,1.82*d,0),P.add(ge);const qe=new B(new ut(.17*d,10,7),O);qe.scale.set(1.15,.72,.72),qe.position.set(1.16*d,1.72*d,0),P.add(qe);const ct=new B(new ut(.075*d,8,6),j);ct.scale.set(1,.72,.85),ct.position.set(1.3*d,1.72*d,0),P.add(ct);for(const Ot of[-1,1]){const Kt=new B(new hn(.095*d,.3*d,7),O);Kt.position.set(.77*d,2.1*d,Ot*.2*d),Kt.rotation.z=-.28,Kt.rotation.x=Ot*.18,P.add(Kt)}for(const Ot of[-1,1]){const Kt=new B(new ut(.035*d,8,6),I);Kt.position.set(1.05*d,1.91*d,Ot*.235*d),P.add(Kt);const $t=new B(new ut(.009*d,6,4),new wt({color:16777215}));$t.position.set(1.075*d,1.925*d,Ot*.257*d),P.add($t)}const Ct=[];for(const Ot of[-1,1])for(const Kt of[-1,1]){const $t=new Ge;$t.position.set(Kt*.43*d,.76*d,Ot*.34*d);const Ut=new B(new Qe(.085*d,.11*d,.43*d,7),R);Ut.position.y=-.2*d,$t.add(Ut);const Ft=new Ge;Ft.position.y=-.4*d;const fn=new B(new Qe(.055*d,.075*d,.43*d,7),j);fn.position.y=-.2*d,Ft.add(fn);const Bn=new B(new ut(.075*d,7,5),j);Bn.scale.set(1.15,.55,1.25),Bn.position.y=-.43*d,Ft.add(Bn),$t.add(Ft),P.add($t),Ct.push($t,Ft)}const Nt=new B(new ut(.16*d,9,7),O);Nt.scale.set(.75,1.25,.72),Nt.position.set(-.9*d,1.18*d,0),P.add(Nt);for(const Ot of[-1,1]){const Kt=new B(new Qe(.04*d,.06*d,.68*d,7),K);Kt.position.set(.69*d,2.25*d,Ot*.14*d),Kt.rotation.z=Ot*.22,P.add(Kt);for(let $t=0;$t<3;$t++){const Ut=new B(new Qe(.02*d,.038*d,.34*d,6),K);Ut.position.set((.56+.11*$t)*d,(2.48+.15*$t)*d,Ot*(.14+.045*$t)*d),Ut.rotation.z=Ot*(.55-.08*$t),P.add(Ut)}}P.scale.setScalar(1.1),P.position.set(c,X(c,v),v),P.userData={phase:S,legJoints:Ct},me(P),xe.push({g:P,x:c,z:v,r:4+k(S,41)*3,speed:1.25+k(S,42)*.8,phase:S,kind:"deer"})},gy=(c,v)=>{const d=new Ge,S=Q(6965552,1),P=Q(3089436,1),R=new B(new ut(.22,8,6),S);R.scale.set(1.35,.9,.9),R.position.y=.72,d.add(R);const O=new B(new ut(.17,8,6),S);O.position.set(.22,.86,0),d.add(O);for(const I of[-1,1]){const J=new B(new hn(.06,.18,6),S);J.position.set(.17,.99,I*.09),d.add(J)}const j=new B(new kt(.24,.075,7,14,Math.PI*1.65),S);j.rotation.y=Math.PI/2,j.position.set(-.22,.91,0),d.add(j);const K=new B(new ut(.025,6,4),P);K.position.set(.35,.9,-.12),d.add(K),d.position.set(c,X(c,v),v),me(d,"ratatosk","Белка Рататоск"),A.push(d),De(c,v,.28,.02),xe.push({g:d,x:c,z:v,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},vi=-5,_i=75,Ku=new Ge;Ku.userData={id:"ashgrove",label:"Роща Ясеня"};const Zu=new B(new Hn(10.5,40),new be({color:2504747,roughness:1,transparent:!0,opacity:.82}));Zu.rotation.x=-Math.PI/2,Zu.position.set(vi,X(vi,_i)+.02,_i),M.add(Zu);const vy=[[-6,1,1.7,!1],[-1,0,1.55,!1],[-8,5,1.45,!1],[2,5,1.45,!1],[-2,8,2.45,!0],[5,2,1.35,!1],[4,8,1.55,!1]];for(const[c,v,d,S]of vy)Ul(vi+c,_i+v,d,S);const Ju=new B(new kt(6.4,.07,8,64),new be({color:7910560,emissive:2182205,emissiveIntensity:1.8,transparent:!0,opacity:.7}));Ju.rotation.x=Math.PI/2,Ju.position.set(vi,X(vi,_i)+.05,_i),M.add(Ju);const Qu=new B(new Zt(1.05,1),Q(5593941,1));Qu.scale.set(1.3,.7,1.05),Qu.position.set(vi,X(vi,_i)+.65,_i),M.add(Qu),$e(Ku,0,0,"ᚱ",9430692,1.25,0);for(let c=0;c<26;c++){const v=k(c,1310)*Math.PI*2,d=2.5+k(c,1311)*7.2,S=vi+Math.cos(v)*d,P=_i+Math.sin(v)*d,R=new B(new Qe(.025,.045,.22+k(c,1312)*.28,6),Q(12039579,1));R.position.set(S,X(S,P)+.12,P),M.add(R);const O=new B(new ut(.13+k(c,1313)*.08,8,5),new be({color:9297872,emissive:3913642,emissiveIntensity:2.5,roughness:.6}));O.scale.y=.48,O.position.set(S,X(S,P)+.34,P),M.add(O)}for(let c=0;c<16;c++){const v=k(c,1320)*Math.PI*2,d=2+k(c,1321)*7.5,S=vi+Math.cos(v)*d,P=_i+Math.sin(v)*d,R=new B(new Qe(.07,.07,.025,10),Q(9270341,.5,.55));R.rotation.x=Math.PI/2,R.position.set(S,X(S,P)+.05,P),M.add(R)}A.push(Ku),De(vi,_i,1,.08);const gn=62,vn=78,Fl=new Ge;Fl.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const ed=new B(new Hn(11.5,44),new be({color:2112299,roughness:1,transparent:!0,opacity:.86}));ed.rotation.x=-Math.PI/2,ed.position.set(gn,X(gn,vn)+.025,vn),M.add(ed);const $m=new be({map:He,color:16777215,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.034}),td=new B(new Qe(1.35,2.1,10.5,13),$m);td.position.set(gn,X(gn,vn)+5.25,vn),td.rotation.z=-.05,M.add(td);for(let c=0;c<8;c++){const v=c/8*Math.PI*2+.2,d=5+k(c,1401)*4,S=new B(new Qe(.25,.58,d,9),$m);S.position.set(gn+Math.cos(v)*d*.36,X(gn,vn)+6.8+k(c,1402)*2.2,vn+Math.sin(v)*d*.36),S.rotation.z=Math.cos(v)*.8,S.rotation.x=Math.sin(v)*.8,S.rotation.y=-v,M.add(S);for(let P=0;P<4;P++){const R=new B(new ut(1+k(P+c,1403)*.55,9,6),new be({map:ht,color:[2312753,2972729,3697474][(c+P)%3],roughness:1}));R.scale.y=.65,R.position.set(gn+Math.cos(v)*d*(.48+.09*P)+(k(P,c)-.5)*1.1,X(gn,vn)+8+k(c,P)*3+P*.45,vn+Math.sin(v)*d*(.48+.09*P)+(k(P+5,c)-.5)*1.1),M.add(R)}}for(let c=0;c<9;c++){const v=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ","ᚷ","ᛏ","ᚢ"][c],d=At(v,c%2?"#63d9ef":"#f0c65d"),S=new B(new Sn(.7,.9),new wt({map:d,transparent:!0,depthWrite:!1,side:Vt}));S.position.set(gn+Math.sin(c*.63)*1.42,X(gn,vn)+1+c*.78,vn+Math.cos(c*.63)*1.42),S.rotation.y=Math.PI*.5-c*.16,M.add(S)}const nd=new B(new Zt(1.35,1),Q(5199954,1));nd.scale.set(1.45,.7,1.15),nd.position.set(gn,X(gn,vn)+.75,vn+1.6),M.add(nd),vs(gn,vn+2.1,.72);const id=new B(new kt(6.7,.06,8,64),new be({color:9162705,emissive:2318178,emissiveIntensity:1.9,transparent:!0,opacity:.62}));id.rotation.x=Math.PI/2,id.position.set(gn,X(gn,vn)+.055,vn),M.add(id);for(let c=0;c<22;c++){const v=k(c,1410)*Math.PI*2,d=1.8+k(c,1411)*8.2,S=gn+Math.cos(v)*d,P=vn+Math.sin(v)*d;$e(Fl,S-gn,P-vn,["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ"][c%6],c%2?6804447:14726490,.35,k(c,1412)*Math.PI)}for(let c=0;c<18;c++){const v=["ᚱ","ᚨ","ᛟ","ᚦ"][c%4],d=At(v,c%2?"#63d9ef":"#e4bd65"),S=new B(new Sn(.34,.44),new wt({map:d,transparent:!0,depthWrite:!1,side:Vt}));S.position.set(gn+(k(c,1420)-.5)*12,1.4+k(c,1421)*7,vn+(k(c,1422)-.5)*12),S.userData.floatPhase=k(c,1423)*6,M.add(S)}me(Fl,"hoddmimir","Лес Ходдмимира"),A.push(Fl),De(gn,vn,1.2,.08);const ha=43,pa=32;for(let c=0;c<4;c++)my(ha+(c-1.5)*2.6,pa+(c%2?2.6:-2.6),1.12+k(c,1440)*.16,10+c);const Km=new B(new Zt(.72,1),Q(5725526,1));Km.position.set(ha,X(ha,pa)+.5,pa),M.add(Km);const rd=new B(new kt(5.8,.045,7,48),new be({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));rd.rotation.x=Math.PI/2,rd.position.set(ha,X(ha,pa)+.035,pa),M.add(rd),gy(vi+5,_i+1),((c,v)=>{const d=new Ge;d.position.set(c,X(c,v),v),d.userData={id:"forestCache",label:"Забытый тайник"};const S=new be({map:He,color:6968381,roughness:1}),P=new be({color:2760987,roughness:1}),R=new B(new Qe(2,2.65,4.9,11),S);R.position.y=2.45,R.rotation.z=-.035,d.add(R);for(let ge=0;ge<7;ge++){const qe=1.3+k(ge,1250)*2.7,ct=new B(new hn(.32+k(ge,1251)*.3,qe,6),S),Ct=k(ge,1252)*Math.PI*2,Nt=.55+k(ge,1253)*1.35;ct.position.set(Math.cos(Ct)*Nt,4.75+qe*.42,Math.sin(Ct)*Nt),ct.rotation.z=(k(ge,1254)-.5)*.55,ct.rotation.x=(k(ge,1255)-.5)*.55,d.add(ct)}const O=new B(new ut(1.18,16,10),P);O.scale.set(1,1.18,.46),O.position.set(0,2,2.08),d.add(O);const j=new B(new kt(1.05,.16,8,28),new be({color:4930349,roughness:1}));j.rotation.x=Math.PI/2,j.position.set(0,2,2.12),j.scale.y=1.15,d.add(j);const K=new Ap({color:14211280,transparent:!0,opacity:.45});for(let ge=0;ge<6;ge++){const qe=[new W(-.95+ge*.38,1.15+ge%3*.55,2.15),new W((ge-2.5)*.2,2+ge%2*.3,2.48),new W(-.8+ge*.32,2.95+ge%3*.25,2.12)];d.add(new C1(new cn().setFromPoints(qe),K))}const I=new B(new ut(.46,10,8),new be({color:5978662,roughness:1}));I.scale.set(.9,1.15,.62),I.position.set(.05,1.45,2.34),d.add(I);const J=new B(new ut(.07,7,5),new be({color:14004573,metalness:.7,roughness:.35,emissive:7293719,emissiveIntensity:1.4}));J.position.set(.05,1.72,2.77),d.add(J);for(let ge=0;ge<5;ge++){const qe=new B(new Zt(.11,0),new be({color:14793052,emissive:10775838,emissiveIntensity:2.1,roughness:.5}));qe.position.set(-.38+ge*.19,1.02+ge%2*.08,2.5),d.add(qe)}const ee=["ᚠ","ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let ge=0;ge<6;ge++){const qe=-1.05+ge*.42,ct=At(ee[ge],ge%2?"#e7bd61":"#7ce5ef"),Ct=new B(new Sn(.45,.62),new wt({map:ct,transparent:!0,depthWrite:!1,side:Vt}));Ct.position.set(Math.sin(qe)*1.55,1.2+ge*.42,1.93+Math.cos(qe)*.22),Ct.rotation.y=Math.PI,d.add(Ct)}const Se=new B(new kt(4.15,.06,8,64),new wt({color:14991203,transparent:!0,opacity:.78,depthWrite:!1}));Se.rotation.x=Math.PI/2,Se.position.y=.05,d.add(Se);for(let ge=0;ge<10;ge++){const qe=ge/10*Math.PI*2;$e(d,Math.cos(qe)*3.65,Math.sin(qe)*3.65,["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᛟ","ᛉ","ᛏ"][ge],14859617,.38,qe+.2)}for(let ge=0;ge<12;ge++){const qe=k(ge,1270)*Math.PI*2,ct=1.8+k(ge,1271)*3.3,Ct=new B(new Qe(.08,.08,.025,9),new be({color:10190147,metalness:.55,roughness:.45}));Ct.rotation.x=Math.PI/2,Ct.position.set(Math.cos(qe)*ct,.09,Math.sin(qe)*ct),d.add(Ct)}for(let ge=0;ge<4;ge++){const qe=G(.08,.08,.75,10393476,1);qe.position.set((k(ge,1280)-.5)*5,.12,(k(ge,1281)-.5)*5),qe.rotation.y=k(ge,1282)*Math.PI,d.add(qe)}me(d,"forestCache","Забытый тайник"),A.push(d),De(c,v,1.75,.08)})(-72,48);const _y=(c,v,d,S,P)=>{const R=c.distanceTo(v),O=new B(new Gn(d,S,R),P);return O.position.copy(c).add(v).multiplyScalar(.5),O.lookAt(v),O};function ao(c,v,d,S,P,R,O){const j=new B(new Zt(P,1),Q(R,1));return j.scale.set(.72+k(O,1)*.62,.55+k(O,2)*.85,.68+k(O,3)*.55),j.rotation.set(k(O,4)*1.2,k(O,5)*Math.PI,k(O,6)*1.1),j.position.set(v,d,S),c.add(j),j}const xy=(c,v)=>{const d=new Ge;d.position.set(c,X(c,v),v),d.userData={id:"fallenAsh",label:"Поверженный ясень"};const S=new B(new kt(7.8,.07,8,64),new be({color:9150343,emissive:3360307,emissiveIntensity:1,transparent:!0,opacity:.55}));S.rotation.x=Math.PI/2,S.position.y=.05,d.add(S);const P=new be({map:He,color:16777215,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.034}),R=new B(new Qe(1.45,2.15,4.8,10),P);R.position.set(0,2.4,.2),R.rotation.z=-.04,d.add(R);const O=new B(new ut(.88,12,9),new wt({color:1185043}));O.scale.set(1,.95,.55),O.position.set(0,1.75,1.72),d.add(O);for(let K=0;K<7;K++){const I=-.9+K*.3,J=2.5+k(K,1500)*2.7,ee=new B(new Qe(.11,.28,J,7),P);ee.position.set(Math.sin(I)*J*.34,4+k(K,1501)*2.8,.15+Math.cos(I)*J*.3),ee.rotation.z=Math.sin(I)*.65,ee.rotation.x=-Math.cos(I)*.55,ee.rotation.y=I,d.add(ee)}for(let K=0;K<9;K++){const I=k(K,1510)*Math.PI*2,J=1.7+k(K,1511)*5.6;ao(d,Math.cos(I)*J,.22,Math.sin(I)*J,.3+k(K,1512)*.45,K%3?5265490:6251613,1513+K)}for(let K=0;K<8;K++)$e(d,(k(K,1520)-.5)*5.8,(k(K,1521)-.5)*5.8,["ᚦ","ᛉ","ᚱ","ᛟ"][K%4],10473668,.42,k(K,1522)*Math.PI);const j=new B(new ut(.45,10,7),Q(5978919,1));j.scale.set(.9,1.2,.7),j.position.set(0,1.55,1.25),d.add(j),me(d,"fallenAsh","Поверженный ясень"),A.push(d),De(c,v,1.8,.08)},yy=(c,v)=>{const d=new Ge;d.position.set(c,X(c,v),v),d.userData={id:"hunterCamp",label:"Забытая стоянка"};const S=new B(new Hn(8.7,40),new be({color:3225644,roughness:1,transparent:!0,opacity:.78}));S.rotation.x=-Math.PI/2,S.position.y=.025,S.scale.set(1.18,.92,1),d.add(S);const P=new Ge;P.position.set(-1.45,.05,-.65),P.rotation.y=-.34,d.add(P);const R=Q(5978920,1);Q(3680030,1);const O=Q(2697768,.82,.35),j=Q(4412730,1),K=G(3.7,.26,1.65,6308141,1);K.position.y=1.05,K.rotation.z=-.08,P.add(K);for(let Ve=0;Ve<9;Ve++){const gt=G(2.8+k(Ve,501)*1.1,.16,.26,Ve%3?6505775:4928293,1);gt.position.set(-.25+(k(Ve,502)-.5)*.25,1.18+(k(Ve,503)-.5)*.34,-.72+Ve%3*.68),gt.rotation.z=(k(Ve,504)-.5)*.16,gt.rotation.y=(k(Ve,505)-.5)*.16,P.add(gt)}for(const[Ve,gt,Wt]of[[-1.55,-.83,.82],[1.35,-.83,.74]]){const wn=new B(new kt(Wt,.14,7,20,Math.PI*1.56),O);wn.rotation.y=Math.PI/2,wn.rotation.z=Wt>.8?.08:-.18,wn.position.set(Ve,.9,gt),P.add(wn);const yi=new B(new Qe(.15,.18,.28,8),O);yi.rotation.z=Math.PI/2,yi.position.set(Ve,.9,gt),P.add(yi);for(let ws=0;ws<6;ws++){const q0=ws/6*Math.PI*2+.25,ky=new W(Ve+Math.cos(q0)*Wt*.82,.9+Math.sin(q0)*Wt*.82,gt+.02),Oy=new W(Ve,.9,gt+.02);P.add(_y(Oy,ky,.065,.065,O))}}const I=new B(new Gn(3.8,.14,.16),O);I.position.set(0,.62,-.83),I.rotation.z=.08,P.add(I);const J=new B(new Gn(.16,.18,3.2),R);J.position.set(1.8,.8,-.35),J.rotation.y=.9,P.add(J);for(let Ve=0;Ve<6;Ve++){const gt=new B(new ut(.28+k(Ve,507)*.18,7,5),j);gt.scale.set(1.4,.32,.7),gt.position.set(-1.1+Ve*.48,1.34+Ve%2*.05,-.82),P.add(gt)}const ee=new Ge;ee.position.set(2.85,.02,1.15),ee.rotation.y=.18,d.add(ee),Q(4861985,1);for(let Ve=0;Ve<4;Ve++){const gt=Ve/4*Math.PI*2+.25,Wt=G(.11,3.7,.11,4861985,1);Wt.position.set(Math.cos(gt)*1.25,1.65,Math.sin(gt)*1.25),Wt.rotation.z=Math.cos(gt)*.34,Wt.rotation.x=-Math.sin(gt)*.34,ee.add(Wt)}const Se=new B(new hn(2,3.2,4,1,!0),new be({color:4862247,roughness:1,side:Vt,transparent:!0,opacity:.94}));Se.position.y=1.45,Se.scale.set(1,.9,.82),Se.rotation.y=.78,ee.add(Se);for(let Ve=0;Ve<9;Ve++){const gt=new B(new ut(.16+k(Ve,509)*.14,6,5),j);gt.scale.set(1.5,.35,.8),gt.position.set((k(Ve,510)-.5)*2.4,1+k(Ve,511)*1.9,(k(Ve,512)-.5)*1.8),ee.add(gt)}const ge=G(1.05,1.55,.05,3088668,1);ge.position.set(0,.72,1.65),ge.rotation.y=.16,ee.add(ge),vs(c+.1,v+.45,.78);const qe=new Wi(16751173,1,8,2);qe.position.set(.1,1.7,.45),d.add(qe);const ct=new Ge;ct.position.set(-3.15,.5,1.25),ct.rotation.y=.8,ct.rotation.z=-.22,d.add(ct);const Ct=new B(new Hn(1.05,16),new be({color:3882041,roughness:.85,metalness:.55,side:Vt}));Ct.rotation.x=-Math.PI/2,Ct.scale.y=.8,ct.add(Ct);const Nt=new B(new kt(1.03,.11,7,18),O);Nt.rotation.x=-Math.PI/2,Nt.scale.y=.8,ct.add(Nt);const Ot=new B(new Qe(.24,.31,.22,8),O);Ot.rotation.x=Math.PI/2,Ot.position.set(.18,0,.08),ct.add(Ot);const Kt=G(.05,.035,1.15,1513494,1);Kt.position.set(-.28,.025,.05),Kt.rotation.y=.42,ct.add(Kt),Q(2960425,.65,.45);const $t=(Ve,gt,Wt)=>{const wn=new Ge;wn.position.set(Ve,.18,gt),wn.rotation.y=Wt;const yi=G(.09,.09,1.55,5059362,1);yi.rotation.x=Math.PI/2,yi.position.z=.15,wn.add(yi);const ws=G(.55,.13,.28,3158061,.55);ws.position.set(0,.02,-.62),ws.rotation.y=-.25,wn.add(ws),d.add(wn)};$t(-1.9,3.15,.45),$t(4.15,-.65,-.8);const Ut=G(.11,.11,.95,5388068,1);Ut.rotation.y=.55,Ut.position.set(-2.1,.16,2.65),d.add(Ut);const Ft=new B(new ut(.48,9,7),new be({color:5978919,roughness:1}));Ft.scale.set(.9,1.15,.65),Ft.position.set(3.55,.48,2.65),d.add(Ft);const fn=new B(new kt(.33,.035,6,18,Math.PI*1.5),Q(3023129,1));fn.rotation.x=Math.PI/2,fn.position.set(3.55,.93,2.65),d.add(fn);for(let Ve=0;Ve<15;Ve++){const gt=new B(new Qe(.09,.09,.025,10),new be({color:9335877,metalness:.55,roughness:.45})),Wt=k(Ve,520)*Math.PI*2,wn=2.1+k(Ve,521)*3.7;gt.position.set(Math.cos(Wt)*wn,.13,Math.sin(Wt)*wn),gt.rotation.x=Math.PI/2,d.add(gt)}for(let Ve=0;Ve<5;Ve++){const gt=G(.08,.08,.9,11182733,1);gt.position.set(3.2+k(Ve,522)*2.4,.18,-2.7+k(Ve,523)*1.7),gt.rotation.y=k(Ve,524)*Math.PI,gt.rotation.z=(k(Ve,525)-.5)*.25,d.add(gt)}const Bn=new B(new kt(4.7,.055,7,64),new wt({color:9160135,transparent:!0,opacity:.5}));Bn.rotation.x=Math.PI/2,Bn.position.y=.075,d.add(Bn);const li=["ᚠ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ"];li.forEach((Ve,gt)=>{const Wt=gt/li.length*Math.PI*2;$e(d,Math.cos(Wt)*4.15,Math.sin(Wt)*4.15,Ve,gt%3===0?13215066:7977149,.55,Wt+.3)});for(let Ve=0;Ve<18;Ve++)ao(d,(k(Ve,530)-.5)*8,.18,(k(Ve,531)-.5)*7,.22+k(Ve,532)*.34,Ve%4===0?6121048:5133389,530+Ve);for(let Ve=0;Ve<12;Ve++){const gt=G(.12,.12,1.7+k(Ve,535)*2,3811872,1);gt.position.set((k(Ve,536)-.5)*8,.11,(k(Ve,537)-.5)*8),gt.rotation.y=k(Ve,538)*Math.PI,gt.rotation.z=(k(Ve,539)-.5)*.2,d.add(gt)}me(d,"hunterCamp","Забытая стоянка"),A.push(d),De(c,v,1.9,.1)},My=(c,v,d,S,P,R)=>{const O=new Ge;O.position.set(c,X(c,v),v);const j=7442040,K=Q(4412730,1),I=new B(new kt(d,.07,8,64),new be({color:j,emissive:j,emissiveIntensity:.65,transparent:!0,opacity:.42}));I.rotation.x=Math.PI/2,I.position.y=.045,O.add(I);const J=Math.floor(d/1.7);for(let ee=0;ee<J;ee++){const Se=k(ee,c*11+v)*Math.PI*2,ge=d*.35+k(ee,v*17)*d*.45;ao(O,Math.cos(Se)*ge,.2,Math.sin(Se)*ge,.34+k(ee,33)*.32,5266514,800+ee)}{for(let ee=0;ee<8;ee++){const Se=new B(new ut(.34+k(ee,600)*.25,7,5),K);Se.scale.y=.35,Se.position.set((k(ee,601)-.5)*d,.16,(k(ee,602)-.5)*d),O.add(Se)}for(let ee=0;ee<6;ee++)$e(O,(k(ee,603)-.5)*d*.9,(k(ee,604)-.5)*d*.9,["ᛉ","ᚱ","ᚦ","ᚨ","ᛟ","ᚠ"][ee],7907492,.42,k(ee,605)*Math.PI)}me(O,S,P),A.push(O)};yy(68,8),My(-45,75,9.5,"deepGrove","Глубокая роща"),xy(-30,15);const wy=(c,v)=>{const d=document.createElement("canvas");d.width=d.height=256;const S=d.getContext("2d");S.clearRect(0,0,256,256),S.textAlign="center",S.textBaseline="middle",S.shadowColor=v,S.shadowBlur=24,S.fillStyle=v,S.font="bold 156px serif",S.fillText(c,128,132),S.shadowBlur=6,S.globalAlpha=.72,S.font="bold 126px serif",S.fillText(c,128,132);const P=new As(d);return P.colorSpace=Nn,P.anisotropy=4,P},ma=(c,v,d,S,P,R,O=.7,j=0)=>{const K="#"+R.toString(16).padStart(6,"0"),I=new wt({map:wy(v,K),transparent:!0,depthWrite:!1,side:Vt}),J=new B(new Sn(O,O),I);return J.position.set(d,S,P),J.rotation.set(0,j,0),c.add(J),J},kl=(c,v,d,S=.075)=>{const P=new Rp(v),R=new B(new Ja(P,42,S,6,!1),new wt({color:d,transparent:!0,opacity:.9}));c.add(R);const O=new B(new Ja(P,42,S*2.5,6,!1),new wt({color:d,transparent:!0,opacity:.12,depthWrite:!1}));return c.add(O),R},sd=50,od=-62,Dr=new Ge;Dr.position.set(sd,X(sd,od),od),Dr.userData={id:"forestThread",label:"Разорванная нить"};const ad=new B(new kt(2.4,.05,7,48),new be({color:10252688,emissive:5912660,emissiveIntensity:1.5,transparent:!0,opacity:.72}));ad.rotation.x=Math.PI/2,ad.position.y=.055,Dr.add(ad);const ld=new B(new Zt(1,1),Q(5326925,1));ld.scale.set(.9,1.45,.72),ld.position.y=.95,Dr.add(ld),ma(Dr,"ᛏ",0,1.2,.76,12614830,.9,0);const Sy=[new W(-.9,1.8,.3),new W(0,3.1,.1),new W(1,2,-.2)];kl(Dr,Sy,14268630,.06),me(Dr,"forestThread","Разорванная нить"),A.push(Dr),De(sd,od,1.1,.08);const Pn=new Ge,cd=58,ud=-28;Pn.position.set(cd,X(cd,ud),ud),Pn.userData={id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд"};const Ey=new be({color:5858398,roughness:.96,metalness:.04}),Zm=new be({color:3423032,roughness:.92,metalness:.08}),Ty=new be({color:2910320,emissive:867141,emissiveIntensity:1.15,roughness:.16,metalness:.05,transparent:!0,opacity:.9}),dd=new B(new Hn(13.2,52),new be({color:5402692,roughness:1,transparent:!0,opacity:.94}));dd.rotation.x=-Math.PI/2,dd.position.y=.018,Pn.add(dd);for(const[c,v,d]of[[4.1,.07,.82],[7.2,.055,.72],[10.8,.045,.62]]){const S=new B(new kt(c,v,8,96),new wt({color:15780190,transparent:!0,opacity:d,depthWrite:!1}));S.rotation.x=Math.PI/2,S.position.y=.065,Pn.add(S)}const by=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ","ᛒ","ᛟ"];for(let c=0;c<18;c++){const v=c/18*Math.PI*2;$e(Pn,Math.cos(v)*8.9,Math.sin(v)*8.9,by[c],15779422,.58,v+.15)}const Jm=new B(new Qe(3.15,3.45,.45,12),Zm);Jm.position.y=.24,Pn.add(Jm);for(let c=0;c<16;c++){const v=c/16*Math.PI*2,d=2.65+(k(c,2001)-.5)*.22,S=new B(new Zt(.72+k(c,2002)*.22,1),Ey);S.scale.set(1.15+k(c,2003)*.25,.72+k(c,2004)*.22,.88+k(c,2005)*.24),S.position.set(Math.cos(v)*d,.55+k(c,2006)*.12,Math.sin(v)*d),S.rotation.set(k(c,2007)*.25,v+k(c,2008)*.4,k(c,2009)*.2),Pn.add(S)}const fd=new B(new Hn(2.25,40),Ty);fd.rotation.x=-Math.PI/2,fd.position.y=.72,Pn.add(fd);for(let c=0;c<3;c++){const v=new B(new kt(.65+c*.48,.025,6,48),new wt({color:c===0?9367295:7063762,transparent:!0,opacity:.3,depthWrite:!1}));v.rotation.x=Math.PI/2,v.position.y=.735,Pn.add(v)}const Qm=[{x:-2.75,z:2,body:7035465,cloak:8088149,hair:3681575,light:15329759,thread:14674162,phase:0},{x:0,z:3.75,body:7692358,cloak:6124124,hair:4863271,light:16766571,thread:16765022,phase:2.1},{x:2.75,z:2,body:6442314,cloak:6116205,hair:3155746,light:14179176,thread:13192536,phase:4.2}],e0=[];for(let c=0;c<3;c++){const v=Qm[c],d=new Ge;d.position.set(v.x,0,v.z),d.rotation.y=c===0?.22:c===2?-.22:Math.PI;const S=new B(new hn(.72,.95,9),new be({color:v.body,roughness:.98}));S.position.y=.72,d.add(S);const P=new B(new hn(.48,.72,8),new be({color:v.cloak,roughness:.98}));P.position.set(0,.86,.43),P.rotation.x=.05,d.add(P);const R=new B(new Qe(.42,.58,.12,9),new be({color:v.cloak,roughness:1}));R.position.set(0,1.23,0),R.rotation.z=.08,d.add(R);const O=new B(new ut(.32,12,9),new be({color:13079144,roughness:.9}));O.position.y=1.62,d.add(O);const j=new B(new ut(.38,10,8),new be({color:v.hair,roughness:1}));j.scale.set(1,.95,.9),j.position.set(0,1.68,-.08),d.add(j);for(const ee of[-1,1]){const Se=new B(new Qe(.075,.105,.62,7),new be({color:v.cloak,roughness:1}));Se.position.set(ee*.47,1.03,.18),Se.rotation.z=ee*.42,Se.rotation.x=-.18,d.add(Se)}const K=new B(new Qe(.38,.44,.18,9),Zm);K.position.y=.25,d.add(K);const I=new B(new Qe(.035,.055,.9,8),new be({color:6964008,roughness:.9}));I.position.set(.58,1.08,.38),I.rotation.z=.62,d.add(I);const J=new B(new kt(.12,.025,6,14),new be({color:9265980,roughness:.85}));J.rotation.x=Math.PI/2,J.position.set(.75,.82,.48),d.add(J),d.position.y=.02,Pn.add(d),e0.push(new W(v.x+.72,1.25,v.z+.48))}const t0=[14674162,16765022,13192536];for(let c=0;c<3;c++){const v=e0[c],d=[];for(let S=0;S<=30;S++){const P=S/30,R=v.y+P*7.3,O=P*Math.PI*3+Qm[c].phase,j=.35+.72*P;d.push(new W(v.x*(1-P)+Math.cos(O)*j*P,v.y*(1-P)+R*P,v.z*(1-P)+Math.sin(O)*j*P))}kl(Pn,d,t0[c],.085)}for(let c=0;c<3;c++){const v=[];for(let d=0;d<=32;d++){const S=d/32,P=S*Math.PI*2,R=1.65+.42*Math.sin(P*2+c*.9);v.push(new W(Math.cos(P+c*2.094)*R,8.35+.45*Math.sin(P*3+c),Math.sin(P+c*2.094)*R))}kl(Pn,v,t0[c],.065)}const n0=new Wi(16767096,1.25,11,2);n0.position.set(0,4.2,1),Pn.add(n0);for(let c=0;c<20;c++){const v=k(c,2030)*Math.PI*2,d=3.8+k(c,2031)*8,S=Math.cos(v)*d,P=Math.sin(v)*d,R=new B(new Qe(.018,.028,.22,5),new be({color:5666109,roughness:1}));R.position.set(S,.11,P),Pn.add(R);const O=new B(new ut(.07,7,5),new wt({color:c%3===0?16770208:c%3===1?15972816:14478591}));O.position.set(S,.25,P),Pn.add(O)}for(let c=0;c<10;c++){const v=k(c,2040)*Math.PI*2,d=4+k(c,2041)*8,S=new B(new Zt(.12+k(c,2042)*.08,0),new be({color:10189631,metalness:.65,roughness:.4}));S.position.set(Math.cos(v)*d,.1,Math.sin(v)*d),Pn.add(S)}me(Pn,"threeThreads","Камень Трёх Нитей — Колодец Урд"),A.push(Pn),De(cd,ud,3.4,.1);const xi=new Ge,hd=5,pd=-70;xi.position.set(hd,X(hd,pd),pd),xi.userData={id:"powerCircle",label:"Круг Силы"};const md=new B(new Hn(10.8,48),new be({color:1911590,roughness:1,transparent:!0,opacity:.94}));md.rotation.x=-Math.PI/2,md.position.y=.02,xi.add(md);for(const[c,v,d,S]of[[3.2,.075,13925631,.8],[6.2,.06,6987007,.68],[9.2,.045,12025343,.58]]){const P=new B(new kt(c,v,8,96),new wt({color:d,transparent:!0,opacity:S,depthWrite:!1}));P.rotation.x=Math.PI/2,P.position.y=.07,xi.add(P)}for(let c=0;c<20;c++){const v=c/20*Math.PI*2,d=5.1+c%2*2.2;$e(xi,Math.cos(v)*d,Math.sin(v)*d,zi[(c+2)%zi.length],c%2?9140479:6545396,.38,v+.2)}const Ol=new B(new Zt(1.25,1),new be({color:2435371,roughness:.9,metalness:.16}));Ol.scale.set(.9,2.8,.7),Ol.position.y=2.45,Ol.rotation.set(.05,.2,-.08),xi.add(Ol);const Ay=ma(xi,"ᛟ",0,2.55,.78,16766302,1.35,0);Ay.rotation.x=0;const i0=new Wi(10251519,1.7,10,2);i0.position.set(0,2.5,.8),xi.add(i0);for(let c=0;c<12;c++){const v=c/12*Math.PI*2,d=4.1+k(c,1801)*4.5,S=ao(xi,Math.cos(v)*d,.3,Math.sin(v)*d,.42+k(c,1802)*.42,c%3===0?5858141:4870476,1803+c);if(c%4===0){const P=new B(new hn(.18,.9,5),new wt({color:c%2?9336063:6938111,transparent:!0,opacity:.75}));P.position.set(S.position.x,.62,S.position.z),xi.add(P)}}for(let c=0;c<9;c++){const v=k(c,1820)*Math.PI*2,d=2.2+k(c,1821)*6.7,S=new B(new ut(.045+k(c,1822)*.04,6,5),new wt({color:c%2?7531007:11697663,transparent:!0,opacity:.7}));S.position.set(Math.cos(v)*d,.4+k(c,1823)*2.6,Math.sin(v)*d),xi.add(S)}me(xi,"powerCircle","Круг Силы"),A.push(xi),De(hd,pd,2.2,.1);const Ii=new Ge,gd=-72,vd=-48;Ii.position.set(gd,X(gd,vd),vd),Ii.userData={id:"whisperStone",label:"Камень Шёпота"};const _d=new B(new Hn(8.6,40),new be({color:1516830,roughness:1,transparent:!0,opacity:.95}));_d.rotation.x=-Math.PI/2,_d.position.y=.02,Ii.add(_d);const xd=new B(new kt(5.8,.09,8,96),new wt({color:11103487,transparent:!0,opacity:.78,depthWrite:!1}));xd.rotation.x=Math.PI/2,xd.position.y=.075,Ii.add(xd);const zl=new B(new Zt(2.1,1),new be({color:1382171,roughness:.8,metalness:.35}));zl.scale.set(1.15,1.35,.82),zl.position.y=1.75,zl.rotation.set(.05,.25,-.08),Ii.add(zl);for(const c of[-1,1]){const v=[];for(let d=0;d<=14;d++){const S=d/14,P=S*Math.PI*1.15;v.push(new W(c*(1.35+.72*Math.sin(P)),2.45+.85*S+.38*Math.sin(P),-.15+.78*Math.cos(P)-.78))}kl(Ii,v,3422020,.18)}const Bl=["ᚨ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ","ᚺ","ᚾ"];Bl.forEach((c,v)=>{const d=v/Bl.length*Math.PI*2;ma(Ii,c,Math.cos(d)*3.5,1,Math.sin(d)*3.5,v%2?7265535:12088575,.46,d+Math.PI/2)});for(let c=0;c<9;c++){const v=k(c,1901)*Math.PI*2,d=.7+k(c,1902)*1.7,S=ma(Ii,Bl[c%Bl.length],Math.cos(v)*d,3.4+c*.48,Math.sin(v)*d,c%2?7988991:12614911,.42+k(c,1903)*.22,v);S.rotation.x=(k(c,1904)-.5)*.35}const r0=new Wi(10245631,1.5,9,2);r0.position.set(0,2.2,.5),Ii.add(r0);for(let c=0;c<11;c++){const v=k(c,1920)*Math.PI*2,d=4.8+k(c,1921)*2.6;ao(Ii,Math.cos(v)*d,.2,Math.sin(v)*d,.28+k(c,1922)*.38,4541258,1923+c)}me(Ii,"whisperStone","Камень Шёпота"),A.push(Ii),De(gd,vd,2.5,.1);const Nr=(c,v,d,S,P="rune")=>{const R=new Ge;R.position.set(c,X(c,v),v);const O=P==="shadow"?2107425:P==="power"?2106411:P==="fate"?2895917:3162931,j=new B(new Hn(P==="grove"?9.8:7.8,40),new be({color:O,roughness:1,transparent:!0,opacity:.68}));j.rotation.x=-Math.PI/2,j.position.y=.025,R.add(j);const K=new B(new kt(P==="grove"?7.2:5.8,.045,7,64),new wt({color:S,transparent:!0,opacity:P==="shadow"?.32:.46,depthWrite:!1}));K.rotation.x=Math.PI/2,K.position.y=.055,R.add(K);for(const I of[-1,1]){const J=new B(new Zt(.48+k(I+Math.round(c),Math.round(v))*.22,1),new be({color:P==="shadow"?3159608:5857626,roughness:1}));J.scale.set(.8,1.65,.72),J.position.set(I*2.35,.62,P==="grove"?-.15:.35),J.rotation.set(.05,I*.28,-I*.1),R.add(J);const ee=ma(R,d,I*2.35,1.25,.73,S,.34,I*.08);ee.rotation.x=0}for(let I=0;I<8;I++){const J=-Math.PI/2+(I-3.5)*.16,ee=2.8+Math.abs(I-3.5)*.42,Se=new B(new Zt(.11+k(I,2200+Math.round(c))*.07,0),new be({color:S,emissive:S,emissiveIntensity:.65,roughness:.72}));Se.position.set(Math.cos(J)*ee,.08,Math.sin(J)*ee),R.add(Se)}me(R,`threshold_${P}_${Math.round(c)}_${Math.round(v)}`,`Порог: ${d}`),M.add(R)};Nr(vi,_i,"ᚱ",9430692,"grove"),Nr(gn,vn,"ᛉ",14726490,"grove"),Nr(-72,48,"ᚠ",14859617,"shadow"),Nr(58,-28,"ᛟ",15779422,"fate"),Nr(5,-70,"ᛟ",9271551,"power"),Nr(-72,-48,"ᚨ",10187519,"shadow"),Nr(50,-62,"ᛏ",9422551,"fate"),Nr(-52,38,"ᛜ",14134881,"fate");const In=75,Mn=30,rn=new Ge;rn.position.set(In,X(In,Mn),Mn);const Cy=Q(5986899,1),s0=G(7.8,.42,5.8,5591885,1);s0.position.y=.22,rn.add(s0);const o0=G(7.4,2.8,.3,6439727,1);o0.position.set(0,1.4,-2.7),rn.add(o0);const a0=G(.3,2.8,5.4,6439727,1);a0.position.set(-3.7,1.4,0),rn.add(a0);const l0=G(.3,2.8,5.4,6439727,1);l0.position.set(3.7,1.4,0),rn.add(l0);const c0=G(2.55,2.8,.3,6439727,1);c0.position.set(-2.43,1.4,2.7),rn.add(c0);const u0=G(2.55,2.8,.3,6439727,1);u0.position.set(2.43,1.4,2.7),rn.add(u0);const d0=G(2.3,.72,.3,6439727,1);d0.position.set(0,2.44,2.7),rn.add(d0);const f0=G(.16,2.18,.34,2826523,1);f0.position.set(-.66,1.28,2.72),rn.add(f0);const h0=G(.16,2.18,.34,2826523,1);h0.position.set(.66,1.28,2.72),rn.add(h0);const p0=G(1.48,.16,.34,2826523,1);p0.position.set(0,2.34,2.72),rn.add(p0);const lo=new Ge;lo.position.set(-.57,0,2.72),rn.add(lo);const m0=G(1.14,2.05,.12,3154457,1);m0.position.set(.57,1.28,0),lo.add(m0);const g0=new B(new ut(.08,8,6),Q(11831883,1));g0.position.set(.86,1.25,.1),lo.add(g0);const Ry=new be({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const c of[-2.35,2.35]){const v=G(1.25,1,.12,2826523,1);v.position.set(c,1.72,2.78),rn.add(v);const d=new B(new Gn(.98,.72,.06),Ry);d.position.set(c,1.72,2.86),rn.add(d);const S=G(.07,.78,.1,2826523,1);S.position.set(c,1.72,2.91),rn.add(S);const P=G(1.08,.07,.1,2826523,1);P.position.set(c,1.72,2.91),rn.add(P)}const v0=new be({map:jn,color:2697767,roughness:.98,side:Vt}),ga=new B(new Sn(4.25,6.25),v0),va=new B(new Sn(4.25,6.25),v0);ga.rotation.x=Math.PI/2,va.rotation.x=Math.PI/2,ga.rotation.z=.62,va.rotation.z=-.62,ga.position.set(-1.02,3.95,0),va.position.set(1.02,3.95,0),rn.add(ga,va);const yd=G(.22,.22,6.45,2695965,1);yd.position.y=4.75,rn.add(yd);const Md=new B(new Gn(.48,1.35,.48),Cy);Md.position.set(1.55,4.8,-.65),rn.add(Md);const wd=G(.62,.1,.62,3420461,1);wd.position.set(1.55,5.48,-.65),rn.add(wd);const _0=G(2.35,.18,1,6636845,1);_0.position.set(0,.62,3.15),rn.add(_0);const x0=G(1.55,.16,.48,5849131,1);x0.position.set(0,.3,3.58),rn.add(x0),me(rn,"heroHome","Домик героя"),A.push(rn),Me(In,Mn-2.72,7.4,.3,0,.05),Me(In-3.72,Mn,.3,5.45,0,.05),Me(In+3.72,Mn,.3,5.45,0,.05),Me(In-2.43,Mn+2.72,2.55,.3,0,.05),Me(In+2.43,Mn+2.72,2.55,.3,0,.05);const an=new Ge;an.position.set(In,X(In,Mn),Mn),an.visible=!1;const y0=G(7,.16,5,4928548,1);y0.position.y=.5,an.add(y0);const M0=G(7,2.65,.18,4139808,1);M0.position.set(0,1.8,-2.45),an.add(M0);const w0=G(.18,2.65,4.9,4139808,1);w0.position.set(-3.45,1.8,0),an.add(w0);const S0=G(.18,2.65,4.9,4139808,1);S0.position.set(3.45,1.8,0),an.add(S0);const E0=G(2.35,2.65,.18,4139808,1);E0.position.set(-2.42,1.8,2.45),an.add(E0);const T0=G(2.35,2.65,.18,4139808,1);T0.position.set(2.42,1.8,2.45),an.add(T0);const b0=G(2.5,.04,2.1,7162673,1);b0.position.set(-.15,.6,.25),an.add(b0);const A0=G(1.65,.65,2.15,4008478,1);A0.position.set(-2.15,.88,-1.25),an.add(A0);const C0=G(1.48,.12,1.35,7033152,1);C0.position.set(-2.15,1.27,-.92),an.add(C0);const R0=G(1.28,.18,.46,11903114,1);R0.position.set(-2.15,1.38,-1.95),an.add(R0);const P0=G(1.65,.12,1.05,5255969,1);P0.position.set(.85,1.15,-.15),an.add(P0);for(const[c,v]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const d=G(.1,.7,.1,3679515,1);d.position.set(c,.72,v),an.add(d)}const I0=G(1.25,.8,.72,5978660,1);I0.position.set(2.1,.95,-1.7),an.add(I0);const L0=G(1.9,.14,.45,5978660,1);L0.position.set(1.35,2,-2.25),an.add(L0);for(const c of[.75,1.35,1.95]){const v=new B(new Qe(.08,.1,.35,8),Q(7304016,1));v.position.set(c,2.24,-2.22),an.add(v)}const D0=G(1.35,.55,.7,5920078,1);D0.position.set(2.15,.78,.95),an.add(D0);const N0=new B(new hn(.28,.72,8),new be({color:16744744,emissive:16731402,emissiveIntensity:4}));N0.position.set(2.15,1.42,.95),an.add(N0);const U0=new Wi(16747068,2.2,8,2);U0.position.set(2.15,1.7,.95),an.add(U0),me(an,"heroHomeInterior","Дом героя — внутри"),A.push(an);const _s=new Ge;_s.position.set(In,X(In,Mn),Mn);const Sd=new B(new kt(6.2,.055,7,48),new be({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));Sd.rotation.x=Math.PI/2,Sd.position.y=.035,_s.add(Sd);for(const[c,v]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const d=G(.18,1,.18,4797735,1);d.position.set(c,.5,v),_s.add(d)}for(const c of[-2.4,2.9]){const v=G(10.2,.12,.12,6308139,1);v.position.set(0,.59,c),_s.add(v)}const Py=Q(6906972,1);for(let c=0;c<7;c++){const v=new B(new Qe(.32,.4,.12,7),Py);v.position.set(0,.08,4.1+c*.72),v.rotation.y=c*.4,_s.add(v)}vs(In-2.4,Mn+4.8,.48).scale.setScalar(.72),me(_s,"heroHomeYard","Двор домика героя"),A.push(_s),vs(68,8,.75).scale.setScalar(.72);const F0=new B(new Qe(.65,.8,.7,7),Q(5327426,1));F0.position.set(68,X(68,8)+.35,6.5),M.add(F0);for(const[c,v]of[[66,10],[70,10],[66,6],[70,6]]){const d=G(.16,1.15,.16,4797735,1);d.position.set(c,X(c,v)+.57,v),M.add(d)}const Hl=new Ge;Hl.position.set(-30,X(-30,15),15);const Ed=new B(new Qe(.5,.62,7,8),new be({map:He,color:4995371,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.034}));Ed.rotation.z=Math.PI/2,Ed.position.y=.5,Hl.add(Ed);const Td=new B(new Qe(.53,.53,.12,12),Q(7693389,1));Td.rotation.z=Math.PI/2,Td.position.set(3.5,.5,0),Hl.add(Td),M.add(Hl);for(let c=0;c<7;c++){const v=new B(new Zt(.14,0),Q(6913394,1)),d=c/7*Math.PI*2;v.position.set(-45+Math.cos(d)*4,.12+X(-45+Math.cos(d)*4,75+Math.sin(d)*4),75+Math.sin(d)*4),M.add(v)}for(let c=0;c<95;c++){const v=k(c,77)*Math.PI*2,d=68+k(c,91)*27,S=Math.cos(v)*d,P=Math.sin(v)*d+2,O=[[vi,_i,11],[18,55,13],[-65,5,11],[-60,-25,10],[43,32,12],[62,78,10],[-72,48,7],[50,-62,7],[58,-28,15],[68,8,11],[75,30,13],[-45,75,12],[-30,15,10],[5,-70,13],[-72,-48,11]].some(([j,K,I])=>Math.hypot(S-j,P-K)<I);Math.abs(S+57)>9&&!O&&py(S,P,.78+k(c,13)*.82)}Ul(-10,18,1.55,!1),Ul(13,24,1.7,!1),Ul(-31,-12,2.15,!0);for(let c=0;c<110;c++){const v=k(c,701)*Math.PI*2,d=15+k(c,702)*50,S=Math.cos(v)*d,P=Math.sin(v)*d+3;if(Math.abs(S)<10&&Math.abs(P)<16)continue;const R=new Ge;R.position.set(S,X(S,P),P);for(let O=0;O<3;O++){const j=new B(new hn(.025,.38+k(O,c)*.28,4),new be({color:O===1?5466175:4282935,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.012}));j.position.set((O-1)*.09,.18,(k(O*3,c)-.5)*.12),j.rotation.z=(O-1)*.22,R.add(j)}M.add(R),Nl.push({o:R,baseX:0,baseZ:0,phase:k(c,703)*Math.PI*2,amp:.018+.016*k(c,704)})}for(let c=0;c<80;c++){const v=-88+k(c,101)*176,d=-88+k(c,111)*176;if(Math.hypot(v,d+2)>30){const S=new B(new hn(.08,.55+k(c,121)*.7,5),new be({color:4941888,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.012}));S.position.set(v,X(v,d)+.3,d),M.add(S),Nl.push({o:S,baseX:0,baseZ:0,phase:k(c,122)*Math.PI*2,amp:.014+.012*k(c,123)})}}for(let c=0;c<72;c++){const v=-84+k(c,150)*168,d=-82+k(c,151)*164,S=Math.hypot(v-1,d+1)<24,P=[[18,55,15],[-65,5,13],[43,32,14],[62,78,12],[-45,75,13],[5,-70,14],[-72,-48,13],[-30,15,10]].some(([j,K,I])=>Math.hypot(v-j,d-K)<I);if(S||P)continue;const R=.1+k(c,152)*.24,O=new B(new Zt(R,1),new be({color:c%3===0?5593940:6710877,roughness:.98,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.018}));O.scale.set(1+k(c,153)*1.3,.55+k(c,154)*.7,.72+k(c,155)*1.15),O.rotation.set(k(c,156)*1.7,k(c,157)*Math.PI,k(c,158)*1.7),O.position.set(v,X(v,d)+R*.22,d),O.castShadow=!0,O.receiveShadow=!0,M.add(O)}for(let c=0;c<46;c++){const v=-82+k(c,160)*164,d=-80+k(c,161)*160;if(Math.hypot(v-1,d+1)<28)continue;const S=.55+k(c,162)*1.15,P=new B(new Qe(.025,.055,S,6),Q(4600356,.98));P.position.set(v,X(v,d)+.045,d),P.rotation.set(.05+k(c,163)*.35,k(c,164)*Math.PI,Math.PI*.5+(k(c,165)-.5)*.5),M.add(P)}const Iy=new be({color:7308881,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.008}),Ly=new be({color:8491867,roughness:1,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.006}),bd=new be({map:He,color:5914669,roughness:.99,roughnessMap:we.rough,bumpMap:we.height,bumpScale:.026});for(let c=0;c<54;c++){const v=k(c,920)*Math.PI*2,d=18+k(c,921)*63,S=Math.cos(v)*d,P=Math.sin(v)*d+3;if(Math.abs(S)<12&&Math.abs(P)<20)continue;const R=new Ge;R.position.set(S,X(S,P)+.018,P);const O=.35+k(c,922)*.75,j=.28+k(c,923)*.65;for(let K=0;K<2;K++){const I=new B(new Hn(1,9),K%2?Ly:Iy);I.rotation.x=-Math.PI/2,I.scale.set(O*(1-K*.18),j*(1-K*.12),1),I.position.set((k(c+K,924)-.5)*.32,.006+K*.003,(k(c+K,925)-.5)*.28),R.add(I)}M.add(R)}const k0=new be({color:5533764,roughness:1}),O0=new be({color:7309137,roughness:1});for(let c=0;c<72;c++){const v=k(c,930)*Math.PI*2,d=20+k(c,931)*61,S=Math.cos(v)*d,P=Math.sin(v)*d+3;if(Math.abs(S)<13&&Math.abs(P)<21)continue;const R=new Ge;R.position.set(S,X(S,P),P);const O=.55+k(c,932)*.8;for(let j=0;j<3;j++){const K=new B(new Qe(.018*O,.035*O,.55*O,5),j===1?O0:k0);K.position.set((j-1)*.12*O,.27*O,(k(c,j+933)-.5)*.1*O),K.rotation.z=(j-1)*.3,K.rotation.x=(k(c,j+936)-.5)*.22,R.add(K);for(let I=0;I<3;I++){const J=new B(new hn(.045*O,.18*O,5),j===1?O0:k0);J.rotation.z=(j-1)*.3+(I%2?.18:-.18),J.rotation.x=Math.PI*.5,J.position.set((j-1)*.12*O+(I-1)*.075*O,.3*O+I*.1*O,(k(c,I+940)-.5)*.12*O),R.add(J)}}M.add(R),Nl.push({o:R,baseX:0,baseZ:0,phase:k(c,941)*Math.PI*2,amp:.022+.018*k(c,942)})}const Ad=(c,v,d,S)=>{const P=X(c,v),R=new Ge;R.position.set(c,P,v);const O=5+Math.floor(k(S,950)*3);for(let j=0;j<O;j++){const K=j/O*Math.PI*2+k(j,S+951)*.32,I=(1.8+k(j,S+952)*2.7)*d,J=(.11+k(j,S+953)*.12)*d,ee=new B(new Qe(J*.42,J,I,7),bd);ee.position.set(Math.cos(K)*I*.46,.13*d,Math.sin(K)*I*.46),ee.rotation.z=Math.PI/2,ee.rotation.y=-K,ee.rotation.x=(k(j,S+954)-.5)*.16,R.add(ee)}M.add(R)};Ad(-10,18,1.55,11),Ad(13,24,1.7,23),Ad(-31,-12,2.15,37);for(let c=0;c<22;c++){const v=k(c,960)*Math.PI*2,d=27+k(c,961)*55,S=Math.cos(v)*d,P=Math.sin(v)*d+3;if(Math.abs(S)<15&&Math.abs(P)<22)continue;const R=.55+k(c,962)*.8,O=new Ge;O.position.set(S,X(S,P),P);const j=new B(new Qe(.18*R,.3*R,.45*R,7),bd);j.position.y=.22*R,O.add(j);const K=new B(new Qe(.19*R,.19*R,.035*R,7),Q(8416080,1));K.position.y=.45*R,O.add(K),M.add(O)}for(let c=0;c<18;c++){const v=k(c,970)*Math.PI*2,d=24+k(c,971)*58,S=Math.cos(v)*d,P=Math.sin(v)*d+3;if(Math.abs(S)<14&&Math.abs(P)<21)continue;const R=1+k(c,972)*2,O=new B(new Qe(.045,.1,R,6),bd);O.position.set(S,X(S,P)+.07,P),O.rotation.set(.08+k(c,973)*.22,k(c,974)*Math.PI,Math.PI/2+(k(c,975)-.5)*.5),M.add(O)}const xs=new Ge;xs.position.set(29,X(29,25),25),xs.userData={id:"tower",label:"Сторожевая башня"};for(const c of[-2,2])for(const v of[-2,2]){const d=G(.35,7,.35,3942685,1);d.position.set(c,3.5,v),xs.add(d)}const z0=G(5,.35,5,6833965,1);z0.position.y=5.8,xs.add(z0);const B0=new B(new hn(3.8,2.7,4),Q(2696482,1));B0.position.y=8,xs.add(B0),me(xs,"tower","Сторожевая башня"),A.push(xs),Me(29,25,4.8,4.8,0,.08);const _a=(c,v,d,S,P,R)=>{const O=new Ge;O.userData={id:d,label:S,phase:R,baseX:c,baseZ:v};const j=new B(new ui(.32,.78,4,8),Q(P,.9));j.position.y=.85,O.add(j);const K=new B(new ut(.25,12,8),Q(13210736,.9));K.position.y=1.58,O.add(K);const I=G(.7,.9,.15,2565407,1);I.position.set(0,.82,-.27),O.add(I),O.position.set(c,X(c,v),v),me(O,d,S),A.push(O),he.push(O)};_a(9,-8,"elder","Старейшина",7558719,.4),_a(-6,-3,"blacksmith","Кузнец",6044459,1.5),_a(21,1,"hunter","Охотник",4215359,2.4),_a(5,10,"villager","Житель Мидгарда",5858125,3.4),_a(-16,4,"villager2","Житель деревни",6638394,4.2);const Dy=new wt({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),Cd=new Ge;for(let c=0;c<34;c++){const v=new B(new ut(.9+k(c,810)*2.2,8,6),Dy);v.position.set(-88+k(c,811)*176,1.8+k(c,812)*2.2,-72+k(c,813)*144),Cd.add(v)}M.add(Cd);const Rd=72,ys=new Float32Array(Rd*3);for(let c=0;c<Rd;c++){const v=k(c,1401)*Math.PI*2,d=12+k(c,1402)*74;ys[c*3]=Math.cos(v)*d,ys[c*3+1]=1+k(c,1403)*4.8,ys[c*3+2]=Math.sin(v)*d+3}const Vl=new cn;Vl.setAttribute("position",new Rt(ys,3));const Pd=new $x({color:15785902,size:.075,transparent:!0,opacity:.24,depthWrite:!1,sizeAttenuation:!0}),Ny=new AS(Vl,Pd);M.add(Ny);const Ms=zb(t);M.add(Ms);const hr=Ms.userData.anim,H0=new $S,Id=new et,V0=c=>{var S,P,R,O;if((P=(S=c.target)==null?void 0:S.closest)!=null&&P.call(S,".mid3d-ui"))return;const v=Y.domElement.getBoundingClientRect();Id.x=(c.clientX-v.left)/v.width*2-1,Id.y=-((c.clientY-v.top)/v.height)*2+1,H0.setFromCamera(Id,z);const d=H0.intersectObjects(A,!0)[0];if(d){let j=d.object;for(;j.parent&&!((R=j.userData)!=null&&R.id);)j=j.parent;(O=j.userData)!=null&&O.id&&e(j.userData.id)}};Y.domElement.addEventListener("pointerup",V0);const Uy=c=>{_.current=c,x(c),l(""),an.visible=c,ga.visible=!c,va.visible=!c,yd.visible=!c,Md.visible=!c,wd.visible=!c,c?(o.current.x=In,o.current.z=Mn+.95,f.current.x=0,f.current.z=-1,lo.rotation.y=-Math.PI/2):(o.current.x=In,o.current.z=Mn+3.75,f.current.x=0,f.current.z=1,lo.rotation.y=0),Ms.position.set(o.current.x,X(o.current.x,o.current.z)+.04,o.current.z)};y.current=Uy;const Fy=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:1,z:0,r:4.8},{id:"norns",label:"Прядильня норн",x:-52,z:38,r:5.4},{id:"rune",label:"Древний камень Феху",x:50,z:60,r:4.5},{id:"port",label:"Речной причал",x:-45,z:-48,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-5,z:75,r:7.5},{id:"threeThreads",label:"Камень Трёх Нитей — Колодец Урд",x:58,z:-28,r:6.8},{id:"forestCache",label:"Забытый тайник",x:-72,z:48,r:4.2},{id:"forestThread",label:"Разорванная нить",x:50,z:-62,r:4.2},{id:"runefield",label:"Поле Рун",x:18,z:55,r:8},{id:"oldfarm",label:"Старый хутор",x:-65,z:5,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:43,z:32,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:62,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:68,z:8,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:-45,z:75,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:-30,z:15,r:7.5},{id:"powerCircle",label:"Круг Силы — Монолит",x:5,z:-70,r:6.5},{id:"whisperStone",label:"Камень Шёпота",x:-72,z:-48,r:6.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],G0=()=>{const c=Math.max(1,T.clientWidth),v=Math.max(1,T.clientHeight);z.aspect=c/v,z.updateProjectionMatrix(),Y.setSize(c,v,!1)};G0();const W0=new ResizeObserver(G0);W0.observe(T);let Ld=0,X0=performance.now();const j0=c=>{const v=Math.min(.05,(c-X0)/1e3);X0=c;const d=o.current,S=Math.hypot(d.dx,d.dz);if(S>.05){const I=6.2*v;ot(d,d.x+d.dx/S*I,d.z+d.dz/S*I),Ms.rotation.y=Math.atan2(d.dx,d.dz),f.current.x=d.dx/S,f.current.z=d.dz/S,p(!0)}else p(!1);const P=X(d.x,d.z);if(Ms.position.set(d.x,P+.04,d.z),hr){const I=c*.011+hr.phase,J=S>.05?Math.sin(I)*.58:0,ee=S>.05?Math.sin(I+Math.PI)*.42:0;hr.legL.rotation.x=J,hr.legR.rotation.x=-J,hr.armL.upper.rotation.x=ee,hr.armR.upper.rotation.x=-ee,hr.armL.elbow.rotation.x=-Math.abs(ee)*.35,hr.armR.elbow.rotation.x=-Math.abs(ee)*.35,hr.weapon.rotation.z=-.12+(S>.05?Math.sin(I)*.035:0)}const R=f.current,O=_.current?new W(d.x-R.x*1,P+3.65,d.z-R.z*1):new W(d.x-R.x*2,P+7.2,d.z-R.z*2+11.8);z.position.lerp(O,_.current?.09:.055),z.lookAt(d.x+(_.current?R.x*.9:R.x*1.9),P+(_.current?1.25:1.2),d.z+(_.current?R.z*.9:R.z*1.9));let j="",K="";if(_.current)d.z>Mn+1.72&&(j="Дверь — выйти из дома",K="heroHomeExit");else for(const I of Fy)if(Math.hypot(d.x-I.x,d.z-I.z)<I.r){j=I.label,K=I.id;break}l(j?`${j}|${K}`:""),$u.forEach((I,J)=>{const ee=Math.sin(c*.00125+I.phase)*I.amp+Math.sin(c*63e-5+I.phase*1.7+J)*I.amp*.45;I.o.rotation.x=I.baseX+ee*.75,I.o.rotation.z=I.baseZ+ee}),Nl.forEach((I,J)=>{const ee=Math.sin(c*.0017+I.phase)*I.amp+Math.sin(c*91e-5+I.phase*1.9+J)*I.amp*.5;I.o.rotation.x=I.baseX+ee*.55,I.o.rotation.z=I.baseZ+ee});for(let I=0;I<Rd;I++){const J=I*3,ee=I*.73;ys[J]+=Math.sin(c*22e-5+ee)*.0018,ys[J+1]+=Math.sin(c*47e-5+ee*1.3)*.001,ys[J+2]+=Math.cos(c*19e-5+ee)*.0015}Vl.attributes.position.needsUpdate=!0,Pd.opacity=.19+.07*(.5+.5*Math.sin(c*55e-5)),Bt.forEach(I=>{const J=.72+.28*Math.sin(c*.0016+I.phase);I.mesh.scale.set(J,J*.42,J);const ee=I.mesh.material;ee.opacity=.055+.055*(.5+.5*Math.sin(c*.0016+I.phase))}),Ye.forEach(I=>{const J=Math.sin(c*55e-5*I.speed+I.phase)*.9;I.mesh.position.y=X(I.mesh.position.x,I.mesh.position.z)+.095+J*.008;const ee=I.mesh.material;ee.opacity=.045+.045*(.5+.5*Math.sin(c*.0011*I.speed+I.phase))}),re.forEach(I=>{I.light.intensity=2+Math.sin(c*.012+I.phase)*.5,I.flame.scale.y=.9+Math.sin(c*.009+I.phase)*.12}),Cd.children.forEach((I,J)=>{I.position.x+=Math.sin(c*12e-5+J)*.003,I.position.z+=Math.cos(c*1e-4+J)*.002}),xe.forEach((I,J)=>{var qe,ct;if(I.kind==="deer"){const Ct=I.g.position.x-Ms.position.x,Nt=I.g.position.z-Ms.position.z,Ot=Math.hypot(Ct,Nt);if(Ot<11){const Kt=((qe=I.g.userData)==null?void 0:qe.legJoints)||[],$t=c*.014*(I.speed||1);for(let Wt=0;Wt<4;Wt++){const wn=Kt[Wt*2],yi=Kt[Wt*2+1];wn&&(wn.rotation.z=Math.sin($t+Wt*Math.PI)*.1),yi&&(yi.rotation.z=Math.max(0,Math.sin($t+Wt*Math.PI))*-.18)}const Ut=Math.max(.001,Ot),Ft=Ot<5.5?.115:.075,fn=I.g.position.x+Ct/Ut*Ft,Bn=I.g.position.z+Nt/Ut*Ft,li=fn-30,Ve=Bn-53;if(Math.hypot(li,Ve)<17)I.g.position.set(fn,X(fn,Bn),Bn);else{const Wt=Math.atan2(Ve,li),wn=30+Math.cos(Wt)*16,yi=53+Math.sin(Wt)*10;I.g.position.set(wn,X(wn,yi),yi)}I.g.rotation.y=Math.atan2(Nt,Ct),I.g.position.y+=Math.sin(c*.008+J)*.025;return}}const ee=c*.00105*I.speed+I.phase,Se=I.x+Math.cos(ee)*I.r,ge=I.z+Math.sin(ee*.83)*I.r*.62;if(I.g.position.set(Se,X(Se,ge),ge),I.g.rotation.y=Math.atan2(Math.cos(ee*.83),-Math.sin(ee)),I.kind==="deer"){const Ct=((ct=I.g.userData)==null?void 0:ct.legJoints)||[],Nt=c*.014*(I.speed||1);for(let Ot=0;Ot<4;Ot++){const Kt=Ct[Ot*2],$t=Ct[Ot*2+1];Kt&&(Kt.rotation.z=Math.sin(Nt+Ot*Math.PI)*.1),$t&&($t.rotation.z=Math.max(0,Math.sin(Nt+Ot*Math.PI))*-.18)}I.g.position.y+=Math.sin(c*.006+J)*.025,I.g.rotation.x=Math.sin(c*.004+I.phase)*.018}}),he.forEach((I,J)=>{const ee=I.userData.phase||0,Se=I.userData.baseX,ge=I.userData.baseZ,qe=Se+Math.sin(c*28e-5+ee)*1.6,ct=ge+Math.cos(c*22e-5+ee)*1.1;I.position.set(qe,X(qe,ct),ct),I.rotation.y=Math.sin(c*4e-4+ee)*.5}),ze.forEach((I,J)=>{const ee=I.material;ee.opacity=.48+Math.sin(c*55e-5+J*1.7)*.07,I.rotation.z+=Math.sin(c*18e-5+J)*8e-5}),Ie.forEach((I,J)=>{I.material.opacity=.024+Math.sin(c*42e-5+J*2.1)*.008}),Y.render(M,z),Ld=requestAnimationFrame(j0)};return Ld=requestAnimationFrame(j0),()=>{cancelAnimationFrame(Ld),W0.disconnect(),Y.domElement.removeEventListener("pointerup",V0),Bt.forEach(c=>{c.mesh.geometry.dispose(),c.mesh.material.dispose()}),Ye.forEach(c=>{c.mesh.geometry.dispose(),c.mesh.material.dispose()}),nt.dispose(),oi.dispose(),jn.dispose(),ue.dispose(),Pe.dispose(),ze.forEach(c=>{c.geometry.dispose(),c.material.dispose()}),Ie.forEach(c=>{c.geometry.dispose(),c.material.dispose()}),Y.dispose(),Vl.dispose(),Pd.dispose(),M.traverse(c=>{var v,d,S,P;c.isMesh&&((d=(v=c.geometry)==null?void 0:v.dispose)==null||d.call(v),Array.isArray(c.material)?c.material.forEach(R=>{var O;return(O=R.dispose)==null?void 0:O.call(R)}):(P=(S=c.material)==null?void 0:S.dispose)==null||P.call(S))}),Y.domElement.remove(),y.current=null}},[t.id,e,n]);const E=T=>{const M=r.current,z=s.current;if(!M||!z)return;const Y=M.getBoundingClientRect(),se=Y.left+Y.width/2,ce=Y.top+Y.height/2,fe=48;let X=T.clientX-se,ne=T.clientY-ce;const H=Math.hypot(X,ne);H>fe&&(X=X/H*fe,ne=ne/H*fe),z.style.transform=`translate(${X}px,${ne}px)`,o.current.dx=X/fe,o.current.dz=ne/fe},L=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},D=T=>{var ne,H;const M=r.current;if(!M)return;const z=T.target;if((ne=z.closest)!=null&&ne.call(z,".mid3d-action")||(H=z.closest)!=null&&H.call(z,".mid3d-interact"))return;const Y=M.getBoundingClientRect(),se=26;T.clientX>=Y.left-se&&T.clientX<=Y.right+se&&T.clientY>=Y.top-78&&T.clientY<=Y.bottom+26&&(T.currentTarget.setPointerCapture(T.pointerId),E(T))},N=T=>{T.currentTarget.hasPointerCapture(T.pointerId)&&E(T)},F=T=>{T.currentTarget.hasPointerCapture(T.pointerId)&&T.currentTarget.releasePointerCapture(T.pointerId),L()};return $.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:D,onPointerMove:N,onPointerUp:F,onPointerCancel:F,onContextMenu:T=>T.preventDefault(),children:[$.jsxs("div",{className:"mid3d-ui mid3d-top",children:[$.jsxs("div",{className:"mid3d-pill",children:[$.jsx("b",{children:"МИДГАРД"}),$.jsx("span",{children:"Деревня • река • лес • святилища"})]}),$.jsxs("div",{className:"mid3d-pill",children:[$.jsx("b",{children:"ᛟ"}),$.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),g&&!n&&$.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[$.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),$.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{w(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{w(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{w(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),g&&n&&$.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[$.jsx("b",{children:"Камень Трёх Нитей"}),$.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>w(!1),children:"Продолжить путь"})]}),h&&$.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[$.jsx("b",{children:"🜂 Круг Силы"}),$.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),$.jsx("button",{onPointerDown:T=>T.stopPropagation(),onClick:()=>{m(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!h&&!g&&(()=>{const[T,M]=a.split("|"),z=M==="heroHome"||M==="heroHomeExit";return $.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[$.jsx("b",{children:T}),$.jsx("span",{children:z?M==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),$.jsx("button",{onPointerDown:Y=>Y.stopPropagation(),onClick:()=>{var Y,se;M==="powerCircle"?m(!0):M==="threeThreads"?w(!0):M==="heroHome"?(Y=y.current)==null||Y.call(y,!0):M==="heroHomeExit"?(se=y.current)==null||se.call(y,!1):e(M)},children:z?M==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),$.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:$.jsx("div",{className:"mid3d-knob",ref:s})}),$.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:T=>T.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),$.jsx("div",{className:"mid3d-ui mid3d-hint",children:b?u?"Ты внутри дома":"Дом героя • отдых • сундук • выход":u?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function Hb(){const[t,e]=bt.useState(()=>dv().hero?{t:"tree"}:{t:"choose"}),[n,i]=bt.useState(dv),[r,s]=bt.useState(""),[o,a]=bt.useState(""),[l,u]=bt.useState(""),p=bt.useRef(0),[h,m]=bt.useState(null),[g,w]=bt.useState(null),[b,x]=bt.useState(!1),[f,_]=bt.useState(0),[y,E]=bt.useState(0),[L,D]=bt.useState(0),[N,F]=bt.useState(""),[T,M]=bt.useState(!1),[z,Y]=bt.useState(!1),[se,ce]=bt.useState(""),[fe,X]=bt.useState(.06);bt.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),bt.useEffect(()=>{var q,me,Q,G;(q=Pt==null?void 0:Pt.ready)==null||q.call(Pt),(me=Pt==null?void 0:Pt.expand)==null||me.call(Pt),(Q=Pt==null?void 0:Pt.setHeaderColor)==null||Q.call(Pt,"#0b0f0c"),(G=Pt==null?void 0:Pt.setBackgroundColor)==null||G.call(Pt,"#0b0f0c")},[]),bt.useEffect(()=>{if(!(Pt!=null&&Pt.BackButton))return;const q=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(Pt.BackButton.show(),Pt.BackButton.onClick(q)):Pt.BackButton.hide(),()=>{var me,Q;(Q=(me=Pt.BackButton)==null?void 0:me.offClick)==null||Q.call(me,q)}},[t,n.hero]),bt.useEffect(()=>{m(null),w(null),x(!1),ce(""),M(!1)},[t]);const ne=q=>{u(q),window.clearTimeout(p.current),p.current=window.setTimeout(()=>u(""),1800)},H=(q="light")=>{var me,Q,G,Xe;try{q==="success"?(Q=(me=Pt==null?void 0:Pt.HapticFeedback)==null?void 0:me.notificationOccurred)==null||Q.call(me,"success"):(Xe=(G=Pt==null?void 0:Pt.HapticFeedback)==null?void 0:G.impactOccurred)==null||Xe.call(G,"light")}catch{}},oe=q=>e(q),ue=q=>{H(),e({t:"realm",id:q.id})},Pe=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),ze=()=>{const q=Pe();if(q<=0){ne("Дозор только начался — искры ещё копятся.");return}i(me=>({...me,sparks:me.sparks+q,watch:Date.now()})),H("success"),ne("Дозор завершён: +"+q+" ✨")},_t=()=>{if(n.gift===Na())return;const me=(n.gift?Math.round((Date.parse(Na())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,Q=Wf[me-1];i(G=>({...G,sparks:G.sparks+Q,gift:Na(),streak:me})),H("success"),ne("Дар Древа, день "+me+": +"+Q+" ✨")},ft=()=>{!r||!o||(i(q=>({...q,hero:{id:r,name:o}})),H("success"),ne("Путь начинается, "+o+"!"),e({t:"tree"}))},Ie=n.hero?Xf.find(q=>q.id===n.hero.id):null,pe=q=>Math.floor(Math.random()*q),_e=q=>n.trials.filter(me=>me.startsWith(q+":")).length,we=q=>{if(n.artifacts.includes(q.id)){ne("Мир покорён. Артефакт хранится в листе героя.");return}H(),e({t:"trial",id:q.id})},nt=(q,me,Q)=>{const G=me===2;i(Xe=>({...Xe,sparks:Xe.sparks+Q+(G?30:0),trials:[...Xe.trials,q+":"+me],artifacts:G?[...Xe.artifacts,q]:Xe.artifacts})),G&&(H("success"),ne("Мир пройден! Артефакт: "+qf[q]))},He=(q,me)=>{if(h!==null)return;const Q=_e(q),G=jf[q][Q];if(me===G.c){m(me),H("success");const Xe=12+Q*3+((Ie==null?void 0:Ie.id)==="dwarf"?6:0);ne("Верно! Сундук хозяина: +"+Xe+" ✨"),nt(q,Q,Xe);return}if(n.powers.includes("mimirEye")){m(G.c),i(Ke=>({...Ke,powers:Ke.powers.filter(U=>U!=="mimirEye")}));const Xe=8+Q*2;H("success"),ne("Око Мимира раскрыло истину. Ответ исправлен. +"+Xe+" ✨"),nt(q,Q,Xe);return}if(n.powers.includes("nornThread")){m(me),i(Ke=>({...Ke,powers:Ke.powers.filter(U=>U!=="nornThread")}));const Xe=6+Q*2;H("success"),ne("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+Xe+" ✨"),nt(q,Q,Xe);return}m(me),H(),F(Ua[q].name+" мрачнеет: «Что ж — пусть решит сталь!»")},ht=q=>{const me=_e(q),Q=jf[q][me],G=Q.a.findIndex((Xe,Ke)=>Ke!==Q.c&&Ke!==g);w(G),x(!0),H(),ne("Шёпот ветров уносит один ответ...")},on=q=>{const me=Ua[q],Q=n.powers.includes("ashBreath");_(me.hp),E(Ie.hp+(Q?25:0)),D(Ie.en+(Q?2:0)),ce(""),M(!1),Y(!1),F(Q?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":me.name+" поднимает оружие!"),Q&&i(G=>({...G,powers:G.powers.filter(Xe=>Xe!=="ashBreath")})),e({t:"fight",id:q})},V=(q,me)=>{if(se)return;const Q=Ua[q],G=_e(q);let Xe=0,Ke="",U=L,A=T;if(me==="hit"&&(Xe=Ie.str+pe(4),n.powers.includes("fireOath")&&(Xe+=5,i(Ne=>({...Ne,powers:Ne.powers.filter(Me=>Me!=="fireOath")})),Ke="Огненный обет! "),Ie.id==="berserk"&&y<=Ie.hp/2&&(Xe*=2,Ke+="Медвежья ярость! "),Ke+="Ты бьёшь: "+Ie.weapon+" — −"+Xe+" хозяину."),me==="rune"){if(L<4){ne("Мало энергии для заклинания!");return}U=L-4,Xe=Ie.en+2+pe(5),Ke="Руническое заклинание вспыхивает: −"+Xe+" хозяину."}me==="shield"&&(A=!0,Ke="Ты поднимаешь щит — удар ослабнет.");const re=f-Xe;if(re<=0){_(0),D(U),ce("win");const Ne=8+G*2;F("Хозяин повержен! Награда: +"+Ne+" ✨"),nt(q,G,Ne);return}let he=Q.atk+pe(3),xe="";A&&(he=Math.ceil(he*.3),xe=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(he=Math.ceil(he*.65),i(Ne=>({...Ne,powers:Ne.powers.filter(Me=>Me!=="iceOath")})),xe+=" Ледяной обет сковал удар врага."),Ie.id==="dwarf"&&(he=Math.ceil(he*.75));let de=y;if(Ie.id==="viking"&&!z&&de-he<=0&&(Y(!0),he=0,xe=" Крылья бури поглотили смертельный удар!"),de=de-he,_(re),E(Math.max(0,de)),D(U),M(!1),de<=0&&n.powers.includes("yggdrasilCall")){i(Ne=>({...Ne,powers:Ne.powers.filter(Me=>Me!=="yggdrasilCall")})),E(30),F(Ke+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(de<=0){ce("lose"),i(Ne=>({...Ne,sparks:Math.max(0,Ne.sparks-10)})),F(Ke+" "+Q.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}F(Ke+xe+" "+Q.name+" отвечает: −"+he+".")},zt=q=>{_e(q)>=3||n.artifacts.includes(q)?e({t:"realm",id:q}):e({t:"trial",id:q})},at=q=>q==="tree"?t.t==="tree"||t.t==="realm":t.t===q,it=q=>q==="tree"?{t:"tree"}:{t:q};return $.jsxs("div",{className:"app",children:[$.jsx("style",{children:kb}),$.jsxs("div",{className:"hdr",children:[t.t==="tree"&&$.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&$.jsx("button",{className:"back",onClick:()=>oe({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&$.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&$.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&$.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&$.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&$.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&$.jsx("div",{className:"title",children:"⚔ Бой"}),$.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&$.jsxs("div",{className:"scroll choose-screen",children:[$.jsxs("div",{className:"card center choose-intro",children:[$.jsx("div",{className:"big",children:"ᛉ"}),$.jsx("div",{className:"qhead2",children:"Выбери героя"}),$.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),Xf.map(q=>$.jsxs("button",{className:"hcard"+(r===q.id?" on":""),onClick:()=>{s(q.id),a(""),H()},children:[$.jsx("span",{className:"hface",style:{borderColor:q.color,color:q.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:$.jsx(Vr,{name:q.img,className:"himg"})}),$.jsxs("span",{className:"hinfo",children:[$.jsx("span",{className:"hname",style:{color:q.color},children:q.race}),$.jsxs("span",{className:"hab",children:["🌀 ",q.ability,": ",q.abilityDesc]}),$.jsxs("span",{className:"hst",children:["⚔ ",q.str," • ✨ ",q.en," • ❤ ",q.hp]}),$.jsxs("span",{className:"hw",children:["🗡 ",q.weapon]})]})]},q.id)),r&&$.jsxs("div",{className:"card",children:[$.jsx("div",{className:"qhead2",children:"Имя героя"}),$.jsx("div",{className:"chips",children:(Xf.find(q=>q.id===r).gender==="f"?Ub:Fb).map(q=>$.jsx("button",{className:"chip"+(o===q?" on":""),onClick:()=>{a(q),H()},children:q},q))})]}),$.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:ft,children:"Вступить на путь"})]}),t.t==="tree"&&$.jsxs("div",{className:"maparea",children:[$.jsx("div",{className:"mapwrap",children:$.jsxs("div",{className:"mapcanvas",children:[$.jsx(Vr,{name:"tree",className:"mapimg"}),Lc.map(q=>$.jsxs("button",{className:"marker",style:{left:q.x+"%",top:q.y+"%"},onClick:()=>ue(q),children:[$.jsxs("div",{className:"amulet-wrap",children:[$.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${q.glow}, transparent 70%)`}}),$.jsx("div",{className:"amulet-ring",style:{borderColor:q.color}}),$.jsx("div",{className:"amulet-core",style:{borderColor:q.color,color:q.color,background:`linear-gradient(135deg, ${q.dark}, #0a0a0a)`},children:q.runeSym})]}),$.jsx("span",{className:"mname",style:{color:q.color,borderColor:q.glow},children:q.name})]},q.id))]})}),$.jsx("div",{className:"fadeT"}),$.jsx("div",{className:"fadeB"}),$.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&Ie&&n.hero&&$.jsxs("button",{className:"herobar",onClick:()=>oe({t:"hero"}),children:[$.jsxs("span",{className:"hbface",style:{borderColor:Ie.color,color:Ie.color},children:[$.jsx(Vr,{name:Ie.img,className:"hbimg"}),Ie.sym]}),$.jsxs("span",{className:"hbname",children:[n.hero.name,$.jsx("i",{children:Ie.race})]}),$.jsxs("span",{className:"hbst",children:["⚔ ",Ie.str," ✨ ",Ie.en," ⏳ ",Pe()]}),$.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const q=Lc.find(me=>me.id===t.id);if(q.id==="midgard"){if(!Ie)return null;const me=Q=>{if(H(),Q==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?ne("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(G=>({...G,sparks:G.sparks+20,done:[...new Set([...G.done,"forest:present:reward"])]})),H("success"),ne("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):ne("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(Q==="norns"){ne("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(Q==="threeThreads"){ne("У колодца Урд три Норны прядут нити судьбы. Серебряная, золотая и алая нить сплетаются над водой в знак того, что прошлое, настоящее и будущее связаны.");return}if(Q==="forge"||Q==="blacksmith"){ne("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(Q==="house"||Q==="elder"){ne("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(Q==="port"){ne("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(Q==="rune"){ne("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(Q==="ashgrove"){ne("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(Q==="runefield"){ne("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(Q==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?ne("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(G=>({...G,sparks:G.sparks+20,done:[...new Set([...G.done,"forest:past:reward"])]})),H("success"),ne("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):ne("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(Q==="forestCache"){n.done.includes("forest:cache")?ne("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(G=>({...G,sparks:G.sparks+18,done:[...new Set([...G.done,"forest:cache"])]})),H("success"),ne("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(Q==="forestWhisper"){n.done.includes("forest:whisper")?ne("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(G=>({...G,sparks:G.sparks+16,done:[...new Set([...G.done,"forest:whisper"])]})),H("success"),ne("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(Q==="forestThread"){n.done.includes("forest:thread")?ne("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(G=>({...G,sparks:G.sparks+22,done:[...new Set([...G.done,"forest:thread"])]})),H("success"),ne("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(Q==="heroHome"){ne("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(Q==="hunterCamp"){n.done.includes("forest:camp")?ne("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(G=>({...G,sparks:G.sparks+14,done:[...new Set([...G.done,"forest:camp"])]})),H("success"),ne("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(Q==="deepGrove"){n.done.includes("forest:grove")?ne("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(G=>({...G,sparks:G.sparks+17,done:[...new Set([...G.done,"forest:grove"])]})),H("success"),ne("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(Q==="fallenAsh"){n.done.includes("forest:ash")?ne("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(G=>({...G,sparks:G.sparks+21,done:[...new Set([...G.done,"forest:ash"])]})),H("success"),ne("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(Q==="deer"){ne("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(Q==="hoddmimir"){ne("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(Q==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?ne("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(G=>({...G,sparks:G.sparks+20,done:[...new Set([...G.done,"forest:future:reward"])]})),H("success"),ne("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):ne("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(Q==="forestEvent"){n.done.includes("forest:choice")&&ne("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(Q==="forestEvent:past"){i(G=>({...G,sparks:G.sparks+12,done:[...new Set([...G.done,"forest:choice","forest:past"])]})),H("success"),ne("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(Q==="forestEvent:present"){i(G=>({...G,sparks:G.sparks+12,done:[...new Set([...G.done,"forest:choice","forest:present"])]})),H("success"),ne("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(Q==="forestEvent:future"){i(G=>({...G,sparks:G.sparks+12,done:[...new Set([...G.done,"forest:choice","forest:future"])]})),H("success"),ne("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(Q==="event"){ne("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(Q.startsWith("ritual:")){const G=Q.slice(7),Xe={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},U={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[G];if(!U)return;if(n.powers.includes(U)){ne(Xe[G]+" уже пробуждён. Его сила ждёт своего часа.");return}i(re=>({...re,powers:[...new Set([...re.powers,U])],done:[...new Set([...re.done,"ritual:"+G])]}));const A={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};H("success"),ne(A[G]);return}};return $.jsx(Bb,{h:Ie,on:me,eventDone:n.done.includes("forest:choice")})}return $.jsxs("div",{className:"content",children:[$.jsx(Vr,{name:q.id,className:"bgimg"}),$.jsx("div",{className:"veil"}),$.jsxs("div",{className:"banner",children:[$.jsx("span",{className:"bemoji",children:q.emoji}),$.jsxs("div",{children:[$.jsx("div",{className:"bname",children:q.name}),$.jsx("div",{className:"btag",children:q.tag})]})]}),$.jsxs("button",{className:"gate",onClick:()=>we(q),children:[$.jsxs("span",{className:"gwrap",children:[$.jsx("span",{className:"gate-ring",style:{borderColor:q.color}}),$.jsx("span",{className:"gate-core",style:{borderColor:q.color,color:q.color,background:`radial-gradient(circle, ${q.dark}, #050705 75%)`},children:q.runeSym})]}),$.jsx("span",{className:"mname",style:{color:q.color,borderColor:q.glow},children:n.artifacts.includes(q.id)?"Мир покорён":"Врата мира"})]}),$.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const q=Lc.find(Xe=>Xe.id===t.id),me=Ua[q.id],Q=_e(q.id);if(Q>=3)return $.jsx("div",{className:"scroll",children:$.jsxs("div",{className:"card center",children:[$.jsx("div",{className:"big",children:"🏺"}),$.jsx("div",{className:"qhead2",children:"Мир покорён!"}),$.jsxs("p",{className:"dim",children:["Артефакт: ",qf[q.id]]}),$.jsx("button",{className:"btn gold",onClick:()=>oe({t:"realm",id:q.id}),children:"К вратам"})]})});const G=jf[q.id][Q];return $.jsxs("div",{className:"scroll",children:[$.jsxs("div",{className:"mhead",children:[$.jsxs("span",{className:"mface",style:{borderColor:q.color,color:q.color},children:[$.jsx(Vr,{name:fv[q.id],className:"himg"}),me.sym]}),$.jsx("span",{className:"mname2",style:{color:q.color},children:me.name}),$.jsxs("span",{className:"mtitle",children:[me.title," • испытание ",Q+1," из 3"]})]}),Q===0&&$.jsxs("div",{className:"greet",children:["«",me.greet,"»"]}),$.jsxs("div",{className:"cloud",children:[$.jsx("div",{className:"riddle",children:G.q}),G.a.map((Xe,Ke)=>$.jsx("button",{className:"ans"+(h!==null?Ke===G.c?" good":Ke===h?" bad":" off":g===Ke?" off":""),onClick:()=>He(q.id,Ke),children:Xe},Ke)),(Ie==null?void 0:Ie.id)==="elf"&&!b&&h===null&&$.jsx("button",{className:"btn rune",onClick:()=>ht(q.id),children:"🌀 Шёпот ветров"}),h!==null&&(h===G.c?$.jsx("button",{className:"btn gold",onClick:()=>zt(q.id),children:"Открыть сундук →"}):$.jsx("button",{className:"btn",onClick:()=>on(q.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const q=Lc.find(Q=>Q.id===t.id),me=Ua[q.id];return $.jsxs("div",{className:"scroll",children:[$.jsxs("div",{className:"duel",children:[$.jsxs("div",{className:"dside",children:[$.jsxs("span",{className:"dface",style:{borderColor:q.color,color:q.color},children:[$.jsx(Vr,{name:fv[q.id],className:"himg"}),me.sym]}),$.jsx("span",{className:"dname",style:{color:q.color},children:me.name}),$.jsx("span",{className:"dhp",children:$.jsx("span",{className:"dhpfill",style:{width:Math.max(0,f/me.hp*100)+"%",background:q.color}})}),$.jsxs("span",{className:"dnum",children:[f,"/",me.hp]})]}),$.jsx("span",{className:"dvs",children:"⚔"}),$.jsxs("div",{className:"dside",children:[$.jsxs("span",{className:"dface",style:{borderColor:Ie.color,color:Ie.color},children:[$.jsx(Vr,{name:Ie.img,className:"himg"}),Ie.sym]}),$.jsx("span",{className:"dname",style:{color:Ie.color},children:n.hero.name}),$.jsx("span",{className:"dhp",children:$.jsx("span",{className:"dhpfill",style:{width:Math.max(0,y/Ie.hp*100)+"%",background:"#7ee787"}})}),$.jsx("span",{className:"denergy",children:Array.from({length:Ie.en}).map((Q,G)=>$.jsx("span",{className:"pip"+(G<L?" on":"")},G))})]})]}),$.jsx("div",{className:"flog",children:N}),!se&&$.jsxs("div",{className:"acts",children:[$.jsxs("button",{className:"btn gold",onClick:()=>V(q.id,"hit"),children:["⚔ Удар: ",Ie.weapon]}),$.jsx("button",{className:"btn rune",onClick:()=>V(q.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),$.jsx("button",{className:"btn shield",onClick:()=>V(q.id,"shield"),children:"🛡 Щит"})]}),se==="win"&&$.jsx("button",{className:"btn gold",onClick:()=>zt(q.id),children:"Забрать награду →"}),se==="lose"&&$.jsx("button",{className:"btn ghost",onClick:()=>oe({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&Ie&&n.hero&&$.jsx("div",{className:"scroll",children:$.jsxs("div",{className:"card center",children:[$.jsx("span",{className:"hface bigface",style:{borderColor:Ie.color,color:Ie.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:$.jsx(Vr,{name:Ie.img,className:"himg"})}),$.jsxs("div",{className:"qhead2",style:{color:Ie.color},children:[n.hero.name," • ",Ie.race]}),$.jsxs("div",{className:"stats",children:[$.jsxs("div",{className:"stat",children:[$.jsxs("b",{children:["⚔ ",Ie.str]}),$.jsx("span",{children:"сила"})]}),$.jsxs("div",{className:"stat",children:[$.jsxs("b",{children:["✨ ",Ie.en]}),$.jsx("span",{children:"энергия"})]}),$.jsxs("div",{className:"stat",children:[$.jsxs("b",{children:["❤ ",Ie.hp]}),$.jsx("span",{children:"здоровье"})]})]}),$.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",$.jsx("b",{children:Ie.weapon})]}),$.jsxs("div",{className:"hrow",children:["🌀 ",Ie.ability,": ",Ie.abilityDesc]}),$.jsxs("div",{className:"hrow",children:["✨ Искр: ",$.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",$.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&$.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(q=>qf[q]).join(", ")]})]})}),t.t==="gift"&&(()=>{const q=n.gift===Na(),Q=(n.gift?Math.round((Date.parse(Na())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,G=q?n.streak:Q;return $.jsxs("div",{className:"scroll",children:[$.jsxs("div",{className:"card center",children:[$.jsx("div",{className:"big",children:"🎁"}),$.jsx("div",{className:"qhead2",children:"Дар Древа"}),$.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),$.jsx("div",{className:"days",children:Wf.map((Xe,Ke)=>$.jsxs("span",{className:"day"+(Ke+1===G?" on":Ke+1<G&&q?" done":""),children:[$.jsx("b",{children:Xe}),"день ",Ke+1]},Ke))}),q?$.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):$.jsxs("button",{className:"btn gold",onClick:_t,children:["Забрать дар +",Wf[Q-1]," ✨"]})]}),$.jsxs("div",{className:"card center",children:[$.jsx("div",{className:"big",children:"⏳"}),$.jsx("div",{className:"qhead2",children:"Дозор героя"}),$.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),$.jsxs("button",{className:"btn gold",onClick:ze,children:["Завершить дозор · +",Pe()," ✨"]})]})]})})(),t.t==="hall"&&$.jsx("div",{className:"scroll",children:$.jsxs("div",{className:"card center",children:[$.jsx("div",{className:"big",children:"🏛️"}),$.jsx("div",{className:"qhead2",children:"Чертог путника"}),$.jsxs("div",{className:"stats",children:[$.jsxs("div",{className:"stat",children:[$.jsxs("b",{children:["✨ ",n.sparks]}),$.jsx("span",{children:"Искр"})]}),$.jsxs("div",{className:"stat",children:[$.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),$.jsx("span",{children:"артефакты"})]})]}),$.jsxs("div",{className:"rank",children:["🏆 Ранг: ",Nb(n.sparks)]}),n.hero&&Ie&&$.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",Ie.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&$.jsx("div",{className:"nav",children:Db.map(q=>$.jsxs("button",{className:"navbtn"+(at(q.id)?" on":""),onClick:()=>oe(it(q.id)),children:[$.jsx("span",{className:"ic",children:q.ic}),q.t]},q.id))}),l&&$.jsx("div",{className:"toast",children:l})]})}Ax(document.getElementById("root")).render($.jsx(Hb,{}));
