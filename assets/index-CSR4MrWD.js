(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var _v={exports:{}},cu={},xv={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dl=Symbol.for("react.element"),Px=Symbol.for("react.portal"),Lx=Symbol.for("react.fragment"),Ix=Symbol.for("react.strict_mode"),Dx=Symbol.for("react.profiler"),Nx=Symbol.for("react.provider"),Ux=Symbol.for("react.context"),Fx=Symbol.for("react.forward_ref"),kx=Symbol.for("react.suspense"),Ox=Symbol.for("react.memo"),zx=Symbol.for("react.lazy"),e0=Symbol.iterator;function Bx(t){return t===null||typeof t!="object"?null:(t=e0&&t[e0]||t["@@iterator"],typeof t=="function"?t:null)}var yv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mv=Object.assign,Sv={};function jo(t,e,n){this.props=t,this.context=e,this.refs=Sv,this.updater=n||yv}jo.prototype.isReactComponent={};jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wv(){}wv.prototype=jo.prototype;function Yh(t,e,n){this.props=t,this.context=e,this.refs=Sv,this.updater=n||yv}var qh=Yh.prototype=new wv;qh.constructor=Yh;Mv(qh,jo.prototype);qh.isPureReactComponent=!0;var t0=Array.isArray,Ev=Object.prototype.hasOwnProperty,$h={current:null},Tv={key:!0,ref:!0,__self:!0,__source:!0};function Av(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ev.call(e,i)&&!Tv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:dl,type:t,key:s,ref:o,props:r,_owner:$h.current}}function Hx(t,e){return{$$typeof:dl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kh(t){return typeof t=="object"&&t!==null&&t.$$typeof===dl}function Vx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var n0=/\/+/g;function Ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Vx(""+t.key):e.toString(36)}function gc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case dl:case Px:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ku(o,0):i,t0(r)?(n="",t!=null&&(n=t.replace(n0,"$&/")+"/"),gc(r,e,n,"",function(c){return c})):r!=null&&(Kh(r)&&(r=Hx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(n0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",t0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ku(s,a);o+=gc(s,e,n,l,r)}else if(l=Bx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ku(s,a++),o+=gc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function bl(t,e,n){if(t==null)return t;var i=[],r=0;return gc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Gx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ni={current:null},vc={transition:null},Wx={ReactCurrentDispatcher:ni,ReactCurrentBatchConfig:vc,ReactCurrentOwner:$h};function bv(){throw Error("act(...) is not supported in production builds of React.")}wt.Children={map:bl,forEach:function(t,e,n){bl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bl(t,function(){e++}),e},toArray:function(t){return bl(t,function(e){return e})||[]},only:function(t){if(!Kh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};wt.Component=jo;wt.Fragment=Lx;wt.Profiler=Dx;wt.PureComponent=Yh;wt.StrictMode=Ix;wt.Suspense=kx;wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wx;wt.act=bv;wt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Mv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$h.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ev.call(e,l)&&!Tv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:dl,type:t.type,key:r,ref:s,props:i,_owner:o}};wt.createContext=function(t){return t={$$typeof:Ux,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Nx,_context:t},t.Consumer=t};wt.createElement=Av;wt.createFactory=function(t){var e=Av.bind(null,t);return e.type=t,e};wt.createRef=function(){return{current:null}};wt.forwardRef=function(t){return{$$typeof:Fx,render:t}};wt.isValidElement=Kh;wt.lazy=function(t){return{$$typeof:zx,_payload:{_status:-1,_result:t},_init:Gx}};wt.memo=function(t,e){return{$$typeof:Ox,type:t,compare:e===void 0?null:e}};wt.startTransition=function(t){var e=vc.transition;vc.transition={};try{t()}finally{vc.transition=e}};wt.unstable_act=bv;wt.useCallback=function(t,e){return ni.current.useCallback(t,e)};wt.useContext=function(t){return ni.current.useContext(t)};wt.useDebugValue=function(){};wt.useDeferredValue=function(t){return ni.current.useDeferredValue(t)};wt.useEffect=function(t,e){return ni.current.useEffect(t,e)};wt.useId=function(){return ni.current.useId()};wt.useImperativeHandle=function(t,e,n){return ni.current.useImperativeHandle(t,e,n)};wt.useInsertionEffect=function(t,e){return ni.current.useInsertionEffect(t,e)};wt.useLayoutEffect=function(t,e){return ni.current.useLayoutEffect(t,e)};wt.useMemo=function(t,e){return ni.current.useMemo(t,e)};wt.useReducer=function(t,e,n){return ni.current.useReducer(t,e,n)};wt.useRef=function(t){return ni.current.useRef(t)};wt.useState=function(t){return ni.current.useState(t)};wt.useSyncExternalStore=function(t,e,n){return ni.current.useSyncExternalStore(t,e,n)};wt.useTransition=function(){return ni.current.useTransition()};wt.version="18.3.1";xv.exports=wt;var Tt=xv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx=Tt,jx=Symbol.for("react.element"),Yx=Symbol.for("react.fragment"),qx=Object.prototype.hasOwnProperty,$x=Xx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kx={key:!0,ref:!0,__self:!0,__source:!0};function Cv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)qx.call(e,i)&&!Kx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:jx,type:t,key:s,ref:o,props:r,_owner:$x.current}}cu.Fragment=Yx;cu.jsx=Cv;cu.jsxs=Cv;_v.exports=cu;var W=_v.exports,Rv={exports:{}},Si={},Pv={exports:{}},Lv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,ne){var se=F.length;F.push(ne);e:for(;0<se;){var Ee=se-1>>>1,Oe=F[Ee];if(0<r(Oe,ne))F[Ee]=ne,F[se]=Oe,se=Ee;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var ne=F[0],se=F.pop();if(se!==ne){F[0]=se;e:for(var Ee=0,Oe=F.length,ut=Oe>>>1;Ee<ut;){var Le=2*(Ee+1)-1,le=F[Le],z=Le+1,pe=F[z];if(0>r(le,se))z<Oe&&0>r(pe,le)?(F[Ee]=pe,F[z]=se,Ee=z):(F[Ee]=le,F[Le]=se,Ee=Le);else if(z<Oe&&0>r(pe,se))F[Ee]=pe,F[z]=se,Ee=z;else break e}}return ne}function r(F,ne){var se=F.sortIndex-ne.sortIndex;return se!==0?se:F.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,g=!1,y=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(F){for(var ne=n(c);ne!==null;){if(ne.callback===null)i(c);else if(ne.startTime<=F)i(c),ne.sortIndex=ne.expirationTime,e(l,ne);else break;ne=n(c)}}function S(F){if(w=!1,x(F),!y)if(n(l)!==null)y=!0,H(R);else{var ne=n(c);ne!==null&&K(S,ne.startTime-F)}}function R(F,ne){y=!1,w&&(w=!1,u(D),D=-1),g=!0;var se=h;try{for(x(ne),f=n(l);f!==null&&(!(f.expirationTime>ne)||F&&!U());){var Ee=f.callback;if(typeof Ee=="function"){f.callback=null,h=f.priorityLevel;var Oe=Ee(f.expirationTime<=ne);ne=t.unstable_now(),typeof Oe=="function"?f.callback=Oe:f===n(l)&&i(l),x(ne)}else i(l);f=n(l)}if(f!==null)var ut=!0;else{var Le=n(c);Le!==null&&K(S,Le.startTime-ne),ut=!1}return ut}finally{f=null,h=se,g=!1}}var P=!1,L=null,D=-1,E=5,M=-1;function U(){return!(t.unstable_now()-M<E)}function G(){if(L!==null){var F=t.unstable_now();M=F;var ne=!0;try{ne=L(!0,F)}finally{ne?te():(P=!1,L=null)}}else P=!1}var te;if(typeof v=="function")te=function(){v(G)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ue=ae.port2;ae.port1.onmessage=G,te=function(){ue.postMessage(null)}}else te=function(){_(G,0)};function H(F){L=F,P||(P=!0,te())}function K(F,ne){D=_(function(){F(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,H(R))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(h){case 1:case 2:case 3:var ne=3;break;default:ne=h}var se=h;h=ne;try{return F()}finally{h=se}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,ne){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var se=h;h=F;try{return ne()}finally{h=se}},t.unstable_scheduleCallback=function(F,ne,se){var Ee=t.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?Ee+se:Ee):se=Ee,F){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=se+Oe,F={id:d++,callback:ne,priorityLevel:F,startTime:se,expirationTime:Oe,sortIndex:-1},se>Ee?(F.sortIndex=se,e(c,F),n(l)===null&&F===n(c)&&(w?(u(D),D=-1):w=!0,K(S,se-Ee))):(F.sortIndex=Oe,e(l,F),y||g||(y=!0,H(R))),F},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(F){var ne=h;return function(){var se=h;h=ne;try{return F.apply(this,arguments)}finally{h=se}}}})(Lv);Pv.exports=Lv;var Jx=Pv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zx=Tt,Mi=Jx;function we(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iv=new Set,Ga={};function zs(t,e){No(t,e),No(t+"Capture",e)}function No(t,e){for(Ga[t]=e,t=0;t<e.length;t++)Iv.add(e[t])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ff=Object.prototype.hasOwnProperty,Qx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,i0={},r0={};function ey(t){return ff.call(r0,t)?!0:ff.call(i0,t)?!1:Qx.test(t)?r0[t]=!0:(i0[t]=!0,!1)}function ty(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ny(t,e,n,i){if(e===null||typeof e>"u"||ty(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ii(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bn[t]=new ii(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bn[e]=new ii(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bn[t]=new ii(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bn[t]=new ii(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bn[t]=new ii(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bn[t]=new ii(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bn[t]=new ii(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bn[t]=new ii(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bn[t]=new ii(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jh=/[\-:]([a-z])/g;function Zh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jh,Zh);Bn[e]=new ii(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jh,Zh);Bn[e]=new ii(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jh,Zh);Bn[e]=new ii(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bn[t]=new ii(t,1,!1,t.toLowerCase(),null,!1,!1)});Bn.xlinkHref=new ii("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bn[t]=new ii(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qh(t,e,n,i){var r=Bn.hasOwnProperty(e)?Bn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ny(e,n,r,i)&&(n=null),i||r===null?ey(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ar=Zx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cl=Symbol.for("react.element"),fo=Symbol.for("react.portal"),ho=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),Dv=Symbol.for("react.provider"),Nv=Symbol.for("react.context"),tp=Symbol.for("react.forward_ref"),pf=Symbol.for("react.suspense"),mf=Symbol.for("react.suspense_list"),np=Symbol.for("react.memo"),Or=Symbol.for("react.lazy"),Uv=Symbol.for("react.offscreen"),s0=Symbol.iterator;function ua(t){return t===null||typeof t!="object"?null:(t=s0&&t[s0]||t["@@iterator"],typeof t=="function"?t:null)}var cn=Object.assign,Ju;function ba(t){if(Ju===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ju=e&&e[1]||""}return`
`+Ju+t}var Zu=!1;function Qu(t,e){if(!t||Zu)return"";Zu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ba(t):""}function iy(t){switch(t.tag){case 5:return ba(t.type);case 16:return ba("Lazy");case 13:return ba("Suspense");case 19:return ba("SuspenseList");case 0:case 2:case 15:return t=Qu(t.type,!1),t;case 11:return t=Qu(t.type.render,!1),t;case 1:return t=Qu(t.type,!0),t;default:return""}}function gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ho:return"Fragment";case fo:return"Portal";case hf:return"Profiler";case ep:return"StrictMode";case pf:return"Suspense";case mf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Nv:return(t.displayName||"Context")+".Consumer";case Dv:return(t._context.displayName||"Context")+".Provider";case tp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case np:return e=t.displayName||null,e!==null?e:gf(t.type)||"Memo";case Or:e=t._payload,t=t._init;try{return gf(t(e))}catch{}}return null}function ry(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gf(e);case 8:return e===ep?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ts(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sy(t){var e=Fv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Rl(t){t._valueTracker||(t._valueTracker=sy(t))}function kv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Fv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Nc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vf(t,e){var n=e.checked;return cn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function o0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ts(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ov(t,e){e=e.checked,e!=null&&Qh(t,"checked",e,!1)}function _f(t,e){Ov(t,e);var n=ts(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xf(t,e.type,n):e.hasOwnProperty("defaultValue")&&xf(t,e.type,ts(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function a0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xf(t,e,n){(e!=="number"||Nc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ca=Array.isArray;function To(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ts(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function yf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(we(91));return cn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function l0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(we(92));if(Ca(n)){if(1<n.length)throw Error(we(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ts(n)}}function zv(t,e){var n=ts(e.value),i=ts(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function c0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pl,Hv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pl=Pl||document.createElement("div"),Pl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oy=["Webkit","ms","Moz","O"];Object.keys(Ia).forEach(function(t){oy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ia[e]=Ia[t]})});function Vv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ia.hasOwnProperty(t)&&Ia[t]?(""+e).trim():e+"px"}function Gv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Vv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ay=cn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sf(t,e){if(e){if(ay[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(we(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(we(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(we(61))}if(e.style!=null&&typeof e.style!="object")throw Error(we(62))}}function wf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ef=null;function ip(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tf=null,Ao=null,bo=null;function u0(t){if(t=pl(t)){if(typeof Tf!="function")throw Error(we(280));var e=t.stateNode;e&&(e=pu(e),Tf(t.stateNode,t.type,e))}}function Wv(t){Ao?bo?bo.push(t):bo=[t]:Ao=t}function Xv(){if(Ao){var t=Ao,e=bo;if(bo=Ao=null,u0(t),e)for(t=0;t<e.length;t++)u0(e[t])}}function jv(t,e){return t(e)}function Yv(){}var ed=!1;function qv(t,e,n){if(ed)return t(e,n);ed=!0;try{return jv(t,e,n)}finally{ed=!1,(Ao!==null||bo!==null)&&(Yv(),Xv())}}function Xa(t,e){var n=t.stateNode;if(n===null)return null;var i=pu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(we(231,e,typeof n));return n}var Af=!1;if(Sr)try{var da={};Object.defineProperty(da,"passive",{get:function(){Af=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{Af=!1}function ly(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Da=!1,Uc=null,Fc=!1,bf=null,cy={onError:function(t){Da=!0,Uc=t}};function uy(t,e,n,i,r,s,o,a,l){Da=!1,Uc=null,ly.apply(cy,arguments)}function dy(t,e,n,i,r,s,o,a,l){if(uy.apply(this,arguments),Da){if(Da){var c=Uc;Da=!1,Uc=null}else throw Error(we(198));Fc||(Fc=!0,bf=c)}}function Bs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $v(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function d0(t){if(Bs(t)!==t)throw Error(we(188))}function fy(t){var e=t.alternate;if(!e){if(e=Bs(t),e===null)throw Error(we(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return d0(r),t;if(s===i)return d0(r),e;s=s.sibling}throw Error(we(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(we(189))}}if(n.alternate!==i)throw Error(we(190))}if(n.tag!==3)throw Error(we(188));return n.stateNode.current===n?t:e}function Kv(t){return t=fy(t),t!==null?Jv(t):null}function Jv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jv(t);if(e!==null)return e;t=t.sibling}return null}var Zv=Mi.unstable_scheduleCallback,f0=Mi.unstable_cancelCallback,hy=Mi.unstable_shouldYield,py=Mi.unstable_requestPaint,mn=Mi.unstable_now,my=Mi.unstable_getCurrentPriorityLevel,rp=Mi.unstable_ImmediatePriority,Qv=Mi.unstable_UserBlockingPriority,kc=Mi.unstable_NormalPriority,gy=Mi.unstable_LowPriority,e1=Mi.unstable_IdlePriority,uu=null,ir=null;function vy(t){if(ir&&typeof ir.onCommitFiberRoot=="function")try{ir.onCommitFiberRoot(uu,t,void 0,(t.current.flags&128)===128)}catch{}}var ji=Math.clz32?Math.clz32:yy,_y=Math.log,xy=Math.LN2;function yy(t){return t>>>=0,t===0?32:31-(_y(t)/xy|0)|0}var Ll=64,Il=4194304;function Ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ra(a):(s&=o,s!==0&&(i=Ra(s)))}else o=n&~r,o!==0?i=Ra(o):s!==0&&(i=Ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ji(e),r=1<<n,i|=t[n],e&=~r;return i}function My(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ji(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=My(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function t1(){var t=Ll;return Ll<<=1,!(Ll&4194240)&&(Ll=64),t}function td(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ji(e),t[e]=n}function wy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ji(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function sp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ji(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ot=0;function n1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var i1,op,r1,s1,o1,Rf=!1,Dl=[],Xr=null,jr=null,Yr=null,ja=new Map,Ya=new Map,Br=[],Ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function h0(t,e){switch(t){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ya.delete(e.pointerId)}}function fa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=pl(e),e!==null&&op(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ty(t,e,n,i,r){switch(e){case"focusin":return Xr=fa(Xr,t,e,n,i,r),!0;case"dragenter":return jr=fa(jr,t,e,n,i,r),!0;case"mouseover":return Yr=fa(Yr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ja.set(s,fa(ja.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ya.set(s,fa(Ya.get(s)||null,t,e,n,i,r)),!0}return!1}function a1(t){var e=Ts(t.target);if(e!==null){var n=Bs(e);if(n!==null){if(e=n.tag,e===13){if(e=$v(n),e!==null){t.blockedOn=e,o1(t.priority,function(){r1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ef=i,n.target.dispatchEvent(i),Ef=null}else return e=pl(n),e!==null&&op(e),t.blockedOn=n,!1;e.shift()}return!0}function p0(t,e,n){_c(t)&&n.delete(e)}function Ay(){Rf=!1,Xr!==null&&_c(Xr)&&(Xr=null),jr!==null&&_c(jr)&&(jr=null),Yr!==null&&_c(Yr)&&(Yr=null),ja.forEach(p0),Ya.forEach(p0)}function ha(t,e){t.blockedOn===e&&(t.blockedOn=null,Rf||(Rf=!0,Mi.unstable_scheduleCallback(Mi.unstable_NormalPriority,Ay)))}function qa(t){function e(r){return ha(r,t)}if(0<Dl.length){ha(Dl[0],t);for(var n=1;n<Dl.length;n++){var i=Dl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xr!==null&&ha(Xr,t),jr!==null&&ha(jr,t),Yr!==null&&ha(Yr,t),ja.forEach(e),Ya.forEach(e),n=0;n<Br.length;n++)i=Br[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Br.length&&(n=Br[0],n.blockedOn===null);)a1(n),n.blockedOn===null&&Br.shift()}var Co=Ar.ReactCurrentBatchConfig,zc=!0;function by(t,e,n,i){var r=Ot,s=Co.transition;Co.transition=null;try{Ot=1,ap(t,e,n,i)}finally{Ot=r,Co.transition=s}}function Cy(t,e,n,i){var r=Ot,s=Co.transition;Co.transition=null;try{Ot=4,ap(t,e,n,i)}finally{Ot=r,Co.transition=s}}function ap(t,e,n,i){if(zc){var r=Pf(t,e,n,i);if(r===null)dd(t,e,i,Bc,n),h0(t,i);else if(Ty(r,t,e,n,i))i.stopPropagation();else if(h0(t,i),e&4&&-1<Ey.indexOf(t)){for(;r!==null;){var s=pl(r);if(s!==null&&i1(s),s=Pf(t,e,n,i),s===null&&dd(t,e,i,Bc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else dd(t,e,i,null,n)}}var Bc=null;function Pf(t,e,n,i){if(Bc=null,t=ip(i),t=Ts(t),t!==null)if(e=Bs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$v(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bc=t,null}function l1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(my()){case rp:return 1;case Qv:return 4;case kc:case gy:return 16;case e1:return 536870912;default:return 16}default:return 16}}var Gr=null,lp=null,xc=null;function c1(){if(xc)return xc;var t,e=lp,n=e.length,i,r="value"in Gr?Gr.value:Gr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return xc=r.slice(t,1<i?1-i:void 0)}function yc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nl(){return!0}function m0(){return!1}function wi(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Nl:m0,this.isPropagationStopped=m0,this}return cn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),e}var Yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cp=wi(Yo),hl=cn({},Yo,{view:0,detail:0}),Ry=wi(hl),nd,id,pa,du=cn({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pa&&(pa&&t.type==="mousemove"?(nd=t.screenX-pa.screenX,id=t.screenY-pa.screenY):id=nd=0,pa=t),nd)},movementY:function(t){return"movementY"in t?t.movementY:id}}),g0=wi(du),Py=cn({},du,{dataTransfer:0}),Ly=wi(Py),Iy=cn({},hl,{relatedTarget:0}),rd=wi(Iy),Dy=cn({},Yo,{animationName:0,elapsedTime:0,pseudoElement:0}),Ny=wi(Dy),Uy=cn({},Yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fy=wi(Uy),ky=cn({},Yo,{data:0}),v0=wi(ky),Oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},By={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=By[t])?!!e[t]:!1}function up(){return Hy}var Vy=cn({},hl,{key:function(t){if(t.key){var e=Oy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:up,charCode:function(t){return t.type==="keypress"?yc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gy=wi(Vy),Wy=cn({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_0=wi(Wy),Xy=cn({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:up}),jy=wi(Xy),Yy=cn({},Yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),qy=wi(Yy),$y=cn({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ky=wi($y),Jy=[9,13,27,32],dp=Sr&&"CompositionEvent"in window,Na=null;Sr&&"documentMode"in document&&(Na=document.documentMode);var Zy=Sr&&"TextEvent"in window&&!Na,u1=Sr&&(!dp||Na&&8<Na&&11>=Na),x0=" ",y0=!1;function d1(t,e){switch(t){case"keyup":return Jy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var po=!1;function Qy(t,e){switch(t){case"compositionend":return f1(e);case"keypress":return e.which!==32?null:(y0=!0,x0);case"textInput":return t=e.data,t===x0&&y0?null:t;default:return null}}function e2(t,e){if(po)return t==="compositionend"||!dp&&d1(t,e)?(t=c1(),xc=lp=Gr=null,po=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return u1&&e.locale!=="ko"?null:e.data;default:return null}}var t2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function M0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!t2[t.type]:e==="textarea"}function h1(t,e,n,i){Wv(i),e=Hc(e,"onChange"),0<e.length&&(n=new cp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ua=null,$a=null;function n2(t){E1(t,0)}function fu(t){var e=vo(t);if(kv(e))return t}function i2(t,e){if(t==="change")return e}var p1=!1;if(Sr){var sd;if(Sr){var od="oninput"in document;if(!od){var S0=document.createElement("div");S0.setAttribute("oninput","return;"),od=typeof S0.oninput=="function"}sd=od}else sd=!1;p1=sd&&(!document.documentMode||9<document.documentMode)}function w0(){Ua&&(Ua.detachEvent("onpropertychange",m1),$a=Ua=null)}function m1(t){if(t.propertyName==="value"&&fu($a)){var e=[];h1(e,$a,t,ip(t)),qv(n2,e)}}function r2(t,e,n){t==="focusin"?(w0(),Ua=e,$a=n,Ua.attachEvent("onpropertychange",m1)):t==="focusout"&&w0()}function s2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu($a)}function o2(t,e){if(t==="click")return fu(e)}function a2(t,e){if(t==="input"||t==="change")return fu(e)}function l2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $i=typeof Object.is=="function"?Object.is:l2;function Ka(t,e){if($i(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ff.call(e,r)||!$i(t[r],e[r]))return!1}return!0}function E0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function T0(t,e){var n=E0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=E0(n)}}function g1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?g1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function v1(){for(var t=window,e=Nc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nc(t.document)}return e}function fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function c2(t){var e=v1(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&g1(n.ownerDocument.documentElement,n)){if(i!==null&&fp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=T0(n,s);var o=T0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var u2=Sr&&"documentMode"in document&&11>=document.documentMode,mo=null,Lf=null,Fa=null,If=!1;function A0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;If||mo==null||mo!==Nc(i)||(i=mo,"selectionStart"in i&&fp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fa&&Ka(Fa,i)||(Fa=i,i=Hc(Lf,"onSelect"),0<i.length&&(e=new cp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=mo)))}function Ul(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var go={animationend:Ul("Animation","AnimationEnd"),animationiteration:Ul("Animation","AnimationIteration"),animationstart:Ul("Animation","AnimationStart"),transitionend:Ul("Transition","TransitionEnd")},ad={},_1={};Sr&&(_1=document.createElement("div").style,"AnimationEvent"in window||(delete go.animationend.animation,delete go.animationiteration.animation,delete go.animationstart.animation),"TransitionEvent"in window||delete go.transitionend.transition);function hu(t){if(ad[t])return ad[t];if(!go[t])return t;var e=go[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _1)return ad[t]=e[n];return t}var x1=hu("animationend"),y1=hu("animationiteration"),M1=hu("animationstart"),S1=hu("transitionend"),w1=new Map,b0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ss(t,e){w1.set(t,e),zs(e,[t])}for(var ld=0;ld<b0.length;ld++){var cd=b0[ld],d2=cd.toLowerCase(),f2=cd[0].toUpperCase()+cd.slice(1);ss(d2,"on"+f2)}ss(x1,"onAnimationEnd");ss(y1,"onAnimationIteration");ss(M1,"onAnimationStart");ss("dblclick","onDoubleClick");ss("focusin","onFocus");ss("focusout","onBlur");ss(S1,"onTransitionEnd");No("onMouseEnter",["mouseout","mouseover"]);No("onMouseLeave",["mouseout","mouseover"]);No("onPointerEnter",["pointerout","pointerover"]);No("onPointerLeave",["pointerout","pointerover"]);zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function C0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,dy(i,e,void 0,t),t.currentTarget=null}function E1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;C0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;C0(r,a,c),s=l}}}if(Fc)throw t=bf,Fc=!1,bf=null,t}function $t(t,e){var n=e[kf];n===void 0&&(n=e[kf]=new Set);var i=t+"__bubble";n.has(i)||(T1(e,t,2,!1),n.add(i))}function ud(t,e,n){var i=0;e&&(i|=4),T1(n,t,i,e)}var Fl="_reactListening"+Math.random().toString(36).slice(2);function Ja(t){if(!t[Fl]){t[Fl]=!0,Iv.forEach(function(n){n!=="selectionchange"&&(h2.has(n)||ud(n,!1,t),ud(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fl]||(e[Fl]=!0,ud("selectionchange",!1,e))}}function T1(t,e,n,i){switch(l1(e)){case 1:var r=by;break;case 4:r=Cy;break;default:r=ap}n=r.bind(null,e,n,t),r=void 0,!Af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function dd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ts(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}qv(function(){var c=s,d=ip(n),f=[];e:{var h=w1.get(t);if(h!==void 0){var g=cp,y=t;switch(t){case"keypress":if(yc(n)===0)break e;case"keydown":case"keyup":g=Gy;break;case"focusin":y="focus",g=rd;break;case"focusout":y="blur",g=rd;break;case"beforeblur":case"afterblur":g=rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=g0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ly;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=jy;break;case x1:case y1:case M1:g=Ny;break;case S1:g=qy;break;case"scroll":g=Ry;break;case"wheel":g=Ky;break;case"copy":case"cut":case"paste":g=Fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=_0}var w=(e&4)!==0,_=!w&&t==="scroll",u=w?h!==null?h+"Capture":null:h;w=[];for(var v=c,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,u!==null&&(S=Xa(v,u),S!=null&&w.push(Za(v,S,x)))),_)break;v=v.return}0<w.length&&(h=new g(h,y,null,n,d),f.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Ef&&(y=n.relatedTarget||n.fromElement)&&(Ts(y)||y[wr]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?Ts(y):null,y!==null&&(_=Bs(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(w=g0,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(w=_0,S="onPointerLeave",u="onPointerEnter",v="pointer"),_=g==null?h:vo(g),x=y==null?h:vo(y),h=new w(S,v+"leave",g,n,d),h.target=_,h.relatedTarget=x,S=null,Ts(d)===c&&(w=new w(u,v+"enter",y,n,d),w.target=x,w.relatedTarget=_,S=w),_=S,g&&y)t:{for(w=g,u=y,v=0,x=w;x;x=Ks(x))v++;for(x=0,S=u;S;S=Ks(S))x++;for(;0<v-x;)w=Ks(w),v--;for(;0<x-v;)u=Ks(u),x--;for(;v--;){if(w===u||u!==null&&w===u.alternate)break t;w=Ks(w),u=Ks(u)}w=null}else w=null;g!==null&&R0(f,h,g,w,!1),y!==null&&_!==null&&R0(f,_,y,w,!0)}}e:{if(h=c?vo(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var R=i2;else if(M0(h))if(p1)R=a2;else{R=s2;var P=r2}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=o2);if(R&&(R=R(t,c))){h1(f,R,n,d);break e}P&&P(t,h,c),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&xf(h,"number",h.value)}switch(P=c?vo(c):window,t){case"focusin":(M0(P)||P.contentEditable==="true")&&(mo=P,Lf=c,Fa=null);break;case"focusout":Fa=Lf=mo=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,A0(f,n,d);break;case"selectionchange":if(u2)break;case"keydown":case"keyup":A0(f,n,d)}var L;if(dp)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else po?d1(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(u1&&n.locale!=="ko"&&(po||D!=="onCompositionStart"?D==="onCompositionEnd"&&po&&(L=c1()):(Gr=d,lp="value"in Gr?Gr.value:Gr.textContent,po=!0)),P=Hc(c,D),0<P.length&&(D=new v0(D,t,null,n,d),f.push({event:D,listeners:P}),L?D.data=L:(L=f1(n),L!==null&&(D.data=L)))),(L=Zy?Qy(t,n):e2(t,n))&&(c=Hc(c,"onBeforeInput"),0<c.length&&(d=new v0("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=L))}E1(f,e)})}function Za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Xa(t,n),s!=null&&i.unshift(Za(t,s,r)),s=Xa(t,e),s!=null&&i.push(Za(t,s,r))),t=t.return}return i}function Ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function R0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Xa(n,s),l!=null&&o.unshift(Za(n,l,a))):r||(l=Xa(n,s),l!=null&&o.push(Za(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var p2=/\r\n?/g,m2=/\u0000|\uFFFD/g;function P0(t){return(typeof t=="string"?t:""+t).replace(p2,`
`).replace(m2,"")}function kl(t,e,n){if(e=P0(e),P0(t)!==e&&n)throw Error(we(425))}function Vc(){}var Df=null,Nf=null;function Uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,g2=typeof clearTimeout=="function"?clearTimeout:void 0,L0=typeof Promise=="function"?Promise:void 0,v2=typeof queueMicrotask=="function"?queueMicrotask:typeof L0<"u"?function(t){return L0.resolve(null).then(t).catch(_2)}:Ff;function _2(t){setTimeout(function(){throw t})}function fd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),qa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);qa(e)}function qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function I0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qo=Math.random().toString(36).slice(2),er="__reactFiber$"+qo,Qa="__reactProps$"+qo,wr="__reactContainer$"+qo,kf="__reactEvents$"+qo,x2="__reactListeners$"+qo,y2="__reactHandles$"+qo;function Ts(t){var e=t[er];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wr]||n[er]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=I0(t);t!==null;){if(n=t[er])return n;t=I0(t)}return e}t=n,n=t.parentNode}return null}function pl(t){return t=t[er]||t[wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(we(33))}function pu(t){return t[Qa]||null}var Of=[],_o=-1;function os(t){return{current:t}}function Jt(t){0>_o||(t.current=Of[_o],Of[_o]=null,_o--)}function qt(t,e){_o++,Of[_o]=t.current,t.current=e}var ns={},qn=os(ns),ci=os(!1),Is=ns;function Uo(t,e){var n=t.type.contextTypes;if(!n)return ns;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ui(t){return t=t.childContextTypes,t!=null}function Gc(){Jt(ci),Jt(qn)}function D0(t,e,n){if(qn.current!==ns)throw Error(we(168));qt(qn,e),qt(ci,n)}function A1(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(we(108,ry(t)||"Unknown",r));return cn({},n,i)}function Wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ns,Is=qn.current,qt(qn,t),qt(ci,ci.current),!0}function N0(t,e,n){var i=t.stateNode;if(!i)throw Error(we(169));n?(t=A1(t,e,Is),i.__reactInternalMemoizedMergedChildContext=t,Jt(ci),Jt(qn),qt(qn,t)):Jt(ci),qt(ci,n)}var gr=null,mu=!1,hd=!1;function b1(t){gr===null?gr=[t]:gr.push(t)}function M2(t){mu=!0,b1(t)}function as(){if(!hd&&gr!==null){hd=!0;var t=0,e=Ot;try{var n=gr;for(Ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gr=null,mu=!1}catch(r){throw gr!==null&&(gr=gr.slice(t+1)),Zv(rp,as),r}finally{Ot=e,hd=!1}}return null}var xo=[],yo=0,Xc=null,jc=0,Ci=[],Ri=0,Ds=null,vr=1,_r="";function xs(t,e){xo[yo++]=jc,xo[yo++]=Xc,Xc=t,jc=e}function C1(t,e,n){Ci[Ri++]=vr,Ci[Ri++]=_r,Ci[Ri++]=Ds,Ds=t;var i=vr;t=_r;var r=32-ji(i)-1;i&=~(1<<r),n+=1;var s=32-ji(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,vr=1<<32-ji(e)+r|n<<r|i,_r=s+t}else vr=1<<s|n<<r|i,_r=t}function hp(t){t.return!==null&&(xs(t,1),C1(t,1,0))}function pp(t){for(;t===Xc;)Xc=xo[--yo],xo[yo]=null,jc=xo[--yo],xo[yo]=null;for(;t===Ds;)Ds=Ci[--Ri],Ci[Ri]=null,_r=Ci[--Ri],Ci[Ri]=null,vr=Ci[--Ri],Ci[Ri]=null}var yi=null,xi=null,nn=!1,Gi=null;function R1(t,e){var n=Pi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function U0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yi=t,xi=qr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yi=t,xi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ds!==null?{id:vr,overflow:_r}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yi=t,xi=null,!0):!1;default:return!1}}function zf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bf(t){if(nn){var e=xi;if(e){var n=e;if(!U0(t,e)){if(zf(t))throw Error(we(418));e=qr(n.nextSibling);var i=yi;e&&U0(t,e)?R1(i,n):(t.flags=t.flags&-4097|2,nn=!1,yi=t)}}else{if(zf(t))throw Error(we(418));t.flags=t.flags&-4097|2,nn=!1,yi=t}}}function F0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yi=t}function Ol(t){if(t!==yi)return!1;if(!nn)return F0(t),nn=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uf(t.type,t.memoizedProps)),e&&(e=xi)){if(zf(t))throw P1(),Error(we(418));for(;e;)R1(t,e),e=qr(e.nextSibling)}if(F0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(we(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xi=qr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xi=null}}else xi=yi?qr(t.stateNode.nextSibling):null;return!0}function P1(){for(var t=xi;t;)t=qr(t.nextSibling)}function Fo(){xi=yi=null,nn=!1}function mp(t){Gi===null?Gi=[t]:Gi.push(t)}var S2=Ar.ReactCurrentBatchConfig;function ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(we(309));var i=n.stateNode}if(!i)throw Error(we(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(we(284));if(!n._owner)throw Error(we(290,t))}return t}function zl(t,e){throw t=Object.prototype.toString.call(e),Error(we(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function k0(t){var e=t._init;return e(t._payload)}function L1(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Zr(u,v),u.index=0,u.sibling=null,u}function s(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=2,v):x):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,x,S){return v===null||v.tag!==6?(v=yd(x,u.mode,S),v.return=u,v):(v=r(v,x),v.return=u,v)}function l(u,v,x,S){var R=x.type;return R===ho?d(u,v,x.props.children,S,x.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Or&&k0(R)===v.type)?(S=r(v,x.props),S.ref=ma(u,v,x),S.return=u,S):(S=bc(x.type,x.key,x.props,null,u.mode,S),S.ref=ma(u,v,x),S.return=u,S)}function c(u,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Md(x,u.mode,S),v.return=u,v):(v=r(v,x.children||[]),v.return=u,v)}function d(u,v,x,S,R){return v===null||v.tag!==7?(v=Ls(x,u.mode,S,R),v.return=u,v):(v=r(v,x),v.return=u,v)}function f(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=yd(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Cl:return x=bc(v.type,v.key,v.props,null,u.mode,x),x.ref=ma(u,null,v),x.return=u,x;case fo:return v=Md(v,u.mode,x),v.return=u,v;case Or:var S=v._init;return f(u,S(v._payload),x)}if(Ca(v)||ua(v))return v=Ls(v,u.mode,x,null),v.return=u,v;zl(u,v)}return null}function h(u,v,x,S){var R=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:a(u,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Cl:return x.key===R?l(u,v,x,S):null;case fo:return x.key===R?c(u,v,x,S):null;case Or:return R=x._init,h(u,v,R(x._payload),S)}if(Ca(x)||ua(x))return R!==null?null:d(u,v,x,S,null);zl(u,x)}return null}function g(u,v,x,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(x)||null,a(v,u,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Cl:return u=u.get(S.key===null?x:S.key)||null,l(v,u,S,R);case fo:return u=u.get(S.key===null?x:S.key)||null,c(v,u,S,R);case Or:var P=S._init;return g(u,v,x,P(S._payload),R)}if(Ca(S)||ua(S))return u=u.get(x)||null,d(v,u,S,R,null);zl(v,S)}return null}function y(u,v,x,S){for(var R=null,P=null,L=v,D=v=0,E=null;L!==null&&D<x.length;D++){L.index>D?(E=L,L=null):E=L.sibling;var M=h(u,L,x[D],S);if(M===null){L===null&&(L=E);break}t&&L&&M.alternate===null&&e(u,L),v=s(M,v,D),P===null?R=M:P.sibling=M,P=M,L=E}if(D===x.length)return n(u,L),nn&&xs(u,D),R;if(L===null){for(;D<x.length;D++)L=f(u,x[D],S),L!==null&&(v=s(L,v,D),P===null?R=L:P.sibling=L,P=L);return nn&&xs(u,D),R}for(L=i(u,L);D<x.length;D++)E=g(L,u,D,x[D],S),E!==null&&(t&&E.alternate!==null&&L.delete(E.key===null?D:E.key),v=s(E,v,D),P===null?R=E:P.sibling=E,P=E);return t&&L.forEach(function(U){return e(u,U)}),nn&&xs(u,D),R}function w(u,v,x,S){var R=ua(x);if(typeof R!="function")throw Error(we(150));if(x=R.call(x),x==null)throw Error(we(151));for(var P=R=null,L=v,D=v=0,E=null,M=x.next();L!==null&&!M.done;D++,M=x.next()){L.index>D?(E=L,L=null):E=L.sibling;var U=h(u,L,M.value,S);if(U===null){L===null&&(L=E);break}t&&L&&U.alternate===null&&e(u,L),v=s(U,v,D),P===null?R=U:P.sibling=U,P=U,L=E}if(M.done)return n(u,L),nn&&xs(u,D),R;if(L===null){for(;!M.done;D++,M=x.next())M=f(u,M.value,S),M!==null&&(v=s(M,v,D),P===null?R=M:P.sibling=M,P=M);return nn&&xs(u,D),R}for(L=i(u,L);!M.done;D++,M=x.next())M=g(L,u,D,M.value,S),M!==null&&(t&&M.alternate!==null&&L.delete(M.key===null?D:M.key),v=s(M,v,D),P===null?R=M:P.sibling=M,P=M);return t&&L.forEach(function(G){return e(u,G)}),nn&&xs(u,D),R}function _(u,v,x,S){if(typeof x=="object"&&x!==null&&x.type===ho&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Cl:e:{for(var R=x.key,P=v;P!==null;){if(P.key===R){if(R=x.type,R===ho){if(P.tag===7){n(u,P.sibling),v=r(P,x.props.children),v.return=u,u=v;break e}}else if(P.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Or&&k0(R)===P.type){n(u,P.sibling),v=r(P,x.props),v.ref=ma(u,P,x),v.return=u,u=v;break e}n(u,P);break}else e(u,P);P=P.sibling}x.type===ho?(v=Ls(x.props.children,u.mode,S,x.key),v.return=u,u=v):(S=bc(x.type,x.key,x.props,null,u.mode,S),S.ref=ma(u,v,x),S.return=u,u=S)}return o(u);case fo:e:{for(P=x.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),v=r(v,x.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Md(x,u.mode,S),v.return=u,u=v}return o(u);case Or:return P=x._init,_(u,v,P(x._payload),S)}if(Ca(x))return y(u,v,x,S);if(ua(x))return w(u,v,x,S);zl(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,x),v.return=u,u=v):(n(u,v),v=yd(x,u.mode,S),v.return=u,u=v),o(u)):n(u,v)}return _}var ko=L1(!0),I1=L1(!1),Yc=os(null),qc=null,Mo=null,gp=null;function vp(){gp=Mo=qc=null}function _p(t){var e=Yc.current;Jt(Yc),t._currentValue=e}function Hf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ro(t,e){qc=t,gp=Mo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(li=!0),t.firstContext=null)}function Ii(t){var e=t._currentValue;if(gp!==t)if(t={context:t,memoizedValue:e,next:null},Mo===null){if(qc===null)throw Error(we(308));Mo=t,qc.dependencies={lanes:0,firstContext:t}}else Mo=Mo.next=t;return e}var As=null;function xp(t){As===null?As=[t]:As.push(t)}function D1(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,xp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Er(t,i)}function Er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zr=!1;function yp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function N1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $r(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Er(t,n)}return r=i.interleaved,r===null?(e.next=e,xp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Er(t,n)}function Mc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sp(t,n)}}function O0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $c(t,e,n,i){var r=t.updateQueue;zr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(h=e,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(g,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(g,f,h):y,h==null)break e;f=cn({},f,h);break e;case 2:zr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Us|=o,t.lanes=o,t.memoizedState=f}}function z0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(we(191,r));r.call(i)}}}var ml={},rr=os(ml),el=os(ml),tl=os(ml);function bs(t){if(t===ml)throw Error(we(174));return t}function Mp(t,e){switch(qt(tl,e),qt(el,t),qt(rr,ml),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mf(e,t)}Jt(rr),qt(rr,e)}function Oo(){Jt(rr),Jt(el),Jt(tl)}function U1(t){bs(tl.current);var e=bs(rr.current),n=Mf(e,t.type);e!==n&&(qt(el,t),qt(rr,n))}function Sp(t){el.current===t&&(Jt(rr),Jt(el))}var an=os(0);function Kc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pd=[];function wp(){for(var t=0;t<pd.length;t++)pd[t]._workInProgressVersionPrimary=null;pd.length=0}var Sc=Ar.ReactCurrentDispatcher,md=Ar.ReactCurrentBatchConfig,Ns=0,ln=null,wn=null,In=null,Jc=!1,ka=!1,nl=0,w2=0;function Vn(){throw Error(we(321))}function Ep(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$i(t[n],e[n]))return!1;return!0}function Tp(t,e,n,i,r,s){if(Ns=s,ln=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sc.current=t===null||t.memoizedState===null?b2:C2,t=n(i,r),ka){s=0;do{if(ka=!1,nl=0,25<=s)throw Error(we(301));s+=1,In=wn=null,e.updateQueue=null,Sc.current=R2,t=n(i,r)}while(ka)}if(Sc.current=Zc,e=wn!==null&&wn.next!==null,Ns=0,In=wn=ln=null,Jc=!1,e)throw Error(we(300));return t}function Ap(){var t=nl!==0;return nl=0,t}function Zi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return In===null?ln.memoizedState=In=t:In=In.next=t,In}function Di(){if(wn===null){var t=ln.alternate;t=t!==null?t.memoizedState:null}else t=wn.next;var e=In===null?ln.memoizedState:In.next;if(e!==null)In=e,wn=t;else{if(t===null)throw Error(we(310));wn=t,t={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},In===null?ln.memoizedState=In=t:In=In.next=t}return In}function il(t,e){return typeof e=="function"?e(t):e}function gd(t){var e=Di(),n=e.queue;if(n===null)throw Error(we(311));n.lastRenderedReducer=t;var i=wn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ns&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ln.lanes|=d,Us|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$i(i,e.memoizedState)||(li=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ln.lanes|=s,Us|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vd(t){var e=Di(),n=e.queue;if(n===null)throw Error(we(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$i(s,e.memoizedState)||(li=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function F1(){}function k1(t,e){var n=ln,i=Di(),r=e(),s=!$i(i.memoizedState,r);if(s&&(i.memoizedState=r,li=!0),i=i.queue,bp(B1.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||In!==null&&In.memoizedState.tag&1){if(n.flags|=2048,rl(9,z1.bind(null,n,i,r,e),void 0,null),Dn===null)throw Error(we(349));Ns&30||O1(n,e,r)}return r}function O1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ln.updateQueue,e===null?(e={lastEffect:null,stores:null},ln.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function z1(t,e,n,i){e.value=n,e.getSnapshot=i,H1(e)&&V1(t)}function B1(t,e,n){return n(function(){H1(e)&&V1(t)})}function H1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$i(t,n)}catch{return!0}}function V1(t){var e=Er(t,1);e!==null&&Yi(e,t,1,-1)}function B0(t){var e=Zi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:t},e.queue=t,t=t.dispatch=A2.bind(null,ln,t),[e.memoizedState,t]}function rl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ln.updateQueue,e===null?(e={lastEffect:null,stores:null},ln.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function G1(){return Di().memoizedState}function wc(t,e,n,i){var r=Zi();ln.flags|=t,r.memoizedState=rl(1|e,n,void 0,i===void 0?null:i)}function gu(t,e,n,i){var r=Di();i=i===void 0?null:i;var s=void 0;if(wn!==null){var o=wn.memoizedState;if(s=o.destroy,i!==null&&Ep(i,o.deps)){r.memoizedState=rl(e,n,s,i);return}}ln.flags|=t,r.memoizedState=rl(1|e,n,s,i)}function H0(t,e){return wc(8390656,8,t,e)}function bp(t,e){return gu(2048,8,t,e)}function W1(t,e){return gu(4,2,t,e)}function X1(t,e){return gu(4,4,t,e)}function j1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Y1(t,e,n){return n=n!=null?n.concat([t]):null,gu(4,4,j1.bind(null,e,t),n)}function Cp(){}function q1(t,e){var n=Di();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ep(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $1(t,e){var n=Di();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ep(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function K1(t,e,n){return Ns&21?($i(n,e)||(n=t1(),ln.lanes|=n,Us|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,li=!0),t.memoizedState=n)}function E2(t,e){var n=Ot;Ot=n!==0&&4>n?n:4,t(!0);var i=md.transition;md.transition={};try{t(!1),e()}finally{Ot=n,md.transition=i}}function J1(){return Di().memoizedState}function T2(t,e,n){var i=Jr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Z1(t))Q1(e,n);else if(n=D1(t,e,n,i),n!==null){var r=ei();Yi(n,t,i,r),e_(n,e,i)}}function A2(t,e,n){var i=Jr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z1(t))Q1(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$i(a,o)){var l=e.interleaved;l===null?(r.next=r,xp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=D1(t,e,r,i),n!==null&&(r=ei(),Yi(n,t,i,r),e_(n,e,i))}}function Z1(t){var e=t.alternate;return t===ln||e!==null&&e===ln}function Q1(t,e){ka=Jc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function e_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sp(t,n)}}var Zc={readContext:Ii,useCallback:Vn,useContext:Vn,useEffect:Vn,useImperativeHandle:Vn,useInsertionEffect:Vn,useLayoutEffect:Vn,useMemo:Vn,useReducer:Vn,useRef:Vn,useState:Vn,useDebugValue:Vn,useDeferredValue:Vn,useTransition:Vn,useMutableSource:Vn,useSyncExternalStore:Vn,useId:Vn,unstable_isNewReconciler:!1},b2={readContext:Ii,useCallback:function(t,e){return Zi().memoizedState=[t,e===void 0?null:e],t},useContext:Ii,useEffect:H0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wc(4194308,4,j1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wc(4194308,4,t,e)},useInsertionEffect:function(t,e){return wc(4,2,t,e)},useMemo:function(t,e){var n=Zi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=T2.bind(null,ln,t),[i.memoizedState,t]},useRef:function(t){var e=Zi();return t={current:t},e.memoizedState=t},useState:B0,useDebugValue:Cp,useDeferredValue:function(t){return Zi().memoizedState=t},useTransition:function(){var t=B0(!1),e=t[0];return t=E2.bind(null,t[1]),Zi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ln,r=Zi();if(nn){if(n===void 0)throw Error(we(407));n=n()}else{if(n=e(),Dn===null)throw Error(we(349));Ns&30||O1(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,H0(B1.bind(null,i,s,t),[t]),i.flags|=2048,rl(9,z1.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zi(),e=Dn.identifierPrefix;if(nn){var n=_r,i=vr;n=(i&~(1<<32-ji(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=nl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=w2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},C2={readContext:Ii,useCallback:q1,useContext:Ii,useEffect:bp,useImperativeHandle:Y1,useInsertionEffect:W1,useLayoutEffect:X1,useMemo:$1,useReducer:gd,useRef:G1,useState:function(){return gd(il)},useDebugValue:Cp,useDeferredValue:function(t){var e=Di();return K1(e,wn.memoizedState,t)},useTransition:function(){var t=gd(il)[0],e=Di().memoizedState;return[t,e]},useMutableSource:F1,useSyncExternalStore:k1,useId:J1,unstable_isNewReconciler:!1},R2={readContext:Ii,useCallback:q1,useContext:Ii,useEffect:bp,useImperativeHandle:Y1,useInsertionEffect:W1,useLayoutEffect:X1,useMemo:$1,useReducer:vd,useRef:G1,useState:function(){return vd(il)},useDebugValue:Cp,useDeferredValue:function(t){var e=Di();return wn===null?e.memoizedState=t:K1(e,wn.memoizedState,t)},useTransition:function(){var t=vd(il)[0],e=Di().memoizedState;return[t,e]},useMutableSource:F1,useSyncExternalStore:k1,useId:J1,unstable_isNewReconciler:!1};function Bi(t,e){if(t&&t.defaultProps){e=cn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:cn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vu={isMounted:function(t){return(t=t._reactInternals)?Bs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ei(),r=Jr(t),s=yr(i,r);s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,r),e!==null&&(Yi(e,t,r,i),Mc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ei(),r=Jr(t),s=yr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,r),e!==null&&(Yi(e,t,r,i),Mc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ei(),i=Jr(t),r=yr(n,i);r.tag=2,e!=null&&(r.callback=e),e=$r(t,r,i),e!==null&&(Yi(e,t,i,n),Mc(e,t,i))}};function V0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ka(n,i)||!Ka(r,s):!0}function t_(t,e,n){var i=!1,r=ns,s=e.contextType;return typeof s=="object"&&s!==null?s=Ii(s):(r=ui(e)?Is:qn.current,i=e.contextTypes,s=(i=i!=null)?Uo(t,r):ns),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function G0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function Gf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},yp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ii(s):(s=ui(e)?Is:qn.current,r.context=Uo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vu.enqueueReplaceState(r,r.state,null),$c(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function zo(t,e){try{var n="",i=e;do n+=iy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function _d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var P2=typeof WeakMap=="function"?WeakMap:Map;function n_(t,e,n){n=yr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){eu||(eu=!0,eh=i),Wf(t,e)},n}function i_(t,e,n){n=yr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Wf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wf(t,e),typeof i!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function W0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new P2;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=W2.bind(null,t,e,n),e.then(t,t))}function X0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function j0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yr(-1,1),e.tag=2,$r(n,e,1))),n.lanes|=1),t)}var L2=Ar.ReactCurrentOwner,li=!1;function Qn(t,e,n,i){e.child=t===null?I1(e,null,n,i):ko(e,t.child,n,i)}function Y0(t,e,n,i,r){n=n.render;var s=e.ref;return Ro(e,r),i=Tp(t,e,n,i,s,r),n=Ap(),t!==null&&!li?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Tr(t,e,r)):(nn&&n&&hp(e),e.flags|=1,Qn(t,e,i,r),e.child)}function q0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Fp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,r_(t,e,s,i,r)):(t=bc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ka,n(o,i)&&t.ref===e.ref)return Tr(t,e,r)}return e.flags|=1,t=Zr(s,i),t.ref=e.ref,t.return=e,e.child=t}function r_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ka(s,i)&&t.ref===e.ref)if(li=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(li=!0);else return e.lanes=t.lanes,Tr(t,e,r)}return Xf(t,e,n,i,r)}function s_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(wo,vi),vi|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,qt(wo,vi),vi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,qt(wo,vi),vi|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,qt(wo,vi),vi|=i;return Qn(t,e,r,n),e.child}function o_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xf(t,e,n,i,r){var s=ui(n)?Is:qn.current;return s=Uo(e,s),Ro(e,r),n=Tp(t,e,n,i,s,r),i=Ap(),t!==null&&!li?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Tr(t,e,r)):(nn&&i&&hp(e),e.flags|=1,Qn(t,e,n,r),e.child)}function $0(t,e,n,i,r){if(ui(n)){var s=!0;Wc(e)}else s=!1;if(Ro(e,r),e.stateNode===null)Ec(t,e),t_(e,n,i),Gf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ii(c):(c=ui(n)?Is:qn.current,c=Uo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&G0(e,o,i,c),zr=!1;var h=e.memoizedState;o.state=h,$c(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ci.current||zr?(typeof d=="function"&&(Vf(e,n,d,i),l=e.memoizedState),(a=zr||V0(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,N1(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Bi(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ii(l):(l=ui(n)?Is:qn.current,l=Uo(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&G0(e,o,i,l),zr=!1,h=e.memoizedState,o.state=h,$c(e,i,o,r);var y=e.memoizedState;a!==f||h!==y||ci.current||zr?(typeof g=="function"&&(Vf(e,n,g,i),y=e.memoizedState),(c=zr||V0(e,n,c,i,h,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return jf(t,e,n,i,s,r)}function jf(t,e,n,i,r,s){o_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&N0(e,n,!1),Tr(t,e,s);i=e.stateNode,L2.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ko(e,t.child,null,s),e.child=ko(e,null,a,s)):Qn(t,e,a,s),e.memoizedState=i.state,r&&N0(e,n,!0),e.child}function a_(t){var e=t.stateNode;e.pendingContext?D0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&D0(t,e.context,!1),Mp(t,e.containerInfo)}function K0(t,e,n,i,r){return Fo(),mp(r),e.flags|=256,Qn(t,e,n,i),e.child}var Yf={dehydrated:null,treeContext:null,retryLane:0};function qf(t){return{baseLanes:t,cachePool:null,transitions:null}}function l_(t,e,n){var i=e.pendingProps,r=an.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),qt(an,r&1),t===null)return Bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yu(o,i,0,null),t=Ls(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qf(n),e.memoizedState=Yf,t):Rp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return I2(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Zr(a,s):(s=Ls(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?qf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yf,i}return s=t.child,t=s.sibling,i=Zr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Rp(t,e){return e=yu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Bl(t,e,n,i){return i!==null&&mp(i),ko(e,t.child,null,n),t=Rp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function I2(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=_d(Error(we(422))),Bl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=yu({mode:"visible",children:i.children},r,0,null),s=Ls(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ko(e,t.child,null,o),e.child.memoizedState=qf(o),e.memoizedState=Yf,s);if(!(e.mode&1))return Bl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(we(419)),i=_d(s,i,void 0),Bl(t,e,o,i)}if(a=(o&t.childLanes)!==0,li||a){if(i=Dn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Er(t,r),Yi(i,t,r,-1))}return Up(),i=_d(Error(we(421))),Bl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=X2.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xi=qr(r.nextSibling),yi=e,nn=!0,Gi=null,t!==null&&(Ci[Ri++]=vr,Ci[Ri++]=_r,Ci[Ri++]=Ds,vr=t.id,_r=t.overflow,Ds=e),e=Rp(e,i.children),e.flags|=4096,e)}function J0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Hf(t.return,e,n)}function xd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function c_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qn(t,e,i.children,n),i=an.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&J0(t,n,e);else if(t.tag===19)J0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(qt(an,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),xd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}xd(e,!0,n,null,s);break;case"together":xd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ec(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Us|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(we(153));if(e.child!==null){for(t=e.child,n=Zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function D2(t,e,n){switch(e.tag){case 3:a_(e),Fo();break;case 5:U1(e);break;case 1:ui(e.type)&&Wc(e);break;case 4:Mp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;qt(Yc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(qt(an,an.current&1),e.flags|=128,null):n&e.child.childLanes?l_(t,e,n):(qt(an,an.current&1),t=Tr(t,e,n),t!==null?t.sibling:null);qt(an,an.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return c_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),qt(an,an.current),i)break;return null;case 22:case 23:return e.lanes=0,s_(t,e,n)}return Tr(t,e,n)}var u_,$f,d_,f_;u_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$f=function(){};d_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,bs(rr.current);var s=null;switch(n){case"input":r=vf(t,r),i=vf(t,i),s=[];break;case"select":r=cn({},r,{value:void 0}),i=cn({},i,{value:void 0}),s=[];break;case"textarea":r=yf(t,r),i=yf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Vc)}Sf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ga.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ga.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&$t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};f_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ga(t,e){if(!nn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function N2(t,e,n){var i=e.pendingProps;switch(pp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gn(e),null;case 1:return ui(e.type)&&Gc(),Gn(e),null;case 3:return i=e.stateNode,Oo(),Jt(ci),Jt(qn),wp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ol(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gi!==null&&(ih(Gi),Gi=null))),$f(t,e),Gn(e),null;case 5:Sp(e);var r=bs(tl.current);if(n=e.type,t!==null&&e.stateNode!=null)d_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(we(166));return Gn(e),null}if(t=bs(rr.current),Ol(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[er]=e,i[Qa]=s,t=(e.mode&1)!==0,n){case"dialog":$t("cancel",i),$t("close",i);break;case"iframe":case"object":case"embed":$t("load",i);break;case"video":case"audio":for(r=0;r<Pa.length;r++)$t(Pa[r],i);break;case"source":$t("error",i);break;case"img":case"image":case"link":$t("error",i),$t("load",i);break;case"details":$t("toggle",i);break;case"input":o0(i,s),$t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},$t("invalid",i);break;case"textarea":l0(i,s),$t("invalid",i)}Sf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&kl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&kl(i.textContent,a,t),r=["children",""+a]):Ga.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$t("scroll",i)}switch(n){case"input":Rl(i),a0(i,s,!0);break;case"textarea":Rl(i),c0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Vc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[er]=e,t[Qa]=i,u_(t,e,!1,!1),e.stateNode=t;e:{switch(o=wf(n,i),n){case"dialog":$t("cancel",t),$t("close",t),r=i;break;case"iframe":case"object":case"embed":$t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Pa.length;r++)$t(Pa[r],t);r=i;break;case"source":$t("error",t),r=i;break;case"img":case"image":case"link":$t("error",t),$t("load",t),r=i;break;case"details":$t("toggle",t),r=i;break;case"input":o0(t,i),r=vf(t,i),$t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=cn({},i,{value:void 0}),$t("invalid",t);break;case"textarea":l0(t,i),r=yf(t,i),$t("invalid",t);break;default:r=i}Sf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wa(t,l):typeof l=="number"&&Wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ga.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$t("scroll",t):l!=null&&Qh(t,s,l,o))}switch(n){case"input":Rl(t),a0(t,i,!1);break;case"textarea":Rl(t),c0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ts(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?To(t,!!i.multiple,s,!1):i.defaultValue!=null&&To(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Vc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gn(e),null;case 6:if(t&&e.stateNode!=null)f_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(we(166));if(n=bs(tl.current),bs(rr.current),Ol(e)){if(i=e.stateNode,n=e.memoizedProps,i[er]=e,(s=i.nodeValue!==n)&&(t=yi,t!==null))switch(t.tag){case 3:kl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&kl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[er]=e,e.stateNode=i}return Gn(e),null;case 13:if(Jt(an),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nn&&xi!==null&&e.mode&1&&!(e.flags&128))P1(),Fo(),e.flags|=98560,s=!1;else if(s=Ol(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(we(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(we(317));s[er]=e}else Fo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gn(e),s=!1}else Gi!==null&&(ih(Gi),Gi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||an.current&1?En===0&&(En=3):Up())),e.updateQueue!==null&&(e.flags|=4),Gn(e),null);case 4:return Oo(),$f(t,e),t===null&&Ja(e.stateNode.containerInfo),Gn(e),null;case 10:return _p(e.type._context),Gn(e),null;case 17:return ui(e.type)&&Gc(),Gn(e),null;case 19:if(Jt(an),s=e.memoizedState,s===null)return Gn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ga(s,!1);else{if(En!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kc(t),o!==null){for(e.flags|=128,ga(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return qt(an,an.current&1|2),e.child}t=t.sibling}s.tail!==null&&mn()>Bo&&(e.flags|=128,i=!0,ga(s,!1),e.lanes=4194304)}else{if(!i)if(t=Kc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ga(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!nn)return Gn(e),null}else 2*mn()-s.renderingStartTime>Bo&&n!==1073741824&&(e.flags|=128,i=!0,ga(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mn(),e.sibling=null,n=an.current,qt(an,i?n&1|2:n&1),e):(Gn(e),null);case 22:case 23:return Np(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vi&1073741824&&(Gn(e),e.subtreeFlags&6&&(e.flags|=8192)):Gn(e),null;case 24:return null;case 25:return null}throw Error(we(156,e.tag))}function U2(t,e){switch(pp(e),e.tag){case 1:return ui(e.type)&&Gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Oo(),Jt(ci),Jt(qn),wp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sp(e),null;case 13:if(Jt(an),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(we(340));Fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Jt(an),null;case 4:return Oo(),null;case 10:return _p(e.type._context),null;case 22:case 23:return Np(),null;case 24:return null;default:return null}}var Hl=!1,Yn=!1,F2=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function So(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){fn(t,e,i)}else n.current=null}function Kf(t,e,n){try{n()}catch(i){fn(t,e,i)}}var Z0=!1;function k2(t,e){if(Df=zc,t=v1(),fp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nf={focusedElem:t,selectionRange:n},zc=!1,Ve=e;Ve!==null;)if(e=Ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ve=t;else for(;Ve!==null;){e=Ve;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,_=y.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?w:Bi(e.type,w),_);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(we(163))}}catch(S){fn(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ve=t;break}Ve=e.return}return y=Z0,Z0=!1,y}function Oa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Kf(e,n,s)}r=r.next}while(r!==i)}}function _u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Jf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function h_(t){var e=t.alternate;e!==null&&(t.alternate=null,h_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[er],delete e[Qa],delete e[kf],delete e[x2],delete e[y2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p_(t){return t.tag===5||t.tag===3||t.tag===4}function Q0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vc));else if(i!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}function Qf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qf(t,e,n),t=t.sibling;t!==null;)Qf(t,e,n),t=t.sibling}var On=null,Vi=!1;function Pr(t,e,n){for(n=n.child;n!==null;)m_(t,e,n),n=n.sibling}function m_(t,e,n){if(ir&&typeof ir.onCommitFiberUnmount=="function")try{ir.onCommitFiberUnmount(uu,n)}catch{}switch(n.tag){case 5:Yn||So(n,e);case 6:var i=On,r=Vi;On=null,Pr(t,e,n),On=i,Vi=r,On!==null&&(Vi?(t=On,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):On.removeChild(n.stateNode));break;case 18:On!==null&&(Vi?(t=On,n=n.stateNode,t.nodeType===8?fd(t.parentNode,n):t.nodeType===1&&fd(t,n),qa(t)):fd(On,n.stateNode));break;case 4:i=On,r=Vi,On=n.stateNode.containerInfo,Vi=!0,Pr(t,e,n),On=i,Vi=r;break;case 0:case 11:case 14:case 15:if(!Yn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kf(n,e,o),r=r.next}while(r!==i)}Pr(t,e,n);break;case 1:if(!Yn&&(So(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){fn(n,e,a)}Pr(t,e,n);break;case 21:Pr(t,e,n);break;case 22:n.mode&1?(Yn=(i=Yn)||n.memoizedState!==null,Pr(t,e,n),Yn=i):Pr(t,e,n);break;default:Pr(t,e,n)}}function eg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new F2),e.forEach(function(i){var r=j2.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:On=a.stateNode,Vi=!1;break e;case 3:On=a.stateNode.containerInfo,Vi=!0;break e;case 4:On=a.stateNode.containerInfo,Vi=!0;break e}a=a.return}if(On===null)throw Error(we(160));m_(s,o,r),On=null,Vi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){fn(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g_(e,t),e=e.sibling}function g_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fi(e,t),Ji(t),i&4){try{Oa(3,t,t.return),_u(3,t)}catch(w){fn(t,t.return,w)}try{Oa(5,t,t.return)}catch(w){fn(t,t.return,w)}}break;case 1:Fi(e,t),Ji(t),i&512&&n!==null&&So(n,n.return);break;case 5:if(Fi(e,t),Ji(t),i&512&&n!==null&&So(n,n.return),t.flags&32){var r=t.stateNode;try{Wa(r,"")}catch(w){fn(t,t.return,w)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ov(r,s),wf(a,o);var c=wf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Gv(r,f):d==="dangerouslySetInnerHTML"?Hv(r,f):d==="children"?Wa(r,f):Qh(r,d,f,c)}switch(a){case"input":_f(r,s);break;case"textarea":zv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?To(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?To(r,!!s.multiple,s.defaultValue,!0):To(r,!!s.multiple,s.multiple?[]:"",!1))}r[Qa]=s}catch(w){fn(t,t.return,w)}}break;case 6:if(Fi(e,t),Ji(t),i&4){if(t.stateNode===null)throw Error(we(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(w){fn(t,t.return,w)}}break;case 3:if(Fi(e,t),Ji(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{qa(e.containerInfo)}catch(w){fn(t,t.return,w)}break;case 4:Fi(e,t),Ji(t);break;case 13:Fi(e,t),Ji(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ip=mn())),i&4&&eg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Yn=(c=Yn)||d,Fi(e,t),Yn=c):Fi(e,t),Ji(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ve=t,d=t.child;d!==null;){for(f=Ve=d;Ve!==null;){switch(h=Ve,g=h.child,h.tag){case 0:case 11:case 14:case 15:Oa(4,h,h.return);break;case 1:So(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){fn(i,n,w)}}break;case 5:So(h,h.return);break;case 22:if(h.memoizedState!==null){ng(f);continue}}g!==null?(g.return=h,Ve=g):ng(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vv("display",o))}catch(w){fn(t,t.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){fn(t,t.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fi(e,t),Ji(t),i&4&&eg(t);break;case 21:break;default:Fi(e,t),Ji(t)}}function Ji(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p_(n)){var i=n;break e}n=n.return}throw Error(we(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Wa(r,""),i.flags&=-33);var s=Q0(t);Qf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Q0(t);Zf(t,a,o);break;default:throw Error(we(161))}}catch(l){fn(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function O2(t,e,n){Ve=t,v_(t)}function v_(t,e,n){for(var i=(t.mode&1)!==0;Ve!==null;){var r=Ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Hl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yn;a=Hl;var c=Yn;if(Hl=o,(Yn=l)&&!c)for(Ve=r;Ve!==null;)o=Ve,l=o.child,o.tag===22&&o.memoizedState!==null?ig(r):l!==null?(l.return=o,Ve=l):ig(r);for(;s!==null;)Ve=s,v_(s),s=s.sibling;Ve=r,Hl=a,Yn=c}tg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ve=s):tg(t)}}function tg(t){for(;Ve!==null;){var e=Ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yn||_u(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&z0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}z0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&qa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(we(163))}Yn||e.flags&512&&Jf(e)}catch(h){fn(e,e.return,h)}}if(e===t){Ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ve=n;break}Ve=e.return}}function ng(t){for(;Ve!==null;){var e=Ve;if(e===t){Ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ve=n;break}Ve=e.return}}function ig(t){for(;Ve!==null;){var e=Ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_u(4,e)}catch(l){fn(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){fn(e,r,l)}}var s=e.return;try{Jf(e)}catch(l){fn(e,s,l)}break;case 5:var o=e.return;try{Jf(e)}catch(l){fn(e,o,l)}}}catch(l){fn(e,e.return,l)}if(e===t){Ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ve=a;break}Ve=e.return}}var z2=Math.ceil,Qc=Ar.ReactCurrentDispatcher,Pp=Ar.ReactCurrentOwner,Li=Ar.ReactCurrentBatchConfig,Ct=0,Dn=null,_n=null,zn=0,vi=0,wo=os(0),En=0,sl=null,Us=0,xu=0,Lp=0,za=null,ai=null,Ip=0,Bo=1/0,mr=null,eu=!1,eh=null,Kr=null,Vl=!1,Wr=null,tu=0,Ba=0,th=null,Tc=-1,Ac=0;function ei(){return Ct&6?mn():Tc!==-1?Tc:Tc=mn()}function Jr(t){return t.mode&1?Ct&2&&zn!==0?zn&-zn:S2.transition!==null?(Ac===0&&(Ac=t1()),Ac):(t=Ot,t!==0||(t=window.event,t=t===void 0?16:l1(t.type)),t):1}function Yi(t,e,n,i){if(50<Ba)throw Ba=0,th=null,Error(we(185));fl(t,n,i),(!(Ct&2)||t!==Dn)&&(t===Dn&&(!(Ct&2)&&(xu|=n),En===4&&Hr(t,zn)),di(t,i),n===1&&Ct===0&&!(e.mode&1)&&(Bo=mn()+500,mu&&as()))}function di(t,e){var n=t.callbackNode;Sy(t,e);var i=Oc(t,t===Dn?zn:0);if(i===0)n!==null&&f0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&f0(n),e===1)t.tag===0?M2(rg.bind(null,t)):b1(rg.bind(null,t)),v2(function(){!(Ct&6)&&as()}),n=null;else{switch(n1(i)){case 1:n=rp;break;case 4:n=Qv;break;case 16:n=kc;break;case 536870912:n=e1;break;default:n=kc}n=T_(n,__.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function __(t,e){if(Tc=-1,Ac=0,Ct&6)throw Error(we(327));var n=t.callbackNode;if(Po()&&t.callbackNode!==n)return null;var i=Oc(t,t===Dn?zn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=nu(t,i);else{e=i;var r=Ct;Ct|=2;var s=y_();(Dn!==t||zn!==e)&&(mr=null,Bo=mn()+500,Ps(t,e));do try{V2();break}catch(a){x_(t,a)}while(!0);vp(),Qc.current=s,Ct=r,_n!==null?e=0:(Dn=null,zn=0,e=En)}if(e!==0){if(e===2&&(r=Cf(t),r!==0&&(i=r,e=nh(t,r))),e===1)throw n=sl,Ps(t,0),Hr(t,i),di(t,mn()),n;if(e===6)Hr(t,i);else{if(r=t.current.alternate,!(i&30)&&!B2(r)&&(e=nu(t,i),e===2&&(s=Cf(t),s!==0&&(i=s,e=nh(t,s))),e===1))throw n=sl,Ps(t,0),Hr(t,i),di(t,mn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(we(345));case 2:ys(t,ai,mr);break;case 3:if(Hr(t,i),(i&130023424)===i&&(e=Ip+500-mn(),10<e)){if(Oc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ei(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ff(ys.bind(null,t,ai,mr),e);break}ys(t,ai,mr);break;case 4:if(Hr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ji(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=mn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*z2(i/1960))-i,10<i){t.timeoutHandle=Ff(ys.bind(null,t,ai,mr),i);break}ys(t,ai,mr);break;case 5:ys(t,ai,mr);break;default:throw Error(we(329))}}}return di(t,mn()),t.callbackNode===n?__.bind(null,t):null}function nh(t,e){var n=za;return t.current.memoizedState.isDehydrated&&(Ps(t,e).flags|=256),t=nu(t,e),t!==2&&(e=ai,ai=n,e!==null&&ih(e)),t}function ih(t){ai===null?ai=t:ai.push.apply(ai,t)}function B2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$i(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hr(t,e){for(e&=~Lp,e&=~xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ji(e),i=1<<n;t[n]=-1,e&=~i}}function rg(t){if(Ct&6)throw Error(we(327));Po();var e=Oc(t,0);if(!(e&1))return di(t,mn()),null;var n=nu(t,e);if(t.tag!==0&&n===2){var i=Cf(t);i!==0&&(e=i,n=nh(t,i))}if(n===1)throw n=sl,Ps(t,0),Hr(t,e),di(t,mn()),n;if(n===6)throw Error(we(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ys(t,ai,mr),di(t,mn()),null}function Dp(t,e){var n=Ct;Ct|=1;try{return t(e)}finally{Ct=n,Ct===0&&(Bo=mn()+500,mu&&as())}}function Fs(t){Wr!==null&&Wr.tag===0&&!(Ct&6)&&Po();var e=Ct;Ct|=1;var n=Li.transition,i=Ot;try{if(Li.transition=null,Ot=1,t)return t()}finally{Ot=i,Li.transition=n,Ct=e,!(Ct&6)&&as()}}function Np(){vi=wo.current,Jt(wo)}function Ps(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,g2(n)),_n!==null)for(n=_n.return;n!==null;){var i=n;switch(pp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gc();break;case 3:Oo(),Jt(ci),Jt(qn),wp();break;case 5:Sp(i);break;case 4:Oo();break;case 13:Jt(an);break;case 19:Jt(an);break;case 10:_p(i.type._context);break;case 22:case 23:Np()}n=n.return}if(Dn=t,_n=t=Zr(t.current,null),zn=vi=e,En=0,sl=null,Lp=xu=Us=0,ai=za=null,As!==null){for(e=0;e<As.length;e++)if(n=As[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}As=null}return t}function x_(t,e){do{var n=_n;try{if(vp(),Sc.current=Zc,Jc){for(var i=ln.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Jc=!1}if(Ns=0,In=wn=ln=null,ka=!1,nl=0,Pp.current=null,n===null||n.return===null){En=1,sl=e,_n=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=X0(o);if(g!==null){g.flags&=-257,j0(g,o,a,s,e),g.mode&1&&W0(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){W0(s,c,e),Up();break e}l=Error(we(426))}}else if(nn&&a.mode&1){var _=X0(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),j0(_,o,a,s,e),mp(zo(l,a));break e}}s=l=zo(l,a),En!==4&&(En=2),za===null?za=[s]:za.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=n_(s,l,e);O0(s,u);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Kr===null||!Kr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=i_(s,a,e);O0(s,S);break e}}s=s.return}while(s!==null)}S_(n)}catch(R){e=R,_n===n&&n!==null&&(_n=n=n.return);continue}break}while(!0)}function y_(){var t=Qc.current;return Qc.current=Zc,t===null?Zc:t}function Up(){(En===0||En===3||En===2)&&(En=4),Dn===null||!(Us&268435455)&&!(xu&268435455)||Hr(Dn,zn)}function nu(t,e){var n=Ct;Ct|=2;var i=y_();(Dn!==t||zn!==e)&&(mr=null,Ps(t,e));do try{H2();break}catch(r){x_(t,r)}while(!0);if(vp(),Ct=n,Qc.current=i,_n!==null)throw Error(we(261));return Dn=null,zn=0,En}function H2(){for(;_n!==null;)M_(_n)}function V2(){for(;_n!==null&&!hy();)M_(_n)}function M_(t){var e=E_(t.alternate,t,vi);t.memoizedProps=t.pendingProps,e===null?S_(t):_n=e,Pp.current=null}function S_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=U2(n,e),n!==null){n.flags&=32767,_n=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{En=6,_n=null;return}}else if(n=N2(n,e,vi),n!==null){_n=n;return}if(e=e.sibling,e!==null){_n=e;return}_n=e=t}while(e!==null);En===0&&(En=5)}function ys(t,e,n){var i=Ot,r=Li.transition;try{Li.transition=null,Ot=1,G2(t,e,n,i)}finally{Li.transition=r,Ot=i}return null}function G2(t,e,n,i){do Po();while(Wr!==null);if(Ct&6)throw Error(we(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(we(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(wy(t,s),t===Dn&&(_n=Dn=null,zn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vl||(Vl=!0,T_(kc,function(){return Po(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Li.transition,Li.transition=null;var o=Ot;Ot=1;var a=Ct;Ct|=4,Pp.current=null,k2(t,n),g_(n,t),c2(Nf),zc=!!Df,Nf=Df=null,t.current=n,O2(n),py(),Ct=a,Ot=o,Li.transition=s}else t.current=n;if(Vl&&(Vl=!1,Wr=t,tu=r),s=t.pendingLanes,s===0&&(Kr=null),vy(n.stateNode),di(t,mn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(eu)throw eu=!1,t=eh,eh=null,t;return tu&1&&t.tag!==0&&Po(),s=t.pendingLanes,s&1?t===th?Ba++:(Ba=0,th=t):Ba=0,as(),null}function Po(){if(Wr!==null){var t=n1(tu),e=Li.transition,n=Ot;try{if(Li.transition=null,Ot=16>t?16:t,Wr===null)var i=!1;else{if(t=Wr,Wr=null,tu=0,Ct&6)throw Error(we(331));var r=Ct;for(Ct|=4,Ve=t.current;Ve!==null;){var s=Ve,o=s.child;if(Ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ve=c;Ve!==null;){var d=Ve;switch(d.tag){case 0:case 11:case 15:Oa(8,d,s)}var f=d.child;if(f!==null)f.return=d,Ve=f;else for(;Ve!==null;){d=Ve;var h=d.sibling,g=d.return;if(h_(d),d===c){Ve=null;break}if(h!==null){h.return=g,Ve=h;break}Ve=g}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}Ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ve=o;else e:for(;Ve!==null;){if(s=Ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ve=u;break e}Ve=s.return}}var v=t.current;for(Ve=v;Ve!==null;){o=Ve;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ve=x;else e:for(o=v;Ve!==null;){if(a=Ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_u(9,a)}}catch(R){fn(a,a.return,R)}if(a===o){Ve=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ve=S;break e}Ve=a.return}}if(Ct=r,as(),ir&&typeof ir.onPostCommitFiberRoot=="function")try{ir.onPostCommitFiberRoot(uu,t)}catch{}i=!0}return i}finally{Ot=n,Li.transition=e}}return!1}function sg(t,e,n){e=zo(n,e),e=n_(t,e,1),t=$r(t,e,1),e=ei(),t!==null&&(fl(t,1,e),di(t,e))}function fn(t,e,n){if(t.tag===3)sg(t,t,n);else for(;e!==null;){if(e.tag===3){sg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Kr===null||!Kr.has(i))){t=zo(n,t),t=i_(e,t,1),e=$r(e,t,1),t=ei(),e!==null&&(fl(e,1,t),di(e,t));break}}e=e.return}}function W2(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ei(),t.pingedLanes|=t.suspendedLanes&n,Dn===t&&(zn&n)===n&&(En===4||En===3&&(zn&130023424)===zn&&500>mn()-Ip?Ps(t,0):Lp|=n),di(t,e)}function w_(t,e){e===0&&(t.mode&1?(e=Il,Il<<=1,!(Il&130023424)&&(Il=4194304)):e=1);var n=ei();t=Er(t,e),t!==null&&(fl(t,e,n),di(t,n))}function X2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),w_(t,n)}function j2(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(we(314))}i!==null&&i.delete(e),w_(t,n)}var E_;E_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ci.current)li=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return li=!1,D2(t,e,n);li=!!(t.flags&131072)}else li=!1,nn&&e.flags&1048576&&C1(e,jc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ec(t,e),t=e.pendingProps;var r=Uo(e,qn.current);Ro(e,n),r=Tp(null,e,i,t,r,n);var s=Ap();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ui(i)?(s=!0,Wc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yp(e),r.updater=vu,e.stateNode=r,r._reactInternals=e,Gf(e,i,t,n),e=jf(null,e,i,!0,s,n)):(e.tag=0,nn&&s&&hp(e),Qn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ec(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=q2(i),t=Bi(i,t),r){case 0:e=Xf(null,e,i,t,n);break e;case 1:e=$0(null,e,i,t,n);break e;case 11:e=Y0(null,e,i,t,n);break e;case 14:e=q0(null,e,i,Bi(i.type,t),n);break e}throw Error(we(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bi(i,r),Xf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bi(i,r),$0(t,e,i,r,n);case 3:e:{if(a_(e),t===null)throw Error(we(387));i=e.pendingProps,s=e.memoizedState,r=s.element,N1(t,e),$c(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=zo(Error(we(423)),e),e=K0(t,e,i,n,r);break e}else if(i!==r){r=zo(Error(we(424)),e),e=K0(t,e,i,n,r);break e}else for(xi=qr(e.stateNode.containerInfo.firstChild),yi=e,nn=!0,Gi=null,n=I1(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fo(),i===r){e=Tr(t,e,n);break e}Qn(t,e,i,n)}e=e.child}return e;case 5:return U1(e),t===null&&Bf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Uf(i,r)?o=null:s!==null&&Uf(i,s)&&(e.flags|=32),o_(t,e),Qn(t,e,o,n),e.child;case 6:return t===null&&Bf(e),null;case 13:return l_(t,e,n);case 4:return Mp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ko(e,null,i,n):Qn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bi(i,r),Y0(t,e,i,r,n);case 7:return Qn(t,e,e.pendingProps,n),e.child;case 8:return Qn(t,e,e.pendingProps.children,n),e.child;case 12:return Qn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,qt(Yc,i._currentValue),i._currentValue=o,s!==null)if($i(s.value,o)){if(s.children===r.children&&!ci.current){e=Tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Hf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(we(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ro(e,n),r=Ii(r),i=i(r),e.flags|=1,Qn(t,e,i,n),e.child;case 14:return i=e.type,r=Bi(i,e.pendingProps),r=Bi(i.type,r),q0(t,e,i,r,n);case 15:return r_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bi(i,r),Ec(t,e),e.tag=1,ui(i)?(t=!0,Wc(e)):t=!1,Ro(e,n),t_(e,i,r),Gf(e,i,r,n),jf(null,e,i,!0,t,n);case 19:return c_(t,e,n);case 22:return s_(t,e,n)}throw Error(we(156,e.tag))};function T_(t,e){return Zv(t,e)}function Y2(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pi(t,e,n,i){return new Y2(t,e,n,i)}function Fp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function q2(t){if(typeof t=="function")return Fp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tp)return 11;if(t===np)return 14}return 2}function Zr(t,e){var n=t.alternate;return n===null?(n=Pi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Fp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ho:return Ls(n.children,r,s,e);case ep:o=8,r|=8;break;case hf:return t=Pi(12,n,e,r|2),t.elementType=hf,t.lanes=s,t;case pf:return t=Pi(13,n,e,r),t.elementType=pf,t.lanes=s,t;case mf:return t=Pi(19,n,e,r),t.elementType=mf,t.lanes=s,t;case Uv:return yu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dv:o=10;break e;case Nv:o=9;break e;case tp:o=11;break e;case np:o=14;break e;case Or:o=16,i=null;break e}throw Error(we(130,t==null?t:typeof t,""))}return e=Pi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ls(t,e,n,i){return t=Pi(7,t,i,e),t.lanes=n,t}function yu(t,e,n,i){return t=Pi(22,t,i,e),t.elementType=Uv,t.lanes=n,t.stateNode={isHidden:!1},t}function yd(t,e,n){return t=Pi(6,t,null,e),t.lanes=n,t}function Md(t,e,n){return e=Pi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $2(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=td(0),this.expirationTimes=td(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=td(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kp(t,e,n,i,r,s,o,a,l){return t=new $2(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yp(s),t}function K2(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function A_(t){if(!t)return ns;t=t._reactInternals;e:{if(Bs(t)!==t||t.tag!==1)throw Error(we(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ui(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(we(171))}if(t.tag===1){var n=t.type;if(ui(n))return A1(t,n,e)}return e}function b_(t,e,n,i,r,s,o,a,l){return t=kp(n,i,!0,t,r,s,o,a,l),t.context=A_(null),n=t.current,i=ei(),r=Jr(n),s=yr(i,r),s.callback=e??null,$r(n,s,r),t.current.lanes=r,fl(t,r,i),di(t,i),t}function Mu(t,e,n,i){var r=e.current,s=ei(),o=Jr(r);return n=A_(n),e.context===null?e.context=n:e.pendingContext=n,e=yr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=$r(r,e,o),t!==null&&(Yi(t,r,o,s),Mc(t,r,o)),o}function iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function og(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Op(t,e){og(t,e),(t=t.alternate)&&og(t,e)}function J2(){return null}var C_=typeof reportError=="function"?reportError:function(t){console.error(t)};function zp(t){this._internalRoot=t}Su.prototype.render=zp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(we(409));Mu(t,e,null,null)};Su.prototype.unmount=zp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fs(function(){Mu(null,t,null,null)}),e[wr]=null}};function Su(t){this._internalRoot=t}Su.prototype.unstable_scheduleHydration=function(t){if(t){var e=s1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Br.length&&e!==0&&e<Br[n].priority;n++);Br.splice(n,0,t),n===0&&a1(t)}};function Bp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ag(){}function Z2(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=iu(o);s.call(c)}}var o=b_(e,i,t,0,null,!1,!1,"",ag);return t._reactRootContainer=o,t[wr]=o.current,Ja(t.nodeType===8?t.parentNode:t),Fs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=iu(l);a.call(c)}}var l=kp(t,0,!1,null,null,!1,!1,"",ag);return t._reactRootContainer=l,t[wr]=l.current,Ja(t.nodeType===8?t.parentNode:t),Fs(function(){Mu(e,l,n,i)}),l}function Eu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=iu(o);a.call(l)}}Mu(e,o,t,r)}else o=Z2(n,e,t,r,i);return iu(o)}i1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ra(e.pendingLanes);n!==0&&(sp(e,n|1),di(e,mn()),!(Ct&6)&&(Bo=mn()+500,as()))}break;case 13:Fs(function(){var i=Er(t,1);if(i!==null){var r=ei();Yi(i,t,1,r)}}),Op(t,1)}};op=function(t){if(t.tag===13){var e=Er(t,134217728);if(e!==null){var n=ei();Yi(e,t,134217728,n)}Op(t,134217728)}};r1=function(t){if(t.tag===13){var e=Jr(t),n=Er(t,e);if(n!==null){var i=ei();Yi(n,t,e,i)}Op(t,e)}};s1=function(){return Ot};o1=function(t,e){var n=Ot;try{return Ot=t,e()}finally{Ot=n}};Tf=function(t,e,n){switch(e){case"input":if(_f(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=pu(i);if(!r)throw Error(we(90));kv(i),_f(i,r)}}}break;case"textarea":zv(t,n);break;case"select":e=n.value,e!=null&&To(t,!!n.multiple,e,!1)}};jv=Dp;Yv=Fs;var Q2={usingClientEntryPoint:!1,Events:[pl,vo,pu,Wv,Xv,Dp]},va={findFiberByHostInstance:Ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eM={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Kv(t),t===null?null:t.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||J2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gl.isDisabled&&Gl.supportsFiber)try{uu=Gl.inject(eM),ir=Gl}catch{}}Si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q2;Si.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bp(e))throw Error(we(200));return K2(t,e,null,n)};Si.createRoot=function(t,e){if(!Bp(t))throw Error(we(299));var n=!1,i="",r=C_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kp(t,1,!1,null,null,n,!1,i,r),t[wr]=e.current,Ja(t.nodeType===8?t.parentNode:t),new zp(e)};Si.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(we(188)):(t=Object.keys(t).join(","),Error(we(268,t)));return t=Kv(e),t=t===null?null:t.stateNode,t};Si.flushSync=function(t){return Fs(t)};Si.hydrate=function(t,e,n){if(!wu(e))throw Error(we(200));return Eu(null,t,e,!0,n)};Si.hydrateRoot=function(t,e,n){if(!Bp(t))throw Error(we(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=C_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=b_(e,null,t,1,n??null,r,!1,s,o),t[wr]=e.current,Ja(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Su(e)};Si.render=function(t,e,n){if(!wu(e))throw Error(we(200));return Eu(null,t,e,!1,n)};Si.unmountComponentAtNode=function(t){if(!wu(t))throw Error(we(40));return t._reactRootContainer?(Fs(function(){Eu(null,null,t,!1,function(){t._reactRootContainer=null,t[wr]=null})}),!0):!1};Si.unstable_batchedUpdates=Dp;Si.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!wu(n))throw Error(we(200));if(t==null||t._reactInternals===void 0)throw Error(we(38));return Eu(t,e,n,!1,i)};Si.version="18.3.1-next-f1338f8080-20240426";function R_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R_)}catch(t){console.error(t)}}R_(),Rv.exports=Si;var tM=Rv.exports,P_,lg=tM;P_=lg.createRoot,lg.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hp="180",nM=0,cg=1,iM=2,L_=1,I_=2,pr=3,is=0,fi=1,Kt=2,Qr=0,Lo=1,ug=2,dg=3,fg=4,rM=5,ws=100,sM=101,oM=102,aM=103,lM=104,cM=200,uM=201,dM=202,fM=203,rh=204,sh=205,hM=206,pM=207,mM=208,gM=209,vM=210,_M=211,xM=212,yM=213,MM=214,oh=0,ah=1,lh=2,Ho=3,ch=4,uh=5,dh=6,fh=7,Vp=0,SM=1,wM=2,es=0,EM=1,TM=2,AM=3,D_=4,bM=5,CM=6,RM=7,N_=300,Vo=301,Go=302,hh=303,ph=304,Tu=306,Io=1e3,Cs=1001,mh=1002,qi=1003,PM=1004,Wl=1005,tr=1006,Sd=1007,Rs=1008,or=1009,U_=1010,F_=1011,ol=1012,Gp=1013,ks=1014,xr=1015,gl=1016,Wp=1017,Xp=1018,al=1020,k_=35902,O_=35899,z_=1021,B_=1022,Xi=1023,ll=1026,cl=1027,H_=1028,jp=1029,V_=1030,Yp=1031,qp=1033,Cc=33776,Rc=33777,Pc=33778,Lc=33779,gh=35840,vh=35841,_h=35842,xh=35843,yh=36196,Mh=37492,Sh=37496,wh=37808,Eh=37809,Th=37810,Ah=37811,bh=37812,Ch=37813,Rh=37814,Ph=37815,Lh=37816,Ih=37817,Dh=37818,Nh=37819,Uh=37820,Fh=37821,kh=36492,Oh=36494,zh=36495,Bh=36283,Hh=36284,Vh=36285,Gh=36286,LM=3200,IM=3201,$p=0,DM=1,Vr="",jn="srgb",Wo="srgb-linear",ru="linear",Bt="srgb",Js=7680,hg=519,NM=512,UM=513,FM=514,G_=515,kM=516,OM=517,zM=518,BM=519,pg=35044,mg="300 es",nr=2e3,su=2001;class $o{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wd=Math.PI/180,Wh=180/Math.PI;function vl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wn[t&255]+Wn[t>>8&255]+Wn[t>>16&255]+Wn[t>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[i&255]+Wn[i>>8&255]+Wn[i>>16&255]+Wn[i>>24&255]).toLowerCase()}function Mt(t,e,n){return Math.max(e,Math.min(n,t))}function HM(t,e){return(t%e+e)%e}function Ed(t,e,n){return(1-n)*t+n*e}function _a(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function si(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _l{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],g=s[o+1],y=s[o+2],w=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=y,e[n+3]=w;return}if(f!==w||l!==h||c!==g||d!==y){let _=1-a;const u=l*h+c*g+d*y+f*w,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const R=Math.sqrt(x),P=Math.atan2(R,u*v);_=Math.sin(_*P)/R,a=Math.sin(a*P)/R}const S=a*v;if(l=l*_+h*S,c=c*_+g*S,d=d*_+y*S,f=f*_+w*S,_===1-a){const R=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=R,c*=R,d*=R,f*=R}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],g=s[o+2],y=s[o+3];return e[n]=a*y+d*f+l*g-c*h,e[n+1]=l*y+d*h+c*f-a*g,e[n+2]=c*y+d*g+a*h-l*f,e[n+3]=d*y-a*f-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),g=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*g*y,this._y=c*g*f-h*d*y,this._z=c*d*y+h*g*f,this._w=c*d*f-h*g*y;break;case"YXZ":this._x=h*d*f+c*g*y,this._y=c*g*f-h*d*y,this._z=c*d*y-h*g*f,this._w=c*d*f+h*g*y;break;case"ZXY":this._x=h*d*f-c*g*y,this._y=c*g*f+h*d*y,this._z=c*d*y+h*g*f,this._w=c*d*f-h*g*y;break;case"ZYX":this._x=h*d*f-c*g*y,this._y=c*g*f+h*d*y,this._z=c*d*y-h*g*f,this._w=c*d*f+h*g*y;break;case"YZX":this._x=h*d*f+c*g*y,this._y=c*g*f+h*d*y,this._z=c*d*y-h*g*f,this._w=c*d*f-h*g*y;break;case"XZY":this._x=h*d*f-c*g*y,this._y=c*g*f-h*d*y,this._z=c*d*y+h*g*f,this._w=c*d*f+h*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Td.copy(this).projectOnVector(e),this.sub(Td)}reflect(e){return this.sub(Td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Td=new B,gg=new _l;class mt{constructor(e,n,i,r,s,o,a,l,c){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],g=i[5],y=i[8],w=r[0],_=r[3],u=r[6],v=r[1],x=r[4],S=r[7],R=r[2],P=r[5],L=r[8];return s[0]=o*w+a*v+l*R,s[3]=o*_+a*x+l*P,s[6]=o*u+a*S+l*L,s[1]=c*w+d*v+f*R,s[4]=c*_+d*x+f*P,s[7]=c*u+d*S+f*L,s[2]=h*w+g*v+y*R,s[5]=h*_+g*x+y*P,s[8]=h*u+g*S+y*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,g=c*s-o*l,y=n*f+i*h+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=f*w,e[1]=(r*c-d*i)*w,e[2]=(a*i-r*o)*w,e[3]=h*w,e[4]=(d*n-r*l)*w,e[5]=(r*s-a*n)*w,e[6]=g*w,e[7]=(i*l-c*n)*w,e[8]=(o*n-i*s)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ad.makeScale(e,n)),this}rotate(e){return this.premultiply(Ad.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ad.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ad=new mt;function W_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ou(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function VM(){const t=ou("canvas");return t.style.display="block",t}const vg={};function ul(t){t in vg||(vg[t]=!0,console.warn(t))}function GM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const _g=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xg=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WM(){const t={enabled:!0,workingColorSpace:Wo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Bt&&(r.r=Mr(r.r),r.g=Mr(r.g),r.b=Mr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Bt&&(r.r=Do(r.r),r.g=Do(r.g),r.b=Do(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vr?ru:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ul("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ul("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Wo]:{primaries:e,whitePoint:i,transfer:ru,toXYZ:_g,fromXYZ:xg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:i,transfer:Bt,toXYZ:_g,fromXYZ:xg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),t}const Lt=WM();function Mr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Do(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Zs;class XM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zs===void 0&&(Zs=ou("canvas")),Zs.width=e.width,Zs.height=e.height;const r=Zs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Zs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ou("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Mr(n[i]/255)*255):n[i]=Mr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jM=0;class Kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=vl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bd(r[o].image)):s.push(bd(r[o]))}else s=bd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function bd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?XM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YM=0;const Cd=new B;class ti extends $o{constructor(e=ti.DEFAULT_IMAGE,n=ti.DEFAULT_MAPPING,i=Cs,r=Cs,s=tr,o=Rs,a=Xi,l=or,c=ti.DEFAULT_ANISOTROPY,d=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=vl(),this.name="",this.source=new Kp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cd).x}get height(){return this.source.getSize(Cd).y}get depth(){return this.source.getSize(Cd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==N_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Io:e.x=e.x-Math.floor(e.x);break;case Cs:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Io:e.y=e.y-Math.floor(e.y);break;case Cs:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=N_;ti.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],g=l[5],y=l[9],w=l[2],_=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-w)<.01&&Math.abs(y-_)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+w)<.1&&Math.abs(y+_)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(g+1)/2,R=(u+1)/2,P=(d+h)/4,L=(f+w)/4,D=(y+_)/4;return x>S&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=P/i,s=L/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=P/r,s=D/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=L/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((_-y)*(_-y)+(f-w)*(f-w)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(_-y)/v,this.y=(f-w)/v,this.z=(h-d)/v,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qM extends $o{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new ti(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:tr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Kp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends qM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class X_ extends ti{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qi,this.minFilter=qi,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $M extends ti{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qi,this.minFilter=qi,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xl{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ki.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ki.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ki.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ki):ki.fromBufferAttribute(s,o),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xl.copy(i.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),jl.subVectors(this.max,xa),Qs.subVectors(e.a,xa),eo.subVectors(e.b,xa),to.subVectors(e.c,xa),Lr.subVectors(eo,Qs),Ir.subVectors(to,eo),fs.subVectors(Qs,to);let n=[0,-Lr.z,Lr.y,0,-Ir.z,Ir.y,0,-fs.z,fs.y,Lr.z,0,-Lr.x,Ir.z,0,-Ir.x,fs.z,0,-fs.x,-Lr.y,Lr.x,0,-Ir.y,Ir.x,0,-fs.y,fs.x,0];return!Rd(n,Qs,eo,to,jl)||(n=[1,0,0,0,1,0,0,0,1],!Rd(n,Qs,eo,to,jl))?!1:(Yl.crossVectors(Lr,Ir),n=[Yl.x,Yl.y,Yl.z],Rd(n,Qs,eo,to,jl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const lr=[new B,new B,new B,new B,new B,new B,new B,new B],ki=new B,Xl=new xl,Qs=new B,eo=new B,to=new B,Lr=new B,Ir=new B,fs=new B,xa=new B,jl=new B,Yl=new B,hs=new B;function Rd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){hs.fromArray(t,s);const a=r.x*Math.abs(hs.x)+r.y*Math.abs(hs.y)+r.z*Math.abs(hs.z),l=e.dot(hs),c=n.dot(hs),d=i.dot(hs);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const KM=new xl,ya=new B,Pd=new B;class Au{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):KM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);const n=ya.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ya,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(Pd)),this.expandByPoint(ya.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const cr=new B,Ld=new B,ql=new B,Dr=new B,Id=new B,$l=new B,Dd=new B;class Jp{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=cr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,n),cr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ld.copy(e).add(n).multiplyScalar(.5),ql.copy(n).sub(e).normalize(),Dr.copy(this.origin).sub(Ld);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ql),a=Dr.dot(this.direction),l=-Dr.dot(ql),c=Dr.lengthSq(),d=Math.abs(1-o*o);let f,h,g,y;if(d>0)if(f=o*l-a,h=o*a-l,y=s*d,f>=0)if(h>=-y)if(h<=y){const w=1/d;f*=w,h*=w,g=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h<=-y?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c):h<=y?(f=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ld).addScaledVector(ql,h),g}intersectSphere(e,n){cr.subVectors(e.center,this.origin);const i=cr.dot(this.direction),r=cr.dot(cr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,n,i,r,s){Id.subVectors(n,e),$l.subVectors(i,e),Dd.crossVectors(Id,$l);let o=this.direction.dot(Dd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dr.subVectors(this.origin,e);const l=a*this.direction.dot($l.crossVectors(Dr,$l));if(l<0)return null;const c=a*this.direction.dot(Id.cross(Dr));if(c<0||l+c>o)return null;const d=-a*Dr.dot(Dd);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,n,i,r,s,o,a,l,c,d,f,h,g,y,w,_){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,g,y,w,_)}set(e,n,i,r,s,o,a,l,c,d,f,h,g,y,w,_){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=g,u[7]=y,u[11]=w,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/no.setFromMatrixColumn(e,0).length(),s=1/no.setFromMatrixColumn(e,1).length(),o=1/no.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,g=o*f,y=a*d,w=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+y*c,n[5]=h-w*c,n[9]=-a*l,n[2]=w-h*c,n[6]=y+g*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,g=l*f,y=c*d,w=c*f;n[0]=h+w*a,n[4]=y*a-g,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=g*a-y,n[6]=w+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,g=l*f,y=c*d,w=c*f;n[0]=h-w*a,n[4]=-o*f,n[8]=y+g*a,n[1]=g+y*a,n[5]=o*d,n[9]=w-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,g=o*f,y=a*d,w=a*f;n[0]=l*d,n[4]=y*c-g,n[8]=h*c+w,n[1]=l*f,n[5]=w*c+h,n[9]=g*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*c,y=a*l,w=a*c;n[0]=l*d,n[4]=w-h*f,n[8]=y*f+g,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*f+y,n[10]=h-w*f}else if(e.order==="XZY"){const h=o*l,g=o*c,y=a*l,w=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+w,n[5]=o*d,n[9]=g*f-y,n[2]=y*f-g,n[6]=a*d,n[10]=w*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JM,e,ZM)}lookAt(e,n,i){const r=this.elements;return mi.subVectors(e,n),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Nr.crossVectors(i,mi),Nr.lengthSq()===0&&(Math.abs(i.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Nr.crossVectors(i,mi)),Nr.normalize(),Kl.crossVectors(mi,Nr),r[0]=Nr.x,r[4]=Kl.x,r[8]=mi.x,r[1]=Nr.y,r[5]=Kl.y,r[9]=mi.y,r[2]=Nr.z,r[6]=Kl.z,r[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],g=i[13],y=i[2],w=i[6],_=i[10],u=i[14],v=i[3],x=i[7],S=i[11],R=i[15],P=r[0],L=r[4],D=r[8],E=r[12],M=r[1],U=r[5],G=r[9],te=r[13],ae=r[2],ue=r[6],H=r[10],K=r[14],F=r[3],ne=r[7],se=r[11],Ee=r[15];return s[0]=o*P+a*M+l*ae+c*F,s[4]=o*L+a*U+l*ue+c*ne,s[8]=o*D+a*G+l*H+c*se,s[12]=o*E+a*te+l*K+c*Ee,s[1]=d*P+f*M+h*ae+g*F,s[5]=d*L+f*U+h*ue+g*ne,s[9]=d*D+f*G+h*H+g*se,s[13]=d*E+f*te+h*K+g*Ee,s[2]=y*P+w*M+_*ae+u*F,s[6]=y*L+w*U+_*ue+u*ne,s[10]=y*D+w*G+_*H+u*se,s[14]=y*E+w*te+_*K+u*Ee,s[3]=v*P+x*M+S*ae+R*F,s[7]=v*L+x*U+S*ue+R*ne,s[11]=v*D+x*G+S*H+R*se,s[15]=v*E+x*te+S*K+R*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],g=e[14],y=e[3],w=e[7],_=e[11],u=e[15];return y*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*g-i*l*g)+w*(+n*l*g-n*c*h+s*o*h-r*o*g+r*c*d-s*l*d)+_*(+n*c*f-n*a*g-s*o*f+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],g=e[11],y=e[12],w=e[13],_=e[14],u=e[15],v=f*_*c-w*h*c+w*l*g-a*_*g-f*l*u+a*h*u,x=y*h*c-d*_*c-y*l*g+o*_*g+d*l*u-o*h*u,S=d*w*c-y*f*c+y*a*g-o*w*g-d*a*u+o*f*u,R=y*f*l-d*w*l-y*a*h+o*w*h+d*a*_-o*f*_,P=n*v+i*x+r*S+s*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=v*L,e[1]=(w*h*s-f*_*s-w*r*g+i*_*g+f*r*u-i*h*u)*L,e[2]=(a*_*s-w*l*s+w*r*c-i*_*c-a*r*u+i*l*u)*L,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*g-i*l*g)*L,e[4]=x*L,e[5]=(d*_*s-y*h*s+y*r*g-n*_*g-d*r*u+n*h*u)*L,e[6]=(y*l*s-o*_*s-y*r*c+n*_*c+o*r*u-n*l*u)*L,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*g+n*l*g)*L,e[8]=S*L,e[9]=(y*f*s-d*w*s-y*i*g+n*w*g+d*i*u-n*f*u)*L,e[10]=(o*w*s-y*a*s+y*i*c-n*w*c-o*i*u+n*a*u)*L,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*g-n*a*g)*L,e[12]=R*L,e[13]=(d*w*r-y*f*r+y*i*h-n*w*h-d*i*_+n*f*_)*L,e[14]=(y*a*r-o*w*r-y*i*l+n*w*l+o*i*_-n*a*_)*L,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,g=s*d,y=s*f,w=o*d,_=o*f,u=a*f,v=l*c,x=l*d,S=l*f,R=i.x,P=i.y,L=i.z;return r[0]=(1-(w+u))*R,r[1]=(g+S)*R,r[2]=(y-x)*R,r[3]=0,r[4]=(g-S)*P,r[5]=(1-(h+u))*P,r[6]=(_+v)*P,r[7]=0,r[8]=(y+x)*L,r[9]=(_-v)*L,r[10]=(1-(h+w))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=no.set(r[0],r[1],r[2]).length();const o=no.set(r[4],r[5],r[6]).length(),a=no.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Oi.copy(this);const c=1/s,d=1/o,f=1/a;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=d,Oi.elements[5]*=d,Oi.elements[6]*=d,Oi.elements[8]*=f,Oi.elements[9]*=f,Oi.elements[10]*=f,n.setFromRotationMatrix(Oi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=nr,l=!1){const c=this.elements,d=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),g=(i+r)/(i-r);let y,w;if(l)y=s/(o-s),w=o*s/(o-s);else if(a===nr)y=-(o+s)/(o-s),w=-2*o*s/(o-s);else if(a===su)y=-o/(o-s),w=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=nr,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),g=-(i+r)/(i-r);let y,w;if(l)y=1/(o-s),w=o/(o-s);else if(a===nr)y=-2/(o-s),w=-(o+s)/(o-s);else if(a===su)y=-1/(o-s),w=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const no=new B,Oi=new Zt,JM=new B(0,0,0),ZM=new B(1,1,1),Nr=new B,Kl=new B,mi=new B,yg=new Zt,Mg=new _l;class Ki{constructor(e=0,n=0,i=0,r=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return yg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class Zp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QM=0;const Sg=new B,io=new _l,ur=new Zt,Jl=new B,Ma=new B,eS=new B,tS=new _l,wg=new B(1,0,0),Eg=new B(0,1,0),Tg=new B(0,0,1),Ag={type:"added"},nS={type:"removed"},ro={type:"childadded",child:null},Nd={type:"childremoved",child:null};class Nn extends $o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=vl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new B,n=new Ki,i=new _l,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new mt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return io.setFromAxisAngle(e,n),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,n){return io.setFromAxisAngle(e,n),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(wg,e)}rotateY(e){return this.rotateOnAxis(Eg,e)}rotateZ(e){return this.rotateOnAxis(Tg,e)}translateOnAxis(e,n){return Sg.copy(e).applyQuaternion(this.quaternion),this.position.add(Sg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wg,e)}translateY(e){return this.translateOnAxis(Eg,e)}translateZ(e){return this.translateOnAxis(Tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Jl.copy(e):Jl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(Ma,Jl,this.up):ur.lookAt(Jl,Ma,this.up),this.quaternion.setFromRotationMatrix(ur),r&&(ur.extractRotation(r.matrixWorld),io.setFromRotationMatrix(ur),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ag),ro.child=e,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(nS),Nd.child=e,this.dispatchEvent(Nd),Nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ag),ro.child=e,this.dispatchEvent(ro),ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,eS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,tS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nn.DEFAULT_UP=new B(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zi=new B,dr=new B,Ud=new B,fr=new B,so=new B,oo=new B,bg=new B,Fd=new B,kd=new B,Od=new B,zd=new Ht,Bd=new Ht,Hd=new Ht;class Wi{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zi.subVectors(e,n),r.cross(zi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zi.subVectors(r,n),dr.subVectors(i,n),Ud.subVectors(e,n);const o=zi.dot(zi),a=zi.dot(dr),l=zi.dot(Ud),c=dr.dot(dr),d=dr.dot(Ud),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,g=(c*l-a*d)*h,y=(o*d-a*l)*h;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,fr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fr.x),l.addScaledVector(o,fr.y),l.addScaledVector(a,fr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return zd.setScalar(0),Bd.setScalar(0),Hd.setScalar(0),zd.fromBufferAttribute(e,n),Bd.fromBufferAttribute(e,i),Hd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(zd,s.x),o.addScaledVector(Bd,s.y),o.addScaledVector(Hd,s.z),o}static isFrontFacing(e,n,i,r){return zi.subVectors(i,n),dr.subVectors(e,n),zi.cross(dr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),zi.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Wi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;so.subVectors(r,i),oo.subVectors(s,i),Fd.subVectors(e,i);const l=so.dot(Fd),c=oo.dot(Fd);if(l<=0&&c<=0)return n.copy(i);kd.subVectors(e,r);const d=so.dot(kd),f=oo.dot(kd);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(so,o);Od.subVectors(e,s);const g=so.dot(Od),y=oo.dot(Od);if(y>=0&&g<=y)return n.copy(s);const w=g*c-l*y;if(w<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(oo,a);const _=d*y-g*f;if(_<=0&&f-d>=0&&g-y>=0)return bg.subVectors(s,r),a=(f-d)/(f-d+(g-y)),n.copy(r).addScaledVector(bg,a);const u=1/(_+w+h);return o=w*u,a=h*u,n.copy(i).addScaledVector(so,o).addScaledVector(oo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const j_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},Zl={h:0,s:0,l:0};function Vd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class St{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Lt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Lt.workingColorSpace){if(e=HM(e,1),n=Mt(n,0,1),i=Mt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Vd(o,s,e+1/3),this.g=Vd(o,s,e),this.b=Vd(o,s,e-1/3)}return Lt.colorSpaceToWorking(this,r),this}setStyle(e,n=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const i=j_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Lt.workingToColorSpace(Xn.copy(this),e),Math.round(Mt(Xn.r*255,0,255))*65536+Math.round(Mt(Xn.g*255,0,255))*256+Math.round(Mt(Xn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Lt.workingColorSpace){Lt.workingToColorSpace(Xn.copy(this),n);const i=Xn.r,r=Xn.g,s=Xn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Lt.workingColorSpace){return Lt.workingToColorSpace(Xn.copy(this),n),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=jn){Lt.workingToColorSpace(Xn.copy(this),e);const n=Xn.r,i=Xn.g,r=Xn.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+n,Ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ur),e.getHSL(Zl);const i=Ed(Ur.h,Zl.h,n),r=Ed(Ur.s,Zl.s,n),s=Ed(Ur.l,Zl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new St;St.NAMES=j_;let iS=0;class Hs extends $o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=vl(),this.name="",this.type="Material",this.blending=Lo,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=sh,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(i.blending=this.blending),this.side!==is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rh&&(i.blendSrc=this.blendSrc),this.blendDst!==sh&&(i.blendDst=this.blendDst),this.blendEquation!==ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class on extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vn=new B,Ql=new Je;let rS=0;class sr{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=pg,this.updateRanges=[],this.gpuType=xr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ql.fromBufferAttribute(this,n),Ql.applyMatrix3(e),this.setXY(n,Ql.x,Ql.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix3(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix4(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vn.fromBufferAttribute(this,n),vn.applyNormalMatrix(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vn.fromBufferAttribute(this,n),vn.transformDirection(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=_a(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_a(n,this.array)),n}setX(e,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_a(n,this.array)),n}setY(e,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_a(n,this.array)),n}setZ(e,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_a(n,this.array)),n}setW(e,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=si(n,this.array),i=si(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=si(n,this.array),i=si(i,this.array),r=si(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=si(n,this.array),i=si(i,this.array),r=si(r,this.array),s=si(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pg&&(e.usage=this.usage),e}}class Y_ extends sr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class q_ extends sr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class At extends sr{constructor(e,n,i){super(new Float32Array(e),n,i)}}let sS=0;const bi=new Zt,Gd=new Nn,ao=new B,gi=new xl,Sa=new xl,Pn=new B;class gn extends $o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=vl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W_(e)?q_:Y_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new mt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,n,i){return bi.makeTranslation(e,n,i),this.applyMatrix4(bi),this}scale(e,n,i){return bi.makeScale(e,n,i),this.applyMatrix4(bi),this}lookAt(e){return Gd.lookAt(e),Gd.updateMatrix(),this.applyMatrix4(Gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Au);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Sa.setFromBufferAttribute(a),this.morphTargetsRelative?(Pn.addVectors(gi.min,Sa.min),gi.expandByPoint(Pn),Pn.addVectors(gi.max,Sa.max),gi.expandByPoint(Pn)):(gi.expandByPoint(Sa.min),gi.expandByPoint(Sa.max))}gi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Pn.fromBufferAttribute(a,c),l&&(ao.fromBufferAttribute(e,c),Pn.add(ao)),r=Math.max(r,i.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new B,l[D]=new B;const c=new B,d=new B,f=new B,h=new Je,g=new Je,y=new Je,w=new B,_=new B;function u(D,E,M){c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,D),g.fromBufferAttribute(s,E),y.fromBufferAttribute(s,M),d.sub(c),f.sub(c),g.sub(h),y.sub(h);const U=1/(g.x*y.y-y.x*g.y);isFinite(U)&&(w.copy(d).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(U),_.copy(f).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(U),a[D].add(w),a[E].add(w),a[M].add(w),l[D].add(_),l[E].add(_),l[M].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,E=v.length;D<E;++D){const M=v[D],U=M.start,G=M.count;for(let te=U,ae=U+G;te<ae;te+=3)u(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const x=new B,S=new B,R=new B,P=new B;function L(D){R.fromBufferAttribute(r,D),P.copy(R);const E=a[D];x.copy(E),x.sub(R.multiplyScalar(R.dot(E))).normalize(),S.crossVectors(P,E);const U=S.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,U)}for(let D=0,E=v.length;D<E;++D){const M=v[D],U=M.start,G=M.count;for(let te=U,ae=U+G;te<ae;te+=3)L(e.getX(te+0)),L(e.getX(te+1)),L(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,d=new B,f=new B;if(e)for(let h=0,g=e.count;h<g;h+=3){const y=e.getX(h+0),w=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,w),o.fromBufferAttribute(n,_),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,_),a.add(d),l.add(d),c.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pn.fromBufferAttribute(e,n),Pn.normalize(),e.setXYZ(n,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let g=0,y=0;for(let w=0,_=l.length;w<_;w++){a.isInterleavedBufferAttribute?g=l[w]*a.data.stride+a.offset:g=l[w]*d;for(let u=0;u<d;u++)h[y++]=c[g++]}return new sr(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,g=f.length;h<g;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cg=new Zt,ps=new Jp,ec=new Au,Rg=new B,tc=new B,nc=new B,ic=new B,Wd=new B,rc=new B,Pg=new B,sc=new B;class j extends Nn{constructor(e=new gn,n=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){rc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Wd.fromBufferAttribute(f,e),o?rc.addScaledVector(Wd,d):rc.addScaledVector(Wd.sub(n),d))}n.add(rc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(s),ps.copy(e.ray).recast(e.near),!(ec.containsPoint(ps.origin)===!1&&(ps.intersectSphere(ec,Rg)===null||ps.origin.distanceToSquared(Rg)>(e.far-e.near)**2))&&(Cg.copy(s).invert(),ps.copy(e.ray).applyMatrix4(Cg),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ps)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,w=h.length;y<w;y++){const _=h[y],u=o[_.materialIndex],v=Math.max(_.start,g.start),x=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let S=v,R=x;S<R;S+=3){const P=a.getX(S),L=a.getX(S+1),D=a.getX(S+2);r=oc(this,u,e,i,c,d,f,P,L,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),w=Math.min(a.count,g.start+g.count);for(let _=y,u=w;_<u;_+=3){const v=a.getX(_),x=a.getX(_+1),S=a.getX(_+2);r=oc(this,o,e,i,c,d,f,v,x,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,w=h.length;y<w;y++){const _=h[y],u=o[_.materialIndex],v=Math.max(_.start,g.start),x=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let S=v,R=x;S<R;S+=3){const P=S,L=S+1,D=S+2;r=oc(this,u,e,i,c,d,f,P,L,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),w=Math.min(l.count,g.start+g.count);for(let _=y,u=w;_<u;_+=3){const v=_,x=_+1,S=_+2;r=oc(this,o,e,i,c,d,f,v,x,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function oS(t,e,n,i,r,s,o,a){let l;if(e.side===fi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===is,a),l===null)return null;sc.copy(a),sc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(sc);return c<n.near||c>n.far?null:{distance:c,point:sc.clone(),object:t}}function oc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,tc),t.getVertexPosition(l,nc),t.getVertexPosition(c,ic);const d=oS(t,e,n,i,tc,nc,ic,Pg);if(d){const f=new B;Wi.getBarycoord(Pg,tc,nc,ic,f),r&&(d.uv=Wi.getInterpolatedAttribute(r,a,l,c,f,new Je)),s&&(d.uv1=Wi.getInterpolatedAttribute(s,a,l,c,f,new Je)),o&&(d.normal=Wi.getInterpolatedAttribute(o,a,l,c,f,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Wi.getNormal(tc,nc,ic,h.normal),d.face=h,d.barycoord=f}return d}class Ln extends gn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,g=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(d,3)),this.setAttribute("uv",new At(f,2));function y(w,_,u,v,x,S,R,P,L,D,E){const M=S/L,U=R/D,G=S/2,te=R/2,ae=P/2,ue=L+1,H=D+1;let K=0,F=0;const ne=new B;for(let se=0;se<H;se++){const Ee=se*U-te;for(let Oe=0;Oe<ue;Oe++){const ut=Oe*M-G;ne[w]=ut*v,ne[_]=Ee*x,ne[u]=ae,c.push(ne.x,ne.y,ne.z),ne[w]=0,ne[_]=0,ne[u]=P>0?1:-1,d.push(ne.x,ne.y,ne.z),f.push(Oe/L),f.push(1-se/D),K+=1}}for(let se=0;se<D;se++)for(let Ee=0;Ee<L;Ee++){const Oe=h+Ee+ue*se,ut=h+Ee+ue*(se+1),Le=h+(Ee+1)+ue*(se+1),le=h+(Ee+1)+ue*se;l.push(Oe,ut,le),l.push(ut,Le,le),F+=6}a.addGroup(g,F,E),g+=F,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jn(t){const e={};for(let n=0;n<t.length;n++){const i=Xo(t[n]);for(const r in i)e[r]=i[r]}return e}function aS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const lS={clone:Xo,merge:Jn};var cS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rs extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cS,this.fragmentShader=uS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=aS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class K_ extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fr=new B,Lg=new Je,Ig=new Je;class _i extends K_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wh*2*Math.atan(Math.tan(wd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z)}getViewSize(e,n){return this.getViewBounds(e,Lg,Ig),n.subVectors(Ig,Lg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const lo=-90,co=1;class dS extends Nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _i(lo,co,e,n);r.layers=this.layers,this.add(r);const s=new _i(lo,co,e,n);s.layers=this.layers,this.add(s);const o=new _i(lo,co,e,n);o.layers=this.layers,this.add(o);const a=new _i(lo,co,e,n);a.layers=this.layers,this.add(a);const l=new _i(lo,co,e,n);l.layers=this.layers,this.add(l);const c=new _i(lo,co,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===nr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===su)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class J_ extends ti{constructor(e=[],n=Vo,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fS extends Os{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new J_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ln(5,5,5),s=new rs({name:"CubemapFromEquirect",uniforms:Xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fi,blending:Qr});s.uniforms.tEquirect.value=n;const o=new j(r,s),a=n.minFilter;return n.minFilter===Rs&&(n.minFilter=tr),new dS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Ke extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hS={type:"move"};class Xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const w of e.hand.values()){const _=n.getJointPose(w,i),u=this._getHandJoint(c,w);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),g=.02,y=.005;c.inputState.pinching&&h>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ke;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Qp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(e),this.density=n}clone(){return new Qp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pS extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const jd=new B,mS=new B,gS=new mt;class Ms{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=jd.subVectors(i,n).cross(mS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(jd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gS.getNormalMatrix(e),r=this.coplanarPoint(jd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Au,vS=new Je(.5,.5),ac=new B;class em{constructor(e=new Ms,n=new Ms,i=new Ms,r=new Ms,s=new Ms,o=new Ms){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=nr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],f=s[5],h=s[6],g=s[7],y=s[8],w=s[9],_=s[10],u=s[11],v=s[12],x=s[13],S=s[14],R=s[15];if(r[0].setComponents(c-o,g-d,u-y,R-v).normalize(),r[1].setComponents(c+o,g+d,u+y,R+v).normalize(),r[2].setComponents(c+a,g+f,u+w,R+x).normalize(),r[3].setComponents(c-a,g-f,u-w,R-x).normalize(),i)r[4].setComponents(l,h,_,S).normalize(),r[5].setComponents(c-l,g-h,u-_,R-S).normalize();else if(r[4].setComponents(c-l,g-h,u-_,R-S).normalize(),n===nr)r[5].setComponents(c+l,g+h,u+_,R+S).normalize();else if(n===su)r[5].setComponents(l,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const n=vS.distanceTo(e.center);return ms.radius=.7071067811865476+n,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ac.x=r.normal.x>0?e.max.x:e.min.x,ac.y=r.normal.y>0?e.max.y:e.min.y,ac.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ic extends Hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const au=new B,lu=new B,Dg=new Zt,wa=new Jp,lc=new Au,Yd=new B,Ng=new B;class qd extends Nn{constructor(e=new gn,n=new Ic){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)au.fromBufferAttribute(n,r-1),lu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=au.distanceTo(lu);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(r),lc.radius+=s,e.ray.intersectsSphere(lc)===!1)return;Dg.copy(r).invert(),wa.copy(e.ray).applyMatrix4(Dg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const g=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let w=g,_=y-1;w<_;w+=c){const u=d.getX(w),v=d.getX(w+1),x=cc(this,e,wa,l,u,v,w);x&&n.push(x)}if(this.isLineLoop){const w=d.getX(y-1),_=d.getX(g),u=cc(this,e,wa,l,w,_,y-1);u&&n.push(u)}}else{const g=Math.max(0,o.start),y=Math.min(h.count,o.start+o.count);for(let w=g,_=y-1;w<_;w+=c){const u=cc(this,e,wa,l,w,w+1,w);u&&n.push(u)}if(this.isLineLoop){const w=cc(this,e,wa,l,y-1,g,y-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function cc(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(au.fromBufferAttribute(a,r),lu.fromBufferAttribute(a,s),n.distanceSqToSegment(au,lu,Yd,Ng)>i)return;Yd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Yd);if(!(c<e.near||c>e.far))return{distance:c,point:Ng.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class $d extends ti{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Z_ extends ti{constructor(e,n,i=ks,r,s,o,a=qi,l=qi,c,d=ll,f=1){if(d!==ll&&d!==cl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Q_ extends ti{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oi extends gn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],d=n/2,f=Math.PI/2*e,h=n,g=2*f+h,y=i*2+s,w=r+1,_=new B,u=new B;for(let v=0;v<=y;v++){let x=0,S=0,R=0,P=0;if(v<=i){const E=v/i,M=E*Math.PI/2;S=-d-e*Math.cos(M),R=e*Math.sin(M),P=-e*Math.cos(M),x=E*f}else if(v<=i+s){const E=(v-i)/s;S=-d+E*n,R=e,P=0,x=f+E*h}else{const E=(v-i-s)/i,M=E*Math.PI/2;S=d+e*Math.sin(M),R=e*Math.cos(M),P=e*Math.sin(M),x=f+h+E*f}const L=Math.max(0,Math.min(1,x/g));let D=0;v===0?D=.5/r:v===y&&(D=-.5/r);for(let E=0;E<=r;E++){const M=E/r,U=M*Math.PI*2,G=Math.sin(U),te=Math.cos(U);u.x=-R*te,u.y=S,u.z=R*G,a.push(u.x,u.y,u.z),_.set(-R*te,P,R*G),_.normalize(),l.push(_.x,_.y,_.z),c.push(M+D,L)}if(v>0){const E=(v-1)*w;for(let M=0;M<r;M++){const U=E+M,G=E+M+1,te=v*w+M,ae=v*w+M+1;o.push(U,G,te),o.push(G,ae,te)}}}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Hi extends gn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new B,d=new Je;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const g=i+f/n*r;c.x=e*Math.cos(g),c.y=e*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new At(o,3)),this.setAttribute("normal",new At(a,3)),this.setAttribute("uv",new At(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class pt extends gn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],g=[];let y=0;const w=[],_=i/2;let u=0;v(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new At(f,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(g,2));function v(){const S=new B,R=new B;let P=0;const L=(n-e)/i;for(let D=0;D<=s;D++){const E=[],M=D/s,U=M*(n-e)+e;for(let G=0;G<=r;G++){const te=G/r,ae=te*l+a,ue=Math.sin(ae),H=Math.cos(ae);R.x=U*ue,R.y=-M*i+_,R.z=U*H,f.push(R.x,R.y,R.z),S.set(ue,L,H).normalize(),h.push(S.x,S.y,S.z),g.push(te,1-M),E.push(y++)}w.push(E)}for(let D=0;D<r;D++)for(let E=0;E<s;E++){const M=w[E][D],U=w[E+1][D],G=w[E+1][D+1],te=w[E][D+1];(e>0||E!==0)&&(d.push(M,U,te),P+=3),(n>0||E!==s-1)&&(d.push(U,G,te),P+=3)}c.addGroup(u,P,0),u+=P}function x(S){const R=y,P=new Je,L=new B;let D=0;const E=S===!0?e:n,M=S===!0?1:-1;for(let G=1;G<=r;G++)f.push(0,_*M,0),h.push(0,M,0),g.push(.5,.5),y++;const U=y;for(let G=0;G<=r;G++){const ae=G/r*l+a,ue=Math.cos(ae),H=Math.sin(ae);L.x=E*H,L.y=_*M,L.z=E*ue,f.push(L.x,L.y,L.z),h.push(0,M,0),P.x=ue*.5+.5,P.y=H*.5*M+.5,g.push(P.x,P.y),y++}for(let G=0;G<r;G++){const te=R+G,ae=U+G;S===!0?d.push(ae,ae+1,te):d.push(ae+1,ae,te),D+=3}c.addGroup(u,D,S===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kn extends pt{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new kn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tm extends gn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new At(s,3)),this.setAttribute("normal",new At(s.slice(),3)),this.setAttribute("uv",new At(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new B,S=new B,R=new B;for(let P=0;P<n.length;P+=3)g(n[P+0],x),g(n[P+1],S),g(n[P+2],R),l(x,S,R,v)}function l(v,x,S,R){const P=R+1,L=[];for(let D=0;D<=P;D++){L[D]=[];const E=v.clone().lerp(S,D/P),M=x.clone().lerp(S,D/P),U=P-D;for(let G=0;G<=U;G++)G===0&&D===P?L[D][G]=E:L[D][G]=E.clone().lerp(M,G/U)}for(let D=0;D<P;D++)for(let E=0;E<2*(P-D)-1;E++){const M=Math.floor(E/2);E%2===0?(h(L[D][M+1]),h(L[D+1][M]),h(L[D][M])):(h(L[D][M+1]),h(L[D+1][M+1]),h(L[D+1][M]))}}function c(v){const x=new B;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(v),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function d(){const v=new B;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const S=_(v)/2/Math.PI+.5,R=u(v)/Math.PI+.5;o.push(S,1-R)}y(),f()}function f(){for(let v=0;v<o.length;v+=6){const x=o[v+0],S=o[v+2],R=o[v+4],P=Math.max(x,S,R),L=Math.min(x,S,R);P>.9&&L<.1&&(x<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function g(v,x){const S=v*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function y(){const v=new B,x=new B,S=new B,R=new B,P=new Je,L=new Je,D=new Je;for(let E=0,M=0;E<s.length;E+=9,M+=6){v.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),S.set(s[E+6],s[E+7],s[E+8]),P.set(o[M+0],o[M+1]),L.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),R.copy(v).add(x).add(S).divideScalar(3);const U=_(R);w(P,M+0,v,U),w(L,M+2,x,U),w(D,M+4,S,U)}}function w(v,x,S,R){R<0&&v.x===1&&(o[x]=v.x-1),S.x===0&&S.z===0&&(o[x]=R/2/Math.PI+.5)}function _(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tm(e.vertices,e.indices,e.radius,e.details)}}class sn extends tm{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new sn(e.radius,e.detail)}}class br{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],h=i[r+1]-d,g=(o-d)/h;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Je:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new B,r=[],s=[],o=[],a=new B,l=new Zt;for(let g=0;g<=e;g++){const y=g/e;r[g]=this.getTangentAt(y,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(Mt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,y))}o[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(Mt(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(g=-g);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],g*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ex extends br{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Je){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,g=c-this.aY;l=h*d-g*f+this.aX,c=h*f+g*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _S extends ex{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function nm(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,f){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,g=(a-o)/d-(l-o)/(d+f)+(l-a)/f;h*=d,g*=d,r(o,a,h,g)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const uc=new B,Kd=new nm,Jd=new nm,Zd=new nm;class tx extends br{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new B){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(uc.subVectors(r[0],r[1]).add(r[0]),c=uc);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(uc.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=uc),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(f),g),w=Math.pow(f.distanceToSquared(h),g),_=Math.pow(h.distanceToSquared(d),g);w<1e-4&&(w=1),y<1e-4&&(y=w),_<1e-4&&(_=w),Kd.initNonuniformCatmullRom(c.x,f.x,h.x,d.x,y,w,_),Jd.initNonuniformCatmullRom(c.y,f.y,h.y,d.y,y,w,_),Zd.initNonuniformCatmullRom(c.z,f.z,h.z,d.z,y,w,_)}else this.curveType==="catmullrom"&&(Kd.initCatmullRom(c.x,f.x,h.x,d.x,this.tension),Jd.initCatmullRom(c.y,f.y,h.y,d.y,this.tension),Zd.initCatmullRom(c.z,f.z,h.z,d.z,this.tension));return i.set(Kd.calc(l),Jd.calc(l),Zd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ug(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function xS(t,e){const n=1-t;return n*n*e}function yS(t,e){return 2*(1-t)*t*e}function MS(t,e){return t*t*e}function Ha(t,e,n,i){return xS(t,e)+yS(t,n)+MS(t,i)}function SS(t,e){const n=1-t;return n*n*n*e}function wS(t,e){const n=1-t;return 3*n*n*t*e}function ES(t,e){return 3*(1-t)*t*t*e}function TS(t,e){return t*t*t*e}function Va(t,e,n,i,r){return SS(t,e)+wS(t,n)+ES(t,i)+TS(t,r)}class AS extends br{constructor(e=new Je,n=new Je,i=new Je,r=new Je){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Je){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Va(e,r.x,s.x,o.x,a.x),Va(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bS extends br{constructor(e=new B,n=new B,i=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Va(e,r.x,s.x,o.x,a.x),Va(e,r.y,s.y,o.y,a.y),Va(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class CS extends br{constructor(e=new Je,n=new Je){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Je){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Je){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class RS extends br{constructor(e=new B,n=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new B){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new B){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class PS extends br{constructor(e=new Je,n=new Je,i=new Je){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Je){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ha(e,r.x,s.x,o.x),Ha(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nx extends br{constructor(e=new B,n=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ha(e,r.x,s.x,o.x),Ha(e,r.y,s.y,o.y),Ha(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class LS extends br{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Je){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Ug(a,l.x,c.x,d.x,f.x),Ug(a,l.y,c.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Je().fromArray(r))}return this}}var IS=Object.freeze({__proto__:null,ArcCurve:_S,CatmullRomCurve3:tx,CubicBezierCurve:AS,CubicBezierCurve3:bS,EllipseCurve:ex,LineCurve:CS,LineCurve3:RS,QuadraticBezierCurve:PS,QuadraticBezierCurve3:nx,SplineCurve:LS});class Zn extends gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,g=[],y=[],w=[],_=[];for(let u=0;u<d;u++){const v=u*h-o;for(let x=0;x<c;x++){const S=x*f-s;y.push(S,-v,0),w.push(0,0,1),_.push(x/a),_.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const x=v+c*u,S=v+c*(u+1),R=v+1+c*(u+1),P=v+1+c*u;g.push(x,S,P),g.push(S,R,P)}this.setIndex(g),this.setAttribute("position",new At(y,3)),this.setAttribute("normal",new At(w,3)),this.setAttribute("uv",new At(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.widthSegments,e.heightSegments)}}class im extends gn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let f=e;const h=(n-e)/r,g=new B,y=new Je;for(let w=0;w<=r;w++){for(let _=0;_<=i;_++){const u=s+_/i*o;g.x=f*Math.cos(u),g.y=f*Math.sin(u),l.push(g.x,g.y,g.z),c.push(0,0,1),y.x=(g.x/n+1)/2,y.y=(g.y/n+1)/2,d.push(y.x,y.y)}f+=h}for(let w=0;w<r;w++){const _=w*(i+1);for(let u=0;u<i;u++){const v=u+_,x=v,S=v+i+1,R=v+i+2,P=v+1;a.push(x,S,P),a.push(S,R,P)}}this.setIndex(a),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new im(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xt extends gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new B,h=new B,g=[],y=[],w=[],_=[];for(let u=0;u<=i;u++){const v=[],x=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let R=0;R<=n;R++){const P=R/n;f.x=-e*Math.cos(r+P*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+P*s)*Math.sin(o+x*a),y.push(f.x,f.y,f.z),h.copy(f).normalize(),w.push(h.x,h.y,h.z),_.push(P+S,1-x),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const x=d[u][v+1],S=d[u][v],R=d[u+1][v],P=d[u+1][v+1];(u!==0||o>0)&&g.push(x,S,P),(u!==i-1||l<Math.PI)&&g.push(S,R,P)}this.setIndex(g),this.setAttribute("position",new At(y,3)),this.setAttribute("normal",new At(w,3)),this.setAttribute("uv",new At(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yt extends gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new B,f=new B,h=new B;for(let g=0;g<=i;g++)for(let y=0;y<=r;y++){const w=y/r*s,_=g/i*Math.PI*2;f.x=(e+n*Math.cos(_))*Math.cos(w),f.y=(e+n*Math.cos(_))*Math.sin(w),f.z=n*Math.sin(_),a.push(f.x,f.y,f.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(y/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let y=1;y<=r;y++){const w=(r+1)*g+y-1,_=(r+1)*(g-1)+y-1,u=(r+1)*(g-1)+y,v=(r+1)*g+y;o.push(w,_,v),o.push(_,u,v)}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rm extends gn{constructor(e=new nx(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new Je;let d=new B;const f=[],h=[],g=[],y=[];w(),this.setIndex(y),this.setAttribute("position",new At(f,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(g,2));function w(){for(let x=0;x<n;x++)_(x);_(s===!1?n:0),v(),u()}function _(x){d=e.getPointAt(x/n,d);const S=o.normals[x],R=o.binormals[x];for(let P=0;P<=r;P++){const L=P/r*Math.PI*2,D=Math.sin(L),E=-Math.cos(L);l.x=E*S.x+D*R.x,l.y=E*S.y+D*R.y,l.z=E*S.z+D*R.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let x=1;x<=n;x++)for(let S=1;S<=r;S++){const R=(r+1)*(x-1)+(S-1),P=(r+1)*x+(S-1),L=(r+1)*x+S,D=(r+1)*(x-1)+S;y.push(R,P,D),y.push(P,L,D)}}function v(){for(let x=0;x<=n;x++)for(let S=0;S<=r;S++)c.x=x/n,c.y=S/r,g.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new rm(new IS[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class qe extends Hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$p,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dc extends Hs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$p,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class DS extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NS extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sm extends Nn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class US extends sm{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Qd=new Zt,Fg=new B,kg=new B;class ix{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=or,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new em,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Fg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fg),kg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(kg),n.updateMatrixWorld(),Qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Og=new Zt,Ea=new B,ef=new B;class FS extends ix{constructor(){super(new _i(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ea.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ea),ef.copy(i.position),ef.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(ef),i.updateMatrixWorld(),r.makeTranslation(-Ea.x,-Ea.y,-Ea.z),Og.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Og,i.coordinateSystem,i.reversedDepth)}}class hr extends sm{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new FS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rx extends K_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class kS extends ix{constructor(){super(new rx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zg extends sm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new kS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class OS extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Bg=new Zt;class zS{constructor(e,n,i=0,r=1/0){this.ray=new Jp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Zp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Bg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bg),this}intersectObject(e,n=!0,i=[]){return Xh(e,this,i,n),i.sort(Hg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Xh(e[r],this,i,n);return i.sort(Hg),i}}function Hg(t,e){return t.distance-e.distance}function Xh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Xh(s[o],e,n,!0)}}function Vg(t,e,n,i){const r=BS(i);switch(n){case z_:return t*e;case H_:return t*e/r.components*r.byteLength;case jp:return t*e/r.components*r.byteLength;case V_:return t*e*2/r.components*r.byteLength;case Yp:return t*e*2/r.components*r.byteLength;case B_:return t*e*3/r.components*r.byteLength;case Xi:return t*e*4/r.components*r.byteLength;case qp:return t*e*4/r.components*r.byteLength;case Cc:case Rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vh:case xh:return Math.max(t,16)*Math.max(e,8)/4;case gh:case _h:return Math.max(t,8)*Math.max(e,8)/2;case yh:case Mh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case kh:case Oh:case zh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Bh:case Hh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vh:case Gh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function BS(t){switch(t){case or:case U_:return{byteLength:1,components:1};case ol:case F_:case gl:return{byteLength:2,components:1};case Wp:case Xp:return{byteLength:2,components:4};case ks:case Gp:case xr:return{byteLength:4,components:1};case k_:case O_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function HS(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((g,y)=>g.start-y.start);let h=0;for(let g=1;g<f.length;g++){const y=f[h],w=f[g];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++h,f[h]=w)}f.length=h+1;for(let g=0,y=f.length;g<y;g++){const w=f[g];t.bufferSubData(c,w.start*d.BYTES_PER_ELEMENT,d,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var VS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GS=`#ifdef USE_ALPHAHASH
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
#endif`,WS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qS=`#ifdef USE_AOMAP
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
#endif`,$S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KS=`#ifdef USE_BATCHING
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
#endif`,JS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ew=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tw=`#ifdef USE_IRIDESCENCE
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
#endif`,nw=`#ifdef USE_BUMPMAP
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
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dw=`#define PI 3.141592653589793
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
} // validated`,fw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hw=`vec3 transformedNormal = objectNormal;
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
#endif`,pw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_w="gl_FragColor = linearToOutputTexel( gl_FragColor );",xw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yw=`#ifdef USE_ENVMAP
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
#endif`,Mw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sw=`#ifdef USE_ENVMAP
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
#endif`,ww=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ew=`#ifdef USE_ENVMAP
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
#endif`,Tw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Aw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rw=`#ifdef USE_GRADIENTMAP
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
}`,Pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dw=`uniform bool receiveShadow;
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
#endif`,Nw=`#ifdef USE_ENVMAP
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
#endif`,Uw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ow=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zw=`PhysicalMaterial material;
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
#endif`,Bw=`struct PhysicalMaterial {
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
}`,Hw=`
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
#endif`,Vw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ww=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$w=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jw=`#if defined( USE_POINTS_UV )
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
#endif`,Zw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
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
#endif`,rE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
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
#endif`,dE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ME=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AE=`float getShadowMask() {
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
}`,bE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CE=`#ifdef USE_SKINNING
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
#endif`,RE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PE=`#ifdef USE_SKINNING
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
#endif`,LE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UE=`#ifdef USE_TRANSMISSION
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
#endif`,FE=`#ifdef USE_TRANSMISSION
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`#include <common>
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
}`,qE=`#if DEPTH_PACKING == 3200
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
}`,$E=`#define DISTANCE
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
}`,KE=`#define DISTANCE
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
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`uniform float scale;
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
}`,eT=`uniform vec3 diffuse;
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
}`,tT=`#include <common>
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
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#define LAMBERT
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
}`,rT=`#define LAMBERT
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
}`,sT=`#define MATCAP
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
}`,oT=`#define MATCAP
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
}`,aT=`#define NORMAL
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
}`,lT=`#define NORMAL
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
}`,cT=`#define PHONG
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
}`,uT=`#define PHONG
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
}`,dT=`#define STANDARD
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
}`,fT=`#define STANDARD
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
}`,hT=`#define TOON
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
}`,pT=`#define TOON
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
}`,mT=`uniform float size;
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
}`,gT=`uniform vec3 diffuse;
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
}`,vT=`#include <common>
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
}`,_T=`uniform vec3 color;
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
}`,xT=`uniform float rotation;
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
}`,yT=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:VS,alphahash_pars_fragment:GS,alphamap_fragment:WS,alphamap_pars_fragment:XS,alphatest_fragment:jS,alphatest_pars_fragment:YS,aomap_fragment:qS,aomap_pars_fragment:$S,batching_pars_vertex:KS,batching_vertex:JS,begin_vertex:ZS,beginnormal_vertex:QS,bsdfs:ew,iridescence_fragment:tw,bumpmap_pars_fragment:nw,clipping_planes_fragment:iw,clipping_planes_pars_fragment:rw,clipping_planes_pars_vertex:sw,clipping_planes_vertex:ow,color_fragment:aw,color_pars_fragment:lw,color_pars_vertex:cw,color_vertex:uw,common:dw,cube_uv_reflection_fragment:fw,defaultnormal_vertex:hw,displacementmap_pars_vertex:pw,displacementmap_vertex:mw,emissivemap_fragment:gw,emissivemap_pars_fragment:vw,colorspace_fragment:_w,colorspace_pars_fragment:xw,envmap_fragment:yw,envmap_common_pars_fragment:Mw,envmap_pars_fragment:Sw,envmap_pars_vertex:ww,envmap_physical_pars_fragment:Nw,envmap_vertex:Ew,fog_vertex:Tw,fog_pars_vertex:Aw,fog_fragment:bw,fog_pars_fragment:Cw,gradientmap_pars_fragment:Rw,lightmap_pars_fragment:Pw,lights_lambert_fragment:Lw,lights_lambert_pars_fragment:Iw,lights_pars_begin:Dw,lights_toon_fragment:Uw,lights_toon_pars_fragment:Fw,lights_phong_fragment:kw,lights_phong_pars_fragment:Ow,lights_physical_fragment:zw,lights_physical_pars_fragment:Bw,lights_fragment_begin:Hw,lights_fragment_maps:Vw,lights_fragment_end:Gw,logdepthbuf_fragment:Ww,logdepthbuf_pars_fragment:Xw,logdepthbuf_pars_vertex:jw,logdepthbuf_vertex:Yw,map_fragment:qw,map_pars_fragment:$w,map_particle_fragment:Kw,map_particle_pars_fragment:Jw,metalnessmap_fragment:Zw,metalnessmap_pars_fragment:Qw,morphinstance_vertex:eE,morphcolor_vertex:tE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:rE,normal_fragment_begin:sE,normal_fragment_maps:oE,normal_pars_fragment:aE,normal_pars_vertex:lE,normal_vertex:cE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:dE,clearcoat_normal_fragment_maps:fE,clearcoat_pars_fragment:hE,iridescence_pars_fragment:pE,opaque_fragment:mE,packing:gE,premultiplied_alpha_fragment:vE,project_vertex:_E,dithering_fragment:xE,dithering_pars_fragment:yE,roughnessmap_fragment:ME,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:wE,shadowmap_pars_vertex:EE,shadowmap_vertex:TE,shadowmask_pars_fragment:AE,skinbase_vertex:bE,skinning_pars_vertex:CE,skinning_vertex:RE,skinnormal_vertex:PE,specularmap_fragment:LE,specularmap_pars_fragment:IE,tonemapping_fragment:DE,tonemapping_pars_fragment:NE,transmission_fragment:UE,transmission_pars_fragment:FE,uv_pars_fragment:kE,uv_pars_vertex:OE,uv_vertex:zE,worldpos_vertex:BE,background_vert:HE,background_frag:VE,backgroundCube_vert:GE,backgroundCube_frag:WE,cube_vert:XE,cube_frag:jE,depth_vert:YE,depth_frag:qE,distanceRGBA_vert:$E,distanceRGBA_frag:KE,equirect_vert:JE,equirect_frag:ZE,linedashed_vert:QE,linedashed_frag:eT,meshbasic_vert:tT,meshbasic_frag:nT,meshlambert_vert:iT,meshlambert_frag:rT,meshmatcap_vert:sT,meshmatcap_frag:oT,meshnormal_vert:aT,meshnormal_frag:lT,meshphong_vert:cT,meshphong_frag:uT,meshphysical_vert:dT,meshphysical_frag:fT,meshtoon_vert:hT,meshtoon_frag:pT,points_vert:mT,points_frag:gT,shadow_vert:vT,shadow_frag:_T,sprite_vert:xT,sprite_frag:yT},ke={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Qi={basic:{uniforms:Jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new St(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Jn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Jn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new St(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Jn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Jn([ke.points,ke.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Jn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Jn([ke.common,ke.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Jn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Jn([ke.sprite,ke.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Jn([ke.common,ke.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Jn([ke.lights,ke.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Qi.physical={uniforms:Jn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const fc={r:0,b:0,g:0},gs=new Ki,MT=new Zt;function ST(t,e,n,i,r,s,o){const a=new St(0);let l=s===!0?0:1,c,d,f=null,h=0,g=null;function y(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?n:e).get(S)),S}function w(x){let S=!1;const R=y(x);R===null?u(a,l):R&&R.isColor&&(u(R,1),S=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(x,S){const R=y(S);R&&(R.isCubeTexture||R.mapping===Tu)?(d===void 0&&(d=new j(new Ln(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:Xo(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),gs.copy(S.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(MT.makeRotationFromEuler(gs)),d.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Bt,(f!==R||h!==R.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=R,h=R.version,g=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new j(new Zn(2,2),new rs({name:"BackgroundMaterial",uniforms:Xo(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Bt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=R,h=R.version,g=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,S){x.getRGB(fc,$_(t)),i.buffers.color.setClear(fc.r,fc.g,fc.b,S,o)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),l=S,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:w,addToRenderList:_,dispose:v}}function wT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,U,G,te,ae){let ue=!1;const H=f(te,G,U);s!==H&&(s=H,c(s.object)),ue=g(M,te,G,ae),ue&&y(M,te,G,ae),ae!==null&&e.update(ae,t.ELEMENT_ARRAY_BUFFER),(ue||o)&&(o=!1,S(M,U,G,te),ae!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function d(M){return t.deleteVertexArray(M)}function f(M,U,G){const te=G.wireframe===!0;let ae=i[M.id];ae===void 0&&(ae={},i[M.id]=ae);let ue=ae[U.id];ue===void 0&&(ue={},ae[U.id]=ue);let H=ue[te];return H===void 0&&(H=h(l()),ue[te]=H),H}function h(M){const U=[],G=[],te=[];for(let ae=0;ae<n;ae++)U[ae]=0,G[ae]=0,te[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:te,object:M,attributes:{},index:null}}function g(M,U,G,te){const ae=s.attributes,ue=U.attributes;let H=0;const K=G.getAttributes();for(const F in K)if(K[F].location>=0){const se=ae[F];let Ee=ue[F];if(Ee===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor)),se===void 0||se.attribute!==Ee||Ee&&se.data!==Ee.data)return!0;H++}return s.attributesNum!==H||s.index!==te}function y(M,U,G,te){const ae={},ue=U.attributes;let H=0;const K=G.getAttributes();for(const F in K)if(K[F].location>=0){let se=ue[F];se===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(se=M.instanceColor));const Ee={};Ee.attribute=se,se&&se.data&&(Ee.data=se.data),ae[F]=Ee,H++}s.attributes=ae,s.attributesNum=H,s.index=te}function w(){const M=s.newAttributes;for(let U=0,G=M.length;U<G;U++)M[U]=0}function _(M){u(M,0)}function u(M,U){const G=s.newAttributes,te=s.enabledAttributes,ae=s.attributeDivisors;G[M]=1,te[M]===0&&(t.enableVertexAttribArray(M),te[M]=1),ae[M]!==U&&(t.vertexAttribDivisor(M,U),ae[M]=U)}function v(){const M=s.newAttributes,U=s.enabledAttributes;for(let G=0,te=U.length;G<te;G++)U[G]!==M[G]&&(t.disableVertexAttribArray(G),U[G]=0)}function x(M,U,G,te,ae,ue,H){H===!0?t.vertexAttribIPointer(M,U,G,ae,ue):t.vertexAttribPointer(M,U,G,te,ae,ue)}function S(M,U,G,te){w();const ae=te.attributes,ue=G.getAttributes(),H=U.defaultAttributeValues;for(const K in ue){const F=ue[K];if(F.location>=0){let ne=ae[K];if(ne===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const se=ne.normalized,Ee=ne.itemSize,Oe=e.get(ne);if(Oe===void 0)continue;const ut=Oe.buffer,Le=Oe.type,le=Oe.bytesPerElement,z=Le===t.INT||Le===t.UNSIGNED_INT||ne.gpuType===Gp;if(ne.isInterleavedBufferAttribute){const pe=ne.data,Ue=pe.stride,nt=ne.offset;if(pe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<F.locationSize;Ce++)u(F.location+Ce,pe.meshPerAttribute);M.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ce=0;Ce<F.locationSize;Ce++)_(F.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,ut);for(let Ce=0;Ce<F.locationSize;Ce++)x(F.location+Ce,Ee/F.locationSize,Le,se,Ue*le,(nt+Ee/F.locationSize*Ce)*le,z)}else{if(ne.isInstancedBufferAttribute){for(let pe=0;pe<F.locationSize;pe++)u(F.location+pe,ne.meshPerAttribute);M.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let pe=0;pe<F.locationSize;pe++)_(F.location+pe);t.bindBuffer(t.ARRAY_BUFFER,ut);for(let pe=0;pe<F.locationSize;pe++)x(F.location+pe,Ee/F.locationSize,Le,se,Ee*le,Ee/F.locationSize*pe*le,z)}}else if(H!==void 0){const se=H[K];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(F.location,se);break;case 3:t.vertexAttrib3fv(F.location,se);break;case 4:t.vertexAttrib4fv(F.location,se);break;default:t.vertexAttrib1fv(F.location,se)}}}}v()}function R(){D();for(const M in i){const U=i[M];for(const G in U){const te=U[G];for(const ae in te)d(te[ae].object),delete te[ae];delete U[G]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const U=i[M.id];for(const G in U){const te=U[G];for(const ae in te)d(te[ae].object),delete te[ae];delete U[G]}delete i[M.id]}function L(M){for(const U in i){const G=i[U];if(G[M.id]===void 0)continue;const te=G[M.id];for(const ae in te)d(te[ae].object),delete te[ae];delete G[M.id]}}function D(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:_,disableUnusedAttributes:v}}function ET(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let g=0;for(let y=0;y<f;y++)g+=d[y];n.update(g,i,1)}function l(c,d,f,h){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<c.length;y++)o(c[y],d[y],h[y]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let y=0;for(let w=0;w<f;w++)y+=d[w]*h[w];n.update(y,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function TT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==Xi&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const D=L===gl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==or&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==xr&&!D)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:R,maxSamples:P}}function AT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ms,a=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||i!==0||r;return r=h,i=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,g){const y=f.clippingPlanes,w=f.clipIntersection,_=f.clipShadows,u=t.get(f);if(!r||y===null||y.length===0||s&&!_)s?d(null):c();else{const v=s?0:i,x=v*4;let S=u.clippingState||null;l.value=S,S=d(y,h,x,g);for(let R=0;R!==x;++R)S[R]=n[R];u.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,g,y){const w=f!==null?f.length:0;let _=null;if(w!==0){if(_=l.value,y!==!0||_===null){const u=g+w*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(_===null||_.length<u)&&(_=new Float32Array(u));for(let x=0,S=g;x!==w;++x,S+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}function bT(t){let e=new WeakMap;function n(o,a){return a===hh?o.mapping=Vo:a===ph&&(o.mapping=Go),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hh||a===ph)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Eo=4,Gg=[.125,.215,.35,.446,.526,.582],Es=20,tf=new rx,Wg=new St;let nf=null,rf=0,sf=0,of=!1;const Ss=(1+Math.sqrt(5))/2,uo=1/Ss,Xg=[new B(-Ss,uo,0),new B(Ss,uo,0),new B(-uo,0,Ss),new B(uo,0,Ss),new B(0,Ss,-uo),new B(0,Ss,uo),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],CT=new B;class jg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=CT}=s;nf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nf,rf,sf),this._renderer.xr.enabled=of,e.scissorTest=!1,hc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vo||e.mapping===Go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:tr,minFilter:tr,generateMipmaps:!1,type:gl,format:Xi,colorSpace:Wo,depthBuffer:!1},r=Yg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RT(s)),this._blurMaterial=PT(s,e,n)}return r}_compileMaterial(e){const n=new j(this._lodPlanes[0],e);this._renderer.compile(n,tf)}_sceneToCubeUV(e,n,i,r,s){const l=new _i(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,g=f.toneMapping;f.getClearColor(Wg),f.toneMapping=es,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const w=new on({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1}),_=new j(new Ln,w);let u=!1;const v=e.background;v?v.isColor&&(w.color.copy(v),e.background=null,u=!0):(w.color.copy(Wg),u=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[x],s.y,s.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[x]));const R=this._cubeSize;hc(r,S*R,x>2?R:0,R,R),f.setRenderTarget(r),u&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=g,f.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vo||e.mapping===Go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$g()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new j(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,tf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xg[(r-s-1)%Xg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new j(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Es-1),w=s/y,_=isFinite(s)?1+Math.floor(d*w):Es;_>Es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Es}`);const u=[];let v=0;for(let L=0;L<Es;++L){const D=L/w,E=Math.exp(-D*D/2);u.push(E),L===0?v+=E:L<_&&(v+=2*E)}for(let L=0;L<u.length;L++)u[L]=u[L]/v;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=y,h.mipInt.value=x-i;const S=this._sizeLods[r],R=3*S*(r>x-Eo?r-x+Eo:0),P=4*(this._cubeSize-S);hc(n,R,P,3*S,2*S),l.setRenderTarget(n),l.render(f,tf)}}function RT(t){const e=[],n=[],i=[];let r=t;const s=t-Eo+1+Gg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Eo?l=Gg[o-t+Eo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,y=6,w=3,_=2,u=1,v=new Float32Array(w*y*g),x=new Float32Array(_*y*g),S=new Float32Array(u*y*g);for(let P=0;P<g;P++){const L=P%3*2/3-1,D=P>2?0:-1,E=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];v.set(E,w*y*P),x.set(h,_*y*P);const M=[P,P,P,P,P,P];S.set(M,u*y*P)}const R=new gn;R.setAttribute("position",new sr(v,w)),R.setAttribute("uv",new sr(x,_)),R.setAttribute("faceIndex",new sr(S,u)),e.push(R),r>Eo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Yg(t,e,n){const i=new Os(t,e,n);return i.texture.mapping=Tu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function PT(t,e,n){const i=new Float32Array(Es),r=new B(0,1,0);return new rs({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:om(),fragmentShader:`

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
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function qg(){return new rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:om(),fragmentShader:`

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
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function $g(){return new rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function om(){return`

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
	`}function LT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hh||l===ph,d=l===Vo||l===Go;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new jg(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const g=a.image;return c&&g&&g.height>0||d&&g&&r(g)?(n===null&&(n=new jg(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function IT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ul("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function DT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER)}function c(f){const h=[],g=f.index,y=f.attributes.position;let w=0;if(g!==null){const v=g.array;w=g.version;for(let x=0,S=v.length;x<S;x+=3){const R=v[x+0],P=v[x+1],L=v[x+2];h.push(R,P,P,L,L,R)}}else if(y!==void 0){const v=y.array;w=y.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const R=x+0,P=x+1,L=x+2;h.push(R,P,P,L,L,R)}}else return;const _=new(W_(h)?q_:Y_)(h,1);_.version=w;const u=s.get(f);u&&e.remove(u),s.set(f,_)}function d(f){const h=s.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function NT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,g){t.drawElements(i,g,s,h*o),n.update(g,i,1)}function c(h,g,y){y!==0&&(t.drawElementsInstanced(i,g,s,h*o,y),n.update(g,i,y))}function d(h,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,h,0,y);let _=0;for(let u=0;u<y;u++)_+=g[u];n.update(_,i,1)}function f(h,g,y,w){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let u=0;u<h.length;u++)c(h[u]/o,g[u],w[u]);else{_.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,w,0,y);let u=0;for(let v=0;v<y;v++)u+=g[v]*w[v];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function UT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function FT(t,e,n){const i=new WeakMap,r=new Ht;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var g=M;h!==void 0&&h.texture.dispose();const y=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;y===!0&&(S=1),w===!0&&(S=2),_===!0&&(S=3);let R=a.attributes.position.count*S,P=1;R>e.maxTextureSize&&(P=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const L=new Float32Array(R*P*4*f),D=new X_(L,R,P,f);D.type=xr,D.needsUpdate=!0;const E=S*4;for(let U=0;U<f;U++){const G=u[U],te=v[U],ae=x[U],ue=R*P*4*U;for(let H=0;H<G.count;H++){const K=H*E;y===!0&&(r.fromBufferAttribute(G,H),L[ue+K+0]=r.x,L[ue+K+1]=r.y,L[ue+K+2]=r.z,L[ue+K+3]=0),w===!0&&(r.fromBufferAttribute(te,H),L[ue+K+4]=r.x,L[ue+K+5]=r.y,L[ue+K+6]=r.z,L[ue+K+7]=0),_===!0&&(r.fromBufferAttribute(ae,H),L[ue+K+8]=r.x,L[ue+K+9]=r.y,L[ue+K+10]=r.z,L[ue+K+11]=ae.itemSize===4?r.w:1)}}h={count:f,texture:D,size:new Je(R,P)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let _=0;_<c.length;_++)y+=c[_];const w=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",w),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function kT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const ox=new ti,Kg=new Z_(1,1),ax=new X_,lx=new $M,cx=new J_,Jg=[],Zg=[],Qg=new Float32Array(16),ev=new Float32Array(9),tv=new Float32Array(4);function Ko(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Jg[r];if(s===void 0&&(s=new Float32Array(r),Jg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Tn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function An(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bu(t,e){let n=Zg[e];n===void 0&&(n=new Int32Array(e),Zg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function OT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;t.uniform2fv(this.addr,e),An(n,e)}}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tn(n,e))return;t.uniform3fv(this.addr,e),An(n,e)}}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;t.uniform4fv(this.addr,e),An(n,e)}}function VT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,i))return;tv.set(i),t.uniformMatrix2fv(this.addr,!1,tv),An(n,i)}}function GT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,i))return;ev.set(i),t.uniformMatrix3fv(this.addr,!1,ev),An(n,i)}}function WT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,i))return;Qg.set(i),t.uniformMatrix4fv(this.addr,!1,Qg),An(n,i)}}function XT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;t.uniform2iv(this.addr,e),An(n,e)}}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;t.uniform3iv(this.addr,e),An(n,e)}}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;t.uniform4iv(this.addr,e),An(n,e)}}function $T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;t.uniform2uiv(this.addr,e),An(n,e)}}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;t.uniform3uiv(this.addr,e),An(n,e)}}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;t.uniform4uiv(this.addr,e),An(n,e)}}function QT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Kg.compareFunction=G_,s=Kg):s=ox,n.setTexture2D(e||s,r)}function e3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||lx,r)}function t3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||cx,r)}function n3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ax,r)}function i3(t){switch(t){case 5126:return OT;case 35664:return zT;case 35665:return BT;case 35666:return HT;case 35674:return VT;case 35675:return GT;case 35676:return WT;case 5124:case 35670:return XT;case 35667:case 35671:return jT;case 35668:case 35672:return YT;case 35669:case 35673:return qT;case 5125:return $T;case 36294:return KT;case 36295:return JT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return e3;case 35680:case 36300:case 36308:case 36293:return t3;case 36289:case 36303:case 36311:case 36292:return n3}}function r3(t,e){t.uniform1fv(this.addr,e)}function s3(t,e){const n=Ko(e,this.size,2);t.uniform2fv(this.addr,n)}function o3(t,e){const n=Ko(e,this.size,3);t.uniform3fv(this.addr,n)}function a3(t,e){const n=Ko(e,this.size,4);t.uniform4fv(this.addr,n)}function l3(t,e){const n=Ko(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function c3(t,e){const n=Ko(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function u3(t,e){const n=Ko(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function d3(t,e){t.uniform1iv(this.addr,e)}function f3(t,e){t.uniform2iv(this.addr,e)}function h3(t,e){t.uniform3iv(this.addr,e)}function p3(t,e){t.uniform4iv(this.addr,e)}function m3(t,e){t.uniform1uiv(this.addr,e)}function g3(t,e){t.uniform2uiv(this.addr,e)}function v3(t,e){t.uniform3uiv(this.addr,e)}function _3(t,e){t.uniform4uiv(this.addr,e)}function x3(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);Tn(i,s)||(t.uniform1iv(this.addr,s),An(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||ox,s[o])}function y3(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);Tn(i,s)||(t.uniform1iv(this.addr,s),An(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||lx,s[o])}function M3(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);Tn(i,s)||(t.uniform1iv(this.addr,s),An(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||cx,s[o])}function S3(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);Tn(i,s)||(t.uniform1iv(this.addr,s),An(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||ax,s[o])}function w3(t){switch(t){case 5126:return r3;case 35664:return s3;case 35665:return o3;case 35666:return a3;case 35674:return l3;case 35675:return c3;case 35676:return u3;case 5124:case 35670:return d3;case 35667:case 35671:return f3;case 35668:case 35672:return h3;case 35669:case 35673:return p3;case 5125:return m3;case 36294:return g3;case 36295:return v3;case 36296:return _3;case 35678:case 36198:case 36298:case 36306:case 35682:return x3;case 35679:case 36299:case 36307:return y3;case 35680:case 36300:case 36308:case 36293:return M3;case 36289:case 36303:case 36311:case 36292:return S3}}class E3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=i3(n.type)}}class T3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=w3(n.type)}}class A3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const af=/(\w+)(\])?(\[|\.)?/g;function nv(t,e){t.seq.push(e),t.map[e.id]=e}function b3(t,e,n){const i=t.name,r=i.length;for(af.lastIndex=0;;){const s=af.exec(i),o=af.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){nv(n,c===void 0?new E3(a,t,e):new T3(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new A3(a),nv(n,f)),n=f}}}class Dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);b3(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function iv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const C3=37297;let R3=0;function P3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const rv=new mt;function L3(t){Lt._getMatrix(rv,Lt.workingColorSpace,t);const e=`mat3( ${rv.elements.map(n=>n.toFixed(4))} )`;switch(Lt.getTransfer(t)){case ru:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function sv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+P3(t.getShaderSource(e),a)}else return s}function I3(t,e){const n=L3(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function D3(t,e){let n;switch(e){case EM:n="Linear";break;case TM:n="Reinhard";break;case AM:n="Cineon";break;case D_:n="ACESFilmic";break;case CM:n="AgX";break;case RM:n="Neutral";break;case bM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pc=new B;function N3(){Lt.getLuminanceCoefficients(pc);const t=pc.x.toFixed(4),e=pc.y.toFixed(4),n=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function F3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function k3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function La(t){return t!==""}function ov(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function av(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O3=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(t){return t.replace(O3,B3)}const z3=new Map;function B3(t,e){let n=vt[e];if(n===void 0){const i=z3.get(e);if(i!==void 0)n=vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jh(n)}const H3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lv(t){return t.replace(H3,V3)}function V3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function G3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===L_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===I_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pr&&(e="SHADOWMAP_TYPE_VSM"),e}function W3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Vo:case Go:e="ENVMAP_TYPE_CUBE";break;case Tu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Go:e="ENVMAP_MODE_REFRACTION";break}return e}function j3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Vp:e="ENVMAP_BLENDING_MULTIPLY";break;case SM:e="ENVMAP_BLENDING_MIX";break;case wM:e="ENVMAP_BLENDING_ADD";break}return e}function Y3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function q3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=G3(n),c=W3(n),d=X3(n),f=j3(n),h=Y3(n),g=U3(n),y=F3(s),w=r.createProgram();let _,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(La).join(`
`),_.length>0&&(_+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(La).join(`
`),u.length>0&&(u+=`
`)):(_=[cv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),u=[cv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==es?"#define TONE_MAPPING":"",n.toneMapping!==es?vt.tonemapping_pars_fragment:"",n.toneMapping!==es?D3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,I3("linearToOutputTexel",n.outputColorSpace),N3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(La).join(`
`)),o=jh(o),o=ov(o,n),o=av(o,n),a=jh(a),a=ov(a,n),a=av(a,n),o=lv(o),a=lv(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,u=["#define varying in",n.glslVersion===mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=v+_+o,S=v+u+a,R=iv(r,r.VERTEX_SHADER,x),P=iv(r,r.FRAGMENT_SHADER,S);r.attachShader(w,R),r.attachShader(w,P),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function L(U){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(w)||"",te=r.getShaderInfoLog(R)||"",ae=r.getShaderInfoLog(P)||"",ue=G.trim(),H=te.trim(),K=ae.trim();let F=!0,ne=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,w,R,P);else{const se=sv(r,R,"vertex"),Ee=sv(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+ue+`
`+se+`
`+Ee)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(H===""||K==="")&&(ne=!1);ne&&(U.diagnostics={runnable:F,programLog:ue,vertexShader:{log:H,prefix:_},fragmentShader:{log:K,prefix:u}})}r.deleteShader(R),r.deleteShader(P),D=new Dc(r,w),E=k3(r,w)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(w,C3)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=R3++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=R,this.fragmentShader=P,this}let $3=0;class K3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new J3(e),n.set(e,i)),i}}class J3{constructor(e){this.id=$3++,this.code=e,this.usedTimes=0}}function Z3(t,e,n,i,r,s,o){const a=new Zp,l=new K3,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return c.add(E),E===0?"uv":`uv${E}`}function _(E,M,U,G,te){const ae=G.fog,ue=te.geometry,H=E.isMeshStandardMaterial?G.environment:null,K=(E.isMeshStandardMaterial?n:e).get(E.envMap||H),F=K&&K.mapping===Tu?K.image.height:null,ne=y[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const se=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ee=se!==void 0?se.length:0;let Oe=0;ue.morphAttributes.position!==void 0&&(Oe=1),ue.morphAttributes.normal!==void 0&&(Oe=2),ue.morphAttributes.color!==void 0&&(Oe=3);let ut,Le,le,z;if(ne){const yt=Qi[ne];ut=yt.vertexShader,Le=yt.fragmentShader}else ut=E.vertexShader,Le=E.fragmentShader,l.update(E),le=l.getVertexShaderID(E),z=l.getFragmentShaderID(E);const pe=t.getRenderTarget(),Ue=t.state.buffers.depth.getReversed(),nt=te.isInstancedMesh===!0,Ce=te.isBatchedMesh===!0,_t=!!E.map,hn=!!E.matcap,O=!!K,Rt=!!E.aoMap,at=!!E.lightMap,Ge=!!E.bumpMap,k=!!E.normalMap,Pe=!!E.displacementMap,ce=!!E.emissiveMap,de=!!E.metalnessMap,Ze=!!E.roughnessMap,it=E.anisotropy>0,I=E.clearcoat>0,A=E.dispersion>0,Z=E.iridescence>0,he=E.sheen>0,_e=E.transmission>0,fe=it&&!!E.anisotropyMap,Fe=I&&!!E.clearcoatMap,xe=I&&!!E.clearcoatNormalMap,Xe=I&&!!E.clearcoatRoughnessMap,je=Z&&!!E.iridescenceMap,ye=Z&&!!E.iridescenceThicknessMap,Te=he&&!!E.sheenColorMap,st=he&&!!E.sheenRoughnessMap,$e=!!E.specularMap,De=!!E.specularColorMap,ct=!!E.specularIntensityMap,X=_e&&!!E.transmissionMap,Ae=_e&&!!E.thicknessMap,Re=!!E.gradientMap,He=!!E.alphaMap,Me=E.alphaTest>0,ve=!!E.alphaHash,Ye=!!E.extensions;let lt=es;E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(lt=t.toneMapping);const Ft={shaderID:ne,shaderType:E.type,shaderName:E.name,vertexShader:ut,fragmentShader:Le,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ce,batchingColor:Ce&&te._colorsTexture!==null,instancing:nt,instancingColor:nt&&te.instanceColor!==null,instancingMorph:nt&&te.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Wo,alphaToCoverage:!!E.alphaToCoverage,map:_t,matcap:hn,envMap:O,envMapMode:O&&K.mapping,envMapCubeUVHeight:F,aoMap:Rt,lightMap:at,bumpMap:Ge,normalMap:k,displacementMap:h&&Pe,emissiveMap:ce,normalMapObjectSpace:k&&E.normalMapType===DM,normalMapTangentSpace:k&&E.normalMapType===$p,metalnessMap:de,roughnessMap:Ze,anisotropy:it,anisotropyMap:fe,clearcoat:I,clearcoatMap:Fe,clearcoatNormalMap:xe,clearcoatRoughnessMap:Xe,dispersion:A,iridescence:Z,iridescenceMap:je,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:Te,sheenRoughnessMap:st,specularMap:$e,specularColorMap:De,specularIntensityMap:ct,transmission:_e,transmissionMap:X,thicknessMap:Ae,gradientMap:Re,opaque:E.transparent===!1&&E.blending===Lo&&E.alphaToCoverage===!1,alphaMap:He,alphaTest:Me,alphaHash:ve,combine:E.combine,mapUv:_t&&w(E.map.channel),aoMapUv:Rt&&w(E.aoMap.channel),lightMapUv:at&&w(E.lightMap.channel),bumpMapUv:Ge&&w(E.bumpMap.channel),normalMapUv:k&&w(E.normalMap.channel),displacementMapUv:Pe&&w(E.displacementMap.channel),emissiveMapUv:ce&&w(E.emissiveMap.channel),metalnessMapUv:de&&w(E.metalnessMap.channel),roughnessMapUv:Ze&&w(E.roughnessMap.channel),anisotropyMapUv:fe&&w(E.anisotropyMap.channel),clearcoatMapUv:Fe&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:xe&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:st&&w(E.sheenRoughnessMap.channel),specularMapUv:$e&&w(E.specularMap.channel),specularColorMapUv:De&&w(E.specularColorMap.channel),specularIntensityMapUv:ct&&w(E.specularIntensityMap.channel),transmissionMapUv:X&&w(E.transmissionMap.channel),thicknessMapUv:Ae&&w(E.thicknessMap.channel),alphaMapUv:He&&w(E.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(k||it),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ue.attributes.uv&&(_t||He),fog:!!ae,useFog:E.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ue,skinning:te.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:lt,decodeVideoTexture:_t&&E.map.isVideoTexture===!0&&Lt.getTransfer(E.map.colorSpace)===Bt,decodeVideoTextureEmissive:ce&&E.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(E.emissiveMap.colorSpace)===Bt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Kt,flipSided:E.side===fi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ye&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&E.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)M.push(U),M.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(v(M,E),x(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const M=y[E.type];let U;if(M){const G=Qi[M];U=lS.clone(G.uniforms)}else U=E.uniforms;return U}function R(E,M){let U;for(let G=0,te=d.length;G<te;G++){const ae=d[G];if(ae.cacheKey===M){U=ae,++U.usedTimes;break}}return U===void 0&&(U=new q3(t,M,E,s),d.push(U)),U}function P(E){if(--E.usedTimes===0){const M=d.indexOf(E);d[M]=d[d.length-1],d.pop(),E.destroy()}}function L(E){l.remove(E)}function D(){l.dispose()}return{getParameters:_,getProgramCacheKey:u,getUniforms:S,acquireProgram:R,releaseProgram:P,releaseShaderCache:L,programs:d,dispose:D}}function Q3(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function eA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function uv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,g,y,w,_){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:g,groupOrder:y,renderOrder:f.renderOrder,z:w,group:_},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=g,u.groupOrder=y,u.renderOrder=f.renderOrder,u.z=w,u.group=_),e++,u}function a(f,h,g,y,w,_){const u=o(f,h,g,y,w,_);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,h,g,y,w,_){const u=o(f,h,g,y,w,_);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||eA),i.length>1&&i.sort(h||uv),r.length>1&&r.sort(h||uv)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function tA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new dv,t.set(i,[o])):r>=s.length?(o=new dv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function nA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new St};break;case"SpotLight":n={position:new B,direction:new B,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function iA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let rA=0;function sA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function oA(t){const e=new nA,n=iA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new Zt,o=new Zt;function a(c){let d=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let g=0,y=0,w=0,_=0,u=0,v=0,x=0,S=0,R=0,P=0,L=0;c.sort(sA);for(let E=0,M=c.length;E<M;E++){const U=c[E],G=U.color,te=U.intensity,ae=U.distance,ue=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=G.r*te,f+=G.g*te,h+=G.b*te;else if(U.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(U.sh.coefficients[H],te);L++}else if(U.isDirectionalLight){const H=e.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const K=U.shadow,F=n.get(U);F.shadowIntensity=K.intensity,F.shadowBias=K.bias,F.shadowNormalBias=K.normalBias,F.shadowRadius=K.radius,F.shadowMapSize=K.mapSize,i.directionalShadow[g]=F,i.directionalShadowMap[g]=ue,i.directionalShadowMatrix[g]=U.shadow.matrix,v++}i.directional[g]=H,g++}else if(U.isSpotLight){const H=e.get(U);H.position.setFromMatrixPosition(U.matrixWorld),H.color.copy(G).multiplyScalar(te),H.distance=ae,H.coneCos=Math.cos(U.angle),H.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),H.decay=U.decay,i.spot[w]=H;const K=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,K.updateMatrices(U),U.castShadow&&P++),i.spotLightMatrix[w]=K.matrix,U.castShadow){const F=n.get(U);F.shadowIntensity=K.intensity,F.shadowBias=K.bias,F.shadowNormalBias=K.normalBias,F.shadowRadius=K.radius,F.shadowMapSize=K.mapSize,i.spotShadow[w]=F,i.spotShadowMap[w]=ue,S++}w++}else if(U.isRectAreaLight){const H=e.get(U);H.color.copy(G).multiplyScalar(te),H.halfWidth.set(U.width*.5,0,0),H.halfHeight.set(0,U.height*.5,0),i.rectArea[_]=H,_++}else if(U.isPointLight){const H=e.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),H.distance=U.distance,H.decay=U.decay,U.castShadow){const K=U.shadow,F=n.get(U);F.shadowIntensity=K.intensity,F.shadowBias=K.bias,F.shadowNormalBias=K.normalBias,F.shadowRadius=K.radius,F.shadowMapSize=K.mapSize,F.shadowCameraNear=K.camera.near,F.shadowCameraFar=K.camera.far,i.pointShadow[y]=F,i.pointShadowMap[y]=ue,i.pointShadowMatrix[y]=U.shadow.matrix,x++}i.point[y]=H,y++}else if(U.isHemisphereLight){const H=e.get(U);H.skyColor.copy(U.color).multiplyScalar(te),H.groundColor.copy(U.groundColor).multiplyScalar(te),i.hemi[u]=H,u++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==g||D.pointLength!==y||D.spotLength!==w||D.rectAreaLength!==_||D.hemiLength!==u||D.numDirectionalShadows!==v||D.numPointShadows!==x||D.numSpotShadows!==S||D.numSpotMaps!==R||D.numLightProbes!==L)&&(i.directional.length=g,i.spot.length=w,i.rectArea.length=_,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+R-P,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,D.directionalLength=g,D.pointLength=y,D.spotLength=w,D.rectAreaLength=_,D.hemiLength=u,D.numDirectionalShadows=v,D.numPointShadows=x,D.numSpotShadows=S,D.numSpotMaps=R,D.numLightProbes=L,i.version=rA++)}function l(c,d){let f=0,h=0,g=0,y=0,w=0;const _=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const x=c[u];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(x.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const S=i.rectArea[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(x.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),h++}else if(x.isHemisphereLight){const S=i.hemi[w];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(_),w++}}}return{setup:a,setupView:l,state:i}}function fv(t){const e=new oA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function aA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new fv(t),e.set(r,[a])):s>=o.length?(a=new fv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const lA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cA=`uniform sampler2D shadow_pass;
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
}`;function uA(t,e,n){let i=new em;const r=new Je,s=new Je,o=new Ht,a=new DS({depthPacking:IM}),l=new NS,c={},d=n.maxTextureSize,f={[is]:fi,[fi]:is,[Kt]:Kt},h=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:lA,fragmentShader:cA}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const y=new gn;y.setAttribute("position",new sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new j(y,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=L_;let u=this.type;this.render=function(P,L,D){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),G=t.state;G.setBlending(Qr),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const te=u!==pr&&this.type===pr,ae=u===pr&&this.type!==pr;for(let ue=0,H=P.length;ue<H;ue++){const K=P[ue],F=K.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const ne=F.getFrameExtents();if(r.multiply(ne),s.copy(F.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ne.x),r.x=s.x*ne.x,F.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ne.y),r.y=s.y*ne.y,F.mapSize.y=s.y)),F.map===null||te===!0||ae===!0){const Ee=this.type!==pr?{minFilter:qi,magFilter:qi}:{};F.map!==null&&F.map.dispose(),F.map=new Os(r.x,r.y,Ee),F.map.texture.name=K.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const se=F.getViewportCount();for(let Ee=0;Ee<se;Ee++){const Oe=F.getViewport(Ee);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),G.viewport(o),F.updateMatrices(K,Ee),i=F.getFrustum(),S(L,D,F.camera,K,this.type)}F.isPointLightShadow!==!0&&this.type===pr&&v(F,D),F.needsUpdate=!1}u=this.type,_.needsUpdate=!1,t.setRenderTarget(E,M,U)};function v(P,L){const D=e.update(w);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Os(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(L,null,D,h,w,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(L,null,D,g,w,null)}function x(P,L,D,E){let M=null;const U=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)M=U;else if(M=D.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const G=M.uuid,te=L.uuid;let ae=c[G];ae===void 0&&(ae={},c[G]=ae);let ue=ae[te];ue===void 0&&(ue=M.clone(),ae[te]=ue,L.addEventListener("dispose",R)),M=ue}if(M.visible=L.visible,M.wireframe=L.wireframe,E===pr?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:f[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=t.properties.get(M);G.light=D}return M}function S(P,L,D,E,M){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===pr)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const te=e.update(P),ae=P.material;if(Array.isArray(ae)){const ue=te.groups;for(let H=0,K=ue.length;H<K;H++){const F=ue[H],ne=ae[F.materialIndex];if(ne&&ne.visible){const se=x(P,ne,E,M);P.onBeforeShadow(t,P,L,D,te,se,F),t.renderBufferDirect(D,null,te,se,P,F),P.onAfterShadow(t,P,L,D,te,se,F)}}}else if(ae.visible){const ue=x(P,ae,E,M);P.onBeforeShadow(t,P,L,D,te,ue,null),t.renderBufferDirect(D,null,te,ue,P,null),P.onAfterShadow(t,P,L,D,te,ue,null)}}const G=P.children;for(let te=0,ae=G.length;te<ae;te++)S(G[te],L,D,E,M)}function R(P){P.target.removeEventListener("dispose",R);for(const D in c){const E=c[D],M=P.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const dA={[oh]:ah,[lh]:dh,[ch]:fh,[Ho]:uh,[ah]:oh,[dh]:lh,[fh]:ch,[uh]:Ho};function fA(t,e){function n(){let X=!1;const Ae=new Ht;let Re=null;const He=new Ht(0,0,0,0);return{setMask:function(Me){Re!==Me&&!X&&(t.colorMask(Me,Me,Me,Me),Re=Me)},setLocked:function(Me){X=Me},setClear:function(Me,ve,Ye,lt,Ft){Ft===!0&&(Me*=lt,ve*=lt,Ye*=lt),Ae.set(Me,ve,Ye,lt),He.equals(Ae)===!1&&(t.clearColor(Me,ve,Ye,lt),He.copy(Ae))},reset:function(){X=!1,Re=null,He.set(-1,0,0,0)}}}function i(){let X=!1,Ae=!1,Re=null,He=null,Me=null;return{setReversed:function(ve){if(Ae!==ve){const Ye=e.get("EXT_clip_control");ve?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const lt=Me;Me=null,this.setClear(lt)}},getReversed:function(){return Ae},setTest:function(ve){ve?pe(t.DEPTH_TEST):Ue(t.DEPTH_TEST)},setMask:function(ve){Re!==ve&&!X&&(t.depthMask(ve),Re=ve)},setFunc:function(ve){if(Ae&&(ve=dA[ve]),He!==ve){switch(ve){case oh:t.depthFunc(t.NEVER);break;case ah:t.depthFunc(t.ALWAYS);break;case lh:t.depthFunc(t.LESS);break;case Ho:t.depthFunc(t.LEQUAL);break;case ch:t.depthFunc(t.EQUAL);break;case uh:t.depthFunc(t.GEQUAL);break;case dh:t.depthFunc(t.GREATER);break;case fh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}He=ve}},setLocked:function(ve){X=ve},setClear:function(ve){Me!==ve&&(Ae&&(ve=1-ve),t.clearDepth(ve),Me=ve)},reset:function(){X=!1,Re=null,He=null,Me=null,Ae=!1}}}function r(){let X=!1,Ae=null,Re=null,He=null,Me=null,ve=null,Ye=null,lt=null,Ft=null;return{setTest:function(yt){X||(yt?pe(t.STENCIL_TEST):Ue(t.STENCIL_TEST))},setMask:function(yt){Ae!==yt&&!X&&(t.stencilMask(yt),Ae=yt)},setFunc:function(yt,un,$n){(Re!==yt||He!==un||Me!==$n)&&(t.stencilFunc(yt,un,$n),Re=yt,He=un,Me=$n)},setOp:function(yt,un,$n){(ve!==yt||Ye!==un||lt!==$n)&&(t.stencilOp(yt,un,$n),ve=yt,Ye=un,lt=$n)},setLocked:function(yt){X=yt},setClear:function(yt){Ft!==yt&&(t.clearStencil(yt),Ft=yt)},reset:function(){X=!1,Ae=null,Re=null,He=null,Me=null,ve=null,Ye=null,lt=null,Ft=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,g=[],y=null,w=!1,_=null,u=null,v=null,x=null,S=null,R=null,P=null,L=new St(0,0,0),D=0,E=!1,M=null,U=null,G=null,te=null,ae=null;const ue=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(F)[1]),H=K>=1):F.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),H=K>=2);let ne=null,se={};const Ee=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),ut=new Ht().fromArray(Ee),Le=new Ht().fromArray(Oe);function le(X,Ae,Re,He){const Me=new Uint8Array(4),ve=t.createTexture();t.bindTexture(X,ve),t.texParameteri(X,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(X,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<Re;Ye++)X===t.TEXTURE_3D||X===t.TEXTURE_2D_ARRAY?t.texImage3D(Ae,0,t.RGBA,1,1,He,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(Ae+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return ve}const z={};z[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),z[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),z[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(t.DEPTH_TEST),o.setFunc(Ho),Ge(!1),k(cg),pe(t.CULL_FACE),Rt(Qr);function pe(X){d[X]!==!0&&(t.enable(X),d[X]=!0)}function Ue(X){d[X]!==!1&&(t.disable(X),d[X]=!1)}function nt(X,Ae){return f[X]!==Ae?(t.bindFramebuffer(X,Ae),f[X]=Ae,X===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Ae),X===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ce(X,Ae){let Re=g,He=!1;if(X){Re=h.get(Ae),Re===void 0&&(Re=[],h.set(Ae,Re));const Me=X.textures;if(Re.length!==Me.length||Re[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,Ye=Me.length;ve<Ye;ve++)Re[ve]=t.COLOR_ATTACHMENT0+ve;Re.length=Me.length,He=!0}}else Re[0]!==t.BACK&&(Re[0]=t.BACK,He=!0);He&&t.drawBuffers(Re)}function _t(X){return y!==X?(t.useProgram(X),y=X,!0):!1}const hn={[ws]:t.FUNC_ADD,[sM]:t.FUNC_SUBTRACT,[oM]:t.FUNC_REVERSE_SUBTRACT};hn[aM]=t.MIN,hn[lM]=t.MAX;const O={[cM]:t.ZERO,[uM]:t.ONE,[dM]:t.SRC_COLOR,[rh]:t.SRC_ALPHA,[vM]:t.SRC_ALPHA_SATURATE,[mM]:t.DST_COLOR,[hM]:t.DST_ALPHA,[fM]:t.ONE_MINUS_SRC_COLOR,[sh]:t.ONE_MINUS_SRC_ALPHA,[gM]:t.ONE_MINUS_DST_COLOR,[pM]:t.ONE_MINUS_DST_ALPHA,[_M]:t.CONSTANT_COLOR,[xM]:t.ONE_MINUS_CONSTANT_COLOR,[yM]:t.CONSTANT_ALPHA,[MM]:t.ONE_MINUS_CONSTANT_ALPHA};function Rt(X,Ae,Re,He,Me,ve,Ye,lt,Ft,yt){if(X===Qr){w===!0&&(Ue(t.BLEND),w=!1);return}if(w===!1&&(pe(t.BLEND),w=!0),X!==rM){if(X!==_||yt!==E){if((u!==ws||S!==ws)&&(t.blendEquation(t.FUNC_ADD),u=ws,S=ws),yt)switch(X){case Lo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ug:t.blendFunc(t.ONE,t.ONE);break;case dg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Lo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ug:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case dg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}v=null,x=null,R=null,P=null,L.set(0,0,0),D=0,_=X,E=yt}return}Me=Me||Ae,ve=ve||Re,Ye=Ye||He,(Ae!==u||Me!==S)&&(t.blendEquationSeparate(hn[Ae],hn[Me]),u=Ae,S=Me),(Re!==v||He!==x||ve!==R||Ye!==P)&&(t.blendFuncSeparate(O[Re],O[He],O[ve],O[Ye]),v=Re,x=He,R=ve,P=Ye),(lt.equals(L)===!1||Ft!==D)&&(t.blendColor(lt.r,lt.g,lt.b,Ft),L.copy(lt),D=Ft),_=X,E=!1}function at(X,Ae){X.side===Kt?Ue(t.CULL_FACE):pe(t.CULL_FACE);let Re=X.side===fi;Ae&&(Re=!Re),Ge(Re),X.blending===Lo&&X.transparent===!1?Rt(Qr):Rt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),s.setMask(X.colorWrite);const He=X.stencilWrite;a.setTest(He),He&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ce(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):Ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(X){M!==X&&(X?t.frontFace(t.CW):t.frontFace(t.CCW),M=X)}function k(X){X!==nM?(pe(t.CULL_FACE),X!==U&&(X===cg?t.cullFace(t.BACK):X===iM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ue(t.CULL_FACE),U=X}function Pe(X){X!==G&&(H&&t.lineWidth(X),G=X)}function ce(X,Ae,Re){X?(pe(t.POLYGON_OFFSET_FILL),(te!==Ae||ae!==Re)&&(t.polygonOffset(Ae,Re),te=Ae,ae=Re)):Ue(t.POLYGON_OFFSET_FILL)}function de(X){X?pe(t.SCISSOR_TEST):Ue(t.SCISSOR_TEST)}function Ze(X){X===void 0&&(X=t.TEXTURE0+ue-1),ne!==X&&(t.activeTexture(X),ne=X)}function it(X,Ae,Re){Re===void 0&&(ne===null?Re=t.TEXTURE0+ue-1:Re=ne);let He=se[Re];He===void 0&&(He={type:void 0,texture:void 0},se[Re]=He),(He.type!==X||He.texture!==Ae)&&(ne!==Re&&(t.activeTexture(Re),ne=Re),t.bindTexture(X,Ae||z[X]),He.type=X,He.texture=Ae)}function I(){const X=se[ne];X!==void 0&&X.type!==void 0&&(t.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function A(){try{t.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Z(){try{t.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{t.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{t.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{t.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{t.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{t.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xe(){try{t.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function je(){try{t.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ye(){try{t.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(X){ut.equals(X)===!1&&(t.scissor(X.x,X.y,X.z,X.w),ut.copy(X))}function st(X){Le.equals(X)===!1&&(t.viewport(X.x,X.y,X.z,X.w),Le.copy(X))}function $e(X,Ae){let Re=c.get(Ae);Re===void 0&&(Re=new WeakMap,c.set(Ae,Re));let He=Re.get(X);He===void 0&&(He=t.getUniformBlockIndex(Ae,X.name),Re.set(X,He))}function De(X,Ae){const He=c.get(Ae).get(X);l.get(Ae)!==He&&(t.uniformBlockBinding(Ae,He,X.__bindingPointIndex),l.set(Ae,He))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},ne=null,se={},f={},h=new WeakMap,g=[],y=null,w=!1,_=null,u=null,v=null,x=null,S=null,R=null,P=null,L=new St(0,0,0),D=0,E=!1,M=null,U=null,G=null,te=null,ae=null,ut.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:Ue,bindFramebuffer:nt,drawBuffers:Ce,useProgram:_t,setBlending:Rt,setMaterial:at,setFlipSided:Ge,setCullFace:k,setLineWidth:Pe,setPolygonOffset:ce,setScissorTest:de,activeTexture:Ze,bindTexture:it,unbindTexture:I,compressedTexImage2D:A,compressedTexImage3D:Z,texImage2D:je,texImage3D:ye,updateUBOMapping:$e,uniformBlockBinding:De,texStorage2D:xe,texStorage3D:Xe,texSubImage2D:he,texSubImage3D:_e,compressedTexSubImage2D:fe,compressedTexSubImage3D:Fe,scissor:Te,viewport:st,reset:ct}}function hA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,d=new WeakMap;let f;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,A){return g?new OffscreenCanvas(I,A):ou("canvas")}function w(I,A,Z){let he=1;const _e=it(I);if((_e.width>Z||_e.height>Z)&&(he=Z/Math.max(_e.width,_e.height)),he<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const fe=Math.floor(he*_e.width),Fe=Math.floor(he*_e.height);f===void 0&&(f=y(fe,Fe));const xe=A?y(fe,Fe):f;return xe.width=fe,xe.height=Fe,xe.getContext("2d").drawImage(I,0,0,fe,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+Fe+")."),xe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),I;return I}function _(I){return I.generateMipmaps}function u(I){t.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?t.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(I,A,Z,he,_e=!1){if(I!==null){if(t[I]!==void 0)return t[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let fe=A;if(A===t.RED&&(Z===t.FLOAT&&(fe=t.R32F),Z===t.HALF_FLOAT&&(fe=t.R16F),Z===t.UNSIGNED_BYTE&&(fe=t.R8)),A===t.RED_INTEGER&&(Z===t.UNSIGNED_BYTE&&(fe=t.R8UI),Z===t.UNSIGNED_SHORT&&(fe=t.R16UI),Z===t.UNSIGNED_INT&&(fe=t.R32UI),Z===t.BYTE&&(fe=t.R8I),Z===t.SHORT&&(fe=t.R16I),Z===t.INT&&(fe=t.R32I)),A===t.RG&&(Z===t.FLOAT&&(fe=t.RG32F),Z===t.HALF_FLOAT&&(fe=t.RG16F),Z===t.UNSIGNED_BYTE&&(fe=t.RG8)),A===t.RG_INTEGER&&(Z===t.UNSIGNED_BYTE&&(fe=t.RG8UI),Z===t.UNSIGNED_SHORT&&(fe=t.RG16UI),Z===t.UNSIGNED_INT&&(fe=t.RG32UI),Z===t.BYTE&&(fe=t.RG8I),Z===t.SHORT&&(fe=t.RG16I),Z===t.INT&&(fe=t.RG32I)),A===t.RGB_INTEGER&&(Z===t.UNSIGNED_BYTE&&(fe=t.RGB8UI),Z===t.UNSIGNED_SHORT&&(fe=t.RGB16UI),Z===t.UNSIGNED_INT&&(fe=t.RGB32UI),Z===t.BYTE&&(fe=t.RGB8I),Z===t.SHORT&&(fe=t.RGB16I),Z===t.INT&&(fe=t.RGB32I)),A===t.RGBA_INTEGER&&(Z===t.UNSIGNED_BYTE&&(fe=t.RGBA8UI),Z===t.UNSIGNED_SHORT&&(fe=t.RGBA16UI),Z===t.UNSIGNED_INT&&(fe=t.RGBA32UI),Z===t.BYTE&&(fe=t.RGBA8I),Z===t.SHORT&&(fe=t.RGBA16I),Z===t.INT&&(fe=t.RGBA32I)),A===t.RGB&&(Z===t.UNSIGNED_INT_5_9_9_9_REV&&(fe=t.RGB9_E5),Z===t.UNSIGNED_INT_10F_11F_11F_REV&&(fe=t.R11F_G11F_B10F)),A===t.RGBA){const Fe=_e?ru:Lt.getTransfer(he);Z===t.FLOAT&&(fe=t.RGBA32F),Z===t.HALF_FLOAT&&(fe=t.RGBA16F),Z===t.UNSIGNED_BYTE&&(fe=Fe===Bt?t.SRGB8_ALPHA8:t.RGBA8),Z===t.UNSIGNED_SHORT_4_4_4_4&&(fe=t.RGBA4),Z===t.UNSIGNED_SHORT_5_5_5_1&&(fe=t.RGB5_A1)}return(fe===t.R16F||fe===t.R32F||fe===t.RG16F||fe===t.RG32F||fe===t.RGBA16F||fe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function S(I,A){let Z;return I?A===null||A===ks||A===al?Z=t.DEPTH24_STENCIL8:A===xr?Z=t.DEPTH32F_STENCIL8:A===ol&&(Z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ks||A===al?Z=t.DEPTH_COMPONENT24:A===xr?Z=t.DEPTH_COMPONENT32F:A===ol&&(Z=t.DEPTH_COMPONENT16),Z}function R(I,A){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==qi&&I.minFilter!==tr?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function P(I){const A=I.target;A.removeEventListener("dispose",P),D(A),A.isVideoTexture&&d.delete(A)}function L(I){const A=I.target;A.removeEventListener("dispose",L),M(A)}function D(I){const A=i.get(I);if(A.__webglInit===void 0)return;const Z=I.source,he=h.get(Z);if(he){const _e=he[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&E(I),Object.keys(he).length===0&&h.delete(Z)}i.remove(I)}function E(I){const A=i.get(I);t.deleteTexture(A.__webglTexture);const Z=I.source,he=h.get(Z);delete he[A.__cacheKey],o.memory.textures--}function M(I){const A=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(A.__webglFramebuffer[he]))for(let _e=0;_e<A.__webglFramebuffer[he].length;_e++)t.deleteFramebuffer(A.__webglFramebuffer[he][_e]);else t.deleteFramebuffer(A.__webglFramebuffer[he]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[he])}else{if(Array.isArray(A.__webglFramebuffer))for(let he=0;he<A.__webglFramebuffer.length;he++)t.deleteFramebuffer(A.__webglFramebuffer[he]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let he=0;he<A.__webglColorRenderbuffer.length;he++)A.__webglColorRenderbuffer[he]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[he]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=I.textures;for(let he=0,_e=Z.length;he<_e;he++){const fe=i.get(Z[he]);fe.__webglTexture&&(t.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(Z[he])}i.remove(I)}let U=0;function G(){U=0}function te(){const I=U;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),U+=1,I}function ae(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function ue(I,A){const Z=i.get(I);if(I.isVideoTexture&&de(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){const he=I.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(Z,I,A);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,Z.__webglTexture,t.TEXTURE0+A)}function H(I,A){const Z=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){z(Z,I,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Z.__webglTexture,t.TEXTURE0+A)}function K(I,A){const Z=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){z(Z,I,A);return}n.bindTexture(t.TEXTURE_3D,Z.__webglTexture,t.TEXTURE0+A)}function F(I,A){const Z=i.get(I);if(I.version>0&&Z.__version!==I.version){pe(Z,I,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture,t.TEXTURE0+A)}const ne={[Io]:t.REPEAT,[Cs]:t.CLAMP_TO_EDGE,[mh]:t.MIRRORED_REPEAT},se={[qi]:t.NEAREST,[PM]:t.NEAREST_MIPMAP_NEAREST,[Wl]:t.NEAREST_MIPMAP_LINEAR,[tr]:t.LINEAR,[Sd]:t.LINEAR_MIPMAP_NEAREST,[Rs]:t.LINEAR_MIPMAP_LINEAR},Ee={[NM]:t.NEVER,[BM]:t.ALWAYS,[UM]:t.LESS,[G_]:t.LEQUAL,[FM]:t.EQUAL,[zM]:t.GEQUAL,[kM]:t.GREATER,[OM]:t.NOTEQUAL};function Oe(I,A){if(A.type===xr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===tr||A.magFilter===Sd||A.magFilter===Wl||A.magFilter===Rs||A.minFilter===tr||A.minFilter===Sd||A.minFilter===Wl||A.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(I,t.TEXTURE_WRAP_S,ne[A.wrapS]),t.texParameteri(I,t.TEXTURE_WRAP_T,ne[A.wrapT]),(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)&&t.texParameteri(I,t.TEXTURE_WRAP_R,ne[A.wrapR]),t.texParameteri(I,t.TEXTURE_MAG_FILTER,se[A.magFilter]),t.texParameteri(I,t.TEXTURE_MIN_FILTER,se[A.minFilter]),A.compareFunction&&(t.texParameteri(I,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(I,t.TEXTURE_COMPARE_FUNC,Ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===qi||A.minFilter!==Wl&&A.minFilter!==Rs||A.type===xr&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function ut(I,A){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",P));const he=A.source;let _e=h.get(he);_e===void 0&&(_e={},h.set(he,_e));const fe=ae(A);if(fe!==I.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),_e[fe].usedTimes++;const Fe=_e[I.__cacheKey];Fe!==void 0&&(_e[I.__cacheKey].usedTimes--,Fe.usedTimes===0&&E(A)),I.__cacheKey=fe,I.__webglTexture=_e[fe].texture}return Z}function Le(I,A,Z){return Math.floor(Math.floor(I/Z)/A)}function le(I,A,Z,he){const fe=I.updateRanges;if(fe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,A.width,A.height,Z,he,A.data);else{fe.sort((ye,Te)=>ye.start-Te.start);let Fe=0;for(let ye=1;ye<fe.length;ye++){const Te=fe[Fe],st=fe[ye],$e=Te.start+Te.count,De=Le(st.start,A.width,4),ct=Le(Te.start,A.width,4);st.start<=$e+1&&De===ct&&Le(st.start+st.count-1,A.width,4)===De?Te.count=Math.max(Te.count,st.start+st.count-Te.start):(++Fe,fe[Fe]=st)}fe.length=Fe+1;const xe=t.getParameter(t.UNPACK_ROW_LENGTH),Xe=t.getParameter(t.UNPACK_SKIP_PIXELS),je=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,A.width);for(let ye=0,Te=fe.length;ye<Te;ye++){const st=fe[ye],$e=Math.floor(st.start/4),De=Math.ceil(st.count/4),ct=$e%A.width,X=Math.floor($e/A.width),Ae=De,Re=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(t.UNPACK_SKIP_ROWS,X),n.texSubImage2D(t.TEXTURE_2D,0,ct,X,Ae,Re,Z,he,A.data)}I.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,xe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(t.UNPACK_SKIP_ROWS,je)}}function z(I,A,Z){let he=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(he=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(he=t.TEXTURE_3D);const _e=ut(I,A),fe=A.source;n.bindTexture(he,I.__webglTexture,t.TEXTURE0+Z);const Fe=i.get(fe);if(fe.version!==Fe.__version||_e===!0){n.activeTexture(t.TEXTURE0+Z);const xe=Lt.getPrimaries(Lt.workingColorSpace),Xe=A.colorSpace===Vr?null:Lt.getPrimaries(A.colorSpace),je=A.colorSpace===Vr||xe===Xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ye=w(A.image,!1,r.maxTextureSize);ye=Ze(A,ye);const Te=s.convert(A.format,A.colorSpace),st=s.convert(A.type);let $e=x(A.internalFormat,Te,st,A.colorSpace,A.isVideoTexture);Oe(he,A);let De;const ct=A.mipmaps,X=A.isVideoTexture!==!0,Ae=Fe.__version===void 0||_e===!0,Re=fe.dataReady,He=R(A,ye);if(A.isDepthTexture)$e=S(A.format===cl,A.type),Ae&&(X?n.texStorage2D(t.TEXTURE_2D,1,$e,ye.width,ye.height):n.texImage2D(t.TEXTURE_2D,0,$e,ye.width,ye.height,0,Te,st,null));else if(A.isDataTexture)if(ct.length>0){X&&Ae&&n.texStorage2D(t.TEXTURE_2D,He,$e,ct[0].width,ct[0].height);for(let Me=0,ve=ct.length;Me<ve;Me++)De=ct[Me],X?Re&&n.texSubImage2D(t.TEXTURE_2D,Me,0,0,De.width,De.height,Te,st,De.data):n.texImage2D(t.TEXTURE_2D,Me,$e,De.width,De.height,0,Te,st,De.data);A.generateMipmaps=!1}else X?(Ae&&n.texStorage2D(t.TEXTURE_2D,He,$e,ye.width,ye.height),Re&&le(A,ye,Te,st)):n.texImage2D(t.TEXTURE_2D,0,$e,ye.width,ye.height,0,Te,st,ye.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){X&&Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,$e,ct[0].width,ct[0].height,ye.depth);for(let Me=0,ve=ct.length;Me<ve;Me++)if(De=ct[Me],A.format!==Xi)if(Te!==null)if(X){if(Re)if(A.layerUpdates.size>0){const Ye=Vg(De.width,De.height,A.format,A.type);for(const lt of A.layerUpdates){const Ft=De.data.subarray(lt*Ye/De.data.BYTES_PER_ELEMENT,(lt+1)*Ye/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Me,0,0,lt,De.width,De.height,1,Te,Ft)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,ye.depth,Te,De.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Me,$e,De.width,De.height,ye.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Re&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,ye.depth,Te,st,De.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Me,$e,De.width,De.height,ye.depth,0,Te,st,De.data)}else{X&&Ae&&n.texStorage2D(t.TEXTURE_2D,He,$e,ct[0].width,ct[0].height);for(let Me=0,ve=ct.length;Me<ve;Me++)De=ct[Me],A.format!==Xi?Te!==null?X?Re&&n.compressedTexSubImage2D(t.TEXTURE_2D,Me,0,0,De.width,De.height,Te,De.data):n.compressedTexImage2D(t.TEXTURE_2D,Me,$e,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Re&&n.texSubImage2D(t.TEXTURE_2D,Me,0,0,De.width,De.height,Te,st,De.data):n.texImage2D(t.TEXTURE_2D,Me,$e,De.width,De.height,0,Te,st,De.data)}else if(A.isDataArrayTexture)if(X){if(Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,$e,ye.width,ye.height,ye.depth),Re)if(A.layerUpdates.size>0){const Me=Vg(ye.width,ye.height,A.format,A.type);for(const ve of A.layerUpdates){const Ye=ye.data.subarray(ve*Me/ye.data.BYTES_PER_ELEMENT,(ve+1)*Me/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ve,ye.width,ye.height,1,Te,st,Ye)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Te,st,ye.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,$e,ye.width,ye.height,ye.depth,0,Te,st,ye.data);else if(A.isData3DTexture)X?(Ae&&n.texStorage3D(t.TEXTURE_3D,He,$e,ye.width,ye.height,ye.depth),Re&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Te,st,ye.data)):n.texImage3D(t.TEXTURE_3D,0,$e,ye.width,ye.height,ye.depth,0,Te,st,ye.data);else if(A.isFramebufferTexture){if(Ae)if(X)n.texStorage2D(t.TEXTURE_2D,He,$e,ye.width,ye.height);else{let Me=ye.width,ve=ye.height;for(let Ye=0;Ye<He;Ye++)n.texImage2D(t.TEXTURE_2D,Ye,$e,Me,ve,0,Te,st,null),Me>>=1,ve>>=1}}else if(ct.length>0){if(X&&Ae){const Me=it(ct[0]);n.texStorage2D(t.TEXTURE_2D,He,$e,Me.width,Me.height)}for(let Me=0,ve=ct.length;Me<ve;Me++)De=ct[Me],X?Re&&n.texSubImage2D(t.TEXTURE_2D,Me,0,0,Te,st,De):n.texImage2D(t.TEXTURE_2D,Me,$e,Te,st,De);A.generateMipmaps=!1}else if(X){if(Ae){const Me=it(ye);n.texStorage2D(t.TEXTURE_2D,He,$e,Me.width,Me.height)}Re&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,st,ye)}else n.texImage2D(t.TEXTURE_2D,0,$e,Te,st,ye);_(A)&&u(he),Fe.__version=fe.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function pe(I,A,Z){if(A.image.length!==6)return;const he=ut(I,A),_e=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+Z);const fe=i.get(_e);if(_e.version!==fe.__version||he===!0){n.activeTexture(t.TEXTURE0+Z);const Fe=Lt.getPrimaries(Lt.workingColorSpace),xe=A.colorSpace===Vr?null:Lt.getPrimaries(A.colorSpace),Xe=A.colorSpace===Vr||Fe===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const je=A.isCompressedTexture||A.image[0].isCompressedTexture,ye=A.image[0]&&A.image[0].isDataTexture,Te=[];for(let ve=0;ve<6;ve++)!je&&!ye?Te[ve]=w(A.image[ve],!0,r.maxCubemapSize):Te[ve]=ye?A.image[ve].image:A.image[ve],Te[ve]=Ze(A,Te[ve]);const st=Te[0],$e=s.convert(A.format,A.colorSpace),De=s.convert(A.type),ct=x(A.internalFormat,$e,De,A.colorSpace),X=A.isVideoTexture!==!0,Ae=fe.__version===void 0||he===!0,Re=_e.dataReady;let He=R(A,st);Oe(t.TEXTURE_CUBE_MAP,A);let Me;if(je){X&&Ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,He,ct,st.width,st.height);for(let ve=0;ve<6;ve++){Me=Te[ve].mipmaps;for(let Ye=0;Ye<Me.length;Ye++){const lt=Me[Ye];A.format!==Xi?$e!==null?X?Re&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,0,0,lt.width,lt.height,$e,lt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,ct,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,0,0,lt.width,lt.height,$e,De,lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,ct,lt.width,lt.height,0,$e,De,lt.data)}}}else{if(Me=A.mipmaps,X&&Ae){Me.length>0&&He++;const ve=it(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,He,ct,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(ye){X?Re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Te[ve].width,Te[ve].height,$e,De,Te[ve].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ct,Te[ve].width,Te[ve].height,0,$e,De,Te[ve].data);for(let Ye=0;Ye<Me.length;Ye++){const Ft=Me[Ye].image[ve].image;X?Re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,0,0,Ft.width,Ft.height,$e,De,Ft.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,ct,Ft.width,Ft.height,0,$e,De,Ft.data)}}else{X?Re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,$e,De,Te[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ct,$e,De,Te[ve]);for(let Ye=0;Ye<Me.length;Ye++){const lt=Me[Ye];X?Re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,0,0,$e,De,lt.image[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,ct,$e,De,lt.image[ve])}}}_(A)&&u(t.TEXTURE_CUBE_MAP),fe.__version=_e.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Ue(I,A,Z,he,_e,fe){const Fe=s.convert(Z.format,Z.colorSpace),xe=s.convert(Z.type),Xe=x(Z.internalFormat,Fe,xe,Z.colorSpace),je=i.get(A),ye=i.get(Z);if(ye.__renderTarget=A,!je.__hasExternalTextures){const Te=Math.max(1,A.width>>fe),st=Math.max(1,A.height>>fe);_e===t.TEXTURE_3D||_e===t.TEXTURE_2D_ARRAY?n.texImage3D(_e,fe,Xe,Te,st,A.depth,0,Fe,xe,null):n.texImage2D(_e,fe,Xe,Te,st,0,Fe,xe,null)}n.bindFramebuffer(t.FRAMEBUFFER,I),ce(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,_e,ye.__webglTexture,0,Pe(A)):(_e===t.TEXTURE_2D||_e>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,he,_e,ye.__webglTexture,fe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function nt(I,A,Z){if(t.bindRenderbuffer(t.RENDERBUFFER,I),A.depthBuffer){const he=A.depthTexture,_e=he&&he.isDepthTexture?he.type:null,fe=S(A.stencilBuffer,_e),Fe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=Pe(A);ce(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,fe,A.width,A.height):Z?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,fe,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,fe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Fe,t.RENDERBUFFER,I)}else{const he=A.textures;for(let _e=0;_e<he.length;_e++){const fe=he[_e],Fe=s.convert(fe.format,fe.colorSpace),xe=s.convert(fe.type),Xe=x(fe.internalFormat,Fe,xe,fe.colorSpace),je=Pe(A);Z&&ce(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,je,Xe,A.width,A.height):ce(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je,Xe,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,Xe,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=i.get(A.depthTexture);he.__renderTarget=A,(!he.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ue(A.depthTexture,0);const _e=he.__webglTexture,fe=Pe(A);if(A.depthTexture.format===ll)ce(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0);else if(A.depthTexture.format===cl)ce(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function _t(I){const A=i.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const he=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),he){const _e=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,he.removeEventListener("dispose",_e)};he.addEventListener("dispose",_e),A.__depthDisposeCallback=_e}A.__boundDepthTexture=he}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const he=I.texture.mipmaps;he&&he.length>0?Ce(A.__webglFramebuffer[0],I):Ce(A.__webglFramebuffer,I)}else if(Z){A.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[he]),A.__webglDepthbuffer[he]===void 0)A.__webglDepthbuffer[he]=t.createRenderbuffer(),nt(A.__webglDepthbuffer[he],I,!1);else{const _e=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[he];t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,fe)}}else{const he=I.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=t.createRenderbuffer(),nt(A.__webglDepthbuffer,I,!1);else{const _e=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,fe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function hn(I,A,Z){const he=i.get(I);A!==void 0&&Ue(he.__webglFramebuffer,I,I.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Z!==void 0&&_t(I)}function O(I){const A=I.texture,Z=i.get(I),he=i.get(A);I.addEventListener("dispose",L);const _e=I.textures,fe=I.isWebGLCubeRenderTarget===!0,Fe=_e.length>1;if(Fe||(he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture()),he.__version=A.version,o.memory.textures++),fe){Z.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[xe]=[];for(let Xe=0;Xe<A.mipmaps.length;Xe++)Z.__webglFramebuffer[xe][Xe]=t.createFramebuffer()}else Z.__webglFramebuffer[xe]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let xe=0;xe<A.mipmaps.length;xe++)Z.__webglFramebuffer[xe]=t.createFramebuffer()}else Z.__webglFramebuffer=t.createFramebuffer();if(Fe)for(let xe=0,Xe=_e.length;xe<Xe;xe++){const je=i.get(_e[xe]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),o.memory.textures++)}if(I.samples>0&&ce(I)===!1){Z.__webglMultisampledFramebuffer=t.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let xe=0;xe<_e.length;xe++){const Xe=_e[xe];Z.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Z.__webglColorRenderbuffer[xe]);const je=s.convert(Xe.format,Xe.colorSpace),ye=s.convert(Xe.type),Te=x(Xe.internalFormat,je,ye,Xe.colorSpace,I.isXRRenderTarget===!0),st=Pe(I);t.renderbufferStorageMultisample(t.RENDERBUFFER,st,Te,I.width,I.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,Z.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=t.createRenderbuffer(),nt(Z.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(fe){n.bindTexture(t.TEXTURE_CUBE_MAP,he.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,A);for(let xe=0;xe<6;xe++)if(A.mipmaps&&A.mipmaps.length>0)for(let Xe=0;Xe<A.mipmaps.length;Xe++)Ue(Z.__webglFramebuffer[xe][Xe],I,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe);else Ue(Z.__webglFramebuffer[xe],I,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(A)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Fe){for(let xe=0,Xe=_e.length;xe<Xe;xe++){const je=_e[xe],ye=i.get(je);let Te=t.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Te=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Te,ye.__webglTexture),Oe(Te,je),Ue(Z.__webglFramebuffer,I,je,t.COLOR_ATTACHMENT0+xe,Te,0),_(je)&&u(Te)}n.unbindTexture()}else{let xe=t.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xe=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,he.__webglTexture),Oe(xe,A),A.mipmaps&&A.mipmaps.length>0)for(let Xe=0;Xe<A.mipmaps.length;Xe++)Ue(Z.__webglFramebuffer[Xe],I,A,t.COLOR_ATTACHMENT0,xe,Xe);else Ue(Z.__webglFramebuffer,I,A,t.COLOR_ATTACHMENT0,xe,0);_(A)&&u(xe),n.unbindTexture()}I.depthBuffer&&_t(I)}function Rt(I){const A=I.textures;for(let Z=0,he=A.length;Z<he;Z++){const _e=A[Z];if(_(_e)){const fe=v(I),Fe=i.get(_e).__webglTexture;n.bindTexture(fe,Fe),u(fe),n.unbindTexture()}}}const at=[],Ge=[];function k(I){if(I.samples>0){if(ce(I)===!1){const A=I.textures,Z=I.width,he=I.height;let _e=t.COLOR_BUFFER_BIT;const fe=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Fe=i.get(I),xe=A.length>1;if(xe)for(let je=0;je<A.length;je++)n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+je,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+je,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Xe=I.texture.mipmaps;Xe&&Xe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let je=0;je<A.length;je++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_e|=t.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_e|=t.STENCIL_BUFFER_BIT)),xe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[je]);const ye=i.get(A[je]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ye,0)}t.blitFramebuffer(0,0,Z,he,0,0,Z,he,_e,t.NEAREST),l===!0&&(at.length=0,Ge.length=0,at.push(t.COLOR_ATTACHMENT0+je),I.depthBuffer&&I.resolveDepthBuffer===!1&&(at.push(fe),Ge.push(fe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let je=0;je<A.length;je++){n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+je,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[je]);const ye=i.get(A[je]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+je,t.TEXTURE_2D,ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const A=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function Pe(I){return Math.min(r.maxSamples,I.samples)}function ce(I){const A=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function de(I){const A=o.render.frame;d.get(I)!==A&&(d.set(I,A),I.update())}function Ze(I,A){const Z=I.colorSpace,he=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==Wo&&Z!==Vr&&(Lt.getTransfer(Z)===Bt?(he!==Xi||_e!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function it(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=G,this.setTexture2D=ue,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=F,this.rebindTextures=hn,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ce}function pA(t,e){function n(i,r=Vr){let s;const o=Lt.getTransfer(r);if(i===or)return t.UNSIGNED_BYTE;if(i===Wp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===k_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===O_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===U_)return t.BYTE;if(i===F_)return t.SHORT;if(i===ol)return t.UNSIGNED_SHORT;if(i===Gp)return t.INT;if(i===ks)return t.UNSIGNED_INT;if(i===xr)return t.FLOAT;if(i===gl)return t.HALF_FLOAT;if(i===z_)return t.ALPHA;if(i===B_)return t.RGB;if(i===Xi)return t.RGBA;if(i===ll)return t.DEPTH_COMPONENT;if(i===cl)return t.DEPTH_STENCIL;if(i===H_)return t.RED;if(i===jp)return t.RED_INTEGER;if(i===V_)return t.RG;if(i===Yp)return t.RG_INTEGER;if(i===qp)return t.RGBA_INTEGER;if(i===Cc||i===Rc||i===Pc||i===Lc)if(o===Bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gh||i===vh||i===_h||i===xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_h)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yh||i===Mh||i===Sh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yh||i===Mh)return o===Bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sh)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wh||i===Eh||i===Th||i===Ah||i===bh||i===Ch||i===Rh||i===Ph||i===Lh||i===Ih||i===Dh||i===Nh||i===Uh||i===Fh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wh)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eh)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Th)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ah)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bh)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ch)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rh)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ph)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lh)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ih)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dh)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nh)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uh)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fh)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kh||i===Oh||i===zh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===kh)return o===Bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bh||i===Hh||i===Vh||i===Gh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===al?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const mA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gA=`
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

}`;class vA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Q_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new rs({vertexShader:mA,fragmentShader:gA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new j(new Zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _A extends $o{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,g=null,y=null;const w=typeof XRWebGLBinding<"u",_=new vA,u={},v=n.getContextAttributes();let x=null,S=null;const R=[],P=[],L=new Je;let D=null;const E=new _i;E.viewport=new Ht;const M=new _i;M.viewport=new Ht;const U=[E,M],G=new OS;let te=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let pe=R[z];return pe===void 0&&(pe=new Xd,R[z]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(z){let pe=R[z];return pe===void 0&&(pe=new Xd,R[z]=pe),pe.getGripSpace()},this.getHand=function(z){let pe=R[z];return pe===void 0&&(pe=new Xd,R[z]=pe),pe.getHandSpace()};function ue(z){const pe=P.indexOf(z.inputSource);if(pe===-1)return;const Ue=R[pe];Ue!==void 0&&(Ue.update(z.inputSource,z.frame,c||o),Ue.dispatchEvent({type:z.type,data:z.inputSource}))}function H(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",K);for(let z=0;z<R.length;z++){const pe=P[z];pe!==null&&(P[z]=null,R[z].disconnect(pe))}te=null,ae=null,_.reset();for(const z in u)delete u[z];e.setRenderTarget(x),g=null,h=null,f=null,r=null,S=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f===null&&w&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",H),r.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,nt=null,Ce=null;v.depth&&(Ce=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ue=v.stencil?cl:ll,nt=v.stencil?al:ks);const _t={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(_t),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Os(h.textureWidth,h.textureHeight,{format:Xi,type:or,depthTexture:new Z_(h.textureWidth,h.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,Ue),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new Os(g.framebufferWidth,g.framebufferHeight,{format:Xi,type:or,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(z){for(let pe=0;pe<z.removed.length;pe++){const Ue=z.removed[pe],nt=P.indexOf(Ue);nt>=0&&(P[nt]=null,R[nt].disconnect(Ue))}for(let pe=0;pe<z.added.length;pe++){const Ue=z.added[pe];let nt=P.indexOf(Ue);if(nt===-1){for(let _t=0;_t<R.length;_t++)if(_t>=P.length){P.push(Ue),nt=_t;break}else if(P[_t]===null){P[_t]=Ue,nt=_t;break}if(nt===-1)break}const Ce=R[nt];Ce&&Ce.connect(Ue)}}const F=new B,ne=new B;function se(z,pe,Ue){F.setFromMatrixPosition(pe.matrixWorld),ne.setFromMatrixPosition(Ue.matrixWorld);const nt=F.distanceTo(ne),Ce=pe.projectionMatrix.elements,_t=Ue.projectionMatrix.elements,hn=Ce[14]/(Ce[10]-1),O=Ce[14]/(Ce[10]+1),Rt=(Ce[9]+1)/Ce[5],at=(Ce[9]-1)/Ce[5],Ge=(Ce[8]-1)/Ce[0],k=(_t[8]+1)/_t[0],Pe=hn*Ge,ce=hn*k,de=nt/(-Ge+k),Ze=de*-Ge;if(pe.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ze),z.translateZ(de),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),Ce[10]===-1)z.projectionMatrix.copy(pe.projectionMatrix),z.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const it=hn+de,I=O+de,A=Pe-Ze,Z=ce+(nt-Ze),he=Rt*O/I*it,_e=at*O/I*it;z.projectionMatrix.makePerspective(A,Z,he,_e,it,I),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Ee(z,pe){pe===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(pe.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let pe=z.near,Ue=z.far;_.texture!==null&&(_.depthNear>0&&(pe=_.depthNear),_.depthFar>0&&(Ue=_.depthFar)),G.near=M.near=E.near=pe,G.far=M.far=E.far=Ue,(te!==G.near||ae!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),te=G.near,ae=G.far),G.layers.mask=z.layers.mask|6,E.layers.mask=G.layers.mask&3,M.layers.mask=G.layers.mask&5;const nt=z.parent,Ce=G.cameras;Ee(G,nt);for(let _t=0;_t<Ce.length;_t++)Ee(Ce[_t],nt);Ce.length===2?se(G,E,M):G.projectionMatrix.copy(E.projectionMatrix),Oe(z,G,nt)};function Oe(z,pe,Ue){Ue===null?z.matrix.copy(pe.matrixWorld):(z.matrix.copy(Ue.matrixWorld),z.matrix.invert(),z.matrix.multiply(pe.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(pe.projectionMatrix),z.projectionMatrixInverse.copy(pe.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Wh*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(G)},this.getCameraTexture=function(z){return u[z]};let ut=null;function Le(z,pe){if(d=pe.getViewerPose(c||o),y=pe,d!==null){const Ue=d.views;g!==null&&(e.setRenderTargetFramebuffer(S,g.framebuffer),e.setRenderTarget(S));let nt=!1;Ue.length!==G.cameras.length&&(G.cameras.length=0,nt=!0);for(let O=0;O<Ue.length;O++){const Rt=Ue[O];let at=null;if(g!==null)at=g.getViewport(Rt);else{const k=f.getViewSubImage(h,Rt);at=k.viewport,O===0&&(e.setRenderTargetTextures(S,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(S))}let Ge=U[O];Ge===void 0&&(Ge=new _i,Ge.layers.enable(O),Ge.viewport=new Ht,U[O]=Ge),Ge.matrix.fromArray(Rt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Rt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(at.x,at.y,at.width,at.height),O===0&&(G.matrix.copy(Ge.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),nt===!0&&G.cameras.push(Ge)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){f=i.getBinding();const O=f.getDepthInformation(Ue[0]);O&&O.isValid&&O.texture&&_.init(O,r.renderState)}if(Ce&&Ce.includes("camera-access")&&w){e.state.unbindTexture(),f=i.getBinding();for(let O=0;O<Ue.length;O++){const Rt=Ue[O].camera;if(Rt){let at=u[Rt];at||(at=new Q_,u[Rt]=at);const Ge=f.getCameraImage(Rt);at.sourceTexture=Ge}}}}for(let Ue=0;Ue<R.length;Ue++){const nt=P[Ue],Ce=R[Ue];nt!==null&&Ce!==void 0&&Ce.update(nt,pe,c||o)}ut&&ut(z,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),y=null}const le=new sx;le.setAnimationLoop(Le),this.setAnimationLoop=function(z){ut=z},this.dispose=function(){}}}const vs=new Ki,xA=new Zt;function yA(t,e){function n(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function i(_,u){u.color.getRGB(_.fogColor.value,$_(t)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function r(_,u,v,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(_,u):u.isMeshToonMaterial?(s(_,u),f(_,u)):u.isMeshPhongMaterial?(s(_,u),d(_,u)):u.isMeshStandardMaterial?(s(_,u),h(_,u),u.isMeshPhysicalMaterial&&g(_,u,S)):u.isMeshMatcapMaterial?(s(_,u),y(_,u)):u.isMeshDepthMaterial?s(_,u):u.isMeshDistanceMaterial?(s(_,u),w(_,u)):u.isMeshNormalMaterial?s(_,u):u.isLineBasicMaterial?(o(_,u),u.isLineDashedMaterial&&a(_,u)):u.isPointsMaterial?l(_,u,v,x):u.isSpriteMaterial?c(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,n(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===fi&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,n(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===fi&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,n(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,n(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const v=e.get(u),x=v.envMap,S=v.envMapRotation;x&&(_.envMap.value=x,vs.copy(S),vs.x*=-1,vs.y*=-1,vs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),_.envMapRotation.value.setFromMatrix4(xA.makeRotationFromEuler(vs)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,_.aoMapTransform))}function o(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform))}function a(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function l(_,u,v,x){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*v,_.scale.value=x*.5,u.map&&(_.map.value=u.map,n(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function c(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function d(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function f(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function h(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function g(_,u,v){_.ior.value=u.ior,u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===fi&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,u){u.matcap&&(_.matcap.value=u.matcap)}function w(_,u){const v=e.get(u).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function MA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function c(v,x){let S=r[v.id];S===void 0&&(y(v),S=d(v),r[v.id]=S,v.addEventListener("dispose",_));const R=x.program;i.updateUBOMapping(v,R);const P=e.render.frame;s[v.id]!==P&&(h(v),s[v.id]=P)}function d(v){const x=f();v.__bindingPointIndex=x;const S=t.createBuffer(),R=v.__size,P=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],S=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let P=0,L=S.length;P<L;P++){const D=Array.isArray(S[P])?S[P]:[S[P]];for(let E=0,M=D.length;E<M;E++){const U=D[E];if(g(U,P,E,R)===!0){const G=U.__offset,te=Array.isArray(U.value)?U.value:[U.value];let ae=0;for(let ue=0;ue<te.length;ue++){const H=te[ue],K=w(H);typeof H=="number"||typeof H=="boolean"?(U.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,G+ae,U.__data)):H.isMatrix3?(U.__data[0]=H.elements[0],U.__data[1]=H.elements[1],U.__data[2]=H.elements[2],U.__data[3]=0,U.__data[4]=H.elements[3],U.__data[5]=H.elements[4],U.__data[6]=H.elements[5],U.__data[7]=0,U.__data[8]=H.elements[6],U.__data[9]=H.elements[7],U.__data[10]=H.elements[8],U.__data[11]=0):(H.toArray(U.__data,ae),ae+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,x,S,R){const P=v.value,L=x+"_"+S;if(R[L]===void 0)return typeof P=="number"||typeof P=="boolean"?R[L]=P:R[L]=P.clone(),!0;{const D=R[L];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return R[L]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function y(v){const x=v.uniforms;let S=0;const R=16;for(let L=0,D=x.length;L<D;L++){const E=Array.isArray(x[L])?x[L]:[x[L]];for(let M=0,U=E.length;M<U;M++){const G=E[M],te=Array.isArray(G.value)?G.value:[G.value];for(let ae=0,ue=te.length;ae<ue;ae++){const H=te[ae],K=w(H),F=S%R,ne=F%K.boundary,se=F+ne;S+=ne,se!==0&&R-se<K.storage&&(S+=R-se),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=K.storage}}}const P=S%R;return P>0&&(S+=R-P),v.__size=S,v.__cache={},this}function w(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function _(v){const x=v.target;x.removeEventListener("dispose",_);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class SA{constructor(e={}){const{canvas:n=VM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const y=new Uint32Array(4),w=new Int32Array(4);let _=null,u=null;const v=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let R=!1;this._outputColorSpace=jn;let P=0,L=0,D=null,E=-1,M=null;const U=new Ht,G=new Ht;let te=null;const ae=new St(0);let ue=0,H=n.width,K=n.height,F=1,ne=null,se=null;const Ee=new Ht(0,0,H,K),Oe=new Ht(0,0,H,K);let ut=!1;const Le=new em;let le=!1,z=!1;const pe=new Zt,Ue=new B,nt=new Ht,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function hn(){return D===null?F:1}let O=i;function Rt(C,$){return n.getContext(C,$)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hp}`),n.addEventListener("webglcontextlost",Re,!1),n.addEventListener("webglcontextrestored",He,!1),n.addEventListener("webglcontextcreationerror",Me,!1),O===null){const $="webgl2";if(O=Rt($,C),O===null)throw Rt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let at,Ge,k,Pe,ce,de,Ze,it,I,A,Z,he,_e,fe,Fe,xe,Xe,je,ye,Te,st,$e,De,ct;function X(){at=new IT(O),at.init(),$e=new pA(O,at),Ge=new TT(O,at,e,$e),k=new fA(O,at),Ge.reversedDepthBuffer&&h&&k.buffers.depth.setReversed(!0),Pe=new UT(O),ce=new Q3,de=new hA(O,at,k,ce,Ge,$e,Pe),Ze=new bT(S),it=new LT(S),I=new HS(O),De=new wT(O,I),A=new DT(O,I,Pe,De),Z=new kT(O,A,I,Pe),ye=new FT(O,Ge,de),xe=new AT(ce),he=new Z3(S,Ze,it,at,Ge,De,xe),_e=new yA(S,ce),fe=new tA,Fe=new aA(at),je=new ST(S,Ze,it,k,Z,g,l),Xe=new uA(S,Z,Ge),ct=new MA(O,Pe,Ge,k),Te=new ET(O,at,Pe),st=new NT(O,at,Pe),Pe.programs=he.programs,S.capabilities=Ge,S.extensions=at,S.properties=ce,S.renderLists=fe,S.shadowMap=Xe,S.state=k,S.info=Pe}X();const Ae=new _A(S,O);this.xr=Ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=at.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=at.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(C){C!==void 0&&(F=C,this.setSize(H,K,!1))},this.getSize=function(C){return C.set(H,K)},this.setSize=function(C,$,ie=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,K=$,n.width=Math.floor(C*F),n.height=Math.floor($*F),ie===!0&&(n.style.width=C+"px",n.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(H*F,K*F).floor()},this.setDrawingBufferSize=function(C,$,ie){H=C,K=$,F=ie,n.width=Math.floor(C*ie),n.height=Math.floor($*ie),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(Ee)},this.setViewport=function(C,$,ie,re){C.isVector4?Ee.set(C.x,C.y,C.z,C.w):Ee.set(C,$,ie,re),k.viewport(U.copy(Ee).multiplyScalar(F).round())},this.getScissor=function(C){return C.copy(Oe)},this.setScissor=function(C,$,ie,re){C.isVector4?Oe.set(C.x,C.y,C.z,C.w):Oe.set(C,$,ie,re),k.scissor(G.copy(Oe).multiplyScalar(F).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(C){k.setScissorTest(ut=C)},this.setOpaqueSort=function(C){ne=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,ie=!0){let re=0;if(C){let J=!1;if(D!==null){const Se=D.texture.format;J=Se===qp||Se===Yp||Se===jp}if(J){const Se=D.texture.type,Ie=Se===or||Se===ks||Se===ol||Se===al||Se===Wp||Se===Xp,We=je.getClearColor(),Ne=je.getClearAlpha(),rt=We.r,ot=We.g,et=We.b;Ie?(y[0]=rt,y[1]=ot,y[2]=et,y[3]=Ne,O.clearBufferuiv(O.COLOR,0,y)):(w[0]=rt,w[1]=ot,w[2]=et,w[3]=Ne,O.clearBufferiv(O.COLOR,0,w))}else re|=O.COLOR_BUFFER_BIT}$&&(re|=O.DEPTH_BUFFER_BIT),ie&&(re|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Re,!1),n.removeEventListener("webglcontextrestored",He,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),je.dispose(),fe.dispose(),Fe.dispose(),ce.dispose(),Ze.dispose(),it.dispose(),Z.dispose(),De.dispose(),ct.dispose(),he.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",$n),Ae.removeEventListener("sessionend",Jo),Ni.stop()};function Re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const C=Pe.autoReset,$=Xe.enabled,ie=Xe.autoUpdate,re=Xe.needsUpdate,J=Xe.type;X(),Pe.autoReset=C,Xe.enabled=$,Xe.autoUpdate=ie,Xe.needsUpdate=re,Xe.type=J}function Me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ve(C){const $=C.target;$.removeEventListener("dispose",ve),Ye($)}function Ye(C){lt(C),ce.remove(C)}function lt(C){const $=ce.get(C).programs;$!==void 0&&($.forEach(function(ie){he.releaseProgram(ie)}),C.isShaderMaterial&&he.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,ie,re,J,Se){$===null&&($=Ce);const Ie=J.isMesh&&J.matrixWorld.determinant()<0,We=Qo(C,$,ie,re,J);k.setMaterial(re,Ie);let Ne=ie.index,rt=1;if(re.wireframe===!0){if(Ne=A.getWireframeAttribute(ie),Ne===void 0)return;rt=2}const ot=ie.drawRange,et=ie.attributes.position;let gt=ot.start*rt,It=(ot.start+ot.count)*rt;Se!==null&&(gt=Math.max(gt,Se.start*rt),It=Math.min(It,(Se.start+Se.count)*rt)),Ne!==null?(gt=Math.max(gt,0),It=Math.min(It,Ne.count)):et!=null&&(gt=Math.max(gt,0),It=Math.min(It,et.count));const dt=It-gt;if(dt<0||dt===1/0)return;De.setup(J,re,We,ie,Ne);let Vt,kt=Te;if(Ne!==null&&(Vt=I.get(Ne),kt=st,kt.setIndex(Vt)),J.isMesh)re.wireframe===!0?(k.setLineWidth(re.wireframeLinewidth*hn()),kt.setMode(O.LINES)):kt.setMode(O.TRIANGLES);else if(J.isLine){let tt=re.linewidth;tt===void 0&&(tt=1),k.setLineWidth(tt*hn()),J.isLineSegments?kt.setMode(O.LINES):J.isLineLoop?kt.setMode(O.LINE_LOOP):kt.setMode(O.LINE_STRIP)}else J.isPoints?kt.setMode(O.POINTS):J.isSprite&&kt.setMode(O.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ul("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),kt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))kt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const tt=J._multiDrawStarts,Xt=J._multiDrawCounts,Et=J._multiDrawCount,Un=Ne?I.get(Ne).bytesPerElement:1,Cr=ce.get(re).currentProgram.getUniforms();for(let Kn=0;Kn<Et;Kn++)Cr.setValue(O,"_gl_DrawID",Kn),kt.render(tt[Kn]/Un,Xt[Kn])}else if(J.isInstancedMesh)kt.renderInstances(gt,dt,J.count);else if(ie.isInstancedBufferGeometry){const tt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Xt=Math.min(ie.instanceCount,tt);kt.renderInstances(gt,dt,Xt)}else kt.render(gt,dt)};function Ft(C,$,ie){C.transparent===!0&&C.side===Kt&&C.forceSinglePass===!1?(C.side=fi,C.needsUpdate=!0,Ei(C,$,ie),C.side=is,C.needsUpdate=!0,Ei(C,$,ie),C.side=Kt):Ei(C,$,ie)}this.compile=function(C,$,ie=null){ie===null&&(ie=C),u=Fe.get(ie),u.init($),x.push(u),ie.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(u.pushLight(J),J.castShadow&&u.pushShadow(J))}),C!==ie&&C.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(u.pushLight(J),J.castShadow&&u.pushShadow(J))}),u.setupLights();const re=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Se=J.material;if(Se)if(Array.isArray(Se))for(let Ie=0;Ie<Se.length;Ie++){const We=Se[Ie];Ft(We,ie,J),re.add(We)}else Ft(Se,ie,J),re.add(Se)}),u=x.pop(),re},this.compileAsync=function(C,$,ie=null){const re=this.compile(C,$,ie);return new Promise(J=>{function Se(){if(re.forEach(function(Ie){ce.get(Ie).currentProgram.isReady()&&re.delete(Ie)}),re.size===0){J(C);return}setTimeout(Se,10)}at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let yt=null;function un(C){yt&&yt(C)}function $n(){Ni.stop()}function Jo(){Ni.start()}const Ni=new sx;Ni.setAnimationLoop(un),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(C){yt=C,Ae.setAnimationLoop(C),C===null?Ni.stop():Ni.start()},Ae.addEventListener("sessionstart",$n),Ae.addEventListener("sessionend",Jo),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera($),$=Ae.getCamera()),C.isScene===!0&&C.onBeforeRender(S,C,$,D),u=Fe.get(C,x.length),u.init($),x.push(u),pe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Le.setFromProjectionMatrix(pe,nr,$.reversedDepth),z=this.localClippingEnabled,le=xe.init(this.clippingPlanes,z),_=fe.get(C,v.length),_.init(),v.push(_),Ae.enabled===!0&&Ae.isPresenting===!0){const Se=S.xr.getDepthSensingMesh();Se!==null&&Vs(Se,$,-1/0,S.sortObjects)}Vs(C,$,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(ne,se),_t=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,_t&&je.addToRenderList(_,C),this.info.render.frame++,le===!0&&xe.beginShadows();const ie=u.state.shadowsArray;Xe.render(ie,C,$),le===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=_.opaque,J=_.transmissive;if(u.setupLights(),$.isArrayCamera){const Se=$.cameras;if(J.length>0)for(let Ie=0,We=Se.length;Ie<We;Ie++){const Ne=Se[Ie];Gs(re,J,C,Ne)}_t&&je.render(C);for(let Ie=0,We=Se.length;Ie<We;Ie++){const Ne=Se[Ie];Zo(_,C,Ne,Ne.viewport)}}else J.length>0&&Gs(re,J,C,$),_t&&je.render(C),Zo(_,C,$);D!==null&&L===0&&(de.updateMultisampleRenderTarget(D),de.updateRenderTargetMipmap(D)),C.isScene===!0&&C.onAfterRender(S,C,$),De.resetDefaultState(),E=-1,M=null,x.pop(),x.length>0?(u=x[x.length-1],le===!0&&xe.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?_=v[v.length-1]:_=null};function Vs(C,$,ie,re){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Le.intersectsSprite(C)){re&&nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(pe);const Ie=Z.update(C),We=C.material;We.visible&&_.push(C,Ie,We,ie,nt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Le.intersectsObject(C))){const Ie=Z.update(C),We=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),nt.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),nt.copy(Ie.boundingSphere.center)),nt.applyMatrix4(C.matrixWorld).applyMatrix4(pe)),Array.isArray(We)){const Ne=Ie.groups;for(let rt=0,ot=Ne.length;rt<ot;rt++){const et=Ne[rt],gt=We[et.materialIndex];gt&&gt.visible&&_.push(C,Ie,gt,ie,nt.z,et)}}else We.visible&&_.push(C,Ie,We,ie,nt.z,null)}}const Se=C.children;for(let Ie=0,We=Se.length;Ie<We;Ie++)Vs(Se[Ie],$,ie,re)}function Zo(C,$,ie,re){const J=C.opaque,Se=C.transmissive,Ie=C.transparent;u.setupLightsView(ie),le===!0&&xe.setGlobalState(S.clippingPlanes,ie),re&&k.viewport(U.copy(re)),J.length>0&&Ws(J,$,ie),Se.length>0&&Ws(Se,$,ie),Ie.length>0&&Ws(Ie,$,ie),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Gs(C,$,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[re.id]===void 0&&(u.state.transmissionRenderTarget[re.id]=new Os(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?gl:or,minFilter:Rs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Se=u.state.transmissionRenderTarget[re.id],Ie=re.viewport||U;Se.setSize(Ie.z*S.transmissionResolutionScale,Ie.w*S.transmissionResolutionScale);const We=S.getRenderTarget(),Ne=S.getActiveCubeFace(),rt=S.getActiveMipmapLevel();S.setRenderTarget(Se),S.getClearColor(ae),ue=S.getClearAlpha(),ue<1&&S.setClearColor(16777215,.5),S.clear(),_t&&je.render(ie);const ot=S.toneMapping;S.toneMapping=es;const et=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),u.setupLightsView(re),le===!0&&xe.setGlobalState(S.clippingPlanes,re),Ws(C,ie,re),de.updateMultisampleRenderTarget(Se),de.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let It=0,dt=$.length;It<dt;It++){const Vt=$[It],kt=Vt.object,tt=Vt.geometry,Xt=Vt.material,Et=Vt.group;if(Xt.side===Kt&&kt.layers.test(re.layers)){const Un=Xt.side;Xt.side=fi,Xt.needsUpdate=!0,Xs(kt,ie,re,tt,Xt,Et),Xt.side=Un,Xt.needsUpdate=!0,gt=!0}}gt===!0&&(de.updateMultisampleRenderTarget(Se),de.updateRenderTargetMipmap(Se))}S.setRenderTarget(We,Ne,rt),S.setClearColor(ae,ue),et!==void 0&&(re.viewport=et),S.toneMapping=ot}function Ws(C,$,ie){const re=$.isScene===!0?$.overrideMaterial:null;for(let J=0,Se=C.length;J<Se;J++){const Ie=C[J],We=Ie.object,Ne=Ie.geometry,rt=Ie.group;let ot=Ie.material;ot.allowOverride===!0&&re!==null&&(ot=re),We.layers.test(ie.layers)&&Xs(We,$,ie,Ne,ot,rt)}}function Xs(C,$,ie,re,J,Se){C.onBeforeRender(S,$,ie,re,J,Se),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(S,$,ie,re,C,Se),J.transparent===!0&&J.side===Kt&&J.forceSinglePass===!1?(J.side=fi,J.needsUpdate=!0,S.renderBufferDirect(ie,$,re,J,C,Se),J.side=is,J.needsUpdate=!0,S.renderBufferDirect(ie,$,re,J,C,Se),J.side=Kt):S.renderBufferDirect(ie,$,re,J,C,Se),C.onAfterRender(S,$,ie,re,J,Se)}function Ei(C,$,ie){$.isScene!==!0&&($=Ce);const re=ce.get(C),J=u.state.lights,Se=u.state.shadowsArray,Ie=J.state.version,We=he.getParameters(C,J.state,Se,$,ie),Ne=he.getProgramCacheKey(We);let rt=re.programs;re.environment=C.isMeshStandardMaterial?$.environment:null,re.fog=$.fog,re.envMap=(C.isMeshStandardMaterial?it:Ze).get(C.envMap||re.environment),re.envMapRotation=re.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,rt===void 0&&(C.addEventListener("dispose",ve),rt=new Map,re.programs=rt);let ot=rt.get(Ne);if(ot!==void 0){if(re.currentProgram===ot&&re.lightsStateVersion===Ie)return pn(C,We),ot}else We.uniforms=he.getUniforms(C),C.onBeforeCompile(We,S),ot=he.acquireProgram(We,Ne),rt.set(Ne,ot),re.uniforms=We.uniforms;const et=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=xe.uniform),pn(C,We),re.needsLights=ta(C),re.lightsStateVersion=Ie,re.needsLights&&(et.ambientLightColor.value=J.state.ambient,et.lightProbe.value=J.state.probe,et.directionalLights.value=J.state.directional,et.directionalLightShadows.value=J.state.directionalShadow,et.spotLights.value=J.state.spot,et.spotLightShadows.value=J.state.spotShadow,et.rectAreaLights.value=J.state.rectArea,et.ltc_1.value=J.state.rectAreaLTC1,et.ltc_2.value=J.state.rectAreaLTC2,et.pointLights.value=J.state.point,et.pointLightShadows.value=J.state.pointShadow,et.hemisphereLights.value=J.state.hemi,et.directionalShadowMap.value=J.state.directionalShadowMap,et.directionalShadowMatrix.value=J.state.directionalShadowMatrix,et.spotShadowMap.value=J.state.spotShadowMap,et.spotLightMatrix.value=J.state.spotLightMatrix,et.spotLightMap.value=J.state.spotLightMap,et.pointShadowMap.value=J.state.pointShadowMap,et.pointShadowMatrix.value=J.state.pointShadowMatrix),re.currentProgram=ot,re.uniformsList=null,ot}function hi(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Dc.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function pn(C,$){const ie=ce.get(C);ie.outputColorSpace=$.outputColorSpace,ie.batching=$.batching,ie.batchingColor=$.batchingColor,ie.instancing=$.instancing,ie.instancingColor=$.instancingColor,ie.instancingMorph=$.instancingMorph,ie.skinning=$.skinning,ie.morphTargets=$.morphTargets,ie.morphNormals=$.morphNormals,ie.morphColors=$.morphColors,ie.morphTargetsCount=$.morphTargetsCount,ie.numClippingPlanes=$.numClippingPlanes,ie.numIntersection=$.numClipIntersection,ie.vertexAlphas=$.vertexAlphas,ie.vertexTangents=$.vertexTangents,ie.toneMapping=$.toneMapping}function Qo(C,$,ie,re,J){$.isScene!==!0&&($=Ce),de.resetTextureUnits();const Se=$.fog,Ie=re.isMeshStandardMaterial?$.environment:null,We=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Wo,Ne=(re.isMeshStandardMaterial?it:Ze).get(re.envMap||Ie),rt=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ot=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),et=!!ie.morphAttributes.position,gt=!!ie.morphAttributes.normal,It=!!ie.morphAttributes.color;let dt=es;re.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(dt=S.toneMapping);const Vt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,kt=Vt!==void 0?Vt.length:0,tt=ce.get(re),Xt=u.state.lights;if(le===!0&&(z===!0||C!==M)){const Qt=C===M&&re.id===E;xe.setState(re,C,Qt)}let Et=!1;re.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Xt.state.version||tt.outputColorSpace!==We||J.isBatchedMesh&&tt.batching===!1||!J.isBatchedMesh&&tt.batching===!0||J.isBatchedMesh&&tt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&tt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&tt.instancing===!1||!J.isInstancedMesh&&tt.instancing===!0||J.isSkinnedMesh&&tt.skinning===!1||!J.isSkinnedMesh&&tt.skinning===!0||J.isInstancedMesh&&tt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&tt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&tt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&tt.instancingMorph===!1&&J.morphTexture!==null||tt.envMap!==Ne||re.fog===!0&&tt.fog!==Se||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==xe.numPlanes||tt.numIntersection!==xe.numIntersection)||tt.vertexAlphas!==rt||tt.vertexTangents!==ot||tt.morphTargets!==et||tt.morphNormals!==gt||tt.morphColors!==It||tt.toneMapping!==dt||tt.morphTargetsCount!==kt)&&(Et=!0):(Et=!0,tt.__version=re.version);let Un=tt.currentProgram;Et===!0&&(Un=Ei(re,$,J));let Cr=!1,Kn=!1,Rr=!1;const Gt=Un.getUniforms(),bn=tt.uniforms;if(k.useProgram(Un.program)&&(Cr=!0,Kn=!0,Rr=!0),re.id!==E&&(E=re.id,Kn=!0),Cr||M!==C){k.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Gt.setValue(O,"projectionMatrix",C.projectionMatrix),Gt.setValue(O,"viewMatrix",C.matrixWorldInverse);const Hn=Gt.map.cameraPosition;Hn!==void 0&&Hn.setValue(O,Ue.setFromMatrixPosition(C.matrixWorld)),Ge.logarithmicDepthBuffer&&Gt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Gt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Kn=!0,Rr=!0)}if(J.isSkinnedMesh){Gt.setOptional(O,J,"bindMatrix"),Gt.setOptional(O,J,"bindMatrixInverse");const Qt=J.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Gt.setValue(O,"boneTexture",Qt.boneTexture,de))}J.isBatchedMesh&&(Gt.setOptional(O,J,"batchingTexture"),Gt.setValue(O,"batchingTexture",J._matricesTexture,de),Gt.setOptional(O,J,"batchingIdTexture"),Gt.setValue(O,"batchingIdTexture",J._indirectTexture,de),Gt.setOptional(O,J,"batchingColorTexture"),J._colorsTexture!==null&&Gt.setValue(O,"batchingColorTexture",J._colorsTexture,de));const Cn=ie.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ye.update(J,ie,Un),(Kn||tt.receiveShadow!==J.receiveShadow)&&(tt.receiveShadow=J.receiveShadow,Gt.setValue(O,"receiveShadow",J.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(bn.envMap.value=Ne,bn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&$.environment!==null&&(bn.envMapIntensity.value=$.environmentIntensity),Kn&&(Gt.setValue(O,"toneMappingExposure",S.toneMappingExposure),tt.needsLights&&ea(bn,Rr),Se&&re.fog===!0&&_e.refreshFogUniforms(bn,Se),_e.refreshMaterialUniforms(bn,re,F,K,u.state.transmissionRenderTarget[C.id]),Dc.upload(O,hi(tt),bn,de)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Dc.upload(O,hi(tt),bn,de),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Gt.setValue(O,"center",J.center),Gt.setValue(O,"modelViewMatrix",J.modelViewMatrix),Gt.setValue(O,"normalMatrix",J.normalMatrix),Gt.setValue(O,"modelMatrix",J.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Qt=re.uniformsGroups;for(let Hn=0,ra=Qt.length;Hn<ra;Hn++){const Ui=Qt[Hn];ct.update(Ui,Un),ct.bind(Ui,Un)}}return Un}function ea(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function ta(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,$,ie){const re=ce.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ce.get(C.texture).__webglTexture=$,ce.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ie,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const ie=ce.get(C);ie.__webglFramebuffer=$,ie.__useDefaultFramebuffer=$===void 0};const Cu=O.createFramebuffer();this.setRenderTarget=function(C,$=0,ie=0){D=C,P=$,L=ie;let re=!0,J=null,Se=!1,Ie=!1;if(C){const Ne=ce.get(C);if(Ne.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(O.FRAMEBUFFER,null),re=!1;else if(Ne.__webglFramebuffer===void 0)de.setupRenderTarget(C);else if(Ne.__hasExternalTextures)de.rebindTextures(C,ce.get(C.texture).__webglTexture,ce.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(Ne.__boundDepthTexture!==et){if(et!==null&&ce.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(C)}}const rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ie=!0);const ot=ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ot[$])?J=ot[$][ie]:J=ot[$],Se=!0):C.samples>0&&de.useMultisampledRTT(C)===!1?J=ce.get(C).__webglMultisampledFramebuffer:Array.isArray(ot)?J=ot[ie]:J=ot,U.copy(C.viewport),G.copy(C.scissor),te=C.scissorTest}else U.copy(Ee).multiplyScalar(F).floor(),G.copy(Oe).multiplyScalar(F).floor(),te=ut;if(ie!==0&&(J=Cu),k.bindFramebuffer(O.FRAMEBUFFER,J)&&re&&k.drawBuffers(C,J),k.viewport(U),k.scissor(G),k.setScissorTest(te),Se){const Ne=ce.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ne.__webglTexture,ie)}else if(Ie){const Ne=$;for(let rt=0;rt<C.textures.length;rt++){const ot=ce.get(C.textures[rt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+rt,ot.__webglTexture,ie,Ne)}}else if(C!==null&&ie!==0){const Ne=ce.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ne.__webglTexture,ie)}E=-1},this.readRenderTargetPixels=function(C,$,ie,re,J,Se,Ie,We=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){k.bindFramebuffer(O.FRAMEBUFFER,Ne);try{const rt=C.textures[We],ot=rt.format,et=rt.type;if(!Ge.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-re&&ie>=0&&ie<=C.height-J&&(C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+We),O.readPixels($,ie,re,J,$e.convert(ot),$e.convert(et),Se))}finally{const rt=D!==null?ce.get(D).__webglFramebuffer:null;k.bindFramebuffer(O.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(C,$,ie,re,J,Se,Ie,We=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne)if($>=0&&$<=C.width-re&&ie>=0&&ie<=C.height-J){k.bindFramebuffer(O.FRAMEBUFFER,Ne);const rt=C.textures[We],ot=rt.format,et=rt.type;if(!Ge.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,gt),O.bufferData(O.PIXEL_PACK_BUFFER,Se.byteLength,O.STREAM_READ),C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+We),O.readPixels($,ie,re,J,$e.convert(ot),$e.convert(et),0);const It=D!==null?ce.get(D).__webglFramebuffer:null;k.bindFramebuffer(O.FRAMEBUFFER,It);const dt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await GM(O,dt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,gt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Se),O.deleteBuffer(gt),O.deleteSync(dt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,ie=0){const re=Math.pow(2,-ie),J=Math.floor(C.image.width*re),Se=Math.floor(C.image.height*re),Ie=$!==null?$.x:0,We=$!==null?$.y:0;de.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,ie,0,0,Ie,We,J,Se),k.unbindTexture()};const na=O.createFramebuffer(),ia=O.createFramebuffer();this.copyTextureToTexture=function(C,$,ie=null,re=null,J=0,Se=null){Se===null&&(J!==0?(ul("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=J,J=0):Se=0);let Ie,We,Ne,rt,ot,et,gt,It,dt;const Vt=C.isCompressedTexture?C.mipmaps[Se]:C.image;if(ie!==null)Ie=ie.max.x-ie.min.x,We=ie.max.y-ie.min.y,Ne=ie.isBox3?ie.max.z-ie.min.z:1,rt=ie.min.x,ot=ie.min.y,et=ie.isBox3?ie.min.z:0;else{const Cn=Math.pow(2,-J);Ie=Math.floor(Vt.width*Cn),We=Math.floor(Vt.height*Cn),C.isDataArrayTexture?Ne=Vt.depth:C.isData3DTexture?Ne=Math.floor(Vt.depth*Cn):Ne=1,rt=0,ot=0,et=0}re!==null?(gt=re.x,It=re.y,dt=re.z):(gt=0,It=0,dt=0);const kt=$e.convert($.format),tt=$e.convert($.type);let Xt;$.isData3DTexture?(de.setTexture3D($,0),Xt=O.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(de.setTexture2DArray($,0),Xt=O.TEXTURE_2D_ARRAY):(de.setTexture2D($,0),Xt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment);const Et=O.getParameter(O.UNPACK_ROW_LENGTH),Un=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Cr=O.getParameter(O.UNPACK_SKIP_PIXELS),Kn=O.getParameter(O.UNPACK_SKIP_ROWS),Rr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Vt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Vt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,rt),O.pixelStorei(O.UNPACK_SKIP_ROWS,ot),O.pixelStorei(O.UNPACK_SKIP_IMAGES,et);const Gt=C.isDataArrayTexture||C.isData3DTexture,bn=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const Cn=ce.get(C),Qt=ce.get($),Hn=ce.get(Cn.__renderTarget),ra=ce.get(Qt.__renderTarget);k.bindFramebuffer(O.READ_FRAMEBUFFER,Hn.__webglFramebuffer),k.bindFramebuffer(O.DRAW_FRAMEBUFFER,ra.__webglFramebuffer);for(let Ui=0;Ui<Ne;Ui++)Gt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ce.get(C).__webglTexture,J,et+Ui),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ce.get($).__webglTexture,Se,dt+Ui)),O.blitFramebuffer(rt,ot,Ie,We,gt,It,Ie,We,O.DEPTH_BUFFER_BIT,O.NEAREST);k.bindFramebuffer(O.READ_FRAMEBUFFER,null),k.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||ce.has(C)){const Cn=ce.get(C),Qt=ce.get($);k.bindFramebuffer(O.READ_FRAMEBUFFER,na),k.bindFramebuffer(O.DRAW_FRAMEBUFFER,ia);for(let Hn=0;Hn<Ne;Hn++)Gt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Cn.__webglTexture,J,et+Hn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Cn.__webglTexture,J),bn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Qt.__webglTexture,Se,dt+Hn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Qt.__webglTexture,Se),J!==0?O.blitFramebuffer(rt,ot,Ie,We,gt,It,Ie,We,O.COLOR_BUFFER_BIT,O.NEAREST):bn?O.copyTexSubImage3D(Xt,Se,gt,It,dt+Hn,rt,ot,Ie,We):O.copyTexSubImage2D(Xt,Se,gt,It,rt,ot,Ie,We);k.bindFramebuffer(O.READ_FRAMEBUFFER,null),k.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else bn?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(Xt,Se,gt,It,dt,Ie,We,Ne,kt,tt,Vt.data):$.isCompressedArrayTexture?O.compressedTexSubImage3D(Xt,Se,gt,It,dt,Ie,We,Ne,kt,Vt.data):O.texSubImage3D(Xt,Se,gt,It,dt,Ie,We,Ne,kt,tt,Vt):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Se,gt,It,Ie,We,kt,tt,Vt.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Se,gt,It,Vt.width,Vt.height,kt,Vt.data):O.texSubImage2D(O.TEXTURE_2D,Se,gt,It,Ie,We,kt,tt,Vt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Et),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Un),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Cr),O.pixelStorei(O.UNPACK_SKIP_ROWS,Kn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Rr),Se===0&&$.generateMipmaps&&O.generateMipmap(Xt),k.unbindTexture()},this.initRenderTarget=function(C){ce.get(C).__webglFramebuffer===void 0&&de.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?de.setTextureCube(C,0):C.isData3DTexture?de.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?de.setTexture2DArray(C,0):de.setTexture2D(C,0),k.unbindTexture()},this.resetState=function(){P=0,L=0,D=null,k.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Lt._getUnpackColorSpace()}}var vv;const bt=(vv=window.Telegram)==null?void 0:vv.WebApp,hv="/yggdrasil-tma/",mc=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],wA=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],pv={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},mv=()=>{try{const t={...pv,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...pv,watch:Date.now()}}},Ta=()=>new Date().toISOString().slice(0,10),EA=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",lf=[3,5,8,12,18,25,40],TA=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],AA=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],cf=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],Aa={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},gv={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},uf={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},df={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function kr({name:t,className:e}){return W.jsx("img",{src:t.includes(".")?`${hv}img/${t}`:`${hv}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const bA=`
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
`,_s=(t,e=.9,n=0)=>new qe({color:t,roughness:e,metalness:n}),Q=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function CA(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function RA(t){const e=new Ke,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=_s(i,.92),c=_s(s,.9),d=_s(o,.96),f=_s(r,.95),h=_s(a,.78),g=_s(2106150,.98),y=new j(new oi(.28,.24,5,8),d);y.position.y=.72,e.add(y);const w=new j(new oi(n?.37:.32,.56,6,10),c);w.position.y=1.15,e.add(w);const _=new j(new oi(n?.4:.34,.34,5,8),c);_.scale.z=.82,_.position.y=1.28,e.add(_);const u=new j(new pt(.36,.38,.09,12),d);u.position.y=.93,e.add(u);const v=new j(new Ln(.12,.12,.055),h);v.position.set(0,.93,.38),e.add(v);const x=new j(new pt(.13,.15,.18,10),l);x.position.y=1.63,e.add(x);const S=new j(new xt(.31,16,12),l);S.scale.set(.92,1.06,.92),S.position.y=1.91,e.add(S);const R=new j(new xt(.325,14,10),f);R.scale.set(.98,.72,.98),R.position.set(0,2.08,-.025),e.add(R);const P=new j(new oi(.18,.3,5,8),f);P.position.set(0,1.93,-.25),P.rotation.x=.15,e.add(P);const L=new j(new kn(.045,.13,5),l);L.rotation.x=Math.PI/2,L.position.set(0,1.92,.3),e.add(L);const D=new qe({color:1513754,roughness:.55});for(const ne of[-.105,.105]){const se=new j(new xt(.025,7,5),D);se.position.set(ne,1.98,.285),e.add(se)}if(n){const ne=new j(new xt(.19,10,7),f);ne.scale.set(.82,1,.72),ne.position.set(0,1.8,.24),e.add(ne)}else{const ne=new j(new oi(.055,.42,4,7),f);ne.position.set(-.27,1.78,-.08),ne.rotation.z=-.22,e.add(ne)}const E=ne=>{const se=new Ke;se.position.set(ne*(n?.43:.39),1.43,0),se.rotation.z=ne*.07;const Ee=new j(new oi(.105,.42,5,7),c);Ee.position.y=-.23,se.add(Ee);const Oe=new Ke;Oe.position.y=-.46,se.add(Oe);const ut=new j(new oi(.085,.34,5,7),d);ut.position.y=-.2,Oe.add(ut);const Le=new j(new xt(.105,9,7),l);return Le.position.y=-.43,Oe.add(Le),e.add(se),{upper:se,elbow:Oe}},M=E(-1),U=E(1),G=ne=>{const se=new Ke;se.position.set(ne*.15,.68,0);const Ee=new j(new oi(.12,.42,5,7),g);Ee.position.y=-.23,se.add(Ee);const Oe=new Ke;Oe.position.y=-.48,se.add(Oe);const ut=new j(new oi(.095,.4,5,7),g);ut.position.y=-.22,Oe.add(ut);const Le=new j(new oi(.13,.24,5,7),d);return Le.scale.z=1.25,Le.position.set(0,-.47,.075),Oe.add(Le),e.add(se),se},te=G(-1),ae=G(1),ue=new j(new oi(.42,.1,5,8),d);ue.scale.z=.72,ue.position.y=1.48,e.add(ue);const H=new j(new Ln(.58,.92,.075),_s(t.id==="berserk"?2821132:1582894,.98));H.position.set(0,1.05,-.28),H.rotation.x=-.035,e.add(H);const K=new Ke;if(t.id==="berserk"||t.id==="dwarf"){const ne=new j(new pt(.035,.045,.72,7),d);ne.position.y=.36,K.add(ne);const se=new j(new Ln(.16,.34,.055),h);se.position.set(0,.88,0),se.rotation.z=t.id==="dwarf"?-.22:.22,K.add(se)}else{const ne=new j(new pt(.028,.04,1.1,7),d);ne.position.y=.52,K.add(ne);const se=new j(new kn(.075,.25,6),h);se.position.y=1.18,K.add(se)}if(K.position.set(.43,.32,.03),K.rotation.z=-.12,e.add(K),t.id==="viking"||t.id==="berserk"){const ne=new j(new pt(.3,.3,.1,16),d);ne.rotation.x=Math.PI/2,ne.position.set(0,1.12,-.37),e.add(ne);const se=new j(new xt(.065,8,6),h);se.position.set(0,1.12,-.43),e.add(se)}const F=new j(new Hi(.62,24),new on({color:0,transparent:!0,opacity:.32}));return F.rotation.x=-Math.PI/2,F.position.y=.02,e.add(F),e.userData.anim={armL:M,armR:U,legL:te,legR:ae,weapon:K,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0},CA(e)}function PA({h:t,on:e,eventDone:n}){const i=Tt.useRef(null),r=Tt.useRef(null),s=Tt.useRef(null),o=Tt.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=Tt.useState(""),[c,d]=Tt.useState(!1),[f,h]=Tt.useState(!1),[g,y]=Tt.useState(!1),[w,_]=Tt.useState(!1),u=Tt.useRef({x:0,z:1}),v=Tt.useRef(!1),x=Tt.useRef(null);Tt.useEffect(()=>{const E=i.current;if(!E)return;const M=new pS;M.background=new St(7309184),M.fog=new Qp(6123883,.0055);const U=new _i(54,1,.1,280);U.position.set(0,8.5,17);const G=new SA({antialias:!0,powerPreference:"high-performance"});G.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),G.shadowMap.enabled=!0,G.shadowMap.type=I_,G.outputColorSpace=jn,G.toneMapping=D_,G.toneMappingExposure=1.08,E.appendChild(G.domElement);const te=new US(12442579,1976611,1.05);M.add(te);const ae=new zg(16768432,2.65);ae.position.set(-42,58,34),ae.castShadow=!0,ae.shadow.mapSize.set(1024,1024),ae.shadow.camera.left=-95,ae.shadow.camera.right=95,ae.shadow.camera.top=95,ae.shadow.camera.bottom=-95,ae.shadow.bias=-5e-4,M.add(ae);const ue=new zg(10467501,.72);ue.position.set(55,18,-60),M.add(ue);const H=(p,T)=>{const m=Math.sin(p*.075)*.7+Math.cos(T*.062)*.55+Math.sin((p-T)*.045)*.35,b=Math.exp(-(p*p/850+(T+2)*(T+2)/1050)),V=Math.exp(-(p*p/150+(T-12)*(T-12)/2200));return m*(1-b*.88)-V*.18},K=p=>{const T=document.createElement("canvas");T.width=T.height=512;const m=T.getContext("2d"),b=N=>Math.abs(Math.sin(N*12.9898)*43758.5453)%1;if(p==="ground"){m.fillStyle="#3f4d38",m.fillRect(0,0,512,512);for(let N=0;N<1800;N++){const q=b(N*1.17)*512,ee=b(N*2.31)*512,oe=10+b(N*3.71)*28,Y=b(N*4.13);m.fillStyle=Y>.72?`rgba(96,108,63,${.08+b(N)*.12})`:`rgba(30,36,25,${.05+b(N)*.12})`,m.beginPath(),m.arc(q,ee,oe,0,Math.PI*2),m.fill()}for(let N=0;N<650;N++){const q=b(N*7.1)*512,ee=b(N*8.2)*512;m.strokeStyle=`rgba(118,126,78,${.16+b(N*2)*.16})`,m.lineWidth=1+b(N*4)*1.5,m.beginPath(),m.moveTo(q,ee),m.lineTo(q+(b(N*5)-.5)*5,ee-3-b(N*6)*5),m.stroke()}}else if(p==="wood"){m.fillStyle="#5a3d29",m.fillRect(0,0,512,512);for(let N=0;N<512;N+=22)m.fillStyle=`rgba(25,15,9,${.18+b(N)*.13})`,m.fillRect(0,N,512,3),m.strokeStyle=`rgba(154,111,69,${.08+b(N*2)*.08})`,m.lineWidth=2,m.beginPath(),m.moveTo(0,N+7),m.bezierCurveTo(150,N+2,340,N+13,512,N+5),m.stroke();for(let N=0;N<65;N++){const q=b(N*2.1)*512;m.fillStyle=`rgba(20,12,8,${.12+b(N*3)*.16})`,m.fillRect(q,0,2+b(N*4)*3,512)}}else if(p==="roof"){m.fillStyle="#252522",m.fillRect(0,0,512,512);for(let N=-30;N<550;N+=25){m.fillStyle=`rgba(105,94,77,${.12+b(N)*.08})`,m.fillRect(0,N,512,2),m.strokeStyle="rgba(12,12,11,.48)",m.lineWidth=3;for(let q=-40;q<560;q+=38)m.beginPath(),m.moveTo(q,N),m.lineTo(q-18,N+28),m.stroke()}for(let N=0;N<180;N++)m.fillStyle=`rgba(170,154,123,${.03+b(N)*.07})`,m.fillRect(b(N*2)*512,b(N*3)*512,2+b(N*4)*7,2)}else if(p==="bark"){m.fillStyle="#7b5a3f",m.fillRect(0,0,512,512);for(let N=0;N<95;N++){const q=b(N*2.1)*512,ee=2+b(N*3.7)*7;m.fillStyle=`rgba(${24+b(N)*24},${16+b(N*4)*18},${10+b(N*5)*14},${.18+b(N*6)*.22})`,m.fillRect(q,0,ee,512)}for(let N=0;N<80;N++){const q=b(N*7.1)*512,ee=b(N*8.2)*512;m.strokeStyle=`rgba(126,91,60,${.07+b(N*2)*.09})`,m.lineWidth=1+b(N*3)*2,m.beginPath(),m.moveTo(q,ee),m.lineTo(q+(b(N*4)-.5)*12,ee+18+b(N*5)*45),m.stroke()}}else if(p==="foliage"){m.fillStyle="#536b4b",m.fillRect(0,0,512,512);for(let N=0;N<1900;N++){const q=b(N*1.17)*512,ee=b(N*2.31)*512,oe=b(N*3.7),Y=oe>.72?76:oe>.36?63:51,ge=oe>.72?104:oe>.36?87:70,me=oe>.72?59:oe>.36?49:40;m.fillStyle=`rgba(${Y},${ge},${me},${.16+b(N*4)*.28})`,m.beginPath(),m.arc(q,ee,1.5+b(N*5)*4.5,0,Math.PI*2),m.fill()}for(let N=0;N<260;N++){const q=b(N*9.1)*512,ee=b(N*10.2)*512;m.strokeStyle=`rgba(18,31,22,${.08+b(N*3)*.12})`,m.lineWidth=1,m.beginPath(),m.moveTo(q,ee),m.lineTo(q+(b(N*2)-.5)*10,ee+(b(N*4)-.5)*10),m.stroke()}}else{m.fillStyle="#514333",m.fillRect(0,0,512,512);for(let N=0;N<1300;N++){const q=b(N*1.3)*512,ee=b(N*2.7)*512;m.fillStyle=`rgba(${45+b(N*3)*38},${35+b(N*4)*28},${23+b(N*5)*20},${.08+b(N*6)*.18})`,m.fillRect(q,ee,2+b(N*7)*7,1+b(N*8)*4)}}const V=new $d(T);return V.wrapS=V.wrapT=Io,V.colorSpace=jn,V.anisotropy=4,V},F=K("ground");F.repeat.set(5,6);const ne=K("bark");ne.wrapS=ne.wrapT=Io,ne.repeat.set(1.2,1.8);const se=K("foliage");se.wrapS=se.wrapT=Io,se.repeat.set(1.35,1.35);const Ee=new Zn(190,190,62,62),Oe=Ee.attributes.position;for(let p=0;p<Oe.count;p++){const T=Oe.getX(p),m=-Oe.getY(p);Oe.setZ(p,H(T,m))}Ee.rotateX(-Math.PI/2),Ee.computeVertexNormals();const ut=new j(Ee,new dc({map:F}));ut.receiveShadow=!0,M.add(ut);const Le=(p,T,m)=>(T&&(p.userData={id:T,label:m||T}),p.traverse(b=>{b.isMesh&&(b.castShadow=!0,b.receiveShadow=!0)}),M.add(p),T&&Ce.push(p),p),le=(p,T=.9,m=0)=>new qe({color:p,roughness:T,metalness:m}),z=(p,T,m,b,V=.9)=>new j(new Ln(p,T,m),le(b,V)),pe=(p,T,m,b=10,V=.9)=>new j(new pt(p,p,T,b),le(m,V)),Ue=(p,T,m)=>{const b=pe(T,p,m,10,.96);return b.rotation.z=Math.PI/2,b},nt=(p,T,m)=>{const b=new Ke,V=p*.62,N=.61,q=new qe({map:je,color:m,roughness:.96,side:Kt}),ee=new j(new Ln(V,.18,T),q),oe=ee.clone();return ee.rotation.z=N,oe.rotation.z=-N,ee.position.x=-p*.205,oe.position.x=p*.205,b.add(ee,oe),b},Ce=[],_t=[],hn=[],O=[],Rt=[],at=.62,Ge=(p,T,m,b,V=0,N=.12)=>Rt.push({kind:"rect",x:p,z:T,w:m+N*2,d:b+N*2,rot:V}),k=(p,T,m,b=.12)=>Rt.push({kind:"circle",x:p,z:T,r:m+b}),Pe=(p,T,m,b,V,N=.12)=>Rt.push({kind:"segment",x1:p,z1:T,x2:m,z2:b,r:V+N}),ce=(p,T,m)=>{if(m.kind==="circle")return Math.hypot(p-m.x,T-m.z)<m.r+at;if(m.kind==="rect"){const Y=Math.cos(m.rot),ge=Math.sin(m.rot),me=p-m.x,ze=T-m.z,be=Y*me-ge*ze,Qe=ge*me+Y*ze,ft=Math.max(-m.w/2,Math.min(m.w/2,be)),Pt=Math.max(-m.d/2,Math.min(m.d/2,Qe));return Math.hypot(be-ft,Qe-Pt)<at}const b=m.x2-m.x1,V=m.z2-m.z1,N=b*b+V*V,q=N>0?Math.max(0,Math.min(1,((p-m.x1)*b+(T-m.z1)*V)/N)):0,ee=m.x1+b*q,oe=m.z1+V*q;return Math.hypot(p-ee,T-oe)<m.r+at},de=(p,T)=>v.current?p<Rn-2.72||p>Rn+2.72||T<Mn-2.05||T>Mn+2.3:Rt.some(m=>ce(p,T,m)),Ze=(p,T,m)=>{if(v.current){const N=Math.max(Rn-2.55,Math.min(Rn+2.55,T)),q=Math.max(Mn-1.92,Math.min(Mn+2.55,m));p.x=N,p.z=q;return}const b=Math.max(-88,Math.min(88,T)),V=Math.max(-89,Math.min(89,m));if(!de(b,V)){p.x=b,p.z=V;return}de(b,p.z)||(p.x=b),de(p.x,V)||(p.z=V)},it=le(3425343,1);for(let p=0;p<22;p++){const T=new Ke,m=-105+p*10,b=8+Q(p,7)*9,V=new j(new kn(b,18+Q(p,8)*16,7),it);V.position.y=8,T.add(V),T.position.set(m,-1,-94+Q(p,9)*11),Le(T)}const I=[];for(let p=0;p<=32;p++)I.push({z:-94+p*6,x:-57+Math.sin(p*.42)*4.2});const A=[],Z=[],he=5.4;for(let p=0;p<I.length;p++){const T=I[p],m=I[Math.max(0,p-1)],b=I[Math.min(I.length-1,p+1)],V=b.x-m.x,N=b.z-m.z,q=Math.max(.001,Math.hypot(V,N)),ee=-N/q,oe=V/q,Y=H(T.x,T.z)+.055;for(const ge of[-1,1]){const me=he*ge;A.push(T.x+ee*me,Y+Math.sin(p*1.7+ge)*.035,T.z+oe*me)}if(p<I.length-1){const ge=p*2;Z.push(ge,ge+1,ge+2,ge+1,ge+3,ge+2)}}const _e=new gn;_e.setAttribute("position",new At(A,3)),_e.setIndex(Z),_e.computeVertexNormals();const fe=new j(_e,new qe({color:3235689,roughness:.18,metalness:.08,transparent:!0,opacity:.88}));fe.receiveShadow=!0,M.add(fe);const Fe=[];for(let p=0;p<34;p++){const T=I[Math.min(I.length-1,Math.floor(p*.94))],m=.7+Q(p,1500)*1.35,b=new j(new im(m*.45,m,12),new on({color:10998996,transparent:!0,opacity:.12,side:Kt}));b.rotation.x=-Math.PI/2,b.scale.y=.42,b.position.set(T.x+(Q(p,1501)-.5)*4.5,H(T.x,T.z)+.075,T.z+(Q(p,1502)-.5)*4),M.add(b),Fe.push({mesh:b,phase:Q(p,1503)*Math.PI*2})}for(let p=0;p<52;p++){const T=Math.min(I.length-1,Math.floor(p*.62)),m=I[T],b=I[Math.max(0,T-1)],V=I[Math.min(I.length-1,T+1)],N=V.x-b.x,q=V.z-b.z,ee=Math.max(.001,Math.hypot(N,q)),oe=p%2===0?-1:1,Y=.34+Q(p,15)*.72,ge=he+oe*(.25+Q(p,16)*1.4),me=new j(new sn(Y,1),le(6185562,1));me.position.set(m.x+-q/ee*ge,H(m.x,m.z)+.18,m.z+N/ee*ge),me.scale.y=.5+Q(p,17)*.35,Le(me),k(me.position.x,me.position.z,Y*.75,.03)}const xe=(p,T)=>{const m=p.map(([ee,oe])=>new B(ee,H(ee,oe)+.035,oe)),b=[],V=[];for(let ee=0;ee<m.length;ee++){const oe=m[Math.max(0,ee-1)],Y=m[Math.min(m.length-1,ee+1)],ge=Y.x-oe.x,me=Y.z-oe.z,ze=Math.max(.001,Math.hypot(ge,me)),be=-me/ze,Qe=ge/ze;if(b.push(m[ee].x+be*T/2,m[ee].y,m[ee].z+Qe*T/2,m[ee].x-be*T/2,m[ee].y+.01,m[ee].z-Qe*T/2),ee<m.length-1){const ft=ee*2;V.push(ft,ft+1,ft+2,ft+1,ft+3,ft+2)}}const N=new gn;N.setAttribute("position",new At(b,3)),N.setIndex(V),N.computeVertexNormals();const q=new j(N,new qe({map:K("road"),roughness:1}));q.receiveShadow=!0,M.add(q),[-T*.22,T*.22].forEach(ee=>{const oe=m.map((me,ze)=>{const be=m[Math.max(0,ze-1)],Qe=m[Math.min(m.length-1,ze+1)],ft=Qe.x-be.x,Pt=Qe.z-be.z,tn=Math.max(.001,Math.hypot(ft,Pt));return new B(me.x+-Pt/tn*ee,me.y+.045,me.z+ft/tn*ee)}),Y=new rm(new tx(oe),Math.max(12,m.length*4),.055,5,!1),ge=new j(Y,le(3352863,1));ge.scale.y=.12,M.add(ge)})};xe([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),xe([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),xe([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),xe([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),xe([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),xe([[4,14],[-3,22],[-7,31],[-8,42]],3.8),xe([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),xe([[4,14],[10,28],[18,41],[27,57]],3.8),xe([[5,31],[15,45],[27,57],[39,70]],3.7),xe([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),xe([[-39,-8],[-47,-12],[-53,-15]],3.4);const Xe=K("wood");Xe.repeat.set(2,1);const je=K("roof");je.repeat.set(2,2);const ye=(p,T,m,b,V,N,q,ee,oe)=>{const Y=new Ke;Y.rotation.y=V,Y.position.set(p,H(p,T),T),Y.userData={id:q,label:N};const ge=new qe({map:Xe,color:ee,roughness:.94}),me=z(m+.7,.55,b+.7,5724755,1);me.position.y=.28,Y.add(me);for(let Dt=0;Dt<7;Dt++){const Nt=.62+Dt*.47,dn=Ue(m-Dt%2*.2,.29,ee);dn.material=ge,dn.position.set(0,Nt,b*.5-.03),Y.add(dn);const Fn=dn.clone();Fn.position.z=-b*.5+.03,Y.add(Fn);const ri=Ue(b+.06,.29,ee);ri.material=ge,ri.rotation.y=Math.PI/2,ri.position.set(-m*.5+.03,Nt,0),Y.add(ri);const Be=ri.clone();Be.position.x=m*.5-.03,Y.add(Be)}for(const Dt of[-m*.5,m*.5])for(const Nt of[-b*.5,b*.5]){const dn=pe(.34,3.75,3482649,8,1);dn.position.set(Dt,2.05,Nt),Y.add(dn)}const ze=z(1.18,2.05,.18,2365458,1);ze.position.set(0,1.37,b*.5+.31),Y.add(ze);for(const Dt of[-.67,.67]){const Nt=z(.15,2.28,.24,3811613,1);Nt.position.set(Dt,1.42,b*.5+.34),Y.add(Nt)}const be=Ue(1.65,.11,3679770);be.position.set(0,2.53,b*.5+.34),Y.add(be);const Qe=pe(.055,.12,13015634,8,.55);Qe.rotation.z=Math.PI/2,Qe.position.set(.33,1.38,b*.5+.43),Y.add(Qe);const ft=new qe({color:14986840,emissive:10116382,emissiveIntensity:1.5,roughness:.45});for(const Dt of[-m*.27,m*.27]){const Nt=z(1.28,1.02,.13,3154457,1);Nt.position.set(Dt,2.02,b*.5+.29),Y.add(Nt);const dn=z(.94,.7,.055,15251295,.45);dn.material=ft,dn.position.set(Dt,2.02,b*.5+.36),Y.add(dn);const Fn=z(.07,.78,.09,3154457,1);Fn.position.set(Dt,2.02,b*.5+.4),Y.add(Fn);const ri=z(1.05,.07,.09,3154457,1);ri.position.set(Dt,2.02,b*.5+.4),Y.add(ri)}const Pt=nt(m+1.55,b+1.35,oe);Pt.position.y=4.18,Y.add(Pt);for(const Dt of[-1,1]){const Nt=Ue(b+1.48,.12,3154715);Nt.position.set(Dt*(m*.46),3.78,0),Nt.rotation.y=Math.PI/2,Y.add(Nt)}const tn=Ue(b+1.45,.18,2760730);tn.rotation.y=Math.PI/2,tn.position.y=5.28,Y.add(tn);const Ut=z(m*.34,.16,1.05,6439467,1);Ut.position.set(0,.64,b*.5+.66),Y.add(Ut);for(const Dt of[-m*.16,m*.16]){const Nt=Ue(.85,.08,4796447);Nt.rotation.y=Math.PI/2,Nt.position.set(Dt,.83,b*.5+.95),Y.add(Nt)}const jt=pe(.34,2,5722958,8,1);jt.position.set(m*.25,5.05,-b*.1),Y.add(jt);const Wt=z(.72,.14,.72,3157289,1);Wt.position.set(m*.25,6.08,-b*.1),Y.add(Wt),Le(Y,q,N),Ce.push(Y),Ge(p,T,m+.85,b+.85,V,.05)};ye(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),ye(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),ye(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),ye(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),ye(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),ye(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const Te=new Ke;Te.position.set(-10,H(-10,-5),-5),Te.userData={id:"forge",label:"Кузница"};for(let p=0;p<7;p++){const T=.62+p*.47,m=Ue(9,.27,4401693);m.position.set(0,T,-2.85),Te.add(m);const b=Ue(6,.27,4401693);b.rotation.y=Math.PI/2,b.position.set(-4.35,T,0),Te.add(b)}for(const p of[-4.35,4.35]){const T=pe(.34,4,2825493,9,1);T.position.set(p,2,-2.85),Te.add(T)}const st=nt(9.8,7,2433825);st.position.y=4.45,Te.add(st);const $e=Ue(7.2,.18,2169366);$e.rotation.y=Math.PI/2,$e.position.y=5.42,Te.add($e);for(const p of[-3.7,3.7]){const T=Ue(4.7,.13,2825494);T.rotation.z=p<0?-.6:.6,T.position.set(p*.48,3.15,.1),Te.add(T)}const De=pe(1.15,1.65,3420462,10,1);De.position.set(-2,.83,1.15),Te.add(De);const ct=pe(.88,.35,2565925,10,1);ct.position.set(-2,1.83,1.15),Te.add(ct);const X=new j(new Hi(.52,16),new qe({color:16740390,emissive:16726536,emissiveIntensity:5,roughness:.4}));X.rotation.y=Math.PI,X.position.set(-2,1.02,2.23),Te.add(X);const Ae=pe(.27,.85,2697770,8,.45);Ae.position.set(1.15,.43,1.05),Te.add(Ae);const Re=z(1.45,.34,.58,2435114,.38);Re.position.set(1.15,1,1.05),Te.add(Re);const He=new j(new kn(.18,.72,8),le(2435114,.38,.05));He.rotation.z=-Math.PI/2,He.position.set(1.98,1,1.05),Te.add(He);for(let p=0;p<4;p++){const T=Ue(1.25,.045,11184548);T.rotation.z=-.35+p*.18,T.position.set(2.05+p*.18,1.12,1.34),Te.add(T)}const Me=z(1.15,.42,.62,3876893,1);Me.position.set(2.15,.72,-.8),Me.rotation.z=-.18,Te.add(Me);const ve=pe(.07,.55,5980979,8,1);ve.rotation.z=Math.PI/2,ve.position.set(1.55,.84,-.8),Te.add(ve),Le(Te,"forge","Кузница"),Ce.push(Te),Ge(-10,-5,9.6,6.6,0,.05);const Ye=new hr(16742962,3.4,14,2);Ye.position.set(-12,H(-12,-5)+2.2,-4),M.add(Ye);const lt=new j(new Hi(8.5,32),new qe({color:7035463,roughness:1}));lt.rotation.x=-Math.PI/2,lt.position.set(1,H(1,0)+.05,0),lt.receiveShadow=!0,M.add(lt);for(let p=0;p<18;p++){const T=p/18*Math.PI*2,m=new j(new sn(.38,1),le(7039843,1));m.position.set(1+Math.cos(T)*8.8,H(1+Math.cos(T)*8.8,Math.sin(T)*8.8)+.22,Math.sin(T)*8.8),M.add(m)}const Ft=(p,T)=>{const m=new Ke,b=z(2.8,.22,1,6832937,1);b.position.y=1.05,m.add(b);for(const V of[-1.05,1.05]){const N=z(.16,1,.16,3877149,1);N.position.set(V,.5,-.32),m.add(N);const q=N.clone();q.position.z=.32,m.add(q)}m.position.set(p,H(p,T),T),M.add(m)};Ft(-4,2),Ft(7,3);const yt=(p,T,m)=>{const b=new Ke;b.position.set(p,H(p,T),T);for(let Y=0;Y<7;Y++){const ge=Y/7*Math.PI*2,me=new j(new sn(.32*m,1),le(6117970,1));me.position.set(Math.cos(ge)*.7*m,.25*m,Math.sin(ge)*.7*m),b.add(me)}const V=z(.2*m,.2*m,1.5*m,4861211,1),N=V.clone();V.rotation.y=.55,N.rotation.y=-.55,V.position.y=N.position.y=.38*m,b.add(V,N);const q=new qe({color:16744744,emissive:16731402,emissiveIntensity:4}),ee=new j(new kn(.5*m,1.35*m,8),q);ee.position.y=1.02*m,b.add(ee),M.add(b);const oe=new hr(16747068,2.4*m,12*m,2);return oe.position.set(p,H(p,T)+2*m,T),M.add(oe),_t.push({light:oe,flame:ee,phase:Q(p,T)*8}),b};yt(1,0,1.15),yt(18,-15,.72);const un=(p,T,m,b,V=1.25)=>{const N=new Ke,q=m-p,ee=b-T,oe=Math.hypot(q,ee),Y=Math.max(1,Math.floor(oe/1.55));for(let ge=0;ge<=Y;ge++){const me=ge/Y,ze=p+q*me,be=T+ee*me,Qe=z(.18,V,.18,4796447,1);Qe.position.set(ze,H(ze,be)+V/2,be),N.add(Qe)}for(const ge of[-.28,.38]){const me=z(.14,.14,oe,5978917,1);me.rotation.y=Math.atan2(q,ee),me.position.set((p+m)/2,H((p+m)/2,(T+b)/2)+V*ge,(T+b)/2),N.add(me)}M.add(N),Pe(p,T,m,b,.12,.02)},$n=(p,T,m,b,V,N,q)=>{const ee=new Ke;ee.position.set(p,H(p,T),T),ee.rotation.y=V,ee.userData={id:q,label:N};const oe=z(m+.25,.35,b+.25,5591368,1);oe.position.y=.18,ee.add(oe);const Y=new j(new Ln(m,2.5,b),new qe({map:Xe,color:6439983,roughness:1}));Y.position.y=1.45,ee.add(Y);const ge=new j(new Ln(m+.6,.18,b+.65),new qe({map:je,color:2696996,roughness:1}));ge.rotation.z=.55,ge.position.set(-.16,3,0),ee.add(ge);const me=ge.clone();me.rotation.z=-.55,me.position.x=.16,ee.add(me);const ze=z(1.05,1.75,.12,2759700,1);ze.position.set(0,1.05,b/2+.07),ee.add(ze),Le(ee,q,N),Ce.push(ee),Ge(p,T,m+.55,b+.55,V,.04)},Jo=(p,T,m=1)=>{const b=new Ke;b.position.set(p,H(p,T),T);const V=new j(new pt(.65*m,.65*m,1.2*m,10),le(9073729,1));V.rotation.z=Math.PI/2,V.position.y=.62*m,b.add(V);for(let N=0;N<3;N++){const q=new j(new Yt(.66*m,.025*m,5,18),le(5851693,1));q.rotation.y=Math.PI/2,q.position.y=(.28+N*.34)*m,b.add(q)}Le(b)},Ni=(p,T,m)=>{const b=new Ke;b.position.set(p,H(p,T),T),b.rotation.y=m;const V=z(2.8,.28,1.45,6636331,1);V.position.y=1,b.add(V);for(const q of[-1.15,1.15])for(const ee of[-.55,.55]){const oe=z(.16,1.15,.16,4401950,1);oe.position.set(q,.55,ee),b.add(oe)}for(const q of[-1.15,1.15]){const ee=new j(new pt(.5,.5,.18,14),le(2696738,1));ee.rotation.z=Math.PI/2,ee.position.set(q,.52,-.92),b.add(ee)}const N=z(.16,.16,2.4,4796447,1);N.rotation.x=Math.PI/2,N.position.set(0,.72,-2),b.add(N),Le(b)},Vs=(p,T,m=0)=>{const b=new Ke;b.position.set(p,H(p,T),T),b.rotation.y=m;const V=z(2.2,.16,.5,7359021,1);V.position.y=.85,b.add(V);for(const N of[-.78,.78]){const q=z(.12,.8,.12,4139549,1);q.position.set(N,.4,0),b.add(q)}Le(b)},Zo=(p,T)=>{const m=new Ke;m.position.set(p,H(p,T),T);for(let q=0;q<10;q++){const ee=q/10*Math.PI*2,oe=z(.45,.38,.38,6710621,1);oe.position.set(Math.cos(ee)*.95,.19,Math.sin(ee)*.95),oe.rotation.y=ee,m.add(oe)}const b=z(.16,2.2,.16,4861984,1),V=b.clone();b.position.set(-.9,1.2,0),V.position.set(.9,1.2,0),m.add(b,V);const N=z(2,.16,.16,3876891,1);N.position.y=2.25,m.add(N),Le(m)};$n(-19,31,8,5,.08,"Амбар","barn"),$n(17,34,7,5,-.2,"Сарай","shed"),$n(27,13,6,4,.45,"Склад рыбака","fishshed"),un(-25,27,-13,27),un(-25,27,-25,38),un(-25,38,-14,38),un(12,29,25,29),un(25,29,25,40),un(25,40,12,40),un(29,-1,39,-1),un(39,-1,39,10),un(39,10,30,10);for(const p of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])Jo(p[0],p[1],p[2]);Ni(-17,24,.18),Ni(29,-5,-.55),Vs(-20,23,.18),Vs(25,31,-.2),ye(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),ye(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),ye(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),ye(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),Ge(-31,8,7.8,5.8,.1,.04),Ge(-27,20,7.8,5.8,-.25,.04),Ge(31,18,7.8,5.8,.32,.04),Ge(20,24,7.8,5.8,-.12,.04);const Gs=(p,T,m)=>{const b=new Ke;b.position.set(p,H(p,T),T),b.rotation.y=m;const V=z(3,.18,1.25,7357994,1);V.position.y=1.45,b.add(V);for(const q of[-1.25,1.25])for(const ee of[-.48,.48]){const oe=z(.13,1.45,.13,4270877,1);oe.position.set(q,.72,ee),b.add(oe)}const N=new j(new kn(1.65,2.5,4,1,!1,Math.PI/4),le(4798510,1));N.scale.z=.55,N.position.y=2.15,b.add(N),Le(b)};Gs(-5,-7,.12),Gs(8,-5,-.18),Gs(6,7,.5);for(const p of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])Zo(p[0],p[1]);const Ws=(p,T,m=1)=>{const b=new Ke,V=H(p,T);for(let N=0;N<5;N++){const q=new j(new xt((.28+Q(N,p)*.18)*m,8,6),le(N%2?3494457:4284223,1));q.position.set((Q(N,2)-.5)*.7*m,.28*m,(Q(N,3)-.5)*.7*m),b.add(q)}b.position.set(p,V,T),Le(b)};for(let p=0;p<48;p++){const T=Q(p,501)*Math.PI*2,m=18+Q(p,502)*39,b=Math.cos(T)*m,V=Math.sin(T)*m+4;Math.abs(b)<9&&Math.abs(V)<14||Ws(b,V,.65+Q(p,503)*.75)}for(let p=0;p<34;p++){const T=-84+Q(p,610)*168,m=-82+Q(p,611)*164;if(Math.hypot(T,m-2)<24)continue;const b=.25+Q(p,612)*.55,V=new j(new sn(b,1),le(5725013,1));V.scale.y=.55,V.position.set(T,H(T,m)+b*.28,m),V.rotation.set(Q(p,613),Q(p,614),Q(p,615)),Le(V),k(T,m,b*.8,.03)}ye(-64,36,8,5,.12,"Старый дом","oldfarm",6505263,2828582),$n(-58,42,6,4,-.12,"Старый амбар","oldbarn"),un(-70,32,-60,32),un(-70,32,-70,43),un(-70,43,-61,43),Jo(-67,39,.9),Ni(-61,33,-.25),Zo(-57,34);const Xs=new Ke;Xs.position.set(-63,H(-63,47),47);for(let p=0;p<6;p++){const T=z(10,.035,.12,4208682,1);T.position.set(0,.02,(p-2.5)*1.05),T.rotation.y=.06,Xs.add(T)}Le(Xs);const Ei=(p,T)=>{const m=document.createElement("canvas");m.width=m.height=256;const b=m.getContext("2d");b.clearRect(0,0,256,256),b.textAlign="center",b.textBaseline="middle",b.shadowColor=T,b.shadowBlur=18,b.fillStyle=T,b.font="bold 150px serif",b.fillText(p,128,132),b.shadowBlur=4,b.globalAlpha=.55,b.font="bold 118px serif",b.fillText(p,128,132);const V=new $d(m);return V.colorSpace=jn,V.anisotropy=4,V},hi=(p,T,m,b,V,N=.72,q=0)=>{const ee="#"+V.toString(16).padStart(6,"0"),oe=new on({map:Ei(b,ee),transparent:!0,depthWrite:!1,side:Kt}),Y=new j(new Zn(N,N),oe);return Y.rotation.x=-Math.PI/2,Y.rotation.z=q,Y.position.set(T,.065,m),p.add(Y),Y},pn=new Ke,Qo=39,ea=70;pn.position.set(Qo,H(Qo,ea),ea),pn.userData={id:"runefield",label:"Поле Рун"};const ta=new qe({color:5857629,roughness:.94,metalness:.04}),Cu=new qe({color:3884096,roughness:1});new on({color:8251647,transparent:!0,opacity:.92,depthWrite:!1,side:Kt}),new on({color:12946687,transparent:!0,opacity:.86,depthWrite:!1,side:Kt}),new on({color:16766826,transparent:!0,opacity:.9,depthWrite:!1,side:Kt});const na=new j(new Hi(12.2,48),new qe({color:2636332,roughness:1,transparent:!0,opacity:.92}));na.rotation.x=-Math.PI/2,na.position.y=.018,pn.add(na);const ia=new j(new pt(2.15,2.55,.48,10),Cu);ia.position.y=.24,ia.scale.z=.82,pn.add(ia);const C=new j(new sn(1.48,1),ta);C.scale.set(1,1.65,.72),C.position.y=1.38,C.rotation.y=.18,pn.add(C);const $=new j(new sn(.78,1),ta);$.scale.set(.72,1.15,.55),$.position.set(0,2.72,.02),$.rotation.z=.06,pn.add($);const ie=hi(pn,0,0,"ᚠ",10481407,1.15,0);ie.position.y=2.55,ie.rotation.x=0;const re=new hr(7793407,1.7,9,2);re.position.set(0,2,.8),pn.add(re);for(const[p,T]of[[3,.075],[7.1,.065],[10.1,.045]]){const m=new j(new Yt(p,T,8,96),new on({color:15320941,transparent:!0,opacity:p<8?.82:.58,depthWrite:!1}));m.rotation.x=Math.PI/2,m.position.y=.055,pn.add(m)}const J=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ"];for(let p=0;p<16;p++){const T=p/16*Math.PI*2;hi(pn,Math.cos(T)*8.55,Math.sin(T)*8.55,J[p],p%3===0?15055195:p%3===1?7857653:12093423,.62,T+.18)}for(let p=0;p<12;p++){const T=p/12*Math.PI*2+.13;hi(pn,Math.cos(T)*5.45,Math.sin(T)*5.45,J[(p+5)%J.length],p%2?7659506:12684269,.38,T)}for(let p=0;p<10;p++){const T=p/10*Math.PI*2+.16,m=9.15+(.5-Q(p,1202))*1,b=2.4+Q(p,1203)*2,V=.72+Q(p,1204)*.48,N=new j(new sn(.82+Q(p,1205)*.22,1),ta);N.scale.set(V,b,.72+Q(p,1206)*.28),N.position.set(Math.cos(T)*m,N.scale.y*.58,Math.sin(T)*m),N.rotation.set((Q(p,1207)-.5)*.22,T+(Q(p,1208)-.5)*.3,(Q(p,1209)-.5)*.18),pn.add(N);const q=J[p%J.length],ee=Ei(q,p%3===0?"#8eeeff":p%3===1?"#c08cff":"#ffd86b"),oe=new j(new Zn(.62,.92),new on({map:ee,transparent:!0,depthWrite:!1,side:Kt}));oe.position.set(N.position.x+Math.cos(T)*.68,N.position.y*.76,N.position.z+Math.sin(T)*.68),oe.rotation.y=-T+Math.PI*.5,pn.add(oe);const Y=new hr(p%3===1?11628031:p%3===0?6479359:15055195,.35,3.6,2);Y.position.set(N.position.x,N.position.y*.72,N.position.z),pn.add(Y)}for(let p=0;p<18;p++){const T=Q(p,1220)*Math.PI*2,m=6.8+Q(p,1221)*4.3;Tl(pn,Math.cos(T)*m,.22,Math.sin(T)*m,.28+Q(p,1222)*.35,p%2?5003088:5857882,1223+p)}for(let p=0;p<10;p++){const T=Q(p,1230)*Math.PI*2,m=2.6+Q(p,1231)*6.6,b=new j(new pt(.06,.09,.035,7),new qe({color:10191179,metalness:.6,roughness:.45}));b.rotation.x=Math.PI/2,b.position.set(Math.cos(T)*m,.09,Math.sin(T)*m),pn.add(b)}Le(pn,"runefield","Поле Рун"),Ce.push(pn),k(Qo,ea,1.8,.08);const Se=(p,T,m,b)=>{const V=new Ke,N=m-p,q=b-T,ee=Math.hypot(N,q),oe=Math.floor(ee/1.7);for(let ge=0;ge<=oe;ge++){const me=ge/oe,ze=p+N*me,be=T+q*me,Qe=new j(new kn(.24,.24+2.8+Q(ge,p)*.5,6),le(3942940,1));Qe.position.set(ze,H(ze,be)+1.45,be),V.add(Qe)}const Y=z(.3,.35,ee,2957593,1);Y.rotation.y=Math.atan2(N,q),Y.position.set((p+m)/2,H((p+m)/2,(T+b)/2)+1.25,(T+b)/2),V.add(Y),M.add(V),Pe(p,T,m,b,.34,.08)};Se(-30,-31,-8,-31),Se(8,-31,30,-31),Se(-30,-31,-30,-13),Se(30,-31,30,16);const Ie=new Ke;Ie.userData={id:"gate",label:"Ворота Мидгарда"};for(const p of[-4.2,4.2]){const T=z(.8,6,.8,3482906,1);T.position.set(p,3,-31),Ie.add(T)}const We=z(10,.8,1,2957336,1);We.position.set(0,6,-31),Ie.add(We);for(let p=-3;p<=3;p++){const T=z(1,4.2,.22,5978660,1);T.position.set(p*1.15,2,-30.7),Ie.add(T)}Le(Ie,"gate","Ворота Мидгарда"),Ce.push(Ie),k(-4.2,-31,.55,.05),k(4.2,-31,.55,.05);const Ne=new Ke;Ne.userData={id:"mimir",label:"Колодец Мимира"},Ne.position.set(18,H(18,15),15);for(let p=0;p<14;p++){const T=p/14*Math.PI*2,m=z(.7,.48,.5,6711907,1);m.position.set(Math.cos(T)*1.45,.24,Math.sin(T)*1.45),m.rotation.y=T+Math.PI/2,Ne.add(m)}const rt=new j(new Hi(1.05,28),new qe({color:1522499,emissive:733496,emissiveIntensity:1.8,roughness:.18}));rt.rotation.x=-Math.PI/2,rt.position.y=.5,Ne.add(rt);for(const p of[-1.35,1.35]){const T=z(.22,3,.22,4861984,1);T.position.set(p,1.55,0),Ne.add(T)}const ot=z(3.1,.25,.25,3679513,1);ot.position.y=2.95,Ne.add(ot);const et=z(.55,.5,.55,5913383,1);et.position.set(0,1.65,0),Ne.add(et);const gt=new j(new Yt(1.8,.06,8,40),new qe({color:7792028,emissive:2653256,emissiveIntensity:3}));gt.rotation.x=Math.PI/2,gt.position.y=.53,Ne.add(gt),Le(Ne,"mimir","Колодец Мимира"),Ce.push(Ne),k(18,15,1.8,.08);const It=new hr(7530656,1.8,10,2);It.position.set(18,H(18,15)+1.4,15),M.add(It);const dt=new Ke;dt.userData={id:"norns",label:"Прядильня норн"},dt.position.set(-25,H(-25,43),43);const Vt=le(4927522,1),kt=le(2826523,1),tt=z(5.7,.28,.28,5847592,1);tt.position.set(0,3.8,0),dt.add(tt);const Xt=z(5,.25,.32,3877151,1);Xt.position.set(0,.65,.15),dt.add(Xt);for(const p of[-2.45,2.45]){const T=z(.28,3.55,.3,5321763,1);T.position.set(p,2.15,0),T.rotation.z=p>0?.08:-.08,dt.add(T)}const Et=new j(new Yt(2.05,.18,8,32),Vt);Et.rotation.y=Math.PI/2,Et.position.set(0,2.25,-.8),dt.add(Et);const Un=new j(new pt(.28,.32,.38,10),kt);Un.rotation.z=Math.PI/2,Un.position.set(0,2.25,-.8),dt.add(Un);for(let p=0;p<10;p++){const T=p/10*Math.PI*2,m=z(.08,.08,1.85,5913384,1);m.position.set(Math.cos(T)*.92,2.25+Math.sin(T)*.92,-.8),m.rotation.z=-T,dt.add(m)}const Cr=["URD","VERDANDI","SKULD"],Kn=[8640767,15198177,14908296];for(let p=0;p<3;p++){const T=(p-1)*2,m=new j(new sn(.78,1),new qe({color:4541257,roughness:.92,metalness:.05}));m.scale.set(.9,1.18+Q(p,1290)*.2,.72),m.position.set(T,1.35,.18),m.rotation.set(0,(p-1)*.16,0),dt.add(m);const b=Ei(p===0?"ᚢ":p===1?"ᚹ":"ᛋ",p===0?"#8fe6ff":p===1?"#f1f1ec":"#ef8d9a"),V=new j(new Zn(.48,.62),new on({map:b,transparent:!0,depthWrite:!1,side:Kt}));V.position.set(T,1.42,.86),V.rotation.y=Math.PI,dt.add(V);const N=document.createElement("canvas");N.width=320,N.height=96;const q=N.getContext("2d");q.clearRect(0,0,320,96),q.textAlign="center",q.textBaseline="middle",q.font="bold 34px serif",q.fillStyle=p===0?"#9fe9ff":p===1?"#f4f4ef":"#ef91a0",q.shadowColor=q.fillStyle,q.shadowBlur=12,q.fillText(Cr[p],160,48);const ee=new $d(N);ee.colorSpace=jn;const oe=new j(new Zn(1.55,.46),new on({map:ee,transparent:!0,depthWrite:!1,side:Kt}));oe.position.set(T,.55,.86),oe.rotation.y=Math.PI,dt.add(oe);const Y=new hr(Kn[p],.45,4.5,2);Y.position.set(T,1.55,1),dt.add(Y)}const Rr=[15123551,15263973,14245748];for(let p=0;p<3;p++){const T=[];for(let m=0;m<=18;m++){const b=m/18,V=1.9+b*4.6,N=(p-1)*2+Math.sin(b*Math.PI*2+p*1.7)*(.45+.5*b),q=.35+Math.cos(b*Math.PI*2+p)*.45;T.push(new B(N,V,q))}dt.add(new qd(new gn().setFromPoints(T),new Ic({color:Rr[p],transparent:!0,opacity:.9})))}for(let p=0;p<3;p++){const T=new j(new Yt(1.15+p*.18,.045,6,32),new on({color:Rr[p],transparent:!0,opacity:.75,depthWrite:!1}));T.position.set((p-1)*.38,6.15,.15),T.rotation.set(.4,p*.65,.2),dt.add(T)}const Gt=new j(new Yt(4.6,.065,8,72),new on({color:10345712,transparent:!0,opacity:.72,depthWrite:!1}));Gt.rotation.x=Math.PI/2,Gt.position.y=.05,dt.add(Gt);for(let p=0;p<18;p++){const T=Q(p,1300)*Math.PI*2,m=2.5+Q(p,1301)*3.1,b=new j(new pt(.12,.12,.16,9),new qe({color:[10184008,7174032,9261927,7828045][p%4],roughness:.8}));b.rotation.x=Math.PI/2,b.position.set(Math.cos(T)*m,.12,Math.sin(T)*m),dt.add(b)}for(let p=0;p<9;p++)hi(dt,(Q(p,1315)-.5)*7.5,(Q(p,1316)-.5)*6.2,["ᚠ","ᚱ","ᛟ","ᛉ","ᚦ"][p%5],p%2?9428976:14134881,.34,Q(p,1317)*Math.PI);Le(dt,"norns","Прядильня норн"),Ce.push(dt),k(-25,43,3,.1);const bn=-43,Cn=62,Qt=new Ke;Qt.userData={id:"ritual",label:"Круг Силы"},Qt.position.set(bn,H(bn,Cn),Cn);const Hn=le(6711651,1),ra=le(5593685,1);for(let p=0;p<2;p++){const T=p===0?18:12,m=p===0?6.2:3.65;for(let b=0;b<T;b++){const V=b/T*Math.PI*2+p*.12,N=m+(Q(b,930+p)*.5-.25),q=.42+Q(b,940+p)*.48,ee=new j(new sn(.55+Q(b,950+p)*.28,1),p===0?Hn:ra);ee.scale.y=.65+q*.35,ee.position.set(Math.cos(V)*N,q*.45,Math.sin(V)*N),ee.rotation.set(Q(b,960+p),V+Q(b,970+p),Q(b,980+p)),Qt.add(ee)}}const Ui=new j(new sn(1.05,1),le(5593428,1));Ui.scale.set(1.25,.62,1.05),Ui.position.y=.5,Qt.add(Ui);for(const p of[2.1,3.15,5.15]){const T=new j(new Yt(p,.045,7,64),new qe({color:9219739,emissive:3496777,emissiveIntensity:1.4,transparent:!0,opacity:.72}));T.rotation.x=Math.PI/2,T.position.y=.055,Qt.add(T)}const ux=new qe({color:13215838,emissive:9199384,emissiveIntensity:2.2,roughness:.5});for(let p=0;p<8;p++){const T=p/8*Math.PI*2,m=new j(new Ln(.13,.025,.65),ux);m.position.set(Math.cos(T)*4.55,.075,Math.sin(T)*4.55),m.rotation.y=-T,Qt.add(m)}Le(Qt,"ritual","Круг Силы"),Ce.push(Qt),k(bn,Cn,1.25,.06);const am=new hr(9226152,1.15,11,2);am.position.set(bn,H(bn,Cn)+1.6,Cn),M.add(am);const js=new Ke;js.userData={id:"rune",label:"Древний камень Феху"},js.position.set(27,H(27,57),57);const lm=new j(new sn(1.45,1),le(5002063,1));lm.position.y=1.2,js.add(lm);const Ru=new j(new Yt(1.05,.07,8,30),new qe({color:16766826,emissive:10052371,emissiveIntensity:3}));Ru.rotation.x=Math.PI/2,Ru.position.y=1.2,js.add(Ru),Le(js,"rune","Древний камень Феху"),Ce.push(js),k(27,57,1.7,.1);const yl=new Ke;yl.userData={id:"port",label:"Мост к причалу"};for(let p=-5;p<=5;p++){const T=z(3.6,.28,.82,6307882,1);T.position.set(-53,H(-53,p*1)+.5,p),yl.add(T)}Le(yl,"port","Мост к причалу"),Ce.push(yl);const Ys=new Ke;Ys.position.set(-46,H(-46,-15),-15);for(let p=0;p<7;p++){const T=z(2.8,.24,.72,7030573,1);T.position.set(0,.3,p*.85),Ys.add(T)}for(const p of[-1.2,1.2])for(let T=0;T<3;T++){const m=z(.22,1.5,.22,4139292,1);m.position.set(p,-.2,T*2.5),Ys.add(m)}const cm=z(2.2,.55,4.8,4926493,1);cm.position.set(3,-.15,2.5),Ys.add(cm),Le(Ys,"port","Речной причал"),Ce.push(Ys);const dx=(p,T)=>{const m=new j(new pt(.5,.5,1,12),le(6636332,1));m.position.set(p,H(p,T)+.5,T),M.add(m);for(const b of[.25,.76]){const V=new j(new Yt(.51,.045,6,18),le(3156004,.7,.1));V.rotation.x=Math.PI/2,V.position.set(p,H(p,T)+b,T),M.add(V)}},fx=(p,T)=>{const m=z(1,.75,1,7359022,1);m.position.set(p,H(p,T)+.38,T),M.add(m);const b=z(.08,.82,1.05,3679770,1);b.position.set(p,H(p,T)+.38,T),M.add(b),Ge(p,T,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([p,T])=>dx(p,T)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([p,T])=>fx(p,T));const hx=(p,T,m)=>{const b=new Ke,V=H(p,T),N=new qe({map:ne,color:16777215,roughness:.98}),q=new j(new pt(.18*m,.38*m,5.2*m,9),N);q.position.y=2.6*m,q.rotation.z=(Q(p,T)-.5)*.08,q.scale.x=1.08+Q(p,T+4)*.22,b.add(q);for(let oe=0;oe<9;oe++){const Y=(1.15+oe*.47)*m,ge=oe%2?1:-1,me=(.9+oe*.16)*m,ze=new j(new pt(.035*m,.095*m,me,7),N);ze.position.set(ge*(.28+oe*.035)*m,Y,(Q(oe,T)-.5)*.38*m),ze.rotation.z=ge*(.62-Q(oe,p)*.18),ze.rotation.y=Q(oe+21,T)*Math.PI*2,b.add(ze)}const ee=[1518881,2112296,2705457];for(let oe=0;oe<12;oe++){const Y=Math.max(.48,1.42-oe*.075)*m,ge=new j(new xt(Y,8,6),new qe({map:se,color:ee[oe%3],roughness:.99}));ge.scale.set(1+Q(oe,p)*.25,.55+Q(oe,T)*.16,.82+Q(oe*2,p)*.22),ge.position.set((Q(oe*4,p)-.5)*.58*m,(1.55+oe*.37)*m,(Q(oe*5,T)-.5)*.55*m),b.add(ge)}for(let oe=0;oe<3;oe++){const Y=new j(new xt(.38*m,7,5),new qe({color:oe%2?3231030:4021565,roughness:1}));Y.scale.set(1.5,.28,.85),Y.position.set((oe-1)*.45*m,.55*m,(Q(oe,88)-.5)*.5*m),b.add(Y)}b.position.set(p,V,T),Le(b),m>=1.15&&k(p,T,.46*m,.04)},Ml=(p,T,m,b=!1)=>{const V=new Ke,N=H(p,T),q=new qe({map:ne,color:16777215,roughness:1}),ee=new j(new pt(.42*m,.72*m,6.4*m,11),q);ee.position.y=3.2*m,ee.rotation.z=(Q(p,T)-.5)*.06,ee.scale.x=1.08,V.add(ee);for(let Y=0;Y<(b?9:7);Y++){const ge=Y/(b?9:7)*Math.PI*2+Q(Y,p)*.18,me=(1+Q(Y,T)*1.6)*m,ze=new j(new pt(.11*m,.3*m,me,7),q);ze.position.set(Math.cos(ge)*me*.42,.28*m,Math.sin(ge)*me*.42),ze.rotation.z=Math.cos(ge)*.72,ze.rotation.x=-Math.sin(ge)*.72,ze.rotation.y=-ge,V.add(ze)}const oe=b?10:8;for(let Y=0;Y<oe;Y++){const ge=Y/oe*Math.PI*2+Q(Y+11,p)*.22,me=(2+Q(Y+22,T)*2.2)*m,ze=new j(new pt(.07*m,.19*m,me,8),q);ze.position.set(Math.cos(ge)*me*.34,(3.25+Q(Y+33,p)*1.9)*m,Math.sin(ge)*me*.34),ze.rotation.z=Math.cos(ge)*.76,ze.rotation.x=Math.sin(ge)*.76,ze.rotation.y=-ge,V.add(ze);for(let be=0;be<4;be++){const Qe=new j(new xt((.46+Q(be+Y,90)*.25)*m,8,6),new qe({map:se,color:[2377005,3234359,3958848][(Y+be)%3],roughness:1}));Qe.scale.y=.62,Qe.position.set(Math.cos(ge)*me*(.52+.09*be)+(Q(be,Y)-.5)*.55*m,(3.9+Q(Y,be)*1.45+.25*be)*m,Math.sin(ge)*me*(.52+.09*be)+(Q(be+4,Y)-.5)*.55*m),V.add(Qe)}}if(b){const Y=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let ge=0;ge<Y.length;ge++){const me=-.9+ge*.46,ze=new j(new Zn(.48*m,.62*m),new on({map:Ei(Y[ge],ge%2?"#6fd4e8":"#e6bd61"),transparent:!0,depthWrite:!1,side:Kt}));ze.position.set(Math.sin(me)*.56*m,(1.5+ge*.68)*m,Math.cos(me)*.6*m),ze.rotation.y=me,V.add(ze)}}V.position.set(p,N,T),Le(V),m>=1.2&&k(p,T,.78*m,.05)},px=(p,T,m,b)=>{const V=new Ke,N=new qe({color:7291688,roughness:.96}),q=new qe({color:9132599,roughness:.96}),ee=new qe({color:3155230,roughness:1}),oe=new qe({color:12168600,roughness:.9}),Y=new qe({color:1512207,roughness:.25}),ge=new j(new xt(.68,14,10),N);ge.scale.set(1.35,.78,.72),ge.position.set(0,.98*m,0),ge.scale.multiplyScalar(m),V.add(ge);const me=new j(new xt(.42,12,9),q);me.scale.set(1,.9,.86),me.position.set(.49*m,1.04*m,0),V.add(me);const ze=new j(new pt(.2*m,.34*m,.98*m,10),N);ze.position.set(.5*m,1.46*m,0),ze.rotation.z=-.3,V.add(ze);const be=new j(new xt(.34*m,12,9),q);be.scale.set(1.18,.92,.78),be.position.set(.86*m,1.82*m,0),V.add(be);const Qe=new j(new xt(.17*m,10,7),q);Qe.scale.set(1.15,.72,.72),Qe.position.set(1.16*m,1.72*m,0),V.add(Qe);const ft=new j(new xt(.075*m,8,6),ee);ft.scale.set(1,.72,.85),ft.position.set(1.3*m,1.72*m,0),V.add(ft);for(const Ut of[-1,1]){const jt=new j(new kn(.095*m,.3*m,7),q);jt.position.set(.77*m,2.1*m,Ut*.2*m),jt.rotation.z=-.28,jt.rotation.x=Ut*.18,V.add(jt)}for(const Ut of[-1,1]){const jt=new j(new xt(.035*m,8,6),Y);jt.position.set(1.05*m,1.91*m,Ut*.235*m),V.add(jt);const Wt=new j(new xt(.009*m,6,4),new on({color:16777215}));Wt.position.set(1.075*m,1.925*m,Ut*.257*m),V.add(Wt)}const Pt=[];for(const Ut of[-1,1])for(const jt of[-1,1]){const Wt=new Ke;Wt.position.set(jt*.43*m,.76*m,Ut*.34*m);const Dt=new j(new pt(.085*m,.11*m,.43*m,7),N);Dt.position.y=-.2*m,Wt.add(Dt);const Nt=new Ke;Nt.position.y=-.4*m;const dn=new j(new pt(.055*m,.075*m,.43*m,7),ee);dn.position.y=-.2*m,Nt.add(dn);const Fn=new j(new xt(.075*m,7,5),ee);Fn.scale.set(1.15,.55,1.25),Fn.position.y=-.43*m,Nt.add(Fn),Wt.add(Nt),V.add(Wt),Pt.push(Wt,Nt)}const tn=new j(new xt(.16*m,9,7),q);tn.scale.set(.75,1.25,.72),tn.position.set(-.9*m,1.18*m,0),V.add(tn);for(const Ut of[-1,1]){const jt=new j(new pt(.04*m,.06*m,.68*m,7),oe);jt.position.set(.69*m,2.25*m,Ut*.14*m),jt.rotation.z=Ut*.22,V.add(jt);for(let Wt=0;Wt<3;Wt++){const Dt=new j(new pt(.02*m,.038*m,.34*m,6),oe);Dt.position.set((.56+.11*Wt)*m,(2.48+.15*Wt)*m,Ut*(.14+.045*Wt)*m),Dt.rotation.z=Ut*(.55-.08*Wt),V.add(Dt)}}V.scale.setScalar(1.1),V.position.set(p,H(p,T),T),V.userData={phase:b,legJoints:Pt},Le(V),O.push({g:V,x:p,z:T,r:4+Q(b,41)*3,speed:1.25+Q(b,42)*.8,phase:b,kind:"deer"})},mx=(p,T)=>{const m=new Ke,b=le(6965552,1),V=le(3089436,1),N=new j(new xt(.22,8,6),b);N.scale.set(1.35,.9,.9),N.position.y=.72,m.add(N);const q=new j(new xt(.17,8,6),b);q.position.set(.22,.86,0),m.add(q);for(const Y of[-1,1]){const ge=new j(new kn(.06,.18,6),b);ge.position.set(.17,.99,Y*.09),m.add(ge)}const ee=new j(new Yt(.24,.075,7,14,Math.PI*1.65),b);ee.rotation.y=Math.PI/2,ee.position.set(-.22,.91,0),m.add(ee);const oe=new j(new xt(.025,6,4),V);oe.position.set(.35,.9,-.12),m.add(oe),m.position.set(p,H(p,T),T),Le(m,"ratatosk","Белка Рататоск"),Ce.push(m),k(p,T,.28,.02),O.push({g:m,x:p,z:T,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},Ti=-4,Ai=69,Pu=new Ke;Pu.userData={id:"ashgrove",label:"Роща Ясеня"};const Lu=new j(new Hi(10.5,40),new qe({color:2504747,roughness:1,transparent:!0,opacity:.82}));Lu.rotation.x=-Math.PI/2,Lu.position.set(Ti,H(Ti,Ai)+.02,Ai),M.add(Lu);const gx=[[-6,1,1.7,!1],[-1,0,1.55,!1],[-8,5,1.45,!1],[2,5,1.45,!1],[-2,8,2.45,!0],[5,2,1.35,!1],[4,8,1.55,!1]];for(const[p,T,m,b]of gx)Ml(Ti+p,Ai+T,m,b);const Iu=new j(new Yt(6.4,.07,8,64),new qe({color:7910560,emissive:2182205,emissiveIntensity:1.8,transparent:!0,opacity:.7}));Iu.rotation.x=Math.PI/2,Iu.position.set(Ti,H(Ti,Ai)+.05,Ai),M.add(Iu);const Du=new j(new sn(1.05,1),le(5593941,1));Du.scale.set(1.3,.7,1.05),Du.position.set(Ti,H(Ti,Ai)+.65,Ai),M.add(Du),hi(Pu,0,0,"ᚱ",9430692,1.25,0);for(let p=0;p<26;p++){const T=Q(p,1310)*Math.PI*2,m=2.5+Q(p,1311)*7.2,b=Ti+Math.cos(T)*m,V=Ai+Math.sin(T)*m,N=new j(new pt(.025,.045,.22+Q(p,1312)*.28,6),le(12039579,1));N.position.set(b,H(b,V)+.12,V),M.add(N);const q=new j(new xt(.13+Q(p,1313)*.08,8,5),new qe({color:9297872,emissive:3913642,emissiveIntensity:2.5,roughness:.6}));q.scale.y=.48,q.position.set(b,H(b,V)+.34,V),M.add(q)}for(let p=0;p<16;p++){const T=Q(p,1320)*Math.PI*2,m=2+Q(p,1321)*7.5,b=Ti+Math.cos(T)*m,V=Ai+Math.sin(T)*m,N=new j(new pt(.07,.07,.025,10),le(9270341,.5,.55));N.rotation.x=Math.PI/2,N.position.set(b,H(b,V)+.05,V),M.add(N)}Ce.push(Pu),k(Ti,Ai,1,.08);const xn=61,yn=78,Sl=new Ke;Sl.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const Nu=new j(new Hi(11.5,44),new qe({color:2112299,roughness:1,transparent:!0,opacity:.86}));Nu.rotation.x=-Math.PI/2,Nu.position.set(xn,H(xn,yn)+.025,yn),M.add(Nu);const um=new qe({map:ne,color:16777215,roughness:1}),Uu=new j(new pt(1.35,2.1,10.5,13),um);Uu.position.set(xn,H(xn,yn)+5.25,yn),Uu.rotation.z=-.05,M.add(Uu);for(let p=0;p<8;p++){const T=p/8*Math.PI*2+.2,m=5+Q(p,1401)*4,b=new j(new pt(.25,.58,m,9),um);b.position.set(xn+Math.cos(T)*m*.36,H(xn,yn)+6.8+Q(p,1402)*2.2,yn+Math.sin(T)*m*.36),b.rotation.z=Math.cos(T)*.8,b.rotation.x=Math.sin(T)*.8,b.rotation.y=-T,M.add(b);for(let V=0;V<4;V++){const N=new j(new xt(1+Q(V+p,1403)*.55,9,6),new qe({map:se,color:[2312753,2972729,3697474][(p+V)%3],roughness:1}));N.scale.y=.65,N.position.set(xn+Math.cos(T)*m*(.48+.09*V)+(Q(V,p)-.5)*1.1,H(xn,yn)+8+Q(p,V)*3+V*.45,yn+Math.sin(T)*m*(.48+.09*V)+(Q(V+5,p)-.5)*1.1),M.add(N)}}for(let p=0;p<9;p++){const T=["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ","ᚷ","ᛏ","ᚢ"][p],m=Ei(T,p%2?"#63d9ef":"#f0c65d"),b=new j(new Zn(.7,.9),new on({map:m,transparent:!0,depthWrite:!1,side:Kt}));b.position.set(xn+Math.sin(p*.63)*1.42,H(xn,yn)+1+p*.78,yn+Math.cos(p*.63)*1.42),b.rotation.y=Math.PI*.5-p*.16,M.add(b)}const Fu=new j(new sn(1.35,1),le(5199954,1));Fu.scale.set(1.45,.7,1.15),Fu.position.set(xn,H(xn,yn)+.75,yn+1.6),M.add(Fu),yt(xn,yn+2.1,.72);const ku=new j(new Yt(6.7,.06,8,64),new qe({color:9162705,emissive:2318178,emissiveIntensity:1.9,transparent:!0,opacity:.62}));ku.rotation.x=Math.PI/2,ku.position.set(xn,H(xn,yn)+.055,yn),M.add(ku);for(let p=0;p<22;p++){const T=Q(p,1410)*Math.PI*2,m=1.8+Q(p,1411)*8.2,b=xn+Math.cos(T)*m,V=yn+Math.sin(T)*m;hi(Sl,b-xn,V-yn,["ᚱ","ᛉ","ᛟ","ᚦ","ᚨ","ᚠ"][p%6],p%2?6804447:14726490,.35,Q(p,1412)*Math.PI)}for(let p=0;p<18;p++){const T=["ᚱ","ᚨ","ᛟ","ᚦ"][p%4],m=Ei(T,p%2?"#63d9ef":"#e4bd65"),b=new j(new Zn(.34,.44),new on({map:m,transparent:!0,depthWrite:!1,side:Kt}));b.position.set(xn+(Q(p,1420)-.5)*12,1.4+Q(p,1421)*7,yn+(Q(p,1422)-.5)*12),b.userData.floatPhase=Q(p,1423)*6,M.add(b)}Le(Sl,"hoddmimir","Лес Ходдмимира"),Ce.push(Sl),k(xn,yn,1.2,.08);const sa=30,oa=53;for(let p=0;p<4;p++)px(sa+(p-1.5)*2.6,oa+(p%2?2.6:-2.6),1.12+Q(p,1440)*.16,10+p);const dm=new j(new sn(.72,1),le(5725526,1));dm.position.set(sa,H(sa,oa)+.5,oa),M.add(dm);const Ou=new j(new Yt(5.8,.045,7,48),new qe({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));Ou.rotation.x=Math.PI/2,Ou.position.set(sa,H(sa,oa)+.035,oa),M.add(Ou),mx(Ti+5,Ai+1);const wl=12,El=49,qs=new Ke;qs.position.set(wl,H(wl,El),El);const zu=new j(new sn(1.05,1),le(5133648,1));zu.position.y=.85,zu.scale.y=1.55,qs.add(zu);const Bu=new j(new Yt(2.7,.055,7,48),new qe({color:10259632,emissive:4929114,emissiveIntensity:1.8,transparent:!0,opacity:.78}));Bu.rotation.x=Math.PI/2,Bu.position.y=.06,qs.add(Bu);const vx=new Ic({color:14207464,transparent:!0,opacity:.72});for(let p=0;p<3;p++){const T=[new B((p-1)*.72,.95,.15),new B((p-1)*1.25,2.9,-.35+Math.sin(p)*.25),new B((p-1)*1.75,.5,.9)];qs.add(new qd(new gn().setFromPoints(T),vx))}for(let p=0;p<7;p++){const T=new j(new sn(.11,0),le(6708050,1)),m=-1+p*.32;T.position.set(-1.7+m*.95,.06,-1.6+p*.46),T.scale.set(1.6,.35,.8),qs.add(T)}Le(qs,"forestEvent","Камень Трёх Нитей"),k(wl,El,1.15,.08);const fm=(p,T,m,b,V,N,q)=>{const ee=new Ke;ee.position.set(p,H(p,T),T);const oe=new j(new sn(.78+q*.08,1),le(N,1));oe.position.y=.58+q*.08,oe.scale.y=1.35,ee.add(oe);const Y=new j(new Yt(2+q*.18,.045,7,40),new qe({color:V,emissive:V,emissiveIntensity:1.25,transparent:!0,opacity:.62}));Y.rotation.x=Math.PI/2,Y.position.y=.045,ee.add(Y);for(let ge=0;ge<3+q;ge++){const me=new j(new sn(.12,0),le(7827558,1)),ze=ge/(3+q)*Math.PI*2;me.position.set(Math.cos(ze)*(1.15+q*.12),.08,Math.sin(ze)*(1.15+q*.12)),me.scale.y=.45,ee.add(me)}Le(ee,m,b),Ce.push(ee),k(p,T,.9,.08)};((p,T)=>{const m=new Ke;m.position.set(p,H(p,T),T),m.userData={id:"forestCache",label:"Забытый тайник"};const b=new qe({map:ne,color:6968381,roughness:1}),V=new qe({color:2760987,roughness:1}),N=new j(new pt(2,2.65,4.9,11),b);N.position.y=2.45,N.rotation.z=-.035,m.add(N);for(let be=0;be<7;be++){const Qe=1.3+Q(be,1250)*2.7,ft=new j(new kn(.32+Q(be,1251)*.3,Qe,6),b),Pt=Q(be,1252)*Math.PI*2,tn=.55+Q(be,1253)*1.35;ft.position.set(Math.cos(Pt)*tn,4.75+Qe*.42,Math.sin(Pt)*tn),ft.rotation.z=(Q(be,1254)-.5)*.55,ft.rotation.x=(Q(be,1255)-.5)*.55,m.add(ft)}const q=new j(new xt(1.18,16,10),V);q.scale.set(1,1.18,.46),q.position.set(0,2,2.08),m.add(q);const ee=new j(new Yt(1.05,.16,8,28),new qe({color:4930349,roughness:1}));ee.rotation.x=Math.PI/2,ee.position.set(0,2,2.12),ee.scale.y=1.15,m.add(ee);const oe=new Ic({color:14211280,transparent:!0,opacity:.45});for(let be=0;be<6;be++){const Qe=[new B(-.95+be*.38,1.15+be%3*.55,2.15),new B((be-2.5)*.2,2+be%2*.3,2.48),new B(-.8+be*.32,2.95+be%3*.25,2.12)];m.add(new qd(new gn().setFromPoints(Qe),oe))}const Y=new j(new xt(.46,10,8),new qe({color:5978662,roughness:1}));Y.scale.set(.9,1.15,.62),Y.position.set(.05,1.45,2.34),m.add(Y);const ge=new j(new xt(.07,7,5),new qe({color:14004573,metalness:.7,roughness:.35,emissive:7293719,emissiveIntensity:1.4}));ge.position.set(.05,1.72,2.77),m.add(ge);for(let be=0;be<5;be++){const Qe=new j(new sn(.11,0),new qe({color:14793052,emissive:10775838,emissiveIntensity:2.1,roughness:.5}));Qe.position.set(-.38+be*.19,1.02+be%2*.08,2.5),m.add(Qe)}const me=["ᚠ","ᚱ","ᛉ","ᛟ","ᚦ","ᚨ"];for(let be=0;be<6;be++){const Qe=-1.05+be*.42,ft=Ei(me[be],be%2?"#e7bd61":"#7ce5ef"),Pt=new j(new Zn(.45,.62),new on({map:ft,transparent:!0,depthWrite:!1,side:Kt}));Pt.position.set(Math.sin(Qe)*1.55,1.2+be*.42,1.93+Math.cos(Qe)*.22),Pt.rotation.y=Math.PI,m.add(Pt)}const ze=new j(new Yt(4.15,.06,8,64),new on({color:14991203,transparent:!0,opacity:.78,depthWrite:!1}));ze.rotation.x=Math.PI/2,ze.position.y=.05,m.add(ze);for(let be=0;be<10;be++){const Qe=be/10*Math.PI*2;hi(m,Math.cos(Qe)*3.65,Math.sin(Qe)*3.65,["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᛟ","ᛉ","ᛏ"][be],14859617,.38,Qe+.2)}for(let be=0;be<12;be++){const Qe=Q(be,1270)*Math.PI*2,ft=1.8+Q(be,1271)*3.3,Pt=new j(new pt(.08,.08,.025,9),new qe({color:10190147,metalness:.55,roughness:.45}));Pt.rotation.x=Math.PI/2,Pt.position.set(Math.cos(Qe)*ft,.09,Math.sin(Qe)*ft),m.add(Pt)}for(let be=0;be<4;be++){const Qe=z(.08,.08,.75,10393476,1);Qe.position.set((Q(be,1280)-.5)*5,.12,(Q(be,1281)-.5)*5),Qe.rotation.y=Q(be,1282)*Math.PI,m.add(Qe)}Le(m,"forestCache","Забытый тайник"),Ce.push(m),k(p,T,1.75,.08)})(-15,58),fm(46,43,"forestWhisper","Камень Шёпота",7902629,4541773,3),fm(-48,72,"forestThread","Разорванная нить",10252688,5326925,2);const _x=(p,T,m,b,V)=>{const N=p.distanceTo(T),q=new j(new Ln(m,b,N),V);return q.position.copy(p).add(T).multiplyScalar(.5),q.lookAt(T),q};function Tl(p,T,m,b,V,N,q){const ee=new j(new sn(V,1),le(N,1));return ee.scale.set(.72+Q(q,1)*.62,.55+Q(q,2)*.85,.68+Q(q,3)*.55),ee.rotation.set(Q(q,4)*1.2,Q(q,5)*Math.PI,Q(q,6)*1.1),ee.position.set(T,m,b),p.add(ee),ee}const xx=(p,T)=>{const m=new Ke;m.position.set(p,H(p,T),T),m.userData={id:"fallenAsh",label:"Поверженный ясень"};const b=new j(new Yt(7.8,.07,8,64),new qe({color:9150343,emissive:3360307,emissiveIntensity:1,transparent:!0,opacity:.55}));b.rotation.x=Math.PI/2,b.position.y=.05,m.add(b);const V=new qe({map:ne,color:16777215,roughness:1}),N=new j(new pt(1.45,2.15,4.8,10),V);N.position.set(0,2.4,.2),N.rotation.z=-.04,m.add(N);const q=new j(new xt(.88,12,9),new on({color:1185043}));q.scale.set(1,.95,.55),q.position.set(0,1.75,1.72),m.add(q);for(let oe=0;oe<7;oe++){const Y=-.9+oe*.3,ge=2.5+Q(oe,1500)*2.7,me=new j(new pt(.11,.28,ge,7),V);me.position.set(Math.sin(Y)*ge*.34,4+Q(oe,1501)*2.8,.15+Math.cos(Y)*ge*.3),me.rotation.z=Math.sin(Y)*.65,me.rotation.x=-Math.cos(Y)*.55,me.rotation.y=Y,m.add(me)}for(let oe=0;oe<9;oe++){const Y=Q(oe,1510)*Math.PI*2,ge=1.7+Q(oe,1511)*5.6;Tl(m,Math.cos(Y)*ge,.22,Math.sin(Y)*ge,.3+Q(oe,1512)*.45,oe%3?5265490:6251613,1513+oe)}for(let oe=0;oe<8;oe++)hi(m,(Q(oe,1520)-.5)*5.8,(Q(oe,1521)-.5)*5.8,["ᚦ","ᛉ","ᚱ","ᛟ"][oe%4],10473668,.42,Q(oe,1522)*Math.PI);const ee=new j(new xt(.45,10,7),le(5978919,1));ee.scale.set(.9,1.2,.7),ee.position.set(0,1.55,1.25),m.add(ee),Le(m,"fallenAsh","Поверженный ясень"),Ce.push(m),k(p,T,1.8,.08)},yx=(p,T)=>{const m=new Ke;m.position.set(p,H(p,T),T),m.userData={id:"hunterCamp",label:"Забытая стоянка"};const b=new j(new Hi(8.7,40),new qe({color:3225644,roughness:1,transparent:!0,opacity:.78}));b.rotation.x=-Math.PI/2,b.position.y=.025,b.scale.set(1.18,.92,1),m.add(b);const V=new Ke;V.position.set(-1.45,.05,-.65),V.rotation.y=-.34,m.add(V);const N=le(5978920,1);le(3680030,1);const q=le(2697768,.82,.35),ee=le(4412730,1),oe=z(3.7,.26,1.65,6308141,1);oe.position.y=1.05,oe.rotation.z=-.08,V.add(oe);for(let Be=0;Be<9;Be++){const ht=z(2.8+Q(Be,501)*1.1,.16,.26,Be%3?6505775:4928293,1);ht.position.set(-.25+(Q(Be,502)-.5)*.25,1.18+(Q(Be,503)-.5)*.34,-.72+Be%3*.68),ht.rotation.z=(Q(Be,504)-.5)*.16,ht.rotation.y=(Q(Be,505)-.5)*.16,V.add(ht)}for(const[Be,ht,zt]of[[-1.55,-.83,.82],[1.35,-.83,.74]]){const Sn=new j(new Yt(zt,.14,7,20,Math.PI*1.56),q);Sn.rotation.y=Math.PI/2,Sn.rotation.z=zt>.8?.08:-.18,Sn.position.set(Be,.9,ht),V.add(Sn);const pi=new j(new pt(.15,.18,.28,8),q);pi.rotation.z=Math.PI/2,pi.position.set(Be,.9,ht),V.add(pi);for(let ds=0;ds<6;ds++){const Qm=ds/6*Math.PI*2+.25,Cx=new B(Be+Math.cos(Qm)*zt*.82,.9+Math.sin(Qm)*zt*.82,ht+.02),Rx=new B(Be,.9,ht+.02);V.add(_x(Rx,Cx,.065,.065,q))}}const Y=new j(new Ln(3.8,.14,.16),q);Y.position.set(0,.62,-.83),Y.rotation.z=.08,V.add(Y);const ge=new j(new Ln(.16,.18,3.2),N);ge.position.set(1.8,.8,-.35),ge.rotation.y=.9,V.add(ge);for(let Be=0;Be<6;Be++){const ht=new j(new xt(.28+Q(Be,507)*.18,7,5),ee);ht.scale.set(1.4,.32,.7),ht.position.set(-1.1+Be*.48,1.34+Be%2*.05,-.82),V.add(ht)}const me=new Ke;me.position.set(2.85,.02,1.15),me.rotation.y=.18,m.add(me),le(4861985,1);for(let Be=0;Be<4;Be++){const ht=Be/4*Math.PI*2+.25,zt=z(.11,3.7,.11,4861985,1);zt.position.set(Math.cos(ht)*1.25,1.65,Math.sin(ht)*1.25),zt.rotation.z=Math.cos(ht)*.34,zt.rotation.x=-Math.sin(ht)*.34,me.add(zt)}const ze=new j(new kn(2,3.2,4,1,!0),new qe({color:4862247,roughness:1,side:Kt,transparent:!0,opacity:.94}));ze.position.y=1.45,ze.scale.set(1,.9,.82),ze.rotation.y=.78,me.add(ze);for(let Be=0;Be<9;Be++){const ht=new j(new xt(.16+Q(Be,509)*.14,6,5),ee);ht.scale.set(1.5,.35,.8),ht.position.set((Q(Be,510)-.5)*2.4,1+Q(Be,511)*1.9,(Q(Be,512)-.5)*1.8),me.add(ht)}const be=z(1.05,1.55,.05,3088668,1);be.position.set(0,.72,1.65),be.rotation.y=.16,me.add(be),yt(p+.1,T+.45,.78);const Qe=new hr(16751173,1,8,2);Qe.position.set(.1,1.7,.45),m.add(Qe);const ft=new Ke;ft.position.set(-3.15,.5,1.25),ft.rotation.y=.8,ft.rotation.z=-.22,m.add(ft);const Pt=new j(new Hi(1.05,16),new qe({color:3882041,roughness:.85,metalness:.55,side:Kt}));Pt.rotation.x=-Math.PI/2,Pt.scale.y=.8,ft.add(Pt);const tn=new j(new Yt(1.03,.11,7,18),q);tn.rotation.x=-Math.PI/2,tn.scale.y=.8,ft.add(tn);const Ut=new j(new pt(.24,.31,.22,8),q);Ut.rotation.x=Math.PI/2,Ut.position.set(.18,0,.08),ft.add(Ut);const jt=z(.05,.035,1.15,1513494,1);jt.position.set(-.28,.025,.05),jt.rotation.y=.42,ft.add(jt),le(2960425,.65,.45);const Wt=(Be,ht,zt)=>{const Sn=new Ke;Sn.position.set(Be,.18,ht),Sn.rotation.y=zt;const pi=z(.09,.09,1.55,5059362,1);pi.rotation.x=Math.PI/2,pi.position.z=.15,Sn.add(pi);const ds=z(.55,.13,.28,3158061,.55);ds.position.set(0,.02,-.62),ds.rotation.y=-.25,Sn.add(ds),m.add(Sn)};Wt(-1.9,3.15,.45),Wt(4.15,-.65,-.8);const Dt=z(.11,.11,.95,5388068,1);Dt.rotation.y=.55,Dt.position.set(-2.1,.16,2.65),m.add(Dt);const Nt=new j(new xt(.48,9,7),new qe({color:5978919,roughness:1}));Nt.scale.set(.9,1.15,.65),Nt.position.set(3.55,.48,2.65),m.add(Nt);const dn=new j(new Yt(.33,.035,6,18,Math.PI*1.5),le(3023129,1));dn.rotation.x=Math.PI/2,dn.position.set(3.55,.93,2.65),m.add(dn);for(let Be=0;Be<15;Be++){const ht=new j(new pt(.09,.09,.025,10),new qe({color:9335877,metalness:.55,roughness:.45})),zt=Q(Be,520)*Math.PI*2,Sn=2.1+Q(Be,521)*3.7;ht.position.set(Math.cos(zt)*Sn,.13,Math.sin(zt)*Sn),ht.rotation.x=Math.PI/2,m.add(ht)}for(let Be=0;Be<5;Be++){const ht=z(.08,.08,.9,11182733,1);ht.position.set(3.2+Q(Be,522)*2.4,.18,-2.7+Q(Be,523)*1.7),ht.rotation.y=Q(Be,524)*Math.PI,ht.rotation.z=(Q(Be,525)-.5)*.25,m.add(ht)}const Fn=new j(new Yt(4.7,.055,7,64),new on({color:9160135,transparent:!0,opacity:.5}));Fn.rotation.x=Math.PI/2,Fn.position.y=.075,m.add(Fn);const ri=["ᚠ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ"];ri.forEach((Be,ht)=>{const zt=ht/ri.length*Math.PI*2;hi(m,Math.cos(zt)*4.15,Math.sin(zt)*4.15,Be,ht%3===0?13215066:7977149,.55,zt+.3)});for(let Be=0;Be<18;Be++)Tl(m,(Q(Be,530)-.5)*8,.18,(Q(Be,531)-.5)*7,.22+Q(Be,532)*.34,Be%4===0?6121048:5133389,530+Be);for(let Be=0;Be<12;Be++){const ht=z(.12,.12,1.7+Q(Be,535)*2,3811872,1);ht.position.set((Q(Be,536)-.5)*8,.11,(Q(Be,537)-.5)*8),ht.rotation.y=Q(Be,538)*Math.PI,ht.rotation.z=(Q(Be,539)-.5)*.2,m.add(ht)}Le(m,"hunterCamp","Забытая стоянка"),Ce.push(m),k(p,T,1.9,.1)},Mx=(p,T,m,b,V,N)=>{const q=new Ke;q.position.set(p,H(p,T),T);const ee=7442040,oe=le(4412730,1),Y=new j(new Yt(m,.07,8,64),new qe({color:ee,emissive:ee,emissiveIntensity:.65,transparent:!0,opacity:.42}));Y.rotation.x=Math.PI/2,Y.position.y=.045,q.add(Y);const ge=Math.floor(m/1.7);for(let me=0;me<ge;me++){const ze=Q(me,p*11+T)*Math.PI*2,be=m*.35+Q(me,T*17)*m*.45;Tl(q,Math.cos(ze)*be,.2,Math.sin(ze)*be,.34+Q(me,33)*.32,5266514,800+me)}{for(let me=0;me<8;me++){const ze=new j(new xt(.34+Q(me,600)*.25,7,5),oe);ze.scale.y=.35,ze.position.set((Q(me,601)-.5)*m,.16,(Q(me,602)-.5)*m),q.add(ze)}for(let me=0;me<6;me++)hi(q,(Q(me,603)-.5)*m*.9,(Q(me,604)-.5)*m*.9,["ᛉ","ᚱ","ᚦ","ᚨ","ᛟ","ᚠ"][me],7907492,.42,Q(me,605)*Math.PI)}Le(q,b,V),Ce.push(q)};yx(70,18),Mx(67,49,9.5,"deepGrove","Глубокая роща"),xx(52,7);const Rn=75,Mn=30,en=new Ke;en.position.set(Rn,H(Rn,Mn),Mn);const Sx=le(5986899,1),hm=z(7.8,.42,5.8,5591885,1);hm.position.y=.22,en.add(hm);const pm=z(7.4,2.8,.3,6439727,1);pm.position.set(0,1.4,-2.7),en.add(pm);const mm=z(.3,2.8,5.4,6439727,1);mm.position.set(-3.7,1.4,0),en.add(mm);const gm=z(.3,2.8,5.4,6439727,1);gm.position.set(3.7,1.4,0),en.add(gm);const vm=z(2.55,2.8,.3,6439727,1);vm.position.set(-2.43,1.4,2.7),en.add(vm);const _m=z(2.55,2.8,.3,6439727,1);_m.position.set(2.43,1.4,2.7),en.add(_m);const xm=z(2.3,.72,.3,6439727,1);xm.position.set(0,2.44,2.7),en.add(xm);const ym=z(.16,2.18,.34,2826523,1);ym.position.set(-.66,1.28,2.72),en.add(ym);const Mm=z(.16,2.18,.34,2826523,1);Mm.position.set(.66,1.28,2.72),en.add(Mm);const Sm=z(1.48,.16,.34,2826523,1);Sm.position.set(0,2.34,2.72),en.add(Sm);const $s=new Ke;$s.position.set(-.57,0,2.72),en.add($s);const wm=z(1.14,2.05,.12,3154457,1);wm.position.set(.57,1.28,0),$s.add(wm);const Em=new j(new xt(.08,8,6),le(11831883,1));Em.position.set(.86,1.25,.1),$s.add(Em);const wx=new qe({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const p of[-2.35,2.35]){const T=z(1.25,1,.12,2826523,1);T.position.set(p,1.72,2.78),en.add(T);const m=new j(new Ln(.98,.72,.06),wx);m.position.set(p,1.72,2.86),en.add(m);const b=z(.07,.78,.1,2826523,1);b.position.set(p,1.72,2.91),en.add(b);const V=z(1.08,.07,.1,2826523,1);V.position.set(p,1.72,2.91),en.add(V)}const Tm=new qe({map:je,color:2697767,roughness:.98,side:Kt}),aa=new j(new Zn(4.25,6.25),Tm),la=new j(new Zn(4.25,6.25),Tm);aa.rotation.x=Math.PI/2,la.rotation.x=Math.PI/2,aa.rotation.z=.62,la.rotation.z=-.62,aa.position.set(-1.02,3.95,0),la.position.set(1.02,3.95,0),en.add(aa,la);const Hu=z(.22,.22,6.45,2695965,1);Hu.position.y=4.75,en.add(Hu);const Vu=new j(new Ln(.48,1.35,.48),Sx);Vu.position.set(1.55,4.8,-.65),en.add(Vu);const Gu=z(.62,.1,.62,3420461,1);Gu.position.set(1.55,5.48,-.65),en.add(Gu);const Am=z(2.35,.18,1,6636845,1);Am.position.set(0,.62,3.15),en.add(Am);const bm=z(1.55,.16,.48,5849131,1);bm.position.set(0,.3,3.58),en.add(bm),Le(en,"heroHome","Домик героя"),Ce.push(en),Ge(Rn,Mn-2.72,7.4,.3,0,.05),Ge(Rn-3.72,Mn,.3,5.45,0,.05),Ge(Rn+3.72,Mn,.3,5.45,0,.05),Ge(Rn-2.43,Mn+2.72,2.55,.3,0,.05),Ge(Rn+2.43,Mn+2.72,2.55,.3,0,.05);const rn=new Ke;rn.position.set(Rn,H(Rn,Mn),Mn),rn.visible=!1;const Cm=z(7,.16,5,4928548,1);Cm.position.y=.5,rn.add(Cm);const Rm=z(7,2.65,.18,4139808,1);Rm.position.set(0,1.8,-2.45),rn.add(Rm);const Pm=z(.18,2.65,4.9,4139808,1);Pm.position.set(-3.45,1.8,0),rn.add(Pm);const Lm=z(.18,2.65,4.9,4139808,1);Lm.position.set(3.45,1.8,0),rn.add(Lm);const Im=z(2.35,2.65,.18,4139808,1);Im.position.set(-2.42,1.8,2.45),rn.add(Im);const Dm=z(2.35,2.65,.18,4139808,1);Dm.position.set(2.42,1.8,2.45),rn.add(Dm);const Nm=z(2.5,.04,2.1,7162673,1);Nm.position.set(-.15,.6,.25),rn.add(Nm);const Um=z(1.65,.65,2.15,4008478,1);Um.position.set(-2.15,.88,-1.25),rn.add(Um);const Fm=z(1.48,.12,1.35,7033152,1);Fm.position.set(-2.15,1.27,-.92),rn.add(Fm);const km=z(1.28,.18,.46,11903114,1);km.position.set(-2.15,1.38,-1.95),rn.add(km);const Om=z(1.65,.12,1.05,5255969,1);Om.position.set(.85,1.15,-.15),rn.add(Om);for(const[p,T]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const m=z(.1,.7,.1,3679515,1);m.position.set(p,.72,T),rn.add(m)}const zm=z(1.25,.8,.72,5978660,1);zm.position.set(2.1,.95,-1.7),rn.add(zm);const Bm=z(1.9,.14,.45,5978660,1);Bm.position.set(1.35,2,-2.25),rn.add(Bm);for(const p of[.75,1.35,1.95]){const T=new j(new pt(.08,.1,.35,8),le(7304016,1));T.position.set(p,2.24,-2.22),rn.add(T)}const Hm=z(1.35,.55,.7,5920078,1);Hm.position.set(2.15,.78,.95),rn.add(Hm);const Vm=new j(new kn(.28,.72,8),new qe({color:16744744,emissive:16731402,emissiveIntensity:4}));Vm.position.set(2.15,1.42,.95),rn.add(Vm);const Gm=new hr(16747068,2.2,8,2);Gm.position.set(2.15,1.7,.95),rn.add(Gm),Le(rn,"heroHomeInterior","Дом героя — внутри"),Ce.push(rn);const ls=new Ke;ls.position.set(Rn,H(Rn,Mn),Mn);const Wu=new j(new Yt(6.2,.055,7,48),new qe({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));Wu.rotation.x=Math.PI/2,Wu.position.y=.035,ls.add(Wu);for(const[p,T]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const m=z(.18,1,.18,4797735,1);m.position.set(p,.5,T),ls.add(m)}for(const p of[-2.4,2.9]){const T=z(10.2,.12,.12,6308139,1);T.position.set(0,.59,p),ls.add(T)}const Ex=le(6906972,1);for(let p=0;p<7;p++){const T=new j(new pt(.32,.4,.12,7),Ex);T.position.set(0,.08,4.1+p*.72),T.rotation.y=p*.4,ls.add(T)}yt(Rn-2.4,Mn+4.8,.48).scale.setScalar(.72),Le(ls,"heroHomeYard","Двор домика героя"),Ce.push(ls),yt(70,18,.75).scale.setScalar(.72);const Wm=new j(new pt(.65,.8,.7,7),le(5327426,1));Wm.position.set(70,H(70,18)+.35,16.5),M.add(Wm);for(const[p,T]of[[68,20],[72,20],[68,16],[72,16]]){const m=z(.16,1.15,.16,4797735,1);m.position.set(p,H(p,T)+.57,T),M.add(m)}const Al=new Ke;Al.position.set(52,H(52,7),7);const Xu=new j(new pt(.5,.62,7,8),new dc({map:ne,color:4995371}));Xu.rotation.z=Math.PI/2,Xu.position.y=.5,Al.add(Xu);const ju=new j(new pt(.53,.53,.12,12),le(7693389,1));ju.rotation.z=Math.PI/2,ju.position.set(3.5,.5,0),Al.add(ju),M.add(Al);for(let p=0;p<7;p++){const T=new j(new sn(.14,0),le(6913394,1)),m=p/7*Math.PI*2;T.position.set(67+Math.cos(m)*4,.12+H(67+Math.cos(m)*4,49+Math.sin(m)*4),49+Math.sin(m)*4),M.add(T)}for(let p=0;p<95;p++){const T=Q(p,77)*Math.PI*2,m=58+Q(p,91)*32,b=Math.cos(T)*m,V=Math.sin(T)*m+2,q=[[Ti,Ai,11],[39,70,13],[-64,36,11],[-43,62,10],[30,53,12],[61,78,10],[-15,58,7],[46,43,7],[-48,72,7],[70,18,11],[75,30,13],[67,49,12],[52,7,10]].some(([ee,oe,Y])=>Math.hypot(b-ee,V-oe)<Y);Math.abs(b+57)>9&&!q&&hx(b,V,.78+Q(p,13)*.82)}Ml(-10,18,1.55,!1),Ml(13,24,1.7,!1),Ml(-31,-12,2.15,!0);for(let p=0;p<110;p++){const T=Q(p,701)*Math.PI*2,m=15+Q(p,702)*50,b=Math.cos(T)*m,V=Math.sin(T)*m+3;if(Math.abs(b)<10&&Math.abs(V)<16)continue;const N=new Ke;N.position.set(b,H(b,V),V);for(let q=0;q<3;q++){const ee=new j(new kn(.025,.38+Q(q,p)*.28,4),new dc({color:q===1?5466175:4282935}));ee.position.set((q-1)*.09,.18,(Q(q*3,p)-.5)*.12),ee.rotation.z=(q-1)*.22,N.add(ee)}M.add(N)}for(let p=0;p<80;p++){const T=-88+Q(p,101)*176,m=-88+Q(p,111)*176;if(Math.hypot(T,m+2)>30){const b=new j(new kn(.08,.55+Q(p,121)*.7,5),new dc({color:4941888}));b.position.set(T,H(T,m)+.3,m),M.add(b)}}const cs=new Ke;cs.position.set(29,H(29,25),25),cs.userData={id:"tower",label:"Сторожевая башня"};for(const p of[-2,2])for(const T of[-2,2]){const m=z(.35,7,.35,3942685,1);m.position.set(p,3.5,T),cs.add(m)}const Xm=z(5,.35,5,6833965,1);Xm.position.y=5.8,cs.add(Xm);const jm=new j(new kn(3.8,2.7,4),le(2696482,1));jm.position.y=8,cs.add(jm),Le(cs,"tower","Сторожевая башня"),Ce.push(cs),Ge(29,25,4.8,4.8,0,.08);const ca=(p,T,m,b,V,N)=>{const q=new Ke;q.userData={id:m,label:b,phase:N,baseX:p,baseZ:T};const ee=new j(new oi(.32,.78,4,8),le(V,.9));ee.position.y=.85,q.add(ee);const oe=new j(new xt(.25,12,8),le(13210736,.9));oe.position.y=1.58,q.add(oe);const Y=z(.7,.9,.15,2565407,1);Y.position.set(0,.82,-.27),q.add(Y),q.position.set(p,H(p,T),T),Le(q,m,b),Ce.push(q),hn.push(q)};ca(9,-8,"elder","Старейшина",7558719,.4),ca(-6,-3,"blacksmith","Кузнец",6044459,1.5),ca(21,1,"hunter","Охотник",4215359,2.4),ca(5,10,"villager","Житель Мидгарда",5858125,3.4),ca(-16,4,"villager2","Житель деревни",6638394,4.2);const Tx=new on({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),Yu=new Ke;for(let p=0;p<34;p++){const T=new j(new xt(.9+Q(p,810)*2.2,8,6),Tx);T.position.set(-88+Q(p,811)*176,1.8+Q(p,812)*2.2,-72+Q(p,813)*144),Yu.add(T)}M.add(Yu);const us=RA(t);M.add(us);const ar=us.userData.anim,Ym=new zS,qu=new Je,qm=p=>{var b,V,N,q;if((V=(b=p.target)==null?void 0:b.closest)!=null&&V.call(b,".mid3d-ui"))return;const T=G.domElement.getBoundingClientRect();qu.x=(p.clientX-T.left)/T.width*2-1,qu.y=-((p.clientY-T.top)/T.height)*2+1,Ym.setFromCamera(qu,U);const m=Ym.intersectObjects(Ce,!0)[0];if(m){let ee=m.object;for(;ee.parent&&!((N=ee.userData)!=null&&N.id);)ee=ee.parent;(q=ee.userData)!=null&&q.id&&e(ee.userData.id)}};G.domElement.addEventListener("pointerup",qm);const Ax=p=>{v.current=p,_(p),l(""),rn.visible=p,aa.visible=!p,la.visible=!p,Hu.visible=!p,Vu.visible=!p,Gu.visible=!p,p?(o.current.x=Rn,o.current.z=Mn+.95,u.current.x=0,u.current.z=-1,$s.rotation.y=-Math.PI/2):(o.current.x=Rn,o.current.z=Mn+3.75,u.current.x=0,u.current.z=1,$s.rotation.y=0),us.position.set(o.current.x,H(o.current.x,o.current.z)+.04,o.current.z)};x.current=Ax;const bx=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:18,z:15,r:4.8},{id:"norns",label:"Прядильня норн",x:-25,z:43,r:5.4},{id:"rune",label:"Древний камень Феху",x:27,z:57,r:4.5},{id:"ritual",label:"Круг Силы",x:-43,z:62,r:6.8},{id:"port",label:"Речной причал",x:-46,z:-15,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-4,z:69,r:7.5},{id:"forestEvent",label:n?"Камень Трёх Нитей — место выбора":"Камень Трёх Нитей",x:wl,z:El,r:4.8},{id:"forestCache",label:"Забытый тайник",x:-15,z:58,r:4.2},{id:"forestWhisper",label:"Камень Шёпота",x:46,z:43,r:4.2},{id:"forestThread",label:"Разорванная нить",x:-48,z:72,r:4.2},{id:"runefield",label:"Поле Рун",x:39,z:70,r:8},{id:"oldfarm",label:"Старый хутор",x:-64,z:36,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:30,z:53,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:61,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:70,z:18,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:67,z:49,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:52,z:7,r:7.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],$m=()=>{const p=Math.max(1,E.clientWidth),T=Math.max(1,E.clientHeight);U.aspect=p/T,U.updateProjectionMatrix(),G.setSize(p,T,!1)};$m();const Km=new ResizeObserver($m);Km.observe(E);let $u=0,Jm=performance.now();const Zm=p=>{const T=Math.min(.05,(p-Jm)/1e3);Jm=p;const m=o.current,b=Math.hypot(m.dx,m.dz);if(b>.05){const Y=6.2*T;Ze(m,m.x+m.dx/b*Y,m.z+m.dz/b*Y),us.rotation.y=Math.atan2(m.dx,m.dz),u.current.x=m.dx/b,u.current.z=m.dz/b,d(!0)}else d(!1);const V=H(m.x,m.z);if(us.position.set(m.x,V+.04,m.z),ar){const Y=p*.011+ar.phase,ge=b>.05?Math.sin(Y)*.58:0,me=b>.05?Math.sin(Y+Math.PI)*.42:0;ar.legL.rotation.x=ge,ar.legR.rotation.x=-ge,ar.armL.upper.rotation.x=me,ar.armR.upper.rotation.x=-me,ar.armL.elbow.rotation.x=-Math.abs(me)*.35,ar.armR.elbow.rotation.x=-Math.abs(me)*.35,ar.weapon.rotation.z=-.12+(b>.05?Math.sin(Y)*.035:0)}const N=u.current,q=v.current?new B(m.x-N.x*1,V+3.65,m.z-N.z*1):new B(m.x-N.x*2,V+7.2,m.z-N.z*2+11.8);U.position.lerp(q,v.current?.09:.055),U.lookAt(m.x+(v.current?N.x*.9:N.x*1.9),V+(v.current?1.25:1.2),m.z+(v.current?N.z*.9:N.z*1.9));let ee="",oe="";if(v.current)m.z>Mn+1.72&&(ee="Дверь — выйти из дома",oe="heroHomeExit");else for(const Y of bx)if(Math.hypot(m.x-Y.x,m.z-Y.z)<Y.r){ee=Y.label,oe=Y.id;break}l(ee?`${ee}|${oe}`:""),Fe.forEach(Y=>{const ge=.72+.28*Math.sin(p*.0016+Y.phase);Y.mesh.scale.set(ge,ge*.42,ge);const me=Y.mesh.material;me.opacity=.055+.055*(.5+.5*Math.sin(p*.0016+Y.phase))}),_t.forEach(Y=>{Y.light.intensity=2+Math.sin(p*.012+Y.phase)*.5,Y.flame.scale.y=.9+Math.sin(p*.009+Y.phase)*.12}),Yu.children.forEach((Y,ge)=>{Y.position.x+=Math.sin(p*12e-5+ge)*.003,Y.position.z+=Math.cos(p*1e-4+ge)*.002}),O.forEach((Y,ge)=>{var Qe,ft;if(Y.kind==="deer"){const Pt=Y.g.position.x-us.position.x,tn=Y.g.position.z-us.position.z,Ut=Math.hypot(Pt,tn);if(Ut<11){const jt=((Qe=Y.g.userData)==null?void 0:Qe.legJoints)||[],Wt=p*.014*(Y.speed||1);for(let zt=0;zt<4;zt++){const Sn=jt[zt*2],pi=jt[zt*2+1];Sn&&(Sn.rotation.z=Math.sin(Wt+zt*Math.PI)*.1),pi&&(pi.rotation.z=Math.max(0,Math.sin(Wt+zt*Math.PI))*-.18)}const Dt=Math.max(.001,Ut),Nt=Ut<5.5?.115:.075,dn=Y.g.position.x+Pt/Dt*Nt,Fn=Y.g.position.z+tn/Dt*Nt,ri=dn-30,Be=Fn-53;if(Math.hypot(ri,Be)<17)Y.g.position.set(dn,H(dn,Fn),Fn);else{const zt=Math.atan2(Be,ri),Sn=30+Math.cos(zt)*16,pi=53+Math.sin(zt)*10;Y.g.position.set(Sn,H(Sn,pi),pi)}Y.g.rotation.y=Math.atan2(tn,Pt),Y.g.position.y+=Math.sin(p*.008+ge)*.025;return}}const me=p*.00105*Y.speed+Y.phase,ze=Y.x+Math.cos(me)*Y.r,be=Y.z+Math.sin(me*.83)*Y.r*.62;if(Y.g.position.set(ze,H(ze,be),be),Y.g.rotation.y=Math.atan2(Math.cos(me*.83),-Math.sin(me)),Y.kind==="deer"){const Pt=((ft=Y.g.userData)==null?void 0:ft.legJoints)||[],tn=p*.014*(Y.speed||1);for(let Ut=0;Ut<4;Ut++){const jt=Pt[Ut*2],Wt=Pt[Ut*2+1];jt&&(jt.rotation.z=Math.sin(tn+Ut*Math.PI)*.1),Wt&&(Wt.rotation.z=Math.max(0,Math.sin(tn+Ut*Math.PI))*-.18)}Y.g.position.y+=Math.sin(p*.006+ge)*.025,Y.g.rotation.x=Math.sin(p*.004+Y.phase)*.018}}),hn.forEach((Y,ge)=>{const me=Y.userData.phase||0,ze=Y.userData.baseX,be=Y.userData.baseZ,Qe=ze+Math.sin(p*28e-5+me)*1.6,ft=be+Math.cos(p*22e-5+me)*1.1;Y.position.set(Qe,H(Qe,ft),ft),Y.rotation.y=Math.sin(p*4e-4+me)*.5}),G.render(M,U),$u=requestAnimationFrame(Zm)};return $u=requestAnimationFrame(Zm),()=>{cancelAnimationFrame($u),Km.disconnect(),G.domElement.removeEventListener("pointerup",qm),Fe.forEach(p=>{p.mesh.geometry.dispose(),p.mesh.material.dispose()}),F.dispose(),Xe.dispose(),je.dispose(),G.dispose(),M.traverse(p=>{var T,m,b,V;p.isMesh&&((m=(T=p.geometry)==null?void 0:T.dispose)==null||m.call(T),Array.isArray(p.material)?p.material.forEach(N=>{var q;return(q=N.dispose)==null?void 0:q.call(N)}):(V=(b=p.material)==null?void 0:b.dispose)==null||V.call(b))}),G.domElement.remove(),x.current=null}},[t.id,e,n]);const S=E=>{const M=r.current,U=s.current;if(!M||!U)return;const G=M.getBoundingClientRect(),te=G.left+G.width/2,ae=G.top+G.height/2,ue=48;let H=E.clientX-te,K=E.clientY-ae;const F=Math.hypot(H,K);F>ue&&(H=H/F*ue,K=K/F*ue),U.style.transform=`translate(${H}px,${K}px)`,o.current.dx=H/ue,o.current.dz=K/ue},R=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},P=E=>{var K,F;const M=r.current;if(!M)return;const U=E.target;if((K=U.closest)!=null&&K.call(U,".mid3d-action")||(F=U.closest)!=null&&F.call(U,".mid3d-interact"))return;const G=M.getBoundingClientRect(),te=26;E.clientX>=G.left-te&&E.clientX<=G.right+te&&E.clientY>=G.top-78&&E.clientY<=G.bottom+26&&(E.currentTarget.setPointerCapture(E.pointerId),S(E))},L=E=>{E.currentTarget.hasPointerCapture(E.pointerId)&&S(E)},D=E=>{E.currentTarget.hasPointerCapture(E.pointerId)&&E.currentTarget.releasePointerCapture(E.pointerId),R()};return W.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:P,onPointerMove:L,onPointerUp:D,onPointerCancel:D,onContextMenu:E=>E.preventDefault(),children:[W.jsxs("div",{className:"mid3d-ui mid3d-top",children:[W.jsxs("div",{className:"mid3d-pill",children:[W.jsx("b",{children:"МИДГАРД"}),W.jsx("span",{children:"Деревня • река • лес • святилища"})]}),W.jsxs("div",{className:"mid3d-pill",children:[W.jsx("b",{children:"ᛟ"}),W.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),g&&!n&&W.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[W.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),W.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{y(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{y(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{y(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),g&&n&&W.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[W.jsx("b",{children:"Камень Трёх Нитей"}),W.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>y(!1),children:"Продолжить путь"})]}),f&&W.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[W.jsx("b",{children:"🜂 Круг Силы"}),W.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),W.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!f&&!g&&(()=>{const[E,M]=a.split("|"),U=M==="heroHome"||M==="heroHomeExit";return W.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[W.jsx("b",{children:E}),W.jsx("span",{children:U?M==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),W.jsx("button",{onPointerDown:G=>G.stopPropagation(),onClick:()=>{var G,te;M==="ritual"?h(!0):M==="forestEvent"?y(!0):M==="heroHome"?(G=x.current)==null||G.call(x,!0):M==="heroHomeExit"?(te=x.current)==null||te.call(x,!1):e(M)},children:U?M==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),W.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:W.jsx("div",{className:"mid3d-knob",ref:s})}),W.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:E=>E.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),W.jsx("div",{className:"mid3d-ui mid3d-hint",children:w?c?"Ты внутри дома":"Дом героя • отдых • сундук • выход":c?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function LA(){const[t,e]=Tt.useState(()=>mv().hero?{t:"tree"}:{t:"choose"}),[n,i]=Tt.useState(mv),[r,s]=Tt.useState(""),[o,a]=Tt.useState(""),[l,c]=Tt.useState(""),d=Tt.useRef(0),[f,h]=Tt.useState(null),[g,y]=Tt.useState(null),[w,_]=Tt.useState(!1),[u,v]=Tt.useState(0),[x,S]=Tt.useState(0),[R,P]=Tt.useState(0),[L,D]=Tt.useState(""),[E,M]=Tt.useState(!1),[U,G]=Tt.useState(!1),[te,ae]=Tt.useState(""),[ue,H]=Tt.useState(.06);Tt.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),Tt.useEffect(()=>{var k,Pe,ce,de;(k=bt==null?void 0:bt.ready)==null||k.call(bt),(Pe=bt==null?void 0:bt.expand)==null||Pe.call(bt),(ce=bt==null?void 0:bt.setHeaderColor)==null||ce.call(bt,"#0b0f0c"),(de=bt==null?void 0:bt.setBackgroundColor)==null||de.call(bt,"#0b0f0c")},[]),Tt.useEffect(()=>{if(!(bt!=null&&bt.BackButton))return;const k=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(bt.BackButton.show(),bt.BackButton.onClick(k)):bt.BackButton.hide(),()=>{var Pe,ce;(ce=(Pe=bt.BackButton)==null?void 0:Pe.offClick)==null||ce.call(Pe,k)}},[t,n.hero]),Tt.useEffect(()=>{h(null),y(null),_(!1),ae(""),M(!1)},[t]);const K=k=>{c(k),window.clearTimeout(d.current),d.current=window.setTimeout(()=>c(""),1800)},F=(k="light")=>{var Pe,ce,de,Ze;try{k==="success"?(ce=(Pe=bt==null?void 0:bt.HapticFeedback)==null?void 0:Pe.notificationOccurred)==null||ce.call(Pe,"success"):(Ze=(de=bt==null?void 0:bt.HapticFeedback)==null?void 0:de.impactOccurred)==null||Ze.call(de,"light")}catch{}},ne=k=>e(k),se=k=>{F(),e({t:"realm",id:k.id})},Ee=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),Oe=()=>{const k=Ee();if(k<=0){K("Дозор только начался — искры ещё копятся.");return}i(Pe=>({...Pe,sparks:Pe.sparks+k,watch:Date.now()})),F("success"),K("Дозор завершён: +"+k+" ✨")},ut=()=>{if(n.gift===Ta())return;const Pe=(n.gift?Math.round((Date.parse(Ta())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,ce=lf[Pe-1];i(de=>({...de,sparks:de.sparks+ce,gift:Ta(),streak:Pe})),F("success"),K("Дар Древа, день "+Pe+": +"+ce+" ✨")},Le=()=>{!r||!o||(i(k=>({...k,hero:{id:r,name:o}})),F("success"),K("Путь начинается, "+o+"!"),e({t:"tree"}))},le=n.hero?cf.find(k=>k.id===n.hero.id):null,z=k=>Math.floor(Math.random()*k),pe=k=>n.trials.filter(Pe=>Pe.startsWith(k+":")).length,Ue=k=>{if(n.artifacts.includes(k.id)){K("Мир покорён. Артефакт хранится в листе героя.");return}F(),e({t:"trial",id:k.id})},nt=(k,Pe,ce)=>{const de=Pe===2;i(Ze=>({...Ze,sparks:Ze.sparks+ce+(de?30:0),trials:[...Ze.trials,k+":"+Pe],artifacts:de?[...Ze.artifacts,k]:Ze.artifacts})),de&&(F("success"),K("Мир пройден! Артефакт: "+df[k]))},Ce=(k,Pe)=>{if(f!==null)return;const ce=pe(k),de=uf[k][ce];if(Pe===de.c){h(Pe),F("success");const Ze=12+ce*3+((le==null?void 0:le.id)==="dwarf"?6:0);K("Верно! Сундук хозяина: +"+Ze+" ✨"),nt(k,ce,Ze);return}if(n.powers.includes("mimirEye")){h(de.c),i(it=>({...it,powers:it.powers.filter(I=>I!=="mimirEye")}));const Ze=8+ce*2;F("success"),K("Око Мимира раскрыло истину. Ответ исправлен. +"+Ze+" ✨"),nt(k,ce,Ze);return}if(n.powers.includes("nornThread")){h(Pe),i(it=>({...it,powers:it.powers.filter(I=>I!=="nornThread")}));const Ze=6+ce*2;F("success"),K("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+Ze+" ✨"),nt(k,ce,Ze);return}h(Pe),F(),D(Aa[k].name+" мрачнеет: «Что ж — пусть решит сталь!»")},_t=k=>{const Pe=pe(k),ce=uf[k][Pe],de=ce.a.findIndex((Ze,it)=>it!==ce.c&&it!==g);y(de),_(!0),F(),K("Шёпот ветров уносит один ответ...")},hn=k=>{const Pe=Aa[k],ce=n.powers.includes("ashBreath");v(Pe.hp),S(le.hp+(ce?25:0)),P(le.en+(ce?2:0)),ae(""),M(!1),G(!1),D(ce?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":Pe.name+" поднимает оружие!"),ce&&i(de=>({...de,powers:de.powers.filter(Ze=>Ze!=="ashBreath")})),e({t:"fight",id:k})},O=(k,Pe)=>{if(te)return;const ce=Aa[k],de=pe(k);let Ze=0,it="",I=R,A=E;if(Pe==="hit"&&(Ze=le.str+z(4),n.powers.includes("fireOath")&&(Ze+=5,i(Fe=>({...Fe,powers:Fe.powers.filter(xe=>xe!=="fireOath")})),it="Огненный обет! "),le.id==="berserk"&&x<=le.hp/2&&(Ze*=2,it+="Медвежья ярость! "),it+="Ты бьёшь: "+le.weapon+" — −"+Ze+" хозяину."),Pe==="rune"){if(R<4){K("Мало энергии для заклинания!");return}I=R-4,Ze=le.en+2+z(5),it="Руническое заклинание вспыхивает: −"+Ze+" хозяину."}Pe==="shield"&&(A=!0,it="Ты поднимаешь щит — удар ослабнет.");const Z=u-Ze;if(Z<=0){v(0),P(I),ae("win");const Fe=8+de*2;D("Хозяин повержен! Награда: +"+Fe+" ✨"),nt(k,de,Fe);return}let he=ce.atk+z(3),_e="";A&&(he=Math.ceil(he*.3),_e=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(he=Math.ceil(he*.65),i(Fe=>({...Fe,powers:Fe.powers.filter(xe=>xe!=="iceOath")})),_e+=" Ледяной обет сковал удар врага."),le.id==="dwarf"&&(he=Math.ceil(he*.75));let fe=x;if(le.id==="viking"&&!U&&fe-he<=0&&(G(!0),he=0,_e=" Крылья бури поглотили смертельный удар!"),fe=fe-he,v(Z),S(Math.max(0,fe)),P(I),M(!1),fe<=0&&n.powers.includes("yggdrasilCall")){i(Fe=>({...Fe,powers:Fe.powers.filter(xe=>xe!=="yggdrasilCall")})),S(30),D(it+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(fe<=0){ae("lose"),i(Fe=>({...Fe,sparks:Math.max(0,Fe.sparks-10)})),D(it+" "+ce.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}D(it+_e+" "+ce.name+" отвечает: −"+he+".")},Rt=k=>{pe(k)>=3||n.artifacts.includes(k)?e({t:"realm",id:k}):e({t:"trial",id:k})},at=k=>k==="tree"?t.t==="tree"||t.t==="realm":t.t===k,Ge=k=>k==="tree"?{t:"tree"}:{t:k};return W.jsxs("div",{className:"app",children:[W.jsx("style",{children:bA}),W.jsxs("div",{className:"hdr",children:[t.t==="tree"&&W.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&W.jsx("button",{className:"back",onClick:()=>ne({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&W.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&W.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&W.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&W.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&W.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&W.jsx("div",{className:"title",children:"⚔ Бой"}),W.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&W.jsxs("div",{className:"scroll choose-screen",children:[W.jsxs("div",{className:"card center choose-intro",children:[W.jsx("div",{className:"big",children:"ᛉ"}),W.jsx("div",{className:"qhead2",children:"Выбери героя"}),W.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),cf.map(k=>W.jsxs("button",{className:"hcard"+(r===k.id?" on":""),onClick:()=>{s(k.id),a(""),F()},children:[W.jsx("span",{className:"hface",style:{borderColor:k.color,color:k.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:W.jsx(kr,{name:k.img,className:"himg"})}),W.jsxs("span",{className:"hinfo",children:[W.jsx("span",{className:"hname",style:{color:k.color},children:k.race}),W.jsxs("span",{className:"hab",children:["🌀 ",k.ability,": ",k.abilityDesc]}),W.jsxs("span",{className:"hst",children:["⚔ ",k.str," • ✨ ",k.en," • ❤ ",k.hp]}),W.jsxs("span",{className:"hw",children:["🗡 ",k.weapon]})]})]},k.id)),r&&W.jsxs("div",{className:"card",children:[W.jsx("div",{className:"qhead2",children:"Имя героя"}),W.jsx("div",{className:"chips",children:(cf.find(k=>k.id===r).gender==="f"?TA:AA).map(k=>W.jsx("button",{className:"chip"+(o===k?" on":""),onClick:()=>{a(k),F()},children:k},k))})]}),W.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:Le,children:"Вступить на путь"})]}),t.t==="tree"&&W.jsxs("div",{className:"maparea",children:[W.jsx("div",{className:"mapwrap",children:W.jsxs("div",{className:"mapcanvas",children:[W.jsx(kr,{name:"tree",className:"mapimg"}),mc.map(k=>W.jsxs("button",{className:"marker",style:{left:k.x+"%",top:k.y+"%"},onClick:()=>se(k),children:[W.jsxs("div",{className:"amulet-wrap",children:[W.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${k.glow}, transparent 70%)`}}),W.jsx("div",{className:"amulet-ring",style:{borderColor:k.color}}),W.jsx("div",{className:"amulet-core",style:{borderColor:k.color,color:k.color,background:`linear-gradient(135deg, ${k.dark}, #0a0a0a)`},children:k.runeSym})]}),W.jsx("span",{className:"mname",style:{color:k.color,borderColor:k.glow},children:k.name})]},k.id))]})}),W.jsx("div",{className:"fadeT"}),W.jsx("div",{className:"fadeB"}),W.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&le&&n.hero&&W.jsxs("button",{className:"herobar",onClick:()=>ne({t:"hero"}),children:[W.jsxs("span",{className:"hbface",style:{borderColor:le.color,color:le.color},children:[W.jsx(kr,{name:le.img,className:"hbimg"}),le.sym]}),W.jsxs("span",{className:"hbname",children:[n.hero.name,W.jsx("i",{children:le.race})]}),W.jsxs("span",{className:"hbst",children:["⚔ ",le.str," ✨ ",le.en," ⏳ ",Ee()]}),W.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const k=mc.find(Pe=>Pe.id===t.id);if(k.id==="midgard"){if(!le)return null;const Pe=ce=>{if(F(),ce==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?K("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(de=>({...de,sparks:de.sparks+20,done:[...new Set([...de.done,"forest:present:reward"])]})),F("success"),K("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):K("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(ce==="norns"){K("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(ce==="forge"||ce==="blacksmith"){K("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(ce==="house"||ce==="elder"){K("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(ce==="port"){K("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(ce==="rune"){K("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(ce==="ashgrove"){K("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(ce==="runefield"){K("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(ce==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?K("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(de=>({...de,sparks:de.sparks+20,done:[...new Set([...de.done,"forest:past:reward"])]})),F("success"),K("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):K("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(ce==="forestCache"){n.done.includes("forest:cache")?K("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(de=>({...de,sparks:de.sparks+18,done:[...new Set([...de.done,"forest:cache"])]})),F("success"),K("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(ce==="forestWhisper"){n.done.includes("forest:whisper")?K("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(de=>({...de,sparks:de.sparks+16,done:[...new Set([...de.done,"forest:whisper"])]})),F("success"),K("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(ce==="forestThread"){n.done.includes("forest:thread")?K("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(de=>({...de,sparks:de.sparks+22,done:[...new Set([...de.done,"forest:thread"])]})),F("success"),K("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(ce==="heroHome"){K("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(ce==="hunterCamp"){n.done.includes("forest:camp")?K("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(de=>({...de,sparks:de.sparks+14,done:[...new Set([...de.done,"forest:camp"])]})),F("success"),K("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(ce==="deepGrove"){n.done.includes("forest:grove")?K("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(de=>({...de,sparks:de.sparks+17,done:[...new Set([...de.done,"forest:grove"])]})),F("success"),K("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(ce==="fallenAsh"){n.done.includes("forest:ash")?K("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(de=>({...de,sparks:de.sparks+21,done:[...new Set([...de.done,"forest:ash"])]})),F("success"),K("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(ce==="deer"){K("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(ce==="hoddmimir"){K("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(ce==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?K("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(de=>({...de,sparks:de.sparks+20,done:[...new Set([...de.done,"forest:future:reward"])]})),F("success"),K("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):K("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(ce==="forestEvent"){n.done.includes("forest:choice")&&K("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(ce==="forestEvent:past"){i(de=>({...de,sparks:de.sparks+12,done:[...new Set([...de.done,"forest:choice","forest:past"])]})),F("success"),K("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(ce==="forestEvent:present"){i(de=>({...de,sparks:de.sparks+12,done:[...new Set([...de.done,"forest:choice","forest:present"])]})),F("success"),K("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(ce==="forestEvent:future"){i(de=>({...de,sparks:de.sparks+12,done:[...new Set([...de.done,"forest:choice","forest:future"])]})),F("success"),K("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(ce==="event"){K("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(ce.startsWith("ritual:")){const de=ce.slice(7),Ze={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},I={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[de];if(!I)return;if(n.powers.includes(I)){K(Ze[de]+" уже пробуждён. Его сила ждёт своего часа.");return}i(Z=>({...Z,powers:[...new Set([...Z.powers,I])],done:[...new Set([...Z.done,"ritual:"+de])]}));const A={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};F("success"),K(A[de]);return}};return W.jsx(PA,{h:le,on:Pe,eventDone:n.done.includes("forest:choice")})}return W.jsxs("div",{className:"content",children:[W.jsx(kr,{name:k.id,className:"bgimg"}),W.jsx("div",{className:"veil"}),W.jsxs("div",{className:"banner",children:[W.jsx("span",{className:"bemoji",children:k.emoji}),W.jsxs("div",{children:[W.jsx("div",{className:"bname",children:k.name}),W.jsx("div",{className:"btag",children:k.tag})]})]}),W.jsxs("button",{className:"gate",onClick:()=>Ue(k),children:[W.jsxs("span",{className:"gwrap",children:[W.jsx("span",{className:"gate-ring",style:{borderColor:k.color}}),W.jsx("span",{className:"gate-core",style:{borderColor:k.color,color:k.color,background:`radial-gradient(circle, ${k.dark}, #050705 75%)`},children:k.runeSym})]}),W.jsx("span",{className:"mname",style:{color:k.color,borderColor:k.glow},children:n.artifacts.includes(k.id)?"Мир покорён":"Врата мира"})]}),W.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const k=mc.find(Ze=>Ze.id===t.id),Pe=Aa[k.id],ce=pe(k.id);if(ce>=3)return W.jsx("div",{className:"scroll",children:W.jsxs("div",{className:"card center",children:[W.jsx("div",{className:"big",children:"🏺"}),W.jsx("div",{className:"qhead2",children:"Мир покорён!"}),W.jsxs("p",{className:"dim",children:["Артефакт: ",df[k.id]]}),W.jsx("button",{className:"btn gold",onClick:()=>ne({t:"realm",id:k.id}),children:"К вратам"})]})});const de=uf[k.id][ce];return W.jsxs("div",{className:"scroll",children:[W.jsxs("div",{className:"mhead",children:[W.jsxs("span",{className:"mface",style:{borderColor:k.color,color:k.color},children:[W.jsx(kr,{name:gv[k.id],className:"himg"}),Pe.sym]}),W.jsx("span",{className:"mname2",style:{color:k.color},children:Pe.name}),W.jsxs("span",{className:"mtitle",children:[Pe.title," • испытание ",ce+1," из 3"]})]}),ce===0&&W.jsxs("div",{className:"greet",children:["«",Pe.greet,"»"]}),W.jsxs("div",{className:"cloud",children:[W.jsx("div",{className:"riddle",children:de.q}),de.a.map((Ze,it)=>W.jsx("button",{className:"ans"+(f!==null?it===de.c?" good":it===f?" bad":" off":g===it?" off":""),onClick:()=>Ce(k.id,it),children:Ze},it)),(le==null?void 0:le.id)==="elf"&&!w&&f===null&&W.jsx("button",{className:"btn rune",onClick:()=>_t(k.id),children:"🌀 Шёпот ветров"}),f!==null&&(f===de.c?W.jsx("button",{className:"btn gold",onClick:()=>Rt(k.id),children:"Открыть сундук →"}):W.jsx("button",{className:"btn",onClick:()=>hn(k.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const k=mc.find(ce=>ce.id===t.id),Pe=Aa[k.id];return W.jsxs("div",{className:"scroll",children:[W.jsxs("div",{className:"duel",children:[W.jsxs("div",{className:"dside",children:[W.jsxs("span",{className:"dface",style:{borderColor:k.color,color:k.color},children:[W.jsx(kr,{name:gv[k.id],className:"himg"}),Pe.sym]}),W.jsx("span",{className:"dname",style:{color:k.color},children:Pe.name}),W.jsx("span",{className:"dhp",children:W.jsx("span",{className:"dhpfill",style:{width:Math.max(0,u/Pe.hp*100)+"%",background:k.color}})}),W.jsxs("span",{className:"dnum",children:[u,"/",Pe.hp]})]}),W.jsx("span",{className:"dvs",children:"⚔"}),W.jsxs("div",{className:"dside",children:[W.jsxs("span",{className:"dface",style:{borderColor:le.color,color:le.color},children:[W.jsx(kr,{name:le.img,className:"himg"}),le.sym]}),W.jsx("span",{className:"dname",style:{color:le.color},children:n.hero.name}),W.jsx("span",{className:"dhp",children:W.jsx("span",{className:"dhpfill",style:{width:Math.max(0,x/le.hp*100)+"%",background:"#7ee787"}})}),W.jsx("span",{className:"denergy",children:Array.from({length:le.en}).map((ce,de)=>W.jsx("span",{className:"pip"+(de<R?" on":"")},de))})]})]}),W.jsx("div",{className:"flog",children:L}),!te&&W.jsxs("div",{className:"acts",children:[W.jsxs("button",{className:"btn gold",onClick:()=>O(k.id,"hit"),children:["⚔ Удар: ",le.weapon]}),W.jsx("button",{className:"btn rune",onClick:()=>O(k.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),W.jsx("button",{className:"btn shield",onClick:()=>O(k.id,"shield"),children:"🛡 Щит"})]}),te==="win"&&W.jsx("button",{className:"btn gold",onClick:()=>Rt(k.id),children:"Забрать награду →"}),te==="lose"&&W.jsx("button",{className:"btn ghost",onClick:()=>ne({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&le&&n.hero&&W.jsx("div",{className:"scroll",children:W.jsxs("div",{className:"card center",children:[W.jsx("span",{className:"hface bigface",style:{borderColor:le.color,color:le.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:W.jsx(kr,{name:le.img,className:"himg"})}),W.jsxs("div",{className:"qhead2",style:{color:le.color},children:[n.hero.name," • ",le.race]}),W.jsxs("div",{className:"stats",children:[W.jsxs("div",{className:"stat",children:[W.jsxs("b",{children:["⚔ ",le.str]}),W.jsx("span",{children:"сила"})]}),W.jsxs("div",{className:"stat",children:[W.jsxs("b",{children:["✨ ",le.en]}),W.jsx("span",{children:"энергия"})]}),W.jsxs("div",{className:"stat",children:[W.jsxs("b",{children:["❤ ",le.hp]}),W.jsx("span",{children:"здоровье"})]})]}),W.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",W.jsx("b",{children:le.weapon})]}),W.jsxs("div",{className:"hrow",children:["🌀 ",le.ability,": ",le.abilityDesc]}),W.jsxs("div",{className:"hrow",children:["✨ Искр: ",W.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",W.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&W.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(k=>df[k]).join(", ")]})]})}),t.t==="gift"&&(()=>{const k=n.gift===Ta(),ce=(n.gift?Math.round((Date.parse(Ta())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,de=k?n.streak:ce;return W.jsxs("div",{className:"scroll",children:[W.jsxs("div",{className:"card center",children:[W.jsx("div",{className:"big",children:"🎁"}),W.jsx("div",{className:"qhead2",children:"Дар Древа"}),W.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),W.jsx("div",{className:"days",children:lf.map((Ze,it)=>W.jsxs("span",{className:"day"+(it+1===de?" on":it+1<de&&k?" done":""),children:[W.jsx("b",{children:Ze}),"день ",it+1]},it))}),k?W.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):W.jsxs("button",{className:"btn gold",onClick:ut,children:["Забрать дар +",lf[ce-1]," ✨"]})]}),W.jsxs("div",{className:"card center",children:[W.jsx("div",{className:"big",children:"⏳"}),W.jsx("div",{className:"qhead2",children:"Дозор героя"}),W.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),W.jsxs("button",{className:"btn gold",onClick:Oe,children:["Завершить дозор · +",Ee()," ✨"]})]})]})})(),t.t==="hall"&&W.jsx("div",{className:"scroll",children:W.jsxs("div",{className:"card center",children:[W.jsx("div",{className:"big",children:"🏛️"}),W.jsx("div",{className:"qhead2",children:"Чертог путника"}),W.jsxs("div",{className:"stats",children:[W.jsxs("div",{className:"stat",children:[W.jsxs("b",{children:["✨ ",n.sparks]}),W.jsx("span",{children:"Искр"})]}),W.jsxs("div",{className:"stat",children:[W.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),W.jsx("span",{children:"артефакты"})]})]}),W.jsxs("div",{className:"rank",children:["🏆 Ранг: ",EA(n.sparks)]}),n.hero&&le&&W.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",le.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&W.jsx("div",{className:"nav",children:wA.map(k=>W.jsxs("button",{className:"navbtn"+(at(k.id)?" on":""),onClick:()=>ne(Ge(k.id)),children:[W.jsx("span",{className:"ic",children:k.ic}),k.t]},k.id))}),l&&W.jsx("div",{className:"toast",children:l})]})}P_(document.getElementById("root")).render(W.jsx(LA,{}));
