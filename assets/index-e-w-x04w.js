(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var S0={exports:{}},wc={},M0={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),m_=Symbol.for("react.portal"),g_=Symbol.for("react.fragment"),v_=Symbol.for("react.strict_mode"),__=Symbol.for("react.profiler"),x_=Symbol.for("react.provider"),y_=Symbol.for("react.context"),S_=Symbol.for("react.forward_ref"),M_=Symbol.for("react.suspense"),E_=Symbol.for("react.memo"),w_=Symbol.for("react.lazy"),ip=Symbol.iterator;function T_(t){return t===null||typeof t!="object"?null:(t=ip&&t[ip]||t["@@iterator"],typeof t=="function"?t:null)}var E0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w0=Object.assign,T0={};function co(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||E0}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function A0(){}A0.prototype=co.prototype;function Hf(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||E0}var Vf=Hf.prototype=new A0;Vf.constructor=Hf;w0(Vf,co.prototype);Vf.isPureReactComponent=!0;var rp=Array.isArray,C0=Object.prototype.hasOwnProperty,Gf={current:null},b0={key:!0,ref:!0,__self:!0,__source:!0};function R0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)C0.call(e,i)&&!b0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ea,type:t,key:s,ref:o,props:r,_owner:Gf.current}}function A_(t,e){return{$$typeof:Ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ea}function C_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sp=/\/+/g;function Xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?C_(""+t.key):e.toString(36)}function Rl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ea:case m_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Xc(o,0):i,rp(r)?(n="",t!=null&&(n=t.replace(sp,"$&/")+"/"),Rl(r,e,n,"",function(c){return c})):r!=null&&(Wf(r)&&(r=A_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(sp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",rp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Xc(s,a);o+=Rl(s,e,n,l,r)}else if(l=T_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Xc(s,a++),o+=Rl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ba(t,e,n){if(t==null)return t;var i=[],r=0;return Rl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function b_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tn={current:null},Pl={transition:null},R_={ReactCurrentDispatcher:Tn,ReactCurrentBatchConfig:Pl,ReactCurrentOwner:Gf};function P0(){throw Error("act(...) is not supported in production builds of React.")}ft.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!Wf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ft.Component=co;ft.Fragment=g_;ft.Profiler=__;ft.PureComponent=Hf;ft.StrictMode=v_;ft.Suspense=M_;ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R_;ft.act=P0;ft.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=w0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)C0.call(e,l)&&!b0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ea,type:t.type,key:r,ref:s,props:i,_owner:o}};ft.createContext=function(t){return t={$$typeof:y_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:x_,_context:t},t.Consumer=t};ft.createElement=R0;ft.createFactory=function(t){var e=R0.bind(null,t);return e.type=t,e};ft.createRef=function(){return{current:null}};ft.forwardRef=function(t){return{$$typeof:S_,render:t}};ft.isValidElement=Wf;ft.lazy=function(t){return{$$typeof:w_,_payload:{_status:-1,_result:t},_init:b_}};ft.memo=function(t,e){return{$$typeof:E_,type:t,compare:e===void 0?null:e}};ft.startTransition=function(t){var e=Pl.transition;Pl.transition={};try{t()}finally{Pl.transition=e}};ft.unstable_act=P0;ft.useCallback=function(t,e){return Tn.current.useCallback(t,e)};ft.useContext=function(t){return Tn.current.useContext(t)};ft.useDebugValue=function(){};ft.useDeferredValue=function(t){return Tn.current.useDeferredValue(t)};ft.useEffect=function(t,e){return Tn.current.useEffect(t,e)};ft.useId=function(){return Tn.current.useId()};ft.useImperativeHandle=function(t,e,n){return Tn.current.useImperativeHandle(t,e,n)};ft.useInsertionEffect=function(t,e){return Tn.current.useInsertionEffect(t,e)};ft.useLayoutEffect=function(t,e){return Tn.current.useLayoutEffect(t,e)};ft.useMemo=function(t,e){return Tn.current.useMemo(t,e)};ft.useReducer=function(t,e,n){return Tn.current.useReducer(t,e,n)};ft.useRef=function(t){return Tn.current.useRef(t)};ft.useState=function(t){return Tn.current.useState(t)};ft.useSyncExternalStore=function(t,e,n){return Tn.current.useSyncExternalStore(t,e,n)};ft.useTransition=function(){return Tn.current.useTransition()};ft.version="18.3.1";M0.exports=ft;var yt=M0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_=yt,L_=Symbol.for("react.element"),D_=Symbol.for("react.fragment"),N_=Object.prototype.hasOwnProperty,I_=P_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U_={key:!0,ref:!0,__self:!0,__source:!0};function L0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)N_.call(e,i)&&!U_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:L_,type:t,key:s,ref:o,props:r,_owner:I_.current}}wc.Fragment=D_;wc.jsx=L0;wc.jsxs=L0;S0.exports=wc;var B=S0.exports,D0={exports:{}},Xn={},N0={exports:{}},I0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,te){var ae=U.length;U.push(te);e:for(;0<ae;){var xe=ae-1>>>1,ke=U[xe];if(0<r(ke,te))U[xe]=te,U[ae]=ke,ae=xe;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var te=U[0],ae=U.pop();if(ae!==te){U[0]=ae;e:for(var xe=0,ke=U.length,it=ke>>>1;xe<it;){var et=2*(xe+1)-1,ye=U[et],ne=et+1,oe=U[ne];if(0>r(ye,ae))ne<ke&&0>r(oe,ye)?(U[xe]=oe,U[ne]=ae,xe=ne):(U[xe]=ye,U[et]=ae,xe=et);else if(ne<ke&&0>r(oe,ae))U[xe]=oe,U[ne]=ae,xe=ne;else break e}}return te}function r(U,te){var ae=U.sortIndex-te.sortIndex;return ae!==0?ae:U.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,p=!1,x=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(U){for(var te=n(c);te!==null;){if(te.callback===null)i(c);else if(te.startTime<=U)i(c),te.sortIndex=te.expirationTime,e(l,te);else break;te=n(c)}}function _(U){if(S=!1,g(U),!x)if(n(l)!==null)x=!0,j(C);else{var te=n(c);te!==null&&G(_,te.startTime-U)}}function C(U,te){x=!1,S&&(S=!1,u(L),L=-1),p=!0;var ae=h;try{for(g(te),d=n(l);d!==null&&(!(d.expirationTime>te)||U&&!N());){var xe=d.callback;if(typeof xe=="function"){d.callback=null,h=d.priorityLevel;var ke=xe(d.expirationTime<=te);te=t.unstable_now(),typeof ke=="function"?d.callback=ke:d===n(l)&&i(l),g(te)}else i(l);d=n(l)}if(d!==null)var it=!0;else{var et=n(c);et!==null&&G(_,et.startTime-te),it=!1}return it}finally{d=null,h=ae,p=!1}}var b=!1,R=null,L=-1,y=5,M=-1;function N(){return!(t.unstable_now()-M<y)}function V(){if(R!==null){var U=t.unstable_now();M=U;var te=!0;try{te=R(!0,U)}finally{te?Y():(b=!1,R=null)}}else b=!1}var Y;if(typeof m=="function")Y=function(){m(V)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,q=ee.port2;ee.port1.onmessage=V,Y=function(){q.postMessage(null)}}else Y=function(){v(V,0)};function j(U){R=U,b||(b=!0,Y())}function G(U,te){L=v(function(){U(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,j(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var te=3;break;default:te=h}var ae=h;h=te;try{return U()}finally{h=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,te){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ae=h;h=U;try{return te()}finally{h=ae}},t.unstable_scheduleCallback=function(U,te,ae){var xe=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?xe+ae:xe):ae=xe,U){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=ae+ke,U={id:f++,callback:te,priorityLevel:U,startTime:ae,expirationTime:ke,sortIndex:-1},ae>xe?(U.sortIndex=ae,e(c,U),n(l)===null&&U===n(c)&&(S?(u(L),L=-1):S=!0,G(_,ae-xe))):(U.sortIndex=ke,e(l,U),x||p||(x=!0,j(C))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var te=h;return function(){var ae=h;h=te;try{return U.apply(this,arguments)}finally{h=ae}}}})(I0);N0.exports=I0;var F_=N0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_=yt,Wn=F_;function pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var U0=new Set,ea={};function ls(t,e){Js(t,e),Js(t+"Capture",e)}function Js(t,e){for(ea[t]=e,t=0;t<e.length;t++)U0.add(e[t])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rd=Object.prototype.hasOwnProperty,k_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,op={},ap={};function z_(t){return rd.call(ap,t)?!0:rd.call(op,t)?!1:k_.test(t)?ap[t]=!0:(op[t]=!0,!1)}function B_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function H_(t,e,n,i){if(e===null||typeof e>"u"||B_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function An(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var un={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){un[t]=new An(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];un[e]=new An(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){un[t]=new An(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){un[t]=new An(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){un[t]=new An(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){un[t]=new An(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){un[t]=new An(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){un[t]=new An(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){un[t]=new An(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xf=/[\-:]([a-z])/g;function jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xf,jf);un[e]=new An(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xf,jf);un[e]=new An(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xf,jf);un[e]=new An(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){un[t]=new An(t,1,!1,t.toLowerCase(),null,!1,!1)});un.xlinkHref=new An("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){un[t]=new An(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yf(t,e,n,i){var r=un.hasOwnProperty(e)?un[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(H_(e,n,r,i)&&(n=null),i||r===null?z_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ki=O_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),qf=Symbol.for("react.strict_mode"),sd=Symbol.for("react.profiler"),F0=Symbol.for("react.provider"),O0=Symbol.for("react.context"),$f=Symbol.for("react.forward_ref"),od=Symbol.for("react.suspense"),ad=Symbol.for("react.suspense_list"),Kf=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),k0=Symbol.for("react.offscreen"),lp=Symbol.iterator;function yo(t){return t===null||typeof t!="object"?null:(t=lp&&t[lp]||t["@@iterator"],typeof t=="function"?t:null)}var Vt=Object.assign,jc;function ko(t){if(jc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jc=e&&e[1]||""}return`
`+jc+t}var Yc=!1;function qc(t,e){if(!t||Yc)return"";Yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ko(t):""}function V_(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=qc(t.type,!1),t;case 11:return t=qc(t.type.render,!1),t;case 1:return t=qc(t.type,!0),t;default:return""}}function ld(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ps:return"Fragment";case Rs:return"Portal";case sd:return"Profiler";case qf:return"StrictMode";case od:return"Suspense";case ad:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O0:return(t.displayName||"Context")+".Consumer";case F0:return(t._context.displayName||"Context")+".Provider";case $f:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kf:return e=t.displayName||null,e!==null?e:ld(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return ld(t(e))}catch{}}return null}function G_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ld(e);case 8:return e===qf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function z0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function W_(t){var e=z0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Va(t){t._valueTracker||(t._valueTracker=W_(t))}function B0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=z0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cd(t,e){var n=e.checked;return Vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function H0(t,e){e=e.checked,e!=null&&Yf(t,"checked",e,!1)}function ud(t,e){H0(t,e);var n=Cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dd(t,e.type,n):e.hasOwnProperty("defaultValue")&&dd(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function up(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dd(t,e,n){(e!=="number"||Yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zo=Array.isArray;function Vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function fd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(pe(91));return Vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(pe(92));if(zo(n)){if(1<n.length)throw Error(pe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function V0(t,e){var n=Cr(e.value),i=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function fp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function G0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?G0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ga,W0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X_=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(t){X_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Go[e]=Go[t]})});function X0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Go.hasOwnProperty(t)&&Go[t]?(""+e).trim():e+"px"}function j0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=X0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var j_=Vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pd(t,e){if(e){if(j_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(pe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(pe(62))}}function md(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gd=null;function Jf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vd=null,Gs=null,Ws=null;function hp(t){if(t=Aa(t)){if(typeof vd!="function")throw Error(pe(280));var e=t.stateNode;e&&(e=Rc(e),vd(t.stateNode,t.type,e))}}function Y0(t){Gs?Ws?Ws.push(t):Ws=[t]:Gs=t}function q0(){if(Gs){var t=Gs,e=Ws;if(Ws=Gs=null,hp(t),e)for(t=0;t<e.length;t++)hp(e[t])}}function $0(t,e){return t(e)}function K0(){}var $c=!1;function J0(t,e,n){if($c)return t(e,n);$c=!0;try{return $0(t,e,n)}finally{$c=!1,(Gs!==null||Ws!==null)&&(K0(),q0())}}function na(t,e){var n=t.stateNode;if(n===null)return null;var i=Rc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(pe(231,e,typeof n));return n}var _d=!1;if(ji)try{var So={};Object.defineProperty(So,"passive",{get:function(){_d=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{_d=!1}function Y_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Wo=!1,ql=null,$l=!1,xd=null,q_={onError:function(t){Wo=!0,ql=t}};function $_(t,e,n,i,r,s,o,a,l){Wo=!1,ql=null,Y_.apply(q_,arguments)}function K_(t,e,n,i,r,s,o,a,l){if($_.apply(this,arguments),Wo){if(Wo){var c=ql;Wo=!1,ql=null}else throw Error(pe(198));$l||($l=!0,xd=c)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Z0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pp(t){if(cs(t)!==t)throw Error(pe(188))}function J_(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(pe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return pp(r),t;if(s===i)return pp(r),e;s=s.sibling}throw Error(pe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(pe(189))}}if(n.alternate!==i)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?t:e}function Q0(t){return t=J_(t),t!==null?eg(t):null}function eg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=eg(t);if(e!==null)return e;t=t.sibling}return null}var tg=Wn.unstable_scheduleCallback,mp=Wn.unstable_cancelCallback,Z_=Wn.unstable_shouldYield,Q_=Wn.unstable_requestPaint,Wt=Wn.unstable_now,ex=Wn.unstable_getCurrentPriorityLevel,Zf=Wn.unstable_ImmediatePriority,ng=Wn.unstable_UserBlockingPriority,Kl=Wn.unstable_NormalPriority,tx=Wn.unstable_LowPriority,ig=Wn.unstable_IdlePriority,Tc=null,Ci=null;function nx(t){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(Tc,t,void 0,(t.current.flags&128)===128)}catch{}}var pi=Math.clz32?Math.clz32:sx,ix=Math.log,rx=Math.LN2;function sx(t){return t>>>=0,t===0?32:31-(ix(t)/rx|0)|0}var Wa=64,Xa=4194304;function Bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Bo(a):(s&=o,s!==0&&(i=Bo(s)))}else o=n&~r,o!==0?i=Bo(o):s!==0&&(i=Bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-pi(e),r=1<<n,i|=t[n],e&=~r;return i}function ox(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ax(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ox(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function yd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rg(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function Kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pi(e),t[e]=n}function lx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-pi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Qf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-pi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Tt=0;function sg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var og,eh,ag,lg,cg,Sd=!1,ja=[],vr=null,_r=null,xr=null,ia=new Map,ra=new Map,dr=[],cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gp(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function Mo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Aa(e),e!==null&&eh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ux(t,e,n,i,r){switch(e){case"focusin":return vr=Mo(vr,t,e,n,i,r),!0;case"dragenter":return _r=Mo(_r,t,e,n,i,r),!0;case"mouseover":return xr=Mo(xr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ia.set(s,Mo(ia.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ra.set(s,Mo(ra.get(s)||null,t,e,n,i,r)),!0}return!1}function ug(t){var e=Yr(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=Z0(n),e!==null){t.blockedOn=e,cg(t.priority,function(){ag(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Md(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);gd=i,n.target.dispatchEvent(i),gd=null}else return e=Aa(n),e!==null&&eh(e),t.blockedOn=n,!1;e.shift()}return!0}function vp(t,e,n){Ll(t)&&n.delete(e)}function dx(){Sd=!1,vr!==null&&Ll(vr)&&(vr=null),_r!==null&&Ll(_r)&&(_r=null),xr!==null&&Ll(xr)&&(xr=null),ia.forEach(vp),ra.forEach(vp)}function Eo(t,e){t.blockedOn===e&&(t.blockedOn=null,Sd||(Sd=!0,Wn.unstable_scheduleCallback(Wn.unstable_NormalPriority,dx)))}function sa(t){function e(r){return Eo(r,t)}if(0<ja.length){Eo(ja[0],t);for(var n=1;n<ja.length;n++){var i=ja[n];i.blockedOn===t&&(i.blockedOn=null)}}for(vr!==null&&Eo(vr,t),_r!==null&&Eo(_r,t),xr!==null&&Eo(xr,t),ia.forEach(e),ra.forEach(e),n=0;n<dr.length;n++)i=dr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)ug(n),n.blockedOn===null&&dr.shift()}var Xs=Ki.ReactCurrentBatchConfig,Zl=!0;function fx(t,e,n,i){var r=Tt,s=Xs.transition;Xs.transition=null;try{Tt=1,th(t,e,n,i)}finally{Tt=r,Xs.transition=s}}function hx(t,e,n,i){var r=Tt,s=Xs.transition;Xs.transition=null;try{Tt=4,th(t,e,n,i)}finally{Tt=r,Xs.transition=s}}function th(t,e,n,i){if(Zl){var r=Md(t,e,n,i);if(r===null)ou(t,e,i,Ql,n),gp(t,i);else if(ux(r,t,e,n,i))i.stopPropagation();else if(gp(t,i),e&4&&-1<cx.indexOf(t)){for(;r!==null;){var s=Aa(r);if(s!==null&&og(s),s=Md(t,e,n,i),s===null&&ou(t,e,i,Ql,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ou(t,e,i,null,n)}}var Ql=null;function Md(t,e,n,i){if(Ql=null,t=Jf(i),t=Yr(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Z0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function dg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ex()){case Zf:return 1;case ng:return 4;case Kl:case tx:return 16;case ig:return 536870912;default:return 16}default:return 16}}var pr=null,nh=null,Dl=null;function fg(){if(Dl)return Dl;var t,e=nh,n=e.length,i,r="value"in pr?pr.value:pr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Dl=r.slice(t,1<i?1-i:void 0)}function Nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ya(){return!0}function _p(){return!1}function jn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ya:_p,this.isPropagationStopped=_p,this}return Vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ya)},persist:function(){},isPersistent:Ya}),e}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ih=jn(uo),Ta=Vt({},uo,{view:0,detail:0}),px=jn(Ta),Jc,Zc,wo,Ac=Vt({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(Jc=t.screenX-wo.screenX,Zc=t.screenY-wo.screenY):Zc=Jc=0,wo=t),Jc)},movementY:function(t){return"movementY"in t?t.movementY:Zc}}),xp=jn(Ac),mx=Vt({},Ac,{dataTransfer:0}),gx=jn(mx),vx=Vt({},Ta,{relatedTarget:0}),Qc=jn(vx),_x=Vt({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),xx=jn(_x),yx=Vt({},uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sx=jn(yx),Mx=Vt({},uo,{data:0}),yp=jn(Mx),Ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ax(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Tx[t])?!!e[t]:!1}function rh(){return Ax}var Cx=Vt({},Ta,{key:function(t){if(t.key){var e=Ex[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rh,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bx=jn(Cx),Rx=Vt({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sp=jn(Rx),Px=Vt({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rh}),Lx=jn(Px),Dx=Vt({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nx=jn(Dx),Ix=Vt({},Ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ux=jn(Ix),Fx=[9,13,27,32],sh=ji&&"CompositionEvent"in window,Xo=null;ji&&"documentMode"in document&&(Xo=document.documentMode);var Ox=ji&&"TextEvent"in window&&!Xo,hg=ji&&(!sh||Xo&&8<Xo&&11>=Xo),Mp=" ",Ep=!1;function pg(t,e){switch(t){case"keyup":return Fx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function kx(t,e){switch(t){case"compositionend":return mg(e);case"keypress":return e.which!==32?null:(Ep=!0,Mp);case"textInput":return t=e.data,t===Mp&&Ep?null:t;default:return null}}function zx(t,e){if(Ls)return t==="compositionend"||!sh&&pg(t,e)?(t=fg(),Dl=nh=pr=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hg&&e.locale!=="ko"?null:e.data;default:return null}}var Bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Bx[t.type]:e==="textarea"}function gg(t,e,n,i){Y0(i),e=ec(e,"onChange"),0<e.length&&(n=new ih("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var jo=null,oa=null;function Hx(t){Cg(t,0)}function Cc(t){var e=Is(t);if(B0(e))return t}function Vx(t,e){if(t==="change")return e}var vg=!1;if(ji){var eu;if(ji){var tu="oninput"in document;if(!tu){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),tu=typeof Tp.oninput=="function"}eu=tu}else eu=!1;vg=eu&&(!document.documentMode||9<document.documentMode)}function Ap(){jo&&(jo.detachEvent("onpropertychange",_g),oa=jo=null)}function _g(t){if(t.propertyName==="value"&&Cc(oa)){var e=[];gg(e,oa,t,Jf(t)),J0(Hx,e)}}function Gx(t,e,n){t==="focusin"?(Ap(),jo=e,oa=n,jo.attachEvent("onpropertychange",_g)):t==="focusout"&&Ap()}function Wx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cc(oa)}function Xx(t,e){if(t==="click")return Cc(e)}function jx(t,e){if(t==="input"||t==="change")return Cc(e)}function Yx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vi=typeof Object.is=="function"?Object.is:Yx;function aa(t,e){if(vi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!rd.call(e,r)||!vi(t[r],e[r]))return!1}return!0}function Cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bp(t,e){var n=Cp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cp(n)}}function xg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yg(){for(var t=window,e=Yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yl(t.document)}return e}function oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qx(t){var e=yg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xg(n.ownerDocument.documentElement,n)){if(i!==null&&oh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=bp(n,s);var o=bp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $x=ji&&"documentMode"in document&&11>=document.documentMode,Ds=null,Ed=null,Yo=null,wd=!1;function Rp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wd||Ds==null||Ds!==Yl(i)||(i=Ds,"selectionStart"in i&&oh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yo&&aa(Yo,i)||(Yo=i,i=ec(Ed,"onSelect"),0<i.length&&(e=new ih("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ds)))}function qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ns={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},nu={},Sg={};ji&&(Sg=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function bc(t){if(nu[t])return nu[t];if(!Ns[t])return t;var e=Ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sg)return nu[t]=e[n];return t}var Mg=bc("animationend"),Eg=bc("animationiteration"),wg=bc("animationstart"),Tg=bc("transitionend"),Ag=new Map,Pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){Ag.set(t,e),ls(e,[t])}for(var iu=0;iu<Pp.length;iu++){var ru=Pp[iu],Kx=ru.toLowerCase(),Jx=ru[0].toUpperCase()+ru.slice(1);Lr(Kx,"on"+Jx)}Lr(Mg,"onAnimationEnd");Lr(Eg,"onAnimationIteration");Lr(wg,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(Tg,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function Lp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,K_(i,e,void 0,t),t.currentTarget=null}function Cg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Lp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Lp(r,a,c),s=l}}}if($l)throw t=xd,$l=!1,xd=null,t}function It(t,e){var n=e[Rd];n===void 0&&(n=e[Rd]=new Set);var i=t+"__bubble";n.has(i)||(bg(e,t,2,!1),n.add(i))}function su(t,e,n){var i=0;e&&(i|=4),bg(n,t,i,e)}var $a="_reactListening"+Math.random().toString(36).slice(2);function la(t){if(!t[$a]){t[$a]=!0,U0.forEach(function(n){n!=="selectionchange"&&(Zx.has(n)||su(n,!1,t),su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$a]||(e[$a]=!0,su("selectionchange",!1,e))}}function bg(t,e,n,i){switch(dg(e)){case 1:var r=fx;break;case 4:r=hx;break;default:r=th}n=r.bind(null,e,n,t),r=void 0,!_d||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ou(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}J0(function(){var c=s,f=Jf(n),d=[];e:{var h=Ag.get(t);if(h!==void 0){var p=ih,x=t;switch(t){case"keypress":if(Nl(n)===0)break e;case"keydown":case"keyup":p=bx;break;case"focusin":x="focus",p=Qc;break;case"focusout":x="blur",p=Qc;break;case"beforeblur":case"afterblur":p=Qc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Lx;break;case Mg:case Eg:case wg:p=xx;break;case Tg:p=Nx;break;case"scroll":p=px;break;case"wheel":p=Ux;break;case"copy":case"cut":case"paste":p=Sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Sp}var S=(e&4)!==0,v=!S&&t==="scroll",u=S?h!==null?h+"Capture":null:h;S=[];for(var m=c,g;m!==null;){g=m;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,u!==null&&(_=na(m,u),_!=null&&S.push(ca(m,_,g)))),v)break;m=m.return}0<S.length&&(h=new p(h,x,null,n,f),d.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==gd&&(x=n.relatedTarget||n.fromElement)&&(Yr(x)||x[Yi]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Yr(x):null,x!==null&&(v=cs(x),x!==v||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(S=xp,_="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(S=Sp,_="onPointerLeave",u="onPointerEnter",m="pointer"),v=p==null?h:Is(p),g=x==null?h:Is(x),h=new S(_,m+"leave",p,n,f),h.target=v,h.relatedTarget=g,_=null,Yr(f)===c&&(S=new S(u,m+"enter",x,n,f),S.target=g,S.relatedTarget=v,_=S),v=_,p&&x)t:{for(S=p,u=x,m=0,g=S;g;g=ps(g))m++;for(g=0,_=u;_;_=ps(_))g++;for(;0<m-g;)S=ps(S),m--;for(;0<g-m;)u=ps(u),g--;for(;m--;){if(S===u||u!==null&&S===u.alternate)break t;S=ps(S),u=ps(u)}S=null}else S=null;p!==null&&Dp(d,h,p,S,!1),x!==null&&v!==null&&Dp(d,v,x,S,!0)}}e:{if(h=c?Is(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=Vx;else if(wp(h))if(vg)C=jx;else{C=Wx;var b=Gx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Xx);if(C&&(C=C(t,c))){gg(d,C,n,f);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&dd(h,"number",h.value)}switch(b=c?Is(c):window,t){case"focusin":(wp(b)||b.contentEditable==="true")&&(Ds=b,Ed=c,Yo=null);break;case"focusout":Yo=Ed=Ds=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,Rp(d,n,f);break;case"selectionchange":if($x)break;case"keydown":case"keyup":Rp(d,n,f)}var R;if(sh)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ls?pg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(hg&&n.locale!=="ko"&&(Ls||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ls&&(R=fg()):(pr=f,nh="value"in pr?pr.value:pr.textContent,Ls=!0)),b=ec(c,L),0<b.length&&(L=new yp(L,t,null,n,f),d.push({event:L,listeners:b}),R?L.data=R:(R=mg(n),R!==null&&(L.data=R)))),(R=Ox?kx(t,n):zx(t,n))&&(c=ec(c,"onBeforeInput"),0<c.length&&(f=new yp("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=R))}Cg(d,e)})}function ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ec(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=na(t,n),s!=null&&i.unshift(ca(t,s,r)),s=na(t,e),s!=null&&i.push(ca(t,s,r))),t=t.return}return i}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=na(n,s),l!=null&&o.unshift(ca(n,l,a))):r||(l=na(n,s),l!=null&&o.push(ca(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Qx=/\r\n?/g,ey=/\u0000|\uFFFD/g;function Np(t){return(typeof t=="string"?t:""+t).replace(Qx,`
`).replace(ey,"")}function Ka(t,e,n){if(e=Np(e),Np(t)!==e&&n)throw Error(pe(425))}function tc(){}var Td=null,Ad=null;function Cd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,Ip=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Ip<"u"?function(t){return Ip.resolve(null).then(t).catch(iy)}:bd;function iy(t){setTimeout(function(){throw t})}function au(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);sa(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Up(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),Ei="__reactFiber$"+fo,ua="__reactProps$"+fo,Yi="__reactContainer$"+fo,Rd="__reactEvents$"+fo,ry="__reactListeners$"+fo,sy="__reactHandles$"+fo;function Yr(t){var e=t[Ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yi]||n[Ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Up(t);t!==null;){if(n=t[Ei])return n;t=Up(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[Ei]||t[Yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(pe(33))}function Rc(t){return t[ua]||null}var Pd=[],Us=-1;function Dr(t){return{current:t}}function Ft(t){0>Us||(t.current=Pd[Us],Pd[Us]=null,Us--)}function Lt(t,e){Us++,Pd[Us]=t.current,t.current=e}var br={},vn=Dr(br),Ln=Dr(!1),ts=br;function Zs(t,e){var n=t.type.contextTypes;if(!n)return br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Dn(t){return t=t.childContextTypes,t!=null}function nc(){Ft(Ln),Ft(vn)}function Fp(t,e,n){if(vn.current!==br)throw Error(pe(168));Lt(vn,e),Lt(Ln,n)}function Rg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(pe(108,G_(t)||"Unknown",r));return Vt({},n,i)}function ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,ts=vn.current,Lt(vn,t),Lt(Ln,Ln.current),!0}function Op(t,e,n){var i=t.stateNode;if(!i)throw Error(pe(169));n?(t=Rg(t,e,ts),i.__reactInternalMemoizedMergedChildContext=t,Ft(Ln),Ft(vn),Lt(vn,t)):Ft(Ln),Lt(Ln,n)}var Bi=null,Pc=!1,lu=!1;function Pg(t){Bi===null?Bi=[t]:Bi.push(t)}function oy(t){Pc=!0,Pg(t)}function Nr(){if(!lu&&Bi!==null){lu=!0;var t=0,e=Tt;try{var n=Bi;for(Tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Bi=null,Pc=!1}catch(r){throw Bi!==null&&(Bi=Bi.slice(t+1)),tg(Zf,Nr),r}finally{Tt=e,lu=!1}}return null}var Fs=[],Os=0,rc=null,sc=0,Jn=[],Zn=0,ns=null,Hi=1,Vi="";function Hr(t,e){Fs[Os++]=sc,Fs[Os++]=rc,rc=t,sc=e}function Lg(t,e,n){Jn[Zn++]=Hi,Jn[Zn++]=Vi,Jn[Zn++]=ns,ns=t;var i=Hi;t=Vi;var r=32-pi(i)-1;i&=~(1<<r),n+=1;var s=32-pi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Hi=1<<32-pi(e)+r|n<<r|i,Vi=s+t}else Hi=1<<s|n<<r|i,Vi=t}function ah(t){t.return!==null&&(Hr(t,1),Lg(t,1,0))}function lh(t){for(;t===rc;)rc=Fs[--Os],Fs[Os]=null,sc=Fs[--Os],Fs[Os]=null;for(;t===ns;)ns=Jn[--Zn],Jn[Zn]=null,Vi=Jn[--Zn],Jn[Zn]=null,Hi=Jn[--Zn],Jn[Zn]=null}var Gn=null,Vn=null,zt=!1,di=null;function Dg(t,e){var n=Qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gn=t,Vn=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gn=t,Vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ns!==null?{id:Hi,overflow:Vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gn=t,Vn=null,!0):!1;default:return!1}}function Ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dd(t){if(zt){var e=Vn;if(e){var n=e;if(!kp(t,e)){if(Ld(t))throw Error(pe(418));e=yr(n.nextSibling);var i=Gn;e&&kp(t,e)?Dg(i,n):(t.flags=t.flags&-4097|2,zt=!1,Gn=t)}}else{if(Ld(t))throw Error(pe(418));t.flags=t.flags&-4097|2,zt=!1,Gn=t}}}function zp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gn=t}function Ja(t){if(t!==Gn)return!1;if(!zt)return zp(t),zt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cd(t.type,t.memoizedProps)),e&&(e=Vn)){if(Ld(t))throw Ng(),Error(pe(418));for(;e;)Dg(t,e),e=yr(e.nextSibling)}if(zp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vn=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vn=null}}else Vn=Gn?yr(t.stateNode.nextSibling):null;return!0}function Ng(){for(var t=Vn;t;)t=yr(t.nextSibling)}function Qs(){Vn=Gn=null,zt=!1}function ch(t){di===null?di=[t]:di.push(t)}var ay=Ki.ReactCurrentBatchConfig;function To(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var i=n.stateNode}if(!i)throw Error(pe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,t))}return t}function Za(t,e){throw t=Object.prototype.toString.call(e),Error(pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bp(t){var e=t._init;return e(t._payload)}function Ig(t){function e(u,m){if(t){var g=u.deletions;g===null?(u.deletions=[m],u.flags|=16):g.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=wr(u,m),u.index=0,u.sibling=null,u}function s(u,m,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<m?(u.flags|=2,m):g):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,g,_){return m===null||m.tag!==6?(m=mu(g,u.mode,_),m.return=u,m):(m=r(m,g),m.return=u,m)}function l(u,m,g,_){var C=g.type;return C===Ps?f(u,m,g.props.children,_,g.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===cr&&Bp(C)===m.type)?(_=r(m,g.props),_.ref=To(u,m,g),_.return=u,_):(_=Bl(g.type,g.key,g.props,null,u.mode,_),_.ref=To(u,m,g),_.return=u,_)}function c(u,m,g,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=gu(g,u.mode,_),m.return=u,m):(m=r(m,g.children||[]),m.return=u,m)}function f(u,m,g,_,C){return m===null||m.tag!==7?(m=Qr(g,u.mode,_,C),m.return=u,m):(m=r(m,g),m.return=u,m)}function d(u,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=mu(""+m,u.mode,g),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ha:return g=Bl(m.type,m.key,m.props,null,u.mode,g),g.ref=To(u,null,m),g.return=u,g;case Rs:return m=gu(m,u.mode,g),m.return=u,m;case cr:var _=m._init;return d(u,_(m._payload),g)}if(zo(m)||yo(m))return m=Qr(m,u.mode,g,null),m.return=u,m;Za(u,m)}return null}function h(u,m,g,_){var C=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(u,m,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ha:return g.key===C?l(u,m,g,_):null;case Rs:return g.key===C?c(u,m,g,_):null;case cr:return C=g._init,h(u,m,C(g._payload),_)}if(zo(g)||yo(g))return C!==null?null:f(u,m,g,_,null);Za(u,g)}return null}function p(u,m,g,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return u=u.get(g)||null,a(m,u,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ha:return u=u.get(_.key===null?g:_.key)||null,l(m,u,_,C);case Rs:return u=u.get(_.key===null?g:_.key)||null,c(m,u,_,C);case cr:var b=_._init;return p(u,m,g,b(_._payload),C)}if(zo(_)||yo(_))return u=u.get(g)||null,f(m,u,_,C,null);Za(m,_)}return null}function x(u,m,g,_){for(var C=null,b=null,R=m,L=m=0,y=null;R!==null&&L<g.length;L++){R.index>L?(y=R,R=null):y=R.sibling;var M=h(u,R,g[L],_);if(M===null){R===null&&(R=y);break}t&&R&&M.alternate===null&&e(u,R),m=s(M,m,L),b===null?C=M:b.sibling=M,b=M,R=y}if(L===g.length)return n(u,R),zt&&Hr(u,L),C;if(R===null){for(;L<g.length;L++)R=d(u,g[L],_),R!==null&&(m=s(R,m,L),b===null?C=R:b.sibling=R,b=R);return zt&&Hr(u,L),C}for(R=i(u,R);L<g.length;L++)y=p(R,u,L,g[L],_),y!==null&&(t&&y.alternate!==null&&R.delete(y.key===null?L:y.key),m=s(y,m,L),b===null?C=y:b.sibling=y,b=y);return t&&R.forEach(function(N){return e(u,N)}),zt&&Hr(u,L),C}function S(u,m,g,_){var C=yo(g);if(typeof C!="function")throw Error(pe(150));if(g=C.call(g),g==null)throw Error(pe(151));for(var b=C=null,R=m,L=m=0,y=null,M=g.next();R!==null&&!M.done;L++,M=g.next()){R.index>L?(y=R,R=null):y=R.sibling;var N=h(u,R,M.value,_);if(N===null){R===null&&(R=y);break}t&&R&&N.alternate===null&&e(u,R),m=s(N,m,L),b===null?C=N:b.sibling=N,b=N,R=y}if(M.done)return n(u,R),zt&&Hr(u,L),C;if(R===null){for(;!M.done;L++,M=g.next())M=d(u,M.value,_),M!==null&&(m=s(M,m,L),b===null?C=M:b.sibling=M,b=M);return zt&&Hr(u,L),C}for(R=i(u,R);!M.done;L++,M=g.next())M=p(R,u,L,M.value,_),M!==null&&(t&&M.alternate!==null&&R.delete(M.key===null?L:M.key),m=s(M,m,L),b===null?C=M:b.sibling=M,b=M);return t&&R.forEach(function(V){return e(u,V)}),zt&&Hr(u,L),C}function v(u,m,g,_){if(typeof g=="object"&&g!==null&&g.type===Ps&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ha:e:{for(var C=g.key,b=m;b!==null;){if(b.key===C){if(C=g.type,C===Ps){if(b.tag===7){n(u,b.sibling),m=r(b,g.props.children),m.return=u,u=m;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===cr&&Bp(C)===b.type){n(u,b.sibling),m=r(b,g.props),m.ref=To(u,b,g),m.return=u,u=m;break e}n(u,b);break}else e(u,b);b=b.sibling}g.type===Ps?(m=Qr(g.props.children,u.mode,_,g.key),m.return=u,u=m):(_=Bl(g.type,g.key,g.props,null,u.mode,_),_.ref=To(u,m,g),_.return=u,u=_)}return o(u);case Rs:e:{for(b=g.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(u,m.sibling),m=r(m,g.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=gu(g,u.mode,_),m.return=u,u=m}return o(u);case cr:return b=g._init,v(u,m,b(g._payload),_)}if(zo(g))return x(u,m,g,_);if(yo(g))return S(u,m,g,_);Za(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,g),m.return=u,u=m):(n(u,m),m=mu(g,u.mode,_),m.return=u,u=m),o(u)):n(u,m)}return v}var eo=Ig(!0),Ug=Ig(!1),oc=Dr(null),ac=null,ks=null,uh=null;function dh(){uh=ks=ac=null}function fh(t){var e=oc.current;Ft(oc),t._currentValue=e}function Nd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function js(t,e){ac=t,uh=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pn=!0),t.firstContext=null)}function ti(t){var e=t._currentValue;if(uh!==t)if(t={context:t,memoizedValue:e,next:null},ks===null){if(ac===null)throw Error(pe(308));ks=t,ac.dependencies={lanes:0,firstContext:t}}else ks=ks.next=t;return e}var qr=null;function hh(t){qr===null?qr=[t]:qr.push(t)}function Fg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,hh(e)):(n.next=r.next,r.next=n),e.interleaved=n,qi(t,i)}function qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function ph(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Og(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,_t&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(t,n)}return r=i.interleaved,r===null?(e.next=e,hh(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(t,n)}function Il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qf(t,n)}}function Hp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lc(t,e,n,i){var r=t.updateQueue;ur=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,S=a;switch(h=e,p=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=Vt({},d,h);break e;case 2:ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);rs|=o,t.lanes=o,t.memoizedState=d}}function Vp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(pe(191,r));r.call(i)}}}var Ca={},bi=Dr(Ca),da=Dr(Ca),fa=Dr(Ca);function $r(t){if(t===Ca)throw Error(pe(174));return t}function mh(t,e){switch(Lt(fa,e),Lt(da,t),Lt(bi,Ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hd(e,t)}Ft(bi),Lt(bi,e)}function to(){Ft(bi),Ft(da),Ft(fa)}function kg(t){$r(fa.current);var e=$r(bi.current),n=hd(e,t.type);e!==n&&(Lt(da,t),Lt(bi,n))}function gh(t){da.current===t&&(Ft(bi),Ft(da))}var Bt=Dr(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cu=[];function vh(){for(var t=0;t<cu.length;t++)cu[t]._workInProgressVersionPrimary=null;cu.length=0}var Ul=Ki.ReactCurrentDispatcher,uu=Ki.ReactCurrentBatchConfig,is=0,Ht=null,Kt=null,tn=null,uc=!1,qo=!1,ha=0,ly=0;function fn(){throw Error(pe(321))}function _h(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vi(t[n],e[n]))return!1;return!0}function xh(t,e,n,i,r,s){if(is=s,Ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ul.current=t===null||t.memoizedState===null?fy:hy,t=n(i,r),qo){s=0;do{if(qo=!1,ha=0,25<=s)throw Error(pe(301));s+=1,tn=Kt=null,e.updateQueue=null,Ul.current=py,t=n(i,r)}while(qo)}if(Ul.current=dc,e=Kt!==null&&Kt.next!==null,is=0,tn=Kt=Ht=null,uc=!1,e)throw Error(pe(300));return t}function yh(){var t=ha!==0;return ha=0,t}function Si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Ht.memoizedState=tn=t:tn=tn.next=t,tn}function ni(){if(Kt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var e=tn===null?Ht.memoizedState:tn.next;if(e!==null)tn=e,Kt=t;else{if(t===null)throw Error(pe(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},tn===null?Ht.memoizedState=tn=t:tn=tn.next=t}return tn}function pa(t,e){return typeof e=="function"?e(t):e}function du(t){var e=ni(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=Kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((is&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ht.lanes|=f,rs|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,vi(i,e.memoizedState)||(Pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ht.lanes|=s,rs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fu(t){var e=ni(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);vi(s,e.memoizedState)||(Pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function zg(){}function Bg(t,e){var n=Ht,i=ni(),r=e(),s=!vi(i.memoizedState,r);if(s&&(i.memoizedState=r,Pn=!0),i=i.queue,Sh(Gg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||tn!==null&&tn.memoizedState.tag&1){if(n.flags|=2048,ma(9,Vg.bind(null,n,i,r,e),void 0,null),nn===null)throw Error(pe(349));is&30||Hg(n,e,r)}return r}function Hg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vg(t,e,n,i){e.value=n,e.getSnapshot=i,Wg(e)&&Xg(t)}function Gg(t,e,n){return n(function(){Wg(e)&&Xg(t)})}function Wg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vi(t,n)}catch{return!0}}function Xg(t){var e=qi(t,1);e!==null&&mi(e,t,1,-1)}function Gp(t){var e=Si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},e.queue=t,t=t.dispatch=dy.bind(null,Ht,t),[e.memoizedState,t]}function ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function jg(){return ni().memoizedState}function Fl(t,e,n,i){var r=Si();Ht.flags|=t,r.memoizedState=ma(1|e,n,void 0,i===void 0?null:i)}function Lc(t,e,n,i){var r=ni();i=i===void 0?null:i;var s=void 0;if(Kt!==null){var o=Kt.memoizedState;if(s=o.destroy,i!==null&&_h(i,o.deps)){r.memoizedState=ma(e,n,s,i);return}}Ht.flags|=t,r.memoizedState=ma(1|e,n,s,i)}function Wp(t,e){return Fl(8390656,8,t,e)}function Sh(t,e){return Lc(2048,8,t,e)}function Yg(t,e){return Lc(4,2,t,e)}function qg(t,e){return Lc(4,4,t,e)}function $g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Kg(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,4,$g.bind(null,e,t),n)}function Mh(){}function Jg(t,e){var n=ni();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_h(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Zg(t,e){var n=ni();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_h(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Qg(t,e,n){return is&21?(vi(n,e)||(n=rg(),Ht.lanes|=n,rs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=n)}function cy(t,e){var n=Tt;Tt=n!==0&&4>n?n:4,t(!0);var i=uu.transition;uu.transition={};try{t(!1),e()}finally{Tt=n,uu.transition=i}}function ev(){return ni().memoizedState}function uy(t,e,n){var i=Er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},tv(t))nv(e,n);else if(n=Fg(t,e,n,i),n!==null){var r=En();mi(n,t,i,r),iv(n,e,i)}}function dy(t,e,n){var i=Er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(tv(t))nv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,vi(a,o)){var l=e.interleaved;l===null?(r.next=r,hh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Fg(t,e,r,i),n!==null&&(r=En(),mi(n,t,i,r),iv(n,e,i))}}function tv(t){var e=t.alternate;return t===Ht||e!==null&&e===Ht}function nv(t,e){qo=uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function iv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qf(t,n)}}var dc={readContext:ti,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},fy={readContext:ti,useCallback:function(t,e){return Si().memoizedState=[t,e===void 0?null:e],t},useContext:ti,useEffect:Wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4194308,4,$g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fl(4,2,t,e)},useMemo:function(t,e){var n=Si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=uy.bind(null,Ht,t),[i.memoizedState,t]},useRef:function(t){var e=Si();return t={current:t},e.memoizedState=t},useState:Gp,useDebugValue:Mh,useDeferredValue:function(t){return Si().memoizedState=t},useTransition:function(){var t=Gp(!1),e=t[0];return t=cy.bind(null,t[1]),Si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ht,r=Si();if(zt){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=e(),nn===null)throw Error(pe(349));is&30||Hg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Wp(Gg.bind(null,i,s,t),[t]),i.flags|=2048,ma(9,Vg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Si(),e=nn.identifierPrefix;if(zt){var n=Vi,i=Hi;n=(i&~(1<<32-pi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ly++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hy={readContext:ti,useCallback:Jg,useContext:ti,useEffect:Sh,useImperativeHandle:Kg,useInsertionEffect:Yg,useLayoutEffect:qg,useMemo:Zg,useReducer:du,useRef:jg,useState:function(){return du(pa)},useDebugValue:Mh,useDeferredValue:function(t){var e=ni();return Qg(e,Kt.memoizedState,t)},useTransition:function(){var t=du(pa)[0],e=ni().memoizedState;return[t,e]},useMutableSource:zg,useSyncExternalStore:Bg,useId:ev,unstable_isNewReconciler:!1},py={readContext:ti,useCallback:Jg,useContext:ti,useEffect:Sh,useImperativeHandle:Kg,useInsertionEffect:Yg,useLayoutEffect:qg,useMemo:Zg,useReducer:fu,useRef:jg,useState:function(){return fu(pa)},useDebugValue:Mh,useDeferredValue:function(t){var e=ni();return Kt===null?e.memoizedState=t:Qg(e,Kt.memoizedState,t)},useTransition:function(){var t=fu(pa)[0],e=ni().memoizedState;return[t,e]},useMutableSource:zg,useSyncExternalStore:Bg,useId:ev,unstable_isNewReconciler:!1};function li(t,e){if(t&&t.defaultProps){e=Vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Id(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dc={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=En(),r=Er(t),s=Wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(mi(e,t,r,i),Il(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=En(),r=Er(t),s=Wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(mi(e,t,r,i),Il(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=En(),i=Er(t),r=Wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Sr(t,r,i),e!==null&&(mi(e,t,i,n),Il(e,t,i))}};function Xp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!aa(n,i)||!aa(r,s):!0}function rv(t,e,n){var i=!1,r=br,s=e.contextType;return typeof s=="object"&&s!==null?s=ti(s):(r=Dn(e)?ts:vn.current,i=e.contextTypes,s=(i=i!=null)?Zs(t,r):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function jp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Dc.enqueueReplaceState(e,e.state,null)}function Ud(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ph(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ti(s):(s=Dn(e)?ts:vn.current,r.context=Zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Id(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Dc.enqueueReplaceState(r,r.state,null),lc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,e){try{var n="",i=e;do n+=V_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function hu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var my=typeof WeakMap=="function"?WeakMap:Map;function sv(t,e,n){n=Wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){hc||(hc=!0,jd=i),Fd(t,e)},n}function ov(t,e,n){n=Wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Fd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fd(t,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new my;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ry.bind(null,t,e,n),e.then(t,t))}function qp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $p(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wi(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var gy=Ki.ReactCurrentOwner,Pn=!1;function Sn(t,e,n,i){e.child=t===null?Ug(e,null,n,i):eo(e,t.child,n,i)}function Kp(t,e,n,i,r){n=n.render;var s=e.ref;return js(e,r),i=xh(t,e,n,i,s,r),n=yh(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(zt&&n&&ah(e),e.flags|=1,Sn(t,e,i,r),e.child)}function Jp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ph(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,av(t,e,s,i,r)):(t=Bl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(o,i)&&t.ref===e.ref)return $i(t,e,r)}return e.flags|=1,t=wr(s,i),t.ref=e.ref,t.return=e,e.child=t}function av(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(aa(s,i)&&t.ref===e.ref)if(Pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Pn=!0);else return e.lanes=t.lanes,$i(t,e,r)}return Od(t,e,n,i,r)}function lv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Bs,Bn),Bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Lt(Bs,Bn),Bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Lt(Bs,Bn),Bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Lt(Bs,Bn),Bn|=i;return Sn(t,e,r,n),e.child}function cv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Od(t,e,n,i,r){var s=Dn(n)?ts:vn.current;return s=Zs(e,s),js(e,r),n=xh(t,e,n,i,s,r),i=yh(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(zt&&i&&ah(e),e.flags|=1,Sn(t,e,n,r),e.child)}function Zp(t,e,n,i,r){if(Dn(n)){var s=!0;ic(e)}else s=!1;if(js(e,r),e.stateNode===null)Ol(t,e),rv(e,n,i),Ud(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ti(c):(c=Dn(n)?ts:vn.current,c=Zs(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&jp(e,o,i,c),ur=!1;var h=e.memoizedState;o.state=h,lc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Ln.current||ur?(typeof f=="function"&&(Id(e,n,f,i),l=e.memoizedState),(a=ur||Xp(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Og(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:li(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ti(l):(l=Dn(n)?ts:vn.current,l=Zs(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&jp(e,o,i,l),ur=!1,h=e.memoizedState,o.state=h,lc(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||Ln.current||ur?(typeof p=="function"&&(Id(e,n,p,i),x=e.memoizedState),(c=ur||Xp(e,n,c,i,h,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return kd(t,e,n,i,s,r)}function kd(t,e,n,i,r,s){cv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Op(e,n,!1),$i(t,e,s);i=e.stateNode,gy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=eo(e,t.child,null,s),e.child=eo(e,null,a,s)):Sn(t,e,a,s),e.memoizedState=i.state,r&&Op(e,n,!0),e.child}function uv(t){var e=t.stateNode;e.pendingContext?Fp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fp(t,e.context,!1),mh(t,e.containerInfo)}function Qp(t,e,n,i,r){return Qs(),ch(r),e.flags|=256,Sn(t,e,n,i),e.child}var zd={dehydrated:null,treeContext:null,retryLane:0};function Bd(t){return{baseLanes:t,cachePool:null,transitions:null}}function dv(t,e,n){var i=e.pendingProps,r=Bt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Lt(Bt,r&1),t===null)return Dd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uc(o,i,0,null),t=Qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bd(n),e.memoizedState=zd,t):Eh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return vy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Bd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=zd,i}return s=t.child,t=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Eh(t,e){return e=Uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qa(t,e,n,i){return i!==null&&ch(i),eo(e,t.child,null,n),t=Eh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=hu(Error(pe(422))),Qa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Uc({mode:"visible",children:i.children},r,0,null),s=Qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&eo(e,t.child,null,o),e.child.memoizedState=Bd(o),e.memoizedState=zd,s);if(!(e.mode&1))return Qa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(pe(419)),i=hu(s,i,void 0),Qa(t,e,o,i)}if(a=(o&t.childLanes)!==0,Pn||a){if(i=nn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,qi(t,r),mi(i,t,r,-1))}return Rh(),i=hu(Error(pe(421))),Qa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Py.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Vn=yr(r.nextSibling),Gn=e,zt=!0,di=null,t!==null&&(Jn[Zn++]=Hi,Jn[Zn++]=Vi,Jn[Zn++]=ns,Hi=t.id,Vi=t.overflow,ns=e),e=Eh(e,i.children),e.flags|=4096,e)}function em(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nd(t.return,e,n)}function pu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function fv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Sn(t,e,i.children,n),i=Bt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&em(t,n,e);else if(t.tag===19)em(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Lt(Bt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),pu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}pu(e,!0,n,null,s);break;case"together":pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ol(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),rs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(pe(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _y(t,e,n){switch(e.tag){case 3:uv(e),Qs();break;case 5:kg(e);break;case 1:Dn(e.type)&&ic(e);break;case 4:mh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Lt(oc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Lt(Bt,Bt.current&1),e.flags|=128,null):n&e.child.childLanes?dv(t,e,n):(Lt(Bt,Bt.current&1),t=$i(t,e,n),t!==null?t.sibling:null);Lt(Bt,Bt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return fv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Lt(Bt,Bt.current),i)break;return null;case 22:case 23:return e.lanes=0,lv(t,e,n)}return $i(t,e,n)}var hv,Hd,pv,mv;hv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hd=function(){};pv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,$r(bi.current);var s=null;switch(n){case"input":r=cd(t,r),i=cd(t,i),s=[];break;case"select":r=Vt({},r,{value:void 0}),i=Vt({},i,{value:void 0}),s=[];break;case"textarea":r=fd(t,r),i=fd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=tc)}pd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ea.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ea.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&It("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};mv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ao(t,e){if(!zt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function hn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function xy(t,e,n){var i=e.pendingProps;switch(lh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(e),null;case 1:return Dn(e.type)&&nc(),hn(e),null;case 3:return i=e.stateNode,to(),Ft(Ln),Ft(vn),vh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,di!==null&&($d(di),di=null))),Hd(t,e),hn(e),null;case 5:gh(e);var r=$r(fa.current);if(n=e.type,t!==null&&e.stateNode!=null)pv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(pe(166));return hn(e),null}if(t=$r(bi.current),Ja(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[ua]=s,t=(e.mode&1)!==0,n){case"dialog":It("cancel",i),It("close",i);break;case"iframe":case"object":case"embed":It("load",i);break;case"video":case"audio":for(r=0;r<Ho.length;r++)It(Ho[r],i);break;case"source":It("error",i);break;case"img":case"image":case"link":It("error",i),It("load",i);break;case"details":It("toggle",i);break;case"input":cp(i,s),It("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},It("invalid",i);break;case"textarea":dp(i,s),It("invalid",i)}pd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,a,t),r=["children",""+a]):ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&It("scroll",i)}switch(n){case"input":Va(i),up(i,s,!0);break;case"textarea":Va(i),fp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=tc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=G0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ei]=e,t[ua]=i,hv(t,e,!1,!1),e.stateNode=t;e:{switch(o=md(n,i),n){case"dialog":It("cancel",t),It("close",t),r=i;break;case"iframe":case"object":case"embed":It("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ho.length;r++)It(Ho[r],t);r=i;break;case"source":It("error",t),r=i;break;case"img":case"image":case"link":It("error",t),It("load",t),r=i;break;case"details":It("toggle",t),r=i;break;case"input":cp(t,i),r=cd(t,i),It("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Vt({},i,{value:void 0}),It("invalid",t);break;case"textarea":dp(t,i),r=fd(t,i),It("invalid",t);break;default:r=i}pd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?j0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&W0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ta(t,l):typeof l=="number"&&ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&It("scroll",t):l!=null&&Yf(t,s,l,o))}switch(n){case"input":Va(t),up(t,i,!1);break;case"textarea":Va(t),fp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Cr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=tc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return hn(e),null;case 6:if(t&&e.stateNode!=null)mv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(pe(166));if(n=$r(fa.current),$r(bi.current),Ja(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==n)&&(t=Gn,t!==null))switch(t.tag){case 3:Ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ka(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return hn(e),null;case 13:if(Ft(Bt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(zt&&Vn!==null&&e.mode&1&&!(e.flags&128))Ng(),Qs(),e.flags|=98560,s=!1;else if(s=Ja(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(pe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(pe(317));s[Ei]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;hn(e),s=!1}else di!==null&&($d(di),di=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Bt.current&1?Jt===0&&(Jt=3):Rh())),e.updateQueue!==null&&(e.flags|=4),hn(e),null);case 4:return to(),Hd(t,e),t===null&&la(e.stateNode.containerInfo),hn(e),null;case 10:return fh(e.type._context),hn(e),null;case 17:return Dn(e.type)&&nc(),hn(e),null;case 19:if(Ft(Bt),s=e.memoizedState,s===null)return hn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ao(s,!1);else{if(Jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cc(t),o!==null){for(e.flags|=128,Ao(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Lt(Bt,Bt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Wt()>io&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304)}else{if(!i)if(t=cc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!zt)return hn(e),null}else 2*Wt()-s.renderingStartTime>io&&n!==1073741824&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Wt(),e.sibling=null,n=Bt.current,Lt(Bt,i?n&1|2:n&1),e):(hn(e),null);case 22:case 23:return bh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Bn&1073741824&&(hn(e),e.subtreeFlags&6&&(e.flags|=8192)):hn(e),null;case 24:return null;case 25:return null}throw Error(pe(156,e.tag))}function yy(t,e){switch(lh(e),e.tag){case 1:return Dn(e.type)&&nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return to(),Ft(Ln),Ft(vn),vh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gh(e),null;case 13:if(Ft(Bt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ft(Bt),null;case 4:return to(),null;case 10:return fh(e.type._context),null;case 22:case 23:return bh(),null;case 24:return null;default:return null}}var el=!1,gn=!1,Sy=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Gt(t,e,i)}else n.current=null}function Vd(t,e,n){try{n()}catch(i){Gt(t,e,i)}}var tm=!1;function My(t,e){if(Td=Zl,t=yg(),oh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ad={focusedElem:t,selectionRange:n},Zl=!1,Fe=e;Fe!==null;)if(e=Fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Fe=t;else for(;Fe!==null;){e=Fe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,v=x.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:li(e.type,S),v);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(_){Gt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Fe=t;break}Fe=e.return}return x=tm,tm=!1,x}function $o(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vd(e,n,s)}r=r.next}while(r!==i)}}function Nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Gd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gv(t){var e=t.alternate;e!==null&&(t.alternate=null,gv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ei],delete e[ua],delete e[Rd],delete e[ry],delete e[sy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vv(t){return t.tag===5||t.tag===3||t.tag===4}function nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tc));else if(i!==4&&(t=t.child,t!==null))for(Wd(t,e,n),t=t.sibling;t!==null;)Wd(t,e,n),t=t.sibling}function Xd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}var ln=null,ui=!1;function tr(t,e,n){for(n=n.child;n!==null;)_v(t,e,n),n=n.sibling}function _v(t,e,n){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(Tc,n)}catch{}switch(n.tag){case 5:gn||zs(n,e);case 6:var i=ln,r=ui;ln=null,tr(t,e,n),ln=i,ui=r,ln!==null&&(ui?(t=ln,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ln.removeChild(n.stateNode));break;case 18:ln!==null&&(ui?(t=ln,n=n.stateNode,t.nodeType===8?au(t.parentNode,n):t.nodeType===1&&au(t,n),sa(t)):au(ln,n.stateNode));break;case 4:i=ln,r=ui,ln=n.stateNode.containerInfo,ui=!0,tr(t,e,n),ln=i,ui=r;break;case 0:case 11:case 14:case 15:if(!gn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vd(n,e,o),r=r.next}while(r!==i)}tr(t,e,n);break;case 1:if(!gn&&(zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Gt(n,e,a)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(gn=(i=gn)||n.memoizedState!==null,tr(t,e,n),gn=i):tr(t,e,n);break;default:tr(t,e,n)}}function im(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Sy),e.forEach(function(i){var r=Ly.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ii(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ln=a.stateNode,ui=!1;break e;case 3:ln=a.stateNode.containerInfo,ui=!0;break e;case 4:ln=a.stateNode.containerInfo,ui=!0;break e}a=a.return}if(ln===null)throw Error(pe(160));_v(s,o,r),ln=null,ui=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xv(e,t),e=e.sibling}function xv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(e,t),yi(t),i&4){try{$o(3,t,t.return),Nc(3,t)}catch(S){Gt(t,t.return,S)}try{$o(5,t,t.return)}catch(S){Gt(t,t.return,S)}}break;case 1:ii(e,t),yi(t),i&512&&n!==null&&zs(n,n.return);break;case 5:if(ii(e,t),yi(t),i&512&&n!==null&&zs(n,n.return),t.flags&32){var r=t.stateNode;try{ta(r,"")}catch(S){Gt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&H0(r,s),md(a,o);var c=md(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?j0(r,d):f==="dangerouslySetInnerHTML"?W0(r,d):f==="children"?ta(r,d):Yf(r,f,d,c)}switch(a){case"input":ud(r,s);break;case"textarea":V0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Vs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Vs(r,!!s.multiple,s.defaultValue,!0):Vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ua]=s}catch(S){Gt(t,t.return,S)}}break;case 6:if(ii(e,t),yi(t),i&4){if(t.stateNode===null)throw Error(pe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Gt(t,t.return,S)}}break;case 3:if(ii(e,t),yi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(S){Gt(t,t.return,S)}break;case 4:ii(e,t),yi(t);break;case 13:ii(e,t),yi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ah=Wt())),i&4&&im(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(gn=(c=gn)||f,ii(e,t),gn=c):ii(e,t),yi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Fe=t,f=t.child;f!==null;){for(d=Fe=f;Fe!==null;){switch(h=Fe,p=h.child,h.tag){case 0:case 11:case 14:case 15:$o(4,h,h.return);break;case 1:zs(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(S){Gt(i,n,S)}}break;case 5:zs(h,h.return);break;case 22:if(h.memoizedState!==null){sm(d);continue}}p!==null?(p.return=h,Fe=p):sm(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=X0("display",o))}catch(S){Gt(t,t.return,S)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(S){Gt(t,t.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ii(e,t),yi(t),i&4&&im(t);break;case 21:break;default:ii(e,t),yi(t)}}function yi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vv(n)){var i=n;break e}n=n.return}throw Error(pe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ta(r,""),i.flags&=-33);var s=nm(t);Xd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=nm(t);Wd(t,a,o);break;default:throw Error(pe(161))}}catch(l){Gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ey(t,e,n){Fe=t,yv(t)}function yv(t,e,n){for(var i=(t.mode&1)!==0;Fe!==null;){var r=Fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||el;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||gn;a=el;var c=gn;if(el=o,(gn=l)&&!c)for(Fe=r;Fe!==null;)o=Fe,l=o.child,o.tag===22&&o.memoizedState!==null?om(r):l!==null?(l.return=o,Fe=l):om(r);for(;s!==null;)Fe=s,yv(s),s=s.sibling;Fe=r,el=a,gn=c}rm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Fe=s):rm(t)}}function rm(t){for(;Fe!==null;){var e=Fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gn||Nc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!gn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:li(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&sa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}gn||e.flags&512&&Gd(e)}catch(h){Gt(e,e.return,h)}}if(e===t){Fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Fe=n;break}Fe=e.return}}function sm(t){for(;Fe!==null;){var e=Fe;if(e===t){Fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Fe=n;break}Fe=e.return}}function om(t){for(;Fe!==null;){var e=Fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nc(4,e)}catch(l){Gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Gt(e,r,l)}}var s=e.return;try{Gd(e)}catch(l){Gt(e,s,l)}break;case 5:var o=e.return;try{Gd(e)}catch(l){Gt(e,o,l)}}}catch(l){Gt(e,e.return,l)}if(e===t){Fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Fe=a;break}Fe=e.return}}var wy=Math.ceil,fc=Ki.ReactCurrentDispatcher,wh=Ki.ReactCurrentOwner,ei=Ki.ReactCurrentBatchConfig,_t=0,nn=null,qt=null,cn=0,Bn=0,Bs=Dr(0),Jt=0,ga=null,rs=0,Ic=0,Th=0,Ko=null,Rn=null,Ah=0,io=1/0,zi=null,hc=!1,jd=null,Mr=null,tl=!1,mr=null,pc=0,Jo=0,Yd=null,kl=-1,zl=0;function En(){return _t&6?Wt():kl!==-1?kl:kl=Wt()}function Er(t){return t.mode&1?_t&2&&cn!==0?cn&-cn:ay.transition!==null?(zl===0&&(zl=rg()),zl):(t=Tt,t!==0||(t=window.event,t=t===void 0?16:dg(t.type)),t):1}function mi(t,e,n,i){if(50<Jo)throw Jo=0,Yd=null,Error(pe(185));wa(t,n,i),(!(_t&2)||t!==nn)&&(t===nn&&(!(_t&2)&&(Ic|=n),Jt===4&&fr(t,cn)),Nn(t,i),n===1&&_t===0&&!(e.mode&1)&&(io=Wt()+500,Pc&&Nr()))}function Nn(t,e){var n=t.callbackNode;ax(t,e);var i=Jl(t,t===nn?cn:0);if(i===0)n!==null&&mp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&mp(n),e===1)t.tag===0?oy(am.bind(null,t)):Pg(am.bind(null,t)),ny(function(){!(_t&6)&&Nr()}),n=null;else{switch(sg(i)){case 1:n=Zf;break;case 4:n=ng;break;case 16:n=Kl;break;case 536870912:n=ig;break;default:n=Kl}n=bv(n,Sv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sv(t,e){if(kl=-1,zl=0,_t&6)throw Error(pe(327));var n=t.callbackNode;if(Ys()&&t.callbackNode!==n)return null;var i=Jl(t,t===nn?cn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=mc(t,i);else{e=i;var r=_t;_t|=2;var s=Ev();(nn!==t||cn!==e)&&(zi=null,io=Wt()+500,Zr(t,e));do try{Cy();break}catch(a){Mv(t,a)}while(!0);dh(),fc.current=s,_t=r,qt!==null?e=0:(nn=null,cn=0,e=Jt)}if(e!==0){if(e===2&&(r=yd(t),r!==0&&(i=r,e=qd(t,r))),e===1)throw n=ga,Zr(t,0),fr(t,i),Nn(t,Wt()),n;if(e===6)fr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ty(r)&&(e=mc(t,i),e===2&&(s=yd(t),s!==0&&(i=s,e=qd(t,s))),e===1))throw n=ga,Zr(t,0),fr(t,i),Nn(t,Wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(pe(345));case 2:Vr(t,Rn,zi);break;case 3:if(fr(t,i),(i&130023424)===i&&(e=Ah+500-Wt(),10<e)){if(Jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){En(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bd(Vr.bind(null,t,Rn,zi),e);break}Vr(t,Rn,zi);break;case 4:if(fr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-pi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wy(i/1960))-i,10<i){t.timeoutHandle=bd(Vr.bind(null,t,Rn,zi),i);break}Vr(t,Rn,zi);break;case 5:Vr(t,Rn,zi);break;default:throw Error(pe(329))}}}return Nn(t,Wt()),t.callbackNode===n?Sv.bind(null,t):null}function qd(t,e){var n=Ko;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=mc(t,e),t!==2&&(e=Rn,Rn=n,e!==null&&$d(e)),t}function $d(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function Ty(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!vi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~Th,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pi(e),i=1<<n;t[n]=-1,e&=~i}}function am(t){if(_t&6)throw Error(pe(327));Ys();var e=Jl(t,0);if(!(e&1))return Nn(t,Wt()),null;var n=mc(t,e);if(t.tag!==0&&n===2){var i=yd(t);i!==0&&(e=i,n=qd(t,i))}if(n===1)throw n=ga,Zr(t,0),fr(t,e),Nn(t,Wt()),n;if(n===6)throw Error(pe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,Rn,zi),Nn(t,Wt()),null}function Ch(t,e){var n=_t;_t|=1;try{return t(e)}finally{_t=n,_t===0&&(io=Wt()+500,Pc&&Nr())}}function ss(t){mr!==null&&mr.tag===0&&!(_t&6)&&Ys();var e=_t;_t|=1;var n=ei.transition,i=Tt;try{if(ei.transition=null,Tt=1,t)return t()}finally{Tt=i,ei.transition=n,_t=e,!(_t&6)&&Nr()}}function bh(){Bn=Bs.current,Ft(Bs)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ty(n)),qt!==null)for(n=qt.return;n!==null;){var i=n;switch(lh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nc();break;case 3:to(),Ft(Ln),Ft(vn),vh();break;case 5:gh(i);break;case 4:to();break;case 13:Ft(Bt);break;case 19:Ft(Bt);break;case 10:fh(i.type._context);break;case 22:case 23:bh()}n=n.return}if(nn=t,qt=t=wr(t.current,null),cn=Bn=e,Jt=0,ga=null,Th=Ic=rs=0,Rn=Ko=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}qr=null}return t}function Mv(t,e){do{var n=qt;try{if(dh(),Ul.current=dc,uc){for(var i=Ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}uc=!1}if(is=0,tn=Kt=Ht=null,qo=!1,ha=0,wh.current=null,n===null||n.return===null){Jt=1,ga=e,qt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=cn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=qp(o);if(p!==null){p.flags&=-257,$p(p,o,a,s,e),p.mode&1&&Yp(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var S=new Set;S.add(l),e.updateQueue=S}else x.add(l);break e}else{if(!(e&1)){Yp(s,c,e),Rh();break e}l=Error(pe(426))}}else if(zt&&a.mode&1){var v=qp(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),$p(v,o,a,s,e),ch(no(l,a));break e}}s=l=no(l,a),Jt!==4&&(Jt=2),Ko===null?Ko=[s]:Ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=sv(s,l,e);Hp(s,u);break e;case 1:a=l;var m=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Mr===null||!Mr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=ov(s,a,e);Hp(s,_);break e}}s=s.return}while(s!==null)}Tv(n)}catch(C){e=C,qt===n&&n!==null&&(qt=n=n.return);continue}break}while(!0)}function Ev(){var t=fc.current;return fc.current=dc,t===null?dc:t}function Rh(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),nn===null||!(rs&268435455)&&!(Ic&268435455)||fr(nn,cn)}function mc(t,e){var n=_t;_t|=2;var i=Ev();(nn!==t||cn!==e)&&(zi=null,Zr(t,e));do try{Ay();break}catch(r){Mv(t,r)}while(!0);if(dh(),_t=n,fc.current=i,qt!==null)throw Error(pe(261));return nn=null,cn=0,Jt}function Ay(){for(;qt!==null;)wv(qt)}function Cy(){for(;qt!==null&&!Z_();)wv(qt)}function wv(t){var e=Cv(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,e===null?Tv(t):qt=e,wh.current=null}function Tv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yy(n,e),n!==null){n.flags&=32767,qt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,qt=null;return}}else if(n=xy(n,e,Bn),n!==null){qt=n;return}if(e=e.sibling,e!==null){qt=e;return}qt=e=t}while(e!==null);Jt===0&&(Jt=5)}function Vr(t,e,n){var i=Tt,r=ei.transition;try{ei.transition=null,Tt=1,by(t,e,n,i)}finally{ei.transition=r,Tt=i}return null}function by(t,e,n,i){do Ys();while(mr!==null);if(_t&6)throw Error(pe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(pe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(lx(t,s),t===nn&&(qt=nn=null,cn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,bv(Kl,function(){return Ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ei.transition,ei.transition=null;var o=Tt;Tt=1;var a=_t;_t|=4,wh.current=null,My(t,n),xv(n,t),qx(Ad),Zl=!!Td,Ad=Td=null,t.current=n,Ey(n),Q_(),_t=a,Tt=o,ei.transition=s}else t.current=n;if(tl&&(tl=!1,mr=t,pc=r),s=t.pendingLanes,s===0&&(Mr=null),nx(n.stateNode),Nn(t,Wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(hc)throw hc=!1,t=jd,jd=null,t;return pc&1&&t.tag!==0&&Ys(),s=t.pendingLanes,s&1?t===Yd?Jo++:(Jo=0,Yd=t):Jo=0,Nr(),null}function Ys(){if(mr!==null){var t=sg(pc),e=ei.transition,n=Tt;try{if(ei.transition=null,Tt=16>t?16:t,mr===null)var i=!1;else{if(t=mr,mr=null,pc=0,_t&6)throw Error(pe(331));var r=_t;for(_t|=4,Fe=t.current;Fe!==null;){var s=Fe,o=s.child;if(Fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Fe=c;Fe!==null;){var f=Fe;switch(f.tag){case 0:case 11:case 15:$o(8,f,s)}var d=f.child;if(d!==null)d.return=f,Fe=d;else for(;Fe!==null;){f=Fe;var h=f.sibling,p=f.return;if(gv(f),f===c){Fe=null;break}if(h!==null){h.return=p,Fe=h;break}Fe=p}}}var x=s.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var v=S.sibling;S.sibling=null,S=v}while(S!==null)}}Fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Fe=o;else e:for(;Fe!==null;){if(s=Fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$o(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Fe=u;break e}Fe=s.return}}var m=t.current;for(Fe=m;Fe!==null;){o=Fe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,Fe=g;else e:for(o=m;Fe!==null;){if(a=Fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nc(9,a)}}catch(C){Gt(a,a.return,C)}if(a===o){Fe=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,Fe=_;break e}Fe=a.return}}if(_t=r,Nr(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(Tc,t)}catch{}i=!0}return i}finally{Tt=n,ei.transition=e}}return!1}function lm(t,e,n){e=no(n,e),e=sv(t,e,1),t=Sr(t,e,1),e=En(),t!==null&&(wa(t,1,e),Nn(t,e))}function Gt(t,e,n){if(t.tag===3)lm(t,t,n);else for(;e!==null;){if(e.tag===3){lm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){t=no(n,t),t=ov(e,t,1),e=Sr(e,t,1),t=En(),e!==null&&(wa(e,1,t),Nn(e,t));break}}e=e.return}}function Ry(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=En(),t.pingedLanes|=t.suspendedLanes&n,nn===t&&(cn&n)===n&&(Jt===4||Jt===3&&(cn&130023424)===cn&&500>Wt()-Ah?Zr(t,0):Th|=n),Nn(t,e)}function Av(t,e){e===0&&(t.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var n=En();t=qi(t,e),t!==null&&(wa(t,e,n),Nn(t,n))}function Py(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Av(t,n)}function Ly(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(pe(314))}i!==null&&i.delete(e),Av(t,n)}var Cv;Cv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ln.current)Pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pn=!1,_y(t,e,n);Pn=!!(t.flags&131072)}else Pn=!1,zt&&e.flags&1048576&&Lg(e,sc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ol(t,e),t=e.pendingProps;var r=Zs(e,vn.current);js(e,n),r=xh(null,e,i,t,r,n);var s=yh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dn(i)?(s=!0,ic(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ph(e),r.updater=Dc,e.stateNode=r,r._reactInternals=e,Ud(e,i,t,n),e=kd(null,e,i,!0,s,n)):(e.tag=0,zt&&s&&ah(e),Sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ol(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ny(i),t=li(i,t),r){case 0:e=Od(null,e,i,t,n);break e;case 1:e=Zp(null,e,i,t,n);break e;case 11:e=Kp(null,e,i,t,n);break e;case 14:e=Jp(null,e,i,li(i.type,t),n);break e}throw Error(pe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),Od(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),Zp(t,e,i,r,n);case 3:e:{if(uv(e),t===null)throw Error(pe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Og(t,e),lc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=no(Error(pe(423)),e),e=Qp(t,e,i,n,r);break e}else if(i!==r){r=no(Error(pe(424)),e),e=Qp(t,e,i,n,r);break e}else for(Vn=yr(e.stateNode.containerInfo.firstChild),Gn=e,zt=!0,di=null,n=Ug(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),i===r){e=$i(t,e,n);break e}Sn(t,e,i,n)}e=e.child}return e;case 5:return kg(e),t===null&&Dd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Cd(i,r)?o=null:s!==null&&Cd(i,s)&&(e.flags|=32),cv(t,e),Sn(t,e,o,n),e.child;case 6:return t===null&&Dd(e),null;case 13:return dv(t,e,n);case 4:return mh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=eo(e,null,i,n):Sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),Kp(t,e,i,r,n);case 7:return Sn(t,e,e.pendingProps,n),e.child;case 8:return Sn(t,e,e.pendingProps.children,n),e.child;case 12:return Sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Lt(oc,i._currentValue),i._currentValue=o,s!==null)if(vi(s.value,o)){if(s.children===r.children&&!Ln.current){e=$i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(pe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,js(e,n),r=ti(r),i=i(r),e.flags|=1,Sn(t,e,i,n),e.child;case 14:return i=e.type,r=li(i,e.pendingProps),r=li(i.type,r),Jp(t,e,i,r,n);case 15:return av(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),Ol(t,e),e.tag=1,Dn(i)?(t=!0,ic(e)):t=!1,js(e,n),rv(e,i,r),Ud(e,i,r,n),kd(null,e,i,!0,t,n);case 19:return fv(t,e,n);case 22:return lv(t,e,n)}throw Error(pe(156,e.tag))};function bv(t,e){return tg(t,e)}function Dy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,e,n,i){return new Dy(t,e,n,i)}function Ph(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ny(t){if(typeof t=="function")return Ph(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$f)return 11;if(t===Kf)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=Qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ph(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ps:return Qr(n.children,r,s,e);case qf:o=8,r|=8;break;case sd:return t=Qn(12,n,e,r|2),t.elementType=sd,t.lanes=s,t;case od:return t=Qn(13,n,e,r),t.elementType=od,t.lanes=s,t;case ad:return t=Qn(19,n,e,r),t.elementType=ad,t.lanes=s,t;case k0:return Uc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F0:o=10;break e;case O0:o=9;break e;case $f:o=11;break e;case Kf:o=14;break e;case cr:o=16,i=null;break e}throw Error(pe(130,t==null?t:typeof t,""))}return e=Qn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Qr(t,e,n,i){return t=Qn(7,t,i,e),t.lanes=n,t}function Uc(t,e,n,i){return t=Qn(22,t,i,e),t.elementType=k0,t.lanes=n,t.stateNode={isHidden:!1},t}function mu(t,e,n){return t=Qn(6,t,null,e),t.lanes=n,t}function gu(t,e,n){return e=Qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Iy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kc(0),this.expirationTimes=Kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Lh(t,e,n,i,r,s,o,a,l){return t=new Iy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ph(s),t}function Uy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Rv(t){if(!t)return br;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(pe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(pe(171))}if(t.tag===1){var n=t.type;if(Dn(n))return Rg(t,n,e)}return e}function Pv(t,e,n,i,r,s,o,a,l){return t=Lh(n,i,!0,t,r,s,o,a,l),t.context=Rv(null),n=t.current,i=En(),r=Er(n),s=Wi(i,r),s.callback=e??null,Sr(n,s,r),t.current.lanes=r,wa(t,r,i),Nn(t,i),t}function Fc(t,e,n,i){var r=e.current,s=En(),o=Er(r);return n=Rv(n),e.context===null?e.context=n:e.pendingContext=n,e=Wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Sr(r,e,o),t!==null&&(mi(t,r,o,s),Il(t,r,o)),o}function gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dh(t,e){cm(t,e),(t=t.alternate)&&cm(t,e)}function Fy(){return null}var Lv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nh(t){this._internalRoot=t}Oc.prototype.render=Nh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(pe(409));Fc(t,e,null,null)};Oc.prototype.unmount=Nh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ss(function(){Fc(null,t,null,null)}),e[Yi]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=lg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&ug(t)}};function Ih(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function um(){}function Oy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=gc(o);s.call(c)}}var o=Pv(e,i,t,0,null,!1,!1,"",um);return t._reactRootContainer=o,t[Yi]=o.current,la(t.nodeType===8?t.parentNode:t),ss(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=gc(l);a.call(c)}}var l=Lh(t,0,!1,null,null,!1,!1,"",um);return t._reactRootContainer=l,t[Yi]=l.current,la(t.nodeType===8?t.parentNode:t),ss(function(){Fc(e,l,n,i)}),l}function zc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=gc(o);a.call(l)}}Fc(e,o,t,r)}else o=Oy(n,e,t,r,i);return gc(o)}og=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bo(e.pendingLanes);n!==0&&(Qf(e,n|1),Nn(e,Wt()),!(_t&6)&&(io=Wt()+500,Nr()))}break;case 13:ss(function(){var i=qi(t,1);if(i!==null){var r=En();mi(i,t,1,r)}}),Dh(t,1)}};eh=function(t){if(t.tag===13){var e=qi(t,134217728);if(e!==null){var n=En();mi(e,t,134217728,n)}Dh(t,134217728)}};ag=function(t){if(t.tag===13){var e=Er(t),n=qi(t,e);if(n!==null){var i=En();mi(n,t,e,i)}Dh(t,e)}};lg=function(){return Tt};cg=function(t,e){var n=Tt;try{return Tt=t,e()}finally{Tt=n}};vd=function(t,e,n){switch(e){case"input":if(ud(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Rc(i);if(!r)throw Error(pe(90));B0(i),ud(i,r)}}}break;case"textarea":V0(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};$0=Ch;K0=ss;var ky={usingClientEntryPoint:!1,Events:[Aa,Is,Rc,Y0,q0,Ch]},Co={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zy={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Q0(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||Fy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Tc=nl.inject(zy),Ci=nl}catch{}}Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ky;Xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ih(e))throw Error(pe(200));return Uy(t,e,null,n)};Xn.createRoot=function(t,e){if(!Ih(t))throw Error(pe(299));var n=!1,i="",r=Lv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Lh(t,1,!1,null,null,n,!1,i,r),t[Yi]=e.current,la(t.nodeType===8?t.parentNode:t),new Nh(e)};Xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(pe(188)):(t=Object.keys(t).join(","),Error(pe(268,t)));return t=Q0(e),t=t===null?null:t.stateNode,t};Xn.flushSync=function(t){return ss(t)};Xn.hydrate=function(t,e,n){if(!kc(e))throw Error(pe(200));return zc(null,t,e,!0,n)};Xn.hydrateRoot=function(t,e,n){if(!Ih(t))throw Error(pe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Lv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Pv(e,null,t,1,n??null,r,!1,s,o),t[Yi]=e.current,la(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Oc(e)};Xn.render=function(t,e,n){if(!kc(e))throw Error(pe(200));return zc(null,t,e,!1,n)};Xn.unmountComponentAtNode=function(t){if(!kc(t))throw Error(pe(40));return t._reactRootContainer?(ss(function(){zc(null,null,t,!1,function(){t._reactRootContainer=null,t[Yi]=null})}),!0):!1};Xn.unstable_batchedUpdates=Ch;Xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!kc(n))throw Error(pe(200));if(t==null||t._reactInternals===void 0)throw Error(pe(38));return zc(t,e,n,!1,i)};Xn.version="18.3.1-next-f1338f8080-20240426";function Dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dv)}catch(t){console.error(t)}}Dv(),D0.exports=Xn;var By=D0.exports,Nv,dm=By;Nv=dm.createRoot,dm.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uh="180",Hy=0,fm=1,Vy=2,Iv=1,Uv=2,ki=3,Rr=0,In=1,wi=2,Tr=0,qs=1,hm=2,pm=3,mm=4,Gy=5,Xr=100,Wy=101,Xy=102,jy=103,Yy=104,qy=200,$y=201,Ky=202,Jy=203,Kd=204,Jd=205,Zy=206,Qy=207,e1=208,t1=209,n1=210,i1=211,r1=212,s1=213,o1=214,Zd=0,Qd=1,ef=2,ro=3,tf=4,nf=5,rf=6,sf=7,Fv=0,a1=1,l1=2,Ar=0,c1=1,u1=2,d1=3,Ov=4,f1=5,h1=6,p1=7,kv=300,so=301,oo=302,of=303,af=304,Bc=306,vc=1e3,Kr=1001,lf=1002,gi=1003,m1=1004,il=1005,Ti=1006,vu=1007,Jr=1008,Pi=1009,zv=1010,Bv=1011,va=1012,Fh=1013,os=1014,Gi=1015,ba=1016,Oh=1017,kh=1018,_a=1020,Hv=35902,Vv=35899,Gv=1021,Wv=1022,hi=1023,xa=1026,ya=1027,Xv=1028,zh=1029,jv=1030,Bh=1031,Hh=1033,Hl=33776,Vl=33777,Gl=33778,Wl=33779,cf=35840,uf=35841,df=35842,ff=35843,hf=36196,pf=37492,mf=37496,gf=37808,vf=37809,_f=37810,xf=37811,yf=37812,Sf=37813,Mf=37814,Ef=37815,wf=37816,Tf=37817,Af=37818,Cf=37819,bf=37820,Rf=37821,Pf=36492,Lf=36494,Df=36495,Nf=36283,If=36284,Uf=36285,Ff=36286,g1=3200,v1=3201,Yv=0,_1=1,hr="",bn="srgb",ao="srgb-linear",_c="linear",Rt="srgb",ms=7680,gm=519,x1=512,y1=513,S1=514,qv=515,M1=516,E1=517,w1=518,T1=519,vm=35044,_m="300 es",Ai=2e3,xc=2001;class ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_u=Math.PI/180,Of=180/Math.PI;function Ra(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[t&255]+pn[t>>8&255]+pn[t>>16&255]+pn[t>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function dt(t,e,n){return Math.max(e,Math.min(n,t))}function A1(t,e){return(t%e+e)%e}function xu(t,e,n){return(1-n)*t+n*e}function bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=S;return}if(d!==S||l!==h||c!==p||f!==x){let v=1-a;const u=l*h+c*p+f*x+d*S,m=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const C=Math.sqrt(g),b=Math.atan2(C,u*m);v=Math.sin(v*b)/C,a=Math.sin(a*b)/C}const _=a*m;if(l=l*v+h*_,c=c*v+p*_,f=f*v+x*_,d=d*v+S*_,v===1-a){const C=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=C,c*=C,f*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+f*d+l*p-c*h,e[n+1]=l*x+f*h+c*d-a*p,e[n+2]=c*x+f*p+a*h-l*d,e[n+3]=f*x-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*p*x,this._y=c*p*d-h*f*x,this._z=c*f*x+h*p*d,this._w=c*f*d-h*p*x;break;case"YXZ":this._x=h*f*d+c*p*x,this._y=c*p*d-h*f*x,this._z=c*f*x-h*p*d,this._w=c*f*d+h*p*x;break;case"ZXY":this._x=h*f*d-c*p*x,this._y=c*p*d+h*f*x,this._z=c*f*x+h*p*d,this._w=c*f*d-h*p*x;break;case"ZYX":this._x=h*f*d-c*p*x,this._y=c*p*d+h*f*x,this._z=c*f*x-h*p*d,this._w=c*f*d+h*p*x;break;case"YZX":this._x=h*f*d+c*p*x,this._y=c*p*d+h*f*x,this._z=c*f*x-h*p*d,this._w=c*f*d-h*p*x;break;case"XZY":this._x=h*f*d-c*p*x,this._y=c*p*d-h*f*x,this._z=c*f*x+h*p*d,this._w=c*f*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this.z=dt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this.z=dt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yu.copy(this).projectOnVector(e),this.sub(yu)}reflect(e){return this.sub(yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yu=new k,xm=new Pa;class st{constructor(e,n,i,r,s,o,a,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],x=i[8],S=r[0],v=r[3],u=r[6],m=r[1],g=r[4],_=r[7],C=r[2],b=r[5],R=r[8];return s[0]=o*S+a*m+l*C,s[3]=o*v+a*g+l*b,s[6]=o*u+a*_+l*R,s[1]=c*S+f*m+d*C,s[4]=c*v+f*g+d*b,s[7]=c*u+f*_+d*R,s[2]=h*S+p*m+x*C,s[5]=h*v+p*g+x*b,s[8]=h*u+p*_+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,p=c*s-o*l,x=n*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=d*S,e[1]=(r*c-f*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Su.makeScale(e,n)),this}rotate(e){return this.premultiply(Su.makeRotation(-e)),this}translate(e,n){return this.premultiply(Su.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Su=new st;function $v(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function C1(){const t=yc("canvas");return t.style.display="block",t}const ym={};function Sa(t){t in ym||(ym[t]=!0,console.warn(t))}function b1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Sm=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mm=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R1(){const t={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Rt&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(r.r=$s(r.r),r.g=$s(r.g),r.b=$s(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hr?_c:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Sa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Sa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ao]:{primaries:e,whitePoint:i,transfer:_c,toXYZ:Sm,fromXYZ:Mm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:Rt,toXYZ:Sm,fromXYZ:Mm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),t}const St=R1();function Xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $s(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gs;class P1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gs===void 0&&(gs=yc("canvas")),gs.width=e.width,gs.height=e.height;const r=gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=gs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xi(n[i]/255)*255):n[i]=Xi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let L1=0;class Vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=Ra(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mu(r[o].image)):s.push(Mu(r[o]))}else s=Mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?P1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D1=0;const Eu=new k;class wn extends ho{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,i=Kr,r=Kr,s=Ti,o=Jr,a=hi,l=Pi,c=wn.DEFAULT_ANISOTROPY,f=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=Ra(),this.name="",this.source=new Vh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Eu).x}get height(){return this.source.getSize(Eu).y}get depth(){return this.source.getSize(Eu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vc:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vc:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=kv;wn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],x=l[9],S=l[2],v=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-S)<.01&&Math.abs(x-v)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+S)<.1&&Math.abs(x+v)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,_=(p+1)/2,C=(u+1)/2,b=(f+h)/4,R=(d+S)/4,L=(x+v)/4;return g>_&&g>C?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=b/i,s=R/i):_>C?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=b/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=L/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-x)*(v-x)+(d-S)*(d-S)+(h-f)*(h-f));return Math.abs(m)<.001&&(m=1),this.x=(v-x)/m,this.y=(d-S)/m,this.z=(h-f)/m,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this.z=dt(this.z,e.z,n.z),this.w=dt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this.z=dt(this.z,e,n),this.w=dt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N1 extends ho{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new wn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Vh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class as extends N1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Kv extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I1 extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class La{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rl.copy(i.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),sl.subVectors(this.max,Ro),vs.subVectors(e.a,Ro),_s.subVectors(e.b,Ro),xs.subVectors(e.c,Ro),nr.subVectors(_s,vs),ir.subVectors(xs,_s),Ur.subVectors(vs,xs);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Ur.z,Ur.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Ur.z,0,-Ur.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Ur.y,Ur.x,0];return!wu(n,vs,_s,xs,sl)||(n=[1,0,0,0,1,0,0,0,1],!wu(n,vs,_s,xs,sl))?!1:(ol.crossVectors(nr,ir),n=[ol.x,ol.y,ol.z],wu(n,vs,_s,xs,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new k,new k,new k,new k,new k,new k,new k,new k],ri=new k,rl=new La,vs=new k,_s=new k,xs=new k,nr=new k,ir=new k,Ur=new k,Ro=new k,sl=new k,ol=new k,Fr=new k;function wu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Fr.fromArray(t,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),c=n.dot(Fr),f=i.dot(Fr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const U1=new La,Po=new k,Tu=new k;class Hc{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):U1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Tu)),this.expandByPoint(Po.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ii=new k,Au=new k,al=new k,rr=new k,Cu=new k,ll=new k,bu=new k;class Gh{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Au.copy(e).add(n).multiplyScalar(.5),al.copy(n).sub(e).normalize(),rr.copy(this.origin).sub(Au);const s=e.distanceTo(n)*.5,o=-this.direction.dot(al),a=rr.dot(this.direction),l=-rr.dot(al),c=rr.lengthSq(),f=Math.abs(1-o*o);let d,h,p,x;if(f>0)if(d=o*l-a,h=o*a-l,x=s*f,d>=0)if(h>=-x)if(h<=x){const S=1/f;d*=S,h*=S,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Au).addScaledVector(al,h),p}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),r=Ii.dot(Ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,i,r,s){Cu.subVectors(n,e),ll.subVectors(i,e),bu.crossVectors(Cu,ll);let o=this.direction.dot(bu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rr.subVectors(this.origin,e);const l=a*this.direction.dot(ll.crossVectors(rr,ll));if(l<0)return null;const c=a*this.direction.dot(Cu.cross(rr));if(c<0||l+c>o)return null;const f=-a*rr.dot(bu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,i,r,s,o,a,l,c,f,d,h,p,x,S,v){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,p,x,S,v)}set(e,n,i,r,s,o,a,l,c,f,d,h,p,x,S,v){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=x,u[11]=S,u[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,x=a*f,S=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=h-S*c,n[9]=-a*l,n[2]=S-h*c,n[6]=x+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,x=c*f,S=c*d;n[0]=h+S*a,n[4]=x*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-x,n[6]=S+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,x=c*f,S=c*d;n[0]=h-S*a,n[4]=-o*d,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*f,n[9]=S-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,x=a*f,S=a*d;n[0]=l*f,n[4]=x*c-p,n[8]=h*c+S,n[1]=l*d,n[5]=S*c+h,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,x=a*l,S=a*c;n[0]=l*f,n[4]=S-h*d,n[8]=x*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+x,n[10]=h-S*d}else if(e.order==="XZY"){const h=o*l,p=o*c,x=a*l,S=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+S,n[5]=o*f,n[9]=p*d-x,n[2]=x*d-p,n[6]=a*f,n[10]=S*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(F1,e,O1)}lookAt(e,n,i){const r=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),sr.crossVectors(i,On),sr.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),sr.crossVectors(i,On)),sr.normalize(),cl.crossVectors(On,sr),r[0]=sr.x,r[4]=cl.x,r[8]=On.x,r[1]=sr.y,r[5]=cl.y,r[9]=On.y,r[2]=sr.z,r[6]=cl.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],x=i[2],S=i[6],v=i[10],u=i[14],m=i[3],g=i[7],_=i[11],C=i[15],b=r[0],R=r[4],L=r[8],y=r[12],M=r[1],N=r[5],V=r[9],Y=r[13],ee=r[2],q=r[6],j=r[10],G=r[14],U=r[3],te=r[7],ae=r[11],xe=r[15];return s[0]=o*b+a*M+l*ee+c*U,s[4]=o*R+a*N+l*q+c*te,s[8]=o*L+a*V+l*j+c*ae,s[12]=o*y+a*Y+l*G+c*xe,s[1]=f*b+d*M+h*ee+p*U,s[5]=f*R+d*N+h*q+p*te,s[9]=f*L+d*V+h*j+p*ae,s[13]=f*y+d*Y+h*G+p*xe,s[2]=x*b+S*M+v*ee+u*U,s[6]=x*R+S*N+v*q+u*te,s[10]=x*L+S*V+v*j+u*ae,s[14]=x*y+S*Y+v*G+u*xe,s[3]=m*b+g*M+_*ee+C*U,s[7]=m*R+g*N+_*q+C*te,s[11]=m*L+g*V+_*j+C*ae,s[15]=m*y+g*Y+_*G+C*xe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],x=e[3],S=e[7],v=e[11],u=e[15];return x*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+S*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*f-s*l*f)+v*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],x=e[12],S=e[13],v=e[14],u=e[15],m=d*v*c-S*h*c+S*l*p-a*v*p-d*l*u+a*h*u,g=x*h*c-f*v*c-x*l*p+o*v*p+f*l*u-o*h*u,_=f*S*c-x*d*c+x*a*p-o*S*p-f*a*u+o*d*u,C=x*d*l-f*S*l-x*a*h+o*S*h+f*a*v-o*d*v,b=n*m+i*g+r*_+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=m*R,e[1]=(S*h*s-d*v*s-S*r*p+i*v*p+d*r*u-i*h*u)*R,e[2]=(a*v*s-S*l*s+S*r*c-i*v*c-a*r*u+i*l*u)*R,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*R,e[4]=g*R,e[5]=(f*v*s-x*h*s+x*r*p-n*v*p-f*r*u+n*h*u)*R,e[6]=(x*l*s-o*v*s-x*r*c+n*v*c+o*r*u-n*l*u)*R,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*p+n*l*p)*R,e[8]=_*R,e[9]=(x*d*s-f*S*s-x*i*p+n*S*p+f*i*u-n*d*u)*R,e[10]=(o*S*s-x*a*s+x*i*c-n*S*c-o*i*u+n*a*u)*R,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*p-n*a*p)*R,e[12]=C*R,e[13]=(f*S*r-x*d*r+x*i*h-n*S*h-f*i*v+n*d*v)*R,e[14]=(x*a*r-o*S*r-x*i*l+n*S*l+o*i*v-n*a*v)*R,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,p=s*f,x=s*d,S=o*f,v=o*d,u=a*d,m=l*c,g=l*f,_=l*d,C=i.x,b=i.y,R=i.z;return r[0]=(1-(S+u))*C,r[1]=(p+_)*C,r[2]=(x-g)*C,r[3]=0,r[4]=(p-_)*b,r[5]=(1-(h+u))*b,r[6]=(v+m)*b,r[7]=0,r[8]=(x+g)*R,r[9]=(v-m)*R,r[10]=(1-(h+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ys.set(r[0],r[1],r[2]).length();const o=ys.set(r[4],r[5],r[6]).length(),a=ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const c=1/s,f=1/o,d=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=f,si.elements[5]*=f,si.elements[6]*=f,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,n.setFromRotationMatrix(si),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ai,l=!1){const c=this.elements,f=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let x,S;if(l)x=s/(o-s),S=o*s/(o-s);else if(a===Ai)x=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===xc)x=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai,l=!1){const c=this.elements,f=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let x,S;if(l)x=1/(o-s),S=o/(o-s);else if(a===Ai)x=-2/(o-s),S=-(o+s)/(o-s);else if(a===xc)x=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ys=new k,si=new Ot,F1=new k(0,0,0),O1=new k(1,1,1),sr=new k,cl=new k,On=new k,Em=new Ot,wm=new Pa;class Li{constructor(e=0,n=0,i=0,r=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Em,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wm.setFromEuler(this),this.setFromQuaternion(wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class Wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let k1=0;const Tm=new k,Ss=new Pa,Ui=new Ot,ul=new k,Lo=new k,z1=new k,B1=new Pa,Am=new k(1,0,0),Cm=new k(0,1,0),bm=new k(0,0,1),Rm={type:"added"},H1={type:"removed"},Ms={type:"childadded",child:null},Ru={type:"childremoved",child:null};class rn extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=Ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new k,n=new Li,i=new Pa,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new st}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Am,e)}rotateY(e){return this.rotateOnAxis(Cm,e)}rotateZ(e){return this.rotateOnAxis(bm,e)}translateOnAxis(e,n){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Am,e)}translateY(e){return this.translateOnAxis(Cm,e)}translateZ(e){return this.translateOnAxis(bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ul.copy(e):ul.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Lo,ul,this.up):Ui.lookAt(ul,Lo,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rm),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(H1),Ru.child=e,this.dispatchEvent(Ru),Ru.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rm),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,z1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,B1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new k(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new k,Fi=new k,Pu=new k,Oi=new k,Es=new k,ws=new k,Pm=new k,Lu=new k,Du=new k,Nu=new k,Iu=new Pt,Uu=new Pt,Fu=new Pt;class fi{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),oi.subVectors(e,n),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){oi.subVectors(r,n),Fi.subVectors(i,n),Pu.subVectors(e,n);const o=oi.dot(oi),a=oi.dot(Fi),l=oi.dot(Pu),c=Fi.dot(Fi),f=Fi.dot(Pu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*f)*h,x=(o*f-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Iu.setScalar(0),Uu.setScalar(0),Fu.setScalar(0),Iu.fromBufferAttribute(e,n),Uu.fromBufferAttribute(e,i),Fu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Iu,s.x),o.addScaledVector(Uu,s.y),o.addScaledVector(Fu,s.z),o}static isFrontFacing(e,n,i,r){return oi.subVectors(i,n),Fi.subVectors(e,n),oi.cross(Fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),oi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return fi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Es.subVectors(r,i),ws.subVectors(s,i),Lu.subVectors(e,i);const l=Es.dot(Lu),c=ws.dot(Lu);if(l<=0&&c<=0)return n.copy(i);Du.subVectors(e,r);const f=Es.dot(Du),d=ws.dot(Du);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Es,o);Nu.subVectors(e,s);const p=Es.dot(Nu),x=ws.dot(Nu);if(x>=0&&p<=x)return n.copy(s);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(ws,a);const v=f*x-p*d;if(v<=0&&d-f>=0&&p-x>=0)return Pm.subVectors(s,r),a=(d-f)/(d-f+(p-x)),n.copy(r).addScaledVector(Pm,a);const u=1/(v+S+h);return o=S*u,a=h*u,n.copy(i).addScaledVector(Es,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Ou(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class mt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=St.workingColorSpace){return this.r=e,this.g=n,this.b=i,St.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=St.workingColorSpace){if(e=A1(e,1),n=dt(n,0,1),i=dt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ou(o,s,e+1/3),this.g=Ou(o,s,e),this.b=Ou(o,s,e-1/3)}return St.colorSpaceToWorking(this,r),this}setStyle(e,n=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=Jv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return St.workingToColorSpace(mn.copy(this),e),Math.round(dt(mn.r*255,0,255))*65536+Math.round(dt(mn.g*255,0,255))*256+Math.round(dt(mn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.workingToColorSpace(mn.copy(this),n);const i=mn.r,r=mn.g,s=mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=St.workingColorSpace){return St.workingToColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=bn){St.workingToColorSpace(mn.copy(this),e);const n=mn.r,i=mn.g,r=mn.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+n,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(or),e.getHSL(dl);const i=xu(or.h,dl.h,n),r=xu(or.s,dl.s,n),s=xu(or.l,dl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new mt;mt.NAMES=Jv;let V1=0;class po extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=Ra(),this.name="",this.type="Material",this.blending=qs,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Jd,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kd&&(i.blendSrc=this.blendSrc),this.blendDst!==Jd&&(i.blendDst=this.blendDst),this.blendEquation!==Xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vc extends po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new k,fl=new Xe;let G1=0;class Ri{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:G1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vm,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fl.fromBufferAttribute(this,n),fl.applyMatrix3(e),this.setXY(n,fl.x,fl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=bo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array),r=Cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array),r=Cn(r,this.array),s=Cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vm&&(e.usage=this.usage),e}}class Zv extends Ri{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Qv extends Ri{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wt extends Ri{constructor(e,n,i){super(new Float32Array(e),n,i)}}let W1=0;const $n=new Ot,ku=new rn,Ts=new k,kn=new La,Do=new La,en=new k;class dn extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=Ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($v(e)?Qv:Zv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new st().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,i){return $n.makeTranslation(e,n,i),this.applyMatrix4($n),this}scale(e,n,i){return $n.makeScale(e,n,i),this.applyMatrix4($n),this}lookAt(e){return ku.lookAt(e),ku.updateMatrix(),this.applyMatrix4(ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new La);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(kn.min,Do.min),kn.expandByPoint(en),en.addVectors(kn.max,Do.max),kn.expandByPoint(en)):(kn.expandByPoint(Do.min),kn.expandByPoint(Do.max))}kn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(en));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)en.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),en.add(Ts)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new k,l[L]=new k;const c=new k,f=new k,d=new k,h=new Xe,p=new Xe,x=new Xe,S=new k,v=new k;function u(L,y,M){c.fromBufferAttribute(i,L),f.fromBufferAttribute(i,y),d.fromBufferAttribute(i,M),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,y),x.fromBufferAttribute(s,M),f.sub(c),d.sub(c),p.sub(h),x.sub(h);const N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(S.copy(f).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(N),v.copy(d).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(N),a[L].add(S),a[y].add(S),a[M].add(S),l[L].add(v),l[y].add(v),l[M].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let L=0,y=m.length;L<y;++L){const M=m[L],N=M.start,V=M.count;for(let Y=N,ee=N+V;Y<ee;Y+=3)u(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const g=new k,_=new k,C=new k,b=new k;function R(L){C.fromBufferAttribute(r,L),b.copy(C);const y=a[L];g.copy(y),g.sub(C.multiplyScalar(C.dot(y))).normalize(),_.crossVectors(b,y);const N=_.dot(l[L])<0?-1:1;o.setXYZW(L,g.x,g.y,g.z,N)}for(let L=0,y=m.length;L<y;++L){const M=m[L],N=M.start,V=M.count;for(let Y=N,ee=N+V;Y<ee;Y+=3)R(e.getX(Y+0)),R(e.getX(Y+1)),R(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ri(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,f=new k,d=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),S=e.getX(h+1),v=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,v),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,v),a.add(f),l.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let p=0,x=0;for(let S=0,v=l.length;S<v;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*f;for(let u=0;u<f;u++)h[x++]=c[p++]}return new Ri(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lm=new Ot,Or=new Gh,hl=new Hc,Dm=new k,pl=new k,ml=new k,gl=new k,zu=new k,vl=new k,Nm=new k,_l=new k;class Ae extends rn{constructor(e=new dn,n=new Vc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(zu.fromBufferAttribute(d,e),o?vl.addScaledVector(zu,f):vl.addScaledVector(zu.sub(n),f))}n.add(vl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(hl.containsPoint(Or.origin)===!1&&(Or.intersectSphere(hl,Dm)===null||Or.origin.distanceToSquared(Dm)>(e.far-e.near)**2))&&(Lm.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Lm),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=h.length;x<S;x++){const v=h[x],u=o[v.materialIndex],m=Math.max(v.start,p.start),g=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let _=m,C=g;_<C;_+=3){const b=a.getX(_),R=a.getX(_+1),L=a.getX(_+2);r=xl(this,u,e,i,c,f,d,b,R,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let v=x,u=S;v<u;v+=3){const m=a.getX(v),g=a.getX(v+1),_=a.getX(v+2);r=xl(this,o,e,i,c,f,d,m,g,_),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=h.length;x<S;x++){const v=h[x],u=o[v.materialIndex],m=Math.max(v.start,p.start),g=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let _=m,C=g;_<C;_+=3){const b=_,R=_+1,L=_+2;r=xl(this,u,e,i,c,f,d,b,R,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let v=x,u=S;v<u;v+=3){const m=v,g=v+1,_=v+2;r=xl(this,o,e,i,c,f,d,m,g,_),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function X1(t,e,n,i,r,s,o,a){let l;if(e.side===In?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Rr,a),l===null)return null;_l.copy(a),_l.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(_l);return c<n.near||c>n.far?null:{distance:c,point:_l.clone(),object:t}}function xl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,pl),t.getVertexPosition(l,ml),t.getVertexPosition(c,gl);const f=X1(t,e,n,i,pl,ml,gl,Nm);if(f){const d=new k;fi.getBarycoord(Nm,pl,ml,gl,d),r&&(f.uv=fi.getInterpolatedAttribute(r,a,l,c,d,new Xe)),s&&(f.uv1=fi.getInterpolatedAttribute(s,a,l,c,d,new Xe)),o&&(f.normal=fi.getInterpolatedAttribute(o,a,l,c,d,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};fi.getNormal(pl,ml,gl,h.normal),f.face=h,f.barycoord=d}return f}class Mn extends dn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(d,2));function x(S,v,u,m,g,_,C,b,R,L,y){const M=_/R,N=C/L,V=_/2,Y=C/2,ee=b/2,q=R+1,j=L+1;let G=0,U=0;const te=new k;for(let ae=0;ae<j;ae++){const xe=ae*N-Y;for(let ke=0;ke<q;ke++){const it=ke*M-V;te[S]=it*m,te[v]=xe*g,te[u]=ee,c.push(te.x,te.y,te.z),te[S]=0,te[v]=0,te[u]=b>0?1:-1,f.push(te.x,te.y,te.z),d.push(ke/R),d.push(1-ae/L),G+=1}}for(let ae=0;ae<L;ae++)for(let xe=0;xe<R;xe++){const ke=h+xe+q*ae,it=h+xe+q*(ae+1),et=h+(xe+1)+q*(ae+1),ye=h+(xe+1)+q*ae;l.push(ke,it,ye),l.push(it,et,ye),U+=6}a.addGroup(p,U,y),p+=U,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function yn(t){const e={};for(let n=0;n<t.length;n++){const i=lo(t[n]);for(const r in i)e[r]=i[r]}return e}function j1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function e_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const Y1={clone:lo,merge:yn};var q1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q1,this.fragmentShader=$1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=j1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class t_ extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new k,Im=new Xe,Um=new Xe;class Hn extends t_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Of*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Of*2*Math.atan(Math.tan(_u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,n){return this.getViewBounds(e,Im,Um),n.subVectors(Um,Im)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_u*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const As=-90,Cs=1;class K1 extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(As,Cs,e,n);r.layers=this.layers,this.add(r);const s=new Hn(As,Cs,e,n);s.layers=this.layers,this.add(s);const o=new Hn(As,Cs,e,n);o.layers=this.layers,this.add(o);const a=new Hn(As,Cs,e,n);a.layers=this.layers,this.add(a);const l=new Hn(As,Cs,e,n);l.layers=this.layers,this.add(l);const c=new Hn(As,Cs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class n_ extends wn{constructor(e=[],n=so,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class J1 extends as{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new n_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Mn(5,5,5),s=new Pr({name:"CubemapFromEquirect",uniforms:lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:Tr});s.uniforms.tEquirect.value=n;const o=new Ae(r,s),a=n.minFilter;return n.minFilter===Jr&&(n.minFilter=Ti),new K1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class pt extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z1={type:"move"};class Bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const v=n.getJointPose(S,i),u=this._getHandJoint(c,S);v!==null&&(u.matrix.fromArray(v.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=v.radius),u.visible=v!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Xh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new mt(e),this.density=n}clone(){return new Xh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Q1 extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Hu=new k,eS=new k,tS=new st;class Gr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Hu.subVectors(i,n).cross(eS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||tS.getNormalMatrix(e),r=this.coplanarPoint(Hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Hc,nS=new Xe(.5,.5),yl=new k;class jh{constructor(e=new Gr,n=new Gr,i=new Gr,r=new Gr,s=new Gr,o=new Gr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],d=s[5],h=s[6],p=s[7],x=s[8],S=s[9],v=s[10],u=s[11],m=s[12],g=s[13],_=s[14],C=s[15];if(r[0].setComponents(c-o,p-f,u-x,C-m).normalize(),r[1].setComponents(c+o,p+f,u+x,C+m).normalize(),r[2].setComponents(c+a,p+d,u+S,C+g).normalize(),r[3].setComponents(c-a,p-d,u-S,C-g).normalize(),i)r[4].setComponents(l,h,v,_).normalize(),r[5].setComponents(c-l,p-h,u-v,C-_).normalize();else if(r[4].setComponents(c-l,p-h,u-v,C-_).normalize(),n===Ai)r[5].setComponents(c+l,p+h,u+v,C+_).normalize();else if(n===xc)r[5].setComponents(l,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const n=nS.distanceTo(e.center);return kr.radius=.7071067811865476+n,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(yl.x=r.normal.x>0?e.max.x:e.min.x,yl.y=r.normal.y>0?e.max.y:e.min.y,yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class i_ extends po{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new k,Mc=new k,Fm=new Ot,No=new Gh,Sl=new Hc,Vu=new k,Om=new k;class iS extends rn{constructor(e=new dn,n=new i_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Sc.fromBufferAttribute(n,r-1),Mc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Sc.distanceTo(Mc);e.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(r),Sl.radius+=s,e.ray.intersectsSphere(Sl)===!1)return;Fm.copy(r).invert(),No.copy(e.ray).applyMatrix4(Fm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let S=p,v=x-1;S<v;S+=c){const u=f.getX(S),m=f.getX(S+1),g=Ml(this,e,No,l,u,m,S);g&&n.push(g)}if(this.isLineLoop){const S=f.getX(x-1),v=f.getX(p),u=Ml(this,e,No,l,S,v,x-1);u&&n.push(u)}}else{const p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let S=p,v=x-1;S<v;S+=c){const u=Ml(this,e,No,l,S,S+1,S);u&&n.push(u)}if(this.isLineLoop){const S=Ml(this,e,No,l,x-1,p,x-1);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ml(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Sc.fromBufferAttribute(a,r),Mc.fromBufferAttribute(a,s),n.distanceSqToSegment(Sc,Mc,Vu,Om)>i)return;Vu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Vu);if(!(c<e.near||c>e.far))return{distance:c,point:Om.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class rS extends wn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class r_ extends wn{constructor(e,n,i=os,r,s,o,a=gi,l=gi,c,f=xa,d=1){if(f!==xa&&f!==ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:d};super(h,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class s_ extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ma extends dn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],f=n/2,d=Math.PI/2*e,h=n,p=2*d+h,x=i*2+s,S=r+1,v=new k,u=new k;for(let m=0;m<=x;m++){let g=0,_=0,C=0,b=0;if(m<=i){const y=m/i,M=y*Math.PI/2;_=-f-e*Math.cos(M),C=e*Math.sin(M),b=-e*Math.cos(M),g=y*d}else if(m<=i+s){const y=(m-i)/s;_=-f+y*n,C=e,b=0,g=d+y*h}else{const y=(m-i-s)/i,M=y*Math.PI/2;_=f+e*Math.sin(M),C=e*Math.cos(M),b=e*Math.sin(M),g=d+h+y*d}const R=Math.max(0,Math.min(1,g/p));let L=0;m===0?L=.5/r:m===x&&(L=-.5/r);for(let y=0;y<=r;y++){const M=y/r,N=M*Math.PI*2,V=Math.sin(N),Y=Math.cos(N);u.x=-C*Y,u.y=_,u.z=C*V,a.push(u.x,u.y,u.z),v.set(-C*Y,b,C*V),v.normalize(),l.push(v.x,v.y,v.z),c.push(M+L,R)}if(m>0){const y=(m-1)*S;for(let M=0;M<r;M++){const N=y+M,V=y+M+1,Y=m*S+M,ee=m*S+M+1;o.push(N,V,Y),o.push(V,ee,Y)}}}this.setIndex(o),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ks extends dn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new k,f=new Xe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){const p=i+d/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[h]/e+1)/2,f.y=(o[h+1]/e+1)/2,l.push(f.x,f.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(a,3)),this.setAttribute("uv",new wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ci extends dn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],p=[];let x=0;const S=[],v=i/2;let u=0;m(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(f),this.setAttribute("position",new wt(d,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(p,2));function m(){const _=new k,C=new k;let b=0;const R=(n-e)/i;for(let L=0;L<=s;L++){const y=[],M=L/s,N=M*(n-e)+e;for(let V=0;V<=r;V++){const Y=V/r,ee=Y*l+a,q=Math.sin(ee),j=Math.cos(ee);C.x=N*q,C.y=-M*i+v,C.z=N*j,d.push(C.x,C.y,C.z),_.set(q,R,j).normalize(),h.push(_.x,_.y,_.z),p.push(Y,1-M),y.push(x++)}S.push(y)}for(let L=0;L<r;L++)for(let y=0;y<s;y++){const M=S[y][L],N=S[y+1][L],V=S[y+1][L+1],Y=S[y][L+1];(e>0||y!==0)&&(f.push(M,N,Y),b+=3),(n>0||y!==s-1)&&(f.push(N,V,Y),b+=3)}c.addGroup(u,b,0),u+=b}function g(_){const C=x,b=new Xe,R=new k;let L=0;const y=_===!0?e:n,M=_===!0?1:-1;for(let V=1;V<=r;V++)d.push(0,v*M,0),h.push(0,M,0),p.push(.5,.5),x++;const N=x;for(let V=0;V<=r;V++){const ee=V/r*l+a,q=Math.cos(ee),j=Math.sin(ee);R.x=y*j,R.y=v*M,R.z=y*q,d.push(R.x,R.y,R.z),h.push(0,M,0),b.x=q*.5+.5,b.y=j*.5*M+.5,p.push(b.x,b.y),x++}for(let V=0;V<r;V++){const Y=C+V,ee=N+V;_===!0?f.push(ee,ee+1,Y):f.push(ee+1,ee,Y),L+=3}c.addGroup(u,L,_===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ai extends ci{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ai(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yh extends dn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new wt(s,3)),this.setAttribute("normal",new wt(s.slice(),3)),this.setAttribute("uv",new wt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const g=new k,_=new k,C=new k;for(let b=0;b<n.length;b+=3)p(n[b+0],g),p(n[b+1],_),p(n[b+2],C),l(g,_,C,m)}function l(m,g,_,C){const b=C+1,R=[];for(let L=0;L<=b;L++){R[L]=[];const y=m.clone().lerp(_,L/b),M=g.clone().lerp(_,L/b),N=b-L;for(let V=0;V<=N;V++)V===0&&L===b?R[L][V]=y:R[L][V]=y.clone().lerp(M,V/N)}for(let L=0;L<b;L++)for(let y=0;y<2*(b-L)-1;y++){const M=Math.floor(y/2);y%2===0?(h(R[L][M+1]),h(R[L+1][M]),h(R[L][M])):(h(R[L][M+1]),h(R[L+1][M+1]),h(R[L+1][M]))}}function c(m){const g=new k;for(let _=0;_<s.length;_+=3)g.x=s[_+0],g.y=s[_+1],g.z=s[_+2],g.normalize().multiplyScalar(m),s[_+0]=g.x,s[_+1]=g.y,s[_+2]=g.z}function f(){const m=new k;for(let g=0;g<s.length;g+=3){m.x=s[g+0],m.y=s[g+1],m.z=s[g+2];const _=v(m)/2/Math.PI+.5,C=u(m)/Math.PI+.5;o.push(_,1-C)}x(),d()}function d(){for(let m=0;m<o.length;m+=6){const g=o[m+0],_=o[m+2],C=o[m+4],b=Math.max(g,_,C),R=Math.min(g,_,C);b>.9&&R<.1&&(g<.2&&(o[m+0]+=1),_<.2&&(o[m+2]+=1),C<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,g){const _=m*3;g.x=e[_+0],g.y=e[_+1],g.z=e[_+2]}function x(){const m=new k,g=new k,_=new k,C=new k,b=new Xe,R=new Xe,L=new Xe;for(let y=0,M=0;y<s.length;y+=9,M+=6){m.set(s[y+0],s[y+1],s[y+2]),g.set(s[y+3],s[y+4],s[y+5]),_.set(s[y+6],s[y+7],s[y+8]),b.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),C.copy(m).add(g).add(_).divideScalar(3);const N=v(C);S(b,M+0,m,N),S(R,M+2,g,N),S(L,M+4,_,N)}}function S(m,g,_,C){C<0&&m.x===1&&(o[g]=m.x-1),_.x===0&&_.z===0&&(o[g]=C/2/Math.PI+.5)}function v(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yh(e.vertices,e.indices,e.radius,e.details)}}class zn extends Yh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new zn(e.radius,e.detail)}}class Ji{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],h=i[r+1]-f,p=(o-f)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Xe:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new k,r=[],s=[],o=[],a=new k,l=new Ot;for(let p=0;p<=e;p++){const x=p/e;r[p]=this.getTangentAt(x,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(dt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(dt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],p*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class o_ extends Ji{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Xe){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*f-p*d+this.aX,c=h*d+p*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sS extends o_{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qh(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,d){let h=(o-s)/c-(a-s)/(c+f)+(a-o)/f,p=(a-o)/f-(l-o)/(f+d)+(l-a)/d;h*=f,p*=f,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const El=new k,Gu=new qh,Wu=new qh,Xu=new qh;class kf extends Ji{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new k){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(El.subVectors(r[0],r[1]).add(r[0]),c=El);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(El.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=El),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(d),p),S=Math.pow(d.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(f),p);S<1e-4&&(S=1),x<1e-4&&(x=S),v<1e-4&&(v=S),Gu.initNonuniformCatmullRom(c.x,d.x,h.x,f.x,x,S,v),Wu.initNonuniformCatmullRom(c.y,d.y,h.y,f.y,x,S,v),Xu.initNonuniformCatmullRom(c.z,d.z,h.z,f.z,x,S,v)}else this.curveType==="catmullrom"&&(Gu.initCatmullRom(c.x,d.x,h.x,f.x,this.tension),Wu.initCatmullRom(c.y,d.y,h.y,f.y,this.tension),Xu.initCatmullRom(c.z,d.z,h.z,f.z,this.tension));return i.set(Gu.calc(l),Wu.calc(l),Xu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function km(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function oS(t,e){const n=1-t;return n*n*e}function aS(t,e){return 2*(1-t)*t*e}function lS(t,e){return t*t*e}function Zo(t,e,n,i){return oS(t,e)+aS(t,n)+lS(t,i)}function cS(t,e){const n=1-t;return n*n*n*e}function uS(t,e){const n=1-t;return 3*n*n*t*e}function dS(t,e){return 3*(1-t)*t*t*e}function fS(t,e){return t*t*t*e}function Qo(t,e,n,i,r){return cS(t,e)+uS(t,n)+dS(t,i)+fS(t,r)}class hS extends Ji{constructor(e=new Xe,n=new Xe,i=new Xe,r=new Xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Xe){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Qo(e,r.x,s.x,o.x,a.x),Qo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pS extends Ji{constructor(e=new k,n=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Qo(e,r.x,s.x,o.x,a.x),Qo(e,r.y,s.y,o.y,a.y),Qo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mS extends Ji{constructor(e=new Xe,n=new Xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Xe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Xe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gS extends Ji{constructor(e=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new k){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vS extends Ji{constructor(e=new Xe,n=new Xe,i=new Xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Xe){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Zo(e,r.x,s.x,o.x),Zo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class a_ extends Ji{constructor(e=new k,n=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Zo(e,r.x,s.x,o.x),Zo(e,r.y,s.y,o.y),Zo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _S extends Ji{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Xe){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(km(a,l.x,c.x,f.x,d.x),km(a,l.y,c.y,f.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Xe().fromArray(r))}return this}}var xS=Object.freeze({__proto__:null,ArcCurve:sS,CatmullRomCurve3:kf,CubicBezierCurve:hS,CubicBezierCurve3:pS,EllipseCurve:o_,LineCurve:mS,LineCurve3:gS,QuadraticBezierCurve:vS,QuadraticBezierCurve3:a_,SplineCurve:_S});class es extends dn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,p=[],x=[],S=[],v=[];for(let u=0;u<f;u++){const m=u*h-o;for(let g=0;g<c;g++){const _=g*d-s;x.push(_,-m,0),S.push(0,0,1),v.push(g/a),v.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const g=m+c*u,_=m+c*(u+1),C=m+1+c*(u+1),b=m+1+c*u;p.push(g,_,b),p.push(_,C,b)}this.setIndex(p),this.setAttribute("position",new wt(x,3)),this.setAttribute("normal",new wt(S,3)),this.setAttribute("uv",new wt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.widthSegments,e.heightSegments)}}class gr extends dn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new k,h=new k,p=[],x=[],S=[],v=[];for(let u=0;u<=i;u++){const m=[],g=u/i;let _=0;u===0&&o===0?_=.5/n:u===i&&l===Math.PI&&(_=-.5/n);for(let C=0;C<=n;C++){const b=C/n;d.x=-e*Math.cos(r+b*s)*Math.sin(o+g*a),d.y=e*Math.cos(o+g*a),d.z=e*Math.sin(r+b*s)*Math.sin(o+g*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),v.push(b+_,1-g),m.push(c++)}f.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const g=f[u][m+1],_=f[u][m],C=f[u+1][m],b=f[u+1][m+1];(u!==0||o>0)&&p.push(g,_,b),(u!==i-1||l<Math.PI)&&p.push(_,C,b)}this.setIndex(p),this.setAttribute("position",new wt(x,3)),this.setAttribute("normal",new wt(S,3)),this.setAttribute("uv",new wt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kn extends dn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new k,d=new k,h=new k;for(let p=0;p<=i;p++)for(let x=0;x<=r;x++){const S=x/r*s,v=p/i*Math.PI*2;d.x=(e+n*Math.cos(v))*Math.cos(S),d.y=(e+n*Math.cos(v))*Math.sin(S),d.z=n*Math.sin(v),a.push(d.x,d.y,d.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(x/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let x=1;x<=r;x++){const S=(r+1)*p+x-1,v=(r+1)*(p-1)+x-1,u=(r+1)*(p-1)+x,m=(r+1)*p+x;o.push(S,v,m),o.push(v,u,m)}this.setIndex(o),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ec extends dn{constructor(e=new a_(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new k,l=new k,c=new Xe;let f=new k;const d=[],h=[],p=[],x=[];S(),this.setIndex(x),this.setAttribute("position",new wt(d,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(p,2));function S(){for(let g=0;g<n;g++)v(g);v(s===!1?n:0),m(),u()}function v(g){f=e.getPointAt(g/n,f);const _=o.normals[g],C=o.binormals[g];for(let b=0;b<=r;b++){const R=b/r*Math.PI*2,L=Math.sin(R),y=-Math.cos(R);l.x=y*_.x+L*C.x,l.y=y*_.y+L*C.y,l.z=y*_.z+L*C.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=f.x+i*l.x,a.y=f.y+i*l.y,a.z=f.z+i*l.z,d.push(a.x,a.y,a.z)}}function u(){for(let g=1;g<=n;g++)for(let _=1;_<=r;_++){const C=(r+1)*(g-1)+(_-1),b=(r+1)*g+(_-1),R=(r+1)*g+_,L=(r+1)*(g-1)+_;x.push(C,b,L),x.push(b,R,L)}}function m(){for(let g=0;g<=n;g++)for(let _=0;_<=r;_++)c.x=g/n,c.y=_/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ec(new xS[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ut extends po{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yv,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yS extends po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SS extends po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $h extends rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class MS extends $h{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const ju=new Ot,zm=new k,Bm=new k;class l_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jh,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;zm.setFromMatrixPosition(e.matrixWorld),n.position.copy(zm),Bm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Bm),n.updateMatrixWorld(),ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hm=new Ot,Io=new k,Yu=new k;class ES extends l_{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Io.setFromMatrixPosition(e.matrixWorld),i.position.copy(Io),Yu.copy(i.position),Yu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Yu),i.updateMatrixWorld(),r.makeTranslation(-Io.x,-Io.y,-Io.z),Hm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hm,i.coordinateSystem,i.reversedDepth)}}class wl extends $h{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ES}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class c_ extends t_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class wS extends l_{constructor(){super(new c_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vm extends $h{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new wS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class TS extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Gm=new Ot;class AS{constructor(e,n,i=0,r=1/0){this.ray=new Gh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Wh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Gm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gm),this}intersectObject(e,n=!0,i=[]){return zf(e,this,i,n),i.sort(Wm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)zf(e[r],this,i,n);return i.sort(Wm),i}}function Wm(t,e){return t.distance-e.distance}function zf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)zf(s[o],e,n,!0)}}function Xm(t,e,n,i){const r=CS(i);switch(n){case Gv:return t*e;case Xv:return t*e/r.components*r.byteLength;case zh:return t*e/r.components*r.byteLength;case jv:return t*e*2/r.components*r.byteLength;case Bh:return t*e*2/r.components*r.byteLength;case Wv:return t*e*3/r.components*r.byteLength;case hi:return t*e*4/r.components*r.byteLength;case Hh:return t*e*4/r.components*r.byteLength;case Hl:case Vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uf:case ff:return Math.max(t,16)*Math.max(e,8)/4;case cf:case df:return Math.max(t,8)*Math.max(e,8)/2;case hf:case pf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case mf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case _f:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case xf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case yf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case wf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Af:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Cf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case bf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Rf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Pf:case Lf:case Df:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Nf:case If:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Uf:case Ff:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function CS(t){switch(t){case Pi:case zv:return{byteLength:1,components:1};case va:case Bv:case ba:return{byteLength:2,components:1};case Oh:case kh:return{byteLength:2,components:4};case os:case Fh:case Gi:return{byteLength:4,components:1};case Hv:case Vv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function u_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function bS(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<d.length;p++){const x=d[h],S=d[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++h,d[h]=S)}d.length=h+1;for(let p=0,x=d.length;p<x;p++){const S=d[p];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var RS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PS=`#ifdef USE_ALPHAHASH
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
#endif`,LS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,US=`#ifdef USE_AOMAP
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
#endif`,FS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OS=`#ifdef USE_BATCHING
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
#endif`,kS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VS=`#ifdef USE_IRIDESCENCE
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
#endif`,GS=`#ifdef USE_BUMPMAP
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
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ZS=`#define PI 3.141592653589793
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
} // validated`,QS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eM=`vec3 transformedNormal = objectNormal;
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
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sM="gl_FragColor = linearToOutputTexel( gl_FragColor );",oM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aM=`#ifdef USE_ENVMAP
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
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cM=`#ifdef USE_ENVMAP
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
#endif`,uM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gM=`#ifdef USE_GRADIENTMAP
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
}`,vM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yM=`uniform bool receiveShadow;
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
#endif`,SM=`#ifdef USE_ENVMAP
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
#endif`,MM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AM=`PhysicalMaterial material;
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
#endif`,CM=`struct PhysicalMaterial {
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
}`,bM=`
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
#endif`,RM=`#if defined( RE_IndirectDiffuse )
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
#endif`,PM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kM=`#if defined( USE_POINTS_UV )
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
#endif`,zM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WM=`#ifdef USE_MORPHTARGETS
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
#endif`,XM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,YM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JM=`#ifdef USE_NORMALMAP
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
#endif`,ZM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hE=`float getShadowMask() {
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
}`,pE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mE=`#ifdef USE_SKINNING
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
#endif`,gE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
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
#endif`,_E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ME=`#ifdef USE_TRANSMISSION
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
#endif`,EE=`#ifdef USE_TRANSMISSION
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
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RE=`uniform sampler2D t2D;
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
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`#include <common>
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
}`,UE=`#if DEPTH_PACKING == 3200
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
}`,FE=`#define DISTANCE
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
}`,OE=`#define DISTANCE
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
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`uniform float scale;
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
}`,HE=`uniform vec3 diffuse;
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
}`,VE=`#include <common>
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
}`,GE=`uniform vec3 diffuse;
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
}`,WE=`#define LAMBERT
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
}`,XE=`#define LAMBERT
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
}`,jE=`#define MATCAP
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
}`,YE=`#define MATCAP
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
}`,qE=`#define NORMAL
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
}`,$E=`#define NORMAL
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
}`,KE=`#define PHONG
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
}`,JE=`#define PHONG
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
}`,ZE=`#define STANDARD
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
}`,QE=`#define STANDARD
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
}`,ew=`#define TOON
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
}`,tw=`#define TOON
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
}`,nw=`uniform float size;
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
}`,iw=`uniform vec3 diffuse;
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
}`,rw=`#include <common>
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
}`,sw=`uniform vec3 color;
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
}`,ow=`uniform float rotation;
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
}`,aw=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:RS,alphahash_pars_fragment:PS,alphamap_fragment:LS,alphamap_pars_fragment:DS,alphatest_fragment:NS,alphatest_pars_fragment:IS,aomap_fragment:US,aomap_pars_fragment:FS,batching_pars_vertex:OS,batching_vertex:kS,begin_vertex:zS,beginnormal_vertex:BS,bsdfs:HS,iridescence_fragment:VS,bumpmap_pars_fragment:GS,clipping_planes_fragment:WS,clipping_planes_pars_fragment:XS,clipping_planes_pars_vertex:jS,clipping_planes_vertex:YS,color_fragment:qS,color_pars_fragment:$S,color_pars_vertex:KS,color_vertex:JS,common:ZS,cube_uv_reflection_fragment:QS,defaultnormal_vertex:eM,displacementmap_pars_vertex:tM,displacementmap_vertex:nM,emissivemap_fragment:iM,emissivemap_pars_fragment:rM,colorspace_fragment:sM,colorspace_pars_fragment:oM,envmap_fragment:aM,envmap_common_pars_fragment:lM,envmap_pars_fragment:cM,envmap_pars_vertex:uM,envmap_physical_pars_fragment:SM,envmap_vertex:dM,fog_vertex:fM,fog_pars_vertex:hM,fog_fragment:pM,fog_pars_fragment:mM,gradientmap_pars_fragment:gM,lightmap_pars_fragment:vM,lights_lambert_fragment:_M,lights_lambert_pars_fragment:xM,lights_pars_begin:yM,lights_toon_fragment:MM,lights_toon_pars_fragment:EM,lights_phong_fragment:wM,lights_phong_pars_fragment:TM,lights_physical_fragment:AM,lights_physical_pars_fragment:CM,lights_fragment_begin:bM,lights_fragment_maps:RM,lights_fragment_end:PM,logdepthbuf_fragment:LM,logdepthbuf_pars_fragment:DM,logdepthbuf_pars_vertex:NM,logdepthbuf_vertex:IM,map_fragment:UM,map_pars_fragment:FM,map_particle_fragment:OM,map_particle_pars_fragment:kM,metalnessmap_fragment:zM,metalnessmap_pars_fragment:BM,morphinstance_vertex:HM,morphcolor_vertex:VM,morphnormal_vertex:GM,morphtarget_pars_vertex:WM,morphtarget_vertex:XM,normal_fragment_begin:jM,normal_fragment_maps:YM,normal_pars_fragment:qM,normal_pars_vertex:$M,normal_vertex:KM,normalmap_pars_fragment:JM,clearcoat_normal_fragment_begin:ZM,clearcoat_normal_fragment_maps:QM,clearcoat_pars_fragment:eE,iridescence_pars_fragment:tE,opaque_fragment:nE,packing:iE,premultiplied_alpha_fragment:rE,project_vertex:sE,dithering_fragment:oE,dithering_pars_fragment:aE,roughnessmap_fragment:lE,roughnessmap_pars_fragment:cE,shadowmap_pars_fragment:uE,shadowmap_pars_vertex:dE,shadowmap_vertex:fE,shadowmask_pars_fragment:hE,skinbase_vertex:pE,skinning_pars_vertex:mE,skinning_vertex:gE,skinnormal_vertex:vE,specularmap_fragment:_E,specularmap_pars_fragment:xE,tonemapping_fragment:yE,tonemapping_pars_fragment:SE,transmission_fragment:ME,transmission_pars_fragment:EE,uv_pars_fragment:wE,uv_pars_vertex:TE,uv_vertex:AE,worldpos_vertex:CE,background_vert:bE,background_frag:RE,backgroundCube_vert:PE,backgroundCube_frag:LE,cube_vert:DE,cube_frag:NE,depth_vert:IE,depth_frag:UE,distanceRGBA_vert:FE,distanceRGBA_frag:OE,equirect_vert:kE,equirect_frag:zE,linedashed_vert:BE,linedashed_frag:HE,meshbasic_vert:VE,meshbasic_frag:GE,meshlambert_vert:WE,meshlambert_frag:XE,meshmatcap_vert:jE,meshmatcap_frag:YE,meshnormal_vert:qE,meshnormal_frag:$E,meshphong_vert:KE,meshphong_frag:JE,meshphysical_vert:ZE,meshphysical_frag:QE,meshtoon_vert:ew,meshtoon_frag:tw,points_vert:nw,points_frag:iw,shadow_vert:rw,shadow_frag:sw,sprite_vert:ow,sprite_frag:aw},be={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Mi={basic:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new mt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:yn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:yn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new mt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:yn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:yn([be.points,be.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:yn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:yn([be.common,be.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:yn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:yn([be.sprite,be.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:yn([be.common,be.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:yn([be.lights,be.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Mi.physical={uniforms:yn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Tl={r:0,b:0,g:0},zr=new Li,lw=new Ot;function cw(t,e,n,i,r,s,o){const a=new mt(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function x(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function S(g){let _=!1;const C=x(g);C===null?u(a,l):C&&C.isColor&&(u(C,1),_=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(g,_){const C=x(_);C&&(C.isCubeTexture||C.mapping===Bc)?(f===void 0&&(f=new Ae(new Mn(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:lo(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),zr.copy(_.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(lw.makeRotationFromEuler(zr)),f.material.toneMapped=St.getTransfer(C.colorSpace)!==Rt,(d!==C||h!==C.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=C,h=C.version,p=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ae(new es(2,2),new Pr({name:"BackgroundMaterial",uniforms:lo(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=St.getTransfer(C.colorSpace)!==Rt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||h!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=C,h=C.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,_){g.getRGB(Tl,e_(t)),i.buffers.color.setClear(Tl.r,Tl.g,Tl.b,_,o)}function m(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(a,l)},render:S,addToRenderList:v,dispose:m}}function uw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,N,V,Y,ee){let q=!1;const j=d(Y,V,N);s!==j&&(s=j,c(s.object)),q=p(M,Y,V,ee),q&&x(M,Y,V,ee),ee!==null&&e.update(ee,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(M,N,V,Y),ee!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function f(M){return t.deleteVertexArray(M)}function d(M,N,V){const Y=V.wireframe===!0;let ee=i[M.id];ee===void 0&&(ee={},i[M.id]=ee);let q=ee[N.id];q===void 0&&(q={},ee[N.id]=q);let j=q[Y];return j===void 0&&(j=h(l()),q[Y]=j),j}function h(M){const N=[],V=[],Y=[];for(let ee=0;ee<n;ee++)N[ee]=0,V[ee]=0,Y[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:Y,object:M,attributes:{},index:null}}function p(M,N,V,Y){const ee=s.attributes,q=N.attributes;let j=0;const G=V.getAttributes();for(const U in G)if(G[U].location>=0){const ae=ee[U];let xe=q[U];if(xe===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),ae===void 0||ae.attribute!==xe||xe&&ae.data!==xe.data)return!0;j++}return s.attributesNum!==j||s.index!==Y}function x(M,N,V,Y){const ee={},q=N.attributes;let j=0;const G=V.getAttributes();for(const U in G)if(G[U].location>=0){let ae=q[U];ae===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const xe={};xe.attribute=ae,ae&&ae.data&&(xe.data=ae.data),ee[U]=xe,j++}s.attributes=ee,s.attributesNum=j,s.index=Y}function S(){const M=s.newAttributes;for(let N=0,V=M.length;N<V;N++)M[N]=0}function v(M){u(M,0)}function u(M,N){const V=s.newAttributes,Y=s.enabledAttributes,ee=s.attributeDivisors;V[M]=1,Y[M]===0&&(t.enableVertexAttribArray(M),Y[M]=1),ee[M]!==N&&(t.vertexAttribDivisor(M,N),ee[M]=N)}function m(){const M=s.newAttributes,N=s.enabledAttributes;for(let V=0,Y=N.length;V<Y;V++)N[V]!==M[V]&&(t.disableVertexAttribArray(V),N[V]=0)}function g(M,N,V,Y,ee,q,j){j===!0?t.vertexAttribIPointer(M,N,V,ee,q):t.vertexAttribPointer(M,N,V,Y,ee,q)}function _(M,N,V,Y){S();const ee=Y.attributes,q=V.getAttributes(),j=N.defaultAttributeValues;for(const G in q){const U=q[G];if(U.location>=0){let te=ee[G];if(te===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){const ae=te.normalized,xe=te.itemSize,ke=e.get(te);if(ke===void 0)continue;const it=ke.buffer,et=ke.type,ye=ke.bytesPerElement,ne=et===t.INT||et===t.UNSIGNED_INT||te.gpuType===Fh;if(te.isInterleavedBufferAttribute){const oe=te.data,Oe=oe.stride,qe=te.offset;if(oe.isInstancedInterleavedBuffer){for(let Be=0;Be<U.locationSize;Be++)u(U.location+Be,oe.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Be=0;Be<U.locationSize;Be++)v(U.location+Be);t.bindBuffer(t.ARRAY_BUFFER,it);for(let Be=0;Be<U.locationSize;Be++)g(U.location+Be,xe/U.locationSize,et,ae,Oe*ye,(qe+xe/U.locationSize*Be)*ye,ne)}else{if(te.isInstancedBufferAttribute){for(let oe=0;oe<U.locationSize;oe++)u(U.location+oe,te.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let oe=0;oe<U.locationSize;oe++)v(U.location+oe);t.bindBuffer(t.ARRAY_BUFFER,it);for(let oe=0;oe<U.locationSize;oe++)g(U.location+oe,xe/U.locationSize,et,ae,xe*ye,xe/U.locationSize*oe*ye,ne)}}else if(j!==void 0){const ae=j[G];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(U.location,ae);break;case 3:t.vertexAttrib3fv(U.location,ae);break;case 4:t.vertexAttrib4fv(U.location,ae);break;default:t.vertexAttrib1fv(U.location,ae)}}}}m()}function C(){L();for(const M in i){const N=i[M];for(const V in N){const Y=N[V];for(const ee in Y)f(Y[ee].object),delete Y[ee];delete N[V]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;const N=i[M.id];for(const V in N){const Y=N[V];for(const ee in Y)f(Y[ee].object),delete Y[ee];delete N[V]}delete i[M.id]}function R(M){for(const N in i){const V=i[N];if(V[M.id]===void 0)continue;const Y=V[M.id];for(const ee in Y)f(Y[ee].object),delete Y[ee];delete V[M.id]}}function L(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:v,disableUnusedAttributes:m}}function dw(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=f[x];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],f[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let x=0;for(let S=0;S<d;S++)x+=f[S]*h[S];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==hi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Pi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Gi&&!L)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:v,maxAttributes:u,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:C,maxSamples:b}}function hw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Gr,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,S=d.clipIntersection,v=d.clipShadows,u=t.get(d);if(!r||x===null||x.length===0||s&&!v)s?f(null):c();else{const m=s?0:i,g=m*4;let _=u.clippingState||null;l.value=_,_=f(x,h,g,p);for(let C=0;C!==g;++C)_[C]=n[C];u.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,x){const S=d!==null?d.length:0;let v=null;if(S!==0){if(v=l.value,x!==!0||v===null){const u=p+S*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<u)&&(v=new Float32Array(u));for(let g=0,_=p;g!==S;++g,_+=4)o.copy(d[g]).applyMatrix4(m,a),o.normal.toArray(v,_),v[_+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,v}}function pw(t){let e=new WeakMap;function n(o,a){return a===of?o.mapping=so:a===af&&(o.mapping=oo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===of||a===af)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new J1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Hs=4,jm=[.125,.215,.35,.446,.526,.582],jr=20,qu=new c_,Ym=new mt;let $u=null,Ku=0,Ju=0,Zu=!1;const Wr=(1+Math.sqrt(5))/2,bs=1/Wr,qm=[new k(-Wr,bs,0),new k(Wr,bs,0),new k(-bs,0,Wr),new k(bs,0,Wr),new k(0,Wr,-bs),new k(0,Wr,bs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],mw=new k;class $m{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=mw}=s;$u=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($u,Ku,Ju),this._renderer.xr.enabled=Zu,e.scissorTest=!1,Al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===so||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$u=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:ba,format:hi,colorSpace:ao,depthBuffer:!1},r=Km(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gw(s)),this._blurMaterial=vw(s,e,n)}return r}_compileMaterial(e){const n=new Ae(this._lodPlanes[0],e);this._renderer.compile(n,qu)}_sceneToCubeUV(e,n,i,r,s){const l=new Hn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Ym),d.toneMapping=Ar,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const S=new Vc({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),v=new Ae(new Mn,S);let u=!1;const m=e.background;m?m.isColor&&(S.color.copy(m),e.background=null,u=!0):(S.color.copy(Ym),u=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(l.up.set(0,c[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[g],s.y,s.z)):_===1?(l.up.set(0,0,c[g]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[g],s.z)):(l.up.set(0,c[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[g]));const C=this._cubeSize;Al(r,_*C,g>2?C:0,C,C),d.setRenderTarget(r),u&&d.render(v,l),d.render(e,l)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===so||e.mapping===oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Al(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,qu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qm[(r-s-1)%qm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Ae(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*jr-1),S=s/x,v=isFinite(s)?1+Math.floor(f*S):jr;v>jr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${jr}`);const u=[];let m=0;for(let R=0;R<jr;++R){const L=R/S,y=Math.exp(-L*L/2);u.push(y),R===0?m+=y:R<v&&(m+=2*y)}for(let R=0;R<u.length;R++)u[R]=u[R]/m;h.envMap.value=e.texture,h.samples.value=v,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-i;const _=this._sizeLods[r],C=3*_*(r>g-Hs?r-g+Hs:0),b=4*(this._cubeSize-_);Al(n,C,b,3*_,2*_),l.setRenderTarget(n),l.render(d,qu)}}function gw(t){const e=[],n=[],i=[];let r=t;const s=t-Hs+1+jm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Hs?l=jm[o-t+Hs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,x=6,S=3,v=2,u=1,m=new Float32Array(S*x*p),g=new Float32Array(v*x*p),_=new Float32Array(u*x*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,L=b>2?0:-1,y=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];m.set(y,S*x*b),g.set(h,v*x*b);const M=[b,b,b,b,b,b];_.set(M,u*x*b)}const C=new dn;C.setAttribute("position",new Ri(m,S)),C.setAttribute("uv",new Ri(g,v)),C.setAttribute("faceIndex",new Ri(_,u)),e.push(C),r>Hs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Km(t,e,n){const i=new as(t,e,n);return i.texture.mapping=Bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Al(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function vw(t,e,n){const i=new Float32Array(jr),r=new k(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Jm(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Zm(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Kh(){return`

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
	`}function _w(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===of||l===af,f=l===so||l===oo;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new $m(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new $m(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function xw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Sa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yw(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,x=d.attributes.position;let S=0;if(p!==null){const m=p.array;S=p.version;for(let g=0,_=m.length;g<_;g+=3){const C=m[g+0],b=m[g+1],R=m[g+2];h.push(C,b,b,R,R,C)}}else if(x!==void 0){const m=x.array;S=x.version;for(let g=0,_=m.length/3-1;g<_;g+=3){const C=g+0,b=g+1,R=g+2;h.push(C,b,b,R,R,C)}}else return;const v=new($v(h)?Qv:Zv)(h,1);v.version=S;const u=s.get(d);u&&e.remove(u),s.set(d,v)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function Sw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,h*o,x),n.update(p,i,x))}function f(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,x);let v=0;for(let u=0;u<x;u++)v+=p[u];n.update(v,i,1)}function d(h,p,x,S){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],S[u]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,S,0,x);let u=0;for(let m=0;m<x;m++)u+=p[m]*S[m];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Mw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ew(t,e,n){const i=new WeakMap,r=new Pt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let _=0;x===!0&&(_=1),S===!0&&(_=2),v===!0&&(_=3);let C=a.attributes.position.count*_,b=1;C>e.maxTextureSize&&(b=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*b*4*d),L=new Kv(R,C,b,d);L.type=Gi,L.needsUpdate=!0;const y=_*4;for(let N=0;N<d;N++){const V=u[N],Y=m[N],ee=g[N],q=C*b*4*N;for(let j=0;j<V.count;j++){const G=j*y;x===!0&&(r.fromBufferAttribute(V,j),R[q+G+0]=r.x,R[q+G+1]=r.y,R[q+G+2]=r.z,R[q+G+3]=0),S===!0&&(r.fromBufferAttribute(Y,j),R[q+G+4]=r.x,R[q+G+5]=r.y,R[q+G+6]=r.z,R[q+G+7]=0),v===!0&&(r.fromBufferAttribute(ee,j),R[q+G+8]=r.x,R[q+G+9]=r.y,R[q+G+10]=r.z,R[q+G+11]=ee.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new Xe(C,b)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let v=0;v<c.length;v++)x+=c[v];const S=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function ww(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const d_=new wn,Qm=new r_(1,1),f_=new Kv,h_=new I1,p_=new n_,e0=[],t0=[],n0=new Float32Array(16),i0=new Float32Array(9),r0=new Float32Array(4);function mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=e0[r];if(s===void 0&&(s=new Float32Array(r),e0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gc(t,e){let n=t0[e];n===void 0&&(n=new Int32Array(e),t0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Tw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2fv(this.addr,e),Qt(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;t.uniform3fv(this.addr,e),Qt(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4fv(this.addr,e),Qt(n,e)}}function Rw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,i))return;r0.set(i),t.uniformMatrix2fv(this.addr,!1,r0),Qt(n,i)}}function Pw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,i))return;i0.set(i),t.uniformMatrix3fv(this.addr,!1,i0),Qt(n,i)}}function Lw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,i))return;n0.set(i),t.uniformMatrix4fv(this.addr,!1,n0),Qt(n,i)}}function Dw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2iv(this.addr,e),Qt(n,e)}}function Iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3iv(this.addr,e),Qt(n,e)}}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4iv(this.addr,e),Qt(n,e)}}function Fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2uiv(this.addr,e),Qt(n,e)}}function kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3uiv(this.addr,e),Qt(n,e)}}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4uiv(this.addr,e),Qt(n,e)}}function Bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Qm.compareFunction=qv,s=Qm):s=d_,n.setTexture2D(e||s,r)}function Hw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||h_,r)}function Vw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||p_,r)}function Gw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||f_,r)}function Ww(t){switch(t){case 5126:return Tw;case 35664:return Aw;case 35665:return Cw;case 35666:return bw;case 35674:return Rw;case 35675:return Pw;case 35676:return Lw;case 5124:case 35670:return Dw;case 35667:case 35671:return Nw;case 35668:case 35672:return Iw;case 35669:case 35673:return Uw;case 5125:return Fw;case 36294:return Ow;case 36295:return kw;case 36296:return zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return Hw;case 35680:case 36300:case 36308:case 36293:return Vw;case 36289:case 36303:case 36311:case 36292:return Gw}}function Xw(t,e){t.uniform1fv(this.addr,e)}function jw(t,e){const n=mo(e,this.size,2);t.uniform2fv(this.addr,n)}function Yw(t,e){const n=mo(e,this.size,3);t.uniform3fv(this.addr,n)}function qw(t,e){const n=mo(e,this.size,4);t.uniform4fv(this.addr,n)}function $w(t,e){const n=mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Kw(t,e){const n=mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Jw(t,e){const n=mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Zw(t,e){t.uniform1iv(this.addr,e)}function Qw(t,e){t.uniform2iv(this.addr,e)}function e2(t,e){t.uniform3iv(this.addr,e)}function t2(t,e){t.uniform4iv(this.addr,e)}function n2(t,e){t.uniform1uiv(this.addr,e)}function i2(t,e){t.uniform2uiv(this.addr,e)}function r2(t,e){t.uniform3uiv(this.addr,e)}function s2(t,e){t.uniform4uiv(this.addr,e)}function o2(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||d_,s[o])}function a2(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||h_,s[o])}function l2(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||p_,s[o])}function c2(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||f_,s[o])}function u2(t){switch(t){case 5126:return Xw;case 35664:return jw;case 35665:return Yw;case 35666:return qw;case 35674:return $w;case 35675:return Kw;case 35676:return Jw;case 5124:case 35670:return Zw;case 35667:case 35671:return Qw;case 35668:case 35672:return e2;case 35669:case 35673:return t2;case 5125:return n2;case 36294:return i2;case 36295:return r2;case 36296:return s2;case 35678:case 36198:case 36298:case 36306:case 35682:return o2;case 35679:case 36299:case 36307:return a2;case 35680:case 36300:case 36308:case 36293:return l2;case 36289:case 36303:case 36311:case 36292:return c2}}class d2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Ww(n.type)}}class f2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=u2(n.type)}}class h2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Qu=/(\w+)(\])?(\[|\.)?/g;function s0(t,e){t.seq.push(e),t.map[e.id]=e}function p2(t,e,n){const i=t.name,r=i.length;for(Qu.lastIndex=0;;){const s=Qu.exec(i),o=Qu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){s0(n,c===void 0?new d2(a,t,e):new f2(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new h2(a),s0(n,d)),n=d}}}class Xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);p2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function o0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const m2=37297;let g2=0;function v2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const a0=new st;function _2(t){St._getMatrix(a0,St.workingColorSpace,t);const e=`mat3( ${a0.elements.map(n=>n.toFixed(4))} )`;switch(St.getTransfer(t)){case _c:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function l0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+v2(t.getShaderSource(e),a)}else return s}function x2(t,e){const n=_2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function y2(t,e){let n;switch(e){case c1:n="Linear";break;case u1:n="Reinhard";break;case d1:n="Cineon";break;case Ov:n="ACESFilmic";break;case h1:n="AgX";break;case p1:n="Neutral";break;case f1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cl=new k;function S2(){St.getLuminanceCoefficients(Cl);const t=Cl.x.toFixed(4),e=Cl.y.toFixed(4),n=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function E2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function w2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Vo(t){return t!==""}function c0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(t){return t.replace(T2,C2)}const A2=new Map;function C2(t,e){let n=at[e];if(n===void 0){const i=A2.get(e);if(i!==void 0)n=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bf(n)}const b2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d0(t){return t.replace(b2,R2)}function R2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function f0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function P2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Iv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Uv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function L2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case so:case oo:e="ENVMAP_TYPE_CUBE";break;case Bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function N2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fv:e="ENVMAP_BLENDING_MULTIPLY";break;case a1:e="ENVMAP_BLENDING_MIX";break;case l1:e="ENVMAP_BLENDING_ADD";break}return e}function I2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function U2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=P2(n),c=L2(n),f=D2(n),d=N2(n),h=I2(n),p=M2(n),x=E2(s),S=r.createProgram();let v,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vo).join(`
`),v.length>0&&(v+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vo).join(`
`),u.length>0&&(u+=`
`)):(v=[f0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),u=[f0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ar?"#define TONE_MAPPING":"",n.toneMapping!==Ar?at.tonemapping_pars_fragment:"",n.toneMapping!==Ar?y2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,x2("linearToOutputTexel",n.outputColorSpace),S2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),o=Bf(o),o=c0(o,n),o=u0(o,n),a=Bf(a),a=c0(a,n),a=u0(a,n),o=d0(o),a=d0(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,u=["#define varying in",n.glslVersion===_m?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=m+v+o,_=m+u+a,C=o0(r,r.VERTEX_SHADER,g),b=o0(r,r.FRAGMENT_SHADER,_);r.attachShader(S,C),r.attachShader(S,b),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(N){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(S)||"",Y=r.getShaderInfoLog(C)||"",ee=r.getShaderInfoLog(b)||"",q=V.trim(),j=Y.trim(),G=ee.trim();let U=!0,te=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,C,b);else{const ae=l0(r,C,"vertex"),xe=l0(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+q+`
`+ae+`
`+xe)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(j===""||G==="")&&(te=!1);te&&(N.diagnostics={runnable:U,programLog:q,vertexShader:{log:j,prefix:v},fragmentShader:{log:G,prefix:u}})}r.deleteShader(C),r.deleteShader(b),L=new Xl(r,S),y=w2(r,S)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,m2)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=g2++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=b,this}let F2=0;class O2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new k2(e),n.set(e,i)),i}}class k2{constructor(e){this.id=F2++,this.code=e,this.usedTimes=0}}function z2(t,e,n,i,r,s,o){const a=new Wh,l=new O2,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(y){return c.add(y),y===0?"uv":`uv${y}`}function v(y,M,N,V,Y){const ee=V.fog,q=Y.geometry,j=y.isMeshStandardMaterial?V.environment:null,G=(y.isMeshStandardMaterial?n:e).get(y.envMap||j),U=G&&G.mapping===Bc?G.image.height:null,te=x[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xe=ae!==void 0?ae.length:0;let ke=0;q.morphAttributes.position!==void 0&&(ke=1),q.morphAttributes.normal!==void 0&&(ke=2),q.morphAttributes.color!==void 0&&(ke=3);let it,et,ye,ne;if(te){const gt=Mi[te];it=gt.vertexShader,et=gt.fragmentShader}else it=y.vertexShader,et=y.fragmentShader,l.update(y),ye=l.getVertexShaderID(y),ne=l.getFragmentShaderID(y);const oe=t.getRenderTarget(),Oe=t.state.buffers.depth.getReversed(),qe=Y.isInstancedMesh===!0,Be=Y.isBatchedMesh===!0,ct=!!y.map,Xt=!!y.matcap,I=!!G,lt=!!y.aoMap,Je=!!y.lightMap,je=!!y.bumpMap,F=!!y.normalMap,me=!!y.displacementMap,ie=!!y.emissiveMap,Se=!!y.metalnessMap,He=!!y.roughnessMap,Ye=y.anisotropy>0,P=y.clearcoat>0,E=y.dispersion>0,X=y.iridescence>0,Q=y.sheen>0,le=y.transmission>0,Z=Ye&&!!y.anisotropyMap,Re=P&&!!y.clearcoatMap,ve=P&&!!y.clearcoatNormalMap,Ne=P&&!!y.clearcoatRoughnessMap,ze=X&&!!y.iridescenceMap,_e=X&&!!y.iridescenceThicknessMap,Ce=Q&&!!y.sheenColorMap,Ke=Q&&!!y.sheenRoughnessMap,Ve=!!y.specularMap,Ee=!!y.specularColorMap,rt=!!y.specularIntensityMap,z=le&&!!y.transmissionMap,ue=le&&!!y.thicknessMap,Me=!!y.gradientMap,Ue=!!y.alphaMap,he=y.alphaTest>0,se=!!y.alphaHash,Ie=!!y.extensions;let tt=Ar;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(tt=t.toneMapping);const ut={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:it,fragmentShader:et,defines:y.defines,customVertexShaderID:ye,customFragmentShaderID:ne,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Be,batchingColor:Be&&Y._colorsTexture!==null,instancing:qe,instancingColor:qe&&Y.instanceColor!==null,instancingMorph:qe&&Y.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ao,alphaToCoverage:!!y.alphaToCoverage,map:ct,matcap:Xt,envMap:I,envMapMode:I&&G.mapping,envMapCubeUVHeight:U,aoMap:lt,lightMap:Je,bumpMap:je,normalMap:F,displacementMap:h&&me,emissiveMap:ie,normalMapObjectSpace:F&&y.normalMapType===_1,normalMapTangentSpace:F&&y.normalMapType===Yv,metalnessMap:Se,roughnessMap:He,anisotropy:Ye,anisotropyMap:Z,clearcoat:P,clearcoatMap:Re,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ne,dispersion:E,iridescence:X,iridescenceMap:ze,iridescenceThicknessMap:_e,sheen:Q,sheenColorMap:Ce,sheenRoughnessMap:Ke,specularMap:Ve,specularColorMap:Ee,specularIntensityMap:rt,transmission:le,transmissionMap:z,thicknessMap:ue,gradientMap:Me,opaque:y.transparent===!1&&y.blending===qs&&y.alphaToCoverage===!1,alphaMap:Ue,alphaTest:he,alphaHash:se,combine:y.combine,mapUv:ct&&S(y.map.channel),aoMapUv:lt&&S(y.aoMap.channel),lightMapUv:Je&&S(y.lightMap.channel),bumpMapUv:je&&S(y.bumpMap.channel),normalMapUv:F&&S(y.normalMap.channel),displacementMapUv:me&&S(y.displacementMap.channel),emissiveMapUv:ie&&S(y.emissiveMap.channel),metalnessMapUv:Se&&S(y.metalnessMap.channel),roughnessMapUv:He&&S(y.roughnessMap.channel),anisotropyMapUv:Z&&S(y.anisotropyMap.channel),clearcoatMapUv:Re&&S(y.clearcoatMap.channel),clearcoatNormalMapUv:ve&&S(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&S(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&S(y.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&S(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&S(y.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&S(y.sheenRoughnessMap.channel),specularMapUv:Ve&&S(y.specularMap.channel),specularColorMapUv:Ee&&S(y.specularColorMap.channel),specularIntensityMapUv:rt&&S(y.specularIntensityMap.channel),transmissionMapUv:z&&S(y.transmissionMap.channel),thicknessMapUv:ue&&S(y.thicknessMap.channel),alphaMapUv:Ue&&S(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(F||Ye),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!q.attributes.uv&&(ct||Ue),fog:!!ee,useFog:y.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Oe,skinning:Y.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,decodeVideoTexture:ct&&y.map.isVideoTexture===!0&&St.getTransfer(y.map.colorSpace)===Rt,decodeVideoTextureEmissive:ie&&y.emissiveMap.isVideoTexture===!0&&St.getTransfer(y.emissiveMap.colorSpace)===Rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wi,flipSided:y.side===In,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ie&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&y.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function u(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)M.push(N),M.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(m(M,y),g(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function m(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function g(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){const M=x[y.type];let N;if(M){const V=Mi[M];N=Y1.clone(V.uniforms)}else N=y.uniforms;return N}function C(y,M){let N;for(let V=0,Y=f.length;V<Y;V++){const ee=f[V];if(ee.cacheKey===M){N=ee,++N.usedTimes;break}}return N===void 0&&(N=new U2(t,M,y,s),f.push(N)),N}function b(y){if(--y.usedTimes===0){const M=f.indexOf(y);f[M]=f[f.length-1],f.pop(),y.destroy()}}function R(y){l.remove(y)}function L(){l.dispose()}return{getParameters:v,getProgramCacheKey:u,getUniforms:_,acquireProgram:C,releaseProgram:b,releaseShaderCache:R,programs:f,dispose:L}}function B2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function H2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function h0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function p0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,x,S,v){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:S,group:v},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=S,u.group=v),e++,u}function a(d,h,p,x,S,v){const u=o(d,h,p,x,S,v);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,h,p,x,S,v){const u=o(d,h,p,x,S,v);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||H2),i.length>1&&i.sort(h||h0),r.length>1&&r.sort(h||h0)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function V2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new p0,t.set(i,[o])):r>=s.length?(o=new p0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function G2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new mt};break;case"SpotLight":n={position:new k,direction:new k,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":n={color:new mt,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function W2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let X2=0;function j2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Y2(t){const e=new G2,n=W2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new Ot,o=new Ot;function a(c){let f=0,d=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,x=0,S=0,v=0,u=0,m=0,g=0,_=0,C=0,b=0,R=0;c.sort(j2);for(let y=0,M=c.length;y<M;y++){const N=c[y],V=N.color,Y=N.intensity,ee=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=V.r*Y,d+=V.g*Y,h+=V.b*Y;else if(N.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],Y);R++}else if(N.isDirectionalLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const G=N.shadow,U=n.get(N);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=N.shadow.matrix,m++}i.directional[p]=j,p++}else if(N.isSpotLight){const j=e.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(V).multiplyScalar(Y),j.distance=ee,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[S]=j;const G=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,G.updateMatrices(N),N.castShadow&&b++),i.spotLightMatrix[S]=G.matrix,N.castShadow){const U=n.get(N);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,i.spotShadow[S]=U,i.spotShadowMap[S]=q,_++}S++}else if(N.isRectAreaLight){const j=e.get(N);j.color.copy(V).multiplyScalar(Y),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=j,v++}else if(N.isPointLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){const G=N.shadow,U=n.get(N);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,U.shadowCameraNear=G.camera.near,U.shadowCameraFar=G.camera.far,i.pointShadow[x]=U,i.pointShadowMap[x]=q,i.pointShadowMatrix[x]=N.shadow.matrix,g++}i.point[x]=j,x++}else if(N.isHemisphereLight){const j=e.get(N);j.skyColor.copy(N.color).multiplyScalar(Y),j.groundColor.copy(N.groundColor).multiplyScalar(Y),i.hemi[u]=j,u++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==x||L.spotLength!==S||L.rectAreaLength!==v||L.hemiLength!==u||L.numDirectionalShadows!==m||L.numPointShadows!==g||L.numSpotShadows!==_||L.numSpotMaps!==C||L.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=v,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,L.directionalLength=p,L.pointLength=x,L.spotLength=S,L.rectAreaLength=v,L.hemiLength=u,L.numDirectionalShadows=m,L.numPointShadows=g,L.numSpotShadows=_,L.numSpotMaps=C,L.numLightProbes=R,i.version=X2++)}function l(c,f){let d=0,h=0,p=0,x=0,S=0;const v=f.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const g=c[u];if(g.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),d++}else if(g.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),p++}else if(g.isRectAreaLight){const _=i.rectArea[x];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),o.identity(),s.copy(g.matrixWorld),s.premultiply(v),o.extractRotation(s),_.halfWidth.set(g.width*.5,0,0),_.halfHeight.set(0,g.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),x++}else if(g.isPointLight){const _=i.point[h];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),h++}else if(g.isHemisphereLight){const _=i.hemi[S];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(v),S++}}}return{setup:a,setupView:l,state:i}}function m0(t){const e=new Y2(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function q2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new m0(t),e.set(r,[a])):s>=o.length?(a=new m0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const $2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K2=`uniform sampler2D shadow_pass;
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
}`;function J2(t,e,n){let i=new jh;const r=new Xe,s=new Xe,o=new Pt,a=new yS({depthPacking:v1}),l=new SS,c={},f=n.maxTextureSize,d={[Rr]:In,[In]:Rr,[wi]:wi},h=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:$2,fragmentShader:K2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new dn;x.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ae(x,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iv;let u=this.type;this.render=function(b,R,L){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||b.length===0)return;const y=t.getRenderTarget(),M=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Tr),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Y=u!==ki&&this.type===ki,ee=u===ki&&this.type!==ki;for(let q=0,j=b.length;q<j;q++){const G=b[q],U=G.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const te=U.getFrameExtents();if(r.multiply(te),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/te.x),r.x=s.x*te.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/te.y),r.y=s.y*te.y,U.mapSize.y=s.y)),U.map===null||Y===!0||ee===!0){const xe=this.type!==ki?{minFilter:gi,magFilter:gi}:{};U.map!==null&&U.map.dispose(),U.map=new as(r.x,r.y,xe),U.map.texture.name=G.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const ae=U.getViewportCount();for(let xe=0;xe<ae;xe++){const ke=U.getViewport(xe);o.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),V.viewport(o),U.updateMatrices(G,xe),i=U.getFrustum(),_(R,L,U.camera,G,this.type)}U.isPointLightShadow!==!0&&this.type===ki&&m(U,L),U.needsUpdate=!1}u=this.type,v.needsUpdate=!1,t.setRenderTarget(y,M,N)};function m(b,R){const L=e.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new as(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(R,null,L,h,S,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(R,null,L,p,S,null)}function g(b,R,L,y){let M=null;const N=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)M=N;else if(M=L.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const V=M.uuid,Y=R.uuid;let ee=c[V];ee===void 0&&(ee={},c[V]=ee);let q=ee[Y];q===void 0&&(q=M.clone(),ee[Y]=q,R.addEventListener("dispose",C)),M=q}if(M.visible=R.visible,M.wireframe=R.wireframe,y===ki?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=t.properties.get(M);V.light=L}return M}function _(b,R,L,y,M){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===ki)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const Y=e.update(b),ee=b.material;if(Array.isArray(ee)){const q=Y.groups;for(let j=0,G=q.length;j<G;j++){const U=q[j],te=ee[U.materialIndex];if(te&&te.visible){const ae=g(b,te,y,M);b.onBeforeShadow(t,b,R,L,Y,ae,U),t.renderBufferDirect(L,null,Y,ae,b,U),b.onAfterShadow(t,b,R,L,Y,ae,U)}}}else if(ee.visible){const q=g(b,ee,y,M);b.onBeforeShadow(t,b,R,L,Y,q,null),t.renderBufferDirect(L,null,Y,q,b,null),b.onAfterShadow(t,b,R,L,Y,q,null)}}const V=b.children;for(let Y=0,ee=V.length;Y<ee;Y++)_(V[Y],R,L,y,M)}function C(b){b.target.removeEventListener("dispose",C);for(const L in c){const y=c[L],M=b.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Z2={[Zd]:Qd,[ef]:rf,[tf]:sf,[ro]:nf,[Qd]:Zd,[rf]:ef,[sf]:tf,[nf]:ro};function Q2(t,e){function n(){let z=!1;const ue=new Pt;let Me=null;const Ue=new Pt(0,0,0,0);return{setMask:function(he){Me!==he&&!z&&(t.colorMask(he,he,he,he),Me=he)},setLocked:function(he){z=he},setClear:function(he,se,Ie,tt,ut){ut===!0&&(he*=tt,se*=tt,Ie*=tt),ue.set(he,se,Ie,tt),Ue.equals(ue)===!1&&(t.clearColor(he,se,Ie,tt),Ue.copy(ue))},reset:function(){z=!1,Me=null,Ue.set(-1,0,0,0)}}}function i(){let z=!1,ue=!1,Me=null,Ue=null,he=null;return{setReversed:function(se){if(ue!==se){const Ie=e.get("EXT_clip_control");se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ue=se;const tt=he;he=null,this.setClear(tt)}},getReversed:function(){return ue},setTest:function(se){se?oe(t.DEPTH_TEST):Oe(t.DEPTH_TEST)},setMask:function(se){Me!==se&&!z&&(t.depthMask(se),Me=se)},setFunc:function(se){if(ue&&(se=Z2[se]),Ue!==se){switch(se){case Zd:t.depthFunc(t.NEVER);break;case Qd:t.depthFunc(t.ALWAYS);break;case ef:t.depthFunc(t.LESS);break;case ro:t.depthFunc(t.LEQUAL);break;case tf:t.depthFunc(t.EQUAL);break;case nf:t.depthFunc(t.GEQUAL);break;case rf:t.depthFunc(t.GREATER);break;case sf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ue=se}},setLocked:function(se){z=se},setClear:function(se){he!==se&&(ue&&(se=1-se),t.clearDepth(se),he=se)},reset:function(){z=!1,Me=null,Ue=null,he=null,ue=!1}}}function r(){let z=!1,ue=null,Me=null,Ue=null,he=null,se=null,Ie=null,tt=null,ut=null;return{setTest:function(gt){z||(gt?oe(t.STENCIL_TEST):Oe(t.STENCIL_TEST))},setMask:function(gt){ue!==gt&&!z&&(t.stencilMask(gt),ue=gt)},setFunc:function(gt,Yn,Un){(Me!==gt||Ue!==Yn||he!==Un)&&(t.stencilFunc(gt,Yn,Un),Me=gt,Ue=Yn,he=Un)},setOp:function(gt,Yn,Un){(se!==gt||Ie!==Yn||tt!==Un)&&(t.stencilOp(gt,Yn,Un),se=gt,Ie=Yn,tt=Un)},setLocked:function(gt){z=gt},setClear:function(gt){ut!==gt&&(t.clearStencil(gt),ut=gt)},reset:function(){z=!1,ue=null,Me=null,Ue=null,he=null,se=null,Ie=null,tt=null,ut=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},d={},h=new WeakMap,p=[],x=null,S=!1,v=null,u=null,m=null,g=null,_=null,C=null,b=null,R=new mt(0,0,0),L=0,y=!1,M=null,N=null,V=null,Y=null,ee=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,G=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(U)[1]),j=G>=1):U.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),j=G>=2);let te=null,ae={};const xe=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),it=new Pt().fromArray(xe),et=new Pt().fromArray(ke);function ye(z,ue,Me,Ue){const he=new Uint8Array(4),se=t.createTexture();t.bindTexture(z,se),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<Me;Ie++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ue+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return se}const ne={};ne[t.TEXTURE_2D]=ye(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(ro),je(!1),F(fm),oe(t.CULL_FACE),lt(Tr);function oe(z){f[z]!==!0&&(t.enable(z),f[z]=!0)}function Oe(z){f[z]!==!1&&(t.disable(z),f[z]=!1)}function qe(z,ue){return d[z]!==ue?(t.bindFramebuffer(z,ue),d[z]=ue,z===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ue),z===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Be(z,ue){let Me=p,Ue=!1;if(z){Me=h.get(ue),Me===void 0&&(Me=[],h.set(ue,Me));const he=z.textures;if(Me.length!==he.length||Me[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Ie=he.length;se<Ie;se++)Me[se]=t.COLOR_ATTACHMENT0+se;Me.length=he.length,Ue=!0}}else Me[0]!==t.BACK&&(Me[0]=t.BACK,Ue=!0);Ue&&t.drawBuffers(Me)}function ct(z){return x!==z?(t.useProgram(z),x=z,!0):!1}const Xt={[Xr]:t.FUNC_ADD,[Wy]:t.FUNC_SUBTRACT,[Xy]:t.FUNC_REVERSE_SUBTRACT};Xt[jy]=t.MIN,Xt[Yy]=t.MAX;const I={[qy]:t.ZERO,[$y]:t.ONE,[Ky]:t.SRC_COLOR,[Kd]:t.SRC_ALPHA,[n1]:t.SRC_ALPHA_SATURATE,[e1]:t.DST_COLOR,[Zy]:t.DST_ALPHA,[Jy]:t.ONE_MINUS_SRC_COLOR,[Jd]:t.ONE_MINUS_SRC_ALPHA,[t1]:t.ONE_MINUS_DST_COLOR,[Qy]:t.ONE_MINUS_DST_ALPHA,[i1]:t.CONSTANT_COLOR,[r1]:t.ONE_MINUS_CONSTANT_COLOR,[s1]:t.CONSTANT_ALPHA,[o1]:t.ONE_MINUS_CONSTANT_ALPHA};function lt(z,ue,Me,Ue,he,se,Ie,tt,ut,gt){if(z===Tr){S===!0&&(Oe(t.BLEND),S=!1);return}if(S===!1&&(oe(t.BLEND),S=!0),z!==Gy){if(z!==v||gt!==y){if((u!==Xr||_!==Xr)&&(t.blendEquation(t.FUNC_ADD),u=Xr,_=Xr),gt)switch(z){case qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hm:t.blendFunc(t.ONE,t.ONE);break;case pm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case pm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}m=null,g=null,C=null,b=null,R.set(0,0,0),L=0,v=z,y=gt}return}he=he||ue,se=se||Me,Ie=Ie||Ue,(ue!==u||he!==_)&&(t.blendEquationSeparate(Xt[ue],Xt[he]),u=ue,_=he),(Me!==m||Ue!==g||se!==C||Ie!==b)&&(t.blendFuncSeparate(I[Me],I[Ue],I[se],I[Ie]),m=Me,g=Ue,C=se,b=Ie),(tt.equals(R)===!1||ut!==L)&&(t.blendColor(tt.r,tt.g,tt.b,ut),R.copy(tt),L=ut),v=z,y=!1}function Je(z,ue){z.side===wi?Oe(t.CULL_FACE):oe(t.CULL_FACE);let Me=z.side===In;ue&&(Me=!Me),je(Me),z.blending===qs&&z.transparent===!1?lt(Tr):lt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const Ue=z.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ie(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(z){M!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),M=z)}function F(z){z!==Hy?(oe(t.CULL_FACE),z!==N&&(z===fm?t.cullFace(t.BACK):z===Vy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Oe(t.CULL_FACE),N=z}function me(z){z!==V&&(j&&t.lineWidth(z),V=z)}function ie(z,ue,Me){z?(oe(t.POLYGON_OFFSET_FILL),(Y!==ue||ee!==Me)&&(t.polygonOffset(ue,Me),Y=ue,ee=Me)):Oe(t.POLYGON_OFFSET_FILL)}function Se(z){z?oe(t.SCISSOR_TEST):Oe(t.SCISSOR_TEST)}function He(z){z===void 0&&(z=t.TEXTURE0+q-1),te!==z&&(t.activeTexture(z),te=z)}function Ye(z,ue,Me){Me===void 0&&(te===null?Me=t.TEXTURE0+q-1:Me=te);let Ue=ae[Me];Ue===void 0&&(Ue={type:void 0,texture:void 0},ae[Me]=Ue),(Ue.type!==z||Ue.texture!==ue)&&(te!==Me&&(t.activeTexture(Me),te=Me),t.bindTexture(z,ue||ne[z]),Ue.type=z,Ue.texture=ue)}function P(){const z=ae[te];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{t.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function X(){try{t.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{t.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{t.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{t.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{t.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{t.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{t.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{t.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(z){it.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),it.copy(z))}function Ke(z){et.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),et.copy(z))}function Ve(z,ue){let Me=c.get(ue);Me===void 0&&(Me=new WeakMap,c.set(ue,Me));let Ue=Me.get(z);Ue===void 0&&(Ue=t.getUniformBlockIndex(ue,z.name),Me.set(z,Ue))}function Ee(z,ue){const Ue=c.get(ue).get(z);l.get(ue)!==Ue&&(t.uniformBlockBinding(ue,Ue,z.__bindingPointIndex),l.set(ue,Ue))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},te=null,ae={},d={},h=new WeakMap,p=[],x=null,S=!1,v=null,u=null,m=null,g=null,_=null,C=null,b=null,R=new mt(0,0,0),L=0,y=!1,M=null,N=null,V=null,Y=null,ee=null,it.set(0,0,t.canvas.width,t.canvas.height),et.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Oe,bindFramebuffer:qe,drawBuffers:Be,useProgram:ct,setBlending:lt,setMaterial:Je,setFlipSided:je,setCullFace:F,setLineWidth:me,setPolygonOffset:ie,setScissorTest:Se,activeTexture:He,bindTexture:Ye,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:ze,texImage3D:_e,updateUBOMapping:Ve,uniformBlockBinding:Ee,texStorage2D:ve,texStorage3D:Ne,texSubImage2D:Q,texSubImage3D:le,compressedTexSubImage2D:Z,compressedTexSubImage3D:Re,scissor:Ce,viewport:Ke,reset:rt}}function eT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,E){return p?new OffscreenCanvas(P,E):yc("canvas")}function S(P,E,X){let Q=1;const le=Ye(P);if((le.width>X||le.height>X)&&(Q=X/Math.max(le.width,le.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor(Q*le.width),Re=Math.floor(Q*le.height);d===void 0&&(d=x(Z,Re));const ve=E?x(Z,Re):d;return ve.width=Z,ve.height=Re,ve.getContext("2d").drawImage(P,0,0,Z,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Z+"x"+Re+")."),ve}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),P;return P}function v(P){return P.generateMipmaps}function u(P){t.generateMipmap(P)}function m(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function g(P,E,X,Q,le=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=E;if(E===t.RED&&(X===t.FLOAT&&(Z=t.R32F),X===t.HALF_FLOAT&&(Z=t.R16F),X===t.UNSIGNED_BYTE&&(Z=t.R8)),E===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(Z=t.R8UI),X===t.UNSIGNED_SHORT&&(Z=t.R16UI),X===t.UNSIGNED_INT&&(Z=t.R32UI),X===t.BYTE&&(Z=t.R8I),X===t.SHORT&&(Z=t.R16I),X===t.INT&&(Z=t.R32I)),E===t.RG&&(X===t.FLOAT&&(Z=t.RG32F),X===t.HALF_FLOAT&&(Z=t.RG16F),X===t.UNSIGNED_BYTE&&(Z=t.RG8)),E===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(Z=t.RG8UI),X===t.UNSIGNED_SHORT&&(Z=t.RG16UI),X===t.UNSIGNED_INT&&(Z=t.RG32UI),X===t.BYTE&&(Z=t.RG8I),X===t.SHORT&&(Z=t.RG16I),X===t.INT&&(Z=t.RG32I)),E===t.RGB_INTEGER&&(X===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),X===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),X===t.UNSIGNED_INT&&(Z=t.RGB32UI),X===t.BYTE&&(Z=t.RGB8I),X===t.SHORT&&(Z=t.RGB16I),X===t.INT&&(Z=t.RGB32I)),E===t.RGBA_INTEGER&&(X===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),X===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),X===t.UNSIGNED_INT&&(Z=t.RGBA32UI),X===t.BYTE&&(Z=t.RGBA8I),X===t.SHORT&&(Z=t.RGBA16I),X===t.INT&&(Z=t.RGBA32I)),E===t.RGB&&(X===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),X===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),E===t.RGBA){const Re=le?_c:St.getTransfer(Q);X===t.FLOAT&&(Z=t.RGBA32F),X===t.HALF_FLOAT&&(Z=t.RGBA16F),X===t.UNSIGNED_BYTE&&(Z=Re===Rt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(P,E){let X;return P?E===null||E===os||E===_a?X=t.DEPTH24_STENCIL8:E===Gi?X=t.DEPTH32F_STENCIL8:E===va&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===os||E===_a?X=t.DEPTH_COMPONENT24:E===Gi?X=t.DEPTH_COMPONENT32F:E===va&&(X=t.DEPTH_COMPONENT16),X}function C(P,E){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==gi&&P.minFilter!==Ti?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function b(P){const E=P.target;E.removeEventListener("dispose",b),L(E),E.isVideoTexture&&f.delete(E)}function R(P){const E=P.target;E.removeEventListener("dispose",R),M(E)}function L(P){const E=i.get(P);if(E.__webglInit===void 0)return;const X=P.source,Q=h.get(X);if(Q){const le=Q[E.__cacheKey];le.usedTimes--,le.usedTimes===0&&y(P),Object.keys(Q).length===0&&h.delete(X)}i.remove(P)}function y(P){const E=i.get(P);t.deleteTexture(E.__webglTexture);const X=P.source,Q=h.get(X);delete Q[E.__cacheKey],o.memory.textures--}function M(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let le=0;le<E.__webglFramebuffer[Q].length;le++)t.deleteFramebuffer(E.__webglFramebuffer[Q][le]);else t.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[Q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=P.textures;for(let Q=0,le=X.length;Q<le;Q++){const Z=i.get(X[Q]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(X[Q])}i.remove(P)}let N=0;function V(){N=0}function Y(){const P=N;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),N+=1,P}function ee(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function q(P,E){const X=i.get(P);if(P.isVideoTexture&&Se(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(X,P,E);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+E)}function j(P,E){const X=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){ne(X,P,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+E)}function G(P,E){const X=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){ne(X,P,E);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+E)}function U(P,E){const X=i.get(P);if(P.version>0&&X.__version!==P.version){oe(X,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+E)}const te={[vc]:t.REPEAT,[Kr]:t.CLAMP_TO_EDGE,[lf]:t.MIRRORED_REPEAT},ae={[gi]:t.NEAREST,[m1]:t.NEAREST_MIPMAP_NEAREST,[il]:t.NEAREST_MIPMAP_LINEAR,[Ti]:t.LINEAR,[vu]:t.LINEAR_MIPMAP_NEAREST,[Jr]:t.LINEAR_MIPMAP_LINEAR},xe={[x1]:t.NEVER,[T1]:t.ALWAYS,[y1]:t.LESS,[qv]:t.LEQUAL,[S1]:t.EQUAL,[w1]:t.GEQUAL,[M1]:t.GREATER,[E1]:t.NOTEQUAL};function ke(P,E){if(E.type===Gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ti||E.magFilter===vu||E.magFilter===il||E.magFilter===Jr||E.minFilter===Ti||E.minFilter===vu||E.minFilter===il||E.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,te[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,te[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,te[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,ae[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,ae[E.minFilter]),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===gi||E.minFilter!==il&&E.minFilter!==Jr||E.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function it(P,E){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",b));const Q=E.source;let le=h.get(Q);le===void 0&&(le={},h.set(Q,le));const Z=ee(E);if(Z!==P.__cacheKey){le[Z]===void 0&&(le[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),le[Z].usedTimes++;const Re=le[P.__cacheKey];Re!==void 0&&(le[P.__cacheKey].usedTimes--,Re.usedTimes===0&&y(E)),P.__cacheKey=Z,P.__webglTexture=le[Z].texture}return X}function et(P,E,X){return Math.floor(Math.floor(P/X)/E)}function ye(P,E,X,Q){const Z=P.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,X,Q,E.data);else{Z.sort((_e,Ce)=>_e.start-Ce.start);let Re=0;for(let _e=1;_e<Z.length;_e++){const Ce=Z[Re],Ke=Z[_e],Ve=Ce.start+Ce.count,Ee=et(Ke.start,E.width,4),rt=et(Ce.start,E.width,4);Ke.start<=Ve+1&&Ee===rt&&et(Ke.start+Ke.count-1,E.width,4)===Ee?Ce.count=Math.max(Ce.count,Ke.start+Ke.count-Ce.start):(++Re,Z[Re]=Ke)}Z.length=Re+1;const ve=t.getParameter(t.UNPACK_ROW_LENGTH),Ne=t.getParameter(t.UNPACK_SKIP_PIXELS),ze=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let _e=0,Ce=Z.length;_e<Ce;_e++){const Ke=Z[_e],Ve=Math.floor(Ke.start/4),Ee=Math.ceil(Ke.count/4),rt=Ve%E.width,z=Math.floor(Ve/E.width),ue=Ee,Me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,rt,z,ue,Me,X,Q,E.data)}P.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ve),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(t.UNPACK_SKIP_ROWS,ze)}}function ne(P,E,X){let Q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=t.TEXTURE_3D);const le=it(P,E),Z=E.source;n.bindTexture(Q,P.__webglTexture,t.TEXTURE0+X);const Re=i.get(Z);if(Z.version!==Re.__version||le===!0){n.activeTexture(t.TEXTURE0+X);const ve=St.getPrimaries(St.workingColorSpace),Ne=E.colorSpace===hr?null:St.getPrimaries(E.colorSpace),ze=E.colorSpace===hr||ve===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let _e=S(E.image,!1,r.maxTextureSize);_e=He(E,_e);const Ce=s.convert(E.format,E.colorSpace),Ke=s.convert(E.type);let Ve=g(E.internalFormat,Ce,Ke,E.colorSpace,E.isVideoTexture);ke(Q,E);let Ee;const rt=E.mipmaps,z=E.isVideoTexture!==!0,ue=Re.__version===void 0||le===!0,Me=Z.dataReady,Ue=C(E,_e);if(E.isDepthTexture)Ve=_(E.format===ya,E.type),ue&&(z?n.texStorage2D(t.TEXTURE_2D,1,Ve,_e.width,_e.height):n.texImage2D(t.TEXTURE_2D,0,Ve,_e.width,_e.height,0,Ce,Ke,null));else if(E.isDataTexture)if(rt.length>0){z&&ue&&n.texStorage2D(t.TEXTURE_2D,Ue,Ve,rt[0].width,rt[0].height);for(let he=0,se=rt.length;he<se;he++)Ee=rt[he],z?Me&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Ee.width,Ee.height,Ce,Ke,Ee.data):n.texImage2D(t.TEXTURE_2D,he,Ve,Ee.width,Ee.height,0,Ce,Ke,Ee.data);E.generateMipmaps=!1}else z?(ue&&n.texStorage2D(t.TEXTURE_2D,Ue,Ve,_e.width,_e.height),Me&&ye(E,_e,Ce,Ke)):n.texImage2D(t.TEXTURE_2D,0,Ve,_e.width,_e.height,0,Ce,Ke,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ue,Ve,rt[0].width,rt[0].height,_e.depth);for(let he=0,se=rt.length;he<se;he++)if(Ee=rt[he],E.format!==hi)if(Ce!==null)if(z){if(Me)if(E.layerUpdates.size>0){const Ie=Xm(Ee.width,Ee.height,E.format,E.type);for(const tt of E.layerUpdates){const ut=Ee.data.subarray(tt*Ie/Ee.data.BYTES_PER_ELEMENT,(tt+1)*Ie/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,tt,Ee.width,Ee.height,1,Ce,ut)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Ee.width,Ee.height,_e.depth,Ce,Ee.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,he,Ve,Ee.width,Ee.height,_e.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Ee.width,Ee.height,_e.depth,Ce,Ke,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,he,Ve,Ee.width,Ee.height,_e.depth,0,Ce,Ke,Ee.data)}else{z&&ue&&n.texStorage2D(t.TEXTURE_2D,Ue,Ve,rt[0].width,rt[0].height);for(let he=0,se=rt.length;he<se;he++)Ee=rt[he],E.format!==hi?Ce!==null?z?Me&&n.compressedTexSubImage2D(t.TEXTURE_2D,he,0,0,Ee.width,Ee.height,Ce,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,he,Ve,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Me&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Ee.width,Ee.height,Ce,Ke,Ee.data):n.texImage2D(t.TEXTURE_2D,he,Ve,Ee.width,Ee.height,0,Ce,Ke,Ee.data)}else if(E.isDataArrayTexture)if(z){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ue,Ve,_e.width,_e.height,_e.depth),Me)if(E.layerUpdates.size>0){const he=Xm(_e.width,_e.height,E.format,E.type);for(const se of E.layerUpdates){const Ie=_e.data.subarray(se*he/_e.data.BYTES_PER_ELEMENT,(se+1)*he/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,se,_e.width,_e.height,1,Ce,Ke,Ie)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Ke,_e.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ve,_e.width,_e.height,_e.depth,0,Ce,Ke,_e.data);else if(E.isData3DTexture)z?(ue&&n.texStorage3D(t.TEXTURE_3D,Ue,Ve,_e.width,_e.height,_e.depth),Me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Ke,_e.data)):n.texImage3D(t.TEXTURE_3D,0,Ve,_e.width,_e.height,_e.depth,0,Ce,Ke,_e.data);else if(E.isFramebufferTexture){if(ue)if(z)n.texStorage2D(t.TEXTURE_2D,Ue,Ve,_e.width,_e.height);else{let he=_e.width,se=_e.height;for(let Ie=0;Ie<Ue;Ie++)n.texImage2D(t.TEXTURE_2D,Ie,Ve,he,se,0,Ce,Ke,null),he>>=1,se>>=1}}else if(rt.length>0){if(z&&ue){const he=Ye(rt[0]);n.texStorage2D(t.TEXTURE_2D,Ue,Ve,he.width,he.height)}for(let he=0,se=rt.length;he<se;he++)Ee=rt[he],z?Me&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Ce,Ke,Ee):n.texImage2D(t.TEXTURE_2D,he,Ve,Ce,Ke,Ee);E.generateMipmaps=!1}else if(z){if(ue){const he=Ye(_e);n.texStorage2D(t.TEXTURE_2D,Ue,Ve,he.width,he.height)}Me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Ke,_e)}else n.texImage2D(t.TEXTURE_2D,0,Ve,Ce,Ke,_e);v(E)&&u(Q),Re.__version=Z.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function oe(P,E,X){if(E.image.length!==6)return;const Q=it(P,E),le=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+X);const Z=i.get(le);if(le.version!==Z.__version||Q===!0){n.activeTexture(t.TEXTURE0+X);const Re=St.getPrimaries(St.workingColorSpace),ve=E.colorSpace===hr?null:St.getPrimaries(E.colorSpace),Ne=E.colorSpace===hr||Re===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const ze=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,Ce=[];for(let se=0;se<6;se++)!ze&&!_e?Ce[se]=S(E.image[se],!0,r.maxCubemapSize):Ce[se]=_e?E.image[se].image:E.image[se],Ce[se]=He(E,Ce[se]);const Ke=Ce[0],Ve=s.convert(E.format,E.colorSpace),Ee=s.convert(E.type),rt=g(E.internalFormat,Ve,Ee,E.colorSpace),z=E.isVideoTexture!==!0,ue=Z.__version===void 0||Q===!0,Me=le.dataReady;let Ue=C(E,Ke);ke(t.TEXTURE_CUBE_MAP,E);let he;if(ze){z&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,rt,Ke.width,Ke.height);for(let se=0;se<6;se++){he=Ce[se].mipmaps;for(let Ie=0;Ie<he.length;Ie++){const tt=he[Ie];E.format!==hi?Ve!==null?z?Me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,tt.width,tt.height,Ve,tt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,rt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,tt.width,tt.height,Ve,Ee,tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,rt,tt.width,tt.height,0,Ve,Ee,tt.data)}}}else{if(he=E.mipmaps,z&&ue){he.length>0&&Ue++;const se=Ye(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,rt,se.width,se.height)}for(let se=0;se<6;se++)if(_e){z?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ce[se].width,Ce[se].height,Ve,Ee,Ce[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,rt,Ce[se].width,Ce[se].height,0,Ve,Ee,Ce[se].data);for(let Ie=0;Ie<he.length;Ie++){const ut=he[Ie].image[se].image;z?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,ut.width,ut.height,Ve,Ee,ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,rt,ut.width,ut.height,0,Ve,Ee,ut.data)}}else{z?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ve,Ee,Ce[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,rt,Ve,Ee,Ce[se]);for(let Ie=0;Ie<he.length;Ie++){const tt=he[Ie];z?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,Ve,Ee,tt.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,rt,Ve,Ee,tt.image[se])}}}v(E)&&u(t.TEXTURE_CUBE_MAP),Z.__version=le.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Oe(P,E,X,Q,le,Z){const Re=s.convert(X.format,X.colorSpace),ve=s.convert(X.type),Ne=g(X.internalFormat,Re,ve,X.colorSpace),ze=i.get(E),_e=i.get(X);if(_e.__renderTarget=E,!ze.__hasExternalTextures){const Ce=Math.max(1,E.width>>Z),Ke=Math.max(1,E.height>>Z);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,Z,Ne,Ce,Ke,E.depth,0,Re,ve,null):n.texImage2D(le,Z,Ne,Ce,Ke,0,Re,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),ie(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,le,_e.__webglTexture,0,me(E)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,le,_e.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(P,E,X){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer){const Q=E.depthTexture,le=Q&&Q.isDepthTexture?Q.type:null,Z=_(E.stencilBuffer,le),Re=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=me(E);ie(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,Z,E.width,E.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Z,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Z,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,P)}else{const Q=E.textures;for(let le=0;le<Q.length;le++){const Z=Q[le],Re=s.convert(Z.format,Z.colorSpace),ve=s.convert(Z.type),Ne=g(Z.internalFormat,Re,ve,Z.colorSpace),ze=me(E);X&&ie(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,Ne,E.width,E.height):ie(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ze,Ne,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Ne,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Be(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const le=Q.__webglTexture,Z=me(E);if(E.depthTexture.format===xa)ie(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(E.depthTexture.format===ya)ie(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function ct(P){const E=i.get(P),X=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const le=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",le)};Q.addEventListener("dispose",le),E.__depthDisposeCallback=le}E.__boundDepthTexture=Q}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const Q=P.texture.mipmaps;Q&&Q.length>0?Be(E.__webglFramebuffer[0],P):Be(E.__webglFramebuffer,P)}else if(X){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=t.createRenderbuffer(),qe(E.__webglDepthbuffer[Q],P,!1);else{const le=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,Z)}}else{const Q=P.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),qe(E.__webglDepthbuffer,P,!1);else{const le=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Xt(P,E,X){const Q=i.get(P);E!==void 0&&Oe(Q.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&ct(P)}function I(P){const E=P.texture,X=i.get(P),Q=i.get(E);P.addEventListener("dispose",R);const le=P.textures,Z=P.isWebGLCubeRenderTarget===!0,Re=le.length>1;if(Re||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=E.version,o.memory.textures++),Z){X.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[ve]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)X.__webglFramebuffer[ve][Ne]=t.createFramebuffer()}else X.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)X.__webglFramebuffer[ve]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Re)for(let ve=0,Ne=le.length;ve<Ne;ve++){const ze=i.get(le[ve]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&ie(P)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const Ne=le[ve];X.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[ve]);const ze=s.convert(Ne.format,Ne.colorSpace),_e=s.convert(Ne.type),Ce=g(Ne.internalFormat,ze,_e,Ne.colorSpace,P.isXRRenderTarget===!0),Ke=me(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,Ce,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,X.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),qe(X.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ke(t.TEXTURE_CUBE_MAP,E);for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)Oe(X.__webglFramebuffer[ve][Ne],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ne);else Oe(X.__webglFramebuffer[ve],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);v(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let ve=0,Ne=le.length;ve<Ne;ve++){const ze=le[ve],_e=i.get(ze);let Ce=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ce,_e.__webglTexture),ke(Ce,ze),Oe(X.__webglFramebuffer,P,ze,t.COLOR_ATTACHMENT0+ve,Ce,0),v(ze)&&u(Ce)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,Q.__webglTexture),ke(ve,E),E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)Oe(X.__webglFramebuffer[Ne],P,E,t.COLOR_ATTACHMENT0,ve,Ne);else Oe(X.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,ve,0);v(E)&&u(ve),n.unbindTexture()}P.depthBuffer&&ct(P)}function lt(P){const E=P.textures;for(let X=0,Q=E.length;X<Q;X++){const le=E[X];if(v(le)){const Z=m(P),Re=i.get(le).__webglTexture;n.bindTexture(Z,Re),u(Z),n.unbindTexture()}}}const Je=[],je=[];function F(P){if(P.samples>0){if(ie(P)===!1){const E=P.textures,X=P.width,Q=P.height;let le=t.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(P),ve=E.length>1;if(ve)for(let ze=0;ze<E.length;ze++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Ne=P.texture.mipmaps;Ne&&Ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ze=0;ze<E.length;ze++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[ze]);const _e=i.get(E[ze]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,X,Q,0,0,X,Q,le,t.NEAREST),l===!0&&(Je.length=0,je.length=0,Je.push(t.COLOR_ATTACHMENT0+ze),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Je.push(Z),je.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,je)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Je))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let ze=0;ze<E.length;ze++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,Re.__webglColorRenderbuffer[ze]);const _e=i.get(E[ze]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function me(P){return Math.min(r.maxSamples,P.samples)}function ie(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Se(P){const E=o.render.frame;f.get(P)!==E&&(f.set(P,E),P.update())}function He(P,E){const X=P.colorSpace,Q=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==ao&&X!==hr&&(St.getTransfer(X)===Rt?(Q!==hi||le!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function Ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=j,this.setTexture3D=G,this.setTextureCube=U,this.rebindTextures=Xt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=ie}function tT(t,e){function n(i,r=hr){let s;const o=St.getTransfer(r);if(i===Pi)return t.UNSIGNED_BYTE;if(i===Oh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===kh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Hv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Vv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===zv)return t.BYTE;if(i===Bv)return t.SHORT;if(i===va)return t.UNSIGNED_SHORT;if(i===Fh)return t.INT;if(i===os)return t.UNSIGNED_INT;if(i===Gi)return t.FLOAT;if(i===ba)return t.HALF_FLOAT;if(i===Gv)return t.ALPHA;if(i===Wv)return t.RGB;if(i===hi)return t.RGBA;if(i===xa)return t.DEPTH_COMPONENT;if(i===ya)return t.DEPTH_STENCIL;if(i===Xv)return t.RED;if(i===zh)return t.RED_INTEGER;if(i===jv)return t.RG;if(i===Bh)return t.RG_INTEGER;if(i===Hh)return t.RGBA_INTEGER;if(i===Hl||i===Vl||i===Gl||i===Wl)if(o===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cf||i===uf||i===df||i===ff)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===cf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===df)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ff)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hf||i===pf||i===mf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===hf||i===pf)return o===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===mf)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gf||i===vf||i===_f||i===xf||i===yf||i===Sf||i===Mf||i===Ef||i===wf||i===Tf||i===Af||i===Cf||i===bf||i===Rf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gf)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vf)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_f)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xf)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yf)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sf)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mf)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ef)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wf)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tf)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Af)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cf)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bf)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rf)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pf||i===Lf||i===Df)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pf)return o===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Df)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nf||i===If||i===Uf||i===Ff)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Nf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===If)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ff)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_a?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const nT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iT=`
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

}`;class rT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new s_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Pr({vertexShader:nT,fragmentShader:iT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ae(new es(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sT extends ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,x=null;const S=typeof XRWebGLBinding<"u",v=new rT,u={},m=n.getContextAttributes();let g=null,_=null;const C=[],b=[],R=new Xe;let L=null;const y=new Hn;y.viewport=new Pt;const M=new Hn;M.viewport=new Pt;const N=[y,M],V=new TS;let Y=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let oe=C[ne];return oe===void 0&&(oe=new Bu,C[ne]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ne){let oe=C[ne];return oe===void 0&&(oe=new Bu,C[ne]=oe),oe.getGripSpace()},this.getHand=function(ne){let oe=C[ne];return oe===void 0&&(oe=new Bu,C[ne]=oe),oe.getHandSpace()};function q(ne){const oe=b.indexOf(ne.inputSource);if(oe===-1)return;const Oe=C[oe];Oe!==void 0&&(Oe.update(ne.inputSource,ne.frame,c||o),Oe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function j(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",G);for(let ne=0;ne<C.length;ne++){const oe=b[ne];oe!==null&&(b[ne]=null,C[ne].disconnect(oe))}Y=null,ee=null,v.reset();for(const ne in u)delete u[ne];e.setRenderTarget(g),p=null,h=null,d=null,r=null,_=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",j),r.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Oe=null,qe=null,Be=null;m.depth&&(Be=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Oe=m.stencil?ya:xa,qe=m.stencil?_a:os);const ct={colorFormat:n.RGBA8,depthFormat:Be,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(ct),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new as(h.textureWidth,h.textureHeight,{format:hi,type:Pi,depthTexture:new r_(h.textureWidth,h.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new as(p.framebufferWidth,p.framebufferHeight,{format:hi,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ye.setContext(r),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(ne){for(let oe=0;oe<ne.removed.length;oe++){const Oe=ne.removed[oe],qe=b.indexOf(Oe);qe>=0&&(b[qe]=null,C[qe].disconnect(Oe))}for(let oe=0;oe<ne.added.length;oe++){const Oe=ne.added[oe];let qe=b.indexOf(Oe);if(qe===-1){for(let ct=0;ct<C.length;ct++)if(ct>=b.length){b.push(Oe),qe=ct;break}else if(b[ct]===null){b[ct]=Oe,qe=ct;break}if(qe===-1)break}const Be=C[qe];Be&&Be.connect(Oe)}}const U=new k,te=new k;function ae(ne,oe,Oe){U.setFromMatrixPosition(oe.matrixWorld),te.setFromMatrixPosition(Oe.matrixWorld);const qe=U.distanceTo(te),Be=oe.projectionMatrix.elements,ct=Oe.projectionMatrix.elements,Xt=Be[14]/(Be[10]-1),I=Be[14]/(Be[10]+1),lt=(Be[9]+1)/Be[5],Je=(Be[9]-1)/Be[5],je=(Be[8]-1)/Be[0],F=(ct[8]+1)/ct[0],me=Xt*je,ie=Xt*F,Se=qe/(-je+F),He=Se*-je;if(oe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(He),ne.translateZ(Se),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Be[10]===-1)ne.projectionMatrix.copy(oe.projectionMatrix),ne.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ye=Xt+Se,P=I+Se,E=me-He,X=ie+(qe-He),Q=lt*I/P*Ye,le=Je*I/P*Ye;ne.projectionMatrix.makePerspective(E,X,Q,le,Ye,P),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function xe(ne,oe){oe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(oe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let oe=ne.near,Oe=ne.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(Oe=v.depthFar)),V.near=M.near=y.near=oe,V.far=M.far=y.far=Oe,(Y!==V.near||ee!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),Y=V.near,ee=V.far),V.layers.mask=ne.layers.mask|6,y.layers.mask=V.layers.mask&3,M.layers.mask=V.layers.mask&5;const qe=ne.parent,Be=V.cameras;xe(V,qe);for(let ct=0;ct<Be.length;ct++)xe(Be[ct],qe);Be.length===2?ae(V,y,M):V.projectionMatrix.copy(y.projectionMatrix),ke(ne,V,qe)};function ke(ne,oe,Oe){Oe===null?ne.matrix.copy(oe.matrixWorld):(ne.matrix.copy(Oe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(oe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(oe.projectionMatrix),ne.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Of*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(V)},this.getCameraTexture=function(ne){return u[ne]};let it=null;function et(ne,oe){if(f=oe.getViewerPose(c||o),x=oe,f!==null){const Oe=f.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let qe=!1;Oe.length!==V.cameras.length&&(V.cameras.length=0,qe=!0);for(let I=0;I<Oe.length;I++){const lt=Oe[I];let Je=null;if(p!==null)Je=p.getViewport(lt);else{const F=d.getViewSubImage(h,lt);Je=F.viewport,I===0&&(e.setRenderTargetTextures(_,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(_))}let je=N[I];je===void 0&&(je=new Hn,je.layers.enable(I),je.viewport=new Pt,N[I]=je),je.matrix.fromArray(lt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(lt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Je.x,Je.y,Je.width,Je.height),I===0&&(V.matrix.copy(je.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),qe===!0&&V.cameras.push(je)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const I=d.getDepthInformation(Oe[0]);I&&I.isValid&&I.texture&&v.init(I,r.renderState)}if(Be&&Be.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let I=0;I<Oe.length;I++){const lt=Oe[I].camera;if(lt){let Je=u[lt];Je||(Je=new s_,u[lt]=Je);const je=d.getCameraImage(lt);Je.sourceTexture=je}}}}for(let Oe=0;Oe<C.length;Oe++){const qe=b[Oe],Be=C[Oe];qe!==null&&Be!==void 0&&Be.update(qe,oe,c||o)}it&&it(ne,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),x=null}const ye=new u_;ye.setAnimationLoop(et),this.setAnimationLoop=function(ne){it=ne},this.dispose=function(){}}}const Br=new Li,oT=new Ot;function aT(t,e){function n(v,u){v.matrixAutoUpdate===!0&&v.updateMatrix(),u.value.copy(v.matrix)}function i(v,u){u.color.getRGB(v.fogColor.value,e_(t)),u.isFog?(v.fogNear.value=u.near,v.fogFar.value=u.far):u.isFogExp2&&(v.fogDensity.value=u.density)}function r(v,u,m,g,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(v,u):u.isMeshToonMaterial?(s(v,u),d(v,u)):u.isMeshPhongMaterial?(s(v,u),f(v,u)):u.isMeshStandardMaterial?(s(v,u),h(v,u),u.isMeshPhysicalMaterial&&p(v,u,_)):u.isMeshMatcapMaterial?(s(v,u),x(v,u)):u.isMeshDepthMaterial?s(v,u):u.isMeshDistanceMaterial?(s(v,u),S(v,u)):u.isMeshNormalMaterial?s(v,u):u.isLineBasicMaterial?(o(v,u),u.isLineDashedMaterial&&a(v,u)):u.isPointsMaterial?l(v,u,m,g):u.isSpriteMaterial?c(v,u):u.isShadowMaterial?(v.color.value.copy(u.color),v.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(v,u){v.opacity.value=u.opacity,u.color&&v.diffuse.value.copy(u.color),u.emissive&&v.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.bumpMap&&(v.bumpMap.value=u.bumpMap,n(u.bumpMap,v.bumpMapTransform),v.bumpScale.value=u.bumpScale,u.side===In&&(v.bumpScale.value*=-1)),u.normalMap&&(v.normalMap.value=u.normalMap,n(u.normalMap,v.normalMapTransform),v.normalScale.value.copy(u.normalScale),u.side===In&&v.normalScale.value.negate()),u.displacementMap&&(v.displacementMap.value=u.displacementMap,n(u.displacementMap,v.displacementMapTransform),v.displacementScale.value=u.displacementScale,v.displacementBias.value=u.displacementBias),u.emissiveMap&&(v.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,v.emissiveMapTransform)),u.specularMap&&(v.specularMap.value=u.specularMap,n(u.specularMap,v.specularMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest);const m=e.get(u),g=m.envMap,_=m.envMapRotation;g&&(v.envMap.value=g,Br.copy(_),Br.x*=-1,Br.y*=-1,Br.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),v.envMapRotation.value.setFromMatrix4(oT.makeRotationFromEuler(Br)),v.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=u.reflectivity,v.ior.value=u.ior,v.refractionRatio.value=u.refractionRatio),u.lightMap&&(v.lightMap.value=u.lightMap,v.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,v.lightMapTransform)),u.aoMap&&(v.aoMap.value=u.aoMap,v.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,v.aoMapTransform))}function o(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform))}function a(v,u){v.dashSize.value=u.dashSize,v.totalSize.value=u.dashSize+u.gapSize,v.scale.value=u.scale}function l(v,u,m,g){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.size.value=u.size*m,v.scale.value=g*.5,u.map&&(v.map.value=u.map,n(u.map,v.uvTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function c(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.rotation.value=u.rotation,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function f(v,u){v.specular.value.copy(u.specular),v.shininess.value=Math.max(u.shininess,1e-4)}function d(v,u){u.gradientMap&&(v.gradientMap.value=u.gradientMap)}function h(v,u){v.metalness.value=u.metalness,u.metalnessMap&&(v.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,v.metalnessMapTransform)),v.roughness.value=u.roughness,u.roughnessMap&&(v.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,v.roughnessMapTransform)),u.envMap&&(v.envMapIntensity.value=u.envMapIntensity)}function p(v,u,m){v.ior.value=u.ior,u.sheen>0&&(v.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),v.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(v.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,v.sheenColorMapTransform)),u.sheenRoughnessMap&&(v.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,v.sheenRoughnessMapTransform))),u.clearcoat>0&&(v.clearcoat.value=u.clearcoat,v.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(v.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,v.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(v.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===In&&v.clearcoatNormalScale.value.negate())),u.dispersion>0&&(v.dispersion.value=u.dispersion),u.iridescence>0&&(v.iridescence.value=u.iridescence,v.iridescenceIOR.value=u.iridescenceIOR,v.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(v.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,v.iridescenceMapTransform)),u.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),u.transmission>0&&(v.transmission.value=u.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(v.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,v.transmissionMapTransform)),v.thickness.value=u.thickness,u.thicknessMap&&(v.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=u.attenuationDistance,v.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(v.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(v.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=u.specularIntensity,v.specularColor.value.copy(u.specularColor),u.specularColorMap&&(v.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,v.specularColorMapTransform)),u.specularIntensityMap&&(v.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,u){u.matcap&&(v.matcap.value=u.matcap)}function S(v,u){const m=e.get(u).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,g){const _=g.program;i.uniformBlockBinding(m,_)}function c(m,g){let _=r[m.id];_===void 0&&(x(m),_=f(m),r[m.id]=_,m.addEventListener("dispose",v));const C=g.program;i.updateUBOMapping(m,C);const b=e.render.frame;s[m.id]!==b&&(h(m),s[m.id]=b)}function f(m){const g=d();m.__bindingPointIndex=g;const _=t.createBuffer(),C=m.__size,b=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,_),_}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const g=r[m.id],_=m.uniforms,C=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let b=0,R=_.length;b<R;b++){const L=Array.isArray(_[b])?_[b]:[_[b]];for(let y=0,M=L.length;y<M;y++){const N=L[y];if(p(N,b,y,C)===!0){const V=N.__offset,Y=Array.isArray(N.value)?N.value:[N.value];let ee=0;for(let q=0;q<Y.length;q++){const j=Y[q],G=S(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,V+ee,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,ee),ee+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,g,_,C){const b=m.value,R=g+"_"+_;if(C[R]===void 0)return typeof b=="number"||typeof b=="boolean"?C[R]=b:C[R]=b.clone(),!0;{const L=C[R];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return C[R]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function x(m){const g=m.uniforms;let _=0;const C=16;for(let R=0,L=g.length;R<L;R++){const y=Array.isArray(g[R])?g[R]:[g[R]];for(let M=0,N=y.length;M<N;M++){const V=y[M],Y=Array.isArray(V.value)?V.value:[V.value];for(let ee=0,q=Y.length;ee<q;ee++){const j=Y[ee],G=S(j),U=_%C,te=U%G.boundary,ae=U+te;_+=te,ae!==0&&C-ae<G.storage&&(_+=C-ae),V.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=G.storage}}}const b=_%C;return b>0&&(_+=C-b),m.__size=_,m.__cache={},this}function S(m){const g={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(g.boundary=4,g.storage=4):m.isVector2?(g.boundary=8,g.storage=8):m.isVector3||m.isColor?(g.boundary=16,g.storage=12):m.isVector4?(g.boundary=16,g.storage=16):m.isMatrix3?(g.boundary=48,g.storage=48):m.isMatrix4?(g.boundary=64,g.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),g}function v(m){const g=m.target;g.removeEventListener("dispose",v);const _=o.indexOf(g.__bindingPointIndex);o.splice(_,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class cT{constructor(e={}){const{canvas:n=C1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const x=new Uint32Array(4),S=new Int32Array(4);let v=null,u=null;const m=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let C=!1;this._outputColorSpace=bn;let b=0,R=0,L=null,y=-1,M=null;const N=new Pt,V=new Pt;let Y=null;const ee=new mt(0);let q=0,j=n.width,G=n.height,U=1,te=null,ae=null;const xe=new Pt(0,0,j,G),ke=new Pt(0,0,j,G);let it=!1;const et=new jh;let ye=!1,ne=!1;const oe=new Ot,Oe=new k,qe=new Pt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Xt(){return L===null?U:1}let I=i;function lt(T,H){return n.getContext(T,H)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Uh}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",Ue,!1),n.addEventListener("webglcontextcreationerror",he,!1),I===null){const H="webgl2";if(I=lt(H,T),I===null)throw lt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Je,je,F,me,ie,Se,He,Ye,P,E,X,Q,le,Z,Re,ve,Ne,ze,_e,Ce,Ke,Ve,Ee,rt;function z(){Je=new xw(I),Je.init(),Ve=new tT(I,Je),je=new fw(I,Je,e,Ve),F=new Q2(I,Je),je.reversedDepthBuffer&&h&&F.buffers.depth.setReversed(!0),me=new Mw(I),ie=new B2,Se=new eT(I,Je,F,ie,je,Ve,me),He=new pw(_),Ye=new _w(_),P=new bS(I),Ee=new uw(I,P),E=new yw(I,P,me,Ee),X=new ww(I,E,P,me),_e=new Ew(I,je,Se),ve=new hw(ie),Q=new z2(_,He,Ye,Je,je,Ee,ve),le=new aT(_,ie),Z=new V2,Re=new q2(Je),ze=new cw(_,He,Ye,F,X,p,l),Ne=new J2(_,X,je),rt=new lT(I,me,je,F),Ce=new dw(I,Je,me),Ke=new Sw(I,Je,me),me.programs=Q.programs,_.capabilities=je,_.extensions=Je,_.properties=ie,_.renderLists=Z,_.shadowMap=Ne,_.state=F,_.info=me}z();const ue=new sT(_,I);this.xr=ue,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=Je.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Je.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(j,G,!1))},this.getSize=function(T){return T.set(j,G)},this.setSize=function(T,H,K=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,G=H,n.width=Math.floor(T*U),n.height=Math.floor(H*U),K===!0&&(n.style.width=T+"px",n.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(j*U,G*U).floor()},this.setDrawingBufferSize=function(T,H,K){j=T,G=H,U=K,n.width=Math.floor(T*K),n.height=Math.floor(H*K),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(xe)},this.setViewport=function(T,H,K,J){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,H,K,J),F.viewport(N.copy(xe).multiplyScalar(U).round())},this.getScissor=function(T){return T.copy(ke)},this.setScissor=function(T,H,K,J){T.isVector4?ke.set(T.x,T.y,T.z,T.w):ke.set(T,H,K,J),F.scissor(V.copy(ke).multiplyScalar(U).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(T){F.setScissorTest(it=T)},this.setOpaqueSort=function(T){te=T},this.setTransparentSort=function(T){ae=T},this.getClearColor=function(T){return T.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,K=!0){let J=0;if(T){let W=!1;if(L!==null){const ge=L.texture.format;W=ge===Hh||ge===Bh||ge===zh}if(W){const ge=L.texture.type,we=ge===Pi||ge===os||ge===va||ge===_a||ge===Oh||ge===kh,De=ze.getClearColor(),Te=ze.getClearAlpha(),$e=De.r,Ze=De.g,Ge=De.b;we?(x[0]=$e,x[1]=Ze,x[2]=Ge,x[3]=Te,I.clearBufferuiv(I.COLOR,0,x)):(S[0]=$e,S[1]=Ze,S[2]=Ge,S[3]=Te,I.clearBufferiv(I.COLOR,0,S))}else J|=I.COLOR_BUFFER_BIT}H&&(J|=I.DEPTH_BUFFER_BIT),K&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",Ue,!1),n.removeEventListener("webglcontextcreationerror",he,!1),ze.dispose(),Z.dispose(),Re.dispose(),ie.dispose(),He.dispose(),Ye.dispose(),X.dispose(),Ee.dispose(),rt.dispose(),Q.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Un),ue.removeEventListener("sessionend",us),_i.stop()};function Me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=me.autoReset,H=Ne.enabled,K=Ne.autoUpdate,J=Ne.needsUpdate,W=Ne.type;z(),me.autoReset=T,Ne.enabled=H,Ne.autoUpdate=K,Ne.needsUpdate=J,Ne.type=W}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function se(T){const H=T.target;H.removeEventListener("dispose",se),Ie(H)}function Ie(T){tt(T),ie.remove(T)}function tt(T){const H=ie.get(T).programs;H!==void 0&&(H.forEach(function(K){Q.releaseProgram(K)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,K,J,W,ge){H===null&&(H=Be);const we=W.isMesh&&W.matrixWorld.determinant()<0,De=go(T,H,K,J,W);F.setMaterial(J,we);let Te=K.index,$e=1;if(J.wireframe===!0){if(Te=E.getWireframeAttribute(K),Te===void 0)return;$e=2}const Ze=K.drawRange,Ge=K.attributes.position;let ot=Ze.start*$e,xt=(Ze.start+Ze.count)*$e;ge!==null&&(ot=Math.max(ot,ge.start*$e),xt=Math.min(xt,(ge.start+ge.count)*$e)),Te!==null?(ot=Math.max(ot,0),xt=Math.min(xt,Te.count)):Ge!=null&&(ot=Math.max(ot,0),xt=Math.min(xt,Ge.count));const Mt=xt-ot;if(Mt<0||Mt===1/0)return;Ee.setup(W,J,De,K,Te);let At,Et=Ce;if(Te!==null&&(At=P.get(Te),Et=Ke,Et.setIndex(At)),W.isMesh)J.wireframe===!0?(F.setLineWidth(J.wireframeLinewidth*Xt()),Et.setMode(I.LINES)):Et.setMode(I.TRIANGLES);else if(W.isLine){let We=J.linewidth;We===void 0&&(We=1),F.setLineWidth(We*Xt()),W.isLineSegments?Et.setMode(I.LINES):W.isLineLoop?Et.setMode(I.LINE_LOOP):Et.setMode(I.LINE_STRIP)}else W.isPoints?Et.setMode(I.POINTS):W.isSprite&&Et.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Sa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))Et.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const We=W._multiDrawStarts,Dt=W._multiDrawCounts,ht=W._multiDrawCount,sn=Te?P.get(Te).bytesPerElement:1,Di=ie.get(J).currentProgram.getUniforms();for(let on=0;on<ht;on++)Di.setValue(I,"_gl_DrawID",on),Et.render(We[on]/sn,Dt[on])}else if(W.isInstancedMesh)Et.renderInstances(ot,Mt,W.count);else if(K.isInstancedBufferGeometry){const We=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Dt=Math.min(K.instanceCount,We);Et.renderInstances(ot,Mt,Dt)}else Et.render(ot,Mt)};function ut(T,H,K){T.transparent===!0&&T.side===wi&&T.forceSinglePass===!1?(T.side=In,T.needsUpdate=!0,Fn(T,H,K),T.side=Rr,T.needsUpdate=!0,Fn(T,H,K),T.side=wi):Fn(T,H,K)}this.compile=function(T,H,K=null){K===null&&(K=T),u=Re.get(K),u.init(H),g.push(u),K.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),T!==K&&T.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),u.setupLights();const J=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ge=W.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const De=ge[we];ut(De,K,W),J.add(De)}else ut(ge,K,W),J.add(ge)}),u=g.pop(),J},this.compileAsync=function(T,H,K=null){const J=this.compile(T,H,K);return new Promise(W=>{function ge(){if(J.forEach(function(we){ie.get(we).currentProgram.isReady()&&J.delete(we)}),J.size===0){W(T);return}setTimeout(ge,10)}Je.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let gt=null;function Yn(T){gt&&gt(T)}function Un(){_i.stop()}function us(){_i.start()}const _i=new u_;_i.setAnimationLoop(Yn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(T){gt=T,ue.setAnimationLoop(T),T===null?_i.stop():_i.start()},ue.addEventListener("sessionstart",Un),ue.addEventListener("sessionend",us),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(H),H=ue.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,H,L),u=Re.get(T,g.length),u.init(H),g.push(u),oe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),et.setFromProjectionMatrix(oe,Ai,H.reversedDepth),ne=this.localClippingEnabled,ye=ve.init(this.clippingPlanes,ne),v=Z.get(T,m.length),v.init(),m.push(v),ue.enabled===!0&&ue.isPresenting===!0){const ge=_.xr.getDepthSensingMesh();ge!==null&&qn(ge,H,-1/0,_.sortObjects)}qn(T,H,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(te,ae),ct=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ct&&ze.addToRenderList(v,T),this.info.render.frame++,ye===!0&&ve.beginShadows();const K=u.state.shadowsArray;Ne.render(K,T,H),ye===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=v.opaque,W=v.transmissive;if(u.setupLights(),H.isArrayCamera){const ge=H.cameras;if(W.length>0)for(let we=0,De=ge.length;we<De;we++){const Te=ge[we];ds(J,W,T,Te)}ct&&ze.render(T);for(let we=0,De=ge.length;we<De;we++){const Te=ge[we];Da(v,T,Te,Te.viewport)}}else W.length>0&&ds(J,W,T,H),ct&&ze.render(T),Da(v,T,H);L!==null&&R===0&&(Se.updateMultisampleRenderTarget(L),Se.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(_,T,H),Ee.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?(u=g[g.length-1],ye===!0&&ve.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function qn(T,H,K,J){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||et.intersectsSprite(T)){J&&qe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(oe);const we=X.update(T),De=T.material;De.visible&&v.push(T,we,De,K,qe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||et.intersectsObject(T))){const we=X.update(T),De=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),qe.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),qe.copy(we.boundingSphere.center)),qe.applyMatrix4(T.matrixWorld).applyMatrix4(oe)),Array.isArray(De)){const Te=we.groups;for(let $e=0,Ze=Te.length;$e<Ze;$e++){const Ge=Te[$e],ot=De[Ge.materialIndex];ot&&ot.visible&&v.push(T,we,ot,K,qe.z,Ge)}}else De.visible&&v.push(T,we,De,K,qe.z,null)}}const ge=T.children;for(let we=0,De=ge.length;we<De;we++)qn(ge[we],H,K,J)}function Da(T,H,K,J){const W=T.opaque,ge=T.transmissive,we=T.transparent;u.setupLightsView(K),ye===!0&&ve.setGlobalState(_.clippingPlanes,K),J&&F.viewport(N.copy(J)),W.length>0&&xi(W,H,K),ge.length>0&&xi(ge,H,K),we.length>0&&xi(we,H,K),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function ds(T,H,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[J.id]===void 0&&(u.state.transmissionRenderTarget[J.id]=new as(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?ba:Pi,minFilter:Jr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const ge=u.state.transmissionRenderTarget[J.id],we=J.viewport||N;ge.setSize(we.z*_.transmissionResolutionScale,we.w*_.transmissionResolutionScale);const De=_.getRenderTarget(),Te=_.getActiveCubeFace(),$e=_.getActiveMipmapLevel();_.setRenderTarget(ge),_.getClearColor(ee),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),ct&&ze.render(K);const Ze=_.toneMapping;_.toneMapping=Ar;const Ge=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),u.setupLightsView(J),ye===!0&&ve.setGlobalState(_.clippingPlanes,J),xi(T,K,J),Se.updateMultisampleRenderTarget(ge),Se.updateRenderTargetMipmap(ge),Je.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let xt=0,Mt=H.length;xt<Mt;xt++){const At=H[xt],Et=At.object,We=At.geometry,Dt=At.material,ht=At.group;if(Dt.side===wi&&Et.layers.test(J.layers)){const sn=Dt.side;Dt.side=In,Dt.needsUpdate=!0,Zi(Et,K,J,We,Dt,ht),Dt.side=sn,Dt.needsUpdate=!0,ot=!0}}ot===!0&&(Se.updateMultisampleRenderTarget(ge),Se.updateRenderTargetMipmap(ge))}_.setRenderTarget(De,Te,$e),_.setClearColor(ee,q),Ge!==void 0&&(J.viewport=Ge),_.toneMapping=Ze}function xi(T,H,K){const J=H.isScene===!0?H.overrideMaterial:null;for(let W=0,ge=T.length;W<ge;W++){const we=T[W],De=we.object,Te=we.geometry,$e=we.group;let Ze=we.material;Ze.allowOverride===!0&&J!==null&&(Ze=J),De.layers.test(K.layers)&&Zi(De,H,K,Te,Ze,$e)}}function Zi(T,H,K,J,W,ge){T.onBeforeRender(_,H,K,J,W,ge),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(_,H,K,J,T,ge),W.transparent===!0&&W.side===wi&&W.forceSinglePass===!1?(W.side=In,W.needsUpdate=!0,_.renderBufferDirect(K,H,J,W,T,ge),W.side=Rr,W.needsUpdate=!0,_.renderBufferDirect(K,H,J,W,T,ge),W.side=wi):_.renderBufferDirect(K,H,J,W,T,ge),T.onAfterRender(_,H,K,J,W,ge)}function Fn(T,H,K){H.isScene!==!0&&(H=Be);const J=ie.get(T),W=u.state.lights,ge=u.state.shadowsArray,we=W.state.version,De=Q.getParameters(T,W.state,ge,H,K),Te=Q.getProgramCacheKey(De);let $e=J.programs;J.environment=T.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(T.isMeshStandardMaterial?Ye:He).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,$e===void 0&&(T.addEventListener("dispose",se),$e=new Map,J.programs=$e);let Ze=$e.get(Te);if(Ze!==void 0){if(J.currentProgram===Ze&&J.lightsStateVersion===we)return Ia(T,De),Ze}else De.uniforms=Q.getUniforms(T),T.onBeforeCompile(De,_),Ze=Q.acquireProgram(De,Te),$e.set(Te,Ze),J.uniforms=De.uniforms;const Ge=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=ve.uniform),Ia(T,De),J.needsLights=Ua(T),J.lightsStateVersion=we,J.needsLights&&(Ge.ambientLightColor.value=W.state.ambient,Ge.lightProbe.value=W.state.probe,Ge.directionalLights.value=W.state.directional,Ge.directionalLightShadows.value=W.state.directionalShadow,Ge.spotLights.value=W.state.spot,Ge.spotLightShadows.value=W.state.spotShadow,Ge.rectAreaLights.value=W.state.rectArea,Ge.ltc_1.value=W.state.rectAreaLTC1,Ge.ltc_2.value=W.state.rectAreaLTC2,Ge.pointLights.value=W.state.point,Ge.pointLightShadows.value=W.state.pointShadow,Ge.hemisphereLights.value=W.state.hemi,Ge.directionalShadowMap.value=W.state.directionalShadowMap,Ge.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ge.spotShadowMap.value=W.state.spotShadowMap,Ge.spotLightMatrix.value=W.state.spotLightMatrix,Ge.spotLightMap.value=W.state.spotLightMap,Ge.pointShadowMap.value=W.state.pointShadowMap,Ge.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=Ze,J.uniformsList=null,Ze}function Na(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=Xl.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Ia(T,H){const K=ie.get(T);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function go(T,H,K,J,W){H.isScene!==!0&&(H=Be),Se.resetTextureUnits();const ge=H.fog,we=J.isMeshStandardMaterial?H.environment:null,De=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ao,Te=(J.isMeshStandardMaterial?Ye:He).get(J.envMap||we),$e=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ze=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ge=!!K.morphAttributes.position,ot=!!K.morphAttributes.normal,xt=!!K.morphAttributes.color;let Mt=Ar;J.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Mt=_.toneMapping);const At=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Et=At!==void 0?At.length:0,We=ie.get(J),Dt=u.state.lights;if(ye===!0&&(ne===!0||T!==M)){const $t=T===M&&J.id===y;ve.setState(J,T,$t)}let ht=!1;J.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Dt.state.version||We.outputColorSpace!==De||W.isBatchedMesh&&We.batching===!1||!W.isBatchedMesh&&We.batching===!0||W.isBatchedMesh&&We.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&We.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&We.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&We.instancingMorph===!1&&W.morphTexture!==null||We.envMap!==Te||J.fog===!0&&We.fog!==ge||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ve.numPlanes||We.numIntersection!==ve.numIntersection)||We.vertexAlphas!==$e||We.vertexTangents!==Ze||We.morphTargets!==Ge||We.morphNormals!==ot||We.morphColors!==xt||We.toneMapping!==Mt||We.morphTargetsCount!==Et)&&(ht=!0):(ht=!0,We.__version=J.version);let sn=We.currentProgram;ht===!0&&(sn=Fn(J,H,W));let Di=!1,on=!1,er=!1;const Nt=sn.getUniforms(),_n=We.uniforms;if(F.useProgram(sn.program)&&(Di=!0,on=!0,er=!0),J.id!==y&&(y=J.id,on=!0),Di||M!==T){F.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Nt.setValue(I,"projectionMatrix",T.projectionMatrix),Nt.setValue(I,"viewMatrix",T.matrixWorldInverse);const an=Nt.map.cameraPosition;an!==void 0&&an.setValue(I,Oe.setFromMatrixPosition(T.matrixWorld)),je.logarithmicDepthBuffer&&Nt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Nt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,on=!0,er=!0)}if(W.isSkinnedMesh){Nt.setOptional(I,W,"bindMatrix"),Nt.setOptional(I,W,"bindMatrixInverse");const $t=W.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Nt.setValue(I,"boneTexture",$t.boneTexture,Se))}W.isBatchedMesh&&(Nt.setOptional(I,W,"batchingTexture"),Nt.setValue(I,"batchingTexture",W._matricesTexture,Se),Nt.setOptional(I,W,"batchingIdTexture"),Nt.setValue(I,"batchingIdTexture",W._indirectTexture,Se),Nt.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&Nt.setValue(I,"batchingColorTexture",W._colorsTexture,Se));const xn=K.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&_e.update(W,K,sn),(on||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,Nt.setValue(I,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(_n.envMap.value=Te,_n.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(_n.envMapIntensity.value=H.environmentIntensity),on&&(Nt.setValue(I,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&Wc(_n,er),ge&&J.fog===!0&&le.refreshFogUniforms(_n,ge),le.refreshMaterialUniforms(_n,J,U,G,u.state.transmissionRenderTarget[T.id]),Xl.upload(I,Na(We),_n,Se)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Xl.upload(I,Na(We),_n,Se),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Nt.setValue(I,"center",W.center),Nt.setValue(I,"modelViewMatrix",W.modelViewMatrix),Nt.setValue(I,"normalMatrix",W.normalMatrix),Nt.setValue(I,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const $t=J.uniformsGroups;for(let an=0,fs=$t.length;an<fs;an++){const w=$t[an];rt.update(w,sn),rt.bind(w,sn)}}return sn}function Wc(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Ua(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,H,K){const J=ie.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ie.get(T.texture).__webglTexture=H,ie.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const K=ie.get(T);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};const Qi=I.createFramebuffer();this.setRenderTarget=function(T,H=0,K=0){L=T,b=H,R=K;let J=!0,W=null,ge=!1,we=!1;if(T){const Te=ie.get(T);if(Te.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(I.FRAMEBUFFER,null),J=!1;else if(Te.__webglFramebuffer===void 0)Se.setupRenderTarget(T);else if(Te.__hasExternalTextures)Se.rebindTextures(T,ie.get(T.texture).__webglTexture,ie.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ge=T.depthTexture;if(Te.__boundDepthTexture!==Ge){if(Ge!==null&&ie.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(T)}}const $e=T.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(we=!0);const Ze=ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ze[H])?W=Ze[H][K]:W=Ze[H],ge=!0):T.samples>0&&Se.useMultisampledRTT(T)===!1?W=ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Ze)?W=Ze[K]:W=Ze,N.copy(T.viewport),V.copy(T.scissor),Y=T.scissorTest}else N.copy(xe).multiplyScalar(U).floor(),V.copy(ke).multiplyScalar(U).floor(),Y=it;if(K!==0&&(W=Qi),F.bindFramebuffer(I.FRAMEBUFFER,W)&&J&&F.drawBuffers(T,W),F.viewport(N),F.scissor(V),F.setScissorTest(Y),ge){const Te=ie.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,Te.__webglTexture,K)}else if(we){const Te=H;for(let $e=0;$e<T.textures.length;$e++){const Ze=ie.get(T.textures[$e]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+$e,Ze.__webglTexture,K,Te)}}else if(T!==null&&K!==0){const Te=ie.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Te.__webglTexture,K)}y=-1},this.readRenderTargetPixels=function(T,H,K,J,W,ge,we,De=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te){F.bindFramebuffer(I.FRAMEBUFFER,Te);try{const $e=T.textures[De],Ze=$e.format,Ge=$e.type;if(!je.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-J&&K>=0&&K<=T.height-W&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+De),I.readPixels(H,K,J,W,Ve.convert(Ze),Ve.convert(Ge),ge))}finally{const $e=L!==null?ie.get(L).__webglFramebuffer:null;F.bindFramebuffer(I.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(T,H,K,J,W,ge,we,De=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te)if(H>=0&&H<=T.width-J&&K>=0&&K<=T.height-W){F.bindFramebuffer(I.FRAMEBUFFER,Te);const $e=T.textures[De],Ze=$e.format,Ge=$e.type;if(!je.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ot),I.bufferData(I.PIXEL_PACK_BUFFER,ge.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+De),I.readPixels(H,K,J,W,Ve.convert(Ze),Ve.convert(Ge),0);const xt=L!==null?ie.get(L).__webglFramebuffer:null;F.bindFramebuffer(I.FRAMEBUFFER,xt);const Mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await b1(I,Mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ot),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ge),I.deleteBuffer(ot),I.deleteSync(Mt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,K=0){const J=Math.pow(2,-K),W=Math.floor(T.image.width*J),ge=Math.floor(T.image.height*J),we=H!==null?H.x:0,De=H!==null?H.y:0;Se.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,we,De,W,ge),F.unbindTexture()};const Fa=I.createFramebuffer(),vo=I.createFramebuffer();this.copyTextureToTexture=function(T,H,K=null,J=null,W=0,ge=null){ge===null&&(W!==0?(Sa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=W,W=0):ge=0);let we,De,Te,$e,Ze,Ge,ot,xt,Mt;const At=T.isCompressedTexture?T.mipmaps[ge]:T.image;if(K!==null)we=K.max.x-K.min.x,De=K.max.y-K.min.y,Te=K.isBox3?K.max.z-K.min.z:1,$e=K.min.x,Ze=K.min.y,Ge=K.isBox3?K.min.z:0;else{const xn=Math.pow(2,-W);we=Math.floor(At.width*xn),De=Math.floor(At.height*xn),T.isDataArrayTexture?Te=At.depth:T.isData3DTexture?Te=Math.floor(At.depth*xn):Te=1,$e=0,Ze=0,Ge=0}J!==null?(ot=J.x,xt=J.y,Mt=J.z):(ot=0,xt=0,Mt=0);const Et=Ve.convert(H.format),We=Ve.convert(H.type);let Dt;H.isData3DTexture?(Se.setTexture3D(H,0),Dt=I.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Se.setTexture2DArray(H,0),Dt=I.TEXTURE_2D_ARRAY):(Se.setTexture2D(H,0),Dt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const ht=I.getParameter(I.UNPACK_ROW_LENGTH),sn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Di=I.getParameter(I.UNPACK_SKIP_PIXELS),on=I.getParameter(I.UNPACK_SKIP_ROWS),er=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,At.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,At.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$e),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge);const Nt=T.isDataArrayTexture||T.isData3DTexture,_n=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const xn=ie.get(T),$t=ie.get(H),an=ie.get(xn.__renderTarget),fs=ie.get($t.__renderTarget);F.bindFramebuffer(I.READ_FRAMEBUFFER,an.__webglFramebuffer),F.bindFramebuffer(I.DRAW_FRAMEBUFFER,fs.__webglFramebuffer);for(let w=0;w<Te;w++)Nt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ie.get(T).__webglTexture,W,Ge+w),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ie.get(H).__webglTexture,ge,Mt+w)),I.blitFramebuffer($e,Ze,we,De,ot,xt,we,De,I.DEPTH_BUFFER_BIT,I.NEAREST);F.bindFramebuffer(I.READ_FRAMEBUFFER,null),F.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||ie.has(T)){const xn=ie.get(T),$t=ie.get(H);F.bindFramebuffer(I.READ_FRAMEBUFFER,Fa),F.bindFramebuffer(I.DRAW_FRAMEBUFFER,vo);for(let an=0;an<Te;an++)Nt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xn.__webglTexture,W,Ge+an):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xn.__webglTexture,W),_n?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$t.__webglTexture,ge,Mt+an):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,$t.__webglTexture,ge),W!==0?I.blitFramebuffer($e,Ze,we,De,ot,xt,we,De,I.COLOR_BUFFER_BIT,I.NEAREST):_n?I.copyTexSubImage3D(Dt,ge,ot,xt,Mt+an,$e,Ze,we,De):I.copyTexSubImage2D(Dt,ge,ot,xt,$e,Ze,we,De);F.bindFramebuffer(I.READ_FRAMEBUFFER,null),F.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else _n?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Dt,ge,ot,xt,Mt,we,De,Te,Et,We,At.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(Dt,ge,ot,xt,Mt,we,De,Te,Et,At.data):I.texSubImage3D(Dt,ge,ot,xt,Mt,we,De,Te,Et,We,At):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ge,ot,xt,we,De,Et,We,At.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ge,ot,xt,At.width,At.height,Et,At.data):I.texSubImage2D(I.TEXTURE_2D,ge,ot,xt,we,De,Et,We,At);I.pixelStorei(I.UNPACK_ROW_LENGTH,ht),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,sn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Di),I.pixelStorei(I.UNPACK_SKIP_ROWS,on),I.pixelStorei(I.UNPACK_SKIP_IMAGES,er),ge===0&&H.generateMipmaps&&I.generateMipmap(Dt),F.unbindTexture()},this.initRenderTarget=function(T){ie.get(T).__webglFramebuffer===void 0&&Se.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Se.setTextureCube(T,0):T.isData3DTexture?Se.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Se.setTexture2DArray(T,0):Se.setTexture2D(T,0),F.unbindTexture()},this.resetState=function(){b=0,R=0,L=null,F.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),n.unpackColorSpace=St._getUnpackColorSpace()}}var y0;const vt=(y0=window.Telegram)==null?void 0:y0.WebApp,g0="/yggdrasil-tma/",bl=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],uT=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],v0={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},_0=()=>{try{const t={...v0,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...v0,watch:Date.now()}}},Uo=()=>new Date().toISOString().slice(0,10),dT=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",ed=[3,5,8,12,18,25,40],fT=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],hT=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],td=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],Fo={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},x0={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},nd={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},id={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function lr({name:t,className:e}){return B.jsx("img",{src:t.includes(".")?`${g0}img/${t}`:`${g0}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const pT=`
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
`,jl=(t,e=.9,n=0)=>new Ut({color:t,roughness:e,metalness:n}),Oo=(t,e,n,i,r=.9)=>new Ae(new Mn(t,e,n),jl(i,r)),Le=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function mT(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function gT(t){const e=new pt,n=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,i=t.gender==="f"?14265738:13210479,r=new Ae(new Ma(.42,.72,4,8),jl(n,.88));r.position.y=.9,e.add(r);const s=new Ae(new gr(.34,16,12),jl(i,.9));s.position.y=1.62,e.add(s);const o=new Ae(new gr(.36,12,8),jl(t.id==="elf"?12110033:2760989,.95));o.scale.y=.55,o.position.y=1.82,e.add(o);const a=Oo(.2,.72,.22,2106150,.96),l=a.clone();a.position.set(-.15,.36,0),l.position.set(.15,.36,0),e.add(a,l);const c=Oo(.9,.22,.5,n,.88);c.position.y=1.23,e.add(c);const f=Oo(.68,.95,.09,t.id==="berserk"?2821132:1582894,.98);f.position.set(0,.95,-.34),e.add(f);const d=Oo(.08,1.35,.08,12830922,.38);d.position.set(.58,1.08,0),d.rotation.z=-.35,e.add(d);const h=Oo(.1,.38,.1,5321246,.95);h.position.set(.54,.45,0),e.add(h);const p=new Ae(new Ks(.65,24),new Vc({color:0,transparent:!0,opacity:.32}));return p.rotation.x=-Math.PI/2,p.position.y=.02,e.add(p),mT(e)}function vT({h:t,on:e}){const n=yt.useRef(null),i=yt.useRef(null),r=yt.useRef(null),s=yt.useRef({x:0,z:28,dx:0,dz:0}),[o,a]=yt.useState(""),[l,c]=yt.useState(!1),[f,d]=yt.useState(!1),h=yt.useRef({x:0,z:1});yt.useEffect(()=>{const m=n.current;if(!m)return;const g=new Q1;g.background=new mt(9414817),g.fog=new Xh(8097158,.0058);const _=new Hn(54,1,.1,280);_.position.set(0,8.5,17);const C=new cT({antialias:!0,powerPreference:"high-performance"});C.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),C.shadowMap.enabled=!0,C.shadowMap.type=Uv,C.outputColorSpace=bn,C.toneMapping=Ov,C.toneMappingExposure=1.08,m.appendChild(C.domElement);const b=new MS(14477797,4014136,1.38);g.add(b);const R=new Vm(16773583,3.15);R.position.set(-42,58,34),R.castShadow=!0,R.shadow.mapSize.set(1024,1024),R.shadow.camera.left=-95,R.shadow.camera.right=95,R.shadow.camera.top=95,R.shadow.camera.bottom=-95,R.shadow.bias=-5e-4,g.add(R);const L=new Vm(12110789,.58);L.position.set(55,18,-60),g.add(L);const y=(w,D)=>{const A=Math.sin(w*.075)*.7+Math.cos(D*.062)*.55+Math.sin((w-D)*.045)*.35,O=Math.exp(-(w*w/850+(D+2)*(D+2)/1050)),re=Math.exp(-(w*w/150+(D-12)*(D-12)/2200));return A*(1-O*.88)-re*.18},M=w=>{const D=document.createElement("canvas");D.width=D.height=512;const A=D.getContext("2d"),O=$=>Math.abs(Math.sin($*12.9898)*43758.5453)%1;if(w==="ground"){A.fillStyle="#3f4d38",A.fillRect(0,0,512,512);for(let $=0;$<1800;$++){const fe=O($*1.17)*512,de=O($*2.31)*512,Pe=10+O($*3.71)*28,ce=O($*4.13);A.fillStyle=ce>.72?`rgba(96,108,63,${.08+O($)*.12})`:`rgba(30,36,25,${.05+O($)*.12})`,A.beginPath(),A.arc(fe,de,Pe,0,Math.PI*2),A.fill()}for(let $=0;$<650;$++){const fe=O($*7.1)*512,de=O($*8.2)*512;A.strokeStyle=`rgba(118,126,78,${.16+O($*2)*.16})`,A.lineWidth=1+O($*4)*1.5,A.beginPath(),A.moveTo(fe,de),A.lineTo(fe+(O($*5)-.5)*5,de-3-O($*6)*5),A.stroke()}}else if(w==="wood"){A.fillStyle="#5a3d29",A.fillRect(0,0,512,512);for(let $=0;$<512;$+=22)A.fillStyle=`rgba(25,15,9,${.18+O($)*.13})`,A.fillRect(0,$,512,3),A.strokeStyle=`rgba(154,111,69,${.08+O($*2)*.08})`,A.lineWidth=2,A.beginPath(),A.moveTo(0,$+7),A.bezierCurveTo(150,$+2,340,$+13,512,$+5),A.stroke();for(let $=0;$<65;$++){const fe=O($*2.1)*512;A.fillStyle=`rgba(20,12,8,${.12+O($*3)*.16})`,A.fillRect(fe,0,2+O($*4)*3,512)}}else if(w==="roof"){A.fillStyle="#252522",A.fillRect(0,0,512,512);for(let $=-30;$<550;$+=25){A.fillStyle=`rgba(105,94,77,${.12+O($)*.08})`,A.fillRect(0,$,512,2),A.strokeStyle="rgba(12,12,11,.48)",A.lineWidth=3;for(let fe=-40;fe<560;fe+=38)A.beginPath(),A.moveTo(fe,$),A.lineTo(fe-18,$+28),A.stroke()}for(let $=0;$<180;$++)A.fillStyle=`rgba(170,154,123,${.03+O($)*.07})`,A.fillRect(O($*2)*512,O($*3)*512,2+O($*4)*7,2)}else{A.fillStyle="#514333",A.fillRect(0,0,512,512);for(let $=0;$<1300;$++){const fe=O($*1.3)*512,de=O($*2.7)*512;A.fillStyle=`rgba(${45+O($*3)*38},${35+O($*4)*28},${23+O($*5)*20},${.08+O($*6)*.18})`,A.fillRect(fe,de,2+O($*7)*7,1+O($*8)*4)}}const re=new rS(D);return re.wrapS=re.wrapT=vc,re.colorSpace=bn,re.anisotropy=4,re},N=M("ground");N.repeat.set(5,6);const V=new es(190,190,62,62),Y=V.attributes.position;for(let w=0;w<Y.count;w++){const D=Y.getX(w),A=-Y.getY(w);Y.setZ(w,y(D,A))}V.rotateX(-Math.PI/2),V.computeVertexNormals();const ee=new Ae(V,new Ut({map:N,roughness:1}));ee.receiveShadow=!0,g.add(ee);const q=(w,D,A)=>(D&&(w.userData={id:D,label:A||D}),w.traverse(O=>{O.isMesh&&(O.castShadow=!0,O.receiveShadow=!0)}),g.add(w),D&&U.push(w),w),j=(w,D=.9,A=0)=>new Ut({color:w,roughness:D,metalness:A}),G=(w,D,A,O,re=.9)=>new Ae(new Mn(w,D,A),j(O,re)),U=[],te=[],ae=[],xe=[],ke=.62,it=(w,D,A,O,re=0,$=.12)=>xe.push({kind:"rect",x:w,z:D,w:A+$*2,d:O+$*2,rot:re}),et=(w,D,A,O=.12)=>xe.push({kind:"circle",x:w,z:D,r:A+O}),ye=(w,D,A,O,re,$=.12)=>xe.push({kind:"segment",x1:w,z1:D,x2:A,z2:O,r:re+$}),ne=(w,D,A)=>{if(A.kind==="circle")return Math.hypot(w-A.x,D-A.z)<A.r+ke;if(A.kind==="rect"){const ce=Math.cos(A.rot),nt=Math.sin(A.rot),Qe=w-A.x,Ct=D-A.z,bt=ce*Qe-nt*Ct,kt=nt*Qe+ce*Ct,jt=Math.max(-A.w/2,Math.min(A.w/2,bt)),Ir=Math.max(-A.d/2,Math.min(A.d/2,kt));return Math.hypot(bt-jt,kt-Ir)<ke}const O=A.x2-A.x1,re=A.z2-A.z1,$=O*O+re*re,fe=$>0?Math.max(0,Math.min(1,((w-A.x1)*O+(D-A.z1)*re)/$)):0,de=A.x1+O*fe,Pe=A.z1+re*fe;return Math.hypot(w-de,D-Pe)<A.r+ke},oe=(w,D)=>xe.some(A=>ne(w,D,A)),Oe=(w,D,A)=>{const O=Math.max(-88,Math.min(88,D)),re=Math.max(-89,Math.min(89,A));if(!oe(O,re)){w.x=O,w.z=re;return}oe(O,w.z)||(w.x=O),oe(w.x,re)||(w.z=re)},qe=j(3425343,1);for(let w=0;w<22;w++){const D=new pt,A=-105+w*10,O=8+Le(w,7)*9,re=new Ae(new ai(O,18+Le(w,8)*16,7),qe);re.position.y=8,D.add(re),D.position.set(A,-1,-94+Le(w,9)*11),q(D)}const Be=[];for(let w=0;w<=24;w++){const D=-94+w*8,A=-57+Math.sin(w*.55)*3.6;Be.push(new k(A,y(A,D)-.05,D))}const ct=new kf(Be),Xt=new Ec(ct,64,5.8,8,!1),I=new Ae(Xt,new Ut({color:2576218,roughness:.2,metalness:.05,transparent:!0,opacity:.9}));I.scale.y=.025,I.position.y=.05,I.receiveShadow=!0,g.add(I);for(let w=0;w<50;w++){const D=-92+w*3.7,A=-57+Math.sin(w*.55)*3.6,O=.35+Le(w,15)*.6,re=new Ae(new zn(O,1),j(6185562,1));re.scale.y=.55,re.position.set(A+(Le(w,16)-.5)*10,y(A,D)+.25,D),q(re),et(re.position.x,re.position.z,O*.9,.03)}const lt=(w,D)=>{const A=w.map(([de,Pe])=>new k(de,y(de,Pe)+.035,Pe)),O=[],re=[];for(let de=0;de<A.length;de++){const Pe=A[Math.max(0,de-1)],ce=A[Math.min(A.length-1,de+1)],nt=ce.x-Pe.x,Qe=ce.z-Pe.z,Ct=Math.max(.001,Math.hypot(nt,Qe)),bt=-Qe/Ct,kt=nt/Ct;if(O.push(A[de].x+bt*D/2,A[de].y,A[de].z+kt*D/2,A[de].x-bt*D/2,A[de].y+.01,A[de].z-kt*D/2),de<A.length-1){const jt=de*2;re.push(jt,jt+1,jt+2,jt+1,jt+3,jt+2)}}const $=new dn;$.setAttribute("position",new wt(O,3)),$.setIndex(re),$.computeVertexNormals();const fe=new Ae($,new Ut({map:M("road"),roughness:1}));fe.receiveShadow=!0,g.add(fe),[-D*.22,D*.22].forEach(de=>{const Pe=A.map((Qe,Ct)=>{const bt=A[Math.max(0,Ct-1)],kt=A[Math.min(A.length-1,Ct+1)],jt=kt.x-bt.x,Ir=kt.z-bt.z,_o=Math.max(.001,Math.hypot(jt,Ir));return new k(Qe.x+-Ir/_o*de,Qe.y+.045,Qe.z+jt/_o*de)}),ce=new Ec(new kf(Pe),Math.max(12,A.length*4),.055,5,!1),nt=new Ae(ce,j(3352863,1));nt.scale.y=.12,g.add(nt)})};lt([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),lt([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),lt([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),lt([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),lt([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),lt([[4,14],[-3,22],[-7,31],[-8,42]],3.8),lt([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),lt([[4,14],[10,28],[18,41],[27,57]],3.8),lt([[5,31],[15,45],[27,57],[39,70]],3.7),lt([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),lt([[-39,-8],[-47,-12],[-53,-15]],3.4);const Je=M("wood");Je.repeat.set(2,1);const je=M("roof");je.repeat.set(2,2);const F=(w,D,A,O,re,$,fe,de,Pe)=>{const ce=new pt;ce.rotation.y=re,ce.position.set(w,y(w,D),D),ce.userData={id:fe,label:$};const nt=new Ut({color:5856085,roughness:1}),Qe=new Ut({map:Je,color:de,roughness:.92});j(2695193,1);const Ct=G(A+.7,.62,O+.7,5658706,1);Ct.position.y=.31,ce.add(Ct);const bt=new Ae(new Mn(A,3.55,O),Qe);bt.position.y=2.05,ce.add(bt);for(const hs of[-A*.46,A*.46])for(const za of[-O*.5,O*.5]){const xo=G(.34,3.9,.34,2760728,1);xo.position.set(hs,2.08,za),ce.add(xo)}const kt=G(1.18,2.15,.18,2365714,1);kt.position.set(0,1.35,O/2+.17),ce.add(kt);const jt=G(.14,2.35,.22,3811613,1),Ir=jt.clone();jt.position.set(-.67,1.42,O/2+.2),Ir.position.set(.67,1.42,O/2+.2),ce.add(jt,Ir);for(const hs of[-A*.27,A*.27]){const za=G(1.15,.95,.14,2760987,1);za.position.set(hs,2.18,O/2+.18),ce.add(za);const xo=new Ae(new Mn(.88,.68,.06),new Ut({color:15775837,emissive:14186786,emissiveIntensity:1.8,roughness:.35}));xo.position.set(hs,2.18,O/2+.255),ce.add(xo);const tp=G(.07,.76,.12,2760987,1);tp.position.set(hs,2.18,O/2+.3),ce.add(tp);const np=G(1,.07,.12,2760987,1);np.position.set(hs,2.18,O/2+.3),ce.add(np)}const _o=new Ut({map:je,color:Pe,roughness:.98,side:wi}),Oa=new Ae(new es(A*.82,O+1),_o),ka=new Ae(new es(A*.82,O+1),_o);Oa.rotation.x=Math.PI/2,ka.rotation.x=Math.PI/2,Oa.rotation.z=.62,ka.rotation.z=-.62,Oa.position.set(-A*.22,4.22,0),ka.position.set(A*.22,4.22,0),ce.add(Oa,ka);const Jh=G(.3,.28,O+1.08,2826523,1);Jh.position.y=5.08,ce.add(Jh);const Zh=G(A*.34,.16,1,6439467,1);Zh.position.set(0,.68,O/2+.54),ce.add(Zh);const Qh=new Ae(new Mn(.62,2,.62),nt);Qh.position.set(A*.24,5.15,-O*.08),ce.add(Qh);const ep=G(.82,.12,.82,3486254,1);ep.position.set(A*.24,6.17,-O*.08),ce.add(ep),q(ce,fe,$),U.push(ce),it(w,D,A+.85,O+.85,re,.05)};F(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),F(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),F(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),F(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),F(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),F(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const me=new pt;me.position.set(-10,y(-10,-5),-5),me.userData={id:"forge",label:"Кузница"};const ie=G(9,3.8,6,5126701,1);ie.position.y=1.9,me.add(ie);const Se=G(2.8,3.6,.28,2760986,1);Se.position.set(-3.1,1.9,3.05),me.add(Se);const He=new Ae(new Mn(5.5,.24,6.7),new Ut({map:je,color:2433826,roughness:1}));He.rotation.z=.58,He.position.set(-2,4.2,0),me.add(He);const Ye=He.clone();Ye.rotation.z=-.58,Ye.position.x=2,me.add(Ye);const P=G(2.2,1.8,1.7,3486512,1);P.position.set(-2,1,1.15),me.add(P);const E=new Ae(new Ks(.55,16),new Ut({color:16739364,emissive:16726795,emissiveIntensity:5}));E.rotation.y=Math.PI,E.position.set(-2,1.05,2.02),me.add(E);const X=G(1.4,.35,.55,2435114,.4);X.position.set(1.2,1.05,1.15),me.add(X);const Q=G(.5,.9,.5,2697770,.45);Q.position.set(1.2,.62,1.15),me.add(Q);for(let w=0;w<4;w++){const D=G(.09,1.35,.09,11184548,.35);D.position.set(2.1+w*.18,1.1,1.3),D.rotation.z=-.3+w*.18,me.add(D)}q(me,"forge","Кузница"),U.push(me),it(-10,-5,9.6,6.6,0,.05);const le=new wl(16742962,3.2,13,2);le.position.set(-12,y(-12,-5)+2.2,-4),g.add(le);const Z=new Ae(new Ks(8.5,32),new Ut({color:7035463,roughness:1}));Z.rotation.x=-Math.PI/2,Z.position.set(1,y(1,0)+.05,0),Z.receiveShadow=!0,g.add(Z);for(let w=0;w<18;w++){const D=w/18*Math.PI*2,A=new Ae(new zn(.38,1),j(7039843,1));A.position.set(1+Math.cos(D)*8.8,y(1+Math.cos(D)*8.8,Math.sin(D)*8.8)+.22,Math.sin(D)*8.8),g.add(A)}const Re=(w,D)=>{const A=new pt,O=G(2.8,.22,1,6832937,1);O.position.y=1.05,A.add(O);for(const re of[-1.05,1.05]){const $=G(.16,1,.16,3877149,1);$.position.set(re,.5,-.32),A.add($);const fe=$.clone();fe.position.z=.32,A.add(fe)}A.position.set(w,y(w,D),D),g.add(A)};Re(-4,2),Re(7,3);const ve=(w,D,A)=>{const O=new pt;O.position.set(w,y(w,D),D);for(let ce=0;ce<7;ce++){const nt=ce/7*Math.PI*2,Qe=new Ae(new zn(.32*A,1),j(6117970,1));Qe.position.set(Math.cos(nt)*.7*A,.25*A,Math.sin(nt)*.7*A),O.add(Qe)}const re=G(.2*A,.2*A,1.5*A,4861211,1),$=re.clone();re.rotation.y=.55,$.rotation.y=-.55,re.position.y=$.position.y=.38*A,O.add(re,$);const fe=new Ut({color:16744744,emissive:16731402,emissiveIntensity:4}),de=new Ae(new ai(.5*A,1.35*A,8),fe);de.position.y=1.02*A,O.add(de),g.add(O);const Pe=new wl(16747068,2.4*A,12*A,2);Pe.position.set(w,y(w,D)+2*A,D),g.add(Pe),te.push({light:Pe,flame:de,phase:Le(w,D)*8})};ve(1,0,1.15),ve(18,-15,.72);const Ne=(w,D,A,O,re=1.25)=>{const $=new pt,fe=A-w,de=O-D,Pe=Math.hypot(fe,de),ce=Math.max(1,Math.floor(Pe/1.55));for(let nt=0;nt<=ce;nt++){const Qe=nt/ce,Ct=w+fe*Qe,bt=D+de*Qe,kt=G(.18,re,.18,4796447,1);kt.position.set(Ct,y(Ct,bt)+re/2,bt),$.add(kt)}for(const nt of[-.28,.38]){const Qe=G(.14,.14,Pe,5978917,1);Qe.rotation.y=Math.atan2(fe,de),Qe.position.set((w+A)/2,y((w+A)/2,(D+O)/2)+re*nt,(D+O)/2),$.add(Qe)}g.add($),ye(w,D,A,O,.12,.02)},ze=(w,D,A,O,re,$,fe)=>{const de=new pt;de.position.set(w,y(w,D),D),de.rotation.y=re,de.userData={id:fe,label:$};const Pe=G(A+.25,.35,O+.25,5591368,1);Pe.position.y=.18,de.add(Pe);const ce=new Ae(new Mn(A,2.5,O),new Ut({map:Je,color:6439983,roughness:1}));ce.position.y=1.45,de.add(ce);const nt=new Ae(new Mn(A+.6,.18,O+.65),new Ut({map:je,color:2696996,roughness:1}));nt.rotation.z=.55,nt.position.set(-.16,3,0),de.add(nt);const Qe=nt.clone();Qe.rotation.z=-.55,Qe.position.x=.16,de.add(Qe);const Ct=G(1.05,1.75,.12,2759700,1);Ct.position.set(0,1.05,O/2+.07),de.add(Ct),q(de,fe,$),U.push(de),it(w,D,A+.55,O+.55,re,.04)},_e=(w,D,A=1)=>{const O=new pt;O.position.set(w,y(w,D),D);const re=new Ae(new ci(.65*A,.65*A,1.2*A,10),j(9073729,1));re.rotation.z=Math.PI/2,re.position.y=.62*A,O.add(re);for(let $=0;$<3;$++){const fe=new Ae(new Kn(.66*A,.025*A,5,18),j(5851693,1));fe.rotation.y=Math.PI/2,fe.position.y=(.28+$*.34)*A,O.add(fe)}q(O)},Ce=(w,D,A)=>{const O=new pt;O.position.set(w,y(w,D),D),O.rotation.y=A;const re=G(2.8,.28,1.45,6636331,1);re.position.y=1,O.add(re);for(const fe of[-1.15,1.15])for(const de of[-.55,.55]){const Pe=G(.16,1.15,.16,4401950,1);Pe.position.set(fe,.55,de),O.add(Pe)}for(const fe of[-1.15,1.15]){const de=new Ae(new ci(.5,.5,.18,14),j(2696738,1));de.rotation.z=Math.PI/2,de.position.set(fe,.52,-.92),O.add(de)}const $=G(.16,.16,2.4,4796447,1);$.rotation.x=Math.PI/2,$.position.set(0,.72,-2),O.add($),q(O)},Ke=(w,D,A=0)=>{const O=new pt;O.position.set(w,y(w,D),D),O.rotation.y=A;const re=G(2.2,.16,.5,7359021,1);re.position.y=.85,O.add(re);for(const $ of[-.78,.78]){const fe=G(.12,.8,.12,4139549,1);fe.position.set($,.4,0),O.add(fe)}q(O)},Ve=(w,D)=>{const A=new pt;A.position.set(w,y(w,D),D);for(let fe=0;fe<10;fe++){const de=fe/10*Math.PI*2,Pe=G(.45,.38,.38,6710621,1);Pe.position.set(Math.cos(de)*.95,.19,Math.sin(de)*.95),Pe.rotation.y=de,A.add(Pe)}const O=G(.16,2.2,.16,4861984,1),re=O.clone();O.position.set(-.9,1.2,0),re.position.set(.9,1.2,0),A.add(O,re);const $=G(2,.16,.16,3876891,1);$.position.y=2.25,A.add($),q(A)};ze(-19,31,8,5,.08,"Амбар","barn"),ze(17,34,7,5,-.2,"Сарай","shed"),ze(27,13,6,4,.45,"Склад рыбака","fishshed"),Ne(-25,27,-13,27),Ne(-25,27,-25,38),Ne(-25,38,-14,38),Ne(12,29,25,29),Ne(25,29,25,40),Ne(25,40,12,40),Ne(29,-1,39,-1),Ne(39,-1,39,10),Ne(39,10,30,10);for(const w of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])_e(w[0],w[1],w[2]);Ce(-17,24,.18),Ce(29,-5,-.55),Ke(-20,23,.18),Ke(25,31,-.2),F(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),F(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),F(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),F(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),it(-31,8,7.8,5.8,.1,.04),it(-27,20,7.8,5.8,-.25,.04),it(31,18,7.8,5.8,.32,.04),it(20,24,7.8,5.8,-.12,.04);const Ee=(w,D,A)=>{const O=new pt;O.position.set(w,y(w,D),D),O.rotation.y=A;const re=G(3,.18,1.25,7357994,1);re.position.y=1.45,O.add(re);for(const fe of[-1.25,1.25])for(const de of[-.48,.48]){const Pe=G(.13,1.45,.13,4270877,1);Pe.position.set(fe,.72,de),O.add(Pe)}const $=new Ae(new ai(1.65,2.5,4,1,!1,Math.PI/4),j(4798510,1));$.scale.z=.55,$.position.y=2.15,O.add($),q(O)};Ee(-5,-7,.12),Ee(8,-5,-.18),Ee(6,7,.5);for(const w of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])Ve(w[0],w[1]);const rt=(w,D,A=1)=>{const O=new pt,re=y(w,D);for(let $=0;$<5;$++){const fe=new Ae(new gr((.28+Le($,w)*.18)*A,8,6),j($%2?3494457:4284223,1));fe.position.set((Le($,2)-.5)*.7*A,.28*A,(Le($,3)-.5)*.7*A),O.add(fe)}O.position.set(w,re,D),q(O)};for(let w=0;w<48;w++){const D=Le(w,501)*Math.PI*2,A=18+Le(w,502)*39,O=Math.cos(D)*A,re=Math.sin(D)*A+4;Math.abs(O)<9&&Math.abs(re)<14||rt(O,re,.65+Le(w,503)*.75)}for(let w=0;w<34;w++){const D=-84+Le(w,610)*168,A=-82+Le(w,611)*164;if(Math.hypot(D,A-2)<24)continue;const O=.25+Le(w,612)*.55,re=new Ae(new zn(O,1),j(5725013,1));re.scale.y=.55,re.position.set(D,y(D,A)+O*.28,A),re.rotation.set(Le(w,613),Le(w,614),Le(w,615)),q(re),et(D,A,O*.8,.03)}F(-64,36,8,5,.12,"Старый дом","oldfarm",6505263,2828582),ze(-58,42,6,4,-.12,"Старый амбар","oldbarn"),Ne(-70,32,-60,32),Ne(-70,32,-70,43),Ne(-70,43,-61,43),_e(-67,39,.9),Ce(-61,33,-.25),Ve(-57,34);const z=new pt;z.position.set(-63,y(-63,47),47);for(let w=0;w<6;w++){const D=G(10,.035,.12,4208682,1);D.position.set(0,.02,(w-2.5)*1.05),D.rotation.y=.06,z.add(D)}q(z);const ue=new pt;ue.position.set(39,y(39,70),70),ue.userData={id:"runefield",label:"Поле Рун"};const Me=j(5593942,1),Ue=new Ut({color:12163675,emissive:6833949,emissiveIntensity:1.6,roughness:.62});for(let w=0;w<11;w++){const D=Le(w,1201)*Math.PI*2,A=3.5+Le(w,1202)*8,O=new Ae(new zn(.65+Le(w,1203)*.38,1),Me);O.scale.y=1.4+Le(w,1204)*1.5,O.position.set(Math.cos(D)*A,O.scale.y*.48,Math.sin(D)*A),O.rotation.set(Le(w,1205),D,Le(w,1206)),ue.add(O);const re=new Ae(new Mn(.11,.035,.72),Ue);re.position.set(O.position.x,O.position.y+.55,O.position.z),re.rotation.y=-D+.45,ue.add(re)}for(let w=0;w<5;w++){const D=G(.22,1.8,.22,4861984,1);D.position.set(-6+w*3,.9,7.5),ue.add(D);const A=new Ae(new Kn(.34,.035,6,18),Ue);A.rotation.x=Math.PI/2,A.position.set(-6+w*3,1.55,7.5),ue.add(A)}const he=new pt;for(let w=0;w<7;w++){const D=w/7*Math.PI*2,A=new Ae(new zn(.3,1),j(5591885,1));A.position.set(Math.cos(D)*.65,.22,Math.sin(D)*.65),he.add(A)}ue.add(he),q(ue,"runefield","Поле Рун"),U.push(ue),et(39,70,1,.08);const se=(w,D,A,O)=>{const re=new pt,$=A-w,fe=O-D,de=Math.hypot($,fe),Pe=Math.floor(de/1.7);for(let nt=0;nt<=Pe;nt++){const Qe=nt/Pe,Ct=w+$*Qe,bt=D+fe*Qe,kt=new Ae(new ai(.24,.24+2.8+Le(nt,w)*.5,6),j(3942940,1));kt.position.set(Ct,y(Ct,bt)+1.45,bt),re.add(kt)}const ce=G(.3,.35,de,2957593,1);ce.rotation.y=Math.atan2($,fe),ce.position.set((w+A)/2,y((w+A)/2,(D+O)/2)+1.25,(D+O)/2),re.add(ce),g.add(re),ye(w,D,A,O,.34,.08)};se(-30,-31,-8,-31),se(8,-31,30,-31),se(-30,-31,-30,-13),se(30,-31,30,16);const Ie=new pt;Ie.userData={id:"gate",label:"Ворота Мидгарда"};for(const w of[-4.2,4.2]){const D=G(.8,6,.8,3482906,1);D.position.set(w,3,-31),Ie.add(D)}const tt=G(10,.8,1,2957336,1);tt.position.set(0,6,-31),Ie.add(tt);for(let w=-3;w<=3;w++){const D=G(1,4.2,.22,5978660,1);D.position.set(w*1.15,2,-30.7),Ie.add(D)}q(Ie,"gate","Ворота Мидгарда"),U.push(Ie),et(-4.2,-31,.55,.05),et(4.2,-31,.55,.05);const ut=new pt;ut.userData={id:"mimir",label:"Колодец Мимира"},ut.position.set(18,y(18,15),15);for(let w=0;w<14;w++){const D=w/14*Math.PI*2,A=G(.7,.48,.5,6711907,1);A.position.set(Math.cos(D)*1.45,.24,Math.sin(D)*1.45),A.rotation.y=D+Math.PI/2,ut.add(A)}const gt=new Ae(new Ks(1.05,28),new Ut({color:1522499,emissive:733496,emissiveIntensity:1.8,roughness:.18}));gt.rotation.x=-Math.PI/2,gt.position.y=.5,ut.add(gt);for(const w of[-1.35,1.35]){const D=G(.22,3,.22,4861984,1);D.position.set(w,1.55,0),ut.add(D)}const Yn=G(3.1,.25,.25,3679513,1);Yn.position.y=2.95,ut.add(Yn);const Un=G(.55,.5,.55,5913383,1);Un.position.set(0,1.65,0),ut.add(Un);const us=new Ae(new Kn(1.8,.06,8,40),new Ut({color:7792028,emissive:2653256,emissiveIntensity:3}));us.rotation.x=Math.PI/2,us.position.y=.53,ut.add(us),q(ut,"mimir","Колодец Мимира"),U.push(ut),et(18,15,1.8,.08);const _i=new wl(7530656,1.8,10,2);_i.position.set(18,y(18,15)+1.4,15),g.add(_i);const qn=new pt;qn.userData={id:"norns",label:"Прядильня норн"},qn.position.set(-25,y(-25,43),43);for(let w=0;w<3;w++){const D=new Ae(new Ma(.65,2.3,5,8),j(5725529,1));D.position.set((w-1)*2.2,1.35,0),D.rotation.z=(w-1)*.07,qn.add(D);const A=new Ae(new Kn(.42,.055,7,20),new Ut({color:[13100495,13149416,14795380][w],emissive:[6134129,7490961,9268264][w],emissiveIntensity:2.2}));A.rotation.x=Math.PI/2,A.position.set((w-1)*2.2,1.6,-.55),qn.add(A)}const Da=new i_({color:13944039,transparent:!0,opacity:.78});for(let w=0;w<2;w++){const D=[new k((w-1)*2.2,2,.1),new k((w-.5)*2.2,4.1,-.7),new k(w*2.2,2,.1)];qn.add(new iS(new dn().setFromPoints(D),Da))}const ds=new Ae(new Kn(4.1,.07,8,48),new Ut({color:12429522,emissive:6113136,emissiveIntensity:1.5}));ds.rotation.x=Math.PI/2,ds.position.y=.05,qn.add(ds),q(qn,"norns","Прядильня норн"),U.push(qn),et(-25,43,3,.1);const xi=-43,Zi=62,Fn=new pt;Fn.userData={id:"ritual",label:"Круг Силы"},Fn.position.set(xi,y(xi,Zi),Zi);const Na=j(6711651,1),Ia=j(5593685,1);for(let w=0;w<2;w++){const D=w===0?18:12,A=w===0?6.2:3.65;for(let O=0;O<D;O++){const re=O/D*Math.PI*2+w*.12,$=A+(Le(O,930+w)*.5-.25),fe=.42+Le(O,940+w)*.48,de=new Ae(new zn(.55+Le(O,950+w)*.28,1),w===0?Na:Ia);de.scale.y=.65+fe*.35,de.position.set(Math.cos(re)*$,fe*.45,Math.sin(re)*$),de.rotation.set(Le(O,960+w),re+Le(O,970+w),Le(O,980+w)),Fn.add(de)}}const go=new Ae(new zn(1.05,1),j(5593428,1));go.scale.set(1.25,.62,1.05),go.position.y=.5,Fn.add(go);for(const w of[2.1,3.15,5.15]){const D=new Ae(new Kn(w,.045,7,64),new Ut({color:9219739,emissive:3496777,emissiveIntensity:1.4,transparent:!0,opacity:.72}));D.rotation.x=Math.PI/2,D.position.y=.055,Fn.add(D)}const Wc=new Ut({color:13215838,emissive:9199384,emissiveIntensity:2.2,roughness:.5});for(let w=0;w<8;w++){const D=w/8*Math.PI*2,A=new Ae(new Mn(.13,.025,.65),Wc);A.position.set(Math.cos(D)*4.55,.075,Math.sin(D)*4.55),A.rotation.y=-D,Fn.add(A)}q(Fn,"ritual","Круг Силы"),U.push(Fn),et(xi,Zi,1.25,.06);const Ua=new wl(9226152,1.15,11,2);Ua.position.set(xi,y(xi,Zi)+1.6,Zi),g.add(Ua);const Qi=new pt;Qi.userData={id:"rune",label:"Древний камень Феху"},Qi.position.set(27,y(27,57),57);const Fa=new Ae(new zn(1.45,1),j(5002063,1));Fa.position.y=1.2,Qi.add(Fa);const vo=new Ae(new Kn(1.05,.07,8,30),new Ut({color:16766826,emissive:10052371,emissiveIntensity:3}));vo.rotation.x=Math.PI/2,vo.position.y=1.2,Qi.add(vo),q(Qi,"rune","Древний камень Феху"),U.push(Qi),et(27,57,1.7,.1);const T=new pt;T.userData={id:"port",label:"Мост к причалу"};for(let w=-5;w<=5;w++){const D=G(3.6,.28,.82,6307882,1);D.position.set(-53,y(-53,w*1)+.5,w),T.add(D)}q(T,"port","Мост к причалу"),U.push(T);const H=new pt;H.position.set(-46,y(-46,-15),-15);for(let w=0;w<7;w++){const D=G(2.8,.24,.72,7030573,1);D.position.set(0,.3,w*.85),H.add(D)}for(const w of[-1.2,1.2])for(let D=0;D<3;D++){const A=G(.22,1.5,.22,4139292,1);A.position.set(w,-.2,D*2.5),H.add(A)}const K=G(2.2,.55,4.8,4926493,1);K.position.set(3,-.15,2.5),H.add(K),q(H,"port","Речной причал"),U.push(H);const J=(w,D)=>{const A=new Ae(new ci(.5,.5,1,12),j(6636332,1));A.position.set(w,y(w,D)+.5,D),g.add(A);for(const O of[.25,.76]){const re=new Ae(new Kn(.51,.045,6,18),j(3156004,.7,.1));re.rotation.x=Math.PI/2,re.position.set(w,y(w,D)+O,D),g.add(re)}},W=(w,D)=>{const A=G(1,.75,1,7359022,1);A.position.set(w,y(w,D)+.38,D),g.add(A);const O=G(.08,.82,1.05,3679770,1);O.position.set(w,y(w,D)+.38,D),g.add(O),it(w,D,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([w,D])=>J(w,D)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([w,D])=>W(w,D));const ge=(w,D,A)=>{const O=new pt,re=y(w,D),$=j(3680287,1),fe=new Ae(new ci(.18*A,.34*A,4.6*A,10),$);fe.position.y=2.3*A,fe.rotation.z=(Le(w,D)-.5)*.045,O.add(fe);for(let Pe=0;Pe<5;Pe++){const ce=new Ae(new ci(.045*A,.095*A,(1.15+Pe*.16)*A,7),$);ce.position.set((Le(Pe,w)-.5)*.45*A,(1.25+Pe*.58)*A,(Le(Pe,D)-.5)*.38*A),ce.rotation.z=(Le(Pe+10,w)-.5)*.45,ce.rotation.y=Le(Pe+20,D)*Math.PI*2,O.add(ce)}const de=[1979432,2573361,2968886,3430461,2309165];for(let Pe=0;Pe<6;Pe++){const nt=(1.55-.72*(Pe/5))*A,Qe=new Ae(new ai(nt,.95*A,9,1),j(de[Pe%de.length],1));Qe.scale.x=.88+Le(Pe,w)*.18,Qe.scale.z=.84+Le(Pe,D)*.2,Qe.position.set((Le(Pe*4,w)-.5)*.28*A,(2.05+Pe*.62)*A,(Le(Pe*5,D)-.5)*.28*A),Qe.rotation.y=Le(Pe+40,w)*Math.PI*2,O.add(Qe)}if(A>1.15)for(let Pe=0;Pe<3;Pe++){const ce=new Ae(new ai(.62*A,.7*A,8),j(de[(Pe+2)%de.length],1));ce.position.set((Pe-1)*.38*A,.72*A,(Le(Pe,D)-.5)*.3*A),ce.rotation.y=Le(Pe+70,w)*Math.PI*2,O.add(ce)}O.position.set(w,re,D),q(O),A>=1.15&&et(w,D,.42*A,.04)},we=(w,D,A,O=!1)=>{const re=new pt,$=y(w,D),fe=j(O?4207145:4863015,1),de=new Ae(new ci(.32*A,.52*A,5.8*A,11),fe);de.position.y=2.9*A,de.rotation.z=(Le(w,D)-.5)*.035,re.add(de);const Pe=O?8:6;for(let ce=0;ce<Pe;ce++){const nt=ce/Pe*Math.PI*2+Le(ce,w)*.25,Qe=(1.65+Le(ce+30,D)*1.35)*A,Ct=new Ae(new ci(.075*A,.16*A,Qe,8),fe);Ct.position.set(Math.cos(nt)*Qe*.34,(3.35+Le(ce+40,w)*1.25)*A,Math.sin(nt)*Qe*.34),Ct.rotation.z=Math.cos(nt)*.78,Ct.rotation.x=Math.sin(nt)*.78,Ct.rotation.y=-nt,re.add(Ct);for(let bt=0;bt<3;bt++){const kt=new Ae(new gr((.42+Le(bt+ce,90)*.22)*A,8,6),j(bt%2?4808772:3888955,1)),jt=.55+bt*.18;kt.position.set(Math.cos(nt)*Qe*.62+(Le(bt,ce)-.5)*.35*A,(3.55+Le(ce,bt)*1.15+jt)*A,Math.sin(nt)*Qe*.62+(Le(bt+4,ce)-.5)*.35*A),kt.scale.y=.72,re.add(kt)}}for(let ce=0;ce<(O?7:4);ce++){const nt=Le(ce+100,w)*Math.PI*2,Qe=new Ae(new ci(.025*A,.055*A,(.9+Le(ce,D)*.7)*A,6),fe);Qe.position.set(Math.cos(nt)*1.05*A,(3.15+Le(ce+5,w)*1.5)*A,Math.sin(nt)*1.05*A),Qe.rotation.z=(Le(ce+8,D)-.5)*.35,re.add(Qe)}re.position.set(w,$,D),q(re),A>=1.2&&et(w,D,.62*A,.04)},De=-4,Te=69,$e=new pt;$e.userData={id:"ashgrove",label:"Роща Ясеня"};const Ze=[[-5,2,1.65,!1],[-1,1,1.45,!1],[-7,4,1.25,!1],[1,5,1.3,!1],[-2,7,2.05,!0],[4,3,1.15,!1]];for(const[w,D,A,O]of Ze)we(De+w,Te+D,A,O);for(let w=0;w<9;w++){const D=w/9*Math.PI*2,A=4.2+Le(w,1301)*2,O=new Ae(new zn(.48+Le(w,1302)*.24,1),j(5725014,1));O.position.set(De+Math.cos(D)*A,y(De+Math.cos(D)*A,Te+Math.sin(D)*A)+.35,Te+Math.sin(D)*A),O.scale.y=1.3+Le(w,1303)*.7,O.rotation.set(Le(w,1304),D,Le(w,1305)),q(O)}const Ge=new Ae(new Kn(5.7,.055,7,64),new Ut({color:9214840,emissive:3755313,emissiveIntensity:1.1,transparent:!0,opacity:.62}));Ge.rotation.x=Math.PI/2,Ge.position.set(De,y(De,Te)+.045,Te),g.add(Ge);const ot=new Ae(new zn(1,1),j(5199441,1));ot.position.set(De,y(De,Te)+.75,Te),ot.scale.y=1.5,g.add(ot);const xt=new Ae(new Kn(.62,.05,7,24),new Ut({color:12757607,emissive:6637341,emissiveIntensity:1.7}));xt.rotation.x=Math.PI/2,xt.position.set(De,y(De,Te)+1.45,Te),g.add(xt),U.push($e),et(De,Te,1,.08);for(let w=0;w<95;w++){const D=Le(w,77)*Math.PI*2,A=58+Le(w,91)*32,O=Math.cos(D)*A,re=Math.sin(D)*A+2,fe=[[De,Te,11],[39,70,13],[-64,36,11],[-43,62,10]].some(([de,Pe,ce])=>Math.hypot(O-de,re-Pe)<ce);Math.abs(O+57)>9&&!fe&&ge(O,re,.78+Le(w,13)*.82)}we(-10,18,1.55,!1),we(13,24,1.7,!1),we(-31,-12,2.15,!0);for(let w=0;w<110;w++){const D=Le(w,701)*Math.PI*2,A=15+Le(w,702)*50,O=Math.cos(D)*A,re=Math.sin(D)*A+3;if(Math.abs(O)<10&&Math.abs(re)<16)continue;const $=new pt;$.position.set(O,y(O,re),re);for(let fe=0;fe<3;fe++){const de=new Ae(new ai(.025,.38+Le(fe,w)*.28,4),j(fe===1?5466175:4282935,1));de.position.set((fe-1)*.09,.18,(Le(fe*3,w)-.5)*.12),de.rotation.z=(fe-1)*.22,$.add(de)}g.add($)}for(let w=0;w<80;w++){const D=-88+Le(w,101)*176,A=-88+Le(w,111)*176;if(Math.hypot(D,A+2)>30){const O=new Ae(new ai(.08,.55+Le(w,121)*.7,5),j(4941888,1));O.position.set(D,y(D,A)+.3,A),g.add(O)}}const Mt=new pt;Mt.position.set(29,y(29,25),25),Mt.userData={id:"tower",label:"Сторожевая башня"};for(const w of[-2,2])for(const D of[-2,2]){const A=G(.35,7,.35,3942685,1);A.position.set(w,3.5,D),Mt.add(A)}const At=G(5,.35,5,6833965,1);At.position.y=5.8,Mt.add(At);const Et=new Ae(new ai(3.8,2.7,4),j(2696482,1));Et.position.y=8,Mt.add(Et),q(Mt,"tower","Сторожевая башня"),U.push(Mt),it(29,25,4.8,4.8,0,.08);const We=(w,D,A,O,re,$)=>{const fe=new pt;fe.userData={id:A,label:O,phase:$,baseX:w,baseZ:D};const de=new Ae(new Ma(.32,.78,4,8),j(re,.9));de.position.y=.85,fe.add(de);const Pe=new Ae(new gr(.25,12,8),j(13210736,.9));Pe.position.y=1.58,fe.add(Pe);const ce=G(.7,.9,.15,2565407,1);ce.position.set(0,.82,-.27),fe.add(ce),fe.position.set(w,y(w,D),D),q(fe,A,O),U.push(fe),ae.push(fe)};We(9,-8,"elder","Старейшина",7558719,.4),We(-6,-3,"blacksmith","Кузнец",6044459,1.5),We(21,1,"hunter","Охотник",4215359,2.4),We(5,10,"villager","Житель Мидгарда",5858125,3.4),We(-16,4,"villager2","Житель деревни",6638394,4.2);const Dt=new Vc({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),ht=new pt;for(let w=0;w<34;w++){const D=new Ae(new gr(.9+Le(w,810)*2.2,8,6),Dt);D.position.set(-88+Le(w,811)*176,1.8+Le(w,812)*2.2,-72+Le(w,813)*144),ht.add(D)}g.add(ht);const sn=gT(t);g.add(sn);const Di=new AS,on=new Xe,er=w=>{var O,re,$,fe;if((re=(O=w.target)==null?void 0:O.closest)!=null&&re.call(O,".mid3d-ui"))return;const D=C.domElement.getBoundingClientRect();on.x=(w.clientX-D.left)/D.width*2-1,on.y=-((w.clientY-D.top)/D.height)*2+1,Di.setFromCamera(on,_);const A=Di.intersectObjects(U,!0)[0];if(A){let de=A.object;for(;de.parent&&!(($=de.userData)!=null&&$.id);)de=de.parent;(fe=de.userData)!=null&&fe.id&&e(de.userData.id)}};C.domElement.addEventListener("pointerup",er);const Nt=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:18,z:15,r:4.8},{id:"norns",label:"Прядильня норн",x:-25,z:43,r:5.4},{id:"rune",label:"Древний камень Феху",x:27,z:57,r:4.5},{id:"ritual",label:"Круг Силы",x:-43,z:62,r:6.8},{id:"port",label:"Речной причал",x:-46,z:-15,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-4,z:69,r:7.5},{id:"runefield",label:"Поле Рун",x:39,z:70,r:8},{id:"oldfarm",label:"Старый хутор",x:-64,z:36,r:6},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],_n=()=>{const w=Math.max(1,m.clientWidth),D=Math.max(1,m.clientHeight);_.aspect=w/D,_.updateProjectionMatrix(),C.setSize(w,D,!1)};_n();const xn=new ResizeObserver(_n);xn.observe(m);let $t=0,an=performance.now();const fs=w=>{const D=Math.min(.05,(w-an)/1e3);an=w;const A=s.current,O=Math.hypot(A.dx,A.dz);if(O>.05){const ce=6.2*D;Oe(A,A.x+A.dx/O*ce,A.z+A.dz/O*ce),sn.rotation.y=Math.atan2(A.dx,A.dz),h.current.x=A.dx/O,h.current.z=A.dz/O,c(!0)}else c(!1);const re=y(A.x,A.z);sn.position.set(A.x,re+.04,A.z);const $=h.current,fe=new k(A.x-$.x*2,re+7.2,A.z-$.z*2+11.8);_.position.lerp(fe,.055),_.lookAt(A.x+$.x*1.9,re+1.2,A.z+$.z*1.9);let de="",Pe="";for(const ce of Nt)if(Math.hypot(A.x-ce.x,A.z-ce.z)<ce.r){de=ce.label,Pe=ce.id;break}a(de?`${de}|${Pe}`:""),te.forEach(ce=>{ce.light.intensity=2+Math.sin(w*.012+ce.phase)*.5,ce.flame.scale.y=.9+Math.sin(w*.009+ce.phase)*.12}),ht.children.forEach((ce,nt)=>{ce.position.x+=Math.sin(w*12e-5+nt)*.003,ce.position.z+=Math.cos(w*1e-4+nt)*.002}),ae.forEach((ce,nt)=>{const Qe=ce.userData.phase||0,Ct=ce.userData.baseX,bt=ce.userData.baseZ,kt=Ct+Math.sin(w*28e-5+Qe)*1.6,jt=bt+Math.cos(w*22e-5+Qe)*1.1;ce.position.set(kt,y(kt,jt),jt),ce.rotation.y=Math.sin(w*4e-4+Qe)*.5}),C.render(g,_),$t=requestAnimationFrame(fs)};return $t=requestAnimationFrame(fs),()=>{cancelAnimationFrame($t),xn.disconnect(),C.domElement.removeEventListener("pointerup",er),N.dispose(),Je.dispose(),je.dispose(),C.dispose(),g.traverse(w=>{var D,A,O,re;w.isMesh&&((A=(D=w.geometry)==null?void 0:D.dispose)==null||A.call(D),Array.isArray(w.material)?w.material.forEach($=>{var fe;return(fe=$.dispose)==null?void 0:fe.call($)}):(re=(O=w.material)==null?void 0:O.dispose)==null||re.call(O))}),C.domElement.remove()}},[t.id,e]);const p=m=>{const g=i.current,_=r.current;if(!g||!_)return;const C=g.getBoundingClientRect(),b=C.left+C.width/2,R=C.top+C.height/2,L=48;let y=m.clientX-b,M=m.clientY-R;const N=Math.hypot(y,M);N>L&&(y=y/N*L,M=M/N*L),_.style.transform=`translate(${y}px,${M}px)`,s.current.dx=y/L,s.current.dz=M/L},x=()=>{r.current&&(r.current.style.transform="translate(0,0)"),s.current.dx=0,s.current.dz=0},S=m=>{var M,N;const g=i.current;if(!g)return;const _=m.target;if((M=_.closest)!=null&&M.call(_,".mid3d-action")||(N=_.closest)!=null&&N.call(_,".mid3d-interact"))return;const C=g.getBoundingClientRect(),b=26;m.clientX>=C.left-b&&m.clientX<=C.right+b&&m.clientY>=C.top-78&&m.clientY<=C.bottom+26&&(m.currentTarget.setPointerCapture(m.pointerId),p(m))},v=m=>{m.currentTarget.hasPointerCapture(m.pointerId)&&p(m)},u=m=>{m.currentTarget.hasPointerCapture(m.pointerId)&&m.currentTarget.releasePointerCapture(m.pointerId),x()};return B.jsxs("div",{className:"content mid3d-scene",ref:n,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:S,onPointerMove:v,onPointerUp:u,onPointerCancel:u,onContextMenu:m=>m.preventDefault(),children:[B.jsxs("div",{className:"mid3d-ui mid3d-top",children:[B.jsxs("div",{className:"mid3d-pill",children:[B.jsx("b",{children:"МИДГАРД"}),B.jsx("span",{children:"Деревня • река • лес • святилища"})]}),B.jsxs("div",{className:"mid3d-pill",children:[B.jsx("b",{children:"ᛟ"}),B.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),f&&B.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[B.jsx("b",{children:"🜂 Круг Силы"}),B.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),B.jsx("button",{onPointerDown:m=>m.stopPropagation(),onClick:()=>{d(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),B.jsx("button",{onPointerDown:m=>m.stopPropagation(),onClick:()=>{d(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),B.jsx("button",{onPointerDown:m=>m.stopPropagation(),onClick:()=>{d(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),B.jsx("button",{onPointerDown:m=>m.stopPropagation(),onClick:()=>{d(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),B.jsx("button",{onPointerDown:m=>m.stopPropagation(),onClick:()=>{d(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),B.jsx("button",{onPointerDown:m=>m.stopPropagation(),onClick:()=>{d(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),o&&!f&&(()=>{const[m,g]=o.split("|");return B.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[B.jsx("b",{children:m}),B.jsx("span",{children:"Ты достаточно близко"}),B.jsx("button",{onPointerDown:_=>_.stopPropagation(),onClick:()=>g==="ritual"?d(!0):e(g),children:"Взаимодействовать"})]})})(),B.jsx("div",{className:"mid3d-ui mid3d-joy",ref:i,children:B.jsx("div",{className:"mid3d-knob",ref:r})}),B.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:m=>m.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),B.jsx("div",{className:"mid3d-ui mid3d-hint",children:l?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function _T(){const[t,e]=yt.useState(()=>_0().hero?{t:"tree"}:{t:"choose"}),[n,i]=yt.useState(_0),[r,s]=yt.useState(""),[o,a]=yt.useState(""),[l,c]=yt.useState(""),f=yt.useRef(0),[d,h]=yt.useState(null),[p,x]=yt.useState(null),[S,v]=yt.useState(!1),[u,m]=yt.useState(0),[g,_]=yt.useState(0),[C,b]=yt.useState(0),[R,L]=yt.useState(""),[y,M]=yt.useState(!1),[N,V]=yt.useState(!1),[Y,ee]=yt.useState(""),[q,j]=yt.useState(.06);yt.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),yt.useEffect(()=>{var F,me,ie,Se;(F=vt==null?void 0:vt.ready)==null||F.call(vt),(me=vt==null?void 0:vt.expand)==null||me.call(vt),(ie=vt==null?void 0:vt.setHeaderColor)==null||ie.call(vt,"#0b0f0c"),(Se=vt==null?void 0:vt.setBackgroundColor)==null||Se.call(vt,"#0b0f0c")},[]),yt.useEffect(()=>{if(!(vt!=null&&vt.BackButton))return;const F=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(vt.BackButton.show(),vt.BackButton.onClick(F)):vt.BackButton.hide(),()=>{var me,ie;(ie=(me=vt.BackButton)==null?void 0:me.offClick)==null||ie.call(me,F)}},[t,n.hero]),yt.useEffect(()=>{h(null),x(null),v(!1),ee(""),M(!1)},[t]);const G=F=>{c(F),window.clearTimeout(f.current),f.current=window.setTimeout(()=>c(""),1800)},U=(F="light")=>{var me,ie,Se,He;try{F==="success"?(ie=(me=vt==null?void 0:vt.HapticFeedback)==null?void 0:me.notificationOccurred)==null||ie.call(me,"success"):(He=(Se=vt==null?void 0:vt.HapticFeedback)==null?void 0:Se.impactOccurred)==null||He.call(Se,"light")}catch{}},te=F=>e(F),ae=F=>{U(),e({t:"realm",id:F.id})},xe=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),ke=()=>{const F=xe();if(F<=0){G("Дозор только начался — искры ещё копятся.");return}i(me=>({...me,sparks:me.sparks+F,watch:Date.now()})),U("success"),G("Дозор завершён: +"+F+" ✨")},it=()=>{if(n.gift===Uo())return;const me=(n.gift?Math.round((Date.parse(Uo())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,ie=ed[me-1];i(Se=>({...Se,sparks:Se.sparks+ie,gift:Uo(),streak:me})),U("success"),G("Дар Древа, день "+me+": +"+ie+" ✨")},et=()=>{!r||!o||(i(F=>({...F,hero:{id:r,name:o}})),U("success"),G("Путь начинается, "+o+"!"),e({t:"tree"}))},ye=n.hero?td.find(F=>F.id===n.hero.id):null,ne=F=>Math.floor(Math.random()*F),oe=F=>n.trials.filter(me=>me.startsWith(F+":")).length,Oe=F=>{if(n.artifacts.includes(F.id)){G("Мир покорён. Артефакт хранится в листе героя.");return}U(),e({t:"trial",id:F.id})},qe=(F,me,ie)=>{const Se=me===2;i(He=>({...He,sparks:He.sparks+ie+(Se?30:0),trials:[...He.trials,F+":"+me],artifacts:Se?[...He.artifacts,F]:He.artifacts})),Se&&(U("success"),G("Мир пройден! Артефакт: "+id[F]))},Be=(F,me)=>{if(d!==null)return;const ie=oe(F),Se=nd[F][ie];if(me===Se.c){h(me),U("success");const He=12+ie*3+((ye==null?void 0:ye.id)==="dwarf"?6:0);G("Верно! Сундук хозяина: +"+He+" ✨"),qe(F,ie,He);return}if(n.powers.includes("mimirEye")){h(Se.c),i(Ye=>({...Ye,powers:Ye.powers.filter(P=>P!=="mimirEye")}));const He=8+ie*2;U("success"),G("Око Мимира раскрыло истину. Ответ исправлен. +"+He+" ✨"),qe(F,ie,He);return}if(n.powers.includes("nornThread")){h(me),i(Ye=>({...Ye,powers:Ye.powers.filter(P=>P!=="nornThread")}));const He=6+ie*2;U("success"),G("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+He+" ✨"),qe(F,ie,He);return}h(me),U(),L(Fo[F].name+" мрачнеет: «Что ж — пусть решит сталь!»")},ct=F=>{const me=oe(F),ie=nd[F][me],Se=ie.a.findIndex((He,Ye)=>Ye!==ie.c&&Ye!==p);x(Se),v(!0),U(),G("Шёпот ветров уносит один ответ...")},Xt=F=>{const me=Fo[F],ie=n.powers.includes("ashBreath");m(me.hp),_(ye.hp+(ie?25:0)),b(ye.en+(ie?2:0)),ee(""),M(!1),V(!1),L(ie?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":me.name+" поднимает оружие!"),ie&&i(Se=>({...Se,powers:Se.powers.filter(He=>He!=="ashBreath")})),e({t:"fight",id:F})},I=(F,me)=>{if(Y)return;const ie=Fo[F],Se=oe(F);let He=0,Ye="",P=C,E=y;if(me==="hit"&&(He=ye.str+ne(4),n.powers.includes("fireOath")&&(He+=5,i(Re=>({...Re,powers:Re.powers.filter(ve=>ve!=="fireOath")})),Ye="Огненный обет! "),ye.id==="berserk"&&g<=ye.hp/2&&(He*=2,Ye+="Медвежья ярость! "),Ye+="Ты бьёшь: "+ye.weapon+" — −"+He+" хозяину."),me==="rune"){if(C<4){G("Мало энергии для заклинания!");return}P=C-4,He=ye.en+2+ne(5),Ye="Руническое заклинание вспыхивает: −"+He+" хозяину."}me==="shield"&&(E=!0,Ye="Ты поднимаешь щит — удар ослабнет.");const X=u-He;if(X<=0){m(0),b(P),ee("win");const Re=8+Se*2;L("Хозяин повержен! Награда: +"+Re+" ✨"),qe(F,Se,Re);return}let Q=ie.atk+ne(3),le="";E&&(Q=Math.ceil(Q*.3),le=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(Q=Math.ceil(Q*.65),i(Re=>({...Re,powers:Re.powers.filter(ve=>ve!=="iceOath")})),le+=" Ледяной обет сковал удар врага."),ye.id==="dwarf"&&(Q=Math.ceil(Q*.75));let Z=g;if(ye.id==="viking"&&!N&&Z-Q<=0&&(V(!0),Q=0,le=" Крылья бури поглотили смертельный удар!"),Z=Z-Q,m(X),_(Math.max(0,Z)),b(P),M(!1),Z<=0&&n.powers.includes("yggdrasilCall")){i(Re=>({...Re,powers:Re.powers.filter(ve=>ve!=="yggdrasilCall")})),_(30),L(Ye+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(Z<=0){ee("lose"),i(Re=>({...Re,sparks:Math.max(0,Re.sparks-10)})),L(Ye+" "+ie.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}L(Ye+le+" "+ie.name+" отвечает: −"+Q+".")},lt=F=>{oe(F)>=3||n.artifacts.includes(F)?e({t:"realm",id:F}):e({t:"trial",id:F})},Je=F=>F==="tree"?t.t==="tree"||t.t==="realm":t.t===F,je=F=>F==="tree"?{t:"tree"}:{t:F};return B.jsxs("div",{className:"app",children:[B.jsx("style",{children:pT}),B.jsxs("div",{className:"hdr",children:[t.t==="tree"&&B.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&B.jsx("button",{className:"back",onClick:()=>te({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&B.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&B.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&B.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&B.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&B.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&B.jsx("div",{className:"title",children:"⚔ Бой"}),B.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&B.jsxs("div",{className:"scroll choose-screen",children:[B.jsxs("div",{className:"card center choose-intro",children:[B.jsx("div",{className:"big",children:"ᛉ"}),B.jsx("div",{className:"qhead2",children:"Выбери героя"}),B.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),td.map(F=>B.jsxs("button",{className:"hcard"+(r===F.id?" on":""),onClick:()=>{s(F.id),a(""),U()},children:[B.jsx("span",{className:"hface",style:{borderColor:F.color,color:F.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:B.jsx(lr,{name:F.img,className:"himg"})}),B.jsxs("span",{className:"hinfo",children:[B.jsx("span",{className:"hname",style:{color:F.color},children:F.race}),B.jsxs("span",{className:"hab",children:["🌀 ",F.ability,": ",F.abilityDesc]}),B.jsxs("span",{className:"hst",children:["⚔ ",F.str," • ✨ ",F.en," • ❤ ",F.hp]}),B.jsxs("span",{className:"hw",children:["🗡 ",F.weapon]})]})]},F.id)),r&&B.jsxs("div",{className:"card",children:[B.jsx("div",{className:"qhead2",children:"Имя героя"}),B.jsx("div",{className:"chips",children:(td.find(F=>F.id===r).gender==="f"?fT:hT).map(F=>B.jsx("button",{className:"chip"+(o===F?" on":""),onClick:()=>{a(F),U()},children:F},F))})]}),B.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:et,children:"Вступить на путь"})]}),t.t==="tree"&&B.jsxs("div",{className:"maparea",children:[B.jsx("div",{className:"mapwrap",children:B.jsxs("div",{className:"mapcanvas",children:[B.jsx(lr,{name:"tree",className:"mapimg"}),bl.map(F=>B.jsxs("button",{className:"marker",style:{left:F.x+"%",top:F.y+"%"},onClick:()=>ae(F),children:[B.jsxs("div",{className:"amulet-wrap",children:[B.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${F.glow}, transparent 70%)`}}),B.jsx("div",{className:"amulet-ring",style:{borderColor:F.color}}),B.jsx("div",{className:"amulet-core",style:{borderColor:F.color,color:F.color,background:`linear-gradient(135deg, ${F.dark}, #0a0a0a)`},children:F.runeSym})]}),B.jsx("span",{className:"mname",style:{color:F.color,borderColor:F.glow},children:F.name})]},F.id))]})}),B.jsx("div",{className:"fadeT"}),B.jsx("div",{className:"fadeB"}),B.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&ye&&n.hero&&B.jsxs("button",{className:"herobar",onClick:()=>te({t:"hero"}),children:[B.jsxs("span",{className:"hbface",style:{borderColor:ye.color,color:ye.color},children:[B.jsx(lr,{name:ye.img,className:"hbimg"}),ye.sym]}),B.jsxs("span",{className:"hbname",children:[n.hero.name,B.jsx("i",{children:ye.race})]}),B.jsxs("span",{className:"hbst",children:["⚔ ",ye.str," ✨ ",ye.en," ⏳ ",xe()]}),B.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const F=bl.find(me=>me.id===t.id);if(F.id==="midgard"){if(!ye)return null;const me=ie=>{if(U(),ie==="mimir"){G("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(ie==="norns"){G("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(ie==="forge"||ie==="blacksmith"){G("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(ie==="house"||ie==="elder"){G("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(ie==="port"){G("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(ie==="rune"){G("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(ie==="ashgrove"){G("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(ie==="runefield"){G("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(ie==="oldfarm"){G("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(ie==="event"){G("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(ie.startsWith("ritual:")){const Se=ie.slice(7),He={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},P={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[Se];if(!P)return;if(n.powers.includes(P)){G(He[Se]+" уже пробуждён. Его сила ждёт своего часа.");return}i(X=>({...X,powers:[...new Set([...X.powers,P])],done:[...new Set([...X.done,"ritual:"+Se])]}));const E={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};U("success"),G(E[Se]);return}};return B.jsx(vT,{h:ye,on:me})}return B.jsxs("div",{className:"content",children:[B.jsx(lr,{name:F.id,className:"bgimg"}),B.jsx("div",{className:"veil"}),B.jsxs("div",{className:"banner",children:[B.jsx("span",{className:"bemoji",children:F.emoji}),B.jsxs("div",{children:[B.jsx("div",{className:"bname",children:F.name}),B.jsx("div",{className:"btag",children:F.tag})]})]}),B.jsxs("button",{className:"gate",onClick:()=>Oe(F),children:[B.jsxs("span",{className:"gwrap",children:[B.jsx("span",{className:"gate-ring",style:{borderColor:F.color}}),B.jsx("span",{className:"gate-core",style:{borderColor:F.color,color:F.color,background:`radial-gradient(circle, ${F.dark}, #050705 75%)`},children:F.runeSym})]}),B.jsx("span",{className:"mname",style:{color:F.color,borderColor:F.glow},children:n.artifacts.includes(F.id)?"Мир покорён":"Врата мира"})]}),B.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const F=bl.find(He=>He.id===t.id),me=Fo[F.id],ie=oe(F.id);if(ie>=3)return B.jsx("div",{className:"scroll",children:B.jsxs("div",{className:"card center",children:[B.jsx("div",{className:"big",children:"🏺"}),B.jsx("div",{className:"qhead2",children:"Мир покорён!"}),B.jsxs("p",{className:"dim",children:["Артефакт: ",id[F.id]]}),B.jsx("button",{className:"btn gold",onClick:()=>te({t:"realm",id:F.id}),children:"К вратам"})]})});const Se=nd[F.id][ie];return B.jsxs("div",{className:"scroll",children:[B.jsxs("div",{className:"mhead",children:[B.jsxs("span",{className:"mface",style:{borderColor:F.color,color:F.color},children:[B.jsx(lr,{name:x0[F.id],className:"himg"}),me.sym]}),B.jsx("span",{className:"mname2",style:{color:F.color},children:me.name}),B.jsxs("span",{className:"mtitle",children:[me.title," • испытание ",ie+1," из 3"]})]}),ie===0&&B.jsxs("div",{className:"greet",children:["«",me.greet,"»"]}),B.jsxs("div",{className:"cloud",children:[B.jsx("div",{className:"riddle",children:Se.q}),Se.a.map((He,Ye)=>B.jsx("button",{className:"ans"+(d!==null?Ye===Se.c?" good":Ye===d?" bad":" off":p===Ye?" off":""),onClick:()=>Be(F.id,Ye),children:He},Ye)),(ye==null?void 0:ye.id)==="elf"&&!S&&d===null&&B.jsx("button",{className:"btn rune",onClick:()=>ct(F.id),children:"🌀 Шёпот ветров"}),d!==null&&(d===Se.c?B.jsx("button",{className:"btn gold",onClick:()=>lt(F.id),children:"Открыть сундук →"}):B.jsx("button",{className:"btn",onClick:()=>Xt(F.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const F=bl.find(ie=>ie.id===t.id),me=Fo[F.id];return B.jsxs("div",{className:"scroll",children:[B.jsxs("div",{className:"duel",children:[B.jsxs("div",{className:"dside",children:[B.jsxs("span",{className:"dface",style:{borderColor:F.color,color:F.color},children:[B.jsx(lr,{name:x0[F.id],className:"himg"}),me.sym]}),B.jsx("span",{className:"dname",style:{color:F.color},children:me.name}),B.jsx("span",{className:"dhp",children:B.jsx("span",{className:"dhpfill",style:{width:Math.max(0,u/me.hp*100)+"%",background:F.color}})}),B.jsxs("span",{className:"dnum",children:[u,"/",me.hp]})]}),B.jsx("span",{className:"dvs",children:"⚔"}),B.jsxs("div",{className:"dside",children:[B.jsxs("span",{className:"dface",style:{borderColor:ye.color,color:ye.color},children:[B.jsx(lr,{name:ye.img,className:"himg"}),ye.sym]}),B.jsx("span",{className:"dname",style:{color:ye.color},children:n.hero.name}),B.jsx("span",{className:"dhp",children:B.jsx("span",{className:"dhpfill",style:{width:Math.max(0,g/ye.hp*100)+"%",background:"#7ee787"}})}),B.jsx("span",{className:"denergy",children:Array.from({length:ye.en}).map((ie,Se)=>B.jsx("span",{className:"pip"+(Se<C?" on":"")},Se))})]})]}),B.jsx("div",{className:"flog",children:R}),!Y&&B.jsxs("div",{className:"acts",children:[B.jsxs("button",{className:"btn gold",onClick:()=>I(F.id,"hit"),children:["⚔ Удар: ",ye.weapon]}),B.jsx("button",{className:"btn rune",onClick:()=>I(F.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),B.jsx("button",{className:"btn shield",onClick:()=>I(F.id,"shield"),children:"🛡 Щит"})]}),Y==="win"&&B.jsx("button",{className:"btn gold",onClick:()=>lt(F.id),children:"Забрать награду →"}),Y==="lose"&&B.jsx("button",{className:"btn ghost",onClick:()=>te({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&ye&&n.hero&&B.jsx("div",{className:"scroll",children:B.jsxs("div",{className:"card center",children:[B.jsx("span",{className:"hface bigface",style:{borderColor:ye.color,color:ye.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:B.jsx(lr,{name:ye.img,className:"himg"})}),B.jsxs("div",{className:"qhead2",style:{color:ye.color},children:[n.hero.name," • ",ye.race]}),B.jsxs("div",{className:"stats",children:[B.jsxs("div",{className:"stat",children:[B.jsxs("b",{children:["⚔ ",ye.str]}),B.jsx("span",{children:"сила"})]}),B.jsxs("div",{className:"stat",children:[B.jsxs("b",{children:["✨ ",ye.en]}),B.jsx("span",{children:"энергия"})]}),B.jsxs("div",{className:"stat",children:[B.jsxs("b",{children:["❤ ",ye.hp]}),B.jsx("span",{children:"здоровье"})]})]}),B.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",B.jsx("b",{children:ye.weapon})]}),B.jsxs("div",{className:"hrow",children:["🌀 ",ye.ability,": ",ye.abilityDesc]}),B.jsxs("div",{className:"hrow",children:["✨ Искр: ",B.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",B.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&B.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(F=>id[F]).join(", ")]})]})}),t.t==="gift"&&(()=>{const F=n.gift===Uo(),ie=(n.gift?Math.round((Date.parse(Uo())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,Se=F?n.streak:ie;return B.jsxs("div",{className:"scroll",children:[B.jsxs("div",{className:"card center",children:[B.jsx("div",{className:"big",children:"🎁"}),B.jsx("div",{className:"qhead2",children:"Дар Древа"}),B.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),B.jsx("div",{className:"days",children:ed.map((He,Ye)=>B.jsxs("span",{className:"day"+(Ye+1===Se?" on":Ye+1<Se&&F?" done":""),children:[B.jsx("b",{children:He}),"день ",Ye+1]},Ye))}),F?B.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):B.jsxs("button",{className:"btn gold",onClick:it,children:["Забрать дар +",ed[ie-1]," ✨"]})]}),B.jsxs("div",{className:"card center",children:[B.jsx("div",{className:"big",children:"⏳"}),B.jsx("div",{className:"qhead2",children:"Дозор героя"}),B.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),B.jsxs("button",{className:"btn gold",onClick:ke,children:["Завершить дозор · +",xe()," ✨"]})]})]})})(),t.t==="hall"&&B.jsx("div",{className:"scroll",children:B.jsxs("div",{className:"card center",children:[B.jsx("div",{className:"big",children:"🏛️"}),B.jsx("div",{className:"qhead2",children:"Чертог путника"}),B.jsxs("div",{className:"stats",children:[B.jsxs("div",{className:"stat",children:[B.jsxs("b",{children:["✨ ",n.sparks]}),B.jsx("span",{children:"Искр"})]}),B.jsxs("div",{className:"stat",children:[B.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),B.jsx("span",{children:"артефакты"})]})]}),B.jsxs("div",{className:"rank",children:["🏆 Ранг: ",dT(n.sparks)]}),n.hero&&ye&&B.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",ye.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&B.jsx("div",{className:"nav",children:uT.map(F=>B.jsxs("button",{className:"navbtn"+(Je(F.id)?" on":""),onClick:()=>te(je(F.id)),children:[B.jsx("span",{className:"ic",children:F.ic}),F.t]},F.id))}),l&&B.jsx("div",{className:"toast",children:l})]})}Nv(document.getElementById("root")).render(B.jsx(_T,{}));
