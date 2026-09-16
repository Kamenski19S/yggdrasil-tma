(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Jg={exports:{}},Zc={},Qg={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=Symbol.for("react.element"),Jx=Symbol.for("react.portal"),Qx=Symbol.for("react.fragment"),e1=Symbol.for("react.strict_mode"),t1=Symbol.for("react.profiler"),n1=Symbol.for("react.provider"),i1=Symbol.for("react.context"),r1=Symbol.for("react.forward_ref"),s1=Symbol.for("react.suspense"),o1=Symbol.for("react.memo"),a1=Symbol.for("react.lazy"),Nm=Symbol.iterator;function l1(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var ev={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tv=Object.assign,nv={};function Oo(t,e,n){this.props=t,this.context=e,this.refs=nv,this.updater=n||ev}Oo.prototype.isReactComponent={};Oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iv(){}iv.prototype=Oo.prototype;function Lh(t,e,n){this.props=t,this.context=e,this.refs=nv,this.updater=n||ev}var Dh=Lh.prototype=new iv;Dh.constructor=Lh;tv(Dh,Oo.prototype);Dh.isPureReactComponent=!0;var Im=Array.isArray,rv=Object.prototype.hasOwnProperty,Nh={current:null},sv={key:!0,ref:!0,__self:!0,__source:!0};function ov(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)rv.call(e,i)&&!sv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:nl,type:t,key:s,ref:o,props:r,_owner:Nh.current}}function c1(t,e){return{$$typeof:nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ih(t){return typeof t=="object"&&t!==null&&t.$$typeof===nl}function u1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Um=/\/+/g;function Uu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?u1(""+t.key):e.toString(36)}function sc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case nl:case Jx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Uu(o,0):i,Im(r)?(n="",t!=null&&(n=t.replace(Um,"$&/")+"/"),sc(r,e,n,"",function(c){return c})):r!=null&&(Ih(r)&&(r=c1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Um,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Im(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Uu(s,a);o+=sc(s,e,n,l,r)}else if(l=l1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Uu(s,a++),o+=sc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function vl(t,e,n){if(t==null)return t;var i=[],r=0;return sc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function d1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var On={current:null},oc={transition:null},f1={ReactCurrentDispatcher:On,ReactCurrentBatchConfig:oc,ReactCurrentOwner:Nh};function av(){throw Error("act(...) is not supported in production builds of React.")}mt.Children={map:vl,forEach:function(t,e,n){vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return vl(t,function(){e++}),e},toArray:function(t){return vl(t,function(e){return e})||[]},only:function(t){if(!Ih(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};mt.Component=Oo;mt.Fragment=Qx;mt.Profiler=t1;mt.PureComponent=Lh;mt.StrictMode=e1;mt.Suspense=s1;mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f1;mt.act=av;mt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=tv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)rv.call(e,l)&&!sv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:nl,type:t.type,key:r,ref:s,props:i,_owner:o}};mt.createContext=function(t){return t={$$typeof:i1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:n1,_context:t},t.Consumer=t};mt.createElement=ov;mt.createFactory=function(t){var e=ov.bind(null,t);return e.type=t,e};mt.createRef=function(){return{current:null}};mt.forwardRef=function(t){return{$$typeof:r1,render:t}};mt.isValidElement=Ih;mt.lazy=function(t){return{$$typeof:a1,_payload:{_status:-1,_result:t},_init:d1}};mt.memo=function(t,e){return{$$typeof:o1,type:t,compare:e===void 0?null:e}};mt.startTransition=function(t){var e=oc.transition;oc.transition={};try{t()}finally{oc.transition=e}};mt.unstable_act=av;mt.useCallback=function(t,e){return On.current.useCallback(t,e)};mt.useContext=function(t){return On.current.useContext(t)};mt.useDebugValue=function(){};mt.useDeferredValue=function(t){return On.current.useDeferredValue(t)};mt.useEffect=function(t,e){return On.current.useEffect(t,e)};mt.useId=function(){return On.current.useId()};mt.useImperativeHandle=function(t,e,n){return On.current.useImperativeHandle(t,e,n)};mt.useInsertionEffect=function(t,e){return On.current.useInsertionEffect(t,e)};mt.useLayoutEffect=function(t,e){return On.current.useLayoutEffect(t,e)};mt.useMemo=function(t,e){return On.current.useMemo(t,e)};mt.useReducer=function(t,e,n){return On.current.useReducer(t,e,n)};mt.useRef=function(t){return On.current.useRef(t)};mt.useState=function(t){return On.current.useState(t)};mt.useSyncExternalStore=function(t,e,n){return On.current.useSyncExternalStore(t,e,n)};mt.useTransition=function(){return On.current.useTransition()};mt.version="18.3.1";Qg.exports=mt;var _t=Qg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1=_t,p1=Symbol.for("react.element"),m1=Symbol.for("react.fragment"),g1=Object.prototype.hasOwnProperty,v1=h1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_1={key:!0,ref:!0,__self:!0,__source:!0};function lv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)g1.call(e,i)&&!_1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:p1,type:t,key:s,ref:o,props:r,_owner:v1.current}}Zc.Fragment=m1;Zc.jsx=lv;Zc.jsxs=lv;Jg.exports=Zc;var G=Jg.exports,cv={exports:{}},ii={},uv={exports:{}},dv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,K){var ee=U.length;U.push(K);e:for(;0<ee;){var Me=ee-1>>>1,Ue=U[Me];if(0<r(Ue,K))U[Me]=K,U[ee]=Ue,ee=Me;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var K=U[0],ee=U.pop();if(ee!==K){U[0]=ee;e:for(var Me=0,Ue=U.length,st=Ue>>>1;Me<st;){var Pe=2*(Me+1)-1,ce=U[Pe],B=Pe+1,fe=U[B];if(0>r(ce,ee))B<Ue&&0>r(fe,ce)?(U[Me]=fe,U[B]=ee,Me=B):(U[Me]=ce,U[Pe]=ee,Me=Pe);else if(B<Ue&&0>r(fe,ee))U[Me]=fe,U[B]=ee,Me=B;else break e}}return K}function r(U,K){var ee=U.sortIndex-K.sortIndex;return ee!==0?ee:U.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,p=!1,x=!1,w=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=U)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function M(U){if(w=!1,v(U),!x)if(n(l)!==null)x=!0,V(C);else{var K=n(c);K!==null&&j(M,K.startTime-U)}}function C(U,K){x=!1,w&&(w=!1,u(N),N=-1),p=!0;var ee=h;try{for(v(K),f=n(l);f!==null&&(!(f.expirationTime>K)||U&&!I());){var Me=f.callback;if(typeof Me=="function"){f.callback=null,h=f.priorityLevel;var Ue=Me(f.expirationTime<=K);K=t.unstable_now(),typeof Ue=="function"?f.callback=Ue:f===n(l)&&i(l),v(K)}else i(l);f=n(l)}if(f!==null)var st=!0;else{var Pe=n(c);Pe!==null&&j(M,Pe.startTime-K),st=!1}return st}finally{f=null,h=ee,p=!1}}var R=!1,L=null,N=-1,E=5,S=-1;function I(){return!(t.unstable_now()-S<E)}function H(){if(L!==null){var U=t.unstable_now();S=U;var K=!0;try{K=L(!0,U)}finally{K?$():(R=!1,L=null)}}else R=!1}var $;if(typeof m=="function")$=function(){m(H)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,oe=ie.port2;ie.port1.onmessage=H,$=function(){oe.postMessage(null)}}else $=function(){g(H,0)};function V(U){L=U,R||(R=!0,$())}function j(U,K){N=g(function(){U(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,V(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var ee=h;h=K;try{return U()}finally{h=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,K){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ee=h;h=U;try{return K()}finally{h=ee}},t.unstable_scheduleCallback=function(U,K,ee){var Me=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Me+ee:Me):ee=Me,U){case 1:var Ue=-1;break;case 2:Ue=250;break;case 5:Ue=1073741823;break;case 4:Ue=1e4;break;default:Ue=5e3}return Ue=ee+Ue,U={id:d++,callback:K,priorityLevel:U,startTime:ee,expirationTime:Ue,sortIndex:-1},ee>Me?(U.sortIndex=ee,e(c,U),n(l)===null&&U===n(c)&&(w?(u(N),N=-1):w=!0,j(M,ee-Me))):(U.sortIndex=Ue,e(l,U),x||p||(x=!0,V(C))),U},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(U){var K=h;return function(){var ee=h;h=K;try{return U.apply(this,arguments)}finally{h=ee}}}})(dv);uv.exports=dv;var x1=uv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y1=_t,ni=x1;function xe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fv=new Set,Na={};function As(t,e){To(t,e),To(t+"Capture",e)}function To(t,e){for(Na[t]=e,t=0;t<e.length;t++)fv.add(e[t])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qd=Object.prototype.hasOwnProperty,M1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fm={},Om={};function S1(t){return qd.call(Om,t)?!0:qd.call(Fm,t)?!1:M1.test(t)?Om[t]=!0:(Fm[t]=!0,!1)}function w1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E1(t,e,n,i){if(e===null||typeof e>"u"||w1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function kn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yn[t]=new kn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yn[e]=new kn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yn[t]=new kn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yn[t]=new kn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yn[t]=new kn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yn[t]=new kn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yn[t]=new kn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yn[t]=new kn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yn[t]=new kn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uh=/[\-:]([a-z])/g;function Fh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uh,Fh);yn[e]=new kn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uh,Fh);yn[e]=new kn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uh,Fh);yn[e]=new kn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yn[t]=new kn(t,1,!1,t.toLowerCase(),null,!1,!1)});yn.xlinkHref=new kn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yn[t]=new kn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Oh(t,e,n,i){var r=yn.hasOwnProperty(e)?yn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(E1(e,n,r,i)&&(n=null),i||r===null?S1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var lr=y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_l=Symbol.for("react.element"),to=Symbol.for("react.portal"),no=Symbol.for("react.fragment"),kh=Symbol.for("react.strict_mode"),$d=Symbol.for("react.profiler"),hv=Symbol.for("react.provider"),pv=Symbol.for("react.context"),zh=Symbol.for("react.forward_ref"),Kd=Symbol.for("react.suspense"),Zd=Symbol.for("react.suspense_list"),Bh=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),mv=Symbol.for("react.offscreen"),km=Symbol.iterator;function Qo(t){return t===null||typeof t!="object"?null:(t=km&&t[km]||t["@@iterator"],typeof t=="function"?t:null)}var qt=Object.assign,Fu;function va(t){if(Fu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fu=e&&e[1]||""}return`
`+Fu+t}var Ou=!1;function ku(t,e){if(!t||Ou)return"";Ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?va(t):""}function T1(t){switch(t.tag){case 5:return va(t.type);case 16:return va("Lazy");case 13:return va("Suspense");case 19:return va("SuspenseList");case 0:case 2:case 15:return t=ku(t.type,!1),t;case 11:return t=ku(t.type.render,!1),t;case 1:return t=ku(t.type,!0),t;default:return""}}function Jd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case no:return"Fragment";case to:return"Portal";case $d:return"Profiler";case kh:return"StrictMode";case Kd:return"Suspense";case Zd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pv:return(t.displayName||"Context")+".Consumer";case hv:return(t._context.displayName||"Context")+".Provider";case zh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bh:return e=t.displayName||null,e!==null?e:Jd(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return Jd(t(e))}catch{}}return null}function A1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jd(e);case 8:return e===kh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b1(t){var e=gv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xl(t){t._valueTracker||(t._valueTracker=b1(t))}function vv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=gv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qd(t,e){var n=e.checked;return qt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _v(t,e){e=e.checked,e!=null&&Oh(t,"checked",e,!1)}function ef(t,e){_v(t,e);var n=Hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&tf(t,e.type,Hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tf(t,e,n){(e!=="number"||Sc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _a=Array.isArray;function mo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(xe(91));return qt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(xe(92));if(_a(n)){if(1<n.length)throw Error(xe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hr(n)}}function xv(t,e){var n=Hr(e.value),i=Hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var yl,Mv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(yl=yl||document.createElement("div"),yl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C1=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(t){C1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Sa[e]=Sa[t]})});function Sv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Sa.hasOwnProperty(t)&&Sa[t]?(""+e).trim():e+"px"}function wv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Sv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var R1=qt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sf(t,e){if(e){if(R1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(xe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(xe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(xe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(xe(62))}}function of(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var af=null;function Hh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lf=null,go=null,vo=null;function Gm(t){if(t=sl(t)){if(typeof lf!="function")throw Error(xe(280));var e=t.stateNode;e&&(e=nu(e),lf(t.stateNode,t.type,e))}}function Ev(t){go?vo?vo.push(t):vo=[t]:go=t}function Tv(){if(go){var t=go,e=vo;if(vo=go=null,Gm(t),e)for(t=0;t<e.length;t++)Gm(e[t])}}function Av(t,e){return t(e)}function bv(){}var zu=!1;function Cv(t,e,n){if(zu)return t(e,n);zu=!0;try{return Av(t,e,n)}finally{zu=!1,(go!==null||vo!==null)&&(bv(),Tv())}}function Ua(t,e){var n=t.stateNode;if(n===null)return null;var i=nu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(xe(231,e,typeof n));return n}var cf=!1;if(rr)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){cf=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{cf=!1}function P1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var wa=!1,wc=null,Ec=!1,uf=null,L1={onError:function(t){wa=!0,wc=t}};function D1(t,e,n,i,r,s,o,a,l){wa=!1,wc=null,P1.apply(L1,arguments)}function N1(t,e,n,i,r,s,o,a,l){if(D1.apply(this,arguments),wa){if(wa){var c=wc;wa=!1,wc=null}else throw Error(xe(198));Ec||(Ec=!0,uf=c)}}function bs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wm(t){if(bs(t)!==t)throw Error(xe(188))}function I1(t){var e=t.alternate;if(!e){if(e=bs(t),e===null)throw Error(xe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wm(r),t;if(s===i)return Wm(r),e;s=s.sibling}throw Error(xe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(xe(189))}}if(n.alternate!==i)throw Error(xe(190))}if(n.tag!==3)throw Error(xe(188));return n.stateNode.current===n?t:e}function Pv(t){return t=I1(t),t!==null?Lv(t):null}function Lv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lv(t);if(e!==null)return e;t=t.sibling}return null}var Dv=ni.unstable_scheduleCallback,Xm=ni.unstable_cancelCallback,U1=ni.unstable_shouldYield,F1=ni.unstable_requestPaint,en=ni.unstable_now,O1=ni.unstable_getCurrentPriorityLevel,Vh=ni.unstable_ImmediatePriority,Nv=ni.unstable_UserBlockingPriority,Tc=ni.unstable_NormalPriority,k1=ni.unstable_LowPriority,Iv=ni.unstable_IdlePriority,Jc=null,ki=null;function z1(t){if(ki&&typeof ki.onCommitFiberRoot=="function")try{ki.onCommitFiberRoot(Jc,t,void 0,(t.current.flags&128)===128)}catch{}}var bi=Math.clz32?Math.clz32:V1,B1=Math.log,H1=Math.LN2;function V1(t){return t>>>=0,t===0?32:31-(B1(t)/H1|0)|0}var Ml=64,Sl=4194304;function xa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ac(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=xa(a):(s&=o,s!==0&&(i=xa(s)))}else o=n&~r,o!==0?i=xa(o):s!==0&&(i=xa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-bi(e),r=1<<n,i|=t[n],e&=~r;return i}function G1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=G1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Uv(){var t=Ml;return Ml<<=1,!(Ml&4194240)&&(Ml=64),t}function Bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function il(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bi(e),t[e]=n}function X1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-bi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Gh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-bi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Pt=0;function Fv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ov,Wh,kv,zv,Bv,ff=!1,wl=[],Lr=null,Dr=null,Nr=null,Fa=new Map,Oa=new Map,Tr=[],j1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jm(t,e){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":Fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(e.pointerId)}}function ta(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=sl(e),e!==null&&Wh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Y1(t,e,n,i,r){switch(e){case"focusin":return Lr=ta(Lr,t,e,n,i,r),!0;case"dragenter":return Dr=ta(Dr,t,e,n,i,r),!0;case"mouseover":return Nr=ta(Nr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Fa.set(s,ta(Fa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Oa.set(s,ta(Oa.get(s)||null,t,e,n,i,r)),!0}return!1}function Hv(t){var e=fs(t.target);if(e!==null){var n=bs(e);if(n!==null){if(e=n.tag,e===13){if(e=Rv(n),e!==null){t.blockedOn=e,Bv(t.priority,function(){kv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ac(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);af=i,n.target.dispatchEvent(i),af=null}else return e=sl(n),e!==null&&Wh(e),t.blockedOn=n,!1;e.shift()}return!0}function Ym(t,e,n){ac(t)&&n.delete(e)}function q1(){ff=!1,Lr!==null&&ac(Lr)&&(Lr=null),Dr!==null&&ac(Dr)&&(Dr=null),Nr!==null&&ac(Nr)&&(Nr=null),Fa.forEach(Ym),Oa.forEach(Ym)}function na(t,e){t.blockedOn===e&&(t.blockedOn=null,ff||(ff=!0,ni.unstable_scheduleCallback(ni.unstable_NormalPriority,q1)))}function ka(t){function e(r){return na(r,t)}if(0<wl.length){na(wl[0],t);for(var n=1;n<wl.length;n++){var i=wl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Lr!==null&&na(Lr,t),Dr!==null&&na(Dr,t),Nr!==null&&na(Nr,t),Fa.forEach(e),Oa.forEach(e),n=0;n<Tr.length;n++)i=Tr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)Hv(n),n.blockedOn===null&&Tr.shift()}var _o=lr.ReactCurrentBatchConfig,bc=!0;function $1(t,e,n,i){var r=Pt,s=_o.transition;_o.transition=null;try{Pt=1,Xh(t,e,n,i)}finally{Pt=r,_o.transition=s}}function K1(t,e,n,i){var r=Pt,s=_o.transition;_o.transition=null;try{Pt=4,Xh(t,e,n,i)}finally{Pt=r,_o.transition=s}}function Xh(t,e,n,i){if(bc){var r=hf(t,e,n,i);if(r===null)Ku(t,e,i,Cc,n),jm(t,i);else if(Y1(r,t,e,n,i))i.stopPropagation();else if(jm(t,i),e&4&&-1<j1.indexOf(t)){for(;r!==null;){var s=sl(r);if(s!==null&&Ov(s),s=hf(t,e,n,i),s===null&&Ku(t,e,i,Cc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ku(t,e,i,null,n)}}var Cc=null;function hf(t,e,n,i){if(Cc=null,t=Hh(i),t=fs(t),t!==null)if(e=bs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cc=t,null}function Vv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O1()){case Vh:return 1;case Nv:return 4;case Tc:case k1:return 16;case Iv:return 536870912;default:return 16}default:return 16}}var Cr=null,jh=null,lc=null;function Gv(){if(lc)return lc;var t,e=jh,n=e.length,i,r="value"in Cr?Cr.value:Cr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return lc=r.slice(t,1<i?1-i:void 0)}function cc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function qm(){return!1}function ri(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?El:qm,this.isPropagationStopped=qm,this}return qt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yh=ri(ko),rl=qt({},ko,{view:0,detail:0}),Z1=ri(rl),Hu,Vu,ia,Qc=qt({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ia&&(ia&&t.type==="mousemove"?(Hu=t.screenX-ia.screenX,Vu=t.screenY-ia.screenY):Vu=Hu=0,ia=t),Hu)},movementY:function(t){return"movementY"in t?t.movementY:Vu}}),$m=ri(Qc),J1=qt({},Qc,{dataTransfer:0}),Q1=ri(J1),ey=qt({},rl,{relatedTarget:0}),Gu=ri(ey),ty=qt({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),ny=ri(ty),iy=qt({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ry=ri(iy),sy=qt({},ko,{data:0}),Km=ri(sy),oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ly[t])?!!e[t]:!1}function qh(){return cy}var uy=qt({},rl,{key:function(t){if(t.key){var e=oy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ay[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qh,charCode:function(t){return t.type==="keypress"?cc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dy=ri(uy),fy=qt({},Qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=ri(fy),hy=qt({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qh}),py=ri(hy),my=qt({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),gy=ri(my),vy=qt({},Qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_y=ri(vy),xy=[9,13,27,32],$h=rr&&"CompositionEvent"in window,Ea=null;rr&&"documentMode"in document&&(Ea=document.documentMode);var yy=rr&&"TextEvent"in window&&!Ea,Wv=rr&&(!$h||Ea&&8<Ea&&11>=Ea),Jm=" ",Qm=!1;function Xv(t,e){switch(t){case"keyup":return xy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var io=!1;function My(t,e){switch(t){case"compositionend":return jv(e);case"keypress":return e.which!==32?null:(Qm=!0,Jm);case"textInput":return t=e.data,t===Jm&&Qm?null:t;default:return null}}function Sy(t,e){if(io)return t==="compositionend"||!$h&&Xv(t,e)?(t=Gv(),lc=jh=Cr=null,io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wv&&e.locale!=="ko"?null:e.data;default:return null}}var wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wy[t.type]:e==="textarea"}function Yv(t,e,n,i){Ev(i),e=Rc(e,"onChange"),0<e.length&&(n=new Yh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ta=null,za=null;function Ey(t){r_(t,0)}function eu(t){var e=oo(t);if(vv(e))return t}function Ty(t,e){if(t==="change")return e}var qv=!1;if(rr){var Wu;if(rr){var Xu="oninput"in document;if(!Xu){var t0=document.createElement("div");t0.setAttribute("oninput","return;"),Xu=typeof t0.oninput=="function"}Wu=Xu}else Wu=!1;qv=Wu&&(!document.documentMode||9<document.documentMode)}function n0(){Ta&&(Ta.detachEvent("onpropertychange",$v),za=Ta=null)}function $v(t){if(t.propertyName==="value"&&eu(za)){var e=[];Yv(e,za,t,Hh(t)),Cv(Ey,e)}}function Ay(t,e,n){t==="focusin"?(n0(),Ta=e,za=n,Ta.attachEvent("onpropertychange",$v)):t==="focusout"&&n0()}function by(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(za)}function Cy(t,e){if(t==="click")return eu(e)}function Ry(t,e){if(t==="input"||t==="change")return eu(e)}function Py(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pi=typeof Object.is=="function"?Object.is:Py;function Ba(t,e){if(Pi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!qd.call(e,r)||!Pi(t[r],e[r]))return!1}return!0}function i0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function r0(t,e){var n=i0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=i0(n)}}function Kv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zv(){for(var t=window,e=Sc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sc(t.document)}return e}function Kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ly(t){var e=Zv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Kv(n.ownerDocument.documentElement,n)){if(i!==null&&Kh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=r0(n,s);var o=r0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Dy=rr&&"documentMode"in document&&11>=document.documentMode,ro=null,pf=null,Aa=null,mf=!1;function s0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mf||ro==null||ro!==Sc(i)||(i=ro,"selectionStart"in i&&Kh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Aa&&Ba(Aa,i)||(Aa=i,i=Rc(pf,"onSelect"),0<i.length&&(e=new Yh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ro)))}function Tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var so={animationend:Tl("Animation","AnimationEnd"),animationiteration:Tl("Animation","AnimationIteration"),animationstart:Tl("Animation","AnimationStart"),transitionend:Tl("Transition","TransitionEnd")},ju={},Jv={};rr&&(Jv=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function tu(t){if(ju[t])return ju[t];if(!so[t])return t;var e=so[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jv)return ju[t]=e[n];return t}var Qv=tu("animationend"),e_=tu("animationiteration"),t_=tu("animationstart"),n_=tu("transitionend"),i_=new Map,o0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(t,e){i_.set(t,e),As(e,[t])}for(var Yu=0;Yu<o0.length;Yu++){var qu=o0[Yu],Ny=qu.toLowerCase(),Iy=qu[0].toUpperCase()+qu.slice(1);Xr(Ny,"on"+Iy)}Xr(Qv,"onAnimationEnd");Xr(e_,"onAnimationIteration");Xr(t_,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(n_,"onTransitionEnd");To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);As("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));As("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));As("onBeforeInput",["compositionend","keypress","textInput","paste"]);As("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));As("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));As("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function a0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,N1(i,e,void 0,t),t.currentTarget=null}function r_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;a0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;a0(r,a,c),s=l}}}if(Ec)throw t=uf,Ec=!1,uf=null,t}function zt(t,e){var n=e[yf];n===void 0&&(n=e[yf]=new Set);var i=t+"__bubble";n.has(i)||(s_(e,t,2,!1),n.add(i))}function $u(t,e,n){var i=0;e&&(i|=4),s_(n,t,i,e)}var Al="_reactListening"+Math.random().toString(36).slice(2);function Ha(t){if(!t[Al]){t[Al]=!0,fv.forEach(function(n){n!=="selectionchange"&&(Uy.has(n)||$u(n,!1,t),$u(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Al]||(e[Al]=!0,$u("selectionchange",!1,e))}}function s_(t,e,n,i){switch(Vv(e)){case 1:var r=$1;break;case 4:r=K1;break;default:r=Xh}n=r.bind(null,e,n,t),r=void 0,!cf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ku(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=fs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Cv(function(){var c=s,d=Hh(n),f=[];e:{var h=i_.get(t);if(h!==void 0){var p=Yh,x=t;switch(t){case"keypress":if(cc(n)===0)break e;case"keydown":case"keyup":p=dy;break;case"focusin":x="focus",p=Gu;break;case"focusout":x="blur",p=Gu;break;case"beforeblur":case"afterblur":p=Gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Q1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=py;break;case Qv:case e_:case t_:p=ny;break;case n_:p=gy;break;case"scroll":p=Z1;break;case"wheel":p=_y;break;case"copy":case"cut":case"paste":p=ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zm}var w=(e&4)!==0,g=!w&&t==="scroll",u=w?h!==null?h+"Capture":null:h;w=[];for(var m=c,v;m!==null;){v=m;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=Ua(m,u),M!=null&&w.push(Va(m,M,v)))),g)break;m=m.return}0<w.length&&(h=new p(h,x,null,n,d),f.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==af&&(x=n.relatedTarget||n.fromElement)&&(fs(x)||x[sr]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?fs(x):null,x!==null&&(g=bs(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(w=$m,M="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(w=Zm,M="onPointerLeave",u="onPointerEnter",m="pointer"),g=p==null?h:oo(p),v=x==null?h:oo(x),h=new w(M,m+"leave",p,n,d),h.target=g,h.relatedTarget=v,M=null,fs(d)===c&&(w=new w(u,m+"enter",x,n,d),w.target=v,w.relatedTarget=g,M=w),g=M,p&&x)t:{for(w=p,u=x,m=0,v=w;v;v=zs(v))m++;for(v=0,M=u;M;M=zs(M))v++;for(;0<m-v;)w=zs(w),m--;for(;0<v-m;)u=zs(u),v--;for(;m--;){if(w===u||u!==null&&w===u.alternate)break t;w=zs(w),u=zs(u)}w=null}else w=null;p!==null&&l0(f,h,p,w,!1),x!==null&&g!==null&&l0(f,g,x,w,!0)}}e:{if(h=c?oo(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=Ty;else if(e0(h))if(qv)C=Ry;else{C=by;var R=Ay}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Cy);if(C&&(C=C(t,c))){Yv(f,C,n,d);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&tf(h,"number",h.value)}switch(R=c?oo(c):window,t){case"focusin":(e0(R)||R.contentEditable==="true")&&(ro=R,pf=c,Aa=null);break;case"focusout":Aa=pf=ro=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,s0(f,n,d);break;case"selectionchange":if(Dy)break;case"keydown":case"keyup":s0(f,n,d)}var L;if($h)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else io?Xv(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Wv&&n.locale!=="ko"&&(io||N!=="onCompositionStart"?N==="onCompositionEnd"&&io&&(L=Gv()):(Cr=d,jh="value"in Cr?Cr.value:Cr.textContent,io=!0)),R=Rc(c,N),0<R.length&&(N=new Km(N,t,null,n,d),f.push({event:N,listeners:R}),L?N.data=L:(L=jv(n),L!==null&&(N.data=L)))),(L=yy?My(t,n):Sy(t,n))&&(c=Rc(c,"onBeforeInput"),0<c.length&&(d=new Km("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=L))}r_(f,e)})}function Va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ua(t,n),s!=null&&i.unshift(Va(t,s,r)),s=Ua(t,e),s!=null&&i.push(Va(t,s,r))),t=t.return}return i}function zs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function l0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ua(n,s),l!=null&&o.unshift(Va(n,l,a))):r||(l=Ua(n,s),l!=null&&o.push(Va(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Fy=/\r\n?/g,Oy=/\u0000|\uFFFD/g;function c0(t){return(typeof t=="string"?t:""+t).replace(Fy,`
`).replace(Oy,"")}function bl(t,e,n){if(e=c0(e),c0(t)!==e&&n)throw Error(xe(425))}function Pc(){}var gf=null,vf=null;function _f(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xf=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,u0=typeof Promise=="function"?Promise:void 0,zy=typeof queueMicrotask=="function"?queueMicrotask:typeof u0<"u"?function(t){return u0.resolve(null).then(t).catch(By)}:xf;function By(t){setTimeout(function(){throw t})}function Zu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ka(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ka(e)}function Ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function d0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zo=Math.random().toString(36).slice(2),Ui="__reactFiber$"+zo,Ga="__reactProps$"+zo,sr="__reactContainer$"+zo,yf="__reactEvents$"+zo,Hy="__reactListeners$"+zo,Vy="__reactHandles$"+zo;function fs(t){var e=t[Ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sr]||n[Ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=d0(t);t!==null;){if(n=t[Ui])return n;t=d0(t)}return e}t=n,n=t.parentNode}return null}function sl(t){return t=t[Ui]||t[sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function oo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(xe(33))}function nu(t){return t[Ga]||null}var Mf=[],ao=-1;function jr(t){return{current:t}}function Ht(t){0>ao||(t.current=Mf[ao],Mf[ao]=null,ao--)}function Ot(t,e){ao++,Mf[ao]=t.current,t.current=e}var Vr={},Cn=jr(Vr),jn=jr(!1),xs=Vr;function Ao(t,e){var n=t.type.contextTypes;if(!n)return Vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Yn(t){return t=t.childContextTypes,t!=null}function Lc(){Ht(jn),Ht(Cn)}function f0(t,e,n){if(Cn.current!==Vr)throw Error(xe(168));Ot(Cn,e),Ot(jn,n)}function o_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(xe(108,A1(t)||"Unknown",r));return qt({},n,i)}function Dc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,xs=Cn.current,Ot(Cn,t),Ot(jn,jn.current),!0}function h0(t,e,n){var i=t.stateNode;if(!i)throw Error(xe(169));n?(t=o_(t,e,xs),i.__reactInternalMemoizedMergedChildContext=t,Ht(jn),Ht(Cn),Ot(Cn,t)):Ht(jn),Ot(jn,n)}var Ji=null,iu=!1,Ju=!1;function a_(t){Ji===null?Ji=[t]:Ji.push(t)}function Gy(t){iu=!0,a_(t)}function Yr(){if(!Ju&&Ji!==null){Ju=!0;var t=0,e=Pt;try{var n=Ji;for(Pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ji=null,iu=!1}catch(r){throw Ji!==null&&(Ji=Ji.slice(t+1)),Dv(Vh,Yr),r}finally{Pt=e,Ju=!1}}return null}var lo=[],co=0,Nc=null,Ic=0,li=[],ci=0,ys=null,Qi=1,er="";function os(t,e){lo[co++]=Ic,lo[co++]=Nc,Nc=t,Ic=e}function l_(t,e,n){li[ci++]=Qi,li[ci++]=er,li[ci++]=ys,ys=t;var i=Qi;t=er;var r=32-bi(i)-1;i&=~(1<<r),n+=1;var s=32-bi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Qi=1<<32-bi(e)+r|n<<r|i,er=s+t}else Qi=1<<s|n<<r|i,er=t}function Zh(t){t.return!==null&&(os(t,1),l_(t,1,0))}function Jh(t){for(;t===Nc;)Nc=lo[--co],lo[co]=null,Ic=lo[--co],lo[co]=null;for(;t===ys;)ys=li[--ci],li[ci]=null,er=li[--ci],li[ci]=null,Qi=li[--ci],li[ci]=null}var ti=null,ei=null,Wt=!1,wi=null;function c_(t,e){var n=ui(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function p0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ti=t,ei=Ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ti=t,ei=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ys!==null?{id:Qi,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ui(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ti=t,ei=null,!0):!1;default:return!1}}function Sf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wf(t){if(Wt){var e=ei;if(e){var n=e;if(!p0(t,e)){if(Sf(t))throw Error(xe(418));e=Ir(n.nextSibling);var i=ti;e&&p0(t,e)?c_(i,n):(t.flags=t.flags&-4097|2,Wt=!1,ti=t)}}else{if(Sf(t))throw Error(xe(418));t.flags=t.flags&-4097|2,Wt=!1,ti=t}}}function m0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ti=t}function Cl(t){if(t!==ti)return!1;if(!Wt)return m0(t),Wt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_f(t.type,t.memoizedProps)),e&&(e=ei)){if(Sf(t))throw u_(),Error(xe(418));for(;e;)c_(t,e),e=Ir(e.nextSibling)}if(m0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(xe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ei=Ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ei=null}}else ei=ti?Ir(t.stateNode.nextSibling):null;return!0}function u_(){for(var t=ei;t;)t=Ir(t.nextSibling)}function bo(){ei=ti=null,Wt=!1}function Qh(t){wi===null?wi=[t]:wi.push(t)}var Wy=lr.ReactCurrentBatchConfig;function ra(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(xe(309));var i=n.stateNode}if(!i)throw Error(xe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(xe(284));if(!n._owner)throw Error(xe(290,t))}return t}function Rl(t,e){throw t=Object.prototype.toString.call(e),Error(xe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function g0(t){var e=t._init;return e(t._payload)}function d_(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=kr(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,v,M){return m===null||m.tag!==6?(m=sd(v,u.mode,M),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,M){var C=v.type;return C===no?d(u,m,v.props.children,M,v.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wr&&g0(C)===m.type)?(M=r(m,v.props),M.ref=ra(u,m,v),M.return=u,M):(M=gc(v.type,v.key,v.props,null,u.mode,M),M.ref=ra(u,m,v),M.return=u,M)}function c(u,m,v,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=od(v,u.mode,M),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function d(u,m,v,M,C){return m===null||m.tag!==7?(m=_s(v,u.mode,M,C),m.return=u,m):(m=r(m,v),m.return=u,m)}function f(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=sd(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _l:return v=gc(m.type,m.key,m.props,null,u.mode,v),v.ref=ra(u,null,m),v.return=u,v;case to:return m=od(m,u.mode,v),m.return=u,m;case wr:var M=m._init;return f(u,M(m._payload),v)}if(_a(m)||Qo(m))return m=_s(m,u.mode,v,null),m.return=u,m;Rl(u,m)}return null}function h(u,m,v,M){var C=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(u,m,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _l:return v.key===C?l(u,m,v,M):null;case to:return v.key===C?c(u,m,v,M):null;case wr:return C=v._init,h(u,m,C(v._payload),M)}if(_a(v)||Qo(v))return C!==null?null:d(u,m,v,M,null);Rl(u,v)}return null}function p(u,m,v,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,a(m,u,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case _l:return u=u.get(M.key===null?v:M.key)||null,l(m,u,M,C);case to:return u=u.get(M.key===null?v:M.key)||null,c(m,u,M,C);case wr:var R=M._init;return p(u,m,v,R(M._payload),C)}if(_a(M)||Qo(M))return u=u.get(v)||null,d(m,u,M,C,null);Rl(m,M)}return null}function x(u,m,v,M){for(var C=null,R=null,L=m,N=m=0,E=null;L!==null&&N<v.length;N++){L.index>N?(E=L,L=null):E=L.sibling;var S=h(u,L,v[N],M);if(S===null){L===null&&(L=E);break}t&&L&&S.alternate===null&&e(u,L),m=s(S,m,N),R===null?C=S:R.sibling=S,R=S,L=E}if(N===v.length)return n(u,L),Wt&&os(u,N),C;if(L===null){for(;N<v.length;N++)L=f(u,v[N],M),L!==null&&(m=s(L,m,N),R===null?C=L:R.sibling=L,R=L);return Wt&&os(u,N),C}for(L=i(u,L);N<v.length;N++)E=p(L,u,N,v[N],M),E!==null&&(t&&E.alternate!==null&&L.delete(E.key===null?N:E.key),m=s(E,m,N),R===null?C=E:R.sibling=E,R=E);return t&&L.forEach(function(I){return e(u,I)}),Wt&&os(u,N),C}function w(u,m,v,M){var C=Qo(v);if(typeof C!="function")throw Error(xe(150));if(v=C.call(v),v==null)throw Error(xe(151));for(var R=C=null,L=m,N=m=0,E=null,S=v.next();L!==null&&!S.done;N++,S=v.next()){L.index>N?(E=L,L=null):E=L.sibling;var I=h(u,L,S.value,M);if(I===null){L===null&&(L=E);break}t&&L&&I.alternate===null&&e(u,L),m=s(I,m,N),R===null?C=I:R.sibling=I,R=I,L=E}if(S.done)return n(u,L),Wt&&os(u,N),C;if(L===null){for(;!S.done;N++,S=v.next())S=f(u,S.value,M),S!==null&&(m=s(S,m,N),R===null?C=S:R.sibling=S,R=S);return Wt&&os(u,N),C}for(L=i(u,L);!S.done;N++,S=v.next())S=p(L,u,N,S.value,M),S!==null&&(t&&S.alternate!==null&&L.delete(S.key===null?N:S.key),m=s(S,m,N),R===null?C=S:R.sibling=S,R=S);return t&&L.forEach(function(H){return e(u,H)}),Wt&&os(u,N),C}function g(u,m,v,M){if(typeof v=="object"&&v!==null&&v.type===no&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case _l:e:{for(var C=v.key,R=m;R!==null;){if(R.key===C){if(C=v.type,C===no){if(R.tag===7){n(u,R.sibling),m=r(R,v.props.children),m.return=u,u=m;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wr&&g0(C)===R.type){n(u,R.sibling),m=r(R,v.props),m.ref=ra(u,R,v),m.return=u,u=m;break e}n(u,R);break}else e(u,R);R=R.sibling}v.type===no?(m=_s(v.props.children,u.mode,M,v.key),m.return=u,u=m):(M=gc(v.type,v.key,v.props,null,u.mode,M),M.ref=ra(u,m,v),M.return=u,u=M)}return o(u);case to:e:{for(R=v.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=od(v,u.mode,M),m.return=u,u=m}return o(u);case wr:return R=v._init,g(u,m,R(v._payload),M)}if(_a(v))return x(u,m,v,M);if(Qo(v))return w(u,m,v,M);Rl(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=sd(v,u.mode,M),m.return=u,u=m),o(u)):n(u,m)}return g}var Co=d_(!0),f_=d_(!1),Uc=jr(null),Fc=null,uo=null,ep=null;function tp(){ep=uo=Fc=null}function np(t){var e=Uc.current;Ht(Uc),t._currentValue=e}function Ef(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function xo(t,e){Fc=t,ep=uo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xn=!0),t.firstContext=null)}function fi(t){var e=t._currentValue;if(ep!==t)if(t={context:t,memoizedValue:e,next:null},uo===null){if(Fc===null)throw Error(xe(308));uo=t,Fc.dependencies={lanes:0,firstContext:t}}else uo=uo.next=t;return e}var hs=null;function ip(t){hs===null?hs=[t]:hs.push(t)}function h_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ip(e)):(n.next=r.next,r.next=n),e.interleaved=n,or(t,i)}function or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Er=!1;function rp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,St&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,or(t,n)}return r=i.interleaved,r===null?(e.next=e,ip(i)):(e.next=r.next,r.next=e),i.interleaved=e,or(t,n)}function uc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gh(t,n)}}function v0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Oc(t,e,n,i){var r=t.updateQueue;Er=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,w=a;switch(h=e,p=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){f=x.call(p,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(p,f,h):x,h==null)break e;f=qt({},f,h);break e;case 2:Er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ss|=o,t.lanes=o,t.memoizedState=f}}function _0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(xe(191,r));r.call(i)}}}var ol={},zi=jr(ol),Wa=jr(ol),Xa=jr(ol);function ps(t){if(t===ol)throw Error(xe(174));return t}function sp(t,e){switch(Ot(Xa,e),Ot(Wa,t),Ot(zi,ol),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rf(e,t)}Ht(zi),Ot(zi,e)}function Ro(){Ht(zi),Ht(Wa),Ht(Xa)}function m_(t){ps(Xa.current);var e=ps(zi.current),n=rf(e,t.type);e!==n&&(Ot(Wa,t),Ot(zi,n))}function op(t){Wa.current===t&&(Ht(zi),Ht(Wa))}var jt=jr(0);function kc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qu=[];function ap(){for(var t=0;t<Qu.length;t++)Qu[t]._workInProgressVersionPrimary=null;Qu.length=0}var dc=lr.ReactCurrentDispatcher,ed=lr.ReactCurrentBatchConfig,Ms=0,Yt=null,an=null,pn=null,zc=!1,ba=!1,ja=0,Xy=0;function Sn(){throw Error(xe(321))}function lp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pi(t[n],e[n]))return!1;return!0}function cp(t,e,n,i,r,s){if(Ms=s,Yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dc.current=t===null||t.memoizedState===null?$y:Ky,t=n(i,r),ba){s=0;do{if(ba=!1,ja=0,25<=s)throw Error(xe(301));s+=1,pn=an=null,e.updateQueue=null,dc.current=Zy,t=n(i,r)}while(ba)}if(dc.current=Bc,e=an!==null&&an.next!==null,Ms=0,pn=an=Yt=null,zc=!1,e)throw Error(xe(300));return t}function up(){var t=ja!==0;return ja=0,t}function Ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Yt.memoizedState=pn=t:pn=pn.next=t,pn}function hi(){if(an===null){var t=Yt.alternate;t=t!==null?t.memoizedState:null}else t=an.next;var e=pn===null?Yt.memoizedState:pn.next;if(e!==null)pn=e,an=t;else{if(t===null)throw Error(xe(310));an=t,t={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},pn===null?Yt.memoizedState=pn=t:pn=pn.next=t}return pn}function Ya(t,e){return typeof e=="function"?e(t):e}function td(t){var e=hi(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=an,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ms&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Yt.lanes|=d,Ss|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Pi(i,e.memoizedState)||(Xn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Yt.lanes|=s,Ss|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nd(t){var e=hi(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Pi(s,e.memoizedState)||(Xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function g_(){}function v_(t,e){var n=Yt,i=hi(),r=e(),s=!Pi(i.memoizedState,r);if(s&&(i.memoizedState=r,Xn=!0),i=i.queue,dp(y_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||pn!==null&&pn.memoizedState.tag&1){if(n.flags|=2048,qa(9,x_.bind(null,n,i,r,e),void 0,null),mn===null)throw Error(xe(349));Ms&30||__(n,e,r)}return r}function __(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Yt.updateQueue,e===null?(e={lastEffect:null,stores:null},Yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function x_(t,e,n,i){e.value=n,e.getSnapshot=i,M_(e)&&S_(t)}function y_(t,e,n){return n(function(){M_(e)&&S_(t)})}function M_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pi(t,n)}catch{return!0}}function S_(t){var e=or(t,1);e!==null&&Ci(e,t,1,-1)}function x0(t){var e=Ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:t},e.queue=t,t=t.dispatch=qy.bind(null,Yt,t),[e.memoizedState,t]}function qa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Yt.updateQueue,e===null?(e={lastEffect:null,stores:null},Yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function w_(){return hi().memoizedState}function fc(t,e,n,i){var r=Ni();Yt.flags|=t,r.memoizedState=qa(1|e,n,void 0,i===void 0?null:i)}function ru(t,e,n,i){var r=hi();i=i===void 0?null:i;var s=void 0;if(an!==null){var o=an.memoizedState;if(s=o.destroy,i!==null&&lp(i,o.deps)){r.memoizedState=qa(e,n,s,i);return}}Yt.flags|=t,r.memoizedState=qa(1|e,n,s,i)}function y0(t,e){return fc(8390656,8,t,e)}function dp(t,e){return ru(2048,8,t,e)}function E_(t,e){return ru(4,2,t,e)}function T_(t,e){return ru(4,4,t,e)}function A_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function b_(t,e,n){return n=n!=null?n.concat([t]):null,ru(4,4,A_.bind(null,e,t),n)}function fp(){}function C_(t,e){var n=hi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function R_(t,e){var n=hi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function P_(t,e,n){return Ms&21?(Pi(n,e)||(n=Uv(),Yt.lanes|=n,Ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xn=!0),t.memoizedState=n)}function jy(t,e){var n=Pt;Pt=n!==0&&4>n?n:4,t(!0);var i=ed.transition;ed.transition={};try{t(!1),e()}finally{Pt=n,ed.transition=i}}function L_(){return hi().memoizedState}function Yy(t,e,n){var i=Or(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},D_(t))N_(e,n);else if(n=h_(t,e,n,i),n!==null){var r=Un();Ci(n,t,i,r),I_(n,e,i)}}function qy(t,e,n){var i=Or(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(D_(t))N_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Pi(a,o)){var l=e.interleaved;l===null?(r.next=r,ip(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=h_(t,e,r,i),n!==null&&(r=Un(),Ci(n,t,i,r),I_(n,e,i))}}function D_(t){var e=t.alternate;return t===Yt||e!==null&&e===Yt}function N_(t,e){ba=zc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function I_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gh(t,n)}}var Bc={readContext:fi,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},$y={readContext:fi,useCallback:function(t,e){return Ni().memoizedState=[t,e===void 0?null:e],t},useContext:fi,useEffect:y0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fc(4194308,4,A_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fc(4194308,4,t,e)},useInsertionEffect:function(t,e){return fc(4,2,t,e)},useMemo:function(t,e){var n=Ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Yy.bind(null,Yt,t),[i.memoizedState,t]},useRef:function(t){var e=Ni();return t={current:t},e.memoizedState=t},useState:x0,useDebugValue:fp,useDeferredValue:function(t){return Ni().memoizedState=t},useTransition:function(){var t=x0(!1),e=t[0];return t=jy.bind(null,t[1]),Ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Yt,r=Ni();if(Wt){if(n===void 0)throw Error(xe(407));n=n()}else{if(n=e(),mn===null)throw Error(xe(349));Ms&30||__(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,y0(y_.bind(null,i,s,t),[t]),i.flags|=2048,qa(9,x_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ni(),e=mn.identifierPrefix;if(Wt){var n=er,i=Qi;n=(i&~(1<<32-bi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ja++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Xy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ky={readContext:fi,useCallback:C_,useContext:fi,useEffect:dp,useImperativeHandle:b_,useInsertionEffect:E_,useLayoutEffect:T_,useMemo:R_,useReducer:td,useRef:w_,useState:function(){return td(Ya)},useDebugValue:fp,useDeferredValue:function(t){var e=hi();return P_(e,an.memoizedState,t)},useTransition:function(){var t=td(Ya)[0],e=hi().memoizedState;return[t,e]},useMutableSource:g_,useSyncExternalStore:v_,useId:L_,unstable_isNewReconciler:!1},Zy={readContext:fi,useCallback:C_,useContext:fi,useEffect:dp,useImperativeHandle:b_,useInsertionEffect:E_,useLayoutEffect:T_,useMemo:R_,useReducer:nd,useRef:w_,useState:function(){return nd(Ya)},useDebugValue:fp,useDeferredValue:function(t){var e=hi();return an===null?e.memoizedState=t:P_(e,an.memoizedState,t)},useTransition:function(){var t=nd(Ya)[0],e=hi().memoizedState;return[t,e]},useMutableSource:g_,useSyncExternalStore:v_,useId:L_,unstable_isNewReconciler:!1};function Mi(t,e){if(t&&t.defaultProps){e=qt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Tf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:qt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var su={isMounted:function(t){return(t=t._reactInternals)?bs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Un(),r=Or(t),s=nr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,r),e!==null&&(Ci(e,t,r,i),uc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Un(),r=Or(t),s=nr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,r),e!==null&&(Ci(e,t,r,i),uc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Un(),i=Or(t),r=nr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ur(t,r,i),e!==null&&(Ci(e,t,i,n),uc(e,t,i))}};function M0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ba(n,i)||!Ba(r,s):!0}function U_(t,e,n){var i=!1,r=Vr,s=e.contextType;return typeof s=="object"&&s!==null?s=fi(s):(r=Yn(e)?xs:Cn.current,i=e.contextTypes,s=(i=i!=null)?Ao(t,r):Vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=su,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function S0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&su.enqueueReplaceState(e,e.state,null)}function Af(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},rp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=fi(s):(s=Yn(e)?xs:Cn.current,r.context=Ao(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&su.enqueueReplaceState(r,r.state,null),Oc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Po(t,e){try{var n="",i=e;do n+=T1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function id(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Jy=typeof WeakMap=="function"?WeakMap:Map;function F_(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Vc||(Vc=!0,Of=i),bf(t,e)},n}function O_(t,e,n){n=nr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bf(t,e),typeof i!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function w0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Jy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=fM.bind(null,t,e,n),e.then(t,t))}function E0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function T0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nr(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var Qy=lr.ReactCurrentOwner,Xn=!1;function Nn(t,e,n,i){e.child=t===null?f_(e,null,n,i):Co(e,t.child,n,i)}function A0(t,e,n,i,r){n=n.render;var s=e.ref;return xo(e,r),i=cp(t,e,n,i,s,r),n=up(),t!==null&&!Xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ar(t,e,r)):(Wt&&n&&Zh(e),e.flags|=1,Nn(t,e,i,r),e.child)}function b0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!yp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,k_(t,e,s,i,r)):(t=gc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(o,i)&&t.ref===e.ref)return ar(t,e,r)}return e.flags|=1,t=kr(s,i),t.ref=e.ref,t.return=e,e.child=t}function k_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ba(s,i)&&t.ref===e.ref)if(Xn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Xn=!0);else return e.lanes=t.lanes,ar(t,e,r)}return Cf(t,e,n,i,r)}function z_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(ho,Jn),Jn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ot(ho,Jn),Jn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ot(ho,Jn),Jn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ot(ho,Jn),Jn|=i;return Nn(t,e,r,n),e.child}function B_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cf(t,e,n,i,r){var s=Yn(n)?xs:Cn.current;return s=Ao(e,s),xo(e,r),n=cp(t,e,n,i,s,r),i=up(),t!==null&&!Xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ar(t,e,r)):(Wt&&i&&Zh(e),e.flags|=1,Nn(t,e,n,r),e.child)}function C0(t,e,n,i,r){if(Yn(n)){var s=!0;Dc(e)}else s=!1;if(xo(e,r),e.stateNode===null)hc(t,e),U_(e,n,i),Af(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=fi(c):(c=Yn(n)?xs:Cn.current,c=Ao(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&S0(e,o,i,c),Er=!1;var h=e.memoizedState;o.state=h,Oc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||jn.current||Er?(typeof d=="function"&&(Tf(e,n,d,i),l=e.memoizedState),(a=Er||M0(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,p_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Mi(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=fi(l):(l=Yn(n)?xs:Cn.current,l=Ao(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&S0(e,o,i,l),Er=!1,h=e.memoizedState,o.state=h,Oc(e,i,o,r);var x=e.memoizedState;a!==f||h!==x||jn.current||Er?(typeof p=="function"&&(Tf(e,n,p,i),x=e.memoizedState),(c=Er||M0(e,n,c,i,h,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Rf(t,e,n,i,s,r)}function Rf(t,e,n,i,r,s){B_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&h0(e,n,!1),ar(t,e,s);i=e.stateNode,Qy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Co(e,t.child,null,s),e.child=Co(e,null,a,s)):Nn(t,e,a,s),e.memoizedState=i.state,r&&h0(e,n,!0),e.child}function H_(t){var e=t.stateNode;e.pendingContext?f0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&f0(t,e.context,!1),sp(t,e.containerInfo)}function R0(t,e,n,i,r){return bo(),Qh(r),e.flags|=256,Nn(t,e,n,i),e.child}var Pf={dehydrated:null,treeContext:null,retryLane:0};function Lf(t){return{baseLanes:t,cachePool:null,transitions:null}}function V_(t,e,n){var i=e.pendingProps,r=jt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ot(jt,r&1),t===null)return wf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lu(o,i,0,null),t=_s(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lf(n),e.memoizedState=Pf,t):hp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return eM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=kr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=kr(a,s):(s=_s(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Lf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pf,i}return s=t.child,t=s.sibling,i=kr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function hp(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pl(t,e,n,i){return i!==null&&Qh(i),Co(e,t.child,null,n),t=hp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=id(Error(xe(422))),Pl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=lu({mode:"visible",children:i.children},r,0,null),s=_s(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Co(e,t.child,null,o),e.child.memoizedState=Lf(o),e.memoizedState=Pf,s);if(!(e.mode&1))return Pl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(xe(419)),i=id(s,i,void 0),Pl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Xn||a){if(i=mn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,or(t,r),Ci(i,t,r,-1))}return xp(),i=id(Error(xe(421))),Pl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=hM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ei=Ir(r.nextSibling),ti=e,Wt=!0,wi=null,t!==null&&(li[ci++]=Qi,li[ci++]=er,li[ci++]=ys,Qi=t.id,er=t.overflow,ys=e),e=hp(e,i.children),e.flags|=4096,e)}function P0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ef(t.return,e,n)}function rd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function G_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Nn(t,e,i.children,n),i=jt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&P0(t,n,e);else if(t.tag===19)P0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ot(jt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&kc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),rd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&kc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}rd(e,!0,n,null,s);break;case"together":rd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(xe(153));if(e.child!==null){for(t=e.child,n=kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tM(t,e,n){switch(e.tag){case 3:H_(e),bo();break;case 5:m_(e);break;case 1:Yn(e.type)&&Dc(e);break;case 4:sp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ot(Uc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ot(jt,jt.current&1),e.flags|=128,null):n&e.child.childLanes?V_(t,e,n):(Ot(jt,jt.current&1),t=ar(t,e,n),t!==null?t.sibling:null);Ot(jt,jt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return G_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ot(jt,jt.current),i)break;return null;case 22:case 23:return e.lanes=0,z_(t,e,n)}return ar(t,e,n)}var W_,Df,X_,j_;W_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Df=function(){};X_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ps(zi.current);var s=null;switch(n){case"input":r=Qd(t,r),i=Qd(t,i),s=[];break;case"select":r=qt({},r,{value:void 0}),i=qt({},i,{value:void 0}),s=[];break;case"textarea":r=nf(t,r),i=nf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Pc)}sf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Na.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Na.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&zt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};j_=function(t,e,n,i){n!==i&&(e.flags|=4)};function sa(t,e){if(!Wt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function wn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function nM(t,e,n){var i=e.pendingProps;switch(Jh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(e),null;case 1:return Yn(e.type)&&Lc(),wn(e),null;case 3:return i=e.stateNode,Ro(),Ht(jn),Ht(Cn),ap(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wi!==null&&(Bf(wi),wi=null))),Df(t,e),wn(e),null;case 5:op(e);var r=ps(Xa.current);if(n=e.type,t!==null&&e.stateNode!=null)X_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(xe(166));return wn(e),null}if(t=ps(zi.current),Cl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ui]=e,i[Ga]=s,t=(e.mode&1)!==0,n){case"dialog":zt("cancel",i),zt("close",i);break;case"iframe":case"object":case"embed":zt("load",i);break;case"video":case"audio":for(r=0;r<ya.length;r++)zt(ya[r],i);break;case"source":zt("error",i);break;case"img":case"image":case"link":zt("error",i),zt("load",i);break;case"details":zt("toggle",i);break;case"input":zm(i,s),zt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},zt("invalid",i);break;case"textarea":Hm(i,s),zt("invalid",i)}sf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&bl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&bl(i.textContent,a,t),r=["children",""+a]):Na.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&zt("scroll",i)}switch(n){case"input":xl(i),Bm(i,s,!0);break;case"textarea":xl(i),Vm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Pc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ui]=e,t[Ga]=i,W_(t,e,!1,!1),e.stateNode=t;e:{switch(o=of(n,i),n){case"dialog":zt("cancel",t),zt("close",t),r=i;break;case"iframe":case"object":case"embed":zt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ya.length;r++)zt(ya[r],t);r=i;break;case"source":zt("error",t),r=i;break;case"img":case"image":case"link":zt("error",t),zt("load",t),r=i;break;case"details":zt("toggle",t),r=i;break;case"input":zm(t,i),r=Qd(t,i),zt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=qt({},i,{value:void 0}),zt("invalid",t);break;case"textarea":Hm(t,i),r=nf(t,i),zt("invalid",t);break;default:r=i}sf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ia(t,l):typeof l=="number"&&Ia(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Na.hasOwnProperty(s)?l!=null&&s==="onScroll"&&zt("scroll",t):l!=null&&Oh(t,s,l,o))}switch(n){case"input":xl(t),Bm(t,i,!1);break;case"textarea":xl(t),Vm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?mo(t,!!i.multiple,s,!1):i.defaultValue!=null&&mo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Pc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wn(e),null;case 6:if(t&&e.stateNode!=null)j_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(xe(166));if(n=ps(Xa.current),ps(zi.current),Cl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ui]=e,(s=i.nodeValue!==n)&&(t=ti,t!==null))switch(t.tag){case 3:bl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ui]=e,e.stateNode=i}return wn(e),null;case 13:if(Ht(jt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Wt&&ei!==null&&e.mode&1&&!(e.flags&128))u_(),bo(),e.flags|=98560,s=!1;else if(s=Cl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(xe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(xe(317));s[Ui]=e}else bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wn(e),s=!1}else wi!==null&&(Bf(wi),wi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||jt.current&1?ln===0&&(ln=3):xp())),e.updateQueue!==null&&(e.flags|=4),wn(e),null);case 4:return Ro(),Df(t,e),t===null&&Ha(e.stateNode.containerInfo),wn(e),null;case 10:return np(e.type._context),wn(e),null;case 17:return Yn(e.type)&&Lc(),wn(e),null;case 19:if(Ht(jt),s=e.memoizedState,s===null)return wn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)sa(s,!1);else{if(ln!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=kc(t),o!==null){for(e.flags|=128,sa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ot(jt,jt.current&1|2),e.child}t=t.sibling}s.tail!==null&&en()>Lo&&(e.flags|=128,i=!0,sa(s,!1),e.lanes=4194304)}else{if(!i)if(t=kc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Wt)return wn(e),null}else 2*en()-s.renderingStartTime>Lo&&n!==1073741824&&(e.flags|=128,i=!0,sa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=en(),e.sibling=null,n=jt.current,Ot(jt,i?n&1|2:n&1),e):(wn(e),null);case 22:case 23:return _p(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Jn&1073741824&&(wn(e),e.subtreeFlags&6&&(e.flags|=8192)):wn(e),null;case 24:return null;case 25:return null}throw Error(xe(156,e.tag))}function iM(t,e){switch(Jh(e),e.tag){case 1:return Yn(e.type)&&Lc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ro(),Ht(jn),Ht(Cn),ap(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return op(e),null;case 13:if(Ht(jt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(xe(340));bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ht(jt),null;case 4:return Ro(),null;case 10:return np(e.type._context),null;case 22:case 23:return _p(),null;case 24:return null;default:return null}}var Ll=!1,bn=!1,rM=typeof WeakSet=="function"?WeakSet:Set,Be=null;function fo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Kt(t,e,i)}else n.current=null}function Nf(t,e,n){try{n()}catch(i){Kt(t,e,i)}}var L0=!1;function sM(t,e){if(gf=bc,t=Zv(),Kh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vf={focusedElem:t,selectionRange:n},bc=!1,Be=e;Be!==null;)if(e=Be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Be=t;else for(;Be!==null;){e=Be;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,g=x.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?w:Mi(e.type,w),g);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(xe(163))}}catch(M){Kt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Be=t;break}Be=e.return}return x=L0,L0=!1,x}function Ca(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Nf(e,n,s)}r=r.next}while(r!==i)}}function ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function If(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Y_(t){var e=t.alternate;e!==null&&(t.alternate=null,Y_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ui],delete e[Ga],delete e[yf],delete e[Hy],delete e[Vy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function q_(t){return t.tag===5||t.tag===3||t.tag===4}function D0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pc));else if(i!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}function Ff(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}var _n=null,Si=!1;function mr(t,e,n){for(n=n.child;n!==null;)$_(t,e,n),n=n.sibling}function $_(t,e,n){if(ki&&typeof ki.onCommitFiberUnmount=="function")try{ki.onCommitFiberUnmount(Jc,n)}catch{}switch(n.tag){case 5:bn||fo(n,e);case 6:var i=_n,r=Si;_n=null,mr(t,e,n),_n=i,Si=r,_n!==null&&(Si?(t=_n,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_n.removeChild(n.stateNode));break;case 18:_n!==null&&(Si?(t=_n,n=n.stateNode,t.nodeType===8?Zu(t.parentNode,n):t.nodeType===1&&Zu(t,n),ka(t)):Zu(_n,n.stateNode));break;case 4:i=_n,r=Si,_n=n.stateNode.containerInfo,Si=!0,mr(t,e,n),_n=i,Si=r;break;case 0:case 11:case 14:case 15:if(!bn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nf(n,e,o),r=r.next}while(r!==i)}mr(t,e,n);break;case 1:if(!bn&&(fo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Kt(n,e,a)}mr(t,e,n);break;case 21:mr(t,e,n);break;case 22:n.mode&1?(bn=(i=bn)||n.memoizedState!==null,mr(t,e,n),bn=i):mr(t,e,n);break;default:mr(t,e,n)}}function N0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rM),e.forEach(function(i){var r=pM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function vi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_n=a.stateNode,Si=!1;break e;case 3:_n=a.stateNode.containerInfo,Si=!0;break e;case 4:_n=a.stateNode.containerInfo,Si=!0;break e}a=a.return}if(_n===null)throw Error(xe(160));$_(s,o,r),_n=null,Si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Kt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)K_(e,t),e=e.sibling}function K_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vi(e,t),Di(t),i&4){try{Ca(3,t,t.return),ou(3,t)}catch(w){Kt(t,t.return,w)}try{Ca(5,t,t.return)}catch(w){Kt(t,t.return,w)}}break;case 1:vi(e,t),Di(t),i&512&&n!==null&&fo(n,n.return);break;case 5:if(vi(e,t),Di(t),i&512&&n!==null&&fo(n,n.return),t.flags&32){var r=t.stateNode;try{Ia(r,"")}catch(w){Kt(t,t.return,w)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&_v(r,s),of(a,o);var c=of(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?wv(r,f):d==="dangerouslySetInnerHTML"?Mv(r,f):d==="children"?Ia(r,f):Oh(r,d,f,c)}switch(a){case"input":ef(r,s);break;case"textarea":xv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?mo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?mo(r,!!s.multiple,s.defaultValue,!0):mo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ga]=s}catch(w){Kt(t,t.return,w)}}break;case 6:if(vi(e,t),Di(t),i&4){if(t.stateNode===null)throw Error(xe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(w){Kt(t,t.return,w)}}break;case 3:if(vi(e,t),Di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ka(e.containerInfo)}catch(w){Kt(t,t.return,w)}break;case 4:vi(e,t),Di(t);break;case 13:vi(e,t),Di(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(gp=en())),i&4&&N0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(bn=(c=bn)||d,vi(e,t),bn=c):vi(e,t),Di(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Be=t,d=t.child;d!==null;){for(f=Be=d;Be!==null;){switch(h=Be,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ca(4,h,h.return);break;case 1:fo(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(w){Kt(i,n,w)}}break;case 5:fo(h,h.return);break;case 22:if(h.memoizedState!==null){U0(f);continue}}p!==null?(p.return=h,Be=p):U0(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sv("display",o))}catch(w){Kt(t,t.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){Kt(t,t.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vi(e,t),Di(t),i&4&&N0(t);break;case 21:break;default:vi(e,t),Di(t)}}function Di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(q_(n)){var i=n;break e}n=n.return}throw Error(xe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ia(r,""),i.flags&=-33);var s=D0(t);Ff(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=D0(t);Uf(t,a,o);break;default:throw Error(xe(161))}}catch(l){Kt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oM(t,e,n){Be=t,Z_(t)}function Z_(t,e,n){for(var i=(t.mode&1)!==0;Be!==null;){var r=Be,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ll;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||bn;a=Ll;var c=bn;if(Ll=o,(bn=l)&&!c)for(Be=r;Be!==null;)o=Be,l=o.child,o.tag===22&&o.memoizedState!==null?F0(r):l!==null?(l.return=o,Be=l):F0(r);for(;s!==null;)Be=s,Z_(s),s=s.sibling;Be=r,Ll=a,bn=c}I0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Be=s):I0(t)}}function I0(t){for(;Be!==null;){var e=Be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:bn||ou(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!bn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Mi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ka(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(xe(163))}bn||e.flags&512&&If(e)}catch(h){Kt(e,e.return,h)}}if(e===t){Be=null;break}if(n=e.sibling,n!==null){n.return=e.return,Be=n;break}Be=e.return}}function U0(t){for(;Be!==null;){var e=Be;if(e===t){Be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Be=n;break}Be=e.return}}function F0(t){for(;Be!==null;){var e=Be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ou(4,e)}catch(l){Kt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Kt(e,r,l)}}var s=e.return;try{If(e)}catch(l){Kt(e,s,l)}break;case 5:var o=e.return;try{If(e)}catch(l){Kt(e,o,l)}}}catch(l){Kt(e,e.return,l)}if(e===t){Be=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Be=a;break}Be=e.return}}var aM=Math.ceil,Hc=lr.ReactCurrentDispatcher,pp=lr.ReactCurrentOwner,di=lr.ReactCurrentBatchConfig,St=0,mn=null,nn=null,xn=0,Jn=0,ho=jr(0),ln=0,$a=null,Ss=0,au=0,mp=0,Ra=null,Wn=null,gp=0,Lo=1/0,Zi=null,Vc=!1,Of=null,Fr=null,Dl=!1,Rr=null,Gc=0,Pa=0,kf=null,pc=-1,mc=0;function Un(){return St&6?en():pc!==-1?pc:pc=en()}function Or(t){return t.mode&1?St&2&&xn!==0?xn&-xn:Wy.transition!==null?(mc===0&&(mc=Uv()),mc):(t=Pt,t!==0||(t=window.event,t=t===void 0?16:Vv(t.type)),t):1}function Ci(t,e,n,i){if(50<Pa)throw Pa=0,kf=null,Error(xe(185));il(t,n,i),(!(St&2)||t!==mn)&&(t===mn&&(!(St&2)&&(au|=n),ln===4&&Ar(t,xn)),qn(t,i),n===1&&St===0&&!(e.mode&1)&&(Lo=en()+500,iu&&Yr()))}function qn(t,e){var n=t.callbackNode;W1(t,e);var i=Ac(t,t===mn?xn:0);if(i===0)n!==null&&Xm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xm(n),e===1)t.tag===0?Gy(O0.bind(null,t)):a_(O0.bind(null,t)),zy(function(){!(St&6)&&Yr()}),n=null;else{switch(Fv(i)){case 1:n=Vh;break;case 4:n=Nv;break;case 16:n=Tc;break;case 536870912:n=Iv;break;default:n=Tc}n=sx(n,J_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function J_(t,e){if(pc=-1,mc=0,St&6)throw Error(xe(327));var n=t.callbackNode;if(yo()&&t.callbackNode!==n)return null;var i=Ac(t,t===mn?xn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Wc(t,i);else{e=i;var r=St;St|=2;var s=ex();(mn!==t||xn!==e)&&(Zi=null,Lo=en()+500,vs(t,e));do try{uM();break}catch(a){Q_(t,a)}while(!0);tp(),Hc.current=s,St=r,nn!==null?e=0:(mn=null,xn=0,e=ln)}if(e!==0){if(e===2&&(r=df(t),r!==0&&(i=r,e=zf(t,r))),e===1)throw n=$a,vs(t,0),Ar(t,i),qn(t,en()),n;if(e===6)Ar(t,i);else{if(r=t.current.alternate,!(i&30)&&!lM(r)&&(e=Wc(t,i),e===2&&(s=df(t),s!==0&&(i=s,e=zf(t,s))),e===1))throw n=$a,vs(t,0),Ar(t,i),qn(t,en()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(xe(345));case 2:as(t,Wn,Zi);break;case 3:if(Ar(t,i),(i&130023424)===i&&(e=gp+500-en(),10<e)){if(Ac(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=xf(as.bind(null,t,Wn,Zi),e);break}as(t,Wn,Zi);break;case 4:if(Ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-bi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=en()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aM(i/1960))-i,10<i){t.timeoutHandle=xf(as.bind(null,t,Wn,Zi),i);break}as(t,Wn,Zi);break;case 5:as(t,Wn,Zi);break;default:throw Error(xe(329))}}}return qn(t,en()),t.callbackNode===n?J_.bind(null,t):null}function zf(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&(vs(t,e).flags|=256),t=Wc(t,e),t!==2&&(e=Wn,Wn=n,e!==null&&Bf(e)),t}function Bf(t){Wn===null?Wn=t:Wn.push.apply(Wn,t)}function lM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Pi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~mp,e&=~au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bi(e),i=1<<n;t[n]=-1,e&=~i}}function O0(t){if(St&6)throw Error(xe(327));yo();var e=Ac(t,0);if(!(e&1))return qn(t,en()),null;var n=Wc(t,e);if(t.tag!==0&&n===2){var i=df(t);i!==0&&(e=i,n=zf(t,i))}if(n===1)throw n=$a,vs(t,0),Ar(t,e),qn(t,en()),n;if(n===6)throw Error(xe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,as(t,Wn,Zi),qn(t,en()),null}function vp(t,e){var n=St;St|=1;try{return t(e)}finally{St=n,St===0&&(Lo=en()+500,iu&&Yr())}}function ws(t){Rr!==null&&Rr.tag===0&&!(St&6)&&yo();var e=St;St|=1;var n=di.transition,i=Pt;try{if(di.transition=null,Pt=1,t)return t()}finally{Pt=i,di.transition=n,St=e,!(St&6)&&Yr()}}function _p(){Jn=ho.current,Ht(ho)}function vs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ky(n)),nn!==null)for(n=nn.return;n!==null;){var i=n;switch(Jh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Lc();break;case 3:Ro(),Ht(jn),Ht(Cn),ap();break;case 5:op(i);break;case 4:Ro();break;case 13:Ht(jt);break;case 19:Ht(jt);break;case 10:np(i.type._context);break;case 22:case 23:_p()}n=n.return}if(mn=t,nn=t=kr(t.current,null),xn=Jn=e,ln=0,$a=null,mp=au=Ss=0,Wn=Ra=null,hs!==null){for(e=0;e<hs.length;e++)if(n=hs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}hs=null}return t}function Q_(t,e){do{var n=nn;try{if(tp(),dc.current=Bc,zc){for(var i=Yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}zc=!1}if(Ms=0,pn=an=Yt=null,ba=!1,ja=0,pp.current=null,n===null||n.return===null){ln=1,$a=e,nn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=xn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=E0(o);if(p!==null){p.flags&=-257,T0(p,o,a,s,e),p.mode&1&&w0(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var w=new Set;w.add(l),e.updateQueue=w}else x.add(l);break e}else{if(!(e&1)){w0(s,c,e),xp();break e}l=Error(xe(426))}}else if(Wt&&a.mode&1){var g=E0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),T0(g,o,a,s,e),Qh(Po(l,a));break e}}s=l=Po(l,a),ln!==4&&(ln=2),Ra===null?Ra=[s]:Ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=F_(s,l,e);v0(s,u);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fr===null||!Fr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=O_(s,a,e);v0(s,M);break e}}s=s.return}while(s!==null)}nx(n)}catch(C){e=C,nn===n&&n!==null&&(nn=n=n.return);continue}break}while(!0)}function ex(){var t=Hc.current;return Hc.current=Bc,t===null?Bc:t}function xp(){(ln===0||ln===3||ln===2)&&(ln=4),mn===null||!(Ss&268435455)&&!(au&268435455)||Ar(mn,xn)}function Wc(t,e){var n=St;St|=2;var i=ex();(mn!==t||xn!==e)&&(Zi=null,vs(t,e));do try{cM();break}catch(r){Q_(t,r)}while(!0);if(tp(),St=n,Hc.current=i,nn!==null)throw Error(xe(261));return mn=null,xn=0,ln}function cM(){for(;nn!==null;)tx(nn)}function uM(){for(;nn!==null&&!U1();)tx(nn)}function tx(t){var e=rx(t.alternate,t,Jn);t.memoizedProps=t.pendingProps,e===null?nx(t):nn=e,pp.current=null}function nx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iM(n,e),n!==null){n.flags&=32767,nn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ln=6,nn=null;return}}else if(n=nM(n,e,Jn),n!==null){nn=n;return}if(e=e.sibling,e!==null){nn=e;return}nn=e=t}while(e!==null);ln===0&&(ln=5)}function as(t,e,n){var i=Pt,r=di.transition;try{di.transition=null,Pt=1,dM(t,e,n,i)}finally{di.transition=r,Pt=i}return null}function dM(t,e,n,i){do yo();while(Rr!==null);if(St&6)throw Error(xe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(xe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(X1(t,s),t===mn&&(nn=mn=null,xn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Dl||(Dl=!0,sx(Tc,function(){return yo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=di.transition,di.transition=null;var o=Pt;Pt=1;var a=St;St|=4,pp.current=null,sM(t,n),K_(n,t),Ly(vf),bc=!!gf,vf=gf=null,t.current=n,oM(n),F1(),St=a,Pt=o,di.transition=s}else t.current=n;if(Dl&&(Dl=!1,Rr=t,Gc=r),s=t.pendingLanes,s===0&&(Fr=null),z1(n.stateNode),qn(t,en()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Vc)throw Vc=!1,t=Of,Of=null,t;return Gc&1&&t.tag!==0&&yo(),s=t.pendingLanes,s&1?t===kf?Pa++:(Pa=0,kf=t):Pa=0,Yr(),null}function yo(){if(Rr!==null){var t=Fv(Gc),e=di.transition,n=Pt;try{if(di.transition=null,Pt=16>t?16:t,Rr===null)var i=!1;else{if(t=Rr,Rr=null,Gc=0,St&6)throw Error(xe(331));var r=St;for(St|=4,Be=t.current;Be!==null;){var s=Be,o=s.child;if(Be.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Be=c;Be!==null;){var d=Be;switch(d.tag){case 0:case 11:case 15:Ca(8,d,s)}var f=d.child;if(f!==null)f.return=d,Be=f;else for(;Be!==null;){d=Be;var h=d.sibling,p=d.return;if(Y_(d),d===c){Be=null;break}if(h!==null){h.return=p,Be=h;break}Be=p}}}var x=s.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var g=w.sibling;w.sibling=null,w=g}while(w!==null)}}Be=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Be=o;else e:for(;Be!==null;){if(s=Be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ca(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Be=u;break e}Be=s.return}}var m=t.current;for(Be=m;Be!==null;){o=Be;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Be=v;else e:for(o=m;Be!==null;){if(a=Be,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ou(9,a)}}catch(C){Kt(a,a.return,C)}if(a===o){Be=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Be=M;break e}Be=a.return}}if(St=r,Yr(),ki&&typeof ki.onPostCommitFiberRoot=="function")try{ki.onPostCommitFiberRoot(Jc,t)}catch{}i=!0}return i}finally{Pt=n,di.transition=e}}return!1}function k0(t,e,n){e=Po(n,e),e=F_(t,e,1),t=Ur(t,e,1),e=Un(),t!==null&&(il(t,1,e),qn(t,e))}function Kt(t,e,n){if(t.tag===3)k0(t,t,n);else for(;e!==null;){if(e.tag===3){k0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fr===null||!Fr.has(i))){t=Po(n,t),t=O_(e,t,1),e=Ur(e,t,1),t=Un(),e!==null&&(il(e,1,t),qn(e,t));break}}e=e.return}}function fM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Un(),t.pingedLanes|=t.suspendedLanes&n,mn===t&&(xn&n)===n&&(ln===4||ln===3&&(xn&130023424)===xn&&500>en()-gp?vs(t,0):mp|=n),qn(t,e)}function ix(t,e){e===0&&(t.mode&1?(e=Sl,Sl<<=1,!(Sl&130023424)&&(Sl=4194304)):e=1);var n=Un();t=or(t,e),t!==null&&(il(t,e,n),qn(t,n))}function hM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ix(t,n)}function pM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(xe(314))}i!==null&&i.delete(e),ix(t,n)}var rx;rx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||jn.current)Xn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Xn=!1,tM(t,e,n);Xn=!!(t.flags&131072)}else Xn=!1,Wt&&e.flags&1048576&&l_(e,Ic,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;hc(t,e),t=e.pendingProps;var r=Ao(e,Cn.current);xo(e,n),r=cp(null,e,i,t,r,n);var s=up();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yn(i)?(s=!0,Dc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,rp(e),r.updater=su,e.stateNode=r,r._reactInternals=e,Af(e,i,t,n),e=Rf(null,e,i,!0,s,n)):(e.tag=0,Wt&&s&&Zh(e),Nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(hc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=gM(i),t=Mi(i,t),r){case 0:e=Cf(null,e,i,t,n);break e;case 1:e=C0(null,e,i,t,n);break e;case 11:e=A0(null,e,i,t,n);break e;case 14:e=b0(null,e,i,Mi(i.type,t),n);break e}throw Error(xe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mi(i,r),Cf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mi(i,r),C0(t,e,i,r,n);case 3:e:{if(H_(e),t===null)throw Error(xe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,p_(t,e),Oc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Po(Error(xe(423)),e),e=R0(t,e,i,n,r);break e}else if(i!==r){r=Po(Error(xe(424)),e),e=R0(t,e,i,n,r);break e}else for(ei=Ir(e.stateNode.containerInfo.firstChild),ti=e,Wt=!0,wi=null,n=f_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bo(),i===r){e=ar(t,e,n);break e}Nn(t,e,i,n)}e=e.child}return e;case 5:return m_(e),t===null&&wf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,_f(i,r)?o=null:s!==null&&_f(i,s)&&(e.flags|=32),B_(t,e),Nn(t,e,o,n),e.child;case 6:return t===null&&wf(e),null;case 13:return V_(t,e,n);case 4:return sp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Co(e,null,i,n):Nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mi(i,r),A0(t,e,i,r,n);case 7:return Nn(t,e,e.pendingProps,n),e.child;case 8:return Nn(t,e,e.pendingProps.children,n),e.child;case 12:return Nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ot(Uc,i._currentValue),i._currentValue=o,s!==null)if(Pi(s.value,o)){if(s.children===r.children&&!jn.current){e=ar(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=nr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ef(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(xe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ef(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,xo(e,n),r=fi(r),i=i(r),e.flags|=1,Nn(t,e,i,n),e.child;case 14:return i=e.type,r=Mi(i,e.pendingProps),r=Mi(i.type,r),b0(t,e,i,r,n);case 15:return k_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mi(i,r),hc(t,e),e.tag=1,Yn(i)?(t=!0,Dc(e)):t=!1,xo(e,n),U_(e,i,r),Af(e,i,r,n),Rf(null,e,i,!0,t,n);case 19:return G_(t,e,n);case 22:return z_(t,e,n)}throw Error(xe(156,e.tag))};function sx(t,e){return Dv(t,e)}function mM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(t,e,n,i){return new mM(t,e,n,i)}function yp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gM(t){if(typeof t=="function")return yp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zh)return 11;if(t===Bh)return 14}return 2}function kr(t,e){var n=t.alternate;return n===null?(n=ui(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")yp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case no:return _s(n.children,r,s,e);case kh:o=8,r|=8;break;case $d:return t=ui(12,n,e,r|2),t.elementType=$d,t.lanes=s,t;case Kd:return t=ui(13,n,e,r),t.elementType=Kd,t.lanes=s,t;case Zd:return t=ui(19,n,e,r),t.elementType=Zd,t.lanes=s,t;case mv:return lu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hv:o=10;break e;case pv:o=9;break e;case zh:o=11;break e;case Bh:o=14;break e;case wr:o=16,i=null;break e}throw Error(xe(130,t==null?t:typeof t,""))}return e=ui(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function _s(t,e,n,i){return t=ui(7,t,i,e),t.lanes=n,t}function lu(t,e,n,i){return t=ui(22,t,i,e),t.elementType=mv,t.lanes=n,t.stateNode={isHidden:!1},t}function sd(t,e,n){return t=ui(6,t,null,e),t.lanes=n,t}function od(t,e,n){return e=ui(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bu(0),this.expirationTimes=Bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Mp(t,e,n,i,r,s,o,a,l){return t=new vM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ui(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rp(s),t}function _M(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:to,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ox(t){if(!t)return Vr;t=t._reactInternals;e:{if(bs(t)!==t||t.tag!==1)throw Error(xe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(xe(171))}if(t.tag===1){var n=t.type;if(Yn(n))return o_(t,n,e)}return e}function ax(t,e,n,i,r,s,o,a,l){return t=Mp(n,i,!0,t,r,s,o,a,l),t.context=ox(null),n=t.current,i=Un(),r=Or(n),s=nr(i,r),s.callback=e??null,Ur(n,s,r),t.current.lanes=r,il(t,r,i),qn(t,i),t}function cu(t,e,n,i){var r=e.current,s=Un(),o=Or(r);return n=ox(n),e.context===null?e.context=n:e.pendingContext=n,e=nr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ur(r,e,o),t!==null&&(Ci(t,r,o,s),uc(t,r,o)),o}function Xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function z0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sp(t,e){z0(t,e),(t=t.alternate)&&z0(t,e)}function xM(){return null}var lx=typeof reportError=="function"?reportError:function(t){console.error(t)};function wp(t){this._internalRoot=t}uu.prototype.render=wp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(xe(409));cu(t,e,null,null)};uu.prototype.unmount=wp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ws(function(){cu(null,t,null,null)}),e[sr]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=zv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tr.length&&e!==0&&e<Tr[n].priority;n++);Tr.splice(n,0,t),n===0&&Hv(t)}};function Ep(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function B0(){}function yM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Xc(o);s.call(c)}}var o=ax(e,i,t,0,null,!1,!1,"",B0);return t._reactRootContainer=o,t[sr]=o.current,Ha(t.nodeType===8?t.parentNode:t),ws(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Xc(l);a.call(c)}}var l=Mp(t,0,!1,null,null,!1,!1,"",B0);return t._reactRootContainer=l,t[sr]=l.current,Ha(t.nodeType===8?t.parentNode:t),ws(function(){cu(e,l,n,i)}),l}function fu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Xc(o);a.call(l)}}cu(e,o,t,r)}else o=yM(n,e,t,r,i);return Xc(o)}Ov=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xa(e.pendingLanes);n!==0&&(Gh(e,n|1),qn(e,en()),!(St&6)&&(Lo=en()+500,Yr()))}break;case 13:ws(function(){var i=or(t,1);if(i!==null){var r=Un();Ci(i,t,1,r)}}),Sp(t,1)}};Wh=function(t){if(t.tag===13){var e=or(t,134217728);if(e!==null){var n=Un();Ci(e,t,134217728,n)}Sp(t,134217728)}};kv=function(t){if(t.tag===13){var e=Or(t),n=or(t,e);if(n!==null){var i=Un();Ci(n,t,e,i)}Sp(t,e)}};zv=function(){return Pt};Bv=function(t,e){var n=Pt;try{return Pt=t,e()}finally{Pt=n}};lf=function(t,e,n){switch(e){case"input":if(ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=nu(i);if(!r)throw Error(xe(90));vv(i),ef(i,r)}}}break;case"textarea":xv(t,n);break;case"select":e=n.value,e!=null&&mo(t,!!n.multiple,e,!1)}};Av=vp;bv=ws;var MM={usingClientEntryPoint:!1,Events:[sl,oo,nu,Ev,Tv,vp]},oa={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SM={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pv(t),t===null?null:t.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||xM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{Jc=Nl.inject(SM),ki=Nl}catch{}}ii.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MM;ii.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ep(e))throw Error(xe(200));return _M(t,e,null,n)};ii.createRoot=function(t,e){if(!Ep(t))throw Error(xe(299));var n=!1,i="",r=lx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Mp(t,1,!1,null,null,n,!1,i,r),t[sr]=e.current,Ha(t.nodeType===8?t.parentNode:t),new wp(e)};ii.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(xe(188)):(t=Object.keys(t).join(","),Error(xe(268,t)));return t=Pv(e),t=t===null?null:t.stateNode,t};ii.flushSync=function(t){return ws(t)};ii.hydrate=function(t,e,n){if(!du(e))throw Error(xe(200));return fu(null,t,e,!0,n)};ii.hydrateRoot=function(t,e,n){if(!Ep(t))throw Error(xe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=lx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ax(e,null,t,1,n??null,r,!1,s,o),t[sr]=e.current,Ha(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new uu(e)};ii.render=function(t,e,n){if(!du(e))throw Error(xe(200));return fu(null,t,e,!1,n)};ii.unmountComponentAtNode=function(t){if(!du(t))throw Error(xe(40));return t._reactRootContainer?(ws(function(){fu(null,null,t,!1,function(){t._reactRootContainer=null,t[sr]=null})}),!0):!1};ii.unstable_batchedUpdates=vp;ii.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!du(n))throw Error(xe(200));if(t==null||t._reactInternals===void 0)throw Error(xe(38));return fu(t,e,n,!1,i)};ii.version="18.3.1-next-f1338f8080-20240426";function cx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cx)}catch(t){console.error(t)}}cx(),cv.exports=ii;var wM=cv.exports,ux,H0=wM;ux=H0.createRoot,H0.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tp="180",EM=0,V0=1,TM=2,dx=1,fx=2,Ki=3,Gr=0,$n=1,Ei=2,zr=0,Mo=1,G0=2,W0=3,X0=4,AM=5,us=100,bM=101,CM=102,RM=103,PM=104,LM=200,DM=201,NM=202,IM=203,Hf=204,Vf=205,UM=206,FM=207,OM=208,kM=209,zM=210,BM=211,HM=212,VM=213,GM=214,Gf=0,Wf=1,Xf=2,Do=3,jf=4,Yf=5,qf=6,$f=7,Ap=0,WM=1,XM=2,Br=0,jM=1,YM=2,qM=3,hx=4,$M=5,KM=6,ZM=7,px=300,No=301,Io=302,Kf=303,Zf=304,hu=306,So=1e3,ms=1001,Jf=1002,Ri=1003,JM=1004,Il=1005,Fi=1006,ad=1007,gs=1008,Hi=1009,mx=1010,gx=1011,Ka=1012,bp=1013,Es=1014,tr=1015,al=1016,Cp=1017,Rp=1018,Za=1020,vx=35902,_x=35899,xx=1021,yx=1022,Ai=1023,Ja=1026,Qa=1027,Mx=1028,Pp=1029,Sx=1030,Lp=1031,Dp=1033,vc=33776,_c=33777,xc=33778,yc=33779,Qf=35840,eh=35841,th=35842,nh=35843,ih=36196,rh=37492,sh=37496,oh=37808,ah=37809,lh=37810,ch=37811,uh=37812,dh=37813,fh=37814,hh=37815,ph=37816,mh=37817,gh=37818,vh=37819,_h=37820,xh=37821,yh=36492,Mh=36494,Sh=36495,wh=36283,Eh=36284,Th=36285,Ah=36286,QM=3200,eS=3201,Np=0,tS=1,br="",Gn="srgb",Uo="srgb-linear",jc="linear",It="srgb",Bs=7680,j0=519,nS=512,iS=513,rS=514,wx=515,sS=516,oS=517,aS=518,lS=519,Y0=35044,q0="300 es",Oi=2e3,Yc=2001;class Bo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ld=Math.PI/180,bh=180/Math.PI;function ll(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[t&255]+En[t>>8&255]+En[t>>16&255]+En[t>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[n&63|128]+En[n>>8&255]+"-"+En[n>>16&255]+En[n>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function ht(t,e,n){return Math.max(e,Math.min(n,t))}function cS(t,e){return(t%e+e)%e}function cd(t,e,n){return(1-n)*t+n*e}function aa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],w=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=w;return}if(f!==w||l!==h||c!==p||d!==x){let g=1-a;const u=l*h+c*p+d*x+f*w,m=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const C=Math.sqrt(v),R=Math.atan2(C,u*m);g=Math.sin(g*R)/C,a=Math.sin(a*R)/C}const M=a*m;if(l=l*g+h*M,c=c*g+p*M,d=d*g+x*M,f=f*g+w*M,g===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+d*f+l*p-c*h,e[n+1]=l*x+d*h+c*f-a*p,e[n+2]=c*x+d*p+a*h-l*f,e[n+3]=d*x-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*p*x,this._y=c*p*f-h*d*x,this._z=c*d*x+h*p*f,this._w=c*d*f-h*p*x;break;case"YXZ":this._x=h*d*f+c*p*x,this._y=c*p*f-h*d*x,this._z=c*d*x-h*p*f,this._w=c*d*f+h*p*x;break;case"ZXY":this._x=h*d*f-c*p*x,this._y=c*p*f+h*d*x,this._z=c*d*x+h*p*f,this._w=c*d*f-h*p*x;break;case"ZYX":this._x=h*d*f-c*p*x,this._y=c*p*f+h*d*x,this._z=c*d*x-h*p*f,this._w=c*d*f+h*p*x;break;case"YZX":this._x=h*d*f+c*p*x,this._y=c*p*f+h*d*x,this._z=c*d*x-h*p*f,this._w=c*d*f-h*p*x;break;case"XZY":this._x=h*d*f-c*p*x,this._y=c*p*f-h*d*x,this._z=c*d*x+h*p*f,this._w=c*d*f+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ud=new k,$0=new cl;class ot{constructor(e,n,i,r,s,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],x=i[8],w=r[0],g=r[3],u=r[6],m=r[1],v=r[4],M=r[7],C=r[2],R=r[5],L=r[8];return s[0]=o*w+a*m+l*C,s[3]=o*g+a*v+l*R,s[6]=o*u+a*M+l*L,s[1]=c*w+d*m+f*C,s[4]=c*g+d*v+f*R,s[7]=c*u+d*M+f*L,s[2]=h*w+p*m+x*C,s[5]=h*g+p*v+x*R,s[8]=h*u+p*M+x*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,p=c*s-o*l,x=n*f+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/x;return e[0]=f*w,e[1]=(r*c-d*i)*w,e[2]=(a*i-r*o)*w,e[3]=h*w,e[4]=(d*n-r*l)*w,e[5]=(r*s-a*n)*w,e[6]=p*w,e[7]=(i*l-c*n)*w,e[8]=(o*n-i*s)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(dd.makeScale(e,n)),this}rotate(e){return this.premultiply(dd.makeRotation(-e)),this}translate(e,n){return this.premultiply(dd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dd=new ot;function Ex(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function qc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function uS(){const t=qc("canvas");return t.style.display="block",t}const K0={};function el(t){t in K0||(K0[t]=!0,console.warn(t))}function dS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Z0=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),J0=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fS(){const t={enabled:!0,workingColorSpace:Uo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===It&&(r.r=ir(r.r),r.g=ir(r.g),r.b=ir(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(r.r=wo(r.r),r.g=wo(r.g),r.b=wo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===br?jc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return el("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return el("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Uo]:{primaries:e,whitePoint:i,transfer:jc,toXYZ:Z0,fromXYZ:J0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:It,toXYZ:Z0,fromXYZ:J0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),t}const Tt=fS();function ir(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function wo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hs;class hS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hs===void 0&&(Hs=qc("canvas")),Hs.width=e.width,Hs.height=e.height;const r=Hs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=qc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ir(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ir(n[i]/255)*255):n[i]=ir(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pS=0;class Ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(fd(r[o].image)):s.push(fd(r[o]))}else s=fd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function fd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?hS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mS=0;const hd=new k;class Fn extends Bo{constructor(e=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,i=ms,r=ms,s=Fi,o=gs,a=Ai,l=Hi,c=Fn.DEFAULT_ANISOTROPY,d=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=ll(),this.name="",this.source=new Ip(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hd).x}get height(){return this.source.getSize(hd).y}get depth(){return this.source.getSize(hd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==px)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case So:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case Jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case So:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case Jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=px;Fn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],x=l[9],w=l[2],g=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-w)<.01&&Math.abs(x-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+w)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(p+1)/2,C=(u+1)/2,R=(d+h)/4,L=(f+w)/4,N=(x+g)/4;return v>M&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=L/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=N/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=L/s,r=N/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-x)*(g-x)+(f-w)*(f-w)+(h-d)*(h-d));return Math.abs(m)<.001&&(m=1),this.x=(g-x)/m,this.y=(f-w)/m,this.z=(h-d)/m,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this.w=ht(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this.w=ht(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gS extends Bo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Fn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Fi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ip(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends gS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Tx extends Fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vS extends Fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(_i.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(_i.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=_i.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(s,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ul.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ul.copy(i.boundingBox)),Ul.applyMatrix4(e.matrixWorld),this.union(Ul)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),Fl.subVectors(this.max,la),Vs.subVectors(e.a,la),Gs.subVectors(e.b,la),Ws.subVectors(e.c,la),gr.subVectors(Gs,Vs),vr.subVectors(Ws,Gs),Qr.subVectors(Vs,Ws);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-Qr.z,Qr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,Qr.z,0,-Qr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-Qr.y,Qr.x,0];return!pd(n,Vs,Gs,Ws,Fl)||(n=[1,0,0,0,1,0,0,0,1],!pd(n,Vs,Gs,Ws,Fl))?!1:(Ol.crossVectors(gr,vr),n=[Ol.x,Ol.y,Ol.z],pd(n,Vs,Gs,Ws,Fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new k,new k,new k,new k,new k,new k,new k,new k],_i=new k,Ul=new ul,Vs=new k,Gs=new k,Ws=new k,gr=new k,vr=new k,Qr=new k,la=new k,Fl=new k,Ol=new k,es=new k;function pd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){es.fromArray(t,s);const a=r.x*Math.abs(es.x)+r.y*Math.abs(es.y)+r.z*Math.abs(es.z),l=e.dot(es),c=n.dot(es),d=i.dot(es);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const _S=new ul,ca=new k,md=new k;class pu{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_S.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);const n=ca.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(md)),this.expandByPoint(ca.copy(e.center).sub(md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ji=new k,gd=new k,kl=new k,_r=new k,vd=new k,zl=new k,_d=new k;class Up{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ji.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,n),ji.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){gd.copy(e).add(n).multiplyScalar(.5),kl.copy(n).sub(e).normalize(),_r.copy(this.origin).sub(gd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(kl),a=_r.dot(this.direction),l=-_r.dot(kl),c=_r.lengthSq(),d=Math.abs(1-o*o);let f,h,p,x;if(d>0)if(f=o*l-a,h=o*a-l,x=s*d,f>=0)if(h>=-x)if(h<=x){const w=1/d;f*=w,h*=w,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(gd).addScaledVector(kl,h),p}intersectSphere(e,n){ji.subVectors(e.center,this.origin);const i=ji.dot(this.direction),r=ji.dot(ji)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,n,i,r,s){vd.subVectors(n,e),zl.subVectors(i,e),_d.crossVectors(vd,zl);let o=this.direction.dot(_d),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_r.subVectors(this.origin,e);const l=a*this.direction.dot(zl.crossVectors(_r,zl));if(l<0)return null;const c=a*this.direction.dot(vd.cross(_r));if(c<0||l+c>o)return null;const d=-a*_r.dot(_d);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,i,r,s,o,a,l,c,d,f,h,p,x,w,g){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,p,x,w,g)}set(e,n,i,r,s,o,a,l,c,d,f,h,p,x,w,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=x,u[11]=w,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xs.setFromMatrixColumn(e,0).length(),s=1/Xs.setFromMatrixColumn(e,1).length(),o=1/Xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*f,x=a*d,w=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+x*c,n[5]=h-w*c,n[9]=-a*l,n[2]=w-h*c,n[6]=x+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,x=c*d,w=c*f;n[0]=h+w*a,n[4]=x*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-x,n[6]=w+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,x=c*d,w=c*f;n[0]=h-w*a,n[4]=-o*f,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*d,n[9]=w-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,x=a*d,w=a*f;n[0]=l*d,n[4]=x*c-p,n[8]=h*c+w,n[1]=l*f,n[5]=w*c+h,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,x=a*l,w=a*c;n[0]=l*d,n[4]=w-h*f,n[8]=x*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+x,n[10]=h-w*f}else if(e.order==="XZY"){const h=o*l,p=o*c,x=a*l,w=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+w,n[5]=o*d,n[9]=p*f-x,n[2]=x*f-p,n[6]=a*d,n[10]=w*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xS,e,yS)}lookAt(e,n,i){const r=this.elements;return Kn.subVectors(e,n),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),xr.crossVectors(i,Kn),xr.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),xr.crossVectors(i,Kn)),xr.normalize(),Bl.crossVectors(Kn,xr),r[0]=xr.x,r[4]=Bl.x,r[8]=Kn.x,r[1]=xr.y,r[5]=Bl.y,r[9]=Kn.y,r[2]=xr.z,r[6]=Bl.z,r[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],x=i[2],w=i[6],g=i[10],u=i[14],m=i[3],v=i[7],M=i[11],C=i[15],R=r[0],L=r[4],N=r[8],E=r[12],S=r[1],I=r[5],H=r[9],$=r[13],ie=r[2],oe=r[6],V=r[10],j=r[14],U=r[3],K=r[7],ee=r[11],Me=r[15];return s[0]=o*R+a*S+l*ie+c*U,s[4]=o*L+a*I+l*oe+c*K,s[8]=o*N+a*H+l*V+c*ee,s[12]=o*E+a*$+l*j+c*Me,s[1]=d*R+f*S+h*ie+p*U,s[5]=d*L+f*I+h*oe+p*K,s[9]=d*N+f*H+h*V+p*ee,s[13]=d*E+f*$+h*j+p*Me,s[2]=x*R+w*S+g*ie+u*U,s[6]=x*L+w*I+g*oe+u*K,s[10]=x*N+w*H+g*V+u*ee,s[14]=x*E+w*$+g*j+u*Me,s[3]=m*R+v*S+M*ie+C*U,s[7]=m*L+v*I+M*oe+C*K,s[11]=m*N+v*H+M*V+C*ee,s[15]=m*E+v*$+M*j+C*Me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],x=e[3],w=e[7],g=e[11],u=e[15];return x*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+w*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*d-s*l*d)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],x=e[12],w=e[13],g=e[14],u=e[15],m=f*g*c-w*h*c+w*l*p-a*g*p-f*l*u+a*h*u,v=x*h*c-d*g*c-x*l*p+o*g*p+d*l*u-o*h*u,M=d*w*c-x*f*c+x*a*p-o*w*p-d*a*u+o*f*u,C=x*f*l-d*w*l-x*a*h+o*w*h+d*a*g-o*f*g,R=n*m+i*v+r*M+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return e[0]=m*L,e[1]=(w*h*s-f*g*s-w*r*p+i*g*p+f*r*u-i*h*u)*L,e[2]=(a*g*s-w*l*s+w*r*c-i*g*c-a*r*u+i*l*u)*L,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*L,e[4]=v*L,e[5]=(d*g*s-x*h*s+x*r*p-n*g*p-d*r*u+n*h*u)*L,e[6]=(x*l*s-o*g*s-x*r*c+n*g*c+o*r*u-n*l*u)*L,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*p+n*l*p)*L,e[8]=M*L,e[9]=(x*f*s-d*w*s-x*i*p+n*w*p+d*i*u-n*f*u)*L,e[10]=(o*w*s-x*a*s+x*i*c-n*w*c-o*i*u+n*a*u)*L,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*p-n*a*p)*L,e[12]=C*L,e[13]=(d*w*r-x*f*r+x*i*h-n*w*h-d*i*g+n*f*g)*L,e[14]=(x*a*r-o*w*r-x*i*l+n*w*l+o*i*g-n*a*g)*L,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,p=s*d,x=s*f,w=o*d,g=o*f,u=a*f,m=l*c,v=l*d,M=l*f,C=i.x,R=i.y,L=i.z;return r[0]=(1-(w+u))*C,r[1]=(p+M)*C,r[2]=(x-v)*C,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(h+u))*R,r[6]=(g+m)*R,r[7]=0,r[8]=(x+v)*L,r[9]=(g-m)*L,r[10]=(1-(h+w))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Xs.set(r[0],r[1],r[2]).length();const o=Xs.set(r[4],r[5],r[6]).length(),a=Xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xi.copy(this);const c=1/s,d=1/o,f=1/a;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=d,xi.elements[5]*=d,xi.elements[6]*=d,xi.elements[8]*=f,xi.elements[9]*=f,xi.elements[10]*=f,n.setFromRotationMatrix(xi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Oi,l=!1){const c=this.elements,d=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let x,w;if(l)x=s/(o-s),w=o*s/(o-s);else if(a===Oi)x=-(o+s)/(o-s),w=-2*o*s/(o-s);else if(a===Yc)x=-o/(o-s),w=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Oi,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let x,w;if(l)x=1/(o-s),w=o/(o-s);else if(a===Oi)x=-2/(o-s),w=-(o+s)/(o-s);else if(a===Yc)x=-1/(o-s),w=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xs=new k,xi=new Vt,xS=new k(0,0,0),yS=new k(1,1,1),xr=new k,Bl=new k,Kn=new k,Q0=new Vt,eg=new cl;class Li{constructor(e=0,n=0,i=0,r=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Q0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Q0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return eg.setFromEuler(this),this.setFromQuaternion(eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class Fp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MS=0;const tg=new k,js=new cl,Yi=new Vt,Hl=new k,ua=new k,SS=new k,wS=new cl,ng=new k(1,0,0),ig=new k(0,1,0),rg=new k(0,0,1),sg={type:"added"},ES={type:"removed"},Ys={type:"childadded",child:null},xd={type:"childremoved",child:null};class gn extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new k,n=new Li,i=new cl,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new ot}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return js.setFromAxisAngle(e,n),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,n){return js.setFromAxisAngle(e,n),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(ng,e)}rotateY(e){return this.rotateOnAxis(ig,e)}rotateZ(e){return this.rotateOnAxis(rg,e)}translateOnAxis(e,n){return tg.copy(e).applyQuaternion(this.quaternion),this.position.add(tg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ng,e)}translateY(e){return this.translateOnAxis(ig,e)}translateZ(e){return this.translateOnAxis(rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Hl.copy(e):Hl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(ua,Hl,this.up):Yi.lookAt(Hl,ua,this.up),this.quaternion.setFromRotationMatrix(Yi),r&&(Yi.extractRotation(r.matrixWorld),js.setFromRotationMatrix(Yi),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sg),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ES),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sg),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,SS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,wS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new k(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new k,qi=new k,yd=new k,$i=new k,qs=new k,$s=new k,og=new k,Md=new k,Sd=new k,wd=new k,Ed=new Ut,Td=new Ut,Ad=new Ut;class Ti{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),yi.subVectors(e,n),r.cross(yi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){yi.subVectors(r,n),qi.subVectors(i,n),yd.subVectors(e,n);const o=yi.dot(yi),a=yi.dot(qi),l=yi.dot(yd),c=qi.dot(qi),d=qi.dot(yd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*d)*h,x=(o*d-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(o,$i.y),l.addScaledVector(a,$i.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ed.setScalar(0),Td.setScalar(0),Ad.setScalar(0),Ed.fromBufferAttribute(e,n),Td.fromBufferAttribute(e,i),Ad.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ed,s.x),o.addScaledVector(Td,s.y),o.addScaledVector(Ad,s.z),o}static isFrontFacing(e,n,i,r){return yi.subVectors(i,n),qi.subVectors(e,n),yi.cross(qi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),yi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;qs.subVectors(r,i),$s.subVectors(s,i),Md.subVectors(e,i);const l=qs.dot(Md),c=$s.dot(Md);if(l<=0&&c<=0)return n.copy(i);Sd.subVectors(e,r);const d=qs.dot(Sd),f=$s.dot(Sd);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(qs,o);wd.subVectors(e,s);const p=qs.dot(wd),x=$s.dot(wd);if(x>=0&&p<=x)return n.copy(s);const w=p*c-l*x;if(w<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector($s,a);const g=d*x-p*f;if(g<=0&&f-d>=0&&p-x>=0)return og.subVectors(s,r),a=(f-d)/(f-d+(p-x)),n.copy(r).addScaledVector(og,a);const u=1/(g+w+h);return o=w*u,a=h*u,n.copy(i).addScaledVector(qs,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function bd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class pt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Tt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Tt.workingColorSpace){if(e=cS(e,1),n=ht(n,0,1),i=ht(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=bd(o,s,e+1/3),this.g=bd(o,s,e),this.b=bd(o,s,e-1/3)}return Tt.colorSpaceToWorking(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=Ax[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Tt.workingToColorSpace(Tn.copy(this),e),Math.round(ht(Tn.r*255,0,255))*65536+Math.round(ht(Tn.g*255,0,255))*256+Math.round(ht(Tn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(Tn.copy(this),n);const i=Tn.r,r=Tn.g,s=Tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(Tn.copy(this),n),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Gn){Tt.workingToColorSpace(Tn.copy(this),e);const n=Tn.r,i=Tn.g,r=Tn.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+n,yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(yr),e.getHSL(Vl);const i=cd(yr.h,Vl.h,n),r=cd(yr.s,Vl.s,n),s=cd(yr.l,Vl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new pt;pt.NAMES=Ax;let TS=0;class Cs extends Bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=ll(),this.name="",this.type="Material",this.blending=Mo,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hf,this.blendDst=Vf,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(i.blending=this.blending),this.side!==Gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hf&&(i.blendSrc=this.blendSrc),this.blendDst!==Vf&&(i.blendDst=this.blendDst),this.blendEquation!==us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tl extends Cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new k,Gl=new Ye;let AS=0;class Bi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Y0,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Gl.fromBufferAttribute(this,n),Gl.applyMatrix3(e),this.setXY(n,Gl.x,Gl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix3(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix4(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyNormalMatrix(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.transformDirection(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=aa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=aa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=aa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=aa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=aa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),i=Vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),i=Vn(i,this.array),r=Vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),i=Vn(i,this.array),r=Vn(r,this.array),s=Vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Y0&&(e.usage=this.usage),e}}class bx extends Bi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Cx extends Bi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yt extends Bi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let bS=0;const ai=new Vt,Cd=new gn,Ks=new k,Zn=new ul,da=new ul,hn=new k;class rn extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ex(e)?Cx:bx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,n,i){return ai.makeTranslation(e,n,i),this.applyMatrix4(ai),this}scale(e,n,i){return ai.makeScale(e,n,i),this.applyMatrix4(ai),this}lookAt(e){return Cd.lookAt(e),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];da.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Zn.min,da.min),Zn.expandByPoint(hn),hn.addVectors(Zn.max,da.max),Zn.expandByPoint(hn)):(Zn.expandByPoint(da.min),Zn.expandByPoint(da.max))}Zn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)hn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(hn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)hn.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(e,c),hn.add(Ks)),r=Math.max(r,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new k,l[N]=new k;const c=new k,d=new k,f=new k,h=new Ye,p=new Ye,x=new Ye,w=new k,g=new k;function u(N,E,S){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,E),x.fromBufferAttribute(s,S),d.sub(c),f.sub(c),p.sub(h),x.sub(h);const I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(w.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(I),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(I),a[N].add(w),a[E].add(w),a[S].add(w),l[N].add(g),l[E].add(g),l[S].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let N=0,E=m.length;N<E;++N){const S=m[N],I=S.start,H=S.count;for(let $=I,ie=I+H;$<ie;$+=3)u(e.getX($+0),e.getX($+1),e.getX($+2))}const v=new k,M=new k,C=new k,R=new k;function L(N){C.fromBufferAttribute(r,N),R.copy(C);const E=a[N];v.copy(E),v.sub(C.multiplyScalar(C.dot(E))).normalize(),M.crossVectors(R,E);const I=M.dot(l[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,I)}for(let N=0,E=m.length;N<E;++N){const S=m[N],I=S.start,H=S.count;for(let $=I,ie=I+H;$<ie;$+=3)L(e.getX($+0)),L(e.getX($+1)),L(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,d=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),w=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,w),o.fromBufferAttribute(n,g),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,g),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)hn.fromBufferAttribute(e,n),hn.normalize(),e.setXYZ(n,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let p=0,x=0;for(let w=0,g=l.length;w<g;w++){a.isInterleavedBufferAttribute?p=l[w]*a.data.stride+a.offset:p=l[w]*d;for(let u=0;u<d;u++)h[x++]=c[p++]}return new Bi(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ag=new Vt,ts=new Up,Wl=new pu,lg=new k,Xl=new k,jl=new k,Yl=new k,Rd=new k,ql=new k,cg=new k,$l=new k;class se extends gn{constructor(e=new rn,n=new tl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ql.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Rd.fromBufferAttribute(f,e),o?ql.addScaledVector(Rd,d):ql.addScaledVector(Rd.sub(n),d))}n.add(ql)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(s),ts.copy(e.ray).recast(e.near),!(Wl.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Wl,lg)===null||ts.origin.distanceToSquared(lg)>(e.far-e.near)**2))&&(ag.copy(s).invert(),ts.copy(e.ray).applyMatrix4(ag),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ts)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,w=h.length;x<w;x++){const g=h[x],u=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,C=v;M<C;M+=3){const R=a.getX(M),L=a.getX(M+1),N=a.getX(M+2);r=Kl(this,u,e,i,c,d,f,R,L,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),w=Math.min(a.count,p.start+p.count);for(let g=x,u=w;g<u;g+=3){const m=a.getX(g),v=a.getX(g+1),M=a.getX(g+2);r=Kl(this,o,e,i,c,d,f,m,v,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,w=h.length;x<w;x++){const g=h[x],u=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,C=v;M<C;M+=3){const R=M,L=M+1,N=M+2;r=Kl(this,u,e,i,c,d,f,R,L,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),w=Math.min(l.count,p.start+p.count);for(let g=x,u=w;g<u;g+=3){const m=g,v=g+1,M=g+2;r=Kl(this,o,e,i,c,d,f,m,v,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function CS(t,e,n,i,r,s,o,a){let l;if(e.side===$n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gr,a),l===null)return null;$l.copy(a),$l.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo($l);return c<n.near||c>n.far?null:{distance:c,point:$l.clone(),object:t}}function Kl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Xl),t.getVertexPosition(l,jl),t.getVertexPosition(c,Yl);const d=CS(t,e,n,i,Xl,jl,Yl,cg);if(d){const f=new k;Ti.getBarycoord(cg,Xl,jl,Yl,f),r&&(d.uv=Ti.getInterpolatedAttribute(r,a,l,c,f,new Ye)),s&&(d.uv1=Ti.getInterpolatedAttribute(s,a,l,c,f,new Ye)),o&&(d.normal=Ti.getInterpolatedAttribute(o,a,l,c,f,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};Ti.getNormal(Xl,jl,Yl,h.normal),d.face=h,d.barycoord=f}return d}class In extends rn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(f,2));function x(w,g,u,m,v,M,C,R,L,N,E){const S=M/L,I=C/N,H=M/2,$=C/2,ie=R/2,oe=L+1,V=N+1;let j=0,U=0;const K=new k;for(let ee=0;ee<V;ee++){const Me=ee*I-$;for(let Ue=0;Ue<oe;Ue++){const st=Ue*S-H;K[w]=st*m,K[g]=Me*v,K[u]=ie,c.push(K.x,K.y,K.z),K[w]=0,K[g]=0,K[u]=R>0?1:-1,d.push(K.x,K.y,K.z),f.push(Ue/L),f.push(1-ee/N),j+=1}}for(let ee=0;ee<N;ee++)for(let Me=0;Me<L;Me++){const Ue=h+Me+oe*ee,st=h+Me+oe*(ee+1),Pe=h+(Me+1)+oe*(ee+1),ce=h+(Me+1)+oe*ee;l.push(Ue,st,ce),l.push(st,Pe,ce),U+=6}a.addGroup(p,U,E),p+=U,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ln(t){const e={};for(let n=0;n<t.length;n++){const i=Fo(t[n]);for(const r in i)e[r]=i[r]}return e}function RS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Rx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const PS={clone:Fo,merge:Ln};var LS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wr extends Cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LS,this.fragmentShader=DS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=RS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Px extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new k,ug=new Ye,dg=new Ye;class Qn extends Px{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=bh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ld*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bh*2*Math.atan(Math.tan(ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,n){return this.getViewBounds(e,ug,dg),n.subVectors(dg,ug)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ld*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zs=-90,Js=1;class NS extends gn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qn(Zs,Js,e,n);r.layers=this.layers,this.add(r);const s=new Qn(Zs,Js,e,n);s.layers=this.layers,this.add(s);const o=new Qn(Zs,Js,e,n);o.layers=this.layers,this.add(o);const a=new Qn(Zs,Js,e,n);a.layers=this.layers,this.add(a);const l=new Qn(Zs,Js,e,n);l.layers=this.layers,this.add(l);const c=new Qn(Zs,Js,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Lx extends Fn{constructor(e=[],n=No,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IS extends Ts{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Lx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new In(5,5,5),s=new Wr({name:"CubemapFromEquirect",uniforms:Fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$n,blending:zr});s.uniforms.tEquirect.value=n;const o=new se(r,s),a=n.minFilter;return n.minFilter===gs&&(n.minFilter=Fi),new NS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Ze extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const US={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const w of e.hand.values()){const g=n.getJointPose(w,i),u=this._getHandJoint(c,w);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(US)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ze;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Op{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(e),this.density=n}clone(){return new Op(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class FS extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ld=new k,OS=new k,kS=new ot;class ls{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ld.subVectors(i,n).cross(OS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ld),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||kS.getNormalMatrix(e),r=this.coplanarPoint(Ld).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new pu,zS=new Ye(.5,.5),Zl=new k;class kp{constructor(e=new ls,n=new ls,i=new ls,r=new ls,s=new ls,o=new ls){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Oi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],f=s[5],h=s[6],p=s[7],x=s[8],w=s[9],g=s[10],u=s[11],m=s[12],v=s[13],M=s[14],C=s[15];if(r[0].setComponents(c-o,p-d,u-x,C-m).normalize(),r[1].setComponents(c+o,p+d,u+x,C+m).normalize(),r[2].setComponents(c+a,p+f,u+w,C+v).normalize(),r[3].setComponents(c-a,p-f,u-w,C-v).normalize(),i)r[4].setComponents(l,h,g,M).normalize(),r[5].setComponents(c-l,p-h,u-g,C-M).normalize();else if(r[4].setComponents(c-l,p-h,u-g,C-M).normalize(),n===Oi)r[5].setComponents(c+l,p+h,u+g,C+M).normalize();else if(n===Yc)r[5].setComponents(l,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const n=zS.distanceTo(e.center);return ns.radius=.7071067811865476+n,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Zl.x=r.normal.x>0?e.max.x:e.min.x,Zl.y=r.normal.y>0?e.max.y:e.min.y,Zl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ch extends Cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $c=new k,Kc=new k,fg=new Vt,fa=new Up,Jl=new pu,Dd=new k,hg=new k;class pg extends gn{constructor(e=new rn,n=new Ch){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)$c.fromBufferAttribute(n,r-1),Kc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=$c.distanceTo(Kc);e.setAttribute("lineDistance",new yt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(r),Jl.radius+=s,e.ray.intersectsSphere(Jl)===!1)return;fg.copy(r).invert(),fa.copy(e.ray).applyMatrix4(fg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let w=p,g=x-1;w<g;w+=c){const u=d.getX(w),m=d.getX(w+1),v=Ql(this,e,fa,l,u,m,w);v&&n.push(v)}if(this.isLineLoop){const w=d.getX(x-1),g=d.getX(p),u=Ql(this,e,fa,l,w,g,x-1);u&&n.push(u)}}else{const p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let w=p,g=x-1;w<g;w+=c){const u=Ql(this,e,fa,l,w,w+1,w);u&&n.push(u)}if(this.isLineLoop){const w=Ql(this,e,fa,l,x-1,p,x-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ql(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if($c.fromBufferAttribute(a,r),Kc.fromBufferAttribute(a,s),n.distanceSqToSegment($c,Kc,Dd,hg)>i)return;Dd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Dd);if(!(c<e.near||c>e.far))return{distance:c,point:hg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class BS extends Fn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dx extends Fn{constructor(e,n,i=Es,r,s,o,a=Ri,l=Ri,c,d=Ja,f=1){if(d!==Ja&&d!==Qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Nx extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class An extends rn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],d=n/2,f=Math.PI/2*e,h=n,p=2*f+h,x=i*2+s,w=r+1,g=new k,u=new k;for(let m=0;m<=x;m++){let v=0,M=0,C=0,R=0;if(m<=i){const E=m/i,S=E*Math.PI/2;M=-d-e*Math.cos(S),C=e*Math.sin(S),R=-e*Math.cos(S),v=E*f}else if(m<=i+s){const E=(m-i)/s;M=-d+E*n,C=e,R=0,v=f+E*h}else{const E=(m-i-s)/i,S=E*Math.PI/2;M=d+e*Math.sin(S),C=e*Math.cos(S),R=e*Math.sin(S),v=f+h+E*f}const L=Math.max(0,Math.min(1,v/p));let N=0;m===0?N=.5/r:m===x&&(N=-.5/r);for(let E=0;E<=r;E++){const S=E/r,I=S*Math.PI*2,H=Math.sin(I),$=Math.cos(I);u.x=-C*$,u.y=M,u.z=C*H,a.push(u.x,u.y,u.z),g.set(-C*$,R,C*H),g.normalize(),l.push(g.x,g.y,g.z),c.push(S+N,L)}if(m>0){const E=(m-1)*w;for(let S=0;S<r;S++){const I=E+S,H=E+S+1,$=m*w+S,ie=m*w+S+1;o.push(I,H,$),o.push(H,ie,$)}}}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Eo extends rn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new k,d=new Ye;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bt extends rn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],p=[];let x=0;const w=[],g=i/2;let u=0;m(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(p,2));function m(){const M=new k,C=new k;let R=0;const L=(n-e)/i;for(let N=0;N<=s;N++){const E=[],S=N/s,I=S*(n-e)+e;for(let H=0;H<=r;H++){const $=H/r,ie=$*l+a,oe=Math.sin(ie),V=Math.cos(ie);C.x=I*oe,C.y=-S*i+g,C.z=I*V,f.push(C.x,C.y,C.z),M.set(oe,L,V).normalize(),h.push(M.x,M.y,M.z),p.push($,1-S),E.push(x++)}w.push(E)}for(let N=0;N<r;N++)for(let E=0;E<s;E++){const S=w[E][N],I=w[E+1][N],H=w[E+1][N+1],$=w[E][N+1];(e>0||E!==0)&&(d.push(S,I,$),R+=3),(n>0||E!==s-1)&&(d.push(I,H,$),R+=3)}c.addGroup(u,R,0),u+=R}function v(M){const C=x,R=new Ye,L=new k;let N=0;const E=M===!0?e:n,S=M===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,g*S,0),h.push(0,S,0),p.push(.5,.5),x++;const I=x;for(let H=0;H<=r;H++){const ie=H/r*l+a,oe=Math.cos(ie),V=Math.sin(ie);L.x=E*V,L.y=g*S,L.z=E*oe,f.push(L.x,L.y,L.z),h.push(0,S,0),R.x=oe*.5+.5,R.y=V*.5*S+.5,p.push(R.x,R.y),x++}for(let H=0;H<r;H++){const $=C+H,ie=I+H;M===!0?d.push(ie,ie+1,$):d.push(ie+1,ie,$),N+=3}c.addGroup(u,N,M===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dn extends Bt{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Dn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zp extends rn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(s.slice(),3)),this.setAttribute("uv",new yt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const v=new k,M=new k,C=new k;for(let R=0;R<n.length;R+=3)p(n[R+0],v),p(n[R+1],M),p(n[R+2],C),l(v,M,C,m)}function l(m,v,M,C){const R=C+1,L=[];for(let N=0;N<=R;N++){L[N]=[];const E=m.clone().lerp(M,N/R),S=v.clone().lerp(M,N/R),I=R-N;for(let H=0;H<=I;H++)H===0&&N===R?L[N][H]=E:L[N][H]=E.clone().lerp(S,H/I)}for(let N=0;N<R;N++)for(let E=0;E<2*(R-N)-1;E++){const S=Math.floor(E/2);E%2===0?(h(L[N][S+1]),h(L[N+1][S]),h(L[N][S])):(h(L[N][S+1]),h(L[N+1][S+1]),h(L[N+1][S]))}}function c(m){const v=new k;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(m),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function d(){const m=new k;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const M=g(m)/2/Math.PI+.5,C=u(m)/Math.PI+.5;o.push(M,1-C)}x(),f()}function f(){for(let m=0;m<o.length;m+=6){const v=o[m+0],M=o[m+2],C=o[m+4],R=Math.max(v,M,C),L=Math.min(v,M,C);R>.9&&L<.1&&(v<.2&&(o[m+0]+=1),M<.2&&(o[m+2]+=1),C<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,v){const M=m*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function x(){const m=new k,v=new k,M=new k,C=new k,R=new Ye,L=new Ye,N=new Ye;for(let E=0,S=0;E<s.length;E+=9,S+=6){m.set(s[E+0],s[E+1],s[E+2]),v.set(s[E+3],s[E+4],s[E+5]),M.set(s[E+6],s[E+7],s[E+8]),R.set(o[S+0],o[S+1]),L.set(o[S+2],o[S+3]),N.set(o[S+4],o[S+5]),C.copy(m).add(v).add(M).divideScalar(3);const I=g(C);w(R,S+0,m,I),w(L,S+2,v,I),w(N,S+4,M,I)}}function w(m,v,M,C){C<0&&m.x===1&&(o[v]=m.x-1),M.x===0&&M.z===0&&(o[v]=C/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zp(e.vertices,e.indices,e.radius,e.details)}}class Jt extends zp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Jt(e.radius,e.detail)}}class cr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],h=i[r+1]-d,p=(o-d)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ye:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new k,r=[],s=[],o=[],a=new k,l=new Vt;for(let p=0;p<=e;p++){const x=p/e;r[p]=this.getTangentAt(x,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(ht(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(ht(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],p*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ix extends cr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ye){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*d-p*f+this.aX,c=h*f+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class HS extends Ix{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Bp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,f){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+f)+(l-a)/f;h*=d,p*=d,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const ec=new k,Nd=new Bp,Id=new Bp,Ud=new Bp;class Ux extends cr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new k){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(ec.subVectors(r[0],r[1]).add(r[0]),c=ec);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(ec.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=ec),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(f),p),w=Math.pow(f.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(d),p);w<1e-4&&(w=1),x<1e-4&&(x=w),g<1e-4&&(g=w),Nd.initNonuniformCatmullRom(c.x,f.x,h.x,d.x,x,w,g),Id.initNonuniformCatmullRom(c.y,f.y,h.y,d.y,x,w,g),Ud.initNonuniformCatmullRom(c.z,f.z,h.z,d.z,x,w,g)}else this.curveType==="catmullrom"&&(Nd.initCatmullRom(c.x,f.x,h.x,d.x,this.tension),Id.initCatmullRom(c.y,f.y,h.y,d.y,this.tension),Ud.initCatmullRom(c.z,f.z,h.z,d.z,this.tension));return i.set(Nd.calc(l),Id.calc(l),Ud.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function mg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function VS(t,e){const n=1-t;return n*n*e}function GS(t,e){return 2*(1-t)*t*e}function WS(t,e){return t*t*e}function La(t,e,n,i){return VS(t,e)+GS(t,n)+WS(t,i)}function XS(t,e){const n=1-t;return n*n*n*e}function jS(t,e){const n=1-t;return 3*n*n*t*e}function YS(t,e){return 3*(1-t)*t*t*e}function qS(t,e){return t*t*t*e}function Da(t,e,n,i,r){return XS(t,e)+jS(t,n)+YS(t,i)+qS(t,r)}class $S extends cr{constructor(e=new Ye,n=new Ye,i=new Ye,r=new Ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ye){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Da(e,r.x,s.x,o.x,a.x),Da(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class KS extends cr{constructor(e=new k,n=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Da(e,r.x,s.x,o.x,a.x),Da(e,r.y,s.y,o.y,a.y),Da(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ZS extends cr{constructor(e=new Ye,n=new Ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ye){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ye){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class JS extends cr{constructor(e=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new k){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QS extends cr{constructor(e=new Ye,n=new Ye,i=new Ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ye){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(La(e,r.x,s.x,o.x),La(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fx extends cr{constructor(e=new k,n=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(La(e,r.x,s.x,o.x),La(e,r.y,s.y,o.y),La(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class e2 extends cr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ye){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(mg(a,l.x,c.x,d.x,f.x),mg(a,l.y,c.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ye().fromArray(r))}return this}}var t2=Object.freeze({__proto__:null,ArcCurve:HS,CatmullRomCurve3:Ux,CubicBezierCurve:$S,CubicBezierCurve3:KS,EllipseCurve:Ix,LineCurve:ZS,LineCurve3:JS,QuadraticBezierCurve:QS,QuadraticBezierCurve3:Fx,SplineCurve:e2});class Pr extends rn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,p=[],x=[],w=[],g=[];for(let u=0;u<d;u++){const m=u*h-o;for(let v=0;v<c;v++){const M=v*f-s;x.push(M,-m,0),w.push(0,0,1),g.push(v/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const v=m+c*u,M=m+c*(u+1),C=m+1+c*(u+1),R=m+1+c*u;p.push(v,M,R),p.push(M,C,R)}this.setIndex(p),this.setAttribute("position",new yt(x,3)),this.setAttribute("normal",new yt(w,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hp extends rn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let f=e;const h=(n-e)/r,p=new k,x=new Ye;for(let w=0;w<=r;w++){for(let g=0;g<=i;g++){const u=s+g/i*o;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/n+1)/2,x.y=(p.y/n+1)/2,d.push(x.x,x.y)}f+=h}for(let w=0;w<r;w++){const g=w*(i+1);for(let u=0;u<i;u++){const m=u+g,v=m,M=m+i+1,C=m+i+2,R=m+1;a.push(v,M,R),a.push(M,C,R)}}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Qt extends rn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new k,h=new k,p=[],x=[],w=[],g=[];for(let u=0;u<=i;u++){const m=[],v=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let C=0;C<=n;C++){const R=C/n;f.x=-e*Math.cos(r+R*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+R*s)*Math.sin(o+v*a),x.push(f.x,f.y,f.z),h.copy(f).normalize(),w.push(h.x,h.y,h.z),g.push(R+M,1-v),m.push(c++)}d.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const v=d[u][m+1],M=d[u][m],C=d[u+1][m],R=d[u+1][m+1];(u!==0||o>0)&&p.push(v,M,R),(u!==i-1||l<Math.PI)&&p.push(M,C,R)}this.setIndex(p),this.setAttribute("position",new yt(x,3)),this.setAttribute("normal",new yt(w,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class on extends rn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new k,f=new k,h=new k;for(let p=0;p<=i;p++)for(let x=0;x<=r;x++){const w=x/r*s,g=p/i*Math.PI*2;f.x=(e+n*Math.cos(g))*Math.cos(w),f.y=(e+n*Math.cos(g))*Math.sin(w),f.z=n*Math.sin(g),a.push(f.x,f.y,f.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(x/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let x=1;x<=r;x++){const w=(r+1)*p+x-1,g=(r+1)*(p-1)+x-1,u=(r+1)*(p-1)+x,m=(r+1)*p+x;o.push(w,g,m),o.push(g,u,m)}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Vp extends rn{constructor(e=new Fx(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new k,l=new k,c=new Ye;let d=new k;const f=[],h=[],p=[],x=[];w(),this.setIndex(x),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(p,2));function w(){for(let v=0;v<n;v++)g(v);g(s===!1?n:0),m(),u()}function g(v){d=e.getPointAt(v/n,d);const M=o.normals[v],C=o.binormals[v];for(let R=0;R<=r;R++){const L=R/r*Math.PI*2,N=Math.sin(L),E=-Math.cos(L);l.x=E*M.x+N*C.x,l.y=E*M.y+N*C.y,l.z=E*M.z+N*C.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let v=1;v<=n;v++)for(let M=1;M<=r;M++){const C=(r+1)*(v-1)+(M-1),R=(r+1)*v+(M-1),L=(r+1)*v+M,N=(r+1)*(v-1)+M;x.push(C,R,N),x.push(R,L,N)}}function m(){for(let v=0;v<=n;v++)for(let M=0;M<=r;M++)c.x=v/n,c.y=M/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Vp(new t2[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class xt extends Cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Np,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qs extends Cs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Np,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class n2 extends Cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class i2 extends Cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gp extends gn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class r2 extends Gp{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Fd=new Vt,gg=new k,vg=new k;class Ox{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=Hi,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kp,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;gg.setFromMatrixPosition(e.matrixWorld),n.position.copy(gg),vg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(vg),n.updateMatrixWorld(),Fd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _g=new Vt,ha=new k,Od=new k;class s2 extends Ox{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ha.setFromMatrixPosition(e.matrixWorld),i.position.copy(ha),Od.copy(i.position),Od.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Od),i.updateMatrixWorld(),r.makeTranslation(-ha.x,-ha.y,-ha.z),_g.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_g,i.coordinateSystem,i.reversedDepth)}}class pa extends Gp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new s2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kx extends Px{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class o2 extends Ox{constructor(){super(new kx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xg extends Gp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new o2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class a2 extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yg=new Vt;class l2{constructor(e,n,i=0,r=1/0){this.ray=new Up(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Fp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return yg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yg),this}intersectObject(e,n=!0,i=[]){return Rh(e,this,i,n),i.sort(Mg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Rh(e[r],this,i,n);return i.sort(Mg),i}}function Mg(t,e){return t.distance-e.distance}function Rh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Rh(s[o],e,n,!0)}}function Sg(t,e,n,i){const r=c2(i);switch(n){case xx:return t*e;case Mx:return t*e/r.components*r.byteLength;case Pp:return t*e/r.components*r.byteLength;case Sx:return t*e*2/r.components*r.byteLength;case Lp:return t*e*2/r.components*r.byteLength;case yx:return t*e*3/r.components*r.byteLength;case Ai:return t*e*4/r.components*r.byteLength;case Dp:return t*e*4/r.components*r.byteLength;case vc:case _c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xc:case yc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eh:case nh:return Math.max(t,16)*Math.max(e,8)/4;case Qf:case th:return Math.max(t,8)*Math.max(e,8)/2;case ih:case rh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case uh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case dh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case fh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ph:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case gh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case vh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case _h:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case xh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case yh:case Mh:case Sh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case wh:case Eh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Th:case Ah:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function c2(t){switch(t){case Hi:case mx:return{byteLength:1,components:1};case Ka:case gx:case al:return{byteLength:2,components:1};case Cp:case Rp:return{byteLength:2,components:4};case Es:case bp:case tr:return{byteLength:4,components:1};case vx:case _x:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function u2(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){const x=f[h],w=f[p];w.start<=x.start+x.count+1?x.count=Math.max(x.count,w.start+w.count-x.start):(++h,f[h]=w)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){const w=f[p];t.bufferSubData(c,w.start*d.BYTES_PER_ELEMENT,d,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var d2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f2=`#ifdef USE_ALPHAHASH
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
#endif`,h2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v2=`#ifdef USE_AOMAP
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
#endif`,_2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x2=`#ifdef USE_BATCHING
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
#endif`,y2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E2=`#ifdef USE_IRIDESCENCE
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
#endif`,T2=`#ifdef USE_BUMPMAP
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
#endif`,A2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,I2=`#define PI 3.141592653589793
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
} // validated`,U2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F2=`vec3 transformedNormal = objectNormal;
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
#endif`,O2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H2="gl_FragColor = linearToOutputTexel( gl_FragColor );",V2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G2=`#ifdef USE_ENVMAP
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
#endif`,W2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X2=`#ifdef USE_ENVMAP
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
#endif`,j2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y2=`#ifdef USE_ENVMAP
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
#endif`,q2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J2=`#ifdef USE_GRADIENTMAP
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
}`,Q2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ew=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nw=`uniform bool receiveShadow;
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
#endif`,iw=`#ifdef USE_ENVMAP
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
#endif`,rw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ow=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lw=`PhysicalMaterial material;
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
#endif`,cw=`struct PhysicalMaterial {
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
}`,uw=`
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
#endif`,dw=`#if defined( RE_IndirectDiffuse )
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
#endif`,fw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_w=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yw=`#if defined( USE_POINTS_UV )
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
#endif`,Mw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ww=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ew=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Aw=`#ifdef USE_MORPHTARGETS
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
#endif`,bw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nw=`#ifdef USE_NORMALMAP
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
#endif`,Iw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ow=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ww=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$w=`float getShadowMask() {
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
}`,Kw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zw=`#ifdef USE_SKINNING
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
#endif`,Jw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qw=`#ifdef USE_SKINNING
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
#endif`,eE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rE=`#ifdef USE_TRANSMISSION
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
#endif`,sE=`#ifdef USE_TRANSMISSION
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
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dE=`uniform sampler2D t2D;
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
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`#include <common>
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
}`,vE=`#if DEPTH_PACKING == 3200
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
}`,_E=`#define DISTANCE
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
}`,xE=`#define DISTANCE
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
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ME=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`uniform float scale;
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
}`,wE=`uniform vec3 diffuse;
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
}`,EE=`#include <common>
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
}`,TE=`uniform vec3 diffuse;
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
}`,AE=`#define LAMBERT
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
}`,bE=`#define LAMBERT
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
}`,CE=`#define MATCAP
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
}`,RE=`#define MATCAP
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
}`,PE=`#define NORMAL
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
}`,LE=`#define NORMAL
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
}`,DE=`#define PHONG
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
}`,NE=`#define PHONG
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
}`,IE=`#define STANDARD
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
}`,UE=`#define STANDARD
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
}`,FE=`#define TOON
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
}`,OE=`#define TOON
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
}`,kE=`uniform float size;
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
}`,zE=`uniform vec3 diffuse;
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
}`,BE=`#include <common>
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
}`,HE=`uniform vec3 color;
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
}`,VE=`uniform float rotation;
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
}`,GE=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:d2,alphahash_pars_fragment:f2,alphamap_fragment:h2,alphamap_pars_fragment:p2,alphatest_fragment:m2,alphatest_pars_fragment:g2,aomap_fragment:v2,aomap_pars_fragment:_2,batching_pars_vertex:x2,batching_vertex:y2,begin_vertex:M2,beginnormal_vertex:S2,bsdfs:w2,iridescence_fragment:E2,bumpmap_pars_fragment:T2,clipping_planes_fragment:A2,clipping_planes_pars_fragment:b2,clipping_planes_pars_vertex:C2,clipping_planes_vertex:R2,color_fragment:P2,color_pars_fragment:L2,color_pars_vertex:D2,color_vertex:N2,common:I2,cube_uv_reflection_fragment:U2,defaultnormal_vertex:F2,displacementmap_pars_vertex:O2,displacementmap_vertex:k2,emissivemap_fragment:z2,emissivemap_pars_fragment:B2,colorspace_fragment:H2,colorspace_pars_fragment:V2,envmap_fragment:G2,envmap_common_pars_fragment:W2,envmap_pars_fragment:X2,envmap_pars_vertex:j2,envmap_physical_pars_fragment:iw,envmap_vertex:Y2,fog_vertex:q2,fog_pars_vertex:$2,fog_fragment:K2,fog_pars_fragment:Z2,gradientmap_pars_fragment:J2,lightmap_pars_fragment:Q2,lights_lambert_fragment:ew,lights_lambert_pars_fragment:tw,lights_pars_begin:nw,lights_toon_fragment:rw,lights_toon_pars_fragment:sw,lights_phong_fragment:ow,lights_phong_pars_fragment:aw,lights_physical_fragment:lw,lights_physical_pars_fragment:cw,lights_fragment_begin:uw,lights_fragment_maps:dw,lights_fragment_end:fw,logdepthbuf_fragment:hw,logdepthbuf_pars_fragment:pw,logdepthbuf_pars_vertex:mw,logdepthbuf_vertex:gw,map_fragment:vw,map_pars_fragment:_w,map_particle_fragment:xw,map_particle_pars_fragment:yw,metalnessmap_fragment:Mw,metalnessmap_pars_fragment:Sw,morphinstance_vertex:ww,morphcolor_vertex:Ew,morphnormal_vertex:Tw,morphtarget_pars_vertex:Aw,morphtarget_vertex:bw,normal_fragment_begin:Cw,normal_fragment_maps:Rw,normal_pars_fragment:Pw,normal_pars_vertex:Lw,normal_vertex:Dw,normalmap_pars_fragment:Nw,clearcoat_normal_fragment_begin:Iw,clearcoat_normal_fragment_maps:Uw,clearcoat_pars_fragment:Fw,iridescence_pars_fragment:Ow,opaque_fragment:kw,packing:zw,premultiplied_alpha_fragment:Bw,project_vertex:Hw,dithering_fragment:Vw,dithering_pars_fragment:Gw,roughnessmap_fragment:Ww,roughnessmap_pars_fragment:Xw,shadowmap_pars_fragment:jw,shadowmap_pars_vertex:Yw,shadowmap_vertex:qw,shadowmask_pars_fragment:$w,skinbase_vertex:Kw,skinning_pars_vertex:Zw,skinning_vertex:Jw,skinnormal_vertex:Qw,specularmap_fragment:eE,specularmap_pars_fragment:tE,tonemapping_fragment:nE,tonemapping_pars_fragment:iE,transmission_fragment:rE,transmission_pars_fragment:sE,uv_pars_fragment:oE,uv_pars_vertex:aE,uv_vertex:lE,worldpos_vertex:cE,background_vert:uE,background_frag:dE,backgroundCube_vert:fE,backgroundCube_frag:hE,cube_vert:pE,cube_frag:mE,depth_vert:gE,depth_frag:vE,distanceRGBA_vert:_E,distanceRGBA_frag:xE,equirect_vert:yE,equirect_frag:ME,linedashed_vert:SE,linedashed_frag:wE,meshbasic_vert:EE,meshbasic_frag:TE,meshlambert_vert:AE,meshlambert_frag:bE,meshmatcap_vert:CE,meshmatcap_frag:RE,meshnormal_vert:PE,meshnormal_frag:LE,meshphong_vert:DE,meshphong_frag:NE,meshphysical_vert:IE,meshphysical_frag:UE,meshtoon_vert:FE,meshtoon_frag:OE,points_vert:kE,points_frag:zE,shadow_vert:BE,shadow_frag:HE,sprite_vert:VE,sprite_frag:GE},Ie={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ii={basic:{uniforms:Ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new pt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Ln([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Ln([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new pt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Ln([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Ln([Ie.points,Ie.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Ln([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Ln([Ie.common,Ie.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Ln([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Ln([Ie.sprite,Ie.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Ln([Ie.common,Ie.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Ln([Ie.lights,Ie.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Ii.physical={uniforms:Ln([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const tc={r:0,b:0,g:0},is=new Li,WE=new Vt;function XE(t,e,n,i,r,s,o){const a=new pt(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function x(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?n:e).get(M)),M}function w(v){let M=!1;const C=x(v);C===null?u(a,l):C&&C.isColor&&(u(C,1),M=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,M){const C=x(M);C&&(C.isCubeTexture||C.mapping===hu)?(d===void 0&&(d=new se(new In(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:Fo(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),is.copy(M.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(WE.makeRotationFromEuler(is)),d.material.toneMapped=Tt.getTransfer(C.colorSpace)!==It,(f!==C||h!==C.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new se(new Pr(2,2),new Wr({name:"BackgroundMaterial",uniforms:Fo(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Tt.getTransfer(C.colorSpace)!==It,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,M){v.getRGB(tc,Rx(t)),i.buffers.color.setClear(tc.r,tc.g,tc.b,M,o)}function m(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),l=M,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:w,addToRenderList:g,dispose:m}}function jE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,I,H,$,ie){let oe=!1;const V=f($,H,I);s!==V&&(s=V,c(s.object)),oe=p(S,$,H,ie),oe&&x(S,$,H,ie),ie!==null&&e.update(ie,t.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,M(S,I,H,$),ie!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function f(S,I,H){const $=H.wireframe===!0;let ie=i[S.id];ie===void 0&&(ie={},i[S.id]=ie);let oe=ie[I.id];oe===void 0&&(oe={},ie[I.id]=oe);let V=oe[$];return V===void 0&&(V=h(l()),oe[$]=V),V}function h(S){const I=[],H=[],$=[];for(let ie=0;ie<n;ie++)I[ie]=0,H[ie]=0,$[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:$,object:S,attributes:{},index:null}}function p(S,I,H,$){const ie=s.attributes,oe=I.attributes;let V=0;const j=H.getAttributes();for(const U in j)if(j[U].location>=0){const ee=ie[U];let Me=oe[U];if(Me===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),ee===void 0||ee.attribute!==Me||Me&&ee.data!==Me.data)return!0;V++}return s.attributesNum!==V||s.index!==$}function x(S,I,H,$){const ie={},oe=I.attributes;let V=0;const j=H.getAttributes();for(const U in j)if(j[U].location>=0){let ee=oe[U];ee===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor));const Me={};Me.attribute=ee,ee&&ee.data&&(Me.data=ee.data),ie[U]=Me,V++}s.attributes=ie,s.attributesNum=V,s.index=$}function w(){const S=s.newAttributes;for(let I=0,H=S.length;I<H;I++)S[I]=0}function g(S){u(S,0)}function u(S,I){const H=s.newAttributes,$=s.enabledAttributes,ie=s.attributeDivisors;H[S]=1,$[S]===0&&(t.enableVertexAttribArray(S),$[S]=1),ie[S]!==I&&(t.vertexAttribDivisor(S,I),ie[S]=I)}function m(){const S=s.newAttributes,I=s.enabledAttributes;for(let H=0,$=I.length;H<$;H++)I[H]!==S[H]&&(t.disableVertexAttribArray(H),I[H]=0)}function v(S,I,H,$,ie,oe,V){V===!0?t.vertexAttribIPointer(S,I,H,ie,oe):t.vertexAttribPointer(S,I,H,$,ie,oe)}function M(S,I,H,$){w();const ie=$.attributes,oe=H.getAttributes(),V=I.defaultAttributeValues;for(const j in oe){const U=oe[j];if(U.location>=0){let K=ie[j];if(K===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const ee=K.normalized,Me=K.itemSize,Ue=e.get(K);if(Ue===void 0)continue;const st=Ue.buffer,Pe=Ue.type,ce=Ue.bytesPerElement,B=Pe===t.INT||Pe===t.UNSIGNED_INT||K.gpuType===bp;if(K.isInterleavedBufferAttribute){const fe=K.data,Fe=fe.stride,Je=K.offset;if(fe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<U.locationSize;Ce++)u(U.location+Ce,fe.meshPerAttribute);S.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ce=0;Ce<U.locationSize;Ce++)g(U.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,st);for(let Ce=0;Ce<U.locationSize;Ce++)v(U.location+Ce,Me/U.locationSize,Pe,ee,Fe*ce,(Je+Me/U.locationSize*Ce)*ce,B)}else{if(K.isInstancedBufferAttribute){for(let fe=0;fe<U.locationSize;fe++)u(U.location+fe,K.meshPerAttribute);S.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let fe=0;fe<U.locationSize;fe++)g(U.location+fe);t.bindBuffer(t.ARRAY_BUFFER,st);for(let fe=0;fe<U.locationSize;fe++)v(U.location+fe,Me/U.locationSize,Pe,ee,Me*ce,Me/U.locationSize*fe*ce,B)}}else if(V!==void 0){const ee=V[j];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(U.location,ee);break;case 3:t.vertexAttrib3fv(U.location,ee);break;case 4:t.vertexAttrib4fv(U.location,ee);break;default:t.vertexAttrib1fv(U.location,ee)}}}}m()}function C(){N();for(const S in i){const I=i[S];for(const H in I){const $=I[H];for(const ie in $)d($[ie].object),delete $[ie];delete I[H]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const H in I){const $=I[H];for(const ie in $)d($[ie].object),delete $[ie];delete I[H]}delete i[S.id]}function L(S){for(const I in i){const H=i[I];if(H[S.id]===void 0)continue;const $=H[S.id];for(const ie in $)d($[ie].object),delete $[ie];delete H[S.id]}}function N(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:g,disableUnusedAttributes:m}}function YE(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let x=0;x<f;x++)p+=d[x];n.update(p,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],d[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let x=0;for(let w=0;w<f;w++)x+=d[w]*h[w];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==Ai&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const N=L===al&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Hi&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==tr&&!N)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:w,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:C,maxSamples:R}}function $E(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ls,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,w=f.clipIntersection,g=f.clipShadows,u=t.get(f);if(!r||x===null||x.length===0||s&&!g)s?d(null):c();else{const m=s?0:i,v=m*4;let M=u.clippingState||null;l.value=M,M=d(x,h,v,p);for(let C=0;C!==v;++C)M[C]=n[C];u.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,x){const w=f!==null?f.length:0;let g=null;if(w!==0){if(g=l.value,x!==!0||g===null){const u=p+w*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<u)&&(g=new Float32Array(u));for(let v=0,M=p;v!==w;++v,M+=4)o.copy(f[v]).applyMatrix4(m,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,g}}function KE(t){let e=new WeakMap;function n(o,a){return a===Kf?o.mapping=No:a===Zf&&(o.mapping=Io),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kf||a===Zf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new IS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const po=4,wg=[.125,.215,.35,.446,.526,.582],ds=20,kd=new kx,Eg=new pt;let zd=null,Bd=0,Hd=0,Vd=!1;const cs=(1+Math.sqrt(5))/2,eo=1/cs,Tg=[new k(-cs,eo,0),new k(cs,eo,0),new k(-eo,0,cs),new k(eo,0,cs),new k(0,cs,-eo),new k(0,cs,eo),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],ZE=new k;class Ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=ZE}=s;zd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zd,Bd,Hd),this._renderer.xr.enabled=Vd,e.scissorTest=!1,nc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===No||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:al,format:Ai,colorSpace:Uo,depthBuffer:!1},r=bg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JE(s)),this._blurMaterial=QE(s,e,n)}return r}_compileMaterial(e){const n=new se(this._lodPlanes[0],e);this._renderer.compile(n,kd)}_sceneToCubeUV(e,n,i,r,s){const l=new Qn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Eg),f.toneMapping=Br,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const w=new tl({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),g=new se(new In,w);let u=!1;const m=e.background;m?m.isColor&&(w.color.copy(m),e.background=null,u=!0):(w.color.copy(Eg),u=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[v],s.y,s.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[v]));const C=this._cubeSize;nc(r,M*C,v>2?C:0,C,C),f.setRenderTarget(r),u&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===No||e.mapping===Io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;nc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,kd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Tg[(r-s-1)%Tg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new se(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ds-1),w=s/x,g=isFinite(s)?1+Math.floor(d*w):ds;g>ds&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ds}`);const u=[];let m=0;for(let L=0;L<ds;++L){const N=L/w,E=Math.exp(-N*N/2);u.push(E),L===0?m+=E:L<g&&(m+=2*E)}for(let L=0;L<u.length;L++)u[L]=u[L]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const M=this._sizeLods[r],C=3*M*(r>v-po?r-v+po:0),R=4*(this._cubeSize-M);nc(n,C,R,3*M,2*M),l.setRenderTarget(n),l.render(f,kd)}}function JE(t){const e=[],n=[],i=[];let r=t;const s=t-po+1+wg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-po?l=wg[o-t+po-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,x=6,w=3,g=2,u=1,m=new Float32Array(w*x*p),v=new Float32Array(g*x*p),M=new Float32Array(u*x*p);for(let R=0;R<p;R++){const L=R%3*2/3-1,N=R>2?0:-1,E=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];m.set(E,w*x*R),v.set(h,g*x*R);const S=[R,R,R,R,R,R];M.set(S,u*x*R)}const C=new rn;C.setAttribute("position",new Bi(m,w)),C.setAttribute("uv",new Bi(v,g)),C.setAttribute("faceIndex",new Bi(M,u)),e.push(C),r>po&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bg(t,e,n){const i=new Ts(t,e,n);return i.texture.mapping=hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function QE(t,e,n){const i=new Float32Array(ds),r=new k(0,1,0);return new Wr({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wp(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function Cg(){return new Wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wp(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function Rg(){return new Wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zr,depthTest:!1,depthWrite:!1})}function Wp(){return`

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
	`}function eT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Kf||l===Zf,d=l===No||l===Io;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Ag(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Ag(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function tT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&el("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,x=f.attributes.position;let w=0;if(p!==null){const m=p.array;w=p.version;for(let v=0,M=m.length;v<M;v+=3){const C=m[v+0],R=m[v+1],L=m[v+2];h.push(C,R,R,L,L,C)}}else if(x!==void 0){const m=x.array;w=x.version;for(let v=0,M=m.length/3-1;v<M;v+=3){const C=v+0,R=v+1,L=v+2;h.push(C,R,R,L,L,C)}}else return;const g=new(Ex(h)?Cx:bx)(h,1);g.version=w;const u=s.get(f);u&&e.remove(u),s.set(f,g)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function iT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,h*o,x),n.update(p,i,x))}function d(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,x);let g=0;for(let u=0;u<x;u++)g+=p[u];n.update(g,i,1)}function f(h,p,x,w){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],w[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,w,0,x);let u=0;for(let m=0;m<x;m++)u+=p[m]*w[m];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function rT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sT(t,e,n){const i=new WeakMap,r=new Ut;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;x===!0&&(M=1),w===!0&&(M=2),g===!0&&(M=3);let C=a.attributes.position.count*M,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const L=new Float32Array(C*R*4*f),N=new Tx(L,C,R,f);N.type=tr,N.needsUpdate=!0;const E=M*4;for(let I=0;I<f;I++){const H=u[I],$=m[I],ie=v[I],oe=C*R*4*I;for(let V=0;V<H.count;V++){const j=V*E;x===!0&&(r.fromBufferAttribute(H,V),L[oe+j+0]=r.x,L[oe+j+1]=r.y,L[oe+j+2]=r.z,L[oe+j+3]=0),w===!0&&(r.fromBufferAttribute($,V),L[oe+j+4]=r.x,L[oe+j+5]=r.y,L[oe+j+6]=r.z,L[oe+j+7]=0),g===!0&&(r.fromBufferAttribute(ie,V),L[oe+j+8]=r.x,L[oe+j+9]=r.y,L[oe+j+10]=r.z,L[oe+j+11]=ie.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new Ye(C,R)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const w=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",w),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function oT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Bx=new Fn,Pg=new Dx(1,1),Hx=new Tx,Vx=new vS,Gx=new Lx,Lg=[],Dg=[],Ng=new Float32Array(16),Ig=new Float32Array(9),Ug=new Float32Array(4);function Ho(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Lg[r];if(s===void 0&&(s=new Float32Array(r),Lg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function cn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function un(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mu(t,e){let n=Dg[e];n===void 0&&(n=new Int32Array(e),Dg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;t.uniform2fv(this.addr,e),un(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(cn(n,e))return;t.uniform3fv(this.addr,e),un(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;t.uniform4fv(this.addr,e),un(n,e)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(cn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),un(n,e)}else{if(cn(n,i))return;Ug.set(i),t.uniformMatrix2fv(this.addr,!1,Ug),un(n,i)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(cn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),un(n,e)}else{if(cn(n,i))return;Ig.set(i),t.uniformMatrix3fv(this.addr,!1,Ig),un(n,i)}}function hT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(cn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),un(n,e)}else{if(cn(n,i))return;Ng.set(i),t.uniformMatrix4fv(this.addr,!1,Ng),un(n,i)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;t.uniform2iv(this.addr,e),un(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;t.uniform3iv(this.addr,e),un(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;t.uniform4iv(this.addr,e),un(n,e)}}function _T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;t.uniform2uiv(this.addr,e),un(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;t.uniform3uiv(this.addr,e),un(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;t.uniform4uiv(this.addr,e),un(n,e)}}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Pg.compareFunction=wx,s=Pg):s=Bx,n.setTexture2D(e||s,r)}function wT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vx,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Gx,r)}function TT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Hx,r)}function AT(t){switch(t){case 5126:return aT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return dT;case 35675:return fT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return vT;case 5125:return _T;case 36294:return xT;case 36295:return yT;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return TT}}function bT(t,e){t.uniform1fv(this.addr,e)}function CT(t,e){const n=Ho(e,this.size,2);t.uniform2fv(this.addr,n)}function RT(t,e){const n=Ho(e,this.size,3);t.uniform3fv(this.addr,n)}function PT(t,e){const n=Ho(e,this.size,4);t.uniform4fv(this.addr,n)}function LT(t,e){const n=Ho(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function DT(t,e){const n=Ho(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function NT(t,e){const n=Ho(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function IT(t,e){t.uniform1iv(this.addr,e)}function UT(t,e){t.uniform2iv(this.addr,e)}function FT(t,e){t.uniform3iv(this.addr,e)}function OT(t,e){t.uniform4iv(this.addr,e)}function kT(t,e){t.uniform1uiv(this.addr,e)}function zT(t,e){t.uniform2uiv(this.addr,e)}function BT(t,e){t.uniform3uiv(this.addr,e)}function HT(t,e){t.uniform4uiv(this.addr,e)}function VT(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);cn(i,s)||(t.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Bx,s[o])}function GT(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);cn(i,s)||(t.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Vx,s[o])}function WT(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);cn(i,s)||(t.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Gx,s[o])}function XT(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);cn(i,s)||(t.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Hx,s[o])}function jT(t){switch(t){case 5126:return bT;case 35664:return CT;case 35665:return RT;case 35666:return PT;case 35674:return LT;case 35675:return DT;case 35676:return NT;case 5124:case 35670:return IT;case 35667:case 35671:return UT;case 35668:case 35672:return FT;case 35669:case 35673:return OT;case 5125:return kT;case 36294:return zT;case 36295:return BT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return XT}}class YT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=AT(n.type)}}class qT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jT(n.type)}}class $T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Gd=/(\w+)(\])?(\[|\.)?/g;function Fg(t,e){t.seq.push(e),t.map[e.id]=e}function KT(t,e,n){const i=t.name,r=i.length;for(Gd.lastIndex=0;;){const s=Gd.exec(i),o=Gd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Fg(n,c===void 0?new YT(a,t,e):new qT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new $T(a),Fg(n,f)),n=f}}}class Mc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);KT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Og(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ZT=37297;let JT=0;function QT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const kg=new ot;function eA(t){Tt._getMatrix(kg,Tt.workingColorSpace,t);const e=`mat3( ${kg.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(t)){case jc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function zg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+QT(t.getShaderSource(e),a)}else return s}function tA(t,e){const n=eA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nA(t,e){let n;switch(e){case jM:n="Linear";break;case YM:n="Reinhard";break;case qM:n="Cineon";break;case hx:n="ACESFilmic";break;case KM:n="AgX";break;case ZM:n="Neutral";break;case $M:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ic=new k;function iA(){Tt.getLuminanceCoefficients(ic);const t=ic.x.toFixed(4),e=ic.y.toFixed(4),n=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function sA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ma(t){return t!==""}function Bg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(t){return t.replace(aA,cA)}const lA=new Map;function cA(t,e){let n=lt[e];if(n===void 0){const i=lA.get(e);if(i!==void 0)n=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ph(n)}const uA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vg(t){return t.replace(uA,dA)}function dA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function fA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===dx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===fx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function hA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case No:case Io:e="ENVMAP_TYPE_CUBE";break;case hu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Io:e="ENVMAP_MODE_REFRACTION";break}return e}function mA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ap:e="ENVMAP_BLENDING_MULTIPLY";break;case WM:e="ENVMAP_BLENDING_MIX";break;case XM:e="ENVMAP_BLENDING_ADD";break}return e}function gA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=fA(n),c=hA(n),d=pA(n),f=mA(n),h=gA(n),p=rA(n),x=sA(s),w=r.createProgram();let g,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ma).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ma).join(`
`),u.length>0&&(u+=`
`)):(g=[Gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),u=[Gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Br?"#define TONE_MAPPING":"",n.toneMapping!==Br?lt.tonemapping_pars_fragment:"",n.toneMapping!==Br?nA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,tA("linearToOutputTexel",n.outputColorSpace),iA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ma).join(`
`)),o=Ph(o),o=Bg(o,n),o=Hg(o,n),a=Ph(a),a=Bg(a,n),a=Hg(a,n),o=Vg(o),a=Vg(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=m+g+o,M=m+u+a,C=Og(r,r.VERTEX_SHADER,v),R=Og(r,r.FRAGMENT_SHADER,M);r.attachShader(w,C),r.attachShader(w,R),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function L(I){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(w)||"",$=r.getShaderInfoLog(C)||"",ie=r.getShaderInfoLog(R)||"",oe=H.trim(),V=$.trim(),j=ie.trim();let U=!0,K=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,w,C,R);else{const ee=zg(r,C,"vertex"),Me=zg(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+oe+`
`+ee+`
`+Me)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(V===""||j==="")&&(K=!1);K&&(I.diagnostics={runnable:U,programLog:oe,vertexShader:{log:V,prefix:g},fragmentShader:{log:j,prefix:u}})}r.deleteShader(C),r.deleteShader(R),N=new Mc(r,w),E=oA(r,w)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(w,ZT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=C,this.fragmentShader=R,this}let _A=0;class xA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yA(e),n.set(e,i)),i}}class yA{constructor(e){this.id=_A++,this.code=e,this.usedTimes=0}}function MA(t,e,n,i,r,s,o){const a=new Fp,l=new xA,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,S,I,H,$){const ie=H.fog,oe=$.geometry,V=E.isMeshStandardMaterial?H.environment:null,j=(E.isMeshStandardMaterial?n:e).get(E.envMap||V),U=j&&j.mapping===hu?j.image.height:null,K=x[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ee=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Me=ee!==void 0?ee.length:0;let Ue=0;oe.morphAttributes.position!==void 0&&(Ue=1),oe.morphAttributes.normal!==void 0&&(Ue=2),oe.morphAttributes.color!==void 0&&(Ue=3);let st,Pe,ce,B;if(K){const gt=Ii[K];st=gt.vertexShader,Pe=gt.fragmentShader}else st=E.vertexShader,Pe=E.fragmentShader,l.update(E),ce=l.getVertexShaderID(E),B=l.getFragmentShaderID(E);const fe=t.getRenderTarget(),Fe=t.state.buffers.depth.getReversed(),Je=$.isInstancedMesh===!0,Ce=$.isBatchedMesh===!0,ct=!!E.map,Zt=!!E.matcap,F=!!j,wt=!!E.aoMap,nt=!!E.lightMap,He=!!E.bumpMap,O=!!E.normalMap,Re=!!E.displacementMap,re=!!E.emissiveMap,ae=!!E.metalnessMap,qe=!!E.roughnessMap,Qe=E.anisotropy>0,D=E.clearcoat>0,T=E.dispersion>0,q=E.iridescence>0,de=E.sheen>0,pe=E.transmission>0,ue=Qe&&!!E.anisotropyMap,Ne=D&&!!E.clearcoatMap,me=D&&!!E.clearcoatNormalMap,Ve=D&&!!E.clearcoatRoughnessMap,We=q&&!!E.iridescenceMap,ge=q&&!!E.iridescenceThicknessMap,Se=de&&!!E.sheenColorMap,et=de&&!!E.sheenRoughnessMap,Xe=!!E.specularMap,Le=!!E.specularColorMap,rt=!!E.specularIntensityMap,W=pe&&!!E.transmissionMap,we=pe&&!!E.thicknessMap,Ae=!!E.gradientMap,ke=!!E.alphaMap,_e=E.alphaTest>0,he=!!E.alphaHash,Ge=!!E.extensions;let it=Br;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(it=t.toneMapping);const Rt={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:st,fragmentShader:Pe,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:B,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&$._colorsTexture!==null,instancing:Je,instancingColor:Je&&$.instanceColor!==null,instancingMorph:Je&&$.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Uo,alphaToCoverage:!!E.alphaToCoverage,map:ct,matcap:Zt,envMap:F,envMapMode:F&&j.mapping,envMapCubeUVHeight:U,aoMap:wt,lightMap:nt,bumpMap:He,normalMap:O,displacementMap:h&&Re,emissiveMap:re,normalMapObjectSpace:O&&E.normalMapType===tS,normalMapTangentSpace:O&&E.normalMapType===Np,metalnessMap:ae,roughnessMap:qe,anisotropy:Qe,anisotropyMap:ue,clearcoat:D,clearcoatMap:Ne,clearcoatNormalMap:me,clearcoatRoughnessMap:Ve,dispersion:T,iridescence:q,iridescenceMap:We,iridescenceThicknessMap:ge,sheen:de,sheenColorMap:Se,sheenRoughnessMap:et,specularMap:Xe,specularColorMap:Le,specularIntensityMap:rt,transmission:pe,transmissionMap:W,thicknessMap:we,gradientMap:Ae,opaque:E.transparent===!1&&E.blending===Mo&&E.alphaToCoverage===!1,alphaMap:ke,alphaTest:_e,alphaHash:he,combine:E.combine,mapUv:ct&&w(E.map.channel),aoMapUv:wt&&w(E.aoMap.channel),lightMapUv:nt&&w(E.lightMap.channel),bumpMapUv:He&&w(E.bumpMap.channel),normalMapUv:O&&w(E.normalMap.channel),displacementMapUv:Re&&w(E.displacementMap.channel),emissiveMapUv:re&&w(E.emissiveMap.channel),metalnessMapUv:ae&&w(E.metalnessMap.channel),roughnessMapUv:qe&&w(E.roughnessMap.channel),anisotropyMapUv:ue&&w(E.anisotropyMap.channel),clearcoatMapUv:Ne&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:me&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:et&&w(E.sheenRoughnessMap.channel),specularMapUv:Xe&&w(E.specularMap.channel),specularColorMapUv:Le&&w(E.specularColorMap.channel),specularIntensityMapUv:rt&&w(E.specularIntensityMap.channel),transmissionMapUv:W&&w(E.transmissionMap.channel),thicknessMapUv:we&&w(E.thicknessMap.channel),alphaMapUv:ke&&w(E.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(O||Qe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!oe.attributes.uv&&(ct||ke),fog:!!ie,useFog:E.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Fe,skinning:$.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,decodeVideoTexture:ct&&E.map.isVideoTexture===!0&&Tt.getTransfer(E.map.colorSpace)===It,decodeVideoTextureEmissive:re&&E.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(E.emissiveMap.colorSpace)===It,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ei,flipSided:E.side===$n,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ge&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&E.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function u(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(m(S,E),v(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function m(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function v(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function M(E){const S=x[E.type];let I;if(S){const H=Ii[S];I=PS.clone(H.uniforms)}else I=E.uniforms;return I}function C(E,S){let I;for(let H=0,$=d.length;H<$;H++){const ie=d[H];if(ie.cacheKey===S){I=ie,++I.usedTimes;break}}return I===void 0&&(I=new vA(t,S,E,s),d.push(I)),I}function R(E){if(--E.usedTimes===0){const S=d.indexOf(E);d[S]=d[d.length-1],d.pop(),E.destroy()}}function L(E){l.remove(E)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:M,acquireProgram:C,releaseProgram:R,releaseShaderCache:L,programs:d,dispose:N}}function SA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function wA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,x,w,g){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:x,renderOrder:f.renderOrder,z:w,group:g},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=w,u.group=g),e++,u}function a(f,h,p,x,w,g){const u=o(f,h,p,x,w,g);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,x,w,g){const u=o(f,h,p,x,w,g);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||wA),i.length>1&&i.sort(h||Wg),r.length>1&&r.sort(h||Wg)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function EA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Xg,t.set(i,[o])):r>=s.length?(o=new Xg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function TA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new pt};break;case"SpotLight":n={position:new k,direction:new k,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":n={color:new pt,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function AA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let bA=0;function CA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RA(t){const e=new TA,n=AA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new Vt,o=new Vt;function a(c){let d=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,x=0,w=0,g=0,u=0,m=0,v=0,M=0,C=0,R=0,L=0;c.sort(CA);for(let E=0,S=c.length;E<S;E++){const I=c[E],H=I.color,$=I.intensity,ie=I.distance,oe=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=H.r*$,f+=H.g*$,h+=H.b*$;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],$);L++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,U=n.get(I);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=I.shadow.matrix,m++}i.directional[p]=V,p++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(H).multiplyScalar($),V.distance=ie,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[w]=V;const j=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,j.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[w]=j.matrix,I.castShadow){const U=n.get(I);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.spotShadow[w]=U,i.spotShadowMap[w]=oe,M++}w++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(H).multiplyScalar($),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=V,g++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const j=I.shadow,U=n.get(I);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,U.shadowCameraNear=j.camera.near,U.shadowCameraFar=j.camera.far,i.pointShadow[x]=U,i.pointShadowMap[x]=oe,i.pointShadowMatrix[x]=I.shadow.matrix,v++}i.point[x]=V,x++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar($),V.groundColor.copy(I.groundColor).multiplyScalar($),i.hemi[u]=V,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==p||N.pointLength!==x||N.spotLength!==w||N.rectAreaLength!==g||N.hemiLength!==u||N.numDirectionalShadows!==m||N.numPointShadows!==v||N.numSpotShadows!==M||N.numSpotMaps!==C||N.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=w,i.rectArea.length=g,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,N.directionalLength=p,N.pointLength=x,N.spotLength=w,N.rectAreaLength=g,N.hemiLength=u,N.numDirectionalShadows=m,N.numPointShadows=v,N.numSpotShadows=M,N.numSpotMaps=C,N.numLightProbes=L,i.version=bA++)}function l(c,d){let f=0,h=0,p=0,x=0,w=0;const g=d.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const v=c[u];if(v.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(v.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const M=i.hemi[w];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),w++}}}return{setup:a,setupView:l,state:i}}function jg(t){const e=new RA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function PA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new jg(t),e.set(r,[a])):s>=o.length?(a=new jg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const LA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DA=`uniform sampler2D shadow_pass;
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
}`;function NA(t,e,n){let i=new kp;const r=new Ye,s=new Ye,o=new Ut,a=new n2({depthPacking:eS}),l=new i2,c={},d=n.maxTextureSize,f={[Gr]:$n,[$n]:Gr,[Ei]:Ei},h=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:LA,fragmentShader:DA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new rn;x.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new se(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dx;let u=this.type;this.render=function(R,L,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),H=t.state;H.setBlending(zr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const $=u!==Ki&&this.type===Ki,ie=u===Ki&&this.type!==Ki;for(let oe=0,V=R.length;oe<V;oe++){const j=R[oe],U=j.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const K=U.getFrameExtents();if(r.multiply(K),s.copy(U.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/K.x),r.x=s.x*K.x,U.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/K.y),r.y=s.y*K.y,U.mapSize.y=s.y)),U.map===null||$===!0||ie===!0){const Me=this.type!==Ki?{minFilter:Ri,magFilter:Ri}:{};U.map!==null&&U.map.dispose(),U.map=new Ts(r.x,r.y,Me),U.map.texture.name=j.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const ee=U.getViewportCount();for(let Me=0;Me<ee;Me++){const Ue=U.getViewport(Me);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),H.viewport(o),U.updateMatrices(j,Me),i=U.getFrustum(),M(L,N,U.camera,j,this.type)}U.isPointLightShadow!==!0&&this.type===Ki&&m(U,N),U.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(E,S,I)};function m(R,L){const N=e.update(w);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ts(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(L,null,N,h,w,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(L,null,N,p,w,null)}function v(R,L,N,E){let S=null;const I=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)S=I;else if(S=N.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const H=S.uuid,$=L.uuid;let ie=c[H];ie===void 0&&(ie={},c[H]=ie);let oe=ie[$];oe===void 0&&(oe=S.clone(),ie[$]=oe,L.addEventListener("dispose",C)),S=oe}if(S.visible=L.visible,S.wireframe=L.wireframe,E===Ki?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:f[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=N}return S}function M(R,L,N,E,S){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Ki)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const $=e.update(R),ie=R.material;if(Array.isArray(ie)){const oe=$.groups;for(let V=0,j=oe.length;V<j;V++){const U=oe[V],K=ie[U.materialIndex];if(K&&K.visible){const ee=v(R,K,E,S);R.onBeforeShadow(t,R,L,N,$,ee,U),t.renderBufferDirect(N,null,$,ee,R,U),R.onAfterShadow(t,R,L,N,$,ee,U)}}}else if(ie.visible){const oe=v(R,ie,E,S);R.onBeforeShadow(t,R,L,N,$,oe,null),t.renderBufferDirect(N,null,$,oe,R,null),R.onAfterShadow(t,R,L,N,$,oe,null)}}const H=R.children;for(let $=0,ie=H.length;$<ie;$++)M(H[$],L,N,E,S)}function C(R){R.target.removeEventListener("dispose",C);for(const N in c){const E=c[N],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const IA={[Gf]:Wf,[Xf]:qf,[jf]:$f,[Do]:Yf,[Wf]:Gf,[qf]:Xf,[$f]:jf,[Yf]:Do};function UA(t,e){function n(){let W=!1;const we=new Ut;let Ae=null;const ke=new Ut(0,0,0,0);return{setMask:function(_e){Ae!==_e&&!W&&(t.colorMask(_e,_e,_e,_e),Ae=_e)},setLocked:function(_e){W=_e},setClear:function(_e,he,Ge,it,Rt){Rt===!0&&(_e*=it,he*=it,Ge*=it),we.set(_e,he,Ge,it),ke.equals(we)===!1&&(t.clearColor(_e,he,Ge,it),ke.copy(we))},reset:function(){W=!1,Ae=null,ke.set(-1,0,0,0)}}}function i(){let W=!1,we=!1,Ae=null,ke=null,_e=null;return{setReversed:function(he){if(we!==he){const Ge=e.get("EXT_clip_control");he?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),we=he;const it=_e;_e=null,this.setClear(it)}},getReversed:function(){return we},setTest:function(he){he?fe(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(he){Ae!==he&&!W&&(t.depthMask(he),Ae=he)},setFunc:function(he){if(we&&(he=IA[he]),ke!==he){switch(he){case Gf:t.depthFunc(t.NEVER);break;case Wf:t.depthFunc(t.ALWAYS);break;case Xf:t.depthFunc(t.LESS);break;case Do:t.depthFunc(t.LEQUAL);break;case jf:t.depthFunc(t.EQUAL);break;case Yf:t.depthFunc(t.GEQUAL);break;case qf:t.depthFunc(t.GREATER);break;case $f:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ke=he}},setLocked:function(he){W=he},setClear:function(he){_e!==he&&(we&&(he=1-he),t.clearDepth(he),_e=he)},reset:function(){W=!1,Ae=null,ke=null,_e=null,we=!1}}}function r(){let W=!1,we=null,Ae=null,ke=null,_e=null,he=null,Ge=null,it=null,Rt=null;return{setTest:function(gt){W||(gt?fe(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(gt){we!==gt&&!W&&(t.stencilMask(gt),we=gt)},setFunc:function(gt,$t,Rn){(Ae!==gt||ke!==$t||_e!==Rn)&&(t.stencilFunc(gt,$t,Rn),Ae=gt,ke=$t,_e=Rn)},setOp:function(gt,$t,Rn){(he!==gt||Ge!==$t||it!==Rn)&&(t.stencilOp(gt,$t,Rn),he=gt,Ge=$t,it=Rn)},setLocked:function(gt){W=gt},setClear:function(gt){Rt!==gt&&(t.clearStencil(gt),Rt=gt)},reset:function(){W=!1,we=null,Ae=null,ke=null,_e=null,he=null,Ge=null,it=null,Rt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],x=null,w=!1,g=null,u=null,m=null,v=null,M=null,C=null,R=null,L=new pt(0,0,0),N=0,E=!1,S=null,I=null,H=null,$=null,ie=null;const oe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(U)[1]),V=j>=1):U.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),V=j>=2);let K=null,ee={};const Me=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),st=new Ut().fromArray(Me),Pe=new Ut().fromArray(Ue);function ce(W,we,Ae,ke){const _e=new Uint8Array(4),he=t.createTexture();t.bindTexture(W,he),t.texParameteri(W,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(W,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<Ae;Ge++)W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,ke,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(we+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return he}const B={};B[t.TEXTURE_2D]=ce(t.TEXTURE_2D,t.TEXTURE_2D,1),B[t.TEXTURE_CUBE_MAP]=ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[t.TEXTURE_2D_ARRAY]=ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),B[t.TEXTURE_3D]=ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(t.DEPTH_TEST),o.setFunc(Do),He(!1),O(V0),fe(t.CULL_FACE),wt(zr);function fe(W){d[W]!==!0&&(t.enable(W),d[W]=!0)}function Fe(W){d[W]!==!1&&(t.disable(W),d[W]=!1)}function Je(W,we){return f[W]!==we?(t.bindFramebuffer(W,we),f[W]=we,W===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=we),W===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=we),!0):!1}function Ce(W,we){let Ae=p,ke=!1;if(W){Ae=h.get(we),Ae===void 0&&(Ae=[],h.set(we,Ae));const _e=W.textures;if(Ae.length!==_e.length||Ae[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ge=_e.length;he<Ge;he++)Ae[he]=t.COLOR_ATTACHMENT0+he;Ae.length=_e.length,ke=!0}}else Ae[0]!==t.BACK&&(Ae[0]=t.BACK,ke=!0);ke&&t.drawBuffers(Ae)}function ct(W){return x!==W?(t.useProgram(W),x=W,!0):!1}const Zt={[us]:t.FUNC_ADD,[bM]:t.FUNC_SUBTRACT,[CM]:t.FUNC_REVERSE_SUBTRACT};Zt[RM]=t.MIN,Zt[PM]=t.MAX;const F={[LM]:t.ZERO,[DM]:t.ONE,[NM]:t.SRC_COLOR,[Hf]:t.SRC_ALPHA,[zM]:t.SRC_ALPHA_SATURATE,[OM]:t.DST_COLOR,[UM]:t.DST_ALPHA,[IM]:t.ONE_MINUS_SRC_COLOR,[Vf]:t.ONE_MINUS_SRC_ALPHA,[kM]:t.ONE_MINUS_DST_COLOR,[FM]:t.ONE_MINUS_DST_ALPHA,[BM]:t.CONSTANT_COLOR,[HM]:t.ONE_MINUS_CONSTANT_COLOR,[VM]:t.CONSTANT_ALPHA,[GM]:t.ONE_MINUS_CONSTANT_ALPHA};function wt(W,we,Ae,ke,_e,he,Ge,it,Rt,gt){if(W===zr){w===!0&&(Fe(t.BLEND),w=!1);return}if(w===!1&&(fe(t.BLEND),w=!0),W!==AM){if(W!==g||gt!==E){if((u!==us||M!==us)&&(t.blendEquation(t.FUNC_ADD),u=us,M=us),gt)switch(W){case Mo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case G0:t.blendFunc(t.ONE,t.ONE);break;case W0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case X0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Mo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case G0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case W0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case X0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}m=null,v=null,C=null,R=null,L.set(0,0,0),N=0,g=W,E=gt}return}_e=_e||we,he=he||Ae,Ge=Ge||ke,(we!==u||_e!==M)&&(t.blendEquationSeparate(Zt[we],Zt[_e]),u=we,M=_e),(Ae!==m||ke!==v||he!==C||Ge!==R)&&(t.blendFuncSeparate(F[Ae],F[ke],F[he],F[Ge]),m=Ae,v=ke,C=he,R=Ge),(it.equals(L)===!1||Rt!==N)&&(t.blendColor(it.r,it.g,it.b,Rt),L.copy(it),N=Rt),g=W,E=!1}function nt(W,we){W.side===Ei?Fe(t.CULL_FACE):fe(t.CULL_FACE);let Ae=W.side===$n;we&&(Ae=!Ae),He(Ae),W.blending===Mo&&W.transparent===!1?wt(zr):wt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const ke=W.stencilWrite;a.setTest(ke),ke&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),re(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(W){S!==W&&(W?t.frontFace(t.CW):t.frontFace(t.CCW),S=W)}function O(W){W!==EM?(fe(t.CULL_FACE),W!==I&&(W===V0?t.cullFace(t.BACK):W===TM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),I=W}function Re(W){W!==H&&(V&&t.lineWidth(W),H=W)}function re(W,we,Ae){W?(fe(t.POLYGON_OFFSET_FILL),($!==we||ie!==Ae)&&(t.polygonOffset(we,Ae),$=we,ie=Ae)):Fe(t.POLYGON_OFFSET_FILL)}function ae(W){W?fe(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function qe(W){W===void 0&&(W=t.TEXTURE0+oe-1),K!==W&&(t.activeTexture(W),K=W)}function Qe(W,we,Ae){Ae===void 0&&(K===null?Ae=t.TEXTURE0+oe-1:Ae=K);let ke=ee[Ae];ke===void 0&&(ke={type:void 0,texture:void 0},ee[Ae]=ke),(ke.type!==W||ke.texture!==we)&&(K!==Ae&&(t.activeTexture(Ae),K=Ae),t.bindTexture(W,we||B[W]),ke.type=W,ke.texture=we)}function D(){const W=ee[K];W!==void 0&&W.type!==void 0&&(t.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{t.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function q(){try{t.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{t.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{t.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{t.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{t.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{t.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{t.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(){try{t.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{t.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(W){st.equals(W)===!1&&(t.scissor(W.x,W.y,W.z,W.w),st.copy(W))}function et(W){Pe.equals(W)===!1&&(t.viewport(W.x,W.y,W.z,W.w),Pe.copy(W))}function Xe(W,we){let Ae=c.get(we);Ae===void 0&&(Ae=new WeakMap,c.set(we,Ae));let ke=Ae.get(W);ke===void 0&&(ke=t.getUniformBlockIndex(we,W.name),Ae.set(W,ke))}function Le(W,we){const ke=c.get(we).get(W);l.get(we)!==ke&&(t.uniformBlockBinding(we,ke,W.__bindingPointIndex),l.set(we,ke))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},K=null,ee={},f={},h=new WeakMap,p=[],x=null,w=!1,g=null,u=null,m=null,v=null,M=null,C=null,R=null,L=new pt(0,0,0),N=0,E=!1,S=null,I=null,H=null,$=null,ie=null,st.set(0,0,t.canvas.width,t.canvas.height),Pe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:Fe,bindFramebuffer:Je,drawBuffers:Ce,useProgram:ct,setBlending:wt,setMaterial:nt,setFlipSided:He,setCullFace:O,setLineWidth:Re,setPolygonOffset:re,setScissorTest:ae,activeTexture:qe,bindTexture:Qe,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:q,texImage2D:We,texImage3D:ge,updateUBOMapping:Xe,uniformBlockBinding:Le,texStorage2D:me,texStorage3D:Ve,texSubImage2D:de,texSubImage3D:pe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ne,scissor:Se,viewport:et,reset:rt}}function FA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,T){return p?new OffscreenCanvas(D,T):qc("canvas")}function w(D,T,q){let de=1;const pe=Qe(D);if((pe.width>q||pe.height>q)&&(de=q/Math.max(pe.width,pe.height)),de<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ue=Math.floor(de*pe.width),Ne=Math.floor(de*pe.height);f===void 0&&(f=x(ue,Ne));const me=T?x(ue,Ne):f;return me.width=ue,me.height=Ne,me.getContext("2d").drawImage(D,0,0,ue,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ue+"x"+Ne+")."),me}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),D;return D}function g(D){return D.generateMipmaps}function u(D){t.generateMipmap(D)}function m(D){return D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?t.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(D,T,q,de,pe=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ue=T;if(T===t.RED&&(q===t.FLOAT&&(ue=t.R32F),q===t.HALF_FLOAT&&(ue=t.R16F),q===t.UNSIGNED_BYTE&&(ue=t.R8)),T===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(ue=t.R8UI),q===t.UNSIGNED_SHORT&&(ue=t.R16UI),q===t.UNSIGNED_INT&&(ue=t.R32UI),q===t.BYTE&&(ue=t.R8I),q===t.SHORT&&(ue=t.R16I),q===t.INT&&(ue=t.R32I)),T===t.RG&&(q===t.FLOAT&&(ue=t.RG32F),q===t.HALF_FLOAT&&(ue=t.RG16F),q===t.UNSIGNED_BYTE&&(ue=t.RG8)),T===t.RG_INTEGER&&(q===t.UNSIGNED_BYTE&&(ue=t.RG8UI),q===t.UNSIGNED_SHORT&&(ue=t.RG16UI),q===t.UNSIGNED_INT&&(ue=t.RG32UI),q===t.BYTE&&(ue=t.RG8I),q===t.SHORT&&(ue=t.RG16I),q===t.INT&&(ue=t.RG32I)),T===t.RGB_INTEGER&&(q===t.UNSIGNED_BYTE&&(ue=t.RGB8UI),q===t.UNSIGNED_SHORT&&(ue=t.RGB16UI),q===t.UNSIGNED_INT&&(ue=t.RGB32UI),q===t.BYTE&&(ue=t.RGB8I),q===t.SHORT&&(ue=t.RGB16I),q===t.INT&&(ue=t.RGB32I)),T===t.RGBA_INTEGER&&(q===t.UNSIGNED_BYTE&&(ue=t.RGBA8UI),q===t.UNSIGNED_SHORT&&(ue=t.RGBA16UI),q===t.UNSIGNED_INT&&(ue=t.RGBA32UI),q===t.BYTE&&(ue=t.RGBA8I),q===t.SHORT&&(ue=t.RGBA16I),q===t.INT&&(ue=t.RGBA32I)),T===t.RGB&&(q===t.UNSIGNED_INT_5_9_9_9_REV&&(ue=t.RGB9_E5),q===t.UNSIGNED_INT_10F_11F_11F_REV&&(ue=t.R11F_G11F_B10F)),T===t.RGBA){const Ne=pe?jc:Tt.getTransfer(de);q===t.FLOAT&&(ue=t.RGBA32F),q===t.HALF_FLOAT&&(ue=t.RGBA16F),q===t.UNSIGNED_BYTE&&(ue=Ne===It?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)}return(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function M(D,T){let q;return D?T===null||T===Es||T===Za?q=t.DEPTH24_STENCIL8:T===tr?q=t.DEPTH32F_STENCIL8:T===Ka&&(q=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Es||T===Za?q=t.DEPTH_COMPONENT24:T===tr?q=t.DEPTH_COMPONENT32F:T===Ka&&(q=t.DEPTH_COMPONENT16),q}function C(D,T){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ri&&D.minFilter!==Fi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function R(D){const T=D.target;T.removeEventListener("dispose",R),N(T),T.isVideoTexture&&d.delete(T)}function L(D){const T=D.target;T.removeEventListener("dispose",L),S(T)}function N(D){const T=i.get(D);if(T.__webglInit===void 0)return;const q=D.source,de=h.get(q);if(de){const pe=de[T.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&E(D),Object.keys(de).length===0&&h.delete(q)}i.remove(D)}function E(D){const T=i.get(D);t.deleteTexture(T.__webglTexture);const q=D.source,de=h.get(q);delete de[T.__cacheKey],o.memory.textures--}function S(D){const T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let pe=0;pe<T.__webglFramebuffer[de].length;pe++)t.deleteFramebuffer(T.__webglFramebuffer[de][pe]);else t.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)t.deleteFramebuffer(T.__webglFramebuffer[de]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=D.textures;for(let de=0,pe=q.length;de<pe;de++){const ue=i.get(q[de]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),o.memory.textures--),i.remove(q[de])}i.remove(D)}let I=0;function H(){I=0}function $(){const D=I;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),I+=1,D}function ie(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function oe(D,T){const q=i.get(D);if(D.isVideoTexture&&ae(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const de=D.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(q,D,T);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+T)}function V(D,T){const q=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){B(q,D,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+T)}function j(D,T){const q=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){B(q,D,T);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+T)}function U(D,T){const q=i.get(D);if(D.version>0&&q.__version!==D.version){fe(q,D,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+T)}const K={[So]:t.REPEAT,[ms]:t.CLAMP_TO_EDGE,[Jf]:t.MIRRORED_REPEAT},ee={[Ri]:t.NEAREST,[JM]:t.NEAREST_MIPMAP_NEAREST,[Il]:t.NEAREST_MIPMAP_LINEAR,[Fi]:t.LINEAR,[ad]:t.LINEAR_MIPMAP_NEAREST,[gs]:t.LINEAR_MIPMAP_LINEAR},Me={[nS]:t.NEVER,[lS]:t.ALWAYS,[iS]:t.LESS,[wx]:t.LEQUAL,[rS]:t.EQUAL,[aS]:t.GEQUAL,[sS]:t.GREATER,[oS]:t.NOTEQUAL};function Ue(D,T){if(T.type===tr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Fi||T.magFilter===ad||T.magFilter===Il||T.magFilter===gs||T.minFilter===Fi||T.minFilter===ad||T.minFilter===Il||T.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,K[T.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,K[T.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,K[T.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,ee[T.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,ee[T.minFilter]),T.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,Me[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ri||T.minFilter!==Il&&T.minFilter!==gs||T.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function st(D,T){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",R));const de=T.source;let pe=h.get(de);pe===void 0&&(pe={},h.set(de,pe));const ue=ie(T);if(ue!==D.__cacheKey){pe[ue]===void 0&&(pe[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,q=!0),pe[ue].usedTimes++;const Ne=pe[D.__cacheKey];Ne!==void 0&&(pe[D.__cacheKey].usedTimes--,Ne.usedTimes===0&&E(T)),D.__cacheKey=ue,D.__webglTexture=pe[ue].texture}return q}function Pe(D,T,q){return Math.floor(Math.floor(D/q)/T)}function ce(D,T,q,de){const ue=D.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,T.width,T.height,q,de,T.data);else{ue.sort((ge,Se)=>ge.start-Se.start);let Ne=0;for(let ge=1;ge<ue.length;ge++){const Se=ue[Ne],et=ue[ge],Xe=Se.start+Se.count,Le=Pe(et.start,T.width,4),rt=Pe(Se.start,T.width,4);et.start<=Xe+1&&Le===rt&&Pe(et.start+et.count-1,T.width,4)===Le?Se.count=Math.max(Se.count,et.start+et.count-Se.start):(++Ne,ue[Ne]=et)}ue.length=Ne+1;const me=t.getParameter(t.UNPACK_ROW_LENGTH),Ve=t.getParameter(t.UNPACK_SKIP_PIXELS),We=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,T.width);for(let ge=0,Se=ue.length;ge<Se;ge++){const et=ue[ge],Xe=Math.floor(et.start/4),Le=Math.ceil(et.count/4),rt=Xe%T.width,W=Math.floor(Xe/T.width),we=Le,Ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(t.UNPACK_SKIP_ROWS,W),n.texSubImage2D(t.TEXTURE_2D,0,rt,W,we,Ae,q,de,T.data)}D.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,me),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(t.UNPACK_SKIP_ROWS,We)}}function B(D,T,q){let de=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=t.TEXTURE_3D);const pe=st(D,T),ue=T.source;n.bindTexture(de,D.__webglTexture,t.TEXTURE0+q);const Ne=i.get(ue);if(ue.version!==Ne.__version||pe===!0){n.activeTexture(t.TEXTURE0+q);const me=Tt.getPrimaries(Tt.workingColorSpace),Ve=T.colorSpace===br?null:Tt.getPrimaries(T.colorSpace),We=T.colorSpace===br||me===Ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ge=w(T.image,!1,r.maxTextureSize);ge=qe(T,ge);const Se=s.convert(T.format,T.colorSpace),et=s.convert(T.type);let Xe=v(T.internalFormat,Se,et,T.colorSpace,T.isVideoTexture);Ue(de,T);let Le;const rt=T.mipmaps,W=T.isVideoTexture!==!0,we=Ne.__version===void 0||pe===!0,Ae=ue.dataReady,ke=C(T,ge);if(T.isDepthTexture)Xe=M(T.format===Qa,T.type),we&&(W?n.texStorage2D(t.TEXTURE_2D,1,Xe,ge.width,ge.height):n.texImage2D(t.TEXTURE_2D,0,Xe,ge.width,ge.height,0,Se,et,null));else if(T.isDataTexture)if(rt.length>0){W&&we&&n.texStorage2D(t.TEXTURE_2D,ke,Xe,rt[0].width,rt[0].height);for(let _e=0,he=rt.length;_e<he;_e++)Le=rt[_e],W?Ae&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Le.width,Le.height,Se,et,Le.data):n.texImage2D(t.TEXTURE_2D,_e,Xe,Le.width,Le.height,0,Se,et,Le.data);T.generateMipmaps=!1}else W?(we&&n.texStorage2D(t.TEXTURE_2D,ke,Xe,ge.width,ge.height),Ae&&ce(T,ge,Se,et)):n.texImage2D(t.TEXTURE_2D,0,Xe,ge.width,ge.height,0,Se,et,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,Xe,rt[0].width,rt[0].height,ge.depth);for(let _e=0,he=rt.length;_e<he;_e++)if(Le=rt[_e],T.format!==Ai)if(Se!==null)if(W){if(Ae)if(T.layerUpdates.size>0){const Ge=Sg(Le.width,Le.height,T.format,T.type);for(const it of T.layerUpdates){const Rt=Le.data.subarray(it*Ge/Le.data.BYTES_PER_ELEMENT,(it+1)*Ge/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,it,Le.width,Le.height,1,Se,Rt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,ge.depth,Se,Le.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,Xe,Le.width,Le.height,ge.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,ge.depth,Se,et,Le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,Xe,Le.width,Le.height,ge.depth,0,Se,et,Le.data)}else{W&&we&&n.texStorage2D(t.TEXTURE_2D,ke,Xe,rt[0].width,rt[0].height);for(let _e=0,he=rt.length;_e<he;_e++)Le=rt[_e],T.format!==Ai?Se!==null?W?Ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,Le.width,Le.height,Se,Le.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,Xe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ae&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Le.width,Le.height,Se,et,Le.data):n.texImage2D(t.TEXTURE_2D,_e,Xe,Le.width,Le.height,0,Se,et,Le.data)}else if(T.isDataArrayTexture)if(W){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,Xe,ge.width,ge.height,ge.depth),Ae)if(T.layerUpdates.size>0){const _e=Sg(ge.width,ge.height,T.format,T.type);for(const he of T.layerUpdates){const Ge=ge.data.subarray(he*_e/ge.data.BYTES_PER_ELEMENT,(he+1)*_e/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,ge.width,ge.height,1,Se,et,Ge)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Se,et,ge.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Xe,ge.width,ge.height,ge.depth,0,Se,et,ge.data);else if(T.isData3DTexture)W?(we&&n.texStorage3D(t.TEXTURE_3D,ke,Xe,ge.width,ge.height,ge.depth),Ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Se,et,ge.data)):n.texImage3D(t.TEXTURE_3D,0,Xe,ge.width,ge.height,ge.depth,0,Se,et,ge.data);else if(T.isFramebufferTexture){if(we)if(W)n.texStorage2D(t.TEXTURE_2D,ke,Xe,ge.width,ge.height);else{let _e=ge.width,he=ge.height;for(let Ge=0;Ge<ke;Ge++)n.texImage2D(t.TEXTURE_2D,Ge,Xe,_e,he,0,Se,et,null),_e>>=1,he>>=1}}else if(rt.length>0){if(W&&we){const _e=Qe(rt[0]);n.texStorage2D(t.TEXTURE_2D,ke,Xe,_e.width,_e.height)}for(let _e=0,he=rt.length;_e<he;_e++)Le=rt[_e],W?Ae&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Se,et,Le):n.texImage2D(t.TEXTURE_2D,_e,Xe,Se,et,Le);T.generateMipmaps=!1}else if(W){if(we){const _e=Qe(ge);n.texStorage2D(t.TEXTURE_2D,ke,Xe,_e.width,_e.height)}Ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,et,ge)}else n.texImage2D(t.TEXTURE_2D,0,Xe,Se,et,ge);g(T)&&u(de),Ne.__version=ue.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function fe(D,T,q){if(T.image.length!==6)return;const de=st(D,T),pe=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+q);const ue=i.get(pe);if(pe.version!==ue.__version||de===!0){n.activeTexture(t.TEXTURE0+q);const Ne=Tt.getPrimaries(Tt.workingColorSpace),me=T.colorSpace===br?null:Tt.getPrimaries(T.colorSpace),Ve=T.colorSpace===br||Ne===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const We=T.isCompressedTexture||T.image[0].isCompressedTexture,ge=T.image[0]&&T.image[0].isDataTexture,Se=[];for(let he=0;he<6;he++)!We&&!ge?Se[he]=w(T.image[he],!0,r.maxCubemapSize):Se[he]=ge?T.image[he].image:T.image[he],Se[he]=qe(T,Se[he]);const et=Se[0],Xe=s.convert(T.format,T.colorSpace),Le=s.convert(T.type),rt=v(T.internalFormat,Xe,Le,T.colorSpace),W=T.isVideoTexture!==!0,we=ue.__version===void 0||de===!0,Ae=pe.dataReady;let ke=C(T,et);Ue(t.TEXTURE_CUBE_MAP,T);let _e;if(We){W&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ke,rt,et.width,et.height);for(let he=0;he<6;he++){_e=Se[he].mipmaps;for(let Ge=0;Ge<_e.length;Ge++){const it=_e[Ge];T.format!==Ai?Xe!==null?W?Ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,0,0,it.width,it.height,Xe,it.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,rt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,0,0,it.width,it.height,Xe,Le,it.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,rt,it.width,it.height,0,Xe,Le,it.data)}}}else{if(_e=T.mipmaps,W&&we){_e.length>0&&ke++;const he=Qe(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ke,rt,he.width,he.height)}for(let he=0;he<6;he++)if(ge){W?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Se[he].width,Se[he].height,Xe,Le,Se[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,Se[he].width,Se[he].height,0,Xe,Le,Se[he].data);for(let Ge=0;Ge<_e.length;Ge++){const Rt=_e[Ge].image[he].image;W?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,0,0,Rt.width,Rt.height,Xe,Le,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,rt,Rt.width,Rt.height,0,Xe,Le,Rt.data)}}else{W?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Xe,Le,Se[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,Xe,Le,Se[he]);for(let Ge=0;Ge<_e.length;Ge++){const it=_e[Ge];W?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,0,0,Xe,Le,it.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,rt,Xe,Le,it.image[he])}}}g(T)&&u(t.TEXTURE_CUBE_MAP),ue.__version=pe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Fe(D,T,q,de,pe,ue){const Ne=s.convert(q.format,q.colorSpace),me=s.convert(q.type),Ve=v(q.internalFormat,Ne,me,q.colorSpace),We=i.get(T),ge=i.get(q);if(ge.__renderTarget=T,!We.__hasExternalTextures){const Se=Math.max(1,T.width>>ue),et=Math.max(1,T.height>>ue);pe===t.TEXTURE_3D||pe===t.TEXTURE_2D_ARRAY?n.texImage3D(pe,ue,Ve,Se,et,T.depth,0,Ne,me,null):n.texImage2D(pe,ue,Ve,Se,et,0,Ne,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),re(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,pe,ge.__webglTexture,0,Re(T)):(pe===t.TEXTURE_2D||pe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,de,pe,ge.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Je(D,T,q){if(t.bindRenderbuffer(t.RENDERBUFFER,D),T.depthBuffer){const de=T.depthTexture,pe=de&&de.isDepthTexture?de.type:null,ue=M(T.stencilBuffer,pe),Ne=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=Re(T);re(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,ue,T.width,T.height):q?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,ue,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ue,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ne,t.RENDERBUFFER,D)}else{const de=T.textures;for(let pe=0;pe<de.length;pe++){const ue=de[pe],Ne=s.convert(ue.format,ue.colorSpace),me=s.convert(ue.type),Ve=v(ue.internalFormat,Ne,me,ue.colorSpace),We=Re(T);q&&re(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Ve,T.width,T.height):re(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We,Ve,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,Ve,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=i.get(T.depthTexture);de.__renderTarget=T,(!de.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),oe(T.depthTexture,0);const pe=de.__webglTexture,ue=Re(T);if(T.depthTexture.format===Ja)re(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,pe,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,pe,0);else if(T.depthTexture.format===Qa)re(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,pe,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function ct(D){const T=i.get(D),q=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const de=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const pe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",pe)};de.addEventListener("dispose",pe),T.__depthDisposeCallback=pe}T.__boundDepthTexture=de}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const de=D.texture.mipmaps;de&&de.length>0?Ce(T.__webglFramebuffer[0],D):Ce(T.__webglFramebuffer,D)}else if(q){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=t.createRenderbuffer(),Je(T.__webglDepthbuffer[de],D,!1);else{const pe=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[de];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,ue)}}else{const de=D.texture.mipmaps;if(de&&de.length>0?n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),Je(T.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Zt(D,T,q){const de=i.get(D);T!==void 0&&Fe(de.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&ct(D)}function F(D){const T=D.texture,q=i.get(D),de=i.get(T);D.addEventListener("dispose",L);const pe=D.textures,ue=D.isWebGLCubeRenderTarget===!0,Ne=pe.length>1;if(Ne||(de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture()),de.__version=T.version,o.memory.textures++),ue){q.__webglFramebuffer=[];for(let me=0;me<6;me++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[me]=[];for(let Ve=0;Ve<T.mipmaps.length;Ve++)q.__webglFramebuffer[me][Ve]=t.createFramebuffer()}else q.__webglFramebuffer[me]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let me=0;me<T.mipmaps.length;me++)q.__webglFramebuffer[me]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(Ne)for(let me=0,Ve=pe.length;me<Ve;me++){const We=i.get(pe[me]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),o.memory.textures++)}if(D.samples>0&&re(D)===!1){q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let me=0;me<pe.length;me++){const Ve=pe[me];q.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[me]);const We=s.convert(Ve.format,Ve.colorSpace),ge=s.convert(Ve.type),Se=v(Ve.internalFormat,We,ge,Ve.colorSpace,D.isXRRenderTarget===!0),et=Re(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,et,Se,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,q.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),Je(q.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,de.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,T);for(let me=0;me<6;me++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)Fe(q.__webglFramebuffer[me][Ve],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve);else Fe(q.__webglFramebuffer[me],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(T)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let me=0,Ve=pe.length;me<Ve;me++){const We=pe[me],ge=i.get(We);let Se=t.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Se=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,ge.__webglTexture),Ue(Se,We),Fe(q.__webglFramebuffer,D,We,t.COLOR_ATTACHMENT0+me,Se,0),g(We)&&u(Se)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(me=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,de.__webglTexture),Ue(me,T),T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)Fe(q.__webglFramebuffer[Ve],D,T,t.COLOR_ATTACHMENT0,me,Ve);else Fe(q.__webglFramebuffer,D,T,t.COLOR_ATTACHMENT0,me,0);g(T)&&u(me),n.unbindTexture()}D.depthBuffer&&ct(D)}function wt(D){const T=D.textures;for(let q=0,de=T.length;q<de;q++){const pe=T[q];if(g(pe)){const ue=m(D),Ne=i.get(pe).__webglTexture;n.bindTexture(ue,Ne),u(ue),n.unbindTexture()}}}const nt=[],He=[];function O(D){if(D.samples>0){if(re(D)===!1){const T=D.textures,q=D.width,de=D.height;let pe=t.COLOR_BUFFER_BIT;const ue=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ne=i.get(D),me=T.length>1;if(me)for(let We=0;We<T.length;We++)n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const Ve=D.texture.mipmaps;Ve&&Ve.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let We=0;We<T.length;We++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(pe|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(pe|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[We]);const ge=i.get(T[We]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ge,0)}t.blitFramebuffer(0,0,q,de,0,0,q,de,pe,t.NEAREST),l===!0&&(nt.length=0,He.length=0,nt.push(t.COLOR_ATTACHMENT0+We),D.depthBuffer&&D.resolveDepthBuffer===!1&&(nt.push(ue),He.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,He)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,nt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let We=0;We<T.length;We++){n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[We]);const ge=i.get(T[We]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Re(D){return Math.min(r.maxSamples,D.samples)}function re(D){const T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ae(D){const T=o.render.frame;d.get(D)!==T&&(d.set(D,T),D.update())}function qe(D,T){const q=D.colorSpace,de=D.format,pe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Uo&&q!==br&&(Tt.getTransfer(q)===It?(de!==Ai||pe!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function Qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=H,this.setTexture2D=oe,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=U,this.rebindTextures=Zt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=re}function OA(t,e){function n(i,r=br){let s;const o=Tt.getTransfer(r);if(i===Hi)return t.UNSIGNED_BYTE;if(i===Cp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Rp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===vx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===_x)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===mx)return t.BYTE;if(i===gx)return t.SHORT;if(i===Ka)return t.UNSIGNED_SHORT;if(i===bp)return t.INT;if(i===Es)return t.UNSIGNED_INT;if(i===tr)return t.FLOAT;if(i===al)return t.HALF_FLOAT;if(i===xx)return t.ALPHA;if(i===yx)return t.RGB;if(i===Ai)return t.RGBA;if(i===Ja)return t.DEPTH_COMPONENT;if(i===Qa)return t.DEPTH_STENCIL;if(i===Mx)return t.RED;if(i===Pp)return t.RED_INTEGER;if(i===Sx)return t.RG;if(i===Lp)return t.RG_INTEGER;if(i===Dp)return t.RGBA_INTEGER;if(i===vc||i===_c||i===xc||i===yc)if(o===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_c)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qf||i===eh||i===th||i===nh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===eh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===th)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ih||i===rh||i===sh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ih||i===rh)return o===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===oh||i===ah||i===lh||i===ch||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh||i===gh||i===vh||i===_h||i===xh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===oh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ah)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ch)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ph)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_h)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xh)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yh||i===Mh||i===Sh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yh)return o===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wh||i===Eh||i===Th||i===Ah)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Eh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Th)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ah)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Za?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const kA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zA=`
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

}`;class BA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Nx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Wr({vertexShader:kA,fragmentShader:zA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new se(new Pr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HA extends Bo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,x=null;const w=typeof XRWebGLBinding<"u",g=new BA,u={},m=n.getContextAttributes();let v=null,M=null;const C=[],R=[],L=new Ye;let N=null;const E=new Qn;E.viewport=new Ut;const S=new Qn;S.viewport=new Ut;const I=[E,S],H=new a2;let $=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let fe=C[B];return fe===void 0&&(fe=new Pd,C[B]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(B){let fe=C[B];return fe===void 0&&(fe=new Pd,C[B]=fe),fe.getGripSpace()},this.getHand=function(B){let fe=C[B];return fe===void 0&&(fe=new Pd,C[B]=fe),fe.getHandSpace()};function oe(B){const fe=R.indexOf(B.inputSource);if(fe===-1)return;const Fe=C[fe];Fe!==void 0&&(Fe.update(B.inputSource,B.frame,c||o),Fe.dispatchEvent({type:B.type,data:B.inputSource}))}function V(){r.removeEventListener("select",oe),r.removeEventListener("selectstart",oe),r.removeEventListener("selectend",oe),r.removeEventListener("squeeze",oe),r.removeEventListener("squeezestart",oe),r.removeEventListener("squeezeend",oe),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",j);for(let B=0;B<C.length;B++){const fe=R[B];fe!==null&&(R[B]=null,C[B].disconnect(fe))}$=null,ie=null,g.reset();for(const B in u)delete u[B];e.setRenderTarget(v),p=null,h=null,f=null,r=null,M=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&w&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",oe),r.addEventListener("selectstart",oe),r.addEventListener("selectend",oe),r.addEventListener("squeeze",oe),r.addEventListener("squeezestart",oe),r.addEventListener("squeezeend",oe),r.addEventListener("end",V),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(L),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Fe=null,Je=null,Ce=null;m.depth&&(Ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Fe=m.stencil?Qa:Ja,Je=m.stencil?Za:Es);const ct={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(ct),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Ts(h.textureWidth,h.textureHeight,{format:Ai,type:Hi,depthTexture:new Dx(h.textureWidth,h.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ts(p.framebufferWidth,p.framebufferHeight,{format:Ai,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(B){for(let fe=0;fe<B.removed.length;fe++){const Fe=B.removed[fe],Je=R.indexOf(Fe);Je>=0&&(R[Je]=null,C[Je].disconnect(Fe))}for(let fe=0;fe<B.added.length;fe++){const Fe=B.added[fe];let Je=R.indexOf(Fe);if(Je===-1){for(let ct=0;ct<C.length;ct++)if(ct>=R.length){R.push(Fe),Je=ct;break}else if(R[ct]===null){R[ct]=Fe,Je=ct;break}if(Je===-1)break}const Ce=C[Je];Ce&&Ce.connect(Fe)}}const U=new k,K=new k;function ee(B,fe,Fe){U.setFromMatrixPosition(fe.matrixWorld),K.setFromMatrixPosition(Fe.matrixWorld);const Je=U.distanceTo(K),Ce=fe.projectionMatrix.elements,ct=Fe.projectionMatrix.elements,Zt=Ce[14]/(Ce[10]-1),F=Ce[14]/(Ce[10]+1),wt=(Ce[9]+1)/Ce[5],nt=(Ce[9]-1)/Ce[5],He=(Ce[8]-1)/Ce[0],O=(ct[8]+1)/ct[0],Re=Zt*He,re=Zt*O,ae=Je/(-He+O),qe=ae*-He;if(fe.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(qe),B.translateZ(ae),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Ce[10]===-1)B.projectionMatrix.copy(fe.projectionMatrix),B.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Qe=Zt+ae,D=F+ae,T=Re-qe,q=re+(Je-qe),de=wt*F/D*Qe,pe=nt*F/D*Qe;B.projectionMatrix.makePerspective(T,q,de,pe,Qe,D),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Me(B,fe){fe===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(fe.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let fe=B.near,Fe=B.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(Fe=g.depthFar)),H.near=S.near=E.near=fe,H.far=S.far=E.far=Fe,($!==H.near||ie!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),$=H.near,ie=H.far),H.layers.mask=B.layers.mask|6,E.layers.mask=H.layers.mask&3,S.layers.mask=H.layers.mask&5;const Je=B.parent,Ce=H.cameras;Me(H,Je);for(let ct=0;ct<Ce.length;ct++)Me(Ce[ct],Je);Ce.length===2?ee(H,E,S):H.projectionMatrix.copy(E.projectionMatrix),Ue(B,H,Je)};function Ue(B,fe,Fe){Fe===null?B.matrix.copy(fe.matrixWorld):(B.matrix.copy(Fe.matrixWorld),B.matrix.invert(),B.matrix.multiply(fe.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(fe.projectionMatrix),B.projectionMatrixInverse.copy(fe.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=bh*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(B){return u[B]};let st=null;function Pe(B,fe){if(d=fe.getViewerPose(c||o),x=fe,d!==null){const Fe=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Je=!1;Fe.length!==H.cameras.length&&(H.cameras.length=0,Je=!0);for(let F=0;F<Fe.length;F++){const wt=Fe[F];let nt=null;if(p!==null)nt=p.getViewport(wt);else{const O=f.getViewSubImage(h,wt);nt=O.viewport,F===0&&(e.setRenderTargetTextures(M,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(M))}let He=I[F];He===void 0&&(He=new Qn,He.layers.enable(F),He.viewport=new Ut,I[F]=He),He.matrix.fromArray(wt.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(wt.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(nt.x,nt.y,nt.width,nt.height),F===0&&(H.matrix.copy(He.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Je===!0&&H.cameras.push(He)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){f=i.getBinding();const F=f.getDepthInformation(Fe[0]);F&&F.isValid&&F.texture&&g.init(F,r.renderState)}if(Ce&&Ce.includes("camera-access")&&w){e.state.unbindTexture(),f=i.getBinding();for(let F=0;F<Fe.length;F++){const wt=Fe[F].camera;if(wt){let nt=u[wt];nt||(nt=new Nx,u[wt]=nt);const He=f.getCameraImage(wt);nt.sourceTexture=He}}}}for(let Fe=0;Fe<C.length;Fe++){const Je=R[Fe],Ce=C[Fe];Je!==null&&Ce!==void 0&&Ce.update(Je,fe,c||o)}st&&st(B,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),x=null}const ce=new zx;ce.setAnimationLoop(Pe),this.setAnimationLoop=function(B){st=B},this.dispose=function(){}}}const rs=new Li,VA=new Vt;function GA(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Rx(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,m,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),f(g,u)):u.isMeshPhongMaterial?(s(g,u),d(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&p(g,u,M)):u.isMeshMatcapMaterial?(s(g,u),x(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),w(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,m,v):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===$n&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===$n&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const m=e.get(u),v=m.envMap,M=m.envMapRotation;v&&(g.envMap.value=v,rs.copy(M),rs.x*=-1,rs.y*=-1,rs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),g.envMapRotation.value.setFromMatrix4(VA.makeRotationFromEuler(rs)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,m,v){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*m,g.scale.value=v*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,m){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===$n&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,u){u.matcap&&(g.matcap.value=u.matcap)}function w(g,u){const m=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const M=v.program;i.uniformBlockBinding(m,M)}function c(m,v){let M=r[m.id];M===void 0&&(x(m),M=d(m),r[m.id]=M,m.addEventListener("dispose",g));const C=v.program;i.updateUBOMapping(m,C);const R=e.render.frame;s[m.id]!==R&&(h(m),s[m.id]=R)}function d(m){const v=f();m.__bindingPointIndex=v;const M=t.createBuffer(),C=m.__size,R=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],M=m.uniforms,C=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,L=M.length;R<L;R++){const N=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,S=N.length;E<S;E++){const I=N[E];if(p(I,R,E,C)===!0){const H=I.__offset,$=Array.isArray(I.value)?I.value:[I.value];let ie=0;for(let oe=0;oe<$.length;oe++){const V=$[oe],j=w(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,H+ie,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,ie),ie+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,v,M,C){const R=m.value,L=v+"_"+M;if(C[L]===void 0)return typeof R=="number"||typeof R=="boolean"?C[L]=R:C[L]=R.clone(),!0;{const N=C[L];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return C[L]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function x(m){const v=m.uniforms;let M=0;const C=16;for(let L=0,N=v.length;L<N;L++){const E=Array.isArray(v[L])?v[L]:[v[L]];for(let S=0,I=E.length;S<I;S++){const H=E[S],$=Array.isArray(H.value)?H.value:[H.value];for(let ie=0,oe=$.length;ie<oe;ie++){const V=$[ie],j=w(V),U=M%C,K=U%j.boundary,ee=U+K;M+=K,ee!==0&&C-ee<j.storage&&(M+=C-ee),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=j.storage}}}const R=M%C;return R>0&&(M+=C-R),m.__size=M,m.__cache={},this}function w(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class XA{constructor(e={}){const{canvas:n=uS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const x=new Uint32Array(4),w=new Int32Array(4);let g=null,u=null;const m=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Br,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=Gn;let R=0,L=0,N=null,E=-1,S=null;const I=new Ut,H=new Ut;let $=null;const ie=new pt(0);let oe=0,V=n.width,j=n.height,U=1,K=null,ee=null;const Me=new Ut(0,0,V,j),Ue=new Ut(0,0,V,j);let st=!1;const Pe=new kp;let ce=!1,B=!1;const fe=new Vt,Fe=new k,Je=new Ut,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Zt(){return N===null?U:1}let F=i;function wt(A,Y){return n.getContext(A,Y)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Tp}`),n.addEventListener("webglcontextlost",Ae,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",_e,!1),F===null){const Y="webgl2";if(F=wt(Y,A),F===null)throw wt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let nt,He,O,Re,re,ae,qe,Qe,D,T,q,de,pe,ue,Ne,me,Ve,We,ge,Se,et,Xe,Le,rt;function W(){nt=new tT(F),nt.init(),Xe=new OA(F,nt),He=new qE(F,nt,e,Xe),O=new UA(F,nt),He.reversedDepthBuffer&&h&&O.buffers.depth.setReversed(!0),Re=new rT(F),re=new SA,ae=new FA(F,nt,O,re,He,Xe,Re),qe=new KE(M),Qe=new eT(M),D=new u2(F),Le=new jE(F,D),T=new nT(F,D,Re,Le),q=new oT(F,T,D,Re),ge=new sT(F,He,ae),me=new $E(re),de=new MA(M,qe,Qe,nt,He,Le,me),pe=new GA(M,re),ue=new EA,Ne=new PA(nt),We=new XE(M,qe,Qe,O,q,p,l),Ve=new NA(M,q,He),rt=new WA(F,Re,He,O),Se=new YE(F,nt,Re),et=new iT(F,nt,Re),Re.programs=de.programs,M.capabilities=He,M.extensions=nt,M.properties=re,M.renderLists=ue,M.shadowMap=Ve,M.state=O,M.info=Re}W();const we=new HA(M,F);this.xr=we,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(A){A!==void 0&&(U=A,this.setSize(V,j,!1))},this.getSize=function(A){return A.set(V,j)},this.setSize=function(A,Y,Q=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,j=Y,n.width=Math.floor(A*U),n.height=Math.floor(Y*U),Q===!0&&(n.style.width=A+"px",n.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(V*U,j*U).floor()},this.setDrawingBufferSize=function(A,Y,Q){V=A,j=Y,U=Q,n.width=Math.floor(A*Q),n.height=Math.floor(Y*Q),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(Me)},this.setViewport=function(A,Y,Q,te){A.isVector4?Me.set(A.x,A.y,A.z,A.w):Me.set(A,Y,Q,te),O.viewport(I.copy(Me).multiplyScalar(U).round())},this.getScissor=function(A){return A.copy(Ue)},this.setScissor=function(A,Y,Q,te){A.isVector4?Ue.set(A.x,A.y,A.z,A.w):Ue.set(A,Y,Q,te),O.scissor(H.copy(Ue).multiplyScalar(U).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(A){O.setScissorTest(st=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,Q=!0){let te=0;if(A){let X=!1;if(N!==null){const ye=N.texture.format;X=ye===Dp||ye===Lp||ye===Pp}if(X){const ye=N.texture.type,De=ye===Hi||ye===Es||ye===Ka||ye===Za||ye===Cp||ye===Rp,ze=We.getClearColor(),Oe=We.getClearAlpha(),je=ze.r,tt=ze.g,$e=ze.b;De?(x[0]=je,x[1]=tt,x[2]=$e,x[3]=Oe,F.clearBufferuiv(F.COLOR,0,x)):(w[0]=je,w[1]=tt,w[2]=$e,w[3]=Oe,F.clearBufferiv(F.COLOR,0,w))}else te|=F.COLOR_BUFFER_BIT}Y&&(te|=F.DEPTH_BUFFER_BIT),Q&&(te|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ae,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),We.dispose(),ue.dispose(),Ne.dispose(),re.dispose(),qe.dispose(),Qe.dispose(),q.dispose(),Le.dispose(),rt.dispose(),de.dispose(),we.dispose(),we.removeEventListener("sessionstart",Rn),we.removeEventListener("sessionend",Vo),pi.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=Re.autoReset,Y=Ve.enabled,Q=Ve.autoUpdate,te=Ve.needsUpdate,X=Ve.type;W(),Re.autoReset=A,Ve.enabled=Y,Ve.autoUpdate=Q,Ve.needsUpdate=te,Ve.type=X}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function he(A){const Y=A.target;Y.removeEventListener("dispose",he),Ge(Y)}function Ge(A){it(A),re.remove(A)}function it(A){const Y=re.get(A).programs;Y!==void 0&&(Y.forEach(function(Q){de.releaseProgram(Q)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,Q,te,X,ye){Y===null&&(Y=Ce);const De=X.isMesh&&X.matrixWorld.determinant()<0,ze=fl(A,Y,Q,te,X);O.setMaterial(te,De);let Oe=Q.index,je=1;if(te.wireframe===!0){if(Oe=T.getWireframeAttribute(Q),Oe===void 0)return;je=2}const tt=Q.drawRange,$e=Q.attributes.position;let at=tt.start*je,At=(tt.start+tt.count)*je;ye!==null&&(at=Math.max(at,ye.start*je),At=Math.min(At,(ye.start+ye.count)*je)),Oe!==null?(at=Math.max(at,0),At=Math.min(At,Oe.count)):$e!=null&&(at=Math.max(at,0),At=Math.min(At,$e.count));const kt=At-at;if(kt<0||kt===1/0)return;Le.setup(X,te,ze,Q,Oe);let Et,bt=Se;if(Oe!==null&&(Et=D.get(Oe),bt=et,bt.setIndex(Et)),X.isMesh)te.wireframe===!0?(O.setLineWidth(te.wireframeLinewidth*Zt()),bt.setMode(F.LINES)):bt.setMode(F.TRIANGLES);else if(X.isLine){let Ke=te.linewidth;Ke===void 0&&(Ke=1),O.setLineWidth(Ke*Zt()),X.isLineSegments?bt.setMode(F.LINES):X.isLineLoop?bt.setMode(F.LINE_LOOP):bt.setMode(F.LINE_STRIP)}else X.isPoints?bt.setMode(F.POINTS):X.isSprite&&bt.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)el("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))bt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ke=X._multiDrawStarts,Lt=X._multiDrawCounts,ut=X._multiDrawCount,Mn=Oe?D.get(Oe).bytesPerElement:1,dr=re.get(te).currentProgram.getUniforms();for(let Pn=0;Pn<ut;Pn++)dr.setValue(F,"_gl_DrawID",Pn),bt.render(Ke[Pn]/Mn,Lt[Pn])}else if(X.isInstancedMesh)bt.renderInstances(at,kt,X.count);else if(Q.isInstancedBufferGeometry){const Ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Lt=Math.min(Q.instanceCount,Ke);bt.renderInstances(at,kt,Lt)}else bt.render(at,kt)};function Rt(A,Y,Q){A.transparent===!0&&A.side===Ei&&A.forceSinglePass===!1?(A.side=$n,A.needsUpdate=!0,zn(A,Y,Q),A.side=Gr,A.needsUpdate=!0,zn(A,Y,Q),A.side=Ei):zn(A,Y,Q)}this.compile=function(A,Y,Q=null){Q===null&&(Q=A),u=Ne.get(Q),u.init(Y),v.push(u),Q.traverseVisible(function(X){X.isLight&&X.layers.test(Y.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),A!==Q&&A.traverseVisible(function(X){X.isLight&&X.layers.test(Y.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),u.setupLights();const te=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ye=X.material;if(ye)if(Array.isArray(ye))for(let De=0;De<ye.length;De++){const ze=ye[De];Rt(ze,Q,X),te.add(ze)}else Rt(ye,Q,X),te.add(ye)}),u=v.pop(),te},this.compileAsync=function(A,Y,Q=null){const te=this.compile(A,Y,Q);return new Promise(X=>{function ye(){if(te.forEach(function(De){re.get(De).currentProgram.isReady()&&te.delete(De)}),te.size===0){X(A);return}setTimeout(ye,10)}nt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let gt=null;function $t(A){gt&&gt(A)}function Rn(){pi.stop()}function Vo(){pi.start()}const pi=new zx;pi.setAnimationLoop($t),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(A){gt=A,we.setAnimationLoop(A),A===null?pi.stop():pi.start()},we.addEventListener("sessionstart",Rn),we.addEventListener("sessionend",Vo),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(Y),Y=we.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,Y,N),u=Ne.get(A,v.length),u.init(Y),v.push(u),fe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Pe.setFromProjectionMatrix(fe,Oi,Y.reversedDepth),B=this.localClippingEnabled,ce=me.init(this.clippingPlanes,B),g=ue.get(A,m.length),g.init(),m.push(g),we.enabled===!0&&we.isPresenting===!0){const ye=M.xr.getDepthSensingMesh();ye!==null&&Rs(ye,Y,-1/0,M.sortObjects)}Rs(A,Y,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(K,ee),ct=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ct&&We.addToRenderList(g,A),this.info.render.frame++,ce===!0&&me.beginShadows();const Q=u.state.shadowsArray;Ve.render(Q,A,Y),ce===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=g.opaque,X=g.transmissive;if(u.setupLights(),Y.isArrayCamera){const ye=Y.cameras;if(X.length>0)for(let De=0,ze=ye.length;De<ze;De++){const Oe=ye[De];Ps(te,X,A,Oe)}ct&&We.render(A);for(let De=0,ze=ye.length;De<ze;De++){const Oe=ye[De];Go(g,A,Oe,Oe.viewport)}}else X.length>0&&Ps(te,X,A,Y),ct&&We.render(A),Go(g,A,Y);N!==null&&L===0&&(ae.updateMultisampleRenderTarget(N),ae.updateRenderTargetMipmap(N)),A.isScene===!0&&A.onAfterRender(M,A,Y),Le.resetDefaultState(),E=-1,S=null,v.pop(),v.length>0?(u=v[v.length-1],ce===!0&&me.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Rs(A,Y,Q,te){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Pe.intersectsSprite(A)){te&&Je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);const De=q.update(A),ze=A.material;ze.visible&&g.push(A,De,ze,Q,Je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Pe.intersectsObject(A))){const De=q.update(A),ze=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Je.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Je.copy(De.boundingSphere.center)),Je.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(ze)){const Oe=De.groups;for(let je=0,tt=Oe.length;je<tt;je++){const $e=Oe[je],at=ze[$e.materialIndex];at&&at.visible&&g.push(A,De,at,Q,Je.z,$e)}}else ze.visible&&g.push(A,De,ze,Q,Je.z,null)}}const ye=A.children;for(let De=0,ze=ye.length;De<ze;De++)Rs(ye[De],Y,Q,te)}function Go(A,Y,Q,te){const X=A.opaque,ye=A.transmissive,De=A.transparent;u.setupLightsView(Q),ce===!0&&me.setGlobalState(M.clippingPlanes,Q),te&&O.viewport(I.copy(te)),X.length>0&&Ls(X,Y,Q),ye.length>0&&Ls(ye,Y,Q),De.length>0&&Ls(De,Y,Q),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Ps(A,Y,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[te.id]===void 0&&(u.state.transmissionRenderTarget[te.id]=new Ts(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?al:Hi,minFilter:gs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const ye=u.state.transmissionRenderTarget[te.id],De=te.viewport||I;ye.setSize(De.z*M.transmissionResolutionScale,De.w*M.transmissionResolutionScale);const ze=M.getRenderTarget(),Oe=M.getActiveCubeFace(),je=M.getActiveMipmapLevel();M.setRenderTarget(ye),M.getClearColor(ie),oe=M.getClearAlpha(),oe<1&&M.setClearColor(16777215,.5),M.clear(),ct&&We.render(Q);const tt=M.toneMapping;M.toneMapping=Br;const $e=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),u.setupLightsView(te),ce===!0&&me.setGlobalState(M.clippingPlanes,te),Ls(A,Q,te),ae.updateMultisampleRenderTarget(ye),ae.updateRenderTargetMipmap(ye),nt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let At=0,kt=Y.length;At<kt;At++){const Et=Y[At],bt=Et.object,Ke=Et.geometry,Lt=Et.material,ut=Et.group;if(Lt.side===Ei&&bt.layers.test(te.layers)){const Mn=Lt.side;Lt.side=$n,Lt.needsUpdate=!0,Ds(bt,Q,te,Ke,Lt,ut),Lt.side=Mn,Lt.needsUpdate=!0,at=!0}}at===!0&&(ae.updateMultisampleRenderTarget(ye),ae.updateRenderTargetMipmap(ye))}M.setRenderTarget(ze,Oe,je),M.setClearColor(ie,oe),$e!==void 0&&(te.viewport=$e),M.toneMapping=tt}function Ls(A,Y,Q){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let X=0,ye=A.length;X<ye;X++){const De=A[X],ze=De.object,Oe=De.geometry,je=De.group;let tt=De.material;tt.allowOverride===!0&&te!==null&&(tt=te),ze.layers.test(Q.layers)&&Ds(ze,Y,Q,Oe,tt,je)}}function Ds(A,Y,Q,te,X,ye){A.onBeforeRender(M,Y,Q,te,X,ye),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(M,Y,Q,te,A,ye),X.transparent===!0&&X.side===Ei&&X.forceSinglePass===!1?(X.side=$n,X.needsUpdate=!0,M.renderBufferDirect(Q,Y,te,X,A,ye),X.side=Gr,X.needsUpdate=!0,M.renderBufferDirect(Q,Y,te,X,A,ye),X.side=Ei):M.renderBufferDirect(Q,Y,te,X,A,ye),A.onAfterRender(M,Y,Q,te,X,ye)}function zn(A,Y,Q){Y.isScene!==!0&&(Y=Ce);const te=re.get(A),X=u.state.lights,ye=u.state.shadowsArray,De=X.state.version,ze=de.getParameters(A,X.state,ye,Y,Q),Oe=de.getProgramCacheKey(ze);let je=te.programs;te.environment=A.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(A.isMeshStandardMaterial?Qe:qe).get(A.envMap||te.environment),te.envMapRotation=te.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",he),je=new Map,te.programs=je);let tt=je.get(Oe);if(tt!==void 0){if(te.currentProgram===tt&&te.lightsStateVersion===De)return Wo(A,ze),tt}else ze.uniforms=de.getUniforms(A),A.onBeforeCompile(ze,M),tt=de.acquireProgram(ze,Oe),je.set(Oe,tt),te.uniforms=ze.uniforms;const $e=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=me.uniform),Wo(A,ze),te.needsLights=ur(A),te.lightsStateVersion=De,te.needsLights&&($e.ambientLightColor.value=X.state.ambient,$e.lightProbe.value=X.state.probe,$e.directionalLights.value=X.state.directional,$e.directionalLightShadows.value=X.state.directionalShadow,$e.spotLights.value=X.state.spot,$e.spotLightShadows.value=X.state.spotShadow,$e.rectAreaLights.value=X.state.rectArea,$e.ltc_1.value=X.state.rectAreaLTC1,$e.ltc_2.value=X.state.rectAreaLTC2,$e.pointLights.value=X.state.point,$e.pointLightShadows.value=X.state.pointShadow,$e.hemisphereLights.value=X.state.hemi,$e.directionalShadowMap.value=X.state.directionalShadowMap,$e.directionalShadowMatrix.value=X.state.directionalShadowMatrix,$e.spotShadowMap.value=X.state.spotShadowMap,$e.spotLightMatrix.value=X.state.spotLightMatrix,$e.spotLightMap.value=X.state.spotLightMap,$e.pointShadowMap.value=X.state.pointShadowMap,$e.pointShadowMatrix.value=X.state.pointShadowMatrix),te.currentProgram=tt,te.uniformsList=null,tt}function dl(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Mc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Wo(A,Y){const Q=re.get(A);Q.outputColorSpace=Y.outputColorSpace,Q.batching=Y.batching,Q.batchingColor=Y.batchingColor,Q.instancing=Y.instancing,Q.instancingColor=Y.instancingColor,Q.instancingMorph=Y.instancingMorph,Q.skinning=Y.skinning,Q.morphTargets=Y.morphTargets,Q.morphNormals=Y.morphNormals,Q.morphColors=Y.morphColors,Q.morphTargetsCount=Y.morphTargetsCount,Q.numClippingPlanes=Y.numClippingPlanes,Q.numIntersection=Y.numClipIntersection,Q.vertexAlphas=Y.vertexAlphas,Q.vertexTangents=Y.vertexTangents,Q.toneMapping=Y.toneMapping}function fl(A,Y,Q,te,X){Y.isScene!==!0&&(Y=Ce),ae.resetTextureUnits();const ye=Y.fog,De=te.isMeshStandardMaterial?Y.environment:null,ze=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Uo,Oe=(te.isMeshStandardMaterial?Qe:qe).get(te.envMap||De),je=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,tt=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),$e=!!Q.morphAttributes.position,at=!!Q.morphAttributes.normal,At=!!Q.morphAttributes.color;let kt=Br;te.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(kt=M.toneMapping);const Et=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,bt=Et!==void 0?Et.length:0,Ke=re.get(te),Lt=u.state.lights;if(ce===!0&&(B===!0||A!==S)){const Nt=A===S&&te.id===E;me.setState(te,A,Nt)}let ut=!1;te.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Lt.state.version||Ke.outputColorSpace!==ze||X.isBatchedMesh&&Ke.batching===!1||!X.isBatchedMesh&&Ke.batching===!0||X.isBatchedMesh&&Ke.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ke.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ke.instancing===!1||!X.isInstancedMesh&&Ke.instancing===!0||X.isSkinnedMesh&&Ke.skinning===!1||!X.isSkinnedMesh&&Ke.skinning===!0||X.isInstancedMesh&&Ke.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ke.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ke.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ke.instancingMorph===!1&&X.morphTexture!==null||Ke.envMap!==Oe||te.fog===!0&&Ke.fog!==ye||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==me.numPlanes||Ke.numIntersection!==me.numIntersection)||Ke.vertexAlphas!==je||Ke.vertexTangents!==tt||Ke.morphTargets!==$e||Ke.morphNormals!==at||Ke.morphColors!==At||Ke.toneMapping!==kt||Ke.morphTargetsCount!==bt)&&(ut=!0):(ut=!0,Ke.__version=te.version);let Mn=Ke.currentProgram;ut===!0&&(Mn=zn(te,Y,X));let dr=!1,Pn=!1,qr=!1;const Dt=Mn.getUniforms(),Bn=Ke.uniforms;if(O.useProgram(Mn.program)&&(dr=!0,Pn=!0,qr=!0),te.id!==E&&(E=te.id,Pn=!0),dr||S!==A){O.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Dt.setValue(F,"projectionMatrix",A.projectionMatrix),Dt.setValue(F,"viewMatrix",A.matrixWorldInverse);const Ft=Dt.map.cameraPosition;Ft!==void 0&&Ft.setValue(F,Fe.setFromMatrixPosition(A.matrixWorld)),He.logarithmicDepthBuffer&&Dt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Dt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Pn=!0,qr=!0)}if(X.isSkinnedMesh){Dt.setOptional(F,X,"bindMatrix"),Dt.setOptional(F,X,"bindMatrixInverse");const Nt=X.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Dt.setValue(F,"boneTexture",Nt.boneTexture,ae))}X.isBatchedMesh&&(Dt.setOptional(F,X,"batchingTexture"),Dt.setValue(F,"batchingTexture",X._matricesTexture,ae),Dt.setOptional(F,X,"batchingIdTexture"),Dt.setValue(F,"batchingIdTexture",X._indirectTexture,ae),Dt.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&Dt.setValue(F,"batchingColorTexture",X._colorsTexture,ae));const Hn=Q.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&ge.update(X,Q,Mn),(Pn||Ke.receiveShadow!==X.receiveShadow)&&(Ke.receiveShadow=X.receiveShadow,Dt.setValue(F,"receiveShadow",X.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Bn.envMap.value=Oe,Bn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&Y.environment!==null&&(Bn.envMapIntensity.value=Y.environmentIntensity),Pn&&(Dt.setValue(F,"toneMappingExposure",M.toneMappingExposure),Ke.needsLights&&Ns(Bn,qr),ye&&te.fog===!0&&pe.refreshFogUniforms(Bn,ye),pe.refreshMaterialUniforms(Bn,te,U,j,u.state.transmissionRenderTarget[A.id]),Mc.upload(F,dl(Ke),Bn,ae)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Mc.upload(F,dl(Ke),Bn,ae),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Dt.setValue(F,"center",X.center),Dt.setValue(F,"modelViewMatrix",X.modelViewMatrix),Dt.setValue(F,"normalMatrix",X.normalMatrix),Dt.setValue(F,"modelMatrix",X.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Nt=te.uniformsGroups;for(let Ft=0,Is=Nt.length;Ft<Is;Ft++){const Vi=Nt[Ft];rt.update(Vi,Mn),rt.bind(Vi,Mn)}}return Mn}function Ns(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function ur(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,Y,Q){const te=re.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=Y,re.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:Q,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const Q=re.get(A);Q.__webglFramebuffer=Y,Q.__useDefaultFramebuffer=Y===void 0};const hl=F.createFramebuffer();this.setRenderTarget=function(A,Y=0,Q=0){N=A,R=Y,L=Q;let te=!0,X=null,ye=!1,De=!1;if(A){const Oe=re.get(A);if(Oe.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(F.FRAMEBUFFER,null),te=!1;else if(Oe.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(Oe.__hasExternalTextures)ae.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Oe.__boundDepthTexture!==$e){if($e!==null&&re.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(De=!0);const tt=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[Y])?X=tt[Y][Q]:X=tt[Y],ye=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?X=re.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?X=tt[Q]:X=tt,I.copy(A.viewport),H.copy(A.scissor),$=A.scissorTest}else I.copy(Me).multiplyScalar(U).floor(),H.copy(Ue).multiplyScalar(U).floor(),$=st;if(Q!==0&&(X=hl),O.bindFramebuffer(F.FRAMEBUFFER,X)&&te&&O.drawBuffers(A,X),O.viewport(I),O.scissor(H),O.setScissorTest($),ye){const Oe=re.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,Q)}else if(De){const Oe=Y;for(let je=0;je<A.textures.length;je++){const tt=re.get(A.textures[je]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+je,tt.__webglTexture,Q,Oe)}}else if(A!==null&&Q!==0){const Oe=re.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Oe.__webglTexture,Q)}E=-1},this.readRenderTargetPixels=function(A,Y,Q,te,X,ye,De,ze=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){O.bindFramebuffer(F.FRAMEBUFFER,Oe);try{const je=A.textures[ze],tt=je.format,$e=je.type;if(!He.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-te&&Q>=0&&Q<=A.height-X&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ze),F.readPixels(Y,Q,te,X,Xe.convert(tt),Xe.convert($e),ye))}finally{const je=N!==null?re.get(N).__webglFramebuffer:null;O.bindFramebuffer(F.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(A,Y,Q,te,X,ye,De,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe)if(Y>=0&&Y<=A.width-te&&Q>=0&&Q<=A.height-X){O.bindFramebuffer(F.FRAMEBUFFER,Oe);const je=A.textures[ze],tt=je.format,$e=je.type;if(!He.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,at),F.bufferData(F.PIXEL_PACK_BUFFER,ye.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ze),F.readPixels(Y,Q,te,X,Xe.convert(tt),Xe.convert($e),0);const At=N!==null?re.get(N).__webglFramebuffer:null;O.bindFramebuffer(F.FRAMEBUFFER,At);const kt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await dS(F,kt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,at),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ye),F.deleteBuffer(at),F.deleteSync(kt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,Q=0){const te=Math.pow(2,-Q),X=Math.floor(A.image.width*te),ye=Math.floor(A.image.height*te),De=Y!==null?Y.x:0,ze=Y!==null?Y.y:0;ae.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,De,ze,X,ye),O.unbindTexture()};const si=F.createFramebuffer(),Xo=F.createFramebuffer();this.copyTextureToTexture=function(A,Y,Q=null,te=null,X=0,ye=null){ye===null&&(X!==0?(el("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=X,X=0):ye=0);let De,ze,Oe,je,tt,$e,at,At,kt;const Et=A.isCompressedTexture?A.mipmaps[ye]:A.image;if(Q!==null)De=Q.max.x-Q.min.x,ze=Q.max.y-Q.min.y,Oe=Q.isBox3?Q.max.z-Q.min.z:1,je=Q.min.x,tt=Q.min.y,$e=Q.isBox3?Q.min.z:0;else{const Hn=Math.pow(2,-X);De=Math.floor(Et.width*Hn),ze=Math.floor(Et.height*Hn),A.isDataArrayTexture?Oe=Et.depth:A.isData3DTexture?Oe=Math.floor(Et.depth*Hn):Oe=1,je=0,tt=0,$e=0}te!==null?(at=te.x,At=te.y,kt=te.z):(at=0,At=0,kt=0);const bt=Xe.convert(Y.format),Ke=Xe.convert(Y.type);let Lt;Y.isData3DTexture?(ae.setTexture3D(Y,0),Lt=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ae.setTexture2DArray(Y,0),Lt=F.TEXTURE_2D_ARRAY):(ae.setTexture2D(Y,0),Lt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const ut=F.getParameter(F.UNPACK_ROW_LENGTH),Mn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),dr=F.getParameter(F.UNPACK_SKIP_PIXELS),Pn=F.getParameter(F.UNPACK_SKIP_ROWS),qr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Et.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,je),F.pixelStorei(F.UNPACK_SKIP_ROWS,tt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$e);const Dt=A.isDataArrayTexture||A.isData3DTexture,Bn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Hn=re.get(A),Nt=re.get(Y),Ft=re.get(Hn.__renderTarget),Is=re.get(Nt.__renderTarget);O.bindFramebuffer(F.READ_FRAMEBUFFER,Ft.__webglFramebuffer),O.bindFramebuffer(F.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let Vi=0;Vi<Oe;Vi++)Dt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,re.get(A).__webglTexture,X,$e+Vi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,re.get(Y).__webglTexture,ye,kt+Vi)),F.blitFramebuffer(je,tt,De,ze,at,At,De,ze,F.DEPTH_BUFFER_BIT,F.NEAREST);O.bindFramebuffer(F.READ_FRAMEBUFFER,null),O.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||re.has(A)){const Hn=re.get(A),Nt=re.get(Y);O.bindFramebuffer(F.READ_FRAMEBUFFER,si),O.bindFramebuffer(F.DRAW_FRAMEBUFFER,Xo);for(let Ft=0;Ft<Oe;Ft++)Dt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Hn.__webglTexture,X,$e+Ft):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Hn.__webglTexture,X),Bn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.__webglTexture,ye,kt+Ft):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nt.__webglTexture,ye),X!==0?F.blitFramebuffer(je,tt,De,ze,at,At,De,ze,F.COLOR_BUFFER_BIT,F.NEAREST):Bn?F.copyTexSubImage3D(Lt,ye,at,At,kt+Ft,je,tt,De,ze):F.copyTexSubImage2D(Lt,ye,at,At,je,tt,De,ze);O.bindFramebuffer(F.READ_FRAMEBUFFER,null),O.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Bn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Lt,ye,at,At,kt,De,ze,Oe,bt,Ke,Et.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(Lt,ye,at,At,kt,De,ze,Oe,bt,Et.data):F.texSubImage3D(Lt,ye,at,At,kt,De,ze,Oe,bt,Ke,Et):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ye,at,At,De,ze,bt,Ke,Et.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ye,at,At,Et.width,Et.height,bt,Et.data):F.texSubImage2D(F.TEXTURE_2D,ye,at,At,De,ze,bt,Ke,Et);F.pixelStorei(F.UNPACK_ROW_LENGTH,ut),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,dr),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qr),ye===0&&Y.generateMipmaps&&F.generateMipmap(Lt),O.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),O.unbindTexture()},this.resetState=function(){R=0,L=0,N=null,O.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}var Zg;const Mt=(Zg=window.Telegram)==null?void 0:Zg.WebApp,Yg="/yggdrasil-tma/",rc=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],jA=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],qg={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},$g=()=>{try{const t={...qg,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...qg,watch:Date.now()}}},ma=()=>new Date().toISOString().slice(0,10),YA=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",Wd=[3,5,8,12,18,25,40],qA=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],$A=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],Xd=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],ga={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},Kg={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},jd={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},Yd={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function Sr({name:t,className:e}){return G.jsx("img",{src:t.includes(".")?`${Yg}img/${t}`:`${Yg}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const KA=`
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
`,ss=(t,e=.9,n=0)=>new xt({color:t,roughness:e,metalness:n}),be=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function ZA(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function JA(t){const e=new Ze,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=ss(i,.92),c=ss(s,.9),d=ss(o,.96),f=ss(r,.95),h=ss(a,.78),p=ss(2106150,.98),x=new se(new An(.28,.24,5,8),d);x.position.y=.72,e.add(x);const w=new se(new An(n?.37:.32,.56,6,10),c);w.position.y=1.15,e.add(w);const g=new se(new An(n?.4:.34,.34,5,8),c);g.scale.z=.82,g.position.y=1.28,e.add(g);const u=new se(new Bt(.36,.38,.09,12),d);u.position.y=.93,e.add(u);const m=new se(new In(.12,.12,.055),h);m.position.set(0,.93,.38),e.add(m);const v=new se(new Bt(.13,.15,.18,10),l);v.position.y=1.63,e.add(v);const M=new se(new Qt(.31,16,12),l);M.scale.set(.92,1.06,.92),M.position.y=1.91,e.add(M);const C=new se(new Qt(.325,14,10),f);C.scale.set(.98,.72,.98),C.position.set(0,2.08,-.025),e.add(C);const R=new se(new An(.18,.3,5,8),f);R.position.set(0,1.93,-.25),R.rotation.x=.15,e.add(R);const L=new se(new Dn(.045,.13,5),l);L.rotation.x=Math.PI/2,L.position.set(0,1.92,.3),e.add(L);const N=new xt({color:1513754,roughness:.55});for(const K of[-.105,.105]){const ee=new se(new Qt(.025,7,5),N);ee.position.set(K,1.98,.285),e.add(ee)}if(n){const K=new se(new Qt(.19,10,7),f);K.scale.set(.82,1,.72),K.position.set(0,1.8,.24),e.add(K)}else{const K=new se(new An(.055,.42,4,7),f);K.position.set(-.27,1.78,-.08),K.rotation.z=-.22,e.add(K)}const E=K=>{const ee=new Ze;ee.position.set(K*(n?.43:.39),1.43,0),ee.rotation.z=K*.07;const Me=new se(new An(.105,.42,5,7),c);Me.position.y=-.23,ee.add(Me);const Ue=new Ze;Ue.position.y=-.46,ee.add(Ue);const st=new se(new An(.085,.34,5,7),d);st.position.y=-.2,Ue.add(st);const Pe=new se(new Qt(.105,9,7),l);return Pe.position.y=-.43,Ue.add(Pe),e.add(ee),{upper:ee,elbow:Ue}},S=E(-1),I=E(1),H=K=>{const ee=new Ze;ee.position.set(K*.15,.68,0);const Me=new se(new An(.12,.42,5,7),p);Me.position.y=-.23,ee.add(Me);const Ue=new Ze;Ue.position.y=-.48,ee.add(Ue);const st=new se(new An(.095,.4,5,7),p);st.position.y=-.22,Ue.add(st);const Pe=new se(new An(.13,.24,5,7),d);return Pe.scale.z=1.25,Pe.position.set(0,-.47,.075),Ue.add(Pe),e.add(ee),ee},$=H(-1),ie=H(1),oe=new se(new An(.42,.1,5,8),d);oe.scale.z=.72,oe.position.y=1.48,e.add(oe);const V=new se(new In(.58,.92,.075),ss(t.id==="berserk"?2821132:1582894,.98));V.position.set(0,1.05,-.28),V.rotation.x=-.035,e.add(V);const j=new Ze;if(t.id==="berserk"||t.id==="dwarf"){const K=new se(new Bt(.035,.045,.72,7),d);K.position.y=.36,j.add(K);const ee=new se(new In(.16,.34,.055),h);ee.position.set(0,.88,0),ee.rotation.z=t.id==="dwarf"?-.22:.22,j.add(ee)}else{const K=new se(new Bt(.028,.04,1.1,7),d);K.position.y=.52,j.add(K);const ee=new se(new Dn(.075,.25,6),h);ee.position.y=1.18,j.add(ee)}if(j.position.set(.43,.32,.03),j.rotation.z=-.12,e.add(j),t.id==="viking"||t.id==="berserk"){const K=new se(new Bt(.3,.3,.1,16),d);K.rotation.x=Math.PI/2,K.position.set(0,1.12,-.37),e.add(K);const ee=new se(new Qt(.065,8,6),h);ee.position.set(0,1.12,-.43),e.add(ee)}const U=new se(new Eo(.62,24),new tl({color:0,transparent:!0,opacity:.32}));return U.rotation.x=-Math.PI/2,U.position.y=.02,e.add(U),e.userData.anim={armL:S,armR:I,legL:$,legR:ie,weapon:j,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0},ZA(e)}function QA({h:t,on:e,eventDone:n}){const i=_t.useRef(null),r=_t.useRef(null),s=_t.useRef(null),o=_t.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=_t.useState(""),[c,d]=_t.useState(!1),[f,h]=_t.useState(!1),[p,x]=_t.useState(!1),[w,g]=_t.useState(!1),u=_t.useRef({x:0,z:1}),m=_t.useRef(!1),v=_t.useRef(null);_t.useEffect(()=>{const E=i.current;if(!E)return;const S=new FS;S.background=new pt(9414817),S.fog=new Op(7307642,.0064);const I=new Qn(54,1,.1,280);I.position.set(0,8.5,17);const H=new XA({antialias:!0,powerPreference:"high-performance"});H.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),H.shadowMap.enabled=!0,H.shadowMap.type=fx,H.outputColorSpace=Gn,H.toneMapping=hx,H.toneMappingExposure=1.08,E.appendChild(H.domElement);const $=new r2(14477797,2896685,1.22);S.add($);const ie=new xg(16770226,3.45);ie.position.set(-42,58,34),ie.castShadow=!0,ie.shadow.mapSize.set(1024,1024),ie.shadow.camera.left=-95,ie.shadow.camera.right=95,ie.shadow.camera.top=95,ie.shadow.camera.bottom=-95,ie.shadow.bias=-5e-4,S.add(ie);const oe=new xg(10467501,.72);oe.position.set(55,18,-60),S.add(oe);const V=(_,b)=>{const y=Math.sin(_*.075)*.7+Math.cos(b*.062)*.55+Math.sin((_-b)*.045)*.35,P=Math.exp(-(_*_/850+(b+2)*(b+2)/1050)),Z=Math.exp(-(_*_/150+(b-12)*(b-12)/2200));return y*(1-P*.88)-Z*.18},j=_=>{const b=document.createElement("canvas");b.width=b.height=512;const y=b.getContext("2d"),P=z=>Math.abs(Math.sin(z*12.9898)*43758.5453)%1;if(_==="ground"){y.fillStyle="#3f4d38",y.fillRect(0,0,512,512);for(let z=0;z<1800;z++){const ne=P(z*1.17)*512,le=P(z*2.31)*512,ve=10+P(z*3.71)*28,J=P(z*4.13);y.fillStyle=J>.72?`rgba(96,108,63,${.08+P(z)*.12})`:`rgba(30,36,25,${.05+P(z)*.12})`,y.beginPath(),y.arc(ne,le,ve,0,Math.PI*2),y.fill()}for(let z=0;z<650;z++){const ne=P(z*7.1)*512,le=P(z*8.2)*512;y.strokeStyle=`rgba(118,126,78,${.16+P(z*2)*.16})`,y.lineWidth=1+P(z*4)*1.5,y.beginPath(),y.moveTo(ne,le),y.lineTo(ne+(P(z*5)-.5)*5,le-3-P(z*6)*5),y.stroke()}}else if(_==="wood"){y.fillStyle="#5a3d29",y.fillRect(0,0,512,512);for(let z=0;z<512;z+=22)y.fillStyle=`rgba(25,15,9,${.18+P(z)*.13})`,y.fillRect(0,z,512,3),y.strokeStyle=`rgba(154,111,69,${.08+P(z*2)*.08})`,y.lineWidth=2,y.beginPath(),y.moveTo(0,z+7),y.bezierCurveTo(150,z+2,340,z+13,512,z+5),y.stroke();for(let z=0;z<65;z++){const ne=P(z*2.1)*512;y.fillStyle=`rgba(20,12,8,${.12+P(z*3)*.16})`,y.fillRect(ne,0,2+P(z*4)*3,512)}}else if(_==="roof"){y.fillStyle="#252522",y.fillRect(0,0,512,512);for(let z=-30;z<550;z+=25){y.fillStyle=`rgba(105,94,77,${.12+P(z)*.08})`,y.fillRect(0,z,512,2),y.strokeStyle="rgba(12,12,11,.48)",y.lineWidth=3;for(let ne=-40;ne<560;ne+=38)y.beginPath(),y.moveTo(ne,z),y.lineTo(ne-18,z+28),y.stroke()}for(let z=0;z<180;z++)y.fillStyle=`rgba(170,154,123,${.03+P(z)*.07})`,y.fillRect(P(z*2)*512,P(z*3)*512,2+P(z*4)*7,2)}else if(_==="bark"){y.fillStyle="#7b5a3f",y.fillRect(0,0,512,512);for(let z=0;z<95;z++){const ne=P(z*2.1)*512,le=2+P(z*3.7)*7;y.fillStyle=`rgba(${24+P(z)*24},${16+P(z*4)*18},${10+P(z*5)*14},${.18+P(z*6)*.22})`,y.fillRect(ne,0,le,512)}for(let z=0;z<80;z++){const ne=P(z*7.1)*512,le=P(z*8.2)*512;y.strokeStyle=`rgba(126,91,60,${.07+P(z*2)*.09})`,y.lineWidth=1+P(z*3)*2,y.beginPath(),y.moveTo(ne,le),y.lineTo(ne+(P(z*4)-.5)*12,le+18+P(z*5)*45),y.stroke()}}else if(_==="foliage"){y.fillStyle="#536b4b",y.fillRect(0,0,512,512);for(let z=0;z<1900;z++){const ne=P(z*1.17)*512,le=P(z*2.31)*512,ve=P(z*3.7),J=ve>.72?76:ve>.36?63:51,Ee=ve>.72?104:ve>.36?87:70,Te=ve>.72?59:ve>.36?49:40;y.fillStyle=`rgba(${J},${Ee},${Te},${.16+P(z*4)*.28})`,y.beginPath(),y.arc(ne,le,1.5+P(z*5)*4.5,0,Math.PI*2),y.fill()}for(let z=0;z<260;z++){const ne=P(z*9.1)*512,le=P(z*10.2)*512;y.strokeStyle=`rgba(18,31,22,${.08+P(z*3)*.12})`,y.lineWidth=1,y.beginPath(),y.moveTo(ne,le),y.lineTo(ne+(P(z*2)-.5)*10,le+(P(z*4)-.5)*10),y.stroke()}}else{y.fillStyle="#514333",y.fillRect(0,0,512,512);for(let z=0;z<1300;z++){const ne=P(z*1.3)*512,le=P(z*2.7)*512;y.fillStyle=`rgba(${45+P(z*3)*38},${35+P(z*4)*28},${23+P(z*5)*20},${.08+P(z*6)*.18})`,y.fillRect(ne,le,2+P(z*7)*7,1+P(z*8)*4)}}const Z=new BS(b);return Z.wrapS=Z.wrapT=So,Z.colorSpace=Gn,Z.anisotropy=4,Z},U=j("ground");U.repeat.set(5,6);const K=j("bark");K.wrapS=K.wrapT=So,K.repeat.set(1.2,1.8);const ee=j("foliage");ee.wrapS=ee.wrapT=So,ee.repeat.set(1.35,1.35);const Me=new Pr(190,190,62,62),Ue=Me.attributes.position;for(let _=0;_<Ue.count;_++){const b=Ue.getX(_),y=-Ue.getY(_);Ue.setZ(_,V(b,y))}Me.rotateX(-Math.PI/2),Me.computeVertexNormals();const st=new se(Me,new Qs({map:U}));st.receiveShadow=!0,S.add(st);const Pe=(_,b,y)=>(b&&(_.userData={id:b,label:y||b}),_.traverse(P=>{P.isMesh&&(P.castShadow=!0,P.receiveShadow=!0)}),S.add(_),b&&Ce.push(_),_),ce=(_,b=.9,y=0)=>new xt({color:_,roughness:b,metalness:y}),B=(_,b,y,P,Z=.9)=>new se(new In(_,b,y),ce(P,Z)),fe=(_,b,y,P=10,Z=.9)=>new se(new Bt(_,_,b,P),ce(y,Z)),Fe=(_,b,y)=>{const P=fe(b,_,y,10,.96);return P.rotation.z=Math.PI/2,P},Je=(_,b,y)=>{const P=new Ze,Z=_*.59,z=.61,ne=new se(new Pr(Z,b),ce(y,.99)),le=ne.clone();return ne.rotation.set(Math.PI/2,0,z),le.rotation.set(Math.PI/2,0,-z),ne.position.x=-_*.205,le.position.x=_*.205,P.add(ne,le),P},Ce=[],ct=[],Zt=[],F=[],wt=[],nt=.62,He=(_,b,y,P,Z=0,z=.12)=>wt.push({kind:"rect",x:_,z:b,w:y+z*2,d:P+z*2,rot:Z}),O=(_,b,y,P=.12)=>wt.push({kind:"circle",x:_,z:b,r:y+P}),Re=(_,b,y,P,Z,z=.12)=>wt.push({kind:"segment",x1:_,z1:b,x2:y,z2:P,r:Z+z}),re=(_,b,y)=>{if(y.kind==="circle")return Math.hypot(_-y.x,b-y.z)<y.r+nt;if(y.kind==="rect"){const J=Math.cos(y.rot),Ee=Math.sin(y.rot),Te=_-y.x,dt=b-y.z,vt=J*Te-Ee*dt,ft=Ee*Te+J*dt,Ct=Math.max(-y.w/2,Math.min(y.w/2,vt)),mi=Math.max(-y.d/2,Math.min(y.d/2,ft));return Math.hypot(vt-Ct,ft-mi)<nt}const P=y.x2-y.x1,Z=y.z2-y.z1,z=P*P+Z*Z,ne=z>0?Math.max(0,Math.min(1,((_-y.x1)*P+(b-y.z1)*Z)/z)):0,le=y.x1+P*ne,ve=y.z1+Z*ne;return Math.hypot(_-le,b-ve)<y.r+nt},ae=(_,b)=>m.current?_<dn-2.72||_>dn+2.72||b<sn-2.05||b>sn+2.3:wt.some(y=>re(_,b,y)),qe=(_,b,y)=>{if(m.current){const z=Math.max(dn-2.55,Math.min(dn+2.55,b)),ne=Math.max(sn-1.92,Math.min(sn+2.55,y));_.x=z,_.z=ne;return}const P=Math.max(-88,Math.min(88,b)),Z=Math.max(-89,Math.min(89,y));if(!ae(P,Z)){_.x=P,_.z=Z;return}ae(P,_.z)||(_.x=P),ae(_.x,Z)||(_.z=Z)},Qe=ce(3425343,1);for(let _=0;_<22;_++){const b=new Ze,y=-105+_*10,P=8+be(_,7)*9,Z=new se(new Dn(P,18+be(_,8)*16,7),Qe);Z.position.y=8,b.add(Z),b.position.set(y,-1,-94+be(_,9)*11),Pe(b)}const D=[];for(let _=0;_<=32;_++)D.push({z:-94+_*6,x:-57+Math.sin(_*.42)*4.2});const T=[],q=[],de=5.4;for(let _=0;_<D.length;_++){const b=D[_],y=D[Math.max(0,_-1)],P=D[Math.min(D.length-1,_+1)],Z=P.x-y.x,z=P.z-y.z,ne=Math.max(.001,Math.hypot(Z,z)),le=-z/ne,ve=Z/ne,J=V(b.x,b.z)+.055;for(const Ee of[-1,1]){const Te=de*Ee;T.push(b.x+le*Te,J+Math.sin(_*1.7+Ee)*.035,b.z+ve*Te)}if(_<D.length-1){const Ee=_*2;q.push(Ee,Ee+1,Ee+2,Ee+1,Ee+3,Ee+2)}}const pe=new rn;pe.setAttribute("position",new yt(T,3)),pe.setIndex(q),pe.computeVertexNormals();const ue=new se(pe,new xt({color:3235689,roughness:.18,metalness:.08,transparent:!0,opacity:.88}));ue.receiveShadow=!0,S.add(ue);const Ne=[];for(let _=0;_<34;_++){const b=D[Math.min(D.length-1,Math.floor(_*.94))],y=.7+be(_,1500)*1.35,P=new se(new Hp(y*.45,y,12),new tl({color:10998996,transparent:!0,opacity:.12,side:Ei}));P.rotation.x=-Math.PI/2,P.scale.y=.42,P.position.set(b.x+(be(_,1501)-.5)*4.5,V(b.x,b.z)+.075,b.z+(be(_,1502)-.5)*4),S.add(P),Ne.push({mesh:P,phase:be(_,1503)*Math.PI*2})}for(let _=0;_<52;_++){const b=Math.min(D.length-1,Math.floor(_*.62)),y=D[b],P=D[Math.max(0,b-1)],Z=D[Math.min(D.length-1,b+1)],z=Z.x-P.x,ne=Z.z-P.z,le=Math.max(.001,Math.hypot(z,ne)),ve=_%2===0?-1:1,J=.34+be(_,15)*.72,Ee=de+ve*(.25+be(_,16)*1.4),Te=new se(new Jt(J,1),ce(6185562,1));Te.position.set(y.x+-ne/le*Ee,V(y.x,y.z)+.18,y.z+z/le*Ee),Te.scale.y=.5+be(_,17)*.35,Pe(Te),O(Te.position.x,Te.position.z,J*.75,.03)}const me=(_,b)=>{const y=_.map(([le,ve])=>new k(le,V(le,ve)+.035,ve)),P=[],Z=[];for(let le=0;le<y.length;le++){const ve=y[Math.max(0,le-1)],J=y[Math.min(y.length-1,le+1)],Ee=J.x-ve.x,Te=J.z-ve.z,dt=Math.max(.001,Math.hypot(Ee,Te)),vt=-Te/dt,ft=Ee/dt;if(P.push(y[le].x+vt*b/2,y[le].y,y[le].z+ft*b/2,y[le].x-vt*b/2,y[le].y+.01,y[le].z-ft*b/2),le<y.length-1){const Ct=le*2;Z.push(Ct,Ct+1,Ct+2,Ct+1,Ct+3,Ct+2)}}const z=new rn;z.setAttribute("position",new yt(P,3)),z.setIndex(Z),z.computeVertexNormals();const ne=new se(z,new xt({map:j("road"),roughness:1}));ne.receiveShadow=!0,S.add(ne),[-b*.22,b*.22].forEach(le=>{const ve=y.map((Te,dt)=>{const vt=y[Math.max(0,dt-1)],ft=y[Math.min(y.length-1,dt+1)],Ct=ft.x-vt.x,mi=ft.z-vt.z,Wi=Math.max(.001,Math.hypot(Ct,mi));return new k(Te.x+-mi/Wi*le,Te.y+.045,Te.z+Ct/Wi*le)}),J=new Vp(new Ux(ve),Math.max(12,y.length*4),.055,5,!1),Ee=new se(J,ce(3352863,1));Ee.scale.y=.12,S.add(Ee)})};me([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),me([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),me([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),me([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),me([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),me([[4,14],[-3,22],[-7,31],[-8,42]],3.8),me([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),me([[4,14],[10,28],[18,41],[27,57]],3.8),me([[5,31],[15,45],[27,57],[39,70]],3.7),me([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),me([[-39,-8],[-47,-12],[-53,-15]],3.4);const Ve=j("wood");Ve.repeat.set(2,1);const We=j("roof");We.repeat.set(2,2);const ge=(_,b,y,P,Z,z,ne,le,ve)=>{const J=new Ze;J.rotation.y=Z,J.position.set(_,V(_,b),b),J.userData={id:ne,label:z};const Ee=new xt({map:Ve,color:le,roughness:.94}),Te=B(y+.7,.55,P+.7,5724755,1);Te.position.y=.28,J.add(Te);for(let fn=0;fn<7;fn++){const vn=.62+fn*.47,oi=Fe(y-fn%2*.2,.29,le);oi.material=Ee,oi.position.set(0,vn,P*.5-.03),J.add(oi);const pr=oi.clone();pr.position.z=-P*.5+.03,J.add(pr);const gi=Fe(P+.06,.29,le);gi.material=Ee,gi.rotation.y=Math.PI/2,gi.position.set(-y*.5+.03,vn,0),J.add(gi);const Jo=gi.clone();Jo.position.x=y*.5-.03,J.add(Jo)}for(const fn of[-y*.5,y*.5])for(const vn of[-P*.5,P*.5]){const oi=fe(.34,3.75,3482649,8,1);oi.position.set(fn,2.05,vn),J.add(oi)}const dt=B(1.18,2.05,.18,2365458,1);dt.position.set(0,1.37,P*.5+.31),J.add(dt);for(const fn of[-.67,.67]){const vn=B(.15,2.28,.24,3811613,1);vn.position.set(fn,1.42,P*.5+.34),J.add(vn)}const vt=Fe(1.65,.11,3679770);vt.position.set(0,2.53,P*.5+.34),J.add(vt);const ft=fe(.055,.12,13015634,8,.55);ft.rotation.z=Math.PI/2,ft.position.set(.33,1.38,P*.5+.43),J.add(ft);const Ct=new xt({color:14986840,emissive:10116382,emissiveIntensity:1.5,roughness:.45});for(const fn of[-y*.27,y*.27]){const vn=B(1.28,1.02,.13,3154457,1);vn.position.set(fn,2.02,P*.5+.29),J.add(vn);const oi=B(.94,.7,.055,15251295,.45);oi.material=Ct,oi.position.set(fn,2.02,P*.5+.36),J.add(oi);const pr=B(.07,.78,.09,3154457,1);pr.position.set(fn,2.02,P*.5+.4),J.add(pr);const gi=B(1.05,.07,.09,3154457,1);gi.position.set(fn,2.02,P*.5+.4),J.add(gi)}const mi=Je(y+1.15,P+1,ve);mi.position.y=4.15,J.add(mi);const Wi=Fe(P+1.2,.16,2760730);Wi.rotation.y=Math.PI/2,Wi.position.y=5.1,J.add(Wi);const Zo=B(y*.34,.16,1.05,6439467,1);Zo.position.set(0,.64,P*.5+.66),J.add(Zo);for(const fn of[-y*.16,y*.16]){const vn=Fe(.85,.08,4796447);vn.rotation.y=Math.PI/2,vn.position.set(fn,.83,P*.5+.95),J.add(vn)}const Os=fe(.34,2,5722958,8,1);Os.position.set(y*.25,5.05,-P*.1),J.add(Os);const ks=B(.72,.14,.72,3157289,1);ks.position.set(y*.25,6.08,-P*.1),J.add(ks),Pe(J,ne,z),Ce.push(J),He(_,b,y+.85,P+.85,Z,.05)};ge(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),ge(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),ge(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),ge(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),ge(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),ge(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const Se=new Ze;Se.position.set(-10,V(-10,-5),-5),Se.userData={id:"forge",label:"Кузница"};for(let _=0;_<7;_++){const b=.62+_*.47,y=Fe(9,.27,4401693);y.position.set(0,b,-2.85),Se.add(y);const P=Fe(6,.27,4401693);P.rotation.y=Math.PI/2,P.position.set(-4.35,b,0),Se.add(P)}for(const _ of[-4.35,4.35]){const b=fe(.34,4,2825493,9,1);b.position.set(_,2,-2.85),Se.add(b)}const et=Je(9.8,7,2433825);et.position.y=4.45,Se.add(et);const Xe=Fe(7.2,.18,2169366);Xe.rotation.y=Math.PI/2,Xe.position.y=5.42,Se.add(Xe);for(const _ of[-3.7,3.7]){const b=Fe(4.7,.13,2825494);b.rotation.z=_<0?-.6:.6,b.position.set(_*.48,3.15,.1),Se.add(b)}const Le=fe(1.15,1.65,3420462,10,1);Le.position.set(-2,.83,1.15),Se.add(Le);const rt=fe(.88,.35,2565925,10,1);rt.position.set(-2,1.83,1.15),Se.add(rt);const W=new se(new Eo(.52,16),new xt({color:16740390,emissive:16726536,emissiveIntensity:5,roughness:.4}));W.rotation.y=Math.PI,W.position.set(-2,1.02,2.23),Se.add(W);const we=fe(.27,.85,2697770,8,.45);we.position.set(1.15,.43,1.05),Se.add(we);const Ae=B(1.45,.34,.58,2435114,.38);Ae.position.set(1.15,1,1.05),Se.add(Ae);const ke=new se(new Dn(.18,.72,8),ce(2435114,.38,.05));ke.rotation.z=-Math.PI/2,ke.position.set(1.98,1,1.05),Se.add(ke);for(let _=0;_<4;_++){const b=Fe(1.25,.045,11184548);b.rotation.z=-.35+_*.18,b.position.set(2.05+_*.18,1.12,1.34),Se.add(b)}const _e=B(1.15,.42,.62,3876893,1);_e.position.set(2.15,.72,-.8),_e.rotation.z=-.18,Se.add(_e);const he=fe(.07,.55,5980979,8,1);he.rotation.z=Math.PI/2,he.position.set(1.55,.84,-.8),Se.add(he),Pe(Se,"forge","Кузница"),Ce.push(Se),He(-10,-5,9.6,6.6,0,.05);const Ge=new pa(16742962,3.4,14,2);Ge.position.set(-12,V(-12,-5)+2.2,-4),S.add(Ge);const it=new se(new Eo(8.5,32),new xt({color:7035463,roughness:1}));it.rotation.x=-Math.PI/2,it.position.set(1,V(1,0)+.05,0),it.receiveShadow=!0,S.add(it);for(let _=0;_<18;_++){const b=_/18*Math.PI*2,y=new se(new Jt(.38,1),ce(7039843,1));y.position.set(1+Math.cos(b)*8.8,V(1+Math.cos(b)*8.8,Math.sin(b)*8.8)+.22,Math.sin(b)*8.8),S.add(y)}const Rt=(_,b)=>{const y=new Ze,P=B(2.8,.22,1,6832937,1);P.position.y=1.05,y.add(P);for(const Z of[-1.05,1.05]){const z=B(.16,1,.16,3877149,1);z.position.set(Z,.5,-.32),y.add(z);const ne=z.clone();ne.position.z=.32,y.add(ne)}y.position.set(_,V(_,b),b),S.add(y)};Rt(-4,2),Rt(7,3);const gt=(_,b,y)=>{const P=new Ze;P.position.set(_,V(_,b),b);for(let J=0;J<7;J++){const Ee=J/7*Math.PI*2,Te=new se(new Jt(.32*y,1),ce(6117970,1));Te.position.set(Math.cos(Ee)*.7*y,.25*y,Math.sin(Ee)*.7*y),P.add(Te)}const Z=B(.2*y,.2*y,1.5*y,4861211,1),z=Z.clone();Z.rotation.y=.55,z.rotation.y=-.55,Z.position.y=z.position.y=.38*y,P.add(Z,z);const ne=new xt({color:16744744,emissive:16731402,emissiveIntensity:4}),le=new se(new Dn(.5*y,1.35*y,8),ne);le.position.y=1.02*y,P.add(le),S.add(P);const ve=new pa(16747068,2.4*y,12*y,2);return ve.position.set(_,V(_,b)+2*y,b),S.add(ve),ct.push({light:ve,flame:le,phase:be(_,b)*8}),P};gt(1,0,1.15),gt(18,-15,.72);const $t=(_,b,y,P,Z=1.25)=>{const z=new Ze,ne=y-_,le=P-b,ve=Math.hypot(ne,le),J=Math.max(1,Math.floor(ve/1.55));for(let Ee=0;Ee<=J;Ee++){const Te=Ee/J,dt=_+ne*Te,vt=b+le*Te,ft=B(.18,Z,.18,4796447,1);ft.position.set(dt,V(dt,vt)+Z/2,vt),z.add(ft)}for(const Ee of[-.28,.38]){const Te=B(.14,.14,ve,5978917,1);Te.rotation.y=Math.atan2(ne,le),Te.position.set((_+y)/2,V((_+y)/2,(b+P)/2)+Z*Ee,(b+P)/2),z.add(Te)}S.add(z),Re(_,b,y,P,.12,.02)},Rn=(_,b,y,P,Z,z,ne)=>{const le=new Ze;le.position.set(_,V(_,b),b),le.rotation.y=Z,le.userData={id:ne,label:z};const ve=B(y+.25,.35,P+.25,5591368,1);ve.position.y=.18,le.add(ve);const J=new se(new In(y,2.5,P),new xt({map:Ve,color:6439983,roughness:1}));J.position.y=1.45,le.add(J);const Ee=new se(new In(y+.6,.18,P+.65),new xt({map:We,color:2696996,roughness:1}));Ee.rotation.z=.55,Ee.position.set(-.16,3,0),le.add(Ee);const Te=Ee.clone();Te.rotation.z=-.55,Te.position.x=.16,le.add(Te);const dt=B(1.05,1.75,.12,2759700,1);dt.position.set(0,1.05,P/2+.07),le.add(dt),Pe(le,ne,z),Ce.push(le),He(_,b,y+.55,P+.55,Z,.04)},Vo=(_,b,y=1)=>{const P=new Ze;P.position.set(_,V(_,b),b);const Z=new se(new Bt(.65*y,.65*y,1.2*y,10),ce(9073729,1));Z.rotation.z=Math.PI/2,Z.position.y=.62*y,P.add(Z);for(let z=0;z<3;z++){const ne=new se(new on(.66*y,.025*y,5,18),ce(5851693,1));ne.rotation.y=Math.PI/2,ne.position.y=(.28+z*.34)*y,P.add(ne)}Pe(P)},pi=(_,b,y)=>{const P=new Ze;P.position.set(_,V(_,b),b),P.rotation.y=y;const Z=B(2.8,.28,1.45,6636331,1);Z.position.y=1,P.add(Z);for(const ne of[-1.15,1.15])for(const le of[-.55,.55]){const ve=B(.16,1.15,.16,4401950,1);ve.position.set(ne,.55,le),P.add(ve)}for(const ne of[-1.15,1.15]){const le=new se(new Bt(.5,.5,.18,14),ce(2696738,1));le.rotation.z=Math.PI/2,le.position.set(ne,.52,-.92),P.add(le)}const z=B(.16,.16,2.4,4796447,1);z.rotation.x=Math.PI/2,z.position.set(0,.72,-2),P.add(z),Pe(P)},Rs=(_,b,y=0)=>{const P=new Ze;P.position.set(_,V(_,b),b),P.rotation.y=y;const Z=B(2.2,.16,.5,7359021,1);Z.position.y=.85,P.add(Z);for(const z of[-.78,.78]){const ne=B(.12,.8,.12,4139549,1);ne.position.set(z,.4,0),P.add(ne)}Pe(P)},Go=(_,b)=>{const y=new Ze;y.position.set(_,V(_,b),b);for(let ne=0;ne<10;ne++){const le=ne/10*Math.PI*2,ve=B(.45,.38,.38,6710621,1);ve.position.set(Math.cos(le)*.95,.19,Math.sin(le)*.95),ve.rotation.y=le,y.add(ve)}const P=B(.16,2.2,.16,4861984,1),Z=P.clone();P.position.set(-.9,1.2,0),Z.position.set(.9,1.2,0),y.add(P,Z);const z=B(2,.16,.16,3876891,1);z.position.y=2.25,y.add(z),Pe(y)};Rn(-19,31,8,5,.08,"Амбар","barn"),Rn(17,34,7,5,-.2,"Сарай","shed"),Rn(27,13,6,4,.45,"Склад рыбака","fishshed"),$t(-25,27,-13,27),$t(-25,27,-25,38),$t(-25,38,-14,38),$t(12,29,25,29),$t(25,29,25,40),$t(25,40,12,40),$t(29,-1,39,-1),$t(39,-1,39,10),$t(39,10,30,10);for(const _ of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])Vo(_[0],_[1],_[2]);pi(-17,24,.18),pi(29,-5,-.55),Rs(-20,23,.18),Rs(25,31,-.2),ge(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),ge(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),ge(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),ge(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),He(-31,8,7.8,5.8,.1,.04),He(-27,20,7.8,5.8,-.25,.04),He(31,18,7.8,5.8,.32,.04),He(20,24,7.8,5.8,-.12,.04);const Ps=(_,b,y)=>{const P=new Ze;P.position.set(_,V(_,b),b),P.rotation.y=y;const Z=B(3,.18,1.25,7357994,1);Z.position.y=1.45,P.add(Z);for(const ne of[-1.25,1.25])for(const le of[-.48,.48]){const ve=B(.13,1.45,.13,4270877,1);ve.position.set(ne,.72,le),P.add(ve)}const z=new se(new Dn(1.65,2.5,4,1,!1,Math.PI/4),ce(4798510,1));z.scale.z=.55,z.position.y=2.15,P.add(z),Pe(P)};Ps(-5,-7,.12),Ps(8,-5,-.18),Ps(6,7,.5);for(const _ of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])Go(_[0],_[1]);const Ls=(_,b,y=1)=>{const P=new Ze,Z=V(_,b);for(let z=0;z<5;z++){const ne=new se(new Qt((.28+be(z,_)*.18)*y,8,6),ce(z%2?3494457:4284223,1));ne.position.set((be(z,2)-.5)*.7*y,.28*y,(be(z,3)-.5)*.7*y),P.add(ne)}P.position.set(_,Z,b),Pe(P)};for(let _=0;_<48;_++){const b=be(_,501)*Math.PI*2,y=18+be(_,502)*39,P=Math.cos(b)*y,Z=Math.sin(b)*y+4;Math.abs(P)<9&&Math.abs(Z)<14||Ls(P,Z,.65+be(_,503)*.75)}for(let _=0;_<34;_++){const b=-84+be(_,610)*168,y=-82+be(_,611)*164;if(Math.hypot(b,y-2)<24)continue;const P=.25+be(_,612)*.55,Z=new se(new Jt(P,1),ce(5725013,1));Z.scale.y=.55,Z.position.set(b,V(b,y)+P*.28,y),Z.rotation.set(be(_,613),be(_,614),be(_,615)),Pe(Z),O(b,y,P*.8,.03)}ge(-64,36,8,5,.12,"Старый дом","oldfarm",6505263,2828582),Rn(-58,42,6,4,-.12,"Старый амбар","oldbarn"),$t(-70,32,-60,32),$t(-70,32,-70,43),$t(-70,43,-61,43),Vo(-67,39,.9),pi(-61,33,-.25),Go(-57,34);const Ds=new Ze;Ds.position.set(-63,V(-63,47),47);for(let _=0;_<6;_++){const b=B(10,.035,.12,4208682,1);b.position.set(0,.02,(_-2.5)*1.05),b.rotation.y=.06,Ds.add(b)}Pe(Ds);const zn=new Ze;zn.position.set(39,V(39,70),70),zn.userData={id:"runefield",label:"Поле Рун"};const dl=ce(5593942,1),Wo=new xt({color:12163675,emissive:6833949,emissiveIntensity:1.6,roughness:.62});for(let _=0;_<11;_++){const b=be(_,1201)*Math.PI*2,y=3.5+be(_,1202)*8,P=new se(new Jt(.65+be(_,1203)*.38,1),dl);P.scale.y=1.4+be(_,1204)*1.5,P.position.set(Math.cos(b)*y,P.scale.y*.48,Math.sin(b)*y),P.rotation.set(be(_,1205),b,be(_,1206)),zn.add(P);const Z=new se(new In(.11,.035,.72),Wo);Z.position.set(P.position.x,P.position.y+.55,P.position.z),Z.rotation.y=-b+.45,zn.add(Z)}for(let _=0;_<5;_++){const b=B(.22,1.8,.22,4861984,1);b.position.set(-6+_*3,.9,7.5),zn.add(b);const y=new se(new on(.34,.035,6,18),Wo);y.rotation.x=Math.PI/2,y.position.set(-6+_*3,1.55,7.5),zn.add(y)}const fl=new Ze;for(let _=0;_<7;_++){const b=_/7*Math.PI*2,y=new se(new Jt(.3,1),ce(5591885,1));y.position.set(Math.cos(b)*.65,.22,Math.sin(b)*.65),fl.add(y)}zn.add(fl),Pe(zn,"runefield","Поле Рун"),Ce.push(zn),O(39,70,1,.08);const Ns=(_,b,y,P)=>{const Z=new Ze,z=y-_,ne=P-b,le=Math.hypot(z,ne),ve=Math.floor(le/1.7);for(let Ee=0;Ee<=ve;Ee++){const Te=Ee/ve,dt=_+z*Te,vt=b+ne*Te,ft=new se(new Dn(.24,.24+2.8+be(Ee,_)*.5,6),ce(3942940,1));ft.position.set(dt,V(dt,vt)+1.45,vt),Z.add(ft)}const J=B(.3,.35,le,2957593,1);J.rotation.y=Math.atan2(z,ne),J.position.set((_+y)/2,V((_+y)/2,(b+P)/2)+1.25,(b+P)/2),Z.add(J),S.add(Z),Re(_,b,y,P,.34,.08)};Ns(-30,-31,-8,-31),Ns(8,-31,30,-31),Ns(-30,-31,-30,-13),Ns(30,-31,30,16);const ur=new Ze;ur.userData={id:"gate",label:"Ворота Мидгарда"};for(const _ of[-4.2,4.2]){const b=B(.8,6,.8,3482906,1);b.position.set(_,3,-31),ur.add(b)}const hl=B(10,.8,1,2957336,1);hl.position.set(0,6,-31),ur.add(hl);for(let _=-3;_<=3;_++){const b=B(1,4.2,.22,5978660,1);b.position.set(_*1.15,2,-30.7),ur.add(b)}Pe(ur,"gate","Ворота Мидгарда"),Ce.push(ur),O(-4.2,-31,.55,.05),O(4.2,-31,.55,.05);const si=new Ze;si.userData={id:"mimir",label:"Колодец Мимира"},si.position.set(18,V(18,15),15);for(let _=0;_<14;_++){const b=_/14*Math.PI*2,y=B(.7,.48,.5,6711907,1);y.position.set(Math.cos(b)*1.45,.24,Math.sin(b)*1.45),y.rotation.y=b+Math.PI/2,si.add(y)}const Xo=new se(new Eo(1.05,28),new xt({color:1522499,emissive:733496,emissiveIntensity:1.8,roughness:.18}));Xo.rotation.x=-Math.PI/2,Xo.position.y=.5,si.add(Xo);for(const _ of[-1.35,1.35]){const b=B(.22,3,.22,4861984,1);b.position.set(_,1.55,0),si.add(b)}const A=B(3.1,.25,.25,3679513,1);A.position.y=2.95,si.add(A);const Y=B(.55,.5,.55,5913383,1);Y.position.set(0,1.65,0),si.add(Y);const Q=new se(new on(1.8,.06,8,40),new xt({color:7792028,emissive:2653256,emissiveIntensity:3}));Q.rotation.x=Math.PI/2,Q.position.y=.53,si.add(Q),Pe(si,"mimir","Колодец Мимира"),Ce.push(si),O(18,15,1.8,.08);const te=new pa(7530656,1.8,10,2);te.position.set(18,V(18,15)+1.4,15),S.add(te);const X=new Ze;X.userData={id:"norns",label:"Прядильня норн"},X.position.set(-25,V(-25,43),43);for(let _=0;_<3;_++){const b=new se(new An(.65,2.3,5,8),ce(5725529,1));b.position.set((_-1)*2.2,1.35,0),b.rotation.z=(_-1)*.07,X.add(b);const y=new se(new on(.42,.055,7,20),new xt({color:[13100495,13149416,14795380][_],emissive:[6134129,7490961,9268264][_],emissiveIntensity:2.2}));y.rotation.x=Math.PI/2,y.position.set((_-1)*2.2,1.6,-.55),X.add(y)}const ye=new Ch({color:13944039,transparent:!0,opacity:.78});for(let _=0;_<2;_++){const b=[new k((_-1)*2.2,2,.1),new k((_-.5)*2.2,4.1,-.7),new k(_*2.2,2,.1)];X.add(new pg(new rn().setFromPoints(b),ye))}const De=new se(new on(4.1,.07,8,48),new xt({color:12429522,emissive:6113136,emissiveIntensity:1.5}));De.rotation.x=Math.PI/2,De.position.y=.05,X.add(De),Pe(X,"norns","Прядильня норн"),Ce.push(X),O(-25,43,3,.1);const ze=-43,Oe=62,je=new Ze;je.userData={id:"ritual",label:"Круг Силы"},je.position.set(ze,V(ze,Oe),Oe);const tt=ce(6711651,1),$e=ce(5593685,1);for(let _=0;_<2;_++){const b=_===0?18:12,y=_===0?6.2:3.65;for(let P=0;P<b;P++){const Z=P/b*Math.PI*2+_*.12,z=y+(be(P,930+_)*.5-.25),ne=.42+be(P,940+_)*.48,le=new se(new Jt(.55+be(P,950+_)*.28,1),_===0?tt:$e);le.scale.y=.65+ne*.35,le.position.set(Math.cos(Z)*z,ne*.45,Math.sin(Z)*z),le.rotation.set(be(P,960+_),Z+be(P,970+_),be(P,980+_)),je.add(le)}}const at=new se(new Jt(1.05,1),ce(5593428,1));at.scale.set(1.25,.62,1.05),at.position.y=.5,je.add(at);for(const _ of[2.1,3.15,5.15]){const b=new se(new on(_,.045,7,64),new xt({color:9219739,emissive:3496777,emissiveIntensity:1.4,transparent:!0,opacity:.72}));b.rotation.x=Math.PI/2,b.position.y=.055,je.add(b)}const At=new xt({color:13215838,emissive:9199384,emissiveIntensity:2.2,roughness:.5});for(let _=0;_<8;_++){const b=_/8*Math.PI*2,y=new se(new In(.13,.025,.65),At);y.position.set(Math.cos(b)*4.55,.075,Math.sin(b)*4.55),y.rotation.y=-b,je.add(y)}Pe(je,"ritual","Круг Силы"),Ce.push(je),O(ze,Oe,1.25,.06);const kt=new pa(9226152,1.15,11,2);kt.position.set(ze,V(ze,Oe)+1.6,Oe),S.add(kt);const Et=new Ze;Et.userData={id:"rune",label:"Древний камень Феху"},Et.position.set(27,V(27,57),57);const bt=new se(new Jt(1.45,1),ce(5002063,1));bt.position.y=1.2,Et.add(bt);const Ke=new se(new on(1.05,.07,8,30),new xt({color:16766826,emissive:10052371,emissiveIntensity:3}));Ke.rotation.x=Math.PI/2,Ke.position.y=1.2,Et.add(Ke),Pe(Et,"rune","Древний камень Феху"),Ce.push(Et),O(27,57,1.7,.1);const Lt=new Ze;Lt.userData={id:"port",label:"Мост к причалу"};for(let _=-5;_<=5;_++){const b=B(3.6,.28,.82,6307882,1);b.position.set(-53,V(-53,_*1)+.5,_),Lt.add(b)}Pe(Lt,"port","Мост к причалу"),Ce.push(Lt);const ut=new Ze;ut.position.set(-46,V(-46,-15),-15);for(let _=0;_<7;_++){const b=B(2.8,.24,.72,7030573,1);b.position.set(0,.3,_*.85),ut.add(b)}for(const _ of[-1.2,1.2])for(let b=0;b<3;b++){const y=B(.22,1.5,.22,4139292,1);y.position.set(_,-.2,b*2.5),ut.add(y)}const Mn=B(2.2,.55,4.8,4926493,1);Mn.position.set(3,-.15,2.5),ut.add(Mn),Pe(ut,"port","Речной причал"),Ce.push(ut);const dr=(_,b)=>{const y=new se(new Bt(.5,.5,1,12),ce(6636332,1));y.position.set(_,V(_,b)+.5,b),S.add(y);for(const P of[.25,.76]){const Z=new se(new on(.51,.045,6,18),ce(3156004,.7,.1));Z.rotation.x=Math.PI/2,Z.position.set(_,V(_,b)+P,b),S.add(Z)}},Pn=(_,b)=>{const y=B(1,.75,1,7359022,1);y.position.set(_,V(_,b)+.38,b),S.add(y);const P=B(.08,.82,1.05,3679770,1);P.position.set(_,V(_,b)+.38,b),S.add(P),He(_,b,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([_,b])=>dr(_,b)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([_,b])=>Pn(_,b));const qr=(_,b,y)=>{const P=new Ze,Z=V(_,b),z=new xt({map:K,color:16777215,roughness:.96}),ne=new se(new Bt(.2*y,.36*y,4.8*y,10),z);ne.position.y=2.4*y,ne.rotation.z=(be(_,b)-.5)*.05,P.add(ne);for(let ve=0;ve<7;ve++){const J=(1.35+ve*.5)*y,Ee=ve%2?1:-1,Te=new se(new Bt(.045*y,.1*y,(1.15+ve*.13)*y,7),z);Te.position.set(Ee*.35*y,J,(be(ve,b)-.5)*.34*y),Te.rotation.z=Ee*(.72-be(ve,_)*.18),Te.rotation.y=be(ve+20,b)*Math.PI*2,P.add(Te)}const le=[new xt({map:ee,color:2046505,roughness:.98}),new xt({map:ee,color:2705458,roughness:.98}),new xt({map:ee,color:3430204,roughness:.98})];for(let ve=0;ve<10;ve++){const J=(1.38-ve/9*.72)*y,Ee=new se(new Qt(J,8,6),le[ve%3]);Ee.scale.set(1+.18*be(ve,_),.62+.1*be(ve,b),.82+.18*be(ve*2,_)),Ee.position.set((be(ve*4,_)-.5)*.52*y,(1.75+ve*.4)*y,(be(ve*5,b)-.5)*.48*y),P.add(Ee)}if(y>1.25){const ve=new se(new Qt(.95*y,8,6),le[1]);ve.scale.y=.48,ve.position.set(.2*y,.95*y,-.05*y),P.add(ve)}P.position.set(_,Z,b),Pe(P),y>=1.15&&O(_,b,.42*y,.04)},Dt=(_,b,y,P=!1)=>{const Z=new Ze,z=V(_,b),ne=new Qs({map:K,color:16777215}),le=new se(new Bt(.32*y,.52*y,5.8*y,11),ne);le.position.y=2.9*y,le.rotation.z=(be(_,b)-.5)*.035,Z.add(le);const ve=P?8:6;for(let J=0;J<ve;J++){const Ee=J/ve*Math.PI*2+be(J,_)*.25,Te=(1.65+be(J+30,b)*1.35)*y,dt=new se(new Bt(.075*y,.16*y,Te,8),ne);dt.position.set(Math.cos(Ee)*Te*.34,(3.35+be(J+40,_)*1.25)*y,Math.sin(Ee)*Te*.34),dt.rotation.z=Math.cos(Ee)*.78,dt.rotation.x=Math.sin(Ee)*.78,dt.rotation.y=-Ee,Z.add(dt);for(let vt=0;vt<3;vt++){const ft=new se(new Qt((.42+be(vt+J,90)*.22)*y,8,6),new Qs({map:ee,color:vt%2?13951176:12965304})),Ct=.55+vt*.18;ft.position.set(Math.cos(Ee)*Te*.62+(be(vt,J)-.5)*.35*y,(3.55+be(J,vt)*1.15+Ct)*y,Math.sin(Ee)*Te*.62+(be(vt+4,J)-.5)*.35*y),ft.scale.y=.72,Z.add(ft)}}for(let J=0;J<(P?7:4);J++){const Ee=be(J+100,_)*Math.PI*2,Te=new se(new Bt(.025*y,.055*y,(.9+be(J,b)*.7)*y,6),ne);Te.position.set(Math.cos(Ee)*1.05*y,(3.15+be(J+5,_)*1.5)*y,Math.sin(Ee)*1.05*y),Te.rotation.z=(be(J+8,b)-.5)*.35,Z.add(Te)}Z.position.set(_,z,b),Pe(Z),y>=1.2&&O(_,b,.62*y,.04)},Bn=(_,b,y,P)=>{const Z=new Ze,z=ce(9071949,1),ne=ce(3418916,1),le=ce(11576718,1),ve=new se(new An(.46*y,1*y,6,10),z);ve.rotation.z=Math.PI/2,ve.position.y=.9*y,Z.add(ve);const J=new se(new Bt(.24*y,.32*y,.84*y,8),z);J.position.set(.48*y,1.25*y,0),J.rotation.z=-.35,Z.add(J);const Ee=new se(new Qt(.31*y,10,7),z);Ee.scale.set(1.25,.9,1),Ee.position.set(.77*y,1.58*y,0),Z.add(Ee);const Te=new se(new Qt(.14*y,8,5),ne);Te.scale.z=.72,Te.position.set(1*y,1.53*y,0),Z.add(Te);for(const vt of[-.25,.25])for(const ft of[-.27,.34]){const Ct=new se(new Bt(.065*y,.09*y,.72*y,6),ne);Ct.position.set(ft*y,.48*y,vt*y),Ct.rotation.z=ft<0?.08:-.06,Z.add(Ct)}for(const vt of[-1,1])for(let ft=0;ft<4;ft++){const Ct=new se(new Bt(.028*y,.05*y,.38*y,5),le);Ct.position.set(.7*y,(1.82+ft*.13)*y,vt*(.11+ft*.055)*y),Ct.rotation.z=vt*(.45-ft*.08),Z.add(Ct)}const dt=new se(new Qt(.13*y,7,5),z);dt.position.set(-.52*y,1.05*y,0),dt.scale.set(.7,1.2,.7),Z.add(dt),Z.position.set(_,V(_,b),b),Z.userData={phase:P},Pe(Z),F.push({g:Z,x:_,z:b,r:4+be(P,41)*3,speed:1.25+be(P,42)*.8,phase:P,kind:"deer"})},Hn=(_,b)=>{const y=new Ze,P=ce(6965552,1),Z=ce(3089436,1),z=new se(new Qt(.22,8,6),P);z.scale.set(1.35,.9,.9),z.position.y=.72,y.add(z);const ne=new se(new Qt(.17,8,6),P);ne.position.set(.22,.86,0),y.add(ne);for(const J of[-1,1]){const Ee=new se(new Dn(.06,.18,6),P);Ee.position.set(.17,.99,J*.09),y.add(Ee)}const le=new se(new on(.24,.075,7,14,Math.PI*1.65),P);le.rotation.y=Math.PI/2,le.position.set(-.22,.91,0),y.add(le);const ve=new se(new Qt(.025,6,4),Z);ve.position.set(.35,.9,-.12),y.add(ve),y.position.set(_,V(_,b),b),Pe(y,"ratatosk","Белка Рататоск"),Ce.push(y),O(_,b,.28,.02),F.push({g:y,x:_,z:b,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},Nt=-4,Ft=69,Is=new Ze;Is.userData={id:"ashgrove",label:"Роща Ясеня"};const Vi=[[-5,2,1.65,!1],[-1,1,1.45,!1],[-7,4,1.25,!1],[1,5,1.3,!1],[-2,7,2.05,!0],[4,3,1.15,!1]];for(const[_,b,y,P]of Vi)Dt(Nt+_,Ft+b,y,P);for(let _=0;_<9;_++){const b=_/9*Math.PI*2,y=4.2+be(_,1301)*2,P=new se(new Jt(.48+be(_,1302)*.24,1),ce(5725014,1));P.position.set(Nt+Math.cos(b)*y,V(Nt+Math.cos(b)*y,Ft+Math.sin(b)*y)+.35,Ft+Math.sin(b)*y),P.scale.y=1.3+be(_,1303)*.7,P.rotation.set(be(_,1304),b,be(_,1305)),Pe(P)}const gu=new se(new on(5.7,.055,7,64),new xt({color:9214840,emissive:3755313,emissiveIntensity:1.1,transparent:!0,opacity:.62}));gu.rotation.x=Math.PI/2,gu.position.set(Nt,V(Nt,Ft)+.045,Ft),S.add(gu);const vu=new se(new Jt(1,1),ce(5199441,1));vu.position.set(Nt,V(Nt,Ft)+.75,Ft),vu.scale.y=1.5,S.add(vu);const _u=new se(new on(.62,.05,7,24),new xt({color:12757607,emissive:6637341,emissiveIntensity:1.7}));_u.rotation.x=Math.PI/2,_u.position.set(Nt,V(Nt,Ft)+1.45,Ft),S.add(_u),Ce.push(Is),O(Nt,Ft,1,.08);const fr=61,hr=78,Wx=new Ze;Wx.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const xu=new se(new on(5.6,.055,7,56),new xt({color:9016697,emissive:3425071,emissiveIntensity:1,transparent:!0,opacity:.55}));xu.rotation.x=Math.PI/2,xu.position.set(fr,V(fr,hr)+.04,hr),S.add(xu);const $r=new Ze;$r.position.set(fr,V(fr,hr),hr),$r.userData={id:"hoddmimir",label:"Лес Ходдмимира"};for(const _ of[-2.4,2.4]){const b=B(.28,2.5,.28,4862755,1);b.position.set(_,1.25,0),$r.add(b)}const yu=new se(new Dn(3.4,1.65,6),ce(3813673,1));yu.position.y=2.75,yu.scale.z=.72,$r.add(yu),gt(fr,hr+1.8,.55);const Xp=new se(new Jt(.8,1),ce(5264976,1));Xp.position.set(fr,V(fr,hr)+.65,hr+2.2),$r.add(Xp),Pe($r,"hoddmimir","Лес Ходдмимира"),Ce.push($r),O(fr,hr,1.1,.08);const jo=30,Yo=53;for(let _=0;_<4;_++)Bn(jo+(_-1.5)*2.6,Yo+(_%2?2.6:-2.6),1.12+be(_,1440)*.16,10+_);const jp=new se(new Jt(.72,1),ce(5725526,1));jp.position.set(jo,V(jo,Yo)+.5,Yo),S.add(jp);const Mu=new se(new on(5.8,.045,7,48),new xt({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));Mu.rotation.x=Math.PI/2,Mu.position.set(jo,V(jo,Yo)+.035,Yo),S.add(Mu),Hn(Nt+5,Ft+1);const pl=12,ml=49,Us=new Ze;Us.position.set(pl,V(pl,ml),ml);const Su=new se(new Jt(1.05,1),ce(5133648,1));Su.position.y=.85,Su.scale.y=1.55,Us.add(Su);const wu=new se(new on(2.7,.055,7,48),new xt({color:10259632,emissive:4929114,emissiveIntensity:1.8,transparent:!0,opacity:.78}));wu.rotation.x=Math.PI/2,wu.position.y=.06,Us.add(wu);const Xx=new Ch({color:14207464,transparent:!0,opacity:.72});for(let _=0;_<3;_++){const b=[new k((_-1)*.72,.95,.15),new k((_-1)*1.25,2.9,-.35+Math.sin(_)*.25),new k((_-1)*1.75,.5,.9)];Us.add(new pg(new rn().setFromPoints(b),Xx))}for(let _=0;_<7;_++){const b=new se(new Jt(.11,0),ce(6708050,1)),y=-1+_*.32;b.position.set(-1.7+y*.95,.06,-1.6+_*.46),b.scale.set(1.6,.35,.8),Us.add(b)}Pe(Us,"forestEvent","Камень Трёх Нитей"),O(pl,ml,1.15,.08);const Eu=(_,b,y,P,Z,z,ne)=>{const le=new Ze;le.position.set(_,V(_,b),b);const ve=new se(new Jt(.78+ne*.08,1),ce(z,1));ve.position.y=.58+ne*.08,ve.scale.y=1.35,le.add(ve);const J=new se(new on(2+ne*.18,.045,7,40),new xt({color:Z,emissive:Z,emissiveIntensity:1.25,transparent:!0,opacity:.62}));J.rotation.x=Math.PI/2,J.position.y=.045,le.add(J);for(let Ee=0;Ee<3+ne;Ee++){const Te=new se(new Jt(.12,0),ce(7827558,1)),dt=Ee/(3+ne)*Math.PI*2;Te.position.set(Math.cos(dt)*(1.15+ne*.12),.08,Math.sin(dt)*(1.15+ne*.12)),Te.scale.y=.45,le.add(Te)}Pe(le,y,P),Ce.push(le),O(_,b,.9,.08)};Eu(-15,58,"forestCache","Забытый тайник",11701074,4931637,2),Eu(46,43,"forestWhisper","Камень Шёпота",7902629,4541773,3),Eu(-48,72,"forestThread","Разорванная нить",10252688,5326925,2);const Tu=(_,b,y,P,Z,z)=>{const ne=new Ze;ne.position.set(_,V(_,b),b);const le=new se(new on(y,.07,8,56),new xt({color:z===1?6716259:z===2?7305088:8218965,emissive:z===1?2505513:2435888,emissiveIntensity:.7,transparent:!0,opacity:.48}));le.rotation.x=Math.PI/2,le.position.y=.045,ne.add(le);for(let ve=0;ve<Math.floor(y/2);ve++){const J=be(ve,_*11+b)*Math.PI*2,Ee=y*.35+be(ve,b*17)*y*.45,Te=new se(new Jt(.28+be(ve,33)*.22,1),ce(z===1?5594452:z===2?5330522:5917244,1));Te.position.set(Math.cos(J)*Ee,.22,Math.sin(J)*Ee),Te.scale.y=.65,ne.add(Te)}Pe(ne,P,Z),Ce.push(ne)};Tu(70,18,8.5,"hunterCamp","Забытая стоянка",3),Tu(67,49,9.5,"deepGrove","Глубокая роща",1),Tu(52,7,7.5,"fallenAsh","Поверженный ясень",2);const dn=75,sn=30,Gt=new Ze;Gt.position.set(dn,V(dn,sn),sn);const jx=ce(5986899,1),Yp=B(7.8,.42,5.8,5591885,1);Yp.position.y=.22,Gt.add(Yp);const qp=B(7.4,2.8,.3,6439727,1);qp.position.set(0,1.4,-2.7),Gt.add(qp);const $p=B(.3,2.8,5.4,6439727,1);$p.position.set(-3.7,1.4,0),Gt.add($p);const Kp=B(.3,2.8,5.4,6439727,1);Kp.position.set(3.7,1.4,0),Gt.add(Kp);const Zp=B(2.55,2.8,.3,6439727,1);Zp.position.set(-2.43,1.4,2.7),Gt.add(Zp);const Jp=B(2.55,2.8,.3,6439727,1);Jp.position.set(2.43,1.4,2.7),Gt.add(Jp);const Qp=B(2.3,.72,.3,6439727,1);Qp.position.set(0,2.44,2.7),Gt.add(Qp);const em=B(.16,2.18,.34,2826523,1);em.position.set(-.66,1.28,2.72),Gt.add(em);const tm=B(.16,2.18,.34,2826523,1);tm.position.set(.66,1.28,2.72),Gt.add(tm);const nm=B(1.48,.16,.34,2826523,1);nm.position.set(0,2.34,2.72),Gt.add(nm);const Fs=new Ze;Fs.position.set(-.57,0,2.72),Gt.add(Fs);const im=B(1.14,2.05,.12,3154457,1);im.position.set(.57,1.28,0),Fs.add(im);const rm=new se(new Qt(.08,8,6),ce(11831883,1));rm.position.set(.86,1.25,.1),Fs.add(rm);const Yx=new xt({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const _ of[-2.35,2.35]){const b=B(1.25,1,.12,2826523,1);b.position.set(_,1.72,2.78),Gt.add(b);const y=new se(new In(.98,.72,.06),Yx);y.position.set(_,1.72,2.86),Gt.add(y);const P=B(.07,.78,.1,2826523,1);P.position.set(_,1.72,2.91),Gt.add(P);const Z=B(1.08,.07,.1,2826523,1);Z.position.set(_,1.72,2.91),Gt.add(Z)}const sm=new xt({map:We,color:2697767,roughness:.98,side:Ei}),qo=new se(new Pr(4.25,6.25),sm),$o=new se(new Pr(4.25,6.25),sm);qo.rotation.x=Math.PI/2,$o.rotation.x=Math.PI/2,qo.rotation.z=.62,$o.rotation.z=-.62,qo.position.set(-1.02,3.95,0),$o.position.set(1.02,3.95,0),Gt.add(qo,$o);const Au=B(.22,.22,6.45,2695965,1);Au.position.y=4.75,Gt.add(Au);const bu=new se(new In(.48,1.35,.48),jx);bu.position.set(1.55,4.8,-.65),Gt.add(bu);const Cu=B(.62,.1,.62,3420461,1);Cu.position.set(1.55,5.48,-.65),Gt.add(Cu);const om=B(2.35,.18,1,6636845,1);om.position.set(0,.62,3.15),Gt.add(om);const am=B(1.55,.16,.48,5849131,1);am.position.set(0,.3,3.58),Gt.add(am),Pe(Gt,"heroHome","Домик героя"),Ce.push(Gt),He(dn,sn-2.72,7.4,.3,0,.05),He(dn-3.72,sn,.3,5.45,0,.05),He(dn+3.72,sn,.3,5.45,0,.05),He(dn-2.43,sn+2.72,2.55,.3,0,.05),He(dn+2.43,sn+2.72,2.55,.3,0,.05);const Xt=new Ze;Xt.position.set(dn,V(dn,sn),sn),Xt.visible=!1;const lm=B(7,.16,5,4928548,1);lm.position.y=.5,Xt.add(lm);const cm=B(7,2.65,.18,4139808,1);cm.position.set(0,1.8,-2.45),Xt.add(cm);const um=B(.18,2.65,4.9,4139808,1);um.position.set(-3.45,1.8,0),Xt.add(um);const dm=B(.18,2.65,4.9,4139808,1);dm.position.set(3.45,1.8,0),Xt.add(dm);const fm=B(2.35,2.65,.18,4139808,1);fm.position.set(-2.42,1.8,2.45),Xt.add(fm);const hm=B(2.35,2.65,.18,4139808,1);hm.position.set(2.42,1.8,2.45),Xt.add(hm);const pm=B(2.5,.04,2.1,7162673,1);pm.position.set(-.15,.6,.25),Xt.add(pm);const mm=B(1.65,.65,2.15,4008478,1);mm.position.set(-2.15,.88,-1.25),Xt.add(mm);const gm=B(1.48,.12,1.35,7033152,1);gm.position.set(-2.15,1.27,-.92),Xt.add(gm);const vm=B(1.28,.18,.46,11903114,1);vm.position.set(-2.15,1.38,-1.95),Xt.add(vm);const _m=B(1.65,.12,1.05,5255969,1);_m.position.set(.85,1.15,-.15),Xt.add(_m);for(const[_,b]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const y=B(.1,.7,.1,3679515,1);y.position.set(_,.72,b),Xt.add(y)}const xm=B(1.25,.8,.72,5978660,1);xm.position.set(2.1,.95,-1.7),Xt.add(xm);const ym=B(1.9,.14,.45,5978660,1);ym.position.set(1.35,2,-2.25),Xt.add(ym);for(const _ of[.75,1.35,1.95]){const b=new se(new Bt(.08,.1,.35,8),ce(7304016,1));b.position.set(_,2.24,-2.22),Xt.add(b)}const Mm=B(1.35,.55,.7,5920078,1);Mm.position.set(2.15,.78,.95),Xt.add(Mm);const Sm=new se(new Dn(.28,.72,8),new xt({color:16744744,emissive:16731402,emissiveIntensity:4}));Sm.position.set(2.15,1.42,.95),Xt.add(Sm);const wm=new pa(16747068,2.2,8,2);wm.position.set(2.15,1.7,.95),Xt.add(wm),Pe(Xt,"heroHomeInterior","Дом героя — внутри"),Ce.push(Xt);const Kr=new Ze;Kr.position.set(dn,V(dn,sn),sn);const Ru=new se(new on(6.2,.055,7,48),new xt({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));Ru.rotation.x=Math.PI/2,Ru.position.y=.035,Kr.add(Ru);for(const[_,b]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const y=B(.18,1,.18,4797735,1);y.position.set(_,.5,b),Kr.add(y)}for(const _ of[-2.4,2.9]){const b=B(10.2,.12,.12,6308139,1);b.position.set(0,.59,_),Kr.add(b)}const qx=ce(6906972,1);for(let _=0;_<7;_++){const b=new se(new Bt(.32,.4,.12,7),qx);b.position.set(0,.08,4.1+_*.72),b.rotation.y=_*.4,Kr.add(b)}gt(dn-2.4,sn+4.8,.48).scale.setScalar(.72),Pe(Kr,"heroHomeYard","Двор домика героя"),Ce.push(Kr),gt(70,18,.75).scale.setScalar(.72);const Em=new se(new Bt(.65,.8,.7,7),ce(5327426,1));Em.position.set(70,V(70,18)+.35,16.5),S.add(Em);for(const[_,b]of[[68,20],[72,20],[68,16],[72,16]]){const y=B(.16,1.15,.16,4797735,1);y.position.set(_,V(_,b)+.57,b),S.add(y)}const gl=new Ze;gl.position.set(52,V(52,7),7);const Pu=new se(new Bt(.5,.62,7,8),new Qs({map:K,color:4995371}));Pu.rotation.z=Math.PI/2,Pu.position.y=.5,gl.add(Pu);const Lu=new se(new Bt(.53,.53,.12,12),ce(7693389,1));Lu.rotation.z=Math.PI/2,Lu.position.set(3.5,.5,0),gl.add(Lu),S.add(gl);for(let _=0;_<7;_++){const b=new se(new Jt(.14,0),ce(6913394,1)),y=_/7*Math.PI*2;b.position.set(67+Math.cos(y)*4,.12+V(67+Math.cos(y)*4,49+Math.sin(y)*4),49+Math.sin(y)*4),S.add(b)}for(let _=0;_<95;_++){const b=be(_,77)*Math.PI*2,y=58+be(_,91)*32,P=Math.cos(b)*y,Z=Math.sin(b)*y+2,ne=[[Nt,Ft,11],[39,70,13],[-64,36,11],[-43,62,10],[30,53,12],[61,78,10],[-15,58,7],[46,43,7],[-48,72,7],[70,18,11],[75,30,13],[67,49,12],[52,7,10]].some(([le,ve,J])=>Math.hypot(P-le,Z-ve)<J);Math.abs(P+57)>9&&!ne&&qr(P,Z,.78+be(_,13)*.82)}Dt(-10,18,1.55,!1),Dt(13,24,1.7,!1),Dt(-31,-12,2.15,!0);for(let _=0;_<110;_++){const b=be(_,701)*Math.PI*2,y=15+be(_,702)*50,P=Math.cos(b)*y,Z=Math.sin(b)*y+3;if(Math.abs(P)<10&&Math.abs(Z)<16)continue;const z=new Ze;z.position.set(P,V(P,Z),Z);for(let ne=0;ne<3;ne++){const le=new se(new Dn(.025,.38+be(ne,_)*.28,4),new Qs({color:ne===1?5466175:4282935}));le.position.set((ne-1)*.09,.18,(be(ne*3,_)-.5)*.12),le.rotation.z=(ne-1)*.22,z.add(le)}S.add(z)}for(let _=0;_<80;_++){const b=-88+be(_,101)*176,y=-88+be(_,111)*176;if(Math.hypot(b,y+2)>30){const P=new se(new Dn(.08,.55+be(_,121)*.7,5),new Qs({color:4941888}));P.position.set(b,V(b,y)+.3,y),S.add(P)}}const Zr=new Ze;Zr.position.set(29,V(29,25),25),Zr.userData={id:"tower",label:"Сторожевая башня"};for(const _ of[-2,2])for(const b of[-2,2]){const y=B(.35,7,.35,3942685,1);y.position.set(_,3.5,b),Zr.add(y)}const Tm=B(5,.35,5,6833965,1);Tm.position.y=5.8,Zr.add(Tm);const Am=new se(new Dn(3.8,2.7,4),ce(2696482,1));Am.position.y=8,Zr.add(Am),Pe(Zr,"tower","Сторожевая башня"),Ce.push(Zr),He(29,25,4.8,4.8,0,.08);const Ko=(_,b,y,P,Z,z)=>{const ne=new Ze;ne.userData={id:y,label:P,phase:z,baseX:_,baseZ:b};const le=new se(new An(.32,.78,4,8),ce(Z,.9));le.position.y=.85,ne.add(le);const ve=new se(new Qt(.25,12,8),ce(13210736,.9));ve.position.y=1.58,ne.add(ve);const J=B(.7,.9,.15,2565407,1);J.position.set(0,.82,-.27),ne.add(J),ne.position.set(_,V(_,b),b),Pe(ne,y,P),Ce.push(ne),Zt.push(ne)};Ko(9,-8,"elder","Старейшина",7558719,.4),Ko(-6,-3,"blacksmith","Кузнец",6044459,1.5),Ko(21,1,"hunter","Охотник",4215359,2.4),Ko(5,10,"villager","Житель Мидгарда",5858125,3.4),Ko(-16,4,"villager2","Житель деревни",6638394,4.2);const $x=new tl({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),Du=new Ze;for(let _=0;_<34;_++){const b=new se(new Qt(.9+be(_,810)*2.2,8,6),$x);b.position.set(-88+be(_,811)*176,1.8+be(_,812)*2.2,-72+be(_,813)*144),Du.add(b)}S.add(Du);const Jr=JA(t);S.add(Jr);const Gi=Jr.userData.anim,bm=new l2,Nu=new Ye,Cm=_=>{var P,Z,z,ne;if((Z=(P=_.target)==null?void 0:P.closest)!=null&&Z.call(P,".mid3d-ui"))return;const b=H.domElement.getBoundingClientRect();Nu.x=(_.clientX-b.left)/b.width*2-1,Nu.y=-((_.clientY-b.top)/b.height)*2+1,bm.setFromCamera(Nu,I);const y=bm.intersectObjects(Ce,!0)[0];if(y){let le=y.object;for(;le.parent&&!((z=le.userData)!=null&&z.id);)le=le.parent;(ne=le.userData)!=null&&ne.id&&e(le.userData.id)}};H.domElement.addEventListener("pointerup",Cm);const Kx=_=>{m.current=_,g(_),l(""),Xt.visible=_,qo.visible=!_,$o.visible=!_,Au.visible=!_,bu.visible=!_,Cu.visible=!_,_?(o.current.x=dn,o.current.z=sn+.95,u.current.x=0,u.current.z=-1,Fs.rotation.y=-Math.PI/2):(o.current.x=dn,o.current.z=sn+3.75,u.current.x=0,u.current.z=1,Fs.rotation.y=0),Jr.position.set(o.current.x,V(o.current.x,o.current.z)+.04,o.current.z)};v.current=Kx;const Zx=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:18,z:15,r:4.8},{id:"norns",label:"Прядильня норн",x:-25,z:43,r:5.4},{id:"rune",label:"Древний камень Феху",x:27,z:57,r:4.5},{id:"ritual",label:"Круг Силы",x:-43,z:62,r:6.8},{id:"port",label:"Речной причал",x:-46,z:-15,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-4,z:69,r:7.5},{id:"forestEvent",label:n?"Камень Трёх Нитей — место выбора":"Камень Трёх Нитей",x:pl,z:ml,r:4.8},{id:"forestCache",label:"Забытый тайник",x:-15,z:58,r:4.2},{id:"forestWhisper",label:"Камень Шёпота",x:46,z:43,r:4.2},{id:"forestThread",label:"Разорванная нить",x:-48,z:72,r:4.2},{id:"runefield",label:"Поле Рун",x:39,z:70,r:8},{id:"oldfarm",label:"Старый хутор",x:-64,z:36,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:30,z:53,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:61,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:70,z:18,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:67,z:49,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:52,z:7,r:7.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],Rm=()=>{const _=Math.max(1,E.clientWidth),b=Math.max(1,E.clientHeight);I.aspect=_/b,I.updateProjectionMatrix(),H.setSize(_,b,!1)};Rm();const Pm=new ResizeObserver(Rm);Pm.observe(E);let Iu=0,Lm=performance.now();const Dm=_=>{const b=Math.min(.05,(_-Lm)/1e3);Lm=_;const y=o.current,P=Math.hypot(y.dx,y.dz);if(P>.05){const J=6.2*b;qe(y,y.x+y.dx/P*J,y.z+y.dz/P*J),Jr.rotation.y=Math.atan2(y.dx,y.dz),u.current.x=y.dx/P,u.current.z=y.dz/P,d(!0)}else d(!1);const Z=V(y.x,y.z);if(Jr.position.set(y.x,Z+.04,y.z),Gi){const J=_*.011+Gi.phase,Ee=P>.05?Math.sin(J)*.58:0,Te=P>.05?Math.sin(J+Math.PI)*.42:0;Gi.legL.rotation.x=Ee,Gi.legR.rotation.x=-Ee,Gi.armL.upper.rotation.x=Te,Gi.armR.upper.rotation.x=-Te,Gi.armL.elbow.rotation.x=-Math.abs(Te)*.35,Gi.armR.elbow.rotation.x=-Math.abs(Te)*.35,Gi.weapon.rotation.z=-.12+(P>.05?Math.sin(J)*.035:0)}const z=u.current,ne=m.current?new k(y.x-z.x*1,Z+3.65,y.z-z.z*1):new k(y.x-z.x*2,Z+7.2,y.z-z.z*2+11.8);I.position.lerp(ne,m.current?.09:.055),I.lookAt(y.x+(m.current?z.x*.9:z.x*1.9),Z+(m.current?1.25:1.2),y.z+(m.current?z.z*.9:z.z*1.9));let le="",ve="";if(m.current)y.z>sn+1.72&&(le="Дверь — выйти из дома",ve="heroHomeExit");else for(const J of Zx)if(Math.hypot(y.x-J.x,y.z-J.z)<J.r){le=J.label,ve=J.id;break}l(le?`${le}|${ve}`:""),Ne.forEach(J=>{const Ee=.72+.28*Math.sin(_*.0016+J.phase);J.mesh.scale.set(Ee,Ee*.42,Ee);const Te=J.mesh.material;Te.opacity=.055+.055*(.5+.5*Math.sin(_*.0016+J.phase))}),ct.forEach(J=>{J.light.intensity=2+Math.sin(_*.012+J.phase)*.5,J.flame.scale.y=.9+Math.sin(_*.009+J.phase)*.12}),Du.children.forEach((J,Ee)=>{J.position.x+=Math.sin(_*12e-5+Ee)*.003,J.position.z+=Math.cos(_*1e-4+Ee)*.002}),F.forEach((J,Ee)=>{if(J.kind==="deer"){const ft=J.g.position.x-Jr.position.x,Ct=J.g.position.z-Jr.position.z,mi=Math.hypot(ft,Ct);if(mi<11){const Wi=Math.max(.001,mi),Zo=mi<5.5?.115:.075,Os=J.g.position.x+ft/Wi*Zo,ks=J.g.position.z+Ct/Wi*Zo,fn=Os-30,vn=ks-53;if(Math.hypot(fn,vn)<17)J.g.position.set(Os,V(Os,ks),ks);else{const pr=Math.atan2(vn,fn),gi=30+Math.cos(pr)*16,Jo=53+Math.sin(pr)*10;J.g.position.set(gi,V(gi,Jo),Jo)}J.g.rotation.y=Math.atan2(Ct,ft),J.g.position.y+=Math.sin(_*.008+Ee)*.025;return}}const Te=_*.00105*J.speed+J.phase,dt=J.x+Math.cos(Te)*J.r,vt=J.z+Math.sin(Te*.83)*J.r*.62;J.g.position.set(dt,V(dt,vt),vt),J.g.rotation.y=Math.atan2(Math.cos(Te*.83),-Math.sin(Te)),J.kind==="deer"&&(J.g.position.y+=Math.sin(_*.006+Ee)*.025)}),Zt.forEach((J,Ee)=>{const Te=J.userData.phase||0,dt=J.userData.baseX,vt=J.userData.baseZ,ft=dt+Math.sin(_*28e-5+Te)*1.6,Ct=vt+Math.cos(_*22e-5+Te)*1.1;J.position.set(ft,V(ft,Ct),Ct),J.rotation.y=Math.sin(_*4e-4+Te)*.5}),H.render(S,I),Iu=requestAnimationFrame(Dm)};return Iu=requestAnimationFrame(Dm),()=>{cancelAnimationFrame(Iu),Pm.disconnect(),H.domElement.removeEventListener("pointerup",Cm),Ne.forEach(_=>{_.mesh.geometry.dispose(),_.mesh.material.dispose()}),U.dispose(),Ve.dispose(),We.dispose(),H.dispose(),S.traverse(_=>{var b,y,P,Z;_.isMesh&&((y=(b=_.geometry)==null?void 0:b.dispose)==null||y.call(b),Array.isArray(_.material)?_.material.forEach(z=>{var ne;return(ne=z.dispose)==null?void 0:ne.call(z)}):(Z=(P=_.material)==null?void 0:P.dispose)==null||Z.call(P))}),H.domElement.remove(),v.current=null}},[t.id,e,n]);const M=E=>{const S=r.current,I=s.current;if(!S||!I)return;const H=S.getBoundingClientRect(),$=H.left+H.width/2,ie=H.top+H.height/2,oe=48;let V=E.clientX-$,j=E.clientY-ie;const U=Math.hypot(V,j);U>oe&&(V=V/U*oe,j=j/U*oe),I.style.transform=`translate(${V}px,${j}px)`,o.current.dx=V/oe,o.current.dz=j/oe},C=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},R=E=>{var j,U;const S=r.current;if(!S)return;const I=E.target;if((j=I.closest)!=null&&j.call(I,".mid3d-action")||(U=I.closest)!=null&&U.call(I,".mid3d-interact"))return;const H=S.getBoundingClientRect(),$=26;E.clientX>=H.left-$&&E.clientX<=H.right+$&&E.clientY>=H.top-78&&E.clientY<=H.bottom+26&&(E.currentTarget.setPointerCapture(E.pointerId),M(E))},L=E=>{E.currentTarget.hasPointerCapture(E.pointerId)&&M(E)},N=E=>{E.currentTarget.hasPointerCapture(E.pointerId)&&E.currentTarget.releasePointerCapture(E.pointerId),C()};return G.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:R,onPointerMove:L,onPointerUp:N,onPointerCancel:N,onContextMenu:E=>E.preventDefault(),children:[G.jsxs("div",{className:"mid3d-ui mid3d-top",children:[G.jsxs("div",{className:"mid3d-pill",children:[G.jsx("b",{children:"МИДГАРД"}),G.jsx("span",{children:"Деревня • река • лес • святилища"})]}),G.jsxs("div",{className:"mid3d-pill",children:[G.jsx("b",{children:"ᛟ"}),G.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),p&&!n&&G.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[G.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),G.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{x(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{x(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{x(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),p&&n&&G.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[G.jsx("b",{children:"Камень Трёх Нитей"}),G.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>x(!1),children:"Продолжить путь"})]}),f&&G.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[G.jsx("b",{children:"🜂 Круг Силы"}),G.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!f&&!p&&(()=>{const[E,S]=a.split("|"),I=S==="heroHome"||S==="heroHomeExit";return G.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[G.jsx("b",{children:E}),G.jsx("span",{children:I?S==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),G.jsx("button",{onPointerDown:H=>H.stopPropagation(),onClick:()=>{var H,$;S==="ritual"?h(!0):S==="forestEvent"?x(!0):S==="heroHome"?(H=v.current)==null||H.call(v,!0):S==="heroHomeExit"?($=v.current)==null||$.call(v,!1):e(S)},children:I?S==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),G.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:G.jsx("div",{className:"mid3d-knob",ref:s})}),G.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:E=>E.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),G.jsx("div",{className:"mid3d-ui mid3d-hint",children:w?c?"Ты внутри дома":"Дом героя • отдых • сундук • выход":c?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function e3(){const[t,e]=_t.useState(()=>$g().hero?{t:"tree"}:{t:"choose"}),[n,i]=_t.useState($g),[r,s]=_t.useState(""),[o,a]=_t.useState(""),[l,c]=_t.useState(""),d=_t.useRef(0),[f,h]=_t.useState(null),[p,x]=_t.useState(null),[w,g]=_t.useState(!1),[u,m]=_t.useState(0),[v,M]=_t.useState(0),[C,R]=_t.useState(0),[L,N]=_t.useState(""),[E,S]=_t.useState(!1),[I,H]=_t.useState(!1),[$,ie]=_t.useState(""),[oe,V]=_t.useState(.06);_t.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),_t.useEffect(()=>{var O,Re,re,ae;(O=Mt==null?void 0:Mt.ready)==null||O.call(Mt),(Re=Mt==null?void 0:Mt.expand)==null||Re.call(Mt),(re=Mt==null?void 0:Mt.setHeaderColor)==null||re.call(Mt,"#0b0f0c"),(ae=Mt==null?void 0:Mt.setBackgroundColor)==null||ae.call(Mt,"#0b0f0c")},[]),_t.useEffect(()=>{if(!(Mt!=null&&Mt.BackButton))return;const O=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(Mt.BackButton.show(),Mt.BackButton.onClick(O)):Mt.BackButton.hide(),()=>{var Re,re;(re=(Re=Mt.BackButton)==null?void 0:Re.offClick)==null||re.call(Re,O)}},[t,n.hero]),_t.useEffect(()=>{h(null),x(null),g(!1),ie(""),S(!1)},[t]);const j=O=>{c(O),window.clearTimeout(d.current),d.current=window.setTimeout(()=>c(""),1800)},U=(O="light")=>{var Re,re,ae,qe;try{O==="success"?(re=(Re=Mt==null?void 0:Mt.HapticFeedback)==null?void 0:Re.notificationOccurred)==null||re.call(Re,"success"):(qe=(ae=Mt==null?void 0:Mt.HapticFeedback)==null?void 0:ae.impactOccurred)==null||qe.call(ae,"light")}catch{}},K=O=>e(O),ee=O=>{U(),e({t:"realm",id:O.id})},Me=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),Ue=()=>{const O=Me();if(O<=0){j("Дозор только начался — искры ещё копятся.");return}i(Re=>({...Re,sparks:Re.sparks+O,watch:Date.now()})),U("success"),j("Дозор завершён: +"+O+" ✨")},st=()=>{if(n.gift===ma())return;const Re=(n.gift?Math.round((Date.parse(ma())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,re=Wd[Re-1];i(ae=>({...ae,sparks:ae.sparks+re,gift:ma(),streak:Re})),U("success"),j("Дар Древа, день "+Re+": +"+re+" ✨")},Pe=()=>{!r||!o||(i(O=>({...O,hero:{id:r,name:o}})),U("success"),j("Путь начинается, "+o+"!"),e({t:"tree"}))},ce=n.hero?Xd.find(O=>O.id===n.hero.id):null,B=O=>Math.floor(Math.random()*O),fe=O=>n.trials.filter(Re=>Re.startsWith(O+":")).length,Fe=O=>{if(n.artifacts.includes(O.id)){j("Мир покорён. Артефакт хранится в листе героя.");return}U(),e({t:"trial",id:O.id})},Je=(O,Re,re)=>{const ae=Re===2;i(qe=>({...qe,sparks:qe.sparks+re+(ae?30:0),trials:[...qe.trials,O+":"+Re],artifacts:ae?[...qe.artifacts,O]:qe.artifacts})),ae&&(U("success"),j("Мир пройден! Артефакт: "+Yd[O]))},Ce=(O,Re)=>{if(f!==null)return;const re=fe(O),ae=jd[O][re];if(Re===ae.c){h(Re),U("success");const qe=12+re*3+((ce==null?void 0:ce.id)==="dwarf"?6:0);j("Верно! Сундук хозяина: +"+qe+" ✨"),Je(O,re,qe);return}if(n.powers.includes("mimirEye")){h(ae.c),i(Qe=>({...Qe,powers:Qe.powers.filter(D=>D!=="mimirEye")}));const qe=8+re*2;U("success"),j("Око Мимира раскрыло истину. Ответ исправлен. +"+qe+" ✨"),Je(O,re,qe);return}if(n.powers.includes("nornThread")){h(Re),i(Qe=>({...Qe,powers:Qe.powers.filter(D=>D!=="nornThread")}));const qe=6+re*2;U("success"),j("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+qe+" ✨"),Je(O,re,qe);return}h(Re),U(),N(ga[O].name+" мрачнеет: «Что ж — пусть решит сталь!»")},ct=O=>{const Re=fe(O),re=jd[O][Re],ae=re.a.findIndex((qe,Qe)=>Qe!==re.c&&Qe!==p);x(ae),g(!0),U(),j("Шёпот ветров уносит один ответ...")},Zt=O=>{const Re=ga[O],re=n.powers.includes("ashBreath");m(Re.hp),M(ce.hp+(re?25:0)),R(ce.en+(re?2:0)),ie(""),S(!1),H(!1),N(re?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":Re.name+" поднимает оружие!"),re&&i(ae=>({...ae,powers:ae.powers.filter(qe=>qe!=="ashBreath")})),e({t:"fight",id:O})},F=(O,Re)=>{if($)return;const re=ga[O],ae=fe(O);let qe=0,Qe="",D=C,T=E;if(Re==="hit"&&(qe=ce.str+B(4),n.powers.includes("fireOath")&&(qe+=5,i(Ne=>({...Ne,powers:Ne.powers.filter(me=>me!=="fireOath")})),Qe="Огненный обет! "),ce.id==="berserk"&&v<=ce.hp/2&&(qe*=2,Qe+="Медвежья ярость! "),Qe+="Ты бьёшь: "+ce.weapon+" — −"+qe+" хозяину."),Re==="rune"){if(C<4){j("Мало энергии для заклинания!");return}D=C-4,qe=ce.en+2+B(5),Qe="Руническое заклинание вспыхивает: −"+qe+" хозяину."}Re==="shield"&&(T=!0,Qe="Ты поднимаешь щит — удар ослабнет.");const q=u-qe;if(q<=0){m(0),R(D),ie("win");const Ne=8+ae*2;N("Хозяин повержен! Награда: +"+Ne+" ✨"),Je(O,ae,Ne);return}let de=re.atk+B(3),pe="";T&&(de=Math.ceil(de*.3),pe=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(de=Math.ceil(de*.65),i(Ne=>({...Ne,powers:Ne.powers.filter(me=>me!=="iceOath")})),pe+=" Ледяной обет сковал удар врага."),ce.id==="dwarf"&&(de=Math.ceil(de*.75));let ue=v;if(ce.id==="viking"&&!I&&ue-de<=0&&(H(!0),de=0,pe=" Крылья бури поглотили смертельный удар!"),ue=ue-de,m(q),M(Math.max(0,ue)),R(D),S(!1),ue<=0&&n.powers.includes("yggdrasilCall")){i(Ne=>({...Ne,powers:Ne.powers.filter(me=>me!=="yggdrasilCall")})),M(30),N(Qe+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(ue<=0){ie("lose"),i(Ne=>({...Ne,sparks:Math.max(0,Ne.sparks-10)})),N(Qe+" "+re.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}N(Qe+pe+" "+re.name+" отвечает: −"+de+".")},wt=O=>{fe(O)>=3||n.artifacts.includes(O)?e({t:"realm",id:O}):e({t:"trial",id:O})},nt=O=>O==="tree"?t.t==="tree"||t.t==="realm":t.t===O,He=O=>O==="tree"?{t:"tree"}:{t:O};return G.jsxs("div",{className:"app",children:[G.jsx("style",{children:KA}),G.jsxs("div",{className:"hdr",children:[t.t==="tree"&&G.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&G.jsx("button",{className:"back",onClick:()=>K({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&G.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&G.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&G.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&G.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&G.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&G.jsx("div",{className:"title",children:"⚔ Бой"}),G.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&G.jsxs("div",{className:"scroll choose-screen",children:[G.jsxs("div",{className:"card center choose-intro",children:[G.jsx("div",{className:"big",children:"ᛉ"}),G.jsx("div",{className:"qhead2",children:"Выбери героя"}),G.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),Xd.map(O=>G.jsxs("button",{className:"hcard"+(r===O.id?" on":""),onClick:()=>{s(O.id),a(""),U()},children:[G.jsx("span",{className:"hface",style:{borderColor:O.color,color:O.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:G.jsx(Sr,{name:O.img,className:"himg"})}),G.jsxs("span",{className:"hinfo",children:[G.jsx("span",{className:"hname",style:{color:O.color},children:O.race}),G.jsxs("span",{className:"hab",children:["🌀 ",O.ability,": ",O.abilityDesc]}),G.jsxs("span",{className:"hst",children:["⚔ ",O.str," • ✨ ",O.en," • ❤ ",O.hp]}),G.jsxs("span",{className:"hw",children:["🗡 ",O.weapon]})]})]},O.id)),r&&G.jsxs("div",{className:"card",children:[G.jsx("div",{className:"qhead2",children:"Имя героя"}),G.jsx("div",{className:"chips",children:(Xd.find(O=>O.id===r).gender==="f"?qA:$A).map(O=>G.jsx("button",{className:"chip"+(o===O?" on":""),onClick:()=>{a(O),U()},children:O},O))})]}),G.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:Pe,children:"Вступить на путь"})]}),t.t==="tree"&&G.jsxs("div",{className:"maparea",children:[G.jsx("div",{className:"mapwrap",children:G.jsxs("div",{className:"mapcanvas",children:[G.jsx(Sr,{name:"tree",className:"mapimg"}),rc.map(O=>G.jsxs("button",{className:"marker",style:{left:O.x+"%",top:O.y+"%"},onClick:()=>ee(O),children:[G.jsxs("div",{className:"amulet-wrap",children:[G.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${O.glow}, transparent 70%)`}}),G.jsx("div",{className:"amulet-ring",style:{borderColor:O.color}}),G.jsx("div",{className:"amulet-core",style:{borderColor:O.color,color:O.color,background:`linear-gradient(135deg, ${O.dark}, #0a0a0a)`},children:O.runeSym})]}),G.jsx("span",{className:"mname",style:{color:O.color,borderColor:O.glow},children:O.name})]},O.id))]})}),G.jsx("div",{className:"fadeT"}),G.jsx("div",{className:"fadeB"}),G.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&ce&&n.hero&&G.jsxs("button",{className:"herobar",onClick:()=>K({t:"hero"}),children:[G.jsxs("span",{className:"hbface",style:{borderColor:ce.color,color:ce.color},children:[G.jsx(Sr,{name:ce.img,className:"hbimg"}),ce.sym]}),G.jsxs("span",{className:"hbname",children:[n.hero.name,G.jsx("i",{children:ce.race})]}),G.jsxs("span",{className:"hbst",children:["⚔ ",ce.str," ✨ ",ce.en," ⏳ ",Me()]}),G.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const O=rc.find(Re=>Re.id===t.id);if(O.id==="midgard"){if(!ce)return null;const Re=re=>{if(U(),re==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?j("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(ae=>({...ae,sparks:ae.sparks+20,done:[...new Set([...ae.done,"forest:present:reward"])]})),U("success"),j("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):j("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(re==="norns"){j("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(re==="forge"||re==="blacksmith"){j("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(re==="house"||re==="elder"){j("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(re==="port"){j("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(re==="rune"){j("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(re==="ashgrove"){j("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(re==="runefield"){j("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(re==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?j("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(ae=>({...ae,sparks:ae.sparks+20,done:[...new Set([...ae.done,"forest:past:reward"])]})),U("success"),j("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):j("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(re==="forestCache"){n.done.includes("forest:cache")?j("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(ae=>({...ae,sparks:ae.sparks+18,done:[...new Set([...ae.done,"forest:cache"])]})),U("success"),j("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(re==="forestWhisper"){n.done.includes("forest:whisper")?j("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(ae=>({...ae,sparks:ae.sparks+16,done:[...new Set([...ae.done,"forest:whisper"])]})),U("success"),j("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(re==="forestThread"){n.done.includes("forest:thread")?j("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(ae=>({...ae,sparks:ae.sparks+22,done:[...new Set([...ae.done,"forest:thread"])]})),U("success"),j("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(re==="heroHome"){j("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(re==="hunterCamp"){n.done.includes("forest:camp")?j("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(ae=>({...ae,sparks:ae.sparks+14,done:[...new Set([...ae.done,"forest:camp"])]})),U("success"),j("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(re==="deepGrove"){n.done.includes("forest:grove")?j("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(ae=>({...ae,sparks:ae.sparks+17,done:[...new Set([...ae.done,"forest:grove"])]})),U("success"),j("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(re==="fallenAsh"){n.done.includes("forest:ash")?j("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(ae=>({...ae,sparks:ae.sparks+21,done:[...new Set([...ae.done,"forest:ash"])]})),U("success"),j("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(re==="deer"){j("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(re==="hoddmimir"){j("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(re==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?j("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(ae=>({...ae,sparks:ae.sparks+20,done:[...new Set([...ae.done,"forest:future:reward"])]})),U("success"),j("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):j("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(re==="forestEvent"){n.done.includes("forest:choice")&&j("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(re==="forestEvent:past"){i(ae=>({...ae,sparks:ae.sparks+12,done:[...new Set([...ae.done,"forest:choice","forest:past"])]})),U("success"),j("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(re==="forestEvent:present"){i(ae=>({...ae,sparks:ae.sparks+12,done:[...new Set([...ae.done,"forest:choice","forest:present"])]})),U("success"),j("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(re==="forestEvent:future"){i(ae=>({...ae,sparks:ae.sparks+12,done:[...new Set([...ae.done,"forest:choice","forest:future"])]})),U("success"),j("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(re==="event"){j("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(re.startsWith("ritual:")){const ae=re.slice(7),qe={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},D={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[ae];if(!D)return;if(n.powers.includes(D)){j(qe[ae]+" уже пробуждён. Его сила ждёт своего часа.");return}i(q=>({...q,powers:[...new Set([...q.powers,D])],done:[...new Set([...q.done,"ritual:"+ae])]}));const T={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};U("success"),j(T[ae]);return}};return G.jsx(QA,{h:ce,on:Re,eventDone:n.done.includes("forest:choice")})}return G.jsxs("div",{className:"content",children:[G.jsx(Sr,{name:O.id,className:"bgimg"}),G.jsx("div",{className:"veil"}),G.jsxs("div",{className:"banner",children:[G.jsx("span",{className:"bemoji",children:O.emoji}),G.jsxs("div",{children:[G.jsx("div",{className:"bname",children:O.name}),G.jsx("div",{className:"btag",children:O.tag})]})]}),G.jsxs("button",{className:"gate",onClick:()=>Fe(O),children:[G.jsxs("span",{className:"gwrap",children:[G.jsx("span",{className:"gate-ring",style:{borderColor:O.color}}),G.jsx("span",{className:"gate-core",style:{borderColor:O.color,color:O.color,background:`radial-gradient(circle, ${O.dark}, #050705 75%)`},children:O.runeSym})]}),G.jsx("span",{className:"mname",style:{color:O.color,borderColor:O.glow},children:n.artifacts.includes(O.id)?"Мир покорён":"Врата мира"})]}),G.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const O=rc.find(qe=>qe.id===t.id),Re=ga[O.id],re=fe(O.id);if(re>=3)return G.jsx("div",{className:"scroll",children:G.jsxs("div",{className:"card center",children:[G.jsx("div",{className:"big",children:"🏺"}),G.jsx("div",{className:"qhead2",children:"Мир покорён!"}),G.jsxs("p",{className:"dim",children:["Артефакт: ",Yd[O.id]]}),G.jsx("button",{className:"btn gold",onClick:()=>K({t:"realm",id:O.id}),children:"К вратам"})]})});const ae=jd[O.id][re];return G.jsxs("div",{className:"scroll",children:[G.jsxs("div",{className:"mhead",children:[G.jsxs("span",{className:"mface",style:{borderColor:O.color,color:O.color},children:[G.jsx(Sr,{name:Kg[O.id],className:"himg"}),Re.sym]}),G.jsx("span",{className:"mname2",style:{color:O.color},children:Re.name}),G.jsxs("span",{className:"mtitle",children:[Re.title," • испытание ",re+1," из 3"]})]}),re===0&&G.jsxs("div",{className:"greet",children:["«",Re.greet,"»"]}),G.jsxs("div",{className:"cloud",children:[G.jsx("div",{className:"riddle",children:ae.q}),ae.a.map((qe,Qe)=>G.jsx("button",{className:"ans"+(f!==null?Qe===ae.c?" good":Qe===f?" bad":" off":p===Qe?" off":""),onClick:()=>Ce(O.id,Qe),children:qe},Qe)),(ce==null?void 0:ce.id)==="elf"&&!w&&f===null&&G.jsx("button",{className:"btn rune",onClick:()=>ct(O.id),children:"🌀 Шёпот ветров"}),f!==null&&(f===ae.c?G.jsx("button",{className:"btn gold",onClick:()=>wt(O.id),children:"Открыть сундук →"}):G.jsx("button",{className:"btn",onClick:()=>Zt(O.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const O=rc.find(re=>re.id===t.id),Re=ga[O.id];return G.jsxs("div",{className:"scroll",children:[G.jsxs("div",{className:"duel",children:[G.jsxs("div",{className:"dside",children:[G.jsxs("span",{className:"dface",style:{borderColor:O.color,color:O.color},children:[G.jsx(Sr,{name:Kg[O.id],className:"himg"}),Re.sym]}),G.jsx("span",{className:"dname",style:{color:O.color},children:Re.name}),G.jsx("span",{className:"dhp",children:G.jsx("span",{className:"dhpfill",style:{width:Math.max(0,u/Re.hp*100)+"%",background:O.color}})}),G.jsxs("span",{className:"dnum",children:[u,"/",Re.hp]})]}),G.jsx("span",{className:"dvs",children:"⚔"}),G.jsxs("div",{className:"dside",children:[G.jsxs("span",{className:"dface",style:{borderColor:ce.color,color:ce.color},children:[G.jsx(Sr,{name:ce.img,className:"himg"}),ce.sym]}),G.jsx("span",{className:"dname",style:{color:ce.color},children:n.hero.name}),G.jsx("span",{className:"dhp",children:G.jsx("span",{className:"dhpfill",style:{width:Math.max(0,v/ce.hp*100)+"%",background:"#7ee787"}})}),G.jsx("span",{className:"denergy",children:Array.from({length:ce.en}).map((re,ae)=>G.jsx("span",{className:"pip"+(ae<C?" on":"")},ae))})]})]}),G.jsx("div",{className:"flog",children:L}),!$&&G.jsxs("div",{className:"acts",children:[G.jsxs("button",{className:"btn gold",onClick:()=>F(O.id,"hit"),children:["⚔ Удар: ",ce.weapon]}),G.jsx("button",{className:"btn rune",onClick:()=>F(O.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),G.jsx("button",{className:"btn shield",onClick:()=>F(O.id,"shield"),children:"🛡 Щит"})]}),$==="win"&&G.jsx("button",{className:"btn gold",onClick:()=>wt(O.id),children:"Забрать награду →"}),$==="lose"&&G.jsx("button",{className:"btn ghost",onClick:()=>K({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&ce&&n.hero&&G.jsx("div",{className:"scroll",children:G.jsxs("div",{className:"card center",children:[G.jsx("span",{className:"hface bigface",style:{borderColor:ce.color,color:ce.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:G.jsx(Sr,{name:ce.img,className:"himg"})}),G.jsxs("div",{className:"qhead2",style:{color:ce.color},children:[n.hero.name," • ",ce.race]}),G.jsxs("div",{className:"stats",children:[G.jsxs("div",{className:"stat",children:[G.jsxs("b",{children:["⚔ ",ce.str]}),G.jsx("span",{children:"сила"})]}),G.jsxs("div",{className:"stat",children:[G.jsxs("b",{children:["✨ ",ce.en]}),G.jsx("span",{children:"энергия"})]}),G.jsxs("div",{className:"stat",children:[G.jsxs("b",{children:["❤ ",ce.hp]}),G.jsx("span",{children:"здоровье"})]})]}),G.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",G.jsx("b",{children:ce.weapon})]}),G.jsxs("div",{className:"hrow",children:["🌀 ",ce.ability,": ",ce.abilityDesc]}),G.jsxs("div",{className:"hrow",children:["✨ Искр: ",G.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",G.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&G.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(O=>Yd[O]).join(", ")]})]})}),t.t==="gift"&&(()=>{const O=n.gift===ma(),re=(n.gift?Math.round((Date.parse(ma())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,ae=O?n.streak:re;return G.jsxs("div",{className:"scroll",children:[G.jsxs("div",{className:"card center",children:[G.jsx("div",{className:"big",children:"🎁"}),G.jsx("div",{className:"qhead2",children:"Дар Древа"}),G.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),G.jsx("div",{className:"days",children:Wd.map((qe,Qe)=>G.jsxs("span",{className:"day"+(Qe+1===ae?" on":Qe+1<ae&&O?" done":""),children:[G.jsx("b",{children:qe}),"день ",Qe+1]},Qe))}),O?G.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):G.jsxs("button",{className:"btn gold",onClick:st,children:["Забрать дар +",Wd[re-1]," ✨"]})]}),G.jsxs("div",{className:"card center",children:[G.jsx("div",{className:"big",children:"⏳"}),G.jsx("div",{className:"qhead2",children:"Дозор героя"}),G.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),G.jsxs("button",{className:"btn gold",onClick:Ue,children:["Завершить дозор · +",Me()," ✨"]})]})]})})(),t.t==="hall"&&G.jsx("div",{className:"scroll",children:G.jsxs("div",{className:"card center",children:[G.jsx("div",{className:"big",children:"🏛️"}),G.jsx("div",{className:"qhead2",children:"Чертог путника"}),G.jsxs("div",{className:"stats",children:[G.jsxs("div",{className:"stat",children:[G.jsxs("b",{children:["✨ ",n.sparks]}),G.jsx("span",{children:"Искр"})]}),G.jsxs("div",{className:"stat",children:[G.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),G.jsx("span",{children:"артефакты"})]})]}),G.jsxs("div",{className:"rank",children:["🏆 Ранг: ",YA(n.sparks)]}),n.hero&&ce&&G.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",ce.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&G.jsx("div",{className:"nav",children:jA.map(O=>G.jsxs("button",{className:"navbtn"+(nt(O.id)?" on":""),onClick:()=>K(He(O.id)),children:[G.jsx("span",{className:"ic",children:O.ic}),O.t]},O.id))}),l&&G.jsx("div",{className:"toast",children:l})]})}ux(document.getElementById("root")).render(G.jsx(e3,{}));
