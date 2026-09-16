(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var av={exports:{}},nu={},lv={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var al=Symbol.for("react.element"),fx=Symbol.for("react.portal"),hx=Symbol.for("react.fragment"),px=Symbol.for("react.strict_mode"),mx=Symbol.for("react.profiler"),gx=Symbol.for("react.provider"),vx=Symbol.for("react.context"),_x=Symbol.for("react.forward_ref"),xx=Symbol.for("react.suspense"),yx=Symbol.for("react.memo"),Mx=Symbol.for("react.lazy"),Hm=Symbol.iterator;function Sx(t){return t===null||typeof t!="object"?null:(t=Hm&&t[Hm]||t["@@iterator"],typeof t=="function"?t:null)}var cv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uv=Object.assign,dv={};function jo(t,e,n){this.props=t,this.context=e,this.refs=dv,this.updater=n||cv}jo.prototype.isReactComponent={};jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fv(){}fv.prototype=jo.prototype;function Fh(t,e,n){this.props=t,this.context=e,this.refs=dv,this.updater=n||cv}var Oh=Fh.prototype=new fv;Oh.constructor=Fh;uv(Oh,jo.prototype);Oh.isPureReactComponent=!0;var Vm=Array.isArray,hv=Object.prototype.hasOwnProperty,kh={current:null},pv={key:!0,ref:!0,__self:!0,__source:!0};function mv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hv.call(e,i)&&!pv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:al,type:t,key:s,ref:o,props:r,_owner:kh.current}}function wx(t,e){return{$$typeof:al,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===al}function Ex(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gm=/\/+/g;function Bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ex(""+t.key):e.toString(36)}function uc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case al:case fx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Bu(o,0):i,Vm(r)?(n="",t!=null&&(n=t.replace(Gm,"$&/")+"/"),uc(r,e,n,"",function(c){return c})):r!=null&&(zh(r)&&(r=wx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Gm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Vm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Bu(s,a);o+=uc(s,e,n,l,r)}else if(l=Sx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Bu(s,a++),o+=uc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sl(t,e,n){if(t==null)return t;var i=[],r=0;return uc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Tx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kn={current:null},dc={transition:null},Ax={ReactCurrentDispatcher:Kn,ReactCurrentBatchConfig:dc,ReactCurrentOwner:kh};function gv(){throw Error("act(...) is not supported in production builds of React.")}yt.Children={map:Sl,forEach:function(t,e,n){Sl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sl(t,function(){e++}),e},toArray:function(t){return Sl(t,function(e){return e})||[]},only:function(t){if(!zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};yt.Component=jo;yt.Fragment=hx;yt.Profiler=mx;yt.PureComponent=Fh;yt.StrictMode=px;yt.Suspense=xx;yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax;yt.act=gv;yt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=uv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)hv.call(e,l)&&!pv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:al,type:t.type,key:r,ref:s,props:i,_owner:o}};yt.createContext=function(t){return t={$$typeof:vx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gx,_context:t},t.Consumer=t};yt.createElement=mv;yt.createFactory=function(t){var e=mv.bind(null,t);return e.type=t,e};yt.createRef=function(){return{current:null}};yt.forwardRef=function(t){return{$$typeof:_x,render:t}};yt.isValidElement=zh;yt.lazy=function(t){return{$$typeof:Mx,_payload:{_status:-1,_result:t},_init:Tx}};yt.memo=function(t,e){return{$$typeof:yx,type:t,compare:e===void 0?null:e}};yt.startTransition=function(t){var e=dc.transition;dc.transition={};try{t()}finally{dc.transition=e}};yt.unstable_act=gv;yt.useCallback=function(t,e){return Kn.current.useCallback(t,e)};yt.useContext=function(t){return Kn.current.useContext(t)};yt.useDebugValue=function(){};yt.useDeferredValue=function(t){return Kn.current.useDeferredValue(t)};yt.useEffect=function(t,e){return Kn.current.useEffect(t,e)};yt.useId=function(){return Kn.current.useId()};yt.useImperativeHandle=function(t,e,n){return Kn.current.useImperativeHandle(t,e,n)};yt.useInsertionEffect=function(t,e){return Kn.current.useInsertionEffect(t,e)};yt.useLayoutEffect=function(t,e){return Kn.current.useLayoutEffect(t,e)};yt.useMemo=function(t,e){return Kn.current.useMemo(t,e)};yt.useReducer=function(t,e,n){return Kn.current.useReducer(t,e,n)};yt.useRef=function(t){return Kn.current.useRef(t)};yt.useState=function(t){return Kn.current.useState(t)};yt.useSyncExternalStore=function(t,e,n){return Kn.current.useSyncExternalStore(t,e,n)};yt.useTransition=function(){return Kn.current.useTransition()};yt.version="18.3.1";lv.exports=yt;var Mt=lv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bx=Mt,Cx=Symbol.for("react.element"),Rx=Symbol.for("react.fragment"),Px=Object.prototype.hasOwnProperty,Lx=bx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dx={key:!0,ref:!0,__self:!0,__source:!0};function vv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Px.call(e,i)&&!Dx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Cx,type:t,key:s,ref:o,props:r,_owner:Lx.current}}nu.Fragment=Rx;nu.jsx=vv;nu.jsxs=vv;av.exports=nu;var G=av.exports,_v={exports:{}},vi={},xv={exports:{}},yv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,ee){var ie=U.length;U.push(ee);e:for(;0<ie;){var Ee=ie-1>>>1,Fe=U[Ee];if(0<r(Fe,ee))U[Ee]=ee,U[ie]=Fe,ie=Ee;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var ee=U[0],ie=U.pop();if(ie!==ee){U[0]=ie;e:for(var Ee=0,Fe=U.length,ct=Fe>>>1;Ee<ct;){var Pe=2*(Ee+1)-1,oe=U[Pe],B=Pe+1,he=U[B];if(0>r(oe,ie))B<Fe&&0>r(he,oe)?(U[Ee]=he,U[B]=ie,Ee=B):(U[Ee]=oe,U[Pe]=ie,Ee=Pe);else if(B<Fe&&0>r(he,ie))U[Ee]=he,U[B]=ie,Ee=B;else break e}}return ee}function r(U,ee){var ie=U.sortIndex-ee.sortIndex;return ie!==0?ie:U.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,p=!1,y=!1,w=!1,v=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var ee=n(c);ee!==null;){if(ee.callback===null)i(c);else if(ee.startTime<=U)i(c),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(c)}}function M(U){if(w=!1,x(U),!y)if(n(l)!==null)y=!0,V(R);else{var ee=n(c);ee!==null&&Y(M,ee.startTime-U)}}function R(U,ee){y=!1,w&&(w=!1,u(I),I=-1),p=!0;var ie=h;try{for(x(ee),f=n(l);f!==null&&(!(f.expirationTime>ee)||U&&!N());){var Ee=f.callback;if(typeof Ee=="function"){f.callback=null,h=f.priorityLevel;var Fe=Ee(f.expirationTime<=ee);ee=t.unstable_now(),typeof Fe=="function"?f.callback=Fe:f===n(l)&&i(l),x(ee)}else i(l);f=n(l)}if(f!==null)var ct=!0;else{var Pe=n(c);Pe!==null&&Y(M,Pe.startTime-ee),ct=!1}return ct}finally{f=null,h=ie,p=!1}}var P=!1,L=null,I=-1,E=5,S=-1;function N(){return!(t.unstable_now()-S<E)}function H(){if(L!==null){var U=t.unstable_now();S=U;var ee=!0;try{ee=L(!0,U)}finally{ee?Q():(P=!1,L=null)}}else P=!1}var Q;if(typeof g=="function")Q=function(){g(H)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,le=se.port2;se.port1.onmessage=H,Q=function(){le.postMessage(null)}}else Q=function(){v(H,0)};function V(U){L=U,P||(P=!0,Q())}function Y(U,ee){I=v(function(){U(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,V(R))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var ee=3;break;default:ee=h}var ie=h;h=ee;try{return U()}finally{h=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,ee){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ie=h;h=U;try{return ee()}finally{h=ie}},t.unstable_scheduleCallback=function(U,ee,ie){var Ee=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Ee+ie:Ee):ie=Ee,U){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=ie+Fe,U={id:d++,callback:ee,priorityLevel:U,startTime:ie,expirationTime:Fe,sortIndex:-1},ie>Ee?(U.sortIndex=ie,e(c,U),n(l)===null&&U===n(c)&&(w?(u(I),I=-1):w=!0,Y(M,ie-Ee))):(U.sortIndex=Fe,e(l,U),y||p||(y=!0,V(R))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var ee=h;return function(){var ie=h;h=ee;try{return U.apply(this,arguments)}finally{h=ie}}}})(yv);xv.exports=yv;var Ix=xv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nx=Mt,gi=Ix;function Se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mv=new Set,za={};function Os(t,e){No(t,e),No(t+"Capture",e)}function No(t,e){for(za[t]=e,t=0;t<e.length;t++)Mv.add(e[t])}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qd=Object.prototype.hasOwnProperty,Ux=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wm={},Xm={};function Fx(t){return Qd.call(Xm,t)?!0:Qd.call(Wm,t)?!1:Ux.test(t)?Xm[t]=!0:(Wm[t]=!0,!1)}function Ox(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kx(t,e,n,i){if(e===null||typeof e>"u"||Ox(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var In={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){In[t]=new Jn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];In[e]=new Jn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){In[t]=new Jn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){In[t]=new Jn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){In[t]=new Jn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){In[t]=new Jn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){In[t]=new Jn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){In[t]=new Jn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){In[t]=new Jn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bh=/[\-:]([a-z])/g;function Hh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bh,Hh);In[e]=new Jn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bh,Hh);In[e]=new Jn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bh,Hh);In[e]=new Jn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){In[t]=new Jn(t,1,!1,t.toLowerCase(),null,!1,!1)});In.xlinkHref=new Jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){In[t]=new Jn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vh(t,e,n,i){var r=In.hasOwnProperty(e)?In[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kx(e,n,r,i)&&(n=null),i||r===null?Fx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _r=Nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wl=Symbol.for("react.element"),fo=Symbol.for("react.portal"),ho=Symbol.for("react.fragment"),Gh=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),Sv=Symbol.for("react.provider"),wv=Symbol.for("react.context"),Wh=Symbol.for("react.forward_ref"),tf=Symbol.for("react.suspense"),nf=Symbol.for("react.suspense_list"),Xh=Symbol.for("react.memo"),Dr=Symbol.for("react.lazy"),Ev=Symbol.for("react.offscreen"),jm=Symbol.iterator;function oa(t){return t===null||typeof t!="object"?null:(t=jm&&t[jm]||t["@@iterator"],typeof t=="function"?t:null)}var sn=Object.assign,Hu;function wa(t){if(Hu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hu=e&&e[1]||""}return`
`+Hu+t}var Vu=!1;function Gu(t,e){if(!t||Vu)return"";Vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Vu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wa(t):""}function zx(t){switch(t.tag){case 5:return wa(t.type);case 16:return wa("Lazy");case 13:return wa("Suspense");case 19:return wa("SuspenseList");case 0:case 2:case 15:return t=Gu(t.type,!1),t;case 11:return t=Gu(t.type.render,!1),t;case 1:return t=Gu(t.type,!0),t;default:return""}}function rf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ho:return"Fragment";case fo:return"Portal";case ef:return"Profiler";case Gh:return"StrictMode";case tf:return"Suspense";case nf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wv:return(t.displayName||"Context")+".Consumer";case Sv:return(t._context.displayName||"Context")+".Provider";case Wh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xh:return e=t.displayName||null,e!==null?e:rf(t.type)||"Memo";case Dr:e=t._payload,t=t._init;try{return rf(t(e))}catch{}}return null}function Bx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rf(e);case 8:return e===Gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hx(t){var e=Tv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function El(t){t._valueTracker||(t._valueTracker=Hx(t))}function Av(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Tv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function bc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sf(t,e){var n=e.checked;return sn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ym(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bv(t,e){e=e.checked,e!=null&&Vh(t,"checked",e,!1)}function of(t,e){bv(t,e);var n=Jr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?af(t,e.type,n):e.hasOwnProperty("defaultValue")&&af(t,e.type,Jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function af(t,e,n){(e!=="number"||bc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ea=Array.isArray;function To(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Jr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function lf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Se(91));return sn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $m(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Se(92));if(Ea(n)){if(1<n.length)throw Error(Se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jr(n)}}function Cv(t,e){var n=Jr(e.value),i=Jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Km(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Rv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Rv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Tl,Pv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Tl=Tl||document.createElement("div"),Tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vx=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){Vx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function Lv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function Dv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Lv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Gx=sn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uf(t,e){if(e){if(Gx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Se(62))}}function df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=null;function jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hf=null,Ao=null,bo=null;function Jm(t){if(t=ul(t)){if(typeof hf!="function")throw Error(Se(280));var e=t.stateNode;e&&(e=au(e),hf(t.stateNode,t.type,e))}}function Iv(t){Ao?bo?bo.push(t):bo=[t]:Ao=t}function Nv(){if(Ao){var t=Ao,e=bo;if(bo=Ao=null,Jm(t),e)for(t=0;t<e.length;t++)Jm(e[t])}}function Uv(t,e){return t(e)}function Fv(){}var Wu=!1;function Ov(t,e,n){if(Wu)return t(e,n);Wu=!0;try{return Uv(t,e,n)}finally{Wu=!1,(Ao!==null||bo!==null)&&(Fv(),Nv())}}function Ha(t,e){var n=t.stateNode;if(n===null)return null;var i=au(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Se(231,e,typeof n));return n}var pf=!1;if(pr)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){pf=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{pf=!1}function Wx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ra=!1,Cc=null,Rc=!1,mf=null,Xx={onError:function(t){Ra=!0,Cc=t}};function jx(t,e,n,i,r,s,o,a,l){Ra=!1,Cc=null,Wx.apply(Xx,arguments)}function Yx(t,e,n,i,r,s,o,a,l){if(jx.apply(this,arguments),Ra){if(Ra){var c=Cc;Ra=!1,Cc=null}else throw Error(Se(198));Rc||(Rc=!0,mf=c)}}function ks(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zm(t){if(ks(t)!==t)throw Error(Se(188))}function qx(t){var e=t.alternate;if(!e){if(e=ks(t),e===null)throw Error(Se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Zm(r),t;if(s===i)return Zm(r),e;s=s.sibling}throw Error(Se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Se(189))}}if(n.alternate!==i)throw Error(Se(190))}if(n.tag!==3)throw Error(Se(188));return n.stateNode.current===n?t:e}function zv(t){return t=qx(t),t!==null?Bv(t):null}function Bv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Bv(t);if(e!==null)return e;t=t.sibling}return null}var Hv=gi.unstable_scheduleCallback,Qm=gi.unstable_cancelCallback,$x=gi.unstable_shouldYield,Kx=gi.unstable_requestPaint,hn=gi.unstable_now,Jx=gi.unstable_getCurrentPriorityLevel,Yh=gi.unstable_ImmediatePriority,Vv=gi.unstable_UserBlockingPriority,Pc=gi.unstable_NormalPriority,Zx=gi.unstable_LowPriority,Gv=gi.unstable_IdlePriority,iu=null,qi=null;function Qx(t){if(qi&&typeof qi.onCommitFiberRoot=="function")try{qi.onCommitFiberRoot(iu,t,void 0,(t.current.flags&128)===128)}catch{}}var Oi=Math.clz32?Math.clz32:ny,ey=Math.log,ty=Math.LN2;function ny(t){return t>>>=0,t===0?32:31-(ey(t)/ty|0)|0}var Al=64,bl=4194304;function Ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ta(a):(s&=o,s!==0&&(i=Ta(s)))}else o=n&~r,o!==0?i=Ta(o):s!==0&&(i=Ta(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Oi(e),r=1<<n,i|=t[n],e&=~r;return i}function iy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ry(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Oi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=iy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wv(){var t=Al;return Al<<=1,!(Al&4194240)&&(Al=64),t}function Xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ll(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Oi(e),t[e]=n}function sy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Oi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ot=0;function Xv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jv,$h,Yv,qv,$v,vf=!1,Cl=[],Hr=null,Vr=null,Gr=null,Va=new Map,Ga=new Map,Nr=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function e0(t,e){switch(t){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(e.pointerId)}}function la(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ul(e),e!==null&&$h(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ay(t,e,n,i,r){switch(e){case"focusin":return Hr=la(Hr,t,e,n,i,r),!0;case"dragenter":return Vr=la(Vr,t,e,n,i,r),!0;case"mouseover":return Gr=la(Gr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Va.set(s,la(Va.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ga.set(s,la(Ga.get(s)||null,t,e,n,i,r)),!0}return!1}function Kv(t){var e=ws(t.target);if(e!==null){var n=ks(e);if(n!==null){if(e=n.tag,e===13){if(e=kv(n),e!==null){t.blockedOn=e,$v(t.priority,function(){Yv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ff=i,n.target.dispatchEvent(i),ff=null}else return e=ul(n),e!==null&&$h(e),t.blockedOn=n,!1;e.shift()}return!0}function t0(t,e,n){fc(t)&&n.delete(e)}function ly(){vf=!1,Hr!==null&&fc(Hr)&&(Hr=null),Vr!==null&&fc(Vr)&&(Vr=null),Gr!==null&&fc(Gr)&&(Gr=null),Va.forEach(t0),Ga.forEach(t0)}function ca(t,e){t.blockedOn===e&&(t.blockedOn=null,vf||(vf=!0,gi.unstable_scheduleCallback(gi.unstable_NormalPriority,ly)))}function Wa(t){function e(r){return ca(r,t)}if(0<Cl.length){ca(Cl[0],t);for(var n=1;n<Cl.length;n++){var i=Cl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Hr!==null&&ca(Hr,t),Vr!==null&&ca(Vr,t),Gr!==null&&ca(Gr,t),Va.forEach(e),Ga.forEach(e),n=0;n<Nr.length;n++)i=Nr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)Kv(n),n.blockedOn===null&&Nr.shift()}var Co=_r.ReactCurrentBatchConfig,Dc=!0;function cy(t,e,n,i){var r=Ot,s=Co.transition;Co.transition=null;try{Ot=1,Kh(t,e,n,i)}finally{Ot=r,Co.transition=s}}function uy(t,e,n,i){var r=Ot,s=Co.transition;Co.transition=null;try{Ot=4,Kh(t,e,n,i)}finally{Ot=r,Co.transition=s}}function Kh(t,e,n,i){if(Dc){var r=_f(t,e,n,i);if(r===null)td(t,e,i,Ic,n),e0(t,i);else if(ay(r,t,e,n,i))i.stopPropagation();else if(e0(t,i),e&4&&-1<oy.indexOf(t)){for(;r!==null;){var s=ul(r);if(s!==null&&jv(s),s=_f(t,e,n,i),s===null&&td(t,e,i,Ic,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else td(t,e,i,null,n)}}var Ic=null;function _f(t,e,n,i){if(Ic=null,t=jh(i),t=ws(t),t!==null)if(e=ks(t),e===null)t=null;else if(n=e.tag,n===13){if(t=kv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ic=t,null}function Jv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jx()){case Yh:return 1;case Vv:return 4;case Pc:case Zx:return 16;case Gv:return 536870912;default:return 16}default:return 16}}var kr=null,Jh=null,hc=null;function Zv(){if(hc)return hc;var t,e=Jh,n=e.length,i,r="value"in kr?kr.value:kr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return hc=r.slice(t,1<i?1-i:void 0)}function pc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function n0(){return!1}function _i(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rl:n0,this.isPropagationStopped=n0,this}return sn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),e}var Yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zh=_i(Yo),cl=sn({},Yo,{view:0,detail:0}),dy=_i(cl),ju,Yu,ua,ru=sn({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ua&&(ua&&t.type==="mousemove"?(ju=t.screenX-ua.screenX,Yu=t.screenY-ua.screenY):Yu=ju=0,ua=t),ju)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),i0=_i(ru),fy=sn({},ru,{dataTransfer:0}),hy=_i(fy),py=sn({},cl,{relatedTarget:0}),qu=_i(py),my=sn({},Yo,{animationName:0,elapsedTime:0,pseudoElement:0}),gy=_i(my),vy=sn({},Yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_y=_i(vy),xy=sn({},Yo,{data:0}),r0=_i(xy),yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},My={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Sy[t])?!!e[t]:!1}function Qh(){return wy}var Ey=sn({},cl,{key:function(t){if(t.key){var e=yy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?My[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qh,charCode:function(t){return t.type==="keypress"?pc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ty=_i(Ey),Ay=sn({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),s0=_i(Ay),by=sn({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qh}),Cy=_i(by),Ry=sn({},Yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Py=_i(Ry),Ly=sn({},ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dy=_i(Ly),Iy=[9,13,27,32],ep=pr&&"CompositionEvent"in window,Pa=null;pr&&"documentMode"in document&&(Pa=document.documentMode);var Ny=pr&&"TextEvent"in window&&!Pa,Qv=pr&&(!ep||Pa&&8<Pa&&11>=Pa),o0=" ",a0=!1;function e_(t,e){switch(t){case"keyup":return Iy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var po=!1;function Uy(t,e){switch(t){case"compositionend":return t_(e);case"keypress":return e.which!==32?null:(a0=!0,o0);case"textInput":return t=e.data,t===o0&&a0?null:t;default:return null}}function Fy(t,e){if(po)return t==="compositionend"||!ep&&e_(t,e)?(t=Zv(),hc=Jh=kr=null,po=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qv&&e.locale!=="ko"?null:e.data;default:return null}}var Oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function l0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Oy[t.type]:e==="textarea"}function n_(t,e,n,i){Iv(i),e=Nc(e,"onChange"),0<e.length&&(n=new Zh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var La=null,Xa=null;function ky(t){h_(t,0)}function su(t){var e=vo(t);if(Av(e))return t}function zy(t,e){if(t==="change")return e}var i_=!1;if(pr){var $u;if(pr){var Ku="oninput"in document;if(!Ku){var c0=document.createElement("div");c0.setAttribute("oninput","return;"),Ku=typeof c0.oninput=="function"}$u=Ku}else $u=!1;i_=$u&&(!document.documentMode||9<document.documentMode)}function u0(){La&&(La.detachEvent("onpropertychange",r_),Xa=La=null)}function r_(t){if(t.propertyName==="value"&&su(Xa)){var e=[];n_(e,Xa,t,jh(t)),Ov(ky,e)}}function By(t,e,n){t==="focusin"?(u0(),La=e,Xa=n,La.attachEvent("onpropertychange",r_)):t==="focusout"&&u0()}function Hy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return su(Xa)}function Vy(t,e){if(t==="click")return su(e)}function Gy(t,e){if(t==="input"||t==="change")return su(e)}function Wy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bi=typeof Object.is=="function"?Object.is:Wy;function ja(t,e){if(Bi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Qd.call(e,r)||!Bi(t[r],e[r]))return!1}return!0}function d0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function f0(t,e){var n=d0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=d0(n)}}function s_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?s_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function o_(){for(var t=window,e=bc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bc(t.document)}return e}function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xy(t){var e=o_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&s_(n.ownerDocument.documentElement,n)){if(i!==null&&tp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=f0(n,s);var o=f0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jy=pr&&"documentMode"in document&&11>=document.documentMode,mo=null,xf=null,Da=null,yf=!1;function h0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yf||mo==null||mo!==bc(i)||(i=mo,"selectionStart"in i&&tp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Da&&ja(Da,i)||(Da=i,i=Nc(xf,"onSelect"),0<i.length&&(e=new Zh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=mo)))}function Pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var go={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionend:Pl("Transition","TransitionEnd")},Ju={},a_={};pr&&(a_=document.createElement("div").style,"AnimationEvent"in window||(delete go.animationend.animation,delete go.animationiteration.animation,delete go.animationstart.animation),"TransitionEvent"in window||delete go.transitionend.transition);function ou(t){if(Ju[t])return Ju[t];if(!go[t])return t;var e=go[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in a_)return Ju[t]=e[n];return t}var l_=ou("animationend"),c_=ou("animationiteration"),u_=ou("animationstart"),d_=ou("transitionend"),f_=new Map,p0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ts(t,e){f_.set(t,e),Os(e,[t])}for(var Zu=0;Zu<p0.length;Zu++){var Qu=p0[Zu],Yy=Qu.toLowerCase(),qy=Qu[0].toUpperCase()+Qu.slice(1);ts(Yy,"on"+qy)}ts(l_,"onAnimationEnd");ts(c_,"onAnimationIteration");ts(u_,"onAnimationStart");ts("dblclick","onDoubleClick");ts("focusin","onFocus");ts("focusout","onBlur");ts(d_,"onTransitionEnd");No("onMouseEnter",["mouseout","mouseover"]);No("onMouseLeave",["mouseout","mouseover"]);No("onPointerEnter",["pointerout","pointerover"]);No("onPointerLeave",["pointerout","pointerover"]);Os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Os("onBeforeInput",["compositionend","keypress","textInput","paste"]);Os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$y=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function m0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Yx(i,e,void 0,t),t.currentTarget=null}function h_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;m0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;m0(r,a,c),s=l}}}if(Rc)throw t=mf,Rc=!1,mf=null,t}function $t(t,e){var n=e[Tf];n===void 0&&(n=e[Tf]=new Set);var i=t+"__bubble";n.has(i)||(p_(e,t,2,!1),n.add(i))}function ed(t,e,n){var i=0;e&&(i|=4),p_(n,t,i,e)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function Ya(t){if(!t[Ll]){t[Ll]=!0,Mv.forEach(function(n){n!=="selectionchange"&&($y.has(n)||ed(n,!1,t),ed(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ll]||(e[Ll]=!0,ed("selectionchange",!1,e))}}function p_(t,e,n,i){switch(Jv(e)){case 1:var r=cy;break;case 4:r=uy;break;default:r=Kh}n=r.bind(null,e,n,t),r=void 0,!pf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function td(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ws(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ov(function(){var c=s,d=jh(n),f=[];e:{var h=f_.get(t);if(h!==void 0){var p=Zh,y=t;switch(t){case"keypress":if(pc(n)===0)break e;case"keydown":case"keyup":p=Ty;break;case"focusin":y="focus",p=qu;break;case"focusout":y="blur",p=qu;break;case"beforeblur":case"afterblur":p=qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=i0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Cy;break;case l_:case c_:case u_:p=gy;break;case d_:p=Py;break;case"scroll":p=dy;break;case"wheel":p=Dy;break;case"copy":case"cut":case"paste":p=_y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=s0}var w=(e&4)!==0,v=!w&&t==="scroll",u=w?h!==null?h+"Capture":null:h;w=[];for(var g=c,x;g!==null;){x=g;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,u!==null&&(M=Ha(g,u),M!=null&&w.push(qa(g,M,x)))),v)break;g=g.return}0<w.length&&(h=new p(h,y,null,n,d),f.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==ff&&(y=n.relatedTarget||n.fromElement)&&(ws(y)||y[mr]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?ws(y):null,y!==null&&(v=ks(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(w=i0,M="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(w=s0,M="onPointerLeave",u="onPointerEnter",g="pointer"),v=p==null?h:vo(p),x=y==null?h:vo(y),h=new w(M,g+"leave",p,n,d),h.target=v,h.relatedTarget=x,M=null,ws(d)===c&&(w=new w(u,g+"enter",y,n,d),w.target=x,w.relatedTarget=v,M=w),v=M,p&&y)t:{for(w=p,u=y,g=0,x=w;x;x=qs(x))g++;for(x=0,M=u;M;M=qs(M))x++;for(;0<g-x;)w=qs(w),g--;for(;0<x-g;)u=qs(u),x--;for(;g--;){if(w===u||u!==null&&w===u.alternate)break t;w=qs(w),u=qs(u)}w=null}else w=null;p!==null&&g0(f,h,p,w,!1),y!==null&&v!==null&&g0(f,v,y,w,!0)}}e:{if(h=c?vo(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=zy;else if(l0(h))if(i_)R=Gy;else{R=Hy;var P=By}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=Vy);if(R&&(R=R(t,c))){n_(f,R,n,d);break e}P&&P(t,h,c),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&af(h,"number",h.value)}switch(P=c?vo(c):window,t){case"focusin":(l0(P)||P.contentEditable==="true")&&(mo=P,xf=c,Da=null);break;case"focusout":Da=xf=mo=null;break;case"mousedown":yf=!0;break;case"contextmenu":case"mouseup":case"dragend":yf=!1,h0(f,n,d);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":h0(f,n,d)}var L;if(ep)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else po?e_(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Qv&&n.locale!=="ko"&&(po||I!=="onCompositionStart"?I==="onCompositionEnd"&&po&&(L=Zv()):(kr=d,Jh="value"in kr?kr.value:kr.textContent,po=!0)),P=Nc(c,I),0<P.length&&(I=new r0(I,t,null,n,d),f.push({event:I,listeners:P}),L?I.data=L:(L=t_(n),L!==null&&(I.data=L)))),(L=Ny?Uy(t,n):Fy(t,n))&&(c=Nc(c,"onBeforeInput"),0<c.length&&(d=new r0("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=L))}h_(f,e)})}function qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ha(t,n),s!=null&&i.unshift(qa(t,s,r)),s=Ha(t,e),s!=null&&i.push(qa(t,s,r))),t=t.return}return i}function qs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function g0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ha(n,s),l!=null&&o.unshift(qa(n,l,a))):r||(l=Ha(n,s),l!=null&&o.push(qa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ky=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function v0(t){return(typeof t=="string"?t:""+t).replace(Ky,`
`).replace(Jy,"")}function Dl(t,e,n){if(e=v0(e),v0(t)!==e&&n)throw Error(Se(425))}function Uc(){}var Mf=null,Sf=null;function wf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ef=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,_0=typeof Promise=="function"?Promise:void 0,Qy=typeof queueMicrotask=="function"?queueMicrotask:typeof _0<"u"?function(t){return _0.resolve(null).then(t).catch(eM)}:Ef;function eM(t){setTimeout(function(){throw t})}function nd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Wa(e)}function Wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function x0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qo=Math.random().toString(36).slice(2),Xi="__reactFiber$"+qo,$a="__reactProps$"+qo,mr="__reactContainer$"+qo,Tf="__reactEvents$"+qo,tM="__reactListeners$"+qo,nM="__reactHandles$"+qo;function ws(t){var e=t[Xi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mr]||n[Xi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=x0(t);t!==null;){if(n=t[Xi])return n;t=x0(t)}return e}t=n,n=t.parentNode}return null}function ul(t){return t=t[Xi]||t[mr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Se(33))}function au(t){return t[$a]||null}var Af=[],_o=-1;function ns(t){return{current:t}}function Kt(t){0>_o||(t.current=Af[_o],Af[_o]=null,_o--)}function Yt(t,e){_o++,Af[_o]=t.current,t.current=e}var Zr={},Bn=ns(Zr),si=ns(!1),Ps=Zr;function Uo(t,e){var n=t.type.contextTypes;if(!n)return Zr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function oi(t){return t=t.childContextTypes,t!=null}function Fc(){Kt(si),Kt(Bn)}function y0(t,e,n){if(Bn.current!==Zr)throw Error(Se(168));Yt(Bn,e),Yt(si,n)}function m_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Se(108,Bx(t)||"Unknown",r));return sn({},n,i)}function Oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zr,Ps=Bn.current,Yt(Bn,t),Yt(si,si.current),!0}function M0(t,e,n){var i=t.stateNode;if(!i)throw Error(Se(169));n?(t=m_(t,e,Ps),i.__reactInternalMemoizedMergedChildContext=t,Kt(si),Kt(Bn),Yt(Bn,t)):Kt(si),Yt(si,n)}var ar=null,lu=!1,id=!1;function g_(t){ar===null?ar=[t]:ar.push(t)}function iM(t){lu=!0,g_(t)}function is(){if(!id&&ar!==null){id=!0;var t=0,e=Ot;try{var n=ar;for(Ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ar=null,lu=!1}catch(r){throw ar!==null&&(ar=ar.slice(t+1)),Hv(Yh,is),r}finally{Ot=e,id=!1}}return null}var xo=[],yo=0,kc=null,zc=0,Mi=[],Si=0,Ls=null,cr=1,ur="";function vs(t,e){xo[yo++]=zc,xo[yo++]=kc,kc=t,zc=e}function v_(t,e,n){Mi[Si++]=cr,Mi[Si++]=ur,Mi[Si++]=Ls,Ls=t;var i=cr;t=ur;var r=32-Oi(i)-1;i&=~(1<<r),n+=1;var s=32-Oi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,cr=1<<32-Oi(e)+r|n<<r|i,ur=s+t}else cr=1<<s|n<<r|i,ur=t}function np(t){t.return!==null&&(vs(t,1),v_(t,1,0))}function ip(t){for(;t===kc;)kc=xo[--yo],xo[yo]=null,zc=xo[--yo],xo[yo]=null;for(;t===Ls;)Ls=Mi[--Si],Mi[Si]=null,ur=Mi[--Si],Mi[Si]=null,cr=Mi[--Si],Mi[Si]=null}var mi=null,pi=null,Qt=!1,Ni=null;function __(t,e){var n=wi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function S0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mi=t,pi=Wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mi=t,pi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ls!==null?{id:cr,overflow:ur}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mi=t,pi=null,!0):!1;default:return!1}}function bf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cf(t){if(Qt){var e=pi;if(e){var n=e;if(!S0(t,e)){if(bf(t))throw Error(Se(418));e=Wr(n.nextSibling);var i=mi;e&&S0(t,e)?__(i,n):(t.flags=t.flags&-4097|2,Qt=!1,mi=t)}}else{if(bf(t))throw Error(Se(418));t.flags=t.flags&-4097|2,Qt=!1,mi=t}}}function w0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mi=t}function Il(t){if(t!==mi)return!1;if(!Qt)return w0(t),Qt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wf(t.type,t.memoizedProps)),e&&(e=pi)){if(bf(t))throw x_(),Error(Se(418));for(;e;)__(t,e),e=Wr(e.nextSibling)}if(w0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pi=Wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pi=null}}else pi=mi?Wr(t.stateNode.nextSibling):null;return!0}function x_(){for(var t=pi;t;)t=Wr(t.nextSibling)}function Fo(){pi=mi=null,Qt=!1}function rp(t){Ni===null?Ni=[t]:Ni.push(t)}var rM=_r.ReactCurrentBatchConfig;function da(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Se(309));var i=n.stateNode}if(!i)throw Error(Se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Se(284));if(!n._owner)throw Error(Se(290,t))}return t}function Nl(t,e){throw t=Object.prototype.toString.call(e),Error(Se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function E0(t){var e=t._init;return e(t._payload)}function y_(t){function e(u,g){if(t){var x=u.deletions;x===null?(u.deletions=[g],u.flags|=16):x.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=qr(u,g),u.index=0,u.sibling=null,u}function s(u,g,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<g?(u.flags|=2,g):x):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,x,M){return g===null||g.tag!==6?(g=ud(x,u.mode,M),g.return=u,g):(g=r(g,x),g.return=u,g)}function l(u,g,x,M){var R=x.type;return R===ho?d(u,g,x.props.children,M,x.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Dr&&E0(R)===g.type)?(M=r(g,x.props),M.ref=da(u,g,x),M.return=u,M):(M=Mc(x.type,x.key,x.props,null,u.mode,M),M.ref=da(u,g,x),M.return=u,M)}function c(u,g,x,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=dd(x,u.mode,M),g.return=u,g):(g=r(g,x.children||[]),g.return=u,g)}function d(u,g,x,M,R){return g===null||g.tag!==7?(g=Rs(x,u.mode,M,R),g.return=u,g):(g=r(g,x),g.return=u,g)}function f(u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ud(""+g,u.mode,x),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wl:return x=Mc(g.type,g.key,g.props,null,u.mode,x),x.ref=da(u,null,g),x.return=u,x;case fo:return g=dd(g,u.mode,x),g.return=u,g;case Dr:var M=g._init;return f(u,M(g._payload),x)}if(Ea(g)||oa(g))return g=Rs(g,u.mode,x,null),g.return=u,g;Nl(u,g)}return null}function h(u,g,x,M){var R=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:a(u,g,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case wl:return x.key===R?l(u,g,x,M):null;case fo:return x.key===R?c(u,g,x,M):null;case Dr:return R=x._init,h(u,g,R(x._payload),M)}if(Ea(x)||oa(x))return R!==null?null:d(u,g,x,M,null);Nl(u,x)}return null}function p(u,g,x,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(x)||null,a(g,u,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case wl:return u=u.get(M.key===null?x:M.key)||null,l(g,u,M,R);case fo:return u=u.get(M.key===null?x:M.key)||null,c(g,u,M,R);case Dr:var P=M._init;return p(u,g,x,P(M._payload),R)}if(Ea(M)||oa(M))return u=u.get(x)||null,d(g,u,M,R,null);Nl(g,M)}return null}function y(u,g,x,M){for(var R=null,P=null,L=g,I=g=0,E=null;L!==null&&I<x.length;I++){L.index>I?(E=L,L=null):E=L.sibling;var S=h(u,L,x[I],M);if(S===null){L===null&&(L=E);break}t&&L&&S.alternate===null&&e(u,L),g=s(S,g,I),P===null?R=S:P.sibling=S,P=S,L=E}if(I===x.length)return n(u,L),Qt&&vs(u,I),R;if(L===null){for(;I<x.length;I++)L=f(u,x[I],M),L!==null&&(g=s(L,g,I),P===null?R=L:P.sibling=L,P=L);return Qt&&vs(u,I),R}for(L=i(u,L);I<x.length;I++)E=p(L,u,I,x[I],M),E!==null&&(t&&E.alternate!==null&&L.delete(E.key===null?I:E.key),g=s(E,g,I),P===null?R=E:P.sibling=E,P=E);return t&&L.forEach(function(N){return e(u,N)}),Qt&&vs(u,I),R}function w(u,g,x,M){var R=oa(x);if(typeof R!="function")throw Error(Se(150));if(x=R.call(x),x==null)throw Error(Se(151));for(var P=R=null,L=g,I=g=0,E=null,S=x.next();L!==null&&!S.done;I++,S=x.next()){L.index>I?(E=L,L=null):E=L.sibling;var N=h(u,L,S.value,M);if(N===null){L===null&&(L=E);break}t&&L&&N.alternate===null&&e(u,L),g=s(N,g,I),P===null?R=N:P.sibling=N,P=N,L=E}if(S.done)return n(u,L),Qt&&vs(u,I),R;if(L===null){for(;!S.done;I++,S=x.next())S=f(u,S.value,M),S!==null&&(g=s(S,g,I),P===null?R=S:P.sibling=S,P=S);return Qt&&vs(u,I),R}for(L=i(u,L);!S.done;I++,S=x.next())S=p(L,u,I,S.value,M),S!==null&&(t&&S.alternate!==null&&L.delete(S.key===null?I:S.key),g=s(S,g,I),P===null?R=S:P.sibling=S,P=S);return t&&L.forEach(function(H){return e(u,H)}),Qt&&vs(u,I),R}function v(u,g,x,M){if(typeof x=="object"&&x!==null&&x.type===ho&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case wl:e:{for(var R=x.key,P=g;P!==null;){if(P.key===R){if(R=x.type,R===ho){if(P.tag===7){n(u,P.sibling),g=r(P,x.props.children),g.return=u,u=g;break e}}else if(P.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Dr&&E0(R)===P.type){n(u,P.sibling),g=r(P,x.props),g.ref=da(u,P,x),g.return=u,u=g;break e}n(u,P);break}else e(u,P);P=P.sibling}x.type===ho?(g=Rs(x.props.children,u.mode,M,x.key),g.return=u,u=g):(M=Mc(x.type,x.key,x.props,null,u.mode,M),M.ref=da(u,g,x),M.return=u,u=M)}return o(u);case fo:e:{for(P=x.key;g!==null;){if(g.key===P)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(u,g.sibling),g=r(g,x.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=dd(x,u.mode,M),g.return=u,u=g}return o(u);case Dr:return P=x._init,v(u,g,P(x._payload),M)}if(Ea(x))return y(u,g,x,M);if(oa(x))return w(u,g,x,M);Nl(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,x),g.return=u,u=g):(n(u,g),g=ud(x,u.mode,M),g.return=u,u=g),o(u)):n(u,g)}return v}var Oo=y_(!0),M_=y_(!1),Bc=ns(null),Hc=null,Mo=null,sp=null;function op(){sp=Mo=Hc=null}function ap(t){var e=Bc.current;Kt(Bc),t._currentValue=e}function Rf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ro(t,e){Hc=t,sp=Mo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ri=!0),t.firstContext=null)}function Ti(t){var e=t._currentValue;if(sp!==t)if(t={context:t,memoizedValue:e,next:null},Mo===null){if(Hc===null)throw Error(Se(308));Mo=t,Hc.dependencies={lanes:0,firstContext:t}}else Mo=Mo.next=t;return e}var Es=null;function lp(t){Es===null?Es=[t]:Es.push(t)}function S_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,lp(e)):(n.next=r.next,r.next=n),e.interleaved=n,gr(t,i)}function gr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ir=!1;function cp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function w_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gr(t,n)}return r=i.interleaved,r===null?(e.next=e,lp(i)):(e.next=r.next,r.next=e),i.interleaved=e,gr(t,n)}function mc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}function T0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vc(t,e,n,i){var r=t.updateQueue;Ir=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(h=e,p=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(p,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(p,f,h):y,h==null)break e;f=sn({},f,h);break e;case 2:Ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Is|=o,t.lanes=o,t.memoizedState=f}}function A0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Se(191,r));r.call(i)}}}var dl={},$i=ns(dl),Ka=ns(dl),Ja=ns(dl);function Ts(t){if(t===dl)throw Error(Se(174));return t}function up(t,e){switch(Yt(Ja,e),Yt(Ka,t),Yt($i,dl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cf(e,t)}Kt($i),Yt($i,e)}function ko(){Kt($i),Kt(Ka),Kt(Ja)}function E_(t){Ts(Ja.current);var e=Ts($i.current),n=cf(e,t.type);e!==n&&(Yt(Ka,t),Yt($i,n))}function dp(t){Ka.current===t&&(Kt($i),Kt(Ka))}var nn=ns(0);function Gc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rd=[];function fp(){for(var t=0;t<rd.length;t++)rd[t]._workInProgressVersionPrimary=null;rd.length=0}var gc=_r.ReactCurrentDispatcher,sd=_r.ReactCurrentBatchConfig,Ds=0,rn=null,yn=null,An=null,Wc=!1,Ia=!1,Za=0,sM=0;function Un(){throw Error(Se(321))}function hp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bi(t[n],e[n]))return!1;return!0}function pp(t,e,n,i,r,s){if(Ds=s,rn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gc.current=t===null||t.memoizedState===null?cM:uM,t=n(i,r),Ia){s=0;do{if(Ia=!1,Za=0,25<=s)throw Error(Se(301));s+=1,An=yn=null,e.updateQueue=null,gc.current=dM,t=n(i,r)}while(Ia)}if(gc.current=Xc,e=yn!==null&&yn.next!==null,Ds=0,An=yn=rn=null,Wc=!1,e)throw Error(Se(300));return t}function mp(){var t=Za!==0;return Za=0,t}function Gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?rn.memoizedState=An=t:An=An.next=t,An}function Ai(){if(yn===null){var t=rn.alternate;t=t!==null?t.memoizedState:null}else t=yn.next;var e=An===null?rn.memoizedState:An.next;if(e!==null)An=e,yn=t;else{if(t===null)throw Error(Se(310));yn=t,t={memoizedState:yn.memoizedState,baseState:yn.baseState,baseQueue:yn.baseQueue,queue:yn.queue,next:null},An===null?rn.memoizedState=An=t:An=An.next=t}return An}function Qa(t,e){return typeof e=="function"?e(t):e}function od(t){var e=Ai(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=yn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ds&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,rn.lanes|=d,Is|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Bi(i,e.memoizedState)||(ri=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,rn.lanes|=s,Is|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ad(t){var e=Ai(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Bi(s,e.memoizedState)||(ri=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function T_(){}function A_(t,e){var n=rn,i=Ai(),r=e(),s=!Bi(i.memoizedState,r);if(s&&(i.memoizedState=r,ri=!0),i=i.queue,gp(R_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||An!==null&&An.memoizedState.tag&1){if(n.flags|=2048,el(9,C_.bind(null,n,i,r,e),void 0,null),bn===null)throw Error(Se(349));Ds&30||b_(n,e,r)}return r}function b_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=rn.updateQueue,e===null?(e={lastEffect:null,stores:null},rn.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function C_(t,e,n,i){e.value=n,e.getSnapshot=i,P_(e)&&L_(t)}function R_(t,e,n){return n(function(){P_(e)&&L_(t)})}function P_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bi(t,n)}catch{return!0}}function L_(t){var e=gr(t,1);e!==null&&ki(e,t,1,-1)}function b0(t){var e=Gi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:t},e.queue=t,t=t.dispatch=lM.bind(null,rn,t),[e.memoizedState,t]}function el(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=rn.updateQueue,e===null?(e={lastEffect:null,stores:null},rn.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function D_(){return Ai().memoizedState}function vc(t,e,n,i){var r=Gi();rn.flags|=t,r.memoizedState=el(1|e,n,void 0,i===void 0?null:i)}function cu(t,e,n,i){var r=Ai();i=i===void 0?null:i;var s=void 0;if(yn!==null){var o=yn.memoizedState;if(s=o.destroy,i!==null&&hp(i,o.deps)){r.memoizedState=el(e,n,s,i);return}}rn.flags|=t,r.memoizedState=el(1|e,n,s,i)}function C0(t,e){return vc(8390656,8,t,e)}function gp(t,e){return cu(2048,8,t,e)}function I_(t,e){return cu(4,2,t,e)}function N_(t,e){return cu(4,4,t,e)}function U_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function F_(t,e,n){return n=n!=null?n.concat([t]):null,cu(4,4,U_.bind(null,e,t),n)}function vp(){}function O_(t,e){var n=Ai();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function k_(t,e){var n=Ai();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function z_(t,e,n){return Ds&21?(Bi(n,e)||(n=Wv(),rn.lanes|=n,Is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ri=!0),t.memoizedState=n)}function oM(t,e){var n=Ot;Ot=n!==0&&4>n?n:4,t(!0);var i=sd.transition;sd.transition={};try{t(!1),e()}finally{Ot=n,sd.transition=i}}function B_(){return Ai().memoizedState}function aM(t,e,n){var i=Yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},H_(t))V_(e,n);else if(n=S_(t,e,n,i),n!==null){var r=qn();ki(n,t,i,r),G_(n,e,i)}}function lM(t,e,n){var i=Yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(H_(t))V_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Bi(a,o)){var l=e.interleaved;l===null?(r.next=r,lp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=S_(t,e,r,i),n!==null&&(r=qn(),ki(n,t,i,r),G_(n,e,i))}}function H_(t){var e=t.alternate;return t===rn||e!==null&&e===rn}function V_(t,e){Ia=Wc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function G_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}var Xc={readContext:Ti,useCallback:Un,useContext:Un,useEffect:Un,useImperativeHandle:Un,useInsertionEffect:Un,useLayoutEffect:Un,useMemo:Un,useReducer:Un,useRef:Un,useState:Un,useDebugValue:Un,useDeferredValue:Un,useTransition:Un,useMutableSource:Un,useSyncExternalStore:Un,useId:Un,unstable_isNewReconciler:!1},cM={readContext:Ti,useCallback:function(t,e){return Gi().memoizedState=[t,e===void 0?null:e],t},useContext:Ti,useEffect:C0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vc(4194308,4,U_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vc(4194308,4,t,e)},useInsertionEffect:function(t,e){return vc(4,2,t,e)},useMemo:function(t,e){var n=Gi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=aM.bind(null,rn,t),[i.memoizedState,t]},useRef:function(t){var e=Gi();return t={current:t},e.memoizedState=t},useState:b0,useDebugValue:vp,useDeferredValue:function(t){return Gi().memoizedState=t},useTransition:function(){var t=b0(!1),e=t[0];return t=oM.bind(null,t[1]),Gi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=rn,r=Gi();if(Qt){if(n===void 0)throw Error(Se(407));n=n()}else{if(n=e(),bn===null)throw Error(Se(349));Ds&30||b_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,C0(R_.bind(null,i,s,t),[t]),i.flags|=2048,el(9,C_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Gi(),e=bn.identifierPrefix;if(Qt){var n=ur,i=cr;n=(i&~(1<<32-Oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Za++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uM={readContext:Ti,useCallback:O_,useContext:Ti,useEffect:gp,useImperativeHandle:F_,useInsertionEffect:I_,useLayoutEffect:N_,useMemo:k_,useReducer:od,useRef:D_,useState:function(){return od(Qa)},useDebugValue:vp,useDeferredValue:function(t){var e=Ai();return z_(e,yn.memoizedState,t)},useTransition:function(){var t=od(Qa)[0],e=Ai().memoizedState;return[t,e]},useMutableSource:T_,useSyncExternalStore:A_,useId:B_,unstable_isNewReconciler:!1},dM={readContext:Ti,useCallback:O_,useContext:Ti,useEffect:gp,useImperativeHandle:F_,useInsertionEffect:I_,useLayoutEffect:N_,useMemo:k_,useReducer:ad,useRef:D_,useState:function(){return ad(Qa)},useDebugValue:vp,useDeferredValue:function(t){var e=Ai();return yn===null?e.memoizedState=t:z_(e,yn.memoizedState,t)},useTransition:function(){var t=ad(Qa)[0],e=Ai().memoizedState;return[t,e]},useMutableSource:T_,useSyncExternalStore:A_,useId:B_,unstable_isNewReconciler:!1};function Di(t,e){if(t&&t.defaultProps){e=sn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Pf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:sn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uu={isMounted:function(t){return(t=t._reactInternals)?ks(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qn(),r=Yr(t),s=fr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,r),e!==null&&(ki(e,t,r,i),mc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qn(),r=Yr(t),s=fr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,r),e!==null&&(ki(e,t,r,i),mc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qn(),i=Yr(t),r=fr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xr(t,r,i),e!==null&&(ki(e,t,i,n),mc(e,t,i))}};function R0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ja(n,i)||!ja(r,s):!0}function W_(t,e,n){var i=!1,r=Zr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ti(s):(r=oi(e)?Ps:Bn.current,i=e.contextTypes,s=(i=i!=null)?Uo(t,r):Zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function P0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&uu.enqueueReplaceState(e,e.state,null)}function Lf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},cp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ti(s):(s=oi(e)?Ps:Bn.current,r.context=Uo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&uu.enqueueReplaceState(r,r.state,null),Vc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function zo(t,e){try{var n="",i=e;do n+=zx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ld(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fM=typeof WeakMap=="function"?WeakMap:Map;function X_(t,e,n){n=fr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Yc||(Yc=!0,Vf=i),Df(t,e)},n}function j_(t,e,n){n=fr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Df(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Df(t,e),typeof i!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function L0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=AM.bind(null,t,e,n),e.then(t,t))}function D0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function I0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fr(-1,1),e.tag=2,Xr(n,e,1))),n.lanes|=1),t)}var hM=_r.ReactCurrentOwner,ri=!1;function Xn(t,e,n,i){e.child=t===null?M_(e,null,n,i):Oo(e,t.child,n,i)}function N0(t,e,n,i,r){n=n.render;var s=e.ref;return Ro(e,r),i=pp(t,e,n,i,s,r),n=mp(),t!==null&&!ri?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vr(t,e,r)):(Qt&&n&&np(e),e.flags|=1,Xn(t,e,i,r),e.child)}function U0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Tp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Y_(t,e,s,i,r)):(t=Mc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ja,n(o,i)&&t.ref===e.ref)return vr(t,e,r)}return e.flags|=1,t=qr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Y_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ja(s,i)&&t.ref===e.ref)if(ri=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ri=!0);else return e.lanes=t.lanes,vr(t,e,r)}return If(t,e,n,i,r)}function q_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Yt(wo,fi),fi|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Yt(wo,fi),fi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Yt(wo,fi),fi|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Yt(wo,fi),fi|=i;return Xn(t,e,r,n),e.child}function $_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function If(t,e,n,i,r){var s=oi(n)?Ps:Bn.current;return s=Uo(e,s),Ro(e,r),n=pp(t,e,n,i,s,r),i=mp(),t!==null&&!ri?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vr(t,e,r)):(Qt&&i&&np(e),e.flags|=1,Xn(t,e,n,r),e.child)}function F0(t,e,n,i,r){if(oi(n)){var s=!0;Oc(e)}else s=!1;if(Ro(e,r),e.stateNode===null)_c(t,e),W_(e,n,i),Lf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ti(c):(c=oi(n)?Ps:Bn.current,c=Uo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&P0(e,o,i,c),Ir=!1;var h=e.memoizedState;o.state=h,Vc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||si.current||Ir?(typeof d=="function"&&(Pf(e,n,d,i),l=e.memoizedState),(a=Ir||R0(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,w_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Di(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ti(l):(l=oi(n)?Ps:Bn.current,l=Uo(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&P0(e,o,i,l),Ir=!1,h=e.memoizedState,o.state=h,Vc(e,i,o,r);var y=e.memoizedState;a!==f||h!==y||si.current||Ir?(typeof p=="function"&&(Pf(e,n,p,i),y=e.memoizedState),(c=Ir||R0(e,n,c,i,h,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Nf(t,e,n,i,s,r)}function Nf(t,e,n,i,r,s){$_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&M0(e,n,!1),vr(t,e,s);i=e.stateNode,hM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Oo(e,t.child,null,s),e.child=Oo(e,null,a,s)):Xn(t,e,a,s),e.memoizedState=i.state,r&&M0(e,n,!0),e.child}function K_(t){var e=t.stateNode;e.pendingContext?y0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&y0(t,e.context,!1),up(t,e.containerInfo)}function O0(t,e,n,i,r){return Fo(),rp(r),e.flags|=256,Xn(t,e,n,i),e.child}var Uf={dehydrated:null,treeContext:null,retryLane:0};function Ff(t){return{baseLanes:t,cachePool:null,transitions:null}}function J_(t,e,n){var i=e.pendingProps,r=nn.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Yt(nn,r&1),t===null)return Cf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hu(o,i,0,null),t=Rs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ff(n),e.memoizedState=Uf,t):_p(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return pM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=qr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=qr(a,s):(s=Rs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ff(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Uf,i}return s=t.child,t=s.sibling,i=qr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function _p(t,e){return e=hu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ul(t,e,n,i){return i!==null&&rp(i),Oo(e,t.child,null,n),t=_p(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ld(Error(Se(422))),Ul(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=hu({mode:"visible",children:i.children},r,0,null),s=Rs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Oo(e,t.child,null,o),e.child.memoizedState=Ff(o),e.memoizedState=Uf,s);if(!(e.mode&1))return Ul(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Se(419)),i=ld(s,i,void 0),Ul(t,e,o,i)}if(a=(o&t.childLanes)!==0,ri||a){if(i=bn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gr(t,r),ki(i,t,r,-1))}return Ep(),i=ld(Error(Se(421))),Ul(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=bM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pi=Wr(r.nextSibling),mi=e,Qt=!0,Ni=null,t!==null&&(Mi[Si++]=cr,Mi[Si++]=ur,Mi[Si++]=Ls,cr=t.id,ur=t.overflow,Ls=e),e=_p(e,i.children),e.flags|=4096,e)}function k0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Rf(t.return,e,n)}function cd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Z_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xn(t,e,i.children,n),i=nn.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&k0(t,n,e);else if(t.tag===19)k0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Yt(nn,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Gc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),cd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Gc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}cd(e,!0,n,null,s);break;case"together":cd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _c(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Se(153));if(e.child!==null){for(t=e.child,n=qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mM(t,e,n){switch(e.tag){case 3:K_(e),Fo();break;case 5:E_(e);break;case 1:oi(e.type)&&Oc(e);break;case 4:up(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Yt(Bc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Yt(nn,nn.current&1),e.flags|=128,null):n&e.child.childLanes?J_(t,e,n):(Yt(nn,nn.current&1),t=vr(t,e,n),t!==null?t.sibling:null);Yt(nn,nn.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Z_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Yt(nn,nn.current),i)break;return null;case 22:case 23:return e.lanes=0,q_(t,e,n)}return vr(t,e,n)}var Q_,Of,e1,t1;Q_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Of=function(){};e1=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ts($i.current);var s=null;switch(n){case"input":r=sf(t,r),i=sf(t,i),s=[];break;case"select":r=sn({},r,{value:void 0}),i=sn({},i,{value:void 0}),s=[];break;case"textarea":r=lf(t,r),i=lf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Uc)}uf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(za.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(za.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&$t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};t1=function(t,e,n,i){n!==i&&(e.flags|=4)};function fa(t,e){if(!Qt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Fn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function gM(t,e,n){var i=e.pendingProps;switch(ip(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fn(e),null;case 1:return oi(e.type)&&Fc(),Fn(e),null;case 3:return i=e.stateNode,ko(),Kt(si),Kt(Bn),fp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ni!==null&&(Xf(Ni),Ni=null))),Of(t,e),Fn(e),null;case 5:dp(e);var r=Ts(Ja.current);if(n=e.type,t!==null&&e.stateNode!=null)e1(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Se(166));return Fn(e),null}if(t=Ts($i.current),Il(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Xi]=e,i[$a]=s,t=(e.mode&1)!==0,n){case"dialog":$t("cancel",i),$t("close",i);break;case"iframe":case"object":case"embed":$t("load",i);break;case"video":case"audio":for(r=0;r<Aa.length;r++)$t(Aa[r],i);break;case"source":$t("error",i);break;case"img":case"image":case"link":$t("error",i),$t("load",i);break;case"details":$t("toggle",i);break;case"input":Ym(i,s),$t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},$t("invalid",i);break;case"textarea":$m(i,s),$t("invalid",i)}uf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Dl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Dl(i.textContent,a,t),r=["children",""+a]):za.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$t("scroll",i)}switch(n){case"input":El(i),qm(i,s,!0);break;case"textarea":El(i),Km(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Uc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Rv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Xi]=e,t[$a]=i,Q_(t,e,!1,!1),e.stateNode=t;e:{switch(o=df(n,i),n){case"dialog":$t("cancel",t),$t("close",t),r=i;break;case"iframe":case"object":case"embed":$t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Aa.length;r++)$t(Aa[r],t);r=i;break;case"source":$t("error",t),r=i;break;case"img":case"image":case"link":$t("error",t),$t("load",t),r=i;break;case"details":$t("toggle",t),r=i;break;case"input":Ym(t,i),r=sf(t,i),$t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=sn({},i,{value:void 0}),$t("invalid",t);break;case"textarea":$m(t,i),r=lf(t,i),$t("invalid",t);break;default:r=i}uf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Dv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Pv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ba(t,l):typeof l=="number"&&Ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(za.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$t("scroll",t):l!=null&&Vh(t,s,l,o))}switch(n){case"input":El(t),qm(t,i,!1);break;case"textarea":El(t),Km(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Jr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?To(t,!!i.multiple,s,!1):i.defaultValue!=null&&To(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Uc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Fn(e),null;case 6:if(t&&e.stateNode!=null)t1(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Se(166));if(n=Ts(Ja.current),Ts($i.current),Il(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xi]=e,(s=i.nodeValue!==n)&&(t=mi,t!==null))switch(t.tag){case 3:Dl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Dl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xi]=e,e.stateNode=i}return Fn(e),null;case 13:if(Kt(nn),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qt&&pi!==null&&e.mode&1&&!(e.flags&128))x_(),Fo(),e.flags|=98560,s=!1;else if(s=Il(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Se(317));s[Xi]=e}else Fo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Fn(e),s=!1}else Ni!==null&&(Xf(Ni),Ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||nn.current&1?Mn===0&&(Mn=3):Ep())),e.updateQueue!==null&&(e.flags|=4),Fn(e),null);case 4:return ko(),Of(t,e),t===null&&Ya(e.stateNode.containerInfo),Fn(e),null;case 10:return ap(e.type._context),Fn(e),null;case 17:return oi(e.type)&&Fc(),Fn(e),null;case 19:if(Kt(nn),s=e.memoizedState,s===null)return Fn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)fa(s,!1);else{if(Mn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gc(t),o!==null){for(e.flags|=128,fa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Yt(nn,nn.current&1|2),e.child}t=t.sibling}s.tail!==null&&hn()>Bo&&(e.flags|=128,i=!0,fa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Gc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qt)return Fn(e),null}else 2*hn()-s.renderingStartTime>Bo&&n!==1073741824&&(e.flags|=128,i=!0,fa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=hn(),e.sibling=null,n=nn.current,Yt(nn,i?n&1|2:n&1),e):(Fn(e),null);case 22:case 23:return wp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fi&1073741824&&(Fn(e),e.subtreeFlags&6&&(e.flags|=8192)):Fn(e),null;case 24:return null;case 25:return null}throw Error(Se(156,e.tag))}function vM(t,e){switch(ip(e),e.tag){case 1:return oi(e.type)&&Fc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ko(),Kt(si),Kt(Bn),fp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dp(e),null;case 13:if(Kt(nn),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Se(340));Fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Kt(nn),null;case 4:return ko(),null;case 10:return ap(e.type._context),null;case 22:case 23:return wp(),null;case 24:return null;default:return null}}var Fl=!1,zn=!1,_M=typeof WeakSet=="function"?WeakSet:Set,He=null;function So(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ln(t,e,i)}else n.current=null}function kf(t,e,n){try{n()}catch(i){ln(t,e,i)}}var z0=!1;function xM(t,e){if(Mf=Dc,t=o_(),tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:t,selectionRange:n},Dc=!1,He=e;He!==null;)if(e=He,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,He=t;else for(;He!==null;){e=He;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,v=y.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?w:Di(e.type,w),v);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(M){ln(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,He=t;break}He=e.return}return y=z0,z0=!1,y}function Na(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&kf(e,n,s)}r=r.next}while(r!==i)}}function du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function zf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function n1(t){var e=t.alternate;e!==null&&(t.alternate=null,n1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xi],delete e[$a],delete e[Tf],delete e[tM],delete e[nM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function i1(t){return t.tag===5||t.tag===3||t.tag===4}function B0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||i1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Uc));else if(i!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}function Hf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hf(t,e,n),t=t.sibling;t!==null;)Hf(t,e,n),t=t.sibling}var Ln=null,Ii=!1;function Er(t,e,n){for(n=n.child;n!==null;)r1(t,e,n),n=n.sibling}function r1(t,e,n){if(qi&&typeof qi.onCommitFiberUnmount=="function")try{qi.onCommitFiberUnmount(iu,n)}catch{}switch(n.tag){case 5:zn||So(n,e);case 6:var i=Ln,r=Ii;Ln=null,Er(t,e,n),Ln=i,Ii=r,Ln!==null&&(Ii?(t=Ln,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ln.removeChild(n.stateNode));break;case 18:Ln!==null&&(Ii?(t=Ln,n=n.stateNode,t.nodeType===8?nd(t.parentNode,n):t.nodeType===1&&nd(t,n),Wa(t)):nd(Ln,n.stateNode));break;case 4:i=Ln,r=Ii,Ln=n.stateNode.containerInfo,Ii=!0,Er(t,e,n),Ln=i,Ii=r;break;case 0:case 11:case 14:case 15:if(!zn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kf(n,e,o),r=r.next}while(r!==i)}Er(t,e,n);break;case 1:if(!zn&&(So(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ln(n,e,a)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(zn=(i=zn)||n.memoizedState!==null,Er(t,e,n),zn=i):Er(t,e,n);break;default:Er(t,e,n)}}function H0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _M),e.forEach(function(i){var r=CM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ci(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ln=a.stateNode,Ii=!1;break e;case 3:Ln=a.stateNode.containerInfo,Ii=!0;break e;case 4:Ln=a.stateNode.containerInfo,Ii=!0;break e}a=a.return}if(Ln===null)throw Error(Se(160));r1(s,o,r),Ln=null,Ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ln(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)s1(e,t),e=e.sibling}function s1(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ci(e,t),Vi(t),i&4){try{Na(3,t,t.return),du(3,t)}catch(w){ln(t,t.return,w)}try{Na(5,t,t.return)}catch(w){ln(t,t.return,w)}}break;case 1:Ci(e,t),Vi(t),i&512&&n!==null&&So(n,n.return);break;case 5:if(Ci(e,t),Vi(t),i&512&&n!==null&&So(n,n.return),t.flags&32){var r=t.stateNode;try{Ba(r,"")}catch(w){ln(t,t.return,w)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&bv(r,s),df(a,o);var c=df(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Dv(r,f):d==="dangerouslySetInnerHTML"?Pv(r,f):d==="children"?Ba(r,f):Vh(r,d,f,c)}switch(a){case"input":of(r,s);break;case"textarea":Cv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?To(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?To(r,!!s.multiple,s.defaultValue,!0):To(r,!!s.multiple,s.multiple?[]:"",!1))}r[$a]=s}catch(w){ln(t,t.return,w)}}break;case 6:if(Ci(e,t),Vi(t),i&4){if(t.stateNode===null)throw Error(Se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(w){ln(t,t.return,w)}}break;case 3:if(Ci(e,t),Vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(e.containerInfo)}catch(w){ln(t,t.return,w)}break;case 4:Ci(e,t),Vi(t);break;case 13:Ci(e,t),Vi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Mp=hn())),i&4&&H0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(zn=(c=zn)||d,Ci(e,t),zn=c):Ci(e,t),Vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(He=t,d=t.child;d!==null;){for(f=He=d;He!==null;){switch(h=He,p=h.child,h.tag){case 0:case 11:case 14:case 15:Na(4,h,h.return);break;case 1:So(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){ln(i,n,w)}}break;case 5:So(h,h.return);break;case 22:if(h.memoizedState!==null){G0(f);continue}}p!==null?(p.return=h,He=p):G0(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Lv("display",o))}catch(w){ln(t,t.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){ln(t,t.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ci(e,t),Vi(t),i&4&&H0(t);break;case 21:break;default:Ci(e,t),Vi(t)}}function Vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(i1(n)){var i=n;break e}n=n.return}throw Error(Se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ba(r,""),i.flags&=-33);var s=B0(t);Hf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=B0(t);Bf(t,a,o);break;default:throw Error(Se(161))}}catch(l){ln(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yM(t,e,n){He=t,o1(t)}function o1(t,e,n){for(var i=(t.mode&1)!==0;He!==null;){var r=He,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Fl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zn;a=Fl;var c=zn;if(Fl=o,(zn=l)&&!c)for(He=r;He!==null;)o=He,l=o.child,o.tag===22&&o.memoizedState!==null?W0(r):l!==null?(l.return=o,He=l):W0(r);for(;s!==null;)He=s,o1(s),s=s.sibling;He=r,Fl=a,zn=c}V0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,He=s):V0(t)}}function V0(t){for(;He!==null;){var e=He;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zn||du(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Di(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&A0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}A0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Wa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}zn||e.flags&512&&zf(e)}catch(h){ln(e,e.return,h)}}if(e===t){He=null;break}if(n=e.sibling,n!==null){n.return=e.return,He=n;break}He=e.return}}function G0(t){for(;He!==null;){var e=He;if(e===t){He=null;break}var n=e.sibling;if(n!==null){n.return=e.return,He=n;break}He=e.return}}function W0(t){for(;He!==null;){var e=He;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{du(4,e)}catch(l){ln(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ln(e,r,l)}}var s=e.return;try{zf(e)}catch(l){ln(e,s,l)}break;case 5:var o=e.return;try{zf(e)}catch(l){ln(e,o,l)}}}catch(l){ln(e,e.return,l)}if(e===t){He=null;break}var a=e.sibling;if(a!==null){a.return=e.return,He=a;break}He=e.return}}var MM=Math.ceil,jc=_r.ReactCurrentDispatcher,xp=_r.ReactCurrentOwner,Ei=_r.ReactCurrentBatchConfig,Tt=0,bn=null,mn=null,Dn=0,fi=0,wo=ns(0),Mn=0,tl=null,Is=0,fu=0,yp=0,Ua=null,ii=null,Mp=0,Bo=1/0,or=null,Yc=!1,Vf=null,jr=null,Ol=!1,zr=null,qc=0,Fa=0,Gf=null,xc=-1,yc=0;function qn(){return Tt&6?hn():xc!==-1?xc:xc=hn()}function Yr(t){return t.mode&1?Tt&2&&Dn!==0?Dn&-Dn:rM.transition!==null?(yc===0&&(yc=Wv()),yc):(t=Ot,t!==0||(t=window.event,t=t===void 0?16:Jv(t.type)),t):1}function ki(t,e,n,i){if(50<Fa)throw Fa=0,Gf=null,Error(Se(185));ll(t,n,i),(!(Tt&2)||t!==bn)&&(t===bn&&(!(Tt&2)&&(fu|=n),Mn===4&&Ur(t,Dn)),ai(t,i),n===1&&Tt===0&&!(e.mode&1)&&(Bo=hn()+500,lu&&is()))}function ai(t,e){var n=t.callbackNode;ry(t,e);var i=Lc(t,t===bn?Dn:0);if(i===0)n!==null&&Qm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Qm(n),e===1)t.tag===0?iM(X0.bind(null,t)):g_(X0.bind(null,t)),Qy(function(){!(Tt&6)&&is()}),n=null;else{switch(Xv(i)){case 1:n=Yh;break;case 4:n=Vv;break;case 16:n=Pc;break;case 536870912:n=Gv;break;default:n=Pc}n=p1(n,a1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function a1(t,e){if(xc=-1,yc=0,Tt&6)throw Error(Se(327));var n=t.callbackNode;if(Po()&&t.callbackNode!==n)return null;var i=Lc(t,t===bn?Dn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=$c(t,i);else{e=i;var r=Tt;Tt|=2;var s=c1();(bn!==t||Dn!==e)&&(or=null,Bo=hn()+500,Cs(t,e));do try{EM();break}catch(a){l1(t,a)}while(!0);op(),jc.current=s,Tt=r,mn!==null?e=0:(bn=null,Dn=0,e=Mn)}if(e!==0){if(e===2&&(r=gf(t),r!==0&&(i=r,e=Wf(t,r))),e===1)throw n=tl,Cs(t,0),Ur(t,i),ai(t,hn()),n;if(e===6)Ur(t,i);else{if(r=t.current.alternate,!(i&30)&&!SM(r)&&(e=$c(t,i),e===2&&(s=gf(t),s!==0&&(i=s,e=Wf(t,s))),e===1))throw n=tl,Cs(t,0),Ur(t,i),ai(t,hn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Se(345));case 2:_s(t,ii,or);break;case 3:if(Ur(t,i),(i&130023424)===i&&(e=Mp+500-hn(),10<e)){if(Lc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ef(_s.bind(null,t,ii,or),e);break}_s(t,ii,or);break;case 4:if(Ur(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Oi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=hn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*MM(i/1960))-i,10<i){t.timeoutHandle=Ef(_s.bind(null,t,ii,or),i);break}_s(t,ii,or);break;case 5:_s(t,ii,or);break;default:throw Error(Se(329))}}}return ai(t,hn()),t.callbackNode===n?a1.bind(null,t):null}function Wf(t,e){var n=Ua;return t.current.memoizedState.isDehydrated&&(Cs(t,e).flags|=256),t=$c(t,e),t!==2&&(e=ii,ii=n,e!==null&&Xf(e)),t}function Xf(t){ii===null?ii=t:ii.push.apply(ii,t)}function SM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Bi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ur(t,e){for(e&=~yp,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Oi(e),i=1<<n;t[n]=-1,e&=~i}}function X0(t){if(Tt&6)throw Error(Se(327));Po();var e=Lc(t,0);if(!(e&1))return ai(t,hn()),null;var n=$c(t,e);if(t.tag!==0&&n===2){var i=gf(t);i!==0&&(e=i,n=Wf(t,i))}if(n===1)throw n=tl,Cs(t,0),Ur(t,e),ai(t,hn()),n;if(n===6)throw Error(Se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_s(t,ii,or),ai(t,hn()),null}function Sp(t,e){var n=Tt;Tt|=1;try{return t(e)}finally{Tt=n,Tt===0&&(Bo=hn()+500,lu&&is())}}function Ns(t){zr!==null&&zr.tag===0&&!(Tt&6)&&Po();var e=Tt;Tt|=1;var n=Ei.transition,i=Ot;try{if(Ei.transition=null,Ot=1,t)return t()}finally{Ot=i,Ei.transition=n,Tt=e,!(Tt&6)&&is()}}function wp(){fi=wo.current,Kt(wo)}function Cs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Zy(n)),mn!==null)for(n=mn.return;n!==null;){var i=n;switch(ip(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fc();break;case 3:ko(),Kt(si),Kt(Bn),fp();break;case 5:dp(i);break;case 4:ko();break;case 13:Kt(nn);break;case 19:Kt(nn);break;case 10:ap(i.type._context);break;case 22:case 23:wp()}n=n.return}if(bn=t,mn=t=qr(t.current,null),Dn=fi=e,Mn=0,tl=null,yp=fu=Is=0,ii=Ua=null,Es!==null){for(e=0;e<Es.length;e++)if(n=Es[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Es=null}return t}function l1(t,e){do{var n=mn;try{if(op(),gc.current=Xc,Wc){for(var i=rn.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Wc=!1}if(Ds=0,An=yn=rn=null,Ia=!1,Za=0,xp.current=null,n===null||n.return===null){Mn=1,tl=e,mn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Dn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=D0(o);if(p!==null){p.flags&=-257,I0(p,o,a,s,e),p.mode&1&&L0(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){L0(s,c,e),Ep();break e}l=Error(Se(426))}}else if(Qt&&a.mode&1){var v=D0(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),I0(v,o,a,s,e),rp(zo(l,a));break e}}s=l=zo(l,a),Mn!==4&&(Mn=2),Ua===null?Ua=[s]:Ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=X_(s,l,e);T0(s,u);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(jr===null||!jr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=j_(s,a,e);T0(s,M);break e}}s=s.return}while(s!==null)}d1(n)}catch(R){e=R,mn===n&&n!==null&&(mn=n=n.return);continue}break}while(!0)}function c1(){var t=jc.current;return jc.current=Xc,t===null?Xc:t}function Ep(){(Mn===0||Mn===3||Mn===2)&&(Mn=4),bn===null||!(Is&268435455)&&!(fu&268435455)||Ur(bn,Dn)}function $c(t,e){var n=Tt;Tt|=2;var i=c1();(bn!==t||Dn!==e)&&(or=null,Cs(t,e));do try{wM();break}catch(r){l1(t,r)}while(!0);if(op(),Tt=n,jc.current=i,mn!==null)throw Error(Se(261));return bn=null,Dn=0,Mn}function wM(){for(;mn!==null;)u1(mn)}function EM(){for(;mn!==null&&!$x();)u1(mn)}function u1(t){var e=h1(t.alternate,t,fi);t.memoizedProps=t.pendingProps,e===null?d1(t):mn=e,xp.current=null}function d1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vM(n,e),n!==null){n.flags&=32767,mn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mn=6,mn=null;return}}else if(n=gM(n,e,fi),n!==null){mn=n;return}if(e=e.sibling,e!==null){mn=e;return}mn=e=t}while(e!==null);Mn===0&&(Mn=5)}function _s(t,e,n){var i=Ot,r=Ei.transition;try{Ei.transition=null,Ot=1,TM(t,e,n,i)}finally{Ei.transition=r,Ot=i}return null}function TM(t,e,n,i){do Po();while(zr!==null);if(Tt&6)throw Error(Se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sy(t,s),t===bn&&(mn=bn=null,Dn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ol||(Ol=!0,p1(Pc,function(){return Po(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ei.transition,Ei.transition=null;var o=Ot;Ot=1;var a=Tt;Tt|=4,xp.current=null,xM(t,n),s1(n,t),Xy(Sf),Dc=!!Mf,Sf=Mf=null,t.current=n,yM(n),Kx(),Tt=a,Ot=o,Ei.transition=s}else t.current=n;if(Ol&&(Ol=!1,zr=t,qc=r),s=t.pendingLanes,s===0&&(jr=null),Qx(n.stateNode),ai(t,hn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Yc)throw Yc=!1,t=Vf,Vf=null,t;return qc&1&&t.tag!==0&&Po(),s=t.pendingLanes,s&1?t===Gf?Fa++:(Fa=0,Gf=t):Fa=0,is(),null}function Po(){if(zr!==null){var t=Xv(qc),e=Ei.transition,n=Ot;try{if(Ei.transition=null,Ot=16>t?16:t,zr===null)var i=!1;else{if(t=zr,zr=null,qc=0,Tt&6)throw Error(Se(331));var r=Tt;for(Tt|=4,He=t.current;He!==null;){var s=He,o=s.child;if(He.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(He=c;He!==null;){var d=He;switch(d.tag){case 0:case 11:case 15:Na(8,d,s)}var f=d.child;if(f!==null)f.return=d,He=f;else for(;He!==null;){d=He;var h=d.sibling,p=d.return;if(n1(d),d===c){He=null;break}if(h!==null){h.return=p,He=h;break}He=p}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var v=w.sibling;w.sibling=null,w=v}while(w!==null)}}He=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,He=o;else e:for(;He!==null;){if(s=He,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,He=u;break e}He=s.return}}var g=t.current;for(He=g;He!==null;){o=He;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,He=x;else e:for(o=g;He!==null;){if(a=He,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:du(9,a)}}catch(R){ln(a,a.return,R)}if(a===o){He=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,He=M;break e}He=a.return}}if(Tt=r,is(),qi&&typeof qi.onPostCommitFiberRoot=="function")try{qi.onPostCommitFiberRoot(iu,t)}catch{}i=!0}return i}finally{Ot=n,Ei.transition=e}}return!1}function j0(t,e,n){e=zo(n,e),e=X_(t,e,1),t=Xr(t,e,1),e=qn(),t!==null&&(ll(t,1,e),ai(t,e))}function ln(t,e,n){if(t.tag===3)j0(t,t,n);else for(;e!==null;){if(e.tag===3){j0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(jr===null||!jr.has(i))){t=zo(n,t),t=j_(e,t,1),e=Xr(e,t,1),t=qn(),e!==null&&(ll(e,1,t),ai(e,t));break}}e=e.return}}function AM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qn(),t.pingedLanes|=t.suspendedLanes&n,bn===t&&(Dn&n)===n&&(Mn===4||Mn===3&&(Dn&130023424)===Dn&&500>hn()-Mp?Cs(t,0):yp|=n),ai(t,e)}function f1(t,e){e===0&&(t.mode&1?(e=bl,bl<<=1,!(bl&130023424)&&(bl=4194304)):e=1);var n=qn();t=gr(t,e),t!==null&&(ll(t,e,n),ai(t,n))}function bM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),f1(t,n)}function CM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Se(314))}i!==null&&i.delete(e),f1(t,n)}var h1;h1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||si.current)ri=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ri=!1,mM(t,e,n);ri=!!(t.flags&131072)}else ri=!1,Qt&&e.flags&1048576&&v_(e,zc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;_c(t,e),t=e.pendingProps;var r=Uo(e,Bn.current);Ro(e,n),r=pp(null,e,i,t,r,n);var s=mp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,oi(i)?(s=!0,Oc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cp(e),r.updater=uu,e.stateNode=r,r._reactInternals=e,Lf(e,i,t,n),e=Nf(null,e,i,!0,s,n)):(e.tag=0,Qt&&s&&np(e),Xn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(_c(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=PM(i),t=Di(i,t),r){case 0:e=If(null,e,i,t,n);break e;case 1:e=F0(null,e,i,t,n);break e;case 11:e=N0(null,e,i,t,n);break e;case 14:e=U0(null,e,i,Di(i.type,t),n);break e}throw Error(Se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Di(i,r),If(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Di(i,r),F0(t,e,i,r,n);case 3:e:{if(K_(e),t===null)throw Error(Se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,w_(t,e),Vc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=zo(Error(Se(423)),e),e=O0(t,e,i,n,r);break e}else if(i!==r){r=zo(Error(Se(424)),e),e=O0(t,e,i,n,r);break e}else for(pi=Wr(e.stateNode.containerInfo.firstChild),mi=e,Qt=!0,Ni=null,n=M_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fo(),i===r){e=vr(t,e,n);break e}Xn(t,e,i,n)}e=e.child}return e;case 5:return E_(e),t===null&&Cf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,wf(i,r)?o=null:s!==null&&wf(i,s)&&(e.flags|=32),$_(t,e),Xn(t,e,o,n),e.child;case 6:return t===null&&Cf(e),null;case 13:return J_(t,e,n);case 4:return up(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Oo(e,null,i,n):Xn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Di(i,r),N0(t,e,i,r,n);case 7:return Xn(t,e,e.pendingProps,n),e.child;case 8:return Xn(t,e,e.pendingProps.children,n),e.child;case 12:return Xn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Yt(Bc,i._currentValue),i._currentValue=o,s!==null)if(Bi(s.value,o)){if(s.children===r.children&&!si.current){e=vr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=fr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Rf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ro(e,n),r=Ti(r),i=i(r),e.flags|=1,Xn(t,e,i,n),e.child;case 14:return i=e.type,r=Di(i,e.pendingProps),r=Di(i.type,r),U0(t,e,i,r,n);case 15:return Y_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Di(i,r),_c(t,e),e.tag=1,oi(i)?(t=!0,Oc(e)):t=!1,Ro(e,n),W_(e,i,r),Lf(e,i,r,n),Nf(null,e,i,!0,t,n);case 19:return Z_(t,e,n);case 22:return q_(t,e,n)}throw Error(Se(156,e.tag))};function p1(t,e){return Hv(t,e)}function RM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(t,e,n,i){return new RM(t,e,n,i)}function Tp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function PM(t){if(typeof t=="function")return Tp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wh)return 11;if(t===Xh)return 14}return 2}function qr(t,e){var n=t.alternate;return n===null?(n=wi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Mc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Tp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ho:return Rs(n.children,r,s,e);case Gh:o=8,r|=8;break;case ef:return t=wi(12,n,e,r|2),t.elementType=ef,t.lanes=s,t;case tf:return t=wi(13,n,e,r),t.elementType=tf,t.lanes=s,t;case nf:return t=wi(19,n,e,r),t.elementType=nf,t.lanes=s,t;case Ev:return hu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sv:o=10;break e;case wv:o=9;break e;case Wh:o=11;break e;case Xh:o=14;break e;case Dr:o=16,i=null;break e}throw Error(Se(130,t==null?t:typeof t,""))}return e=wi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Rs(t,e,n,i){return t=wi(7,t,i,e),t.lanes=n,t}function hu(t,e,n,i){return t=wi(22,t,i,e),t.elementType=Ev,t.lanes=n,t.stateNode={isHidden:!1},t}function ud(t,e,n){return t=wi(6,t,null,e),t.lanes=n,t}function dd(t,e,n){return e=wi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ap(t,e,n,i,r,s,o,a,l){return t=new LM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cp(s),t}function DM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function m1(t){if(!t)return Zr;t=t._reactInternals;e:{if(ks(t)!==t||t.tag!==1)throw Error(Se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(oi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Se(171))}if(t.tag===1){var n=t.type;if(oi(n))return m_(t,n,e)}return e}function g1(t,e,n,i,r,s,o,a,l){return t=Ap(n,i,!0,t,r,s,o,a,l),t.context=m1(null),n=t.current,i=qn(),r=Yr(n),s=fr(i,r),s.callback=e??null,Xr(n,s,r),t.current.lanes=r,ll(t,r,i),ai(t,i),t}function pu(t,e,n,i){var r=e.current,s=qn(),o=Yr(r);return n=m1(n),e.context===null?e.context=n:e.pendingContext=n,e=fr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xr(r,e,o),t!==null&&(ki(t,r,o,s),mc(t,r,o)),o}function Kc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Y0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bp(t,e){Y0(t,e),(t=t.alternate)&&Y0(t,e)}function IM(){return null}var v1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cp(t){this._internalRoot=t}mu.prototype.render=Cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Se(409));pu(t,e,null,null)};mu.prototype.unmount=Cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ns(function(){pu(null,t,null,null)}),e[mr]=null}};function mu(t){this._internalRoot=t}mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=qv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&Kv(t)}};function Rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function q0(){}function NM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Kc(o);s.call(c)}}var o=g1(e,i,t,0,null,!1,!1,"",q0);return t._reactRootContainer=o,t[mr]=o.current,Ya(t.nodeType===8?t.parentNode:t),Ns(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Kc(l);a.call(c)}}var l=Ap(t,0,!1,null,null,!1,!1,"",q0);return t._reactRootContainer=l,t[mr]=l.current,Ya(t.nodeType===8?t.parentNode:t),Ns(function(){pu(e,l,n,i)}),l}function vu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Kc(o);a.call(l)}}pu(e,o,t,r)}else o=NM(n,e,t,r,i);return Kc(o)}jv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ta(e.pendingLanes);n!==0&&(qh(e,n|1),ai(e,hn()),!(Tt&6)&&(Bo=hn()+500,is()))}break;case 13:Ns(function(){var i=gr(t,1);if(i!==null){var r=qn();ki(i,t,1,r)}}),bp(t,1)}};$h=function(t){if(t.tag===13){var e=gr(t,134217728);if(e!==null){var n=qn();ki(e,t,134217728,n)}bp(t,134217728)}};Yv=function(t){if(t.tag===13){var e=Yr(t),n=gr(t,e);if(n!==null){var i=qn();ki(n,t,e,i)}bp(t,e)}};qv=function(){return Ot};$v=function(t,e){var n=Ot;try{return Ot=t,e()}finally{Ot=n}};hf=function(t,e,n){switch(e){case"input":if(of(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=au(i);if(!r)throw Error(Se(90));Av(i),of(i,r)}}}break;case"textarea":Cv(t,n);break;case"select":e=n.value,e!=null&&To(t,!!n.multiple,e,!1)}};Uv=Sp;Fv=Ns;var UM={usingClientEntryPoint:!1,Events:[ul,vo,au,Iv,Nv,Sp]},ha={findFiberByHostInstance:ws,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FM={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zv(t),t===null?null:t.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||IM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{iu=kl.inject(FM),qi=kl}catch{}}vi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UM;vi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rp(e))throw Error(Se(200));return DM(t,e,null,n)};vi.createRoot=function(t,e){if(!Rp(t))throw Error(Se(299));var n=!1,i="",r=v1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ap(t,1,!1,null,null,n,!1,i,r),t[mr]=e.current,Ya(t.nodeType===8?t.parentNode:t),new Cp(e)};vi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Se(188)):(t=Object.keys(t).join(","),Error(Se(268,t)));return t=zv(e),t=t===null?null:t.stateNode,t};vi.flushSync=function(t){return Ns(t)};vi.hydrate=function(t,e,n){if(!gu(e))throw Error(Se(200));return vu(null,t,e,!0,n)};vi.hydrateRoot=function(t,e,n){if(!Rp(t))throw Error(Se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=v1;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=g1(e,null,t,1,n??null,r,!1,s,o),t[mr]=e.current,Ya(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new mu(e)};vi.render=function(t,e,n){if(!gu(e))throw Error(Se(200));return vu(null,t,e,!1,n)};vi.unmountComponentAtNode=function(t){if(!gu(t))throw Error(Se(40));return t._reactRootContainer?(Ns(function(){vu(null,null,t,!1,function(){t._reactRootContainer=null,t[mr]=null})}),!0):!1};vi.unstable_batchedUpdates=Sp;vi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!gu(n))throw Error(Se(200));if(t==null||t._reactInternals===void 0)throw Error(Se(38));return vu(t,e,n,!1,i)};vi.version="18.3.1-next-f1338f8080-20240426";function _1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_1)}catch(t){console.error(t)}}_1(),_v.exports=vi;var OM=_v.exports,x1,$0=OM;x1=$0.createRoot,$0.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pp="180",kM=0,K0=1,zM=2,y1=1,M1=2,sr=3,Qr=0,li=1,Yn=2,$r=0,Lo=1,J0=2,Z0=3,Q0=4,BM=5,Ms=100,HM=101,VM=102,GM=103,WM=104,XM=200,jM=201,YM=202,qM=203,jf=204,Yf=205,$M=206,KM=207,JM=208,ZM=209,QM=210,eS=211,tS=212,nS=213,iS=214,qf=0,$f=1,Kf=2,Ho=3,Jf=4,Zf=5,Qf=6,eh=7,Lp=0,rS=1,sS=2,Kr=0,oS=1,aS=2,lS=3,S1=4,cS=5,uS=6,dS=7,w1=300,Vo=301,Go=302,th=303,nh=304,_u=306,Do=1e3,As=1001,ih=1002,zi=1003,fS=1004,zl=1005,ji=1006,fd=1007,bs=1008,Ji=1009,E1=1010,T1=1011,nl=1012,Dp=1013,Us=1014,dr=1015,fl=1016,Ip=1017,Np=1018,il=1020,A1=35902,b1=35899,C1=1021,R1=1022,Fi=1023,rl=1026,sl=1027,P1=1028,Up=1029,L1=1030,Fp=1031,Op=1033,Sc=33776,wc=33777,Ec=33778,Tc=33779,rh=35840,sh=35841,oh=35842,ah=35843,lh=36196,ch=37492,uh=37496,dh=37808,fh=37809,hh=37810,ph=37811,mh=37812,gh=37813,vh=37814,_h=37815,xh=37816,yh=37817,Mh=37818,Sh=37819,wh=37820,Eh=37821,Th=36492,Ah=36494,bh=36495,Ch=36283,Rh=36284,Ph=36285,Lh=36286,hS=3200,pS=3201,kp=0,mS=1,Fr="",jn="srgb",Wo="srgb-linear",Jc="linear",Vt="srgb",$s=7680,eg=519,gS=512,vS=513,_S=514,D1=515,xS=516,yS=517,MS=518,SS=519,tg=35044,ng="300 es",Yi=2e3,Zc=2001;class $o{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hd=Math.PI/180,Dh=180/Math.PI;function hl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(On[t&255]+On[t>>8&255]+On[t>>16&255]+On[t>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[n&63|128]+On[n>>8&255]+"-"+On[n>>16&255]+On[n>>24&255]+On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]).toLowerCase()}function _t(t,e,n){return Math.max(e,Math.min(n,t))}function wS(t,e){return(t%e+e)%e}function pd(t,e,n){return(1-n)*t+n*e}function pa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ni(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],y=s[o+2],w=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=y,e[n+3]=w;return}if(f!==w||l!==h||c!==p||d!==y){let v=1-a;const u=l*h+c*p+d*y+f*w,g=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const R=Math.sqrt(x),P=Math.atan2(R,u*g);v=Math.sin(v*P)/R,a=Math.sin(a*P)/R}const M=a*g;if(l=l*v+h*M,c=c*v+p*M,d=d*v+y*M,f=f*v+w*M,v===1-a){const R=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=R,c*=R,d*=R,f*=R}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],p=s[o+2],y=s[o+3];return e[n]=a*y+d*f+l*p-c*h,e[n+1]=l*y+d*h+c*f-a*p,e[n+2]=c*y+d*p+a*h-l*f,e[n+3]=d*y-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*p*y,this._y=c*p*f-h*d*y,this._z=c*d*y+h*p*f,this._w=c*d*f-h*p*y;break;case"YXZ":this._x=h*d*f+c*p*y,this._y=c*p*f-h*d*y,this._z=c*d*y-h*p*f,this._w=c*d*f+h*p*y;break;case"ZXY":this._x=h*d*f-c*p*y,this._y=c*p*f+h*d*y,this._z=c*d*y+h*p*f,this._w=c*d*f-h*p*y;break;case"ZYX":this._x=h*d*f-c*p*y,this._y=c*p*f+h*d*y,this._z=c*d*y-h*p*f,this._w=c*d*f+h*p*y;break;case"YZX":this._x=h*d*f+c*p*y,this._y=c*p*f+h*d*y,this._z=c*d*y-h*p*f,this._w=c*d*f-h*p*y;break;case"XZY":this._x=h*d*f-c*p*y,this._y=c*p*f-h*d*y,this._z=c*d*y+h*p*f,this._w=c*d*f+h*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ig.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ig.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return md.copy(this).projectOnVector(e),this.sub(md)}reflect(e){return this.sub(md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const md=new z,ig=new pl;class dt{constructor(e,n,i,r,s,o,a,l,c){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],y=i[8],w=r[0],v=r[3],u=r[6],g=r[1],x=r[4],M=r[7],R=r[2],P=r[5],L=r[8];return s[0]=o*w+a*g+l*R,s[3]=o*v+a*x+l*P,s[6]=o*u+a*M+l*L,s[1]=c*w+d*g+f*R,s[4]=c*v+d*x+f*P,s[7]=c*u+d*M+f*L,s[2]=h*w+p*g+y*R,s[5]=h*v+p*x+y*P,s[8]=h*u+p*M+y*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,p=c*s-o*l,y=n*f+i*h+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=f*w,e[1]=(r*c-d*i)*w,e[2]=(a*i-r*o)*w,e[3]=h*w,e[4]=(d*n-r*l)*w,e[5]=(r*s-a*n)*w,e[6]=p*w,e[7]=(i*l-c*n)*w,e[8]=(o*n-i*s)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(gd.makeScale(e,n)),this}rotate(e){return this.premultiply(gd.makeRotation(-e)),this}translate(e,n){return this.premultiply(gd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gd=new dt;function I1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Qc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ES(){const t=Qc("canvas");return t.style.display="block",t}const rg={};function ol(t){t in rg||(rg[t]=!0,console.warn(t))}function TS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const sg=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),og=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AS(){const t={enabled:!0,workingColorSpace:Wo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Vt&&(r.r=hr(r.r),r.g=hr(r.g),r.b=hr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Vt&&(r.r=Io(r.r),r.g=Io(r.g),r.b=Io(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fr?Jc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ol("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ol("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Wo]:{primaries:e,whitePoint:i,transfer:Jc,toXYZ:sg,fromXYZ:og,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:i,transfer:Vt,toXYZ:sg,fromXYZ:og,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),t}const Rt=AS();function hr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Io(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ks;class bS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ks===void 0&&(Ks=Qc("canvas")),Ks.width=e.width,Ks.height=e.height;const r=Ks.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ks}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Qc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hr(n[i]/255)*255):n[i]=hr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CS=0;class zp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=hl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vd(r[o].image)):s.push(vd(r[o]))}else s=vd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function vd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RS=0;const _d=new z;class $n extends $o{constructor(e=$n.DEFAULT_IMAGE,n=$n.DEFAULT_MAPPING,i=As,r=As,s=ji,o=bs,a=Fi,l=Ji,c=$n.DEFAULT_ANISOTROPY,d=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=hl(),this.name="",this.source=new zp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_d).x}get height(){return this.source.getSize(_d).y}get depth(){return this.source.getSize(_d).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==w1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Do:e.x=e.x-Math.floor(e.x);break;case As:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Do:e.y=e.y-Math.floor(e.y);break;case As:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=w1;$n.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,i=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],y=l[9],w=l[2],v=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-w)<.01&&Math.abs(y-v)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+w)<.1&&Math.abs(y+v)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(p+1)/2,R=(u+1)/2,P=(d+h)/4,L=(f+w)/4,I=(y+v)/4;return x>M&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=P/i,s=L/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=P/r,s=I/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=L/s,r=I/s),this.set(i,r,s,n),this}let g=Math.sqrt((v-y)*(v-y)+(f-w)*(f-w)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(v-y)/g,this.y=(f-w)/g,this.z=(h-d)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this.w=_t(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this.w=_t(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PS extends $o{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new $n(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ji,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new zp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fs extends PS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class N1 extends $n{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zi,this.minFilter=zi,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LS extends $n{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zi,this.minFilter=zi,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ri):Ri.fromBufferAttribute(s,o),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bl.copy(i.boundingBox)),Bl.applyMatrix4(e.matrixWorld),this.union(Bl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Hl.subVectors(this.max,ma),Js.subVectors(e.a,ma),Zs.subVectors(e.b,ma),Qs.subVectors(e.c,ma),Tr.subVectors(Zs,Js),Ar.subVectors(Qs,Zs),us.subVectors(Js,Qs);let n=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-us.z,us.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,us.z,0,-us.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-us.y,us.x,0];return!xd(n,Js,Zs,Qs,Hl)||(n=[1,0,0,0,1,0,0,0,1],!xd(n,Js,Zs,Qs,Hl))?!1:(Vl.crossVectors(Tr,Ar),n=[Vl.x,Vl.y,Vl.z],xd(n,Js,Zs,Qs,Hl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const er=[new z,new z,new z,new z,new z,new z,new z,new z],Ri=new z,Bl=new ml,Js=new z,Zs=new z,Qs=new z,Tr=new z,Ar=new z,us=new z,ma=new z,Hl=new z,Vl=new z,ds=new z;function xd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ds.fromArray(t,s);const a=r.x*Math.abs(ds.x)+r.y*Math.abs(ds.y)+r.z*Math.abs(ds.z),l=e.dot(ds),c=n.dot(ds),d=i.dot(ds);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const DS=new ml,ga=new z,yd=new z;class xu{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):DS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const n=ga.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ga,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(yd)),this.expandByPoint(ga.copy(e.center).sub(yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const tr=new z,Md=new z,Gl=new z,br=new z,Sd=new z,Wl=new z,wd=new z;class Bp{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=tr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,n),tr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Md.copy(e).add(n).multiplyScalar(.5),Gl.copy(n).sub(e).normalize(),br.copy(this.origin).sub(Md);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Gl),a=br.dot(this.direction),l=-br.dot(Gl),c=br.lengthSq(),d=Math.abs(1-o*o);let f,h,p,y;if(d>0)if(f=o*l-a,h=o*a-l,y=s*d,f>=0)if(h>=-y)if(h<=y){const w=1/d;f*=w,h*=w,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-y?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=y?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Md).addScaledVector(Gl,h),p}intersectSphere(e,n){tr.subVectors(e.center,this.origin);const i=tr.dot(this.direction),r=tr.dot(tr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,n,i,r,s){Sd.subVectors(n,e),Wl.subVectors(i,e),wd.crossVectors(Sd,Wl);let o=this.direction.dot(wd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;br.subVectors(this.origin,e);const l=a*this.direction.dot(Wl.crossVectors(br,Wl));if(l<0)return null;const c=a*this.direction.dot(Sd.cross(br));if(c<0||l+c>o)return null;const d=-a*br.dot(wd);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,n,i,r,s,o,a,l,c,d,f,h,p,y,w,v){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,p,y,w,v)}set(e,n,i,r,s,o,a,l,c,d,f,h,p,y,w,v){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=y,u[11]=w,u[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/eo.setFromMatrixColumn(e,0).length(),s=1/eo.setFromMatrixColumn(e,1).length(),o=1/eo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*f,y=a*d,w=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+y*c,n[5]=h-w*c,n[9]=-a*l,n[2]=w-h*c,n[6]=y+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,y=c*d,w=c*f;n[0]=h+w*a,n[4]=y*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-y,n[6]=w+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,y=c*d,w=c*f;n[0]=h-w*a,n[4]=-o*f,n[8]=y+p*a,n[1]=p+y*a,n[5]=o*d,n[9]=w-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,y=a*d,w=a*f;n[0]=l*d,n[4]=y*c-p,n[8]=h*c+w,n[1]=l*f,n[5]=w*c+h,n[9]=p*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,y=a*l,w=a*c;n[0]=l*d,n[4]=w-h*f,n[8]=y*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+y,n[10]=h-w*f}else if(e.order==="XZY"){const h=o*l,p=o*c,y=a*l,w=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+w,n[5]=o*d,n[9]=p*f-y,n[2]=y*f-p,n[6]=a*d,n[10]=w*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(IS,e,NS)}lookAt(e,n,i){const r=this.elements;return ui.subVectors(e,n),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Cr.crossVectors(i,ui),Cr.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Cr.crossVectors(i,ui)),Cr.normalize(),Xl.crossVectors(ui,Cr),r[0]=Cr.x,r[4]=Xl.x,r[8]=ui.x,r[1]=Cr.y,r[5]=Xl.y,r[9]=ui.y,r[2]=Cr.z,r[6]=Xl.z,r[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],y=i[2],w=i[6],v=i[10],u=i[14],g=i[3],x=i[7],M=i[11],R=i[15],P=r[0],L=r[4],I=r[8],E=r[12],S=r[1],N=r[5],H=r[9],Q=r[13],se=r[2],le=r[6],V=r[10],Y=r[14],U=r[3],ee=r[7],ie=r[11],Ee=r[15];return s[0]=o*P+a*S+l*se+c*U,s[4]=o*L+a*N+l*le+c*ee,s[8]=o*I+a*H+l*V+c*ie,s[12]=o*E+a*Q+l*Y+c*Ee,s[1]=d*P+f*S+h*se+p*U,s[5]=d*L+f*N+h*le+p*ee,s[9]=d*I+f*H+h*V+p*ie,s[13]=d*E+f*Q+h*Y+p*Ee,s[2]=y*P+w*S+v*se+u*U,s[6]=y*L+w*N+v*le+u*ee,s[10]=y*I+w*H+v*V+u*ie,s[14]=y*E+w*Q+v*Y+u*Ee,s[3]=g*P+x*S+M*se+R*U,s[7]=g*L+x*N+M*le+R*ee,s[11]=g*I+x*H+M*V+R*ie,s[15]=g*E+x*Q+M*Y+R*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],y=e[3],w=e[7],v=e[11],u=e[15];return y*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+w*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*d-s*l*d)+v*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],y=e[12],w=e[13],v=e[14],u=e[15],g=f*v*c-w*h*c+w*l*p-a*v*p-f*l*u+a*h*u,x=y*h*c-d*v*c-y*l*p+o*v*p+d*l*u-o*h*u,M=d*w*c-y*f*c+y*a*p-o*w*p-d*a*u+o*f*u,R=y*f*l-d*w*l-y*a*h+o*w*h+d*a*v-o*f*v,P=n*g+i*x+r*M+s*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=g*L,e[1]=(w*h*s-f*v*s-w*r*p+i*v*p+f*r*u-i*h*u)*L,e[2]=(a*v*s-w*l*s+w*r*c-i*v*c-a*r*u+i*l*u)*L,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*L,e[4]=x*L,e[5]=(d*v*s-y*h*s+y*r*p-n*v*p-d*r*u+n*h*u)*L,e[6]=(y*l*s-o*v*s-y*r*c+n*v*c+o*r*u-n*l*u)*L,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*p+n*l*p)*L,e[8]=M*L,e[9]=(y*f*s-d*w*s-y*i*p+n*w*p+d*i*u-n*f*u)*L,e[10]=(o*w*s-y*a*s+y*i*c-n*w*c-o*i*u+n*a*u)*L,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*p-n*a*p)*L,e[12]=R*L,e[13]=(d*w*r-y*f*r+y*i*h-n*w*h-d*i*v+n*f*v)*L,e[14]=(y*a*r-o*w*r-y*i*l+n*w*l+o*i*v-n*a*v)*L,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,p=s*d,y=s*f,w=o*d,v=o*f,u=a*f,g=l*c,x=l*d,M=l*f,R=i.x,P=i.y,L=i.z;return r[0]=(1-(w+u))*R,r[1]=(p+M)*R,r[2]=(y-x)*R,r[3]=0,r[4]=(p-M)*P,r[5]=(1-(h+u))*P,r[6]=(v+g)*P,r[7]=0,r[8]=(y+x)*L,r[9]=(v-g)*L,r[10]=(1-(h+w))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=eo.set(r[0],r[1],r[2]).length();const o=eo.set(r[4],r[5],r[6]).length(),a=eo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pi.copy(this);const c=1/s,d=1/o,f=1/a;return Pi.elements[0]*=c,Pi.elements[1]*=c,Pi.elements[2]*=c,Pi.elements[4]*=d,Pi.elements[5]*=d,Pi.elements[6]*=d,Pi.elements[8]*=f,Pi.elements[9]*=f,Pi.elements[10]*=f,n.setFromRotationMatrix(Pi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Yi,l=!1){const c=this.elements,d=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let y,w;if(l)y=s/(o-s),w=o*s/(o-s);else if(a===Yi)y=-(o+s)/(o-s),w=-2*o*s/(o-s);else if(a===Zc)y=-o/(o-s),w=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Yi,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let y,w;if(l)y=1/(o-s),w=o/(o-s);else if(a===Yi)y=-2/(o-s),w=-(o+s)/(o-s);else if(a===Zc)y=-1/(o-s),w=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const eo=new z,Pi=new Jt,IS=new z(0,0,0),NS=new z(1,1,1),Cr=new z,Xl=new z,ui=new z,ag=new Jt,lg=new pl;class Hi{constructor(e=0,n=0,i=0,r=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ag.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ag,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lg.setFromEuler(this),this.setFromQuaternion(lg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Hp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let US=0;const cg=new z,to=new pl,nr=new Jt,jl=new z,va=new z,FS=new z,OS=new pl,ug=new z(1,0,0),dg=new z(0,1,0),fg=new z(0,0,1),hg={type:"added"},kS={type:"removed"},no={type:"childadded",child:null},Ed={type:"childremoved",child:null};class Cn extends $o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=hl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new z,n=new Hi,i=new pl,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new dt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return to.setFromAxisAngle(e,n),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,n){return to.setFromAxisAngle(e,n),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(ug,e)}rotateY(e){return this.rotateOnAxis(dg,e)}rotateZ(e){return this.rotateOnAxis(fg,e)}translateOnAxis(e,n){return cg.copy(e).applyQuaternion(this.quaternion),this.position.add(cg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ug,e)}translateY(e){return this.translateOnAxis(dg,e)}translateZ(e){return this.translateOnAxis(fg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?jl.copy(e):jl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(va,jl,this.up):nr.lookAt(jl,va,this.up),this.quaternion.setFromRotationMatrix(nr),r&&(nr.extractRotation(r.matrixWorld),to.setFromRotationMatrix(nr),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hg),no.child=e,this.dispatchEvent(no),no.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kS),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hg),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,FS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,OS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Cn.DEFAULT_UP=new z(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new z,ir=new z,Td=new z,rr=new z,io=new z,ro=new z,pg=new z,Ad=new z,bd=new z,Cd=new z,Rd=new Gt,Pd=new Gt,Ld=new Gt;class Ui{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Li.subVectors(e,n),r.cross(Li);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Li.subVectors(r,n),ir.subVectors(i,n),Td.subVectors(e,n);const o=Li.dot(Li),a=Li.dot(ir),l=Li.dot(Td),c=ir.dot(ir),d=ir.dot(Td),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*d)*h,y=(o*d-a*l)*h;return s.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,rr.x),l.addScaledVector(o,rr.y),l.addScaledVector(a,rr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Rd.setScalar(0),Pd.setScalar(0),Ld.setScalar(0),Rd.fromBufferAttribute(e,n),Pd.fromBufferAttribute(e,i),Ld.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Rd,s.x),o.addScaledVector(Pd,s.y),o.addScaledVector(Ld,s.z),o}static isFrontFacing(e,n,i,r){return Li.subVectors(i,n),ir.subVectors(e,n),Li.cross(ir).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),Li.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ui.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;io.subVectors(r,i),ro.subVectors(s,i),Ad.subVectors(e,i);const l=io.dot(Ad),c=ro.dot(Ad);if(l<=0&&c<=0)return n.copy(i);bd.subVectors(e,r);const d=io.dot(bd),f=ro.dot(bd);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(io,o);Cd.subVectors(e,s);const p=io.dot(Cd),y=ro.dot(Cd);if(y>=0&&p<=y)return n.copy(s);const w=p*c-l*y;if(w<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(ro,a);const v=d*y-p*f;if(v<=0&&f-d>=0&&p-y>=0)return pg.subVectors(s,r),a=(f-d)/(f-d+(p-y)),n.copy(r).addScaledVector(pg,a);const u=1/(v+w+h);return o=w*u,a=h*u,n.copy(i).addScaledVector(io,o).addScaledVector(ro,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const U1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function Dd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class xt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Rt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Rt.workingColorSpace){if(e=wS(e,1),n=_t(n,0,1),i=_t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Dd(o,s,e+1/3),this.g=Dd(o,s,e),this.b=Dd(o,s,e-1/3)}return Rt.colorSpaceToWorking(this,r),this}setStyle(e,n=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const i=U1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Rt.workingToColorSpace(kn.copy(this),e),Math.round(_t(kn.r*255,0,255))*65536+Math.round(_t(kn.g*255,0,255))*256+Math.round(_t(kn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.workingToColorSpace(kn.copy(this),n);const i=kn.r,r=kn.g,s=kn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Rt.workingColorSpace){return Rt.workingToColorSpace(kn.copy(this),n),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=jn){Rt.workingToColorSpace(kn.copy(this),e);const n=kn.r,i=kn.g,r=kn.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+n,Rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Rr),e.getHSL(Yl);const i=pd(Rr.h,Yl.h,n),r=pd(Rr.s,Yl.s,n),s=pd(Rr.l,Yl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new xt;xt.NAMES=U1;let zS=0;class zs extends $o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=hl(),this.name="",this.type="Material",this.blending=Lo,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jf,this.blendDst=Yf,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(i.blending=this.blending),this.side!==Qr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jf&&(i.blendSrc=this.blendSrc),this.blendDst!==Yf&&(i.blendDst=this.blendDst),this.blendEquation!==Ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lr extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Lp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new z,ql=new $e;let BS=0;class Ki{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=tg,this.updateRanges=[],this.gpuType=dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ql.fromBufferAttribute(this,n),ql.applyMatrix3(e),this.setXY(n,ql.x,ql.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix3(e),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix4(e),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)pn.fromBufferAttribute(this,n),pn.applyNormalMatrix(e),this.setXYZ(n,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)pn.fromBufferAttribute(this,n),pn.transformDirection(e),this.setXYZ(n,pn.x,pn.y,pn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=pa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ni(n,this.array),i=ni(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ni(n,this.array),i=ni(i,this.array),r=ni(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ni(n,this.array),i=ni(i,this.array),r=ni(r,this.array),s=ni(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tg&&(e.usage=this.usage),e}}class F1 extends Ki{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class O1 extends Ki{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wt extends Ki{constructor(e,n,i){super(new Float32Array(e),n,i)}}let HS=0;const yi=new Jt,Id=new Cn,so=new z,di=new ml,_a=new ml,Tn=new z;class gn extends $o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=hl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I1(e)?O1:F1)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new dt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,n,i){return yi.makeTranslation(e,n,i),this.applyMatrix4(yi),this}scale(e,n,i){return yi.makeScale(e,n,i),this.applyMatrix4(yi),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];di.setFromBufferAttribute(s),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(di.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];_a.setFromBufferAttribute(a),this.morphTargetsRelative?(Tn.addVectors(di.min,_a.min),di.expandByPoint(Tn),Tn.addVectors(di.max,_a.max),di.expandByPoint(Tn)):(di.expandByPoint(_a.min),di.expandByPoint(_a.max))}di.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Tn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Tn.fromBufferAttribute(a,c),l&&(so.fromBufferAttribute(e,c),Tn.add(so)),r=Math.max(r,i.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ki(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new z,l[I]=new z;const c=new z,d=new z,f=new z,h=new $e,p=new $e,y=new $e,w=new z,v=new z;function u(I,E,S){c.fromBufferAttribute(i,I),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,I),p.fromBufferAttribute(s,E),y.fromBufferAttribute(s,S),d.sub(c),f.sub(c),p.sub(h),y.sub(h);const N=1/(p.x*y.y-y.x*p.y);isFinite(N)&&(w.copy(d).multiplyScalar(y.y).addScaledVector(f,-p.y).multiplyScalar(N),v.copy(f).multiplyScalar(p.x).addScaledVector(d,-y.x).multiplyScalar(N),a[I].add(w),a[E].add(w),a[S].add(w),l[I].add(v),l[E].add(v),l[S].add(v))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let I=0,E=g.length;I<E;++I){const S=g[I],N=S.start,H=S.count;for(let Q=N,se=N+H;Q<se;Q+=3)u(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const x=new z,M=new z,R=new z,P=new z;function L(I){R.fromBufferAttribute(r,I),P.copy(R);const E=a[I];x.copy(E),x.sub(R.multiplyScalar(R.dot(E))).normalize(),M.crossVectors(P,E);const N=M.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,N)}for(let I=0,E=g.length;I<E;++I){const S=g[I],N=S.start,H=S.count;for(let Q=N,se=N+H;Q<se;Q+=3)L(e.getX(Q+0)),L(e.getX(Q+1)),L(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ki(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,d=new z,f=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const y=e.getX(h+0),w=e.getX(h+1),v=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,w),o.fromBufferAttribute(n,v),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,v),a.add(d),l.add(d),c.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tn.fromBufferAttribute(e,n),Tn.normalize(),e.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let p=0,y=0;for(let w=0,v=l.length;w<v;w++){a.isInterleavedBufferAttribute?p=l[w]*a.data.stride+a.offset:p=l[w]*d;for(let u=0;u<d;u++)h[y++]=c[p++]}return new Ki(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mg=new Jt,fs=new Bp,$l=new xu,gg=new z,Kl=new z,Jl=new z,Zl=new z,Nd=new z,Ql=new z,vg=new z,ec=new z;class Z extends Cn{constructor(e=new gn,n=new lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ql.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Nd.fromBufferAttribute(f,e),o?Ql.addScaledVector(Nd,d):Ql.addScaledVector(Nd.sub(n),d))}n.add(Ql)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(s),fs.copy(e.ray).recast(e.near),!($l.containsPoint(fs.origin)===!1&&(fs.intersectSphere($l,gg)===null||fs.origin.distanceToSquared(gg)>(e.far-e.near)**2))&&(mg.copy(s).invert(),fs.copy(e.ray).applyMatrix4(mg),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fs)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,w=h.length;y<w;y++){const v=h[y],u=o[v.materialIndex],g=Math.max(v.start,p.start),x=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let M=g,R=x;M<R;M+=3){const P=a.getX(M),L=a.getX(M+1),I=a.getX(M+2);r=tc(this,u,e,i,c,d,f,P,L,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),w=Math.min(a.count,p.start+p.count);for(let v=y,u=w;v<u;v+=3){const g=a.getX(v),x=a.getX(v+1),M=a.getX(v+2);r=tc(this,o,e,i,c,d,f,g,x,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,w=h.length;y<w;y++){const v=h[y],u=o[v.materialIndex],g=Math.max(v.start,p.start),x=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let M=g,R=x;M<R;M+=3){const P=M,L=M+1,I=M+2;r=tc(this,u,e,i,c,d,f,P,L,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),w=Math.min(l.count,p.start+p.count);for(let v=y,u=w;v<u;v+=3){const g=v,x=v+1,M=v+2;r=tc(this,o,e,i,c,d,f,g,x,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function VS(t,e,n,i,r,s,o,a){let l;if(e.side===li?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Qr,a),l===null)return null;ec.copy(a),ec.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ec);return c<n.near||c>n.far?null:{distance:c,point:ec.clone(),object:t}}function tc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Kl),t.getVertexPosition(l,Jl),t.getVertexPosition(c,Zl);const d=VS(t,e,n,i,Kl,Jl,Zl,vg);if(d){const f=new z;Ui.getBarycoord(vg,Kl,Jl,Zl,f),r&&(d.uv=Ui.getInterpolatedAttribute(r,a,l,c,f,new $e)),s&&(d.uv1=Ui.getInterpolatedAttribute(s,a,l,c,f,new $e)),o&&(d.normal=Ui.getInterpolatedAttribute(o,a,l,c,f,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};Ui.getNormal(Kl,Jl,Zl,h.normal),d.face=h,d.barycoord=f}return d}class xn extends gn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,p=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(f,2));function y(w,v,u,g,x,M,R,P,L,I,E){const S=M/L,N=R/I,H=M/2,Q=R/2,se=P/2,le=L+1,V=I+1;let Y=0,U=0;const ee=new z;for(let ie=0;ie<V;ie++){const Ee=ie*N-Q;for(let Fe=0;Fe<le;Fe++){const ct=Fe*S-H;ee[w]=ct*g,ee[v]=Ee*x,ee[u]=se,c.push(ee.x,ee.y,ee.z),ee[w]=0,ee[v]=0,ee[u]=P>0?1:-1,d.push(ee.x,ee.y,ee.z),f.push(Fe/L),f.push(1-ie/I),Y+=1}}for(let ie=0;ie<I;ie++)for(let Ee=0;Ee<L;Ee++){const Fe=h+Ee+le*ie,ct=h+Ee+le*(ie+1),Pe=h+(Ee+1)+le*(ie+1),oe=h+(Ee+1)+le*ie;l.push(Fe,ct,oe),l.push(ct,Pe,oe),U+=6}a.addGroup(p,U,E),p+=U,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gn(t){const e={};for(let n=0;n<t.length;n++){const i=Xo(t[n]);for(const r in i)e[r]=i[r]}return e}function GS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function k1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const WS={clone:Xo,merge:Gn};var XS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class es extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XS,this.fragmentShader=jS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=GS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class z1 extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new z,_g=new $e,xg=new $e;class hi extends z1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Dh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dh*2*Math.atan(Math.tan(hd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,n){return this.getViewBounds(e,_g,xg),n.subVectors(xg,_g)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const oo=-90,ao=1;class YS extends Cn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hi(oo,ao,e,n);r.layers=this.layers,this.add(r);const s=new hi(oo,ao,e,n);s.layers=this.layers,this.add(s);const o=new hi(oo,ao,e,n);o.layers=this.layers,this.add(o);const a=new hi(oo,ao,e,n);a.layers=this.layers,this.add(a);const l=new hi(oo,ao,e,n);l.layers=this.layers,this.add(l);const c=new hi(oo,ao,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class B1 extends $n{constructor(e=[],n=Vo,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qS extends Fs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new B1(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xn(5,5,5),s=new es({name:"CubemapFromEquirect",uniforms:Xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:$r});s.uniforms.tEquirect.value=n;const o=new Z(r,s),a=n.minFilter;return n.minFilter===bs&&(n.minFilter=ji),new YS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Ye extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $S={type:"move"};class Ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const w of e.hand.values()){const v=n.getJointPose(w,i),u=this._getHandJoint(c,w);v!==null&&(u.matrix.fromArray(v.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=v.radius),u.visible=v!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,y=.005;c.inputState.pinching&&h>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($S)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ye;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Vp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(e),this.density=n}clone(){return new Vp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class KS extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fd=new z,JS=new z,ZS=new dt;class xs{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Fd.subVectors(i,n).cross(JS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Fd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||ZS.getNormalMatrix(e),r=this.coplanarPoint(Fd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new xu,QS=new $e(.5,.5),nc=new z;class Gp{constructor(e=new xs,n=new xs,i=new xs,r=new xs,s=new xs,o=new xs){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Yi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],f=s[5],h=s[6],p=s[7],y=s[8],w=s[9],v=s[10],u=s[11],g=s[12],x=s[13],M=s[14],R=s[15];if(r[0].setComponents(c-o,p-d,u-y,R-g).normalize(),r[1].setComponents(c+o,p+d,u+y,R+g).normalize(),r[2].setComponents(c+a,p+f,u+w,R+x).normalize(),r[3].setComponents(c-a,p-f,u-w,R-x).normalize(),i)r[4].setComponents(l,h,v,M).normalize(),r[5].setComponents(c-l,p-h,u-v,R-M).normalize();else if(r[4].setComponents(c-l,p-h,u-v,R-M).normalize(),n===Yi)r[5].setComponents(c+l,p+h,u+v,R+M).normalize();else if(n===Zc)r[5].setComponents(l,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const n=QS.distanceTo(e.center);return hs.radius=.7071067811865476+n,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(nc.x=r.normal.x>0?e.max.x:e.min.x,nc.y=r.normal.y>0?e.max.y:e.min.y,nc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ih extends zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const eu=new z,tu=new z,yg=new Jt,xa=new Bp,ic=new xu,Od=new z,Mg=new z;class Sg extends Cn{constructor(e=new gn,n=new Ih){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)eu.fromBufferAttribute(n,r-1),tu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=eu.distanceTo(tu);e.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(r),ic.radius+=s,e.ray.intersectsSphere(ic)===!1)return;yg.copy(r).invert(),xa.copy(e.ray).applyMatrix4(yg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let w=p,v=y-1;w<v;w+=c){const u=d.getX(w),g=d.getX(w+1),x=rc(this,e,xa,l,u,g,w);x&&n.push(x)}if(this.isLineLoop){const w=d.getX(y-1),v=d.getX(p),u=rc(this,e,xa,l,w,v,y-1);u&&n.push(u)}}else{const p=Math.max(0,o.start),y=Math.min(h.count,o.start+o.count);for(let w=p,v=y-1;w<v;w+=c){const u=rc(this,e,xa,l,w,w+1,w);u&&n.push(u)}if(this.isLineLoop){const w=rc(this,e,xa,l,y-1,p,y-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rc(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(eu.fromBufferAttribute(a,r),tu.fromBufferAttribute(a,s),n.distanceSqToSegment(eu,tu,Od,Mg)>i)return;Od.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Od);if(!(c<e.near||c>e.far))return{distance:c,point:Mg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class wg extends $n{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class H1 extends $n{constructor(e,n,i=Us,r,s,o,a=zi,l=zi,c,d=rl,f=1){if(d!==rl&&d!==sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class V1 extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wn extends gn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],d=n/2,f=Math.PI/2*e,h=n,p=2*f+h,y=i*2+s,w=r+1,v=new z,u=new z;for(let g=0;g<=y;g++){let x=0,M=0,R=0,P=0;if(g<=i){const E=g/i,S=E*Math.PI/2;M=-d-e*Math.cos(S),R=e*Math.sin(S),P=-e*Math.cos(S),x=E*f}else if(g<=i+s){const E=(g-i)/s;M=-d+E*n,R=e,P=0,x=f+E*h}else{const E=(g-i-s)/i,S=E*Math.PI/2;M=d+e*Math.sin(S),R=e*Math.cos(S),P=e*Math.sin(S),x=f+h+E*f}const L=Math.max(0,Math.min(1,x/p));let I=0;g===0?I=.5/r:g===y&&(I=-.5/r);for(let E=0;E<=r;E++){const S=E/r,N=S*Math.PI*2,H=Math.sin(N),Q=Math.cos(N);u.x=-R*Q,u.y=M,u.z=R*H,a.push(u.x,u.y,u.z),v.set(-R*Q,P,R*H),v.normalize(),l.push(v.x,v.y,v.z),c.push(S+I,L)}if(g>0){const E=(g-1)*w;for(let S=0;S<r;S++){const N=E+S,H=E+S+1,Q=g*w+S,se=g*w+S+1;o.push(N,H,Q),o.push(H,se,Q)}}}this.setIndex(o),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Or extends gn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new z,d=new $e;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(a,3)),this.setAttribute("uv",new wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Dt extends gn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],p=[];let y=0;const w=[],v=i/2;let u=0;g(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new wt(f,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(p,2));function g(){const M=new z,R=new z;let P=0;const L=(n-e)/i;for(let I=0;I<=s;I++){const E=[],S=I/s,N=S*(n-e)+e;for(let H=0;H<=r;H++){const Q=H/r,se=Q*l+a,le=Math.sin(se),V=Math.cos(se);R.x=N*le,R.y=-S*i+v,R.z=N*V,f.push(R.x,R.y,R.z),M.set(le,L,V).normalize(),h.push(M.x,M.y,M.z),p.push(Q,1-S),E.push(y++)}w.push(E)}for(let I=0;I<r;I++)for(let E=0;E<s;E++){const S=w[E][I],N=w[E+1][I],H=w[E+1][I+1],Q=w[E][I+1];(e>0||E!==0)&&(d.push(S,N,Q),P+=3),(n>0||E!==s-1)&&(d.push(N,H,Q),P+=3)}c.addGroup(u,P,0),u+=P}function x(M){const R=y,P=new $e,L=new z;let I=0;const E=M===!0?e:n,S=M===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,v*S,0),h.push(0,S,0),p.push(.5,.5),y++;const N=y;for(let H=0;H<=r;H++){const se=H/r*l+a,le=Math.cos(se),V=Math.sin(se);L.x=E*V,L.y=v*S,L.z=E*le,f.push(L.x,L.y,L.z),h.push(0,S,0),P.x=le*.5+.5,P.y=V*.5*S+.5,p.push(P.x,P.y),y++}for(let H=0;H<r;H++){const Q=R+H,se=N+H;M===!0?d.push(se,se+1,Q):d.push(se+1,se,Q),I+=3}c.addGroup(u,I,M===!0?1:2),u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pn extends Dt{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Pn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wp extends gn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new wt(s,3)),this.setAttribute("normal",new wt(s.slice(),3)),this.setAttribute("uv",new wt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const x=new z,M=new z,R=new z;for(let P=0;P<n.length;P+=3)p(n[P+0],x),p(n[P+1],M),p(n[P+2],R),l(x,M,R,g)}function l(g,x,M,R){const P=R+1,L=[];for(let I=0;I<=P;I++){L[I]=[];const E=g.clone().lerp(M,I/P),S=x.clone().lerp(M,I/P),N=P-I;for(let H=0;H<=N;H++)H===0&&I===P?L[I][H]=E:L[I][H]=E.clone().lerp(S,H/N)}for(let I=0;I<P;I++)for(let E=0;E<2*(P-I)-1;E++){const S=Math.floor(E/2);E%2===0?(h(L[I][S+1]),h(L[I+1][S]),h(L[I][S])):(h(L[I][S+1]),h(L[I+1][S+1]),h(L[I+1][S]))}}function c(g){const x=new z;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(g),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function d(){const g=new z;for(let x=0;x<s.length;x+=3){g.x=s[x+0],g.y=s[x+1],g.z=s[x+2];const M=v(g)/2/Math.PI+.5,R=u(g)/Math.PI+.5;o.push(M,1-R)}y(),f()}function f(){for(let g=0;g<o.length;g+=6){const x=o[g+0],M=o[g+2],R=o[g+4],P=Math.max(x,M,R),L=Math.min(x,M,R);P>.9&&L<.1&&(x<.2&&(o[g+0]+=1),M<.2&&(o[g+2]+=1),R<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function p(g,x){const M=g*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function y(){const g=new z,x=new z,M=new z,R=new z,P=new $e,L=new $e,I=new $e;for(let E=0,S=0;E<s.length;E+=9,S+=6){g.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),M.set(s[E+6],s[E+7],s[E+8]),P.set(o[S+0],o[S+1]),L.set(o[S+2],o[S+3]),I.set(o[S+4],o[S+5]),R.copy(g).add(x).add(M).divideScalar(3);const N=v(R);w(P,S+0,g,N),w(L,S+2,x,N),w(I,S+4,M,N)}}function w(g,x,M,R){R<0&&g.x===1&&(o[x]=g.x-1),M.x===0&&M.z===0&&(o[x]=R/2/Math.PI+.5)}function v(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wp(e.vertices,e.indices,e.radius,e.details)}}class fn extends Wp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new fn(e.radius,e.detail)}}class xr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],h=i[r+1]-d,p=(o-d)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new $e:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new z,r=[],s=[],o=[],a=new z,l=new Jt;for(let p=0;p<=e;p++){const y=p/e;r[p]=this.getTangentAt(y,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(_t(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,y))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(_t(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],p*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class G1 extends xr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new $e){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*d-p*f+this.aX,c=h*f+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class e2 extends G1{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Xp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,f){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+f)+(l-a)/f;h*=d,p*=d,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const sc=new z,kd=new Xp,zd=new Xp,Bd=new Xp;class W1 extends xr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new z){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(sc.subVectors(r[0],r[1]).add(r[0]),c=sc);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(sc.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=sc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(f),p),w=Math.pow(f.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p);w<1e-4&&(w=1),y<1e-4&&(y=w),v<1e-4&&(v=w),kd.initNonuniformCatmullRom(c.x,f.x,h.x,d.x,y,w,v),zd.initNonuniformCatmullRom(c.y,f.y,h.y,d.y,y,w,v),Bd.initNonuniformCatmullRom(c.z,f.z,h.z,d.z,y,w,v)}else this.curveType==="catmullrom"&&(kd.initCatmullRom(c.x,f.x,h.x,d.x,this.tension),zd.initCatmullRom(c.y,f.y,h.y,d.y,this.tension),Bd.initCatmullRom(c.z,f.z,h.z,d.z,this.tension));return i.set(kd.calc(l),zd.calc(l),Bd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Eg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function t2(t,e){const n=1-t;return n*n*e}function n2(t,e){return 2*(1-t)*t*e}function i2(t,e){return t*t*e}function Oa(t,e,n,i){return t2(t,e)+n2(t,n)+i2(t,i)}function r2(t,e){const n=1-t;return n*n*n*e}function s2(t,e){const n=1-t;return 3*n*n*t*e}function o2(t,e){return 3*(1-t)*t*t*e}function a2(t,e){return t*t*t*e}function ka(t,e,n,i,r){return r2(t,e)+s2(t,n)+o2(t,i)+a2(t,r)}class l2 extends xr{constructor(e=new $e,n=new $e,i=new $e,r=new $e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new $e){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ka(e,r.x,s.x,o.x,a.x),ka(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class c2 extends xr{constructor(e=new z,n=new z,i=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new z){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ka(e,r.x,s.x,o.x,a.x),ka(e,r.y,s.y,o.y,a.y),ka(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class u2 extends xr{constructor(e=new $e,n=new $e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new $e){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new $e){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class d2 extends xr{constructor(e=new z,n=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new z){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new z){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class f2 extends xr{constructor(e=new $e,n=new $e,i=new $e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new $e){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Oa(e,r.x,s.x,o.x),Oa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class X1 extends xr{constructor(e=new z,n=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new z){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Oa(e,r.x,s.x,o.x),Oa(e,r.y,s.y,o.y),Oa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class h2 extends xr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new $e){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Eg(a,l.x,c.x,d.x,f.x),Eg(a,l.y,c.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new $e().fromArray(r))}return this}}var p2=Object.freeze({__proto__:null,ArcCurve:e2,CatmullRomCurve3:W1,CubicBezierCurve:l2,CubicBezierCurve3:c2,EllipseCurve:G1,LineCurve:u2,LineCurve3:d2,QuadraticBezierCurve:f2,QuadraticBezierCurve3:X1,SplineCurve:h2});class Br extends gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,p=[],y=[],w=[],v=[];for(let u=0;u<d;u++){const g=u*h-o;for(let x=0;x<c;x++){const M=x*f-s;y.push(M,-g,0),w.push(0,0,1),v.push(x/a),v.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const x=g+c*u,M=g+c*(u+1),R=g+1+c*(u+1),P=g+1+c*u;p.push(x,M,P),p.push(M,R,P)}this.setIndex(p),this.setAttribute("position",new wt(y,3)),this.setAttribute("normal",new wt(w,3)),this.setAttribute("uv",new wt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.widthSegments,e.heightSegments)}}class jp extends gn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let f=e;const h=(n-e)/r,p=new z,y=new $e;for(let w=0;w<=r;w++){for(let v=0;v<=i;v++){const u=s+v/i*o;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),y.x=(p.x/n+1)/2,y.y=(p.y/n+1)/2,d.push(y.x,y.y)}f+=h}for(let w=0;w<r;w++){const v=w*(i+1);for(let u=0;u<i;u++){const g=u+v,x=g,M=g+i+1,R=g+i+2,P=g+1;a.push(x,M,P),a.push(M,R,P)}}this.setIndex(a),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ct extends gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new z,h=new z,p=[],y=[],w=[],v=[];for(let u=0;u<=i;u++){const g=[],x=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let R=0;R<=n;R++){const P=R/n;f.x=-e*Math.cos(r+P*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+P*s)*Math.sin(o+x*a),y.push(f.x,f.y,f.z),h.copy(f).normalize(),w.push(h.x,h.y,h.z),v.push(P+M,1-x),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const x=d[u][g+1],M=d[u][g],R=d[u+1][g],P=d[u+1][g+1];(u!==0||o>0)&&p.push(x,M,P),(u!==i-1||l<Math.PI)&&p.push(M,R,P)}this.setIndex(p),this.setAttribute("position",new wt(y,3)),this.setAttribute("normal",new wt(w,3)),this.setAttribute("uv",new wt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tn extends gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new z,f=new z,h=new z;for(let p=0;p<=i;p++)for(let y=0;y<=r;y++){const w=y/r*s,v=p/i*Math.PI*2;f.x=(e+n*Math.cos(v))*Math.cos(w),f.y=(e+n*Math.cos(v))*Math.sin(w),f.z=n*Math.sin(v),a.push(f.x,f.y,f.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(y/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let y=1;y<=r;y++){const w=(r+1)*p+y-1,v=(r+1)*(p-1)+y-1,u=(r+1)*(p-1)+y,g=(r+1)*p+y;o.push(w,v,g),o.push(v,u,g)}this.setIndex(o),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Yp extends gn{constructor(e=new X1(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new z,l=new z,c=new $e;let d=new z;const f=[],h=[],p=[],y=[];w(),this.setIndex(y),this.setAttribute("position",new wt(f,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(p,2));function w(){for(let x=0;x<n;x++)v(x);v(s===!1?n:0),g(),u()}function v(x){d=e.getPointAt(x/n,d);const M=o.normals[x],R=o.binormals[x];for(let P=0;P<=r;P++){const L=P/r*Math.PI*2,I=Math.sin(L),E=-Math.cos(L);l.x=E*M.x+I*R.x,l.y=E*M.y+I*R.y,l.z=E*M.z+I*R.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let x=1;x<=n;x++)for(let M=1;M<=r;M++){const R=(r+1)*(x-1)+(M-1),P=(r+1)*x+(M-1),L=(r+1)*x+M,I=(r+1)*(x-1)+M;y.push(R,P,I),y.push(P,L,I)}}function g(){for(let x=0;x<=n;x++)for(let M=0;M<=r;M++)c.x=x/n,c.y=M/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Yp(new p2[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class at extends zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kp,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lo extends zs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kp,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Lp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class m2 extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g2 extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qp extends Cn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class v2 extends qp{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Hd=new Jt,Tg=new z,Ag=new z;class j1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Ji,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gp,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Tg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tg),Ag.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ag),n.updateMatrixWorld(),Hd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bg=new Jt,ya=new z,Vd=new z;class _2 extends j1{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ya.setFromMatrixPosition(e.matrixWorld),i.position.copy(ya),Vd.copy(i.position),Vd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Vd),i.updateMatrixWorld(),r.makeTranslation(-ya.x,-ya.y,-ya.z),bg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bg,i.coordinateSystem,i.reversedDepth)}}class co extends qp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new _2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Y1 extends z1{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class x2 extends j1{constructor(){super(new Y1(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cg extends qp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new x2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class y2 extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Rg=new Jt;class M2{constructor(e,n,i=0,r=1/0){this.ray=new Bp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Hp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Rg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rg),this}intersectObject(e,n=!0,i=[]){return Nh(e,this,i,n),i.sort(Pg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Nh(e[r],this,i,n);return i.sort(Pg),i}}function Pg(t,e){return t.distance-e.distance}function Nh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Nh(s[o],e,n,!0)}}function Lg(t,e,n,i){const r=S2(i);switch(n){case C1:return t*e;case P1:return t*e/r.components*r.byteLength;case Up:return t*e/r.components*r.byteLength;case L1:return t*e*2/r.components*r.byteLength;case Fp:return t*e*2/r.components*r.byteLength;case R1:return t*e*3/r.components*r.byteLength;case Fi:return t*e*4/r.components*r.byteLength;case Op:return t*e*4/r.components*r.byteLength;case Sc:case wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sh:case ah:return Math.max(t,16)*Math.max(e,8)/4;case rh:case oh:return Math.max(t,8)*Math.max(e,8)/2;case lh:case ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case hh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ph:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case gh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case vh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case _h:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case yh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case wh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Th:case Ah:case bh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ch:case Rh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ph:case Lh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function S2(t){switch(t){case Ji:case E1:return{byteLength:1,components:1};case nl:case T1:case fl:return{byteLength:2,components:1};case Ip:case Np:return{byteLength:2,components:4};case Us:case Dp:case dr:return{byteLength:4,components:1};case A1:case b1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function q1(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function w2(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,y)=>p.start-y.start);let h=0;for(let p=1;p<f.length;p++){const y=f[h],w=f[p];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++h,f[h]=w)}f.length=h+1;for(let p=0,y=f.length;p<y;p++){const w=f[p];t.bufferSubData(c,w.start*d.BYTES_PER_ELEMENT,d,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var E2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T2=`#ifdef USE_ALPHAHASH
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
#endif`,A2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P2=`#ifdef USE_AOMAP
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
#endif`,L2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D2=`#ifdef USE_BATCHING
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
#endif`,I2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O2=`#ifdef USE_IRIDESCENCE
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
#endif`,k2=`#ifdef USE_BUMPMAP
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
#endif`,z2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Y2=`#define PI 3.141592653589793
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
} // validated`,q2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$2=`vec3 transformedNormal = objectNormal;
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
#endif`,K2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ew="gl_FragColor = linearToOutputTexel( gl_FragColor );",tw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nw=`#ifdef USE_ENVMAP
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
#endif`,iw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rw=`#ifdef USE_ENVMAP
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
#endif`,sw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ow=`#ifdef USE_ENVMAP
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
#endif`,aw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dw=`#ifdef USE_GRADIENTMAP
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
}`,fw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mw=`uniform bool receiveShadow;
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
#endif`,gw=`#ifdef USE_ENVMAP
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
#endif`,vw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_w=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mw=`PhysicalMaterial material;
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
#endif`,Sw=`struct PhysicalMaterial {
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
}`,ww=`
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
#endif`,Ew=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Aw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iw=`#if defined( USE_POINTS_UV )
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
#endif`,Nw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ow=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zw=`#ifdef USE_MORPHTARGETS
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
#endif`,Bw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jw=`#ifdef USE_NORMALMAP
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
#endif`,Yw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$w=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lE=`float getShadowMask() {
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
}`,cE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uE=`#ifdef USE_SKINNING
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
#endif`,dE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fE=`#ifdef USE_SKINNING
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
#endif`,hE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vE=`#ifdef USE_TRANSMISSION
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
#endif`,_E=`#ifdef USE_TRANSMISSION
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EE=`uniform sampler2D t2D;
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
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`#include <common>
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
}`,PE=`#if DEPTH_PACKING == 3200
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
}`,LE=`#define DISTANCE
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
}`,DE=`#define DISTANCE
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
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`uniform float scale;
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
}`,FE=`uniform vec3 diffuse;
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
}`,OE=`#include <common>
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
}`,kE=`uniform vec3 diffuse;
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
}`,zE=`#define LAMBERT
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
}`,BE=`#define LAMBERT
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
}`,HE=`#define MATCAP
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
}`,VE=`#define MATCAP
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
}`,GE=`#define NORMAL
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
}`,WE=`#define NORMAL
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
}`,XE=`#define PHONG
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
}`,jE=`#define PHONG
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
}`,YE=`#define STANDARD
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
}`,qE=`#define STANDARD
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
}`,$E=`#define TOON
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
}`,KE=`#define TOON
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
}`,JE=`uniform float size;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,QE=`#include <common>
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
}`,eT=`uniform vec3 color;
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
}`,tT=`uniform float rotation;
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
}`,nT=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:E2,alphahash_pars_fragment:T2,alphamap_fragment:A2,alphamap_pars_fragment:b2,alphatest_fragment:C2,alphatest_pars_fragment:R2,aomap_fragment:P2,aomap_pars_fragment:L2,batching_pars_vertex:D2,batching_vertex:I2,begin_vertex:N2,beginnormal_vertex:U2,bsdfs:F2,iridescence_fragment:O2,bumpmap_pars_fragment:k2,clipping_planes_fragment:z2,clipping_planes_pars_fragment:B2,clipping_planes_pars_vertex:H2,clipping_planes_vertex:V2,color_fragment:G2,color_pars_fragment:W2,color_pars_vertex:X2,color_vertex:j2,common:Y2,cube_uv_reflection_fragment:q2,defaultnormal_vertex:$2,displacementmap_pars_vertex:K2,displacementmap_vertex:J2,emissivemap_fragment:Z2,emissivemap_pars_fragment:Q2,colorspace_fragment:ew,colorspace_pars_fragment:tw,envmap_fragment:nw,envmap_common_pars_fragment:iw,envmap_pars_fragment:rw,envmap_pars_vertex:sw,envmap_physical_pars_fragment:gw,envmap_vertex:ow,fog_vertex:aw,fog_pars_vertex:lw,fog_fragment:cw,fog_pars_fragment:uw,gradientmap_pars_fragment:dw,lightmap_pars_fragment:fw,lights_lambert_fragment:hw,lights_lambert_pars_fragment:pw,lights_pars_begin:mw,lights_toon_fragment:vw,lights_toon_pars_fragment:_w,lights_phong_fragment:xw,lights_phong_pars_fragment:yw,lights_physical_fragment:Mw,lights_physical_pars_fragment:Sw,lights_fragment_begin:ww,lights_fragment_maps:Ew,lights_fragment_end:Tw,logdepthbuf_fragment:Aw,logdepthbuf_pars_fragment:bw,logdepthbuf_pars_vertex:Cw,logdepthbuf_vertex:Rw,map_fragment:Pw,map_pars_fragment:Lw,map_particle_fragment:Dw,map_particle_pars_fragment:Iw,metalnessmap_fragment:Nw,metalnessmap_pars_fragment:Uw,morphinstance_vertex:Fw,morphcolor_vertex:Ow,morphnormal_vertex:kw,morphtarget_pars_vertex:zw,morphtarget_vertex:Bw,normal_fragment_begin:Hw,normal_fragment_maps:Vw,normal_pars_fragment:Gw,normal_pars_vertex:Ww,normal_vertex:Xw,normalmap_pars_fragment:jw,clearcoat_normal_fragment_begin:Yw,clearcoat_normal_fragment_maps:qw,clearcoat_pars_fragment:$w,iridescence_pars_fragment:Kw,opaque_fragment:Jw,packing:Zw,premultiplied_alpha_fragment:Qw,project_vertex:eE,dithering_fragment:tE,dithering_pars_fragment:nE,roughnessmap_fragment:iE,roughnessmap_pars_fragment:rE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:oE,shadowmap_vertex:aE,shadowmask_pars_fragment:lE,skinbase_vertex:cE,skinning_pars_vertex:uE,skinning_vertex:dE,skinnormal_vertex:fE,specularmap_fragment:hE,specularmap_pars_fragment:pE,tonemapping_fragment:mE,tonemapping_pars_fragment:gE,transmission_fragment:vE,transmission_pars_fragment:_E,uv_pars_fragment:xE,uv_pars_vertex:yE,uv_vertex:ME,worldpos_vertex:SE,background_vert:wE,background_frag:EE,backgroundCube_vert:TE,backgroundCube_frag:AE,cube_vert:bE,cube_frag:CE,depth_vert:RE,depth_frag:PE,distanceRGBA_vert:LE,distanceRGBA_frag:DE,equirect_vert:IE,equirect_frag:NE,linedashed_vert:UE,linedashed_frag:FE,meshbasic_vert:OE,meshbasic_frag:kE,meshlambert_vert:zE,meshlambert_frag:BE,meshmatcap_vert:HE,meshmatcap_frag:VE,meshnormal_vert:GE,meshnormal_frag:WE,meshphong_vert:XE,meshphong_frag:jE,meshphysical_vert:YE,meshphysical_frag:qE,meshtoon_vert:$E,meshtoon_frag:KE,points_vert:JE,points_frag:ZE,shadow_vert:QE,shadow_frag:eT,sprite_vert:tT,sprite_frag:nT},Ue={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Wi={basic:{uniforms:Gn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Gn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new xt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Gn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Gn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Gn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new xt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Gn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Gn([Ue.points,Ue.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Gn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Gn([Ue.common,Ue.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Gn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Gn([Ue.sprite,Ue.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Gn([Ue.common,Ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Gn([Ue.lights,Ue.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Wi.physical={uniforms:Gn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const oc={r:0,b:0,g:0},ps=new Hi,iT=new Jt;function rT(t,e,n,i,r,s,o){const a=new xt(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function y(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?n:e).get(M)),M}function w(x){let M=!1;const R=y(x);R===null?u(a,l):R&&R.isColor&&(u(R,1),M=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(x,M){const R=y(M);R&&(R.isCubeTexture||R.mapping===_u)?(d===void 0&&(d=new Z(new xn(1,1,1),new es({name:"BackgroundCubeMaterial",uniforms:Xo(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),ps.copy(M.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(iT.makeRotationFromEuler(ps)),d.material.toneMapped=Rt.getTransfer(R.colorSpace)!==Vt,(f!==R||h!==R.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=R,h=R.version,p=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Z(new Br(2,2),new es({name:"BackgroundMaterial",uniforms:Xo(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(R.colorSpace)!==Vt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=R,h=R.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,M){x.getRGB(oc,k1(t)),i.buffers.color.setClear(oc.r,oc.g,oc.b,M,o)}function g(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:w,addToRenderList:v,dispose:g}}function sT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,N,H,Q,se){let le=!1;const V=f(Q,H,N);s!==V&&(s=V,c(s.object)),le=p(S,Q,H,se),le&&y(S,Q,H,se),se!==null&&e.update(se,t.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,M(S,N,H,Q),se!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function f(S,N,H){const Q=H.wireframe===!0;let se=i[S.id];se===void 0&&(se={},i[S.id]=se);let le=se[N.id];le===void 0&&(le={},se[N.id]=le);let V=le[Q];return V===void 0&&(V=h(l()),le[Q]=V),V}function h(S){const N=[],H=[],Q=[];for(let se=0;se<n;se++)N[se]=0,H[se]=0,Q[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:Q,object:S,attributes:{},index:null}}function p(S,N,H,Q){const se=s.attributes,le=N.attributes;let V=0;const Y=H.getAttributes();for(const U in Y)if(Y[U].location>=0){const ie=se[U];let Ee=le[U];if(Ee===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor)),ie===void 0||ie.attribute!==Ee||Ee&&ie.data!==Ee.data)return!0;V++}return s.attributesNum!==V||s.index!==Q}function y(S,N,H,Q){const se={},le=N.attributes;let V=0;const Y=H.getAttributes();for(const U in Y)if(Y[U].location>=0){let ie=le[U];ie===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor));const Ee={};Ee.attribute=ie,ie&&ie.data&&(Ee.data=ie.data),se[U]=Ee,V++}s.attributes=se,s.attributesNum=V,s.index=Q}function w(){const S=s.newAttributes;for(let N=0,H=S.length;N<H;N++)S[N]=0}function v(S){u(S,0)}function u(S,N){const H=s.newAttributes,Q=s.enabledAttributes,se=s.attributeDivisors;H[S]=1,Q[S]===0&&(t.enableVertexAttribArray(S),Q[S]=1),se[S]!==N&&(t.vertexAttribDivisor(S,N),se[S]=N)}function g(){const S=s.newAttributes,N=s.enabledAttributes;for(let H=0,Q=N.length;H<Q;H++)N[H]!==S[H]&&(t.disableVertexAttribArray(H),N[H]=0)}function x(S,N,H,Q,se,le,V){V===!0?t.vertexAttribIPointer(S,N,H,se,le):t.vertexAttribPointer(S,N,H,Q,se,le)}function M(S,N,H,Q){w();const se=Q.attributes,le=H.getAttributes(),V=N.defaultAttributeValues;for(const Y in le){const U=le[Y];if(U.location>=0){let ee=se[Y];if(ee===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),ee!==void 0){const ie=ee.normalized,Ee=ee.itemSize,Fe=e.get(ee);if(Fe===void 0)continue;const ct=Fe.buffer,Pe=Fe.type,oe=Fe.bytesPerElement,B=Pe===t.INT||Pe===t.UNSIGNED_INT||ee.gpuType===Dp;if(ee.isInterleavedBufferAttribute){const he=ee.data,Ie=he.stride,et=ee.offset;if(he.isInstancedInterleavedBuffer){for(let be=0;be<U.locationSize;be++)u(U.location+be,he.meshPerAttribute);S.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let be=0;be<U.locationSize;be++)v(U.location+be);t.bindBuffer(t.ARRAY_BUFFER,ct);for(let be=0;be<U.locationSize;be++)x(U.location+be,Ee/U.locationSize,Pe,ie,Ie*oe,(et+Ee/U.locationSize*be)*oe,B)}else{if(ee.isInstancedBufferAttribute){for(let he=0;he<U.locationSize;he++)u(U.location+he,ee.meshPerAttribute);S.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let he=0;he<U.locationSize;he++)v(U.location+he);t.bindBuffer(t.ARRAY_BUFFER,ct);for(let he=0;he<U.locationSize;he++)x(U.location+he,Ee/U.locationSize,Pe,ie,Ee*oe,Ee/U.locationSize*he*oe,B)}}else if(V!==void 0){const ie=V[Y];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(U.location,ie);break;case 3:t.vertexAttrib3fv(U.location,ie);break;case 4:t.vertexAttrib4fv(U.location,ie);break;default:t.vertexAttrib1fv(U.location,ie)}}}}g()}function R(){I();for(const S in i){const N=i[S];for(const H in N){const Q=N[H];for(const se in Q)d(Q[se].object),delete Q[se];delete N[H]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const N=i[S.id];for(const H in N){const Q=N[H];for(const se in Q)d(Q[se].object),delete Q[se];delete N[H]}delete i[S.id]}function L(S){for(const N in i){const H=i[N];if(H[S.id]===void 0)continue;const Q=H[S.id];for(const se in Q)d(Q[se].object),delete Q[se];delete H[S.id]}}function I(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:v,disableUnusedAttributes:g}}function oT(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let y=0;y<f;y++)p+=d[y];n.update(p,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)o(c[y],d[y],h[y]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let y=0;for(let w=0;w<f;w++)y+=d[w]*h[w];n.update(y,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function aT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==Fi&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const I=L===fl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ji&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==dr&&!I)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:v,maxAttributes:u,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:R,maxSamples:P}}function lT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new xs,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const y=f.clippingPlanes,w=f.clipIntersection,v=f.clipShadows,u=t.get(f);if(!r||y===null||y.length===0||s&&!v)s?d(null):c();else{const g=s?0:i,x=g*4;let M=u.clippingState||null;l.value=M,M=d(y,h,x,p);for(let R=0;R!==x;++R)M[R]=n[R];u.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,y){const w=f!==null?f.length:0;let v=null;if(w!==0){if(v=l.value,y!==!0||v===null){const u=p+w*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(v===null||v.length<u)&&(v=new Float32Array(u));for(let x=0,M=p;x!==w;++x,M+=4)o.copy(f[x]).applyMatrix4(g,a),o.normal.toArray(v,M),v[M+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,v}}function cT(t){let e=new WeakMap;function n(o,a){return a===th?o.mapping=Vo:a===nh&&(o.mapping=Go),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===th||a===nh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Eo=4,Dg=[.125,.215,.35,.446,.526,.582],Ss=20,Gd=new Y1,Ig=new xt;let Wd=null,Xd=0,jd=0,Yd=!1;const ys=(1+Math.sqrt(5))/2,uo=1/ys,Ng=[new z(-ys,uo,0),new z(ys,uo,0),new z(-uo,0,ys),new z(uo,0,ys),new z(0,ys,-uo),new z(0,ys,uo),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],uT=new z;class Ug{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=uT}=s;Wd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wd,Xd,jd),this._renderer.xr.enabled=Yd,e.scissorTest=!1,ac(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vo||e.mapping===Go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ji,minFilter:ji,generateMipmaps:!1,type:fl,format:Fi,colorSpace:Wo,depthBuffer:!1},r=Fg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dT(s)),this._blurMaterial=fT(s,e,n)}return r}_compileMaterial(e){const n=new Z(this._lodPlanes[0],e);this._renderer.compile(n,Gd)}_sceneToCubeUV(e,n,i,r,s){const l=new hi(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Ig),f.toneMapping=Kr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const w=new lr({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),v=new Z(new xn,w);let u=!1;const g=e.background;g?g.isColor&&(w.color.copy(g),e.background=null,u=!0):(w.color.copy(Ig),u=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[x],s.y,s.z)):M===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[x]));const R=this._cubeSize;ac(r,M*R,x>2?R:0,R,R),f.setRenderTarget(r),u&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vo||e.mapping===Go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Og());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Z(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ac(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Gd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ng[(r-s-1)%Ng.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Z(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ss-1),w=s/y,v=isFinite(s)?1+Math.floor(d*w):Ss;v>Ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ss}`);const u=[];let g=0;for(let L=0;L<Ss;++L){const I=L/w,E=Math.exp(-I*I/2);u.push(E),L===0?g+=E:L<v&&(g+=2*E)}for(let L=0;L<u.length;L++)u[L]=u[L]/g;h.envMap.value=e.texture,h.samples.value=v,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=y,h.mipInt.value=x-i;const M=this._sizeLods[r],R=3*M*(r>x-Eo?r-x+Eo:0),P=4*(this._cubeSize-M);ac(n,R,P,3*M,2*M),l.setRenderTarget(n),l.render(f,Gd)}}function dT(t){const e=[],n=[],i=[];let r=t;const s=t-Eo+1+Dg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Eo?l=Dg[o-t+Eo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,y=6,w=3,v=2,u=1,g=new Float32Array(w*y*p),x=new Float32Array(v*y*p),M=new Float32Array(u*y*p);for(let P=0;P<p;P++){const L=P%3*2/3-1,I=P>2?0:-1,E=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];g.set(E,w*y*P),x.set(h,v*y*P);const S=[P,P,P,P,P,P];M.set(S,u*y*P)}const R=new gn;R.setAttribute("position",new Ki(g,w)),R.setAttribute("uv",new Ki(x,v)),R.setAttribute("faceIndex",new Ki(M,u)),e.push(R),r>Eo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Fg(t,e,n){const i=new Fs(t,e,n);return i.texture.mapping=_u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ac(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function fT(t,e,n){const i=new Float32Array(Ss),r=new z(0,1,0);return new es({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$p(),fragmentShader:`

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
		`,blending:$r,depthTest:!1,depthWrite:!1})}function Og(){return new es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$p(),fragmentShader:`

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
		`,blending:$r,depthTest:!1,depthWrite:!1})}function kg(){return new es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$r,depthTest:!1,depthWrite:!1})}function $p(){return`

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
	`}function hT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===th||l===nh,d=l===Vo||l===Go;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Ug(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Ug(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function pT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ol("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,y=f.attributes.position;let w=0;if(p!==null){const g=p.array;w=p.version;for(let x=0,M=g.length;x<M;x+=3){const R=g[x+0],P=g[x+1],L=g[x+2];h.push(R,P,P,L,L,R)}}else if(y!==void 0){const g=y.array;w=y.version;for(let x=0,M=g.length/3-1;x<M;x+=3){const R=x+0,P=x+1,L=x+2;h.push(R,P,P,L,L,R)}}else return;const v=new(I1(h)?O1:F1)(h,1);v.version=w;const u=s.get(f);u&&e.remove(u),s.set(f,v)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function gT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,y){y!==0&&(t.drawElementsInstanced(i,p,s,h*o,y),n.update(p,i,y))}function d(h,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,y);let v=0;for(let u=0;u<y;u++)v+=p[u];n.update(v,i,1)}function f(h,p,y,w){if(y===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],w[u]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,w,0,y);let u=0;for(let g=0;g<y;g++)u+=p[g]*w[g];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function vT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _T(t,e,n){const i=new WeakMap,r=new Gt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const y=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;y===!0&&(M=1),w===!0&&(M=2),v===!0&&(M=3);let R=a.attributes.position.count*M,P=1;R>e.maxTextureSize&&(P=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const L=new Float32Array(R*P*4*f),I=new N1(L,R,P,f);I.type=dr,I.needsUpdate=!0;const E=M*4;for(let N=0;N<f;N++){const H=u[N],Q=g[N],se=x[N],le=R*P*4*N;for(let V=0;V<H.count;V++){const Y=V*E;y===!0&&(r.fromBufferAttribute(H,V),L[le+Y+0]=r.x,L[le+Y+1]=r.y,L[le+Y+2]=r.z,L[le+Y+3]=0),w===!0&&(r.fromBufferAttribute(Q,V),L[le+Y+4]=r.x,L[le+Y+5]=r.y,L[le+Y+6]=r.z,L[le+Y+7]=0),v===!0&&(r.fromBufferAttribute(se,V),L[le+Y+8]=r.x,L[le+Y+9]=r.y,L[le+Y+10]=r.z,L[le+Y+11]=se.itemSize===4?r.w:1)}}h={count:f,texture:I,size:new $e(R,P)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let v=0;v<c.length;v++)y+=c[v];const w=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",w),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function xT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const $1=new $n,zg=new H1(1,1),K1=new N1,J1=new LS,Z1=new B1,Bg=[],Hg=[],Vg=new Float32Array(16),Gg=new Float32Array(9),Wg=new Float32Array(4);function Ko(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Bg[r];if(s===void 0&&(s=new Float32Array(r),Bg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Sn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function yu(t,e){let n=Hg[e];n===void 0&&(n=new Int32Array(e),Hg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Sn(n,e))return;t.uniform2fv(this.addr,e),wn(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Sn(n,e))return;t.uniform3fv(this.addr,e),wn(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Sn(n,e))return;t.uniform4fv(this.addr,e),wn(n,e)}}function ET(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Sn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wn(n,e)}else{if(Sn(n,i))return;Wg.set(i),t.uniformMatrix2fv(this.addr,!1,Wg),wn(n,i)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Sn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wn(n,e)}else{if(Sn(n,i))return;Gg.set(i),t.uniformMatrix3fv(this.addr,!1,Gg),wn(n,i)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Sn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wn(n,e)}else{if(Sn(n,i))return;Vg.set(i),t.uniformMatrix4fv(this.addr,!1,Vg),wn(n,i)}}function bT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Sn(n,e))return;t.uniform2iv(this.addr,e),wn(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Sn(n,e))return;t.uniform3iv(this.addr,e),wn(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Sn(n,e))return;t.uniform4iv(this.addr,e),wn(n,e)}}function LT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Sn(n,e))return;t.uniform2uiv(this.addr,e),wn(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Sn(n,e))return;t.uniform3uiv(this.addr,e),wn(n,e)}}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Sn(n,e))return;t.uniform4uiv(this.addr,e),wn(n,e)}}function UT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(zg.compareFunction=D1,s=zg):s=$1,n.setTexture2D(e||s,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||J1,r)}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Z1,r)}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||K1,r)}function zT(t){switch(t){case 5126:return yT;case 35664:return MT;case 35665:return ST;case 35666:return wT;case 35674:return ET;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return bT;case 35667:case 35671:return CT;case 35668:case 35672:return RT;case 35669:case 35673:return PT;case 5125:return LT;case 36294:return DT;case 36295:return IT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return kT}}function BT(t,e){t.uniform1fv(this.addr,e)}function HT(t,e){const n=Ko(e,this.size,2);t.uniform2fv(this.addr,n)}function VT(t,e){const n=Ko(e,this.size,3);t.uniform3fv(this.addr,n)}function GT(t,e){const n=Ko(e,this.size,4);t.uniform4fv(this.addr,n)}function WT(t,e){const n=Ko(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XT(t,e){const n=Ko(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jT(t,e){const n=Ko(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function YT(t,e){t.uniform1iv(this.addr,e)}function qT(t,e){t.uniform2iv(this.addr,e)}function $T(t,e){t.uniform3iv(this.addr,e)}function KT(t,e){t.uniform4iv(this.addr,e)}function JT(t,e){t.uniform1uiv(this.addr,e)}function ZT(t,e){t.uniform2uiv(this.addr,e)}function QT(t,e){t.uniform3uiv(this.addr,e)}function e3(t,e){t.uniform4uiv(this.addr,e)}function t3(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);Sn(i,s)||(t.uniform1iv(this.addr,s),wn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||$1,s[o])}function n3(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);Sn(i,s)||(t.uniform1iv(this.addr,s),wn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||J1,s[o])}function i3(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);Sn(i,s)||(t.uniform1iv(this.addr,s),wn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Z1,s[o])}function r3(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);Sn(i,s)||(t.uniform1iv(this.addr,s),wn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||K1,s[o])}function s3(t){switch(t){case 5126:return BT;case 35664:return HT;case 35665:return VT;case 35666:return GT;case 35674:return WT;case 35675:return XT;case 35676:return jT;case 5124:case 35670:return YT;case 35667:case 35671:return qT;case 35668:case 35672:return $T;case 35669:case 35673:return KT;case 5125:return JT;case 36294:return ZT;case 36295:return QT;case 36296:return e3;case 35678:case 36198:case 36298:case 36306:case 35682:return t3;case 35679:case 36299:case 36307:return n3;case 35680:case 36300:case 36308:case 36293:return i3;case 36289:case 36303:case 36311:case 36292:return r3}}class o3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zT(n.type)}}class a3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=s3(n.type)}}class l3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const qd=/(\w+)(\])?(\[|\.)?/g;function Xg(t,e){t.seq.push(e),t.map[e.id]=e}function c3(t,e,n){const i=t.name,r=i.length;for(qd.lastIndex=0;;){const s=qd.exec(i),o=qd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Xg(n,c===void 0?new o3(a,t,e):new a3(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new l3(a),Xg(n,f)),n=f}}}class Ac{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);c3(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function jg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const u3=37297;let d3=0;function f3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Yg=new dt;function h3(t){Rt._getMatrix(Yg,Rt.workingColorSpace,t);const e=`mat3( ${Yg.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(t)){case Jc:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function qg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+f3(t.getShaderSource(e),a)}else return s}function p3(t,e){const n=h3(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function m3(t,e){let n;switch(e){case oS:n="Linear";break;case aS:n="Reinhard";break;case lS:n="Cineon";break;case S1:n="ACESFilmic";break;case uS:n="AgX";break;case dS:n="Neutral";break;case cS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const lc=new z;function g3(){Rt.getLuminanceCoefficients(lc);const t=lc.x.toFixed(4),e=lc.y.toFixed(4),n=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function _3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function x3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ba(t){return t!==""}function $g(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(t){return t.replace(y3,S3)}const M3=new Map;function S3(t,e){let n=pt[e];if(n===void 0){const i=M3.get(e);if(i!==void 0)n=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Uh(n)}const w3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jg(t){return t.replace(w3,E3)}function E3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function T3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===y1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===M1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===sr&&(e="SHADOWMAP_TYPE_VSM"),e}function A3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Vo:case Go:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Go:e="ENVMAP_MODE_REFRACTION";break}return e}function C3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Lp:e="ENVMAP_BLENDING_MULTIPLY";break;case rS:e="ENVMAP_BLENDING_MIX";break;case sS:e="ENVMAP_BLENDING_ADD";break}return e}function R3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function P3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=T3(n),c=A3(n),d=b3(n),f=C3(n),h=R3(n),p=v3(n),y=_3(s),w=r.createProgram();let v,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ba).join(`
`),v.length>0&&(v+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ba).join(`
`),u.length>0&&(u+=`
`)):(v=[Zg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),u=[Zg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Kr?"#define TONE_MAPPING":"",n.toneMapping!==Kr?pt.tonemapping_pars_fragment:"",n.toneMapping!==Kr?m3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,p3("linearToOutputTexel",n.outputColorSpace),g3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ba).join(`
`)),o=Uh(o),o=$g(o,n),o=Kg(o,n),a=Uh(a),a=$g(a,n),a=Kg(a,n),o=Jg(o),a=Jg(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,u=["#define varying in",n.glslVersion===ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=g+v+o,M=g+u+a,R=jg(r,r.VERTEX_SHADER,x),P=jg(r,r.FRAGMENT_SHADER,M);r.attachShader(w,R),r.attachShader(w,P),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function L(N){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(w)||"",Q=r.getShaderInfoLog(R)||"",se=r.getShaderInfoLog(P)||"",le=H.trim(),V=Q.trim(),Y=se.trim();let U=!0,ee=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,w,R,P);else{const ie=qg(r,R,"vertex"),Ee=qg(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+le+`
`+ie+`
`+Ee)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(V===""||Y==="")&&(ee=!1);ee&&(N.diagnostics={runnable:U,programLog:le,vertexShader:{log:V,prefix:v},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(R),r.deleteShader(P),I=new Ac(r,w),E=x3(r,w)}let I;this.getUniforms=function(){return I===void 0&&L(this),I};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(w,u3)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=d3++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=R,this.fragmentShader=P,this}let L3=0;class D3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new I3(e),n.set(e,i)),i}}class I3{constructor(e){this.id=L3++,this.code=e,this.usedTimes=0}}function N3(t,e,n,i,r,s,o){const a=new Hp,l=new D3,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return c.add(E),E===0?"uv":`uv${E}`}function v(E,S,N,H,Q){const se=H.fog,le=Q.geometry,V=E.isMeshStandardMaterial?H.environment:null,Y=(E.isMeshStandardMaterial?n:e).get(E.envMap||V),U=Y&&Y.mapping===_u?Y.image.height:null,ee=y[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ie=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ee=ie!==void 0?ie.length:0;let Fe=0;le.morphAttributes.position!==void 0&&(Fe=1),le.morphAttributes.normal!==void 0&&(Fe=2),le.morphAttributes.color!==void 0&&(Fe=3);let ct,Pe,oe,B;if(ee){const vt=Wi[ee];ct=vt.vertexShader,Pe=vt.fragmentShader}else ct=E.vertexShader,Pe=E.fragmentShader,l.update(E),oe=l.getVertexShaderID(E),B=l.getFragmentShaderID(E);const he=t.getRenderTarget(),Ie=t.state.buffers.depth.getReversed(),et=Q.isInstancedMesh===!0,be=Q.isBatchedMesh===!0,mt=!!E.map,cn=!!E.matcap,F=!!Y,At=!!E.aoMap,st=!!E.lightMap,Ve=!!E.bumpMap,O=!!E.normalMap,Re=!!E.displacementMap,ae=!!E.emissiveMap,ce=!!E.metalnessMap,Ke=!!E.roughnessMap,tt=E.anisotropy>0,D=E.clearcoat>0,T=E.dispersion>0,$=E.iridescence>0,de=E.sheen>0,ge=E.transmission>0,ue=tt&&!!E.anisotropyMap,Ne=D&&!!E.clearcoatMap,_e=D&&!!E.clearcoatNormalMap,Ge=D&&!!E.clearcoatRoughnessMap,We=$&&!!E.iridescenceMap,xe=$&&!!E.iridescenceThicknessMap,Te=de&&!!E.sheenColorMap,nt=de&&!!E.sheenRoughnessMap,je=!!E.specularMap,Le=!!E.specularColorMap,lt=!!E.specularIntensityMap,W=ge&&!!E.transmissionMap,Ae=ge&&!!E.thicknessMap,Ce=!!E.gradientMap,ze=!!E.alphaMap,ye=E.alphaTest>0,pe=!!E.alphaHash,Xe=!!E.extensions;let ot=Kr;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ot=t.toneMapping);const Ft={shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:ct,fragmentShader:Pe,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:B,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:be,batchingColor:be&&Q._colorsTexture!==null,instancing:et,instancingColor:et&&Q.instanceColor!==null,instancingMorph:et&&Q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Wo,alphaToCoverage:!!E.alphaToCoverage,map:mt,matcap:cn,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:U,aoMap:At,lightMap:st,bumpMap:Ve,normalMap:O,displacementMap:h&&Re,emissiveMap:ae,normalMapObjectSpace:O&&E.normalMapType===mS,normalMapTangentSpace:O&&E.normalMapType===kp,metalnessMap:ce,roughnessMap:Ke,anisotropy:tt,anisotropyMap:ue,clearcoat:D,clearcoatMap:Ne,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ge,dispersion:T,iridescence:$,iridescenceMap:We,iridescenceThicknessMap:xe,sheen:de,sheenColorMap:Te,sheenRoughnessMap:nt,specularMap:je,specularColorMap:Le,specularIntensityMap:lt,transmission:ge,transmissionMap:W,thicknessMap:Ae,gradientMap:Ce,opaque:E.transparent===!1&&E.blending===Lo&&E.alphaToCoverage===!1,alphaMap:ze,alphaTest:ye,alphaHash:pe,combine:E.combine,mapUv:mt&&w(E.map.channel),aoMapUv:At&&w(E.aoMap.channel),lightMapUv:st&&w(E.lightMap.channel),bumpMapUv:Ve&&w(E.bumpMap.channel),normalMapUv:O&&w(E.normalMap.channel),displacementMapUv:Re&&w(E.displacementMap.channel),emissiveMapUv:ae&&w(E.emissiveMap.channel),metalnessMapUv:ce&&w(E.metalnessMap.channel),roughnessMapUv:Ke&&w(E.roughnessMap.channel),anisotropyMapUv:ue&&w(E.anisotropyMap.channel),clearcoatMapUv:Ne&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:_e&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:nt&&w(E.sheenRoughnessMap.channel),specularMapUv:je&&w(E.specularMap.channel),specularColorMapUv:Le&&w(E.specularColorMap.channel),specularIntensityMapUv:lt&&w(E.specularIntensityMap.channel),transmissionMapUv:W&&w(E.transmissionMap.channel),thicknessMapUv:Ae&&w(E.thicknessMap.channel),alphaMapUv:ze&&w(E.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(O||tt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!le.attributes.uv&&(mt||ze),fog:!!se,useFog:E.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ie,skinning:Q.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,decodeVideoTexture:mt&&E.map.isVideoTexture===!0&&Rt.getTransfer(E.map.colorSpace)===Vt,decodeVideoTextureEmissive:ae&&E.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(E.emissiveMap.colorSpace)===Vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Yn,flipSided:E.side===li,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Xe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&E.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function u(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)S.push(N),S.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(g(S,E),x(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function g(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function M(E){const S=y[E.type];let N;if(S){const H=Wi[S];N=WS.clone(H.uniforms)}else N=E.uniforms;return N}function R(E,S){let N;for(let H=0,Q=d.length;H<Q;H++){const se=d[H];if(se.cacheKey===S){N=se,++N.usedTimes;break}}return N===void 0&&(N=new P3(t,S,E,s),d.push(N)),N}function P(E){if(--E.usedTimes===0){const S=d.indexOf(E);d[S]=d[d.length-1],d.pop(),E.destroy()}}function L(E){l.remove(E)}function I(){l.dispose()}return{getParameters:v,getProgramCacheKey:u,getUniforms:M,acquireProgram:R,releaseProgram:P,releaseShaderCache:L,programs:d,dispose:I}}function U3(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function F3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ev(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,y,w,v){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:y,renderOrder:f.renderOrder,z:w,group:v},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=y,u.renderOrder=f.renderOrder,u.z=w,u.group=v),e++,u}function a(f,h,p,y,w,v){const u=o(f,h,p,y,w,v);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,y,w,v){const u=o(f,h,p,y,w,v);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||F3),i.length>1&&i.sort(h||Qg),r.length>1&&r.sort(h||Qg)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function O3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ev,t.set(i,[o])):r>=s.length?(o=new ev,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function k3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new xt};break;case"SpotLight":n={position:new z,direction:new z,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function z3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let B3=0;function H3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function V3(t){const e=new k3,n=z3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Jt,o=new Jt;function a(c){let d=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,y=0,w=0,v=0,u=0,g=0,x=0,M=0,R=0,P=0,L=0;c.sort(H3);for(let E=0,S=c.length;E<S;E++){const N=c[E],H=N.color,Q=N.intensity,se=N.distance,le=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=H.r*Q,f+=H.g*Q,h+=H.b*Q;else if(N.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(N.sh.coefficients[V],Q);L++}else if(N.isDirectionalLight){const V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Y=N.shadow,U=n.get(N);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=le,i.directionalShadowMatrix[p]=N.shadow.matrix,g++}i.directional[p]=V,p++}else if(N.isSpotLight){const V=e.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(H).multiplyScalar(Q),V.distance=se,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,i.spot[w]=V;const Y=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,Y.updateMatrices(N),N.castShadow&&P++),i.spotLightMatrix[w]=Y.matrix,N.castShadow){const U=n.get(N);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.spotShadow[w]=U,i.spotShadowMap[w]=le,M++}w++}else if(N.isRectAreaLight){const V=e.get(N);V.color.copy(H).multiplyScalar(Q),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=V,v++}else if(N.isPointLight){const V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){const Y=N.shadow,U=n.get(N);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,U.shadowCameraNear=Y.camera.near,U.shadowCameraFar=Y.camera.far,i.pointShadow[y]=U,i.pointShadowMap[y]=le,i.pointShadowMatrix[y]=N.shadow.matrix,x++}i.point[y]=V,y++}else if(N.isHemisphereLight){const V=e.get(N);V.skyColor.copy(N.color).multiplyScalar(Q),V.groundColor.copy(N.groundColor).multiplyScalar(Q),i.hemi[u]=V,u++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==p||I.pointLength!==y||I.spotLength!==w||I.rectAreaLength!==v||I.hemiLength!==u||I.numDirectionalShadows!==g||I.numPointShadows!==x||I.numSpotShadows!==M||I.numSpotMaps!==R||I.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=w,i.rectArea.length=v,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+R-P,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,I.directionalLength=p,I.pointLength=y,I.spotLength=w,I.rectAreaLength=v,I.hemiLength=u,I.numDirectionalShadows=g,I.numPointShadows=x,I.numSpotShadows=M,I.numSpotMaps=R,I.numLightProbes=L,i.version=B3++)}function l(c,d){let f=0,h=0,p=0,y=0,w=0;const v=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const x=c[u];if(x.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),f++}else if(x.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),p++}else if(x.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),o.identity(),s.copy(x.matrixWorld),s.premultiply(v),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),h++}else if(x.isHemisphereLight){const M=i.hemi[w];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(v),w++}}}return{setup:a,setupView:l,state:i}}function tv(t){const e=new V3(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function G3(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new tv(t),e.set(r,[a])):s>=o.length?(a=new tv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const W3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X3=`uniform sampler2D shadow_pass;
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
}`;function j3(t,e,n){let i=new Gp;const r=new $e,s=new $e,o=new Gt,a=new m2({depthPacking:pS}),l=new g2,c={},d=n.maxTextureSize,f={[Qr]:li,[li]:Qr,[Yn]:Yn},h=new es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:W3,fragmentShader:X3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const y=new gn;y.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Z(y,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y1;let u=this.type;this.render=function(P,L,I){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),H=t.state;H.setBlending($r),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Q=u!==sr&&this.type===sr,se=u===sr&&this.type!==sr;for(let le=0,V=P.length;le<V;le++){const Y=P[le],U=Y.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const ee=U.getFrameExtents();if(r.multiply(ee),s.copy(U.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ee.x),r.x=s.x*ee.x,U.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ee.y),r.y=s.y*ee.y,U.mapSize.y=s.y)),U.map===null||Q===!0||se===!0){const Ee=this.type!==sr?{minFilter:zi,magFilter:zi}:{};U.map!==null&&U.map.dispose(),U.map=new Fs(r.x,r.y,Ee),U.map.texture.name=Y.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const ie=U.getViewportCount();for(let Ee=0;Ee<ie;Ee++){const Fe=U.getViewport(Ee);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),H.viewport(o),U.updateMatrices(Y,Ee),i=U.getFrustum(),M(L,I,U.camera,Y,this.type)}U.isPointLightShadow!==!0&&this.type===sr&&g(U,I),U.needsUpdate=!1}u=this.type,v.needsUpdate=!1,t.setRenderTarget(E,S,N)};function g(P,L){const I=e.update(w);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Fs(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(L,null,I,h,w,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(L,null,I,p,w,null)}function x(P,L,I,E){let S=null;const N=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)S=N;else if(S=I.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const H=S.uuid,Q=L.uuid;let se=c[H];se===void 0&&(se={},c[H]=se);let le=se[Q];le===void 0&&(le=S.clone(),se[Q]=le,L.addEventListener("dispose",R)),S=le}if(S.visible=L.visible,S.wireframe=L.wireframe,E===sr?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:f[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=I}return S}function M(P,L,I,E,S){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===sr)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const Q=e.update(P),se=P.material;if(Array.isArray(se)){const le=Q.groups;for(let V=0,Y=le.length;V<Y;V++){const U=le[V],ee=se[U.materialIndex];if(ee&&ee.visible){const ie=x(P,ee,E,S);P.onBeforeShadow(t,P,L,I,Q,ie,U),t.renderBufferDirect(I,null,Q,ie,P,U),P.onAfterShadow(t,P,L,I,Q,ie,U)}}}else if(se.visible){const le=x(P,se,E,S);P.onBeforeShadow(t,P,L,I,Q,le,null),t.renderBufferDirect(I,null,Q,le,P,null),P.onAfterShadow(t,P,L,I,Q,le,null)}}const H=P.children;for(let Q=0,se=H.length;Q<se;Q++)M(H[Q],L,I,E,S)}function R(P){P.target.removeEventListener("dispose",R);for(const I in c){const E=c[I],S=P.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const Y3={[qf]:$f,[Kf]:Qf,[Jf]:eh,[Ho]:Zf,[$f]:qf,[Qf]:Kf,[eh]:Jf,[Zf]:Ho};function q3(t,e){function n(){let W=!1;const Ae=new Gt;let Ce=null;const ze=new Gt(0,0,0,0);return{setMask:function(ye){Ce!==ye&&!W&&(t.colorMask(ye,ye,ye,ye),Ce=ye)},setLocked:function(ye){W=ye},setClear:function(ye,pe,Xe,ot,Ft){Ft===!0&&(ye*=ot,pe*=ot,Xe*=ot),Ae.set(ye,pe,Xe,ot),ze.equals(Ae)===!1&&(t.clearColor(ye,pe,Xe,ot),ze.copy(Ae))},reset:function(){W=!1,Ce=null,ze.set(-1,0,0,0)}}}function i(){let W=!1,Ae=!1,Ce=null,ze=null,ye=null;return{setReversed:function(pe){if(Ae!==pe){const Xe=e.get("EXT_clip_control");pe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ae=pe;const ot=ye;ye=null,this.setClear(ot)}},getReversed:function(){return Ae},setTest:function(pe){pe?he(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(pe){Ce!==pe&&!W&&(t.depthMask(pe),Ce=pe)},setFunc:function(pe){if(Ae&&(pe=Y3[pe]),ze!==pe){switch(pe){case qf:t.depthFunc(t.NEVER);break;case $f:t.depthFunc(t.ALWAYS);break;case Kf:t.depthFunc(t.LESS);break;case Ho:t.depthFunc(t.LEQUAL);break;case Jf:t.depthFunc(t.EQUAL);break;case Zf:t.depthFunc(t.GEQUAL);break;case Qf:t.depthFunc(t.GREATER);break;case eh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ze=pe}},setLocked:function(pe){W=pe},setClear:function(pe){ye!==pe&&(Ae&&(pe=1-pe),t.clearDepth(pe),ye=pe)},reset:function(){W=!1,Ce=null,ze=null,ye=null,Ae=!1}}}function r(){let W=!1,Ae=null,Ce=null,ze=null,ye=null,pe=null,Xe=null,ot=null,Ft=null;return{setTest:function(vt){W||(vt?he(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(vt){Ae!==vt&&!W&&(t.stencilMask(vt),Ae=vt)},setFunc:function(vt,on,Hn){(Ce!==vt||ze!==on||ye!==Hn)&&(t.stencilFunc(vt,on,Hn),Ce=vt,ze=on,ye=Hn)},setOp:function(vt,on,Hn){(pe!==vt||Xe!==on||ot!==Hn)&&(t.stencilOp(vt,on,Hn),pe=vt,Xe=on,ot=Hn)},setLocked:function(vt){W=vt},setClear:function(vt){Ft!==vt&&(t.clearStencil(vt),Ft=vt)},reset:function(){W=!1,Ae=null,Ce=null,ze=null,ye=null,pe=null,Xe=null,ot=null,Ft=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],y=null,w=!1,v=null,u=null,g=null,x=null,M=null,R=null,P=null,L=new xt(0,0,0),I=0,E=!1,S=null,N=null,H=null,Q=null,se=null;const le=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(U)[1]),V=Y>=1):U.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),V=Y>=2);let ee=null,ie={};const Ee=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),ct=new Gt().fromArray(Ee),Pe=new Gt().fromArray(Fe);function oe(W,Ae,Ce,ze){const ye=new Uint8Array(4),pe=t.createTexture();t.bindTexture(W,pe),t.texParameteri(W,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(W,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<Ce;Xe++)W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY?t.texImage3D(Ae,0,t.RGBA,1,1,ze,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(Ae+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return pe}const B={};B[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),B[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),B[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(t.DEPTH_TEST),o.setFunc(Ho),Ve(!1),O(K0),he(t.CULL_FACE),At($r);function he(W){d[W]!==!0&&(t.enable(W),d[W]=!0)}function Ie(W){d[W]!==!1&&(t.disable(W),d[W]=!1)}function et(W,Ae){return f[W]!==Ae?(t.bindFramebuffer(W,Ae),f[W]=Ae,W===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Ae),W===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Ae),!0):!1}function be(W,Ae){let Ce=p,ze=!1;if(W){Ce=h.get(Ae),Ce===void 0&&(Ce=[],h.set(Ae,Ce));const ye=W.textures;if(Ce.length!==ye.length||Ce[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Xe=ye.length;pe<Xe;pe++)Ce[pe]=t.COLOR_ATTACHMENT0+pe;Ce.length=ye.length,ze=!0}}else Ce[0]!==t.BACK&&(Ce[0]=t.BACK,ze=!0);ze&&t.drawBuffers(Ce)}function mt(W){return y!==W?(t.useProgram(W),y=W,!0):!1}const cn={[Ms]:t.FUNC_ADD,[HM]:t.FUNC_SUBTRACT,[VM]:t.FUNC_REVERSE_SUBTRACT};cn[GM]=t.MIN,cn[WM]=t.MAX;const F={[XM]:t.ZERO,[jM]:t.ONE,[YM]:t.SRC_COLOR,[jf]:t.SRC_ALPHA,[QM]:t.SRC_ALPHA_SATURATE,[JM]:t.DST_COLOR,[$M]:t.DST_ALPHA,[qM]:t.ONE_MINUS_SRC_COLOR,[Yf]:t.ONE_MINUS_SRC_ALPHA,[ZM]:t.ONE_MINUS_DST_COLOR,[KM]:t.ONE_MINUS_DST_ALPHA,[eS]:t.CONSTANT_COLOR,[tS]:t.ONE_MINUS_CONSTANT_COLOR,[nS]:t.CONSTANT_ALPHA,[iS]:t.ONE_MINUS_CONSTANT_ALPHA};function At(W,Ae,Ce,ze,ye,pe,Xe,ot,Ft,vt){if(W===$r){w===!0&&(Ie(t.BLEND),w=!1);return}if(w===!1&&(he(t.BLEND),w=!0),W!==BM){if(W!==v||vt!==E){if((u!==Ms||M!==Ms)&&(t.blendEquation(t.FUNC_ADD),u=Ms,M=Ms),vt)switch(W){case Lo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case J0:t.blendFunc(t.ONE,t.ONE);break;case Z0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Q0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Lo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case J0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Z0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Q0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}g=null,x=null,R=null,P=null,L.set(0,0,0),I=0,v=W,E=vt}return}ye=ye||Ae,pe=pe||Ce,Xe=Xe||ze,(Ae!==u||ye!==M)&&(t.blendEquationSeparate(cn[Ae],cn[ye]),u=Ae,M=ye),(Ce!==g||ze!==x||pe!==R||Xe!==P)&&(t.blendFuncSeparate(F[Ce],F[ze],F[pe],F[Xe]),g=Ce,x=ze,R=pe,P=Xe),(ot.equals(L)===!1||Ft!==I)&&(t.blendColor(ot.r,ot.g,ot.b,Ft),L.copy(ot),I=Ft),v=W,E=!1}function st(W,Ae){W.side===Yn?Ie(t.CULL_FACE):he(t.CULL_FACE);let Ce=W.side===li;Ae&&(Ce=!Ce),Ve(Ce),W.blending===Lo&&W.transparent===!1?At($r):At(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const ze=W.stencilWrite;a.setTest(ze),ze&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ae(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(W){S!==W&&(W?t.frontFace(t.CW):t.frontFace(t.CCW),S=W)}function O(W){W!==kM?(he(t.CULL_FACE),W!==N&&(W===K0?t.cullFace(t.BACK):W===zM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),N=W}function Re(W){W!==H&&(V&&t.lineWidth(W),H=W)}function ae(W,Ae,Ce){W?(he(t.POLYGON_OFFSET_FILL),(Q!==Ae||se!==Ce)&&(t.polygonOffset(Ae,Ce),Q=Ae,se=Ce)):Ie(t.POLYGON_OFFSET_FILL)}function ce(W){W?he(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function Ke(W){W===void 0&&(W=t.TEXTURE0+le-1),ee!==W&&(t.activeTexture(W),ee=W)}function tt(W,Ae,Ce){Ce===void 0&&(ee===null?Ce=t.TEXTURE0+le-1:Ce=ee);let ze=ie[Ce];ze===void 0&&(ze={type:void 0,texture:void 0},ie[Ce]=ze),(ze.type!==W||ze.texture!==Ae)&&(ee!==Ce&&(t.activeTexture(Ce),ee=Ce),t.bindTexture(W,Ae||B[W]),ze.type=W,ze.texture=Ae)}function D(){const W=ie[ee];W!==void 0&&W.type!==void 0&&(t.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{t.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $(){try{t.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{t.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{t.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{t.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{t.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{t.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{t.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(){try{t.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{t.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Te(W){ct.equals(W)===!1&&(t.scissor(W.x,W.y,W.z,W.w),ct.copy(W))}function nt(W){Pe.equals(W)===!1&&(t.viewport(W.x,W.y,W.z,W.w),Pe.copy(W))}function je(W,Ae){let Ce=c.get(Ae);Ce===void 0&&(Ce=new WeakMap,c.set(Ae,Ce));let ze=Ce.get(W);ze===void 0&&(ze=t.getUniformBlockIndex(Ae,W.name),Ce.set(W,ze))}function Le(W,Ae){const ze=c.get(Ae).get(W);l.get(Ae)!==ze&&(t.uniformBlockBinding(Ae,ze,W.__bindingPointIndex),l.set(Ae,ze))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},ee=null,ie={},f={},h=new WeakMap,p=[],y=null,w=!1,v=null,u=null,g=null,x=null,M=null,R=null,P=null,L=new xt(0,0,0),I=0,E=!1,S=null,N=null,H=null,Q=null,se=null,ct.set(0,0,t.canvas.width,t.canvas.height),Pe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Ie,bindFramebuffer:et,drawBuffers:be,useProgram:mt,setBlending:At,setMaterial:st,setFlipSided:Ve,setCullFace:O,setLineWidth:Re,setPolygonOffset:ae,setScissorTest:ce,activeTexture:Ke,bindTexture:tt,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:$,texImage2D:We,texImage3D:xe,updateUBOMapping:je,uniformBlockBinding:Le,texStorage2D:_e,texStorage3D:Ge,texSubImage2D:de,texSubImage3D:ge,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ne,scissor:Te,viewport:nt,reset:lt}}function $3(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,T){return p?new OffscreenCanvas(D,T):Qc("canvas")}function w(D,T,$){let de=1;const ge=tt(D);if((ge.width>$||ge.height>$)&&(de=$/Math.max(ge.width,ge.height)),de<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ue=Math.floor(de*ge.width),Ne=Math.floor(de*ge.height);f===void 0&&(f=y(ue,Ne));const _e=T?y(ue,Ne):f;return _e.width=ue,_e.height=Ne,_e.getContext("2d").drawImage(D,0,0,ue,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+Ne+")."),_e}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function v(D){return D.generateMipmaps}function u(D){t.generateMipmap(D)}function g(D){return D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?t.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(D,T,$,de,ge=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ue=T;if(T===t.RED&&($===t.FLOAT&&(ue=t.R32F),$===t.HALF_FLOAT&&(ue=t.R16F),$===t.UNSIGNED_BYTE&&(ue=t.R8)),T===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(ue=t.R8UI),$===t.UNSIGNED_SHORT&&(ue=t.R16UI),$===t.UNSIGNED_INT&&(ue=t.R32UI),$===t.BYTE&&(ue=t.R8I),$===t.SHORT&&(ue=t.R16I),$===t.INT&&(ue=t.R32I)),T===t.RG&&($===t.FLOAT&&(ue=t.RG32F),$===t.HALF_FLOAT&&(ue=t.RG16F),$===t.UNSIGNED_BYTE&&(ue=t.RG8)),T===t.RG_INTEGER&&($===t.UNSIGNED_BYTE&&(ue=t.RG8UI),$===t.UNSIGNED_SHORT&&(ue=t.RG16UI),$===t.UNSIGNED_INT&&(ue=t.RG32UI),$===t.BYTE&&(ue=t.RG8I),$===t.SHORT&&(ue=t.RG16I),$===t.INT&&(ue=t.RG32I)),T===t.RGB_INTEGER&&($===t.UNSIGNED_BYTE&&(ue=t.RGB8UI),$===t.UNSIGNED_SHORT&&(ue=t.RGB16UI),$===t.UNSIGNED_INT&&(ue=t.RGB32UI),$===t.BYTE&&(ue=t.RGB8I),$===t.SHORT&&(ue=t.RGB16I),$===t.INT&&(ue=t.RGB32I)),T===t.RGBA_INTEGER&&($===t.UNSIGNED_BYTE&&(ue=t.RGBA8UI),$===t.UNSIGNED_SHORT&&(ue=t.RGBA16UI),$===t.UNSIGNED_INT&&(ue=t.RGBA32UI),$===t.BYTE&&(ue=t.RGBA8I),$===t.SHORT&&(ue=t.RGBA16I),$===t.INT&&(ue=t.RGBA32I)),T===t.RGB&&($===t.UNSIGNED_INT_5_9_9_9_REV&&(ue=t.RGB9_E5),$===t.UNSIGNED_INT_10F_11F_11F_REV&&(ue=t.R11F_G11F_B10F)),T===t.RGBA){const Ne=ge?Jc:Rt.getTransfer(de);$===t.FLOAT&&(ue=t.RGBA32F),$===t.HALF_FLOAT&&(ue=t.RGBA16F),$===t.UNSIGNED_BYTE&&(ue=Ne===Vt?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)}return(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function M(D,T){let $;return D?T===null||T===Us||T===il?$=t.DEPTH24_STENCIL8:T===dr?$=t.DEPTH32F_STENCIL8:T===nl&&($=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Us||T===il?$=t.DEPTH_COMPONENT24:T===dr?$=t.DEPTH_COMPONENT32F:T===nl&&($=t.DEPTH_COMPONENT16),$}function R(D,T){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==zi&&D.minFilter!==ji?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function P(D){const T=D.target;T.removeEventListener("dispose",P),I(T),T.isVideoTexture&&d.delete(T)}function L(D){const T=D.target;T.removeEventListener("dispose",L),S(T)}function I(D){const T=i.get(D);if(T.__webglInit===void 0)return;const $=D.source,de=h.get($);if(de){const ge=de[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&E(D),Object.keys(de).length===0&&h.delete($)}i.remove(D)}function E(D){const T=i.get(D);t.deleteTexture(T.__webglTexture);const $=D.source,de=h.get($);delete de[T.__cacheKey],o.memory.textures--}function S(D){const T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let ge=0;ge<T.__webglFramebuffer[de].length;ge++)t.deleteFramebuffer(T.__webglFramebuffer[de][ge]);else t.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)t.deleteFramebuffer(T.__webglFramebuffer[de]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=D.textures;for(let de=0,ge=$.length;de<ge;de++){const ue=i.get($[de]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),o.memory.textures--),i.remove($[de])}i.remove(D)}let N=0;function H(){N=0}function Q(){const D=N;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),N+=1,D}function se(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function le(D,T){const $=i.get(D);if(D.isVideoTexture&&ce(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&$.__version!==D.version){const de=D.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B($,D,T);return}}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+T)}function V(D,T){const $=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){B($,D,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+T)}function Y(D,T){const $=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){B($,D,T);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+T)}function U(D,T){const $=i.get(D);if(D.version>0&&$.__version!==D.version){he($,D,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+T)}const ee={[Do]:t.REPEAT,[As]:t.CLAMP_TO_EDGE,[ih]:t.MIRRORED_REPEAT},ie={[zi]:t.NEAREST,[fS]:t.NEAREST_MIPMAP_NEAREST,[zl]:t.NEAREST_MIPMAP_LINEAR,[ji]:t.LINEAR,[fd]:t.LINEAR_MIPMAP_NEAREST,[bs]:t.LINEAR_MIPMAP_LINEAR},Ee={[gS]:t.NEVER,[SS]:t.ALWAYS,[vS]:t.LESS,[D1]:t.LEQUAL,[_S]:t.EQUAL,[MS]:t.GEQUAL,[xS]:t.GREATER,[yS]:t.NOTEQUAL};function Fe(D,T){if(T.type===dr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ji||T.magFilter===fd||T.magFilter===zl||T.magFilter===bs||T.minFilter===ji||T.minFilter===fd||T.minFilter===zl||T.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,ee[T.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,ee[T.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,ee[T.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,ie[T.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,Ee[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===zi||T.minFilter!==zl&&T.minFilter!==bs||T.type===dr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ct(D,T){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",P));const de=T.source;let ge=h.get(de);ge===void 0&&(ge={},h.set(de,ge));const ue=se(T);if(ue!==D.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ge[ue].usedTimes++;const Ne=ge[D.__cacheKey];Ne!==void 0&&(ge[D.__cacheKey].usedTimes--,Ne.usedTimes===0&&E(T)),D.__cacheKey=ue,D.__webglTexture=ge[ue].texture}return $}function Pe(D,T,$){return Math.floor(Math.floor(D/$)/T)}function oe(D,T,$,de){const ue=D.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,T.width,T.height,$,de,T.data);else{ue.sort((xe,Te)=>xe.start-Te.start);let Ne=0;for(let xe=1;xe<ue.length;xe++){const Te=ue[Ne],nt=ue[xe],je=Te.start+Te.count,Le=Pe(nt.start,T.width,4),lt=Pe(Te.start,T.width,4);nt.start<=je+1&&Le===lt&&Pe(nt.start+nt.count-1,T.width,4)===Le?Te.count=Math.max(Te.count,nt.start+nt.count-Te.start):(++Ne,ue[Ne]=nt)}ue.length=Ne+1;const _e=t.getParameter(t.UNPACK_ROW_LENGTH),Ge=t.getParameter(t.UNPACK_SKIP_PIXELS),We=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,T.width);for(let xe=0,Te=ue.length;xe<Te;xe++){const nt=ue[xe],je=Math.floor(nt.start/4),Le=Math.ceil(nt.count/4),lt=je%T.width,W=Math.floor(je/T.width),Ae=Le,Ce=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(t.UNPACK_SKIP_ROWS,W),n.texSubImage2D(t.TEXTURE_2D,0,lt,W,Ae,Ce,$,de,T.data)}D.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,_e),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(t.UNPACK_SKIP_ROWS,We)}}function B(D,T,$){let de=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=t.TEXTURE_3D);const ge=ct(D,T),ue=T.source;n.bindTexture(de,D.__webglTexture,t.TEXTURE0+$);const Ne=i.get(ue);if(ue.version!==Ne.__version||ge===!0){n.activeTexture(t.TEXTURE0+$);const _e=Rt.getPrimaries(Rt.workingColorSpace),Ge=T.colorSpace===Fr?null:Rt.getPrimaries(T.colorSpace),We=T.colorSpace===Fr||_e===Ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let xe=w(T.image,!1,r.maxTextureSize);xe=Ke(T,xe);const Te=s.convert(T.format,T.colorSpace),nt=s.convert(T.type);let je=x(T.internalFormat,Te,nt,T.colorSpace,T.isVideoTexture);Fe(de,T);let Le;const lt=T.mipmaps,W=T.isVideoTexture!==!0,Ae=Ne.__version===void 0||ge===!0,Ce=ue.dataReady,ze=R(T,xe);if(T.isDepthTexture)je=M(T.format===sl,T.type),Ae&&(W?n.texStorage2D(t.TEXTURE_2D,1,je,xe.width,xe.height):n.texImage2D(t.TEXTURE_2D,0,je,xe.width,xe.height,0,Te,nt,null));else if(T.isDataTexture)if(lt.length>0){W&&Ae&&n.texStorage2D(t.TEXTURE_2D,ze,je,lt[0].width,lt[0].height);for(let ye=0,pe=lt.length;ye<pe;ye++)Le=lt[ye],W?Ce&&n.texSubImage2D(t.TEXTURE_2D,ye,0,0,Le.width,Le.height,Te,nt,Le.data):n.texImage2D(t.TEXTURE_2D,ye,je,Le.width,Le.height,0,Te,nt,Le.data);T.generateMipmaps=!1}else W?(Ae&&n.texStorage2D(t.TEXTURE_2D,ze,je,xe.width,xe.height),Ce&&oe(T,xe,Te,nt)):n.texImage2D(t.TEXTURE_2D,0,je,xe.width,xe.height,0,Te,nt,xe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,je,lt[0].width,lt[0].height,xe.depth);for(let ye=0,pe=lt.length;ye<pe;ye++)if(Le=lt[ye],T.format!==Fi)if(Te!==null)if(W){if(Ce)if(T.layerUpdates.size>0){const Xe=Lg(Le.width,Le.height,T.format,T.type);for(const ot of T.layerUpdates){const Ft=Le.data.subarray(ot*Xe/Le.data.BYTES_PER_ELEMENT,(ot+1)*Xe/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ye,0,0,ot,Le.width,Le.height,1,Te,Ft)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,xe.depth,Te,Le.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ye,je,Le.width,Le.height,xe.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,xe.depth,Te,nt,Le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ye,je,Le.width,Le.height,xe.depth,0,Te,nt,Le.data)}else{W&&Ae&&n.texStorage2D(t.TEXTURE_2D,ze,je,lt[0].width,lt[0].height);for(let ye=0,pe=lt.length;ye<pe;ye++)Le=lt[ye],T.format!==Fi?Te!==null?W?Ce&&n.compressedTexSubImage2D(t.TEXTURE_2D,ye,0,0,Le.width,Le.height,Te,Le.data):n.compressedTexImage2D(t.TEXTURE_2D,ye,je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ce&&n.texSubImage2D(t.TEXTURE_2D,ye,0,0,Le.width,Le.height,Te,nt,Le.data):n.texImage2D(t.TEXTURE_2D,ye,je,Le.width,Le.height,0,Te,nt,Le.data)}else if(T.isDataArrayTexture)if(W){if(Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,je,xe.width,xe.height,xe.depth),Ce)if(T.layerUpdates.size>0){const ye=Lg(xe.width,xe.height,T.format,T.type);for(const pe of T.layerUpdates){const Xe=xe.data.subarray(pe*ye/xe.data.BYTES_PER_ELEMENT,(pe+1)*ye/xe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,xe.width,xe.height,1,Te,nt,Xe)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Te,nt,xe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,je,xe.width,xe.height,xe.depth,0,Te,nt,xe.data);else if(T.isData3DTexture)W?(Ae&&n.texStorage3D(t.TEXTURE_3D,ze,je,xe.width,xe.height,xe.depth),Ce&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Te,nt,xe.data)):n.texImage3D(t.TEXTURE_3D,0,je,xe.width,xe.height,xe.depth,0,Te,nt,xe.data);else if(T.isFramebufferTexture){if(Ae)if(W)n.texStorage2D(t.TEXTURE_2D,ze,je,xe.width,xe.height);else{let ye=xe.width,pe=xe.height;for(let Xe=0;Xe<ze;Xe++)n.texImage2D(t.TEXTURE_2D,Xe,je,ye,pe,0,Te,nt,null),ye>>=1,pe>>=1}}else if(lt.length>0){if(W&&Ae){const ye=tt(lt[0]);n.texStorage2D(t.TEXTURE_2D,ze,je,ye.width,ye.height)}for(let ye=0,pe=lt.length;ye<pe;ye++)Le=lt[ye],W?Ce&&n.texSubImage2D(t.TEXTURE_2D,ye,0,0,Te,nt,Le):n.texImage2D(t.TEXTURE_2D,ye,je,Te,nt,Le);T.generateMipmaps=!1}else if(W){if(Ae){const ye=tt(xe);n.texStorage2D(t.TEXTURE_2D,ze,je,ye.width,ye.height)}Ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,nt,xe)}else n.texImage2D(t.TEXTURE_2D,0,je,Te,nt,xe);v(T)&&u(de),Ne.__version=ue.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function he(D,T,$){if(T.image.length!==6)return;const de=ct(D,T),ge=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+$);const ue=i.get(ge);if(ge.version!==ue.__version||de===!0){n.activeTexture(t.TEXTURE0+$);const Ne=Rt.getPrimaries(Rt.workingColorSpace),_e=T.colorSpace===Fr?null:Rt.getPrimaries(T.colorSpace),Ge=T.colorSpace===Fr||Ne===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const We=T.isCompressedTexture||T.image[0].isCompressedTexture,xe=T.image[0]&&T.image[0].isDataTexture,Te=[];for(let pe=0;pe<6;pe++)!We&&!xe?Te[pe]=w(T.image[pe],!0,r.maxCubemapSize):Te[pe]=xe?T.image[pe].image:T.image[pe],Te[pe]=Ke(T,Te[pe]);const nt=Te[0],je=s.convert(T.format,T.colorSpace),Le=s.convert(T.type),lt=x(T.internalFormat,je,Le,T.colorSpace),W=T.isVideoTexture!==!0,Ae=ue.__version===void 0||de===!0,Ce=ge.dataReady;let ze=R(T,nt);Fe(t.TEXTURE_CUBE_MAP,T);let ye;if(We){W&&Ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ze,lt,nt.width,nt.height);for(let pe=0;pe<6;pe++){ye=Te[pe].mipmaps;for(let Xe=0;Xe<ye.length;Xe++){const ot=ye[Xe];T.format!==Fi?je!==null?W?Ce&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,0,0,ot.width,ot.height,je,ot.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,lt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,0,0,ot.width,ot.height,je,Le,ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,lt,ot.width,ot.height,0,je,Le,ot.data)}}}else{if(ye=T.mipmaps,W&&Ae){ye.length>0&&ze++;const pe=tt(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ze,lt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(xe){W?Ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Te[pe].width,Te[pe].height,je,Le,Te[pe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,Te[pe].width,Te[pe].height,0,je,Le,Te[pe].data);for(let Xe=0;Xe<ye.length;Xe++){const Ft=ye[Xe].image[pe].image;W?Ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,0,0,Ft.width,Ft.height,je,Le,Ft.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,lt,Ft.width,Ft.height,0,je,Le,Ft.data)}}else{W?Ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,je,Le,Te[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,je,Le,Te[pe]);for(let Xe=0;Xe<ye.length;Xe++){const ot=ye[Xe];W?Ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,0,0,je,Le,ot.image[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,lt,je,Le,ot.image[pe])}}}v(T)&&u(t.TEXTURE_CUBE_MAP),ue.__version=ge.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ie(D,T,$,de,ge,ue){const Ne=s.convert($.format,$.colorSpace),_e=s.convert($.type),Ge=x($.internalFormat,Ne,_e,$.colorSpace),We=i.get(T),xe=i.get($);if(xe.__renderTarget=T,!We.__hasExternalTextures){const Te=Math.max(1,T.width>>ue),nt=Math.max(1,T.height>>ue);ge===t.TEXTURE_3D||ge===t.TEXTURE_2D_ARRAY?n.texImage3D(ge,ue,Ge,Te,nt,T.depth,0,Ne,_e,null):n.texImage2D(ge,ue,Ge,Te,nt,0,Ne,_e,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),ae(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,ge,xe.__webglTexture,0,Re(T)):(ge===t.TEXTURE_2D||ge>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,de,ge,xe.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(D,T,$){if(t.bindRenderbuffer(t.RENDERBUFFER,D),T.depthBuffer){const de=T.depthTexture,ge=de&&de.isDepthTexture?de.type:null,ue=M(T.stencilBuffer,ge),Ne=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=Re(T);ae(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,ue,T.width,T.height):$?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,ue,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ue,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ne,t.RENDERBUFFER,D)}else{const de=T.textures;for(let ge=0;ge<de.length;ge++){const ue=de[ge],Ne=s.convert(ue.format,ue.colorSpace),_e=s.convert(ue.type),Ge=x(ue.internalFormat,Ne,_e,ue.colorSpace),We=Re(T);$&&ae(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Ge,T.width,T.height):ae(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We,Ge,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,Ge,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=i.get(T.depthTexture);de.__renderTarget=T,(!de.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),le(T.depthTexture,0);const ge=de.__webglTexture,ue=Re(T);if(T.depthTexture.format===rl)ae(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ge,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ge,0);else if(T.depthTexture.format===sl)ae(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ge,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function mt(D){const T=i.get(D),$=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const de=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",ge)};de.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=de}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const de=D.texture.mipmaps;de&&de.length>0?be(T.__webglFramebuffer[0],D):be(T.__webglFramebuffer,D)}else if($){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=t.createRenderbuffer(),et(T.__webglDepthbuffer[de],D,!1);else{const ge=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[de];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,ue)}}else{const de=D.texture.mipmaps;if(de&&de.length>0?n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),et(T.__webglDepthbuffer,D,!1);else{const ge=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function cn(D,T,$){const de=i.get(D);T!==void 0&&Ie(de.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&mt(D)}function F(D){const T=D.texture,$=i.get(D),de=i.get(T);D.addEventListener("dispose",L);const ge=D.textures,ue=D.isWebGLCubeRenderTarget===!0,Ne=ge.length>1;if(Ne||(de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture()),de.__version=T.version,o.memory.textures++),ue){$.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[_e]=[];for(let Ge=0;Ge<T.mipmaps.length;Ge++)$.__webglFramebuffer[_e][Ge]=t.createFramebuffer()}else $.__webglFramebuffer[_e]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let _e=0;_e<T.mipmaps.length;_e++)$.__webglFramebuffer[_e]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(Ne)for(let _e=0,Ge=ge.length;_e<Ge;_e++){const We=i.get(ge[_e]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),o.memory.textures++)}if(D.samples>0&&ae(D)===!1){$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let _e=0;_e<ge.length;_e++){const Ge=ge[_e];$.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[_e]);const We=s.convert(Ge.format,Ge.colorSpace),xe=s.convert(Ge.type),Te=x(Ge.internalFormat,We,xe,Ge.colorSpace,D.isXRRenderTarget===!0),nt=Re(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,nt,Te,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,$.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),et($.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,de.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,T);for(let _e=0;_e<6;_e++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)Ie($.__webglFramebuffer[_e][Ge],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge);else Ie($.__webglFramebuffer[_e],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);v(T)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let _e=0,Ge=ge.length;_e<Ge;_e++){const We=ge[_e],xe=i.get(We);let Te=t.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Te,xe.__webglTexture),Fe(Te,We),Ie($.__webglFramebuffer,D,We,t.COLOR_ATTACHMENT0+_e,Te,0),v(We)&&u(Te)}n.unbindTexture()}else{let _e=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_e=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,de.__webglTexture),Fe(_e,T),T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)Ie($.__webglFramebuffer[Ge],D,T,t.COLOR_ATTACHMENT0,_e,Ge);else Ie($.__webglFramebuffer,D,T,t.COLOR_ATTACHMENT0,_e,0);v(T)&&u(_e),n.unbindTexture()}D.depthBuffer&&mt(D)}function At(D){const T=D.textures;for(let $=0,de=T.length;$<de;$++){const ge=T[$];if(v(ge)){const ue=g(D),Ne=i.get(ge).__webglTexture;n.bindTexture(ue,Ne),u(ue),n.unbindTexture()}}}const st=[],Ve=[];function O(D){if(D.samples>0){if(ae(D)===!1){const T=D.textures,$=D.width,de=D.height;let ge=t.COLOR_BUFFER_BIT;const ue=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ne=i.get(D),_e=T.length>1;if(_e)for(let We=0;We<T.length;We++)n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const Ge=D.texture.mipmaps;Ge&&Ge.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let We=0;We<T.length;We++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=t.STENCIL_BUFFER_BIT)),_e){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[We]);const xe=i.get(T[We]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,xe,0)}t.blitFramebuffer(0,0,$,de,0,0,$,de,ge,t.NEAREST),l===!0&&(st.length=0,Ve.length=0,st.push(t.COLOR_ATTACHMENT0+We),D.depthBuffer&&D.resolveDepthBuffer===!1&&(st.push(ue),Ve.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ve)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let We=0;We<T.length;We++){n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[We]);const xe=i.get(T[We]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Re(D){return Math.min(r.maxSamples,D.samples)}function ae(D){const T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ce(D){const T=o.render.frame;d.get(D)!==T&&(d.set(D,T),D.update())}function Ke(D,T){const $=D.colorSpace,de=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Wo&&$!==Fr&&(Rt.getTransfer($)===Vt?(de!==Fi||ge!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function tt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=H,this.setTexture2D=le,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=U,this.rebindTextures=cn,this.setupRenderTarget=F,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=ae}function K3(t,e){function n(i,r=Fr){let s;const o=Rt.getTransfer(r);if(i===Ji)return t.UNSIGNED_BYTE;if(i===Ip)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Np)return t.UNSIGNED_SHORT_5_5_5_1;if(i===A1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===b1)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===E1)return t.BYTE;if(i===T1)return t.SHORT;if(i===nl)return t.UNSIGNED_SHORT;if(i===Dp)return t.INT;if(i===Us)return t.UNSIGNED_INT;if(i===dr)return t.FLOAT;if(i===fl)return t.HALF_FLOAT;if(i===C1)return t.ALPHA;if(i===R1)return t.RGB;if(i===Fi)return t.RGBA;if(i===rl)return t.DEPTH_COMPONENT;if(i===sl)return t.DEPTH_STENCIL;if(i===P1)return t.RED;if(i===Up)return t.RED_INTEGER;if(i===L1)return t.RG;if(i===Fp)return t.RG_INTEGER;if(i===Op)return t.RGBA_INTEGER;if(i===Sc||i===wc||i===Ec||i===Tc)if(o===Vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Sc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Sc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rh||i===sh||i===oh||i===ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lh||i===ch||i===uh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lh||i===ch)return o===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===uh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dh||i===fh||i===hh||i===ph||i===mh||i===gh||i===vh||i===_h||i===xh||i===yh||i===Mh||i===Sh||i===wh||i===Eh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===dh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ph)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_h)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Eh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Th||i===Ah||i===bh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Th)return o===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ch||i===Rh||i===Ph||i===Lh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ch)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Rh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ph)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===il?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const J3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z3=`
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

}`;class Q3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new V1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new es({vertexShader:J3,fragmentShader:Z3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Z(new Br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eA extends $o{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,y=null;const w=typeof XRWebGLBinding<"u",v=new Q3,u={},g=n.getContextAttributes();let x=null,M=null;const R=[],P=[],L=new $e;let I=null;const E=new hi;E.viewport=new Gt;const S=new hi;S.viewport=new Gt;const N=[E,S],H=new y2;let Q=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let he=R[B];return he===void 0&&(he=new Ud,R[B]=he),he.getTargetRaySpace()},this.getControllerGrip=function(B){let he=R[B];return he===void 0&&(he=new Ud,R[B]=he),he.getGripSpace()},this.getHand=function(B){let he=R[B];return he===void 0&&(he=new Ud,R[B]=he),he.getHandSpace()};function le(B){const he=P.indexOf(B.inputSource);if(he===-1)return;const Ie=R[he];Ie!==void 0&&(Ie.update(B.inputSource,B.frame,c||o),Ie.dispatchEvent({type:B.type,data:B.inputSource}))}function V(){r.removeEventListener("select",le),r.removeEventListener("selectstart",le),r.removeEventListener("selectend",le),r.removeEventListener("squeeze",le),r.removeEventListener("squeezestart",le),r.removeEventListener("squeezeend",le),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Y);for(let B=0;B<R.length;B++){const he=P[B];he!==null&&(P[B]=null,R[B].disconnect(he))}Q=null,se=null,v.reset();for(const B in u)delete u[B];e.setRenderTarget(x),p=null,h=null,f=null,r=null,M=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&w&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",le),r.addEventListener("selectstart",le),r.addEventListener("selectend",le),r.addEventListener("squeeze",le),r.addEventListener("squeezestart",le),r.addEventListener("squeezeend",le),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(L),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,et=null,be=null;g.depth&&(be=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ie=g.stencil?sl:rl,et=g.stencil?il:Us);const mt={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(mt),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Fs(h.textureWidth,h.textureHeight,{format:Fi,type:Ji,depthTexture:new H1(h.textureWidth,h.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Fs(p.framebufferWidth,p.framebufferHeight,{format:Fi,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(B){for(let he=0;he<B.removed.length;he++){const Ie=B.removed[he],et=P.indexOf(Ie);et>=0&&(P[et]=null,R[et].disconnect(Ie))}for(let he=0;he<B.added.length;he++){const Ie=B.added[he];let et=P.indexOf(Ie);if(et===-1){for(let mt=0;mt<R.length;mt++)if(mt>=P.length){P.push(Ie),et=mt;break}else if(P[mt]===null){P[mt]=Ie,et=mt;break}if(et===-1)break}const be=R[et];be&&be.connect(Ie)}}const U=new z,ee=new z;function ie(B,he,Ie){U.setFromMatrixPosition(he.matrixWorld),ee.setFromMatrixPosition(Ie.matrixWorld);const et=U.distanceTo(ee),be=he.projectionMatrix.elements,mt=Ie.projectionMatrix.elements,cn=be[14]/(be[10]-1),F=be[14]/(be[10]+1),At=(be[9]+1)/be[5],st=(be[9]-1)/be[5],Ve=(be[8]-1)/be[0],O=(mt[8]+1)/mt[0],Re=cn*Ve,ae=cn*O,ce=et/(-Ve+O),Ke=ce*-Ve;if(he.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ke),B.translateZ(ce),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),be[10]===-1)B.projectionMatrix.copy(he.projectionMatrix),B.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const tt=cn+ce,D=F+ce,T=Re-Ke,$=ae+(et-Ke),de=At*F/D*tt,ge=st*F/D*tt;B.projectionMatrix.makePerspective(T,$,de,ge,tt,D),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Ee(B,he){he===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(he.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let he=B.near,Ie=B.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(Ie=v.depthFar)),H.near=S.near=E.near=he,H.far=S.far=E.far=Ie,(Q!==H.near||se!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),Q=H.near,se=H.far),H.layers.mask=B.layers.mask|6,E.layers.mask=H.layers.mask&3,S.layers.mask=H.layers.mask&5;const et=B.parent,be=H.cameras;Ee(H,et);for(let mt=0;mt<be.length;mt++)Ee(be[mt],et);be.length===2?ie(H,E,S):H.projectionMatrix.copy(E.projectionMatrix),Fe(B,H,et)};function Fe(B,he,Ie){Ie===null?B.matrix.copy(he.matrixWorld):(B.matrix.copy(Ie.matrixWorld),B.matrix.invert(),B.matrix.multiply(he.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(he.projectionMatrix),B.projectionMatrixInverse.copy(he.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Dh*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(H)},this.getCameraTexture=function(B){return u[B]};let ct=null;function Pe(B,he){if(d=he.getViewerPose(c||o),y=he,d!==null){const Ie=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let et=!1;Ie.length!==H.cameras.length&&(H.cameras.length=0,et=!0);for(let F=0;F<Ie.length;F++){const At=Ie[F];let st=null;if(p!==null)st=p.getViewport(At);else{const O=f.getViewSubImage(h,At);st=O.viewport,F===0&&(e.setRenderTargetTextures(M,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(M))}let Ve=N[F];Ve===void 0&&(Ve=new hi,Ve.layers.enable(F),Ve.viewport=new Gt,N[F]=Ve),Ve.matrix.fromArray(At.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(At.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(st.x,st.y,st.width,st.height),F===0&&(H.matrix.copy(Ve.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),et===!0&&H.cameras.push(Ve)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){f=i.getBinding();const F=f.getDepthInformation(Ie[0]);F&&F.isValid&&F.texture&&v.init(F,r.renderState)}if(be&&be.includes("camera-access")&&w){e.state.unbindTexture(),f=i.getBinding();for(let F=0;F<Ie.length;F++){const At=Ie[F].camera;if(At){let st=u[At];st||(st=new V1,u[At]=st);const Ve=f.getCameraImage(At);st.sourceTexture=Ve}}}}for(let Ie=0;Ie<R.length;Ie++){const et=P[Ie],be=R[Ie];et!==null&&be!==void 0&&be.update(et,he,c||o)}ct&&ct(B,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),y=null}const oe=new q1;oe.setAnimationLoop(Pe),this.setAnimationLoop=function(B){ct=B},this.dispose=function(){}}}const ms=new Hi,tA=new Jt;function nA(t,e){function n(v,u){v.matrixAutoUpdate===!0&&v.updateMatrix(),u.value.copy(v.matrix)}function i(v,u){u.color.getRGB(v.fogColor.value,k1(t)),u.isFog?(v.fogNear.value=u.near,v.fogFar.value=u.far):u.isFogExp2&&(v.fogDensity.value=u.density)}function r(v,u,g,x,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(v,u):u.isMeshToonMaterial?(s(v,u),f(v,u)):u.isMeshPhongMaterial?(s(v,u),d(v,u)):u.isMeshStandardMaterial?(s(v,u),h(v,u),u.isMeshPhysicalMaterial&&p(v,u,M)):u.isMeshMatcapMaterial?(s(v,u),y(v,u)):u.isMeshDepthMaterial?s(v,u):u.isMeshDistanceMaterial?(s(v,u),w(v,u)):u.isMeshNormalMaterial?s(v,u):u.isLineBasicMaterial?(o(v,u),u.isLineDashedMaterial&&a(v,u)):u.isPointsMaterial?l(v,u,g,x):u.isSpriteMaterial?c(v,u):u.isShadowMaterial?(v.color.value.copy(u.color),v.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(v,u){v.opacity.value=u.opacity,u.color&&v.diffuse.value.copy(u.color),u.emissive&&v.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.bumpMap&&(v.bumpMap.value=u.bumpMap,n(u.bumpMap,v.bumpMapTransform),v.bumpScale.value=u.bumpScale,u.side===li&&(v.bumpScale.value*=-1)),u.normalMap&&(v.normalMap.value=u.normalMap,n(u.normalMap,v.normalMapTransform),v.normalScale.value.copy(u.normalScale),u.side===li&&v.normalScale.value.negate()),u.displacementMap&&(v.displacementMap.value=u.displacementMap,n(u.displacementMap,v.displacementMapTransform),v.displacementScale.value=u.displacementScale,v.displacementBias.value=u.displacementBias),u.emissiveMap&&(v.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,v.emissiveMapTransform)),u.specularMap&&(v.specularMap.value=u.specularMap,n(u.specularMap,v.specularMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest);const g=e.get(u),x=g.envMap,M=g.envMapRotation;x&&(v.envMap.value=x,ms.copy(M),ms.x*=-1,ms.y*=-1,ms.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),v.envMapRotation.value.setFromMatrix4(tA.makeRotationFromEuler(ms)),v.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=u.reflectivity,v.ior.value=u.ior,v.refractionRatio.value=u.refractionRatio),u.lightMap&&(v.lightMap.value=u.lightMap,v.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,v.lightMapTransform)),u.aoMap&&(v.aoMap.value=u.aoMap,v.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,v.aoMapTransform))}function o(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform))}function a(v,u){v.dashSize.value=u.dashSize,v.totalSize.value=u.dashSize+u.gapSize,v.scale.value=u.scale}function l(v,u,g,x){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.size.value=u.size*g,v.scale.value=x*.5,u.map&&(v.map.value=u.map,n(u.map,v.uvTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function c(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.rotation.value=u.rotation,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function d(v,u){v.specular.value.copy(u.specular),v.shininess.value=Math.max(u.shininess,1e-4)}function f(v,u){u.gradientMap&&(v.gradientMap.value=u.gradientMap)}function h(v,u){v.metalness.value=u.metalness,u.metalnessMap&&(v.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,v.metalnessMapTransform)),v.roughness.value=u.roughness,u.roughnessMap&&(v.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,v.roughnessMapTransform)),u.envMap&&(v.envMapIntensity.value=u.envMapIntensity)}function p(v,u,g){v.ior.value=u.ior,u.sheen>0&&(v.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),v.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(v.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,v.sheenColorMapTransform)),u.sheenRoughnessMap&&(v.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,v.sheenRoughnessMapTransform))),u.clearcoat>0&&(v.clearcoat.value=u.clearcoat,v.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(v.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,v.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(v.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===li&&v.clearcoatNormalScale.value.negate())),u.dispersion>0&&(v.dispersion.value=u.dispersion),u.iridescence>0&&(v.iridescence.value=u.iridescence,v.iridescenceIOR.value=u.iridescenceIOR,v.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(v.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,v.iridescenceMapTransform)),u.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),u.transmission>0&&(v.transmission.value=u.transmission,v.transmissionSamplerMap.value=g.texture,v.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(v.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,v.transmissionMapTransform)),v.thickness.value=u.thickness,u.thicknessMap&&(v.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=u.attenuationDistance,v.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(v.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(v.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=u.specularIntensity,v.specularColor.value.copy(u.specularColor),u.specularColorMap&&(v.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,v.specularColorMapTransform)),u.specularIntensityMap&&(v.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,u){u.matcap&&(v.matcap.value=u.matcap)}function w(v,u){const g=e.get(u).light;v.referencePosition.value.setFromMatrixPosition(g.matrixWorld),v.nearDistance.value=g.shadow.camera.near,v.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const M=x.program;i.uniformBlockBinding(g,M)}function c(g,x){let M=r[g.id];M===void 0&&(y(g),M=d(g),r[g.id]=M,g.addEventListener("dispose",v));const R=x.program;i.updateUBOMapping(g,R);const P=e.render.frame;s[g.id]!==P&&(h(g),s[g.id]=P)}function d(g){const x=f();g.__bindingPointIndex=x;const M=t.createBuffer(),R=g.__size,P=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],M=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let P=0,L=M.length;P<L;P++){const I=Array.isArray(M[P])?M[P]:[M[P]];for(let E=0,S=I.length;E<S;E++){const N=I[E];if(p(N,P,E,R)===!0){const H=N.__offset,Q=Array.isArray(N.value)?N.value:[N.value];let se=0;for(let le=0;le<Q.length;le++){const V=Q[le],Y=w(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,H+se,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,se),se+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,M,R){const P=g.value,L=x+"_"+M;if(R[L]===void 0)return typeof P=="number"||typeof P=="boolean"?R[L]=P:R[L]=P.clone(),!0;{const I=R[L];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return R[L]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function y(g){const x=g.uniforms;let M=0;const R=16;for(let L=0,I=x.length;L<I;L++){const E=Array.isArray(x[L])?x[L]:[x[L]];for(let S=0,N=E.length;S<N;S++){const H=E[S],Q=Array.isArray(H.value)?H.value:[H.value];for(let se=0,le=Q.length;se<le;se++){const V=Q[se],Y=w(V),U=M%R,ee=U%Y.boundary,ie=U+ee;M+=ee,ie!==0&&R-ie<Y.storage&&(M+=R-ie),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=Y.storage}}}const P=M%R;return P>0&&(M+=R-P),g.__size=M,g.__cache={},this}function w(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function v(g){const x=g.target;x.removeEventListener("dispose",v);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class rA{constructor(e={}){const{canvas:n=ES(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const y=new Uint32Array(4),w=new Int32Array(4);let v=null,u=null;const g=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let R=!1;this._outputColorSpace=jn;let P=0,L=0,I=null,E=-1,S=null;const N=new Gt,H=new Gt;let Q=null;const se=new xt(0);let le=0,V=n.width,Y=n.height,U=1,ee=null,ie=null;const Ee=new Gt(0,0,V,Y),Fe=new Gt(0,0,V,Y);let ct=!1;const Pe=new Gp;let oe=!1,B=!1;const he=new Jt,Ie=new z,et=new Gt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function cn(){return I===null?U:1}let F=i;function At(b,q){return n.getContext(b,q)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pp}`),n.addEventListener("webglcontextlost",Ce,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",ye,!1),F===null){const q="webgl2";if(F=At(q,b),F===null)throw At(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let st,Ve,O,Re,ae,ce,Ke,tt,D,T,$,de,ge,ue,Ne,_e,Ge,We,xe,Te,nt,je,Le,lt;function W(){st=new pT(F),st.init(),je=new K3(F,st),Ve=new aT(F,st,e,je),O=new q3(F,st),Ve.reversedDepthBuffer&&h&&O.buffers.depth.setReversed(!0),Re=new vT(F),ae=new U3,ce=new $3(F,st,O,ae,Ve,je,Re),Ke=new cT(M),tt=new hT(M),D=new w2(F),Le=new sT(F,D),T=new mT(F,D,Re,Le),$=new xT(F,T,D,Re),xe=new _T(F,Ve,ce),_e=new lT(ae),de=new N3(M,Ke,tt,st,Ve,Le,_e),ge=new nA(M,ae),ue=new O3,Ne=new G3(st),We=new rT(M,Ke,tt,O,$,p,l),Ge=new j3(M,$,Ve),lt=new iA(F,Re,Ve,O),Te=new oT(F,st,Re),nt=new gT(F,st,Re),Re.programs=de.programs,M.capabilities=Ve,M.extensions=st,M.properties=ae,M.renderLists=ue,M.shadowMap=Ge,M.state=O,M.info=Re}W();const Ae=new eA(M,F);this.xr=Ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=st.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=st.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize(V,Y,!1))},this.getSize=function(b){return b.set(V,Y)},this.setSize=function(b,q,ne=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,Y=q,n.width=Math.floor(b*U),n.height=Math.floor(q*U),ne===!0&&(n.style.width=b+"px",n.style.height=q+"px"),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(V*U,Y*U).floor()},this.setDrawingBufferSize=function(b,q,ne){V=b,Y=q,U=ne,n.width=Math.floor(b*ne),n.height=Math.floor(q*ne),this.setViewport(0,0,b,q)},this.getCurrentViewport=function(b){return b.copy(N)},this.getViewport=function(b){return b.copy(Ee)},this.setViewport=function(b,q,ne,re){b.isVector4?Ee.set(b.x,b.y,b.z,b.w):Ee.set(b,q,ne,re),O.viewport(N.copy(Ee).multiplyScalar(U).round())},this.getScissor=function(b){return b.copy(Fe)},this.setScissor=function(b,q,ne,re){b.isVector4?Fe.set(b.x,b.y,b.z,b.w):Fe.set(b,q,ne,re),O.scissor(H.copy(Fe).multiplyScalar(U).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(b){O.setScissorTest(ct=b)},this.setOpaqueSort=function(b){ee=b},this.setTransparentSort=function(b){ie=b},this.getClearColor=function(b){return b.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,ne=!0){let re=0;if(b){let X=!1;if(I!==null){const we=I.texture.format;X=we===Op||we===Fp||we===Up}if(X){const we=I.texture.type,De=we===Ji||we===Us||we===nl||we===il||we===Ip||we===Np,Be=We.getClearColor(),Oe=We.getClearAlpha(),qe=Be.r,rt=Be.g,Je=Be.b;De?(y[0]=qe,y[1]=rt,y[2]=Je,y[3]=Oe,F.clearBufferuiv(F.COLOR,0,y)):(w[0]=qe,w[1]=rt,w[2]=Je,w[3]=Oe,F.clearBufferiv(F.COLOR,0,w))}else re|=F.COLOR_BUFFER_BIT}q&&(re|=F.DEPTH_BUFFER_BIT),ne&&(re|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),We.dispose(),ue.dispose(),Ne.dispose(),ae.dispose(),Ke.dispose(),tt.dispose(),$.dispose(),Le.dispose(),lt.dispose(),de.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Hn),Ae.removeEventListener("sessionend",Jo),bi.stop()};function Ce(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=Re.autoReset,q=Ge.enabled,ne=Ge.autoUpdate,re=Ge.needsUpdate,X=Ge.type;W(),Re.autoReset=b,Ge.enabled=q,Ge.autoUpdate=ne,Ge.needsUpdate=re,Ge.type=X}function ye(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pe(b){const q=b.target;q.removeEventListener("dispose",pe),Xe(q)}function Xe(b){ot(b),ae.remove(b)}function ot(b){const q=ae.get(b).programs;q!==void 0&&(q.forEach(function(ne){de.releaseProgram(ne)}),b.isShaderMaterial&&de.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,ne,re,X,we){q===null&&(q=be);const De=X.isMesh&&X.matrixWorld.determinant()<0,Be=vl(b,q,ne,re,X);O.setMaterial(re,De);let Oe=ne.index,qe=1;if(re.wireframe===!0){if(Oe=T.getWireframeAttribute(ne),Oe===void 0)return;qe=2}const rt=ne.drawRange,Je=ne.attributes.position;let ft=rt.start*qe,It=(rt.start+rt.count)*qe;we!==null&&(ft=Math.max(ft,we.start*qe),It=Math.min(It,(we.start+we.count)*qe)),Oe!==null?(ft=Math.max(ft,0),It=Math.min(It,Oe.count)):Je!=null&&(ft=Math.max(ft,0),It=Math.min(It,Je.count));const qt=It-ft;if(qt<0||qt===1/0)return;Le.setup(X,re,Be,ne,Oe);let bt,Nt=Te;if(Oe!==null&&(bt=D.get(Oe),Nt=nt,Nt.setIndex(bt)),X.isMesh)re.wireframe===!0?(O.setLineWidth(re.wireframeLinewidth*cn()),Nt.setMode(F.LINES)):Nt.setMode(F.TRIANGLES);else if(X.isLine){let Ze=re.linewidth;Ze===void 0&&(Ze=1),O.setLineWidth(Ze*cn()),X.isLineSegments?Nt.setMode(F.LINES):X.isLineLoop?Nt.setMode(F.LINE_LOOP):Nt.setMode(F.LINE_STRIP)}else X.isPoints?Nt.setMode(F.POINTS):X.isSprite&&Nt.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ol("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Nt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ze=X._multiDrawStarts,kt=X._multiDrawCounts,gt=X._multiDrawCount,Nn=Oe?D.get(Oe).bytesPerElement:1,Mr=ae.get(re).currentProgram.getUniforms();for(let Vn=0;Vn<gt;Vn++)Mr.setValue(F,"_gl_DrawID",Vn),Nt.render(Ze[Vn]/Nn,kt[Vn])}else if(X.isInstancedMesh)Nt.renderInstances(ft,qt,X.count);else if(ne.isInstancedBufferGeometry){const Ze=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,kt=Math.min(ne.instanceCount,Ze);Nt.renderInstances(ft,qt,kt)}else Nt.render(ft,qt)};function Ft(b,q,ne){b.transparent===!0&&b.side===Yn&&b.forceSinglePass===!1?(b.side=li,b.needsUpdate=!0,Zn(b,q,ne),b.side=Qr,b.needsUpdate=!0,Zn(b,q,ne),b.side=Yn):Zn(b,q,ne)}this.compile=function(b,q,ne=null){ne===null&&(ne=b),u=Ne.get(ne),u.init(q),x.push(u),ne.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),b!==ne&&b.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),u.setupLights();const re=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const we=X.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){const Be=we[De];Ft(Be,ne,X),re.add(Be)}else Ft(we,ne,X),re.add(we)}),u=x.pop(),re},this.compileAsync=function(b,q,ne=null){const re=this.compile(b,q,ne);return new Promise(X=>{function we(){if(re.forEach(function(De){ae.get(De).currentProgram.isReady()&&re.delete(De)}),re.size===0){X(b);return}setTimeout(we,10)}st.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let vt=null;function on(b){vt&&vt(b)}function Hn(){bi.stop()}function Jo(){bi.start()}const bi=new q1;bi.setAnimationLoop(on),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(b){vt=b,Ae.setAnimationLoop(b),b===null?bi.stop():bi.start()},Ae.addEventListener("sessionstart",Hn),Ae.addEventListener("sessionend",Jo),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(q),q=Ae.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,q,I),u=Ne.get(b,x.length),u.init(q),x.push(u),he.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Pe.setFromProjectionMatrix(he,Yi,q.reversedDepth),B=this.localClippingEnabled,oe=_e.init(this.clippingPlanes,B),v=ue.get(b,g.length),v.init(),g.push(v),Ae.enabled===!0&&Ae.isPresenting===!0){const we=M.xr.getDepthSensingMesh();we!==null&&Bs(we,q,-1/0,M.sortObjects)}Bs(b,q,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(ee,ie),mt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,mt&&We.addToRenderList(v,b),this.info.render.frame++,oe===!0&&_e.beginShadows();const ne=u.state.shadowsArray;Ge.render(ne,b,q),oe===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=v.opaque,X=v.transmissive;if(u.setupLights(),q.isArrayCamera){const we=q.cameras;if(X.length>0)for(let De=0,Be=we.length;De<Be;De++){const Oe=we[De];Hs(re,X,b,Oe)}mt&&We.render(b);for(let De=0,Be=we.length;De<Be;De++){const Oe=we[De];Zo(v,b,Oe,Oe.viewport)}}else X.length>0&&Hs(re,X,b,q),mt&&We.render(b),Zo(v,b,q);I!==null&&L===0&&(ce.updateMultisampleRenderTarget(I),ce.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(M,b,q),Le.resetDefaultState(),E=-1,S=null,x.pop(),x.length>0?(u=x[x.length-1],oe===!0&&_e.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function Bs(b,q,ne,re){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)ne=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Pe.intersectsSprite(b)){re&&et.setFromMatrixPosition(b.matrixWorld).applyMatrix4(he);const De=$.update(b),Be=b.material;Be.visible&&v.push(b,De,Be,ne,et.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Pe.intersectsObject(b))){const De=$.update(b),Be=b.material;if(re&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),et.copy(b.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),et.copy(De.boundingSphere.center)),et.applyMatrix4(b.matrixWorld).applyMatrix4(he)),Array.isArray(Be)){const Oe=De.groups;for(let qe=0,rt=Oe.length;qe<rt;qe++){const Je=Oe[qe],ft=Be[Je.materialIndex];ft&&ft.visible&&v.push(b,De,ft,ne,et.z,Je)}}else Be.visible&&v.push(b,De,Be,ne,et.z,null)}}const we=b.children;for(let De=0,Be=we.length;De<Be;De++)Bs(we[De],q,ne,re)}function Zo(b,q,ne,re){const X=b.opaque,we=b.transmissive,De=b.transparent;u.setupLightsView(ne),oe===!0&&_e.setGlobalState(M.clippingPlanes,ne),re&&O.viewport(N.copy(re)),X.length>0&&Vs(X,q,ne),we.length>0&&Vs(we,q,ne),De.length>0&&Vs(De,q,ne),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Hs(b,q,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[re.id]===void 0&&(u.state.transmissionRenderTarget[re.id]=new Fs(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?fl:Ji,minFilter:bs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const we=u.state.transmissionRenderTarget[re.id],De=re.viewport||N;we.setSize(De.z*M.transmissionResolutionScale,De.w*M.transmissionResolutionScale);const Be=M.getRenderTarget(),Oe=M.getActiveCubeFace(),qe=M.getActiveMipmapLevel();M.setRenderTarget(we),M.getClearColor(se),le=M.getClearAlpha(),le<1&&M.setClearColor(16777215,.5),M.clear(),mt&&We.render(ne);const rt=M.toneMapping;M.toneMapping=Kr;const Je=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),u.setupLightsView(re),oe===!0&&_e.setGlobalState(M.clippingPlanes,re),Vs(b,ne,re),ce.updateMultisampleRenderTarget(we),ce.updateRenderTargetMipmap(we),st.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let It=0,qt=q.length;It<qt;It++){const bt=q[It],Nt=bt.object,Ze=bt.geometry,kt=bt.material,gt=bt.group;if(kt.side===Yn&&Nt.layers.test(re.layers)){const Nn=kt.side;kt.side=li,kt.needsUpdate=!0,Gs(Nt,ne,re,Ze,kt,gt),kt.side=Nn,kt.needsUpdate=!0,ft=!0}}ft===!0&&(ce.updateMultisampleRenderTarget(we),ce.updateRenderTargetMipmap(we))}M.setRenderTarget(Be,Oe,qe),M.setClearColor(se,le),Je!==void 0&&(re.viewport=Je),M.toneMapping=rt}function Vs(b,q,ne){const re=q.isScene===!0?q.overrideMaterial:null;for(let X=0,we=b.length;X<we;X++){const De=b[X],Be=De.object,Oe=De.geometry,qe=De.group;let rt=De.material;rt.allowOverride===!0&&re!==null&&(rt=re),Be.layers.test(ne.layers)&&Gs(Be,q,ne,Oe,rt,qe)}}function Gs(b,q,ne,re,X,we){b.onBeforeRender(M,q,ne,re,X,we),b.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(M,q,ne,re,b,we),X.transparent===!0&&X.side===Yn&&X.forceSinglePass===!1?(X.side=li,X.needsUpdate=!0,M.renderBufferDirect(ne,q,re,X,b,we),X.side=Qr,X.needsUpdate=!0,M.renderBufferDirect(ne,q,re,X,b,we),X.side=Yn):M.renderBufferDirect(ne,q,re,X,b,we),b.onAfterRender(M,q,ne,re,X,we)}function Zn(b,q,ne){q.isScene!==!0&&(q=be);const re=ae.get(b),X=u.state.lights,we=u.state.shadowsArray,De=X.state.version,Be=de.getParameters(b,X.state,we,q,ne),Oe=de.getProgramCacheKey(Be);let qe=re.programs;re.environment=b.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(b.isMeshStandardMaterial?tt:Ke).get(b.envMap||re.environment),re.envMapRotation=re.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,qe===void 0&&(b.addEventListener("dispose",pe),qe=new Map,re.programs=qe);let rt=qe.get(Oe);if(rt!==void 0){if(re.currentProgram===rt&&re.lightsStateVersion===De)return Qo(b,Be),rt}else Be.uniforms=de.getUniforms(b),b.onBeforeCompile(Be,M),rt=de.acquireProgram(Be,Oe),qe.set(Oe,rt),re.uniforms=Be.uniforms;const Je=re.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Je.clippingPlanes=_e.uniform),Qo(b,Be),re.needsLights=yr(b),re.lightsStateVersion=De,re.needsLights&&(Je.ambientLightColor.value=X.state.ambient,Je.lightProbe.value=X.state.probe,Je.directionalLights.value=X.state.directional,Je.directionalLightShadows.value=X.state.directionalShadow,Je.spotLights.value=X.state.spot,Je.spotLightShadows.value=X.state.spotShadow,Je.rectAreaLights.value=X.state.rectArea,Je.ltc_1.value=X.state.rectAreaLTC1,Je.ltc_2.value=X.state.rectAreaLTC2,Je.pointLights.value=X.state.point,Je.pointLightShadows.value=X.state.pointShadow,Je.hemisphereLights.value=X.state.hemi,Je.directionalShadowMap.value=X.state.directionalShadowMap,Je.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Je.spotShadowMap.value=X.state.spotShadowMap,Je.spotLightMatrix.value=X.state.spotLightMatrix,Je.spotLightMap.value=X.state.spotLightMap,Je.pointShadowMap.value=X.state.pointShadowMap,Je.pointShadowMatrix.value=X.state.pointShadowMatrix),re.currentProgram=rt,re.uniformsList=null,rt}function gl(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Ac.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Qo(b,q){const ne=ae.get(b);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function vl(b,q,ne,re,X){q.isScene!==!0&&(q=be),ce.resetTextureUnits();const we=q.fog,De=re.isMeshStandardMaterial?q.environment:null,Be=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Wo,Oe=(re.isMeshStandardMaterial?tt:Ke).get(re.envMap||De),qe=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,rt=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Je=!!ne.morphAttributes.position,ft=!!ne.morphAttributes.normal,It=!!ne.morphAttributes.color;let qt=Kr;re.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(qt=M.toneMapping);const bt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Nt=bt!==void 0?bt.length:0,Ze=ae.get(re),kt=u.state.lights;if(oe===!0&&(B===!0||b!==S)){const Bt=b===S&&re.id===E;_e.setState(re,b,Bt)}let gt=!1;re.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==kt.state.version||Ze.outputColorSpace!==Be||X.isBatchedMesh&&Ze.batching===!1||!X.isBatchedMesh&&Ze.batching===!0||X.isBatchedMesh&&Ze.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ze.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ze.instancing===!1||!X.isInstancedMesh&&Ze.instancing===!0||X.isSkinnedMesh&&Ze.skinning===!1||!X.isSkinnedMesh&&Ze.skinning===!0||X.isInstancedMesh&&Ze.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ze.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ze.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ze.instancingMorph===!1&&X.morphTexture!==null||Ze.envMap!==Oe||re.fog===!0&&Ze.fog!==we||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==_e.numPlanes||Ze.numIntersection!==_e.numIntersection)||Ze.vertexAlphas!==qe||Ze.vertexTangents!==rt||Ze.morphTargets!==Je||Ze.morphNormals!==ft||Ze.morphColors!==It||Ze.toneMapping!==qt||Ze.morphTargetsCount!==Nt)&&(gt=!0):(gt=!0,Ze.__version=re.version);let Nn=Ze.currentProgram;gt===!0&&(Nn=Zn(re,q,X));let Mr=!1,Vn=!1,rs=!1;const zt=Nn.getUniforms(),Qn=Ze.uniforms;if(O.useProgram(Nn.program)&&(Mr=!0,Vn=!0,rs=!0),re.id!==E&&(E=re.id,Vn=!0),Mr||S!==b){O.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),zt.setValue(F,"projectionMatrix",b.projectionMatrix),zt.setValue(F,"viewMatrix",b.matrixWorldInverse);const Wt=zt.map.cameraPosition;Wt!==void 0&&Wt.setValue(F,Ie.setFromMatrixPosition(b.matrixWorld)),Ve.logarithmicDepthBuffer&&zt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&zt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Vn=!0,rs=!0)}if(X.isSkinnedMesh){zt.setOptional(F,X,"bindMatrix"),zt.setOptional(F,X,"bindMatrixInverse");const Bt=X.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),zt.setValue(F,"boneTexture",Bt.boneTexture,ce))}X.isBatchedMesh&&(zt.setOptional(F,X,"batchingTexture"),zt.setValue(F,"batchingTexture",X._matricesTexture,ce),zt.setOptional(F,X,"batchingIdTexture"),zt.setValue(F,"batchingIdTexture",X._indirectTexture,ce),zt.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&zt.setValue(F,"batchingColorTexture",X._colorsTexture,ce));const ei=ne.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&xe.update(X,ne,Nn),(Vn||Ze.receiveShadow!==X.receiveShadow)&&(Ze.receiveShadow=X.receiveShadow,zt.setValue(F,"receiveShadow",X.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Qn.envMap.value=Oe,Qn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&q.environment!==null&&(Qn.envMapIntensity.value=q.environmentIntensity),Vn&&(zt.setValue(F,"toneMappingExposure",M.toneMappingExposure),Ze.needsLights&&Ws(Qn,rs),we&&re.fog===!0&&ge.refreshFogUniforms(Qn,we),ge.refreshMaterialUniforms(Qn,re,U,Y,u.state.transmissionRenderTarget[b.id]),Ac.upload(F,gl(Ze),Qn,ce)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Ac.upload(F,gl(Ze),Qn,ce),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&zt.setValue(F,"center",X.center),zt.setValue(F,"modelViewMatrix",X.modelViewMatrix),zt.setValue(F,"normalMatrix",X.normalMatrix),zt.setValue(F,"modelMatrix",X.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Bt=re.uniformsGroups;for(let Wt=0,Xs=Bt.length;Wt<Xs;Wt++){const Zi=Bt[Wt];lt.update(Zi,Nn),lt.bind(Zi,Nn)}}return Nn}function Ws(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function yr(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,q,ne){const re=ae.get(b);re.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ae.get(b.texture).__webglTexture=q,ae.get(b.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ne,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const ne=ae.get(b);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0};const _l=F.createFramebuffer();this.setRenderTarget=function(b,q=0,ne=0){I=b,P=q,L=ne;let re=!0,X=null,we=!1,De=!1;if(b){const Oe=ae.get(b);if(Oe.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(F.FRAMEBUFFER,null),re=!1;else if(Oe.__webglFramebuffer===void 0)ce.setupRenderTarget(b);else if(Oe.__hasExternalTextures)ce.rebindTextures(b,ae.get(b.texture).__webglTexture,ae.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Je=b.depthTexture;if(Oe.__boundDepthTexture!==Je){if(Je!==null&&ae.has(Je)&&(b.width!==Je.image.width||b.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(b)}}const qe=b.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);const rt=ae.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(rt[q])?X=rt[q][ne]:X=rt[q],we=!0):b.samples>0&&ce.useMultisampledRTT(b)===!1?X=ae.get(b).__webglMultisampledFramebuffer:Array.isArray(rt)?X=rt[ne]:X=rt,N.copy(b.viewport),H.copy(b.scissor),Q=b.scissorTest}else N.copy(Ee).multiplyScalar(U).floor(),H.copy(Fe).multiplyScalar(U).floor(),Q=ct;if(ne!==0&&(X=_l),O.bindFramebuffer(F.FRAMEBUFFER,X)&&re&&O.drawBuffers(b,X),O.viewport(N),O.scissor(H),O.setScissorTest(Q),we){const Oe=ae.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,ne)}else if(De){const Oe=q;for(let qe=0;qe<b.textures.length;qe++){const rt=ae.get(b.textures[qe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+qe,rt.__webglTexture,ne,Oe)}}else if(b!==null&&ne!==0){const Oe=ae.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Oe.__webglTexture,ne)}E=-1},this.readRenderTargetPixels=function(b,q,ne,re,X,we,De,Be=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){O.bindFramebuffer(F.FRAMEBUFFER,Oe);try{const qe=b.textures[Be],rt=qe.format,Je=qe.type;if(!Ve.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-re&&ne>=0&&ne<=b.height-X&&(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Be),F.readPixels(q,ne,re,X,je.convert(rt),je.convert(Je),we))}finally{const qe=I!==null?ae.get(I).__webglFramebuffer:null;O.bindFramebuffer(F.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(b,q,ne,re,X,we,De,Be=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe)if(q>=0&&q<=b.width-re&&ne>=0&&ne<=b.height-X){O.bindFramebuffer(F.FRAMEBUFFER,Oe);const qe=b.textures[Be],rt=qe.format,Je=qe.type;if(!Ve.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ft),F.bufferData(F.PIXEL_PACK_BUFFER,we.byteLength,F.STREAM_READ),b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Be),F.readPixels(q,ne,re,X,je.convert(rt),je.convert(Je),0);const It=I!==null?ae.get(I).__webglFramebuffer:null;O.bindFramebuffer(F.FRAMEBUFFER,It);const qt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await TS(F,qt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ft),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,we),F.deleteBuffer(ft),F.deleteSync(qt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,ne=0){const re=Math.pow(2,-ne),X=Math.floor(b.image.width*re),we=Math.floor(b.image.height*re),De=q!==null?q.x:0,Be=q!==null?q.y:0;ce.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,ne,0,0,De,Be,X,we),O.unbindTexture()};const xi=F.createFramebuffer(),ea=F.createFramebuffer();this.copyTextureToTexture=function(b,q,ne=null,re=null,X=0,we=null){we===null&&(X!==0?(ol("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=X,X=0):we=0);let De,Be,Oe,qe,rt,Je,ft,It,qt;const bt=b.isCompressedTexture?b.mipmaps[we]:b.image;if(ne!==null)De=ne.max.x-ne.min.x,Be=ne.max.y-ne.min.y,Oe=ne.isBox3?ne.max.z-ne.min.z:1,qe=ne.min.x,rt=ne.min.y,Je=ne.isBox3?ne.min.z:0;else{const ei=Math.pow(2,-X);De=Math.floor(bt.width*ei),Be=Math.floor(bt.height*ei),b.isDataArrayTexture?Oe=bt.depth:b.isData3DTexture?Oe=Math.floor(bt.depth*ei):Oe=1,qe=0,rt=0,Je=0}re!==null?(ft=re.x,It=re.y,qt=re.z):(ft=0,It=0,qt=0);const Nt=je.convert(q.format),Ze=je.convert(q.type);let kt;q.isData3DTexture?(ce.setTexture3D(q,0),kt=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ce.setTexture2DArray(q,0),kt=F.TEXTURE_2D_ARRAY):(ce.setTexture2D(q,0),kt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const gt=F.getParameter(F.UNPACK_ROW_LENGTH),Nn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Mr=F.getParameter(F.UNPACK_SKIP_PIXELS),Vn=F.getParameter(F.UNPACK_SKIP_ROWS),rs=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,bt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,qe),F.pixelStorei(F.UNPACK_SKIP_ROWS,rt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Je);const zt=b.isDataArrayTexture||b.isData3DTexture,Qn=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const ei=ae.get(b),Bt=ae.get(q),Wt=ae.get(ei.__renderTarget),Xs=ae.get(Bt.__renderTarget);O.bindFramebuffer(F.READ_FRAMEBUFFER,Wt.__webglFramebuffer),O.bindFramebuffer(F.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let Zi=0;Zi<Oe;Zi++)zt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ae.get(b).__webglTexture,X,Je+Zi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ae.get(q).__webglTexture,we,qt+Zi)),F.blitFramebuffer(qe,rt,De,Be,ft,It,De,Be,F.DEPTH_BUFFER_BIT,F.NEAREST);O.bindFramebuffer(F.READ_FRAMEBUFFER,null),O.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||ae.has(b)){const ei=ae.get(b),Bt=ae.get(q);O.bindFramebuffer(F.READ_FRAMEBUFFER,xi),O.bindFramebuffer(F.DRAW_FRAMEBUFFER,ea);for(let Wt=0;Wt<Oe;Wt++)zt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ei.__webglTexture,X,Je+Wt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ei.__webglTexture,X),Qn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.__webglTexture,we,qt+Wt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,we),X!==0?F.blitFramebuffer(qe,rt,De,Be,ft,It,De,Be,F.COLOR_BUFFER_BIT,F.NEAREST):Qn?F.copyTexSubImage3D(kt,we,ft,It,qt+Wt,qe,rt,De,Be):F.copyTexSubImage2D(kt,we,ft,It,qe,rt,De,Be);O.bindFramebuffer(F.READ_FRAMEBUFFER,null),O.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Qn?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(kt,we,ft,It,qt,De,Be,Oe,Nt,Ze,bt.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(kt,we,ft,It,qt,De,Be,Oe,Nt,bt.data):F.texSubImage3D(kt,we,ft,It,qt,De,Be,Oe,Nt,Ze,bt):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,we,ft,It,De,Be,Nt,Ze,bt.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,we,ft,It,bt.width,bt.height,Nt,bt.data):F.texSubImage2D(F.TEXTURE_2D,we,ft,It,De,Be,Nt,Ze,bt);F.pixelStorei(F.UNPACK_ROW_LENGTH,gt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Nn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Mr),F.pixelStorei(F.UNPACK_SKIP_ROWS,Vn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,rs),we===0&&q.generateMipmaps&&F.generateMipmap(kt),O.unbindTexture()},this.initRenderTarget=function(b){ae.get(b).__webglFramebuffer===void 0&&ce.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ce.setTextureCube(b,0):b.isData3DTexture?ce.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ce.setTexture2DArray(b,0):ce.setTexture2D(b,0),O.unbindTexture()},this.resetState=function(){P=0,L=0,I=null,O.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}var ov;const Et=(ov=window.Telegram)==null?void 0:ov.WebApp,nv="/yggdrasil-tma/",cc=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],sA=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],iv={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},rv=()=>{try{const t={...iv,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...iv,watch:Date.now()}}},Ma=()=>new Date().toISOString().slice(0,10),oA=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",$d=[3,5,8,12,18,25,40],aA=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],lA=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],Kd=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],Sa={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},sv={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},Jd={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},Zd={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function Lr({name:t,className:e}){return G.jsx("img",{src:t.includes(".")?`${nv}img/${t}`:`${nv}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const cA=`
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
`,gs=(t,e=.9,n=0)=>new at({color:t,roughness:e,metalness:n}),fe=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function uA(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function dA(t){const e=new Ye,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=gs(i,.92),c=gs(s,.9),d=gs(o,.96),f=gs(r,.95),h=gs(a,.78),p=gs(2106150,.98),y=new Z(new Wn(.28,.24,5,8),d);y.position.y=.72,e.add(y);const w=new Z(new Wn(n?.37:.32,.56,6,10),c);w.position.y=1.15,e.add(w);const v=new Z(new Wn(n?.4:.34,.34,5,8),c);v.scale.z=.82,v.position.y=1.28,e.add(v);const u=new Z(new Dt(.36,.38,.09,12),d);u.position.y=.93,e.add(u);const g=new Z(new xn(.12,.12,.055),h);g.position.set(0,.93,.38),e.add(g);const x=new Z(new Dt(.13,.15,.18,10),l);x.position.y=1.63,e.add(x);const M=new Z(new Ct(.31,16,12),l);M.scale.set(.92,1.06,.92),M.position.y=1.91,e.add(M);const R=new Z(new Ct(.325,14,10),f);R.scale.set(.98,.72,.98),R.position.set(0,2.08,-.025),e.add(R);const P=new Z(new Wn(.18,.3,5,8),f);P.position.set(0,1.93,-.25),P.rotation.x=.15,e.add(P);const L=new Z(new Pn(.045,.13,5),l);L.rotation.x=Math.PI/2,L.position.set(0,1.92,.3),e.add(L);const I=new at({color:1513754,roughness:.55});for(const ee of[-.105,.105]){const ie=new Z(new Ct(.025,7,5),I);ie.position.set(ee,1.98,.285),e.add(ie)}if(n){const ee=new Z(new Ct(.19,10,7),f);ee.scale.set(.82,1,.72),ee.position.set(0,1.8,.24),e.add(ee)}else{const ee=new Z(new Wn(.055,.42,4,7),f);ee.position.set(-.27,1.78,-.08),ee.rotation.z=-.22,e.add(ee)}const E=ee=>{const ie=new Ye;ie.position.set(ee*(n?.43:.39),1.43,0),ie.rotation.z=ee*.07;const Ee=new Z(new Wn(.105,.42,5,7),c);Ee.position.y=-.23,ie.add(Ee);const Fe=new Ye;Fe.position.y=-.46,ie.add(Fe);const ct=new Z(new Wn(.085,.34,5,7),d);ct.position.y=-.2,Fe.add(ct);const Pe=new Z(new Ct(.105,9,7),l);return Pe.position.y=-.43,Fe.add(Pe),e.add(ie),{upper:ie,elbow:Fe}},S=E(-1),N=E(1),H=ee=>{const ie=new Ye;ie.position.set(ee*.15,.68,0);const Ee=new Z(new Wn(.12,.42,5,7),p);Ee.position.y=-.23,ie.add(Ee);const Fe=new Ye;Fe.position.y=-.48,ie.add(Fe);const ct=new Z(new Wn(.095,.4,5,7),p);ct.position.y=-.22,Fe.add(ct);const Pe=new Z(new Wn(.13,.24,5,7),d);return Pe.scale.z=1.25,Pe.position.set(0,-.47,.075),Fe.add(Pe),e.add(ie),ie},Q=H(-1),se=H(1),le=new Z(new Wn(.42,.1,5,8),d);le.scale.z=.72,le.position.y=1.48,e.add(le);const V=new Z(new xn(.58,.92,.075),gs(t.id==="berserk"?2821132:1582894,.98));V.position.set(0,1.05,-.28),V.rotation.x=-.035,e.add(V);const Y=new Ye;if(t.id==="berserk"||t.id==="dwarf"){const ee=new Z(new Dt(.035,.045,.72,7),d);ee.position.y=.36,Y.add(ee);const ie=new Z(new xn(.16,.34,.055),h);ie.position.set(0,.88,0),ie.rotation.z=t.id==="dwarf"?-.22:.22,Y.add(ie)}else{const ee=new Z(new Dt(.028,.04,1.1,7),d);ee.position.y=.52,Y.add(ee);const ie=new Z(new Pn(.075,.25,6),h);ie.position.y=1.18,Y.add(ie)}if(Y.position.set(.43,.32,.03),Y.rotation.z=-.12,e.add(Y),t.id==="viking"||t.id==="berserk"){const ee=new Z(new Dt(.3,.3,.1,16),d);ee.rotation.x=Math.PI/2,ee.position.set(0,1.12,-.37),e.add(ee);const ie=new Z(new Ct(.065,8,6),h);ie.position.set(0,1.12,-.43),e.add(ie)}const U=new Z(new Or(.62,24),new lr({color:0,transparent:!0,opacity:.32}));return U.rotation.x=-Math.PI/2,U.position.y=.02,e.add(U),e.userData.anim={armL:S,armR:N,legL:Q,legR:se,weapon:Y,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0},uA(e)}function fA({h:t,on:e,eventDone:n}){const i=Mt.useRef(null),r=Mt.useRef(null),s=Mt.useRef(null),o=Mt.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=Mt.useState(""),[c,d]=Mt.useState(!1),[f,h]=Mt.useState(!1),[p,y]=Mt.useState(!1),[w,v]=Mt.useState(!1),u=Mt.useRef({x:0,z:1}),g=Mt.useRef(!1),x=Mt.useRef(null);Mt.useEffect(()=>{const E=i.current;if(!E)return;const S=new KS;S.background=new xt(9414817),S.fog=new Vp(7307642,.0064);const N=new hi(54,1,.1,280);N.position.set(0,8.5,17);const H=new rA({antialias:!0,powerPreference:"high-performance"});H.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),H.shadowMap.enabled=!0,H.shadowMap.type=M1,H.outputColorSpace=jn,H.toneMapping=S1,H.toneMappingExposure=1.08,E.appendChild(H.domElement);const Q=new v2(14477797,2896685,1.22);S.add(Q);const se=new Cg(16770226,3.45);se.position.set(-42,58,34),se.castShadow=!0,se.shadow.mapSize.set(1024,1024),se.shadow.camera.left=-95,se.shadow.camera.right=95,se.shadow.camera.top=95,se.shadow.camera.bottom=-95,se.shadow.bias=-5e-4,S.add(se);const le=new Cg(10467501,.72);le.position.set(55,18,-60),S.add(le);const V=(_,A)=>{const m=Math.sin(_*.075)*.7+Math.cos(A*.062)*.55+Math.sin((_-A)*.045)*.35,C=Math.exp(-(_*_/850+(A+2)*(A+2)/1050)),j=Math.exp(-(_*_/150+(A-12)*(A-12)/2200));return m*(1-C*.88)-j*.18},Y=_=>{const A=document.createElement("canvas");A.width=A.height=512;const m=A.getContext("2d"),C=k=>Math.abs(Math.sin(k*12.9898)*43758.5453)%1;if(_==="ground"){m.fillStyle="#3f4d38",m.fillRect(0,0,512,512);for(let k=0;k<1800;k++){const K=C(k*1.17)*512,te=C(k*2.31)*512,ve=10+C(k*3.71)*28,J=C(k*4.13);m.fillStyle=J>.72?`rgba(96,108,63,${.08+C(k)*.12})`:`rgba(30,36,25,${.05+C(k)*.12})`,m.beginPath(),m.arc(K,te,ve,0,Math.PI*2),m.fill()}for(let k=0;k<650;k++){const K=C(k*7.1)*512,te=C(k*8.2)*512;m.strokeStyle=`rgba(118,126,78,${.16+C(k*2)*.16})`,m.lineWidth=1+C(k*4)*1.5,m.beginPath(),m.moveTo(K,te),m.lineTo(K+(C(k*5)-.5)*5,te-3-C(k*6)*5),m.stroke()}}else if(_==="wood"){m.fillStyle="#5a3d29",m.fillRect(0,0,512,512);for(let k=0;k<512;k+=22)m.fillStyle=`rgba(25,15,9,${.18+C(k)*.13})`,m.fillRect(0,k,512,3),m.strokeStyle=`rgba(154,111,69,${.08+C(k*2)*.08})`,m.lineWidth=2,m.beginPath(),m.moveTo(0,k+7),m.bezierCurveTo(150,k+2,340,k+13,512,k+5),m.stroke();for(let k=0;k<65;k++){const K=C(k*2.1)*512;m.fillStyle=`rgba(20,12,8,${.12+C(k*3)*.16})`,m.fillRect(K,0,2+C(k*4)*3,512)}}else if(_==="roof"){m.fillStyle="#252522",m.fillRect(0,0,512,512);for(let k=-30;k<550;k+=25){m.fillStyle=`rgba(105,94,77,${.12+C(k)*.08})`,m.fillRect(0,k,512,2),m.strokeStyle="rgba(12,12,11,.48)",m.lineWidth=3;for(let K=-40;K<560;K+=38)m.beginPath(),m.moveTo(K,k),m.lineTo(K-18,k+28),m.stroke()}for(let k=0;k<180;k++)m.fillStyle=`rgba(170,154,123,${.03+C(k)*.07})`,m.fillRect(C(k*2)*512,C(k*3)*512,2+C(k*4)*7,2)}else if(_==="bark"){m.fillStyle="#7b5a3f",m.fillRect(0,0,512,512);for(let k=0;k<95;k++){const K=C(k*2.1)*512,te=2+C(k*3.7)*7;m.fillStyle=`rgba(${24+C(k)*24},${16+C(k*4)*18},${10+C(k*5)*14},${.18+C(k*6)*.22})`,m.fillRect(K,0,te,512)}for(let k=0;k<80;k++){const K=C(k*7.1)*512,te=C(k*8.2)*512;m.strokeStyle=`rgba(126,91,60,${.07+C(k*2)*.09})`,m.lineWidth=1+C(k*3)*2,m.beginPath(),m.moveTo(K,te),m.lineTo(K+(C(k*4)-.5)*12,te+18+C(k*5)*45),m.stroke()}}else if(_==="foliage"){m.fillStyle="#536b4b",m.fillRect(0,0,512,512);for(let k=0;k<1900;k++){const K=C(k*1.17)*512,te=C(k*2.31)*512,ve=C(k*3.7),J=ve>.72?76:ve>.36?63:51,Me=ve>.72?104:ve>.36?87:70,me=ve>.72?59:ve>.36?49:40;m.fillStyle=`rgba(${J},${Me},${me},${.16+C(k*4)*.28})`,m.beginPath(),m.arc(K,te,1.5+C(k*5)*4.5,0,Math.PI*2),m.fill()}for(let k=0;k<260;k++){const K=C(k*9.1)*512,te=C(k*10.2)*512;m.strokeStyle=`rgba(18,31,22,${.08+C(k*3)*.12})`,m.lineWidth=1,m.beginPath(),m.moveTo(K,te),m.lineTo(K+(C(k*2)-.5)*10,te+(C(k*4)-.5)*10),m.stroke()}}else{m.fillStyle="#514333",m.fillRect(0,0,512,512);for(let k=0;k<1300;k++){const K=C(k*1.3)*512,te=C(k*2.7)*512;m.fillStyle=`rgba(${45+C(k*3)*38},${35+C(k*4)*28},${23+C(k*5)*20},${.08+C(k*6)*.18})`,m.fillRect(K,te,2+C(k*7)*7,1+C(k*8)*4)}}const j=new wg(A);return j.wrapS=j.wrapT=Do,j.colorSpace=jn,j.anisotropy=4,j},U=Y("ground");U.repeat.set(5,6);const ee=Y("bark");ee.wrapS=ee.wrapT=Do,ee.repeat.set(1.2,1.8);const ie=Y("foliage");ie.wrapS=ie.wrapT=Do,ie.repeat.set(1.35,1.35);const Ee=new Br(190,190,62,62),Fe=Ee.attributes.position;for(let _=0;_<Fe.count;_++){const A=Fe.getX(_),m=-Fe.getY(_);Fe.setZ(_,V(A,m))}Ee.rotateX(-Math.PI/2),Ee.computeVertexNormals();const ct=new Z(Ee,new lo({map:U}));ct.receiveShadow=!0,S.add(ct);const Pe=(_,A,m)=>(A&&(_.userData={id:A,label:m||A}),_.traverse(C=>{C.isMesh&&(C.castShadow=!0,C.receiveShadow=!0)}),S.add(_),A&&be.push(_),_),oe=(_,A=.9,m=0)=>new at({color:_,roughness:A,metalness:m}),B=(_,A,m,C,j=.9)=>new Z(new xn(_,A,m),oe(C,j)),he=(_,A,m,C=10,j=.9)=>new Z(new Dt(_,_,A,C),oe(m,j)),Ie=(_,A,m)=>{const C=he(A,_,m,10,.96);return C.rotation.z=Math.PI/2,C},et=(_,A,m)=>{const C=new Ye,j=_*.62,k=.61,K=new at({map:We,color:m,roughness:.96,side:Yn}),te=new Z(new xn(j,.18,A),K),ve=te.clone();return te.rotation.z=k,ve.rotation.z=-k,te.position.x=-_*.205,ve.position.x=_*.205,C.add(te,ve),C},be=[],mt=[],cn=[],F=[],At=[],st=.62,Ve=(_,A,m,C,j=0,k=.12)=>At.push({kind:"rect",x:_,z:A,w:m+k*2,d:C+k*2,rot:j}),O=(_,A,m,C=.12)=>At.push({kind:"circle",x:_,z:A,r:m+C}),Re=(_,A,m,C,j,k=.12)=>At.push({kind:"segment",x1:_,z1:A,x2:m,z2:C,r:j+k}),ae=(_,A,m)=>{if(m.kind==="circle")return Math.hypot(_-m.x,A-m.z)<m.r+st;if(m.kind==="rect"){const J=Math.cos(m.rot),Me=Math.sin(m.rot),me=_-m.x,Qe=A-m.z,it=J*me-Me*Qe,ht=Me*me+J*Qe,St=Math.max(-m.w/2,Math.min(m.w/2,it)),un=Math.max(-m.d/2,Math.min(m.d/2,ht));return Math.hypot(it-St,ht-un)<st}const C=m.x2-m.x1,j=m.z2-m.z1,k=C*C+j*j,K=k>0?Math.max(0,Math.min(1,((_-m.x1)*C+(A-m.z1)*j)/k)):0,te=m.x1+C*K,ve=m.z1+j*K;return Math.hypot(_-te,A-ve)<m.r+st},ce=(_,A)=>g.current?_<En-2.72||_>En+2.72||A<vn-2.05||A>vn+2.3:At.some(m=>ae(_,A,m)),Ke=(_,A,m)=>{if(g.current){const k=Math.max(En-2.55,Math.min(En+2.55,A)),K=Math.max(vn-1.92,Math.min(vn+2.55,m));_.x=k,_.z=K;return}const C=Math.max(-88,Math.min(88,A)),j=Math.max(-89,Math.min(89,m));if(!ce(C,j)){_.x=C,_.z=j;return}ce(C,_.z)||(_.x=C),ce(_.x,j)||(_.z=j)},tt=oe(3425343,1);for(let _=0;_<22;_++){const A=new Ye,m=-105+_*10,C=8+fe(_,7)*9,j=new Z(new Pn(C,18+fe(_,8)*16,7),tt);j.position.y=8,A.add(j),A.position.set(m,-1,-94+fe(_,9)*11),Pe(A)}const D=[];for(let _=0;_<=32;_++)D.push({z:-94+_*6,x:-57+Math.sin(_*.42)*4.2});const T=[],$=[],de=5.4;for(let _=0;_<D.length;_++){const A=D[_],m=D[Math.max(0,_-1)],C=D[Math.min(D.length-1,_+1)],j=C.x-m.x,k=C.z-m.z,K=Math.max(.001,Math.hypot(j,k)),te=-k/K,ve=j/K,J=V(A.x,A.z)+.055;for(const Me of[-1,1]){const me=de*Me;T.push(A.x+te*me,J+Math.sin(_*1.7+Me)*.035,A.z+ve*me)}if(_<D.length-1){const Me=_*2;$.push(Me,Me+1,Me+2,Me+1,Me+3,Me+2)}}const ge=new gn;ge.setAttribute("position",new wt(T,3)),ge.setIndex($),ge.computeVertexNormals();const ue=new Z(ge,new at({color:3235689,roughness:.18,metalness:.08,transparent:!0,opacity:.88}));ue.receiveShadow=!0,S.add(ue);const Ne=[];for(let _=0;_<34;_++){const A=D[Math.min(D.length-1,Math.floor(_*.94))],m=.7+fe(_,1500)*1.35,C=new Z(new jp(m*.45,m,12),new lr({color:10998996,transparent:!0,opacity:.12,side:Yn}));C.rotation.x=-Math.PI/2,C.scale.y=.42,C.position.set(A.x+(fe(_,1501)-.5)*4.5,V(A.x,A.z)+.075,A.z+(fe(_,1502)-.5)*4),S.add(C),Ne.push({mesh:C,phase:fe(_,1503)*Math.PI*2})}for(let _=0;_<52;_++){const A=Math.min(D.length-1,Math.floor(_*.62)),m=D[A],C=D[Math.max(0,A-1)],j=D[Math.min(D.length-1,A+1)],k=j.x-C.x,K=j.z-C.z,te=Math.max(.001,Math.hypot(k,K)),ve=_%2===0?-1:1,J=.34+fe(_,15)*.72,Me=de+ve*(.25+fe(_,16)*1.4),me=new Z(new fn(J,1),oe(6185562,1));me.position.set(m.x+-K/te*Me,V(m.x,m.z)+.18,m.z+k/te*Me),me.scale.y=.5+fe(_,17)*.35,Pe(me),O(me.position.x,me.position.z,J*.75,.03)}const _e=(_,A)=>{const m=_.map(([te,ve])=>new z(te,V(te,ve)+.035,ve)),C=[],j=[];for(let te=0;te<m.length;te++){const ve=m[Math.max(0,te-1)],J=m[Math.min(m.length-1,te+1)],Me=J.x-ve.x,me=J.z-ve.z,Qe=Math.max(.001,Math.hypot(Me,me)),it=-me/Qe,ht=Me/Qe;if(C.push(m[te].x+it*A/2,m[te].y,m[te].z+ht*A/2,m[te].x-it*A/2,m[te].y+.01,m[te].z-ht*A/2),te<m.length-1){const St=te*2;j.push(St,St+1,St+2,St+1,St+3,St+2)}}const k=new gn;k.setAttribute("position",new wt(C,3)),k.setIndex(j),k.computeVertexNormals();const K=new Z(k,new at({map:Y("road"),roughness:1}));K.receiveShadow=!0,S.add(K),[-A*.22,A*.22].forEach(te=>{const ve=m.map((me,Qe)=>{const it=m[Math.max(0,Qe-1)],ht=m[Math.min(m.length-1,Qe+1)],St=ht.x-it.x,un=ht.z-it.z,dn=Math.max(.001,Math.hypot(St,un));return new z(me.x+-un/dn*te,me.y+.045,me.z+St/dn*te)}),J=new Yp(new W1(ve),Math.max(12,m.length*4),.055,5,!1),Me=new Z(J,oe(3352863,1));Me.scale.y=.12,S.add(Me)})};_e([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),_e([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),_e([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),_e([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),_e([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),_e([[4,14],[-3,22],[-7,31],[-8,42]],3.8),_e([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),_e([[4,14],[10,28],[18,41],[27,57]],3.8),_e([[5,31],[15,45],[27,57],[39,70]],3.7),_e([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),_e([[-39,-8],[-47,-12],[-53,-15]],3.4);const Ge=Y("wood");Ge.repeat.set(2,1);const We=Y("roof");We.repeat.set(2,2);const xe=(_,A,m,C,j,k,K,te,ve)=>{const J=new Ye;J.rotation.y=j,J.position.set(_,V(_,A),A),J.userData={id:K,label:k};const Me=new at({map:Ge,color:te,roughness:.94}),me=B(m+.7,.55,C+.7,5724755,1);me.position.y=.28,J.add(me);for(let Pt=0;Pt<7;Pt++){const Lt=.62+Pt*.47,an=Ie(m-Pt%2*.2,.29,te);an.material=Me,an.position.set(0,Lt,C*.5-.03),J.add(an);const Rn=an.clone();Rn.position.z=-C*.5+.03,J.add(Rn);const ti=Ie(C+.06,.29,te);ti.material=Me,ti.rotation.y=Math.PI/2,ti.position.set(-m*.5+.03,Lt,0),J.add(ti);const ke=ti.clone();ke.position.x=m*.5-.03,J.add(ke)}for(const Pt of[-m*.5,m*.5])for(const Lt of[-C*.5,C*.5]){const an=he(.34,3.75,3482649,8,1);an.position.set(Pt,2.05,Lt),J.add(an)}const Qe=B(1.18,2.05,.18,2365458,1);Qe.position.set(0,1.37,C*.5+.31),J.add(Qe);for(const Pt of[-.67,.67]){const Lt=B(.15,2.28,.24,3811613,1);Lt.position.set(Pt,1.42,C*.5+.34),J.add(Lt)}const it=Ie(1.65,.11,3679770);it.position.set(0,2.53,C*.5+.34),J.add(it);const ht=he(.055,.12,13015634,8,.55);ht.rotation.z=Math.PI/2,ht.position.set(.33,1.38,C*.5+.43),J.add(ht);const St=new at({color:14986840,emissive:10116382,emissiveIntensity:1.5,roughness:.45});for(const Pt of[-m*.27,m*.27]){const Lt=B(1.28,1.02,.13,3154457,1);Lt.position.set(Pt,2.02,C*.5+.29),J.add(Lt);const an=B(.94,.7,.055,15251295,.45);an.material=St,an.position.set(Pt,2.02,C*.5+.36),J.add(an);const Rn=B(.07,.78,.09,3154457,1);Rn.position.set(Pt,2.02,C*.5+.4),J.add(Rn);const ti=B(1.05,.07,.09,3154457,1);ti.position.set(Pt,2.02,C*.5+.4),J.add(ti)}const un=et(m+1.55,C+1.35,ve);un.position.y=4.18,J.add(un);for(const Pt of[-1,1]){const Lt=Ie(C+1.48,.12,3154715);Lt.position.set(Pt*(m*.46),3.78,0),Lt.rotation.y=Math.PI/2,J.add(Lt)}const dn=Ie(C+1.45,.18,2760730);dn.rotation.y=Math.PI/2,dn.position.y=5.28,J.add(dn);const Ut=B(m*.34,.16,1.05,6439467,1);Ut.position.set(0,.64,C*.5+.66),J.add(Ut);for(const Pt of[-m*.16,m*.16]){const Lt=Ie(.85,.08,4796447);Lt.rotation.y=Math.PI/2,Lt.position.set(Pt,.83,C*.5+.95),J.add(Lt)}const jt=he(.34,2,5722958,8,1);jt.position.set(m*.25,5.05,-C*.1),J.add(jt);const Xt=B(.72,.14,.72,3157289,1);Xt.position.set(m*.25,6.08,-C*.1),J.add(Xt),Pe(J,K,k),be.push(J),Ve(_,A,m+.85,C+.85,j,.05)};xe(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),xe(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),xe(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),xe(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),xe(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),xe(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const Te=new Ye;Te.position.set(-10,V(-10,-5),-5),Te.userData={id:"forge",label:"Кузница"};for(let _=0;_<7;_++){const A=.62+_*.47,m=Ie(9,.27,4401693);m.position.set(0,A,-2.85),Te.add(m);const C=Ie(6,.27,4401693);C.rotation.y=Math.PI/2,C.position.set(-4.35,A,0),Te.add(C)}for(const _ of[-4.35,4.35]){const A=he(.34,4,2825493,9,1);A.position.set(_,2,-2.85),Te.add(A)}const nt=et(9.8,7,2433825);nt.position.y=4.45,Te.add(nt);const je=Ie(7.2,.18,2169366);je.rotation.y=Math.PI/2,je.position.y=5.42,Te.add(je);for(const _ of[-3.7,3.7]){const A=Ie(4.7,.13,2825494);A.rotation.z=_<0?-.6:.6,A.position.set(_*.48,3.15,.1),Te.add(A)}const Le=he(1.15,1.65,3420462,10,1);Le.position.set(-2,.83,1.15),Te.add(Le);const lt=he(.88,.35,2565925,10,1);lt.position.set(-2,1.83,1.15),Te.add(lt);const W=new Z(new Or(.52,16),new at({color:16740390,emissive:16726536,emissiveIntensity:5,roughness:.4}));W.rotation.y=Math.PI,W.position.set(-2,1.02,2.23),Te.add(W);const Ae=he(.27,.85,2697770,8,.45);Ae.position.set(1.15,.43,1.05),Te.add(Ae);const Ce=B(1.45,.34,.58,2435114,.38);Ce.position.set(1.15,1,1.05),Te.add(Ce);const ze=new Z(new Pn(.18,.72,8),oe(2435114,.38,.05));ze.rotation.z=-Math.PI/2,ze.position.set(1.98,1,1.05),Te.add(ze);for(let _=0;_<4;_++){const A=Ie(1.25,.045,11184548);A.rotation.z=-.35+_*.18,A.position.set(2.05+_*.18,1.12,1.34),Te.add(A)}const ye=B(1.15,.42,.62,3876893,1);ye.position.set(2.15,.72,-.8),ye.rotation.z=-.18,Te.add(ye);const pe=he(.07,.55,5980979,8,1);pe.rotation.z=Math.PI/2,pe.position.set(1.55,.84,-.8),Te.add(pe),Pe(Te,"forge","Кузница"),be.push(Te),Ve(-10,-5,9.6,6.6,0,.05);const Xe=new co(16742962,3.4,14,2);Xe.position.set(-12,V(-12,-5)+2.2,-4),S.add(Xe);const ot=new Z(new Or(8.5,32),new at({color:7035463,roughness:1}));ot.rotation.x=-Math.PI/2,ot.position.set(1,V(1,0)+.05,0),ot.receiveShadow=!0,S.add(ot);for(let _=0;_<18;_++){const A=_/18*Math.PI*2,m=new Z(new fn(.38,1),oe(7039843,1));m.position.set(1+Math.cos(A)*8.8,V(1+Math.cos(A)*8.8,Math.sin(A)*8.8)+.22,Math.sin(A)*8.8),S.add(m)}const Ft=(_,A)=>{const m=new Ye,C=B(2.8,.22,1,6832937,1);C.position.y=1.05,m.add(C);for(const j of[-1.05,1.05]){const k=B(.16,1,.16,3877149,1);k.position.set(j,.5,-.32),m.add(k);const K=k.clone();K.position.z=.32,m.add(K)}m.position.set(_,V(_,A),A),S.add(m)};Ft(-4,2),Ft(7,3);const vt=(_,A,m)=>{const C=new Ye;C.position.set(_,V(_,A),A);for(let J=0;J<7;J++){const Me=J/7*Math.PI*2,me=new Z(new fn(.32*m,1),oe(6117970,1));me.position.set(Math.cos(Me)*.7*m,.25*m,Math.sin(Me)*.7*m),C.add(me)}const j=B(.2*m,.2*m,1.5*m,4861211,1),k=j.clone();j.rotation.y=.55,k.rotation.y=-.55,j.position.y=k.position.y=.38*m,C.add(j,k);const K=new at({color:16744744,emissive:16731402,emissiveIntensity:4}),te=new Z(new Pn(.5*m,1.35*m,8),K);te.position.y=1.02*m,C.add(te),S.add(C);const ve=new co(16747068,2.4*m,12*m,2);return ve.position.set(_,V(_,A)+2*m,A),S.add(ve),mt.push({light:ve,flame:te,phase:fe(_,A)*8}),C};vt(1,0,1.15),vt(18,-15,.72);const on=(_,A,m,C,j=1.25)=>{const k=new Ye,K=m-_,te=C-A,ve=Math.hypot(K,te),J=Math.max(1,Math.floor(ve/1.55));for(let Me=0;Me<=J;Me++){const me=Me/J,Qe=_+K*me,it=A+te*me,ht=B(.18,j,.18,4796447,1);ht.position.set(Qe,V(Qe,it)+j/2,it),k.add(ht)}for(const Me of[-.28,.38]){const me=B(.14,.14,ve,5978917,1);me.rotation.y=Math.atan2(K,te),me.position.set((_+m)/2,V((_+m)/2,(A+C)/2)+j*Me,(A+C)/2),k.add(me)}S.add(k),Re(_,A,m,C,.12,.02)},Hn=(_,A,m,C,j,k,K)=>{const te=new Ye;te.position.set(_,V(_,A),A),te.rotation.y=j,te.userData={id:K,label:k};const ve=B(m+.25,.35,C+.25,5591368,1);ve.position.y=.18,te.add(ve);const J=new Z(new xn(m,2.5,C),new at({map:Ge,color:6439983,roughness:1}));J.position.y=1.45,te.add(J);const Me=new Z(new xn(m+.6,.18,C+.65),new at({map:We,color:2696996,roughness:1}));Me.rotation.z=.55,Me.position.set(-.16,3,0),te.add(Me);const me=Me.clone();me.rotation.z=-.55,me.position.x=.16,te.add(me);const Qe=B(1.05,1.75,.12,2759700,1);Qe.position.set(0,1.05,C/2+.07),te.add(Qe),Pe(te,K,k),be.push(te),Ve(_,A,m+.55,C+.55,j,.04)},Jo=(_,A,m=1)=>{const C=new Ye;C.position.set(_,V(_,A),A);const j=new Z(new Dt(.65*m,.65*m,1.2*m,10),oe(9073729,1));j.rotation.z=Math.PI/2,j.position.y=.62*m,C.add(j);for(let k=0;k<3;k++){const K=new Z(new tn(.66*m,.025*m,5,18),oe(5851693,1));K.rotation.y=Math.PI/2,K.position.y=(.28+k*.34)*m,C.add(K)}Pe(C)},bi=(_,A,m)=>{const C=new Ye;C.position.set(_,V(_,A),A),C.rotation.y=m;const j=B(2.8,.28,1.45,6636331,1);j.position.y=1,C.add(j);for(const K of[-1.15,1.15])for(const te of[-.55,.55]){const ve=B(.16,1.15,.16,4401950,1);ve.position.set(K,.55,te),C.add(ve)}for(const K of[-1.15,1.15]){const te=new Z(new Dt(.5,.5,.18,14),oe(2696738,1));te.rotation.z=Math.PI/2,te.position.set(K,.52,-.92),C.add(te)}const k=B(.16,.16,2.4,4796447,1);k.rotation.x=Math.PI/2,k.position.set(0,.72,-2),C.add(k),Pe(C)},Bs=(_,A,m=0)=>{const C=new Ye;C.position.set(_,V(_,A),A),C.rotation.y=m;const j=B(2.2,.16,.5,7359021,1);j.position.y=.85,C.add(j);for(const k of[-.78,.78]){const K=B(.12,.8,.12,4139549,1);K.position.set(k,.4,0),C.add(K)}Pe(C)},Zo=(_,A)=>{const m=new Ye;m.position.set(_,V(_,A),A);for(let K=0;K<10;K++){const te=K/10*Math.PI*2,ve=B(.45,.38,.38,6710621,1);ve.position.set(Math.cos(te)*.95,.19,Math.sin(te)*.95),ve.rotation.y=te,m.add(ve)}const C=B(.16,2.2,.16,4861984,1),j=C.clone();C.position.set(-.9,1.2,0),j.position.set(.9,1.2,0),m.add(C,j);const k=B(2,.16,.16,3876891,1);k.position.y=2.25,m.add(k),Pe(m)};Hn(-19,31,8,5,.08,"Амбар","barn"),Hn(17,34,7,5,-.2,"Сарай","shed"),Hn(27,13,6,4,.45,"Склад рыбака","fishshed"),on(-25,27,-13,27),on(-25,27,-25,38),on(-25,38,-14,38),on(12,29,25,29),on(25,29,25,40),on(25,40,12,40),on(29,-1,39,-1),on(39,-1,39,10),on(39,10,30,10);for(const _ of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])Jo(_[0],_[1],_[2]);bi(-17,24,.18),bi(29,-5,-.55),Bs(-20,23,.18),Bs(25,31,-.2),xe(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),xe(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),xe(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),xe(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),Ve(-31,8,7.8,5.8,.1,.04),Ve(-27,20,7.8,5.8,-.25,.04),Ve(31,18,7.8,5.8,.32,.04),Ve(20,24,7.8,5.8,-.12,.04);const Hs=(_,A,m)=>{const C=new Ye;C.position.set(_,V(_,A),A),C.rotation.y=m;const j=B(3,.18,1.25,7357994,1);j.position.y=1.45,C.add(j);for(const K of[-1.25,1.25])for(const te of[-.48,.48]){const ve=B(.13,1.45,.13,4270877,1);ve.position.set(K,.72,te),C.add(ve)}const k=new Z(new Pn(1.65,2.5,4,1,!1,Math.PI/4),oe(4798510,1));k.scale.z=.55,k.position.y=2.15,C.add(k),Pe(C)};Hs(-5,-7,.12),Hs(8,-5,-.18),Hs(6,7,.5);for(const _ of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])Zo(_[0],_[1]);const Vs=(_,A,m=1)=>{const C=new Ye,j=V(_,A);for(let k=0;k<5;k++){const K=new Z(new Ct((.28+fe(k,_)*.18)*m,8,6),oe(k%2?3494457:4284223,1));K.position.set((fe(k,2)-.5)*.7*m,.28*m,(fe(k,3)-.5)*.7*m),C.add(K)}C.position.set(_,j,A),Pe(C)};for(let _=0;_<48;_++){const A=fe(_,501)*Math.PI*2,m=18+fe(_,502)*39,C=Math.cos(A)*m,j=Math.sin(A)*m+4;Math.abs(C)<9&&Math.abs(j)<14||Vs(C,j,.65+fe(_,503)*.75)}for(let _=0;_<34;_++){const A=-84+fe(_,610)*168,m=-82+fe(_,611)*164;if(Math.hypot(A,m-2)<24)continue;const C=.25+fe(_,612)*.55,j=new Z(new fn(C,1),oe(5725013,1));j.scale.y=.55,j.position.set(A,V(A,m)+C*.28,m),j.rotation.set(fe(_,613),fe(_,614),fe(_,615)),Pe(j),O(A,m,C*.8,.03)}xe(-64,36,8,5,.12,"Старый дом","oldfarm",6505263,2828582),Hn(-58,42,6,4,-.12,"Старый амбар","oldbarn"),on(-70,32,-60,32),on(-70,32,-70,43),on(-70,43,-61,43),Jo(-67,39,.9),bi(-61,33,-.25),Zo(-57,34);const Gs=new Ye;Gs.position.set(-63,V(-63,47),47);for(let _=0;_<6;_++){const A=B(10,.035,.12,4208682,1);A.position.set(0,.02,(_-2.5)*1.05),A.rotation.y=.06,Gs.add(A)}Pe(Gs);const Zn=new Ye;Zn.position.set(39,V(39,70),70),Zn.userData={id:"runefield",label:"Поле Рун"};const gl=oe(5593942,1),Qo=new at({color:12163675,emissive:6833949,emissiveIntensity:1.6,roughness:.62});for(let _=0;_<11;_++){const A=fe(_,1201)*Math.PI*2,m=3.5+fe(_,1202)*8,C=new Z(new fn(.65+fe(_,1203)*.38,1),gl);C.scale.y=1.4+fe(_,1204)*1.5,C.position.set(Math.cos(A)*m,C.scale.y*.48,Math.sin(A)*m),C.rotation.set(fe(_,1205),A,fe(_,1206)),Zn.add(C);const j=new Z(new xn(.11,.035,.72),Qo);j.position.set(C.position.x,C.position.y+.55,C.position.z),j.rotation.y=-A+.45,Zn.add(j)}for(let _=0;_<5;_++){const A=B(.22,1.8,.22,4861984,1);A.position.set(-6+_*3,.9,7.5),Zn.add(A);const m=new Z(new tn(.34,.035,6,18),Qo);m.rotation.x=Math.PI/2,m.position.set(-6+_*3,1.55,7.5),Zn.add(m)}const vl=new Ye;for(let _=0;_<7;_++){const A=_/7*Math.PI*2,m=new Z(new fn(.3,1),oe(5591885,1));m.position.set(Math.cos(A)*.65,.22,Math.sin(A)*.65),vl.add(m)}Zn.add(vl),Pe(Zn,"runefield","Поле Рун"),be.push(Zn),O(39,70,1,.08);const Ws=(_,A,m,C)=>{const j=new Ye,k=m-_,K=C-A,te=Math.hypot(k,K),ve=Math.floor(te/1.7);for(let Me=0;Me<=ve;Me++){const me=Me/ve,Qe=_+k*me,it=A+K*me,ht=new Z(new Pn(.24,.24+2.8+fe(Me,_)*.5,6),oe(3942940,1));ht.position.set(Qe,V(Qe,it)+1.45,it),j.add(ht)}const J=B(.3,.35,te,2957593,1);J.rotation.y=Math.atan2(k,K),J.position.set((_+m)/2,V((_+m)/2,(A+C)/2)+1.25,(A+C)/2),j.add(J),S.add(j),Re(_,A,m,C,.34,.08)};Ws(-30,-31,-8,-31),Ws(8,-31,30,-31),Ws(-30,-31,-30,-13),Ws(30,-31,30,16);const yr=new Ye;yr.userData={id:"gate",label:"Ворота Мидгарда"};for(const _ of[-4.2,4.2]){const A=B(.8,6,.8,3482906,1);A.position.set(_,3,-31),yr.add(A)}const _l=B(10,.8,1,2957336,1);_l.position.set(0,6,-31),yr.add(_l);for(let _=-3;_<=3;_++){const A=B(1,4.2,.22,5978660,1);A.position.set(_*1.15,2,-30.7),yr.add(A)}Pe(yr,"gate","Ворота Мидгарда"),be.push(yr),O(-4.2,-31,.55,.05),O(4.2,-31,.55,.05);const xi=new Ye;xi.userData={id:"mimir",label:"Колодец Мимира"},xi.position.set(18,V(18,15),15);for(let _=0;_<14;_++){const A=_/14*Math.PI*2,m=B(.7,.48,.5,6711907,1);m.position.set(Math.cos(A)*1.45,.24,Math.sin(A)*1.45),m.rotation.y=A+Math.PI/2,xi.add(m)}const ea=new Z(new Or(1.05,28),new at({color:1522499,emissive:733496,emissiveIntensity:1.8,roughness:.18}));ea.rotation.x=-Math.PI/2,ea.position.y=.5,xi.add(ea);for(const _ of[-1.35,1.35]){const A=B(.22,3,.22,4861984,1);A.position.set(_,1.55,0),xi.add(A)}const b=B(3.1,.25,.25,3679513,1);b.position.y=2.95,xi.add(b);const q=B(.55,.5,.55,5913383,1);q.position.set(0,1.65,0),xi.add(q);const ne=new Z(new tn(1.8,.06,8,40),new at({color:7792028,emissive:2653256,emissiveIntensity:3}));ne.rotation.x=Math.PI/2,ne.position.y=.53,xi.add(ne),Pe(xi,"mimir","Колодец Мимира"),be.push(xi),O(18,15,1.8,.08);const re=new co(7530656,1.8,10,2);re.position.set(18,V(18,15)+1.4,15),S.add(re);const X=new Ye;X.userData={id:"norns",label:"Прядильня норн"},X.position.set(-25,V(-25,43),43);for(let _=0;_<3;_++){const A=new Z(new Wn(.65,2.3,5,8),oe(5725529,1));A.position.set((_-1)*2.2,1.35,0),A.rotation.z=(_-1)*.07,X.add(A);const m=new Z(new tn(.42,.055,7,20),new at({color:[13100495,13149416,14795380][_],emissive:[6134129,7490961,9268264][_],emissiveIntensity:2.2}));m.rotation.x=Math.PI/2,m.position.set((_-1)*2.2,1.6,-.55),X.add(m)}const we=new Ih({color:13944039,transparent:!0,opacity:.78});for(let _=0;_<2;_++){const A=[new z((_-1)*2.2,2,.1),new z((_-.5)*2.2,4.1,-.7),new z(_*2.2,2,.1)];X.add(new Sg(new gn().setFromPoints(A),we))}const De=new Z(new tn(4.1,.07,8,48),new at({color:12429522,emissive:6113136,emissiveIntensity:1.5}));De.rotation.x=Math.PI/2,De.position.y=.05,X.add(De),Pe(X,"norns","Прядильня норн"),be.push(X),O(-25,43,3,.1);const Be=-43,Oe=62,qe=new Ye;qe.userData={id:"ritual",label:"Круг Силы"},qe.position.set(Be,V(Be,Oe),Oe);const rt=oe(6711651,1),Je=oe(5593685,1);for(let _=0;_<2;_++){const A=_===0?18:12,m=_===0?6.2:3.65;for(let C=0;C<A;C++){const j=C/A*Math.PI*2+_*.12,k=m+(fe(C,930+_)*.5-.25),K=.42+fe(C,940+_)*.48,te=new Z(new fn(.55+fe(C,950+_)*.28,1),_===0?rt:Je);te.scale.y=.65+K*.35,te.position.set(Math.cos(j)*k,K*.45,Math.sin(j)*k),te.rotation.set(fe(C,960+_),j+fe(C,970+_),fe(C,980+_)),qe.add(te)}}const ft=new Z(new fn(1.05,1),oe(5593428,1));ft.scale.set(1.25,.62,1.05),ft.position.y=.5,qe.add(ft);for(const _ of[2.1,3.15,5.15]){const A=new Z(new tn(_,.045,7,64),new at({color:9219739,emissive:3496777,emissiveIntensity:1.4,transparent:!0,opacity:.72}));A.rotation.x=Math.PI/2,A.position.y=.055,qe.add(A)}const It=new at({color:13215838,emissive:9199384,emissiveIntensity:2.2,roughness:.5});for(let _=0;_<8;_++){const A=_/8*Math.PI*2,m=new Z(new xn(.13,.025,.65),It);m.position.set(Math.cos(A)*4.55,.075,Math.sin(A)*4.55),m.rotation.y=-A,qe.add(m)}Pe(qe,"ritual","Круг Силы"),be.push(qe),O(Be,Oe,1.25,.06);const qt=new co(9226152,1.15,11,2);qt.position.set(Be,V(Be,Oe)+1.6,Oe),S.add(qt);const bt=new Ye;bt.userData={id:"rune",label:"Древний камень Феху"},bt.position.set(27,V(27,57),57);const Nt=new Z(new fn(1.45,1),oe(5002063,1));Nt.position.y=1.2,bt.add(Nt);const Ze=new Z(new tn(1.05,.07,8,30),new at({color:16766826,emissive:10052371,emissiveIntensity:3}));Ze.rotation.x=Math.PI/2,Ze.position.y=1.2,bt.add(Ze),Pe(bt,"rune","Древний камень Феху"),be.push(bt),O(27,57,1.7,.1);const kt=new Ye;kt.userData={id:"port",label:"Мост к причалу"};for(let _=-5;_<=5;_++){const A=B(3.6,.28,.82,6307882,1);A.position.set(-53,V(-53,_*1)+.5,_),kt.add(A)}Pe(kt,"port","Мост к причалу"),be.push(kt);const gt=new Ye;gt.position.set(-46,V(-46,-15),-15);for(let _=0;_<7;_++){const A=B(2.8,.24,.72,7030573,1);A.position.set(0,.3,_*.85),gt.add(A)}for(const _ of[-1.2,1.2])for(let A=0;A<3;A++){const m=B(.22,1.5,.22,4139292,1);m.position.set(_,-.2,A*2.5),gt.add(m)}const Nn=B(2.2,.55,4.8,4926493,1);Nn.position.set(3,-.15,2.5),gt.add(Nn),Pe(gt,"port","Речной причал"),be.push(gt);const Mr=(_,A)=>{const m=new Z(new Dt(.5,.5,1,12),oe(6636332,1));m.position.set(_,V(_,A)+.5,A),S.add(m);for(const C of[.25,.76]){const j=new Z(new tn(.51,.045,6,18),oe(3156004,.7,.1));j.rotation.x=Math.PI/2,j.position.set(_,V(_,A)+C,A),S.add(j)}},Vn=(_,A)=>{const m=B(1,.75,1,7359022,1);m.position.set(_,V(_,A)+.38,A),S.add(m);const C=B(.08,.82,1.05,3679770,1);C.position.set(_,V(_,A)+.38,A),S.add(C),Ve(_,A,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([_,A])=>Mr(_,A)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([_,A])=>Vn(_,A));const rs=(_,A,m)=>{const C=new Ye,j=V(_,A),k=new at({map:ee,color:16777215,roughness:.96}),K=new Z(new Dt(.2*m,.36*m,4.8*m,10),k);K.position.y=2.4*m,K.rotation.z=(fe(_,A)-.5)*.05,C.add(K);for(let ve=0;ve<7;ve++){const J=(1.35+ve*.5)*m,Me=ve%2?1:-1,me=new Z(new Dt(.045*m,.1*m,(1.15+ve*.13)*m,7),k);me.position.set(Me*.35*m,J,(fe(ve,A)-.5)*.34*m),me.rotation.z=Me*(.72-fe(ve,_)*.18),me.rotation.y=fe(ve+20,A)*Math.PI*2,C.add(me)}const te=[new at({map:ie,color:2046505,roughness:.98}),new at({map:ie,color:2705458,roughness:.98}),new at({map:ie,color:3430204,roughness:.98})];for(let ve=0;ve<10;ve++){const J=(1.38-ve/9*.72)*m,Me=new Z(new Ct(J,8,6),te[ve%3]);Me.scale.set(1+.18*fe(ve,_),.62+.1*fe(ve,A),.82+.18*fe(ve*2,_)),Me.position.set((fe(ve*4,_)-.5)*.52*m,(1.75+ve*.4)*m,(fe(ve*5,A)-.5)*.48*m),C.add(Me)}if(m>1.25){const ve=new Z(new Ct(.95*m,8,6),te[1]);ve.scale.y=.48,ve.position.set(.2*m,.95*m,-.05*m),C.add(ve)}C.position.set(_,j,A),Pe(C),m>=1.15&&O(_,A,.42*m,.04)},zt=(_,A,m,C=!1)=>{const j=new Ye,k=V(_,A),K=new lo({map:ee,color:16777215}),te=new Z(new Dt(.32*m,.52*m,5.8*m,11),K);te.position.y=2.9*m,te.rotation.z=(fe(_,A)-.5)*.035,j.add(te);const ve=C?8:6;for(let J=0;J<ve;J++){const Me=J/ve*Math.PI*2+fe(J,_)*.25,me=(1.65+fe(J+30,A)*1.35)*m,Qe=new Z(new Dt(.075*m,.16*m,me,8),K);Qe.position.set(Math.cos(Me)*me*.34,(3.35+fe(J+40,_)*1.25)*m,Math.sin(Me)*me*.34),Qe.rotation.z=Math.cos(Me)*.78,Qe.rotation.x=Math.sin(Me)*.78,Qe.rotation.y=-Me,j.add(Qe);for(let it=0;it<3;it++){const ht=new Z(new Ct((.42+fe(it+J,90)*.22)*m,8,6),new lo({map:ie,color:it%2?13951176:12965304})),St=.55+it*.18;ht.position.set(Math.cos(Me)*me*.62+(fe(it,J)-.5)*.35*m,(3.55+fe(J,it)*1.15+St)*m,Math.sin(Me)*me*.62+(fe(it+4,J)-.5)*.35*m),ht.scale.y=.72,j.add(ht)}}for(let J=0;J<(C?7:4);J++){const Me=fe(J+100,_)*Math.PI*2,me=new Z(new Dt(.025*m,.055*m,(.9+fe(J,A)*.7)*m,6),K);me.position.set(Math.cos(Me)*1.05*m,(3.15+fe(J+5,_)*1.5)*m,Math.sin(Me)*1.05*m),me.rotation.z=(fe(J+8,A)-.5)*.35,j.add(me)}j.position.set(_,k,A),Pe(j),m>=1.2&&O(_,A,.62*m,.04)},Qn=(_,A,m,C)=>{const j=new Ye,k=new at({color:7291688,roughness:.96}),K=new at({color:9132599,roughness:.96}),te=new at({color:3155230,roughness:1}),ve=new at({color:12168600,roughness:.9}),J=new at({color:1512207,roughness:.25}),Me=new Z(new Ct(.68,14,10),k);Me.scale.set(1.35,.78,.72),Me.position.set(0,.98*m,0),Me.scale.multiplyScalar(m),j.add(Me);const me=new Z(new Ct(.42,12,9),K);me.scale.set(1,.9,.86),me.position.set(.49*m,1.04*m,0),j.add(me);const Qe=new Z(new Dt(.2*m,.34*m,.98*m,10),k);Qe.position.set(.5*m,1.46*m,0),Qe.rotation.z=-.3,j.add(Qe);const it=new Z(new Ct(.34*m,12,9),K);it.scale.set(1.18,.92,.78),it.position.set(.86*m,1.82*m,0),j.add(it);const ht=new Z(new Ct(.17*m,10,7),K);ht.scale.set(1.15,.72,.72),ht.position.set(1.16*m,1.72*m,0),j.add(ht);const St=new Z(new Ct(.075*m,8,6),te);St.scale.set(1,.72,.85),St.position.set(1.3*m,1.72*m,0),j.add(St);for(const Ut of[-1,1]){const jt=new Z(new Pn(.095*m,.3*m,7),K);jt.position.set(.77*m,2.1*m,Ut*.2*m),jt.rotation.z=-.28,jt.rotation.x=Ut*.18,j.add(jt)}for(const Ut of[-1,1]){const jt=new Z(new Ct(.035*m,8,6),J);jt.position.set(1.05*m,1.91*m,Ut*.235*m),j.add(jt);const Xt=new Z(new Ct(.009*m,6,4),new lr({color:16777215}));Xt.position.set(1.075*m,1.925*m,Ut*.257*m),j.add(Xt)}const un=[];for(const Ut of[-1,1])for(const jt of[-1,1]){const Xt=new Ye;Xt.position.set(jt*.43*m,.76*m,Ut*.34*m);const Pt=new Z(new Dt(.085*m,.11*m,.43*m,7),k);Pt.position.y=-.2*m,Xt.add(Pt);const Lt=new Ye;Lt.position.y=-.4*m;const an=new Z(new Dt(.055*m,.075*m,.43*m,7),te);an.position.y=-.2*m,Lt.add(an);const Rn=new Z(new Ct(.075*m,7,5),te);Rn.scale.set(1.15,.55,1.25),Rn.position.y=-.43*m,Lt.add(Rn),Xt.add(Lt),j.add(Xt),un.push(Xt,Lt)}const dn=new Z(new Ct(.16*m,9,7),K);dn.scale.set(.75,1.25,.72),dn.position.set(-.9*m,1.18*m,0),j.add(dn);for(const Ut of[-1,1]){const jt=new Z(new Dt(.04*m,.06*m,.68*m,7),ve);jt.position.set(.69*m,2.25*m,Ut*.14*m),jt.rotation.z=Ut*.22,j.add(jt);for(let Xt=0;Xt<3;Xt++){const Pt=new Z(new Dt(.02*m,.038*m,.34*m,6),ve);Pt.position.set((.56+.11*Xt)*m,(2.48+.15*Xt)*m,Ut*(.14+.045*Xt)*m),Pt.rotation.z=Ut*(.55-.08*Xt),j.add(Pt)}}j.scale.setScalar(1.1),j.position.set(_,V(_,A),A),j.userData={phase:C,legJoints:un},Pe(j),F.push({g:j,x:_,z:A,r:4+fe(C,41)*3,speed:1.25+fe(C,42)*.8,phase:C,kind:"deer"})},ei=(_,A)=>{const m=new Ye,C=oe(6965552,1),j=oe(3089436,1),k=new Z(new Ct(.22,8,6),C);k.scale.set(1.35,.9,.9),k.position.y=.72,m.add(k);const K=new Z(new Ct(.17,8,6),C);K.position.set(.22,.86,0),m.add(K);for(const J of[-1,1]){const Me=new Z(new Pn(.06,.18,6),C);Me.position.set(.17,.99,J*.09),m.add(Me)}const te=new Z(new tn(.24,.075,7,14,Math.PI*1.65),C);te.rotation.y=Math.PI/2,te.position.set(-.22,.91,0),m.add(te);const ve=new Z(new Ct(.025,6,4),j);ve.position.set(.35,.9,-.12),m.add(ve),m.position.set(_,V(_,A),A),Pe(m,"ratatosk","Белка Рататоск"),be.push(m),O(_,A,.28,.02),F.push({g:m,x:_,z:A,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},Bt=-4,Wt=69,Xs=new Ye;Xs.userData={id:"ashgrove",label:"Роща Ясеня"};const Zi=[[-5,2,1.65,!1],[-1,1,1.45,!1],[-7,4,1.25,!1],[1,5,1.3,!1],[-2,7,2.05,!0],[4,3,1.15,!1]];for(const[_,A,m,C]of Zi)zt(Bt+_,Wt+A,m,C);for(let _=0;_<9;_++){const A=_/9*Math.PI*2,m=4.2+fe(_,1301)*2,C=new Z(new fn(.48+fe(_,1302)*.24,1),oe(5725014,1));C.position.set(Bt+Math.cos(A)*m,V(Bt+Math.cos(A)*m,Wt+Math.sin(A)*m)+.35,Wt+Math.sin(A)*m),C.scale.y=1.3+fe(_,1303)*.7,C.rotation.set(fe(_,1304),A,fe(_,1305)),Pe(C)}const Mu=new Z(new tn(5.7,.055,7,64),new at({color:9214840,emissive:3755313,emissiveIntensity:1.1,transparent:!0,opacity:.62}));Mu.rotation.x=Math.PI/2,Mu.position.set(Bt,V(Bt,Wt)+.045,Wt),S.add(Mu);const Su=new Z(new fn(1,1),oe(5199441,1));Su.position.set(Bt,V(Bt,Wt)+.75,Wt),Su.scale.y=1.5,S.add(Su);const wu=new Z(new tn(.62,.05,7,24),new at({color:12757607,emissive:6637341,emissiveIntensity:1.7}));wu.rotation.x=Math.PI/2,wu.position.set(Bt,V(Bt,Wt)+1.45,Wt),S.add(wu),be.push(Xs),O(Bt,Wt,1,.08);const Sr=61,wr=78,Q1=new Ye;Q1.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const Eu=new Z(new tn(5.6,.055,7,56),new at({color:9016697,emissive:3425071,emissiveIntensity:1,transparent:!0,opacity:.55}));Eu.rotation.x=Math.PI/2,Eu.position.set(Sr,V(Sr,wr)+.04,wr),S.add(Eu);const ss=new Ye;ss.position.set(Sr,V(Sr,wr),wr),ss.userData={id:"hoddmimir",label:"Лес Ходдмимира"};for(const _ of[-2.4,2.4]){const A=B(.28,2.5,.28,4862755,1);A.position.set(_,1.25,0),ss.add(A)}const Tu=new Z(new Pn(3.4,1.65,6),oe(3813673,1));Tu.position.y=2.75,Tu.scale.z=.72,ss.add(Tu),vt(Sr,wr+1.8,.55);const Kp=new Z(new fn(.8,1),oe(5264976,1));Kp.position.set(Sr,V(Sr,wr)+.65,wr+2.2),ss.add(Kp),Pe(ss,"hoddmimir","Лес Ходдмимира"),be.push(ss),O(Sr,wr,1.1,.08);const ta=30,na=53;for(let _=0;_<4;_++)Qn(ta+(_-1.5)*2.6,na+(_%2?2.6:-2.6),1.12+fe(_,1440)*.16,10+_);const Jp=new Z(new fn(.72,1),oe(5725526,1));Jp.position.set(ta,V(ta,na)+.5,na),S.add(Jp);const Au=new Z(new tn(5.8,.045,7,48),new at({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));Au.rotation.x=Math.PI/2,Au.position.set(ta,V(ta,na)+.035,na),S.add(Au),ei(Bt+5,Wt+1);const xl=12,yl=49,js=new Ye;js.position.set(xl,V(xl,yl),yl);const bu=new Z(new fn(1.05,1),oe(5133648,1));bu.position.y=.85,bu.scale.y=1.55,js.add(bu);const Cu=new Z(new tn(2.7,.055,7,48),new at({color:10259632,emissive:4929114,emissiveIntensity:1.8,transparent:!0,opacity:.78}));Cu.rotation.x=Math.PI/2,Cu.position.y=.06,js.add(Cu);const ex=new Ih({color:14207464,transparent:!0,opacity:.72});for(let _=0;_<3;_++){const A=[new z((_-1)*.72,.95,.15),new z((_-1)*1.25,2.9,-.35+Math.sin(_)*.25),new z((_-1)*1.75,.5,.9)];js.add(new Sg(new gn().setFromPoints(A),ex))}for(let _=0;_<7;_++){const A=new Z(new fn(.11,0),oe(6708050,1)),m=-1+_*.32;A.position.set(-1.7+m*.95,.06,-1.6+_*.46),A.scale.set(1.6,.35,.8),js.add(A)}Pe(js,"forestEvent","Камень Трёх Нитей"),O(xl,yl,1.15,.08);const Ru=(_,A,m,C,j,k,K)=>{const te=new Ye;te.position.set(_,V(_,A),A);const ve=new Z(new fn(.78+K*.08,1),oe(k,1));ve.position.y=.58+K*.08,ve.scale.y=1.35,te.add(ve);const J=new Z(new tn(2+K*.18,.045,7,40),new at({color:j,emissive:j,emissiveIntensity:1.25,transparent:!0,opacity:.62}));J.rotation.x=Math.PI/2,J.position.y=.045,te.add(J);for(let Me=0;Me<3+K;Me++){const me=new Z(new fn(.12,0),oe(7827558,1)),Qe=Me/(3+K)*Math.PI*2;me.position.set(Math.cos(Qe)*(1.15+K*.12),.08,Math.sin(Qe)*(1.15+K*.12)),me.scale.y=.45,te.add(me)}Pe(te,m,C),be.push(te),O(_,A,.9,.08)};Ru(-15,58,"forestCache","Забытый тайник",11701074,4931637,2),Ru(46,43,"forestWhisper","Камень Шёпота",7902629,4541773,3),Ru(-48,72,"forestThread","Разорванная нить",10252688,5326925,2);const tx=(_,A)=>{const m=document.createElement("canvas");m.width=m.height=256;const C=m.getContext("2d");C.clearRect(0,0,256,256),C.textAlign="center",C.textBaseline="middle",C.shadowColor=A,C.shadowBlur=18,C.fillStyle=A,C.font="bold 150px serif",C.fillText(_,128,132),C.shadowBlur=4,C.globalAlpha=.55,C.font="bold 118px serif",C.fillText(_,128,132);const j=new wg(m);return j.colorSpace=jn,j.anisotropy=4,j},Pu=(_,A,m,C,j,k=.72,K=0)=>{const te="#"+j.toString(16).padStart(6,"0"),ve=new lr({map:tx(C,te),transparent:!0,depthWrite:!1,side:Yn}),J=new Z(new Br(k,k),ve);J.rotation.x=-Math.PI/2,J.rotation.z=K,J.position.set(A,.065,m),_.add(J)},nx=(_,A,m,C,j)=>{const k=_.distanceTo(A),K=new Z(new xn(m,C,k),j);return K.position.copy(_).add(A).multiplyScalar(.5),K.lookAt(A),K},Zp=(_,A,m,C,j,k,K)=>{const te=new Z(new fn(j,1),oe(k,1));return te.scale.set(.72+fe(K,1)*.62,.55+fe(K,2)*.85,.68+fe(K,3)*.55),te.rotation.set(fe(K,4)*1.2,fe(K,5)*Math.PI,fe(K,6)*1.1),te.position.set(A,m,C),_.add(te),te},ix=(_,A)=>{const m=new Ye;m.position.set(_,V(_,A),A),m.userData={id:"hunterCamp",label:"Забытая стоянка"};const C=new Z(new Or(8.7,40),new at({color:3225644,roughness:1,transparent:!0,opacity:.78}));C.rotation.x=-Math.PI/2,C.position.y=.025,C.scale.set(1.18,.92,1),m.add(C);const j=new Ye;j.position.set(-1.45,.05,-.65),j.rotation.y=-.34,m.add(j);const k=oe(5978920,1);oe(3680030,1);const K=oe(2697768,.82,.35),te=oe(4412730,1),ve=B(3.7,.26,1.65,6308141,1);ve.position.y=1.05,ve.rotation.z=-.08,j.add(ve);for(let ke=0;ke<9;ke++){const ut=B(2.8+fe(ke,501)*1.1,.16,.26,ke%3?6505775:4928293,1);ut.position.set(-.25+(fe(ke,502)-.5)*.25,1.18+(fe(ke,503)-.5)*.34,-.72+ke%3*.68),ut.rotation.z=(fe(ke,504)-.5)*.16,ut.rotation.y=(fe(ke,505)-.5)*.16,j.add(ut)}for(const[ke,ut,Ht]of[[-1.55,-.83,.82],[1.35,-.83,.74]]){const _n=new Z(new tn(Ht,.14,7,20,Math.PI*1.56),K);_n.rotation.y=Math.PI/2,_n.rotation.z=Ht>.8?.08:-.18,_n.position.set(ke,.9,ut),j.add(_n);const ci=new Z(new Dt(.15,.18,.28,8),K);ci.rotation.z=Math.PI/2,ci.position.set(ke,.9,ut),j.add(ci);for(let cs=0;cs<6;cs++){const Bm=cs/6*Math.PI*2+.25,ux=new z(ke+Math.cos(Bm)*Ht*.82,.9+Math.sin(Bm)*Ht*.82,ut+.02),dx=new z(ke,.9,ut+.02);j.add(nx(dx,ux,.065,.065,K))}}const J=new Z(new xn(3.8,.14,.16),K);J.position.set(0,.62,-.83),J.rotation.z=.08,j.add(J);const Me=new Z(new xn(.16,.18,3.2),k);Me.position.set(1.8,.8,-.35),Me.rotation.y=.9,j.add(Me);for(let ke=0;ke<6;ke++){const ut=new Z(new Ct(.28+fe(ke,507)*.18,7,5),te);ut.scale.set(1.4,.32,.7),ut.position.set(-1.1+ke*.48,1.34+ke%2*.05,-.82),j.add(ut)}const me=new Ye;me.position.set(2.85,.02,1.15),me.rotation.y=.18,m.add(me),oe(4861985,1);for(let ke=0;ke<4;ke++){const ut=ke/4*Math.PI*2+.25,Ht=B(.11,3.7,.11,4861985,1);Ht.position.set(Math.cos(ut)*1.25,1.65,Math.sin(ut)*1.25),Ht.rotation.z=Math.cos(ut)*.34,Ht.rotation.x=-Math.sin(ut)*.34,me.add(Ht)}const Qe=new Z(new Pn(2,3.2,4,1,!0),new at({color:4862247,roughness:1,side:Yn,transparent:!0,opacity:.94}));Qe.position.y=1.45,Qe.scale.set(1,.9,.82),Qe.rotation.y=.78,me.add(Qe);for(let ke=0;ke<9;ke++){const ut=new Z(new Ct(.16+fe(ke,509)*.14,6,5),te);ut.scale.set(1.5,.35,.8),ut.position.set((fe(ke,510)-.5)*2.4,1+fe(ke,511)*1.9,(fe(ke,512)-.5)*1.8),me.add(ut)}const it=B(1.05,1.55,.05,3088668,1);it.position.set(0,.72,1.65),it.rotation.y=.16,me.add(it),vt(_+.1,A+.45,.78);const ht=new co(16751173,1,8,2);ht.position.set(.1,1.7,.45),m.add(ht);const St=new Ye;St.position.set(-3.15,.5,1.25),St.rotation.y=.8,St.rotation.z=-.22,m.add(St);const un=new Z(new Or(1.05,16),new at({color:3882041,roughness:.85,metalness:.55,side:Yn}));un.rotation.x=-Math.PI/2,un.scale.y=.8,St.add(un);const dn=new Z(new tn(1.03,.11,7,18),K);dn.rotation.x=-Math.PI/2,dn.scale.y=.8,St.add(dn);const Ut=new Z(new Dt(.24,.31,.22,8),K);Ut.rotation.x=Math.PI/2,Ut.position.set(.18,0,.08),St.add(Ut);const jt=B(.05,.035,1.15,1513494,1);jt.position.set(-.28,.025,.05),jt.rotation.y=.42,St.add(jt),oe(2960425,.65,.45);const Xt=(ke,ut,Ht)=>{const _n=new Ye;_n.position.set(ke,.18,ut),_n.rotation.y=Ht;const ci=B(.09,.09,1.55,5059362,1);ci.rotation.x=Math.PI/2,ci.position.z=.15,_n.add(ci);const cs=B(.55,.13,.28,3158061,.55);cs.position.set(0,.02,-.62),cs.rotation.y=-.25,_n.add(cs),m.add(_n)};Xt(-1.9,3.15,.45),Xt(4.15,-.65,-.8);const Pt=B(.11,.11,.95,5388068,1);Pt.rotation.y=.55,Pt.position.set(-2.1,.16,2.65),m.add(Pt);const Lt=new Z(new Ct(.48,9,7),new at({color:5978919,roughness:1}));Lt.scale.set(.9,1.15,.65),Lt.position.set(3.55,.48,2.65),m.add(Lt);const an=new Z(new tn(.33,.035,6,18,Math.PI*1.5),oe(3023129,1));an.rotation.x=Math.PI/2,an.position.set(3.55,.93,2.65),m.add(an);for(let ke=0;ke<15;ke++){const ut=new Z(new Dt(.09,.09,.025,10),new at({color:9335877,metalness:.55,roughness:.45})),Ht=fe(ke,520)*Math.PI*2,_n=2.1+fe(ke,521)*3.7;ut.position.set(Math.cos(Ht)*_n,.13,Math.sin(Ht)*_n),ut.rotation.x=Math.PI/2,m.add(ut)}for(let ke=0;ke<5;ke++){const ut=B(.08,.08,.9,11182733,1);ut.position.set(3.2+fe(ke,522)*2.4,.18,-2.7+fe(ke,523)*1.7),ut.rotation.y=fe(ke,524)*Math.PI,ut.rotation.z=(fe(ke,525)-.5)*.25,m.add(ut)}const Rn=new Z(new tn(4.7,.055,7,64),new lr({color:9160135,transparent:!0,opacity:.5}));Rn.rotation.x=Math.PI/2,Rn.position.y=.075,m.add(Rn);const ti=["ᚠ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ"];ti.forEach((ke,ut)=>{const Ht=ut/ti.length*Math.PI*2;Pu(m,Math.cos(Ht)*4.15,Math.sin(Ht)*4.15,ke,ut%3===0?13215066:7977149,.55,Ht+.3)});for(let ke=0;ke<18;ke++)Zp(m,(fe(ke,530)-.5)*8,.18,(fe(ke,531)-.5)*7,.22+fe(ke,532)*.34,ke%4===0?6121048:5133389,530+ke);for(let ke=0;ke<12;ke++){const ut=B(.12,.12,1.7+fe(ke,535)*2,3811872,1);ut.position.set((fe(ke,536)-.5)*8,.11,(fe(ke,537)-.5)*8),ut.rotation.y=fe(ke,538)*Math.PI,ut.rotation.z=(fe(ke,539)-.5)*.2,m.add(ut)}Pe(m,"hunterCamp","Забытая стоянка"),be.push(m),O(_,A,1.9,.1)},Qp=(_,A,m,C,j,k)=>{const K=new Ye;K.position.set(_,V(_,A),A);const te=k===1?7442040:k===2?7897226:9074270,ve=oe(4412730,1),J=new Z(new tn(m,.07,8,64),new at({color:te,emissive:te,emissiveIntensity:.65,transparent:!0,opacity:.42}));J.rotation.x=Math.PI/2,J.position.y=.045,K.add(J);const Me=Math.floor(m/1.7);for(let me=0;me<Me;me++){const Qe=fe(me,_*11+A)*Math.PI*2,it=m*.35+fe(me,A*17)*m*.45;Zp(K,Math.cos(Qe)*it,.2,Math.sin(Qe)*it,.34+fe(me,33)*.32,k===1?5266514:k===2?5265243:5720636,800+me)}if(k===1){for(let me=0;me<8;me++){const Qe=new Z(new Ct(.34+fe(me,600)*.25,7,5),ve);Qe.scale.y=.35,Qe.position.set((fe(me,601)-.5)*m,.16,(fe(me,602)-.5)*m),K.add(Qe)}for(let me=0;me<6;me++)Pu(K,(fe(me,603)-.5)*m*.9,(fe(me,604)-.5)*m*.9,["ᛉ","ᚱ","ᚦ","ᚨ","ᛟ","ᚠ"][me],7907492,.42,fe(me,605)*Math.PI)}if(k===2){const me=new Z(new Dt(1.45,2,4.6,9),new at({map:ee,color:5917240,roughness:1}));me.position.set(0,2.25,0),me.rotation.z=.08,K.add(me);const Qe=new Z(new Ct(.72,10,8),new lr({color:1513236}));Qe.scale.set(1,.8,.45),Qe.position.set(0,1.75,1.32),K.add(Qe);for(let it=0;it<5;it++){const ht=B(.22,.24,2.8+fe(it,610)*1.7,4864301,1);ht.position.set((fe(it,611)-.5)*2,3.7+fe(it,612)*1.8,(fe(it,613)-.5)*1.7),ht.rotation.y=fe(it,614)*Math.PI,ht.rotation.z=(fe(it,615)-.5)*.65,K.add(ht)}Pu(K,0,0,"ᚦ",13677933,.95,.15)}Pe(K,C,j),be.push(K)};ix(70,18),Qp(67,49,9.5,"deepGrove","Глубокая роща",1),Qp(52,7,7.5,"fallenAsh","Поверженный ясень",2);const En=75,vn=30,Zt=new Ye;Zt.position.set(En,V(En,vn),vn);const rx=oe(5986899,1),em=B(7.8,.42,5.8,5591885,1);em.position.y=.22,Zt.add(em);const tm=B(7.4,2.8,.3,6439727,1);tm.position.set(0,1.4,-2.7),Zt.add(tm);const nm=B(.3,2.8,5.4,6439727,1);nm.position.set(-3.7,1.4,0),Zt.add(nm);const im=B(.3,2.8,5.4,6439727,1);im.position.set(3.7,1.4,0),Zt.add(im);const rm=B(2.55,2.8,.3,6439727,1);rm.position.set(-2.43,1.4,2.7),Zt.add(rm);const sm=B(2.55,2.8,.3,6439727,1);sm.position.set(2.43,1.4,2.7),Zt.add(sm);const om=B(2.3,.72,.3,6439727,1);om.position.set(0,2.44,2.7),Zt.add(om);const am=B(.16,2.18,.34,2826523,1);am.position.set(-.66,1.28,2.72),Zt.add(am);const lm=B(.16,2.18,.34,2826523,1);lm.position.set(.66,1.28,2.72),Zt.add(lm);const cm=B(1.48,.16,.34,2826523,1);cm.position.set(0,2.34,2.72),Zt.add(cm);const Ys=new Ye;Ys.position.set(-.57,0,2.72),Zt.add(Ys);const um=B(1.14,2.05,.12,3154457,1);um.position.set(.57,1.28,0),Ys.add(um);const dm=new Z(new Ct(.08,8,6),oe(11831883,1));dm.position.set(.86,1.25,.1),Ys.add(dm);const sx=new at({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const _ of[-2.35,2.35]){const A=B(1.25,1,.12,2826523,1);A.position.set(_,1.72,2.78),Zt.add(A);const m=new Z(new xn(.98,.72,.06),sx);m.position.set(_,1.72,2.86),Zt.add(m);const C=B(.07,.78,.1,2826523,1);C.position.set(_,1.72,2.91),Zt.add(C);const j=B(1.08,.07,.1,2826523,1);j.position.set(_,1.72,2.91),Zt.add(j)}const fm=new at({map:We,color:2697767,roughness:.98,side:Yn}),ia=new Z(new Br(4.25,6.25),fm),ra=new Z(new Br(4.25,6.25),fm);ia.rotation.x=Math.PI/2,ra.rotation.x=Math.PI/2,ia.rotation.z=.62,ra.rotation.z=-.62,ia.position.set(-1.02,3.95,0),ra.position.set(1.02,3.95,0),Zt.add(ia,ra);const Lu=B(.22,.22,6.45,2695965,1);Lu.position.y=4.75,Zt.add(Lu);const Du=new Z(new xn(.48,1.35,.48),rx);Du.position.set(1.55,4.8,-.65),Zt.add(Du);const Iu=B(.62,.1,.62,3420461,1);Iu.position.set(1.55,5.48,-.65),Zt.add(Iu);const hm=B(2.35,.18,1,6636845,1);hm.position.set(0,.62,3.15),Zt.add(hm);const pm=B(1.55,.16,.48,5849131,1);pm.position.set(0,.3,3.58),Zt.add(pm),Pe(Zt,"heroHome","Домик героя"),be.push(Zt),Ve(En,vn-2.72,7.4,.3,0,.05),Ve(En-3.72,vn,.3,5.45,0,.05),Ve(En+3.72,vn,.3,5.45,0,.05),Ve(En-2.43,vn+2.72,2.55,.3,0,.05),Ve(En+2.43,vn+2.72,2.55,.3,0,.05);const en=new Ye;en.position.set(En,V(En,vn),vn),en.visible=!1;const mm=B(7,.16,5,4928548,1);mm.position.y=.5,en.add(mm);const gm=B(7,2.65,.18,4139808,1);gm.position.set(0,1.8,-2.45),en.add(gm);const vm=B(.18,2.65,4.9,4139808,1);vm.position.set(-3.45,1.8,0),en.add(vm);const _m=B(.18,2.65,4.9,4139808,1);_m.position.set(3.45,1.8,0),en.add(_m);const xm=B(2.35,2.65,.18,4139808,1);xm.position.set(-2.42,1.8,2.45),en.add(xm);const ym=B(2.35,2.65,.18,4139808,1);ym.position.set(2.42,1.8,2.45),en.add(ym);const Mm=B(2.5,.04,2.1,7162673,1);Mm.position.set(-.15,.6,.25),en.add(Mm);const Sm=B(1.65,.65,2.15,4008478,1);Sm.position.set(-2.15,.88,-1.25),en.add(Sm);const wm=B(1.48,.12,1.35,7033152,1);wm.position.set(-2.15,1.27,-.92),en.add(wm);const Em=B(1.28,.18,.46,11903114,1);Em.position.set(-2.15,1.38,-1.95),en.add(Em);const Tm=B(1.65,.12,1.05,5255969,1);Tm.position.set(.85,1.15,-.15),en.add(Tm);for(const[_,A]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const m=B(.1,.7,.1,3679515,1);m.position.set(_,.72,A),en.add(m)}const Am=B(1.25,.8,.72,5978660,1);Am.position.set(2.1,.95,-1.7),en.add(Am);const bm=B(1.9,.14,.45,5978660,1);bm.position.set(1.35,2,-2.25),en.add(bm);for(const _ of[.75,1.35,1.95]){const A=new Z(new Dt(.08,.1,.35,8),oe(7304016,1));A.position.set(_,2.24,-2.22),en.add(A)}const Cm=B(1.35,.55,.7,5920078,1);Cm.position.set(2.15,.78,.95),en.add(Cm);const Rm=new Z(new Pn(.28,.72,8),new at({color:16744744,emissive:16731402,emissiveIntensity:4}));Rm.position.set(2.15,1.42,.95),en.add(Rm);const Pm=new co(16747068,2.2,8,2);Pm.position.set(2.15,1.7,.95),en.add(Pm),Pe(en,"heroHomeInterior","Дом героя — внутри"),be.push(en);const os=new Ye;os.position.set(En,V(En,vn),vn);const Nu=new Z(new tn(6.2,.055,7,48),new at({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));Nu.rotation.x=Math.PI/2,Nu.position.y=.035,os.add(Nu);for(const[_,A]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const m=B(.18,1,.18,4797735,1);m.position.set(_,.5,A),os.add(m)}for(const _ of[-2.4,2.9]){const A=B(10.2,.12,.12,6308139,1);A.position.set(0,.59,_),os.add(A)}const ox=oe(6906972,1);for(let _=0;_<7;_++){const A=new Z(new Dt(.32,.4,.12,7),ox);A.position.set(0,.08,4.1+_*.72),A.rotation.y=_*.4,os.add(A)}vt(En-2.4,vn+4.8,.48).scale.setScalar(.72),Pe(os,"heroHomeYard","Двор домика героя"),be.push(os),vt(70,18,.75).scale.setScalar(.72);const Lm=new Z(new Dt(.65,.8,.7,7),oe(5327426,1));Lm.position.set(70,V(70,18)+.35,16.5),S.add(Lm);for(const[_,A]of[[68,20],[72,20],[68,16],[72,16]]){const m=B(.16,1.15,.16,4797735,1);m.position.set(_,V(_,A)+.57,A),S.add(m)}const Ml=new Ye;Ml.position.set(52,V(52,7),7);const Uu=new Z(new Dt(.5,.62,7,8),new lo({map:ee,color:4995371}));Uu.rotation.z=Math.PI/2,Uu.position.y=.5,Ml.add(Uu);const Fu=new Z(new Dt(.53,.53,.12,12),oe(7693389,1));Fu.rotation.z=Math.PI/2,Fu.position.set(3.5,.5,0),Ml.add(Fu),S.add(Ml);for(let _=0;_<7;_++){const A=new Z(new fn(.14,0),oe(6913394,1)),m=_/7*Math.PI*2;A.position.set(67+Math.cos(m)*4,.12+V(67+Math.cos(m)*4,49+Math.sin(m)*4),49+Math.sin(m)*4),S.add(A)}for(let _=0;_<95;_++){const A=fe(_,77)*Math.PI*2,m=58+fe(_,91)*32,C=Math.cos(A)*m,j=Math.sin(A)*m+2,K=[[Bt,Wt,11],[39,70,13],[-64,36,11],[-43,62,10],[30,53,12],[61,78,10],[-15,58,7],[46,43,7],[-48,72,7],[70,18,11],[75,30,13],[67,49,12],[52,7,10]].some(([te,ve,J])=>Math.hypot(C-te,j-ve)<J);Math.abs(C+57)>9&&!K&&rs(C,j,.78+fe(_,13)*.82)}zt(-10,18,1.55,!1),zt(13,24,1.7,!1),zt(-31,-12,2.15,!0);for(let _=0;_<110;_++){const A=fe(_,701)*Math.PI*2,m=15+fe(_,702)*50,C=Math.cos(A)*m,j=Math.sin(A)*m+3;if(Math.abs(C)<10&&Math.abs(j)<16)continue;const k=new Ye;k.position.set(C,V(C,j),j);for(let K=0;K<3;K++){const te=new Z(new Pn(.025,.38+fe(K,_)*.28,4),new lo({color:K===1?5466175:4282935}));te.position.set((K-1)*.09,.18,(fe(K*3,_)-.5)*.12),te.rotation.z=(K-1)*.22,k.add(te)}S.add(k)}for(let _=0;_<80;_++){const A=-88+fe(_,101)*176,m=-88+fe(_,111)*176;if(Math.hypot(A,m+2)>30){const C=new Z(new Pn(.08,.55+fe(_,121)*.7,5),new lo({color:4941888}));C.position.set(A,V(A,m)+.3,m),S.add(C)}}const as=new Ye;as.position.set(29,V(29,25),25),as.userData={id:"tower",label:"Сторожевая башня"};for(const _ of[-2,2])for(const A of[-2,2]){const m=B(.35,7,.35,3942685,1);m.position.set(_,3.5,A),as.add(m)}const Dm=B(5,.35,5,6833965,1);Dm.position.y=5.8,as.add(Dm);const Im=new Z(new Pn(3.8,2.7,4),oe(2696482,1));Im.position.y=8,as.add(Im),Pe(as,"tower","Сторожевая башня"),be.push(as),Ve(29,25,4.8,4.8,0,.08);const sa=(_,A,m,C,j,k)=>{const K=new Ye;K.userData={id:m,label:C,phase:k,baseX:_,baseZ:A};const te=new Z(new Wn(.32,.78,4,8),oe(j,.9));te.position.y=.85,K.add(te);const ve=new Z(new Ct(.25,12,8),oe(13210736,.9));ve.position.y=1.58,K.add(ve);const J=B(.7,.9,.15,2565407,1);J.position.set(0,.82,-.27),K.add(J),K.position.set(_,V(_,A),A),Pe(K,m,C),be.push(K),cn.push(K)};sa(9,-8,"elder","Старейшина",7558719,.4),sa(-6,-3,"blacksmith","Кузнец",6044459,1.5),sa(21,1,"hunter","Охотник",4215359,2.4),sa(5,10,"villager","Житель Мидгарда",5858125,3.4),sa(-16,4,"villager2","Житель деревни",6638394,4.2);const ax=new lr({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),Ou=new Ye;for(let _=0;_<34;_++){const A=new Z(new Ct(.9+fe(_,810)*2.2,8,6),ax);A.position.set(-88+fe(_,811)*176,1.8+fe(_,812)*2.2,-72+fe(_,813)*144),Ou.add(A)}S.add(Ou);const ls=dA(t);S.add(ls);const Qi=ls.userData.anim,Nm=new M2,ku=new $e,Um=_=>{var C,j,k,K;if((j=(C=_.target)==null?void 0:C.closest)!=null&&j.call(C,".mid3d-ui"))return;const A=H.domElement.getBoundingClientRect();ku.x=(_.clientX-A.left)/A.width*2-1,ku.y=-((_.clientY-A.top)/A.height)*2+1,Nm.setFromCamera(ku,N);const m=Nm.intersectObjects(be,!0)[0];if(m){let te=m.object;for(;te.parent&&!((k=te.userData)!=null&&k.id);)te=te.parent;(K=te.userData)!=null&&K.id&&e(te.userData.id)}};H.domElement.addEventListener("pointerup",Um);const lx=_=>{g.current=_,v(_),l(""),en.visible=_,ia.visible=!_,ra.visible=!_,Lu.visible=!_,Du.visible=!_,Iu.visible=!_,_?(o.current.x=En,o.current.z=vn+.95,u.current.x=0,u.current.z=-1,Ys.rotation.y=-Math.PI/2):(o.current.x=En,o.current.z=vn+3.75,u.current.x=0,u.current.z=1,Ys.rotation.y=0),ls.position.set(o.current.x,V(o.current.x,o.current.z)+.04,o.current.z)};x.current=lx;const cx=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:18,z:15,r:4.8},{id:"norns",label:"Прядильня норн",x:-25,z:43,r:5.4},{id:"rune",label:"Древний камень Феху",x:27,z:57,r:4.5},{id:"ritual",label:"Круг Силы",x:-43,z:62,r:6.8},{id:"port",label:"Речной причал",x:-46,z:-15,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-4,z:69,r:7.5},{id:"forestEvent",label:n?"Камень Трёх Нитей — место выбора":"Камень Трёх Нитей",x:xl,z:yl,r:4.8},{id:"forestCache",label:"Забытый тайник",x:-15,z:58,r:4.2},{id:"forestWhisper",label:"Камень Шёпота",x:46,z:43,r:4.2},{id:"forestThread",label:"Разорванная нить",x:-48,z:72,r:4.2},{id:"runefield",label:"Поле Рун",x:39,z:70,r:8},{id:"oldfarm",label:"Старый хутор",x:-64,z:36,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:30,z:53,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:61,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:70,z:18,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:67,z:49,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:52,z:7,r:7.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],Fm=()=>{const _=Math.max(1,E.clientWidth),A=Math.max(1,E.clientHeight);N.aspect=_/A,N.updateProjectionMatrix(),H.setSize(_,A,!1)};Fm();const Om=new ResizeObserver(Fm);Om.observe(E);let zu=0,km=performance.now();const zm=_=>{const A=Math.min(.05,(_-km)/1e3);km=_;const m=o.current,C=Math.hypot(m.dx,m.dz);if(C>.05){const J=6.2*A;Ke(m,m.x+m.dx/C*J,m.z+m.dz/C*J),ls.rotation.y=Math.atan2(m.dx,m.dz),u.current.x=m.dx/C,u.current.z=m.dz/C,d(!0)}else d(!1);const j=V(m.x,m.z);if(ls.position.set(m.x,j+.04,m.z),Qi){const J=_*.011+Qi.phase,Me=C>.05?Math.sin(J)*.58:0,me=C>.05?Math.sin(J+Math.PI)*.42:0;Qi.legL.rotation.x=Me,Qi.legR.rotation.x=-Me,Qi.armL.upper.rotation.x=me,Qi.armR.upper.rotation.x=-me,Qi.armL.elbow.rotation.x=-Math.abs(me)*.35,Qi.armR.elbow.rotation.x=-Math.abs(me)*.35,Qi.weapon.rotation.z=-.12+(C>.05?Math.sin(J)*.035:0)}const k=u.current,K=g.current?new z(m.x-k.x*1,j+3.65,m.z-k.z*1):new z(m.x-k.x*2,j+7.2,m.z-k.z*2+11.8);N.position.lerp(K,g.current?.09:.055),N.lookAt(m.x+(g.current?k.x*.9:k.x*1.9),j+(g.current?1.25:1.2),m.z+(g.current?k.z*.9:k.z*1.9));let te="",ve="";if(g.current)m.z>vn+1.72&&(te="Дверь — выйти из дома",ve="heroHomeExit");else for(const J of cx)if(Math.hypot(m.x-J.x,m.z-J.z)<J.r){te=J.label,ve=J.id;break}l(te?`${te}|${ve}`:""),Ne.forEach(J=>{const Me=.72+.28*Math.sin(_*.0016+J.phase);J.mesh.scale.set(Me,Me*.42,Me);const me=J.mesh.material;me.opacity=.055+.055*(.5+.5*Math.sin(_*.0016+J.phase))}),mt.forEach(J=>{J.light.intensity=2+Math.sin(_*.012+J.phase)*.5,J.flame.scale.y=.9+Math.sin(_*.009+J.phase)*.12}),Ou.children.forEach((J,Me)=>{J.position.x+=Math.sin(_*12e-5+Me)*.003,J.position.z+=Math.cos(_*1e-4+Me)*.002}),F.forEach((J,Me)=>{var ht,St;if(J.kind==="deer"){const un=J.g.position.x-ls.position.x,dn=J.g.position.z-ls.position.z,Ut=Math.hypot(un,dn);if(Ut<11){const jt=((ht=J.g.userData)==null?void 0:ht.legJoints)||[],Xt=_*.014*(J.speed||1);for(let Ht=0;Ht<4;Ht++){const _n=jt[Ht*2],ci=jt[Ht*2+1];_n&&(_n.rotation.z=Math.sin(Xt+Ht*Math.PI)*.1),ci&&(ci.rotation.z=Math.max(0,Math.sin(Xt+Ht*Math.PI))*-.18)}const Pt=Math.max(.001,Ut),Lt=Ut<5.5?.115:.075,an=J.g.position.x+un/Pt*Lt,Rn=J.g.position.z+dn/Pt*Lt,ti=an-30,ke=Rn-53;if(Math.hypot(ti,ke)<17)J.g.position.set(an,V(an,Rn),Rn);else{const Ht=Math.atan2(ke,ti),_n=30+Math.cos(Ht)*16,ci=53+Math.sin(Ht)*10;J.g.position.set(_n,V(_n,ci),ci)}J.g.rotation.y=Math.atan2(dn,un),J.g.position.y+=Math.sin(_*.008+Me)*.025;return}}const me=_*.00105*J.speed+J.phase,Qe=J.x+Math.cos(me)*J.r,it=J.z+Math.sin(me*.83)*J.r*.62;if(J.g.position.set(Qe,V(Qe,it),it),J.g.rotation.y=Math.atan2(Math.cos(me*.83),-Math.sin(me)),J.kind==="deer"){const un=((St=J.g.userData)==null?void 0:St.legJoints)||[],dn=_*.014*(J.speed||1);for(let Ut=0;Ut<4;Ut++){const jt=un[Ut*2],Xt=un[Ut*2+1];jt&&(jt.rotation.z=Math.sin(dn+Ut*Math.PI)*.1),Xt&&(Xt.rotation.z=Math.max(0,Math.sin(dn+Ut*Math.PI))*-.18)}J.g.position.y+=Math.sin(_*.006+Me)*.025,J.g.rotation.x=Math.sin(_*.004+J.phase)*.018}}),cn.forEach((J,Me)=>{const me=J.userData.phase||0,Qe=J.userData.baseX,it=J.userData.baseZ,ht=Qe+Math.sin(_*28e-5+me)*1.6,St=it+Math.cos(_*22e-5+me)*1.1;J.position.set(ht,V(ht,St),St),J.rotation.y=Math.sin(_*4e-4+me)*.5}),H.render(S,N),zu=requestAnimationFrame(zm)};return zu=requestAnimationFrame(zm),()=>{cancelAnimationFrame(zu),Om.disconnect(),H.domElement.removeEventListener("pointerup",Um),Ne.forEach(_=>{_.mesh.geometry.dispose(),_.mesh.material.dispose()}),U.dispose(),Ge.dispose(),We.dispose(),H.dispose(),S.traverse(_=>{var A,m,C,j;_.isMesh&&((m=(A=_.geometry)==null?void 0:A.dispose)==null||m.call(A),Array.isArray(_.material)?_.material.forEach(k=>{var K;return(K=k.dispose)==null?void 0:K.call(k)}):(j=(C=_.material)==null?void 0:C.dispose)==null||j.call(C))}),H.domElement.remove(),x.current=null}},[t.id,e,n]);const M=E=>{const S=r.current,N=s.current;if(!S||!N)return;const H=S.getBoundingClientRect(),Q=H.left+H.width/2,se=H.top+H.height/2,le=48;let V=E.clientX-Q,Y=E.clientY-se;const U=Math.hypot(V,Y);U>le&&(V=V/U*le,Y=Y/U*le),N.style.transform=`translate(${V}px,${Y}px)`,o.current.dx=V/le,o.current.dz=Y/le},R=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},P=E=>{var Y,U;const S=r.current;if(!S)return;const N=E.target;if((Y=N.closest)!=null&&Y.call(N,".mid3d-action")||(U=N.closest)!=null&&U.call(N,".mid3d-interact"))return;const H=S.getBoundingClientRect(),Q=26;E.clientX>=H.left-Q&&E.clientX<=H.right+Q&&E.clientY>=H.top-78&&E.clientY<=H.bottom+26&&(E.currentTarget.setPointerCapture(E.pointerId),M(E))},L=E=>{E.currentTarget.hasPointerCapture(E.pointerId)&&M(E)},I=E=>{E.currentTarget.hasPointerCapture(E.pointerId)&&E.currentTarget.releasePointerCapture(E.pointerId),R()};return G.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:P,onPointerMove:L,onPointerUp:I,onPointerCancel:I,onContextMenu:E=>E.preventDefault(),children:[G.jsxs("div",{className:"mid3d-ui mid3d-top",children:[G.jsxs("div",{className:"mid3d-pill",children:[G.jsx("b",{children:"МИДГАРД"}),G.jsx("span",{children:"Деревня • река • лес • святилища"})]}),G.jsxs("div",{className:"mid3d-pill",children:[G.jsx("b",{children:"ᛟ"}),G.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),p&&!n&&G.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[G.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),G.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{y(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{y(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{y(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),p&&n&&G.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[G.jsx("b",{children:"Камень Трёх Нитей"}),G.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>y(!1),children:"Продолжить путь"})]}),f&&G.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[G.jsx("b",{children:"🜂 Круг Силы"}),G.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),G.jsx("button",{onPointerDown:E=>E.stopPropagation(),onClick:()=>{h(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!f&&!p&&(()=>{const[E,S]=a.split("|"),N=S==="heroHome"||S==="heroHomeExit";return G.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[G.jsx("b",{children:E}),G.jsx("span",{children:N?S==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),G.jsx("button",{onPointerDown:H=>H.stopPropagation(),onClick:()=>{var H,Q;S==="ritual"?h(!0):S==="forestEvent"?y(!0):S==="heroHome"?(H=x.current)==null||H.call(x,!0):S==="heroHomeExit"?(Q=x.current)==null||Q.call(x,!1):e(S)},children:N?S==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),G.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:G.jsx("div",{className:"mid3d-knob",ref:s})}),G.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:E=>E.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),G.jsx("div",{className:"mid3d-ui mid3d-hint",children:w?c?"Ты внутри дома":"Дом героя • отдых • сундук • выход":c?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function hA(){const[t,e]=Mt.useState(()=>rv().hero?{t:"tree"}:{t:"choose"}),[n,i]=Mt.useState(rv),[r,s]=Mt.useState(""),[o,a]=Mt.useState(""),[l,c]=Mt.useState(""),d=Mt.useRef(0),[f,h]=Mt.useState(null),[p,y]=Mt.useState(null),[w,v]=Mt.useState(!1),[u,g]=Mt.useState(0),[x,M]=Mt.useState(0),[R,P]=Mt.useState(0),[L,I]=Mt.useState(""),[E,S]=Mt.useState(!1),[N,H]=Mt.useState(!1),[Q,se]=Mt.useState(""),[le,V]=Mt.useState(.06);Mt.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),Mt.useEffect(()=>{var O,Re,ae,ce;(O=Et==null?void 0:Et.ready)==null||O.call(Et),(Re=Et==null?void 0:Et.expand)==null||Re.call(Et),(ae=Et==null?void 0:Et.setHeaderColor)==null||ae.call(Et,"#0b0f0c"),(ce=Et==null?void 0:Et.setBackgroundColor)==null||ce.call(Et,"#0b0f0c")},[]),Mt.useEffect(()=>{if(!(Et!=null&&Et.BackButton))return;const O=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(Et.BackButton.show(),Et.BackButton.onClick(O)):Et.BackButton.hide(),()=>{var Re,ae;(ae=(Re=Et.BackButton)==null?void 0:Re.offClick)==null||ae.call(Re,O)}},[t,n.hero]),Mt.useEffect(()=>{h(null),y(null),v(!1),se(""),S(!1)},[t]);const Y=O=>{c(O),window.clearTimeout(d.current),d.current=window.setTimeout(()=>c(""),1800)},U=(O="light")=>{var Re,ae,ce,Ke;try{O==="success"?(ae=(Re=Et==null?void 0:Et.HapticFeedback)==null?void 0:Re.notificationOccurred)==null||ae.call(Re,"success"):(Ke=(ce=Et==null?void 0:Et.HapticFeedback)==null?void 0:ce.impactOccurred)==null||Ke.call(ce,"light")}catch{}},ee=O=>e(O),ie=O=>{U(),e({t:"realm",id:O.id})},Ee=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),Fe=()=>{const O=Ee();if(O<=0){Y("Дозор только начался — искры ещё копятся.");return}i(Re=>({...Re,sparks:Re.sparks+O,watch:Date.now()})),U("success"),Y("Дозор завершён: +"+O+" ✨")},ct=()=>{if(n.gift===Ma())return;const Re=(n.gift?Math.round((Date.parse(Ma())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,ae=$d[Re-1];i(ce=>({...ce,sparks:ce.sparks+ae,gift:Ma(),streak:Re})),U("success"),Y("Дар Древа, день "+Re+": +"+ae+" ✨")},Pe=()=>{!r||!o||(i(O=>({...O,hero:{id:r,name:o}})),U("success"),Y("Путь начинается, "+o+"!"),e({t:"tree"}))},oe=n.hero?Kd.find(O=>O.id===n.hero.id):null,B=O=>Math.floor(Math.random()*O),he=O=>n.trials.filter(Re=>Re.startsWith(O+":")).length,Ie=O=>{if(n.artifacts.includes(O.id)){Y("Мир покорён. Артефакт хранится в листе героя.");return}U(),e({t:"trial",id:O.id})},et=(O,Re,ae)=>{const ce=Re===2;i(Ke=>({...Ke,sparks:Ke.sparks+ae+(ce?30:0),trials:[...Ke.trials,O+":"+Re],artifacts:ce?[...Ke.artifacts,O]:Ke.artifacts})),ce&&(U("success"),Y("Мир пройден! Артефакт: "+Zd[O]))},be=(O,Re)=>{if(f!==null)return;const ae=he(O),ce=Jd[O][ae];if(Re===ce.c){h(Re),U("success");const Ke=12+ae*3+((oe==null?void 0:oe.id)==="dwarf"?6:0);Y("Верно! Сундук хозяина: +"+Ke+" ✨"),et(O,ae,Ke);return}if(n.powers.includes("mimirEye")){h(ce.c),i(tt=>({...tt,powers:tt.powers.filter(D=>D!=="mimirEye")}));const Ke=8+ae*2;U("success"),Y("Око Мимира раскрыло истину. Ответ исправлен. +"+Ke+" ✨"),et(O,ae,Ke);return}if(n.powers.includes("nornThread")){h(Re),i(tt=>({...tt,powers:tt.powers.filter(D=>D!=="nornThread")}));const Ke=6+ae*2;U("success"),Y("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+Ke+" ✨"),et(O,ae,Ke);return}h(Re),U(),I(Sa[O].name+" мрачнеет: «Что ж — пусть решит сталь!»")},mt=O=>{const Re=he(O),ae=Jd[O][Re],ce=ae.a.findIndex((Ke,tt)=>tt!==ae.c&&tt!==p);y(ce),v(!0),U(),Y("Шёпот ветров уносит один ответ...")},cn=O=>{const Re=Sa[O],ae=n.powers.includes("ashBreath");g(Re.hp),M(oe.hp+(ae?25:0)),P(oe.en+(ae?2:0)),se(""),S(!1),H(!1),I(ae?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":Re.name+" поднимает оружие!"),ae&&i(ce=>({...ce,powers:ce.powers.filter(Ke=>Ke!=="ashBreath")})),e({t:"fight",id:O})},F=(O,Re)=>{if(Q)return;const ae=Sa[O],ce=he(O);let Ke=0,tt="",D=R,T=E;if(Re==="hit"&&(Ke=oe.str+B(4),n.powers.includes("fireOath")&&(Ke+=5,i(Ne=>({...Ne,powers:Ne.powers.filter(_e=>_e!=="fireOath")})),tt="Огненный обет! "),oe.id==="berserk"&&x<=oe.hp/2&&(Ke*=2,tt+="Медвежья ярость! "),tt+="Ты бьёшь: "+oe.weapon+" — −"+Ke+" хозяину."),Re==="rune"){if(R<4){Y("Мало энергии для заклинания!");return}D=R-4,Ke=oe.en+2+B(5),tt="Руническое заклинание вспыхивает: −"+Ke+" хозяину."}Re==="shield"&&(T=!0,tt="Ты поднимаешь щит — удар ослабнет.");const $=u-Ke;if($<=0){g(0),P(D),se("win");const Ne=8+ce*2;I("Хозяин повержен! Награда: +"+Ne+" ✨"),et(O,ce,Ne);return}let de=ae.atk+B(3),ge="";T&&(de=Math.ceil(de*.3),ge=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(de=Math.ceil(de*.65),i(Ne=>({...Ne,powers:Ne.powers.filter(_e=>_e!=="iceOath")})),ge+=" Ледяной обет сковал удар врага."),oe.id==="dwarf"&&(de=Math.ceil(de*.75));let ue=x;if(oe.id==="viking"&&!N&&ue-de<=0&&(H(!0),de=0,ge=" Крылья бури поглотили смертельный удар!"),ue=ue-de,g($),M(Math.max(0,ue)),P(D),S(!1),ue<=0&&n.powers.includes("yggdrasilCall")){i(Ne=>({...Ne,powers:Ne.powers.filter(_e=>_e!=="yggdrasilCall")})),M(30),I(tt+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(ue<=0){se("lose"),i(Ne=>({...Ne,sparks:Math.max(0,Ne.sparks-10)})),I(tt+" "+ae.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}I(tt+ge+" "+ae.name+" отвечает: −"+de+".")},At=O=>{he(O)>=3||n.artifacts.includes(O)?e({t:"realm",id:O}):e({t:"trial",id:O})},st=O=>O==="tree"?t.t==="tree"||t.t==="realm":t.t===O,Ve=O=>O==="tree"?{t:"tree"}:{t:O};return G.jsxs("div",{className:"app",children:[G.jsx("style",{children:cA}),G.jsxs("div",{className:"hdr",children:[t.t==="tree"&&G.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&G.jsx("button",{className:"back",onClick:()=>ee({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&G.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&G.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&G.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&G.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&G.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&G.jsx("div",{className:"title",children:"⚔ Бой"}),G.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&G.jsxs("div",{className:"scroll choose-screen",children:[G.jsxs("div",{className:"card center choose-intro",children:[G.jsx("div",{className:"big",children:"ᛉ"}),G.jsx("div",{className:"qhead2",children:"Выбери героя"}),G.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),Kd.map(O=>G.jsxs("button",{className:"hcard"+(r===O.id?" on":""),onClick:()=>{s(O.id),a(""),U()},children:[G.jsx("span",{className:"hface",style:{borderColor:O.color,color:O.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:G.jsx(Lr,{name:O.img,className:"himg"})}),G.jsxs("span",{className:"hinfo",children:[G.jsx("span",{className:"hname",style:{color:O.color},children:O.race}),G.jsxs("span",{className:"hab",children:["🌀 ",O.ability,": ",O.abilityDesc]}),G.jsxs("span",{className:"hst",children:["⚔ ",O.str," • ✨ ",O.en," • ❤ ",O.hp]}),G.jsxs("span",{className:"hw",children:["🗡 ",O.weapon]})]})]},O.id)),r&&G.jsxs("div",{className:"card",children:[G.jsx("div",{className:"qhead2",children:"Имя героя"}),G.jsx("div",{className:"chips",children:(Kd.find(O=>O.id===r).gender==="f"?aA:lA).map(O=>G.jsx("button",{className:"chip"+(o===O?" on":""),onClick:()=>{a(O),U()},children:O},O))})]}),G.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:Pe,children:"Вступить на путь"})]}),t.t==="tree"&&G.jsxs("div",{className:"maparea",children:[G.jsx("div",{className:"mapwrap",children:G.jsxs("div",{className:"mapcanvas",children:[G.jsx(Lr,{name:"tree",className:"mapimg"}),cc.map(O=>G.jsxs("button",{className:"marker",style:{left:O.x+"%",top:O.y+"%"},onClick:()=>ie(O),children:[G.jsxs("div",{className:"amulet-wrap",children:[G.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${O.glow}, transparent 70%)`}}),G.jsx("div",{className:"amulet-ring",style:{borderColor:O.color}}),G.jsx("div",{className:"amulet-core",style:{borderColor:O.color,color:O.color,background:`linear-gradient(135deg, ${O.dark}, #0a0a0a)`},children:O.runeSym})]}),G.jsx("span",{className:"mname",style:{color:O.color,borderColor:O.glow},children:O.name})]},O.id))]})}),G.jsx("div",{className:"fadeT"}),G.jsx("div",{className:"fadeB"}),G.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&oe&&n.hero&&G.jsxs("button",{className:"herobar",onClick:()=>ee({t:"hero"}),children:[G.jsxs("span",{className:"hbface",style:{borderColor:oe.color,color:oe.color},children:[G.jsx(Lr,{name:oe.img,className:"hbimg"}),oe.sym]}),G.jsxs("span",{className:"hbname",children:[n.hero.name,G.jsx("i",{children:oe.race})]}),G.jsxs("span",{className:"hbst",children:["⚔ ",oe.str," ✨ ",oe.en," ⏳ ",Ee()]}),G.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const O=cc.find(Re=>Re.id===t.id);if(O.id==="midgard"){if(!oe)return null;const Re=ae=>{if(U(),ae==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?Y("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(ce=>({...ce,sparks:ce.sparks+20,done:[...new Set([...ce.done,"forest:present:reward"])]})),U("success"),Y("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):Y("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(ae==="norns"){Y("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(ae==="forge"||ae==="blacksmith"){Y("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(ae==="house"||ae==="elder"){Y("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(ae==="port"){Y("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(ae==="rune"){Y("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(ae==="ashgrove"){Y("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(ae==="runefield"){Y("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(ae==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?Y("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(ce=>({...ce,sparks:ce.sparks+20,done:[...new Set([...ce.done,"forest:past:reward"])]})),U("success"),Y("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):Y("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(ae==="forestCache"){n.done.includes("forest:cache")?Y("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(ce=>({...ce,sparks:ce.sparks+18,done:[...new Set([...ce.done,"forest:cache"])]})),U("success"),Y("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(ae==="forestWhisper"){n.done.includes("forest:whisper")?Y("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(ce=>({...ce,sparks:ce.sparks+16,done:[...new Set([...ce.done,"forest:whisper"])]})),U("success"),Y("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(ae==="forestThread"){n.done.includes("forest:thread")?Y("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(ce=>({...ce,sparks:ce.sparks+22,done:[...new Set([...ce.done,"forest:thread"])]})),U("success"),Y("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(ae==="heroHome"){Y("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(ae==="hunterCamp"){n.done.includes("forest:camp")?Y("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(ce=>({...ce,sparks:ce.sparks+14,done:[...new Set([...ce.done,"forest:camp"])]})),U("success"),Y("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(ae==="deepGrove"){n.done.includes("forest:grove")?Y("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(ce=>({...ce,sparks:ce.sparks+17,done:[...new Set([...ce.done,"forest:grove"])]})),U("success"),Y("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(ae==="fallenAsh"){n.done.includes("forest:ash")?Y("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(ce=>({...ce,sparks:ce.sparks+21,done:[...new Set([...ce.done,"forest:ash"])]})),U("success"),Y("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(ae==="deer"){Y("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(ae==="hoddmimir"){Y("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(ae==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?Y("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(ce=>({...ce,sparks:ce.sparks+20,done:[...new Set([...ce.done,"forest:future:reward"])]})),U("success"),Y("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):Y("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(ae==="forestEvent"){n.done.includes("forest:choice")&&Y("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(ae==="forestEvent:past"){i(ce=>({...ce,sparks:ce.sparks+12,done:[...new Set([...ce.done,"forest:choice","forest:past"])]})),U("success"),Y("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(ae==="forestEvent:present"){i(ce=>({...ce,sparks:ce.sparks+12,done:[...new Set([...ce.done,"forest:choice","forest:present"])]})),U("success"),Y("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(ae==="forestEvent:future"){i(ce=>({...ce,sparks:ce.sparks+12,done:[...new Set([...ce.done,"forest:choice","forest:future"])]})),U("success"),Y("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(ae==="event"){Y("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(ae.startsWith("ritual:")){const ce=ae.slice(7),Ke={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},D={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[ce];if(!D)return;if(n.powers.includes(D)){Y(Ke[ce]+" уже пробуждён. Его сила ждёт своего часа.");return}i($=>({...$,powers:[...new Set([...$.powers,D])],done:[...new Set([...$.done,"ritual:"+ce])]}));const T={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};U("success"),Y(T[ce]);return}};return G.jsx(fA,{h:oe,on:Re,eventDone:n.done.includes("forest:choice")})}return G.jsxs("div",{className:"content",children:[G.jsx(Lr,{name:O.id,className:"bgimg"}),G.jsx("div",{className:"veil"}),G.jsxs("div",{className:"banner",children:[G.jsx("span",{className:"bemoji",children:O.emoji}),G.jsxs("div",{children:[G.jsx("div",{className:"bname",children:O.name}),G.jsx("div",{className:"btag",children:O.tag})]})]}),G.jsxs("button",{className:"gate",onClick:()=>Ie(O),children:[G.jsxs("span",{className:"gwrap",children:[G.jsx("span",{className:"gate-ring",style:{borderColor:O.color}}),G.jsx("span",{className:"gate-core",style:{borderColor:O.color,color:O.color,background:`radial-gradient(circle, ${O.dark}, #050705 75%)`},children:O.runeSym})]}),G.jsx("span",{className:"mname",style:{color:O.color,borderColor:O.glow},children:n.artifacts.includes(O.id)?"Мир покорён":"Врата мира"})]}),G.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const O=cc.find(Ke=>Ke.id===t.id),Re=Sa[O.id],ae=he(O.id);if(ae>=3)return G.jsx("div",{className:"scroll",children:G.jsxs("div",{className:"card center",children:[G.jsx("div",{className:"big",children:"🏺"}),G.jsx("div",{className:"qhead2",children:"Мир покорён!"}),G.jsxs("p",{className:"dim",children:["Артефакт: ",Zd[O.id]]}),G.jsx("button",{className:"btn gold",onClick:()=>ee({t:"realm",id:O.id}),children:"К вратам"})]})});const ce=Jd[O.id][ae];return G.jsxs("div",{className:"scroll",children:[G.jsxs("div",{className:"mhead",children:[G.jsxs("span",{className:"mface",style:{borderColor:O.color,color:O.color},children:[G.jsx(Lr,{name:sv[O.id],className:"himg"}),Re.sym]}),G.jsx("span",{className:"mname2",style:{color:O.color},children:Re.name}),G.jsxs("span",{className:"mtitle",children:[Re.title," • испытание ",ae+1," из 3"]})]}),ae===0&&G.jsxs("div",{className:"greet",children:["«",Re.greet,"»"]}),G.jsxs("div",{className:"cloud",children:[G.jsx("div",{className:"riddle",children:ce.q}),ce.a.map((Ke,tt)=>G.jsx("button",{className:"ans"+(f!==null?tt===ce.c?" good":tt===f?" bad":" off":p===tt?" off":""),onClick:()=>be(O.id,tt),children:Ke},tt)),(oe==null?void 0:oe.id)==="elf"&&!w&&f===null&&G.jsx("button",{className:"btn rune",onClick:()=>mt(O.id),children:"🌀 Шёпот ветров"}),f!==null&&(f===ce.c?G.jsx("button",{className:"btn gold",onClick:()=>At(O.id),children:"Открыть сундук →"}):G.jsx("button",{className:"btn",onClick:()=>cn(O.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const O=cc.find(ae=>ae.id===t.id),Re=Sa[O.id];return G.jsxs("div",{className:"scroll",children:[G.jsxs("div",{className:"duel",children:[G.jsxs("div",{className:"dside",children:[G.jsxs("span",{className:"dface",style:{borderColor:O.color,color:O.color},children:[G.jsx(Lr,{name:sv[O.id],className:"himg"}),Re.sym]}),G.jsx("span",{className:"dname",style:{color:O.color},children:Re.name}),G.jsx("span",{className:"dhp",children:G.jsx("span",{className:"dhpfill",style:{width:Math.max(0,u/Re.hp*100)+"%",background:O.color}})}),G.jsxs("span",{className:"dnum",children:[u,"/",Re.hp]})]}),G.jsx("span",{className:"dvs",children:"⚔"}),G.jsxs("div",{className:"dside",children:[G.jsxs("span",{className:"dface",style:{borderColor:oe.color,color:oe.color},children:[G.jsx(Lr,{name:oe.img,className:"himg"}),oe.sym]}),G.jsx("span",{className:"dname",style:{color:oe.color},children:n.hero.name}),G.jsx("span",{className:"dhp",children:G.jsx("span",{className:"dhpfill",style:{width:Math.max(0,x/oe.hp*100)+"%",background:"#7ee787"}})}),G.jsx("span",{className:"denergy",children:Array.from({length:oe.en}).map((ae,ce)=>G.jsx("span",{className:"pip"+(ce<R?" on":"")},ce))})]})]}),G.jsx("div",{className:"flog",children:L}),!Q&&G.jsxs("div",{className:"acts",children:[G.jsxs("button",{className:"btn gold",onClick:()=>F(O.id,"hit"),children:["⚔ Удар: ",oe.weapon]}),G.jsx("button",{className:"btn rune",onClick:()=>F(O.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),G.jsx("button",{className:"btn shield",onClick:()=>F(O.id,"shield"),children:"🛡 Щит"})]}),Q==="win"&&G.jsx("button",{className:"btn gold",onClick:()=>At(O.id),children:"Забрать награду →"}),Q==="lose"&&G.jsx("button",{className:"btn ghost",onClick:()=>ee({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&oe&&n.hero&&G.jsx("div",{className:"scroll",children:G.jsxs("div",{className:"card center",children:[G.jsx("span",{className:"hface bigface",style:{borderColor:oe.color,color:oe.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:G.jsx(Lr,{name:oe.img,className:"himg"})}),G.jsxs("div",{className:"qhead2",style:{color:oe.color},children:[n.hero.name," • ",oe.race]}),G.jsxs("div",{className:"stats",children:[G.jsxs("div",{className:"stat",children:[G.jsxs("b",{children:["⚔ ",oe.str]}),G.jsx("span",{children:"сила"})]}),G.jsxs("div",{className:"stat",children:[G.jsxs("b",{children:["✨ ",oe.en]}),G.jsx("span",{children:"энергия"})]}),G.jsxs("div",{className:"stat",children:[G.jsxs("b",{children:["❤ ",oe.hp]}),G.jsx("span",{children:"здоровье"})]})]}),G.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",G.jsx("b",{children:oe.weapon})]}),G.jsxs("div",{className:"hrow",children:["🌀 ",oe.ability,": ",oe.abilityDesc]}),G.jsxs("div",{className:"hrow",children:["✨ Искр: ",G.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",G.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&G.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(O=>Zd[O]).join(", ")]})]})}),t.t==="gift"&&(()=>{const O=n.gift===Ma(),ae=(n.gift?Math.round((Date.parse(Ma())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,ce=O?n.streak:ae;return G.jsxs("div",{className:"scroll",children:[G.jsxs("div",{className:"card center",children:[G.jsx("div",{className:"big",children:"🎁"}),G.jsx("div",{className:"qhead2",children:"Дар Древа"}),G.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),G.jsx("div",{className:"days",children:$d.map((Ke,tt)=>G.jsxs("span",{className:"day"+(tt+1===ce?" on":tt+1<ce&&O?" done":""),children:[G.jsx("b",{children:Ke}),"день ",tt+1]},tt))}),O?G.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):G.jsxs("button",{className:"btn gold",onClick:ct,children:["Забрать дар +",$d[ae-1]," ✨"]})]}),G.jsxs("div",{className:"card center",children:[G.jsx("div",{className:"big",children:"⏳"}),G.jsx("div",{className:"qhead2",children:"Дозор героя"}),G.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),G.jsxs("button",{className:"btn gold",onClick:Fe,children:["Завершить дозор · +",Ee()," ✨"]})]})]})})(),t.t==="hall"&&G.jsx("div",{className:"scroll",children:G.jsxs("div",{className:"card center",children:[G.jsx("div",{className:"big",children:"🏛️"}),G.jsx("div",{className:"qhead2",children:"Чертог путника"}),G.jsxs("div",{className:"stats",children:[G.jsxs("div",{className:"stat",children:[G.jsxs("b",{children:["✨ ",n.sparks]}),G.jsx("span",{children:"Искр"})]}),G.jsxs("div",{className:"stat",children:[G.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),G.jsx("span",{children:"артефакты"})]})]}),G.jsxs("div",{className:"rank",children:["🏆 Ранг: ",oA(n.sparks)]}),n.hero&&oe&&G.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",oe.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&G.jsx("div",{className:"nav",children:sA.map(O=>G.jsxs("button",{className:"navbtn"+(st(O.id)?" on":""),onClick:()=>ee(Ve(O.id)),children:[G.jsx("span",{className:"ic",children:O.ic}),O.t]},O.id))}),l&&G.jsx("div",{className:"toast",children:l})]})}x1(document.getElementById("root")).render(G.jsx(hA,{}));
