(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var lv={exports:{}},nu={},cv={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sl=Symbol.for("react.element"),px=Symbol.for("react.portal"),mx=Symbol.for("react.fragment"),gx=Symbol.for("react.strict_mode"),vx=Symbol.for("react.profiler"),_x=Symbol.for("react.provider"),xx=Symbol.for("react.context"),yx=Symbol.for("react.forward_ref"),Mx=Symbol.for("react.suspense"),Sx=Symbol.for("react.memo"),wx=Symbol.for("react.lazy"),Vm=Symbol.iterator;function Ex(t){return t===null||typeof t!="object"?null:(t=Vm&&t[Vm]||t["@@iterator"],typeof t=="function"?t:null)}var uv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dv=Object.assign,fv={};function Wo(t,e,n){this.props=t,this.context=e,this.refs=fv,this.updater=n||uv}Wo.prototype.isReactComponent={};Wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hv(){}hv.prototype=Wo.prototype;function zh(t,e,n){this.props=t,this.context=e,this.refs=fv,this.updater=n||uv}var Bh=zh.prototype=new hv;Bh.constructor=zh;dv(Bh,Wo.prototype);Bh.isPureReactComponent=!0;var Gm=Array.isArray,pv=Object.prototype.hasOwnProperty,Hh={current:null},mv={key:!0,ref:!0,__self:!0,__source:!0};function gv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pv.call(e,i)&&!mv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:sl,type:t,key:s,ref:o,props:r,_owner:Hh.current}}function Tx(t,e){return{$$typeof:sl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===sl}function Ax(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wm=/\/+/g;function Gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ax(""+t.key):e.toString(36)}function uc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sl:case px:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Gu(o,0):i,Gm(r)?(n="",t!=null&&(n=t.replace(Wm,"$&/")+"/"),uc(r,e,n,"",function(c){return c})):r!=null&&(Vh(r)&&(r=Tx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Wm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Gm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Gu(s,a);o+=uc(s,e,n,l,r)}else if(l=Ex(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Gu(s,a++),o+=uc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ml(t,e,n){if(t==null)return t;var i=[],r=0;return uc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function bx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ti={current:null},dc={transition:null},Cx={ReactCurrentDispatcher:ti,ReactCurrentBatchConfig:dc,ReactCurrentOwner:Hh};function vv(){throw Error("act(...) is not supported in production builds of React.")}xt.Children={map:Ml,forEach:function(t,e,n){Ml(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ml(t,function(){e++}),e},toArray:function(t){return Ml(t,function(e){return e})||[]},only:function(t){if(!Vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};xt.Component=Wo;xt.Fragment=mx;xt.Profiler=vx;xt.PureComponent=zh;xt.StrictMode=gx;xt.Suspense=Mx;xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cx;xt.act=vv;xt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=dv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)pv.call(e,l)&&!mv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:sl,type:t.type,key:r,ref:s,props:i,_owner:o}};xt.createContext=function(t){return t={$$typeof:xx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_x,_context:t},t.Consumer=t};xt.createElement=gv;xt.createFactory=function(t){var e=gv.bind(null,t);return e.type=t,e};xt.createRef=function(){return{current:null}};xt.forwardRef=function(t){return{$$typeof:yx,render:t}};xt.isValidElement=Vh;xt.lazy=function(t){return{$$typeof:wx,_payload:{_status:-1,_result:t},_init:bx}};xt.memo=function(t,e){return{$$typeof:Sx,type:t,compare:e===void 0?null:e}};xt.startTransition=function(t){var e=dc.transition;dc.transition={};try{t()}finally{dc.transition=e}};xt.unstable_act=vv;xt.useCallback=function(t,e){return ti.current.useCallback(t,e)};xt.useContext=function(t){return ti.current.useContext(t)};xt.useDebugValue=function(){};xt.useDeferredValue=function(t){return ti.current.useDeferredValue(t)};xt.useEffect=function(t,e){return ti.current.useEffect(t,e)};xt.useId=function(){return ti.current.useId()};xt.useImperativeHandle=function(t,e,n){return ti.current.useImperativeHandle(t,e,n)};xt.useInsertionEffect=function(t,e){return ti.current.useInsertionEffect(t,e)};xt.useLayoutEffect=function(t,e){return ti.current.useLayoutEffect(t,e)};xt.useMemo=function(t,e){return ti.current.useMemo(t,e)};xt.useReducer=function(t,e,n){return ti.current.useReducer(t,e,n)};xt.useRef=function(t){return ti.current.useRef(t)};xt.useState=function(t){return ti.current.useState(t)};xt.useSyncExternalStore=function(t,e,n){return ti.current.useSyncExternalStore(t,e,n)};xt.useTransition=function(){return ti.current.useTransition()};xt.version="18.3.1";cv.exports=xt;var Mt=cv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rx=Mt,Px=Symbol.for("react.element"),Lx=Symbol.for("react.fragment"),Dx=Object.prototype.hasOwnProperty,Ix=Rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nx={key:!0,ref:!0,__self:!0,__source:!0};function _v(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Dx.call(e,i)&&!Nx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Px,type:t,key:s,ref:o,props:r,_owner:Ix.current}}nu.Fragment=Lx;nu.jsx=_v;nu.jsxs=_v;lv.exports=nu;var W=lv.exports,xv={exports:{}},Mi={},yv={exports:{}},Mv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,ee){var re=U.length;U.push(ee);e:for(;0<re;){var Ee=re-1>>>1,Fe=U[Ee];if(0<r(Fe,ee))U[Ee]=ee,U[re]=Fe,re=Ee;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var ee=U[0],re=U.pop();if(re!==ee){U[0]=re;e:for(var Ee=0,Fe=U.length,ct=Fe>>>1;Ee<ct;){var Pe=2*(Ee+1)-1,oe=U[Pe],B=Pe+1,pe=U[B];if(0>r(oe,re))B<Fe&&0>r(pe,oe)?(U[Ee]=pe,U[B]=re,Ee=B):(U[Ee]=oe,U[Pe]=re,Ee=Pe);else if(B<Fe&&0>r(pe,re))U[Ee]=pe,U[B]=re,Ee=B;else break e}}return ee}function r(U,ee){var re=U.sortIndex-ee.sortIndex;return re!==0?re:U.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,p=!1,y=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var ee=n(c);ee!==null;){if(ee.callback===null)i(c);else if(ee.startTime<=U)i(c),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(c)}}function S(U){if(w=!1,x(U),!y)if(n(l)!==null)y=!0,H(R);else{var ee=n(c);ee!==null&&q(S,ee.startTime-U)}}function R(U,ee){y=!1,w&&(w=!1,u(I),I=-1),p=!0;var re=h;try{for(x(ee),f=n(l);f!==null&&(!(f.expirationTime>ee)||U&&!N());){var Ee=f.callback;if(typeof Ee=="function"){f.callback=null,h=f.priorityLevel;var Fe=Ee(f.expirationTime<=ee);ee=t.unstable_now(),typeof Fe=="function"?f.callback=Fe:f===n(l)&&i(l),x(ee)}else i(l);f=n(l)}if(f!==null)var ct=!0;else{var Pe=n(c);Pe!==null&&q(S,Pe.startTime-ee),ct=!1}return ct}finally{f=null,h=re,p=!1}}var P=!1,L=null,I=-1,E=5,M=-1;function N(){return!(t.unstable_now()-M<E)}function V(){if(L!==null){var U=t.unstable_now();M=U;var ee=!0;try{ee=L(!0,U)}finally{ee?Q():(P=!1,L=null)}}else P=!1}var Q;if(typeof v=="function")Q=function(){v(V)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ce=ae.port2;ae.port1.onmessage=V,Q=function(){ce.postMessage(null)}}else Q=function(){_(V,0)};function H(U){L=U,P||(P=!0,Q())}function q(U,ee){I=_(function(){U(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,H(R))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var ee=3;break;default:ee=h}var re=h;h=ee;try{return U()}finally{h=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,ee){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var re=h;h=U;try{return ee()}finally{h=re}},t.unstable_scheduleCallback=function(U,ee,re){var Ee=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Ee+re:Ee):re=Ee,U){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=re+Fe,U={id:d++,callback:ee,priorityLevel:U,startTime:re,expirationTime:Fe,sortIndex:-1},re>Ee?(U.sortIndex=re,e(c,U),n(l)===null&&U===n(c)&&(w?(u(I),I=-1):w=!0,q(S,re-Ee))):(U.sortIndex=Fe,e(l,U),y||p||(y=!0,H(R))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var ee=h;return function(){var re=h;h=ee;try{return U.apply(this,arguments)}finally{h=re}}}})(Mv);yv.exports=Mv;var Ux=yv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fx=Mt,yi=Ux;function Se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sv=new Set,Oa={};function Os(t,e){Do(t,e),Do(t+"Capture",e)}function Do(t,e){for(Oa[t]=e,t=0;t<e.length;t++)Sv.add(e[t])}var yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nf=Object.prototype.hasOwnProperty,Ox=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xm={},jm={};function kx(t){return nf.call(jm,t)?!0:nf.call(Xm,t)?!1:Ox.test(t)?jm[t]=!0:(Xm[t]=!0,!1)}function zx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Bx(t,e,n,i){if(e===null||typeof e>"u"||zx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ni(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Fn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Fn[t]=new ni(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Fn[e]=new ni(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Fn[t]=new ni(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Fn[t]=new ni(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Fn[t]=new ni(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Fn[t]=new ni(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Fn[t]=new ni(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Fn[t]=new ni(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Fn[t]=new ni(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gh=/[\-:]([a-z])/g;function Wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gh,Wh);Fn[e]=new ni(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gh,Wh);Fn[e]=new ni(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gh,Wh);Fn[e]=new ni(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Fn[t]=new ni(t,1,!1,t.toLowerCase(),null,!1,!1)});Fn.xlinkHref=new ni("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Fn[t]=new ni(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xh(t,e,n,i){var r=Fn.hasOwnProperty(e)?Fn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Bx(e,n,r,i)&&(n=null),i||r===null?kx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Er=Fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sl=Symbol.for("react.element"),co=Symbol.for("react.portal"),uo=Symbol.for("react.fragment"),jh=Symbol.for("react.strict_mode"),rf=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),Ev=Symbol.for("react.context"),Yh=Symbol.for("react.forward_ref"),sf=Symbol.for("react.suspense"),of=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),Tv=Symbol.for("react.offscreen"),Ym=Symbol.iterator;function ra(t){return t===null||typeof t!="object"?null:(t=Ym&&t[Ym]||t["@@iterator"],typeof t=="function"?t:null)}var nn=Object.assign,Wu;function Ma(t){if(Wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wu=e&&e[1]||""}return`
`+Wu+t}var Xu=!1;function ju(t,e){if(!t||Xu)return"";Xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ma(t):""}function Hx(t){switch(t.tag){case 5:return Ma(t.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return t=ju(t.type,!1),t;case 11:return t=ju(t.type.render,!1),t;case 1:return t=ju(t.type,!0),t;default:return""}}function af(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case uo:return"Fragment";case co:return"Portal";case rf:return"Profiler";case jh:return"StrictMode";case sf:return"Suspense";case of:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ev:return(t.displayName||"Context")+".Consumer";case wv:return(t._context.displayName||"Context")+".Provider";case Yh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qh:return e=t.displayName||null,e!==null?e:af(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return af(t(e))}catch{}}return null}function Vx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return af(e);case 8:return e===jh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Av(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gx(t){var e=Av(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wl(t){t._valueTracker||(t._valueTracker=Gx(t))}function bv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Av(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function bc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lf(t,e){var n=e.checked;return nn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cv(t,e){e=e.checked,e!=null&&Xh(t,"checked",e,!1)}function cf(t,e){Cv(t,e);var n=Qr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&uf(t,e.type,Qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uf(t,e,n){(e!=="number"||bc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Sa=Array.isArray;function wo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Qr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function df(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Se(91));return nn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Km(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Se(92));if(Sa(n)){if(1<n.length)throw Error(Se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qr(n)}}function Rv(t,e){var n=Qr(e.value),i=Qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Jm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ff(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var El,Lv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(El=El||document.createElement("div"),El.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=El.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wx=["Webkit","ms","Moz","O"];Object.keys(Aa).forEach(function(t){Wx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Aa[e]=Aa[t]})});function Dv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Aa.hasOwnProperty(t)&&Aa[t]?(""+e).trim():e+"px"}function Iv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Dv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Xx=nn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hf(t,e){if(e){if(Xx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Se(62))}}function pf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mf=null;function $h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gf=null,Eo=null,To=null;function Zm(t){if(t=ll(t)){if(typeof gf!="function")throw Error(Se(280));var e=t.stateNode;e&&(e=au(e),gf(t.stateNode,t.type,e))}}function Nv(t){Eo?To?To.push(t):To=[t]:Eo=t}function Uv(){if(Eo){var t=Eo,e=To;if(To=Eo=null,Zm(t),e)for(t=0;t<e.length;t++)Zm(e[t])}}function Fv(t,e){return t(e)}function Ov(){}var Yu=!1;function kv(t,e,n){if(Yu)return t(e,n);Yu=!0;try{return Fv(t,e,n)}finally{Yu=!1,(Eo!==null||To!==null)&&(Ov(),Uv())}}function za(t,e){var n=t.stateNode;if(n===null)return null;var i=au(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Se(231,e,typeof n));return n}var vf=!1;if(yr)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){vf=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{vf=!1}function jx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ba=!1,Cc=null,Rc=!1,_f=null,Yx={onError:function(t){ba=!0,Cc=t}};function qx(t,e,n,i,r,s,o,a,l){ba=!1,Cc=null,jx.apply(Yx,arguments)}function $x(t,e,n,i,r,s,o,a,l){if(qx.apply(this,arguments),ba){if(ba){var c=Cc;ba=!1,Cc=null}else throw Error(Se(198));Rc||(Rc=!0,_f=c)}}function ks(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qm(t){if(ks(t)!==t)throw Error(Se(188))}function Kx(t){var e=t.alternate;if(!e){if(e=ks(t),e===null)throw Error(Se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Qm(r),t;if(s===i)return Qm(r),e;s=s.sibling}throw Error(Se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Se(189))}}if(n.alternate!==i)throw Error(Se(190))}if(n.tag!==3)throw Error(Se(188));return n.stateNode.current===n?t:e}function Bv(t){return t=Kx(t),t!==null?Hv(t):null}function Hv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hv(t);if(e!==null)return e;t=t.sibling}return null}var Vv=yi.unstable_scheduleCallback,e0=yi.unstable_cancelCallback,Jx=yi.unstable_shouldYield,Zx=yi.unstable_requestPaint,un=yi.unstable_now,Qx=yi.unstable_getCurrentPriorityLevel,Kh=yi.unstable_ImmediatePriority,Gv=yi.unstable_UserBlockingPriority,Pc=yi.unstable_NormalPriority,ey=yi.unstable_LowPriority,Wv=yi.unstable_IdlePriority,iu=null,nr=null;function ty(t){if(nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(iu,t,void 0,(t.current.flags&128)===128)}catch{}}var Gi=Math.clz32?Math.clz32:ry,ny=Math.log,iy=Math.LN2;function ry(t){return t>>>=0,t===0?32:31-(ny(t)/iy|0)|0}var Tl=64,Al=4194304;function wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=wa(a):(s&=o,s!==0&&(i=wa(s)))}else o=n&~r,o!==0?i=wa(o):s!==0&&(i=wa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gi(e),r=1<<n,i|=t[n],e&=~r;return i}function sy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=sy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function xf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xv(){var t=Tl;return Tl<<=1,!(Tl&4194240)&&(Tl=64),t}function qu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ol(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gi(e),t[e]=n}function ay(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Jh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var kt=0;function jv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yv,Zh,qv,$v,Kv,yf=!1,bl=[],Gr=null,Wr=null,Xr=null,Ba=new Map,Ha=new Map,kr=[],ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function t0(t,e){switch(t){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":Wr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function oa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ll(e),e!==null&&Zh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function cy(t,e,n,i,r){switch(e){case"focusin":return Gr=oa(Gr,t,e,n,i,r),!0;case"dragenter":return Wr=oa(Wr,t,e,n,i,r),!0;case"mouseover":return Xr=oa(Xr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ba.set(s,oa(Ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ha.set(s,oa(Ha.get(s)||null,t,e,n,i,r)),!0}return!1}function Jv(t){var e=ws(t.target);if(e!==null){var n=ks(e);if(n!==null){if(e=n.tag,e===13){if(e=zv(n),e!==null){t.blockedOn=e,Kv(t.priority,function(){qv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);mf=i,n.target.dispatchEvent(i),mf=null}else return e=ll(n),e!==null&&Zh(e),t.blockedOn=n,!1;e.shift()}return!0}function n0(t,e,n){fc(t)&&n.delete(e)}function uy(){yf=!1,Gr!==null&&fc(Gr)&&(Gr=null),Wr!==null&&fc(Wr)&&(Wr=null),Xr!==null&&fc(Xr)&&(Xr=null),Ba.forEach(n0),Ha.forEach(n0)}function aa(t,e){t.blockedOn===e&&(t.blockedOn=null,yf||(yf=!0,yi.unstable_scheduleCallback(yi.unstable_NormalPriority,uy)))}function Va(t){function e(r){return aa(r,t)}if(0<bl.length){aa(bl[0],t);for(var n=1;n<bl.length;n++){var i=bl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Gr!==null&&aa(Gr,t),Wr!==null&&aa(Wr,t),Xr!==null&&aa(Xr,t),Ba.forEach(e),Ha.forEach(e),n=0;n<kr.length;n++)i=kr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<kr.length&&(n=kr[0],n.blockedOn===null);)Jv(n),n.blockedOn===null&&kr.shift()}var Ao=Er.ReactCurrentBatchConfig,Dc=!0;function dy(t,e,n,i){var r=kt,s=Ao.transition;Ao.transition=null;try{kt=1,Qh(t,e,n,i)}finally{kt=r,Ao.transition=s}}function fy(t,e,n,i){var r=kt,s=Ao.transition;Ao.transition=null;try{kt=4,Qh(t,e,n,i)}finally{kt=r,Ao.transition=s}}function Qh(t,e,n,i){if(Dc){var r=Mf(t,e,n,i);if(r===null)rd(t,e,i,Ic,n),t0(t,i);else if(cy(r,t,e,n,i))i.stopPropagation();else if(t0(t,i),e&4&&-1<ly.indexOf(t)){for(;r!==null;){var s=ll(r);if(s!==null&&Yv(s),s=Mf(t,e,n,i),s===null&&rd(t,e,i,Ic,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else rd(t,e,i,null,n)}}var Ic=null;function Mf(t,e,n,i){if(Ic=null,t=$h(i),t=ws(t),t!==null)if(e=ks(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ic=t,null}function Zv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qx()){case Kh:return 1;case Gv:return 4;case Pc:case ey:return 16;case Wv:return 536870912;default:return 16}default:return 16}}var Hr=null,ep=null,hc=null;function Qv(){if(hc)return hc;var t,e=ep,n=e.length,i,r="value"in Hr?Hr.value:Hr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return hc=r.slice(t,1<i?1-i:void 0)}function pc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cl(){return!0}function i0(){return!1}function Si(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cl:i0,this.isPropagationStopped=i0,this}return nn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),e}var Xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tp=Si(Xo),al=nn({},Xo,{view:0,detail:0}),hy=Si(al),$u,Ku,la,ru=nn({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:np,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?($u=t.screenX-la.screenX,Ku=t.screenY-la.screenY):Ku=$u=0,la=t),$u)},movementY:function(t){return"movementY"in t?t.movementY:Ku}}),r0=Si(ru),py=nn({},ru,{dataTransfer:0}),my=Si(py),gy=nn({},al,{relatedTarget:0}),Ju=Si(gy),vy=nn({},Xo,{animationName:0,elapsedTime:0,pseudoElement:0}),_y=Si(vy),xy=nn({},Xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yy=Si(xy),My=nn({},Xo,{data:0}),s0=Si(My),Sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ty(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ey[t])?!!e[t]:!1}function np(){return Ty}var Ay=nn({},al,{key:function(t){if(t.key){var e=Sy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:np,charCode:function(t){return t.type==="keypress"?pc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),by=Si(Ay),Cy=nn({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),o0=Si(Cy),Ry=nn({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:np}),Py=Si(Ry),Ly=nn({},Xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dy=Si(Ly),Iy=nn({},ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ny=Si(Iy),Uy=[9,13,27,32],ip=yr&&"CompositionEvent"in window,Ca=null;yr&&"documentMode"in document&&(Ca=document.documentMode);var Fy=yr&&"TextEvent"in window&&!Ca,e1=yr&&(!ip||Ca&&8<Ca&&11>=Ca),a0=" ",l0=!1;function t1(t,e){switch(t){case"keyup":return Uy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fo=!1;function Oy(t,e){switch(t){case"compositionend":return n1(e);case"keypress":return e.which!==32?null:(l0=!0,a0);case"textInput":return t=e.data,t===a0&&l0?null:t;default:return null}}function ky(t,e){if(fo)return t==="compositionend"||!ip&&t1(t,e)?(t=Qv(),hc=ep=Hr=null,fo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return e1&&e.locale!=="ko"?null:e.data;default:return null}}var zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function c0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zy[t.type]:e==="textarea"}function i1(t,e,n,i){Nv(i),e=Nc(e,"onChange"),0<e.length&&(n=new tp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ra=null,Ga=null;function By(t){p1(t,0)}function su(t){var e=mo(t);if(bv(e))return t}function Hy(t,e){if(t==="change")return e}var r1=!1;if(yr){var Zu;if(yr){var Qu="oninput"in document;if(!Qu){var u0=document.createElement("div");u0.setAttribute("oninput","return;"),Qu=typeof u0.oninput=="function"}Zu=Qu}else Zu=!1;r1=Zu&&(!document.documentMode||9<document.documentMode)}function d0(){Ra&&(Ra.detachEvent("onpropertychange",s1),Ga=Ra=null)}function s1(t){if(t.propertyName==="value"&&su(Ga)){var e=[];i1(e,Ga,t,$h(t)),kv(By,e)}}function Vy(t,e,n){t==="focusin"?(d0(),Ra=e,Ga=n,Ra.attachEvent("onpropertychange",s1)):t==="focusout"&&d0()}function Gy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return su(Ga)}function Wy(t,e){if(t==="click")return su(e)}function Xy(t,e){if(t==="input"||t==="change")return su(e)}function jy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ji=typeof Object.is=="function"?Object.is:jy;function Wa(t,e){if(ji(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!nf.call(e,r)||!ji(t[r],e[r]))return!1}return!0}function f0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function h0(t,e){var n=f0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=f0(n)}}function o1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?o1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function a1(){for(var t=window,e=bc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bc(t.document)}return e}function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Yy(t){var e=a1(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&o1(n.ownerDocument.documentElement,n)){if(i!==null&&rp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=h0(n,s);var o=h0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qy=yr&&"documentMode"in document&&11>=document.documentMode,ho=null,Sf=null,Pa=null,wf=!1;function p0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wf||ho==null||ho!==bc(i)||(i=ho,"selectionStart"in i&&rp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pa&&Wa(Pa,i)||(Pa=i,i=Nc(Sf,"onSelect"),0<i.length&&(e=new tp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ho)))}function Rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var po={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},ed={},l1={};yr&&(l1=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function ou(t){if(ed[t])return ed[t];if(!po[t])return t;var e=po[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in l1)return ed[t]=e[n];return t}var c1=ou("animationend"),u1=ou("animationiteration"),d1=ou("animationstart"),f1=ou("transitionend"),h1=new Map,m0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function is(t,e){h1.set(t,e),Os(e,[t])}for(var td=0;td<m0.length;td++){var nd=m0[td],$y=nd.toLowerCase(),Ky=nd[0].toUpperCase()+nd.slice(1);is($y,"on"+Ky)}is(c1,"onAnimationEnd");is(u1,"onAnimationIteration");is(d1,"onAnimationStart");is("dblclick","onDoubleClick");is("focusin","onFocus");is("focusout","onBlur");is(f1,"onTransitionEnd");Do("onMouseEnter",["mouseout","mouseover"]);Do("onMouseLeave",["mouseout","mouseover"]);Do("onPointerEnter",["pointerout","pointerover"]);Do("onPointerLeave",["pointerout","pointerover"]);Os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Os("onBeforeInput",["compositionend","keypress","textInput","paste"]);Os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function g0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$x(i,e,void 0,t),t.currentTarget=null}function p1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;g0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;g0(r,a,c),s=l}}}if(Rc)throw t=_f,Rc=!1,_f=null,t}function Yt(t,e){var n=e[Cf];n===void 0&&(n=e[Cf]=new Set);var i=t+"__bubble";n.has(i)||(m1(e,t,2,!1),n.add(i))}function id(t,e,n){var i=0;e&&(i|=4),m1(n,t,i,e)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Xa(t){if(!t[Pl]){t[Pl]=!0,Sv.forEach(function(n){n!=="selectionchange"&&(Jy.has(n)||id(n,!1,t),id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pl]||(e[Pl]=!0,id("selectionchange",!1,e))}}function m1(t,e,n,i){switch(Zv(e)){case 1:var r=dy;break;case 4:r=fy;break;default:r=Qh}n=r.bind(null,e,n,t),r=void 0,!vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function rd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ws(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}kv(function(){var c=s,d=$h(n),f=[];e:{var h=h1.get(t);if(h!==void 0){var p=tp,y=t;switch(t){case"keypress":if(pc(n)===0)break e;case"keydown":case"keyup":p=by;break;case"focusin":y="focus",p=Ju;break;case"focusout":y="blur",p=Ju;break;case"beforeblur":case"afterblur":p=Ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=r0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=my;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Py;break;case c1:case u1:case d1:p=_y;break;case f1:p=Dy;break;case"scroll":p=hy;break;case"wheel":p=Ny;break;case"copy":case"cut":case"paste":p=yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=o0}var w=(e&4)!==0,_=!w&&t==="scroll",u=w?h!==null?h+"Capture":null:h;w=[];for(var v=c,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,u!==null&&(S=za(v,u),S!=null&&w.push(ja(v,S,x)))),_)break;v=v.return}0<w.length&&(h=new p(h,y,null,n,d),f.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==mf&&(y=n.relatedTarget||n.fromElement)&&(ws(y)||y[Mr]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?ws(y):null,y!==null&&(_=ks(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(w=r0,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(w=o0,S="onPointerLeave",u="onPointerEnter",v="pointer"),_=p==null?h:mo(p),x=y==null?h:mo(y),h=new w(S,v+"leave",p,n,d),h.target=_,h.relatedTarget=x,S=null,ws(d)===c&&(w=new w(u,v+"enter",y,n,d),w.target=x,w.relatedTarget=_,S=w),_=S,p&&y)t:{for(w=p,u=y,v=0,x=w;x;x=Ys(x))v++;for(x=0,S=u;S;S=Ys(S))x++;for(;0<v-x;)w=Ys(w),v--;for(;0<x-v;)u=Ys(u),x--;for(;v--;){if(w===u||u!==null&&w===u.alternate)break t;w=Ys(w),u=Ys(u)}w=null}else w=null;p!==null&&v0(f,h,p,w,!1),y!==null&&_!==null&&v0(f,_,y,w,!0)}}e:{if(h=c?mo(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=Hy;else if(c0(h))if(r1)R=Xy;else{R=Gy;var P=Vy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=Wy);if(R&&(R=R(t,c))){i1(f,R,n,d);break e}P&&P(t,h,c),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&uf(h,"number",h.value)}switch(P=c?mo(c):window,t){case"focusin":(c0(P)||P.contentEditable==="true")&&(ho=P,Sf=c,Pa=null);break;case"focusout":Pa=Sf=ho=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,p0(f,n,d);break;case"selectionchange":if(qy)break;case"keydown":case"keyup":p0(f,n,d)}var L;if(ip)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else fo?t1(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(e1&&n.locale!=="ko"&&(fo||I!=="onCompositionStart"?I==="onCompositionEnd"&&fo&&(L=Qv()):(Hr=d,ep="value"in Hr?Hr.value:Hr.textContent,fo=!0)),P=Nc(c,I),0<P.length&&(I=new s0(I,t,null,n,d),f.push({event:I,listeners:P}),L?I.data=L:(L=n1(n),L!==null&&(I.data=L)))),(L=Fy?Oy(t,n):ky(t,n))&&(c=Nc(c,"onBeforeInput"),0<c.length&&(d=new s0("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=L))}p1(f,e)})}function ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=za(t,n),s!=null&&i.unshift(ja(t,s,r)),s=za(t,e),s!=null&&i.push(ja(t,s,r))),t=t.return}return i}function Ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function v0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=za(n,s),l!=null&&o.unshift(ja(n,l,a))):r||(l=za(n,s),l!=null&&o.push(ja(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Zy=/\r\n?/g,Qy=/\u0000|\uFFFD/g;function _0(t){return(typeof t=="string"?t:""+t).replace(Zy,`
`).replace(Qy,"")}function Ll(t,e,n){if(e=_0(e),_0(t)!==e&&n)throw Error(Se(425))}function Uc(){}var Ef=null,Tf=null;function Af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bf=typeof setTimeout=="function"?setTimeout:void 0,eM=typeof clearTimeout=="function"?clearTimeout:void 0,x0=typeof Promise=="function"?Promise:void 0,tM=typeof queueMicrotask=="function"?queueMicrotask:typeof x0<"u"?function(t){return x0.resolve(null).then(t).catch(nM)}:bf;function nM(t){setTimeout(function(){throw t})}function sd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Va(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Va(e)}function jr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function y0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var jo=Math.random().toString(36).slice(2),Qi="__reactFiber$"+jo,Ya="__reactProps$"+jo,Mr="__reactContainer$"+jo,Cf="__reactEvents$"+jo,iM="__reactListeners$"+jo,rM="__reactHandles$"+jo;function ws(t){var e=t[Qi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mr]||n[Qi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=y0(t);t!==null;){if(n=t[Qi])return n;t=y0(t)}return e}t=n,n=t.parentNode}return null}function ll(t){return t=t[Qi]||t[Mr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function mo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Se(33))}function au(t){return t[Ya]||null}var Rf=[],go=-1;function rs(t){return{current:t}}function qt(t){0>go||(t.current=Rf[go],Rf[go]=null,go--)}function Xt(t,e){go++,Rf[go]=t.current,t.current=e}var es={},jn=rs(es),ci=rs(!1),Ps=es;function Io(t,e){var n=t.type.contextTypes;if(!n)return es;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ui(t){return t=t.childContextTypes,t!=null}function Fc(){qt(ci),qt(jn)}function M0(t,e,n){if(jn.current!==es)throw Error(Se(168));Xt(jn,e),Xt(ci,n)}function g1(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Se(108,Vx(t)||"Unknown",r));return nn({},n,i)}function Oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||es,Ps=jn.current,Xt(jn,t),Xt(ci,ci.current),!0}function S0(t,e,n){var i=t.stateNode;if(!i)throw Error(Se(169));n?(t=g1(t,e,Ps),i.__reactInternalMemoizedMergedChildContext=t,qt(ci),qt(jn),Xt(jn,t)):qt(ci),Xt(ci,n)}var pr=null,lu=!1,od=!1;function v1(t){pr===null?pr=[t]:pr.push(t)}function sM(t){lu=!0,v1(t)}function ss(){if(!od&&pr!==null){od=!0;var t=0,e=kt;try{var n=pr;for(kt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}pr=null,lu=!1}catch(r){throw pr!==null&&(pr=pr.slice(t+1)),Vv(Kh,ss),r}finally{kt=e,od=!1}}return null}var vo=[],_o=0,kc=null,zc=0,Ai=[],bi=0,Ls=null,mr=1,gr="";function vs(t,e){vo[_o++]=zc,vo[_o++]=kc,kc=t,zc=e}function _1(t,e,n){Ai[bi++]=mr,Ai[bi++]=gr,Ai[bi++]=Ls,Ls=t;var i=mr;t=gr;var r=32-Gi(i)-1;i&=~(1<<r),n+=1;var s=32-Gi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,mr=1<<32-Gi(e)+r|n<<r|i,gr=s+t}else mr=1<<s|n<<r|i,gr=t}function sp(t){t.return!==null&&(vs(t,1),_1(t,1,0))}function op(t){for(;t===kc;)kc=vo[--_o],vo[_o]=null,zc=vo[--_o],vo[_o]=null;for(;t===Ls;)Ls=Ai[--bi],Ai[bi]=null,gr=Ai[--bi],Ai[bi]=null,mr=Ai[--bi],Ai[bi]=null}var xi=null,_i=null,Jt=!1,Bi=null;function x1(t,e){var n=Ci(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function w0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xi=t,_i=jr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xi=t,_i=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ls!==null?{id:mr,overflow:gr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ci(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xi=t,_i=null,!0):!1;default:return!1}}function Pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lf(t){if(Jt){var e=_i;if(e){var n=e;if(!w0(t,e)){if(Pf(t))throw Error(Se(418));e=jr(n.nextSibling);var i=xi;e&&w0(t,e)?x1(i,n):(t.flags=t.flags&-4097|2,Jt=!1,xi=t)}}else{if(Pf(t))throw Error(Se(418));t.flags=t.flags&-4097|2,Jt=!1,xi=t}}}function E0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xi=t}function Dl(t){if(t!==xi)return!1;if(!Jt)return E0(t),Jt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Af(t.type,t.memoizedProps)),e&&(e=_i)){if(Pf(t))throw y1(),Error(Se(418));for(;e;)x1(t,e),e=jr(e.nextSibling)}if(E0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_i=jr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_i=null}}else _i=xi?jr(t.stateNode.nextSibling):null;return!0}function y1(){for(var t=_i;t;)t=jr(t.nextSibling)}function No(){_i=xi=null,Jt=!1}function ap(t){Bi===null?Bi=[t]:Bi.push(t)}var oM=Er.ReactCurrentBatchConfig;function ca(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Se(309));var i=n.stateNode}if(!i)throw Error(Se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Se(284));if(!n._owner)throw Error(Se(290,t))}return t}function Il(t,e){throw t=Object.prototype.toString.call(e),Error(Se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function T0(t){var e=t._init;return e(t._payload)}function M1(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Kr(u,v),u.index=0,u.sibling=null,u}function s(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=2,v):x):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,x,S){return v===null||v.tag!==6?(v=hd(x,u.mode,S),v.return=u,v):(v=r(v,x),v.return=u,v)}function l(u,v,x,S){var R=x.type;return R===uo?d(u,v,x.props.children,S,x.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fr&&T0(R)===v.type)?(S=r(v,x.props),S.ref=ca(u,v,x),S.return=u,S):(S=Mc(x.type,x.key,x.props,null,u.mode,S),S.ref=ca(u,v,x),S.return=u,S)}function c(u,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=pd(x,u.mode,S),v.return=u,v):(v=r(v,x.children||[]),v.return=u,v)}function d(u,v,x,S,R){return v===null||v.tag!==7?(v=Rs(x,u.mode,S,R),v.return=u,v):(v=r(v,x),v.return=u,v)}function f(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=hd(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sl:return x=Mc(v.type,v.key,v.props,null,u.mode,x),x.ref=ca(u,null,v),x.return=u,x;case co:return v=pd(v,u.mode,x),v.return=u,v;case Fr:var S=v._init;return f(u,S(v._payload),x)}if(Sa(v)||ra(v))return v=Rs(v,u.mode,x,null),v.return=u,v;Il(u,v)}return null}function h(u,v,x,S){var R=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:a(u,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sl:return x.key===R?l(u,v,x,S):null;case co:return x.key===R?c(u,v,x,S):null;case Fr:return R=x._init,h(u,v,R(x._payload),S)}if(Sa(x)||ra(x))return R!==null?null:d(u,v,x,S,null);Il(u,x)}return null}function p(u,v,x,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(x)||null,a(v,u,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Sl:return u=u.get(S.key===null?x:S.key)||null,l(v,u,S,R);case co:return u=u.get(S.key===null?x:S.key)||null,c(v,u,S,R);case Fr:var P=S._init;return p(u,v,x,P(S._payload),R)}if(Sa(S)||ra(S))return u=u.get(x)||null,d(v,u,S,R,null);Il(v,S)}return null}function y(u,v,x,S){for(var R=null,P=null,L=v,I=v=0,E=null;L!==null&&I<x.length;I++){L.index>I?(E=L,L=null):E=L.sibling;var M=h(u,L,x[I],S);if(M===null){L===null&&(L=E);break}t&&L&&M.alternate===null&&e(u,L),v=s(M,v,I),P===null?R=M:P.sibling=M,P=M,L=E}if(I===x.length)return n(u,L),Jt&&vs(u,I),R;if(L===null){for(;I<x.length;I++)L=f(u,x[I],S),L!==null&&(v=s(L,v,I),P===null?R=L:P.sibling=L,P=L);return Jt&&vs(u,I),R}for(L=i(u,L);I<x.length;I++)E=p(L,u,I,x[I],S),E!==null&&(t&&E.alternate!==null&&L.delete(E.key===null?I:E.key),v=s(E,v,I),P===null?R=E:P.sibling=E,P=E);return t&&L.forEach(function(N){return e(u,N)}),Jt&&vs(u,I),R}function w(u,v,x,S){var R=ra(x);if(typeof R!="function")throw Error(Se(150));if(x=R.call(x),x==null)throw Error(Se(151));for(var P=R=null,L=v,I=v=0,E=null,M=x.next();L!==null&&!M.done;I++,M=x.next()){L.index>I?(E=L,L=null):E=L.sibling;var N=h(u,L,M.value,S);if(N===null){L===null&&(L=E);break}t&&L&&N.alternate===null&&e(u,L),v=s(N,v,I),P===null?R=N:P.sibling=N,P=N,L=E}if(M.done)return n(u,L),Jt&&vs(u,I),R;if(L===null){for(;!M.done;I++,M=x.next())M=f(u,M.value,S),M!==null&&(v=s(M,v,I),P===null?R=M:P.sibling=M,P=M);return Jt&&vs(u,I),R}for(L=i(u,L);!M.done;I++,M=x.next())M=p(L,u,I,M.value,S),M!==null&&(t&&M.alternate!==null&&L.delete(M.key===null?I:M.key),v=s(M,v,I),P===null?R=M:P.sibling=M,P=M);return t&&L.forEach(function(V){return e(u,V)}),Jt&&vs(u,I),R}function _(u,v,x,S){if(typeof x=="object"&&x!==null&&x.type===uo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Sl:e:{for(var R=x.key,P=v;P!==null;){if(P.key===R){if(R=x.type,R===uo){if(P.tag===7){n(u,P.sibling),v=r(P,x.props.children),v.return=u,u=v;break e}}else if(P.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fr&&T0(R)===P.type){n(u,P.sibling),v=r(P,x.props),v.ref=ca(u,P,x),v.return=u,u=v;break e}n(u,P);break}else e(u,P);P=P.sibling}x.type===uo?(v=Rs(x.props.children,u.mode,S,x.key),v.return=u,u=v):(S=Mc(x.type,x.key,x.props,null,u.mode,S),S.ref=ca(u,v,x),S.return=u,u=S)}return o(u);case co:e:{for(P=x.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),v=r(v,x.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=pd(x,u.mode,S),v.return=u,u=v}return o(u);case Fr:return P=x._init,_(u,v,P(x._payload),S)}if(Sa(x))return y(u,v,x,S);if(ra(x))return w(u,v,x,S);Il(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,x),v.return=u,u=v):(n(u,v),v=hd(x,u.mode,S),v.return=u,u=v),o(u)):n(u,v)}return _}var Uo=M1(!0),S1=M1(!1),Bc=rs(null),Hc=null,xo=null,lp=null;function cp(){lp=xo=Hc=null}function up(t){var e=Bc.current;qt(Bc),t._currentValue=e}function Df(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bo(t,e){Hc=t,lp=xo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(li=!0),t.firstContext=null)}function Pi(t){var e=t._currentValue;if(lp!==t)if(t={context:t,memoizedValue:e,next:null},xo===null){if(Hc===null)throw Error(Se(308));xo=t,Hc.dependencies={lanes:0,firstContext:t}}else xo=xo.next=t;return e}var Es=null;function dp(t){Es===null?Es=[t]:Es.push(t)}function w1(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,dp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Sr(t,i)}function Sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Or=!1;function fp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function E1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _r(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,At&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Sr(t,n)}return r=i.interleaved,r===null?(e.next=e,dp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Sr(t,n)}function mc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jh(t,n)}}function A0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vc(t,e,n,i){var r=t.updateQueue;Or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(h=e,p=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(p,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(p,f,h):y,h==null)break e;f=nn({},f,h);break e;case 2:Or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Is|=o,t.lanes=o,t.memoizedState=f}}function b0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Se(191,r));r.call(i)}}}var cl={},ir=rs(cl),qa=rs(cl),$a=rs(cl);function Ts(t){if(t===cl)throw Error(Se(174));return t}function hp(t,e){switch(Xt($a,e),Xt(qa,t),Xt(ir,cl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ff(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ff(e,t)}qt(ir),Xt(ir,e)}function Fo(){qt(ir),qt(qa),qt($a)}function T1(t){Ts($a.current);var e=Ts(ir.current),n=ff(e,t.type);e!==n&&(Xt(qa,t),Xt(ir,n))}function pp(t){qa.current===t&&(qt(ir),qt(qa))}var en=rs(0);function Gc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ad=[];function mp(){for(var t=0;t<ad.length;t++)ad[t]._workInProgressVersionPrimary=null;ad.length=0}var gc=Er.ReactCurrentDispatcher,ld=Er.ReactCurrentBatchConfig,Ds=0,tn=null,Mn=null,Cn=null,Wc=!1,La=!1,Ka=0,aM=0;function Bn(){throw Error(Se(321))}function gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ji(t[n],e[n]))return!1;return!0}function vp(t,e,n,i,r,s){if(Ds=s,tn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gc.current=t===null||t.memoizedState===null?dM:fM,t=n(i,r),La){s=0;do{if(La=!1,Ka=0,25<=s)throw Error(Se(301));s+=1,Cn=Mn=null,e.updateQueue=null,gc.current=hM,t=n(i,r)}while(La)}if(gc.current=Xc,e=Mn!==null&&Mn.next!==null,Ds=0,Cn=Mn=tn=null,Wc=!1,e)throw Error(Se(300));return t}function _p(){var t=Ka!==0;return Ka=0,t}function Ki(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?tn.memoizedState=Cn=t:Cn=Cn.next=t,Cn}function Li(){if(Mn===null){var t=tn.alternate;t=t!==null?t.memoizedState:null}else t=Mn.next;var e=Cn===null?tn.memoizedState:Cn.next;if(e!==null)Cn=e,Mn=t;else{if(t===null)throw Error(Se(310));Mn=t,t={memoizedState:Mn.memoizedState,baseState:Mn.baseState,baseQueue:Mn.baseQueue,queue:Mn.queue,next:null},Cn===null?tn.memoizedState=Cn=t:Cn=Cn.next=t}return Cn}function Ja(t,e){return typeof e=="function"?e(t):e}function cd(t){var e=Li(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=Mn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ds&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,tn.lanes|=d,Is|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ji(i,e.memoizedState)||(li=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,tn.lanes|=s,Is|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ud(t){var e=Li(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ji(s,e.memoizedState)||(li=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function A1(){}function b1(t,e){var n=tn,i=Li(),r=e(),s=!ji(i.memoizedState,r);if(s&&(i.memoizedState=r,li=!0),i=i.queue,xp(P1.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Cn!==null&&Cn.memoizedState.tag&1){if(n.flags|=2048,Za(9,R1.bind(null,n,i,r,e),void 0,null),Rn===null)throw Error(Se(349));Ds&30||C1(n,e,r)}return r}function C1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=tn.updateQueue,e===null?(e={lastEffect:null,stores:null},tn.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function R1(t,e,n,i){e.value=n,e.getSnapshot=i,L1(e)&&D1(t)}function P1(t,e,n){return n(function(){L1(e)&&D1(t)})}function L1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ji(t,n)}catch{return!0}}function D1(t){var e=Sr(t,1);e!==null&&Wi(e,t,1,-1)}function C0(t){var e=Ki();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:t},e.queue=t,t=t.dispatch=uM.bind(null,tn,t),[e.memoizedState,t]}function Za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=tn.updateQueue,e===null?(e={lastEffect:null,stores:null},tn.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function I1(){return Li().memoizedState}function vc(t,e,n,i){var r=Ki();tn.flags|=t,r.memoizedState=Za(1|e,n,void 0,i===void 0?null:i)}function cu(t,e,n,i){var r=Li();i=i===void 0?null:i;var s=void 0;if(Mn!==null){var o=Mn.memoizedState;if(s=o.destroy,i!==null&&gp(i,o.deps)){r.memoizedState=Za(e,n,s,i);return}}tn.flags|=t,r.memoizedState=Za(1|e,n,s,i)}function R0(t,e){return vc(8390656,8,t,e)}function xp(t,e){return cu(2048,8,t,e)}function N1(t,e){return cu(4,2,t,e)}function U1(t,e){return cu(4,4,t,e)}function F1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function O1(t,e,n){return n=n!=null?n.concat([t]):null,cu(4,4,F1.bind(null,e,t),n)}function yp(){}function k1(t,e){var n=Li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function z1(t,e){var n=Li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function B1(t,e,n){return Ds&21?(ji(n,e)||(n=Xv(),tn.lanes|=n,Is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,li=!0),t.memoizedState=n)}function lM(t,e){var n=kt;kt=n!==0&&4>n?n:4,t(!0);var i=ld.transition;ld.transition={};try{t(!1),e()}finally{kt=n,ld.transition=i}}function H1(){return Li().memoizedState}function cM(t,e,n){var i=$r(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},V1(t))G1(e,n);else if(n=w1(t,e,n,i),n!==null){var r=Qn();Wi(n,t,i,r),W1(n,e,i)}}function uM(t,e,n){var i=$r(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(V1(t))G1(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ji(a,o)){var l=e.interleaved;l===null?(r.next=r,dp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=w1(t,e,r,i),n!==null&&(r=Qn(),Wi(n,t,i,r),W1(n,e,i))}}function V1(t){var e=t.alternate;return t===tn||e!==null&&e===tn}function G1(t,e){La=Wc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function W1(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jh(t,n)}}var Xc={readContext:Pi,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useInsertionEffect:Bn,useLayoutEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useMutableSource:Bn,useSyncExternalStore:Bn,useId:Bn,unstable_isNewReconciler:!1},dM={readContext:Pi,useCallback:function(t,e){return Ki().memoizedState=[t,e===void 0?null:e],t},useContext:Pi,useEffect:R0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vc(4194308,4,F1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vc(4194308,4,t,e)},useInsertionEffect:function(t,e){return vc(4,2,t,e)},useMemo:function(t,e){var n=Ki();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ki();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=cM.bind(null,tn,t),[i.memoizedState,t]},useRef:function(t){var e=Ki();return t={current:t},e.memoizedState=t},useState:C0,useDebugValue:yp,useDeferredValue:function(t){return Ki().memoizedState=t},useTransition:function(){var t=C0(!1),e=t[0];return t=lM.bind(null,t[1]),Ki().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=tn,r=Ki();if(Jt){if(n===void 0)throw Error(Se(407));n=n()}else{if(n=e(),Rn===null)throw Error(Se(349));Ds&30||C1(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,R0(P1.bind(null,i,s,t),[t]),i.flags|=2048,Za(9,R1.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ki(),e=Rn.identifierPrefix;if(Jt){var n=gr,i=mr;n=(i&~(1<<32-Gi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fM={readContext:Pi,useCallback:k1,useContext:Pi,useEffect:xp,useImperativeHandle:O1,useInsertionEffect:N1,useLayoutEffect:U1,useMemo:z1,useReducer:cd,useRef:I1,useState:function(){return cd(Ja)},useDebugValue:yp,useDeferredValue:function(t){var e=Li();return B1(e,Mn.memoizedState,t)},useTransition:function(){var t=cd(Ja)[0],e=Li().memoizedState;return[t,e]},useMutableSource:A1,useSyncExternalStore:b1,useId:H1,unstable_isNewReconciler:!1},hM={readContext:Pi,useCallback:k1,useContext:Pi,useEffect:xp,useImperativeHandle:O1,useInsertionEffect:N1,useLayoutEffect:U1,useMemo:z1,useReducer:ud,useRef:I1,useState:function(){return ud(Ja)},useDebugValue:yp,useDeferredValue:function(t){var e=Li();return Mn===null?e.memoizedState=t:B1(e,Mn.memoizedState,t)},useTransition:function(){var t=ud(Ja)[0],e=Li().memoizedState;return[t,e]},useMutableSource:A1,useSyncExternalStore:b1,useId:H1,unstable_isNewReconciler:!1};function Oi(t,e){if(t&&t.defaultProps){e=nn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function If(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:nn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uu={isMounted:function(t){return(t=t._reactInternals)?ks(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qn(),r=$r(t),s=_r(i,r);s.payload=e,n!=null&&(s.callback=n),e=Yr(t,s,r),e!==null&&(Wi(e,t,r,i),mc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qn(),r=$r(t),s=_r(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yr(t,s,r),e!==null&&(Wi(e,t,r,i),mc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qn(),i=$r(t),r=_r(n,i);r.tag=2,e!=null&&(r.callback=e),e=Yr(t,r,i),e!==null&&(Wi(e,t,i,n),mc(e,t,i))}};function P0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wa(n,i)||!Wa(r,s):!0}function X1(t,e,n){var i=!1,r=es,s=e.contextType;return typeof s=="object"&&s!==null?s=Pi(s):(r=ui(e)?Ps:jn.current,i=e.contextTypes,s=(i=i!=null)?Io(t,r):es),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function L0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&uu.enqueueReplaceState(e,e.state,null)}function Nf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},fp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pi(s):(s=ui(e)?Ps:jn.current,r.context=Io(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(If(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&uu.enqueueReplaceState(r,r.state,null),Vc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Oo(t,e){try{var n="",i=e;do n+=Hx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function dd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pM=typeof WeakMap=="function"?WeakMap:Map;function j1(t,e,n){n=_r(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Yc||(Yc=!0,Xf=i),Uf(t,e)},n}function Y1(t,e,n){n=_r(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Uf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uf(t,e),typeof i!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function D0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new pM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=CM.bind(null,t,e,n),e.then(t,t))}function I0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function N0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_r(-1,1),e.tag=2,Yr(n,e,1))),n.lanes|=1),t)}var mM=Er.ReactCurrentOwner,li=!1;function Jn(t,e,n,i){e.child=t===null?S1(e,null,n,i):Uo(e,t.child,n,i)}function U0(t,e,n,i,r){n=n.render;var s=e.ref;return bo(e,r),i=vp(t,e,n,i,s,r),n=_p(),t!==null&&!li?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wr(t,e,r)):(Jt&&n&&sp(e),e.flags|=1,Jn(t,e,i,r),e.child)}function F0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Cp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,q1(t,e,s,i,r)):(t=Mc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(o,i)&&t.ref===e.ref)return wr(t,e,r)}return e.flags|=1,t=Kr(s,i),t.ref=e.ref,t.return=e,e.child=t}function q1(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Wa(s,i)&&t.ref===e.ref)if(li=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(li=!0);else return e.lanes=t.lanes,wr(t,e,r)}return Ff(t,e,n,i,r)}function $1(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(Mo,gi),gi|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Xt(Mo,gi),gi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Xt(Mo,gi),gi|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Xt(Mo,gi),gi|=i;return Jn(t,e,r,n),e.child}function K1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ff(t,e,n,i,r){var s=ui(n)?Ps:jn.current;return s=Io(e,s),bo(e,r),n=vp(t,e,n,i,s,r),i=_p(),t!==null&&!li?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wr(t,e,r)):(Jt&&i&&sp(e),e.flags|=1,Jn(t,e,n,r),e.child)}function O0(t,e,n,i,r){if(ui(n)){var s=!0;Oc(e)}else s=!1;if(bo(e,r),e.stateNode===null)_c(t,e),X1(e,n,i),Nf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pi(c):(c=ui(n)?Ps:jn.current,c=Io(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&L0(e,o,i,c),Or=!1;var h=e.memoizedState;o.state=h,Vc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ci.current||Or?(typeof d=="function"&&(If(e,n,d,i),l=e.memoizedState),(a=Or||P0(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,E1(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Oi(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pi(l):(l=ui(n)?Ps:jn.current,l=Io(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&L0(e,o,i,l),Or=!1,h=e.memoizedState,o.state=h,Vc(e,i,o,r);var y=e.memoizedState;a!==f||h!==y||ci.current||Or?(typeof p=="function"&&(If(e,n,p,i),y=e.memoizedState),(c=Or||P0(e,n,c,i,h,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Of(t,e,n,i,s,r)}function Of(t,e,n,i,r,s){K1(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&S0(e,n,!1),wr(t,e,s);i=e.stateNode,mM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Uo(e,t.child,null,s),e.child=Uo(e,null,a,s)):Jn(t,e,a,s),e.memoizedState=i.state,r&&S0(e,n,!0),e.child}function J1(t){var e=t.stateNode;e.pendingContext?M0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&M0(t,e.context,!1),hp(t,e.containerInfo)}function k0(t,e,n,i,r){return No(),ap(r),e.flags|=256,Jn(t,e,n,i),e.child}var kf={dehydrated:null,treeContext:null,retryLane:0};function zf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Z1(t,e,n){var i=e.pendingProps,r=en.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Xt(en,r&1),t===null)return Lf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hu(o,i,0,null),t=Rs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zf(n),e.memoizedState=kf,t):Mp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return gM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Kr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Kr(a,s):(s=Rs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?zf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kf,i}return s=t.child,t=s.sibling,i=Kr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Mp(t,e){return e=hu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Nl(t,e,n,i){return i!==null&&ap(i),Uo(e,t.child,null,n),t=Mp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=dd(Error(Se(422))),Nl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=hu({mode:"visible",children:i.children},r,0,null),s=Rs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Uo(e,t.child,null,o),e.child.memoizedState=zf(o),e.memoizedState=kf,s);if(!(e.mode&1))return Nl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Se(419)),i=dd(s,i,void 0),Nl(t,e,o,i)}if(a=(o&t.childLanes)!==0,li||a){if(i=Rn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Sr(t,r),Wi(i,t,r,-1))}return bp(),i=dd(Error(Se(421))),Nl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=RM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_i=jr(r.nextSibling),xi=e,Jt=!0,Bi=null,t!==null&&(Ai[bi++]=mr,Ai[bi++]=gr,Ai[bi++]=Ls,mr=t.id,gr=t.overflow,Ls=e),e=Mp(e,i.children),e.flags|=4096,e)}function z0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Df(t.return,e,n)}function fd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Q1(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jn(t,e,i.children,n),i=en.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&z0(t,n,e);else if(t.tag===19)z0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Xt(en,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Gc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),fd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Gc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}fd(e,!0,n,null,s);break;case"together":fd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _c(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Se(153));if(e.child!==null){for(t=e.child,n=Kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vM(t,e,n){switch(e.tag){case 3:J1(e),No();break;case 5:T1(e);break;case 1:ui(e.type)&&Oc(e);break;case 4:hp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Xt(Bc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Xt(en,en.current&1),e.flags|=128,null):n&e.child.childLanes?Z1(t,e,n):(Xt(en,en.current&1),t=wr(t,e,n),t!==null?t.sibling:null);Xt(en,en.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Q1(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Xt(en,en.current),i)break;return null;case 22:case 23:return e.lanes=0,$1(t,e,n)}return wr(t,e,n)}var e_,Bf,t_,n_;e_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bf=function(){};t_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ts(ir.current);var s=null;switch(n){case"input":r=lf(t,r),i=lf(t,i),s=[];break;case"select":r=nn({},r,{value:void 0}),i=nn({},i,{value:void 0}),s=[];break;case"textarea":r=df(t,r),i=df(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Uc)}hf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Yt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};n_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ua(t,e){if(!Jt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Hn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function _M(t,e,n){var i=e.pendingProps;switch(op(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hn(e),null;case 1:return ui(e.type)&&Fc(),Hn(e),null;case 3:return i=e.stateNode,Fo(),qt(ci),qt(jn),mp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bi!==null&&(qf(Bi),Bi=null))),Bf(t,e),Hn(e),null;case 5:pp(e);var r=Ts($a.current);if(n=e.type,t!==null&&e.stateNode!=null)t_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Se(166));return Hn(e),null}if(t=Ts(ir.current),Dl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qi]=e,i[Ya]=s,t=(e.mode&1)!==0,n){case"dialog":Yt("cancel",i),Yt("close",i);break;case"iframe":case"object":case"embed":Yt("load",i);break;case"video":case"audio":for(r=0;r<Ea.length;r++)Yt(Ea[r],i);break;case"source":Yt("error",i);break;case"img":case"image":case"link":Yt("error",i),Yt("load",i);break;case"details":Yt("toggle",i);break;case"input":qm(i,s),Yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Yt("invalid",i);break;case"textarea":Km(i,s),Yt("invalid",i)}hf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ll(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ll(i.textContent,a,t),r=["children",""+a]):Oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Yt("scroll",i)}switch(n){case"input":wl(i),$m(i,s,!0);break;case"textarea":wl(i),Jm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Uc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Qi]=e,t[Ya]=i,e_(t,e,!1,!1),e.stateNode=t;e:{switch(o=pf(n,i),n){case"dialog":Yt("cancel",t),Yt("close",t),r=i;break;case"iframe":case"object":case"embed":Yt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ea.length;r++)Yt(Ea[r],t);r=i;break;case"source":Yt("error",t),r=i;break;case"img":case"image":case"link":Yt("error",t),Yt("load",t),r=i;break;case"details":Yt("toggle",t),r=i;break;case"input":qm(t,i),r=lf(t,i),Yt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=nn({},i,{value:void 0}),Yt("invalid",t);break;case"textarea":Km(t,i),r=df(t,i),Yt("invalid",t);break;default:r=i}hf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Iv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ka(t,l):typeof l=="number"&&ka(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Yt("scroll",t):l!=null&&Xh(t,s,l,o))}switch(n){case"input":wl(t),$m(t,i,!1);break;case"textarea":wl(t),Jm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Qr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?wo(t,!!i.multiple,s,!1):i.defaultValue!=null&&wo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Uc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Hn(e),null;case 6:if(t&&e.stateNode!=null)n_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Se(166));if(n=Ts($a.current),Ts(ir.current),Dl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qi]=e,(s=i.nodeValue!==n)&&(t=xi,t!==null))switch(t.tag){case 3:Ll(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ll(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qi]=e,e.stateNode=i}return Hn(e),null;case 13:if(qt(en),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Jt&&_i!==null&&e.mode&1&&!(e.flags&128))y1(),No(),e.flags|=98560,s=!1;else if(s=Dl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Se(317));s[Qi]=e}else No(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Hn(e),s=!1}else Bi!==null&&(qf(Bi),Bi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||en.current&1?Sn===0&&(Sn=3):bp())),e.updateQueue!==null&&(e.flags|=4),Hn(e),null);case 4:return Fo(),Bf(t,e),t===null&&Xa(e.stateNode.containerInfo),Hn(e),null;case 10:return up(e.type._context),Hn(e),null;case 17:return ui(e.type)&&Fc(),Hn(e),null;case 19:if(qt(en),s=e.memoizedState,s===null)return Hn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ua(s,!1);else{if(Sn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gc(t),o!==null){for(e.flags|=128,ua(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Xt(en,en.current&1|2),e.child}t=t.sibling}s.tail!==null&&un()>ko&&(e.flags|=128,i=!0,ua(s,!1),e.lanes=4194304)}else{if(!i)if(t=Gc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ua(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Jt)return Hn(e),null}else 2*un()-s.renderingStartTime>ko&&n!==1073741824&&(e.flags|=128,i=!0,ua(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=un(),e.sibling=null,n=en.current,Xt(en,i?n&1|2:n&1),e):(Hn(e),null);case 22:case 23:return Ap(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gi&1073741824&&(Hn(e),e.subtreeFlags&6&&(e.flags|=8192)):Hn(e),null;case 24:return null;case 25:return null}throw Error(Se(156,e.tag))}function xM(t,e){switch(op(e),e.tag){case 1:return ui(e.type)&&Fc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fo(),qt(ci),qt(jn),mp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pp(e),null;case 13:if(qt(en),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Se(340));No()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return qt(en),null;case 4:return Fo(),null;case 10:return up(e.type._context),null;case 22:case 23:return Ap(),null;case 24:return null;default:return null}}var Ul=!1,Xn=!1,yM=typeof WeakSet=="function"?WeakSet:Set,He=null;function yo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){on(t,e,i)}else n.current=null}function Hf(t,e,n){try{n()}catch(i){on(t,e,i)}}var B0=!1;function MM(t,e){if(Ef=Dc,t=a1(),rp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tf={focusedElem:t,selectionRange:n},Dc=!1,He=e;He!==null;)if(e=He,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,He=t;else for(;He!==null;){e=He;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,_=y.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?w:Oi(e.type,w),_);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(S){on(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,He=t;break}He=e.return}return y=B0,B0=!1,y}function Da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hf(e,n,s)}r=r.next}while(r!==i)}}function du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function i_(t){var e=t.alternate;e!==null&&(t.alternate=null,i_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qi],delete e[Ya],delete e[Cf],delete e[iM],delete e[rM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function r_(t){return t.tag===5||t.tag===3||t.tag===4}function H0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Uc));else if(i!==4&&(t=t.child,t!==null))for(Gf(t,e,n),t=t.sibling;t!==null;)Gf(t,e,n),t=t.sibling}function Wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wf(t,e,n),t=t.sibling;t!==null;)Wf(t,e,n),t=t.sibling}var Nn=null,ki=!1;function Cr(t,e,n){for(n=n.child;n!==null;)s_(t,e,n),n=n.sibling}function s_(t,e,n){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(iu,n)}catch{}switch(n.tag){case 5:Xn||yo(n,e);case 6:var i=Nn,r=ki;Nn=null,Cr(t,e,n),Nn=i,ki=r,Nn!==null&&(ki?(t=Nn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nn.removeChild(n.stateNode));break;case 18:Nn!==null&&(ki?(t=Nn,n=n.stateNode,t.nodeType===8?sd(t.parentNode,n):t.nodeType===1&&sd(t,n),Va(t)):sd(Nn,n.stateNode));break;case 4:i=Nn,r=ki,Nn=n.stateNode.containerInfo,ki=!0,Cr(t,e,n),Nn=i,ki=r;break;case 0:case 11:case 14:case 15:if(!Xn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hf(n,e,o),r=r.next}while(r!==i)}Cr(t,e,n);break;case 1:if(!Xn&&(yo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){on(n,e,a)}Cr(t,e,n);break;case 21:Cr(t,e,n);break;case 22:n.mode&1?(Xn=(i=Xn)||n.memoizedState!==null,Cr(t,e,n),Xn=i):Cr(t,e,n);break;default:Cr(t,e,n)}}function V0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yM),e.forEach(function(i){var r=PM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ii(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nn=a.stateNode,ki=!1;break e;case 3:Nn=a.stateNode.containerInfo,ki=!0;break e;case 4:Nn=a.stateNode.containerInfo,ki=!0;break e}a=a.return}if(Nn===null)throw Error(Se(160));s_(s,o,r),Nn=null,ki=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){on(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o_(e,t),e=e.sibling}function o_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ii(e,t),$i(t),i&4){try{Da(3,t,t.return),du(3,t)}catch(w){on(t,t.return,w)}try{Da(5,t,t.return)}catch(w){on(t,t.return,w)}}break;case 1:Ii(e,t),$i(t),i&512&&n!==null&&yo(n,n.return);break;case 5:if(Ii(e,t),$i(t),i&512&&n!==null&&yo(n,n.return),t.flags&32){var r=t.stateNode;try{ka(r,"")}catch(w){on(t,t.return,w)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cv(r,s),pf(a,o);var c=pf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Iv(r,f):d==="dangerouslySetInnerHTML"?Lv(r,f):d==="children"?ka(r,f):Xh(r,d,f,c)}switch(a){case"input":cf(r,s);break;case"textarea":Rv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?wo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?wo(r,!!s.multiple,s.defaultValue,!0):wo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ya]=s}catch(w){on(t,t.return,w)}}break;case 6:if(Ii(e,t),$i(t),i&4){if(t.stateNode===null)throw Error(Se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(w){on(t,t.return,w)}}break;case 3:if(Ii(e,t),$i(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Va(e.containerInfo)}catch(w){on(t,t.return,w)}break;case 4:Ii(e,t),$i(t);break;case 13:Ii(e,t),$i(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ep=un())),i&4&&V0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Xn=(c=Xn)||d,Ii(e,t),Xn=c):Ii(e,t),$i(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(He=t,d=t.child;d!==null;){for(f=He=d;He!==null;){switch(h=He,p=h.child,h.tag){case 0:case 11:case 14:case 15:Da(4,h,h.return);break;case 1:yo(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){on(i,n,w)}}break;case 5:yo(h,h.return);break;case 22:if(h.memoizedState!==null){W0(f);continue}}p!==null?(p.return=h,He=p):W0(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Dv("display",o))}catch(w){on(t,t.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){on(t,t.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ii(e,t),$i(t),i&4&&V0(t);break;case 21:break;default:Ii(e,t),$i(t)}}function $i(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(r_(n)){var i=n;break e}n=n.return}throw Error(Se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ka(r,""),i.flags&=-33);var s=H0(t);Wf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=H0(t);Gf(t,a,o);break;default:throw Error(Se(161))}}catch(l){on(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SM(t,e,n){He=t,a_(t)}function a_(t,e,n){for(var i=(t.mode&1)!==0;He!==null;){var r=He,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ul;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xn;a=Ul;var c=Xn;if(Ul=o,(Xn=l)&&!c)for(He=r;He!==null;)o=He,l=o.child,o.tag===22&&o.memoizedState!==null?X0(r):l!==null?(l.return=o,He=l):X0(r);for(;s!==null;)He=s,a_(s),s=s.sibling;He=r,Ul=a,Xn=c}G0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,He=s):G0(t)}}function G0(t){for(;He!==null;){var e=He;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xn||du(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Oi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&b0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}b0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Va(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}Xn||e.flags&512&&Vf(e)}catch(h){on(e,e.return,h)}}if(e===t){He=null;break}if(n=e.sibling,n!==null){n.return=e.return,He=n;break}He=e.return}}function W0(t){for(;He!==null;){var e=He;if(e===t){He=null;break}var n=e.sibling;if(n!==null){n.return=e.return,He=n;break}He=e.return}}function X0(t){for(;He!==null;){var e=He;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{du(4,e)}catch(l){on(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){on(e,r,l)}}var s=e.return;try{Vf(e)}catch(l){on(e,s,l)}break;case 5:var o=e.return;try{Vf(e)}catch(l){on(e,o,l)}}}catch(l){on(e,e.return,l)}if(e===t){He=null;break}var a=e.sibling;if(a!==null){a.return=e.return,He=a;break}He=e.return}}var wM=Math.ceil,jc=Er.ReactCurrentDispatcher,Sp=Er.ReactCurrentOwner,Ri=Er.ReactCurrentBatchConfig,At=0,Rn=null,pn=null,Un=0,gi=0,Mo=rs(0),Sn=0,Qa=null,Is=0,fu=0,wp=0,Ia=null,ai=null,Ep=0,ko=1/0,hr=null,Yc=!1,Xf=null,qr=null,Fl=!1,Vr=null,qc=0,Na=0,jf=null,xc=-1,yc=0;function Qn(){return At&6?un():xc!==-1?xc:xc=un()}function $r(t){return t.mode&1?At&2&&Un!==0?Un&-Un:oM.transition!==null?(yc===0&&(yc=Xv()),yc):(t=kt,t!==0||(t=window.event,t=t===void 0?16:Zv(t.type)),t):1}function Wi(t,e,n,i){if(50<Na)throw Na=0,jf=null,Error(Se(185));ol(t,n,i),(!(At&2)||t!==Rn)&&(t===Rn&&(!(At&2)&&(fu|=n),Sn===4&&zr(t,Un)),di(t,i),n===1&&At===0&&!(e.mode&1)&&(ko=un()+500,lu&&ss()))}function di(t,e){var n=t.callbackNode;oy(t,e);var i=Lc(t,t===Rn?Un:0);if(i===0)n!==null&&e0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&e0(n),e===1)t.tag===0?sM(j0.bind(null,t)):v1(j0.bind(null,t)),tM(function(){!(At&6)&&ss()}),n=null;else{switch(jv(i)){case 1:n=Kh;break;case 4:n=Gv;break;case 16:n=Pc;break;case 536870912:n=Wv;break;default:n=Pc}n=m_(n,l_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function l_(t,e){if(xc=-1,yc=0,At&6)throw Error(Se(327));var n=t.callbackNode;if(Co()&&t.callbackNode!==n)return null;var i=Lc(t,t===Rn?Un:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=$c(t,i);else{e=i;var r=At;At|=2;var s=u_();(Rn!==t||Un!==e)&&(hr=null,ko=un()+500,Cs(t,e));do try{AM();break}catch(a){c_(t,a)}while(!0);cp(),jc.current=s,At=r,pn!==null?e=0:(Rn=null,Un=0,e=Sn)}if(e!==0){if(e===2&&(r=xf(t),r!==0&&(i=r,e=Yf(t,r))),e===1)throw n=Qa,Cs(t,0),zr(t,i),di(t,un()),n;if(e===6)zr(t,i);else{if(r=t.current.alternate,!(i&30)&&!EM(r)&&(e=$c(t,i),e===2&&(s=xf(t),s!==0&&(i=s,e=Yf(t,s))),e===1))throw n=Qa,Cs(t,0),zr(t,i),di(t,un()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Se(345));case 2:_s(t,ai,hr);break;case 3:if(zr(t,i),(i&130023424)===i&&(e=Ep+500-un(),10<e)){if(Lc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bf(_s.bind(null,t,ai,hr),e);break}_s(t,ai,hr);break;case 4:if(zr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Gi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=un()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wM(i/1960))-i,10<i){t.timeoutHandle=bf(_s.bind(null,t,ai,hr),i);break}_s(t,ai,hr);break;case 5:_s(t,ai,hr);break;default:throw Error(Se(329))}}}return di(t,un()),t.callbackNode===n?l_.bind(null,t):null}function Yf(t,e){var n=Ia;return t.current.memoizedState.isDehydrated&&(Cs(t,e).flags|=256),t=$c(t,e),t!==2&&(e=ai,ai=n,e!==null&&qf(e)),t}function qf(t){ai===null?ai=t:ai.push.apply(ai,t)}function EM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ji(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zr(t,e){for(e&=~wp,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gi(e),i=1<<n;t[n]=-1,e&=~i}}function j0(t){if(At&6)throw Error(Se(327));Co();var e=Lc(t,0);if(!(e&1))return di(t,un()),null;var n=$c(t,e);if(t.tag!==0&&n===2){var i=xf(t);i!==0&&(e=i,n=Yf(t,i))}if(n===1)throw n=Qa,Cs(t,0),zr(t,e),di(t,un()),n;if(n===6)throw Error(Se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_s(t,ai,hr),di(t,un()),null}function Tp(t,e){var n=At;At|=1;try{return t(e)}finally{At=n,At===0&&(ko=un()+500,lu&&ss())}}function Ns(t){Vr!==null&&Vr.tag===0&&!(At&6)&&Co();var e=At;At|=1;var n=Ri.transition,i=kt;try{if(Ri.transition=null,kt=1,t)return t()}finally{kt=i,Ri.transition=n,At=e,!(At&6)&&ss()}}function Ap(){gi=Mo.current,qt(Mo)}function Cs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eM(n)),pn!==null)for(n=pn.return;n!==null;){var i=n;switch(op(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fc();break;case 3:Fo(),qt(ci),qt(jn),mp();break;case 5:pp(i);break;case 4:Fo();break;case 13:qt(en);break;case 19:qt(en);break;case 10:up(i.type._context);break;case 22:case 23:Ap()}n=n.return}if(Rn=t,pn=t=Kr(t.current,null),Un=gi=e,Sn=0,Qa=null,wp=fu=Is=0,ai=Ia=null,Es!==null){for(e=0;e<Es.length;e++)if(n=Es[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Es=null}return t}function c_(t,e){do{var n=pn;try{if(cp(),gc.current=Xc,Wc){for(var i=tn.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Wc=!1}if(Ds=0,Cn=Mn=tn=null,La=!1,Ka=0,Sp.current=null,n===null||n.return===null){Sn=1,Qa=e,pn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Un,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=I0(o);if(p!==null){p.flags&=-257,N0(p,o,a,s,e),p.mode&1&&D0(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){D0(s,c,e),bp();break e}l=Error(Se(426))}}else if(Jt&&a.mode&1){var _=I0(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),N0(_,o,a,s,e),ap(Oo(l,a));break e}}s=l=Oo(l,a),Sn!==4&&(Sn=2),Ia===null?Ia=[s]:Ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=j1(s,l,e);A0(s,u);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(qr===null||!qr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Y1(s,a,e);A0(s,S);break e}}s=s.return}while(s!==null)}f_(n)}catch(R){e=R,pn===n&&n!==null&&(pn=n=n.return);continue}break}while(!0)}function u_(){var t=jc.current;return jc.current=Xc,t===null?Xc:t}function bp(){(Sn===0||Sn===3||Sn===2)&&(Sn=4),Rn===null||!(Is&268435455)&&!(fu&268435455)||zr(Rn,Un)}function $c(t,e){var n=At;At|=2;var i=u_();(Rn!==t||Un!==e)&&(hr=null,Cs(t,e));do try{TM();break}catch(r){c_(t,r)}while(!0);if(cp(),At=n,jc.current=i,pn!==null)throw Error(Se(261));return Rn=null,Un=0,Sn}function TM(){for(;pn!==null;)d_(pn)}function AM(){for(;pn!==null&&!Jx();)d_(pn)}function d_(t){var e=p_(t.alternate,t,gi);t.memoizedProps=t.pendingProps,e===null?f_(t):pn=e,Sp.current=null}function f_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xM(n,e),n!==null){n.flags&=32767,pn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Sn=6,pn=null;return}}else if(n=_M(n,e,gi),n!==null){pn=n;return}if(e=e.sibling,e!==null){pn=e;return}pn=e=t}while(e!==null);Sn===0&&(Sn=5)}function _s(t,e,n){var i=kt,r=Ri.transition;try{Ri.transition=null,kt=1,bM(t,e,n,i)}finally{Ri.transition=r,kt=i}return null}function bM(t,e,n,i){do Co();while(Vr!==null);if(At&6)throw Error(Se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ay(t,s),t===Rn&&(pn=Rn=null,Un=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fl||(Fl=!0,m_(Pc,function(){return Co(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ri.transition,Ri.transition=null;var o=kt;kt=1;var a=At;At|=4,Sp.current=null,MM(t,n),o_(n,t),Yy(Tf),Dc=!!Ef,Tf=Ef=null,t.current=n,SM(n),Zx(),At=a,kt=o,Ri.transition=s}else t.current=n;if(Fl&&(Fl=!1,Vr=t,qc=r),s=t.pendingLanes,s===0&&(qr=null),ty(n.stateNode),di(t,un()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Yc)throw Yc=!1,t=Xf,Xf=null,t;return qc&1&&t.tag!==0&&Co(),s=t.pendingLanes,s&1?t===jf?Na++:(Na=0,jf=t):Na=0,ss(),null}function Co(){if(Vr!==null){var t=jv(qc),e=Ri.transition,n=kt;try{if(Ri.transition=null,kt=16>t?16:t,Vr===null)var i=!1;else{if(t=Vr,Vr=null,qc=0,At&6)throw Error(Se(331));var r=At;for(At|=4,He=t.current;He!==null;){var s=He,o=s.child;if(He.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(He=c;He!==null;){var d=He;switch(d.tag){case 0:case 11:case 15:Da(8,d,s)}var f=d.child;if(f!==null)f.return=d,He=f;else for(;He!==null;){d=He;var h=d.sibling,p=d.return;if(i_(d),d===c){He=null;break}if(h!==null){h.return=p,He=h;break}He=p}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}He=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,He=o;else e:for(;He!==null;){if(s=He,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Da(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,He=u;break e}He=s.return}}var v=t.current;for(He=v;He!==null;){o=He;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,He=x;else e:for(o=v;He!==null;){if(a=He,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:du(9,a)}}catch(R){on(a,a.return,R)}if(a===o){He=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,He=S;break e}He=a.return}}if(At=r,ss(),nr&&typeof nr.onPostCommitFiberRoot=="function")try{nr.onPostCommitFiberRoot(iu,t)}catch{}i=!0}return i}finally{kt=n,Ri.transition=e}}return!1}function Y0(t,e,n){e=Oo(n,e),e=j1(t,e,1),t=Yr(t,e,1),e=Qn(),t!==null&&(ol(t,1,e),di(t,e))}function on(t,e,n){if(t.tag===3)Y0(t,t,n);else for(;e!==null;){if(e.tag===3){Y0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qr===null||!qr.has(i))){t=Oo(n,t),t=Y1(e,t,1),e=Yr(e,t,1),t=Qn(),e!==null&&(ol(e,1,t),di(e,t));break}}e=e.return}}function CM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qn(),t.pingedLanes|=t.suspendedLanes&n,Rn===t&&(Un&n)===n&&(Sn===4||Sn===3&&(Un&130023424)===Un&&500>un()-Ep?Cs(t,0):wp|=n),di(t,e)}function h_(t,e){e===0&&(t.mode&1?(e=Al,Al<<=1,!(Al&130023424)&&(Al=4194304)):e=1);var n=Qn();t=Sr(t,e),t!==null&&(ol(t,e,n),di(t,n))}function RM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),h_(t,n)}function PM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Se(314))}i!==null&&i.delete(e),h_(t,n)}var p_;p_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ci.current)li=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return li=!1,vM(t,e,n);li=!!(t.flags&131072)}else li=!1,Jt&&e.flags&1048576&&_1(e,zc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;_c(t,e),t=e.pendingProps;var r=Io(e,jn.current);bo(e,n),r=vp(null,e,i,t,r,n);var s=_p();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ui(i)?(s=!0,Oc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fp(e),r.updater=uu,e.stateNode=r,r._reactInternals=e,Nf(e,i,t,n),e=Of(null,e,i,!0,s,n)):(e.tag=0,Jt&&s&&sp(e),Jn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(_c(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=DM(i),t=Oi(i,t),r){case 0:e=Ff(null,e,i,t,n);break e;case 1:e=O0(null,e,i,t,n);break e;case 11:e=U0(null,e,i,t,n);break e;case 14:e=F0(null,e,i,Oi(i.type,t),n);break e}throw Error(Se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Oi(i,r),Ff(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Oi(i,r),O0(t,e,i,r,n);case 3:e:{if(J1(e),t===null)throw Error(Se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,E1(t,e),Vc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Oo(Error(Se(423)),e),e=k0(t,e,i,n,r);break e}else if(i!==r){r=Oo(Error(Se(424)),e),e=k0(t,e,i,n,r);break e}else for(_i=jr(e.stateNode.containerInfo.firstChild),xi=e,Jt=!0,Bi=null,n=S1(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(No(),i===r){e=wr(t,e,n);break e}Jn(t,e,i,n)}e=e.child}return e;case 5:return T1(e),t===null&&Lf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Af(i,r)?o=null:s!==null&&Af(i,s)&&(e.flags|=32),K1(t,e),Jn(t,e,o,n),e.child;case 6:return t===null&&Lf(e),null;case 13:return Z1(t,e,n);case 4:return hp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Uo(e,null,i,n):Jn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Oi(i,r),U0(t,e,i,r,n);case 7:return Jn(t,e,e.pendingProps,n),e.child;case 8:return Jn(t,e,e.pendingProps.children,n),e.child;case 12:return Jn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Xt(Bc,i._currentValue),i._currentValue=o,s!==null)if(ji(s.value,o)){if(s.children===r.children&&!ci.current){e=wr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=_r(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Df(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Df(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,bo(e,n),r=Pi(r),i=i(r),e.flags|=1,Jn(t,e,i,n),e.child;case 14:return i=e.type,r=Oi(i,e.pendingProps),r=Oi(i.type,r),F0(t,e,i,r,n);case 15:return q1(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Oi(i,r),_c(t,e),e.tag=1,ui(i)?(t=!0,Oc(e)):t=!1,bo(e,n),X1(e,i,r),Nf(e,i,r,n),Of(null,e,i,!0,t,n);case 19:return Q1(t,e,n);case 22:return $1(t,e,n)}throw Error(Se(156,e.tag))};function m_(t,e){return Vv(t,e)}function LM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ci(t,e,n,i){return new LM(t,e,n,i)}function Cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DM(t){if(typeof t=="function")return Cp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yh)return 11;if(t===qh)return 14}return 2}function Kr(t,e){var n=t.alternate;return n===null?(n=Ci(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Mc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Cp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case uo:return Rs(n.children,r,s,e);case jh:o=8,r|=8;break;case rf:return t=Ci(12,n,e,r|2),t.elementType=rf,t.lanes=s,t;case sf:return t=Ci(13,n,e,r),t.elementType=sf,t.lanes=s,t;case of:return t=Ci(19,n,e,r),t.elementType=of,t.lanes=s,t;case Tv:return hu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wv:o=10;break e;case Ev:o=9;break e;case Yh:o=11;break e;case qh:o=14;break e;case Fr:o=16,i=null;break e}throw Error(Se(130,t==null?t:typeof t,""))}return e=Ci(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Rs(t,e,n,i){return t=Ci(7,t,i,e),t.lanes=n,t}function hu(t,e,n,i){return t=Ci(22,t,i,e),t.elementType=Tv,t.lanes=n,t.stateNode={isHidden:!1},t}function hd(t,e,n){return t=Ci(6,t,null,e),t.lanes=n,t}function pd(t,e,n){return e=Ci(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function IM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qu(0),this.expirationTimes=qu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Rp(t,e,n,i,r,s,o,a,l){return t=new IM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ci(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fp(s),t}function NM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:co,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function g_(t){if(!t)return es;t=t._reactInternals;e:{if(ks(t)!==t||t.tag!==1)throw Error(Se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ui(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Se(171))}if(t.tag===1){var n=t.type;if(ui(n))return g1(t,n,e)}return e}function v_(t,e,n,i,r,s,o,a,l){return t=Rp(n,i,!0,t,r,s,o,a,l),t.context=g_(null),n=t.current,i=Qn(),r=$r(n),s=_r(i,r),s.callback=e??null,Yr(n,s,r),t.current.lanes=r,ol(t,r,i),di(t,i),t}function pu(t,e,n,i){var r=e.current,s=Qn(),o=$r(r);return n=g_(n),e.context===null?e.context=n:e.pendingContext=n,e=_r(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Yr(r,e,o),t!==null&&(Wi(t,r,o,s),mc(t,r,o)),o}function Kc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function q0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pp(t,e){q0(t,e),(t=t.alternate)&&q0(t,e)}function UM(){return null}var __=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lp(t){this._internalRoot=t}mu.prototype.render=Lp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Se(409));pu(t,e,null,null)};mu.prototype.unmount=Lp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ns(function(){pu(null,t,null,null)}),e[Mr]=null}};function mu(t){this._internalRoot=t}mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=$v();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kr.length&&e!==0&&e<kr[n].priority;n++);kr.splice(n,0,t),n===0&&Jv(t)}};function Dp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $0(){}function FM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Kc(o);s.call(c)}}var o=v_(e,i,t,0,null,!1,!1,"",$0);return t._reactRootContainer=o,t[Mr]=o.current,Xa(t.nodeType===8?t.parentNode:t),Ns(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Kc(l);a.call(c)}}var l=Rp(t,0,!1,null,null,!1,!1,"",$0);return t._reactRootContainer=l,t[Mr]=l.current,Xa(t.nodeType===8?t.parentNode:t),Ns(function(){pu(e,l,n,i)}),l}function vu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Kc(o);a.call(l)}}pu(e,o,t,r)}else o=FM(n,e,t,r,i);return Kc(o)}Yv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wa(e.pendingLanes);n!==0&&(Jh(e,n|1),di(e,un()),!(At&6)&&(ko=un()+500,ss()))}break;case 13:Ns(function(){var i=Sr(t,1);if(i!==null){var r=Qn();Wi(i,t,1,r)}}),Pp(t,1)}};Zh=function(t){if(t.tag===13){var e=Sr(t,134217728);if(e!==null){var n=Qn();Wi(e,t,134217728,n)}Pp(t,134217728)}};qv=function(t){if(t.tag===13){var e=$r(t),n=Sr(t,e);if(n!==null){var i=Qn();Wi(n,t,e,i)}Pp(t,e)}};$v=function(){return kt};Kv=function(t,e){var n=kt;try{return kt=t,e()}finally{kt=n}};gf=function(t,e,n){switch(e){case"input":if(cf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=au(i);if(!r)throw Error(Se(90));bv(i),cf(i,r)}}}break;case"textarea":Rv(t,n);break;case"select":e=n.value,e!=null&&wo(t,!!n.multiple,e,!1)}};Fv=Tp;Ov=Ns;var OM={usingClientEntryPoint:!1,Events:[ll,mo,au,Nv,Uv,Tp]},da={findFiberByHostInstance:ws,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kM={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bv(t),t===null?null:t.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||UM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{iu=Ol.inject(kM),nr=Ol}catch{}}Mi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OM;Mi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dp(e))throw Error(Se(200));return NM(t,e,null,n)};Mi.createRoot=function(t,e){if(!Dp(t))throw Error(Se(299));var n=!1,i="",r=__;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Rp(t,1,!1,null,null,n,!1,i,r),t[Mr]=e.current,Xa(t.nodeType===8?t.parentNode:t),new Lp(e)};Mi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Se(188)):(t=Object.keys(t).join(","),Error(Se(268,t)));return t=Bv(e),t=t===null?null:t.stateNode,t};Mi.flushSync=function(t){return Ns(t)};Mi.hydrate=function(t,e,n){if(!gu(e))throw Error(Se(200));return vu(null,t,e,!0,n)};Mi.hydrateRoot=function(t,e,n){if(!Dp(t))throw Error(Se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=__;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=v_(e,null,t,1,n??null,r,!1,s,o),t[Mr]=e.current,Xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new mu(e)};Mi.render=function(t,e,n){if(!gu(e))throw Error(Se(200));return vu(null,t,e,!1,n)};Mi.unmountComponentAtNode=function(t){if(!gu(t))throw Error(Se(40));return t._reactRootContainer?(Ns(function(){vu(null,null,t,!1,function(){t._reactRootContainer=null,t[Mr]=null})}),!0):!1};Mi.unstable_batchedUpdates=Tp;Mi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!gu(n))throw Error(Se(200));if(t==null||t._reactInternals===void 0)throw Error(Se(38));return vu(t,e,n,!1,i)};Mi.version="18.3.1-next-f1338f8080-20240426";function x_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x_)}catch(t){console.error(t)}}x_(),xv.exports=Mi;var zM=xv.exports,y_,K0=zM;y_=K0.createRoot,K0.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ip="180",BM=0,J0=1,HM=2,M_=1,S_=2,fr=3,ts=0,fi=1,bn=2,Jr=0,Ro=1,Z0=2,Q0=3,eg=4,VM=5,Ms=100,GM=101,WM=102,XM=103,jM=104,YM=200,qM=201,$M=202,KM=203,$f=204,Kf=205,JM=206,ZM=207,QM=208,eS=209,tS=210,nS=211,iS=212,rS=213,sS=214,Jf=0,Zf=1,Qf=2,zo=3,eh=4,th=5,nh=6,ih=7,Np=0,oS=1,aS=2,Zr=0,lS=1,cS=2,uS=3,w_=4,dS=5,fS=6,hS=7,E_=300,Bo=301,Ho=302,rh=303,sh=304,_u=306,Po=1e3,As=1001,oh=1002,Xi=1003,pS=1004,kl=1005,er=1006,md=1007,bs=1008,sr=1009,T_=1010,A_=1011,el=1012,Up=1013,Us=1014,vr=1015,ul=1016,Fp=1017,Op=1018,tl=1020,b_=35902,C_=35899,R_=1021,P_=1022,Vi=1023,nl=1026,il=1027,L_=1028,kp=1029,D_=1030,zp=1031,Bp=1033,Sc=33776,wc=33777,Ec=33778,Tc=33779,ah=35840,lh=35841,ch=35842,uh=35843,dh=36196,fh=37492,hh=37496,ph=37808,mh=37809,gh=37810,vh=37811,_h=37812,xh=37813,yh=37814,Mh=37815,Sh=37816,wh=37817,Eh=37818,Th=37819,Ah=37820,bh=37821,Ch=36492,Rh=36494,Ph=36495,Lh=36283,Dh=36284,Ih=36285,Nh=36286,mS=3200,gS=3201,Hp=0,vS=1,Br="",Zn="srgb",Vo="srgb-linear",Jc="linear",Ht="srgb",qs=7680,tg=519,_S=512,xS=513,yS=514,I_=515,MS=516,SS=517,wS=518,ES=519,ng=35044,ig="300 es",tr=2e3,Zc=2001;class Yo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gd=Math.PI/180,Uh=180/Math.PI;function dl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vn[t&255]+Vn[t>>8&255]+Vn[t>>16&255]+Vn[t>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[n&63|128]+Vn[n>>8&255]+"-"+Vn[n>>16&255]+Vn[n>>24&255]+Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]).toLowerCase()}function vt(t,e,n){return Math.max(e,Math.min(n,t))}function TS(t,e){return(t%e+e)%e}function vd(t,e,n){return(1-n)*t+n*e}function fa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function oi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],y=s[o+2],w=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=y,e[n+3]=w;return}if(f!==w||l!==h||c!==p||d!==y){let _=1-a;const u=l*h+c*p+d*y+f*w,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const R=Math.sqrt(x),P=Math.atan2(R,u*v);_=Math.sin(_*P)/R,a=Math.sin(a*P)/R}const S=a*v;if(l=l*_+h*S,c=c*_+p*S,d=d*_+y*S,f=f*_+w*S,_===1-a){const R=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=R,c*=R,d*=R,f*=R}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],p=s[o+2],y=s[o+3];return e[n]=a*y+d*f+l*p-c*h,e[n+1]=l*y+d*h+c*f-a*p,e[n+2]=c*y+d*p+a*h-l*f,e[n+3]=d*y-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*p*y,this._y=c*p*f-h*d*y,this._z=c*d*y+h*p*f,this._w=c*d*f-h*p*y;break;case"YXZ":this._x=h*d*f+c*p*y,this._y=c*p*f-h*d*y,this._z=c*d*y-h*p*f,this._w=c*d*f+h*p*y;break;case"ZXY":this._x=h*d*f-c*p*y,this._y=c*p*f+h*d*y,this._z=c*d*y+h*p*f,this._w=c*d*f-h*p*y;break;case"ZYX":this._x=h*d*f-c*p*y,this._y=c*p*f+h*d*y,this._z=c*d*y-h*p*f,this._w=c*d*f+h*p*y;break;case"YZX":this._x=h*d*f+c*p*y,this._y=c*p*f+h*d*y,this._z=c*d*y-h*p*f,this._w=c*d*f-h*p*y;break;case"XZY":this._x=h*d*f-c*p*y,this._y=c*p*f-h*d*y,this._z=c*d*y+h*p*f,this._w=c*d*f+h*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _d.copy(this).projectOnVector(e),this.sub(_d)}reflect(e){return this.sub(_d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _d=new z,rg=new fl;class dt{constructor(e,n,i,r,s,o,a,l,c){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],y=i[8],w=r[0],_=r[3],u=r[6],v=r[1],x=r[4],S=r[7],R=r[2],P=r[5],L=r[8];return s[0]=o*w+a*v+l*R,s[3]=o*_+a*x+l*P,s[6]=o*u+a*S+l*L,s[1]=c*w+d*v+f*R,s[4]=c*_+d*x+f*P,s[7]=c*u+d*S+f*L,s[2]=h*w+p*v+y*R,s[5]=h*_+p*x+y*P,s[8]=h*u+p*S+y*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,p=c*s-o*l,y=n*f+i*h+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=f*w,e[1]=(r*c-d*i)*w,e[2]=(a*i-r*o)*w,e[3]=h*w,e[4]=(d*n-r*l)*w,e[5]=(r*s-a*n)*w,e[6]=p*w,e[7]=(i*l-c*n)*w,e[8]=(o*n-i*s)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(xd.makeScale(e,n)),this}rotate(e){return this.premultiply(xd.makeRotation(-e)),this}translate(e,n){return this.premultiply(xd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xd=new dt;function N_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Qc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function AS(){const t=Qc("canvas");return t.style.display="block",t}const sg={};function rl(t){t in sg||(sg[t]=!0,console.warn(t))}function bS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const og=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ag=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CS(){const t={enabled:!0,workingColorSpace:Vo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ht&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ht&&(r.r=Lo(r.r),r.g=Lo(r.g),r.b=Lo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Br?Jc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Vo]:{primaries:e,whitePoint:i,transfer:Jc,toXYZ:og,fromXYZ:ag,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:i,transfer:Ht,toXYZ:og,fromXYZ:ag,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),t}const Pt=CS();function xr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Lo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $s;class RS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$s===void 0&&($s=Qc("canvas")),$s.width=e.width,$s.height=e.height;const r=$s.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$s}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Qc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xr(n[i]/255)*255):n[i]=xr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PS=0;class Vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=dl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yd(r[o].image)):s.push(yd(r[o]))}else s=yd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function yd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?RS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LS=0;const Md=new z;class ei extends Yo{constructor(e=ei.DEFAULT_IMAGE,n=ei.DEFAULT_MAPPING,i=As,r=As,s=er,o=bs,a=Vi,l=sr,c=ei.DEFAULT_ANISOTROPY,d=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=dl(),this.name="",this.source=new Vp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Po:e.x=e.x-Math.floor(e.x);break;case As:e.x=e.x<0?0:1;break;case oh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Po:e.y=e.y-Math.floor(e.y);break;case As:e.y=e.y<0?0:1;break;case oh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=E_;ei.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,i=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],y=l[9],w=l[2],_=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-w)<.01&&Math.abs(y-_)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+w)<.1&&Math.abs(y+_)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,R=(u+1)/2,P=(d+h)/4,L=(f+w)/4,I=(y+_)/4;return x>S&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=P/i,s=L/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=P/r,s=I/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=L/s,r=I/s),this.set(i,r,s,n),this}let v=Math.sqrt((_-y)*(_-y)+(f-w)*(f-w)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(_-y)/v,this.y=(f-w)/v,this.z=(h-d)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DS extends Yo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:er,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new ei(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:er,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Vp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fs extends DS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class U_ extends ei{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xi,this.minFilter=Xi,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class IS extends ei{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xi,this.minFilter=Xi,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ni):Ni.fromBufferAttribute(s,o),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zl.copy(i.boundingBox)),zl.applyMatrix4(e.matrixWorld),this.union(zl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),Bl.subVectors(this.max,ha),Ks.subVectors(e.a,ha),Js.subVectors(e.b,ha),Zs.subVectors(e.c,ha),Rr.subVectors(Js,Ks),Pr.subVectors(Zs,Js),us.subVectors(Ks,Zs);let n=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-us.z,us.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,us.z,0,-us.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-us.y,us.x,0];return!Sd(n,Ks,Js,Zs,Bl)||(n=[1,0,0,0,1,0,0,0,1],!Sd(n,Ks,Js,Zs,Bl))?!1:(Hl.crossVectors(Rr,Pr),n=[Hl.x,Hl.y,Hl.z],Sd(n,Ks,Js,Zs,Bl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ar=[new z,new z,new z,new z,new z,new z,new z,new z],Ni=new z,zl=new hl,Ks=new z,Js=new z,Zs=new z,Rr=new z,Pr=new z,us=new z,ha=new z,Bl=new z,Hl=new z,ds=new z;function Sd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ds.fromArray(t,s);const a=r.x*Math.abs(ds.x)+r.y*Math.abs(ds.y)+r.z*Math.abs(ds.z),l=e.dot(ds),c=n.dot(ds),d=i.dot(ds);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const NS=new hl,pa=new z,wd=new z;class xu{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):NS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);const n=pa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(wd)),this.expandByPoint(pa.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const lr=new z,Ed=new z,Vl=new z,Lr=new z,Td=new z,Gl=new z,Ad=new z;class Gp{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=lr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,n),lr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ed.copy(e).add(n).multiplyScalar(.5),Vl.copy(n).sub(e).normalize(),Lr.copy(this.origin).sub(Ed);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Vl),a=Lr.dot(this.direction),l=-Lr.dot(Vl),c=Lr.lengthSq(),d=Math.abs(1-o*o);let f,h,p,y;if(d>0)if(f=o*l-a,h=o*a-l,y=s*d,f>=0)if(h>=-y)if(h<=y){const w=1/d;f*=w,h*=w,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-y?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=y?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ed).addScaledVector(Vl,h),p}intersectSphere(e,n){lr.subVectors(e.center,this.origin);const i=lr.dot(this.direction),r=lr.dot(lr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,n,i,r,s){Td.subVectors(n,e),Gl.subVectors(i,e),Ad.crossVectors(Td,Gl);let o=this.direction.dot(Ad),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Lr.subVectors(this.origin,e);const l=a*this.direction.dot(Gl.crossVectors(Lr,Gl));if(l<0)return null;const c=a*this.direction.dot(Td.cross(Lr));if(c<0||l+c>o)return null;const d=-a*Lr.dot(Ad);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,n,i,r,s,o,a,l,c,d,f,h,p,y,w,_){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,p,y,w,_)}set(e,n,i,r,s,o,a,l,c,d,f,h,p,y,w,_){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=y,u[11]=w,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Qs.setFromMatrixColumn(e,0).length(),s=1/Qs.setFromMatrixColumn(e,1).length(),o=1/Qs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*f,y=a*d,w=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+y*c,n[5]=h-w*c,n[9]=-a*l,n[2]=w-h*c,n[6]=y+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,y=c*d,w=c*f;n[0]=h+w*a,n[4]=y*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-y,n[6]=w+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,y=c*d,w=c*f;n[0]=h-w*a,n[4]=-o*f,n[8]=y+p*a,n[1]=p+y*a,n[5]=o*d,n[9]=w-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,y=a*d,w=a*f;n[0]=l*d,n[4]=y*c-p,n[8]=h*c+w,n[1]=l*f,n[5]=w*c+h,n[9]=p*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,y=a*l,w=a*c;n[0]=l*d,n[4]=w-h*f,n[8]=y*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+y,n[10]=h-w*f}else if(e.order==="XZY"){const h=o*l,p=o*c,y=a*l,w=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+w,n[5]=o*d,n[9]=p*f-y,n[2]=y*f-p,n[6]=a*d,n[10]=w*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(US,e,FS)}lookAt(e,n,i){const r=this.elements;return pi.subVectors(e,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Dr.crossVectors(i,pi),Dr.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Dr.crossVectors(i,pi)),Dr.normalize(),Wl.crossVectors(pi,Dr),r[0]=Dr.x,r[4]=Wl.x,r[8]=pi.x,r[1]=Dr.y,r[5]=Wl.y,r[9]=pi.y,r[2]=Dr.z,r[6]=Wl.z,r[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],y=i[2],w=i[6],_=i[10],u=i[14],v=i[3],x=i[7],S=i[11],R=i[15],P=r[0],L=r[4],I=r[8],E=r[12],M=r[1],N=r[5],V=r[9],Q=r[13],ae=r[2],ce=r[6],H=r[10],q=r[14],U=r[3],ee=r[7],re=r[11],Ee=r[15];return s[0]=o*P+a*M+l*ae+c*U,s[4]=o*L+a*N+l*ce+c*ee,s[8]=o*I+a*V+l*H+c*re,s[12]=o*E+a*Q+l*q+c*Ee,s[1]=d*P+f*M+h*ae+p*U,s[5]=d*L+f*N+h*ce+p*ee,s[9]=d*I+f*V+h*H+p*re,s[13]=d*E+f*Q+h*q+p*Ee,s[2]=y*P+w*M+_*ae+u*U,s[6]=y*L+w*N+_*ce+u*ee,s[10]=y*I+w*V+_*H+u*re,s[14]=y*E+w*Q+_*q+u*Ee,s[3]=v*P+x*M+S*ae+R*U,s[7]=v*L+x*N+S*ce+R*ee,s[11]=v*I+x*V+S*H+R*re,s[15]=v*E+x*Q+S*q+R*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],y=e[3],w=e[7],_=e[11],u=e[15];return y*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+w*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*d-s*l*d)+_*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],y=e[12],w=e[13],_=e[14],u=e[15],v=f*_*c-w*h*c+w*l*p-a*_*p-f*l*u+a*h*u,x=y*h*c-d*_*c-y*l*p+o*_*p+d*l*u-o*h*u,S=d*w*c-y*f*c+y*a*p-o*w*p-d*a*u+o*f*u,R=y*f*l-d*w*l-y*a*h+o*w*h+d*a*_-o*f*_,P=n*v+i*x+r*S+s*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=v*L,e[1]=(w*h*s-f*_*s-w*r*p+i*_*p+f*r*u-i*h*u)*L,e[2]=(a*_*s-w*l*s+w*r*c-i*_*c-a*r*u+i*l*u)*L,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*L,e[4]=x*L,e[5]=(d*_*s-y*h*s+y*r*p-n*_*p-d*r*u+n*h*u)*L,e[6]=(y*l*s-o*_*s-y*r*c+n*_*c+o*r*u-n*l*u)*L,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*p+n*l*p)*L,e[8]=S*L,e[9]=(y*f*s-d*w*s-y*i*p+n*w*p+d*i*u-n*f*u)*L,e[10]=(o*w*s-y*a*s+y*i*c-n*w*c-o*i*u+n*a*u)*L,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*p-n*a*p)*L,e[12]=R*L,e[13]=(d*w*r-y*f*r+y*i*h-n*w*h-d*i*_+n*f*_)*L,e[14]=(y*a*r-o*w*r-y*i*l+n*w*l+o*i*_-n*a*_)*L,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,p=s*d,y=s*f,w=o*d,_=o*f,u=a*f,v=l*c,x=l*d,S=l*f,R=i.x,P=i.y,L=i.z;return r[0]=(1-(w+u))*R,r[1]=(p+S)*R,r[2]=(y-x)*R,r[3]=0,r[4]=(p-S)*P,r[5]=(1-(h+u))*P,r[6]=(_+v)*P,r[7]=0,r[8]=(y+x)*L,r[9]=(_-v)*L,r[10]=(1-(h+w))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Qs.set(r[0],r[1],r[2]).length();const o=Qs.set(r[4],r[5],r[6]).length(),a=Qs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ui.copy(this);const c=1/s,d=1/o,f=1/a;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=d,Ui.elements[5]*=d,Ui.elements[6]*=d,Ui.elements[8]*=f,Ui.elements[9]*=f,Ui.elements[10]*=f,n.setFromRotationMatrix(Ui),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=tr,l=!1){const c=this.elements,d=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let y,w;if(l)y=s/(o-s),w=o*s/(o-s);else if(a===tr)y=-(o+s)/(o-s),w=-2*o*s/(o-s);else if(a===Zc)y=-o/(o-s),w=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=tr,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let y,w;if(l)y=1/(o-s),w=o/(o-s);else if(a===tr)y=-2/(o-s),w=-(o+s)/(o-s);else if(a===Zc)y=-1/(o-s),w=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Qs=new z,Ui=new $t,US=new z(0,0,0),FS=new z(1,1,1),Dr=new z,Wl=new z,pi=new z,lg=new $t,cg=new fl;class Yi{constructor(e=0,n=0,i=0,r=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cg.setFromEuler(this),this.setFromQuaternion(cg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class Wp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OS=0;const ug=new z,eo=new fl,cr=new $t,Xl=new z,ma=new z,kS=new z,zS=new fl,dg=new z(1,0,0),fg=new z(0,1,0),hg=new z(0,0,1),pg={type:"added"},BS={type:"removed"},to={type:"childadded",child:null},bd={type:"childremoved",child:null};class Pn extends Yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new z,n=new Yi,i=new fl,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new dt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(dg,e)}rotateY(e){return this.rotateOnAxis(fg,e)}rotateZ(e){return this.rotateOnAxis(hg,e)}translateOnAxis(e,n){return ug.copy(e).applyQuaternion(this.quaternion),this.position.add(ug.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dg,e)}translateY(e){return this.translateOnAxis(fg,e)}translateZ(e){return this.translateOnAxis(hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xl.copy(e):Xl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(ma,Xl,this.up):cr.lookAt(Xl,ma,this.up),this.quaternion.setFromRotationMatrix(cr),r&&(cr.extractRotation(r.matrixWorld),eo.setFromRotationMatrix(cr),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pg),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(BS),bd.child=e,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pg),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,kS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,zS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pn.DEFAULT_UP=new z(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new z,ur=new z,Cd=new z,dr=new z,no=new z,io=new z,mg=new z,Rd=new z,Pd=new z,Ld=new z,Dd=new Vt,Id=new Vt,Nd=new Vt;class Hi{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fi.subVectors(e,n),r.cross(Fi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fi.subVectors(r,n),ur.subVectors(i,n),Cd.subVectors(e,n);const o=Fi.dot(Fi),a=Fi.dot(ur),l=Fi.dot(Cd),c=ur.dot(ur),d=ur.dot(Cd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*d)*h,y=(o*d-a*l)*h;return s.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,dr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,dr.x),l.addScaledVector(o,dr.y),l.addScaledVector(a,dr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Dd.setScalar(0),Id.setScalar(0),Nd.setScalar(0),Dd.fromBufferAttribute(e,n),Id.fromBufferAttribute(e,i),Nd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Dd,s.x),o.addScaledVector(Id,s.y),o.addScaledVector(Nd,s.z),o}static isFrontFacing(e,n,i,r){return Fi.subVectors(i,n),ur.subVectors(e,n),Fi.cross(ur).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Fi.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;no.subVectors(r,i),io.subVectors(s,i),Rd.subVectors(e,i);const l=no.dot(Rd),c=io.dot(Rd);if(l<=0&&c<=0)return n.copy(i);Pd.subVectors(e,r);const d=no.dot(Pd),f=io.dot(Pd);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(no,o);Ld.subVectors(e,s);const p=no.dot(Ld),y=io.dot(Ld);if(y>=0&&p<=y)return n.copy(s);const w=p*c-l*y;if(w<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(io,a);const _=d*y-p*f;if(_<=0&&f-d>=0&&p-y>=0)return mg.subVectors(s,r),a=(f-d)/(f-d+(p-y)),n.copy(r).addScaledVector(mg,a);const u=1/(_+w+h);return o=w*u,a=h*u,n.copy(i).addScaledVector(no,o).addScaledVector(io,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},jl={h:0,s:0,l:0};function Ud(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class _t{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Pt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Pt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Pt.workingColorSpace){if(e=TS(e,1),n=vt(n,0,1),i=vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ud(o,s,e+1/3),this.g=Ud(o,s,e),this.b=Ud(o,s,e-1/3)}return Pt.colorSpaceToWorking(this,r),this}setStyle(e,n=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zn){const i=F_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Pt.workingToColorSpace(Gn.copy(this),e),Math.round(vt(Gn.r*255,0,255))*65536+Math.round(vt(Gn.g*255,0,255))*256+Math.round(vt(Gn.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pt.workingColorSpace){Pt.workingToColorSpace(Gn.copy(this),n);const i=Gn.r,r=Gn.g,s=Gn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Pt.workingColorSpace){return Pt.workingToColorSpace(Gn.copy(this),n),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Zn){Pt.workingToColorSpace(Gn.copy(this),e);const n=Gn.r,i=Gn.g,r=Gn.b;return e!==Zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+n,Ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ir),e.getHSL(jl);const i=vd(Ir.h,jl.h,n),r=vd(Ir.s,jl.s,n),s=vd(Ir.l,jl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new _t;_t.NAMES=F_;let HS=0;class zs extends Yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=Ro,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$f,this.blendDst=Kf,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ro&&(i.blending=this.blending),this.side!==ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$f&&(i.blendSrc=this.blendSrc),this.blendDst!==Kf&&(i.blendDst=this.blendDst),this.blendEquation!==Ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ti extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Np,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new z,Yl=new Ke;let VS=0;class rr{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ng,this.updateRanges=[],this.gpuType=vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Yl.fromBufferAttribute(this,n),Yl.applyMatrix3(e),this.setXY(n,Yl.x,Yl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fa(n,this.array)),n}setX(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fa(n,this.array)),n}setY(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fa(n,this.array)),n}setW(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),i=oi(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),i=oi(i,this.array),r=oi(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),i=oi(i,this.array),r=oi(r,this.array),s=oi(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ng&&(e.usage=this.usage),e}}class O_ extends rr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class k_ extends rr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Et extends rr{constructor(e,n,i){super(new Float32Array(e),n,i)}}let GS=0;const Ei=new $t,Fd=new Pn,ro=new z,mi=new hl,ga=new hl,An=new z;class mn extends Yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N_(e)?k_:O_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new dt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,n,i){return Ei.makeTranslation(e,n,i),this.applyMatrix4(Ei),this}scale(e,n,i){return Ei.makeScale(e,n,i),this.applyMatrix4(Ei),this}lookAt(e){return Fd.lookAt(e),Fd.updateMatrix(),this.applyMatrix4(Fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mi.setFromBufferAttribute(s),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ga.setFromBufferAttribute(a),this.morphTargetsRelative?(An.addVectors(mi.min,ga.min),mi.expandByPoint(An),An.addVectors(mi.max,ga.max),mi.expandByPoint(An)):(mi.expandByPoint(ga.min),mi.expandByPoint(ga.max))}mi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)An.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(An));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)An.fromBufferAttribute(a,c),l&&(ro.fromBufferAttribute(e,c),An.add(ro)),r=Math.max(r,i.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new z,l[I]=new z;const c=new z,d=new z,f=new z,h=new Ke,p=new Ke,y=new Ke,w=new z,_=new z;function u(I,E,M){c.fromBufferAttribute(i,I),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,I),p.fromBufferAttribute(s,E),y.fromBufferAttribute(s,M),d.sub(c),f.sub(c),p.sub(h),y.sub(h);const N=1/(p.x*y.y-y.x*p.y);isFinite(N)&&(w.copy(d).multiplyScalar(y.y).addScaledVector(f,-p.y).multiplyScalar(N),_.copy(f).multiplyScalar(p.x).addScaledVector(d,-y.x).multiplyScalar(N),a[I].add(w),a[E].add(w),a[M].add(w),l[I].add(_),l[E].add(_),l[M].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,E=v.length;I<E;++I){const M=v[I],N=M.start,V=M.count;for(let Q=N,ae=N+V;Q<ae;Q+=3)u(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const x=new z,S=new z,R=new z,P=new z;function L(I){R.fromBufferAttribute(r,I),P.copy(R);const E=a[I];x.copy(E),x.sub(R.multiplyScalar(R.dot(E))).normalize(),S.crossVectors(P,E);const N=S.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,N)}for(let I=0,E=v.length;I<E;++I){const M=v[I],N=M.start,V=M.count;for(let Q=N,ae=N+V;Q<ae;Q+=3)L(e.getX(Q+0)),L(e.getX(Q+1)),L(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,d=new z,f=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const y=e.getX(h+0),w=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,w),o.fromBufferAttribute(n,_),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,_),a.add(d),l.add(d),c.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)An.fromBufferAttribute(e,n),An.normalize(),e.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let p=0,y=0;for(let w=0,_=l.length;w<_;w++){a.isInterleavedBufferAttribute?p=l[w]*a.data.stride+a.offset:p=l[w]*d;for(let u=0;u<d;u++)h[y++]=c[p++]}return new rr(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gg=new $t,fs=new Gp,ql=new xu,vg=new z,$l=new z,Kl=new z,Jl=new z,Od=new z,Zl=new z,_g=new z,Ql=new z;class K extends Pn{constructor(e=new mn,n=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Zl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Od.fromBufferAttribute(f,e),o?Zl.addScaledVector(Od,d):Zl.addScaledVector(Od.sub(n),d))}n.add(Zl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(s),fs.copy(e.ray).recast(e.near),!(ql.containsPoint(fs.origin)===!1&&(fs.intersectSphere(ql,vg)===null||fs.origin.distanceToSquared(vg)>(e.far-e.near)**2))&&(gg.copy(s).invert(),fs.copy(e.ray).applyMatrix4(gg),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fs)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,w=h.length;y<w;y++){const _=h[y],u=o[_.materialIndex],v=Math.max(_.start,p.start),x=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let S=v,R=x;S<R;S+=3){const P=a.getX(S),L=a.getX(S+1),I=a.getX(S+2);r=ec(this,u,e,i,c,d,f,P,L,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),w=Math.min(a.count,p.start+p.count);for(let _=y,u=w;_<u;_+=3){const v=a.getX(_),x=a.getX(_+1),S=a.getX(_+2);r=ec(this,o,e,i,c,d,f,v,x,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,w=h.length;y<w;y++){const _=h[y],u=o[_.materialIndex],v=Math.max(_.start,p.start),x=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let S=v,R=x;S<R;S+=3){const P=S,L=S+1,I=S+2;r=ec(this,u,e,i,c,d,f,P,L,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),w=Math.min(l.count,p.start+p.count);for(let _=y,u=w;_<u;_+=3){const v=_,x=_+1,S=_+2;r=ec(this,o,e,i,c,d,f,v,x,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function WS(t,e,n,i,r,s,o,a){let l;if(e.side===fi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ts,a),l===null)return null;Ql.copy(a),Ql.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ql);return c<n.near||c>n.far?null:{distance:c,point:Ql.clone(),object:t}}function ec(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,$l),t.getVertexPosition(l,Kl),t.getVertexPosition(c,Jl);const d=WS(t,e,n,i,$l,Kl,Jl,_g);if(d){const f=new z;Hi.getBarycoord(_g,$l,Kl,Jl,f),r&&(d.uv=Hi.getInterpolatedAttribute(r,a,l,c,f,new Ke)),s&&(d.uv1=Hi.getInterpolatedAttribute(s,a,l,c,f,new Ke)),o&&(d.normal=Hi.getInterpolatedAttribute(o,a,l,c,f,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};Hi.getNormal($l,Kl,Jl,h.normal),d.face=h,d.barycoord=f}return d}class yn extends mn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,p=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(f,2));function y(w,_,u,v,x,S,R,P,L,I,E){const M=S/L,N=R/I,V=S/2,Q=R/2,ae=P/2,ce=L+1,H=I+1;let q=0,U=0;const ee=new z;for(let re=0;re<H;re++){const Ee=re*N-Q;for(let Fe=0;Fe<ce;Fe++){const ct=Fe*M-V;ee[w]=ct*v,ee[_]=Ee*x,ee[u]=ae,c.push(ee.x,ee.y,ee.z),ee[w]=0,ee[_]=0,ee[u]=P>0?1:-1,d.push(ee.x,ee.y,ee.z),f.push(Fe/L),f.push(1-re/I),q+=1}}for(let re=0;re<I;re++)for(let Ee=0;Ee<L;Ee++){const Fe=h+Ee+ce*re,ct=h+Ee+ce*(re+1),Pe=h+(Ee+1)+ce*(re+1),oe=h+(Ee+1)+ce*re;l.push(Fe,ct,oe),l.push(ct,Pe,oe),U+=6}a.addGroup(p,U,E),p+=U,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Go(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $n(t){const e={};for(let n=0;n<t.length;n++){const i=Go(t[n]);for(const r in i)e[r]=i[r]}return e}function XS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function z_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const jS={clone:Go,merge:$n};var YS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ns extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YS,this.fragmentShader=qS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Go(e.uniforms),this.uniformsGroups=XS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class B_ extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new z,xg=new Ke,yg=new Ke;class vi extends B_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Uh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uh*2*Math.atan(Math.tan(gd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,n){return this.getViewBounds(e,xg,yg),n.subVectors(yg,xg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const so=-90,oo=1;class $S extends Pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vi(so,oo,e,n);r.layers=this.layers,this.add(r);const s=new vi(so,oo,e,n);s.layers=this.layers,this.add(s);const o=new vi(so,oo,e,n);o.layers=this.layers,this.add(o);const a=new vi(so,oo,e,n);a.layers=this.layers,this.add(a);const l=new vi(so,oo,e,n);l.layers=this.layers,this.add(l);const c=new vi(so,oo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===tr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class H_ extends ei{constructor(e=[],n=Bo,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KS extends Fs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new H_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yn(5,5,5),s=new ns({name:"CubemapFromEquirect",uniforms:Go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fi,blending:Jr});s.uniforms.tEquirect.value=n;const o=new K(r,s),a=n.minFilter;return n.minFilter===bs&&(n.minFilter=er),new $S(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class qe extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JS={type:"move"};class kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const w of e.hand.values()){const _=n.getJointPose(w,i),u=this._getHandJoint(c,w);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,y=.005;c.inputState.pinching&&h>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(JS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Xp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new _t(e),this.density=n}clone(){return new Xp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ZS extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zd=new z,QS=new z,e2=new dt;class xs{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=zd.subVectors(i,n).cross(QS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(zd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||e2.getNormalMatrix(e),r=this.coplanarPoint(zd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new xu,t2=new Ke(.5,.5),tc=new z;class jp{constructor(e=new xs,n=new xs,i=new xs,r=new xs,s=new xs,o=new xs){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=tr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],f=s[5],h=s[6],p=s[7],y=s[8],w=s[9],_=s[10],u=s[11],v=s[12],x=s[13],S=s[14],R=s[15];if(r[0].setComponents(c-o,p-d,u-y,R-v).normalize(),r[1].setComponents(c+o,p+d,u+y,R+v).normalize(),r[2].setComponents(c+a,p+f,u+w,R+x).normalize(),r[3].setComponents(c-a,p-f,u-w,R-x).normalize(),i)r[4].setComponents(l,h,_,S).normalize(),r[5].setComponents(c-l,p-h,u-_,R-S).normalize();else if(r[4].setComponents(c-l,p-h,u-_,R-S).normalize(),n===tr)r[5].setComponents(c+l,p+h,u+_,R+S).normalize();else if(n===Zc)r[5].setComponents(l,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const n=t2.distanceTo(e.center);return hs.radius=.7071067811865476+n,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(tc.x=r.normal.x>0?e.max.x:e.min.x,tc.y=r.normal.y>0?e.max.y:e.min.y,tc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fh extends zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const eu=new z,tu=new z,Mg=new $t,va=new Gp,nc=new xu,Bd=new z,Sg=new z;class wg extends Pn{constructor(e=new mn,n=new Fh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)eu.fromBufferAttribute(n,r-1),tu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=eu.distanceTo(tu);e.setAttribute("lineDistance",new Et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(r),nc.radius+=s,e.ray.intersectsSphere(nc)===!1)return;Mg.copy(r).invert(),va.copy(e.ray).applyMatrix4(Mg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let w=p,_=y-1;w<_;w+=c){const u=d.getX(w),v=d.getX(w+1),x=ic(this,e,va,l,u,v,w);x&&n.push(x)}if(this.isLineLoop){const w=d.getX(y-1),_=d.getX(p),u=ic(this,e,va,l,w,_,y-1);u&&n.push(u)}}else{const p=Math.max(0,o.start),y=Math.min(h.count,o.start+o.count);for(let w=p,_=y-1;w<_;w+=c){const u=ic(this,e,va,l,w,w+1,w);u&&n.push(u)}if(this.isLineLoop){const w=ic(this,e,va,l,y-1,p,y-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ic(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(eu.fromBufferAttribute(a,r),tu.fromBufferAttribute(a,s),n.distanceSqToSegment(eu,tu,Bd,Sg)>i)return;Bd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Bd);if(!(c<e.near||c>e.far))return{distance:c,point:Sg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class Eg extends ei{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class V_ extends ei{constructor(e,n,i=Us,r,s,o,a=Xi,l=Xi,c,d=nl,f=1){if(d!==nl&&d!==il)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class G_ extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Kn extends mn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],d=n/2,f=Math.PI/2*e,h=n,p=2*f+h,y=i*2+s,w=r+1,_=new z,u=new z;for(let v=0;v<=y;v++){let x=0,S=0,R=0,P=0;if(v<=i){const E=v/i,M=E*Math.PI/2;S=-d-e*Math.cos(M),R=e*Math.sin(M),P=-e*Math.cos(M),x=E*f}else if(v<=i+s){const E=(v-i)/s;S=-d+E*n,R=e,P=0,x=f+E*h}else{const E=(v-i-s)/i,M=E*Math.PI/2;S=d+e*Math.sin(M),R=e*Math.cos(M),P=e*Math.sin(M),x=f+h+E*f}const L=Math.max(0,Math.min(1,x/p));let I=0;v===0?I=.5/r:v===y&&(I=-.5/r);for(let E=0;E<=r;E++){const M=E/r,N=M*Math.PI*2,V=Math.sin(N),Q=Math.cos(N);u.x=-R*Q,u.y=S,u.z=R*V,a.push(u.x,u.y,u.z),_.set(-R*Q,P,R*V),_.normalize(),l.push(_.x,_.y,_.z),c.push(M+I,L)}if(v>0){const E=(v-1)*w;for(let M=0;M<r;M++){const N=E+M,V=E+M+1,Q=v*w+M,ae=v*w+M+1;o.push(N,V,Q),o.push(V,ae,Q)}}}this.setIndex(o),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ji extends mn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new z,d=new Ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(a,3)),this.setAttribute("uv",new Et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yt extends mn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],p=[];let y=0;const w=[],_=i/2;let u=0;v(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Et(f,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(p,2));function v(){const S=new z,R=new z;let P=0;const L=(n-e)/i;for(let I=0;I<=s;I++){const E=[],M=I/s,N=M*(n-e)+e;for(let V=0;V<=r;V++){const Q=V/r,ae=Q*l+a,ce=Math.sin(ae),H=Math.cos(ae);R.x=N*ce,R.y=-M*i+_,R.z=N*H,f.push(R.x,R.y,R.z),S.set(ce,L,H).normalize(),h.push(S.x,S.y,S.z),p.push(Q,1-M),E.push(y++)}w.push(E)}for(let I=0;I<r;I++)for(let E=0;E<s;E++){const M=w[E][I],N=w[E+1][I],V=w[E+1][I+1],Q=w[E][I+1];(e>0||E!==0)&&(d.push(M,N,Q),P+=3),(n>0||E!==s-1)&&(d.push(N,V,Q),P+=3)}c.addGroup(u,P,0),u+=P}function x(S){const R=y,P=new Ke,L=new z;let I=0;const E=S===!0?e:n,M=S===!0?1:-1;for(let V=1;V<=r;V++)f.push(0,_*M,0),h.push(0,M,0),p.push(.5,.5),y++;const N=y;for(let V=0;V<=r;V++){const ae=V/r*l+a,ce=Math.cos(ae),H=Math.sin(ae);L.x=E*H,L.y=_*M,L.z=E*ce,f.push(L.x,L.y,L.z),h.push(0,M,0),P.x=ce*.5+.5,P.y=H*.5*M+.5,p.push(P.x,P.y),y++}for(let V=0;V<r;V++){const Q=R+V,ae=N+V;S===!0?d.push(ae,ae+1,Q):d.push(ae+1,ae,Q),I+=3}c.addGroup(u,I,S===!0?1:2),u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wn extends yt{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Wn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yp extends mn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(s.slice(),3)),this.setAttribute("uv",new Et(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new z,S=new z,R=new z;for(let P=0;P<n.length;P+=3)p(n[P+0],x),p(n[P+1],S),p(n[P+2],R),l(x,S,R,v)}function l(v,x,S,R){const P=R+1,L=[];for(let I=0;I<=P;I++){L[I]=[];const E=v.clone().lerp(S,I/P),M=x.clone().lerp(S,I/P),N=P-I;for(let V=0;V<=N;V++)V===0&&I===P?L[I][V]=E:L[I][V]=E.clone().lerp(M,V/N)}for(let I=0;I<P;I++)for(let E=0;E<2*(P-I)-1;E++){const M=Math.floor(E/2);E%2===0?(h(L[I][M+1]),h(L[I+1][M]),h(L[I][M])):(h(L[I][M+1]),h(L[I+1][M+1]),h(L[I+1][M]))}}function c(v){const x=new z;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(v),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function d(){const v=new z;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const S=_(v)/2/Math.PI+.5,R=u(v)/Math.PI+.5;o.push(S,1-R)}y(),f()}function f(){for(let v=0;v<o.length;v+=6){const x=o[v+0],S=o[v+2],R=o[v+4],P=Math.max(x,S,R),L=Math.min(x,S,R);P>.9&&L<.1&&(x<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function p(v,x){const S=v*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function y(){const v=new z,x=new z,S=new z,R=new z,P=new Ke,L=new Ke,I=new Ke;for(let E=0,M=0;E<s.length;E+=9,M+=6){v.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),S.set(s[E+6],s[E+7],s[E+8]),P.set(o[M+0],o[M+1]),L.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),R.copy(v).add(x).add(S).divideScalar(3);const N=_(R);w(P,M+0,v,N),w(L,M+2,x,N),w(I,M+4,S,N)}}function w(v,x,S,R){R<0&&v.x===1&&(o[x]=v.x-1),S.x===0&&S.z===0&&(o[x]=R/2/Math.PI+.5)}function _(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yp(e.vertices,e.indices,e.radius,e.details)}}class hn extends Yp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new hn(e.radius,e.detail)}}class Tr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],h=i[r+1]-d,p=(o-d)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ke:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new z,r=[],s=[],o=[],a=new z,l=new $t;for(let p=0;p<=e;p++){const y=p/e;r[p]=this.getTangentAt(y,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(vt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,y))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(vt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],p*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class W_ extends Tr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ke){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*d-p*f+this.aX,c=h*f+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class n2 extends W_{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,f){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+f)+(l-a)/f;h*=d,p*=d,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const rc=new z,Hd=new qp,Vd=new qp,Gd=new qp;class X_ extends Tr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new z){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(rc.subVectors(r[0],r[1]).add(r[0]),c=rc);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(rc.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=rc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(f),p),w=Math.pow(f.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p);w<1e-4&&(w=1),y<1e-4&&(y=w),_<1e-4&&(_=w),Hd.initNonuniformCatmullRom(c.x,f.x,h.x,d.x,y,w,_),Vd.initNonuniformCatmullRom(c.y,f.y,h.y,d.y,y,w,_),Gd.initNonuniformCatmullRom(c.z,f.z,h.z,d.z,y,w,_)}else this.curveType==="catmullrom"&&(Hd.initCatmullRom(c.x,f.x,h.x,d.x,this.tension),Vd.initCatmullRom(c.y,f.y,h.y,d.y,this.tension),Gd.initCatmullRom(c.z,f.z,h.z,d.z,this.tension));return i.set(Hd.calc(l),Vd.calc(l),Gd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Tg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function i2(t,e){const n=1-t;return n*n*e}function r2(t,e){return 2*(1-t)*t*e}function s2(t,e){return t*t*e}function Ua(t,e,n,i){return i2(t,e)+r2(t,n)+s2(t,i)}function o2(t,e){const n=1-t;return n*n*n*e}function a2(t,e){const n=1-t;return 3*n*n*t*e}function l2(t,e){return 3*(1-t)*t*t*e}function c2(t,e){return t*t*t*e}function Fa(t,e,n,i,r){return o2(t,e)+a2(t,n)+l2(t,i)+c2(t,r)}class u2 extends Tr{constructor(e=new Ke,n=new Ke,i=new Ke,r=new Ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ke){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Fa(e,r.x,s.x,o.x,a.x),Fa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class d2 extends Tr{constructor(e=new z,n=new z,i=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new z){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Fa(e,r.x,s.x,o.x,a.x),Fa(e,r.y,s.y,o.y,a.y),Fa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class f2 extends Tr{constructor(e=new Ke,n=new Ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ke){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ke){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class h2 extends Tr{constructor(e=new z,n=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new z){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new z){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class p2 extends Tr{constructor(e=new Ke,n=new Ke,i=new Ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ke){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ua(e,r.x,s.x,o.x),Ua(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j_ extends Tr{constructor(e=new z,n=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new z){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ua(e,r.x,s.x,o.x),Ua(e,r.y,s.y,o.y),Ua(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class m2 extends Tr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ke){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Tg(a,l.x,c.x,d.x,f.x),Tg(a,l.y,c.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ke().fromArray(r))}return this}}var g2=Object.freeze({__proto__:null,ArcCurve:n2,CatmullRomCurve3:X_,CubicBezierCurve:u2,CubicBezierCurve3:d2,EllipseCurve:W_,LineCurve:f2,LineCurve3:h2,QuadraticBezierCurve:p2,QuadraticBezierCurve3:j_,SplineCurve:m2});class zi extends mn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,p=[],y=[],w=[],_=[];for(let u=0;u<d;u++){const v=u*h-o;for(let x=0;x<c;x++){const S=x*f-s;y.push(S,-v,0),w.push(0,0,1),_.push(x/a),_.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const x=v+c*u,S=v+c*(u+1),R=v+1+c*(u+1),P=v+1+c*u;p.push(x,S,P),p.push(S,R,P)}this.setIndex(p),this.setAttribute("position",new Et(y,3)),this.setAttribute("normal",new Et(w,3)),this.setAttribute("uv",new Et(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.widthSegments,e.heightSegments)}}class $p extends mn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let f=e;const h=(n-e)/r,p=new z,y=new Ke;for(let w=0;w<=r;w++){for(let _=0;_<=i;_++){const u=s+_/i*o;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),y.x=(p.x/n+1)/2,y.y=(p.y/n+1)/2,d.push(y.x,y.y)}f+=h}for(let w=0;w<r;w++){const _=w*(i+1);for(let u=0;u<i;u++){const v=u+_,x=v,S=v+i+1,R=v+i+2,P=v+1;a.push(x,S,P),a.push(S,R,P)}}this.setIndex(a),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $p(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wt extends mn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new z,h=new z,p=[],y=[],w=[],_=[];for(let u=0;u<=i;u++){const v=[],x=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let R=0;R<=n;R++){const P=R/n;f.x=-e*Math.cos(r+P*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+P*s)*Math.sin(o+x*a),y.push(f.x,f.y,f.z),h.copy(f).normalize(),w.push(h.x,h.y,h.z),_.push(P+S,1-x),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const x=d[u][v+1],S=d[u][v],R=d[u+1][v],P=d[u+1][v+1];(u!==0||o>0)&&p.push(x,S,P),(u!==i-1||l<Math.PI)&&p.push(S,R,P)}this.setIndex(p),this.setAttribute("position",new Et(y,3)),this.setAttribute("normal",new Et(w,3)),this.setAttribute("uv",new Et(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qt extends mn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new z,f=new z,h=new z;for(let p=0;p<=i;p++)for(let y=0;y<=r;y++){const w=y/r*s,_=p/i*Math.PI*2;f.x=(e+n*Math.cos(_))*Math.cos(w),f.y=(e+n*Math.cos(_))*Math.sin(w),f.z=n*Math.sin(_),a.push(f.x,f.y,f.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(y/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let y=1;y<=r;y++){const w=(r+1)*p+y-1,_=(r+1)*(p-1)+y-1,u=(r+1)*(p-1)+y,v=(r+1)*p+y;o.push(w,_,v),o.push(_,u,v)}this.setIndex(o),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Kp extends mn{constructor(e=new j_(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new z,l=new z,c=new Ke;let d=new z;const f=[],h=[],p=[],y=[];w(),this.setIndex(y),this.setAttribute("position",new Et(f,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(p,2));function w(){for(let x=0;x<n;x++)_(x);_(s===!1?n:0),v(),u()}function _(x){d=e.getPointAt(x/n,d);const S=o.normals[x],R=o.binormals[x];for(let P=0;P<=r;P++){const L=P/r*Math.PI*2,I=Math.sin(L),E=-Math.cos(L);l.x=E*S.x+I*R.x,l.y=E*S.y+I*R.y,l.z=E*S.z+I*R.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let x=1;x<=n;x++)for(let S=1;S<=r;S++){const R=(r+1)*(x-1)+(S-1),P=(r+1)*x+(S-1),L=(r+1)*x+S,I=(r+1)*(x-1)+S;y.push(R,P,I),y.push(P,L,I)}}function v(){for(let x=0;x<=n;x++)for(let S=0;S<=r;S++)c.x=x/n,c.y=S/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Kp(new g2[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class nt extends zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hp,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sc extends zs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hp,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Np,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class v2 extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _2 extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Jp extends Pn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class x2 extends Jp{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Wd=new $t,Ag=new z,bg=new z;class Y_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=sr,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jp,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ag.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ag),bg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(bg),n.updateMatrixWorld(),Wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cg=new $t,_a=new z,Xd=new z;class y2 extends Y_{constructor(){super(new vi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new Vt(2,1,1,1),new Vt(0,1,1,1),new Vt(3,1,1,1),new Vt(1,1,1,1),new Vt(3,0,1,1),new Vt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),_a.setFromMatrixPosition(e.matrixWorld),i.position.copy(_a),Xd.copy(i.position),Xd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Xd),i.updateMatrixWorld(),r.makeTranslation(-_a.x,-_a.y,-_a.z),Cg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cg,i.coordinateSystem,i.reversedDepth)}}class ao extends Jp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new y2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class q_ extends B_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class M2 extends Y_{constructor(){super(new q_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rg extends Jp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new M2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class S2 extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Pg=new $t;class w2{constructor(e,n,i=0,r=1/0){this.ray=new Gp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Wp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Pg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pg),this}intersectObject(e,n=!0,i=[]){return Oh(e,this,i,n),i.sort(Lg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Oh(e[r],this,i,n);return i.sort(Lg),i}}function Lg(t,e){return t.distance-e.distance}function Oh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Oh(s[o],e,n,!0)}}function Dg(t,e,n,i){const r=E2(i);switch(n){case R_:return t*e;case L_:return t*e/r.components*r.byteLength;case kp:return t*e/r.components*r.byteLength;case D_:return t*e*2/r.components*r.byteLength;case zp:return t*e*2/r.components*r.byteLength;case P_:return t*e*3/r.components*r.byteLength;case Vi:return t*e*4/r.components*r.byteLength;case Bp:return t*e*4/r.components*r.byteLength;case Sc:case wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lh:case uh:return Math.max(t,16)*Math.max(e,8)/4;case ah:case ch:return Math.max(t,8)*Math.max(e,8)/2;case dh:case fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case hh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case _h:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case xh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case wh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Th:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case bh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ch:case Rh:case Ph:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Lh:case Dh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ih:case Nh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function E2(t){switch(t){case sr:case T_:return{byteLength:1,components:1};case el:case A_:case ul:return{byteLength:2,components:1};case Fp:case Op:return{byteLength:2,components:4};case Us:case Up:case vr:return{byteLength:4,components:1};case b_:case C_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function T2(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,y)=>p.start-y.start);let h=0;for(let p=1;p<f.length;p++){const y=f[h],w=f[p];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++h,f[h]=w)}f.length=h+1;for(let p=0,y=f.length;p<y;p++){const w=f[p];t.bufferSubData(c,w.start*d.BYTES_PER_ELEMENT,d,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var A2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b2=`#ifdef USE_ALPHAHASH
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
#endif`,C2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D2=`#ifdef USE_AOMAP
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
#endif`,I2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N2=`#ifdef USE_BATCHING
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
#endif`,U2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z2=`#ifdef USE_IRIDESCENCE
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
#endif`,B2=`#ifdef USE_BUMPMAP
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
#endif`,H2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,q2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$2=`#define PI 3.141592653589793
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
} // validated`,K2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J2=`vec3 transformedNormal = objectNormal;
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
#endif`,Z2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ew=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nw="gl_FragColor = linearToOutputTexel( gl_FragColor );",iw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rw=`#ifdef USE_ENVMAP
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
#endif`,sw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ow=`#ifdef USE_ENVMAP
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
#endif`,aw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lw=`#ifdef USE_ENVMAP
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
#endif`,cw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hw=`#ifdef USE_GRADIENTMAP
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
}`,pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vw=`uniform bool receiveShadow;
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
#endif`,_w=`#ifdef USE_ENVMAP
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
#endif`,xw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ww=`PhysicalMaterial material;
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
#endif`,Ew=`struct PhysicalMaterial {
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
}`,Tw=`
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
#endif`,Aw=`#if defined( RE_IndirectDiffuse )
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
#endif`,bw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uw=`#if defined( USE_POINTS_UV )
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
#endif`,Fw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ow=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hw=`#ifdef USE_MORPHTARGETS
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
#endif`,Vw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ww=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qw=`#ifdef USE_NORMALMAP
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
#endif`,$w=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uE=`float getShadowMask() {
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
}`,dE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fE=`#ifdef USE_SKINNING
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
#endif`,hE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pE=`#ifdef USE_SKINNING
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
#endif`,mE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_E=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xE=`#ifdef USE_TRANSMISSION
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
#endif`,yE=`#ifdef USE_TRANSMISSION
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
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AE=`uniform sampler2D t2D;
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
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`#include <common>
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
}`,DE=`#if DEPTH_PACKING == 3200
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
}`,IE=`#define DISTANCE
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
}`,NE=`#define DISTANCE
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`uniform float scale;
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
}`,kE=`uniform vec3 diffuse;
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
}`,zE=`#include <common>
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
}`,BE=`uniform vec3 diffuse;
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
}`,HE=`#define LAMBERT
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
}`,VE=`#define LAMBERT
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
}`,GE=`#define MATCAP
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
}`,WE=`#define MATCAP
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
}`,XE=`#define NORMAL
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
}`,jE=`#define NORMAL
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
}`,YE=`#define PHONG
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
}`,qE=`#define PHONG
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
}`,$E=`#define STANDARD
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
}`,KE=`#define STANDARD
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
}`,JE=`#define TOON
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
}`,ZE=`#define TOON
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
}`,QE=`uniform float size;
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
}`,eT=`uniform vec3 diffuse;
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
}`,tT=`#include <common>
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
}`,nT=`uniform vec3 color;
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
}`,iT=`uniform float rotation;
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
}`,rT=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:A2,alphahash_pars_fragment:b2,alphamap_fragment:C2,alphamap_pars_fragment:R2,alphatest_fragment:P2,alphatest_pars_fragment:L2,aomap_fragment:D2,aomap_pars_fragment:I2,batching_pars_vertex:N2,batching_vertex:U2,begin_vertex:F2,beginnormal_vertex:O2,bsdfs:k2,iridescence_fragment:z2,bumpmap_pars_fragment:B2,clipping_planes_fragment:H2,clipping_planes_pars_fragment:V2,clipping_planes_pars_vertex:G2,clipping_planes_vertex:W2,color_fragment:X2,color_pars_fragment:j2,color_pars_vertex:Y2,color_vertex:q2,common:$2,cube_uv_reflection_fragment:K2,defaultnormal_vertex:J2,displacementmap_pars_vertex:Z2,displacementmap_vertex:Q2,emissivemap_fragment:ew,emissivemap_pars_fragment:tw,colorspace_fragment:nw,colorspace_pars_fragment:iw,envmap_fragment:rw,envmap_common_pars_fragment:sw,envmap_pars_fragment:ow,envmap_pars_vertex:aw,envmap_physical_pars_fragment:_w,envmap_vertex:lw,fog_vertex:cw,fog_pars_vertex:uw,fog_fragment:dw,fog_pars_fragment:fw,gradientmap_pars_fragment:hw,lightmap_pars_fragment:pw,lights_lambert_fragment:mw,lights_lambert_pars_fragment:gw,lights_pars_begin:vw,lights_toon_fragment:xw,lights_toon_pars_fragment:yw,lights_phong_fragment:Mw,lights_phong_pars_fragment:Sw,lights_physical_fragment:ww,lights_physical_pars_fragment:Ew,lights_fragment_begin:Tw,lights_fragment_maps:Aw,lights_fragment_end:bw,logdepthbuf_fragment:Cw,logdepthbuf_pars_fragment:Rw,logdepthbuf_pars_vertex:Pw,logdepthbuf_vertex:Lw,map_fragment:Dw,map_pars_fragment:Iw,map_particle_fragment:Nw,map_particle_pars_fragment:Uw,metalnessmap_fragment:Fw,metalnessmap_pars_fragment:Ow,morphinstance_vertex:kw,morphcolor_vertex:zw,morphnormal_vertex:Bw,morphtarget_pars_vertex:Hw,morphtarget_vertex:Vw,normal_fragment_begin:Gw,normal_fragment_maps:Ww,normal_pars_fragment:Xw,normal_pars_vertex:jw,normal_vertex:Yw,normalmap_pars_fragment:qw,clearcoat_normal_fragment_begin:$w,clearcoat_normal_fragment_maps:Kw,clearcoat_pars_fragment:Jw,iridescence_pars_fragment:Zw,opaque_fragment:Qw,packing:eE,premultiplied_alpha_fragment:tE,project_vertex:nE,dithering_fragment:iE,dithering_pars_fragment:rE,roughnessmap_fragment:sE,roughnessmap_pars_fragment:oE,shadowmap_pars_fragment:aE,shadowmap_pars_vertex:lE,shadowmap_vertex:cE,shadowmask_pars_fragment:uE,skinbase_vertex:dE,skinning_pars_vertex:fE,skinning_vertex:hE,skinnormal_vertex:pE,specularmap_fragment:mE,specularmap_pars_fragment:gE,tonemapping_fragment:vE,tonemapping_pars_fragment:_E,transmission_fragment:xE,transmission_pars_fragment:yE,uv_pars_fragment:ME,uv_pars_vertex:SE,uv_vertex:wE,worldpos_vertex:EE,background_vert:TE,background_frag:AE,backgroundCube_vert:bE,backgroundCube_frag:CE,cube_vert:RE,cube_frag:PE,depth_vert:LE,depth_frag:DE,distanceRGBA_vert:IE,distanceRGBA_frag:NE,equirect_vert:UE,equirect_frag:FE,linedashed_vert:OE,linedashed_frag:kE,meshbasic_vert:zE,meshbasic_frag:BE,meshlambert_vert:HE,meshlambert_frag:VE,meshmatcap_vert:GE,meshmatcap_frag:WE,meshnormal_vert:XE,meshnormal_frag:jE,meshphong_vert:YE,meshphong_frag:qE,meshphysical_vert:$E,meshphysical_frag:KE,meshtoon_vert:JE,meshtoon_frag:ZE,points_vert:QE,points_frag:eT,shadow_vert:tT,shadow_frag:nT,sprite_vert:iT,sprite_frag:rT},Ue={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Zi={basic:{uniforms:$n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:$n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:$n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:$n([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:$n([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:$n([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:$n([Ue.points,Ue.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:$n([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:$n([Ue.common,Ue.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:$n([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:$n([Ue.sprite,Ue.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:$n([Ue.common,Ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:$n([Ue.lights,Ue.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Zi.physical={uniforms:$n([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const oc={r:0,b:0,g:0},ps=new Yi,sT=new $t;function oT(t,e,n,i,r,s,o){const a=new _t(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function y(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?n:e).get(S)),S}function w(x){let S=!1;const R=y(x);R===null?u(a,l):R&&R.isColor&&(u(R,1),S=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(x,S){const R=y(S);R&&(R.isCubeTexture||R.mapping===_u)?(d===void 0&&(d=new K(new yn(1,1,1),new ns({name:"BackgroundCubeMaterial",uniforms:Go(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),ps.copy(S.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(sT.makeRotationFromEuler(ps)),d.material.toneMapped=Pt.getTransfer(R.colorSpace)!==Ht,(f!==R||h!==R.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=R,h=R.version,p=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new K(new zi(2,2),new ns({name:"BackgroundMaterial",uniforms:Go(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(R.colorSpace)!==Ht,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=R,h=R.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,S){x.getRGB(oc,z_(t)),i.buffers.color.setClear(oc.r,oc.g,oc.b,S,o)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),l=S,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:w,addToRenderList:_,dispose:v}}function aT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,N,V,Q,ae){let ce=!1;const H=f(Q,V,N);s!==H&&(s=H,c(s.object)),ce=p(M,Q,V,ae),ce&&y(M,Q,V,ae),ae!==null&&e.update(ae,t.ELEMENT_ARRAY_BUFFER),(ce||o)&&(o=!1,S(M,N,V,Q),ae!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function d(M){return t.deleteVertexArray(M)}function f(M,N,V){const Q=V.wireframe===!0;let ae=i[M.id];ae===void 0&&(ae={},i[M.id]=ae);let ce=ae[N.id];ce===void 0&&(ce={},ae[N.id]=ce);let H=ce[Q];return H===void 0&&(H=h(l()),ce[Q]=H),H}function h(M){const N=[],V=[],Q=[];for(let ae=0;ae<n;ae++)N[ae]=0,V[ae]=0,Q[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:Q,object:M,attributes:{},index:null}}function p(M,N,V,Q){const ae=s.attributes,ce=N.attributes;let H=0;const q=V.getAttributes();for(const U in q)if(q[U].location>=0){const re=ae[U];let Ee=ce[U];if(Ee===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor)),re===void 0||re.attribute!==Ee||Ee&&re.data!==Ee.data)return!0;H++}return s.attributesNum!==H||s.index!==Q}function y(M,N,V,Q){const ae={},ce=N.attributes;let H=0;const q=V.getAttributes();for(const U in q)if(q[U].location>=0){let re=ce[U];re===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(re=M.instanceColor));const Ee={};Ee.attribute=re,re&&re.data&&(Ee.data=re.data),ae[U]=Ee,H++}s.attributes=ae,s.attributesNum=H,s.index=Q}function w(){const M=s.newAttributes;for(let N=0,V=M.length;N<V;N++)M[N]=0}function _(M){u(M,0)}function u(M,N){const V=s.newAttributes,Q=s.enabledAttributes,ae=s.attributeDivisors;V[M]=1,Q[M]===0&&(t.enableVertexAttribArray(M),Q[M]=1),ae[M]!==N&&(t.vertexAttribDivisor(M,N),ae[M]=N)}function v(){const M=s.newAttributes,N=s.enabledAttributes;for(let V=0,Q=N.length;V<Q;V++)N[V]!==M[V]&&(t.disableVertexAttribArray(V),N[V]=0)}function x(M,N,V,Q,ae,ce,H){H===!0?t.vertexAttribIPointer(M,N,V,ae,ce):t.vertexAttribPointer(M,N,V,Q,ae,ce)}function S(M,N,V,Q){w();const ae=Q.attributes,ce=V.getAttributes(),H=N.defaultAttributeValues;for(const q in ce){const U=ce[q];if(U.location>=0){let ee=ae[q];if(ee===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const re=ee.normalized,Ee=ee.itemSize,Fe=e.get(ee);if(Fe===void 0)continue;const ct=Fe.buffer,Pe=Fe.type,oe=Fe.bytesPerElement,B=Pe===t.INT||Pe===t.UNSIGNED_INT||ee.gpuType===Up;if(ee.isInterleavedBufferAttribute){const pe=ee.data,Ie=pe.stride,et=ee.offset;if(pe.isInstancedInterleavedBuffer){for(let be=0;be<U.locationSize;be++)u(U.location+be,pe.meshPerAttribute);M.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let be=0;be<U.locationSize;be++)_(U.location+be);t.bindBuffer(t.ARRAY_BUFFER,ct);for(let be=0;be<U.locationSize;be++)x(U.location+be,Ee/U.locationSize,Pe,re,Ie*oe,(et+Ee/U.locationSize*be)*oe,B)}else{if(ee.isInstancedBufferAttribute){for(let pe=0;pe<U.locationSize;pe++)u(U.location+pe,ee.meshPerAttribute);M.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let pe=0;pe<U.locationSize;pe++)_(U.location+pe);t.bindBuffer(t.ARRAY_BUFFER,ct);for(let pe=0;pe<U.locationSize;pe++)x(U.location+pe,Ee/U.locationSize,Pe,re,Ee*oe,Ee/U.locationSize*pe*oe,B)}}else if(H!==void 0){const re=H[q];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(U.location,re);break;case 3:t.vertexAttrib3fv(U.location,re);break;case 4:t.vertexAttrib4fv(U.location,re);break;default:t.vertexAttrib1fv(U.location,re)}}}}v()}function R(){I();for(const M in i){const N=i[M];for(const V in N){const Q=N[V];for(const ae in Q)d(Q[ae].object),delete Q[ae];delete N[V]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const N=i[M.id];for(const V in N){const Q=N[V];for(const ae in Q)d(Q[ae].object),delete Q[ae];delete N[V]}delete i[M.id]}function L(M){for(const N in i){const V=i[N];if(V[M.id]===void 0)continue;const Q=V[M.id];for(const ae in Q)d(Q[ae].object),delete Q[ae];delete V[M.id]}}function I(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:_,disableUnusedAttributes:v}}function lT(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let y=0;y<f;y++)p+=d[y];n.update(p,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)o(c[y],d[y],h[y]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let y=0;for(let w=0;w<f;w++)y+=d[w]*h[w];n.update(y,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==Vi&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const I=L===ul&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==sr&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==vr&&!I)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:R,maxSamples:P}}function uT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new xs,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const y=f.clippingPlanes,w=f.clipIntersection,_=f.clipShadows,u=t.get(f);if(!r||y===null||y.length===0||s&&!_)s?d(null):c();else{const v=s?0:i,x=v*4;let S=u.clippingState||null;l.value=S,S=d(y,h,x,p);for(let R=0;R!==x;++R)S[R]=n[R];u.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,y){const w=f!==null?f.length:0;let _=null;if(w!==0){if(_=l.value,y!==!0||_===null){const u=p+w*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(_===null||_.length<u)&&(_=new Float32Array(u));for(let x=0,S=p;x!==w;++x,S+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}function dT(t){let e=new WeakMap;function n(o,a){return a===rh?o.mapping=Bo:a===sh&&(o.mapping=Ho),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===rh||a===sh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new KS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const So=4,Ig=[.125,.215,.35,.446,.526,.582],Ss=20,jd=new q_,Ng=new _t;let Yd=null,qd=0,$d=0,Kd=!1;const ys=(1+Math.sqrt(5))/2,lo=1/ys,Ug=[new z(-ys,lo,0),new z(ys,lo,0),new z(-lo,0,ys),new z(lo,0,ys),new z(0,ys,-lo),new z(0,ys,lo),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],fT=new z;class Fg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=fT}=s;Yd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yd,qd,$d),this._renderer.xr.enabled=Kd,e.scissorTest=!1,ac(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bo||e.mapping===Ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:er,minFilter:er,generateMipmaps:!1,type:ul,format:Vi,colorSpace:Vo,depthBuffer:!1},r=Og(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Og(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hT(s)),this._blurMaterial=pT(s,e,n)}return r}_compileMaterial(e){const n=new K(this._lodPlanes[0],e);this._renderer.compile(n,jd)}_sceneToCubeUV(e,n,i,r,s){const l=new vi(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Ng),f.toneMapping=Zr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const w=new Ti({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1}),_=new K(new yn,w);let u=!1;const v=e.background;v?v.isColor&&(w.color.copy(v),e.background=null,u=!0):(w.color.copy(Ng),u=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[x],s.y,s.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[x]));const R=this._cubeSize;ac(r,S*R,x>2?R:0,R,R),f.setRenderTarget(r),u&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Bo||e.mapping===Ho;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new K(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ac(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,jd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ug[(r-s-1)%Ug.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new K(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ss-1),w=s/y,_=isFinite(s)?1+Math.floor(d*w):Ss;_>Ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ss}`);const u=[];let v=0;for(let L=0;L<Ss;++L){const I=L/w,E=Math.exp(-I*I/2);u.push(E),L===0?v+=E:L<_&&(v+=2*E)}for(let L=0;L<u.length;L++)u[L]=u[L]/v;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=y,h.mipInt.value=x-i;const S=this._sizeLods[r],R=3*S*(r>x-So?r-x+So:0),P=4*(this._cubeSize-S);ac(n,R,P,3*S,2*S),l.setRenderTarget(n),l.render(f,jd)}}function hT(t){const e=[],n=[],i=[];let r=t;const s=t-So+1+Ig.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-So?l=Ig[o-t+So-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,y=6,w=3,_=2,u=1,v=new Float32Array(w*y*p),x=new Float32Array(_*y*p),S=new Float32Array(u*y*p);for(let P=0;P<p;P++){const L=P%3*2/3-1,I=P>2?0:-1,E=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];v.set(E,w*y*P),x.set(h,_*y*P);const M=[P,P,P,P,P,P];S.set(M,u*y*P)}const R=new mn;R.setAttribute("position",new rr(v,w)),R.setAttribute("uv",new rr(x,_)),R.setAttribute("faceIndex",new rr(S,u)),e.push(R),r>So&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Og(t,e,n){const i=new Fs(t,e,n);return i.texture.mapping=_u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ac(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function pT(t,e,n){const i=new Float32Array(Ss),r=new z(0,1,0);return new ns({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zp(),fragmentShader:`

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
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function kg(){return new ns({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zp(),fragmentShader:`

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
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function zg(){return new ns({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function Zp(){return`

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
	`}function mT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===rh||l===sh,d=l===Bo||l===Ho;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Fg(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Fg(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function gT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&rl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,y=f.attributes.position;let w=0;if(p!==null){const v=p.array;w=p.version;for(let x=0,S=v.length;x<S;x+=3){const R=v[x+0],P=v[x+1],L=v[x+2];h.push(R,P,P,L,L,R)}}else if(y!==void 0){const v=y.array;w=y.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const R=x+0,P=x+1,L=x+2;h.push(R,P,P,L,L,R)}}else return;const _=new(N_(h)?k_:O_)(h,1);_.version=w;const u=s.get(f);u&&e.remove(u),s.set(f,_)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function _T(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,y){y!==0&&(t.drawElementsInstanced(i,p,s,h*o,y),n.update(p,i,y))}function d(h,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,y);let _=0;for(let u=0;u<y;u++)_+=p[u];n.update(_,i,1)}function f(h,p,y,w){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],w[u]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,w,0,y);let u=0;for(let v=0;v<y;v++)u+=p[v]*w[v];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function xT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function yT(t,e,n){const i=new WeakMap,r=new Vt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const y=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;y===!0&&(S=1),w===!0&&(S=2),_===!0&&(S=3);let R=a.attributes.position.count*S,P=1;R>e.maxTextureSize&&(P=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const L=new Float32Array(R*P*4*f),I=new U_(L,R,P,f);I.type=vr,I.needsUpdate=!0;const E=S*4;for(let N=0;N<f;N++){const V=u[N],Q=v[N],ae=x[N],ce=R*P*4*N;for(let H=0;H<V.count;H++){const q=H*E;y===!0&&(r.fromBufferAttribute(V,H),L[ce+q+0]=r.x,L[ce+q+1]=r.y,L[ce+q+2]=r.z,L[ce+q+3]=0),w===!0&&(r.fromBufferAttribute(Q,H),L[ce+q+4]=r.x,L[ce+q+5]=r.y,L[ce+q+6]=r.z,L[ce+q+7]=0),_===!0&&(r.fromBufferAttribute(ae,H),L[ce+q+8]=r.x,L[ce+q+9]=r.y,L[ce+q+10]=r.z,L[ce+q+11]=ae.itemSize===4?r.w:1)}}h={count:f,texture:I,size:new Ke(R,P)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let _=0;_<c.length;_++)y+=c[_];const w=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",w),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function MT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const K_=new ei,Bg=new V_(1,1),J_=new U_,Z_=new IS,Q_=new H_,Hg=[],Vg=[],Gg=new Float32Array(16),Wg=new Float32Array(9),Xg=new Float32Array(4);function qo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Hg[r];if(s===void 0&&(s=new Float32Array(r),Hg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function En(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function yu(t,e){let n=Vg[e];n===void 0&&(n=new Int32Array(e),Vg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ST(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;t.uniform2fv(this.addr,e),En(n,e)}}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wn(n,e))return;t.uniform3fv(this.addr,e),En(n,e)}}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;t.uniform4fv(this.addr,e),En(n,e)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),En(n,e)}else{if(wn(n,i))return;Xg.set(i),t.uniformMatrix2fv(this.addr,!1,Xg),En(n,i)}}function bT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),En(n,e)}else{if(wn(n,i))return;Wg.set(i),t.uniformMatrix3fv(this.addr,!1,Wg),En(n,i)}}function CT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),En(n,e)}else{if(wn(n,i))return;Gg.set(i),t.uniformMatrix4fv(this.addr,!1,Gg),En(n,i)}}function RT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;t.uniform2iv(this.addr,e),En(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wn(n,e))return;t.uniform3iv(this.addr,e),En(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;t.uniform4iv(this.addr,e),En(n,e)}}function IT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;t.uniform2uiv(this.addr,e),En(n,e)}}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wn(n,e))return;t.uniform3uiv(this.addr,e),En(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;t.uniform4uiv(this.addr,e),En(n,e)}}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Bg.compareFunction=I_,s=Bg):s=K_,n.setTexture2D(e||s,r)}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Z_,r)}function zT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Q_,r)}function BT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||J_,r)}function HT(t){switch(t){case 5126:return ST;case 35664:return wT;case 35665:return ET;case 35666:return TT;case 35674:return AT;case 35675:return bT;case 35676:return CT;case 5124:case 35670:return RT;case 35667:case 35671:return PT;case 35668:case 35672:return LT;case 35669:case 35673:return DT;case 5125:return IT;case 36294:return NT;case 36295:return UT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return BT}}function VT(t,e){t.uniform1fv(this.addr,e)}function GT(t,e){const n=qo(e,this.size,2);t.uniform2fv(this.addr,n)}function WT(t,e){const n=qo(e,this.size,3);t.uniform3fv(this.addr,n)}function XT(t,e){const n=qo(e,this.size,4);t.uniform4fv(this.addr,n)}function jT(t,e){const n=qo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function YT(t,e){const n=qo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function qT(t,e){const n=qo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $T(t,e){t.uniform1iv(this.addr,e)}function KT(t,e){t.uniform2iv(this.addr,e)}function JT(t,e){t.uniform3iv(this.addr,e)}function ZT(t,e){t.uniform4iv(this.addr,e)}function QT(t,e){t.uniform1uiv(this.addr,e)}function e3(t,e){t.uniform2uiv(this.addr,e)}function t3(t,e){t.uniform3uiv(this.addr,e)}function n3(t,e){t.uniform4uiv(this.addr,e)}function i3(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);wn(i,s)||(t.uniform1iv(this.addr,s),En(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||K_,s[o])}function r3(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);wn(i,s)||(t.uniform1iv(this.addr,s),En(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Z_,s[o])}function s3(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);wn(i,s)||(t.uniform1iv(this.addr,s),En(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Q_,s[o])}function o3(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);wn(i,s)||(t.uniform1iv(this.addr,s),En(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||J_,s[o])}function a3(t){switch(t){case 5126:return VT;case 35664:return GT;case 35665:return WT;case 35666:return XT;case 35674:return jT;case 35675:return YT;case 35676:return qT;case 5124:case 35670:return $T;case 35667:case 35671:return KT;case 35668:case 35672:return JT;case 35669:case 35673:return ZT;case 5125:return QT;case 36294:return e3;case 36295:return t3;case 36296:return n3;case 35678:case 36198:case 36298:case 36306:case 35682:return i3;case 35679:case 36299:case 36307:return r3;case 35680:case 36300:case 36308:case 36293:return s3;case 36289:case 36303:case 36311:case 36292:return o3}}class l3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=HT(n.type)}}class c3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=a3(n.type)}}class u3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Jd=/(\w+)(\])?(\[|\.)?/g;function jg(t,e){t.seq.push(e),t.map[e.id]=e}function d3(t,e,n){const i=t.name,r=i.length;for(Jd.lastIndex=0;;){const s=Jd.exec(i),o=Jd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){jg(n,c===void 0?new l3(a,t,e):new c3(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new u3(a),jg(n,f)),n=f}}}class Ac{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);d3(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Yg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const f3=37297;let h3=0;function p3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const qg=new dt;function m3(t){Pt._getMatrix(qg,Pt.workingColorSpace,t);const e=`mat3( ${qg.elements.map(n=>n.toFixed(4))} )`;switch(Pt.getTransfer(t)){case Jc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function $g(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+p3(t.getShaderSource(e),a)}else return s}function g3(t,e){const n=m3(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function v3(t,e){let n;switch(e){case lS:n="Linear";break;case cS:n="Reinhard";break;case uS:n="Cineon";break;case w_:n="ACESFilmic";break;case fS:n="AgX";break;case hS:n="Neutral";break;case dS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const lc=new z;function _3(){Pt.getLuminanceCoefficients(lc);const t=lc.x.toFixed(4),e=lc.y.toFixed(4),n=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function y3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function M3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ta(t){return t!==""}function Kg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S3=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(t){return t.replace(S3,E3)}const w3=new Map;function E3(t,e){let n=ht[e];if(n===void 0){const i=w3.get(e);if(i!==void 0)n=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kh(n)}const T3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zg(t){return t.replace(T3,A3)}function A3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function b3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===M_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===S_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===fr&&(e="SHADOWMAP_TYPE_VSM"),e}function C3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Bo:case Ho:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function R3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ho:e="ENVMAP_MODE_REFRACTION";break}return e}function P3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Np:e="ENVMAP_BLENDING_MULTIPLY";break;case oS:e="ENVMAP_BLENDING_MIX";break;case aS:e="ENVMAP_BLENDING_ADD";break}return e}function L3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function D3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=b3(n),c=C3(n),d=R3(n),f=P3(n),h=L3(n),p=x3(n),y=y3(s),w=r.createProgram();let _,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ta).join(`
`),_.length>0&&(_+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ta).join(`
`),u.length>0&&(u+=`
`)):(_=[Qg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),u=[Qg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zr?"#define TONE_MAPPING":"",n.toneMapping!==Zr?ht.tonemapping_pars_fragment:"",n.toneMapping!==Zr?v3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,g3("linearToOutputTexel",n.outputColorSpace),_3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ta).join(`
`)),o=kh(o),o=Kg(o,n),o=Jg(o,n),a=kh(a),a=Kg(a,n),a=Jg(a,n),o=Zg(o),a=Zg(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,u=["#define varying in",n.glslVersion===ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=v+_+o,S=v+u+a,R=Yg(r,r.VERTEX_SHADER,x),P=Yg(r,r.FRAGMENT_SHADER,S);r.attachShader(w,R),r.attachShader(w,P),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function L(N){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(w)||"",Q=r.getShaderInfoLog(R)||"",ae=r.getShaderInfoLog(P)||"",ce=V.trim(),H=Q.trim(),q=ae.trim();let U=!0,ee=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,w,R,P);else{const re=$g(r,R,"vertex"),Ee=$g(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ce+`
`+re+`
`+Ee)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(H===""||q==="")&&(ee=!1);ee&&(N.diagnostics={runnable:U,programLog:ce,vertexShader:{log:H,prefix:_},fragmentShader:{log:q,prefix:u}})}r.deleteShader(R),r.deleteShader(P),I=new Ac(r,w),E=M3(r,w)}let I;this.getUniforms=function(){return I===void 0&&L(this),I};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(w,f3)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=h3++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=R,this.fragmentShader=P,this}let I3=0;class N3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new U3(e),n.set(e,i)),i}}class U3{constructor(e){this.id=I3++,this.code=e,this.usedTimes=0}}function F3(t,e,n,i,r,s,o){const a=new Wp,l=new N3,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return c.add(E),E===0?"uv":`uv${E}`}function _(E,M,N,V,Q){const ae=V.fog,ce=Q.geometry,H=E.isMeshStandardMaterial?V.environment:null,q=(E.isMeshStandardMaterial?n:e).get(E.envMap||H),U=q&&q.mapping===_u?q.image.height:null,ee=y[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const re=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ee=re!==void 0?re.length:0;let Fe=0;ce.morphAttributes.position!==void 0&&(Fe=1),ce.morphAttributes.normal!==void 0&&(Fe=2),ce.morphAttributes.color!==void 0&&(Fe=3);let ct,Pe,oe,B;if(ee){const gt=Zi[ee];ct=gt.vertexShader,Pe=gt.fragmentShader}else ct=E.vertexShader,Pe=E.fragmentShader,l.update(E),oe=l.getVertexShaderID(E),B=l.getFragmentShaderID(E);const pe=t.getRenderTarget(),Ie=t.state.buffers.depth.getReversed(),et=Q.isInstancedMesh===!0,be=Q.isBatchedMesh===!0,pt=!!E.map,an=!!E.matcap,k=!!q,bt=!!E.aoMap,st=!!E.lightMap,Ge=!!E.bumpMap,O=!!E.normalMap,Re=!!E.displacementMap,le=!!E.emissiveMap,ue=!!E.metalnessMap,Je=!!E.roughnessMap,tt=E.anisotropy>0,D=E.clearcoat>0,T=E.dispersion>0,Z=E.iridescence>0,fe=E.sheen>0,_e=E.transmission>0,de=tt&&!!E.anisotropyMap,Ne=D&&!!E.clearcoatMap,xe=D&&!!E.clearcoatNormalMap,We=D&&!!E.clearcoatRoughnessMap,Xe=Z&&!!E.iridescenceMap,ye=Z&&!!E.iridescenceThicknessMap,Te=fe&&!!E.sheenColorMap,it=fe&&!!E.sheenRoughnessMap,Ye=!!E.specularMap,Le=!!E.specularColorMap,at=!!E.specularIntensityMap,X=_e&&!!E.transmissionMap,Ae=_e&&!!E.thicknessMap,Ce=!!E.gradientMap,ze=!!E.alphaMap,Me=E.alphaTest>0,ge=!!E.alphaHash,je=!!E.extensions;let ot=Zr;E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ot=t.toneMapping);const Ft={shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:ct,fragmentShader:Pe,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:B,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:be,batchingColor:be&&Q._colorsTexture!==null,instancing:et,instancingColor:et&&Q.instanceColor!==null,instancingMorph:et&&Q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Vo,alphaToCoverage:!!E.alphaToCoverage,map:pt,matcap:an,envMap:k,envMapMode:k&&q.mapping,envMapCubeUVHeight:U,aoMap:bt,lightMap:st,bumpMap:Ge,normalMap:O,displacementMap:h&&Re,emissiveMap:le,normalMapObjectSpace:O&&E.normalMapType===vS,normalMapTangentSpace:O&&E.normalMapType===Hp,metalnessMap:ue,roughnessMap:Je,anisotropy:tt,anisotropyMap:de,clearcoat:D,clearcoatMap:Ne,clearcoatNormalMap:xe,clearcoatRoughnessMap:We,dispersion:T,iridescence:Z,iridescenceMap:Xe,iridescenceThicknessMap:ye,sheen:fe,sheenColorMap:Te,sheenRoughnessMap:it,specularMap:Ye,specularColorMap:Le,specularIntensityMap:at,transmission:_e,transmissionMap:X,thicknessMap:Ae,gradientMap:Ce,opaque:E.transparent===!1&&E.blending===Ro&&E.alphaToCoverage===!1,alphaMap:ze,alphaTest:Me,alphaHash:ge,combine:E.combine,mapUv:pt&&w(E.map.channel),aoMapUv:bt&&w(E.aoMap.channel),lightMapUv:st&&w(E.lightMap.channel),bumpMapUv:Ge&&w(E.bumpMap.channel),normalMapUv:O&&w(E.normalMap.channel),displacementMapUv:Re&&w(E.displacementMap.channel),emissiveMapUv:le&&w(E.emissiveMap.channel),metalnessMapUv:ue&&w(E.metalnessMap.channel),roughnessMapUv:Je&&w(E.roughnessMap.channel),anisotropyMapUv:de&&w(E.anisotropyMap.channel),clearcoatMapUv:Ne&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:xe&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:it&&w(E.sheenRoughnessMap.channel),specularMapUv:Ye&&w(E.specularMap.channel),specularColorMapUv:Le&&w(E.specularColorMap.channel),specularIntensityMapUv:at&&w(E.specularIntensityMap.channel),transmissionMapUv:X&&w(E.transmissionMap.channel),thicknessMapUv:Ae&&w(E.thicknessMap.channel),alphaMapUv:ze&&w(E.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(O||tt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ce.attributes.uv&&(pt||ze),fog:!!ae,useFog:E.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ie,skinning:Q.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,decodeVideoTexture:pt&&E.map.isVideoTexture===!0&&Pt.getTransfer(E.map.colorSpace)===Ht,decodeVideoTextureEmissive:le&&E.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(E.emissiveMap.colorSpace)===Ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===fi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&E.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)M.push(N),M.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(v(M,E),x(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const M=y[E.type];let N;if(M){const V=Zi[M];N=jS.clone(V.uniforms)}else N=E.uniforms;return N}function R(E,M){let N;for(let V=0,Q=d.length;V<Q;V++){const ae=d[V];if(ae.cacheKey===M){N=ae,++N.usedTimes;break}}return N===void 0&&(N=new D3(t,M,E,s),d.push(N)),N}function P(E){if(--E.usedTimes===0){const M=d.indexOf(E);d[M]=d[d.length-1],d.pop(),E.destroy()}}function L(E){l.remove(E)}function I(){l.dispose()}return{getParameters:_,getProgramCacheKey:u,getUniforms:S,acquireProgram:R,releaseProgram:P,releaseShaderCache:L,programs:d,dispose:I}}function O3(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function k3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ev(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function tv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,y,w,_){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:y,renderOrder:f.renderOrder,z:w,group:_},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=y,u.renderOrder=f.renderOrder,u.z=w,u.group=_),e++,u}function a(f,h,p,y,w,_){const u=o(f,h,p,y,w,_);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,y,w,_){const u=o(f,h,p,y,w,_);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||k3),i.length>1&&i.sort(h||ev),r.length>1&&r.sort(h||ev)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function z3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new tv,t.set(i,[o])):r>=s.length?(o=new tv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function B3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new _t};break;case"SpotLight":n={position:new z,direction:new z,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new _t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":n={color:new _t,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function H3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let V3=0;function G3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function W3(t){const e=new B3,n=H3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new $t,o=new $t;function a(c){let d=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,y=0,w=0,_=0,u=0,v=0,x=0,S=0,R=0,P=0,L=0;c.sort(G3);for(let E=0,M=c.length;E<M;E++){const N=c[E],V=N.color,Q=N.intensity,ae=N.distance,ce=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=V.r*Q,f+=V.g*Q,h+=V.b*Q;else if(N.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(N.sh.coefficients[H],Q);L++}else if(N.isDirectionalLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const q=N.shadow,U=n.get(N);U.shadowIntensity=q.intensity,U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=ce,i.directionalShadowMatrix[p]=N.shadow.matrix,v++}i.directional[p]=H,p++}else if(N.isSpotLight){const H=e.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(V).multiplyScalar(Q),H.distance=ae,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,i.spot[w]=H;const q=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,q.updateMatrices(N),N.castShadow&&P++),i.spotLightMatrix[w]=q.matrix,N.castShadow){const U=n.get(N);U.shadowIntensity=q.intensity,U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,i.spotShadow[w]=U,i.spotShadowMap[w]=ce,S++}w++}else if(N.isRectAreaLight){const H=e.get(N);H.color.copy(V).multiplyScalar(Q),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),i.rectArea[_]=H,_++}else if(N.isPointLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),H.distance=N.distance,H.decay=N.decay,N.castShadow){const q=N.shadow,U=n.get(N);U.shadowIntensity=q.intensity,U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,U.shadowCameraNear=q.camera.near,U.shadowCameraFar=q.camera.far,i.pointShadow[y]=U,i.pointShadowMap[y]=ce,i.pointShadowMatrix[y]=N.shadow.matrix,x++}i.point[y]=H,y++}else if(N.isHemisphereLight){const H=e.get(N);H.skyColor.copy(N.color).multiplyScalar(Q),H.groundColor.copy(N.groundColor).multiplyScalar(Q),i.hemi[u]=H,u++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==p||I.pointLength!==y||I.spotLength!==w||I.rectAreaLength!==_||I.hemiLength!==u||I.numDirectionalShadows!==v||I.numPointShadows!==x||I.numSpotShadows!==S||I.numSpotMaps!==R||I.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=w,i.rectArea.length=_,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+R-P,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,I.directionalLength=p,I.pointLength=y,I.spotLength=w,I.rectAreaLength=_,I.hemiLength=u,I.numDirectionalShadows=v,I.numPointShadows=x,I.numSpotShadows=S,I.numSpotMaps=R,I.numLightProbes=L,i.version=V3++)}function l(c,d){let f=0,h=0,p=0,y=0,w=0;const _=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const x=c[u];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),p++}else if(x.isRectAreaLight){const S=i.rectArea[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(x.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),h++}else if(x.isHemisphereLight){const S=i.hemi[w];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(_),w++}}}return{setup:a,setupView:l,state:i}}function nv(t){const e=new W3(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function X3(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new nv(t),e.set(r,[a])):s>=o.length?(a=new nv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const j3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y3=`uniform sampler2D shadow_pass;
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
}`;function q3(t,e,n){let i=new jp;const r=new Ke,s=new Ke,o=new Vt,a=new v2({depthPacking:gS}),l=new _2,c={},d=n.maxTextureSize,f={[ts]:fi,[fi]:ts,[bn]:bn},h=new ns({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:j3,fragmentShader:Y3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const y=new mn;y.setAttribute("position",new rr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new K(y,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=M_;let u=this.type;this.render=function(P,L,I){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Jr),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Q=u!==fr&&this.type===fr,ae=u===fr&&this.type!==fr;for(let ce=0,H=P.length;ce<H;ce++){const q=P[ce],U=q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const ee=U.getFrameExtents();if(r.multiply(ee),s.copy(U.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ee.x),r.x=s.x*ee.x,U.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ee.y),r.y=s.y*ee.y,U.mapSize.y=s.y)),U.map===null||Q===!0||ae===!0){const Ee=this.type!==fr?{minFilter:Xi,magFilter:Xi}:{};U.map!==null&&U.map.dispose(),U.map=new Fs(r.x,r.y,Ee),U.map.texture.name=q.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const re=U.getViewportCount();for(let Ee=0;Ee<re;Ee++){const Fe=U.getViewport(Ee);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),V.viewport(o),U.updateMatrices(q,Ee),i=U.getFrustum(),S(L,I,U.camera,q,this.type)}U.isPointLightShadow!==!0&&this.type===fr&&v(U,I),U.needsUpdate=!1}u=this.type,_.needsUpdate=!1,t.setRenderTarget(E,M,N)};function v(P,L){const I=e.update(w);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Fs(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(L,null,I,h,w,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(L,null,I,p,w,null)}function x(P,L,I,E){let M=null;const N=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)M=N;else if(M=I.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const V=M.uuid,Q=L.uuid;let ae=c[V];ae===void 0&&(ae={},c[V]=ae);let ce=ae[Q];ce===void 0&&(ce=M.clone(),ae[Q]=ce,L.addEventListener("dispose",R)),M=ce}if(M.visible=L.visible,M.wireframe=L.wireframe,E===fr?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:f[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=t.properties.get(M);V.light=I}return M}function S(P,L,I,E,M){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===fr)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const Q=e.update(P),ae=P.material;if(Array.isArray(ae)){const ce=Q.groups;for(let H=0,q=ce.length;H<q;H++){const U=ce[H],ee=ae[U.materialIndex];if(ee&&ee.visible){const re=x(P,ee,E,M);P.onBeforeShadow(t,P,L,I,Q,re,U),t.renderBufferDirect(I,null,Q,re,P,U),P.onAfterShadow(t,P,L,I,Q,re,U)}}}else if(ae.visible){const ce=x(P,ae,E,M);P.onBeforeShadow(t,P,L,I,Q,ce,null),t.renderBufferDirect(I,null,Q,ce,P,null),P.onAfterShadow(t,P,L,I,Q,ce,null)}}const V=P.children;for(let Q=0,ae=V.length;Q<ae;Q++)S(V[Q],L,I,E,M)}function R(P){P.target.removeEventListener("dispose",R);for(const I in c){const E=c[I],M=P.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const $3={[Jf]:Zf,[Qf]:nh,[eh]:ih,[zo]:th,[Zf]:Jf,[nh]:Qf,[ih]:eh,[th]:zo};function K3(t,e){function n(){let X=!1;const Ae=new Vt;let Ce=null;const ze=new Vt(0,0,0,0);return{setMask:function(Me){Ce!==Me&&!X&&(t.colorMask(Me,Me,Me,Me),Ce=Me)},setLocked:function(Me){X=Me},setClear:function(Me,ge,je,ot,Ft){Ft===!0&&(Me*=ot,ge*=ot,je*=ot),Ae.set(Me,ge,je,ot),ze.equals(Ae)===!1&&(t.clearColor(Me,ge,je,ot),ze.copy(Ae))},reset:function(){X=!1,Ce=null,ze.set(-1,0,0,0)}}}function i(){let X=!1,Ae=!1,Ce=null,ze=null,Me=null;return{setReversed:function(ge){if(Ae!==ge){const je=e.get("EXT_clip_control");ge?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ae=ge;const ot=Me;Me=null,this.setClear(ot)}},getReversed:function(){return Ae},setTest:function(ge){ge?pe(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(ge){Ce!==ge&&!X&&(t.depthMask(ge),Ce=ge)},setFunc:function(ge){if(Ae&&(ge=$3[ge]),ze!==ge){switch(ge){case Jf:t.depthFunc(t.NEVER);break;case Zf:t.depthFunc(t.ALWAYS);break;case Qf:t.depthFunc(t.LESS);break;case zo:t.depthFunc(t.LEQUAL);break;case eh:t.depthFunc(t.EQUAL);break;case th:t.depthFunc(t.GEQUAL);break;case nh:t.depthFunc(t.GREATER);break;case ih:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ze=ge}},setLocked:function(ge){X=ge},setClear:function(ge){Me!==ge&&(Ae&&(ge=1-ge),t.clearDepth(ge),Me=ge)},reset:function(){X=!1,Ce=null,ze=null,Me=null,Ae=!1}}}function r(){let X=!1,Ae=null,Ce=null,ze=null,Me=null,ge=null,je=null,ot=null,Ft=null;return{setTest:function(gt){X||(gt?pe(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(gt){Ae!==gt&&!X&&(t.stencilMask(gt),Ae=gt)},setFunc:function(gt,rn,Yn){(Ce!==gt||ze!==rn||Me!==Yn)&&(t.stencilFunc(gt,rn,Yn),Ce=gt,ze=rn,Me=Yn)},setOp:function(gt,rn,Yn){(ge!==gt||je!==rn||ot!==Yn)&&(t.stencilOp(gt,rn,Yn),ge=gt,je=rn,ot=Yn)},setLocked:function(gt){X=gt},setClear:function(gt){Ft!==gt&&(t.clearStencil(gt),Ft=gt)},reset:function(){X=!1,Ae=null,Ce=null,ze=null,Me=null,ge=null,je=null,ot=null,Ft=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],y=null,w=!1,_=null,u=null,v=null,x=null,S=null,R=null,P=null,L=new _t(0,0,0),I=0,E=!1,M=null,N=null,V=null,Q=null,ae=null;const ce=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(U)[1]),H=q>=1):U.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),H=q>=2);let ee=null,re={};const Ee=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),ct=new Vt().fromArray(Ee),Pe=new Vt().fromArray(Fe);function oe(X,Ae,Ce,ze){const Me=new Uint8Array(4),ge=t.createTexture();t.bindTexture(X,ge),t.texParameteri(X,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(X,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<Ce;je++)X===t.TEXTURE_3D||X===t.TEXTURE_2D_ARRAY?t.texImage3D(Ae,0,t.RGBA,1,1,ze,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(Ae+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return ge}const B={};B[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),B[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),B[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(t.DEPTH_TEST),o.setFunc(zo),Ge(!1),O(J0),pe(t.CULL_FACE),bt(Jr);function pe(X){d[X]!==!0&&(t.enable(X),d[X]=!0)}function Ie(X){d[X]!==!1&&(t.disable(X),d[X]=!1)}function et(X,Ae){return f[X]!==Ae?(t.bindFramebuffer(X,Ae),f[X]=Ae,X===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Ae),X===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Ae),!0):!1}function be(X,Ae){let Ce=p,ze=!1;if(X){Ce=h.get(Ae),Ce===void 0&&(Ce=[],h.set(Ae,Ce));const Me=X.textures;if(Ce.length!==Me.length||Ce[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,je=Me.length;ge<je;ge++)Ce[ge]=t.COLOR_ATTACHMENT0+ge;Ce.length=Me.length,ze=!0}}else Ce[0]!==t.BACK&&(Ce[0]=t.BACK,ze=!0);ze&&t.drawBuffers(Ce)}function pt(X){return y!==X?(t.useProgram(X),y=X,!0):!1}const an={[Ms]:t.FUNC_ADD,[GM]:t.FUNC_SUBTRACT,[WM]:t.FUNC_REVERSE_SUBTRACT};an[XM]=t.MIN,an[jM]=t.MAX;const k={[YM]:t.ZERO,[qM]:t.ONE,[$M]:t.SRC_COLOR,[$f]:t.SRC_ALPHA,[tS]:t.SRC_ALPHA_SATURATE,[QM]:t.DST_COLOR,[JM]:t.DST_ALPHA,[KM]:t.ONE_MINUS_SRC_COLOR,[Kf]:t.ONE_MINUS_SRC_ALPHA,[eS]:t.ONE_MINUS_DST_COLOR,[ZM]:t.ONE_MINUS_DST_ALPHA,[nS]:t.CONSTANT_COLOR,[iS]:t.ONE_MINUS_CONSTANT_COLOR,[rS]:t.CONSTANT_ALPHA,[sS]:t.ONE_MINUS_CONSTANT_ALPHA};function bt(X,Ae,Ce,ze,Me,ge,je,ot,Ft,gt){if(X===Jr){w===!0&&(Ie(t.BLEND),w=!1);return}if(w===!1&&(pe(t.BLEND),w=!0),X!==VM){if(X!==_||gt!==E){if((u!==Ms||S!==Ms)&&(t.blendEquation(t.FUNC_ADD),u=Ms,S=Ms),gt)switch(X){case Ro:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Z0:t.blendFunc(t.ONE,t.ONE);break;case Q0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case eg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ro:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Z0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Q0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}v=null,x=null,R=null,P=null,L.set(0,0,0),I=0,_=X,E=gt}return}Me=Me||Ae,ge=ge||Ce,je=je||ze,(Ae!==u||Me!==S)&&(t.blendEquationSeparate(an[Ae],an[Me]),u=Ae,S=Me),(Ce!==v||ze!==x||ge!==R||je!==P)&&(t.blendFuncSeparate(k[Ce],k[ze],k[ge],k[je]),v=Ce,x=ze,R=ge,P=je),(ot.equals(L)===!1||Ft!==I)&&(t.blendColor(ot.r,ot.g,ot.b,Ft),L.copy(ot),I=Ft),_=X,E=!1}function st(X,Ae){X.side===bn?Ie(t.CULL_FACE):pe(t.CULL_FACE);let Ce=X.side===fi;Ae&&(Ce=!Ce),Ge(Ce),X.blending===Ro&&X.transparent===!1?bt(Jr):bt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),s.setMask(X.colorWrite);const ze=X.stencilWrite;a.setTest(ze),ze&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),le(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(X){M!==X&&(X?t.frontFace(t.CW):t.frontFace(t.CCW),M=X)}function O(X){X!==BM?(pe(t.CULL_FACE),X!==N&&(X===J0?t.cullFace(t.BACK):X===HM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),N=X}function Re(X){X!==V&&(H&&t.lineWidth(X),V=X)}function le(X,Ae,Ce){X?(pe(t.POLYGON_OFFSET_FILL),(Q!==Ae||ae!==Ce)&&(t.polygonOffset(Ae,Ce),Q=Ae,ae=Ce)):Ie(t.POLYGON_OFFSET_FILL)}function ue(X){X?pe(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function Je(X){X===void 0&&(X=t.TEXTURE0+ce-1),ee!==X&&(t.activeTexture(X),ee=X)}function tt(X,Ae,Ce){Ce===void 0&&(ee===null?Ce=t.TEXTURE0+ce-1:Ce=ee);let ze=re[Ce];ze===void 0&&(ze={type:void 0,texture:void 0},re[Ce]=ze),(ze.type!==X||ze.texture!==Ae)&&(ee!==Ce&&(t.activeTexture(Ce),ee=Ce),t.bindTexture(X,Ae||B[X]),ze.type=X,ze.texture=Ae)}function D(){const X=re[ee];X!==void 0&&X.type!==void 0&&(t.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{t.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Z(){try{t.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{t.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{t.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{t.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ne(){try{t.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{t.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{t.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xe(){try{t.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ye(){try{t.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(X){ct.equals(X)===!1&&(t.scissor(X.x,X.y,X.z,X.w),ct.copy(X))}function it(X){Pe.equals(X)===!1&&(t.viewport(X.x,X.y,X.z,X.w),Pe.copy(X))}function Ye(X,Ae){let Ce=c.get(Ae);Ce===void 0&&(Ce=new WeakMap,c.set(Ae,Ce));let ze=Ce.get(X);ze===void 0&&(ze=t.getUniformBlockIndex(Ae,X.name),Ce.set(X,ze))}function Le(X,Ae){const ze=c.get(Ae).get(X);l.get(Ae)!==ze&&(t.uniformBlockBinding(Ae,ze,X.__bindingPointIndex),l.set(Ae,ze))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},ee=null,re={},f={},h=new WeakMap,p=[],y=null,w=!1,_=null,u=null,v=null,x=null,S=null,R=null,P=null,L=new _t(0,0,0),I=0,E=!1,M=null,N=null,V=null,Q=null,ae=null,ct.set(0,0,t.canvas.width,t.canvas.height),Pe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:Ie,bindFramebuffer:et,drawBuffers:be,useProgram:pt,setBlending:bt,setMaterial:st,setFlipSided:Ge,setCullFace:O,setLineWidth:Re,setPolygonOffset:le,setScissorTest:ue,activeTexture:Je,bindTexture:tt,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:Z,texImage2D:Xe,texImage3D:ye,updateUBOMapping:Ye,uniformBlockBinding:Le,texStorage2D:xe,texStorage3D:We,texSubImage2D:fe,texSubImage3D:_e,compressedTexSubImage2D:de,compressedTexSubImage3D:Ne,scissor:Te,viewport:it,reset:at}}function J3(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,T){return p?new OffscreenCanvas(D,T):Qc("canvas")}function w(D,T,Z){let fe=1;const _e=tt(D);if((_e.width>Z||_e.height>Z)&&(fe=Z/Math.max(_e.width,_e.height)),fe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(fe*_e.width),Ne=Math.floor(fe*_e.height);f===void 0&&(f=y(de,Ne));const xe=T?y(de,Ne):f;return xe.width=de,xe.height=Ne,xe.getContext("2d").drawImage(D,0,0,de,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+Ne+")."),xe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function _(D){return D.generateMipmaps}function u(D){t.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?t.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(D,T,Z,fe,_e=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=T;if(T===t.RED&&(Z===t.FLOAT&&(de=t.R32F),Z===t.HALF_FLOAT&&(de=t.R16F),Z===t.UNSIGNED_BYTE&&(de=t.R8)),T===t.RED_INTEGER&&(Z===t.UNSIGNED_BYTE&&(de=t.R8UI),Z===t.UNSIGNED_SHORT&&(de=t.R16UI),Z===t.UNSIGNED_INT&&(de=t.R32UI),Z===t.BYTE&&(de=t.R8I),Z===t.SHORT&&(de=t.R16I),Z===t.INT&&(de=t.R32I)),T===t.RG&&(Z===t.FLOAT&&(de=t.RG32F),Z===t.HALF_FLOAT&&(de=t.RG16F),Z===t.UNSIGNED_BYTE&&(de=t.RG8)),T===t.RG_INTEGER&&(Z===t.UNSIGNED_BYTE&&(de=t.RG8UI),Z===t.UNSIGNED_SHORT&&(de=t.RG16UI),Z===t.UNSIGNED_INT&&(de=t.RG32UI),Z===t.BYTE&&(de=t.RG8I),Z===t.SHORT&&(de=t.RG16I),Z===t.INT&&(de=t.RG32I)),T===t.RGB_INTEGER&&(Z===t.UNSIGNED_BYTE&&(de=t.RGB8UI),Z===t.UNSIGNED_SHORT&&(de=t.RGB16UI),Z===t.UNSIGNED_INT&&(de=t.RGB32UI),Z===t.BYTE&&(de=t.RGB8I),Z===t.SHORT&&(de=t.RGB16I),Z===t.INT&&(de=t.RGB32I)),T===t.RGBA_INTEGER&&(Z===t.UNSIGNED_BYTE&&(de=t.RGBA8UI),Z===t.UNSIGNED_SHORT&&(de=t.RGBA16UI),Z===t.UNSIGNED_INT&&(de=t.RGBA32UI),Z===t.BYTE&&(de=t.RGBA8I),Z===t.SHORT&&(de=t.RGBA16I),Z===t.INT&&(de=t.RGBA32I)),T===t.RGB&&(Z===t.UNSIGNED_INT_5_9_9_9_REV&&(de=t.RGB9_E5),Z===t.UNSIGNED_INT_10F_11F_11F_REV&&(de=t.R11F_G11F_B10F)),T===t.RGBA){const Ne=_e?Jc:Pt.getTransfer(fe);Z===t.FLOAT&&(de=t.RGBA32F),Z===t.HALF_FLOAT&&(de=t.RGBA16F),Z===t.UNSIGNED_BYTE&&(de=Ne===Ht?t.SRGB8_ALPHA8:t.RGBA8),Z===t.UNSIGNED_SHORT_4_4_4_4&&(de=t.RGBA4),Z===t.UNSIGNED_SHORT_5_5_5_1&&(de=t.RGB5_A1)}return(de===t.R16F||de===t.R32F||de===t.RG16F||de===t.RG32F||de===t.RGBA16F||de===t.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function S(D,T){let Z;return D?T===null||T===Us||T===tl?Z=t.DEPTH24_STENCIL8:T===vr?Z=t.DEPTH32F_STENCIL8:T===el&&(Z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Us||T===tl?Z=t.DEPTH_COMPONENT24:T===vr?Z=t.DEPTH_COMPONENT32F:T===el&&(Z=t.DEPTH_COMPONENT16),Z}function R(D,T){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==Xi&&D.minFilter!==er?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function P(D){const T=D.target;T.removeEventListener("dispose",P),I(T),T.isVideoTexture&&d.delete(T)}function L(D){const T=D.target;T.removeEventListener("dispose",L),M(T)}function I(D){const T=i.get(D);if(T.__webglInit===void 0)return;const Z=D.source,fe=h.get(Z);if(fe){const _e=fe[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&E(D),Object.keys(fe).length===0&&h.delete(Z)}i.remove(D)}function E(D){const T=i.get(D);t.deleteTexture(T.__webglTexture);const Z=D.source,fe=h.get(Z);delete fe[T.__cacheKey],o.memory.textures--}function M(D){const T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(T.__webglFramebuffer[fe]))for(let _e=0;_e<T.__webglFramebuffer[fe].length;_e++)t.deleteFramebuffer(T.__webglFramebuffer[fe][_e]);else t.deleteFramebuffer(T.__webglFramebuffer[fe]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[fe])}else{if(Array.isArray(T.__webglFramebuffer))for(let fe=0;fe<T.__webglFramebuffer.length;fe++)t.deleteFramebuffer(T.__webglFramebuffer[fe]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let fe=0;fe<T.__webglColorRenderbuffer.length;fe++)T.__webglColorRenderbuffer[fe]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[fe]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=D.textures;for(let fe=0,_e=Z.length;fe<_e;fe++){const de=i.get(Z[fe]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(Z[fe])}i.remove(D)}let N=0;function V(){N=0}function Q(){const D=N;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),N+=1,D}function ae(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ce(D,T){const Z=i.get(D);if(D.isVideoTexture&&ue(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Z.__version!==D.version){const fe=D.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(Z,D,T);return}}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,Z.__webglTexture,t.TEXTURE0+T)}function H(D,T){const Z=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){B(Z,D,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Z.__webglTexture,t.TEXTURE0+T)}function q(D,T){const Z=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){B(Z,D,T);return}n.bindTexture(t.TEXTURE_3D,Z.__webglTexture,t.TEXTURE0+T)}function U(D,T){const Z=i.get(D);if(D.version>0&&Z.__version!==D.version){pe(Z,D,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture,t.TEXTURE0+T)}const ee={[Po]:t.REPEAT,[As]:t.CLAMP_TO_EDGE,[oh]:t.MIRRORED_REPEAT},re={[Xi]:t.NEAREST,[pS]:t.NEAREST_MIPMAP_NEAREST,[kl]:t.NEAREST_MIPMAP_LINEAR,[er]:t.LINEAR,[md]:t.LINEAR_MIPMAP_NEAREST,[bs]:t.LINEAR_MIPMAP_LINEAR},Ee={[_S]:t.NEVER,[ES]:t.ALWAYS,[xS]:t.LESS,[I_]:t.LEQUAL,[yS]:t.EQUAL,[wS]:t.GEQUAL,[MS]:t.GREATER,[SS]:t.NOTEQUAL};function Fe(D,T){if(T.type===vr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===er||T.magFilter===md||T.magFilter===kl||T.magFilter===bs||T.minFilter===er||T.minFilter===md||T.minFilter===kl||T.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,ee[T.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,ee[T.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,ee[T.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,re[T.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,Ee[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Xi||T.minFilter!==kl&&T.minFilter!==bs||T.type===vr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ct(D,T){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",P));const fe=T.source;let _e=h.get(fe);_e===void 0&&(_e={},h.set(fe,_e));const de=ae(T);if(de!==D.__cacheKey){_e[de]===void 0&&(_e[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),_e[de].usedTimes++;const Ne=_e[D.__cacheKey];Ne!==void 0&&(_e[D.__cacheKey].usedTimes--,Ne.usedTimes===0&&E(T)),D.__cacheKey=de,D.__webglTexture=_e[de].texture}return Z}function Pe(D,T,Z){return Math.floor(Math.floor(D/Z)/T)}function oe(D,T,Z,fe){const de=D.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,T.width,T.height,Z,fe,T.data);else{de.sort((ye,Te)=>ye.start-Te.start);let Ne=0;for(let ye=1;ye<de.length;ye++){const Te=de[Ne],it=de[ye],Ye=Te.start+Te.count,Le=Pe(it.start,T.width,4),at=Pe(Te.start,T.width,4);it.start<=Ye+1&&Le===at&&Pe(it.start+it.count-1,T.width,4)===Le?Te.count=Math.max(Te.count,it.start+it.count-Te.start):(++Ne,de[Ne]=it)}de.length=Ne+1;const xe=t.getParameter(t.UNPACK_ROW_LENGTH),We=t.getParameter(t.UNPACK_SKIP_PIXELS),Xe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,T.width);for(let ye=0,Te=de.length;ye<Te;ye++){const it=de[ye],Ye=Math.floor(it.start/4),Le=Math.ceil(it.count/4),at=Ye%T.width,X=Math.floor(Ye/T.width),Ae=Le,Ce=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,at),t.pixelStorei(t.UNPACK_SKIP_ROWS,X),n.texSubImage2D(t.TEXTURE_2D,0,at,X,Ae,Ce,Z,fe,T.data)}D.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,xe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,We),t.pixelStorei(t.UNPACK_SKIP_ROWS,Xe)}}function B(D,T,Z){let fe=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=t.TEXTURE_3D);const _e=ct(D,T),de=T.source;n.bindTexture(fe,D.__webglTexture,t.TEXTURE0+Z);const Ne=i.get(de);if(de.version!==Ne.__version||_e===!0){n.activeTexture(t.TEXTURE0+Z);const xe=Pt.getPrimaries(Pt.workingColorSpace),We=T.colorSpace===Br?null:Pt.getPrimaries(T.colorSpace),Xe=T.colorSpace===Br||xe===We?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ye=w(T.image,!1,r.maxTextureSize);ye=Je(T,ye);const Te=s.convert(T.format,T.colorSpace),it=s.convert(T.type);let Ye=x(T.internalFormat,Te,it,T.colorSpace,T.isVideoTexture);Fe(fe,T);let Le;const at=T.mipmaps,X=T.isVideoTexture!==!0,Ae=Ne.__version===void 0||_e===!0,Ce=de.dataReady,ze=R(T,ye);if(T.isDepthTexture)Ye=S(T.format===il,T.type),Ae&&(X?n.texStorage2D(t.TEXTURE_2D,1,Ye,ye.width,ye.height):n.texImage2D(t.TEXTURE_2D,0,Ye,ye.width,ye.height,0,Te,it,null));else if(T.isDataTexture)if(at.length>0){X&&Ae&&n.texStorage2D(t.TEXTURE_2D,ze,Ye,at[0].width,at[0].height);for(let Me=0,ge=at.length;Me<ge;Me++)Le=at[Me],X?Ce&&n.texSubImage2D(t.TEXTURE_2D,Me,0,0,Le.width,Le.height,Te,it,Le.data):n.texImage2D(t.TEXTURE_2D,Me,Ye,Le.width,Le.height,0,Te,it,Le.data);T.generateMipmaps=!1}else X?(Ae&&n.texStorage2D(t.TEXTURE_2D,ze,Ye,ye.width,ye.height),Ce&&oe(T,ye,Te,it)):n.texImage2D(t.TEXTURE_2D,0,Ye,ye.width,ye.height,0,Te,it,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,Ye,at[0].width,at[0].height,ye.depth);for(let Me=0,ge=at.length;Me<ge;Me++)if(Le=at[Me],T.format!==Vi)if(Te!==null)if(X){if(Ce)if(T.layerUpdates.size>0){const je=Dg(Le.width,Le.height,T.format,T.type);for(const ot of T.layerUpdates){const Ft=Le.data.subarray(ot*je/Le.data.BYTES_PER_ELEMENT,(ot+1)*je/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Me,0,0,ot,Le.width,Le.height,1,Te,Ft)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,ye.depth,Te,Le.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Me,Ye,Le.width,Le.height,ye.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,ye.depth,Te,it,Le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Me,Ye,Le.width,Le.height,ye.depth,0,Te,it,Le.data)}else{X&&Ae&&n.texStorage2D(t.TEXTURE_2D,ze,Ye,at[0].width,at[0].height);for(let Me=0,ge=at.length;Me<ge;Me++)Le=at[Me],T.format!==Vi?Te!==null?X?Ce&&n.compressedTexSubImage2D(t.TEXTURE_2D,Me,0,0,Le.width,Le.height,Te,Le.data):n.compressedTexImage2D(t.TEXTURE_2D,Me,Ye,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ce&&n.texSubImage2D(t.TEXTURE_2D,Me,0,0,Le.width,Le.height,Te,it,Le.data):n.texImage2D(t.TEXTURE_2D,Me,Ye,Le.width,Le.height,0,Te,it,Le.data)}else if(T.isDataArrayTexture)if(X){if(Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,Ye,ye.width,ye.height,ye.depth),Ce)if(T.layerUpdates.size>0){const Me=Dg(ye.width,ye.height,T.format,T.type);for(const ge of T.layerUpdates){const je=ye.data.subarray(ge*Me/ye.data.BYTES_PER_ELEMENT,(ge+1)*Me/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ge,ye.width,ye.height,1,Te,it,je)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Te,it,ye.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ye,ye.width,ye.height,ye.depth,0,Te,it,ye.data);else if(T.isData3DTexture)X?(Ae&&n.texStorage3D(t.TEXTURE_3D,ze,Ye,ye.width,ye.height,ye.depth),Ce&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Te,it,ye.data)):n.texImage3D(t.TEXTURE_3D,0,Ye,ye.width,ye.height,ye.depth,0,Te,it,ye.data);else if(T.isFramebufferTexture){if(Ae)if(X)n.texStorage2D(t.TEXTURE_2D,ze,Ye,ye.width,ye.height);else{let Me=ye.width,ge=ye.height;for(let je=0;je<ze;je++)n.texImage2D(t.TEXTURE_2D,je,Ye,Me,ge,0,Te,it,null),Me>>=1,ge>>=1}}else if(at.length>0){if(X&&Ae){const Me=tt(at[0]);n.texStorage2D(t.TEXTURE_2D,ze,Ye,Me.width,Me.height)}for(let Me=0,ge=at.length;Me<ge;Me++)Le=at[Me],X?Ce&&n.texSubImage2D(t.TEXTURE_2D,Me,0,0,Te,it,Le):n.texImage2D(t.TEXTURE_2D,Me,Ye,Te,it,Le);T.generateMipmaps=!1}else if(X){if(Ae){const Me=tt(ye);n.texStorage2D(t.TEXTURE_2D,ze,Ye,Me.width,Me.height)}Ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,it,ye)}else n.texImage2D(t.TEXTURE_2D,0,Ye,Te,it,ye);_(T)&&u(fe),Ne.__version=de.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function pe(D,T,Z){if(T.image.length!==6)return;const fe=ct(D,T),_e=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+Z);const de=i.get(_e);if(_e.version!==de.__version||fe===!0){n.activeTexture(t.TEXTURE0+Z);const Ne=Pt.getPrimaries(Pt.workingColorSpace),xe=T.colorSpace===Br?null:Pt.getPrimaries(T.colorSpace),We=T.colorSpace===Br||Ne===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const Xe=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,Te=[];for(let ge=0;ge<6;ge++)!Xe&&!ye?Te[ge]=w(T.image[ge],!0,r.maxCubemapSize):Te[ge]=ye?T.image[ge].image:T.image[ge],Te[ge]=Je(T,Te[ge]);const it=Te[0],Ye=s.convert(T.format,T.colorSpace),Le=s.convert(T.type),at=x(T.internalFormat,Ye,Le,T.colorSpace),X=T.isVideoTexture!==!0,Ae=de.__version===void 0||fe===!0,Ce=_e.dataReady;let ze=R(T,it);Fe(t.TEXTURE_CUBE_MAP,T);let Me;if(Xe){X&&Ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ze,at,it.width,it.height);for(let ge=0;ge<6;ge++){Me=Te[ge].mipmaps;for(let je=0;je<Me.length;je++){const ot=Me[je];T.format!==Vi?Ye!==null?X?Ce&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,0,0,ot.width,ot.height,Ye,ot.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,at,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,0,0,ot.width,ot.height,Ye,Le,ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,at,ot.width,ot.height,0,Ye,Le,ot.data)}}}else{if(Me=T.mipmaps,X&&Ae){Me.length>0&&ze++;const ge=tt(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ze,at,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ye){X?Ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Te[ge].width,Te[ge].height,Ye,Le,Te[ge].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,at,Te[ge].width,Te[ge].height,0,Ye,Le,Te[ge].data);for(let je=0;je<Me.length;je++){const Ft=Me[je].image[ge].image;X?Ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,0,0,Ft.width,Ft.height,Ye,Le,Ft.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,at,Ft.width,Ft.height,0,Ye,Le,Ft.data)}}else{X?Ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ye,Le,Te[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,at,Ye,Le,Te[ge]);for(let je=0;je<Me.length;je++){const ot=Me[je];X?Ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,0,0,Ye,Le,ot.image[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,at,Ye,Le,ot.image[ge])}}}_(T)&&u(t.TEXTURE_CUBE_MAP),de.__version=_e.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ie(D,T,Z,fe,_e,de){const Ne=s.convert(Z.format,Z.colorSpace),xe=s.convert(Z.type),We=x(Z.internalFormat,Ne,xe,Z.colorSpace),Xe=i.get(T),ye=i.get(Z);if(ye.__renderTarget=T,!Xe.__hasExternalTextures){const Te=Math.max(1,T.width>>de),it=Math.max(1,T.height>>de);_e===t.TEXTURE_3D||_e===t.TEXTURE_2D_ARRAY?n.texImage3D(_e,de,We,Te,it,T.depth,0,Ne,xe,null):n.texImage2D(_e,de,We,Te,it,0,Ne,xe,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),le(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,_e,ye.__webglTexture,0,Re(T)):(_e===t.TEXTURE_2D||_e>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,fe,_e,ye.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(D,T,Z){if(t.bindRenderbuffer(t.RENDERBUFFER,D),T.depthBuffer){const fe=T.depthTexture,_e=fe&&fe.isDepthTexture?fe.type:null,de=S(T.stencilBuffer,_e),Ne=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=Re(T);le(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,de,T.width,T.height):Z?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,de,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,de,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ne,t.RENDERBUFFER,D)}else{const fe=T.textures;for(let _e=0;_e<fe.length;_e++){const de=fe[_e],Ne=s.convert(de.format,de.colorSpace),xe=s.convert(de.type),We=x(de.internalFormat,Ne,xe,de.colorSpace),Xe=Re(T);Z&&le(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,We,T.width,T.height):le(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe,We,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,We,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=i.get(T.depthTexture);fe.__renderTarget=T,(!fe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ce(T.depthTexture,0);const _e=fe.__webglTexture,de=Re(T);if(T.depthTexture.format===nl)le(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0);else if(T.depthTexture.format===il)le(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function pt(D){const T=i.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const fe=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),fe){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,fe.removeEventListener("dispose",_e)};fe.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=fe}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const fe=D.texture.mipmaps;fe&&fe.length>0?be(T.__webglFramebuffer[0],D):be(T.__webglFramebuffer,D)}else if(Z){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]===void 0)T.__webglDepthbuffer[fe]=t.createRenderbuffer(),et(T.__webglDepthbuffer[fe],D,!1);else{const _e=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[fe];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,de)}}else{const fe=D.texture.mipmaps;if(fe&&fe.length>0?n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),et(T.__webglDepthbuffer,D,!1);else{const _e=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,de)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function an(D,T,Z){const fe=i.get(D);T!==void 0&&Ie(fe.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Z!==void 0&&pt(D)}function k(D){const T=D.texture,Z=i.get(D),fe=i.get(T);D.addEventListener("dispose",L);const _e=D.textures,de=D.isWebGLCubeRenderTarget===!0,Ne=_e.length>1;if(Ne||(fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture()),fe.__version=T.version,o.memory.textures++),de){Z.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[xe]=[];for(let We=0;We<T.mipmaps.length;We++)Z.__webglFramebuffer[xe][We]=t.createFramebuffer()}else Z.__webglFramebuffer[xe]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let xe=0;xe<T.mipmaps.length;xe++)Z.__webglFramebuffer[xe]=t.createFramebuffer()}else Z.__webglFramebuffer=t.createFramebuffer();if(Ne)for(let xe=0,We=_e.length;xe<We;xe++){const Xe=i.get(_e[xe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),o.memory.textures++)}if(D.samples>0&&le(D)===!1){Z.__webglMultisampledFramebuffer=t.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let xe=0;xe<_e.length;xe++){const We=_e[xe];Z.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Z.__webglColorRenderbuffer[xe]);const Xe=s.convert(We.format,We.colorSpace),ye=s.convert(We.type),Te=x(We.internalFormat,Xe,ye,We.colorSpace,D.isXRRenderTarget===!0),it=Re(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,it,Te,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,Z.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=t.createRenderbuffer(),et(Z.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,fe.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,T);for(let xe=0;xe<6;xe++)if(T.mipmaps&&T.mipmaps.length>0)for(let We=0;We<T.mipmaps.length;We++)Ie(Z.__webglFramebuffer[xe][We],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We);else Ie(Z.__webglFramebuffer[xe],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(T)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let xe=0,We=_e.length;xe<We;xe++){const Xe=_e[xe],ye=i.get(Xe);let Te=t.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Te,ye.__webglTexture),Fe(Te,Xe),Ie(Z.__webglFramebuffer,D,Xe,t.COLOR_ATTACHMENT0+xe,Te,0),_(Xe)&&u(Te)}n.unbindTexture()}else{let xe=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(xe=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,fe.__webglTexture),Fe(xe,T),T.mipmaps&&T.mipmaps.length>0)for(let We=0;We<T.mipmaps.length;We++)Ie(Z.__webglFramebuffer[We],D,T,t.COLOR_ATTACHMENT0,xe,We);else Ie(Z.__webglFramebuffer,D,T,t.COLOR_ATTACHMENT0,xe,0);_(T)&&u(xe),n.unbindTexture()}D.depthBuffer&&pt(D)}function bt(D){const T=D.textures;for(let Z=0,fe=T.length;Z<fe;Z++){const _e=T[Z];if(_(_e)){const de=v(D),Ne=i.get(_e).__webglTexture;n.bindTexture(de,Ne),u(de),n.unbindTexture()}}}const st=[],Ge=[];function O(D){if(D.samples>0){if(le(D)===!1){const T=D.textures,Z=D.width,fe=D.height;let _e=t.COLOR_BUFFER_BIT;const de=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ne=i.get(D),xe=T.length>1;if(xe)for(let Xe=0;Xe<T.length;Xe++)n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const We=D.texture.mipmaps;We&&We.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Xe=0;Xe<T.length;Xe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=t.STENCIL_BUFFER_BIT)),xe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[Xe]);const ye=i.get(T[Xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ye,0)}t.blitFramebuffer(0,0,Z,fe,0,0,Z,fe,_e,t.NEAREST),l===!0&&(st.length=0,Ge.length=0,st.push(t.COLOR_ATTACHMENT0+Xe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(st.push(de),Ge.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let Xe=0;Xe<T.length;Xe++){n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Xe,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[Xe]);const ye=i.get(T[Xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Xe,t.TEXTURE_2D,ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Re(D){return Math.min(r.maxSamples,D.samples)}function le(D){const T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ue(D){const T=o.render.frame;d.get(D)!==T&&(d.set(D,T),D.update())}function Je(D,T){const Z=D.colorSpace,fe=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==Vo&&Z!==Br&&(Pt.getTransfer(Z)===Ht?(fe!==Vi||_e!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function tt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=V,this.setTexture2D=ce,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=U,this.rebindTextures=an,this.setupRenderTarget=k,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=le}function Z3(t,e){function n(i,r=Br){let s;const o=Pt.getTransfer(r);if(i===sr)return t.UNSIGNED_BYTE;if(i===Fp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Op)return t.UNSIGNED_SHORT_5_5_5_1;if(i===b_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===C_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===T_)return t.BYTE;if(i===A_)return t.SHORT;if(i===el)return t.UNSIGNED_SHORT;if(i===Up)return t.INT;if(i===Us)return t.UNSIGNED_INT;if(i===vr)return t.FLOAT;if(i===ul)return t.HALF_FLOAT;if(i===R_)return t.ALPHA;if(i===P_)return t.RGB;if(i===Vi)return t.RGBA;if(i===nl)return t.DEPTH_COMPONENT;if(i===il)return t.DEPTH_STENCIL;if(i===L_)return t.RED;if(i===kp)return t.RED_INTEGER;if(i===D_)return t.RG;if(i===zp)return t.RG_INTEGER;if(i===Bp)return t.RGBA_INTEGER;if(i===Sc||i===wc||i===Ec||i===Tc)if(o===Ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Sc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Sc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ah||i===lh||i===ch||i===uh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ah)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ch)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dh||i===fh||i===hh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===dh||i===fh)return o===Ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===hh)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ph||i===mh||i===gh||i===vh||i===_h||i===xh||i===yh||i===Mh||i===Sh||i===wh||i===Eh||i===Th||i===Ah||i===bh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ph)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mh)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gh)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vh)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_h)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xh)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yh)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mh)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sh)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wh)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eh)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Th)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ah)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bh)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ch||i===Rh||i===Ph)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ch)return o===Ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ph)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lh||i===Dh||i===Ih||i===Nh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ih)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Q3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eA=`
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

}`;class tA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new G_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ns({vertexShader:Q3,fragmentShader:eA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new K(new zi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nA extends Yo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,y=null;const w=typeof XRWebGLBinding<"u",_=new tA,u={},v=n.getContextAttributes();let x=null,S=null;const R=[],P=[],L=new Ke;let I=null;const E=new vi;E.viewport=new Vt;const M=new vi;M.viewport=new Vt;const N=[E,M],V=new S2;let Q=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let pe=R[B];return pe===void 0&&(pe=new kd,R[B]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(B){let pe=R[B];return pe===void 0&&(pe=new kd,R[B]=pe),pe.getGripSpace()},this.getHand=function(B){let pe=R[B];return pe===void 0&&(pe=new kd,R[B]=pe),pe.getHandSpace()};function ce(B){const pe=P.indexOf(B.inputSource);if(pe===-1)return;const Ie=R[pe];Ie!==void 0&&(Ie.update(B.inputSource,B.frame,c||o),Ie.dispatchEvent({type:B.type,data:B.inputSource}))}function H(){r.removeEventListener("select",ce),r.removeEventListener("selectstart",ce),r.removeEventListener("selectend",ce),r.removeEventListener("squeeze",ce),r.removeEventListener("squeezestart",ce),r.removeEventListener("squeezeend",ce),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",q);for(let B=0;B<R.length;B++){const pe=P[B];pe!==null&&(P[B]=null,R[B].disconnect(pe))}Q=null,ae=null,_.reset();for(const B in u)delete u[B];e.setRenderTarget(x),p=null,h=null,f=null,r=null,S=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&w&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",ce),r.addEventListener("selectstart",ce),r.addEventListener("selectend",ce),r.addEventListener("squeeze",ce),r.addEventListener("squeezestart",ce),r.addEventListener("squeezeend",ce),r.addEventListener("end",H),r.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(L),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,et=null,be=null;v.depth&&(be=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ie=v.stencil?il:nl,et=v.stencil?tl:Us);const pt={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(pt),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Fs(h.textureWidth,h.textureHeight,{format:Vi,type:sr,depthTexture:new V_(h.textureWidth,h.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Fs(p.framebufferWidth,p.framebufferHeight,{format:Vi,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(B){for(let pe=0;pe<B.removed.length;pe++){const Ie=B.removed[pe],et=P.indexOf(Ie);et>=0&&(P[et]=null,R[et].disconnect(Ie))}for(let pe=0;pe<B.added.length;pe++){const Ie=B.added[pe];let et=P.indexOf(Ie);if(et===-1){for(let pt=0;pt<R.length;pt++)if(pt>=P.length){P.push(Ie),et=pt;break}else if(P[pt]===null){P[pt]=Ie,et=pt;break}if(et===-1)break}const be=R[et];be&&be.connect(Ie)}}const U=new z,ee=new z;function re(B,pe,Ie){U.setFromMatrixPosition(pe.matrixWorld),ee.setFromMatrixPosition(Ie.matrixWorld);const et=U.distanceTo(ee),be=pe.projectionMatrix.elements,pt=Ie.projectionMatrix.elements,an=be[14]/(be[10]-1),k=be[14]/(be[10]+1),bt=(be[9]+1)/be[5],st=(be[9]-1)/be[5],Ge=(be[8]-1)/be[0],O=(pt[8]+1)/pt[0],Re=an*Ge,le=an*O,ue=et/(-Ge+O),Je=ue*-Ge;if(pe.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Je),B.translateZ(ue),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),be[10]===-1)B.projectionMatrix.copy(pe.projectionMatrix),B.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const tt=an+ue,D=k+ue,T=Re-Je,Z=le+(et-Je),fe=bt*k/D*tt,_e=st*k/D*tt;B.projectionMatrix.makePerspective(T,Z,fe,_e,tt,D),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Ee(B,pe){pe===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(pe.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let pe=B.near,Ie=B.far;_.texture!==null&&(_.depthNear>0&&(pe=_.depthNear),_.depthFar>0&&(Ie=_.depthFar)),V.near=M.near=E.near=pe,V.far=M.far=E.far=Ie,(Q!==V.near||ae!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),Q=V.near,ae=V.far),V.layers.mask=B.layers.mask|6,E.layers.mask=V.layers.mask&3,M.layers.mask=V.layers.mask&5;const et=B.parent,be=V.cameras;Ee(V,et);for(let pt=0;pt<be.length;pt++)Ee(be[pt],et);be.length===2?re(V,E,M):V.projectionMatrix.copy(E.projectionMatrix),Fe(B,V,et)};function Fe(B,pe,Ie){Ie===null?B.matrix.copy(pe.matrixWorld):(B.matrix.copy(Ie.matrixWorld),B.matrix.invert(),B.matrix.multiply(pe.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(pe.projectionMatrix),B.projectionMatrixInverse.copy(pe.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Uh*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(V)},this.getCameraTexture=function(B){return u[B]};let ct=null;function Pe(B,pe){if(d=pe.getViewerPose(c||o),y=pe,d!==null){const Ie=d.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let et=!1;Ie.length!==V.cameras.length&&(V.cameras.length=0,et=!0);for(let k=0;k<Ie.length;k++){const bt=Ie[k];let st=null;if(p!==null)st=p.getViewport(bt);else{const O=f.getViewSubImage(h,bt);st=O.viewport,k===0&&(e.setRenderTargetTextures(S,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(S))}let Ge=N[k];Ge===void 0&&(Ge=new vi,Ge.layers.enable(k),Ge.viewport=new Vt,N[k]=Ge),Ge.matrix.fromArray(bt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(bt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(st.x,st.y,st.width,st.height),k===0&&(V.matrix.copy(Ge.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),et===!0&&V.cameras.push(Ge)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){f=i.getBinding();const k=f.getDepthInformation(Ie[0]);k&&k.isValid&&k.texture&&_.init(k,r.renderState)}if(be&&be.includes("camera-access")&&w){e.state.unbindTexture(),f=i.getBinding();for(let k=0;k<Ie.length;k++){const bt=Ie[k].camera;if(bt){let st=u[bt];st||(st=new G_,u[bt]=st);const Ge=f.getCameraImage(bt);st.sourceTexture=Ge}}}}for(let Ie=0;Ie<R.length;Ie++){const et=P[Ie],be=R[Ie];et!==null&&be!==void 0&&be.update(et,pe,c||o)}ct&&ct(B,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),y=null}const oe=new $_;oe.setAnimationLoop(Pe),this.setAnimationLoop=function(B){ct=B},this.dispose=function(){}}}const ms=new Yi,iA=new $t;function rA(t,e){function n(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function i(_,u){u.color.getRGB(_.fogColor.value,z_(t)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function r(_,u,v,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(_,u):u.isMeshToonMaterial?(s(_,u),f(_,u)):u.isMeshPhongMaterial?(s(_,u),d(_,u)):u.isMeshStandardMaterial?(s(_,u),h(_,u),u.isMeshPhysicalMaterial&&p(_,u,S)):u.isMeshMatcapMaterial?(s(_,u),y(_,u)):u.isMeshDepthMaterial?s(_,u):u.isMeshDistanceMaterial?(s(_,u),w(_,u)):u.isMeshNormalMaterial?s(_,u):u.isLineBasicMaterial?(o(_,u),u.isLineDashedMaterial&&a(_,u)):u.isPointsMaterial?l(_,u,v,x):u.isSpriteMaterial?c(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,n(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===fi&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,n(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===fi&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,n(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,n(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const v=e.get(u),x=v.envMap,S=v.envMapRotation;x&&(_.envMap.value=x,ms.copy(S),ms.x*=-1,ms.y*=-1,ms.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),_.envMapRotation.value.setFromMatrix4(iA.makeRotationFromEuler(ms)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,_.aoMapTransform))}function o(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform))}function a(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function l(_,u,v,x){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*v,_.scale.value=x*.5,u.map&&(_.map.value=u.map,n(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function c(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function d(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function f(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function h(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function p(_,u,v){_.ior.value=u.ior,u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===fi&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,u){u.matcap&&(_.matcap.value=u.matcap)}function w(_,u){const v=e.get(u).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function c(v,x){let S=r[v.id];S===void 0&&(y(v),S=d(v),r[v.id]=S,v.addEventListener("dispose",_));const R=x.program;i.updateUBOMapping(v,R);const P=e.render.frame;s[v.id]!==P&&(h(v),s[v.id]=P)}function d(v){const x=f();v.__bindingPointIndex=x;const S=t.createBuffer(),R=v.__size,P=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],S=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let P=0,L=S.length;P<L;P++){const I=Array.isArray(S[P])?S[P]:[S[P]];for(let E=0,M=I.length;E<M;E++){const N=I[E];if(p(N,P,E,R)===!0){const V=N.__offset,Q=Array.isArray(N.value)?N.value:[N.value];let ae=0;for(let ce=0;ce<Q.length;ce++){const H=Q[ce],q=w(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,V+ae,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,ae),ae+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,x,S,R){const P=v.value,L=x+"_"+S;if(R[L]===void 0)return typeof P=="number"||typeof P=="boolean"?R[L]=P:R[L]=P.clone(),!0;{const I=R[L];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return R[L]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function y(v){const x=v.uniforms;let S=0;const R=16;for(let L=0,I=x.length;L<I;L++){const E=Array.isArray(x[L])?x[L]:[x[L]];for(let M=0,N=E.length;M<N;M++){const V=E[M],Q=Array.isArray(V.value)?V.value:[V.value];for(let ae=0,ce=Q.length;ae<ce;ae++){const H=Q[ae],q=w(H),U=S%R,ee=U%q.boundary,re=U+ee;S+=ee,re!==0&&R-re<q.storage&&(S+=R-re),V.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=q.storage}}}const P=S%R;return P>0&&(S+=R-P),v.__size=S,v.__cache={},this}function w(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function _(v){const x=v.target;x.removeEventListener("dispose",_);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class oA{constructor(e={}){const{canvas:n=AS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const y=new Uint32Array(4),w=new Int32Array(4);let _=null,u=null;const v=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let R=!1;this._outputColorSpace=Zn;let P=0,L=0,I=null,E=-1,M=null;const N=new Vt,V=new Vt;let Q=null;const ae=new _t(0);let ce=0,H=n.width,q=n.height,U=1,ee=null,re=null;const Ee=new Vt(0,0,H,q),Fe=new Vt(0,0,H,q);let ct=!1;const Pe=new jp;let oe=!1,B=!1;const pe=new $t,Ie=new z,et=new Vt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function an(){return I===null?U:1}let k=i;function bt(C,$){return n.getContext(C,$)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ip}`),n.addEventListener("webglcontextlost",Ce,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",Me,!1),k===null){const $="webgl2";if(k=bt($,C),k===null)throw bt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let st,Ge,O,Re,le,ue,Je,tt,D,T,Z,fe,_e,de,Ne,xe,We,Xe,ye,Te,it,Ye,Le,at;function X(){st=new gT(k),st.init(),Ye=new Z3(k,st),Ge=new cT(k,st,e,Ye),O=new K3(k,st),Ge.reversedDepthBuffer&&h&&O.buffers.depth.setReversed(!0),Re=new xT(k),le=new O3,ue=new J3(k,st,O,le,Ge,Ye,Re),Je=new dT(S),tt=new mT(S),D=new T2(k),Le=new aT(k,D),T=new vT(k,D,Re,Le),Z=new MT(k,T,D,Re),ye=new yT(k,Ge,ue),xe=new uT(le),fe=new F3(S,Je,tt,st,Ge,Le,xe),_e=new rA(S,le),de=new z3,Ne=new X3(st),Xe=new oT(S,Je,tt,O,Z,p,l),We=new q3(S,Z,Ge),at=new sA(k,Re,Ge,O),Te=new lT(k,st,Re),it=new _T(k,st,Re),Re.programs=fe.programs,S.capabilities=Ge,S.extensions=st,S.properties=le,S.renderLists=de,S.shadowMap=We,S.state=O,S.info=Re}X();const Ae=new nA(S,k);this.xr=Ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=st.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=st.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(C){C!==void 0&&(U=C,this.setSize(H,q,!1))},this.getSize=function(C){return C.set(H,q)},this.setSize=function(C,$,ne=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,q=$,n.width=Math.floor(C*U),n.height=Math.floor($*U),ne===!0&&(n.style.width=C+"px",n.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(H*U,q*U).floor()},this.setDrawingBufferSize=function(C,$,ne){H=C,q=$,U=ne,n.width=Math.floor(C*ne),n.height=Math.floor($*ne),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(Ee)},this.setViewport=function(C,$,ne,ie){C.isVector4?Ee.set(C.x,C.y,C.z,C.w):Ee.set(C,$,ne,ie),O.viewport(N.copy(Ee).multiplyScalar(U).round())},this.getScissor=function(C){return C.copy(Fe)},this.setScissor=function(C,$,ne,ie){C.isVector4?Fe.set(C.x,C.y,C.z,C.w):Fe.set(C,$,ne,ie),O.scissor(V.copy(Fe).multiplyScalar(U).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(C){O.setScissorTest(ct=C)},this.setOpaqueSort=function(C){ee=C},this.setTransparentSort=function(C){re=C},this.getClearColor=function(C){return C.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,ne=!0){let ie=0;if(C){let Y=!1;if(I!==null){const we=I.texture.format;Y=we===Bp||we===zp||we===kp}if(Y){const we=I.texture.type,De=we===sr||we===Us||we===el||we===tl||we===Fp||we===Op,Be=Xe.getClearColor(),Oe=Xe.getClearAlpha(),$e=Be.r,rt=Be.g,Ze=Be.b;De?(y[0]=$e,y[1]=rt,y[2]=Ze,y[3]=Oe,k.clearBufferuiv(k.COLOR,0,y)):(w[0]=$e,w[1]=rt,w[2]=Ze,w[3]=Oe,k.clearBufferiv(k.COLOR,0,w))}else ie|=k.COLOR_BUFFER_BIT}$&&(ie|=k.DEPTH_BUFFER_BIT),ne&&(ie|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),Xe.dispose(),de.dispose(),Ne.dispose(),le.dispose(),Je.dispose(),tt.dispose(),Z.dispose(),Le.dispose(),at.dispose(),fe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Yn),Ae.removeEventListener("sessionend",$o),Di.stop()};function Ce(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const C=Re.autoReset,$=We.enabled,ne=We.autoUpdate,ie=We.needsUpdate,Y=We.type;X(),Re.autoReset=C,We.enabled=$,We.autoUpdate=ne,We.needsUpdate=ie,We.type=Y}function Me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ge(C){const $=C.target;$.removeEventListener("dispose",ge),je($)}function je(C){ot(C),le.remove(C)}function ot(C){const $=le.get(C).programs;$!==void 0&&($.forEach(function(ne){fe.releaseProgram(ne)}),C.isShaderMaterial&&fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,ne,ie,Y,we){$===null&&($=be);const De=Y.isMesh&&Y.matrixWorld.determinant()<0,Be=ml(C,$,ne,ie,Y);O.setMaterial(ie,De);let Oe=ne.index,$e=1;if(ie.wireframe===!0){if(Oe=T.getWireframeAttribute(ne),Oe===void 0)return;$e=2}const rt=ne.drawRange,Ze=ne.attributes.position;let ft=rt.start*$e,It=(rt.start+rt.count)*$e;we!==null&&(ft=Math.max(ft,we.start*$e),It=Math.min(It,(we.start+we.count)*$e)),Oe!==null?(ft=Math.max(ft,0),It=Math.min(It,Oe.count)):Ze!=null&&(ft=Math.max(ft,0),It=Math.min(It,Ze.count));const jt=It-ft;if(jt<0||jt===1/0)return;Le.setup(Y,ie,Be,ne,Oe);let Ct,Nt=Te;if(Oe!==null&&(Ct=D.get(Oe),Nt=it,Nt.setIndex(Ct)),Y.isMesh)ie.wireframe===!0?(O.setLineWidth(ie.wireframeLinewidth*an()),Nt.setMode(k.LINES)):Nt.setMode(k.TRIANGLES);else if(Y.isLine){let Qe=ie.linewidth;Qe===void 0&&(Qe=1),O.setLineWidth(Qe*an()),Y.isLineSegments?Nt.setMode(k.LINES):Y.isLineLoop?Nt.setMode(k.LINE_LOOP):Nt.setMode(k.LINE_STRIP)}else Y.isPoints?Nt.setMode(k.POINTS):Y.isSprite&&Nt.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)rl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Qe=Y._multiDrawStarts,zt=Y._multiDrawCounts,mt=Y._multiDrawCount,On=Oe?D.get(Oe).bytesPerElement:1,br=le.get(ie).currentProgram.getUniforms();for(let qn=0;qn<mt;qn++)br.setValue(k,"_gl_DrawID",qn),Nt.render(Qe[qn]/On,zt[qn])}else if(Y.isInstancedMesh)Nt.renderInstances(ft,jt,Y.count);else if(ne.isInstancedBufferGeometry){const Qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,zt=Math.min(ne.instanceCount,Qe);Nt.renderInstances(ft,jt,zt)}else Nt.render(ft,jt)};function Ft(C,$,ne){C.transparent===!0&&C.side===bn&&C.forceSinglePass===!1?(C.side=fi,C.needsUpdate=!0,ii(C,$,ne),C.side=ts,C.needsUpdate=!0,ii(C,$,ne),C.side=bn):ii(C,$,ne)}this.compile=function(C,$,ne=null){ne===null&&(ne=C),u=Ne.get(ne),u.init($),x.push(u),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(u.pushLight(Y),Y.castShadow&&u.pushShadow(Y))}),C!==ne&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(u.pushLight(Y),Y.castShadow&&u.pushShadow(Y))}),u.setupLights();const ie=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const we=Y.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){const Be=we[De];Ft(Be,ne,Y),ie.add(Be)}else Ft(we,ne,Y),ie.add(we)}),u=x.pop(),ie},this.compileAsync=function(C,$,ne=null){const ie=this.compile(C,$,ne);return new Promise(Y=>{function we(){if(ie.forEach(function(De){le.get(De).currentProgram.isReady()&&ie.delete(De)}),ie.size===0){Y(C);return}setTimeout(we,10)}st.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let gt=null;function rn(C){gt&&gt(C)}function Yn(){Di.stop()}function $o(){Di.start()}const Di=new $_;Di.setAnimationLoop(rn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(C){gt=C,Ae.setAnimationLoop(C),C===null?Di.stop():Di.start()},Ae.addEventListener("sessionstart",Yn),Ae.addEventListener("sessionend",$o),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera($),$=Ae.getCamera()),C.isScene===!0&&C.onBeforeRender(S,C,$,I),u=Ne.get(C,x.length),u.init($),x.push(u),pe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Pe.setFromProjectionMatrix(pe,tr,$.reversedDepth),B=this.localClippingEnabled,oe=xe.init(this.clippingPlanes,B),_=de.get(C,v.length),_.init(),v.push(_),Ae.enabled===!0&&Ae.isPresenting===!0){const we=S.xr.getDepthSensingMesh();we!==null&&Bs(we,$,-1/0,S.sortObjects)}Bs(C,$,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(ee,re),pt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,pt&&Xe.addToRenderList(_,C),this.info.render.frame++,oe===!0&&xe.beginShadows();const ne=u.state.shadowsArray;We.render(ne,C,$),oe===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=_.opaque,Y=_.transmissive;if(u.setupLights(),$.isArrayCamera){const we=$.cameras;if(Y.length>0)for(let De=0,Be=we.length;De<Be;De++){const Oe=we[De];Hs(ie,Y,C,Oe)}pt&&Xe.render(C);for(let De=0,Be=we.length;De<Be;De++){const Oe=we[De];Ko(_,C,Oe,Oe.viewport)}}else Y.length>0&&Hs(ie,Y,C,$),pt&&Xe.render(C),Ko(_,C,$);I!==null&&L===0&&(ue.updateMultisampleRenderTarget(I),ue.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(S,C,$),Le.resetDefaultState(),E=-1,M=null,x.pop(),x.length>0?(u=x[x.length-1],oe===!0&&xe.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?_=v[v.length-1]:_=null};function Bs(C,$,ne,ie){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Pe.intersectsSprite(C)){ie&&et.setFromMatrixPosition(C.matrixWorld).applyMatrix4(pe);const De=Z.update(C),Be=C.material;Be.visible&&_.push(C,De,Be,ne,et.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Pe.intersectsObject(C))){const De=Z.update(C),Be=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),et.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),et.copy(De.boundingSphere.center)),et.applyMatrix4(C.matrixWorld).applyMatrix4(pe)),Array.isArray(Be)){const Oe=De.groups;for(let $e=0,rt=Oe.length;$e<rt;$e++){const Ze=Oe[$e],ft=Be[Ze.materialIndex];ft&&ft.visible&&_.push(C,De,ft,ne,et.z,Ze)}}else Be.visible&&_.push(C,De,Be,ne,et.z,null)}}const we=C.children;for(let De=0,Be=we.length;De<Be;De++)Bs(we[De],$,ne,ie)}function Ko(C,$,ne,ie){const Y=C.opaque,we=C.transmissive,De=C.transparent;u.setupLightsView(ne),oe===!0&&xe.setGlobalState(S.clippingPlanes,ne),ie&&O.viewport(N.copy(ie)),Y.length>0&&Vs(Y,$,ne),we.length>0&&Vs(we,$,ne),De.length>0&&Vs(De,$,ne),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Hs(C,$,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[ie.id]===void 0&&(u.state.transmissionRenderTarget[ie.id]=new Fs(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?ul:sr,minFilter:bs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const we=u.state.transmissionRenderTarget[ie.id],De=ie.viewport||N;we.setSize(De.z*S.transmissionResolutionScale,De.w*S.transmissionResolutionScale);const Be=S.getRenderTarget(),Oe=S.getActiveCubeFace(),$e=S.getActiveMipmapLevel();S.setRenderTarget(we),S.getClearColor(ae),ce=S.getClearAlpha(),ce<1&&S.setClearColor(16777215,.5),S.clear(),pt&&Xe.render(ne);const rt=S.toneMapping;S.toneMapping=Zr;const Ze=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),u.setupLightsView(ie),oe===!0&&xe.setGlobalState(S.clippingPlanes,ie),Vs(C,ne,ie),ue.updateMultisampleRenderTarget(we),ue.updateRenderTargetMipmap(we),st.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let It=0,jt=$.length;It<jt;It++){const Ct=$[It],Nt=Ct.object,Qe=Ct.geometry,zt=Ct.material,mt=Ct.group;if(zt.side===bn&&Nt.layers.test(ie.layers)){const On=zt.side;zt.side=fi,zt.needsUpdate=!0,Gs(Nt,ne,ie,Qe,zt,mt),zt.side=On,zt.needsUpdate=!0,ft=!0}}ft===!0&&(ue.updateMultisampleRenderTarget(we),ue.updateRenderTargetMipmap(we))}S.setRenderTarget(Be,Oe,$e),S.setClearColor(ae,ce),Ze!==void 0&&(ie.viewport=Ze),S.toneMapping=rt}function Vs(C,$,ne){const ie=$.isScene===!0?$.overrideMaterial:null;for(let Y=0,we=C.length;Y<we;Y++){const De=C[Y],Be=De.object,Oe=De.geometry,$e=De.group;let rt=De.material;rt.allowOverride===!0&&ie!==null&&(rt=ie),Be.layers.test(ne.layers)&&Gs(Be,$,ne,Oe,rt,$e)}}function Gs(C,$,ne,ie,Y,we){C.onBeforeRender(S,$,ne,ie,Y,we),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(S,$,ne,ie,C,we),Y.transparent===!0&&Y.side===bn&&Y.forceSinglePass===!1?(Y.side=fi,Y.needsUpdate=!0,S.renderBufferDirect(ne,$,ie,Y,C,we),Y.side=ts,Y.needsUpdate=!0,S.renderBufferDirect(ne,$,ie,Y,C,we),Y.side=bn):S.renderBufferDirect(ne,$,ie,Y,C,we),C.onAfterRender(S,$,ne,ie,Y,we)}function ii(C,$,ne){$.isScene!==!0&&($=be);const ie=le.get(C),Y=u.state.lights,we=u.state.shadowsArray,De=Y.state.version,Be=fe.getParameters(C,Y.state,we,$,ne),Oe=fe.getProgramCacheKey(Be);let $e=ie.programs;ie.environment=C.isMeshStandardMaterial?$.environment:null,ie.fog=$.fog,ie.envMap=(C.isMeshStandardMaterial?tt:Je).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",ge),$e=new Map,ie.programs=$e);let rt=$e.get(Oe);if(rt!==void 0){if(ie.currentProgram===rt&&ie.lightsStateVersion===De)return Jo(C,Be),rt}else Be.uniforms=fe.getUniforms(C),C.onBeforeCompile(Be,S),rt=fe.acquireProgram(Be,Oe),$e.set(Oe,rt),ie.uniforms=Be.uniforms;const Ze=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=xe.uniform),Jo(C,Be),ie.needsLights=Ar(C),ie.lightsStateVersion=De,ie.needsLights&&(Ze.ambientLightColor.value=Y.state.ambient,Ze.lightProbe.value=Y.state.probe,Ze.directionalLights.value=Y.state.directional,Ze.directionalLightShadows.value=Y.state.directionalShadow,Ze.spotLights.value=Y.state.spot,Ze.spotLightShadows.value=Y.state.spotShadow,Ze.rectAreaLights.value=Y.state.rectArea,Ze.ltc_1.value=Y.state.rectAreaLTC1,Ze.ltc_2.value=Y.state.rectAreaLTC2,Ze.pointLights.value=Y.state.point,Ze.pointLightShadows.value=Y.state.pointShadow,Ze.hemisphereLights.value=Y.state.hemi,Ze.directionalShadowMap.value=Y.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ze.spotShadowMap.value=Y.state.spotShadowMap,Ze.spotLightMatrix.value=Y.state.spotLightMatrix,Ze.spotLightMap.value=Y.state.spotLightMap,Ze.pointShadowMap.value=Y.state.pointShadowMap,Ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),ie.currentProgram=rt,ie.uniformsList=null,rt}function pl(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Ac.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function Jo(C,$){const ne=le.get(C);ne.outputColorSpace=$.outputColorSpace,ne.batching=$.batching,ne.batchingColor=$.batchingColor,ne.instancing=$.instancing,ne.instancingColor=$.instancingColor,ne.instancingMorph=$.instancingMorph,ne.skinning=$.skinning,ne.morphTargets=$.morphTargets,ne.morphNormals=$.morphNormals,ne.morphColors=$.morphColors,ne.morphTargetsCount=$.morphTargetsCount,ne.numClippingPlanes=$.numClippingPlanes,ne.numIntersection=$.numClipIntersection,ne.vertexAlphas=$.vertexAlphas,ne.vertexTangents=$.vertexTangents,ne.toneMapping=$.toneMapping}function ml(C,$,ne,ie,Y){$.isScene!==!0&&($=be),ue.resetTextureUnits();const we=$.fog,De=ie.isMeshStandardMaterial?$.environment:null,Be=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Vo,Oe=(ie.isMeshStandardMaterial?tt:Je).get(ie.envMap||De),$e=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,rt=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!ne.morphAttributes.position,ft=!!ne.morphAttributes.normal,It=!!ne.morphAttributes.color;let jt=Zr;ie.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(jt=S.toneMapping);const Ct=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Nt=Ct!==void 0?Ct.length:0,Qe=le.get(ie),zt=u.state.lights;if(oe===!0&&(B===!0||C!==M)){const Dn=C===M&&ie.id===E;xe.setState(ie,C,Dn)}let mt=!1;ie.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==zt.state.version||Qe.outputColorSpace!==Be||Y.isBatchedMesh&&Qe.batching===!1||!Y.isBatchedMesh&&Qe.batching===!0||Y.isBatchedMesh&&Qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Qe.instancing===!1||!Y.isInstancedMesh&&Qe.instancing===!0||Y.isSkinnedMesh&&Qe.skinning===!1||!Y.isSkinnedMesh&&Qe.skinning===!0||Y.isInstancedMesh&&Qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Qe.instancingMorph===!1&&Y.morphTexture!==null||Qe.envMap!==Oe||ie.fog===!0&&Qe.fog!==we||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==xe.numPlanes||Qe.numIntersection!==xe.numIntersection)||Qe.vertexAlphas!==$e||Qe.vertexTangents!==rt||Qe.morphTargets!==Ze||Qe.morphNormals!==ft||Qe.morphColors!==It||Qe.toneMapping!==jt||Qe.morphTargetsCount!==Nt)&&(mt=!0):(mt=!0,Qe.__version=ie.version);let On=Qe.currentProgram;mt===!0&&(On=ii(ie,$,Y));let br=!1,qn=!1,qi=!1;const Ot=On.getUniforms(),ri=Qe.uniforms;if(O.useProgram(On.program)&&(br=!0,qn=!0,qi=!0),ie.id!==E&&(E=ie.id,qn=!0),br||M!==C){O.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ot.setValue(k,"projectionMatrix",C.projectionMatrix),Ot.setValue(k,"viewMatrix",C.matrixWorldInverse);const kn=Ot.map.cameraPosition;kn!==void 0&&kn.setValue(k,Ie.setFromMatrixPosition(C.matrixWorld)),Ge.logarithmicDepthBuffer&&Ot.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ot.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,qn=!0,qi=!0)}if(Y.isSkinnedMesh){Ot.setOptional(k,Y,"bindMatrix"),Ot.setOptional(k,Y,"bindMatrixInverse");const Dn=Y.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),Ot.setValue(k,"boneTexture",Dn.boneTexture,ue))}Y.isBatchedMesh&&(Ot.setOptional(k,Y,"batchingTexture"),Ot.setValue(k,"batchingTexture",Y._matricesTexture,ue),Ot.setOptional(k,Y,"batchingIdTexture"),Ot.setValue(k,"batchingIdTexture",Y._indirectTexture,ue),Ot.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ot.setValue(k,"batchingColorTexture",Y._colorsTexture,ue));const Ln=ne.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&ye.update(Y,ne,On),(qn||Qe.receiveShadow!==Y.receiveShadow)&&(Qe.receiveShadow=Y.receiveShadow,Ot.setValue(k,"receiveShadow",Y.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(ri.envMap.value=Oe,ri.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&$.environment!==null&&(ri.envMapIntensity.value=$.environmentIntensity),qn&&(Ot.setValue(k,"toneMappingExposure",S.toneMappingExposure),Qe.needsLights&&Ws(ri,qi),we&&ie.fog===!0&&_e.refreshFogUniforms(ri,we),_e.refreshMaterialUniforms(ri,ie,U,q,u.state.transmissionRenderTarget[C.id]),Ac.upload(k,pl(Qe),ri,ue)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ac.upload(k,pl(Qe),ri,ue),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ot.setValue(k,"center",Y.center),Ot.setValue(k,"modelViewMatrix",Y.modelViewMatrix),Ot.setValue(k,"normalMatrix",Y.normalMatrix),Ot.setValue(k,"modelMatrix",Y.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Dn=ie.uniformsGroups;for(let kn=0,zn=Dn.length;kn<zn;kn++){const dn=Dn[kn];at.update(dn,On),at.bind(dn,On)}}return On}function Ws(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function Ar(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,$,ne){const ie=le.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),le.get(C.texture).__webglTexture=$,le.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ne,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const ne=le.get(C);ne.__webglFramebuffer=$,ne.__useDefaultFramebuffer=$===void 0};const gl=k.createFramebuffer();this.setRenderTarget=function(C,$=0,ne=0){I=C,P=$,L=ne;let ie=!0,Y=null,we=!1,De=!1;if(C){const Oe=le.get(C);if(Oe.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(k.FRAMEBUFFER,null),ie=!1;else if(Oe.__webglFramebuffer===void 0)ue.setupRenderTarget(C);else if(Oe.__hasExternalTextures)ue.rebindTextures(C,le.get(C.texture).__webglTexture,le.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ze=C.depthTexture;if(Oe.__boundDepthTexture!==Ze){if(Ze!==null&&le.has(Ze)&&(C.width!==Ze.image.width||C.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(De=!0);const rt=le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(rt[$])?Y=rt[$][ne]:Y=rt[$],we=!0):C.samples>0&&ue.useMultisampledRTT(C)===!1?Y=le.get(C).__webglMultisampledFramebuffer:Array.isArray(rt)?Y=rt[ne]:Y=rt,N.copy(C.viewport),V.copy(C.scissor),Q=C.scissorTest}else N.copy(Ee).multiplyScalar(U).floor(),V.copy(Fe).multiplyScalar(U).floor(),Q=ct;if(ne!==0&&(Y=gl),O.bindFramebuffer(k.FRAMEBUFFER,Y)&&ie&&O.drawBuffers(C,Y),O.viewport(N),O.scissor(V),O.setScissorTest(Q),we){const Oe=le.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+$,Oe.__webglTexture,ne)}else if(De){const Oe=$;for(let $e=0;$e<C.textures.length;$e++){const rt=le.get(C.textures[$e]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+$e,rt.__webglTexture,ne,Oe)}}else if(C!==null&&ne!==0){const Oe=le.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Oe.__webglTexture,ne)}E=-1},this.readRenderTargetPixels=function(C,$,ne,ie,Y,we,De,Be=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){O.bindFramebuffer(k.FRAMEBUFFER,Oe);try{const $e=C.textures[Be],rt=$e.format,Ze=$e.type;if(!Ge.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-ie&&ne>=0&&ne<=C.height-Y&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Be),k.readPixels($,ne,ie,Y,Ye.convert(rt),Ye.convert(Ze),we))}finally{const $e=I!==null?le.get(I).__webglFramebuffer:null;O.bindFramebuffer(k.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(C,$,ne,ie,Y,we,De,Be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe)if($>=0&&$<=C.width-ie&&ne>=0&&ne<=C.height-Y){O.bindFramebuffer(k.FRAMEBUFFER,Oe);const $e=C.textures[Be],rt=$e.format,Ze=$e.type;if(!Ge.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ft),k.bufferData(k.PIXEL_PACK_BUFFER,we.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Be),k.readPixels($,ne,ie,Y,Ye.convert(rt),Ye.convert(Ze),0);const It=I!==null?le.get(I).__webglFramebuffer:null;O.bindFramebuffer(k.FRAMEBUFFER,It);const jt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await bS(k,jt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ft),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,we),k.deleteBuffer(ft),k.deleteSync(jt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,ne=0){const ie=Math.pow(2,-ne),Y=Math.floor(C.image.width*ie),we=Math.floor(C.image.height*ie),De=$!==null?$.x:0,Be=$!==null?$.y:0;ue.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ne,0,0,De,Be,Y,we),O.unbindTexture()};const wi=k.createFramebuffer(),Zo=k.createFramebuffer();this.copyTextureToTexture=function(C,$,ne=null,ie=null,Y=0,we=null){we===null&&(Y!==0?(rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=Y,Y=0):we=0);let De,Be,Oe,$e,rt,Ze,ft,It,jt;const Ct=C.isCompressedTexture?C.mipmaps[we]:C.image;if(ne!==null)De=ne.max.x-ne.min.x,Be=ne.max.y-ne.min.y,Oe=ne.isBox3?ne.max.z-ne.min.z:1,$e=ne.min.x,rt=ne.min.y,Ze=ne.isBox3?ne.min.z:0;else{const Ln=Math.pow(2,-Y);De=Math.floor(Ct.width*Ln),Be=Math.floor(Ct.height*Ln),C.isDataArrayTexture?Oe=Ct.depth:C.isData3DTexture?Oe=Math.floor(Ct.depth*Ln):Oe=1,$e=0,rt=0,Ze=0}ie!==null?(ft=ie.x,It=ie.y,jt=ie.z):(ft=0,It=0,jt=0);const Nt=Ye.convert($.format),Qe=Ye.convert($.type);let zt;$.isData3DTexture?(ue.setTexture3D($,0),zt=k.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ue.setTexture2DArray($,0),zt=k.TEXTURE_2D_ARRAY):(ue.setTexture2D($,0),zt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,$.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,$.unpackAlignment);const mt=k.getParameter(k.UNPACK_ROW_LENGTH),On=k.getParameter(k.UNPACK_IMAGE_HEIGHT),br=k.getParameter(k.UNPACK_SKIP_PIXELS),qn=k.getParameter(k.UNPACK_SKIP_ROWS),qi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ct.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ct.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,$e),k.pixelStorei(k.UNPACK_SKIP_ROWS,rt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze);const Ot=C.isDataArrayTexture||C.isData3DTexture,ri=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const Ln=le.get(C),Dn=le.get($),kn=le.get(Ln.__renderTarget),zn=le.get(Dn.__renderTarget);O.bindFramebuffer(k.READ_FRAMEBUFFER,kn.__webglFramebuffer),O.bindFramebuffer(k.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let dn=0;dn<Oe;dn++)Ot&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,le.get(C).__webglTexture,Y,Ze+dn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,le.get($).__webglTexture,we,jt+dn)),k.blitFramebuffer($e,rt,De,Be,ft,It,De,Be,k.DEPTH_BUFFER_BIT,k.NEAREST);O.bindFramebuffer(k.READ_FRAMEBUFFER,null),O.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||le.has(C)){const Ln=le.get(C),Dn=le.get($);O.bindFramebuffer(k.READ_FRAMEBUFFER,wi),O.bindFramebuffer(k.DRAW_FRAMEBUFFER,Zo);for(let kn=0;kn<Oe;kn++)Ot?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ln.__webglTexture,Y,Ze+kn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ln.__webglTexture,Y),ri?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dn.__webglTexture,we,jt+kn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Dn.__webglTexture,we),Y!==0?k.blitFramebuffer($e,rt,De,Be,ft,It,De,Be,k.COLOR_BUFFER_BIT,k.NEAREST):ri?k.copyTexSubImage3D(zt,we,ft,It,jt+kn,$e,rt,De,Be):k.copyTexSubImage2D(zt,we,ft,It,$e,rt,De,Be);O.bindFramebuffer(k.READ_FRAMEBUFFER,null),O.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ri?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(zt,we,ft,It,jt,De,Be,Oe,Nt,Qe,Ct.data):$.isCompressedArrayTexture?k.compressedTexSubImage3D(zt,we,ft,It,jt,De,Be,Oe,Nt,Ct.data):k.texSubImage3D(zt,we,ft,It,jt,De,Be,Oe,Nt,Qe,Ct):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,we,ft,It,De,Be,Nt,Qe,Ct.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,we,ft,It,Ct.width,Ct.height,Nt,Ct.data):k.texSubImage2D(k.TEXTURE_2D,we,ft,It,De,Be,Nt,Qe,Ct);k.pixelStorei(k.UNPACK_ROW_LENGTH,mt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,On),k.pixelStorei(k.UNPACK_SKIP_PIXELS,br),k.pixelStorei(k.UNPACK_SKIP_ROWS,qn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,qi),we===0&&$.generateMipmaps&&k.generateMipmap(zt),O.unbindTexture()},this.initRenderTarget=function(C){le.get(C).__webglFramebuffer===void 0&&ue.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ue.setTextureCube(C,0):C.isData3DTexture?ue.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ue.setTexture2DArray(C,0):ue.setTexture2D(C,0),O.unbindTexture()},this.resetState=function(){P=0,L=0,I=null,O.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Pt._getUnpackColorSpace()}}var av;const Tt=(av=window.Telegram)==null?void 0:av.WebApp,iv="/yggdrasil-tma/",cc=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],aA=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],rv={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},sv=()=>{try{const t={...rv,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...rv,watch:Date.now()}}},xa=()=>new Date().toISOString().slice(0,10),lA=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",Zd=[3,5,8,12,18,25,40],cA=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],uA=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],Qd=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],ya={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},ov={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},ef={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},tf={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function Ur({name:t,className:e}){return W.jsx("img",{src:t.includes(".")?`${iv}img/${t}`:`${iv}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const dA=`
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
`,gs=(t,e=.9,n=0)=>new nt({color:t,roughness:e,metalness:n}),se=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function fA(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function hA(t){const e=new qe,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=gs(i,.92),c=gs(s,.9),d=gs(o,.96),f=gs(r,.95),h=gs(a,.78),p=gs(2106150,.98),y=new K(new Kn(.28,.24,5,8),d);y.position.y=.72,e.add(y);const w=new K(new Kn(n?.37:.32,.56,6,10),c);w.position.y=1.15,e.add(w);const _=new K(new Kn(n?.4:.34,.34,5,8),c);_.scale.z=.82,_.position.y=1.28,e.add(_);const u=new K(new yt(.36,.38,.09,12),d);u.position.y=.93,e.add(u);const v=new K(new yn(.12,.12,.055),h);v.position.set(0,.93,.38),e.add(v);const x=new K(new yt(.13,.15,.18,10),l);x.position.y=1.63,e.add(x);const S=new K(new wt(.31,16,12),l);S.scale.set(.92,1.06,.92),S.position.y=1.91,e.add(S);const R=new K(new wt(.325,14,10),f);R.scale.set(.98,.72,.98),R.position.set(0,2.08,-.025),e.add(R);const P=new K(new Kn(.18,.3,5,8),f);P.position.set(0,1.93,-.25),P.rotation.x=.15,e.add(P);const L=new K(new Wn(.045,.13,5),l);L.rotation.x=Math.PI/2,L.position.set(0,1.92,.3),e.add(L);const I=new nt({color:1513754,roughness:.55});for(const ee of[-.105,.105]){const re=new K(new wt(.025,7,5),I);re.position.set(ee,1.98,.285),e.add(re)}if(n){const ee=new K(new wt(.19,10,7),f);ee.scale.set(.82,1,.72),ee.position.set(0,1.8,.24),e.add(ee)}else{const ee=new K(new Kn(.055,.42,4,7),f);ee.position.set(-.27,1.78,-.08),ee.rotation.z=-.22,e.add(ee)}const E=ee=>{const re=new qe;re.position.set(ee*(n?.43:.39),1.43,0),re.rotation.z=ee*.07;const Ee=new K(new Kn(.105,.42,5,7),c);Ee.position.y=-.23,re.add(Ee);const Fe=new qe;Fe.position.y=-.46,re.add(Fe);const ct=new K(new Kn(.085,.34,5,7),d);ct.position.y=-.2,Fe.add(ct);const Pe=new K(new wt(.105,9,7),l);return Pe.position.y=-.43,Fe.add(Pe),e.add(re),{upper:re,elbow:Fe}},M=E(-1),N=E(1),V=ee=>{const re=new qe;re.position.set(ee*.15,.68,0);const Ee=new K(new Kn(.12,.42,5,7),p);Ee.position.y=-.23,re.add(Ee);const Fe=new qe;Fe.position.y=-.48,re.add(Fe);const ct=new K(new Kn(.095,.4,5,7),p);ct.position.y=-.22,Fe.add(ct);const Pe=new K(new Kn(.13,.24,5,7),d);return Pe.scale.z=1.25,Pe.position.set(0,-.47,.075),Fe.add(Pe),e.add(re),re},Q=V(-1),ae=V(1),ce=new K(new Kn(.42,.1,5,8),d);ce.scale.z=.72,ce.position.y=1.48,e.add(ce);const H=new K(new yn(.58,.92,.075),gs(t.id==="berserk"?2821132:1582894,.98));H.position.set(0,1.05,-.28),H.rotation.x=-.035,e.add(H);const q=new qe;if(t.id==="berserk"||t.id==="dwarf"){const ee=new K(new yt(.035,.045,.72,7),d);ee.position.y=.36,q.add(ee);const re=new K(new yn(.16,.34,.055),h);re.position.set(0,.88,0),re.rotation.z=t.id==="dwarf"?-.22:.22,q.add(re)}else{const ee=new K(new yt(.028,.04,1.1,7),d);ee.position.y=.52,q.add(ee);const re=new K(new Wn(.075,.25,6),h);re.position.y=1.18,q.add(re)}if(q.position.set(.43,.32,.03),q.rotation.z=-.12,e.add(q),t.id==="viking"||t.id==="berserk"){const ee=new K(new yt(.3,.3,.1,16),d);ee.rotation.x=Math.PI/2,ee.position.set(0,1.12,-.37),e.add(ee);const re=new K(new wt(.065,8,6),h);re.position.set(0,1.12,-.43),e.add(re)}const U=new K(new Ji(.62,24),new Ti({color:0,transparent:!0,opacity:.32}));return U.rotation.x=-Math.PI/2,U.position.y=.02,e.add(U),e.userData.anim={armL:M,armR:N,legL:Q,legR:ae,weapon:q,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0},fA(e)}function pA({h:t,on:e,eventDone:n}){const i=Mt.useRef(null),r=Mt.useRef(null),s=Mt.useRef(null),o=Mt.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=Mt.useState(""),[c,d]=Mt.useState(!1),[f,h]=Mt.useState(!1),[p,y]=Mt.useState(!1),[w,_]=Mt.useState(!1),u=Mt.useRef({x:0,z:1}),v=Mt.useRef(!1),x=Mt.useRef(null);Mt.useEffect(()=>{const E=i.current;if(!E)return;const M=new ZS;M.background=new _t(7309184),M.fog=new Xp(6123883,.0055);const N=new vi(54,1,.1,280);N.position.set(0,8.5,17);const V=new oA({antialias:!0,powerPreference:"high-performance"});V.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),V.shadowMap.enabled=!0,V.shadowMap.type=S_,V.outputColorSpace=Zn,V.toneMapping=w_,V.toneMappingExposure=1.08,E.appendChild(V.domElement);const Q=new x2(12442579,1976611,1.05);M.add(Q);const ae=new Rg(16768432,2.65);ae.position.set(-42,58,34),ae.castShadow=!0,ae.shadow.mapSize.set(1024,1024),ae.shadow.camera.left=-95,ae.shadow.camera.right=95,ae.shadow.camera.top=95,ae.shadow.camera.bottom=-95,ae.shadow.bias=-5e-4,M.add(ae);const ce=new Rg(10467501,.72);ce.position.set(55,18,-60),M.add(ce);const H=(g,A)=>{const m=Math.sin(g*.075)*.7+Math.cos(A*.062)*.55+Math.sin((g-A)*.045)*.35,b=Math.exp(-(g*g/850+(A+2)*(A+2)/1050)),G=Math.exp(-(g*g/150+(A-12)*(A-12)/2200));return m*(1-b*.88)-G*.18},q=g=>{const A=document.createElement("canvas");A.width=A.height=512;const m=A.getContext("2d"),b=F=>Math.abs(Math.sin(F*12.9898)*43758.5453)%1;if(g==="ground"){m.fillStyle="#3f4d38",m.fillRect(0,0,512,512);for(let F=0;F<1800;F++){const J=b(F*1.17)*512,te=b(F*2.31)*512,he=10+b(F*3.71)*28,j=b(F*4.13);m.fillStyle=j>.72?`rgba(96,108,63,${.08+b(F)*.12})`:`rgba(30,36,25,${.05+b(F)*.12})`,m.beginPath(),m.arc(J,te,he,0,Math.PI*2),m.fill()}for(let F=0;F<650;F++){const J=b(F*7.1)*512,te=b(F*8.2)*512;m.strokeStyle=`rgba(118,126,78,${.16+b(F*2)*.16})`,m.lineWidth=1+b(F*4)*1.5,m.beginPath(),m.moveTo(J,te),m.lineTo(J+(b(F*5)-.5)*5,te-3-b(F*6)*5),m.stroke()}}else if(g==="wood"){m.fillStyle="#5a3d29",m.fillRect(0,0,512,512);for(let F=0;F<512;F+=22)m.fillStyle=`rgba(25,15,9,${.18+b(F)*.13})`,m.fillRect(0,F,512,3),m.strokeStyle=`rgba(154,111,69,${.08+b(F*2)*.08})`,m.lineWidth=2,m.beginPath(),m.moveTo(0,F+7),m.bezierCurveTo(150,F+2,340,F+13,512,F+5),m.stroke();for(let F=0;F<65;F++){const J=b(F*2.1)*512;m.fillStyle=`rgba(20,12,8,${.12+b(F*3)*.16})`,m.fillRect(J,0,2+b(F*4)*3,512)}}else if(g==="roof"){m.fillStyle="#252522",m.fillRect(0,0,512,512);for(let F=-30;F<550;F+=25){m.fillStyle=`rgba(105,94,77,${.12+b(F)*.08})`,m.fillRect(0,F,512,2),m.strokeStyle="rgba(12,12,11,.48)",m.lineWidth=3;for(let J=-40;J<560;J+=38)m.beginPath(),m.moveTo(J,F),m.lineTo(J-18,F+28),m.stroke()}for(let F=0;F<180;F++)m.fillStyle=`rgba(170,154,123,${.03+b(F)*.07})`,m.fillRect(b(F*2)*512,b(F*3)*512,2+b(F*4)*7,2)}else if(g==="bark"){m.fillStyle="#7b5a3f",m.fillRect(0,0,512,512);for(let F=0;F<95;F++){const J=b(F*2.1)*512,te=2+b(F*3.7)*7;m.fillStyle=`rgba(${24+b(F)*24},${16+b(F*4)*18},${10+b(F*5)*14},${.18+b(F*6)*.22})`,m.fillRect(J,0,te,512)}for(let F=0;F<80;F++){const J=b(F*7.1)*512,te=b(F*8.2)*512;m.strokeStyle=`rgba(126,91,60,${.07+b(F*2)*.09})`,m.lineWidth=1+b(F*3)*2,m.beginPath(),m.moveTo(J,te),m.lineTo(J+(b(F*4)-.5)*12,te+18+b(F*5)*45),m.stroke()}}else if(g==="foliage"){m.fillStyle="#536b4b",m.fillRect(0,0,512,512);for(let F=0;F<1900;F++){const J=b(F*1.17)*512,te=b(F*2.31)*512,he=b(F*3.7),j=he>.72?76:he>.36?63:51,ve=he>.72?104:he>.36?87:70,me=he>.72?59:he>.36?49:40;m.fillStyle=`rgba(${j},${ve},${me},${.16+b(F*4)*.28})`,m.beginPath(),m.arc(J,te,1.5+b(F*5)*4.5,0,Math.PI*2),m.fill()}for(let F=0;F<260;F++){const J=b(F*9.1)*512,te=b(F*10.2)*512;m.strokeStyle=`rgba(18,31,22,${.08+b(F*3)*.12})`,m.lineWidth=1,m.beginPath(),m.moveTo(J,te),m.lineTo(J+(b(F*2)-.5)*10,te+(b(F*4)-.5)*10),m.stroke()}}else{m.fillStyle="#514333",m.fillRect(0,0,512,512);for(let F=0;F<1300;F++){const J=b(F*1.3)*512,te=b(F*2.7)*512;m.fillStyle=`rgba(${45+b(F*3)*38},${35+b(F*4)*28},${23+b(F*5)*20},${.08+b(F*6)*.18})`,m.fillRect(J,te,2+b(F*7)*7,1+b(F*8)*4)}}const G=new Eg(A);return G.wrapS=G.wrapT=Po,G.colorSpace=Zn,G.anisotropy=4,G},U=q("ground");U.repeat.set(5,6);const ee=q("bark");ee.wrapS=ee.wrapT=Po,ee.repeat.set(1.2,1.8);const re=q("foliage");re.wrapS=re.wrapT=Po,re.repeat.set(1.35,1.35);const Ee=new zi(190,190,62,62),Fe=Ee.attributes.position;for(let g=0;g<Fe.count;g++){const A=Fe.getX(g),m=-Fe.getY(g);Fe.setZ(g,H(A,m))}Ee.rotateX(-Math.PI/2),Ee.computeVertexNormals();const ct=new K(Ee,new sc({map:U}));ct.receiveShadow=!0,M.add(ct);const Pe=(g,A,m)=>(A&&(g.userData={id:A,label:m||A}),g.traverse(b=>{b.isMesh&&(b.castShadow=!0,b.receiveShadow=!0)}),M.add(g),A&&be.push(g),g),oe=(g,A=.9,m=0)=>new nt({color:g,roughness:A,metalness:m}),B=(g,A,m,b,G=.9)=>new K(new yn(g,A,m),oe(b,G)),pe=(g,A,m,b=10,G=.9)=>new K(new yt(g,g,A,b),oe(m,G)),Ie=(g,A,m)=>{const b=pe(A,g,m,10,.96);return b.rotation.z=Math.PI/2,b},et=(g,A,m)=>{const b=new qe,G=g*.62,F=.61,J=new nt({map:Xe,color:m,roughness:.96,side:bn}),te=new K(new yn(G,.18,A),J),he=te.clone();return te.rotation.z=F,he.rotation.z=-F,te.position.x=-g*.205,he.position.x=g*.205,b.add(te,he),b},be=[],pt=[],an=[],k=[],bt=[],st=.62,Ge=(g,A,m,b,G=0,F=.12)=>bt.push({kind:"rect",x:g,z:A,w:m+F*2,d:b+F*2,rot:G}),O=(g,A,m,b=.12)=>bt.push({kind:"circle",x:g,z:A,r:m+b}),Re=(g,A,m,b,G,F=.12)=>bt.push({kind:"segment",x1:g,z1:A,x2:m,z2:b,r:G+F}),le=(g,A,m)=>{if(m.kind==="circle")return Math.hypot(g-m.x,A-m.z)<m.r+st;if(m.kind==="rect"){const j=Math.cos(m.rot),ve=Math.sin(m.rot),me=g-m.x,Ve=A-m.z,lt=j*me-ve*Ve,St=ve*me+j*Ve,Rt=Math.max(-m.w/2,Math.min(m.w/2,lt)),ln=Math.max(-m.d/2,Math.min(m.d/2,St));return Math.hypot(lt-Rt,St-ln)<st}const b=m.x2-m.x1,G=m.z2-m.z1,F=b*b+G*G,J=F>0?Math.max(0,Math.min(1,((g-m.x1)*b+(A-m.z1)*G)/F)):0,te=m.x1+b*J,he=m.z1+G*J;return Math.hypot(g-te,A-he)<m.r+st},ue=(g,A)=>v.current?g<Tn-2.72||g>Tn+2.72||A<_n-2.05||A>_n+2.3:bt.some(m=>le(g,A,m)),Je=(g,A,m)=>{if(v.current){const F=Math.max(Tn-2.55,Math.min(Tn+2.55,A)),J=Math.max(_n-1.92,Math.min(_n+2.55,m));g.x=F,g.z=J;return}const b=Math.max(-88,Math.min(88,A)),G=Math.max(-89,Math.min(89,m));if(!ue(b,G)){g.x=b,g.z=G;return}ue(b,g.z)||(g.x=b),ue(g.x,G)||(g.z=G)},tt=oe(3425343,1);for(let g=0;g<22;g++){const A=new qe,m=-105+g*10,b=8+se(g,7)*9,G=new K(new Wn(b,18+se(g,8)*16,7),tt);G.position.y=8,A.add(G),A.position.set(m,-1,-94+se(g,9)*11),Pe(A)}const D=[];for(let g=0;g<=32;g++)D.push({z:-94+g*6,x:-57+Math.sin(g*.42)*4.2});const T=[],Z=[],fe=5.4;for(let g=0;g<D.length;g++){const A=D[g],m=D[Math.max(0,g-1)],b=D[Math.min(D.length-1,g+1)],G=b.x-m.x,F=b.z-m.z,J=Math.max(.001,Math.hypot(G,F)),te=-F/J,he=G/J,j=H(A.x,A.z)+.055;for(const ve of[-1,1]){const me=fe*ve;T.push(A.x+te*me,j+Math.sin(g*1.7+ve)*.035,A.z+he*me)}if(g<D.length-1){const ve=g*2;Z.push(ve,ve+1,ve+2,ve+1,ve+3,ve+2)}}const _e=new mn;_e.setAttribute("position",new Et(T,3)),_e.setIndex(Z),_e.computeVertexNormals();const de=new K(_e,new nt({color:3235689,roughness:.18,metalness:.08,transparent:!0,opacity:.88}));de.receiveShadow=!0,M.add(de);const Ne=[];for(let g=0;g<34;g++){const A=D[Math.min(D.length-1,Math.floor(g*.94))],m=.7+se(g,1500)*1.35,b=new K(new $p(m*.45,m,12),new Ti({color:10998996,transparent:!0,opacity:.12,side:bn}));b.rotation.x=-Math.PI/2,b.scale.y=.42,b.position.set(A.x+(se(g,1501)-.5)*4.5,H(A.x,A.z)+.075,A.z+(se(g,1502)-.5)*4),M.add(b),Ne.push({mesh:b,phase:se(g,1503)*Math.PI*2})}for(let g=0;g<52;g++){const A=Math.min(D.length-1,Math.floor(g*.62)),m=D[A],b=D[Math.max(0,A-1)],G=D[Math.min(D.length-1,A+1)],F=G.x-b.x,J=G.z-b.z,te=Math.max(.001,Math.hypot(F,J)),he=g%2===0?-1:1,j=.34+se(g,15)*.72,ve=fe+he*(.25+se(g,16)*1.4),me=new K(new hn(j,1),oe(6185562,1));me.position.set(m.x+-J/te*ve,H(m.x,m.z)+.18,m.z+F/te*ve),me.scale.y=.5+se(g,17)*.35,Pe(me),O(me.position.x,me.position.z,j*.75,.03)}const xe=(g,A)=>{const m=g.map(([te,he])=>new z(te,H(te,he)+.035,he)),b=[],G=[];for(let te=0;te<m.length;te++){const he=m[Math.max(0,te-1)],j=m[Math.min(m.length-1,te+1)],ve=j.x-he.x,me=j.z-he.z,Ve=Math.max(.001,Math.hypot(ve,me)),lt=-me/Ve,St=ve/Ve;if(b.push(m[te].x+lt*A/2,m[te].y,m[te].z+St*A/2,m[te].x-lt*A/2,m[te].y+.01,m[te].z-St*A/2),te<m.length-1){const Rt=te*2;G.push(Rt,Rt+1,Rt+2,Rt+1,Rt+3,Rt+2)}}const F=new mn;F.setAttribute("position",new Et(b,3)),F.setIndex(G),F.computeVertexNormals();const J=new K(F,new nt({map:q("road"),roughness:1}));J.receiveShadow=!0,M.add(J),[-A*.22,A*.22].forEach(te=>{const he=m.map((me,Ve)=>{const lt=m[Math.max(0,Ve-1)],St=m[Math.min(m.length-1,Ve+1)],Rt=St.x-lt.x,ln=St.z-lt.z,cn=Math.max(.001,Math.hypot(Rt,ln));return new z(me.x+-ln/cn*te,me.y+.045,me.z+Rt/cn*te)}),j=new Kp(new X_(he),Math.max(12,m.length*4),.055,5,!1),ve=new K(j,oe(3352863,1));ve.scale.y=.12,M.add(ve)})};xe([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),xe([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),xe([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),xe([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),xe([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),xe([[4,14],[-3,22],[-7,31],[-8,42]],3.8),xe([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),xe([[4,14],[10,28],[18,41],[27,57]],3.8),xe([[5,31],[15,45],[27,57],[39,70]],3.7),xe([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),xe([[-39,-8],[-47,-12],[-53,-15]],3.4);const We=q("wood");We.repeat.set(2,1);const Xe=q("roof");Xe.repeat.set(2,2);const ye=(g,A,m,b,G,F,J,te,he)=>{const j=new qe;j.rotation.y=G,j.position.set(g,H(g,A),A),j.userData={id:J,label:F};const ve=new nt({map:We,color:te,roughness:.94}),me=B(m+.7,.55,b+.7,5724755,1);me.position.y=.28,j.add(me);for(let Lt=0;Lt<7;Lt++){const Dt=.62+Lt*.47,sn=Ie(m-Lt%2*.2,.29,te);sn.material=ve,sn.position.set(0,Dt,b*.5-.03),j.add(sn);const In=sn.clone();In.position.z=-b*.5+.03,j.add(In);const si=Ie(b+.06,.29,te);si.material=ve,si.rotation.y=Math.PI/2,si.position.set(-m*.5+.03,Dt,0),j.add(si);const ke=si.clone();ke.position.x=m*.5-.03,j.add(ke)}for(const Lt of[-m*.5,m*.5])for(const Dt of[-b*.5,b*.5]){const sn=pe(.34,3.75,3482649,8,1);sn.position.set(Lt,2.05,Dt),j.add(sn)}const Ve=B(1.18,2.05,.18,2365458,1);Ve.position.set(0,1.37,b*.5+.31),j.add(Ve);for(const Lt of[-.67,.67]){const Dt=B(.15,2.28,.24,3811613,1);Dt.position.set(Lt,1.42,b*.5+.34),j.add(Dt)}const lt=Ie(1.65,.11,3679770);lt.position.set(0,2.53,b*.5+.34),j.add(lt);const St=pe(.055,.12,13015634,8,.55);St.rotation.z=Math.PI/2,St.position.set(.33,1.38,b*.5+.43),j.add(St);const Rt=new nt({color:14986840,emissive:10116382,emissiveIntensity:1.5,roughness:.45});for(const Lt of[-m*.27,m*.27]){const Dt=B(1.28,1.02,.13,3154457,1);Dt.position.set(Lt,2.02,b*.5+.29),j.add(Dt);const sn=B(.94,.7,.055,15251295,.45);sn.material=Rt,sn.position.set(Lt,2.02,b*.5+.36),j.add(sn);const In=B(.07,.78,.09,3154457,1);In.position.set(Lt,2.02,b*.5+.4),j.add(In);const si=B(1.05,.07,.09,3154457,1);si.position.set(Lt,2.02,b*.5+.4),j.add(si)}const ln=et(m+1.55,b+1.35,he);ln.position.y=4.18,j.add(ln);for(const Lt of[-1,1]){const Dt=Ie(b+1.48,.12,3154715);Dt.position.set(Lt*(m*.46),3.78,0),Dt.rotation.y=Math.PI/2,j.add(Dt)}const cn=Ie(b+1.45,.18,2760730);cn.rotation.y=Math.PI/2,cn.position.y=5.28,j.add(cn);const Ut=B(m*.34,.16,1.05,6439467,1);Ut.position.set(0,.64,b*.5+.66),j.add(Ut);for(const Lt of[-m*.16,m*.16]){const Dt=Ie(.85,.08,4796447);Dt.rotation.y=Math.PI/2,Dt.position.set(Lt,.83,b*.5+.95),j.add(Dt)}const Wt=pe(.34,2,5722958,8,1);Wt.position.set(m*.25,5.05,-b*.1),j.add(Wt);const Gt=B(.72,.14,.72,3157289,1);Gt.position.set(m*.25,6.08,-b*.1),j.add(Gt),Pe(j,J,F),be.push(j),Ge(g,A,m+.85,b+.85,G,.05)};ye(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),ye(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),ye(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),ye(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),ye(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),ye(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const Te=new qe;Te.position.set(-10,H(-10,-5),-5),Te.userData={id:"forge",label:"Кузница"};for(let g=0;g<7;g++){const A=.62+g*.47,m=Ie(9,.27,4401693);m.position.set(0,A,-2.85),Te.add(m);const b=Ie(6,.27,4401693);b.rotation.y=Math.PI/2,b.position.set(-4.35,A,0),Te.add(b)}for(const g of[-4.35,4.35]){const A=pe(.34,4,2825493,9,1);A.position.set(g,2,-2.85),Te.add(A)}const it=et(9.8,7,2433825);it.position.y=4.45,Te.add(it);const Ye=Ie(7.2,.18,2169366);Ye.rotation.y=Math.PI/2,Ye.position.y=5.42,Te.add(Ye);for(const g of[-3.7,3.7]){const A=Ie(4.7,.13,2825494);A.rotation.z=g<0?-.6:.6,A.position.set(g*.48,3.15,.1),Te.add(A)}const Le=pe(1.15,1.65,3420462,10,1);Le.position.set(-2,.83,1.15),Te.add(Le);const at=pe(.88,.35,2565925,10,1);at.position.set(-2,1.83,1.15),Te.add(at);const X=new K(new Ji(.52,16),new nt({color:16740390,emissive:16726536,emissiveIntensity:5,roughness:.4}));X.rotation.y=Math.PI,X.position.set(-2,1.02,2.23),Te.add(X);const Ae=pe(.27,.85,2697770,8,.45);Ae.position.set(1.15,.43,1.05),Te.add(Ae);const Ce=B(1.45,.34,.58,2435114,.38);Ce.position.set(1.15,1,1.05),Te.add(Ce);const ze=new K(new Wn(.18,.72,8),oe(2435114,.38,.05));ze.rotation.z=-Math.PI/2,ze.position.set(1.98,1,1.05),Te.add(ze);for(let g=0;g<4;g++){const A=Ie(1.25,.045,11184548);A.rotation.z=-.35+g*.18,A.position.set(2.05+g*.18,1.12,1.34),Te.add(A)}const Me=B(1.15,.42,.62,3876893,1);Me.position.set(2.15,.72,-.8),Me.rotation.z=-.18,Te.add(Me);const ge=pe(.07,.55,5980979,8,1);ge.rotation.z=Math.PI/2,ge.position.set(1.55,.84,-.8),Te.add(ge),Pe(Te,"forge","Кузница"),be.push(Te),Ge(-10,-5,9.6,6.6,0,.05);const je=new ao(16742962,3.4,14,2);je.position.set(-12,H(-12,-5)+2.2,-4),M.add(je);const ot=new K(new Ji(8.5,32),new nt({color:7035463,roughness:1}));ot.rotation.x=-Math.PI/2,ot.position.set(1,H(1,0)+.05,0),ot.receiveShadow=!0,M.add(ot);for(let g=0;g<18;g++){const A=g/18*Math.PI*2,m=new K(new hn(.38,1),oe(7039843,1));m.position.set(1+Math.cos(A)*8.8,H(1+Math.cos(A)*8.8,Math.sin(A)*8.8)+.22,Math.sin(A)*8.8),M.add(m)}const Ft=(g,A)=>{const m=new qe,b=B(2.8,.22,1,6832937,1);b.position.y=1.05,m.add(b);for(const G of[-1.05,1.05]){const F=B(.16,1,.16,3877149,1);F.position.set(G,.5,-.32),m.add(F);const J=F.clone();J.position.z=.32,m.add(J)}m.position.set(g,H(g,A),A),M.add(m)};Ft(-4,2),Ft(7,3);const gt=(g,A,m)=>{const b=new qe;b.position.set(g,H(g,A),A);for(let j=0;j<7;j++){const ve=j/7*Math.PI*2,me=new K(new hn(.32*m,1),oe(6117970,1));me.position.set(Math.cos(ve)*.7*m,.25*m,Math.sin(ve)*.7*m),b.add(me)}const G=B(.2*m,.2*m,1.5*m,4861211,1),F=G.clone();G.rotation.y=.55,F.rotation.y=-.55,G.position.y=F.position.y=.38*m,b.add(G,F);const J=new nt({color:16744744,emissive:16731402,emissiveIntensity:4}),te=new K(new Wn(.5*m,1.35*m,8),J);te.position.y=1.02*m,b.add(te),M.add(b);const he=new ao(16747068,2.4*m,12*m,2);return he.position.set(g,H(g,A)+2*m,A),M.add(he),pt.push({light:he,flame:te,phase:se(g,A)*8}),b};gt(1,0,1.15),gt(18,-15,.72);const rn=(g,A,m,b,G=1.25)=>{const F=new qe,J=m-g,te=b-A,he=Math.hypot(J,te),j=Math.max(1,Math.floor(he/1.55));for(let ve=0;ve<=j;ve++){const me=ve/j,Ve=g+J*me,lt=A+te*me,St=B(.18,G,.18,4796447,1);St.position.set(Ve,H(Ve,lt)+G/2,lt),F.add(St)}for(const ve of[-.28,.38]){const me=B(.14,.14,he,5978917,1);me.rotation.y=Math.atan2(J,te),me.position.set((g+m)/2,H((g+m)/2,(A+b)/2)+G*ve,(A+b)/2),F.add(me)}M.add(F),Re(g,A,m,b,.12,.02)},Yn=(g,A,m,b,G,F,J)=>{const te=new qe;te.position.set(g,H(g,A),A),te.rotation.y=G,te.userData={id:J,label:F};const he=B(m+.25,.35,b+.25,5591368,1);he.position.y=.18,te.add(he);const j=new K(new yn(m,2.5,b),new nt({map:We,color:6439983,roughness:1}));j.position.y=1.45,te.add(j);const ve=new K(new yn(m+.6,.18,b+.65),new nt({map:Xe,color:2696996,roughness:1}));ve.rotation.z=.55,ve.position.set(-.16,3,0),te.add(ve);const me=ve.clone();me.rotation.z=-.55,me.position.x=.16,te.add(me);const Ve=B(1.05,1.75,.12,2759700,1);Ve.position.set(0,1.05,b/2+.07),te.add(Ve),Pe(te,J,F),be.push(te),Ge(g,A,m+.55,b+.55,G,.04)},$o=(g,A,m=1)=>{const b=new qe;b.position.set(g,H(g,A),A);const G=new K(new yt(.65*m,.65*m,1.2*m,10),oe(9073729,1));G.rotation.z=Math.PI/2,G.position.y=.62*m,b.add(G);for(let F=0;F<3;F++){const J=new K(new Qt(.66*m,.025*m,5,18),oe(5851693,1));J.rotation.y=Math.PI/2,J.position.y=(.28+F*.34)*m,b.add(J)}Pe(b)},Di=(g,A,m)=>{const b=new qe;b.position.set(g,H(g,A),A),b.rotation.y=m;const G=B(2.8,.28,1.45,6636331,1);G.position.y=1,b.add(G);for(const J of[-1.15,1.15])for(const te of[-.55,.55]){const he=B(.16,1.15,.16,4401950,1);he.position.set(J,.55,te),b.add(he)}for(const J of[-1.15,1.15]){const te=new K(new yt(.5,.5,.18,14),oe(2696738,1));te.rotation.z=Math.PI/2,te.position.set(J,.52,-.92),b.add(te)}const F=B(.16,.16,2.4,4796447,1);F.rotation.x=Math.PI/2,F.position.set(0,.72,-2),b.add(F),Pe(b)},Bs=(g,A,m=0)=>{const b=new qe;b.position.set(g,H(g,A),A),b.rotation.y=m;const G=B(2.2,.16,.5,7359021,1);G.position.y=.85,b.add(G);for(const F of[-.78,.78]){const J=B(.12,.8,.12,4139549,1);J.position.set(F,.4,0),b.add(J)}Pe(b)},Ko=(g,A)=>{const m=new qe;m.position.set(g,H(g,A),A);for(let J=0;J<10;J++){const te=J/10*Math.PI*2,he=B(.45,.38,.38,6710621,1);he.position.set(Math.cos(te)*.95,.19,Math.sin(te)*.95),he.rotation.y=te,m.add(he)}const b=B(.16,2.2,.16,4861984,1),G=b.clone();b.position.set(-.9,1.2,0),G.position.set(.9,1.2,0),m.add(b,G);const F=B(2,.16,.16,3876891,1);F.position.y=2.25,m.add(F),Pe(m)};Yn(-19,31,8,5,.08,"Амбар","barn"),Yn(17,34,7,5,-.2,"Сарай","shed"),Yn(27,13,6,4,.45,"Склад рыбака","fishshed"),rn(-25,27,-13,27),rn(-25,27,-25,38),rn(-25,38,-14,38),rn(12,29,25,29),rn(25,29,25,40),rn(25,40,12,40),rn(29,-1,39,-1),rn(39,-1,39,10),rn(39,10,30,10);for(const g of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])$o(g[0],g[1],g[2]);Di(-17,24,.18),Di(29,-5,-.55),Bs(-20,23,.18),Bs(25,31,-.2),ye(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),ye(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),ye(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),ye(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),Ge(-31,8,7.8,5.8,.1,.04),Ge(-27,20,7.8,5.8,-.25,.04),Ge(31,18,7.8,5.8,.32,.04),Ge(20,24,7.8,5.8,-.12,.04);const Hs=(g,A,m)=>{const b=new qe;b.position.set(g,H(g,A),A),b.rotation.y=m;const G=B(3,.18,1.25,7357994,1);G.position.y=1.45,b.add(G);for(const J of[-1.25,1.25])for(const te of[-.48,.48]){const he=B(.13,1.45,.13,4270877,1);he.position.set(J,.72,te),b.add(he)}const F=new K(new Wn(1.65,2.5,4,1,!1,Math.PI/4),oe(4798510,1));F.scale.z=.55,F.position.y=2.15,b.add(F),Pe(b)};Hs(-5,-7,.12),Hs(8,-5,-.18),Hs(6,7,.5);for(const g of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])Ko(g[0],g[1]);const Vs=(g,A,m=1)=>{const b=new qe,G=H(g,A);for(let F=0;F<5;F++){const J=new K(new wt((.28+se(F,g)*.18)*m,8,6),oe(F%2?3494457:4284223,1));J.position.set((se(F,2)-.5)*.7*m,.28*m,(se(F,3)-.5)*.7*m),b.add(J)}b.position.set(g,G,A),Pe(b)};for(let g=0;g<48;g++){const A=se(g,501)*Math.PI*2,m=18+se(g,502)*39,b=Math.cos(A)*m,G=Math.sin(A)*m+4;Math.abs(b)<9&&Math.abs(G)<14||Vs(b,G,.65+se(g,503)*.75)}for(let g=0;g<34;g++){const A=-84+se(g,610)*168,m=-82+se(g,611)*164;if(Math.hypot(A,m-2)<24)continue;const b=.25+se(g,612)*.55,G=new K(new hn(b,1),oe(5725013,1));G.scale.y=.55,G.position.set(A,H(A,m)+b*.28,m),G.rotation.set(se(g,613),se(g,614),se(g,615)),Pe(G),O(A,m,b*.8,.03)}ye(-64,36,8,5,.12,"Старый дом","oldfarm",6505263,2828582),Yn(-58,42,6,4,-.12,"Старый амбар","oldbarn"),rn(-70,32,-60,32),rn(-70,32,-70,43),rn(-70,43,-61,43),$o(-67,39,.9),Di(-61,33,-.25),Ko(-57,34);const Gs=new qe;Gs.position.set(-63,H(-63,47),47);for(let g=0;g<6;g++){const A=B(10,.035,.12,4208682,1);A.position.set(0,.02,(g-2.5)*1.05),A.rotation.y=.06,Gs.add(A)}Pe(Gs);const ii=new qe;ii.position.set(39,H(39,70),70),ii.userData={id:"runefield",label:"Поле Рун"};const pl=oe(5593942,1),Jo=new nt({color:12163675,emissive:6833949,emissiveIntensity:1.6,roughness:.62});for(let g=0;g<11;g++){const A=se(g,1201)*Math.PI*2,m=3.5+se(g,1202)*8,b=new K(new hn(.65+se(g,1203)*.38,1),pl);b.scale.y=1.4+se(g,1204)*1.5,b.position.set(Math.cos(A)*m,b.scale.y*.48,Math.sin(A)*m),b.rotation.set(se(g,1205),A,se(g,1206)),ii.add(b);const G=new K(new yn(.11,.035,.72),Jo);G.position.set(b.position.x,b.position.y+.55,b.position.z),G.rotation.y=-A+.45,ii.add(G)}for(let g=0;g<5;g++){const A=B(.22,1.8,.22,4861984,1);A.position.set(-6+g*3,.9,7.5),ii.add(A);const m=new K(new Qt(.34,.035,6,18),Jo);m.rotation.x=Math.PI/2,m.position.set(-6+g*3,1.55,7.5),ii.add(m)}const ml=new qe;for(let g=0;g<7;g++){const A=g/7*Math.PI*2,m=new K(new hn(.3,1),oe(5591885,1));m.position.set(Math.cos(A)*.65,.22,Math.sin(A)*.65),ml.add(m)}ii.add(ml),Pe(ii,"runefield","Поле Рун"),be.push(ii),O(39,70,1,.08);const Ws=(g,A,m,b)=>{const G=new qe,F=m-g,J=b-A,te=Math.hypot(F,J),he=Math.floor(te/1.7);for(let ve=0;ve<=he;ve++){const me=ve/he,Ve=g+F*me,lt=A+J*me,St=new K(new Wn(.24,.24+2.8+se(ve,g)*.5,6),oe(3942940,1));St.position.set(Ve,H(Ve,lt)+1.45,lt),G.add(St)}const j=B(.3,.35,te,2957593,1);j.rotation.y=Math.atan2(F,J),j.position.set((g+m)/2,H((g+m)/2,(A+b)/2)+1.25,(A+b)/2),G.add(j),M.add(G),Re(g,A,m,b,.34,.08)};Ws(-30,-31,-8,-31),Ws(8,-31,30,-31),Ws(-30,-31,-30,-13),Ws(30,-31,30,16);const Ar=new qe;Ar.userData={id:"gate",label:"Ворота Мидгарда"};for(const g of[-4.2,4.2]){const A=B(.8,6,.8,3482906,1);A.position.set(g,3,-31),Ar.add(A)}const gl=B(10,.8,1,2957336,1);gl.position.set(0,6,-31),Ar.add(gl);for(let g=-3;g<=3;g++){const A=B(1,4.2,.22,5978660,1);A.position.set(g*1.15,2,-30.7),Ar.add(A)}Pe(Ar,"gate","Ворота Мидгарда"),be.push(Ar),O(-4.2,-31,.55,.05),O(4.2,-31,.55,.05);const wi=new qe;wi.userData={id:"mimir",label:"Колодец Мимира"},wi.position.set(18,H(18,15),15);for(let g=0;g<14;g++){const A=g/14*Math.PI*2,m=B(.7,.48,.5,6711907,1);m.position.set(Math.cos(A)*1.45,.24,Math.sin(A)*1.45),m.rotation.y=A+Math.PI/2,wi.add(m)}const Zo=new K(new Ji(1.05,28),new nt({color:1522499,emissive:733496,emissiveIntensity:1.8,roughness:.18}));Zo.rotation.x=-Math.PI/2,Zo.position.y=.5,wi.add(Zo);for(const g of[-1.35,1.35]){const A=B(.22,3,.22,4861984,1);A.position.set(g,1.55,0),wi.add(A)}const C=B(3.1,.25,.25,3679513,1);C.position.y=2.95,wi.add(C);const $=B(.55,.5,.55,5913383,1);$.position.set(0,1.65,0),wi.add($);const ne=new K(new Qt(1.8,.06,8,40),new nt({color:7792028,emissive:2653256,emissiveIntensity:3}));ne.rotation.x=Math.PI/2,ne.position.y=.53,wi.add(ne),Pe(wi,"mimir","Колодец Мимира"),be.push(wi),O(18,15,1.8,.08);const ie=new ao(7530656,1.8,10,2);ie.position.set(18,H(18,15)+1.4,15),M.add(ie);const Y=new qe;Y.userData={id:"norns",label:"Прядильня норн"},Y.position.set(-25,H(-25,43),43);for(let g=0;g<3;g++){const A=new K(new Kn(.65,2.3,5,8),oe(5725529,1));A.position.set((g-1)*2.2,1.35,0),A.rotation.z=(g-1)*.07,Y.add(A);const m=new K(new Qt(.42,.055,7,20),new nt({color:[13100495,13149416,14795380][g],emissive:[6134129,7490961,9268264][g],emissiveIntensity:2.2}));m.rotation.x=Math.PI/2,m.position.set((g-1)*2.2,1.6,-.55),Y.add(m)}const we=new Fh({color:13944039,transparent:!0,opacity:.78});for(let g=0;g<2;g++){const A=[new z((g-1)*2.2,2,.1),new z((g-.5)*2.2,4.1,-.7),new z(g*2.2,2,.1)];Y.add(new wg(new mn().setFromPoints(A),we))}const De=new K(new Qt(4.1,.07,8,48),new nt({color:12429522,emissive:6113136,emissiveIntensity:1.5}));De.rotation.x=Math.PI/2,De.position.y=.05,Y.add(De),Pe(Y,"norns","Прядильня норн"),be.push(Y),O(-25,43,3,.1);const Be=-43,Oe=62,$e=new qe;$e.userData={id:"ritual",label:"Круг Силы"},$e.position.set(Be,H(Be,Oe),Oe);const rt=oe(6711651,1),Ze=oe(5593685,1);for(let g=0;g<2;g++){const A=g===0?18:12,m=g===0?6.2:3.65;for(let b=0;b<A;b++){const G=b/A*Math.PI*2+g*.12,F=m+(se(b,930+g)*.5-.25),J=.42+se(b,940+g)*.48,te=new K(new hn(.55+se(b,950+g)*.28,1),g===0?rt:Ze);te.scale.y=.65+J*.35,te.position.set(Math.cos(G)*F,J*.45,Math.sin(G)*F),te.rotation.set(se(b,960+g),G+se(b,970+g),se(b,980+g)),$e.add(te)}}const ft=new K(new hn(1.05,1),oe(5593428,1));ft.scale.set(1.25,.62,1.05),ft.position.y=.5,$e.add(ft);for(const g of[2.1,3.15,5.15]){const A=new K(new Qt(g,.045,7,64),new nt({color:9219739,emissive:3496777,emissiveIntensity:1.4,transparent:!0,opacity:.72}));A.rotation.x=Math.PI/2,A.position.y=.055,$e.add(A)}const It=new nt({color:13215838,emissive:9199384,emissiveIntensity:2.2,roughness:.5});for(let g=0;g<8;g++){const A=g/8*Math.PI*2,m=new K(new yn(.13,.025,.65),It);m.position.set(Math.cos(A)*4.55,.075,Math.sin(A)*4.55),m.rotation.y=-A,$e.add(m)}Pe($e,"ritual","Круг Силы"),be.push($e),O(Be,Oe,1.25,.06);const jt=new ao(9226152,1.15,11,2);jt.position.set(Be,H(Be,Oe)+1.6,Oe),M.add(jt);const Ct=new qe;Ct.userData={id:"rune",label:"Древний камень Феху"},Ct.position.set(27,H(27,57),57);const Nt=new K(new hn(1.45,1),oe(5002063,1));Nt.position.y=1.2,Ct.add(Nt);const Qe=new K(new Qt(1.05,.07,8,30),new nt({color:16766826,emissive:10052371,emissiveIntensity:3}));Qe.rotation.x=Math.PI/2,Qe.position.y=1.2,Ct.add(Qe),Pe(Ct,"rune","Древний камень Феху"),be.push(Ct),O(27,57,1.7,.1);const zt=new qe;zt.userData={id:"port",label:"Мост к причалу"};for(let g=-5;g<=5;g++){const A=B(3.6,.28,.82,6307882,1);A.position.set(-53,H(-53,g*1)+.5,g),zt.add(A)}Pe(zt,"port","Мост к причалу"),be.push(zt);const mt=new qe;mt.position.set(-46,H(-46,-15),-15);for(let g=0;g<7;g++){const A=B(2.8,.24,.72,7030573,1);A.position.set(0,.3,g*.85),mt.add(A)}for(const g of[-1.2,1.2])for(let A=0;A<3;A++){const m=B(.22,1.5,.22,4139292,1);m.position.set(g,-.2,A*2.5),mt.add(m)}const On=B(2.2,.55,4.8,4926493,1);On.position.set(3,-.15,2.5),mt.add(On),Pe(mt,"port","Речной причал"),be.push(mt);const br=(g,A)=>{const m=new K(new yt(.5,.5,1,12),oe(6636332,1));m.position.set(g,H(g,A)+.5,A),M.add(m);for(const b of[.25,.76]){const G=new K(new Qt(.51,.045,6,18),oe(3156004,.7,.1));G.rotation.x=Math.PI/2,G.position.set(g,H(g,A)+b,A),M.add(G)}},qn=(g,A)=>{const m=B(1,.75,1,7359022,1);m.position.set(g,H(g,A)+.38,A),M.add(m);const b=B(.08,.82,1.05,3679770,1);b.position.set(g,H(g,A)+.38,A),M.add(b),Ge(g,A,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([g,A])=>br(g,A)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([g,A])=>qn(g,A));const qi=(g,A)=>{const m=document.createElement("canvas");m.width=m.height=256;const b=m.getContext("2d");b.clearRect(0,0,256,256),b.textAlign="center",b.textBaseline="middle",b.shadowColor=A,b.shadowBlur=18,b.fillStyle=A,b.font="bold 150px serif",b.fillText(g,128,132),b.shadowBlur=4,b.globalAlpha=.55,b.font="bold 118px serif",b.fillText(g,128,132);const G=new Eg(m);return G.colorSpace=Zn,G.anisotropy=4,G},Ot=(g,A,m,b,G,F=.72,J=0)=>{const te="#"+G.toString(16).padStart(6,"0"),he=new Ti({map:qi(b,te),transparent:!0,depthWrite:!1,side:bn}),j=new K(new zi(F,F),he);j.rotation.x=-Math.PI/2,j.rotation.z=J,j.position.set(A,.065,m),g.add(j)},ri=(g,A,m)=>{const b=new qe,G=H(g,A),F=new nt({map:ee,color:16777215,roughness:.98}),J=new K(new yt(.18*m,.38*m,5.2*m,9),F);J.position.y=2.6*m,J.rotation.z=(se(g,A)-.5)*.08,J.scale.x=1.08+se(g,A+4)*.22,b.add(J);for(let he=0;he<9;he++){const j=(1.15+he*.47)*m,ve=he%2?1:-1,me=(.9+he*.16)*m,Ve=new K(new yt(.035*m,.095*m,me,7),F);Ve.position.set(ve*(.28+he*.035)*m,j,(se(he,A)-.5)*.38*m),Ve.rotation.z=ve*(.62-se(he,g)*.18),Ve.rotation.y=se(he+21,A)*Math.PI*2,b.add(Ve)}const te=[1518881,2112296,2705457];for(let he=0;he<12;he++){const j=Math.max(.48,1.42-he*.075)*m,ve=new K(new wt(j,8,6),new nt({map:re,color:te[he%3],roughness:.99}));ve.scale.set(1+se(he,g)*.25,.55+se(he,A)*.16,.82+se(he*2,g)*.22),ve.position.set((se(he*4,g)-.5)*.58*m,(1.55+he*.37)*m,(se(he*5,A)-.5)*.55*m),b.add(ve)}for(let he=0;he<3;he++){const j=new K(new wt(.38*m,7,5),new nt({color:he%2?3231030:4021565,roughness:1}));j.scale.set(1.5,.28,.85),j.position.set((he-1)*.45*m,.55*m,(se(he,88)-.5)*.5*m),b.add(j)}b.position.set(g,G,A),Pe(b),m>=1.15&&O(g,A,.46*m,.04)},Ln=(g,A,m,b=!1)=>{const G=new qe,F=H(g,A),J=new nt({map:ee,color:16777215,roughness:1}),te=new K(new yt(.42*m,.72*m,6.4*m,11),J);te.position.y=3.2*m,te.rotation.z=(se(g,A)-.5)*.06,te.scale.x=1.08,G.add(te);for(let j=0;j<(b?9:7);j++){const ve=j/(b?9:7)*Math.PI*2+se(j,g)*.18,me=(1+se(j,A)*1.6)*m,Ve=new K(new yt(.11*m,.3*m,me,7),J);Ve.position.set(Math.cos(ve)*me*.42,.28*m,Math.sin(ve)*me*.42),Ve.rotation.z=Math.cos(ve)*.72,Ve.rotation.x=-Math.sin(ve)*.72,Ve.rotation.y=-ve,G.add(Ve)}const he=b?10:8;for(let j=0;j<he;j++){const ve=j/he*Math.PI*2+se(j+11,g)*.22,me=(2+se(j+22,A)*2.2)*m,Ve=new K(new yt(.07*m,.19*m,me,8),J);Ve.position.set(Math.cos(ve)*me*.34,(3.25+se(j+33,g)*1.9)*m,Math.sin(ve)*me*.34),Ve.rotation.z=Math.cos(ve)*.76,Ve.rotation.x=Math.sin(ve)*.76,Ve.rotation.y=-ve,G.add(Ve);for(let lt=0;lt<4;lt++){const St=new K(new wt((.46+se(lt+j,90)*.25)*m,8,6),new nt({map:re,color:[2377005,3234359,3958848][(j+lt)%3],roughness:1}));St.scale.y=.62,St.position.set(Math.cos(ve)*me*(.52+.09*lt)+(se(lt,j)-.5)*.55*m,(3.9+se(j,lt)*1.45+.25*lt)*m,Math.sin(ve)*me*(.52+.09*lt)+(se(lt+4,j)-.5)*.55*m),G.add(St)}}if(b){const j=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let ve=0;ve<j.length;ve++){const me=-.9+ve*.46,Ve=new K(new zi(.48*m,.62*m),new Ti({map:qi(j[ve],ve%2?"#6fd4e8":"#e6bd61"),transparent:!0,depthWrite:!1,side:bn}));Ve.position.set(Math.sin(me)*.56*m,(1.5+ve*.68)*m,Math.cos(me)*.6*m),Ve.rotation.y=me,G.add(Ve)}}G.position.set(g,F,A),Pe(G),m>=1.2&&O(g,A,.78*m,.05)},Dn=(g,A,m,b)=>{const G=new qe,F=new nt({color:7291688,roughness:.96}),J=new nt({color:9132599,roughness:.96}),te=new nt({color:3155230,roughness:1}),he=new nt({color:12168600,roughness:.9}),j=new nt({color:1512207,roughness:.25}),ve=new K(new wt(.68,14,10),F);ve.scale.set(1.35,.78,.72),ve.position.set(0,.98*m,0),ve.scale.multiplyScalar(m),G.add(ve);const me=new K(new wt(.42,12,9),J);me.scale.set(1,.9,.86),me.position.set(.49*m,1.04*m,0),G.add(me);const Ve=new K(new yt(.2*m,.34*m,.98*m,10),F);Ve.position.set(.5*m,1.46*m,0),Ve.rotation.z=-.3,G.add(Ve);const lt=new K(new wt(.34*m,12,9),J);lt.scale.set(1.18,.92,.78),lt.position.set(.86*m,1.82*m,0),G.add(lt);const St=new K(new wt(.17*m,10,7),J);St.scale.set(1.15,.72,.72),St.position.set(1.16*m,1.72*m,0),G.add(St);const Rt=new K(new wt(.075*m,8,6),te);Rt.scale.set(1,.72,.85),Rt.position.set(1.3*m,1.72*m,0),G.add(Rt);for(const Ut of[-1,1]){const Wt=new K(new Wn(.095*m,.3*m,7),J);Wt.position.set(.77*m,2.1*m,Ut*.2*m),Wt.rotation.z=-.28,Wt.rotation.x=Ut*.18,G.add(Wt)}for(const Ut of[-1,1]){const Wt=new K(new wt(.035*m,8,6),j);Wt.position.set(1.05*m,1.91*m,Ut*.235*m),G.add(Wt);const Gt=new K(new wt(.009*m,6,4),new Ti({color:16777215}));Gt.position.set(1.075*m,1.925*m,Ut*.257*m),G.add(Gt)}const ln=[];for(const Ut of[-1,1])for(const Wt of[-1,1]){const Gt=new qe;Gt.position.set(Wt*.43*m,.76*m,Ut*.34*m);const Lt=new K(new yt(.085*m,.11*m,.43*m,7),F);Lt.position.y=-.2*m,Gt.add(Lt);const Dt=new qe;Dt.position.y=-.4*m;const sn=new K(new yt(.055*m,.075*m,.43*m,7),te);sn.position.y=-.2*m,Dt.add(sn);const In=new K(new wt(.075*m,7,5),te);In.scale.set(1.15,.55,1.25),In.position.y=-.43*m,Dt.add(In),Gt.add(Dt),G.add(Gt),ln.push(Gt,Dt)}const cn=new K(new wt(.16*m,9,7),J);cn.scale.set(.75,1.25,.72),cn.position.set(-.9*m,1.18*m,0),G.add(cn);for(const Ut of[-1,1]){const Wt=new K(new yt(.04*m,.06*m,.68*m,7),he);Wt.position.set(.69*m,2.25*m,Ut*.14*m),Wt.rotation.z=Ut*.22,G.add(Wt);for(let Gt=0;Gt<3;Gt++){const Lt=new K(new yt(.02*m,.038*m,.34*m,6),he);Lt.position.set((.56+.11*Gt)*m,(2.48+.15*Gt)*m,Ut*(.14+.045*Gt)*m),Lt.rotation.z=Ut*(.55-.08*Gt),G.add(Lt)}}G.scale.setScalar(1.1),G.position.set(g,H(g,A),A),G.userData={phase:b,legJoints:ln},Pe(G),k.push({g:G,x:g,z:A,r:4+se(b,41)*3,speed:1.25+se(b,42)*.8,phase:b,kind:"deer"})},kn=(g,A)=>{const m=new qe,b=oe(6965552,1),G=oe(3089436,1),F=new K(new wt(.22,8,6),b);F.scale.set(1.35,.9,.9),F.position.y=.72,m.add(F);const J=new K(new wt(.17,8,6),b);J.position.set(.22,.86,0),m.add(J);for(const j of[-1,1]){const ve=new K(new Wn(.06,.18,6),b);ve.position.set(.17,.99,j*.09),m.add(ve)}const te=new K(new Qt(.24,.075,7,14,Math.PI*1.65),b);te.rotation.y=Math.PI/2,te.position.set(-.22,.91,0),m.add(te);const he=new K(new wt(.025,6,4),G);he.position.set(.35,.9,-.12),m.add(he),m.position.set(g,H(g,A),A),Pe(m,"ratatosk","Белка Рататоск"),be.push(m),O(g,A,.28,.02),k.push({g:m,x:g,z:A,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},zn=-4,dn=69,Mu=new qe;Mu.userData={id:"ashgrove",label:"Роща Ясеня"};const Su=new K(new Ji(10.5,40),new nt({color:2504747,roughness:1,transparent:!0,opacity:.82}));Su.rotation.x=-Math.PI/2,Su.position.set(zn,H(zn,dn)+.02,dn),M.add(Su);const ex=[[-6,1,1.7,!1],[-1,0,1.55,!1],[-8,5,1.45,!1],[2,5,1.45,!1],[-2,8,2.45,!0],[5,2,1.35,!1],[4,8,1.55,!1]];for(const[g,A,m,b]of ex)Ln(zn+g,dn+A,m,b);const wu=new K(new Qt(6.4,.07,8,64),new nt({color:7910560,emissive:2182205,emissiveIntensity:1.8,transparent:!0,opacity:.7}));wu.rotation.x=Math.PI/2,wu.position.set(zn,H(zn,dn)+.05,dn),M.add(wu);const Eu=new K(new hn(1.05,1),oe(5593941,1));Eu.scale.set(1.3,.7,1.05),Eu.position.set(zn,H(zn,dn)+.65,dn),M.add(Eu),Ot(Mu,0,0,"ᚱ",9430692,1.25,0);for(let g=0;g<26;g++){const A=se(g,1310)*Math.PI*2,m=2.5+se(g,1311)*7.2,b=zn+Math.cos(A)*m,G=dn+Math.sin(A)*m,F=new K(new yt(.025,.045,.22+se(g,1312)*.28,6),oe(12039579,1));F.position.set(b,H(b,G)+.12,G),M.add(F);const J=new K(new wt(.13+se(g,1313)*.08,8,5),new nt({color:9297872,emissive:3913642,emissiveIntensity:2.5,roughness:.6}));J.scale.y=.48,J.position.set(b,H(b,G)+.34,G),M.add(J)}for(let g=0;g<16;g++){const A=se(g,1320)*Math.PI*2,m=2+se(g,1321)*7.5,b=zn+Math.cos(A)*m,G=dn+Math.sin(A)*m,F=new K(new yt(.07,.07,.025,10),oe(9270341,.5,.55));F.rotation.x=Math.PI/2,F.position.set(b,H(b,G)+.05,G),M.add(F)}be.push(Mu),O(zn,dn,1,.08);const gn=61,vn=78,vl=new qe;vl.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const Tu=new K(new Ji(11.5,44),new nt({color:2112299,roughness:1,transparent:!0,opacity:.86}));Tu.rotation.x=-Math.PI/2,Tu.position.set(gn,H(gn,vn)+.025,vn),M.add(Tu);const Qp=new nt({map:ee,color:16777215,roughness:1}),Au=new K(new yt(1.35,2.1,10.5,13),Qp);Au.position.set(gn,H(gn,vn)+5.25,vn),Au.rotation.z=-.05,M.add(Au);for(let g=0;g<8;g++){const A=g/8*Math.PI*2+.2,m=5+se(g,1401)*4,b=new K(new yt(.25,.58,m,9),Qp);b.position.set(gn+Math.cos(A)*m*.36,H(gn,vn)+6.8+se(g,1402)*2.2,vn+Math.sin(A)*m*.36),b.rotation.z=Math.cos(A)*.8,b.rotation.x=Math.sin(A)*.8,b.rotation.y=-A,M.add(b);for(let G=0;G<4;G++){const F=new K(new wt(1+se(G+g,1403)*.55,9,6),new nt({map:re,color:[2312753,2972729,3697474][(g+G)%3],roughness:1}));F.scale.y=.65,F.position.set(gn+Math.cos(A)*m*(.48+.09*G)+(se(G,g)-.5)*1.1,H(gn,vn)+8+se(g,G)*3+G*.45,vn+Math.sin(A)*m*(.48+.09*G)+(se(G+5,g)-.5)*1.1),M.add(F)}}for(let g=0;g<9;g++){const A=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ","ᚷ","ᛏ","ᚢ"][g],m=qi(A,g%2?"#63d9ef":"#f0c65d"),b=new K(new zi(.7,.9),new Ti({map:m,transparent:!0,depthWrite:!1,side:bn}));b.position.set(gn+Math.sin(g*.63)*1.42,H(gn,vn)+1+g*.78,vn+Math.cos(g*.63)*1.42),b.rotation.y=Math.PI*.5-g*.16,M.add(b)}const bu=new K(new hn(1.35,1),oe(5199954,1));bu.scale.set(1.45,.7,1.15),bu.position.set(gn,H(gn,vn)+.75,vn+1.6),M.add(bu),gt(gn,vn+2.1,.72);const Cu=new K(new Qt(6.7,.06,8,64),new nt({color:9162705,emissive:2318178,emissiveIntensity:1.9,transparent:!0,opacity:.62}));Cu.rotation.x=Math.PI/2,Cu.position.set(gn,H(gn,vn)+.055,vn),M.add(Cu);for(let g=0;g<22;g++){const A=se(g,1410)*Math.PI*2,m=1.8+se(g,1411)*8.2,b=gn+Math.cos(A)*m,G=vn+Math.sin(A)*m;Ot(vl,b-gn,G-vn,["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ"][g%6],g%2?6804447:14726490,.35,se(g,1412)*Math.PI)}for(let g=0;g<18;g++){const A=["ᚱ","ᚨ","ᛟ","ᚦ"][g%4],m=qi(A,g%2?"#63d9ef":"#e4bd65"),b=new K(new zi(.34,.44),new Ti({map:m,transparent:!0,depthWrite:!1,side:bn}));b.position.set(gn+(se(g,1420)-.5)*12,1.4+se(g,1421)*7,vn+(se(g,1422)-.5)*12),b.userData.floatPhase=se(g,1423)*6,M.add(b)}Pe(vl,"hoddmimir","Лес Ходдмимира"),be.push(vl),O(gn,vn,1.2,.08);const Qo=30,ea=53;for(let g=0;g<4;g++)Dn(Qo+(g-1.5)*2.6,ea+(g%2?2.6:-2.6),1.12+se(g,1440)*.16,10+g);const em=new K(new hn(.72,1),oe(5725526,1));em.position.set(Qo,H(Qo,ea)+.5,ea),M.add(em);const Ru=new K(new Qt(5.8,.045,7,48),new nt({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));Ru.rotation.x=Math.PI/2,Ru.position.set(Qo,H(Qo,ea)+.035,ea),M.add(Ru),kn(zn+5,dn+1);const _l=12,xl=49,Xs=new qe;Xs.position.set(_l,H(_l,xl),xl);const Pu=new K(new hn(1.05,1),oe(5133648,1));Pu.position.y=.85,Pu.scale.y=1.55,Xs.add(Pu);const Lu=new K(new Qt(2.7,.055,7,48),new nt({color:10259632,emissive:4929114,emissiveIntensity:1.8,transparent:!0,opacity:.78}));Lu.rotation.x=Math.PI/2,Lu.position.y=.06,Xs.add(Lu);const tx=new Fh({color:14207464,transparent:!0,opacity:.72});for(let g=0;g<3;g++){const A=[new z((g-1)*.72,.95,.15),new z((g-1)*1.25,2.9,-.35+Math.sin(g)*.25),new z((g-1)*1.75,.5,.9)];Xs.add(new wg(new mn().setFromPoints(A),tx))}for(let g=0;g<7;g++){const A=new K(new hn(.11,0),oe(6708050,1)),m=-1+g*.32;A.position.set(-1.7+m*.95,.06,-1.6+g*.46),A.scale.set(1.6,.35,.8),Xs.add(A)}Pe(Xs,"forestEvent","Камень Трёх Нитей"),O(_l,xl,1.15,.08);const Du=(g,A,m,b,G,F,J)=>{const te=new qe;te.position.set(g,H(g,A),A);const he=new K(new hn(.78+J*.08,1),oe(F,1));he.position.y=.58+J*.08,he.scale.y=1.35,te.add(he);const j=new K(new Qt(2+J*.18,.045,7,40),new nt({color:G,emissive:G,emissiveIntensity:1.25,transparent:!0,opacity:.62}));j.rotation.x=Math.PI/2,j.position.y=.045,te.add(j);for(let ve=0;ve<3+J;ve++){const me=new K(new hn(.12,0),oe(7827558,1)),Ve=ve/(3+J)*Math.PI*2;me.position.set(Math.cos(Ve)*(1.15+J*.12),.08,Math.sin(Ve)*(1.15+J*.12)),me.scale.y=.45,te.add(me)}Pe(te,m,b),be.push(te),O(g,A,.9,.08)};Du(-15,58,"forestCache","Забытый тайник",11701074,4931637,2),Du(46,43,"forestWhisper","Камень Шёпота",7902629,4541773,3),Du(-48,72,"forestThread","Разорванная нить",10252688,5326925,2);const nx=(g,A,m,b,G)=>{const F=g.distanceTo(A),J=new K(new yn(m,b,F),G);return J.position.copy(g).add(A).multiplyScalar(.5),J.lookAt(A),J},Iu=(g,A,m,b,G,F,J)=>{const te=new K(new hn(G,1),oe(F,1));return te.scale.set(.72+se(J,1)*.62,.55+se(J,2)*.85,.68+se(J,3)*.55),te.rotation.set(se(J,4)*1.2,se(J,5)*Math.PI,se(J,6)*1.1),te.position.set(A,m,b),g.add(te),te},ix=(g,A)=>{const m=new qe;m.position.set(g,H(g,A),A),m.userData={id:"fallenAsh",label:"Поверженный ясень"};const b=new K(new Qt(7.8,.07,8,64),new nt({color:9150343,emissive:3360307,emissiveIntensity:1,transparent:!0,opacity:.55}));b.rotation.x=Math.PI/2,b.position.y=.05,m.add(b);const G=new nt({map:ee,color:16777215,roughness:1}),F=new K(new yt(1.45,2.15,4.8,10),G);F.position.set(0,2.4,.2),F.rotation.z=-.04,m.add(F);const J=new K(new wt(.88,12,9),new Ti({color:1185043}));J.scale.set(1,.95,.55),J.position.set(0,1.75,1.72),m.add(J);for(let he=0;he<7;he++){const j=-.9+he*.3,ve=2.5+se(he,1500)*2.7,me=new K(new yt(.11,.28,ve,7),G);me.position.set(Math.sin(j)*ve*.34,4+se(he,1501)*2.8,.15+Math.cos(j)*ve*.3),me.rotation.z=Math.sin(j)*.65,me.rotation.x=-Math.cos(j)*.55,me.rotation.y=j,m.add(me)}for(let he=0;he<9;he++){const j=se(he,1510)*Math.PI*2,ve=1.7+se(he,1511)*5.6;Iu(m,Math.cos(j)*ve,.22,Math.sin(j)*ve,.3+se(he,1512)*.45,he%3?5265490:6251613,1513+he)}for(let he=0;he<8;he++)Ot(m,(se(he,1520)-.5)*5.8,(se(he,1521)-.5)*5.8,["ᚦ","ᛉ","ᚱ","ᛟ"][he%4],10473668,.42,se(he,1522)*Math.PI);const te=new K(new wt(.45,10,7),oe(5978919,1));te.scale.set(.9,1.2,.7),te.position.set(0,1.55,1.25),m.add(te),Pe(m,"fallenAsh","Поверженный ясень"),be.push(m),O(g,A,1.8,.08)},rx=(g,A)=>{const m=new qe;m.position.set(g,H(g,A),A),m.userData={id:"hunterCamp",label:"Забытая стоянка"};const b=new K(new Ji(8.7,40),new nt({color:3225644,roughness:1,transparent:!0,opacity:.78}));b.rotation.x=-Math.PI/2,b.position.y=.025,b.scale.set(1.18,.92,1),m.add(b);const G=new qe;G.position.set(-1.45,.05,-.65),G.rotation.y=-.34,m.add(G);const F=oe(5978920,1);oe(3680030,1);const J=oe(2697768,.82,.35),te=oe(4412730,1),he=B(3.7,.26,1.65,6308141,1);he.position.y=1.05,he.rotation.z=-.08,G.add(he);for(let ke=0;ke<9;ke++){const ut=B(2.8+se(ke,501)*1.1,.16,.26,ke%3?6505775:4928293,1);ut.position.set(-.25+(se(ke,502)-.5)*.25,1.18+(se(ke,503)-.5)*.34,-.72+ke%3*.68),ut.rotation.z=(se(ke,504)-.5)*.16,ut.rotation.y=(se(ke,505)-.5)*.16,G.add(ut)}for(const[ke,ut,Bt]of[[-1.55,-.83,.82],[1.35,-.83,.74]]){const xn=new K(new Qt(Bt,.14,7,20,Math.PI*1.56),J);xn.rotation.y=Math.PI/2,xn.rotation.z=Bt>.8?.08:-.18,xn.position.set(ke,.9,ut),G.add(xn);const hi=new K(new yt(.15,.18,.28,8),J);hi.rotation.z=Math.PI/2,hi.position.set(ke,.9,ut),G.add(hi);for(let cs=0;cs<6;cs++){const Hm=cs/6*Math.PI*2+.25,fx=new z(ke+Math.cos(Hm)*Bt*.82,.9+Math.sin(Hm)*Bt*.82,ut+.02),hx=new z(ke,.9,ut+.02);G.add(nx(hx,fx,.065,.065,J))}}const j=new K(new yn(3.8,.14,.16),J);j.position.set(0,.62,-.83),j.rotation.z=.08,G.add(j);const ve=new K(new yn(.16,.18,3.2),F);ve.position.set(1.8,.8,-.35),ve.rotation.y=.9,G.add(ve);for(let ke=0;ke<6;ke++){const ut=new K(new wt(.28+se(ke,507)*.18,7,5),te);ut.scale.set(1.4,.32,.7),ut.position.set(-1.1+ke*.48,1.34+ke%2*.05,-.82),G.add(ut)}const me=new qe;me.position.set(2.85,.02,1.15),me.rotation.y=.18,m.add(me),oe(4861985,1);for(let ke=0;ke<4;ke++){const ut=ke/4*Math.PI*2+.25,Bt=B(.11,3.7,.11,4861985,1);Bt.position.set(Math.cos(ut)*1.25,1.65,Math.sin(ut)*1.25),Bt.rotation.z=Math.cos(ut)*.34,Bt.rotation.x=-Math.sin(ut)*.34,me.add(Bt)}const Ve=new K(new Wn(2,3.2,4,1,!0),new nt({color:4862247,roughness:1,side:bn,transparent:!0,opacity:.94}));Ve.position.y=1.45,Ve.scale.set(1,.9,.82),Ve.rotation.y=.78,me.add(Ve);for(let ke=0;ke<9;ke++){const ut=new K(new wt(.16+se(ke,509)*.14,6,5),te);ut.scale.set(1.5,.35,.8),ut.position.set((se(ke,510)-.5)*2.4,1+se(ke,511)*1.9,(se(ke,512)-.5)*1.8),me.add(ut)}const lt=B(1.05,1.55,.05,3088668,1);lt.position.set(0,.72,1.65),lt.rotation.y=.16,me.add(lt),gt(g+.1,A+.45,.78);const St=new ao(16751173,1,8,2);St.position.set(.1,1.7,.45),m.add(St);const Rt=new qe;Rt.position.set(-3.15,.5,1.25),Rt.rotation.y=.8,Rt.rotation.z=-.22,m.add(Rt);const ln=new K(new Ji(1.05,16),new nt({color:3882041,roughness:.85,metalness:.55,side:bn}));ln.rotation.x=-Math.PI/2,ln.scale.y=.8,Rt.add(ln);const cn=new K(new Qt(1.03,.11,7,18),J);cn.rotation.x=-Math.PI/2,cn.scale.y=.8,Rt.add(cn);const Ut=new K(new yt(.24,.31,.22,8),J);Ut.rotation.x=Math.PI/2,Ut.position.set(.18,0,.08),Rt.add(Ut);const Wt=B(.05,.035,1.15,1513494,1);Wt.position.set(-.28,.025,.05),Wt.rotation.y=.42,Rt.add(Wt),oe(2960425,.65,.45);const Gt=(ke,ut,Bt)=>{const xn=new qe;xn.position.set(ke,.18,ut),xn.rotation.y=Bt;const hi=B(.09,.09,1.55,5059362,1);hi.rotation.x=Math.PI/2,hi.position.z=.15,xn.add(hi);const cs=B(.55,.13,.28,3158061,.55);cs.position.set(0,.02,-.62),cs.rotation.y=-.25,xn.add(cs),m.add(xn)};Gt(-1.9,3.15,.45),Gt(4.15,-.65,-.8);const Lt=B(.11,.11,.95,5388068,1);Lt.rotation.y=.55,Lt.position.set(-2.1,.16,2.65),m.add(Lt);const Dt=new K(new wt(.48,9,7),new nt({color:5978919,roughness:1}));Dt.scale.set(.9,1.15,.65),Dt.position.set(3.55,.48,2.65),m.add(Dt);const sn=new K(new Qt(.33,.035,6,18,Math.PI*1.5),oe(3023129,1));sn.rotation.x=Math.PI/2,sn.position.set(3.55,.93,2.65),m.add(sn);for(let ke=0;ke<15;ke++){const ut=new K(new yt(.09,.09,.025,10),new nt({color:9335877,metalness:.55,roughness:.45})),Bt=se(ke,520)*Math.PI*2,xn=2.1+se(ke,521)*3.7;ut.position.set(Math.cos(Bt)*xn,.13,Math.sin(Bt)*xn),ut.rotation.x=Math.PI/2,m.add(ut)}for(let ke=0;ke<5;ke++){const ut=B(.08,.08,.9,11182733,1);ut.position.set(3.2+se(ke,522)*2.4,.18,-2.7+se(ke,523)*1.7),ut.rotation.y=se(ke,524)*Math.PI,ut.rotation.z=(se(ke,525)-.5)*.25,m.add(ut)}const In=new K(new Qt(4.7,.055,7,64),new Ti({color:9160135,transparent:!0,opacity:.5}));In.rotation.x=Math.PI/2,In.position.y=.075,m.add(In);const si=["ᚠ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ"];si.forEach((ke,ut)=>{const Bt=ut/si.length*Math.PI*2;Ot(m,Math.cos(Bt)*4.15,Math.sin(Bt)*4.15,ke,ut%3===0?13215066:7977149,.55,Bt+.3)});for(let ke=0;ke<18;ke++)Iu(m,(se(ke,530)-.5)*8,.18,(se(ke,531)-.5)*7,.22+se(ke,532)*.34,ke%4===0?6121048:5133389,530+ke);for(let ke=0;ke<12;ke++){const ut=B(.12,.12,1.7+se(ke,535)*2,3811872,1);ut.position.set((se(ke,536)-.5)*8,.11,(se(ke,537)-.5)*8),ut.rotation.y=se(ke,538)*Math.PI,ut.rotation.z=(se(ke,539)-.5)*.2,m.add(ut)}Pe(m,"hunterCamp","Забытая стоянка"),be.push(m),O(g,A,1.9,.1)},sx=(g,A,m,b,G,F)=>{const J=new qe;J.position.set(g,H(g,A),A);const te=7442040,he=oe(4412730,1),j=new K(new Qt(m,.07,8,64),new nt({color:te,emissive:te,emissiveIntensity:.65,transparent:!0,opacity:.42}));j.rotation.x=Math.PI/2,j.position.y=.045,J.add(j);const ve=Math.floor(m/1.7);for(let me=0;me<ve;me++){const Ve=se(me,g*11+A)*Math.PI*2,lt=m*.35+se(me,A*17)*m*.45;Iu(J,Math.cos(Ve)*lt,.2,Math.sin(Ve)*lt,.34+se(me,33)*.32,5266514,800+me)}{for(let me=0;me<8;me++){const Ve=new K(new wt(.34+se(me,600)*.25,7,5),he);Ve.scale.y=.35,Ve.position.set((se(me,601)-.5)*m,.16,(se(me,602)-.5)*m),J.add(Ve)}for(let me=0;me<6;me++)Ot(J,(se(me,603)-.5)*m*.9,(se(me,604)-.5)*m*.9,["ᛉ","ᚱ","ᚦ","ᚨ","ᛟ","ᚠ"][me],7907492,.42,se(me,605)*Math.PI)}Pe(J,b,G),be.push(J)};rx(70,18),sx(67,49,9.5,"deepGrove","Глубокая роща"),ix(52,7);const Tn=75,_n=30,Kt=new qe;Kt.position.set(Tn,H(Tn,_n),_n);const ox=oe(5986899,1),tm=B(7.8,.42,5.8,5591885,1);tm.position.y=.22,Kt.add(tm);const nm=B(7.4,2.8,.3,6439727,1);nm.position.set(0,1.4,-2.7),Kt.add(nm);const im=B(.3,2.8,5.4,6439727,1);im.position.set(-3.7,1.4,0),Kt.add(im);const rm=B(.3,2.8,5.4,6439727,1);rm.position.set(3.7,1.4,0),Kt.add(rm);const sm=B(2.55,2.8,.3,6439727,1);sm.position.set(-2.43,1.4,2.7),Kt.add(sm);const om=B(2.55,2.8,.3,6439727,1);om.position.set(2.43,1.4,2.7),Kt.add(om);const am=B(2.3,.72,.3,6439727,1);am.position.set(0,2.44,2.7),Kt.add(am);const lm=B(.16,2.18,.34,2826523,1);lm.position.set(-.66,1.28,2.72),Kt.add(lm);const cm=B(.16,2.18,.34,2826523,1);cm.position.set(.66,1.28,2.72),Kt.add(cm);const um=B(1.48,.16,.34,2826523,1);um.position.set(0,2.34,2.72),Kt.add(um);const js=new qe;js.position.set(-.57,0,2.72),Kt.add(js);const dm=B(1.14,2.05,.12,3154457,1);dm.position.set(.57,1.28,0),js.add(dm);const fm=new K(new wt(.08,8,6),oe(11831883,1));fm.position.set(.86,1.25,.1),js.add(fm);const ax=new nt({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const g of[-2.35,2.35]){const A=B(1.25,1,.12,2826523,1);A.position.set(g,1.72,2.78),Kt.add(A);const m=new K(new yn(.98,.72,.06),ax);m.position.set(g,1.72,2.86),Kt.add(m);const b=B(.07,.78,.1,2826523,1);b.position.set(g,1.72,2.91),Kt.add(b);const G=B(1.08,.07,.1,2826523,1);G.position.set(g,1.72,2.91),Kt.add(G)}const hm=new nt({map:Xe,color:2697767,roughness:.98,side:bn}),ta=new K(new zi(4.25,6.25),hm),na=new K(new zi(4.25,6.25),hm);ta.rotation.x=Math.PI/2,na.rotation.x=Math.PI/2,ta.rotation.z=.62,na.rotation.z=-.62,ta.position.set(-1.02,3.95,0),na.position.set(1.02,3.95,0),Kt.add(ta,na);const Nu=B(.22,.22,6.45,2695965,1);Nu.position.y=4.75,Kt.add(Nu);const Uu=new K(new yn(.48,1.35,.48),ox);Uu.position.set(1.55,4.8,-.65),Kt.add(Uu);const Fu=B(.62,.1,.62,3420461,1);Fu.position.set(1.55,5.48,-.65),Kt.add(Fu);const pm=B(2.35,.18,1,6636845,1);pm.position.set(0,.62,3.15),Kt.add(pm);const mm=B(1.55,.16,.48,5849131,1);mm.position.set(0,.3,3.58),Kt.add(mm),Pe(Kt,"heroHome","Домик героя"),be.push(Kt),Ge(Tn,_n-2.72,7.4,.3,0,.05),Ge(Tn-3.72,_n,.3,5.45,0,.05),Ge(Tn+3.72,_n,.3,5.45,0,.05),Ge(Tn-2.43,_n+2.72,2.55,.3,0,.05),Ge(Tn+2.43,_n+2.72,2.55,.3,0,.05);const Zt=new qe;Zt.position.set(Tn,H(Tn,_n),_n),Zt.visible=!1;const gm=B(7,.16,5,4928548,1);gm.position.y=.5,Zt.add(gm);const vm=B(7,2.65,.18,4139808,1);vm.position.set(0,1.8,-2.45),Zt.add(vm);const _m=B(.18,2.65,4.9,4139808,1);_m.position.set(-3.45,1.8,0),Zt.add(_m);const xm=B(.18,2.65,4.9,4139808,1);xm.position.set(3.45,1.8,0),Zt.add(xm);const ym=B(2.35,2.65,.18,4139808,1);ym.position.set(-2.42,1.8,2.45),Zt.add(ym);const Mm=B(2.35,2.65,.18,4139808,1);Mm.position.set(2.42,1.8,2.45),Zt.add(Mm);const Sm=B(2.5,.04,2.1,7162673,1);Sm.position.set(-.15,.6,.25),Zt.add(Sm);const wm=B(1.65,.65,2.15,4008478,1);wm.position.set(-2.15,.88,-1.25),Zt.add(wm);const Em=B(1.48,.12,1.35,7033152,1);Em.position.set(-2.15,1.27,-.92),Zt.add(Em);const Tm=B(1.28,.18,.46,11903114,1);Tm.position.set(-2.15,1.38,-1.95),Zt.add(Tm);const Am=B(1.65,.12,1.05,5255969,1);Am.position.set(.85,1.15,-.15),Zt.add(Am);for(const[g,A]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const m=B(.1,.7,.1,3679515,1);m.position.set(g,.72,A),Zt.add(m)}const bm=B(1.25,.8,.72,5978660,1);bm.position.set(2.1,.95,-1.7),Zt.add(bm);const Cm=B(1.9,.14,.45,5978660,1);Cm.position.set(1.35,2,-2.25),Zt.add(Cm);for(const g of[.75,1.35,1.95]){const A=new K(new yt(.08,.1,.35,8),oe(7304016,1));A.position.set(g,2.24,-2.22),Zt.add(A)}const Rm=B(1.35,.55,.7,5920078,1);Rm.position.set(2.15,.78,.95),Zt.add(Rm);const Pm=new K(new Wn(.28,.72,8),new nt({color:16744744,emissive:16731402,emissiveIntensity:4}));Pm.position.set(2.15,1.42,.95),Zt.add(Pm);const Lm=new ao(16747068,2.2,8,2);Lm.position.set(2.15,1.7,.95),Zt.add(Lm),Pe(Zt,"heroHomeInterior","Дом героя — внутри"),be.push(Zt);const os=new qe;os.position.set(Tn,H(Tn,_n),_n);const Ou=new K(new Qt(6.2,.055,7,48),new nt({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));Ou.rotation.x=Math.PI/2,Ou.position.y=.035,os.add(Ou);for(const[g,A]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const m=B(.18,1,.18,4797735,1);m.position.set(g,.5,A),os.add(m)}for(const g of[-2.4,2.9]){const A=B(10.2,.12,.12,6308139,1);A.position.set(0,.59,g),os.add(A)}const lx=oe(6906972,1);for(let g=0;g<7;g++){const A=new K(new yt(.32,.4,.12,7),lx);A.position.set(0,.08,4.1+g*.72),A.rotation.y=g*.4,os.add(A)}gt(Tn-2.4,_n+4.8,.48).scale.setScalar(.72),Pe(os,"heroHomeYard","Двор домика героя"),be.push(os),gt(70,18,.75).scale.setScalar(.72);const Dm=new K(new yt(.65,.8,.7,7),oe(5327426,1));Dm.position.set(70,H(70,18)+.35,16.5),M.add(Dm);for(const[g,A]of[[68,20],[72,20],[68,16],[72,16]]){const m=B(.16,1.15,.16,4797735,1);m.position.set(g,H(g,A)+.57,A),M.add(m)}const yl=new qe;yl.position.set(52,H(52,7),7);const ku=new K(new yt(.5,.62,7,8),new sc({map:ee,color:4995371}));ku.rotation.z=Math.PI/2,ku.position.y=.5,yl.add(ku);const zu=new K(new yt(.53,.53,.12,12),oe(7693389,1));zu.rotation.z=Math.PI/2,zu.position.set(3.5,.5,0),yl.add(zu),M.add(yl);for(let g=0;g<7;g++){const A=new K(new hn(.14,0),oe(6913394,1)),m=g/7*Math.PI*2;A.position.set(67+Math.cos(m)*4,.12+H(67+Math.cos(m)*4,49+Math.sin(m)*4),49+Math.sin(m)*4),M.add(A)}for(let g=0;g<95;g++){const A=se(g,77)*Math.PI*2,m=58+se(g,91)*32,b=Math.cos(A)*m,G=Math.sin(A)*m+2,J=[[zn,dn,11],[39,70,13],[-64,36,11],[-43,62,10],[30,53,12],[61,78,10],[-15,58,7],[46,43,7],[-48,72,7],[70,18,11],[75,30,13],[67,49,12],[52,7,10]].some(([te,he,j])=>Math.hypot(b-te,G-he)<j);Math.abs(b+57)>9&&!J&&ri(b,G,.78+se(g,13)*.82)}Ln(-10,18,1.55,!1),Ln(13,24,1.7,!1),Ln(-31,-12,2.15,!0);for(let g=0;g<110;g++){const A=se(g,701)*Math.PI*2,m=15+se(g,702)*50,b=Math.cos(A)*m,G=Math.sin(A)*m+3;if(Math.abs(b)<10&&Math.abs(G)<16)continue;const F=new qe;F.position.set(b,H(b,G),G);for(let J=0;J<3;J++){const te=new K(new Wn(.025,.38+se(J,g)*.28,4),new sc({color:J===1?5466175:4282935}));te.position.set((J-1)*.09,.18,(se(J*3,g)-.5)*.12),te.rotation.z=(J-1)*.22,F.add(te)}M.add(F)}for(let g=0;g<80;g++){const A=-88+se(g,101)*176,m=-88+se(g,111)*176;if(Math.hypot(A,m+2)>30){const b=new K(new Wn(.08,.55+se(g,121)*.7,5),new sc({color:4941888}));b.position.set(A,H(A,m)+.3,m),M.add(b)}}const as=new qe;as.position.set(29,H(29,25),25),as.userData={id:"tower",label:"Сторожевая башня"};for(const g of[-2,2])for(const A of[-2,2]){const m=B(.35,7,.35,3942685,1);m.position.set(g,3.5,A),as.add(m)}const Im=B(5,.35,5,6833965,1);Im.position.y=5.8,as.add(Im);const Nm=new K(new Wn(3.8,2.7,4),oe(2696482,1));Nm.position.y=8,as.add(Nm),Pe(as,"tower","Сторожевая башня"),be.push(as),Ge(29,25,4.8,4.8,0,.08);const ia=(g,A,m,b,G,F)=>{const J=new qe;J.userData={id:m,label:b,phase:F,baseX:g,baseZ:A};const te=new K(new Kn(.32,.78,4,8),oe(G,.9));te.position.y=.85,J.add(te);const he=new K(new wt(.25,12,8),oe(13210736,.9));he.position.y=1.58,J.add(he);const j=B(.7,.9,.15,2565407,1);j.position.set(0,.82,-.27),J.add(j),J.position.set(g,H(g,A),A),Pe(J,m,b),be.push(J),an.push(J)};ia(9,-8,"elder","Старейшина",7558719,.4),ia(-6,-3,"blacksmith","Кузнец",6044459,1.5),ia(21,1,"hunter","Охотник",4215359,2.4),ia(5,10,"villager","Житель Мидгарда",5858125,3.4),ia(-16,4,"villager2","Житель деревни",6638394,4.2);const cx=new Ti({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),Bu=new qe;for(let g=0;g<34;g++){const A=new K(new wt(.9+se(g,810)*2.2,8,6),cx);A.position.set(-88+se(g,811)*176,1.8+se(g,812)*2.2,-72+se(g,813)*144),Bu.add(A)}M.add(Bu);const ls=hA(t);M.add(ls);const or=ls.userData.anim,Um=new w2,Hu=new Ke,Fm=g=>{var b,G,F,J;if((G=(b=g.target)==null?void 0:b.closest)!=null&&G.call(b,".mid3d-ui"))return;const A=V.domElement.getBoundingClientRect();Hu.x=(g.clientX-A.left)/A.width*2-1,Hu.y=-((g.clientY-A.top)/A.height)*2+1,Um.setFromCamera(Hu,N);const m=Um.intersectObjects(be,!0)[0];if(m){let te=m.object;for(;te.parent&&!((F=te.userData)!=null&&F.id);)te=te.parent;(J=te.userData)!=null&&J.id&&e(te.userData.id)}};V.domElement.addEventListener("pointerup",Fm);const ux=g=>{v.current=g,_(g),l(""),Zt.visible=g,ta.visible=!g,na.visible=!g,Nu.visible=!g,Uu.visible=!g,Fu.visible=!g,g?(o.current.x=Tn,o.current.z=_n+.95,u.current.x=0,u.current.z=-1,js.rotation.y=-Math.PI/2):(o.current.x=Tn,o.current.z=_n+3.75,u.current.x=0,u.current.z=1,js.rotation.y=0),ls.position.set(o.current.x,H(o.current.x,o.current.z)+.04,o.current.z)};x.current=ux;const dx=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:18,z:15,r:4.8},{id:"norns",label:"Прядильня норн",x:-25,z:43,r:5.4},{id:"rune",label:"Древний камень Феху",x:27,z:57,r:4.5},{id:"ritual",label:"Круг Силы",x:-43,z:62,r:6.8},{id:"port",label:"Речной причал",x:-46,z:-15,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-4,z:69,r:7.5},{id:"forestEvent",label:n?"Камень Трёх Нитей — место выбора":"Камень Трёх Нитей",x:_l,z:xl,r:4.8},{id:"forestCache",label:"Забытый тайник",x:-15,z:58,r:4.2},{id:"forestWhisper",label:"Камень Шёпота",x:46,z:43,r:4.2},{id:"forestThread",label:"Разорванная нить",x:-48,z:72,r:4.2},{id:"runefield",label:"Поле Рун",x:39,z:70,r:8},{id:"oldfarm",label:"Старый хутор",x:-64,z:36,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:30,z:53,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:61,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:70,z:18,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:67,z:49,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:52,z:7,r:7.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],Om=()=>{const g=Math.max(1,E.clientWidth),A=Math.max(1,E.clientHeight);N.aspect=g/A,N.updateProjectionMatrix(),V.setSize(g,A,!1)};Om();const km=new ResizeObserver(Om);km.observe(E);let Vu=0,zm=performance.now();const Bm=g=>{const A=Math.min(.05,(g-zm)/1e3);zm=g;const m=o.current,b=Math.hypot(m.dx,m.dz);if(b>.05){const j=6.2*A;Je(m,m.x+m.dx/b*j,m.z+m.dz/b*j),ls.rotation.y=Math.atan2(m.dx,m.dz),u.current.x=m.dx/b,u.current.z=m.dz/b,d(!0)}else d(!1);const G=H(m.x,m.z);if(ls.position.set(m.x,G+.04,m.z),or){const j=g*.011+or.phase,ve=b>.05?Math.sin(j)*.58:0,me=b>.05?Math.sin(j+Math.PI)*.42:0;or.legL.rotation.x=ve,or.legR.rotation.x=-ve,or.armL.upper.rotation.x=me,or.armR.upper.rotation.x=-me,or.armL.elbow.rotation.x=-Math.abs(me)*.35,or.armR.elbow.rotation.x=-Math.abs(me)*.35,or.weapon.rotation.z=-.12+(b>.05?Math.sin(j)*.035:0)}const F=u.current,J=v.current?new z(m.x-F.x*1,G+3.65,m.z-F.z*1):new z(m.x-F.x*2,G+7.2,m.z-F.z*2+11.8);N.position.lerp(J,v.current?.09:.055),N.lookAt(m.x+(v.current?F.x*.9:F.x*1.9),G+(v.current?1.25:1.2),m.z+(v.current?F.z*.9:F.z*1.9));let te="",he="";if(v.current)m.z>_n+1.72&&(te="Дверь — выйти из дома",he="heroHomeExit");else for(const j of dx)if(Math.hypot(m.x-j.x,m.z-j.z)<j.r){te=j.label,he=j.id;break}l(te?`${te}|${he}`:""),Ne.forEach(j=>{const ve=.72+.28*Math.sin(g*.0016+j.phase);j.mesh.scale.set(ve,ve*.42,ve);const me=j.mesh.material;me.opacity=.055+.055*(.5+.5*Math.sin(g*.0016+j.phase))}),pt.forEach(j=>{j.light.intensity=2+Math.sin(g*.012+j.phase)*.5,j.flame.scale.y=.9+Math.sin(g*.009+j.phase)*.12}),Bu.children.forEach((j,ve)=>{j.position.x+=Math.sin(g*12e-5+ve)*.003,j.position.z+=Math.cos(g*1e-4+ve)*.002}),k.forEach((j,ve)=>{var St,Rt;if(j.kind==="deer"){const ln=j.g.position.x-ls.position.x,cn=j.g.position.z-ls.position.z,Ut=Math.hypot(ln,cn);if(Ut<11){const Wt=((St=j.g.userData)==null?void 0:St.legJoints)||[],Gt=g*.014*(j.speed||1);for(let Bt=0;Bt<4;Bt++){const xn=Wt[Bt*2],hi=Wt[Bt*2+1];xn&&(xn.rotation.z=Math.sin(Gt+Bt*Math.PI)*.1),hi&&(hi.rotation.z=Math.max(0,Math.sin(Gt+Bt*Math.PI))*-.18)}const Lt=Math.max(.001,Ut),Dt=Ut<5.5?.115:.075,sn=j.g.position.x+ln/Lt*Dt,In=j.g.position.z+cn/Lt*Dt,si=sn-30,ke=In-53;if(Math.hypot(si,ke)<17)j.g.position.set(sn,H(sn,In),In);else{const Bt=Math.atan2(ke,si),xn=30+Math.cos(Bt)*16,hi=53+Math.sin(Bt)*10;j.g.position.set(xn,H(xn,hi),hi)}j.g.rotation.y=Math.atan2(cn,ln),j.g.position.y+=Math.sin(g*.008+ve)*.025;return}}const me=g*.00105*j.speed+j.phase,Ve=j.x+Math.cos(me)*j.r,lt=j.z+Math.sin(me*.83)*j.r*.62;if(j.g.position.set(Ve,H(Ve,lt),lt),j.g.rotation.y=Math.atan2(Math.cos(me*.83),-Math.sin(me)),j.kind==="deer"){const ln=((Rt=j.g.userData)==null?void 0:Rt.legJoints)||[],cn=g*.014*(j.speed||1);for(let Ut=0;Ut<4;Ut++){const Wt=ln[Ut*2],Gt=ln[Ut*2+1];Wt&&(Wt.rotation.z=Math.sin(cn+Ut*Math.PI)*.1),Gt&&(Gt.rotation.z=Math.max(0,Math.sin(cn+Ut*Math.PI))*-.18)}j.g.position.y+=Math.sin(g*.006+ve)*.025,j.g.rotation.x=Math.sin(g*.004+j.phase)*.018}}),an.forEach((j,ve)=>{const me=j.userData.phase||0,Ve=j.userData.baseX,lt=j.userData.baseZ,St=Ve+Math.sin(g*28e-5+me)*1.6,Rt=lt+Math.cos(g*22e-5+me)*1.1;j.position.set(St,H(St,Rt),Rt),j.rotation.y=Math.sin(g*4e-4+me)*.5}),V.render(M,N),Vu=requestAnimationFrame(Bm)};return Vu=requestAnimationFrame(Bm),()=>{cancelAnimationFrame(Vu),km.disconnect(),V.domElement.removeEventListener("pointerup",Fm),Ne.forEach(g=>{g.mesh.geometry.dispose(),g.mesh.material.dispose()}),U.dispose(),We.dispose(),Xe.dispose(),V.dispose(),M.traverse(g=>{var A,m,b,G;g.isMesh&&((m=(A=g.geometry)==null?void 0:A.dispose)==null||m.call(A),Array.isArray(g.material)?g.material.forEach(F=>{var J;return(J=F.dispose)==null?void 0:J.call(F)}):(G=(b=g.material)==null?void 0:b.dispose)==null||G.call(b))}),V.domElement.remove(),x.current=null}},[t.id,e,n]);const S=E=>{const M=r.current,N=s.current;if(!M||!N)return;const V=M.getBoundingClientRect(),Q=V.left+V.width/2,ae=V.top+V.height/2,ce=48;let H=E.clientX-Q,q=E.clientY-ae;const U=Math.hypot(H,q);U>ce&&(H=H/U*ce,q=q/U*ce),N.style.transform=`translate(${H}px,${q}px)`,o.current.dx=H/ce,o.current.dz=q/ce},R=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},P=E=>{var q,U;const M=r.current;if(!M)return;const N=E.target;if((q=N.closest)!=null&&q.call(N,".mid3d-action")||(U=N.closest)!=null&&U.call(N,".mid3d-interact"))return;const V=M.getBoundingClientRect(),Q=26;E.clientX>=V.left-Q&&E.clientX<=V.right+Q&&E.clientY>=V.top-78&&E.clientY<=V.bottom+26&&(E.currentTarget.setPointerCapture(E.pointerId),S(E))},L=E=>{E.currentTarget.hasPointerCapture(E.pointerId)&&S(E)},I=E=>{E.currentTarget.hasPointerCapture(E.pointerId)&&E.currentTarget.releasePointerCapture(E.pointerId),R()};return W.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:P,onPointerMove:L,onPointerUp:I,onPointerCancel:I,onContextMenu:E=>E.preventDefault(),children:[W.jsxs("div",{className:"mid3d-ui mid3d-top",children:[W.jsxs("div",{className:"mid3d-pill",children:[W.jsx("b",{children:"МИДГАРД"}),W.jsx("span",{children:"Деревня • река • лес • святилища"})]}),W.jsxs("div",{className:"mid3d-pill",children:[W.jsx("b",{children:"ᛟ"}),W.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),p&&!n&&W.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[W.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),W.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{y(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{y(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{y(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),p&&n&&W.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[W.jsx("b",{children:"Камень Трёх Нитей"}),W.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>y(!1),children:"Продолжить путь"})]}),f&&W.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[W.jsx("b",{children:"🜂 Круг Силы"}),W.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!f&&!p&&(()=>{const[E,M]=a.split("|"),N=M==="heroHome"||M==="heroHomeExit";return W.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[W.jsx("b",{children:E}),W.jsx("span",{children:N?M==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),W.jsx("button",{onPointerDown:V=>V.stopPropagation(),onClick:()=>{var V,Q;M==="ritual"?h(!0):M==="forestEvent"?y(!0):M==="heroHome"?(V=x.current)==null||V.call(x,!0):M==="heroHomeExit"?(Q=x.current)==null||Q.call(x,!1):e(M)},children:N?M==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),W.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:W.jsx("div",{className:"mid3d-knob",ref:s})}),W.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:E=>E.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),W.jsx("div",{className:"mid3d-ui mid3d-hint",children:w?c?"Ты внутри дома":"Дом героя • отдых • сундук • выход":c?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function mA(){const[t,e]=Mt.useState(()=>sv().hero?{t:"tree"}:{t:"choose"}),[n,i]=Mt.useState(sv),[r,s]=Mt.useState(""),[o,a]=Mt.useState(""),[l,c]=Mt.useState(""),d=Mt.useRef(0),[f,h]=Mt.useState(null),[p,y]=Mt.useState(null),[w,_]=Mt.useState(!1),[u,v]=Mt.useState(0),[x,S]=Mt.useState(0),[R,P]=Mt.useState(0),[L,I]=Mt.useState(""),[E,M]=Mt.useState(!1),[N,V]=Mt.useState(!1),[Q,ae]=Mt.useState(""),[ce,H]=Mt.useState(.06);Mt.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),Mt.useEffect(()=>{var O,Re,le,ue;(O=Tt==null?void 0:Tt.ready)==null||O.call(Tt),(Re=Tt==null?void 0:Tt.expand)==null||Re.call(Tt),(le=Tt==null?void 0:Tt.setHeaderColor)==null||le.call(Tt,"#0b0f0c"),(ue=Tt==null?void 0:Tt.setBackgroundColor)==null||ue.call(Tt,"#0b0f0c")},[]),Mt.useEffect(()=>{if(!(Tt!=null&&Tt.BackButton))return;const O=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(Tt.BackButton.show(),Tt.BackButton.onClick(O)):Tt.BackButton.hide(),()=>{var Re,le;(le=(Re=Tt.BackButton)==null?void 0:Re.offClick)==null||le.call(Re,O)}},[t,n.hero]),Mt.useEffect(()=>{h(null),y(null),_(!1),ae(""),M(!1)},[t]);const q=O=>{c(O),window.clearTimeout(d.current),d.current=window.setTimeout(()=>c(""),1800)},U=(O="light")=>{var Re,le,ue,Je;try{O==="success"?(le=(Re=Tt==null?void 0:Tt.HapticFeedback)==null?void 0:Re.notificationOccurred)==null||le.call(Re,"success"):(Je=(ue=Tt==null?void 0:Tt.HapticFeedback)==null?void 0:ue.impactOccurred)==null||Je.call(ue,"light")}catch{}},ee=O=>e(O),re=O=>{U(),e({t:"realm",id:O.id})},Ee=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),Fe=()=>{const O=Ee();if(O<=0){q("Дозор только начался — искры ещё копятся.");return}i(Re=>({...Re,sparks:Re.sparks+O,watch:Date.now()})),U("success"),q("Дозор завершён: +"+O+" ✨")},ct=()=>{if(n.gift===xa())return;const Re=(n.gift?Math.round((Date.parse(xa())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,le=Zd[Re-1];i(ue=>({...ue,sparks:ue.sparks+le,gift:xa(),streak:Re})),U("success"),q("Дар Древа, день "+Re+": +"+le+" ✨")},Pe=()=>{!r||!o||(i(O=>({...O,hero:{id:r,name:o}})),U("success"),q("Путь начинается, "+o+"!"),e({t:"tree"}))},oe=n.hero?Qd.find(O=>O.id===n.hero.id):null,B=O=>Math.floor(Math.random()*O),pe=O=>n.trials.filter(Re=>Re.startsWith(O+":")).length,Ie=O=>{if(n.artifacts.includes(O.id)){q("Мир покорён. Артефакт хранится в листе героя.");return}U(),e({t:"trial",id:O.id})},et=(O,Re,le)=>{const ue=Re===2;i(Je=>({...Je,sparks:Je.sparks+le+(ue?30:0),trials:[...Je.trials,O+":"+Re],artifacts:ue?[...Je.artifacts,O]:Je.artifacts})),ue&&(U("success"),q("Мир пройден! Артефакт: "+tf[O]))},be=(O,Re)=>{if(f!==null)return;const le=pe(O),ue=ef[O][le];if(Re===ue.c){h(Re),U("success");const Je=12+le*3+((oe==null?void 0:oe.id)==="dwarf"?6:0);q("Верно! Сундук хозяина: +"+Je+" ✨"),et(O,le,Je);return}if(n.powers.includes("mimirEye")){h(ue.c),i(tt=>({...tt,powers:tt.powers.filter(D=>D!=="mimirEye")}));const Je=8+le*2;U("success"),q("Око Мимира раскрыло истину. Ответ исправлен. +"+Je+" ✨"),et(O,le,Je);return}if(n.powers.includes("nornThread")){h(Re),i(tt=>({...tt,powers:tt.powers.filter(D=>D!=="nornThread")}));const Je=6+le*2;U("success"),q("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+Je+" ✨"),et(O,le,Je);return}h(Re),U(),I(ya[O].name+" мрачнеет: «Что ж — пусть решит сталь!»")},pt=O=>{const Re=pe(O),le=ef[O][Re],ue=le.a.findIndex((Je,tt)=>tt!==le.c&&tt!==p);y(ue),_(!0),U(),q("Шёпот ветров уносит один ответ...")},an=O=>{const Re=ya[O],le=n.powers.includes("ashBreath");v(Re.hp),S(oe.hp+(le?25:0)),P(oe.en+(le?2:0)),ae(""),M(!1),V(!1),I(le?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":Re.name+" поднимает оружие!"),le&&i(ue=>({...ue,powers:ue.powers.filter(Je=>Je!=="ashBreath")})),e({t:"fight",id:O})},k=(O,Re)=>{if(Q)return;const le=ya[O],ue=pe(O);let Je=0,tt="",D=R,T=E;if(Re==="hit"&&(Je=oe.str+B(4),n.powers.includes("fireOath")&&(Je+=5,i(Ne=>({...Ne,powers:Ne.powers.filter(xe=>xe!=="fireOath")})),tt="Огненный обет! "),oe.id==="berserk"&&x<=oe.hp/2&&(Je*=2,tt+="Медвежья ярость! "),tt+="Ты бьёшь: "+oe.weapon+" — −"+Je+" хозяину."),Re==="rune"){if(R<4){q("Мало энергии для заклинания!");return}D=R-4,Je=oe.en+2+B(5),tt="Руническое заклинание вспыхивает: −"+Je+" хозяину."}Re==="shield"&&(T=!0,tt="Ты поднимаешь щит — удар ослабнет.");const Z=u-Je;if(Z<=0){v(0),P(D),ae("win");const Ne=8+ue*2;I("Хозяин повержен! Награда: +"+Ne+" ✨"),et(O,ue,Ne);return}let fe=le.atk+B(3),_e="";T&&(fe=Math.ceil(fe*.3),_e=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(fe=Math.ceil(fe*.65),i(Ne=>({...Ne,powers:Ne.powers.filter(xe=>xe!=="iceOath")})),_e+=" Ледяной обет сковал удар врага."),oe.id==="dwarf"&&(fe=Math.ceil(fe*.75));let de=x;if(oe.id==="viking"&&!N&&de-fe<=0&&(V(!0),fe=0,_e=" Крылья бури поглотили смертельный удар!"),de=de-fe,v(Z),S(Math.max(0,de)),P(D),M(!1),de<=0&&n.powers.includes("yggdrasilCall")){i(Ne=>({...Ne,powers:Ne.powers.filter(xe=>xe!=="yggdrasilCall")})),S(30),I(tt+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(de<=0){ae("lose"),i(Ne=>({...Ne,sparks:Math.max(0,Ne.sparks-10)})),I(tt+" "+le.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}I(tt+_e+" "+le.name+" отвечает: −"+fe+".")},bt=O=>{pe(O)>=3||n.artifacts.includes(O)?e({t:"realm",id:O}):e({t:"trial",id:O})},st=O=>O==="tree"?t.t==="tree"||t.t==="realm":t.t===O,Ge=O=>O==="tree"?{t:"tree"}:{t:O};return W.jsxs("div",{className:"app",children:[W.jsx("style",{children:dA}),W.jsxs("div",{className:"hdr",children:[t.t==="tree"&&W.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&W.jsx("button",{className:"back",onClick:()=>ee({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&W.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&W.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&W.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&W.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&W.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&W.jsx("div",{className:"title",children:"⚔ Бой"}),W.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&W.jsxs("div",{className:"scroll choose-screen",children:[W.jsxs("div",{className:"card center choose-intro",children:[W.jsx("div",{className:"big",children:"ᛉ"}),W.jsx("div",{className:"qhead2",children:"Выбери героя"}),W.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),Qd.map(O=>W.jsxs("button",{className:"hcard"+(r===O.id?" on":""),onClick:()=>{s(O.id),a(""),U()},children:[W.jsx("span",{className:"hface",style:{borderColor:O.color,color:O.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:W.jsx(Ur,{name:O.img,className:"himg"})}),W.jsxs("span",{className:"hinfo",children:[W.jsx("span",{className:"hname",style:{color:O.color},children:O.race}),W.jsxs("span",{className:"hab",children:["🌀 ",O.ability,": ",O.abilityDesc]}),W.jsxs("span",{className:"hst",children:["⚔ ",O.str," • ✨ ",O.en," • ❤ ",O.hp]}),W.jsxs("span",{className:"hw",children:["🗡 ",O.weapon]})]})]},O.id)),r&&W.jsxs("div",{className:"card",children:[W.jsx("div",{className:"qhead2",children:"Имя героя"}),W.jsx("div",{className:"chips",children:(Qd.find(O=>O.id===r).gender==="f"?cA:uA).map(O=>W.jsx("button",{className:"chip"+(o===O?" on":""),onClick:()=>{a(O),U()},children:O},O))})]}),W.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:Pe,children:"Вступить на путь"})]}),t.t==="tree"&&W.jsxs("div",{className:"maparea",children:[W.jsx("div",{className:"mapwrap",children:W.jsxs("div",{className:"mapcanvas",children:[W.jsx(Ur,{name:"tree",className:"mapimg"}),cc.map(O=>W.jsxs("button",{className:"marker",style:{left:O.x+"%",top:O.y+"%"},onClick:()=>re(O),children:[W.jsxs("div",{className:"amulet-wrap",children:[W.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${O.glow}, transparent 70%)`}}),W.jsx("div",{className:"amulet-ring",style:{borderColor:O.color}}),W.jsx("div",{className:"amulet-core",style:{borderColor:O.color,color:O.color,background:`linear-gradient(135deg, ${O.dark}, #0a0a0a)`},children:O.runeSym})]}),W.jsx("span",{className:"mname",style:{color:O.color,borderColor:O.glow},children:O.name})]},O.id))]})}),W.jsx("div",{className:"fadeT"}),W.jsx("div",{className:"fadeB"}),W.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&oe&&n.hero&&W.jsxs("button",{className:"herobar",onClick:()=>ee({t:"hero"}),children:[W.jsxs("span",{className:"hbface",style:{borderColor:oe.color,color:oe.color},children:[W.jsx(Ur,{name:oe.img,className:"hbimg"}),oe.sym]}),W.jsxs("span",{className:"hbname",children:[n.hero.name,W.jsx("i",{children:oe.race})]}),W.jsxs("span",{className:"hbst",children:["⚔ ",oe.str," ✨ ",oe.en," ⏳ ",Ee()]}),W.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const O=cc.find(Re=>Re.id===t.id);if(O.id==="midgard"){if(!oe)return null;const Re=le=>{if(U(),le==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?q("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(ue=>({...ue,sparks:ue.sparks+20,done:[...new Set([...ue.done,"forest:present:reward"])]})),U("success"),q("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):q("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(le==="norns"){q("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(le==="forge"||le==="blacksmith"){q("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(le==="house"||le==="elder"){q("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(le==="port"){q("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(le==="rune"){q("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(le==="ashgrove"){q("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(le==="runefield"){q("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(le==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?q("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(ue=>({...ue,sparks:ue.sparks+20,done:[...new Set([...ue.done,"forest:past:reward"])]})),U("success"),q("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):q("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(le==="forestCache"){n.done.includes("forest:cache")?q("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(ue=>({...ue,sparks:ue.sparks+18,done:[...new Set([...ue.done,"forest:cache"])]})),U("success"),q("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(le==="forestWhisper"){n.done.includes("forest:whisper")?q("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(ue=>({...ue,sparks:ue.sparks+16,done:[...new Set([...ue.done,"forest:whisper"])]})),U("success"),q("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(le==="forestThread"){n.done.includes("forest:thread")?q("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(ue=>({...ue,sparks:ue.sparks+22,done:[...new Set([...ue.done,"forest:thread"])]})),U("success"),q("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(le==="heroHome"){q("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(le==="hunterCamp"){n.done.includes("forest:camp")?q("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(ue=>({...ue,sparks:ue.sparks+14,done:[...new Set([...ue.done,"forest:camp"])]})),U("success"),q("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(le==="deepGrove"){n.done.includes("forest:grove")?q("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(ue=>({...ue,sparks:ue.sparks+17,done:[...new Set([...ue.done,"forest:grove"])]})),U("success"),q("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(le==="fallenAsh"){n.done.includes("forest:ash")?q("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(ue=>({...ue,sparks:ue.sparks+21,done:[...new Set([...ue.done,"forest:ash"])]})),U("success"),q("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(le==="deer"){q("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(le==="hoddmimir"){q("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(le==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?q("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(ue=>({...ue,sparks:ue.sparks+20,done:[...new Set([...ue.done,"forest:future:reward"])]})),U("success"),q("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):q("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(le==="forestEvent"){n.done.includes("forest:choice")&&q("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(le==="forestEvent:past"){i(ue=>({...ue,sparks:ue.sparks+12,done:[...new Set([...ue.done,"forest:choice","forest:past"])]})),U("success"),q("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(le==="forestEvent:present"){i(ue=>({...ue,sparks:ue.sparks+12,done:[...new Set([...ue.done,"forest:choice","forest:present"])]})),U("success"),q("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(le==="forestEvent:future"){i(ue=>({...ue,sparks:ue.sparks+12,done:[...new Set([...ue.done,"forest:choice","forest:future"])]})),U("success"),q("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(le==="event"){q("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(le.startsWith("ritual:")){const ue=le.slice(7),Je={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},D={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[ue];if(!D)return;if(n.powers.includes(D)){q(Je[ue]+" уже пробуждён. Его сила ждёт своего часа.");return}i(Z=>({...Z,powers:[...new Set([...Z.powers,D])],done:[...new Set([...Z.done,"ritual:"+ue])]}));const T={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};U("success"),q(T[ue]);return}};return W.jsx(pA,{h:oe,on:Re,eventDone:n.done.includes("forest:choice")})}return W.jsxs("div",{className:"content",children:[W.jsx(Ur,{name:O.id,className:"bgimg"}),W.jsx("div",{className:"veil"}),W.jsxs("div",{className:"banner",children:[W.jsx("span",{className:"bemoji",children:O.emoji}),W.jsxs("div",{children:[W.jsx("div",{className:"bname",children:O.name}),W.jsx("div",{className:"btag",children:O.tag})]})]}),W.jsxs("button",{className:"gate",onClick:()=>Ie(O),children:[W.jsxs("span",{className:"gwrap",children:[W.jsx("span",{className:"gate-ring",style:{borderColor:O.color}}),W.jsx("span",{className:"gate-core",style:{borderColor:O.color,color:O.color,background:`radial-gradient(circle, ${O.dark}, #050705 75%)`},children:O.runeSym})]}),W.jsx("span",{className:"mname",style:{color:O.color,borderColor:O.glow},children:n.artifacts.includes(O.id)?"Мир покорён":"Врата мира"})]}),W.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const O=cc.find(Je=>Je.id===t.id),Re=ya[O.id],le=pe(O.id);if(le>=3)return W.jsx("div",{className:"scroll",children:W.jsxs("div",{className:"card center",children:[W.jsx("div",{className:"big",children:"🏺"}),W.jsx("div",{className:"qhead2",children:"Мир покорён!"}),W.jsxs("p",{className:"dim",children:["Артефакт: ",tf[O.id]]}),W.jsx("button",{className:"btn gold",onClick:()=>ee({t:"realm",id:O.id}),children:"К вратам"})]})});const ue=ef[O.id][le];return W.jsxs("div",{className:"scroll",children:[W.jsxs("div",{className:"mhead",children:[W.jsxs("span",{className:"mface",style:{borderColor:O.color,color:O.color},children:[W.jsx(Ur,{name:ov[O.id],className:"himg"}),Re.sym]}),W.jsx("span",{className:"mname2",style:{color:O.color},children:Re.name}),W.jsxs("span",{className:"mtitle",children:[Re.title," • испытание ",le+1," из 3"]})]}),le===0&&W.jsxs("div",{className:"greet",children:["«",Re.greet,"»"]}),W.jsxs("div",{className:"cloud",children:[W.jsx("div",{className:"riddle",children:ue.q}),ue.a.map((Je,tt)=>W.jsx("button",{className:"ans"+(f!==null?tt===ue.c?" good":tt===f?" bad":" off":p===tt?" off":""),onClick:()=>be(O.id,tt),children:Je},tt)),(oe==null?void 0:oe.id)==="elf"&&!w&&f===null&&W.jsx("button",{className:"btn rune",onClick:()=>pt(O.id),children:"🌀 Шёпот ветров"}),f!==null&&(f===ue.c?W.jsx("button",{className:"btn gold",onClick:()=>bt(O.id),children:"Открыть сундук →"}):W.jsx("button",{className:"btn",onClick:()=>an(O.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const O=cc.find(le=>le.id===t.id),Re=ya[O.id];return W.jsxs("div",{className:"scroll",children:[W.jsxs("div",{className:"duel",children:[W.jsxs("div",{className:"dside",children:[W.jsxs("span",{className:"dface",style:{borderColor:O.color,color:O.color},children:[W.jsx(Ur,{name:ov[O.id],className:"himg"}),Re.sym]}),W.jsx("span",{className:"dname",style:{color:O.color},children:Re.name}),W.jsx("span",{className:"dhp",children:W.jsx("span",{className:"dhpfill",style:{width:Math.max(0,u/Re.hp*100)+"%",background:O.color}})}),W.jsxs("span",{className:"dnum",children:[u,"/",Re.hp]})]}),W.jsx("span",{className:"dvs",children:"⚔"}),W.jsxs("div",{className:"dside",children:[W.jsxs("span",{className:"dface",style:{borderColor:oe.color,color:oe.color},children:[W.jsx(Ur,{name:oe.img,className:"himg"}),oe.sym]}),W.jsx("span",{className:"dname",style:{color:oe.color},children:n.hero.name}),W.jsx("span",{className:"dhp",children:W.jsx("span",{className:"dhpfill",style:{width:Math.max(0,x/oe.hp*100)+"%",background:"#7ee787"}})}),W.jsx("span",{className:"denergy",children:Array.from({length:oe.en}).map((le,ue)=>W.jsx("span",{className:"pip"+(ue<R?" on":"")},ue))})]})]}),W.jsx("div",{className:"flog",children:L}),!Q&&W.jsxs("div",{className:"acts",children:[W.jsxs("button",{className:"btn gold",onClick:()=>k(O.id,"hit"),children:["⚔ Удар: ",oe.weapon]}),W.jsx("button",{className:"btn rune",onClick:()=>k(O.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),W.jsx("button",{className:"btn shield",onClick:()=>k(O.id,"shield"),children:"🛡 Щит"})]}),Q==="win"&&W.jsx("button",{className:"btn gold",onClick:()=>bt(O.id),children:"Забрать награду →"}),Q==="lose"&&W.jsx("button",{className:"btn ghost",onClick:()=>ee({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&oe&&n.hero&&W.jsx("div",{className:"scroll",children:W.jsxs("div",{className:"card center",children:[W.jsx("span",{className:"hface bigface",style:{borderColor:oe.color,color:oe.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:W.jsx(Ur,{name:oe.img,className:"himg"})}),W.jsxs("div",{className:"qhead2",style:{color:oe.color},children:[n.hero.name," • ",oe.race]}),W.jsxs("div",{className:"stats",children:[W.jsxs("div",{className:"stat",children:[W.jsxs("b",{children:["⚔ ",oe.str]}),W.jsx("span",{children:"сила"})]}),W.jsxs("div",{className:"stat",children:[W.jsxs("b",{children:["✨ ",oe.en]}),W.jsx("span",{children:"энергия"})]}),W.jsxs("div",{className:"stat",children:[W.jsxs("b",{children:["❤ ",oe.hp]}),W.jsx("span",{children:"здоровье"})]})]}),W.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",W.jsx("b",{children:oe.weapon})]}),W.jsxs("div",{className:"hrow",children:["🌀 ",oe.ability,": ",oe.abilityDesc]}),W.jsxs("div",{className:"hrow",children:["✨ Искр: ",W.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",W.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&W.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(O=>tf[O]).join(", ")]})]})}),t.t==="gift"&&(()=>{const O=n.gift===xa(),le=(n.gift?Math.round((Date.parse(xa())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,ue=O?n.streak:le;return W.jsxs("div",{className:"scroll",children:[W.jsxs("div",{className:"card center",children:[W.jsx("div",{className:"big",children:"🎁"}),W.jsx("div",{className:"qhead2",children:"Дар Древа"}),W.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),W.jsx("div",{className:"days",children:Zd.map((Je,tt)=>W.jsxs("span",{className:"day"+(tt+1===ue?" on":tt+1<ue&&O?" done":""),children:[W.jsx("b",{children:Je}),"день ",tt+1]},tt))}),O?W.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):W.jsxs("button",{className:"btn gold",onClick:ct,children:["Забрать дар +",Zd[le-1]," ✨"]})]}),W.jsxs("div",{className:"card center",children:[W.jsx("div",{className:"big",children:"⏳"}),W.jsx("div",{className:"qhead2",children:"Дозор героя"}),W.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),W.jsxs("button",{className:"btn gold",onClick:Fe,children:["Завершить дозор · +",Ee()," ✨"]})]})]})})(),t.t==="hall"&&W.jsx("div",{className:"scroll",children:W.jsxs("div",{className:"card center",children:[W.jsx("div",{className:"big",children:"🏛️"}),W.jsx("div",{className:"qhead2",children:"Чертог путника"}),W.jsxs("div",{className:"stats",children:[W.jsxs("div",{className:"stat",children:[W.jsxs("b",{children:["✨ ",n.sparks]}),W.jsx("span",{children:"Искр"})]}),W.jsxs("div",{className:"stat",children:[W.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),W.jsx("span",{children:"артефакты"})]})]}),W.jsxs("div",{className:"rank",children:["🏆 Ранг: ",lA(n.sparks)]}),n.hero&&oe&&W.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",oe.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&W.jsx("div",{className:"nav",children:aA.map(O=>W.jsxs("button",{className:"navbtn"+(st(O.id)?" on":""),onClick:()=>ee(Ge(O.id)),children:[W.jsx("span",{className:"ic",children:O.ic}),O.t]},O.id))}),l&&W.jsx("div",{className:"toast",children:l})]})}y_(document.getElementById("root")).render(W.jsx(mA,{}));
