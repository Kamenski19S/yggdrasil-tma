(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var qg={exports:{}},$c={},$g={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ja=Symbol.for("react.element"),$x=Symbol.for("react.portal"),Kx=Symbol.for("react.fragment"),Zx=Symbol.for("react.strict_mode"),Jx=Symbol.for("react.profiler"),Qx=Symbol.for("react.provider"),e1=Symbol.for("react.context"),t1=Symbol.for("react.forward_ref"),n1=Symbol.for("react.suspense"),i1=Symbol.for("react.memo"),r1=Symbol.for("react.lazy"),Rm=Symbol.iterator;function s1(t){return t===null||typeof t!="object"?null:(t=Rm&&t[Rm]||t["@@iterator"],typeof t=="function"?t:null)}var Kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zg=Object.assign,Jg={};function No(t,e,n){this.props=t,this.context=e,this.refs=Jg,this.updater=n||Kg}No.prototype.isReactComponent={};No.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};No.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qg(){}Qg.prototype=No.prototype;function Rh(t,e,n){this.props=t,this.context=e,this.refs=Jg,this.updater=n||Kg}var Ph=Rh.prototype=new Qg;Ph.constructor=Rh;Zg(Ph,No.prototype);Ph.isPureReactComponent=!0;var Pm=Array.isArray,ev=Object.prototype.hasOwnProperty,Lh={current:null},tv={key:!0,ref:!0,__self:!0,__source:!0};function nv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ev.call(e,i)&&!tv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ja,type:t,key:s,ref:o,props:r,_owner:Lh.current}}function o1(t,e){return{$$typeof:Ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ja}function a1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lm=/\/+/g;function Lu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?a1(""+t.key):e.toString(36)}function nc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ja:case $x:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Lu(o,0):i,Pm(r)?(n="",t!=null&&(n=t.replace(Lm,"$&/")+"/"),nc(r,e,n,"",function(c){return c})):r!=null&&(Dh(r)&&(r=o1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Lm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Lu(s,a);o+=nc(s,e,n,l,r)}else if(l=s1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Lu(s,a++),o+=nc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pl(t,e,n){if(t==null)return t;var i=[],r=0;return nc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function l1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Fn={current:null},ic={transition:null},c1={ReactCurrentDispatcher:Fn,ReactCurrentBatchConfig:ic,ReactCurrentOwner:Lh};function iv(){throw Error("act(...) is not supported in production builds of React.")}gt.Children={map:pl,forEach:function(t,e,n){pl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pl(t,function(){e++}),e},toArray:function(t){return pl(t,function(e){return e})||[]},only:function(t){if(!Dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};gt.Component=No;gt.Fragment=Kx;gt.Profiler=Jx;gt.PureComponent=Rh;gt.StrictMode=Zx;gt.Suspense=n1;gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c1;gt.act=iv;gt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ev.call(e,l)&&!tv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ja,type:t.type,key:r,ref:s,props:i,_owner:o}};gt.createContext=function(t){return t={$$typeof:e1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Qx,_context:t},t.Consumer=t};gt.createElement=nv;gt.createFactory=function(t){var e=nv.bind(null,t);return e.type=t,e};gt.createRef=function(){return{current:null}};gt.forwardRef=function(t){return{$$typeof:t1,render:t}};gt.isValidElement=Dh;gt.lazy=function(t){return{$$typeof:r1,_payload:{_status:-1,_result:t},_init:l1}};gt.memo=function(t,e){return{$$typeof:i1,type:t,compare:e===void 0?null:e}};gt.startTransition=function(t){var e=ic.transition;ic.transition={};try{t()}finally{ic.transition=e}};gt.unstable_act=iv;gt.useCallback=function(t,e){return Fn.current.useCallback(t,e)};gt.useContext=function(t){return Fn.current.useContext(t)};gt.useDebugValue=function(){};gt.useDeferredValue=function(t){return Fn.current.useDeferredValue(t)};gt.useEffect=function(t,e){return Fn.current.useEffect(t,e)};gt.useId=function(){return Fn.current.useId()};gt.useImperativeHandle=function(t,e,n){return Fn.current.useImperativeHandle(t,e,n)};gt.useInsertionEffect=function(t,e){return Fn.current.useInsertionEffect(t,e)};gt.useLayoutEffect=function(t,e){return Fn.current.useLayoutEffect(t,e)};gt.useMemo=function(t,e){return Fn.current.useMemo(t,e)};gt.useReducer=function(t,e,n){return Fn.current.useReducer(t,e,n)};gt.useRef=function(t){return Fn.current.useRef(t)};gt.useState=function(t){return Fn.current.useState(t)};gt.useSyncExternalStore=function(t,e,n){return Fn.current.useSyncExternalStore(t,e,n)};gt.useTransition=function(){return Fn.current.useTransition()};gt.version="18.3.1";$g.exports=gt;var _t=$g.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u1=_t,d1=Symbol.for("react.element"),f1=Symbol.for("react.fragment"),h1=Object.prototype.hasOwnProperty,p1=u1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m1={key:!0,ref:!0,__self:!0,__source:!0};function rv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)h1.call(e,i)&&!m1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:d1,type:t,key:s,ref:o,props:r,_owner:p1.current}}$c.Fragment=f1;$c.jsx=rv;$c.jsxs=rv;qg.exports=$c;var V=qg.exports,sv={exports:{}},ni={},ov={exports:{}},av={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,Z){var ie=F.length;F.push(Z);e:for(;0<ie;){var ye=ie-1>>>1,Pe=F[ye];if(0<r(Pe,Z))F[ye]=Z,F[ie]=Pe,ie=ye;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var Z=F[0],ie=F.pop();if(ie!==Z){F[0]=ie;e:for(var ye=0,Pe=F.length,ct=Pe>>>1;ye<ct;){var be=2*(ye+1)-1,ne=F[be],k=be+1,ue=F[k];if(0>r(ne,ie))k<Pe&&0>r(ue,ne)?(F[ye]=ue,F[k]=ie,ye=k):(F[ye]=ne,F[be]=ie,ye=be);else if(k<Pe&&0>r(ue,ie))F[ye]=ue,F[k]=ie,ye=k;else break e}}return Z}function r(F,Z){var ie=F.sortIndex-Z.sortIndex;return ie!==0?ie:F.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,p=!1,_=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=F)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function y(F){if(E=!1,v(F),!_)if(n(l)!==null)_=!0,H(b);else{var Z=n(c);Z!==null&&j(y,Z.startTime-F)}}function b(F,Z){_=!1,E&&(E=!1,u(D),D=-1),p=!0;var ie=h;try{for(v(Z),f=n(l);f!==null&&(!(f.expirationTime>Z)||F&&!I());){var ye=f.callback;if(typeof ye=="function"){f.callback=null,h=f.priorityLevel;var Pe=ye(f.expirationTime<=Z);Z=t.unstable_now(),typeof Pe=="function"?f.callback=Pe:f===n(l)&&i(l),v(Z)}else i(l);f=n(l)}if(f!==null)var ct=!0;else{var be=n(c);be!==null&&j(y,be.startTime-Z),ct=!1}return ct}finally{f=null,h=ie,p=!1}}var R=!1,P=null,D=-1,S=5,x=-1;function I(){return!(t.unstable_now()-x<S)}function B(){if(P!==null){var F=t.unstable_now();x=F;var Z=!0;try{Z=P(!0,F)}finally{Z?$():(R=!1,P=null)}}else R=!1}var $;if(typeof m=="function")$=function(){m(B)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,le=re.port2;re.port1.onmessage=B,$=function(){le.postMessage(null)}}else $=function(){g(B,0)};function H(F){P=F,R||(R=!0,$())}function j(F,Z){D=g(function(){F(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,H(b))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(h){case 1:case 2:case 3:var Z=3;break;default:Z=h}var ie=h;h=Z;try{return F()}finally{h=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,Z){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ie=h;h=F;try{return Z()}finally{h=ie}},t.unstable_scheduleCallback=function(F,Z,ie){var ye=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ye+ie:ye):ie=ye,F){case 1:var Pe=-1;break;case 2:Pe=250;break;case 5:Pe=1073741823;break;case 4:Pe=1e4;break;default:Pe=5e3}return Pe=ie+Pe,F={id:d++,callback:Z,priorityLevel:F,startTime:ie,expirationTime:Pe,sortIndex:-1},ie>ye?(F.sortIndex=ie,e(c,F),n(l)===null&&F===n(c)&&(E?(u(D),D=-1):E=!0,j(y,ie-ye))):(F.sortIndex=Pe,e(l,F),_||p||(_=!0,H(b))),F},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(F){var Z=h;return function(){var ie=h;h=Z;try{return F.apply(this,arguments)}finally{h=ie}}}})(av);ov.exports=av;var g1=ov.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v1=_t,ti=g1;function xe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lv=new Set,Ra={};function Ds(t,e){Mo(t,e),Mo(t+"Capture",e)}function Mo(t,e){for(Ra[t]=e,t=0;t<e.length;t++)lv.add(e[t])}var lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xd=Object.prototype.hasOwnProperty,_1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dm={},Nm={};function x1(t){return Xd.call(Nm,t)?!0:Xd.call(Dm,t)?!1:_1.test(t)?Nm[t]=!0:(Dm[t]=!0,!1)}function y1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M1(t,e,n,i){if(e===null||typeof e>"u"||y1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function On(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yn[t]=new On(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yn[e]=new On(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yn[t]=new On(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yn[t]=new On(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yn[t]=new On(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yn[t]=new On(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yn[t]=new On(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yn[t]=new On(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yn[t]=new On(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nh=/[\-:]([a-z])/g;function Ih(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nh,Ih);yn[e]=new On(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nh,Ih);yn[e]=new On(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nh,Ih);yn[e]=new On(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yn[t]=new On(t,1,!1,t.toLowerCase(),null,!1,!1)});yn.xlinkHref=new On("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yn[t]=new On(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uh(t,e,n,i){var r=yn.hasOwnProperty(e)?yn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(M1(e,n,r,i)&&(n=null),i||r===null?x1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var fr=v1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ml=Symbol.for("react.element"),Js=Symbol.for("react.portal"),Qs=Symbol.for("react.fragment"),Fh=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),cv=Symbol.for("react.provider"),uv=Symbol.for("react.context"),Oh=Symbol.for("react.forward_ref"),Yd=Symbol.for("react.suspense"),qd=Symbol.for("react.suspense_list"),kh=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),dv=Symbol.for("react.offscreen"),Im=Symbol.iterator;function $o(t){return t===null||typeof t!="object"?null:(t=Im&&t[Im]||t["@@iterator"],typeof t=="function"?t:null)}var jt=Object.assign,Du;function ha(t){if(Du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+t}var Nu=!1;function Iu(t,e){if(!t||Nu)return"";Nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ha(t):""}function S1(t){switch(t.tag){case 5:return ha(t.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 2:case 15:return t=Iu(t.type,!1),t;case 11:return t=Iu(t.type.render,!1),t;case 1:return t=Iu(t.type,!0),t;default:return""}}function $d(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qs:return"Fragment";case Js:return"Portal";case jd:return"Profiler";case Fh:return"StrictMode";case Yd:return"Suspense";case qd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uv:return(t.displayName||"Context")+".Consumer";case cv:return(t._context.displayName||"Context")+".Provider";case Oh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kh:return e=t.displayName||null,e!==null?e:$d(t.type)||"Memo";case Ar:e=t._payload,t=t._init;try{return $d(t(e))}catch{}}return null}function w1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $d(e);case 8:return e===Fh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function E1(t){var e=fv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gl(t){t._valueTracker||(t._valueTracker=E1(t))}function hv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=fv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function xc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kd(t,e){var n=e.checked;return jt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Um(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pv(t,e){e=e.checked,e!=null&&Uh(t,"checked",e,!1)}function Zd(t,e){pv(t,e);var n=Vr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jd(t,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jd(t,e,n){(e!=="number"||xc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var pa=Array.isArray;function fo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Vr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Qd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(xe(91));return jt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Om(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(xe(92));if(pa(n)){if(1<n.length)throw Error(xe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vr(n)}}function mv(t,e){var n=Vr(e.value),i=Vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function km(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ef(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vl,vv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vl=vl||document.createElement("div"),vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T1=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(t){T1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_a[e]=_a[t]})});function _v(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_a.hasOwnProperty(t)&&_a[t]?(""+e).trim():e+"px"}function xv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_v(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var A1=jt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tf(t,e){if(e){if(A1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(xe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(xe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(xe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(xe(62))}}function nf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rf=null;function zh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sf=null,ho=null,po=null;function zm(t){if(t=tl(t)){if(typeof sf!="function")throw Error(xe(280));var e=t.stateNode;e&&(e=eu(e),sf(t.stateNode,t.type,e))}}function yv(t){ho?po?po.push(t):po=[t]:ho=t}function Mv(){if(ho){var t=ho,e=po;if(po=ho=null,zm(t),e)for(t=0;t<e.length;t++)zm(e[t])}}function Sv(t,e){return t(e)}function wv(){}var Uu=!1;function Ev(t,e,n){if(Uu)return t(e,n);Uu=!0;try{return Sv(t,e,n)}finally{Uu=!1,(ho!==null||po!==null)&&(wv(),Mv())}}function La(t,e){var n=t.stateNode;if(n===null)return null;var i=eu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(xe(231,e,typeof n));return n}var of=!1;if(lr)try{var Ko={};Object.defineProperty(Ko,"passive",{get:function(){of=!0}}),window.addEventListener("test",Ko,Ko),window.removeEventListener("test",Ko,Ko)}catch{of=!1}function b1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var xa=!1,yc=null,Mc=!1,af=null,C1={onError:function(t){xa=!0,yc=t}};function R1(t,e,n,i,r,s,o,a,l){xa=!1,yc=null,b1.apply(C1,arguments)}function P1(t,e,n,i,r,s,o,a,l){if(R1.apply(this,arguments),xa){if(xa){var c=yc;xa=!1,yc=null}else throw Error(xe(198));Mc||(Mc=!0,af=c)}}function Ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bm(t){if(Ns(t)!==t)throw Error(xe(188))}function L1(t){var e=t.alternate;if(!e){if(e=Ns(t),e===null)throw Error(xe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bm(r),t;if(s===i)return Bm(r),e;s=s.sibling}throw Error(xe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(xe(189))}}if(n.alternate!==i)throw Error(xe(190))}if(n.tag!==3)throw Error(xe(188));return n.stateNode.current===n?t:e}function Av(t){return t=L1(t),t!==null?bv(t):null}function bv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bv(t);if(e!==null)return e;t=t.sibling}return null}var Cv=ti.unstable_scheduleCallback,Hm=ti.unstable_cancelCallback,D1=ti.unstable_shouldYield,N1=ti.unstable_requestPaint,Kt=ti.unstable_now,I1=ti.unstable_getCurrentPriorityLevel,Bh=ti.unstable_ImmediatePriority,Rv=ti.unstable_UserBlockingPriority,Sc=ti.unstable_NormalPriority,U1=ti.unstable_LowPriority,Pv=ti.unstable_IdlePriority,Kc=null,Oi=null;function F1(t){if(Oi&&typeof Oi.onCommitFiberRoot=="function")try{Oi.onCommitFiberRoot(Kc,t,void 0,(t.current.flags&128)===128)}catch{}}var Ei=Math.clz32?Math.clz32:z1,O1=Math.log,k1=Math.LN2;function z1(t){return t>>>=0,t===0?32:31-(O1(t)/k1|0)|0}var _l=64,xl=4194304;function ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ma(a):(s&=o,s!==0&&(i=ma(s)))}else o=n&~r,o!==0?i=ma(o):s!==0&&(i=ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ei(e),r=1<<n,i|=t[n],e&=~r;return i}function B1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ei(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=B1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function lf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lv(){var t=_l;return _l<<=1,!(_l&4194240)&&(_l=64),t}function Fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ei(e),t[e]=n}function V1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Hh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Lt=0;function Dv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Nv,Vh,Iv,Uv,Fv,cf=!1,yl=[],Dr=null,Nr=null,Ir=null,Da=new Map,Na=new Map,Cr=[],G1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vm(t,e){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(e.pointerId)}}function Zo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=tl(e),e!==null&&Vh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function W1(t,e,n,i,r){switch(e){case"focusin":return Dr=Zo(Dr,t,e,n,i,r),!0;case"dragenter":return Nr=Zo(Nr,t,e,n,i,r),!0;case"mouseover":return Ir=Zo(Ir,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Da.set(s,Zo(Da.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Na.set(s,Zo(Na.get(s)||null,t,e,n,i,r)),!0}return!1}function Ov(t){var e=_s(t.target);if(e!==null){var n=Ns(e);if(n!==null){if(e=n.tag,e===13){if(e=Tv(n),e!==null){t.blockedOn=e,Fv(t.priority,function(){Iv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);rf=i,n.target.dispatchEvent(i),rf=null}else return e=tl(n),e!==null&&Vh(e),t.blockedOn=n,!1;e.shift()}return!0}function Gm(t,e,n){rc(t)&&n.delete(e)}function X1(){cf=!1,Dr!==null&&rc(Dr)&&(Dr=null),Nr!==null&&rc(Nr)&&(Nr=null),Ir!==null&&rc(Ir)&&(Ir=null),Da.forEach(Gm),Na.forEach(Gm)}function Jo(t,e){t.blockedOn===e&&(t.blockedOn=null,cf||(cf=!0,ti.unstable_scheduleCallback(ti.unstable_NormalPriority,X1)))}function Ia(t){function e(r){return Jo(r,t)}if(0<yl.length){Jo(yl[0],t);for(var n=1;n<yl.length;n++){var i=yl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Dr!==null&&Jo(Dr,t),Nr!==null&&Jo(Nr,t),Ir!==null&&Jo(Ir,t),Da.forEach(e),Na.forEach(e),n=0;n<Cr.length;n++)i=Cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)Ov(n),n.blockedOn===null&&Cr.shift()}var mo=fr.ReactCurrentBatchConfig,Ec=!0;function j1(t,e,n,i){var r=Lt,s=mo.transition;mo.transition=null;try{Lt=1,Gh(t,e,n,i)}finally{Lt=r,mo.transition=s}}function Y1(t,e,n,i){var r=Lt,s=mo.transition;mo.transition=null;try{Lt=4,Gh(t,e,n,i)}finally{Lt=r,mo.transition=s}}function Gh(t,e,n,i){if(Ec){var r=uf(t,e,n,i);if(r===null)ju(t,e,i,Tc,n),Vm(t,i);else if(W1(r,t,e,n,i))i.stopPropagation();else if(Vm(t,i),e&4&&-1<G1.indexOf(t)){for(;r!==null;){var s=tl(r);if(s!==null&&Nv(s),s=uf(t,e,n,i),s===null&&ju(t,e,i,Tc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ju(t,e,i,null,n)}}var Tc=null;function uf(t,e,n,i){if(Tc=null,t=zh(i),t=_s(t),t!==null)if(e=Ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tc=t,null}function kv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(I1()){case Bh:return 1;case Rv:return 4;case Sc:case U1:return 16;case Pv:return 536870912;default:return 16}default:return 16}}var Pr=null,Wh=null,sc=null;function zv(){if(sc)return sc;var t,e=Wh,n=e.length,i,r="value"in Pr?Pr.value:Pr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return sc=r.slice(t,1<i?1-i:void 0)}function oc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ml(){return!0}function Wm(){return!1}function ii(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ml:Wm,this.isPropagationStopped=Wm,this}return jt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),e}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xh=ii(Io),el=jt({},Io,{view:0,detail:0}),q1=ii(el),Ou,ku,Qo,Zc=jt({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qo&&(Qo&&t.type==="mousemove"?(Ou=t.screenX-Qo.screenX,ku=t.screenY-Qo.screenY):ku=Ou=0,Qo=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:ku}}),Xm=ii(Zc),$1=jt({},Zc,{dataTransfer:0}),K1=ii($1),Z1=jt({},el,{relatedTarget:0}),zu=ii(Z1),J1=jt({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),Q1=ii(J1),ey=jt({},Io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ty=ii(ey),ny=jt({},Io,{data:0}),jm=ii(ny),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sy[t])?!!e[t]:!1}function jh(){return oy}var ay=jt({},el,{key:function(t){if(t.key){var e=iy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=oc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ry[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jh,charCode:function(t){return t.type==="keypress"?oc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ly=ii(ay),cy=jt({},Zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ym=ii(cy),uy=jt({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jh}),dy=ii(uy),fy=jt({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),hy=ii(fy),py=jt({},Zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),my=ii(py),gy=[9,13,27,32],Yh=lr&&"CompositionEvent"in window,ya=null;lr&&"documentMode"in document&&(ya=document.documentMode);var vy=lr&&"TextEvent"in window&&!ya,Bv=lr&&(!Yh||ya&&8<ya&&11>=ya),qm=" ",$m=!1;function Hv(t,e){switch(t){case"keyup":return gy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var eo=!1;function _y(t,e){switch(t){case"compositionend":return Vv(e);case"keypress":return e.which!==32?null:($m=!0,qm);case"textInput":return t=e.data,t===qm&&$m?null:t;default:return null}}function xy(t,e){if(eo)return t==="compositionend"||!Yh&&Hv(t,e)?(t=zv(),sc=Wh=Pr=null,eo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bv&&e.locale!=="ko"?null:e.data;default:return null}}var yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yy[t.type]:e==="textarea"}function Gv(t,e,n,i){yv(i),e=Ac(e,"onChange"),0<e.length&&(n=new Xh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ma=null,Ua=null;function My(t){e_(t,0)}function Jc(t){var e=io(t);if(hv(e))return t}function Sy(t,e){if(t==="change")return e}var Wv=!1;if(lr){var Bu;if(lr){var Hu="oninput"in document;if(!Hu){var Zm=document.createElement("div");Zm.setAttribute("oninput","return;"),Hu=typeof Zm.oninput=="function"}Bu=Hu}else Bu=!1;Wv=Bu&&(!document.documentMode||9<document.documentMode)}function Jm(){Ma&&(Ma.detachEvent("onpropertychange",Xv),Ua=Ma=null)}function Xv(t){if(t.propertyName==="value"&&Jc(Ua)){var e=[];Gv(e,Ua,t,zh(t)),Ev(My,e)}}function wy(t,e,n){t==="focusin"?(Jm(),Ma=e,Ua=n,Ma.attachEvent("onpropertychange",Xv)):t==="focusout"&&Jm()}function Ey(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jc(Ua)}function Ty(t,e){if(t==="click")return Jc(e)}function Ay(t,e){if(t==="input"||t==="change")return Jc(e)}function by(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bi=typeof Object.is=="function"?Object.is:by;function Fa(t,e){if(bi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Xd.call(e,r)||!bi(t[r],e[r]))return!1}return!0}function Qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function e0(t,e){var n=Qm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qm(n)}}function jv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yv(){for(var t=window,e=xc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xc(t.document)}return e}function qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Cy(t){var e=Yv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jv(n.ownerDocument.documentElement,n)){if(i!==null&&qh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=e0(n,s);var o=e0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ry=lr&&"documentMode"in document&&11>=document.documentMode,to=null,df=null,Sa=null,ff=!1;function t0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ff||to==null||to!==xc(i)||(i=to,"selectionStart"in i&&qh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Sa&&Fa(Sa,i)||(Sa=i,i=Ac(df,"onSelect"),0<i.length&&(e=new Xh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=to)))}function Sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var no={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},Vu={},qv={};lr&&(qv=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function Qc(t){if(Vu[t])return Vu[t];if(!no[t])return t;var e=no[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qv)return Vu[t]=e[n];return t}var $v=Qc("animationend"),Kv=Qc("animationiteration"),Zv=Qc("animationstart"),Jv=Qc("transitionend"),Qv=new Map,n0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){Qv.set(t,e),Ds(e,[t])}for(var Gu=0;Gu<n0.length;Gu++){var Wu=n0[Gu],Py=Wu.toLowerCase(),Ly=Wu[0].toUpperCase()+Wu.slice(1);jr(Py,"on"+Ly)}jr($v,"onAnimationEnd");jr(Kv,"onAnimationIteration");jr(Zv,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(Jv,"onTransitionEnd");Mo("onMouseEnter",["mouseout","mouseover"]);Mo("onMouseLeave",["mouseout","mouseover"]);Mo("onPointerEnter",["pointerout","pointerover"]);Mo("onPointerLeave",["pointerout","pointerover"]);Ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function i0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,P1(i,e,void 0,t),t.currentTarget=null}function e_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;i0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;i0(r,a,c),s=l}}}if(Mc)throw t=af,Mc=!1,af=null,t}function Ot(t,e){var n=e[vf];n===void 0&&(n=e[vf]=new Set);var i=t+"__bubble";n.has(i)||(t_(e,t,2,!1),n.add(i))}function Xu(t,e,n){var i=0;e&&(i|=4),t_(n,t,i,e)}var wl="_reactListening"+Math.random().toString(36).slice(2);function Oa(t){if(!t[wl]){t[wl]=!0,lv.forEach(function(n){n!=="selectionchange"&&(Dy.has(n)||Xu(n,!1,t),Xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wl]||(e[wl]=!0,Xu("selectionchange",!1,e))}}function t_(t,e,n,i){switch(kv(e)){case 1:var r=j1;break;case 4:r=Y1;break;default:r=Gh}n=r.bind(null,e,n,t),r=void 0,!of||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ju(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=_s(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ev(function(){var c=s,d=zh(n),f=[];e:{var h=Qv.get(t);if(h!==void 0){var p=Xh,_=t;switch(t){case"keypress":if(oc(n)===0)break e;case"keydown":case"keyup":p=ly;break;case"focusin":_="focus",p=zu;break;case"focusout":_="blur",p=zu;break;case"beforeblur":case"afterblur":p=zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=K1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=dy;break;case $v:case Kv:case Zv:p=Q1;break;case Jv:p=hy;break;case"scroll":p=q1;break;case"wheel":p=my;break;case"copy":case"cut":case"paste":p=ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ym}var E=(e&4)!==0,g=!E&&t==="scroll",u=E?h!==null?h+"Capture":null:h;E=[];for(var m=c,v;m!==null;){v=m;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,u!==null&&(y=La(m,u),y!=null&&E.push(ka(m,y,v)))),g)break;m=m.return}0<E.length&&(h=new p(h,_,null,n,d),f.push({event:h,listeners:E}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==rf&&(_=n.relatedTarget||n.fromElement)&&(_s(_)||_[cr]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?_s(_):null,_!==null&&(g=Ns(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(E=Xm,y="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(E=Ym,y="onPointerLeave",u="onPointerEnter",m="pointer"),g=p==null?h:io(p),v=_==null?h:io(_),h=new E(y,m+"leave",p,n,d),h.target=g,h.relatedTarget=v,y=null,_s(d)===c&&(E=new E(u,m+"enter",_,n,d),E.target=v,E.relatedTarget=g,y=E),g=y,p&&_)t:{for(E=p,u=_,m=0,v=E;v;v=Os(v))m++;for(v=0,y=u;y;y=Os(y))v++;for(;0<m-v;)E=Os(E),m--;for(;0<v-m;)u=Os(u),v--;for(;m--;){if(E===u||u!==null&&E===u.alternate)break t;E=Os(E),u=Os(u)}E=null}else E=null;p!==null&&r0(f,h,p,E,!1),_!==null&&g!==null&&r0(f,g,_,E,!0)}}e:{if(h=c?io(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=Sy;else if(Km(h))if(Wv)b=Ay;else{b=Ey;var R=wy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=Ty);if(b&&(b=b(t,c))){Gv(f,b,n,d);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Jd(h,"number",h.value)}switch(R=c?io(c):window,t){case"focusin":(Km(R)||R.contentEditable==="true")&&(to=R,df=c,Sa=null);break;case"focusout":Sa=df=to=null;break;case"mousedown":ff=!0;break;case"contextmenu":case"mouseup":case"dragend":ff=!1,t0(f,n,d);break;case"selectionchange":if(Ry)break;case"keydown":case"keyup":t0(f,n,d)}var P;if(Yh)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else eo?Hv(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Bv&&n.locale!=="ko"&&(eo||D!=="onCompositionStart"?D==="onCompositionEnd"&&eo&&(P=zv()):(Pr=d,Wh="value"in Pr?Pr.value:Pr.textContent,eo=!0)),R=Ac(c,D),0<R.length&&(D=new jm(D,t,null,n,d),f.push({event:D,listeners:R}),P?D.data=P:(P=Vv(n),P!==null&&(D.data=P)))),(P=vy?_y(t,n):xy(t,n))&&(c=Ac(c,"onBeforeInput"),0<c.length&&(d=new jm("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=P))}e_(f,e)})}function ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ac(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=La(t,n),s!=null&&i.unshift(ka(t,s,r)),s=La(t,e),s!=null&&i.push(ka(t,s,r))),t=t.return}return i}function Os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function r0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=La(n,s),l!=null&&o.unshift(ka(n,l,a))):r||(l=La(n,s),l!=null&&o.push(ka(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ny=/\r\n?/g,Iy=/\u0000|\uFFFD/g;function s0(t){return(typeof t=="string"?t:""+t).replace(Ny,`
`).replace(Iy,"")}function El(t,e,n){if(e=s0(e),s0(t)!==e&&n)throw Error(xe(425))}function bc(){}var hf=null,pf=null;function mf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gf=typeof setTimeout=="function"?setTimeout:void 0,Uy=typeof clearTimeout=="function"?clearTimeout:void 0,o0=typeof Promise=="function"?Promise:void 0,Fy=typeof queueMicrotask=="function"?queueMicrotask:typeof o0<"u"?function(t){return o0.resolve(null).then(t).catch(Oy)}:gf;function Oy(t){setTimeout(function(){throw t})}function Yu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ia(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ia(e)}function Ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function a0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Uo=Math.random().toString(36).slice(2),Ni="__reactFiber$"+Uo,za="__reactProps$"+Uo,cr="__reactContainer$"+Uo,vf="__reactEvents$"+Uo,ky="__reactListeners$"+Uo,zy="__reactHandles$"+Uo;function _s(t){var e=t[Ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[cr]||n[Ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=a0(t);t!==null;){if(n=t[Ni])return n;t=a0(t)}return e}t=n,n=t.parentNode}return null}function tl(t){return t=t[Ni]||t[cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function io(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(xe(33))}function eu(t){return t[za]||null}var _f=[],ro=-1;function Yr(t){return{current:t}}function kt(t){0>ro||(t.current=_f[ro],_f[ro]=null,ro--)}function Ut(t,e){ro++,_f[ro]=t.current,t.current=e}var Gr={},Rn=Yr(Gr),Gn=Yr(!1),Ts=Gr;function So(t,e){var n=t.type.contextTypes;if(!n)return Gr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Wn(t){return t=t.childContextTypes,t!=null}function Cc(){kt(Gn),kt(Rn)}function l0(t,e,n){if(Rn.current!==Gr)throw Error(xe(168));Ut(Rn,e),Ut(Gn,n)}function n_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(xe(108,w1(t)||"Unknown",r));return jt({},n,i)}function Rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gr,Ts=Rn.current,Ut(Rn,t),Ut(Gn,Gn.current),!0}function c0(t,e,n){var i=t.stateNode;if(!i)throw Error(xe(169));n?(t=n_(t,e,Ts),i.__reactInternalMemoizedMergedChildContext=t,kt(Gn),kt(Rn),Ut(Rn,t)):kt(Gn),Ut(Gn,n)}var tr=null,tu=!1,qu=!1;function i_(t){tr===null?tr=[t]:tr.push(t)}function By(t){tu=!0,i_(t)}function qr(){if(!qu&&tr!==null){qu=!0;var t=0,e=Lt;try{var n=tr;for(Lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}tr=null,tu=!1}catch(r){throw tr!==null&&(tr=tr.slice(t+1)),Cv(Bh,qr),r}finally{Lt=e,qu=!1}}return null}var so=[],oo=0,Pc=null,Lc=0,li=[],ci=0,As=null,ir=1,rr="";function fs(t,e){so[oo++]=Lc,so[oo++]=Pc,Pc=t,Lc=e}function r_(t,e,n){li[ci++]=ir,li[ci++]=rr,li[ci++]=As,As=t;var i=ir;t=rr;var r=32-Ei(i)-1;i&=~(1<<r),n+=1;var s=32-Ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ir=1<<32-Ei(e)+r|n<<r|i,rr=s+t}else ir=1<<s|n<<r|i,rr=t}function $h(t){t.return!==null&&(fs(t,1),r_(t,1,0))}function Kh(t){for(;t===Pc;)Pc=so[--oo],so[oo]=null,Lc=so[--oo],so[oo]=null;for(;t===As;)As=li[--ci],li[ci]=null,rr=li[--ci],li[ci]=null,ir=li[--ci],li[ci]=null}var ei=null,Qn=null,Vt=!1,yi=null;function s_(t,e){var n=ui(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function u0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ei=t,Qn=Ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ei=t,Qn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=As!==null?{id:ir,overflow:rr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ui(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ei=t,Qn=null,!0):!1;default:return!1}}function xf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yf(t){if(Vt){var e=Qn;if(e){var n=e;if(!u0(t,e)){if(xf(t))throw Error(xe(418));e=Ur(n.nextSibling);var i=ei;e&&u0(t,e)?s_(i,n):(t.flags=t.flags&-4097|2,Vt=!1,ei=t)}}else{if(xf(t))throw Error(xe(418));t.flags=t.flags&-4097|2,Vt=!1,ei=t}}}function d0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ei=t}function Tl(t){if(t!==ei)return!1;if(!Vt)return d0(t),Vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mf(t.type,t.memoizedProps)),e&&(e=Qn)){if(xf(t))throw o_(),Error(xe(418));for(;e;)s_(t,e),e=Ur(e.nextSibling)}if(d0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(xe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qn=Ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qn=null}}else Qn=ei?Ur(t.stateNode.nextSibling):null;return!0}function o_(){for(var t=Qn;t;)t=Ur(t.nextSibling)}function wo(){Qn=ei=null,Vt=!1}function Zh(t){yi===null?yi=[t]:yi.push(t)}var Hy=fr.ReactCurrentBatchConfig;function ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(xe(309));var i=n.stateNode}if(!i)throw Error(xe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(xe(284));if(!n._owner)throw Error(xe(290,t))}return t}function Al(t,e){throw t=Object.prototype.toString.call(e),Error(xe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function f0(t){var e=t._init;return e(t._payload)}function a_(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=zr(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,v,y){return m===null||m.tag!==6?(m=td(v,u.mode,y),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,y){var b=v.type;return b===Qs?d(u,m,v.props.children,y,v.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ar&&f0(b)===m.type)?(y=r(m,v.props),y.ref=ea(u,m,v),y.return=u,y):(y=hc(v.type,v.key,v.props,null,u.mode,y),y.ref=ea(u,m,v),y.return=u,y)}function c(u,m,v,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=nd(v,u.mode,y),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function d(u,m,v,y,b){return m===null||m.tag!==7?(m=Es(v,u.mode,y,b),m.return=u,m):(m=r(m,v),m.return=u,m)}function f(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=td(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ml:return v=hc(m.type,m.key,m.props,null,u.mode,v),v.ref=ea(u,null,m),v.return=u,v;case Js:return m=nd(m,u.mode,v),m.return=u,m;case Ar:var y=m._init;return f(u,y(m._payload),v)}if(pa(m)||$o(m))return m=Es(m,u.mode,v,null),m.return=u,m;Al(u,m)}return null}function h(u,m,v,y){var b=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(u,m,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ml:return v.key===b?l(u,m,v,y):null;case Js:return v.key===b?c(u,m,v,y):null;case Ar:return b=v._init,h(u,m,b(v._payload),y)}if(pa(v)||$o(v))return b!==null?null:d(u,m,v,y,null);Al(u,v)}return null}function p(u,m,v,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(v)||null,a(m,u,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ml:return u=u.get(y.key===null?v:y.key)||null,l(m,u,y,b);case Js:return u=u.get(y.key===null?v:y.key)||null,c(m,u,y,b);case Ar:var R=y._init;return p(u,m,v,R(y._payload),b)}if(pa(y)||$o(y))return u=u.get(v)||null,d(m,u,y,b,null);Al(m,y)}return null}function _(u,m,v,y){for(var b=null,R=null,P=m,D=m=0,S=null;P!==null&&D<v.length;D++){P.index>D?(S=P,P=null):S=P.sibling;var x=h(u,P,v[D],y);if(x===null){P===null&&(P=S);break}t&&P&&x.alternate===null&&e(u,P),m=s(x,m,D),R===null?b=x:R.sibling=x,R=x,P=S}if(D===v.length)return n(u,P),Vt&&fs(u,D),b;if(P===null){for(;D<v.length;D++)P=f(u,v[D],y),P!==null&&(m=s(P,m,D),R===null?b=P:R.sibling=P,R=P);return Vt&&fs(u,D),b}for(P=i(u,P);D<v.length;D++)S=p(P,u,D,v[D],y),S!==null&&(t&&S.alternate!==null&&P.delete(S.key===null?D:S.key),m=s(S,m,D),R===null?b=S:R.sibling=S,R=S);return t&&P.forEach(function(I){return e(u,I)}),Vt&&fs(u,D),b}function E(u,m,v,y){var b=$o(v);if(typeof b!="function")throw Error(xe(150));if(v=b.call(v),v==null)throw Error(xe(151));for(var R=b=null,P=m,D=m=0,S=null,x=v.next();P!==null&&!x.done;D++,x=v.next()){P.index>D?(S=P,P=null):S=P.sibling;var I=h(u,P,x.value,y);if(I===null){P===null&&(P=S);break}t&&P&&I.alternate===null&&e(u,P),m=s(I,m,D),R===null?b=I:R.sibling=I,R=I,P=S}if(x.done)return n(u,P),Vt&&fs(u,D),b;if(P===null){for(;!x.done;D++,x=v.next())x=f(u,x.value,y),x!==null&&(m=s(x,m,D),R===null?b=x:R.sibling=x,R=x);return Vt&&fs(u,D),b}for(P=i(u,P);!x.done;D++,x=v.next())x=p(P,u,D,x.value,y),x!==null&&(t&&x.alternate!==null&&P.delete(x.key===null?D:x.key),m=s(x,m,D),R===null?b=x:R.sibling=x,R=x);return t&&P.forEach(function(B){return e(u,B)}),Vt&&fs(u,D),b}function g(u,m,v,y){if(typeof v=="object"&&v!==null&&v.type===Qs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ml:e:{for(var b=v.key,R=m;R!==null;){if(R.key===b){if(b=v.type,b===Qs){if(R.tag===7){n(u,R.sibling),m=r(R,v.props.children),m.return=u,u=m;break e}}else if(R.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ar&&f0(b)===R.type){n(u,R.sibling),m=r(R,v.props),m.ref=ea(u,R,v),m.return=u,u=m;break e}n(u,R);break}else e(u,R);R=R.sibling}v.type===Qs?(m=Es(v.props.children,u.mode,y,v.key),m.return=u,u=m):(y=hc(v.type,v.key,v.props,null,u.mode,y),y.ref=ea(u,m,v),y.return=u,u=y)}return o(u);case Js:e:{for(R=v.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=nd(v,u.mode,y),m.return=u,u=m}return o(u);case Ar:return R=v._init,g(u,m,R(v._payload),y)}if(pa(v))return _(u,m,v,y);if($o(v))return E(u,m,v,y);Al(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=td(v,u.mode,y),m.return=u,u=m),o(u)):n(u,m)}return g}var Eo=a_(!0),l_=a_(!1),Dc=Yr(null),Nc=null,ao=null,Jh=null;function Qh(){Jh=ao=Nc=null}function ep(t){var e=Dc.current;kt(Dc),t._currentValue=e}function Mf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function go(t,e){Nc=t,Jh=ao=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vn=!0),t.firstContext=null)}function fi(t){var e=t._currentValue;if(Jh!==t)if(t={context:t,memoizedValue:e,next:null},ao===null){if(Nc===null)throw Error(xe(308));ao=t,Nc.dependencies={lanes:0,firstContext:t}}else ao=ao.next=t;return e}var xs=null;function tp(t){xs===null?xs=[t]:xs.push(t)}function c_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,tp(e)):(n.next=r.next,r.next=n),e.interleaved=n,ur(t,i)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var br=!1;function np(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function or(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ur(t,n)}return r=i.interleaved,r===null?(e.next=e,tp(i)):(e.next=r.next,r.next=e),i.interleaved=e,ur(t,n)}function ac(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hh(t,n)}}function h0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ic(t,e,n,i){var r=t.updateQueue;br=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,E=a;switch(h=e,p=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=jt({},f,h);break e;case 2:br=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cs|=o,t.lanes=o,t.memoizedState=f}}function p0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(xe(191,r));r.call(i)}}}var nl={},ki=Yr(nl),Ba=Yr(nl),Ha=Yr(nl);function ys(t){if(t===nl)throw Error(xe(174));return t}function ip(t,e){switch(Ut(Ha,e),Ut(Ba,t),Ut(ki,nl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ef(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ef(e,t)}kt(ki),Ut(ki,e)}function To(){kt(ki),kt(Ba),kt(Ha)}function d_(t){ys(Ha.current);var e=ys(ki.current),n=ef(e,t.type);e!==n&&(Ut(Ba,t),Ut(ki,n))}function rp(t){Ba.current===t&&(kt(ki),kt(Ba))}var Wt=Yr(0);function Uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $u=[];function sp(){for(var t=0;t<$u.length;t++)$u[t]._workInProgressVersionPrimary=null;$u.length=0}var lc=fr.ReactCurrentDispatcher,Ku=fr.ReactCurrentBatchConfig,bs=0,Xt=null,sn=null,pn=null,Fc=!1,wa=!1,Va=0,Vy=0;function Sn(){throw Error(xe(321))}function op(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bi(t[n],e[n]))return!1;return!0}function ap(t,e,n,i,r,s){if(bs=s,Xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,lc.current=t===null||t.memoizedState===null?jy:Yy,t=n(i,r),wa){s=0;do{if(wa=!1,Va=0,25<=s)throw Error(xe(301));s+=1,pn=sn=null,e.updateQueue=null,lc.current=qy,t=n(i,r)}while(wa)}if(lc.current=Oc,e=sn!==null&&sn.next!==null,bs=0,pn=sn=Xt=null,Fc=!1,e)throw Error(xe(300));return t}function lp(){var t=Va!==0;return Va=0,t}function Li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Xt.memoizedState=pn=t:pn=pn.next=t,pn}function hi(){if(sn===null){var t=Xt.alternate;t=t!==null?t.memoizedState:null}else t=sn.next;var e=pn===null?Xt.memoizedState:pn.next;if(e!==null)pn=e,sn=t;else{if(t===null)throw Error(xe(310));sn=t,t={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},pn===null?Xt.memoizedState=pn=t:pn=pn.next=t}return pn}function Ga(t,e){return typeof e=="function"?e(t):e}function Zu(t){var e=hi(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=sn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((bs&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Xt.lanes|=d,Cs|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,bi(i,e.memoizedState)||(Vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Xt.lanes|=s,Cs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ju(t){var e=hi(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);bi(s,e.memoizedState)||(Vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function f_(){}function h_(t,e){var n=Xt,i=hi(),r=e(),s=!bi(i.memoizedState,r);if(s&&(i.memoizedState=r,Vn=!0),i=i.queue,cp(g_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||pn!==null&&pn.memoizedState.tag&1){if(n.flags|=2048,Wa(9,m_.bind(null,n,i,r,e),void 0,null),mn===null)throw Error(xe(349));bs&30||p_(n,e,r)}return r}function p_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function m_(t,e,n,i){e.value=n,e.getSnapshot=i,v_(e)&&__(t)}function g_(t,e,n){return n(function(){v_(e)&&__(t)})}function v_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bi(t,n)}catch{return!0}}function __(t){var e=ur(t,1);e!==null&&Ti(e,t,1,-1)}function m0(t){var e=Li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},e.queue=t,t=t.dispatch=Xy.bind(null,Xt,t),[e.memoizedState,t]}function Wa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function x_(){return hi().memoizedState}function cc(t,e,n,i){var r=Li();Xt.flags|=t,r.memoizedState=Wa(1|e,n,void 0,i===void 0?null:i)}function nu(t,e,n,i){var r=hi();i=i===void 0?null:i;var s=void 0;if(sn!==null){var o=sn.memoizedState;if(s=o.destroy,i!==null&&op(i,o.deps)){r.memoizedState=Wa(e,n,s,i);return}}Xt.flags|=t,r.memoizedState=Wa(1|e,n,s,i)}function g0(t,e){return cc(8390656,8,t,e)}function cp(t,e){return nu(2048,8,t,e)}function y_(t,e){return nu(4,2,t,e)}function M_(t,e){return nu(4,4,t,e)}function S_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w_(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,S_.bind(null,e,t),n)}function up(){}function E_(t,e){var n=hi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&op(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function T_(t,e){var n=hi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&op(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function A_(t,e,n){return bs&21?(bi(n,e)||(n=Lv(),Xt.lanes|=n,Cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vn=!0),t.memoizedState=n)}function Gy(t,e){var n=Lt;Lt=n!==0&&4>n?n:4,t(!0);var i=Ku.transition;Ku.transition={};try{t(!1),e()}finally{Lt=n,Ku.transition=i}}function b_(){return hi().memoizedState}function Wy(t,e,n){var i=kr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},C_(t))R_(e,n);else if(n=c_(t,e,n,i),n!==null){var r=In();Ti(n,t,i,r),P_(n,e,i)}}function Xy(t,e,n){var i=kr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(C_(t))R_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,bi(a,o)){var l=e.interleaved;l===null?(r.next=r,tp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=c_(t,e,r,i),n!==null&&(r=In(),Ti(n,t,i,r),P_(n,e,i))}}function C_(t){var e=t.alternate;return t===Xt||e!==null&&e===Xt}function R_(t,e){wa=Fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hh(t,n)}}var Oc={readContext:fi,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},jy={readContext:fi,useCallback:function(t,e){return Li().memoizedState=[t,e===void 0?null:e],t},useContext:fi,useEffect:g0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cc(4194308,4,S_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cc(4194308,4,t,e)},useInsertionEffect:function(t,e){return cc(4,2,t,e)},useMemo:function(t,e){var n=Li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Wy.bind(null,Xt,t),[i.memoizedState,t]},useRef:function(t){var e=Li();return t={current:t},e.memoizedState=t},useState:m0,useDebugValue:up,useDeferredValue:function(t){return Li().memoizedState=t},useTransition:function(){var t=m0(!1),e=t[0];return t=Gy.bind(null,t[1]),Li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Xt,r=Li();if(Vt){if(n===void 0)throw Error(xe(407));n=n()}else{if(n=e(),mn===null)throw Error(xe(349));bs&30||p_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,g0(g_.bind(null,i,s,t),[t]),i.flags|=2048,Wa(9,m_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Li(),e=mn.identifierPrefix;if(Vt){var n=rr,i=ir;n=(i&~(1<<32-Ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Vy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Yy={readContext:fi,useCallback:E_,useContext:fi,useEffect:cp,useImperativeHandle:w_,useInsertionEffect:y_,useLayoutEffect:M_,useMemo:T_,useReducer:Zu,useRef:x_,useState:function(){return Zu(Ga)},useDebugValue:up,useDeferredValue:function(t){var e=hi();return A_(e,sn.memoizedState,t)},useTransition:function(){var t=Zu(Ga)[0],e=hi().memoizedState;return[t,e]},useMutableSource:f_,useSyncExternalStore:h_,useId:b_,unstable_isNewReconciler:!1},qy={readContext:fi,useCallback:E_,useContext:fi,useEffect:cp,useImperativeHandle:w_,useInsertionEffect:y_,useLayoutEffect:M_,useMemo:T_,useReducer:Ju,useRef:x_,useState:function(){return Ju(Ga)},useDebugValue:up,useDeferredValue:function(t){var e=hi();return sn===null?e.memoizedState=t:A_(e,sn.memoizedState,t)},useTransition:function(){var t=Ju(Ga)[0],e=hi().memoizedState;return[t,e]},useMutableSource:f_,useSyncExternalStore:h_,useId:b_,unstable_isNewReconciler:!1};function _i(t,e){if(t&&t.defaultProps){e=jt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:jt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?Ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=In(),r=kr(t),s=or(i,r);s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,r),e!==null&&(Ti(e,t,r,i),ac(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=In(),r=kr(t),s=or(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,r),e!==null&&(Ti(e,t,r,i),ac(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=In(),i=kr(t),r=or(n,i);r.tag=2,e!=null&&(r.callback=e),e=Fr(t,r,i),e!==null&&(Ti(e,t,i,n),ac(e,t,i))}};function v0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fa(n,i)||!Fa(r,s):!0}function L_(t,e,n){var i=!1,r=Gr,s=e.contextType;return typeof s=="object"&&s!==null?s=fi(s):(r=Wn(e)?Ts:Rn.current,i=e.contextTypes,s=(i=i!=null)?So(t,r):Gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function _0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function wf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},np(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=fi(s):(s=Wn(e)?Ts:Rn.current,r.context=So(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&iu.enqueueReplaceState(r,r.state,null),Ic(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",i=e;do n+=S1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ef(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $y=typeof WeakMap=="function"?WeakMap:Map;function D_(t,e,n){n=or(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){zc||(zc=!0,If=i),Ef(t,e)},n}function N_(t,e,n){n=or(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ef(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ef(t,e),typeof i!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function x0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new $y;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=cM.bind(null,t,e,n),e.then(t,t))}function y0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function M0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=or(-1,1),e.tag=2,Fr(n,e,1))),n.lanes|=1),t)}var Ky=fr.ReactCurrentOwner,Vn=!1;function Nn(t,e,n,i){e.child=t===null?l_(e,null,n,i):Eo(e,t.child,n,i)}function S0(t,e,n,i,r){n=n.render;var s=e.ref;return go(e,r),i=ap(t,e,n,i,s,r),n=lp(),t!==null&&!Vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,dr(t,e,r)):(Vt&&n&&$h(e),e.flags|=1,Nn(t,e,i,r),e.child)}function w0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!_p(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,I_(t,e,s,i,r)):(t=hc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(o,i)&&t.ref===e.ref)return dr(t,e,r)}return e.flags|=1,t=zr(s,i),t.ref=e.ref,t.return=e,e.child=t}function I_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Fa(s,i)&&t.ref===e.ref)if(Vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Vn=!0);else return e.lanes=t.lanes,dr(t,e,r)}return Tf(t,e,n,i,r)}function U_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(co,Zn),Zn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ut(co,Zn),Zn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ut(co,Zn),Zn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ut(co,Zn),Zn|=i;return Nn(t,e,r,n),e.child}function F_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tf(t,e,n,i,r){var s=Wn(n)?Ts:Rn.current;return s=So(e,s),go(e,r),n=ap(t,e,n,i,s,r),i=lp(),t!==null&&!Vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,dr(t,e,r)):(Vt&&i&&$h(e),e.flags|=1,Nn(t,e,n,r),e.child)}function E0(t,e,n,i,r){if(Wn(n)){var s=!0;Rc(e)}else s=!1;if(go(e,r),e.stateNode===null)uc(t,e),L_(e,n,i),wf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=fi(c):(c=Wn(n)?Ts:Rn.current,c=So(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&_0(e,o,i,c),br=!1;var h=e.memoizedState;o.state=h,Ic(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Gn.current||br?(typeof d=="function"&&(Sf(e,n,d,i),l=e.memoizedState),(a=br||v0(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,u_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:_i(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=fi(l):(l=Wn(n)?Ts:Rn.current,l=So(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&_0(e,o,i,l),br=!1,h=e.memoizedState,o.state=h,Ic(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||Gn.current||br?(typeof p=="function"&&(Sf(e,n,p,i),_=e.memoizedState),(c=br||v0(e,n,c,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Af(t,e,n,i,s,r)}function Af(t,e,n,i,r,s){F_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&c0(e,n,!1),dr(t,e,s);i=e.stateNode,Ky.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Eo(e,t.child,null,s),e.child=Eo(e,null,a,s)):Nn(t,e,a,s),e.memoizedState=i.state,r&&c0(e,n,!0),e.child}function O_(t){var e=t.stateNode;e.pendingContext?l0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&l0(t,e.context,!1),ip(t,e.containerInfo)}function T0(t,e,n,i,r){return wo(),Zh(r),e.flags|=256,Nn(t,e,n,i),e.child}var bf={dehydrated:null,treeContext:null,retryLane:0};function Cf(t){return{baseLanes:t,cachePool:null,transitions:null}}function k_(t,e,n){var i=e.pendingProps,r=Wt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ut(Wt,r&1),t===null)return yf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ou(o,i,0,null),t=Es(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cf(n),e.memoizedState=bf,t):dp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Zy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=zr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=zr(a,s):(s=Es(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Cf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bf,i}return s=t.child,t=s.sibling,i=zr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function dp(t,e){return e=ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bl(t,e,n,i){return i!==null&&Zh(i),Eo(e,t.child,null,n),t=dp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Qu(Error(xe(422))),bl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ou({mode:"visible",children:i.children},r,0,null),s=Es(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Eo(e,t.child,null,o),e.child.memoizedState=Cf(o),e.memoizedState=bf,s);if(!(e.mode&1))return bl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(xe(419)),i=Qu(s,i,void 0),bl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Vn||a){if(i=mn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ur(t,r),Ti(i,t,r,-1))}return vp(),i=Qu(Error(xe(421))),bl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=uM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Qn=Ur(r.nextSibling),ei=e,Vt=!0,yi=null,t!==null&&(li[ci++]=ir,li[ci++]=rr,li[ci++]=As,ir=t.id,rr=t.overflow,As=e),e=dp(e,i.children),e.flags|=4096,e)}function A0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Mf(t.return,e,n)}function ed(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function z_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Nn(t,e,i.children,n),i=Wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&A0(t,n,e);else if(t.tag===19)A0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ut(Wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Uc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ed(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Uc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ed(e,!0,n,null,s);break;case"together":ed(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function uc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(xe(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jy(t,e,n){switch(e.tag){case 3:O_(e),wo();break;case 5:d_(e);break;case 1:Wn(e.type)&&Rc(e);break;case 4:ip(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ut(Dc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ut(Wt,Wt.current&1),e.flags|=128,null):n&e.child.childLanes?k_(t,e,n):(Ut(Wt,Wt.current&1),t=dr(t,e,n),t!==null?t.sibling:null);Ut(Wt,Wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return z_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ut(Wt,Wt.current),i)break;return null;case 22:case 23:return e.lanes=0,U_(t,e,n)}return dr(t,e,n)}var B_,Rf,H_,V_;B_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rf=function(){};H_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ys(ki.current);var s=null;switch(n){case"input":r=Kd(t,r),i=Kd(t,i),s=[];break;case"select":r=jt({},r,{value:void 0}),i=jt({},i,{value:void 0}),s=[];break;case"textarea":r=Qd(t,r),i=Qd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=bc)}tf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ra.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ra.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};V_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ta(t,e){if(!Vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function wn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Qy(t,e,n){var i=e.pendingProps;switch(Kh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(e),null;case 1:return Wn(e.type)&&Cc(),wn(e),null;case 3:return i=e.stateNode,To(),kt(Gn),kt(Rn),sp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yi!==null&&(Of(yi),yi=null))),Rf(t,e),wn(e),null;case 5:rp(e);var r=ys(Ha.current);if(n=e.type,t!==null&&e.stateNode!=null)H_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(xe(166));return wn(e),null}if(t=ys(ki.current),Tl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ni]=e,i[za]=s,t=(e.mode&1)!==0,n){case"dialog":Ot("cancel",i),Ot("close",i);break;case"iframe":case"object":case"embed":Ot("load",i);break;case"video":case"audio":for(r=0;r<ga.length;r++)Ot(ga[r],i);break;case"source":Ot("error",i);break;case"img":case"image":case"link":Ot("error",i),Ot("load",i);break;case"details":Ot("toggle",i);break;case"input":Um(i,s),Ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ot("invalid",i);break;case"textarea":Om(i,s),Ot("invalid",i)}tf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&El(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&El(i.textContent,a,t),r=["children",""+a]):Ra.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ot("scroll",i)}switch(n){case"input":gl(i),Fm(i,s,!0);break;case"textarea":gl(i),km(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=bc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ni]=e,t[za]=i,B_(t,e,!1,!1),e.stateNode=t;e:{switch(o=nf(n,i),n){case"dialog":Ot("cancel",t),Ot("close",t),r=i;break;case"iframe":case"object":case"embed":Ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<ga.length;r++)Ot(ga[r],t);r=i;break;case"source":Ot("error",t),r=i;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),r=i;break;case"details":Ot("toggle",t),r=i;break;case"input":Um(t,i),r=Kd(t,i),Ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=jt({},i,{value:void 0}),Ot("invalid",t);break;case"textarea":Om(t,i),r=Qd(t,i),Ot("invalid",t);break;default:r=i}tf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pa(t,l):typeof l=="number"&&Pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ra.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ot("scroll",t):l!=null&&Uh(t,s,l,o))}switch(n){case"input":gl(t),Fm(t,i,!1);break;case"textarea":gl(t),km(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Vr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?fo(t,!!i.multiple,s,!1):i.defaultValue!=null&&fo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=bc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wn(e),null;case 6:if(t&&e.stateNode!=null)V_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(xe(166));if(n=ys(Ha.current),ys(ki.current),Tl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ni]=e,(s=i.nodeValue!==n)&&(t=ei,t!==null))switch(t.tag){case 3:El(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&El(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ni]=e,e.stateNode=i}return wn(e),null;case 13:if(kt(Wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&Qn!==null&&e.mode&1&&!(e.flags&128))o_(),wo(),e.flags|=98560,s=!1;else if(s=Tl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(xe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(xe(317));s[Ni]=e}else wo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wn(e),s=!1}else yi!==null&&(Of(yi),yi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Wt.current&1?on===0&&(on=3):vp())),e.updateQueue!==null&&(e.flags|=4),wn(e),null);case 4:return To(),Rf(t,e),t===null&&Oa(e.stateNode.containerInfo),wn(e),null;case 10:return ep(e.type._context),wn(e),null;case 17:return Wn(e.type)&&Cc(),wn(e),null;case 19:if(kt(Wt),s=e.memoizedState,s===null)return wn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ta(s,!1);else{if(on!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uc(t),o!==null){for(e.flags|=128,ta(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ut(Wt,Wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Kt()>bo&&(e.flags|=128,i=!0,ta(s,!1),e.lanes=4194304)}else{if(!i)if(t=Uc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Vt)return wn(e),null}else 2*Kt()-s.renderingStartTime>bo&&n!==1073741824&&(e.flags|=128,i=!0,ta(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Kt(),e.sibling=null,n=Wt.current,Ut(Wt,i?n&1|2:n&1),e):(wn(e),null);case 22:case 23:return gp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Zn&1073741824&&(wn(e),e.subtreeFlags&6&&(e.flags|=8192)):wn(e),null;case 24:return null;case 25:return null}throw Error(xe(156,e.tag))}function eM(t,e){switch(Kh(e),e.tag){case 1:return Wn(e.type)&&Cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return To(),kt(Gn),kt(Rn),sp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rp(e),null;case 13:if(kt(Wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(xe(340));wo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return kt(Wt),null;case 4:return To(),null;case 10:return ep(e.type._context),null;case 22:case 23:return gp(),null;case 24:return null;default:return null}}var Cl=!1,Cn=!1,tM=typeof WeakSet=="function"?WeakSet:Set,He=null;function lo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){qt(t,e,i)}else n.current=null}function Pf(t,e,n){try{n()}catch(i){qt(t,e,i)}}var b0=!1;function nM(t,e){if(hf=Ec,t=Yv(),qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pf={focusedElem:t,selectionRange:n},Ec=!1,He=e;He!==null;)if(e=He,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,He=t;else for(;He!==null;){e=He;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,g=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?E:_i(e.type,E),g);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(xe(163))}}catch(y){qt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,He=t;break}He=e.return}return _=b0,b0=!1,_}function Ea(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Pf(e,n,s)}r=r.next}while(r!==i)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Lf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G_(t){var e=t.alternate;e!==null&&(t.alternate=null,G_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ni],delete e[za],delete e[vf],delete e[ky],delete e[zy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W_(t){return t.tag===5||t.tag===3||t.tag===4}function C0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bc));else if(i!==4&&(t=t.child,t!==null))for(Df(t,e,n),t=t.sibling;t!==null;)Df(t,e,n),t=t.sibling}function Nf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Nf(t,e,n),t=t.sibling;t!==null;)Nf(t,e,n),t=t.sibling}var _n=null,xi=!1;function _r(t,e,n){for(n=n.child;n!==null;)X_(t,e,n),n=n.sibling}function X_(t,e,n){if(Oi&&typeof Oi.onCommitFiberUnmount=="function")try{Oi.onCommitFiberUnmount(Kc,n)}catch{}switch(n.tag){case 5:Cn||lo(n,e);case 6:var i=_n,r=xi;_n=null,_r(t,e,n),_n=i,xi=r,_n!==null&&(xi?(t=_n,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_n.removeChild(n.stateNode));break;case 18:_n!==null&&(xi?(t=_n,n=n.stateNode,t.nodeType===8?Yu(t.parentNode,n):t.nodeType===1&&Yu(t,n),Ia(t)):Yu(_n,n.stateNode));break;case 4:i=_n,r=xi,_n=n.stateNode.containerInfo,xi=!0,_r(t,e,n),_n=i,xi=r;break;case 0:case 11:case 14:case 15:if(!Cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pf(n,e,o),r=r.next}while(r!==i)}_r(t,e,n);break;case 1:if(!Cn&&(lo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){qt(n,e,a)}_r(t,e,n);break;case 21:_r(t,e,n);break;case 22:n.mode&1?(Cn=(i=Cn)||n.memoizedState!==null,_r(t,e,n),Cn=i):_r(t,e,n);break;default:_r(t,e,n)}}function R0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tM),e.forEach(function(i){var r=dM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function pi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_n=a.stateNode,xi=!1;break e;case 3:_n=a.stateNode.containerInfo,xi=!0;break e;case 4:_n=a.stateNode.containerInfo,xi=!0;break e}a=a.return}if(_n===null)throw Error(xe(160));X_(s,o,r),_n=null,xi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){qt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)j_(e,t),e=e.sibling}function j_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pi(e,t),Pi(t),i&4){try{Ea(3,t,t.return),ru(3,t)}catch(E){qt(t,t.return,E)}try{Ea(5,t,t.return)}catch(E){qt(t,t.return,E)}}break;case 1:pi(e,t),Pi(t),i&512&&n!==null&&lo(n,n.return);break;case 5:if(pi(e,t),Pi(t),i&512&&n!==null&&lo(n,n.return),t.flags&32){var r=t.stateNode;try{Pa(r,"")}catch(E){qt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&pv(r,s),nf(a,o);var c=nf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?xv(r,f):d==="dangerouslySetInnerHTML"?vv(r,f):d==="children"?Pa(r,f):Uh(r,d,f,c)}switch(a){case"input":Zd(r,s);break;case"textarea":mv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?fo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?fo(r,!!s.multiple,s.defaultValue,!0):fo(r,!!s.multiple,s.multiple?[]:"",!1))}r[za]=s}catch(E){qt(t,t.return,E)}}break;case 6:if(pi(e,t),Pi(t),i&4){if(t.stateNode===null)throw Error(xe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){qt(t,t.return,E)}}break;case 3:if(pi(e,t),Pi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ia(e.containerInfo)}catch(E){qt(t,t.return,E)}break;case 4:pi(e,t),Pi(t);break;case 13:pi(e,t),Pi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(pp=Kt())),i&4&&R0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Cn=(c=Cn)||d,pi(e,t),Cn=c):pi(e,t),Pi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(He=t,d=t.child;d!==null;){for(f=He=d;He!==null;){switch(h=He,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ea(4,h,h.return);break;case 1:lo(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(E){qt(i,n,E)}}break;case 5:lo(h,h.return);break;case 22:if(h.memoizedState!==null){L0(f);continue}}p!==null?(p.return=h,He=p):L0(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_v("display",o))}catch(E){qt(t,t.return,E)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(E){qt(t,t.return,E)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:pi(e,t),Pi(t),i&4&&R0(t);break;case 21:break;default:pi(e,t),Pi(t)}}function Pi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W_(n)){var i=n;break e}n=n.return}throw Error(xe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Pa(r,""),i.flags&=-33);var s=C0(t);Nf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=C0(t);Df(t,a,o);break;default:throw Error(xe(161))}}catch(l){qt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iM(t,e,n){He=t,Y_(t)}function Y_(t,e,n){for(var i=(t.mode&1)!==0;He!==null;){var r=He,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Cl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Cn;a=Cl;var c=Cn;if(Cl=o,(Cn=l)&&!c)for(He=r;He!==null;)o=He,l=o.child,o.tag===22&&o.memoizedState!==null?D0(r):l!==null?(l.return=o,He=l):D0(r);for(;s!==null;)He=s,Y_(s),s=s.sibling;He=r,Cl=a,Cn=c}P0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,He=s):P0(t)}}function P0(t){for(;He!==null;){var e=He;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Cn||ru(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:_i(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&p0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}p0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ia(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(xe(163))}Cn||e.flags&512&&Lf(e)}catch(h){qt(e,e.return,h)}}if(e===t){He=null;break}if(n=e.sibling,n!==null){n.return=e.return,He=n;break}He=e.return}}function L0(t){for(;He!==null;){var e=He;if(e===t){He=null;break}var n=e.sibling;if(n!==null){n.return=e.return,He=n;break}He=e.return}}function D0(t){for(;He!==null;){var e=He;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(l){qt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){qt(e,r,l)}}var s=e.return;try{Lf(e)}catch(l){qt(e,s,l)}break;case 5:var o=e.return;try{Lf(e)}catch(l){qt(e,o,l)}}}catch(l){qt(e,e.return,l)}if(e===t){He=null;break}var a=e.sibling;if(a!==null){a.return=e.return,He=a;break}He=e.return}}var rM=Math.ceil,kc=fr.ReactCurrentDispatcher,fp=fr.ReactCurrentOwner,di=fr.ReactCurrentBatchConfig,Et=0,mn=null,Jt=null,xn=0,Zn=0,co=Yr(0),on=0,Xa=null,Cs=0,su=0,hp=0,Ta=null,Hn=null,pp=0,bo=1/0,er=null,zc=!1,If=null,Or=null,Rl=!1,Lr=null,Bc=0,Aa=0,Uf=null,dc=-1,fc=0;function In(){return Et&6?Kt():dc!==-1?dc:dc=Kt()}function kr(t){return t.mode&1?Et&2&&xn!==0?xn&-xn:Hy.transition!==null?(fc===0&&(fc=Lv()),fc):(t=Lt,t!==0||(t=window.event,t=t===void 0?16:kv(t.type)),t):1}function Ti(t,e,n,i){if(50<Aa)throw Aa=0,Uf=null,Error(xe(185));Qa(t,n,i),(!(Et&2)||t!==mn)&&(t===mn&&(!(Et&2)&&(su|=n),on===4&&Rr(t,xn)),Xn(t,i),n===1&&Et===0&&!(e.mode&1)&&(bo=Kt()+500,tu&&qr()))}function Xn(t,e){var n=t.callbackNode;H1(t,e);var i=wc(t,t===mn?xn:0);if(i===0)n!==null&&Hm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hm(n),e===1)t.tag===0?By(N0.bind(null,t)):i_(N0.bind(null,t)),Fy(function(){!(Et&6)&&qr()}),n=null;else{switch(Dv(i)){case 1:n=Bh;break;case 4:n=Rv;break;case 16:n=Sc;break;case 536870912:n=Pv;break;default:n=Sc}n=tx(n,q_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function q_(t,e){if(dc=-1,fc=0,Et&6)throw Error(xe(327));var n=t.callbackNode;if(vo()&&t.callbackNode!==n)return null;var i=wc(t,t===mn?xn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Hc(t,i);else{e=i;var r=Et;Et|=2;var s=K_();(mn!==t||xn!==e)&&(er=null,bo=Kt()+500,ws(t,e));do try{aM();break}catch(a){$_(t,a)}while(!0);Qh(),kc.current=s,Et=r,Jt!==null?e=0:(mn=null,xn=0,e=on)}if(e!==0){if(e===2&&(r=lf(t),r!==0&&(i=r,e=Ff(t,r))),e===1)throw n=Xa,ws(t,0),Rr(t,i),Xn(t,Kt()),n;if(e===6)Rr(t,i);else{if(r=t.current.alternate,!(i&30)&&!sM(r)&&(e=Hc(t,i),e===2&&(s=lf(t),s!==0&&(i=s,e=Ff(t,s))),e===1))throw n=Xa,ws(t,0),Rr(t,i),Xn(t,Kt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(xe(345));case 2:hs(t,Hn,er);break;case 3:if(Rr(t,i),(i&130023424)===i&&(e=pp+500-Kt(),10<e)){if(wc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){In(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=gf(hs.bind(null,t,Hn,er),e);break}hs(t,Hn,er);break;case 4:if(Rr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*rM(i/1960))-i,10<i){t.timeoutHandle=gf(hs.bind(null,t,Hn,er),i);break}hs(t,Hn,er);break;case 5:hs(t,Hn,er);break;default:throw Error(xe(329))}}}return Xn(t,Kt()),t.callbackNode===n?q_.bind(null,t):null}function Ff(t,e){var n=Ta;return t.current.memoizedState.isDehydrated&&(ws(t,e).flags|=256),t=Hc(t,e),t!==2&&(e=Hn,Hn=n,e!==null&&Of(e)),t}function Of(t){Hn===null?Hn=t:Hn.push.apply(Hn,t)}function sM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!bi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(t,e){for(e&=~hp,e&=~su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ei(e),i=1<<n;t[n]=-1,e&=~i}}function N0(t){if(Et&6)throw Error(xe(327));vo();var e=wc(t,0);if(!(e&1))return Xn(t,Kt()),null;var n=Hc(t,e);if(t.tag!==0&&n===2){var i=lf(t);i!==0&&(e=i,n=Ff(t,i))}if(n===1)throw n=Xa,ws(t,0),Rr(t,e),Xn(t,Kt()),n;if(n===6)throw Error(xe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hs(t,Hn,er),Xn(t,Kt()),null}function mp(t,e){var n=Et;Et|=1;try{return t(e)}finally{Et=n,Et===0&&(bo=Kt()+500,tu&&qr())}}function Rs(t){Lr!==null&&Lr.tag===0&&!(Et&6)&&vo();var e=Et;Et|=1;var n=di.transition,i=Lt;try{if(di.transition=null,Lt=1,t)return t()}finally{Lt=i,di.transition=n,Et=e,!(Et&6)&&qr()}}function gp(){Zn=co.current,kt(co)}function ws(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Uy(n)),Jt!==null)for(n=Jt.return;n!==null;){var i=n;switch(Kh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Cc();break;case 3:To(),kt(Gn),kt(Rn),sp();break;case 5:rp(i);break;case 4:To();break;case 13:kt(Wt);break;case 19:kt(Wt);break;case 10:ep(i.type._context);break;case 22:case 23:gp()}n=n.return}if(mn=t,Jt=t=zr(t.current,null),xn=Zn=e,on=0,Xa=null,hp=su=Cs=0,Hn=Ta=null,xs!==null){for(e=0;e<xs.length;e++)if(n=xs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}xs=null}return t}function $_(t,e){do{var n=Jt;try{if(Qh(),lc.current=Oc,Fc){for(var i=Xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fc=!1}if(bs=0,pn=sn=Xt=null,wa=!1,Va=0,fp.current=null,n===null||n.return===null){on=1,Xa=e,Jt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=xn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=y0(o);if(p!==null){p.flags&=-257,M0(p,o,a,s,e),p.mode&1&&x0(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var E=new Set;E.add(l),e.updateQueue=E}else _.add(l);break e}else{if(!(e&1)){x0(s,c,e),vp();break e}l=Error(xe(426))}}else if(Vt&&a.mode&1){var g=y0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),M0(g,o,a,s,e),Zh(Ao(l,a));break e}}s=l=Ao(l,a),on!==4&&(on=2),Ta===null?Ta=[s]:Ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=D_(s,l,e);h0(s,u);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Or===null||!Or.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=N_(s,a,e);h0(s,y);break e}}s=s.return}while(s!==null)}J_(n)}catch(b){e=b,Jt===n&&n!==null&&(Jt=n=n.return);continue}break}while(!0)}function K_(){var t=kc.current;return kc.current=Oc,t===null?Oc:t}function vp(){(on===0||on===3||on===2)&&(on=4),mn===null||!(Cs&268435455)&&!(su&268435455)||Rr(mn,xn)}function Hc(t,e){var n=Et;Et|=2;var i=K_();(mn!==t||xn!==e)&&(er=null,ws(t,e));do try{oM();break}catch(r){$_(t,r)}while(!0);if(Qh(),Et=n,kc.current=i,Jt!==null)throw Error(xe(261));return mn=null,xn=0,on}function oM(){for(;Jt!==null;)Z_(Jt)}function aM(){for(;Jt!==null&&!D1();)Z_(Jt)}function Z_(t){var e=ex(t.alternate,t,Zn);t.memoizedProps=t.pendingProps,e===null?J_(t):Jt=e,fp.current=null}function J_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eM(n,e),n!==null){n.flags&=32767,Jt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{on=6,Jt=null;return}}else if(n=Qy(n,e,Zn),n!==null){Jt=n;return}if(e=e.sibling,e!==null){Jt=e;return}Jt=e=t}while(e!==null);on===0&&(on=5)}function hs(t,e,n){var i=Lt,r=di.transition;try{di.transition=null,Lt=1,lM(t,e,n,i)}finally{di.transition=r,Lt=i}return null}function lM(t,e,n,i){do vo();while(Lr!==null);if(Et&6)throw Error(xe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(xe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(V1(t,s),t===mn&&(Jt=mn=null,xn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rl||(Rl=!0,tx(Sc,function(){return vo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=di.transition,di.transition=null;var o=Lt;Lt=1;var a=Et;Et|=4,fp.current=null,nM(t,n),j_(n,t),Cy(pf),Ec=!!hf,pf=hf=null,t.current=n,iM(n),N1(),Et=a,Lt=o,di.transition=s}else t.current=n;if(Rl&&(Rl=!1,Lr=t,Bc=r),s=t.pendingLanes,s===0&&(Or=null),F1(n.stateNode),Xn(t,Kt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(zc)throw zc=!1,t=If,If=null,t;return Bc&1&&t.tag!==0&&vo(),s=t.pendingLanes,s&1?t===Uf?Aa++:(Aa=0,Uf=t):Aa=0,qr(),null}function vo(){if(Lr!==null){var t=Dv(Bc),e=di.transition,n=Lt;try{if(di.transition=null,Lt=16>t?16:t,Lr===null)var i=!1;else{if(t=Lr,Lr=null,Bc=0,Et&6)throw Error(xe(331));var r=Et;for(Et|=4,He=t.current;He!==null;){var s=He,o=s.child;if(He.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(He=c;He!==null;){var d=He;switch(d.tag){case 0:case 11:case 15:Ea(8,d,s)}var f=d.child;if(f!==null)f.return=d,He=f;else for(;He!==null;){d=He;var h=d.sibling,p=d.return;if(G_(d),d===c){He=null;break}if(h!==null){h.return=p,He=h;break}He=p}}}var _=s.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}He=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,He=o;else e:for(;He!==null;){if(s=He,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ea(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,He=u;break e}He=s.return}}var m=t.current;for(He=m;He!==null;){o=He;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,He=v;else e:for(o=m;He!==null;){if(a=He,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ru(9,a)}}catch(b){qt(a,a.return,b)}if(a===o){He=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,He=y;break e}He=a.return}}if(Et=r,qr(),Oi&&typeof Oi.onPostCommitFiberRoot=="function")try{Oi.onPostCommitFiberRoot(Kc,t)}catch{}i=!0}return i}finally{Lt=n,di.transition=e}}return!1}function I0(t,e,n){e=Ao(n,e),e=D_(t,e,1),t=Fr(t,e,1),e=In(),t!==null&&(Qa(t,1,e),Xn(t,e))}function qt(t,e,n){if(t.tag===3)I0(t,t,n);else for(;e!==null;){if(e.tag===3){I0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Or===null||!Or.has(i))){t=Ao(n,t),t=N_(e,t,1),e=Fr(e,t,1),t=In(),e!==null&&(Qa(e,1,t),Xn(e,t));break}}e=e.return}}function cM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=In(),t.pingedLanes|=t.suspendedLanes&n,mn===t&&(xn&n)===n&&(on===4||on===3&&(xn&130023424)===xn&&500>Kt()-pp?ws(t,0):hp|=n),Xn(t,e)}function Q_(t,e){e===0&&(t.mode&1?(e=xl,xl<<=1,!(xl&130023424)&&(xl=4194304)):e=1);var n=In();t=ur(t,e),t!==null&&(Qa(t,e,n),Xn(t,n))}function uM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Q_(t,n)}function dM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(xe(314))}i!==null&&i.delete(e),Q_(t,n)}var ex;ex=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gn.current)Vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vn=!1,Jy(t,e,n);Vn=!!(t.flags&131072)}else Vn=!1,Vt&&e.flags&1048576&&r_(e,Lc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;uc(t,e),t=e.pendingProps;var r=So(e,Rn.current);go(e,n),r=ap(null,e,i,t,r,n);var s=lp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wn(i)?(s=!0,Rc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,np(e),r.updater=iu,e.stateNode=r,r._reactInternals=e,wf(e,i,t,n),e=Af(null,e,i,!0,s,n)):(e.tag=0,Vt&&s&&$h(e),Nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(uc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hM(i),t=_i(i,t),r){case 0:e=Tf(null,e,i,t,n);break e;case 1:e=E0(null,e,i,t,n);break e;case 11:e=S0(null,e,i,t,n);break e;case 14:e=w0(null,e,i,_i(i.type,t),n);break e}throw Error(xe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),Tf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),E0(t,e,i,r,n);case 3:e:{if(O_(e),t===null)throw Error(xe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,u_(t,e),Ic(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ao(Error(xe(423)),e),e=T0(t,e,i,n,r);break e}else if(i!==r){r=Ao(Error(xe(424)),e),e=T0(t,e,i,n,r);break e}else for(Qn=Ur(e.stateNode.containerInfo.firstChild),ei=e,Vt=!0,yi=null,n=l_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wo(),i===r){e=dr(t,e,n);break e}Nn(t,e,i,n)}e=e.child}return e;case 5:return d_(e),t===null&&yf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,mf(i,r)?o=null:s!==null&&mf(i,s)&&(e.flags|=32),F_(t,e),Nn(t,e,o,n),e.child;case 6:return t===null&&yf(e),null;case 13:return k_(t,e,n);case 4:return ip(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Eo(e,null,i,n):Nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),S0(t,e,i,r,n);case 7:return Nn(t,e,e.pendingProps,n),e.child;case 8:return Nn(t,e,e.pendingProps.children,n),e.child;case 12:return Nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ut(Dc,i._currentValue),i._currentValue=o,s!==null)if(bi(s.value,o)){if(s.children===r.children&&!Gn.current){e=dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=or(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Mf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(xe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,go(e,n),r=fi(r),i=i(r),e.flags|=1,Nn(t,e,i,n),e.child;case 14:return i=e.type,r=_i(i,e.pendingProps),r=_i(i.type,r),w0(t,e,i,r,n);case 15:return I_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),uc(t,e),e.tag=1,Wn(i)?(t=!0,Rc(e)):t=!1,go(e,n),L_(e,i,r),wf(e,i,r,n),Af(null,e,i,!0,t,n);case 19:return z_(t,e,n);case 22:return U_(t,e,n)}throw Error(xe(156,e.tag))};function tx(t,e){return Cv(t,e)}function fM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(t,e,n,i){return new fM(t,e,n,i)}function _p(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hM(t){if(typeof t=="function")return _p(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Oh)return 11;if(t===kh)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=ui(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")_p(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qs:return Es(n.children,r,s,e);case Fh:o=8,r|=8;break;case jd:return t=ui(12,n,e,r|2),t.elementType=jd,t.lanes=s,t;case Yd:return t=ui(13,n,e,r),t.elementType=Yd,t.lanes=s,t;case qd:return t=ui(19,n,e,r),t.elementType=qd,t.lanes=s,t;case dv:return ou(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cv:o=10;break e;case uv:o=9;break e;case Oh:o=11;break e;case kh:o=14;break e;case Ar:o=16,i=null;break e}throw Error(xe(130,t==null?t:typeof t,""))}return e=ui(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Es(t,e,n,i){return t=ui(7,t,i,e),t.lanes=n,t}function ou(t,e,n,i){return t=ui(22,t,i,e),t.elementType=dv,t.lanes=n,t.stateNode={isHidden:!1},t}function td(t,e,n){return t=ui(6,t,null,e),t.lanes=n,t}function nd(t,e,n){return e=ui(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xp(t,e,n,i,r,s,o,a,l){return t=new pM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ui(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},np(s),t}function mM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Js,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function nx(t){if(!t)return Gr;t=t._reactInternals;e:{if(Ns(t)!==t||t.tag!==1)throw Error(xe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(xe(171))}if(t.tag===1){var n=t.type;if(Wn(n))return n_(t,n,e)}return e}function ix(t,e,n,i,r,s,o,a,l){return t=xp(n,i,!0,t,r,s,o,a,l),t.context=nx(null),n=t.current,i=In(),r=kr(n),s=or(i,r),s.callback=e??null,Fr(n,s,r),t.current.lanes=r,Qa(t,r,i),Xn(t,i),t}function au(t,e,n,i){var r=e.current,s=In(),o=kr(r);return n=nx(n),e.context===null?e.context=n:e.pendingContext=n,e=or(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Fr(r,e,o),t!==null&&(Ti(t,r,o,s),ac(t,r,o)),o}function Vc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function U0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yp(t,e){U0(t,e),(t=t.alternate)&&U0(t,e)}function gM(){return null}var rx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mp(t){this._internalRoot=t}lu.prototype.render=Mp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(xe(409));au(t,e,null,null)};lu.prototype.unmount=Mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rs(function(){au(null,t,null,null)}),e[cr]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cr.length&&e!==0&&e<Cr[n].priority;n++);Cr.splice(n,0,t),n===0&&Ov(t)}};function Sp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function F0(){}function vM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Vc(o);s.call(c)}}var o=ix(e,i,t,0,null,!1,!1,"",F0);return t._reactRootContainer=o,t[cr]=o.current,Oa(t.nodeType===8?t.parentNode:t),Rs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Vc(l);a.call(c)}}var l=xp(t,0,!1,null,null,!1,!1,"",F0);return t._reactRootContainer=l,t[cr]=l.current,Oa(t.nodeType===8?t.parentNode:t),Rs(function(){au(e,l,n,i)}),l}function uu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Vc(o);a.call(l)}}au(e,o,t,r)}else o=vM(n,e,t,r,i);return Vc(o)}Nv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ma(e.pendingLanes);n!==0&&(Hh(e,n|1),Xn(e,Kt()),!(Et&6)&&(bo=Kt()+500,qr()))}break;case 13:Rs(function(){var i=ur(t,1);if(i!==null){var r=In();Ti(i,t,1,r)}}),yp(t,1)}};Vh=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=In();Ti(e,t,134217728,n)}yp(t,134217728)}};Iv=function(t){if(t.tag===13){var e=kr(t),n=ur(t,e);if(n!==null){var i=In();Ti(n,t,e,i)}yp(t,e)}};Uv=function(){return Lt};Fv=function(t,e){var n=Lt;try{return Lt=t,e()}finally{Lt=n}};sf=function(t,e,n){switch(e){case"input":if(Zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=eu(i);if(!r)throw Error(xe(90));hv(i),Zd(i,r)}}}break;case"textarea":mv(t,n);break;case"select":e=n.value,e!=null&&fo(t,!!n.multiple,e,!1)}};Sv=mp;wv=Rs;var _M={usingClientEntryPoint:!1,Events:[tl,io,eu,yv,Mv,mp]},na={findFiberByHostInstance:_s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xM={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Av(t),t===null?null:t.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||gM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{Kc=Pl.inject(xM),Oi=Pl}catch{}}ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_M;ni.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sp(e))throw Error(xe(200));return mM(t,e,null,n)};ni.createRoot=function(t,e){if(!Sp(t))throw Error(xe(299));var n=!1,i="",r=rx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xp(t,1,!1,null,null,n,!1,i,r),t[cr]=e.current,Oa(t.nodeType===8?t.parentNode:t),new Mp(e)};ni.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(xe(188)):(t=Object.keys(t).join(","),Error(xe(268,t)));return t=Av(e),t=t===null?null:t.stateNode,t};ni.flushSync=function(t){return Rs(t)};ni.hydrate=function(t,e,n){if(!cu(e))throw Error(xe(200));return uu(null,t,e,!0,n)};ni.hydrateRoot=function(t,e,n){if(!Sp(t))throw Error(xe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=rx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ix(e,null,t,1,n??null,r,!1,s,o),t[cr]=e.current,Oa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new lu(e)};ni.render=function(t,e,n){if(!cu(e))throw Error(xe(200));return uu(null,t,e,!1,n)};ni.unmountComponentAtNode=function(t){if(!cu(t))throw Error(xe(40));return t._reactRootContainer?(Rs(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[cr]=null})}),!0):!1};ni.unstable_batchedUpdates=mp;ni.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!cu(n))throw Error(xe(200));if(t==null||t._reactInternals===void 0)throw Error(xe(38));return uu(t,e,n,!1,i)};ni.version="18.3.1-next-f1338f8080-20240426";function sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sx)}catch(t){console.error(t)}}sx(),sv.exports=ni;var yM=sv.exports,ox,O0=yM;ox=O0.createRoot,O0.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wp="180",MM=0,k0=1,SM=2,ax=1,lx=2,Qi=3,Wr=0,jn=1,Mi=2,Br=0,_o=1,z0=2,B0=3,H0=4,wM=5,gs=100,EM=101,TM=102,AM=103,bM=104,CM=200,RM=201,PM=202,LM=203,kf=204,zf=205,DM=206,NM=207,IM=208,UM=209,FM=210,OM=211,kM=212,zM=213,BM=214,Bf=0,Hf=1,Vf=2,Co=3,Gf=4,Wf=5,Xf=6,jf=7,cx=0,HM=1,VM=2,Hr=0,GM=1,WM=2,XM=3,ux=4,jM=5,YM=6,qM=7,dx=300,Ro=301,Po=302,Yf=303,qf=304,du=306,ja=1e3,Ms=1001,$f=1002,Ai=1003,$M=1004,Ll=1005,Ui=1006,id=1007,Ss=1008,Bi=1009,fx=1010,hx=1011,Ya=1012,Ep=1013,Ps=1014,sr=1015,il=1016,Tp=1017,Ap=1018,qa=1020,px=35902,mx=35899,gx=1021,vx=1022,wi=1023,$a=1026,Ka=1027,_x=1028,bp=1029,xx=1030,Cp=1031,Rp=1033,pc=33776,mc=33777,gc=33778,vc=33779,Kf=35840,Zf=35841,Jf=35842,Qf=35843,eh=36196,th=37492,nh=37496,ih=37808,rh=37809,sh=37810,oh=37811,ah=37812,lh=37813,ch=37814,uh=37815,dh=37816,fh=37817,hh=37818,ph=37819,mh=37820,gh=37821,vh=36492,_h=36494,xh=36495,yh=36283,Mh=36284,Sh=36285,wh=36286,KM=3200,ZM=3201,yx=0,JM=1,Ii="",Bn="srgb",Lo="srgb-linear",Gc="linear",Dt="srgb",ks=7680,V0=519,QM=512,eS=513,tS=514,Mx=515,nS=516,iS=517,rS=518,sS=519,G0=35044,W0="300 es",Fi=2e3,Wc=2001;class Fo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,Eh=180/Math.PI;function rl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[t&255]+En[t>>8&255]+En[t>>16&255]+En[t>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[n&63|128]+En[n>>8&255]+"-"+En[n>>16&255]+En[n>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function mt(t,e,n){return Math.max(e,Math.min(n,t))}function oS(t,e){return(t%e+e)%e}function sd(t,e,n){return(1-n)*t+n*e}function ia(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function zn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,n=0){Ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],E=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=E;return}if(f!==E||l!==h||c!==p||d!==_){let g=1-a;const u=l*h+c*p+d*_+f*E,m=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const b=Math.sqrt(v),R=Math.atan2(b,u*m);g=Math.sin(g*R)/b,a=Math.sin(a*R)/b}const y=a*m;if(l=l*g+h*y,c=c*g+p*y,d=d*g+_*y,f=f*g+E*y,g===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=b,c*=b,d*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+d*f+l*p-c*h,e[n+1]=l*_+d*h+c*f-a*p,e[n+2]=c*_+d*p+a*h-l*f,e[n+3]=d*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"YXZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"ZXY":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"ZYX":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"YZX":this._x=h*d*f+c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f-h*p*_;break;case"XZY":this._x=h*d*f-c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(X0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(X0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new O,X0=new sl;class ft{constructor(e,n,i,r,s,o,a,l,c){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],_=i[8],E=r[0],g=r[3],u=r[6],m=r[1],v=r[4],y=r[7],b=r[2],R=r[5],P=r[8];return s[0]=o*E+a*m+l*b,s[3]=o*g+a*v+l*R,s[6]=o*u+a*y+l*P,s[1]=c*E+d*m+f*b,s[4]=c*g+d*v+f*R,s[7]=c*u+d*y+f*P,s[2]=h*E+p*m+_*b,s[5]=h*g+p*v+_*R,s[8]=h*u+p*y+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,p=c*s-o*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=f*E,e[1]=(r*c-d*i)*E,e[2]=(a*i-r*o)*E,e[3]=h*E,e[4]=(d*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=p*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ad.makeScale(e,n)),this}rotate(e){return this.premultiply(ad.makeRotation(-e)),this}translate(e,n){return this.premultiply(ad.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ad=new ft;function Sx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Xc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function aS(){const t=Xc("canvas");return t.style.display="block",t}const j0={};function Za(t){t in j0||(j0[t]=!0,console.warn(t))}function lS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Y0=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q0=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cS(){const t={enabled:!0,workingColorSpace:Lo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Dt&&(r.r=ar(r.r),r.g=ar(r.g),r.b=ar(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Dt&&(r.r=xo(r.r),r.g=xo(r.g),r.b=xo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ii?Gc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Za("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Za("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Lo]:{primaries:e,whitePoint:i,transfer:Gc,toXYZ:Y0,fromXYZ:q0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:Y0,fromXYZ:q0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),t}const bt=cS();function ar(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function xo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zs;class uS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zs===void 0&&(zs=Xc("canvas")),zs.width=e.width,zs.height=e.height;const r=zs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ar(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ar(n[i]/255)*255):n[i]=ar(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dS=0;class Pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ld(r[o].image)):s.push(ld(r[o]))}else s=ld(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ld(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?uS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fS=0;const cd=new O;class Un extends Fo{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,i=Ms,r=Ms,s=Ui,o=Ss,a=wi,l=Bi,c=Un.DEFAULT_ANISOTROPY,d=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=rl(),this.name="",this.source=new Pp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cd).x}get height(){return this.source.getSize(cd).y}get depth(){return this.source.getSize(cd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case Ms:e.x=e.x<0?0:1;break;case $f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case Ms:e.y=e.y<0?0:1;break;case $f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=dx;Un.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],_=l[9],E=l[2],g=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-E)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+E)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(p+1)/2,b=(u+1)/2,R=(d+h)/4,P=(f+E)/4,D=(_+g)/4;return v>y&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=P/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=D/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=P/s,r=D/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(f-E)*(f-E)+(h-d)*(h-d));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(f-E)/m,this.z=(h-d)/m,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this.w=mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this.w=mt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hS extends Fo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Un(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Ui,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Pp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends hS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class wx extends Un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pS extends Un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ol{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(s,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dl.copy(i.boundingBox)),Dl.applyMatrix4(e.matrixWorld),this.union(Dl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Nl.subVectors(this.max,ra),Bs.subVectors(e.a,ra),Hs.subVectors(e.b,ra),Vs.subVectors(e.c,ra),xr.subVectors(Hs,Bs),yr.subVectors(Vs,Hs),ss.subVectors(Bs,Vs);let n=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-ss.z,ss.y,xr.z,0,-xr.x,yr.z,0,-yr.x,ss.z,0,-ss.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-ss.y,ss.x,0];return!ud(n,Bs,Hs,Vs,Nl)||(n=[1,0,0,0,1,0,0,0,1],!ud(n,Bs,Hs,Vs,Nl))?!1:(Il.crossVectors(xr,yr),n=[Il.x,Il.y,Il.z],ud(n,Bs,Hs,Vs,Nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qi=[new O,new O,new O,new O,new O,new O,new O,new O],mi=new O,Dl=new ol,Bs=new O,Hs=new O,Vs=new O,xr=new O,yr=new O,ss=new O,ra=new O,Nl=new O,Il=new O,os=new O;function ud(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){os.fromArray(t,s);const a=r.x*Math.abs(os.x)+r.y*Math.abs(os.y)+r.z*Math.abs(os.z),l=e.dot(os),c=n.dot(os),d=i.dot(os);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const mS=new ol,sa=new O,dd=new O;class fu{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):mS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const n=sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(dd)),this.expandByPoint(sa.copy(e.center).sub(dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $i=new O,fd=new O,Ul=new O,Mr=new O,hd=new O,Fl=new O,pd=new O;class Lp{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=$i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,n),$i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){fd.copy(e).add(n).multiplyScalar(.5),Ul.copy(n).sub(e).normalize(),Mr.copy(this.origin).sub(fd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ul),a=Mr.dot(this.direction),l=-Mr.dot(Ul),c=Mr.lengthSq(),d=Math.abs(1-o*o);let f,h,p,_;if(d>0)if(f=o*l-a,h=o*a-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const E=1/d;f*=E,h*=E,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(fd).addScaledVector(Ul,h),p}intersectSphere(e,n){$i.subVectors(e.center,this.origin);const i=$i.dot(this.direction),r=$i.dot($i)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,n,i,r,s){hd.subVectors(n,e),Fl.subVectors(i,e),pd.crossVectors(hd,Fl);let o=this.direction.dot(pd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mr.subVectors(this.origin,e);const l=a*this.direction.dot(Fl.crossVectors(Mr,Fl));if(l<0)return null;const c=a*this.direction.dot(hd.cross(Mr));if(c<0||l+c>o)return null;const d=-a*Mr.dot(pd);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,n,i,r,s,o,a,l,c,d,f,h,p,_,E,g){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,p,_,E,g)}set(e,n,i,r,s,o,a,l,c,d,f,h,p,_,E,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=_,u[11]=E,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Gs.setFromMatrixColumn(e,0).length(),s=1/Gs.setFromMatrixColumn(e,1).length(),o=1/Gs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*f,_=a*d,E=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-E*c,n[9]=-a*l,n[2]=E-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,_=c*d,E=c*f;n[0]=h+E*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-_,n[6]=E+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,_=c*d,E=c*f;n[0]=h-E*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*d,n[9]=E-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,_=a*d,E=a*f;n[0]=l*d,n[4]=_*c-p,n[8]=h*c+E,n[1]=l*f,n[5]=E*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,E=a*c;n[0]=l*d,n[4]=E-h*f,n[8]=_*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+_,n[10]=h-E*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,E=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+E,n[5]=o*d,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*d,n[10]=E*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gS,e,vS)}lookAt(e,n,i){const r=this.elements;return $n.subVectors(e,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Sr.crossVectors(i,$n),Sr.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Sr.crossVectors(i,$n)),Sr.normalize(),Ol.crossVectors($n,Sr),r[0]=Sr.x,r[4]=Ol.x,r[8]=$n.x,r[1]=Sr.y,r[5]=Ol.y,r[9]=$n.y,r[2]=Sr.z,r[6]=Ol.z,r[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],_=i[2],E=i[6],g=i[10],u=i[14],m=i[3],v=i[7],y=i[11],b=i[15],R=r[0],P=r[4],D=r[8],S=r[12],x=r[1],I=r[5],B=r[9],$=r[13],re=r[2],le=r[6],H=r[10],j=r[14],F=r[3],Z=r[7],ie=r[11],ye=r[15];return s[0]=o*R+a*x+l*re+c*F,s[4]=o*P+a*I+l*le+c*Z,s[8]=o*D+a*B+l*H+c*ie,s[12]=o*S+a*$+l*j+c*ye,s[1]=d*R+f*x+h*re+p*F,s[5]=d*P+f*I+h*le+p*Z,s[9]=d*D+f*B+h*H+p*ie,s[13]=d*S+f*$+h*j+p*ye,s[2]=_*R+E*x+g*re+u*F,s[6]=_*P+E*I+g*le+u*Z,s[10]=_*D+E*B+g*H+u*ie,s[14]=_*S+E*$+g*j+u*ye,s[3]=m*R+v*x+y*re+b*F,s[7]=m*P+v*I+y*le+b*Z,s[11]=m*D+v*B+y*H+b*ie,s[15]=m*S+v*$+y*j+b*ye,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],_=e[3],E=e[7],g=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+E*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*d-s*l*d)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],_=e[12],E=e[13],g=e[14],u=e[15],m=f*g*c-E*h*c+E*l*p-a*g*p-f*l*u+a*h*u,v=_*h*c-d*g*c-_*l*p+o*g*p+d*l*u-o*h*u,y=d*E*c-_*f*c+_*a*p-o*E*p-d*a*u+o*f*u,b=_*f*l-d*E*l-_*a*h+o*E*h+d*a*g-o*f*g,R=n*m+i*v+r*y+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=m*P,e[1]=(E*h*s-f*g*s-E*r*p+i*g*p+f*r*u-i*h*u)*P,e[2]=(a*g*s-E*l*s+E*r*c-i*g*c-a*r*u+i*l*u)*P,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*P,e[4]=v*P,e[5]=(d*g*s-_*h*s+_*r*p-n*g*p-d*r*u+n*h*u)*P,e[6]=(_*l*s-o*g*s-_*r*c+n*g*c+o*r*u-n*l*u)*P,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*p+n*l*p)*P,e[8]=y*P,e[9]=(_*f*s-d*E*s-_*i*p+n*E*p+d*i*u-n*f*u)*P,e[10]=(o*E*s-_*a*s+_*i*c-n*E*c-o*i*u+n*a*u)*P,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*p-n*a*p)*P,e[12]=b*P,e[13]=(d*E*r-_*f*r+_*i*h-n*E*h-d*i*g+n*f*g)*P,e[14]=(_*a*r-o*E*r-_*i*l+n*E*l+o*i*g-n*a*g)*P,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,p=s*d,_=s*f,E=o*d,g=o*f,u=a*f,m=l*c,v=l*d,y=l*f,b=i.x,R=i.y,P=i.z;return r[0]=(1-(E+u))*b,r[1]=(p+y)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(p-y)*R,r[5]=(1-(h+u))*R,r[6]=(g+m)*R,r[7]=0,r[8]=(_+v)*P,r[9]=(g-m)*P,r[10]=(1-(h+E))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Gs.set(r[0],r[1],r[2]).length();const o=Gs.set(r[4],r[5],r[6]).length(),a=Gs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gi.copy(this);const c=1/s,d=1/o,f=1/a;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=d,gi.elements[5]*=d,gi.elements[6]*=d,gi.elements[8]*=f,gi.elements[9]*=f,gi.elements[10]*=f,n.setFromRotationMatrix(gi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Fi,l=!1){const c=this.elements,d=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let _,E;if(l)_=s/(o-s),E=o*s/(o-s);else if(a===Fi)_=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Wc)_=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Fi,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,E;if(l)_=1/(o-s),E=o/(o-s);else if(a===Fi)_=-2/(o-s),E=-(o+s)/(o-s);else if(a===Wc)_=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gs=new O,gi=new zt,gS=new O(0,0,0),vS=new O(1,1,1),Sr=new O,Ol=new O,$n=new O,$0=new zt,K0=new sl;class Hi{constructor(e=0,n=0,i=0,r=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $0.makeRotationFromQuaternion(e),this.setFromRotationMatrix($0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return K0.setFromEuler(this),this.setFromQuaternion(K0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Dp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _S=0;const Z0=new O,Ws=new sl,Ki=new zt,kl=new O,oa=new O,xS=new O,yS=new sl,J0=new O(1,0,0),Q0=new O(0,1,0),eg=new O(0,0,1),tg={type:"added"},MS={type:"removed"},Xs={type:"childadded",child:null},md={type:"childremoved",child:null};class gn extends Fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new O,n=new Hi,i=new sl,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new ft}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ws.setFromAxisAngle(e,n),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,n){return Ws.setFromAxisAngle(e,n),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(J0,e)}rotateY(e){return this.rotateOnAxis(Q0,e)}rotateZ(e){return this.rotateOnAxis(eg,e)}translateOnAxis(e,n){return Z0.copy(e).applyQuaternion(this.quaternion),this.position.add(Z0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(J0,e)}translateY(e){return this.translateOnAxis(Q0,e)}translateZ(e){return this.translateOnAxis(eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?kl.copy(e):kl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(oa,kl,this.up):Ki.lookAt(kl,oa,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),Ws.setFromRotationMatrix(Ki),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tg),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(MS),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tg),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,xS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,yS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new O(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new O,Zi=new O,gd=new O,Ji=new O,js=new O,Ys=new O,ng=new O,vd=new O,_d=new O,xd=new O,yd=new Nt,Md=new Nt,Sd=new Nt;class Si{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),vi.subVectors(e,n),r.cross(vi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){vi.subVectors(r,n),Zi.subVectors(i,n),gd.subVectors(e,n);const o=vi.dot(vi),a=vi.dot(Zi),l=vi.dot(gd),c=Zi.dot(Zi),d=Zi.dot(gd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*d)*h,_=(o*d-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return yd.setScalar(0),Md.setScalar(0),Sd.setScalar(0),yd.fromBufferAttribute(e,n),Md.fromBufferAttribute(e,i),Sd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(yd,s.x),o.addScaledVector(Md,s.y),o.addScaledVector(Sd,s.z),o}static isFrontFacing(e,n,i,r){return vi.subVectors(i,n),Zi.subVectors(e,n),vi.cross(Zi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),vi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;js.subVectors(r,i),Ys.subVectors(s,i),vd.subVectors(e,i);const l=js.dot(vd),c=Ys.dot(vd);if(l<=0&&c<=0)return n.copy(i);_d.subVectors(e,r);const d=js.dot(_d),f=Ys.dot(_d);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(js,o);xd.subVectors(e,s);const p=js.dot(xd),_=Ys.dot(xd);if(_>=0&&p<=_)return n.copy(s);const E=p*c-l*_;if(E<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Ys,a);const g=d*_-p*f;if(g<=0&&f-d>=0&&p-_>=0)return ng.subVectors(s,r),a=(f-d)/(f-d+(p-_)),n.copy(r).addScaledVector(ng,a);const u=1/(g+E+h);return o=E*u,a=h*u,n.copy(i).addScaledVector(js,o).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},zl={h:0,s:0,l:0};function wd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class yt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=bt.workingColorSpace){return this.r=e,this.g=n,this.b=i,bt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=bt.workingColorSpace){if(e=oS(e,1),n=mt(n,0,1),i=mt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=wd(o,s,e+1/3),this.g=wd(o,s,e),this.b=wd(o,s,e-1/3)}return bt.colorSpaceToWorking(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=Ex[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return bt.workingToColorSpace(Tn.copy(this),e),Math.round(mt(Tn.r*255,0,255))*65536+Math.round(mt(Tn.g*255,0,255))*256+Math.round(mt(Tn.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bt.workingColorSpace){bt.workingToColorSpace(Tn.copy(this),n);const i=Tn.r,r=Tn.g,s=Tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=bt.workingColorSpace){return bt.workingToColorSpace(Tn.copy(this),n),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Bn){bt.workingToColorSpace(Tn.copy(this),e);const n=Tn.r,i=Tn.g,r=Tn.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+n,wr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wr),e.getHSL(zl);const i=sd(wr.h,zl.h,n),r=sd(wr.s,zl.s,n),s=sd(wr.l,zl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new yt;yt.NAMES=Ex;let SS=0;class Oo extends Fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=_o,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=zf,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(i.blending=this.blending),this.side!==Wr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kf&&(i.blendSrc=this.blendSrc),this.blendDst!==zf&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==V0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hu extends Oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=cx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new O,Bl=new Ge;let wS=0;class zi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=G0,this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Bl.fromBufferAttribute(this,n),Bl.applyMatrix3(e),this.setXY(n,Bl.x,Bl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ia(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ia(n,this.array)),n}setX(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ia(n,this.array)),n}setY(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ia(n,this.array)),n}setZ(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ia(n,this.array)),n}setW(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),i=zn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),i=zn(i,this.array),r=zn(r,this.array),s=zn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==G0&&(e.usage=this.usage),e}}class Tx extends zi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ax extends zi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Rt extends zi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ES=0;const ai=new zt,Ed=new gn,qs=new O,Kn=new ol,aa=new ol,hn=new O;class vn extends Fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sx(e)?Ax:Tx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ft().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,n,i){return ai.makeTranslation(e,n,i),this.applyMatrix4(ai),this}scale(e,n,i){return ai.makeScale(e,n,i),this.applyMatrix4(ai),this}lookAt(e){return Ed.lookAt(e),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];aa.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Kn.min,aa.min),Kn.expandByPoint(hn),hn.addVectors(Kn.max,aa.max),Kn.expandByPoint(hn)):(Kn.expandByPoint(aa.min),Kn.expandByPoint(aa.max))}Kn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)hn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(hn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)hn.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(e,c),hn.add(qs)),r=Math.max(r,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new O,l[D]=new O;const c=new O,d=new O,f=new O,h=new Ge,p=new Ge,_=new Ge,E=new O,g=new O;function u(D,S,x){c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,S),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,D),p.fromBufferAttribute(s,S),_.fromBufferAttribute(s,x),d.sub(c),f.sub(c),p.sub(h),_.sub(h);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(E.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(I),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(I),a[D].add(E),a[S].add(E),a[x].add(E),l[D].add(g),l[S].add(g),l[x].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let D=0,S=m.length;D<S;++D){const x=m[D],I=x.start,B=x.count;for(let $=I,re=I+B;$<re;$+=3)u(e.getX($+0),e.getX($+1),e.getX($+2))}const v=new O,y=new O,b=new O,R=new O;function P(D){b.fromBufferAttribute(r,D),R.copy(b);const S=a[D];v.copy(S),v.sub(b.multiplyScalar(b.dot(S))).normalize(),y.crossVectors(R,S);const I=y.dot(l[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,I)}for(let D=0,S=m.length;D<S;++D){const x=m[D],I=x.start,B=x.count;for(let $=I,re=I+B;$<re;$+=3)P(e.getX($+0)),P(e.getX($+1)),P(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,d=new O,f=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),E=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,g),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)hn.fromBufferAttribute(e,n),hn.normalize(),e.setXYZ(n,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let p=0,_=0;for(let E=0,g=l.length;E<g;E++){a.isInterleavedBufferAttribute?p=l[E]*a.data.stride+a.offset:p=l[E]*d;for(let u=0;u<d;u++)h[_++]=c[p++]}return new zi(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ig=new zt,as=new Lp,Hl=new fu,rg=new O,Vl=new O,Gl=new O,Wl=new O,Td=new O,Xl=new O,sg=new O,jl=new O;class oe extends gn{constructor(e=new vn,n=new hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Td.fromBufferAttribute(f,e),o?Xl.addScaledVector(Td,d):Xl.addScaledVector(Td.sub(n),d))}n.add(Xl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(s),as.copy(e.ray).recast(e.near),!(Hl.containsPoint(as.origin)===!1&&(as.intersectSphere(Hl,rg)===null||as.origin.distanceToSquared(rg)>(e.far-e.near)**2))&&(ig.copy(s).invert(),as.copy(e.ray).applyMatrix4(ig),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,as)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,E=h.length;_<E;_++){const g=h[_],u=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,b=v;y<b;y+=3){const R=a.getX(y),P=a.getX(y+1),D=a.getX(y+2);r=Yl(this,u,e,i,c,d,f,R,P,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let g=_,u=E;g<u;g+=3){const m=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);r=Yl(this,o,e,i,c,d,f,m,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,E=h.length;_<E;_++){const g=h[_],u=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,b=v;y<b;y+=3){const R=y,P=y+1,D=y+2;r=Yl(this,u,e,i,c,d,f,R,P,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let g=_,u=E;g<u;g+=3){const m=g,v=g+1,y=g+2;r=Yl(this,o,e,i,c,d,f,m,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function TS(t,e,n,i,r,s,o,a){let l;if(e.side===jn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Wr,a),l===null)return null;jl.copy(a),jl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(jl);return c<n.near||c>n.far?null:{distance:c,point:jl.clone(),object:t}}function Yl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Vl),t.getVertexPosition(l,Gl),t.getVertexPosition(c,Wl);const d=TS(t,e,n,i,Vl,Gl,Wl,sg);if(d){const f=new O;Si.getBarycoord(sg,Vl,Gl,Wl,f),r&&(d.uv=Si.getInterpolatedAttribute(r,a,l,c,f,new Ge)),s&&(d.uv1=Si.getInterpolatedAttribute(s,a,l,c,f,new Ge)),o&&(d.normal=Si.getInterpolatedAttribute(o,a,l,c,f,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Si.getNormal(Vl,Gl,Wl,h.normal),d.face=h,d.barycoord=f}return d}class nn extends vn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(f,2));function _(E,g,u,m,v,y,b,R,P,D,S){const x=y/P,I=b/D,B=y/2,$=b/2,re=R/2,le=P+1,H=D+1;let j=0,F=0;const Z=new O;for(let ie=0;ie<H;ie++){const ye=ie*I-$;for(let Pe=0;Pe<le;Pe++){const ct=Pe*x-B;Z[E]=ct*m,Z[g]=ye*v,Z[u]=re,c.push(Z.x,Z.y,Z.z),Z[E]=0,Z[g]=0,Z[u]=R>0?1:-1,d.push(Z.x,Z.y,Z.z),f.push(Pe/P),f.push(1-ie/D),j+=1}}for(let ie=0;ie<D;ie++)for(let ye=0;ye<P;ye++){const Pe=h+ye+le*ie,ct=h+ye+le*(ie+1),be=h+(ye+1)+le*(ie+1),ne=h+(ye+1)+le*ie;l.push(Pe,ct,ne),l.push(ct,be,ne),F+=6}a.addGroup(p,F,S),p+=F,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Do(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Dn(t){const e={};for(let n=0;n<t.length;n++){const i=Do(t[n]);for(const r in i)e[r]=i[r]}return e}function AS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function bx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const bS={clone:Do,merge:Dn};var CS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xr extends Oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CS,this.fragmentShader=RS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=AS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Cx extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new O,og=new Ge,ag=new Ge;class Jn extends Cx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Eh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eh*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,n){return this.getViewBounds(e,og,ag),n.subVectors(ag,og)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(rd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const $s=-90,Ks=1;class PS extends gn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jn($s,Ks,e,n);r.layers=this.layers,this.add(r);const s=new Jn($s,Ks,e,n);s.layers=this.layers,this.add(s);const o=new Jn($s,Ks,e,n);o.layers=this.layers,this.add(o);const a=new Jn($s,Ks,e,n);a.layers=this.layers,this.add(a);const l=new Jn($s,Ks,e,n);l.layers=this.layers,this.add(l);const c=new Jn($s,Ks,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Rx extends Un{constructor(e=[],n=Ro,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LS extends Ls{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Rx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nn(5,5,5),s=new Xr({name:"CubemapFromEquirect",uniforms:Do(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jn,blending:Br});s.uniforms.tEquirect.value=n;const o=new oe(r,s),a=n.minFilter;return n.minFilter===Ss&&(n.minFilter=Ui),new PS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class et extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DS={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),u=this._getHandJoint(c,E);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Np{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(e),this.density=n}clone(){return new Np(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class NS extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const bd=new O,IS=new O,US=new ft;class ps{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=bd.subVectors(i,n).cross(IS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(bd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||US.getNormalMatrix(e),r=this.coplanarPoint(bd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new fu,FS=new Ge(.5,.5),ql=new O;class Ip{constructor(e=new ps,n=new ps,i=new ps,r=new ps,s=new ps,o=new ps){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Fi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],f=s[5],h=s[6],p=s[7],_=s[8],E=s[9],g=s[10],u=s[11],m=s[12],v=s[13],y=s[14],b=s[15];if(r[0].setComponents(c-o,p-d,u-_,b-m).normalize(),r[1].setComponents(c+o,p+d,u+_,b+m).normalize(),r[2].setComponents(c+a,p+f,u+E,b+v).normalize(),r[3].setComponents(c-a,p-f,u-E,b-v).normalize(),i)r[4].setComponents(l,h,g,y).normalize(),r[5].setComponents(c-l,p-h,u-g,b-y).normalize();else if(r[4].setComponents(c-l,p-h,u-g,b-y).normalize(),n===Fi)r[5].setComponents(c+l,p+h,u+g,b+y).normalize();else if(n===Wc)r[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);const n=FS.distanceTo(e.center);return ls.radius=.7071067811865476+n,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ql.x=r.normal.x>0?e.max.x:e.min.x,ql.y=r.normal.y>0?e.max.y:e.min.y,ql.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Th extends Oo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jc=new O,Yc=new O,lg=new zt,la=new Lp,$l=new fu,Cd=new O,cg=new O;class ug extends gn{constructor(e=new vn,n=new Th){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)jc.fromBufferAttribute(n,r-1),Yc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=jc.distanceTo(Yc);e.setAttribute("lineDistance",new Rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(r),$l.radius+=s,e.ray.intersectsSphere($l)===!1)return;lg.copy(r).invert(),la.copy(e.ray).applyMatrix4(lg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let E=p,g=_-1;E<g;E+=c){const u=d.getX(E),m=d.getX(E+1),v=Kl(this,e,la,l,u,m,E);v&&n.push(v)}if(this.isLineLoop){const E=d.getX(_-1),g=d.getX(p),u=Kl(this,e,la,l,E,g,_-1);u&&n.push(u)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let E=p,g=_-1;E<g;E+=c){const u=Kl(this,e,la,l,E,E+1,E);u&&n.push(u)}if(this.isLineLoop){const E=Kl(this,e,la,l,_-1,p,_-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(jc.fromBufferAttribute(a,r),Yc.fromBufferAttribute(a,s),n.distanceSqToSegment(jc,Yc,Cd,cg)>i)return;Cd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Cd);if(!(c<e.near||c>e.far))return{distance:c,point:cg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class Rd extends Un{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Px extends Un{constructor(e,n,i=Ps,r,s,o,a=Ai,l=Ai,c,d=$a,f=1){if(d!==$a&&d!==Ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Lx extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bn extends vn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],d=n/2,f=Math.PI/2*e,h=n,p=2*f+h,_=i*2+s,E=r+1,g=new O,u=new O;for(let m=0;m<=_;m++){let v=0,y=0,b=0,R=0;if(m<=i){const S=m/i,x=S*Math.PI/2;y=-d-e*Math.cos(x),b=e*Math.sin(x),R=-e*Math.cos(x),v=S*f}else if(m<=i+s){const S=(m-i)/s;y=-d+S*n,b=e,R=0,v=f+S*h}else{const S=(m-i-s)/i,x=S*Math.PI/2;y=d+e*Math.sin(x),b=e*Math.cos(x),R=e*Math.sin(x),v=f+h+S*f}const P=Math.max(0,Math.min(1,v/p));let D=0;m===0?D=.5/r:m===_&&(D=-.5/r);for(let S=0;S<=r;S++){const x=S/r,I=x*Math.PI*2,B=Math.sin(I),$=Math.cos(I);u.x=-b*$,u.y=y,u.z=b*B,a.push(u.x,u.y,u.z),g.set(-b*$,R,b*B),g.normalize(),l.push(g.x,g.y,g.z),c.push(x+D,P)}if(m>0){const S=(m-1)*E;for(let x=0;x<r;x++){const I=S+x,B=S+x+1,$=m*E+x,re=m*E+x+1;o.push(I,B,$),o.push(B,re,$)}}}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class yo extends vn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new O,d=new Ge;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(a,3)),this.setAttribute("uv",new Rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ht extends vn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],p=[];let _=0;const E=[],g=i/2;let u=0;m(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(p,2));function m(){const y=new O,b=new O;let R=0;const P=(n-e)/i;for(let D=0;D<=s;D++){const S=[],x=D/s,I=x*(n-e)+e;for(let B=0;B<=r;B++){const $=B/r,re=$*l+a,le=Math.sin(re),H=Math.cos(re);b.x=I*le,b.y=-x*i+g,b.z=I*H,f.push(b.x,b.y,b.z),y.set(le,P,H).normalize(),h.push(y.x,y.y,y.z),p.push($,1-x),S.push(_++)}E.push(S)}for(let D=0;D<r;D++)for(let S=0;S<s;S++){const x=E[S][D],I=E[S+1][D],B=E[S+1][D+1],$=E[S][D+1];(e>0||S!==0)&&(d.push(x,I,$),R+=3),(n>0||S!==s-1)&&(d.push(I,B,$),R+=3)}c.addGroup(u,R,0),u+=R}function v(y){const b=_,R=new Ge,P=new O;let D=0;const S=y===!0?e:n,x=y===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,g*x,0),h.push(0,x,0),p.push(.5,.5),_++;const I=_;for(let B=0;B<=r;B++){const re=B/r*l+a,le=Math.cos(re),H=Math.sin(re);P.x=S*H,P.y=g*x,P.z=S*le,f.push(P.x,P.y,P.z),h.push(0,x,0),R.x=le*.5+.5,R.y=H*.5*x+.5,p.push(R.x,R.y),_++}for(let B=0;B<r;B++){const $=b+B,re=I+B;y===!0?d.push(re,re+1,$):d.push(re+1,re,$),D+=3}c.addGroup(u,D,y===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class An extends Ht{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new An(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Up extends vn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const v=new O,y=new O,b=new O;for(let R=0;R<n.length;R+=3)p(n[R+0],v),p(n[R+1],y),p(n[R+2],b),l(v,y,b,m)}function l(m,v,y,b){const R=b+1,P=[];for(let D=0;D<=R;D++){P[D]=[];const S=m.clone().lerp(y,D/R),x=v.clone().lerp(y,D/R),I=R-D;for(let B=0;B<=I;B++)B===0&&D===R?P[D][B]=S:P[D][B]=S.clone().lerp(x,B/I)}for(let D=0;D<R;D++)for(let S=0;S<2*(R-D)-1;S++){const x=Math.floor(S/2);S%2===0?(h(P[D][x+1]),h(P[D+1][x]),h(P[D][x])):(h(P[D][x+1]),h(P[D+1][x+1]),h(P[D+1][x]))}}function c(m){const v=new O;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(m),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function d(){const m=new O;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const y=g(m)/2/Math.PI+.5,b=u(m)/Math.PI+.5;o.push(y,1-b)}_(),f()}function f(){for(let m=0;m<o.length;m+=6){const v=o[m+0],y=o[m+2],b=o[m+4],R=Math.max(v,y,b),P=Math.min(v,y,b);R>.9&&P<.1&&(v<.2&&(o[m+0]+=1),y<.2&&(o[m+2]+=1),b<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,v){const y=m*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function _(){const m=new O,v=new O,y=new O,b=new O,R=new Ge,P=new Ge,D=new Ge;for(let S=0,x=0;S<s.length;S+=9,x+=6){m.set(s[S+0],s[S+1],s[S+2]),v.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),R.set(o[x+0],o[x+1]),P.set(o[x+2],o[x+3]),D.set(o[x+4],o[x+5]),b.copy(m).add(v).add(y).divideScalar(3);const I=g(b);E(R,x+0,m,I),E(P,x+2,v,I),E(D,x+4,y,I)}}function E(m,v,y,b){b<0&&m.x===1&&(o[v]=m.x-1),y.x===0&&y.z===0&&(o[v]=b/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Up(e.vertices,e.indices,e.radius,e.details)}}class $t extends Up{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new $t(e.radius,e.detail)}}class hr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],h=i[r+1]-d,p=(o-d)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ge:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new O,r=[],s=[],o=[],a=new O,l=new zt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(mt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(mt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Dx extends hr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ge){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*d-p*f+this.aX,c=h*f+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class OS extends Dx{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,f){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+f)+(l-a)/f;h*=d,p*=d,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Zl=new O,Pd=new Fp,Ld=new Fp,Dd=new Fp;class Ah extends hr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new O){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(Zl.subVectors(r[0],r[1]).add(r[0]),c=Zl);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Zl.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Zl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),E=Math.pow(f.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(d),p);E<1e-4&&(E=1),_<1e-4&&(_=E),g<1e-4&&(g=E),Pd.initNonuniformCatmullRom(c.x,f.x,h.x,d.x,_,E,g),Ld.initNonuniformCatmullRom(c.y,f.y,h.y,d.y,_,E,g),Dd.initNonuniformCatmullRom(c.z,f.z,h.z,d.z,_,E,g)}else this.curveType==="catmullrom"&&(Pd.initCatmullRom(c.x,f.x,h.x,d.x,this.tension),Ld.initCatmullRom(c.y,f.y,h.y,d.y,this.tension),Dd.initCatmullRom(c.z,f.z,h.z,d.z,this.tension));return i.set(Pd.calc(l),Ld.calc(l),Dd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function kS(t,e){const n=1-t;return n*n*e}function zS(t,e){return 2*(1-t)*t*e}function BS(t,e){return t*t*e}function ba(t,e,n,i){return kS(t,e)+zS(t,n)+BS(t,i)}function HS(t,e){const n=1-t;return n*n*n*e}function VS(t,e){const n=1-t;return 3*n*n*t*e}function GS(t,e){return 3*(1-t)*t*t*e}function WS(t,e){return t*t*t*e}function Ca(t,e,n,i,r){return HS(t,e)+VS(t,n)+GS(t,i)+WS(t,r)}class XS extends hr{constructor(e=new Ge,n=new Ge,i=new Ge,r=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ge){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ca(e,r.x,s.x,o.x,a.x),Ca(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jS extends hr{constructor(e=new O,n=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ca(e,r.x,s.x,o.x,a.x),Ca(e,r.y,s.y,o.y,a.y),Ca(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class YS extends hr{constructor(e=new Ge,n=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ge){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ge){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qS extends hr{constructor(e=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new O){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $S extends hr{constructor(e=new Ge,n=new Ge,i=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ge){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ba(e,r.x,s.x,o.x),ba(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nx extends hr{constructor(e=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ba(e,r.x,s.x,o.x),ba(e,r.y,s.y,o.y),ba(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class KS extends hr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ge){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(dg(a,l.x,c.x,d.x,f.x),dg(a,l.y,c.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ge().fromArray(r))}return this}}var ZS=Object.freeze({__proto__:null,ArcCurve:OS,CatmullRomCurve3:Ah,CubicBezierCurve:XS,CubicBezierCurve3:jS,EllipseCurve:Dx,LineCurve:YS,LineCurve3:qS,QuadraticBezierCurve:$S,QuadraticBezierCurve3:Nx,SplineCurve:KS});class nr extends vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,p=[],_=[],E=[],g=[];for(let u=0;u<d;u++){const m=u*h-o;for(let v=0;v<c;v++){const y=v*f-s;_.push(y,-m,0),E.push(0,0,1),g.push(v/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const v=m+c*u,y=m+c*(u+1),b=m+1+c*(u+1),R=m+1+c*u;p.push(v,y,R),p.push(y,b,R)}this.setIndex(p),this.setAttribute("position",new Rt(_,3)),this.setAttribute("normal",new Rt(E,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.widthSegments,e.heightSegments)}}class rn extends vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new O,h=new O,p=[],_=[],E=[],g=[];for(let u=0;u<=i;u++){const m=[],v=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let b=0;b<=n;b++){const R=b/n;f.x=-e*Math.cos(r+R*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+R*s)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),E.push(h.x,h.y,h.z),g.push(R+y,1-v),m.push(c++)}d.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const v=d[u][m+1],y=d[u][m],b=d[u+1][m],R=d[u+1][m+1];(u!==0||o>0)&&p.push(v,y,R),(u!==i-1||l<Math.PI)&&p.push(y,b,R)}this.setIndex(p),this.setAttribute("position",new Rt(_,3)),this.setAttribute("normal",new Rt(E,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tn extends vn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new O,f=new O,h=new O;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const E=_/r*s,g=p/i*Math.PI*2;f.x=(e+n*Math.cos(g))*Math.cos(E),f.y=(e+n*Math.cos(g))*Math.sin(E),f.z=n*Math.sin(g),a.push(f.x,f.y,f.z),d.x=e*Math.cos(E),d.y=e*Math.sin(E),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const E=(r+1)*p+_-1,g=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,m=(r+1)*p+_;o.push(E,g,m),o.push(g,u,m)}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qc extends vn{constructor(e=new Nx(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,l=new O,c=new Ge;let d=new O;const f=[],h=[],p=[],_=[];E(),this.setIndex(_),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(p,2));function E(){for(let v=0;v<n;v++)g(v);g(s===!1?n:0),m(),u()}function g(v){d=e.getPointAt(v/n,d);const y=o.normals[v],b=o.binormals[v];for(let R=0;R<=r;R++){const P=R/r*Math.PI*2,D=Math.sin(P),S=-Math.cos(P);l.x=S*y.x+D*b.x,l.y=S*y.y+D*b.y,l.z=S*y.z+D*b.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let v=1;v<=n;v++)for(let y=1;y<=r;y++){const b=(r+1)*(v-1)+(y-1),R=(r+1)*v+(y-1),P=(r+1)*v+y,D=(r+1)*(v-1)+y;_.push(b,R,D),_.push(R,P,D)}}function m(){for(let v=0;v<=n;v++)for(let y=0;y<=r;y++)c.x=v/n,c.y=y/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new qc(new ZS[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class xt extends Oo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yx,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class JS extends Oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QS extends Oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Op extends gn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class e2 extends Op{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Nd=new zt,fg=new O,hg=new O;class Ix{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ip,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;fg.setFromMatrixPosition(e.matrixWorld),n.position.copy(fg),hg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(hg),n.updateMatrixWorld(),Nd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pg=new zt,ca=new O,Id=new O;class t2 extends Ix{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(ca),Id.copy(i.position),Id.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Id),i.updateMatrixWorld(),r.makeTranslation(-ca.x,-ca.y,-ca.z),pg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pg,i.coordinateSystem,i.reversedDepth)}}class ua extends Op{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new t2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ux extends Cx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class n2 extends Ix{constructor(){super(new Ux(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mg extends Op{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new n2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class i2 extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const gg=new zt;class r2{constructor(e,n,i=0,r=1/0){this.ray=new Lp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Dp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return gg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gg),this}intersectObject(e,n=!0,i=[]){return bh(e,this,i,n),i.sort(vg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)bh(e[r],this,i,n);return i.sort(vg),i}}function vg(t,e){return t.distance-e.distance}function bh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)bh(s[o],e,n,!0)}}function _g(t,e,n,i){const r=s2(i);switch(n){case gx:return t*e;case _x:return t*e/r.components*r.byteLength;case bp:return t*e/r.components*r.byteLength;case xx:return t*e*2/r.components*r.byteLength;case Cp:return t*e*2/r.components*r.byteLength;case vx:return t*e*3/r.components*r.byteLength;case wi:return t*e*4/r.components*r.byteLength;case Rp:return t*e*4/r.components*r.byteLength;case pc:case mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gc:case vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zf:case Qf:return Math.max(t,16)*Math.max(e,8)/4;case Kf:case Jf:return Math.max(t,8)*Math.max(e,8)/2;case eh:case th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case sh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case lh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case dh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ph:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case gh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case vh:case _h:case xh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case yh:case Mh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Sh:case wh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function s2(t){switch(t){case Bi:case fx:return{byteLength:1,components:1};case Ya:case hx:case il:return{byteLength:2,components:1};case Tp:case Ap:return{byteLength:2,components:4};case Ps:case Ep:case sr:return{byteLength:4,components:1};case px:case mx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function o2(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],E=f[p];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++h,f[h]=E)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const E=f[p];t.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var a2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l2=`#ifdef USE_ALPHAHASH
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
#endif`,c2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h2=`#ifdef USE_AOMAP
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
#endif`,p2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m2=`#ifdef USE_BATCHING
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
#endif`,g2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y2=`#ifdef USE_IRIDESCENCE
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
#endif`,M2=`#ifdef USE_BUMPMAP
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
#endif`,S2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,R2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,P2=`#define PI 3.141592653589793
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
} // validated`,L2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D2=`vec3 transformedNormal = objectNormal;
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
#endif`,N2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O2="gl_FragColor = linearToOutputTexel( gl_FragColor );",k2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z2=`#ifdef USE_ENVMAP
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
#endif`,B2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H2=`#ifdef USE_ENVMAP
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
#endif`,V2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G2=`#ifdef USE_ENVMAP
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
#endif`,W2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q2=`#ifdef USE_GRADIENTMAP
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
}`,$2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J2=`uniform bool receiveShadow;
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
#endif`,Q2=`#ifdef USE_ENVMAP
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
#endif`,ew=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rw=`PhysicalMaterial material;
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
#endif`,sw=`struct PhysicalMaterial {
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
}`,ow=`
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
#endif`,aw=`#if defined( RE_IndirectDiffuse )
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
#endif`,lw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gw=`#if defined( USE_POINTS_UV )
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
#endif`,vw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_w=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sw=`#ifdef USE_MORPHTARGETS
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
#endif`,ww=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ew=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rw=`#ifdef USE_NORMALMAP
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
#endif`,Pw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ow=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ww=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xw=`float getShadowMask() {
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
}`,jw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yw=`#ifdef USE_SKINNING
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
#endif`,qw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$w=`#ifdef USE_SKINNING
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
#endif`,Kw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eE=`#ifdef USE_TRANSMISSION
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
#endif`,tE=`#ifdef USE_TRANSMISSION
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
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aE=`uniform sampler2D t2D;
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
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`#include <common>
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
}`,hE=`#if DEPTH_PACKING == 3200
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
}`,pE=`#define DISTANCE
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
}`,mE=`#define DISTANCE
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
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`uniform float scale;
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
}`,xE=`uniform vec3 diffuse;
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
}`,yE=`#include <common>
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
}`,ME=`uniform vec3 diffuse;
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
}`,SE=`#define LAMBERT
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
}`,wE=`#define LAMBERT
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
}`,EE=`#define MATCAP
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
}`,TE=`#define MATCAP
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
}`,AE=`#define NORMAL
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
}`,bE=`#define NORMAL
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
}`,CE=`#define PHONG
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
}`,RE=`#define PHONG
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
}`,PE=`#define STANDARD
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
}`,LE=`#define STANDARD
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
}`,DE=`#define TOON
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
}`,NE=`#define TOON
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
}`,IE=`uniform float size;
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
}`,UE=`uniform vec3 diffuse;
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
}`,FE=`#include <common>
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
}`,OE=`uniform vec3 color;
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
}`,kE=`uniform float rotation;
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
}`,zE=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:a2,alphahash_pars_fragment:l2,alphamap_fragment:c2,alphamap_pars_fragment:u2,alphatest_fragment:d2,alphatest_pars_fragment:f2,aomap_fragment:h2,aomap_pars_fragment:p2,batching_pars_vertex:m2,batching_vertex:g2,begin_vertex:v2,beginnormal_vertex:_2,bsdfs:x2,iridescence_fragment:y2,bumpmap_pars_fragment:M2,clipping_planes_fragment:S2,clipping_planes_pars_fragment:w2,clipping_planes_pars_vertex:E2,clipping_planes_vertex:T2,color_fragment:A2,color_pars_fragment:b2,color_pars_vertex:C2,color_vertex:R2,common:P2,cube_uv_reflection_fragment:L2,defaultnormal_vertex:D2,displacementmap_pars_vertex:N2,displacementmap_vertex:I2,emissivemap_fragment:U2,emissivemap_pars_fragment:F2,colorspace_fragment:O2,colorspace_pars_fragment:k2,envmap_fragment:z2,envmap_common_pars_fragment:B2,envmap_pars_fragment:H2,envmap_pars_vertex:V2,envmap_physical_pars_fragment:Q2,envmap_vertex:G2,fog_vertex:W2,fog_pars_vertex:X2,fog_fragment:j2,fog_pars_fragment:Y2,gradientmap_pars_fragment:q2,lightmap_pars_fragment:$2,lights_lambert_fragment:K2,lights_lambert_pars_fragment:Z2,lights_pars_begin:J2,lights_toon_fragment:ew,lights_toon_pars_fragment:tw,lights_phong_fragment:nw,lights_phong_pars_fragment:iw,lights_physical_fragment:rw,lights_physical_pars_fragment:sw,lights_fragment_begin:ow,lights_fragment_maps:aw,lights_fragment_end:lw,logdepthbuf_fragment:cw,logdepthbuf_pars_fragment:uw,logdepthbuf_pars_vertex:dw,logdepthbuf_vertex:fw,map_fragment:hw,map_pars_fragment:pw,map_particle_fragment:mw,map_particle_pars_fragment:gw,metalnessmap_fragment:vw,metalnessmap_pars_fragment:_w,morphinstance_vertex:xw,morphcolor_vertex:yw,morphnormal_vertex:Mw,morphtarget_pars_vertex:Sw,morphtarget_vertex:ww,normal_fragment_begin:Ew,normal_fragment_maps:Tw,normal_pars_fragment:Aw,normal_pars_vertex:bw,normal_vertex:Cw,normalmap_pars_fragment:Rw,clearcoat_normal_fragment_begin:Pw,clearcoat_normal_fragment_maps:Lw,clearcoat_pars_fragment:Dw,iridescence_pars_fragment:Nw,opaque_fragment:Iw,packing:Uw,premultiplied_alpha_fragment:Fw,project_vertex:Ow,dithering_fragment:kw,dithering_pars_fragment:zw,roughnessmap_fragment:Bw,roughnessmap_pars_fragment:Hw,shadowmap_pars_fragment:Vw,shadowmap_pars_vertex:Gw,shadowmap_vertex:Ww,shadowmask_pars_fragment:Xw,skinbase_vertex:jw,skinning_pars_vertex:Yw,skinning_vertex:qw,skinnormal_vertex:$w,specularmap_fragment:Kw,specularmap_pars_fragment:Zw,tonemapping_fragment:Jw,tonemapping_pars_fragment:Qw,transmission_fragment:eE,transmission_pars_fragment:tE,uv_pars_fragment:nE,uv_pars_vertex:iE,uv_vertex:rE,worldpos_vertex:sE,background_vert:oE,background_frag:aE,backgroundCube_vert:lE,backgroundCube_frag:cE,cube_vert:uE,cube_frag:dE,depth_vert:fE,depth_frag:hE,distanceRGBA_vert:pE,distanceRGBA_frag:mE,equirect_vert:gE,equirect_frag:vE,linedashed_vert:_E,linedashed_frag:xE,meshbasic_vert:yE,meshbasic_frag:ME,meshlambert_vert:SE,meshlambert_frag:wE,meshmatcap_vert:EE,meshmatcap_frag:TE,meshnormal_vert:AE,meshnormal_frag:bE,meshphong_vert:CE,meshphong_frag:RE,meshphysical_vert:PE,meshphysical_frag:LE,meshtoon_vert:DE,meshtoon_frag:NE,points_vert:IE,points_frag:UE,shadow_vert:FE,shadow_frag:OE,sprite_vert:kE,sprite_frag:zE},Re={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Di={basic:{uniforms:Dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new yt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Dn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Dn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new yt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Dn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Dn([Re.points,Re.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Dn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Dn([Re.common,Re.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Dn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Dn([Re.sprite,Re.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Dn([Re.common,Re.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Dn([Re.lights,Re.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Di.physical={uniforms:Dn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Jl={r:0,b:0,g:0},cs=new Hi,BE=new zt;function HE(t,e,n,i,r,s,o){const a=new yt(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:e).get(y)),y}function E(v){let y=!1;const b=_(v);b===null?u(a,l):b&&b.isColor&&(u(b,1),y=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,y){const b=_(y);b&&(b.isCubeTexture||b.mapping===du)?(d===void 0&&(d=new oe(new nn(1,1,1),new Xr({name:"BackgroundCubeMaterial",uniforms:Do(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),cs.copy(y.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(BE.makeRotationFromEuler(cs)),d.material.toneMapped=bt.getTransfer(b.colorSpace)!==Dt,(f!==b||h!==b.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=b,h=b.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new oe(new nr(2,2),new Xr({name:"BackgroundMaterial",uniforms:Do(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=bt.getTransfer(b.colorSpace)!==Dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,y){v.getRGB(Jl,bx(t)),i.buffers.color.setClear(Jl.r,Jl.g,Jl.b,y,o)}function m(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:E,addToRenderList:g,dispose:m}}function VE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,I,B,$,re){let le=!1;const H=f($,B,I);s!==H&&(s=H,c(s.object)),le=p(x,$,B,re),le&&_(x,$,B,re),re!==null&&e.update(re,t.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,y(x,I,B,$),re!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function d(x){return t.deleteVertexArray(x)}function f(x,I,B){const $=B.wireframe===!0;let re=i[x.id];re===void 0&&(re={},i[x.id]=re);let le=re[I.id];le===void 0&&(le={},re[I.id]=le);let H=le[$];return H===void 0&&(H=h(l()),le[$]=H),H}function h(x){const I=[],B=[],$=[];for(let re=0;re<n;re++)I[re]=0,B[re]=0,$[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:$,object:x,attributes:{},index:null}}function p(x,I,B,$){const re=s.attributes,le=I.attributes;let H=0;const j=B.getAttributes();for(const F in j)if(j[F].location>=0){const ie=re[F];let ye=le[F];if(ye===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(ye=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(ye=x.instanceColor)),ie===void 0||ie.attribute!==ye||ye&&ie.data!==ye.data)return!0;H++}return s.attributesNum!==H||s.index!==$}function _(x,I,B,$){const re={},le=I.attributes;let H=0;const j=B.getAttributes();for(const F in j)if(j[F].location>=0){let ie=le[F];ie===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor));const ye={};ye.attribute=ie,ie&&ie.data&&(ye.data=ie.data),re[F]=ye,H++}s.attributes=re,s.attributesNum=H,s.index=$}function E(){const x=s.newAttributes;for(let I=0,B=x.length;I<B;I++)x[I]=0}function g(x){u(x,0)}function u(x,I){const B=s.newAttributes,$=s.enabledAttributes,re=s.attributeDivisors;B[x]=1,$[x]===0&&(t.enableVertexAttribArray(x),$[x]=1),re[x]!==I&&(t.vertexAttribDivisor(x,I),re[x]=I)}function m(){const x=s.newAttributes,I=s.enabledAttributes;for(let B=0,$=I.length;B<$;B++)I[B]!==x[B]&&(t.disableVertexAttribArray(B),I[B]=0)}function v(x,I,B,$,re,le,H){H===!0?t.vertexAttribIPointer(x,I,B,re,le):t.vertexAttribPointer(x,I,B,$,re,le)}function y(x,I,B,$){E();const re=$.attributes,le=B.getAttributes(),H=I.defaultAttributeValues;for(const j in le){const F=le[j];if(F.location>=0){let Z=re[j];if(Z===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor)),Z!==void 0){const ie=Z.normalized,ye=Z.itemSize,Pe=e.get(Z);if(Pe===void 0)continue;const ct=Pe.buffer,be=Pe.type,ne=Pe.bytesPerElement,k=be===t.INT||be===t.UNSIGNED_INT||Z.gpuType===Ep;if(Z.isInterleavedBufferAttribute){const ue=Z.data,Be=ue.stride,$e=Z.offset;if(ue.isInstancedInterleavedBuffer){for(let We=0;We<F.locationSize;We++)u(F.location+We,ue.meshPerAttribute);x.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let We=0;We<F.locationSize;We++)g(F.location+We);t.bindBuffer(t.ARRAY_BUFFER,ct);for(let We=0;We<F.locationSize;We++)v(F.location+We,ye/F.locationSize,be,ie,Be*ne,($e+ye/F.locationSize*We)*ne,k)}else{if(Z.isInstancedBufferAttribute){for(let ue=0;ue<F.locationSize;ue++)u(F.location+ue,Z.meshPerAttribute);x.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ue=0;ue<F.locationSize;ue++)g(F.location+ue);t.bindBuffer(t.ARRAY_BUFFER,ct);for(let ue=0;ue<F.locationSize;ue++)v(F.location+ue,ye/F.locationSize,be,ie,ye*ne,ye/F.locationSize*ue*ne,k)}}else if(H!==void 0){const ie=H[j];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(F.location,ie);break;case 3:t.vertexAttrib3fv(F.location,ie);break;case 4:t.vertexAttrib4fv(F.location,ie);break;default:t.vertexAttrib1fv(F.location,ie)}}}}m()}function b(){D();for(const x in i){const I=i[x];for(const B in I){const $=I[B];for(const re in $)d($[re].object),delete $[re];delete I[B]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const I=i[x.id];for(const B in I){const $=I[B];for(const re in $)d($[re].object),delete $[re];delete I[B]}delete i[x.id]}function P(x){for(const I in i){const B=i[I];if(B[x.id]===void 0)continue;const $=B[x.id];for(const re in $)d($[re].object),delete $[re];delete B[x.id]}}function D(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:g,disableUnusedAttributes:m}}function GE(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let _=0;_<f;_++)p+=d[_];n.update(p,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],d[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let _=0;for(let E=0;E<f;E++)_+=d[E]*h[E];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function WE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==wi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===il&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Bi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==sr&&!D)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:b,maxSamples:R}}function XE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ps,a=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,E=f.clipIntersection,g=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?d(null):c();else{const m=s?0:i,v=m*4;let y=u.clippingState||null;l.value=y,y=d(_,h,v,p);for(let b=0;b!==v;++b)y[b]=n[b];u.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,_){const E=f!==null?f.length:0;let g=null;if(E!==0){if(g=l.value,_!==!0||g===null){const u=p+E*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<u)&&(g=new Float32Array(u));for(let v=0,y=p;v!==E;++v,y+=4)o.copy(f[v]).applyMatrix4(m,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}function jE(t){let e=new WeakMap;function n(o,a){return a===Yf?o.mapping=Ro:a===qf&&(o.mapping=Po),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yf||a===qf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new LS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const uo=4,xg=[.125,.215,.35,.446,.526,.582],vs=20,Ud=new Ux,yg=new yt;let Fd=null,Od=0,kd=0,zd=!1;const ms=(1+Math.sqrt(5))/2,Zs=1/ms,Mg=[new O(-ms,Zs,0),new O(ms,Zs,0),new O(-Zs,0,ms),new O(Zs,0,ms),new O(0,ms,-Zs),new O(0,ms,Zs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],YE=new O;class Sg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=YE}=s;Fd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fd,Od,kd),this._renderer.xr.enabled=zd,e.scissorTest=!1,Ql(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ro||e.mapping===Po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:il,format:wi,colorSpace:Lo,depthBuffer:!1},r=wg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qE(s)),this._blurMaterial=$E(s,e,n)}return r}_compileMaterial(e){const n=new oe(this._lodPlanes[0],e);this._renderer.compile(n,Ud)}_sceneToCubeUV(e,n,i,r,s){const l=new Jn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(yg),f.toneMapping=Hr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const E=new hu({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),g=new oe(new nn,E);let u=!1;const m=e.background;m?m.isColor&&(E.color.copy(m),e.background=null,u=!0):(E.color.copy(yg),u=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[v],s.y,s.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[v]));const b=this._cubeSize;Ql(r,y*b,v>2?b:0,b,b),f.setRenderTarget(r),u&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ro||e.mapping===Po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ql(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ud)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mg[(r-s-1)%Mg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new oe(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vs-1),E=s/_,g=isFinite(s)?1+Math.floor(d*E):vs;g>vs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${vs}`);const u=[];let m=0;for(let P=0;P<vs;++P){const D=P/E,S=Math.exp(-D*D/2);u.push(S),P===0?m+=S:P<g&&(m+=2*S)}for(let P=0;P<u.length;P++)u[P]=u[P]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const y=this._sizeLods[r],b=3*y*(r>v-uo?r-v+uo:0),R=4*(this._cubeSize-y);Ql(n,b,R,3*y,2*y),l.setRenderTarget(n),l.render(f,Ud)}}function qE(t){const e=[],n=[],i=[];let r=t;const s=t-uo+1+xg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-uo?l=xg[o-t+uo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,_=6,E=3,g=2,u=1,m=new Float32Array(E*_*p),v=new Float32Array(g*_*p),y=new Float32Array(u*_*p);for(let R=0;R<p;R++){const P=R%3*2/3-1,D=R>2?0:-1,S=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];m.set(S,E*_*R),v.set(h,g*_*R);const x=[R,R,R,R,R,R];y.set(x,u*_*R)}const b=new vn;b.setAttribute("position",new zi(m,E)),b.setAttribute("uv",new zi(v,g)),b.setAttribute("faceIndex",new zi(y,u)),e.push(b),r>uo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function wg(t,e,n){const i=new Ls(t,e,n);return i.texture.mapping=du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ql(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $E(t,e,n){const i=new Float32Array(vs),r=new O(0,1,0);return new Xr({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kp(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Eg(){return new Xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kp(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Tg(){return new Xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function kp(){return`

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
	`}function KE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yf||l===qf,d=l===Ro||l===Po;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Sg(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Sg(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ZE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Za("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function JE(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let E=0;if(p!==null){const m=p.array;E=p.version;for(let v=0,y=m.length;v<y;v+=3){const b=m[v+0],R=m[v+1],P=m[v+2];h.push(b,R,R,P,P,b)}}else if(_!==void 0){const m=_.array;E=_.version;for(let v=0,y=m.length/3-1;v<y;v+=3){const b=v+0,R=v+1,P=v+2;h.push(b,R,R,P,P,b)}}else return;const g=new(Sx(h)?Ax:Tx)(h,1);g.version=E;const u=s.get(f);u&&e.remove(u),s.set(f,g)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function QE(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function d(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let g=0;for(let u=0;u<_;u++)g+=p[u];n.update(g,i,1)}function f(h,p,_,E){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],E[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,E,0,_);let u=0;for(let m=0;m<_;m++)u+=p[m]*E[m];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function eT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tT(t,e,n){const i=new WeakMap,r=new Nt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let x=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),E===!0&&(y=2),g===!0&&(y=3);let b=a.attributes.position.count*y,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const P=new Float32Array(b*R*4*f),D=new wx(P,b,R,f);D.type=sr,D.needsUpdate=!0;const S=y*4;for(let I=0;I<f;I++){const B=u[I],$=m[I],re=v[I],le=b*R*4*I;for(let H=0;H<B.count;H++){const j=H*S;_===!0&&(r.fromBufferAttribute(B,H),P[le+j+0]=r.x,P[le+j+1]=r.y,P[le+j+2]=r.z,P[le+j+3]=0),E===!0&&(r.fromBufferAttribute($,H),P[le+j+4]=r.x,P[le+j+5]=r.y,P[le+j+6]=r.z,P[le+j+7]=0),g===!0&&(r.fromBufferAttribute(re,H),P[le+j+8]=r.x,P[le+j+9]=r.y,P[le+j+10]=r.z,P[le+j+11]=re.itemSize===4?r.w:1)}}h={count:f,texture:D,size:new Ge(b,R)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const E=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function nT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Ox=new Un,Ag=new Px(1,1),kx=new wx,zx=new pS,Bx=new Rx,bg=[],Cg=[],Rg=new Float32Array(16),Pg=new Float32Array(9),Lg=new Float32Array(4);function ko(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bg[r];if(s===void 0&&(s=new Float32Array(r),bg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function an(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ln(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pu(t,e){let n=Cg[e];n===void 0&&(n=new Int32Array(e),Cg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function iT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;t.uniform2fv(this.addr,e),ln(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(an(n,e))return;t.uniform3fv(this.addr,e),ln(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;t.uniform4fv(this.addr,e),ln(n,e)}}function aT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(an(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ln(n,e)}else{if(an(n,i))return;Lg.set(i),t.uniformMatrix2fv(this.addr,!1,Lg),ln(n,i)}}function lT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(an(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ln(n,e)}else{if(an(n,i))return;Pg.set(i),t.uniformMatrix3fv(this.addr,!1,Pg),ln(n,i)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(an(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ln(n,e)}else{if(an(n,i))return;Rg.set(i),t.uniformMatrix4fv(this.addr,!1,Rg),ln(n,i)}}function uT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;t.uniform2iv(this.addr,e),ln(n,e)}}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(an(n,e))return;t.uniform3iv(this.addr,e),ln(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;t.uniform4iv(this.addr,e),ln(n,e)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;t.uniform2uiv(this.addr,e),ln(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(an(n,e))return;t.uniform3uiv(this.addr,e),ln(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;t.uniform4uiv(this.addr,e),ln(n,e)}}function _T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ag.compareFunction=Mx,s=Ag):s=Ox,n.setTexture2D(e||s,r)}function xT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||zx,r)}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Bx,r)}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||kx,r)}function ST(t){switch(t){case 5126:return iT;case 35664:return rT;case 35665:return sT;case 35666:return oT;case 35674:return aT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return dT;case 35668:case 35672:return fT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return MT}}function wT(t,e){t.uniform1fv(this.addr,e)}function ET(t,e){const n=ko(e,this.size,2);t.uniform2fv(this.addr,n)}function TT(t,e){const n=ko(e,this.size,3);t.uniform3fv(this.addr,n)}function AT(t,e){const n=ko(e,this.size,4);t.uniform4fv(this.addr,n)}function bT(t,e){const n=ko(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function CT(t,e){const n=ko(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function RT(t,e){const n=ko(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function PT(t,e){t.uniform1iv(this.addr,e)}function LT(t,e){t.uniform2iv(this.addr,e)}function DT(t,e){t.uniform3iv(this.addr,e)}function NT(t,e){t.uniform4iv(this.addr,e)}function IT(t,e){t.uniform1uiv(this.addr,e)}function UT(t,e){t.uniform2uiv(this.addr,e)}function FT(t,e){t.uniform3uiv(this.addr,e)}function OT(t,e){t.uniform4uiv(this.addr,e)}function kT(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);an(i,s)||(t.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Ox,s[o])}function zT(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);an(i,s)||(t.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||zx,s[o])}function BT(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);an(i,s)||(t.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Bx,s[o])}function HT(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);an(i,s)||(t.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||kx,s[o])}function VT(t){switch(t){case 5126:return wT;case 35664:return ET;case 35665:return TT;case 35666:return AT;case 35674:return bT;case 35675:return CT;case 35676:return RT;case 5124:case 35670:return PT;case 35667:case 35671:return LT;case 35668:case 35672:return DT;case 35669:case 35673:return NT;case 5125:return IT;case 36294:return UT;case 36295:return FT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return HT}}class GT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ST(n.type)}}class WT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=VT(n.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function Dg(t,e){t.seq.push(e),t.map[e.id]=e}function jT(t,e,n){const i=t.name,r=i.length;for(Bd.lastIndex=0;;){const s=Bd.exec(i),o=Bd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Dg(n,c===void 0?new GT(a,t,e):new WT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new XT(a),Dg(n,f)),n=f}}}class _c{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);jT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Ng(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const YT=37297;let qT=0;function $T(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Ig=new ft;function KT(t){bt._getMatrix(Ig,bt.workingColorSpace,t);const e=`mat3( ${Ig.elements.map(n=>n.toFixed(4))} )`;switch(bt.getTransfer(t)){case Gc:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ug(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+$T(t.getShaderSource(e),a)}else return s}function ZT(t,e){const n=KT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function JT(t,e){let n;switch(e){case GM:n="Linear";break;case WM:n="Reinhard";break;case XM:n="Cineon";break;case ux:n="ACESFilmic";break;case YM:n="AgX";break;case qM:n="Neutral";break;case jM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ec=new O;function QT(){bt.getLuminanceCoefficients(ec);const t=ec.x.toFixed(4),e=ec.y.toFixed(4),n=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function tA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function va(t){return t!==""}function Fg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Og(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(t){return t.replace(iA,sA)}const rA=new Map;function sA(t,e){let n=ht[e];if(n===void 0){const i=rA.get(e);if(i!==void 0)n=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ch(n)}const oA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kg(t){return t.replace(oA,aA)}function aA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function lA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ax?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function cA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ro:case Po:e="ENVMAP_TYPE_CUBE";break;case du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Po:e="ENVMAP_MODE_REFRACTION";break}return e}function dA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case cx:e="ENVMAP_BLENDING_MULTIPLY";break;case HM:e="ENVMAP_BLENDING_MIX";break;case VM:e="ENVMAP_BLENDING_ADD";break}return e}function fA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function hA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=lA(n),c=cA(n),d=uA(n),f=dA(n),h=fA(n),p=eA(n),_=tA(s),E=r.createProgram();let g,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(va).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(va).join(`
`),u.length>0&&(u+=`
`)):(g=[zg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),u=[zg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hr?"#define TONE_MAPPING":"",n.toneMapping!==Hr?ht.tonemapping_pars_fragment:"",n.toneMapping!==Hr?JT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,ZT("linearToOutputTexel",n.outputColorSpace),QT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(va).join(`
`)),o=Ch(o),o=Fg(o,n),o=Og(o,n),a=Ch(a),a=Fg(a,n),a=Og(a,n),o=kg(o),a=kg(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===W0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===W0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=m+g+o,y=m+u+a,b=Ng(r,r.VERTEX_SHADER,v),R=Ng(r,r.FRAGMENT_SHADER,y);r.attachShader(E,b),r.attachShader(E,R),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function P(I){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(E)||"",$=r.getShaderInfoLog(b)||"",re=r.getShaderInfoLog(R)||"",le=B.trim(),H=$.trim(),j=re.trim();let F=!0,Z=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,b,R);else{const ie=Ug(r,b,"vertex"),ye=Ug(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+le+`
`+ie+`
`+ye)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(H===""||j==="")&&(Z=!1);Z&&(I.diagnostics={runnable:F,programLog:le,vertexShader:{log:H,prefix:g},fragmentShader:{log:j,prefix:u}})}r.deleteShader(b),r.deleteShader(R),D=new _c(r,E),S=nA(r,E)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(E,YT)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=R,this}let pA=0;class mA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new gA(e),n.set(e,i)),i}}class gA{constructor(e){this.id=pA++,this.code=e,this.usedTimes=0}}function vA(t,e,n,i,r,s,o){const a=new Dp,l=new mA,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,x,I,B,$){const re=B.fog,le=$.geometry,H=S.isMeshStandardMaterial?B.environment:null,j=(S.isMeshStandardMaterial?n:e).get(S.envMap||H),F=j&&j.mapping===du?j.image.height:null,Z=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ie=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,ye=ie!==void 0?ie.length:0;let Pe=0;le.morphAttributes.position!==void 0&&(Pe=1),le.morphAttributes.normal!==void 0&&(Pe=2),le.morphAttributes.color!==void 0&&(Pe=3);let ct,be,ne,k;if(Z){const Mt=Di[Z];ct=Mt.vertexShader,be=Mt.fragmentShader}else ct=S.vertexShader,be=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),k=l.getFragmentShaderID(S);const ue=t.getRenderTarget(),Be=t.state.buffers.depth.getReversed(),$e=$.isInstancedMesh===!0,We=$.isBatchedMesh===!0,dt=!!S.map,Yt=!!S.matcap,U=!!j,at=!!S.aoMap,st=!!S.lightMap,tt=!!S.bumpMap,z=!!S.normalMap,Ee=!!S.displacementMap,ae=!!S.emissiveMap,ce=!!S.metalnessMap,Ye=!!S.roughnessMap,Ke=S.anisotropy>0,L=S.clearcoat>0,T=S.dispersion>0,q=S.iridescence>0,te=S.sheen>0,pe=S.transmission>0,se=Ke&&!!S.anisotropyMap,Ae=L&&!!S.clearcoatMap,ge=L&&!!S.clearcoatNormalMap,Oe=L&&!!S.clearcoatRoughnessMap,Ue=q&&!!S.iridescenceMap,Me=q&&!!S.iridescenceThicknessMap,Le=te&&!!S.sheenColorMap,Ze=te&&!!S.sheenRoughnessMap,Xe=!!S.specularMap,Ce=!!S.specularColorMap,ot=!!S.specularIntensityMap,G=pe&&!!S.transmissionMap,Se=pe&&!!S.thicknessMap,we=!!S.gradientMap,ze=!!S.alphaMap,_e=S.alphaTest>0,he=!!S.alphaHash,Ie=!!S.extensions;let rt=Hr;S.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(rt=t.toneMapping);const Pt={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:ct,fragmentShader:be,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:k,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:We,batchingColor:We&&$._colorsTexture!==null,instancing:$e,instancingColor:$e&&$.instanceColor!==null,instancingMorph:$e&&$.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Lo,alphaToCoverage:!!S.alphaToCoverage,map:dt,matcap:Yt,envMap:U,envMapMode:U&&j.mapping,envMapCubeUVHeight:F,aoMap:at,lightMap:st,bumpMap:tt,normalMap:z,displacementMap:h&&Ee,emissiveMap:ae,normalMapObjectSpace:z&&S.normalMapType===JM,normalMapTangentSpace:z&&S.normalMapType===yx,metalnessMap:ce,roughnessMap:Ye,anisotropy:Ke,anisotropyMap:se,clearcoat:L,clearcoatMap:Ae,clearcoatNormalMap:ge,clearcoatRoughnessMap:Oe,dispersion:T,iridescence:q,iridescenceMap:Ue,iridescenceThicknessMap:Me,sheen:te,sheenColorMap:Le,sheenRoughnessMap:Ze,specularMap:Xe,specularColorMap:Ce,specularIntensityMap:ot,transmission:pe,transmissionMap:G,thicknessMap:Se,gradientMap:we,opaque:S.transparent===!1&&S.blending===_o&&S.alphaToCoverage===!1,alphaMap:ze,alphaTest:_e,alphaHash:he,combine:S.combine,mapUv:dt&&E(S.map.channel),aoMapUv:at&&E(S.aoMap.channel),lightMapUv:st&&E(S.lightMap.channel),bumpMapUv:tt&&E(S.bumpMap.channel),normalMapUv:z&&E(S.normalMap.channel),displacementMapUv:Ee&&E(S.displacementMap.channel),emissiveMapUv:ae&&E(S.emissiveMap.channel),metalnessMapUv:ce&&E(S.metalnessMap.channel),roughnessMapUv:Ye&&E(S.roughnessMap.channel),anisotropyMapUv:se&&E(S.anisotropyMap.channel),clearcoatMapUv:Ae&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:ge&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&E(S.sheenRoughnessMap.channel),specularMapUv:Xe&&E(S.specularMap.channel),specularColorMapUv:Ce&&E(S.specularColorMap.channel),specularIntensityMapUv:ot&&E(S.specularIntensityMap.channel),transmissionMapUv:G&&E(S.transmissionMap.channel),thicknessMapUv:Se&&E(S.thicknessMap.channel),alphaMapUv:ze&&E(S.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(z||Ke),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!le.attributes.uv&&(dt||ze),fog:!!re,useFog:S.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Be,skinning:$.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Pe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:rt,decodeVideoTexture:dt&&S.map.isVideoTexture===!0&&bt.getTransfer(S.map.colorSpace)===Dt,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&bt.getTransfer(S.emissiveMap.colorSpace)===Dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mi,flipSided:S.side===jn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ie&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&S.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function u(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)x.push(I),x.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(m(x,S),v(x,S),x.push(t.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function m(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function v(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const x=_[S.type];let I;if(x){const B=Di[x];I=bS.clone(B.uniforms)}else I=S.uniforms;return I}function b(S,x){let I;for(let B=0,$=d.length;B<$;B++){const re=d[B];if(re.cacheKey===x){I=re,++I.usedTimes;break}}return I===void 0&&(I=new hA(t,x,S,s),d.push(I)),I}function R(S){if(--S.usedTimes===0){const x=d.indexOf(S);d[x]=d[d.length-1],d.pop(),S.destroy()}}function P(S){l.remove(S)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:y,acquireProgram:b,releaseProgram:R,releaseShaderCache:P,programs:d,dispose:D}}function _A(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function xA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Bg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,_,E,g){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:E,group:g},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=E,u.group=g),e++,u}function a(f,h,p,_,E,g){const u=o(f,h,p,_,E,g);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,_,E,g){const u=o(f,h,p,_,E,g);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||xA),i.length>1&&i.sort(h||Bg),r.length>1&&r.sort(h||Bg)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function yA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Hg,t.set(i,[o])):r>=s.length?(o=new Hg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function MA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new yt};break;case"SpotLight":n={position:new O,direction:new O,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function SA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let wA=0;function EA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function TA(t){const e=new MA,n=SA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new zt,o=new zt;function a(c){let d=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,E=0,g=0,u=0,m=0,v=0,y=0,b=0,R=0,P=0;c.sort(EA);for(let S=0,x=c.length;S<x;S++){const I=c[S],B=I.color,$=I.intensity,re=I.distance,le=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=B.r*$,f+=B.g*$,h+=B.b*$;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],$);P++}else if(I.isDirectionalLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,F=n.get(I);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=le,i.directionalShadowMatrix[p]=I.shadow.matrix,m++}i.directional[p]=H,p++}else if(I.isSpotLight){const H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(B).multiplyScalar($),H.distance=re,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[E]=H;const j=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,j.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[E]=j.matrix,I.castShadow){const F=n.get(I);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,i.spotShadow[E]=F,i.spotShadowMap[E]=le,y++}E++}else if(I.isRectAreaLight){const H=e.get(I);H.color.copy(B).multiplyScalar($),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=H,g++}else if(I.isPointLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const j=I.shadow,F=n.get(I);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,F.shadowCameraNear=j.camera.near,F.shadowCameraFar=j.camera.far,i.pointShadow[_]=F,i.pointShadowMap[_]=le,i.pointShadowMatrix[_]=I.shadow.matrix,v++}i.point[_]=H,_++}else if(I.isHemisphereLight){const H=e.get(I);H.skyColor.copy(I.color).multiplyScalar($),H.groundColor.copy(I.groundColor).multiplyScalar($),i.hemi[u]=H,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==E||D.rectAreaLength!==g||D.hemiLength!==u||D.numDirectionalShadows!==m||D.numPointShadows!==v||D.numSpotShadows!==y||D.numSpotMaps!==b||D.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=g,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,D.directionalLength=p,D.pointLength=_,D.spotLength=E,D.rectAreaLength=g,D.hemiLength=u,D.numDirectionalShadows=m,D.numPointShadows=v,D.numSpotShadows=y,D.numSpotMaps=b,D.numLightProbes=P,i.version=wA++)}function l(c,d){let f=0,h=0,p=0,_=0,E=0;const g=d.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const v=c[u];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const y=i.hemi[E];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),E++}}}return{setup:a,setupView:l,state:i}}function Vg(t){const e=new TA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function AA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Vg(t),e.set(r,[a])):s>=o.length?(a=new Vg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const bA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CA=`uniform sampler2D shadow_pass;
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
}`;function RA(t,e,n){let i=new Ip;const r=new Ge,s=new Ge,o=new Nt,a=new JS({depthPacking:ZM}),l=new QS,c={},d=n.maxTextureSize,f={[Wr]:jn,[jn]:Wr,[Mi]:Mi},h=new Xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:bA,fragmentShader:CA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new vn;_.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new oe(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ax;let u=this.type;this.render=function(R,P,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const S=t.getRenderTarget(),x=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Br),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const $=u!==Qi&&this.type===Qi,re=u===Qi&&this.type!==Qi;for(let le=0,H=R.length;le<H;le++){const j=R[le],F=j.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const Z=F.getFrameExtents();if(r.multiply(Z),s.copy(F.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Z.x),r.x=s.x*Z.x,F.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Z.y),r.y=s.y*Z.y,F.mapSize.y=s.y)),F.map===null||$===!0||re===!0){const ye=this.type!==Qi?{minFilter:Ai,magFilter:Ai}:{};F.map!==null&&F.map.dispose(),F.map=new Ls(r.x,r.y,ye),F.map.texture.name=j.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const ie=F.getViewportCount();for(let ye=0;ye<ie;ye++){const Pe=F.getViewport(ye);o.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),B.viewport(o),F.updateMatrices(j,ye),i=F.getFrustum(),y(P,D,F.camera,j,this.type)}F.isPointLightShadow!==!0&&this.type===Qi&&m(F,D),F.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(S,x,I)};function m(R,P){const D=e.update(E);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ls(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(P,null,D,h,E,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(P,null,D,p,E,null)}function v(R,P,D,S){let x=null;const I=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)x=I;else if(x=D.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=x.uuid,$=P.uuid;let re=c[B];re===void 0&&(re={},c[B]=re);let le=re[$];le===void 0&&(le=x.clone(),re[$]=le,P.addEventListener("dispose",b)),x=le}if(x.visible=P.visible,x.wireframe=P.wireframe,S===Qi?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:f[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=t.properties.get(x);B.light=D}return x}function y(R,P,D,S,x){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Qi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const $=e.update(R),re=R.material;if(Array.isArray(re)){const le=$.groups;for(let H=0,j=le.length;H<j;H++){const F=le[H],Z=re[F.materialIndex];if(Z&&Z.visible){const ie=v(R,Z,S,x);R.onBeforeShadow(t,R,P,D,$,ie,F),t.renderBufferDirect(D,null,$,ie,R,F),R.onAfterShadow(t,R,P,D,$,ie,F)}}}else if(re.visible){const le=v(R,re,S,x);R.onBeforeShadow(t,R,P,D,$,le,null),t.renderBufferDirect(D,null,$,le,R,null),R.onAfterShadow(t,R,P,D,$,le,null)}}const B=R.children;for(let $=0,re=B.length;$<re;$++)y(B[$],P,D,S,x)}function b(R){R.target.removeEventListener("dispose",b);for(const D in c){const S=c[D],x=R.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const PA={[Bf]:Hf,[Vf]:Xf,[Gf]:jf,[Co]:Wf,[Hf]:Bf,[Xf]:Vf,[jf]:Gf,[Wf]:Co};function LA(t,e){function n(){let G=!1;const Se=new Nt;let we=null;const ze=new Nt(0,0,0,0);return{setMask:function(_e){we!==_e&&!G&&(t.colorMask(_e,_e,_e,_e),we=_e)},setLocked:function(_e){G=_e},setClear:function(_e,he,Ie,rt,Pt){Pt===!0&&(_e*=rt,he*=rt,Ie*=rt),Se.set(_e,he,Ie,rt),ze.equals(Se)===!1&&(t.clearColor(_e,he,Ie,rt),ze.copy(Se))},reset:function(){G=!1,we=null,ze.set(-1,0,0,0)}}}function i(){let G=!1,Se=!1,we=null,ze=null,_e=null;return{setReversed:function(he){if(Se!==he){const Ie=e.get("EXT_clip_control");he?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Se=he;const rt=_e;_e=null,this.setClear(rt)}},getReversed:function(){return Se},setTest:function(he){he?ue(t.DEPTH_TEST):Be(t.DEPTH_TEST)},setMask:function(he){we!==he&&!G&&(t.depthMask(he),we=he)},setFunc:function(he){if(Se&&(he=PA[he]),ze!==he){switch(he){case Bf:t.depthFunc(t.NEVER);break;case Hf:t.depthFunc(t.ALWAYS);break;case Vf:t.depthFunc(t.LESS);break;case Co:t.depthFunc(t.LEQUAL);break;case Gf:t.depthFunc(t.EQUAL);break;case Wf:t.depthFunc(t.GEQUAL);break;case Xf:t.depthFunc(t.GREATER);break;case jf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ze=he}},setLocked:function(he){G=he},setClear:function(he){_e!==he&&(Se&&(he=1-he),t.clearDepth(he),_e=he)},reset:function(){G=!1,we=null,ze=null,_e=null,Se=!1}}}function r(){let G=!1,Se=null,we=null,ze=null,_e=null,he=null,Ie=null,rt=null,Pt=null;return{setTest:function(Mt){G||(Mt?ue(t.STENCIL_TEST):Be(t.STENCIL_TEST))},setMask:function(Mt){Se!==Mt&&!G&&(t.stencilMask(Mt),Se=Mt)},setFunc:function(Mt,ri,Yn){(we!==Mt||ze!==ri||_e!==Yn)&&(t.stencilFunc(Mt,ri,Yn),we=Mt,ze=ri,_e=Yn)},setOp:function(Mt,ri,Yn){(he!==Mt||Ie!==ri||rt!==Yn)&&(t.stencilOp(Mt,ri,Yn),he=Mt,Ie=ri,rt=Yn)},setLocked:function(Mt){G=Mt},setClear:function(Mt){Pt!==Mt&&(t.clearStencil(Mt),Pt=Mt)},reset:function(){G=!1,Se=null,we=null,ze=null,_e=null,he=null,Ie=null,rt=null,Pt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],_=null,E=!1,g=null,u=null,m=null,v=null,y=null,b=null,R=null,P=new yt(0,0,0),D=0,S=!1,x=null,I=null,B=null,$=null,re=null;const le=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(F)[1]),H=j>=1):F.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),H=j>=2);let Z=null,ie={};const ye=t.getParameter(t.SCISSOR_BOX),Pe=t.getParameter(t.VIEWPORT),ct=new Nt().fromArray(ye),be=new Nt().fromArray(Pe);function ne(G,Se,we,ze){const _e=new Uint8Array(4),he=t.createTexture();t.bindTexture(G,he),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<we;Ie++)G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?t.texImage3D(Se,0,t.RGBA,1,1,ze,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(Se+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return he}const k={};k[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),k[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),k[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(t.DEPTH_TEST),o.setFunc(Co),tt(!1),z(k0),ue(t.CULL_FACE),at(Br);function ue(G){d[G]!==!0&&(t.enable(G),d[G]=!0)}function Be(G){d[G]!==!1&&(t.disable(G),d[G]=!1)}function $e(G,Se){return f[G]!==Se?(t.bindFramebuffer(G,Se),f[G]=Se,G===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Se),G===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Se),!0):!1}function We(G,Se){let we=p,ze=!1;if(G){we=h.get(Se),we===void 0&&(we=[],h.set(Se,we));const _e=G.textures;if(we.length!==_e.length||we[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ie=_e.length;he<Ie;he++)we[he]=t.COLOR_ATTACHMENT0+he;we.length=_e.length,ze=!0}}else we[0]!==t.BACK&&(we[0]=t.BACK,ze=!0);ze&&t.drawBuffers(we)}function dt(G){return _!==G?(t.useProgram(G),_=G,!0):!1}const Yt={[gs]:t.FUNC_ADD,[EM]:t.FUNC_SUBTRACT,[TM]:t.FUNC_REVERSE_SUBTRACT};Yt[AM]=t.MIN,Yt[bM]=t.MAX;const U={[CM]:t.ZERO,[RM]:t.ONE,[PM]:t.SRC_COLOR,[kf]:t.SRC_ALPHA,[FM]:t.SRC_ALPHA_SATURATE,[IM]:t.DST_COLOR,[DM]:t.DST_ALPHA,[LM]:t.ONE_MINUS_SRC_COLOR,[zf]:t.ONE_MINUS_SRC_ALPHA,[UM]:t.ONE_MINUS_DST_COLOR,[NM]:t.ONE_MINUS_DST_ALPHA,[OM]:t.CONSTANT_COLOR,[kM]:t.ONE_MINUS_CONSTANT_COLOR,[zM]:t.CONSTANT_ALPHA,[BM]:t.ONE_MINUS_CONSTANT_ALPHA};function at(G,Se,we,ze,_e,he,Ie,rt,Pt,Mt){if(G===Br){E===!0&&(Be(t.BLEND),E=!1);return}if(E===!1&&(ue(t.BLEND),E=!0),G!==wM){if(G!==g||Mt!==S){if((u!==gs||y!==gs)&&(t.blendEquation(t.FUNC_ADD),u=gs,y=gs),Mt)switch(G){case _o:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case z0:t.blendFunc(t.ONE,t.ONE);break;case B0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case H0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case _o:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case z0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case B0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case H0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}m=null,v=null,b=null,R=null,P.set(0,0,0),D=0,g=G,S=Mt}return}_e=_e||Se,he=he||we,Ie=Ie||ze,(Se!==u||_e!==y)&&(t.blendEquationSeparate(Yt[Se],Yt[_e]),u=Se,y=_e),(we!==m||ze!==v||he!==b||Ie!==R)&&(t.blendFuncSeparate(U[we],U[ze],U[he],U[Ie]),m=we,v=ze,b=he,R=Ie),(rt.equals(P)===!1||Pt!==D)&&(t.blendColor(rt.r,rt.g,rt.b,Pt),P.copy(rt),D=Pt),g=G,S=!1}function st(G,Se){G.side===Mi?Be(t.CULL_FACE):ue(t.CULL_FACE);let we=G.side===jn;Se&&(we=!we),tt(we),G.blending===_o&&G.transparent===!1?at(Br):at(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const ze=G.stencilWrite;a.setTest(ze),ze&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ae(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):Be(t.SAMPLE_ALPHA_TO_COVERAGE)}function tt(G){x!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),x=G)}function z(G){G!==MM?(ue(t.CULL_FACE),G!==I&&(G===k0?t.cullFace(t.BACK):G===SM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Be(t.CULL_FACE),I=G}function Ee(G){G!==B&&(H&&t.lineWidth(G),B=G)}function ae(G,Se,we){G?(ue(t.POLYGON_OFFSET_FILL),($!==Se||re!==we)&&(t.polygonOffset(Se,we),$=Se,re=we)):Be(t.POLYGON_OFFSET_FILL)}function ce(G){G?ue(t.SCISSOR_TEST):Be(t.SCISSOR_TEST)}function Ye(G){G===void 0&&(G=t.TEXTURE0+le-1),Z!==G&&(t.activeTexture(G),Z=G)}function Ke(G,Se,we){we===void 0&&(Z===null?we=t.TEXTURE0+le-1:we=Z);let ze=ie[we];ze===void 0&&(ze={type:void 0,texture:void 0},ie[we]=ze),(ze.type!==G||ze.texture!==Se)&&(Z!==we&&(t.activeTexture(we),Z=we),t.bindTexture(G,Se||k[G]),ze.type=G,ze.texture=Se)}function L(){const G=ie[Z];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function T(){try{t.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function q(){try{t.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{t.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{t.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{t.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{t.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{t.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{t.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{t.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{t.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(G){ct.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),ct.copy(G))}function Ze(G){be.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),be.copy(G))}function Xe(G,Se){let we=c.get(Se);we===void 0&&(we=new WeakMap,c.set(Se,we));let ze=we.get(G);ze===void 0&&(ze=t.getUniformBlockIndex(Se,G.name),we.set(G,ze))}function Ce(G,Se){const ze=c.get(Se).get(G);l.get(Se)!==ze&&(t.uniformBlockBinding(Se,ze,G.__bindingPointIndex),l.set(Se,ze))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},Z=null,ie={},f={},h=new WeakMap,p=[],_=null,E=!1,g=null,u=null,m=null,v=null,y=null,b=null,R=null,P=new yt(0,0,0),D=0,S=!1,x=null,I=null,B=null,$=null,re=null,ct.set(0,0,t.canvas.width,t.canvas.height),be.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:Be,bindFramebuffer:$e,drawBuffers:We,useProgram:dt,setBlending:at,setMaterial:st,setFlipSided:tt,setCullFace:z,setLineWidth:Ee,setPolygonOffset:ae,setScissorTest:ce,activeTexture:Ye,bindTexture:Ke,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:q,texImage2D:Ue,texImage3D:Me,updateUBOMapping:Xe,uniformBlockBinding:Ce,texStorage2D:ge,texStorage3D:Oe,texSubImage2D:te,texSubImage3D:pe,compressedTexSubImage2D:se,compressedTexSubImage3D:Ae,scissor:Le,viewport:Ze,reset:ot}}function DA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,T){return p?new OffscreenCanvas(L,T):Xc("canvas")}function E(L,T,q){let te=1;const pe=Ke(L);if((pe.width>q||pe.height>q)&&(te=q/Math.max(pe.width,pe.height)),te<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const se=Math.floor(te*pe.width),Ae=Math.floor(te*pe.height);f===void 0&&(f=_(se,Ae));const ge=T?_(se,Ae):f;return ge.width=se,ge.height=Ae,ge.getContext("2d").drawImage(L,0,0,se,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+se+"x"+Ae+")."),ge}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),L;return L}function g(L){return L.generateMipmaps}function u(L){t.generateMipmap(L)}function m(L){return L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?t.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(L,T,q,te,pe=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let se=T;if(T===t.RED&&(q===t.FLOAT&&(se=t.R32F),q===t.HALF_FLOAT&&(se=t.R16F),q===t.UNSIGNED_BYTE&&(se=t.R8)),T===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(se=t.R8UI),q===t.UNSIGNED_SHORT&&(se=t.R16UI),q===t.UNSIGNED_INT&&(se=t.R32UI),q===t.BYTE&&(se=t.R8I),q===t.SHORT&&(se=t.R16I),q===t.INT&&(se=t.R32I)),T===t.RG&&(q===t.FLOAT&&(se=t.RG32F),q===t.HALF_FLOAT&&(se=t.RG16F),q===t.UNSIGNED_BYTE&&(se=t.RG8)),T===t.RG_INTEGER&&(q===t.UNSIGNED_BYTE&&(se=t.RG8UI),q===t.UNSIGNED_SHORT&&(se=t.RG16UI),q===t.UNSIGNED_INT&&(se=t.RG32UI),q===t.BYTE&&(se=t.RG8I),q===t.SHORT&&(se=t.RG16I),q===t.INT&&(se=t.RG32I)),T===t.RGB_INTEGER&&(q===t.UNSIGNED_BYTE&&(se=t.RGB8UI),q===t.UNSIGNED_SHORT&&(se=t.RGB16UI),q===t.UNSIGNED_INT&&(se=t.RGB32UI),q===t.BYTE&&(se=t.RGB8I),q===t.SHORT&&(se=t.RGB16I),q===t.INT&&(se=t.RGB32I)),T===t.RGBA_INTEGER&&(q===t.UNSIGNED_BYTE&&(se=t.RGBA8UI),q===t.UNSIGNED_SHORT&&(se=t.RGBA16UI),q===t.UNSIGNED_INT&&(se=t.RGBA32UI),q===t.BYTE&&(se=t.RGBA8I),q===t.SHORT&&(se=t.RGBA16I),q===t.INT&&(se=t.RGBA32I)),T===t.RGB&&(q===t.UNSIGNED_INT_5_9_9_9_REV&&(se=t.RGB9_E5),q===t.UNSIGNED_INT_10F_11F_11F_REV&&(se=t.R11F_G11F_B10F)),T===t.RGBA){const Ae=pe?Gc:bt.getTransfer(te);q===t.FLOAT&&(se=t.RGBA32F),q===t.HALF_FLOAT&&(se=t.RGBA16F),q===t.UNSIGNED_BYTE&&(se=Ae===Dt?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function y(L,T){let q;return L?T===null||T===Ps||T===qa?q=t.DEPTH24_STENCIL8:T===sr?q=t.DEPTH32F_STENCIL8:T===Ya&&(q=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ps||T===qa?q=t.DEPTH_COMPONENT24:T===sr?q=t.DEPTH_COMPONENT32F:T===Ya&&(q=t.DEPTH_COMPONENT16),q}function b(L,T){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ai&&L.minFilter!==Ui?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function R(L){const T=L.target;T.removeEventListener("dispose",R),D(T),T.isVideoTexture&&d.delete(T)}function P(L){const T=L.target;T.removeEventListener("dispose",P),x(T)}function D(L){const T=i.get(L);if(T.__webglInit===void 0)return;const q=L.source,te=h.get(q);if(te){const pe=te[T.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&S(L),Object.keys(te).length===0&&h.delete(q)}i.remove(L)}function S(L){const T=i.get(L);t.deleteTexture(T.__webglTexture);const q=L.source,te=h.get(q);delete te[T.__cacheKey],o.memory.textures--}function x(L){const T=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(T.__webglFramebuffer[te]))for(let pe=0;pe<T.__webglFramebuffer[te].length;pe++)t.deleteFramebuffer(T.__webglFramebuffer[te][pe]);else t.deleteFramebuffer(T.__webglFramebuffer[te]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[te])}else{if(Array.isArray(T.__webglFramebuffer))for(let te=0;te<T.__webglFramebuffer.length;te++)t.deleteFramebuffer(T.__webglFramebuffer[te]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let te=0;te<T.__webglColorRenderbuffer.length;te++)T.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[te]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=L.textures;for(let te=0,pe=q.length;te<pe;te++){const se=i.get(q[te]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(q[te])}i.remove(L)}let I=0;function B(){I=0}function $(){const L=I;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),I+=1,L}function re(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function le(L,T){const q=i.get(L);if(L.isVideoTexture&&ce(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(q,L,T);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+T)}function H(L,T){const q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){k(q,L,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+T)}function j(L,T){const q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){k(q,L,T);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+T)}function F(L,T){const q=i.get(L);if(L.version>0&&q.__version!==L.version){ue(q,L,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+T)}const Z={[ja]:t.REPEAT,[Ms]:t.CLAMP_TO_EDGE,[$f]:t.MIRRORED_REPEAT},ie={[Ai]:t.NEAREST,[$M]:t.NEAREST_MIPMAP_NEAREST,[Ll]:t.NEAREST_MIPMAP_LINEAR,[Ui]:t.LINEAR,[id]:t.LINEAR_MIPMAP_NEAREST,[Ss]:t.LINEAR_MIPMAP_LINEAR},ye={[QM]:t.NEVER,[sS]:t.ALWAYS,[eS]:t.LESS,[Mx]:t.LEQUAL,[tS]:t.EQUAL,[rS]:t.GEQUAL,[nS]:t.GREATER,[iS]:t.NOTEQUAL};function Pe(L,T){if(T.type===sr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ui||T.magFilter===id||T.magFilter===Ll||T.magFilter===Ss||T.minFilter===Ui||T.minFilter===id||T.minFilter===Ll||T.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,Z[T.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,Z[T.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,Z[T.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,ie[T.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,ye[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ai||T.minFilter!==Ll&&T.minFilter!==Ss||T.type===sr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ct(L,T){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",R));const te=T.source;let pe=h.get(te);pe===void 0&&(pe={},h.set(te,pe));const se=re(T);if(se!==L.__cacheKey){pe[se]===void 0&&(pe[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,q=!0),pe[se].usedTimes++;const Ae=pe[L.__cacheKey];Ae!==void 0&&(pe[L.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(T)),L.__cacheKey=se,L.__webglTexture=pe[se].texture}return q}function be(L,T,q){return Math.floor(Math.floor(L/q)/T)}function ne(L,T,q,te){const se=L.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,T.width,T.height,q,te,T.data);else{se.sort((Me,Le)=>Me.start-Le.start);let Ae=0;for(let Me=1;Me<se.length;Me++){const Le=se[Ae],Ze=se[Me],Xe=Le.start+Le.count,Ce=be(Ze.start,T.width,4),ot=be(Le.start,T.width,4);Ze.start<=Xe+1&&Ce===ot&&be(Ze.start+Ze.count-1,T.width,4)===Ce?Le.count=Math.max(Le.count,Ze.start+Ze.count-Le.start):(++Ae,se[Ae]=Ze)}se.length=Ae+1;const ge=t.getParameter(t.UNPACK_ROW_LENGTH),Oe=t.getParameter(t.UNPACK_SKIP_PIXELS),Ue=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,T.width);for(let Me=0,Le=se.length;Me<Le;Me++){const Ze=se[Me],Xe=Math.floor(Ze.start/4),Ce=Math.ceil(Ze.count/4),ot=Xe%T.width,G=Math.floor(Xe/T.width),Se=Ce,we=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(t.UNPACK_SKIP_ROWS,G),n.texSubImage2D(t.TEXTURE_2D,0,ot,G,Se,we,q,te,T.data)}L.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ge),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ue)}}function k(L,T,q){let te=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=t.TEXTURE_3D);const pe=ct(L,T),se=T.source;n.bindTexture(te,L.__webglTexture,t.TEXTURE0+q);const Ae=i.get(se);if(se.version!==Ae.__version||pe===!0){n.activeTexture(t.TEXTURE0+q);const ge=bt.getPrimaries(bt.workingColorSpace),Oe=T.colorSpace===Ii?null:bt.getPrimaries(T.colorSpace),Ue=T.colorSpace===Ii||ge===Oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let Me=E(T.image,!1,r.maxTextureSize);Me=Ye(T,Me);const Le=s.convert(T.format,T.colorSpace),Ze=s.convert(T.type);let Xe=v(T.internalFormat,Le,Ze,T.colorSpace,T.isVideoTexture);Pe(te,T);let Ce;const ot=T.mipmaps,G=T.isVideoTexture!==!0,Se=Ae.__version===void 0||pe===!0,we=se.dataReady,ze=b(T,Me);if(T.isDepthTexture)Xe=y(T.format===Ka,T.type),Se&&(G?n.texStorage2D(t.TEXTURE_2D,1,Xe,Me.width,Me.height):n.texImage2D(t.TEXTURE_2D,0,Xe,Me.width,Me.height,0,Le,Ze,null));else if(T.isDataTexture)if(ot.length>0){G&&Se&&n.texStorage2D(t.TEXTURE_2D,ze,Xe,ot[0].width,ot[0].height);for(let _e=0,he=ot.length;_e<he;_e++)Ce=ot[_e],G?we&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,Le,Ze,Ce.data):n.texImage2D(t.TEXTURE_2D,_e,Xe,Ce.width,Ce.height,0,Le,Ze,Ce.data);T.generateMipmaps=!1}else G?(Se&&n.texStorage2D(t.TEXTURE_2D,ze,Xe,Me.width,Me.height),we&&ne(T,Me,Le,Ze)):n.texImage2D(t.TEXTURE_2D,0,Xe,Me.width,Me.height,0,Le,Ze,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){G&&Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,Xe,ot[0].width,ot[0].height,Me.depth);for(let _e=0,he=ot.length;_e<he;_e++)if(Ce=ot[_e],T.format!==wi)if(Le!==null)if(G){if(we)if(T.layerUpdates.size>0){const Ie=_g(Ce.width,Ce.height,T.format,T.type);for(const rt of T.layerUpdates){const Pt=Ce.data.subarray(rt*Ie/Ce.data.BYTES_PER_ELEMENT,(rt+1)*Ie/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,rt,Ce.width,Ce.height,1,Le,Pt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Ce.width,Ce.height,Me.depth,Le,Ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,Xe,Ce.width,Ce.height,Me.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?we&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Ce.width,Ce.height,Me.depth,Le,Ze,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,Xe,Ce.width,Ce.height,Me.depth,0,Le,Ze,Ce.data)}else{G&&Se&&n.texStorage2D(t.TEXTURE_2D,ze,Xe,ot[0].width,ot[0].height);for(let _e=0,he=ot.length;_e<he;_e++)Ce=ot[_e],T.format!==wi?Le!==null?G?we&&n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,Le,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,Xe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?we&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,Le,Ze,Ce.data):n.texImage2D(t.TEXTURE_2D,_e,Xe,Ce.width,Ce.height,0,Le,Ze,Ce.data)}else if(T.isDataArrayTexture)if(G){if(Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,Xe,Me.width,Me.height,Me.depth),we)if(T.layerUpdates.size>0){const _e=_g(Me.width,Me.height,T.format,T.type);for(const he of T.layerUpdates){const Ie=Me.data.subarray(he*_e/Me.data.BYTES_PER_ELEMENT,(he+1)*_e/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,Le,Ze,Ie)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Le,Ze,Me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Xe,Me.width,Me.height,Me.depth,0,Le,Ze,Me.data);else if(T.isData3DTexture)G?(Se&&n.texStorage3D(t.TEXTURE_3D,ze,Xe,Me.width,Me.height,Me.depth),we&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Le,Ze,Me.data)):n.texImage3D(t.TEXTURE_3D,0,Xe,Me.width,Me.height,Me.depth,0,Le,Ze,Me.data);else if(T.isFramebufferTexture){if(Se)if(G)n.texStorage2D(t.TEXTURE_2D,ze,Xe,Me.width,Me.height);else{let _e=Me.width,he=Me.height;for(let Ie=0;Ie<ze;Ie++)n.texImage2D(t.TEXTURE_2D,Ie,Xe,_e,he,0,Le,Ze,null),_e>>=1,he>>=1}}else if(ot.length>0){if(G&&Se){const _e=Ke(ot[0]);n.texStorage2D(t.TEXTURE_2D,ze,Xe,_e.width,_e.height)}for(let _e=0,he=ot.length;_e<he;_e++)Ce=ot[_e],G?we&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Le,Ze,Ce):n.texImage2D(t.TEXTURE_2D,_e,Xe,Le,Ze,Ce);T.generateMipmaps=!1}else if(G){if(Se){const _e=Ke(Me);n.texStorage2D(t.TEXTURE_2D,ze,Xe,_e.width,_e.height)}we&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Le,Ze,Me)}else n.texImage2D(t.TEXTURE_2D,0,Xe,Le,Ze,Me);g(T)&&u(te),Ae.__version=se.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ue(L,T,q){if(T.image.length!==6)return;const te=ct(L,T),pe=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+q);const se=i.get(pe);if(pe.version!==se.__version||te===!0){n.activeTexture(t.TEXTURE0+q);const Ae=bt.getPrimaries(bt.workingColorSpace),ge=T.colorSpace===Ii?null:bt.getPrimaries(T.colorSpace),Oe=T.colorSpace===Ii||Ae===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Ue=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Le=[];for(let he=0;he<6;he++)!Ue&&!Me?Le[he]=E(T.image[he],!0,r.maxCubemapSize):Le[he]=Me?T.image[he].image:T.image[he],Le[he]=Ye(T,Le[he]);const Ze=Le[0],Xe=s.convert(T.format,T.colorSpace),Ce=s.convert(T.type),ot=v(T.internalFormat,Xe,Ce,T.colorSpace),G=T.isVideoTexture!==!0,Se=se.__version===void 0||te===!0,we=pe.dataReady;let ze=b(T,Ze);Pe(t.TEXTURE_CUBE_MAP,T);let _e;if(Ue){G&&Se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ze,ot,Ze.width,Ze.height);for(let he=0;he<6;he++){_e=Le[he].mipmaps;for(let Ie=0;Ie<_e.length;Ie++){const rt=_e[Ie];T.format!==wi?Xe!==null?G?we&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,0,0,rt.width,rt.height,Xe,rt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,ot,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?we&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,0,0,rt.width,rt.height,Xe,Ce,rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,ot,rt.width,rt.height,0,Xe,Ce,rt.data)}}}else{if(_e=T.mipmaps,G&&Se){_e.length>0&&ze++;const he=Ke(Le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ze,ot,he.width,he.height)}for(let he=0;he<6;he++)if(Me){G?we&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Le[he].width,Le[he].height,Xe,Ce,Le[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ot,Le[he].width,Le[he].height,0,Xe,Ce,Le[he].data);for(let Ie=0;Ie<_e.length;Ie++){const Pt=_e[Ie].image[he].image;G?we&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,0,0,Pt.width,Pt.height,Xe,Ce,Pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,ot,Pt.width,Pt.height,0,Xe,Ce,Pt.data)}}else{G?we&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Xe,Ce,Le[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ot,Xe,Ce,Le[he]);for(let Ie=0;Ie<_e.length;Ie++){const rt=_e[Ie];G?we&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,0,0,Xe,Ce,rt.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,ot,Xe,Ce,rt.image[he])}}}g(T)&&u(t.TEXTURE_CUBE_MAP),se.__version=pe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Be(L,T,q,te,pe,se){const Ae=s.convert(q.format,q.colorSpace),ge=s.convert(q.type),Oe=v(q.internalFormat,Ae,ge,q.colorSpace),Ue=i.get(T),Me=i.get(q);if(Me.__renderTarget=T,!Ue.__hasExternalTextures){const Le=Math.max(1,T.width>>se),Ze=Math.max(1,T.height>>se);pe===t.TEXTURE_3D||pe===t.TEXTURE_2D_ARRAY?n.texImage3D(pe,se,Oe,Le,Ze,T.depth,0,Ae,ge,null):n.texImage2D(pe,se,Oe,Le,Ze,0,Ae,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),ae(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,pe,Me.__webglTexture,0,Ee(T)):(pe===t.TEXTURE_2D||pe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,pe,Me.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(L,T,q){if(t.bindRenderbuffer(t.RENDERBUFFER,L),T.depthBuffer){const te=T.depthTexture,pe=te&&te.isDepthTexture?te.type:null,se=y(T.stencilBuffer,pe),Ae=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=Ee(T);ae(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,se,T.width,T.height):q?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,se,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,se,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,L)}else{const te=T.textures;for(let pe=0;pe<te.length;pe++){const se=te[pe],Ae=s.convert(se.format,se.colorSpace),ge=s.convert(se.type),Oe=v(se.internalFormat,Ae,ge,se.colorSpace),Ue=Ee(T);q&&ae(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Oe,T.width,T.height):ae(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,Oe,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,Oe,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(T.depthTexture);te.__renderTarget=T,(!te.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),le(T.depthTexture,0);const pe=te.__webglTexture,se=Ee(T);if(T.depthTexture.format===$a)ae(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,pe,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,pe,0);else if(T.depthTexture.format===Ka)ae(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,pe,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function dt(L){const T=i.get(L),q=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const te=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),te){const pe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,te.removeEventListener("dispose",pe)};te.addEventListener("dispose",pe),T.__depthDisposeCallback=pe}T.__boundDepthTexture=te}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const te=L.texture.mipmaps;te&&te.length>0?We(T.__webglFramebuffer[0],L):We(T.__webglFramebuffer,L)}else if(q){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]===void 0)T.__webglDepthbuffer[te]=t.createRenderbuffer(),$e(T.__webglDepthbuffer[te],L,!1);else{const pe=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=T.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,se)}}else{const te=L.texture.mipmaps;if(te&&te.length>0?n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),$e(T.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Yt(L,T,q){const te=i.get(L);T!==void 0&&Be(te.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&dt(L)}function U(L){const T=L.texture,q=i.get(L),te=i.get(T);L.addEventListener("dispose",P);const pe=L.textures,se=L.isWebGLCubeRenderTarget===!0,Ae=pe.length>1;if(Ae||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=T.version,o.memory.textures++),se){q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[ge]=[];for(let Oe=0;Oe<T.mipmaps.length;Oe++)q.__webglFramebuffer[ge][Oe]=t.createFramebuffer()}else q.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)q.__webglFramebuffer[ge]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let ge=0,Oe=pe.length;ge<Oe;ge++){const Ue=i.get(pe[ge]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&ae(L)===!1){q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ge=0;ge<pe.length;ge++){const Oe=pe[ge];q.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[ge]);const Ue=s.convert(Oe.format,Oe.colorSpace),Me=s.convert(Oe.type),Le=v(Oe.internalFormat,Ue,Me,Oe.colorSpace,L.isXRRenderTarget===!0),Ze=Ee(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze,Le,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,q.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),$e(q.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Pe(t.TEXTURE_CUBE_MAP,T);for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)Be(q.__webglFramebuffer[ge][Oe],L,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe);else Be(q.__webglFramebuffer[ge],L,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(T)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let ge=0,Oe=pe.length;ge<Oe;ge++){const Ue=pe[ge],Me=i.get(Ue);let Le=t.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Le=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Le,Me.__webglTexture),Pe(Le,Ue),Be(q.__webglFramebuffer,L,Ue,t.COLOR_ATTACHMENT0+ge,Le,0),g(Ue)&&u(Le)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ge=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,te.__webglTexture),Pe(ge,T),T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)Be(q.__webglFramebuffer[Oe],L,T,t.COLOR_ATTACHMENT0,ge,Oe);else Be(q.__webglFramebuffer,L,T,t.COLOR_ATTACHMENT0,ge,0);g(T)&&u(ge),n.unbindTexture()}L.depthBuffer&&dt(L)}function at(L){const T=L.textures;for(let q=0,te=T.length;q<te;q++){const pe=T[q];if(g(pe)){const se=m(L),Ae=i.get(pe).__webglTexture;n.bindTexture(se,Ae),u(se),n.unbindTexture()}}}const st=[],tt=[];function z(L){if(L.samples>0){if(ae(L)===!1){const T=L.textures,q=L.width,te=L.height;let pe=t.COLOR_BUFFER_BIT;const se=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(L),ge=T.length>1;if(ge)for(let Ue=0;Ue<T.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Oe=L.texture.mipmaps;Oe&&Oe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pe|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pe|=t.STENCIL_BUFFER_BIT)),ge){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ue]);const Me=i.get(T[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Me,0)}t.blitFramebuffer(0,0,q,te,0,0,q,te,pe,t.NEAREST),l===!0&&(st.length=0,tt.length=0,st.push(t.COLOR_ATTACHMENT0+Ue),L.depthBuffer&&L.resolveDepthBuffer===!1&&(st.push(se),tt.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,tt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Ue=0;Ue<T.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ue]);const Me=i.get(T[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,Me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Ee(L){return Math.min(r.maxSamples,L.samples)}function ae(L){const T=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ce(L){const T=o.render.frame;d.get(L)!==T&&(d.set(L,T),L.update())}function Ye(L,T){const q=L.colorSpace,te=L.format,pe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Lo&&q!==Ii&&(bt.getTransfer(q)===Dt?(te!==wi||pe!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function Ke(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=B,this.setTexture2D=le,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=F,this.rebindTextures=Yt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=ae}function NA(t,e){function n(i,r=Ii){let s;const o=bt.getTransfer(r);if(i===Bi)return t.UNSIGNED_BYTE;if(i===Tp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ap)return t.UNSIGNED_SHORT_5_5_5_1;if(i===px)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===mx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===fx)return t.BYTE;if(i===hx)return t.SHORT;if(i===Ya)return t.UNSIGNED_SHORT;if(i===Ep)return t.INT;if(i===Ps)return t.UNSIGNED_INT;if(i===sr)return t.FLOAT;if(i===il)return t.HALF_FLOAT;if(i===gx)return t.ALPHA;if(i===vx)return t.RGB;if(i===wi)return t.RGBA;if(i===$a)return t.DEPTH_COMPONENT;if(i===Ka)return t.DEPTH_STENCIL;if(i===_x)return t.RED;if(i===bp)return t.RED_INTEGER;if(i===xx)return t.RG;if(i===Cp)return t.RG_INTEGER;if(i===Rp)return t.RGBA_INTEGER;if(i===pc||i===mc||i===gc||i===vc)if(o===Dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kf||i===Zf||i===Jf||i===Qf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eh||i===th||i===nh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===eh||i===th)return o===Dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh||i===gh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ih)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ah)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ch)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ph)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vh||i===_h||i===xh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vh)return o===Dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_h)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yh||i===Mh||i===Sh||i===wh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const IA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UA=`
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

}`;class FA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Lx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Xr({vertexShader:IA,fragmentShader:UA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oe(new nr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OA extends Fo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,_=null;const E=typeof XRWebGLBinding<"u",g=new FA,u={},m=n.getContextAttributes();let v=null,y=null;const b=[],R=[],P=new Ge;let D=null;const S=new Jn;S.viewport=new Nt;const x=new Jn;x.viewport=new Nt;const I=[S,x],B=new i2;let $=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ue=b[k];return ue===void 0&&(ue=new Ad,b[k]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(k){let ue=b[k];return ue===void 0&&(ue=new Ad,b[k]=ue),ue.getGripSpace()},this.getHand=function(k){let ue=b[k];return ue===void 0&&(ue=new Ad,b[k]=ue),ue.getHandSpace()};function le(k){const ue=R.indexOf(k.inputSource);if(ue===-1)return;const Be=b[ue];Be!==void 0&&(Be.update(k.inputSource,k.frame,c||o),Be.dispatchEvent({type:k.type,data:k.inputSource}))}function H(){r.removeEventListener("select",le),r.removeEventListener("selectstart",le),r.removeEventListener("selectend",le),r.removeEventListener("squeeze",le),r.removeEventListener("squeezestart",le),r.removeEventListener("squeezeend",le),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",j);for(let k=0;k<b.length;k++){const ue=R[k];ue!==null&&(R[k]=null,b[k].disconnect(ue))}$=null,re=null,g.reset();for(const k in u)delete u[k];e.setRenderTarget(v),p=null,h=null,f=null,r=null,y=null,ne.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",le),r.addEventListener("selectstart",le),r.addEventListener("selectend",le),r.addEventListener("squeeze",le),r.addEventListener("squeezestart",le),r.addEventListener("squeezeend",le),r.addEventListener("end",H),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Be=null,$e=null,We=null;m.depth&&(We=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Be=m.stencil?Ka:$a,$e=m.stencil?qa:Ps);const dt={colorFormat:n.RGBA8,depthFormat:We,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(dt),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Ls(h.textureWidth,h.textureHeight,{format:wi,type:Bi,depthTexture:new Px(h.textureWidth,h.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,Be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Be),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ls(p.framebufferWidth,p.framebufferHeight,{format:wi,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(k){for(let ue=0;ue<k.removed.length;ue++){const Be=k.removed[ue],$e=R.indexOf(Be);$e>=0&&(R[$e]=null,b[$e].disconnect(Be))}for(let ue=0;ue<k.added.length;ue++){const Be=k.added[ue];let $e=R.indexOf(Be);if($e===-1){for(let dt=0;dt<b.length;dt++)if(dt>=R.length){R.push(Be),$e=dt;break}else if(R[dt]===null){R[dt]=Be,$e=dt;break}if($e===-1)break}const We=b[$e];We&&We.connect(Be)}}const F=new O,Z=new O;function ie(k,ue,Be){F.setFromMatrixPosition(ue.matrixWorld),Z.setFromMatrixPosition(Be.matrixWorld);const $e=F.distanceTo(Z),We=ue.projectionMatrix.elements,dt=Be.projectionMatrix.elements,Yt=We[14]/(We[10]-1),U=We[14]/(We[10]+1),at=(We[9]+1)/We[5],st=(We[9]-1)/We[5],tt=(We[8]-1)/We[0],z=(dt[8]+1)/dt[0],Ee=Yt*tt,ae=Yt*z,ce=$e/(-tt+z),Ye=ce*-tt;if(ue.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ye),k.translateZ(ce),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),We[10]===-1)k.projectionMatrix.copy(ue.projectionMatrix),k.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ke=Yt+ce,L=U+ce,T=Ee-Ye,q=ae+($e-Ye),te=at*U/L*Ke,pe=st*U/L*Ke;k.projectionMatrix.makePerspective(T,q,te,pe,Ke,L),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function ye(k,ue){ue===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ue.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let ue=k.near,Be=k.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(Be=g.depthFar)),B.near=x.near=S.near=ue,B.far=x.far=S.far=Be,($!==B.near||re!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),$=B.near,re=B.far),B.layers.mask=k.layers.mask|6,S.layers.mask=B.layers.mask&3,x.layers.mask=B.layers.mask&5;const $e=k.parent,We=B.cameras;ye(B,$e);for(let dt=0;dt<We.length;dt++)ye(We[dt],$e);We.length===2?ie(B,S,x):B.projectionMatrix.copy(S.projectionMatrix),Pe(k,B,$e)};function Pe(k,ue,Be){Be===null?k.matrix.copy(ue.matrixWorld):(k.matrix.copy(Be.matrixWorld),k.matrix.invert(),k.matrix.multiply(ue.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ue.projectionMatrix),k.projectionMatrixInverse.copy(ue.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Eh*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(k){return u[k]};let ct=null;function be(k,ue){if(d=ue.getViewerPose(c||o),_=ue,d!==null){const Be=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let $e=!1;Be.length!==B.cameras.length&&(B.cameras.length=0,$e=!0);for(let U=0;U<Be.length;U++){const at=Be[U];let st=null;if(p!==null)st=p.getViewport(at);else{const z=f.getViewSubImage(h,at);st=z.viewport,U===0&&(e.setRenderTargetTextures(y,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(y))}let tt=I[U];tt===void 0&&(tt=new Jn,tt.layers.enable(U),tt.viewport=new Nt,I[U]=tt),tt.matrix.fromArray(at.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(at.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(st.x,st.y,st.width,st.height),U===0&&(B.matrix.copy(tt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),$e===!0&&B.cameras.push(tt)}const We=r.enabledFeatures;if(We&&We.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){f=i.getBinding();const U=f.getDepthInformation(Be[0]);U&&U.isValid&&U.texture&&g.init(U,r.renderState)}if(We&&We.includes("camera-access")&&E){e.state.unbindTexture(),f=i.getBinding();for(let U=0;U<Be.length;U++){const at=Be[U].camera;if(at){let st=u[at];st||(st=new Lx,u[at]=st);const tt=f.getCameraImage(at);st.sourceTexture=tt}}}}for(let Be=0;Be<b.length;Be++){const $e=R[Be],We=b[Be];$e!==null&&We!==void 0&&We.update($e,ue,c||o)}ct&&ct(k,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),_=null}const ne=new Fx;ne.setAnimationLoop(be),this.setAnimationLoop=function(k){ct=k},this.dispose=function(){}}}const us=new Hi,kA=new zt;function zA(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,bx(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,m,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),f(g,u)):u.isMeshPhongMaterial?(s(g,u),d(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&p(g,u,y)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),E(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,m,v):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===jn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===jn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const m=e.get(u),v=m.envMap,y=m.envMapRotation;v&&(g.envMap.value=v,us.copy(y),us.x*=-1,us.y*=-1,us.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),g.envMapRotation.value.setFromMatrix4(kA.makeRotationFromEuler(us)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,m,v){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*m,g.scale.value=v*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,m){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===jn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function E(g,u){const m=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function BA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const y=v.program;i.uniformBlockBinding(m,y)}function c(m,v){let y=r[m.id];y===void 0&&(_(m),y=d(m),r[m.id]=y,m.addEventListener("dispose",g));const b=v.program;i.updateUBOMapping(m,b);const R=e.render.frame;s[m.id]!==R&&(h(m),s[m.id]=R)}function d(m){const v=f();m.__bindingPointIndex=v;const y=t.createBuffer(),b=m.__size,R=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],y=m.uniforms,b=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,P=y.length;R<P;R++){const D=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,x=D.length;S<x;S++){const I=D[S];if(p(I,R,S,b)===!0){const B=I.__offset,$=Array.isArray(I.value)?I.value:[I.value];let re=0;for(let le=0;le<$.length;le++){const H=$[le],j=E(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,B+re,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,re),re+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,v,y,b){const R=m.value,P=v+"_"+y;if(b[P]===void 0)return typeof R=="number"||typeof R=="boolean"?b[P]=R:b[P]=R.clone(),!0;{const D=b[P];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return b[P]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function _(m){const v=m.uniforms;let y=0;const b=16;for(let P=0,D=v.length;P<D;P++){const S=Array.isArray(v[P])?v[P]:[v[P]];for(let x=0,I=S.length;x<I;x++){const B=S[x],$=Array.isArray(B.value)?B.value:[B.value];for(let re=0,le=$.length;re<le;re++){const H=$[re],j=E(H),F=y%b,Z=F%j.boundary,ie=F+Z;y+=Z,ie!==0&&b-ie<j.storage&&(y+=b-ie),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=j.storage}}}const R=y%b;return R>0&&(y+=b-R),m.__size=y,m.__cache={},this}function E(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class HA{constructor(e={}){const{canvas:n=aS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),E=new Int32Array(4);let g=null,u=null;const m=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let b=!1;this._outputColorSpace=Bn;let R=0,P=0,D=null,S=-1,x=null;const I=new Nt,B=new Nt;let $=null;const re=new yt(0);let le=0,H=n.width,j=n.height,F=1,Z=null,ie=null;const ye=new Nt(0,0,H,j),Pe=new Nt(0,0,H,j);let ct=!1;const be=new Ip;let ne=!1,k=!1;const ue=new zt,Be=new O,$e=new Nt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Yt(){return D===null?F:1}let U=i;function at(A,W){return n.getContext(A,W)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wp}`),n.addEventListener("webglcontextlost",we,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",_e,!1),U===null){const W="webgl2";if(U=at(W,A),U===null)throw at(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let st,tt,z,Ee,ae,ce,Ye,Ke,L,T,q,te,pe,se,Ae,ge,Oe,Ue,Me,Le,Ze,Xe,Ce,ot;function G(){st=new ZE(U),st.init(),Xe=new NA(U,st),tt=new WE(U,st,e,Xe),z=new LA(U,st),tt.reversedDepthBuffer&&h&&z.buffers.depth.setReversed(!0),Ee=new eT(U),ae=new _A,ce=new DA(U,st,z,ae,tt,Xe,Ee),Ye=new jE(y),Ke=new KE(y),L=new o2(U),Ce=new VE(U,L),T=new JE(U,L,Ee,Ce),q=new nT(U,T,L,Ee),Me=new tT(U,tt,ce),ge=new XE(ae),te=new vA(y,Ye,Ke,st,tt,Ce,ge),pe=new zA(y,ae),se=new yA,Ae=new AA(st),Ue=new HE(y,Ye,Ke,z,q,p,l),Oe=new RA(y,q,tt),ot=new BA(U,Ee,tt,z),Le=new GE(U,st,Ee),Ze=new QE(U,st,Ee),Ee.programs=te.programs,y.capabilities=tt,y.extensions=st,y.properties=ae,y.renderLists=se,y.shadowMap=Oe,y.state=z,y.info=Ee}G();const Se=new OA(y,U);this.xr=Se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=st.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=st.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(H,j,!1))},this.getSize=function(A){return A.set(H,j)},this.setSize=function(A,W,Q=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,j=W,n.width=Math.floor(A*F),n.height=Math.floor(W*F),Q===!0&&(n.style.width=A+"px",n.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(H*F,j*F).floor()},this.setDrawingBufferSize=function(A,W,Q){H=A,j=W,F=Q,n.width=Math.floor(A*Q),n.height=Math.floor(W*Q),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,W,Q,ee){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,W,Q,ee),z.viewport(I.copy(ye).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(Pe)},this.setScissor=function(A,W,Q,ee){A.isVector4?Pe.set(A.x,A.y,A.z,A.w):Pe.set(A,W,Q,ee),z.scissor(B.copy(Pe).multiplyScalar(F).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(A){z.setScissorTest(ct=A)},this.setOpaqueSort=function(A){Z=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,Q=!0){let ee=0;if(A){let X=!1;if(D!==null){const me=D.texture.format;X=me===Rp||me===Cp||me===bp}if(X){const me=D.texture.type,De=me===Bi||me===Ps||me===Ya||me===qa||me===Tp||me===Ap,Ve=Ue.getClearColor(),ke=Ue.getClearAlpha(),nt=Ve.r,it=Ve.g,je=Ve.b;De?(_[0]=nt,_[1]=it,_[2]=je,_[3]=ke,U.clearBufferuiv(U.COLOR,0,_)):(E[0]=nt,E[1]=it,E[2]=je,E[3]=ke,U.clearBufferiv(U.COLOR,0,E))}else ee|=U.COLOR_BUFFER_BIT}W&&(ee|=U.DEPTH_BUFFER_BIT),Q&&(ee|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",we,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),Ue.dispose(),se.dispose(),Ae.dispose(),ae.dispose(),Ye.dispose(),Ke.dispose(),q.dispose(),Ce.dispose(),ot.dispose(),te.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Yn),Se.removeEventListener("sessionend",Is),Vi.stop()};function we(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=Ee.autoReset,W=Oe.enabled,Q=Oe.autoUpdate,ee=Oe.needsUpdate,X=Oe.type;G(),Ee.autoReset=A,Oe.enabled=W,Oe.autoUpdate=Q,Oe.needsUpdate=ee,Oe.type=X}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function he(A){const W=A.target;W.removeEventListener("dispose",he),Ie(W)}function Ie(A){rt(A),ae.remove(A)}function rt(A){const W=ae.get(A).programs;W!==void 0&&(W.forEach(function(Q){te.releaseProgram(Q)}),A.isShaderMaterial&&te.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Q,ee,X,me){W===null&&(W=We);const De=X.isMesh&&X.matrixWorld.determinant()<0,Ve=oi(A,W,Q,ee,X);z.setMaterial(ee,De);let ke=Q.index,nt=1;if(ee.wireframe===!0){if(ke=T.getWireframeAttribute(Q),ke===void 0)return;nt=2}const it=Q.drawRange,je=Q.attributes.position;let pt=it.start*nt,Tt=(it.start+it.count)*nt;me!==null&&(pt=Math.max(pt,me.start*nt),Tt=Math.min(Tt,(me.start+me.count)*nt)),ke!==null?(pt=Math.max(pt,0),Tt=Math.min(Tt,ke.count)):je!=null&&(pt=Math.max(pt,0),Tt=Math.min(Tt,je.count));const It=Tt-pt;if(It<0||It===1/0)return;Ce.setup(X,ee,Ve,Q,ke);let At,Ct=Le;if(ke!==null&&(At=L.get(ke),Ct=Ze,Ct.setIndex(At)),X.isMesh)ee.wireframe===!0?(z.setLineWidth(ee.wireframeLinewidth*Yt()),Ct.setMode(U.LINES)):Ct.setMode(U.TRIANGLES);else if(X.isLine){let Je=ee.linewidth;Je===void 0&&(Je=1),z.setLineWidth(Je*Yt()),X.isLineSegments?Ct.setMode(U.LINES):X.isLineLoop?Ct.setMode(U.LINE_LOOP):Ct.setMode(U.LINE_STRIP)}else X.isPoints?Ct.setMode(U.POINTS):X.isSprite&&Ct.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Za("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Ct.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Je=X._multiDrawStarts,Ft=X._multiDrawCounts,St=X._multiDrawCount,cn=ke?L.get(ke).bytesPerElement:1,pr=ae.get(ee).currentProgram.getUniforms();for(let Pn=0;Pn<St;Pn++)pr.setValue(U,"_gl_DrawID",Pn),Ct.render(Je[Pn]/cn,Ft[Pn])}else if(X.isInstancedMesh)Ct.renderInstances(pt,It,X.count);else if(Q.isInstancedBufferGeometry){const Je=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ft=Math.min(Q.instanceCount,Je);Ct.renderInstances(pt,It,Ft)}else Ct.render(pt,It)};function Pt(A,W,Q){A.transparent===!0&&A.side===Mi&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,Gi(A,W,Q),A.side=Wr,A.needsUpdate=!0,Gi(A,W,Q),A.side=Mi):Gi(A,W,Q)}this.compile=function(A,W,Q=null){Q===null&&(Q=A),u=Ae.get(Q),u.init(W),v.push(u),Q.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),A!==Q&&A.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),u.setupLights();const ee=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const me=X.material;if(me)if(Array.isArray(me))for(let De=0;De<me.length;De++){const Ve=me[De];Pt(Ve,Q,X),ee.add(Ve)}else Pt(me,Q,X),ee.add(me)}),u=v.pop(),ee},this.compileAsync=function(A,W,Q=null){const ee=this.compile(A,W,Q);return new Promise(X=>{function me(){if(ee.forEach(function(De){ae.get(De).currentProgram.isReady()&&ee.delete(De)}),ee.size===0){X(A);return}setTimeout(me,10)}st.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Mt=null;function ri(A){Mt&&Mt(A)}function Yn(){Vi.stop()}function Is(){Vi.start()}const Vi=new Fx;Vi.setAnimationLoop(ri),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(A){Mt=A,Se.setAnimationLoop(A),A===null?Vi.stop():Vi.start()},Se.addEventListener("sessionstart",Yn),Se.addEventListener("sessionend",Is),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(W),W=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,W,D),u=Ae.get(A,v.length),u.init(W),v.push(u),ue.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),be.setFromProjectionMatrix(ue,Fi,W.reversedDepth),k=this.localClippingEnabled,ne=ge.init(this.clippingPlanes,k),g=se.get(A,m.length),g.init(),m.push(g),Se.enabled===!0&&Se.isPresenting===!0){const me=y.xr.getDepthSensingMesh();me!==null&&$r(me,W,-1/0,y.sortObjects)}$r(A,W,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Z,ie),dt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,dt&&Ue.addToRenderList(g,A),this.info.render.frame++,ne===!0&&ge.beginShadows();const Q=u.state.shadowsArray;Oe.render(Q,A,W),ne===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=g.opaque,X=g.transmissive;if(u.setupLights(),W.isArrayCamera){const me=W.cameras;if(X.length>0)for(let De=0,Ve=me.length;De<Ve;De++){const ke=me[De];al(ee,X,A,ke)}dt&&Ue.render(A);for(let De=0,Ve=me.length;De<Ve;De++){const ke=me[De];si(g,A,ke,ke.viewport)}}else X.length>0&&al(ee,X,A,W),dt&&Ue.render(A),si(g,A,W);D!==null&&P===0&&(ce.updateMultisampleRenderTarget(D),ce.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(y,A,W),Ce.resetDefaultState(),S=-1,x=null,v.pop(),v.length>0?(u=v[v.length-1],ne===!0&&ge.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function $r(A,W,Q,ee){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||be.intersectsSprite(A)){ee&&$e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);const De=q.update(A),Ve=A.material;Ve.visible&&g.push(A,De,Ve,Q,$e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||be.intersectsObject(A))){const De=q.update(A),Ve=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$e.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),$e.copy(De.boundingSphere.center)),$e.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(Ve)){const ke=De.groups;for(let nt=0,it=ke.length;nt<it;nt++){const je=ke[nt],pt=Ve[je.materialIndex];pt&&pt.visible&&g.push(A,De,pt,Q,$e.z,je)}}else Ve.visible&&g.push(A,De,Ve,Q,$e.z,null)}}const me=A.children;for(let De=0,Ve=me.length;De<Ve;De++)$r(me[De],W,Q,ee)}function si(A,W,Q,ee){const X=A.opaque,me=A.transmissive,De=A.transparent;u.setupLightsView(Q),ne===!0&&ge.setGlobalState(y.clippingPlanes,Q),ee&&z.viewport(I.copy(ee)),X.length>0&&Kr(X,W,Q),me.length>0&&Kr(me,W,Q),De.length>0&&Kr(De,W,Q),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function al(A,W,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[ee.id]===void 0&&(u.state.transmissionRenderTarget[ee.id]=new Ls(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?il:Bi,minFilter:Ss,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const me=u.state.transmissionRenderTarget[ee.id],De=ee.viewport||I;me.setSize(De.z*y.transmissionResolutionScale,De.w*y.transmissionResolutionScale);const Ve=y.getRenderTarget(),ke=y.getActiveCubeFace(),nt=y.getActiveMipmapLevel();y.setRenderTarget(me),y.getClearColor(re),le=y.getClearAlpha(),le<1&&y.setClearColor(16777215,.5),y.clear(),dt&&Ue.render(Q);const it=y.toneMapping;y.toneMapping=Hr;const je=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),u.setupLightsView(ee),ne===!0&&ge.setGlobalState(y.clippingPlanes,ee),Kr(A,Q,ee),ce.updateMultisampleRenderTarget(me),ce.updateRenderTargetMipmap(me),st.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Tt=0,It=W.length;Tt<It;Tt++){const At=W[Tt],Ct=At.object,Je=At.geometry,Ft=At.material,St=At.group;if(Ft.side===Mi&&Ct.layers.test(ee.layers)){const cn=Ft.side;Ft.side=jn,Ft.needsUpdate=!0,zo(Ct,Q,ee,Je,Ft,St),Ft.side=cn,Ft.needsUpdate=!0,pt=!0}}pt===!0&&(ce.updateMultisampleRenderTarget(me),ce.updateRenderTargetMipmap(me))}y.setRenderTarget(Ve,ke,nt),y.setClearColor(re,le),je!==void 0&&(ee.viewport=je),y.toneMapping=it}function Kr(A,W,Q){const ee=W.isScene===!0?W.overrideMaterial:null;for(let X=0,me=A.length;X<me;X++){const De=A[X],Ve=De.object,ke=De.geometry,nt=De.group;let it=De.material;it.allowOverride===!0&&ee!==null&&(it=ee),Ve.layers.test(Q.layers)&&zo(Ve,W,Q,ke,it,nt)}}function zo(A,W,Q,ee,X,me){A.onBeforeRender(y,W,Q,ee,X,me),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(y,W,Q,ee,A,me),X.transparent===!0&&X.side===Mi&&X.forceSinglePass===!1?(X.side=jn,X.needsUpdate=!0,y.renderBufferDirect(Q,W,ee,X,A,me),X.side=Wr,X.needsUpdate=!0,y.renderBufferDirect(Q,W,ee,X,A,me),X.side=Mi):y.renderBufferDirect(Q,W,ee,X,A,me),A.onAfterRender(y,W,Q,ee,X,me)}function Gi(A,W,Q){W.isScene!==!0&&(W=We);const ee=ae.get(A),X=u.state.lights,me=u.state.shadowsArray,De=X.state.version,Ve=te.getParameters(A,X.state,me,W,Q),ke=te.getProgramCacheKey(Ve);let nt=ee.programs;ee.environment=A.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(A.isMeshStandardMaterial?Ke:Ye).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",he),nt=new Map,ee.programs=nt);let it=nt.get(ke);if(it!==void 0){if(ee.currentProgram===it&&ee.lightsStateVersion===De)return Bo(A,Ve),it}else Ve.uniforms=te.getUniforms(A),A.onBeforeCompile(Ve,y),it=te.acquireProgram(Ve,ke),nt.set(ke,it),ee.uniforms=Ve.uniforms;const je=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=ge.uniform),Bo(A,Ve),ee.needsLights=ll(A),ee.lightsStateVersion=De,ee.needsLights&&(je.ambientLightColor.value=X.state.ambient,je.lightProbe.value=X.state.probe,je.directionalLights.value=X.state.directional,je.directionalLightShadows.value=X.state.directionalShadow,je.spotLights.value=X.state.spot,je.spotLightShadows.value=X.state.spotShadow,je.rectAreaLights.value=X.state.rectArea,je.ltc_1.value=X.state.rectAreaLTC1,je.ltc_2.value=X.state.rectAreaLTC2,je.pointLights.value=X.state.point,je.pointLightShadows.value=X.state.pointShadow,je.hemisphereLights.value=X.state.hemi,je.directionalShadowMap.value=X.state.directionalShadowMap,je.directionalShadowMatrix.value=X.state.directionalShadowMatrix,je.spotShadowMap.value=X.state.spotShadowMap,je.spotLightMatrix.value=X.state.spotLightMatrix,je.spotLightMap.value=X.state.spotLightMap,je.pointShadowMap.value=X.state.pointShadowMap,je.pointShadowMatrix.value=X.state.pointShadowMatrix),ee.currentProgram=it,ee.uniformsList=null,it}function Wi(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=_c.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Bo(A,W){const Q=ae.get(A);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function oi(A,W,Q,ee,X){W.isScene!==!0&&(W=We),ce.resetTextureUnits();const me=W.fog,De=ee.isMeshStandardMaterial?W.environment:null,Ve=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Lo,ke=(ee.isMeshStandardMaterial?Ke:Ye).get(ee.envMap||De),nt=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,it=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),je=!!Q.morphAttributes.position,pt=!!Q.morphAttributes.normal,Tt=!!Q.morphAttributes.color;let It=Hr;ee.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(It=y.toneMapping);const At=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ct=At!==void 0?At.length:0,Je=ae.get(ee),Ft=u.state.lights;if(ne===!0&&(k===!0||A!==x)){const Qt=A===x&&ee.id===S;ge.setState(ee,A,Qt)}let St=!1;ee.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ft.state.version||Je.outputColorSpace!==Ve||X.isBatchedMesh&&Je.batching===!1||!X.isBatchedMesh&&Je.batching===!0||X.isBatchedMesh&&Je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Je.instancing===!1||!X.isInstancedMesh&&Je.instancing===!0||X.isSkinnedMesh&&Je.skinning===!1||!X.isSkinnedMesh&&Je.skinning===!0||X.isInstancedMesh&&Je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Je.instancingMorph===!1&&X.morphTexture!==null||Je.envMap!==ke||ee.fog===!0&&Je.fog!==me||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ge.numPlanes||Je.numIntersection!==ge.numIntersection)||Je.vertexAlphas!==nt||Je.vertexTangents!==it||Je.morphTargets!==je||Je.morphNormals!==pt||Je.morphColors!==Tt||Je.toneMapping!==It||Je.morphTargetsCount!==Ct)&&(St=!0):(St=!0,Je.__version=ee.version);let cn=Je.currentProgram;St===!0&&(cn=Gi(ee,W,X));let pr=!1,Pn=!1,un=!1;const vt=cn.getUniforms(),Ln=Je.uniforms;if(z.useProgram(cn.program)&&(pr=!0,Pn=!0,un=!0),ee.id!==S&&(S=ee.id,Pn=!0),pr||x!==A){z.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),vt.setValue(U,"projectionMatrix",A.projectionMatrix),vt.setValue(U,"viewMatrix",A.matrixWorldInverse);const dn=vt.map.cameraPosition;dn!==void 0&&dn.setValue(U,Be.setFromMatrixPosition(A.matrixWorld)),tt.logarithmicDepthBuffer&&vt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&vt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,Pn=!0,un=!0)}if(X.isSkinnedMesh){vt.setOptional(U,X,"bindMatrix"),vt.setOptional(U,X,"bindMatrixInverse");const Qt=X.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),vt.setValue(U,"boneTexture",Qt.boneTexture,ce))}X.isBatchedMesh&&(vt.setOptional(U,X,"batchingTexture"),vt.setValue(U,"batchingTexture",X._matricesTexture,ce),vt.setOptional(U,X,"batchingIdTexture"),vt.setValue(U,"batchingIdTexture",X._indirectTexture,ce),vt.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&vt.setValue(U,"batchingColorTexture",X._colorsTexture,ce));const kn=Q.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Me.update(X,Q,cn),(Pn||Je.receiveShadow!==X.receiveShadow)&&(Je.receiveShadow=X.receiveShadow,vt.setValue(U,"receiveShadow",X.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Ln.envMap.value=ke,Ln.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(Ln.envMapIntensity.value=W.environmentIntensity),Pn&&(vt.setValue(U,"toneMappingExposure",y.toneMappingExposure),Je.needsLights&&Ho(Ln,un),me&&ee.fog===!0&&pe.refreshFogUniforms(Ln,me),pe.refreshMaterialUniforms(Ln,ee,F,j,u.state.transmissionRenderTarget[A.id]),_c.upload(U,Wi(Je),Ln,ce)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(_c.upload(U,Wi(Je),Ln,ce),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&vt.setValue(U,"center",X.center),vt.setValue(U,"modelViewMatrix",X.modelViewMatrix),vt.setValue(U,"normalMatrix",X.normalMatrix),vt.setValue(U,"modelMatrix",X.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Qt=ee.uniformsGroups;for(let dn=0,Zr=Qt.length;dn<Zr;dn++){const Mn=Qt[dn];ot.update(Mn,cn),ot.bind(Mn,cn)}}return cn}function Ho(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ll(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,W,Q){const ee=ae.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=W,ae.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:Q,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const Q=ae.get(A);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0};const cl=U.createFramebuffer();this.setRenderTarget=function(A,W=0,Q=0){D=A,R=W,P=Q;let ee=!0,X=null,me=!1,De=!1;if(A){const ke=ae.get(A);if(ke.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(U.FRAMEBUFFER,null),ee=!1;else if(ke.__webglFramebuffer===void 0)ce.setupRenderTarget(A);else if(ke.__hasExternalTextures)ce.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(ke.__boundDepthTexture!==je){if(je!==null&&ae.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(De=!0);const it=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[W])?X=it[W][Q]:X=it[W],me=!0):A.samples>0&&ce.useMultisampledRTT(A)===!1?X=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?X=it[Q]:X=it,I.copy(A.viewport),B.copy(A.scissor),$=A.scissorTest}else I.copy(ye).multiplyScalar(F).floor(),B.copy(Pe).multiplyScalar(F).floor(),$=ct;if(Q!==0&&(X=cl),z.bindFramebuffer(U.FRAMEBUFFER,X)&&ee&&z.drawBuffers(A,X),z.viewport(I),z.scissor(B),z.setScissorTest($),me){const ke=ae.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+W,ke.__webglTexture,Q)}else if(De){const ke=W;for(let nt=0;nt<A.textures.length;nt++){const it=ae.get(A.textures[nt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+nt,it.__webglTexture,Q,ke)}}else if(A!==null&&Q!==0){const ke=ae.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ke.__webglTexture,Q)}S=-1},this.readRenderTargetPixels=function(A,W,Q,ee,X,me,De,Ve=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(ke=ke[De]),ke){z.bindFramebuffer(U.FRAMEBUFFER,ke);try{const nt=A.textures[Ve],it=nt.format,je=nt.type;if(!tt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ee&&Q>=0&&Q<=A.height-X&&(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ve),U.readPixels(W,Q,ee,X,Xe.convert(it),Xe.convert(je),me))}finally{const nt=D!==null?ae.get(D).__webglFramebuffer:null;z.bindFramebuffer(U.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(A,W,Q,ee,X,me,De,Ve=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(ke=ke[De]),ke)if(W>=0&&W<=A.width-ee&&Q>=0&&Q<=A.height-X){z.bindFramebuffer(U.FRAMEBUFFER,ke);const nt=A.textures[Ve],it=nt.format,je=nt.type;if(!tt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.bufferData(U.PIXEL_PACK_BUFFER,me.byteLength,U.STREAM_READ),A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ve),U.readPixels(W,Q,ee,X,Xe.convert(it),Xe.convert(je),0);const Tt=D!==null?ae.get(D).__webglFramebuffer:null;z.bindFramebuffer(U.FRAMEBUFFER,Tt);const It=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await lS(U,It,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,me),U.deleteBuffer(pt),U.deleteSync(It),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,Q=0){const ee=Math.pow(2,-Q),X=Math.floor(A.image.width*ee),me=Math.floor(A.image.height*ee),De=W!==null?W.x:0,Ve=W!==null?W.y:0;ce.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,Q,0,0,De,Ve,X,me),z.unbindTexture()};const Vo=U.createFramebuffer(),ul=U.createFramebuffer();this.copyTextureToTexture=function(A,W,Q=null,ee=null,X=0,me=null){me===null&&(X!==0?(Za("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=X,X=0):me=0);let De,Ve,ke,nt,it,je,pt,Tt,It;const At=A.isCompressedTexture?A.mipmaps[me]:A.image;if(Q!==null)De=Q.max.x-Q.min.x,Ve=Q.max.y-Q.min.y,ke=Q.isBox3?Q.max.z-Q.min.z:1,nt=Q.min.x,it=Q.min.y,je=Q.isBox3?Q.min.z:0;else{const kn=Math.pow(2,-X);De=Math.floor(At.width*kn),Ve=Math.floor(At.height*kn),A.isDataArrayTexture?ke=At.depth:A.isData3DTexture?ke=Math.floor(At.depth*kn):ke=1,nt=0,it=0,je=0}ee!==null?(pt=ee.x,Tt=ee.y,It=ee.z):(pt=0,Tt=0,It=0);const Ct=Xe.convert(W.format),Je=Xe.convert(W.type);let Ft;W.isData3DTexture?(ce.setTexture3D(W,0),Ft=U.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ce.setTexture2DArray(W,0),Ft=U.TEXTURE_2D_ARRAY):(ce.setTexture2D(W,0),Ft=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment);const St=U.getParameter(U.UNPACK_ROW_LENGTH),cn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),pr=U.getParameter(U.UNPACK_SKIP_PIXELS),Pn=U.getParameter(U.UNPACK_SKIP_ROWS),un=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,At.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,At.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,nt),U.pixelStorei(U.UNPACK_SKIP_ROWS,it),U.pixelStorei(U.UNPACK_SKIP_IMAGES,je);const vt=A.isDataArrayTexture||A.isData3DTexture,Ln=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const kn=ae.get(A),Qt=ae.get(W),dn=ae.get(kn.__renderTarget),Zr=ae.get(Qt.__renderTarget);z.bindFramebuffer(U.READ_FRAMEBUFFER,dn.__webglFramebuffer),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,Zr.__webglFramebuffer);for(let Mn=0;Mn<ke;Mn++)vt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,X,je+Mn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ae.get(W).__webglTexture,me,It+Mn)),U.blitFramebuffer(nt,it,De,Ve,pt,Tt,De,Ve,U.DEPTH_BUFFER_BIT,U.NEAREST);z.bindFramebuffer(U.READ_FRAMEBUFFER,null),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||ae.has(A)){const kn=ae.get(A),Qt=ae.get(W);z.bindFramebuffer(U.READ_FRAMEBUFFER,Vo),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,ul);for(let dn=0;dn<ke;dn++)vt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,kn.__webglTexture,X,je+dn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,kn.__webglTexture,X),Ln?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qt.__webglTexture,me,It+dn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Qt.__webglTexture,me),X!==0?U.blitFramebuffer(nt,it,De,Ve,pt,Tt,De,Ve,U.COLOR_BUFFER_BIT,U.NEAREST):Ln?U.copyTexSubImage3D(Ft,me,pt,Tt,It+dn,nt,it,De,Ve):U.copyTexSubImage2D(Ft,me,pt,Tt,nt,it,De,Ve);z.bindFramebuffer(U.READ_FRAMEBUFFER,null),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ln?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Ft,me,pt,Tt,It,De,Ve,ke,Ct,Je,At.data):W.isCompressedArrayTexture?U.compressedTexSubImage3D(Ft,me,pt,Tt,It,De,Ve,ke,Ct,At.data):U.texSubImage3D(Ft,me,pt,Tt,It,De,Ve,ke,Ct,Je,At):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,me,pt,Tt,De,Ve,Ct,Je,At.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,me,pt,Tt,At.width,At.height,Ct,At.data):U.texSubImage2D(U.TEXTURE_2D,me,pt,Tt,De,Ve,Ct,Je,At);U.pixelStorei(U.UNPACK_ROW_LENGTH,St),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,cn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pr),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,un),me===0&&W.generateMipmaps&&U.generateMipmap(Ft),z.unbindTexture()},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&ce.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ce.setTextureCube(A,0):A.isData3DTexture?ce.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ce.setTexture2DArray(A,0):ce.setTexture2D(A,0),z.unbindTexture()},this.resetState=function(){R=0,P=0,D=null,z.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=bt._getUnpackColorSpace()}}var Yg;const wt=(Yg=window.Telegram)==null?void 0:Yg.WebApp,Gg="/yggdrasil-tma/",tc=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],VA=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],Wg={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},Xg=()=>{try{const t={...Wg,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...Wg,watch:Date.now()}}},da=()=>new Date().toISOString().slice(0,10),GA=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",Hd=[3,5,8,12,18,25,40],WA=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],XA=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],Vd=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],fa={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},jg={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},Gd={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},Wd={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function Tr({name:t,className:e}){return V.jsx("img",{src:t.includes(".")?`${Gg}img/${t}`:`${Gg}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const jA=`
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
`,ds=(t,e=.9,n=0)=>new xt({color:t,roughness:e,metalness:n}),Te=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function YA(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function qA(t){const e=new et,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=ds(i,.92),c=ds(s,.9),d=ds(o,.96),f=ds(r,.95),h=ds(a,.78),p=ds(2106150,.98),_=new oe(new bn(.28,.24,5,8),d);_.position.y=.72,e.add(_);const E=new oe(new bn(n?.37:.32,.56,6,10),c);E.position.y=1.15,e.add(E);const g=new oe(new bn(n?.4:.34,.34,5,8),c);g.scale.z=.82,g.position.y=1.28,e.add(g);const u=new oe(new Ht(.36,.38,.09,12),d);u.position.y=.93,e.add(u);const m=new oe(new nn(.12,.12,.055),h);m.position.set(0,.93,.38),e.add(m);const v=new oe(new Ht(.13,.15,.18,10),l);v.position.y=1.63,e.add(v);const y=new oe(new rn(.31,16,12),l);y.scale.set(.92,1.06,.92),y.position.y=1.91,e.add(y);const b=new oe(new rn(.325,14,10),f);b.scale.set(.98,.72,.98),b.position.set(0,2.08,-.025),e.add(b);const R=new oe(new bn(.18,.3,5,8),f);R.position.set(0,1.93,-.25),R.rotation.x=.15,e.add(R);const P=new oe(new An(.045,.13,5),l);P.rotation.x=Math.PI/2,P.position.set(0,1.92,.3),e.add(P);const D=new xt({color:1513754,roughness:.55});for(const Z of[-.105,.105]){const ie=new oe(new rn(.025,7,5),D);ie.position.set(Z,1.98,.285),e.add(ie)}if(n){const Z=new oe(new rn(.19,10,7),f);Z.scale.set(.82,1,.72),Z.position.set(0,1.8,.24),e.add(Z)}else{const Z=new oe(new bn(.055,.42,4,7),f);Z.position.set(-.27,1.78,-.08),Z.rotation.z=-.22,e.add(Z)}const S=Z=>{const ie=new et;ie.position.set(Z*(n?.43:.39),1.43,0),ie.rotation.z=Z*.07;const ye=new oe(new bn(.105,.42,5,7),c);ye.position.y=-.23,ie.add(ye);const Pe=new et;Pe.position.y=-.46,ie.add(Pe);const ct=new oe(new bn(.085,.34,5,7),d);ct.position.y=-.2,Pe.add(ct);const be=new oe(new rn(.105,9,7),l);return be.position.y=-.43,Pe.add(be),e.add(ie),{upper:ie,elbow:Pe}},x=S(-1),I=S(1),B=Z=>{const ie=new et;ie.position.set(Z*.15,.68,0);const ye=new oe(new bn(.12,.42,5,7),p);ye.position.y=-.23,ie.add(ye);const Pe=new et;Pe.position.y=-.48,ie.add(Pe);const ct=new oe(new bn(.095,.4,5,7),p);ct.position.y=-.22,Pe.add(ct);const be=new oe(new bn(.13,.24,5,7),d);return be.scale.z=1.25,be.position.set(0,-.47,.075),Pe.add(be),e.add(ie),ie},$=B(-1),re=B(1),le=new oe(new bn(.42,.1,5,8),d);le.scale.z=.72,le.position.y=1.48,e.add(le);const H=new oe(new nn(.58,.92,.075),ds(t.id==="berserk"?2821132:1582894,.98));H.position.set(0,1.05,-.28),H.rotation.x=-.035,e.add(H);const j=new et;if(t.id==="berserk"||t.id==="dwarf"){const Z=new oe(new Ht(.035,.045,.72,7),d);Z.position.y=.36,j.add(Z);const ie=new oe(new nn(.16,.34,.055),h);ie.position.set(0,.88,0),ie.rotation.z=t.id==="dwarf"?-.22:.22,j.add(ie)}else{const Z=new oe(new Ht(.028,.04,1.1,7),d);Z.position.y=.52,j.add(Z);const ie=new oe(new An(.075,.25,6),h);ie.position.y=1.18,j.add(ie)}if(j.position.set(.43,.32,.03),j.rotation.z=-.12,e.add(j),t.id==="viking"||t.id==="berserk"){const Z=new oe(new Ht(.3,.3,.1,16),d);Z.rotation.x=Math.PI/2,Z.position.set(0,1.12,-.37),e.add(Z);const ie=new oe(new rn(.065,8,6),h);ie.position.set(0,1.12,-.43),e.add(ie)}const F=new oe(new yo(.62,24),new hu({color:0,transparent:!0,opacity:.32}));return F.rotation.x=-Math.PI/2,F.position.y=.02,e.add(F),e.userData.anim={armL:x,armR:I,legL:$,legR:re,weapon:j,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0},YA(e)}function $A({h:t,on:e,eventDone:n}){const i=_t.useRef(null),r=_t.useRef(null),s=_t.useRef(null),o=_t.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=_t.useState(""),[c,d]=_t.useState(!1),[f,h]=_t.useState(!1),[p,_]=_t.useState(!1),[E,g]=_t.useState(!1),u=_t.useRef({x:0,z:1}),m=_t.useRef(!1),v=_t.useRef(null);_t.useEffect(()=>{const S=i.current;if(!S)return;const x=new NS;x.background=new yt(9414817),x.fog=new Np(8097158,.0058);const I=new Jn(54,1,.1,280);I.position.set(0,8.5,17);const B=new HA({antialias:!0,powerPreference:"high-performance"});B.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),B.shadowMap.enabled=!0,B.shadowMap.type=lx,B.outputColorSpace=Bn,B.toneMapping=ux,B.toneMappingExposure=1.08,S.appendChild(B.domElement);const $=new e2(14477797,4014136,1.38);x.add($);const re=new mg(16773583,3.15);re.position.set(-42,58,34),re.castShadow=!0,re.shadow.mapSize.set(1024,1024),re.shadow.camera.left=-95,re.shadow.camera.right=95,re.shadow.camera.top=95,re.shadow.camera.bottom=-95,re.shadow.bias=-5e-4,x.add(re);const le=new mg(12110789,.58);le.position.set(55,18,-60),x.add(le);const H=(M,C)=>{const w=Math.sin(M*.075)*.7+Math.cos(C*.062)*.55+Math.sin((M-C)*.045)*.35,N=Math.exp(-(M*M/850+(C+2)*(C+2)/1050)),J=Math.exp(-(M*M/150+(C-12)*(C-12)/2200));return w*(1-N*.88)-J*.18},j=M=>{const C=document.createElement("canvas");C.width=C.height=512;const w=C.getContext("2d"),N=Y=>Math.abs(Math.sin(Y*12.9898)*43758.5453)%1;if(M==="ground"){w.fillStyle="#3f4d38",w.fillRect(0,0,512,512);for(let Y=0;Y<1800;Y++){const de=N(Y*1.17)*512,fe=N(Y*2.31)*512,ve=10+N(Y*3.71)*28,K=N(Y*4.13);w.fillStyle=K>.72?`rgba(96,108,63,${.08+N(Y)*.12})`:`rgba(30,36,25,${.05+N(Y)*.12})`,w.beginPath(),w.arc(de,fe,ve,0,Math.PI*2),w.fill()}for(let Y=0;Y<650;Y++){const de=N(Y*7.1)*512,fe=N(Y*8.2)*512;w.strokeStyle=`rgba(118,126,78,${.16+N(Y*2)*.16})`,w.lineWidth=1+N(Y*4)*1.5,w.beginPath(),w.moveTo(de,fe),w.lineTo(de+(N(Y*5)-.5)*5,fe-3-N(Y*6)*5),w.stroke()}}else if(M==="wood"){w.fillStyle="#5a3d29",w.fillRect(0,0,512,512);for(let Y=0;Y<512;Y+=22)w.fillStyle=`rgba(25,15,9,${.18+N(Y)*.13})`,w.fillRect(0,Y,512,3),w.strokeStyle=`rgba(154,111,69,${.08+N(Y*2)*.08})`,w.lineWidth=2,w.beginPath(),w.moveTo(0,Y+7),w.bezierCurveTo(150,Y+2,340,Y+13,512,Y+5),w.stroke();for(let Y=0;Y<65;Y++){const de=N(Y*2.1)*512;w.fillStyle=`rgba(20,12,8,${.12+N(Y*3)*.16})`,w.fillRect(de,0,2+N(Y*4)*3,512)}}else if(M==="roof"){w.fillStyle="#252522",w.fillRect(0,0,512,512);for(let Y=-30;Y<550;Y+=25){w.fillStyle=`rgba(105,94,77,${.12+N(Y)*.08})`,w.fillRect(0,Y,512,2),w.strokeStyle="rgba(12,12,11,.48)",w.lineWidth=3;for(let de=-40;de<560;de+=38)w.beginPath(),w.moveTo(de,Y),w.lineTo(de-18,Y+28),w.stroke()}for(let Y=0;Y<180;Y++)w.fillStyle=`rgba(170,154,123,${.03+N(Y)*.07})`,w.fillRect(N(Y*2)*512,N(Y*3)*512,2+N(Y*4)*7,2)}else{w.fillStyle="#514333",w.fillRect(0,0,512,512);for(let Y=0;Y<1300;Y++){const de=N(Y*1.3)*512,fe=N(Y*2.7)*512;w.fillStyle=`rgba(${45+N(Y*3)*38},${35+N(Y*4)*28},${23+N(Y*5)*20},${.08+N(Y*6)*.18})`,w.fillRect(de,fe,2+N(Y*7)*7,1+N(Y*8)*4)}}const J=new Rd(C);return J.wrapS=J.wrapT=ja,J.colorSpace=Bn,J.anisotropy=4,J},F=(M,C=.88)=>{const w=M.image,N=document.createElement("canvas"),J=document.createElement("canvas");N.width=N.height=J.width=J.height=512;const Y=N.getContext("2d"),de=J.getContext("2d");Y.drawImage(w,0,0,512,512),de.drawImage(w,0,0,512,512);const fe=Y.getImageData(0,0,512,512),ve=de.getImageData(0,0,512,512),K=fe.data,Fe=ve.data;for(let qe=0;qe<512;qe++)for(let Qe=0;Qe<512;Qe++){const lt=(qe*512+Qe)*4,qn=(K[lt]*.299+K[lt+1]*.587+K[lt+2]*.114)/255,Ci=(K[(qe*512+Math.max(0,Qe-2))*4]*.299+K[(qe*512+Math.max(0,Qe-2))*4+1]*.587+K[(qe*512+Math.max(0,Qe-2))*4+2]*.114)/255,ji=(K[(qe*512+Math.min(511,Qe+2))*4]*.299+K[(qe*512+Math.min(511,Qe+2))*4+1]*.587+K[(qe*512+Math.min(511,Qe+2))*4+2]*.114)/255,Ri=(K[(Math.max(0,qe-2)*512+Qe)*4]*.299+K[(Math.max(0,qe-2)*512+Qe)*4+1]*.587+K[(Math.max(0,qe-2)*512+Qe)*4+2]*.114)/255,gr=(K[(Math.min(511,qe+2)*512+Qe)*4]*.299+K[(Math.min(511,qe+2)*512+Qe)*4+1]*.587+K[(Math.min(511,qe+2)*512+Qe)*4+2]*.114)/255,ns=128+(Ci-ji)*120,is=128+(Ri-gr)*120;K[lt]=Math.max(0,Math.min(255,ns)),K[lt+1]=Math.max(0,Math.min(255,is)),K[lt+2]=255,K[lt+3]=255;const qo=Math.max(0,Math.min(255,(C+(.5-qn)*.18)*255));Fe[lt]=Fe[lt+1]=Fe[lt+2]=qo,Fe[lt+3]=255}Y.putImageData(fe,0,0),de.putImageData(ve,0,0);const Ne=new Rd(N),ut=new Rd(J);for(const qe of[Ne,ut])qe.wrapS=qe.wrapT=ja,qe.anisotropy=4;return Ne.colorSpace=Ii,ut.colorSpace=Ii,{normalMap:Ne,roughnessMap:ut}},Z=j("ground"),ie=F(Z,.94);Z.repeat.set(5,6),ie.normalMap.repeat.set(5,6),ie.roughnessMap.repeat.set(5,6);const ye=new nr(190,190,62,62),Pe=ye.attributes.position;for(let M=0;M<Pe.count;M++){const C=Pe.getX(M),w=-Pe.getY(M);Pe.setZ(M,H(C,w))}ye.rotateX(-Math.PI/2),ye.computeVertexNormals();const ct=new oe(ye,new xt({map:Z,normalMap:ie.normalMap,normalScale:new Ge(.18,.18),roughnessMap:ie.roughnessMap,roughness:.96}));ct.receiveShadow=!0,x.add(ct);const be=(M,C,w)=>(C&&(M.userData={id:C,label:w||C}),M.traverse(N=>{N.isMesh&&(N.castShadow=!0,N.receiveShadow=!0)}),x.add(M),C&&ue.push(M),M),ne=(M,C=.9,w=0)=>new xt({color:M,roughness:C,metalness:w}),k=(M,C,w,N,J=.9)=>new oe(new nn(M,C,w),ne(N,J)),ue=[],Be=[],$e=[],We=[],dt=[],Yt=.62,U=(M,C,w,N,J=0,Y=.12)=>dt.push({kind:"rect",x:M,z:C,w:w+Y*2,d:N+Y*2,rot:J}),at=(M,C,w,N=.12)=>dt.push({kind:"circle",x:M,z:C,r:w+N}),st=(M,C,w,N,J,Y=.12)=>dt.push({kind:"segment",x1:M,z1:C,x2:w,z2:N,r:J+Y}),tt=(M,C,w)=>{if(w.kind==="circle")return Math.hypot(M-w.x,C-w.z)<w.r+Yt;if(w.kind==="rect"){const K=Math.cos(w.rot),Fe=Math.sin(w.rot),Ne=M-w.x,ut=C-w.z,qe=K*Ne-Fe*ut,Qe=Fe*Ne+K*ut,lt=Math.max(-w.w/2,Math.min(w.w/2,qe)),qn=Math.max(-w.d/2,Math.min(w.d/2,Qe));return Math.hypot(qe-lt,Qe-qn)<Yt}const N=w.x2-w.x1,J=w.z2-w.z1,Y=N*N+J*J,de=Y>0?Math.max(0,Math.min(1,((M-w.x1)*N+(C-w.z1)*J)/Y)):0,fe=w.x1+N*de,ve=w.z1+J*de;return Math.hypot(M-fe,C-ve)<w.r+Yt},z=(M,C)=>m.current?M<fn-2.72||M>fn+2.72||C<en-2.05||C>en+2.3:dt.some(w=>tt(M,C,w)),Ee=(M,C,w)=>{if(m.current){const Y=Math.max(fn-2.55,Math.min(fn+2.55,C)),de=Math.max(en-1.92,Math.min(en+2.55,w));M.x=Y,M.z=de;return}const N=Math.max(-88,Math.min(88,C)),J=Math.max(-89,Math.min(89,w));if(!z(N,J)){M.x=N,M.z=J;return}z(N,M.z)||(M.x=N),z(M.x,J)||(M.z=J)},ae=ne(3425343,1);for(let M=0;M<22;M++){const C=new et,w=-105+M*10,N=8+Te(M,7)*9,J=new oe(new An(N,18+Te(M,8)*16,7),ae);J.position.y=8,C.add(J),C.position.set(w,-1,-94+Te(M,9)*11),be(C)}const ce=[];for(let M=0;M<=24;M++){const C=-94+M*8,w=-57+Math.sin(M*.55)*3.6;ce.push(new O(w,H(w,C)-.05,C))}const Ye=new Ah(ce),Ke=new qc(Ye,64,5.8,8,!1),L=new oe(Ke,new xt({color:2576218,roughness:.2,metalness:.05,transparent:!0,opacity:.9}));L.scale.y=.025,L.position.y=.05,L.receiveShadow=!0,x.add(L);for(let M=0;M<50;M++){const C=-92+M*3.7,w=-57+Math.sin(M*.55)*3.6,N=.35+Te(M,15)*.6,J=new oe(new $t(N,1),ne(6185562,1));J.scale.y=.55,J.position.set(w+(Te(M,16)-.5)*10,H(w,C)+.25,C),be(J),at(J.position.x,J.position.z,N*.9,.03)}const T=j("road"),q=F(T,.96),te=(M,C)=>{const w=M.map(([fe,ve])=>new O(fe,H(fe,ve)+.035,ve)),N=[],J=[];for(let fe=0;fe<w.length;fe++){const ve=w[Math.max(0,fe-1)],K=w[Math.min(w.length-1,fe+1)],Fe=K.x-ve.x,Ne=K.z-ve.z,ut=Math.max(.001,Math.hypot(Fe,Ne)),qe=-Ne/ut,Qe=Fe/ut;if(N.push(w[fe].x+qe*C/2,w[fe].y,w[fe].z+Qe*C/2,w[fe].x-qe*C/2,w[fe].y+.01,w[fe].z-Qe*C/2),fe<w.length-1){const lt=fe*2;J.push(lt,lt+1,lt+2,lt+1,lt+3,lt+2)}}const Y=new vn;Y.setAttribute("position",new Rt(N,3)),Y.setIndex(J),Y.computeVertexNormals();const de=new oe(Y,new xt({map:T,normalMap:q.normalMap,normalScale:new Ge(.12,.12),roughnessMap:q.roughnessMap,roughness:.96}));de.receiveShadow=!0,x.add(de),[-C*.22,C*.22].forEach(fe=>{const ve=w.map((Ne,ut)=>{const qe=w[Math.max(0,ut-1)],Qe=w[Math.min(w.length-1,ut+1)],lt=Qe.x-qe.x,qn=Qe.z-qe.z,Ci=Math.max(.001,Math.hypot(lt,qn));return new O(Ne.x+-qn/Ci*fe,Ne.y+.045,Ne.z+lt/Ci*fe)}),K=new qc(new Ah(ve),Math.max(12,w.length*4),.055,5,!1),Fe=new oe(K,ne(3352863,1));Fe.scale.y=.12,x.add(Fe)})};te([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),te([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),te([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),te([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),te([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),te([[4,14],[-3,22],[-7,31],[-8,42]],3.8),te([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),te([[4,14],[10,28],[18,41],[27,57]],3.8),te([[5,31],[15,45],[27,57],[39,70]],3.7),te([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),te([[-39,-8],[-47,-12],[-53,-15]],3.4);const pe=j("wood");pe.repeat.set(2,1);const se=F(pe,.88);se.normalMap.repeat.set(2,1),se.roughnessMap.repeat.set(2,1);const Ae=j("roof");Ae.repeat.set(2,2);const ge=F(Ae,.94);ge.normalMap.repeat.set(2,2),ge.roughnessMap.repeat.set(2,2);const Oe=(M,C,w,N,J,Y,de,fe,ve)=>{const K=new et;K.rotation.y=J,K.position.set(M,H(M,C),C),K.userData={id:de,label:Y};const Fe=new xt({color:5856085,roughness:1}),Ne=new xt({map:pe,normalMap:se.normalMap,normalScale:new Ge(.22,.22),roughnessMap:se.roughnessMap,color:fe,roughness:.9});ne(2695193,1);const ut=k(w+.7,.62,N+.7,5658706,1);ut.position.y=.31,K.add(ut);const qe=new oe(new nn(w,3.55,N),Ne);qe.position.y=2.05,K.add(qe);for(const Yi of[-w*.46,w*.46])for(const rs of[-N*.5,N*.5]){const vr=k(.34,3.9,.34,2760728,1);vr.position.set(Yi,2.08,rs),K.add(vr)}const Qe=k(1.18,2.15,.18,2365714,1);Qe.position.set(0,1.35,N/2+.17),K.add(Qe);const lt=k(.14,2.35,.22,3811613,1),qn=lt.clone();lt.position.set(-.67,1.42,N/2+.2),qn.position.set(.67,1.42,N/2+.2),K.add(lt,qn);for(const Yi of[-w*.27,w*.27]){const rs=k(1.15,.95,.14,2760987,1);rs.position.set(Yi,2.18,N/2+.18),K.add(rs);const vr=new oe(new nn(.88,.68,.06),new xt({color:15775837,emissive:14186786,emissiveIntensity:1.8,roughness:.35}));vr.position.set(Yi,2.18,N/2+.255),K.add(vr);const bm=k(.07,.76,.12,2760987,1);bm.position.set(Yi,2.18,N/2+.3),K.add(bm);const Cm=k(1,.07,.12,2760987,1);Cm.position.set(Yi,2.18,N/2+.3),K.add(Cm)}const Ci=new xt({map:Ae,normalMap:ge.normalMap,normalScale:new Ge(.16,.16),roughnessMap:ge.roughnessMap,color:ve,roughness:.95,side:Mi}),ji=new oe(new nr(w*.82,N+1),Ci),Ri=new oe(new nr(w*.82,N+1),Ci);ji.rotation.x=Math.PI/2,Ri.rotation.x=Math.PI/2,ji.rotation.z=.62,Ri.rotation.z=-.62,ji.position.set(-w*.22,4.22,0),Ri.position.set(w*.22,4.22,0),K.add(ji,Ri);const gr=k(.3,.28,N+1.08,2826523,1);gr.position.y=5.08,K.add(gr);const ns=k(w*.34,.16,1,6439467,1);ns.position.set(0,.68,N/2+.54),K.add(ns);const is=new oe(new nn(.62,2,.62),Fe);is.position.set(w*.24,5.15,-N*.08),K.add(is);const qo=k(.82,.12,.82,3486254,1);qo.position.set(w*.24,6.17,-N*.08),K.add(qo),be(K,de,Y),ue.push(K),U(M,C,w+.85,N+.85,J,.05)};Oe(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),Oe(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),Oe(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),Oe(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),Oe(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),Oe(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const Ue=new et;Ue.position.set(-10,H(-10,-5),-5),Ue.userData={id:"forge",label:"Кузница"};const Me=k(9,3.8,6,5126701,1);Me.position.y=1.9,Ue.add(Me);const Le=k(2.8,3.6,.28,2760986,1);Le.position.set(-3.1,1.9,3.05),Ue.add(Le);const Ze=new oe(new nn(5.5,.24,6.7),new xt({map:Ae,color:2433826,roughness:1}));Ze.rotation.z=.58,Ze.position.set(-2,4.2,0),Ue.add(Ze);const Xe=Ze.clone();Xe.rotation.z=-.58,Xe.position.x=2,Ue.add(Xe);const Ce=k(2.2,1.8,1.7,3486512,1);Ce.position.set(-2,1,1.15),Ue.add(Ce);const ot=new oe(new yo(.55,16),new xt({color:16739364,emissive:16726795,emissiveIntensity:5}));ot.rotation.y=Math.PI,ot.position.set(-2,1.05,2.02),Ue.add(ot);const G=k(1.4,.35,.55,2435114,.4);G.position.set(1.2,1.05,1.15),Ue.add(G);const Se=k(.5,.9,.5,2697770,.45);Se.position.set(1.2,.62,1.15),Ue.add(Se);for(let M=0;M<4;M++){const C=k(.09,1.35,.09,11184548,.35);C.position.set(2.1+M*.18,1.1,1.3),C.rotation.z=-.3+M*.18,Ue.add(C)}be(Ue,"forge","Кузница"),ue.push(Ue),U(-10,-5,9.6,6.6,0,.05);const we=new ua(16742962,3.2,13,2);we.position.set(-12,H(-12,-5)+2.2,-4),x.add(we);const ze=new oe(new yo(8.5,32),new xt({color:7035463,roughness:1}));ze.rotation.x=-Math.PI/2,ze.position.set(1,H(1,0)+.05,0),ze.receiveShadow=!0,x.add(ze);for(let M=0;M<18;M++){const C=M/18*Math.PI*2,w=new oe(new $t(.38,1),ne(7039843,1));w.position.set(1+Math.cos(C)*8.8,H(1+Math.cos(C)*8.8,Math.sin(C)*8.8)+.22,Math.sin(C)*8.8),x.add(w)}const _e=(M,C)=>{const w=new et,N=k(2.8,.22,1,6832937,1);N.position.y=1.05,w.add(N);for(const J of[-1.05,1.05]){const Y=k(.16,1,.16,3877149,1);Y.position.set(J,.5,-.32),w.add(Y);const de=Y.clone();de.position.z=.32,w.add(de)}w.position.set(M,H(M,C),C),x.add(w)};_e(-4,2),_e(7,3);const he=(M,C,w)=>{const N=new et;N.position.set(M,H(M,C),C);for(let K=0;K<7;K++){const Fe=K/7*Math.PI*2,Ne=new oe(new $t(.32*w,1),ne(6117970,1));Ne.position.set(Math.cos(Fe)*.7*w,.25*w,Math.sin(Fe)*.7*w),N.add(Ne)}const J=k(.2*w,.2*w,1.5*w,4861211,1),Y=J.clone();J.rotation.y=.55,Y.rotation.y=-.55,J.position.y=Y.position.y=.38*w,N.add(J,Y);const de=new xt({color:16744744,emissive:16731402,emissiveIntensity:4}),fe=new oe(new An(.5*w,1.35*w,8),de);fe.position.y=1.02*w,N.add(fe),x.add(N);const ve=new ua(16747068,2.4*w,12*w,2);return ve.position.set(M,H(M,C)+2*w,C),x.add(ve),Be.push({light:ve,flame:fe,phase:Te(M,C)*8}),N};he(1,0,1.15),he(18,-15,.72);const Ie=(M,C,w,N,J=1.25)=>{const Y=new et,de=w-M,fe=N-C,ve=Math.hypot(de,fe),K=Math.max(1,Math.floor(ve/1.55));for(let Fe=0;Fe<=K;Fe++){const Ne=Fe/K,ut=M+de*Ne,qe=C+fe*Ne,Qe=k(.18,J,.18,4796447,1);Qe.position.set(ut,H(ut,qe)+J/2,qe),Y.add(Qe)}for(const Fe of[-.28,.38]){const Ne=k(.14,.14,ve,5978917,1);Ne.rotation.y=Math.atan2(de,fe),Ne.position.set((M+w)/2,H((M+w)/2,(C+N)/2)+J*Fe,(C+N)/2),Y.add(Ne)}x.add(Y),st(M,C,w,N,.12,.02)},rt=(M,C,w,N,J,Y,de)=>{const fe=new et;fe.position.set(M,H(M,C),C),fe.rotation.y=J,fe.userData={id:de,label:Y};const ve=k(w+.25,.35,N+.25,5591368,1);ve.position.y=.18,fe.add(ve);const K=new oe(new nn(w,2.5,N),new xt({map:pe,normalMap:se.normalMap,normalScale:new Ge(.22,.22),roughnessMap:se.roughnessMap,color:6439983,roughness:.94}));K.position.y=1.45,fe.add(K);const Fe=new oe(new nn(w+.6,.18,N+.65),new xt({map:Ae,normalMap:ge.normalMap,normalScale:new Ge(.16,.16),roughnessMap:ge.roughnessMap,color:2696996,roughness:.95}));Fe.rotation.z=.55,Fe.position.set(-.16,3,0),fe.add(Fe);const Ne=Fe.clone();Ne.rotation.z=-.55,Ne.position.x=.16,fe.add(Ne);const ut=k(1.05,1.75,.12,2759700,1);ut.position.set(0,1.05,N/2+.07),fe.add(ut),be(fe,de,Y),ue.push(fe),U(M,C,w+.55,N+.55,J,.04)},Pt=(M,C,w=1)=>{const N=new et;N.position.set(M,H(M,C),C);const J=new oe(new Ht(.65*w,.65*w,1.2*w,10),ne(9073729,1));J.rotation.z=Math.PI/2,J.position.y=.62*w,N.add(J);for(let Y=0;Y<3;Y++){const de=new oe(new tn(.66*w,.025*w,5,18),ne(5851693,1));de.rotation.y=Math.PI/2,de.position.y=(.28+Y*.34)*w,N.add(de)}be(N)},Mt=(M,C,w)=>{const N=new et;N.position.set(M,H(M,C),C),N.rotation.y=w;const J=k(2.8,.28,1.45,6636331,1);J.position.y=1,N.add(J);for(const de of[-1.15,1.15])for(const fe of[-.55,.55]){const ve=k(.16,1.15,.16,4401950,1);ve.position.set(de,.55,fe),N.add(ve)}for(const de of[-1.15,1.15]){const fe=new oe(new Ht(.5,.5,.18,14),ne(2696738,1));fe.rotation.z=Math.PI/2,fe.position.set(de,.52,-.92),N.add(fe)}const Y=k(.16,.16,2.4,4796447,1);Y.rotation.x=Math.PI/2,Y.position.set(0,.72,-2),N.add(Y),be(N)},ri=(M,C,w=0)=>{const N=new et;N.position.set(M,H(M,C),C),N.rotation.y=w;const J=k(2.2,.16,.5,7359021,1);J.position.y=.85,N.add(J);for(const Y of[-.78,.78]){const de=k(.12,.8,.12,4139549,1);de.position.set(Y,.4,0),N.add(de)}be(N)},Yn=(M,C)=>{const w=new et;w.position.set(M,H(M,C),C);for(let de=0;de<10;de++){const fe=de/10*Math.PI*2,ve=k(.45,.38,.38,6710621,1);ve.position.set(Math.cos(fe)*.95,.19,Math.sin(fe)*.95),ve.rotation.y=fe,w.add(ve)}const N=k(.16,2.2,.16,4861984,1),J=N.clone();N.position.set(-.9,1.2,0),J.position.set(.9,1.2,0),w.add(N,J);const Y=k(2,.16,.16,3876891,1);Y.position.y=2.25,w.add(Y),be(w)};rt(-19,31,8,5,.08,"Амбар","barn"),rt(17,34,7,5,-.2,"Сарай","shed"),rt(27,13,6,4,.45,"Склад рыбака","fishshed"),Ie(-25,27,-13,27),Ie(-25,27,-25,38),Ie(-25,38,-14,38),Ie(12,29,25,29),Ie(25,29,25,40),Ie(25,40,12,40),Ie(29,-1,39,-1),Ie(39,-1,39,10),Ie(39,10,30,10);for(const M of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])Pt(M[0],M[1],M[2]);Mt(-17,24,.18),Mt(29,-5,-.55),ri(-20,23,.18),ri(25,31,-.2),Oe(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),Oe(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),Oe(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),Oe(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),U(-31,8,7.8,5.8,.1,.04),U(-27,20,7.8,5.8,-.25,.04),U(31,18,7.8,5.8,.32,.04),U(20,24,7.8,5.8,-.12,.04);const Is=(M,C,w)=>{const N=new et;N.position.set(M,H(M,C),C),N.rotation.y=w;const J=k(3,.18,1.25,7357994,1);J.position.y=1.45,N.add(J);for(const de of[-1.25,1.25])for(const fe of[-.48,.48]){const ve=k(.13,1.45,.13,4270877,1);ve.position.set(de,.72,fe),N.add(ve)}const Y=new oe(new An(1.65,2.5,4,1,!1,Math.PI/4),ne(4798510,1));Y.scale.z=.55,Y.position.y=2.15,N.add(Y),be(N)};Is(-5,-7,.12),Is(8,-5,-.18),Is(6,7,.5);for(const M of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])Yn(M[0],M[1]);const Vi=(M,C,w=1)=>{const N=new et,J=H(M,C);for(let Y=0;Y<5;Y++){const de=new oe(new rn((.28+Te(Y,M)*.18)*w,8,6),ne(Y%2?3494457:4284223,1));de.position.set((Te(Y,2)-.5)*.7*w,.28*w,(Te(Y,3)-.5)*.7*w),N.add(de)}N.position.set(M,J,C),be(N)};for(let M=0;M<48;M++){const C=Te(M,501)*Math.PI*2,w=18+Te(M,502)*39,N=Math.cos(C)*w,J=Math.sin(C)*w+4;Math.abs(N)<9&&Math.abs(J)<14||Vi(N,J,.65+Te(M,503)*.75)}for(let M=0;M<34;M++){const C=-84+Te(M,610)*168,w=-82+Te(M,611)*164;if(Math.hypot(C,w-2)<24)continue;const N=.25+Te(M,612)*.55,J=new oe(new $t(N,1),ne(5725013,1));J.scale.y=.55,J.position.set(C,H(C,w)+N*.28,w),J.rotation.set(Te(M,613),Te(M,614),Te(M,615)),be(J),at(C,w,N*.8,.03)}Oe(-64,36,8,5,.12,"Старый дом","oldfarm",6505263,2828582),rt(-58,42,6,4,-.12,"Старый амбар","oldbarn"),Ie(-70,32,-60,32),Ie(-70,32,-70,43),Ie(-70,43,-61,43),Pt(-67,39,.9),Mt(-61,33,-.25),Yn(-57,34);const $r=new et;$r.position.set(-63,H(-63,47),47);for(let M=0;M<6;M++){const C=k(10,.035,.12,4208682,1);C.position.set(0,.02,(M-2.5)*1.05),C.rotation.y=.06,$r.add(C)}be($r);const si=new et;si.position.set(39,H(39,70),70),si.userData={id:"runefield",label:"Поле Рун"};const al=ne(5593942,1),Kr=new xt({color:12163675,emissive:6833949,emissiveIntensity:1.6,roughness:.62});for(let M=0;M<11;M++){const C=Te(M,1201)*Math.PI*2,w=3.5+Te(M,1202)*8,N=new oe(new $t(.65+Te(M,1203)*.38,1),al);N.scale.y=1.4+Te(M,1204)*1.5,N.position.set(Math.cos(C)*w,N.scale.y*.48,Math.sin(C)*w),N.rotation.set(Te(M,1205),C,Te(M,1206)),si.add(N);const J=new oe(new nn(.11,.035,.72),Kr);J.position.set(N.position.x,N.position.y+.55,N.position.z),J.rotation.y=-C+.45,si.add(J)}for(let M=0;M<5;M++){const C=k(.22,1.8,.22,4861984,1);C.position.set(-6+M*3,.9,7.5),si.add(C);const w=new oe(new tn(.34,.035,6,18),Kr);w.rotation.x=Math.PI/2,w.position.set(-6+M*3,1.55,7.5),si.add(w)}const zo=new et;for(let M=0;M<7;M++){const C=M/7*Math.PI*2,w=new oe(new $t(.3,1),ne(5591885,1));w.position.set(Math.cos(C)*.65,.22,Math.sin(C)*.65),zo.add(w)}si.add(zo),be(si,"runefield","Поле Рун"),ue.push(si),at(39,70,1,.08);const Gi=(M,C,w,N)=>{const J=new et,Y=w-M,de=N-C,fe=Math.hypot(Y,de),ve=Math.floor(fe/1.7);for(let Fe=0;Fe<=ve;Fe++){const Ne=Fe/ve,ut=M+Y*Ne,qe=C+de*Ne,Qe=new oe(new An(.24,.24+2.8+Te(Fe,M)*.5,6),ne(3942940,1));Qe.position.set(ut,H(ut,qe)+1.45,qe),J.add(Qe)}const K=k(.3,.35,fe,2957593,1);K.rotation.y=Math.atan2(Y,de),K.position.set((M+w)/2,H((M+w)/2,(C+N)/2)+1.25,(C+N)/2),J.add(K),x.add(J),st(M,C,w,N,.34,.08)};Gi(-30,-31,-8,-31),Gi(8,-31,30,-31),Gi(-30,-31,-30,-13),Gi(30,-31,30,16);const Wi=new et;Wi.userData={id:"gate",label:"Ворота Мидгарда"};for(const M of[-4.2,4.2]){const C=k(.8,6,.8,3482906,1);C.position.set(M,3,-31),Wi.add(C)}const Bo=k(10,.8,1,2957336,1);Bo.position.set(0,6,-31),Wi.add(Bo);for(let M=-3;M<=3;M++){const C=k(1,4.2,.22,5978660,1);C.position.set(M*1.15,2,-30.7),Wi.add(C)}be(Wi,"gate","Ворота Мидгарда"),ue.push(Wi),at(-4.2,-31,.55,.05),at(4.2,-31,.55,.05);const oi=new et;oi.userData={id:"mimir",label:"Колодец Мимира"},oi.position.set(18,H(18,15),15);for(let M=0;M<14;M++){const C=M/14*Math.PI*2,w=k(.7,.48,.5,6711907,1);w.position.set(Math.cos(C)*1.45,.24,Math.sin(C)*1.45),w.rotation.y=C+Math.PI/2,oi.add(w)}const Ho=new oe(new yo(1.05,28),new xt({color:1522499,emissive:733496,emissiveIntensity:1.8,roughness:.18}));Ho.rotation.x=-Math.PI/2,Ho.position.y=.5,oi.add(Ho);for(const M of[-1.35,1.35]){const C=k(.22,3,.22,4861984,1);C.position.set(M,1.55,0),oi.add(C)}const ll=k(3.1,.25,.25,3679513,1);ll.position.y=2.95,oi.add(ll);const cl=k(.55,.5,.55,5913383,1);cl.position.set(0,1.65,0),oi.add(cl);const Vo=new oe(new tn(1.8,.06,8,40),new xt({color:7792028,emissive:2653256,emissiveIntensity:3}));Vo.rotation.x=Math.PI/2,Vo.position.y=.53,oi.add(Vo),be(oi,"mimir","Колодец Мимира"),ue.push(oi),at(18,15,1.8,.08);const ul=new ua(7530656,1.8,10,2);ul.position.set(18,H(18,15)+1.4,15),x.add(ul);const A=new et;A.userData={id:"norns",label:"Прядильня норн"},A.position.set(-25,H(-25,43),43);for(let M=0;M<3;M++){const C=new oe(new bn(.65,2.3,5,8),ne(5725529,1));C.position.set((M-1)*2.2,1.35,0),C.rotation.z=(M-1)*.07,A.add(C);const w=new oe(new tn(.42,.055,7,20),new xt({color:[13100495,13149416,14795380][M],emissive:[6134129,7490961,9268264][M],emissiveIntensity:2.2}));w.rotation.x=Math.PI/2,w.position.set((M-1)*2.2,1.6,-.55),A.add(w)}const W=new Th({color:13944039,transparent:!0,opacity:.78});for(let M=0;M<2;M++){const C=[new O((M-1)*2.2,2,.1),new O((M-.5)*2.2,4.1,-.7),new O(M*2.2,2,.1)];A.add(new ug(new vn().setFromPoints(C),W))}const Q=new oe(new tn(4.1,.07,8,48),new xt({color:12429522,emissive:6113136,emissiveIntensity:1.5}));Q.rotation.x=Math.PI/2,Q.position.y=.05,A.add(Q),be(A,"norns","Прядильня норн"),ue.push(A),at(-25,43,3,.1);const ee=-43,X=62,me=new et;me.userData={id:"ritual",label:"Круг Силы"},me.position.set(ee,H(ee,X),X);const De=ne(6711651,1),Ve=ne(5593685,1);for(let M=0;M<2;M++){const C=M===0?18:12,w=M===0?6.2:3.65;for(let N=0;N<C;N++){const J=N/C*Math.PI*2+M*.12,Y=w+(Te(N,930+M)*.5-.25),de=.42+Te(N,940+M)*.48,fe=new oe(new $t(.55+Te(N,950+M)*.28,1),M===0?De:Ve);fe.scale.y=.65+de*.35,fe.position.set(Math.cos(J)*Y,de*.45,Math.sin(J)*Y),fe.rotation.set(Te(N,960+M),J+Te(N,970+M),Te(N,980+M)),me.add(fe)}}const ke=new oe(new $t(1.05,1),ne(5593428,1));ke.scale.set(1.25,.62,1.05),ke.position.y=.5,me.add(ke);for(const M of[2.1,3.15,5.15]){const C=new oe(new tn(M,.045,7,64),new xt({color:9219739,emissive:3496777,emissiveIntensity:1.4,transparent:!0,opacity:.72}));C.rotation.x=Math.PI/2,C.position.y=.055,me.add(C)}const nt=new xt({color:13215838,emissive:9199384,emissiveIntensity:2.2,roughness:.5});for(let M=0;M<8;M++){const C=M/8*Math.PI*2,w=new oe(new nn(.13,.025,.65),nt);w.position.set(Math.cos(C)*4.55,.075,Math.sin(C)*4.55),w.rotation.y=-C,me.add(w)}be(me,"ritual","Круг Силы"),ue.push(me),at(ee,X,1.25,.06);const it=new ua(9226152,1.15,11,2);it.position.set(ee,H(ee,X)+1.6,X),x.add(it);const je=new et;je.userData={id:"rune",label:"Древний камень Феху"},je.position.set(27,H(27,57),57);const pt=new oe(new $t(1.45,1),ne(5002063,1));pt.position.y=1.2,je.add(pt);const Tt=new oe(new tn(1.05,.07,8,30),new xt({color:16766826,emissive:10052371,emissiveIntensity:3}));Tt.rotation.x=Math.PI/2,Tt.position.y=1.2,je.add(Tt),be(je,"rune","Древний камень Феху"),ue.push(je),at(27,57,1.7,.1);const It=new et;It.userData={id:"port",label:"Мост к причалу"};for(let M=-5;M<=5;M++){const C=k(3.6,.28,.82,6307882,1);C.position.set(-53,H(-53,M*1)+.5,M),It.add(C)}be(It,"port","Мост к причалу"),ue.push(It);const At=new et;At.position.set(-46,H(-46,-15),-15);for(let M=0;M<7;M++){const C=k(2.8,.24,.72,7030573,1);C.position.set(0,.3,M*.85),At.add(C)}for(const M of[-1.2,1.2])for(let C=0;C<3;C++){const w=k(.22,1.5,.22,4139292,1);w.position.set(M,-.2,C*2.5),At.add(w)}const Ct=k(2.2,.55,4.8,4926493,1);Ct.position.set(3,-.15,2.5),At.add(Ct),be(At,"port","Речной причал"),ue.push(At);const Je=(M,C)=>{const w=new oe(new Ht(.5,.5,1,12),ne(6636332,1));w.position.set(M,H(M,C)+.5,C),x.add(w);for(const N of[.25,.76]){const J=new oe(new tn(.51,.045,6,18),ne(3156004,.7,.1));J.rotation.x=Math.PI/2,J.position.set(M,H(M,C)+N,C),x.add(J)}},Ft=(M,C)=>{const w=k(1,.75,1,7359022,1);w.position.set(M,H(M,C)+.38,C),x.add(w);const N=k(.08,.82,1.05,3679770,1);N.position.set(M,H(M,C)+.38,C),x.add(N),U(M,C,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([M,C])=>Je(M,C)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([M,C])=>Ft(M,C));const St=(M,C,w)=>{const N=new et,J=H(M,C),Y=ne(3680287,1),de=new oe(new Ht(.18*w,.34*w,4.6*w,10),Y);de.position.y=2.3*w,de.rotation.z=(Te(M,C)-.5)*.045,N.add(de);for(let ve=0;ve<5;ve++){const K=new oe(new Ht(.045*w,.095*w,(1.15+ve*.16)*w,7),Y);K.position.set((Te(ve,M)-.5)*.45*w,(1.25+ve*.58)*w,(Te(ve,C)-.5)*.38*w),K.rotation.z=(Te(ve+10,M)-.5)*.45,K.rotation.y=Te(ve+20,C)*Math.PI*2,N.add(K)}const fe=[1979432,2573361,2968886,3430461,2309165];for(let ve=0;ve<6;ve++){const Fe=(1.55-.72*(ve/5))*w,Ne=new oe(new An(Fe,.95*w,9,1),ne(fe[ve%fe.length],1));Ne.scale.x=.88+Te(ve,M)*.18,Ne.scale.z=.84+Te(ve,C)*.2,Ne.position.set((Te(ve*4,M)-.5)*.28*w,(2.05+ve*.62)*w,(Te(ve*5,C)-.5)*.28*w),Ne.rotation.y=Te(ve+40,M)*Math.PI*2,N.add(Ne)}if(w>1.15)for(let ve=0;ve<3;ve++){const K=new oe(new An(.62*w,.7*w,8),ne(fe[(ve+2)%fe.length],1));K.position.set((ve-1)*.38*w,.72*w,(Te(ve,C)-.5)*.3*w),K.rotation.y=Te(ve+70,M)*Math.PI*2,N.add(K)}N.position.set(M,J,C),be(N),w>=1.15&&at(M,C,.42*w,.04)},cn=(M,C,w,N=!1)=>{const J=new et,Y=H(M,C),de=ne(N?4207145:4863015,1),fe=new oe(new Ht(.32*w,.52*w,5.8*w,11),de);fe.position.y=2.9*w,fe.rotation.z=(Te(M,C)-.5)*.035,J.add(fe);const ve=N?8:6;for(let K=0;K<ve;K++){const Fe=K/ve*Math.PI*2+Te(K,M)*.25,Ne=(1.65+Te(K+30,C)*1.35)*w,ut=new oe(new Ht(.075*w,.16*w,Ne,8),de);ut.position.set(Math.cos(Fe)*Ne*.34,(3.35+Te(K+40,M)*1.25)*w,Math.sin(Fe)*Ne*.34),ut.rotation.z=Math.cos(Fe)*.78,ut.rotation.x=Math.sin(Fe)*.78,ut.rotation.y=-Fe,J.add(ut);for(let qe=0;qe<3;qe++){const Qe=new oe(new rn((.42+Te(qe+K,90)*.22)*w,8,6),ne(qe%2?4808772:3888955,1)),lt=.55+qe*.18;Qe.position.set(Math.cos(Fe)*Ne*.62+(Te(qe,K)-.5)*.35*w,(3.55+Te(K,qe)*1.15+lt)*w,Math.sin(Fe)*Ne*.62+(Te(qe+4,K)-.5)*.35*w),Qe.scale.y=.72,J.add(Qe)}}for(let K=0;K<(N?7:4);K++){const Fe=Te(K+100,M)*Math.PI*2,Ne=new oe(new Ht(.025*w,.055*w,(.9+Te(K,C)*.7)*w,6),de);Ne.position.set(Math.cos(Fe)*1.05*w,(3.15+Te(K+5,M)*1.5)*w,Math.sin(Fe)*1.05*w),Ne.rotation.z=(Te(K+8,C)-.5)*.35,J.add(Ne)}J.position.set(M,Y,C),be(J),w>=1.2&&at(M,C,.62*w,.04)},pr=(M,C,w,N)=>{const J=new et,Y=ne(9071949,1),de=ne(3418916,1),fe=ne(11576718,1),ve=new oe(new bn(.46*w,1*w,6,10),Y);ve.rotation.z=Math.PI/2,ve.position.y=.9*w,J.add(ve);const K=new oe(new Ht(.24*w,.32*w,.84*w,8),Y);K.position.set(.48*w,1.25*w,0),K.rotation.z=-.35,J.add(K);const Fe=new oe(new rn(.31*w,10,7),Y);Fe.scale.set(1.25,.9,1),Fe.position.set(.77*w,1.58*w,0),J.add(Fe);const Ne=new oe(new rn(.14*w,8,5),de);Ne.scale.z=.72,Ne.position.set(1*w,1.53*w,0),J.add(Ne);for(const qe of[-.25,.25])for(const Qe of[-.27,.34]){const lt=new oe(new Ht(.065*w,.09*w,.72*w,6),de);lt.position.set(Qe*w,.48*w,qe*w),lt.rotation.z=Qe<0?.08:-.06,J.add(lt)}for(const qe of[-1,1])for(let Qe=0;Qe<4;Qe++){const lt=new oe(new Ht(.028*w,.05*w,.38*w,5),fe);lt.position.set(.7*w,(1.82+Qe*.13)*w,qe*(.11+Qe*.055)*w),lt.rotation.z=qe*(.45-Qe*.08),J.add(lt)}const ut=new oe(new rn(.13*w,7,5),Y);ut.position.set(-.52*w,1.05*w,0),ut.scale.set(.7,1.2,.7),J.add(ut),J.position.set(M,H(M,C),C),J.userData={phase:N},be(J),We.push({g:J,x:M,z:C,r:4+Te(N,41)*3,speed:1.25+Te(N,42)*.8,phase:N,kind:"deer"})},Pn=(M,C)=>{const w=new et,N=ne(6965552,1),J=ne(3089436,1),Y=new oe(new rn(.22,8,6),N);Y.scale.set(1.35,.9,.9),Y.position.y=.72,w.add(Y);const de=new oe(new rn(.17,8,6),N);de.position.set(.22,.86,0),w.add(de);for(const K of[-1,1]){const Fe=new oe(new An(.06,.18,6),N);Fe.position.set(.17,.99,K*.09),w.add(Fe)}const fe=new oe(new tn(.24,.075,7,14,Math.PI*1.65),N);fe.rotation.y=Math.PI/2,fe.position.set(-.22,.91,0),w.add(fe);const ve=new oe(new rn(.025,6,4),J);ve.position.set(.35,.9,-.12),w.add(ve),w.position.set(M,H(M,C),C),be(w,"ratatosk","Белка Рататоск"),ue.push(w),at(M,C,.28,.02),We.push({g:w,x:M,z:C,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},un=-4,vt=69,Ln=new et;Ln.userData={id:"ashgrove",label:"Роща Ясеня"};const kn=[[-5,2,1.65,!1],[-1,1,1.45,!1],[-7,4,1.25,!1],[1,5,1.3,!1],[-2,7,2.05,!0],[4,3,1.15,!1]];for(const[M,C,w,N]of kn)cn(un+M,vt+C,w,N);for(let M=0;M<9;M++){const C=M/9*Math.PI*2,w=4.2+Te(M,1301)*2,N=new oe(new $t(.48+Te(M,1302)*.24,1),ne(5725014,1));N.position.set(un+Math.cos(C)*w,H(un+Math.cos(C)*w,vt+Math.sin(C)*w)+.35,vt+Math.sin(C)*w),N.scale.y=1.3+Te(M,1303)*.7,N.rotation.set(Te(M,1304),C,Te(M,1305)),be(N)}const Qt=new oe(new tn(5.7,.055,7,64),new xt({color:9214840,emissive:3755313,emissiveIntensity:1.1,transparent:!0,opacity:.62}));Qt.rotation.x=Math.PI/2,Qt.position.set(un,H(un,vt)+.045,vt),x.add(Qt);const dn=new oe(new $t(1,1),ne(5199441,1));dn.position.set(un,H(un,vt)+.75,vt),dn.scale.y=1.5,x.add(dn);const Zr=new oe(new tn(.62,.05,7,24),new xt({color:12757607,emissive:6637341,emissiveIntensity:1.7}));Zr.rotation.x=Math.PI/2,Zr.position.set(un,H(un,vt)+1.45,vt),x.add(Zr),ue.push(Ln),at(un,vt,1,.08);const Mn=61,mr=78,Hx=new et;Hx.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const mu=new oe(new tn(5.6,.055,7,56),new xt({color:9016697,emissive:3425071,emissiveIntensity:1,transparent:!0,opacity:.55}));mu.rotation.x=Math.PI/2,mu.position.set(Mn,H(Mn,mr)+.04,mr),x.add(mu);const Jr=new et;Jr.position.set(Mn,H(Mn,mr),mr),Jr.userData={id:"hoddmimir",label:"Лес Ходдмимира"};for(const M of[-2.4,2.4]){const C=k(.28,2.5,.28,4862755,1);C.position.set(M,1.25,0),Jr.add(C)}const gu=new oe(new An(3.4,1.65,6),ne(3813673,1));gu.position.y=2.75,gu.scale.z=.72,Jr.add(gu),he(Mn,mr+1.8,.55);const zp=new oe(new $t(.8,1),ne(5264976,1));zp.position.set(Mn,H(Mn,mr)+.65,mr+2.2),Jr.add(zp),be(Jr,"hoddmimir","Лес Ходдмимира"),ue.push(Jr),at(Mn,mr,1.1,.08);const Go=30,Wo=53;for(let M=0;M<4;M++)pr(Go+(M-1.5)*2.6,Wo+(M%2?2.6:-2.6),1.12+Te(M,1440)*.16,10+M);const Bp=new oe(new $t(.72,1),ne(5725526,1));Bp.position.set(Go,H(Go,Wo)+.5,Wo),x.add(Bp);const vu=new oe(new tn(5.8,.045,7,48),new xt({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));vu.rotation.x=Math.PI/2,vu.position.set(Go,H(Go,Wo)+.035,Wo),x.add(vu),Pn(un+5,vt+1);const dl=12,fl=49,Us=new et;Us.position.set(dl,H(dl,fl),fl);const _u=new oe(new $t(1.05,1),ne(5133648,1));_u.position.y=.85,_u.scale.y=1.55,Us.add(_u);const xu=new oe(new tn(2.7,.055,7,48),new xt({color:10259632,emissive:4929114,emissiveIntensity:1.8,transparent:!0,opacity:.78}));xu.rotation.x=Math.PI/2,xu.position.y=.06,Us.add(xu);const Vx=new Th({color:14207464,transparent:!0,opacity:.72});for(let M=0;M<3;M++){const C=[new O((M-1)*.72,.95,.15),new O((M-1)*1.25,2.9,-.35+Math.sin(M)*.25),new O((M-1)*1.75,.5,.9)];Us.add(new ug(new vn().setFromPoints(C),Vx))}for(let M=0;M<7;M++){const C=new oe(new $t(.11,0),ne(6708050,1)),w=-1+M*.32;C.position.set(-1.7+w*.95,.06,-1.6+M*.46),C.scale.set(1.6,.35,.8),Us.add(C)}be(Us,"forestEvent","Камень Трёх Нитей"),at(dl,fl,1.15,.08);const yu=(M,C,w,N,J,Y,de)=>{const fe=new et;fe.position.set(M,H(M,C),C);const ve=new oe(new $t(.78+de*.08,1),ne(Y,1));ve.position.y=.58+de*.08,ve.scale.y=1.35,fe.add(ve);const K=new oe(new tn(2+de*.18,.045,7,40),new xt({color:J,emissive:J,emissiveIntensity:1.25,transparent:!0,opacity:.62}));K.rotation.x=Math.PI/2,K.position.y=.045,fe.add(K);for(let Fe=0;Fe<3+de;Fe++){const Ne=new oe(new $t(.12,0),ne(7827558,1)),ut=Fe/(3+de)*Math.PI*2;Ne.position.set(Math.cos(ut)*(1.15+de*.12),.08,Math.sin(ut)*(1.15+de*.12)),Ne.scale.y=.45,fe.add(Ne)}be(fe,w,N),ue.push(fe),at(M,C,.9,.08)};yu(-15,58,"forestCache","Забытый тайник",11701074,4931637,2),yu(46,43,"forestWhisper","Камень Шёпота",7902629,4541773,3),yu(-48,72,"forestThread","Разорванная нить",10252688,5326925,2);const Mu=(M,C,w,N,J,Y)=>{const de=new et;de.position.set(M,H(M,C),C);const fe=new oe(new tn(w,.07,8,56),new xt({color:Y===1?6716259:Y===2?7305088:8218965,emissive:Y===1?2505513:2435888,emissiveIntensity:.7,transparent:!0,opacity:.48}));fe.rotation.x=Math.PI/2,fe.position.y=.045,de.add(fe);for(let ve=0;ve<Math.floor(w/2);ve++){const K=Te(ve,M*11+C)*Math.PI*2,Fe=w*.35+Te(ve,C*17)*w*.45,Ne=new oe(new $t(.28+Te(ve,33)*.22,1),ne(Y===1?5594452:Y===2?5330522:5917244,1));Ne.position.set(Math.cos(K)*Fe,.22,Math.sin(K)*Fe),Ne.scale.y=.65,de.add(Ne)}be(de,N,J),ue.push(de)};Mu(70,18,8.5,"hunterCamp","Забытая стоянка",3),Mu(67,49,9.5,"deepGrove","Глубокая роща",1),Mu(52,7,7.5,"fallenAsh","Поверженный ясень",2);const fn=75,en=30,Bt=new et;Bt.position.set(fn,H(fn,en),en);const Gx=ne(5986899,1),Hp=k(7.8,.42,5.8,5591885,1);Hp.position.y=.22,Bt.add(Hp);const Vp=k(7.4,2.8,.3,6439727,1);Vp.position.set(0,1.4,-2.7),Bt.add(Vp);const Gp=k(.3,2.8,5.4,6439727,1);Gp.position.set(-3.7,1.4,0),Bt.add(Gp);const Wp=k(.3,2.8,5.4,6439727,1);Wp.position.set(3.7,1.4,0),Bt.add(Wp);const Xp=k(2.55,2.8,.3,6439727,1);Xp.position.set(-2.43,1.4,2.7),Bt.add(Xp);const jp=k(2.55,2.8,.3,6439727,1);jp.position.set(2.43,1.4,2.7),Bt.add(jp);const Yp=k(2.3,.72,.3,6439727,1);Yp.position.set(0,2.44,2.7),Bt.add(Yp);const qp=k(.16,2.18,.34,2826523,1);qp.position.set(-.66,1.28,2.72),Bt.add(qp);const $p=k(.16,2.18,.34,2826523,1);$p.position.set(.66,1.28,2.72),Bt.add($p);const Kp=k(1.48,.16,.34,2826523,1);Kp.position.set(0,2.34,2.72),Bt.add(Kp);const Fs=new et;Fs.position.set(-.57,0,2.72),Bt.add(Fs);const Zp=k(1.14,2.05,.12,3154457,1);Zp.position.set(.57,1.28,0),Fs.add(Zp);const Jp=new oe(new rn(.08,8,6),ne(11831883,1));Jp.position.set(.86,1.25,.1),Fs.add(Jp);const Wx=new xt({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const M of[-2.35,2.35]){const C=k(1.25,1,.12,2826523,1);C.position.set(M,1.72,2.78),Bt.add(C);const w=new oe(new nn(.98,.72,.06),Wx);w.position.set(M,1.72,2.86),Bt.add(w);const N=k(.07,.78,.1,2826523,1);N.position.set(M,1.72,2.91),Bt.add(N);const J=k(1.08,.07,.1,2826523,1);J.position.set(M,1.72,2.91),Bt.add(J)}const Qp=new xt({map:Ae,color:2697767,roughness:.98,side:Mi}),Xo=new oe(new nr(4.25,6.25),Qp),jo=new oe(new nr(4.25,6.25),Qp);Xo.rotation.x=Math.PI/2,jo.rotation.x=Math.PI/2,Xo.rotation.z=.62,jo.rotation.z=-.62,Xo.position.set(-1.02,3.95,0),jo.position.set(1.02,3.95,0),Bt.add(Xo,jo);const Su=k(.22,.22,6.45,2695965,1);Su.position.y=4.75,Bt.add(Su);const wu=new oe(new nn(.48,1.35,.48),Gx);wu.position.set(1.55,4.8,-.65),Bt.add(wu);const Eu=k(.62,.1,.62,3420461,1);Eu.position.set(1.55,5.48,-.65),Bt.add(Eu);const em=k(2.35,.18,1,6636845,1);em.position.set(0,.62,3.15),Bt.add(em);const tm=k(1.55,.16,.48,5849131,1);tm.position.set(0,.3,3.58),Bt.add(tm),be(Bt,"heroHome","Домик героя"),ue.push(Bt),U(fn,en-2.72,7.4,.3,0,.05),U(fn-3.72,en,.3,5.45,0,.05),U(fn+3.72,en,.3,5.45,0,.05),U(fn-2.43,en+2.72,2.55,.3,0,.05),U(fn+2.43,en+2.72,2.55,.3,0,.05);const Gt=new et;Gt.position.set(fn,H(fn,en),en),Gt.visible=!1;const nm=k(7,.16,5,4928548,1);nm.position.y=.5,Gt.add(nm);const im=k(7,2.65,.18,4139808,1);im.position.set(0,1.8,-2.45),Gt.add(im);const rm=k(.18,2.65,4.9,4139808,1);rm.position.set(-3.45,1.8,0),Gt.add(rm);const sm=k(.18,2.65,4.9,4139808,1);sm.position.set(3.45,1.8,0),Gt.add(sm);const om=k(2.35,2.65,.18,4139808,1);om.position.set(-2.42,1.8,2.45),Gt.add(om);const am=k(2.35,2.65,.18,4139808,1);am.position.set(2.42,1.8,2.45),Gt.add(am);const lm=k(2.5,.04,2.1,7162673,1);lm.position.set(-.15,.6,.25),Gt.add(lm);const cm=k(1.65,.65,2.15,4008478,1);cm.position.set(-2.15,.88,-1.25),Gt.add(cm);const um=k(1.48,.12,1.35,7033152,1);um.position.set(-2.15,1.27,-.92),Gt.add(um);const dm=k(1.28,.18,.46,11903114,1);dm.position.set(-2.15,1.38,-1.95),Gt.add(dm);const fm=k(1.65,.12,1.05,5255969,1);fm.position.set(.85,1.15,-.15),Gt.add(fm);for(const[M,C]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const w=k(.1,.7,.1,3679515,1);w.position.set(M,.72,C),Gt.add(w)}const hm=k(1.25,.8,.72,5978660,1);hm.position.set(2.1,.95,-1.7),Gt.add(hm);const pm=k(1.9,.14,.45,5978660,1);pm.position.set(1.35,2,-2.25),Gt.add(pm);for(const M of[.75,1.35,1.95]){const C=new oe(new Ht(.08,.1,.35,8),ne(7304016,1));C.position.set(M,2.24,-2.22),Gt.add(C)}const mm=k(1.35,.55,.7,5920078,1);mm.position.set(2.15,.78,.95),Gt.add(mm);const gm=new oe(new An(.28,.72,8),new xt({color:16744744,emissive:16731402,emissiveIntensity:4}));gm.position.set(2.15,1.42,.95),Gt.add(gm);const vm=new ua(16747068,2.2,8,2);vm.position.set(2.15,1.7,.95),Gt.add(vm),be(Gt,"heroHomeInterior","Дом героя — внутри"),ue.push(Gt);const Qr=new et;Qr.position.set(fn,H(fn,en),en);const Tu=new oe(new tn(6.2,.055,7,48),new xt({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));Tu.rotation.x=Math.PI/2,Tu.position.y=.035,Qr.add(Tu);for(const[M,C]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const w=k(.18,1,.18,4797735,1);w.position.set(M,.5,C),Qr.add(w)}for(const M of[-2.4,2.9]){const C=k(10.2,.12,.12,6308139,1);C.position.set(0,.59,M),Qr.add(C)}const Xx=ne(6906972,1);for(let M=0;M<7;M++){const C=new oe(new Ht(.32,.4,.12,7),Xx);C.position.set(0,.08,4.1+M*.72),C.rotation.y=M*.4,Qr.add(C)}he(fn-2.4,en+4.8,.48).scale.setScalar(.72),be(Qr,"heroHomeYard","Двор домика героя"),ue.push(Qr),he(70,18,.75).scale.setScalar(.72);const _m=new oe(new Ht(.65,.8,.7,7),ne(5327426,1));_m.position.set(70,H(70,18)+.35,16.5),x.add(_m);for(const[M,C]of[[68,20],[72,20],[68,16],[72,16]]){const w=k(.16,1.15,.16,4797735,1);w.position.set(M,H(M,C)+.57,C),x.add(w)}const hl=new et;hl.position.set(52,H(52,7),7);const Au=new oe(new Ht(.5,.62,7,8),ne(4995371,1));Au.rotation.z=Math.PI/2,Au.position.y=.5,hl.add(Au);const bu=new oe(new Ht(.53,.53,.12,12),ne(7693389,1));bu.rotation.z=Math.PI/2,bu.position.set(3.5,.5,0),hl.add(bu),x.add(hl);for(let M=0;M<7;M++){const C=new oe(new $t(.14,0),ne(6913394,1)),w=M/7*Math.PI*2;C.position.set(67+Math.cos(w)*4,.12+H(67+Math.cos(w)*4,49+Math.sin(w)*4),49+Math.sin(w)*4),x.add(C)}for(let M=0;M<95;M++){const C=Te(M,77)*Math.PI*2,w=58+Te(M,91)*32,N=Math.cos(C)*w,J=Math.sin(C)*w+2,de=[[un,vt,11],[39,70,13],[-64,36,11],[-43,62,10],[30,53,12],[61,78,10],[-15,58,7],[46,43,7],[-48,72,7],[70,18,11],[75,30,13],[67,49,12],[52,7,10]].some(([fe,ve,K])=>Math.hypot(N-fe,J-ve)<K);Math.abs(N+57)>9&&!de&&St(N,J,.78+Te(M,13)*.82)}cn(-10,18,1.55,!1),cn(13,24,1.7,!1),cn(-31,-12,2.15,!0);for(let M=0;M<110;M++){const C=Te(M,701)*Math.PI*2,w=15+Te(M,702)*50,N=Math.cos(C)*w,J=Math.sin(C)*w+3;if(Math.abs(N)<10&&Math.abs(J)<16)continue;const Y=new et;Y.position.set(N,H(N,J),J);for(let de=0;de<3;de++){const fe=new oe(new An(.025,.38+Te(de,M)*.28,4),ne(de===1?5466175:4282935,1));fe.position.set((de-1)*.09,.18,(Te(de*3,M)-.5)*.12),fe.rotation.z=(de-1)*.22,Y.add(fe)}x.add(Y)}for(let M=0;M<80;M++){const C=-88+Te(M,101)*176,w=-88+Te(M,111)*176;if(Math.hypot(C,w+2)>30){const N=new oe(new An(.08,.55+Te(M,121)*.7,5),ne(4941888,1));N.position.set(C,H(C,w)+.3,w),x.add(N)}}const es=new et;es.position.set(29,H(29,25),25),es.userData={id:"tower",label:"Сторожевая башня"};for(const M of[-2,2])for(const C of[-2,2]){const w=k(.35,7,.35,3942685,1);w.position.set(M,3.5,C),es.add(w)}const xm=k(5,.35,5,6833965,1);xm.position.y=5.8,es.add(xm);const ym=new oe(new An(3.8,2.7,4),ne(2696482,1));ym.position.y=8,es.add(ym),be(es,"tower","Сторожевая башня"),ue.push(es),U(29,25,4.8,4.8,0,.08);const Yo=(M,C,w,N,J,Y)=>{const de=new et;de.userData={id:w,label:N,phase:Y,baseX:M,baseZ:C};const fe=new oe(new bn(.32,.78,4,8),ne(J,.9));fe.position.y=.85,de.add(fe);const ve=new oe(new rn(.25,12,8),ne(13210736,.9));ve.position.y=1.58,de.add(ve);const K=k(.7,.9,.15,2565407,1);K.position.set(0,.82,-.27),de.add(K),de.position.set(M,H(M,C),C),be(de,w,N),ue.push(de),$e.push(de)};Yo(9,-8,"elder","Старейшина",7558719,.4),Yo(-6,-3,"blacksmith","Кузнец",6044459,1.5),Yo(21,1,"hunter","Охотник",4215359,2.4),Yo(5,10,"villager","Житель Мидгарда",5858125,3.4),Yo(-16,4,"villager2","Житель деревни",6638394,4.2);const jx=new hu({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),Cu=new et;for(let M=0;M<34;M++){const C=new oe(new rn(.9+Te(M,810)*2.2,8,6),jx);C.position.set(-88+Te(M,811)*176,1.8+Te(M,812)*2.2,-72+Te(M,813)*144),Cu.add(C)}x.add(Cu);const ts=qA(t);x.add(ts);const Xi=ts.userData.anim,Mm=new r2,Ru=new Ge,Sm=M=>{var N,J,Y,de;if((J=(N=M.target)==null?void 0:N.closest)!=null&&J.call(N,".mid3d-ui"))return;const C=B.domElement.getBoundingClientRect();Ru.x=(M.clientX-C.left)/C.width*2-1,Ru.y=-((M.clientY-C.top)/C.height)*2+1,Mm.setFromCamera(Ru,I);const w=Mm.intersectObjects(ue,!0)[0];if(w){let fe=w.object;for(;fe.parent&&!((Y=fe.userData)!=null&&Y.id);)fe=fe.parent;(de=fe.userData)!=null&&de.id&&e(fe.userData.id)}};B.domElement.addEventListener("pointerup",Sm);const Yx=M=>{m.current=M,g(M),l(""),Gt.visible=M,Xo.visible=!M,jo.visible=!M,Su.visible=!M,wu.visible=!M,Eu.visible=!M,M?(o.current.x=fn,o.current.z=en+.95,u.current.x=0,u.current.z=-1,Fs.rotation.y=-Math.PI/2):(o.current.x=fn,o.current.z=en+3.75,u.current.x=0,u.current.z=1,Fs.rotation.y=0),ts.position.set(o.current.x,H(o.current.x,o.current.z)+.04,o.current.z)};v.current=Yx;const qx=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:18,z:15,r:4.8},{id:"norns",label:"Прядильня норн",x:-25,z:43,r:5.4},{id:"rune",label:"Древний камень Феху",x:27,z:57,r:4.5},{id:"ritual",label:"Круг Силы",x:-43,z:62,r:6.8},{id:"port",label:"Речной причал",x:-46,z:-15,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-4,z:69,r:7.5},{id:"forestEvent",label:n?"Камень Трёх Нитей — место выбора":"Камень Трёх Нитей",x:dl,z:fl,r:4.8},{id:"forestCache",label:"Забытый тайник",x:-15,z:58,r:4.2},{id:"forestWhisper",label:"Камень Шёпота",x:46,z:43,r:4.2},{id:"forestThread",label:"Разорванная нить",x:-48,z:72,r:4.2},{id:"runefield",label:"Поле Рун",x:39,z:70,r:8},{id:"oldfarm",label:"Старый хутор",x:-64,z:36,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:30,z:53,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:61,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:70,z:18,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:67,z:49,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:52,z:7,r:7.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],wm=()=>{const M=Math.max(1,S.clientWidth),C=Math.max(1,S.clientHeight);I.aspect=M/C,I.updateProjectionMatrix(),B.setSize(M,C,!1)};wm();const Em=new ResizeObserver(wm);Em.observe(S);let Pu=0,Tm=performance.now();const Am=M=>{const C=Math.min(.05,(M-Tm)/1e3);Tm=M;const w=o.current,N=Math.hypot(w.dx,w.dz);if(N>.05){const K=6.2*C;Ee(w,w.x+w.dx/N*K,w.z+w.dz/N*K),ts.rotation.y=Math.atan2(w.dx,w.dz),u.current.x=w.dx/N,u.current.z=w.dz/N,d(!0)}else d(!1);const J=H(w.x,w.z);if(ts.position.set(w.x,J+.04,w.z),Xi){const K=M*.011+Xi.phase,Fe=N>.05?Math.sin(K)*.58:0,Ne=N>.05?Math.sin(K+Math.PI)*.42:0;Xi.legL.rotation.x=Fe,Xi.legR.rotation.x=-Fe,Xi.armL.upper.rotation.x=Ne,Xi.armR.upper.rotation.x=-Ne,Xi.armL.elbow.rotation.x=-Math.abs(Ne)*.35,Xi.armR.elbow.rotation.x=-Math.abs(Ne)*.35,Xi.weapon.rotation.z=-.12+(N>.05?Math.sin(K)*.035:0)}const Y=u.current,de=m.current?new O(w.x-Y.x*1,J+3.65,w.z-Y.z*1):new O(w.x-Y.x*2,J+7.2,w.z-Y.z*2+11.8);I.position.lerp(de,m.current?.09:.055),I.lookAt(w.x+(m.current?Y.x*.9:Y.x*1.9),J+(m.current?1.25:1.2),w.z+(m.current?Y.z*.9:Y.z*1.9));let fe="",ve="";if(m.current)w.z>en+1.72&&(fe="Дверь — выйти из дома",ve="heroHomeExit");else for(const K of qx)if(Math.hypot(w.x-K.x,w.z-K.z)<K.r){fe=K.label,ve=K.id;break}l(fe?`${fe}|${ve}`:""),Be.forEach(K=>{K.light.intensity=2+Math.sin(M*.012+K.phase)*.5,K.flame.scale.y=.9+Math.sin(M*.009+K.phase)*.12}),Cu.children.forEach((K,Fe)=>{K.position.x+=Math.sin(M*12e-5+Fe)*.003,K.position.z+=Math.cos(M*1e-4+Fe)*.002}),We.forEach((K,Fe)=>{if(K.kind==="deer"){const Qe=K.g.position.x-ts.position.x,lt=K.g.position.z-ts.position.z,qn=Math.hypot(Qe,lt);if(qn<11){const Ci=Math.max(.001,qn),ji=qn<5.5?.115:.075,Ri=K.g.position.x+Qe/Ci*ji,gr=K.g.position.z+lt/Ci*ji,ns=Ri-30,is=gr-53;if(Math.hypot(ns,is)<17)K.g.position.set(Ri,H(Ri,gr),gr);else{const Yi=Math.atan2(is,ns),rs=30+Math.cos(Yi)*16,vr=53+Math.sin(Yi)*10;K.g.position.set(rs,H(rs,vr),vr)}K.g.rotation.y=Math.atan2(lt,Qe),K.g.position.y+=Math.sin(M*.008+Fe)*.025;return}}const Ne=M*.00105*K.speed+K.phase,ut=K.x+Math.cos(Ne)*K.r,qe=K.z+Math.sin(Ne*.83)*K.r*.62;K.g.position.set(ut,H(ut,qe),qe),K.g.rotation.y=Math.atan2(Math.cos(Ne*.83),-Math.sin(Ne)),K.kind==="deer"&&(K.g.position.y+=Math.sin(M*.006+Fe)*.025)}),$e.forEach((K,Fe)=>{const Ne=K.userData.phase||0,ut=K.userData.baseX,qe=K.userData.baseZ,Qe=ut+Math.sin(M*28e-5+Ne)*1.6,lt=qe+Math.cos(M*22e-5+Ne)*1.1;K.position.set(Qe,H(Qe,lt),lt),K.rotation.y=Math.sin(M*4e-4+Ne)*.5}),B.render(x,I),Pu=requestAnimationFrame(Am)};return Pu=requestAnimationFrame(Am),()=>{cancelAnimationFrame(Pu),Em.disconnect(),B.domElement.removeEventListener("pointerup",Sm),Z.dispose(),pe.dispose(),Ae.dispose(),B.dispose(),x.traverse(M=>{var C,w,N,J;M.isMesh&&((w=(C=M.geometry)==null?void 0:C.dispose)==null||w.call(C),Array.isArray(M.material)?M.material.forEach(Y=>{var de;return(de=Y.dispose)==null?void 0:de.call(Y)}):(J=(N=M.material)==null?void 0:N.dispose)==null||J.call(N))}),B.domElement.remove(),v.current=null}},[t.id,e,n]);const y=S=>{const x=r.current,I=s.current;if(!x||!I)return;const B=x.getBoundingClientRect(),$=B.left+B.width/2,re=B.top+B.height/2,le=48;let H=S.clientX-$,j=S.clientY-re;const F=Math.hypot(H,j);F>le&&(H=H/F*le,j=j/F*le),I.style.transform=`translate(${H}px,${j}px)`,o.current.dx=H/le,o.current.dz=j/le},b=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},R=S=>{var j,F;const x=r.current;if(!x)return;const I=S.target;if((j=I.closest)!=null&&j.call(I,".mid3d-action")||(F=I.closest)!=null&&F.call(I,".mid3d-interact"))return;const B=x.getBoundingClientRect(),$=26;S.clientX>=B.left-$&&S.clientX<=B.right+$&&S.clientY>=B.top-78&&S.clientY<=B.bottom+26&&(S.currentTarget.setPointerCapture(S.pointerId),y(S))},P=S=>{S.currentTarget.hasPointerCapture(S.pointerId)&&y(S)},D=S=>{S.currentTarget.hasPointerCapture(S.pointerId)&&S.currentTarget.releasePointerCapture(S.pointerId),b()};return V.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:R,onPointerMove:P,onPointerUp:D,onPointerCancel:D,onContextMenu:S=>S.preventDefault(),children:[V.jsxs("div",{className:"mid3d-ui mid3d-top",children:[V.jsxs("div",{className:"mid3d-pill",children:[V.jsx("b",{children:"МИДГАРД"}),V.jsx("span",{children:"Деревня • река • лес • святилища"})]}),V.jsxs("div",{className:"mid3d-pill",children:[V.jsx("b",{children:"ᛟ"}),V.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),p&&!n&&V.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[V.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),V.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),V.jsx("button",{onPointerDown:S=>S.stopPropagation(),onClick:()=>{_(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),V.jsx("button",{onPointerDown:S=>S.stopPropagation(),onClick:()=>{_(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),V.jsx("button",{onPointerDown:S=>S.stopPropagation(),onClick:()=>{_(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),p&&n&&V.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[V.jsx("b",{children:"Камень Трёх Нитей"}),V.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),V.jsx("button",{onPointerDown:S=>S.stopPropagation(),onClick:()=>_(!1),children:"Продолжить путь"})]}),f&&V.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[V.jsx("b",{children:"🜂 Круг Силы"}),V.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),V.jsx("button",{onPointerDown:S=>S.stopPropagation(),onClick:()=>{h(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),V.jsx("button",{onPointerDown:S=>S.stopPropagation(),onClick:()=>{h(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),V.jsx("button",{onPointerDown:S=>S.stopPropagation(),onClick:()=>{h(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),V.jsx("button",{onPointerDown:S=>S.stopPropagation(),onClick:()=>{h(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),V.jsx("button",{onPointerDown:S=>S.stopPropagation(),onClick:()=>{h(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),V.jsx("button",{onPointerDown:S=>S.stopPropagation(),onClick:()=>{h(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!f&&!p&&(()=>{const[S,x]=a.split("|"),I=x==="heroHome"||x==="heroHomeExit";return V.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[V.jsx("b",{children:S}),V.jsx("span",{children:I?x==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),V.jsx("button",{onPointerDown:B=>B.stopPropagation(),onClick:()=>{var B,$;x==="ritual"?h(!0):x==="forestEvent"?_(!0):x==="heroHome"?(B=v.current)==null||B.call(v,!0):x==="heroHomeExit"?($=v.current)==null||$.call(v,!1):e(x)},children:I?x==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),V.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:V.jsx("div",{className:"mid3d-knob",ref:s})}),V.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:S=>S.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),V.jsx("div",{className:"mid3d-ui mid3d-hint",children:E?c?"Ты внутри дома":"Дом героя • отдых • сундук • выход":c?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function KA(){const[t,e]=_t.useState(()=>Xg().hero?{t:"tree"}:{t:"choose"}),[n,i]=_t.useState(Xg),[r,s]=_t.useState(""),[o,a]=_t.useState(""),[l,c]=_t.useState(""),d=_t.useRef(0),[f,h]=_t.useState(null),[p,_]=_t.useState(null),[E,g]=_t.useState(!1),[u,m]=_t.useState(0),[v,y]=_t.useState(0),[b,R]=_t.useState(0),[P,D]=_t.useState(""),[S,x]=_t.useState(!1),[I,B]=_t.useState(!1),[$,re]=_t.useState(""),[le,H]=_t.useState(.06);_t.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),_t.useEffect(()=>{var z,Ee,ae,ce;(z=wt==null?void 0:wt.ready)==null||z.call(wt),(Ee=wt==null?void 0:wt.expand)==null||Ee.call(wt),(ae=wt==null?void 0:wt.setHeaderColor)==null||ae.call(wt,"#0b0f0c"),(ce=wt==null?void 0:wt.setBackgroundColor)==null||ce.call(wt,"#0b0f0c")},[]),_t.useEffect(()=>{if(!(wt!=null&&wt.BackButton))return;const z=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(wt.BackButton.show(),wt.BackButton.onClick(z)):wt.BackButton.hide(),()=>{var Ee,ae;(ae=(Ee=wt.BackButton)==null?void 0:Ee.offClick)==null||ae.call(Ee,z)}},[t,n.hero]),_t.useEffect(()=>{h(null),_(null),g(!1),re(""),x(!1)},[t]);const j=z=>{c(z),window.clearTimeout(d.current),d.current=window.setTimeout(()=>c(""),1800)},F=(z="light")=>{var Ee,ae,ce,Ye;try{z==="success"?(ae=(Ee=wt==null?void 0:wt.HapticFeedback)==null?void 0:Ee.notificationOccurred)==null||ae.call(Ee,"success"):(Ye=(ce=wt==null?void 0:wt.HapticFeedback)==null?void 0:ce.impactOccurred)==null||Ye.call(ce,"light")}catch{}},Z=z=>e(z),ie=z=>{F(),e({t:"realm",id:z.id})},ye=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),Pe=()=>{const z=ye();if(z<=0){j("Дозор только начался — искры ещё копятся.");return}i(Ee=>({...Ee,sparks:Ee.sparks+z,watch:Date.now()})),F("success"),j("Дозор завершён: +"+z+" ✨")},ct=()=>{if(n.gift===da())return;const Ee=(n.gift?Math.round((Date.parse(da())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,ae=Hd[Ee-1];i(ce=>({...ce,sparks:ce.sparks+ae,gift:da(),streak:Ee})),F("success"),j("Дар Древа, день "+Ee+": +"+ae+" ✨")},be=()=>{!r||!o||(i(z=>({...z,hero:{id:r,name:o}})),F("success"),j("Путь начинается, "+o+"!"),e({t:"tree"}))},ne=n.hero?Vd.find(z=>z.id===n.hero.id):null,k=z=>Math.floor(Math.random()*z),ue=z=>n.trials.filter(Ee=>Ee.startsWith(z+":")).length,Be=z=>{if(n.artifacts.includes(z.id)){j("Мир покорён. Артефакт хранится в листе героя.");return}F(),e({t:"trial",id:z.id})},$e=(z,Ee,ae)=>{const ce=Ee===2;i(Ye=>({...Ye,sparks:Ye.sparks+ae+(ce?30:0),trials:[...Ye.trials,z+":"+Ee],artifacts:ce?[...Ye.artifacts,z]:Ye.artifacts})),ce&&(F("success"),j("Мир пройден! Артефакт: "+Wd[z]))},We=(z,Ee)=>{if(f!==null)return;const ae=ue(z),ce=Gd[z][ae];if(Ee===ce.c){h(Ee),F("success");const Ye=12+ae*3+((ne==null?void 0:ne.id)==="dwarf"?6:0);j("Верно! Сундук хозяина: +"+Ye+" ✨"),$e(z,ae,Ye);return}if(n.powers.includes("mimirEye")){h(ce.c),i(Ke=>({...Ke,powers:Ke.powers.filter(L=>L!=="mimirEye")}));const Ye=8+ae*2;F("success"),j("Око Мимира раскрыло истину. Ответ исправлен. +"+Ye+" ✨"),$e(z,ae,Ye);return}if(n.powers.includes("nornThread")){h(Ee),i(Ke=>({...Ke,powers:Ke.powers.filter(L=>L!=="nornThread")}));const Ye=6+ae*2;F("success"),j("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+Ye+" ✨"),$e(z,ae,Ye);return}h(Ee),F(),D(fa[z].name+" мрачнеет: «Что ж — пусть решит сталь!»")},dt=z=>{const Ee=ue(z),ae=Gd[z][Ee],ce=ae.a.findIndex((Ye,Ke)=>Ke!==ae.c&&Ke!==p);_(ce),g(!0),F(),j("Шёпот ветров уносит один ответ...")},Yt=z=>{const Ee=fa[z],ae=n.powers.includes("ashBreath");m(Ee.hp),y(ne.hp+(ae?25:0)),R(ne.en+(ae?2:0)),re(""),x(!1),B(!1),D(ae?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":Ee.name+" поднимает оружие!"),ae&&i(ce=>({...ce,powers:ce.powers.filter(Ye=>Ye!=="ashBreath")})),e({t:"fight",id:z})},U=(z,Ee)=>{if($)return;const ae=fa[z],ce=ue(z);let Ye=0,Ke="",L=b,T=S;if(Ee==="hit"&&(Ye=ne.str+k(4),n.powers.includes("fireOath")&&(Ye+=5,i(Ae=>({...Ae,powers:Ae.powers.filter(ge=>ge!=="fireOath")})),Ke="Огненный обет! "),ne.id==="berserk"&&v<=ne.hp/2&&(Ye*=2,Ke+="Медвежья ярость! "),Ke+="Ты бьёшь: "+ne.weapon+" — −"+Ye+" хозяину."),Ee==="rune"){if(b<4){j("Мало энергии для заклинания!");return}L=b-4,Ye=ne.en+2+k(5),Ke="Руническое заклинание вспыхивает: −"+Ye+" хозяину."}Ee==="shield"&&(T=!0,Ke="Ты поднимаешь щит — удар ослабнет.");const q=u-Ye;if(q<=0){m(0),R(L),re("win");const Ae=8+ce*2;D("Хозяин повержен! Награда: +"+Ae+" ✨"),$e(z,ce,Ae);return}let te=ae.atk+k(3),pe="";T&&(te=Math.ceil(te*.3),pe=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(te=Math.ceil(te*.65),i(Ae=>({...Ae,powers:Ae.powers.filter(ge=>ge!=="iceOath")})),pe+=" Ледяной обет сковал удар врага."),ne.id==="dwarf"&&(te=Math.ceil(te*.75));let se=v;if(ne.id==="viking"&&!I&&se-te<=0&&(B(!0),te=0,pe=" Крылья бури поглотили смертельный удар!"),se=se-te,m(q),y(Math.max(0,se)),R(L),x(!1),se<=0&&n.powers.includes("yggdrasilCall")){i(Ae=>({...Ae,powers:Ae.powers.filter(ge=>ge!=="yggdrasilCall")})),y(30),D(Ke+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(se<=0){re("lose"),i(Ae=>({...Ae,sparks:Math.max(0,Ae.sparks-10)})),D(Ke+" "+ae.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}D(Ke+pe+" "+ae.name+" отвечает: −"+te+".")},at=z=>{ue(z)>=3||n.artifacts.includes(z)?e({t:"realm",id:z}):e({t:"trial",id:z})},st=z=>z==="tree"?t.t==="tree"||t.t==="realm":t.t===z,tt=z=>z==="tree"?{t:"tree"}:{t:z};return V.jsxs("div",{className:"app",children:[V.jsx("style",{children:jA}),V.jsxs("div",{className:"hdr",children:[t.t==="tree"&&V.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&V.jsx("button",{className:"back",onClick:()=>Z({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&V.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&V.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&V.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&V.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&V.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&V.jsx("div",{className:"title",children:"⚔ Бой"}),V.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&V.jsxs("div",{className:"scroll choose-screen",children:[V.jsxs("div",{className:"card center choose-intro",children:[V.jsx("div",{className:"big",children:"ᛉ"}),V.jsx("div",{className:"qhead2",children:"Выбери героя"}),V.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),Vd.map(z=>V.jsxs("button",{className:"hcard"+(r===z.id?" on":""),onClick:()=>{s(z.id),a(""),F()},children:[V.jsx("span",{className:"hface",style:{borderColor:z.color,color:z.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:V.jsx(Tr,{name:z.img,className:"himg"})}),V.jsxs("span",{className:"hinfo",children:[V.jsx("span",{className:"hname",style:{color:z.color},children:z.race}),V.jsxs("span",{className:"hab",children:["🌀 ",z.ability,": ",z.abilityDesc]}),V.jsxs("span",{className:"hst",children:["⚔ ",z.str," • ✨ ",z.en," • ❤ ",z.hp]}),V.jsxs("span",{className:"hw",children:["🗡 ",z.weapon]})]})]},z.id)),r&&V.jsxs("div",{className:"card",children:[V.jsx("div",{className:"qhead2",children:"Имя героя"}),V.jsx("div",{className:"chips",children:(Vd.find(z=>z.id===r).gender==="f"?WA:XA).map(z=>V.jsx("button",{className:"chip"+(o===z?" on":""),onClick:()=>{a(z),F()},children:z},z))})]}),V.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:be,children:"Вступить на путь"})]}),t.t==="tree"&&V.jsxs("div",{className:"maparea",children:[V.jsx("div",{className:"mapwrap",children:V.jsxs("div",{className:"mapcanvas",children:[V.jsx(Tr,{name:"tree",className:"mapimg"}),tc.map(z=>V.jsxs("button",{className:"marker",style:{left:z.x+"%",top:z.y+"%"},onClick:()=>ie(z),children:[V.jsxs("div",{className:"amulet-wrap",children:[V.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${z.glow}, transparent 70%)`}}),V.jsx("div",{className:"amulet-ring",style:{borderColor:z.color}}),V.jsx("div",{className:"amulet-core",style:{borderColor:z.color,color:z.color,background:`linear-gradient(135deg, ${z.dark}, #0a0a0a)`},children:z.runeSym})]}),V.jsx("span",{className:"mname",style:{color:z.color,borderColor:z.glow},children:z.name})]},z.id))]})}),V.jsx("div",{className:"fadeT"}),V.jsx("div",{className:"fadeB"}),V.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&ne&&n.hero&&V.jsxs("button",{className:"herobar",onClick:()=>Z({t:"hero"}),children:[V.jsxs("span",{className:"hbface",style:{borderColor:ne.color,color:ne.color},children:[V.jsx(Tr,{name:ne.img,className:"hbimg"}),ne.sym]}),V.jsxs("span",{className:"hbname",children:[n.hero.name,V.jsx("i",{children:ne.race})]}),V.jsxs("span",{className:"hbst",children:["⚔ ",ne.str," ✨ ",ne.en," ⏳ ",ye()]}),V.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const z=tc.find(Ee=>Ee.id===t.id);if(z.id==="midgard"){if(!ne)return null;const Ee=ae=>{if(F(),ae==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?j("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(ce=>({...ce,sparks:ce.sparks+20,done:[...new Set([...ce.done,"forest:present:reward"])]})),F("success"),j("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):j("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(ae==="norns"){j("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(ae==="forge"||ae==="blacksmith"){j("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(ae==="house"||ae==="elder"){j("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(ae==="port"){j("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(ae==="rune"){j("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(ae==="ashgrove"){j("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(ae==="runefield"){j("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(ae==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?j("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(ce=>({...ce,sparks:ce.sparks+20,done:[...new Set([...ce.done,"forest:past:reward"])]})),F("success"),j("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):j("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(ae==="forestCache"){n.done.includes("forest:cache")?j("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(ce=>({...ce,sparks:ce.sparks+18,done:[...new Set([...ce.done,"forest:cache"])]})),F("success"),j("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(ae==="forestWhisper"){n.done.includes("forest:whisper")?j("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(ce=>({...ce,sparks:ce.sparks+16,done:[...new Set([...ce.done,"forest:whisper"])]})),F("success"),j("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(ae==="forestThread"){n.done.includes("forest:thread")?j("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(ce=>({...ce,sparks:ce.sparks+22,done:[...new Set([...ce.done,"forest:thread"])]})),F("success"),j("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(ae==="heroHome"){j("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(ae==="hunterCamp"){n.done.includes("forest:camp")?j("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(ce=>({...ce,sparks:ce.sparks+14,done:[...new Set([...ce.done,"forest:camp"])]})),F("success"),j("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(ae==="deepGrove"){n.done.includes("forest:grove")?j("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(ce=>({...ce,sparks:ce.sparks+17,done:[...new Set([...ce.done,"forest:grove"])]})),F("success"),j("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(ae==="fallenAsh"){n.done.includes("forest:ash")?j("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(ce=>({...ce,sparks:ce.sparks+21,done:[...new Set([...ce.done,"forest:ash"])]})),F("success"),j("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(ae==="deer"){j("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(ae==="hoddmimir"){j("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(ae==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?j("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(ce=>({...ce,sparks:ce.sparks+20,done:[...new Set([...ce.done,"forest:future:reward"])]})),F("success"),j("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):j("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(ae==="forestEvent"){n.done.includes("forest:choice")&&j("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(ae==="forestEvent:past"){i(ce=>({...ce,sparks:ce.sparks+12,done:[...new Set([...ce.done,"forest:choice","forest:past"])]})),F("success"),j("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(ae==="forestEvent:present"){i(ce=>({...ce,sparks:ce.sparks+12,done:[...new Set([...ce.done,"forest:choice","forest:present"])]})),F("success"),j("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(ae==="forestEvent:future"){i(ce=>({...ce,sparks:ce.sparks+12,done:[...new Set([...ce.done,"forest:choice","forest:future"])]})),F("success"),j("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(ae==="event"){j("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(ae.startsWith("ritual:")){const ce=ae.slice(7),Ye={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},L={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[ce];if(!L)return;if(n.powers.includes(L)){j(Ye[ce]+" уже пробуждён. Его сила ждёт своего часа.");return}i(q=>({...q,powers:[...new Set([...q.powers,L])],done:[...new Set([...q.done,"ritual:"+ce])]}));const T={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};F("success"),j(T[ce]);return}};return V.jsx($A,{h:ne,on:Ee,eventDone:n.done.includes("forest:choice")})}return V.jsxs("div",{className:"content",children:[V.jsx(Tr,{name:z.id,className:"bgimg"}),V.jsx("div",{className:"veil"}),V.jsxs("div",{className:"banner",children:[V.jsx("span",{className:"bemoji",children:z.emoji}),V.jsxs("div",{children:[V.jsx("div",{className:"bname",children:z.name}),V.jsx("div",{className:"btag",children:z.tag})]})]}),V.jsxs("button",{className:"gate",onClick:()=>Be(z),children:[V.jsxs("span",{className:"gwrap",children:[V.jsx("span",{className:"gate-ring",style:{borderColor:z.color}}),V.jsx("span",{className:"gate-core",style:{borderColor:z.color,color:z.color,background:`radial-gradient(circle, ${z.dark}, #050705 75%)`},children:z.runeSym})]}),V.jsx("span",{className:"mname",style:{color:z.color,borderColor:z.glow},children:n.artifacts.includes(z.id)?"Мир покорён":"Врата мира"})]}),V.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const z=tc.find(Ye=>Ye.id===t.id),Ee=fa[z.id],ae=ue(z.id);if(ae>=3)return V.jsx("div",{className:"scroll",children:V.jsxs("div",{className:"card center",children:[V.jsx("div",{className:"big",children:"🏺"}),V.jsx("div",{className:"qhead2",children:"Мир покорён!"}),V.jsxs("p",{className:"dim",children:["Артефакт: ",Wd[z.id]]}),V.jsx("button",{className:"btn gold",onClick:()=>Z({t:"realm",id:z.id}),children:"К вратам"})]})});const ce=Gd[z.id][ae];return V.jsxs("div",{className:"scroll",children:[V.jsxs("div",{className:"mhead",children:[V.jsxs("span",{className:"mface",style:{borderColor:z.color,color:z.color},children:[V.jsx(Tr,{name:jg[z.id],className:"himg"}),Ee.sym]}),V.jsx("span",{className:"mname2",style:{color:z.color},children:Ee.name}),V.jsxs("span",{className:"mtitle",children:[Ee.title," • испытание ",ae+1," из 3"]})]}),ae===0&&V.jsxs("div",{className:"greet",children:["«",Ee.greet,"»"]}),V.jsxs("div",{className:"cloud",children:[V.jsx("div",{className:"riddle",children:ce.q}),ce.a.map((Ye,Ke)=>V.jsx("button",{className:"ans"+(f!==null?Ke===ce.c?" good":Ke===f?" bad":" off":p===Ke?" off":""),onClick:()=>We(z.id,Ke),children:Ye},Ke)),(ne==null?void 0:ne.id)==="elf"&&!E&&f===null&&V.jsx("button",{className:"btn rune",onClick:()=>dt(z.id),children:"🌀 Шёпот ветров"}),f!==null&&(f===ce.c?V.jsx("button",{className:"btn gold",onClick:()=>at(z.id),children:"Открыть сундук →"}):V.jsx("button",{className:"btn",onClick:()=>Yt(z.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const z=tc.find(ae=>ae.id===t.id),Ee=fa[z.id];return V.jsxs("div",{className:"scroll",children:[V.jsxs("div",{className:"duel",children:[V.jsxs("div",{className:"dside",children:[V.jsxs("span",{className:"dface",style:{borderColor:z.color,color:z.color},children:[V.jsx(Tr,{name:jg[z.id],className:"himg"}),Ee.sym]}),V.jsx("span",{className:"dname",style:{color:z.color},children:Ee.name}),V.jsx("span",{className:"dhp",children:V.jsx("span",{className:"dhpfill",style:{width:Math.max(0,u/Ee.hp*100)+"%",background:z.color}})}),V.jsxs("span",{className:"dnum",children:[u,"/",Ee.hp]})]}),V.jsx("span",{className:"dvs",children:"⚔"}),V.jsxs("div",{className:"dside",children:[V.jsxs("span",{className:"dface",style:{borderColor:ne.color,color:ne.color},children:[V.jsx(Tr,{name:ne.img,className:"himg"}),ne.sym]}),V.jsx("span",{className:"dname",style:{color:ne.color},children:n.hero.name}),V.jsx("span",{className:"dhp",children:V.jsx("span",{className:"dhpfill",style:{width:Math.max(0,v/ne.hp*100)+"%",background:"#7ee787"}})}),V.jsx("span",{className:"denergy",children:Array.from({length:ne.en}).map((ae,ce)=>V.jsx("span",{className:"pip"+(ce<b?" on":"")},ce))})]})]}),V.jsx("div",{className:"flog",children:P}),!$&&V.jsxs("div",{className:"acts",children:[V.jsxs("button",{className:"btn gold",onClick:()=>U(z.id,"hit"),children:["⚔ Удар: ",ne.weapon]}),V.jsx("button",{className:"btn rune",onClick:()=>U(z.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),V.jsx("button",{className:"btn shield",onClick:()=>U(z.id,"shield"),children:"🛡 Щит"})]}),$==="win"&&V.jsx("button",{className:"btn gold",onClick:()=>at(z.id),children:"Забрать награду →"}),$==="lose"&&V.jsx("button",{className:"btn ghost",onClick:()=>Z({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&ne&&n.hero&&V.jsx("div",{className:"scroll",children:V.jsxs("div",{className:"card center",children:[V.jsx("span",{className:"hface bigface",style:{borderColor:ne.color,color:ne.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:V.jsx(Tr,{name:ne.img,className:"himg"})}),V.jsxs("div",{className:"qhead2",style:{color:ne.color},children:[n.hero.name," • ",ne.race]}),V.jsxs("div",{className:"stats",children:[V.jsxs("div",{className:"stat",children:[V.jsxs("b",{children:["⚔ ",ne.str]}),V.jsx("span",{children:"сила"})]}),V.jsxs("div",{className:"stat",children:[V.jsxs("b",{children:["✨ ",ne.en]}),V.jsx("span",{children:"энергия"})]}),V.jsxs("div",{className:"stat",children:[V.jsxs("b",{children:["❤ ",ne.hp]}),V.jsx("span",{children:"здоровье"})]})]}),V.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",V.jsx("b",{children:ne.weapon})]}),V.jsxs("div",{className:"hrow",children:["🌀 ",ne.ability,": ",ne.abilityDesc]}),V.jsxs("div",{className:"hrow",children:["✨ Искр: ",V.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",V.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&V.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(z=>Wd[z]).join(", ")]})]})}),t.t==="gift"&&(()=>{const z=n.gift===da(),ae=(n.gift?Math.round((Date.parse(da())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,ce=z?n.streak:ae;return V.jsxs("div",{className:"scroll",children:[V.jsxs("div",{className:"card center",children:[V.jsx("div",{className:"big",children:"🎁"}),V.jsx("div",{className:"qhead2",children:"Дар Древа"}),V.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),V.jsx("div",{className:"days",children:Hd.map((Ye,Ke)=>V.jsxs("span",{className:"day"+(Ke+1===ce?" on":Ke+1<ce&&z?" done":""),children:[V.jsx("b",{children:Ye}),"день ",Ke+1]},Ke))}),z?V.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):V.jsxs("button",{className:"btn gold",onClick:ct,children:["Забрать дар +",Hd[ae-1]," ✨"]})]}),V.jsxs("div",{className:"card center",children:[V.jsx("div",{className:"big",children:"⏳"}),V.jsx("div",{className:"qhead2",children:"Дозор героя"}),V.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),V.jsxs("button",{className:"btn gold",onClick:Pe,children:["Завершить дозор · +",ye()," ✨"]})]})]})})(),t.t==="hall"&&V.jsx("div",{className:"scroll",children:V.jsxs("div",{className:"card center",children:[V.jsx("div",{className:"big",children:"🏛️"}),V.jsx("div",{className:"qhead2",children:"Чертог путника"}),V.jsxs("div",{className:"stats",children:[V.jsxs("div",{className:"stat",children:[V.jsxs("b",{children:["✨ ",n.sparks]}),V.jsx("span",{children:"Искр"})]}),V.jsxs("div",{className:"stat",children:[V.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),V.jsx("span",{children:"артефакты"})]})]}),V.jsxs("div",{className:"rank",children:["🏆 Ранг: ",GA(n.sparks)]}),n.hero&&ne&&V.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",ne.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&V.jsx("div",{className:"nav",children:VA.map(z=>V.jsxs("button",{className:"navbtn"+(st(z.id)?" on":""),onClick:()=>Z(tt(z.id)),children:[V.jsx("span",{className:"ic",children:z.ic}),z.t]},z.id))}),l&&V.jsx("div",{className:"toast",children:l})]})}ox(document.getElementById("root")).render(V.jsx(KA,{}));
