(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var jg={exports:{}},Xc={},Yg={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),Wx=Symbol.for("react.portal"),Xx=Symbol.for("react.fragment"),jx=Symbol.for("react.strict_mode"),Yx=Symbol.for("react.profiler"),qx=Symbol.for("react.provider"),$x=Symbol.for("react.context"),Kx=Symbol.for("react.forward_ref"),Zx=Symbol.for("react.suspense"),Jx=Symbol.for("react.memo"),Qx=Symbol.for("react.lazy"),Am=Symbol.iterator;function e1(t){return t===null||typeof t!="object"?null:(t=Am&&t[Am]||t["@@iterator"],typeof t=="function"?t:null)}var qg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$g=Object.assign,Kg={};function Do(t,e,n){this.props=t,this.context=e,this.refs=Kg,this.updater=n||qg}Do.prototype.isReactComponent={};Do.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Do.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zg(){}Zg.prototype=Do.prototype;function Eh(t,e,n){this.props=t,this.context=e,this.refs=Kg,this.updater=n||qg}var Th=Eh.prototype=new Zg;Th.constructor=Eh;$g(Th,Do.prototype);Th.isPureReactComponent=!0;var bm=Array.isArray,Jg=Object.prototype.hasOwnProperty,Ah={current:null},Qg={key:!0,ref:!0,__self:!0,__source:!0};function ev(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jg.call(e,i)&&!Qg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ka,type:t,key:s,ref:o,props:r,_owner:Ah.current}}function t1(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function n1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cm=/\/+/g;function bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?n1(""+t.key):e.toString(36)}function Zl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ka:case Wx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+bu(o,0):i,bm(r)?(n="",t!=null&&(n=t.replace(Cm,"$&/")+"/"),Zl(r,e,n,"",function(c){return c})):r!=null&&(bh(r)&&(r=t1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Cm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",bm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+bu(s,a);o+=Zl(s,e,n,l,r)}else if(l=e1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+bu(s,a++),o+=Zl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function cl(t,e,n){if(t==null)return t;var i=[],r=0;return Zl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function i1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var On={current:null},Jl={transition:null},r1={ReactCurrentDispatcher:On,ReactCurrentBatchConfig:Jl,ReactCurrentOwner:Ah};function tv(){throw Error("act(...) is not supported in production builds of React.")}mt.Children={map:cl,forEach:function(t,e,n){cl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return cl(t,function(){e++}),e},toArray:function(t){return cl(t,function(e){return e})||[]},only:function(t){if(!bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};mt.Component=Do;mt.Fragment=Xx;mt.Profiler=Yx;mt.PureComponent=Eh;mt.StrictMode=jx;mt.Suspense=Zx;mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r1;mt.act=tv;mt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=$g({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ah.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Jg.call(e,l)&&!Qg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ka,type:t.type,key:r,ref:s,props:i,_owner:o}};mt.createContext=function(t){return t={$$typeof:$x,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qx,_context:t},t.Consumer=t};mt.createElement=ev;mt.createFactory=function(t){var e=ev.bind(null,t);return e.type=t,e};mt.createRef=function(){return{current:null}};mt.forwardRef=function(t){return{$$typeof:Kx,render:t}};mt.isValidElement=bh;mt.lazy=function(t){return{$$typeof:Qx,_payload:{_status:-1,_result:t},_init:i1}};mt.memo=function(t,e){return{$$typeof:Jx,type:t,compare:e===void 0?null:e}};mt.startTransition=function(t){var e=Jl.transition;Jl.transition={};try{t()}finally{Jl.transition=e}};mt.unstable_act=tv;mt.useCallback=function(t,e){return On.current.useCallback(t,e)};mt.useContext=function(t){return On.current.useContext(t)};mt.useDebugValue=function(){};mt.useDeferredValue=function(t){return On.current.useDeferredValue(t)};mt.useEffect=function(t,e){return On.current.useEffect(t,e)};mt.useId=function(){return On.current.useId()};mt.useImperativeHandle=function(t,e,n){return On.current.useImperativeHandle(t,e,n)};mt.useInsertionEffect=function(t,e){return On.current.useInsertionEffect(t,e)};mt.useLayoutEffect=function(t,e){return On.current.useLayoutEffect(t,e)};mt.useMemo=function(t,e){return On.current.useMemo(t,e)};mt.useReducer=function(t,e,n){return On.current.useReducer(t,e,n)};mt.useRef=function(t){return On.current.useRef(t)};mt.useState=function(t){return On.current.useState(t)};mt.useSyncExternalStore=function(t,e,n){return On.current.useSyncExternalStore(t,e,n)};mt.useTransition=function(){return On.current.useTransition()};mt.version="18.3.1";Yg.exports=mt;var _t=Yg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1=_t,o1=Symbol.for("react.element"),a1=Symbol.for("react.fragment"),l1=Object.prototype.hasOwnProperty,c1=s1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u1={key:!0,ref:!0,__self:!0,__source:!0};function nv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)l1.call(e,i)&&!u1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:o1,type:t,key:s,ref:o,props:r,_owner:c1.current}}Xc.Fragment=a1;Xc.jsx=nv;Xc.jsxs=nv;jg.exports=Xc;var H=jg.exports,iv={exports:{}},ei={},rv={exports:{}},sv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,K){var ne=F.length;F.push(K);e:for(;0<ne;){var we=ne-1>>>1,me=F[we];if(0<r(me,K))F[we]=K,F[ne]=me,ne=we;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var K=F[0],ne=F.pop();if(ne!==K){F[0]=ne;e:for(var we=0,me=F.length,Ee=me>>>1;we<Ee;){var nt=2*(we+1)-1,X=F[nt],Z=nt+1,he=F[Z];if(0>r(X,ne))Z<me&&0>r(he,X)?(F[we]=he,F[Z]=ne,we=Z):(F[we]=X,F[nt]=ne,we=nt);else if(Z<me&&0>r(he,ne))F[we]=he,F[Z]=ne,we=Z;else break e}}return K}function r(F,K){var ne=F.sortIndex-K.sortIndex;return ne!==0?ne:F.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,p=!1,_=!1,w=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=F)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function y(F){if(w=!1,v(F),!_)if(n(l)!==null)_=!0,B(b);else{var K=n(c);K!==null&&W(y,K.startTime-F)}}function b(F,K){_=!1,w&&(w=!1,u(D),D=-1),p=!0;var ne=h;try{for(v(K),f=n(l);f!==null&&(!(f.expirationTime>K)||F&&!N());){var we=f.callback;if(typeof we=="function"){f.callback=null,h=f.priorityLevel;var me=we(f.expirationTime<=K);K=t.unstable_now(),typeof me=="function"?f.callback=me:f===n(l)&&i(l),v(K)}else i(l);f=n(l)}if(f!==null)var Ee=!0;else{var nt=n(c);nt!==null&&W(y,nt.startTime-K),Ee=!1}return Ee}finally{f=null,h=ne,p=!1}}var R=!1,P=null,D=-1,M=5,x=-1;function N(){return!(t.unstable_now()-x<M)}function z(){if(P!==null){var F=t.unstable_now();x=F;var K=!0;try{K=P(!0,F)}finally{K?$():(R=!1,P=null)}}else R=!1}var $;if(typeof m=="function")$=function(){m(z)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=z,$=function(){ae.postMessage(null)}}else $=function(){g(z,0)};function B(F){P=F,R||(R=!0,$())}function W(F,K){D=g(function(){F(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,B(b))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var ne=h;h=K;try{return F()}finally{h=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,K){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ne=h;h=F;try{return K()}finally{h=ne}},t.unstable_scheduleCallback=function(F,K,ne){var we=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?we+ne:we):ne=we,F){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=ne+me,F={id:d++,callback:K,priorityLevel:F,startTime:ne,expirationTime:me,sortIndex:-1},ne>we?(F.sortIndex=ne,e(c,F),n(l)===null&&F===n(c)&&(w?(u(D),D=-1):w=!0,W(y,ne-we))):(F.sortIndex=me,e(l,F),_||p||(_=!0,B(b))),F},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(F){var K=h;return function(){var ne=h;h=K;try{return F.apply(this,arguments)}finally{h=ne}}}})(sv);rv.exports=sv;var d1=rv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1=_t,Qn=d1;function ye(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ov=new Set,Ca={};function Cs(t,e){yo(t,e),yo(t+"Capture",e)}function yo(t,e){for(Ca[t]=e,t=0;t<e.length;t++)ov.add(e[t])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bd=Object.prototype.hasOwnProperty,h1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rm={},Pm={};function p1(t){return Bd.call(Pm,t)?!0:Bd.call(Rm,t)?!1:h1.test(t)?Pm[t]=!0:(Rm[t]=!0,!1)}function m1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function g1(t,e,n,i){if(e===null||typeof e>"u"||m1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function kn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Mn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Mn[t]=new kn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Mn[e]=new kn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Mn[t]=new kn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Mn[t]=new kn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Mn[t]=new kn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Mn[t]=new kn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Mn[t]=new kn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Mn[t]=new kn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Mn[t]=new kn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ch=/[\-:]([a-z])/g;function Rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ch,Rh);Mn[e]=new kn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ch,Rh);Mn[e]=new kn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ch,Rh);Mn[e]=new kn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Mn[t]=new kn(t,1,!1,t.toLowerCase(),null,!1,!1)});Mn.xlinkHref=new kn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Mn[t]=new kn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ph(t,e,n,i){var r=Mn.hasOwnProperty(e)?Mn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(g1(e,n,r,i)&&(n=null),i||r===null?p1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var lr=f1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ul=Symbol.for("react.element"),Zs=Symbol.for("react.portal"),Js=Symbol.for("react.fragment"),Lh=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),av=Symbol.for("react.provider"),lv=Symbol.for("react.context"),Dh=Symbol.for("react.forward_ref"),Vd=Symbol.for("react.suspense"),Gd=Symbol.for("react.suspense_list"),Nh=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),cv=Symbol.for("react.offscreen"),Lm=Symbol.iterator;function qo(t){return t===null||typeof t!="object"?null:(t=Lm&&t[Lm]||t["@@iterator"],typeof t=="function"?t:null)}var Yt=Object.assign,Cu;function fa(t){if(Cu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cu=e&&e[1]||""}return`
`+Cu+t}var Ru=!1;function Pu(t,e){if(!t||Ru)return"";Ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ru=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fa(t):""}function v1(t){switch(t.tag){case 5:return fa(t.type);case 16:return fa("Lazy");case 13:return fa("Suspense");case 19:return fa("SuspenseList");case 0:case 2:case 15:return t=Pu(t.type,!1),t;case 11:return t=Pu(t.type.render,!1),t;case 1:return t=Pu(t.type,!0),t;default:return""}}function Wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Js:return"Fragment";case Zs:return"Portal";case Hd:return"Profiler";case Lh:return"StrictMode";case Vd:return"Suspense";case Gd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lv:return(t.displayName||"Context")+".Consumer";case av:return(t._context.displayName||"Context")+".Provider";case Dh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nh:return e=t.displayName||null,e!==null?e:Wd(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return Wd(t(e))}catch{}}return null}function _1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wd(e);case 8:return e===Lh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function x1(t){var e=uv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function dl(t){t._valueTracker||(t._valueTracker=x1(t))}function dv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=uv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xd(t,e){var n=e.checked;return Yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Br(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fv(t,e){e=e.checked,e!=null&&Ph(t,"checked",e,!1)}function jd(t,e){fv(t,e);var n=Br(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yd(t,e.type,Br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yd(t,e,n){(e!=="number"||pc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ha=Array.isArray;function uo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Br(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ye(91));return Yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Im(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ye(92));if(ha(n)){if(1<n.length)throw Error(ye(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Br(n)}}function hv(t,e){var n=Br(e.value),i=Br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fl,mv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fl=fl||document.createElement("div"),fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y1=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(t){y1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),va[e]=va[t]})});function gv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||va.hasOwnProperty(t)&&va[t]?(""+e).trim():e+"px"}function vv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=gv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var S1=Yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kd(t,e){if(e){if(S1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ye(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ye(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ye(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ye(62))}}function Zd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jd=null;function Ih(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qd=null,fo=null,ho=null;function Fm(t){if(t=Qa(t)){if(typeof Qd!="function")throw Error(ye(280));var e=t.stateNode;e&&(e=Kc(e),Qd(t.stateNode,t.type,e))}}function _v(t){fo?ho?ho.push(t):ho=[t]:fo=t}function xv(){if(fo){var t=fo,e=ho;if(ho=fo=null,Fm(t),e)for(t=0;t<e.length;t++)Fm(e[t])}}function yv(t,e){return t(e)}function Sv(){}var Lu=!1;function Mv(t,e,n){if(Lu)return t(e,n);Lu=!0;try{return yv(t,e,n)}finally{Lu=!1,(fo!==null||ho!==null)&&(Sv(),xv())}}function Pa(t,e){var n=t.stateNode;if(n===null)return null;var i=Kc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ye(231,e,typeof n));return n}var ef=!1;if(rr)try{var $o={};Object.defineProperty($o,"passive",{get:function(){ef=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{ef=!1}function M1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var _a=!1,mc=null,gc=!1,tf=null,w1={onError:function(t){_a=!0,mc=t}};function E1(t,e,n,i,r,s,o,a,l){_a=!1,mc=null,M1.apply(w1,arguments)}function T1(t,e,n,i,r,s,o,a,l){if(E1.apply(this,arguments),_a){if(_a){var c=mc;_a=!1,mc=null}else throw Error(ye(198));gc||(gc=!0,tf=c)}}function Rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Om(t){if(Rs(t)!==t)throw Error(ye(188))}function A1(t){var e=t.alternate;if(!e){if(e=Rs(t),e===null)throw Error(ye(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Om(r),t;if(s===i)return Om(r),e;s=s.sibling}throw Error(ye(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ye(189))}}if(n.alternate!==i)throw Error(ye(190))}if(n.tag!==3)throw Error(ye(188));return n.stateNode.current===n?t:e}function Ev(t){return t=A1(t),t!==null?Tv(t):null}function Tv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Tv(t);if(e!==null)return e;t=t.sibling}return null}var Av=Qn.unstable_scheduleCallback,km=Qn.unstable_cancelCallback,b1=Qn.unstable_shouldYield,C1=Qn.unstable_requestPaint,Jt=Qn.unstable_now,R1=Qn.unstable_getCurrentPriorityLevel,Uh=Qn.unstable_ImmediatePriority,bv=Qn.unstable_UserBlockingPriority,vc=Qn.unstable_NormalPriority,P1=Qn.unstable_LowPriority,Cv=Qn.unstable_IdlePriority,jc=null,Fi=null;function L1(t){if(Fi&&typeof Fi.onCommitFiberRoot=="function")try{Fi.onCommitFiberRoot(jc,t,void 0,(t.current.flags&128)===128)}catch{}}var wi=Math.clz32?Math.clz32:I1,D1=Math.log,N1=Math.LN2;function I1(t){return t>>>=0,t===0?32:31-(D1(t)/N1|0)|0}var hl=64,pl=4194304;function pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _c(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=pa(a):(s&=o,s!==0&&(i=pa(s)))}else o=n&~r,o!==0?i=pa(o):s!==0&&(i=pa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-wi(e),r=1<<n,i|=t[n],e&=~r;return i}function U1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=U1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rv(){var t=hl;return hl<<=1,!(hl&4194240)&&(hl=64),t}function Du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wi(e),t[e]=n}function O1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-wi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-wi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Lt=0;function Pv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lv,Oh,Dv,Nv,Iv,rf=!1,ml=[],Pr=null,Lr=null,Dr=null,La=new Map,Da=new Map,Tr=[],k1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zm(t,e){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":La.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(e.pointerId)}}function Ko(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Qa(e),e!==null&&Oh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function z1(t,e,n,i,r){switch(e){case"focusin":return Pr=Ko(Pr,t,e,n,i,r),!0;case"dragenter":return Lr=Ko(Lr,t,e,n,i,r),!0;case"mouseover":return Dr=Ko(Dr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return La.set(s,Ko(La.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Da.set(s,Ko(Da.get(s)||null,t,e,n,i,r)),!0}return!1}function Uv(t){var e=ps(t.target);if(e!==null){var n=Rs(e);if(n!==null){if(e=n.tag,e===13){if(e=wv(n),e!==null){t.blockedOn=e,Iv(t.priority,function(){Dv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Jd=i,n.target.dispatchEvent(i),Jd=null}else return e=Qa(n),e!==null&&Oh(e),t.blockedOn=n,!1;e.shift()}return!0}function Bm(t,e,n){Ql(t)&&n.delete(e)}function B1(){rf=!1,Pr!==null&&Ql(Pr)&&(Pr=null),Lr!==null&&Ql(Lr)&&(Lr=null),Dr!==null&&Ql(Dr)&&(Dr=null),La.forEach(Bm),Da.forEach(Bm)}function Zo(t,e){t.blockedOn===e&&(t.blockedOn=null,rf||(rf=!0,Qn.unstable_scheduleCallback(Qn.unstable_NormalPriority,B1)))}function Na(t){function e(r){return Zo(r,t)}if(0<ml.length){Zo(ml[0],t);for(var n=1;n<ml.length;n++){var i=ml[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Pr!==null&&Zo(Pr,t),Lr!==null&&Zo(Lr,t),Dr!==null&&Zo(Dr,t),La.forEach(e),Da.forEach(e),n=0;n<Tr.length;n++)i=Tr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)Uv(n),n.blockedOn===null&&Tr.shift()}var po=lr.ReactCurrentBatchConfig,xc=!0;function H1(t,e,n,i){var r=Lt,s=po.transition;po.transition=null;try{Lt=1,kh(t,e,n,i)}finally{Lt=r,po.transition=s}}function V1(t,e,n,i){var r=Lt,s=po.transition;po.transition=null;try{Lt=4,kh(t,e,n,i)}finally{Lt=r,po.transition=s}}function kh(t,e,n,i){if(xc){var r=sf(t,e,n,i);if(r===null)Vu(t,e,i,yc,n),zm(t,i);else if(z1(r,t,e,n,i))i.stopPropagation();else if(zm(t,i),e&4&&-1<k1.indexOf(t)){for(;r!==null;){var s=Qa(r);if(s!==null&&Lv(s),s=sf(t,e,n,i),s===null&&Vu(t,e,i,yc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Vu(t,e,i,null,n)}}var yc=null;function sf(t,e,n,i){if(yc=null,t=Ih(i),t=ps(t),t!==null)if(e=Rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yc=t,null}function Fv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R1()){case Uh:return 1;case bv:return 4;case vc:case P1:return 16;case Cv:return 536870912;default:return 16}default:return 16}}var Cr=null,zh=null,ec=null;function Ov(){if(ec)return ec;var t,e=zh,n=e.length,i,r="value"in Cr?Cr.value:Cr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ec=r.slice(t,1<i?1-i:void 0)}function tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function Hm(){return!1}function ti(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gl:Hm,this.isPropagationStopped=Hm,this}return Yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),e}var No={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=ti(No),Ja=Yt({},No,{view:0,detail:0}),G1=ti(Ja),Nu,Iu,Jo,Yc=Yt({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Jo&&(Jo&&t.type==="mousemove"?(Nu=t.screenX-Jo.screenX,Iu=t.screenY-Jo.screenY):Iu=Nu=0,Jo=t),Nu)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),Vm=ti(Yc),W1=Yt({},Yc,{dataTransfer:0}),X1=ti(W1),j1=Yt({},Ja,{relatedTarget:0}),Uu=ti(j1),Y1=Yt({},No,{animationName:0,elapsedTime:0,pseudoElement:0}),q1=ti(Y1),$1=Yt({},No,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),K1=ti($1),Z1=Yt({},No,{data:0}),Gm=ti(Z1),J1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ty(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ey[t])?!!e[t]:!1}function Hh(){return ty}var ny=Yt({},Ja,{key:function(t){if(t.key){var e=J1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Q1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hh,charCode:function(t){return t.type==="keypress"?tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iy=ti(ny),ry=Yt({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wm=ti(ry),sy=Yt({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hh}),oy=ti(sy),ay=Yt({},No,{propertyName:0,elapsedTime:0,pseudoElement:0}),ly=ti(ay),cy=Yt({},Yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uy=ti(cy),dy=[9,13,27,32],Vh=rr&&"CompositionEvent"in window,xa=null;rr&&"documentMode"in document&&(xa=document.documentMode);var fy=rr&&"TextEvent"in window&&!xa,kv=rr&&(!Vh||xa&&8<xa&&11>=xa),Xm=" ",jm=!1;function zv(t,e){switch(t){case"keyup":return dy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function hy(t,e){switch(t){case"compositionend":return Bv(e);case"keypress":return e.which!==32?null:(jm=!0,Xm);case"textInput":return t=e.data,t===Xm&&jm?null:t;default:return null}}function py(t,e){if(Qs)return t==="compositionend"||!Vh&&zv(t,e)?(t=Ov(),ec=zh=Cr=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kv&&e.locale!=="ko"?null:e.data;default:return null}}var my={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!my[t.type]:e==="textarea"}function Hv(t,e,n,i){_v(i),e=Sc(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ya=null,Ia=null;function gy(t){Jv(t,0)}function qc(t){var e=no(t);if(dv(e))return t}function vy(t,e){if(t==="change")return e}var Vv=!1;if(rr){var Fu;if(rr){var Ou="oninput"in document;if(!Ou){var qm=document.createElement("div");qm.setAttribute("oninput","return;"),Ou=typeof qm.oninput=="function"}Fu=Ou}else Fu=!1;Vv=Fu&&(!document.documentMode||9<document.documentMode)}function $m(){ya&&(ya.detachEvent("onpropertychange",Gv),Ia=ya=null)}function Gv(t){if(t.propertyName==="value"&&qc(Ia)){var e=[];Hv(e,Ia,t,Ih(t)),Mv(gy,e)}}function _y(t,e,n){t==="focusin"?($m(),ya=e,Ia=n,ya.attachEvent("onpropertychange",Gv)):t==="focusout"&&$m()}function xy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qc(Ia)}function yy(t,e){if(t==="click")return qc(e)}function Sy(t,e){if(t==="input"||t==="change")return qc(e)}function My(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ai=typeof Object.is=="function"?Object.is:My;function Ua(t,e){if(Ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bd.call(e,r)||!Ai(t[r],e[r]))return!1}return!0}function Km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zm(t,e){var n=Km(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Km(n)}}function Wv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xv(){for(var t=window,e=pc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pc(t.document)}return e}function Gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wy(t){var e=Xv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Wv(n.ownerDocument.documentElement,n)){if(i!==null&&Gh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Zm(n,s);var o=Zm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ey=rr&&"documentMode"in document&&11>=document.documentMode,eo=null,of=null,Sa=null,af=!1;function Jm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;af||eo==null||eo!==pc(i)||(i=eo,"selectionStart"in i&&Gh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Sa&&Ua(Sa,i)||(Sa=i,i=Sc(of,"onSelect"),0<i.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=eo)))}function vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var to={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},ku={},jv={};rr&&(jv=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function $c(t){if(ku[t])return ku[t];if(!to[t])return t;var e=to[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jv)return ku[t]=e[n];return t}var Yv=$c("animationend"),qv=$c("animationiteration"),$v=$c("animationstart"),Kv=$c("transitionend"),Zv=new Map,Qm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(t,e){Zv.set(t,e),Cs(e,[t])}for(var zu=0;zu<Qm.length;zu++){var Bu=Qm[zu],Ty=Bu.toLowerCase(),Ay=Bu[0].toUpperCase()+Bu.slice(1);Wr(Ty,"on"+Ay)}Wr(Yv,"onAnimationEnd");Wr(qv,"onAnimationIteration");Wr($v,"onAnimationStart");Wr("dblclick","onDoubleClick");Wr("focusin","onFocus");Wr("focusout","onBlur");Wr(Kv,"onTransitionEnd");yo("onMouseEnter",["mouseout","mouseover"]);yo("onMouseLeave",["mouseout","mouseover"]);yo("onPointerEnter",["pointerout","pointerover"]);yo("onPointerLeave",["pointerout","pointerover"]);Cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),by=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function e0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,T1(i,e,void 0,t),t.currentTarget=null}function Jv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;e0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;e0(r,a,c),s=l}}}if(gc)throw t=tf,gc=!1,tf=null,t}function Ot(t,e){var n=e[ff];n===void 0&&(n=e[ff]=new Set);var i=t+"__bubble";n.has(i)||(Qv(e,t,2,!1),n.add(i))}function Hu(t,e,n){var i=0;e&&(i|=4),Qv(n,t,i,e)}var _l="_reactListening"+Math.random().toString(36).slice(2);function Fa(t){if(!t[_l]){t[_l]=!0,ov.forEach(function(n){n!=="selectionchange"&&(by.has(n)||Hu(n,!1,t),Hu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_l]||(e[_l]=!0,Hu("selectionchange",!1,e))}}function Qv(t,e,n,i){switch(Fv(e)){case 1:var r=H1;break;case 4:r=V1;break;default:r=kh}n=r.bind(null,e,n,t),r=void 0,!ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Vu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ps(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Mv(function(){var c=s,d=Ih(n),f=[];e:{var h=Zv.get(t);if(h!==void 0){var p=Bh,_=t;switch(t){case"keypress":if(tc(n)===0)break e;case"keydown":case"keyup":p=iy;break;case"focusin":_="focus",p=Uu;break;case"focusout":_="blur",p=Uu;break;case"beforeblur":case"afterblur":p=Uu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=X1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=oy;break;case Yv:case qv:case $v:p=q1;break;case Kv:p=ly;break;case"scroll":p=G1;break;case"wheel":p=uy;break;case"copy":case"cut":case"paste":p=K1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wm}var w=(e&4)!==0,g=!w&&t==="scroll",u=w?h!==null?h+"Capture":null:h;w=[];for(var m=c,v;m!==null;){v=m;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,u!==null&&(y=Pa(m,u),y!=null&&w.push(Oa(m,y,v)))),g)break;m=m.return}0<w.length&&(h=new p(h,_,null,n,d),f.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Jd&&(_=n.relatedTarget||n.fromElement)&&(ps(_)||_[sr]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?ps(_):null,_!==null&&(g=Rs(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(w=Vm,y="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(w=Wm,y="onPointerLeave",u="onPointerEnter",m="pointer"),g=p==null?h:no(p),v=_==null?h:no(_),h=new w(y,m+"leave",p,n,d),h.target=g,h.relatedTarget=v,y=null,ps(d)===c&&(w=new w(u,m+"enter",_,n,d),w.target=v,w.relatedTarget=g,y=w),g=y,p&&_)t:{for(w=p,u=_,m=0,v=w;v;v=Fs(v))m++;for(v=0,y=u;y;y=Fs(y))v++;for(;0<m-v;)w=Fs(w),m--;for(;0<v-m;)u=Fs(u),v--;for(;m--;){if(w===u||u!==null&&w===u.alternate)break t;w=Fs(w),u=Fs(u)}w=null}else w=null;p!==null&&t0(f,h,p,w,!1),_!==null&&g!==null&&t0(f,g,_,w,!0)}}e:{if(h=c?no(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=vy;else if(Ym(h))if(Vv)b=Sy;else{b=xy;var R=_y}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=yy);if(b&&(b=b(t,c))){Hv(f,b,n,d);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Yd(h,"number",h.value)}switch(R=c?no(c):window,t){case"focusin":(Ym(R)||R.contentEditable==="true")&&(eo=R,of=c,Sa=null);break;case"focusout":Sa=of=eo=null;break;case"mousedown":af=!0;break;case"contextmenu":case"mouseup":case"dragend":af=!1,Jm(f,n,d);break;case"selectionchange":if(Ey)break;case"keydown":case"keyup":Jm(f,n,d)}var P;if(Vh)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Qs?zv(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(kv&&n.locale!=="ko"&&(Qs||D!=="onCompositionStart"?D==="onCompositionEnd"&&Qs&&(P=Ov()):(Cr=d,zh="value"in Cr?Cr.value:Cr.textContent,Qs=!0)),R=Sc(c,D),0<R.length&&(D=new Gm(D,t,null,n,d),f.push({event:D,listeners:R}),P?D.data=P:(P=Bv(n),P!==null&&(D.data=P)))),(P=fy?hy(t,n):py(t,n))&&(c=Sc(c,"onBeforeInput"),0<c.length&&(d=new Gm("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=P))}Jv(f,e)})}function Oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Pa(t,n),s!=null&&i.unshift(Oa(t,s,r)),s=Pa(t,e),s!=null&&i.push(Oa(t,s,r))),t=t.return}return i}function Fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function t0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Pa(n,s),l!=null&&o.unshift(Oa(n,l,a))):r||(l=Pa(n,s),l!=null&&o.push(Oa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Cy=/\r\n?/g,Ry=/\u0000|\uFFFD/g;function n0(t){return(typeof t=="string"?t:""+t).replace(Cy,`
`).replace(Ry,"")}function xl(t,e,n){if(e=n0(e),n0(t)!==e&&n)throw Error(ye(425))}function Mc(){}var lf=null,cf=null;function uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var df=typeof setTimeout=="function"?setTimeout:void 0,Py=typeof clearTimeout=="function"?clearTimeout:void 0,i0=typeof Promise=="function"?Promise:void 0,Ly=typeof queueMicrotask=="function"?queueMicrotask:typeof i0<"u"?function(t){return i0.resolve(null).then(t).catch(Dy)}:df;function Dy(t){setTimeout(function(){throw t})}function Gu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Na(e)}function Nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function r0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Io=Math.random().toString(36).slice(2),Ni="__reactFiber$"+Io,ka="__reactProps$"+Io,sr="__reactContainer$"+Io,ff="__reactEvents$"+Io,Ny="__reactListeners$"+Io,Iy="__reactHandles$"+Io;function ps(t){var e=t[Ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sr]||n[Ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=r0(t);t!==null;){if(n=t[Ni])return n;t=r0(t)}return e}t=n,n=t.parentNode}return null}function Qa(t){return t=t[Ni]||t[sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function no(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ye(33))}function Kc(t){return t[ka]||null}var hf=[],io=-1;function Xr(t){return{current:t}}function kt(t){0>io||(t.current=hf[io],hf[io]=null,io--)}function Ft(t,e){io++,hf[io]=t.current,t.current=e}var Hr={},Ln=Xr(Hr),Gn=Xr(!1),Ss=Hr;function So(t,e){var n=t.type.contextTypes;if(!n)return Hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Wn(t){return t=t.childContextTypes,t!=null}function wc(){kt(Gn),kt(Ln)}function s0(t,e,n){if(Ln.current!==Hr)throw Error(ye(168));Ft(Ln,e),Ft(Gn,n)}function e_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ye(108,_1(t)||"Unknown",r));return Yt({},n,i)}function Ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hr,Ss=Ln.current,Ft(Ln,t),Ft(Gn,Gn.current),!0}function o0(t,e,n){var i=t.stateNode;if(!i)throw Error(ye(169));n?(t=e_(t,e,Ss),i.__reactInternalMemoizedMergedChildContext=t,kt(Gn),kt(Ln),Ft(Ln,t)):kt(Gn),Ft(Gn,n)}var Zi=null,Zc=!1,Wu=!1;function t_(t){Zi===null?Zi=[t]:Zi.push(t)}function Uy(t){Zc=!0,t_(t)}function jr(){if(!Wu&&Zi!==null){Wu=!0;var t=0,e=Lt;try{var n=Zi;for(Lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Zi=null,Zc=!1}catch(r){throw Zi!==null&&(Zi=Zi.slice(t+1)),Av(Uh,jr),r}finally{Lt=e,Wu=!1}}return null}var ro=[],so=0,Tc=null,Ac=0,ri=[],si=0,Ms=null,Qi=1,er="";function ls(t,e){ro[so++]=Ac,ro[so++]=Tc,Tc=t,Ac=e}function n_(t,e,n){ri[si++]=Qi,ri[si++]=er,ri[si++]=Ms,Ms=t;var i=Qi;t=er;var r=32-wi(i)-1;i&=~(1<<r),n+=1;var s=32-wi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Qi=1<<32-wi(e)+r|n<<r|i,er=s+t}else Qi=1<<s|n<<r|i,er=t}function Wh(t){t.return!==null&&(ls(t,1),n_(t,1,0))}function Xh(t){for(;t===Tc;)Tc=ro[--so],ro[so]=null,Ac=ro[--so],ro[so]=null;for(;t===Ms;)Ms=ri[--si],ri[si]=null,er=ri[--si],ri[si]=null,Qi=ri[--si],ri[si]=null}var Jn=null,Zn=null,Gt=!1,xi=null;function i_(t,e){var n=oi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function a0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Jn=t,Zn=Nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Jn=t,Zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ms!==null?{id:Qi,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=oi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Jn=t,Zn=null,!0):!1;default:return!1}}function pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mf(t){if(Gt){var e=Zn;if(e){var n=e;if(!a0(t,e)){if(pf(t))throw Error(ye(418));e=Nr(n.nextSibling);var i=Jn;e&&a0(t,e)?i_(i,n):(t.flags=t.flags&-4097|2,Gt=!1,Jn=t)}}else{if(pf(t))throw Error(ye(418));t.flags=t.flags&-4097|2,Gt=!1,Jn=t}}}function l0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jn=t}function yl(t){if(t!==Jn)return!1;if(!Gt)return l0(t),Gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uf(t.type,t.memoizedProps)),e&&(e=Zn)){if(pf(t))throw r_(),Error(ye(418));for(;e;)i_(t,e),e=Nr(e.nextSibling)}if(l0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ye(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zn=Nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zn=null}}else Zn=Jn?Nr(t.stateNode.nextSibling):null;return!0}function r_(){for(var t=Zn;t;)t=Nr(t.nextSibling)}function Mo(){Zn=Jn=null,Gt=!1}function jh(t){xi===null?xi=[t]:xi.push(t)}var Fy=lr.ReactCurrentBatchConfig;function Qo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ye(309));var i=n.stateNode}if(!i)throw Error(ye(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ye(284));if(!n._owner)throw Error(ye(290,t))}return t}function Sl(t,e){throw t=Object.prototype.toString.call(e),Error(ye(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function c0(t){var e=t._init;return e(t._payload)}function s_(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=Or(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,v,y){return m===null||m.tag!==6?(m=Zu(v,u.mode,y),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,y){var b=v.type;return b===Js?d(u,m,v.props.children,y,v.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===wr&&c0(b)===m.type)?(y=r(m,v.props),y.ref=Qo(u,m,v),y.return=u,y):(y=lc(v.type,v.key,v.props,null,u.mode,y),y.ref=Qo(u,m,v),y.return=u,y)}function c(u,m,v,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Ju(v,u.mode,y),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function d(u,m,v,y,b){return m===null||m.tag!==7?(m=ys(v,u.mode,y,b),m.return=u,m):(m=r(m,v),m.return=u,m)}function f(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Zu(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ul:return v=lc(m.type,m.key,m.props,null,u.mode,v),v.ref=Qo(u,null,m),v.return=u,v;case Zs:return m=Ju(m,u.mode,v),m.return=u,m;case wr:var y=m._init;return f(u,y(m._payload),v)}if(ha(m)||qo(m))return m=ys(m,u.mode,v,null),m.return=u,m;Sl(u,m)}return null}function h(u,m,v,y){var b=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(u,m,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ul:return v.key===b?l(u,m,v,y):null;case Zs:return v.key===b?c(u,m,v,y):null;case wr:return b=v._init,h(u,m,b(v._payload),y)}if(ha(v)||qo(v))return b!==null?null:d(u,m,v,y,null);Sl(u,v)}return null}function p(u,m,v,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(v)||null,a(m,u,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ul:return u=u.get(y.key===null?v:y.key)||null,l(m,u,y,b);case Zs:return u=u.get(y.key===null?v:y.key)||null,c(m,u,y,b);case wr:var R=y._init;return p(u,m,v,R(y._payload),b)}if(ha(y)||qo(y))return u=u.get(v)||null,d(m,u,y,b,null);Sl(m,y)}return null}function _(u,m,v,y){for(var b=null,R=null,P=m,D=m=0,M=null;P!==null&&D<v.length;D++){P.index>D?(M=P,P=null):M=P.sibling;var x=h(u,P,v[D],y);if(x===null){P===null&&(P=M);break}t&&P&&x.alternate===null&&e(u,P),m=s(x,m,D),R===null?b=x:R.sibling=x,R=x,P=M}if(D===v.length)return n(u,P),Gt&&ls(u,D),b;if(P===null){for(;D<v.length;D++)P=f(u,v[D],y),P!==null&&(m=s(P,m,D),R===null?b=P:R.sibling=P,R=P);return Gt&&ls(u,D),b}for(P=i(u,P);D<v.length;D++)M=p(P,u,D,v[D],y),M!==null&&(t&&M.alternate!==null&&P.delete(M.key===null?D:M.key),m=s(M,m,D),R===null?b=M:R.sibling=M,R=M);return t&&P.forEach(function(N){return e(u,N)}),Gt&&ls(u,D),b}function w(u,m,v,y){var b=qo(v);if(typeof b!="function")throw Error(ye(150));if(v=b.call(v),v==null)throw Error(ye(151));for(var R=b=null,P=m,D=m=0,M=null,x=v.next();P!==null&&!x.done;D++,x=v.next()){P.index>D?(M=P,P=null):M=P.sibling;var N=h(u,P,x.value,y);if(N===null){P===null&&(P=M);break}t&&P&&N.alternate===null&&e(u,P),m=s(N,m,D),R===null?b=N:R.sibling=N,R=N,P=M}if(x.done)return n(u,P),Gt&&ls(u,D),b;if(P===null){for(;!x.done;D++,x=v.next())x=f(u,x.value,y),x!==null&&(m=s(x,m,D),R===null?b=x:R.sibling=x,R=x);return Gt&&ls(u,D),b}for(P=i(u,P);!x.done;D++,x=v.next())x=p(P,u,D,x.value,y),x!==null&&(t&&x.alternate!==null&&P.delete(x.key===null?D:x.key),m=s(x,m,D),R===null?b=x:R.sibling=x,R=x);return t&&P.forEach(function(z){return e(u,z)}),Gt&&ls(u,D),b}function g(u,m,v,y){if(typeof v=="object"&&v!==null&&v.type===Js&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ul:e:{for(var b=v.key,R=m;R!==null;){if(R.key===b){if(b=v.type,b===Js){if(R.tag===7){n(u,R.sibling),m=r(R,v.props.children),m.return=u,u=m;break e}}else if(R.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===wr&&c0(b)===R.type){n(u,R.sibling),m=r(R,v.props),m.ref=Qo(u,R,v),m.return=u,u=m;break e}n(u,R);break}else e(u,R);R=R.sibling}v.type===Js?(m=ys(v.props.children,u.mode,y,v.key),m.return=u,u=m):(y=lc(v.type,v.key,v.props,null,u.mode,y),y.ref=Qo(u,m,v),y.return=u,u=y)}return o(u);case Zs:e:{for(R=v.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=Ju(v,u.mode,y),m.return=u,u=m}return o(u);case wr:return R=v._init,g(u,m,R(v._payload),y)}if(ha(v))return _(u,m,v,y);if(qo(v))return w(u,m,v,y);Sl(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=Zu(v,u.mode,y),m.return=u,u=m),o(u)):n(u,m)}return g}var wo=s_(!0),o_=s_(!1),bc=Xr(null),Cc=null,oo=null,Yh=null;function qh(){Yh=oo=Cc=null}function $h(t){var e=bc.current;kt(bc),t._currentValue=e}function gf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function mo(t,e){Cc=t,Yh=oo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vn=!0),t.firstContext=null)}function li(t){var e=t._currentValue;if(Yh!==t)if(t={context:t,memoizedValue:e,next:null},oo===null){if(Cc===null)throw Error(ye(308));oo=t,Cc.dependencies={lanes:0,firstContext:t}}else oo=oo.next=t;return e}var ms=null;function Kh(t){ms===null?ms=[t]:ms.push(t)}function a_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kh(e)):(n.next=r.next,r.next=n),e.interleaved=n,or(t,i)}function or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Er=!1;function Zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,wt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,or(t,n)}return r=i.interleaved,r===null?(e.next=e,Kh(i)):(e.next=r.next,r.next=e),i.interleaved=e,or(t,n)}function nc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fh(t,n)}}function u0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rc(t,e,n,i){var r=t.updateQueue;Er=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,w=a;switch(h=e,p=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=Yt({},f,h);break e;case 2:Er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Es|=o,t.lanes=o,t.memoizedState=f}}function d0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ye(191,r));r.call(i)}}}var el={},Oi=Xr(el),za=Xr(el),Ba=Xr(el);function gs(t){if(t===el)throw Error(ye(174));return t}function Jh(t,e){switch(Ft(Ba,e),Ft(za,t),Ft(Oi,el),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$d(e,t)}kt(Oi),Ft(Oi,e)}function Eo(){kt(Oi),kt(za),kt(Ba)}function c_(t){gs(Ba.current);var e=gs(Oi.current),n=$d(e,t.type);e!==n&&(Ft(za,t),Ft(Oi,n))}function Qh(t){za.current===t&&(kt(Oi),kt(za))}var Xt=Xr(0);function Pc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xu=[];function ep(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var ic=lr.ReactCurrentDispatcher,ju=lr.ReactCurrentBatchConfig,ws=0,jt=null,an=null,pn=null,Lc=!1,Ma=!1,Ha=0,Oy=0;function En(){throw Error(ye(321))}function tp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ai(t[n],e[n]))return!1;return!0}function np(t,e,n,i,r,s){if(ws=s,jt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ic.current=t===null||t.memoizedState===null?Hy:Vy,t=n(i,r),Ma){s=0;do{if(Ma=!1,Ha=0,25<=s)throw Error(ye(301));s+=1,pn=an=null,e.updateQueue=null,ic.current=Gy,t=n(i,r)}while(Ma)}if(ic.current=Dc,e=an!==null&&an.next!==null,ws=0,pn=an=jt=null,Lc=!1,e)throw Error(ye(300));return t}function ip(){var t=Ha!==0;return Ha=0,t}function Li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?jt.memoizedState=pn=t:pn=pn.next=t,pn}function ci(){if(an===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=an.next;var e=pn===null?jt.memoizedState:pn.next;if(e!==null)pn=e,an=t;else{if(t===null)throw Error(ye(310));an=t,t={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},pn===null?jt.memoizedState=pn=t:pn=pn.next=t}return pn}function Va(t,e){return typeof e=="function"?e(t):e}function Yu(t){var e=ci(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=an,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((ws&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,jt.lanes|=d,Es|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ai(i,e.memoizedState)||(Vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,jt.lanes|=s,Es|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qu(t){var e=ci(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ai(s,e.memoizedState)||(Vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function u_(){}function d_(t,e){var n=jt,i=ci(),r=e(),s=!Ai(i.memoizedState,r);if(s&&(i.memoizedState=r,Vn=!0),i=i.queue,rp(p_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||pn!==null&&pn.memoizedState.tag&1){if(n.flags|=2048,Ga(9,h_.bind(null,n,i,r,e),void 0,null),mn===null)throw Error(ye(349));ws&30||f_(n,e,r)}return r}function f_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=jt.updateQueue,e===null?(e={lastEffect:null,stores:null},jt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function h_(t,e,n,i){e.value=n,e.getSnapshot=i,m_(e)&&g_(t)}function p_(t,e,n){return n(function(){m_(e)&&g_(t)})}function m_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ai(t,n)}catch{return!0}}function g_(t){var e=or(t,1);e!==null&&Ei(e,t,1,-1)}function f0(t){var e=Li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:t},e.queue=t,t=t.dispatch=By.bind(null,jt,t),[e.memoizedState,t]}function Ga(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=jt.updateQueue,e===null?(e={lastEffect:null,stores:null},jt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function v_(){return ci().memoizedState}function rc(t,e,n,i){var r=Li();jt.flags|=t,r.memoizedState=Ga(1|e,n,void 0,i===void 0?null:i)}function Jc(t,e,n,i){var r=ci();i=i===void 0?null:i;var s=void 0;if(an!==null){var o=an.memoizedState;if(s=o.destroy,i!==null&&tp(i,o.deps)){r.memoizedState=Ga(e,n,s,i);return}}jt.flags|=t,r.memoizedState=Ga(1|e,n,s,i)}function h0(t,e){return rc(8390656,8,t,e)}function rp(t,e){return Jc(2048,8,t,e)}function __(t,e){return Jc(4,2,t,e)}function x_(t,e){return Jc(4,4,t,e)}function y_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function S_(t,e,n){return n=n!=null?n.concat([t]):null,Jc(4,4,y_.bind(null,e,t),n)}function sp(){}function M_(t,e){var n=ci();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function w_(t,e){var n=ci();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function E_(t,e,n){return ws&21?(Ai(n,e)||(n=Rv(),jt.lanes|=n,Es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vn=!0),t.memoizedState=n)}function ky(t,e){var n=Lt;Lt=n!==0&&4>n?n:4,t(!0);var i=ju.transition;ju.transition={};try{t(!1),e()}finally{Lt=n,ju.transition=i}}function T_(){return ci().memoizedState}function zy(t,e,n){var i=Fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},A_(t))b_(e,n);else if(n=a_(t,e,n,i),n!==null){var r=Un();Ei(n,t,i,r),C_(n,e,i)}}function By(t,e,n){var i=Fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(A_(t))b_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ai(a,o)){var l=e.interleaved;l===null?(r.next=r,Kh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=a_(t,e,r,i),n!==null&&(r=Un(),Ei(n,t,i,r),C_(n,e,i))}}function A_(t){var e=t.alternate;return t===jt||e!==null&&e===jt}function b_(t,e){Ma=Lc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function C_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fh(t,n)}}var Dc={readContext:li,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},Hy={readContext:li,useCallback:function(t,e){return Li().memoizedState=[t,e===void 0?null:e],t},useContext:li,useEffect:h0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rc(4194308,4,y_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return rc(4,2,t,e)},useMemo:function(t,e){var n=Li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=zy.bind(null,jt,t),[i.memoizedState,t]},useRef:function(t){var e=Li();return t={current:t},e.memoizedState=t},useState:f0,useDebugValue:sp,useDeferredValue:function(t){return Li().memoizedState=t},useTransition:function(){var t=f0(!1),e=t[0];return t=ky.bind(null,t[1]),Li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=jt,r=Li();if(Gt){if(n===void 0)throw Error(ye(407));n=n()}else{if(n=e(),mn===null)throw Error(ye(349));ws&30||f_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,h0(p_.bind(null,i,s,t),[t]),i.flags|=2048,Ga(9,h_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Li(),e=mn.identifierPrefix;if(Gt){var n=er,i=Qi;n=(i&~(1<<32-wi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Oy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Vy={readContext:li,useCallback:M_,useContext:li,useEffect:rp,useImperativeHandle:S_,useInsertionEffect:__,useLayoutEffect:x_,useMemo:w_,useReducer:Yu,useRef:v_,useState:function(){return Yu(Va)},useDebugValue:sp,useDeferredValue:function(t){var e=ci();return E_(e,an.memoizedState,t)},useTransition:function(){var t=Yu(Va)[0],e=ci().memoizedState;return[t,e]},useMutableSource:u_,useSyncExternalStore:d_,useId:T_,unstable_isNewReconciler:!1},Gy={readContext:li,useCallback:M_,useContext:li,useEffect:rp,useImperativeHandle:S_,useInsertionEffect:__,useLayoutEffect:x_,useMemo:w_,useReducer:qu,useRef:v_,useState:function(){return qu(Va)},useDebugValue:sp,useDeferredValue:function(t){var e=ci();return an===null?e.memoizedState=t:E_(e,an.memoizedState,t)},useTransition:function(){var t=qu(Va)[0],e=ci().memoizedState;return[t,e]},useMutableSource:u_,useSyncExternalStore:d_,useId:T_,unstable_isNewReconciler:!1};function vi(t,e){if(t&&t.defaultProps){e=Yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Qc={isMounted:function(t){return(t=t._reactInternals)?Rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Un(),r=Fr(t),s=nr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,r),e!==null&&(Ei(e,t,r,i),nc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Un(),r=Fr(t),s=nr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,r),e!==null&&(Ei(e,t,r,i),nc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Un(),i=Fr(t),r=nr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ir(t,r,i),e!==null&&(Ei(e,t,i,n),nc(e,t,i))}};function p0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ua(n,i)||!Ua(r,s):!0}function R_(t,e,n){var i=!1,r=Hr,s=e.contextType;return typeof s=="object"&&s!==null?s=li(s):(r=Wn(e)?Ss:Ln.current,i=e.contextTypes,s=(i=i!=null)?So(t,r):Hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Qc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function m0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Qc.enqueueReplaceState(e,e.state,null)}function _f(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=li(s):(s=Wn(e)?Ss:Ln.current,r.context=So(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Qc.enqueueReplaceState(r,r.state,null),Rc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function To(t,e){try{var n="",i=e;do n+=v1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function $u(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Wy=typeof WeakMap=="function"?WeakMap:Map;function P_(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ic||(Ic=!0,Rf=i),xf(t,e)},n}function L_(t,e,n){n=nr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xf(t,e),typeof i!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function g0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Wy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=rS.bind(null,t,e,n),e.then(t,t))}function v0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nr(-1,1),e.tag=2,Ir(n,e,1))),n.lanes|=1),t)}var Xy=lr.ReactCurrentOwner,Vn=!1;function In(t,e,n,i){e.child=t===null?o_(e,null,n,i):wo(e,t.child,n,i)}function x0(t,e,n,i,r){n=n.render;var s=e.ref;return mo(e,r),i=np(t,e,n,i,s,r),n=ip(),t!==null&&!Vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ar(t,e,r)):(Gt&&n&&Wh(e),e.flags|=1,In(t,e,i,r),e.child)}function y0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!hp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,D_(t,e,s,i,r)):(t=lc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(o,i)&&t.ref===e.ref)return ar(t,e,r)}return e.flags|=1,t=Or(s,i),t.ref=e.ref,t.return=e,e.child=t}function D_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ua(s,i)&&t.ref===e.ref)if(Vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Vn=!0);else return e.lanes=t.lanes,ar(t,e,r)}return yf(t,e,n,i,r)}function N_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(lo,$n),$n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ft(lo,$n),$n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ft(lo,$n),$n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ft(lo,$n),$n|=i;return In(t,e,r,n),e.child}function I_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yf(t,e,n,i,r){var s=Wn(n)?Ss:Ln.current;return s=So(e,s),mo(e,r),n=np(t,e,n,i,s,r),i=ip(),t!==null&&!Vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ar(t,e,r)):(Gt&&i&&Wh(e),e.flags|=1,In(t,e,n,r),e.child)}function S0(t,e,n,i,r){if(Wn(n)){var s=!0;Ec(e)}else s=!1;if(mo(e,r),e.stateNode===null)sc(t,e),R_(e,n,i),_f(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=li(c):(c=Wn(n)?Ss:Ln.current,c=So(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&m0(e,o,i,c),Er=!1;var h=e.memoizedState;o.state=h,Rc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Gn.current||Er?(typeof d=="function"&&(vf(e,n,d,i),l=e.memoizedState),(a=Er||p0(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,l_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:vi(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=li(l):(l=Wn(n)?Ss:Ln.current,l=So(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&m0(e,o,i,l),Er=!1,h=e.memoizedState,o.state=h,Rc(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||Gn.current||Er?(typeof p=="function"&&(vf(e,n,p,i),_=e.memoizedState),(c=Er||p0(e,n,c,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Sf(t,e,n,i,s,r)}function Sf(t,e,n,i,r,s){I_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&o0(e,n,!1),ar(t,e,s);i=e.stateNode,Xy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=wo(e,t.child,null,s),e.child=wo(e,null,a,s)):In(t,e,a,s),e.memoizedState=i.state,r&&o0(e,n,!0),e.child}function U_(t){var e=t.stateNode;e.pendingContext?s0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&s0(t,e.context,!1),Jh(t,e.containerInfo)}function M0(t,e,n,i,r){return Mo(),jh(r),e.flags|=256,In(t,e,n,i),e.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function wf(t){return{baseLanes:t,cachePool:null,transitions:null}}function F_(t,e,n){var i=e.pendingProps,r=Xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ft(Xt,r&1),t===null)return mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nu(o,i,0,null),t=ys(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wf(n),e.memoizedState=Mf,t):op(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return jy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Or(a,s):(s=ys(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?wf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mf,i}return s=t.child,t=s.sibling,i=Or(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function op(t,e){return e=nu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ml(t,e,n,i){return i!==null&&jh(i),wo(e,t.child,null,n),t=op(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=$u(Error(ye(422))),Ml(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nu({mode:"visible",children:i.children},r,0,null),s=ys(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&wo(e,t.child,null,o),e.child.memoizedState=wf(o),e.memoizedState=Mf,s);if(!(e.mode&1))return Ml(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ye(419)),i=$u(s,i,void 0),Ml(t,e,o,i)}if(a=(o&t.childLanes)!==0,Vn||a){if(i=mn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,or(t,r),Ei(i,t,r,-1))}return fp(),i=$u(Error(ye(421))),Ml(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=sS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Zn=Nr(r.nextSibling),Jn=e,Gt=!0,xi=null,t!==null&&(ri[si++]=Qi,ri[si++]=er,ri[si++]=Ms,Qi=t.id,er=t.overflow,Ms=e),e=op(e,i.children),e.flags|=4096,e)}function w0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gf(t.return,e,n)}function Ku(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function O_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(In(t,e,i.children,n),i=Xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&w0(t,n,e);else if(t.tag===19)w0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ft(Xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Pc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ku(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Pc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ku(e,!0,n,null,s);break;case"together":Ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ye(153));if(e.child!==null){for(t=e.child,n=Or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yy(t,e,n){switch(e.tag){case 3:U_(e),Mo();break;case 5:c_(e);break;case 1:Wn(e.type)&&Ec(e);break;case 4:Jh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ft(bc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ft(Xt,Xt.current&1),e.flags|=128,null):n&e.child.childLanes?F_(t,e,n):(Ft(Xt,Xt.current&1),t=ar(t,e,n),t!==null?t.sibling:null);Ft(Xt,Xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return O_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ft(Xt,Xt.current),i)break;return null;case 22:case 23:return e.lanes=0,N_(t,e,n)}return ar(t,e,n)}var k_,Ef,z_,B_;k_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ef=function(){};z_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,gs(Oi.current);var s=null;switch(n){case"input":r=Xd(t,r),i=Xd(t,i),s=[];break;case"select":r=Yt({},r,{value:void 0}),i=Yt({},i,{value:void 0}),s=[];break;case"textarea":r=qd(t,r),i=qd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Mc)}Kd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};B_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ea(t,e){if(!Gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qy(t,e,n){var i=e.pendingProps;switch(Xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(e),null;case 1:return Wn(e.type)&&wc(),Tn(e),null;case 3:return i=e.stateNode,Eo(),kt(Gn),kt(Ln),ep(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xi!==null&&(Df(xi),xi=null))),Ef(t,e),Tn(e),null;case 5:Qh(e);var r=gs(Ba.current);if(n=e.type,t!==null&&e.stateNode!=null)z_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ye(166));return Tn(e),null}if(t=gs(Oi.current),yl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ni]=e,i[ka]=s,t=(e.mode&1)!==0,n){case"dialog":Ot("cancel",i),Ot("close",i);break;case"iframe":case"object":case"embed":Ot("load",i);break;case"video":case"audio":for(r=0;r<ma.length;r++)Ot(ma[r],i);break;case"source":Ot("error",i);break;case"img":case"image":case"link":Ot("error",i),Ot("load",i);break;case"details":Ot("toggle",i);break;case"input":Dm(i,s),Ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ot("invalid",i);break;case"textarea":Im(i,s),Ot("invalid",i)}Kd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&xl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xl(i.textContent,a,t),r=["children",""+a]):Ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ot("scroll",i)}switch(n){case"input":dl(i),Nm(i,s,!0);break;case"textarea":dl(i),Um(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Mc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ni]=e,t[ka]=i,k_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zd(n,i),n){case"dialog":Ot("cancel",t),Ot("close",t),r=i;break;case"iframe":case"object":case"embed":Ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<ma.length;r++)Ot(ma[r],t);r=i;break;case"source":Ot("error",t),r=i;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),r=i;break;case"details":Ot("toggle",t),r=i;break;case"input":Dm(t,i),r=Xd(t,i),Ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Yt({},i,{value:void 0}),Ot("invalid",t);break;case"textarea":Im(t,i),r=qd(t,i),Ot("invalid",t);break;default:r=i}Kd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?vv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ra(t,l):typeof l=="number"&&Ra(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ot("scroll",t):l!=null&&Ph(t,s,l,o))}switch(n){case"input":dl(t),Nm(t,i,!1);break;case"textarea":dl(t),Um(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Br(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?uo(t,!!i.multiple,s,!1):i.defaultValue!=null&&uo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Mc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tn(e),null;case 6:if(t&&e.stateNode!=null)B_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ye(166));if(n=gs(Ba.current),gs(Oi.current),yl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ni]=e,(s=i.nodeValue!==n)&&(t=Jn,t!==null))switch(t.tag){case 3:xl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ni]=e,e.stateNode=i}return Tn(e),null;case 13:if(kt(Xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Gt&&Zn!==null&&e.mode&1&&!(e.flags&128))r_(),Mo(),e.flags|=98560,s=!1;else if(s=yl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ye(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ye(317));s[Ni]=e}else Mo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Tn(e),s=!1}else xi!==null&&(Df(xi),xi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Xt.current&1?ln===0&&(ln=3):fp())),e.updateQueue!==null&&(e.flags|=4),Tn(e),null);case 4:return Eo(),Ef(t,e),t===null&&Fa(e.stateNode.containerInfo),Tn(e),null;case 10:return $h(e.type._context),Tn(e),null;case 17:return Wn(e.type)&&wc(),Tn(e),null;case 19:if(kt(Xt),s=e.memoizedState,s===null)return Tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ea(s,!1);else{if(ln!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pc(t),o!==null){for(e.flags|=128,ea(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ft(Xt,Xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Jt()>Ao&&(e.flags|=128,i=!0,ea(s,!1),e.lanes=4194304)}else{if(!i)if(t=Pc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Gt)return Tn(e),null}else 2*Jt()-s.renderingStartTime>Ao&&n!==1073741824&&(e.flags|=128,i=!0,ea(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Jt(),e.sibling=null,n=Xt.current,Ft(Xt,i?n&1|2:n&1),e):(Tn(e),null);case 22:case 23:return dp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?$n&1073741824&&(Tn(e),e.subtreeFlags&6&&(e.flags|=8192)):Tn(e),null;case 24:return null;case 25:return null}throw Error(ye(156,e.tag))}function $y(t,e){switch(Xh(e),e.tag){case 1:return Wn(e.type)&&wc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Eo(),kt(Gn),kt(Ln),ep(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qh(e),null;case 13:if(kt(Xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ye(340));Mo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return kt(Xt),null;case 4:return Eo(),null;case 10:return $h(e.type._context),null;case 22:case 23:return dp(),null;case 24:return null;default:return null}}var wl=!1,Pn=!1,Ky=typeof WeakSet=="function"?WeakSet:Set,ke=null;function ao(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){qt(t,e,i)}else n.current=null}function Tf(t,e,n){try{n()}catch(i){qt(t,e,i)}}var E0=!1;function Zy(t,e){if(lf=xc,t=Xv(),Gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cf={focusedElem:t,selectionRange:n},xc=!1,ke=e;ke!==null;)if(e=ke,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ke=t;else for(;ke!==null;){e=ke;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,g=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?w:vi(e.type,w),g);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ye(163))}}catch(y){qt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ke=t;break}ke=e.return}return _=E0,E0=!1,_}function wa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Tf(e,n,s)}r=r.next}while(r!==i)}}function eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function H_(t){var e=t.alternate;e!==null&&(t.alternate=null,H_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ni],delete e[ka],delete e[ff],delete e[Ny],delete e[Iy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function V_(t){return t.tag===5||t.tag===3||t.tag===4}function T0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||V_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Mc));else if(i!==4&&(t=t.child,t!==null))for(bf(t,e,n),t=t.sibling;t!==null;)bf(t,e,n),t=t.sibling}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}var yn=null,_i=!1;function mr(t,e,n){for(n=n.child;n!==null;)G_(t,e,n),n=n.sibling}function G_(t,e,n){if(Fi&&typeof Fi.onCommitFiberUnmount=="function")try{Fi.onCommitFiberUnmount(jc,n)}catch{}switch(n.tag){case 5:Pn||ao(n,e);case 6:var i=yn,r=_i;yn=null,mr(t,e,n),yn=i,_i=r,yn!==null&&(_i?(t=yn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):yn.removeChild(n.stateNode));break;case 18:yn!==null&&(_i?(t=yn,n=n.stateNode,t.nodeType===8?Gu(t.parentNode,n):t.nodeType===1&&Gu(t,n),Na(t)):Gu(yn,n.stateNode));break;case 4:i=yn,r=_i,yn=n.stateNode.containerInfo,_i=!0,mr(t,e,n),yn=i,_i=r;break;case 0:case 11:case 14:case 15:if(!Pn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tf(n,e,o),r=r.next}while(r!==i)}mr(t,e,n);break;case 1:if(!Pn&&(ao(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){qt(n,e,a)}mr(t,e,n);break;case 21:mr(t,e,n);break;case 22:n.mode&1?(Pn=(i=Pn)||n.memoizedState!==null,mr(t,e,n),Pn=i):mr(t,e,n);break;default:mr(t,e,n)}}function A0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ky),e.forEach(function(i){var r=oS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function hi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:yn=a.stateNode,_i=!1;break e;case 3:yn=a.stateNode.containerInfo,_i=!0;break e;case 4:yn=a.stateNode.containerInfo,_i=!0;break e}a=a.return}if(yn===null)throw Error(ye(160));G_(s,o,r),yn=null,_i=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){qt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)W_(e,t),e=e.sibling}function W_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hi(e,t),Pi(t),i&4){try{wa(3,t,t.return),eu(3,t)}catch(w){qt(t,t.return,w)}try{wa(5,t,t.return)}catch(w){qt(t,t.return,w)}}break;case 1:hi(e,t),Pi(t),i&512&&n!==null&&ao(n,n.return);break;case 5:if(hi(e,t),Pi(t),i&512&&n!==null&&ao(n,n.return),t.flags&32){var r=t.stateNode;try{Ra(r,"")}catch(w){qt(t,t.return,w)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&fv(r,s),Zd(a,o);var c=Zd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?vv(r,f):d==="dangerouslySetInnerHTML"?mv(r,f):d==="children"?Ra(r,f):Ph(r,d,f,c)}switch(a){case"input":jd(r,s);break;case"textarea":hv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?uo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?uo(r,!!s.multiple,s.defaultValue,!0):uo(r,!!s.multiple,s.multiple?[]:"",!1))}r[ka]=s}catch(w){qt(t,t.return,w)}}break;case 6:if(hi(e,t),Pi(t),i&4){if(t.stateNode===null)throw Error(ye(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(w){qt(t,t.return,w)}}break;case 3:if(hi(e,t),Pi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(w){qt(t,t.return,w)}break;case 4:hi(e,t),Pi(t);break;case 13:hi(e,t),Pi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(cp=Jt())),i&4&&A0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Pn=(c=Pn)||d,hi(e,t),Pn=c):hi(e,t),Pi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ke=t,d=t.child;d!==null;){for(f=ke=d;ke!==null;){switch(h=ke,p=h.child,h.tag){case 0:case 11:case 14:case 15:wa(4,h,h.return);break;case 1:ao(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){qt(i,n,w)}}break;case 5:ao(h,h.return);break;case 22:if(h.memoizedState!==null){C0(f);continue}}p!==null?(p.return=h,ke=p):C0(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gv("display",o))}catch(w){qt(t,t.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){qt(t,t.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:hi(e,t),Pi(t),i&4&&A0(t);break;case 21:break;default:hi(e,t),Pi(t)}}function Pi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(V_(n)){var i=n;break e}n=n.return}throw Error(ye(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ra(r,""),i.flags&=-33);var s=T0(t);Cf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=T0(t);bf(t,a,o);break;default:throw Error(ye(161))}}catch(l){qt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jy(t,e,n){ke=t,X_(t)}function X_(t,e,n){for(var i=(t.mode&1)!==0;ke!==null;){var r=ke,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||wl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Pn;a=wl;var c=Pn;if(wl=o,(Pn=l)&&!c)for(ke=r;ke!==null;)o=ke,l=o.child,o.tag===22&&o.memoizedState!==null?R0(r):l!==null?(l.return=o,ke=l):R0(r);for(;s!==null;)ke=s,X_(s),s=s.sibling;ke=r,wl=a,Pn=c}b0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ke=s):b0(t)}}function b0(t){for(;ke!==null;){var e=ke;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pn||eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Pn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:vi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&d0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}d0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Na(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ye(163))}Pn||e.flags&512&&Af(e)}catch(h){qt(e,e.return,h)}}if(e===t){ke=null;break}if(n=e.sibling,n!==null){n.return=e.return,ke=n;break}ke=e.return}}function C0(t){for(;ke!==null;){var e=ke;if(e===t){ke=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ke=n;break}ke=e.return}}function R0(t){for(;ke!==null;){var e=ke;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{eu(4,e)}catch(l){qt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){qt(e,r,l)}}var s=e.return;try{Af(e)}catch(l){qt(e,s,l)}break;case 5:var o=e.return;try{Af(e)}catch(l){qt(e,o,l)}}}catch(l){qt(e,e.return,l)}if(e===t){ke=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ke=a;break}ke=e.return}}var Qy=Math.ceil,Nc=lr.ReactCurrentDispatcher,ap=lr.ReactCurrentOwner,ai=lr.ReactCurrentBatchConfig,wt=0,mn=null,en=null,Sn=0,$n=0,lo=Xr(0),ln=0,Wa=null,Es=0,tu=0,lp=0,Ea=null,Hn=null,cp=0,Ao=1/0,Ki=null,Ic=!1,Rf=null,Ur=null,El=!1,Rr=null,Uc=0,Ta=0,Pf=null,oc=-1,ac=0;function Un(){return wt&6?Jt():oc!==-1?oc:oc=Jt()}function Fr(t){return t.mode&1?wt&2&&Sn!==0?Sn&-Sn:Fy.transition!==null?(ac===0&&(ac=Rv()),ac):(t=Lt,t!==0||(t=window.event,t=t===void 0?16:Fv(t.type)),t):1}function Ei(t,e,n,i){if(50<Ta)throw Ta=0,Pf=null,Error(ye(185));Za(t,n,i),(!(wt&2)||t!==mn)&&(t===mn&&(!(wt&2)&&(tu|=n),ln===4&&Ar(t,Sn)),Xn(t,i),n===1&&wt===0&&!(e.mode&1)&&(Ao=Jt()+500,Zc&&jr()))}function Xn(t,e){var n=t.callbackNode;F1(t,e);var i=_c(t,t===mn?Sn:0);if(i===0)n!==null&&km(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&km(n),e===1)t.tag===0?Uy(P0.bind(null,t)):t_(P0.bind(null,t)),Ly(function(){!(wt&6)&&jr()}),n=null;else{switch(Pv(i)){case 1:n=Uh;break;case 4:n=bv;break;case 16:n=vc;break;case 536870912:n=Cv;break;default:n=vc}n=Q_(n,j_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j_(t,e){if(oc=-1,ac=0,wt&6)throw Error(ye(327));var n=t.callbackNode;if(go()&&t.callbackNode!==n)return null;var i=_c(t,t===mn?Sn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Fc(t,i);else{e=i;var r=wt;wt|=2;var s=q_();(mn!==t||Sn!==e)&&(Ki=null,Ao=Jt()+500,xs(t,e));do try{nS();break}catch(a){Y_(t,a)}while(!0);qh(),Nc.current=s,wt=r,en!==null?e=0:(mn=null,Sn=0,e=ln)}if(e!==0){if(e===2&&(r=nf(t),r!==0&&(i=r,e=Lf(t,r))),e===1)throw n=Wa,xs(t,0),Ar(t,i),Xn(t,Jt()),n;if(e===6)Ar(t,i);else{if(r=t.current.alternate,!(i&30)&&!eS(r)&&(e=Fc(t,i),e===2&&(s=nf(t),s!==0&&(i=s,e=Lf(t,s))),e===1))throw n=Wa,xs(t,0),Ar(t,i),Xn(t,Jt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ye(345));case 2:cs(t,Hn,Ki);break;case 3:if(Ar(t,i),(i&130023424)===i&&(e=cp+500-Jt(),10<e)){if(_c(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=df(cs.bind(null,t,Hn,Ki),e);break}cs(t,Hn,Ki);break;case 4:if(Ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-wi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Jt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Qy(i/1960))-i,10<i){t.timeoutHandle=df(cs.bind(null,t,Hn,Ki),i);break}cs(t,Hn,Ki);break;case 5:cs(t,Hn,Ki);break;default:throw Error(ye(329))}}}return Xn(t,Jt()),t.callbackNode===n?j_.bind(null,t):null}function Lf(t,e){var n=Ea;return t.current.memoizedState.isDehydrated&&(xs(t,e).flags|=256),t=Fc(t,e),t!==2&&(e=Hn,Hn=n,e!==null&&Df(e)),t}function Df(t){Hn===null?Hn=t:Hn.push.apply(Hn,t)}function eS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~lp,e&=~tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wi(e),i=1<<n;t[n]=-1,e&=~i}}function P0(t){if(wt&6)throw Error(ye(327));go();var e=_c(t,0);if(!(e&1))return Xn(t,Jt()),null;var n=Fc(t,e);if(t.tag!==0&&n===2){var i=nf(t);i!==0&&(e=i,n=Lf(t,i))}if(n===1)throw n=Wa,xs(t,0),Ar(t,e),Xn(t,Jt()),n;if(n===6)throw Error(ye(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cs(t,Hn,Ki),Xn(t,Jt()),null}function up(t,e){var n=wt;wt|=1;try{return t(e)}finally{wt=n,wt===0&&(Ao=Jt()+500,Zc&&jr())}}function Ts(t){Rr!==null&&Rr.tag===0&&!(wt&6)&&go();var e=wt;wt|=1;var n=ai.transition,i=Lt;try{if(ai.transition=null,Lt=1,t)return t()}finally{Lt=i,ai.transition=n,wt=e,!(wt&6)&&jr()}}function dp(){$n=lo.current,kt(lo)}function xs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Py(n)),en!==null)for(n=en.return;n!==null;){var i=n;switch(Xh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&wc();break;case 3:Eo(),kt(Gn),kt(Ln),ep();break;case 5:Qh(i);break;case 4:Eo();break;case 13:kt(Xt);break;case 19:kt(Xt);break;case 10:$h(i.type._context);break;case 22:case 23:dp()}n=n.return}if(mn=t,en=t=Or(t.current,null),Sn=$n=e,ln=0,Wa=null,lp=tu=Es=0,Hn=Ea=null,ms!==null){for(e=0;e<ms.length;e++)if(n=ms[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ms=null}return t}function Y_(t,e){do{var n=en;try{if(qh(),ic.current=Dc,Lc){for(var i=jt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Lc=!1}if(ws=0,pn=an=jt=null,Ma=!1,Ha=0,ap.current=null,n===null||n.return===null){ln=1,Wa=e,en=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Sn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=v0(o);if(p!==null){p.flags&=-257,_0(p,o,a,s,e),p.mode&1&&g0(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var w=new Set;w.add(l),e.updateQueue=w}else _.add(l);break e}else{if(!(e&1)){g0(s,c,e),fp();break e}l=Error(ye(426))}}else if(Gt&&a.mode&1){var g=v0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),_0(g,o,a,s,e),jh(To(l,a));break e}}s=l=To(l,a),ln!==4&&(ln=2),Ea===null?Ea=[s]:Ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=P_(s,l,e);u0(s,u);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ur===null||!Ur.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=L_(s,a,e);u0(s,y);break e}}s=s.return}while(s!==null)}K_(n)}catch(b){e=b,en===n&&n!==null&&(en=n=n.return);continue}break}while(!0)}function q_(){var t=Nc.current;return Nc.current=Dc,t===null?Dc:t}function fp(){(ln===0||ln===3||ln===2)&&(ln=4),mn===null||!(Es&268435455)&&!(tu&268435455)||Ar(mn,Sn)}function Fc(t,e){var n=wt;wt|=2;var i=q_();(mn!==t||Sn!==e)&&(Ki=null,xs(t,e));do try{tS();break}catch(r){Y_(t,r)}while(!0);if(qh(),wt=n,Nc.current=i,en!==null)throw Error(ye(261));return mn=null,Sn=0,ln}function tS(){for(;en!==null;)$_(en)}function nS(){for(;en!==null&&!b1();)$_(en)}function $_(t){var e=J_(t.alternate,t,$n);t.memoizedProps=t.pendingProps,e===null?K_(t):en=e,ap.current=null}function K_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$y(n,e),n!==null){n.flags&=32767,en=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ln=6,en=null;return}}else if(n=qy(n,e,$n),n!==null){en=n;return}if(e=e.sibling,e!==null){en=e;return}en=e=t}while(e!==null);ln===0&&(ln=5)}function cs(t,e,n){var i=Lt,r=ai.transition;try{ai.transition=null,Lt=1,iS(t,e,n,i)}finally{ai.transition=r,Lt=i}return null}function iS(t,e,n,i){do go();while(Rr!==null);if(wt&6)throw Error(ye(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ye(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(O1(t,s),t===mn&&(en=mn=null,Sn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,Q_(vc,function(){return go(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ai.transition,ai.transition=null;var o=Lt;Lt=1;var a=wt;wt|=4,ap.current=null,Zy(t,n),W_(n,t),wy(cf),xc=!!lf,cf=lf=null,t.current=n,Jy(n),C1(),wt=a,Lt=o,ai.transition=s}else t.current=n;if(El&&(El=!1,Rr=t,Uc=r),s=t.pendingLanes,s===0&&(Ur=null),L1(n.stateNode),Xn(t,Jt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ic)throw Ic=!1,t=Rf,Rf=null,t;return Uc&1&&t.tag!==0&&go(),s=t.pendingLanes,s&1?t===Pf?Ta++:(Ta=0,Pf=t):Ta=0,jr(),null}function go(){if(Rr!==null){var t=Pv(Uc),e=ai.transition,n=Lt;try{if(ai.transition=null,Lt=16>t?16:t,Rr===null)var i=!1;else{if(t=Rr,Rr=null,Uc=0,wt&6)throw Error(ye(331));var r=wt;for(wt|=4,ke=t.current;ke!==null;){var s=ke,o=s.child;if(ke.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ke=c;ke!==null;){var d=ke;switch(d.tag){case 0:case 11:case 15:wa(8,d,s)}var f=d.child;if(f!==null)f.return=d,ke=f;else for(;ke!==null;){d=ke;var h=d.sibling,p=d.return;if(H_(d),d===c){ke=null;break}if(h!==null){h.return=p,ke=h;break}ke=p}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var g=w.sibling;w.sibling=null,w=g}while(w!==null)}}ke=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ke=o;else e:for(;ke!==null;){if(s=ke,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ke=u;break e}ke=s.return}}var m=t.current;for(ke=m;ke!==null;){o=ke;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ke=v;else e:for(o=m;ke!==null;){if(a=ke,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:eu(9,a)}}catch(b){qt(a,a.return,b)}if(a===o){ke=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ke=y;break e}ke=a.return}}if(wt=r,jr(),Fi&&typeof Fi.onPostCommitFiberRoot=="function")try{Fi.onPostCommitFiberRoot(jc,t)}catch{}i=!0}return i}finally{Lt=n,ai.transition=e}}return!1}function L0(t,e,n){e=To(n,e),e=P_(t,e,1),t=Ir(t,e,1),e=Un(),t!==null&&(Za(t,1,e),Xn(t,e))}function qt(t,e,n){if(t.tag===3)L0(t,t,n);else for(;e!==null;){if(e.tag===3){L0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ur===null||!Ur.has(i))){t=To(n,t),t=L_(e,t,1),e=Ir(e,t,1),t=Un(),e!==null&&(Za(e,1,t),Xn(e,t));break}}e=e.return}}function rS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Un(),t.pingedLanes|=t.suspendedLanes&n,mn===t&&(Sn&n)===n&&(ln===4||ln===3&&(Sn&130023424)===Sn&&500>Jt()-cp?xs(t,0):lp|=n),Xn(t,e)}function Z_(t,e){e===0&&(t.mode&1?(e=pl,pl<<=1,!(pl&130023424)&&(pl=4194304)):e=1);var n=Un();t=or(t,e),t!==null&&(Za(t,e,n),Xn(t,n))}function sS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Z_(t,n)}function oS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ye(314))}i!==null&&i.delete(e),Z_(t,n)}var J_;J_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gn.current)Vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vn=!1,Yy(t,e,n);Vn=!!(t.flags&131072)}else Vn=!1,Gt&&e.flags&1048576&&n_(e,Ac,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sc(t,e),t=e.pendingProps;var r=So(e,Ln.current);mo(e,n),r=np(null,e,i,t,r,n);var s=ip();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wn(i)?(s=!0,Ec(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zh(e),r.updater=Qc,e.stateNode=r,r._reactInternals=e,_f(e,i,t,n),e=Sf(null,e,i,!0,s,n)):(e.tag=0,Gt&&s&&Wh(e),In(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(sc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=lS(i),t=vi(i,t),r){case 0:e=yf(null,e,i,t,n);break e;case 1:e=S0(null,e,i,t,n);break e;case 11:e=x0(null,e,i,t,n);break e;case 14:e=y0(null,e,i,vi(i.type,t),n);break e}throw Error(ye(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),yf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),S0(t,e,i,r,n);case 3:e:{if(U_(e),t===null)throw Error(ye(387));i=e.pendingProps,s=e.memoizedState,r=s.element,l_(t,e),Rc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=To(Error(ye(423)),e),e=M0(t,e,i,n,r);break e}else if(i!==r){r=To(Error(ye(424)),e),e=M0(t,e,i,n,r);break e}else for(Zn=Nr(e.stateNode.containerInfo.firstChild),Jn=e,Gt=!0,xi=null,n=o_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mo(),i===r){e=ar(t,e,n);break e}In(t,e,i,n)}e=e.child}return e;case 5:return c_(e),t===null&&mf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,uf(i,r)?o=null:s!==null&&uf(i,s)&&(e.flags|=32),I_(t,e),In(t,e,o,n),e.child;case 6:return t===null&&mf(e),null;case 13:return F_(t,e,n);case 4:return Jh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=wo(e,null,i,n):In(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),x0(t,e,i,r,n);case 7:return In(t,e,e.pendingProps,n),e.child;case 8:return In(t,e,e.pendingProps.children,n),e.child;case 12:return In(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ft(bc,i._currentValue),i._currentValue=o,s!==null)if(Ai(s.value,o)){if(s.children===r.children&&!Gn.current){e=ar(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=nr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ye(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}In(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,mo(e,n),r=li(r),i=i(r),e.flags|=1,In(t,e,i,n),e.child;case 14:return i=e.type,r=vi(i,e.pendingProps),r=vi(i.type,r),y0(t,e,i,r,n);case 15:return D_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),sc(t,e),e.tag=1,Wn(i)?(t=!0,Ec(e)):t=!1,mo(e,n),R_(e,i,r),_f(e,i,r,n),Sf(null,e,i,!0,t,n);case 19:return O_(t,e,n);case 22:return N_(t,e,n)}throw Error(ye(156,e.tag))};function Q_(t,e){return Av(t,e)}function aS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(t,e,n,i){return new aS(t,e,n,i)}function hp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lS(t){if(typeof t=="function")return hp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dh)return 11;if(t===Nh)return 14}return 2}function Or(t,e){var n=t.alternate;return n===null?(n=oi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function lc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")hp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Js:return ys(n.children,r,s,e);case Lh:o=8,r|=8;break;case Hd:return t=oi(12,n,e,r|2),t.elementType=Hd,t.lanes=s,t;case Vd:return t=oi(13,n,e,r),t.elementType=Vd,t.lanes=s,t;case Gd:return t=oi(19,n,e,r),t.elementType=Gd,t.lanes=s,t;case cv:return nu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case av:o=10;break e;case lv:o=9;break e;case Dh:o=11;break e;case Nh:o=14;break e;case wr:o=16,i=null;break e}throw Error(ye(130,t==null?t:typeof t,""))}return e=oi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ys(t,e,n,i){return t=oi(7,t,i,e),t.lanes=n,t}function nu(t,e,n,i){return t=oi(22,t,i,e),t.elementType=cv,t.lanes=n,t.stateNode={isHidden:!1},t}function Zu(t,e,n){return t=oi(6,t,null,e),t.lanes=n,t}function Ju(t,e,n){return e=oi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Du(0),this.expirationTimes=Du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pp(t,e,n,i,r,s,o,a,l){return t=new cS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=oi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zh(s),t}function uS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ex(t){if(!t)return Hr;t=t._reactInternals;e:{if(Rs(t)!==t||t.tag!==1)throw Error(ye(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ye(171))}if(t.tag===1){var n=t.type;if(Wn(n))return e_(t,n,e)}return e}function tx(t,e,n,i,r,s,o,a,l){return t=pp(n,i,!0,t,r,s,o,a,l),t.context=ex(null),n=t.current,i=Un(),r=Fr(n),s=nr(i,r),s.callback=e??null,Ir(n,s,r),t.current.lanes=r,Za(t,r,i),Xn(t,i),t}function iu(t,e,n,i){var r=e.current,s=Un(),o=Fr(r);return n=ex(n),e.context===null?e.context=n:e.pendingContext=n,e=nr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ir(r,e,o),t!==null&&(Ei(t,r,o,s),nc(t,r,o)),o}function Oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function D0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mp(t,e){D0(t,e),(t=t.alternate)&&D0(t,e)}function dS(){return null}var nx=typeof reportError=="function"?reportError:function(t){console.error(t)};function gp(t){this._internalRoot=t}ru.prototype.render=gp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ye(409));iu(t,e,null,null)};ru.prototype.unmount=gp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ts(function(){iu(null,t,null,null)}),e[sr]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=Nv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tr.length&&e!==0&&e<Tr[n].priority;n++);Tr.splice(n,0,t),n===0&&Uv(t)}};function vp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function N0(){}function fS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Oc(o);s.call(c)}}var o=tx(e,i,t,0,null,!1,!1,"",N0);return t._reactRootContainer=o,t[sr]=o.current,Fa(t.nodeType===8?t.parentNode:t),Ts(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Oc(l);a.call(c)}}var l=pp(t,0,!1,null,null,!1,!1,"",N0);return t._reactRootContainer=l,t[sr]=l.current,Fa(t.nodeType===8?t.parentNode:t),Ts(function(){iu(e,l,n,i)}),l}function ou(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Oc(o);a.call(l)}}iu(e,o,t,r)}else o=fS(n,e,t,r,i);return Oc(o)}Lv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=pa(e.pendingLanes);n!==0&&(Fh(e,n|1),Xn(e,Jt()),!(wt&6)&&(Ao=Jt()+500,jr()))}break;case 13:Ts(function(){var i=or(t,1);if(i!==null){var r=Un();Ei(i,t,1,r)}}),mp(t,1)}};Oh=function(t){if(t.tag===13){var e=or(t,134217728);if(e!==null){var n=Un();Ei(e,t,134217728,n)}mp(t,134217728)}};Dv=function(t){if(t.tag===13){var e=Fr(t),n=or(t,e);if(n!==null){var i=Un();Ei(n,t,e,i)}mp(t,e)}};Nv=function(){return Lt};Iv=function(t,e){var n=Lt;try{return Lt=t,e()}finally{Lt=n}};Qd=function(t,e,n){switch(e){case"input":if(jd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kc(i);if(!r)throw Error(ye(90));dv(i),jd(i,r)}}}break;case"textarea":hv(t,n);break;case"select":e=n.value,e!=null&&uo(t,!!n.multiple,e,!1)}};yv=up;Sv=Ts;var hS={usingClientEntryPoint:!1,Events:[Qa,no,Kc,_v,xv,up]},ta={findFiberByHostInstance:ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pS={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ev(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||dS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{jc=Tl.inject(pS),Fi=Tl}catch{}}ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hS;ei.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vp(e))throw Error(ye(200));return uS(t,e,null,n)};ei.createRoot=function(t,e){if(!vp(t))throw Error(ye(299));var n=!1,i="",r=nx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pp(t,1,!1,null,null,n,!1,i,r),t[sr]=e.current,Fa(t.nodeType===8?t.parentNode:t),new gp(e)};ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ye(188)):(t=Object.keys(t).join(","),Error(ye(268,t)));return t=Ev(e),t=t===null?null:t.stateNode,t};ei.flushSync=function(t){return Ts(t)};ei.hydrate=function(t,e,n){if(!su(e))throw Error(ye(200));return ou(null,t,e,!0,n)};ei.hydrateRoot=function(t,e,n){if(!vp(t))throw Error(ye(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=nx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tx(e,null,t,1,n??null,r,!1,s,o),t[sr]=e.current,Fa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ru(e)};ei.render=function(t,e,n){if(!su(e))throw Error(ye(200));return ou(null,t,e,!1,n)};ei.unmountComponentAtNode=function(t){if(!su(t))throw Error(ye(40));return t._reactRootContainer?(Ts(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[sr]=null})}),!0):!1};ei.unstable_batchedUpdates=up;ei.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!su(n))throw Error(ye(200));if(t==null||t._reactInternals===void 0)throw Error(ye(38));return ou(t,e,n,!1,i)};ei.version="18.3.1-next-f1338f8080-20240426";function ix(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ix)}catch(t){console.error(t)}}ix(),iv.exports=ei;var mS=iv.exports,rx,I0=mS;rx=I0.createRoot,I0.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _p="180",gS=0,U0=1,vS=2,sx=1,ox=2,$i=3,Vr=0,jn=1,yi=2,kr=0,vo=1,F0=2,O0=3,k0=4,_S=5,fs=100,xS=101,yS=102,SS=103,MS=104,wS=200,ES=201,TS=202,AS=203,Nf=204,If=205,bS=206,CS=207,RS=208,PS=209,LS=210,DS=211,NS=212,IS=213,US=214,Uf=0,Ff=1,Of=2,bo=3,kf=4,zf=5,Bf=6,Hf=7,xp=0,FS=1,OS=2,zr=0,kS=1,zS=2,BS=3,ax=4,HS=5,VS=6,GS=7,lx=300,Co=301,Ro=302,Vf=303,Gf=304,au=306,kc=1e3,vs=1001,Wf=1002,Ti=1003,WS=1004,Al=1005,Ii=1006,Qu=1007,_s=1008,zi=1009,cx=1010,ux=1011,Xa=1012,yp=1013,As=1014,tr=1015,tl=1016,Sp=1017,Mp=1018,ja=1020,dx=35902,fx=35899,hx=1021,px=1022,Mi=1023,Ya=1026,qa=1027,mx=1028,wp=1029,gx=1030,Ep=1031,Tp=1033,cc=33776,uc=33777,dc=33778,fc=33779,Xf=35840,jf=35841,Yf=35842,qf=35843,$f=36196,Kf=37492,Zf=37496,Jf=37808,Qf=37809,eh=37810,th=37811,nh=37812,ih=37813,rh=37814,sh=37815,oh=37816,ah=37817,lh=37818,ch=37819,uh=37820,dh=37821,fh=36492,hh=36494,ph=36495,mh=36283,gh=36284,vh=36285,_h=36286,XS=3200,jS=3201,Ap=0,YS=1,br="",Bn="srgb",Po="srgb-linear",zc="linear",Nt="srgb",Os=7680,z0=519,qS=512,$S=513,KS=514,vx=515,ZS=516,JS=517,QS=518,eM=519,B0=35044,H0="300 es",Ui=2e3,Bc=2001;class Uo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=Math.PI/180,xh=180/Math.PI;function nl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[t&255]+An[t>>8&255]+An[t>>16&255]+An[t>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[n&63|128]+An[n>>8&255]+"-"+An[n>>16&255]+An[n>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function ht(t,e,n){return Math.max(e,Math.min(n,t))}function tM(t,e){return(t%e+e)%e}function td(t,e,n){return(1-n)*t+n*e}function na(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function zn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class il{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],w=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=w;return}if(f!==w||l!==h||c!==p||d!==_){let g=1-a;const u=l*h+c*p+d*_+f*w,m=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const b=Math.sqrt(v),R=Math.atan2(b,u*m);g=Math.sin(g*R)/b,a=Math.sin(a*R)/b}const y=a*m;if(l=l*g+h*y,c=c*g+p*y,d=d*g+_*y,f=f*g+w*y,g===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=b,c*=b,d*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+d*f+l*p-c*h,e[n+1]=l*_+d*h+c*f-a*p,e[n+2]=c*_+d*p+a*h-l*f,e[n+3]=d*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"YXZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"ZXY":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"ZYX":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"YZX":this._x=h*d*f+c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f-h*p*_;break;case"XZY":this._x=h*d*f-c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(V0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(V0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nd=new O,V0=new il;class at{constructor(e,n,i,r,s,o,a,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],_=i[8],w=r[0],g=r[3],u=r[6],m=r[1],v=r[4],y=r[7],b=r[2],R=r[5],P=r[8];return s[0]=o*w+a*m+l*b,s[3]=o*g+a*v+l*R,s[6]=o*u+a*y+l*P,s[1]=c*w+d*m+f*b,s[4]=c*g+d*v+f*R,s[7]=c*u+d*y+f*P,s[2]=h*w+p*m+_*b,s[5]=h*g+p*v+_*R,s[8]=h*u+p*y+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,p=c*s-o*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/_;return e[0]=f*w,e[1]=(r*c-d*i)*w,e[2]=(a*i-r*o)*w,e[3]=h*w,e[4]=(d*n-r*l)*w,e[5]=(r*s-a*n)*w,e[6]=p*w,e[7]=(i*l-c*n)*w,e[8]=(o*n-i*s)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(id.makeScale(e,n)),this}rotate(e){return this.premultiply(id.makeRotation(-e)),this}translate(e,n){return this.premultiply(id.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const id=new at;function _x(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nM(){const t=Hc("canvas");return t.style.display="block",t}const G0={};function $a(t){t in G0||(G0[t]=!0,console.warn(t))}function iM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const W0=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),X0=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rM(){const t={enabled:!0,workingColorSpace:Po,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Nt&&(r.r=ir(r.r),r.g=ir(r.g),r.b=ir(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Nt&&(r.r=_o(r.r),r.g=_o(r.g),r.b=_o(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===br?zc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $a("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $a("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Po]:{primaries:e,whitePoint:i,transfer:zc,toXYZ:W0,fromXYZ:X0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:W0,fromXYZ:X0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),t}const Tt=rM();function ir(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _o(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ks;class sM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ks===void 0&&(ks=Hc("canvas")),ks.width=e.width,ks.height=e.height;const r=ks.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ks}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ir(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ir(n[i]/255)*255):n[i]=ir(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oM=0;class bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rd(r[o].image)):s.push(rd(r[o]))}else s=rd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function rd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?sM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aM=0;const sd=new O;class Fn extends Uo{constructor(e=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,i=vs,r=vs,s=Ii,o=_s,a=Mi,l=zi,c=Fn.DEFAULT_ANISOTROPY,d=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=nl(),this.name="",this.source=new bp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case vs:e.x=e.x<0?0:1;break;case Wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case vs:e.y=e.y<0?0:1;break;case Wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=lx;Fn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],_=l[9],w=l[2],g=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-w)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+w)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(p+1)/2,b=(u+1)/2,R=(d+h)/4,P=(f+w)/4,D=(_+g)/4;return v>y&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=P/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=D/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=P/s,r=D/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(f-w)*(f-w)+(h-d)*(h-d));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(f-w)/m,this.z=(h-d)/m,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this.w=ht(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this.w=ht(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lM extends Uo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Fn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new bp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends lM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class xx extends Fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cM extends Fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(pi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(pi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=pi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(s,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bl.copy(i.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Cl.subVectors(this.max,ia),zs.subVectors(e.a,ia),Bs.subVectors(e.b,ia),Hs.subVectors(e.c,ia),gr.subVectors(Bs,zs),vr.subVectors(Hs,Bs),ts.subVectors(zs,Hs);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-ts.z,ts.y,gr.z,0,-gr.x,vr.z,0,-vr.x,ts.z,0,-ts.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-ts.y,ts.x,0];return!od(n,zs,Bs,Hs,Cl)||(n=[1,0,0,0,1,0,0,0,1],!od(n,zs,Bs,Hs,Cl))?!1:(Rl.crossVectors(gr,vr),n=[Rl.x,Rl.y,Rl.z],od(n,zs,Bs,Hs,Cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new O,new O,new O,new O,new O,new O,new O,new O],pi=new O,bl=new rl,zs=new O,Bs=new O,Hs=new O,gr=new O,vr=new O,ts=new O,ia=new O,Cl=new O,Rl=new O,ns=new O;function od(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ns.fromArray(t,s);const a=r.x*Math.abs(ns.x)+r.y*Math.abs(ns.y)+r.z*Math.abs(ns.z),l=e.dot(ns),c=n.dot(ns),d=i.dot(ns);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const uM=new rl,ra=new O,ad=new O;class lu{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const n=ra.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(ad)),this.expandByPoint(ra.copy(e.center).sub(ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xi=new O,ld=new O,Pl=new O,_r=new O,cd=new O,Ll=new O,ud=new O;class Cp{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,n),Xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ld.copy(e).add(n).multiplyScalar(.5),Pl.copy(n).sub(e).normalize(),_r.copy(this.origin).sub(ld);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Pl),a=_r.dot(this.direction),l=-_r.dot(Pl),c=_r.lengthSq(),d=Math.abs(1-o*o);let f,h,p,_;if(d>0)if(f=o*l-a,h=o*a-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const w=1/d;f*=w,h*=w,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ld).addScaledVector(Pl,h),p}intersectSphere(e,n){Xi.subVectors(e.center,this.origin);const i=Xi.dot(this.direction),r=Xi.dot(Xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,n,i,r,s){cd.subVectors(n,e),Ll.subVectors(i,e),ud.crossVectors(cd,Ll);let o=this.direction.dot(ud),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_r.subVectors(this.origin,e);const l=a*this.direction.dot(Ll.crossVectors(_r,Ll));if(l<0)return null;const c=a*this.direction.dot(cd.cross(_r));if(c<0||l+c>o)return null;const d=-a*_r.dot(ud);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,n,i,r,s,o,a,l,c,d,f,h,p,_,w,g){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,p,_,w,g)}set(e,n,i,r,s,o,a,l,c,d,f,h,p,_,w,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=_,u[11]=w,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Vs.setFromMatrixColumn(e,0).length(),s=1/Vs.setFromMatrixColumn(e,1).length(),o=1/Vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*f,_=a*d,w=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-w*c,n[9]=-a*l,n[2]=w-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,_=c*d,w=c*f;n[0]=h+w*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-_,n[6]=w+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,_=c*d,w=c*f;n[0]=h-w*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*d,n[9]=w-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,_=a*d,w=a*f;n[0]=l*d,n[4]=_*c-p,n[8]=h*c+w,n[1]=l*f,n[5]=w*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,w=a*c;n[0]=l*d,n[4]=w-h*f,n[8]=_*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+_,n[10]=h-w*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,w=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+w,n[5]=o*d,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*d,n[10]=w*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dM,e,fM)}lookAt(e,n,i){const r=this.elements;return Yn.subVectors(e,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),xr.crossVectors(i,Yn),xr.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),xr.crossVectors(i,Yn)),xr.normalize(),Dl.crossVectors(Yn,xr),r[0]=xr.x,r[4]=Dl.x,r[8]=Yn.x,r[1]=xr.y,r[5]=Dl.y,r[9]=Yn.y,r[2]=xr.z,r[6]=Dl.z,r[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],_=i[2],w=i[6],g=i[10],u=i[14],m=i[3],v=i[7],y=i[11],b=i[15],R=r[0],P=r[4],D=r[8],M=r[12],x=r[1],N=r[5],z=r[9],$=r[13],ie=r[2],ae=r[6],B=r[10],W=r[14],F=r[3],K=r[7],ne=r[11],we=r[15];return s[0]=o*R+a*x+l*ie+c*F,s[4]=o*P+a*N+l*ae+c*K,s[8]=o*D+a*z+l*B+c*ne,s[12]=o*M+a*$+l*W+c*we,s[1]=d*R+f*x+h*ie+p*F,s[5]=d*P+f*N+h*ae+p*K,s[9]=d*D+f*z+h*B+p*ne,s[13]=d*M+f*$+h*W+p*we,s[2]=_*R+w*x+g*ie+u*F,s[6]=_*P+w*N+g*ae+u*K,s[10]=_*D+w*z+g*B+u*ne,s[14]=_*M+w*$+g*W+u*we,s[3]=m*R+v*x+y*ie+b*F,s[7]=m*P+v*N+y*ae+b*K,s[11]=m*D+v*z+y*B+b*ne,s[15]=m*M+v*$+y*W+b*we,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],_=e[3],w=e[7],g=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+w*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*d-s*l*d)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],_=e[12],w=e[13],g=e[14],u=e[15],m=f*g*c-w*h*c+w*l*p-a*g*p-f*l*u+a*h*u,v=_*h*c-d*g*c-_*l*p+o*g*p+d*l*u-o*h*u,y=d*w*c-_*f*c+_*a*p-o*w*p-d*a*u+o*f*u,b=_*f*l-d*w*l-_*a*h+o*w*h+d*a*g-o*f*g,R=n*m+i*v+r*y+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=m*P,e[1]=(w*h*s-f*g*s-w*r*p+i*g*p+f*r*u-i*h*u)*P,e[2]=(a*g*s-w*l*s+w*r*c-i*g*c-a*r*u+i*l*u)*P,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*P,e[4]=v*P,e[5]=(d*g*s-_*h*s+_*r*p-n*g*p-d*r*u+n*h*u)*P,e[6]=(_*l*s-o*g*s-_*r*c+n*g*c+o*r*u-n*l*u)*P,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*p+n*l*p)*P,e[8]=y*P,e[9]=(_*f*s-d*w*s-_*i*p+n*w*p+d*i*u-n*f*u)*P,e[10]=(o*w*s-_*a*s+_*i*c-n*w*c-o*i*u+n*a*u)*P,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*p-n*a*p)*P,e[12]=b*P,e[13]=(d*w*r-_*f*r+_*i*h-n*w*h-d*i*g+n*f*g)*P,e[14]=(_*a*r-o*w*r-_*i*l+n*w*l+o*i*g-n*a*g)*P,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,p=s*d,_=s*f,w=o*d,g=o*f,u=a*f,m=l*c,v=l*d,y=l*f,b=i.x,R=i.y,P=i.z;return r[0]=(1-(w+u))*b,r[1]=(p+y)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(p-y)*R,r[5]=(1-(h+u))*R,r[6]=(g+m)*R,r[7]=0,r[8]=(_+v)*P,r[9]=(g-m)*P,r[10]=(1-(h+w))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Vs.set(r[0],r[1],r[2]).length();const o=Vs.set(r[4],r[5],r[6]).length(),a=Vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mi.copy(this);const c=1/s,d=1/o,f=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=d,mi.elements[5]*=d,mi.elements[6]*=d,mi.elements[8]*=f,mi.elements[9]*=f,mi.elements[10]*=f,n.setFromRotationMatrix(mi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ui,l=!1){const c=this.elements,d=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let _,w;if(l)_=s/(o-s),w=o*s/(o-s);else if(a===Ui)_=-(o+s)/(o-s),w=-2*o*s/(o-s);else if(a===Bc)_=-o/(o-s),w=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ui,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,w;if(l)_=1/(o-s),w=o/(o-s);else if(a===Ui)_=-2/(o-s),w=-(o+s)/(o-s);else if(a===Bc)_=-1/(o-s),w=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vs=new O,mi=new zt,dM=new O(0,0,0),fM=new O(1,1,1),xr=new O,Dl=new O,Yn=new O,j0=new zt,Y0=new il;class bi{constructor(e=0,n=0,i=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return j0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(j0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Y0.setFromEuler(this),this.setFromQuaternion(Y0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Rp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hM=0;const q0=new O,Gs=new il,ji=new zt,Nl=new O,sa=new O,pM=new O,mM=new il,$0=new O(1,0,0),K0=new O(0,1,0),Z0=new O(0,0,1),J0={type:"added"},gM={type:"removed"},Ws={type:"childadded",child:null},dd={type:"childremoved",child:null};class gn extends Uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new O,n=new bi,i=new il,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new at}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis($0,e)}rotateY(e){return this.rotateOnAxis(K0,e)}rotateZ(e){return this.rotateOnAxis(Z0,e)}translateOnAxis(e,n){return q0.copy(e).applyQuaternion(this.quaternion),this.position.add(q0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($0,e)}translateY(e){return this.translateOnAxis(K0,e)}translateZ(e){return this.translateOnAxis(Z0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Nl.copy(e):Nl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(sa,Nl,this.up):ji.lookAt(Nl,sa,this.up),this.quaternion.setFromRotationMatrix(ji),r&&(ji.extractRotation(r.matrixWorld),Gs.setFromRotationMatrix(ji),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(J0),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gM),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(J0),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,pM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,mM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new O(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new O,Yi=new O,fd=new O,qi=new O,Xs=new O,js=new O,Q0=new O,hd=new O,pd=new O,md=new O,gd=new It,vd=new It,_d=new It;class Si{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),gi.subVectors(e,n),r.cross(gi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){gi.subVectors(r,n),Yi.subVectors(i,n),fd.subVectors(e,n);const o=gi.dot(gi),a=gi.dot(Yi),l=gi.dot(fd),c=Yi.dot(Yi),d=Yi.dot(fd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*d)*h,_=(o*d-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return gd.setScalar(0),vd.setScalar(0),_d.setScalar(0),gd.fromBufferAttribute(e,n),vd.fromBufferAttribute(e,i),_d.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(gd,s.x),o.addScaledVector(vd,s.y),o.addScaledVector(_d,s.z),o}static isFrontFacing(e,n,i,r){return gi.subVectors(i,n),Yi.subVectors(e,n),gi.cross(Yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),gi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Xs.subVectors(r,i),js.subVectors(s,i),hd.subVectors(e,i);const l=Xs.dot(hd),c=js.dot(hd);if(l<=0&&c<=0)return n.copy(i);pd.subVectors(e,r);const d=Xs.dot(pd),f=js.dot(pd);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Xs,o);md.subVectors(e,s);const p=Xs.dot(md),_=js.dot(md);if(_>=0&&p<=_)return n.copy(s);const w=p*c-l*_;if(w<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(js,a);const g=d*_-p*f;if(g<=0&&f-d>=0&&p-_>=0)return Q0.subVectors(s,r),a=(f-d)/(f-d+(p-_)),n.copy(r).addScaledVector(Q0,a);const u=1/(g+w+h);return o=w*u,a=h*u,n.copy(i).addScaledVector(Xs,o).addScaledVector(js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function xd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class pt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Tt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Tt.workingColorSpace){if(e=tM(e,1),n=ht(n,0,1),i=ht(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=xd(o,s,e+1/3),this.g=xd(o,s,e),this.b=xd(o,s,e-1/3)}return Tt.colorSpaceToWorking(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=yx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Tt.workingToColorSpace(bn.copy(this),e),Math.round(ht(bn.r*255,0,255))*65536+Math.round(ht(bn.g*255,0,255))*256+Math.round(ht(bn.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(bn.copy(this),n);const i=bn.r,r=bn.g,s=bn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(bn.copy(this),n),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Bn){Tt.workingToColorSpace(bn.copy(this),e);const n=bn.r,i=bn.g,r=bn.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+n,yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(yr),e.getHSL(Il);const i=td(yr.h,Il.h,n),r=td(yr.s,Il.s,n),s=td(yr.l,Il.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new pt;pt.NAMES=yx;let vM=0;class Ps extends Uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=vo,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nf,this.blendDst=If,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(i.blending=this.blending),this.side!==Vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nf&&(i.blendSrc=this.blendSrc),this.blendDst!==If&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cu extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new O,Ul=new je;let _M=0;class ki{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_M++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=B0,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ul.fromBufferAttribute(this,n),Ul.applyMatrix3(e),this.setXY(n,Ul.x,Ul.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=na(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=na(n,this.array)),n}setX(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=na(n,this.array)),n}setY(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=na(n,this.array)),n}setZ(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=na(n,this.array)),n}setW(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),i=zn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),i=zn(i,this.array),r=zn(r,this.array),s=zn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==B0&&(e.usage=this.usage),e}}class Sx extends ki{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Mx extends ki{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Rt extends ki{constructor(e,n,i){super(new Float32Array(e),n,i)}}let xM=0;const ii=new zt,yd=new gn,Ys=new O,qn=new rl,oa=new rl,hn=new O;class vn extends Uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_x(e)?Mx:Sx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,n,i){return ii.makeTranslation(e,n,i),this.applyMatrix4(ii),this}scale(e,n,i){return ii.makeScale(e,n,i),this.applyMatrix4(ii),this}lookAt(e){return yd.lookAt(e),yd.updateMatrix(),this.applyMatrix4(yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(qn.min,oa.min),qn.expandByPoint(hn),hn.addVectors(qn.max,oa.max),qn.expandByPoint(hn)):(qn.expandByPoint(oa.min),qn.expandByPoint(oa.max))}qn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)hn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(hn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)hn.fromBufferAttribute(a,c),l&&(Ys.fromBufferAttribute(e,c),hn.add(Ys)),r=Math.max(r,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new O,l[D]=new O;const c=new O,d=new O,f=new O,h=new je,p=new je,_=new je,w=new O,g=new O;function u(D,M,x){c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,M),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,D),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,x),d.sub(c),f.sub(c),p.sub(h),_.sub(h);const N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(w.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(N),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(N),a[D].add(w),a[M].add(w),a[x].add(w),l[D].add(g),l[M].add(g),l[x].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let D=0,M=m.length;D<M;++D){const x=m[D],N=x.start,z=x.count;for(let $=N,ie=N+z;$<ie;$+=3)u(e.getX($+0),e.getX($+1),e.getX($+2))}const v=new O,y=new O,b=new O,R=new O;function P(D){b.fromBufferAttribute(r,D),R.copy(b);const M=a[D];v.copy(M),v.sub(b.multiplyScalar(b.dot(M))).normalize(),y.crossVectors(R,M);const N=y.dot(l[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,N)}for(let D=0,M=m.length;D<M;++D){const x=m[D],N=x.start,z=x.count;for(let $=N,ie=N+z;$<ie;$+=3)P(e.getX($+0)),P(e.getX($+1)),P(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ki(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,d=new O,f=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),w=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,w),o.fromBufferAttribute(n,g),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,g),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)hn.fromBufferAttribute(e,n),hn.normalize(),e.setXYZ(n,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let p=0,_=0;for(let w=0,g=l.length;w<g;w++){a.isInterleavedBufferAttribute?p=l[w]*a.data.stride+a.offset:p=l[w]*d;for(let u=0;u<d;u++)h[_++]=c[p++]}return new ki(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eg=new zt,is=new Cp,Fl=new lu,tg=new O,Ol=new O,kl=new O,zl=new O,Sd=new O,Bl=new O,ng=new O,Hl=new O;class re extends gn{constructor(e=new vn,n=new cu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Bl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Sd.fromBufferAttribute(f,e),o?Bl.addScaledVector(Sd,d):Bl.addScaledVector(Sd.sub(n),d))}n.add(Bl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(s),is.copy(e.ray).recast(e.near),!(Fl.containsPoint(is.origin)===!1&&(is.intersectSphere(Fl,tg)===null||is.origin.distanceToSquared(tg)>(e.far-e.near)**2))&&(eg.copy(s).invert(),is.copy(e.ray).applyMatrix4(eg),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,is)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,w=h.length;_<w;_++){const g=h[_],u=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,b=v;y<b;y+=3){const R=a.getX(y),P=a.getX(y+1),D=a.getX(y+2);r=Vl(this,u,e,i,c,d,f,R,P,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),w=Math.min(a.count,p.start+p.count);for(let g=_,u=w;g<u;g+=3){const m=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);r=Vl(this,o,e,i,c,d,f,m,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,w=h.length;_<w;_++){const g=h[_],u=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,b=v;y<b;y+=3){const R=y,P=y+1,D=y+2;r=Vl(this,u,e,i,c,d,f,R,P,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),w=Math.min(l.count,p.start+p.count);for(let g=_,u=w;g<u;g+=3){const m=g,v=g+1,y=g+2;r=Vl(this,o,e,i,c,d,f,m,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function yM(t,e,n,i,r,s,o,a){let l;if(e.side===jn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vr,a),l===null)return null;Hl.copy(a),Hl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Hl);return c<n.near||c>n.far?null:{distance:c,point:Hl.clone(),object:t}}function Vl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ol),t.getVertexPosition(l,kl),t.getVertexPosition(c,zl);const d=yM(t,e,n,i,Ol,kl,zl,ng);if(d){const f=new O;Si.getBarycoord(ng,Ol,kl,zl,f),r&&(d.uv=Si.getInterpolatedAttribute(r,a,l,c,f,new je)),s&&(d.uv1=Si.getInterpolatedAttribute(s,a,l,c,f,new je)),o&&(d.normal=Si.getInterpolatedAttribute(o,a,l,c,f,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Si.getNormal(Ol,kl,zl,h.normal),d.face=h,d.barycoord=f}return d}class sn extends vn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(f,2));function _(w,g,u,m,v,y,b,R,P,D,M){const x=y/P,N=b/D,z=y/2,$=b/2,ie=R/2,ae=P+1,B=D+1;let W=0,F=0;const K=new O;for(let ne=0;ne<B;ne++){const we=ne*N-$;for(let me=0;me<ae;me++){const Ee=me*x-z;K[w]=Ee*m,K[g]=we*v,K[u]=ie,c.push(K.x,K.y,K.z),K[w]=0,K[g]=0,K[u]=R>0?1:-1,d.push(K.x,K.y,K.z),f.push(me/P),f.push(1-ne/D),W+=1}}for(let ne=0;ne<D;ne++)for(let we=0;we<P;we++){const me=h+we+ae*ne,Ee=h+we+ae*(ne+1),nt=h+(we+1)+ae*(ne+1),X=h+(we+1)+ae*ne;l.push(me,Ee,X),l.push(Ee,nt,X),F+=6}a.addGroup(p,F,M),p+=F,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Nn(t){const e={};for(let n=0;n<t.length;n++){const i=Lo(t[n]);for(const r in i)e[r]=i[r]}return e}function SM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const MM={clone:Lo,merge:Nn};var wM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wM,this.fragmentShader=EM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=SM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ex extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new O,ig=new je,rg=new je;class Kn extends Ex{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xh*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,n){return this.getViewBounds(e,ig,rg),n.subVectors(rg,ig)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ed*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qs=-90,$s=1;class TM extends gn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kn(qs,$s,e,n);r.layers=this.layers,this.add(r);const s=new Kn(qs,$s,e,n);s.layers=this.layers,this.add(s);const o=new Kn(qs,$s,e,n);o.layers=this.layers,this.add(o);const a=new Kn(qs,$s,e,n);a.layers=this.layers,this.add(a);const l=new Kn(qs,$s,e,n);l.layers=this.layers,this.add(l);const c=new Kn(qs,$s,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Tx extends Fn{constructor(e=[],n=Co,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AM extends bs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new sn(5,5,5),s=new Gr({name:"CubemapFromEquirect",uniforms:Lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jn,blending:kr});s.uniforms.tEquirect.value=n;const o=new re(r,s),a=n.minFilter;return n.minFilter===_s&&(n.minFilter=Ii),new TM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class et extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bM={type:"move"};class Md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const w of e.hand.values()){const g=n.getJointPose(w,i),u=this._getHandJoint(c,w);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Pp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(e),this.density=n}clone(){return new Pp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class CM extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const wd=new O,RM=new O,PM=new at;class us{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wd.subVectors(i,n).cross(RM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(wd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||PM.getNormalMatrix(e),r=this.coplanarPoint(wd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new lu,LM=new je(.5,.5),Gl=new O;class Lp{constructor(e=new us,n=new us,i=new us,r=new us,s=new us,o=new us){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ui,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],f=s[5],h=s[6],p=s[7],_=s[8],w=s[9],g=s[10],u=s[11],m=s[12],v=s[13],y=s[14],b=s[15];if(r[0].setComponents(c-o,p-d,u-_,b-m).normalize(),r[1].setComponents(c+o,p+d,u+_,b+m).normalize(),r[2].setComponents(c+a,p+f,u+w,b+v).normalize(),r[3].setComponents(c-a,p-f,u-w,b-v).normalize(),i)r[4].setComponents(l,h,g,y).normalize(),r[5].setComponents(c-l,p-h,u-g,b-y).normalize();else if(r[4].setComponents(c-l,p-h,u-g,b-y).normalize(),n===Ui)r[5].setComponents(c+l,p+h,u+g,b+y).normalize();else if(n===Bc)r[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const n=LM.distanceTo(e.center);return rs.radius=.7071067811865476+n,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Gl.x=r.normal.x>0?e.max.x:e.min.x,Gl.y=r.normal.y>0?e.max.y:e.min.y,Gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yh extends Ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vc=new O,Gc=new O,sg=new zt,aa=new Cp,Wl=new lu,Ed=new O,og=new O;class ag extends gn{constructor(e=new vn,n=new yh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Vc.fromBufferAttribute(n,r-1),Gc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Vc.distanceTo(Gc);e.setAttribute("lineDistance",new Rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(r),Wl.radius+=s,e.ray.intersectsSphere(Wl)===!1)return;sg.copy(r).invert(),aa.copy(e.ray).applyMatrix4(sg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let w=p,g=_-1;w<g;w+=c){const u=d.getX(w),m=d.getX(w+1),v=Xl(this,e,aa,l,u,m,w);v&&n.push(v)}if(this.isLineLoop){const w=d.getX(_-1),g=d.getX(p),u=Xl(this,e,aa,l,w,g,_-1);u&&n.push(u)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let w=p,g=_-1;w<g;w+=c){const u=Xl(this,e,aa,l,w,w+1,w);u&&n.push(u)}if(this.isLineLoop){const w=Xl(this,e,aa,l,_-1,p,_-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Vc.fromBufferAttribute(a,r),Gc.fromBufferAttribute(a,s),n.distanceSqToSegment(Vc,Gc,Ed,og)>i)return;Ed.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Ed);if(!(c<e.near||c>e.far))return{distance:c,point:og.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class DM extends Fn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ax extends Fn{constructor(e,n,i=As,r,s,o,a=Ti,l=Ti,c,d=Ya,f=1){if(d!==Ya&&d!==qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class bx extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rn extends vn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],d=n/2,f=Math.PI/2*e,h=n,p=2*f+h,_=i*2+s,w=r+1,g=new O,u=new O;for(let m=0;m<=_;m++){let v=0,y=0,b=0,R=0;if(m<=i){const M=m/i,x=M*Math.PI/2;y=-d-e*Math.cos(x),b=e*Math.sin(x),R=-e*Math.cos(x),v=M*f}else if(m<=i+s){const M=(m-i)/s;y=-d+M*n,b=e,R=0,v=f+M*h}else{const M=(m-i-s)/i,x=M*Math.PI/2;y=d+e*Math.sin(x),b=e*Math.cos(x),R=e*Math.sin(x),v=f+h+M*f}const P=Math.max(0,Math.min(1,v/p));let D=0;m===0?D=.5/r:m===_&&(D=-.5/r);for(let M=0;M<=r;M++){const x=M/r,N=x*Math.PI*2,z=Math.sin(N),$=Math.cos(N);u.x=-b*$,u.y=y,u.z=b*z,a.push(u.x,u.y,u.z),g.set(-b*$,R,b*z),g.normalize(),l.push(g.x,g.y,g.z),c.push(x+D,P)}if(m>0){const M=(m-1)*w;for(let x=0;x<r;x++){const N=M+x,z=M+x+1,$=m*w+x,ie=m*w+x+1;o.push(N,z,$),o.push(z,ie,$)}}}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class xo extends vn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new O,d=new je;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(a,3)),this.setAttribute("uv",new Rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vt extends vn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],p=[];let _=0;const w=[],g=i/2;let u=0;m(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(p,2));function m(){const y=new O,b=new O;let R=0;const P=(n-e)/i;for(let D=0;D<=s;D++){const M=[],x=D/s,N=x*(n-e)+e;for(let z=0;z<=r;z++){const $=z/r,ie=$*l+a,ae=Math.sin(ie),B=Math.cos(ie);b.x=N*ae,b.y=-x*i+g,b.z=N*B,f.push(b.x,b.y,b.z),y.set(ae,P,B).normalize(),h.push(y.x,y.y,y.z),p.push($,1-x),M.push(_++)}w.push(M)}for(let D=0;D<r;D++)for(let M=0;M<s;M++){const x=w[M][D],N=w[M+1][D],z=w[M+1][D+1],$=w[M][D+1];(e>0||M!==0)&&(d.push(x,N,$),R+=3),(n>0||M!==s-1)&&(d.push(N,z,$),R+=3)}c.addGroup(u,R,0),u+=R}function v(y){const b=_,R=new je,P=new O;let D=0;const M=y===!0?e:n,x=y===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,g*x,0),h.push(0,x,0),p.push(.5,.5),_++;const N=_;for(let z=0;z<=r;z++){const ie=z/r*l+a,ae=Math.cos(ie),B=Math.sin(ie);P.x=M*B,P.y=g*x,P.z=M*ae,f.push(P.x,P.y,P.z),h.push(0,x,0),R.x=ae*.5+.5,R.y=B*.5*x+.5,p.push(R.x,R.y),_++}for(let z=0;z<r;z++){const $=b+z,ie=N+z;y===!0?d.push(ie,ie+1,$):d.push(ie+1,ie,$),D+=3}c.addGroup(u,D,y===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cn extends Vt{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Cn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dp extends vn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const v=new O,y=new O,b=new O;for(let R=0;R<n.length;R+=3)p(n[R+0],v),p(n[R+1],y),p(n[R+2],b),l(v,y,b,m)}function l(m,v,y,b){const R=b+1,P=[];for(let D=0;D<=R;D++){P[D]=[];const M=m.clone().lerp(y,D/R),x=v.clone().lerp(y,D/R),N=R-D;for(let z=0;z<=N;z++)z===0&&D===R?P[D][z]=M:P[D][z]=M.clone().lerp(x,z/N)}for(let D=0;D<R;D++)for(let M=0;M<2*(R-D)-1;M++){const x=Math.floor(M/2);M%2===0?(h(P[D][x+1]),h(P[D+1][x]),h(P[D][x])):(h(P[D][x+1]),h(P[D+1][x+1]),h(P[D+1][x]))}}function c(m){const v=new O;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(m),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function d(){const m=new O;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const y=g(m)/2/Math.PI+.5,b=u(m)/Math.PI+.5;o.push(y,1-b)}_(),f()}function f(){for(let m=0;m<o.length;m+=6){const v=o[m+0],y=o[m+2],b=o[m+4],R=Math.max(v,y,b),P=Math.min(v,y,b);R>.9&&P<.1&&(v<.2&&(o[m+0]+=1),y<.2&&(o[m+2]+=1),b<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,v){const y=m*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function _(){const m=new O,v=new O,y=new O,b=new O,R=new je,P=new je,D=new je;for(let M=0,x=0;M<s.length;M+=9,x+=6){m.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),R.set(o[x+0],o[x+1]),P.set(o[x+2],o[x+3]),D.set(o[x+4],o[x+5]),b.copy(m).add(v).add(y).divideScalar(3);const N=g(b);w(R,x+0,m,N),w(P,x+2,v,N),w(D,x+4,y,N)}}function w(m,v,y,b){b<0&&m.x===1&&(o[v]=m.x-1),y.x===0&&y.z===0&&(o[v]=b/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dp(e.vertices,e.indices,e.radius,e.details)}}class Zt extends Dp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Zt(e.radius,e.detail)}}class cr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],h=i[r+1]-d,p=(o-d)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new je:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new O,r=[],s=[],o=[],a=new O,l=new zt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ht(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(ht(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Cx extends cr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new je){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*d-p*f+this.aX,c=h*f+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class NM extends Cx{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Np(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,f){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+f)+(l-a)/f;h*=d,p*=d,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const jl=new O,Td=new Np,Ad=new Np,bd=new Np;class Sh extends cr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new O){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(jl.subVectors(r[0],r[1]).add(r[0]),c=jl);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(jl.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=jl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),w=Math.pow(f.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(d),p);w<1e-4&&(w=1),_<1e-4&&(_=w),g<1e-4&&(g=w),Td.initNonuniformCatmullRom(c.x,f.x,h.x,d.x,_,w,g),Ad.initNonuniformCatmullRom(c.y,f.y,h.y,d.y,_,w,g),bd.initNonuniformCatmullRom(c.z,f.z,h.z,d.z,_,w,g)}else this.curveType==="catmullrom"&&(Td.initCatmullRom(c.x,f.x,h.x,d.x,this.tension),Ad.initCatmullRom(c.y,f.y,h.y,d.y,this.tension),bd.initCatmullRom(c.z,f.z,h.z,d.z,this.tension));return i.set(Td.calc(l),Ad.calc(l),bd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function IM(t,e){const n=1-t;return n*n*e}function UM(t,e){return 2*(1-t)*t*e}function FM(t,e){return t*t*e}function Aa(t,e,n,i){return IM(t,e)+UM(t,n)+FM(t,i)}function OM(t,e){const n=1-t;return n*n*n*e}function kM(t,e){const n=1-t;return 3*n*n*t*e}function zM(t,e){return 3*(1-t)*t*t*e}function BM(t,e){return t*t*t*e}function ba(t,e,n,i,r){return OM(t,e)+kM(t,n)+zM(t,i)+BM(t,r)}class HM extends cr{constructor(e=new je,n=new je,i=new je,r=new je){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new je){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ba(e,r.x,s.x,o.x,a.x),ba(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class VM extends cr{constructor(e=new O,n=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ba(e,r.x,s.x,o.x,a.x),ba(e,r.y,s.y,o.y,a.y),ba(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class GM extends cr{constructor(e=new je,n=new je){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new je){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new je){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class WM extends cr{constructor(e=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new O){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class XM extends cr{constructor(e=new je,n=new je,i=new je){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new je){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Aa(e,r.x,s.x,o.x),Aa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rx extends cr{constructor(e=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Aa(e,r.x,s.x,o.x),Aa(e,r.y,s.y,o.y),Aa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jM extends cr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new je){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(lg(a,l.x,c.x,d.x,f.x),lg(a,l.y,c.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new je().fromArray(r))}return this}}var YM=Object.freeze({__proto__:null,ArcCurve:NM,CatmullRomCurve3:Sh,CubicBezierCurve:HM,CubicBezierCurve3:VM,EllipseCurve:Cx,LineCurve:GM,LineCurve3:WM,QuadraticBezierCurve:XM,QuadraticBezierCurve3:Rx,SplineCurve:jM});class Ji extends vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,p=[],_=[],w=[],g=[];for(let u=0;u<d;u++){const m=u*h-o;for(let v=0;v<c;v++){const y=v*f-s;_.push(y,-m,0),w.push(0,0,1),g.push(v/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const v=m+c*u,y=m+c*(u+1),b=m+1+c*(u+1),R=m+1+c*u;p.push(v,y,R),p.push(y,b,R)}this.setIndex(p),this.setAttribute("position",new Rt(_,3)),this.setAttribute("normal",new Rt(w,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.widthSegments,e.heightSegments)}}class on extends vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new O,h=new O,p=[],_=[],w=[],g=[];for(let u=0;u<=i;u++){const m=[],v=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let b=0;b<=n;b++){const R=b/n;f.x=-e*Math.cos(r+R*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+R*s)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),w.push(h.x,h.y,h.z),g.push(R+y,1-v),m.push(c++)}d.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const v=d[u][m+1],y=d[u][m],b=d[u+1][m],R=d[u+1][m+1];(u!==0||o>0)&&p.push(v,y,R),(u!==i-1||l<Math.PI)&&p.push(y,b,R)}this.setIndex(p),this.setAttribute("position",new Rt(_,3)),this.setAttribute("normal",new Rt(w,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rn extends vn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new O,f=new O,h=new O;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const w=_/r*s,g=p/i*Math.PI*2;f.x=(e+n*Math.cos(g))*Math.cos(w),f.y=(e+n*Math.cos(g))*Math.sin(w),f.z=n*Math.sin(g),a.push(f.x,f.y,f.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const w=(r+1)*p+_-1,g=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,m=(r+1)*p+_;o.push(w,g,m),o.push(g,u,m)}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Wc extends vn{constructor(e=new Rx(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,l=new O,c=new je;let d=new O;const f=[],h=[],p=[],_=[];w(),this.setIndex(_),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(p,2));function w(){for(let v=0;v<n;v++)g(v);g(s===!1?n:0),m(),u()}function g(v){d=e.getPointAt(v/n,d);const y=o.normals[v],b=o.binormals[v];for(let R=0;R<=r;R++){const P=R/r*Math.PI*2,D=Math.sin(P),M=-Math.cos(P);l.x=M*y.x+D*b.x,l.y=M*y.y+D*b.y,l.z=M*y.z+D*b.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let v=1;v<=n;v++)for(let y=1;y<=r;y++){const b=(r+1)*(v-1)+(y-1),R=(r+1)*v+(y-1),P=(r+1)*v+y,D=(r+1)*(v-1)+y;_.push(b,R,D),_.push(R,P,D)}}function m(){for(let v=0;v<=n;v++)for(let y=0;y<=r;y++)c.x=v/n,c.y=y/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Wc(new YM[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class yt extends Ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ap,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cg extends Ps{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ap,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qM extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $M extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ip extends gn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class KM extends Ip{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Cd=new zt,ug=new O,dg=new O;class Px{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lp,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ug.setFromMatrixPosition(e.matrixWorld),n.position.copy(ug),dg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(dg),n.updateMatrixWorld(),Cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fg=new zt,la=new O,Rd=new O;class ZM extends Px{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),la.setFromMatrixPosition(e.matrixWorld),i.position.copy(la),Rd.copy(i.position),Rd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Rd),i.updateMatrixWorld(),r.makeTranslation(-la.x,-la.y,-la.z),fg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fg,i.coordinateSystem,i.reversedDepth)}}class ca extends Ip{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ZM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Lx extends Ex{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class JM extends Px{constructor(){super(new Lx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hg extends Ip{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new JM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class QM extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const pg=new zt;class e2{constructor(e,n,i=0,r=1/0){this.ray=new Cp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Rp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return pg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pg),this}intersectObject(e,n=!0,i=[]){return Mh(e,this,i,n),i.sort(mg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Mh(e[r],this,i,n);return i.sort(mg),i}}function mg(t,e){return t.distance-e.distance}function Mh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Mh(s[o],e,n,!0)}}function gg(t,e,n,i){const r=t2(i);switch(n){case hx:return t*e;case mx:return t*e/r.components*r.byteLength;case wp:return t*e/r.components*r.byteLength;case gx:return t*e*2/r.components*r.byteLength;case Ep:return t*e*2/r.components*r.byteLength;case px:return t*e*3/r.components*r.byteLength;case Mi:return t*e*4/r.components*r.byteLength;case Tp:return t*e*4/r.components*r.byteLength;case cc:case uc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case dc:case fc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jf:case qf:return Math.max(t,16)*Math.max(e,8)/4;case Xf:case Yf:return Math.max(t,8)*Math.max(e,8)/2;case $f:case Kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case oh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case uh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case dh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case fh:case hh:case ph:return Math.ceil(t/4)*Math.ceil(e/4)*16;case mh:case gh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case vh:case _h:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function t2(t){switch(t){case zi:case cx:return{byteLength:1,components:1};case Xa:case ux:case tl:return{byteLength:2,components:1};case Sp:case Mp:return{byteLength:2,components:4};case As:case yp:case tr:return{byteLength:4,components:1};case dx:case fx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_p}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_p);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function n2(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],w=f[p];w.start<=_.start+_.count+1?_.count=Math.max(_.count,w.start+w.count-_.start):(++h,f[h]=w)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const w=f[p];t.bufferSubData(c,w.start*d.BYTES_PER_ELEMENT,d,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var i2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r2=`#ifdef USE_ALPHAHASH
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
#endif`,s2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c2=`#ifdef USE_AOMAP
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
#endif`,u2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d2=`#ifdef USE_BATCHING
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
#endif`,f2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,h2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g2=`#ifdef USE_IRIDESCENCE
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
#endif`,v2=`#ifdef USE_BUMPMAP
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
#endif`,_2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,T2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,A2=`#define PI 3.141592653589793
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
} // validated`,b2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C2=`vec3 transformedNormal = objectNormal;
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
#endif`,R2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N2="gl_FragColor = linearToOutputTexel( gl_FragColor );",I2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U2=`#ifdef USE_ENVMAP
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
#endif`,F2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O2=`#ifdef USE_ENVMAP
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
#endif`,k2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z2=`#ifdef USE_ENVMAP
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
#endif`,B2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W2=`#ifdef USE_GRADIENTMAP
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
}`,X2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q2=`uniform bool receiveShadow;
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
#endif`,$2=`#ifdef USE_ENVMAP
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
#endif`,K2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ew=`PhysicalMaterial material;
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
#endif`,tw=`struct PhysicalMaterial {
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
}`,nw=`
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
#endif`,iw=`#if defined( RE_IndirectDiffuse )
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
#endif`,rw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ow=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fw=`#if defined( USE_POINTS_UV )
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
#endif`,hw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_w=`#ifdef USE_MORPHTARGETS
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
#endif`,xw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ew=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tw=`#ifdef USE_NORMALMAP
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
#endif`,Aw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ow=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hw=`float getShadowMask() {
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
}`,Vw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gw=`#ifdef USE_SKINNING
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
#endif`,Ww=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xw=`#ifdef USE_SKINNING
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
#endif`,jw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$w=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kw=`#ifdef USE_TRANSMISSION
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
#endif`,Zw=`#ifdef USE_TRANSMISSION
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
#endif`,Jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iE=`uniform sampler2D t2D;
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`#include <common>
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
}`,cE=`#if DEPTH_PACKING == 3200
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
}`,uE=`#define DISTANCE
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
}`,dE=`#define DISTANCE
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
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`uniform float scale;
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
}`,mE=`uniform vec3 diffuse;
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
}`,gE=`#include <common>
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
}`,vE=`uniform vec3 diffuse;
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
}`,_E=`#define LAMBERT
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
}`,xE=`#define LAMBERT
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
}`,yE=`#define MATCAP
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
}`,SE=`#define MATCAP
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
}`,ME=`#define NORMAL
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
}`,wE=`#define NORMAL
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
}`,EE=`#define PHONG
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
}`,TE=`#define PHONG
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
}`,AE=`#define STANDARD
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
}`,bE=`#define STANDARD
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
}`,CE=`#define TOON
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
}`,RE=`#define TOON
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
}`,PE=`uniform float size;
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
}`,LE=`uniform vec3 diffuse;
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
}`,DE=`#include <common>
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
}`,NE=`uniform vec3 color;
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
}`,IE=`uniform float rotation;
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
}`,UE=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:i2,alphahash_pars_fragment:r2,alphamap_fragment:s2,alphamap_pars_fragment:o2,alphatest_fragment:a2,alphatest_pars_fragment:l2,aomap_fragment:c2,aomap_pars_fragment:u2,batching_pars_vertex:d2,batching_vertex:f2,begin_vertex:h2,beginnormal_vertex:p2,bsdfs:m2,iridescence_fragment:g2,bumpmap_pars_fragment:v2,clipping_planes_fragment:_2,clipping_planes_pars_fragment:x2,clipping_planes_pars_vertex:y2,clipping_planes_vertex:S2,color_fragment:M2,color_pars_fragment:w2,color_pars_vertex:E2,color_vertex:T2,common:A2,cube_uv_reflection_fragment:b2,defaultnormal_vertex:C2,displacementmap_pars_vertex:R2,displacementmap_vertex:P2,emissivemap_fragment:L2,emissivemap_pars_fragment:D2,colorspace_fragment:N2,colorspace_pars_fragment:I2,envmap_fragment:U2,envmap_common_pars_fragment:F2,envmap_pars_fragment:O2,envmap_pars_vertex:k2,envmap_physical_pars_fragment:$2,envmap_vertex:z2,fog_vertex:B2,fog_pars_vertex:H2,fog_fragment:V2,fog_pars_fragment:G2,gradientmap_pars_fragment:W2,lightmap_pars_fragment:X2,lights_lambert_fragment:j2,lights_lambert_pars_fragment:Y2,lights_pars_begin:q2,lights_toon_fragment:K2,lights_toon_pars_fragment:Z2,lights_phong_fragment:J2,lights_phong_pars_fragment:Q2,lights_physical_fragment:ew,lights_physical_pars_fragment:tw,lights_fragment_begin:nw,lights_fragment_maps:iw,lights_fragment_end:rw,logdepthbuf_fragment:sw,logdepthbuf_pars_fragment:ow,logdepthbuf_pars_vertex:aw,logdepthbuf_vertex:lw,map_fragment:cw,map_pars_fragment:uw,map_particle_fragment:dw,map_particle_pars_fragment:fw,metalnessmap_fragment:hw,metalnessmap_pars_fragment:pw,morphinstance_vertex:mw,morphcolor_vertex:gw,morphnormal_vertex:vw,morphtarget_pars_vertex:_w,morphtarget_vertex:xw,normal_fragment_begin:yw,normal_fragment_maps:Sw,normal_pars_fragment:Mw,normal_pars_vertex:ww,normal_vertex:Ew,normalmap_pars_fragment:Tw,clearcoat_normal_fragment_begin:Aw,clearcoat_normal_fragment_maps:bw,clearcoat_pars_fragment:Cw,iridescence_pars_fragment:Rw,opaque_fragment:Pw,packing:Lw,premultiplied_alpha_fragment:Dw,project_vertex:Nw,dithering_fragment:Iw,dithering_pars_fragment:Uw,roughnessmap_fragment:Fw,roughnessmap_pars_fragment:Ow,shadowmap_pars_fragment:kw,shadowmap_pars_vertex:zw,shadowmap_vertex:Bw,shadowmask_pars_fragment:Hw,skinbase_vertex:Vw,skinning_pars_vertex:Gw,skinning_vertex:Ww,skinnormal_vertex:Xw,specularmap_fragment:jw,specularmap_pars_fragment:Yw,tonemapping_fragment:qw,tonemapping_pars_fragment:$w,transmission_fragment:Kw,transmission_pars_fragment:Zw,uv_pars_fragment:Jw,uv_pars_vertex:Qw,uv_vertex:eE,worldpos_vertex:tE,background_vert:nE,background_frag:iE,backgroundCube_vert:rE,backgroundCube_frag:sE,cube_vert:oE,cube_frag:aE,depth_vert:lE,depth_frag:cE,distanceRGBA_vert:uE,distanceRGBA_frag:dE,equirect_vert:fE,equirect_frag:hE,linedashed_vert:pE,linedashed_frag:mE,meshbasic_vert:gE,meshbasic_frag:vE,meshlambert_vert:_E,meshlambert_frag:xE,meshmatcap_vert:yE,meshmatcap_frag:SE,meshnormal_vert:ME,meshnormal_frag:wE,meshphong_vert:EE,meshphong_frag:TE,meshphysical_vert:AE,meshphysical_frag:bE,meshtoon_vert:CE,meshtoon_frag:RE,points_vert:PE,points_frag:LE,shadow_vert:DE,shadow_frag:NE,sprite_vert:IE,sprite_frag:UE},Pe={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Di={basic:{uniforms:Nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Nn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Nn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Nn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Nn([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Nn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Nn([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Nn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Nn([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Nn([Pe.common,Pe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Nn([Pe.lights,Pe.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Di.physical={uniforms:Nn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Yl={r:0,b:0,g:0},ss=new bi,FE=new zt;function OE(t,e,n,i,r,s,o){const a=new pt(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:e).get(y)),y}function w(v){let y=!1;const b=_(v);b===null?u(a,l):b&&b.isColor&&(u(b,1),y=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,y){const b=_(y);b&&(b.isCubeTexture||b.mapping===au)?(d===void 0&&(d=new re(new sn(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:Lo(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),ss.copy(y.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(FE.makeRotationFromEuler(ss)),d.material.toneMapped=Tt.getTransfer(b.colorSpace)!==Nt,(f!==b||h!==b.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=b,h=b.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new re(new Ji(2,2),new Gr({name:"BackgroundMaterial",uniforms:Lo(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Tt.getTransfer(b.colorSpace)!==Nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,y){v.getRGB(Yl,wx(t)),i.buffers.color.setClear(Yl.r,Yl.g,Yl.b,y,o)}function m(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:w,addToRenderList:g,dispose:m}}function kE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,N,z,$,ie){let ae=!1;const B=f($,z,N);s!==B&&(s=B,c(s.object)),ae=p(x,$,z,ie),ae&&_(x,$,z,ie),ie!==null&&e.update(ie,t.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,y(x,N,z,$),ie!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function d(x){return t.deleteVertexArray(x)}function f(x,N,z){const $=z.wireframe===!0;let ie=i[x.id];ie===void 0&&(ie={},i[x.id]=ie);let ae=ie[N.id];ae===void 0&&(ae={},ie[N.id]=ae);let B=ae[$];return B===void 0&&(B=h(l()),ae[$]=B),B}function h(x){const N=[],z=[],$=[];for(let ie=0;ie<n;ie++)N[ie]=0,z[ie]=0,$[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:$,object:x,attributes:{},index:null}}function p(x,N,z,$){const ie=s.attributes,ae=N.attributes;let B=0;const W=z.getAttributes();for(const F in W)if(W[F].location>=0){const ne=ie[F];let we=ae[F];if(we===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(we=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(we=x.instanceColor)),ne===void 0||ne.attribute!==we||we&&ne.data!==we.data)return!0;B++}return s.attributesNum!==B||s.index!==$}function _(x,N,z,$){const ie={},ae=N.attributes;let B=0;const W=z.getAttributes();for(const F in W)if(W[F].location>=0){let ne=ae[F];ne===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor));const we={};we.attribute=ne,ne&&ne.data&&(we.data=ne.data),ie[F]=we,B++}s.attributes=ie,s.attributesNum=B,s.index=$}function w(){const x=s.newAttributes;for(let N=0,z=x.length;N<z;N++)x[N]=0}function g(x){u(x,0)}function u(x,N){const z=s.newAttributes,$=s.enabledAttributes,ie=s.attributeDivisors;z[x]=1,$[x]===0&&(t.enableVertexAttribArray(x),$[x]=1),ie[x]!==N&&(t.vertexAttribDivisor(x,N),ie[x]=N)}function m(){const x=s.newAttributes,N=s.enabledAttributes;for(let z=0,$=N.length;z<$;z++)N[z]!==x[z]&&(t.disableVertexAttribArray(z),N[z]=0)}function v(x,N,z,$,ie,ae,B){B===!0?t.vertexAttribIPointer(x,N,z,ie,ae):t.vertexAttribPointer(x,N,z,$,ie,ae)}function y(x,N,z,$){w();const ie=$.attributes,ae=z.getAttributes(),B=N.defaultAttributeValues;for(const W in ae){const F=ae[W];if(F.location>=0){let K=ie[W];if(K===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){const ne=K.normalized,we=K.itemSize,me=e.get(K);if(me===void 0)continue;const Ee=me.buffer,nt=me.type,X=me.bytesPerElement,Z=nt===t.INT||nt===t.UNSIGNED_INT||K.gpuType===yp;if(K.isInterleavedBufferAttribute){const he=K.data,Ue=he.stride,$e=K.offset;if(he.isInstancedInterleavedBuffer){for(let He=0;He<F.locationSize;He++)u(F.location+He,he.meshPerAttribute);x.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let He=0;He<F.locationSize;He++)g(F.location+He);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let He=0;He<F.locationSize;He++)v(F.location+He,we/F.locationSize,nt,ne,Ue*X,($e+we/F.locationSize*He)*X,Z)}else{if(K.isInstancedBufferAttribute){for(let he=0;he<F.locationSize;he++)u(F.location+he,K.meshPerAttribute);x.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let he=0;he<F.locationSize;he++)g(F.location+he);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let he=0;he<F.locationSize;he++)v(F.location+he,we/F.locationSize,nt,ne,we*X,we/F.locationSize*he*X,Z)}}else if(B!==void 0){const ne=B[W];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(F.location,ne);break;case 3:t.vertexAttrib3fv(F.location,ne);break;case 4:t.vertexAttrib4fv(F.location,ne);break;default:t.vertexAttrib1fv(F.location,ne)}}}}m()}function b(){D();for(const x in i){const N=i[x];for(const z in N){const $=N[z];for(const ie in $)d($[ie].object),delete $[ie];delete N[z]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const N=i[x.id];for(const z in N){const $=N[z];for(const ie in $)d($[ie].object),delete $[ie];delete N[z]}delete i[x.id]}function P(x){for(const N in i){const z=i[N];if(z[x.id]===void 0)continue;const $=z[x.id];for(const ie in $)d($[ie].object),delete $[ie];delete z[x.id]}}function D(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:g,disableUnusedAttributes:m}}function zE(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let _=0;_<f;_++)p+=d[_];n.update(p,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],d[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let _=0;for(let w=0;w<f;w++)_+=d[w]*h[w];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function BE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Mi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===tl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==zi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==tr&&!D)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:w,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:b,maxSamples:R}}function HE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new us,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,w=f.clipIntersection,g=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?d(null):c();else{const m=s?0:i,v=m*4;let y=u.clippingState||null;l.value=y,y=d(_,h,v,p);for(let b=0;b!==v;++b)y[b]=n[b];u.clippingState=y,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,_){const w=f!==null?f.length:0;let g=null;if(w!==0){if(g=l.value,_!==!0||g===null){const u=p+w*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<u)&&(g=new Float32Array(u));for(let v=0,y=p;v!==w;++v,y+=4)o.copy(f[v]).applyMatrix4(m,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,g}}function VE(t){let e=new WeakMap;function n(o,a){return a===Vf?o.mapping=Co:a===Gf&&(o.mapping=Ro),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vf||a===Gf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new AM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const co=4,vg=[.125,.215,.35,.446,.526,.582],hs=20,Pd=new Lx,_g=new pt;let Ld=null,Dd=0,Nd=0,Id=!1;const ds=(1+Math.sqrt(5))/2,Ks=1/ds,xg=[new O(-ds,Ks,0),new O(ds,Ks,0),new O(-Ks,0,ds),new O(Ks,0,ds),new O(0,ds,-Ks),new O(0,ds,Ks),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],GE=new O;class yg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=GE}=s;Ld=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ld,Dd,Nd),this._renderer.xr.enabled=Id,e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Co||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ld=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:tl,format:Mi,colorSpace:Po,depthBuffer:!1},r=Sg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WE(s)),this._blurMaterial=XE(s,e,n)}return r}_compileMaterial(e){const n=new re(this._lodPlanes[0],e);this._renderer.compile(n,Pd)}_sceneToCubeUV(e,n,i,r,s){const l=new Kn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(_g),f.toneMapping=zr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const w=new cu({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),g=new re(new sn,w);let u=!1;const m=e.background;m?m.isColor&&(w.color.copy(m),e.background=null,u=!0):(w.color.copy(_g),u=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[v],s.y,s.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[v]));const b=this._cubeSize;ql(r,y*b,v>2?b:0,b,b),f.setRenderTarget(r),u&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Co||e.mapping===Ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ql(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Pd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xg[(r-s-1)%xg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new re(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hs-1),w=s/_,g=isFinite(s)?1+Math.floor(d*w):hs;g>hs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hs}`);const u=[];let m=0;for(let P=0;P<hs;++P){const D=P/w,M=Math.exp(-D*D/2);u.push(M),P===0?m+=M:P<g&&(m+=2*M)}for(let P=0;P<u.length;P++)u[P]=u[P]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const y=this._sizeLods[r],b=3*y*(r>v-co?r-v+co:0),R=4*(this._cubeSize-y);ql(n,b,R,3*y,2*y),l.setRenderTarget(n),l.render(f,Pd)}}function WE(t){const e=[],n=[],i=[];let r=t;const s=t-co+1+vg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-co?l=vg[o-t+co-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,_=6,w=3,g=2,u=1,m=new Float32Array(w*_*p),v=new Float32Array(g*_*p),y=new Float32Array(u*_*p);for(let R=0;R<p;R++){const P=R%3*2/3-1,D=R>2?0:-1,M=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];m.set(M,w*_*R),v.set(h,g*_*R);const x=[R,R,R,R,R,R];y.set(x,u*_*R)}const b=new vn;b.setAttribute("position",new ki(m,w)),b.setAttribute("uv",new ki(v,g)),b.setAttribute("faceIndex",new ki(y,u)),e.push(b),r>co&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Sg(t,e,n){const i=new bs(t,e,n);return i.texture.mapping=au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ql(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function XE(t,e,n){const i=new Float32Array(hs),r=new O(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Up(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Mg(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Up(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function wg(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Up(){return`

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
	`}function jE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vf||l===Gf,d=l===Co||l===Ro;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new yg(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new yg(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function YE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&$a("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qE(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let w=0;if(p!==null){const m=p.array;w=p.version;for(let v=0,y=m.length;v<y;v+=3){const b=m[v+0],R=m[v+1],P=m[v+2];h.push(b,R,R,P,P,b)}}else if(_!==void 0){const m=_.array;w=_.version;for(let v=0,y=m.length/3-1;v<y;v+=3){const b=v+0,R=v+1,P=v+2;h.push(b,R,R,P,P,b)}}else return;const g=new(_x(h)?Mx:Sx)(h,1);g.version=w;const u=s.get(f);u&&e.remove(u),s.set(f,g)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function $E(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function d(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let g=0;for(let u=0;u<_;u++)g+=p[u];n.update(g,i,1)}function f(h,p,_,w){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],w[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,w,0,_);let u=0;for(let m=0;m<_;m++)u+=p[m]*w[m];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function KE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ZE(t,e,n){const i=new WeakMap,r=new It;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let x=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),w===!0&&(y=2),g===!0&&(y=3);let b=a.attributes.position.count*y,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const P=new Float32Array(b*R*4*f),D=new xx(P,b,R,f);D.type=tr,D.needsUpdate=!0;const M=y*4;for(let N=0;N<f;N++){const z=u[N],$=m[N],ie=v[N],ae=b*R*4*N;for(let B=0;B<z.count;B++){const W=B*M;_===!0&&(r.fromBufferAttribute(z,B),P[ae+W+0]=r.x,P[ae+W+1]=r.y,P[ae+W+2]=r.z,P[ae+W+3]=0),w===!0&&(r.fromBufferAttribute($,B),P[ae+W+4]=r.x,P[ae+W+5]=r.y,P[ae+W+6]=r.z,P[ae+W+7]=0),g===!0&&(r.fromBufferAttribute(ie,B),P[ae+W+8]=r.x,P[ae+W+9]=r.y,P[ae+W+10]=r.z,P[ae+W+11]=ie.itemSize===4?r.w:1)}}h={count:f,texture:D,size:new je(b,R)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const w=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",w),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function JE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Nx=new Fn,Eg=new Ax(1,1),Ix=new xx,Ux=new cM,Fx=new Tx,Tg=[],Ag=[],bg=new Float32Array(16),Cg=new Float32Array(9),Rg=new Float32Array(4);function Fo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Tg[r];if(s===void 0&&(s=new Float32Array(r),Tg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function cn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function un(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uu(t,e){let n=Ag[e];n===void 0&&(n=new Int32Array(e),Ag[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;t.uniform2fv(this.addr,e),un(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(cn(n,e))return;t.uniform3fv(this.addr,e),un(n,e)}}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;t.uniform4fv(this.addr,e),un(n,e)}}function iT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(cn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),un(n,e)}else{if(cn(n,i))return;Rg.set(i),t.uniformMatrix2fv(this.addr,!1,Rg),un(n,i)}}function rT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(cn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),un(n,e)}else{if(cn(n,i))return;Cg.set(i),t.uniformMatrix3fv(this.addr,!1,Cg),un(n,i)}}function sT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(cn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),un(n,e)}else{if(cn(n,i))return;bg.set(i),t.uniformMatrix4fv(this.addr,!1,bg),un(n,i)}}function oT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;t.uniform2iv(this.addr,e),un(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;t.uniform3iv(this.addr,e),un(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;t.uniform4iv(this.addr,e),un(n,e)}}function uT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;t.uniform2uiv(this.addr,e),un(n,e)}}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;t.uniform3uiv(this.addr,e),un(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;t.uniform4uiv(this.addr,e),un(n,e)}}function pT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Eg.compareFunction=vx,s=Eg):s=Nx,n.setTexture2D(e||s,r)}function mT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ux,r)}function gT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Fx,r)}function vT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ix,r)}function _T(t){switch(t){case 5126:return QE;case 35664:return eT;case 35665:return tT;case 35666:return nT;case 35674:return iT;case 35675:return rT;case 35676:return sT;case 5124:case 35670:return oT;case 35667:case 35671:return aT;case 35668:case 35672:return lT;case 35669:case 35673:return cT;case 5125:return uT;case 36294:return dT;case 36295:return fT;case 36296:return hT;case 35678:case 36198:case 36298:case 36306:case 35682:return pT;case 35679:case 36299:case 36307:return mT;case 35680:case 36300:case 36308:case 36293:return gT;case 36289:case 36303:case 36311:case 36292:return vT}}function xT(t,e){t.uniform1fv(this.addr,e)}function yT(t,e){const n=Fo(e,this.size,2);t.uniform2fv(this.addr,n)}function ST(t,e){const n=Fo(e,this.size,3);t.uniform3fv(this.addr,n)}function MT(t,e){const n=Fo(e,this.size,4);t.uniform4fv(this.addr,n)}function wT(t,e){const n=Fo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ET(t,e){const n=Fo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function TT(t,e){const n=Fo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function AT(t,e){t.uniform1iv(this.addr,e)}function bT(t,e){t.uniform2iv(this.addr,e)}function CT(t,e){t.uniform3iv(this.addr,e)}function RT(t,e){t.uniform4iv(this.addr,e)}function PT(t,e){t.uniform1uiv(this.addr,e)}function LT(t,e){t.uniform2uiv(this.addr,e)}function DT(t,e){t.uniform3uiv(this.addr,e)}function NT(t,e){t.uniform4uiv(this.addr,e)}function IT(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);cn(i,s)||(t.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Nx,s[o])}function UT(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);cn(i,s)||(t.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ux,s[o])}function FT(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);cn(i,s)||(t.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Fx,s[o])}function OT(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);cn(i,s)||(t.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ix,s[o])}function kT(t){switch(t){case 5126:return xT;case 35664:return yT;case 35665:return ST;case 35666:return MT;case 35674:return wT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return AT;case 35667:case 35671:return bT;case 35668:case 35672:return CT;case 35669:case 35673:return RT;case 5125:return PT;case 36294:return LT;case 36295:return DT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return OT}}class zT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_T(n.type)}}class BT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kT(n.type)}}class HT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function Pg(t,e){t.seq.push(e),t.map[e.id]=e}function VT(t,e,n){const i=t.name,r=i.length;for(Ud.lastIndex=0;;){const s=Ud.exec(i),o=Ud.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pg(n,c===void 0?new zT(a,t,e):new BT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new HT(a),Pg(n,f)),n=f}}}class hc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);VT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Lg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const GT=37297;let WT=0;function XT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Dg=new at;function jT(t){Tt._getMatrix(Dg,Tt.workingColorSpace,t);const e=`mat3( ${Dg.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(t)){case zc:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ng(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+XT(t.getShaderSource(e),a)}else return s}function YT(t,e){const n=jT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function qT(t,e){let n;switch(e){case kS:n="Linear";break;case zS:n="Reinhard";break;case BS:n="Cineon";break;case ax:n="ACESFilmic";break;case VS:n="AgX";break;case GS:n="Neutral";break;case HS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $l=new O;function $T(){Tt.getLuminanceCoefficients($l);const t=$l.x.toFixed(4),e=$l.y.toFixed(4),n=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function ZT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function JT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ga(t){return t!==""}function Ig(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ug(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(t){return t.replace(QT,tA)}const eA=new Map;function tA(t,e){let n=ct[e];if(n===void 0){const i=eA.get(e);if(i!==void 0)n=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wh(n)}const nA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fg(t){return t.replace(nA,iA)}function iA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Og(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function rA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===sx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ox?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function sA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Co:case Ro:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ro:e="ENVMAP_MODE_REFRACTION";break}return e}function aA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case xp:e="ENVMAP_BLENDING_MULTIPLY";break;case FS:e="ENVMAP_BLENDING_MIX";break;case OS:e="ENVMAP_BLENDING_ADD";break}return e}function lA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function cA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=rA(n),c=sA(n),d=oA(n),f=aA(n),h=lA(n),p=KT(n),_=ZT(s),w=r.createProgram();let g,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ga).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ga).join(`
`),u.length>0&&(u+=`
`)):(g=[Og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),u=[Og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zr?"#define TONE_MAPPING":"",n.toneMapping!==zr?ct.tonemapping_pars_fragment:"",n.toneMapping!==zr?qT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,YT("linearToOutputTexel",n.outputColorSpace),$T(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ga).join(`
`)),o=wh(o),o=Ig(o,n),o=Ug(o,n),a=wh(a),a=Ig(a,n),a=Ug(a,n),o=Fg(o),a=Fg(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===H0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===H0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=m+g+o,y=m+u+a,b=Lg(r,r.VERTEX_SHADER,v),R=Lg(r,r.FRAGMENT_SHADER,y);r.attachShader(w,b),r.attachShader(w,R),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function P(N){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(w)||"",$=r.getShaderInfoLog(b)||"",ie=r.getShaderInfoLog(R)||"",ae=z.trim(),B=$.trim(),W=ie.trim();let F=!0,K=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,w,b,R);else{const ne=Ng(r,b,"vertex"),we=Ng(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ae+`
`+ne+`
`+we)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(B===""||W==="")&&(K=!1);K&&(N.diagnostics={runnable:F,programLog:ae,vertexShader:{log:B,prefix:g},fragmentShader:{log:W,prefix:u}})}r.deleteShader(b),r.deleteShader(R),D=new hc(r,w),M=JT(r,w)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(w,GT)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=WT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=b,this.fragmentShader=R,this}let uA=0;class dA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fA(e),n.set(e,i)),i}}class fA{constructor(e){this.id=uA++,this.code=e,this.usedTimes=0}}function hA(t,e,n,i,r,s,o){const a=new Rp,l=new dA,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,x,N,z,$){const ie=z.fog,ae=$.geometry,B=M.isMeshStandardMaterial?z.environment:null,W=(M.isMeshStandardMaterial?n:e).get(M.envMap||B),F=W&&W.mapping===au?W.image.height:null,K=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ne=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,we=ne!==void 0?ne.length:0;let me=0;ae.morphAttributes.position!==void 0&&(me=1),ae.morphAttributes.normal!==void 0&&(me=2),ae.morphAttributes.color!==void 0&&(me=3);let Ee,nt,X,Z;if(K){const xt=Di[K];Ee=xt.vertexShader,nt=xt.fragmentShader}else Ee=M.vertexShader,nt=M.fragmentShader,l.update(M),X=l.getVertexShaderID(M),Z=l.getFragmentShaderID(M);const he=t.getRenderTarget(),Ue=t.state.buffers.depth.getReversed(),$e=$.isInstancedMesh===!0,He=$.isBatchedMesh===!0,lt=!!M.map,St=!!M.matcap,I=!!W,At=!!M.aoMap,rt=!!M.lightMap,Je=!!M.bumpMap,k=!!M.normalMap,Ae=!!M.displacementMap,se=!!M.emissiveMap,ce=!!M.metalnessMap,Xe=!!M.roughnessMap,Ye=M.anisotropy>0,L=M.clearcoat>0,T=M.dispersion>0,Y=M.iridescence>0,te=M.sheen>0,de=M.transmission>0,le=Ye&&!!M.anisotropyMap,Le=L&&!!M.clearcoatMap,_e=L&&!!M.clearcoatNormalMap,Ve=L&&!!M.clearcoatRoughnessMap,Ge=Y&&!!M.iridescenceMap,Se=Y&&!!M.iridescenceThicknessMap,De=te&&!!M.sheenColorMap,tt=te&&!!M.sheenRoughnessMap,We=!!M.specularMap,Re=!!M.specularColorMap,ot=!!M.specularIntensityMap,V=de&&!!M.transmissionMap,ge=de&&!!M.thicknessMap,Te=!!M.gradientMap,Fe=!!M.alphaMap,ve=M.alphaTest>0,pe=!!M.alphaHash,Be=!!M.extensions;let it=zr;M.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(it=t.toneMapping);const Dt={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:Ee,fragmentShader:nt,defines:M.defines,customVertexShaderID:X,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:He,batchingColor:He&&$._colorsTexture!==null,instancing:$e,instancingColor:$e&&$.instanceColor!==null,instancingMorph:$e&&$.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Po,alphaToCoverage:!!M.alphaToCoverage,map:lt,matcap:St,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:F,aoMap:At,lightMap:rt,bumpMap:Je,normalMap:k,displacementMap:h&&Ae,emissiveMap:se,normalMapObjectSpace:k&&M.normalMapType===YS,normalMapTangentSpace:k&&M.normalMapType===Ap,metalnessMap:ce,roughnessMap:Xe,anisotropy:Ye,anisotropyMap:le,clearcoat:L,clearcoatMap:Le,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ve,dispersion:T,iridescence:Y,iridescenceMap:Ge,iridescenceThicknessMap:Se,sheen:te,sheenColorMap:De,sheenRoughnessMap:tt,specularMap:We,specularColorMap:Re,specularIntensityMap:ot,transmission:de,transmissionMap:V,thicknessMap:ge,gradientMap:Te,opaque:M.transparent===!1&&M.blending===vo&&M.alphaToCoverage===!1,alphaMap:Fe,alphaTest:ve,alphaHash:pe,combine:M.combine,mapUv:lt&&w(M.map.channel),aoMapUv:At&&w(M.aoMap.channel),lightMapUv:rt&&w(M.lightMap.channel),bumpMapUv:Je&&w(M.bumpMap.channel),normalMapUv:k&&w(M.normalMap.channel),displacementMapUv:Ae&&w(M.displacementMap.channel),emissiveMapUv:se&&w(M.emissiveMap.channel),metalnessMapUv:ce&&w(M.metalnessMap.channel),roughnessMapUv:Xe&&w(M.roughnessMap.channel),anisotropyMapUv:le&&w(M.anisotropyMap.channel),clearcoatMapUv:Le&&w(M.clearcoatMap.channel),clearcoatNormalMapUv:_e&&w(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&w(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&w(M.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&w(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&w(M.sheenColorMap.channel),sheenRoughnessMapUv:tt&&w(M.sheenRoughnessMap.channel),specularMapUv:We&&w(M.specularMap.channel),specularColorMapUv:Re&&w(M.specularColorMap.channel),specularIntensityMapUv:ot&&w(M.specularIntensityMap.channel),transmissionMapUv:V&&w(M.transmissionMap.channel),thicknessMapUv:ge&&w(M.thicknessMap.channel),alphaMapUv:Fe&&w(M.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(k||Ye),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ae.attributes.uv&&(lt||Fe),fog:!!ie,useFog:M.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ue,skinning:$.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:me,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,decodeVideoTexture:lt&&M.map.isVideoTexture===!0&&Tt.getTransfer(M.map.colorSpace)===Nt,decodeVideoTextureEmissive:se&&M.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(M.emissiveMap.colorSpace)===Nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===yi,flipSided:M.side===jn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Be&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&M.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function u(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)x.push(N),x.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(m(x,M),v(x,M),x.push(t.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function m(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function v(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const x=_[M.type];let N;if(x){const z=Di[x];N=MM.clone(z.uniforms)}else N=M.uniforms;return N}function b(M,x){let N;for(let z=0,$=d.length;z<$;z++){const ie=d[z];if(ie.cacheKey===x){N=ie,++N.usedTimes;break}}return N===void 0&&(N=new cA(t,x,M,s),d.push(N)),N}function R(M){if(--M.usedTimes===0){const x=d.indexOf(M);d[x]=d[d.length-1],d.pop(),M.destroy()}}function P(M){l.remove(M)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:y,acquireProgram:b,releaseProgram:R,releaseShaderCache:P,programs:d,dispose:D}}function pA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function mA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function kg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,_,w,g){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:w,group:g},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=w,u.group=g),e++,u}function a(f,h,p,_,w,g){const u=o(f,h,p,_,w,g);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,_,w,g){const u=o(f,h,p,_,w,g);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||mA),i.length>1&&i.sort(h||kg),r.length>1&&r.sort(h||kg)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function gA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new zg,t.set(i,[o])):r>=s.length?(o=new zg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function vA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new pt};break;case"SpotLight":n={position:new O,direction:new O,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":n={color:new pt,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function _A(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xA=0;function yA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function SA(t){const e=new vA,n=_A(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new zt,o=new zt;function a(c){let d=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,_=0,w=0,g=0,u=0,m=0,v=0,y=0,b=0,R=0,P=0;c.sort(yA);for(let M=0,x=c.length;M<x;M++){const N=c[M],z=N.color,$=N.intensity,ie=N.distance,ae=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=z.r*$,f+=z.g*$,h+=z.b*$;else if(N.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(N.sh.coefficients[B],$);P++}else if(N.isDirectionalLight){const B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const W=N.shadow,F=n.get(N);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=N.shadow.matrix,m++}i.directional[p]=B,p++}else if(N.isSpotLight){const B=e.get(N);B.position.setFromMatrixPosition(N.matrixWorld),B.color.copy(z).multiplyScalar($),B.distance=ie,B.coneCos=Math.cos(N.angle),B.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),B.decay=N.decay,i.spot[w]=B;const W=N.shadow;if(N.map&&(i.spotLightMap[b]=N.map,b++,W.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[w]=W.matrix,N.castShadow){const F=n.get(N);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,i.spotShadow[w]=F,i.spotShadowMap[w]=ae,y++}w++}else if(N.isRectAreaLight){const B=e.get(N);B.color.copy(z).multiplyScalar($),B.halfWidth.set(N.width*.5,0,0),B.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=B,g++}else if(N.isPointLight){const B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),B.distance=N.distance,B.decay=N.decay,N.castShadow){const W=N.shadow,F=n.get(N);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,F.shadowCameraNear=W.camera.near,F.shadowCameraFar=W.camera.far,i.pointShadow[_]=F,i.pointShadowMap[_]=ae,i.pointShadowMatrix[_]=N.shadow.matrix,v++}i.point[_]=B,_++}else if(N.isHemisphereLight){const B=e.get(N);B.skyColor.copy(N.color).multiplyScalar($),B.groundColor.copy(N.groundColor).multiplyScalar($),i.hemi[u]=B,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==w||D.rectAreaLength!==g||D.hemiLength!==u||D.numDirectionalShadows!==m||D.numPointShadows!==v||D.numSpotShadows!==y||D.numSpotMaps!==b||D.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=w,i.rectArea.length=g,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,D.directionalLength=p,D.pointLength=_,D.spotLength=w,D.rectAreaLength=g,D.hemiLength=u,D.numDirectionalShadows=m,D.numPointShadows=v,D.numSpotShadows=y,D.numSpotMaps=b,D.numLightProbes=P,i.version=xA++)}function l(c,d){let f=0,h=0,p=0,_=0,w=0;const g=d.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const v=c[u];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const y=i.hemi[w];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),w++}}}return{setup:a,setupView:l,state:i}}function Bg(t){const e=new SA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function MA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Bg(t),e.set(r,[a])):s>=o.length?(a=new Bg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const wA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EA=`uniform sampler2D shadow_pass;
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
}`;function TA(t,e,n){let i=new Lp;const r=new je,s=new je,o=new It,a=new qM({depthPacking:jS}),l=new $M,c={},d=n.maxTextureSize,f={[Vr]:jn,[jn]:Vr,[yi]:yi},h=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:wA,fragmentShader:EA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new vn;_.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new re(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sx;let u=this.type;this.render=function(R,P,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const M=t.getRenderTarget(),x=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),z=t.state;z.setBlending(kr),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const $=u!==$i&&this.type===$i,ie=u===$i&&this.type!==$i;for(let ae=0,B=R.length;ae<B;ae++){const W=R[ae],F=W.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const K=F.getFrameExtents();if(r.multiply(K),s.copy(F.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/K.x),r.x=s.x*K.x,F.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/K.y),r.y=s.y*K.y,F.mapSize.y=s.y)),F.map===null||$===!0||ie===!0){const we=this.type!==$i?{minFilter:Ti,magFilter:Ti}:{};F.map!==null&&F.map.dispose(),F.map=new bs(r.x,r.y,we),F.map.texture.name=W.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const ne=F.getViewportCount();for(let we=0;we<ne;we++){const me=F.getViewport(we);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),z.viewport(o),F.updateMatrices(W,we),i=F.getFrustum(),y(P,D,F.camera,W,this.type)}F.isPointLightShadow!==!0&&this.type===$i&&m(F,D),F.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(M,x,N)};function m(R,P){const D=e.update(w);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new bs(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(P,null,D,h,w,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(P,null,D,p,w,null)}function v(R,P,D,M){let x=null;const N=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)x=N;else if(x=D.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const z=x.uuid,$=P.uuid;let ie=c[z];ie===void 0&&(ie={},c[z]=ie);let ae=ie[$];ae===void 0&&(ae=x.clone(),ie[$]=ae,P.addEventListener("dispose",b)),x=ae}if(x.visible=P.visible,x.wireframe=P.wireframe,M===$i?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:f[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=t.properties.get(x);z.light=D}return x}function y(R,P,D,M,x){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===$i)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const $=e.update(R),ie=R.material;if(Array.isArray(ie)){const ae=$.groups;for(let B=0,W=ae.length;B<W;B++){const F=ae[B],K=ie[F.materialIndex];if(K&&K.visible){const ne=v(R,K,M,x);R.onBeforeShadow(t,R,P,D,$,ne,F),t.renderBufferDirect(D,null,$,ne,R,F),R.onAfterShadow(t,R,P,D,$,ne,F)}}}else if(ie.visible){const ae=v(R,ie,M,x);R.onBeforeShadow(t,R,P,D,$,ae,null),t.renderBufferDirect(D,null,$,ae,R,null),R.onAfterShadow(t,R,P,D,$,ae,null)}}const z=R.children;for(let $=0,ie=z.length;$<ie;$++)y(z[$],P,D,M,x)}function b(R){R.target.removeEventListener("dispose",b);for(const D in c){const M=c[D],x=R.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const AA={[Uf]:Ff,[Of]:Bf,[kf]:Hf,[bo]:zf,[Ff]:Uf,[Bf]:Of,[Hf]:kf,[zf]:bo};function bA(t,e){function n(){let V=!1;const ge=new It;let Te=null;const Fe=new It(0,0,0,0);return{setMask:function(ve){Te!==ve&&!V&&(t.colorMask(ve,ve,ve,ve),Te=ve)},setLocked:function(ve){V=ve},setClear:function(ve,pe,Be,it,Dt){Dt===!0&&(ve*=it,pe*=it,Be*=it),ge.set(ve,pe,Be,it),Fe.equals(ge)===!1&&(t.clearColor(ve,pe,Be,it),Fe.copy(ge))},reset:function(){V=!1,Te=null,Fe.set(-1,0,0,0)}}}function i(){let V=!1,ge=!1,Te=null,Fe=null,ve=null;return{setReversed:function(pe){if(ge!==pe){const Be=e.get("EXT_clip_control");pe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ge=pe;const it=ve;ve=null,this.setClear(it)}},getReversed:function(){return ge},setTest:function(pe){pe?he(t.DEPTH_TEST):Ue(t.DEPTH_TEST)},setMask:function(pe){Te!==pe&&!V&&(t.depthMask(pe),Te=pe)},setFunc:function(pe){if(ge&&(pe=AA[pe]),Fe!==pe){switch(pe){case Uf:t.depthFunc(t.NEVER);break;case Ff:t.depthFunc(t.ALWAYS);break;case Of:t.depthFunc(t.LESS);break;case bo:t.depthFunc(t.LEQUAL);break;case kf:t.depthFunc(t.EQUAL);break;case zf:t.depthFunc(t.GEQUAL);break;case Bf:t.depthFunc(t.GREATER);break;case Hf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Fe=pe}},setLocked:function(pe){V=pe},setClear:function(pe){ve!==pe&&(ge&&(pe=1-pe),t.clearDepth(pe),ve=pe)},reset:function(){V=!1,Te=null,Fe=null,ve=null,ge=!1}}}function r(){let V=!1,ge=null,Te=null,Fe=null,ve=null,pe=null,Be=null,it=null,Dt=null;return{setTest:function(xt){V||(xt?he(t.STENCIL_TEST):Ue(t.STENCIL_TEST))},setMask:function(xt){ge!==xt&&!V&&(t.stencilMask(xt),ge=xt)},setFunc:function(xt,tn,ni){(Te!==xt||Fe!==tn||ve!==ni)&&(t.stencilFunc(xt,tn,ni),Te=xt,Fe=tn,ve=ni)},setOp:function(xt,tn,ni){(pe!==xt||Be!==tn||it!==ni)&&(t.stencilOp(xt,tn,ni),pe=xt,Be=tn,it=ni)},setLocked:function(xt){V=xt},setClear:function(xt){Dt!==xt&&(t.clearStencil(xt),Dt=xt)},reset:function(){V=!1,ge=null,Te=null,Fe=null,ve=null,pe=null,Be=null,it=null,Dt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],_=null,w=!1,g=null,u=null,m=null,v=null,y=null,b=null,R=null,P=new pt(0,0,0),D=0,M=!1,x=null,N=null,z=null,$=null,ie=null;const ae=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,W=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),B=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),B=W>=2);let K=null,ne={};const we=t.getParameter(t.SCISSOR_BOX),me=t.getParameter(t.VIEWPORT),Ee=new It().fromArray(we),nt=new It().fromArray(me);function X(V,ge,Te,Fe){const ve=new Uint8Array(4),pe=t.createTexture();t.bindTexture(V,pe),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<Te;Be++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,Fe,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(ge+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return pe}const Z={};Z[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(t.DEPTH_TEST),o.setFunc(bo),Je(!1),k(U0),he(t.CULL_FACE),At(kr);function he(V){d[V]!==!0&&(t.enable(V),d[V]=!0)}function Ue(V){d[V]!==!1&&(t.disable(V),d[V]=!1)}function $e(V,ge){return f[V]!==ge?(t.bindFramebuffer(V,ge),f[V]=ge,V===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ge),V===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function He(V,ge){let Te=p,Fe=!1;if(V){Te=h.get(ge),Te===void 0&&(Te=[],h.set(ge,Te));const ve=V.textures;if(Te.length!==ve.length||Te[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Be=ve.length;pe<Be;pe++)Te[pe]=t.COLOR_ATTACHMENT0+pe;Te.length=ve.length,Fe=!0}}else Te[0]!==t.BACK&&(Te[0]=t.BACK,Fe=!0);Fe&&t.drawBuffers(Te)}function lt(V){return _!==V?(t.useProgram(V),_=V,!0):!1}const St={[fs]:t.FUNC_ADD,[xS]:t.FUNC_SUBTRACT,[yS]:t.FUNC_REVERSE_SUBTRACT};St[SS]=t.MIN,St[MS]=t.MAX;const I={[wS]:t.ZERO,[ES]:t.ONE,[TS]:t.SRC_COLOR,[Nf]:t.SRC_ALPHA,[LS]:t.SRC_ALPHA_SATURATE,[RS]:t.DST_COLOR,[bS]:t.DST_ALPHA,[AS]:t.ONE_MINUS_SRC_COLOR,[If]:t.ONE_MINUS_SRC_ALPHA,[PS]:t.ONE_MINUS_DST_COLOR,[CS]:t.ONE_MINUS_DST_ALPHA,[DS]:t.CONSTANT_COLOR,[NS]:t.ONE_MINUS_CONSTANT_COLOR,[IS]:t.CONSTANT_ALPHA,[US]:t.ONE_MINUS_CONSTANT_ALPHA};function At(V,ge,Te,Fe,ve,pe,Be,it,Dt,xt){if(V===kr){w===!0&&(Ue(t.BLEND),w=!1);return}if(w===!1&&(he(t.BLEND),w=!0),V!==_S){if(V!==g||xt!==M){if((u!==fs||y!==fs)&&(t.blendEquation(t.FUNC_ADD),u=fs,y=fs),xt)switch(V){case vo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case F0:t.blendFunc(t.ONE,t.ONE);break;case O0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case k0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case vo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case F0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case O0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}m=null,v=null,b=null,R=null,P.set(0,0,0),D=0,g=V,M=xt}return}ve=ve||ge,pe=pe||Te,Be=Be||Fe,(ge!==u||ve!==y)&&(t.blendEquationSeparate(St[ge],St[ve]),u=ge,y=ve),(Te!==m||Fe!==v||pe!==b||Be!==R)&&(t.blendFuncSeparate(I[Te],I[Fe],I[pe],I[Be]),m=Te,v=Fe,b=pe,R=Be),(it.equals(P)===!1||Dt!==D)&&(t.blendColor(it.r,it.g,it.b,Dt),P.copy(it),D=Dt),g=V,M=!1}function rt(V,ge){V.side===yi?Ue(t.CULL_FACE):he(t.CULL_FACE);let Te=V.side===jn;ge&&(Te=!Te),Je(Te),V.blending===vo&&V.transparent===!1?At(kr):At(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const Fe=V.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),se(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):Ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Je(V){x!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),x=V)}function k(V){V!==gS?(he(t.CULL_FACE),V!==N&&(V===U0?t.cullFace(t.BACK):V===vS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ue(t.CULL_FACE),N=V}function Ae(V){V!==z&&(B&&t.lineWidth(V),z=V)}function se(V,ge,Te){V?(he(t.POLYGON_OFFSET_FILL),($!==ge||ie!==Te)&&(t.polygonOffset(ge,Te),$=ge,ie=Te)):Ue(t.POLYGON_OFFSET_FILL)}function ce(V){V?he(t.SCISSOR_TEST):Ue(t.SCISSOR_TEST)}function Xe(V){V===void 0&&(V=t.TEXTURE0+ae-1),K!==V&&(t.activeTexture(V),K=V)}function Ye(V,ge,Te){Te===void 0&&(K===null?Te=t.TEXTURE0+ae-1:Te=K);let Fe=ne[Te];Fe===void 0&&(Fe={type:void 0,texture:void 0},ne[Te]=Fe),(Fe.type!==V||Fe.texture!==ge)&&(K!==Te&&(t.activeTexture(Te),K=Te),t.bindTexture(V,ge||Z[V]),Fe.type=V,Fe.texture=ge)}function L(){const V=ne[K];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{t.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Y(){try{t.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(){try{t.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{t.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{t.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{t.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{t.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{t.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ge(){try{t.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{t.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(V){Ee.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),Ee.copy(V))}function tt(V){nt.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),nt.copy(V))}function We(V,ge){let Te=c.get(ge);Te===void 0&&(Te=new WeakMap,c.set(ge,Te));let Fe=Te.get(V);Fe===void 0&&(Fe=t.getUniformBlockIndex(ge,V.name),Te.set(V,Fe))}function Re(V,ge){const Fe=c.get(ge).get(V);l.get(ge)!==Fe&&(t.uniformBlockBinding(ge,Fe,V.__bindingPointIndex),l.set(ge,Fe))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},K=null,ne={},f={},h=new WeakMap,p=[],_=null,w=!1,g=null,u=null,m=null,v=null,y=null,b=null,R=null,P=new pt(0,0,0),D=0,M=!1,x=null,N=null,z=null,$=null,ie=null,Ee.set(0,0,t.canvas.width,t.canvas.height),nt.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Ue,bindFramebuffer:$e,drawBuffers:He,useProgram:lt,setBlending:At,setMaterial:rt,setFlipSided:Je,setCullFace:k,setLineWidth:Ae,setPolygonOffset:se,setScissorTest:ce,activeTexture:Xe,bindTexture:Ye,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:Y,texImage2D:Ge,texImage3D:Se,updateUBOMapping:We,uniformBlockBinding:Re,texStorage2D:_e,texStorage3D:Ve,texSubImage2D:te,texSubImage3D:de,compressedTexSubImage2D:le,compressedTexSubImage3D:Le,scissor:De,viewport:tt,reset:ot}}function CA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,T){return p?new OffscreenCanvas(L,T):Hc("canvas")}function w(L,T,Y){let te=1;const de=Ye(L);if((de.width>Y||de.height>Y)&&(te=Y/Math.max(de.width,de.height)),te<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const le=Math.floor(te*de.width),Le=Math.floor(te*de.height);f===void 0&&(f=_(le,Le));const _e=T?_(le,Le):f;return _e.width=le,_e.height=Le,_e.getContext("2d").drawImage(L,0,0,le,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+le+"x"+Le+")."),_e}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),L;return L}function g(L){return L.generateMipmaps}function u(L){t.generateMipmap(L)}function m(L){return L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?t.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(L,T,Y,te,de=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let le=T;if(T===t.RED&&(Y===t.FLOAT&&(le=t.R32F),Y===t.HALF_FLOAT&&(le=t.R16F),Y===t.UNSIGNED_BYTE&&(le=t.R8)),T===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(le=t.R8UI),Y===t.UNSIGNED_SHORT&&(le=t.R16UI),Y===t.UNSIGNED_INT&&(le=t.R32UI),Y===t.BYTE&&(le=t.R8I),Y===t.SHORT&&(le=t.R16I),Y===t.INT&&(le=t.R32I)),T===t.RG&&(Y===t.FLOAT&&(le=t.RG32F),Y===t.HALF_FLOAT&&(le=t.RG16F),Y===t.UNSIGNED_BYTE&&(le=t.RG8)),T===t.RG_INTEGER&&(Y===t.UNSIGNED_BYTE&&(le=t.RG8UI),Y===t.UNSIGNED_SHORT&&(le=t.RG16UI),Y===t.UNSIGNED_INT&&(le=t.RG32UI),Y===t.BYTE&&(le=t.RG8I),Y===t.SHORT&&(le=t.RG16I),Y===t.INT&&(le=t.RG32I)),T===t.RGB_INTEGER&&(Y===t.UNSIGNED_BYTE&&(le=t.RGB8UI),Y===t.UNSIGNED_SHORT&&(le=t.RGB16UI),Y===t.UNSIGNED_INT&&(le=t.RGB32UI),Y===t.BYTE&&(le=t.RGB8I),Y===t.SHORT&&(le=t.RGB16I),Y===t.INT&&(le=t.RGB32I)),T===t.RGBA_INTEGER&&(Y===t.UNSIGNED_BYTE&&(le=t.RGBA8UI),Y===t.UNSIGNED_SHORT&&(le=t.RGBA16UI),Y===t.UNSIGNED_INT&&(le=t.RGBA32UI),Y===t.BYTE&&(le=t.RGBA8I),Y===t.SHORT&&(le=t.RGBA16I),Y===t.INT&&(le=t.RGBA32I)),T===t.RGB&&(Y===t.UNSIGNED_INT_5_9_9_9_REV&&(le=t.RGB9_E5),Y===t.UNSIGNED_INT_10F_11F_11F_REV&&(le=t.R11F_G11F_B10F)),T===t.RGBA){const Le=de?zc:Tt.getTransfer(te);Y===t.FLOAT&&(le=t.RGBA32F),Y===t.HALF_FLOAT&&(le=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(le=Le===Nt?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function y(L,T){let Y;return L?T===null||T===As||T===ja?Y=t.DEPTH24_STENCIL8:T===tr?Y=t.DEPTH32F_STENCIL8:T===Xa&&(Y=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===As||T===ja?Y=t.DEPTH_COMPONENT24:T===tr?Y=t.DEPTH_COMPONENT32F:T===Xa&&(Y=t.DEPTH_COMPONENT16),Y}function b(L,T){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ti&&L.minFilter!==Ii?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function R(L){const T=L.target;T.removeEventListener("dispose",R),D(T),T.isVideoTexture&&d.delete(T)}function P(L){const T=L.target;T.removeEventListener("dispose",P),x(T)}function D(L){const T=i.get(L);if(T.__webglInit===void 0)return;const Y=L.source,te=h.get(Y);if(te){const de=te[T.__cacheKey];de.usedTimes--,de.usedTimes===0&&M(L),Object.keys(te).length===0&&h.delete(Y)}i.remove(L)}function M(L){const T=i.get(L);t.deleteTexture(T.__webglTexture);const Y=L.source,te=h.get(Y);delete te[T.__cacheKey],o.memory.textures--}function x(L){const T=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(T.__webglFramebuffer[te]))for(let de=0;de<T.__webglFramebuffer[te].length;de++)t.deleteFramebuffer(T.__webglFramebuffer[te][de]);else t.deleteFramebuffer(T.__webglFramebuffer[te]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[te])}else{if(Array.isArray(T.__webglFramebuffer))for(let te=0;te<T.__webglFramebuffer.length;te++)t.deleteFramebuffer(T.__webglFramebuffer[te]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let te=0;te<T.__webglColorRenderbuffer.length;te++)T.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[te]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=L.textures;for(let te=0,de=Y.length;te<de;te++){const le=i.get(Y[te]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(Y[te])}i.remove(L)}let N=0;function z(){N=0}function $(){const L=N;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),N+=1,L}function ie(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ae(L,T){const Y=i.get(L);if(L.isVideoTexture&&ce(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){const te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Y,L,T);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+T)}function B(L,T){const Y=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){Z(Y,L,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+T)}function W(L,T){const Y=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){Z(Y,L,T);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+T)}function F(L,T){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){he(Y,L,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+T)}const K={[kc]:t.REPEAT,[vs]:t.CLAMP_TO_EDGE,[Wf]:t.MIRRORED_REPEAT},ne={[Ti]:t.NEAREST,[WS]:t.NEAREST_MIPMAP_NEAREST,[Al]:t.NEAREST_MIPMAP_LINEAR,[Ii]:t.LINEAR,[Qu]:t.LINEAR_MIPMAP_NEAREST,[_s]:t.LINEAR_MIPMAP_LINEAR},we={[qS]:t.NEVER,[eM]:t.ALWAYS,[$S]:t.LESS,[vx]:t.LEQUAL,[KS]:t.EQUAL,[QS]:t.GEQUAL,[ZS]:t.GREATER,[JS]:t.NOTEQUAL};function me(L,T){if(T.type===tr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ii||T.magFilter===Qu||T.magFilter===Al||T.magFilter===_s||T.minFilter===Ii||T.minFilter===Qu||T.minFilter===Al||T.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,K[T.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,K[T.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,K[T.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,ne[T.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,ne[T.minFilter]),T.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,we[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ti||T.minFilter!==Al&&T.minFilter!==_s||T.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(L,T){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",R));const te=T.source;let de=h.get(te);de===void 0&&(de={},h.set(te,de));const le=ie(T);if(le!==L.__cacheKey){de[le]===void 0&&(de[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),de[le].usedTimes++;const Le=de[L.__cacheKey];Le!==void 0&&(de[L.__cacheKey].usedTimes--,Le.usedTimes===0&&M(T)),L.__cacheKey=le,L.__webglTexture=de[le].texture}return Y}function nt(L,T,Y){return Math.floor(Math.floor(L/Y)/T)}function X(L,T,Y,te){const le=L.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,T.width,T.height,Y,te,T.data);else{le.sort((Se,De)=>Se.start-De.start);let Le=0;for(let Se=1;Se<le.length;Se++){const De=le[Le],tt=le[Se],We=De.start+De.count,Re=nt(tt.start,T.width,4),ot=nt(De.start,T.width,4);tt.start<=We+1&&Re===ot&&nt(tt.start+tt.count-1,T.width,4)===Re?De.count=Math.max(De.count,tt.start+tt.count-De.start):(++Le,le[Le]=tt)}le.length=Le+1;const _e=t.getParameter(t.UNPACK_ROW_LENGTH),Ve=t.getParameter(t.UNPACK_SKIP_PIXELS),Ge=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,T.width);for(let Se=0,De=le.length;Se<De;Se++){const tt=le[Se],We=Math.floor(tt.start/4),Re=Math.ceil(tt.count/4),ot=We%T.width,V=Math.floor(We/T.width),ge=Re,Te=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(t.UNPACK_SKIP_ROWS,V),n.texSubImage2D(t.TEXTURE_2D,0,ot,V,ge,Te,Y,te,T.data)}L.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,_e),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ge)}}function Z(L,T,Y){let te=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=t.TEXTURE_3D);const de=Ee(L,T),le=T.source;n.bindTexture(te,L.__webglTexture,t.TEXTURE0+Y);const Le=i.get(le);if(le.version!==Le.__version||de===!0){n.activeTexture(t.TEXTURE0+Y);const _e=Tt.getPrimaries(Tt.workingColorSpace),Ve=T.colorSpace===br?null:Tt.getPrimaries(T.colorSpace),Ge=T.colorSpace===br||_e===Ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let Se=w(T.image,!1,r.maxTextureSize);Se=Xe(T,Se);const De=s.convert(T.format,T.colorSpace),tt=s.convert(T.type);let We=v(T.internalFormat,De,tt,T.colorSpace,T.isVideoTexture);me(te,T);let Re;const ot=T.mipmaps,V=T.isVideoTexture!==!0,ge=Le.__version===void 0||de===!0,Te=le.dataReady,Fe=b(T,Se);if(T.isDepthTexture)We=y(T.format===qa,T.type),ge&&(V?n.texStorage2D(t.TEXTURE_2D,1,We,Se.width,Se.height):n.texImage2D(t.TEXTURE_2D,0,We,Se.width,Se.height,0,De,tt,null));else if(T.isDataTexture)if(ot.length>0){V&&ge&&n.texStorage2D(t.TEXTURE_2D,Fe,We,ot[0].width,ot[0].height);for(let ve=0,pe=ot.length;ve<pe;ve++)Re=ot[ve],V?Te&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Re.width,Re.height,De,tt,Re.data):n.texImage2D(t.TEXTURE_2D,ve,We,Re.width,Re.height,0,De,tt,Re.data);T.generateMipmaps=!1}else V?(ge&&n.texStorage2D(t.TEXTURE_2D,Fe,We,Se.width,Se.height),Te&&X(T,Se,De,tt)):n.texImage2D(t.TEXTURE_2D,0,We,Se.width,Se.height,0,De,tt,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,We,ot[0].width,ot[0].height,Se.depth);for(let ve=0,pe=ot.length;ve<pe;ve++)if(Re=ot[ve],T.format!==Mi)if(De!==null)if(V){if(Te)if(T.layerUpdates.size>0){const Be=gg(Re.width,Re.height,T.format,T.type);for(const it of T.layerUpdates){const Dt=Re.data.subarray(it*Be/Re.data.BYTES_PER_ELEMENT,(it+1)*Be/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,it,Re.width,Re.height,1,De,Dt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,Se.depth,De,Re.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ve,We,Re.width,Re.height,Se.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Te&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,Se.depth,De,tt,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ve,We,Re.width,Re.height,Se.depth,0,De,tt,Re.data)}else{V&&ge&&n.texStorage2D(t.TEXTURE_2D,Fe,We,ot[0].width,ot[0].height);for(let ve=0,pe=ot.length;ve<pe;ve++)Re=ot[ve],T.format!==Mi?De!==null?V?Te&&n.compressedTexSubImage2D(t.TEXTURE_2D,ve,0,0,Re.width,Re.height,De,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,ve,We,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Te&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Re.width,Re.height,De,tt,Re.data):n.texImage2D(t.TEXTURE_2D,ve,We,Re.width,Re.height,0,De,tt,Re.data)}else if(T.isDataArrayTexture)if(V){if(ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,We,Se.width,Se.height,Se.depth),Te)if(T.layerUpdates.size>0){const ve=gg(Se.width,Se.height,T.format,T.type);for(const pe of T.layerUpdates){const Be=Se.data.subarray(pe*ve/Se.data.BYTES_PER_ELEMENT,(pe+1)*ve/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,De,tt,Be)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,De,tt,Se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,We,Se.width,Se.height,Se.depth,0,De,tt,Se.data);else if(T.isData3DTexture)V?(ge&&n.texStorage3D(t.TEXTURE_3D,Fe,We,Se.width,Se.height,Se.depth),Te&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,De,tt,Se.data)):n.texImage3D(t.TEXTURE_3D,0,We,Se.width,Se.height,Se.depth,0,De,tt,Se.data);else if(T.isFramebufferTexture){if(ge)if(V)n.texStorage2D(t.TEXTURE_2D,Fe,We,Se.width,Se.height);else{let ve=Se.width,pe=Se.height;for(let Be=0;Be<Fe;Be++)n.texImage2D(t.TEXTURE_2D,Be,We,ve,pe,0,De,tt,null),ve>>=1,pe>>=1}}else if(ot.length>0){if(V&&ge){const ve=Ye(ot[0]);n.texStorage2D(t.TEXTURE_2D,Fe,We,ve.width,ve.height)}for(let ve=0,pe=ot.length;ve<pe;ve++)Re=ot[ve],V?Te&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,De,tt,Re):n.texImage2D(t.TEXTURE_2D,ve,We,De,tt,Re);T.generateMipmaps=!1}else if(V){if(ge){const ve=Ye(Se);n.texStorage2D(t.TEXTURE_2D,Fe,We,ve.width,ve.height)}Te&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,De,tt,Se)}else n.texImage2D(t.TEXTURE_2D,0,We,De,tt,Se);g(T)&&u(te),Le.__version=le.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function he(L,T,Y){if(T.image.length!==6)return;const te=Ee(L,T),de=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+Y);const le=i.get(de);if(de.version!==le.__version||te===!0){n.activeTexture(t.TEXTURE0+Y);const Le=Tt.getPrimaries(Tt.workingColorSpace),_e=T.colorSpace===br?null:Tt.getPrimaries(T.colorSpace),Ve=T.colorSpace===br||Le===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Ge=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,De=[];for(let pe=0;pe<6;pe++)!Ge&&!Se?De[pe]=w(T.image[pe],!0,r.maxCubemapSize):De[pe]=Se?T.image[pe].image:T.image[pe],De[pe]=Xe(T,De[pe]);const tt=De[0],We=s.convert(T.format,T.colorSpace),Re=s.convert(T.type),ot=v(T.internalFormat,We,Re,T.colorSpace),V=T.isVideoTexture!==!0,ge=le.__version===void 0||te===!0,Te=de.dataReady;let Fe=b(T,tt);me(t.TEXTURE_CUBE_MAP,T);let ve;if(Ge){V&&ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,ot,tt.width,tt.height);for(let pe=0;pe<6;pe++){ve=De[pe].mipmaps;for(let Be=0;Be<ve.length;Be++){const it=ve[Be];T.format!==Mi?We!==null?V?Te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,0,0,it.width,it.height,We,it.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,ot,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,0,0,it.width,it.height,We,Re,it.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,ot,it.width,it.height,0,We,Re,it.data)}}}else{if(ve=T.mipmaps,V&&ge){ve.length>0&&Fe++;const pe=Ye(De[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,ot,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){V?Te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,De[pe].width,De[pe].height,We,Re,De[pe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ot,De[pe].width,De[pe].height,0,We,Re,De[pe].data);for(let Be=0;Be<ve.length;Be++){const Dt=ve[Be].image[pe].image;V?Te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,0,0,Dt.width,Dt.height,We,Re,Dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,ot,Dt.width,Dt.height,0,We,Re,Dt.data)}}else{V?Te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,We,Re,De[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ot,We,Re,De[pe]);for(let Be=0;Be<ve.length;Be++){const it=ve[Be];V?Te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,0,0,We,Re,it.image[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,ot,We,Re,it.image[pe])}}}g(T)&&u(t.TEXTURE_CUBE_MAP),le.__version=de.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ue(L,T,Y,te,de,le){const Le=s.convert(Y.format,Y.colorSpace),_e=s.convert(Y.type),Ve=v(Y.internalFormat,Le,_e,Y.colorSpace),Ge=i.get(T),Se=i.get(Y);if(Se.__renderTarget=T,!Ge.__hasExternalTextures){const De=Math.max(1,T.width>>le),tt=Math.max(1,T.height>>le);de===t.TEXTURE_3D||de===t.TEXTURE_2D_ARRAY?n.texImage3D(de,le,Ve,De,tt,T.depth,0,Le,_e,null):n.texImage2D(de,le,Ve,De,tt,0,Le,_e,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),se(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,de,Se.__webglTexture,0,Ae(T)):(de===t.TEXTURE_2D||de>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,de,Se.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(L,T,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,L),T.depthBuffer){const te=T.depthTexture,de=te&&te.isDepthTexture?te.type:null,le=y(T.stencilBuffer,de),Le=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=Ae(T);se(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,le,T.width,T.height):Y?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,le,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,le,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,L)}else{const te=T.textures;for(let de=0;de<te.length;de++){const le=te[de],Le=s.convert(le.format,le.colorSpace),_e=s.convert(le.type),Ve=v(le.internalFormat,Le,_e,le.colorSpace),Ge=Ae(T);Y&&se(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Ve,T.width,T.height):se(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ge,Ve,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,Ve,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(T.depthTexture);te.__renderTarget=T,(!te.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ae(T.depthTexture,0);const de=te.__webglTexture,le=Ae(T);if(T.depthTexture.format===Ya)se(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,de,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,de,0);else if(T.depthTexture.format===qa)se(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,de,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function lt(L){const T=i.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const te=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),te){const de=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,te.removeEventListener("dispose",de)};te.addEventListener("dispose",de),T.__depthDisposeCallback=de}T.__boundDepthTexture=te}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const te=L.texture.mipmaps;te&&te.length>0?He(T.__webglFramebuffer[0],L):He(T.__webglFramebuffer,L)}else if(Y){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]===void 0)T.__webglDepthbuffer[te]=t.createRenderbuffer(),$e(T.__webglDepthbuffer[te],L,!1);else{const de=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=T.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,le)}}else{const te=L.texture.mipmaps;if(te&&te.length>0?n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),$e(T.__webglDepthbuffer,L,!1);else{const de=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function St(L,T,Y){const te=i.get(L);T!==void 0&&Ue(te.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&lt(L)}function I(L){const T=L.texture,Y=i.get(L),te=i.get(T);L.addEventListener("dispose",P);const de=L.textures,le=L.isWebGLCubeRenderTarget===!0,Le=de.length>1;if(Le||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=T.version,o.memory.textures++),le){Y.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[_e]=[];for(let Ve=0;Ve<T.mipmaps.length;Ve++)Y.__webglFramebuffer[_e][Ve]=t.createFramebuffer()}else Y.__webglFramebuffer[_e]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let _e=0;_e<T.mipmaps.length;_e++)Y.__webglFramebuffer[_e]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(Le)for(let _e=0,Ve=de.length;_e<Ve;_e++){const Ge=i.get(de[_e]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&se(L)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let _e=0;_e<de.length;_e++){const Ve=de[_e];Y.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[_e]);const Ge=s.convert(Ve.format,Ve.colorSpace),Se=s.convert(Ve.type),De=v(Ve.internalFormat,Ge,Se,Ve.colorSpace,L.isXRRenderTarget===!0),tt=Ae(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,tt,De,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Y.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),$e(Y.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),me(t.TEXTURE_CUBE_MAP,T);for(let _e=0;_e<6;_e++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)Ue(Y.__webglFramebuffer[_e][Ve],L,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve);else Ue(Y.__webglFramebuffer[_e],L,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);g(T)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let _e=0,Ve=de.length;_e<Ve;_e++){const Ge=de[_e],Se=i.get(Ge);let De=t.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(De=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(De,Se.__webglTexture),me(De,Ge),Ue(Y.__webglFramebuffer,L,Ge,t.COLOR_ATTACHMENT0+_e,De,0),g(Ge)&&u(De)}n.unbindTexture()}else{let _e=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_e=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,te.__webglTexture),me(_e,T),T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)Ue(Y.__webglFramebuffer[Ve],L,T,t.COLOR_ATTACHMENT0,_e,Ve);else Ue(Y.__webglFramebuffer,L,T,t.COLOR_ATTACHMENT0,_e,0);g(T)&&u(_e),n.unbindTexture()}L.depthBuffer&&lt(L)}function At(L){const T=L.textures;for(let Y=0,te=T.length;Y<te;Y++){const de=T[Y];if(g(de)){const le=m(L),Le=i.get(de).__webglTexture;n.bindTexture(le,Le),u(le),n.unbindTexture()}}}const rt=[],Je=[];function k(L){if(L.samples>0){if(se(L)===!1){const T=L.textures,Y=L.width,te=L.height;let de=t.COLOR_BUFFER_BIT;const le=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(L),_e=T.length>1;if(_e)for(let Ge=0;Ge<T.length;Ge++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ve=L.texture.mipmaps;Ve&&Ve.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ge=0;Ge<T.length;Ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(de|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(de|=t.STENCIL_BUFFER_BIT)),_e){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ge]);const Se=i.get(T[Ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,Y,te,0,0,Y,te,de,t.NEAREST),l===!0&&(rt.length=0,Je.length=0,rt.push(t.COLOR_ATTACHMENT0+Ge),L.depthBuffer&&L.resolveDepthBuffer===!1&&(rt.push(le),Je.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Je)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,rt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let Ge=0;Ge<T.length;Ge++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ge,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ge]);const Se=i.get(T[Ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ge,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Ae(L){return Math.min(r.maxSamples,L.samples)}function se(L){const T=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ce(L){const T=o.render.frame;d.get(L)!==T&&(d.set(L,T),L.update())}function Xe(L,T){const Y=L.colorSpace,te=L.format,de=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==Po&&Y!==br&&(Tt.getTransfer(Y)===Nt?(te!==Mi||de!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=z,this.setTexture2D=ae,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=F,this.rebindTextures=St,this.setupRenderTarget=I,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=se}function RA(t,e){function n(i,r=br){let s;const o=Tt.getTransfer(r);if(i===zi)return t.UNSIGNED_BYTE;if(i===Sp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Mp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===dx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===fx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===cx)return t.BYTE;if(i===ux)return t.SHORT;if(i===Xa)return t.UNSIGNED_SHORT;if(i===yp)return t.INT;if(i===As)return t.UNSIGNED_INT;if(i===tr)return t.FLOAT;if(i===tl)return t.HALF_FLOAT;if(i===hx)return t.ALPHA;if(i===px)return t.RGB;if(i===Mi)return t.RGBA;if(i===Ya)return t.DEPTH_COMPONENT;if(i===qa)return t.DEPTH_STENCIL;if(i===mx)return t.RED;if(i===wp)return t.RED_INTEGER;if(i===gx)return t.RG;if(i===Ep)return t.RG_INTEGER;if(i===Tp)return t.RGBA_INTEGER;if(i===cc||i===uc||i===dc||i===fc)if(o===Nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===cc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===cc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xf||i===jf||i===Yf||i===qf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$f||i===Kf||i===Zf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$f||i===Kf)return o===Nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jf||i===Qf||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===dh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===th)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ih)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ah)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ch)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fh||i===hh||i===ph)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fh)return o===Nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ph)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mh||i===gh||i===vh||i===_h)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===mh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_h)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ja?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const PA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LA=`
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

}`;class DA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new bx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Gr({vertexShader:PA,fragmentShader:LA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new re(new Ji(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NA extends Uo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,_=null;const w=typeof XRWebGLBinding<"u",g=new DA,u={},m=n.getContextAttributes();let v=null,y=null;const b=[],R=[],P=new je;let D=null;const M=new Kn;M.viewport=new It;const x=new Kn;x.viewport=new It;const N=[M,x],z=new QM;let $=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=b[Z];return he===void 0&&(he=new Md,b[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=b[Z];return he===void 0&&(he=new Md,b[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=b[Z];return he===void 0&&(he=new Md,b[Z]=he),he.getHandSpace()};function ae(Z){const he=R.indexOf(Z.inputSource);if(he===-1)return;const Ue=b[he];Ue!==void 0&&(Ue.update(Z.inputSource,Z.frame,c||o),Ue.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){r.removeEventListener("select",ae),r.removeEventListener("selectstart",ae),r.removeEventListener("selectend",ae),r.removeEventListener("squeeze",ae),r.removeEventListener("squeezestart",ae),r.removeEventListener("squeezeend",ae),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",W);for(let Z=0;Z<b.length;Z++){const he=R[Z];he!==null&&(R[Z]=null,b[Z].disconnect(he))}$=null,ie=null,g.reset();for(const Z in u)delete u[Z];e.setRenderTarget(v),p=null,h=null,f=null,r=null,y=null,X.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&w&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",ae),r.addEventListener("selectstart",ae),r.addEventListener("selectend",ae),r.addEventListener("squeeze",ae),r.addEventListener("squeezestart",ae),r.addEventListener("squeezeend",ae),r.addEventListener("end",B),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,$e=null,He=null;m.depth&&(He=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ue=m.stencil?qa:Ya,$e=m.stencil?ja:As);const lt={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(lt),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new bs(h.textureWidth,h.textureHeight,{format:Mi,type:zi,depthTexture:new Ax(h.textureWidth,h.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new bs(p.framebufferWidth,p.framebufferHeight,{format:Mi,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),X.setContext(r),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(Z){for(let he=0;he<Z.removed.length;he++){const Ue=Z.removed[he],$e=R.indexOf(Ue);$e>=0&&(R[$e]=null,b[$e].disconnect(Ue))}for(let he=0;he<Z.added.length;he++){const Ue=Z.added[he];let $e=R.indexOf(Ue);if($e===-1){for(let lt=0;lt<b.length;lt++)if(lt>=R.length){R.push(Ue),$e=lt;break}else if(R[lt]===null){R[lt]=Ue,$e=lt;break}if($e===-1)break}const He=b[$e];He&&He.connect(Ue)}}const F=new O,K=new O;function ne(Z,he,Ue){F.setFromMatrixPosition(he.matrixWorld),K.setFromMatrixPosition(Ue.matrixWorld);const $e=F.distanceTo(K),He=he.projectionMatrix.elements,lt=Ue.projectionMatrix.elements,St=He[14]/(He[10]-1),I=He[14]/(He[10]+1),At=(He[9]+1)/He[5],rt=(He[9]-1)/He[5],Je=(He[8]-1)/He[0],k=(lt[8]+1)/lt[0],Ae=St*Je,se=St*k,ce=$e/(-Je+k),Xe=ce*-Je;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Xe),Z.translateZ(ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),He[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ye=St+ce,L=I+ce,T=Ae-Xe,Y=se+($e-Xe),te=At*I/L*Ye,de=rt*I/L*Ye;Z.projectionMatrix.makePerspective(T,Y,te,de,Ye,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function we(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let he=Z.near,Ue=Z.far;g.texture!==null&&(g.depthNear>0&&(he=g.depthNear),g.depthFar>0&&(Ue=g.depthFar)),z.near=x.near=M.near=he,z.far=x.far=M.far=Ue,($!==z.near||ie!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),$=z.near,ie=z.far),z.layers.mask=Z.layers.mask|6,M.layers.mask=z.layers.mask&3,x.layers.mask=z.layers.mask&5;const $e=Z.parent,He=z.cameras;we(z,$e);for(let lt=0;lt<He.length;lt++)we(He[lt],$e);He.length===2?ne(z,M,x):z.projectionMatrix.copy(M.projectionMatrix),me(Z,z,$e)};function me(Z,he,Ue){Ue===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(Ue.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=xh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(Z){return u[Z]};let Ee=null;function nt(Z,he){if(d=he.getViewerPose(c||o),_=he,d!==null){const Ue=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let $e=!1;Ue.length!==z.cameras.length&&(z.cameras.length=0,$e=!0);for(let I=0;I<Ue.length;I++){const At=Ue[I];let rt=null;if(p!==null)rt=p.getViewport(At);else{const k=f.getViewSubImage(h,At);rt=k.viewport,I===0&&(e.setRenderTargetTextures(y,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(y))}let Je=N[I];Je===void 0&&(Je=new Kn,Je.layers.enable(I),Je.viewport=new It,N[I]=Je),Je.matrix.fromArray(At.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(At.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(rt.x,rt.y,rt.width,rt.height),I===0&&(z.matrix.copy(Je.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),$e===!0&&z.cameras.push(Je)}const He=r.enabledFeatures;if(He&&He.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){f=i.getBinding();const I=f.getDepthInformation(Ue[0]);I&&I.isValid&&I.texture&&g.init(I,r.renderState)}if(He&&He.includes("camera-access")&&w){e.state.unbindTexture(),f=i.getBinding();for(let I=0;I<Ue.length;I++){const At=Ue[I].camera;if(At){let rt=u[At];rt||(rt=new bx,u[At]=rt);const Je=f.getCameraImage(At);rt.sourceTexture=Je}}}}for(let Ue=0;Ue<b.length;Ue++){const $e=R[Ue],He=b[Ue];$e!==null&&He!==void 0&&He.update($e,he,c||o)}Ee&&Ee(Z,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const X=new Dx;X.setAnimationLoop(nt),this.setAnimationLoop=function(Z){Ee=Z},this.dispose=function(){}}}const os=new bi,IA=new zt;function UA(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,wx(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,m,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),f(g,u)):u.isMeshPhongMaterial?(s(g,u),d(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&p(g,u,y)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),w(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,m,v):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===jn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===jn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const m=e.get(u),v=m.envMap,y=m.envMapRotation;v&&(g.envMap.value=v,os.copy(y),os.x*=-1,os.y*=-1,os.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),g.envMapRotation.value.setFromMatrix4(IA.makeRotationFromEuler(os)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,m,v){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*m,g.scale.value=v*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,m){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===jn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function w(g,u){const m=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const y=v.program;i.uniformBlockBinding(m,y)}function c(m,v){let y=r[m.id];y===void 0&&(_(m),y=d(m),r[m.id]=y,m.addEventListener("dispose",g));const b=v.program;i.updateUBOMapping(m,b);const R=e.render.frame;s[m.id]!==R&&(h(m),s[m.id]=R)}function d(m){const v=f();m.__bindingPointIndex=v;const y=t.createBuffer(),b=m.__size,R=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],y=m.uniforms,b=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,P=y.length;R<P;R++){const D=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,x=D.length;M<x;M++){const N=D[M];if(p(N,R,M,b)===!0){const z=N.__offset,$=Array.isArray(N.value)?N.value:[N.value];let ie=0;for(let ae=0;ae<$.length;ae++){const B=$[ae],W=w(B);typeof B=="number"||typeof B=="boolean"?(N.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,z+ie,N.__data)):B.isMatrix3?(N.__data[0]=B.elements[0],N.__data[1]=B.elements[1],N.__data[2]=B.elements[2],N.__data[3]=0,N.__data[4]=B.elements[3],N.__data[5]=B.elements[4],N.__data[6]=B.elements[5],N.__data[7]=0,N.__data[8]=B.elements[6],N.__data[9]=B.elements[7],N.__data[10]=B.elements[8],N.__data[11]=0):(B.toArray(N.__data,ie),ie+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,v,y,b){const R=m.value,P=v+"_"+y;if(b[P]===void 0)return typeof R=="number"||typeof R=="boolean"?b[P]=R:b[P]=R.clone(),!0;{const D=b[P];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return b[P]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function _(m){const v=m.uniforms;let y=0;const b=16;for(let P=0,D=v.length;P<D;P++){const M=Array.isArray(v[P])?v[P]:[v[P]];for(let x=0,N=M.length;x<N;x++){const z=M[x],$=Array.isArray(z.value)?z.value:[z.value];for(let ie=0,ae=$.length;ie<ae;ie++){const B=$[ie],W=w(B),F=y%b,K=F%W.boundary,ne=F+K;y+=K,ne!==0&&b-ne<W.storage&&(y+=b-ne),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=W.storage}}}const R=y%b;return R>0&&(y+=b-R),m.__size=y,m.__cache={},this}function w(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class OA{constructor(e={}){const{canvas:n=nM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),w=new Int32Array(4);let g=null,u=null;const m=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let b=!1;this._outputColorSpace=Bn;let R=0,P=0,D=null,M=-1,x=null;const N=new It,z=new It;let $=null;const ie=new pt(0);let ae=0,B=n.width,W=n.height,F=1,K=null,ne=null;const we=new It(0,0,B,W),me=new It(0,0,B,W);let Ee=!1;const nt=new Lp;let X=!1,Z=!1;const he=new zt,Ue=new O,$e=new It,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function St(){return D===null?F:1}let I=i;function At(A,G){return n.getContext(A,G)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_p}`),n.addEventListener("webglcontextlost",Te,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",ve,!1),I===null){const G="webgl2";if(I=At(G,A),I===null)throw At(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let rt,Je,k,Ae,se,ce,Xe,Ye,L,T,Y,te,de,le,Le,_e,Ve,Ge,Se,De,tt,We,Re,ot;function V(){rt=new YE(I),rt.init(),We=new RA(I,rt),Je=new BE(I,rt,e,We),k=new bA(I,rt),Je.reversedDepthBuffer&&h&&k.buffers.depth.setReversed(!0),Ae=new KE(I),se=new pA,ce=new CA(I,rt,k,se,Je,We,Ae),Xe=new VE(y),Ye=new jE(y),L=new n2(I),Re=new kE(I,L),T=new qE(I,L,Ae,Re),Y=new JE(I,T,L,Ae),Se=new ZE(I,Je,ce),_e=new HE(se),te=new hA(y,Xe,Ye,rt,Je,Re,_e),de=new UA(y,se),le=new gA,Le=new MA(rt),Ge=new OE(y,Xe,Ye,k,Y,p,l),Ve=new TA(y,Y,Je),ot=new FA(I,Ae,Je,k),De=new zE(I,rt,Ae),tt=new $E(I,rt,Ae),Ae.programs=te.programs,y.capabilities=Je,y.extensions=rt,y.properties=se,y.renderLists=le,y.shadowMap=Ve,y.state=k,y.info=Ae}V();const ge=new NA(y,I);this.xr=ge,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(B,W,!1))},this.getSize=function(A){return A.set(B,W)},this.setSize=function(A,G,Q=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,W=G,n.width=Math.floor(A*F),n.height=Math.floor(G*F),Q===!0&&(n.style.width=A+"px",n.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(B*F,W*F).floor()},this.setDrawingBufferSize=function(A,G,Q){B=A,W=G,F=Q,n.width=Math.floor(A*Q),n.height=Math.floor(G*Q),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(we)},this.setViewport=function(A,G,Q,ee){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,G,Q,ee),k.viewport(N.copy(we).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(me)},this.setScissor=function(A,G,Q,ee){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,G,Q,ee),k.scissor(z.copy(me).multiplyScalar(F).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(A){k.setScissorTest(Ee=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){ne=A},this.getClearColor=function(A){return A.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,Q=!0){let ee=0;if(A){let j=!1;if(D!==null){const xe=D.texture.format;j=xe===Tp||xe===Ep||xe===wp}if(j){const xe=D.texture.type,Ce=xe===zi||xe===As||xe===Xa||xe===ja||xe===Sp||xe===Mp,ze=Ge.getClearColor(),Ie=Ge.getClearAlpha(),Ke=ze.r,Ze=ze.g,qe=ze.b;Ce?(_[0]=Ke,_[1]=Ze,_[2]=qe,_[3]=Ie,I.clearBufferuiv(I.COLOR,0,_)):(w[0]=Ke,w[1]=Ze,w[2]=qe,w[3]=Ie,I.clearBufferiv(I.COLOR,0,w))}else ee|=I.COLOR_BUFFER_BIT}G&&(ee|=I.DEPTH_BUFFER_BIT),Q&&(ee|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),Ge.dispose(),le.dispose(),Le.dispose(),se.dispose(),Xe.dispose(),Ye.dispose(),Y.dispose(),Re.dispose(),ot.dispose(),te.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",ni),ge.removeEventListener("sessionend",Oo),Ci.stop()};function Te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=Ae.autoReset,G=Ve.enabled,Q=Ve.autoUpdate,ee=Ve.needsUpdate,j=Ve.type;V(),Ae.autoReset=A,Ve.enabled=G,Ve.autoUpdate=Q,Ve.needsUpdate=ee,Ve.type=j}function ve(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pe(A){const G=A.target;G.removeEventListener("dispose",pe),Be(G)}function Be(A){it(A),se.remove(A)}function it(A){const G=se.get(A).programs;G!==void 0&&(G.forEach(function(Q){te.releaseProgram(Q)}),A.isShaderMaterial&&te.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,Q,ee,j,xe){G===null&&(G=He);const Ce=j.isMesh&&j.matrixWorld.determinant()<0,ze=sl(A,G,Q,ee,j);k.setMaterial(ee,Ce);let Ie=Q.index,Ke=1;if(ee.wireframe===!0){if(Ie=T.getWireframeAttribute(Q),Ie===void 0)return;Ke=2}const Ze=Q.drawRange,qe=Q.attributes.position;let ut=Ze.start*Ke,bt=(Ze.start+Ze.count)*Ke;xe!==null&&(ut=Math.max(ut,xe.start*Ke),bt=Math.min(bt,(xe.start+xe.count)*Ke)),Ie!==null?(ut=Math.max(ut,0),bt=Math.min(bt,Ie.count)):qe!=null&&(ut=Math.max(ut,0),bt=Math.min(bt,qe.count));const Bt=bt-ut;if(Bt<0||Bt===1/0)return;Re.setup(j,ee,ze,Q,Ie);let Ct,Pt=De;if(Ie!==null&&(Ct=L.get(Ie),Pt=tt,Pt.setIndex(Ct)),j.isMesh)ee.wireframe===!0?(k.setLineWidth(ee.wireframeLinewidth*St()),Pt.setMode(I.LINES)):Pt.setMode(I.TRIANGLES);else if(j.isLine){let Qe=ee.linewidth;Qe===void 0&&(Qe=1),k.setLineWidth(Qe*St()),j.isLineSegments?Pt.setMode(I.LINES):j.isLineLoop?Pt.setMode(I.LINE_LOOP):Pt.setMode(I.LINE_STRIP)}else j.isPoints?Pt.setMode(I.POINTS):j.isSprite&&Pt.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)$a("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Qe=j._multiDrawStarts,gt=j._multiDrawCounts,st=j._multiDrawCount,wn=Ie?L.get(Ie).bytesPerElement:1,dr=se.get(ee).currentProgram.getUniforms();for(let _n=0;_n<st;_n++)dr.setValue(I,"_gl_DrawID",_n),Pt.render(Qe[_n]/wn,gt[_n])}else if(j.isInstancedMesh)Pt.renderInstances(ut,Bt,j.count);else if(Q.isInstancedBufferGeometry){const Qe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,gt=Math.min(Q.instanceCount,Qe);Pt.renderInstances(ut,Bt,gt)}else Pt.render(ut,Bt)};function Dt(A,G,Q){A.transparent===!0&&A.side===yi&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,Yr(A,G,Q),A.side=Vr,A.needsUpdate=!0,Yr(A,G,Q),A.side=yi):Yr(A,G,Q)}this.compile=function(A,G,Q=null){Q===null&&(Q=A),u=Le.get(Q),u.init(G),v.push(u),Q.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(u.pushLight(j),j.castShadow&&u.pushShadow(j))}),A!==Q&&A.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(u.pushLight(j),j.castShadow&&u.pushShadow(j))}),u.setupLights();const ee=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const xe=j.material;if(xe)if(Array.isArray(xe))for(let Ce=0;Ce<xe.length;Ce++){const ze=xe[Ce];Dt(ze,Q,j),ee.add(ze)}else Dt(xe,Q,j),ee.add(xe)}),u=v.pop(),ee},this.compileAsync=function(A,G,Q=null){const ee=this.compile(A,G,Q);return new Promise(j=>{function xe(){if(ee.forEach(function(Ce){se.get(Ce).currentProgram.isReady()&&ee.delete(Ce)}),ee.size===0){j(A);return}setTimeout(xe,10)}rt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let xt=null;function tn(A){xt&&xt(A)}function ni(){Ci.stop()}function Oo(){Ci.start()}const Ci=new Dx;Ci.setAnimationLoop(tn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(A){xt=A,ge.setAnimationLoop(A),A===null?Ci.stop():Ci.start()},ge.addEventListener("sessionstart",ni),ge.addEventListener("sessionend",Oo),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(G),G=ge.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,G,D),u=Le.get(A,v.length),u.init(G),v.push(u),he.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),nt.setFromProjectionMatrix(he,Ui,G.reversedDepth),Z=this.localClippingEnabled,X=_e.init(this.clippingPlanes,Z),g=le.get(A,m.length),g.init(),m.push(g),ge.enabled===!0&&ge.isPresenting===!0){const xe=y.xr.getDepthSensingMesh();xe!==null&&ur(xe,G,-1/0,y.sortObjects)}ur(A,G,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(K,ne),lt=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,lt&&Ge.addToRenderList(g,A),this.info.render.frame++,X===!0&&_e.beginShadows();const Q=u.state.shadowsArray;Ve.render(Q,A,G),X===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=g.opaque,j=g.transmissive;if(u.setupLights(),G.isArrayCamera){const xe=G.cameras;if(j.length>0)for(let Ce=0,ze=xe.length;Ce<ze;Ce++){const Ie=xe[Ce];ko(ee,j,A,Ie)}lt&&Ge.render(A);for(let Ce=0,ze=xe.length;Ce<ze;Ce++){const Ie=xe[Ce];Bi(g,A,Ie,Ie.viewport)}}else j.length>0&&ko(ee,j,A,G),lt&&Ge.render(A),Bi(g,A,G);D!==null&&P===0&&(ce.updateMultisampleRenderTarget(D),ce.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(y,A,G),Re.resetDefaultState(),M=-1,x=null,v.pop(),v.length>0?(u=v[v.length-1],X===!0&&_e.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function ur(A,G,Q,ee){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||nt.intersectsSprite(A)){ee&&$e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(he);const Ce=Y.update(A),ze=A.material;ze.visible&&g.push(A,Ce,ze,Q,$e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||nt.intersectsObject(A))){const Ce=Y.update(A),ze=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$e.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),$e.copy(Ce.boundingSphere.center)),$e.applyMatrix4(A.matrixWorld).applyMatrix4(he)),Array.isArray(ze)){const Ie=Ce.groups;for(let Ke=0,Ze=Ie.length;Ke<Ze;Ke++){const qe=Ie[Ke],ut=ze[qe.materialIndex];ut&&ut.visible&&g.push(A,Ce,ut,Q,$e.z,qe)}}else ze.visible&&g.push(A,Ce,ze,Q,$e.z,null)}}const xe=A.children;for(let Ce=0,ze=xe.length;Ce<ze;Ce++)ur(xe[Ce],G,Q,ee)}function Bi(A,G,Q,ee){const j=A.opaque,xe=A.transmissive,Ce=A.transparent;u.setupLightsView(Q),X===!0&&_e.setGlobalState(y.clippingPlanes,Q),ee&&k.viewport(N.copy(ee)),j.length>0&&Dn(j,G,Q),xe.length>0&&Dn(xe,G,Q),Ce.length>0&&Dn(Ce,G,Q),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function ko(A,G,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[ee.id]===void 0&&(u.state.transmissionRenderTarget[ee.id]=new bs(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?tl:zi,minFilter:_s,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const xe=u.state.transmissionRenderTarget[ee.id],Ce=ee.viewport||N;xe.setSize(Ce.z*y.transmissionResolutionScale,Ce.w*y.transmissionResolutionScale);const ze=y.getRenderTarget(),Ie=y.getActiveCubeFace(),Ke=y.getActiveMipmapLevel();y.setRenderTarget(xe),y.getClearColor(ie),ae=y.getClearAlpha(),ae<1&&y.setClearColor(16777215,.5),y.clear(),lt&&Ge.render(Q);const Ze=y.toneMapping;y.toneMapping=zr;const qe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),u.setupLightsView(ee),X===!0&&_e.setGlobalState(y.clippingPlanes,ee),Dn(A,Q,ee),ce.updateMultisampleRenderTarget(xe),ce.updateRenderTargetMipmap(xe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let bt=0,Bt=G.length;bt<Bt;bt++){const Ct=G[bt],Pt=Ct.object,Qe=Ct.geometry,gt=Ct.material,st=Ct.group;if(gt.side===yi&&Pt.layers.test(ee.layers)){const wn=gt.side;gt.side=jn,gt.needsUpdate=!0,Ls(Pt,Q,ee,Qe,gt,st),gt.side=wn,gt.needsUpdate=!0,ut=!0}}ut===!0&&(ce.updateMultisampleRenderTarget(xe),ce.updateRenderTargetMipmap(xe))}y.setRenderTarget(ze,Ie,Ke),y.setClearColor(ie,ae),qe!==void 0&&(ee.viewport=qe),y.toneMapping=Ze}function Dn(A,G,Q){const ee=G.isScene===!0?G.overrideMaterial:null;for(let j=0,xe=A.length;j<xe;j++){const Ce=A[j],ze=Ce.object,Ie=Ce.geometry,Ke=Ce.group;let Ze=Ce.material;Ze.allowOverride===!0&&ee!==null&&(Ze=ee),ze.layers.test(Q.layers)&&Ls(ze,G,Q,Ie,Ze,Ke)}}function Ls(A,G,Q,ee,j,xe){A.onBeforeRender(y,G,Q,ee,j,xe),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(y,G,Q,ee,A,xe),j.transparent===!0&&j.side===yi&&j.forceSinglePass===!1?(j.side=jn,j.needsUpdate=!0,y.renderBufferDirect(Q,G,ee,j,A,xe),j.side=Vr,j.needsUpdate=!0,y.renderBufferDirect(Q,G,ee,j,A,xe),j.side=yi):y.renderBufferDirect(Q,G,ee,j,A,xe),A.onAfterRender(y,G,Q,ee,j,xe)}function Yr(A,G,Q){G.isScene!==!0&&(G=He);const ee=se.get(A),j=u.state.lights,xe=u.state.shadowsArray,Ce=j.state.version,ze=te.getParameters(A,j.state,xe,G,Q),Ie=te.getProgramCacheKey(ze);let Ke=ee.programs;ee.environment=A.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(A.isMeshStandardMaterial?Ye:Xe).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",pe),Ke=new Map,ee.programs=Ke);let Ze=Ke.get(Ie);if(Ze!==void 0){if(ee.currentProgram===Ze&&ee.lightsStateVersion===Ce)return Ds(A,ze),Ze}else ze.uniforms=te.getUniforms(A),A.onBeforeCompile(ze,y),Ze=te.acquireProgram(ze,Ie),Ke.set(Ie,Ze),ee.uniforms=ze.uniforms;const qe=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=_e.uniform),Ds(A,ze),ee.needsLights=du(A),ee.lightsStateVersion=Ce,ee.needsLights&&(qe.ambientLightColor.value=j.state.ambient,qe.lightProbe.value=j.state.probe,qe.directionalLights.value=j.state.directional,qe.directionalLightShadows.value=j.state.directionalShadow,qe.spotLights.value=j.state.spot,qe.spotLightShadows.value=j.state.spotShadow,qe.rectAreaLights.value=j.state.rectArea,qe.ltc_1.value=j.state.rectAreaLTC1,qe.ltc_2.value=j.state.rectAreaLTC2,qe.pointLights.value=j.state.point,qe.pointLightShadows.value=j.state.pointShadow,qe.hemisphereLights.value=j.state.hemi,qe.directionalShadowMap.value=j.state.directionalShadowMap,qe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qe.spotShadowMap.value=j.state.spotShadowMap,qe.spotLightMatrix.value=j.state.spotLightMatrix,qe.spotLightMap.value=j.state.spotLightMap,qe.pointShadowMap.value=j.state.pointShadowMap,qe.pointShadowMatrix.value=j.state.pointShadowMatrix),ee.currentProgram=Ze,ee.uniformsList=null,Ze}function zo(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=hc.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Ds(A,G){const Q=se.get(A);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function sl(A,G,Q,ee,j){G.isScene!==!0&&(G=He),ce.resetTextureUnits();const xe=G.fog,Ce=ee.isMeshStandardMaterial?G.environment:null,ze=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Po,Ie=(ee.isMeshStandardMaterial?Ye:Xe).get(ee.envMap||Ce),Ke=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ze=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),qe=!!Q.morphAttributes.position,ut=!!Q.morphAttributes.normal,bt=!!Q.morphAttributes.color;let Bt=zr;ee.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Bt=y.toneMapping);const Ct=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Pt=Ct!==void 0?Ct.length:0,Qe=se.get(ee),gt=u.state.lights;if(X===!0&&(Z===!0||A!==x)){const xn=A===x&&ee.id===M;_e.setState(ee,A,xn)}let st=!1;ee.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==gt.state.version||Qe.outputColorSpace!==ze||j.isBatchedMesh&&Qe.batching===!1||!j.isBatchedMesh&&Qe.batching===!0||j.isBatchedMesh&&Qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Qe.instancing===!1||!j.isInstancedMesh&&Qe.instancing===!0||j.isSkinnedMesh&&Qe.skinning===!1||!j.isSkinnedMesh&&Qe.skinning===!0||j.isInstancedMesh&&Qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Qe.instancingMorph===!1&&j.morphTexture!==null||Qe.envMap!==Ie||ee.fog===!0&&Qe.fog!==xe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==_e.numPlanes||Qe.numIntersection!==_e.numIntersection)||Qe.vertexAlphas!==Ke||Qe.vertexTangents!==Ze||Qe.morphTargets!==qe||Qe.morphNormals!==ut||Qe.morphColors!==bt||Qe.toneMapping!==Bt||Qe.morphTargetsCount!==Pt)&&(st=!0):(st=!0,Qe.__version=ee.version);let wn=Qe.currentProgram;st===!0&&(wn=Yr(ee,G,j));let dr=!1,_n=!1,Hi=!1;const Ut=wn.getUniforms(),$t=Qe.uniforms;if(k.useProgram(wn.program)&&(dr=!0,_n=!0,Hi=!0),ee.id!==M&&(M=ee.id,_n=!0),dr||x!==A){k.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ut.setValue(I,"projectionMatrix",A.projectionMatrix),Ut.setValue(I,"viewMatrix",A.matrixWorldInverse);const dn=Ut.map.cameraPosition;dn!==void 0&&dn.setValue(I,Ue.setFromMatrixPosition(A.matrixWorld)),Je.logarithmicDepthBuffer&&Ut.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ut.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,_n=!0,Hi=!0)}if(j.isSkinnedMesh){Ut.setOptional(I,j,"bindMatrix"),Ut.setOptional(I,j,"bindMatrixInverse");const xn=j.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Ut.setValue(I,"boneTexture",xn.boneTexture,ce))}j.isBatchedMesh&&(Ut.setOptional(I,j,"batchingTexture"),Ut.setValue(I,"batchingTexture",j._matricesTexture,ce),Ut.setOptional(I,j,"batchingIdTexture"),Ut.setValue(I,"batchingIdTexture",j._indirectTexture,ce),Ut.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&Ut.setValue(I,"batchingColorTexture",j._colorsTexture,ce));const Kt=Q.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&Se.update(j,Q,wn),(_n||Qe.receiveShadow!==j.receiveShadow)&&(Qe.receiveShadow=j.receiveShadow,Ut.setValue(I,"receiveShadow",j.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&($t.envMap.value=Ie,$t.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&G.environment!==null&&($t.envMapIntensity.value=G.environmentIntensity),_n&&(Ut.setValue(I,"toneMappingExposure",y.toneMappingExposure),Qe.needsLights&&Ri($t,Hi),xe&&ee.fog===!0&&de.refreshFogUniforms($t,xe),de.refreshMaterialUniforms($t,ee,F,W,u.state.transmissionRenderTarget[A.id]),hc.upload(I,zo(Qe),$t,ce)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(hc.upload(I,zo(Qe),$t,ce),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ut.setValue(I,"center",j.center),Ut.setValue(I,"modelViewMatrix",j.modelViewMatrix),Ut.setValue(I,"normalMatrix",j.normalMatrix),Ut.setValue(I,"modelMatrix",j.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const xn=ee.uniformsGroups;for(let dn=0,ui=xn.length;dn<ui;dn++){const di=xn[dn];ot.update(di,wn),ot.bind(di,wn)}}return wn}function Ri(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function du(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,G,Q){const ee=se.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),se.get(A.texture).__webglTexture=G,se.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:Q,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const Q=se.get(A);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0};const Bo=I.createFramebuffer();this.setRenderTarget=function(A,G=0,Q=0){D=A,R=G,P=Q;let ee=!0,j=null,xe=!1,Ce=!1;if(A){const Ie=se.get(A);if(Ie.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(I.FRAMEBUFFER,null),ee=!1;else if(Ie.__webglFramebuffer===void 0)ce.setupRenderTarget(A);else if(Ie.__hasExternalTextures)ce.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qe=A.depthTexture;if(Ie.__boundDepthTexture!==qe){if(qe!==null&&se.has(qe)&&(A.width!==qe.image.width||A.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(A)}}const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ce=!0);const Ze=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[G])?j=Ze[G][Q]:j=Ze[G],xe=!0):A.samples>0&&ce.useMultisampledRTT(A)===!1?j=se.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?j=Ze[Q]:j=Ze,N.copy(A.viewport),z.copy(A.scissor),$=A.scissorTest}else N.copy(we).multiplyScalar(F).floor(),z.copy(me).multiplyScalar(F).floor(),$=Ee;if(Q!==0&&(j=Bo),k.bindFramebuffer(I.FRAMEBUFFER,j)&&ee&&k.drawBuffers(A,j),k.viewport(N),k.scissor(z),k.setScissorTest($),xe){const Ie=se.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie.__webglTexture,Q)}else if(Ce){const Ie=G;for(let Ke=0;Ke<A.textures.length;Ke++){const Ze=se.get(A.textures[Ke]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ke,Ze.__webglTexture,Q,Ie)}}else if(A!==null&&Q!==0){const Ie=se.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ie.__webglTexture,Q)}M=-1},this.readRenderTargetPixels=function(A,G,Q,ee,j,xe,Ce,ze=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){k.bindFramebuffer(I.FRAMEBUFFER,Ie);try{const Ke=A.textures[ze],Ze=Ke.format,qe=Ke.type;if(!Je.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-ee&&Q>=0&&Q<=A.height-j&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ze),I.readPixels(G,Q,ee,j,We.convert(Ze),We.convert(qe),xe))}finally{const Ke=D!==null?se.get(D).__webglFramebuffer:null;k.bindFramebuffer(I.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(A,G,Q,ee,j,xe,Ce,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie)if(G>=0&&G<=A.width-ee&&Q>=0&&Q<=A.height-j){k.bindFramebuffer(I.FRAMEBUFFER,Ie);const Ke=A.textures[ze],Ze=Ke.format,qe=Ke.type;if(!Je.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ut),I.bufferData(I.PIXEL_PACK_BUFFER,xe.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ze),I.readPixels(G,Q,ee,j,We.convert(Ze),We.convert(qe),0);const bt=D!==null?se.get(D).__webglFramebuffer:null;k.bindFramebuffer(I.FRAMEBUFFER,bt);const Bt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await iM(I,Bt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ut),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xe),I.deleteBuffer(ut),I.deleteSync(Bt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,Q=0){const ee=Math.pow(2,-Q),j=Math.floor(A.image.width*ee),xe=Math.floor(A.image.height*ee),Ce=G!==null?G.x:0,ze=G!==null?G.y:0;ce.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,Q,0,0,Ce,ze,j,xe),k.unbindTexture()};const qr=I.createFramebuffer(),$r=I.createFramebuffer();this.copyTextureToTexture=function(A,G,Q=null,ee=null,j=0,xe=null){xe===null&&(j!==0?($a("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=j,j=0):xe=0);let Ce,ze,Ie,Ke,Ze,qe,ut,bt,Bt;const Ct=A.isCompressedTexture?A.mipmaps[xe]:A.image;if(Q!==null)Ce=Q.max.x-Q.min.x,ze=Q.max.y-Q.min.y,Ie=Q.isBox3?Q.max.z-Q.min.z:1,Ke=Q.min.x,Ze=Q.min.y,qe=Q.isBox3?Q.min.z:0;else{const Kt=Math.pow(2,-j);Ce=Math.floor(Ct.width*Kt),ze=Math.floor(Ct.height*Kt),A.isDataArrayTexture?Ie=Ct.depth:A.isData3DTexture?Ie=Math.floor(Ct.depth*Kt):Ie=1,Ke=0,Ze=0,qe=0}ee!==null?(ut=ee.x,bt=ee.y,Bt=ee.z):(ut=0,bt=0,Bt=0);const Pt=We.convert(G.format),Qe=We.convert(G.type);let gt;G.isData3DTexture?(ce.setTexture3D(G,0),gt=I.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ce.setTexture2DArray(G,0),gt=I.TEXTURE_2D_ARRAY):(ce.setTexture2D(G,0),gt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const st=I.getParameter(I.UNPACK_ROW_LENGTH),wn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),dr=I.getParameter(I.UNPACK_SKIP_PIXELS),_n=I.getParameter(I.UNPACK_SKIP_ROWS),Hi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ke),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qe);const Ut=A.isDataArrayTexture||A.isData3DTexture,$t=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const Kt=se.get(A),xn=se.get(G),dn=se.get(Kt.__renderTarget),ui=se.get(xn.__renderTarget);k.bindFramebuffer(I.READ_FRAMEBUFFER,dn.__webglFramebuffer),k.bindFramebuffer(I.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let di=0;di<Ie;di++)Ut&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,se.get(A).__webglTexture,j,qe+di),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,se.get(G).__webglTexture,xe,Bt+di)),I.blitFramebuffer(Ke,Ze,Ce,ze,ut,bt,Ce,ze,I.DEPTH_BUFFER_BIT,I.NEAREST);k.bindFramebuffer(I.READ_FRAMEBUFFER,null),k.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||se.has(A)){const Kt=se.get(A),xn=se.get(G);k.bindFramebuffer(I.READ_FRAMEBUFFER,qr),k.bindFramebuffer(I.DRAW_FRAMEBUFFER,$r);for(let dn=0;dn<Ie;dn++)Ut?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Kt.__webglTexture,j,qe+dn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Kt.__webglTexture,j),$t?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xn.__webglTexture,xe,Bt+dn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xn.__webglTexture,xe),j!==0?I.blitFramebuffer(Ke,Ze,Ce,ze,ut,bt,Ce,ze,I.COLOR_BUFFER_BIT,I.NEAREST):$t?I.copyTexSubImage3D(gt,xe,ut,bt,Bt+dn,Ke,Ze,Ce,ze):I.copyTexSubImage2D(gt,xe,ut,bt,Ke,Ze,Ce,ze);k.bindFramebuffer(I.READ_FRAMEBUFFER,null),k.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else $t?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(gt,xe,ut,bt,Bt,Ce,ze,Ie,Pt,Qe,Ct.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(gt,xe,ut,bt,Bt,Ce,ze,Ie,Pt,Ct.data):I.texSubImage3D(gt,xe,ut,bt,Bt,Ce,ze,Ie,Pt,Qe,Ct):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xe,ut,bt,Ce,ze,Pt,Qe,Ct.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xe,ut,bt,Ct.width,Ct.height,Pt,Ct.data):I.texSubImage2D(I.TEXTURE_2D,xe,ut,bt,Ce,ze,Pt,Qe,Ct);I.pixelStorei(I.UNPACK_ROW_LENGTH,st),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,wn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,dr),I.pixelStorei(I.UNPACK_SKIP_ROWS,_n),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Hi),xe===0&&G.generateMipmaps&&I.generateMipmap(gt),k.unbindTexture()},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&ce.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ce.setTextureCube(A,0):A.isData3DTexture?ce.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ce.setTexture2DArray(A,0):ce.setTexture2D(A,0),k.unbindTexture()},this.resetState=function(){R=0,P=0,D=null,k.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}var Xg;const Mt=(Xg=window.Telegram)==null?void 0:Xg.WebApp,Hg="/yggdrasil-tma/",Kl=[{id:"asgard",name:"Асгард",emoji:"🏛️",tag:"Золотой чертог богов",color:"#ffd76a",glow:"rgba(255,215,106,0.8)",dark:"#3d2e00",runeSym:"ᛟ",x:50,y:8,runes:[{id:"algiz",sym:"ᛉ",name:"Альгиз",meaning:"Защита богов",task:"Поблагодари высшие силы за защиту.",reward:8},{id:"ingwaz",sym:"ᛜ",name:"Ингуз",meaning:"Новый цикл",task:"Заверши этап и начни новый.",reward:9},{id:"dagaz",sym:"ᛞ",name:"Дагаз",meaning:"Рассвет",task:"Сделай шаг к прорыву.",reward:10}]},{id:"alfheim",name:"Альфхейм",emoji:"✨",tag:"Мир светлых эльфов",color:"#e8f4ff",glow:"rgba(232,244,255,0.8)",dark:"#1a2a3d",runeSym:"ᚹ",x:25,y:22,runes:[{id:"wunjo",sym:"ᚹ",name:"Вуньо",meaning:"Радость",task:"Сделай что-то для радости.",reward:6},{id:"laguz",sym:"ᛚ",name:"Лагуз",meaning:"Интуиция",task:"Доверься интуиции.",reward:7},{id:"mannaz",sym:"ᛗ",name:"Манназ",meaning:"Человечность",task:"Прояви доброту.",reward:7}]},{id:"vanaheim",name:"Ванахейм",emoji:"🌿",tag:"Дикий мир природы",color:"#b8e986",glow:"rgba(184,233,134,0.8)",dark:"#1a3d00",runeSym:"ᛒ",x:75,y:22,runes:[{id:"berkanan",sym:"ᛒ",name:"Беркана",meaning:"Рост",task:"Позаботься о теле.",reward:6},{id:"perthro",sym:"ᛈ",name:"Пертро",meaning:"Тайна",task:"Прими неопределённость.",reward:7},{id:"jera",sym:"ᛃ",name:"Йера",meaning:"Урожай",task:"Награди себя за труды.",reward:8}]},{id:"midgard",name:"Мидгард",emoji:"🏡",tag:"Земля людей",color:"#7ee787",glow:"rgba(126,231,135,0.8)",dark:"#003d0a",runeSym:"ᚠ",x:50,y:38,runes:[{id:"fehu",sym:"ᚠ",name:"Феху",meaning:"Богатство",task:"Запиши 3 вещи для благодарности.",reward:5},{id:"uruz",sym:"ᚢ",name:"Уруз",meaning:"Сила",task:"Прогулка или зарядка.",reward:5},{id:"thurisaz",sym:"ᚦ",name:"Турисаз",meaning:"Защита",task:"Откажись от истощающего дела.",reward:6},{id:"ansuz",sym:"ᚨ",name:"Ансуз",meaning:"Мудрость",task:"Узнай новое и передай другу.",reward:6}]},{id:"jotunheim",name:"Ётунхейм",emoji:"⛰️",tag:"Мир великанов",color:"#c9b49a",glow:"rgba(201,180,154,0.8)",dark:"#3d2e1a",runeSym:"ᚺ",x:25,y:55,runes:[{id:"hagalaz",sym:"ᚺ",name:"Хагалаз",meaning:"Разрушение",task:"Избавься от старого.",reward:7},{id:"othala",sym:"ᛟ",name:"Одал",meaning:"Дом",task:"Удели время семье.",reward:8},{id:"tiwaz_alt",sym:"ᛏ",name:"Тюр",meaning:"Жертва",task:"Малая жертва ради цели.",reward:8}]},{id:"svartalfheim",name:"Свартальфхейм",emoji:"⚒️",tag:"Кузни дварфов",color:"#ff9d5c",glow:"rgba(255,157,92,0.8)",dark:"#3d1a00",runeSym:"ᚷ",x:75,y:55,runes:[{id:"gebo",sym:"ᚷ",name:"Гебо",meaning:"Дар",task:"Сделай подарок.",reward:7},{id:"ehwaz",sym:"ᛖ",name:"Эваз",meaning:"Движение",task:"Сдвинься с мёртвой точки.",reward:7},{id:"raido",sym:"ᚱ",name:"Райдо",meaning:"Ритм",task:"Выстрой ритм дня.",reward:8}]},{id:"niflheim",name:"Нифльхейм",emoji:"❄️",tag:"Мир льдов",color:"#7ec8ff",glow:"rgba(126,200,255,0.8)",dark:"#001a3d",runeSym:"ᛁ",x:25,y:75,runes:[{id:"isa",sym:"ᛁ",name:"Иса",meaning:"Лёд",task:"10 минут тишины.",reward:5},{id:"nauthiz",sym:"ᚾ",name:"Наутиз",meaning:"Нужда",task:"Откажись от привычки.",reward:6},{id:"eihwaz",sym:"ᛇ",name:"Эйваз",meaning:"Стойкость",task:"Доделай отложенное.",reward:7}]},{id:"muspelheim",name:"Муспельхейм",emoji:"🔥",tag:"Мир огня",color:"#ff6b4a",glow:"rgba(255,107,74,0.8)",dark:"#3d0000",runeSym:"ᚲ",x:75,y:75,runes:[{id:"kenaz",sym:"ᚲ",name:"Кеназ",meaning:"Творчество",task:"Создай что-то.",reward:5},{id:"sowilo",sym:"ᛊ",name:"Совило",meaning:"Победа",task:"Шаг к смелой цели.",reward:6},{id:"teiwaz",sym:"ᛏ",name:"Тейваз",meaning:"Справедливость",task:"Восстанови справедливость.",reward:7}]},{id:"helheim",name:"Хельхейм",emoji:"🕯️",tag:"Подземный мир",color:"#b678ff",glow:"rgba(182,120,255,0.8)",dark:"#1a003d",runeSym:"ᛉ",x:50,y:92,runes:[{id:"calc",sym:"ᚲ",name:"Кальк",meaning:"Трансформация",task:"Прими изменение.",reward:8},{id:"gar",sym:"ᚷ",name:"Гар",meaning:"Судьба",task:"Энергия в одну цель.",reward:9},{id:"yggdrasil",sym:"ᛉ",name:"Иггдрасиль",meaning:"Единство",task:"Осознай связь действий.",reward:10}]}],kA=[{id:"tree",ic:"ᚱ",t:"Путь"},{id:"hero",ic:"ᛗ",t:"Герой"},{id:"gift",ic:"ᚷ",t:"Дар"},{id:"hall",ic:"ᛟ",t:"Чертог"}],Vg={sparks:25,done:[],gift:"",hero:null,trials:[],artifacts:[],watch:0,streak:0,powers:[]},Gg=()=>{try{const t={...Vg,...JSON.parse(localStorage.getItem("yggdrasil")||"")};return Array.isArray(t.powers)||(t.powers=[]),t.watch||(t.watch=Date.now()),t}catch{return{...Vg,watch:Date.now()}}},ua=()=>new Date().toISOString().slice(0,10),zA=t=>t>=500?"Всеотец":t>=300?"Мудрец Древа":t>=150?"Хранитель рун":t>=50?"Странник рун":"Путник",Fd=[3,5,8,12,18,25,40],BA=["Астрид","Фрейдис","Гудрун","Сигрид","Хельга","Ингрид","Ирса","Сольвейг"],HA=["Сигурд","Рагнар","Эйнар","Лейф","Бьорн","Харальд","Ульф","Гудмунд"],Od=[{id:"elf",race:"Эльфийка",gender:"f",sym:"ᛊ",color:"#e8f4ff",str:6,en:10,hp:90,weapon:"Лук Лунного Света",ability:"Шёпот ветров",abilityDesc:"1 раз в мире убирает один неверный ответ загадки.",img:"hero_elf.png"},{id:"viking",race:"Викинг",gender:"m",sym:"ᛉ",color:"#ffd76a",str:9,en:7,hp:110,weapon:"Копьё Молний",ability:"Крылья бури",abilityDesc:"1 раз за бой щитом поглощает удар врага.",img:"hero_viking.png"},{id:"dwarf",race:"Гном",gender:"m",sym:"ᚲ",color:"#ff9d5c",str:10,en:5,hp:130,weapon:"Молот Глубин",ability:"Каменная кожа",abilityDesc:"Получает на 25% меньше урона; сундуки дают +50% искр.",img:"hero_dwarf.png"},{id:"berserk",race:"Берсерк",gender:"m",sym:"ᚦ",color:"#ff6b4a",str:12,en:4,hp:100,weapon:"Секира «Клык Зверя»",ability:"Медвежья ярость",abilityDesc:"Когда здоровье ниже половины — урон удваивается.",img:"hero_berserk.png"}],da={midgard:{name:"Хеймдалль",title:"Страж Радужного моста",hp:30,atk:5,sym:"ᚺ",greet:"Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие."},muspelheim:{name:"Сурт",title:"Огненный великан",hp:35,atk:6,sym:"ᚲ",greet:"Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч."},niflheim:{name:"Нидхёгг",title:"Дракон корней",hp:35,atk:6,sym:"ᚾ",greet:"Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей."},jotunheim:{name:"Вафтруднир",title:"Мудрейший из великанов",hp:40,atk:7,sym:"ᚺ",greet:"Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову."},vanaheim:{name:"Ньёрд",title:"Владыка морей и ветров",hp:40,atk:7,sym:"ᚾ",greet:"Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь."},alfheim:{name:"Фрейр",title:"Владыка Альфхейма",hp:45,atk:8,sym:"ᚠ",greet:"Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч."},svartalfheim:{name:"Синдри",title:"Мастер кузниц",hp:45,atk:8,sym:"ᚲ",greet:"Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою."},helheim:{name:"Хель",title:"Госпожа подземного мира",hp:50,atk:9,sym:"ᛉ",greet:"Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки."},asgard:{name:"Один",title:"Всеотец",hp:60,atk:10,sym:"ᛟ",greet:"Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй."}},Wg={midgard:"master_midgard",alfheim:"master_alfheim",vanaheim:"master_vanaheim",asgard:"master_asgard",jotunheim:"master_jotunheim",svartalfheim:"master_svartalfheim",niflheim:"master_niflheim",muspelheim:"master_muspelheim",helheim:"master_helheim"},kd={midgard:[{q:"Как зовут мост, что я стерегу, ярче пламени и светлее солнца?",a:["Гьялларбру","Биврёст","Нагльфар"],c:1},{q:"Как зовут мой рог, что разбудит всех богов в последний час?",a:["Гьяллархорн","Гунгнир","Гримнир"],c:0},{q:"Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.",a:["Лединг","Дроми","Глейпнир"],c:2}],muspelheim:[{q:"Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?",a:["Нагльфар","Скидбладнир","Хрингхорни"],c:0},{q:"Как зовут мой меч, светлее солнца, который я подниму в последней битве?",a:["Гунгнир","Лэватеинн, меч победы","Мьёльнир"],c:1},{q:"Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?",a:["Мост через Гьёлль","Нагльфар","Биврёст"],c:2}],niflheim:[{q:"Как зовут источник в тумане, где я свернусь и точу корни Древа?",a:["Источник Мимира","Хвергельмир","Источник Урд"],c:1},{q:"Как зовут белку, что носит мои проклятья орлу на вершине Древа?",a:["Рататоск","Ведфёльнир","Эйктюрнир"],c:0},{q:"Как зовут Древо, чьи корни я грызу, а оно всё живёт?",a:["Гласир","Лэрад","Иггдрасиль"],c:2}],jotunheim:[{q:"Как зовут великана, из плоти которого создан Мидгард?",a:["Имир","Бергельмир","Хюмир"],c:0},{q:"Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?",a:["Скинфакси","Хримфакси","Свадильфари"],c:1},{q:"Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?",a:["Слид","Гьёлль","Ифинг"],c:2}],vanaheim:[{q:"В каком мире я рождён и выращен, в отличие от асов?",a:["Ванахейм","Асгард","Альфхейм"],c:0},{q:"Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?",a:["Фригг","Сиф","Фрейя"],c:2},{q:"О чём молят меня мореходы и рыбаки?",a:["О победе в бою","О попутном ветре и улове","Об урожае полей"],c:1}],alfheim:[{q:"Какой мир достался мне в детстве как «подарок на первый зуб»?",a:["Ванахейм","Альфхейм","Ётунхейм"],c:1},{q:"Как зовут мой корабль, что складывается как ткань и вмещает всех богов?",a:["Скидбладнир","Нагльфар","Хрингхорни"],c:0},{q:"Что отдал я Скирниру, чтобы завоевать великаншу Герд?",a:["Коня Блодугхофи","Кольцо Драупнир","Свой победный меч"],c:2}],svartalfheim:[{q:"Что выковали мы с братом Брокком, чем теперь бьёт Тор?",a:["Гунгнир","Мьёльнир","Драупнир"],c:1},{q:"Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?",a:["Драупнир","Брисингамен","Андваранаут"],c:0},{q:"Как зовут золотого вепря, что мы выковали быстрее любого коня?",a:["Гулльфакси","Свадильфари","Гуллинбурсти"],c:2}],helheim:[{q:"Как зовут мой чертог, где принимаю я умерших от болезней и старости?",a:["Эльюднир","Настронд","Вальхалла"],c:0},{q:"Как зовут моего пса, что стережёт врата моего царства?",a:["Фенрир","Гарм","Сколль"],c:1},{q:"Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?",a:["Ран","Нотт","Хель"],c:2}],asgard:[{q:"Что отдал я за глоток из источника Мимира, дающий мудрость?",a:["Свой глаз","Коня Слейпнира","Кольцо Драупнир"],c:0},{q:"Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?",a:["Гери и Фреки","Хугин и Мунин","Сколль и Хати"],c:1},{q:"Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?",a:["Слова прощения","Тайну рун","Этого не знает никто, кроме Одина"],c:2}]},zd={midgard:"Мегингъёрд — пояс силы",muspelheim:"Пламя Муспеля",niflheim:"Осколок Хвергельмира",jotunheim:"Камень Ифинга",vanaheim:"Ветер Ньёрда",alfheim:"Свет Альфхейма",svartalfheim:"Драупнир — кольцо изобилия",helheim:"Слеза Хель",asgard:"Гунгнир — копьё Всеотца"};function Mr({name:t,className:e}){return H.jsx("img",{src:t.includes(".")?`${Hg}img/${t}`:`${Hg}img/${t}.jpg`,className:e,alt:"",draggable:!1})}const VA=`
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
`,as=(t,e=.9,n=0)=>new yt({color:t,roughness:e,metalness:n}),be=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function GA(t){return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}function WA(t){const e=new et,n=t.gender==="m",i=n?13210479:14265738,r=t.id==="elf"?12110033:t.id==="dwarf"?7293490:2760989,s=t.id==="berserk"?5906464:t.id==="dwarf"?7424047:t.id==="viking"?5983019:2505549,o=t.id==="dwarf"?4926748:3811356,a=t.id==="berserk"?10198947:7567998,l=as(i,.92),c=as(s,.9),d=as(o,.96),f=as(r,.95),h=as(a,.78),p=as(2106150,.98),_=new re(new Rn(.28,.24,5,8),d);_.position.y=.72,e.add(_);const w=new re(new Rn(n?.37:.32,.56,6,10),c);w.position.y=1.15,e.add(w);const g=new re(new Rn(n?.4:.34,.34,5,8),c);g.scale.z=.82,g.position.y=1.28,e.add(g);const u=new re(new Vt(.36,.38,.09,12),d);u.position.y=.93,e.add(u);const m=new re(new sn(.12,.12,.055),h);m.position.set(0,.93,.38),e.add(m);const v=new re(new Vt(.13,.15,.18,10),l);v.position.y=1.63,e.add(v);const y=new re(new on(.31,16,12),l);y.scale.set(.92,1.06,.92),y.position.y=1.91,e.add(y);const b=new re(new on(.325,14,10),f);b.scale.set(.98,.72,.98),b.position.set(0,2.08,-.025),e.add(b);const R=new re(new Rn(.18,.3,5,8),f);R.position.set(0,1.93,-.25),R.rotation.x=.15,e.add(R);const P=new re(new Cn(.045,.13,5),l);P.rotation.x=Math.PI/2,P.position.set(0,1.92,.3),e.add(P);const D=new yt({color:1513754,roughness:.55});for(const K of[-.105,.105]){const ne=new re(new on(.025,7,5),D);ne.position.set(K,1.98,.285),e.add(ne)}if(n){const K=new re(new on(.19,10,7),f);K.scale.set(.82,1,.72),K.position.set(0,1.8,.24),e.add(K)}else{const K=new re(new Rn(.055,.42,4,7),f);K.position.set(-.27,1.78,-.08),K.rotation.z=-.22,e.add(K)}const M=K=>{const ne=new et;ne.position.set(K*(n?.43:.39),1.43,0),ne.rotation.z=K*.07;const we=new re(new Rn(.105,.42,5,7),c);we.position.y=-.23,ne.add(we);const me=new et;me.position.y=-.46,ne.add(me);const Ee=new re(new Rn(.085,.34,5,7),d);Ee.position.y=-.2,me.add(Ee);const nt=new re(new on(.105,9,7),l);return nt.position.y=-.43,me.add(nt),e.add(ne),{upper:ne,elbow:me}},x=M(-1),N=M(1),z=K=>{const ne=new et;ne.position.set(K*.15,.68,0);const we=new re(new Rn(.12,.42,5,7),p);we.position.y=-.23,ne.add(we);const me=new et;me.position.y=-.48,ne.add(me);const Ee=new re(new Rn(.095,.4,5,7),p);Ee.position.y=-.22,me.add(Ee);const nt=new re(new Rn(.13,.24,5,7),d);return nt.scale.z=1.25,nt.position.set(0,-.47,.075),me.add(nt),e.add(ne),ne},$=z(-1),ie=z(1),ae=new re(new Rn(.42,.1,5,8),d);ae.scale.z=.72,ae.position.y=1.48,e.add(ae);const B=new re(new sn(.58,.92,.075),as(t.id==="berserk"?2821132:1582894,.98));B.position.set(0,1.05,-.28),B.rotation.x=-.035,e.add(B);const W=new et;if(t.id==="berserk"||t.id==="dwarf"){const K=new re(new Vt(.035,.045,.72,7),d);K.position.y=.36,W.add(K);const ne=new re(new sn(.16,.34,.055),h);ne.position.set(0,.88,0),ne.rotation.z=t.id==="dwarf"?-.22:.22,W.add(ne)}else{const K=new re(new Vt(.028,.04,1.1,7),d);K.position.y=.52,W.add(K);const ne=new re(new Cn(.075,.25,6),h);ne.position.y=1.18,W.add(ne)}if(W.position.set(.43,.32,.03),W.rotation.z=-.12,e.add(W),t.id==="viking"||t.id==="berserk"){const K=new re(new Vt(.3,.3,.1,16),d);K.rotation.x=Math.PI/2,K.position.set(0,1.12,-.37),e.add(K);const ne=new re(new on(.065,8,6),h);ne.position.set(0,1.12,-.43),e.add(ne)}const F=new re(new xo(.62,24),new cu({color:0,transparent:!0,opacity:.32}));return F.rotation.x=-Math.PI/2,F.position.y=.02,e.add(F),e.userData.anim={armL:x,armR:N,legL:$,legR:ie,weapon:W,phase:t.id==="elf"?1.2:t.id==="dwarf"?2.4:0},GA(e)}function XA({h:t,on:e,eventDone:n}){const i=_t.useRef(null),r=_t.useRef(null),s=_t.useRef(null),o=_t.useRef({x:0,z:28,dx:0,dz:0}),[a,l]=_t.useState(""),[c,d]=_t.useState(!1),[f,h]=_t.useState(!1),[p,_]=_t.useState(!1),[w,g]=_t.useState(!1),u=_t.useRef({x:0,z:1}),m=_t.useRef(!1),v=_t.useRef(null);_t.useEffect(()=>{const M=i.current;if(!M)return;const x=new CM;x.background=new pt(9414817),x.fog=new Pp(8097158,.0058);const N=new Kn(54,1,.1,280);N.position.set(0,8.5,17);const z=new OA({antialias:!0,powerPreference:"high-performance"});z.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),z.shadowMap.enabled=!0,z.shadowMap.type=ox,z.outputColorSpace=Bn,z.toneMapping=ax,z.toneMappingExposure=1.08,M.appendChild(z.domElement);const $=new KM(14477797,4014136,1.38);x.add($);const ie=new hg(16773583,3.15);ie.position.set(-42,58,34),ie.castShadow=!0,ie.shadow.mapSize.set(1024,1024),ie.shadow.camera.left=-95,ie.shadow.camera.right=95,ie.shadow.camera.top=95,ie.shadow.camera.bottom=-95,ie.shadow.bias=-5e-4,x.add(ie);const ae=new hg(12110789,.58);ae.position.set(55,18,-60),x.add(ae);const B=(S,C)=>{const E=Math.sin(S*.075)*.7+Math.cos(C*.062)*.55+Math.sin((S-C)*.045)*.35,U=Math.exp(-(S*S/850+(C+2)*(C+2)/1050)),J=Math.exp(-(S*S/150+(C-12)*(C-12)/2200));return E*(1-U*.88)-J*.18},W=S=>{const C=document.createElement("canvas");C.width=C.height=512;const E=C.getContext("2d"),U=q=>Math.abs(Math.sin(q*12.9898)*43758.5453)%1;if(S==="ground"){E.fillStyle="#3f4d38",E.fillRect(0,0,512,512);for(let q=0;q<1800;q++){const ue=U(q*1.17)*512,fe=U(q*2.31)*512,Me=10+U(q*3.71)*28,oe=U(q*4.13);E.fillStyle=oe>.72?`rgba(96,108,63,${.08+U(q)*.12})`:`rgba(30,36,25,${.05+U(q)*.12})`,E.beginPath(),E.arc(ue,fe,Me,0,Math.PI*2),E.fill()}for(let q=0;q<650;q++){const ue=U(q*7.1)*512,fe=U(q*8.2)*512;E.strokeStyle=`rgba(118,126,78,${.16+U(q*2)*.16})`,E.lineWidth=1+U(q*4)*1.5,E.beginPath(),E.moveTo(ue,fe),E.lineTo(ue+(U(q*5)-.5)*5,fe-3-U(q*6)*5),E.stroke()}}else if(S==="wood"){E.fillStyle="#5a3d29",E.fillRect(0,0,512,512);for(let q=0;q<512;q+=22)E.fillStyle=`rgba(25,15,9,${.18+U(q)*.13})`,E.fillRect(0,q,512,3),E.strokeStyle=`rgba(154,111,69,${.08+U(q*2)*.08})`,E.lineWidth=2,E.beginPath(),E.moveTo(0,q+7),E.bezierCurveTo(150,q+2,340,q+13,512,q+5),E.stroke();for(let q=0;q<65;q++){const ue=U(q*2.1)*512;E.fillStyle=`rgba(20,12,8,${.12+U(q*3)*.16})`,E.fillRect(ue,0,2+U(q*4)*3,512)}}else if(S==="roof"){E.fillStyle="#252522",E.fillRect(0,0,512,512);for(let q=-30;q<550;q+=25){E.fillStyle=`rgba(105,94,77,${.12+U(q)*.08})`,E.fillRect(0,q,512,2),E.strokeStyle="rgba(12,12,11,.48)",E.lineWidth=3;for(let ue=-40;ue<560;ue+=38)E.beginPath(),E.moveTo(ue,q),E.lineTo(ue-18,q+28),E.stroke()}for(let q=0;q<180;q++)E.fillStyle=`rgba(170,154,123,${.03+U(q)*.07})`,E.fillRect(U(q*2)*512,U(q*3)*512,2+U(q*4)*7,2)}else{E.fillStyle="#514333",E.fillRect(0,0,512,512);for(let q=0;q<1300;q++){const ue=U(q*1.3)*512,fe=U(q*2.7)*512;E.fillStyle=`rgba(${45+U(q*3)*38},${35+U(q*4)*28},${23+U(q*5)*20},${.08+U(q*6)*.18})`,E.fillRect(ue,fe,2+U(q*7)*7,1+U(q*8)*4)}}const J=new DM(C);return J.wrapS=J.wrapT=kc,J.colorSpace=Bn,J.anisotropy=4,J},F=W("ground");F.repeat.set(5,6);const K=new Ji(190,190,62,62),ne=K.attributes.position;for(let S=0;S<ne.count;S++){const C=ne.getX(S),E=-ne.getY(S);ne.setZ(S,B(C,E))}K.rotateX(-Math.PI/2),K.computeVertexNormals();const we=new re(K,new cg({map:F}));we.receiveShadow=!0,x.add(we);const me=(S,C,E)=>(C&&(S.userData={id:C,label:E||C}),S.traverse(U=>{U.isMesh&&(U.castShadow=!0,U.receiveShadow=!0)}),x.add(S),C&&Z.push(S),S),Ee=(S,C=.9,E=0)=>new yt({color:S,roughness:C,metalness:E}),nt=S=>new cg({color:S}),X=(S,C,E,U,J=.9)=>new re(new sn(S,C,E),Ee(U,J)),Z=[],he=[],Ue=[],$e=[],He=[],lt=.62,St=(S,C,E,U,J=0,q=.12)=>He.push({kind:"rect",x:S,z:C,w:E+q*2,d:U+q*2,rot:J}),I=(S,C,E,U=.12)=>He.push({kind:"circle",x:S,z:C,r:E+U}),At=(S,C,E,U,J,q=.12)=>He.push({kind:"segment",x1:S,z1:C,x2:E,z2:U,r:J+q}),rt=(S,C,E)=>{if(E.kind==="circle")return Math.hypot(S-E.x,C-E.z)<E.r+lt;if(E.kind==="rect"){const oe=Math.cos(E.rot),Oe=Math.sin(E.rot),Ne=S-E.x,dt=C-E.z,vt=oe*Ne-Oe*dt,ft=Oe*Ne+oe*dt,Et=Math.max(-E.w/2,Math.min(E.w/2,vt)),fi=Math.max(-E.d/2,Math.min(E.d/2,ft));return Math.hypot(vt-Et,ft-fi)<lt}const U=E.x2-E.x1,J=E.z2-E.z1,q=U*U+J*J,ue=q>0?Math.max(0,Math.min(1,((S-E.x1)*U+(C-E.z1)*J)/q)):0,fe=E.x1+U*ue,Me=E.z1+J*ue;return Math.hypot(S-fe,C-Me)<E.r+lt},Je=(S,C)=>m.current?S<fn-2.72||S>fn+2.72||C<nn-2.05||C>nn+2.3:He.some(E=>rt(S,C,E)),k=(S,C,E)=>{if(m.current){const q=Math.max(fn-2.55,Math.min(fn+2.55,C)),ue=Math.max(nn-1.92,Math.min(nn+2.55,E));S.x=q,S.z=ue;return}const U=Math.max(-88,Math.min(88,C)),J=Math.max(-89,Math.min(89,E));if(!Je(U,J)){S.x=U,S.z=J;return}Je(U,S.z)||(S.x=U),Je(S.x,J)||(S.z=J)},Ae=Ee(3425343,1);for(let S=0;S<22;S++){const C=new et,E=-105+S*10,U=8+be(S,7)*9,J=new re(new Cn(U,18+be(S,8)*16,7),Ae);J.position.y=8,C.add(J),C.position.set(E,-1,-94+be(S,9)*11),me(C)}const se=[];for(let S=0;S<=24;S++){const C=-94+S*8,E=-57+Math.sin(S*.55)*3.6;se.push(new O(E,B(E,C)-.05,C))}const ce=new Sh(se),Xe=new Wc(ce,64,5.8,8,!1),Ye=new re(Xe,new yt({color:2576218,roughness:.2,metalness:.05,transparent:!0,opacity:.9}));Ye.scale.y=.025,Ye.position.y=.05,Ye.receiveShadow=!0,x.add(Ye);for(let S=0;S<50;S++){const C=-92+S*3.7,E=-57+Math.sin(S*.55)*3.6,U=.35+be(S,15)*.6,J=new re(new Zt(U,1),Ee(6185562,1));J.scale.y=.55,J.position.set(E+(be(S,16)-.5)*10,B(E,C)+.25,C),me(J),I(J.position.x,J.position.z,U*.9,.03)}const L=(S,C)=>{const E=S.map(([fe,Me])=>new O(fe,B(fe,Me)+.035,Me)),U=[],J=[];for(let fe=0;fe<E.length;fe++){const Me=E[Math.max(0,fe-1)],oe=E[Math.min(E.length-1,fe+1)],Oe=oe.x-Me.x,Ne=oe.z-Me.z,dt=Math.max(.001,Math.hypot(Oe,Ne)),vt=-Ne/dt,ft=Oe/dt;if(U.push(E[fe].x+vt*C/2,E[fe].y,E[fe].z+ft*C/2,E[fe].x-vt*C/2,E[fe].y+.01,E[fe].z-ft*C/2),fe<E.length-1){const Et=fe*2;J.push(Et,Et+1,Et+2,Et+1,Et+3,Et+2)}}const q=new vn;q.setAttribute("position",new Rt(U,3)),q.setIndex(J),q.computeVertexNormals();const ue=new re(q,new yt({map:W("road"),roughness:1}));ue.receiveShadow=!0,x.add(ue),[-C*.22,C*.22].forEach(fe=>{const Me=E.map((Ne,dt)=>{const vt=E[Math.max(0,dt-1)],ft=E[Math.min(E.length-1,dt+1)],Et=ft.x-vt.x,fi=ft.z-vt.z,fr=Math.max(.001,Math.hypot(Et,fi));return new O(Ne.x+-fi/fr*fe,Ne.y+.045,Ne.z+Et/fr*fe)}),oe=new Wc(new Sh(Me),Math.max(12,E.length*4),.055,5,!1),Oe=new re(oe,Ee(3352863,1));Oe.scale.y=.12,x.add(Oe)})};L([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4),L([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7),L([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6),L([[1,-3],[10,-10],[20,-18],[29,-28]],4.5),L([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4),L([[4,14],[-3,22],[-7,31],[-8,42]],3.8),L([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4),L([[4,14],[10,28],[18,41],[27,57]],3.8),L([[5,31],[15,45],[27,57],[39,70]],3.7),L([[-20,20],[-36,28],[-51,34],[-64,36]],3.6),L([[-39,-8],[-47,-12],[-53,-15]],3.4);const T=W("wood");T.repeat.set(2,1);const Y=W("roof");Y.repeat.set(2,2);const te=(S,C,E,U,J,q,ue,fe,Me)=>{const oe=new et;oe.rotation.y=J,oe.position.set(S,B(S,C),C),oe.userData={id:ue,label:q};const Oe=new yt({color:5856085,roughness:1}),Ne=new yt({map:T,color:fe,roughness:.92});Ee(2695193,1);const dt=X(E+.7,.62,U+.7,5658706,1);dt.position.y=.31,oe.add(dt);const vt=new re(new sn(E,3.55,U),Ne);vt.position.y=2.05,oe.add(vt);for(const Gi of[-E*.46,E*.46])for(const es of[-U*.5,U*.5]){const pr=X(.34,3.9,.34,2760728,1);pr.position.set(Gi,2.08,es),oe.add(pr)}const ft=X(1.18,2.15,.18,2365714,1);ft.position.set(0,1.35,U/2+.17),oe.add(ft);const Et=X(.14,2.35,.22,3811613,1),fi=Et.clone();Et.position.set(-.67,1.42,U/2+.2),fi.position.set(.67,1.42,U/2+.2),oe.add(Et,fi);for(const Gi of[-E*.27,E*.27]){const es=X(1.15,.95,.14,2760987,1);es.position.set(Gi,2.18,U/2+.18),oe.add(es);const pr=new re(new sn(.88,.68,.06),new yt({color:15775837,emissive:14186786,emissiveIntensity:1.8,roughness:.35}));pr.position.set(Gi,2.18,U/2+.255),oe.add(pr);const Em=X(.07,.76,.12,2760987,1);Em.position.set(Gi,2.18,U/2+.3),oe.add(Em);const Tm=X(1,.07,.12,2760987,1);Tm.position.set(Gi,2.18,U/2+.3),oe.add(Tm)}const fr=new yt({map:Y,color:Me,roughness:.98,side:yi}),Qr=new re(new Ji(E*.82,U+1),fr),hr=new re(new Ji(E*.82,U+1),fr);Qr.rotation.x=Math.PI/2,hr.rotation.x=Math.PI/2,Qr.rotation.z=.62,hr.rotation.z=-.62,Qr.position.set(-E*.22,4.22,0),hr.position.set(E*.22,4.22,0),oe.add(Qr,hr);const Us=X(.3,.28,U+1.08,2826523,1);Us.position.y=5.08,oe.add(Us);const jo=X(E*.34,.16,1,6439467,1);jo.position.set(0,.68,U/2+.54),oe.add(jo);const Yo=new re(new sn(.62,2,.62),Oe);Yo.position.set(E*.24,5.15,-U*.08),oe.add(Yo);const Au=X(.82,.12,.82,3486254,1);Au.position.set(E*.24,6.17,-U*.08),oe.add(Au),me(oe,ue,q),Z.push(oe),St(S,C,E+.85,U+.85,J,.05)};te(-15,-18,9,7,.18,"Дом дружинника","house",8411194,2894119),te(13,-18,10,7,-.08,"Дом старейшины","house",7753782,2696997),te(23,-6,8,6,.72,"Дом рыбака","fisher",7229497,3158061),te(17,9,8,6,-.35,"Дом охотника","hunter",7031346,2696997),te(3,-25,8,6,.05,"Дом травницы","herbalist",7688760,3222312),te(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",7359282,2631204);const de=new et;de.position.set(-10,B(-10,-5),-5),de.userData={id:"forge",label:"Кузница"};const le=X(9,3.8,6,5126701,1);le.position.y=1.9,de.add(le);const Le=X(2.8,3.6,.28,2760986,1);Le.position.set(-3.1,1.9,3.05),de.add(Le);const _e=new re(new sn(5.5,.24,6.7),new yt({map:Y,color:2433826,roughness:1}));_e.rotation.z=.58,_e.position.set(-2,4.2,0),de.add(_e);const Ve=_e.clone();Ve.rotation.z=-.58,Ve.position.x=2,de.add(Ve);const Ge=X(2.2,1.8,1.7,3486512,1);Ge.position.set(-2,1,1.15),de.add(Ge);const Se=new re(new xo(.55,16),new yt({color:16739364,emissive:16726795,emissiveIntensity:5}));Se.rotation.y=Math.PI,Se.position.set(-2,1.05,2.02),de.add(Se);const De=X(1.4,.35,.55,2435114,.4);De.position.set(1.2,1.05,1.15),de.add(De);const tt=X(.5,.9,.5,2697770,.45);tt.position.set(1.2,.62,1.15),de.add(tt);for(let S=0;S<4;S++){const C=X(.09,1.35,.09,11184548,.35);C.position.set(2.1+S*.18,1.1,1.3),C.rotation.z=-.3+S*.18,de.add(C)}me(de,"forge","Кузница"),Z.push(de),St(-10,-5,9.6,6.6,0,.05);const We=new ca(16742962,3.2,13,2);We.position.set(-12,B(-12,-5)+2.2,-4),x.add(We);const Re=new re(new xo(8.5,32),new yt({color:7035463,roughness:1}));Re.rotation.x=-Math.PI/2,Re.position.set(1,B(1,0)+.05,0),Re.receiveShadow=!0,x.add(Re);for(let S=0;S<18;S++){const C=S/18*Math.PI*2,E=new re(new Zt(.38,1),Ee(7039843,1));E.position.set(1+Math.cos(C)*8.8,B(1+Math.cos(C)*8.8,Math.sin(C)*8.8)+.22,Math.sin(C)*8.8),x.add(E)}const ot=(S,C)=>{const E=new et,U=X(2.8,.22,1,6832937,1);U.position.y=1.05,E.add(U);for(const J of[-1.05,1.05]){const q=X(.16,1,.16,3877149,1);q.position.set(J,.5,-.32),E.add(q);const ue=q.clone();ue.position.z=.32,E.add(ue)}E.position.set(S,B(S,C),C),x.add(E)};ot(-4,2),ot(7,3);const V=(S,C,E)=>{const U=new et;U.position.set(S,B(S,C),C);for(let oe=0;oe<7;oe++){const Oe=oe/7*Math.PI*2,Ne=new re(new Zt(.32*E,1),Ee(6117970,1));Ne.position.set(Math.cos(Oe)*.7*E,.25*E,Math.sin(Oe)*.7*E),U.add(Ne)}const J=X(.2*E,.2*E,1.5*E,4861211,1),q=J.clone();J.rotation.y=.55,q.rotation.y=-.55,J.position.y=q.position.y=.38*E,U.add(J,q);const ue=new yt({color:16744744,emissive:16731402,emissiveIntensity:4}),fe=new re(new Cn(.5*E,1.35*E,8),ue);fe.position.y=1.02*E,U.add(fe),x.add(U);const Me=new ca(16747068,2.4*E,12*E,2);return Me.position.set(S,B(S,C)+2*E,C),x.add(Me),he.push({light:Me,flame:fe,phase:be(S,C)*8}),U};V(1,0,1.15),V(18,-15,.72);const ge=(S,C,E,U,J=1.25)=>{const q=new et,ue=E-S,fe=U-C,Me=Math.hypot(ue,fe),oe=Math.max(1,Math.floor(Me/1.55));for(let Oe=0;Oe<=oe;Oe++){const Ne=Oe/oe,dt=S+ue*Ne,vt=C+fe*Ne,ft=X(.18,J,.18,4796447,1);ft.position.set(dt,B(dt,vt)+J/2,vt),q.add(ft)}for(const Oe of[-.28,.38]){const Ne=X(.14,.14,Me,5978917,1);Ne.rotation.y=Math.atan2(ue,fe),Ne.position.set((S+E)/2,B((S+E)/2,(C+U)/2)+J*Oe,(C+U)/2),q.add(Ne)}x.add(q),At(S,C,E,U,.12,.02)},Te=(S,C,E,U,J,q,ue)=>{const fe=new et;fe.position.set(S,B(S,C),C),fe.rotation.y=J,fe.userData={id:ue,label:q};const Me=X(E+.25,.35,U+.25,5591368,1);Me.position.y=.18,fe.add(Me);const oe=new re(new sn(E,2.5,U),new yt({map:T,color:6439983,roughness:1}));oe.position.y=1.45,fe.add(oe);const Oe=new re(new sn(E+.6,.18,U+.65),new yt({map:Y,color:2696996,roughness:1}));Oe.rotation.z=.55,Oe.position.set(-.16,3,0),fe.add(Oe);const Ne=Oe.clone();Ne.rotation.z=-.55,Ne.position.x=.16,fe.add(Ne);const dt=X(1.05,1.75,.12,2759700,1);dt.position.set(0,1.05,U/2+.07),fe.add(dt),me(fe,ue,q),Z.push(fe),St(S,C,E+.55,U+.55,J,.04)},Fe=(S,C,E=1)=>{const U=new et;U.position.set(S,B(S,C),C);const J=new re(new Vt(.65*E,.65*E,1.2*E,10),Ee(9073729,1));J.rotation.z=Math.PI/2,J.position.y=.62*E,U.add(J);for(let q=0;q<3;q++){const ue=new re(new rn(.66*E,.025*E,5,18),Ee(5851693,1));ue.rotation.y=Math.PI/2,ue.position.y=(.28+q*.34)*E,U.add(ue)}me(U)},ve=(S,C,E)=>{const U=new et;U.position.set(S,B(S,C),C),U.rotation.y=E;const J=X(2.8,.28,1.45,6636331,1);J.position.y=1,U.add(J);for(const ue of[-1.15,1.15])for(const fe of[-.55,.55]){const Me=X(.16,1.15,.16,4401950,1);Me.position.set(ue,.55,fe),U.add(Me)}for(const ue of[-1.15,1.15]){const fe=new re(new Vt(.5,.5,.18,14),Ee(2696738,1));fe.rotation.z=Math.PI/2,fe.position.set(ue,.52,-.92),U.add(fe)}const q=X(.16,.16,2.4,4796447,1);q.rotation.x=Math.PI/2,q.position.set(0,.72,-2),U.add(q),me(U)},pe=(S,C,E=0)=>{const U=new et;U.position.set(S,B(S,C),C),U.rotation.y=E;const J=X(2.2,.16,.5,7359021,1);J.position.y=.85,U.add(J);for(const q of[-.78,.78]){const ue=X(.12,.8,.12,4139549,1);ue.position.set(q,.4,0),U.add(ue)}me(U)},Be=(S,C)=>{const E=new et;E.position.set(S,B(S,C),C);for(let ue=0;ue<10;ue++){const fe=ue/10*Math.PI*2,Me=X(.45,.38,.38,6710621,1);Me.position.set(Math.cos(fe)*.95,.19,Math.sin(fe)*.95),Me.rotation.y=fe,E.add(Me)}const U=X(.16,2.2,.16,4861984,1),J=U.clone();U.position.set(-.9,1.2,0),J.position.set(.9,1.2,0),E.add(U,J);const q=X(2,.16,.16,3876891,1);q.position.y=2.25,E.add(q),me(E)};Te(-19,31,8,5,.08,"Амбар","barn"),Te(17,34,7,5,-.2,"Сарай","shed"),Te(27,13,6,4,.45,"Склад рыбака","fishshed"),ge(-25,27,-13,27),ge(-25,27,-25,38),ge(-25,38,-14,38),ge(12,29,25,29),ge(25,29,25,40),ge(25,40,12,40),ge(29,-1,39,-1),ge(39,-1,39,10),ge(39,10,30,10);for(const S of[[-20,29,1],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]])Fe(S[0],S[1],S[2]);ve(-17,24,.18),ve(29,-5,-.55),pe(-20,23,.18),pe(25,31,-.2),te(-31,8,7,5,.1,"Дом рыбака","fisher2",6899762,2960169),te(-27,20,7,5,-.25,"Дом плотника","carpenter",7753785,3156775),te(31,18,7,5,.32,"Дом охотницы","hunter2",6505263,2696996),te(20,24,7,5,-.12,"Дом семьи","family",7951418,2959655),St(-31,8,7.8,5.8,.1,.04),St(-27,20,7.8,5.8,-.25,.04),St(31,18,7.8,5.8,.32,.04),St(20,24,7.8,5.8,-.12,.04);const it=(S,C,E)=>{const U=new et;U.position.set(S,B(S,C),C),U.rotation.y=E;const J=X(3,.18,1.25,7357994,1);J.position.y=1.45,U.add(J);for(const ue of[-1.25,1.25])for(const fe of[-.48,.48]){const Me=X(.13,1.45,.13,4270877,1);Me.position.set(ue,.72,fe),U.add(Me)}const q=new re(new Cn(1.65,2.5,4,1,!1,Math.PI/4),Ee(4798510,1));q.scale.z=.55,q.position.y=2.15,U.add(q),me(U)};it(-5,-7,.12),it(8,-5,-.18),it(6,7,.5);for(const S of[[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]])Be(S[0],S[1]);const Dt=(S,C,E=1)=>{const U=new et,J=B(S,C);for(let q=0;q<5;q++){const ue=new re(new on((.28+be(q,S)*.18)*E,8,6),Ee(q%2?3494457:4284223,1));ue.position.set((be(q,2)-.5)*.7*E,.28*E,(be(q,3)-.5)*.7*E),U.add(ue)}U.position.set(S,J,C),me(U)};for(let S=0;S<48;S++){const C=be(S,501)*Math.PI*2,E=18+be(S,502)*39,U=Math.cos(C)*E,J=Math.sin(C)*E+4;Math.abs(U)<9&&Math.abs(J)<14||Dt(U,J,.65+be(S,503)*.75)}for(let S=0;S<34;S++){const C=-84+be(S,610)*168,E=-82+be(S,611)*164;if(Math.hypot(C,E-2)<24)continue;const U=.25+be(S,612)*.55,J=new re(new Zt(U,1),Ee(5725013,1));J.scale.y=.55,J.position.set(C,B(C,E)+U*.28,E),J.rotation.set(be(S,613),be(S,614),be(S,615)),me(J),I(C,E,U*.8,.03)}te(-64,36,8,5,.12,"Старый дом","oldfarm",6505263,2828582),Te(-58,42,6,4,-.12,"Старый амбар","oldbarn"),ge(-70,32,-60,32),ge(-70,32,-70,43),ge(-70,43,-61,43),Fe(-67,39,.9),ve(-61,33,-.25),Be(-57,34);const xt=new et;xt.position.set(-63,B(-63,47),47);for(let S=0;S<6;S++){const C=X(10,.035,.12,4208682,1);C.position.set(0,.02,(S-2.5)*1.05),C.rotation.y=.06,xt.add(C)}me(xt);const tn=new et;tn.position.set(39,B(39,70),70),tn.userData={id:"runefield",label:"Поле Рун"};const ni=Ee(5593942,1),Oo=new yt({color:12163675,emissive:6833949,emissiveIntensity:1.6,roughness:.62});for(let S=0;S<11;S++){const C=be(S,1201)*Math.PI*2,E=3.5+be(S,1202)*8,U=new re(new Zt(.65+be(S,1203)*.38,1),ni);U.scale.y=1.4+be(S,1204)*1.5,U.position.set(Math.cos(C)*E,U.scale.y*.48,Math.sin(C)*E),U.rotation.set(be(S,1205),C,be(S,1206)),tn.add(U);const J=new re(new sn(.11,.035,.72),Oo);J.position.set(U.position.x,U.position.y+.55,U.position.z),J.rotation.y=-C+.45,tn.add(J)}for(let S=0;S<5;S++){const C=X(.22,1.8,.22,4861984,1);C.position.set(-6+S*3,.9,7.5),tn.add(C);const E=new re(new rn(.34,.035,6,18),Oo);E.rotation.x=Math.PI/2,E.position.set(-6+S*3,1.55,7.5),tn.add(E)}const Ci=new et;for(let S=0;S<7;S++){const C=S/7*Math.PI*2,E=new re(new Zt(.3,1),Ee(5591885,1));E.position.set(Math.cos(C)*.65,.22,Math.sin(C)*.65),Ci.add(E)}tn.add(Ci),me(tn,"runefield","Поле Рун"),Z.push(tn),I(39,70,1,.08);const ur=(S,C,E,U)=>{const J=new et,q=E-S,ue=U-C,fe=Math.hypot(q,ue),Me=Math.floor(fe/1.7);for(let Oe=0;Oe<=Me;Oe++){const Ne=Oe/Me,dt=S+q*Ne,vt=C+ue*Ne,ft=new re(new Cn(.24,.24+2.8+be(Oe,S)*.5,6),Ee(3942940,1));ft.position.set(dt,B(dt,vt)+1.45,vt),J.add(ft)}const oe=X(.3,.35,fe,2957593,1);oe.rotation.y=Math.atan2(q,ue),oe.position.set((S+E)/2,B((S+E)/2,(C+U)/2)+1.25,(C+U)/2),J.add(oe),x.add(J),At(S,C,E,U,.34,.08)};ur(-30,-31,-8,-31),ur(8,-31,30,-31),ur(-30,-31,-30,-13),ur(30,-31,30,16);const Bi=new et;Bi.userData={id:"gate",label:"Ворота Мидгарда"};for(const S of[-4.2,4.2]){const C=X(.8,6,.8,3482906,1);C.position.set(S,3,-31),Bi.add(C)}const ko=X(10,.8,1,2957336,1);ko.position.set(0,6,-31),Bi.add(ko);for(let S=-3;S<=3;S++){const C=X(1,4.2,.22,5978660,1);C.position.set(S*1.15,2,-30.7),Bi.add(C)}me(Bi,"gate","Ворота Мидгарда"),Z.push(Bi),I(-4.2,-31,.55,.05),I(4.2,-31,.55,.05);const Dn=new et;Dn.userData={id:"mimir",label:"Колодец Мимира"},Dn.position.set(18,B(18,15),15);for(let S=0;S<14;S++){const C=S/14*Math.PI*2,E=X(.7,.48,.5,6711907,1);E.position.set(Math.cos(C)*1.45,.24,Math.sin(C)*1.45),E.rotation.y=C+Math.PI/2,Dn.add(E)}const Ls=new re(new xo(1.05,28),new yt({color:1522499,emissive:733496,emissiveIntensity:1.8,roughness:.18}));Ls.rotation.x=-Math.PI/2,Ls.position.y=.5,Dn.add(Ls);for(const S of[-1.35,1.35]){const C=X(.22,3,.22,4861984,1);C.position.set(S,1.55,0),Dn.add(C)}const Yr=X(3.1,.25,.25,3679513,1);Yr.position.y=2.95,Dn.add(Yr);const zo=X(.55,.5,.55,5913383,1);zo.position.set(0,1.65,0),Dn.add(zo);const Ds=new re(new rn(1.8,.06,8,40),new yt({color:7792028,emissive:2653256,emissiveIntensity:3}));Ds.rotation.x=Math.PI/2,Ds.position.y=.53,Dn.add(Ds),me(Dn,"mimir","Колодец Мимира"),Z.push(Dn),I(18,15,1.8,.08);const sl=new ca(7530656,1.8,10,2);sl.position.set(18,B(18,15)+1.4,15),x.add(sl);const Ri=new et;Ri.userData={id:"norns",label:"Прядильня норн"},Ri.position.set(-25,B(-25,43),43);for(let S=0;S<3;S++){const C=new re(new Rn(.65,2.3,5,8),Ee(5725529,1));C.position.set((S-1)*2.2,1.35,0),C.rotation.z=(S-1)*.07,Ri.add(C);const E=new re(new rn(.42,.055,7,20),new yt({color:[13100495,13149416,14795380][S],emissive:[6134129,7490961,9268264][S],emissiveIntensity:2.2}));E.rotation.x=Math.PI/2,E.position.set((S-1)*2.2,1.6,-.55),Ri.add(E)}const du=new yh({color:13944039,transparent:!0,opacity:.78});for(let S=0;S<2;S++){const C=[new O((S-1)*2.2,2,.1),new O((S-.5)*2.2,4.1,-.7),new O(S*2.2,2,.1)];Ri.add(new ag(new vn().setFromPoints(C),du))}const Bo=new re(new rn(4.1,.07,8,48),new yt({color:12429522,emissive:6113136,emissiveIntensity:1.5}));Bo.rotation.x=Math.PI/2,Bo.position.y=.05,Ri.add(Bo),me(Ri,"norns","Прядильня норн"),Z.push(Ri),I(-25,43,3,.1);const qr=-43,$r=62,A=new et;A.userData={id:"ritual",label:"Круг Силы"},A.position.set(qr,B(qr,$r),$r);const G=Ee(6711651,1),Q=Ee(5593685,1);for(let S=0;S<2;S++){const C=S===0?18:12,E=S===0?6.2:3.65;for(let U=0;U<C;U++){const J=U/C*Math.PI*2+S*.12,q=E+(be(U,930+S)*.5-.25),ue=.42+be(U,940+S)*.48,fe=new re(new Zt(.55+be(U,950+S)*.28,1),S===0?G:Q);fe.scale.y=.65+ue*.35,fe.position.set(Math.cos(J)*q,ue*.45,Math.sin(J)*q),fe.rotation.set(be(U,960+S),J+be(U,970+S),be(U,980+S)),A.add(fe)}}const ee=new re(new Zt(1.05,1),Ee(5593428,1));ee.scale.set(1.25,.62,1.05),ee.position.y=.5,A.add(ee);for(const S of[2.1,3.15,5.15]){const C=new re(new rn(S,.045,7,64),new yt({color:9219739,emissive:3496777,emissiveIntensity:1.4,transparent:!0,opacity:.72}));C.rotation.x=Math.PI/2,C.position.y=.055,A.add(C)}const j=new yt({color:13215838,emissive:9199384,emissiveIntensity:2.2,roughness:.5});for(let S=0;S<8;S++){const C=S/8*Math.PI*2,E=new re(new sn(.13,.025,.65),j);E.position.set(Math.cos(C)*4.55,.075,Math.sin(C)*4.55),E.rotation.y=-C,A.add(E)}me(A,"ritual","Круг Силы"),Z.push(A),I(qr,$r,1.25,.06);const xe=new ca(9226152,1.15,11,2);xe.position.set(qr,B(qr,$r)+1.6,$r),x.add(xe);const Ce=new et;Ce.userData={id:"rune",label:"Древний камень Феху"},Ce.position.set(27,B(27,57),57);const ze=new re(new Zt(1.45,1),Ee(5002063,1));ze.position.y=1.2,Ce.add(ze);const Ie=new re(new rn(1.05,.07,8,30),new yt({color:16766826,emissive:10052371,emissiveIntensity:3}));Ie.rotation.x=Math.PI/2,Ie.position.y=1.2,Ce.add(Ie),me(Ce,"rune","Древний камень Феху"),Z.push(Ce),I(27,57,1.7,.1);const Ke=new et;Ke.userData={id:"port",label:"Мост к причалу"};for(let S=-5;S<=5;S++){const C=X(3.6,.28,.82,6307882,1);C.position.set(-53,B(-53,S*1)+.5,S),Ke.add(C)}me(Ke,"port","Мост к причалу"),Z.push(Ke);const Ze=new et;Ze.position.set(-46,B(-46,-15),-15);for(let S=0;S<7;S++){const C=X(2.8,.24,.72,7030573,1);C.position.set(0,.3,S*.85),Ze.add(C)}for(const S of[-1.2,1.2])for(let C=0;C<3;C++){const E=X(.22,1.5,.22,4139292,1);E.position.set(S,-.2,C*2.5),Ze.add(E)}const qe=X(2.2,.55,4.8,4926493,1);qe.position.set(3,-.15,2.5),Ze.add(qe),me(Ze,"port","Речной причал"),Z.push(Ze);const ut=(S,C)=>{const E=new re(new Vt(.5,.5,1,12),Ee(6636332,1));E.position.set(S,B(S,C)+.5,C),x.add(E);for(const U of[.25,.76]){const J=new re(new rn(.51,.045,6,18),Ee(3156004,.7,.1));J.rotation.x=Math.PI/2,J.position.set(S,B(S,C)+U,C),x.add(J)}},bt=(S,C)=>{const E=X(1,.75,1,7359022,1);E.position.set(S,B(S,C)+.38,C),x.add(E);const U=X(.08,.82,1.05,3679770,1);U.position.set(S,B(S,C)+.38,C),x.add(U),St(S,C,1,1,0,.03)};[[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([S,C])=>ut(S,C)),[[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([S,C])=>bt(S,C));const Bt=(S,C,E)=>{const U=new et,J=B(S,C),q=nt(3680287),ue=new re(new Vt(.18*E,.34*E,4.6*E,10),q);ue.position.y=2.3*E,ue.rotation.z=(be(S,C)-.5)*.045,U.add(ue);for(let Me=0;Me<5;Me++){const oe=new re(new Vt(.045*E,.095*E,(1.15+Me*.16)*E,7),q);oe.position.set((be(Me,S)-.5)*.45*E,(1.25+Me*.58)*E,(be(Me,C)-.5)*.38*E),oe.rotation.z=(be(Me+10,S)-.5)*.45,oe.rotation.y=be(Me+20,C)*Math.PI*2,U.add(oe)}const fe=[1979432,2573361,2968886,3430461,2309165];for(let Me=0;Me<6;Me++){const Oe=(1.55-.72*(Me/5))*E,Ne=new re(new Cn(Oe,.95*E,9,1),nt(fe[Me%fe.length]));Ne.scale.x=.88+be(Me,S)*.18,Ne.scale.z=.84+be(Me,C)*.2,Ne.position.set((be(Me*4,S)-.5)*.28*E,(2.05+Me*.62)*E,(be(Me*5,C)-.5)*.28*E),Ne.rotation.y=be(Me+40,S)*Math.PI*2,U.add(Ne)}if(E>1.15)for(let Me=0;Me<3;Me++){const oe=new re(new Cn(.62*E,.7*E,8),nt(fe[(Me+2)%fe.length]));oe.position.set((Me-1)*.38*E,.72*E,(be(Me,C)-.5)*.3*E),oe.rotation.y=be(Me+70,S)*Math.PI*2,U.add(oe)}U.position.set(S,J,C),me(U),E>=1.15&&I(S,C,.42*E,.04)},Ct=(S,C,E,U=!1)=>{const J=new et,q=B(S,C),ue=nt(U?4207145:4863015),fe=new re(new Vt(.32*E,.52*E,5.8*E,11),ue);fe.position.y=2.9*E,fe.rotation.z=(be(S,C)-.5)*.035,J.add(fe);const Me=U?8:6;for(let oe=0;oe<Me;oe++){const Oe=oe/Me*Math.PI*2+be(oe,S)*.25,Ne=(1.65+be(oe+30,C)*1.35)*E,dt=new re(new Vt(.075*E,.16*E,Ne,8),ue);dt.position.set(Math.cos(Oe)*Ne*.34,(3.35+be(oe+40,S)*1.25)*E,Math.sin(Oe)*Ne*.34),dt.rotation.z=Math.cos(Oe)*.78,dt.rotation.x=Math.sin(Oe)*.78,dt.rotation.y=-Oe,J.add(dt);for(let vt=0;vt<3;vt++){const ft=new re(new on((.42+be(vt+oe,90)*.22)*E,8,6),nt(vt%2?4808772:3888955)),Et=.55+vt*.18;ft.position.set(Math.cos(Oe)*Ne*.62+(be(vt,oe)-.5)*.35*E,(3.55+be(oe,vt)*1.15+Et)*E,Math.sin(Oe)*Ne*.62+(be(vt+4,oe)-.5)*.35*E),ft.scale.y=.72,J.add(ft)}}for(let oe=0;oe<(U?7:4);oe++){const Oe=be(oe+100,S)*Math.PI*2,Ne=new re(new Vt(.025*E,.055*E,(.9+be(oe,C)*.7)*E,6),ue);Ne.position.set(Math.cos(Oe)*1.05*E,(3.15+be(oe+5,S)*1.5)*E,Math.sin(Oe)*1.05*E),Ne.rotation.z=(be(oe+8,C)-.5)*.35,J.add(Ne)}J.position.set(S,q,C),me(J),E>=1.2&&I(S,C,.62*E,.04)},Pt=(S,C,E,U)=>{const J=new et,q=Ee(9071949,1),ue=Ee(3418916,1),fe=Ee(11576718,1),Me=new re(new Rn(.46*E,1*E,6,10),q);Me.rotation.z=Math.PI/2,Me.position.y=.9*E,J.add(Me);const oe=new re(new Vt(.24*E,.32*E,.84*E,8),q);oe.position.set(.48*E,1.25*E,0),oe.rotation.z=-.35,J.add(oe);const Oe=new re(new on(.31*E,10,7),q);Oe.scale.set(1.25,.9,1),Oe.position.set(.77*E,1.58*E,0),J.add(Oe);const Ne=new re(new on(.14*E,8,5),ue);Ne.scale.z=.72,Ne.position.set(1*E,1.53*E,0),J.add(Ne);for(const vt of[-.25,.25])for(const ft of[-.27,.34]){const Et=new re(new Vt(.065*E,.09*E,.72*E,6),ue);Et.position.set(ft*E,.48*E,vt*E),Et.rotation.z=ft<0?.08:-.06,J.add(Et)}for(const vt of[-1,1])for(let ft=0;ft<4;ft++){const Et=new re(new Vt(.028*E,.05*E,.38*E,5),fe);Et.position.set(.7*E,(1.82+ft*.13)*E,vt*(.11+ft*.055)*E),Et.rotation.z=vt*(.45-ft*.08),J.add(Et)}const dt=new re(new on(.13*E,7,5),q);dt.position.set(-.52*E,1.05*E,0),dt.scale.set(.7,1.2,.7),J.add(dt),J.position.set(S,B(S,C),C),J.userData={phase:U},me(J),$e.push({g:J,x:S,z:C,r:4+be(U,41)*3,speed:1.25+be(U,42)*.8,phase:U,kind:"deer"})},Qe=(S,C)=>{const E=new et,U=Ee(6965552,1),J=Ee(3089436,1),q=new re(new on(.22,8,6),U);q.scale.set(1.35,.9,.9),q.position.y=.72,E.add(q);const ue=new re(new on(.17,8,6),U);ue.position.set(.22,.86,0),E.add(ue);for(const oe of[-1,1]){const Oe=new re(new Cn(.06,.18,6),U);Oe.position.set(.17,.99,oe*.09),E.add(Oe)}const fe=new re(new rn(.24,.075,7,14,Math.PI*1.65),U);fe.rotation.y=Math.PI/2,fe.position.set(-.22,.91,0),E.add(fe);const Me=new re(new on(.025,6,4),J);Me.position.set(.35,.9,-.12),E.add(Me),E.position.set(S,B(S,C),C),me(E,"ratatosk","Белка Рататоск"),Z.push(E),I(S,C,.28,.02),$e.push({g:E,x:S,z:C,r:2.2,speed:.7,phase:1.7,kind:"squirrel"})},gt=-4,st=69,wn=new et;wn.userData={id:"ashgrove",label:"Роща Ясеня"};const dr=[[-5,2,1.65,!1],[-1,1,1.45,!1],[-7,4,1.25,!1],[1,5,1.3,!1],[-2,7,2.05,!0],[4,3,1.15,!1]];for(const[S,C,E,U]of dr)Ct(gt+S,st+C,E,U);for(let S=0;S<9;S++){const C=S/9*Math.PI*2,E=4.2+be(S,1301)*2,U=new re(new Zt(.48+be(S,1302)*.24,1),Ee(5725014,1));U.position.set(gt+Math.cos(C)*E,B(gt+Math.cos(C)*E,st+Math.sin(C)*E)+.35,st+Math.sin(C)*E),U.scale.y=1.3+be(S,1303)*.7,U.rotation.set(be(S,1304),C,be(S,1305)),me(U)}const _n=new re(new rn(5.7,.055,7,64),new yt({color:9214840,emissive:3755313,emissiveIntensity:1.1,transparent:!0,opacity:.62}));_n.rotation.x=Math.PI/2,_n.position.set(gt,B(gt,st)+.045,st),x.add(_n);const Hi=new re(new Zt(1,1),Ee(5199441,1));Hi.position.set(gt,B(gt,st)+.75,st),Hi.scale.y=1.5,x.add(Hi);const Ut=new re(new rn(.62,.05,7,24),new yt({color:12757607,emissive:6637341,emissiveIntensity:1.7}));Ut.rotation.x=Math.PI/2,Ut.position.set(gt,B(gt,st)+1.45,st),x.add(Ut),Z.push(wn),I(gt,st,1,.08);const $t=61,Kt=78,xn=new et;xn.userData={id:"hoddmimir",label:"Лес Ходдмимира"};const dn=new re(new rn(5.6,.055,7,56),new yt({color:9016697,emissive:3425071,emissiveIntensity:1,transparent:!0,opacity:.55}));dn.rotation.x=Math.PI/2,dn.position.set($t,B($t,Kt)+.04,Kt),x.add(dn);const ui=new et;ui.position.set($t,B($t,Kt),Kt),ui.userData={id:"hoddmimir",label:"Лес Ходдмимира"};for(const S of[-2.4,2.4]){const C=X(.28,2.5,.28,4862755,1);C.position.set(S,1.25,0),ui.add(C)}const di=new re(new Cn(3.4,1.65,6),Ee(3813673,1));di.position.y=2.75,di.scale.z=.72,ui.add(di),V($t,Kt+1.8,.55);const Fp=new re(new Zt(.8,1),Ee(5264976,1));Fp.position.set($t,B($t,Kt)+.65,Kt+2.2),ui.add(Fp),me(ui,"hoddmimir","Лес Ходдмимира"),Z.push(ui),I($t,Kt,1.1,.08);const Ho=30,Vo=53;for(let S=0;S<4;S++)Pt(Ho+(S-1.5)*2.6,Vo+(S%2?2.6:-2.6),1.12+be(S,1440)*.16,10+S);const Op=new re(new Zt(.72,1),Ee(5725526,1));Op.position.set(Ho,B(Ho,Vo)+.5,Vo),x.add(Op);const fu=new re(new rn(5.8,.045,7,48),new yt({color:8293234,emissive:3161386,emissiveIntensity:.8,transparent:!0,opacity:.48}));fu.rotation.x=Math.PI/2,fu.position.set(Ho,B(Ho,Vo)+.035,Vo),x.add(fu),Qe(gt+5,st+1);const ol=12,al=49,Ns=new et;Ns.position.set(ol,B(ol,al),al);const hu=new re(new Zt(1.05,1),Ee(5133648,1));hu.position.y=.85,hu.scale.y=1.55,Ns.add(hu);const pu=new re(new rn(2.7,.055,7,48),new yt({color:10259632,emissive:4929114,emissiveIntensity:1.8,transparent:!0,opacity:.78}));pu.rotation.x=Math.PI/2,pu.position.y=.06,Ns.add(pu);const Ox=new yh({color:14207464,transparent:!0,opacity:.72});for(let S=0;S<3;S++){const C=[new O((S-1)*.72,.95,.15),new O((S-1)*1.25,2.9,-.35+Math.sin(S)*.25),new O((S-1)*1.75,.5,.9)];Ns.add(new ag(new vn().setFromPoints(C),Ox))}for(let S=0;S<7;S++){const C=new re(new Zt(.11,0),Ee(6708050,1)),E=-1+S*.32;C.position.set(-1.7+E*.95,.06,-1.6+S*.46),C.scale.set(1.6,.35,.8),Ns.add(C)}me(Ns,"forestEvent","Камень Трёх Нитей"),I(ol,al,1.15,.08);const mu=(S,C,E,U,J,q,ue)=>{const fe=new et;fe.position.set(S,B(S,C),C);const Me=new re(new Zt(.78+ue*.08,1),Ee(q,1));Me.position.y=.58+ue*.08,Me.scale.y=1.35,fe.add(Me);const oe=new re(new rn(2+ue*.18,.045,7,40),new yt({color:J,emissive:J,emissiveIntensity:1.25,transparent:!0,opacity:.62}));oe.rotation.x=Math.PI/2,oe.position.y=.045,fe.add(oe);for(let Oe=0;Oe<3+ue;Oe++){const Ne=new re(new Zt(.12,0),Ee(7827558,1)),dt=Oe/(3+ue)*Math.PI*2;Ne.position.set(Math.cos(dt)*(1.15+ue*.12),.08,Math.sin(dt)*(1.15+ue*.12)),Ne.scale.y=.45,fe.add(Ne)}me(fe,E,U),Z.push(fe),I(S,C,.9,.08)};mu(-15,58,"forestCache","Забытый тайник",11701074,4931637,2),mu(46,43,"forestWhisper","Камень Шёпота",7902629,4541773,3),mu(-48,72,"forestThread","Разорванная нить",10252688,5326925,2);const gu=(S,C,E,U,J,q)=>{const ue=new et;ue.position.set(S,B(S,C),C);const fe=new re(new rn(E,.07,8,56),new yt({color:q===1?6716259:q===2?7305088:8218965,emissive:q===1?2505513:2435888,emissiveIntensity:.7,transparent:!0,opacity:.48}));fe.rotation.x=Math.PI/2,fe.position.y=.045,ue.add(fe);for(let Me=0;Me<Math.floor(E/2);Me++){const oe=be(Me,S*11+C)*Math.PI*2,Oe=E*.35+be(Me,C*17)*E*.45,Ne=new re(new Zt(.28+be(Me,33)*.22,1),Ee(q===1?5594452:q===2?5330522:5917244,1));Ne.position.set(Math.cos(oe)*Oe,.22,Math.sin(oe)*Oe),Ne.scale.y=.65,ue.add(Ne)}me(ue,U,J),Z.push(ue)};gu(70,18,8.5,"hunterCamp","Забытая стоянка",3),gu(67,49,9.5,"deepGrove","Глубокая роща",1),gu(52,7,7.5,"fallenAsh","Поверженный ясень",2);const fn=75,nn=30,Ht=new et;Ht.position.set(fn,B(fn,nn),nn);const kx=Ee(5986899,1),kp=X(7.8,.42,5.8,5591885,1);kp.position.y=.22,Ht.add(kp);const zp=X(7.4,2.8,.3,6439727,1);zp.position.set(0,1.4,-2.7),Ht.add(zp);const Bp=X(.3,2.8,5.4,6439727,1);Bp.position.set(-3.7,1.4,0),Ht.add(Bp);const Hp=X(.3,2.8,5.4,6439727,1);Hp.position.set(3.7,1.4,0),Ht.add(Hp);const Vp=X(2.55,2.8,.3,6439727,1);Vp.position.set(-2.43,1.4,2.7),Ht.add(Vp);const Gp=X(2.55,2.8,.3,6439727,1);Gp.position.set(2.43,1.4,2.7),Ht.add(Gp);const Wp=X(2.3,.72,.3,6439727,1);Wp.position.set(0,2.44,2.7),Ht.add(Wp);const Xp=X(.16,2.18,.34,2826523,1);Xp.position.set(-.66,1.28,2.72),Ht.add(Xp);const jp=X(.16,2.18,.34,2826523,1);jp.position.set(.66,1.28,2.72),Ht.add(jp);const Yp=X(1.48,.16,.34,2826523,1);Yp.position.set(0,2.34,2.72),Ht.add(Yp);const Is=new et;Is.position.set(-.57,0,2.72),Ht.add(Is);const qp=X(1.14,2.05,.12,3154457,1);qp.position.set(.57,1.28,0),Is.add(qp);const $p=new re(new on(.08,8,6),Ee(11831883,1));$p.position.set(.86,1.25,.1),Is.add($p);const zx=new yt({color:13867855,emissive:10116128,emissiveIntensity:1.25,roughness:.45});for(const S of[-2.35,2.35]){const C=X(1.25,1,.12,2826523,1);C.position.set(S,1.72,2.78),Ht.add(C);const E=new re(new sn(.98,.72,.06),zx);E.position.set(S,1.72,2.86),Ht.add(E);const U=X(.07,.78,.1,2826523,1);U.position.set(S,1.72,2.91),Ht.add(U);const J=X(1.08,.07,.1,2826523,1);J.position.set(S,1.72,2.91),Ht.add(J)}const Kp=new yt({map:Y,color:2697767,roughness:.98,side:yi}),Go=new re(new Ji(4.25,6.25),Kp),Wo=new re(new Ji(4.25,6.25),Kp);Go.rotation.x=Math.PI/2,Wo.rotation.x=Math.PI/2,Go.rotation.z=.62,Wo.rotation.z=-.62,Go.position.set(-1.02,3.95,0),Wo.position.set(1.02,3.95,0),Ht.add(Go,Wo);const vu=X(.22,.22,6.45,2695965,1);vu.position.y=4.75,Ht.add(vu);const _u=new re(new sn(.48,1.35,.48),kx);_u.position.set(1.55,4.8,-.65),Ht.add(_u);const xu=X(.62,.1,.62,3420461,1);xu.position.set(1.55,5.48,-.65),Ht.add(xu);const Zp=X(2.35,.18,1,6636845,1);Zp.position.set(0,.62,3.15),Ht.add(Zp);const Jp=X(1.55,.16,.48,5849131,1);Jp.position.set(0,.3,3.58),Ht.add(Jp),me(Ht,"heroHome","Домик героя"),Z.push(Ht),St(fn,nn-2.72,7.4,.3,0,.05),St(fn-3.72,nn,.3,5.45,0,.05),St(fn+3.72,nn,.3,5.45,0,.05),St(fn-2.43,nn+2.72,2.55,.3,0,.05),St(fn+2.43,nn+2.72,2.55,.3,0,.05);const Wt=new et;Wt.position.set(fn,B(fn,nn),nn),Wt.visible=!1;const Qp=X(7,.16,5,4928548,1);Qp.position.y=.5,Wt.add(Qp);const em=X(7,2.65,.18,4139808,1);em.position.set(0,1.8,-2.45),Wt.add(em);const tm=X(.18,2.65,4.9,4139808,1);tm.position.set(-3.45,1.8,0),Wt.add(tm);const nm=X(.18,2.65,4.9,4139808,1);nm.position.set(3.45,1.8,0),Wt.add(nm);const im=X(2.35,2.65,.18,4139808,1);im.position.set(-2.42,1.8,2.45),Wt.add(im);const rm=X(2.35,2.65,.18,4139808,1);rm.position.set(2.42,1.8,2.45),Wt.add(rm);const sm=X(2.5,.04,2.1,7162673,1);sm.position.set(-.15,.6,.25),Wt.add(sm);const om=X(1.65,.65,2.15,4008478,1);om.position.set(-2.15,.88,-1.25),Wt.add(om);const am=X(1.48,.12,1.35,7033152,1);am.position.set(-2.15,1.27,-.92),Wt.add(am);const lm=X(1.28,.18,.46,11903114,1);lm.position.set(-2.15,1.38,-1.95),Wt.add(lm);const cm=X(1.65,.12,1.05,5255969,1);cm.position.set(.85,1.15,-.15),Wt.add(cm);for(const[S,C]of[[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const E=X(.1,.7,.1,3679515,1);E.position.set(S,.72,C),Wt.add(E)}const um=X(1.25,.8,.72,5978660,1);um.position.set(2.1,.95,-1.7),Wt.add(um);const dm=X(1.9,.14,.45,5978660,1);dm.position.set(1.35,2,-2.25),Wt.add(dm);for(const S of[.75,1.35,1.95]){const C=new re(new Vt(.08,.1,.35,8),Ee(7304016,1));C.position.set(S,2.24,-2.22),Wt.add(C)}const fm=X(1.35,.55,.7,5920078,1);fm.position.set(2.15,.78,.95),Wt.add(fm);const hm=new re(new Cn(.28,.72,8),new yt({color:16744744,emissive:16731402,emissiveIntensity:4}));hm.position.set(2.15,1.42,.95),Wt.add(hm);const pm=new ca(16747068,2.2,8,2);pm.position.set(2.15,1.7,.95),Wt.add(pm),me(Wt,"heroHomeInterior","Дом героя — внутри"),Z.push(Wt);const Kr=new et;Kr.position.set(fn,B(fn,nn),nn);const yu=new re(new rn(6.2,.055,7,48),new yt({color:7758412,emissive:2169621,emissiveIntensity:.25,transparent:!0,opacity:.5}));yu.rotation.x=Math.PI/2,yu.position.y=.035,Kr.add(yu);for(const[S,C]of[[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){const E=X(.18,1,.18,4797735,1);E.position.set(S,.5,C),Kr.add(E)}for(const S of[-2.4,2.9]){const C=X(10.2,.12,.12,6308139,1);C.position.set(0,.59,S),Kr.add(C)}const Bx=Ee(6906972,1);for(let S=0;S<7;S++){const C=new re(new Vt(.32,.4,.12,7),Bx);C.position.set(0,.08,4.1+S*.72),C.rotation.y=S*.4,Kr.add(C)}V(fn-2.4,nn+4.8,.48).scale.setScalar(.72),me(Kr,"heroHomeYard","Двор домика героя"),Z.push(Kr),V(70,18,.75).scale.setScalar(.72);const mm=new re(new Vt(.65,.8,.7,7),Ee(5327426,1));mm.position.set(70,B(70,18)+.35,16.5),x.add(mm);for(const[S,C]of[[68,20],[72,20],[68,16],[72,16]]){const E=X(.16,1.15,.16,4797735,1);E.position.set(S,B(S,C)+.57,C),x.add(E)}const ll=new et;ll.position.set(52,B(52,7),7);const Su=new re(new Vt(.5,.62,7,8),Ee(4995371,1));Su.rotation.z=Math.PI/2,Su.position.y=.5,ll.add(Su);const Mu=new re(new Vt(.53,.53,.12,12),Ee(7693389,1));Mu.rotation.z=Math.PI/2,Mu.position.set(3.5,.5,0),ll.add(Mu),x.add(ll);for(let S=0;S<7;S++){const C=new re(new Zt(.14,0),Ee(6913394,1)),E=S/7*Math.PI*2;C.position.set(67+Math.cos(E)*4,.12+B(67+Math.cos(E)*4,49+Math.sin(E)*4),49+Math.sin(E)*4),x.add(C)}for(let S=0;S<95;S++){const C=be(S,77)*Math.PI*2,E=58+be(S,91)*32,U=Math.cos(C)*E,J=Math.sin(C)*E+2,ue=[[gt,st,11],[39,70,13],[-64,36,11],[-43,62,10],[30,53,12],[61,78,10],[-15,58,7],[46,43,7],[-48,72,7],[70,18,11],[75,30,13],[67,49,12],[52,7,10]].some(([fe,Me,oe])=>Math.hypot(U-fe,J-Me)<oe);Math.abs(U+57)>9&&!ue&&Bt(U,J,.78+be(S,13)*.82)}Ct(-10,18,1.55,!1),Ct(13,24,1.7,!1),Ct(-31,-12,2.15,!0);for(let S=0;S<110;S++){const C=be(S,701)*Math.PI*2,E=15+be(S,702)*50,U=Math.cos(C)*E,J=Math.sin(C)*E+3;if(Math.abs(U)<10&&Math.abs(J)<16)continue;const q=new et;q.position.set(U,B(U,J),J);for(let ue=0;ue<3;ue++){const fe=new re(new Cn(.032,.38+be(ue,S)*.28,5),nt(ue===1?5466175:4282935));fe.position.set((ue-1)*.09,.18,(be(ue*3,S)-.5)*.12),fe.rotation.z=(ue-1)*.22,q.add(fe)}x.add(q)}for(let S=0;S<80;S++){const C=-88+be(S,101)*176,E=-88+be(S,111)*176;if(Math.hypot(C,E+2)>30){const U=new re(new Cn(.085,.55+be(S,121)*.7,5),nt(4941888));U.position.set(C,B(C,E)+.3,E),x.add(U)}}const Zr=new et;Zr.position.set(29,B(29,25),25),Zr.userData={id:"tower",label:"Сторожевая башня"};for(const S of[-2,2])for(const C of[-2,2]){const E=X(.35,7,.35,3942685,1);E.position.set(S,3.5,C),Zr.add(E)}const gm=X(5,.35,5,6833965,1);gm.position.y=5.8,Zr.add(gm);const vm=new re(new Cn(3.8,2.7,4),Ee(2696482,1));vm.position.y=8,Zr.add(vm),me(Zr,"tower","Сторожевая башня"),Z.push(Zr),St(29,25,4.8,4.8,0,.08);const Xo=(S,C,E,U,J,q)=>{const ue=new et;ue.userData={id:E,label:U,phase:q,baseX:S,baseZ:C};const fe=new re(new Rn(.32,.78,4,8),Ee(J,.9));fe.position.y=.85,ue.add(fe);const Me=new re(new on(.25,12,8),Ee(13210736,.9));Me.position.y=1.58,ue.add(Me);const oe=X(.7,.9,.15,2565407,1);oe.position.set(0,.82,-.27),ue.add(oe),ue.position.set(S,B(S,C),C),me(ue,E,U),Z.push(ue),Ue.push(ue)};Xo(9,-8,"elder","Старейшина",7558719,.4),Xo(-6,-3,"blacksmith","Кузнец",6044459,1.5),Xo(21,1,"hunter","Охотник",4215359,2.4),Xo(5,10,"villager","Житель Мидгарда",5858125,3.4),Xo(-16,4,"villager2","Житель деревни",6638394,4.2);const Hx=new cu({color:13096143,transparent:!0,opacity:.045,depthWrite:!1}),wu=new et;for(let S=0;S<34;S++){const C=new re(new on(.9+be(S,810)*2.2,8,6),Hx);C.position.set(-88+be(S,811)*176,1.8+be(S,812)*2.2,-72+be(S,813)*144),wu.add(C)}x.add(wu);const Jr=WA(t);x.add(Jr);const Vi=Jr.userData.anim,_m=new e2,Eu=new je,xm=S=>{var U,J,q,ue;if((J=(U=S.target)==null?void 0:U.closest)!=null&&J.call(U,".mid3d-ui"))return;const C=z.domElement.getBoundingClientRect();Eu.x=(S.clientX-C.left)/C.width*2-1,Eu.y=-((S.clientY-C.top)/C.height)*2+1,_m.setFromCamera(Eu,N);const E=_m.intersectObjects(Z,!0)[0];if(E){let fe=E.object;for(;fe.parent&&!((q=fe.userData)!=null&&q.id);)fe=fe.parent;(ue=fe.userData)!=null&&ue.id&&e(fe.userData.id)}};z.domElement.addEventListener("pointerup",xm);const Vx=S=>{m.current=S,g(S),l(""),Wt.visible=S,Go.visible=!S,Wo.visible=!S,vu.visible=!S,_u.visible=!S,xu.visible=!S,S?(o.current.x=fn,o.current.z=nn+.95,u.current.x=0,u.current.z=-1,Is.rotation.y=-Math.PI/2):(o.current.x=fn,o.current.z=nn+3.75,u.current.x=0,u.current.z=1,Is.rotation.y=0),Jr.position.set(o.current.x,B(o.current.x,o.current.z)+.04,o.current.z)};v.current=Vx;const Gx=[{id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},{id:"mimir",label:"Колодец Мимира",x:18,z:15,r:4.8},{id:"norns",label:"Прядильня норн",x:-25,z:43,r:5.4},{id:"rune",label:"Древний камень Феху",x:27,z:57,r:4.5},{id:"ritual",label:"Круг Силы",x:-43,z:62,r:6.8},{id:"port",label:"Речной причал",x:-46,z:-15,r:5},{id:"ashgrove",label:"Роща Ясеня",x:-4,z:69,r:7.5},{id:"forestEvent",label:n?"Камень Трёх Нитей — место выбора":"Камень Трёх Нитей",x:ol,z:al,r:4.8},{id:"forestCache",label:"Забытый тайник",x:-15,z:58,r:4.2},{id:"forestWhisper",label:"Камень Шёпота",x:46,z:43,r:4.2},{id:"forestThread",label:"Разорванная нить",x:-48,z:72,r:4.2},{id:"runefield",label:"Поле Рун",x:39,z:70,r:8},{id:"oldfarm",label:"Старый хутор",x:-64,z:36,r:6},{id:"deer",label:"Поляна Четырёх Оленей",x:30,z:53,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:61,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:70,z:18,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:67,z:49,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:52,z:7,r:7.5},{id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},{id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}],ym=()=>{const S=Math.max(1,M.clientWidth),C=Math.max(1,M.clientHeight);N.aspect=S/C,N.updateProjectionMatrix(),z.setSize(S,C,!1)};ym();const Sm=new ResizeObserver(ym);Sm.observe(M);let Tu=0,Mm=performance.now();const wm=S=>{const C=Math.min(.05,(S-Mm)/1e3);Mm=S;const E=o.current,U=Math.hypot(E.dx,E.dz);if(U>.05){const oe=6.2*C;k(E,E.x+E.dx/U*oe,E.z+E.dz/U*oe),Jr.rotation.y=Math.atan2(E.dx,E.dz),u.current.x=E.dx/U,u.current.z=E.dz/U,d(!0)}else d(!1);const J=B(E.x,E.z);if(Jr.position.set(E.x,J+.04,E.z),Vi){const oe=S*.011+Vi.phase,Oe=U>.05?Math.sin(oe)*.58:0,Ne=U>.05?Math.sin(oe+Math.PI)*.42:0;Vi.legL.rotation.x=Oe,Vi.legR.rotation.x=-Oe,Vi.armL.upper.rotation.x=Ne,Vi.armR.upper.rotation.x=-Ne,Vi.armL.elbow.rotation.x=-Math.abs(Ne)*.35,Vi.armR.elbow.rotation.x=-Math.abs(Ne)*.35,Vi.weapon.rotation.z=-.12+(U>.05?Math.sin(oe)*.035:0)}const q=u.current,ue=m.current?new O(E.x-q.x*1,J+3.65,E.z-q.z*1):new O(E.x-q.x*2,J+7.2,E.z-q.z*2+11.8);N.position.lerp(ue,m.current?.09:.055),N.lookAt(E.x+(m.current?q.x*.9:q.x*1.9),J+(m.current?1.25:1.2),E.z+(m.current?q.z*.9:q.z*1.9));let fe="",Me="";if(m.current)E.z>nn+1.72&&(fe="Дверь — выйти из дома",Me="heroHomeExit");else for(const oe of Gx)if(Math.hypot(E.x-oe.x,E.z-oe.z)<oe.r){fe=oe.label,Me=oe.id;break}l(fe?`${fe}|${Me}`:""),he.forEach(oe=>{oe.light.intensity=2+Math.sin(S*.012+oe.phase)*.5,oe.flame.scale.y=.9+Math.sin(S*.009+oe.phase)*.12}),wu.children.forEach((oe,Oe)=>{oe.position.x+=Math.sin(S*12e-5+Oe)*.003,oe.position.z+=Math.cos(S*1e-4+Oe)*.002}),$e.forEach((oe,Oe)=>{if(oe.kind==="deer"){const ft=oe.g.position.x-Jr.position.x,Et=oe.g.position.z-Jr.position.z,fi=Math.hypot(ft,Et);if(fi<11){const fr=Math.max(.001,fi),Qr=fi<5.5?.115:.075,hr=oe.g.position.x+ft/fr*Qr,Us=oe.g.position.z+Et/fr*Qr,jo=hr-30,Yo=Us-53;if(Math.hypot(jo,Yo)<17)oe.g.position.set(hr,B(hr,Us),Us);else{const Gi=Math.atan2(Yo,jo),es=30+Math.cos(Gi)*16,pr=53+Math.sin(Gi)*10;oe.g.position.set(es,B(es,pr),pr)}oe.g.rotation.y=Math.atan2(Et,ft),oe.g.position.y+=Math.sin(S*.008+Oe)*.025;return}}const Ne=S*.00105*oe.speed+oe.phase,dt=oe.x+Math.cos(Ne)*oe.r,vt=oe.z+Math.sin(Ne*.83)*oe.r*.62;oe.g.position.set(dt,B(dt,vt),vt),oe.g.rotation.y=Math.atan2(Math.cos(Ne*.83),-Math.sin(Ne)),oe.kind==="deer"&&(oe.g.position.y+=Math.sin(S*.006+Oe)*.025)}),Ue.forEach((oe,Oe)=>{const Ne=oe.userData.phase||0,dt=oe.userData.baseX,vt=oe.userData.baseZ,ft=dt+Math.sin(S*28e-5+Ne)*1.6,Et=vt+Math.cos(S*22e-5+Ne)*1.1;oe.position.set(ft,B(ft,Et),Et),oe.rotation.y=Math.sin(S*4e-4+Ne)*.5}),z.render(x,N),Tu=requestAnimationFrame(wm)};return Tu=requestAnimationFrame(wm),()=>{cancelAnimationFrame(Tu),Sm.disconnect(),z.domElement.removeEventListener("pointerup",xm),F.dispose(),T.dispose(),Y.dispose(),z.dispose(),x.traverse(S=>{var C,E,U,J;S.isMesh&&((E=(C=S.geometry)==null?void 0:C.dispose)==null||E.call(C),Array.isArray(S.material)?S.material.forEach(q=>{var ue;return(ue=q.dispose)==null?void 0:ue.call(q)}):(J=(U=S.material)==null?void 0:U.dispose)==null||J.call(U))}),z.domElement.remove(),v.current=null}},[t.id,e,n]);const y=M=>{const x=r.current,N=s.current;if(!x||!N)return;const z=x.getBoundingClientRect(),$=z.left+z.width/2,ie=z.top+z.height/2,ae=48;let B=M.clientX-$,W=M.clientY-ie;const F=Math.hypot(B,W);F>ae&&(B=B/F*ae,W=W/F*ae),N.style.transform=`translate(${B}px,${W}px)`,o.current.dx=B/ae,o.current.dz=W/ae},b=()=>{s.current&&(s.current.style.transform="translate(0,0)"),o.current.dx=0,o.current.dz=0},R=M=>{var W,F;const x=r.current;if(!x)return;const N=M.target;if((W=N.closest)!=null&&W.call(N,".mid3d-action")||(F=N.closest)!=null&&F.call(N,".mid3d-interact"))return;const z=x.getBoundingClientRect(),$=26;M.clientX>=z.left-$&&M.clientX<=z.right+$&&M.clientY>=z.top-78&&M.clientY<=z.bottom+26&&(M.currentTarget.setPointerCapture(M.pointerId),y(M))},P=M=>{M.currentTarget.hasPointerCapture(M.pointerId)&&y(M)},D=M=>{M.currentTarget.hasPointerCapture(M.pointerId)&&M.currentTarget.releasePointerCapture(M.pointerId),b()};return H.jsxs("div",{className:"content mid3d-scene",ref:i,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:R,onPointerMove:P,onPointerUp:D,onPointerCancel:D,onContextMenu:M=>M.preventDefault(),children:[H.jsxs("div",{className:"mid3d-ui mid3d-top",children:[H.jsxs("div",{className:"mid3d-pill",children:[H.jsx("b",{children:"МИДГАРД"}),H.jsx("span",{children:"Деревня • река • лес • святилища"})]}),H.jsxs("div",{className:"mid3d-pill",children:[H.jsx("b",{children:"ᛟ"}),H.jsx("span",{children:"Мир живёт вокруг тебя"})]})]}),p&&!n&&H.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31},children:[H.jsx("b",{children:"ᛟ Камень Трёх Нитей"}),H.jsx("span",{children:"На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего."}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{_(!1),e("forestEvent:past")},children:"ᛁ Прошлое — узнать, что здесь произошло"}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{_(!1),e("forestEvent:present")},children:"ᛏ Настоящее — принять знак таким, какой он есть"}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{_(!1),e("forestEvent:future")},children:"ᛉ Будущее — последовать за нитью, которую ещё не видно"})]}),p&&n&&H.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[H.jsx("b",{children:"Камень Трёх Нитей"}),H.jsx("span",{children:"Ты уже выбрал свою нить. Камень помнит этот выбор."}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>_(!1),children:"Продолжить путь"})]}),f&&H.jsxs("div",{className:"mid3d-ui mid3d-interact",style:{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30},children:[H.jsx("b",{children:"🜂 Круг Силы"}),H.jsx("span",{children:"Древние камни отвечают на твоё присутствие. Выбери один путь."}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{h(!1),e("ritual:mimir")},children:"🧠 Око Мимира — открыть скрытое"}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{h(!1),e("ritual:norn")},children:"🧵 Нить Норн — избежать одной судьбы"}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{h(!1),e("ritual:ash")},children:"🌿 Дыхание Ясеня — +25 здоровья в следующем бою"}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{h(!1),e("ritual:fire")},children:"🔥 Огненный обет — +5 к следующему удару"}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{h(!1),e("ritual:ice")},children:"❄️ Ледяной обет — ослабить первый удар врага"}),H.jsx("button",{onPointerDown:M=>M.stopPropagation(),onClick:()=>{h(!1),e("ritual:ygg")},children:"🌳 Зов Иггдрасиля — пережить смертельный удар"})]}),a&&!f&&!p&&(()=>{const[M,x]=a.split("|"),N=x==="heroHome"||x==="heroHomeExit";return H.jsxs("div",{className:"mid3d-ui mid3d-interact",children:[H.jsx("b",{children:M}),H.jsx("span",{children:N?x==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода":"Ты достаточно близко"}),H.jsx("button",{onPointerDown:z=>z.stopPropagation(),onClick:()=>{var z,$;x==="ritual"?h(!0):x==="forestEvent"?_(!0):x==="heroHome"?(z=v.current)==null||z.call(v,!0):x==="heroHomeExit"?($=v.current)==null||$.call(v,!1):e(x)},children:N?x==="heroHome"?"Открыть дверь и войти":"Выйти наружу":"Взаимодействовать"})]})})(),H.jsx("div",{className:"mid3d-ui mid3d-joy",ref:r,children:H.jsx("div",{className:"mid3d-knob",ref:s})}),H.jsx("button",{className:"mid3d-ui mid3d-action",onPointerDown:M=>M.stopPropagation(),onClick:()=>e("event"),children:"ᚠ"}),H.jsx("div",{className:"mid3d-ui mid3d-hint",children:w?c?"Ты внутри дома":"Дом героя • отдых • сундук • выход":c?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"})]})}function jA(){const[t,e]=_t.useState(()=>Gg().hero?{t:"tree"}:{t:"choose"}),[n,i]=_t.useState(Gg),[r,s]=_t.useState(""),[o,a]=_t.useState(""),[l,c]=_t.useState(""),d=_t.useRef(0),[f,h]=_t.useState(null),[p,_]=_t.useState(null),[w,g]=_t.useState(!1),[u,m]=_t.useState(0),[v,y]=_t.useState(0),[b,R]=_t.useState(0),[P,D]=_t.useState(""),[M,x]=_t.useState(!1),[N,z]=_t.useState(!1),[$,ie]=_t.useState(""),[ae,B]=_t.useState(.06);_t.useEffect(()=>{localStorage.setItem("yggdrasil",JSON.stringify(n))},[n]),_t.useEffect(()=>{var k,Ae,se,ce;(k=Mt==null?void 0:Mt.ready)==null||k.call(Mt),(Ae=Mt==null?void 0:Mt.expand)==null||Ae.call(Mt),(se=Mt==null?void 0:Mt.setHeaderColor)==null||se.call(Mt,"#0b0f0c"),(ce=Mt==null?void 0:Mt.setBackgroundColor)==null||ce.call(Mt,"#0b0f0c")},[]),_t.useEffect(()=>{if(!(Mt!=null&&Mt.BackButton))return;const k=()=>e({t:"tree"});return t.t!=="tree"&&t.t!=="choose"&&n.hero?(Mt.BackButton.show(),Mt.BackButton.onClick(k)):Mt.BackButton.hide(),()=>{var Ae,se;(se=(Ae=Mt.BackButton)==null?void 0:Ae.offClick)==null||se.call(Ae,k)}},[t,n.hero]),_t.useEffect(()=>{h(null),_(null),g(!1),ie(""),x(!1)},[t]);const W=k=>{c(k),window.clearTimeout(d.current),d.current=window.setTimeout(()=>c(""),1800)},F=(k="light")=>{var Ae,se,ce,Xe;try{k==="success"?(se=(Ae=Mt==null?void 0:Mt.HapticFeedback)==null?void 0:Ae.notificationOccurred)==null||se.call(Ae,"success"):(Xe=(ce=Mt==null?void 0:Mt.HapticFeedback)==null?void 0:ce.impactOccurred)==null||Xe.call(ce,"light")}catch{}},K=k=>e(k),ne=k=>{F(),e({t:"realm",id:k.id})},we=()=>Math.floor(Math.min(12,(Date.now()-n.watch)/36e5)*3),me=()=>{const k=we();if(k<=0){W("Дозор только начался — искры ещё копятся.");return}i(Ae=>({...Ae,sparks:Ae.sparks+k,watch:Date.now()})),F("success"),W("Дозор завершён: +"+k+" ✨")},Ee=()=>{if(n.gift===ua())return;const Ae=(n.gift?Math.round((Date.parse(ua())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,se=Fd[Ae-1];i(ce=>({...ce,sparks:ce.sparks+se,gift:ua(),streak:Ae})),F("success"),W("Дар Древа, день "+Ae+": +"+se+" ✨")},nt=()=>{!r||!o||(i(k=>({...k,hero:{id:r,name:o}})),F("success"),W("Путь начинается, "+o+"!"),e({t:"tree"}))},X=n.hero?Od.find(k=>k.id===n.hero.id):null,Z=k=>Math.floor(Math.random()*k),he=k=>n.trials.filter(Ae=>Ae.startsWith(k+":")).length,Ue=k=>{if(n.artifacts.includes(k.id)){W("Мир покорён. Артефакт хранится в листе героя.");return}F(),e({t:"trial",id:k.id})},$e=(k,Ae,se)=>{const ce=Ae===2;i(Xe=>({...Xe,sparks:Xe.sparks+se+(ce?30:0),trials:[...Xe.trials,k+":"+Ae],artifacts:ce?[...Xe.artifacts,k]:Xe.artifacts})),ce&&(F("success"),W("Мир пройден! Артефакт: "+zd[k]))},He=(k,Ae)=>{if(f!==null)return;const se=he(k),ce=kd[k][se];if(Ae===ce.c){h(Ae),F("success");const Xe=12+se*3+((X==null?void 0:X.id)==="dwarf"?6:0);W("Верно! Сундук хозяина: +"+Xe+" ✨"),$e(k,se,Xe);return}if(n.powers.includes("mimirEye")){h(ce.c),i(Ye=>({...Ye,powers:Ye.powers.filter(L=>L!=="mimirEye")}));const Xe=8+se*2;F("success"),W("Око Мимира раскрыло истину. Ответ исправлен. +"+Xe+" ✨"),$e(k,se,Xe);return}if(n.powers.includes("nornThread")){h(Ae),i(Ye=>({...Ye,powers:Ye.powers.filter(L=>L!=="nornThread")}));const Xe=6+se*2;F("success"),W("Нить Норн изменила исход. Ошибка не приведёт к бою. +"+Xe+" ✨"),$e(k,se,Xe);return}h(Ae),F(),D(da[k].name+" мрачнеет: «Что ж — пусть решит сталь!»")},lt=k=>{const Ae=he(k),se=kd[k][Ae],ce=se.a.findIndex((Xe,Ye)=>Ye!==se.c&&Ye!==p);_(ce),g(!0),F(),W("Шёпот ветров уносит один ответ...")},St=k=>{const Ae=da[k],se=n.powers.includes("ashBreath");m(Ae.hp),y(X.hp+(se?25:0)),R(X.en+(se?2:0)),ie(""),x(!1),z(!1),D(se?"Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии.":Ae.name+" поднимает оружие!"),se&&i(ce=>({...ce,powers:ce.powers.filter(Xe=>Xe!=="ashBreath")})),e({t:"fight",id:k})},I=(k,Ae)=>{if($)return;const se=da[k],ce=he(k);let Xe=0,Ye="",L=b,T=M;if(Ae==="hit"&&(Xe=X.str+Z(4),n.powers.includes("fireOath")&&(Xe+=5,i(Le=>({...Le,powers:Le.powers.filter(_e=>_e!=="fireOath")})),Ye="Огненный обет! "),X.id==="berserk"&&v<=X.hp/2&&(Xe*=2,Ye+="Медвежья ярость! "),Ye+="Ты бьёшь: "+X.weapon+" — −"+Xe+" хозяину."),Ae==="rune"){if(b<4){W("Мало энергии для заклинания!");return}L=b-4,Xe=X.en+2+Z(5),Ye="Руническое заклинание вспыхивает: −"+Xe+" хозяину."}Ae==="shield"&&(T=!0,Ye="Ты поднимаешь щит — удар ослабнет.");const Y=u-Xe;if(Y<=0){m(0),R(L),ie("win");const Le=8+ce*2;D("Хозяин повержен! Награда: +"+Le+" ✨"),$e(k,ce,Le);return}let te=se.atk+Z(3),de="";T&&(te=Math.ceil(te*.3),de=" Щит принял большую часть удара."),n.powers.includes("iceOath")&&(te=Math.ceil(te*.65),i(Le=>({...Le,powers:Le.powers.filter(_e=>_e!=="iceOath")})),de+=" Ледяной обет сковал удар врага."),X.id==="dwarf"&&(te=Math.ceil(te*.75));let le=v;if(X.id==="viking"&&!N&&le-te<=0&&(z(!0),te=0,de=" Крылья бури поглотили смертельный удар!"),le=le-te,m(Y),y(Math.max(0,le)),R(L),x(!1),le<=0&&n.powers.includes("yggdrasilCall")){i(Le=>({...Le,powers:Le.powers.filter(_e=>_e!=="yggdrasilCall")})),y(30),D(Ye+" Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");return}if(le<=0){ie("lose"),i(Le=>({...Le,sparks:Math.max(0,Le.sparks-10)})),D(Ye+" "+se.name+" бьёт... Ты пал. Древо возрождает тебя (−10 ✨).");return}D(Ye+de+" "+se.name+" отвечает: −"+te+".")},At=k=>{he(k)>=3||n.artifacts.includes(k)?e({t:"realm",id:k}):e({t:"trial",id:k})},rt=k=>k==="tree"?t.t==="tree"||t.t==="realm":t.t===k,Je=k=>k==="tree"?{t:"tree"}:{t:k};return H.jsxs("div",{className:"app",children:[H.jsx("style",{children:VA}),H.jsxs("div",{className:"hdr",children:[t.t==="tree"&&H.jsx("div",{className:"title",children:"🌳 Мировое Древо Иггдрасиль"}),t.t==="realm"&&H.jsx("button",{className:"back",onClick:()=>K({t:"tree"}),children:"← На Древо"}),t.t==="choose"&&H.jsx("div",{className:"title",children:"🌫️ Выбор судьбы"}),t.t==="hero"&&H.jsx("div",{className:"title",children:"🛡 Герой"}),t.t==="gift"&&H.jsx("div",{className:"title",children:"🎁 Дар"}),t.t==="hall"&&H.jsx("div",{className:"title",children:"🏛️ Чертог"}),t.t==="trial"&&H.jsx("div",{className:"title",children:"🗝 Испытание"}),t.t==="fight"&&H.jsx("div",{className:"title",children:"⚔ Бой"}),H.jsxs("div",{className:"sparks",children:["✨ ",n.sparks," Искр"]})]}),t.t==="choose"&&H.jsxs("div",{className:"scroll choose-screen",children:[H.jsxs("div",{className:"card center choose-intro",children:[H.jsx("div",{className:"big",children:"ᛉ"}),H.jsx("div",{className:"qhead2",children:"Выбери героя"}),H.jsx("p",{className:"dim",children:"Норны прядут нить. Выбери, кто пройдёт путь девяти миров."})]}),Od.map(k=>H.jsxs("button",{className:"hcard"+(r===k.id?" on":""),onClick:()=>{s(k.id),a(""),F()},children:[H.jsx("span",{className:"hface",style:{borderColor:k.color,color:k.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:H.jsx(Mr,{name:k.img,className:"himg"})}),H.jsxs("span",{className:"hinfo",children:[H.jsx("span",{className:"hname",style:{color:k.color},children:k.race}),H.jsxs("span",{className:"hab",children:["🌀 ",k.ability,": ",k.abilityDesc]}),H.jsxs("span",{className:"hst",children:["⚔ ",k.str," • ✨ ",k.en," • ❤ ",k.hp]}),H.jsxs("span",{className:"hw",children:["🗡 ",k.weapon]})]})]},k.id)),r&&H.jsxs("div",{className:"card",children:[H.jsx("div",{className:"qhead2",children:"Имя героя"}),H.jsx("div",{className:"chips",children:(Od.find(k=>k.id===r).gender==="f"?BA:HA).map(k=>H.jsx("button",{className:"chip"+(o===k?" on":""),onClick:()=>{a(k),F()},children:k},k))})]}),H.jsx("button",{className:"btn gold",disabled:!r||!o,onClick:nt,children:"Вступить на путь"})]}),t.t==="tree"&&H.jsxs("div",{className:"maparea",children:[H.jsx("div",{className:"mapwrap",children:H.jsxs("div",{className:"mapcanvas",children:[H.jsx(Mr,{name:"tree",className:"mapimg"}),Kl.map(k=>H.jsxs("button",{className:"marker",style:{left:k.x+"%",top:k.y+"%"},onClick:()=>ne(k),children:[H.jsxs("div",{className:"amulet-wrap",children:[H.jsx("div",{className:"amulet-glow",style:{background:`radial-gradient(circle, ${k.glow}, transparent 70%)`}}),H.jsx("div",{className:"amulet-ring",style:{borderColor:k.color}}),H.jsx("div",{className:"amulet-core",style:{borderColor:k.color,color:k.color,background:`linear-gradient(135deg, ${k.dark}, #0a0a0a)`},children:k.runeSym})]}),H.jsx("span",{className:"mname",style:{color:k.color,borderColor:k.glow},children:k.name})]},k.id))]})}),H.jsx("div",{className:"fadeT"}),H.jsx("div",{className:"fadeB"}),H.jsx("div",{className:"hint",children:"↓ листай Древо вниз • нажми на амулет ↓"})]}),t.t==="tree"&&X&&n.hero&&H.jsxs("button",{className:"herobar",onClick:()=>K({t:"hero"}),children:[H.jsxs("span",{className:"hbface",style:{borderColor:X.color,color:X.color},children:[H.jsx(Mr,{name:X.img,className:"hbimg"}),X.sym]}),H.jsxs("span",{className:"hbname",children:[n.hero.name,H.jsx("i",{children:X.race})]}),H.jsxs("span",{className:"hbst",children:["⚔ ",X.str," ✨ ",X.en," ⏳ ",we()]}),H.jsx("span",{className:"hbwpn",children:"🗡"})]}),t.t==="realm"&&(()=>{const k=Kl.find(Ae=>Ae.id===t.id);if(k.id==="midgard"){if(!X)return null;const Ae=se=>{if(F(),se==="mimir"){n.done.includes("forest:present")?n.done.includes("forest:present:reward")?W("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит."):(i(ce=>({...ce,sparks:ce.sparks+20,done:[...new Set([...ce.done,"forest:present:reward"])]})),F("success"),W("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨")):W("Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»");return}if(se==="norns"){W("Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»");return}if(se==="forge"||se==="blacksmith"){W("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");return}if(se==="house"||se==="elder"){W("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");return}if(se==="port"){W("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");return}if(se==="rune"){W("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");return}if(se==="ashgrove"){W("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");return}if(se==="runefield"){W("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");return}if(se==="oldfarm"){n.done.includes("forest:past")?n.done.includes("forest:past:reward")?W("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса."):(i(ce=>({...ce,sparks:ce.sparks+20,done:[...new Set([...ce.done,"forest:past:reward"])]})),F("success"),W("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨")):W("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");return}if(se==="forestCache"){n.done.includes("forest:cache")?W("Тайник пуст. На камне осталась лишь вырезанная руна."):(i(ce=>({...ce,sparks:ce.sparks+18,done:[...new Set([...ce.done,"forest:cache"])]})),F("success"),W("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно."));return}if(se==="forestWhisper"){n.done.includes("forest:whisper")?W("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова."):(i(ce=>({...ce,sparks:ce.sparks+16,done:[...new Set([...ce.done,"forest:whisper"])]})),F("success"),W("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨"));return}if(se==="forestThread"){n.done.includes("forest:thread")?W("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт."):(i(ce=>({...ce,sparks:ce.sparks+22,done:[...new Set([...ce.done,"forest:thread"])]})),F("success"),W("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨"));return}if(se==="heroHome"){W("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");return}if(se==="hunterCamp"){n.done.includes("forest:camp")?W("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес."):(i(ce=>({...ce,sparks:ce.sparks+14,done:[...new Set([...ce.done,"forest:camp"])]})),F("success"),W("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨"));return}if(se==="deepGrove"){n.done.includes("forest:grove")?W("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже."):(i(ce=>({...ce,sparks:ce.sparks+17,done:[...new Set([...ce.done,"forest:grove"])]})),F("success"),W("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨"));return}if(se==="fallenAsh"){n.done.includes("forest:ash")?W("Старый ясень неподвижен. Под корой всё ещё виден след руны."):(i(ce=>({...ce,sparks:ce.sparks+21,done:[...new Set([...ce.done,"forest:ash"])]})),F("success"),W("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨"));return}if(se==="deer"){W("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");return}if(se==="hoddmimir"){W("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");return}if(se==="ratatosk"){n.done.includes("forest:future")?n.done.includes("forest:future:reward")?W("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор."):(i(ce=>({...ce,sparks:ce.sparks+20,done:[...new Set([...ce.done,"forest:future:reward"])]})),F("success"),W("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨")):W("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");return}if(se==="forestEvent"){n.done.includes("forest:choice")&&W("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");return}if(se==="forestEvent:past"){i(ce=>({...ce,sparks:ce.sparks+12,done:[...new Set([...ce.done,"forest:choice","forest:past"])]})),F("success"),W("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");return}if(se==="forestEvent:present"){i(ce=>({...ce,sparks:ce.sparks+12,done:[...new Set([...ce.done,"forest:choice","forest:present"])]})),F("success"),W("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");return}if(se==="forestEvent:future"){i(ce=>({...ce,sparks:ce.sparks+12,done:[...new Set([...ce.done,"forest:choice","forest:future"])]})),F("success"),W("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");return}if(se==="event"){W("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");return}if(se.startsWith("ritual:")){const ce=se.slice(7),Xe={mimir:"Око Мимира",norn:"Нить Норн",ash:"Дыхание Ясеня",fire:"Огненный обет",ice:"Ледяной обет",ygg:"Зов Иггдрасиля"},L={mimir:"mimirEye",norn:"nornThread",ash:"ashBreath",fire:"fireOath",ice:"iceOath",ygg:"yggdrasilCall"}[ce];if(!L)return;if(n.powers.includes(L)){W(Xe[ce]+" уже пробуждён. Его сила ждёт своего часа.");return}i(Y=>({...Y,powers:[...new Set([...Y.powers,L])],done:[...new Set([...Y.done,"ritual:"+ce])]}));const T={mimir:"Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",norn:"Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",ash:"Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",fire:"Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",ice:"Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",ygg:"Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."};F("success"),W(T[ce]);return}};return H.jsx(XA,{h:X,on:Ae,eventDone:n.done.includes("forest:choice")})}return H.jsxs("div",{className:"content",children:[H.jsx(Mr,{name:k.id,className:"bgimg"}),H.jsx("div",{className:"veil"}),H.jsxs("div",{className:"banner",children:[H.jsx("span",{className:"bemoji",children:k.emoji}),H.jsxs("div",{children:[H.jsx("div",{className:"bname",children:k.name}),H.jsx("div",{className:"btag",children:k.tag})]})]}),H.jsxs("button",{className:"gate",onClick:()=>Ue(k),children:[H.jsxs("span",{className:"gwrap",children:[H.jsx("span",{className:"gate-ring",style:{borderColor:k.color}}),H.jsx("span",{className:"gate-core",style:{borderColor:k.color,color:k.color,background:`radial-gradient(circle, ${k.dark}, #050705 75%)`},children:k.runeSym})]}),H.jsx("span",{className:"mname",style:{color:k.color,borderColor:k.glow},children:n.artifacts.includes(k.id)?"Мир покорён":"Врата мира"})]}),H.jsx("div",{className:"hint",children:"Нажми на врата — хозяин мира ждёт загадок"})]})})(),t.t==="trial"&&(()=>{const k=Kl.find(Xe=>Xe.id===t.id),Ae=da[k.id],se=he(k.id);if(se>=3)return H.jsx("div",{className:"scroll",children:H.jsxs("div",{className:"card center",children:[H.jsx("div",{className:"big",children:"🏺"}),H.jsx("div",{className:"qhead2",children:"Мир покорён!"}),H.jsxs("p",{className:"dim",children:["Артефакт: ",zd[k.id]]}),H.jsx("button",{className:"btn gold",onClick:()=>K({t:"realm",id:k.id}),children:"К вратам"})]})});const ce=kd[k.id][se];return H.jsxs("div",{className:"scroll",children:[H.jsxs("div",{className:"mhead",children:[H.jsxs("span",{className:"mface",style:{borderColor:k.color,color:k.color},children:[H.jsx(Mr,{name:Wg[k.id],className:"himg"}),Ae.sym]}),H.jsx("span",{className:"mname2",style:{color:k.color},children:Ae.name}),H.jsxs("span",{className:"mtitle",children:[Ae.title," • испытание ",se+1," из 3"]})]}),se===0&&H.jsxs("div",{className:"greet",children:["«",Ae.greet,"»"]}),H.jsxs("div",{className:"cloud",children:[H.jsx("div",{className:"riddle",children:ce.q}),ce.a.map((Xe,Ye)=>H.jsx("button",{className:"ans"+(f!==null?Ye===ce.c?" good":Ye===f?" bad":" off":p===Ye?" off":""),onClick:()=>He(k.id,Ye),children:Xe},Ye)),(X==null?void 0:X.id)==="elf"&&!w&&f===null&&H.jsx("button",{className:"btn rune",onClick:()=>lt(k.id),children:"🌀 Шёпот ветров"}),f!==null&&(f===ce.c?H.jsx("button",{className:"btn gold",onClick:()=>At(k.id),children:"Открыть сундук →"}):H.jsx("button",{className:"btn",onClick:()=>St(k.id),children:"⚔ В бой!"}))]})]})})(),t.t==="fight"&&(()=>{const k=Kl.find(se=>se.id===t.id),Ae=da[k.id];return H.jsxs("div",{className:"scroll",children:[H.jsxs("div",{className:"duel",children:[H.jsxs("div",{className:"dside",children:[H.jsxs("span",{className:"dface",style:{borderColor:k.color,color:k.color},children:[H.jsx(Mr,{name:Wg[k.id],className:"himg"}),Ae.sym]}),H.jsx("span",{className:"dname",style:{color:k.color},children:Ae.name}),H.jsx("span",{className:"dhp",children:H.jsx("span",{className:"dhpfill",style:{width:Math.max(0,u/Ae.hp*100)+"%",background:k.color}})}),H.jsxs("span",{className:"dnum",children:[u,"/",Ae.hp]})]}),H.jsx("span",{className:"dvs",children:"⚔"}),H.jsxs("div",{className:"dside",children:[H.jsxs("span",{className:"dface",style:{borderColor:X.color,color:X.color},children:[H.jsx(Mr,{name:X.img,className:"himg"}),X.sym]}),H.jsx("span",{className:"dname",style:{color:X.color},children:n.hero.name}),H.jsx("span",{className:"dhp",children:H.jsx("span",{className:"dhpfill",style:{width:Math.max(0,v/X.hp*100)+"%",background:"#7ee787"}})}),H.jsx("span",{className:"denergy",children:Array.from({length:X.en}).map((se,ce)=>H.jsx("span",{className:"pip"+(ce<b?" on":"")},ce))})]})]}),H.jsx("div",{className:"flog",children:P}),!$&&H.jsxs("div",{className:"acts",children:[H.jsxs("button",{className:"btn gold",onClick:()=>I(k.id,"hit"),children:["⚔ Удар: ",X.weapon]}),H.jsx("button",{className:"btn rune",onClick:()=>I(k.id,"rune"),children:"🌀 Руническое заклинание (−4 ✨)"}),H.jsx("button",{className:"btn shield",onClick:()=>I(k.id,"shield"),children:"🛡 Щит"})]}),$==="win"&&H.jsx("button",{className:"btn gold",onClick:()=>At(k.id),children:"Забрать награду →"}),$==="lose"&&H.jsx("button",{className:"btn ghost",onClick:()=>K({t:"tree"}),children:"Древо возрождает тебя"})]})})(),t.t==="hero"&&X&&n.hero&&H.jsx("div",{className:"scroll",children:H.jsxs("div",{className:"card center",children:[H.jsx("span",{className:"hface bigface",style:{borderColor:X.color,color:X.color,background:"linear-gradient(160deg,#101613,#0a0a0a)"},children:H.jsx(Mr,{name:X.img,className:"himg"})}),H.jsxs("div",{className:"qhead2",style:{color:X.color},children:[n.hero.name," • ",X.race]}),H.jsxs("div",{className:"stats",children:[H.jsxs("div",{className:"stat",children:[H.jsxs("b",{children:["⚔ ",X.str]}),H.jsx("span",{children:"сила"})]}),H.jsxs("div",{className:"stat",children:[H.jsxs("b",{children:["✨ ",X.en]}),H.jsx("span",{children:"энергия"})]}),H.jsxs("div",{className:"stat",children:[H.jsxs("b",{children:["❤ ",X.hp]}),H.jsx("span",{children:"здоровье"})]})]}),H.jsxs("div",{className:"hrow",children:["🗡 Оружие: ",H.jsx("b",{children:X.weapon})]}),H.jsxs("div",{className:"hrow",children:["🌀 ",X.ability,": ",X.abilityDesc]}),H.jsxs("div",{className:"hrow",children:["✨ Искр: ",H.jsx("b",{children:n.sparks})," • 🏺 Артефактов: ",H.jsxs("b",{children:[n.artifacts.length,"/9"]})]}),n.artifacts.length>0&&H.jsxs("div",{className:"hrow",children:["🏺 ",n.artifacts.map(k=>zd[k]).join(", ")]})]})}),t.t==="gift"&&(()=>{const k=n.gift===ua(),se=(n.gift?Math.round((Date.parse(ua())-Date.parse(n.gift))/864e5):99)<=2?n.streak%7+1:1,ce=k?n.streak:se;return H.jsxs("div",{className:"scroll",children:[H.jsxs("div",{className:"card center",children:[H.jsx("div",{className:"big",children:"🎁"}),H.jsx("div",{className:"qhead2",children:"Дар Древа"}),H.jsx("p",{className:"dim",children:"Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново."}),H.jsx("div",{className:"days",children:Fd.map((Xe,Ye)=>H.jsxs("span",{className:"day"+(Ye+1===ce?" on":Ye+1<ce&&k?" done":""),children:[H.jsx("b",{children:Xe}),"день ",Ye+1]},Ye))}),k?H.jsx("button",{className:"btn",disabled:!0,children:"Дар получен • вернись завтра"}):H.jsxs("button",{className:"btn gold",onClick:Ee,children:["Забрать дар +",Fd[se-1]," ✨"]})]}),H.jsxs("div",{className:"card center",children:[H.jsx("div",{className:"big",children:"⏳"}),H.jsx("div",{className:"qhead2",children:"Дозор героя"}),H.jsx("p",{className:"dim",children:"Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов."}),H.jsxs("button",{className:"btn gold",onClick:me,children:["Завершить дозор · +",we()," ✨"]})]})]})})(),t.t==="hall"&&H.jsx("div",{className:"scroll",children:H.jsxs("div",{className:"card center",children:[H.jsx("div",{className:"big",children:"🏛️"}),H.jsx("div",{className:"qhead2",children:"Чертог путника"}),H.jsxs("div",{className:"stats",children:[H.jsxs("div",{className:"stat",children:[H.jsxs("b",{children:["✨ ",n.sparks]}),H.jsx("span",{children:"Искр"})]}),H.jsxs("div",{className:"stat",children:[H.jsxs("b",{children:["🏺 ",n.artifacts.length,"/9"]}),H.jsx("span",{children:"артефакты"})]})]}),H.jsxs("div",{className:"rank",children:["🏆 Ранг: ",zA(n.sparks)]}),n.hero&&X&&H.jsxs("p",{className:"dim",children:["Герой: ",n.hero.name," • ",X.race," • испытаний пройдено: ",n.trials.length]})]})}),n.hero&&H.jsx("div",{className:"nav",children:kA.map(k=>H.jsxs("button",{className:"navbtn"+(rt(k.id)?" on":""),onClick:()=>K(Je(k.id)),children:[H.jsx("span",{className:"ic",children:k.ic}),k.t]},k.id))}),l&&H.jsx("div",{className:"toast",children:l})]})}rx(document.getElementById("root")).render(H.jsx(jA,{}));
